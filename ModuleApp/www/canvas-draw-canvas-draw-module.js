(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["canvas-draw-canvas-draw-module"],{

/***/ "./src/app/canvas-draw/canvas-draw.module.ts":
/*!***************************************************!*\
  !*** ./src/app/canvas-draw/canvas-draw.module.ts ***!
  \***************************************************/
/*! exports provided: CanvasDrawPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDrawPageModule", function() { return CanvasDrawPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _canvas_draw_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas-draw.page */ "./src/app/canvas-draw/canvas-draw.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _canvas_draw_page__WEBPACK_IMPORTED_MODULE_5__["CanvasDrawPage"]
    }
];
var CanvasDrawPageModule = /** @class */ (function () {
    function CanvasDrawPageModule() {
    }
    CanvasDrawPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_canvas_draw_page__WEBPACK_IMPORTED_MODULE_5__["CanvasDrawPage"]]
        })
    ], CanvasDrawPageModule);
    return CanvasDrawPageModule;
}());



/***/ }),

/***/ "./src/app/canvas-draw/canvas-draw.page.html":
/*!***************************************************!*\
  !*** ./src/app/canvas-draw/canvas-draw.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>CanvasDraw</ion-title>\n  </ion-toolbar>\n</ion-header>\n<p>x:{{x}}  y:{{y}}  z:{{z}}</p>\n\n\n  <canvas  #myCanvas></canvas>\n"

/***/ }),

/***/ "./src/app/canvas-draw/canvas-draw.page.scss":
/*!***************************************************!*\
  !*** ./src/app/canvas-draw/canvas-draw.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy1kcmF3L2NhbnZhcy1kcmF3LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/canvas-draw/canvas-draw.page.ts":
/*!*************************************************!*\
  !*** ./src/app/canvas-draw/canvas-draw.page.ts ***!
  \*************************************************/
/*! exports provided: CanvasDrawPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDrawPage", function() { return CanvasDrawPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/device-motion/ngx */ "./node_modules/@ionic-native/device-motion/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanvasDrawPage = /** @class */ (function () {
    function CanvasDrawPage(platform, renderer, deviceMotion) {
        this.platform = platform;
        this.renderer = renderer;
        this.deviceMotion = deviceMotion;
        this.x = 1;
        this.y = 1;
        this.z = 0;
    }
    CanvasDrawPage.prototype.ngOnInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setAttribute(this.canvasElement, 'height', this.platform.height() + '');
        window.addEventListener('compassneedscalibration', function (event) {
            event.preventDefault();
        }, true);
        window.addEventListener('devicemotion', this.processEvent, true);
        this.handleDrawing();
    };
    CanvasDrawPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.deviceMotion.getCurrentAcceleration().then(function (acceleration) { return console.log(acceleration); }, function (error) { return console.log(error); });
        // Watch device acceleration
        var subscription = this.deviceMotion.watchAcceleration({ frequency: 1000 }).subscribe(function (acceleration) {
            console.log(acceleration);
            _this.x = acceleration.x;
            _this.y = acceleration.y;
            _this.z = acceleration.z;
            _this.handleDrawing();
        });
    };
    CanvasDrawPage.prototype.handleDrawing = function () {
        var ctx = this.canvasElement.getContext('2d');
        console.log(this.x);
        console.log(this.y);
        var x_change = 100 * this.x;
        var y_change = this.y * 2;
        ctx.fillStyle = 'yellow';
        ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        var i;
        var amplitude = 90;
        var width = this.canvasElement.width;
        var step = 1;
        var frequency = y_change * 4;
        ctx.moveTo(0, this.canvasElement.height / 2);
        ctx.lineTo(width * 100, this.canvasElement.height / 2);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = '1';
        ctx.stroke();
        ctx.save();
        if (this.x > 1) {
            ctx.translate(-x_change * 100, 0);
        }
        console.log('hi');
        ctx.beginPath();
        ctx.moveTo(0, this.canvasElement.height / 2);
        var j = this.canvasElement.height / 2;
        var c = width / Math.PI / (frequency * 2);
        for (i = 0; i < width * 1000; i += step) {
            var k = amplitude * Math.sin(i / c);
            ctx.lineTo(i, j + k);
        }
        ctx.strokeStyle = '#0096FF';
        ctx.lineWidth = '5';
        ctx.stroke();
        ctx.restore();
    };
    CanvasDrawPage.prototype.processEvent = function (event) {
        this.x = event.accelerationIncludingGravity.x;
        this.y = event.accelerationIncludingGravity.y;
        this.z = event.accelerationIncludingGravity.z;
        this.handleDrawing();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myCanvas'),
        __metadata("design:type", Object)
    ], CanvasDrawPage.prototype, "canvas", void 0);
    CanvasDrawPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas-draw',
            template: __webpack_require__(/*! ./canvas-draw.page.html */ "./src/app/canvas-draw/canvas-draw.page.html"),
            styles: [__webpack_require__(/*! ./canvas-draw.page.scss */ "./src/app/canvas-draw/canvas-draw.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceMotion"]])
    ], CanvasDrawPage);
    return CanvasDrawPage;
}());



/***/ })

}]);
//# sourceMappingURL=canvas-draw-canvas-draw-module.js.map