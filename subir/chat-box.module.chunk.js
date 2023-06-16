webpackJsonp(["chat-box.module"],{

/***/ "../../../../../src/app/pages/chat-box/chat-box-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_box_component__ = __webpack_require__("../../../../../src/app/pages/chat-box/chat-box.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__chat_box_component__["a" /* ChatBoxComponent */],
    }];
var ChatBoxRoutingModule = /** @class */ (function () {
    function ChatBoxRoutingModule() {
    }
    ChatBoxRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], ChatBoxRoutingModule);
    return ChatBoxRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__chat_box_component__["a" /* ChatBoxComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div class=\"row\">\n  <div class=\"col-md-4\">\n  \t<div>\n  \t\tcontent chats\n  \t</div>\n  </div>\n  <div class=\"col-md-8\" style=\"display:block; margin:auto\">\n    <nb-card>\n      <nb-card-header>\n      \t<div class=\"header\">\n          {{usuario_nombre}}\n          <button (click)=\"printConversas()\">print</button>\n          <button (click)=\"addConversa()\">add</button>\n        </div>\n    </nb-card-header>\n      <nb-card-body>\n\t\t<div class=\"chatbox\">\n\t\t\t<div class=\"chatlogs\">\n\t\t\t\t<div *ngFor=\"let msg of msgList\">\n\t\t\t\t\t<div *ngIf=\"msg.emisor_id == toUser.id\" class=\"chat friend\">\n\t\t\t\t\t\t<div class=\"user-photo\"><img src=\"{{msg.userAvatar}}\"></div>\n\t\t\t\t\t\t<p class=\"chat-message\">{{msg.msg}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"msg.emisor_id == user.id\" class=\"chat self\">\n\t\t\t\t\t\t<div class=\"user-photo\"><img src=\"{{msg.userAvatar}}\"></div>\n\t\t\t\t\t\t<p class=\"chat-message\">{{msg.msg}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"chat-form\">\n\t\t\t\t<textarea name=\"msg\" [(ngModel)]=\"editorMsg\" id=\"msg\"></textarea>\n\t\t\t\t<button [disabled]=\"!editorMsg || editorMsg == ''\" (click)=\"sendMsg()\">Enviar</button>\n\t\t\t</div>\n\n\t\t</div>        \n      </nb-card-body>\n    </nb-card>\n  </div>\n</div-->\n\n<div class=\"wrapper\">\n    <div class=\"containerChat\">\n        <div class=\"left\">\n            <nb-tabset fullWidth style=\"height: 100% !important;\">\n\t\t        <nb-tab tabTitle=\"Usuarios\">\n\t\t        \t<div class=\"content-initChat\" (click)=\"getUsuariosCliRep(modal2, 2)\">\n\t\t        \t\t<i class=\"fa fa-edit search\"></i> Iniciar Conversación con Usuario\n\t\t        \t</div>\n\t\t        \t<!--div class=\"top\">\n\t\t                <input type=\"text\" placeholder=\"buscar usuario\" />\n\t\t            </div-->\n\t\t            <ul class=\"people\" >\n\t\t                <li class=\"person\" *ngFor=\"let item of conversationsCli\" (click)=\"getChatOfConversa(item)\">\n\t\t                \t<i class=\"ion-close-round icon-delete\" (click)=\"open(modal1); aEliminar(item)\"></i>\n\t\t                    <img src=\"{{item.usuario.imagen}}\" alt=\"\" />\n\t\t                    <span class=\"name\">{{item.usuario.nombre}}</span>\n\t\t                    <span class=\"time\">{{item.ultimo_msg.created_at | relativeTime}}</span>\n\t\t                    <span class=\"preview\">{{item.ultimo_msg.msg}}</span>\n\t\t                </li>  \n\t\t            </ul>\n\t\t        </nb-tab>\n\t\t        <nb-tab tabTitle=\"Proveedores\">\n\t\t        \t<div class=\"content-initChat\" (click)=\"getUsuariosCliRep(modal2, 3)\">\n\t\t        \t\t<i class=\"fa fa-edit search\"></i> Iniciar Conversación con Proveedor\n\t\t        \t</div>\n\t\t          <ul class=\"people\">\n\t\t                <li class=\"person\" *ngFor=\"let item of conversationsRep\" (click)=\"getChatOfConversa(item)\">\n\t\t                \t<i class=\"ion-close-round icon-delete\" (click)=\"open(modal1); aEliminar(item)\"></i>\n\t\t                    <img src=\"{{item.usuario.imagen}}\" alt=\"\" />\n\t\t                    <span class=\"name\">{{item.usuario.nombre}}</span>\n\t\t                    <span class=\"time\">{{item.ultimo_msg.created_at | relativeTime}}</span>\n\t\t                    <span class=\"preview\">{{item.ultimo_msg.msg}}</span>\n\t\t                </li> \n\t\t            </ul>\n\t\t        </nb-tab>\n\t\t    </nb-tabset>\n        </div>\n        <div class=\"right\">\n            <div class=\"top\">\n            \t<span class=\"name\">{{usuario_nombre}}</span>\n            \t<i class=\"fa fa-refresh icon-refresh\" (click)=\"refreshChat()\"></i>\n            </div>\n\t\t\t<div class=\"chatbox\">\n\t\t\t\t<div #scrollChat class=\"chatlogs message-wrap\">\n\t\t\t    <div *ngFor=\"let msg of msgList\"\n\t\t\t         class=\"message\"\n\t\t\t         [class.leftmsg]=\" msg.emisor_id == toUser.id \"\n\t\t\t         [class.rightmsg]=\" msg.emisor_id == user.id \">\n\t\t\t      <img class=\"user-img\" [src]=\"msg.userAvatar\" alt=\"\" >\n\t\t\t      <!--ion-spinner name=\"dots\" *ngIf=\"msg.status === 1\"></ion-spinner-->\n\t\t\t      <div class=\"msg-detail\">\n\t\t\t        <div class=\"msg-info\">\n\t\t\t          <p>{{msg.created_at | relativeTime}}</p>\n\t\t\t        </div>\n\t\t\t        <div class=\"msg-content\">\n\t\t\t          <span class=\"triangle\"></span>\n\t\t\t          <p class=\"line-breaker \">{{msg.msg}}</p>\n\t\t\t        </div>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t    <div class=\"chat-form\">\n\t\t\t\t\t<textarea name=\"msg\" [(ngModel)]=\"editorMsg\" id=\"msg\" placeholder=\"Escribe un mensaje...\" (keydown)=\"enterMsg($event)\"></textarea>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-icon btn-send\" [disabled]=\"!editorMsg || editorMsg == ''\" (click)=\"sendMsg()\">\n\t\t\t\t\t\t<i class=\"ion-android-send icon-send\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>        \n        </div>\n    </div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Eliminar Chat: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>¿Realmente desea eliminar el chat con {{eliminar_nombre}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); deletChat()\">Eliminar</button>\n  </div>\n</ng-template>\n\n<ng-template #modal2 let-c=\"close\" let-d=\"dismiss\" size=\"lg\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\"></h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <nb-card >\n      <nb-card-header>\n        <div class=\"row show-grid\">\n              <div class=\"col-6\">\n                <div>Lista de {{titulo_tabla}}</div>\n              </div>\n              <div class=\"col-6\">\n                <div>\n                  <div style=\"text-align: right;\">\n                   <strong>Buscar: </strong>\n                   <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </nb-card-header>\n\n      <nb-card-body>\n\n        <table class=\"table table-striped\">\n\t       <thead>\n\t         <th></th>\n\t         <!-- <th style=\"text-align: center;\">ID</th> -->\n\t         <th style=\"text-align: center;\">Nombre</th>\n\t         <th style=\"text-align: center;\">Email</th>\n\t         <th style=\"text-align: center;\">Teléfono</th>\n\t         <!-- <th style=\"text-align: center;\">Ciudad</th>\n\t         <th style=\"text-align: center;\">Estado</th> -->\n\t         <th style=\"text-align: center;\">Acciones</th>\n\t      </thead>\n\t      <tbody>\n\t         <tr *ngFor=\"let item of items\" >\n\t            <td></td>\n\t            <td style=\"text-align: center;\">{{item.nombre}}</td>\n\t            <td style=\"text-align: center;\">{{item.email}}</td>\n\t            <td style=\"text-align: center;\">{{item.telefono}}</td>\n\t            <!-- <td style=\"text-align: center;\">{{item.ciudad}}</td>\n\t            <td style=\"text-align: center;\">{{item.estado}}</td> -->\n\t            <td style=\"text-align: center;\">\n\t              <button type=\"button\" class=\"btn btn-primary btn-icon\" title=\"Chat\" (click)=\"c('Close click'); selectUsuarioList(item)\">\n\t                <i class=\"nb-email\"></i>\n\t              </button>\n\t            </td>\n\t         </tr>\n\t      </tbody>\n\t    </table>\n\t\t          \n      </nb-card-body>\n      <nb-card-footer>\n        <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n\t      <div class=\"btn-group\">\n\t         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n\t      </div>\n\t      <div class=\"btn-group pull-right\">\n\t         <ul class=\"pagination\" >\n\t            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n\t               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n\t                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n\t               </li>\n\t            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n\t         </ul>\n\t      </div>\n\t    </div>  \n      </nb-card-footer>\n    </nb-card>\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Aceptar</button> -->\n  </div>\n</ng-template>\n\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading || loading2 || loading3\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/chat-box/chat-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n:host-context(.nb-theme-default) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600; }\n  :host-context(.nb-theme-default) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-default) * {\n  margin: 0;\n  padding: 0;\n  font-family: tahoma, sans-serif;\n  box-sizing: border-box; }\n\n:host-context(.nb-theme-default) .chatbox {\n  width: 100%;\n  min-width: 390px;\n  height: calc(100% - 24px);\n  background: #fff;\n  padding: 25px;\n  margin: 0px auto; }\n\n:host-context(.nb-theme-default) .chatlogs {\n  padding: 10px;\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n:host-context(.nb-theme-default) .chatlogs::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-default) .chatlogs::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-default) .chat-form textarea {\n  background: #fff;\n  width: 90%;\n  heigth: 50px;\n  border: 2px solid #eee;\n  border-radius: 3px;\n  resize: none;\n  padding: 10px;\n  color: #333;\n  margin-top: 15px;\n  float: left;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n:host-context(.nb-theme-default) .chat-form textarea::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-default) .chat-form textarea::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-default) nb-tab {\n  height: calc(100% - 62px);\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .btn-send {\n  float: left;\n  margin-top: 15px;\n  width: 10%;\n  height: 64px;\n  font-size: 35px;\n  background-color: #eeeeee;\n  color: #011c3d;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n:host-context(.nb-theme-default) .icon-send {\n  font-family: Ionicons; }\n\n:host-context(.nb-theme-default) .icon-delete {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  bottom: 0;\n  margin: auto;\n  display: table;\n  font-size: 16px;\n  color: #fff;\n  font-family: Ionicons;\n  z-index: 9999;\n  opacity: 0; }\n\n:host-context(.nb-theme-default) li:hover .icon-delete {\n  opacity: 1; }\n\n:host-context(.nb-theme-default) .icon-delete:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3); }\n\n:host-context(.nb-theme-default) .icon-refresh {\n  font-family: FontAwesome;\n  float: right;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .wrapper {\n  height: calc(100vh - 12.75rem) !important;\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-default) .containerChat {\n  width: 100%;\n  height: 100%;\n  background-color: #fff; }\n  :host-context(.nb-theme-default) .containerChat .left {\n    float: left;\n    width: 37.6%;\n    height: 100%;\n    border: 1px solid #e6e6e6;\n    background-color: #fff; }\n    :host-context(.nb-theme-default) .containerChat .left .top {\n      position: relative;\n      width: 100%;\n      height: 96px;\n      padding: 29px; }\n      :host-context(.nb-theme-default) .containerChat .left .top:after {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        display: block;\n        width: 80%;\n        height: 1px;\n        content: '';\n        background-color: #e6e6e6;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n    :host-context(.nb-theme-default) .containerChat .left input {\n      float: left;\n      width: 100%;\n      height: 42px;\n      padding: 0 15px;\n      border: 1px solid #e6e6e6;\n      background-color: #eceff1;\n      border-radius: 21px; }\n      :host-context(.nb-theme-default) .containerChat .left input:focus {\n        outline: none; }\n    :host-context(.nb-theme-default) .containerChat .left .search {\n      display: inline-block;\n      font-size: 20px;\n      position: relative;\n      top: 3px;\n      text-align: right;\n      color: #0b417a;\n      font-family: FontAwesome;\n      cursor: pointer;\n      margin-right: 5px; }\n    :host-context(.nb-theme-default) .containerChat .left .people {\n      margin-left: -1px;\n      border-right: 1px solid #e6e6e6;\n      border-left: 1px solid #e6e6e6;\n      width: calc(100% + 2px);\n      height: calc(100% - 70px);\n      overflow-y: scroll;\n      overflow-x: hidden; }\n      :host-context(.nb-theme-default) .containerChat .left .people .person {\n        position: relative;\n        width: 100%;\n        padding: 12px 10% 16px;\n        cursor: pointer;\n        background-color: #fff;\n        list-style-type: none; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person:after {\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          display: block;\n          width: 80%;\n          height: 1px;\n          content: '';\n          background-color: #e6e6e6;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0); }\n        :host-context(.nb-theme-default) .containerChat .left .people .person img {\n          float: left;\n          width: 40px;\n          height: 40px;\n          margin-right: 12px;\n          border-radius: 50%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          background-color: #ddd; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .name {\n          font-size: 14px;\n          line-height: 22px;\n          color: #1a1a1a; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .time {\n          font-size: 14px;\n          position: absolute;\n          top: 16px;\n          right: 10%;\n          padding: 0 0 5px 5px;\n          color: #999;\n          background-color: #fff; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .preview {\n          font-size: 14px;\n          display: block;\n          overflow: hidden !important;\n          width: 70%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #999; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person.active, :host-context(.nb-theme-default) .containerChat .left .people .person:hover {\n          margin-top: -1px;\n          margin-left: -1px;\n          padding-top: 13px;\n          border: 0;\n          background-color: #0b417a;\n          width: calc(100% + 2px);\n          padding-left: calc(10% + 1px); }\n          :host-context(.nb-theme-default) .containerChat .left .people .person.active span, :host-context(.nb-theme-default) .containerChat .left .people .person:hover span {\n            color: #fff;\n            background: transparent; }\n          :host-context(.nb-theme-default) .containerChat .left .people .person.active:after, :host-context(.nb-theme-default) .containerChat .left .people .person:hover:after {\n            display: none; }\n  :host-context(.nb-theme-default) .containerChat .right {\n    position: relative;\n    float: left;\n    width: 62.4%;\n    height: 100%; }\n    :host-context(.nb-theme-default) .containerChat .right .top {\n      width: 100%;\n      height: 47px;\n      padding: 15px 29px;\n      background-color: #fafafa;\n      border-top: 1px solid #eceef2; }\n      :host-context(.nb-theme-default) .containerChat .right .top span {\n        font-size: 15px;\n        color: #999; }\n        :host-context(.nb-theme-default) .containerChat .right .top span .name {\n          color: #1a1a1a; }\n\n:host-context(.nb-theme-default) .content-initChat {\n  box-shadow: 0 2px 12px 0 #e4e8ef;\n  padding: 20px 5px;\n  text-align: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #0b417a;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .message-wrap {\n  padding: 0 10px; }\n\n:host-context(.nb-theme-default) .message-wrap .message {\n  position: relative;\n  padding: 7px 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail p {\n  margin: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  color: #333;\n  width: auto;\n  max-width: 80%; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-content {\n  background-color: #fff !important;\n  float: left; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail {\n  padding-left: 60px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .user-img {\n  left: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail .msg-content {\n  color: #343434; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail {\n  padding-right: 60px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-info {\n  text-align: right; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .user-img {\n  right: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-content {\n  background-color: #e0e0e0;\n  float: right; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-content span.triangle {\n  background-color: #e0e0e0;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n:host-context(.nb-theme-cosmic) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500; }\n  :host-context(.nb-theme-cosmic) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-cosmic) * {\n  margin: 0;\n  padding: 0;\n  font-family: tahoma, sans-serif;\n  box-sizing: border-box; }\n\n:host-context(.nb-theme-cosmic) .chatbox {\n  width: 100%;\n  min-width: 390px;\n  height: calc(100% - 24px);\n  background: #fff;\n  padding: 25px;\n  margin: 0px auto; }\n\n:host-context(.nb-theme-cosmic) .chatlogs {\n  padding: 10px;\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n:host-context(.nb-theme-cosmic) .chatlogs::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-cosmic) .chatlogs::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea {\n  background: #fff;\n  width: 90%;\n  heigth: 50px;\n  border: 2px solid #eee;\n  border-radius: 3px;\n  resize: none;\n  padding: 10px;\n  color: #333;\n  margin-top: 15px;\n  float: left;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-cosmic) nb-tab {\n  height: calc(100% - 62px);\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .btn-send {\n  float: left;\n  margin-top: 15px;\n  width: 10%;\n  height: 64px;\n  font-size: 35px;\n  background-color: #eeeeee;\n  color: #011c3d;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n:host-context(.nb-theme-cosmic) .icon-send {\n  font-family: Ionicons; }\n\n:host-context(.nb-theme-cosmic) .icon-delete {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  bottom: 0;\n  margin: auto;\n  display: table;\n  font-size: 16px;\n  color: #fff;\n  font-family: Ionicons;\n  z-index: 9999;\n  opacity: 0; }\n\n:host-context(.nb-theme-cosmic) li:hover .icon-delete {\n  opacity: 1; }\n\n:host-context(.nb-theme-cosmic) .icon-delete:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3); }\n\n:host-context(.nb-theme-cosmic) .icon-refresh {\n  font-family: FontAwesome;\n  float: right;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .wrapper {\n  height: calc(100vh - 12.75rem) !important;\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) .containerChat {\n  width: 100%;\n  height: 100%;\n  background-color: #fff; }\n  :host-context(.nb-theme-cosmic) .containerChat .left {\n    float: left;\n    width: 37.6%;\n    height: 100%;\n    border: 1px solid #e6e6e6;\n    background-color: #fff; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .top {\n      position: relative;\n      width: 100%;\n      height: 96px;\n      padding: 29px; }\n      :host-context(.nb-theme-cosmic) .containerChat .left .top:after {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        display: block;\n        width: 80%;\n        height: 1px;\n        content: '';\n        background-color: #e6e6e6;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n    :host-context(.nb-theme-cosmic) .containerChat .left input {\n      float: left;\n      width: 100%;\n      height: 42px;\n      padding: 0 15px;\n      border: 1px solid #e6e6e6;\n      background-color: #eceff1;\n      border-radius: 21px; }\n      :host-context(.nb-theme-cosmic) .containerChat .left input:focus {\n        outline: none; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .search {\n      display: inline-block;\n      font-size: 20px;\n      position: relative;\n      top: 3px;\n      text-align: right;\n      color: #0b417a;\n      font-family: FontAwesome;\n      cursor: pointer;\n      margin-right: 5px; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .people {\n      margin-left: -1px;\n      border-right: 1px solid #e6e6e6;\n      border-left: 1px solid #e6e6e6;\n      width: calc(100% + 2px);\n      height: calc(100% - 70px);\n      overflow-y: scroll;\n      overflow-x: hidden; }\n      :host-context(.nb-theme-cosmic) .containerChat .left .people .person {\n        position: relative;\n        width: 100%;\n        padding: 12px 10% 16px;\n        cursor: pointer;\n        background-color: #fff;\n        list-style-type: none; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person:after {\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          display: block;\n          width: 80%;\n          height: 1px;\n          content: '';\n          background-color: #e6e6e6;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0); }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person img {\n          float: left;\n          width: 40px;\n          height: 40px;\n          margin-right: 12px;\n          border-radius: 50%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          background-color: #ddd; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .name {\n          font-size: 14px;\n          line-height: 22px;\n          color: #1a1a1a; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .time {\n          font-size: 14px;\n          position: absolute;\n          top: 16px;\n          right: 10%;\n          padding: 0 0 5px 5px;\n          color: #999;\n          background-color: #fff; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .preview {\n          font-size: 14px;\n          display: block;\n          overflow: hidden !important;\n          width: 70%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #999; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover {\n          margin-top: -1px;\n          margin-left: -1px;\n          padding-top: 13px;\n          border: 0;\n          background-color: #0b417a;\n          width: calc(100% + 2px);\n          padding-left: calc(10% + 1px); }\n          :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active span, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover span {\n            color: #fff;\n            background: transparent; }\n          :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active:after, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover:after {\n            display: none; }\n  :host-context(.nb-theme-cosmic) .containerChat .right {\n    position: relative;\n    float: left;\n    width: 62.4%;\n    height: 100%; }\n    :host-context(.nb-theme-cosmic) .containerChat .right .top {\n      width: 100%;\n      height: 47px;\n      padding: 15px 29px;\n      background-color: #fafafa;\n      border-top: 1px solid #eceef2; }\n      :host-context(.nb-theme-cosmic) .containerChat .right .top span {\n        font-size: 15px;\n        color: #999; }\n        :host-context(.nb-theme-cosmic) .containerChat .right .top span .name {\n          color: #1a1a1a; }\n\n:host-context(.nb-theme-cosmic) .content-initChat {\n  box-shadow: 0 2px 12px 0 #e4e8ef;\n  padding: 20px 5px;\n  text-align: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #0b417a;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .message-wrap {\n  padding: 0 10px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message {\n  position: relative;\n  padding: 7px 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail p {\n  margin: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  color: #333;\n  width: auto;\n  max-width: 80%; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-content {\n  background-color: #fff !important;\n  float: left; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail {\n  padding-left: 60px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .user-img {\n  left: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail .msg-content {\n  color: #343434; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail {\n  padding-right: 60px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-info {\n  text-align: right; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .user-img {\n  right: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-content {\n  background-color: #e0e0e0;\n  float: right; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-content span.triangle {\n  background-color: #e0e0e0;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_chat_service_chat_service__ = __webpack_require__("../../../../../src/app/services/chat-service/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_conversationsCli_service_conversations_cli_service__ = __webpack_require__("../../../../../src/app/services/conversationsCli-service/conversations-cli.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_conversationsRep_service_conversations_rep_service__ = __webpack_require__("../../../../../src/app/services/conversationsRep-service/conversations-rep.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_eventos_services_view_chat_event_service_view_chat_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/view-chat-event-service/view-chat-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_eventos_services_header_to_chat_event_service_header_to_chat_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/header-to-chat-event-service/header-to-chat-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_header_service_header_service__ = __webpack_require__("../../../../../src/app/services/header-service/header.service.ts");
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















var ChatBoxComponent = /** @class */ (function () {
    function ChatBoxComponent(sidebarService, modalService, toasterService, http, router, rutaService, fb, chatService, conversationsCliService, conversationsRepService, viewChatEventService, headerToChatEventService, headerService, datePipe) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.chatService = chatService;
        this.conversationsCliService = conversationsCliService;
        this.conversationsRepService = conversationsRepService;
        this.viewChatEventService = viewChatEventService;
        this.headerToChatEventService = headerToChatEventService;
        this.headerService = headerService;
        this.datePipe = datePipe;
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
        this.loading3 = false;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.admin_id = '';
        this.admin_imagen = '';
        this.chat_id = '';
        this.usuario_id = '';
        this.usuario_tipo = '';
        this.usuario_nombre = '';
        this.usuario_imagen = '';
        this.token_notificacion = '';
        this.send_msg = {
            emisor_id: 0,
            receptor_id: 0,
            msg: '',
            emisor: 'admin',
            token_notificacion: '',
            token: '',
            chat_id: '',
            created_at: new Date(),
            ciudad_id: '',
        };
        this.conversationsCli = [];
        this.conversationsRep = [];
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.ciudad_id = localStorage.getItem('mouvers_ciudad');
        //----Tabla<
        this.titulo_tabla = '';
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        //Detectar evento add msg al chat
        this.viewChatEventService.viewChatData.subscribe(function (data) {
            //console.log(data); 
            _this.addMsgEvent(data);
        });
        //Detectar evento cargar chat de notificacion entrante
        this.headerToChatEventService.headerToChatData.subscribe(function (data) {
            //console.log(data); 
            _this.headerEvent(data);
        });
        //Datos del admin
        this.admin_id = localStorage.getItem('mouvers_user_id');
        this.admin_imagen = localStorage.getItem('mouvers_user_imagen');
        //Datos del ususario (cliente/repartidor)
        this.chat_id = localStorage.getItem('mouvers_chat_id');
        this.usuario_id = localStorage.getItem('mouvers_usuario_id');
        this.usuario_tipo = localStorage.getItem('mouvers_usuario_tipo');
        this.usuario_nombre = localStorage.getItem('mouvers_usuario_nombre');
        this.usuario_imagen = localStorage.getItem('mouvers_usuario_imagen');
        this.token_notificacion = localStorage.getItem('mouvers_usuario_token_notifi');
        this.toUser = {
            id: this.usuario_id
        };
        this.chatService.getUserInfo(this.admin_id, this.admin_imagen)
            .then(function (res) {
            _this.user = res;
        });
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo == '0' || this.mouvers_user_tipo == '1' || this.mouvers_user_tipo == '5' || this.mouvers_user_tipo == '6' || this.mouvers_user_tipo == '7') {
        }
        else {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            localStorage.removeItem('mouvers__ciudad');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.toggleSidebar();
        //alert(this.chat_id);
        //get message list
        if (this.chat_id != '' && this.chat_id != 'null' && this.chat_id) {
            this.getMsg();
        }
        // Subscribe to received  new message events
        /*this.events.subscribe('chat:received', msg => {

          this.pushNewMsg(msg);
          console.log(msg)
        })*/
        this.conversationsCli$ = this.conversationsCliService.getConversations$();
        this.conversationsCliSubscription = this.conversationsCli$.subscribe(function (conversationsCli) { return _this.conversationsCli = conversationsCli; });
        this.initConversationsCli();
        //this.conversationsCli = this.conversationsCliService.getConversas();
        this.conversationsRep$ = this.conversationsRepService.getConversations$();
        this.conversationsRepSubscription = this.conversationsRep$.subscribe(function (conversationsRep) { return _this.conversationsRep = conversationsRep; });
        this.initConversationsRep();
        //this.conversationsRep = this.conversationsRepService.getConversas();
    };
    ChatBoxComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('mouvers_chat_id', '');
        localStorage.setItem('mouvers_usuario_id', '');
        localStorage.setItem('mouvers_usuario_tipo', '');
        localStorage.setItem('mouvers_usuario_nombre', '');
        localStorage.setItem('mouvers_usuario_imagen', '');
        localStorage.setItem('mouvers_usuario_token_notifi', '');
        this.conversationsCliSubscription.unsubscribe();
        this.conversationsRepSubscription.unsubscribe();
    };
    ChatBoxComponent.prototype.initConversationsCli = function () {
        var _this = this;
        this.conversationsCliService.resetConversas();
        this.loading2 = true;
        this.http.get(this.rutaService.getRutaApi() + 'chats/clientes?ciudad_id=' + this.ciudad_id + '&token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            //console.log(dataCli);
            _this.dataCli = data;
            var chats = _this.dataCli.chats;
            for (var i = 0; i < chats.length; ++i) {
                var aux = {
                    id: chats[i].id,
                    admin_id: chats[i].admin_id,
                    usuario_id: chats[i].usuario_id,
                    created_at: chats[i].created_at,
                    updated_at: chats[i].updated_at,
                    ultimo_msg: {
                        id: chats[i].ultimo_msg.id,
                        msg: chats[i].ultimo_msg.msg,
                        created_at: chats[i].ultimo_msg.created_at,
                    },
                    usuario: {
                        id: chats[i].usuario.id,
                        nombre: chats[i].usuario.nombre,
                        imagen: chats[i].usuario.imagen,
                        tipo_usuario: chats[i].usuario.tipo_usuario,
                        token_notificacion: chats[i].usuario.token_notificacion,
                    },
                };
                _this.conversationsCliService.agregarConversation(aux);
            }
            _this.loading2 = false;
            console.log('Chats Clientes:');
            console.log(_this.conversationsCliService.getConversas());
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
        });
    };
    ChatBoxComponent.prototype.initConversationsRep = function () {
        var _this = this;
        this.conversationsRepService.resetConversas();
        this.loading3 = true;
        this.http.get(this.rutaService.getRutaApi() + 'chats/repartidores?ciudad_id=' + this.ciudad_id + '&token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            //console.log(dataCli);
            _this.dataRep = data;
            var chats = _this.dataRep.chats;
            for (var i = 0; i < chats.length; ++i) {
                var aux = {
                    id: chats[i].id,
                    admin_id: chats[i].admin_id,
                    usuario_id: chats[i].usuario_id,
                    created_at: chats[i].created_at,
                    updated_at: chats[i].updated_at,
                    ultimo_msg: {
                        id: chats[i].ultimo_msg.id,
                        msg: chats[i].ultimo_msg.msg,
                        created_at: chats[i].ultimo_msg.created_at,
                    },
                    usuario: {
                        id: chats[i].usuario.id,
                        nombre: chats[i].usuario.nombre,
                        imagen: chats[i].usuario.imagen,
                        tipo_usuario: chats[i].usuario.tipo_usuario,
                        token_notificacion: chats[i].usuario.token_notificacion,
                    },
                };
                _this.conversationsRepService.agregarConversation(aux);
            }
            _this.loading3 = false;
            console.log('Chats Repartidores:');
            console.log(_this.conversationsRepService.getConversas());
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading3 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
        });
    };
    /*Ocultar sidebar*/
    ChatBoxComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    //Abrir modal por defecto
    ChatBoxComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    ChatBoxComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: true, container: 'nb-layout', keyboard: true });
    };
    ChatBoxComponent.prototype.getMsg = function () {
        var _this = this;
        //this.loading = true;
        this.msgList = [];
        console.log(this.usuario_tipo);
        return this.chatService.getMsgList(this.chat_id, this.usuario_tipo).subscribe(function (res) {
            _this.msgList = res;
            _this.loading = false;
            _this.scrollToBottom();
            _this.clearHeaderConversation();
            _this.putLeer();
        });
    };
    ChatBoxComponent.prototype.enterMsg = function (event) {
        if (event.keyCode == 13) {
            this.sendMsg();
            event.preventDefault();
        }
    };
    ChatBoxComponent.prototype.sendMsg = function () {
        if (!this.editorMsg.trim())
            return;
        if (this.usuario_id == '' || this.usuario_id == 'null' || !this.usuario_id) {
            this.showToast('info', 'Info!', 'Debe seleccionar un cliente o un repartidor.');
            return;
        }
        // Mock message
        var id = Date.now().toString();
        var newMsg = {
            id: Date.now().toString(),
            emisor_id: parseInt(this.user.id),
            userAvatar: this.user.avatar,
            receptor_id: parseInt(this.toUser.id),
            created_at: Date.now(),
            msg: this.editorMsg,
            status: 1
        };
        this.pushNewMsg(newMsg);
        this.chatService.sendMsg(newMsg).then(function () { });
        this.sendMsgServer(this.editorMsg, id);
        this.editorMsg = '';
        this.setUltimoMsg(newMsg);
    };
    ChatBoxComponent.prototype.sendMsgServer = function (msg, id) {
        var _this = this;
        //Peticion a la tabla de mensajes de los clientes
        if (this.usuario_tipo == '2') {
            var url_final = 'clientes';
        }
        else if (this.usuario_tipo == '3' || this.usuario_tipo == '4') {
            var url_final = 'repartidores';
        }
        this.send_msg.emisor_id = parseInt(this.admin_id);
        this.send_msg.receptor_id = parseInt(this.usuario_id);
        this.send_msg.msg = msg;
        this.send_msg.token_notificacion = this.token_notificacion;
        this.send_msg.chat_id = this.chat_id;
        this.send_msg.token = localStorage.getItem('mouvers_token');
        var date;
        date = new Date();
        date = this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss");
        this.send_msg.created_at = date;
        this.send_msg.ciudad_id = this.ciudad_id;
        console.log(this.send_msg);
        console.log(url_final);
        this.http.post(this.rutaService.getRutaApi() + 'chats/' + url_final + '/mensaje', this.send_msg)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.datos = data;
            _this.chat_id = (_this.datos.chat.id).toString();
            _this.admin_id = (_this.datos.chat.admin_id).toString();
            _this.token_notificacion = _this.datos.msg.token_notificacion;
            //Datos del ususario (cliente/repartidor)
            localStorage.setItem('mouvers_chat_id', _this.datos.chat.id);
            localStorage.setItem('mouvers_usuario_id', _this.datos.chat.usuario_id);
            localStorage.setItem('mouvers_usuario_tipo', _this.usuario_tipo);
            //localStorage.setItem('mouvers_usuario_nombre', usuario_nombre);
            //localStorage.setItem('mouvers_usuario_imagen', usuario_imagen);
            localStorage.setItem('mouvers_usuario_token_notifi', _this.datos.msg.token_notificacion);
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 2;
            }
            /*Actualizar el chat_id en los servicios de las conversas*/
            if (_this.usuario_tipo == '2') {
                _this.conversationsCliService.updateConversa(_this.datos.chat.id, _this.datos.chat.usuario_id, _this.datos.msg.token_notificacion);
                /*for (var i = 0; i < this.conversationsCli.length; ++i) {
                    if (this.conversationsCli[i].id == 0 || this.conversationsCli[i].usuario.id == this.datos.chat.usuario_id) {
                        this.conversationsCli[i].id = this.datos.chat.id;
                        this.conversationsCli[i].usuario.token_notificacion = this.datos.msg.token_notificacion;
                    }
                }*/
            }
            else if (_this.usuario_tipo == '3') {
                _this.conversationsRepService.updateConversa(_this.datos.chat.id, _this.datos.chat.usuario_id, _this.datos.msg.token_notificacion);
                /*for (var i = 0; i < this.conversationsRep.length; ++i) {
                    if (this.conversationsRep[i].id == 0 || this.conversationsRep[i].usuario.id == this.datos.chat.usuario_id) {
                        this.conversationsRep[i].id = this.datos.chat.id;
                        this.conversationsRep[i].usuario.token_notificacion = this.datos.msg.token_notificacion;
                    }
                }*/
            }
            _this.clearHeaderConversation2(parseInt(_this.chat_id), parseInt(_this.usuario_id), parseInt(_this.admin_id), parseInt(_this.usuario_tipo));
            _this.putLeer();
        }, function (msg) {
            console.log(msg);
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 3;
            }
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
        });
    };
    ChatBoxComponent.prototype.pushNewMsg = function (msg) {
        var userId = parseInt(this.user.id), toUserId = parseInt(this.toUser.id);
        if (msg.emisor_id === userId && msg.receptor_id === toUserId) {
            this.msgList.push(msg);
        }
        else if (msg.receptor_id === userId && msg.emisor_id === toUserId) {
            this.msgList.push(msg);
        }
        this.scrollToBottom();
    };
    ChatBoxComponent.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.id === id; });
    };
    ChatBoxComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.chatContent.nativeElement.scrollTop = _this.chatContent.nativeElement.scrollHeight;
        }, 400);
    };
    ChatBoxComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.usuario.nombre;
    };
    ChatBoxComponent.prototype.deletChat = function () {
        var _this = this;
        console.log(this.objAEliminar);
        //Peticion a la tabla de mensajes de los clientes
        if (this.objAEliminar.usuario.tipo_usuario == '2') {
            var url_final = 'clientes';
        }
        else if (this.objAEliminar.usuario.tipo_usuario == '3' || this.objAEliminar.usuario.tipo_usuario == '4') {
            var url_final = 'repartidores';
        }
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        localStorage.setItem('mouvers_chat_id', '');
        localStorage.setItem('mouvers_usuario_nombre', '');
        this.http.delete(this.rutaService.getRutaApi() + 'chats/' + url_final + '/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.clearHeaderConversation2(parseInt(_this.chat_id), parseInt(_this.usuario_id), parseInt(_this.admin_id), parseInt(_this.usuario_tipo));
            if (_this.chat_id != '' && _this.chat_id != 'null' && _this.chat_id) {
                if (parseInt(_this.chat_id) == _this.eliminar_id && parseInt(_this.usuario_id) == _this.objAEliminar.usuario.id) {
                    _this.msgList = [];
                    _this.chat_id = '';
                    _this.usuario_nombre = '';
                }
            }
            if (_this.objAEliminar.usuario.tipo_usuario == '2') {
                _this.conversationsCliService.deleteConversation(_this.eliminar_id);
                /*var aux = this.conversationsCli;

                this.conversationsCli = [];

                for (var i = 0; i < aux.length; ++i) {
                    if (this.eliminar_id != aux[i].id) {
                        this.conversationsCli.push(aux[i]);
                    }
                }*/
            }
            else if (_this.objAEliminar.usuario.tipo_usuario == '3') {
                _this.conversationsRepService.deleteConversation(_this.eliminar_id);
                /*var aux = this.conversationsRep;

                this.conversationsRep = [];

                for (var i = 0; i < aux.length; ++i) {
                    if (this.eliminar_id != aux[i].id) {
                        this.conversationsRep.push(aux[i]);
                    }
                }*/
            }
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404 || msg.status == 409) {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    ChatBoxComponent.prototype.refreshChat = function () {
        //get message list
        if (this.chat_id != '' && this.chat_id != 'null' && this.chat_id) {
            this.getMsg();
            if (this.usuario_tipo == '2') {
                this.initConversationsCli();
            }
            else if (this.usuario_tipo == '3') {
                this.initConversationsRep();
            }
        }
    };
    ChatBoxComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["b" /* ToasterConfig */]({
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
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    ChatBoxComponent.prototype.printConversas = function () {
        //console.log(this.conversationsCliService.getConversas());
        console.log(this.conversationsCli);
        console.log(this.conversationsRep);
    };
    ChatBoxComponent.prototype.addConversa = function (msg) {
        var aux = {
            id: 0,
            admin_id: parseInt(this.admin_id),
            usuario_id: parseInt(this.usuario_id),
            created_at: msg.created_at,
            updated_at: msg.created_at,
            ultimo_msg: {
                id: msg.id,
                msg: msg.msg,
                created_at: msg.created_at,
            },
            usuario: {
                id: parseInt(this.usuario_id),
                nombre: this.usuario_nombre,
                imagen: this.usuario_imagen,
                tipo_usuario: parseInt(this.usuario_tipo),
                token_notificacion: this.token_notificacion,
            },
        };
        if (this.usuario_tipo == '2') {
            this.conversationsCliService.agregarConversation(aux);
        }
        else if (this.usuario_tipo == '3') {
            this.conversationsRepService.agregarConversation(aux);
        }
    };
    /*Cargar el chat de una conversa de la lista*/
    ChatBoxComponent.prototype.getChatOfConversa = function (conversa) {
        if (conversa.usuario.id != this.usuario_id) {
            //console.log(conversa);
            this.setUsuario(conversa.id, conversa.usuario.id, conversa.usuario.tipo_usuario, conversa.usuario.nombre, conversa.usuario.imagen, conversa.usuario.token_notificacion);
            //get message list
            if (this.chat_id != '' && this.chat_id != 'null' && this.chat_id) {
                this.getMsg();
            }
        }
    };
    /*Setear el usuario seleccionado de la lista de conversas
    o de la lista de usarios(clientes/repartidores)*/
    ChatBoxComponent.prototype.setUsuario = function (chat_id, usuario_id, usuario_tipo, usuario_nombre, usuario_imagen, token_notificacion) {
        //Datos del ususario (cliente/repartidor)
        console.log('USUARIOTIPO: ' + usuario_tipo);
        console.log('USUARIOTIPO: ' + usuario_id);
        localStorage.setItem('mouvers_chat_id', chat_id);
        localStorage.setItem('mouvers_usuario_id', usuario_id);
        localStorage.setItem('mouvers_usuario_tipo', usuario_tipo);
        localStorage.setItem('mouvers_usuario_nombre', usuario_nombre);
        localStorage.setItem('mouvers_usuario_imagen', usuario_imagen);
        localStorage.setItem('mouvers_usuario_token_notifi', token_notificacion);
        /*this.chat_id = chat_id;
        this.usuario_id = usuario_id;
        this.usuario_tipo = usuario_tipo;
        this.usuario_nombre = usuario_nombre;
        this.usuario_imagen = usuario_imagen;
        this.token_notificacion = token_notificacion;*/
        //Datos del ususario (cliente/repartidor)
        this.chat_id = localStorage.getItem('mouvers_chat_id');
        this.usuario_id = localStorage.getItem('mouvers_usuario_id');
        this.usuario_tipo = localStorage.getItem('mouvers_usuario_tipo');
        this.usuario_nombre = localStorage.getItem('mouvers_usuario_nombre');
        this.usuario_imagen = localStorage.getItem('mouvers_usuario_imagen');
        this.token_notificacion = localStorage.getItem('mouvers_usuario_token_notifi');
        this.toUser = {
            id: this.usuario_id
        };
    };
    /*Setear el ultimo mensaje en la lista de conversaciones*/
    ChatBoxComponent.prototype.setUltimoMsg = function (msg) {
        if (this.usuario_tipo == '2') {
            if (this.chat_id != '' && this.chat_id != 'null' && this.chat_id) {
                for (var i = 0; i < this.conversationsCli.length; ++i) {
                    if (this.conversationsCli[i].id == parseInt(this.chat_id)) {
                        this.conversationsCli[i].ultimo_msg.msg = msg.msg;
                        this.conversationsCli[i].ultimo_msg.created_at = msg.created_at;
                    }
                }
            }
            else {
                this.addConversa(msg);
            }
        }
        else if (this.usuario_tipo == '3') {
            if (this.chat_id != '' && this.chat_id != 'null' && this.chat_id) {
                for (var i = 0; i < this.conversationsRep.length; ++i) {
                    if (this.conversationsRep[i].id == parseInt(this.chat_id)) {
                        this.conversationsRep[i].ultimo_msg.msg = msg.msg;
                        this.conversationsRep[i].ultimo_msg.created_at = msg.created_at;
                    }
                }
            }
            else {
                this.addConversa(msg);
            }
        }
    };
    /*Cargar la lista de clientes o de repartidores*/
    ChatBoxComponent.prototype.getUsuariosCliRep = function (modal2, tipo) {
        var _this = this;
        if (tipo == 2) {
            var url_final = 'usuarios';
            this.titulo_tabla = 'Usuarios';
        }
        else if (tipo == 3 || tipo == 4) {
            var url_final = 'usuarios/repartidores/aux';
            this.titulo_tabla = 'Repartidores';
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + url_final + '?ciudad_id=' + this.ciudad_id + '&token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.usuarios;
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
            _this.init();
            _this.loading = false;
            _this.open2(modal2);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    /*Tratamineto para el usuario(Cliente/Repartidor)
    seleccionado de la lista(tabla)*/
    ChatBoxComponent.prototype.selectUsuarioList = function (userSelecto) {
        console.log(userSelecto);
        var chat_id;
        if (userSelecto.tipo_usuario == 2) {
            if (userSelecto.chat_cliente) {
                chat_id = userSelecto.chat_cliente.id;
            }
            else {
                chat_id = '';
            }
        }
        else if (userSelecto.tipo_usuario == 3) {
            if (userSelecto.chat_repartidor) {
                chat_id = userSelecto.chat_repartidor.id;
            }
            else {
                chat_id = '';
            }
        }
        this.setUsuario(chat_id, userSelecto.id, userSelecto.tipo_usuario, userSelecto.nombre, userSelecto.imagen, userSelecto.token_notificacion);
        //this.refreshChat();
        //get message list
        if (this.chat_id != '' && this.chat_id != 'null' && this.chat_id) {
            this.getMsg();
        }
        else {
            this.msgList = [];
        }
    };
    ChatBoxComponent.prototype.addMsgEvent = function (data) {
        var obj = JSON.parse(data.obj);
        var newMsg = {
            id: Date.now().toString(),
            emisor_id: parseInt(obj.emisor.id),
            userAvatar: obj.emisor.imagen,
            receptor_id: parseInt(this.user.id),
            created_at: Date.now(),
            msg: data.contenido,
            status: 1
        };
        /*Si tengo cargado el chat
        de la notificacion entrante
        actualizo la caja de chat*/
        if (this.chat_id != '' && this.chat_id != 'null' && this.chat_id) {
            if (obj.chat_id == parseInt(this.chat_id) &&
                obj.emisor.tipo_usuario == parseInt(this.usuario_tipo)) {
                this.msgList.push(newMsg);
                this.scrollToBottom();
            }
        }
        /*Actulizar la lista de conversaciones*/
        if (obj.emisor.tipo_usuario == 2) {
            var actualizado = false;
            for (var i = 0; i < this.conversationsCli.length; ++i) {
                if (this.conversationsCli[i].id == obj.chat_id) {
                    this.conversationsCli[i].ultimo_msg.msg = newMsg.msg;
                    this.conversationsCli[i].ultimo_msg.created_at = newMsg.created_at;
                    actualizado = true;
                }
            }
            if (!actualizado) {
                var aux = {
                    id: obj.chat_id,
                    admin_id: parseInt(this.admin_id),
                    usuario_id: obj.emisor.id,
                    created_at: newMsg.created_at,
                    updated_at: newMsg.created_at,
                    ultimo_msg: {
                        id: Date.now(),
                        msg: newMsg.msg,
                        created_at: newMsg.created_at,
                    },
                    usuario: {
                        id: obj.emisor.id,
                        nombre: obj.emisor.nombre,
                        imagen: obj.emisor.imagen,
                        tipo_usuario: obj.emisor.tipo_usuario,
                        token_notificacion: obj.emisor.token_notificacion,
                    },
                };
                this.conversationsCliService.agregarConversation(aux);
            }
        }
        else if (obj.emisor.tipo_usuario == 3) {
            var actualizado = false;
            for (var i = 0; i < this.conversationsRep.length; ++i) {
                if (this.conversationsRep[i].id == obj.chat_id) {
                    this.conversationsRep[i].ultimo_msg.msg = newMsg.msg;
                    this.conversationsRep[i].ultimo_msg.created_at = newMsg.created_at;
                    actualizado = true;
                }
            }
            if (!actualizado) {
                var aux = {
                    id: obj.chat_id,
                    admin_id: parseInt(this.admin_id),
                    usuario_id: obj.emisor.id,
                    created_at: newMsg.created_at,
                    updated_at: newMsg.created_at,
                    ultimo_msg: {
                        id: Date.now(),
                        msg: newMsg.msg,
                        created_at: newMsg.created_at,
                    },
                    usuario: {
                        id: obj.emisor.id,
                        nombre: obj.emisor.nombre,
                        imagen: obj.emisor.imagen,
                        tipo_usuario: obj.emisor.tipo_usuario,
                        token_notificacion: obj.emisor.token_notificacion,
                    },
                };
                this.conversationsRepService.agregarConversation(aux);
            }
        }
    };
    ChatBoxComponent.prototype.headerEvent = function (msg) {
        this.setUsuario(msg.chat_id, msg.emisor.id, msg.emisor.tipo_usuario, msg.emisor.nombre, msg.emisor.imagen, msg.emisor.token_notificacion);
        //get message list
        if (this.chat_id != '' && this.chat_id != 'null' && this.chat_id) {
            this.getMsg();
        }
    };
    //Borrar de la lista de header al abrir un chat
    ChatBoxComponent.prototype.clearHeaderConversation = function () {
        var aux = {
            chat_id: parseInt(this.chat_id),
            emisor_id: parseInt(this.usuario_id),
            receptor_id: parseInt(this.admin_id),
            emisor: {
                id: parseInt(this.usuario_id),
                tipo_usuario: parseInt(this.usuario_tipo)
            }
        };
        //console.log(aux);
        this.headerService.clearConversationAux(aux);
    };
    //Borrar de la lista de header al borrar un chat
    ChatBoxComponent.prototype.clearHeaderConversation2 = function (chat_id, usuario_id, admin_id, usuario_tipo) {
        var aux = {
            chat_id: parseInt(this.chat_id),
            emisor_id: parseInt(this.usuario_id),
            receptor_id: parseInt(this.admin_id),
            emisor: {
                id: parseInt(this.usuario_id),
                tipo_usuario: parseInt(this.usuario_tipo)
            }
        };
        //console.log(aux);
        this.headerService.clearConversationAux(aux);
    };
    //Actualizar los mensajes en la API a leidos (estado=2)
    ChatBoxComponent.prototype.putLeer = function () {
        var _this = this;
        console.log(this.usuario_tipo);
        //Peticion a la tabla de mensajes de los clientes
        if (this.usuario_tipo == '2') {
            var url_final = 'clientes';
        }
        else if (this.usuario_tipo == '3' || this.usuario_tipo == '4') {
            var url_final = 'repartidores';
        }
        var datos = {
            chat_id: parseInt(this.chat_id),
            receptor_id: parseInt(this.admin_id),
            token: localStorage.getItem('mouvers_token'),
        };
        console.log(datos);
        this.http.put(this.rutaService.getRutaApi() + 'chats/' + url_final + '/leer', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
        }, function (msg) {
            console.log(msg);
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
        });
    };
    ChatBoxComponent.prototype.init = function () {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
        if (this.filteredItems.length % this.pageSize != 0) {
            this.pageNumber++;
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log("this.pageNumber :  " + this.pageNumber);
    };
    ChatBoxComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].email.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                } /*else if (this.productList[i].ciudad.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                   this.filteredItems.push(this.productList[i]);
                }else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                   this.filteredItems.push(this.productList[i]);
                }*/
                else if (this.productList[i].telefono.indexOf(this.inputName) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
            }
        }
        else {
            this.filteredItems = this.productList;
        }
        console.log(this.filteredItems);
        this.init();
    };
    ChatBoxComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    ChatBoxComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    ChatBoxComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    ChatBoxComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    ChatBoxComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollChat'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatBoxComponent.prototype, "chatContent", void 0);
    ChatBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chat-box',
            styles: [__webpack_require__("../../../../../src/app/pages/chat-box/chat-box.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/chat-box/chat-box.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__nebular_theme__["l" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_10__services_chat_service_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_11__services_conversationsCli_service_conversations_cli_service__["a" /* ConversationsCliService */],
            __WEBPACK_IMPORTED_MODULE_12__services_conversationsRep_service_conversations_rep_service__["a" /* ConversationsRepService */],
            __WEBPACK_IMPORTED_MODULE_14__services_eventos_services_view_chat_event_service_view_chat_event_service__["a" /* ViewChatEventService */],
            __WEBPACK_IMPORTED_MODULE_15__services_eventos_services_header_to_chat_event_service_header_to_chat_event_service__["a" /* HeaderToChatEventService */],
            __WEBPACK_IMPORTED_MODULE_16__services_header_service_header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/chat-box/chat-box.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxModule", function() { return ChatBoxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_box_routing_module__ = __webpack_require__("../../../../../src/app/pages/chat-box/chat-box-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_relative_time2_relative_time2__ = __webpack_require__("../../../../../src/app/pipes/relative-time2/relative-time2.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Mis imports



var ChatBoxModule = /** @class */ (function () {
    function ChatBoxModule() {
    }
    ChatBoxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__chat_box_routing_module__["a" /* ChatBoxRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_4_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__chat_box_routing_module__["b" /* routedComponents */].concat([
                __WEBPACK_IMPORTED_MODULE_6__pipes_relative_time2_relative_time2__["a" /* RelativeTimePipe2 */]
            ]),
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]
            ],
        })
    ], ChatBoxModule);
    return ChatBoxModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/relative-time2/relative-time2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe2; });
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
var RelativeTimePipe2 = /** @class */ (function () {
    function RelativeTimePipe2() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTimePipe2.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now_index_js__(new Date(value), { addSuffix: true, locale: __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_es_index_js__ });
    };
    RelativeTimePipe2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'relativeTime',
        })
    ], RelativeTimePipe2);
    return RelativeTimePipe2;
}());



/***/ })

});
//# sourceMappingURL=chat-box.module.chunk.js.map