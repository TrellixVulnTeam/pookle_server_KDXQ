(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<all-header><all-header>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _uni_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//uni-routing.module */ "./src/app/uni-routing.module.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _user_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/setting/setting.component */ "./src/app/user/setting/setting.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _board_write_write_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./board/write/write.component */ "./src/app/board/write/write.component.ts");
/* harmony import */ var _user_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/login-register/login-register.component */ "./src/app/user/login-register/login-register.component.ts");
/* harmony import */ var _user_start_sign_up_start_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/start-sign-up/start-sign-up.component */ "./src/app/user/start-sign-up/start-sign-up.component.ts");
/* harmony import */ var _user_find_account_find_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/find-account/find-account.component */ "./src/app/user/find-account/find-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TimelineComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_9__["BoardComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                _user_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__["SettingComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_12__["StatsComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_13__["ConfigComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _board_write_write_component__WEBPACK_IMPORTED_MODULE_15__["WriteComponent"],
                _user_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_16__["LoginRegisterComponent"],
                _user_start_sign_up_start_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["StartSignUpComponent"],
                _user_find_account_find_account_component__WEBPACK_IMPORTED_MODULE_18__["FindAccountComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _uni_routing_module__WEBPACK_IMPORTED_MODULE_7__["UniRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#board-container{\r\n    margin-top:100px;\r\n}\r\n#write{\r\n    margin-bottom:10px;\r\n    position: relative;\r\n    left:90%;\r\n}\r\n.nickname{\r\n    display: inline-block;\r\n}\r\n.post{\r\n    width:700px;\r\n    min-height:300px;\r\n    max-height:800px;\r\n    padding:15px 15px 10px;\r\n    margin-bottom: 30px;\r\n\r\n    border:1px solid gray;\r\n    background-color: white;\r\n\r\n}\r\n.align-right{\r\n    display: inline-block;\r\n    position: relative;\r\n    left:85%;\r\n    text-align:right;\r\n}\r\n.post .time{\r\n    color:darkgray;\r\n    font-size:10px;\r\n\r\n}\r\n.post .post-file-name, .post .post-source{\r\n    display:block;\r\n    text-align:right;\r\n    font-size:12px;\r\n}\r\n.post .post-contents{\r\n    min-height:110px;\r\n    max-height:200px;\r\n    margin-top:20px;\r\n    overflow-x:hidden;\r\n    overflow-y:hidden;\r\n    margin-bottom:20px;\r\n\r\n}\r\n.like-div{\r\n    display: inline-block;\r\n    padding:5px;\r\n\r\n}\r\n.like-btn{\r\n    background-color:white;\r\n    border:1px solid gray;\r\n    border-radius: 5px;\r\n    font-size:30px;\r\n}\r\n.like-span{\r\n    font-size:30px;\r\n}\r\n.comment-div{\r\n    border-top:solid rgb(210, 210, 210) 0.5px;\r\n    padding-top:5px;\r\n    padding-bottom: 5px;\r\n    margin-top:10px;\r\n}\r\n.comment-list{\r\n    margin-top:10px;\r\n}\r\n.comment{\r\n    margin-bottom:5px;\r\n    padding:3px 8px;\r\n    border:0;\r\n    border-radius: 5px;\r\n    background-color: rgb(240, 240, 240);\r\n}\r\n.name{\r\n    font-size:15px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"board-container\">\n    <a routerLink=\"/board/write\" id=\"write\"class=\"btn btn-secondary\">글쓰기</a> \n\n    <div>\n    <div class=\"post container\">\n        <h3 class=\"nickname\">죙 재</h3>\n        <span class=\"time\"> 1시간전</span>\n        <div class=\"post-contents\"> 이게 무슨일이야??/ 진짜??? 부경대학교 너무좋다 >_  </div>\n        <div>\n            <button class=\"like-btn align-right\" type=\"button\">\n                <span class=\"fas fa-thumbs-up\"></span>\n                <span class=\"like-span\">34</span>\n            </button>\n        </div>\n        <div class=\"comment-div\">\n            <a  class=\"toggle-comment\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">댓글 5개 보기</a>\n            <div class=\"comment-list\" [ngbCollapse]=\"isCollapsed\">\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <label>IML : &nbsp;</label>\n                <input class=\"comment-textarea\" type=\"textarea\" placeholder=\"댓글을 입력해주세요.\" style=\"width:430px; margin:3px 0px\">\n                <button type=\"button\"> <span class=\"fas fa-comment\"></span></button>\n            </div>\n        </div>\n    </div>\n    <br>\n    </div>\n        <div>\n    <div class=\"post container\">\n        <h3 class=\"nickname\">죙 재</h3>\n        <span class=\"time\"> 1시간전</span>\n        <div class=\"post-contents\"> 이게 무슨일이야??/ 진짜??? 부경대학교 너무좋다 >_  </div>\n        <div>\n            <button class=\"like-btn align-right\" type=\"button\">\n                <span class=\"fas fa-thumbs-up\"></span>\n                <span class=\"like-span\">34</span>\n            </button>\n        </div>\n        <div class=\"comment-div\">\n            <a  class=\"toggle-comment\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">댓글 5개 보기</a>\n            <div class=\"comment-list\" [ngbCollapse]=\"isCollapsed\">\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <label>IML : &nbsp;</label>\n                <input class=\"comment-textarea\" type=\"textarea\" placeholder=\"댓글을 입력해주세요.\" style=\"width:430px; margin:3px 0px\">\n                <button type=\"button\"> <span class=\"fas fa-comment\"></span></button>\n            </div>\n        </div>\n    </div>\n    <br>\n    </div>\n        <div>\n    <div class=\"post container\">\n        <h3 class=\"nickname\">죙 재</h3>\n        <span class=\"time\"> 1시간전</span>\n        <div class=\"post-contents\"> 이게 무슨일이야??/ 진짜??? 부경대학교 너무좋다 >_  </div>\n        <div>\n            <button class=\"like-btn align-right\" type=\"button\">\n                <span class=\"fas fa-thumbs-up\"></span>\n                <span class=\"like-span\">34</span>\n            </button>\n        </div>\n        <div class=\"comment-div\">\n            <a  class=\"toggle-comment\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">댓글 5개 보기</a>\n            <div class=\"comment-list\" [ngbCollapse]=\"isCollapsed\">\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <p class=\"comment\"><span class=\"name\">죙 재</span>&nbsp;ㄹㅇㄹㅇ ㅈㄴ 좋음 ㅇㅈㅇㅈ? 아 곧개강 <span class=\"text-muted\">10분 전</span></p>\n                <label>IML : &nbsp;</label>\n                <input class=\"comment-textarea\" type=\"textarea\" placeholder=\"댓글을 입력해주세요.\" style=\"width:430px; margin:3px 0px\">\n                <button type=\"button\"> <span class=\"fas fa-comment\"></span></button>\n            </div>\n        </div>\n    </div>\n    <br>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        this.isCollapsed = true;
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/board/write/write.component.css":
/*!*************************************************!*\
  !*** ./src/app/board/write/write.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:100px;\r\n    padding:0px 50px;\r\n}\r\n#write{\r\n    margin-bottom:10px;\r\n    position: relative;\r\n    left:90%;\r\n}\r\n.post{\r\n    width:100%;\r\n    min-height:350px;\r\n    max-height:500px;\r\n    padding:15px;\r\n    margin-bottom: 30px;\r\n\r\n    border:1px solid gray;\r\n    background-color: white;\r\n\r\n}\r\n.post .post-date{\r\n    font-size:10px;\r\n    color:darkgray;\r\n}\r\n.title-label{\r\n    display: inline-block;\r\n    width:5%;\r\n}\r\n.title-box{\r\n    width:95%;\r\n}\r\n.post .post-contents{\r\n    min-height:110px;\r\n    max-height:400px;\r\n    margin-top:20px;\r\n    overflow-x:hidden;\r\n    overflow-y:hidden;\r\n    margin-bottom:20px;\r\n\r\n}\r\n.content{\r\n    width:100%;\r\n}\r\n.save{\r\n    margin-left:90%;\r\n    font-size:30px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/board/write/write.component.html":
/*!**************************************************!*\
  !*** ./src/app/board/write/write.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>글쓰기</h1>\n    <div class=\"post\">\n      <div><span class=\"title-label\">제목 : </span><input type=\"text\" class=\"title-box\"></div>\n      <div class=\"post-contents\">\n        <span>내용 : </span>\n        <textarea class=\"content\" rows=\"10\" cols=\"90\" placeholder=\"최대 500자까지 작성해주세요\"></textarea>\n      </div>\n      <input class=\"btn btn-secondary save\" type=\"submit\" value=\"저장\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/board/write/write.component.ts":
/*!************************************************!*\
  !*** ./src/app/board/write/write.component.ts ***!
  \************************************************/
/*! exports provided: WriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteComponent", function() { return WriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WriteComponent = /** @class */ (function () {
    function WriteComponent() {
    }
    WriteComponent.prototype.ngOnInit = function () {
    };
    WriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'write',
            template: __webpack_require__(/*! ./write.component.html */ "./src/app/board/write/write.component.html"),
            styles: [__webpack_require__(/*! ./write.component.css */ "./src/app/board/write/write.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WriteComponent);
    return WriteComponent;
}());



/***/ }),

/***/ "./src/app/config/config.component.css":
/*!*********************************************!*\
  !*** ./src/app/config/config.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  config works!\n</p>\n"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/config/config.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(configService) {
        this.configService = configService;
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent.prototype.showConfig = function () {
        var _this = this;
        this.configService.getConfig()
            .subscribe(function (data) { return _this.config = __assign({}, data); });
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/config/config.service.ts":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.configUrl = 'assets/config.json';
    }
    ConfigService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Agency v5.0.1 (https://startbootstrap.com/template-overviews/agency)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)\r\n */\r\n body {\r\n    overflow-x: hidden;\r\n    font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n p {\r\n    line-height: 1.75;\r\n  }\r\n a {\r\n    color: #fed136;\r\n  }\r\n a:hover {\r\n    color: #fec503;\r\n  }\r\n .text-primary {\r\n    color: #fed136 !important;\r\n  }\r\n h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-weight: 700;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n #mainNav .navbar-toggler {\r\n    font-size: 12px;\r\n    right: 0;\r\n    padding: 13px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    border: 0;\r\n    background-color: #fed136;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n #mainNav .navbar-brand {\r\n    color: #fed136;\r\n    font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\r\n    color: #fec503;\r\n  }\r\n #mainNav .navbar-nav .nav-item .nav-link {\r\n    font-size: 90%;\r\n    font-weight: 400;\r\n    padding: 0.75em 0;\r\n    letter-spacing: 1px;\r\n    color: white;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n #mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {\r\n    color: #fed136;\r\n  }\r\n @media (min-width: 992px) {\r\n    #mainNav {\r\n      transition: padding-top 0.3s, padding-bottom 0.3s;\r\n      border: none;\r\n      background-color: transparent;\r\n    }\r\n    #mainNav .navbar-brand {\r\n      font-size: 1.75em;\r\n      transition: all 0.3s;\r\n    }\r\n    #mainNav .navbar-nav .nav-item .nav-link {\r\n      padding: 1.1em 1em !important;\r\n    }\r\n    #mainNav.navbar-shrink {\r\n      padding-top: 0;\r\n      padding-bottom: 0;\r\n      background-color: #212529;\r\n    }\r\n    #mainNav.navbar-shrink .navbar-brand {\r\n      font-size: 1.25em;\r\n      padding: 12px 0;\r\n    }\r\n  }\r\n #mainNav {\r\n    background-color: #212529;\r\n  } \r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\n\n<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" id=\"mainNav\">\n    <div class=\"container\">\n      <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">PooKle</a>\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        Menu\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav text-uppercase ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/timeline\">Timeline</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/board\">Board</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/user/sign-in\">Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/user/setting\">Account</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'all-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/start/css/agency.css":
/*!**************************************!*\
  !*** ./src/app/start/css/agency.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Agency v5.0.1 (https://startbootstrap.com/template-overviews/agency)\n * Copyright 2013-2018 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)\n */\n\nbody {\n  overflow-x: hidden;\n  font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\np {\n  line-height: 1.75;\n}\n\na {\n  color: #fed136;\n}\n\na:hover {\n  color: #fec503;\n}\n\n.text-primary {\n  color: #fed136 !important;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nsection {\n  padding: 100px 0;\n}\n\nsection h2.section-heading {\n  font-size: 40px;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n\nsection h3.section-subheading {\n  font-size: 16px;\n  font-weight: 400;\n  font-style: italic;\n  margin-bottom: 75px;\n  text-transform: none;\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\n@media (min-width: 768px) {\n  section {\n    padding: 150px 0;\n  }\n}\n\n.btn {\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  font-weight: 700;\n}\n\n.btn-xl {\n  font-size: 18px;\n  padding: 20px 40px;\n}\n\n.btn-primary {\n  background-color: #fed136;\n  border-color: #fed136;\n}\n\n.btn-primary:active, .btn-primary:focus, .btn-primary:hover {\n  background-color: #fec810 !important;\n  border-color: #fec810 !important;\n  color: white;\n}\n\n.btn-primary:active, .btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;\n}\n\n::-moz-selection {\n  background: #fed136;\n  text-shadow: none;\n}\n\n::selection {\n  background: #fed136;\n  text-shadow: none;\n}\n\nimg::-moz-selection {\n  background: transparent;\n}\n\nimg::selection {\n  background: transparent;\n}\n\nimg::-moz-selection {\n  background: transparent;\n}\n\n#mainNav {\n  background-color: #212529;\n}\n\n#mainNav .navbar-toggler {\n  font-size: 12px;\n  right: 0;\n  padding: 13px;\n  text-transform: uppercase;\n  color: white;\n  border: 0;\n  background-color: #fed136;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\n#mainNav .navbar-brand {\n  color: #fed136;\n  font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\n#mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n  color: #fec503;\n}\n\n#mainNav .navbar-nav .nav-item .nav-link {\n  font-size: 90%;\n  font-weight: 400;\n  padding: 0.75em 0;\n  letter-spacing: 1px;\n  color: white;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\n#mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {\n  color: #fed136;\n}\n\n@media (min-width: 992px) {\n  #mainNav {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    transition: padding-top 0.3s, padding-bottom 0.3s;\n    border: none;\n    background-color: transparent;\n  }\n  #mainNav .navbar-brand {\n    font-size: 1.75em;\n    transition: all 0.3s;\n  }\n  #mainNav .navbar-nav .nav-item .nav-link {\n    padding: 1.1em 1em !important;\n  }\n  #mainNav.navbar-shrink {\n    padding-top: 0;\n    padding-bottom: 0;\n    background-color: #212529;\n  }\n  #mainNav.navbar-shrink .navbar-brand {\n    font-size: 1.25em;\n    padding: 12px 0;\n  }\n}\n\nheader.masthead {\n  text-align: center;\n  color: white;\n  background-image: url('header-bg.jpg');\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center center;\n  background-size: cover;\n}\n\nheader.masthead .intro-text {\n  padding-top: 150px;\n  padding-bottom: 100px;\n}\n\nheader.masthead .intro-text .intro-lead-in {\n  font-size: 22px;\n  font-style: italic;\n  line-height: 22px;\n  margin-bottom: 25px;\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nheader.masthead .intro-text .intro-heading {\n  font-size: 50px;\n  font-weight: 700;\n  line-height: 50px;\n  margin-bottom: 25px;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\n@media (min-width: 768px) {\n  header.masthead .intro-text {\n    padding-top: 300px;\n    padding-bottom: 200px;\n  }\n  header.masthead .intro-text .intro-lead-in {\n    font-size: 40px;\n    font-style: italic;\n    line-height: 40px;\n    margin-bottom: 25px;\n    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n  header.masthead .intro-text .intro-heading {\n    font-size: 75px;\n    font-weight: 700;\n    line-height: 75px;\n    margin-bottom: 50px;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n}\n\n.service-heading {\n  margin: 15px 0;\n  text-transform: none;\n}\n\n#portfolio .portfolio-item {\n  right: 0;\n  margin: 0 0 15px;\n}\n\n#portfolio .portfolio-item .portfolio-link {\n  position: relative;\n  display: block;\n  max-width: 400px;\n  margin: 0 auto;\n  cursor: pointer;\n}\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: all ease 0.5s;\n  opacity: 0;\n  background: rgba(254, 209, 54, 0.9);\n}\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover:hover {\n  opacity: 1;\n}\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  height: 20px;\n  margin-top: -12px;\n  text-align: center;\n  color: white;\n}\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i {\n  margin-top: -12px;\n}\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4 {\n  margin: 0;\n}\n\n#portfolio .portfolio-item .portfolio-caption {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 25px;\n  text-align: center;\n  background-color: #fff;\n}\n\n#portfolio .portfolio-item .portfolio-caption h4 {\n  margin: 0;\n  text-transform: none;\n}\n\n#portfolio .portfolio-item .portfolio-caption p {\n  font-size: 16px;\n  font-style: italic;\n  margin: 0;\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\n#portfolio * {\n  z-index: 2;\n}\n\n@media (min-width: 767px) {\n  #portfolio .portfolio-item {\n    margin: 0 0 30px;\n  }\n}\n\n.portfolio-modal {\n  padding-right: 0px !important;\n}\n\n.portfolio-modal .modal-dialog {\n  margin: 1rem;\n  max-width: 100vw;\n}\n\n.portfolio-modal .modal-content {\n  padding: 100px 0;\n  text-align: center;\n}\n\n.portfolio-modal .modal-content h2 {\n  font-size: 3em;\n  margin-bottom: 15px;\n}\n\n.portfolio-modal .modal-content p {\n  margin-bottom: 30px;\n}\n\n.portfolio-modal .modal-content p.item-intro {\n  font-size: 16px;\n  font-style: italic;\n  margin: 20px 0 30px;\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\n.portfolio-modal .modal-content ul.list-inline {\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n\n.portfolio-modal .modal-content img {\n  margin-bottom: 30px;\n}\n\n.portfolio-modal .modal-content button {\n  cursor: pointer;\n}\n\n.portfolio-modal .close-modal {\n  position: absolute;\n  top: 25px;\n  right: 25px;\n  width: 75px;\n  height: 75px;\n  cursor: pointer;\n  background-color: transparent;\n}\n\n.portfolio-modal .close-modal:hover {\n  opacity: 0.3;\n}\n\n.portfolio-modal .close-modal .lr {\n  /* Safari and Chrome */\n  z-index: 1051;\n  width: 1px;\n  height: 75px;\n  margin-left: 35px;\n  /* IE 9 */\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  background-color: #212529;\n}\n\n.portfolio-modal .close-modal .lr .rl {\n  /* Safari and Chrome */\n  z-index: 1052;\n  width: 1px;\n  height: 75px;\n  /* IE 9 */\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  background-color: #212529;\n}\n\n.timeline {\n  position: relative;\n  padding: 0;\n  list-style: none;\n}\n\n.timeline:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 40px;\n  width: 2px;\n  margin-left: -1.5px;\n  content: '';\n  background-color: #e9ecef;\n}\n\n.timeline > li {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 50px;\n}\n\n.timeline > li:after, .timeline > li:before {\n  display: table;\n  content: ' ';\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li .timeline-panel {\n  position: relative;\n  float: right;\n  width: 100%;\n  padding: 0 20px 0 100px;\n  text-align: left;\n}\n\n.timeline > li .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n\n.timeline > li .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n\n.timeline > li .timeline-image {\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  width: 80px;\n  height: 80px;\n  margin-left: 0;\n  text-align: center;\n  color: white;\n  border: 7px solid #e9ecef;\n  border-radius: 100%;\n  background-color: #fed136;\n}\n\n.timeline > li .timeline-image h4 {\n  font-size: 10px;\n  line-height: 14px;\n  margin-top: 12px;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n  padding: 0 20px 0 100px;\n  text-align: left;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n\n.timeline > li:last-child {\n  margin-bottom: 0;\n}\n\n.timeline .timeline-heading h4 {\n  margin-top: 0;\n  color: inherit;\n}\n\n.timeline .timeline-heading h4.subheading {\n  text-transform: none;\n}\n\n.timeline .timeline-body > ul,\n.timeline .timeline-body > p {\n  margin-bottom: 0;\n}\n\n@media (min-width: 768px) {\n  .timeline:before {\n    left: 50%;\n  }\n  .timeline > li {\n    min-height: 100px;\n    margin-bottom: 100px;\n  }\n  .timeline > li .timeline-panel {\n    float: left;\n    width: 41%;\n    padding: 0 20px 20px 30px;\n    text-align: right;\n  }\n  .timeline > li .timeline-image {\n    left: 50%;\n    width: 100px;\n    height: 100px;\n    margin-left: -50px;\n  }\n  .timeline > li .timeline-image h4 {\n    font-size: 13px;\n    line-height: 18px;\n    margin-top: 16px;\n  }\n  .timeline > li.timeline-inverted > .timeline-panel {\n    float: right;\n    padding: 0 30px 20px 20px;\n    text-align: left;\n  }\n}\n\n@media (min-width: 992px) {\n  .timeline > li {\n    min-height: 150px;\n  }\n  .timeline > li .timeline-panel {\n    padding: 0 20px 20px;\n  }\n  .timeline > li .timeline-image {\n    width: 150px;\n    height: 150px;\n    margin-left: -75px;\n  }\n  .timeline > li .timeline-image h4 {\n    font-size: 18px;\n    line-height: 26px;\n    margin-top: 30px;\n  }\n  .timeline > li.timeline-inverted > .timeline-panel {\n    padding: 0 20px 20px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .timeline > li {\n    min-height: 170px;\n  }\n  .timeline > li .timeline-panel {\n    padding: 0 20px 20px 100px;\n  }\n  .timeline > li .timeline-image {\n    width: 170px;\n    height: 170px;\n    margin-left: -85px;\n  }\n  .timeline > li .timeline-image h4 {\n    margin-top: 40px;\n  }\n  .timeline > li.timeline-inverted > .timeline-panel {\n    padding: 0 100px 20px 20px;\n  }\n}\n\n.team-member {\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.team-member img {\n  width: 225px;\n  height: 225px;\n  border: 7px solid #fff;\n}\n\n.team-member h4 {\n  margin-top: 25px;\n  margin-bottom: 0;\n  text-transform: none;\n}\n\n.team-member p {\n  margin-top: 0;\n}\n\nsection#contact {\n  background-color: #212529;\n  background-image: url('map-image.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\nsection#contact .section-heading {\n  color: #fff;\n}\n\nsection#contact .form-group {\n  margin-bottom: 25px;\n}\n\nsection#contact .form-group input,\nsection#contact .form-group textarea {\n  padding: 20px;\n}\n\nsection#contact .form-group input.form-control {\n  height: auto;\n}\n\nsection#contact .form-group textarea.form-control {\n  height: 248px;\n}\n\nsection#contact .form-control:focus {\n  border-color: #fed136;\n  box-shadow: none;\n}\n\nsection#contact ::-webkit-input-placeholder {\n  font-weight: 700;\n  color: #ced4da;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nsection#contact :-moz-placeholder {\n  font-weight: 700;\n  color: #ced4da;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nsection#contact ::-moz-placeholder {\n  font-weight: 700;\n  color: #ced4da;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nsection#contact :-ms-input-placeholder {\n  font-weight: 700;\n  color: #ced4da;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nfooter {\n  padding: 25px 0;\n  text-align: center;\n}\n\nfooter span.copyright {\n  font-size: 90%;\n  line-height: 40px;\n  text-transform: none;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nfooter ul.quicklinks {\n  font-size: 90%;\n  line-height: 40px;\n  margin-bottom: 0;\n  text-transform: none;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\nul.social-buttons {\n  margin-bottom: 0;\n}\n\nul.social-buttons li a {\n  font-size: 20px;\n  line-height: 50px;\n  display: block;\n  width: 50px;\n  height: 50px;\n  transition: all 0.3s;\n  color: white;\n  border-radius: 100%;\n  outline: none;\n  background-color: #212529;\n}\n\nul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {\n  background-color: #fed136;\n}\n"

/***/ }),

/***/ "./src/app/start/css/agency.min.css":
/*!******************************************!*\
  !*** ./src/app/start/css/agency.min.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Agency v5.0.1 (https://startbootstrap.com/template-overviews/agency)\n * Copyright 2013-2018 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)\n */body{overflow-x:hidden;font-family:'Roboto Slab',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}p{line-height:1.75}a{color:#fed136}a:hover{color:#fec503}.text-primary{color:#fed136!important}h1,h2,h3,h4,h5,h6{font-weight:700;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}section{padding:100px 0}section h2.section-heading{font-size:40px;margin-top:0;margin-bottom:15px}section h3.section-subheading{font-size:16px;font-weight:400;font-style:italic;margin-bottom:75px;text-transform:none;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}@media (min-width:768px){section{padding:150px 0}}.btn{font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';font-weight:700}.btn-xl{font-size:18px;padding:20px 40px}.btn-primary{background-color:#fed136;border-color:#fed136}.btn-primary:active,.btn-primary:focus,.btn-primary:hover{background-color:#fec810!important;border-color:#fec810!important;color:#fff}.btn-primary:active,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(254,209,55,.5)!important}::-moz-selection{background:#fed136;text-shadow:none}::selection{background:#fed136;text-shadow:none}img::-moz-selection{background:0 0}img::selection{background:0 0}img::-moz-selection{background:0 0}#mainNav{background-color:#212529}#mainNav .navbar-toggler{font-size:12px;right:0;padding:13px;text-transform:uppercase;color:#fff;border:0;background-color:#fed136;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}#mainNav .navbar-brand{color:#fed136;font-family:'Kaushan Script',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}#mainNav .navbar-brand.active,#mainNav .navbar-brand:active,#mainNav .navbar-brand:focus,#mainNav .navbar-brand:hover{color:#fec503}#mainNav .navbar-nav .nav-item .nav-link{font-size:90%;font-weight:400;padding:.75em 0;letter-spacing:1px;color:#fff;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}#mainNav .navbar-nav .nav-item .nav-link.active,#mainNav .navbar-nav .nav-item .nav-link:hover{color:#fed136}@media (min-width:992px){#mainNav{padding-top:25px;padding-bottom:25px;transition:padding-top .3s,padding-bottom .3s;border:none;background-color:transparent}#mainNav .navbar-brand{font-size:1.75em;transition:all .3s}#mainNav .navbar-nav .nav-item .nav-link{padding:1.1em 1em!important}#mainNav.navbar-shrink{padding-top:0;padding-bottom:0;background-color:#212529}#mainNav.navbar-shrink .navbar-brand{font-size:1.25em;padding:12px 0}}header.masthead{text-align:center;color:#fff;background-image:url('header-bg.jpg');background-repeat:no-repeat;background-attachment:scroll;background-position:center center;background-size:cover}header.masthead .intro-text{padding-top:150px;padding-bottom:100px}header.masthead .intro-text .intro-lead-in{font-size:22px;font-style:italic;line-height:22px;margin-bottom:25px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}header.masthead .intro-text .intro-heading{font-size:50px;font-weight:700;line-height:50px;margin-bottom:25px;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}@media (min-width:768px){header.masthead .intro-text{padding-top:300px;padding-bottom:200px}header.masthead .intro-text .intro-lead-in{font-size:40px;font-style:italic;line-height:40px;margin-bottom:25px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}header.masthead .intro-text .intro-heading{font-size:75px;font-weight:700;line-height:75px;margin-bottom:50px;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}}.service-heading{margin:15px 0;text-transform:none}#portfolio .portfolio-item{right:0;margin:0 0 15px}#portfolio .portfolio-item .portfolio-link{position:relative;display:block;max-width:400px;margin:0 auto;cursor:pointer}#portfolio .portfolio-item .portfolio-link .portfolio-hover{position:absolute;width:100%;height:100%;transition:all ease .5s;opacity:0;background:rgba(254,209,54,.9)}#portfolio .portfolio-item .portfolio-link .portfolio-hover:hover{opacity:1}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content{font-size:20px;position:absolute;top:50%;width:100%;height:20px;margin-top:-12px;text-align:center;color:#fff}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i{margin-top:-12px}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4{margin:0}#portfolio .portfolio-item .portfolio-caption{max-width:400px;margin:0 auto;padding:25px;text-align:center;background-color:#fff}#portfolio .portfolio-item .portfolio-caption h4{margin:0;text-transform:none}#portfolio .portfolio-item .portfolio-caption p{font-size:16px;font-style:italic;margin:0;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}#portfolio *{z-index:2}@media (min-width:767px){#portfolio .portfolio-item{margin:0 0 30px}}.portfolio-modal{padding-right:0!important}.portfolio-modal .modal-dialog{margin:1rem;max-width:100vw}.portfolio-modal .modal-content{padding:100px 0;text-align:center}.portfolio-modal .modal-content h2{font-size:3em;margin-bottom:15px}.portfolio-modal .modal-content p{margin-bottom:30px}.portfolio-modal .modal-content p.item-intro{font-size:16px;font-style:italic;margin:20px 0 30px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}.portfolio-modal .modal-content ul.list-inline{margin-top:0;margin-bottom:30px}.portfolio-modal .modal-content img{margin-bottom:30px}.portfolio-modal .modal-content button{cursor:pointer}.portfolio-modal .close-modal{position:absolute;top:25px;right:25px;width:75px;height:75px;cursor:pointer;background-color:transparent}.portfolio-modal .close-modal:hover{opacity:.3}.portfolio-modal .close-modal .lr{z-index:1051;width:1px;height:75px;margin-left:35px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#212529}.portfolio-modal .close-modal .lr .rl{z-index:1052;width:1px;height:75px;-webkit-transform:rotate(90deg);transform:rotate(90deg);background-color:#212529}.timeline{position:relative;padding:0;list-style:none}.timeline:before{position:absolute;top:0;bottom:0;left:40px;width:2px;margin-left:-1.5px;content:'';background-color:#e9ecef}.timeline>li{position:relative;min-height:50px;margin-bottom:50px}.timeline>li:after,.timeline>li:before{display:table;content:' '}.timeline>li:after{clear:both}.timeline>li .timeline-panel{position:relative;float:right;width:100%;padding:0 20px 0 100px;text-align:left}.timeline>li .timeline-panel:before{right:auto;left:-15px;border-right-width:15px;border-left-width:0}.timeline>li .timeline-panel:after{right:auto;left:-14px;border-right-width:14px;border-left-width:0}.timeline>li .timeline-image{position:absolute;z-index:100;left:0;width:80px;height:80px;margin-left:0;text-align:center;color:#fff;border:7px solid #e9ecef;border-radius:100%;background-color:#fed136}.timeline>li .timeline-image h4{font-size:10px;line-height:14px;margin-top:12px}.timeline>li.timeline-inverted>.timeline-panel{float:right;padding:0 20px 0 100px;text-align:left}.timeline>li.timeline-inverted>.timeline-panel:before{right:auto;left:-15px;border-right-width:15px;border-left-width:0}.timeline>li.timeline-inverted>.timeline-panel:after{right:auto;left:-14px;border-right-width:14px;border-left-width:0}.timeline>li:last-child{margin-bottom:0}.timeline .timeline-heading h4{margin-top:0;color:inherit}.timeline .timeline-heading h4.subheading{text-transform:none}.timeline .timeline-body>p,.timeline .timeline-body>ul{margin-bottom:0}@media (min-width:768px){.timeline:before{left:50%}.timeline>li{min-height:100px;margin-bottom:100px}.timeline>li .timeline-panel{float:left;width:41%;padding:0 20px 20px 30px;text-align:right}.timeline>li .timeline-image{left:50%;width:100px;height:100px;margin-left:-50px}.timeline>li .timeline-image h4{font-size:13px;line-height:18px;margin-top:16px}.timeline>li.timeline-inverted>.timeline-panel{float:right;padding:0 30px 20px 20px;text-align:left}}@media (min-width:992px){.timeline>li{min-height:150px}.timeline>li .timeline-panel{padding:0 20px 20px}.timeline>li .timeline-image{width:150px;height:150px;margin-left:-75px}.timeline>li .timeline-image h4{font-size:18px;line-height:26px;margin-top:30px}.timeline>li.timeline-inverted>.timeline-panel{padding:0 20px 20px}}@media (min-width:1200px){.timeline>li{min-height:170px}.timeline>li .timeline-panel{padding:0 20px 20px 100px}.timeline>li .timeline-image{width:170px;height:170px;margin-left:-85px}.timeline>li .timeline-image h4{margin-top:40px}.timeline>li.timeline-inverted>.timeline-panel{padding:0 100px 20px 20px}}.team-member{margin-bottom:50px;text-align:center}.team-member img{width:225px;height:225px;border:7px solid #fff}.team-member h4{margin-top:25px;margin-bottom:0;text-transform:none}.team-member p{margin-top:0}section#contact{background-color:#212529;background-image:url('map-image.png');background-repeat:no-repeat;background-position:center}section#contact .section-heading{color:#fff}section#contact .form-group{margin-bottom:25px}section#contact .form-group input,section#contact .form-group textarea{padding:20px}section#contact .form-group input.form-control{height:auto}section#contact .form-group textarea.form-control{height:248px}section#contact .form-control:focus{border-color:#fed136;box-shadow:none}section#contact ::-webkit-input-placeholder{font-weight:700;color:#ced4da;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}section#contact :-moz-placeholder{font-weight:700;color:#ced4da;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}section#contact ::-moz-placeholder{font-weight:700;color:#ced4da;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}section#contact :-ms-input-placeholder{font-weight:700;color:#ced4da;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}footer{padding:25px 0;text-align:center}footer span.copyright{font-size:90%;line-height:40px;text-transform:none;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}footer ul.quicklinks{font-size:90%;line-height:40px;margin-bottom:0;text-transform:none;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}ul.social-buttons{margin-bottom:0}ul.social-buttons li a{font-size:20px;line-height:50px;display:block;width:50px;height:50px;transition:all .3s;color:#fff;border-radius:100%;outline:0;background-color:#212529}ul.social-buttons li a:active,ul.social-buttons li a:focus,ul.social-buttons li a:hover{background-color:#fed136}"

/***/ }),

/***/ "./src/app/start/index.html":
/*!**********************************!*\
  !*** ./src/app/start/index.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n  <head>\n\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>Agency - Start Bootstrap Theme</title>\n\n    <!-- Custom fonts for this template -->\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">\n    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\n    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\n    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>\n\n\n  </head>\n\n  <body id=\"page-top\">\n\n\n\n    <!-- Header -->\n    <header class=\"masthead\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"intro-text col-lg-6\">\n            <div class=\"intro-lead-in\">Hello, PooKle!</div>\n            <div class=\"intro-heading text-uppercase\">It's Nice To Meet You</div>\n            <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" href=\"#services\">Tell Me More</a>\n          </div>\n          <div class=\"intro-text col-lg-6\">\n              <start-sign-up></start-sign-up>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <!-- Services -->\n    <section id=\"services\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n            <h2 class=\"section-heading text-uppercase\">Timeline</h2>\n            <h3 class=\"section-subheading text-muted\">부경대학교에 올라오는 공지를 실시간으로 보여주는 페이지</h3>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-4\">\n            <span class=\"fa-stack fa-4x\">\n              <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n              <i class=\"fas fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n            </span>\n            <h4 class=\"service-heading\">다양한 정보</h4>\n            <p class=\"text-muted\">부경대학교와 관련있는 모든 사이트에서 정보를 수집하기 때문에 찾던 정보를 마주할 수도 있다.</p>\n          </div>\n          <div class=\"col-md-4\">\n            <span class=\"fa-stack fa-4x\">\n              <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n              <i class=\"fas fa-laptop fa-stack-1x fa-inverse\"></i>\n            </span>\n            <h4 class=\"service-heading\">원하는 정보 필터링</h4>\n            <p class=\"text-muted\">태그 기능을 통한 원하는 정보를 필터링하여 타임라인에 먼저 수신</p>\n          </div>\n          <div class=\"col-md-4\">\n            <span class=\"fa-stack fa-4x\">\n              <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n              <i class=\"fas fa-lock fa-stack-1x fa-inverse\"></i>\n            </span>\n            <h4 class=\"service-heading\">좋아요 기능을 통한 정보의 유용성 확인</h4>\n            <p class=\"text-muted\">좋아요가 많은 게시물일 수록 좀 더 많은이에게 유용한 정보일 수 있음</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Portfolio Grid -->\n    <section class=\"bg-light\" id=\"portfolio\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n            <h2 class=\"section-heading text-uppercase\">Board</h2>\n            <h3 class=\"section-subheading text-muted\">자유롭게 의견을 나눌 수 있는 게시판</h3>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-6 portfolio-item\">\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal1\">\n              <div class=\"portfolio-hover\">\n                <div class=\"portfolio-hover-content\">\n                  <i class=\"fas fa-plus fa-3x\"></i>\n                </div>\n              </div>\n              <img class=\"img-fluid\" src=\"img/portfolio/01-thumbnail.jpg\" alt=\"\">\n            </a>\n            <div class=\"portfolio-caption\">\n              <h4>Threads</h4>\n              <p class=\"text-muted\">Illustration</p>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6 portfolio-item\">\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal2\">\n              <div class=\"portfolio-hover\">\n                <div class=\"portfolio-hover-content\">\n                  <i class=\"fas fa-plus fa-3x\"></i>\n                </div>\n              </div>\n              <img class=\"img-fluid\" src=\"img/portfolio/02-thumbnail.jpg\" alt=\"\">\n            </a>\n            <div class=\"portfolio-caption\">\n              <h4>Explore</h4>\n              <p class=\"text-muted\">Graphic Design</p>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6 portfolio-item\">\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal3\">\n              <div class=\"portfolio-hover\">\n                <div class=\"portfolio-hover-content\">\n                  <i class=\"fas fa-plus fa-3x\"></i>\n                </div>\n              </div>\n              <img class=\"img-fluid\" src=\"img/portfolio/03-thumbnail.jpg\" alt=\"\">\n            </a>\n            <div class=\"portfolio-caption\">\n              <h4>Finish</h4>\n              <p class=\"text-muted\">Identity</p>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6 portfolio-item\">\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal4\">\n              <div class=\"portfolio-hover\">\n                <div class=\"portfolio-hover-content\">\n                  <i class=\"fas fa-plus fa-3x\"></i>\n                </div>\n              </div>\n              <img class=\"img-fluid\" src=\"img/portfolio/04-thumbnail.jpg\" alt=\"\">\n            </a>\n            <div class=\"portfolio-caption\">\n              <h4>Lines</h4>\n              <p class=\"text-muted\">Branding</p>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6 portfolio-item\">\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal5\">\n              <div class=\"portfolio-hover\">\n                <div class=\"portfolio-hover-content\">\n                  <i class=\"fas fa-plus fa-3x\"></i>\n                </div>\n              </div>\n              <img class=\"img-fluid\" src=\"img/portfolio/05-thumbnail.jpg\" alt=\"\">\n            </a>\n            <div class=\"portfolio-caption\">\n              <h4>Southwest</h4>\n              <p class=\"text-muted\">Website Design</p>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6 portfolio-item\">\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal6\">\n              <div class=\"portfolio-hover\">\n                <div class=\"portfolio-hover-content\">\n                  <i class=\"fas fa-plus fa-3x\"></i>\n                </div>\n              </div>\n              <img class=\"img-fluid\" src=\"img/portfolio/06-thumbnail.jpg\" alt=\"\">\n            </a>\n            <div class=\"portfolio-caption\">\n              <h4>Window</h4>\n              <p class=\"text-muted\">Photography</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- About -->\n    <section id=\"about\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n            <h2 class=\"section-heading text-uppercase\">About</h2>\n            <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <ul class=\"timeline\">\n              <li>\n                <div class=\"timeline-image\">\n                  <img class=\"rounded-circle img-fluid\" src=\"img/about/1.jpg\" alt=\"\">\n                </div>\n                <div class=\"timeline-panel\">\n                  <div class=\"timeline-heading\">\n                    <h4>2009-2011</h4>\n                    <h4 class=\"subheading\">Our Humble Beginnings</h4>\n                  </div>\n                  <div class=\"timeline-body\">\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                  </div>\n                </div>\n              </li>\n              <li class=\"timeline-inverted\">\n                <div class=\"timeline-image\">\n                  <img class=\"rounded-circle img-fluid\" src=\"img/about/2.jpg\" alt=\"\">\n                </div>\n                <div class=\"timeline-panel\">\n                  <div class=\"timeline-heading\">\n                    <h4>March 2011</h4>\n                    <h4 class=\"subheading\">An Agency is Born</h4>\n                  </div>\n                  <div class=\"timeline-body\">\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"timeline-image\">\n                  <img class=\"rounded-circle img-fluid\" src=\"img/about/3.jpg\" alt=\"\">\n                </div>\n                <div class=\"timeline-panel\">\n                  <div class=\"timeline-heading\">\n                    <h4>December 2012</h4>\n                    <h4 class=\"subheading\">Transition to Full Service</h4>\n                  </div>\n                  <div class=\"timeline-body\">\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                  </div>\n                </div>\n              </li>\n              <li class=\"timeline-inverted\">\n                <div class=\"timeline-image\">\n                  <img class=\"rounded-circle img-fluid\" src=\"img/about/4.jpg\" alt=\"\">\n                </div>\n                <div class=\"timeline-panel\">\n                  <div class=\"timeline-heading\">\n                    <h4>July 2014</h4>\n                    <h4 class=\"subheading\">Phase Two Expansion</h4>\n                  </div>\n                  <div class=\"timeline-body\">\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                  </div>\n                </div>\n              </li>\n              <li class=\"timeline-inverted\">\n                <div class=\"timeline-image\">\n                  <h4>Be Part\n                    <br>Of Our\n                    <br>Story!</h4>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Team -->\n    <section class=\"bg-light\" id=\"team\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n            <h2 class=\"section-heading text-uppercase\">Our Amazing Team</h2>\n            <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"team-member\">\n              <img class=\"mx-auto rounded-circle\" src=\"img/team/1.jpg\" alt=\"\">\n              <h4>Kay Garland</h4>\n              <p class=\"text-muted\">Lead Designer</p>\n              <ul class=\"list-inline social-buttons\">\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-facebook-f\"></i>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-linkedin-in\"></i>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"team-member\">\n              <img class=\"mx-auto rounded-circle\" src=\"img/team/2.jpg\" alt=\"\">\n              <h4>Larry Parker</h4>\n              <p class=\"text-muted\">Lead Marketer</p>\n              <ul class=\"list-inline social-buttons\">\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-facebook-f\"></i>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-linkedin-in\"></i>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"team-member\">\n              <img class=\"mx-auto rounded-circle\" src=\"img/team/3.jpg\" alt=\"\">\n              <h4>Diana Pertersen</h4>\n              <p class=\"text-muted\">Lead Developer</p>\n              <ul class=\"list-inline social-buttons\">\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-facebook-f\"></i>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fab fa-linkedin-in\"></i>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-8 mx-auto text-center\">\n            <p class=\"large text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Clients -->\n    <section class=\"py-5\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-sm-6\">\n            <a href=\"#\">\n              <img class=\"img-fluid d-block mx-auto\" src=\"img/logos/envato.jpg\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"col-md-3 col-sm-6\">\n            <a href=\"#\">\n              <img class=\"img-fluid d-block mx-auto\" src=\"img/logos/designmodo.jpg\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"col-md-3 col-sm-6\">\n            <a href=\"#\">\n              <img class=\"img-fluid d-block mx-auto\" src=\"img/logos/themeforest.jpg\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"col-md-3 col-sm-6\">\n            <a href=\"#\">\n              <img class=\"img-fluid d-block mx-auto\" src=\"img/logos/creative-market.jpg\" alt=\"\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Contact -->\n    <section id=\"contact\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n            <h2 class=\"section-heading text-uppercase\">Contact Us</h2>\n            <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <form id=\"contactForm\" name=\"sentMessage\" novalidate=\"novalidate\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Your Name *\" required=\"required\" data-validation-required-message=\"Please enter your name.\">\n                    <p class=\"help-block text-danger\"></p>\n                  </div>\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Your Email *\" required=\"required\" data-validation-required-message=\"Please enter your email address.\">\n                    <p class=\"help-block text-danger\"></p>\n                  </div>\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" id=\"phone\" type=\"tel\" placeholder=\"Your Phone *\" required=\"required\" data-validation-required-message=\"Please enter your phone number.\">\n                    <p class=\"help-block text-danger\"></p>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <textarea class=\"form-control\" id=\"message\" placeholder=\"Your Message *\" required=\"required\" data-validation-required-message=\"Please enter a message.\"></textarea>\n                    <p class=\"help-block text-danger\"></p>\n                  </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"col-lg-12 text-center\">\n                  <div id=\"success\"></div>\n                  <button id=\"sendMessageButton\" class=\"btn btn-primary btn-xl text-uppercase\" type=\"submit\">Send Message</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Footer -->\n    <footer>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <span class=\"copyright\">Copyright &copy; Your Website 2018</span>\n          </div>\n          <div class=\"col-md-4\">\n            <ul class=\"list-inline social-buttons\">\n              <li class=\"list-inline-item\">\n                <a href=\"#\">\n                  <i class=\"fab fa-twitter\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a href=\"#\">\n                  <i class=\"fab fa-facebook-f\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a href=\"#\">\n                  <i class=\"fab fa-linkedin-in\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-4\">\n            <ul class=\"list-inline quicklinks\">\n              <li class=\"list-inline-item\">\n                <a href=\"#\">Privacy Policy</a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a href=\"#\">Terms of Use</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </footer>\n\n    <!-- Portfolio Modals -->\n\n    <!-- Modal 1 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n              <div class=\"rl\"></div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 mx-auto\">\n                <div class=\"modal-body\">\n                  <!-- Project Details Go Here -->\n                  <h2 class=\"text-uppercase\">Project Name</h2>\n                  <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                  <img class=\"img-fluid d-block mx-auto\" src=\"img/portfolio/01-full.jpg\" alt=\"\">\n                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                  <ul class=\"list-inline\">\n                    <li>Date: January 2017</li>\n                    <li>Client: Threads</li>\n                    <li>Category: Illustration</li>\n                  </ul>\n                  <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                    <i class=\"fas fa-times\"></i>\n                    Close Project</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Modal 2 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n              <div class=\"rl\"></div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 mx-auto\">\n                <div class=\"modal-body\">\n                  <!-- Project Details Go Here -->\n                  <h2 class=\"text-uppercase\">Project Name</h2>\n                  <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                  <img class=\"img-fluid d-block mx-auto\" src=\"img/portfolio/02-full.jpg\" alt=\"\">\n                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                  <ul class=\"list-inline\">\n                    <li>Date: January 2017</li>\n                    <li>Client: Explore</li>\n                    <li>Category: Graphic Design</li>\n                  </ul>\n                  <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                    <i class=\"fas fa-times\"></i>\n                    Close Project</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Modal 3 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal3\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n              <div class=\"rl\"></div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 mx-auto\">\n                <div class=\"modal-body\">\n                  <!-- Project Details Go Here -->\n                  <h2 class=\"text-uppercase\">Project Name</h2>\n                  <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                  <img class=\"img-fluid d-block mx-auto\" src=\"img/portfolio/03-full.jpg\" alt=\"\">\n                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                  <ul class=\"list-inline\">\n                    <li>Date: January 2017</li>\n                    <li>Client: Finish</li>\n                    <li>Category: Identity</li>\n                  </ul>\n                  <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                    <i class=\"fas fa-times\"></i>\n                    Close Project</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Modal 4 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal4\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n              <div class=\"rl\"></div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 mx-auto\">\n                <div class=\"modal-body\">\n                  <!-- Project Details Go Here -->\n                  <h2 class=\"text-uppercase\">Project Name</h2>\n                  <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                  <img class=\"img-fluid d-block mx-auto\" src=\"img/portfolio/04-full.jpg\" alt=\"\">\n                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                  <ul class=\"list-inline\">\n                    <li>Date: January 2017</li>\n                    <li>Client: Lines</li>\n                    <li>Category: Branding</li>\n                  </ul>\n                  <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                    <i class=\"fas fa-times\"></i>\n                    Close Project</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Modal 5 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal5\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n              <div class=\"rl\"></div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 mx-auto\">\n                <div class=\"modal-body\">\n                  <!-- Project Details Go Here -->\n                  <h2 class=\"text-uppercase\">Project Name</h2>\n                  <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                  <img class=\"img-fluid d-block mx-auto\" src=\"img/portfolio/05-full.jpg\" alt=\"\">\n                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                  <ul class=\"list-inline\">\n                    <li>Date: January 2017</li>\n                    <li>Client: Southwest</li>\n                    <li>Category: Website Design</li>\n                  </ul>\n                  <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                    <i class=\"fas fa-times\"></i>\n                    Close Project</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Modal 6 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal6\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n              <div class=\"rl\"></div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 mx-auto\">\n                <div class=\"modal-body\">\n                  <!-- Project Details Go Here -->\n                  <h2 class=\"text-uppercase\">Project Name</h2>\n                  <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                  <img class=\"img-fluid d-block mx-auto\" src=\"img/portfolio/06-full.jpg\" alt=\"\">\n                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                  <ul class=\"list-inline\">\n                    <li>Date: January 2017</li>\n                    <li>Client: Window</li>\n                    <li>Category: Photography</li>\n                  </ul>\n                  <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                    <i class=\"fas fa-times\"></i>\n                    Close Project</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Bootstrap core JavaScript -->\n\n\n  </body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uni.Service */ "./src/app/uni.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartComponent = /** @class */ (function () {
    function StartComponent(fb, uniService, router) {
        this.fb = fb;
        this.uniService = uniService;
        this.router = router;
        this.signUpForm = this.fb.group({
            id: [''],
            pw: [''],
            pwc: [''],
            email: [''],
        });
        this.uniService.session().subscribe(function (response) {
            console.log(response);
        }, function (error) { return console.log('error', error); });
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent.prototype.registerUser = function () {
        var _this = this;
        this.userData = {
            username: this.signUpForm.value.id,
            password: this.signUpForm.value.pw,
            email: 'asdf@naver.com'
        };
        this.uniService.registerNewUser(this.userData).subscribe(function (response) {
            alert('가입되었습니다.');
            _this.router.navigate(['user/sign-in']);
        }, function (error) { return console.log('error', error); });
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'start',
            template: __webpack_require__(/*! .//index.html */ "./src/app/start/index.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css"), __webpack_require__(/*! ./css/agency.css */ "./src/app/start/css/agency.css"), __webpack_require__(/*! ./css/agency.min.css */ "./src/app/start/css/agency.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_2__["UniService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stats works!\n</p>\n"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.css":
/*!*************************************************!*\
  !*** ./src/app/timeline/timeline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#timeline-container{\r\n    margin-top:100px;\r\n}\r\n\r\n.post{\r\n    border-bottom:2px #666666 solid;\r\n    padding-bottom : 20px;\r\n    margin-bottom:10px;\r\n    color:black;\r\n}\r\n\r\n.link-btn{\r\n    display:block;\r\n    height:100%;\r\n    width:100%;\r\n    position: relative;;\r\n    top:0;\r\n    left:0;\r\n    text-decoration: none;\r\n}\r\n\r\n.link-btn:hover{\r\n    background-color:#DDDDDD;\r\n    transition: background-color 500ms linear;\r\n}\r\n\r\n.block{\r\n    display: block;\r\n}\r\n\r\n.align-right{\r\n    display: inline-block;\r\n    text-align:right;\r\n    position: relative;\r\n    left:70%;\r\n}\r\n\r\n.title{\r\n    font-size:40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.time{\r\n    font-size:12px;\r\n    color:gray;\r\n}\r\n\r\n.link{\r\n    color:green;\r\n}\r\n\r\n.like{\r\n    color:black;\r\n}\r\n\r\n.url-copy-btn, .like-btn{\r\n    margin-left:10px;\r\n    border:1px black solid;\r\n    border-radius: 5px;\r\n    padding:5px;\r\n    background-color:white;\r\n    color:black;\r\n    text-decoration: none;\r\n    font-size:30px;\r\n}\r\n\r\n.like-btn:hover, .url-copy-btn:hover{\r\n    background-color:#BBBBBB;\r\n    transition: background-color 500ms linear;\r\n}\r\n\r\n.content{\r\n    color:black;\r\n    \r\n}\r\n\r\n.btn-div{\r\n    border-top:solid gray 1px;\r\n    padding-top:20px;\r\n}"

/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"timeline-container\">\n    <div class=\"post\">\n        <a href=\"#\" class=\"link-btn\">\n            <div class=\"block\">\n                <a href=\"#\" class=\"title\">부경대학교</a>\n                <div class=\"align-right like\">\n                    <span class=\"fas fa-thumbs-up \"></span>\n                    <span>   115</span>\n                </div>\n            </div>\n            <span class=\"time\">방금 전</span>\n            <p class=\"content\">대한민국 국적 가수에 대한 내용은 이하이 문서를 참조하십시오. 이 문서는 비로그인 사용자의 편집이 제한되어... 리그 오브 레전드의 프로게이머 하이 람 의 아이디 hai 6. 하이로우 게임에서의 High 7. 걸그룹 프리스틴의 팬덤 HIgh 1. Hi [편집]...</p>\n        </a>\n        <div class=\"btn-div\">\n            <a href=\"/asdf\" class=\"like-btn\">Like</a>\n            <button (click)=\"test()\" value=\"test\"></button>\n            <button type=\"button\" (click)=\"copyMessage('희재 하이')\" placement=\"top\"\n        ngbPopover=\"복사되었습니다.\" popoverTitle=\"알림\" class=\"url-copy-btn\">URL 복사</button>\n        </div>\n    </div>\n\n    <div class=\"post\">\n        <a href=\"#\" class=\"link-btn\">\n            <div class=\"block\">\n                <a href=\"#\" class=\"title\">부경대학교</a>\n                <div class=\"align-right like\">\n                    <span class=\"fas fa-thumbs-up \"></span>\n                    <span>   115</span>\n                </div>\n            </div>\n            <span class=\"time\">방금 전</span>\n            <p class=\"content\">대한민국 국적 가수에 대한 내용은 이하이 문서를 참조하십시오. 이 문서는 비로그인 사용자의 편집이 제한되어... 리그 오브 레전드의 프로게이머 하이 람 의 아이디 hai 6. 하이로우 게임에서의 High 7. 걸그룹 프리스틴의 팬덤 HIgh 1. Hi [편집]...</p>\n        </a>\n        <div class=\"btn-div\">\n            <a href=\"/asdf\" class=\"like-btn\">Like</a>\n            <button type=\"button\" (click)=\"copyMessage('희재 하이')\" placement=\"top\"\n        ngbPopover=\"복사되었습니다.\" popoverTitle=\"알림\" class=\"url-copy-btn\">URL 복사</button>\n        </div>\n    </div>\n\n    <div class=\"post\">\n        <a href=\"#\" class=\"link-btn\">\n            <div class=\"block\">\n                <a href=\"#\" class=\"title\">부경대학교</a>\n                <div class=\"align-right like\">\n                    <span class=\"fas fa-thumbs-up \"></span>\n                    <span>   115</span>\n                </div>\n            </div>\n            <span class=\"time\">방금 전</span>\n            <p class=\"content\">대한민국 국적 가수에 대한 내용은 이하이 문서를 참조하십시오. 이 문서는 비로그인 사용자의 편집이 제한되어... 리그 오브 레전드의 프로게이머 하이 람 의 아이디 hai 6. 하이로우 게임에서의 High 7. 걸그룹 프리스틴의 팬덤 HIgh 1. Hi [편집]...</p>\n        </a>\n        <div class=\"btn-div\">\n            <a href=\"/asdf\" class=\"like-btn\">Like</a>\n            <button type=\"button\" (click)=\"copyMessage('희재 하이')\" placement=\"top\"\n        ngbPopover=\"복사되었습니다.\" popoverTitle=\"알림\" class=\"url-copy-btn\">URL 복사</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent.prototype.test = function () {
        alert('hi');
    };
    TimelineComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/uni-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/uni-routing.module.ts ***!
  \***************************************/
/*! exports provided: UniRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniRoutingModule", function() { return UniRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _user_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/setting/setting.component */ "./src/app/user/setting/setting.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _board_write_write_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board/write/write.component */ "./src/app/board/write/write.component.ts");
/* harmony import */ var _user_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/login-register/login-register.component */ "./src/app/user/login-register/login-register.component.ts");
/* harmony import */ var _user_find_account_find_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/find-account/find-account.component */ "./src/app/user/find-account/find-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"] },
    { path: 'timeline', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"] },
    { path: 'board', component: _board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"] },
    { path: 'board/write', component: _board_write_write_component__WEBPACK_IMPORTED_MODULE_7__["WriteComponent"] },
    { path: 'user/sign-in', component: _user_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_8__["LoginRegisterComponent"] },
    { path: 'user/setting', component: _user_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"] },
    { path: 'user/find-account', component: _user_find_account_find_account_component__WEBPACK_IMPORTED_MODULE_9__["FindAccountComponent"] },
    { path: 'stats', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"] },
];
var UniRoutingModule = /** @class */ (function () {
    function UniRoutingModule() {
    }
    UniRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], UniRoutingModule);
    return UniRoutingModule;
}());



/***/ }),

/***/ "./src/app/uni.Service.ts":
/*!********************************!*\
  !*** ./src/app/uni.Service.ts ***!
  \********************************/
/*! exports provided: UniService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniService", function() { return UniService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        //'Content-Type':  'application/json',
        //'Authorization': 'eyJjbnQiOjF9:1fqLVs:Tg_fumtlfqdbJ-bAx5S96LJ95R4',
        'ResponseType': 'json'
    })
};
var UniService = /** @class */ (function () {
    function UniService(http) {
        this.http = http;
    }
    UniService.prototype.registerNewUser = function (userData) {
        return this.http.post('http://localhost:5000/auth/login ', userData, httpOptions);
    };
    UniService.prototype.signIn = function (userData) {
        return this.http.post('http://localhost:5000/auth/login', userData, httpOptions);
    };
    UniService.prototype.session = function () {
        return this.http.get('http://localhost:8000/uni/login', httpOptions);
    };
    UniService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UniService);
    return UniService;
}());



/***/ }),

