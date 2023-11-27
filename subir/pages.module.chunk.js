webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-bar-horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsBarHorizontalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsBarHorizontalComponent = /** @class */ (function () {
    function ChartjsBarHorizontalComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: colors.infoLight,
                        borderWidth: 1,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    }, {
                        label: 'Dataset 2',
                        backgroundColor: colors.successLight,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsBarHorizontalComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsBarHorizontalComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsBarHorizontalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-bar-horizontal',
            template: "\n    <chart type=\"horizontalBar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsBarHorizontalComponent);
    return ChartjsBarHorizontalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsBarComponent = /** @class */ (function () {
    function ChartjsBarComponent(theme) {
        this.theme = theme;
        this.etiquetas = [];
        this.datos = [];
        this.colores = [];
        this.auxColores = ['#61380B', '#011c3d', '#8a7fff', '#40dc7e', '#4ca6ff', '#ffa100', '#ff4c6a'];
    }
    ChartjsBarComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.dataDiagrama.length; ++i) {
            this.etiquetas.push(this.dataDiagrama[i].hora);
            this.datos.push(this.dataDiagrama[i].count_solicitados);
            /*const colorIndex = Math.floor(Math.random() * this.auxColores.length);
            this.colores.push(this.auxColores[colorIndex]);*/
        }
        //this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
        //const colors: any = config.variables;
        //const chartjs: any = config.variables.chartjs;
        this.data = {
            labels: this.etiquetas,
            datasets: [{
                    data: this.datos,
                    label: 'Pedidos',
                    backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA('#8a7fff', 0.8),
                } /*, {
                  data: [28, 48, 40, 19, 86, 27, 150],
                  label: 'Series B',
                  backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
                }*/
            ],
        };
        this.options = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                labels: {
                    fontColor: '#484848',
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                            color: '#cccccc',
                        },
                        ticks: {
                            fontColor: '#484848',
                        },
                    },
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: '#cccccc',
                        },
                        ticks: {
                            fontColor: '#484848',
                        },
                    },
                ],
            },
        };
        //});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartjsBarComponent.prototype, "dataDiagrama", void 0);
    ChartjsBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-bar',
            template: "\n    <chart type=\"bar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsBarComponent);
    return ChartjsBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsLineComponent = /** @class */ (function () {
    function ChartjsLineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.primary, 0.3),
                        borderColor: colors.primary,
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.danger, 0.3),
                        borderColor: colors.danger,
                    }, {
                        data: [18, 48, 77, 9, 100, 27, 40],
                        label: 'Series C',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.info, 0.3),
                        borderColor: colors.info,
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsLineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-line',
            template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsLineComponent);
    return ChartjsLineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-multiple-xaxis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsMultipleXaxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsMultipleXaxisComponent = /** @class */ (function () {
    function ChartjsMultipleXaxisComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'dataset - big points',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.primary,
                        backgroundColor: colors.primary,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - individual point sizes',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.dangerLight,
                        backgroundColor: colors.dangerLight,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHoverRadius',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.info,
                        backgroundColor: colors.info,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHitRadius',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.success,
                        backgroundColor: colors.success,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                hover: {
                    mode: 'index',
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    ChartjsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsMultipleXaxisComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsMultipleXaxisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-multiple-xaxis',
            template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsMultipleXaxisComponent);
    return ChartjsMultipleXaxisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsPieComponent = /** @class */ (function () {
    function ChartjsPieComponent(theme) {
        this.theme = theme;
        this.etiquetas = [];
        this.datos = [];
        this.colores = [];
        this.auxColores = ['#61380B', '#011c3d', '#8a7fff', '#40dc7e', '#4ca6ff', '#ffa100', '#ff4c6a'];
    }
    ChartjsPieComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 0; i < this.dataDiagrama.length; ++i) {
            this.etiquetas.push(this.dataDiagrama[i].nombre);
            this.datos.push(this.dataDiagrama[i].count_solicitados);
            var colorIndex = Math.floor(Math.random() * this.auxColores.length);
            this.colores.push(this.auxColores[colorIndex]);
        }
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: _this.etiquetas,
                datasets: [{
                        data: _this.datos,
                        backgroundColor: _this.colores,
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    };
    ChartjsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartjsPieComponent.prototype, "dataDiagrama", void 0);
    ChartjsPieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-pie',
            template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsPieComponent);
    return ChartjsPieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-radar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsRadarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsRadarComponent = /** @class */ (function () {
    function ChartjsRadarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [{
                        data: [65, 59, 90, 81, 56, 55, 40],
                        label: 'Series A',
                        borderColor: colors.danger,
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.dangerLight, 0.5),
                    }, {
                        data: [28, 48, 40, 19, 96, 27, 100],
                        label: 'Series B',
                        borderColor: colors.warning,
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.warningLight, 0.5),
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scaleFontColor: 'white',
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                    gridLines: {
                        color: chartjs.axisLineColor,
                    },
                    angleLines: {
                        color: chartjs.axisLineColor,
                    },
                },
            };
        });
    }
    ChartjsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsRadarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-radar',
            template: "\n    <chart type=\"radar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsRadarComponent);
    return ChartjsRadarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card [size]=\"breakpoint.width >= breakpoints.xxxl || breakpoint.width < breakpoints.md ? 'large' : 'xlarge'\">\n  <nb-tabset fullWidth>\n    <nb-tab tabTitle=\"Contacts\">\n      <div class=\"contact\" *ngFor=\"let c of contacts\">\n        <nb-user [picture]=\"c.user.picture\" [name]=\"c.user.name\" [title]=\"c.type\" size=\"large\"></nb-user>\n        <i class=\"i-contact nb-phone\"></i>\n      </div>\n    </nb-tab>\n    <nb-tab tabTitle=\"Recent\">\n      <div class=\"contact\" *ngFor=\"let c of recent\">\n        <nb-user [picture]=\"c.user.picture\" [name]=\"c.user.name\" [title]=\"c.type\" size=\"large\"></nb-user>\n        <span class=\"time\">{{ c.time }}</span>\n      </div>\n    </nb-tab>\n  </nb-tabset>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-default) nb-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0; }\n\n:host-context(.nb-theme-default) .contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #a4abb3;\n  padding: 1rem; }\n  :host-context(.nb-theme-default) .contact:not(:last-child) {\n    border-bottom: 1px solid #ebeef2; }\n\n:host-context(.nb-theme-default) .i-contact {\n  font-size: 2rem;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .time {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .info-container {\n  margin-left: 0.875rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-name {\n  font-family: Exo;\n  font-weight: 600;\n  color: #2a2a2a;\n  font-size: 1.25rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-title {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-cosmic) nb-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) .contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #76f8f6;\n  padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .contact:not(:last-child) {\n    border-bottom: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) .i-contact {\n  font-size: 2rem;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .time {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .info-container {\n  margin-left: 0.875rem; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n  font-family: Exo;\n  font-weight: 600;\n  color: #ffffff;\n  font-size: 1.25rem;\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .user-title {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(userService, themeService, breakpointService) {
        var _this = this;
        this.userService = userService;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.contacts = [
                { user: users.nick, type: 'mobile' },
                { user: users.eva, type: 'home' },
                { user: users.jack, type: 'mobile' },
                { user: users.lee, type: 'mobile' },
                { user: users.alan, type: 'home' },
                { user: users.kate, type: 'work' },
            ];
            _this.recent = [
                { user: users.alan, type: 'home', time: '9:12 pm' },
                { user: users.eva, type: 'home', time: '7:45 pm' },
                { user: users.nick, type: 'mobile', time: '5:29 pm' },
                { user: users.lee, type: 'mobile', time: '11:24 am' },
                { user: users.jack, type: 'mobile', time: '10:45 am' },
                { user: users.kate, type: 'work', time: '9:42 am' },
                { user: users.kate, type: 'work', time: '9:31 am' },
                { user: users.jack, type: 'mobile', time: '8:01 am' },
            ];
        });
    };
    ContactsComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-contacts',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xxxl-3 col-md-3\">\n    <ngx-status-card title=\"Pedidos sin aceptar\" type=\"primary\" data=\"{{count_2}}\">\n      <i class=\"ion-ios-compose-outline\"></i>\n    </ngx-status-card>\n  </div>\n  <div class=\"col-xxxl-3 col-md-3\">\n    <ngx-status-card title=\"Pedidos en curso\" type=\"primary\" data=\"{{count_3}}\">\n      <i class=\"ion-ios-compose-outline\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-3\">\n    <ngx-status-card title=\"Pedidos finalizados\" type=\"success\" data=\"{{count_4}}\">\n      <i class=\"ion-android-checkbox-outline\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-3\">\n    <ngx-status-card title=\"Pedidos cancelados\" type=\"success\" data=\"{{count_5}}\">\n      <i class=\"ion-android-checkbox-outline\"></i>\n    </ngx-status-card>\n  </div>\n\n\n  <!--div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Dinero recaudado\" type=\"warning\" data=\"{{count_4}}\">\n      <i class=\"ion-social-usd\"></i>\n    </ngx-status-card>\n  </div-->\n</div>\n<div class=\"row\">\n  <div class=\"col-xxxl-6 col-md-6\">\n    <ngx-status-card title=\"Proveedores activos\" type=\"info\" data=\"{{count_a}}\">\n      <i class=\"ion-android-bicycle\"></i>\n    </ngx-status-card>\n  </div>\n  <div class=\"col-xxxl-6 col-md-6\">\n    <ngx-status-card title=\"Proveedores inactivos\" type=\"info\" data=\"{{count_i}}\">\n      <i class=\"ion-android-bicycle\"></i>\n    </ngx-status-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xxxl-6 col-md-6\">\n    <ngx-status-card title=\"Nuevos proveedores\" type=\"warning\" data=\"{{count_6}}\">\n      <i class=\"ion-android-bicycle\"></i>\n    </ngx-status-card>\n  </div>\n  <div class=\"col-xxxl-6 col-md-6\">\n    <ngx-status-card title=\"Nuevos clientes\" type=\"warning\" data=\"{{count_7}}\">\n      <i class=\"nb-person\"></i>\n    </ngx-status-card>\n  </div>\n</div>\n\n<!-- <div class=\"row\">\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-5 col-md-6\">\n    <ngx-temperature></ngx-temperature>\n  </div>\n\n  <div class=\"col-xxxl-9 col-xxl-8 col-lg-7 col-md-6\">\n    <ngx-electricity></ngx-electricity>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xxxl-9 col-xl-12\">\n    <ngx-rooms></ngx-rooms>\n  </div>\n\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-7 col-md-6\">\n    <ngx-contacts></ngx-contacts>\n  </div>\n\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-5 col-md-6\">\n    <ngx-solar [chartValue]=\"72\"></ngx-solar>\n\n    <ngx-kitten></ngx-kitten>\n  </div>\n\n  <div class=\"col-xxxl-3 col-xxl-4 col-md-5\">\n    <ngx-traffic></ngx-traffic>\n    <ngx-weather></ngx-weather>\n  </div>\n\n  <div class=\"col-xxxl-6 col-xxl-12 col-md-7\">\n    <ngx-security-cameras></ngx-security-cameras>\n  </div>\n</div> -->\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n    <nb-card>\n      <nb-card-header>\n\n        <div style=\"position: absolute; top: 0px; right:15px;\" >\n          <button  type=\"button\" class=\"btn btn-primary btn-icon btn-tn\" title=\"Refresh\" (click)=\"getDiagram1()\">\n            <i class=\"fa fa-refresh icon-refresh\"></i>\n          </button>\n        </div>\n\n        <div style=\"text-align: center\" class=\"row show-grid\">\n          <div class=\"col-12\">\n            <div>\n              Productos solicitados por <br>categoría\n              <!-- <i class=\"fa fa-refresh icon-refresh\" (click)=\"getDiagram1()\"></i> -->\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\">\n            <div [(ngModel)]=\"radioModelD1\" ngbRadioGroup\n               class=\"btn-group btn-toggle-group btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group btn-tn\">\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"left\"> Día\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"right\"> Mes\n              </label>\n            </div> \n          </div>\n          <div class=\"col-12\" *ngIf=\"radioModelD1 == 'left'\" style=\"margin-top: 10px;\">\n            <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label>Día</label>\n                <select id=\"dia\" name=\"dia\" class=\"form-control\" [(ngModel)]=\"diaD1\">\n                  <option [value]=\"dia\" *ngFor =\"let dia of dias\">{{dia}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label>Mes</label>\n                <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD1\">\n                  <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label>Año</label>\n                <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD1\">\n                  <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          </div>\n          <div class=\"col-12\" *ngIf=\"radioModelD1 != 'left'\" style=\"margin-top: 10px;\" >\n            <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label>Mes</label>\n                <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD1\">\n                  <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label>Año</label>\n                <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD1\">\n                  <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <div *ngIf=\"loadDiagram1\" style=\"height: 458px;\">\n          <div class=\"loader\" style=\"display:block; margin:auto;\"></div>\n        </div>\n        <div *ngIf=\"!loadDiagram1 && !diagram1\" style=\"height: 458px; text-align: center;\">\n          <p>Data no disponible.</p>\n        </div>\n       <!--  <chart class=\"diagrama\" type=\"pie\" *ngIf=\"!loadDiagram1 && categorias.length > 0\" [data]=\"dataD1\" [options]=\"optionsD1\"></chart> -->\n       <div *ngIf=\"!loadDiagram1 && diagram1\">\n         <ngx-chartjs-pie [dataDiagrama]=\"categorias\"></ngx-chartjs-pie>\n       </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-4\">\n    <nb-card>\n      <nb-card-header>\n\n        <div style=\"position: absolute; top: 0px; right:15px;\" >\n          <button  type=\"button\" class=\"btn btn-primary btn-primary btn-icon btn-tn\" title=\"Refresh\" (click)=\"getDiagram2()\">\n            <i class=\"fa fa-refresh icon-refresh\"></i>\n          </button>\n        </div>\n\n        <div style=\"text-align: center;\" class=\"row show-grid\">\n          <div class=\"col-12\">\n            <div>\n              Productos solicitados por <br>subcategoría\n              <!-- <i class=\"fa fa-refresh icon-refresh\" (click)=\"getDiagram2()\"></i> -->\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\">\n            <div [(ngModel)]=\"radioModelD2\" ngbRadioGroup\n               class=\"btn-group btn-toggle-group btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group btn-tn\">\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"left\"> Día\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"right\"> Mes\n              </label>\n            </div> \n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\" *ngIf=\"radioModelD2 == 'left'\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Día</label>\n                  <select id=\"dia\" name=\"dia\" class=\"form-control\" [(ngModel)]=\"diaD2\">\n                    <option [value]=\"dia\" *ngFor =\"let dia of dias\">{{dia}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Mes</label>\n                  <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD2\">\n                    <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Año</label>\n                  <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD2\">\n                    <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\" *ngIf=\"radioModelD2 != 'left'\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Mes</label>\n                  <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD2\">\n                    <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Año</label>\n                  <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD2\">\n                    <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <div *ngIf=\"loadDiagram2\" style=\"height: 458px;\">\n          <div class=\"loader\" style=\"display:block; margin:auto;\"></div>\n        </div>\n        <div *ngIf=\"!loadDiagram2 && !diagram2\" style=\"height: 458px; text-align: center;\">\n          <p>Data no disponible.</p>\n        </div>\n        <div *ngIf=\"!loadDiagram2 && diagram2\">\n         <ngx-chartjs-pie [dataDiagrama]=\"subcategorias\"></ngx-chartjs-pie>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-4\">\n    <nb-card>\n      <nb-card-header>\n\n        <div style=\"position: absolute; top: 0px; right:15px;\" >\n          <button  type=\"button\" class=\"btn btn-primary btn-icon btn-tn\" title=\"Refresh\" (click)=\"getDiagram3()\">\n            <i class=\"fa fa-refresh icon-refresh\"></i>\n          </button>\n        </div>\n\n        <div style=\"text-align: center;\" class=\"row show-grid\">\n          <div class=\"col-12\">\n            <div>\n              Productos solicitados por <br>Proveedor\n              <!-- <i class=\"fa fa-refresh icon-refresh\" (click)=\"getDiagram3()\"></i> -->\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\">\n            <div [(ngModel)]=\"radioModelD3\" ngbRadioGroup\n               class=\"btn-group btn-toggle-group btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group btn-tn\">\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"left\"> Día\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"right\"> Mes\n              </label>\n            </div> \n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\" *ngIf=\"radioModelD3 == 'left'\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Día</label>\n                  <select id=\"dia\" name=\"dia\" class=\"form-control\" [(ngModel)]=\"diaD3\">\n                    <option [value]=\"dia\" *ngFor =\"let dia of dias\">{{dia}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Mes</label>\n                  <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD3\">\n                    <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Año</label>\n                  <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD3\">\n                    <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\" *ngIf=\"radioModelD3 != 'left'\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Mes</label>\n                  <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD3\">\n                    <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Año</label>\n                  <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD3\">\n                    <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <div *ngIf=\"loadDiagram3\" style=\"height: 458px;\">\n          <div class=\"loader\" style=\"display:block; margin:auto;\"></div>\n        </div>\n        <div *ngIf=\"!loadDiagram3 && !diagram3\" style=\"height: 458px; text-align: center;\">\n          <p>Data no disponible.</p>\n        </div>\n        <div *ngIf=\"!loadDiagram3 && diagram3\">\n         <ngx-chartjs-pie [dataDiagrama]=\"establecimientos\"></ngx-chartjs-pie>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>\n\n        <div style=\"position: absolute; top: 0px; right:15px;\" >\n          <button  type=\"button\" class=\"btn btn-icon btn-tn\" title=\"Refresh\" (click)=\"getDiagram4()\">\n            <i class=\"fa fa-refresh icon-refresh\"></i>\n          </button>\n        </div>\n\n        <div style=\"text-align: center;\" class=\"row show-grid\">\n          <div class=\"col-12\">\n            <div>\n              Pedidos registrados por <br>hora\n              <!-- <i class=\"fa fa-refresh icon-refresh\" (click)=\"getDiagram4()\"></i> -->\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\">\n            <div [(ngModel)]=\"radioModelD4\" ngbRadioGroup\n               class=\"btn-group btn-toggle-group btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group btn-tn\">\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"left\"> Día\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"right\"> Mes\n              </label>\n            </div> \n          </div>\n          <div style=\"margin-top: 10px\" *ngIf=\"radioModelD4 == 'left'\" class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Día</label>\n                  <select id=\"dia\" name=\"dia\" class=\"form-control\" [(ngModel)]=\"diaD4\">\n                    <option [value]=\"dia\" *ngFor =\"let dia of dias\">{{dia}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Mes</label>\n                  <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD4\">\n                    <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Año</label>\n                  <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD4\">\n                    <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\" *ngIf=\"radioModelD4 != 'left'\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Mes</label>\n                  <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD4\">\n                    <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Año</label>\n                  <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD4\">\n                    <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <div *ngIf=\"loadDiagram4\" style=\"height: 458px;\">\n          <div class=\"loader\" style=\"display:block; margin:auto;\"></div>\n        </div>\n        <div *ngIf=\"!loadDiagram4 && !diagram4\" style=\"height: 458px; text-align: center;\">\n          <p>Data no disponible.</p>\n        </div>\n        <div *ngIf=\"!loadDiagram4 && diagram4\">\n         <ngx-chartjs-bar [dataDiagrama]=\"pedidosA\"></ngx-chartjs-bar>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>\n\n        <div style=\"position: absolute; top: 0px; right:15px;\" >\n            <button  type=\"button\" class=\"btn btn-icon btn-tn\" title=\"Refresh\" (click)=\"getTabla2()\">\n              <i class=\"fa fa-refresh icon-refresh\"></i>\n            </button>\n          </div>\n\n          <div style=\"text-align: center;\" class=\"row\">\n            <div class=\"col-12\">\n              <div>\n                Calificaciones <br>&nbsp;\n                <!-- <i class=\"fa fa-refresh icon-refresh\" (click)=\"getTabla2()\"></i> -->\n              </div>\n            </div>\n            <div style=\"margin-top: 10px\" class=\"col-12\">\n              <div [(ngModel)]=\"radioModelT2\" ngbRadioGroup\n                 class=\"btn-group btn-toggle-group btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group btn-tn\">\n                <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                  <input ngbButton type=\"radio\" value=\"left\"> Día\n                </label>\n                <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                  <input ngbButton type=\"radio\" value=\"right\"> Mes\n                </label>\n              </div> \n            </div>\n            <div style=\"margin-top: 10px\" class=\"col-12\" *ngIf=\"radioModelT2 == 'left'\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <label>Día</label>\n                    <select id=\"dia\" name=\"dia\" class=\"form-control\" [(ngModel)]=\"diaT2\">\n                      <option [value]=\"dia\" *ngFor =\"let dia of dias\">{{dia}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <label>Mes</label>\n                    <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesT2\">\n                      <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"form-group\">\n                    <label>Año</label>\n                    <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioT2\">\n                      <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div style=\"margin-top: 10px\" class=\"col-12\" *ngIf=\"radioModelT2 != 'left'\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <label>Mes</label>\n                    <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesT2\">\n                      <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <label>Año</label>\n                    <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioT2\">\n                      <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n      </nb-card-header>\n      <nb-card-body>\n\n          <div *ngIf=\"loadTabla2\" style=\"height: 458px;\">\n            <div class=\"loader\" style=\"display:block; margin:auto;\"></div>\n          </div>\n          <div *ngIf=\"!loadTabla2 && !tabla2\" style=\"height: 458px; text-align: center;\">\n            <p>Data no disponible.</p>\n          </div>\n          <div *ngIf=\"!loadTabla2 && tabla2\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th>\n                     Pedido\n                    </th>\n                    <th>\n                     Puntaje\n                    </th>\n                    <th>\n                     Comentario\n                    </th>\n                    <th>\n                     Proveedor\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of calificaciones\">\n                    <td class=\"text-center\">\n                      S00{{item.pedido_id}}\n                    </td>\n                    <td class=\"text-center\">\n                      <div>\n                        <ngb-rating [(rate)]=\"item.puntaje\" max=5>\n                          <ng-template let-fill=\"fill\">\n                            <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                              <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\n                              <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\n                            </span>\n                          </ng-template>\n                        </ngb-rating>\n                        <span class=\"current-rate\">{{item.puntaje}}</span>\n                      </div>\n                    </td>\n                    <td class=\"text-center\">\n                      {{item.comentario}}\n                    </td>\n                    <td class=\"text-center\">\n                      {{item.pedido.repartidor_nom}}\n                    </td>\n                    \n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<!-- <div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div> -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-default) .diagrama {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-default) .diagrama /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-default) ngx-chartjs-pie,\n:host-context(.nb-theme-default) ngx-chartjs-bar,\n:host-context(.nb-theme-default) ngx-chartjs-line,\n:host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-default) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-default) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-default) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-default) .tabla .star {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .tabla .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .tabla .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .tabla .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .tabla .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .tabla .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .tabla .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-default) .loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n:host-context(.nb-theme-cosmic) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-cosmic) .diagrama {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .diagrama /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-cosmic) ngx-chartjs-pie,\n:host-context(.nb-theme-cosmic) ngx-chartjs-bar,\n:host-context(.nb-theme-cosmic) ngx-chartjs-line,\n:host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-cosmic) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-cosmic) .tabla .star {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .tabla .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .tabla .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .tabla .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .tabla .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .tabla .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .tabla .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite; }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

