(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/data-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
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


var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
        this.dataUrl = 'assets/data.json';
        this.products = [];
    }
    DataServiceService.prototype.load = function () {
        // return this.http.get(this.dataUrl);
    };
    DataServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color =\"primary\">\n    <ion-title  >\n      <h5> <b>TRAFFIC APP</b></h5>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"$cardcolor\">\n  <ion-item class=\"items\">\n    <ion-label class=\"label\"  ><h1><b>EnterLocation:</b></h1></ion-label>\n  <ion-input class=\"items\"[(ngModel)]=\"addstring\"> eg</ion-input>\n\n  </ion-item>\n  <h1>{{maparea}}}</h1>\n  <ion-button (click)=\"submitlocation()\">Find Traffic Data</ion-button>\n  <h1></h1>\n  <h1>error:{{err}}</h1>\n  <h1>Total Traffic incidents: {{no_of_incidents}}</h1>\n\n\n\n    <ion-item color=\"$cardcolor\" *ngFor=\"let accitem of accidents\">\n      <ion-card >\n\n\n      <ion-item class=\"items\" color=\"primary\"><h4><b>Description: </b> </h4><h6><b>{{accitem.description}}</b></h6></ion-item>\n      <ion-item class=\"items\" ><h4><b>StartDate: </b> </h4><h6><b>{{accitem.start}}</b></h6></ion-item>\n      <ion-item class=\"items\"><h4><b>EndDate: </b> </h4><h6><b>{{accitem.end}}</b></h6></ion-item>\n      <ion-item class=\"items\" ><h4><b>Starting Coordinates: </b> </h4><h6><b> {{accitem.point.coordinates[0]}}, {{accitem.point.coordinates[1]}}</b></h6></ion-item>\n      <ion-item class=\"items\" ><h4><b>Ending Coordinates: </b></h4><h6><b> {{accitem.toPoint.coordinates[0]}}, {{accitem.point.coordinates[1]}}</b></h6></ion-item>\n      <ion-item class=\"items\"><h4><b>Road Closed: </b></h4><h6><b>  {{accitem.roadClosed}}</b></h6></ion-item>\n        <ion-item class=\"items\" color=\"$itemcolor\"color=\"setcolor(acciitem)\"><h4><b>Severity Level: </b></h4><h2><b>{{accitem.severity}}</b></h2></ion-item>\n\n\n    </ion-card>\n\n\n  </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background: rgba(255, 94, 58, 0.59);\n  padding: 0; }\n\nion-card {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  padding: auto; }\n\n.items {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  padding: 0% 0% 0% 0%;\n  background: -webkit-repeating-linear-gradient(right, rgba(11, 90, 162, 0.62) 2%, rgba(255, 249, 252, 0.95) 100%); }\n\n.label {\n  background: #3880ff;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWRpZGFzaWRkaXF1aS9EZXNrdG9wL2lvbmljX3Byb2ovbXlBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usb0NBQWtDO0VBQ2xDLFdBQVUsRUFDWDs7QUFDRDtFQUNFLDRCQUFrQjtFQUFsQix5QkFBa0I7RUFBbEIsb0JBQWtCO0VBQ25CLGFBQVk7RUFDWCxjQUFhLEVBRWQ7O0FBQ0Q7RUFDRSw0QkFBa0I7RUFBbEIseUJBQWtCO0VBQWxCLG9CQUFrQjtFQUNsQixhQUFZO0VBQ1oscUJBQW9CO0VBRXBCLGlIQUErRyxFQUVoSDs7QUFDRDtFQUNFLG9CQUFrQjtFQUNsQixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiRjYXJkY29sb3I6IHJnYmEoMjU1LCA5NCwgNTgsIDAuNTkpIDtcbiRpdGVtY29sb3I6LXdlYmtpdC1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDExLCA5MCwgMTYyLCAwLjYyKSAyJSwgcmdiYSgyNTUsIDI0OSwgMjUyLCAwLjk1KSAxMDAlKTtcbmlvbi1jb250ZW50e1xuICBiYWNrZ3JvdW5kOnJnYmEoMjU1LCA5NCwgNTgsIDAuNTkpO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNhcmR7XG4gIGhlaWdodDpmaXQtY29udGVudDtcbiBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IGF1dG87XG5cbn1cbi5pdGVtc3tcbiAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDAlIDAlIDAlIDAlO1xuXG4gIGJhY2tncm91bmQ6LXdlYmtpdC1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDExLCA5MCwgMTYyLCAwLjYyKSAyJSwgcmdiYSgyNTUsIDI0OSwgMjUyLCAwLjk1KSAxMDAlKTtcblxufVxuLmxhYmVse1xuICBiYWNrZ3JvdW5kOiMzODgwZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxle1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(ds, nativeGeocoder, http, plt) {
        this.ds = ds;
        this.nativeGeocoder = nativeGeocoder;
        this.http = http;
        this.plt = plt;
        this.addstring = 'berlin';
        this.maparea = '45.219,-122.325,47.610,-122.107';
        this.BingMapsKey = 'Au69BFgf1rqLHIuPuWKu71_aB72mgdgcmWbBIT-mNw8Dr2RQL20B7VK6uIs8tWHI';
    }
    HomePage.prototype.submitlocation = function () {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        //  this.ds.load().subscribe(data => { this.albums = data ; console.log(this.albums[1]); const obj = this.albums[1];
        // console.log( obj.birthDate);
        // } );
        this.plt.ready().then(function () {
            _this.nativeGeocoder.forwardGeocode(_this.addstring, options)
                .then(function (coordinates) {
                _this.latitude = coordinates[0].latitude;
                _this.longitude = coordinates[0].longitude;
                console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
                console.log('ffff' + parseFloat(_this.latitude).toFixed(3));
                console.log('fff' + parseFloat(_this.longitude).toFixed(3));
                _this.N = parseFloat(parseFloat(_this.latitude).toFixed(3));
                _this.SouthLatitude = parseFloat(parseFloat(_this.latitude).toFixed(3)) - 1;
                _this.WestLongitude = parseFloat(parseFloat(_this.longitude).toFixed(3)) + 0.1;
                _this.NorthLatitude = 1 + parseFloat(parseFloat(_this.latitude).toFixed(3));
                _this.EastLongitude = parseFloat(parseFloat(_this.longitude).toFixed(3)) - 0.1;
                console.log('sothlat=' + _this.SouthLatitude);
                console.log('westlog=' + _this.WestLongitude);
                console.log('Nortlat=' + _this.NorthLatitude);
                console.log('Eastlong=' + _this.EastLongitude);
                _this.maparea = '' + _this.SouthLatitude + ',' + _this.WestLongitude + ',' + _this.NorthLatitude + ',' + _this.EastLongitude;
                console.log('maparea=' + _this.maparea);
                _this.dataUrl = 'http://dev.virtualearth.net/REST/v1/Traffic/Incidents/' + _this.maparea + '?key=' + _this.BingMapsKey;
                _this.http.get(_this.dataUrl).subscribe(function (data) {
                    _this.mainobj = data;
                    console.log(_this.mainobj.resourceSets);
                    _this.word = _this.mainobj.resourceSets[0];
                    _this.no_of_incidents = _this.word.estimatedTotal;
                    console.log('total accidents '
                        + _this.word.estimatedTotal);
                    _this.accidents = _this.word.resources;
                    _this.accident = _this.accidents[0];
                });
            }).catch(function (error) {
                console.log(error);
                _this.err = error;
            });
        });
    };
    HomePage.prototype.do1 = function () {
        var _this = this;
        this.dataUrl = 'http://dev.virtualearth.net/REST/v1/Traffic/Incidents/' + this.maparea + '?key=' + this.BingMapsKey;
        this.http.get(this.dataUrl).subscribe(function (data) {
            _this.mainobj = data;
            console.log(_this.mainobj.resourceSets);
            _this.word = _this.mainobj.resourceSets[0];
            _this.no_of_incidents = _this.word.estimatedTotal;
            console.log('total accidents '
                + _this.word.estimatedTotal);
            _this.accidents = _this.word.resources;
            _this.accident = _this.accidents[0];
        });
    };
    HomePage.prototype.setcolor = function (item) {
        if (item === 4) {
            this.mycolor = 'red';
            return this.mycolor;
        }
        if (item === 3) {
            this.mycolor = 'orange';
            return this.mycolor;
        }
        if (item === 2) {
            this.mycolor = 'green';
            return this.mycolor;
        }
        if (item === 1) {
            this.mycolor = 'yellow';
            return this.mycolor;
        }
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map