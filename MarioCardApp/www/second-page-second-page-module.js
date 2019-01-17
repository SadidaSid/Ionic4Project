(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-page-second-page-module"],{

/***/ "./src/app/second-page/second-page.module.ts":
/*!***************************************************!*\
  !*** ./src/app/second-page/second-page.module.ts ***!
  \***************************************************/
/*! exports provided: SecondPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPagePageModule", function() { return SecondPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _second_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second-page.page */ "./src/app/second-page/second-page.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _second_page_page__WEBPACK_IMPORTED_MODULE_5__["SecondPagePage"]
    }
];
var SecondPagePageModule = /** @class */ (function () {
    function SecondPagePageModule() {
    }
    SecondPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_second_page_page__WEBPACK_IMPORTED_MODULE_5__["SecondPagePage"]]
        })
    ], SecondPagePageModule);
    return SecondPagePageModule;
}());



/***/ }),

/***/ "./src/app/second-page/second-page.page.html":
/*!***************************************************!*\
  !*** ./src/app/second-page/second-page.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>SecondPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <p> This is second page</p>\n    <button ion-button  (click)=\"doSomething()\">Click me for firstpage </button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/second-page/second-page.page.scss":
/*!***************************************************!*\
  !*** ./src/app/second-page/second-page.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/second-page/second-page.page.ts":
/*!*************************************************!*\
  !*** ./src/app/second-page/second-page.page.ts ***!
  \*************************************************/
/*! exports provided: SecondPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPagePage", function() { return SecondPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondPagePage = /** @class */ (function () {
    function SecondPagePage(nav) {
        this.nav = nav;
    }
    SecondPagePage.prototype.ngOnInit = function () {
    };
    SecondPagePage.prototype.doSomething = function () {
        this.nav.navigateByUrl('home');
    };
    SecondPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second-page',
            template: __webpack_require__(/*! ./second-page.page.html */ "./src/app/second-page/second-page.page.html"),
            styles: [__webpack_require__(/*! ./second-page.page.scss */ "./src/app/second-page/second-page.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SecondPagePage);
    return SecondPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=second-page-second-page-module.js.map