// Mis imports







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(themeService, toasterService, http, router, rutaService) {
        this.themeService = themeService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.items = [{ title: 'Profile' }, { title: 'Log out' }];
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
        this.dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.anios = [];
        //Categorias mas vendidas
        this.categorias = [];
        this.loadDiagram1 = false;
        this.diagram1 = false;
        this.radioModelD1 = 'left';
        //Subcategorias mas vendidas
        this.subcategorias = [];
        this.loadDiagram2 = false;
        this.diagram2 = false;
        this.radioModelD2 = 'left';
        //Ventas por establecimiento
        this.establecimientos = [];
        this.loadDiagram3 = false;
        this.diagram3 = false;
        this.radioModelD3 = 'left';
        //Ventas por hora
        this.pedidosA = [];
        this.loadDiagram4 = false;
        this.diagram4 = false;
        this.radioModelD4 = 'left';
        //Ventas por hora (Cat comida)
        this.pedidosB = [];
        this.loadDiagram5 = false;
        this.diagram5 = false;
        this.radioModelD5 = 'left';
        //kms por repartidor
        this.repartidores = [];
        this.loadTabla1 = false;
        this.tabla1 = false;
        this.radioModelT1 = 'left';
        //calificaciones
        this.calificaciones = [];
        this.loadTabla2 = false;
        this.tabla2 = false;
        this.radioModelT2 = 'left';
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        //this.count_1 = 'Consultando.....';
        this.count_2 = 'Consultando.....';
        this.count_3 = 'Consultando.....';
        this.count_4 = 'Consultando.....';
        this.count_5 = 'Consultando.....';
        this.count_a = 'Consultando.....';
        this.count_i = 'Consultando.....';
        this.count_6 = 'Consultando.....';
        this.count_7 = 'Consultando.....';
        var fecha = new Date();
        //var fecha = Date.now();
        this.diaActual = fecha.getDate();
        this.mesActual = fecha.getMonth() + 1;
        this.anioActual = fecha.getFullYear();
        this.anios.push(this.anioActual);
        for (var i = 1; i < 5; i++) {
            this.anios.push(this.anioActual - i);
        }
        this.diaD1 = this.diaActual;
        this.mesD1 = this.mesActual;
        this.anioD1 = this.anioActual;
        this.diaD2 = this.diaActual;
        this.mesD2 = this.mesActual;
        this.anioD2 = this.anioActual;
        this.diaD3 = this.diaActual;
        this.mesD3 = this.mesActual;
        this.anioD3 = this.anioActual;
        this.diaD4 = this.diaActual;
        this.mesD4 = this.mesActual;
        this.anioD4 = this.anioActual;
        this.diaD5 = this.diaActual;
        this.mesD5 = this.mesActual;
        this.anioD5 = this.anioActual;
        this.diaT1 = this.diaActual;
        this.mesT1 = this.mesActual;
        this.anioT1 = this.anioActual;
        this.diaT2 = this.diaActual;
        this.mesT2 = this.mesActual;
        this.anioT2 = this.anioActual;
        //console.log(this.diaActual+'-'+this.mesActual+'-'+this.anioActual);
    }
    DashboardComponent.prototype.ngOnInit = function () {
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
        //this.themeService.changeTheme('cosmic');
        this.themeService.changeTheme('default');
        this.getContadores();
        setTimeout(function () {
            _this.getDiagram1();
            _this.getDiagram2();
            _this.getDiagram3();
            _this.getDiagram4();
            _this.getDiagram5();
        }, 5);
        setTimeout(function () {
            _this.getTabla1();
            _this.getTabla2();
        }, 8);
    };
    DashboardComponent.prototype.showToast = function (type, title, body) {
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
    //Obtener los contadores del dia
    DashboardComponent.prototype.getContadores = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/contadores?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.count_2 = _this.data.pedidos_aceptar;
            _this.count_3 = _this.data.pedidos_curso;
            _this.count_4 = _this.data.pedidos_finalizados;
            _this.count_5 = _this.data.pedidos_cancelados;
            _this.count_a = _this.data.repartidores_activos;
            _this.count_i = _this.data.repartidores_inactivos;
            _this.count_6 = _this.data.nuevos_repartidores;
            _this.count_7 = _this.data.nuevos_clientes;
            if (!_this.data.dinero_recaudado) {
                //this.count_4 = 0;
            }
            else {
                //this.count_4 = this.data.dinero_recaudado;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else {
                _this.showToast('info', 'Info!', 'Algo salió mal.');
            }
        });
    };
    //Obtener las cateogrias mas vendidas
    DashboardComponent.prototype.getDiagram1 = function () {
        var _this = this;
        if (this.radioModelD1 == 'left') {
            var dia = this.diaD1;
            var mes = this.mesD1;
            var anio = this.anioD1;
        }
        else {
            var dia = null;
            var mes = this.mesD1;
            var anio = this.anioD1;
        }
        this.diagram1 = false;
        this.loadDiagram1 = true;
        this.categorias = [];
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/diagram1?dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data1 = data;
            _this.categorias = _this.data1.categorias;
            _this.loadDiagram1 = false;
            if (_this.categorias.length > 0) {
                _this.diagram1 = true;
            }
            else {
                _this.diagram1 = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loadDiagram1 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    //Obtener las subcateogrias mas vendidas
    DashboardComponent.prototype.getDiagram2 = function () {
        var _this = this;
        if (this.radioModelD2 == 'left') {
            var dia = this.diaD2;
            var mes = this.mesD2;
            var anio = this.anioD2;
        }
        else {
            var dia = null;
            var mes = this.mesD2;
            var anio = this.anioD2;
        }
        this.diagram2 = false;
        this.loadDiagram2 = true;
        this.subcategorias = [];
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/diagram2?dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data2 = data;
            _this.subcategorias = _this.data2.subcategorias;
            _this.loadDiagram2 = false;
            if (_this.subcategorias.length > 0) {
                _this.diagram2 = true;
            }
            else {
                _this.diagram2 = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loadDiagram2 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    //Obtener las ventas por establecimiento
    DashboardComponent.prototype.getDiagram3 = function () {
        var _this = this;
        if (this.radioModelD3 == 'left') {
            var dia = this.diaD3;
            var mes = this.mesD3;
            var anio = this.anioD3;
        }
        else {
            var dia = null;
            var mes = this.mesD3;
            var anio = this.anioD3;
        }
        this.diagram3 = false;
        this.loadDiagram3 = true;
        this.establecimientos = [];
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/diagram3?dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data3 = data;
            _this.establecimientos = _this.data3.establecimientos;
            _this.loadDiagram3 = false;
            if (_this.establecimientos.length > 0) {
                _this.diagram3 = true;
            }
            else {
                _this.diagram3 = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loadDiagram3 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    //Obtener las ventas por hora
    DashboardComponent.prototype.getDiagram4 = function () {
        var _this = this;
        if (this.radioModelD4 == 'left') {
            var dia = this.diaD4;
            var mes = this.mesD4;
            var anio = this.anioD4;
        }
        else {
            var dia = null;
            var mes = this.mesD4;
            var anio = this.anioD4;
        }
        this.diagram4 = false;
        this.loadDiagram4 = true;
        this.pedidosA = [];
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/diagram4?dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data3 = data;
            _this.pedidosA = _this.data3.pedidos;
            _this.loadDiagram4 = false;
            if (_this.pedidosA.length > 0) {
                _this.diagram4 = true;
            }
            else {
                _this.diagram4 = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loadDiagram4 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    // this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    //Obtener las ventas por hora de la Categoria comida
    DashboardComponent.prototype.getDiagram5 = function () {
        var _this = this;
        if (this.radioModelD5 == 'left') {
            var dia = this.diaD5;
            var mes = this.mesD5;
            var anio = this.anioD5;
        }
        else {
            var dia = null;
            var mes = this.mesD5;
            var anio = this.anioD5;
        }
        this.diagram5 = false;
        this.loadDiagram5 = true;
        this.pedidosB = [];
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/diagram5?dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data5 = data;
            _this.pedidosB = _this.data5.pedidos;
            _this.loadDiagram5 = false;
            if (_this.pedidosB.length > 0) {
                _this.diagram5 = true;
            }
            else {
                _this.diagram5 = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loadDiagram5 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    //Obtener los km recorridos por repartidor
    DashboardComponent.prototype.getTabla1 = function () {
        var _this = this;
        if (this.radioModelT1 == 'left') {
            var dia = this.diaT1;
            var mes = this.mesT1;
            var anio = this.anioT1;
        }
        else {
            var dia = null;
            var mes = this.mesT1;
            var anio = this.anioT1;
        }
        this.tabla1 = false;
        this.loadTabla1 = true;
        this.repartidores = [];
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/tabla1?dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data6 = data;
            _this.repartidores = _this.data6.repartidores;
            _this.loadTabla1 = false;
            if (_this.repartidores.length > 0) {
                _this.tabla1 = true;
            }
            else {
                _this.tabla1 = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loadTabla1 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    //Obtener las calificaiones
    DashboardComponent.prototype.getTabla2 = function () {
        var _this = this;
        if (this.radioModelT2 == 'left') {
            var dia = this.diaT2;
            var mes = this.mesT2;
            var anio = this.anioT2;
        }
        else {
            var dia = null;
            var mes = this.mesT2;
            var anio = this.anioT2;
        }
        this.tabla2 = false;
        this.loadTabla2 = true;
        this.calificaciones = [];
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/tabla2?dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data7 = data;
            _this.calificaciones = _this.data7.calificaciones;
            _this.loadTabla2 = false;
            if (_this.calificaciones.length > 0) {
                _this.tabla2 = true;
            }
            else {
                _this.tabla2 = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loadTabla2 = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    //this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-dashboard',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/status-card/status-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rooms_room_selector_room_selector_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__temperature_temperature_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__temperature_temperature_dragger_temperature_dragger_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team_team_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kitten_kitten_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_cameras_security_cameras_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__electricity_electricity_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__electricity_electricity_chart_electricity_chart_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__weather_weather_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__solar_solar_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/solar/solar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rooms_player_player_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__traffic_traffic_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__traffic_traffic_chart_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__chartjs_mouvers_chartjs_bar_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chartjs_mouvers_chartjs_line_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__chartjs_mouvers_chartjs_pie_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__chartjs_mouvers_chartjs_multiple_xaxis_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-multiple-xaxis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__chartjs_mouvers_chartjs_bar_horizontal_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-bar-horizontal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__chartjs_mouvers_chartjs_radar_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/chartjs-mouvers/chartjs-radar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__echarts_mouvers_echarts_line_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__echarts_mouvers_echarts_pie_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__echarts_mouvers_echarts_bar_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__echarts_mouvers_echarts_multiple_xaxis_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-multiple-xaxis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__echarts_mouvers_echarts_area_stack_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-area-stack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__echarts_mouvers_echarts_bar_animation_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-bar-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__echarts_mouvers_echarts_radar_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-radar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//Mis imports

















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_22__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_23_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_21_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_20_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: false
                }),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__["a" /* StatusCardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__temperature_temperature_dragger_temperature_dragger_component__["a" /* TemperatureDraggerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__rooms_room_selector_room_selector_component__["a" /* RoomSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__temperature_temperature_component__["a" /* TemperatureComponent */],
                __WEBPACK_IMPORTED_MODULE_6__rooms_rooms_component__["a" /* RoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_11__kitten_kitten_component__["a" /* KittenComponent */],
                __WEBPACK_IMPORTED_MODULE_12__security_cameras_security_cameras_component__["a" /* SecurityCamerasComponent */],
                __WEBPACK_IMPORTED_MODULE_13__electricity_electricity_component__["a" /* ElectricityComponent */],
                __WEBPACK_IMPORTED_MODULE_14__electricity_electricity_chart_electricity_chart_component__["a" /* ElectricityChartComponent */],
                __WEBPACK_IMPORTED_MODULE_15__weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_17__rooms_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__solar_solar_component__["a" /* SolarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__traffic_traffic_component__["a" /* TrafficComponent */],
                __WEBPACK_IMPORTED_MODULE_19__traffic_traffic_chart_component__["a" /* TrafficChartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__chartjs_mouvers_chartjs_bar_component__["a" /* ChartjsBarComponent */],
                __WEBPACK_IMPORTED_MODULE_25__chartjs_mouvers_chartjs_line_component__["a" /* ChartjsLineComponent */],
                __WEBPACK_IMPORTED_MODULE_26__chartjs_mouvers_chartjs_pie_component__["a" /* ChartjsPieComponent */],
                __WEBPACK_IMPORTED_MODULE_27__chartjs_mouvers_chartjs_multiple_xaxis_component__["a" /* ChartjsMultipleXaxisComponent */],
                __WEBPACK_IMPORTED_MODULE_28__chartjs_mouvers_chartjs_bar_horizontal_component__["a" /* ChartjsBarHorizontalComponent */],
                __WEBPACK_IMPORTED_MODULE_29__chartjs_mouvers_chartjs_radar_component__["a" /* ChartjsRadarComponent */],
                __WEBPACK_IMPORTED_MODULE_30__echarts_mouvers_echarts_line_component__["a" /* EchartsLineComponent */],
                __WEBPACK_IMPORTED_MODULE_31__echarts_mouvers_echarts_pie_component__["a" /* EchartsPieComponent */],
                __WEBPACK_IMPORTED_MODULE_32__echarts_mouvers_echarts_bar_component__["a" /* EchartsBarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__echarts_mouvers_echarts_multiple_xaxis_component__["a" /* EchartsMultipleXaxisComponent */],
                __WEBPACK_IMPORTED_MODULE_34__echarts_mouvers_echarts_area_stack_component__["a" /* EchartsAreaStackComponent */],
                __WEBPACK_IMPORTED_MODULE_35__echarts_mouvers_echarts_bar_animation_component__["a" /* EchartsBarAnimationComponent */],
                __WEBPACK_IMPORTED_MODULE_36__echarts_mouvers_echarts_radar_component__["a" /* EchartsRadarComponent */],
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-area-stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsAreaStackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsAreaStackComponent = /** @class */ (function () {
    function EchartsAreaStackComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsAreaStackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: echarts.tooltipBackgroundColor,
                        },
                    },
                },
                legend: {
                    data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Mail marketing',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: 'Affiliate advertising',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: 'Video ad',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: 'Direct interview',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: 'Search engine',
                        type: 'line',
                        stack: 'Total amount',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                    },
                ],
            };
        });
    };
    EchartsAreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsAreaStackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-area-stack',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsAreaStackComponent);
    return EchartsAreaStackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-bar-animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsBarAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarAnimationComponent = /** @class */ (function () {
    function EchartsBarAnimationComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarAnimationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight, colors.infoLight],
                legend: {
                    data: ['bar', 'bar2'],
                    align: 'left',
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        data: xAxisData,
                        silent: false,
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        data: data1,
                        animationDelay: function (idx) {
                            return idx * 10;
                        },
                    },
                    {
                        name: 'bar2',
                        type: 'bar',
                        data: data2,
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        },
                    },
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                },
            };
            for (var i = 0; i < 100; i++) {
                xAxisData.push('Category ' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }
        });
    };
    EchartsBarAnimationComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsBarAnimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-bar-animation',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsBarAnimationComponent);
    return EchartsBarAnimationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarComponent = /** @class */ (function () {
    function EchartsBarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Score',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220],
                    },
                ],
            };
        });
    };
    EchartsBarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-bar',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsBarComponent);
    return EchartsBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsLineComponent = /** @class */ (function () {
    function EchartsLineComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsLineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.primary, colors.info],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}',
                },
                legend: {
                    left: 'left',
                    data: ['Line 1', 'Line 2', 'Line 3'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'log',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
                    },
                ],
            };
        });
    };
    EchartsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsLineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-line',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsLineComponent);
    return EchartsLineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-multiple-xaxis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsMultipleXaxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsMultipleXaxisComponent = /** @class */ (function () {
    function EchartsMultipleXaxisComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsMultipleXaxisComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.success, colors.info],
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross',
                    },
                },
                legend: {
                    data: ['2015 Precipitation', '2016 Precipitation'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    top: 70,
                    bottom: 50,
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.info,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2016-1',
                            '2016-2',
                            '2016-3',
                            '2016-4',
                            '2016-5',
                            '2016-6',
                            '2016-7',
                            '2016-8',
                            '2016-9',
                            '2016-10',
                            '2016-11',
                            '2016-12',
                        ],
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.success,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2015-1',
                            '2015-2',
                            '2015-3',
                            '2015-4',
                            '2015-5',
                            '2015-6',
                            '2015-7',
                            '2015-8',
                            '2015-9',
                            '2015-10',
                            '2015-11',
                            '2015-12',
                        ],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: '2015 Precipitation',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    },
                    {
                        name: '2016 Precipitation',
                        type: 'line',
                        smooth: true,
                        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
                    },
                ],
            };
        });
    };
    EchartsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsMultipleXaxisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-multiple-xaxis',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsMultipleXaxisComponent);
    return EchartsMultipleXaxisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsPieComponent = /** @class */ (function () {
    function EchartsPieComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsPieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                series: [
                    {
                        name: 'Countries',
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: [
                            { value: 335, name: 'Germany' },
                            { value: 310, name: 'France' },
                            { value: 234, name: 'Canada' },
                            { value: 135, name: 'Russia' },
                            { value: 1548, name: 'USA' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                        },
                    },
                ],
            };
        });
    };
    EchartsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsPieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-pie',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsPieComponent);
    return EchartsPieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/echarts-mouvers/echarts-radar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsRadarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsRadarComponent = /** @class */ (function () {
    function EchartsRadarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsRadarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.warning],
                tooltip: {},
                legend: {
                    data: ['Allocated Budget', 'Actual Spending'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                radar: {
                    name: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                    indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Techology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 },
                    ],
                    splitArea: {
                        areaStyle: {
                            color: 'transparent',
                        },
                    },
                },
                series: [
                    {
                        name: 'Budget vs Spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: 'Allocated Budget',
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: 'Actual Spending',
                            },
                        ],
                    },
                ],
            };
        });
    };
    EchartsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsRadarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-radar',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsRadarComponent);
    return EchartsRadarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  :host-context(.nb-theme-default) .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n:host-context(.nb-theme-cosmic) {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectricityChartComponent = /** @class */ (function () {
    function ElectricityChartComponent(theme) {
        this.theme = theme;
        var points = [490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630,
            720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130,
            145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340,
            340, 340, 340, 340, 340, 340, 340, 340];
        // const points = [];
        // let pointsCount = 100;
        // let min = -3;
        // let max = 3;
        // let xStep = (max - min) / pointsCount;
        //
        // for(let x = -3; x <= 3; x += xStep) {
        //   let res = x**3 - 5*x + 17;
        //   points.push(Math.round(res * 25));
        // }
        this.data = points.map(function (p, index) { return ({
            label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
            value: p,
        }); });
    }
    ElectricityChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var eTheme = config.variables.electricity;
            _this.option = {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: eTheme.tooltipLineColor,
                            width: eTheme.tooltipLineWidth,
                        },
                    },
                    textStyle: {
                        color: eTheme.tooltipTextColor,
                        fontSize: 20,
                        fontWeight: eTheme.tooltipFontWeight,
                    },
                    position: 'top',
                    backgroundColor: eTheme.tooltipBg,
                    borderColor: eTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} kWh',
                    extraCssText: eTheme.tooltipExtraCss,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    offset: 25,
                    data: _this.data.map(function (i) { return i.label; }),
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: eTheme.xAxisTextColor,
                            fontSize: 18,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                            width: '2',
                        },
                    },
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: eTheme.yAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                            },
                            emphasis: {
                                color: '#ffffff',
                                borderColor: eTheme.itemBorderColor,
                                borderWidth: 2,
                                opacity: 1,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.lineShadow,
                                shadowBlur: 6,
                                shadowOffsetY: 12,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.areaGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.areaGradTo,
                                    }]),
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                    {
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.shadowLineDarkBg,
                                shadowBlur: 14,
                                opacity: 1,
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                ],
            };
        });
    };
    ElectricityChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ElectricityChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-electricity-chart',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss")],
            template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ElectricityChartComponent);
    return ElectricityChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\n  <div class=\"consumption-table\">\n    <div class=\"table-header\">\n      <div>Electricity</div>\n      <div class=\"subtitle\">Consumption</div>\n    </div>\n\n    <nb-tabset fullWidth>\n      <nb-tab *ngFor=\"let year of data\" [tabTitle]=\"year.title\" [active]=\"year.active\">\n        <div class=\"stats-month\" *ngFor=\"let month of year.months\">\n          <div>\n            <span class=\"month\">{{ month.month }}</span>\n            <span class=\"delta\" [ngClass]=\"{ 'down': month.down }\">{{ month.delta }}</span>\n          </div>\n          <div class=\"results\">\n            <b>{{ month.kWatts }}</b> kWh / <b>{{ month.cost }}</b> USD\n          </div>\n        </div>\n      </nb-tab>\n    </nb-tabset>\n  </div>\n\n  <div class=\"chart-container\">\n    <div class=\"chart-header\">\n      <div class=\"header-stats\">\n        <div class=\"stats-block\">\n          <div class=\"subtitle\">Consumed</div>\n          <div>\n            <span class=\"value\">816</span>\n            <span class=\"unit\">kWh</span>\n          </div>\n        </div>\n\n        <div class=\"stats-block\">\n          <div class=\"subtitle\">Spent</div>\n          <div>\n            <span class=\"value\">291</span>\n            <span class=\"unit\">USD</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"dropdown\" ngbDropdown>\n        <button type=\"button\" ngbDropdownToggle class=\"btn\"\n                [ngClass]=\"{ 'btn-outline-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n          {{ type }}\n        </button>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu>\n          <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n        </ul>\n      </div>\n\n    </div>\n    <ngx-electricity-chart></ngx-electricity-chart>\n  </div>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .consumption-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 2px 12px 0 #dfe3eb; }\n\n:host-context(.nb-theme-default) .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600;\n  font-size: 1.25rem; }\n  :host-context(.nb-theme-default) .table-header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h6 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header .subtitle {\n    color: #a4abb3;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) nb-tabset /deep/ {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #ebeff5;\n    border-radius: 0.375rem 0.375rem 0 0; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #0b417a; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\n:host-context(.nb-theme-default) .stats-month {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1.25rem;\n  color: #a4abb3; }\n  :host-context(.nb-theme-default) .stats-month:not(:first-child) {\n    border-top: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #26c6da; }\n    :host-context(.nb-theme-default) .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #26c6da; }\n    :host-context(.nb-theme-default) .stats-month .delta.down {\n      color: #305e8e; }\n      :host-context(.nb-theme-default) .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #305e8e;\n        border-bottom: none; }\n  :host-context(.nb-theme-default) .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n    :host-context(.nb-theme-default) .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .chart-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  background-image: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .chart-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n\n:host-context(.nb-theme-default) .header-stats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) .stats-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a4abb3;\n  padding: 0 1.5rem;\n  border-right: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 130px; }\n\n@media (max-width: 1599px) {\n  :host-context(.nb-theme-default) .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n\n@media (min-width: 768px) and (max-width: 1399px) {\n  :host-context(.nb-theme-default) .consumption-table {\n    display: none; } }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default) .chart-header {\n    padding: 1rem; }\n  :host-context(.nb-theme-default) .dropdown {\n    min-width: 100px; }\n    :host-context(.nb-theme-default) .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) .consumption-table {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .stats-block {\n    padding: 0; }\n    :host-context(.nb-theme-default) .stats-block:first-child {\n      padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) .stats-block .subtitle {\n      font-size: 1rem; }\n    :host-context(.nb-theme-default) .stats-block .value {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) .stats-block .unit {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .consumption-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6); }\n\n:host-context(.nb-theme-cosmic) .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500;\n  font-size: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .table-header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h6 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header .subtitle {\n    color: #76f8f6;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) nb-tabset /deep/ {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #2f296b;\n    border-radius: 0.5rem 0.5rem 0 0; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #0b417a; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\n:host-context(.nb-theme-cosmic) .stats-month {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1.25rem;\n  color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) .stats-month:not(:first-child) {\n    border-top: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff5680; }\n    :host-context(.nb-theme-cosmic) .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff5680; }\n    :host-context(.nb-theme-cosmic) .stats-month .delta.down {\n      color: #305e8e; }\n      :host-context(.nb-theme-cosmic) .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #305e8e;\n        border-bottom: none; }\n  :host-context(.nb-theme-cosmic) .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n    :host-context(.nb-theme-cosmic) .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .chart-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .chart-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n\n:host-context(.nb-theme-cosmic) .header-stats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) .stats-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #76f8f6;\n  padding: 0 1.5rem;\n  border-right: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 130px; }\n\n:host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active {\n  background-color: #0b417a;\n  border-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active::before {\n    display: none; }\n\n:host-context(.nb-theme-cosmic) .stats-block .value {\n  font-weight: 500; }\n\n@media (max-width: 1599px) {\n  :host-context(.nb-theme-cosmic) .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n\n@media (min-width: 768px) and (max-width: 1399px) {\n  :host-context(.nb-theme-cosmic) .consumption-table {\n    display: none; } }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic) .chart-header {\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .dropdown {\n    min-width: 100px; }\n    :host-context(.nb-theme-cosmic) .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) .consumption-table {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .stats-block {\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .stats-block:first-child {\n      padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .subtitle {\n      font-size: 1rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .value {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .unit {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__ = __webpack_require__("../../../../../src/app/@core/data/electricity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectricityComponent = /** @class */ (function () {
    function ElectricityComponent(eService, themeService) {
        var _this = this;
        this.eService = eService;
        this.themeService = themeService;
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.data = this.eService.getData();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    ElectricityComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ElectricityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-electricity',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__["a" /* ElectricityService */], __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ElectricityComponent);
    return ElectricityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\n  <nb-card-body>\n    <div class=\"picture\" style.background-image=\"url('assets/images/kitten-{{currentTheme}}.png')\"></div>\n\n    <div class=\"details\">\n      <div class=\"title\">\n        React Native UI Kitten\n      </div>\n      <div class=\"description\">\n        React Native UI Kitten is a framework that contains a set of commonly used UI components styled in a similar way. The most awesome thing: you can change themes on the fly by just passing a different set of variables. 100% native. Give our kitten a try!\n      </div>\n    </div>\n  </nb-card-body>\n\n\n  <nb-card-footer>\n    <a href=\"https://akveo.github.io/react-native-ui-kitten\" target=\"_blank\">\n      <i class=\"ion-ios-world\"></i>\n    </a>\n    <a href=\"https://itunes.apple.com/us/app/kitten-tricks/id1246143230\" target=\"_blank\">\n      <i class=\"ion-social-apple\"></i>\n    </a>\n    <a href=\"https://play.google.com/store/apps/details?id=com.akveo.kittenTricks\" target=\"_blank\">\n      <i class=\"ion-social-android\"></i>\n    </a>\n    <a href=\"https://github.com/akveo/react-native-ui-kitten\" target=\"_blank\">\n      <i class=\"ion-social-github\"></i>\n    </a>\n  </nb-card-footer>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0; }\n\n:host-context(.nb-theme-default) .picture {\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n:host-context(.nb-theme-default) .details {\n  padding: 1.25rem 1.25rem 0; }\n  :host-context(.nb-theme-default) .details .title {\n    font-family: Exo;\n    font-weight: 600;\n    color: #2a2a2a;\n    font-size: 1.5rem;\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-default) .details .description {\n    text-align: justify;\n    color: #4b4b4b;\n    font-weight: 300;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: calc(1rem * 8 * 1.25); }\n\n:host-context(.nb-theme-default) nb-card-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0.75rem 0;\n  border: none; }\n  :host-context(.nb-theme-default) nb-card-footer a {\n    text-decoration: none;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card-footer a:hover {\n      color: #2a2a2a; }\n    :host-context(.nb-theme-default) nb-card-footer a i {\n      font-size: 1.75rem; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) .picture {\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n:host-context(.nb-theme-cosmic) .details {\n  padding: 1.25rem 1.25rem 0; }\n  :host-context(.nb-theme-cosmic) .details .title {\n    font-family: Exo;\n    font-weight: 600;\n    color: #ffffff;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    font-weight: 500; }\n  :host-context(.nb-theme-cosmic) .details .description {\n    text-align: justify;\n    color: #d1d1ff;\n    font-weight: 300;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: calc(1rem * 8 * 1.25); }\n\n:host-context(.nb-theme-cosmic) nb-card-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0.75rem 0;\n  border: none; }\n  :host-context(.nb-theme-cosmic) nb-card-footer a {\n    text-decoration: none;\n    color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) nb-card-footer a:hover {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card-footer a i {\n      font-size: 1.75rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KittenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KittenComponent = /** @class */ (function () {
    function KittenComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    KittenComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    KittenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-kitten',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], KittenComponent);
    return KittenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">My Playlist</div>\n\n<div class=\"body\">\n\n  <div class=\"track-info\">\n    <div class=\"cover\" style.background-image=\"url('{{track.cover}}')\"></div>\n    <div class=\"details\">\n      <h4>{{ track.name }}</h4>\n      <span>{{ track.artist }}</span>\n    </div>\n  </div>\n\n  <div class=\"progress-wrap\">\n    <input type=\"range\" class=\"progress\" [value]=\"getProgress()\" min=\"0\" max=\"100\" step=\"0.01\"\n           (input)=\"setProgress(duration.value)\" #duration>\n    <div class=\"progress-foreground\" [style.width.%]=\"getProgress()\"></div>\n  </div>\n\n  <div class=\"timing\">\n    <small class=\"current\">{{ player.currentTime | timing }}</small>\n    <small class=\"remaining\">- {{ player.duration - player.currentTime | timing }}</small>\n  </div>\n\n  <div class=\"controls\">\n    <i class=\"nb-shuffle shuffle\" [class.active]=\"shuffle\" (click)=\"toggleShuffle()\"></i>\n    <i class=\"nb-skip-backward prev\" (click)=\"prev()\"></i>\n    <i class=\"play\" [class.nb-play]=\"player.paused\" [class.nb-pause]=\"!player.paused\" (click)=\"playPause()\"></i>\n    <i class=\"nb-skip-forward next\" (click)=\"next()\"></i>\n    <i class=\"nb-loop loop\" [class.active]=\"player.loop\" (click)=\"toggleLoop()\"></i>\n  </div>\n\n</div>\n\n<div class=\"footer\">\n\n  <div class=\"volume\">\n    <i class=\"nb-volume-mute\"></i>\n    <div class=\"progress-wrap\">\n      <input type=\"range\" class=\"progress\" [value]=\"getVolume()\" max=\"100\"\n             (input)=\"setVolume(volume.value)\" #volume>\n      <div class=\"progress-foreground\" [style.width.%]=\"getVolume()\"></div>\n    </div>\n    <i class=\"nb-volume-high\"></i>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n  :host-context(.nb-theme-default) .header {\n    padding: 1.25rem;\n    border-bottom: 1px solid #ebeef2;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 1.125rem;\n    font-weight: 600; }\n    :host-context(.nb-theme-default) .header h1 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h2 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h3 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h4 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h5 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h6 {\n      margin: 0; }\n  :host-context(.nb-theme-default) .body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host-context(.nb-theme-default) .footer {\n    padding: 1.25rem;\n    border-top: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .track-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .track-info .cover {\n      border-radius: 0.1875rem;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 10rem;\n      height: 10rem; }\n    :host-context(.nb-theme-default) .track-info .details {\n      text-align: center;\n      padding-top: 1.5rem; }\n      :host-context(.nb-theme-default) .track-info .details span {\n        color: #a4abb3; }\n  :host-context(.nb-theme-default) .progress-wrap {\n    position: relative;\n    height: 1rem; }\n    :host-context(.nb-theme-default) .progress-wrap .progress-foreground {\n      background-color: #0b417a;\n      height: 2px;\n      position: absolute;\n      margin-top: calc(0.75rem - 1px);\n      width: 100px; }\n    :host-context(.nb-theme-default) .progress-wrap .progress {\n      -webkit-appearance: none;\n      width: 100%;\n      background: transparent;\n      height: 1.5rem;\n      outline: none;\n      position: absolute; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #0b417a;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #0b417a;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #0b417a;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n  :host-context(.nb-theme-default) .timing {\n    padding-top: 0.5rem;\n    margin: 0 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #a4abb3; }\n  :host-context(.nb-theme-default) .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem 2rem 1rem;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto; }\n    :host-context(.nb-theme-default) .controls i {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n    :host-context(.nb-theme-default) .controls .shuffle, :host-context(.nb-theme-default) .controls .loop {\n      font-size: 1.5rem;\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) .controls .shuffle.active, :host-context(.nb-theme-default) .controls .loop.active {\n        color: #0b417a; }\n    :host-context(.nb-theme-default) .controls .prev, :host-context(.nb-theme-default) .controls .next {\n      width: 3.5rem;\n      height: 3.5rem;\n      border: 2px solid #ebeef2;\n      border-radius: 50%;\n      font-size: 1.75rem; }\n    :host-context(.nb-theme-default) .controls .play {\n      font-size: 2rem; }\n  :host-context(.nb-theme-default) .volume {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    position: relative;\n    max-width: 400px; }\n    :host-context(.nb-theme-default) .volume i {\n      font-size: 1.5rem;\n      margin: 0.25rem;\n      color: #a4abb3; }\n    :host-context(.nb-theme-default) .volume .progress-wrap {\n      height: 2.25rem;\n      margin: 0;\n      width: 80%; }\n      :host-context(.nb-theme-default) .volume .progress-wrap .progress-foreground {\n        margin-top: calc(1rem + 1px);\n        z-index: 0; }\n      :host-context(.nb-theme-default) .volume .progress-wrap .progress {\n        height: 2.25rem; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-moz-range-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-ms-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n  :host-context(.nb-theme-default).collapsed {\n    border: none;\n    height: 4.5rem; }\n    :host-context(.nb-theme-default).collapsed .header {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .body {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    :host-context(.nb-theme-default).collapsed .footer {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .track-info {\n      height: 4.5rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n      :host-context(.nb-theme-default).collapsed .track-info .cover {\n        height: 4.5rem;\n        width: 4.5rem;\n        border-radius: 0 0 0 0.375rem;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none; }\n      :host-context(.nb-theme-default).collapsed .track-info .details {\n        margin-left: 0.875rem;\n        text-align: left;\n        padding: 0; }\n        :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n          margin-bottom: 0.125rem; }\n    :host-context(.nb-theme-default).collapsed .progress-wrap {\n      width: calc(100% - 6rem);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      position: absolute;\n      left: 0;\n      margin-top: calc(-0.75rem + 1px);\n      margin-left: calc(4.5rem + 0.75rem); }\n    :host-context(.nb-theme-default).collapsed .timing {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .controls {\n      padding: 0 1rem 0 0;\n      max-width: inherit;\n      width: inherit;\n      margin: 0; }\n      :host-context(.nb-theme-default).collapsed .controls i {\n        width: inherit;\n        height: inherit; }\n      :host-context(.nb-theme-default).collapsed .controls .prev, :host-context(.nb-theme-default).collapsed .controls .shuffle, :host-context(.nb-theme-default).collapsed .controls .loop {\n        display: none; }\n      :host-context(.nb-theme-default).collapsed .controls .play, :host-context(.nb-theme-default).collapsed .controls .next {\n        font-size: 2rem;\n        border: none; }\n    :host-context(.nb-theme-default).collapsed .volume {\n      display: none; }\n    @media (max-width: 767px) {\n      :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n        font-size: 1.25rem; }\n      :host-context(.nb-theme-default).collapsed .track-info .details span {\n        font-size: 0.875rem; } }\n    @media (max-width: 575px) {\n      :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n        font-size: 1rem; }\n      :host-context(.nb-theme-default).collapsed .track-info .details span {\n        font-size: 0.75rem;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: calc(0.75rem * 1.25); } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n  :host-context(.nb-theme-cosmic) .header {\n    padding: 1.25rem;\n    border-bottom: 1px solid #342e73;\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 1.125rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-cosmic) .header h1 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h2 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h3 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h4 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h5 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h6 {\n      margin: 0; }\n  :host-context(.nb-theme-cosmic) .body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host-context(.nb-theme-cosmic) .footer {\n    padding: 1.25rem;\n    border-top: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .track-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .track-info .cover {\n      border-radius: 0.25rem;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 10rem;\n      height: 10rem; }\n    :host-context(.nb-theme-cosmic) .track-info .details {\n      text-align: center;\n      padding-top: 1.5rem; }\n      :host-context(.nb-theme-cosmic) .track-info .details span {\n        color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) .progress-wrap {\n    position: relative;\n    height: 1rem; }\n    :host-context(.nb-theme-cosmic) .progress-wrap .progress-foreground {\n      background-color: #0b417a;\n      height: 2px;\n      position: absolute;\n      margin-top: calc(0.75rem - 1px);\n      width: 100px;\n      background-color: #00f9a6; }\n    :host-context(.nb-theme-cosmic) .progress-wrap .progress {\n      -webkit-appearance: none;\n      width: 100%;\n      background: transparent;\n      height: 1.5rem;\n      outline: none;\n      position: absolute; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #0b417a;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #0b417a;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #0b417a;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .timing {\n    padding-top: 0.5rem;\n    margin: 0 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem 2rem 1rem;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto; }\n    :host-context(.nb-theme-cosmic) .controls i {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .controls .shuffle, :host-context(.nb-theme-cosmic) .controls .loop {\n      font-size: 1.5rem;\n      color: #76f8f6; }\n      :host-context(.nb-theme-cosmic) .controls .shuffle.active, :host-context(.nb-theme-cosmic) .controls .loop.active {\n        color: #0b417a;\n        color: #00f9a6; }\n    :host-context(.nb-theme-cosmic) .controls .prev, :host-context(.nb-theme-cosmic) .controls .next {\n      width: 3.5rem;\n      height: 3.5rem;\n      border: 2px solid #342e73;\n      border-radius: 50%;\n      font-size: 1.75rem; }\n    :host-context(.nb-theme-cosmic) .controls .play {\n      font-size: 2rem; }\n  :host-context(.nb-theme-cosmic) .volume {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    position: relative;\n    max-width: 400px; }\n    :host-context(.nb-theme-cosmic) .volume i {\n      font-size: 1.5rem;\n      margin: 0.25rem;\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .volume .progress-wrap {\n      height: 2.25rem;\n      margin: 0;\n      width: 80%; }\n      :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress-foreground {\n        margin-top: calc(1rem + 1px);\n        z-index: 0; }\n      :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress {\n        height: 2.25rem; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(118, 248, 246, 0.4);\n          border: solid 1px rgba(118, 248, 246, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-moz-range-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(118, 248, 246, 0.4);\n          border: solid 1px rgba(118, 248, 246, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-ms-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(118, 248, 246, 0.4);\n          border: solid 1px rgba(118, 248, 246, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n  :host-context(.nb-theme-cosmic).collapsed {\n    border: none;\n    height: 4.5rem; }\n    :host-context(.nb-theme-cosmic).collapsed .header {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .body {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    :host-context(.nb-theme-cosmic).collapsed .footer {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .track-info {\n      height: 4.5rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .cover {\n        height: 4.5rem;\n        width: 4.5rem;\n        border-radius: 0 0 0 0.5rem;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details {\n        margin-left: 0.875rem;\n        text-align: left;\n        padding: 0; }\n        :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n          margin-bottom: 0.125rem; }\n    :host-context(.nb-theme-cosmic).collapsed .progress-wrap {\n      width: calc(100% - 6rem);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      position: absolute;\n      left: 0;\n      margin-top: calc(-0.75rem + 1px);\n      margin-left: calc(4.5rem + 0.75rem); }\n    :host-context(.nb-theme-cosmic).collapsed .timing {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .controls {\n      padding: 0 1rem 0 0;\n      max-width: inherit;\n      width: inherit;\n      margin: 0; }\n      :host-context(.nb-theme-cosmic).collapsed .controls i {\n        width: inherit;\n        height: inherit; }\n      :host-context(.nb-theme-cosmic).collapsed .controls .prev, :host-context(.nb-theme-cosmic).collapsed .controls .shuffle, :host-context(.nb-theme-cosmic).collapsed .controls .loop {\n        display: none; }\n      :host-context(.nb-theme-cosmic).collapsed .controls .play, :host-context(.nb-theme-cosmic).collapsed .controls .next {\n        font-size: 2rem;\n        border: none; }\n    :host-context(.nb-theme-cosmic).collapsed .volume {\n      display: none; }\n    @media (max-width: 767px) {\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n        font-size: 1.25rem; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details span {\n        font-size: 0.875rem; } }\n    @media (max-width: 575px) {\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n        font-size: 1rem; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details span {\n        font-size: 0.75rem;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: calc(0.75rem * 1.25); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_player_service__ = __webpack_require__("../../../../../src/app/@core/data/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(playerService) {
        this.playerService = playerService;
        this.track = this.playerService.random();
        this.createPlayer();
    }
    PlayerComponent.prototype.ngOnDestroy = function () {
        this.player.pause();
        this.player.src = '';
        this.player.load();
    };
    PlayerComponent.prototype.prev = function () {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.prev();
            }
        }
        this.reload();
    };
    PlayerComponent.prototype.next = function () {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.next();
            }
        }
        this.reload();
    };
    PlayerComponent.prototype.playPause = function () {
        if (this.player.paused) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    PlayerComponent.prototype.toggleShuffle = function () {
        this.shuffle = !this.shuffle;
    };
    PlayerComponent.prototype.toggleLoop = function () {
        this.player.loop = !this.player.loop;
    };
    PlayerComponent.prototype.setVolume = function (volume) {
        this.player.volume = volume / 100;
    };
    PlayerComponent.prototype.getVolume = function () {
        return this.player.volume * 100;
    };
    PlayerComponent.prototype.setProgress = function (duration) {
        this.player.currentTime = this.player.duration * duration / 100;
    };
    PlayerComponent.prototype.getProgress = function () {
        return this.player.currentTime / this.player.duration * 100 || 0;
    };
    PlayerComponent.prototype.createPlayer = function () {
        var _this = this;
        this.player = new Audio();
        this.player.onended = function () { return _this.next(); };
        this.setTrack();
    };
    PlayerComponent.prototype.reload = function () {
        this.setTrack();
        this.player.play();
    };
    PlayerComponent.prototype.setTrack = function () {
        this.player.src = this.track.url;
        this.player.load();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsed'),
        __metadata("design:type", Boolean)
    ], PlayerComponent.prototype, "collapsed", void 0);
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-player',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_player_service__["a" /* PlayerService */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">Room Management</div>\n<div class=\"room-selector\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n       [attr.viewBox]=\"viewBox\" preserveAspectRatio=\"xMidYMid\">\n    <defs>\n\n      <filter id=\"f2\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\">\n        <feGaussianBlur result=\"blurOut\" in=\"StrokePaint\" stdDeviation=\"3\"/>\n      </filter>\n\n      <pattern id=\"New_Pattern_Swatch_1\" data-name=\"New Pattern Swatch 1\" width=\"60\" height=\"60\"\n               patternUnits=\"userSpaceOnUse\" viewBox=\"0 0 60 60\">\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"123.26\" x2=\"3.26\" y2=\"6.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"133.26\" x2=\"13.26\" y2=\"16.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"143.26\" x2=\"23.26\" y2=\"26.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"153.26\" x2=\"33.26\" y2=\"36.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"163.26\" x2=\"43.26\" y2=\"46.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"173.26\" x2=\"53.26\" y2=\"56.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"123.26\" x2=\"63.26\" y2=\"6.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"133.26\" x2=\"73.26\" y2=\"16.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"143.26\" x2=\"83.26\" y2=\"26.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"153.26\" x2=\"93.26\" y2=\"36.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"163.26\" x2=\"103.26\" y2=\"46.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"173.26\" x2=\"113.26\" y2=\"56.74\"/>\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"123.26\" x2=\"123.26\" y2=\"6.74\"/>\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"133.26\" x2=\"133.26\" y2=\"16.74\"/>\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"143.26\" x2=\"143.26\" y2=\"26.74\"/>\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"153.26\" x2=\"153.26\" y2=\"36.74\"/>\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"163.26\" x2=\"163.26\" y2=\"46.74\"/>\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"173.26\" x2=\"173.26\" y2=\"56.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"63.26\" x2=\"3.26\" y2=\"-53.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"73.26\" x2=\"13.26\" y2=\"-43.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"83.26\" x2=\"23.26\" y2=\"-33.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"93.26\" x2=\"33.26\" y2=\"-23.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"103.26\" x2=\"43.26\" y2=\"-13.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"113.26\" x2=\"53.26\" y2=\"-3.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"63.26\" x2=\"63.26\" y2=\"-53.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"73.26\" x2=\"73.26\" y2=\"-43.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"83.26\" x2=\"83.26\" y2=\"-33.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"93.26\" x2=\"93.26\" y2=\"-23.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"103.26\" x2=\"103.26\" y2=\"-13.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"113.26\" x2=\"113.26\" y2=\"-3.26\"/>\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"63.26\" x2=\"123.26\" y2=\"-53.26\"/>\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"73.26\" x2=\"133.26\" y2=\"-43.26\"/>\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"83.26\" x2=\"143.26\" y2=\"-33.26\"/>\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"93.26\" x2=\"153.26\" y2=\"-23.26\"/>\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"103.26\" x2=\"163.26\" y2=\"-13.26\"/>\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"113.26\" x2=\"173.26\" y2=\"-3.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"3.26\" x2=\"3.26\" y2=\"-113.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"13.26\" x2=\"13.26\" y2=\"-103.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"23.26\" x2=\"23.26\" y2=\"-93.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"33.26\" x2=\"33.26\" y2=\"-83.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"43.26\" x2=\"43.26\" y2=\"-73.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"53.26\" x2=\"53.26\" y2=\"-63.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"3.26\" x2=\"63.26\" y2=\"-113.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"13.26\" x2=\"73.26\" y2=\"-103.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"23.26\" x2=\"83.26\" y2=\"-93.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"33.26\" x2=\"93.26\" y2=\"-83.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"43.26\" x2=\"103.26\" y2=\"-73.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"53.26\" x2=\"113.26\" y2=\"-63.26\"/>\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"3.26\" x2=\"123.26\" y2=\"-113.26\"/>\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"13.26\" x2=\"133.26\" y2=\"-103.26\"/>\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"23.26\" x2=\"143.26\" y2=\"-93.26\"/>\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"33.26\" x2=\"153.26\" y2=\"-83.26\"/>\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"43.26\" x2=\"163.26\" y2=\"-73.26\"/>\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"53.26\" x2=\"173.26\" y2=\"-63.26\"/>\n      </pattern>\n    </defs>\n\n    <g>\n      <path class=\"room-border\" [attr.d]=\"border.d\" *ngFor=\"let border of roomSvg.borders\" />\n    </g>\n\n    <g>\n      <path class=\"stroked-element\" [attr.d]=\"strokedArea.d\" *ngFor=\"let strokedArea of roomSvg.stokedAreas\"/>\n    </g>\n\n    <g [attr.id]=\"room.id\" [class.selected-room]=\"selectedRoom == room.id\" *ngFor=\"let room of sortedRooms\">\n      <path class=\"room-bg\" (click)=\"selectRoom(room.id)\" [attr.d]=\"room.area.d\" [style.filter]=\"isIE || isFirefox ? 'inherit': ''\" />\n      <path class=\"room-border\" [attr.d]=\"room.border.d\" />\n      <path class=\"room-border room-border-glow\" [attr.d]=\"room.border.d\" [style.filter]=\"isIE || isFirefox ? 'inherit': ''\" />\n      <text class=\"room-text\" (click)=\"selectRoom(room.id)\" text-anchor=\"middle\"\n            [attr.x]=\"room.name.x\" [attr.y]=\"room.name.y\">{{room.name.text}}</text>\n    </g>\n  </svg>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) svg {\n  width: 100%; }\n\n:host-context(.nb-theme-default) .stroke-pattern {\n  fill: none;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  opacity: 0.1;\n  stroke-width: 1px; }\n\n:host-context(.nb-theme-default) .stroked-element {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: url(\"#New_Pattern_Swatch_1\"); }\n\n:host-context(.nb-theme-default) .room-border {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: none; }\n\n:host-context(.nb-theme-default) .room-bg {\n  fill: #ffffff;\n  stroke: transparent;\n  cursor: pointer;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-default) .room-bg-border-grad {\n  fill: none;\n  stroke: none;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-default) .room-text {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  fill: #a4abb3; }\n\n:host-context(.nb-theme-default) .selected-room {\n  z-index: 40; }\n  :host-context(.nb-theme-default) .selected-room .room-text {\n    fill: #2a2a2a;\n    font-weight: 500; }\n  :host-context(.nb-theme-default) .selected-room .room-border {\n    stroke: #0b417a; }\n\n:host-context(.nb-theme-default) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600;\n  border-bottom: none;\n  padding-bottom: 0; }\n  :host-context(.nb-theme-default) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-cosmic) svg {\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .stroke-pattern {\n  fill: none;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  opacity: 0.1;\n  stroke-width: 1px; }\n\n:host-context(.nb-theme-cosmic) .stroked-element {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: url(\"#New_Pattern_Swatch_1\"); }\n\n:host-context(.nb-theme-cosmic) .room-border {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: none; }\n\n:host-context(.nb-theme-cosmic) .room-bg {\n  fill: #3d3780;\n  stroke: transparent;\n  cursor: pointer;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-cosmic) .room-bg-border-grad {\n  fill: none;\n  stroke: none;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-cosmic) .room-text {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  fill: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .selected-room {\n  z-index: 40; }\n  :host-context(.nb-theme-cosmic) .selected-room .room-text {\n    fill: #ffffff;\n    font-weight: 500; }\n  :host-context(.nb-theme-cosmic) .selected-room .room-border {\n    stroke: #0b417a; }\n\n:host-context(.nb-theme-cosmic) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500;\n  border-bottom: none;\n  padding-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-cosmic) .stroke-pattern, :host-context(.nb-theme-cosmic) .stroked-element, :host-context(.nb-theme-cosmic) .room-border {\n  stroke: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .room-text {\n  fill: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-text {\n  font-weight: 400; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-bg {\n  fill: rgba(0, 255, 170, 0.2);\n  -webkit-filter: url(\"#f2\");\n          filter: url(\"#f2\"); }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-border {\n  stroke: #00f9a6; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-border-glow {\n  -webkit-filter: url(\"#f2\");\n          filter: url(\"#f2\"); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomSelectorComponent = /** @class */ (function () {
    function RoomSelectorComponent() {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sortedRooms = [];
        this.viewBox = '-20 -20 618.88 407.99';
        this.isIE = !!(navigator.userAgent.match(/Trident/)
            || navigator.userAgent.match(/MSIE/)
            || navigator.userAgent.match(/Edge/));
        this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
        this.roomSvg = {
            borders: [{
                    d: 'M186.21,130.05H216.37V160H186.21Z',
                }],
            stokedAreas: [
                { d: 'M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z' },
                { d: 'M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z' },
                { d: 'M216.37,49.82H358.8V92.5H216.37Z' },
            ],
            rooms: [
                {
                    id: '0',
                    name: { text: 'Kitchen', x: 142, y: 240.8 },
                    area: { d: 'M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z' },
                    border: { d: 'M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,' +
                            '130H186.21V160H218.5' },
                },
                {
                    id: '1',
                    name: { text: 'Bedroom', x: 109, y: 66 },
                    area: { d: 'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09,' +
                            '6.09,0,0,0,8.09,130H96Z' },
                    border: { d: 'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09' +
                            ',6.09,0,0,0,8.09,130H96' },
                },
                {
                    id: '2',
                    name: { text: 'Living Room', x: 468, y: 134 },
                    area: { d: 'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
                            ',6.09,0,0,1-6.09,6.09h-212Z' },
                    border: { d: 'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
                            ',6.09,0,0,1-6.09,6.09h-212' },
                },
                {
                    id: '3',
                    name: { text: 'Hallway', x: 320, y: 273 },
                    area: { d: 'M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z' },
                    border: { d: 'M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,' +
                            '6.09,0,0,1,-6.09,6.09H272.71V356' },
                },
            ],
        };
        this.selectRoom('2');
    }
    RoomSelectorComponent.prototype.sortRooms = function () {
        var _this = this;
        this.sortedRooms = this.roomSvg.rooms.slice(0).sort(function (a, b) {
            if (a.id === _this.selectedRoom) {
                return 1;
            }
            if (b.id === _this.selectedRoom) {
                return -1;
            }
            return 0;
        });
    };
    RoomSelectorComponent.prototype.selectRoom = function (roomNumber) {
        this.select.emit(roomNumber);
        this.selectedRoom = roomNumber;
        this.sortRooms();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], RoomSelectorComponent.prototype, "select", void 0);
    RoomSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-room-selector',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RoomSelectorComponent);
    return RoomSelectorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/rooms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) ngx-room-selector {\n  width: 70%;\n  border-right: 2px solid #ebeef2;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 150 150%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23ebeef2%3Bstroke-miterlimit%3A10%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EAsset 2_svg%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_1-2%22 data-name%3D%22Layer 1%22%3E%3Cline class%3D%22cls-1%22 x1%3D%2275%22 x2%3D%2275%22 y2%3D%22150%22%2F%3E%3Cline class%3D%22cls-1%22 x1%3D%22150%22 y1%3D%2275%22 y2%3D%2275%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") repeat;\n  background-size: 75px; }\n\n:host-context(.nb-theme-default) ngx-player {\n  width: 30%; }\n\n:host-context(.nb-theme-default) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-default) ngx-room-selector {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  :host-context(.nb-theme-default) ngx-room-selector /deep/ .room-selector {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-grid-column-align: center;\n        justify-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 auto;\n    width: 90%;\n    max-width: 650px;\n    padding-bottom: 1rem; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default).expanded ngx-room-selector {\n    display: none; }\n  :host-context(.nb-theme-default) ngx-room-selector, :host-context(.nb-theme-default) ngx-player {\n    width: 100%;\n    border: none; }\n  :host-context(.nb-theme-default) nb-card {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    :host-context(.nb-theme-default) nb-card .collapse {\n      display: inline-block;\n      position: absolute;\n      top: 0.5rem;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      font-size: 3rem;\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card .collapse:focus {\n        outline: none; } }\n\n:host-context(.nb-theme-cosmic) ngx-room-selector {\n  width: 70%;\n  border-right: 2px solid #342e73;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 150 150%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23ebeef2%3Bstroke-miterlimit%3A10%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EAsset 2_svg%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_1-2%22 data-name%3D%22Layer 1%22%3E%3Cline class%3D%22cls-1%22 x1%3D%2275%22 x2%3D%2275%22 y2%3D%22150%22%2F%3E%3Cline class%3D%22cls-1%22 x1%3D%22150%22 y1%3D%2275%22 y2%3D%2275%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") repeat;\n  background-size: 75px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 150 150%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23342e73%3Bstroke-miterlimit%3A10%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EAsset 2_svg%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_1-2%22 data-name%3D%22Layer 1%22%3E%3Cline class%3D%22cls-1%22 x1%3D%2275%22 x2%3D%2275%22 y2%3D%22150%22%2F%3E%3Cline class%3D%22cls-1%22 x1%3D%22150%22 y1%3D%2275%22 y2%3D%2275%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n:host-context(.nb-theme-cosmic) ngx-player {\n  width: 30%; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-cosmic) ngx-room-selector {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  :host-context(.nb-theme-cosmic) ngx-room-selector /deep/ .room-selector {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-grid-column-align: center;\n        justify-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 auto;\n    width: 90%;\n    max-width: 650px;\n    padding-bottom: 1rem; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic).expanded ngx-room-selector {\n    display: none; }\n  :host-context(.nb-theme-cosmic) ngx-room-selector, :host-context(.nb-theme-cosmic) ngx-player {\n    width: 100%;\n    border: none; }\n  :host-context(.nb-theme-cosmic) nb-card {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    :host-context(.nb-theme-cosmic) nb-card .collapse {\n      display: inline-block;\n      position: absolute;\n      top: 0.5rem;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      font-size: 3rem;\n      color: #76f8f6; }\n      :host-context(.nb-theme-cosmic) nb-card .collapse:focus {\n        outline: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    RoomsComponent.prototype.select = function (roomNumber) {
        if (this.isSelected(roomNumber)) {
            this.expand();
        }
        else {
            this.collapse();
        }
        this.selected = roomNumber;
    };
    RoomsComponent.prototype.expand = function () {
        this.expanded = true;
    };
    RoomsComponent.prototype.collapse = function () {
        this.expanded = false;
    };
    RoomsComponent.prototype.isCollapsed = function () {
        return !this.expanded;
    };
    RoomsComponent.prototype.isSelected = function (roomNumber) {
        return this.selected === roomNumber;
    };
    RoomsComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.expanded'),
        __metadata("design:type", Boolean)
    ], RoomsComponent.prototype, "expanded", void 0);
    RoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-rooms',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/rooms.component.scss")],
            template: "\n    <nb-card [size]=\"breakpoint.width >= breakpoints.sm ? 'large' : 'medium'\">\n      <i (click)=\"collapse()\" class=\"nb-arrow-down collapse\" [hidden]=\"isCollapsed()\"></i>\n      <ngx-room-selector (select)=\"select($event)\"></ngx-room-selector>\n      <ngx-player [collapsed]=\"isCollapsed() && breakpoint.width <= breakpoints.md\"></ngx-player>\n    </nb-card>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"xlarge\">\n  <nb-card-header>\n    <div class=\"cameras-card-header\">\n      <span class=\"cameras-card-title\">Security Cameras</span>\n      <span class=\"cameras-filter\">\n        <a [class.active]=\"isSingleView\" (click)=\"isSingleView = true\">\n          <i class=\"nb-square\"></i>\n        </a>\n        <a [class.active]=\"!isSingleView\" (click)=\"isSingleView = false\">\n          <i class=\"nb-grid-a\"></i>\n        </a>\n      </span>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"cameras single-view\" *ngIf=\"isSingleView\">\n      <div class=\"camera\" [style.background-image]=\"'url(' + selectedCamera.source + ')'\">\n        <span>{{ selectedCamera.title }}</span>\n      </div>\n    </div>\n    <div class=\"cameras\" *ngIf=\"!isSingleView\">\n      <div class=\"camera col-sm-6\" *ngFor=\"let camera of cameras\" [style.background-image]=\"'url(' + camera.source + ')'\"\n           (click)=\"selectCamera(camera)\">\n        <span>{{ camera.title }}</span>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <nb-actions size=\"medium\" fullWidth>\n      <nb-action>\n        <i class=\"nb-pause-outline\"></i><span>Pause</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-list\"></i><span>Logs</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-search\"></i><span>Search</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-gear\"></i><span>Setup</span>\n      </nb-action>\n    </nb-actions>\n  </nb-card-footer>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  padding: 0;\n  border: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  padding: 0;\n  position: relative; }\n\n:host-context(.nb-theme-default) nb-card-footer {\n  padding: 1rem 0;\n  border: none; }\n\n:host-context(.nb-theme-default) .cameras-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .cameras-card-header .cameras-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n\n:host-context(.nb-theme-default) .cameras-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .cameras-filter a {\n    font-size: 2.5rem;\n    padding: 0 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #a4abb3; }\n  :host-context(.nb-theme-default) .cameras-filter a:first-child {\n    border-left: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .cameras-filter a:last-child {\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) .cameras-filter a.active {\n    background-color: #e9edf2;\n    color: #2a2a2a;\n    border: none; }\n\n:host-context(.nb-theme-default) .cameras {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%; }\n\n:host-context(.nb-theme-default) .cameras.single-view .camera {\n  height: 100%;\n  width: 100%; }\n  :host-context(.nb-theme-default) .cameras.single-view .camera::before {\n    height: 100%; }\n\n:host-context(.nb-theme-default) .camera {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  height: 50%;\n  padding: 0; }\n  :host-context(.nb-theme-default) .camera span {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    font-family: Exo;\n    font-weight: 500;\n    font-size: 1.25rem;\n    padding: 0.5rem 1rem; }\n  :host-context(.nb-theme-default) .camera::before {\n    background-color: rgba(255, 255, 255, 0.1);\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n  :host-context(.nb-theme-default) .camera:hover::before {\n    opacity: 0; }\n\n:host-context(.nb-theme-default) nb-action {\n  padding: 0 0.5rem 0 0; }\n  :host-context(.nb-theme-default) nb-action i {\n    color: #a4abb3;\n    font-size: 3rem;\n    margin-right: 0.5rem; }\n  :host-context(.nb-theme-default) nb-action span {\n    font-family: Exo;\n    font-weight: 600;\n    color: #2a2a2a;\n    text-transform: uppercase; }\n\n@media (max-width: 1199px) {\n  :host-context(.nb-theme-default) nb-action {\n    padding: 0; }\n    :host-context(.nb-theme-default) nb-action i {\n      margin: 0; }\n    :host-context(.nb-theme-default) nb-action span {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-card-header {\n  padding: 0;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding: 0;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) nb-card-footer {\n  padding: 1rem 0;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) .cameras-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .cameras-card-header .cameras-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) .cameras-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a {\n    font-size: 2.5rem;\n    padding: 0 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a:first-child {\n    border-left: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a:last-child {\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a.active {\n    background-color: #494299;\n    color: #ffffff;\n    border: none; }\n\n:host-context(.nb-theme-cosmic) .cameras {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%; }\n\n:host-context(.nb-theme-cosmic) .cameras.single-view .camera {\n  height: 100%;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .cameras.single-view .camera::before {\n    height: 100%; }\n\n:host-context(.nb-theme-cosmic) .camera {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  height: 50%;\n  padding: 0; }\n  :host-context(.nb-theme-cosmic) .camera span {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    font-family: Exo;\n    font-weight: 500;\n    font-size: 1.25rem;\n    padding: 0.5rem 1rem; }\n  :host-context(.nb-theme-cosmic) .camera::before {\n    background-color: rgba(255, 255, 255, 0.1);\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n  :host-context(.nb-theme-cosmic) .camera:hover::before {\n    opacity: 0; }\n\n:host-context(.nb-theme-cosmic) nb-action {\n  padding: 0 0.5rem 0 0; }\n  :host-context(.nb-theme-cosmic) nb-action i {\n    color: #76f8f6;\n    font-size: 3rem;\n    margin-right: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-action span {\n    font-family: Exo;\n    font-weight: 600;\n    color: #ffffff;\n    text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) .cameras-filter a.active {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .camera span {\n  background: rgba(88, 73, 184, 0.5); }\n\n:host-context(.nb-theme-cosmic) .camera::before {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n:host-context(.nb-theme-cosmic) nb-action span {\n  font-weight: 500; }\n\n@media (max-width: 1199px) {\n  :host-context(.nb-theme-cosmic) nb-action {\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) nb-action i {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) nb-action span {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityCamerasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecurityCamerasComponent = /** @class */ (function () {
    function SecurityCamerasComponent() {
        this.cameras = [{
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            }, {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            }, {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            }, {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            }];
        this.selectedCamera = this.cameras[0];
        this.userMenu = [{
                title: 'Profile',
            }, {
                title: 'Log out',
            }];
        this.isSingleView = false;
    }
    SecurityCamerasComponent.prototype.selectCamera = function (camera) {
        this.selectedCamera = camera;
        this.isSingleView = true;
    };
    SecurityCamerasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-security-cameras',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.html"),
        })
    ], SecurityCamerasComponent);
    return SecurityCamerasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/solar/solar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  padding: 1rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: calc(100% - 2 * 1rem);\n  width: 40%; }\n\n:host-context(.nb-theme-default) .info {\n  margin-left: 45%;\n  padding-top: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .value {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .details {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1; }\n  :host-context(.nb-theme-default) .details span {\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .text-hint {\n  font-size: 1rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .value {\n    font-size: 1.75rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: hidden;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    height: calc(100% - 2 * 1rem);\n    width: 40%; }\n  :host-context(.nb-theme-cosmic) .info {\n    margin-left: 45%;\n    padding-top: 1.5rem;\n    color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) .value {\n    font-family: Exo;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .details {\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .details span {\n      font-size: 1rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .text-hint {\n    font-size: 1rem; }\n  :host-context(.nb-theme-cosmic) .value {\n    color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) .details span {\n    color: #76f8f6; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .value {\n      font-size: 1.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/solar/solar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolarComponent = /** @class */ (function () {
    function SolarComponent(theme) {
        this.theme = theme;
        this.value = 0;
        this.option = {};
    }
    Object.defineProperty(SolarComponent.prototype, "chartValue", {
        set: function (value) {
            this.value = value;
            if (this.option.series) {
                this.option.series[0].data[0].value = value;
                this.option.series[0].data[1].value = 100 - value;
                this.option.series[1].data[0].value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    SolarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var solarTheme = config.variables.solar;
            _this.option = Object.assign({}, {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'center',
                                        formatter: '{d}%',
                                        textStyle: {
                                            fontSize: '22',
                                            fontFamily: config.variables.fontSecondary,
                                            fontWeight: '600',
                                            color: config.variables.fgHeading,
                                        },
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 0,
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 3,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 100 - _this.value,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: config.variables.layoutBg,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'inner',
                                        show: false,
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 7,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 28,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'none',
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    };
    SolarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartValue'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SolarComponent.prototype, "chartValue", null);
    SolarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-solar',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/solar/solar.component.scss")],
            template: "\n    <nb-card size=\"xsmall\" class=\"solar-card\">\n      <nb-card-header>Solar Energy Consumption</nb-card-header>\n      <nb-card-body>\n        <div echarts [options]=\"option\" class=\"echart\">\n        </div>\n        <div class=\"info\">\n          <div class=\"value\">6. 421 kWh</div>\n          <div class=\"details\"><span>out of</span> 8.421 kWh</div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], SolarComponent);
    return SolarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/status-card/status-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 0 0 0 #dbdbdb, none; }\n  :host-context(.nb-theme-default) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-default) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    border-radius: 0.375rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-default) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #0b1c7a, #0b417a);\n      box-shadow: 0 0 0 0 #092869, 0 0 0 0 #0b2f7a; }\n    :host-context(.nb-theme-default) nb-card .icon.success {\n      background-image: linear-gradient(to right, #0b1c7a, #0b417a);\n      box-shadow: 0 0 0 0 #092869, 0 0 0 0 #0b2f7a; }\n    :host-context(.nb-theme-default) nb-card .icon.info {\n      background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n      box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n    :host-context(.nb-theme-default) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 0 0 0 #db9d00, 0 0 0 0 #ffb600; }\n  :host-context(.nb-theme-default) nb-card:hover {\n    background: white; }\n    :host-context(.nb-theme-default) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #2d3c8d, #2d5c8d); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #2d3c8d, #2d5c8d); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #65ccff, #65b2ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-default) nb-card.off {\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card.off .icon {\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card.off .icon.primary, :host-context(.nb-theme-default) nb-card.off .icon.success, :host-context(.nb-theme-default) nb-card.off .icon.info, :host-context(.nb-theme-default) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-default) nb-card.off .title {\n      color: #a4abb3; }\n  :host-context(.nb-theme-default) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-default) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 3px 0 0 #342f6e, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-cosmic) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    border-radius: 0.5rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #0b1c7a, #0b417a);\n      box-shadow: 0 3px 0 0 #092869, 0 2px 8px 0 #0b2f7a, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.success {\n      background-image: linear-gradient(to right, #0b1c7a, #0b417a);\n      box-shadow: 0 3px 0 0 #092869, 0 2px 8px 0 #0b2f7a, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.info {\n      background-image: linear-gradient(to right, #00b3ff, #0088ff);\n      box-shadow: 0 3px 0 0 #0087db, 0 2px 8px 0 #009dff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 3px 0 0 #db9d00, 0 2px 8px 0 #ffb600, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card:hover {\n    background: #463f92; }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #2d3c8d, #2d5c8d); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #2d3c8d, #2d5c8d); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #24bdff, #2499ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-cosmic) nb-card.off {\n    color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) nb-card.off .icon {\n      color: #76f8f6; }\n      :host-context(.nb-theme-cosmic) nb-card.off .icon.primary, :host-context(.nb-theme-cosmic) nb-card.off .icon.success, :host-context(.nb-theme-cosmic) nb-card.off .icon.info, :host-context(.nb-theme-cosmic) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-cosmic) nb-card.off .title {\n      color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-cosmic) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) nb-card.off .icon-container {\n  border-right: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon-container {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-card .details {\n  padding-left: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon {\n  width: 7rem;\n  height: 100%;\n  font-size: 4.5rem;\n  border-radius: 0.5rem 0 0 0.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .title {\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-card .status {\n  font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/status-card/status-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusCardComponent = /** @class */ (function () {
    function StatusCardComponent() {
        this.on = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatusCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatusCardComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StatusCardComponent.prototype, "on", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StatusCardComponent.prototype, "data", void 0);
    StatusCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-status-card',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/status-card/status-card.component.scss")],
            template: "\n    <nb-card [ngClass]=\"{'off': !on}\">\n      <div class=\"icon-container\">\n        <div class=\"icon {{ type }}\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <div class=\"details\">\n        <div class=\"title\">{{ title }}</div>\n        <div class=\"status\">{{ data }}</div>\n      </div>\n    </nb-card>\n  ",
        })
    ], StatusCardComponent);
    return StatusCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\n  <div class=\"team-photo\">\n    <a href=\"mailto:contact@akveo.com\">\n      <button type=\"button\" class=\"btn btn-success btn-icon team-link\">\n        <i class=\"ion-paper-airplane\"></i>\n      </button>\n    </a>\n  </div>\n\n  <div class=\"team-info\">\n    <div class=\"team-title\">\n      <h2>Akveo Team</h2>\n    </div>\n    <div class=\"team-subtitle\">Design & Development</div>\n    <div class=\"team-bio\">\n      We're small team of fullstack software experts. We're crazy about creation of modern and secure software. We help to make\n      your product amazing.\n    </div>\n  </div>\n\n  <div class=\"links\">\n    <a href=\"https://www.akveo.com\" target=\"_blank\">\n      <i class=\"ion-ios-world-outline\"></i>\n    </a>\n    <a href=\"https://www.facebook.com/akveo\" target=\"_blank\">\n      <i class=\"ion-social-facebook\"></i>\n    </a>\n    <a href=\"https://twitter.com/akveo_inc\" target=\"_blank\">\n      <i class=\"ion-social-twitter\"></i>\n    </a>\n    <a href=\"https://github.com/akveo\" target=\"_blank\">\n      <i class=\"ion-social-github\"></i>\n    </a>\n  </div>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .team-photo {\n  background-image: url(\"/assets/images/team.png\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 50%; }\n  :host-context(.nb-theme-default) .team-photo .team-link {\n    position: absolute;\n    height: 4rem;\n    width: 4rem;\n    bottom: -2rem;\n    right: 1rem;\n    border-radius: 50%;\n    box-shadow: 0 4px 10px 0 rgba(235, 239, 245, 0.4), 0 0 12px 0 rgba(118, 248, 246, 0.2); }\n\n:host-context(.nb-theme-default) .team-info {\n  padding: 1.5rem 1.5rem 0; }\n  :host-context(.nb-theme-default) .team-info .team-title {\n    color: #2a2a2a;\n    font-family: Exo; }\n    :host-context(.nb-theme-default) .team-info .team-title h2 {\n      margin: 0; }\n  :host-context(.nb-theme-default) .team-info .team-subtitle {\n    margin-bottom: 1rem;\n    color: #a4abb3;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .team-info .team-bio {\n    text-align: justify;\n    color: #4b4b4b;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 1rem 0; }\n  :host-context(.nb-theme-default) .links a {\n    text-decoration: none;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) .links a i {\n      font-size: 1.75rem; }\n\n:host-context(.nb-theme-cosmic) .team-photo {\n  background-image: url(\"/assets/images/team.png\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 50%; }\n  :host-context(.nb-theme-cosmic) .team-photo .team-link {\n    position: absolute;\n    height: 4rem;\n    width: 4rem;\n    bottom: -2rem;\n    right: 1rem;\n    border-radius: 50%;\n    box-shadow: 0 4px 10px 0 rgba(47, 41, 107, 0.4), 0 0 12px 0 rgba(118, 248, 246, 0.2); }\n\n:host-context(.nb-theme-cosmic) .team-info {\n  padding: 1.5rem 1.5rem 0; }\n  :host-context(.nb-theme-cosmic) .team-info .team-title {\n    color: #ffffff;\n    font-family: Exo; }\n    :host-context(.nb-theme-cosmic) .team-info .team-title h2 {\n      margin: 0; }\n  :host-context(.nb-theme-cosmic) .team-info .team-subtitle {\n    margin-bottom: 1rem;\n    color: #76f8f6;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .team-info .team-bio {\n    text-align: justify;\n    color: #d1d1ff;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 1rem 0; }\n  :host-context(.nb-theme-cosmic) .links a {\n    text-decoration: none;\n    color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .links a i {\n      font-size: 1.75rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-team',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.html"),
        })
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAGQOLbQAAU3zwM4AAAAASUVORK5CYII=\">\n\n<div class=\"svg-container\">\n  <svg #svgRoot xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n       [attr.viewBox]=\"styles.viewBox\" preserveAspectRatio=\"xMinYMin meet\" (mousedown)=\"mouseDown($event)\">\n    <defs>\n\n      <filter [attr.id]=\"'blurFilter' + svgControlId\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n        <feGaussianBlur in=\"SourceGraphic\" [attr.stdDeviation]=\"styles.blurRadius\" />\n        <feComponentTransfer>\n          <feFuncA type=\"discrete\" tableValues=\"1 1\"/>\n        </feComponentTransfer>\n      </filter>\n\n      <clipPath [attr.id]=\"'sliderClip' + svgControlId\">\n        <path [attr.d]=\"styles.clipPathStr\" stroke=\"black\"></path>\n      </clipPath>\n\n    </defs>\n    <g [attr.transform]=\"styles.arcTranslateStr\">\n\n      <g class=\"toClip\" [attr.clip-path]=\"'url(#sliderClip' + svgControlId +')'\">\n        <g class=\"toFilter\" [attr.filter]=\"'url(#blurFilter' + svgControlId +')'\">\n          <path [attr.d]=\"arc.d\" [attr.fill]=\"arc.color\" *ngFor=\"let arc of styles.gradArcs\"></path>\n        </g>\n        <!-- ngFor is a quirk fix for webkit rendering issues -->\n        <path [attr.d]=\"styles.nonSelectedArc.d\" [attr.fill]=\"styles.nonSelectedArc.color\" *ngFor=\"let number of [0,1,2,3,4,5]\"></path>\n      </g>\n\n      <circle [attr.cx]=\"styles.thumbPosition.x\" [attr.cy]=\"styles.thumbPosition.y\" [attr.r]=\"pinRadius\"\n              [attr.stroke-width]=\"thumbBorder / scaleFactor\" class=\"circle\"></circle>\n    </g>\n  </svg>\n</div>\n\n<div class=\"temperature-bg\">\n  <ng-content></ng-content>\n</div>\n\n<div class=\"power-bg\" [ngClass]=\"{'off': off}\" (click)=\"switchPower()\">\n  <i class=\"nb-power-circled\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  position: relative; }\n  :host-context(.nb-theme-default) img {\n    width: 100%;\n    height: auto;\n    visibility: hidden; }\n  :host-context(.nb-theme-default) .svg-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n  :host-context(.nb-theme-default) .circle {\n    fill: #ffffff;\n    stroke: #0b417a; }\n  :host-context(.nb-theme-default) .temperature-bg {\n    position: absolute;\n    width: 88%;\n    height: 88%;\n    top: 13%;\n    left: 6%;\n    border-radius: 50%;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border: 2px solid #ebeef2; }\n  :host-context(.nb-theme-default) .power-bg {\n    position: absolute;\n    width: 5.25rem;\n    height: 5.25rem;\n    background-color: #ffffff;\n    border-radius: 50%;\n    bottom: 2%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    font-size: 3rem;\n    color: #2a2a2a;\n    border: 2px solid #ebeef2; }\n    :host-context(.nb-theme-default) .power-bg:hover {\n      background-color: white; }\n    :host-context(.nb-theme-default) .power-bg:active {\n      background-color: #f2f2f2;\n      box-shadow: none; }\n    :host-context(.nb-theme-default) .power-bg.off {\n      color: #a4abb3;\n      text-shadow: none; }\n\n:host-context(.nb-theme-cosmic) {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) img {\n    width: 100%;\n    height: auto;\n    visibility: hidden; }\n  :host-context(.nb-theme-cosmic) .svg-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n  :host-context(.nb-theme-cosmic) .circle {\n    fill: #3d3780;\n    stroke: #0b417a; }\n  :host-context(.nb-theme-cosmic) .temperature-bg {\n    position: absolute;\n    width: 88%;\n    height: 88%;\n    top: 13%;\n    left: 6%;\n    border-radius: 50%;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border: 2px solid #342e73;\n    background-color: #322c72;\n    border: none; }\n  :host-context(.nb-theme-cosmic) .power-bg {\n    position: absolute;\n    width: 5.25rem;\n    height: 5.25rem;\n    background-color: #3d3780;\n    border-radius: 50%;\n    bottom: 2%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    font-size: 3rem;\n    color: #ffffff;\n    border: 2px solid #342e73; }\n    :host-context(.nb-theme-cosmic) .power-bg:hover {\n      background-color: #463f92; }\n    :host-context(.nb-theme-cosmic) .power-bg:active {\n      background-color: #352f6e;\n      box-shadow: none; }\n    :host-context(.nb-theme-cosmic) .power-bg.off {\n      color: #76f8f6;\n      text-shadow: none; }\n  :host-context(.nb-theme-cosmic) .circle {\n    fill: #ffffff;\n    stroke: #ffffff; }\n  :host-context(.nb-theme-cosmic) .power-bg {\n    border: none;\n    box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n    text-shadow: 0 0 6px rgba(255, 255, 255, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureDraggerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VIEW_BOX_SIZE = 300;
var TemperatureDraggerComponent = /** @class */ (function () {
    function TemperatureDraggerComponent() {
        this.fillColors = '#2ec6ff';
        this.disableArcColor = '#999999';
        this.bottomAngle = 90;
        this.arcThickness = 18; // CSS pixels
        this.thumbRadius = 16; // CSS pixels
        this.thumbBorder = 3;
        this.maxLeap = 0.4;
        this.value = 50;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.min = 0; // min output value
        this.max = 100; // max output value
        this.step = 0.1;
        this.power = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.off = false;
        this.svgControlId = new Date().getTime();
        this.scaleFactor = 1;
        this.bottomAngleRad = 0;
        this.radius = 100;
        this.translateXValue = 0;
        this.translateYValue = 0;
        this.thickness = 6;
        this.pinRadius = 10;
        this.colors = [];
        this.styles = {
            viewBox: '0 0 300 300',
            arcTranslateStr: 'translate(0, 0)',
            clipPathStr: '',
            gradArcs: [],
            nonSelectedArc: {},
            thumbPosition: { x: 0, y: 0 },
            blurRadius: 15,
        };
        this.isMouseDown = false;
        this.init = false;
        this.oldValue = this.value;
    }
    TemperatureDraggerComponent_1 = TemperatureDraggerComponent;
    Object.defineProperty(TemperatureDraggerComponent.prototype, "setValue", {
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    TemperatureDraggerComponent.prototype.onMouseUp = function (event) {
        this.recalculateValue(event);
        this.isMouseDown = false;
    };
    TemperatureDraggerComponent.prototype.onMouseMove = function (event) {
        this.recalculateValue(event);
    };
    TemperatureDraggerComponent.prototype.onResize = function (event) {
        this.invalidate();
    };
    TemperatureDraggerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // IE fix
        setTimeout(function () {
            _this.invalidate();
            _this.init = true;
        });
    };
    TemperatureDraggerComponent.prototype.ngOnChanges = function () {
        if (this.init) {
            this.invalidate();
        }
    };
    TemperatureDraggerComponent.prototype.mouseDown = function (event) {
        this.isMouseDown = true;
        if (!this.off) {
            this.recalculateValue(event, true);
        }
    };
    TemperatureDraggerComponent.prototype.switchPower = function () {
        this.off = !this.off;
        this.power.emit(!this.off);
        if (this.off) {
            this.oldValue = this.value;
            this.value = this.min;
        }
        else {
            this.value = this.oldValue;
        }
        this.invalidatePinPosition();
    };
    TemperatureDraggerComponent.prototype.invalidate = function () {
        this.bottomAngleRad = TemperatureDraggerComponent_1.toRad(this.bottomAngle);
        this.calculateVars();
        this.invalidateClipPathStr();
        this.invalidateGradientArcs();
        this.invalidatePinPosition();
    };
    TemperatureDraggerComponent.prototype.calculateVars = function () {
        this.bottomAngleRad = TemperatureDraggerComponent_1.toRad(this.bottomAngle);
        this.colors = (typeof this.fillColors === 'string') ? [this.fillColors] : this.fillColors;
        var halfAngle = this.bottomAngleRad / 2;
        var svgBoundingRect = this.svgRoot.nativeElement.getBoundingClientRect();
        var svgAreaFactor = svgBoundingRect.height && svgBoundingRect.width / svgBoundingRect.height || 1;
        var svgHeight = VIEW_BOX_SIZE / svgAreaFactor;
        var thumbMaxRadius = this.thumbRadius + this.thumbBorder;
        var thumbMargin = 2 * thumbMaxRadius > this.arcThickness
            ? (thumbMaxRadius - this.arcThickness / 2) / this.scaleFactor
            : 0;
        this.scaleFactor = svgBoundingRect.width / VIEW_BOX_SIZE || 1;
        this.styles.viewBox = "0 0 " + VIEW_BOX_SIZE + " " + svgHeight;
        var circleFactor = this.bottomAngleRad <= Math.PI
            ? (2 / (1 + Math.cos(halfAngle)))
            : (2 * Math.sin(halfAngle) / (1 + Math.cos(halfAngle)));
        if (circleFactor > svgAreaFactor) {
            if (this.bottomAngleRad > Math.PI) {
                this.radius = (VIEW_BOX_SIZE - 2 * thumbMargin) / (2 * Math.sin(halfAngle));
            }
            else {
                this.radius = VIEW_BOX_SIZE / 2 - thumbMargin;
            }
        }
        else {
            this.radius = (svgHeight - 2 * thumbMargin) / (1 + Math.cos(halfAngle));
        }
        this.translateXValue = VIEW_BOX_SIZE / 2 - this.radius;
        this.translateYValue = (svgHeight) / 2 - this.radius * (1 + Math.cos(halfAngle)) / 2;
        this.styles.arcTranslateStr = "translate(" + this.translateXValue + ", " + this.translateYValue + ")";
        this.thickness = this.arcThickness / this.scaleFactor;
        this.pinRadius = this.thumbRadius / this.scaleFactor;
    };
    TemperatureDraggerComponent.prototype.calculateClipPathSettings = function () {
        var halfAngle = this.bottomAngleRad / 2;
        var innerRadius = this.radius - this.thickness;
        var xStartMultiplier = 1 - Math.sin(halfAngle);
        var yMultiplier = 1 + Math.cos(halfAngle);
        var xEndMultiplier = 1 + Math.sin(halfAngle);
        return {
            outer: {
                start: {
                    x: xStartMultiplier * this.radius,
                    y: yMultiplier * this.radius,
                },
                end: {
                    x: xEndMultiplier * this.radius,
                    y: yMultiplier * this.radius,
                },
                radius: this.radius,
            },
            inner: {
                start: {
                    x: xStartMultiplier * innerRadius + this.thickness,
                    y: yMultiplier * innerRadius + this.thickness,
                },
                end: {
                    x: xEndMultiplier * innerRadius + this.thickness,
                    y: yMultiplier * innerRadius + this.thickness,
                },
                radius: innerRadius,
            },
            thickness: this.thickness,
            big: this.bottomAngleRad < Math.PI ? '1' : '0',
        };
    };
    TemperatureDraggerComponent.prototype.invalidateClipPathStr = function () {
        var s = this.calculateClipPathSettings();
        var path = "M " + s.outer.start.x + "," + s.outer.start.y; // Start at startangle top
        // Outer arc
        // Draw an arc of radius 'radius'
        // Arc details...
        path += " A " + s.outer.radius + "," + s.outer.radius + "\n       0 " + s.big + " 1\n       " + s.outer.end.x + "," + s.outer.end.y; // Arc goes to top end angle coordinate
        // Outer to inner connector
        path += " A " + s.thickness / 2 + "," + s.thickness / 2 + "\n       0 1 1\n       " + s.inner.end.x + "," + s.inner.end.y;
        // Inner arc
        path += " A " + s.inner.radius + "," + s.inner.radius + "\n       1 " + s.big + " 0\n       " + s.inner.start.x + "," + s.inner.start.y;
        // Outer to inner connector
        path += " A " + s.thickness / 2 + "," + s.thickness / 2 + "\n       0 1 1\n       " + s.outer.start.x + "," + s.outer.start.y;
        // Close path
        path += ' Z';
        this.styles.clipPathStr = path;
    };
    TemperatureDraggerComponent.prototype.calculateGradientConePaths = function (angleStep) {
        var radius = this.radius;
        function calcX(angle) {
            return radius * (1 - 2 * Math.sin(angle));
        }
        function calcY(angle) {
            return radius * (1 + 2 * Math.cos(angle));
        }
        var gradArray = [];
        for (var i = 0, currentAngle = this.bottomAngleRad / 2; i < this.colors.length; i++, currentAngle += angleStep) {
            gradArray.push({
                start: { x: calcX(currentAngle), y: calcY(currentAngle) },
                end: { x: calcX(currentAngle + angleStep), y: calcY(currentAngle + angleStep) },
                big: Math.PI <= angleStep ? 1 : 0,
            });
        }
        return gradArray;
    };
    TemperatureDraggerComponent.prototype.invalidateGradientArcs = function () {
        var radius = this.radius;
        function getArc(des) {
            return "M " + radius + "," + radius + "\n         L " + des.start.x + "," + des.start.y + "\n         A " + 2 * radius + "," + 2 * radius + "\n         0 " + des.big + " 1\n         " + des.end.x + "," + des.end.y + "\n         Z";
        }
        var angleStep = (2 * Math.PI - this.bottomAngleRad) / this.colors.length;
        var s = this.calculateGradientConePaths(angleStep);
        this.styles.gradArcs = [];
        for (var i = 0; i < s.length; i++) {
            var si = s[i];
            var arcValue = getArc(si);
            this.styles.gradArcs.push({
                color: this.colors[i],
                d: arcValue,
            });
        }
        this.styles.blurRadius = 2 * radius * Math.sin(angleStep / 6);
    };
    TemperatureDraggerComponent.prototype.invalidateNonSelectedArc = function () {
        var angle = this.bottomAngleRad / 2 + (1 - this.getValuePercentage()) * (2 * Math.PI - this.bottomAngleRad);
        this.styles.nonSelectedArc = {
            color: this.disableArcColor,
            d: "M " + this.radius + "," + this.radius + "\n       L " + this.radius + "," + 3 * this.radius + "\n       A " + 2 * this.radius + "," + 2 * this.radius + "\n       1 " + (angle > Math.PI ? '1' : '0') + " 0\n       " + (this.radius + this.radius * 2 * Math.sin(angle)) + "," + (this.radius + this.radius * 2 * Math.cos(angle)) + "\n       Z",
        };
    };
    TemperatureDraggerComponent.prototype.invalidatePinPosition = function () {
        var radiusOffset = this.thickness / 2;
        var curveRadius = this.radius - radiusOffset;
        var actualAngle = (2 * Math.PI - this.bottomAngleRad) * this.getValuePercentage() + this.bottomAngleRad / 2;
        this.styles.thumbPosition = {
            x: curveRadius * (1 - Math.sin(actualAngle)) + radiusOffset,
            y: curveRadius * (1 + Math.cos(actualAngle)) + radiusOffset,
        };
        this.invalidateNonSelectedArc();
    };
    TemperatureDraggerComponent.prototype.recalculateValue = function (event, allowJumping) {
        if (allowJumping === void 0) { allowJumping = false; }
        if (this.isMouseDown && !this.off) {
            var rect = this.svgRoot.nativeElement.getBoundingClientRect();
            var center = {
                x: rect.left + VIEW_BOX_SIZE * this.scaleFactor / 2,
                y: rect.top + (this.translateYValue + this.radius) * this.scaleFactor,
            };
            var actualAngle = Math.atan2(center.x - event.clientX, event.clientY - center.y);
            if (actualAngle < 0) {
                actualAngle = actualAngle + 2 * Math.PI;
            }
            var previousRelativeValue = this.getValuePercentage();
            var relativeValue = 0;
            if (actualAngle < this.bottomAngleRad / 2) {
                relativeValue = 0;
            }
            else if (actualAngle > 2 * Math.PI - this.bottomAngleRad / 2) {
                relativeValue = 1;
            }
            else {
                relativeValue = (actualAngle - this.bottomAngleRad / 2) / (2 * Math.PI - this.bottomAngleRad);
            }
            var value = this.toValueNumber(relativeValue);
            if (this.value !== value && (allowJumping || Math.abs(relativeValue - previousRelativeValue) < this.maxLeap)) {
                this.value = value;
                this.valueChange.emit(this.value);
                this.invalidatePinPosition();
            }
        }
    };
    TemperatureDraggerComponent.prototype.getValuePercentage = function () {
        return (this.value - this.min) / (this.max - this.min);
    };
    TemperatureDraggerComponent.prototype.toValueNumber = function (factor) {
        return Math.round(factor * (this.max - this.min) / this.step) * this.step + this.min;
    };
    TemperatureDraggerComponent.toRad = function (angle) {
        return Math.PI * angle / 180;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('svgRoot'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TemperatureDraggerComponent.prototype, "svgRoot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "fillColors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "disableArcColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "bottomAngle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "arcThickness", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "thumbRadius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "thumbBorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "maxLeap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('valueChange'),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TemperatureDraggerComponent.prototype, "setValue", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "power", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onMouseUp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onResize", null);
    TemperatureDraggerComponent = TemperatureDraggerComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-temperature-dragger',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TemperatureDraggerComponent);
    return TemperatureDraggerComponent;
    var TemperatureDraggerComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\n  <nb-tabset fullWidth>\n\n    <nb-tab tabTitle=\"Temperature\">\n\n      <div class=\"slider-container\">\n        <ngx-temperature-dragger [(value)]=\"temperature\" (power)=\"temperatureOff = !$event\"\n                                 [min]=\"12\" [max]=\"30\" [disableArcColor]=\"colors.layoutBg\"\n                                 [fillColors]=\"colors.temperature\">\n\n          <div class=\"slider-value-container\"  [ngClass]=\"{ 'off': temperatureOff }\">\n            <div class=\"value temperature\">\n              {{ temperatureOff ? '--' : (temperature | ngxRound) }}\n            </div>\n            <div class=\"desc\">\n              Celsius\n            </div>\n          </div>\n        </ngx-temperature-dragger>\n      </div>\n\n      <div [(ngModel)]=\"temperatureMode\" ngbRadioGroup data-toggle=\"buttons\"\n           class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width\">\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"cool\"/><i class=\"nb-snowy-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"warm\"/><i class=\"nb-sunny-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"heat\"/><i class=\"nb-flame-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"fan\"/><i class=\"nb-loop-circled\"></i>\n        </label>\n      </div>\n    </nb-tab>\n\n    <nb-tab tabTitle=\"Humidity\">\n\n      <div class=\"slider-container\">\n        <ngx-temperature-dragger [(value)]=\"humidity\" (power)=\"humidityOff = !$event\"\n                                 [min]=\"0\" [max]=\"100\" [disableArcColor]=\"colors.layoutBg\"\n                                 [fillColors]=\"colors.temperature\">\n\n          <div class=\"slider-value-container\"  [ngClass]=\"{ 'off': humidityOff }\">\n            <div class=\"value humidity\">\n              {{ humidityOff ? '--' : (humidity | ngxRound) }}\n            </div>\n          </div>\n        </ngx-temperature-dragger>\n      </div>\n\n      <div [(ngModel)]=\"humidityMode\" ngbRadioGroup data-toggle=\"buttons\"\n           class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width\">\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"cool\"/><i class=\"nb-snowy-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"warm\"/><i class=\"nb-sunny-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"heat\"/><i class=\"nb-flame-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"fan\"/><i class=\"nb-loop-circled\"></i>\n        </label>\n      </div>\n    </nb-tab>\n  </nb-tabset>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    border: none; }\n\n:host-context(.nb-theme-default) nb-tab.content-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  height: 100%; }\n\n:host-context(.nb-theme-default) .slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n\n:host-context(.nb-theme-default) .slider-value-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-default) .slider-value-container .value {\n    position: relative;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-default) .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '\\B0';\n      top: 0;\n      right: -1.25rem; }\n    :host-context(.nb-theme-default) .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a4abb3;\n      font-size: 2.5rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-default) .slider-value-container .desc {\n    color: #a4abb3;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .slider-value-container.off .value {\n    color: #a4abb3;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n    :host-context(.nb-theme-default) .slider-value-container.off .value::before {\n      display: none; }\n  :host-context(.nb-theme-default) .slider-value-container.off .desc {\n    display: none; }\n\n:host-context(.nb-theme-default) .btn-group {\n  padding: 1.25rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .btn-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a4abb3; }\n  :host-context(.nb-theme-default) .btn-icon.active {\n    border-color: #76f8f6;\n    color: #76f8f6; }\n  :host-context(.nb-theme-default) .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) ngx-temperature-dragger {\n    max-width: 250px; }\n    :host-context(.nb-theme-default) ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  :host-context(.nb-theme-default) .slider-value-container .value {\n    font-size: 3rem; }\n    :host-context(.nb-theme-default) .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    :host-context(.nb-theme-default) .btn-icon i {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    border: none; }\n\n:host-context(.nb-theme-cosmic) nb-tab.content-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  height: 100%; }\n\n:host-context(.nb-theme-cosmic) .slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n\n:host-context(.nb-theme-cosmic) .slider-value-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .value {\n    position: relative;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '\\B0';\n      top: 0;\n      right: -1.25rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #76f8f6;\n      font-size: 2.5rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .desc {\n    color: #76f8f6;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .slider-value-container.off .value {\n    color: #76f8f6;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container.off .value::before {\n      display: none; }\n  :host-context(.nb-theme-cosmic) .slider-value-container.off .desc {\n    display: none; }\n\n:host-context(.nb-theme-cosmic) .btn-group {\n  padding: 1.25rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .btn-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) .btn-icon.active {\n    border-color: #76f8f6;\n    color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n\n:host-context(.nb-theme-cosmic) .btn-icon.active {\n  color: #ffffff;\n  border-color: #76f8f6;\n  box-shadow: 0 2px 12px 0 rgba(118, 248, 246, 0.25);\n  background-color: rgba(118, 248, 246, 0.25); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) ngx-temperature-dragger {\n    max-width: 250px; }\n    :host-context(.nb-theme-cosmic) ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .value {\n    font-size: 3rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    :host-context(.nb-theme-cosmic) .btn-icon i {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemperatureComponent = /** @class */ (function () {
    function TemperatureComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.temperature = 24;
        this.temperatureOff = false;
        this.temperatureMode = 'cool';
        this.humidity = 87;
        this.humidityOff = false;
        this.humidityMode = 'heat';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            _this.colors = config.variables;
        });
    }
    TemperatureComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TemperatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-temperature',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], TemperatureComponent);
    return TemperatureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var points = [300, 520, 435, 530, 730, 620, 660, 860];
var TrafficChartComponent = /** @class */ (function () {
    function TrafficChartComponent(theme) {
        this.theme = theme;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.option = {};
    }
    TrafficChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var trafficTheme = config.variables.traffic;
            _this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: points,
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: trafficTheme.colorBlack,
                            opacity: 0.06,
                            width: '1',
                        },
                    },
                },
                tooltip: {
                    axisPointer: {
                        type: 'shadow',
                    },
                    textStyle: {
                        color: trafficTheme.tooltipTextColor,
                        fontWeight: trafficTheme.tooltipFontWeight,
                        fontSize: 16,
                    },
                    position: 'top',
                    backgroundColor: trafficTheme.tooltipBg,
                    borderColor: trafficTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} MB',
                    extraCssText: trafficTheme.tooltipExtraCss,
                },
                series: [
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 8,
                        sampling: 'average',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: trafficTheme.shadowLineDarkBg,
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                                borderWidth: 0,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.shadowLineDarkBg,
                            },
                        },
                        data: points.map(function (p) { return p - 15; }),
                    },
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 6,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: trafficTheme.itemColor,
                                borderColor: trafficTheme.itemBorderColor,
                                borderWidth: 2,
                            },
                            emphasis: {
                                color: 'white',
                                borderColor: trafficTheme.itemEmphasisBorderColor,
                                borderWidth: 2,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.lineBg,
                                shadowColor: trafficTheme.lineBg,
                                shadowBlur: trafficTheme.lineShadowBlur,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradFrom,
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradTo,
                                    }]),
                                opacity: 1,
                            },
                        },
                        data: points,
                    },
                ],
            });
        });
    };
    TrafficChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TrafficChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-traffic-chart',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.scss")],
            template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], TrafficChartComponent);
    return TrafficChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.675rem 0.5rem 0.5rem 1.25rem;\n  border: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-default) /deep/ canvas {\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 120px; }\n\n:host-context(.nb-theme-cosmic) nb-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.675rem 0.5rem 0.5rem 1.25rem;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) /deep/ canvas {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem; }\n\n:host-context(.nb-theme-cosmic) .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficComponent = /** @class */ (function () {
    function TrafficComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TrafficComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TrafficComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-traffic',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.scss")],
            template: "\n    <nb-card size=\"xsmall\">\n      <nb-card-header>\n        <span>Traffic Consumption</span>\n        <div class=\"dropdown ghost-dropdown\" ngbDropdown>\n          <button type=\"button\" class=\"btn btn-sm\" ngbDropdownToggle\n                  [ngClass]=\"{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n            {{ type }}\n          </button>\n          <ul ngbDropdownMenu class=\"dropdown-menu\">\n            <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n          </ul>\n        </div>\n      </nb-card-header>\n      <nb-card-body class=\"p-0\">\n        <ngx-traffic-chart></ngx-traffic-chart>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], TrafficComponent);
    return TrafficComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\n  <nb-card-body>\n    <div class=\"location\">\n      <span>New York</span>\n    </div>\n    <div class=\"date\">\n      <span>Mon 29 May</span>\n    </div>\n    <div class=\"daily-forecast\">\n      <div class=\"info\">\n        <div class=\"temperature\">\n          <span>20&deg;</span>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion-ios-sunny-outline\"></i>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">max</span>\n          <span class=\"parameter-value\">23&deg;</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">min</span>\n          <span class=\"parameter-value\">19&deg;</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">wind</span>\n          <span class=\"parameter-value\">4 km/h</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">hum</span>\n          <span class=\"parameter-value\">87%</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"weekly-forecast\">\n      <div class=\"day\">\n        <span class=\"caption\">Sun</span>\n        <i class=\"ion-ios-cloudy-outline\"></i>\n        <span class=\"temperature\">17&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Mon</span>\n        <i class=\"ion-ios-sunny-outline\"></i>\n        <span class=\"temperature\">19&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Tue</span>\n        <i class=\"ion-ios-rainy-outline\"></i>\n        <span class=\"temperature\">22&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Wed</span>\n        <i class=\"ion-ios-partlysunny-outline\"></i>\n        <span class=\"temperature\">21&deg;</span>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  background-image: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  height: 100%;\n  padding: 2rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .location {\n  font-family: Exo;\n  font-size: 2.5rem;\n  font-weight: 400;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .date {\n  font-family: Roboto;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  font-weight: 300; }\n\n:host-context(.nb-theme-default) .daily-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: -1.5rem; }\n  :host-context(.nb-theme-default) .daily-forecast .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-default) .daily-forecast .info .temperature {\n      font-size: 5rem;\n      font-weight: 500;\n      font-family: Exo;\n      color: #2a2a2a;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-top: 2rem; }\n    :host-context(.nb-theme-default) .daily-forecast .info .icon {\n      font-size: 10rem;\n      line-height: 10rem;\n      color: #0b417a; }\n  :host-context(.nb-theme-default) .daily-forecast .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-default) .daily-forecast .details .parameter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center; }\n      :host-context(.nb-theme-default) .daily-forecast .details .parameter .parameter-name {\n        font-family: Roboto;\n        font-size: 1.25rem;\n        font-weight: 300;\n        line-height: 2rem; }\n      :host-context(.nb-theme-default) .daily-forecast .details .parameter .parameter-value {\n        font-family: Exo;\n        color: #2a2a2a;\n        font-weight: 500; }\n\n:host-context(.nb-theme-default) .weekly-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 2rem; }\n  :host-context(.nb-theme-default) .weekly-forecast .day {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center; }\n    :host-context(.nb-theme-default) .weekly-forecast .day .caption {\n      text-transform: uppercase;\n      font-family: Exo;\n      color: #2a2a2a;\n      font-weight: 600;\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .weekly-forecast .day i {\n      font-size: 2.5rem;\n      line-height: 2.5rem; }\n    :host-context(.nb-theme-default) .weekly-forecast .day .temperature {\n      color: #2a2a2a;\n      font-family: Exo;\n      font-weight: 600;\n      font-size: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) nb-card-body {\n    padding-left: 1rem;\n    padding-right: 1rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e); }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  height: 100%;\n  padding: 2rem;\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .location {\n  font-family: Exo;\n  font-size: 2.5rem;\n  font-weight: 400;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .date {\n  font-family: Roboto;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .daily-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: -1.5rem; }\n  :host-context(.nb-theme-cosmic) .daily-forecast .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .info .temperature {\n      font-size: 5rem;\n      font-weight: 500;\n      font-family: Exo;\n      color: #ffffff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-top: 2rem; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .info .icon {\n      font-size: 10rem;\n      line-height: 10rem;\n      color: #0b417a;\n      color: #76f8f6;\n      text-shadow: 0 3px 0 #665ebd, 0 4px 10px rgba(33, 7, 77, 0.5), 0 2px 10px #928dff; }\n  :host-context(.nb-theme-cosmic) .daily-forecast .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center; }\n      :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter .parameter-name {\n        font-family: Roboto;\n        font-size: 1.25rem;\n        font-weight: 300;\n        line-height: 2rem; }\n      :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter .parameter-value {\n        font-family: Exo;\n        color: #ffffff;\n        font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) .weekly-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 2rem; }\n  :host-context(.nb-theme-cosmic) .weekly-forecast .day {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day .caption {\n      text-transform: uppercase;\n      font-family: Exo;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day i {\n      font-size: 2.5rem;\n      line-height: 2.5rem; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day .temperature {\n      color: #ffffff;\n      font-family: Exo;\n      font-weight: 600;\n      font-size: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    padding-left: 1rem;\n    padding-right: 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-weather',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.html"),
        })
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-bar-horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsBarHorizontalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsBarHorizontalComponent = /** @class */ (function () {
    function ChartjsBarHorizontalComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: colors.infoLight,
                        borderWidth: 1,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    }, {
                        label: 'Dataset 2',
                        backgroundColor: colors.successLight,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsBarHorizontalComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsBarHorizontalComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsBarHorizontalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-bar-horizontal',
            template: "\n    <chart type=\"horizontalBar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsBarHorizontalComponent);
    return ChartjsBarHorizontalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsBarComponent = /** @class */ (function () {
    function ChartjsBarComponent(theme) {
        this.theme = theme;
        this.etiquetas = [];
        this.datos = [];
        this.colores = [];
        this.auxColores = ['#61380B', '#011c3d', '#8a7fff', '#40dc7e', '#4ca6ff', '#ffa100', '#ff4c6a'];
    }
    ChartjsBarComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.dataDiagrama.length; ++i) {
            this.etiquetas.push(this.dataDiagrama[i].hora);
            this.datos.push(this.dataDiagrama[i].count_solicitados);
            /*const colorIndex = Math.floor(Math.random() * this.auxColores.length);
            this.colores.push(this.auxColores[colorIndex]);*/
        }
        //this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
        //const colors: any = config.variables;
        //const chartjs: any = config.variables.chartjs;
        this.data = {
            labels: this.etiquetas,
            datasets: [{
                    data: this.datos,
                    label: 'Pedidos',
                    backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA('#8a7fff', 0.8),
                } /*, {
                  data: [28, 48, 40, 19, 86, 27, 150],
                  label: 'Series B',
                  backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
                }*/
            ],
        };
        this.options = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                labels: {
                    fontColor: '#484848',
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                            color: '#cccccc',
                        },
                        ticks: {
                            fontColor: '#484848',
                        },
                    },
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: '#cccccc',
                        },
                        ticks: {
                            fontColor: '#484848',
                        },
                    },
                ],
            },
        };
        //});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartjsBarComponent.prototype, "dataDiagrama", void 0);
    ChartjsBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-bar',
            template: "\n    <chart type=\"bar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsBarComponent);
    return ChartjsBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsLineComponent = /** @class */ (function () {
    function ChartjsLineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.primary, 0.3),
                        borderColor: colors.primary,
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.danger, 0.3),
                        borderColor: colors.danger,
                    }, {
                        data: [18, 48, 77, 9, 100, 27, 40],
                        label: 'Series C',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.info, 0.3),
                        borderColor: colors.info,
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsLineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-line',
            template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsLineComponent);
    return ChartjsLineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-multiple-xaxis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsMultipleXaxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsMultipleXaxisComponent = /** @class */ (function () {
    function ChartjsMultipleXaxisComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'dataset - big points',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.primary,
                        backgroundColor: colors.primary,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - individual point sizes',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.dangerLight,
                        backgroundColor: colors.dangerLight,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHoverRadius',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.info,
                        backgroundColor: colors.info,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHitRadius',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.success,
                        backgroundColor: colors.success,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                hover: {
                    mode: 'index',
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    ChartjsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsMultipleXaxisComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsMultipleXaxisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-multiple-xaxis',
            template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsMultipleXaxisComponent);
    return ChartjsMultipleXaxisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsPieComponent = /** @class */ (function () {
    function ChartjsPieComponent(theme) {
        this.theme = theme;
        this.etiquetas = [];
        this.datos = [];
        this.colores = [];
        this.auxColores = ['#61380B', '#011c3d', '#8a7fff', '#40dc7e', '#4ca6ff', '#ffa100', '#ff4c6a'];
    }
    ChartjsPieComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 0; i < this.dataDiagrama.length; ++i) {
            this.etiquetas.push(this.dataDiagrama[i].nombre);
            this.datos.push(this.dataDiagrama[i].count_solicitados);
            var colorIndex = Math.floor(Math.random() * this.auxColores.length);
            this.colores.push(this.auxColores[colorIndex]);
        }
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: _this.etiquetas,
                datasets: [{
                        data: _this.datos,
                        backgroundColor: _this.colores,
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    };
    ChartjsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartjsPieComponent.prototype, "dataDiagrama", void 0);
    ChartjsPieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-pie',
            template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsPieComponent);
    return ChartjsPieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-radar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsRadarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsRadarComponent = /** @class */ (function () {
    function ChartjsRadarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [{
                        data: [65, 59, 90, 81, 56, 55, 40],
                        label: 'Series A',
                        borderColor: colors.danger,
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.dangerLight, 0.5),
                    }, {
                        data: [28, 48, 40, 19, 96, 27, 100],
                        label: 'Series B',
                        borderColor: colors.warning,
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.warningLight, 0.5),
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scaleFontColor: 'white',
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                    gridLines: {
                        color: chartjs.axisLineColor,
                    },
                    angleLines: {
                        color: chartjs.axisLineColor,
                    },
                },
            };
        });
    }
    ChartjsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsRadarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-chartjs-radar',
            template: "\n    <chart type=\"radar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], ChartjsRadarComponent);
    return ChartjsRadarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-area-stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsAreaStackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsAreaStackComponent = /** @class */ (function () {
    function EchartsAreaStackComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsAreaStackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: echarts.tooltipBackgroundColor,
                        },
                    },
                },
                legend: {
                    data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Mail marketing',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: 'Affiliate advertising',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: 'Video ad',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: 'Direct interview',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: 'Search engine',
                        type: 'line',
                        stack: 'Total amount',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                    },
                ],
            };
        });
    };
    EchartsAreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsAreaStackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-area-stack',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsAreaStackComponent);
    return EchartsAreaStackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-bar-animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsBarAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarAnimationComponent = /** @class */ (function () {
    function EchartsBarAnimationComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarAnimationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight, colors.infoLight],
                legend: {
                    data: ['bar', 'bar2'],
                    align: 'left',
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        data: xAxisData,
                        silent: false,
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        data: data1,
                        animationDelay: function (idx) {
                            return idx * 10;
                        },
                    },
                    {
                        name: 'bar2',
                        type: 'bar',
                        data: data2,
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        },
                    },
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                },
            };
            for (var i = 0; i < 100; i++) {
                xAxisData.push('Category ' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }
        });
    };
    EchartsBarAnimationComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsBarAnimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-bar-animation',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsBarAnimationComponent);
    return EchartsBarAnimationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarComponent = /** @class */ (function () {
    function EchartsBarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Score',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220],
                    },
                ],
            };
        });
    };
    EchartsBarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-bar',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsBarComponent);
    return EchartsBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsLineComponent = /** @class */ (function () {
    function EchartsLineComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsLineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.primary, colors.info],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}',
                },
                legend: {
                    left: 'left',
                    data: ['Line 1', 'Line 2', 'Line 3'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'log',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
                    },
                ],
            };
        });
    };
    EchartsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsLineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-line',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsLineComponent);
    return EchartsLineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-multiple-xaxis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsMultipleXaxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsMultipleXaxisComponent = /** @class */ (function () {
    function EchartsMultipleXaxisComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsMultipleXaxisComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.success, colors.info],
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross',
                    },
                },
                legend: {
                    data: ['2015 Precipitation', '2016 Precipitation'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    top: 70,
                    bottom: 50,
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.info,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2016-1',
                            '2016-2',
                            '2016-3',
                            '2016-4',
                            '2016-5',
                            '2016-6',
                            '2016-7',
                            '2016-8',
                            '2016-9',
                            '2016-10',
                            '2016-11',
                            '2016-12',
                        ],
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.success,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2015-1',
                            '2015-2',
                            '2015-3',
                            '2015-4',
                            '2015-5',
                            '2015-6',
                            '2015-7',
                            '2015-8',
                            '2015-9',
                            '2015-10',
                            '2015-11',
                            '2015-12',
                        ],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: '2015 Precipitation',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    },
                    {
                        name: '2016 Precipitation',
                        type: 'line',
                        smooth: true,
                        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
                    },
                ],
            };
        });
    };
    EchartsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsMultipleXaxisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-multiple-xaxis',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsMultipleXaxisComponent);
    return EchartsMultipleXaxisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsPieComponent = /** @class */ (function () {
    function EchartsPieComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsPieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                series: [
                    {
                        name: 'Countries',
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: [
                            { value: 335, name: 'Germany' },
                            { value: 310, name: 'France' },
                            { value: 234, name: 'Canada' },
                            { value: 135, name: 'Russia' },
                            { value: 1548, name: 'USA' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                        },
                    },
                ],
            };
        });
    };
    EchartsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsPieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-pie',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsPieComponent);
    return EchartsPieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-radar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsRadarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsRadarComponent = /** @class */ (function () {
    function EchartsRadarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsRadarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.warning],
                tooltip: {},
                legend: {
                    data: ['Allocated Budget', 'Actual Spending'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                radar: {
                    name: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                    indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Techology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 },
                    ],
                    splitArea: {
                        areaStyle: {
                            color: 'transparent',
                        },
                    },
                },
                series: [
                    {
                        name: 'Budget vs Spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: 'Allocated Budget',
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: 'Actual Spending',
                            },
                        ],
                    },
                ],
            };
        });
    };
    EchartsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsRadarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-echarts-radar',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */]])
    ], EchartsRadarComponent);
    return EchartsRadarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/mi-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Pedidos en curso\" type=\"primary\" data=\"{{count_1}}\">\n      <i class=\"ion-ios-compose-outline\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Pedidos depachados\" type=\"success\" data=\"{{count_2}}\">\n      <i class=\"ion-android-checkbox-outline\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Pagos registrados\" type=\"info\" data=\"{{count_3}}\">\n      <i class=\"ion-card\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Dinero recaudado\" type=\"warning\" data=\"{{count_4}}\">\n      <i class=\"ion-social-usd\"></i>\n    </ngx-status-card>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n\n        <div style=\"position: absolute; top: 0px; right:15px;\" >\n          <button  type=\"button\" class=\"btn btn-icon btn-tn\" title=\"Refresh\" (click)=\"getDiagram4()\">\n            <i class=\"fa fa-refresh icon-refresh\"></i>\n          </button>\n        </div>\n\n        <div style=\"text-align: center;\" class=\"row show-grid\">\n          <div class=\"col-12\">\n            <div>\n              Pedidos registrados por <br>hora\n              <!-- <i class=\"fa fa-refresh icon-refresh\" (click)=\"getDiagram4()\"></i> -->\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\">\n            <div [(ngModel)]=\"radioModelD4\" ngbRadioGroup\n               class=\"btn-group btn-toggle-group btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group btn-tn\">\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"left\"> Día\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-info btn-tn\">\n                <input ngbButton type=\"radio\" value=\"right\"> Mes\n              </label>\n            </div> \n          </div>\n          <div style=\"margin-top: 10px\" *ngIf=\"radioModelD4 == 'left'\" class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Día</label>\n                  <select id=\"dia\" name=\"dia\" class=\"form-control\" [(ngModel)]=\"diaD4\">\n                    <option [value]=\"dia\" *ngFor =\"let dia of dias\">{{dia}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Mes</label>\n                  <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD4\">\n                    <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label>Año</label>\n                  <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD4\">\n                    <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"margin-top: 10px\" class=\"col-12\" *ngIf=\"radioModelD4 != 'left'\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Mes</label>\n                  <select id=\"mes\" name=\"mes\" class=\"form-control\" [(ngModel)]=\"mesD4\">\n                    <option [value]=\"mes\" *ngFor =\"let mes of meses\">{{mes}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Año</label>\n                  <select id=\"anio\" name=\"anio\" class=\"form-control\" [(ngModel)]=\"anioD4\">\n                    <option [value]=\"anio\" *ngFor =\"let anio of anios\">{{anio}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <div *ngIf=\"loadDiagram4\" style=\"height: 458px;\">\n          <div class=\"loader\" style=\"display:block; margin:auto;\"></div>\n        </div>\n        <div *ngIf=\"!loadDiagram4 && !diagram4\" style=\"height: 458px; text-align: center;\">\n          <p>Data no disponible.</p>\n        </div>\n        <div *ngIf=\"!loadDiagram4 && diagram4\">\n         <ngx-chartjs-bar [dataDiagrama]=\"pedidosA\"></ngx-chartjs-bar>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n<!-- <div class=\"my-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\n</div> -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/mi-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-default) .diagrama {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-default) .diagrama /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-default) ngx-chartjs-pie,\n:host-context(.nb-theme-default) ngx-chartjs-bar,\n:host-context(.nb-theme-default) ngx-chartjs-line,\n:host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-default) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-default) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-default) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-default) .tabla .star {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .tabla .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .tabla .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .tabla .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .tabla .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .tabla .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .tabla .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-default) .loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n:host-context(.nb-theme-cosmic) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-cosmic) .diagrama {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .diagrama /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-cosmic) ngx-chartjs-pie,\n:host-context(.nb-theme-cosmic) ngx-chartjs-bar,\n:host-context(.nb-theme-cosmic) ngx-chartjs-line,\n:host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-cosmic) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-cosmic) .tabla .star {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .tabla .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .tabla .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .tabla .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .tabla .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .tabla .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .tabla .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite; }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/mi-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiDashboardComponent; });
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

