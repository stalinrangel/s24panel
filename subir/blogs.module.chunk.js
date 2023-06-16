webpackJsonp(["blogs.module"],{

/***/ "../../../../../src/app/pages/blogs/blogs-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blogs_component__ = __webpack_require__("../../../../../src/app/pages/blogs/blogs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__blogs_component__["a" /* BlogsComponent */],
    }];
var BlogsRoutingModule = /** @class */ (function () {
    function BlogsRoutingModule() {
    }
    BlogsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], BlogsRoutingModule);
    return BlogsRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__blogs_component__["a" /* BlogsComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/blogs/blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"containerChat\">\n        <div class=\"left\">\n            <nb-tabset fullWidth style=\"height: 100% !important;\">\n\t\t        <nb-tab tabTitle=\"Blogs\">\n\t\t        \t<div class=\"content-initChat\" (click)=\"open2(modal2)\">\n\t\t        \t\t<i class=\"fa fa-edit search\"></i> Crear Nuevo Blog\n\t\t        \t</div>\n\t\t        \t<!--div class=\"top\">\n\t\t                <input type=\"text\" placeholder=\"buscar usuario\" />\n\t\t            </div-->\n\t\t            <ul class=\"people\" >\n\t\t                <li class=\"person\" *ngFor=\"let item of blogs\" (click)=\"getChatOfConversa(item)\">\n\t\t                \t<i class=\"ion-close-round icon-delete\" (click)=\"open(modal1); aEliminar(item)\"></i>\n\t\t                    <!-- <img src=\"{{item.usuario.imagen}}\" alt=\"\" /> -->\n\t\t                    <span class=\"name\">{{item.tema}}</span>\n\t\t                    <span class=\"time\">{{item.count_msgs}}</span>\n\t\t                    <span class=\"preview\">{{item.creador}}</span>\n\t\t                </li>  \n\t\t            </ul>\n\t\t        </nb-tab>\n\t\t        \n\t\t    </nb-tabset>\n        </div>\n        <div class=\"right\">\n            <div class=\"top\">\n            \t<span class=\"name\">{{tema}}</span>\n            \t<i class=\"fa fa-refresh icon-refresh\" (click)=\"refreshChat()\"></i>\n            </div>\n\t\t\t<div class=\"chatbox\">\n\t\t\t\t<div #scrollChat class=\"chatlogs message-wrap\">\n\t\t\t   \t\t<div *ngFor=\"let msg of msgList\"\n\t\t\t\t         class=\"message left\">\n\t\t\t\t      <img class=\"user-img\" [src]=\"msg.userAvatar\" alt=\"\" >\n\t\t\t\t      <div class=\"msg-detail\">\n\t\t\t\t        <div class=\"msg-info\">\n\t\t\t\t          <p>{{msg.nameAvatar}}&nbsp;·&nbsp;{{msg.created_at | relativeTime}}</p>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"msg-content\">\n\t\t\t\t          <span class=\"triangle\"></span>\n\t\t\t\t          <p class=\"line-breaker \">{{msg.msg}}</p>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <hr>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t    <div class=\"chat-form\">\n\t\t\t\t\t<textarea name=\"msg\" [(ngModel)]=\"editorMsg\" id=\"msg\" placeholder=\"Agregar un comentario...\" (keydown)=\"enterMsg($event)\"></textarea>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-icon btn-send\" [disabled]=\"!editorMsg || editorMsg == ''\" (click)=\"sendMsg()\">\n\t\t\t\t\t\t<i class=\"ion-android-send icon-send\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>        \n        </div>\n    </div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Eliminar Chat: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>¿Realmente desea eliminar el chat con {{eliminar_nombre}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); deletChat()\">Eliminar</button>\n  </div>\n</ng-template>\n\n<ng-template #modal2 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Nuevo Blog: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click'); resetNewBlog()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Tema\" [(ngModel)]=\"newBlog\" id=\"input-newBlog\">\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); resetNewBlog()\" >Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); addBlog()\" [disabled]=\"newBlog == '' || newBlog == undefined \">Aceptar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading || loading2\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/blogs/blogs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n:host-context(.nb-theme-default) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600; }\n  :host-context(.nb-theme-default) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-default) * {\n  margin: 0;\n  padding: 0;\n  font-family: tahoma, sans-serif;\n  box-sizing: border-box; }\n\n:host-context(.nb-theme-default) .chatbox {\n  width: 100%;\n  min-width: 390px;\n  height: calc(100% - 24px);\n  background: #fff;\n  padding: 25px;\n  margin: 0px auto; }\n\n:host-context(.nb-theme-default) .chatlogs {\n  padding: 10px;\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n:host-context(.nb-theme-default) .chatlogs::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-default) .chatlogs::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-default) .chat-form textarea {\n  background: #fff;\n  width: 90%;\n  heigth: 50px;\n  border: 2px solid #eee;\n  border-radius: 3px;\n  resize: none;\n  padding: 10px;\n  color: #333;\n  margin-top: 15px;\n  float: left;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n:host-context(.nb-theme-default) .chat-form textarea::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-default) .chat-form textarea::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-default) nb-tab {\n  height: calc(100% - 62px);\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .btn-send {\n  float: left;\n  margin-top: 15px;\n  width: 10%;\n  height: 64px;\n  font-size: 35px;\n  background-color: #eeeeee;\n  color: #011c3d;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n:host-context(.nb-theme-default) .icon-send {\n  font-family: Ionicons; }\n\n:host-context(.nb-theme-default) .icon-delete {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  bottom: 0;\n  margin: auto;\n  display: table;\n  font-size: 16px;\n  color: #fff;\n  font-family: Ionicons;\n  z-index: 9999;\n  opacity: 0; }\n\n:host-context(.nb-theme-default) li:hover .icon-delete {\n  opacity: 1; }\n\n:host-context(.nb-theme-default) .icon-delete:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3); }\n\n:host-context(.nb-theme-default) .icon-refresh {\n  font-family: FontAwesome;\n  float: right;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .wrapper {\n  height: calc(100vh - 12.75rem) !important;\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-default) .containerChat {\n  width: 100%;\n  height: 100%;\n  background-color: #fff; }\n  :host-context(.nb-theme-default) .containerChat .left {\n    float: left;\n    width: 37.6%;\n    height: 100%;\n    border: 1px solid #e6e6e6;\n    background-color: #fff; }\n    :host-context(.nb-theme-default) .containerChat .left .top {\n      position: relative;\n      width: 100%;\n      height: 96px;\n      padding: 29px; }\n      :host-context(.nb-theme-default) .containerChat .left .top:after {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        display: block;\n        width: 80%;\n        height: 1px;\n        content: '';\n        background-color: #e6e6e6;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n    :host-context(.nb-theme-default) .containerChat .left input {\n      float: left;\n      width: 100%;\n      height: 42px;\n      padding: 0 15px;\n      border: 1px solid #e6e6e6;\n      background-color: #eceff1;\n      border-radius: 21px; }\n      :host-context(.nb-theme-default) .containerChat .left input:focus {\n        outline: none; }\n    :host-context(.nb-theme-default) .containerChat .left .search {\n      display: inline-block;\n      font-size: 20px;\n      position: relative;\n      top: 3px;\n      text-align: right;\n      color: #0b417a;\n      font-family: FontAwesome;\n      cursor: pointer;\n      margin-right: 5px; }\n    :host-context(.nb-theme-default) .containerChat .left .people {\n      margin-left: -1px;\n      border-right: 1px solid #e6e6e6;\n      border-left: 1px solid #e6e6e6;\n      width: calc(100% + 2px);\n      height: calc(100% - 70px);\n      overflow-y: scroll;\n      overflow-x: hidden; }\n      :host-context(.nb-theme-default) .containerChat .left .people .person {\n        position: relative;\n        width: 100%;\n        padding: 12px 10% 16px;\n        cursor: pointer;\n        background-color: #fff;\n        list-style-type: none; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person:after {\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          display: block;\n          width: 80%;\n          height: 1px;\n          content: '';\n          background-color: #e6e6e6;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0); }\n        :host-context(.nb-theme-default) .containerChat .left .people .person img {\n          float: left;\n          width: 40px;\n          height: 40px;\n          margin-right: 12px;\n          border-radius: 50%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          background-color: #ddd; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .name {\n          font-size: 14px;\n          line-height: 22px;\n          color: #1a1a1a; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .time {\n          font-size: 14px;\n          position: absolute;\n          top: 16px;\n          right: 10%;\n          padding: 0 0 5px 5px;\n          color: #999;\n          background-color: #fff; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .preview {\n          font-size: 14px;\n          display: block;\n          overflow: hidden !important;\n          width: 70%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #999; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person.active, :host-context(.nb-theme-default) .containerChat .left .people .person:hover {\n          margin-top: -1px;\n          margin-left: -1px;\n          padding-top: 13px;\n          border: 0;\n          background-color: #0b417a;\n          width: calc(100% + 2px);\n          padding-left: calc(10% + 1px); }\n          :host-context(.nb-theme-default) .containerChat .left .people .person.active span, :host-context(.nb-theme-default) .containerChat .left .people .person:hover span {\n            color: #fff;\n            background: transparent; }\n          :host-context(.nb-theme-default) .containerChat .left .people .person.active:after, :host-context(.nb-theme-default) .containerChat .left .people .person:hover:after {\n            display: none; }\n  :host-context(.nb-theme-default) .containerChat .right {\n    position: relative;\n    float: left;\n    width: 62.4%;\n    height: 100%; }\n    :host-context(.nb-theme-default) .containerChat .right .top {\n      width: 100%;\n      height: 47px;\n      padding: 15px 29px;\n      background-color: #fafafa;\n      border-top: 1px solid #eceef2; }\n      :host-context(.nb-theme-default) .containerChat .right .top span {\n        font-size: 15px;\n        color: #999; }\n        :host-context(.nb-theme-default) .containerChat .right .top span .name {\n          color: #1a1a1a; }\n\n:host-context(.nb-theme-default) .content-initChat {\n  box-shadow: 0 2px 12px 0 #e4e8ef;\n  padding: 20px 5px;\n  text-align: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #0b417a;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .line-breaker {\n  white-space: pre-line; }\n\n:host-context(.nb-theme-default) .input-wrap {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-wrap textarea {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border: 0;\n  border-bottom: 1px #387ef5;\n  border-style: solid; }\n\n:host-context(.nb-theme-default) .message-wrap {\n  padding: 0 15px;\n  background-color: #fafafa; }\n\n:host-context(.nb-theme-default) .message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n  border: none;\n  width: 100% !important;\n  height: auto !important;\n  background-color: transparent !important; }\n\n:host-context(.nb-theme-default) .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 5px;\n  width: 45px;\n  height: 45px;\n  background-color: #ddd;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail p {\n  margin: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  padding: 8px;\n  color: #333;\n  width: auto; }\n\n:host-context(.nb-theme-default) .message-wrap .message.left .msg-content {\n  float: left; }\n\n:host-context(.nb-theme-default) .message-wrap .message.left .msg-detail {\n  padding-left: 60px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.left .user-img {\n  left: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message.left .msg-detail .msg-content {\n  color: #343434; }\n\n:host-context(.nb-theme-default) .message-wrap .message.left .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.right .msg-detail {\n  padding-right: 60px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.right .msg-detail .msg-info {\n  text-align: right; }\n\n:host-context(.nb-theme-default) .message-wrap .message.right .user-img {\n  right: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message.right ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n:host-context(.nb-theme-cosmic) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500; }\n  :host-context(.nb-theme-cosmic) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-cosmic) * {\n  margin: 0;\n  padding: 0;\n  font-family: tahoma, sans-serif;\n  box-sizing: border-box; }\n\n:host-context(.nb-theme-cosmic) .chatbox {\n  width: 100%;\n  min-width: 390px;\n  height: calc(100% - 24px);\n  background: #fff;\n  padding: 25px;\n  margin: 0px auto; }\n\n:host-context(.nb-theme-cosmic) .chatlogs {\n  padding: 10px;\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n:host-context(.nb-theme-cosmic) .chatlogs::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-cosmic) .chatlogs::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea {\n  background: #fff;\n  width: 90%;\n  heigth: 50px;\n  border: 2px solid #eee;\n  border-radius: 3px;\n  resize: none;\n  padding: 10px;\n  color: #333;\n  margin-top: 15px;\n  float: left;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-cosmic) nb-tab {\n  height: calc(100% - 62px);\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .btn-send {\n  float: left;\n  margin-top: 15px;\n  width: 10%;\n  height: 64px;\n  font-size: 35px;\n  background-color: #eeeeee;\n  color: #011c3d;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n:host-context(.nb-theme-cosmic) .icon-send {\n  font-family: Ionicons; }\n\n:host-context(.nb-theme-cosmic) .icon-delete {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  bottom: 0;\n  margin: auto;\n  display: table;\n  font-size: 16px;\n  color: #fff;\n  font-family: Ionicons;\n  z-index: 9999;\n  opacity: 0; }\n\n:host-context(.nb-theme-cosmic) li:hover .icon-delete {\n  opacity: 1; }\n\n:host-context(.nb-theme-cosmic) .icon-delete:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3); }\n\n:host-context(.nb-theme-cosmic) .icon-refresh {\n  font-family: FontAwesome;\n  float: right;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .wrapper {\n  height: calc(100vh - 12.75rem) !important;\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) .containerChat {\n  width: 100%;\n  height: 100%;\n  background-color: #fff; }\n  :host-context(.nb-theme-cosmic) .containerChat .left {\n    float: left;\n    width: 37.6%;\n    height: 100%;\n    border: 1px solid #e6e6e6;\n    background-color: #fff; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .top {\n      position: relative;\n      width: 100%;\n      height: 96px;\n      padding: 29px; }\n      :host-context(.nb-theme-cosmic) .containerChat .left .top:after {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        display: block;\n        width: 80%;\n        height: 1px;\n        content: '';\n        background-color: #e6e6e6;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n    :host-context(.nb-theme-cosmic) .containerChat .left input {\n      float: left;\n      width: 100%;\n      height: 42px;\n      padding: 0 15px;\n      border: 1px solid #e6e6e6;\n      background-color: #eceff1;\n      border-radius: 21px; }\n      :host-context(.nb-theme-cosmic) .containerChat .left input:focus {\n        outline: none; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .search {\n      display: inline-block;\n      font-size: 20px;\n      position: relative;\n      top: 3px;\n      text-align: right;\n      color: #0b417a;\n      font-family: FontAwesome;\n      cursor: pointer;\n      margin-right: 5px; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .people {\n      margin-left: -1px;\n      border-right: 1px solid #e6e6e6;\n      border-left: 1px solid #e6e6e6;\n      width: calc(100% + 2px);\n      height: calc(100% - 70px);\n      overflow-y: scroll;\n      overflow-x: hidden; }\n      :host-context(.nb-theme-cosmic) .containerChat .left .people .person {\n        position: relative;\n        width: 100%;\n        padding: 12px 10% 16px;\n        cursor: pointer;\n        background-color: #fff;\n        list-style-type: none; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person:after {\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          display: block;\n          width: 80%;\n          height: 1px;\n          content: '';\n          background-color: #e6e6e6;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0); }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person img {\n          float: left;\n          width: 40px;\n          height: 40px;\n          margin-right: 12px;\n          border-radius: 50%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          background-color: #ddd; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .name {\n          font-size: 14px;\n          line-height: 22px;\n          color: #1a1a1a; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .time {\n          font-size: 14px;\n          position: absolute;\n          top: 16px;\n          right: 10%;\n          padding: 0 0 5px 5px;\n          color: #999;\n          background-color: #fff; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .preview {\n          font-size: 14px;\n          display: block;\n          overflow: hidden !important;\n          width: 70%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #999; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover {\n          margin-top: -1px;\n          margin-left: -1px;\n          padding-top: 13px;\n          border: 0;\n          background-color: #0b417a;\n          width: calc(100% + 2px);\n          padding-left: calc(10% + 1px); }\n          :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active span, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover span {\n            color: #fff;\n            background: transparent; }\n          :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active:after, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover:after {\n            display: none; }\n  :host-context(.nb-theme-cosmic) .containerChat .right {\n    position: relative;\n    float: left;\n    width: 62.4%;\n    height: 100%; }\n    :host-context(.nb-theme-cosmic) .containerChat .right .top {\n      width: 100%;\n      height: 47px;\n      padding: 15px 29px;\n      background-color: #fafafa;\n      border-top: 1px solid #eceef2; }\n      :host-context(.nb-theme-cosmic) .containerChat .right .top span {\n        font-size: 15px;\n        color: #999; }\n        :host-context(.nb-theme-cosmic) .containerChat .right .top span .name {\n          color: #1a1a1a; }\n\n:host-context(.nb-theme-cosmic) .content-initChat {\n  box-shadow: 0 2px 12px 0 #e4e8ef;\n  padding: 20px 5px;\n  text-align: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #0b417a;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .line-breaker {\n  white-space: pre-line; }\n\n:host-context(.nb-theme-cosmic) .input-wrap {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-wrap textarea {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border: 0;\n  border-bottom: 1px #387ef5;\n  border-style: solid; }\n\n:host-context(.nb-theme-cosmic) .message-wrap {\n  padding: 0 15px;\n  background-color: #fafafa; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n  border: none;\n  width: 100% !important;\n  height: auto !important;\n  background-color: transparent !important; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 5px;\n  width: 45px;\n  height: 45px;\n  background-color: #ddd;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail p {\n  margin: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  padding: 8px;\n  color: #333;\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.left .msg-content {\n  float: left; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.left .msg-detail {\n  padding-left: 60px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.left .user-img {\n  left: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.left .msg-detail .msg-content {\n  color: #343434; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.left .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.right .msg-detail {\n  padding-right: 60px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.right .msg-detail .msg-info {\n  text-align: right; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.right .user-img {\n  right: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.right ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/blogs/blogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_blog_services_comentarios_service_comentarios_service__ = __webpack_require__("../../../../../src/app/services/blog-services/comentarios-service/comentarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_blog_services_lista_service_lista_service__ = __webpack_require__("../../../../../src/app/services/blog-services/lista-service/lista.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_eventos_services_view_blog_event_service_view_blog_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/view-blog-event-service/view-blog-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_eventos_services_header_to_blog_event_service_header_to_blog_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/header-to-blog-event-service/header-to-blog-event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Mis imports













var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(sidebarService, modalService, toasterService, http, router, rutaService, fb, comentariosService, listaService, viewBlogEventService, headerToBlogEventService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.comentariosService = comentariosService;
        this.listaService = listaService;
        this.viewBlogEventService = viewBlogEventService;
        this.headerToBlogEventService = headerToBlogEventService;
        this.position = 'toast-top-right';
        this.animationType = 'fade';
        this.title = 'HI there!';
        this.content = "I'm cool toaster!";
        this.timeout = 5000;
        this.toastsLimit = 5;
        this.type = 'default'; // 'default', 'info', 'success', 'warning', 'error'
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = true;
        this.loading = false;
        this.loading2 = false;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.admin_id = '';
        this.admin_imagen = '';
        this.admin_nombre = '';
        this.blog_id = '';
        this.tema = '';
        this.creador = '';
        this.titulo_blog = '';
        this.send_msg = {
            usuario_id: 0,
            msg: '',
            token: '',
            blog_id: ''
        };
        this.blogs = [];
        this.newBlog = '';
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        //Detectar evento nuevo blog
        this.viewBlogEventService.viewBlogData.subscribe(function (data) {
            //console.log(data); 
            _this.addBlogEvent(data);
        });
        //Detectar evento cargar blog de notificacion entrante
        this.headerToBlogEventService.headerToBlogData.subscribe(function (data) {
            //console.log(data); 
            _this.headerEvent(data);
        });
        //Datos del admin
        this.admin_id = localStorage.getItem('mouvers_user_id');
        this.admin_imagen = localStorage.getItem('mouvers_user_imagen');
        this.admin_nombre = localStorage.getItem('mouvers_user_nombre');
        this.blog_id = localStorage.getItem('mouvers_blog_id');
        this.tema = localStorage.getItem('mouvers_tema');
        this.creador = localStorage.getItem('mouvers_creador');
        this.comentariosService.getUserInfo(this.admin_id, this.admin_imagen)
            .then(function (res) {
            _this.user = res;
        });
    }
    BlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '1') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.toggleSidebar();
        //get message list
        if (this.blog_id != '' && this.blog_id != 'null' && this.blog_id) {
            //this.getMsg();
        }
        // Subscribe to received  new message events
        /*this.events.subscribe('chat:received', msg => {

          this.pushNewMsg(msg);
          console.log(msg)
        })*/
        this.blogs$ = this.listaService.getBlogs$();
        this.blogsSubscription = this.blogs$.subscribe(function (blogs) { return _this.blogs = blogs; });
        this.initListaBlogs();
    };
    BlogsComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('mouvers_blog_id', '');
        localStorage.setItem('mouvers_tema', '');
        localStorage.setItem('mouvers_creador', '');
        this.blogsSubscription.unsubscribe();
    };
    BlogsComponent.prototype.initListaBlogs = function () {
        var _this = this;
        this.listaService.resetBlogs();
        this.loading2 = true;
        this.http.get(this.rutaService.getRutaApi() + 'blogs?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            //console.log(dataCli);
            _this.dataBlogs = data;
            var blogs = _this.dataBlogs.blogs;
            for (var i = 0; i < blogs.length; ++i) {
                var aux = {
                    id: blogs[i].id,
                    tema: blogs[i].tema,
                    creador: blogs[i].creador,
                    created_at: blogs[i].created_at,
                    updated_at: blogs[i].updated_at,
                    count_msgs: blogs[i].count_msgs,
                };
                _this.listaService.agregarBlog(aux);
            }
            _this.loading2 = false;
            console.log('Lista Blogs:');
            console.log(_this.listaService.getBlogs());
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading2 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    /*Ocultar sidebar*/
    BlogsComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    //Abrir modal por defecto
    BlogsComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal por defecto segunda configuracion
    BlogsComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    BlogsComponent.prototype.getMsg = function () {
        var _this = this;
        this.loading = true;
        this.msgList = [];
        return this.comentariosService.getMsgList(this.blog_id).subscribe(function (res) {
            _this.msgList = res;
            _this.loading = false;
            _this.scrollToBottom();
        });
    };
    BlogsComponent.prototype.enterMsg = function (event) {
        if (event.keyCode == 13) {
            this.sendMsg();
            event.preventDefault();
        }
    };
    BlogsComponent.prototype.sendMsg = function () {
        if (!this.editorMsg.trim())
            return;
        if (this.blog_id == '' || this.blog_id == 'null' || !this.blog_id) {
            this.showToast('info', 'Info!', 'Debe seleccionar un blog.');
            return;
        }
        // Mock message
        var id = Date.now().toString();
        var newMsg = {
            id: Date.now().toString(),
            usuario_id: parseInt(this.admin_id),
            userAvatar: this.admin_imagen,
            nameAvatar: this.admin_nombre,
            created_at: Date.now(),
            msg: this.editorMsg,
            status: 1
        };
        this.pushNewMsg(newMsg);
        this.comentariosService.sendMsg(newMsg).then(function () { });
        this.sendMsgServer(this.editorMsg, id);
        this.editorMsg = '';
        //Setear el contador de mensajes
    };
    BlogsComponent.prototype.sendMsgServer = function (msg, id) {
        var _this = this;
        this.send_msg.usuario_id = parseInt(this.admin_id);
        this.send_msg.msg = msg;
        this.send_msg.blog_id = this.blog_id;
        this.send_msg.token = localStorage.getItem('mouvers_token');
        console.log(this.send_msg);
        this.http.post(this.rutaService.getRutaApi() + 'mensajes/blogs', this.send_msg)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.datos = data;
            _this.blog_id = _this.datos.mensaje.blog_id;
            _this.listaService.updateCount(_this.datos.mensaje.blog_id);
            localStorage.setItem('mouvers_blog_id', _this.datos.mensaje.blog_id);
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 2;
            }
        }, function (msg) {
            console.log(msg);
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 3;
            }
        });
    };
    BlogsComponent.prototype.pushNewMsg = function (msg) {
        var userId = parseInt(this.user.id);
        if (msg.usuario_id === userId) {
            this.msgList.push(msg);
            console.log(this.msgList);
        }
        this.scrollToBottom();
    };
    BlogsComponent.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.id === id; });
    };
    BlogsComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.chatContent.nativeElement.scrollTop = _this.chatContent.nativeElement.scrollHeight;
        }, 400);
    };
    BlogsComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.tema;
    };
    BlogsComponent.prototype.deletChat = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'blogs/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            localStorage.setItem('mouvers_blog_id', '');
            localStorage.setItem('mouvers_tema', '');
            localStorage.setItem('mouvers_creador', '');
            if (_this.blog_id != '' && _this.blog_id != 'null' && _this.blog_id) {
                if (parseInt(_this.blog_id) == _this.eliminar_id) {
                    _this.msgList = [];
                    _this.blog_id = '';
                    _this.tema = '';
                    _this.creador = '';
                    _this.titulo_blog = '';
                }
            }
            _this.listaService.deleteBlog(_this.eliminar_id);
            /*var aux = this.blogs;

            this.blogs = [];

            for (var i = 0; i < aux.length; ++i) {
                if (this.eliminar_id != aux[i].id) {
                    this.blogs.push(aux[i]);
                }
            }*/
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else if (msg.status == 404 || msg.status == 409) {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    BlogsComponent.prototype.refreshChat = function () {
        //get message list
        if (this.blog_id != '' && this.blog_id != 'null' && this.blog_id) {
            this.getMsg();
            this.initListaBlogs();
        }
    };
    BlogsComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    /*Cargar los comentarios de un blog de la lista*/
    BlogsComponent.prototype.getChatOfConversa = function (blog) {
        if (blog.id != this.blog_id) {
            this.setBlog(blog.id, blog.tema, blog.creador);
            //get message list
            if (this.blog_id != '' && this.blog_id != 'null' && this.blog_id) {
                this.getMsg();
            }
        }
    };
    /*Setear el blog seleccionado de la lista de blogs*/
    BlogsComponent.prototype.setBlog = function (blog_id, tema, creador) {
        localStorage.setItem('mouvers_blog_id', blog_id);
        localStorage.setItem('mouvers_tema', tema);
        localStorage.setItem('mouvers_creador', creador);
        this.blog_id = localStorage.getItem('mouvers_blog_id');
        this.tema = localStorage.getItem('mouvers_tema');
        this.creador = localStorage.getItem('mouvers_creador');
    };
    BlogsComponent.prototype.resetNewBlog = function () {
        this.newBlog = '';
    };
    BlogsComponent.prototype.addBlog = function () {
        //alert('Blog: '+this.newBlog.toUpperCase());
        var _this = this;
        this.loading = true;
        var datos = {
            tema: this.newBlog.toUpperCase(),
            creador: this.admin_nombre,
            token: localStorage.getItem('mouvers_token')
        };
        this.http.post(this.rutaService.getRutaApi() + 'blogs', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.resetNewBlog();
            _this.initListaBlogs();
            /*const aux: Blog = {
                id: this.data.blog.id,
                tema: this.data.tema,
                creador: this.data.creador,
                created_at: this.data.blog.created_at,
                updated_at: this.data.blog.updated_at,
                count_msgs: 0,
            };

            //this.listaService.agregarBlog(aux);
            this.blogs.push(aux);*/
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    BlogsComponent.prototype.addBlogEvent = function (data) {
        var obj = JSON.parse(data.obj);
        var aux = {
            id: obj.blog_id,
            tema: obj.tema,
            creador: obj.creador,
            created_at: obj.created_at,
            updated_at: obj.created_at,
            count_msgs: 0,
        };
        this.listaService.agregarBlog(aux);
        //this.blogs.push(aux);
    };
    BlogsComponent.prototype.headerEvent = function (obj) {
        //var obj = JSON.parse(obj);
        this.setBlog(obj.id, obj.tema, obj.creador);
        //get message list
        if (this.blog_id != '' && this.blog_id != 'null' && this.blog_id) {
            this.getMsg();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollChat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BlogsComponent.prototype, "chatContent", void 0);
    BlogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blogs-box',
            styles: [__webpack_require__("../../../../../src/app/pages/blogs/blogs.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/blogs/blogs.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__nebular_theme__["l" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_9__services_blog_services_comentarios_service_comentarios_service__["a" /* ComentariosService */],
            __WEBPACK_IMPORTED_MODULE_10__services_blog_services_lista_service_lista_service__["a" /* ListaService */],
            __WEBPACK_IMPORTED_MODULE_12__services_eventos_services_view_blog_event_service_view_blog_event_service__["a" /* ViewBlogEventService */],
            __WEBPACK_IMPORTED_MODULE_13__services_eventos_services_header_to_blog_event_service_header_to_blog_event_service__["a" /* HeaderToBlogEventService */]])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/blogs/blogs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsModule", function() { return BlogsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blogs_routing_module__ = __webpack_require__("../../../../../src/app/pages/blogs/blogs-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_relative_time_relative_time__ = __webpack_require__("../../../../../src/app/pipes/relative-time/relative-time.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Mis imports



var BlogsModule = /** @class */ (function () {
    function BlogsModule() {
    }
    BlogsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__blogs_routing_module__["a" /* BlogsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_3_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__blogs_routing_module__["b" /* routedComponents */].concat([
                __WEBPACK_IMPORTED_MODULE_5__pipes_relative_time_relative_time__["a" /* RelativeTimePipe */]
            ]),
            providers: [],
        })
    ], BlogsModule);
    return BlogsModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/relative-time/relative-time.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now_index_js__ = __webpack_require__("../../../../date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_es_index_js__ = __webpack_require__("../../../../date-fns/locale/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_es_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_locale_es_index_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import distanceInWords from 'date-fns/distance_in_words'

/**
 * Generated class for the RelativeTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now_index_js__(new Date(value), { addSuffix: true, locale: __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_es_index_js__ });
    };
    RelativeTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'relativeTime',
        })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());



/***/ })

});
//# sourceMappingURL=blogs.module.chunk.js.map