webpackJsonp(["pages-simples.module"],{

/***/ "../../../../../src/app/pages-simples/loginf/loginf.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"col-md-12\">\n    Inicio de sesión loginf\n      \n        <form>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Correo electronico</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Correo electronico\" [(ngModel)]=\"email\" name=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Contraseña</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Contraseña\" [(ngModel)]=\"password\" name=\"password\">\n          </div>\n          <div class=\"form-group\">\n            Recordar mis datos\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\" (click)=\"Ingresar()\">Ingresar</button>\n        </form>\n  </div>\n</div> -->\n\n<nb-layout >\n\n  <nb-layout-column style=\"background-color: rgba(0,82,150,1);\">\n    <!-- <nb-card-header>\n      <h2 class=\"title\">Login</h2>\n      <small class=\"form-text sub-title\">Hola! Ingresa con tu Email y Password</small>\n    </nb-card-header> -->\n    <nb-card style=\"background-color: rgba(255,255,255,1);\">\n      <nb-card-body>\n        \n        \n        <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n\n          <img src=\"assets/images/service24.png\" alt=\"\" height=\"auto\" width=\"350px\" style=\"display:block; margin:auto\"/>\n          <br>\n          <br>\n          <h2 class=\"title\" style=\"color: rgba(0,0,0,1);\">INICIAR SESIÓN</h2>\n          <!-- <small class=\"form-text sub-title\">Para acceder ingresa tu Email y Password</small> -->\n          <br>\n\n          <form (ngSubmit)=\"Ingresar()\" #form=\"ngForm\" autocomplete=\"nope\">\n\n            <div class=\"form-group\">\n              <label for=\"input-email\" style=\"color: rgba(0,0,0,1);\">EMAIL</label>\n                <input name=\"email\" [(ngModel)]=\"email\" id=\"input-email\" pattern=\".+@.+..+\" class=\"form-control\" placeholder=\"\" style=\"background-color: rgba(228,118,21,1);\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"input-password\" style=\"color: rgba(0,0,0,1);\">PASSWORD</label>\n              <input name=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"input-password\" class=\"form-control\" placeholder=\"\"  style=\"background-color: rgba(228,118,21,1);\"> \n            </div>\n\n            <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"                [class.btn-pulse]=\"submitted\">INGRESAR </button>\n          </form>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </nb-layout-column>\n</nb-layout>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div> \n\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/pages-simples/loginf/loginf.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem; }\n\n:host /deep/ nb-card {\n  height: calc(100vh - 2 * 2.5rem); }\n\n:host /deep/ nb-card {\n  margin: 0; }\n\n:host /deep/ .flex-centered {\n  margin: auto; }\n\n:host /deep/ nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n@media (max-width: 550px) {\n  :host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n    padding: 0; }\n  :host /deep/ nb-card {\n    border-radius: 0;\n    height: 100vh; } }\n\n:host /deep/ nb-card {\n  background-color: rgba(5, 26, 63, 0.86);\n  box-shadow: 0 8px 20px 0 rgba(5, 27, 63, 0.6); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages-simples/loginf/loginf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__);
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





var LoginfComponent = /** @class */ (function () {
    function LoginfComponent(toasterService, http, rutaService, router, route, nbspinnerservice, themeService) {
        this.toasterService = toasterService;
        this.http = http;
        this.rutaService = rutaService;
        this.router = router;
        this.route = route;
        this.nbspinnerservice = nbspinnerservice;
        this.themeService = themeService;
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
        //----Alertas--->
        this.email = '';
        this.password = '';
        this.loading = false;
        this.submitted = false;
        nbspinnerservice.load();
        nbspinnerservice.clear();
    }
    LoginfComponent.prototype.ngOnInit = function () {
        this.themeService.changeTheme('cosmic');
        //this.themeService.changeTheme('default');
        //console.log(this.router.url);
        var OneSignal = window['OneSignal'] || [];
        OneSignal.push(function () {
            /* These examples are all valid */
            OneSignal.getUserId(function (userId) {
                console.log(userId);
                localStorage.setItem('mouvers_token_notificacion', userId);
                if (!userId) {
                    console.log('Register For Push');
                    OneSignal.push(["registerForPushNotifications"]);
                }
            });
        });
    };
    LoginfComponent.prototype.showToast = function (type, title, body) {
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
    LoginfComponent.prototype.Ingresar = function () {
        var _this = this;
        this.loading = true;
        this.submitted = true;
        //this.router.navigateByUrl('/pages/dashboard');
        console.log(localStorage.getItem('mouvers_token_notificacion'));
        var datos = {
            email: this.email,
            password: this.password,
            token_notificacion: localStorage.getItem('mouvers_token_notificacion')
        };
        this.http.post(this.rutaService.getRutaApi() + 'login/web', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            localStorage.setItem('mouvers_token', _this.data.token);
            localStorage.setItem('mouvers_user_id', _this.data.user.id);
            localStorage.setItem('mouvers_user_nombre', _this.data.user.nombre);
            localStorage.setItem('mouvers_user_imagen', _this.data.user.imagen);
            localStorage.setItem('mouvers_user_tipo', _this.data.user.tipo_usuario);
            localStorage.setItem('mouvers_ciudad', _this.data.user.ciudad);
            localStorage.setItem('mouvers_pais', _this.data.user.pais_id);
            localStorage.setItem('id_operacion', "");
            console.log('ciudad: ' + localStorage.getItem('mouvers_ciudad'));
            console.log('pais: ' + localStorage.getItem('mouvers_pais'));
            console.log('tipo: ' + localStorage.getItem('mouvers_user_tipo'));
            if (_this.data.user.tipo_usuario == 0 || _this.data.user.tipo_usuario == 1 || _this.data.user.tipo_usuario == 5 || _this.data.user.tipo_usuario == 6 || _this.data.user.tipo_usuario == 7) {
                _this.router.navigateByUrl('/pages/dashboard');
                //this.router.navigate(['pages']);
            }
            else if (_this.data.user.tipo_usuario == 4) {
                _this.router.navigateByUrl('/pages/mi/dashboard');
                //this.router.navigate(['pages']);
            }
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            //console.log(msg.error.error);
            //alert('Error: '+msg.error.error);
            _this.showToast('error', 'Error!', msg.error.error);
            _this.loading = false;
            _this.submitted = false;
        });
    };
    LoginfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-loginf',
            styles: [__webpack_require__("../../../../../src/app/pages-simples/loginf/loginf.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages-simples/loginf/loginf.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSpinnerService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], LoginfComponent);
    return LoginfComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages-simples/loginf/loginf.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginfModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginf_component__ = __webpack_require__("../../../../../src/app/pages-simples/loginf/loginf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Mis imports




var LoginfModule = /** @class */ (function () {
    function LoginfModule() {
    }
    LoginfModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_4_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.7)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loginf_component__["a" /* LoginfComponent */],
            ],
        })
    ], LoginfModule);
    return LoginfModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages-simples/pages-simples-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesSimplesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_simples_component__ = __webpack_require__("../../../../../src/app/pages-simples/pages-simples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginf_loginf_component__ = __webpack_require__("../../../../../src/app/pages-simples/loginf/loginf.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_simples_component__["a" /* PagesSimplesComponent */],
        children: [{
                path: 'loginf',
                component: __WEBPACK_IMPORTED_MODULE_3__loginf_loginf_component__["a" /* LoginfComponent */],
            }, {
                path: '',
                redirectTo: 'loginf',
                pathMatch: 'full',
            }],
    }];
var PagesSimplesRoutingModule = /** @class */ (function () {
    function PagesSimplesRoutingModule() {
    }
    PagesSimplesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], PagesSimplesRoutingModule);
    return PagesSimplesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages-simples/pages-simples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesSimplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagesSimplesComponent = /** @class */ (function () {
    function PagesSimplesComponent() {
    }
    PagesSimplesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-pages-simples',
            template: "\n      <router-outlet></router-outlet>\n  ",
        })
    ], PagesSimplesComponent);
    return PagesSimplesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages-simples/pages-simples.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesSimplesModule", function() { return PagesSimplesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_simples_component__ = __webpack_require__("../../../../../src/app/pages-simples/pages-simples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginf_loginf_module__ = __webpack_require__("../../../../../src/app/pages-simples/loginf/loginf.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_simples_routing_module__ = __webpack_require__("../../../../../src/app/pages-simples/pages-simples-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Mis imports




//import { ToasterModule } from 'angular2-toaster';
var PAGESSIMPLES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_simples_component__["a" /* PagesSimplesComponent */],
];
var PagesSimplesModule = /** @class */ (function () {
    function PagesSimplesModule() {
    }
    PagesSimplesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                //ToasterModule,
                __WEBPACK_IMPORTED_MODULE_3__pages_simples_routing_module__["a" /* PagesSimplesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__loginf_loginf_module__["a" /* LoginfModule */],
            ],
            declarations: PAGESSIMPLES_COMPONENTS.slice(),
        })
    ], PagesSimplesModule);
    return PagesSimplesModule;
}());



/***/ })

});
//# sourceMappingURL=pages-simples.module.chunk.js.map