// Mis imports







var MiDashboardComponent = /** @class */ (function () {
    function MiDashboardComponent(themeService, toasterService, http, router, rutaService) {
        this.themeService = themeService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.items = [{ title: 'Profile' }, { title: 'Log out' }];
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
        this.dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.anios = [];
        //Ventas por hora
        this.pedidosA = [];
        this.loadDiagram4 = false;
        this.diagram4 = false;
        this.radioModelD4 = 'left';
        this.establecimiento_id = localStorage.getItem('mouvers_establecimiento_id');
        this.establecimiento_nom = localStorage.getItem('mouvers_user_nombre');
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.count_1 = 'Consultando.....';
        this.count_2 = 'Consultando.....';
        this.count_3 = 'Consultando.....';
        this.count_4 = 'Consultando.....';
        var fecha = new Date();
        //var fecha = Date.now();
        this.diaActual = fecha.getDate();
        this.mesActual = fecha.getMonth() + 1;
        this.anioActual = fecha.getFullYear();
        this.anios.push(this.anioActual);
        for (var i = 1; i < 5; i++) {
            this.anios.push(this.anioActual - i);
        }
        this.diaD4 = this.diaActual;
        this.mesD4 = this.mesActual;
        this.anioD4 = this.anioActual;
        //console.log(this.diaActual+'-'+this.mesActual+'-'+this.anioActual);
    }
    MiDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '4') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        //this.themeService.changeTheme('cosmic');
        this.themeService.changeTheme('default');
        this.getContadores();
        setTimeout(function () {
            _this.getDiagram4();
        }, 5);
    };
    MiDashboardComponent.prototype.showToast = function (type, title, body) {
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
    //Obtener los contadores del dia
    MiDashboardComponent.prototype.getContadores = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/contadores/establecimiento/' + this.establecimiento_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.count_1 = _this.data.pedidos_curso;
            _this.count_2 = _this.data.pedidos_finalizados;
            _this.count_3 = _this.data.pagos_registrados;
            if (!_this.data.dinero_recaudado) {
                _this.count_4 = 0;
            }
            else {
                _this.count_4 = _this.data.dinero_recaudado;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else {
                _this.showToast('info', 'Info!', 'Algo salió mal.');
            }
        });
    };
    //Obtener las ventas por hora
    MiDashboardComponent.prototype.getDiagram4 = function () {
        var _this = this;
        if (this.radioModelD4 == 'left') {
            var dia = this.diaD4;
            var mes = this.mesD4;
            var anio = this.anioD4;
        }
        else {
            var dia = null;
            var mes = this.mesD4;
            var anio = this.anioD4;
        }
        this.diagram4 = false;
        this.loadDiagram4 = true;
        this.pedidosA = [];
        this.http.get(this.rutaService.getRutaApi() + 'dashboard/diagram4/establecimiento/' + this.establecimiento_id + '?dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data3 = data;
            _this.pedidosA = _this.data3.pedidos;
            _this.loadDiagram4 = false;
            if (_this.pedidosA.length > 0) {
                _this.diagram4 = true;
            }
            else {
                _this.diagram4 = false;
            }
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loadDiagram4 = false;
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
    MiDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-mi-dashboard',
            styles: [__webpack_require__("../../../../../src/app/pages/mi-dashboard/mi-dashboard.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/mi-dashboard/mi-dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["p" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */]])
    ], MiDashboardComponent);
    return MiDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/mi-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mi_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/mi-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/status-card/status-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chartjs_mouvers_chartjs_bar_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chartjs_mouvers_chartjs_line_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chartjs_mouvers_chartjs_pie_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chartjs_mouvers_chartjs_multiple_xaxis_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-multiple-xaxis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chartjs_mouvers_chartjs_bar_horizontal_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-bar-horizontal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chartjs_mouvers_chartjs_radar_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/chartjs-mouvers/chartjs-radar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__echarts_mouvers_echarts_line_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__echarts_mouvers_echarts_pie_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__echarts_mouvers_echarts_bar_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__echarts_mouvers_echarts_multiple_xaxis_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-multiple-xaxis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__echarts_mouvers_echarts_area_stack_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-area-stack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__echarts_mouvers_echarts_bar_animation_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-bar-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__echarts_mouvers_echarts_radar_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/echarts-mouvers/echarts-radar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Mis imports

















var MiDashboardModule = /** @class */ (function () {
    function MiDashboardModule() {
    }
    MiDashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: false
                }),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__mi_dashboard_component__["a" /* MiDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__["a" /* StatusCardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__chartjs_mouvers_chartjs_bar_component__["a" /* ChartjsBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chartjs_mouvers_chartjs_line_component__["a" /* ChartjsLineComponent */],
                __WEBPACK_IMPORTED_MODULE_11__chartjs_mouvers_chartjs_pie_component__["a" /* ChartjsPieComponent */],
                __WEBPACK_IMPORTED_MODULE_12__chartjs_mouvers_chartjs_multiple_xaxis_component__["a" /* ChartjsMultipleXaxisComponent */],
                __WEBPACK_IMPORTED_MODULE_13__chartjs_mouvers_chartjs_bar_horizontal_component__["a" /* ChartjsBarHorizontalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__chartjs_mouvers_chartjs_radar_component__["a" /* ChartjsRadarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__echarts_mouvers_echarts_line_component__["a" /* EchartsLineComponent */],
                __WEBPACK_IMPORTED_MODULE_16__echarts_mouvers_echarts_pie_component__["a" /* EchartsPieComponent */],
                __WEBPACK_IMPORTED_MODULE_17__echarts_mouvers_echarts_bar_component__["a" /* EchartsBarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__echarts_mouvers_echarts_multiple_xaxis_component__["a" /* EchartsMultipleXaxisComponent */],
                __WEBPACK_IMPORTED_MODULE_19__echarts_mouvers_echarts_area_stack_component__["a" /* EchartsAreaStackComponent */],
                __WEBPACK_IMPORTED_MODULE_20__echarts_mouvers_echarts_bar_animation_component__["a" /* EchartsBarAnimationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__echarts_mouvers_echarts_radar_component__["a" /* EchartsRadarComponent */],
            ],
        })
    ], MiDashboardModule);
    return MiDashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/status-card/status-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 0 0 0 #dbdbdb, none; }\n  :host-context(.nb-theme-default) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-default) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    border-radius: 0.375rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-default) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #0b1c7a, #0b417a);\n      box-shadow: 0 0 0 0 #092869, 0 0 0 0 #0b2f7a; }\n    :host-context(.nb-theme-default) nb-card .icon.success {\n      background-image: linear-gradient(to right, #0b1c7a, #0b417a);\n      box-shadow: 0 0 0 0 #092869, 0 0 0 0 #0b2f7a; }\n    :host-context(.nb-theme-default) nb-card .icon.info {\n      background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n      box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n    :host-context(.nb-theme-default) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 0 0 0 #db9d00, 0 0 0 0 #ffb600; }\n  :host-context(.nb-theme-default) nb-card:hover {\n    background: white; }\n    :host-context(.nb-theme-default) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #2d3c8d, #2d5c8d); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #2d3c8d, #2d5c8d); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #65ccff, #65b2ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-default) nb-card.off {\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card.off .icon {\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card.off .icon.primary, :host-context(.nb-theme-default) nb-card.off .icon.success, :host-context(.nb-theme-default) nb-card.off .icon.info, :host-context(.nb-theme-default) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-default) nb-card.off .title {\n      color: #a4abb3; }\n  :host-context(.nb-theme-default) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-default) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 3px 0 0 #342f6e, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-cosmic) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    border-radius: 0.5rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #0b1c7a, #0b417a);\n      box-shadow: 0 3px 0 0 #092869, 0 2px 8px 0 #0b2f7a, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.success {\n      background-image: linear-gradient(to right, #0b1c7a, #0b417a);\n      box-shadow: 0 3px 0 0 #092869, 0 2px 8px 0 #0b2f7a, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.info {\n      background-image: linear-gradient(to right, #00b3ff, #0088ff);\n      box-shadow: 0 3px 0 0 #0087db, 0 2px 8px 0 #009dff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 3px 0 0 #db9d00, 0 2px 8px 0 #ffb600, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card:hover {\n    background: #463f92; }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #2d3c8d, #2d5c8d); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #2d3c8d, #2d5c8d); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #24bdff, #2499ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-cosmic) nb-card.off {\n    color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) nb-card.off .icon {\n      color: #76f8f6; }\n      :host-context(.nb-theme-cosmic) nb-card.off .icon.primary, :host-context(.nb-theme-cosmic) nb-card.off .icon.success, :host-context(.nb-theme-cosmic) nb-card.off .icon.info, :host-context(.nb-theme-cosmic) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-cosmic) nb-card.off .title {\n      color: #76f8f6; }\n  :host-context(.nb-theme-cosmic) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-cosmic) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) nb-card.off .icon-container {\n  border-right: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon-container {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-card .details {\n  padding-left: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon {\n  width: 7rem;\n  height: 100%;\n  font-size: 4.5rem;\n  border-radius: 0.5rem 0 0 0.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .title {\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-card .status {\n  font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/mi-dashboard/status-card/status-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusCardComponent = /** @class */ (function () {
    function StatusCardComponent() {
        this.on = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatusCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatusCardComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StatusCardComponent.prototype, "on", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StatusCardComponent.prototype, "data", void 0);
    StatusCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-status-card',
            styles: [__webpack_require__("../../../../../src/app/pages/mi-dashboard/status-card/status-card.component.scss")],
            template: "\n    <nb-card [ngClass]=\"{'off': !on}\">\n      <div class=\"icon-container\">\n        <div class=\"icon {{ type }}\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <div class=\"details\">\n        <div class=\"title\">{{ title }}</div>\n        <div class=\"status\">{{ data }}</div>\n      </div>\n    </nb-card>\n  ",
        })
    ], StatusCardComponent);
    return StatusCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MENU_ITEMS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MENU_ITEMS5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MENU_ITEMS6; });