/***/ "./src/app/user/find-account/find-account.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/find-account/find-account.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:200px;\r\n    \r\n}\r\n.find-box{\r\n    border:1px solid #BBBBBB;\r\n    border-radius:10px;\r\n    padding:10px;\r\n    width:500px;\r\n    height:300px;\r\n}\r\n.align-center{\r\n    text-align:center;\r\n    font-size:20px;\r\n}"

/***/ }),

/***/ "./src/app/user/find-account/find-account.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/find-account/find-account.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex justify-content-center\">\n  <div class=\"row\">\n    <div class=\"find-box d-flex align-items-center justify-content-center\">\n      <div class=\"\">\n        <p class=\"align-center\">확인 질문</p>\n        <p class=\"align-center\" style=\"font-weight:bold\">나의 학과는?</p>\n        <p class=\"align-center\"><input type=\"text\"></p>\n        <p class=\"align-center\"><input class=\"btn btn-secondary\" type=\"submit\" value=\"확인\"></p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/find-account/find-account.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/find-account/find-account.component.ts ***!
  \*************************************************************/
/*! exports provided: FindAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindAccountComponent", function() { return FindAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindAccountComponent = /** @class */ (function () {
    function FindAccountComponent() {
    }
    FindAccountComponent.prototype.ngOnInit = function () {
    };
    FindAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'find-account',
            template: __webpack_require__(/*! ./find-account.component.html */ "./src/app/user/find-account/find-account.component.html"),
            styles: [__webpack_require__(/*! ./find-account.component.css */ "./src/app/user/find-account/find-account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FindAccountComponent);
    return FindAccountComponent;
}());



/***/ }),

