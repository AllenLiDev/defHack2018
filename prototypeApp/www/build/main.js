webpackJsonp([3],{

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/compost/compost.module": [
		457,
		2
	],
	"../pages/recycle/recycle.module": [
		458,
		1
	],
	"../pages/waste/waste.module": [
		459,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compost_compost__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recycle_recycle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__waste_waste__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pageArray = [__WEBPACK_IMPORTED_MODULE_3__recycle_recycle__["a" /* RecyclePage */], __WEBPACK_IMPORTED_MODULE_2__compost_compost__["a" /* CompostPage */], __WEBPACK_IMPORTED_MODULE_4__waste_waste__["a" /* WastePage */]];
    }
    HomePage.prototype.navigateToOtherPage = function (pageNumber) {
        this.navCtrl.push(this.pageArray[pageNumber]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/headhuntar/Desktop/greenBox/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Blue Box</ion-title>\n    <ion-buttons end>\n      <button>\n        <ion-icon name="mic" item-end></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card id="rec">\n  \n    <ion-card-content (click)="navigateToOtherPage(0)">\n      <h1>Recycle</h1>\n      <img src="../../assets/imgs/recycling-symbol.png"/>\n    </ion-card-content>\n  \n  </ion-card>\n  <ion-card id="com">\n  \n    <ion-card-content (click)="navigateToOtherPage(1)">\n      <h1>Compost</h1>\n      <img src="../../assets/imgs/apple.png"/>\n    </ion-card-content>\n  \n  </ion-card>\n  <ion-card id="was">\n  \n    <ion-card-content (click)="navigateToOtherPage(2)">\n      <h1>Waste</h1>\n      <img src="../../assets/imgs/garbage.png"/>\n    </ion-card-content>\n  \n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/headhuntar/Desktop/greenBox/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_compost_compost__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recycle_recycle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_waste_waste__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_waste_waste__["a" /* WastePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_compost_compost__["a" /* CompostPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_recycle_recycle__["a" /* RecyclePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/compost/compost.module#CompostPageModule', name: 'CompostPage', segment: 'compost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recycle/recycle.module#RecyclePageModule', name: 'RecyclePage', segment: 'recycle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waste/waste.module#WastePageModule', name: 'WastePage', segment: 'waste', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_waste_waste__["a" /* WastePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_compost_compost__["a" /* CompostPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_recycle_recycle__["a" /* RecyclePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 169,
	"./af.js": 169,
	"./ar": 170,
	"./ar-dz": 171,
	"./ar-dz.js": 171,
	"./ar-kw": 172,
	"./ar-kw.js": 172,
	"./ar-ly": 173,
	"./ar-ly.js": 173,
	"./ar-ma": 174,
	"./ar-ma.js": 174,
	"./ar-sa": 175,
	"./ar-sa.js": 175,
	"./ar-tn": 176,
	"./ar-tn.js": 176,
	"./ar.js": 170,
	"./az": 177,
	"./az.js": 177,
	"./be": 178,
	"./be.js": 178,
	"./bg": 179,
	"./bg.js": 179,
	"./bm": 180,
	"./bm.js": 180,
	"./bn": 181,
	"./bn.js": 181,
	"./bo": 182,
	"./bo.js": 182,
	"./br": 183,
	"./br.js": 183,
	"./bs": 184,
	"./bs.js": 184,
	"./ca": 185,
	"./ca.js": 185,
	"./cs": 186,
	"./cs.js": 186,
	"./cv": 187,
	"./cv.js": 187,
	"./cy": 188,
	"./cy.js": 188,
	"./da": 189,
	"./da.js": 189,
	"./de": 190,
	"./de-at": 191,
	"./de-at.js": 191,
	"./de-ch": 192,
	"./de-ch.js": 192,
	"./de.js": 190,
	"./dv": 193,
	"./dv.js": 193,
	"./el": 194,
	"./el.js": 194,
	"./en-au": 195,
	"./en-au.js": 195,
	"./en-ca": 196,
	"./en-ca.js": 196,
	"./en-gb": 197,
	"./en-gb.js": 197,
	"./en-ie": 198,
	"./en-ie.js": 198,
	"./en-il": 199,
	"./en-il.js": 199,
	"./en-nz": 200,
	"./en-nz.js": 200,
	"./eo": 201,
	"./eo.js": 201,
	"./es": 202,
	"./es-do": 203,
	"./es-do.js": 203,
	"./es-us": 204,
	"./es-us.js": 204,
	"./es.js": 202,
	"./et": 205,
	"./et.js": 205,
	"./eu": 206,
	"./eu.js": 206,
	"./fa": 207,
	"./fa.js": 207,
	"./fi": 208,
	"./fi.js": 208,
	"./fo": 209,
	"./fo.js": 209,
	"./fr": 210,
	"./fr-ca": 211,
	"./fr-ca.js": 211,
	"./fr-ch": 212,
	"./fr-ch.js": 212,
	"./fr.js": 210,
	"./fy": 213,
	"./fy.js": 213,
	"./gd": 214,
	"./gd.js": 214,
	"./gl": 215,
	"./gl.js": 215,
	"./gom-latn": 216,
	"./gom-latn.js": 216,
	"./gu": 217,
	"./gu.js": 217,
	"./he": 218,
	"./he.js": 218,
	"./hi": 219,
	"./hi.js": 219,
	"./hr": 220,
	"./hr.js": 220,
	"./hu": 221,
	"./hu.js": 221,
	"./hy-am": 222,
	"./hy-am.js": 222,
	"./id": 223,
	"./id.js": 223,
	"./is": 224,
	"./is.js": 224,
	"./it": 225,
	"./it.js": 225,
	"./ja": 226,
	"./ja.js": 226,
	"./jv": 227,
	"./jv.js": 227,
	"./ka": 228,
	"./ka.js": 228,
	"./kk": 229,
	"./kk.js": 229,
	"./km": 230,
	"./km.js": 230,
	"./kn": 231,
	"./kn.js": 231,
	"./ko": 232,
	"./ko.js": 232,
	"./ky": 233,
	"./ky.js": 233,
	"./lb": 234,
	"./lb.js": 234,
	"./lo": 235,
	"./lo.js": 235,
	"./lt": 236,
	"./lt.js": 236,
	"./lv": 237,
	"./lv.js": 237,
	"./me": 238,
	"./me.js": 238,
	"./mi": 239,
	"./mi.js": 239,
	"./mk": 240,
	"./mk.js": 240,
	"./ml": 241,
	"./ml.js": 241,
	"./mr": 242,
	"./mr.js": 242,
	"./ms": 243,
	"./ms-my": 244,
	"./ms-my.js": 244,
	"./ms.js": 243,
	"./mt": 245,
	"./mt.js": 245,
	"./my": 246,
	"./my.js": 246,
	"./nb": 247,
	"./nb.js": 247,
	"./ne": 248,
	"./ne.js": 248,
	"./nl": 249,
	"./nl-be": 250,
	"./nl-be.js": 250,
	"./nl.js": 249,
	"./nn": 251,
	"./nn.js": 251,
	"./pa-in": 252,
	"./pa-in.js": 252,
	"./pl": 253,
	"./pl.js": 253,
	"./pt": 254,
	"./pt-br": 255,
	"./pt-br.js": 255,
	"./pt.js": 254,
	"./ro": 256,
	"./ro.js": 256,
	"./ru": 257,
	"./ru.js": 257,
	"./sd": 258,
	"./sd.js": 258,
	"./se": 259,
	"./se.js": 259,
	"./si": 260,
	"./si.js": 260,
	"./sk": 261,
	"./sk.js": 261,
	"./sl": 262,
	"./sl.js": 262,
	"./sq": 263,
	"./sq.js": 263,
	"./sr": 264,
	"./sr-cyrl": 265,
	"./sr-cyrl.js": 265,
	"./sr.js": 264,
	"./ss": 266,
	"./ss.js": 266,
	"./sv": 267,
	"./sv.js": 267,
	"./sw": 268,
	"./sw.js": 268,
	"./ta": 269,
	"./ta.js": 269,
	"./te": 270,
	"./te.js": 270,
	"./tet": 271,
	"./tet.js": 271,
	"./tg": 272,
	"./tg.js": 272,
	"./th": 273,
	"./th.js": 273,
	"./tl-ph": 274,
	"./tl-ph.js": 274,
	"./tlh": 275,
	"./tlh.js": 275,
	"./tr": 276,
	"./tr.js": 276,
	"./tzl": 277,
	"./tzl.js": 277,
	"./tzm": 278,
	"./tzm-latn": 279,
	"./tzm-latn.js": 279,
	"./tzm.js": 278,
	"./ug-cn": 280,
	"./ug-cn.js": 280,
	"./uk": 281,
	"./uk.js": 281,
	"./ur": 282,
	"./ur.js": 282,
	"./uz": 283,
	"./uz-latn": 284,
	"./uz-latn.js": 284,
	"./uz.js": 283,
	"./vi": 285,
	"./vi.js": 285,
	"./x-pseudo": 286,
	"./x-pseudo.js": 286,
	"./yo": 287,
	"./yo.js": 287,
	"./zh-cn": 288,
	"./zh-cn.js": 288,
	"./zh-hk": 289,
	"./zh-hk.js": 289,
	"./zh-tw": 290,
	"./zh-tw.js": 290
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 412;

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_recycle_recycle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_compost_compost__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_waste_waste__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Blue Box', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Recycle', component: __WEBPACK_IMPORTED_MODULE_5__pages_recycle_recycle__["a" /* RecyclePage */] },
            { title: 'Compost', component: __WEBPACK_IMPORTED_MODULE_6__pages_compost_compost__["a" /* CompostPage */] },
            { title: 'Waste', component: __WEBPACK_IMPORTED_MODULE_7__pages_waste_waste__["a" /* WastePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/headhuntar/Desktop/greenBox/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/headhuntar/Desktop/greenBox/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CompostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompostPage = (function () {
    function CompostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.period = 'daily';
        this.labelsArray = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]];
        this.maxCount = [7, 31, 12];
    }
    CompostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompostPage');
        this.loadChart(0);
    };
    // 0:day, 1:week, 2:month
    CompostPage.prototype.loadChart = function (set) {
        console.log(set);
        this.dataArray = [];
        for (var i = 0; i < this.maxCount[set]; i++) {
            if (set == 2) {
                this.dataArray.push(Math.floor(Math.random() * 5 * 30));
            }
            else {
                this.dataArray.push(Math.floor(Math.random() * 5));
            }
        }
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: this.labelsArray[set],
                datasets: [
                    {
                        label: 'You',
                        backgroundColor: 'rgba(205, 133, 6, 1)',
                        borderColor: 'rgba(205, 133, 6, 1)',
                        data: this.dataArray,
                        fill: false
                    }
                ],
                options: {
                    maintainAspectRatio: false,
                    title: {
                        display: false
                    }
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], CompostPage.prototype, "lineCanvas", void 0);
    CompostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compost',template:/*ion-inline-start:"/Users/headhuntar/Desktop/greenBox/src/pages/compost/compost.html"*/`<!--\n  Generated template for the CompostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Blue Box</ion-title>\n    <ion-buttons end>\n        <button>\n          <ion-icon name="mic" item-end></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h1>Compost</h1>\n  <ion-item>\n    <ion-label>Number of items Composted</ion-label>\n    <ion-select [(ngModel)]="period" (ionChange)="loadChart(period)">\n      <ion-option value="0">Week</ion-option>\n      <ion-option value="1">Month</ion-option>\n      <ion-option value="2">Year</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <canvas #lineCanvas></canvas>\n</ion-content>\n`/*ion-inline-end:"/Users/headhuntar/Desktop/greenBox/src/pages/compost/compost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CompostPage);
    return CompostPage;
}());

//# sourceMappingURL=compost.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecyclePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecyclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecyclePage = (function () {
    function RecyclePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.period = 'daily';
        this.labelsArray = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]];
        this.maxCount = [7, 31, 12];
    }
    RecyclePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecyclePage');
        this.loadChart(0);
    };
    // 0:day, 1:week, 2:month
    RecyclePage.prototype.loadChart = function (set) {
        console.log(set);
        this.dataArray = [];
        for (var i = 0; i < this.maxCount[set]; i++) {
            if (set == 2) {
                this.dataArray.push(Math.floor(Math.random() * 5 * 30));
            }
            else {
                this.dataArray.push(Math.floor(Math.random() * 7));
            }
        }
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: this.labelsArray[set],
                datasets: [
                    {
                        label: 'You',
                        backgroundColor: 'rgba(0, 200, 0, 1)',
                        borderColor: 'rgba(0, 200, 0, 1)',
                        data: this.dataArray,
                        fill: false
                    }
                ],
                options: {
                    maintainAspectRatio: false,
                    title: {
                        display: false
                    }
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], RecyclePage.prototype, "lineCanvas", void 0);
    RecyclePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recycle',template:/*ion-inline-start:"/Users/headhuntar/Desktop/greenBox/src/pages/recycle/recycle.html"*/`<!--\n  Generated template for the RecyclePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Blue Box</ion-title>\n    <ion-buttons end>\n        <button>\n          <ion-icon name="mic" item-end></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h1>Recycle</h1>\n  <ion-item>\n    <ion-label>Number of items recycled</ion-label>\n    <ion-select [(ngModel)]="period" (ionChange)="loadChart(period)">\n      <ion-option value="0">Week</ion-option>\n      <ion-option value="1">Month</ion-option>\n      <ion-option value="2">Year</ion-option>\n    </ion-select>\n  </ion-item>\n  \n  <canvas #lineCanvas></canvas>\n</ion-content>`/*ion-inline-end:"/Users/headhuntar/Desktop/greenBox/src/pages/recycle/recycle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecyclePage);
    return RecyclePage;
}());

//# sourceMappingURL=recycle.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WastePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WastePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WastePage = (function () {
    function WastePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.period = 'daily';
        this.labelsArray = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]];
        this.maxCount = [7, 31, 12];
    }
    WastePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WastePage');
        this.loadChart(0);
    };
    // 0:day, 1:week, 2:month
    WastePage.prototype.loadChart = function (set) {
        console.log(set);
        this.dataArray = [];
        for (var i = 0; i < this.maxCount[set]; i++) {
            if (set == 2) {
                this.dataArray.push(Math.floor(Math.random() * 5 * 30));
            }
            else {
                this.dataArray.push(Math.floor(Math.random() * 10));
            }
        }
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: this.labelsArray[set],
                datasets: [
                    {
                        label: 'You',
                        backgroundColor: 'rgba(178, 34, 34, 1)',
                        borderColor: 'rgba(178, 34, 34, 1)',
                        data: this.dataArray,
                        fill: false
                    }
                ],
                options: {
                    maintainAspectRatio: false,
                    title: {
                        display: false
                    }
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], WastePage.prototype, "lineCanvas", void 0);
    WastePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-waste',template:/*ion-inline-start:"/Users/headhuntar/Desktop/greenBox/src/pages/waste/waste.html"*/`<!--\n  Generated template for the WastePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Blue Box</ion-title>\n    <ion-buttons end>\n        <button>\n          <ion-icon name="mic" item-end></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h1>Waste</h1>\n  <ion-item>\n    <ion-label>Number of items trashed</ion-label>\n    <ion-select [(ngModel)]="period" (ionChange)="loadChart(period)">\n      <ion-option value="0">Week</ion-option>\n      <ion-option value="1">Month</ion-option>\n      <ion-option value="2">Year</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <canvas #lineCanvas></canvas>\n</ion-content>\n`/*ion-inline-end:"/Users/headhuntar/Desktop/greenBox/src/pages/waste/waste.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WastePage);
    return WastePage;
}());

//# sourceMappingURL=waste.js.map

/***/ })

},[335]);
//# sourceMappingURL=main.js.map