/* unused harmony export MENU_ITEMS7 */
/*
MENU_ITEMS0
MENU_ITEMS1
MENU_ITEMS5
MENU_ITEMS6
MENU_ITEMS7
*/
var MENU_ITEMS0 = [
    {
        title: 'Dashboard',
        icon: 'ion-home',
        link: '/pages/dashboard',
        home: true,
    }, {
        title: 'Pedidos',
        icon: 'nb-compose',
        children: [
            {
                title: 'Por aceptar',
                link: '/pages/pedidos/aceptar',
            },
            {
                title: 'En curso',
                link: '/pages/pedidos/encurso',
            },
            {
                title: 'Finalizados',
                link: '/pages/pedidos/finalizados',
            },
            {
                title: 'Cancelados',
                link: '/pages/pedidos/cancelados',
            },
        ],
    },
    /*{
      title: 'Login',
      icon: 'nb-locked',
      link: '/pagessinples/loginf',
      home: true,
    },*/
    {
        title: 'Clientes',
        icon: 'ion-ios-people-outline',
        children: [
            /*{
              title: 'Crear Clientes',
              link: '/pages/clientes/crear',
            },*/
            {
                title: 'Ver Clientes',
                link: '/pages/clientes/ver',
            },
        ],
    },
    {
        title: 'Servicios',
        icon: 'ion-ios-box-outline',
        children: [
            /*{
              title: 'Agregar Servicios',
              link: '/pages/productos/agregar',
            },*/
            {
                title: 'Todos Servicios',
                link: '/pages/productos/ver',
            },
            {
                title: 'Servicios Activos',
                link: '/pages/productos/on',
            },
            {
                title: 'Servicios Editados',
                link: '/pages/productos/editados',
            },
            {
                title: 'Servicios Inactivos',
                link: '/pages/productos/off',
            },
        ],
    },
    /*{
      title: 'Establecimientos',
      icon: 'nb-home',
      children: [
        {
          title: 'Agregar Establecimientos',
          link: '/pages/establecimientos/agregar',
        },
        {
          title: 'Ver Establecimientos',
          link: '/pages/establecimientos/ver',
        },
       
      ],
    },*/
    {
        title: 'Proveedores',
        icon: 'ion-android-bicycle',
        children: [
            /* {
               title: 'Agregar Proveedores',
               link: '/pages/socios/agregar',
             },*/
            {
                title: 'Todos Proveedores',
                link: '/pages/socios/ver',
            },
            {
                title: 'Activos',
                link: '/pages/socios/activos',
            },
            {
                title: 'Inactivos',
                link: '/pages/socios/inactivos',
            },
            {
                title: 'Por registar',
                link: '/pages/socios/registrar',
            },
            {
                title: 'Registros Incompletos',
                link: '/pages/socios/incompletos',
            },
            {
                title: 'Reporte Excel',
                link: '/pages/socios/reporte',
            }
        ],
    },
    {
        title: 'Chat',
        icon: 'nb-email',
        link: '/pages/chat-box',
        home: true,
    },
    {
        title: 'Notificaciones',
        icon: 'nb-notifications',
        link: '/pages/notificaciones',
        home: true,
    },
    {
        title: 'Cobros',
        icon: 'ion-social-usd',
        children: [
            {
                title: 'Crear recibo',
                link: '/pages/cobro/crear',
            },
            {
                title: 'Por Pagar',
                link: '/pages/cobro/ver',
            },
            {
                title: 'Pagados',
                link: '/pages/cobro/agregar',
            }
        ],
    },
    {
        title: 'Sistema',
        icon: 'nb-edit',
        children: [
            {
                title: 'Planes',
                link: '/pages/planes',
            },
            {
                title: 'Contacto',
                link: '/pages/contacto',
            },
            {
                title: 'Publicidad',
                link: '/pages/publicidad',
            },
        ],
    },
    {
        title: 'Zonas',
        icon: 'nb-location',
        children: [
            {
                title: 'Paises',
                link: '/pages/zonas/pais',
            },
            {
                title: 'Ciudades',
                link: '/pages/zonas/ciudades',
            },
            {
                title: 'Ver Zonas',
                link: '/pages/zonas/todas',
            },
            {
                title: 'Agregar Zona',
                link: '/pages/zonas/agregar',
            },
            {
                title: 'Editar Zonas',
                link: '/pages/zonas/ver',
            },
        ],
    },
    {
        title: 'Categorias principales',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Principales',
                link: '/pages/categoriasPrincipales/agregar',
            },
            {
                title: 'Ver Principales',
                link: '/pages/categoriasPrincipales/ver',
            },
        ],
    },
    {
        title: 'Categorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Categorías',
                link: '/pages/categorias/agregar',
            },
            {
                title: 'Ver Categorías',
                link: '/pages/categorias/ver',
            },
        ],
    },
    {
        title: 'Subcategorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Subcategorías',
                link: '/pages/subcategorias/agregar',
            },
            {
                title: 'Ver Subcategorías',
                link: '/pages/subcategorias/ver',
            },
        ],
    },
];
var MENU_ITEMS1 = [
    {
        title: 'Dashboard',
        icon: 'ion-home',
        link: '/pages/dashboard',
        home: true,
    }, {
        title: 'Pedidos',
        icon: 'nb-compose',
        children: [
            {
                title: 'Por aceptar',
                link: '/pages/pedidos/aceptar',
            },
            {
                title: 'En curso',
                link: '/pages/pedidos/encurso',
            },
            {
                title: 'Finalizados',
                link: '/pages/pedidos/finalizados',
            },
            {
                title: 'Cancelados',
                link: '/pages/pedidos/cancelados',
            },
        ],
    },
    {
        title: 'Usuarios',
        icon: 'ion-ios-people-outline',
        children: [
            {
                title: 'Ver Usuarios',
                link: '/pages/clientes/ver',
            },
        ],
    },
    {
        title: 'Servicios',
        icon: 'ion-ios-box-outline',
        children: [
            {
                title: 'Todos Servicios',
                link: '/pages/productos/ver',
            },
            {
                title: 'Servicios Activos',
                link: '/pages/productos/on',
            },
            {
                title: 'Servicios Editados',
                link: '/pages/productos/editados',
            },
            {
                title: 'Servicios Inactivos',
                link: '/pages/productos/off',
            },
        ],
    },
    {
        title: 'Proveedores',
        icon: 'ion-android-bicycle',
        children: [
            {
                title: 'Todos Proveedores',
                link: '/pages/socios/ver',
            },
            {
                title: 'Activos',
                link: '/pages/socios/activos',
            },
            {
                title: 'Inactivos',
                link: '/pages/socios/inactivos',
            },
            {
                title: 'Por registar',
                link: '/pages/socios/registrar',
            },
            {
                title: 'Registros Incompletos',
                link: '/pages/socios/incompletos',
            },
            {
                title: 'Reporte Excel',
                link: '/pages/socios/reporte',
            }
        ],
    },
    {
        title: 'Cobros',
        icon: 'ion-social-usd',
        children: [
            {
                title: 'Crear recibo',
                link: '/pages/cobro/crear',
            },
            {
                title: 'Por Pagar',
                link: '/pages/cobro/ver',
            },
            {
                title: 'Pagados',
                link: '/pages/cobro/agregar',
            }
        ],
    },
    {
        title: 'Chat',
        icon: 'nb-email',
        link: '/pages/chat-box',
        home: true,
    },
    {
        title: 'Notificaciones',
        icon: 'nb-notifications',
        link: '/pages/notificaciones',
        home: true,
    },
    {
        title: 'Sistema',
        icon: 'nb-edit',
        children: [
            {
                title: 'Planes',
                link: '/pages/planes',
            },
            {
                title: 'Contacto',
                link: '/pages/contacto',
            },
        ],
    },
    {
        title: 'Zonas',
        icon: 'nb-location',
        children: [
            {
                title: 'Ciudades',
                link: '/pages/zonas/ciudades',
            },
            {
                title: 'Agregar Zona',
                link: '/pages/zonas/agregar',
            },
            {
                title: 'Editar Zonas',
                link: '/pages/zonas/ver',
            },
        ],
    },
    {
        title: 'Categorias principales',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Principales',
                link: '/pages/categoriasPrincipales/agregar',
            },
            {
                title: 'Ver Principales',
                link: '/pages/categoriasPrincipales/ver',
            },
        ],
    },
    {
        title: 'Categorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Categorías',
                link: '/pages/categorias/agregar',
            },
            {
                title: 'Ver Categorías',
                link: '/pages/categorias/ver',
            },
        ],
    },
    {
        title: 'Subcategorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Subcategorías',
                link: '/pages/subcategorias/agregar',
            },
            {
                title: 'Ver Subcategorías',
                link: '/pages/subcategorias/ver',
            },
        ],
    },
];
var MENU_ITEMS5 = [
    {
        title: 'Dashboard',
        icon: 'ion-home',
        link: '/pages/dashboard',
        home: true,
    }, {
        title: 'Pedidos',
        icon: 'nb-compose',
        children: [
            {
                title: 'Por aceptar',
                link: '/pages/pedidos/aceptar',
            },
            {
                title: 'En curso',
                link: '/pages/pedidos/encurso',
            },
            {
                title: 'Finalizados',
                link: '/pages/pedidos/finalizados',
            },
            {
                title: 'Cancelados',
                link: '/pages/pedidos/cancelados',
            },
        ],
    },
    {
        title: 'Usuarios',
        icon: 'ion-ios-people-outline',
        children: [
            {
                title: 'Ver Usuarios',
                link: '/pages/clientes/ver',
            },
        ],
    },
    {
        title: 'Servicios',
        icon: 'ion-ios-box-outline',
        children: [
            {
                title: 'Todos Servicios',
                link: '/pages/productos/ver',
            },
            {
                title: 'Servicios Activos',
                link: '/pages/productos/on',
            },
            {
                title: 'Servicios Editados',
                link: '/pages/productos/editados',
            },
            {
                title: 'Servicios Inactivos',
                link: '/pages/productos/off',
            },
        ],
    },
    {
        title: 'Proveedores',
        icon: 'ion-android-bicycle',
        children: [
            {
                title: 'Todos Proveedores',
                link: '/pages/socios/ver',
            },
            {
                title: 'Activos',
                link: '/pages/socios/activos',
            },
            {
                title: 'Inactivos',
                link: '/pages/socios/inactivos',
            },
            {
                title: 'Por registar',
                link: '/pages/socios/registrar',
            },
            {
                title: 'Registros Incompletos',
                link: '/pages/socios/incompletos',
            },
            {
                title: 'Reporte Excel',
                link: '/pages/socios/reporte',
            }
        ],
    },
    {
        title: 'Cobros',
        icon: 'ion-social-usd',
        children: [
            {
                title: 'Crear recibo',
                link: '/pages/cobro/crear',
            },
            {
                title: 'Por Pagar',
                link: '/pages/cobro/ver',
            },
            {
                title: 'Pagados',
                link: '/pages/cobro/agregar',
            }
        ],
    },
    {
        title: 'Chat',
        icon: 'nb-email',
        link: '/pages/chat-box',
        home: true,
    },
    {
        title: 'Notificaciones',
        icon: 'nb-notifications',
        link: '/pages/notificaciones',
        home: true,
    },
    {
        title: 'Zonas',
        icon: 'nb-location',
        children: [
            {
                title: 'Ciudades',
                link: '/pages/zonas/ciudades',
            },
            {
                title: 'Agregar Zona',
                link: '/pages/zonas/agregar',
            },
            {
                title: 'Editar Zonas',
                link: '/pages/zonas/ver',
            },
        ],
    },
    {
        title: 'Categorias principales',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Principales',
                link: '/pages/categoriasPrincipales/agregar',
            },
            {
                title: 'Ver Principales',
                link: '/pages/categoriasPrincipales/ver',
            },
        ],
    },
    {
        title: 'Categorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Categorías',
                link: '/pages/categorias/agregar',
            },
            {
                title: 'Ver Categorías',
                link: '/pages/categorias/ver',
            },
        ],
    },
    {
        title: 'Subcategorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Subcategorías',
                link: '/pages/subcategorias/agregar',
            },
            {
                title: 'Ver Subcategorías',
                link: '/pages/subcategorias/ver',
            },
        ],
    },
];
var MENU_ITEMS6 = [
    {
        title: 'Dashboard',
        icon: 'ion-home',
        link: '/pages/dashboard',
        home: true,
    }, {
        title: 'Pedidos',
        icon: 'nb-compose',
        children: [
            {
                title: 'Por aceptar',
                link: '/pages/pedidos/aceptar',
            },
            {
                title: 'En curso',
                link: '/pages/pedidos/encurso',
            },
            {
                title: 'Finalizados',
                link: '/pages/pedidos/finalizados',
            },
            {
                title: 'Cancelados',
                link: '/pages/pedidos/cancelados',
            },
        ],
    },
    {
        title: 'Usuarios',
        icon: 'ion-ios-people-outline',
        children: [
            {
                title: 'Ver Usuarios',
                link: '/pages/clientes/ver',
            },
        ],
    },
    {
        title: 'Servicios',
        icon: 'ion-ios-box-outline',
        children: [
            {
                title: 'Todos Servicios',
                link: '/pages/productos/ver',
            },
            {
                title: 'Servicios Activos',
                link: '/pages/productos/on',
            },
            {
                title: 'Servicios Editados',
                link: '/pages/productos/editados',
            },
            {
                title: 'Servicios Inactivos',
                link: '/pages/productos/off',
            },
        ],
    },
    {
        title: 'Proveedores',
        icon: 'ion-android-bicycle',
        children: [
            {
                title: 'Todos Proveedores',
                link: '/pages/socios/ver',
            },
            {
                title: 'Activos',
                link: '/pages/socios/activos',
            },
            {
                title: 'Inactivos',
                link: '/pages/socios/inactivos',
            },
            {
                title: 'Por registar',
                link: '/pages/socios/registrar',
            },
            {
                title: 'Registros Incompletos',
                link: '/pages/socios/incompletos',
            },
            {
                title: 'Reporte Excel',
                link: '/pages/socios/reporte',
            }
        ],
    },
    {
        title: 'Cobros',
        icon: 'ion-social-usd',
        children: [
            {
                title: 'Crear recibo',
                link: '/pages/cobro/crear',
            },
            {
                title: 'Por Pagar',
                link: '/pages/cobro/ver',
            },
            {
                title: 'Pagados',
                link: '/pages/cobro/agregar',
            }
        ],
    },
    {
        title: 'Chat',
        icon: 'nb-email',
        link: '/pages/chat-box',
        home: true,
    },
    {
        title: 'Notificaciones',
        icon: 'nb-notifications',
        link: '/pages/notificaciones',
        home: true,
    },
    {
        title: 'Zonas',
        icon: 'nb-location',
        children: [
            {
                title: 'Ciudades',
                link: '/pages/zonas/ciudades',
            },
            {
                title: 'Agregar Zona',
                link: '/pages/zonas/agregar',
            },
            {
                title: 'Editar Zonas',
                link: '/pages/zonas/ver',
            },
        ],
    },
    {
        title: 'Categorias principales',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Principales',
                link: '/pages/categoriasPrincipales/agregar',
            },
            {
                title: 'Ver Principales',
                link: '/pages/categoriasPrincipales/ver',
            },
        ],
    },
    {
        title: 'Categorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Categorías',
                link: '/pages/categorias/agregar',
            },
            {
                title: 'Ver Categorías',
                link: '/pages/categorias/ver',
            },
        ],
    },
    {
        title: 'Subcategorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Subcategorías',
                link: '/pages/subcategorias/agregar',
            },
            {
                title: 'Ver Subcategorías',
                link: '/pages/subcategorias/ver',
            },
        ],
    },
];
var MENU_ITEMS7 = [
    {
        title: 'Dashboard',
        icon: 'ion-home',
        link: '/pages/dashboard',
        home: true,
    }, {
        title: 'Pedidos',
        icon: 'nb-compose',
        children: [
            {
                title: 'Por aceptar',
                link: '/pages/pedidos/aceptar',
            },
            {
                title: 'En curso',
                link: '/pages/pedidos/encurso',
            },
            {
                title: 'Finalizados',
                link: '/pages/pedidos/finalizados',
            },
            {
                title: 'Cancelados',
                link: '/pages/pedidos/cancelados',
            },
        ],
    },
    {
        title: 'Usuarios',
        icon: 'ion-ios-people-outline',
        children: [
            {
                title: 'Ver Usuarios',
                link: '/pages/clientes/ver',
            },
        ],
    },
    {
        title: 'Servicios',
        icon: 'ion-ios-box-outline',
        children: [
            {
                title: 'Todos Servicios',
                link: '/pages/productos/ver',
            },
            {
                title: 'Servicios Activos',
                link: '/pages/productos/on',
            },
            {
                title: 'Servicios Editados',
                link: '/pages/productos/editados',
            },
            {
                title: 'Servicios Inactivos',
                link: '/pages/productos/off',
            },
        ],
    },
    {
        title: 'Proveedores',
        icon: 'ion-android-bicycle',
        children: [
            {
                title: 'Todos Proveedores',
                link: '/pages/socios/ver',
            },
            {
                title: 'Activos',
                link: '/pages/socios/activos',
            },
            {
                title: 'Inactivos',
                link: '/pages/socios/inactivos',
            },
            {
                title: 'Por registar',
                link: '/pages/socios/registrar',
            },
            {
                title: 'Registros Incompletos',
                link: '/pages/socios/incompletos',
            },
            {
                title: 'Reporte Excel',
                link: '/pages/socios/reporte',
            }
        ],
    },
    {
        title: 'Cobros',
        icon: 'ion-social-usd',
        children: [
            {
                title: 'Crear recibo',
                link: '/pages/cobro/crear',
            },
            {
                title: 'Por Pagar',
                link: '/pages/cobro/ver',
            },
            {
                title: 'Pagados',
                link: '/pages/cobro/agregar',
            }
        ],
    },
    {
        title: 'Chat',
        icon: 'nb-email',
        link: '/pages/chat-box',
        home: true,
    },
    {
        title: 'Notificaciones',
        icon: 'nb-notifications',
        link: '/pages/notificaciones',
        home: true,
    },
    {
        title: 'Zonas',
        icon: 'nb-location',
        children: [
            {
                title: 'Agregar Zona',
                link: '/pages/zonas/agregar',
            },
            {
                title: 'Editar Zonas',
                link: '/pages/zonas/ver',
            },
        ],
    },
    {
        title: 'Categorias principales',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Principales',
                link: '/pages/categoriasPrincipales/agregar',
            },
            {
                title: 'Ver Principales',
                link: '/pages/categoriasPrincipales/ver',
            },
        ],
    },
    {
        title: 'Categorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Categorías',
                link: '/pages/categorias/agregar',
            },
            {
                title: 'Ver Categorías',
                link: '/pages/categorias/ver',
            },
        ],
    },
    {
        title: 'Subcategorías',
        icon: 'nb-gear',
        children: [
            {
                title: 'Agregar Subcategorías',
                link: '/pages/subcategorias/agregar',
            },
            {
                title: 'Ver Subcategorías',
                link: '/pages/subcategorias/ver',
            },
        ],
    },
];