/***/ "./src/app/user/login-register/login-register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/login-register/login-register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-margin{\r\n  margin-top:100px;\r\n}\r\n.sign-in, .sign-up{\r\n  padding:10px;\r\n  margin:5px;\r\n  border:1px solid #BBBBBB;\r\n  border-radius:5px;\r\n\r\n}\r\n.question {\r\n  margin-bottom:10px;\r\n  width:100%;\r\n  height:30px;\r\n}"

/***/ }),

/***/ "./src/app/user/login-register/login-register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/login-register/login-register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container top-margin\">\n        <div class=\"row\">\n          <div class=\"col-sm sign-in\">\n            <h1>로그인</h1>\n            <form  [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\n              <div class=\"form-group\">\n                <span>계정 : </span> \n                <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"id\">\n                </div>\n                <div class=\"form-group\">\n                  <span>비밀 번호 : </span> \n                  <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"pw\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-secondary\">로그인</button><br>  \n                <a class=\"text-muted small\" routerLink=\"/user/find-account\">계정이나 비밀번호를 잊으셨나요?</a>        \n              </form>\n          </div>\n          <div class=\"col-sm sign-up\">\n            <h1>회원가입</h1>\n            <form  [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\n              <div class=\"form-group\">\n                <span>계정 : </span> \n                <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"id\">\n              </div>\n              <div class=\"form-group\">\n                <span>비밀 번호 : </span> \n                <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"pw\">\n              </div>\n              <div class=\"form-group\">\n                  <span>비밀 번호 확인 : </span> \n                  <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"pw\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label\" for=\"signupPasswordagain\">Password question</label><br>            \n                <select class=\"question\" name=\"question\">\n                    <option value=\"\">질문을 선택해주세요</option>\n                    <option value=\"나의 학과는?\">나의 학과는?</option>\n                    <option value=\"나의 어머니 성함은?\">나의 어머니 성함은?</option>\n                    <option value=\"나의 고향은?\">나의 고향은?</option>\n                </select>\n                <input id=\"signupPassworquestion\" type=\"text\" maxlength=\"25\" class=\"form-control\">\n                </div>\n              <button type=\"submit\" class=\"btn btn-secondary\">가입</button>          \n            </form>\n          </div>\n        </div>\n      </div>\n      \n      "

