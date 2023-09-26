webpackJsonp(["ordenar.module"],{

/***/ "../../../../../src/app/pages/ordenar/ordenar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenarRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordenar_component__ = __webpack_require__("../../../../../src/app/pages/ordenar/ordenar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ordenar_component__["a" /* OrdenarComponent */],
    }];
var OrdenarRoutingModule = /** @class */ (function () {
    function OrdenarRoutingModule() {
    }
    OrdenarRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], OrdenarRoutingModule);
    return OrdenarRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__ordenar_component__["a" /* OrdenarComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/ordenar/ordenar.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Seleccione</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n          <label for=\"categoria\">Categoría</label>\n          <select class=\"form-control\" id=\"categoria\" (change)=\"setCategoria($event.target.value)\">\n            <option disabled selected>Selecciona una categoría</option>\n            <option *ngFor=\"let cat of categorias\" [value]=\"cat.id\" >{{cat.nombre}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n          <label for=\"categoria\">Subcategoría</label>\n          <select class=\"form-control\" id=\"categoria\" (change)=\"setSubcategoria($event.target.value)\">\n            <option disabled selected>Selecciona una subcategoría</option>\n            <option *ngFor=\"let subcat of subcategorias\" [value]=\"subcat.id\" >{{subcat.nombre}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n    <div class=\"row show-grid\">\n      <div class=\"col-6\">\n        <strong>Lista de Productos</strong>\n      </div>\n      <div class=\"col-6\">\n        <div>\n          <div style=\"text-align: right;\">\n           <strong>Buscar: </strong>\n           <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n\n    <div class=\"row\">\n      <table class=\"table\">\n        <thead>\n           <!-- <th style=\"text-align: center;\">ID</th> -->\n           <!-- <th style=\"text-align: center;\">Imagen</th> -->\n           <th style=\"text-align: center;\">Nombre</th>\n           <th style=\"text-align: center;\">Precio Unit. <small>($ MXN)</small></th>\n           <!-- <th style=\"text-align: center;\">Cantidad a solicitar</th> -->\n           <th style=\"text-align: center;\">Seleccionar</th>\n        </thead>\n        <tbody>\n           <tr *ngFor=\"let item of items\" >\n              <!-- <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" height=\"auto\" width=\"60px\"></td> -->\n              <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\n              <td style=\"text-align: center; vertical-align:middle;\">{{item.precio | number: '1.2-2'}}</td>\n              <!-- <td style=\"text-align: center; vertical-align:middle;\">\n                <div style=\"display:block; margin:auto; width: 200px;\">\n                  <input type=\"number\" class=\"form-control\" id=\"cantidad\" placeholder=\"\" [(ngModel)]=\"item.cantidad\" min=\"1\" (keyup)=\"setCantidad($event.target.value, item)\" >\n                </div>\n              </td> -->\n              <td style=\"text-align: center; vertical-align:middle;\">\n\n                  <nb-checkbox [value]=\"item.seleccionado\" (change)=\"addClearProducto(item)\">select</nb-checkbox>\n                \n              </td>\n           </tr>\n        </tbody>\n      </table>\n\n      <hr>\n      <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n        <div class=\"btn-group\">\n           <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n        </div>\n        <div class=\"btn-group pull-right\">\n           <ul class=\"pagination\" >\n              <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n                 <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n                    <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n                 </li>\n              <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n           </ul>\n        </div>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>\n\n\n<div class=\"viendo\" [hidden]=\"solicitud.length == 0\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <nb-card>\n        <nb-card-header>\n          Detalles del Pedido\n          <div class=\"pull-right\" style=\"margin-right: 10px\">\n            <!-- En curso &nbsp; -->\n            <!-- <button type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Despachar Pedido\" (click)=\"open(modalDespachar)\">\n                <i class=\"ion-android-bicycle\"></i>\n              </button> -->\n          </div>\n        </nb-card-header>\n        <nb-card-body>\n\n          <!-- <h5 *ngIf=\"selectedObj.repartidor_nom\"class=\"grid-h\">Repartidor</h5>\n          <div *ngIf=\"selectedObj.repartidor_nom\"class=\"row show-grid\">\n          \n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.repartidor_nom}}</div>\n            </div>\n          \n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-8\">\n              <div>{{selectedObj.repartidor.usuario.telefono}}</div>\n            </div>\n          \n          </div> -->\n\n          <br>\n          <h5 class=\"grid-h\">Destinatario</h5>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n                <input type=\"text\" class=\"form-control\" id=\"destinatario\" placeholder=\"\" [(ngModel)]=\"destinatario\">\n            </div>\n          </div>\n\n          <br>\n          <h5 class=\"grid-h\">Teléfono</h5>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n                <input type=\"text\" class=\"form-control\" id=\"telefono\" placeholder=\"\" [(ngModel)]=\"telefono\">\n            </div>\n          </div>\n\n          <br>\n          <h5 class=\"grid-h\">Productos Solicitados</h5>\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>\n                   Remover\n                  </th>\n                  <th>\n                   Producto\n                  </th>\n                  <!-- <th>\n                   Establecimiento\n                  </th> -->\n                  <th>\n                   Observación\n                  </th>\n                  <th>\n                   Solicitados\n                  </th>\n                  <th>\n                   Precio Unit. <small>($ MXN)</small>\n                  </th>\n                  <th>\n                   Sub-total <small>($ MXN)</small>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of solicitud\">\n                  <td  class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-danger btn-icon btn-sm btn-table\" title=\"Eliminar\" (click)=\"removerProducto(item)\">\n                    <i class=\"nb-trash\"></i>\n                  </button>\n                  </td>\n                  <td  class=\"text-center\">\n                    {{item.nombre}}\n                  </td>\n                  <!-- <td  class=\"text-center\">\n                    {{item.establecimiento.nombre}}\n                  </td> -->\n                  <td >\n                    <div style=\"display:block; margin:auto; width: 250px;\">\n                      <input type=\"text\" class=\"form-control\" id=\"observacion\" placeholder=\"\" [(ngModel)]=\"item.observacion\" maxlength=\"250\" >\n                    </div>\n                  </td>\n                  <td  class=\"text-center\">\n                    <div style=\"display:block; margin:auto; width: 100px;\">\n                      <input type=\"text\" class=\"form-control\" id=\"cantidad\" placeholder=\"\" [(ngModel)]=\"item.cantidad\" (keyup)=\"setCantidad($event.target.value, item)\" (blur)=\"checkCantidad(item)\">\n                    </div>\n                  </td>\n                  <td  class=\"text-center\">\n                    {{item.precio | number: '1.2-2'}}\n                  </td>\n                  <td  class=\"text-center\">\n                    {{item.subtotal | number: '1.2-2'}}\n                  </td> \n                </tr>\n                \n                <tr>\n                  <td colspan=\"6\"></td>\n                </tr>\n                <tr>\n                  <td colspan=\"5\" style=\"text-align: right;\"><strong>Envío</strong> <small>($ MXN)</small></td>\n                  <td class=\"text-center\">{{variables.costo_envio | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"5\" style=\"text-align: right;\"><strong>Sub-total</strong> <small>($ MXN)</small></td>\n                  <td class=\"text-center\">{{variables.subtotal | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"5\" style=\"text-align: right;\"><strong>Total</strong> <small>($ MXN)</small></td>\n                  <td class=\"text-center\">{{variables.costo | number: '1.2-2'}}</td>\n                </tr> \n              </tbody>\n            </table>\n          </div>\n          \n          <br>\n          <h5 class=\"grid-h\">Dirección de envío</h5>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n                <input placeholder=\"Buscar dirección por google maps...\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [(ngModel)]=\"direccion\">\n            </div>\n          </div>\n\n          <br>\n          <h5 class=\"grid-h\">Referencia</h5>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n                <input type=\"text\" class=\"form-control\" id=\"referencia\" placeholder=\"\" [(ngModel)]=\"referencia\">\n            </div>\n          </div>\n          \n          <br>\n          <div class=\"row\">  \n            <div class=\"col-md-12\">\n                <agm-map style=\"height: 300px;\" [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n                  <agm-marker style=\"height: 300px;\" [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n                </agm-map>\n            </div>   \n          </div>\n\n        </nb-card-body>\n        <nb-card-footer>\n          <div class=\"pull-right\">\n            <button type=\"submit\" class=\"btn btn-primary \" (click)=\"crearPedido(modal1)\" >Crear Pedido</button>\n          </div>\n        </nb-card-footer>\n      </nb-card>\n    </div>\n</div>\n</div>\n\n\n<ng-template #modal1 id=\"modal1\" let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Repartidores disponibles para el pedido AI00{{pedido_id}} </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click'); atras()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"row show-grid\">\n              <div class=\"col-6\">\n                <div>Lista de Socios</div>\n              </div>\n              <div class=\"col-6\">\n                <div>\n                  <div style=\"text-align: right;\">\n                   <strong>Buscar: </strong>\n                   <input  type=\"text\"  id=\"inputName2\" [(ngModel)]=\"inputName2\" (ngModelChange)=\"FilterByName2()\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </nb-card-header>\n\n      <nb-card-body>\n\n        <table class=\"table table-striped\">\n          <thead>\n             <!-- <th style=\"text-align: center;\">ID</th> -->\n             <th style=\"text-align: center;\">Nombre</th>\n             <th style=\"text-align: center;\">Email</th>\n             <th style=\"text-align: center;\">Teléfono</th>\n             <th style=\"text-align: center;\">Acción</th>\n          </thead>\n          <tbody>\n             <tr *ngFor=\"let item of items2\" >\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.email}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.telefono}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">\n                  <label class=\"custom-control custom-radio\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" (change)=\"setRepartidor(item)\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Asignar</span>\n                  </label>\n                </td>\n             </tr>\n          </tbody>\n        </table>\n          \n      </nb-card-body>\n      <nb-card-footer>\n        <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n          <div class=\"btn-group\">\n             <label style=\"margin-top:10px\">Página {{currentIndex2}}/{{pageNumber2}} </label>\n          </div>\n          <div class=\"btn-group pull-right\">\n             <ul class=\"pagination\" >\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == 1 || pageNumber2 == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage2()\" >Atrás</a></li>\n                   <li class=\"page-item\" *ngFor=\"let page of pagesIndex2\"  [ngClass]=\"{'active': (currentIndex2 == page)}\">\n                      <a class=\"page-link\" (click)=\"setPage2(page)\"  >{{page}} </a>\n                   </li>\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == pageNumber2 || pageNumber2 == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage2()\" >Siguiente</a></li>\n             </ul>\n          </div>\n        </div>  \n      </nb-card-footer>\n    </nb-card>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); atras()\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); asignar()\" [disabled]=\"!repartidor_id\">Aceptar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/ordenar/ordenar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ordenar/ordenar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenarComponent; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs__);
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










//declare var google;
var OrdenarComponent = /** @class */ (function () {
    function OrdenarComponent(modalService, toasterService, http, router, rutaService, fb, mapsAPILoader, ngZone, mapsApiWrapper) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapsApiWrapper = mapsApiWrapper;
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
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.categorias = [];
        this.subcategorias = [];
        this.productos = [];
        this.establecimiento_id = null;
        this.solicitud = [];
        this.establecimiento = null;
        this.variables = {
            costoxkm: 0,
            gastos_envio: 0,
            subtotal: 0,
            costo: 0,
            distancia: 0,
            tiempo: 0,
            costo_envio: 0
        };
        this.lat = 26.047172833607;
        this.lng = -98.292354481476;
        this.zoom = 16;
        //public directionsService = new google.maps.DirectionsService;
        this.directionsService = null;
        this.destino = {
            lat: '',
            lng: ''
        };
        this.repartidor_id = null;
        this.destinatario = '';
        this.telefono = '';
        this.referencia = '';
        this.directionsDisplay = null;
        this.inside = false;
        this.areaTriangle = [];
        this.coordenates = [];
        this.triangleCoords = [];
        this.reference = '';
        this.direccion = null;
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.pages2 = 4;
        this.pageSize2 = 5;
        this.pageNumber2 = 0;
        this.currentIndex2 = 1;
        this.pageStart2 = 1;
        this.inputName2 = '';
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: "#222220"
            }
        });
    }
    OrdenarComponent.prototype.ngOnInit = function () {
        if (this.mouvers_user_tipo != '4') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        else if (this.mouvers_user_tipo == '4') {
            this.establecimiento_id = localStorage.getItem('mouvers_establecimiento_id');
            this.getCategorias();
            this.getVariables();
            this.inicializarMapa();
            this.getEstablecimiento();
        }
    };
    OrdenarComponent.prototype.showToast = function (type, title, body) {
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
    OrdenarComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    OrdenarComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    OrdenarComponent.prototype.inicializarMapa = function () {
        var _this = this;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]({ enableLongStackTrace: false });
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]();
        //set current position
        //this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(26.077848, -98.375664), new google.maps.LatLng(26.077543, -98.276901), new google.maps.LatLng(26.058949, -98.283691), new google.maps.LatLng(26.041180, -98.366295));
            var options = {
                bounds: defaultBounds,
                componentRestrictions: { country: "MX" }
                //types: ['(cities)'],
                //componentRestrictions: {country: 'fr'}
            };
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            }, options);
            var circle = new google.maps.Circle({
                center: { lat: 26.047172833607, lng: -98.292354481476 },
                radius: 10 * 1000
            });
            autocomplete.setBounds(circle.getBounds());
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place.formatted_address);
                    _this.direccion = place.formatted_address;
                    //this.myFormAgregar.patchValue({direccion: place.formatted_address });
                    //console.log(place.address_components[0].long_name);
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    //this.myFormAgregar.patchValue({lat: place.geometry.location.lat() });
                    _this.longitude = place.geometry.location.lng();
                    //this.myFormAgregar.patchValue({lng: place.geometry.location.lng() });
                    _this.zoom = 11;
                    //Destino del pedido (cliente)
                    _this.Destination = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                    _this.destino.lat = place.geometry.location.lat();
                    _this.destino.lng = place.geometry.location.lng();
                    _this.calculateRoute(_this.Origin, _this.Destination);
                    //console.log(this.myFormAgregar.value.direccion);
                });
            });
        });
    };
    OrdenarComponent.prototype.setDir = function (dir) {
        return __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].create(function (observer) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'location': dir }, function (results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        console.log(results[1]);
                        //alert(JSON.stringify(results[1].formatted_address));
                        //this.setDir(results[1].formatted_address);
                        observer.next(results[1].formatted_address);
                        observer.complete();
                    }
                    else {
                        alert('No results found');
                        observer.next({});
                        observer.complete();
                    }
                }
                else {
                    console.log('Geocoder failed due to: ' + status);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    };
    OrdenarComponent.prototype.markerDragEnd = function ($event) {
        var _this = this;
        console.log($event);
        var latlng;
        latlng = $event;
        latlng = latlng.coords;
        //this.myFormAgregar.patchValue({lat: latlng.lat });
        //this.myFormAgregar.patchValue({lng: latlng.lng });
        //Destino del pedido (cliente)
        this.Destination = new google.maps.LatLng(latlng.lat, latlng.lng);
        this.destino.lat = latlng.lat;
        this.destino.lng = latlng.lng;
        this.calculateRoute(this.Origin, this.Destination);
        this.mapsApiWrapper.createPolygon({
            paths: [{ lat: 25.58726, lng: -103.51682 }, { lat: 25.58842, lng: -103.51309 }, { lat: 25.59329, lng: -103.50987 }, { lat: 25.60274, lng: -103.51296 }],
            strokeColor: '#222220',
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: '#222220',
            fillOpacity: 0
        }).then(function (data) {
            console.log(data);
            _this.areaTriangle = data;
            console.log(_this.areaTriangle);
        }).then(function () {
            /*let isValidDeliveryAddress = Boolean(this.mapsApiWrapper.containsLocation(this.Origin, this.areaTriangle));
           console.log(isValidDeliveryAddress);*/
        });
        console.log(latlng);
        console.log(this.areaTriangle);
        /* let isValidDeliveryAddress = Boolean(this.mapsApiWrapper.containsLocation(latlng, this.areaTriangle));
         console.log(isValidDeliveryAddress);*/
        this.setDir(latlng).subscribe(function (result) {
            //this.myFormAgregar.patchValue({direccion: result });
            _this.direccion = result;
        }, function (error) { return console.log(error); }, function () { return console.log('Geocoding completed!'); });
    };
    OrdenarComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    OrdenarComponent.prototype.uppercase = function (value) {
        //console.log(value);
        return value.toUpperCase();
    };
    OrdenarComponent.prototype.calculateRoute = function (origin, end) {
        var _this = this;
        var directionsService = new google.maps.DirectionsService;
        directionsService.route({
            origin: origin,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                _this.computeTotalDistance(response);
                _this.computeTotalTime(response);
            }
            else {
                console.log('Could not display directions due to: ' + status);
            }
        });
    };
    OrdenarComponent.prototype.computeTotalDistance = function (result) {
        var total = 0;
        var myroute = result.routes[0];
        for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
        }
        total = total / 1000;
        console.log('Distancia ' + total);
        this.variables.distancia = total;
        this.calcularTotales();
    };
    OrdenarComponent.prototype.computeTotalTime = function (result) {
        var total = 0;
        var myroute = result.routes[0];
        for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].duration.value;
        }
        total = total / 60;
        console.log('Tiempo ' + total);
        this.variables.tiempo = total;
    };
    OrdenarComponent.prototype.calcularTotales = function () {
        this.variables.costo_envio = 0;
        this.variables.subtotal = 0;
        this.variables.costo = 0;
        for (var i = 0; i < this.solicitud.length; ++i) {
            this.variables.subtotal += parseFloat(this.solicitud[i].precio) * parseFloat(this.solicitud[i].cantidad);
        }
        this.variables.costo_envio = (this.variables.distancia * this.variables.costoxkm) + this.variables.gastos_envio;
        this.variables.costo = this.variables.subtotal + this.variables.costo_envio;
        console.log(this.variables);
    };
    OrdenarComponent.prototype.getCoordinates = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'coordenadas?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.datosC = data;
            var aux = JSON.stringify(_this.datosC.coordenadas);
            _this.triangleCoords = JSON.parse(aux);
            console.log([{ lat: 25.58726, lng: -103.51682 }, { lat: 25.58842, lng: -103.51309 }, { lat: 25.59329, lng: -103.50987 }, { lat: 25.60274, lng: -103.51296 }]);
            //this.triangleCoords = JSON.parse(this.triangleCoords);
            //for (var i = 0; i < this.triangleCoords.length; ++i) {
            //console.log(this.triangleCoords[i].coordenada);
            _this.mapsApiWrapper.createPolygon({
                paths: [{ lat: 25.58726, lng: -103.51682 }, { lat: 25.58842, lng: -103.51309 }, { lat: 25.59329, lng: -103.50987 }, { lat: 25.60274, lng: -103.51296 }],
                strokeColor: '#222220',
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: '#222220',
                fillOpacity: 0
            }).then(function (data) {
                _this.areaTriangle = data;
            }).then(function () {
                var isValidDeliveryAddress = Boolean(_this.mapsApiWrapper.containsLocation(_this.Origin, _this.areaTriangle));
                console.log(isValidDeliveryAddress);
            });
            //}
            //this.loadMap(position);
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
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
    OrdenarComponent.prototype.getEstablecimiento = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'establecimientos/' + this.establecimiento_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.establecimiento = _this.data.establecimiento;
            //console.log(this.productList);
            _this.latitude = parseFloat(_this.establecimiento.lat);
            _this.longitude = parseFloat(_this.establecimiento.lng);
            //this.inicializarMapa();
            //Origen de pedido (Establecimiento)
            //this.Origin = new google.maps.LatLng(parseFloat(this.establecimiento.lat), parseFloat(this.establecimiento.lng));
            _this.Origin = new google.maps.LatLng(25.58726, -103.51682);
            _this.destino.lat = _this.establecimiento.lat;
            _this.destino.lng = _this.establecimiento.lng;
            _this.loading = false;
            _this.getCoordinates();
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
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
    OrdenarComponent.prototype.getVariables = function () {
        var _this = this;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'sistema/ubicacion?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.variables.costoxkm = parseFloat(_this.data.ubicacion[0].costoxkm);
            _this.variables.gastos_envio = parseFloat(_this.data.ubicacion[0].gastos_envio);
            //console.log(this.productList);
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
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
    OrdenarComponent.prototype.getCategorias = function () {
        var _this = this;
        this.subcategorias = [];
        this.productos = [];
        this.productList = this.productos;
        this.filteredItems = this.productList;
        this.init();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'categorias/habilitadas?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.categorias = _this.data.categorias;
            //console.log(this.productList);
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
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
    OrdenarComponent.prototype.getSubcategorias = function (categoria_id) {
        var _this = this;
        this.subcategorias = [];
        this.productos = [];
        this.productList = this.productos;
        this.filteredItems = this.productList;
        this.init();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'subcategorias/habilitadas/' + categoria_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.subcategorias = _this.data.subcategorias;
            //console.log(this.productList);
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
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
    OrdenarComponent.prototype.getProductos = function (subcategoria_id) {
        var _this = this;
        this.productos = [];
        this.productList = this.productos;
        this.filteredItems = this.productList;
        this.init();
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'productos/habilitados/' + subcategoria_id + '/' + this.establecimiento_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productos = _this.data.productos;
            //console.log(this.productList);
            for (var i = 0; i < _this.productos.length; ++i) {
                var id = _this.productos[i].id;
                var index = _this.solicitud.findIndex(function (element) {
                    return element.id == id;
                });
                if (index != -1) {
                    _this.productos[i].seleccionado = true;
                }
                else {
                    _this.productos[i].seleccionado = false;
                }
            }
            _this.productList = _this.productos;
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
                //this.mostrar = false;
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
    OrdenarComponent.prototype.setCategoria = function (categoria_id) {
        console.log(categoria_id);
        this.getSubcategorias(categoria_id);
    };
    OrdenarComponent.prototype.setSubcategoria = function (subcategoria_id) {
        console.log(subcategoria_id);
        this.getProductos(subcategoria_id);
    };
    OrdenarComponent.prototype.addClearProducto = function (producto) {
        if (producto.seleccionado) {
            producto.seleccionado = false;
            var id = producto.id;
            var index = this.solicitud.findIndex(function (element) {
                return element.id == id;
            });
            if (index != -1) {
                this.solicitud.splice(index, 1);
                this.calcularTotales();
            }
        }
        else {
            producto.seleccionado = true;
            producto.observacion = '';
            producto.cantidad = 1;
            producto.subtotal = 1 * parseFloat(producto.precio);
            this.agregarProducto(producto);
        }
    };
    OrdenarComponent.prototype.setCantidad = function (cantidad, producto) {
        console.log(cantidad);
        console.log(parseInt(cantidad));
        if (parseInt(cantidad) < 1) {
            producto.cantidad = 1;
            producto.subtotal = 1 * producto.precio;
        }
        else if (cantidad && cantidad != '') {
            producto.cantidad = parseFloat(cantidad);
            producto.subtotal = parseFloat(cantidad) * parseFloat(producto.precio);
        }
        console.log(producto);
        this.calcularTotales();
    };
    OrdenarComponent.prototype.checkCantidad = function (producto) {
        console.log(producto.cantidad);
        if (!producto.cantidad || producto.cantidad == '') {
            producto.cantidad = 1;
            producto.subtotal = 1 * parseFloat(producto.precio);
            this.calcularTotales();
        }
    };
    OrdenarComponent.prototype.agregarProducto = function (producto) {
        this.solicitud.push(producto);
        this.calcularTotales();
    };
    OrdenarComponent.prototype.removerProducto = function (producto) {
        var id = producto.id;
        var index = this.solicitud.findIndex(function (element) {
            return element.id == id;
        });
        if (index != -1) {
            this.solicitud.splice(index, 1);
            this.calcularTotales();
        }
        //deschek
        var index2 = this.productos.findIndex(function (element) {
            return element.id == id;
        });
        if (index2 != -1) {
            this.productos[index2].seleccionado = false;
        }
    };
    OrdenarComponent.prototype.ressetSolicitud = function () {
        this.solicitud = [];
        this.destino.lat = this.establecimiento.lat;
        this.destino.lng = this.establecimiento.lng;
        this.variables.costo_envio = 0;
        this.variables.subtotal = 0;
        this.variables.costo = 0;
        for (var i = 0; i < this.productos.length; i++) {
            this.productos[i].seleccionado = false;
            this.productos[i].cantidad = 1;
        }
        this.destinatario = '';
        this.telefono = '';
        this.direccion = null;
        this.referencia = '';
    };
    OrdenarComponent.prototype.crearPedido = function (modal) {
        var _this = this;
        if (!this.destinatario || this.destinatario == '') {
            this.showToast('warning', 'Warning!', 'Ingrese un destinatario.');
        }
        else {
            this.pedido_id = null;
            this.modal = modal;
            for (var i = 0; i < this.solicitud.length; i++) {
                this.solicitud[i].producto_id = this.solicitud[i].id;
                this.solicitud[i].precio_unitario = this.solicitud[i].precio;
            }
            var ruta = [
                {
                    posicion: 1,
                    establecimiento_id: this.establecimiento_id,
                    lat: this.establecimiento.lat,
                    lng: this.establecimiento.lng
                }
            ];
            this.loading = true;
            var datos = {
                token: localStorage.getItem('mouvers_token'),
                lat: this.destino.lat,
                lng: this.destino.lng,
                direccion: this.direccion,
                gastos_envio: this.variables.gastos_envio.toFixed(2),
                costo_envio: this.variables.costo_envio.toFixed(2),
                subtotal: this.variables.subtotal.toFixed(2),
                costo: this.variables.costo.toFixed(2),
                usuario_id: this.establecimiento.usuario.id,
                productos: JSON.stringify(this.solicitud),
                ruta: JSON.stringify(ruta),
                distancia: this.variables.distancia,
                tiempo: this.variables.tiempo,
                destinatario: this.destinatario,
                telefono: this.telefono,
                referencia: this.referencia,
            };
            console.log(this.solicitud);
            console.log(datos);
            this.http.post(this.rutaService.getRutaApi() + 'pedidos', datos)
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.data = data;
                _this.ressetSolicitud();
                _this.actualizarPago(_this.data.pedido.id);
                _this.pedido_id = _this.data.pedido.id;
                //alert(this.data.message);
                //this.loading = false;
                //this.showToast('success', 'Success!', this.data.message);
                _this.showToast('success', 'Success!', 'Pedido M00' + _this.pedido_id + ' registrado con éxito.');
            }, function (msg) {
                console.log(msg);
                console.log(msg.error.error);
                _this.loading = false;
                //token invalido/ausente o token expiro
                if (msg.status == 400 || msg.status == 401) {
                    //alert(msg.error.error);
                    //ir a login
                    _this.showToast('warning', 'Warning!', msg.error.error);
                    //this.mostrar = false;
                }
                else {
                    //alert(msg.error.error);
                    _this.showToast('error', 'Erro!', msg.error.error);
                }
            });
        }
    };
    OrdenarComponent.prototype.actualizarPago = function (pedido_id) {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            estado_pago: 'aprobado',
        };
        this.http.put(this.rutaService.getRutaApi() + 'pedidos/' + pedido_id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.showToast('success', 'Success!', 'Pago registrado.');
            _this.localizarRepartidores(pedido_id);
            //this.getRepDisponibles(); 
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
    /*Dispara la busqueda autoamtica de repartidores*/
    OrdenarComponent.prototype.localizarRepartidores = function (pedido_id) {
        //this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'notificaciones/localizar/repartidores/pedido_id/' + pedido_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            //console.log(data);
            //this.data=data;
            //this.loading = false;
        }, function (msg) {
            //console.log(msg);
            //console.log(msg.error.error);
            //this.loading = false;
            //token invalido/ausente o token expiro
            /*if(msg.status == 400 || msg.status == 401){
                 //alert(msg.error.error);
 
                 this.showToast('warning', 'Warning!', msg.error.error);
             }*/
            //sin repartidores disponibles
            /*else if(msg.status == 404){
                //alert(msg.error.error);
                this.showToast('info', 'Info!', msg.error.error);
            }*/
        });
    };
    /*Cargar los repartidores disponibles*/
    OrdenarComponent.prototype.getRepDisponibles = function () {
        var _this = this;
        this.repartidor_id = null;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'repartidores/disponibles?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList2 = _this.data.repartidores;
            _this.filteredItems2 = _this.productList2;
            //console.log(this.productList);
            _this.init2();
            _this.loading = false;
            _this.open2(_this.modal);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    OrdenarComponent.prototype.setRepartidor = function (repartidor) {
        this.repartidor_id = repartidor.id;
    };
    OrdenarComponent.prototype.atras = function () {
        this.repartidor_id = null;
        this.pedido_id = null;
    };
    OrdenarComponent.prototype.asignar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            pedido_id: this.pedido_id,
        };
        this.http.put(this.rutaService.getRutaApi() + 'notificaciones/' + this.repartidor_id + '/asignar/pedido', datos)
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
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
                if (msg.status == 409) {
                    _this.getRepDisponibles();
                }
                else {
                    _this.atras();
                }
            }
        });
    };
    OrdenarComponent.prototype.init = function () {
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
    OrdenarComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    OrdenarComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    OrdenarComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    OrdenarComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    OrdenarComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    OrdenarComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    OrdenarComponent.prototype.init2 = function () {
        this.currentIndex2 = 1;
        this.pageStart2 = 1;
        this.pages2 = 4;
        this.pageNumber2 = parseInt("" + (this.filteredItems2.length / this.pageSize2));
        if (this.filteredItems2.length % this.pageSize2 != 0) {
            this.pageNumber2++;
        }
        if (this.pageNumber2 < this.pages2) {
            this.pages2 = this.pageNumber2;
        }
        this.refreshItems2();
        console.log("this.pageNumber2 :  " + this.pageNumber2);
    };
    OrdenarComponent.prototype.FilterByName2 = function () {
        this.filteredItems2 = [];
        if (this.inputName2 != "") {
            for (var i = 0; i < this.productList2.length; ++i) {
                if (this.productList2[i].usuario.nombre.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
                else if (this.productList2[i].usuario.email.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
                else if (this.productList2[i].usuario.telefono.toUpperCase().indexOf(this.inputName2.toUpperCase()) >= 0) {
                    this.filteredItems2.push(this.productList2[i]);
                }
            }
        }
        else {
            this.filteredItems2 = this.productList2;
        }
        console.log(this.filteredItems2);
        this.init2();
    };
    OrdenarComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    OrdenarComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    OrdenarComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    OrdenarComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    OrdenarComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], OrdenarComponent.prototype, "searchElementRef", void 0);
    OrdenarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ordenar',
            styles: [__webpack_require__("../../../../../src/app/pages/ordenar/ordenar.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ordenar/ordenar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["b" /* GoogleMapsAPIWrapper */]])
    ], OrdenarComponent);
    return OrdenarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ordenar/ordenar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenarModule", function() { return OrdenarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordenar_routing_module__ = __webpack_require__("../../../../../src/app/pages/ordenar/ordenar-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Mis imports



var OrdenarModule = /** @class */ (function () {
    function OrdenarModule() {
    }
    OrdenarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCr8zuLtOO7IoK_rC948rLcqyqsIaZOouY',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__ordenar_routing_module__["a" /* OrdenarRoutingModule */],
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
            declarations: __WEBPACK_IMPORTED_MODULE_2__ordenar_routing_module__["b" /* routedComponents */].slice(),
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* GoogleMapsAPIWrapper */],
            ],
        })
    ], OrdenarModule);
    return OrdenarModule;
}());



/***/ })

});
//# sourceMappingURL=ordenar.module.chunk.js.map