/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mi_dashboard_mi_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/mi-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
            },
            {
                path: 'ui-features',
                loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule',
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule',
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule',
            }, {
                path: 'editors',
                loadChildren: './editors/editors.module#EditorsModule',
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule',
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule',
            }, {
                path: 'socios',
                loadChildren: './socios/socios.module#SociosModule',
            }, {
                path: 'cobro',
                loadChildren: './cobro/cobro.module#CobroModule',
            }, {
                path: 'clientes',
                loadChildren: './clientes/clientes.module#ClientesModule',
            }, {
                path: 'categorias',
                loadChildren: './categorias/categorias.module#CategoriasModule',
            }, {
                path: 'categoriasPrincipales',
                loadChildren: './catprincipales/catprincipales.module#CatprincipalesModule',
            }, {
                path: 'subcategorias',
                loadChildren: './subcategorias/subcategorias.module#SubcategoriasModule',
            }, {
                path: 'productos',
                loadChildren: './productos/productos.module#ProductosModule',
            }, {
                path: 'establecimientos',
                loadChildren: './establecimientos/establecimientos.module#EstablecimientosModule',
            }, {
                path: 'pedidos',
                loadChildren: './pedidos/pedidos.module#PedidosModule',
            }, {
                path: 'chat-box',
                loadChildren: './chat-box/chat-box.module#ChatBoxModule',
            }, {
                path: 'blogs',
                loadChildren: './blogs/blogs.module#BlogsModule',
            }, {
                path: 'notificaciones',
                loadChildren: './notificaciones/notificaciones.module#notificacionesModule',
            }, {
                path: 'planes',
                loadChildren: './planes/planes.module#planesModule',
            }, {
                path: 'contacto',
                loadChildren: './contacto/contacto.module#contactoModule',
            }, {
                path: 'publicidad',
                loadChildren: './publicidad/publicidad.module#PublicidadModule',
            }, {
                path: 'cobros',
                loadChildren: './cobros/cobros.module#cobrosModule',
            }, {
                path: 'zonas',
                loadChildren: './super-ciudades/super-ciudades.module#SuperCiudadesModule',
            }, {
                path: 'sistema',
                loadChildren: './sistema/sistema.module#SistemaModule',
            }, {
                path: 'pagos',
                loadChildren: './pagos/pagos.module#PagosModule',
            },
            {
                path: 'mi/dashboard',
                component: __WEBPACK_IMPORTED_MODULE_4__mi_dashboard_mi_dashboard_component__["a" /* MiDashboardComponent */],
            }, {
                path: 'mis/productos',
                loadChildren: './mis-productos/mis-productos.module#MisProductosModule',
            }, {
                path: 'mis/pedidos',
                loadChildren: './mis-pedidos/mis-pedidos.module#MisPedidosModule',
            }, {
                path: 'mis/pagos',
                loadChildren: './mis-pagos/mis-pagos.module#MisPagosModule',
            }, {
                path: 'ordenar',
                loadChildren: './ordenar/ordenar.module#OrdenarModule',
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        //menu = MENU_ITEMS;
        this.menu = [];
        var tipo_usuario = localStorage.getItem('mouvers_user_tipo');
        console.log(tipo_usuario);
        if (tipo_usuario == '0') {
            this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS0 */];
        }
        else if (tipo_usuario == '1') {
            this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["b" /* MENU_ITEMS1 */];
        }
        else if (tipo_usuario == '5') {
            this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["c" /* MENU_ITEMS5 */];
        }
        else if (tipo_usuario == '6') {
            this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["d" /* MENU_ITEMS6 */];
        }
    }
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-pages',
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>  ",
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mi_dashboard_mi_dashboard_module__ = __webpack_require__("../../../../../src/app/pages/mi-dashboard/mi-dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { PublicidadComponent } from './publicidad/publicidad.component';
var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__pages_routing_module__["a" /* PagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_3__mi_dashboard_mi_dashboard_module__["a" /* MiDashboardModule */],
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map