webpackJsonp(["cobro.module"],{

/***/ "../../../../../src/app/pages/cobro/cobro-crear/cobro-crear.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!editando && mostrar\">\n  <nb-card-header>\n    <div class=\"row show-grid\">\n          <div class=\"col-6\">\n            <div>Lista de proveedores</div>\n          </div>\n          <div class=\"col-6\">\n            <div>\n              <div style=\"text-align: right;\">\n               <strong>Buscar: </strong>\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <table class=\"table\">\n      <thead>\n         <th style=\"text-align: center;\">Imagen</th>\n         <th style=\"text-align: center;\">Nombre</th>\n         <th style=\"text-align: center;\">Email</th>\n         <th style=\"text-align: center;\">Teléfono</th>\n         <th style=\"text-align: center;\">Tipo</th>\n         <th style=\"text-align: center;\">Zona</th>\n         <th style=\"text-align: center;\">Ciudad</th>\n         <th style=\"text-align: center;\">Ingresó</th>\n         <th style=\"text-align: center;\">Estado</th>\n         <th style=\"text-align: center;\">Acciones</th>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let item of items\" >\n            <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.usuario.imagen}}\" alt=\"\" class=\"img-table\" height=\"50px\" width=\"80px\" style=\"border-radius: 10px;\"></td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">\n            {{item.usuario.email}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.telefono}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.tipo2}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.zonas.nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.zonas.ciudad.nombre}}</td>\n            <td style=\"text-align: center;\">{{item.usuario.created_at}}</td>\n            <td style=\" vertical-align:middle;\">\n              \n              <nb-checkbox [value]=\"item.estado === 'ON'\"></nb-checkbox>\n            </td> \n            \n            <td style=\"text-align: center; vertical-align:middle;\">\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">\n                Crear cobro\n              </button>\n            </td>\n         </tr>\n      </tbody>\n    </table>\n      \n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n      <div class=\"btn-group\">\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n      </div>\n      <div class=\"btn-group pull-right\">\n         <ul class=\"pagination\" >\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n               </li>\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n         </ul>\n      </div>\n    </div>  \n  </nb-card-footer>\n</nb-card>\n\n<div class=\"row\" *ngIf=\"editando\">\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\n    <nb-card>\n      <nb-card-header>Información del Recibo de Cobro</nb-card-header>\n      <nb-card-body>\n        <form [formGroup]=\"myFormEditar\" novalidate>\n          <div class=\"row\">\n          \n            <div class=\"form-group\" class=\"col-3\"> \n              <label for=\"exampleInputNombre\">Nombre</label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\n              <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\n                <p *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</p>\n              </div>\n            </div>\n             <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Documento de identidad</label>\n              <input type=\"text\" class=\"form-control\" id=\"cedula\" placeholder=\"\" formControlName=\"cedula\">\n            </div>\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Teléfono</label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTelefono\" placeholder=\"Telefono\" formControlName=\"telefono\">\n              <div *ngIf=\"myFormEditar.get('telefono').errors && myFormEditar.get('telefono').dirty\">\n                <p *ngIf=\"myFormEditar.get('telefono').hasError('required')\">Teléfono es requerido</p>\n              </div>\n            </div>\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Foto</label><br>\n              <img src=\"{{myFormEditar.value.foto}}\" alt=\"\" style=\"width: 250px; height: 250px; \">\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Monto</label>\n              <input type=\"text\" class=\"form-control\" id=\"monto\" placeholder=\"\" formControlName=\"monto\">\n            </div>\n\n            <div class=\"form-group\" class=\"col-3\">\n             <label for=\"exampleInputTelefono\">Fecha</label>\n              <input type=\"text\" class=\"form-control\" id=\"fecha\" placeholder=\"\" formControlName=\"fecha\">\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group\" class=\"col-12\">\n              <label for=\"exampleInputTelefono\">Observación</label>\n              <input type=\"text\" class=\"form-control\" id=\"monto\" placeholder=\"\" formControlName=\"observacion\">\n            </div>\n          </div>\n          \n          <br><br>\n          <hr>\n          <br><br>\n\n\n          \n          <br>\n          <button class=\"btn btn-secondary\" (click)=\"atras()\">Cancelar</button>\n          <button class=\"btn btn-primary\" (click)=\"pagar()\" [disabled]=\"mouvers_user_tipo =='6'\">Crear Recibo</button>\n          <!--button type=\"submit\" class=\"btn btn-primary\" (click)=\"editar()\" >Actualizar datos</button-->\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Eliminar Socio: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>¿Realmente desea eliminar el socio {{eliminar_nombre}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro-crear/cobro-crear.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro-crear/cobro-crear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobroCrearComponent; });
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








