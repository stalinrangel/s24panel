webpackJsonp(["pedidos.module"],{

/***/ "../../../../../src/app/pages/pedidos/pedidos-aceptar/pedidos-aceptar.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!viendo && mostrar\">\n  <nb-card-header>\n    <div class=\"row show-grid\">\n          <div class=\"col-6\" >\n            Pedidos en espera de aceptación por proveedor &nbsp;\n              <button style=\"display: inline-block;\"  type=\"button\" class=\"btn btn-primary btn-icon btn-tn\" title=\"Refresh\" (click)=\"refreshTabla()\"> <i class=\"fa fa-refresh icon-refresh\"></i>\n              </button>\n            \n          </div>\n          <div class=\"col-6\">\n            <div>\n              <div style=\"text-align: right;\">\n               <strong>Buscar: </strong>\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <table class=\"table\">\n      <thead>\n         <!-- <th></th> -->\n         <th style=\"text-align: center;\">Pedido</th>\n         <th style=\"text-align: center;\">Servicio</th>\n         <th style=\"text-align: center;\">Usuario</th>\n         <th style=\"text-align: center;\">Fecha</th>\n         <th style=\"text-align: center;\">Hora</th>\n         <th style=\"text-align: center;\">Hora Aceptación</th>\n         <th style=\"text-align: center;\">Estado</th>\n         <th style=\"text-align: center;\">Proveedor</th>\n         <th style=\"text-align: center;\">Acciones</th>\n      </thead>  \n      <tbody>\n         <tr *ngFor=\"let item of items\" >\n            <!-- <td></td> -->\n            <td style=\"text-align: center; vertical-align:middle;\">S00{{item.id}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.productos[0].nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'dd/MM/yyyy'}} -->{{item.fecha}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'hh:mm:ss'}} -->{{item.hora}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'hh:mm:ss'}} -->{{item.hora_aceptado}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.estado}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\"> {{item.repartidor_nom}} </td>\n            <td style=\"text-align: center; vertical-align:middle;\">\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Ver\" (click)=\"ver(item)\">\n                <i class=\"fa fa-eye\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Asignar repartidor\" (click)=\"getRepDisponibles(item, modal1)\">\n                <i class=\"ion-android-bicycle\"></i>\n              </button>\n            </td>\n         </tr>\n      </tbody>\n    </table>\n      \n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n      <div class=\"btn-group\">\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n      </div>\n      <div class=\"btn-group pull-right\">\n         <ul class=\"pagination\" >\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n               </li>\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n         </ul>\n      </div>\n    </div>  \n  </nb-card-footer>\n</nb-card>\n\n<div class=\"viendo\" *ngIf=\"viendo\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <nb-card>\n        <nb-card-header>\n          Detalles del Pedido S00{{selectedObj.id}}<br>\n          <div class=\"pull-right\" style=\"margin-right: 10px\">\n            <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\n            Estado: {{selectedObj.estado}} &nbsp;\n            <button type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Asignar repartidor\" (click)=\"getRepDisponibles(selectedObj, modal1)\">\n                <i class=\"ion-android-bicycle\"></i>\n              </button>\n            <a href=\"https://wa.me/{{codigo_pais_selec}}{{selectedObj.telefono}}?text=Hola%20*{{selectedObj.repartidor.usuario.nombre}}*,%20tenemos%20un%20pedido%20para%20ustedes%20*S2400{{selectedObj.id}}*%20de%20*{{selectedObj.productos[0].nombre}}*%20del%20usuario%20*{{selectedObj.usuario.nombre}}*%20¡Service24!\" class=\"whatsapp\" target=\"_blank\"> <i class=\"fa fa-whatsapp\" style=\" color:#00bb2d; border-radius:50px; text-align:center; font-size:30px;\"></i>Avisa al proveedor</a>\n           <select [(ngModel)]=\"codigo_pais_selec\">\n            <option *ngFor=\"let c of codigo_pais\" [ngValue]=\"c.code\">{{c.code}}</option>\n           </select>\n            <input [(ngModel)]=\"selectedObj.telefono\">\n          </div>\n        </nb-card-header>\n        <nb-card-body>\n            \n          <h5 *ngIf=\"selectedObj.repartidor_nom\"class=\"grid-h\">Repartidor</h5>\n          <div *ngIf=\"selectedObj.repartidor_nom\"class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.repartidor_nom}}</div>\n            </div>\n\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-8\">\n              <div>{{selectedObj.repartidor.usuario.telefono}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Fecha/Hora</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Fecha</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.fecha}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Hora</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.hora}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Usuario</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.nombre}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Email</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.email}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.telefono}}</div>\n            </div>\n\n            <!--div class=\"col-md-4\">\n              <div>Ciudad</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.ciudad}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Estado</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.estado}}</div>\n            </div-->\n\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\n              <div>Destinatario</div>\n            </div>\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\n              <div>{{selectedObj.destinatario}}</div>\n            </div>\n\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\n              <div>{{selectedObj.telefono}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Referencias</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Dirección</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.direccion}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Referencia</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.referencia}}</div>\n            </div>\n\n            <!--div class=\"col-md-12\">\n              <div *ngIf=\"selectedObj.lat && selectedObj.lng\">\n               \n                <agm-map style=\"height: 300px;\" [zoom]=\"13\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\">\n                      <agm-marker style=\"height: 300px;\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\"></agm-marker>\n                  </agm-map>\n              </div>\n            </div-->\n\n\n          </div>\n\n          <div class=\"row\">  \n            <div class=\"col-md-12\">\n                <div style=\"height: 300px;\" #map id=\"map\" (click)=\"clickMap()\"></div>\n            </div>    \n          </div>\n\n          \n          <!--div class=\"table-responsive\">\n            <h5 class=\"grid-h\">Productos Solicitados</h5>\n            <table class=\"table table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>\n                   Producto\n                  </th>\n                  <th>\n                   Establecimiento\n                  </th>\n                  <th>\n                   Solicitados\n                  </th>\n                  <th>\n                   Precio Unit. <small>($)</small>\n                  </th>\n                  <th>\n                   Sub-total <small>($)</small>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of selectedObj.productos\">\n                  <td class=\"text-center\">\n                    {{item.nombre}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.establecimiento.nombre}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.cantidad}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.precio_unitario}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.precio_unitario * item.pivot.cantidad}}\n                  </td>\n                </tr>\n                \n                <tr>\n                  <td colspan=\"5\"></td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Envío</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.costo_envio | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Sub-total</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.subtotal | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Total</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.costo | number: '1.2-2'}}</td>\n                </tr> \n              </tbody>\n            </table>\n          </div-->\n        </nb-card-body>\n        <nb-card-footer>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\n            </div>\n            <div class=\"col-6\">\n              <button  class=\"btn btn-tn btn-danger\" (click)=\"cancelar()\"  [disabled]=\"mouvers_user_tipo =='6'\"> Cancelar pedido</button>\n              <input  type=\"text\"  [(ngModel)]=\"comentarios\" style=\"width: 100%\" />\n            </div>\n          </div>\n         \n        </nb-card-footer>\n      </nb-card>\n    </div>\n</div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Repartidores disponibles: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click'); atras()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"row show-grid\">\n              <div class=\"col-6\">\n                <div>Lista de Socios</div>\n              </div>\n              <div class=\"col-6\">\n                <div>\n                  <div style=\"text-align: right;\">\n                   <strong>Buscar: </strong>\n                   <input  type=\"text\"  id=\"inputName2\" [(ngModel)]=\"inputName2\" (ngModelChange)=\"FilterByName2()\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </nb-card-header>\n\n      <nb-card-body>\n\n        <table class=\"table table-striped\">\n          <thead>\n             <!-- <th style=\"text-align: center;\">ID</th> -->\n             <th style=\"text-align: center;\">Nombre</th>\n             <th style=\"text-align: center;\">Email</th>\n             <th style=\"text-align: center;\">Teléfono</th>\n             <th style=\"text-align: center;\">Acción</th>\n          </thead>\n          <tbody>\n             <tr *ngFor=\"let item of items2\" >\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.email}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.telefono}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">\n                  <label class=\"custom-control custom-radio\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" (change)=\"setRepartidor(item)\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Asignar</span>\n                  </label>\n                </td>\n             </tr>\n          </tbody>\n        </table>\n          \n      </nb-card-body>\n      <nb-card-footer>\n        <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n          <div class=\"btn-group\">\n             <label style=\"margin-top:10px\">Página {{currentIndex2}}/{{pageNumber2}} </label>\n          </div>\n          <div class=\"btn-group pull-right\">\n             <ul class=\"pagination\" >\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == 1 || pageNumber2 == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage2()\" >Atrás</a></li>\n                   <li class=\"page-item\" *ngFor=\"let page of pagesIndex2\"  [ngClass]=\"{'active': (currentIndex2 == page)}\">\n                      <a class=\"page-link\" (click)=\"setPage2(page)\"  >{{page}} </a>\n                   </li>\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == pageNumber2 || pageNumber2 == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage2()\" >Siguiente</a></li>\n             </ul>\n          </div>\n        </div>  \n      </nb-card-footer>\n    </nb-card>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); atras()\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); asignar()\" [disabled]=\"!repartidor_id\">Aceptar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-aceptar/pedidos-aceptar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-default) .title-text {\n  text-align: center;\n  padding: 40% 0px 30px 0px; }\n\n:host-context(.nb-theme-default) ion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 0px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: -1;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) #map {\n  height: 300px;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n  position: relative; }\n  :host-context(.nb-theme-default) #map.show-map {\n    opacity: 1; }\n\n:host-context(.nb-theme-default) .content-price {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  font-size: 13px; }\n\n:host-context(.nb-theme-default) .icon-map {\n  font-size: 22px;\n  color: #D2D2D2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .pac-container {\n  z-index: 10000;\n  pointer-events: auto;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .alert-text {\n  background-color: #C62828;\n  padding: 20px;\n  text-align: justify;\n  color: #fff; }\n\n:host-context(.nb-theme-default) .item-md.item-block .item-inner {\n  padding-right: 0px; }\n\n:host-context(.nb-theme-default) textarea.text-input {\n  border: 1px solid #d2d2d2;\n  border-radius: 4px;\n  padding: 15px;\n  margin: 13px 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) .div-button {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 45%;\n  margin: 10px auto 20px;\n  padding: 11px;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  max-width: 370px; }\n\n:host-context(.nb-theme-default) .btn-login {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff; }\n\n:host-context(.nb-theme-default) .div-button1 {\n  padding: 11px;\n  width: 99%;\n  text-align: center;\n  margin-left: 1%;\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 15px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  color: #fff; }\n\n:host-context(.nb-theme-default) .btn-login1 {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 90%;\n  margin: 20px auto; }\n\n:host-context(.nb-theme-default) .textarea-info .item-inner {\n  border-bottom: none !important; }\n\n:host-context(.nb-theme-default) .info-hour {\n  margin: 0px;\n  padding: 15px;\n  background-color: #fff852;\n  font-size: 11px;\n  text-align: center; }\n\n:host-context(.nb-theme-default) .title-service {\n  background-color: #fff;\n  margin: 0px;\n  padding: 16px;\n  text-align: center;\n  font-weight: bold; }\n\n:host-context(.nb-theme-default) ion-datetime {\n  border: 1px solid #d6d6d6;\n  border-radius: 4px;\n  min-width: 100px;\n  text-align: center;\n  padding: 8px !important;\n  width: 90%;\n  margin: 15px auto; }\n\n:host-context(.nb-theme-default) .icon-time {\n  font-size: 25px;\n  margin-left: 11px;\n  color: #666666; }\n\n:host-context(.nb-theme-default) .text-left {\n  margin-left: 30% !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 15px; }\n\n:host-context(.nb-theme-default) .input-price {\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  :host-context(.nb-theme-default) .input-price .text-input-md {\n    margin: 8px;\n    text-align: center; }\n\n:host-context(.nb-theme-default) .text-right {\n  margin-right: 40% !important;\n  margin-left: 8px !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .item-price {\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .item-price .item-inner {\n    border: none !important;\n    border-bottom: none !important; }\n\n:host-context(.nb-theme-default) .select-md {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 0px 10px 20px; }\n\n:host-context(.nb-theme-default) .input-wrapper {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .input-sym {\n  max-width: 8px;\n  top: 0px;\n  position: absolute; }\n  :host-context(.nb-theme-default) .input-sym .text-input-md {\n    width: 10px;\n    margin: 0px;\n    text-align: center;\n    height: 50px; }\n\n:host-context(.nb-theme-default) .colorGrey {\n  background-color: #ccc !important; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .title-text {\n  text-align: center;\n  padding: 40% 0px 30px 0px; }\n\n:host-context(.nb-theme-cosmic) ion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 0px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: -1;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) #map {\n  height: 300px;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n  position: relative; }\n  :host-context(.nb-theme-cosmic) #map.show-map {\n    opacity: 1; }\n\n:host-context(.nb-theme-cosmic) .content-price {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  font-size: 13px; }\n\n:host-context(.nb-theme-cosmic) .icon-map {\n  font-size: 22px;\n  color: #D2D2D2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .pac-container {\n  z-index: 10000;\n  pointer-events: auto;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .alert-text {\n  background-color: #C62828;\n  padding: 20px;\n  text-align: justify;\n  color: #fff; }\n\n:host-context(.nb-theme-cosmic) .item-md.item-block .item-inner {\n  padding-right: 0px; }\n\n:host-context(.nb-theme-cosmic) textarea.text-input {\n  border: 1px solid #d2d2d2;\n  border-radius: 4px;\n  padding: 15px;\n  margin: 13px 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .div-button {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 45%;\n  margin: 10px auto 20px;\n  padding: 11px;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  max-width: 370px; }\n\n:host-context(.nb-theme-cosmic) .btn-login {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff; }\n\n:host-context(.nb-theme-cosmic) .div-button1 {\n  padding: 11px;\n  width: 99%;\n  text-align: center;\n  margin-left: 1%;\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 15px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  color: #fff; }\n\n:host-context(.nb-theme-cosmic) .btn-login1 {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 90%;\n  margin: 20px auto; }\n\n:host-context(.nb-theme-cosmic) .textarea-info .item-inner {\n  border-bottom: none !important; }\n\n:host-context(.nb-theme-cosmic) .info-hour {\n  margin: 0px;\n  padding: 15px;\n  background-color: #fff852;\n  font-size: 11px;\n  text-align: center; }\n\n:host-context(.nb-theme-cosmic) .title-service {\n  background-color: #fff;\n  margin: 0px;\n  padding: 16px;\n  text-align: center;\n  font-weight: bold; }\n\n:host-context(.nb-theme-cosmic) ion-datetime {\n  border: 1px solid #d6d6d6;\n  border-radius: 4px;\n  min-width: 100px;\n  text-align: center;\n  padding: 8px !important;\n  width: 90%;\n  margin: 15px auto; }\n\n:host-context(.nb-theme-cosmic) .icon-time {\n  font-size: 25px;\n  margin-left: 11px;\n  color: #666666; }\n\n:host-context(.nb-theme-cosmic) .text-left {\n  margin-left: 30% !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 15px; }\n\n:host-context(.nb-theme-cosmic) .input-price {\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  :host-context(.nb-theme-cosmic) .input-price .text-input-md {\n    margin: 8px;\n    text-align: center; }\n\n:host-context(.nb-theme-cosmic) .text-right {\n  margin-right: 40% !important;\n  margin-left: 8px !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .item-price {\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .item-price .item-inner {\n    border: none !important;\n    border-bottom: none !important; }\n\n:host-context(.nb-theme-cosmic) .select-md {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 0px 10px 20px; }\n\n:host-context(.nb-theme-cosmic) .input-wrapper {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .input-sym {\n  max-width: 8px;\n  top: 0px;\n  position: absolute; }\n  :host-context(.nb-theme-cosmic) .input-sym .text-input-md {\n    width: 10px;\n    margin: 0px;\n    text-align: center;\n    height: 50px; }\n\n:host-context(.nb-theme-cosmic) .colorGrey {\n  background-color: #ccc !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-aceptar/pedidos-aceptar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosAceptarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/header-to-pedidos-event-service/header-to-pedidos-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__ = __webpack_require__("../../../../../src/app/services/header-service/header.service.ts");
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









var PedidosAceptarComponent = /** @class */ (function () {
    function PedidosAceptarComponent(modalService, toasterService, http, router, rutaService, headerToPedidosEventService, headerService) {
        var _this = this;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.headerToPedidosEventService = headerToPedidosEventService;
        this.headerService = headerService;
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
        this.viendo = false;
        this.mostrar = true;
        this.repartidor_id = null;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.id_operacion = "";
        this.codigo_pais = [
            {
                id: 1,
                code: 598
            },
            {
                id: 2,
                code: 507
            },
            {
                id: 3,
                code: 58
            },
            {
                id: 4,
                code: 54
            },
        ];
        this.codigo_pais_selec = "";
        this.comentarios = "Finalizado por Administrador";
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
        //Detectar evento cargar pedido de notificacion entrante
        this.headerToPedidosEventService.headerToPedidosData.subscribe(function (data) {
            console.log(data);
            //setTimeout(()=>{
            console.log(data);
            _this.id_operacion = data;
            _this.id_operacion = _this.id_operacion.id_operacion;
            console.log(_this.id_operacion);
            localStorage.setItem('id_operacion', _this.id_operacion);
            //this.headerEvent();
            //this.buscar_id_operacion();
            //},6600);
            setTimeout(function () {
                localStorage.setItem('id_operacion', "");
            }, 49600);
        });
    }
    PedidosAceptarComponent.prototype.checkid_operacion = function () {
        console.log(this.id_operacion);
    };
    PedidosAceptarComponent.prototype.ngOnInit = function () {
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
        this.codigo_pais_selec = localStorage.getItem('mouvers_pais');
        this.viendo = null;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos/estado/curso?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //Cambiar el formato de la fecha y hora
            var dia;
            var mes;
            var anio;
            var fecha;
            var hora;
            var minutos;
            var segundos;
            _this.productList = [];
            for (var i = 0; i < _this.data.pedidos.length; i++) {
                fecha = new Date(_this.data.pedidos[i].created_at);
                dia = fecha.getDate();
                mes = fecha.getMonth() + 1;
                anio = fecha.getFullYear();
                hora = fecha.getHours();
                minutos = fecha.getMinutes();
                segundos = fecha.getSeconds();
                _this.data.pedidos[i].fecha = dia + '/' + mes + '/' + anio;
                _this.data.pedidos[i].hora = hora + ':' + minutos + ':' + segundos;
                _this.data.pedidos[i].ref = 'M00' + _this.data.pedidos[i].id;
                if (_this.data.pedidos[i].repartidor != null) {
                    _this.data.pedidos[i].telefono = _this.data.pedidos[i].repartidor.usuario.telefono;
                }
                //Control de estados del pedido
                if (_this.data.pedidos[i].estado == 1) {
                    _this.data.pedidos[i].estado = 'No asignado';
                    _this.productList.push(_this.data.pedidos[i]);
                }
                else if (_this.data.pedidos[i].estado == 2) {
                    _this.data.pedidos[i].estado = 'Asignado no aceptado por proveedor';
                }
                else if (_this.data.pedidos[i].estado == 3) {
                    _this.data.pedidos[i].estado = 'En camino';
                }
                else if (_this.data.pedidos[i].estado == 4) {
                    _this.data.pedidos[i].estado = 'Entregado';
                }
            }
            setTimeout(function () {
                // this.productList = this.data.pedidos;
                _this.datos = _this.productList;
                _this.filteredItems = _this.productList;
                //console.log(this.productList);
                _this.init();
                _this.loading = false;
                setTimeout(function () {
                    _this.checkid_operacion();
                }, 6600);
                //verificar si hay que cargar un pedido de una notificacion
                setTimeout(function () {
                    // this.checkHeaderEvent();
                }, 600);
            }, 1000);
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
    PedidosAceptarComponent.prototype.buscar_id_operacion = function () {
        var _this = this;
        console.log('buscar_id_operacion');
        console.log(localStorage.getItem('id_operacion'));
        var id_operacion = localStorage.getItem('id_operacion');
        if (id_operacion != "") {
            var prod = this.datos;
            console.log(prod);
            for (var i = 0; i < prod.length; i++) {
                if (id_operacion == prod[i].id) {
                    console.log(prod[i]);
                    var selec = prod[i];
                    setTimeout(function () {
                        console.log(selec);
                        _this.ver(selec);
                    }, 1000);
                }
            }
        }
    };
    PedidosAceptarComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('mouvers_pedido_id', '');
    };
    PedidosAceptarComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterConfig */]({
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
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    PedidosAceptarComponent.prototype.refreshTabla = function () {
        this.productList = [];
        this.filteredItems = this.productList;
        this.init();
        localStorage.setItem('mouvers_pedido_id', '');
        this.ngOnInit();
    };
    //Abrir modal por defecto
    PedidosAceptarComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    PedidosAceptarComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    PedidosAceptarComponent.prototype.atras = function () {
        this.viendo = false;
        this.selectedObj = null;
        this.objAEliminar = null;
        this.repartidor_id = null;
        localStorage.setItem('id_operacion', "");
    };
    PedidosAceptarComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    PedidosAceptarComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'productos/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    PedidosAceptarComponent.prototype.cancelar = function () {
        var _this = this;
        console.log(this.selectedObj);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            finalizo: 1,
            comentario: this.comentarios,
        };
        this.http.post(this.rutaService.getRutaApi() + '/cancelar_pedidos/' + this.selectedObj.id + '?token=' + localStorage.getItem('mouvers_token'), datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.ngOnInit();
            _this.viendo = false;
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
    /*Cargar los repartidores disponibles*/
    PedidosAceptarComponent.prototype.getRepDisponibles = function (obj, modal) {
        var _this = this;
        this.repartidor_id = null;
        this.selectedObj = Object.assign({}, obj);
        console.log(this.selectedObj);
        var zona_id = this.selectedObj.zona_id;
        var subcategoria_id = this.selectedObj.productos[0].subcategoria_id;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'repartidores/disponibles?zona_id=' + zona_id + '&subcategoria_id=' + subcategoria_id + '&token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList2 = _this.data.repartidores;
            _this.filteredItems2 = _this.productList2;
            //console.log(this.productList);
            _this.init2();
            _this.loading = false;
            _this.open2(modal);
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
    PedidosAceptarComponent.prototype.setRepartidor = function (repartidor) {
        this.repartidor_id = repartidor.id;
    };
    PedidosAceptarComponent.prototype.asignar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            pedido_id: this.selectedObj.id,
        };
        this.http.put(this.rutaService.getRutaApi() + 'notificaciones/' + this.repartidor_id + '/asignar/pedido', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.repartidor = _this.data.repartidor;
            //Actualiza la vista del detalle del pedido
            _this.selectedObj.repartidor = _this.repartidor;
            _this.selectedObj.repartidor_nom = _this.repartidor.usuario.nombre;
            if (_this.selectedObj.estado == 'No asignado') {
                _this.selectedObj.estado = 'Asignado';
            }
            _this.headerService.clearNotificationCliAux(_this.selectedObj.id);
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.selectedObj.id) {
                    if (_this.productList[i].estado == 'No asignado') {
                        _this.productList[i].estado = 'Asignado';
                    }
                    _this.productList[i].repartidor_id = _this.repartidor.id;
                    _this.productList[i].repartidor_nom = _this.repartidor.usuario.nombre;
                    _this.productList[i].repartidor = _this.repartidor;
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
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
    PedidosAceptarComponent.prototype.ver = function (obj) {
        console.log(this.id_operacion);
        console.log(obj);
        this.viendo = true;
        this.selectedObj = Object.assign({}, obj);
        this.selectedObj.telefono1 = this.selectedObj.telefono.substr(1);
        console.log(this.selectedObj);
        this.codigo_pais_selec = this.codigo_pais_selec_code(localStorage.getItem('mouvers_pais'));
        if (this.selectedObj.lat && this.selectedObj.lng) {
            this.selectedObj.lat = parseFloat(this.selectedObj.lat);
            this.selectedObj.lng = parseFloat(this.selectedObj.lng);
        }
    };
    PedidosAceptarComponent.prototype.codigo_pais_selec_code = function (id) {
        for (var i = 0; i < this.codigo_pais.length; ++i) {
            if (id == this.codigo_pais[i].id) {
                return this.codigo_pais[i].code;
            }
        }
    };
    PedidosAceptarComponent.prototype.headerEvent = function () {
        this.ngOnInit();
    };
    PedidosAceptarComponent.prototype.checkHeaderEvent = function () {
        if (localStorage.getItem('mouvers_pedido_id') &&
            localStorage.getItem('mouvers_pedido_id') != '' &&
            localStorage.getItem('mouvers_pedido_id') != 'null') {
            var existe = false;
            var pedido_id = parseInt(localStorage.getItem('mouvers_pedido_id'));
            for (var i = 0; i < this.productList.length; i++) {
                if (this.productList[i].id == pedido_id) {
                    this.ver(this.productList[i]);
                    localStorage.setItem('mouvers_pedido_id', '');
                    if (this.productList[i].estado == 'Asignado' || this.productList[i].estado == 'En camino') {
                        this.headerService.clearNotificationCliAux(this.productList[i].id);
                    }
                    existe = true;
                }
            }
            if (!existe) {
                this.showToast('warning', 'Warning!', 'El pedido solicitado ya no está en esta sección.');
            }
        }
    };
    PedidosAceptarComponent.prototype.init = function () {
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
        this.buscar_id_operacion();
    };
    PedidosAceptarComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (!this.productList[i].repartidor_nom) {
                    this.productList[i].repartidor_nom = ' ';
                }
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].hora.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].repartidor_nom.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].ref.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    PedidosAceptarComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    PedidosAceptarComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    PedidosAceptarComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    PedidosAceptarComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    PedidosAceptarComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    PedidosAceptarComponent.prototype.init2 = function () {
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
    PedidosAceptarComponent.prototype.FilterByName2 = function () {
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
    PedidosAceptarComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    PedidosAceptarComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    PedidosAceptarComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    PedidosAceptarComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    PedidosAceptarComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    PedidosAceptarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-curso-prod',
            template: __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-aceptar/pedidos-aceptar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pedidos/pedidos-aceptar/pedidos-aceptar.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__["a" /* HeaderToPedidosEventService */],
            __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__["a" /* HeaderService */]])
    ], PedidosAceptarComponent);
    return PedidosAceptarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-cancelados/pedidos-cancelados.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!viendo && mostrar\">\n  <nb-card-header>\n    <div class=\"row show-grid\">\n          <div class=\"col-6\">\n            <div>Pedidos Cancelados</div>\n          </div>\n          <div class=\"col-6\">\n            <div>\n              <div style=\"text-align: right;\">\n               <strong>Buscar: </strong>\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <table class=\"table\">\n      <thead>\n         <!-- <th></th> -->\n         <th style=\"text-align: center;\">Pedido</th>\n         <th style=\"text-align: center;\">Servicio</th>\n         <th style=\"text-align: center;\">Usuario</th>\n         <th style=\"text-align: center;\">Fecha</th>\n         <th style=\"text-align: center;\">Hora</th>\n         <th style=\"text-align: center;\">Hora Aceptación</th>\n         <th style=\"text-align: center;\">Estado</th>\n         <th style=\"text-align: center;\">Proveedor</th>\n         <th style=\"text-align: center;\">Motivo</th>\n         <th style=\"text-align: center;\">Finalizo</th>\n         <th style=\"text-align: center;\">Acciones</th>\n      </thead>  \n      <tbody>\n         <tr *ngFor=\"let item of items\" >\n            <!-- <td></td> -->\n            <td style=\"text-align: center; vertical-align:middle;\">S00{{item.id}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.productos[0].nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.fecha}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.hora}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.hora_aceptado}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.estado}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.repartidor_nom}} </td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.comentario}} </td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.finalizo}} </td>\n            <td style=\"text-align: center; vertical-align:middle;\">\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Ver\" (click)=\"ver(item)\">\n                <i class=\"fa fa-eye\"></i>\n              </button>\n            </td>\n         </tr>\n      </tbody>\n    </table>\n      \n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n      <div class=\"btn-group\">\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n      </div>\n      <div class=\"btn-group pull-right\">\n         <ul class=\"pagination\" >\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n               </li>\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n         </ul>\n      </div>\n    </div>  \n  </nb-card-footer>\n</nb-card>\n\n<div class=\"viendo\" *ngIf=\"viendo\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <nb-card>\n        <nb-card-header>\n          Detalles del Pedido AI00{{selectedObj.id}}<br><br>\n          <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\n          <div class=\"pull-right\" style=\"margin-right: 10px\">\n            Estado: {{selectedObj.estado}}\n          </div>\n        </nb-card-header>\n        <nb-card-body>\n\n          <h5 *ngIf=\"selectedObj.repartidor_nom\"class=\"grid-h\">Proveedor</h5>\n          <div *ngIf=\"selectedObj.repartidor_nom\"class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.repartidor_nom}}</div>\n            </div>\n\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-8\">\n              <div>{{selectedObj.repartidor.usuario.telefono}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Fecha/Hora</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Fecha</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.fecha}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Hora</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.hora}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Usuario</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.nombre}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Email</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.email}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.telefono}}</div>\n            </div>\n\n            <!--div class=\"col-md-4\">\n              <div>Ciudad</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.ciudad}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Estado</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.estado}}</div>\n            </div-->\n\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\n              <div>Destinatario</div>\n            </div>\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\n              <div>{{selectedObj.destinatario}}</div>\n            </div>\n\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\n              <div>{{selectedObj.telefono}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Referencias</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Dirección</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.direccion}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Referencia</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.referencia}}</div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <div *ngIf=\"selectedObj.lat && selectedObj.lng\">\n                <!-- <strong>Aqui el mapa</strong> -->\n                <agm-map style=\"height: 300px;\" [zoom]=\"13\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\">\n                      <agm-marker style=\"height: 300px;\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\"></agm-marker>\n                  </agm-map>\n              </div>\n            </div>\n\n\n          </div>\n\n          \n          <!--div class=\"table-responsive\">\n            <h5 class=\"grid-h\">Productos Solicitados</h5>\n            <table class=\"table table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>\n                   Producto\n                  </th>\n                  <th>\n                   Establecimiento\n                  </th>\n                  <th>\n                   Solicitados\n                  </th>\n                  <th>\n                   Precio Unit. <small>($)</small>\n                  </th>\n                  <th>\n                   Sub-total <small>($)</small>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of selectedObj.productos\">\n                  <td class=\"text-center\">\n                    {{item.nombre}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.establecimiento.nombre}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.cantidad}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.precio_unitario}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.precio_unitario * item.pivot.cantidad}}\n                  </td>\n                </tr>\n                \n                <tr>\n                  <td colspan=\"5\"></td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Envío</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.costo_envio | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Sub-total</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.subtotal | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Total</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.costo | number: '1.2-2'}}</td>\n                </tr> \n              </tbody>\n            </table>\n          </div-->\n\n          <h5 >Calificación</h5>\n          <div *ngFor=\"let item of selectedObj.calificacion\" >\n            <div class=\"row show-grid\" *ngIf=\"item.usuario_id==selectedObj.repartidor.usuario_id\">\n              <div class=\"col-md-4\">\n                <div>Puntaje del Proveedor</div>\n              </div>\n              <div class=\"col-md-8\" >\n                <div>\n                  <ngb-rating [(rate)]=\"item.puntaje\" max=5>\n                    <ng-template let-fill=\"fill\">\n                      <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                        <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\n                        <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\n                      </span>\n                    </ng-template>\n                  </ngb-rating>\n                  <span class=\"current-rate\">{{ item.puntaje }}</span>\n                </div>\n              </div>\n\n              <div *ngIf=\"item.comentario && item.comentario != ''\" class=\"col-md-4\">\n                <div>Comentario</div>\n              </div>\n              <div *ngIf=\"item.comentario && item.comentario != ''\" class=\"col-md-8\">\n                <div>{{item.comentario}}</div>\n              </div>\n            </div>\n          </div>\n         \n           <br><br><br>\n\n          <div  *ngFor=\"let item of selectedObj.calificacion\" >\n            <div class=\"row show-grid\" *ngIf=\"item.usuario_id==selectedObj.usuario.id\">\n              <div class=\"col-md-4\">\n                <div>Puntaje del Usuario</div>\n              </div>\n              <div class=\"col-md-8\" *ngIf=\"item.usuario_id==selectedObj.usuario.id\">\n                <div>\n                  <ngb-rating [(rate)]=\"item.puntaje\" max=5>\n                    <ng-template let-fill=\"fill\">\n                      <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                        <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\n                        <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\n                      </span>\n                    </ng-template>\n                  </ngb-rating>\n                  <span class=\"current-rate\">{{ item.puntaje }}</span>\n                </div>\n              </div>\n\n              <div *ngIf=\"item.comentario && item.comentario != ''\" class=\"col-md-4\">\n                <div>Comentario</div>\n              </div>\n              <div *ngIf=\"item.comentario && item.comentario != ''\" class=\"col-md-8\">\n                <div>{{item.comentario}}</div>\n              </div>\n            </div>\n          </div>\n            <br><br><br><br>\n\n          \n        </nb-card-body>\n        <nb-card-footer>\n          <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\n        </nb-card-footer>\n      </nb-card>\n    </div>\n</div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Eliminar Producto: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>¿Realmente desea eliminar el producto {{eliminar_nombre}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-cancelados/pedidos-cancelados.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .viendo .star {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .viendo .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .viendo .current-rate {\n  padding-left: 1rem; }\n\n:host-context(.nb-theme-default) .viendo ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) .viendo ngb-rating i {\n  color: #0b417a; }\n\n:host-context(.nb-theme-default) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .viendo .star {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .viendo .filled {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .viendo .current-rate {\n  padding-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .viendo ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) .viendo ngb-rating i {\n  color: #0b417a;\n  color: #0b417a; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .viendo .table-responsive {\n  margin-top: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-cancelados/pedidos-cancelados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosCanceladosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/header-to-pedidos-event-service/header-to-pedidos-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__ = __webpack_require__("../../../../../src/app/services/header-service/header.service.ts");
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









var PedidosCanceladosComponent = /** @class */ (function () {
    function PedidosCanceladosComponent(modalService, toasterService, http, router, rutaService, headerToPedidosEventService, headerService) {
        var _this = this;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.headerToPedidosEventService = headerToPedidosEventService;
        this.headerService = headerService;
        this.starRate = 2;
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
        this.viendo = false;
        this.mostrar = true;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.id_operacion = "";
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        //Detectar evento cargar pedido de notificacion entrante
        this.headerToPedidosEventService.headerToPedidosData.subscribe(function (data) {
            console.log(data);
            _this.id_operacion = data;
            _this.id_operacion = _this.id_operacion.id_operacion;
            console.log(_this.id_operacion);
            localStorage.setItem('id_operacion', _this.id_operacion);
            setTimeout(function () {
                localStorage.setItem('id_operacion', "");
            }, 49600);
        });
    }
    PedidosCanceladosComponent.prototype.ngOnInit = function () {
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
        this.viendo = null;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos/estado/cancelados?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //Cambiar el formato de la fecha y hora
            var dia;
            var mes;
            var anio;
            var fecha;
            var hora;
            var minutos;
            var segundos;
            for (var i = 0; i < _this.data.pedidos.length; i++) {
                fecha = new Date(_this.data.pedidos[i].created_at);
                dia = fecha.getDate();
                mes = fecha.getMonth() + 1;
                anio = fecha.getFullYear();
                hora = fecha.getHours();
                minutos = fecha.getMinutes();
                segundos = fecha.getSeconds();
                _this.data.pedidos[i].fecha = dia + '/' + mes + '/' + anio;
                _this.data.pedidos[i].hora = hora + ':' + minutos + ':' + segundos;
                _this.data.pedidos[i].ref = 'M00' + _this.data.pedidos[i].id;
                //Control de estados del pedido
                if (_this.data.pedidos[i].estado == 1) {
                    _this.data.pedidos[i].estado = 'No asignado';
                }
                else if (_this.data.pedidos[i].estado == 2) {
                    _this.data.pedidos[i].estado = 'Asignado';
                }
                else if (_this.data.pedidos[i].estado == 3) {
                    _this.data.pedidos[i].estado = 'En camino';
                }
                else if (_this.data.pedidos[i].estado == 4) {
                    _this.data.pedidos[i].estado = 'Entregado';
                }
                else if (_this.data.pedidos[i].estado == 5) {
                    _this.data.pedidos[i].estado = 'Cancelado';
                }
                if (_this.data.pedidos[i].finalizo == 2) {
                    _this.data.pedidos[i].finalizo = 'Cliente';
                }
                else if (_this.data.pedidos[i].finalizo == 3) {
                    _this.data.pedidos[i].finalizo = 'Proveedor';
                }
                else if (_this.data.pedidos[i].finalizo == 1) {
                    _this.data.pedidos[i].finalizo = 'Administrador';
                }
            }
            _this.loading = false;
            setTimeout(function () {
                _this.productList = _this.data.pedidos;
                _this.filteredItems = _this.productList;
                _this.datos = _this.productList;
                //console.log(this.productList);
                _this.init();
                //verificar si hay que cargar un pedido de una notificacion
                setTimeout(function () {
                    // this.checkHeaderEvent();
                }, 600);
            }, 1000);
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
    PedidosCanceladosComponent.prototype.buscar_id_operacion = function () {
        var _this = this;
        console.log('buscar_id_operacion');
        console.log(localStorage.getItem('id_operacion'));
        var id_operacion = localStorage.getItem('id_operacion');
        if (id_operacion != "") {
            var prod = this.datos;
            console.log(prod);
            for (var i = 0; i < prod.length; i++) {
                if (id_operacion == prod[i].id) {
                    console.log(prod[i]);
                    var selec = prod[i];
                    setTimeout(function () {
                        console.log(selec);
                        _this.ver(selec);
                    }, 1000);
                }
            }
        }
    };
    PedidosCanceladosComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('mouvers_pedido_id', '');
    };
    PedidosCanceladosComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterConfig */]({
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
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    //Abrir modal por defecto
    PedidosCanceladosComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    PedidosCanceladosComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    PedidosCanceladosComponent.prototype.atras = function () {
        this.viendo = false;
        this.selectedObj = null;
        this.objAEliminar = null;
        localStorage.setItem('id_operacion', "");
    };
    PedidosCanceladosComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    PedidosCanceladosComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'productos/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    PedidosCanceladosComponent.prototype.ver = function (obj) {
        this.viendo = true;
        this.selectedObj = Object.assign({}, obj);
        console.log(this.selectedObj);
        if (this.selectedObj.lat && this.selectedObj.lng) {
            this.selectedObj.lat = parseFloat(this.selectedObj.lat);
            this.selectedObj.lng = parseFloat(this.selectedObj.lng);
        }
    };
    PedidosCanceladosComponent.prototype.headerEvent = function () {
        this.ngOnInit();
    };
    PedidosCanceladosComponent.prototype.checkHeaderEvent = function () {
        if (localStorage.getItem('mouvers_pedido_id') &&
            localStorage.getItem('mouvers_pedido_id') != '' &&
            localStorage.getItem('mouvers_pedido_id') != 'null') {
            var existe = false;
            var pedido_id = parseInt(localStorage.getItem('mouvers_pedido_id'));
            for (var i = 0; i < this.productList.length; i++) {
                if (this.productList[i].id == pedido_id) {
                    this.ver(this.productList[i]);
                    localStorage.setItem('mouvers_pedido_id', '');
                    this.headerService.clearNotificationCliAux(this.productList[i].id);
                    existe = true;
                }
            }
            if (!existe) {
                this.showToast('warning', 'Warning!', 'El pedido solicitado ya no está en esta sección.');
            }
        }
    };
    PedidosCanceladosComponent.prototype.init = function () {
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
        this.buscar_id_operacion();
    };
    PedidosCanceladosComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (!this.productList[i].repartidor) {
                    this.productList[i].repartidor_nom = ' ';
                }
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].hora.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].repartidor_nom.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].ref.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    PedidosCanceladosComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    PedidosCanceladosComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    PedidosCanceladosComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    PedidosCanceladosComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    PedidosCanceladosComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    PedidosCanceladosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-finalizados-prod',
            template: __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-cancelados/pedidos-cancelados.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pedidos/pedidos-cancelados/pedidos-cancelados.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__["a" /* HeaderToPedidosEventService */],
            __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__["a" /* HeaderService */]])
    ], PedidosCanceladosComponent);
    return PedidosCanceladosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-curso/pedidos-curso.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nb-card  [hidden]=\"viendo || !mostrar\">\n  <nb-card-header>\n    <div class=\"row show-grid\">\n          <div class=\"col-6\" >\n            Pedidos en curso &nbsp;\n              <button style=\"display: inline-block;\"  type=\"button\" class=\"btn btn-primary btn-icon btn-tn\" title=\"Refresh\" (click)=\"refreshTabla()\"> <i class=\"fa fa-refresh icon-refresh\"></i>\n              </button>\n            \n          </div>\n          <div class=\"col-6\">\n            <div>\n              <div style=\"text-align: right;\">\n               <strong>Buscar: </strong>\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <table class=\"table\">\n      <thead>\n         <!-- <th></th> -->\n         <th style=\"text-align: center;\">Pedido</th>\n         <th style=\"text-align: center;\">Servicio</th>\n         <th style=\"text-align: center;\">Usuario</th>\n         <th style=\"text-align: center;\">Fecha</th>\n         <th style=\"text-align: center;\">Hora</th>\n         <th style=\"text-align: center;\">Hora Aceptación</th>\n         <th style=\"text-align: center;\">Estado</th>\n         <th style=\"text-align: center;\">Proveedor</th>\n         <th style=\"text-align: center;\">Acciones</th>\n      </thead>  \n      <tbody>\n         <tr *ngFor=\"let item of items\" >\n            <!-- <td></td> -->\n            <td style=\"text-align: center; vertical-align:middle;\">S00{{item.id}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.productos[0].nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'dd/MM/yyyy'}} -->{{item.fecha}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'hh:mm:ss'}} -->{{item.hora}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\"><!-- {{item.created_at | date:'hh:mm:ss'}} -->{{item.hora_aceptado}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.estado2}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\"> {{item.repartidor_nom}} </td>\n            <td style=\"text-align: center; vertical-align:middle;\">\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Ver\" (click)=\"ver(item)\">\n                <i class=\"fa fa-eye\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Asignar repartidor\" (click)=\"getRepDisponibles(item, modal1)\">\n                <i class=\"ion-android-bicycle\"></i>\n              </button>\n            </td>\n         </tr>\n      </tbody>\n    </table>\n      \n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n      <div class=\"btn-group\">\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n      </div>\n      <div class=\"btn-group pull-right\">\n         <ul class=\"pagination\" >\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n               </li>\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n         </ul>\n      </div>\n    </div>  \n  </nb-card-footer>\n</nb-card>\n\n<div class=\"viendo\" [hidden]=\"!viendo\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <nb-card>\n        <nb-card-header *ngIf=\"viendo\">\n          Detalles del Pedido S00{{selectedObj.id}}\n          <div class=\"pull-right\" style=\"margin-right: 10px\">\n            <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\n            Estado: {{selectedObj.estado}} &nbsp;\n            <button type=\"button\" class=\"btn btn-info btn-icon btn-sm btn-table\" title=\"Asignar repartidor\" (click)=\"getRepDisponibles(selectedObj, modal1)\">\n                <i class=\"ion-android-bicycle\"></i>\n              </button>\n                <a href=\"https://wa.me/{{codigo_pais_selec}}{{selectedObj.telefono}}?text=Hola%20*{{selectedObj.repartidor.usuario.nombre}}*,%20tenemos%20un%20pedido%20para%20ustedes%20*S2400{{selectedObj.id}}*%20de%20*{{selectedObj.productos[0].nombre}}*%20del%20usuario%20*{{selectedObj.usuario.nombre}}*%20¡Service24!\" class=\"whatsapp\" target=\"_blank\"> <i class=\"fa fa-whatsapp\" style=\" color:#00bb2d; border-radius:50px; text-align:center; font-size:30px;\"></i>Avisa al proveedor</a>\n             <select [(ngModel)]=\"codigo_pais_selec\">\n              <option *ngFor=\"let c of codigo_pais\" [ngValue]=\"c.code\">{{c.code}}</option>\n             </select>\n              <input [(ngModel)]=\"selectedObj.telefono\">\n          </div>\n        </nb-card-header>\n        <nb-card-body>\n\n          \n\n          <h5 *ngIf=\"viendo && selectedObj.repartidor_nom\"class=\"grid-h\">Repartidor</h5>\n          <div *ngIf=\"viendo && selectedObj.repartidor_nom\"class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.repartidor_nom}}</div>\n            </div>\n\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-8\">\n              <div>{{selectedObj.repartidor.usuario.telefono}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Fecha/Hora</h5>\n          <div *ngIf=\"viendo\" class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Fecha</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.fecha}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Hora</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.hora}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Usuario</h5>\n          <div *ngIf=\"viendo\" class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.nombre}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Email</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.email}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.telefono}}</div>\n            </div>\n\n            <!--div class=\"col-md-4\">\n              <div>Ciudad</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.ciudad}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Estado</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.estado}}</div>\n            </div-->\n\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\n              <div>Destinatario</div>\n            </div>\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\n              <div>{{selectedObj.destinatario}}</div>\n            </div>\n\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\n              <div>{{selectedObj.telefono}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Referencias</h5>\n          <div *ngIf=\"viendo\" class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Dirección</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.direccion}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Referencia</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.referencia}}</div>\n            </div>\n\n            <!--div class=\"col-md-12\">\n              <div *ngIf=\"selectedObj.lat && selectedObj.lng\">\n               \n                <agm-map style=\"height: 300px;\" [zoom]=\"13\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\">\n                      <agm-marker style=\"height: 300px;\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\"></agm-marker>\n                  </agm-map>\n              </div>\n            </div-->\n\n\n          </div>\n\n          <div class=\"row\">  \n            <div class=\"col-md-12\">\n                <div style=\"height: 300px;\" #map id=\"map\" (click)=\"clickMap()\"></div>\n            </div>    \n          </div>\n          <br><br><br>\n          <h5 class=\"grid-h\">Chat del pedido</h5>\n          <div class=\"row\" style=\"border: 1px solid;\">\n            <div class=\"col-12\">\n              <div class=\"wrapper\" >\n                <div class=\"containerChat\">\n                    <div class=\"right\">\n                      <div class=\"top\">\n                        <span class=\"name\">{{usuario_nombre}}</span>\n                        <i class=\"fa fa-refresh icon-refresh\" (click)=\"refreshChat()\"></i>\n                      </div>\n                      <div class=\"chatbox\">\n                        <div #scrollChat class=\"chatlogs message-wrap\">\n                          <div *ngFor=\"let msg of msgList\"\n                             class=\"message\" \n                               [class.leftmsg]=\" msg.emisor_id == userid \"\n                               [class.rightmsg]=\" msg.emisor_id != userid \">\n                            <img class=\"user-img\" [src]=\"msg.emisor.imagen\" alt=\"\" >\n                            <div class=\"msg-detail\">\n                              <div class=\"msg-info\">\n                                <p>{{msg.created_at}}</p>\n                              </div>\n                              <div class=\"msg-content\">\n                                <span class=\"triangle\"></span>\n                                <p class=\"line-breaker \">{{msg.msg}}</p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>        \n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n\n          \n          <!--div class=\"table-responsive\">\n            <h5 class=\"grid-h\">Productos Solicitados</h5>\n            <table class=\"table table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>\n                   Producto\n                  </th>\n                  <th>\n                   Establecimiento\n                  </th>\n                  <th>\n                   Solicitados\n                  </th>\n                  <th>\n                   Precio Unit. <small>($)</small>\n                  </th>\n                  <th>\n                   Sub-total <small>($)</small>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of selectedObj.productos\">\n                  <td class=\"text-center\">\n                    {{item.nombre}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.establecimiento.nombre}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.cantidad}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.precio_unitario}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.precio_unitario * item.pivot.cantidad}}\n                  </td>\n                </tr>\n                \n                <tr>\n                  <td colspan=\"5\"></td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Envío</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.costo_envio | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Sub-total</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.subtotal | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Total</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.costo | number: '1.2-2'}}</td>\n                </tr> \n              </tbody>\n            </table>\n          </div-->\n        </nb-card-body>\n        <nb-card-footer>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\n              <button  class=\"btn btn-tn btn-primary\" (click)=\"finalizar(selectedObj.id,selectedObj.repartidor_id)\" [disabled]=\"mouvers_user_tipo =='6'\">Finalizar pedido</button>\n            </div>\n            <div class=\"col-6\">\n              <button  class=\"btn btn-tn btn-danger\" (click)=\"cancelar()\" [disabled]=\"mouvers_user_tipo =='6'\"> Cancelar pedido</button>\n              <input  type=\"text\"  [(ngModel)]=\"comentarios\" style=\"width: 100%\" />\n            </div>\n          </div>\n        </nb-card-footer>\n      </nb-card>\n    </div>\n</div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Repartidores disponibles: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click'); atras()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"row show-grid\">\n              <div class=\"col-6\">\n                <div>Lista de Socios</div>\n              </div>\n              <div class=\"col-6\">\n                <div>\n                  <div style=\"text-align: right;\">\n                   <strong>Buscar: </strong>\n                   <input  type=\"text\"  id=\"inputName2\" [(ngModel)]=\"inputName2\" (ngModelChange)=\"FilterByName2()\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </nb-card-header>\n\n      <nb-card-body>\n\n        <table class=\"table table-striped\">\n          <thead>\n             <!-- <th style=\"text-align: center;\">ID</th> -->\n             <th style=\"text-align: center;\">Nombre</th>\n             <th style=\"text-align: center;\">Email</th>\n             <th style=\"text-align: center;\">Teléfono</th>\n             <th style=\"text-align: center;\">Acción</th>\n          </thead>\n          <tbody>\n             <tr *ngFor=\"let item of items2\" >\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.email}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.telefono}}</td>\n                <td style=\"text-align: center; vertical-align:middle;\">\n                  <label class=\"custom-control custom-radio\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" (change)=\"setRepartidor(item)\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Asignar</span>\n                  </label>\n                </td>\n             </tr>\n          </tbody>\n        </table>\n          \n      </nb-card-body>\n      <nb-card-footer>\n        <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n          <div class=\"btn-group\">\n             <label style=\"margin-top:10px\">Página {{currentIndex2}}/{{pageNumber2}} </label>\n          </div>\n          <div class=\"btn-group pull-right\">\n             <ul class=\"pagination\" >\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == 1 || pageNumber2 == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage2()\" >Atrás</a></li>\n                   <li class=\"page-item\" *ngFor=\"let page of pagesIndex2\"  [ngClass]=\"{'active': (currentIndex2 == page)}\">\n                      <a class=\"page-link\" (click)=\"setPage2(page)\"  >{{page}} </a>\n                   </li>\n                <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex2 == pageNumber2 || pageNumber2 == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage2()\" >Siguiente</a></li>\n             </ul>\n          </div>\n        </div>  \n      </nb-card-footer>\n    </nb-card>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); atras()\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); asignar()\" [disabled]=\"!repartidor_id\">Aceptar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-curso/pedidos-curso.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-default) .title-text {\n  text-align: center;\n  padding: 40% 0px 30px 0px; }\n\n:host-context(.nb-theme-default) ion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 0px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: -1;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) #map {\n  height: 300px;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n  position: relative; }\n  :host-context(.nb-theme-default) #map.show-map {\n    opacity: 1; }\n\n:host-context(.nb-theme-default) .content-price {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  font-size: 13px; }\n\n:host-context(.nb-theme-default) .icon-map {\n  font-size: 22px;\n  color: #D2D2D2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .pac-container {\n  z-index: 10000;\n  pointer-events: auto;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .alert-text {\n  background-color: #C62828;\n  padding: 20px;\n  text-align: justify;\n  color: #fff; }\n\n:host-context(.nb-theme-default) .item-md.item-block .item-inner {\n  padding-right: 0px; }\n\n:host-context(.nb-theme-default) textarea.text-input {\n  border: 1px solid #d2d2d2;\n  border-radius: 4px;\n  padding: 15px;\n  margin: 13px 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) .div-button {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 45%;\n  margin: 10px auto 20px;\n  padding: 11px;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  max-width: 370px; }\n\n:host-context(.nb-theme-default) .btn-login {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff; }\n\n:host-context(.nb-theme-default) .div-button1 {\n  padding: 11px;\n  width: 99%;\n  text-align: center;\n  margin-left: 1%;\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 15px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  color: #fff; }\n\n:host-context(.nb-theme-default) .btn-login1 {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 90%;\n  margin: 20px auto; }\n\n:host-context(.nb-theme-default) .textarea-info .item-inner {\n  border-bottom: none !important; }\n\n:host-context(.nb-theme-default) .info-hour {\n  margin: 0px;\n  padding: 15px;\n  background-color: #fff852;\n  font-size: 11px;\n  text-align: center; }\n\n:host-context(.nb-theme-default) .title-service {\n  background-color: #fff;\n  margin: 0px;\n  padding: 16px;\n  text-align: center;\n  font-weight: bold; }\n\n:host-context(.nb-theme-default) ion-datetime {\n  border: 1px solid #d6d6d6;\n  border-radius: 4px;\n  min-width: 100px;\n  text-align: center;\n  padding: 8px !important;\n  width: 90%;\n  margin: 15px auto; }\n\n:host-context(.nb-theme-default) .icon-time {\n  font-size: 25px;\n  margin-left: 11px;\n  color: #666666; }\n\n:host-context(.nb-theme-default) .text-left {\n  margin-left: 30% !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 15px; }\n\n:host-context(.nb-theme-default) .input-price {\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  :host-context(.nb-theme-default) .input-price .text-input-md {\n    margin: 8px;\n    text-align: center; }\n\n:host-context(.nb-theme-default) .text-right {\n  margin-right: 40% !important;\n  margin-left: 8px !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .item-price {\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .item-price .item-inner {\n    border: none !important;\n    border-bottom: none !important; }\n\n:host-context(.nb-theme-default) .select-md {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 0px 10px 20px; }\n\n:host-context(.nb-theme-default) .input-wrapper {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .input-sym {\n  max-width: 8px;\n  top: 0px;\n  position: absolute; }\n  :host-context(.nb-theme-default) .input-sym .text-input-md {\n    width: 10px;\n    margin: 0px;\n    text-align: center;\n    height: 50px; }\n\n:host-context(.nb-theme-default) .colorGrey {\n  background-color: #ccc !important; }\n\n:host-context(.nb-theme-default) .chatbox {\n  width: 100%;\n  min-width: 390px;\n  height: calc(100% - 24px);\n  background: #fff;\n  padding: 25px;\n  margin: 0px auto; }\n\n:host-context(.nb-theme-default) .chatlogs {\n  padding: 10px;\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n:host-context(.nb-theme-default) .chatlogs::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-default) .chatlogs::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-default) .chat-form textarea {\n  background: #fff;\n  width: 90%;\n  heigth: 50px;\n  border: 2px solid #eee;\n  border-radius: 3px;\n  resize: none;\n  padding: 10px;\n  color: #333;\n  margin-top: 15px;\n  float: left;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n:host-context(.nb-theme-default) .chat-form textarea::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-default) .chat-form textarea::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-default) .wrapper {\n  height: calc(100vh - 12.75rem) !important;\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-default) .containerChat {\n  width: 100%;\n  height: 100%;\n  background-color: #fff; }\n  :host-context(.nb-theme-default) .containerChat .left {\n    float: left;\n    width: 37.6%;\n    height: 100%;\n    border: 1px solid #e6e6e6;\n    background-color: #fff; }\n    :host-context(.nb-theme-default) .containerChat .left .top {\n      position: relative;\n      width: 100%;\n      height: 96px;\n      padding: 29px; }\n      :host-context(.nb-theme-default) .containerChat .left .top:after {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        display: block;\n        width: 80%;\n        height: 1px;\n        content: '';\n        background-color: #e6e6e6;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n    :host-context(.nb-theme-default) .containerChat .left input {\n      float: left;\n      width: 100%;\n      height: 42px;\n      padding: 0 15px;\n      border: 1px solid #e6e6e6;\n      background-color: #eceff1;\n      border-radius: 21px; }\n      :host-context(.nb-theme-default) .containerChat .left input:focus {\n        outline: none; }\n    :host-context(.nb-theme-default) .containerChat .left .search {\n      display: inline-block;\n      font-size: 20px;\n      position: relative;\n      top: 3px;\n      text-align: right;\n      color: #0b417a;\n      font-family: FontAwesome;\n      cursor: pointer;\n      margin-right: 5px; }\n    :host-context(.nb-theme-default) .containerChat .left .people {\n      margin-left: -1px;\n      border-right: 1px solid #e6e6e6;\n      border-left: 1px solid #e6e6e6;\n      width: calc(100% + 2px);\n      height: calc(100% - 70px);\n      overflow-y: scroll;\n      overflow-x: hidden; }\n      :host-context(.nb-theme-default) .containerChat .left .people .person {\n        position: relative;\n        width: 100%;\n        padding: 12px 10% 16px;\n        cursor: pointer;\n        background-color: #fff;\n        list-style-type: none; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person:after {\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          display: block;\n          width: 80%;\n          height: 1px;\n          content: '';\n          background-color: #e6e6e6;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0); }\n        :host-context(.nb-theme-default) .containerChat .left .people .person img {\n          float: left;\n          width: 40px;\n          height: 40px;\n          margin-right: 12px;\n          border-radius: 50%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          background-color: #ddd; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .name {\n          font-size: 14px;\n          line-height: 22px;\n          color: #1a1a1a; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .time {\n          font-size: 14px;\n          position: absolute;\n          top: 16px;\n          right: 10%;\n          padding: 0 0 5px 5px;\n          color: #999;\n          background-color: #fff; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .preview {\n          font-size: 14px;\n          display: block;\n          overflow: hidden !important;\n          width: 70%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #999; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person.active, :host-context(.nb-theme-default) .containerChat .left .people .person:hover {\n          margin-top: -1px;\n          margin-left: -1px;\n          padding-top: 13px;\n          border: 0;\n          background-color: #0b417a;\n          width: calc(100% + 2px);\n          padding-left: calc(10% + 1px); }\n          :host-context(.nb-theme-default) .containerChat .left .people .person.active span, :host-context(.nb-theme-default) .containerChat .left .people .person:hover span {\n            color: #fff;\n            background: transparent; }\n          :host-context(.nb-theme-default) .containerChat .left .people .person.active:after, :host-context(.nb-theme-default) .containerChat .left .people .person:hover:after {\n            display: none; }\n  :host-context(.nb-theme-default) .containerChat .right {\n    position: relative;\n    float: left;\n    width: 100%;\n    height: 100%; }\n    :host-context(.nb-theme-default) .containerChat .right .top {\n      width: 100%;\n      height: 47px;\n      padding: 15px 29px;\n      background-color: #fafafa;\n      border-top: 1px solid #eceef2; }\n      :host-context(.nb-theme-default) .containerChat .right .top span {\n        font-size: 15px;\n        color: #999; }\n        :host-context(.nb-theme-default) .containerChat .right .top span .name {\n          color: #1a1a1a; }\n\n:host-context(.nb-theme-default) .content-initChat {\n  box-shadow: 0 2px 12px 0 #e4e8ef;\n  padding: 20px 5px;\n  text-align: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #0b417a;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .message-wrap {\n  padding: 0 10px; }\n\n:host-context(.nb-theme-default) .message-wrap .message {\n  position: relative;\n  padding: 7px 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail p {\n  margin: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  color: #333;\n  width: auto;\n  max-width: 80%; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-content {\n  background-color: #fff !important;\n  float: left; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail {\n  padding-left: 60px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .user-img {\n  left: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail .msg-content {\n  color: #343434; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail {\n  padding-right: 60px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-info {\n  text-align: right; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .user-img {\n  right: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-content {\n  background-color: #e0e0e0;\n  float: right; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-content span.triangle {\n  background-color: #e0e0e0;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .title-text {\n  text-align: center;\n  padding: 40% 0px 30px 0px; }\n\n:host-context(.nb-theme-cosmic) ion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 0px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: -1;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) #map {\n  height: 300px;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n  position: relative; }\n  :host-context(.nb-theme-cosmic) #map.show-map {\n    opacity: 1; }\n\n:host-context(.nb-theme-cosmic) .content-price {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  font-size: 13px; }\n\n:host-context(.nb-theme-cosmic) .icon-map {\n  font-size: 22px;\n  color: #D2D2D2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .pac-container {\n  z-index: 10000;\n  pointer-events: auto;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .alert-text {\n  background-color: #C62828;\n  padding: 20px;\n  text-align: justify;\n  color: #fff; }\n\n:host-context(.nb-theme-cosmic) .item-md.item-block .item-inner {\n  padding-right: 0px; }\n\n:host-context(.nb-theme-cosmic) textarea.text-input {\n  border: 1px solid #d2d2d2;\n  border-radius: 4px;\n  padding: 15px;\n  margin: 13px 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .div-button {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 45%;\n  margin: 10px auto 20px;\n  padding: 11px;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  max-width: 370px; }\n\n:host-context(.nb-theme-cosmic) .btn-login {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff; }\n\n:host-context(.nb-theme-cosmic) .div-button1 {\n  padding: 11px;\n  width: 99%;\n  text-align: center;\n  margin-left: 1%;\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 15px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  color: #fff; }\n\n:host-context(.nb-theme-cosmic) .btn-login1 {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 90%;\n  margin: 20px auto; }\n\n:host-context(.nb-theme-cosmic) .textarea-info .item-inner {\n  border-bottom: none !important; }\n\n:host-context(.nb-theme-cosmic) .info-hour {\n  margin: 0px;\n  padding: 15px;\n  background-color: #fff852;\n  font-size: 11px;\n  text-align: center; }\n\n:host-context(.nb-theme-cosmic) .title-service {\n  background-color: #fff;\n  margin: 0px;\n  padding: 16px;\n  text-align: center;\n  font-weight: bold; }\n\n:host-context(.nb-theme-cosmic) ion-datetime {\n  border: 1px solid #d6d6d6;\n  border-radius: 4px;\n  min-width: 100px;\n  text-align: center;\n  padding: 8px !important;\n  width: 90%;\n  margin: 15px auto; }\n\n:host-context(.nb-theme-cosmic) .icon-time {\n  font-size: 25px;\n  margin-left: 11px;\n  color: #666666; }\n\n:host-context(.nb-theme-cosmic) .text-left {\n  margin-left: 30% !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 15px; }\n\n:host-context(.nb-theme-cosmic) .input-price {\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  :host-context(.nb-theme-cosmic) .input-price .text-input-md {\n    margin: 8px;\n    text-align: center; }\n\n:host-context(.nb-theme-cosmic) .text-right {\n  margin-right: 40% !important;\n  margin-left: 8px !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .item-price {\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .item-price .item-inner {\n    border: none !important;\n    border-bottom: none !important; }\n\n:host-context(.nb-theme-cosmic) .select-md {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 0px 10px 20px; }\n\n:host-context(.nb-theme-cosmic) .input-wrapper {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .input-sym {\n  max-width: 8px;\n  top: 0px;\n  position: absolute; }\n  :host-context(.nb-theme-cosmic) .input-sym .text-input-md {\n    width: 10px;\n    margin: 0px;\n    text-align: center;\n    height: 50px; }\n\n:host-context(.nb-theme-cosmic) .colorGrey {\n  background-color: #ccc !important; }\n\n:host-context(.nb-theme-cosmic) .chatbox {\n  width: 100%;\n  min-width: 390px;\n  height: calc(100% - 24px);\n  background: #fff;\n  padding: 25px;\n  margin: 0px auto; }\n\n:host-context(.nb-theme-cosmic) .chatlogs {\n  padding: 10px;\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n:host-context(.nb-theme-cosmic) .chatlogs::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-cosmic) .chatlogs::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea {\n  background: #fff;\n  width: 90%;\n  heigth: 50px;\n  border: 2px solid #eee;\n  border-radius: 3px;\n  resize: none;\n  padding: 10px;\n  color: #333;\n  margin-top: 15px;\n  float: left;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-cosmic) .wrapper {\n  height: calc(100vh - 12.75rem) !important;\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) .containerChat {\n  width: 100%;\n  height: 100%;\n  background-color: #fff; }\n  :host-context(.nb-theme-cosmic) .containerChat .left {\n    float: left;\n    width: 37.6%;\n    height: 100%;\n    border: 1px solid #e6e6e6;\n    background-color: #fff; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .top {\n      position: relative;\n      width: 100%;\n      height: 96px;\n      padding: 29px; }\n      :host-context(.nb-theme-cosmic) .containerChat .left .top:after {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        display: block;\n        width: 80%;\n        height: 1px;\n        content: '';\n        background-color: #e6e6e6;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n    :host-context(.nb-theme-cosmic) .containerChat .left input {\n      float: left;\n      width: 100%;\n      height: 42px;\n      padding: 0 15px;\n      border: 1px solid #e6e6e6;\n      background-color: #eceff1;\n      border-radius: 21px; }\n      :host-context(.nb-theme-cosmic) .containerChat .left input:focus {\n        outline: none; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .search {\n      display: inline-block;\n      font-size: 20px;\n      position: relative;\n      top: 3px;\n      text-align: right;\n      color: #0b417a;\n      font-family: FontAwesome;\n      cursor: pointer;\n      margin-right: 5px; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .people {\n      margin-left: -1px;\n      border-right: 1px solid #e6e6e6;\n      border-left: 1px solid #e6e6e6;\n      width: calc(100% + 2px);\n      height: calc(100% - 70px);\n      overflow-y: scroll;\n      overflow-x: hidden; }\n      :host-context(.nb-theme-cosmic) .containerChat .left .people .person {\n        position: relative;\n        width: 100%;\n        padding: 12px 10% 16px;\n        cursor: pointer;\n        background-color: #fff;\n        list-style-type: none; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person:after {\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          display: block;\n          width: 80%;\n          height: 1px;\n          content: '';\n          background-color: #e6e6e6;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0); }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person img {\n          float: left;\n          width: 40px;\n          height: 40px;\n          margin-right: 12px;\n          border-radius: 50%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          background-color: #ddd; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .name {\n          font-size: 14px;\n          line-height: 22px;\n          color: #1a1a1a; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .time {\n          font-size: 14px;\n          position: absolute;\n          top: 16px;\n          right: 10%;\n          padding: 0 0 5px 5px;\n          color: #999;\n          background-color: #fff; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .preview {\n          font-size: 14px;\n          display: block;\n          overflow: hidden !important;\n          width: 70%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #999; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover {\n          margin-top: -1px;\n          margin-left: -1px;\n          padding-top: 13px;\n          border: 0;\n          background-color: #0b417a;\n          width: calc(100% + 2px);\n          padding-left: calc(10% + 1px); }\n          :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active span, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover span {\n            color: #fff;\n            background: transparent; }\n          :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active:after, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover:after {\n            display: none; }\n  :host-context(.nb-theme-cosmic) .containerChat .right {\n    position: relative;\n    float: left;\n    width: 100%;\n    height: 100%; }\n    :host-context(.nb-theme-cosmic) .containerChat .right .top {\n      width: 100%;\n      height: 47px;\n      padding: 15px 29px;\n      background-color: #fafafa;\n      border-top: 1px solid #eceef2; }\n      :host-context(.nb-theme-cosmic) .containerChat .right .top span {\n        font-size: 15px;\n        color: #999; }\n        :host-context(.nb-theme-cosmic) .containerChat .right .top span .name {\n          color: #1a1a1a; }\n\n:host-context(.nb-theme-cosmic) .content-initChat {\n  box-shadow: 0 2px 12px 0 #e4e8ef;\n  padding: 20px 5px;\n  text-align: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #0b417a;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .message-wrap {\n  padding: 0 10px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message {\n  position: relative;\n  padding: 7px 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail p {\n  margin: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  color: #333;\n  width: auto;\n  max-width: 80%; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-content {\n  background-color: #fff !important;\n  float: left; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail {\n  padding-left: 60px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .user-img {\n  left: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail .msg-content {\n  color: #343434; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail {\n  padding-right: 60px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-info {\n  text-align: right; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .user-img {\n  right: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-content {\n  background-color: #e0e0e0;\n  float: right; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-content span.triangle {\n  background-color: #e0e0e0;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-curso/pedidos-curso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosCursoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/header-to-pedidos-event-service/header-to-pedidos-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__ = __webpack_require__("../../../../../src/app/services/header-service/header.service.ts");
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
var PedidosCursoComponent = /** @class */ (function () {
    function PedidosCursoComponent(modalService, toasterService, http, router, rutaService, headerToPedidosEventService, headerService, ngZone, zone) {
        var _this = this;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.headerToPedidosEventService = headerToPedidosEventService;
        this.headerService = headerService;
        this.ngZone = ngZone;
        this.zone = zone;
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
        this.viendo = false;
        this.mostrar = true;
        this.repartidor_id = null;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.myPosition = {
            lat: 20.650549,
            lng: -87.068608
        };
        this.refresh = false;
        //loading: Loading;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.geocoder = null;
        this.infowindow = null;
        this.bounds = null;
        this.bounds1 = null;
        this.waypoints = [];
        this.locations = {
            lat: 0,
            lng: 0,
            posicion: '',
            establecimiento_id: '',
            direccion: ''
        };
        this.markers = [];
        this.inside = false;
        this.areaTriangle = [];
        this.coordenates = [];
        this.triangleCoords = [];
        this.reference = '';
        this.ruta = [];
        this.destino = {
            lat: '',
            lng: ''
        };
        this.direccion = null;
        this.variables = {
            costoxkm: 0,
            gastos_envio: 0,
            subtotal: 0,
            costo: 0,
            distancia: 0,
            tiempo: 0,
            costo_envio: 0
        };
        this.productos = [];
        this.product = {
            id: '92',
            precio: '0',
            codigo: 'xxxxx',
            cantidad: 1,
            subtotal: 0,
            observacion: '',
            producto_id: '92',
            precio_unitario: null,
        };
        this.pointB = {
            lat: '',
            lng: ''
        };
        this.msgList = [];
        this.id_operacion = "";
        this.comentarios = "Finalizado por Administrador";
        this.msgList2 = [];
        this.userid = 0;
        this.codigo_pais = [
            {
                id: 1,
                code: 598
            },
            {
                id: 2,
                code: 507
            },
            {
                id: 3,
                code: 58
            },
            {
                id: 4,
                code: 54
            },
        ];
        this.codigo_pais_selec = "";
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
        //Detectar evento cargar pedido de notificacion entrante
        this.headerToPedidosEventService.headerToPedidosData.subscribe(function (data) {
            console.log(data);
            _this.id_operacion = data;
            _this.id_operacion = _this.id_operacion.id_operacion;
            console.log(_this.id_operacion);
            localStorage.setItem('id_operacion', _this.id_operacion);
            setTimeout(function () {
                localStorage.setItem('id_operacion', "");
            }, 49600);
        });
    }
    PedidosCursoComponent.prototype.ngOnInit = function () {
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
        this.viendo = null;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos/estado/curso?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //Cambiar el formato de la fecha y hora
            var dia;
            var mes;
            var anio;
            var fecha;
            var hora;
            var minutos;
            var segundos;
            _this.productList = [];
            for (var i = 0; i < _this.data.pedidos.length; i++) {
                fecha = new Date(_this.data.pedidos[i].created_at);
                dia = fecha.getDate();
                mes = fecha.getMonth() + 1;
                anio = fecha.getFullYear();
                hora = fecha.getHours();
                minutos = fecha.getMinutes();
                segundos = fecha.getSeconds();
                _this.data.pedidos[i].fecha = dia + '/' + mes + '/' + anio;
                _this.data.pedidos[i].hora = hora + ':' + minutos + ':' + segundos;
                _this.data.pedidos[i].ref = 'S00' + _this.data.pedidos[i].id;
                if (_this.data.pedidos[i].repartidor != null) {
                    _this.data.pedidos[i].telefono = _this.data.pedidos[i].repartidor.usuario.telefono;
                }
                //Control de estados del pedido
                if (_this.data.pedidos[i].estado == 1) {
                    _this.data.pedidos[i].estado2 = 'No asignado';
                }
                else if (_this.data.pedidos[i].estado == 2) {
                    _this.data.pedidos[i].estado2 = 'Asignado';
                }
                else if (_this.data.pedidos[i].estado == 3) {
                    _this.data.pedidos[i].estado2 = 'En camino';
                    //console.log(this.data.pedidos[i]);
                    _this.productList.push(_this.data.pedidos[i]);
                }
                else if (_this.data.pedidos[i].estado == 4) {
                    _this.data.pedidos[i].estado2 = 'Entregado';
                }
            }
            setTimeout(function () {
                //this.productList = this.data.pedidos;
                _this.filteredItems = _this.productList;
                _this.datos = _this.productList;
                console.log(_this.productList);
                _this.init();
                //verificar si hay que cargar un pedido de una notificacion
                setTimeout(function () {
                    _this.checkHeaderEvent();
                }, 600);
                _this.loading = false;
            }, 1000);
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
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: "#222220"
            }
        });
        this.geocoder = new google.maps.Geocoder;
        this.infowindow = new google.maps.InfoWindow;
        this.bounds = new google.maps.LatLngBounds();
        this.bounds1 = new google.maps.LatLngBounds();
        this.loadMap(this.myPosition);
    };
    PedidosCursoComponent.prototype.buscar_id_operacion = function () {
        var _this = this;
        console.log('buscar_id_operacion');
        console.log(localStorage.getItem('id_operacion'));
        var id_operacion = localStorage.getItem('id_operacion');
        if (id_operacion != "") {
            var prod = this.datos;
            console.log(prod);
            for (var i = 0; i < prod.length; i++) {
                if (id_operacion == prod[i].id) {
                    console.log(prod[i]);
                    var selec = prod[i];
                    setTimeout(function () {
                        console.log(selec);
                        _this.ver(selec);
                    }, 1000);
                }
            }
        }
    };
    PedidosCursoComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('mouvers_pedido_id', '');
    };
    PedidosCursoComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterConfig */]({
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
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    PedidosCursoComponent.prototype.refreshTabla = function () {
        this.productList = [];
        this.filteredItems = this.productList;
        this.init();
        localStorage.setItem('mouvers_pedido_id', '');
        this.ngOnInit();
    };
    //Abrir modal por defecto
    PedidosCursoComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    PedidosCursoComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    PedidosCursoComponent.prototype.atras = function () {
        this.viendo = false;
        this.selectedObj = null;
        this.objAEliminar = null;
        this.repartidor_id = null;
        localStorage.setItem('id_operacion', "");
    };
    PedidosCursoComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    PedidosCursoComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'productos/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    PedidosCursoComponent.prototype.cancelar = function () {
        var _this = this;
        console.log(this.selectedObj);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            finalizo: 1,
            comentario: this.comentarios,
        };
        this.http.post(this.rutaService.getRutaApi() + '/cancelar_pedidos/' + this.selectedObj.id + '?token=' + localStorage.getItem('mouvers_token'), datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.ngOnInit();
            _this.viendo = false;
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
    /*Cargar los repartidores disponibles*/
    PedidosCursoComponent.prototype.getRepDisponibles = function (obj, modal) {
        var _this = this;
        this.repartidor_id = null;
        this.selectedObj = Object.assign({}, obj);
        this.selectedObj.telefono1 = this.selectedObj.telefono.substr(1);
        console.log(this.selectedObj);
        var zona_id = this.selectedObj.zona_id;
        var subcategoria_id = this.selectedObj.productos[0].subcategoria_id;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'repartidores/disponibles?zona_id=' + zona_id + '&subcategoria_id=' + subcategoria_id + '&token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.productList2 = _this.data.repartidores;
            _this.filteredItems2 = _this.productList2;
            //console.log(this.productList);
            _this.init2();
            _this.loading = false;
            _this.open2(modal);
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
    PedidosCursoComponent.prototype.setRepartidor = function (repartidor) {
        this.repartidor_id = repartidor.id;
    };
    PedidosCursoComponent.prototype.asignar = function () {
        var _this = this;
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            pedido_id: this.selectedObj.id,
        };
        this.http.put(this.rutaService.getRutaApi() + 'notificaciones/' + this.repartidor_id + '/asignar/pedido', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.repartidor = _this.data.repartidor;
            //Actualiza la vista del detalle del pedido
            _this.selectedObj.repartidor = _this.repartidor;
            _this.selectedObj.repartidor_nom = _this.repartidor.usuario.nombre;
            if (_this.selectedObj.estado == 'No asignado') {
                _this.selectedObj.estado = 'Asignado';
            }
            _this.headerService.clearNotificationCliAux(_this.selectedObj.id);
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.selectedObj.id) {
                    if (_this.productList[i].estado == 'No asignado') {
                        _this.productList[i].estado = 'Asignado';
                    }
                    _this.productList[i].repartidor_id = _this.repartidor.id;
                    _this.productList[i].repartidor_nom = _this.repartidor.usuario.nombre;
                    _this.productList[i].repartidor = _this.repartidor;
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
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
    PedidosCursoComponent.prototype.ver = function (obj) {
        var _this = this;
        this.viendo = true;
        this.selectedObj = Object.assign({}, obj);
        this.selectedObj.telefono1 = this.selectedObj.telefono.substr(1);
        console.log(this.selectedObj);
        this.userid = this.selectedObj.usuario.id;
        this.idrep = this.selectedObj.repartidor.id;
        this.codigo_pais_selec = this.codigo_pais_selec_code(localStorage.getItem('mouvers_pais'));
        if (this.selectedObj.lat && this.selectedObj.lng) {
            this.selectedObj.lat = parseFloat(this.selectedObj.lat);
            this.selectedObj.lng = parseFloat(this.selectedObj.lng);
            var start = {
                lat: this.selectedObj.lat,
                lng: this.selectedObj.lng
            };
            var end = {
                lat: parseFloat(this.selectedObj.productos[0].establecimiento.lat),
                lng: parseFloat(this.selectedObj.productos[0].establecimiento.lng)
            };
            console.log(start);
            console.log(end);
            var intervalId = null;
            var varCounter = 0;
            setTimeout(function () {
                _this.calculateRoute(start, end);
                setTimeout(function () {
                    if (_this.selectedObj.encamino == 1) {
                        intervalId = setInterval(function () {
                            console.log(varCounter);
                            if (varCounter < 25) {
                                _this.rep_pos(start);
                            }
                            else {
                                console.log('else');
                                clearInterval(intervalId);
                            }
                            varCounter++;
                        }, 6000);
                    }
                }, 1000);
            }, 600);
            //this.createMarkerOrigin(this.selectedObj);
            //this.createMarkerDestiny(this.selectedObj.repartidor);
        }
        this.http.get(this.rutaService.getRutaApi() + 'chats/pedidos/' + this.selectedObj.id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.msgList2 = data;
            _this.msgList = _this.msgList2.chat.mensajes;
            console.log(_this.msgList);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.msgList = [];
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    // this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
        });
    };
    PedidosCursoComponent.prototype.codigo_pais_selec_code = function (id) {
        for (var i = 0; i < this.codigo_pais.length; ++i) {
            if (id == this.codigo_pais[i].id) {
                return this.codigo_pais[i].code;
            }
        }
    };
    PedidosCursoComponent.prototype.rep_pos = function (start) {
        var _this = this;
        this.idrep;
        this.http.get(this.rutaService.getRutaApi() + 'rep_pos/' + this.idrep + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.data1 = data;
            console.log(_this.data1);
            var end = {
                lat: parseFloat(_this.data1.repartidor.lat),
                lng: parseFloat(_this.data1.repartidor.lng)
            };
            _this.calculateRoute(start, end);
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
    PedidosCursoComponent.prototype.finalizar = function (pedido_id, repartidor_id) {
        var _this = this;
        console.log(pedido_id);
        console.log(repartidor_id);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            pedido_id: pedido_id,
        };
        this.http.put(this.rutaService.getRutaApi() + '/notificaciones/' + repartidor_id + '/finalizar/pedido?token=' + localStorage.getItem('mouvers_token'), datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.ngOnInit();
            _this.viendo = false;
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
    PedidosCursoComponent.prototype.refreshChat = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'chats/pedidos/' + this.selectedObj.id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.msgList2 = data;
            _this.msgList = _this.msgList2.chat.mensajes;
            console.log(_this.msgList);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.msgList = [];
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    // this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
        });
    };
    PedidosCursoComponent.prototype.headerEvent = function () {
        this.ngOnInit();
    };
    PedidosCursoComponent.prototype.checkHeaderEvent = function () {
        if (localStorage.getItem('mouvers_pedido_id') &&
            localStorage.getItem('mouvers_pedido_id') != '' &&
            localStorage.getItem('mouvers_pedido_id') != 'null') {
            var existe = false;
            var pedido_id = parseInt(localStorage.getItem('mouvers_pedido_id'));
            for (var i = 0; i < this.productList.length; i++) {
                if (this.productList[i].id == pedido_id) {
                    this.ver(this.productList[i]);
                    localStorage.setItem('mouvers_pedido_id', '');
                    if (this.productList[i].estado == 'Asignado' || this.productList[i].estado == 'En camino') {
                        this.headerService.clearNotificationCliAux(this.productList[i].id);
                    }
                    existe = true;
                }
            }
            if (!existe) {
                this.showToast('warning', 'Warning!', 'El pedido solicitado ya no está en esta sección.');
            }
        }
    };
    PedidosCursoComponent.prototype.init = function () {
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
        this.buscar_id_operacion();
    };
    PedidosCursoComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (!this.productList[i].repartidor_nom) {
                    this.productList[i].repartidor_nom = ' ';
                }
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].hora.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].repartidor_nom.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].ref.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    PedidosCursoComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    PedidosCursoComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    PedidosCursoComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    PedidosCursoComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    PedidosCursoComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    PedidosCursoComponent.prototype.init2 = function () {
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
    PedidosCursoComponent.prototype.FilterByName2 = function () {
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
    PedidosCursoComponent.prototype.fillArray2 = function () {
        var obj = new Array();
        for (var index = this.pageStart2; index < this.pageStart2 + this.pages2; index++) {
            obj.push(index);
        }
        return obj;
    };
    PedidosCursoComponent.prototype.refreshItems2 = function () {
        this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1) * this.pageSize2, (this.currentIndex2) * this.pageSize2);
        this.pagesIndex2 = this.fillArray2();
    };
    PedidosCursoComponent.prototype.prevPage2 = function () {
        if (this.currentIndex2 > 1) {
            this.currentIndex2--;
        }
        if (this.currentIndex2 < this.pageStart2) {
            this.pageStart2 = this.currentIndex2;
        }
        this.refreshItems2();
    };
    PedidosCursoComponent.prototype.nextPage2 = function () {
        if (this.currentIndex2 < this.pageNumber2) {
            this.currentIndex2++;
        }
        if (this.currentIndex2 >= (this.pageStart2 + this.pages2)) {
            this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
        }
        this.refreshItems2();
    };
    PedidosCursoComponent.prototype.setPage2 = function (index) {
        this.currentIndex2 = index;
        this.refreshItems2();
    };
    //Tabla2 repartidores disponibles---->
    PedidosCursoComponent.prototype.calcularTotales = function () {
        this.variables.costo_envio = 0;
        this.variables.subtotal = 0;
        this.variables.costo = 0;
        this.variables.subtotal = parseFloat(this.product.precio) * this.product.cantidad;
        this.variables.costo_envio = (this.variables.distancia * this.variables.costoxkm) + this.variables.gastos_envio;
        this.variables.costo = this.variables.subtotal + this.variables.costo_envio;
        console.log(this.variables);
    };
    PedidosCursoComponent.prototype.clickMap = function () {
        // if (this.orderForm.value.direccionA == '' && this.orderForm.value.direccion == '') {
        console.log('entro map');
        this.getCurrentPosition();
        //}  
    };
    PedidosCursoComponent.prototype.getCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                var positionG = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.validate(positionG, 'direccionB');
                _this.locations.lat = position.coords.latitude;
                _this.locations.lng = position.coords.longitude;
                _this.geocodeLatLng(_this.geocoder, _this.map, _this.markerOrigin, _this.infowindow, positionG, 1);
                console.log(positionG);
                // this.createMarkerOrigin(positionG);
            });
        }
        else {
            var positionG = new google.maps.LatLng(this.myPosition.lat, this.myPosition.lng);
            this.validate(positionG, 'direccionB');
            this.locations.lat = this.myPosition.lat;
            this.locations.lng = this.myPosition.lng;
            this.geocodeLatLng(this.geocoder, this.map, this.markerOrigin, this.infowindow, positionG, 1);
            console.log(positionG);
            // this.createMarkerOrigin(positionG);
        }
    };
    PedidosCursoComponent.prototype.validate = function (latlng, title) {
        var _this = this;
        var band = 0;
        this.zone.run(function () {
            for (var i = 0; i < _this.areaTriangle.length; ++i) {
                _this.inside = google.maps.geometry.poly.containsLocation(latlng, _this.areaTriangle[i]);
                if (!_this.inside) {
                    band += 1;
                }
            }
            if (_this.areaTriangle.length == band) {
                _this.toastD = true;
                //this.orderForm.controls[title].disable();
                _this.dentro = false;
                //this.showToast('warning', 'Warning!', 'Lo sentimos, por el momento Pa Llevar no puede llegar a esta ubicación. Por favor mueve el pin rojo a otra ubicación.');
            }
            else {
                _this.toastD = false;
                //this.orderForm.controls[title].enable();
                _this.dentro = true;
                //this.showToast('info', 'Info!', 'Dirección válida. Calculando Ruta...');
            }
        });
    };
    PedidosCursoComponent.prototype.createMarkerOrigin = function (latlng) {
        console.log(latlng);
        if (this.markerOrigin) {
            this.markerOrigin.setMap(null);
        }
        var icon = {
            url: 'assets/images/smiley_happy.png',
            scaledSize: new google.maps.Size(30, 30)
        };
        this.markerOrigin = new google.maps.Marker({
            position: latlng,
            map: this.map,
            draggable: true,
            icon: icon,
            title: 'Origen'
        });
        //this.createMarkerDestiny(latlng.productos.establecimiento);
        this.map.setCenter(latlng);
        var that = this;
        google.maps.event.addListener(this.markerOrigin, 'dragend', function () {
            console.log('entro dranged');
            var start = this.getPosition();
            that.locations.lat = start.lat();
            that.locations.lng = start.lng();
            that.geocodeLatLng(that.geocoder, that.map, that.markerOrigin, that.infowindow, start, 1);
            that.validate(start, 'direccionB');
            if (that.markerDestiny) {
                var positionB = new google.maps.LatLng(that.pointB.lat, that.pointB.lng);
                that.calculateRoute(start, positionB);
            }
        });
    };
    PedidosCursoComponent.prototype.updateSearchResults = function () {
        var options = {
            types: ['address'],
            componentRestrictions: { country: "mx" }
        };
        var inputElement = document.getElementById('places1') /*.getElementsByTagName('input')[0]*/;
        var autocomplete = new google.maps.places.Autocomplete(inputElement, options);
        var that = this;
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            if (place.geometry) {
                that.locations.lat = place.geometry.location.lat();
                that.locations.lng = place.geometry.location.lng();
                that.locations.direccion = place.formatted_address;
                that.orderForm.patchValue({ direccionA: place.formatted_address });
                var position = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                that.validate(position, 'direccionB');
                if (that.markerDestiny) {
                    var positionA = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                    var positionB = new google.maps.LatLng(that.pointB.lat, that.pointB.lng);
                    that.calculateRoute(positionA, positionB);
                }
                else {
                    console.log('entro');
                    //that.createMarkerOrigin(position);
                }
            }
        });
    };
    ;
    PedidosCursoComponent.prototype.updateSearchResults2 = function () {
        var _this = this;
        var options = {
            types: ['address'],
            componentRestrictions: { country: "mx" }
        };
        var inputElement = document.getElementById('places2') /*.getElementsByTagName('input')[0]*/;
        var autocomplete = new google.maps.places.Autocomplete(inputElement, options);
        var that = this;
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            if (place.geometry) {
                that.orderForm.patchValue({ direccionB: place.formatted_address });
                that.orderForm.patchValue({ direccion: place.formatted_address });
                that.pointB.lat = place.geometry.location.lat();
                that.pointB.lng = place.geometry.location.lng();
                //that.cartProvider.setDireccion(place.formatted_address, place.geometry.location.lat(), place.geometry.location.lng());
                _this.direccion = place.formatted_address;
                _this.destino.lat = place.geometry.location.lat();
                _this.destino.lng = place.geometry.location.lng();
                var positionA = new google.maps.LatLng(that.locations.lat, that.locations.lng);
                var positionB = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                that.validate(positionB, 'direccionA');
                that.calculateRoute(positionA, positionB);
            }
        });
    };
    ;
    PedidosCursoComponent.prototype.createMarkerDestiny = function (latlng) {
        if (this.markerDestiny) {
            this.markerDestiny.setMap(null);
        }
        var icon = {
            url: 'assets/images/pickup_camper.png',
            scaledSize: new google.maps.Size(30, 30)
        };
        this.markerDestiny = new google.maps.Marker({
            position: latlng,
            map: this.map,
            draggable: true,
            icon: icon,
            title: 'Destino'
        });
        this.map.setCenter(latlng);
        var that = this;
        google.maps.event.addListener(this.markerDestiny, 'dragend', function () {
            console.log('entro dragend 2');
            var start = this.getPosition();
            that.pointB.lat = start.lat();
            that.pointB.lng = start.lng();
            that.geocodeLatLng(that.geocoder, that.map, that.markerDestiny, that.infowindow, start, 2);
            var positionA = new google.maps.LatLng(that.locations.lat, that.locations.lng);
            that.validate(start, 'direccionA');
            that.calculateRoute(positionA, start);
        });
    };
    PedidosCursoComponent.prototype.geocodeLatLng = function (geocoder, map, marker, infowindow, end, position) {
        var that = this;
        geocoder.geocode({ 'location': end }, function (results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    if (position == 1) {
                        that.locations.direccion = results[1].formatted_address;
                        //that.orderForm.patchValue({direccionA: results[1].formatted_address});
                    }
                    else if (position == 2) {
                        //that.orderForm.patchValue({direccionB: results[1].formatted_address});
                        //that.orderForm.patchValue({direccion: results[1].formatted_address});
                        //that.cartProvider.setDireccion(results[1].formatted_address, end.lat(), end.lng());
                        that.direccion = results[1].formatted_address;
                        that.destino.lat = end.lat();
                        that.destino.lng = end.lng();
                    }
                }
                else {
                    //infowindow.setContent('No se ha podido ubicar la dirección');
                    //infowindow.open(map, marker);
                    //that.showToast('warning', 'Warning!', 'No se ha podido ubicar la dirección.');
                }
            }
            else {
                //infowindow.setContent('No se ha podido ubicar la dirección');
                //infowindow.open(map, marker);
                //that.showToast('warning', 'Warning!', 'No se ha podido ubicar la dirección.');
            }
        });
    };
    PedidosCursoComponent.prototype.calculateRoute = function (start, end) {
        var _this = this;
        this.bounds.extend(start);
        this.bounds.extend(end);
        this.map.fitBounds(this.bounds);
        this.createMarkerOrigin(start);
        this.createMarkerDestiny(end);
        this.directionsService.route({
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING,
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(response);
                _this.directionsDisplay.setDirections(response);
                var route = response.routes[0];
                //this.computeTotalDistance(response);
                //this.computeTotalTime(response);
            }
            else {
                console.log('Could not display directions due to: ' + status);
            }
        });
    };
    PedidosCursoComponent.prototype.computeTotalDistance = function (result) {
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
    PedidosCursoComponent.prototype.computeTotalTime = function (result) {
        var total = 0;
        var myroute = result.routes[0];
        for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].duration.value;
        }
        total = total / 60;
        console.log('Tiempo ' + total);
        this.variables.tiempo = total;
    };
    PedidosCursoComponent.prototype.loadMap = function (position) {
        var mapEle = document.getElementById('map');
        this.myLatLng = position;
        this.map = new google.maps.Map(mapEle, {
            center: this.myPosition,
            zoom: 18,
        });
        this.directionsDisplay.setMap(this.map);
        /*for (var j = 0; j < this.areaTriangle.length; j++) {
            this.areaTriangle[j].setMap(this.map);
        } */
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            mapEle.classList.add('show-map');
        });
    };
    PedidosCursoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-curso-prod',
            template: __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-curso/pedidos-curso.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pedidos/pedidos-curso/pedidos-curso.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__["a" /* HeaderToPedidosEventService */],
            __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], PedidosCursoComponent);
    return PedidosCursoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-finalizados/pedidos-finalizados.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!viendo && mostrar\">\n  <nb-card-header>\n    <div class=\"row show-grid\">\n          <div class=\"col-6\">\n            <div>Pedidos finalizados</div>\n          </div>\n          <div class=\"col-6\">\n            <div>\n              <div style=\"text-align: right;\">\n               <strong>Buscar: </strong>\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <table class=\"table\">\n      <thead>\n         <!-- <th></th> -->\n         <th style=\"text-align: center;\">Pedido</th>\n         <th style=\"text-align: center;\">Servicio</th>\n         <th style=\"text-align: center;\">Usuario</th>\n         <th style=\"text-align: center;\">Fecha</th>\n         <th style=\"text-align: center;\">Hora</th>\n         <th style=\"text-align: center;\">Hora Aceptación</th>\n         <th style=\"text-align: center;\">Estado</th>\n         <th style=\"text-align: center;\">Proveedor</th>\n         <th style=\"text-align: center;\">Acciones</th>\n      </thead>  \n      <tbody>\n         <tr *ngFor=\"let item of items\" >\n            <!-- <td></td> -->\n            <td style=\"text-align: center; vertical-align:middle;\">S00{{item.id}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.productos[0].nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.usuario.nombre}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.fecha}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.hora}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.hora_aceptado}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.estado}}</td>\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.repartidor_nom}} </td>\n            <td style=\"text-align: center; vertical-align:middle;\">\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Ver\" (click)=\"ver(item)\">\n                <i class=\"fa fa-eye\"></i>\n              </button>\n            </td>\n         </tr>\n      </tbody>\n    </table>\n      \n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n      <div class=\"btn-group\">\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\n      </div>\n      <div class=\"btn-group pull-right\">\n         <ul class=\"pagination\" >\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\n               </li>\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\n         </ul>\n      </div>\n    </div>  \n  </nb-card-footer>\n</nb-card>\n\n<div class=\"viendo\" *ngIf=\"viendo\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <nb-card>\n        <nb-card-header>\n          Detalles del Pedido AI00{{selectedObj.id}}\n          <div class=\"pull-right\" style=\"margin-right: 10px\">\n            Estado: {{selectedObj.estado}}\n          </div>\n        </nb-card-header>\n        <nb-card-body>\n\n          <h5 *ngIf=\"selectedObj.repartidor_nom\"class=\"grid-h\">Proveedor</h5>\n          <div *ngIf=\"selectedObj.repartidor_nom\"class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.repartidor_nom}}</div>\n            </div>\n\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.repartidor\" class=\"col-md-8\">\n              <div>{{selectedObj.repartidor.usuario.telefono}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Fecha/Hora</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Fecha</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.fecha}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Hora</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.hora}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Usuario</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Nombre</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.nombre}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Email</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.email}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.telefono}}</div>\n            </div>\n\n            <!--div class=\"col-md-4\">\n              <div>Ciudad</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.ciudad}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Estado</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.usuario.estado}}</div>\n            </div-->\n\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\n              <div>Destinatario</div>\n            </div>\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\n              <div>{{selectedObj.destinatario}}</div>\n            </div>\n\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-4\">\n              <div>Teléfono</div>\n            </div>\n            <div *ngIf=\"selectedObj.destinatario\" class=\"col-md-8\">\n              <div>{{selectedObj.telefono}}</div>\n            </div>\n\n          </div>\n\n          <h5 class=\"grid-h\">Referencias</h5>\n          <div class=\"row show-grid\">\n\n            <div class=\"col-md-4\">\n              <div>Dirección</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.direccion}}</div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div>Referencia</div>\n            </div>\n            <div class=\"col-md-8\">\n              <div>{{selectedObj.referencia}}</div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <div *ngIf=\"selectedObj.lat && selectedObj.lng\">\n                <!-- <strong>Aqui el mapa</strong> -->\n                <agm-map style=\"height: 300px;\" [zoom]=\"13\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\">\n                      <agm-marker style=\"height: 300px;\" [latitude]=\"selectedObj.lat\" [longitude]=\"selectedObj.lng\"></agm-marker>\n                  </agm-map>\n              </div>\n            </div>\n\n\n          </div>\n\n          \n          <!--div class=\"table-responsive\">\n            <h5 class=\"grid-h\">Productos Solicitados</h5>\n            <table class=\"table table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>\n                   Producto\n                  </th>\n                  <th>\n                   Establecimiento\n                  </th>\n                  <th>\n                   Solicitados\n                  </th>\n                  <th>\n                   Precio Unit. <small>($)</small>\n                  </th>\n                  <th>\n                   Sub-total <small>($)</small>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of selectedObj.productos\">\n                  <td class=\"text-center\">\n                    {{item.nombre}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.establecimiento.nombre}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.cantidad}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.precio_unitario}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{item.pivot.precio_unitario * item.pivot.cantidad}}\n                  </td>\n                </tr>\n                \n                <tr>\n                  <td colspan=\"5\"></td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Envío</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.costo_envio | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Sub-total</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.subtotal | number: '1.2-2'}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"4\" style=\"text-align: right;\"><strong>Total</strong> <small>($)</small></td>\n                  <td class=\"text-center\">{{selectedObj.costo | number: '1.2-2'}}</td>\n                </tr> \n              </tbody>\n            </table>\n          </div-->\n\n          <h5 >Calificación</h5>\n          <div *ngFor=\"let item of selectedObj.calificacion\" >\n            <div class=\"row show-grid\" *ngIf=\"item.usuario_id==selectedObj.repartidor.usuario_id\">\n              <div class=\"col-md-4\">\n                <div>Puntaje del Proveedor</div>\n              </div>\n              <div class=\"col-md-8\" >\n                <div>\n                  <ngb-rating [(rate)]=\"item.puntaje\" max=5>\n                    <ng-template let-fill=\"fill\">\n                      <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                        <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\n                        <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\n                      </span>\n                    </ng-template>\n                  </ngb-rating>\n                  <span class=\"current-rate\">{{ item.puntaje }}</span>\n                </div>\n              </div>\n\n              <div *ngIf=\"item.comentario && item.comentario != ''\" class=\"col-md-4\">\n                <div>Comentario</div>\n              </div>\n              <div *ngIf=\"item.comentario && item.comentario != ''\" class=\"col-md-8\">\n                <div>{{item.comentario}}</div>\n              </div>\n            </div>\n          </div>\n         \n           <br><br><br>\n\n          <div  *ngFor=\"let item of selectedObj.calificacion\" >\n            <div class=\"row show-grid\" *ngIf=\"item.usuario_id==selectedObj.usuario.id\">\n              <div class=\"col-md-4\">\n                <div>Puntaje del Usuario</div>\n              </div>\n              <div class=\"col-md-8\" *ngIf=\"item.usuario_id==selectedObj.usuario.id\">\n                <div>\n                  <ngb-rating [(rate)]=\"item.puntaje\" max=5>\n                    <ng-template let-fill=\"fill\">\n                      <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                        <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\n                        <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\n                      </span>\n                    </ng-template>\n                  </ngb-rating>\n                  <span class=\"current-rate\">{{ item.puntaje }}</span>\n                </div>\n              </div>\n\n              <div *ngIf=\"item.comentario && item.comentario != ''\" class=\"col-md-4\">\n                <div>Comentario</div>\n              </div>\n              <div *ngIf=\"item.comentario && item.comentario != ''\" class=\"col-md-8\">\n                <div>{{item.comentario}}</div>\n              </div>\n            </div>\n          </div>\n            <br><br><br><br>\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"wrapper\">\n                <div class=\"containerChat\">\n                    <div class=\"right\">\n                      <div class=\"top\">\n                        <span class=\"name\">{{usuario_nombre}}</span>\n                        <i class=\"fa fa-refresh icon-refresh\" (click)=\"refreshChat()\"></i>\n                      </div>\n                      <div class=\"chatbox\">\n                        <div #scrollChat class=\"chatlogs message-wrap\">\n                          <div *ngFor=\"let msg of msgList\"\n                             class=\"message\" \n                               [class.leftmsg]=\" msg.emisor_id == userid \"\n                               [class.rightmsg]=\" msg.emisor_id != userid \">\n                            <img class=\"user-img\" [src]=\"msg.emisor.imagen\" alt=\"\" >\n                            <div class=\"msg-detail\">\n                              <div class=\"msg-info\">\n                                <p>{{msg.created_at}}</p>\n                              </div>\n                              <div class=\"msg-content\">\n                                <span class=\"triangle\"></span>\n                                <p class=\"line-breaker \">{{msg.msg}}</p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>        \n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n        </nb-card-body>\n        <nb-card-footer>\n          <button  class=\"btn btn-tn btn-secondary\" (click)=\"atras()\"><i class=\"fa fa-arrow-left\"></i> Atrás</button>\n        </nb-card-footer>\n      </nb-card>\n    </div>\n</div>\n</div>\n\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Eliminar Producto: </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>¿Realmente desea eliminar el producto {{eliminar_nombre}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\n  </div>\n</ng-template>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-finalizados/pedidos-finalizados.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-default) .title-text {\n  text-align: center;\n  padding: 40% 0px 30px 0px; }\n\n:host-context(.nb-theme-default) ion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 0px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: -1;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) #map {\n  height: 300px;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n  position: relative; }\n  :host-context(.nb-theme-default) #map.show-map {\n    opacity: 1; }\n\n:host-context(.nb-theme-default) .content-price {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  font-size: 13px; }\n\n:host-context(.nb-theme-default) .icon-map {\n  font-size: 22px;\n  color: #D2D2D2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .pac-container {\n  z-index: 10000;\n  pointer-events: auto;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .alert-text {\n  background-color: #C62828;\n  padding: 20px;\n  text-align: justify;\n  color: #fff; }\n\n:host-context(.nb-theme-default) .item-md.item-block .item-inner {\n  padding-right: 0px; }\n\n:host-context(.nb-theme-default) textarea.text-input {\n  border: 1px solid #d2d2d2;\n  border-radius: 4px;\n  padding: 15px;\n  margin: 13px 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) .div-button {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 45%;\n  margin: 10px auto 20px;\n  padding: 11px;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  max-width: 370px; }\n\n:host-context(.nb-theme-default) .btn-login {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff; }\n\n:host-context(.nb-theme-default) .div-button1 {\n  padding: 11px;\n  width: 99%;\n  text-align: center;\n  margin-left: 1%;\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 15px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  color: #fff; }\n\n:host-context(.nb-theme-default) .btn-login1 {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 90%;\n  margin: 20px auto; }\n\n:host-context(.nb-theme-default) .textarea-info .item-inner {\n  border-bottom: none !important; }\n\n:host-context(.nb-theme-default) .info-hour {\n  margin: 0px;\n  padding: 15px;\n  background-color: #fff852;\n  font-size: 11px;\n  text-align: center; }\n\n:host-context(.nb-theme-default) .title-service {\n  background-color: #fff;\n  margin: 0px;\n  padding: 16px;\n  text-align: center;\n  font-weight: bold; }\n\n:host-context(.nb-theme-default) ion-datetime {\n  border: 1px solid #d6d6d6;\n  border-radius: 4px;\n  min-width: 100px;\n  text-align: center;\n  padding: 8px !important;\n  width: 90%;\n  margin: 15px auto; }\n\n:host-context(.nb-theme-default) .icon-time {\n  font-size: 25px;\n  margin-left: 11px;\n  color: #666666; }\n\n:host-context(.nb-theme-default) .text-left {\n  margin-left: 30% !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 15px; }\n\n:host-context(.nb-theme-default) .input-price {\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  :host-context(.nb-theme-default) .input-price .text-input-md {\n    margin: 8px;\n    text-align: center; }\n\n:host-context(.nb-theme-default) .text-right {\n  margin-right: 40% !important;\n  margin-left: 8px !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .item-price {\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .item-price .item-inner {\n    border: none !important;\n    border-bottom: none !important; }\n\n:host-context(.nb-theme-default) .select-md {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 0px 10px 20px; }\n\n:host-context(.nb-theme-default) .input-wrapper {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .input-sym {\n  max-width: 8px;\n  top: 0px;\n  position: absolute; }\n  :host-context(.nb-theme-default) .input-sym .text-input-md {\n    width: 10px;\n    margin: 0px;\n    text-align: center;\n    height: 50px; }\n\n:host-context(.nb-theme-default) .colorGrey {\n  background-color: #ccc !important; }\n\n:host-context(.nb-theme-default) .chatbox {\n  width: 100%;\n  min-width: 390px;\n  height: calc(100% - 24px);\n  background: #fff;\n  padding: 25px;\n  margin: 0px auto; }\n\n:host-context(.nb-theme-default) .chatlogs {\n  padding: 10px;\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n:host-context(.nb-theme-default) .chatlogs::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-default) .chatlogs::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-default) .chat-form textarea {\n  background: #fff;\n  width: 90%;\n  heigth: 50px;\n  border: 2px solid #eee;\n  border-radius: 3px;\n  resize: none;\n  padding: 10px;\n  color: #333;\n  margin-top: 15px;\n  float: left;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n:host-context(.nb-theme-default) .chat-form textarea::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-default) .chat-form textarea::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-default) .wrapper {\n  height: calc(100vh - 12.75rem) !important;\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-default) .containerChat {\n  width: 100%;\n  height: 100%;\n  background-color: #fff; }\n  :host-context(.nb-theme-default) .containerChat .left {\n    float: left;\n    width: 37.6%;\n    height: 100%;\n    border: 1px solid #e6e6e6;\n    background-color: #fff; }\n    :host-context(.nb-theme-default) .containerChat .left .top {\n      position: relative;\n      width: 100%;\n      height: 96px;\n      padding: 29px; }\n      :host-context(.nb-theme-default) .containerChat .left .top:after {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        display: block;\n        width: 80%;\n        height: 1px;\n        content: '';\n        background-color: #e6e6e6;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n    :host-context(.nb-theme-default) .containerChat .left input {\n      float: left;\n      width: 100%;\n      height: 42px;\n      padding: 0 15px;\n      border: 1px solid #e6e6e6;\n      background-color: #eceff1;\n      border-radius: 21px; }\n      :host-context(.nb-theme-default) .containerChat .left input:focus {\n        outline: none; }\n    :host-context(.nb-theme-default) .containerChat .left .search {\n      display: inline-block;\n      font-size: 20px;\n      position: relative;\n      top: 3px;\n      text-align: right;\n      color: #0b417a;\n      font-family: FontAwesome;\n      cursor: pointer;\n      margin-right: 5px; }\n    :host-context(.nb-theme-default) .containerChat .left .people {\n      margin-left: -1px;\n      border-right: 1px solid #e6e6e6;\n      border-left: 1px solid #e6e6e6;\n      width: calc(100% + 2px);\n      height: calc(100% - 70px);\n      overflow-y: scroll;\n      overflow-x: hidden; }\n      :host-context(.nb-theme-default) .containerChat .left .people .person {\n        position: relative;\n        width: 100%;\n        padding: 12px 10% 16px;\n        cursor: pointer;\n        background-color: #fff;\n        list-style-type: none; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person:after {\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          display: block;\n          width: 80%;\n          height: 1px;\n          content: '';\n          background-color: #e6e6e6;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0); }\n        :host-context(.nb-theme-default) .containerChat .left .people .person img {\n          float: left;\n          width: 40px;\n          height: 40px;\n          margin-right: 12px;\n          border-radius: 50%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          background-color: #ddd; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .name {\n          font-size: 14px;\n          line-height: 22px;\n          color: #1a1a1a; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .time {\n          font-size: 14px;\n          position: absolute;\n          top: 16px;\n          right: 10%;\n          padding: 0 0 5px 5px;\n          color: #999;\n          background-color: #fff; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person .preview {\n          font-size: 14px;\n          display: block;\n          overflow: hidden !important;\n          width: 70%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #999; }\n        :host-context(.nb-theme-default) .containerChat .left .people .person.active, :host-context(.nb-theme-default) .containerChat .left .people .person:hover {\n          margin-top: -1px;\n          margin-left: -1px;\n          padding-top: 13px;\n          border: 0;\n          background-color: #0b417a;\n          width: calc(100% + 2px);\n          padding-left: calc(10% + 1px); }\n          :host-context(.nb-theme-default) .containerChat .left .people .person.active span, :host-context(.nb-theme-default) .containerChat .left .people .person:hover span {\n            color: #fff;\n            background: transparent; }\n          :host-context(.nb-theme-default) .containerChat .left .people .person.active:after, :host-context(.nb-theme-default) .containerChat .left .people .person:hover:after {\n            display: none; }\n  :host-context(.nb-theme-default) .containerChat .right {\n    position: relative;\n    float: left;\n    width: 100%;\n    height: 100%; }\n    :host-context(.nb-theme-default) .containerChat .right .top {\n      width: 100%;\n      height: 47px;\n      padding: 15px 29px;\n      background-color: #fafafa;\n      border-top: 1px solid #eceef2; }\n      :host-context(.nb-theme-default) .containerChat .right .top span {\n        font-size: 15px;\n        color: #999; }\n        :host-context(.nb-theme-default) .containerChat .right .top span .name {\n          color: #1a1a1a; }\n\n:host-context(.nb-theme-default) .content-initChat {\n  box-shadow: 0 2px 12px 0 #e4e8ef;\n  padding: 20px 5px;\n  text-align: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #0b417a;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .message-wrap {\n  padding: 0 10px; }\n\n:host-context(.nb-theme-default) .message-wrap .message {\n  position: relative;\n  padding: 7px 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail p {\n  margin: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  color: #333;\n  width: auto;\n  max-width: 80%; }\n\n:host-context(.nb-theme-default) .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-content {\n  background-color: #fff !important;\n  float: left; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail {\n  padding-left: 60px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .user-img {\n  left: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail .msg-content {\n  color: #343434; }\n\n:host-context(.nb-theme-default) .message-wrap .message.leftmsg .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail {\n  padding-right: 60px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-info {\n  text-align: right; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .user-img {\n  right: 0; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-content {\n  background-color: #e0e0e0;\n  float: right; }\n\n:host-context(.nb-theme-default) .message-wrap .message.rightmsg .msg-detail .msg-content span.triangle {\n  background-color: #e0e0e0;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .viendo .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .viendo .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .viendo .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .viendo .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .title-text {\n  text-align: center;\n  padding: 40% 0px 30px 0px; }\n\n:host-context(.nb-theme-cosmic) ion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 0px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: -1;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) #map {\n  height: 300px;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n  position: relative; }\n  :host-context(.nb-theme-cosmic) #map.show-map {\n    opacity: 1; }\n\n:host-context(.nb-theme-cosmic) .content-price {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  font-size: 13px; }\n\n:host-context(.nb-theme-cosmic) .icon-map {\n  font-size: 22px;\n  color: #D2D2D2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .pac-container {\n  z-index: 10000;\n  pointer-events: auto;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .alert-text {\n  background-color: #C62828;\n  padding: 20px;\n  text-align: justify;\n  color: #fff; }\n\n:host-context(.nb-theme-cosmic) .item-md.item-block .item-inner {\n  padding-right: 0px; }\n\n:host-context(.nb-theme-cosmic) textarea.text-input {\n  border: 1px solid #d2d2d2;\n  border-radius: 4px;\n  padding: 15px;\n  margin: 13px 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .div-button {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 45%;\n  margin: 10px auto 20px;\n  padding: 11px;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  max-width: 370px; }\n\n:host-context(.nb-theme-cosmic) .btn-login {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff; }\n\n:host-context(.nb-theme-cosmic) .div-button1 {\n  padding: 11px;\n  width: 99%;\n  text-align: center;\n  margin-left: 1%;\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 15px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  color: #fff; }\n\n:host-context(.nb-theme-cosmic) .btn-login1 {\n  background-color: #222220;\n  color: #ffffff;\n  border-radius: 25px;\n  width: 90%;\n  margin: 20px auto; }\n\n:host-context(.nb-theme-cosmic) .textarea-info .item-inner {\n  border-bottom: none !important; }\n\n:host-context(.nb-theme-cosmic) .info-hour {\n  margin: 0px;\n  padding: 15px;\n  background-color: #fff852;\n  font-size: 11px;\n  text-align: center; }\n\n:host-context(.nb-theme-cosmic) .title-service {\n  background-color: #fff;\n  margin: 0px;\n  padding: 16px;\n  text-align: center;\n  font-weight: bold; }\n\n:host-context(.nb-theme-cosmic) ion-datetime {\n  border: 1px solid #d6d6d6;\n  border-radius: 4px;\n  min-width: 100px;\n  text-align: center;\n  padding: 8px !important;\n  width: 90%;\n  margin: 15px auto; }\n\n:host-context(.nb-theme-cosmic) .icon-time {\n  font-size: 25px;\n  margin-left: 11px;\n  color: #666666; }\n\n:host-context(.nb-theme-cosmic) .text-left {\n  margin-left: 30% !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 15px; }\n\n:host-context(.nb-theme-cosmic) .input-price {\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  :host-context(.nb-theme-cosmic) .input-price .text-input-md {\n    margin: 8px;\n    text-align: center; }\n\n:host-context(.nb-theme-cosmic) .text-right {\n  margin-right: 40% !important;\n  margin-left: 8px !important;\n  margin-bottom: 0px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .item-price {\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .item-price .item-inner {\n    border: none !important;\n    border-bottom: none !important; }\n\n:host-context(.nb-theme-cosmic) .select-md {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 0px 10px 20px; }\n\n:host-context(.nb-theme-cosmic) .input-wrapper {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .input-sym {\n  max-width: 8px;\n  top: 0px;\n  position: absolute; }\n  :host-context(.nb-theme-cosmic) .input-sym .text-input-md {\n    width: 10px;\n    margin: 0px;\n    text-align: center;\n    height: 50px; }\n\n:host-context(.nb-theme-cosmic) .colorGrey {\n  background-color: #ccc !important; }\n\n:host-context(.nb-theme-cosmic) .chatbox {\n  width: 100%;\n  min-width: 390px;\n  height: calc(100% - 24px);\n  background: #fff;\n  padding: 25px;\n  margin: 0px auto; }\n\n:host-context(.nb-theme-cosmic) .chatlogs {\n  padding: 10px;\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n:host-context(.nb-theme-cosmic) .chatlogs::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-cosmic) .chatlogs::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea {\n  background: #fff;\n  width: 90%;\n  heigth: 50px;\n  border: 2px solid #eee;\n  border-radius: 3px;\n  resize: none;\n  padding: 10px;\n  color: #333;\n  margin-top: 15px;\n  float: left;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea::-webkit-scrollbar {\n  width: 10px; }\n\n:host-context(.nb-theme-cosmic) .chat-form textarea::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n:host-context(.nb-theme-cosmic) .wrapper {\n  height: calc(100vh - 12.75rem) !important;\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) .containerChat {\n  width: 100%;\n  height: 100%;\n  background-color: #fff; }\n  :host-context(.nb-theme-cosmic) .containerChat .left {\n    float: left;\n    width: 37.6%;\n    height: 100%;\n    border: 1px solid #e6e6e6;\n    background-color: #fff; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .top {\n      position: relative;\n      width: 100%;\n      height: 96px;\n      padding: 29px; }\n      :host-context(.nb-theme-cosmic) .containerChat .left .top:after {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        display: block;\n        width: 80%;\n        height: 1px;\n        content: '';\n        background-color: #e6e6e6;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n    :host-context(.nb-theme-cosmic) .containerChat .left input {\n      float: left;\n      width: 100%;\n      height: 42px;\n      padding: 0 15px;\n      border: 1px solid #e6e6e6;\n      background-color: #eceff1;\n      border-radius: 21px; }\n      :host-context(.nb-theme-cosmic) .containerChat .left input:focus {\n        outline: none; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .search {\n      display: inline-block;\n      font-size: 20px;\n      position: relative;\n      top: 3px;\n      text-align: right;\n      color: #0b417a;\n      font-family: FontAwesome;\n      cursor: pointer;\n      margin-right: 5px; }\n    :host-context(.nb-theme-cosmic) .containerChat .left .people {\n      margin-left: -1px;\n      border-right: 1px solid #e6e6e6;\n      border-left: 1px solid #e6e6e6;\n      width: calc(100% + 2px);\n      height: calc(100% - 70px);\n      overflow-y: scroll;\n      overflow-x: hidden; }\n      :host-context(.nb-theme-cosmic) .containerChat .left .people .person {\n        position: relative;\n        width: 100%;\n        padding: 12px 10% 16px;\n        cursor: pointer;\n        background-color: #fff;\n        list-style-type: none; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person:after {\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          display: block;\n          width: 80%;\n          height: 1px;\n          content: '';\n          background-color: #e6e6e6;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0); }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person img {\n          float: left;\n          width: 40px;\n          height: 40px;\n          margin-right: 12px;\n          border-radius: 50%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          background-color: #ddd; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .name {\n          font-size: 14px;\n          line-height: 22px;\n          color: #1a1a1a; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .time {\n          font-size: 14px;\n          position: absolute;\n          top: 16px;\n          right: 10%;\n          padding: 0 0 5px 5px;\n          color: #999;\n          background-color: #fff; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person .preview {\n          font-size: 14px;\n          display: block;\n          overflow: hidden !important;\n          width: 70%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #999; }\n        :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover {\n          margin-top: -1px;\n          margin-left: -1px;\n          padding-top: 13px;\n          border: 0;\n          background-color: #0b417a;\n          width: calc(100% + 2px);\n          padding-left: calc(10% + 1px); }\n          :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active span, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover span {\n            color: #fff;\n            background: transparent; }\n          :host-context(.nb-theme-cosmic) .containerChat .left .people .person.active:after, :host-context(.nb-theme-cosmic) .containerChat .left .people .person:hover:after {\n            display: none; }\n  :host-context(.nb-theme-cosmic) .containerChat .right {\n    position: relative;\n    float: left;\n    width: 100%;\n    height: 100%; }\n    :host-context(.nb-theme-cosmic) .containerChat .right .top {\n      width: 100%;\n      height: 47px;\n      padding: 15px 29px;\n      background-color: #fafafa;\n      border-top: 1px solid #eceef2; }\n      :host-context(.nb-theme-cosmic) .containerChat .right .top span {\n        font-size: 15px;\n        color: #999; }\n        :host-context(.nb-theme-cosmic) .containerChat .right .top span .name {\n          color: #1a1a1a; }\n\n:host-context(.nb-theme-cosmic) .content-initChat {\n  box-shadow: 0 2px 12px 0 #e4e8ef;\n  padding: 20px 5px;\n  text-align: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #0b417a;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .message-wrap {\n  padding: 0 10px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message {\n  position: relative;\n  padding: 7px 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail p {\n  margin: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  color: #333;\n  width: auto;\n  max-width: 80%; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-content {\n  background-color: #fff !important;\n  float: left; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail {\n  padding-left: 60px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .user-img {\n  left: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail .msg-content {\n  color: #343434; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.leftmsg .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail {\n  padding-right: 60px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-info {\n  text-align: right; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .user-img {\n  right: 0; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-content {\n  background-color: #e0e0e0;\n  float: right; }\n\n:host-context(.nb-theme-cosmic) .message-wrap .message.rightmsg .msg-detail .msg-content span.triangle {\n  background-color: #e0e0e0;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-finalizados/pedidos-finalizados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosFinalizadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__ = __webpack_require__("../../../../../src/app/services/eventos-services/header-to-pedidos-event-service/header-to-pedidos-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__ = __webpack_require__("../../../../../src/app/services/header-service/header.service.ts");
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









