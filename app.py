import datetime, json
from flask_restful import reqparse, abort, Api, Resource, request
from flask_cors import CORS
from flask import Flask, session ,render_template
from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.json_util import dumps
from werkzeug.security import check_password_hash, generate_password_hash, safe_str_cmp
from flask_jwt_extended import (JWTManager, create_access_token, create_refresh_token, decode_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from bson.objectid import ObjectId
from string_search import Search
from timeline import View
app = Flask(__name__)
CORS(app)
api = Api(app)
app.config.from_mapping(
    SECRET_KEY='dev',
)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'
jwt = JWTManager(app)
mongo = PyMongo(app)


parser = reqparse.RequestParser()
parser.add_argument('user_id')
parser.add_argument('user_pw')
parser.add_argument('user_que')
parser.add_argument('user_ans')
parser.add_argument('access_token')
parser.add_argument('title')
parser.add_argument('contents')
parser.add_argument('_id')
parser.add_argument('type')
parser.add_argument('post_id')
parser.add_argument('comment_id')
parser.add_argument('word')
parser.add_argument('option')




def auth(db):
    auth_header = request.headers.get('Authorization')
    auth_token = {}
    if auth_header:
        auth_token = auth_header.split(" ")[1]
    token_user = decode_token(auth_token)
    user_id = token_user['identity']
    collection = db.users
    user = collection.find({'id': user_id})
    return user

def db_manager():
    client = MongoClient('mongodb://localhost:27017')
    db = client.pookle
    return db



class UserList(Resource):
    def get(self):
        db = db_manager()
        collection = db.users
        users = dumps(collection.find())
        MongoClient('mongodb://localhost:27017').close()
        return users
    def post(self):
        args = parser.parse_args()
        user_id = args['user_id']
        user_pw = args['user_pw']
        user_que = args['user_que']
        user_ans = args['user_ans']
        db = db_manager()
        collection = db.users
        duplicate = dumps(collection.find({"user_id": user_id}))[1]
        if duplicate == '{':
            return "Duplicate accounts"
        user = {
            "id": user_id,
            "pw": generate_password_hash(user_pw),
            "que": user_que,
            "ans": generate_password_hash(user_ans),
            "nickname": user_id,
            "fav_timeline":[],
            "fav_board":[],
            "comment":[],
            "fav_tag": [],
            "reg_date": datetime.datetime.now(),
            "last_date": datetime.datetime.now(),
            "rank":0
        }
        collection.insert(user)
        MongoClient('mongodb://localhost:27017').close()
        access_token = create_access_token(identity=user_id, expires_delta=False)
        refresh_token = create_refresh_token(identity=user_id, expires_delta=False)
        return {
            'message': 'User {} was created'.format(args['user_id']),
            'access_token': access_token,
            'refresh_token': refresh_token
        }

class UserDetail(Resource):
    def get(self):
        db = db_manager()
        collection = db.users
        user = auth(db)
        mongo_user = collection.find({'id': user[0]['id']})
        dict_user = json.loads(dumps(mongo_user))
        json_user = {
            "_id": dict_user[0]['_id'],
            "id": dict_user[0]['id'],
            "nickname" : dict_user[0]['nickname'],
            "fav_timeline" : dict_user[0]['fav_timeline'],
            "fav_board" : dict_user[0]['fav_board'],
            "fav_tag": dict_user[0]['fav_tag'],
            "rank":dict_user[0]['rank']
        }
        print(json_user)
        MongoClient('mongodb://localhost:27017').close()
        return json_user

class editNick(Resource):
    def put(self):
        parser.add_argument('nickname')
        args = parser.parse_args()
        new_nickname = args['nickname']
        db = db_manager()
        collection = db.users
        user = auth(db)
        collection.update(
            {'id': user[0]['id']},
            {'$set': {'nickname': new_nickname}}
        )
        MongoClient('mongodb://localhost:27017').close()




class changePasswd(Resource):
    def put(self):
        db = db_manager()
        collection = db.users
        user = auth(db)
        parser.add_argument('old_pw')
        parser.add_argument('new_pw')
        args = parser.parse_args()
        old_pw = args['old_pw']
        new_pw = args['new_pw']
        if check_password_hash(user[0]['user_pw'], old_pw):
            collection.update(
                {'id': user[0]['id']},
                {'$set': {'pw': generate_password_hash(new_pw)}}
            ).close()
            return 'success'
        else:
            MongoClient('mongodb://localhost:27017').close()
            return 'fail'

class favriteTag(Resource):
    def post(self):
        parser.add_argument('fav_tag')
        args = parser.parse_args()
        fav_tag = args['fav_tag']
        db = db_manager()
        collection = db.users
        user = auth(db)
        collection.update(
            {'id': user[0]['id']},
            {'$push': {'fav_tag': fav_tag}}
        )
        MongoClient('mongodb://localhost:27017').close()


    def put(self):
        parser.add_argument('fav_tag')
        args = parser.parse_args()
        fav_tag = args['fav_tag']
        db = db_manager()
        collection = db.users
        user = auth(db)
        collection.update(
            {'id': user[0]['id']},
            {'$pull': {'fav_tag': fav_tag}}
        )
        MongoClient('mongodb://localhost:27017').close()


class FavTimeline(Resource):
    def put(self):
        parser.add_argument('$oid')
        args = parser.parse_args()
        _id = args['$oid']
        db = db_manager()
        timeline_col = db.timeline
        user = auth(db)
        timeline_col.update(
            {'_id': ObjectId(_id)},
            {'$push':{
                'fav': {
                    'user_id':user[0]['_id'],
                    'user_name':user[0]['id']
                    }
                },
             '$inc': {'fav_cnt':1}
            }
        )
        target = timeline_col.find({'_id':ObjectId(_id)})
        db.users.update(
            {'_id': ObjectId(user[0]['_id'])},
            {'$push':{
                'fav_timeline':{
                    '_id':_id,
                    'title':target[0]['title'],
                    'date':target[0]['date']
                }
            }
        }
        )

class UnFavTimeline(Resource):
    def put(self):
        parser.add_argument('$oid')
        args = parser.parse_args()
        _id = args['$oid']
        db = db_manager()
        timeline_col = db.timeline
        user = auth(db)
        timeline_col.update(
            {'_id': ObjectId(_id)},
            {'$pull':{
                'fav': {'user_id':user[0]['_id']}
            },
             '$inc': {'fav_cnt':-1}
            }
        )
        db.users.update(
            {'_id': ObjectId(user[0]['_id'])},
            {'$pull':{
                'fav_timeline':{'_id':_id}
            }
        }
        )



class Login(Resource):
    def post(self):
        args = parser.parse_args()
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        collection = db.users
        users = collection.find()
        user_id = args['user_id']
        user_pw = args['user_pw']
        for user in users:
            if user['id'] == user_id:
                if check_password_hash(user['pw'], user_pw):
                    client.close()
                    access_token = create_access_token(identity=args['user_id'], expires_delta=False)
                    refresh_token = create_refresh_token(identity=args['user_id'], expires_delta=False)
                    return {
                        'message': 'User {} was created'.format(args['user_id']),
                        'access_token': access_token,
                        'refresh_token': refresh_token
                    }
        MongoClient('mongodb://localhost:27017').close()
        return False


class Auth(Resource):
    def post(self):
        args = parser.parse_args()
        access_token = args['access_token']
        user_id = decode_token(access_token)['identity']
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        collection = db.users
        users = collection.find()
        for user in users:
            if user['id'] == user_id:
                current_user = {
                    'id': user['id'],
                }
                return current_user
        return {'id': ''}


class TokenRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        current_user = get_jwt_identity()
        access_token = create_access_token(identity = current_user, expires_delta=False)
        return {'access_token': access_token}

class Timeline(Resource):
    def get(self, option):
        db= db_manager()
        include_tag = [
            # 메인
            ["기타", "공지", "거래", "대나무숲", "반짝정원", "지식인", "장학"],
            # 진로
            ["창업지원단", "취업", "창업", "진로"],
            # 스터디&모임
            ['스터디&모임', "특강", "세미나", "봉사", "동아리"],
            # 알바&구인
            ["조교", "과외&강사", "알바&구인"],
            # 행사&대외활동
            ["행사", "봉사", "공모전&대외활동", "교육&설명회", "멘토링"],
        ]
        list = View(db,include_tag[option],[])
        json_list = dumps(list)
        return json_list

        '''client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        collection = db.timeline
        timeline_posts = dumps(collection.find().sort([("date", -1), ("_id", 1)]).limit(20))
        client.close()
        return timeline_posts'''

    def post(self):
            args = parser.parse_args()
            title = args['title']
            contents = args['contents']
            client = MongoClient('mongodb://localhost:27017')
            db = client.pookle
            user = auth(db)
            post = {
                "author": user[0]['_id'],
                "contents": contents,
                "fav_cnt":0,
                "comment":[],
                "date":datetime.datetime.now()
            }
            db.board.insert(post)
            client.close()
            return 0
    def put(self):
        parser.add_argument('$oid')
        args = parser.parse_args()
        _id = args['$oid']
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        db.timeline.remove({'_id': ObjectId(_id)})



class renewal_db(Resource):
    def get(self):
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        db.timeline.remove({})
        for col in db.collection_names():
            if(col[0:2] == 'PK'):
                for document in db[col].find():
                    db.timeline.insert(document)
        db.timeline.update(
            {'fav_cnt':{"$exists":False}},
            {'$set':{'fav_cnt':0}},
            upsert=True, multi=True
        )
        return 0

class RemoveTimeline(Resource):
    def get(self):
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        for col in db.collection_names():
            if(col[0:2] == 'PK'):
                db[col].remove({})
        db.recent_date.remove({})
        db.SEARCH_PK_pknulec_lecture.remove({})


class Board(Resource):
    def get(self):
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        collection = db.board
        board_posts = dumps(collection.find().sort([("date", -1), ("_id", 1)]).limit(20))
        before_data =  json.loads(board_posts)
        for data in before_data:
            data_ = json.loads(dumps(db.users.find({"_id":ObjectId(data['author']['$oid'])},{"nickname":1,"_id":0})))
            data['author'] = data_[0]['nickname']
            for comment_data in data['comment']:
                user_nick = json.loads(dumps(db.users.find({"_id":ObjectId(comment_data['_id']['$oid'])},{"nickname":1,"_id":0})))
                comment_data['author'] = user_nick[0]['nickname']
        client.close()
        after_data = dumps(before_data)
        return after_data
    def post(self):
        args = parser.parse_args()
        contents = args['contents']
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        user = auth(db)
        post = {
            "author": user[0]['_id'],
            "contents": contents,
            "fav_cnt":0,
            "comment":[],
            "date":datetime.datetime.now()
        }
        db.board.insert(post)
        client.close()
        return 0

class Comment(Resource):
    def post(self):
        args = parser.parse_args()
        contents = args['contents']
        _id = args['_id']
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        user = auth(db)
        db.board.update(
            {"_id":ObjectId(_id) },
            {"$push":{
                "comment":{
                    "_id":user[0]['_id'],
                    "contents": contents,
                    "date":datetime.datetime.now()
                }
            }
            }
        )
        client.close()
        return 0
    def put(self):
        args = parser.parse_args()
        type = args['type']
        post_id = args['post_id']
        comment_id = args['comment_id']
        client = MongoClient('mongodb://localhost:27017')
        db = client.pookle
        if type == 'delete':
            db.board.update(
                {'_id': ObjectId(post_id)},
                {'$pull': {
                    "comment":{
                        '_id': ObjectId(comment_id)
                    }
                }
                }
            )
        client.close()
        return 0

class FavBoard(Resource):
    def put(self):
        parser.add_argument('$oid')
        args = parser.parse_args()
        _id = args['$oid']
        db = db_manager()
        user = auth(db)
        db.board.update(
            {'_id': ObjectId(_id)},
            {'$push': {
                'fav': {
                    'user_id': user[0]['_id'],
                    'user_name': user[0]['id']
                }
            },
                '$inc': {'fav_cnt': 1}
            }
        )
        target = db.board.find({'_id': ObjectId(_id)})
        db.users.update(
            {'_id': ObjectId(user[0]['_id'])},
            {'$push': {
                'fav_board': {
                    '_id': _id,
                    'contents': target[0]['contents'],
                    'date': target[0]['date']
                }
            }
            }
        )
        return 0

class UnFavBoard(Resource):
    def put(self):
        parser.add_argument('$oid')
        args = parser.parse_args()
        _id = args['$oid']
        db = db_manager()
        user = auth(db)
        db.board.update(
            {'_id': ObjectId(_id)},
            {'$pull':{
                'fav': {'user_id':user[0]['_id']}
            },
             '$inc': {'fav_cnt':-1}
            }
        )
        db.users.update(
            {'_id': ObjectId(user[0]['_id'])},
            {'$pull':{
                'fav_board':{'_id':_id}
            }
        }
        )

class WordSearch(Resource):
    def post(self):
        args = parser.parse_args()
        word = args['word']
        db = db_manager()
        list = Search(db, word)
        print(list)
        return 0

api.add_resource(UserList, '/users')
api.add_resource(UserDetail,'/user')
api.add_resource(editNick,'/user/nick')
api.add_resource(changePasswd, '/user/pw')
api.add_resource(favriteTag, '/user/fav-tag')
api.add_resource(Login, '/user/login')
api.add_resource(Auth, '/auth')
api.add_resource(Board, '/board')
api.add_resource(Comment, '/board/comment')
api.add_resource(Timeline, '/timeline/<int:option>')
api.add_resource(FavTimeline, '/timeline/fav')
api.add_resource(UnFavTimeline, '/timeline/un-fav')
api.add_resource(FavBoard, '/board/fav')
api.add_resource(UnFavBoard, '/board/un-fav')
api.add_resource(WordSearch, '/search')


api.add_resource(RemoveTimeline,'/remove-timeline')

api.add_resource(renewal_db,'/renewal')
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')