var CobroCrearComponent = /** @class */ (function () {
    function CobroCrearComponent(modalService, toasterService, http, router, route, rutaService, fb) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.rutaService = rutaService;
        this.fb = fb;
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
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.admin = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.establecimiento_id = 0;
        this.contenido = 'Se ha creado un recibo de cobro. Entra a la sección de pagos para más información.';
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.myFormEditar = this.fb.group({
            id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tipo: [''],
            monto: [''],
            fecha: [''],
            tipo2: [''],
            ruc: [''],
            latitud: [''],
            longitud: [''],
            email_empresa: [''],
            contacto_nombre: [''],
            contacto_cedula: [''],
            contacto_cargo: [''],
            logo: [''],
            cedula: [''],
            nacionalidad: [''],
            direccion: [''],
            fecha_nacimiento: [''],
            formacion: [''],
            experiencia: [''],
            experiencia2: [''],
            anos_experiencia: [''],
            idoneidad: [''],
            disponibilidad: [''],
            disponibilidad2: [''],
            idiomas: [''],
            idiomas2: [''],
            urgencias: [''],
            factura: [''],
            referencias: [''],
            referencias2: [''],
            referencias12: [''],
            referencias22: [''],
            operaciones: [''],
            foto: [''],
            pasaporte: [''],
            idoneidad_file: [''],
            estado2: [''],
            usuario_id: [''],
            establecimiento_id: [''],
            sexo: [''],
            observacion: [''],
        });
    }
    CobroCrearComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo == '0' || this.mouvers_user_tipo == '1' || this.mouvers_user_tipo == '5' || this.mouvers_user_tipo == '6' || this.mouvers_user_tipo == '7') {
        }
        else {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'repartidores?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            //this.getEstados();
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.repartidores;
            for (var i = 0; i < _this.productList.length; ++i) {
                //console.log(this.productList[i].usuario.registro);
                if (_this.productList[i].usuario.registro.tipo == 2) {
                    _this.productList[i].tipo2 = 'Empresa';
                }
                else if (_this.productList[i].usuario.registro.tipo == 1) {
                    _this.productList[i].tipo2 = 'Individuo';
                }
            }
            _this.productList = _this.productList.sort(function (a, b) { return b.enfinalizados - a.enfinalizados; });
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
            _this.init();
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                _this.mostrar = false;
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
    CobroCrearComponent.prototype.showToast = function (type, title, body) {
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
    //Abrir modal por defecto
    CobroCrearComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    CobroCrearComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    CobroCrearComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
    };
    CobroCrearComponent.prototype.aEditar = function (obj) {
        console.log(obj);
        this.establecimiento_id = obj.establecimiento.id;
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        this.myFormEditar.patchValue({ id: '' });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.usuario.nombre });
        this.myFormEditar.patchValue({ email: this.objAEditar.usuario.email });
        this.myFormEditar.patchValue({ telefono: this.objAEditar.usuario.telefono });
        this.myFormEditar.patchValue({ estado: this.objAEditar.usuario.estado });
        this.myFormEditar.patchValue({ ciudad: this.objAEditar.usuario.zonas.ciudad.nombre });
        this.myFormEditar.patchValue({ monto: 0 });
        this.myFormEditar.patchValue({ observacion: '' });
        this.myFormEditar.patchValue({ usuario_id: this.objAEditar.usuario.id });
        this.myFormEditar.patchValue({ establecimiento_id: this.objAEditar.establecimiento.id });
        this.myFormEditar.patchValue({ fecha: new Date() });
        this.myFormEditar.patchValue({ foto: this.objAEditar.usuario.imagen });
        this.myFormEditar.patchValue({ cedula: this.objAEditar.usuario.registro.cedula });
        this.token_notificacion = this.objAEditar.usuario.token_notificacion;
        var tipo = "";
        if (this.objAEditar.usuario.registro.tipo == 1) {
            tipo = 'Persona';
        }
        else if (this.objAEditar.usuario.registro.tipo == 2) {
            tipo = 'Empresa';
        }
        else {
            tipo = 'Sin tipo de registro';
        }
        console.log(this.myFormEditar.value);
    };
    CobroCrearComponent.prototype.pagar = function () {
        var _this = this;
        console.log(this.myFormEditar.value);
        this.send = {
            estado: 0,
            monto: this.myFormEditar.value.monto,
            establecimiento_id: this.myFormEditar.value.establecimiento_id,
            usuario_id: this.myFormEditar.value.usuario_id,
            observacion: this.myFormEditar.value.observacion,
        };
        this.http.post(this.rutaService.getRutaApi() + 'cobros', this.send)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.showToast('success', 'Success!', _this.data.message);
            _this.atras();
            _this.ngOnInit();
            _this.http.get(_this.rutaService.getRutaApi() + 'onesignal.php?accion=18&token_notificacion=' + _this.token_notificacion + '&contenido=' + _this.contenido)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                _this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
                _this.loading = false;
            }, function (msg) {
                console.log(msg);
                console.log(msg.error.error);
                _this.loading = false;
                _this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
                if (msg.status == 400 || msg.status == 401) {
                    //alert(msg.error.error);
                    // this.showToast('warning', 'Warning!', 'msg.error.error');
                }
                else {
                    //alert(msg.error.error);
                    //this.showToast('error', 'Erro!', 'msg.error.error');
                }
            });
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
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
    CobroCrearComponent.prototype.init = function () {
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
    CobroCrearComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.email.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.telefono.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.ciudad.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    CobroCrearComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    CobroCrearComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    CobroCrearComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    CobroCrearComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    CobroCrearComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    CobroCrearComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-crear-cobros',
            template: __webpack_require__("../../../../../src/app/pages/cobro/cobro-crear/cobro-crear.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cobro/cobro-crear/cobro-crear.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], CobroCrearComponent);
    return CobroCrearComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobroRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cobro_component__ = __webpack_require__("../../../../../src/app/pages/cobro/cobro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cobro_cobro_agregar_component__ = __webpack_require__("../../../../../src/app/pages/cobro/cobro/cobro-agregar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cobro_ver_cobro_ver_component__ = __webpack_require__("../../../../../src/app/pages/cobro/cobro-ver/cobro-ver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cobro_crear_cobro_crear_component__ = __webpack_require__("../../../../../src/app/pages/cobro/cobro-crear/cobro-crear.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__cobro_component__["a" /* CobroComponent */],
        children: [{
                path: 'agregar',
                component: __WEBPACK_IMPORTED_MODULE_3__cobro_cobro_agregar_component__["a" /* CobroAgregarComponent */],
            }, {
                path: 'ver',
                component: __WEBPACK_IMPORTED_MODULE_4__cobro_ver_cobro_ver_component__["a" /* CobroVerComponent */],
            }, {
                path: 'crear',
                component: __WEBPACK_IMPORTED_MODULE_5__cobro_crear_cobro_crear_component__["a" /* CobroCrearComponent */],
            }],
    }];
var CobroRoutingModule = /** @class */ (function () {
    function CobroRoutingModule() {
    }
    CobroRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], CobroRoutingModule);
    return CobroRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__cobro_component__["a" /* CobroComponent */],
    __WEBPACK_IMPORTED_MODULE_3__cobro_cobro_agregar_component__["a" /* CobroAgregarComponent */],
    __WEBPACK_IMPORTED_MODULE_4__cobro_ver_cobro_ver_component__["a" /* CobroVerComponent */],
    __WEBPACK_IMPORTED_MODULE_5__cobro_crear_cobro_crear_component__["a" /* CobroCrearComponent */]
];


/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro-ver/cobro-ver.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!editando && mostrar\">\n  <nb-card-header>\n    <div class=\"row show-grid\">\n          <div class=\"col-6\">\n            <div>Lista de Cobros</div>\n          </div>\n          <div class=\"col-6\">\n            <div>\n              <div style=\"text-align: right;\">\n               <strong>Buscar: </strong>\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <table class=\"table\">\n      <thead>\n         <th style=\"text-align: center;\">Proveedor</th>\n         <th style=\"text-align: center;\">Monto</th>\n         <th style=\"text-align: center;\">Observación</th>\n         <th style=\"text-align: center;\">Fecha</th>\n         <th style=\"text-align: center;\">Acciones</th>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let item of items\" >\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.monto}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.observacion}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.created_at}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">IR\n              </button>\n            </td>\n         </tr>\n      </tbody>\n    </table>\n      \n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n      <div class=\"btn-group\">\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n      </div>\n      <div class=\"btn-group pull-right\">\n         <ul class=\"pagination\" >\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n               </li>\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n         </ul>\n      </div>\n    </div>  \n  </nb-card-footer>\n</nb-card>\n\n<div class=\"row\" *ngIf=\"editando\">\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\n    <nb-card>\n      <nb-card-header>Información del Recibo de Cobro</nb-card-header>\n      <nb-card-body>\n        <form [formGroup]=\"myFormEditar\" novalidate>\n          <div class=\"row\">\n          \n            <div class=\"form-group\" class=\"col-3\"> \n              <label for=\"exampleInputNombre\">Nombre</label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\n              <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\n                <p *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</p>\n              </div>\n            </div>\n             <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Documento de identidad</label>\n              <input type=\"text\" class=\"form-control\" id=\"cedula\" placeholder=\"\" formControlName=\"cedula\">\n            </div>\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Teléfono</label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTelefono\" placeholder=\"Telefono\" formControlName=\"telefono\">\n              <div *ngIf=\"myFormEditar.get('telefono').errors && myFormEditar.get('telefono').dirty\">\n                <p *ngIf=\"myFormEditar.get('telefono').hasError('required')\">Teléfono es requerido</p>\n              </div>\n            </div>\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Foto</label><br>\n              <img src=\"{{myFormEditar.value.foto}}\" alt=\"\" style=\"width: 250px; height: 250px; \">\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Monto</label>\n              <input type=\"text\" class=\"form-control\" id=\"monto\" placeholder=\"\" formControlName=\"monto\">\n            </div>\n\n            <div class=\"form-group\" class=\"col-3\">\n             <label for=\"exampleInputTelefono\">Fecha</label>\n              <input type=\"text\" class=\"form-control\" id=\"fecha\" placeholder=\"\" formControlName=\"fecha\">\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group\" class=\"col-12\">\n              <label for=\"exampleInputTelefono\">Observación</label>\n              <input type=\"text\" class=\"form-control\" id=\"monto\" placeholder=\"\" formControlName=\"observacion\">\n            </div>\n          </div>\n          \n          <br><br>\n          <hr>\n          <br><br>\n\n\n          \n          <br>\n          <button class=\"btn btn-secondary\" (click)=\"atras()\">Cancelar</button>\n          <button class=\"btn btn-primary\" (click)=\"pagar()\">Pagar</button>\n          <!--button type=\"submit\" class=\"btn btn-primary\" (click)=\"editar()\" >Actualizar datos</button-->\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Eliminar Socio: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>¿Realmente desea eliminar el socio {{eliminar_nombre}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro-ver/cobro-ver.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro-ver/cobro-ver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobroVerComponent; });
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








var CobroVerComponent = /** @class */ (function () {
    function CobroVerComponent(modalService, toasterService, http, router, route, rutaService, fb) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.rutaService = rutaService;
        this.fb = fb;
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
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.admin = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.establecimiento_id = 0;
        this.contenido = 'Se ha creado un recibo de cobro. Entra a la sección de pagos para más información.';
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.myFormEditar = this.fb.group({
            id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tipo: [''],
            monto: [''],
            fecha: [''],
            tipo2: [''],
            ruc: [''],
            latitud: [''],
            longitud: [''],
            email_empresa: [''],
            contacto_nombre: [''],
            contacto_cedula: [''],
            contacto_cargo: [''],
            logo: [''],
            cedula: [''],
            nacionalidad: [''],
            direccion: [''],
            fecha_nacimiento: [''],
            formacion: [''],
            experiencia: [''],
            experiencia2: [''],
            anos_experiencia: [''],
            idoneidad: [''],
            disponibilidad: [''],
            disponibilidad2: [''],
            idiomas: [''],
            idiomas2: [''],
            urgencias: [''],
            factura: [''],
            referencias: [''],
            referencias2: [''],
            referencias12: [''],
            referencias22: [''],
            operaciones: [''],
            foto: [''],
            pasaporte: [''],
            idoneidad_file: [''],
            estado2: [''],
            usuario_id: [''],
            sexo: [''],
            observacion: [''],
        });
    }
    CobroVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo == '0' || this.mouvers_user_tipo == '1' || this.mouvers_user_tipo == '5' || this.mouvers_user_tipo == '6' || this.mouvers_user_tipo == '7') {
        }
        else {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'cobros?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            //this.getEstados();
            console.log(data);
            _this.data = data;
            _this.data = _this.data.repartidores;
            //this.productList = this.data.repartidores;
            _this.productList = [];
            //console.log(this.productList);
            for (var i = 0; i < _this.data.length; ++i) {
                try {
                    if (_this.data[i].usuario.nombre) {
                        _this.productList.push(_this.data[i]);
                    }
                }
                catch (e) {
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                _this.mostrar = false;
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
    //Redirigir al chat
    CobroVerComponent.prototype.chat = function (repartidor) {
        console.log(repartidor);
        if (repartidor.usuario.chat_repartidor) {
            localStorage.setItem('mouvers_chat_id', repartidor.usuario.chat_repartidor.id);
        }
        else {
            localStorage.setItem('mouvers_chat_id', '');
        }
        localStorage.setItem('mouvers_usuario_id', repartidor.usuario.id);
        localStorage.setItem('mouvers_usuario_tipo', repartidor.usuario.tipo_usuario);
        localStorage.setItem('mouvers_usuario_nombre', repartidor.usuario.nombre);
        localStorage.setItem('mouvers_usuario_imagen', repartidor.usuario.imagen);
        localStorage.setItem('mouvers_usuario_token_notifi', repartidor.usuario.token_notificacion);
        this.router.navigateByUrl('/pages/chat-box');
    };
    CobroVerComponent.prototype.getEstados = function () {
        /*this.http.get(this.rutaService.getRutaApi()+'entidades/municipios?token='+localStorage.getItem('mouvers_token'))
      
           .toPromise()
           .then(
             data => { // Success
               console.log(data);
               this.data = data;
               this.estados=this.data.entidades;
             },
             msg => { // Error
               //console.log(msg);
               console.log(msg.error.error);
    
               //token invalido/ausente o token expiro
               if(msg.status == 400 || msg.status == 401){
                    //alert(msg.error.error);
                    //ir a login
                    this.showToast('warning', 'Warning!', msg.error.error);
                    setTimeout(()=>{
                      this.router.navigateByUrl('/pagessimples/loginf');
                    },1000);
                }
                //sin categorias o todas deshabilitadas OFF
                else if(msg.status == 404){
                    //alert(msg.error.error);
                    this.showToast('info', 'Info!', msg.error.error);
                }
    
             }
           );
        */
    };
    CobroVerComponent.prototype.setEstado1 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
            }
        }
    };
    CobroVerComponent.prototype.setEstado2 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
                this.myFormEditar.patchValue({ ciudad: this.ciudades[0].nom_mun });
            }
        }
    };
    CobroVerComponent.prototype.showToast = function (type, title, body) {
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
    //Abrir modal por defecto
    CobroVerComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    CobroVerComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    CobroVerComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
    };
    CobroVerComponent.prototype.aEditar = function (obj) {
        console.log(obj);
        this.establecimiento_id = obj.establecimiento.id;
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        this.token_notificacion = this.objAEditar.usuario.token_notificacion;
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.usuario.nombre });
        this.myFormEditar.patchValue({ email: this.objAEditar.usuario.email });
        this.myFormEditar.patchValue({ telefono: this.objAEditar.usuario.telefono });
        this.myFormEditar.patchValue({ estado: this.objAEditar.usuario.estado });
        this.myFormEditar.patchValue({ ciudad: this.objAEditar.usuario.ciudad });
        this.myFormEditar.patchValue({ monto: this.objAEditar.monto });
        this.myFormEditar.patchValue({ observacion: this.objAEditar.observacion });
        this.myFormEditar.patchValue({ usuario_id: this.objAEditar.usuario.id });
        this.myFormEditar.patchValue({ fecha: this.objAEditar.created_at });
        var tipo = "";
        if (this.objAEditar.usuario.registro.tipo == 1) {
            tipo = 'Persona';
        }
        else if (this.objAEditar.usuario.registro.tipo == 2) {
            tipo = 'Empresa';
        }
        else {
            tipo = 'Sin tipo de registro';
        }
        if (this.objAEditar.usuario.registro.referencias == null) {
            var refe = { nombre1: "", telefono1: "", direccion1: "", contacto1: "", cargo1: "", nombre2: "", telefono2: "", direccion2: "", contacto2: "", cargo2: "", nombre3: "", telefono3: "", direccion3: "", contacto3: "", cargo3: "" };
            this.myFormEditar.patchValue({ referencias22: refe });
        }
        else {
            this.myFormEditar.patchValue({ referencias22: JSON.parse(this.objAEditar.usuario.registro.referencias) });
        }
        this.myFormEditar.patchValue({ tipo2: tipo });
        this.myFormEditar.patchValue({ tipo: this.objAEditar.usuario.registro.tipo });
        this.myFormEditar.patchValue({ ruc: this.objAEditar.usuario.registro.ruc });
        this.myFormEditar.patchValue({ latitud: this.objAEditar.usuario.registro.latitud });
        this.myFormEditar.patchValue({ longitud: this.objAEditar.usuario.registro.longitud });
        this.myFormEditar.patchValue({ email_empresa: this.objAEditar.usuario.registro.email_empresa });
        this.myFormEditar.patchValue({ contacto_nombre: this.objAEditar.usuario.registro.contacto_nombre });
        this.myFormEditar.patchValue({ contacto_cedula: this.objAEditar.usuario.registro.contacto_cedula });
        this.myFormEditar.patchValue({ contacto_cargo: this.objAEditar.usuario.registro.contacto_cargo });
        this.myFormEditar.patchValue({ logo: this.objAEditar.usuario.registro.logo });
        this.myFormEditar.patchValue({ cedula: this.objAEditar.usuario.registro.cedula });
        this.myFormEditar.patchValue({ nacionalidad: this.objAEditar.usuario.registro.nacionalidad });
        this.myFormEditar.patchValue({ direccion: this.objAEditar.usuario.registro.direccion });
        this.myFormEditar.patchValue({ fecha_nacimiento: this.objAEditar.usuario.registro.fecha_nacimiento });
        this.myFormEditar.patchValue({ formacion: this.objAEditar.usuario.registro.formacion });
        this.myFormEditar.patchValue({ experiencia: this.objAEditar.usuario.registro.experiencia });
        this.myFormEditar.patchValue({ experiencia2: JSON.parse(this.objAEditar.usuario.registro.experiencia) });
        this.myFormEditar.patchValue({ anos_experiencia: this.objAEditar.usuario.registro.anos_experiencia });
        this.myFormEditar.patchValue({ idoneidad: this.objAEditar.usuario.registro.idoneidad });
        this.myFormEditar.patchValue({ disponibilidad: this.objAEditar.usuario.registro.disponibilidad });
        this.myFormEditar.patchValue({ disponibilidad2: JSON.parse(this.objAEditar.usuario.registro.disponibilidad) });
        this.myFormEditar.patchValue({ idiomas: this.objAEditar.usuario.registro.idiomas });
        this.myFormEditar.patchValue({ idiomas2: JSON.parse(this.objAEditar.usuario.registro.idiomas) });
        this.myFormEditar.patchValue({ urgencias: this.objAEditar.usuario.registro.urgencias });
        this.myFormEditar.patchValue({ factura: this.objAEditar.usuario.registro.factura });
        this.myFormEditar.patchValue({ referencias: this.objAEditar.usuario.registro.referencias });
        this.myFormEditar.patchValue({ referencias2: this.objAEditar.usuario.registro.referencias2 });
        this.myFormEditar.patchValue({ referencias: this.objAEditar.usuario.registro.referencias });
        this.myFormEditar.patchValue({ referencias12: JSON.parse(this.objAEditar.usuario.registro.referencias2) });
        //this.myFormEditar.patchValue({referencias22 : JSON.parse(this.objAEditar.usuario.registro.referencias}));
        this.myFormEditar.patchValue({ foto: this.objAEditar.usuario.registro.foto });
        this.myFormEditar.patchValue({ pasaporte: this.objAEditar.usuario.registro.pasaporte });
        this.myFormEditar.patchValue({ idoneidad_file: this.objAEditar.usuario.registro.idoneidad_file });
        this.myFormEditar.patchValue({ estado2: this.objAEditar.usuario.registro.estado2 });
        this.myFormEditar.patchValue({ usuario_id: this.objAEditar.usuario.id });
        this.myFormEditar.patchValue({ sexo: this.objAEditar.usuario.registro.sexo });
        this.setEstado1(this.objAEditar.usuario.estado);
        console.log(this.myFormEditar.value);
    };
    CobroVerComponent.prototype.editar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormEditar.value.nombre,
            email: this.myFormEditar.value.email,
            telefono: this.myFormEditar.value.telefono,
            ciudad: this.myFormEditar.value.ciudad,
            estado: this.myFormEditar.value.estado,
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].usuario.nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].usuario.email = _this.myFormEditar.value.email;
                    _this.productList[i].usuario.telefono = _this.myFormEditar.value.telefono;
                    _this.productList[i].usuario.ciudad = _this.myFormEditar.value.ciudad;
                    _this.productList[i].usuario.estado = _this.myFormEditar.value.estado;
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.editando = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.editando = true;
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.editando = true;
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
        var datos2 = {
            direccion: this.myFormEditar.value.direccion,
            lunes_i: this.myFormEditar.value.disponibilidad2.lunes_i,
            lunes_f: this.myFormEditar.value.disponibilidad2.lunes_f,
            martes_i: this.myFormEditar.value.disponibilidad2.martes_i,
            martes_f: this.myFormEditar.value.disponibilidad2.martes_f,
            miercoles_i: this.myFormEditar.value.disponibilidad2.miercoles_i,
            miercoles_f: this.myFormEditar.value.disponibilidad2.miercoles_f,
            jueves_i: this.myFormEditar.value.disponibilidad2.jueves_i,
            jueves_f: this.myFormEditar.value.disponibilidad2.jueves_f,
            viernes_i: this.myFormEditar.value.disponibilidad2.viernes_i,
            viernes_f: this.myFormEditar.value.disponibilidad2.viernes_f,
            sabado_i: this.myFormEditar.value.disponibilidad2.sabado_i,
            sabado_f: this.myFormEditar.value.disponibilidad2.sabado_f,
            domingo_i: this.myFormEditar.value.disponibilidad2.domingo_i,
            domingo_f: this.myFormEditar.value.disponibilidad2.domingo_f
        };
        console.log(datos2);
        this.http.put(this.rutaService.getRutaApi() + 'establecimientos/' + this.establecimiento_id, datos2)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
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
                _this.editando = true;
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.editando = true;
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    CobroVerComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.usuario.nombre;
    };
    CobroVerComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'repartidores/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var aux = _this.productList;
            _this.productList = [];
            for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != _this.eliminar_id) {
                    _this.productList.push(aux[i]);
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
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
    //Para el repartidor
    CobroVerComponent.prototype.cambiarEstado = function (obj) {
        var _this = this;
        var v_estado;
        if (obj.estado == 'ON') {
            //obj.estado = 'OFF';
            v_estado = 'OFF';
        }
        else {
            //obj.estado = 'ON';
            v_estado = 'ON';
        }
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            rep_estado: v_estado
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + obj.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.showToast('success', 'Success!', _this.data.message);
            obj.estado = v_estado;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            //Regresar el switch en caso de error
            if (v_estado == 'ON') {
                //obj.estado = 'OFF';
                obj.estado = 'OFF';
            }
            else {
                //obj.estado = 'ON';
                obj.estado = 'ON';
            }
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
    CobroVerComponent.prototype.pagar = function () {
        var _this = this;
        console.log(this.myFormEditar.value);
        this.send = {
            monto: this.myFormEditar.value.monto,
            establecimiento_id: this.myFormEditar.value.establecimiento_id,
            usuario_id: this.myFormEditar.value.usuario_id,
            observacion: this.myFormEditar.value.observacion,
        };
        this.http.put(this.rutaService.getRutaApi() + 'pagar/' + this.myFormEditar.value.id, this.send)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.showToast('success', 'Success!', _this.data.message);
            _this.atras();
            _this.ngOnInit();
            _this.http.get(_this.rutaService.getRutaApi() + 'onesignal.php?accion=18&token_notificacion=' + _this.token_notificacion + '&contenido=' + _this.contenido)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                _this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
                _this.loading = false;
            }, function (msg) {
                console.log(msg);
                console.log(msg.error.error);
                _this.loading = false;
                _this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
            });
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
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
    CobroVerComponent.prototype.init = function () {
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
    CobroVerComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.email.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.telefono.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.ciudad.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    CobroVerComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    CobroVerComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    CobroVerComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    CobroVerComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    CobroVerComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    CobroVerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ver-cobros',
            template: __webpack_require__("../../../../../src/app/pages/cobro/cobro-ver/cobro-ver.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cobro/cobro-ver/cobro-ver.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], CobroVerComponent);
    return CobroVerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CobroComponent = /** @class */ (function () {
    function CobroComponent() {
    }
    CobroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-socios-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], CobroComponent);
    return CobroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobroModule", function() { return CobroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cobro_routing_module__ = __webpack_require__("../../../../../src/app/pages/cobro/cobro-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Mis imports


//import { Ng2UploaderModule } from 'ng2-uploader';

var CobroModule = /** @class */ (function () {
    function CobroModule() {
    }
    CobroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAu3ISPnP2ypZSaIS8s93TR71lnyZoQWNY',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__cobro_routing_module__["a" /* CobroRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__cobro_routing_module__["b" /* routedComponents */].slice(),
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
            ],
        })
    ], CobroModule);
    return CobroModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro/cobro-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!editando && mostrar\">\n  <nb-card-header>\n    <div class=\"row show-grid\">\n          <div class=\"col-6\">\n            <div>Lista de Cobros</div>\n          </div>\n          <div class=\"col-6\">\n            <div>\n              <div style=\"text-align: right;\">\n               <strong>Buscar: </strong>\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <table class=\"table\">\n      <thead>\n         <th style=\"text-align: center;\">Proveedor</th>\n         <th style=\"text-align: center;\">Monto</th>\n         <th style=\"text-align: center;\">Observación</th>\n         <th style=\"text-align: center;\">Fecha</th>\n         <th style=\"text-align: center;\">Acciones</th>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let item of items\" >\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.monto}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.observacion}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.created_at}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">IR\n              </button>\n            </td>\n         </tr>\n      </tbody>\n    </table>\n      \n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n      <div class=\"btn-group\">\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n      </div>\n      <div class=\"btn-group pull-right\">\n         <ul class=\"pagination\" >\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n               </li>\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n         </ul>\n      </div>\n    </div>  \n  </nb-card-footer>\n</nb-card>\n\n<div class=\"row\" *ngIf=\"editando\">\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\n    <nb-card>\n      <nb-card-header>Información del Recibo de Cobro</nb-card-header>\n      <nb-card-body>\n        <form [formGroup]=\"myFormEditar\" novalidate>\n          <div class=\"row\">\n          \n            <div class=\"form-group\" class=\"col-3\"> \n              <label for=\"exampleInputNombre\">Nombre</label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\n              <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\n                <p *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</p>\n              </div>\n            </div>\n             <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Documento de identidad</label>\n              <input type=\"text\" class=\"form-control\" id=\"cedula\" placeholder=\"\" formControlName=\"cedula\">\n            </div>\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Teléfono</label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputTelefono\" placeholder=\"Telefono\" formControlName=\"telefono\">\n              <div *ngIf=\"myFormEditar.get('telefono').errors && myFormEditar.get('telefono').dirty\">\n                <p *ngIf=\"myFormEditar.get('telefono').hasError('required')\">Teléfono es requerido</p>\n              </div>\n            </div>\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Foto</label><br>\n              <img src=\"{{myFormEditar.value.foto}}\" alt=\"\" style=\"width: 250px; height: 250px; \">\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group\" class=\"col-3\">\n              <label for=\"exampleInputTelefono\">Monto</label>\n              <input type=\"text\" class=\"form-control\" id=\"monto\" placeholder=\"\" formControlName=\"monto\">\n            </div>\n\n            <div class=\"form-group\" class=\"col-3\">\n             <label for=\"exampleInputTelefono\">Fecha</label>\n              <input type=\"text\" class=\"form-control\" id=\"fecha\" placeholder=\"\" formControlName=\"fecha\">\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group\" class=\"col-12\">\n              <label for=\"exampleInputTelefono\">Observación</label>\n              <input type=\"text\" class=\"form-control\" id=\"monto\" placeholder=\"\" formControlName=\"observacion\">\n            </div>\n          </div>\n          \n          <br><br>\n          <hr>\n          <br><br>\n\n\n          \n          <br>\n          <button class=\"btn btn-secondary\" (click)=\"atras()\">Cancelar</button>\n          <button class=\"btn btn-primary\" (click)=\"pagar()\">Guardar</button>\n          <!--button type=\"submit\" class=\"btn btn-primary\" (click)=\"editar()\" >Actualizar datos</button-->\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Eliminar Socio: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>¿Realmente desea eliminar el socio {{eliminar_nombre}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro/cobro-agregar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #0b417a;\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cobro/cobro/cobro-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobroAgregarComponent; });
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