var PedidosFinalizadosComponent = /** @class */ (function () {
    function PedidosFinalizadosComponent(modalService, toasterService, http, router, rutaService, headerToPedidosEventService, headerService) {
        var _this = this;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.headerToPedidosEventService = headerToPedidosEventService;
        this.headerService = headerService;
        this.starRate = 2;
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
        this.viendo = false;
        this.mostrar = true;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.msgList = [];
        this.msgList2 = [];
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        //Detectar evento cargar pedido de notificacion entrante
        this.headerToPedidosEventService.headerToPedidosData.subscribe(function (data) {
            //console.log(data); 
            _this.headerEvent();
        });
    }
    PedidosFinalizadosComponent.prototype.ngOnInit = function () {
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
        this.viendo = null;
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'pedidos/estado/finalizados?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //Cambiar el formato de la fecha y hora
            var dia;
            var mes;
            var anio;
            var fecha;
            var hora;
            var minutos;
            var segundos;
            for (var i = 0; i < _this.data.pedidos.length; i++) {
                fecha = new Date(_this.data.pedidos[i].created_at);
                dia = fecha.getDate();
                mes = fecha.getMonth() + 1;
                anio = fecha.getFullYear();
                hora = fecha.getHours();
                minutos = fecha.getMinutes();
                segundos = fecha.getSeconds();
                _this.data.pedidos[i].fecha = dia + '/' + mes + '/' + anio;
                _this.data.pedidos[i].hora = hora + ':' + minutos + ':' + segundos;
                _this.data.pedidos[i].ref = 'M00' + _this.data.pedidos[i].id;
                //Control de estados del pedido
                if (_this.data.pedidos[i].estado == 1) {
                    _this.data.pedidos[i].estado = 'No asignado';
                }
                else if (_this.data.pedidos[i].estado == 2) {
                    _this.data.pedidos[i].estado = 'Asignado';
                }
                else if (_this.data.pedidos[i].estado == 3) {
                    _this.data.pedidos[i].estado = 'En camino';
                }
                else if (_this.data.pedidos[i].estado == 4) {
                    _this.data.pedidos[i].estado = 'Entregado';
                }
            }
            setTimeout(function () {
                _this.productList = _this.data.pedidos;
                _this.filteredItems = _this.productList;
                //console.log(this.productList);
                _this.init();
                //verificar si hay que cargar un pedido de una notificacion
                setTimeout(function () {
                    _this.checkHeaderEvent();
                    _this.loading = false;
                }, 600);
            }, 1000);
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
    PedidosFinalizadosComponent.prototype.ngOnDestroy = function () {
        // acciones de destrucción
        localStorage.setItem('mouvers_pedido_id', '');
    };
    PedidosFinalizadosComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterConfig */]({
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
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    //Abrir modal por defecto
    PedidosFinalizadosComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    PedidosFinalizadosComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    PedidosFinalizadosComponent.prototype.atras = function () {
        this.viendo = false;
        this.selectedObj = null;
        this.objAEliminar = null;
    };
    PedidosFinalizadosComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    PedidosFinalizadosComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'productos/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
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
    PedidosFinalizadosComponent.prototype.ver = function (obj) {
        var _this = this;
        this.viendo = true;
        this.selectedObj = Object.assign({}, obj);
        console.log(this.selectedObj);
        if (this.selectedObj.lat && this.selectedObj.lng) {
            this.selectedObj.lat = parseFloat(this.selectedObj.lat);
            this.selectedObj.lng = parseFloat(this.selectedObj.lng);
        }
        this.http.get(this.rutaService.getRutaApi() + 'chats/pedidos/' + this.selectedObj.id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.msgList2 = data;
            _this.msgList = _this.msgList2.chat.mensajes;
            console.log(_this.msgList);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.msgList = [];
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
    PedidosFinalizadosComponent.prototype.refreshChat = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'chats/pedidos/' + this.selectedObj.id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            _this.msgList2 = data;
            _this.msgList = _this.msgList2.chat.mensajes;
            console.log(_this.msgList);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.msgList = [];
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
    PedidosFinalizadosComponent.prototype.headerEvent = function () {
        this.ngOnInit();
    };
    PedidosFinalizadosComponent.prototype.checkHeaderEvent = function () {
        if (localStorage.getItem('mouvers_pedido_id') &&
            localStorage.getItem('mouvers_pedido_id') != '' &&
            localStorage.getItem('mouvers_pedido_id') != 'null') {
            var existe = false;
            var pedido_id = parseInt(localStorage.getItem('mouvers_pedido_id'));
            for (var i = 0; i < this.productList.length; i++) {
                if (this.productList[i].id == pedido_id) {
                    this.ver(this.productList[i]);
                    localStorage.setItem('mouvers_pedido_id', '');
                    this.headerService.clearNotificationCliAux(this.productList[i].id);
                    existe = true;
                }
            }
            if (!existe) {
                this.showToast('warning', 'Warning!', 'El pedido solicitado ya no está en esta sección.');
            }
        }
    };
    PedidosFinalizadosComponent.prototype.init = function () {
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
    PedidosFinalizadosComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (!this.productList[i].repartidor) {
                    this.productList[i].repartidor_nom = ' ';
                }
                if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].hora.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].repartidor_nom.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].ref.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
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
    PedidosFinalizadosComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    PedidosFinalizadosComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    PedidosFinalizadosComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    PedidosFinalizadosComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    PedidosFinalizadosComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    PedidosFinalizadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-finalizados-prod',
            template: __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-finalizados/pedidos-finalizados.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pedidos/pedidos-finalizados/pedidos-finalizados.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_8__services_eventos_services_header_to_pedidos_event_service_header_to_pedidos_event_service__["a" /* HeaderToPedidosEventService */],
            __WEBPACK_IMPORTED_MODULE_9__services_header_service_header_service__["a" /* HeaderService */]])
    ], PedidosFinalizadosComponent);
    return PedidosFinalizadosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedidos_aceptar_pedidos_aceptar_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-aceptar/pedidos-aceptar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedidos_curso_pedidos_curso_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-curso/pedidos-curso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pedidos_finalizados_pedidos_finalizados_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-finalizados/pedidos-finalizados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pedidos_cancelados_pedidos_cancelados_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-cancelados/pedidos-cancelados.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pedidos_component__["a" /* PedidosComponent */],
        children: [{
                path: 'aceptar',
                component: __WEBPACK_IMPORTED_MODULE_3__pedidos_aceptar_pedidos_aceptar_component__["a" /* PedidosAceptarComponent */],
            }, {
                path: 'encurso',
                component: __WEBPACK_IMPORTED_MODULE_4__pedidos_curso_pedidos_curso_component__["a" /* PedidosCursoComponent */],
            }, {
                path: 'finalizados',
                component: __WEBPACK_IMPORTED_MODULE_5__pedidos_finalizados_pedidos_finalizados_component__["a" /* PedidosFinalizadosComponent */],
            }, {
                path: 'cancelados',
                component: __WEBPACK_IMPORTED_MODULE_6__pedidos_cancelados_pedidos_cancelados_component__["a" /* PedidosCanceladosComponent */],
            }],
    }];