/***/ }),

/***/ "./src/app/user/login-register/login-register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/login-register/login-register.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function() { return LoginRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent(fb, uniService) {
        this.fb = fb;
        this.uniService = uniService;
        this.signInForm = this.fb.group({
            id: [''],
            pw: [''],
        });
        this.uniService.session().subscribe(function (response) {
            console.log(response);
        }, function (error) { return console.log('error', error); });
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
    };
    LoginRegisterComponent.prototype.signIn = function () {
        this.userData = {
            username: this.signInForm.value.id,
            password: this.signInForm.value.pw,
            email: 'asdf@naver.com'
        };
        this.uniService.signIn(this.userData).subscribe(function (response) {
            console.log("@");
            console.log(response);
        }, function (error) { return console.log('error', error); });
    };
    LoginRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-register',
            template: __webpack_require__(/*! ./login-register.component.html */ "./src/app/user/login-register/login-register.component.html"),
            styles: [__webpack_require__(/*! ./login-register.component.css */ "./src/app/user/login-register/login-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_2__["UniService"]])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/setting/setting.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/setting/setting.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:100px;\r\n}\r\n.account-box{\r\n    padding:100px;\r\n    border:1px solid #BBBBBB;\r\n    border-radius:10px;\r\n}\r\n.tag-box{\r\n    border:1px solid #BBBBBB;\r\n    border-radius: 5px;\r\n    padding :10px;\r\n}\r\n.tag{\r\n    padding:10px;\r\n    margin-right:10px;\r\n    margin-left:10px;\r\n    \r\n    border-radius:15px;\r\n    background-color:#DDDDDD;\r\n    font-size:18px;\r\n    font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/setting/setting.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/setting/setting.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container account-box \">\n  <div class=\"row\">\n      <div class=\"col-sm sign-up\">\n          <h1>계정 관리</h1>\n          <form  [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\n             <div class=\"form-group\">\n              <span> 별명 </span> <span class=\"text-muted small\"> 댓글을 작성할 때 사용될 별명입니다.</span>\n              <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"id\">\n            </div>           \n            <div class=\"form-group\">\n              <span>계정</span> \n              <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"id\">\n            </div>\n            <div class=\"form-group\">\n              <span>비밀 번호</span> \n              <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"pw\">\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"signupPasswordagain\">Password question</label><br>            \n              <select class=\"question\" name=\"question\">\n                  <option value=\"\">질문을 선택해주세요</option>\n                  <option value=\"나의 학과는?\">나의 학과는?</option>\n                  <option value=\"나의 어머니 성함은?\">나의 어머니 성함은?</option>\n                  <option value=\"나의 고향은?\">나의 고향은?</option>\n              </select>\n              <input id=\"signupPassworquestion\" type=\"text\" maxlength=\"25\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"tag\">관심있는 태그</label><br>   \n              <div class=\"tag-box\">\n                <button class=\"btn btn-secondary\">#hi</button>\n                <label class=\"tag\">#hi</label>\n                <label class=\"tag\">#hi<span style=\"color:red\"> X</span></label>\n                <label class=\"tag\">#hi<span style=\"color:red\"> X</span></label>\n                <label class=\"tag\">#hi<span style=\"color:red\"> X</span></label>\n              </div>\n            </div>\n            <div class=\"d-flex justify-content-center\">\n              <button type=\"submit\" class=\"btn btn-secondary\">저장</button>\n            </div>          \n          </form>\n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/setting/setting.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/setting/setting.component.ts ***!
  \***************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/user/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/user/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-margin{\r\n    margin-top:100px;\r\n}\r\n.sign-in, .sign-up{\r\n    padding:10px;\r\n    margin:5px;\r\n    border:1px solid #BBBBBB;\r\n    border-radius:5px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container top-margin\">\n  <div class=\"row\">\n    <div class=\"col-sm sign-in\">\n      <h1>로그인</h1>\n      <form  [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\n        <div class=\"form-group\">\n          <span>계정 : </span> \n          <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"id\">\n          </div>\n          <div class=\"form-group\">\n            <span>비밀 번호 : </span> \n            <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"pw\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-secondary\">로그인</button>          \n        </form>\n    </div>\n    <div class=\"col-sm sign-up\">\n      <h1>회원가입</h1>\n      <form  [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\n        <div class=\"form-group\">\n          <span>계정 : </span> \n          <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"id\">\n        </div>\n        <div class=\"form-group\">\n          <span>비밀 번호 : </span> \n          <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"pw\">\n        </div>\n        <div class=\"form-group\">\n            <span>비밀 번호 확인 : </span> \n            <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"pw\">\n        </div>\n        <div class=\"form-group\">\n            <span>비밀 번호 문답 : </span> \n            <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"pw\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-secondary\">가입</button>          \n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(fb, uniService) {
        this.fb = fb;
        this.uniService = uniService;
        this.signInForm = this.fb.group({
            id: [''],
            pw: [''],
        });
        this.uniService.session().subscribe(function (response) {
            console.log(response);
        }, function (error) { return console.log('error', error); });
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signIn = function () {
        this.userData = {
            username: this.signInForm.value.id,
            password: this.signInForm.value.pw,
            email: 'asdf@naver.com'
        };
        this.uniService.signIn(this.userData).subscribe(function (response) {
            console.log("@");
            console.log(response);
        }, function (error) { return console.log('error', error); });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_2__["UniService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/start-sign-up/start-sign-up.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/start-sign-up/start-sign-up.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    border-radius:10px;\r\n}\r\n\r\nform { margin: 0px 10px; }\r\n\r\nh2 {\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.container { max-width: 360px; }\r\n\r\n.divider {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.divider hr {\r\n  margin: 7px 0px;\r\n  width: 35%;\r\n}\r\n\r\n.left { float: left; }\r\n\r\n.right { float: right; }\r\n\r\n.question {\r\n    margin-bottom:10px;\r\n    width:100%;\r\n    height:30px;\r\n}"

/***/ }),

/***/ "./src/app/user/start-sign-up/start-sign-up.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/start-sign-up/start-sign-up.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!DOCTYPE html>\n<!--\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n-->\n<html>\n    <head>\n        <title>eiei</title>\n        <!--<meta charset=\"UTF-8\">-->\n        <!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">-->\n        <!--<link href=\"css/regist.css\" rel=\"stylesheet\" type=\"text/css\"/>-->\n        <!--<link href='css/bootstrap.min.css' rel=\"stylesheet\">-->\n        <!--<meta charset=\"UTF-8\">-->\n        <!--<link rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\">-->\n        <!--<link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>-->\n        <!--<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js\"></script>-->\n        <!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" />-->\n\n        <!--<link href=\"css/regist.css\" rel=\"stylesheet\" type=\"text/css\"/>-->\n        <!--<link href='css/bootstrap.min.css' rel=\"stylesheet\">-->\n    </head>\n    <body>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-body\">\n                        <form [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\n                            <div class=\"form-group\">\n                                <h2>Create account</h2>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"signupName\">Your name</label>\n                                <input id=\"signupName\" type=\"text\" maxlength=\"50\" class=\"form-control\" formControlName=\"user_id\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"signupPassword\">Password</label>\n                                <input id=\"signupPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\" placeholder=\"at least 6 characters\" length=\"40\" formControlName=\"user_pw\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"signupPasswordagain\">Password again</label>\n                                <input id=\"signupPasswordagain\" type=\"password\" maxlength=\"25\" class=\"form-control\" formControlName=\"user_pwc\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"signupPasswordagain\">Password question</label><br>            \n                                <select class=\"question\" name=\"question\" formControlName=\"user_que\">\n                                    <option value=\"\">질문을 선택해주세요</option>\n                                    <option value=\"나의 학과는?\">나의 학과는?</option>\n                                    <option value=\"나의 어머니 성함은?\">나의 어머니 성함은?</option>\n                                    <option value=\"나의 고향은?\">나의 고향은?</option>\n                                </select>\n                                <input id=\"signupPassworquestion\" type=\"text\" maxlength=\"25\" class=\"form-control\" formControlName=\"user_ans\">\n                            </div>\n                            <div class=\"form-group\">\n                                <button id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">Create your account</button>\n                            </div>\n                            <p class=\"form-group\">By creating an account, you agree to our <a href=\"#\">Terms of Use</a> and our <a href=\"#\">Privacy Policy</a>.</p>\n                            <hr>\n                            <p>Already have an account? <a href=\"#\">Sign in</a></p>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </body>\n</html>\n"

/***/ }),

/***/ "./src/app/user/start-sign-up/start-sign-up.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/start-sign-up/start-sign-up.component.ts ***!
  \***************************************************************/
/*! exports provided: StartSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartSignUpComponent", function() { return StartSignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartSignUpComponent = /** @class */ (function () {
    function StartSignUpComponent(fb, uniService) {
        this.fb = fb;
        this.uniService = uniService;
        this.signInForm = this.fb.group({
            user_id: [''],
            user_pw: [''],
            user_pwc: [''],
            user_que: [''],
            user_answer: [''],
        });
        this.uniService.session().subscribe(function (response) {
            console.log(response);
        }, function (error) { return console.log('error', error); });
    }
    StartSignUpComponent.prototype.ngOnInit = function () {
    };
    StartSignUpComponent.prototype.signIn = function () {
        alert('hi');
        this.userData = {
            username: this.signInForm.value.id,
            password: this.signInForm.value.pw,
            email: 'asdf@naver.com'
        };
        this.uniService.signIn(this.signInForm).subscribe(function (response) {
            console.log("@");
            console.log(response);
        }, function (error) { return console.log('error', error); });
    };
    StartSignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'start-sign-up',
            template: __webpack_require__(/*! ./start-sign-up.component.html */ "./src/app/user/start-sign-up/start-sign-up.component.html"),
            styles: [__webpack_require__(/*! ./start-sign-up.component.css */ "./src/app/user/start-sign-up/start-sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_2__["UniService"]])
    ], StartSignUpComponent);
    return StartSignUpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wo786\UNI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map