var CobroAgregarComponent = /** @class */ (function () {
    function CobroAgregarComponent(modalService, toasterService, http, router, route, rutaService, fb) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.rutaService = rutaService;
        this.fb = fb;
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
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.admin = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.establecimiento_id = 0;
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.myFormEditar = this.fb.group({
            id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tipo: [''],
            monto: [''],
            fecha: [''],
            tipo2: [''],
            ruc: [''],
            latitud: [''],
            longitud: [''],
            email_empresa: [''],
            contacto_nombre: [''],
            contacto_cedula: [''],
            contacto_cargo: [''],
            logo: [''],
            cedula: [''],
            nacionalidad: [''],
            direccion: [''],
            fecha_nacimiento: [''],
            formacion: [''],
            experiencia: [''],
            experiencia2: [''],
            anos_experiencia: [''],
            idoneidad: [''],
            disponibilidad: [''],
            disponibilidad2: [''],
            idiomas: [''],
            idiomas2: [''],
            urgencias: [''],
            factura: [''],
            referencias: [''],
            referencias2: [''],
            referencias12: [''],
            referencias22: [''],
            operaciones: [''],
            foto: [''],
            pasaporte: [''],
            idoneidad_file: [''],
            estado2: [''],
            usuario_id: [''],
            sexo: [''],
            observacion: [''],
        });
    }
    CobroAgregarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo == '0' || this.mouvers_user_tipo == '1' || this.mouvers_user_tipo == '5' || this.mouvers_user_tipo == '6' || this.mouvers_user_tipo == '7') {
        }
        else {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pagados?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            _this.getEstados();
            console.log(data);
            _this.data = data;
            _this.data = _this.data.repartidores;
            //this.productList = this.data.repartidores;
            _this.productList = [];
            //console.log(this.productList);
            for (var i = 0; i < _this.data.length; ++i) {
                try {
                    if (_this.data[i].usuario.nombre) {
                        _this.productList.push(_this.data[i]);
                    }
                }
                catch (e) {
                }
            }
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
            _this.init();
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                _this.mostrar = false;
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
    //Redirigir al chat
    CobroAgregarComponent.prototype.chat = function (repartidor) {
        console.log(repartidor);
        if (repartidor.usuario.chat_repartidor) {
            localStorage.setItem('mouvers_chat_id', repartidor.usuario.chat_repartidor.id);
        }
        else {
            localStorage.setItem('mouvers_chat_id', '');
        }
        localStorage.setItem('mouvers_usuario_id', repartidor.usuario.id);
        localStorage.setItem('mouvers_usuario_tipo', repartidor.usuario.tipo_usuario);
        localStorage.setItem('mouvers_usuario_nombre', repartidor.usuario.nombre);
        localStorage.setItem('mouvers_usuario_imagen', repartidor.usuario.imagen);
        localStorage.setItem('mouvers_usuario_token_notifi', repartidor.usuario.token_notificacion);
        this.router.navigateByUrl('/pages/chat-box');
    };
    CobroAgregarComponent.prototype.getEstados = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'entidades/municipios?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.estados = _this.data.entidades;
        }, function (msg) {
            //console.log(msg);
            console.log(msg.error.error);
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
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
    CobroAgregarComponent.prototype.setEstado1 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
            }
        }
    };
    CobroAgregarComponent.prototype.setEstado2 = function (estado) {
        console.log(estado);
        for (var i = 0; i < this.estados.length; ++i) {
            if (estado == this.estados[i].nom_ent) {
                this.ciudades = this.estados[i].municipios;
                this.myFormEditar.patchValue({ ciudad: this.ciudades[0].nom_mun });
            }
        }
    };
    CobroAgregarComponent.prototype.showToast = function (type, title, body) {
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
    //Abrir modal por defecto
    CobroAgregarComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    CobroAgregarComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    CobroAgregarComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
    };
    CobroAgregarComponent.prototype.aEditar = function (obj) {
        console.log(obj);
        this.establecimiento_id = obj.establecimiento.id;
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        console.log(this.objAEditar);
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.usuario.nombre });
        this.myFormEditar.patchValue({ email: this.objAEditar.usuario.email });
        this.myFormEditar.patchValue({ telefono: this.objAEditar.usuario.telefono });
        this.myFormEditar.patchValue({ estado: this.objAEditar.usuario.estado });
        this.myFormEditar.patchValue({ ciudad: this.objAEditar.usuario.ciudad });
        this.myFormEditar.patchValue({ monto: this.objAEditar.monto });
        this.myFormEditar.patchValue({ observacion: this.objAEditar.observacion });
        this.myFormEditar.patchValue({ usuario_id: this.objAEditar.usuario.id });
        this.myFormEditar.patchValue({ fecha: this.objAEditar.created_at });
        var tipo = "";
        if (this.objAEditar.usuario.registro.tipo == 1) {
            tipo = 'Persona';
        }
        else if (this.objAEditar.usuario.registro.tipo == 2) {
            tipo = 'Empresa';
        }
        else {
            tipo = 'Sin tipo de registro';
        }
        if (this.objAEditar.usuario.registro.referencias == null) {
            var refe = { nombre1: "", telefono1: "", direccion1: "", contacto1: "", cargo1: "", nombre2: "", telefono2: "", direccion2: "", contacto2: "", cargo2: "", nombre3: "", telefono3: "", direccion3: "", contacto3: "", cargo3: "" };
            this.myFormEditar.patchValue({ referencias22: refe });
        }
        else {
            this.myFormEditar.patchValue({ referencias22: JSON.parse(this.objAEditar.usuario.registro.referencias) });
        }
        this.myFormEditar.patchValue({ tipo2: tipo });
        this.myFormEditar.patchValue({ tipo: this.objAEditar.usuario.registro.tipo });
        this.myFormEditar.patchValue({ ruc: this.objAEditar.usuario.registro.ruc });
        this.myFormEditar.patchValue({ latitud: this.objAEditar.usuario.registro.latitud });
        this.myFormEditar.patchValue({ longitud: this.objAEditar.usuario.registro.longitud });
        this.myFormEditar.patchValue({ email_empresa: this.objAEditar.usuario.registro.email_empresa });
        this.myFormEditar.patchValue({ contacto_nombre: this.objAEditar.usuario.registro.contacto_nombre });
        this.myFormEditar.patchValue({ contacto_cedula: this.objAEditar.usuario.registro.contacto_cedula });
        this.myFormEditar.patchValue({ contacto_cargo: this.objAEditar.usuario.registro.contacto_cargo });
        this.myFormEditar.patchValue({ logo: this.objAEditar.usuario.registro.logo });
        this.myFormEditar.patchValue({ cedula: this.objAEditar.usuario.registro.cedula });
        this.myFormEditar.patchValue({ nacionalidad: this.objAEditar.usuario.registro.nacionalidad });
        this.myFormEditar.patchValue({ direccion: this.objAEditar.usuario.registro.direccion });
        this.myFormEditar.patchValue({ fecha_nacimiento: this.objAEditar.usuario.registro.fecha_nacimiento });
        this.myFormEditar.patchValue({ formacion: this.objAEditar.usuario.registro.formacion });
        this.myFormEditar.patchValue({ experiencia: this.objAEditar.usuario.registro.experiencia });
        this.myFormEditar.patchValue({ experiencia2: JSON.parse(this.objAEditar.usuario.registro.experiencia) });
        this.myFormEditar.patchValue({ anos_experiencia: this.objAEditar.usuario.registro.anos_experiencia });
        this.myFormEditar.patchValue({ idoneidad: this.objAEditar.usuario.registro.idoneidad });
        this.myFormEditar.patchValue({ disponibilidad: this.objAEditar.usuario.registro.disponibilidad });
        this.myFormEditar.patchValue({ disponibilidad2: JSON.parse(this.objAEditar.usuario.registro.disponibilidad) });
        this.myFormEditar.patchValue({ idiomas: this.objAEditar.usuario.registro.idiomas });
        this.myFormEditar.patchValue({ idiomas2: JSON.parse(this.objAEditar.usuario.registro.idiomas) });
        this.myFormEditar.patchValue({ urgencias: this.objAEditar.usuario.registro.urgencias });
        this.myFormEditar.patchValue({ factura: this.objAEditar.usuario.registro.factura });
        this.myFormEditar.patchValue({ referencias: this.objAEditar.usuario.registro.referencias });
        this.myFormEditar.patchValue({ referencias2: this.objAEditar.usuario.registro.referencias2 });
        this.myFormEditar.patchValue({ referencias: this.objAEditar.usuario.registro.referencias });
        this.myFormEditar.patchValue({ referencias12: JSON.parse(this.objAEditar.usuario.registro.referencias2) });
        //this.myFormEditar.patchValue({referencias22 : JSON.parse(this.objAEditar.usuario.registro.referencias}));
        this.myFormEditar.patchValue({ foto: this.objAEditar.usuario.registro.foto });
        this.myFormEditar.patchValue({ pasaporte: this.objAEditar.usuario.registro.pasaporte });
        this.myFormEditar.patchValue({ idoneidad_file: this.objAEditar.usuario.registro.idoneidad_file });
        this.myFormEditar.patchValue({ estado2: this.objAEditar.usuario.registro.estado2 });
        this.myFormEditar.patchValue({ usuario_id: this.objAEditar.usuario.id });
        this.myFormEditar.patchValue({ sexo: this.objAEditar.usuario.registro.sexo });
        this.setEstado1(this.objAEditar.usuario.estado);
        console.log(this.myFormEditar.value);
    };
    CobroAgregarComponent.prototype.editar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormEditar.value.nombre,
            email: this.myFormEditar.value.email,
            telefono: this.myFormEditar.value.telefono,
            ciudad: this.myFormEditar.value.ciudad,
            estado: this.myFormEditar.value.estado,
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].usuario.nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].usuario.email = _this.myFormEditar.value.email;
                    _this.productList[i].usuario.telefono = _this.myFormEditar.value.telefono;
                    _this.productList[i].usuario.ciudad = _this.myFormEditar.value.ciudad;
                    _this.productList[i].usuario.estado = _this.myFormEditar.value.estado;
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.editando = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.editando = true;
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.editando = true;
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
        var datos2 = {
            direccion: this.myFormEditar.value.direccion,
            lunes_i: this.myFormEditar.value.disponibilidad2.lunes_i,
            lunes_f: this.myFormEditar.value.disponibilidad2.lunes_f,
            martes_i: this.myFormEditar.value.disponibilidad2.martes_i,
            martes_f: this.myFormEditar.value.disponibilidad2.martes_f,
            miercoles_i: this.myFormEditar.value.disponibilidad2.miercoles_i,
            miercoles_f: this.myFormEditar.value.disponibilidad2.miercoles_f,
            jueves_i: this.myFormEditar.value.disponibilidad2.jueves_i,
            jueves_f: this.myFormEditar.value.disponibilidad2.jueves_f,
            viernes_i: this.myFormEditar.value.disponibilidad2.viernes_i,
            viernes_f: this.myFormEditar.value.disponibilidad2.viernes_f,
            sabado_i: this.myFormEditar.value.disponibilidad2.sabado_i,
            sabado_f: this.myFormEditar.value.disponibilidad2.sabado_f,
            domingo_i: this.myFormEditar.value.disponibilidad2.domingo_i,
            domingo_f: this.myFormEditar.value.disponibilidad2.domingo_f
        };
        console.log(datos2);
        this.http.put(this.rutaService.getRutaApi() + 'establecimientos/' + this.establecimiento_id, datos2)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
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
                _this.editando = true;
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.editando = true;
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    CobroAgregarComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.usuario.nombre;
    };
    CobroAgregarComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'repartidores/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var aux = _this.productList;
            _this.productList = [];
            for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != _this.eliminar_id) {
                    _this.productList.push(aux[i]);
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
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
    //Para el repartidor
    CobroAgregarComponent.prototype.cambiarEstado = function (obj) {
        var _this = this;
        var v_estado;
        if (obj.estado == 'ON') {
            //obj.estado = 'OFF';
            v_estado = 'OFF';
        }
        else {
            //obj.estado = 'ON';
            v_estado = 'ON';
        }
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            rep_estado: v_estado
        };
        this.http.put(this.rutaService.getRutaApi() + 'repartidores/' + obj.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.showToast('success', 'Success!', _this.data.message);
            obj.estado = v_estado;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            //Regresar el switch en caso de error
            if (v_estado == 'ON') {
                //obj.estado = 'OFF';
                obj.estado = 'OFF';
            }
            else {
                //obj.estado = 'ON';
                obj.estado = 'ON';
            }
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
    CobroAgregarComponent.prototype.pagar = function () {
        var _this = this;
        console.log(this.myFormEditar.value);
        this.send = {
            monto: this.myFormEditar.value.monto,
            establecimiento_id: this.myFormEditar.value.establecimiento_id,
            usuario_id: this.myFormEditar.value.usuario_id,
            observacion: this.myFormEditar.value.observacion,
        };
        this.http.put(this.rutaService.getRutaApi() + 'pagar/' + this.myFormEditar.value.id, this.send)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.showToast('success', 'Success!', _this.data.message);
            _this.atras();
            _this.ngOnInit();
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
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
    CobroAgregarComponent.prototype.init = function () {
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
    CobroAgregarComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.email.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.telefono.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].usuario.ciudad.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    CobroAgregarComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    CobroAgregarComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    CobroAgregarComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    CobroAgregarComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    CobroAgregarComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    CobroAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ver-cobros',
            template: __webpack_require__("../../../../../src/app/pages/cobro/cobro/cobro-agregar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cobro/cobro/cobro-agregar.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], CobroAgregarComponent);
    return CobroAgregarComponent;
}());



/***/ })

});
//# sourceMappingURL=cobro.module.chunk.js.map