var PedidosRoutingModule = /** @class */ (function () {
    function PedidosRoutingModule() {
    }
    PedidosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], PedidosRoutingModule);
    return PedidosRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__pedidos_component__["a" /* PedidosComponent */],
    __WEBPACK_IMPORTED_MODULE_3__pedidos_aceptar_pedidos_aceptar_component__["a" /* PedidosAceptarComponent */],
    __WEBPACK_IMPORTED_MODULE_4__pedidos_curso_pedidos_curso_component__["a" /* PedidosCursoComponent */],
    __WEBPACK_IMPORTED_MODULE_5__pedidos_finalizados_pedidos_finalizados_component__["a" /* PedidosFinalizadosComponent */],
    __WEBPACK_IMPORTED_MODULE_6__pedidos_cancelados_pedidos_cancelados_component__["a" /* PedidosCanceladosComponent */]
];


/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PedidosComponent = /** @class */ (function () {
    function PedidosComponent() {
    }
    PedidosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-cat-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], PedidosComponent);
    return PedidosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosModule", function() { return PedidosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_routing_module__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos-routing.module.ts");
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


//import { Ng2UploaderModule } from 'ng2-uploader';

var PedidosModule = /** @class */ (function () {
    function PedidosModule() {
    }
    PedidosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAu3ISPnP2ypZSaIS8s93TR71lnyZoQWNY',
                    libraries: ["places", "geometry"]
                }),
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__pedidos_routing_module__["a" /* PedidosRoutingModule */],
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
            declarations: __WEBPACK_IMPORTED_MODULE_2__pedidos_routing_module__["b" /* routedComponents */].slice(),
            providers: [],
        })
    ], PedidosModule);
    return PedidosModule;
}());



/***/ })

});
//# sourceMappingURL=pedidos.module.chunk.js.map