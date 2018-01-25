webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .container {\r\n    display: flex;\r\n    \r\n    height: 100vh;\r\n   \r\n  \r\n   \r\n}\r\n\r\n.Left,\r\n.Middle {\r\n    overflow: auto;\r\n    height: auto;\r\n    padding: .5rem;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: none;\r\n}\r\n\r\n.Left::-webkit-scrollbar,\r\n.Middle::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.Middle {\r\n    flex: 1;\r\n} */\r\n\r\n.Left{\r\n    \r\n    margin-top: 50px;\r\n}\r\n.Middle{\r\n   \r\n    margin-top: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"Left col-md-4\">\n                <app-leftsidebar></app-leftsidebar>\n                <app-allbrands></app-allbrands>\n                <app-latest-device></app-latest-device>\n        </div>\n    \n       <div class=\"Middle col-md-8\">\n            <flash-messages></flash-messages>\n            <router-outlet></router-outlet>\n            \n       </div>\n    </div>\n    \n    \n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <app-full-review></app-full-review>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: "AIzaSyAD1atXUsU6lrjvueM5dAv5Oa1o6xFGCQk",
            authDomain: "phoneinfo-adfa8.firebaseapp.com",
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_allbrands_allbrands_component__ = __webpack_require__("../../../../../src/app/components/allbrands/allbrands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_latest_device_latest_device_component__ = __webpack_require__("../../../../../src/app/components/latest-device/latest-device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_main_body_main_body_component__ = __webpack_require__("../../../../../src/app/components/main-body/main-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_news_news_component__ = __webpack_require__("../../../../../src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_reviews_reviews_component__ = __webpack_require__("../../../../../src/app/components/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_leftsidebar_leftsidebar_component__ = __webpack_require__("../../../../../src/app/components/leftsidebar/leftsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_full_review_full_review_component__ = __webpack_require__("../../../../../src/app/components/full-review/full-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_review_detail_review_detail_component__ = __webpack_require__("../../../../../src/app/components/review-detail/review-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_review_details_review_details_component__ = __webpack_require__("../../../../../src/app/components/review-details/review-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_selected_brand_selected_brand_component__ = __webpack_require__("../../../../../src/app/components/selected-brand/selected-brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_phone_detail_phone_detail_component__ = __webpack_require__("../../../../../src/app/components/phone-detail/phone-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_add_add_component__ = __webpack_require__("../../../../../src/app/components/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_add_review_add_review_component__ = __webpack_require__("../../../../../src/app/components/add-review/add-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_findphones_findphones_component__ = __webpack_require__("../../../../../src/app/components/findphones/findphones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_compare_compare_component__ = __webpack_require__("../../../../../src/app/components/compare/compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_news_details_news_details_component__ = __webpack_require__("../../../../../src/app/components/news-details/news-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_add_news_add_news_component__ = __webpack_require__("../../../../../src/app/components/add-news/add-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng_sticky__ = __webpack_require__("../../../../ng-sticky/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__nfilter_pipe__ = __webpack_require__("../../../../../src/app/nfilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_email_service__ = __webpack_require__("../../../../../src/app/services/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__cfilter_pipe__ = __webpack_require__("../../../../../src/app/cfilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_rating_service__ = __webpack_require__("../../../../../src/app/services/rating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_srating_service__ = __webpack_require__("../../../../../src/app/services/srating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_chart_chart_component__ = __webpack_require__("../../../../../src/app/components/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_review_by_user_review_by_user_component__ = __webpack_require__("../../../../../src/app/components/review-by-user/review-by-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_ureview_service__ = __webpack_require__("../../../../../src/app/services/ureview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_favourites_favourites_component__ = __webpack_require__("../../../../../src/app/components/favourites/favourites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_favourite_service__ = __webpack_require__("../../../../../src/app/services/favourite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_equal_validator_directive__ = __webpack_require__("../../../../../src/app/services/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__reverse_pipe__ = __webpack_require__("../../../../../src/app/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_email2_service__ = __webpack_require__("../../../../../src/app/services/email2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































 // import Loading




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_21__components_add_add_component__["a" /* AddComponent */] },
    { path: 'nav', component: __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'email', component: __WEBPACK_IMPORTED_MODULE_12__components_reviews_reviews_component__["a" /* ReviewsComponent */] },
    { path: 'findphones', component: __WEBPACK_IMPORTED_MODULE_29__components_findphones_findphones_component__["a" /* FindphonesComponent */] },
    { path: 'newRev', component: __WEBPACK_IMPORTED_MODULE_22__components_add_review_add_review_component__["a" /* AddReviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'newNews', component: __WEBPACK_IMPORTED_MODULE_34__components_add_news_add_news_component__["a" /* AddNewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_10__components_main_body_main_body_component__["a" /* MainBodyComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_11__components_news_news_component__["a" /* NewsComponent */] },
    { path: 'compare', component: __WEBPACK_IMPORTED_MODULE_31__components_compare_compare_component__["a" /* CompareComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_37__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_42__components_chart_chart_component__["a" /* ChartComponent */] },
    { path: 'favourite', component: __WEBPACK_IMPORTED_MODULE_47__components_favourites_favourites_component__["a" /* FavouritesComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_review_details_review_details_component__["a" /* ReviewDetailsComponent */] },
    { path: 'detail/:id/edit', component: __WEBPACK_IMPORTED_MODULE_22__components_add_review_add_review_component__["a" /* AddReviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'newsdetail/:id', component: __WEBPACK_IMPORTED_MODULE_33__components_news_details_news_details_component__["a" /* NewsDetailsComponent */] },
    { path: 'newsdetail/:id/edit', component: __WEBPACK_IMPORTED_MODULE_34__components_add_news_add_news_component__["a" /* AddNewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'slbrand/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_selected_brand_selected_brand_component__["a" /* SelectedBrandComponent */] },
    { path: 'slbrand/:id/new', component: __WEBPACK_IMPORTED_MODULE_21__components_add_add_component__["a" /* AddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'pdetail/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_phone_detail_phone_detail_component__["a" /* PhoneDetailComponent */] },
    { path: 'pdetail/:id/edit', component: __WEBPACK_IMPORTED_MODULE_21__components_add_add_component__["a" /* AddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_21__components_add_add_component__["a" /* AddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'toprating', component: __WEBPACK_IMPORTED_MODULE_15__components_review_detail_review_detail_component__["a" /* ReviewDetailComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_25__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_26__auth_signin_signin_component__["a" /* SigninComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_allbrands_allbrands_component__["a" /* AllbrandsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_latest_device_latest_device_component__["a" /* LatestDeviceComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_main_body_main_body_component__["a" /* MainBodyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_reviews_reviews_component__["a" /* ReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_leftsidebar_leftsidebar_component__["a" /* LeftsidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_full_review_full_review_component__["a" /* FullReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_review_detail_review_detail_component__["a" /* ReviewDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_review_details_review_details_component__["a" /* ReviewDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_selected_brand_selected_brand_component__["a" /* SelectedBrandComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_phone_detail_phone_detail_component__["a" /* PhoneDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_add_add_component__["a" /* AddComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_add_review_add_review_component__["a" /* AddReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_26__auth_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_findphones_findphones_component__["a" /* FindphonesComponent */],
            __WEBPACK_IMPORTED_MODULE_30__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_31__components_compare_compare_component__["a" /* CompareComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_news_details_news_details_component__["a" /* NewsDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_add_news_add_news_component__["a" /* AddNewsComponent */],
            __WEBPACK_IMPORTED_MODULE_35_ng_sticky__["a" /* NgStickyDirective */],
            __WEBPACK_IMPORTED_MODULE_36__nfilter_pipe__["a" /* NfilterPipe */],
            __WEBPACK_IMPORTED_MODULE_37__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_39__cfilter_pipe__["a" /* CfilterPipe */],
            __WEBPACK_IMPORTED_MODULE_42__components_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_review_by_user_review_by_user_component__["a" /* ReviewByUserComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_favourites_favourites_component__["a" /* FavouritesComponent */],
            __WEBPACK_IMPORTED_MODULE_49__services_equal_validator_directive__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_50__reverse_pipe__["a" /* ReversePipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_23__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_46_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_43_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__services_review_service__["a" /* ReviewService */], __WEBPACK_IMPORTED_MODULE_41__services_srating_service__["a" /* SratingService */], __WEBPACK_IMPORTED_MODULE_45__services_ureview_service__["a" /* UreviewService */], __WEBPACK_IMPORTED_MODULE_40__services_rating_service__["a" /* RatingService */], __WEBPACK_IMPORTED_MODULE_48__services_favourite_service__["a" /* FavouriteService */], __WEBPACK_IMPORTED_MODULE_32__services_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_38__services_email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_51__services_email2_service__["a" /* Email2Service */], __WEBPACK_IMPORTED_MODULE_19__services_brand_service__["a" /* BrandService */], __WEBPACK_IMPORTED_MODULE_24__services_data_storage_service__["a" /* DataStorageService */], __WEBPACK_IMPORTED_MODULE_27__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_28__auth_auth_guard_service__["a" /* AuthGuard */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router, flashMessagesService) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.adminChange2 = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    AuthService.prototype.signupUser = function (name, email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
                .then(function (res) {
                var user = __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser;
                user.sendEmailVerification().then(function (success) {
                    _this.flashMessagesService.show('Check email and verify Email', { cssClass: 'alert-success', timeout: 6000 });
                }).catch(function (err) {
                    _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 3000 });
                });
                res.updateProfile({
                    displayName: name,
                });
                // this.flashMessagesService.show('New user registered',{cssClass:'alert-success',timeout:3000});
                _this.router.navigate(['/signin']);
            }, function (err) { return reject(err); })
                .catch(function (err) {
                _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            });
        });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            if (response.emailVerified || response.uid == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') {
                // Redirect the user here
                _this.router.navigate(['/']);
                localStorage.setItem("user", __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.uid);
                localStorage.setItem("name", __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.displayName);
                if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
                    _this.adminauth = true;
                    console.log(_this.adminauth);
                }
                else {
                    _this.userauth = true;
                }
                __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getToken()
                    .then(function (token) {
                    localStorage.setItem('token', token);
                });
            }
            else {
                // Tell the user to have a look at its mailbox
                _this.flashMessagesService.show('Email not verified.Check email', { cssClass: 'alert-success', timeout: 6000 });
                _this.router.navigate(['/']);
            }
            // this.router.navigate(['/']);
            // localStorage.setItem("user", firebase.auth().currentUser.uid);
            // localStorage.setItem("name", firebase.auth().currentUser.displayName);
            // if((localStorage.getItem('user')=='FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user')=='dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')){
            //     this.adminauth=true;
            //     console.log(this.adminauth);
            // }
            // else{
            //     this.userauth=true;
            // }
            // firebase.auth().currentUser.getToken()
            // .then(
            //     (token:string) =>{
            //         localStorage.setItem('token',token);
            //     }
            // )
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
            _this.router.navigate(['/signin']);
        });
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().sendPasswordResetEmail(email)
            .then(function () {
            _this.flashMessagesService.show('Password reset email has been sent.', { cssClass: 'alert-success', timeout: 6000 });
            _this.router.navigate(['/signin']);
        })
            .catch(function (error) {
            _this.flashMessagesService.show(error.message, { cssClass: 'alert-danger', timeout: 8000 });
        });
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().sendPasswordResetEmail(email)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
        //this.token=null;
        this.adminauth = false;
        this.userauth = false;
        localStorage.clear();
    };
    AuthService.prototype.getToken = function () {
        // firebase.auth().currentUser.getToken()
        // .then(
        //     (token:string) =>this.token=token
        // );
        // return this.token;
        return localStorage.getItem('token');
    };
    AuthService.prototype.isAuthenticated = function () {
        //console.log(this.token);
        // return this.token != null;
        // if(localStorage.getItem('user')=='FTzCUkaxQxaKmISWlKQQOpo2ZHh2'){
        //     this.adminauth=true;
        //     console.log(this.adminauth);
        // }
        // else{
        //     this.userauth=true;
        // }
        return localStorage.getItem('token') != null;
    };
    AuthService.prototype.adminChange = function (admin) {
        this.adminChange2.next(admin);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': email.invalid && (email.dirty || email.touched), \n        'has-success': email.valid && (email.dirty || email.touched)\n   }\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" name=\"email\" id=\"email\" ngModel class=\"form-control\" required pattern=\"[^ @]*@[^ @]*\"\n        #email=\"ngModel\">\n        <div class=\"form-control-feedback\"\n        *ngIf=\"email.errors && (email.dirty || email.touched)\">\n     <p *ngIf=\"email.errors.required\">Email is required</p>\n     <p *ngIf=\"email.errors.pattern\">Email must contain at least the @ character</p>\n   </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': password.invalid && (password.dirty || password.touched),\n        'has-success': password.valid && (password.dirty || password.touched)\n  }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" id=\"password\" ngModel class=\"form-control\" required  minlength=\"6\"\n        #password=\"ngModel\">\n        <div class=\"form-control-feedback\"\n        *ngIf=\"password.errors && (password.dirty || password.touched)\">\n     <p *ngIf=\"password.errors.required\">Password is required</p>\n     <p *ngIf=\"password.errors.minlength\">Password must be at least 6 characters long</p>\n   </div>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\n      <button style=\"float:right;\" routerLink=\"/chart\" class=\"btn btn-primary\" type=\"button\">Forgot Password</button>\n    </form>\n    <div class=\"my-container\">\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    </div>\n  </div>\n \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = (function () {
    function SigninComponent(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.loading = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        this.loading = true;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password)
            .catch(function (err) {
            _this.loading = false;
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n      <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': name.invalid && (name.dirty || name.touched), \n          'has-success': name.valid && (name.dirty || name.touched)\n     }\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" name=\"name\" id=\"name\" ngModel class=\"form-control\" required #name=\"ngModel\">\n        <div class=\"form-control-feedback\" *ngIf=\"name.errors && (name.dirty || name.touched)\">\n          <p *ngIf=\"name.errors.required\">Name is required</p>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': email.invalid && (email.dirty || email.touched), \n        'has-success': email.valid && (email.dirty || email.touched)\n   }\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" name=\"email\" id=\"email\" ngModel class=\"form-control\" required pattern=\"[^ @]*@[^ @]*\" #email=\"ngModel\">\n        <div class=\"form-control-feedback\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\n          <p *ngIf=\"email.errors.required\">Email is required</p>\n          <p *ngIf=\"email.errors.pattern\">Email must contain at least the @ character</p>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': password.invalid && (password.dirty || password.touched),\n        'has-success': password.valid && (password.dirty || password.touched)\n  }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" id=\"password\" ngModel class=\"form-control\" required validateEqual=\"confirmPassword\" reverse=\"true\" minlength=\"6\" #password=\"ngModel\">\n        <div class=\"form-control-feedback\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\n          <p *ngIf=\"password.errors.required\">Password is required</p>\n          <p *ngIf=\"password.errors.minlength\">Password must be at least 6 characters long</p>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': confirmpassword.invalid && (confirmpassword.dirty || confirmpassword.touched),\n        'has-success': confirmpassword.valid && (confirmpassword.dirty || confirmpassword.touched)\n  }\">\n        <label for=\"confirmpassword\">Confirm Password</label>\n        <input type=\"password\" name=\"confirmpassword\" id=\"confirmpassword\" ngModel class=\"form-control\" required validateEqual=\"password\" minlength=\"6\" #confirmpassword=\"ngModel\">\n        <small [hidden]=\"confirmpassword.valid || (confirmpassword.pristine && !f.submitted)\">\n          <span style=\"color:red;font-size:16px;\" >Password mismatch</span> \n      </small>\n        <div class=\"form-control-feedback\" *ngIf=\"confirmpassword.errors && (confirmpassword.dirty || confirmpassword.touched)\">\n          <p *ngIf=\"confirmpassword.errors.required\">Password is required</p>\n          <p *ngIf=\"confirmpassword.errors.minlength\">Password must be at least 6 characters long</p>\n        </div>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign Up</button>\n    </form>\n    <div class=\"my-container\">\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.loading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        this.loading = true;
        var name = form.value.name;
        //console.log(name);
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(name, email, password)
            .catch(function (err) {
            _this.loading = false;
            _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 3000 });
            _this.router.navigate(['/signup']);
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/cfilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CfilterPipe = (function () {
    function CfilterPipe() {
    }
    CfilterPipe.prototype.transform = function (items, termm) {
        if (!items)
            return [];
        if (!termm)
            return items;
        termm = termm.toString().toLowerCase();
        return items.filter(function (it) {
            return it.model.toString().toLowerCase().includes(termm);
        });
    };
    return CfilterPipe;
}());
CfilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'cfilter'
    })
], CfilterPipe);

//# sourceMappingURL=cfilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-news/add-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-news/add-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left:10px;\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <!-- <button type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Save</button> -->\n          <!-- <button  type=\"button\" class=\"btn btn-success\" (click)=\"onAddPhone()\">Add Phone</button> -->\n          <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button> -->\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"imagePath\"><h4>Image</h4></label><br>\n            <!-- <input type=\"file\" name=\"imagePath\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\" > -->\n           \n            <input type=\"file\" onchange=\"document.getElementById('imagePath').value = this.value.split('\\\\').pop().split('/').pop().replace(/\\.\\w+$/, ' ')\">\n            <input type=\"text\" name=\"imagePath\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"title\"><h4>Title</h4></label>\n            <input type=\"text\" id=\"title\" formControlName=\"title\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"body\"><h4>Body</h4></label>\n            <input type=\"text\" id=\"body\" formControlName=\"body\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea type=\"text\" id=\"description\" formControlName=\"description\" class=\"form-control\" rows=\"10\" cols=\"100\">\n\n            </textarea>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Save</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-news/add-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNewsComponent = (function () {
    function AddNewsComponent(route, newsService, dataStorageService, router) {
        this.route = route;
        this.newsService = newsService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.editMode = false;
    }
    AddNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    AddNewsComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            console.log(this.recipeForm.value);
            this.newsService.updateNews(this.id, this.recipeForm.value);
            this.dataStorageService.storeNews().subscribe(function (response) {
                console.log(response);
            });
            this.router.navigate(['/newsdetail/' + this.id]);
        }
        else {
            this.newsService.addNews(this.recipeForm.value);
            console.log(this.recipeForm.value);
            this.dataStorageService.storeNews().subscribe(function (response) {
                console.log(response);
            });
            this.router.navigate(['news']);
        }
        //this.onCancel();
    };
    AddNewsComponent.prototype.initForm = function () {
        var newsImagePath = '';
        var newsTitle = '';
        var newsBody = '';
        var newsDescription = '';
        if (this.editMode) {
            var news = this.newsService.getNew(this.id);
            newsImagePath = news.imagePath;
            newsTitle = news.title;
            newsBody = news.body;
            newsDescription = news.description;
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'imagePath': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](newsImagePath),
            'title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](newsTitle, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'body': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](newsBody, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](newsDescription, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
    };
    return AddNewsComponent;
}());
AddNewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-news',
        template: __webpack_require__("../../../../../src/app/components/add-news/add-news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-news/add-news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], AddNewsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-news.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-review/add-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-review/add-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left:10px;\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n      <!-- <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Save</button>\n          <button  type=\"button\" class=\"btn btn-success\" (click)=\"onAddPhone()\">Add Phone</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\n        </div>\n      </div> -->\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"imagePath\"><h4>Image</h4></label><br>\n            <!-- <input type=\"file\" name=\"imagePath\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\" > -->\n           \n            <input type=\"file\" onchange=\"document.getElementById('imagePath').value = this.value.split('\\\\').pop().split('/').pop().replace(/\\.\\w+$/, ' ')\">\n            <input type=\"text\" name=\"imagePath\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"model\"><h4>Model</h4></label>\n            <input type=\"text\" id=\"model\" formControlName=\"model\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"body\"><h4>Body</h4></label>\n            <input type=\"text\" id=\"body\" formControlName=\"body\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"performance\"><h4>performance</h4></label>\n            <input type=\"text\" id=\"performance\" formControlName=\"performance\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"perImagePath\"><h4>Image</h4></label><br>\n            <!-- <input type=\"file\" name=\"imagePath\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\" > -->\n           \n            <input type=\"file\" onchange=\"document.getElementById('perImagePath').value = this.value.split('\\\\').pop().split('/').pop().replace(/\\.\\w+$/, ' ')\">\n            <input type=\"text\" name=\"perImagePath\" id=\"perImagePath\" formControlName=\"perImagePath\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"hardware\"><h4>hardware</h4></label>\n            <input type=\"text\" id=\"hardware\" formControlName=\"hardware\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"software\"><h4>software</h4></label>\n            <input type=\"text\" id=\"software\" formControlName=\"software\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"display\"><h4>display</h4></label>\n            <input type=\"text\" id=\"display\" formControlName=\"display\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"camera\"><h4>camera</h4></label>\n            <input type=\"text\" id=\"camera\" formControlName=\"camera\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"battery\"><h4>battery</h4></label>\n            <input type=\"text\" id=\"battery\" formControlName=\"battery\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Save</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-review/add-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddReviewComponent = (function () {
    function AddReviewComponent(route, reviewService, dataStorageService, router) {
        this.route = route;
        this.reviewService = reviewService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.editMode = false;
    }
    AddReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    AddReviewComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            console.log(this.recipeForm.value);
            this.reviewService.updateReview(this.id, this.recipeForm.value);
            this.dataStorageService.storeReviews().subscribe(function (response) {
                console.log(response);
            });
            this.router.navigate(['/detail/' + this.id]);
        }
        else {
            this.reviewService.addReview(this.recipeForm.value);
            console.log(this.recipeForm.value);
            this.dataStorageService.storeReviews().subscribe(function (response) {
                console.log(response);
            });
            this.router.navigate(['/']);
        }
        //this.onCancel();
    };
    AddReviewComponent.prototype.initForm = function () {
        var reviewImagePath = '';
        var reviewModel = '';
        var reviewBody = '';
        var reviewPerformance = '';
        var reviewPerImagePath = '';
        var reviewHardware = '';
        var reviewSoftware = '';
        var reviewDisplay = '';
        var reviewCamera = '';
        var reviewBattery = '';
        if (this.editMode) {
            var review = this.reviewService.getReview(this.id);
            reviewImagePath = review.imagePath;
            reviewModel = review.model;
            reviewBody = review.body;
            reviewPerformance = review.performance;
            reviewPerImagePath = review.perImagePath;
            reviewHardware = review.hardware;
            reviewSoftware = review.software;
            reviewDisplay = review.display;
            reviewCamera = review.camera;
            reviewBattery = review.battery;
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'imagePath': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewImagePath),
            'model': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewModel, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'body': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewBody, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'performance': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewPerformance, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'perImagePath': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewPerImagePath, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'hardware': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewHardware, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'software': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewSoftware, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'display': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewDisplay, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'camera': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewCamera, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'battery': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](reviewBattery, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
    };
    return AddReviewComponent;
}());
AddReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-review',
        template: __webpack_require__("../../../../../src/app/components/add-review/add-review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-review/add-review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], AddReviewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-review.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    \r\n      <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <!-- <button type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Save</button> -->\r\n            <button *ngIf=\"new && addp\" type=\"button\" class=\"btn btn-success\" (click)=\"onAddPhone()\">Add Phone</button>\r\n            <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-left:1px;\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\"><h4>Name</h4></label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"imagePath\">Image Url</label>\r\n              <input type=\"text\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\" #imagePath>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <!-- <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <img [src]=\"imagePath.value\" class=\"image-responsive\">\r\n          </div>\r\n        </div> -->\r\n        <div style=\"margin-left:10px;\" class=\"row\">\r\n          <div class=\"col-xs-12\" formArrayName=\"phones\">\r\n            <div class=\"row\" *ngFor=\"let phoneCtrl of recipeForm.get('phones').controls;let i=index\" [formGroupName]=\"i\" style=\"margin-top:10px;\">\r\n              <div *ngIf=\"id==i && edit;\">\r\n              \r\n                 <div class=\"col-xs-2\">\r\n                    <label for=\"imagePath\"><h4>Image</h4></label><br>\r\n                    <input type=\"file\" onchange=\"document.getElementById('imagePath').value = this.value.split('\\\\').pop().split('/').pop().replace(/\\.\\w+$/, ' ')\">\r\n                    <input type=\"text\" name=\"imagePath\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\">\r\n                    </div>\r\n                  <div class=\"col-xs-2\">\r\n                    <label for=\"memory\"><h4>Memory</h4></label>\r\n                    <input type=\"number\" class=\"form-control\" formControlName='memory'>\r\n                  </div>\r\n              <div class=\"col-xs-8\">\r\n                <label for=\"model\"><h4>Model</h4></label>\r\n                <input type=\"text\" class=\"form-control\" formControlName='model'>\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <label for=\"ram\"><h4>Ram</h4></label>\r\n                <input type=\"number\" class=\"form-control\" formControlName='ram'>\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <label for=\"display\"><h4>display</h4></label>\r\n                <input type=\"number\" class=\"form-control\" formControlName='display'>\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <label for=\"frontCamera\"><h4>frontCamera</h4></label>\r\n                <input type=\"number\" class=\"form-control\" formControlName='frontCamera'>\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <label for=\"backCamera\"><h4>backCamera</h4></label>\r\n                <input type=\"number\" class=\"form-control\" formControlName='backCamera'>\r\n              </div>\r\n              <div class=\"col-xs-8\">\r\n                <label for=\"os\"><h4>os</h4></label>\r\n                <input type=\"text\" class=\"form-control\" formControlName='os'>\r\n              </div>\r\n              <div class=\"col-xs-8\">\r\n                <label for=\"cpu\"><h4>cpu</h4></label>\r\n                <input type=\"text\" class=\"form-control\" formControlName='cpu'>\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <label for=\"battery\"><h4>battery</h4></label>\r\n                <input type=\"number\" class=\"form-control\" formControlName='battery'>\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <label for=\"price\"><h4>Price</h4></label>\r\n                <input type=\"number\" class=\"form-control\" formControlName='price'>\r\n              </div>\r\n\r\n              \r\n              \r\n              <!-- <div class=\"col-xs-2\" *ngIf=\"id==i\">\r\n                <button style=\"margin-top:5px;\" type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteIngredient(id)\">X</button>\r\n              </div> -->\r\n            </div>\r\n            <div *ngIf=\"new && !add\" [hidden]=\"true\">\r\n              \r\n              <div class=\"col-xs-2\">\r\n                  <label for=\"imagePath\"><h4>Image</h4></label><br>\r\n                  <input type=\"file\" onchange=\"document.getElementById('imagePath').value = this.value.split('\\\\').pop().split('/').pop().replace(/\\.\\w+$/, ' ')\">\r\n                  <input type=\"text\" name=\"imagePath\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\">\r\n                  </div>\r\n                    <div class=\"col-xs-2\">\r\n                      <label for=\"memory\"><h4>Memory</h4></label>\r\n                      <input type=\"number\" class=\"form-control\" formControlName='memory'>\r\n                    </div>\r\n                <div class=\"col-xs-8\">\r\n                  <label for=\"model\"><h4>Model</h4></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName='model'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"ram\"><h4>Ram</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='ram'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"display\"><h4>display</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='display'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"frontCamera\"><h4>frontCamera</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='frontCamera'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"backCamera\"><h4>backCamera</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='backCamera'>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                  <label for=\"os\"><h4>os</h4></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName='os'>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                  <label for=\"cpu\"><h4>cpu</h4></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName='cpu'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"battery\"><h4>battery</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='battery'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"price\"><h4>Price</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='price'>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"new && add && i==len || len==null\">\r\n                  \r\n                <div class=\"col-xs-2\">\r\n                    <label for=\"imagePath\"><h4>Image</h4></label><br>\r\n                    <input type=\"file\" onchange=\"document.getElementById('imagePath').value = this.value.split('\\\\').pop().split('/').pop().replace(/\\.\\w+$/, ' ')\">\r\n                    <input type=\"text\" name=\"imagePath\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-xs-2\">\r\n                      <label for=\"memory\"><h4>Memory</h4></label>\r\n                      <input type=\"number\" class=\"form-control\" formControlName='memory'>\r\n                    </div>\r\n                <div class=\"col-xs-8\">\r\n                  <label for=\"model\"><h4>Model</h4></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName='model'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"ram\"><h4>Ram</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='ram'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"display\"><h4>display</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='display'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"frontCamera\"><h4>frontCamera</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='frontCamera'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"backCamera\"><h4>backCamera</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='backCamera'>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                  <label for=\"os\"><h4>os</h4></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName='os'>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                  <label for=\"cpu\"><h4>cpu</h4></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName='cpu'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"battery\"><h4>battery</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='battery'>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <label for=\"price\"><h4>Price</h4></label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName='price'>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <!-- <div class=\"row\">\r\n              <div class=\"col-xs-12\">\r\n                <button  type=\"button\" class=\"btn btn-success\" (click)=\"onAddPhone()\">Add Phone</button>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          \r\n               \r\n              \r\n        </div>\r\n        <button style=\"margin-top:5px;\" type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Save</button>\r\n        \r\n      </form>\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/components/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddComponent = (function () {
    function AddComponent(location, route, brandService, dataStorageService, router) {
        this.location = location;
        this.route = route;
        this.brandService = brandService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.editMode = false;
        this.addp = true;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            if (!_this.add) {
                console.log("initform");
                _this.initForm();
            }
        });
        this.new = this.brandService.new;
        this.edit = this.brandService.edit;
        console.log(this.new);
        console.log(this.edit);
        this.len = this.recipeForm.get('phones.length');
        console.log(typeof this.len);
    };
    AddComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.bid = this.brandService.bid;
            console.log(this.recipeForm.value);
            this.brandService.updateBrand(this.id, this.bid, this.recipeForm.value);
            this.dataStorageService.storeBrands().subscribe(function (response) {
                console.log(response);
            });
            if (this.edit) {
                this.router.navigate(['/pdetail/' + this.id]);
            }
            else if (this.new) {
                this.router.navigate(['/slbrand/' + this.bid]);
            }
        }
        else {
            this.brandService.addBrand(this.recipeForm.value);
        }
        //this.onCancel();
    };
    AddComponent.prototype.onAddPhone = function () {
        this.addp = false;
        this.add = true;
        console.log(this.add);
        console.log(this.recipeForm.get('phones'));
        this.len = this.recipeForm.get('phones.length');
        console.log(typeof this.len);
        this.recipeForm.get('phones').push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'imagePath': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null),
            'memory': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
            'model': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'ram': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
            'display': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+\.?[0-9]*$/)]),
            'frontCamera': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
            'backCamera': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
            'os': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'cpu': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'battery': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
            'price': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+\.?[0-9]*$/)]),
        }));
    };
    AddComponent.prototype.onDeleteIngredient = function (index) {
        //(<FormArray>this.recipeForm.get('phones')).removeAt(index);
        this.bid = this.brandService.bid;
        this.brandService.brands[this.bid].phones.splice(this.id, 1);
        this.dataStorageService.storeBrands().subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['/slbrand/' + this.bid]);
    };
    AddComponent.prototype.initForm = function () {
        var brandName = '';
        var brandPhones = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([]);
        this.bid = this.brandService.bid;
        var brand = this.brandService.getBrand(this.bid);
        brandName = brand.name;
        if (this.editMode) {
            this.bid = this.brandService.bid;
            var brand_1 = this.brandService.getBrand(this.bid);
            brandName = brand_1.name;
            //this.phone=brand.phones[this.id]
            //this.phone=this.brandService.getPhone(this.id,this.bid);
            for (var _i = 0, _a = brand_1.phones; _i < _a.length; _i++) {
                var phone = _a[_i];
                brandPhones.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                    'imagePath': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.imagePath),
                    'memory': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.memory, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
                    'model': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.model, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                    'ram': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.ram, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
                    'display': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.display, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
                    'frontCamera': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.frontCamera, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
                    'backCamera': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.backCamera, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
                    'os': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.os, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                    'cpu': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.cpu, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                    'battery': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.battery, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
                    'price': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](phone.price, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[1-9]+[0-9]*$/)]),
                }));
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](brandName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'phones': brandPhones,
        });
    };
    return AddComponent;
}());
AddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add',
        template: __webpack_require__("../../../../../src/app/components/add/add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add/add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_brand_service__["a" /* BrandService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], AddComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/allbrands/allbrands.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/allbrands/allbrands.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <button *ngIf=\"authService.isAuthenticated() && admin\"  type=\"button\" class=\"btn btn-success\" (click)=\"addBrand()\">Add Brand</button> -->\n<div *ngIf=\"showadd\" class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n      \n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label style=\"margin-left: 30px;\" for=\"name\"><h4>Name</h4></label>\n            <input style=\"margin-left: 30px;\" type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button  type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Save</button>\n          </div>\n        </div>\n      </div>\n      </form>\n      </div>\n      </div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let brand of brands;let i=index\">\n      <a  [routerLink]=\"['/slbrand/'+i]\">{{brand.name}}</a>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/allbrands/allbrands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllbrandsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllbrandsComponent = (function () {
    function AllbrandsComponent(brandService, authService, dataStorageService, router, route) {
        this.brandService = brandService;
        this.authService = authService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.route = route;
        this.showadd = false;
    }
    AllbrandsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.brandService.phonesChanged.subscribe(function (brands) {
            _this.brands = brands;
            _this.dataStorageService.getBrands();
            _this.brands = _this.brandService.getBrands();
        });
        this.brands = this.brandService.getBrands();
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
        });
        if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
            this.adminauth = true;
            //console.log(this.adminauth);
        }
        else {
            this.userauth = true;
        }
        this.admin = this.authService.adminauth;
        this.admin = this.adminauth;
        //console.log('admin',this.admin);
        this.authService.adminChange2.subscribe(function (adminChange2) {
            _this.admin = adminChange2;
            //console.log('fav3c adminchange2',this.admin);
        });
    };
    AllbrandsComponent.prototype.onSubmit = function () {
        this.brandService.brands.push(this.recipeForm.value);
        this.dataStorageService.storeBrands().subscribe(function (response) {
            //console.log(response);
        });
        this.dataStorageService.getBrands();
        this.brands = this.brandService.getBrands();
        this.router.navigate(['/']);
        this.recipeForm.reset();
    };
    AllbrandsComponent.prototype.addBrand = function () {
        this.showadd = !this.showadd;
    };
    AllbrandsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AllbrandsComponent;
}());
AllbrandsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-allbrands',
        template: __webpack_require__("../../../../../src/app/components/allbrands/allbrands.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/allbrands/allbrands.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], AllbrandsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=allbrands.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': email.invalid && (email.dirty || email.touched), \n        'has-success': email.valid && (email.dirty || email.touched)\n   }\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" name=\"email\" id=\"email\" ngModel class=\"form-control\" required pattern=\"[^ @]*@[^ @]*\" #email=\"ngModel\">\n        <div class=\"form-control-feedback\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\n          <p *ngIf=\"email.errors.required\">Email is required</p>\n          <p *ngIf=\"email.errors.pattern\">Email must contain at least the @ character</p>\n        </div>\n      </div>\n      <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">Send Password reset email</button>\n    </form>\n    <div class=\"my-container\">\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartComponent = (function () {
    function ChartComponent(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.loading = false;
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loading = true;
        var email = form.value.email;
        this.authService.resetPassword(email)
            .catch(function (err) {
            _this.loading = false;
        });
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/components/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ChartComponent);

var _a, _b, _c;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/compare/compare.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.stars, span.stars span {\r\n    display: block;\r\n   /* Download the star image here: http://stackoverflow.com/questions/1987524/turn-a-number-into-star-rating-display-using-jquery-and-css */\r\n    background: url('https://apppresser.com/wp-content/uploads/2015/11/stars.png') 0 -16px repeat-x;\r\n    width: 80px;\r\n    height: 16px;\r\n  }\r\n  \r\n  span.stars span {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  table {\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  table, td, th {\r\n    border: 1px solid black;\r\n  }\r\n  th, td {\r\n    padding: 10px;\r\n    text-align: left;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compare/compare.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!rest\">\n    <div class=\"col-md-4\" *ngFor=\"let c of phoneCompare;let j=index;\">\n        <img src=\"assets/img/{{c.imagePath}}.jpg\" alt=\"\">\n        <br>Model: {{c.model}}\n        <br> Memory: {{c.memory}}\n        <br>Ram: {{c.ram}}\n        <br>Display: {{c.display}}\n        <br>Front Camera: {{c.frontCamera}}\n        <br>Back Camera: {{c.backCamera}}\n        <br>Battery: {{c.battery}}\n        <br>Price: ${{c.price}}\n        <div *ngFor=\"let ar of avgratingArr;let i=index\">\n            <div *ngIf=\"j==i\">\n                <h5 *ngIf=\"ar>0\">average rating: {{ar | number : '1.1-1'}}</h5>\n                <h5 *ngIf=\"ar<1 \">Not rated yet</h5> \n                <span *ngIf=\"ar>0\" class=\"stars alignright\">\n                <span [ngStyle]=\"{ 'width': getStars(ar) }\"></span>\n                </span>\n            </div>     \n        </div>\n    </div>\n</div>\n\n<button style=\"margin-bottom:10px;\" *ngIf=\"phoneCompare.length>0 && !rest\" class=\"btn btn-primary\"  (click)=\"reset()\"> Reset Compare</button>\n<hr>\n<!-- <input [(ngModel)]=\"term\" placeholder=\"search by model\"> -->\n<div class=\"row\">\n    <div class=\"col-md-6\" style=\"float:left;\">\n        <input [(ngModel)]=\"term\" placeholder=\"search by model\" (click)=\"hidee()\"><button type=\"button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n        <div *ngFor=\"let brand of brands;let i=index\">\n            <div *ngFor=\"let phone of brand['phones'] | filter : term;let j=index\">\n                <a (click)=\"bid(brand['phones'].indexOf(phone),i)\" *ngIf=\"!hide\">\n                    <img src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"\" style=\"margin-top:10px;\">\n                    <br> Model: {{phone.model}}\n                    <br>Memory: {{phone.memory}} GB\n                    <br>Ram: {{phone.ram}} GB\n                    <br>Display: {{phone.display}} inch,LED\n                    <br>Price: ${{phone.price}}\n                </a>\n            </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"hide\">\n                <img src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"\"style=\"margin-top:10px;margin-bottom:10px;\">\n                <br>\n                <table>\n                    <tr>\n                      <td>\n                        <h6> Model </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.model}} </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> Ram </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.ram}} GB </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> Memory </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.memory}} GB </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> Display </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.display}} inch,LED </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> Front Camera </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.frontCamera}} MP </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> Back Camera </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.backCamera}} MP </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> OS </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.os}} </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> CPU </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.cpu}} </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> Battery </h6>\n                      </td>\n                      <td>\n                        <h6> {{phone.battery}} mhz </h6>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h6> Price </h6>\n                      </td>\n                      <td>\n                        <h6>${{phone.price}} </h6>\n                      </td>\n                    </tr>\n                  </table>\n                <!-- <br> Model: {{phone.model}}\n                <br> Ram: {{phone.ram}} GB\n                <br> Memory: {{phone.memory}} GB\n                <br> Display: {{phone.display}} inch,LED\n                <br> FrontCamera: {{phone.frontCamera}} MP\n                <br> BackCamera: {{phone.backCamera}} MP\n                <br> OS: {{phone.os}}\n                <br> CPU: {{phone.cpu}}\n                <br> Battery: {{phone.battery}} mhz\n                <br> Price: ${{phone.price}} -->\n                <br>\n                <h5 *ngIf=\"avgrating1>0\">average rating: {{avgrating1 | number : '1.1-1'}}</h5>\n                <h5 *ngIf=\"avgrating1<1 \">Not rated yet</h5> \n                <span *ngIf=\"avgrating1>0\" class=\"stars alignright\">\n                <span [ngStyle]=\"{ 'width': getStars(avgrating1) }\"></span>\n              </span>\n                <br>\n            </div>\n    </div>\n    <div class=\"col-md-6\" style=\"float:left;\">\n            <input [(ngModel)]=\"termm\" placeholder=\"search by model\" (click)=\"hidee2()\"><button type=\"button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n            <div *ngFor=\"let brand of brands;let i=index\">\n                <div *ngFor=\"let phone of brand['phones'] | cfilter : termm;let j=index\">\n                    <a  (click)=\"bid2(brand['phones'].indexOf(phone),i)\" *ngIf=\"!hide2\">\n                        <img src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"\" style=\"margin-top:10px;\">\n                        <br> Model: {{phone.model}} \n                        <br>Memory: {{phone.memory}} GB\n                        <br>Ram: {{phone.ram}} GB\n                        <br>Display: {{phone.display}} inch,LED\n                        <br>Price: ${{phone.price}}\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-12\" *ngIf=\"hide2\">\n                    <img src=\"assets/img/{{phone2.imagePath}}.jpg\" alt=\"\"style=\"margin-top:10px;margin-bottom:10px;\">\n                    <br>\n                    <table>\n                        <tr>\n                          <td>\n                            <h6> Model </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.model}} </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> Ram </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.ram}} GB </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> Memory </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.memory}} GB </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> Display </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.display}} inch,LED </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> Front Camera </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.frontCamera}} MP </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> Back Camera </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.backCamera}} MP </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> OS </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.os}} </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> CPU </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.cpu}} </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> Battery </h6>\n                          </td>\n                          <td>\n                            <h6> {{phone2.battery}} mhz </h6>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <h6> Price </h6>\n                          </td>\n                          <td>\n                            <h6>${{phone2.price}} </h6>\n                          </td>\n                        </tr>\n                      </table>\n                    <!-- <br> Model: {{phone2.model}}\n                    <br> Ram: {{phone2.ram}} GB\n                    <br> Memory: {{phone2.memory}} GB\n                    <br> Display: {{phone2.display}} inch,LED\n                    <br> FrontCamera: {{phone2.frontCamera}} MP\n                    <br> BackCamera: {{phone2.backCamera}} MP\n                    <br> OS: {{phone2.os}}\n                    <br> CPU: {{phone2.cpu}}\n                    <br> Battery: {{phone2.battery}} mhz\n                    <br> Price: ${{phone2.price}} -->\n                    <br>\n                    <h5 *ngIf=\"avgrating2>0\">average rating: {{avgrating2 | number : '1.1-1'}}</h5>\n                    <h5 *ngIf=\"avgrating2<1 \">Not rated yet</h5> \n                    <span *ngIf=\"avgrating2>0\" class=\"stars alignright\">\n                    <span [ngStyle]=\"{ 'width': getStars(avgrating2) }\"></span>\n                  </span>\n                    <br>\n            </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/compare/compare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_srating_service__ = __webpack_require__("../../../../../src/app/services/srating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompareComponent = (function () {
    function CompareComponent(dataStorageService, brandService, route, router, sratingService) {
        this.dataStorageService = dataStorageService;
        this.brandService = brandService;
        this.route = route;
        this.router = router;
        this.sratingService = sratingService;
        this.avgrate = 0;
        this.one = 0;
        this.two = 0;
        this.three = 0;
        this.four = 0;
        this.five = 0;
    }
    CompareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brands = this.brandService.getBrands();
        this.phoneCompare = this.brandService.compare;
        this.subscription = this.sratingService.sratingChanged.subscribe(function (tsRating) {
            _this.tsRating = tsRating;
        });
        this.tsRating = this.sratingService.getSrating();
        this.k = 0;
        this.avgrate = 0;
        this.avgrating = 0;
        this.avgratingArr = [];
        for (var i = 0; i < this.phoneCompare.length; i++) {
            this.k = 0;
            this.avgrate = 0;
            this.avgrating = 0;
            for (var j = 0; j < this.tsRating.length; j++) {
                if (this.phoneCompare[i].model == this.tsRating[j].model) {
                    this.avgrate = (this.tsRating[j].like + this.avgrate);
                    this.k++;
                    console.log('tsra', this.tsRating[i].like);
                }
            }
            if (this.k == 0 && this.avgrate == 0) {
                this.avgratingArr[i] = 0;
            }
            else {
                this.avgratingArr[i] = (this.avgrate / this.k);
            }
            //console.log(this.avgrating);
        }
    };
    CompareComponent.prototype.getStars = function (rating) {
        // Get the value
        var val = parseFloat(rating);
        // Turn value into number/100
        var size = val / 5 * 100;
        return size + '%';
    };
    CompareComponent.prototype.bid = function (id, bid) {
        this.hide = true;
        this.brandService.bid = bid;
        this.phone = this.brandService.getPhone(id, bid);
        window.scrollTo(0, 0);
        console.log('bid', this.bid);
        this.tsRating = this.sratingService.getSrating();
        this.k = 0;
        this.avgrate = 0;
        this.avgrating1 = 0;
        for (var i = 0; i < this.tsRating.length; i++) {
            if (this.phone.model == this.tsRating[i].model) {
                this.avgrate = (this.tsRating[i].like + this.avgrate);
                this.k++;
                console.log('tsra', this.tsRating[i].like);
            }
            //console.log(this.avgrating);
        }
        if (this.k == 0 && this.avgrate == 0) {
            this.avgrating1 = 0;
        }
        else {
            this.avgrating1 = (this.avgrate / this.k);
        }
    };
    CompareComponent.prototype.bid2 = function (id, bid) {
        this.hide2 = true;
        this.brandService.bid = bid;
        this.phone2 = this.brandService.getPhone(id, bid);
        window.scrollTo(0, 0);
        console.log('bid', this.bid);
        this.tsRating = this.sratingService.getSrating();
        this.k = 0;
        this.avgrate = 0;
        this.avgrating2 = 0;
        for (var i = 0; i < this.tsRating.length; i++) {
            if (this.phone2.model == this.tsRating[i].model) {
                this.avgrate = (this.tsRating[i].like + this.avgrate);
                this.k++;
                console.log('tsra', this.tsRating[i].like);
            }
            //console.log(this.avgrating);
        }
        if (this.k == 0 && this.avgrate == 0) {
            this.avgrating2 = 0;
        }
        else {
            this.avgrating2 = (this.avgrate / this.k);
        }
    };
    CompareComponent.prototype.hidee = function () {
        this.hide = false;
    };
    CompareComponent.prototype.hidee2 = function () {
        this.hide2 = false;
    };
    CompareComponent.prototype.reset = function () {
        this.brandService.compare = [];
        this.rest = true;
        this.avgratingArr = [];
    };
    return CompareComponent;
}());
CompareComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-compare',
        template: __webpack_require__("../../../../../src/app/components/compare/compare.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/compare/compare.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_srating_service__["a" /* SratingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_srating_service__["a" /* SratingService */]) === "function" && _e || Object])
], CompareComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=compare.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left:10px;\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <!-- <button type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Send</button> -->\n          <!-- <button  type=\"button\" class=\"btn btn-success\" (click)=\"onAddPhone()\">Add Phone</button> -->\n          <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button> -->\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\"><h4>Name</h4></label>\n            <input type=\"name\" id=\"name\" formControlName=\"name\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"email\"><h4>Email</h4></label>\n            <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"subject\"><h4>Subject</h4></label>\n            <input type=\"subject\" id=\"name\" formControlName=\"subject\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"message\">Message</label>\n            <textarea type=\"message\" id=\"message\" formControlName=\"message\" class=\"form-control\" rows=\"10\" cols=\"100\">\n\n            </textarea>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=!recipeForm.valid>Send</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_email_service__ = __webpack_require__("../../../../../src/app/services/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_email2_service__ = __webpack_require__("../../../../../src/app/services/email2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactComponent = (function () {
    function ContactComponent(route, newsService, dataStorageService, router, emailService, email2Service, flashMessagesService) {
        this.route = route;
        this.newsService = newsService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.emailService = emailService;
        this.email2Service = email2Service;
        this.flashMessagesService = flashMessagesService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ContactComponent.prototype.onSubmit = function () {
        this.today = new Date();
        var date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        var time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        if (this.today.getHours() < 12) {
            this.dateTime = date + ' ' + time + ' am';
        }
        else {
            this.dateTime = date + ' ' + time + ' pm';
        }
        this.dateTime = this.dateTime.toString();
        this.email2 = {
            name: this.recipeForm.value.name, email: this.recipeForm.value.email, subject: this.recipeForm.value.subject, message: this.recipeForm.value.message, date: this.dateTime
        };
        console.log('email', this.recipeForm.value);
        this.emailService.addEmail(this.recipeForm.value);
        //console.log(this.recipeForm.value);
        this.dataStorageService.storeEmail().subscribe(function (response) {
            //console.log(response);
        });
        this.email2Service.addEmail(this.email2);
        this.dataStorageService.storeEmail2().subscribe(function (response) {
            // console.log(response);
        });
        this.flashMessagesService.show('Email is sent', { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/']);
    };
    ContactComponent.prototype.initForm = function () {
        var emailName = '';
        var emailEmail = '';
        var emailSubject = '';
        var emailMessage = '';
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](emailName),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](emailEmail, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'subject': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](emailSubject, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'message': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](emailMessage, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_email_service__["a" /* EmailService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_email2_service__["a" /* Email2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_email2_service__["a" /* Email2Service */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _g || Object])
], ContactComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-main-body></app-main-body>\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/favourites/favourites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/favourites/favourites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\" *ngFor=\"let brand of brands;let i=index\">\n    <div *ngFor=\"let phone of brand['phones'];let j=index\">\n      <div *ngFor=\"let fav of favourite1\">\n        <div style=\"border-bottom:1px solid black;\" *ngIf=\"phone.model==fav.model && userID==fav.uid\">\n          <a [routerLink]=\"['/pdetail/'+j]\" (click)=\"bid(fav.bid)\">\n            <img style=\"margin-bottom:30px;margin-top:20px;\" src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"\">\n            <div style=\"float:right;width:200px;margin-right:210px;margin-top:30px;\">\n              Model: {{phone.model}}\n              <br> Memory: {{phone.memory}}\n              <br> Ram: {{phone.ram}}\n              <br> Display: {{phone.display}}\n              <br> Price: ${{phone.price}}\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/favourites/favourites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_favourite_service__ = __webpack_require__("../../../../../src/app/services/favourite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouritesComponent = (function () {
    function FavouritesComponent(favouriteService, brandService) {
        this.favouriteService = favouriteService;
        this.brandService = brandService;
    }
    FavouritesComponent.prototype.ngOnInit = function () {
        this.brands = this.brandService.getBrands();
        this.favourite1 = this.favouriteService.getFavourite();
        this.userID = localStorage.getItem('user');
    };
    FavouritesComponent.prototype.bid = function (bid) {
        this.brandService.bid = bid;
        console.log('bid', this.bid);
    };
    return FavouritesComponent;
}());
FavouritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-favourites',
        template: __webpack_require__("../../../../../src/app/components/favourites/favourites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/favourites/favourites.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_favourite_service__["a" /* FavouriteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_favourite_service__["a" /* FavouriteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_brand_service__["a" /* BrandService */]) === "function" && _b || Object])
], FavouritesComponent);

var _a, _b;
//# sourceMappingURL=favourites.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/findphones/findphones.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.stars, span.stars span {\r\n    display: block;\r\n   /* Download the star image here: http://stackoverflow.com/questions/1987524/turn-a-number-into-star-rating-display-using-jquery-and-css */\r\n    background: url('https://apppresser.com/wp-content/uploads/2015/11/stars.png') 0 -16px repeat-x;\r\n    width: 80px;\r\n    height: 16px;\r\n  }\r\n  \r\n  span.stars span {\r\n    background-position: 0 0;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/findphones/findphones.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n      <input [(ngModel)]=\"term\" placeholder=\"search by model\">\n      <button type=\"button\" style=\"float:left;\">\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n      </button>\n      \n  </div>\n  <div class=\"col-md-2\">\n    <h5>OR</h5>\n  </div>\n  <div class=\"col-md-5\">\n      \n      <button type=\"button\" class=\"btn btn-basic\" (click)=\"filter()\"> Filter</button>\n  </div>\n</div>\n\n\n\n<div *ngIf=\"filterchk\" class=\"row\">\n  <div class=\"col-md-12\">\n  <hr>\n\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div>\n          <h4>Memory</h4>\n          <div *ngFor=\"let m of memoryFilter;let i=index\">\n            <div *ngIf=\"i<3\">\n\n              <label>\n                <input type=\"radio\" name=\"filterm\" (click)=\"updateFilter(m,i)\">{{m.memory}} GB</label>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-3\">\n        <div>\n          <h4>Ram</h4>\n          <div *ngFor=\"let m of memoryFilter;let i=index\">\n\n            <!-- <h4 *ngIf=\"i==3\">Ram <hr></h4> -->\n            <div *ngIf=\"i>2\">\n\n              <label>\n                <input type=\"radio\" name=\"filterr\" (click)=\"updateFilter(m,i)\">{{m.ram}} GB</label>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n\n\n      <!-- <h4>Price Range</h4> -->\n\n      <div class=\"col-md-3\">\n        <div>\n          <h4>Price Range</h4>\n          <div *ngFor=\"let p of priceFilter;let i=index\">\n            <div>\n\n              <label>\n                <input type=\"radio\" name=\"filterp\" (click)=\"priceUpdFilter(p,i)\">$ {{p.price-200}} - {{p.price}} </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n    <!-- <div *ngFor=\"let r of ramFilter\">\n          <input type=\"checkbox\" [(ngModel)]=\"r.checked\" (click)=\"ramupdFilter(r)\">\n          <label>{{r.ram}} GB</label>\n        </div> -->\n\n\n    <h5>Filtered Phones:</h5>\n    <hr>\n    <div class=\"row\">\n      <h5 *ngIf=\"filterBrands.length<1\" style=\"padding-left:15px;\">No Item</h5>\n      <div class=\"col-md-4\" *ngFor=\"let phone of filterBrands\">\n        <a (click)=\"selectedFilter(phone.model)\">\n          <img src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"\">\n          <br> Model: {{phone.model}}\n          <br>Memory: {{phone.memory}} GB\n          <br> Ram: {{phone.ram}} GB\n          <br> Price: ${{phone.price}}\n        </a>\n      </div>\n    </div>\n    <hr>\n  </div>\n  <div *ngIf=\"selectedFilterPhone\">\n    <p>Details</p>\n    <img src=\"assets/img/{{selectedFilterPhoneDetail.imagePath}}.jpg\" alt=\"\">\n    <br> Model:{{selectedFilterPhoneDetail.model}}\n    <br> Memory:{{selectedFilterPhoneDetail.memory}}\n    <br> ram:{{selectedFilterPhoneDetail.ram}}\n    <br> display:{{selectedFilterPhoneDetail.display}}\n    <br> frontCamera:{{selectedFilterPhoneDetail.frontCamera}}\n    <br> backCamera:{{selectedFilterPhoneDetail.backCamera}}\n    <br> battery:{{selectedFilterPhoneDetail.battery}}\n    <br> price:{{selectedFilterPhoneDetail.price}}\n    <br>\n    <h5 *ngIf=\"avgrating1>0\">average rating: {{avgrating1 | number : '1.1-1'}}</h5>\n    <h5 *ngIf=\"avgrating1<1 \">Not rated yet</h5>\n    <span *ngIf=\"avgrating1>0\" class=\"stars alignright\">\n      <span [ngStyle]=\"{ 'width': getStars(avgrating1) }\"></span>\n    </span>\n    <button class=\"btn btn-primary\" (click)=\"compare(selectedFilterPhoneDetail)\">Add to compare</button>\n    <hr>\n  </div>\n</div>\n\n\n<hr>\n<h5 style=\"background-color:rgb(229, 235, 235);width:110px;\">All Phones:</h5>\n<hr>\n<div *ngIf=\"( reviews | filter: term).length === 0\">\n    <h5>No Matches</h5>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\" *ngFor=\"let brand of brands;let i=index\">\n    <div *ngFor=\"let phone of brand['phones'] | filter : term;let j=index\">\n      <div style=\"border-bottom:1px solid black;\" class=\"row\">\n        <div class=\"col-md-6\">\n          <a [routerLink]=\"['/pdetail/'+brand['phones'].indexOf(phone)]\" (click)=\"bid(i)\">\n            <img style=\"margin-bottom:10px;\" src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"col-md-6\">\n          <div>\n            <a [routerLink]=\"['/pdetail/'+brand['phones'].indexOf(phone)]\" (click)=\"bid(i)\">\n              Model: {{phone.model}}\n              <br>Memory: {{phone.memory}}GB\n              <br>Ram: {{phone.ram}}GB\n              <br>Display: {{phone.display}} inch,LED\n              <br>Price: ${{phone.price}}\n            </a>\n            <br>\n\n          </div>\n        </div>\n\n\n        <br>\n      </div>\n      <br>\n\n\n\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/findphones/findphones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindphonesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_srating_service__ = __webpack_require__("../../../../../src/app/services/srating.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindphonesComponent = (function () {
    function FindphonesComponent(brandService, router, route, sratingService) {
        this.brandService = brandService;
        this.router = router;
        this.route = route;
        this.sratingService = sratingService;
        this.memoryFilter = [{ checked: false, memory: 8 }, { checked: false, memory: 16 }, { checked: false, memory: 32 }, { checked: false, ram: 1 }, { checked: false, ram: 2 }, { checked: false, ram: 4 }];
        this.priceFilter = [{ checked: false, price: 300 }, { checked: false, price: 500 }, { checked: false, price: 700 }, { checked: false, price: 900 }, { checked: false, price: 1100 }, { checked: false, price: 1300 }];
        this.memC = 0;
        this.ramC = 0;
        this.pCk = 0;
        this.mCk = 0;
        this.ramFilter = [];
        this.filterArr = [];
        this.phoneArr = [];
        this.prUpd = [];
        this.prvFilBr = [];
        this.filterchk = false;
        this.avgrate = 0;
        this.selectedFilterPhone = false;
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
    }
    FindphonesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ramC = 0;
        this.memC = 0;
        this.subscription = this.brandService.phonesChanged.subscribe(function (brands) {
            _this.brands = brands;
        });
        this.brands = this.brandService.getBrands();
        // this.filterBrands = this.brands;
        console.log(this.brands);
        for (var i = 0; i < this.brands.length; i++) {
            for (var j = 0; j < this.brands[i].phones.length; j++) {
                this.phoneArr.push(this.brands[i].phones[j]);
                //console.log(this.phoneArr);
            }
        }
        this.filterBrands = this.phoneArr;
    };
    FindphonesComponent.prototype.filter = function () {
        this.filterchk = !this.filterchk;
        this.selectedFilterPhone = false;
    };
    FindphonesComponent.prototype.bid = function (bid) {
        this.brandService.bid = bid;
        console.log('bid', this.bid);
    };
    FindphonesComponent.prototype.updateFilter = function (appt, i) {
        var _this = this;
        //window.scrollTo(500,500);
        this.mCk = 1;
        this.pCk = 0;
        this.priceFilter = [{ checked: false, price: 300 }, { checked: false, price: 500 }, { checked: false, price: 700 }, { checked: false, price: 900 }, { checked: false, price: 1100 }, { checked: false, price: 1300 }];
        if (i > 2) {
            this.filterArr[1] = appt.ram;
            console.log('apt.ram', appt.ram);
        }
        if (i <= 2) {
            console.log('16 1', i);
            this.filterArr[0] = appt.memory;
            console.log('filter[0]', this.filterArr[0]);
        }
        if (i > 2) {
            this.ramC++;
            console.log(this.ramC, 'ramc');
            if (this.memC > 0) {
                this.filterBrands = this.phoneArr.filter(function (a) {
                    // return this.filterArr.indexOf(a.status) != -1
                    return _this.filterArr.length ? _this.filterArr.indexOf(a.memory) != -1 : _this.brands;
                });
                this.filterBrands = this.filterBrands.filter(function (a) {
                    // return this.filterArr.indexOf(a.status) != -1
                    return _this.filterArr.length ? _this.filterArr.indexOf(a.ram) != -1 : _this.brands;
                });
            }
            else {
                console.log('memc', this.memC);
                this.filterBrands = this.phoneArr.filter(function (a) {
                    // return this.filterArr.indexOf(a.status) != -1
                    return _this.filterArr.length ? _this.filterArr.indexOf(a.ram) != -1 : _this.brands;
                });
            }
        }
        if (i <= 2) {
            this.memC++;
            if (this.ramC > 0) {
                this.filterBrands = this.phoneArr.filter(function (a) {
                    // return this.filterArr.indexOf(a.status) != -1
                    return _this.filterArr.length ? _this.filterArr.indexOf(a.ram) != -1 : _this.brands;
                });
                console.log('ramc 2', this.ramC);
                this.filterBrands = this.filterBrands.filter(function (a) {
                    // return this.filterArr.indexOf(a.status) != -1
                    return _this.filterArr.length ? _this.filterArr.indexOf(a.memory) != -1 : _this.brands;
                });
            }
            else {
                console.log('ramc 2', this.ramC);
                this.filterBrands = this.phoneArr.filter(function (a) {
                    // return this.filterArr.indexOf(a.status) != -1
                    return _this.filterArr.length ? _this.filterArr.indexOf(a.memory) != -1 : _this.brands;
                });
            }
        }
        //return this.filterBrands;
        console.log('filterbrand', this.filterBrands);
    };
    FindphonesComponent.prototype.priceUpdFilter = function (appt, i) {
        //window.scrollTo(500,500);
        this.pCk++;
        this.prUpd = [];
        this.filterArr[2] = appt.price;
        console.log('apt.price', appt.price);
        if (this.mCk > 0) {
            if (this.pCk > 1) {
                this.filterBrands = this.prvFilBr;
            }
            this.prvFilBr = this.filterBrands;
            for (var j = 0; j < this.filterBrands.length; j++) {
                if (this.filterBrands[j].price > (appt.price - 200) && this.filterBrands[j].price < appt.price) {
                    this.prUpd.push(this.filterBrands[j]);
                }
            }
            this.filterBrands = this.prUpd;
            console.log('filterbr from pudfilter', this.filterBrands);
        }
        else {
            for (var j = 0; j < this.phoneArr.length; j++) {
                if (this.phoneArr[j].price > (appt.price - 200) && this.phoneArr[j].price < appt.price) {
                    this.prUpd.push(this.phoneArr[j]);
                }
            }
            this.filterBrands = this.prUpd;
            console.log('filterbr from pudfilter', this.filterBrands);
        }
    };
    FindphonesComponent.prototype.selectedFilter = function (phoneModel) {
        console.log(phoneModel);
        this.brands = this.brandService.getBrands();
        for (var i = 0; i < this.brands.length; i++) {
            for (var j = 0; j < this.brands[i].phones.length; j++) {
                this.phoneArr.push(this.brands[i].phones[j]);
                if (phoneModel == this.brands[i].phones[j].model) {
                    this.brandService.bid = i;
                    this.router.navigate(['/pdetail/' + j]);
                }
                //console.log(this.phoneArr);
            }
        }
        this.selectedFilterPhone = true;
        for (var i = 0; i < this.phoneArr.length; i++) {
            if (phoneModel == this.phoneArr[i].model) {
                console.log(this.phoneArr[i].model);
                //console.log('checking if');
                this.filterchk = false;
                this.selectedFilterPhoneDetail = this.phoneArr[i];
                this.tsRating = this.sratingService.getSrating();
                this.k = 0;
                this.avgrate = 0;
                this.avgrating1 = 0;
                for (var i_1 = 0; i_1 < this.tsRating.length; i_1++) {
                    if (phoneModel == this.tsRating[i_1].model) {
                        this.avgrate = (this.tsRating[i_1].like + this.avgrate);
                        this.k++;
                        console.log('tsra', this.tsRating[i_1].like);
                    }
                    //console.log(this.avgrating);
                }
                if (this.k == 0 && this.avgrate == 0) {
                    this.avgrating1 = 0;
                }
                else {
                    this.avgrating1 = (this.avgrate / this.k);
                }
                console.log(this.selectedFilterPhoneDetail);
            }
        }
        window.scrollTo(0, 0);
    };
    FindphonesComponent.prototype.getStars = function (rating) {
        // Get the value
        var val = parseFloat(rating);
        // Turn value into number/100
        var size = val / 5 * 100;
        return size + '%';
    };
    FindphonesComponent.prototype.compare = function (comparePhone) {
        this.brandService.compare.push(comparePhone);
        console.log(this.brandService.compare);
    };
    FindphonesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return FindphonesComponent;
}());
FindphonesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-findphones',
        template: __webpack_require__("../../../../../src/app/components/findphones/findphones.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/findphones/findphones.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_srating_service__["a" /* SratingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_srating_service__["a" /* SratingService */]) === "function" && _d || Object])
], FindphonesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=findphones.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/full-review/full-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#myFooter {\r\n    background-color: #3a3f46;\r\n    color: white;\r\n    margin-top:10px;\r\n    \r\n}\r\n\r\n\r\n\r\n#myFooter .info{\r\n    text-align: justify; \r\n    color: #afb0b1;\r\n}\r\n\r\n#myFooter ul {\r\n    list-style-type: none;\r\n    padding-left: 0;\r\n    line-height: 1.7;\r\n}\r\n\r\n#myFooter h5 {\r\n    font-size: 18px;\r\n    color: white;\r\n    font-weight: bold;\r\n   \r\n}\r\n\r\n#myFooter .logo{\r\n    margin-top: 10px;\r\n}\r\n\r\n#myFooter .second-bar .logo a{\r\n    color:white;\r\n    font-size: 28px;\r\n    float: left;\r\n    font-weight: bold;\r\n    line-height: 68px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#myFooter a {\r\n    color: #d2d1d1;\r\n    text-decoration: none;\r\n}\r\n\r\n#myFooter a:hover,\r\n#myFooter a:focus {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n#myFooter .second-bar {\r\n    text-align: center;\r\n    background-color: #33373e;\r\n    text-align: center;\r\n}\r\n\r\n#myFooter .second-bar a {\r\n    font-size: 22px;\r\n    color: #9fa3a9;\r\n    padding: 10px;\r\n    transition: 0.2s;\r\n    line-height: 68px;\r\n}\r\n\r\n#myFooter .second-bar a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n#myFooter .social-icons {\r\n    float:right;\r\n}\r\n\r\n\r\n#myFooter .facebook:hover {\r\n    color: #0077e2;\r\n}\r\n\r\n#myFooter .google:hover {\r\n    color: #ef1a1a;\r\n}\r\n\r\n#myFooter .twitter:hover {\r\n    color: #00aced;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    #myFooter {\r\n        text-align: center;\r\n    }\r\n\r\n    #myFooter .info{\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n\r\n\r\n/* CSS used for positioning the footers at the bottom of the page. */\r\n/* You can remove this. */\r\n\r\n\r\n\r\n\r\n\r\n/* .content{\r\n   flex: 1 0 auto;\r\n   -webkit-flex: 1 0 auto;\r\n   min-height: 200px;\r\n} */\r\n\r\n#myFooter{\r\n   -webkit-box-flex: 0;\r\n       -ms-flex: 0 0 auto;\r\n           flex: 0 0 auto;\r\n   -webkit-flex: 0 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/full-review/full-review.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    \n    \n   \n    <!-- <link rel=\"stylesheet\" href=\"http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css\"> -->\n   \n    \n\n\n\n\n    <footer id=\"myFooter\">\n\n        <div class=\"container-fluid\">\n            <p style=\"text-align:center;height:50px;margin-top:20px;\">\t&copy; 2018 PhoneInfo,Inc.All rights reserved</p>\n        </div>\n        <!-- <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <h5>Get started</h5>\n                    <ul>\n                        <li><a href=\"#\">Home</a></li>\n                        <li><a href=\"#\">Sign up</a></li>\n                        \n                    </ul>\n                </div>\n                <div class=\"col-sm-3\">\n                    <h5>About us</h5>\n                    <ul>\n                        <li><a href=\"#\">Company Information</a></li>\n                        <li><a href=\"#\">Contact us</a></li>\n                        \n                    </ul>\n                </div>\n                <div class=\"col-sm-3\">\n                    <h5>Support</h5>\n                    <ul>\n                        \n                        <li><a href=\"#\">Help desk</a></li>\n                        <li><a href=\"#\">Forums</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-3 info\">\n                    <h5>Information</h5>\n                    <p>  We give you the information, tools and advice that will help you decide what to buy and how to get the most out of the tech in your life.  </p>\n                </div>\n            </div>\n        </div> -->\n        <!-- <div class=\"second-bar\">\n           <div class=\"container\">\n                <h2 class=\"logo\"><a href=\"#\"> LOGO </a></h2>\n                <div class=\"social-icons\">\n                    <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"#\" class=\"google\"><i class=\"fa fa-google-plus\"></i></a>\n                </div>\n            </div>\n        </div> -->\n    </footer>\n    <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script> -->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/full-review/full-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullReviewComponent = (function () {
    function FullReviewComponent() {
    }
    FullReviewComponent.prototype.ngOnInit = function () {
    };
    return FullReviewComponent;
}());
FullReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-full-review',
        template: __webpack_require__("../../../../../src/app/components/full-review/full-review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/full-review/full-review.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FullReviewComponent);

//# sourceMappingURL=full-review.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/latest-device/latest-device.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/latest-device/latest-device.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<h3 style=\"margin-top:10px;\">News Article</h3>\n<hr>\n<div style=\"cursor:pointer;\" class=\"row\" *ngFor=\"let new of news;let i=index\">\n    <div class=\"col-md-12\" style=\"cursor:pointer;\" [routerLink]=\"['/newsdetail/'+i]\" style=\"width:400px;\">\n      <div class=\"card\" *ngIf=\"i<5\" style=\"margin-bottom:20px;\">\n        <div class=\"card-header\">\n          <h6>{{(new.title.length>50)? ( new.title | slice:0:50)+' ...':(new.title) }}</h6>\n        </div>\n        <div class=\"card-block\">\n          <p class=\"card-text\">{{(new.body.length>150)? ( new.body | slice:0:150)+' ...':(new.body)}}</p>\n        </div>\n      </div>\n        \n    </div>\n    \n        <!-- <ng-template #seeall style=\"margin-right:50px;\">\n            <button type=\"button\" style=\"margin-right:15px;margin-left:10px;\" *ngIf=\"i==9\" class=\"btn btn-primary btn-block \" routerLink=\"/news\"> See All News</button>\n            <br>\n        </ng-template> -->\n</div>\n<div style=\"position:sticky;top:70px;margin-bottom:30px;\">\n    <div class=\"card\" style=\"cursor:pointer;\" [routerLink]=\"['/newsdetail/5']\">\n      <div class=\"card-header\">\n        <h6>{{(news[5].title.length>50)? ( news[5].title | slice:0:50)+' ...':(news[5].title) }}</h6>\n      </div>\n      <div class=\"card-block\">\n        <p class=\"card-text\">{{(news[5].body.length>150)? ( news[5].body | slice:0:150)+' ...':(news[5].body)}}</p>\n      </div>\n    </div>\n    <br>\n    <div class=\"card\" style=\"cursor:pointer;\" [routerLink]=\"['/newsdetail/6']\">\n        <div class=\"card-header\">\n          <h6>{{(news[6].title.length>50)? ( news[6].title | slice:0:50)+' ...':(news[6].title) }}</h6>\n        </div>\n        <div class=\"card-block\">\n          <p class=\"card-text\">{{(news[6].body.length>150)? ( news[6].body | slice:0:150)+' ...':(news[6].body)}}</p>\n        </div>\n      </div>\n      <button type=\"button\" style=\"margin-top:20px;margin-left:0px;cursor:pointer;\"  class=\"btn btn-primary btn-block \" routerLink=\"/news\"> See All News</button>\n</div>\n\n\n\n\n  \n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/latest-device/latest-device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestDeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LatestDeviceComponent = (function () {
    function LatestDeviceComponent(newsService, authService, dataStorageService, route, router) {
        this.newsService = newsService;
        this.authService = authService;
        this.dataStorageService = dataStorageService;
        this.route = route;
        this.router = router;
    }
    LatestDeviceComponent.prototype.onScrollEvent = function ($event) {
        //console.log($event);
        //console.log($event.target.scrollingElement.scrollTop);
        var scroll = $event.target.scrollingElement.scrollTop;
        //console.log("scrolling");
        if (scroll > 1980) {
            this.stk = true;
            //console.log("asdasd",scroll);
            //console.log("stk",this.stk);
        }
        else if (scroll < 1800) {
            this.stk = false;
        }
    };
    LatestDeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.newsService.newsChanged.subscribe(function (news) {
            _this.news = news;
        });
        this.news = this.newsService.getNews();
        //this.dataStorageService.getNews();
        //this.dataStorageService.getReviews();
    };
    LatestDeviceComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return LatestDeviceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LatestDeviceComponent.prototype, "onScrollEvent", null);
LatestDeviceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-latest-device',
        template: __webpack_require__("../../../../../src/app/components/latest-device/latest-device.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/latest-device/latest-device.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        preserveWhitespaces: false,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], LatestDeviceComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=latest-device.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/leftsidebar/leftsidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/leftsidebar/leftsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary btn-block\" routerLink=\"/findphones\" role=\"button\"> Phone Finder</button>"

/***/ }),

/***/ "../../../../../src/app/components/leftsidebar/leftsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftsidebarComponent = (function () {
    function LeftsidebarComponent() {
    }
    LeftsidebarComponent.prototype.ngOnInit = function () {
    };
    return LeftsidebarComponent;
}());
LeftsidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-leftsidebar',
        template: __webpack_require__("../../../../../src/app/components/leftsidebar/leftsidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/leftsidebar/leftsidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LeftsidebarComponent);

//# sourceMappingURL=leftsidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-body/main-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-body/main-body.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 style=\"float:left;margin-right:15px;\">Reviews</h4><input [(ngModel)]=\"term\" placeholder=\"search by model\"><button type=\"button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n<button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-success\" style=\"cursor:pointer;margin-left:15px;\"  (click)=\"onAdd()\">Add review</button>\n<br><br>\n    <div *ngIf=\"( reviews | filter: term).length === 0\">\n        <h5>No Matches</h5>\n    </div>\n<div style=\"cursor:pointer;\" class=\"row\" *ngFor=\"let review of reviews | filter:term;let i=index\" >\n        \n    <div class=\"col-md-12\" [routerLink]=\"['/detail/'+reviews.indexOf(review)]\" style=\"width:700px;border:1px solid grey;padding-top:10px;padding-bottom:10px;border-radius:6px;\">\n      <div class=\"col-md-3\" class=\"float-left\" style=\"width:300px;margin-right:10px;\">\n          <img src=\"assets/img/{{review.imagePath}}.jpg\" class=\"img-fluid\" style=\"max-height:300px;max-width:300px;margin-top:5px;margin-bottom:5px;\">\n      </div>\n      <br>\n      <div class=\"col-md-9\" class=\"float-left\" style=\"width:400px;\">\n          <h3>{{(review.model.length>50)? ( review.model | slice:0:50)+' ...':(review.model) }}</h3><p>{{(review.body.length>150)? ( review.body | slice:0:150)+' ...':(review.body)}}</p>\n      </div>\n    </div>\n    \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main-body/main-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_favourite_service__ = __webpack_require__("../../../../../src/app/services/favourite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_email2_service__ = __webpack_require__("../../../../../src/app/services/email2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainBodyComponent = (function () {
    function MainBodyComponent(email2Service, reviewService, authService, dataStorageService, route, router, favouriteService) {
        this.email2Service = email2Service;
        this.reviewService = reviewService;
        this.authService = authService;
        this.dataStorageService = dataStorageService;
        this.route = route;
        this.router = router;
        this.favouriteService = favouriteService;
        this.fav2cnt = 0;
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
    }
    MainBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.reviewService.reviewsChanged.subscribe(function (reviews) {
            _this.reviews = reviews;
        });
        this.reviews = this.reviewService.getReviews();
        //this.dataStorageService.getBrands();
        if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
            this.adminauth = true;
            //console.log(this.adminauth);
        }
        else {
            this.userauth = true;
        }
        this.admin = this.authService.adminauth;
        this.admin = this.adminauth;
        this.authService.adminChange(this.admin);
        //console.log(this.admin);
        //this.dataStorageService.getReviews();
        this.userID = localStorage.getItem('user');
        //console.log(this.userID);
        this.fav2cnt = 0;
        this.favourite2 = this.favouriteService.getFavourite();
        for (var i = 0; i < this.favourite2.length; i++) {
            if (this.favourite2[i].uid == this.userID) {
                this.fav2cnt++;
            }
        }
        this.favouriteService.favcount(this.fav2cnt);
        this.email2Service.emailChanged2.subscribe(function (emails) {
            _this.emails = emails;
        });
        this.emails = this.email2Service.getEmail();
    };
    MainBodyComponent.prototype.onAdd = function () {
        this.router.navigate(['newRev']);
    };
    MainBodyComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return MainBodyComponent;
}());
MainBodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-body',
        template: __webpack_require__("../../../../../src/app/components/main-body/main-body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-body/main-body.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_email2_service__["a" /* Email2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_email2_service__["a" /* Email2Service */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_favourite_service__["a" /* FavouriteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_favourite_service__["a" /* FavouriteService */]) === "function" && _g || Object])
], MainBodyComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=main-body.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-bottom:10px;\">\n  <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded fixed-top\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n      aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" style=\"cursor:pointer;\" routerLink=\"/\">PhoneInfo</a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" style=\"cursor:pointer;\" routerLink=\"\">Dashboard</a>\n        </li> -->\n        <li class=\"nav-item\" style=\"color:black;\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" style=\"cursor:pointer;color:black;\" routerLink=\"/reviews\">Reviews</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" style=\"cursor:pointer;color:black;\" routerLink=\"/news\">News</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"authService.isAuthenticated() && admin\">\n          <a class=\"nav-link\" style=\"cursor:pointer; color:black;\" routerLink=\"/email\">Emails </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!admin\">\n          <a class=\"nav-link\" style=\"cursor:pointer; color:black;\" routerLink=\"/compare\">compare</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!admin\">\n          <a class=\"nav-link\" style=\"cursor:pointer; color:black;\" routerLink=\"/contact\">Contact</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" style=\"cursor:pointer; color:black;\" routerLink=\"/toprating\">Top rating</a>\n        </li> -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" style=\"cursor:pointer; color:black;\" routerLink=\"/favourite\" *ngIf=\"authService.isAuthenticated() && !admin\">My Favourites</a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <ng-template [ngIf]=\"!authService.isAuthenticated()\">\n          <li class=\"nav-item\" style=\"background-color:#68ece1; border-radius: 4px;\">\n            <a class=\"nav-link\" routerLink=\"/signup\" style=\"color:rgb(14, 13, 13);\">Register</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/signin\" style=\"color:black;\">Login</a>\n          </li>\n        </ng-template>\n        <li class=\"nav-item\" style=\"background-color:#d42038;\">\n          <a class=\"nav-link\" style=\"cursor:pointer;color:white;\" (click)=\"onLogout()\" *ngIf=\"authService.isAuthenticated()\">Logout</a>\n        </li>\n\n        <!-- <li  class=\"nav-item\"><a class=\"nav-link\" style=\"cursor:pointer;\" (click)=\"onSaveData()\" *ngIf=\"authService.isAuthenticated()\">Save Data</a></li>\n          <li  class=\"nav-item\"><a class=\"nav-link\" style=\"cursor:pointer;\" (click)=\"onFetchData()\" *ngIf=\"authService.isAuthenticated()\">Fetch Data</a></li>  -->\n      </ul>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_favourite_service__ = __webpack_require__("../../../../../src/app/services/favourite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_email2_service__ = __webpack_require__("../../../../../src/app/services/email2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = (function () {
    function NavbarComponent(email2Service, dataStorageService, brandService, route, router, authService, favouriteService) {
        this.email2Service = email2Service;
        this.dataStorageService = dataStorageService;
        this.brandService = brandService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.favouriteService = favouriteService;
        this.fav2cnt = 0;
        //this.onSaveData();
        this.onFetchData();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.email2Service.emailChanged2.subscribe(function (emails) {
            _this.emails = emails;
        });
        this.emails = this.email2Service.getEmail();
        //this.onSaveData();
        // this.favourite2=this.favouriteService.getFavourite();
        // for(let i=0;i<this.favourite2.length;i++){
        //   if(this.favourite2[i].uid==this.userID){
        //     this.fav2cnt++;
        //   }      
        // }
        // this.favouriteService.favcount(this.fav2cnt);
        this.userID = localStorage.getItem('user');
        this.favouriteService.favouriteChanged.subscribe(function (favourite1) {
            _this.favourite2 = favourite1;
            for (var i = 0; i < _this.favourite2.length; i++) {
                if (_this.favourite2[i].uid == _this.userID) {
                    _this.fav2cnt++;
                }
            }
            _this.favouriteService.favcount(_this.fav2cnt);
        });
        this.favouriteService.fav3cntChange.subscribe(function (fav3cntChange) {
            _this.fav3cntChange = fav3cntChange;
            //console.log('fav3c',this.fav3cntChange);
        });
        //this.fav3cntChange=this.favouriteService.fav3cnt;
        if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
            this.adminauth = true;
            //console.log(this.adminauth);
        }
        else {
            this.userauth = true;
        }
        this.admin = this.authService.adminauth;
        this.admin = this.adminauth;
        this.authService.adminChange2.subscribe(function (adminChange2) {
            _this.admin = adminChange2;
            //console.log('fav3c adminchange2',this.admin);
        });
    };
    NavbarComponent.prototype.onSaveData = function () {
        this.dataStorageService.storeBrands().subscribe(function (response) {
            console.log(response);
        });
        this.dataStorageService.storeReviews().subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.onFetchData = function () {
        this.dataStorageService.getBrands();
        this.dataStorageService.getReviews();
        this.dataStorageService.getNews();
        this.dataStorageService.getEmail2();
        this.dataStorageService.getRating();
        this.dataStorageService.getSrating();
        this.dataStorageService.getUreview();
        this.dataStorageService.getFavourite();
        // this.userID=localStorage.getItem('user');
        // console.log(this.userID);
        // this.fav2cnt=0;
        // this.favourite2=this.favouriteService.getFavourite();
        // for(let i=0;i<this.favourite2.length;i++){
        //   console.log('fav cnt',this.fav2cnt);
        //   console.log('id',this.favourite2[i].uid);
        //   if(this.favourite2[i].uid==this.userID){
        //     this.fav2cnt++;
        //     console.log('fav cnt',this.fav2cnt);
        //   }      
        // }
        // console.log('fav cnt',this.fav2cnt);
        // this.favouriteService.favcount(this.fav2cnt);
        // this.favouriteService.fav3cntChange.subscribe(
        //   (fav3cntChange:number)=>{
        //     this.fav3cntChange=fav3cntChange;
        //   }
        // );
        // this.fav3cntChange=this.favouriteService.fav3cnt;
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.admin = false;
        this.router.navigate(['']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_email2_service__["a" /* Email2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_email2_service__["a" /* Email2Service */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_brand_service__["a" /* BrandService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_favourite_service__["a" /* FavouriteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_favourite_service__["a" /* FavouriteService */]) === "function" && _g || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news-details/news-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* W3.CSS 4.08 January 2018 by Jan Egil and Borge Refsnes */\r\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\r\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\r\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\r\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\r\na{background-color:transparent;-webkit-text-decoration-skip:objects}\r\na:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\r\ndfn{font-style:italic}mark{background:#ff0;color:#000}\r\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}\r\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\r\nbutton,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}\r\nbutton,input{overflow:visible}button,select{text-transform:none}\r\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\r\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\r\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\r\n[type=checkbox],[type=radio]{padding:0}\r\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\r\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\r\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\r\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\n/* End extract */\r\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\r\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\r\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\r\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\r\n.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}\r\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\r\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\r\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\r\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\r\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   \r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\r\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\t\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news-details/news-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button *ngIf=\"authService.isAuthenticated() && admin\"  class=\"btn btn-success\" style=\"cursor:pointer;\" (click)=\"onEditItem()\">Edit</button> -->\n\n<!-- <button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-danger\" style=\"cursor:pointer;\" (click)=\"onDeleteItem()\">Delete</button> -->\n\n<div class=\"w3-container\" style=\" padding-left:0px;\">\n    <button *ngIf=\"authService.isAuthenticated() && admin\"  class=\"btn btn-success\" style=\"cursor:pointer;\" (click)=\"onEditItem()\">Edit</button>\n  \n   <button *ngIf=\"authService.isAuthenticated() && admin\" onclick=\"document.getElementById('id01').style.display='block'\" class=\" btn btn-danger\" style=\"cursor:pointer;\">Delete</button>\n \n   <div id=\"id01\" class=\"w3-modal\" >\n     <div class=\"w3-modal-content\" style=\"margin-left:500px;margin-top:150px;width:300px;height:100px;\">\n       <div class=\"w3-container\" >\n         <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\n         <h6>Are you sure?</h6>\n         <button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-danger\" style=\" cursor:pointer;margin-top:15px;\" (click)=\"onDeleteItem()\">Delete</button>\n         <button class=\"btn btn-basic\" type=\"button\"  onclick=\"document.getElementById('id01').style.display='none'\" style=\"cursor:pointer;margin-top:15px;margin-left:10px;\">Cancel</button>\n       </div>\n     </div>\n   </div>\n </div>\n<br><br>\n<div class=\"row\" style=\"position:sticky;top:60px;\">\n  <div class=\"col-md-12\">\n    <img src=\"assets/img/{{news.imagePath}}.jpg\" alt=\"\" style=\"max-height:300px;max-width:400px;\">\n    <h3>{{news.title}}</h3>\n    <p>{{news.body}}</p>\n    <p>{{news.description}}</p>\n  </div>\n  <button style=\"margin-left:10px;margin-bottom:10px;\" class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/news-details/news-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsDetailsComponent = (function () {
    function NewsDetailsComponent(location, newsService, dataStorageService, authService, route, router) {
        this.location = location;
        this.newsService = newsService;
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
    }
    NewsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.news = _this.newsService.getNew(_this.id);
        });
        if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
            this.adminauth = true;
            console.log(this.adminauth);
        }
        else {
            this.userauth = true;
        }
        this.admin = this.authService.adminauth;
        this.admin = this.adminauth;
    };
    NewsDetailsComponent.prototype.onEditItem = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    NewsDetailsComponent.prototype.onDeleteItem = function () {
        this.newsService.deleteNews(this.id);
        this.dataStorageService.storeNews().subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['news']);
    };
    NewsDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return NewsDetailsComponent;
}());
NewsDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news-details',
        template: __webpack_require__("../../../../../src/app/components/news-details/news-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/news-details/news-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object])
], NewsDetailsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=news-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h4 style=\"float:left;margin-right:15px;\">News</h4><input [(ngModel)]=\"term\" placeholder=\"search by title\"><button type=\"button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n<button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-success\" style=\"cursor:pointer;margin-left:15px;\"  (click)=\"onAdd()\">Add news</button>\n<br><br>\n<div *ngIf=\"( news | nfilter: term).length === 0\">\n    <h5>No Matches</h5>\n</div>\n<div style=\"cursor:pointer;\" class=\"row\" *ngFor=\"let new of news | nfilter:term;let i=index\" >\n \n    <div class=\"col-md-12\" [routerLink]=\"['/newsdetail/'+news.indexOf(new)]\" style=\"width:700px;border:1px solid grey; padding-top:10px;padding-bottom:10px;border-radius:6px;\">\n      <div class=\"col-md-3\" class=\"float-left\" style=\"width:300px;margin-right:10px;\">\n          <img src=\"assets/img/{{new.imagePath}}.jpg\" class=\"img-fluid\" style=\"max-height:300px;max-width:300px;margin-top:5px;margin-bottom:5px;\">\n      </div>\n      <br>\n      <div class=\"col-md-9\" class=\"float-left\" style=\"width:400px;\">\n          <h3>{{(new.title.length>50)? ( new.title | slice:0:50)+' ...':(new.title) }}</h3><p>{{(new.body.length>150)? ( new.body | slice:0:150)+' ...':(new.body)}}</p>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsComponent = (function () {
    function NewsComponent(newsService, authService, dataStorageService, route, router) {
        this.newsService = newsService;
        this.authService = authService;
        this.dataStorageService = dataStorageService;
        this.route = route;
        this.router = router;
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.today = new Date();
        var date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        var time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        if (this.today.getHours() < 12) {
            this.dateTime = date + ' ' + time + ' am';
        }
        else {
            this.dateTime = date + ' ' + time + ' pm';
        }
        this.dateTime = this.dateTime.toString();
        //console.log(typeof(this.dateTime));
        this.subscription = this.newsService.newsChanged.subscribe(function (news) {
            _this.news = news;
        });
        this.news = this.newsService.getNews();
        //this.dataStorageService.getNews();
        //this.dataStorageService.getReviews();
        if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
            this.adminauth = true;
            console.log(this.adminauth);
        }
        else {
            this.userauth = true;
        }
        this.admin = this.authService.adminauth;
        this.admin = this.adminauth;
    };
    NewsComponent.prototype.onAdd = function () {
        this.router.navigate(['newNews']);
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/components/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], NewsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/phone-detail/phone-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:500,100,300,700,400);", ""]);

// module
exports.push([module.i, "/* *{\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: roboto;\r\n} */\r\n\r\nbody{\r\n  background: #000;\r\n}\r\n\r\n.cont{\r\n  width: 93%;\r\n  max-width: 350px;\r\n  text-align: center;\r\n  margin: 4% auto;\r\n  padding: 30px 0;\r\n  background: #111;\r\n  color: #EEE;\r\n  border-radius: 5px;\r\n  border: thin solid #444;\r\n  overflow: hidden;\r\n}\r\n\r\nhr{\r\n  margin: 20px;\r\n  border: none;\r\n  border-bottom: thin solid rgba(255,255,255,.1);\r\n}\r\n\r\ndiv.title{\r\n  font-size: 2em;\r\n}\r\n\r\nh1 span{\r\n  font-weight: 300;\r\n  color: #Fd4;\r\n}\r\n\r\ndiv.stars{\r\n  width: 270px;\r\n  display: inline-block;\r\n}\r\n\r\ninput.star{\r\n  display: none;\r\n}\r\n\r\nlabel.star {\r\n  float: right;\r\n  padding: 10px;\r\n  font-size: 36px;\r\n  color: #444;\r\n  transition: all .2s;\r\n}\r\n\r\ninput.star:checked ~ label.star:before {\r\n  content:'\\F005';\r\n  color: #FD4;\r\n  transition: all .25s;\r\n}\r\n\r\n\r\ninput.star-5:checked ~ label.star:before {\r\n  color:#FE7;\r\n  text-shadow: 0 0 20px #952;\r\n}\r\n\r\ninput.star-1:checked ~ label.star:before {\r\n  color: #F62;\r\n}\r\nlabel.star:hover:before,\r\nlabel.star:hover~ label.star:before {\r\n   \r\n   color: gold;\r\n}\r\n\r\nlabel.star:hover{\r\n  -webkit-transform: rotate(-15deg) scale(1.3);\r\n          transform: rotate(-15deg) scale(1.3);\r\n}\r\n\r\nlabel.star:before{\r\n  content:'\\F006';\r\n  font-family: FontAwesome;\r\n}\r\n\r\n.rev-box{\r\n  overflow: hidden;\r\n  height: 0;\r\n  width: 100%;\r\n  transition: all .25s;\r\n}\r\n\r\ntextarea.review{\r\n  background: #222;\r\n  border: none;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  color: #EEE;\r\n}\r\n\r\nlabel.review{\r\n  display: block;\r\n  transition:opacity .25s;\r\n}\r\n\r\n\r\n\r\ninput.star:checked ~ .rev-box{\r\n  height: 125px;\r\n  overflow: visible;\r\n}\r\nspan.stars, span.stars span {\r\n  display: block;\r\n /* Download the star image here: http://stackoverflow.com/questions/1987524/turn-a-number-into-star-rating-display-using-jquery-and-css */\r\n  background: url('https://apppresser.com/wp-content/uploads/2015/11/stars.png') 0 -16px repeat-x;\r\n  width: 80px;\r\n  height: 16px;\r\n}\r\n\r\nspan.stars span {\r\n  background-position: 0 0;\r\n}\r\n\r\n/* .alignright {\r\nfloat:right;\r\n} */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable, td, th {\r\n  border: 1px solid black;\r\n}\r\nth, td {\r\n  padding: 10px;\r\n  text-align: left;\r\n}\r\n\r\n\r\n\r\n\r\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   \r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\r\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\t\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/phone-detail/phone-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  \n  <!-- <button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-success\" style=\"cursor:pointer;margin-bottom:10px;\"  (click)=\"onEditPhone()\">Edit Phone</button>  -->\n  \n  <!-- <button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-danger\" style=\"cursor:pointer;margin-bottom:10px;\"  (click)=\"deletePhone()\">Delete</button> -->\n\n  <div class=\"w3-container\" style=\" padding-left:0px;\">\n      <button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-success\" style=\"cursor:pointer;margin-bottom:10px;\"  (click)=\"onEditPhone()\">Edit Phone</button> \n       <button *ngIf=\"authService.isAuthenticated() && admin\" onclick=\"document.getElementById('id01').style.display='block'\" class=\" btn btn-danger\" style=\"cursor:pointer;margin-bottom:8px;\">Delete</button>\n     \n       <div id=\"id01\" class=\"w3-modal\" >\n         <div class=\"w3-modal-content\" style=\"margin-left:500px;margin-top:150px;width:300px;height:100px;\">\n           <div class=\"w3-container\" >\n             <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\n             <h6>Are you sure?</h6>\n             <button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-danger\" style=\"cursor:pointer;margin-bottom:10px; margin-top:15px;\"  (click)=\"deletePhone()\">Delete</button>\n             <button class=\"btn btn-basic\" type=\"button\"  onclick=\"document.getElementById('id01').style.display='none'\" style=\"cursor:pointer;margin-top:7px;margin-left:10px;\">Cancel</button>\n           </div>\n         </div>\n       </div>\n     </div>\n  \n  <br>\n  <div style=\"float:right;\">\n    <h6 *ngIf=\"authService.isAuthenticated() && !favCk\" ><button *ngIf=\"authService.isAuthenticated() && !favCk\" type=\"button\" class=\"btn btn-success\" style=\"float:right;\" (click)=\"addFav(phone.model)\"><i class=\"fa fa-bookmark-o fa-2x\" aria-hidden=\"true\"></i> Add to Favourite</button></h6>\n    \n  </div>\n  \n  <div style=\"float:right;\">\n    <h6 *ngIf=\"authService.isAuthenticated() && favCk\"><button *ngIf=\"authService.isAuthenticated() && favCk\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;\" (click)=\"removeFav()\" ><i class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i> Remove from Favourite</button></h6>\n    \n  </div>\n \n  <img src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"\"><br><br>\n  <table>\n    <tr>\n      <td>\n        <h6> Model </h6>\n      </td>\n      <td>\n        <h6> {{phone.model}} </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> Ram </h6>\n      </td>\n      <td>\n        <h6> {{phone.ram}} GB </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> Memory </h6>\n      </td>\n      <td>\n        <h6> {{phone.memory}} GB </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> Display </h6>\n      </td>\n      <td>\n        <h6> {{phone.display}} inch,LED </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> Front Camera </h6>\n      </td>\n      <td>\n        <h6> {{phone.frontCamera}} MP </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> Back Camera </h6>\n      </td>\n      <td>\n        <h6> {{phone.backCamera}} MP </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> OS </h6>\n      </td>\n      <td>\n        <h6> {{phone.os}} </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> CPU </h6>\n      </td>\n      <td>\n        <h6> {{phone.cpu}} </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> Battery </h6>\n      </td>\n      <td>\n        <h6> {{phone.battery}} mhz </h6>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h6> Price </h6>\n      </td>\n      <td>\n        <h6>${{phone.price}} </h6>\n      </td>\n    </tr>\n  </table>\n  <!-- Model: {{phone.model}}<br>\n  Ram: {{phone.ram}} GB<br>\n  Memory: {{phone.memory}} GB<br>\n  Display: {{phone.display}} inch,LED<br>\n  FrontCamera: {{phone.frontCamera}} MP<br>\n  BackCamera: {{phone.backCamera}} MP<br>\n  Os: {{phone.os}}<br>\n  Cpu: {{phone.cpu}}<br>\n  Battery: {{phone.battery}} mhz<br>\n  Price: ${{phone.price}} <br><br> -->\n<br>\n  <div *ngIf=\"givenStar==0 && authService.isAuthenticated()\" class=\"cont\">\n    <div class=\"stars\">\n      <form action=\"\">\n        <input class=\"star star-5\" id=\"star-5\" type=\"radio\" name=\"star\" (click)=\"srate(5)\" />\n        <label class=\"star star-5\" for=\"star-5\" (mouseover)=\"show(5)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-4\" id=\"star-4\" type=\"radio\" name=\"star\" (click)=\"srate(4)\" />\n        <label class=\"star star-4\" for=\"star-4\" (mouseover)=\"show(4)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-3\" id=\"star-3\" type=\"radio\" name=\"star\" (click)=\"srate(3)\" />\n        <label class=\"star star-3\" for=\"star-3\" (mouseover)=\"show(3)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-2\" id=\"star-2\" type=\"radio\" name=\"star\" (click)=\"srate(2)\" />\n        <label class=\"star star-2\" for=\"star-2\" (mouseover)=\"show(2)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-1\" id=\"star-1\" type=\"radio\" name=\"star\" (click)=\"srate(1)\" />\n        <label class=\"star star-1\" for=\"star-1\" (mouseover)=\"show(1)\" (mouseleave)=\"show(0)\"></label>\n      </form>\n    </div>\n    <p>click the stars</p>\n  </div>\n\n\n  \n  <div *ngIf=\"givenStar==5\" class=\"cont\">\n    <div class=\"stars\">\n      <form action=\"\">\n        <input class=\"star star-5\" id=\"star-5\" type=\"radio\" name=\"star\" [checked]=\"true\" (click)=\"srate(5)\" />\n        <label class=\"star star-5\" for=\"star-5\" (mouseover)=\"show(5)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-4\" id=\"star-4\" type=\"radio\" name=\"star\" (click)=\"srate(4)\" />\n        <label class=\"star star-4\" for=\"star-4\" (mouseover)=\"show(4)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-3\" id=\"star-3\" type=\"radio\" name=\"star\" (click)=\"srate(3)\" />\n        <label class=\"star star-3\" for=\"star-3\" (mouseover)=\"show(3)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-2\" id=\"star-2\" type=\"radio\" name=\"star\" (click)=\"srate(2)\" />\n        <label class=\"star star-2\" for=\"star-2\" (mouseover)=\"show(2)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-1\" id=\"star-1\" type=\"radio\" name=\"star\" (click)=\"srate(1)\" />\n        <label class=\"star star-1\" for=\"star-1\" (mouseover)=\"show(1)\" (mouseleave)=\"show(0)\"></label>\n      </form>\n    </div>\n    <p>click the stars</p>\n    <button class=\"btn btn-danger\" style=\"width:50px;float:right;\" (click)=\"delete()\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n    <!-- <h5>Excellent</h5> -->\n  </div>\n  \n  <div *ngIf=\"givenStar==4\" class=\"cont\">\n    <div class=\"stars\">\n      <form action=\"\">\n        <input class=\"star star-5\" id=\"star-5\" type=\"radio\" name=\"star\" (click)=\"srate(5)\" />\n        <label class=\"star star-5\" for=\"star-5\" (mouseover)=\"show(5)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-4\" id=\"star-4\" type=\"radio\" name=\"star\" [checked]=\"true\" (click)=\"srate(4)\" />\n        <label class=\"star star-4\" for=\"star-4\" (mouseover)=\"show(4)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-3\" id=\"star-3\" type=\"radio\" name=\"star\" (click)=\"srate(3)\" />\n        <label class=\"star star-3\" for=\"star-3\" (mouseover)=\"show(3)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-2\" id=\"star-2\" type=\"radio\" name=\"star\" (click)=\"srate(2)\" />\n        <label class=\"star star-2\" for=\"star-2\" (mouseover)=\"show(2)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-1\" id=\"star-1\" type=\"radio\" name=\"star\" (click)=\"srate(1)\" />\n        <label class=\"star star-1\" for=\"star-1\" (mouseover)=\"show(1)\" (mouseleave)=\"show(0)\"></label>\n      </form>\n    </div>\n    <p>click the stars</p>\n    <button class=\"btn btn-danger\" style=\"width:50px;float:right;\" (click)=\"delete()\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n  </div>\n  \n  <div *ngIf=\"givenStar==3\" class=\"cont\">\n    <div class=\"stars\">\n      <form action=\"\">\n        <input class=\"star star-5\" id=\"star-5\" type=\"radio\" name=\"star\" (click)=\"srate(5)\" />\n        <label class=\"star star-5\" for=\"star-5\" (mouseover)=\"show(5)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-4\" id=\"star-4\" type=\"radio\" name=\"star\" (click)=\"srate(4)\" />\n        <label class=\"star star-4\" for=\"star-4\" (mouseover)=\"show(4)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-3\" id=\"star-3\" type=\"radio\" name=\"star\" [checked]=\"true\" (click)=\"srate(3)\" />\n        <label class=\"star star-3\" for=\"star-3\" (mouseover)=\"show(3)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-2\" id=\"star-2\" type=\"radio\" name=\"star\" (click)=\"srate(2)\" />\n        <label class=\"star star-2\" for=\"star-2\" (mouseover)=\"show(2)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-1\" id=\"star-1\" type=\"radio\" name=\"star\" (click)=\"srate(1)\" />\n        <label class=\"star star-1\" for=\"star-1\" (mouseover)=\"show(1)\" (mouseleave)=\"show(0)\"></label>\n      </form>\n    </div>\n    <p>click the stars</p>\n    <button class=\"btn btn-danger\" style=\"width:50px;float:right;\" (click)=\"delete()\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n    <!-- <h5>Average</h5> -->\n  </div>\n  \n  <div *ngIf=\"givenStar==2\" class=\"cont\">\n    <div class=\"stars\">\n      <form action=\"\">\n        <input class=\"star star-5\" id=\"star-5\" type=\"radio\" name=\"star\" (click)=\"srate(5)\" />\n        <label class=\"star star-5\" for=\"star-5\" (mouseover)=\"show(5)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-4\" id=\"star-4\" type=\"radio\" name=\"star\" (click)=\"srate(4)\" />\n        <label class=\"star star-4\" for=\"star-4\" (mouseover)=\"show(4)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-3\" id=\"star-3\" type=\"radio\" name=\"star\" (click)=\"srate(3)\" />\n        <label class=\"star star-3\" for=\"star-3\" (mouseover)=\"show(3)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-2\" id=\"star-2\" type=\"radio\" name=\"star\" [checked]=\"true\" (click)=\"srate(2)\" />\n        <label class=\"star star-2\" for=\"star-2\" (mouseover)=\"show(2)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-1\" id=\"star-1\" type=\"radio\" name=\"star\" (click)=\"srate(1)\" />\n        <label class=\"star star-1\" for=\"star-1\" (mouseover)=\"show(1)\" (mouseleave)=\"show(0)\"></label>\n      </form>\n    </div>\n    <p>click the stars</p>\n    <button class=\"btn btn-danger\" style=\"width:50px;float:right;\" (click)=\"delete()\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n  </div>\n  \n  <div *ngIf=\"givenStar==1\" class=\"cont\">\n    <div class=\"stars\">\n      <form action=\"\">\n        <input class=\"star star-5\" id=\"star-5\" type=\"radio\" name=\"star\" (click)=\"srate(5)\" />\n        <label class=\"star star-5\" for=\"star-5\" (mouseover)=\"show(5)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-4\" id=\"star-4\" type=\"radio\" name=\"star\" (click)=\"srate(4)\" />\n        <label class=\"star star-4\" for=\"star-4\" (mouseover)=\"show(4)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-3\" id=\"star-3\" type=\"radio\" name=\"star\" (click)=\"srate(3)\" />\n        <label class=\"star star-3\" for=\"star-3\" (mouseover)=\"show(3)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-2\" id=\"star-2\" type=\"radio\" name=\"star\" (click)=\"srate(2)\" />\n        <label class=\"star star-2\" for=\"star-2\" (mouseover)=\"show(2)\" (mouseleave)=\"show(0)\"></label>\n        <input class=\"star star-1\" id=\"star-1\" type=\"radio\" name=\"star\" [checked]=\"true\" (click)=\"srate(1)\" />\n        <label class=\"star star-1\" for=\"star-1\" (mouseover)=\"show(1)\" (mouseleave)=\"show(0)\"></label>\n      </form>\n    </div>\n    <p>click the stars</p>\n    <button class=\"btn btn-danger\" style=\"width:50px;float:right;\" (click)=\"delete()\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n  </div>\n  <div *ngIf=\"authService.isAuthenticated()\">\n      <h5 *ngIf=\"showText==5\">Excellent</h5>\n      <h5 *ngIf=\"showText==4\">Good</h5>\n      <h5 *ngIf=\"showText==3\">Average</h5>\n      <h5 *ngIf=\"showText==2\">Poor</h5>\n      <h5 *ngIf=\"showText==1\">Terrible</h5>\n    </div>\n      \n  <!-- <button class=\"btn btn-danger\" style=\"width:50px;float:right;\" (click)=\"delete()\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button> -->\n  <br>\n  <h5 *ngIf=\"avgrating>0\">Average rating: {{avgrating | number : '1.1-1'}}</h5>\n  <!-- <h6 *ngIf=\"!authService.isAuthenticated()\" style=\"color:rgb(116, 142, 190);float:right;\">Log in to give rating</h6> -->\n  <h5 *ngIf=\"avgrating<1 \">Not rated yet</h5> \n  <span *ngIf=\"avgrating>0\" class=\"stars alignright\">\n  <span [ngStyle]=\"{ 'width': getStars(avgrating) }\"></span>\n</span>\n\n<h6><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> {{k}} total</h6>\n<div>\n  <div *ngIf=\"avgrating>0\" style=\"display: block\">\n    <br>\n    <canvas baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n           \n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\">\n    </canvas>\n  </div>\n</div>\n  <br><br>\n  <button class=\"btn btn-primary\" (click)=\"compare(phone)\">Add to compare</button>\n  \n  <br>\n  <hr>\n</div>\n<!-- <div style=\"position:sticky;top:70px; float:right;\"><button (click)=\"gotop()\">top</button></div> -->\n\n<br>\n<h5 style=\"border-top:1px solid grey;\">Features</h5>\n<br>\n<div class=\"row\" *ngFor=\"let review of reviews;let i=index\" >\n    <div style=\"cursor:pointer;\" *ngIf=\"phone.model==review.model;\">\n     <div class=\"col-md-12\" [routerLink]=\"['/detail/'+i]\" style=\"width:600px;\">\n       <div class=\"col-md-3\"  style=\"width:200px;margin-right:10px;\">\n           <img src=\"assets/img/{{review.imagePath}}.jpg\" class=\"img-fluid\" style=\"max-height:300px;max-width:200px;\">\n       </div>\n       <br>\n       \n           <h3>{{review.model}}</h3>\n           \n           <p>{{review.body}}</p>\n     \n      <br>\n       <h5>Performance</h5>\n       <p>{{review.performance}}</p>\n       <img src=\"assets/perImg/{{review.perImagePath}}.JPG\" alt=\"\" style=\"max-height:500px;max-width:500px;\">\n       <h5>Hardware</h5>\n       <p>{{review.hardware}}</p>\n       <h5>Software</h5>\n       <p>{{review.software}}</p>\n       <h5>Display</h5>\n       <p>{{review.display}}</p>\n       <h5>Camera</h5>\n       <p>{{review.camera}}</p>\n       <h5>Battery</h5>\n       <p>{{review.battery}}</p>\n     </div>\n    </div>    \n </div>\n <div *ngIf=\"empLen\"><h6>Phone's Reivews form Expert are yet to come</h6></div>\n <br>\n <h5 style=\"border-top:1px solid grey;\">User's review</h5>\n <h6 *ngIf=\"!authService.isAuthenticated()\" style=\"color:rgb(165, 179, 206);\">Log in to post review</h6>\n <br>\n<div style=\"margin-left:20px;\" class=\"row\">\n  <div class=\"col-xs-10\">\n    <div *ngIf=\"authService.isAuthenticated()\" class=\"row\">\n      <div class=\"col-xs-12\">\n        <form (ngSubmit)=\"onAddItem(f)\" #f=\"ngForm\">\n\n          <div class=\"row\">\n            <div class=\"col-sm-5 form-group\">\n              <label for=\"comment\">Comment</label>\n              <!-- <input type=\"text\" id=\"comment\" class=\"form-control\" name=\"comment\" ngModel required> -->\n              <textarea type=\"message\" id=\"comment\" class=\"form-control\" name=\"comment\" required rows=\"4\" cols=\"200\" maxlength=\"80\" (keyup)=\"count(tweetmsg)\"\n                [(ngModel)]=\"tweetmsg\">\n                    \n                </textarea> {{characterleft}} charcter(s) left\n\n            </div>\n          </div>\n          <div style=\"margin-left:5px;\" class=\"row\">\n            <div class=\"col-xs-12\">\n              \n              <div class=\"w3-container\" style=\" padding-left:0px;\">\n                  <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\n    \n                 <button *ngIf=\"editMode\" onclick=\"document.getElementById('id02').style.display='block'\" type=\"button\" class=\" btn btn-danger\" style=\"cursor:pointer;\">Delete</button>\n                 <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n               \n                 <div id=\"id02\" class=\"w3-modal\" >\n                   <div class=\"w3-modal-content\" style=\"margin-left:500px;margin-top:150px;width:300px;height:100px;\">\n                     <div class=\"w3-container\" >\n                       <span onclick=\"document.getElementById('id02').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\n                       <h6>Are you sure?</h6>\n                       <button onclick=\"document.getElementById('id02').style.display='none'\" style=\"cursor:pointer;\"  class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\"> Delete</button>\n                       \n                       <button class=\"btn btn-basic\" type=\"button\"  onclick=\"document.getElementById('id02').style.display='none'\" style=\"cursor:pointer;margin-left:10px;\">Cancel</button>\n                     </div>\n                   </div>\n                 </div>\n               </div>\n              <!-- <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button> -->\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n    </div>\n\n    <div *ngFor=\"let ureview of ureviews;let i=index\">\n      <div *ngIf=\"phone.model==ureview.model\" style=\"width:500px;\">\n        <div class=\"card\" style=\"width:500px;\">\n          <div class=\"card-header\">\n            <h4>\n              <i class=\"fa fa-user\" aria-hidden=\"true\"> {{ureview.name}}</i> <h6 style=\"float:right;\">posted on: {{ureview.date}}</h6>\n            </h4>\n            \n          </div>\n          <div (scroll)=\"onScroll($event)\" class=\"card-block\">\n            <p class=\"card-text\" style=\"font-size:20px;font-style: italic;\">{{(ureview.comment.length>150)? ( ureview.comment | slice:0:150)+' ...':(ureview.comment)}}</p>\n          </div>\n        </div>\n        <button (scroll)=\"onScroll($event)\" style=\"margin-bottom:10px;\" *ngIf=\"(userID==ureview.uid && authService.isAuthenticated())\"\n          type=\"button\" class=\"btn btn-info\" (click)=\"onEditItem(i,$event)\">Edit</button>\n\n          <div class=\"w3-container\" style=\" padding-left:0px;\">\n                  \n    \n                 <button *ngIf=\"admin\" onclick=\"document.getElementById('id03').style.display='block'\" class=\" btn btn-danger\" style=\"cursor:pointer;\">Delete</button>\n                \n               \n                 <div id=\"id03\" class=\"w3-modal\" >\n                   <div class=\"w3-modal-content\" style=\"margin-left:500px;margin-top:150px;width:300px;height:100px;\">\n                     <div class=\"w3-container\" >\n                       <span onclick=\"document.getElementById('id03').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\n                       <h6>Are you sure?</h6>\n                       <button (click)=\"onDeleteAdm(i)\" onclick=\"document.getElementById('id03').style.display='none'\" style=\"cursor:pointer;\"  class=\"btn btn-danger\" type=\"button\" > Delete</button>\n                       \n                       <button class=\"btn btn-basic\" type=\"button\"  onclick=\"document.getElementById('id03').style.display='none'\" style=\"cursor:pointer;margin-left:10px;\">Cancel</button>\n                     </div>\n                   </div>\n                 </div>\n               </div>\n        <br>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<div *ngIf=\"empUrLen\"><h6>No User's Reivew yet</h6></div>\n<br>\n\n<button style=\"margin-left:10px;\" class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n\n<button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-success\" style=\"cursor:pointer;\" (click)=\"onAdd()\">Add phone's review</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/phone-detail/phone-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_rating_service__ = __webpack_require__("../../../../../src/app/services/rating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_srating_service__ = __webpack_require__("../../../../../src/app/services/srating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_ureview_model__ = __webpack_require__("../../../../../src/app/models/ureview.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_ureview_service__ = __webpack_require__("../../../../../src/app/services/ureview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_favourite_service__ = __webpack_require__("../../../../../src/app/services/favourite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PhoneDetailComponent = (function () {
    function PhoneDetailComponent(location, dataStorageService, brandService, reviewService, authService, flashMessagesService, route, router, ratingService, sratingService, ureviewService, favouriteService) {
        this.location = location;
        this.dataStorageService = dataStorageService;
        this.brandService = brandService;
        this.reviewService = reviewService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.router = router;
        this.ratingService = ratingService;
        this.sratingService = sratingService;
        this.ureviewService = ureviewService;
        this.favouriteService = favouriteService;
        // @HostListener('window:scroll', ['$event']) onScrollEvent($event){
        //   console.log($event);
        //   console.log($event.target.scrollingElement.scrollTop);
        //   console.log("scrolling");
        // } 
        this.editMode = false;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            animation: {
                onComplete: function () {
                    var chartInstance = this.chart, ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },
            events: ['mouseout'],
            legend: {
                //display:false,
                // position:'left',
                labels: {
                    boxWidth: 0,
                }
            },
            scales: {
                yAxes: [{
                        gridLines: {
                            display: false,
                            color: 'black',
                            zeroLineColor: 'black',
                            zeroLineWidth: 4,
                        },
                        // scaleLabel:{
                        //   display:true,
                        //   labelString:'Date'
                        //   },
                        ticks: {
                            display: false,
                            min: 0,
                            stepSize: 1,
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            display: false,
                            zeroLineWidth: 4,
                        },
                        // Change here
                        barPercentage: 0.4,
                    }]
            }
        };
        this.lk = 0;
        this.dlk = 0;
        this.lck = false;
        this.sck = false;
        this.dck = false;
        this.lcolor = false;
        this.dcolor = false;
        this.msglike = 0;
        this.msgdislike = 0;
        this.fav2cnt = 0;
        this.favCk2 = false;
        this.showText = 0;
        this.chkgstr = 0;
        this.avgrate = 0;
        this.empReview = 0;
        this.empLen = false;
        this.empUreview = 0;
        this.empUrLen = false;
        this.one = 0;
        this.two = 0;
        this.three = 0;
        this.four = 0;
        this.five = 0;
        this.scrollTop = 2800;
        this.maxlength = 80;
        this.characterleft = this.maxlength;
        this.star = [{ checked: false, st: 1 }, { checked: false, st: 2 }, { checked: false, st: 3 }, { checked: false, st: 4 }, { checked: false, st: 5 }];
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
    }
    PhoneDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.bid = _this.brandService.bid;
            console.log(_this.bid);
            _this.phone = _this.brandService.getPhone(_this.id, _this.bid);
            _this.dstar = _this.phone.like;
        });
        this.subscription = this.reviewService.reviewsChanged.subscribe(function (reviews) {
            _this.reviews = reviews;
        });
        this.reviews = this.reviewService.getReviews();
        for (var i = 0; i < this.reviews.length; i++) {
            if (this.phone.model != this.reviews[i].model) {
                this.empReview++;
            }
            if (this.phone.model == this.reviews[i].model) {
                this.empLen = false;
                this.empReview = -1;
            }
            if ((this.empReview + 1) == this.reviews.length) {
                this.empLen = true;
                //  console.log('if empty',this.reviews.length);
                //  console.log(this.empReview);
            }
        }
        this.userID = localStorage.getItem('user');
        this.subscription = this.favouriteService.favouriteChanged.subscribe(function (favourite1) {
            _this.favourite1 = favourite1;
        });
        this.favourite1 = this.favouriteService.getFavourite();
        for (var i = 0; i < this.favourite1.length; i++) {
            if (this.favourite1[i].uid == this.userID && this.favourite1[i].model == this.phone.model) {
                //this.sck=true;
                //this.lcolor=true;
                this.favCk = true;
                this.favCk2 = true;
                //console.log('shaju sjas 777');
            }
        }
        if (this.favCk2 == false) {
            this.favCk == false;
        }
        this.fav2cnt = 0;
        this.favourite2 = this.favouriteService.getFavourite();
        for (var i = 0; i < this.favourite2.length; i++) {
            //console.log('id',this.favourite2[i].uid);
            if (this.favourite2[i].uid == this.userID) {
                this.fav2cnt++;
            }
        }
        //console.log('fav cnt',this.fav2cnt);
        this.favouriteService.favcount(this.fav2cnt);
        this.subscription = this.sratingService.sratingChanged.subscribe(function (tsRating) {
            _this.tsRating = tsRating;
        });
        this.tsRating = this.sratingService.getSrating();
        this.ureviews = this.ureviewService.getUreviews();
        this.subscription = this.ureviewService.ureviewChanged.subscribe(function (ureviews) {
            _this.ureviews = ureviews;
        });
        //this.ureviews=this.ureviewService.getUreviews();
        for (var i = 0; i < this.ureviews.length; i++) {
            if (this.phone.model != this.ureviews[i].model) {
                this.empUreview++;
            }
            if (this.phone.model == this.ureviews[i].model) {
                this.empUrLen = false;
                this.empUreview = -1;
            }
            if ((this.empUreview + 1) == this.ureviews.length) {
                this.empUrLen = true;
                //  console.log('if empty',this.reviews.length);
                // console.log(this.empReview);
            }
        }
        this.name = localStorage.getItem('name');
        console.log(this.name);
        this.subscription = this.ureviewService.startedEditing.subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.ureviewService.getUreview(index);
            _this.slForm.setValue({
                comment: _this.editedItem.comment,
            });
            _this.characterleft = _this.maxlength - _this.editedItem.comment.length;
        });
        this.k = 0;
        this.avgrate = 0;
        this.avgrating = 0;
        for (var i = 0; i < this.tsRating.length; i++) {
            if (this.phone.model == this.tsRating[i].model) {
                this.avgrate = (this.tsRating[i].like + this.avgrate);
                this.k++;
                //console.log('tsra',this.tsRating[i].like);
            }
            //console.log(this.avgrating);
        }
        if (this.k == 0 && this.avgrate == 0) {
            this.avgrating = 0;
        }
        else {
            this.avgrating = (this.avgrate / this.k);
        }
        if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
            this.adminauth = true;
            // console.log(this.adminauth);
        }
        else {
            this.userauth = true;
        }
        this.admin = this.authService.adminauth;
        this.admin = this.adminauth;
        this.userID = localStorage.getItem('user');
        for (var i = 0; i < this.tsRating.length; i++) {
            if (this.tsRating[i].uid == this.userID && this.tsRating[i].model == this.phone.model) {
                this.sck = true;
                this.lcolor = true;
                this.chkgstr = 1;
                this.givenStar = this.tsRating[i].like;
                //console.log(this.givenStar);
                //console.log('shaju');
            }
            else if (this.chkgstr == 0) {
                this.givenStar = 0;
                //console.log(this.givenStar);
                //console.log('shaju oooo');
            }
        }
        for (var i = 0; i < this.tsRating.length; i++) {
            if (this.phone.model == this.tsRating[i].model) {
                if (this.tsRating[i].like == 1) {
                    this.one++;
                }
                else if (this.tsRating[i].like == 2) {
                    this.two++;
                }
                else if (this.tsRating[i].like == 3) {
                    this.three++;
                }
                else if (this.tsRating[i].like == 4) {
                    this.four++;
                }
                else if (this.tsRating[i].like == 5) {
                    this.five++;
                }
            }
        }
        //console.log('one,two',this.one,this.two,this.three,this.four,this.five);
        this.barChartLabels = ['1 star', '2 star', '3 star', '4 star', '5 star'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [this.one, this.two, this.three, this.four, this.five],
                label: ' ',
            },
        ];
    };
    PhoneDetailComponent.prototype.onEditItem = function (index, e) {
        this.ureviewService.startedEditing.next(index);
        //this.editMode=true;
        //console.log(e);
        this.scrollTop = e.toElement.offsetTop;
        //console.log('scrolltop',this.scrollTop);
        window.scrollTo(3500, 3500);
    };
    PhoneDetailComponent.prototype.show = function (e) {
        console.log(e);
        this.showText = e;
    };
    PhoneDetailComponent.prototype.addFav = function (model) {
        this.favCk = true;
        this.favourite = {
            bid: this.bid, uid: this.userID, model: model
        };
        this.favouriteService.addFavourite(this.favourite);
        this.dataStorageService.storeFavourite().subscribe(function (response) {
            console.log(response);
        });
        //console.log('fav',this.favourite);
        this.flashMessagesService.show('Added to my favourites', { cssClass: 'alert-success', timeout: 2000 });
        this.fav2cnt = 0;
        this.favourite2 = this.favouriteService.getFavourite();
        for (var i = 0; i < this.favourite2.length; i++) {
            if (this.favourite2[i].uid == this.userID) {
                this.fav2cnt++;
            }
        }
        //console.log('fav cnt',this.fav2cnt);
        this.favouriteService.favcount(this.fav2cnt);
    };
    PhoneDetailComponent.prototype.count = function (msg) {
        if (this.maxlength >= msg.length) {
            this.characterleft = (this.maxlength) - (msg.length);
        }
        else {
            msg = msg.substr(0, msg.length - 1);
            console.log(msg);
        }
    };
    PhoneDetailComponent.prototype.getStars = function (rating) {
        // Get the value
        var val = parseFloat(rating);
        // Turn value into number/100
        var size = val / 5 * 100;
        return size + '%';
    };
    PhoneDetailComponent.prototype.onEditPhone = function () {
        this.brandService.edit = true;
        this.brandService.new = false;
        this.bid = this.brandService.bid;
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    PhoneDetailComponent.prototype.deletePhone = function () {
        this.brandService.edit = true;
        this.brandService.new = false;
        this.bid = this.brandService.bid;
        this.brandService.brands[this.bid].phones.splice(this.id, 1);
        this.dataStorageService.storeBrands().subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['/slbrand/' + this.bid]);
        //this.router.navigate(['edit'],{relativeTo:this.route});
    };
    PhoneDetailComponent.prototype.onAdd = function () {
        this.router.navigate(['newRev']);
    };
    PhoneDetailComponent.prototype.compare = function (comparePhone) {
        this.brandService.compare.push(comparePhone);
        console.log(this.brandService.compare);
    };
    PhoneDetailComponent.prototype.removeFav = function () {
        this.favCk = false;
        this.favourite1 = this.favouriteService.getFavourite();
        console.log(this.favourite1);
        for (var i = 0; i < this.favourite1.length; i++) {
            if (this.favourite1[i].uid == this.userID && this.favourite1[i].model == this.phone.model) {
                //this.sck=true;
                //this.lcolor=true;
                // this.givenStar=this.tsRating[i].like;
                this.favouriteService.deleteFavourite(i);
                this.dataStorageService.storeFavourite().subscribe(function (response) {
                    console.log(response);
                });
                //console.log('shaju');
            }
            //console.log('shaju');
        }
        this.flashMessagesService.show('Removed from my favourites', { cssClass: 'alert-success', timeout: 2000 });
        this.fav2cnt = 0;
        this.favourite2 = this.favouriteService.getFavourite();
        for (var i = 0; i < this.favourite2.length; i++) {
            if (this.favourite2[i].uid == this.userID) {
                this.fav2cnt++;
            }
        }
        //console.log('fav cnt',this.fav2cnt);
        this.favouriteService.favcount(this.fav2cnt);
    };
    PhoneDetailComponent.prototype.delete = function () {
        for (var i = 0; i < this.tsRating.length; i++) {
            if (this.tsRating[i].uid == this.userID && this.tsRating[i].model == this.phone.model) {
                this.sck = true;
                this.lcolor = true;
                // this.givenStar=this.tsRating[i].like;
                this.sratingService.removedup(i);
                this.dataStorageService.storeSrating().subscribe(function (response) {
                    console.log(response);
                });
                console.log('shaju');
            }
        }
        this.k = 0;
        this.avgrate = 0;
        this.avgrating = 0;
        this.tsRating = this.sratingService.getSrating();
        this.one = 0;
        this.two = 0;
        this.three = 0;
        this.four = 0;
        this.five = 0;
        for (var i = 0; i < this.tsRating.length; i++) {
            if (this.phone.model == this.tsRating[i].model) {
                if (this.tsRating[i].like == 1) {
                    this.one++;
                }
                else if (this.tsRating[i].like == 2) {
                    this.two++;
                }
                else if (this.tsRating[i].like == 3) {
                    this.three++;
                }
                else if (this.tsRating[i].like == 4) {
                    this.four++;
                }
                else if (this.tsRating[i].like == 5) {
                    this.five++;
                }
                this.avgrate = (this.tsRating[i].like + this.avgrate);
                this.k++;
                console.log('tsra delete', this.tsRating[i].like);
            }
        }
        this.barChartLabels = ['1 star', '2 star', '3 star', '4 star', '5 star'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [this.one, this.two, this.three, this.four, this.five], label: ' ' },
        ];
        console.log(this.avgrate);
        if (this.k == 0 && this.avgrate == 0) {
            this.avgrating = 0;
        }
        else {
            this.avgrating = (this.avgrate / this.k);
        }
        console.log(this.avgrating);
        this.givenStar = 0;
    };
    PhoneDetailComponent.prototype.srate = function (stValue) {
        this.showText = 0;
        if (!this.authService.isAuthenticated()) {
            this.flashMessagesService.show('Please Log in', { cssClass: 'alert-danger', timeout: 2000 });
        }
        else {
            for (var i = 0; i < this.tsRating.length; i++) {
                if (this.tsRating[i].uid == this.userID && this.tsRating[i].model == this.phone.model) {
                    this.sck = true;
                    this.lcolor = true;
                    // this.givenStar=this.tsRating[i].like;
                    this.sratingService.removedup(i);
                    console.log('shaju');
                }
            }
            if (this.sck) {
                this.srating =
                    { like: stValue, uid: this.userID, model: this.phone.model };
                this.sratingService.addSrating(this.srating);
                this.dataStorageService.storeSrating().subscribe(function (response) {
                    console.log(response);
                });
                console.log(this.srating);
            }
            else {
                this.srating =
                    { like: stValue, uid: this.userID, model: this.phone.model },
                    this.sratingService.addSrating(this.srating);
                this.dataStorageService.storeSrating().subscribe(function (response) {
                    console.log(response);
                });
                console.log(this.srating);
            }
            this.k = 0;
            this.avgrate = 0;
            this.avgrating = 0;
            //this.tsRating=this.sratingService.getSrating();
            this.one = 0;
            this.two = 0;
            this.three = 0;
            this.four = 0;
            this.five = 0;
            for (var i = 0; i < this.tsRating.length; i++) {
                if (this.phone.model == this.tsRating[i].model) {
                    if (this.tsRating[i].like == 1) {
                        this.one++;
                    }
                    else if (this.tsRating[i].like == 2) {
                        this.two++;
                    }
                    else if (this.tsRating[i].like == 3) {
                        this.three++;
                    }
                    else if (this.tsRating[i].like == 4) {
                        this.four++;
                    }
                    else if (this.tsRating[i].like == 5) {
                        this.five++;
                    }
                    this.avgrate = (this.tsRating[i].like + this.avgrate);
                    this.k++;
                    console.log('tsra', this.tsRating[i].like);
                }
            }
            this.barChartLabels = ['1 star', '2 star', '3 star', '4 star', '5 star'];
            this.barChartType = 'bar';
            this.barChartLegend = true;
            this.barChartData = [
                { data: [this.one, this.two, this.three, this.four, this.five], label: ' ' },
            ];
            // console.log(this.avgrate);
            this.avgrating = (this.avgrate / this.k);
            // console.log(this.avgrating);
            this.givenStar = stValue;
        }
    };
    PhoneDetailComponent.prototype.onAddItem = function (form) {
        var value = form.value;
        this.today = new Date();
        var date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        var time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        if (this.today.getHours() < 12) {
            this.dateTime = date + ' ' + time + ' am';
        }
        else {
            this.dateTime = date + ' ' + time + ' pm';
        }
        this.dateTime = this.dateTime.toString();
        var newUreview = new __WEBPACK_IMPORTED_MODULE_11__models_ureview_model__["a" /* Ureview */](this.name, value.comment, this.userID, this.phone.model, this.dateTime);
        if (this.editMode) {
            this.ureviewService.updateUreview(this.editedItemIndex, newUreview);
            this.dataStorageService.storeUreview().subscribe(function (response) {
                console.log(response);
            });
            window.scrollTo(0, this.scrollTop);
            this.scrollTop = 2800;
        }
        else {
            this.empUrLen = false;
            this.ureviewService.addUreview(newUreview);
            this.dataStorageService.storeUreview().subscribe(function (response) {
                console.log(response);
            });
        }
        this.editMode = false;
        form.reset();
        this.characterleft = this.maxlength;
    };
    PhoneDetailComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
        this.characterleft = this.maxlength;
        window.scrollTo(0, this.scrollTop);
        this.scrollTop = 2800;
    };
    PhoneDetailComponent.prototype.onDelete = function () {
        this.ureviewService.remove(this.editedItemIndex);
        this.dataStorageService.storeUreview().subscribe(function (response) {
            console.log(response);
        });
        this.onClear();
    };
    PhoneDetailComponent.prototype.onDeleteAdm = function (i) {
        this.ureviewService.remove(i);
        this.dataStorageService.storeUreview().subscribe(function (response) {
            console.log(response);
        });
        //this.onClear();
    };
    PhoneDetailComponent.prototype.gotop = function () {
        window.scrollTo(0, 0);
    };
    PhoneDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PhoneDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PhoneDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgForm */]) === "function" && _a || Object)
], PhoneDetailComponent.prototype, "slForm", void 0);
PhoneDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-phone-detail',
        template: __webpack_require__("../../../../../src/app/components/phone-detail/phone-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/phone-detail/phone-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_brand_service__["a" /* BrandService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_review_service__["a" /* ReviewService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_rating_service__["a" /* RatingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_rating_service__["a" /* RatingService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__services_srating_service__["a" /* SratingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_srating_service__["a" /* SratingService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_12__services_ureview_service__["a" /* UreviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_ureview_service__["a" /* UreviewService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_13__services_favourite_service__["a" /* FavouriteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_favourite_service__["a" /* FavouriteService */]) === "function" && _o || Object])
], PhoneDetailComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=phone-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/review-by-user/review-by-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/review-by-user/review-by-user.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/review-by-user/review-by-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewByUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewByUserComponent = (function () {
    function ReviewByUserComponent() {
    }
    ReviewByUserComponent.prototype.ngOnInit = function () {
    };
    return ReviewByUserComponent;
}());
ReviewByUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-by-user',
        template: __webpack_require__("../../../../../src/app/components/review-by-user/review-by-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/review-by-user/review-by-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReviewByUserComponent);

//# sourceMappingURL=review-by-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/review-detail/review-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.stars, span.stars span {\r\n    display: block;\r\n   /* Download the star image here: http://stackoverflow.com/questions/1987524/turn-a-number-into-star-rating-display-using-jquery-and-css */\r\n    background: url('https://apppresser.com/wp-content/uploads/2015/11/stars.png') 0 -16px repeat-x;\r\n    width: 80px;\r\n    height: 16px;\r\n  }\r\n  \r\n  span.stars span {\r\n    background-position: 0 0;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/review-detail/review-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let top of topratingarr2\">\n    \n    <div *ngFor=\"let brand of brands;let i=index\">\n        <div *ngFor=\"let phone of brand['phones'];let j=index\">\n            <div *ngIf=\"top.model==phone.model\">\n                    <div [routerLink]=\"['/pdetail/'+brand['phones'].indexOf(phone)]\" (click)=\"bid(i)\" style=\"cursor:pointer;border-bottom:1px solid black;\" class=\"row\">\n                            <div class=\"col-md-6\">\n                              <a [routerLink]=\"['/pdetail/'+brand['phones'].indexOf(phone)]\" (click)=\"bid(i)\">\n                                <img style=\"margin-bottom:10px;margin-top:10px;\" src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"\">\n                              </a>\n                            </div>\n                            <div class=\"col-md-6\" style=\"margin-top:10px;\">\n                              <div>\n                                <a [routerLink]=\"['/pdetail/'+brand['phones'].indexOf(phone)]\" (click)=\"bid(i)\">\n                                  Model: {{phone.model}}\n                                  <br>Memory: {{phone.memory}}GB\n                                  <br>Ram: {{phone.ram}}GB\n                                  <br>Display: {{phone.display}} inch,LED\n                                  <br>Price: ${{phone.price}}\n                                  <h5 style=\"color:black;\">Average rating: {{top.avgrate2 | number : '1.1-1'}}</h5>\n                                  <!-- <h6 *ngIf=\"!authService.isAuthenticated()\" style=\"color:rgb(116, 142, 190);float:right;\">Log in to give rating</h6> -->\n                                  <!-- <h5 *ngIf=\"avgrating<1 \">Not rated yet</h5>  -->\n                                  <span class=\"stars alignright\">\n                                  <span [ngStyle]=\"{ 'width': getStars(top.avgrate2) }\"></span></span>\n                                </a>\n                                <br>\n                    \n                              </div>\n                            </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/review-detail/review-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_srating_service__ = __webpack_require__("../../../../../src/app/services/srating.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewDetailComponent = (function () {
    function ReviewDetailComponent(dataStorageService, brandService, sratingService) {
        this.dataStorageService = dataStorageService;
        this.brandService = brandService;
        this.sratingService = sratingService;
        this.topratingarr2 = [];
        this.avgrate = 0;
        this.m = 0;
    }
    ReviewDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brandService.phonesChanged.subscribe(function (brands) {
            _this.brands = brands;
        });
        this.brands = this.brandService.getBrands();
        this.sratingService.sratingChanged.subscribe(function (tsRating) {
            _this.tsRating = tsRating;
        });
        this.tsRating = this.sratingService.getSrating();
        this.k = 0;
        this.avgrate = 0;
        this.avgrating = 0;
        this.topratingarr2 = [];
        var youArray = [{
                "avgrate2": 1,
                "model": "s10",
            },
        ];
        for (var i = 0; i < this.brands.length; i++) {
            this.k = 0;
            this.avgrate = 0;
            this.avgrating = 0;
            for (var j = 0; j < this.brands[i].phones.length; j++) {
                this.k = 0;
                this.avgrate = 0;
                this.avgrating = 0;
                for (var k = 0; k < this.tsRating.length; k++) {
                    if (this.brands[i].phones[j].model == this.tsRating[k].model) {
                        this.avgrate = (this.tsRating[k].like + this.avgrate);
                        this.k++;
                    }
                    //console.log(this.avgrating);
                }
                if (this.k == 0 && this.avgrate == 0) {
                    this.avgrating = 0;
                }
                else {
                    this.avgrating = (this.avgrate / this.k);
                    //   var youArray:Array<any>= [{
                    //     "avgrate2": 1,
                    //     "model": "s10",
                    // },
                    // ];
                    var resultArray = []; //empty array which we are going to push our selected items, always define types 
                    resultArray.push({
                        "avgrate2": this.avgrating,
                        "model": this.brands[i].phones[j].model
                    });
                    this.topratingarr2.push(resultArray[0]);
                    // this.topratingarr2[this.m]=resultArray[0];
                    // this.m++;
                }
            }
        }
        for (var i = 0; i < (this.topratingarr2.length - 1); i++) {
            for (var j = i + 1; j < (this.topratingarr2.length); j++) {
                this.temp = [];
                if (this.topratingarr2[i].avgrate2 < this.topratingarr2[j].avgrate2) {
                    this.temp[1] = this.topratingarr2[j];
                    this.topratingarr2[j] = this.topratingarr2[i];
                    this.topratingarr2[i] = this.temp[1];
                }
            }
        }
    };
    ReviewDetailComponent.prototype.getStars = function (rating) {
        // Get the value
        var val = parseFloat(rating);
        // Turn value into number/100
        var size = val / 5 * 100;
        return size + '%';
    };
    ReviewDetailComponent.prototype.bid = function (bid) {
        this.brandService.bid = bid;
    };
    return ReviewDetailComponent;
}());
ReviewDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-detail',
        template: __webpack_require__("../../../../../src/app/components/review-detail/review-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/review-detail/review-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_srating_service__["a" /* SratingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_srating_service__["a" /* SratingService */]) === "function" && _c || Object])
], ReviewDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=review-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/review-details/review-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   \r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\r\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\t\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/review-details/review-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button *ngIf=\"authService.isAuthenticated() && admin\"  class=\"btn btn-success\" style=\"cursor:pointer;\" (click)=\"onEditItem()\">Edit</button> -->\n\n<div class=\"w3-container\" style=\" padding-left:0px;\">\n    <button *ngIf=\"authService.isAuthenticated() && admin\"  class=\"btn btn-success\" style=\"cursor:pointer;\" (click)=\"onEditItem()\">Edit</button>\n  \n   <button *ngIf=\"authService.isAuthenticated() && admin\" onclick=\"document.getElementById('id01').style.display='block'\" class=\" btn btn-danger\" style=\"cursor:pointer;\">Delete</button>\n \n   <div id=\"id01\" class=\"w3-modal\" >\n     <div class=\"w3-modal-content\" style=\"margin-left:500px;margin-top:150px;width:300px;height:100px;\">\n       <div class=\"w3-container\" >\n         <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\n         <h6>Are you sure?</h6>\n         <button *ngIf=\"authService.isAuthenticated() && admin\" class=\"btn btn-danger\" style=\" cursor:pointer;margin-top:15px;\" (click)=\"onDeleteItem()\">Delete</button>\n         <button class=\"btn btn-basic\" type=\"button\"  onclick=\"document.getElementById('id01').style.display='none'\" style=\"cursor:pointer;margin-top:15px;margin-left:10px;\">Cancel</button>\n       </div>\n     </div>\n   </div>\n </div>\n\n<br><br>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <img src=\"assets/img/{{review.imagePath}}.jpg\" alt=\"\" style=\"max-height:300px;max-width:400px;\">\n    <h3>{{review.model}}</h3>\n    <p>{{review.body}}</p>\n    <h5>Performance</h5>\n    <p>{{review.performance}}</p>\n    <img src=\"assets/perImg/{{review.perImagePath}}.JPG\" alt=\"\" style=\"max-height:500px;max-width:500px;\">\n    <h5>Hardware</h5>\n    <p>{{review.hardware}}</p>\n    <h5>Software</h5>\n    <p>{{review.software}}</p>\n    <h5>Display</h5>\n    <p>{{review.display}}</p>\n    <h5>Camera</h5>\n    <p>{{review.camera}}</p>\n    <h5>Battery</h5>\n    <p>{{review.battery}}</p>\n  </div>\n  <button style=\"margin-left:10px;\" class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/review-details/review-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewDetailsComponent = (function () {
    function ReviewDetailsComponent(location, reviewService, dataStorageService, authService, route, router) {
        this.location = location;
        this.reviewService = reviewService;
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(-300, -300);
            }
        });
    }
    ReviewDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.review = _this.reviewService.getReview(_this.id);
        });
        if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
            this.adminauth = true;
            console.log(this.adminauth);
        }
        else {
            this.userauth = true;
        }
        this.admin = this.authService.adminauth;
        this.admin = this.adminauth;
    };
    ReviewDetailsComponent.prototype.onEditItem = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    ReviewDetailsComponent.prototype.onDeleteItem = function () {
        this.reviewService.deleteReview(this.id);
        this.dataStorageService.storeReviews().subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['/']);
    };
    ReviewDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ReviewDetailsComponent;
}());
ReviewDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-details',
        template: __webpack_require__("../../../../../src/app/components/review-details/review-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/review-details/review-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object])
], ReviewDetailsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=review-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* W3.CSS 4.08 January 2018 by Jan Egil and Borge Refsnes */\r\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\r\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\r\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\r\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\r\na{background-color:transparent;-webkit-text-decoration-skip:objects}\r\na:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\r\ndfn{font-style:italic}mark{background:#ff0;color:#000}\r\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}\r\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\r\nbutton,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}\r\nbutton,input{overflow:visible}button,select{text-transform:none}\r\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\r\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\r\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\r\n[type=checkbox],[type=radio]{padding:0}\r\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\r\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\r\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\r\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\n/* End extract */\r\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\r\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\r\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\r\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\r\n.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}\r\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\r\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\r\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\r\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\r\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   \r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\r\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\t\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" *ngFor=\"let email of emails;let i=index\" >\n  \n     <div class=\"col-md-12\" style=\"width:700px;border:1px solid grey;border-radius:8px;margin-bottom:10px;padding-top:10px;padding-bottom:10px;\">\n        Name: {{email.name}}, <span><b>emailed on: {{email.date}}</b></span> <br>\n        Sender: {{email.email}} <br>\n        Subject: {{email.subject}} <br>\n        Message: {{email.message}} <br>\n        <!-- <button class=\"btn btn-danger\" type=\"button\"  (click)=\"delete(i)\">Delete</button> -->\n\n        <!-- <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\"> -->\n        \n         \n         <div class=\"w3-container\" style=\" padding-left:0px;\">\n          \n           <button onclick=\"document.getElementById('id01').style.display='block'\" class=\" btn btn-danger\" style=\"cursor:pointer;\">Delete</button>\n         \n           <div id=\"id01\" class=\"w3-modal\" >\n             <div class=\"w3-modal-content\" style=\"margin-left:500px;margin-top:150px;width:300px;height:100px;\">\n               <div class=\"w3-container\" >\n                 <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\n                 <h6>Are you sure?</h6>\n                 <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(i)\" style=\" cursor:pointer;margin-top:15px;\">Delete</button>\n                 <button class=\"btn btn-basic\" type=\"button\"  onclick=\"document.getElementById('id01').style.display='none'\" style=\"cursor:pointer;margin-top:15px;margin-left:10px;\">Cancel</button>\n               </div>\n             </div>\n           </div>\n         </div>\n         \n     </div>\n    \n </div>\n\n\n\n\n\n \n \n \n \n\n \n "

/***/ }),

/***/ "../../../../../src/app/components/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_email2_service__ = __webpack_require__("../../../../../src/app/services/email2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsComponent = (function () {
    function ReviewsComponent(email2Service, dataStorageService) {
        this.email2Service = email2Service;
        this.dataStorageService = dataStorageService;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStorageService.getEmail2();
        this.email2Service.emailChanged2.subscribe(function (emails) {
            _this.emails = emails;
        });
        this.emails = this.email2Service.getEmail();
        console.log('emails', this.emails);
    };
    ReviewsComponent.prototype.delete = function (i) {
        this.email2Service.remove(i);
        this.dataStorageService.storeEmail2().subscribe(function (response) {
            console.log(response);
        });
    };
    return ReviewsComponent;
}());
ReviewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reviews',
        template: __webpack_require__("../../../../../src/app/components/reviews/reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/reviews/reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_email2_service__["a" /* Email2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_email2_service__["a" /* Email2Service */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _b || Object])
], ReviewsComponent);

var _a, _b;
//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/selected-brand/selected-brand.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/selected-brand/selected-brand.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<button *ngIf=\"authService.isAuthenticated() && admin\"  class=\"btn btn-success\"\r\n style=\"cursor:pointer;margin-bottom:10px;\"  (click)=\"onEditPhone()\">Add Phone</button><br>\r\n<div class=\"row\">\r\n        \r\n    <div class=\"col-md-4\" *ngFor=\"let phone of brand.phones | reverse;let i=index\">\r\n        <a [routerLink]=\"['/pdetail/'+(brand.phones.length-1-i)]\"><img src=\"assets/img/{{phone.imagePath}}.jpg\" alt=\"image\"><br>\r\n        Model: {{phone.model}}<br>\r\n        Ram: {{phone.ram}}<br>\r\n        Memory: {{phone.memory}} GB<br>\r\n        </a>\r\n        <hr>\r\n    </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/selected-brand/selected-brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedBrandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectedBrandComponent = (function () {
    function SelectedBrandComponent(brandService, authService, route, router) {
        this.brandService = brandService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    SelectedBrandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.brand = _this.brandService.getBrand(_this.id);
            //console.log(this.brand.phones);
            //this.brand=this.brands[this.id]
        });
        if ((localStorage.getItem('user') == 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user') == 'dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')) {
            this.adminauth = true;
            console.log(this.adminauth);
        }
        else {
            this.userauth = true;
        }
        this.admin = this.authService.adminauth;
        this.admin = this.adminauth;
    };
    SelectedBrandComponent.prototype.onEditPhone = function () {
        this.brandService.new = true;
        this.brandService.edit = false;
        this.bid = this.brandService.bid;
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    return SelectedBrandComponent;
}());
SelectedBrandComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-selected-brand',
        template: __webpack_require__("../../../../../src/app/components/selected-brand/selected-brand.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/selected-brand/selected-brand.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_brand_service__["a" /* BrandService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], SelectedBrandComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=selected-brand.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        if (!items)
            return [];
        if (!term)
            return items;
        term = term.toString().toLowerCase();
        return items.filter(function (it) {
            return it.model.toString().toLowerCase().includes(term);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/models/brand.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brand; });
var Brand = (function () {
    function Brand(name, phones) {
        this.name = name;
        this.phones = phones;
    }
    return Brand;
}());

//# sourceMappingURL=brand.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/email.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email; });
var Email = (function () {
    function Email(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    return Email;
}());

//# sourceMappingURL=email.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/email2.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email2; });
var Email2 = (function () {
    function Email2(name, email, subject, message, date) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
        this.date = date;
    }
    return Email2;
}());

//# sourceMappingURL=email2.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/favourite.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favourite; });
var Favourite = (function () {
    function Favourite(bid, uid, model) {
        this.bid = bid;
        this.uid = uid;
        this.model = model;
    }
    return Favourite;
}());

//# sourceMappingURL=favourite.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/news.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News(imagePath, title, body, desc) {
        this.imagePath = imagePath;
        this.title = title;
        this.body = body;
        this.description = desc;
    }
    return News;
}());

//# sourceMappingURL=news.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/phone.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phone; });
var Phone = (function () {
    function Phone(imagePath, memory, model, ram, display, frontCamera, backCamera, os, cpu, battery, price) {
        this.imagePath = imagePath;
        this.memory = memory;
        this.model = model;
        this.ram = ram;
        this.display = display;
        this.frontCamera = frontCamera;
        this.backCamera = backCamera;
        this.os = os;
        this.cpu = cpu;
        this.battery = battery;
        this.price = price;
    }
    return Phone;
}());

//# sourceMappingURL=phone.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/rating.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
var Rating = (function () {
    function Rating(like, dislike, uid, model) {
        this.like = like;
        this.dislike = dislike;
        this.uid = uid;
        this.model = model;
    }
    ;
    return Rating;
}());

//# sourceMappingURL=rating.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/review.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
var Review = (function () {
    function Review(imagePath, model, body, performance, perImagePath, hardware, software, display, camera, battery) {
        this.imagePath = imagePath;
        this.model = model;
        this.body = body;
        this.performance = performance;
        this.perImagePath = perImagePath;
        this.hardware = hardware;
        this.software = software;
        this.display = display;
        this.camera = camera;
        this.battery = battery;
    }
    return Review;
}());

//# sourceMappingURL=review.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/srating.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Srating; });
var Srating = (function () {
    function Srating(like, uid, model) {
        this.like = like;
        this.uid = uid;
        this.model = model;
    }
    return Srating;
}());

//# sourceMappingURL=srating.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/ureview.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ureview; });
var Ureview = (function () {
    function Ureview(name, comment, uid, model, date) {
        this.name = name;
        this.comment = comment;
        this.uid = uid;
        this.model = model;
        this.date = date;
    }
    return Ureview;
}());

//# sourceMappingURL=ureview.model.js.map

/***/ }),

/***/ "../../../../../src/app/nfilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NfilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NfilterPipe = (function () {
    function NfilterPipe() {
    }
    NfilterPipe.prototype.transform = function (items, term) {
        if (!items)
            return [];
        if (!term)
            return items;
        term = term.toString().toLowerCase();
        return items.filter(function (it) {
            return it.title.toString().toLowerCase().includes(term);
        });
    };
    return NfilterPipe;
}());
NfilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'nfilter'
    })
], NfilterPipe);

//# sourceMappingURL=nfilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        return value.slice().reverse();
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'reverse'
    })
], ReversePipe);

//# sourceMappingURL=reverse.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/brand.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_brand_model__ = __webpack_require__("../../../../../src/app/models/brand.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_phone_model__ = __webpack_require__("../../../../../src/app/models/phone.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandService = (function () {
    function BrandService() {
        this.phonesChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.brands = [
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Samsung', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('samsung-galaxy-s6-edge-plus', 32, 'samsung galaxy s6', 2, 6, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3200, 800),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('samsung-galaxy-c7-2017', 16, 'samsung galaxy c7', 3, 5, 5, 12, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 999),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Apple', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('apple-iphone-x', 8, 'iphone 10', 2, 6, 5, 8, 'iOS 11.1', 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)', 3000, 1000),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('apple-iphone-7-plus-r2', 32, 'iphone 7', 1, 5, 5, 12, 'iOS 11.1', 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)', 2800, 999),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('HTC', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('htc-u-ultra', 32, 'htc-u-ultra', 1, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 883),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('htc-desire-10-pro', 16, 'htc-desire-10-pro', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 900),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Asus', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('asus-zenfone-v-v520kl', 32, 'asus-zenfone-v-v520kl', 1, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 650),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('asus-zenfone-4-selfie-pro-zd552kl', 8, 'asus-zenfone-4-selfie-pro-zd552kl', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 700),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Nokia', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('nokia-8-', 32, 'nokia-8', 3, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 650),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('nokia-7-', 8, 'nokia-7', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 800),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Huawei', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('huawei-mate10-pro', 8, 'huawei-mate10-pro', 1, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 700),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('huawei-enjoy-7-plus-new', 32, 'huawei-enjoy-7-plus', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 699),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('LG', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('lg-v30-', 32, 'lg-v30', 3, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 555),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('lg-stylus-3-', 16, 'lg-stylus-3', 2, 5, 5, 12, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 870),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Motorola', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('motorola-moto-g5s', 32, 'motorola-moto-g5s', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 480),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('motorola-moto-e4-plus', 8, 'motorola-moto-e4-plus', 3, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 690),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Lenovo', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('lenovo-k8-plus', 32, 'lenovo-k8-plus', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 600),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('lenovo-a6600', 8, 'lenovo-a6600', 1, 5, 5, 12, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 550),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Microsoft', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('microsoft-lumia-950-xl--', 32, 'microsoft-lumia-950-xl', 3, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 800),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('microsoft-lumia-650-s', 16, 'microsoft-lumia-650-s', 3, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 700),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Oppo', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('oppo-r11s-r', 32, 'oppo-r11s-r', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 450),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('oppo-f5-new', 16, 'oppo-f5-new', 2, 5, 5, 12, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 400),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('OnePlus', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('oneplus-5', 32, 'oneplus-5', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 550),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('oneplus-3-', 8, 'oneplus-3', 1, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 489),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('ZTE', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('zte-nubia-z17s', 32, 'zte-nubia-z17s', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 400),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('zte-blade-a601', 8, 'zte-blade-a601', 2, 5, 5, 12, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 360),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Acer', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('acer-liquid-x2-1', 8, 'acer-liquid-x2-1', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 500),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('acer-liquid-jade-2', 32, 'acer-liquid-jade-2', 1, 5, 5, 12, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2600, 400),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Xiomi', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('xiaomi-redmi-note-5a', 32, 'xiaomi-redmi-note-5a', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 300),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('xiaomi-mi-note3-', 32, 'xiaomi-mi-note3', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 330),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Sony', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('sony-xperia-xa1-2017', 8, 'sony-xperia-xa1-2017', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 500),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('sony-xperia-xa--', 32, 'sony-xperia-xa', 1, 5, 5, 12, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 400),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Symphony', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('plum-might-plus-ii', 32, 'plum-might-plus-ii', 2, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2800, 300),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('plum-axe-lte', 16, 'plum-axe-lte', 3, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 200),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_brand_model__["a" /* Brand */]('Vodaphone', [
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('vodafone-smart-speed-6', 32, 'vodafone-smart-speed-6', 3, 5, 5, 8, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 3000, 240),
                new __WEBPACK_IMPORTED_MODULE_2__models_phone_model__["a" /* Phone */]('vodafone-smart-e8', 16, 'vodafone-smart-e8', 2, 5, 5, 12, 'Android 7.0 (Nougat)', 'Quad-core 1.3 GHz Cortex-A7', 2600, 290),
            ]),
        ];
        this.compare = [];
        this.new = false;
        this.edit = false;
    }
    BrandService.prototype.setBrands = function (brands) {
        this.brands = brands;
        this.phonesChanged.next(this.brands.slice());
    };
    BrandService.prototype.getBrands = function () {
        return this.brands.slice();
    };
    BrandService.prototype.getBrand = function (index) {
        this.bid = index;
        // console.log(this.brands[index]);
        // console.log(this.brands);
        return this.brands[index];
    };
    BrandService.prototype.getPhone = function (index, bid) {
        //this.brand=this.brands[bid];
        return this.brands[bid].phones[index];
    };
    BrandService.prototype.addBrand = function (brand) {
        this.brands.push(brand);
        this.phonesChanged.next(this.brands.slice());
    };
    BrandService.prototype.updateBrand = function (index, bid, newBrand) {
        //console.log(newBrand);
        //this.brand=this.brands[bid];
        this.brands[bid] = newBrand;
        // console.log(this.brand.phones[index]=newBrand);
        //console.log(this.brands);
        //console.log(bid,index);
        this.phonesChanged.next(this.brands.slice());
    };
    return BrandService;
}());
BrandService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BrandService);

//# sourceMappingURL=brand.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brand_service__ = __webpack_require__("../../../../../src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_service__ = __webpack_require__("../../../../../src/app/services/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rating_service__ = __webpack_require__("../../../../../src/app/services/rating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__srating_service__ = __webpack_require__("../../../../../src/app/services/srating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ureview_service__ = __webpack_require__("../../../../../src/app/services/ureview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__favourite_service__ = __webpack_require__("../../../../../src/app/services/favourite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__email2_service__ = __webpack_require__("../../../../../src/app/services/email2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DataStorageService = (function () {
    function DataStorageService(http, brandService, reviewService, newsService, authService, emailService, email2Service, ratingService, sratingService, ureviewService, favouriteService) {
        this.http = http;
        this.brandService = brandService;
        this.reviewService = reviewService;
        this.newsService = newsService;
        this.authService = authService;
        this.emailService = emailService;
        this.email2Service = email2Service;
        this.ratingService = ratingService;
        this.sratingService = sratingService;
        this.ureviewService = ureviewService;
        this.favouriteService = favouriteService;
    }
    DataStorageService.prototype.storeBrands = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//brands.json?auth=' + token, this.brandService.getBrands());
    };
    DataStorageService.prototype.storeReviews = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//reviews.json?auth=' + token, this.reviewService.getReviews());
    };
    DataStorageService.prototype.storeNews = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//news.json?auth=' + token, this.newsService.getNews());
    };
    DataStorageService.prototype.storeRating = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//rating.json?auth=' + token, this.ratingService.getRating());
    };
    DataStorageService.prototype.storeSrating = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//srating.json?auth=' + token, this.sratingService.getSrating());
    };
    DataStorageService.prototype.storeUreview = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//ureview.json?auth=' + token, this.ureviewService.getUreviews());
    };
    DataStorageService.prototype.storeFavourite = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//favourite.json?auth=' + token, this.favouriteService.getFavourite());
    };
    DataStorageService.prototype.storeEmail = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//email.json', this.emailService.getEmail());
    };
    DataStorageService.prototype.storeEmail2 = function () {
        var token = this.authService.getToken();
        return this.http.put('https://phoneinfo-adfa8.firebaseio.com//email2.json', this.email2Service.getEmail());
    };
    DataStorageService.prototype.getBrands = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://phoneinfo-adfa8.firebaseio.com//brands.json')
            .map(function (response) {
            var brands = response.json();
            for (var _i = 0, brands_1 = brands; _i < brands_1.length; _i++) {
                var brand = brands_1[_i];
                if (!brand['phones']) {
                    brand['phones'] = [];
                }
            }
            return brands;
        })
            .subscribe(function (brands) {
            _this.brandService.setBrands(brands);
        });
    };
    DataStorageService.prototype.getReviews = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://phoneinfo-adfa8.firebaseio.com//reviews.json')
            .map(function (response) {
            var reviews = response.json();
            return reviews;
        })
            .subscribe(function (reviews) {
            _this.reviewService.setReviews(reviews);
        });
    };
    DataStorageService.prototype.getNews = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://phoneinfo-adfa8.firebaseio.com//news.json')
            .map(function (response) {
            var news = response.json();
            return news;
        })
            .subscribe(function (news) {
            _this.newsService.setNews(news);
        });
    };
    DataStorageService.prototype.getRating = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://phoneinfo-adfa8.firebaseio.com//rating.json')
            .map(function (response) {
            var rating = response.json();
            return rating;
        })
            .subscribe(function (rating) {
            _this.ratingService.setRating(rating);
        });
    };
    DataStorageService.prototype.getSrating = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://phoneinfo-adfa8.firebaseio.com//srating.json')
            .map(function (response) {
            var srating = response.json();
            return srating;
        })
            .subscribe(function (srating) {
            _this.sratingService.setSrating(srating);
        });
    };
    DataStorageService.prototype.getUreview = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://phoneinfo-adfa8.firebaseio.com//ureview.json')
            .map(function (response) {
            var ureview = response.json();
            return ureview;
        })
            .subscribe(function (ureview) {
            _this.ureviewService.setUreview(ureview);
        });
    };
    DataStorageService.prototype.getFavourite = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://phoneinfo-adfa8.firebaseio.com//favourite.json')
            .map(function (response) {
            var favourite = response.json();
            return favourite;
        })
            .subscribe(function (favourite) {
            _this.favouriteService.setFavourite(favourite);
        });
    };
    DataStorageService.prototype.getEmail2 = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://phoneinfo-adfa8.firebaseio.com//email2.json')
            .map(function (response) {
            var email2 = response.json();
            return email2;
        })
            .subscribe(function (email2) {
            _this.email2Service.setEmail(email2);
        });
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__brand_service__["a" /* BrandService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__review_service__["a" /* ReviewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__news_service__["a" /* NewsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__email_service__["a" /* EmailService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_12__email2_service__["a" /* Email2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__email2_service__["a" /* Email2Service */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__rating_service__["a" /* RatingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__rating_service__["a" /* RatingService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__srating_service__["a" /* SratingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__srating_service__["a" /* SratingService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10__ureview_service__["a" /* UreviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ureview_service__["a" /* UreviewService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_11__favourite_service__["a" /* FavouriteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__favourite_service__["a" /* FavouriteService */]) === "function" && _l || Object])
], DataStorageService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_email_model__ = __webpack_require__("../../../../../src/app/models/email.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    function EmailService() {
        this.emailChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.email = [
            new __WEBPACK_IMPORTED_MODULE_1__models_email_model__["a" /* Email */]('Raj', 'raj@test.com', 'raj', 'raj'),
        ];
    }
    EmailService.prototype.setEmail = function (email) {
        this.email = email;
        this.emailChanged.next(this.email.slice());
    };
    EmailService.prototype.addEmail = function (email) {
        this.email.push(email);
    };
    EmailService.prototype.getEmail = function () {
        return this.email.slice();
    };
    return EmailService;
}());
EmailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], EmailService);

//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/email2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_email2_model__ = __webpack_require__("../../../../../src/app/models/email2.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Email2Service = (function () {
    function Email2Service() {
        this.emailChanged2 = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.email2 = [
            new __WEBPACK_IMPORTED_MODULE_1__models_email2_model__["a" /* Email2 */]('Raj', 'raj@test.com', 'raj', 'raj', ''),
        ];
    }
    Email2Service.prototype.setEmail = function (email2) {
        this.email2 = email2;
        this.emailChanged2.next(this.email2.slice());
    };
    Email2Service.prototype.addEmail = function (email2) {
        this.email2.unshift(email2);
    };
    Email2Service.prototype.getEmail = function () {
        return this.email2.slice();
    };
    Email2Service.prototype.remove = function (index) {
        this.email2.splice(index, 1);
        this.emailChanged2.next(this.email2.slice());
    };
    return Email2Service;
}());
Email2Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Email2Service);

//# sourceMappingURL=email2.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/favourite.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_favourite_model__ = __webpack_require__("../../../../../src/app/models/favourite.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouriteService = (function () {
    function FavouriteService() {
        this.fav3cnt = 0;
        this.fav3cntChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.favouriteChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.favourite = [
            new __WEBPACK_IMPORTED_MODULE_1__models_favourite_model__["a" /* Favourite */](4, 'shaju', 's7'),
            new __WEBPACK_IMPORTED_MODULE_1__models_favourite_model__["a" /* Favourite */](0, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'samsung galaxy s6'),
            new __WEBPACK_IMPORTED_MODULE_1__models_favourite_model__["a" /* Favourite */](0, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'samsung galaxy c7'),
        ];
    }
    FavouriteService.prototype.setFavourite = function (favourite) {
        this.favourite = favourite;
        this.favouriteChanged.next(this.favourite.slice());
    };
    FavouriteService.prototype.getFavourite = function () {
        return this.favourite.slice();
    };
    FavouriteService.prototype.addFavourite = function (favourite) {
        this.favourite.push(favourite);
        console.log(this.favourite);
        this.favouriteChanged.next(this.favourite.slice());
    };
    FavouriteService.prototype.deleteFavourite = function (index) {
        this.favourite.splice(index, 1);
        this.favouriteChanged.next(this.favourite.slice());
        console.log(this.favourite);
    };
    FavouriteService.prototype.favcount = function (fav3cnt) {
        this.fav3cnt = fav3cnt;
        this.fav3cntChange.next(this.fav3cnt);
    };
    return FavouriteService;
}());
FavouriteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FavouriteService);

//# sourceMappingURL=favourite.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_news_model__ = __webpack_require__("../../../../../src/app/models/news.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = (function () {
    function NewsService() {
        this.newsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.news = [
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('samsung-galaxy-c7-2017', 'Here are Samsung’s C7 Black Friday and Cyber Monday deals starting November 23', 'Samsung Galaxy Tab E is an affordable tablet that can be found mostly on carriers websites. The 8 version costs $249.99 on Verizon, but Big Red launched a new deal, where you can get it for $100 less.', 'The Galaxy Tab E can be purchased with one of three options. There is a $0 down payment and $10.41 every month for the next two years ($249.84 in total). If you want to stay on the Verizon network but don’t want to bother with the monthly plan hassle, you can buy it straight away for $149.99.The model number of this Galaxy Tab E version is T378. It supports both Wi-Fi and LTE connections, but unlike the regular T377 model that comes with Android Lollipop out of the box, this one runs Android Nougat 7.1. Other specs include 1280x800px TFT screen, 5 MP main camera, 32 GB storage and 1.5 GB RAM. The battery is 5,000 mAh, and Verizon says it can last for up to 24 hours of usage.'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('samsung-galaxy-s6-edge-plus', 'Next-gen Samsung Galaxy S6 and Galaxy S7 get Wi-Fi certification', 'Wi-Fi Alliance just granted the required certification to two Samsung phones. The products have model names SM-A530F and SM-A730F, meaning these are the Samsung Galaxy A5 (2018) and the Samsung Galaxy A7 (2018).', 'According to the documents provided, both phones will run the Android 7.1.1 Nougat. Although it would be better if they came with Oreo out of the box, Samsung tends to launch its A series smartphones on older OS versions and update them subsequently. Back in the beginning of 2017, Galaxy A3, Galaxy A5 and Galaxy A7 all came with Marshmallow, but eventually got the upgrade to Nougat.The Wi-Fi certification reveals the Galaxy A5 (2018) and the Galaxy A7 (2018) are certified for Wi-Fi 802.11 a/b/g/ac.The new Galaxy A5 and Galaxy A7 might come with dual-camera setup on the front while the fingerprint goes on the back. This is most likely to happen if the phones arrive with Infinity Display, as previous rumors suggested.'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('apple-iphone-7-plus-r2', 'Apple iPhone 7 sells out in minutes in South Korea', 'South Korea`s biggest carrier - SK Telecom - has confirmed that it has exhausted all of its iPhone X pre-order stock in 3 minutes - in contrast, the initial iPhone 7 stock took 20 minutes a year ago.', 'SK Telecom has said to Korea`s Yonhap News Agency that it had less than half as many iPhone X units as it had iPhone 8 ones and that the silver iPhone X took about 1 minute to sell out in pre-orders.Industry analysts estimate that around 150,000 iPhone X units were allocated to South Korea.According to analysts the iPhone 8 series had around 60-70% of the interest of the iPhone 7 series - probably due to the iPhones arrival to market.It seems interest in the iPhone X is strong in South Korea, despite the smartphone carrying a big price premium compared to its Stateside price - Korean buyers are charged around $1,237 for the base 64GB model, compared to the $999 US price.'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('apple-iphone-x', 'Deal: Apple iPhone 8 for GBP 560', 'Apple announced the iPhone 8 in September. People lined in front of Apple Stores to be among the first to shed £699, while some played the waiting game and won', 'The discount applies to all Apple products costing £159 or more. And if you think that deal is sweet, check this out - the products can be purchased with the Buy Now Pay Later program. This means any gadget or device (excluding iPhone X) can be paid in the following 12 months without any interest.The discounted 20% will be credited to the buyer’s account in a few weeks, meaning you pay £699 for the phone, and can then use the refund for other Very products.'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('htc-desire-10-pro', 'HTC Desire 10 Pro Explosion That Burnt a Womans Hand Is Being Investigated by the Company ', 'When one hears of a smartphone exploding, the first thought that occurs to us is of Samsungs Galaxy Note 7 - a fact thats telling of just how much the product recall and its aftermath pervaded both daily life and popular culture.', 'Making the claim in a Facebook photo earlier this week showing a bandaged hand, Nidhi Kapoor said her HTC 10 exploded on June 21. She added that the smartphone was not on call or charging when it exploded.Gadgets 360 contacted HTC for comment, and were provided the following statement, "HTC is aware of the customers report and we are working to investigate as quickly as possible. As always, our customers safety is a top priority."The Taiwanese smartphone maker also clarified that the smartphone in question was in fact an HTC Desire 10 Pro - not an HTC 10 as Kapoor wrote - and that the incident occurred outside of India.'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('htc-u-ultra', 'HTC U Ultra $150 discount codes are being sent to Team HTC members', 'The HTC U Ultra only launched a few weeks ago in the US, but it looks like the company is trying to get its most loyal fans to purchase its current flagship device.', 'Online reports from Reddit claim that members of the Team HTC program are being sent promo codes that cut the price of the U Ultra down by $150 when the phone is purchased on the company’s website.In case you are not familiar with Team HTC, it lets members earn perks if they promote the company on their social media accounts, or if they actually buy HTC devices, or even it they get a friend to buy one. In this case, the $150 discount code, if applied to the HTC U Ultra, would cut down the price of the phone from $749 to $599.'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('asus-zenfone-4-selfie-pro-zd552kl', 'Asus certainly made the most of the ZenFone 3 range in 2016 and even early 2017, launching a wide variety of spinoff devices including the ZenFone 3 Deluxe, ZenFone 3 Laser, and most recently, the ZenFone 3 Zoom.', 'We knew we were getting a range of ZenFone 4 devices, but not when they would arrive, how powerful they would be, or what they would look like.', 'Asus revealed images of the ZenFone 4 on its French site, alongside full details about the device. But based on the launch, the ZenFone 4 features a 5.5-inch AMOLED display, Qualcomm Snapdragon 660/630 processor, 6GB of RAM, 64GB of internal storage, and a pair of cameras at the rear rated at 12 and 8 megapixels. The front-facing camera is eight megapixels as well, the battery capacity is 3,300mAh, and the phone should be available in both black and white'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('asus-zenfone-v-v520kl', 'Asus unveils Verizon-exclusive Asus ZenFone V Live smartphone', 'Asus announced the immediate availability of the Verizon-exclusive Asus ZenFone V Live for USD 7 a month for 24 months on the Verizon device payment plan (USD 168 retail, 0 percent APR). The Asus ZenFone V Live offers premium features such as a full-metal body, curved 2.5D glass and a fast and accurate fingerprint reader. It features built-in livestream beautification options for Facebook, Instagram and YouTube.', 'Asus announced the immediate availability of the Verizon-exclusive Asus ZenFone V Live for USD 7 a month for 24 months on the Verizon device payment plan (USD 168 retail, 0 percent APR). The Asus ZenFone V Live offers premium features such as a full-metal body, curved 2.5D glass and a fast and accurate fingerprint reader. It features built-in livestream beautification options for Facebook, Instagram and YouTube.'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('nokia-7-', 'Nokia 7 News - Release Date, UK price and specifications', 'Nokia is gradually filling in the gaps in its Android phone line-up, and the Nokia 7 is now official. Read the latest news on the Nokia 7 specifications, price and UK launch date.', 'When is the Nokia 7 release date?Announced in China on 19 October 2017, the Nokia 7 will go on sale there on 24 October.It will almost certainly launch worldwide like the others in the line-up, but this has not yet been confirmed by HMD Global. How much will the Nokia 7 cost in the UK?In China the 64GB Nokia 7 costs 2,499 yuan. Thats around £286.The 128GB model costs 2,699 yuan, or around £309.In China the Nokia 7 can be pre-ordered via '),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('nokia-8-', 'Here’s why I think Nokia 8 is the top choice for a mid-range flagship smartphone', 'When HMD Global announced its first lineup of Nokia smartphones at the Mobile World Congress earlier this year, the budget devices – Nokia 3, Nokia 5, and Nokia 6 – were underwhelming. Some of them were fine devices, but they were only a timid representation of what the Nokia brand was.', 'The Nokia 8 doesn’t attempt to dazzle you with any design shenanigans. Instead, it goes for a safe, minimalist design – some may even call it boring. The design aesthetics of the Nokia 8 are divisive, but I’m in the camp that really likes the clean, refined look. It has a definite Scandinavian, or maybe that’s just our Nokia hangover, feel to it.'),
            new __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */]('huawei-enjoy-7-plus-new', 'Huawei Enjoy 7 Plus With Fingerprint Scanner, Android 7.0 Nougat Launched  ', 'The Huawei Enjoy 7 Plus got a refresh today. If this phone rings a bell to you, it should: Huawei already released this phone, in fact less than two weeks ago.', 'Are you confused? Let me explain. On April 10th, Huawei came out with their new phone, the Enjoy 7 Plus. Specs included a large 5.5-inch 720p display with the Snapdragon 435 SoC paired with 3 GB of RAM and 32 GB of on-board storage. Then today, April 22nd, we have a new Enjoy 7 Plus. This time with exactly the same specs except 4 GB of RAM and 64 GB of storage instead. It seems someone may have forgotten to mention you get storage options with this phone!Both phones have the same 12 MP rear facing camera and 8 MP front-facing shooter. Just below the rear camera is Huawei’s famous fingerprint sensor, claiming to be able to unlock your phone in 0.2 seconds. That’s not the only impressive thing about this phone, though: the battery capacity is 4,000 mAh, promising 20 hours of video playback. So if you are looking for a new phone to binge-watch the new season of Better Call Saul, this could be your phone!'),
        ];
    }
    NewsService.prototype.setNews = function (news) {
        this.news = news;
        this.newsChanged.next(this.news.slice());
    };
    NewsService.prototype.getNews = function () {
        return this.news.slice();
    };
    NewsService.prototype.getNew = function (index) {
        return this.news[index];
    };
    NewsService.prototype.addNews = function (news) {
        this.news.unshift(news);
        this.newsChanged.next(this.news.slice());
    };
    NewsService.prototype.updateNews = function (index, newNews) {
        this.news[index] = newNews;
        this.newsChanged.next(this.news.slice());
    };
    NewsService.prototype.deleteNews = function (index) {
        this.news.splice(index, 1);
        this.newsChanged.next(this.news.slice());
    };
    return NewsService;
}());
NewsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NewsService);

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/rating.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_rating_model__ = __webpack_require__("../../../../../src/app/models/rating.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatingService = (function () {
    function RatingService() {
        this.ratingChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.rating = [
            new __WEBPACK_IMPORTED_MODULE_1__models_rating_model__["a" /* Rating */](true, true, 'shaju', 's7'),
        ];
    }
    RatingService.prototype.setRating = function (rating) {
        this.rating = rating;
        this.ratingChanged.next(this.rating.slice());
    };
    RatingService.prototype.getRating = function () {
        return this.rating.slice();
    };
    RatingService.prototype.addRating = function (rating) {
        this.rating.push(rating);
        console.log(this.rating);
        this.ratingChanged.next(this.rating.slice());
    };
    RatingService.prototype.updateRating = function (index, like, dislike) {
        this.rating[index].like = like;
        this.rating[index].dislike = dislike;
        this.ratingChanged.next(this.rating.slice());
    };
    RatingService.prototype.removedup = function (index) {
        this.rating.splice(index, 1);
    };
    return RatingService;
}());
RatingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RatingService);

//# sourceMappingURL=rating.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_review_model__ = __webpack_require__("../../../../../src/app/models/review.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewService = (function () {
    function ReviewService() {
        this.reviewsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.startedEditing = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.reviews = [
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('samsung-galaxy-c7-2017', 'samsung galaxy c7', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'samsung-galaxy-c7-2017', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('samsung-galaxy-s6-edge-plus', 'samsung galaxy s6', 'The new S6 edge+ just got a bigger screen compared to the S6 edge - 5.7 inches of curved Quad HD AMOLED, and kept the hardware package intact: an Exynos 7420 powerhouse, a great 16MP camera, a plethora of sensors and superb design.', 'Samsung Galaxy S6 edge+ packs an Exynos 7420 chipset developed in-house by Samsung with 1.5 GHz quad-core Cortex-A53 CPU, 2.1 GHz quad-core Cortex-A57 CPU, Mali-T760MP8 GPU, and 4GB of RAM. Save for the slight bump in RAM, the hardware setup is the same as in Samsung Galaxy S6 and Galaxy S6 edge.', 'samsung-galaxy-s6-edge-plus', 'The Samsungs flagship is thinner and comes with a bigger display. This means the iPhone 6S plus has bezel where the S6 edge+ has screen. The size comparison is clearly not in the iPhones favor.The Samsungs flagship is thinner and comes with a bigger display. This means the iPhone 6S plus has bezel where the S6 edge+ has screen. The size comparison is clearly not in the iPhones favor.', 'As of the time of writing this, the Galaxy S6 edge+ runs Android 5.1.1 Lollipop dressed with the latest TouchWiz on top. The iPhone 6s Plus launched with iOS 9 and you can already download v9.0.2. This is the advantage of Apple developing software for Apple devices - updates are lightning-fast.Samsung Galaxy S6 edge+ supports themes unlike the vanilla iOS. Themes can change the wallpaper and icons, core apps such as dialer, contacts, and messages, as well as the notification area.', 'Samsung Galaxy S6 edge+ brings a bigger 5.7" Super AMOLED display of Quad HD resolution. The pixel density is lower than the original edge model at 518ppi, but its still a lot higher than the one on the iPhone 6s Plus.Colors are a matter of taste and Samsung gives you an option of multiple screen modes that adjust both saturation and the white balance. The contrast ratio is exceptional due to the deep blacks. Samsung has maintained their partnership with Corning (those two have a joint venture) and uses Gorilla Glass 4 on both sides.', 'Samsung has opted to use the superb 16MP Sony IMX240 sensor on the Galaxy S6 edge+, coupled with f/1.9 lens. Its a 16MP sensor with 16:9 aspect ratio thats capable of 2160p@30fps video, plus 60fps and 120fps modes at 1080p and 720p respectively.Thats the same excellent setup thats found in Samsung Galaxy S6 and Galaxy S6 edge with the addition of an IR white balance detection sensor, a feature we first saw implemented on the LG G4. LG calls this sensor Color Spectrum Sensor, but essentially both sensors do the same thing - they try to analyze the color spectrum of the available ambient light so that they deliver a more accurate color balance.The Galaxy S6 edge+ is equipped with a 5MP front-facing camera, which has a similar F/1.9 aperture and offers Live HDR and color filters as well.', 'The Galaxy S6 edge+ has a beefy 3,000mAh battery unit, but it has a bigger, higher-resolution screen. Sure, its an AMOLED unit, but it can still affect the overall battery life.Anyway, our battery test shows a minor 2.5% difference in the Endurance rating - the Apple iPhone 6s Plus gets 85 hours, while the Galaxy S6 edge+ scores 83 hours.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('apple-iphone-7-plus-r2', 'iphone 7', 'The iPhone 7 Plus hardly needs an introduction. Apples latest always get the attention no matter how much or how little the company has changed. An aura of controversy has always been part of Appls marketing and some might argue that the polarized opinions actually work in their favor.', 'Apple has equipped the iPhone 7 and 7 Plus with a new-generation A10 Fusion chip. It has a quad-core CPU, a first for the iPhones, with two high-performance cores running at 2.34GHz and two power-saving ones. The high-performance ones run about 40% faster than the A9 chip and two times faster than the A8.', 'samsung-galaxy-s6-edge-plus', 'On the outside, little has changed since the first Plus model - the iPhone 6 Plus. The 6 Plus, 6s Plus, and 7 Plus all share a similar footprint at 158.2 x 77.9 x 7.3 mm though they weigh differently. The 6 Plus is the lightest at 172g, the new aluminum alloy, and 3D Touch tech added 20g up to 192g to the 6s Plus, while the new iPhone 7 Plus has shed some weight down to 188g.', 'The 3D Touch functionality got implemented into even more places across iOS and Apple is fighting well for its last year innovation. It may have started as a gimmick, but its usefulness is growing with each update.You can use the 3D Touch on various app icons to reveal quick actions. But now Apple has expanded those quick actions with system apps by showing an additional row of favorites, quick contacts, recent music, and other relevant app-specific content. When you 3D Touch', 'The display on the iPhone 7 Plus still has the same specs in terms of size and resolution: a 5.5" unit with a 1080p resolution (thats 401ppi). Its a LED-backlit IPS LCD screen with RGB matrix though the panel has been updated since the 6S Plus. Naturally, it is also 3D Touch-enabled, a technology we first saw on the iPhone 6s.', 'Apple completely revamped the imaging abilities on the new iPhone 7 Plus. Like its smaller counterpart the Plus shares the updated 12MP sensor that is reportedly 60% faster and 30% more efficient, the brighter f/1.8 aperture that should let 50% more light, the new six-element lens as well as optical image stabilization.Apple reserved its best innovation for the Plus model. On the back, next to the standard 12MP camera sits a new 12MP sensor with a whole new telephoto lens which Apple aims at portrait shooters. Effectively, its a 56mm f/2.8 lens ', 'The iPhone 7 Plus is equipped with a non-removable Li-Po 2,900 mAh battery, which is about 5.5% beefier than the one of the iPhone 6s Plus, and about the same as on the iPhone 6 Plus. There is also the new energy-efficient Apple A10 Fusion chip, which combined with the new battery and optimized iOS 10, should offer a longer battery life than before.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('apple-iphone-x', 'iphone 10', 'The anniversary iPhone is here. The iPhone X. Or the iPhone 10. The name is as confusing as the product itself is game-changing. Tim Cooks vision finally overwhelmed Steve Jobs ideological remnants. A new dawn for the iPhones has begun, free of the iconic Home key and the notorious screen bezels.', 'It cant be a new generation of iPhones without a new Apple chip, and this year the custom silicon is called A11 Bionic. Apple has moved from a quad-core processor up to a six-core one with a first-ever Apple-designed GPU (previous chipsets used GPUs by PowerVR). There are 3GB of RAM inside the Apple iPhone X.The A11 Bionic chip features two high-powered 2.39GHz Monsoon cores that are 25% more powerful than the 2.34GHz Hurricane ones in the A10 Fusion. The four Mistral cores are power efficient and are 75% faster than the two low-power Zephyr cores in the A10 Fusion. All those six cores can run simultaneously.', 'apple-iphone-x', 'The front of the iPhone X has changed the most. There is no Home key, its all-screen you might say, if it wasnt for the notch. The notch is very crowded though - under that grille is the earpiece, which is also a speaker, and a built-in microphone. The selfie camera is around, too, and pretty hidden under the glass is a whole bunch of tech - infrared camera, flood illuminator, and dot projector - all the essentials for Face ID, proximity, and four-channel ambient light sensors.', 'The Apple iPhone X runs on the latest iOS 11. Now that there is no Home key this iOS version was exclusively tailored for the X with new gestures and functions. Other than that, its the same iOS 11 that was announced back in June. Its not a major or redefining upgrade. Instead, it focuses on refining the design, adding new usability features, and introducing advanced machine learning.', 'The Apple iPhone Xs most anticipated feature is, of course, the 5.8" AMOLED screen with HDR video support and 1125 x 2436px resolution. The resulting pixel density is 458ppi - a flagship one for sure.The screen has a rather unusual ratio of 19.5:9, taller even than Samsungs 18.5:9.', 'The Apple iPhone X keeps a similar dual-12MP (wide+telephoto) camera setup as the iPhone 7 and 8 Plus. While the wide-angle sensor sits behind the same f/1.8 lens, the telephoto one has been updated with optical stabilization and new wider f/2.4 lens. A large piece of scratch-resistant sapphire glass is supposed to keep them away from harms way.The iPhone X, just like the 8 Plus, has Sony Exmor RS sensors - the wide-angle camera has a 1.22 µm pixel size, and the telephoto camera has a 1.0 µm pitch as before.', 'The iPhone X is equipped with a non-removable Li-Po 2,716 mAh battery - about the same capacity as the iPhone 8 Plus. The Low-Power mode, which you can enable manually, should prolong your iPhone X battery life once the charge drops below 20%.The iPhone X ships with a sluggish 5V/1A wall charger which will replenish only 20% of a dead battery in a 30-min charging session.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('htc-desire-10-pro', 'htc-desire-10-pro', 'Were not far from the time when the smart in phone will be implied. Prices are falling, market share is climbing - its near impossible to keep track these days of all the new entries in the low end and the midrange. HTCs Desire lineup is no exception - pulled out of the freezer a couple of seasons ago to carry the affordable, mass-market devices of the brand, it has been growing rapidly.', 'HTC Desire 510 is among the first devices to utilize the next generation of mid-range chipset with a 64-bit processor - the Snapdragon 410. The new chip offers a snappy quad-core Cortex-A53 CPU running at 1.2GHz, Adreno 306 GPU and 1GB of RAM.Weve met with plenty devices powered by the highly popular and widespread Snapdragon 400, so we are definitely eager to see the progress of its successor. As usual our first benchmark - GeekBench 3 - gauges the CPU performance. As it turns out the new Cortex-A53 cores clocked at 1.2GHz are 25% faster than the older Cortex-A7 running at the same frequency, and on par with the Cortex-A7 ticking at 1.6GHz. The 25% performance boost and the new 64-bit instruction set are definitely a worthy upgrade by our books.', 'htc-desire-10-pro', 'The HTC Desire 510 isnt particularly keen on making every millimeter count. At 139.9 x 69.8 x 10mm it weighs 158g and looks it. Compared to another 4.7-incher, the Galaxy Alpha, the Desire 510 is 8mm taller, 5mm wider, 3mm thicker and 43g heavier. Thats quite the difference but, to be fair, these two are not in the same league at all.', 'The HTC Desire 510 comes powered by Android 4.4.2 KitKat complete with the home-baked Sense 6 overlay. Under Sense 6, the user interface has been improved in terms of both functionality and looks. Each of the built-in apps each has a different accent color but it changes its color when visiting the status bar to create a uniform effect - similar to what weve seen with Apples iOS 8.Heres a brief rundown of Sense 6 UI on the HTC Desire 510.', 'The display of the HTC Desire 510 has a 4.7" diagonal but the resolution is by no means impressive. HTC has gone for 480x854px which stretches a little thin for around 208ppi.Viewing angles are good for the most part. There is some loss of contrast as you tilt but colors remain intact. Speaking of, the Desire 510s LCD has good-looking, pleasingly saturated colors.', 'HTC Desire 510 sports a 5MP camera sensor with fixed focus, which means close up shots are definitely a no-go. There is no LED flash to accompany the camera lens either, so the low-light photos are out of the question as well. The camera is capable of HDR shots though, but our unit crashed every time we tried to snap one.', 'The HTC Desire 510 is powered by a removable 2,100mAh battery of the Li-Po variety. HTC says it is capable of 17 hours of 3G call time or about 27 days of stand-by.In our test, the HTC Desire 510 lasted 70 hours on a single charge, 3 full days with an hour each of calling, web browsing and video playback a day - an awesome score and certainly better than what we expected of it. Obviously the new Cortex-A53 low-powered cores are doing a great job.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('htc-u-ultra', 'htc-u-ultra', 'The One couldnt reinstate HTC as the King of Android, so will U be able to? The HTC U Ultra sets off on a new path of design but stays on the familiar footing of high-caliber camera and audio. A Dual Display makes a surprise appearance as the stalwart headphone jack is left behind.', 'With a shortage of new Snapdragons, most companies opted for the Snapdragon 821 for their flagship. The HTC U Ultra is one of those phones, along the likes of LG G6, Xperia XZs and a few others.The 821 is a solid chip, but it provides only a minor advantage over the 820, which powered early 2016 flagships. But again, HTC is not alone in this, only companies with their own chipset manufacturing arms can sidestep Qualcomms supply issues.', 'htc-u-ultra', 'Now that all-metal phones are fairly commonplace, HTC has shifted to a glass back with a "liquid surface." The effect is similar to a soap bubble - mostly transparent, but as the surface curves away a rainbow of colors appears.Our HTC U Ultra unit is Ice White and before we go on we should note that its very difficult to photograph - to the naked eye the phone appears white most of the time (and its green in the photos). Only when the light hits it at a certain angle can you see the green and pink hues that hide within the glass.', 'The HTC U Ultra launches straight with Android 7.0 Nougat, same as the Bolt/10 evo. The interface is largely identical, other than the secondary screen and the Companion (which can be downloaded on the 10 evo as well).We start with the fingerprint reader. HTC claims it recognizes a finger in a blink of an eye - 0.2s. In practice, the phone sometimes took longer to be usable - it could take closer to a second before the screen is on and ready for you.', 'The HTC U Ultra has two screens, the main one being a 5.7" Super LCD5 with QHD resolution (thats 1,440 x 2,560px). The secondary one has 160 x 1,040px resolution, losing 400px of horizontal resolution to make room for the selfie camera.Color accuracy is not perfect - the default mode gets 6.1 average deltaE, 10.7 max. We managed to improve that reading by dragging the color temperature slider all the way to Warm (since the white balance is too cool by default). That only got us to 4.6 average and 8.8 max.', 'In our HTC 10 review, we dubbed this camera "UltraPixel 2.0." Its not called that officially (though the selfie cam does have an UltraPixel mode), but the return to large pixels instead of chasing high MP numbers was right on the money.The pixels arent quite 2µm big like in the original, but at 1.55µ they still have loads of light-collecting power. The bright f/1.8 aperture over the large 1/2.3" sensor further enhances the cameras performance.In its tool bag are also optica', 'The HTC U Ultra comes with a 3,000mAh battery that is sealed inside the body. QuickCharge 3.0 fills up the battery fast, but you may need to do it more often than you would like. The smaller (and cheaper) HTC 10 evo has a bigger battery, 3,200mAh. Even the iPhone 7 Plus is not far behind at 2,900mAh.The U Ultra does have a more efficient chipset than the 10 evo - Snapdragon 821 features many refinements in power efficiency compared to its predecessors. Still, in a body this size we expected more.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('asus-zenfone-4-selfie-pro-zd552kl', 'asus-zenfone-4-selfie-pro-zd552kl', 'Why bother fighting the sharks for attention at IFA when you can hold your own private event and have the spotlights all to yourself? That was Asus line of thought, apparently, which brought us to Rome last week for the European launch of the Zenfone 4. Or rather, the Zenfone 4s. Yes, because they are quite a lot of them.', 'The ZenFone 3 is one of the first few devices to be running on Qualcomms brand new Snapdragon 625. Unfortunately, its not a particularly powerful processor on paper, so we had our expectations in check.', 'asus-zenfone-4-selfie-pro-zd552kl', 'The front of the phone has a large Gorilla Glass panel that stretches end to end and has a subtle but palpable curve around the edges (or 2.5D contour as its known). In the middle is the 5.5-inch display flanked by sizable but not substantial bezels.Above the display are the earpiece, the sensors, and the front camera. Below the display are the three navigation keys. Unfortunately, these arent backlit, which makes them hard to find in the dark. Asus continues to leave these keys without a backlight, even on expensive phones, which makes no sense and something the company should reconsider.', 'The ZenFone 3 runs on the new Asus ZenUI 3.0 running on top of Android 6.0.1 Marshmallow. The software has traditionally been a weak point of Asus phones in the past, and things havent changed much now.', 'The ZenFone 3 comes with two display options; there is a smaller, less popular 5.2-inch model (ZE520KL) and the larger 5.5-inch model (ZE552KL) we have here for a preview. Both have an identical resolution at 1920 x 1080px and the other specifications are also identical on paper, including the maximum brightness of 600nits.', 'The ZenFone 3 has a 16 megapixel Sony IMX298 sensor with deep trench isolation, a six element lens with f/2.0 aperture, laser and phase detection autofocus, a color spectrum sensor and 4-axis optical image stabilization. There is also EIS for video. Speaking of which, the camera is able to capture 4K video.', 'One advantage of going with the bigger Zenfone 3 ZE552KL is that you get a much larger 3000mAh battery. With an efficient processor and a relatively large battery, we expected the ZenFone 3 to have a good battery life, and it delivered. The phone consistently provided around 6 hours of screen-on time with two SIM cards and medium use. The phone easily gets through a full day of use and those using it sparingly could even get through two days on a single charge.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('asus-zenfone-v-v520kl', 'asus-zenfone-v-v520kl', 'The Asus Zenfone Selfie has got to be the companys most straightforward attempt at product naming. Sure, it does have the mandatory 7-symbol alphanumeric model string at its tail, which means zip to the uninitiated, but unlike the piles of different Zenfone 2s, in this case a simple Selfie will suffice to describe the specific model.', 'Befitting its midrange aspirations, the Asus Zenfone Selfie comes with the Qualcomm Snapdragon 615 under the hood. In this particular case the clock speed caps are set at 1.5GHz for the pseudo-big quad-core cluster of Cortex-A53s, and 1.11GHz for the other four cores.', 'asus-zenfone-v-v520kl', 'The back cover on the Zenfone Selfie comes in three different textures, each with its own distinct colors. The Aqua Blue, Chic Pink and Pure White models have a matte finish. Surprisingly, the matte finish can get quite smudgy with fingerprints.Glacier Grey, Glamor Red and Sheer Gold on the other hand come with a faux brushed metal finish and they are great at keeping fingerprints away.Finally, there are the Diamond White, Illusion Polygon Blue, Illusion Smooth Pink, which have an irregular, patterned surface though these were not available on our market. Of course, their availability might differ from region to region.The microUSB 2.0 port is on the bottom. Its upside down compared to the generally accepted position with the chamfers up. The supplied cable does take that into account, however, and has the USB marking on the right side so that its facing up when you plug it in.', 'You almost cantell its Android 5.0.2 underneath ZenUIThe Zenfone Selfie comes with Android 5.0 out of the box, by now somewhat dated already. Googles OS has been the object of a total makeover by Asusand the overlay is called ZenUI. Its not merely a skin too, instead the company has added a host of proprietary apps.With the power button all the way up on top, youll be grateful theres a double tap to wake ', 'Color-accurate 5.5-inch IPS panelThe Asus Zenfone Selfie comes with a 5.5-inch display with 1080p resolution, and that translates to a density of 403ppi. It uses an IPS LCD panel, which our microscope shot revealed to have a standard RGB subpixel arrangement, unsurprisingly.', 'The Asus Zenfone Selfie comes with a 13MP primary (or in this instance, lets just call it rear) camera shooting stills in a 4:3 native ratio up to 4,096 x 3,072 pixels (OK, technically 12.6MP). The sensor is placed behind an f/2.0 lens. It has a laser autofocus system and a dual-tone dual-LED flash to assist in low-light, but lacks optical image stabilization.', 'The Asus Zenfone Selfie comes with a 3,000mAh battery - a user-replaceable lithium polymer unit. The powerpack might very well be the same exact one as in the Zenfone 2, so we expected comparably unimpressive results. We werent entirely right, it turned out.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('nokia-7-', 'nokia-7', 'The Nokia Lumia 735 will definitely try and do just that. Its taking charge of Microsofts updated Windows Phone midrange with the latest Lumia Denim firmware, an HD screen, LTE and a selfie-centric wide-angle front cam. The Lumia 720 is one of the companys top sellers and its now been upgraded two-fold by the Lumia 730 and Lumia 735. They share the 4.7" ClearBlack AMOLED screen, the Snapdragon 400 chipset and the imaging department, combining a wide-aperture primary camera with a high-res, Skype-optimized selfie cam.', 'Nokia Lumia 735 is powered by the widely used Snapdragon 400 chipset. It has four Cortex-A7 processor cores clocked at 1.2GHz, Adreno 305 graphics common for most of the Windows Phone gang and 1GB RAM.First, we ran the multi-platform compound test BaseMark OS II, which takes in consideration CPU performance, graphics, web benchmark, and memory. Surprisingly, the Lumia 735 posted a poor result compared to its Snapdragon 400 Lumia siblings.', 'nokia-7-', 'The Lumia 730/735 is a sleek looking fella, strongly reminiscent of the Lumia 800, which in turn was identical to the iconic Nokia N9. Another way to describe it is a smaller version of the Lumia 1520. In any case, the phone looks the part - with a streamlined body and clean, understated design.The Lumia 735 is thinner than its predecessors. The phone measures 134.7 x 68.5 x 8.7mm. This is the same thickness as a Lumia 1520 - the slimmest the Lumia lineup has ever offered.', 'The Nokia Lumia 735 is running the latest available Windows Phone 8.1 (with Update 1) out of box. On top of this, the company is blessing it with the Lumia Denim software expansion package. The Windows Phone 8.1 major firmware update has already rolled out to Windows Phone 8 devices, and represents the latest that Microsoft has to offer in a mobile OS. The Update 1 expansion adds folder support, customizable snooze alarms, enables Cortana in UK and China, plus includes some under the hood improvements.', 'The Lumia 735 is built around a 4.7" ClearBlack AMOLED display. It has 720p resolution resulting in a pixel density of 316ppi. On top, its covered with a protective layer of Gorilla Glass 3.The capacitive touch sensor on the display features the supersensitive touch technology that allows it to detect fingers even through gloves.', 'The Nokia Lumia 735 comes with a 6.7MP sensor with Carl Zeiss lens. Similar to plenty of Nokia sensors in the past though you cant use the full resolution of the sensor - you get 16:9 photos in 3072 x 1728 (5.3MP) and 4:3 photos in 2848 x 2144 (6.1MP).', 'The 2200mAh Li-Ion battery inside the Lumia 735 is rated at up to 17 hours of 3G talk time and 600 hours of standby. Its a tad larger than a potential main competitors, the Moto GWe ran our usual battery tests including web browsing, calls, video and standby. The phone '),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('nokia-8-', 'nokia-8', 'This is a Nokia phone built by Foxconn for HMD in partnership with Zeiss and Google. Make no mistake, though, theres Finnish blood running through Nokia 8s veins. The new leadership tried to resurrect the qualities that were vital to the Nokia brand: quality, simplicity, trust and reliability.', 'The Nokia 8 is powered by Snapdragon 835 - the chipset of choice for an Android flagship, assuming the maker does not produce its own chips. It has 4GB of RAM and 64GB storage and its running pure Android 7.1.1, of course.', 'nokia-8-', 'The Nokia 8 comes in polished and matte finishes. The Polished Blue and Polished Copper models can take over 20 hours to reach their high-gloss mirror finish. Even the matte Steel and Tempered Blue versions have to go through a 40-stage process of machining and anodizing.The phone starts life as a single block of 6000 series aluminum that reaches a final form 7.9mm thick (but with a tricky variable radius curve).That USB port also delivers up to 18W of power to the battery thanks to Quick Charge 3.0. The battery has 3,090mAh capacity, not huge but not bad either. ', 'The Nokia 8, just like the 3, 5, and 6, runs the an almost vanilla Android Nougat OS. Everything but the camera is handled by the stock Google app suite and while this approach may not be appealing to some, it does come with two indisputable pros - fast updates and the smoothest Android experience.', 'The Nokia 8 is built around a 5.3" IPS display of a flagship-grade 1440p resolution. Some might have hoped for OLED, but HMD stuck with IPS LCD. The 5.3" panel is a bit smaller than the Nokia 6s screen, but is much sharper with its 554ppi density. And it should be much brighter, maxing out at 700 nits (vs. 450 nits for the mid-range model).Peeking into it under our microscope peeking revealed a regular RGB matrix.', 'The Nokia 8 has two 13MP camera sensors seating behind Zeiss lens. One sensor shoots in black & white, the other - in color (the latter also has optical image stabilization). At 1.12µm, the pixels arent the largest, and the f/2.0 aperture isnt the brightest. Weve seen Huawei do a great job with a similar setup, so there should be nothing to worry about. Note that the second camera will help with bokeh effects, but does not offer zooming capabilities as was the case with the most recent Huawei phones.', 'The Nokia 8 is powered by a 3,090 mAh battery - a rather average capacity for a flagship. The phone supports Quick Charging 3.0 technology and comes with a 18W charger in the retail box. It fills up the battery from 0 to 48% in only 30 minutes.The Nokia 8 turned out to be a capable performer in our battery test with a 78-hour'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('huawei-enjoy-7-plus-new', 'huawei-enjoy-7-plus-new', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'huawei-enjoy-7-plus-new', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('huawei-mate10-pro', 'huawei-mate10-pro', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'huawei-mate10-pro', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('lg-stylus-3-', 'lg-stylus-3', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'huawei-mate10-pro', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('lg-v30-', 'lg-v30', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'lg-v30-', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('motorola-moto-e4-plus', 'motorola-moto-e4-plus', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'motorola-moto-e4-plus', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('motorola-moto-g5s', 'motorola-moto-g5s', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'motorola-moto-g5s', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('lenovo-a6600', 'lenovo-a6600', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'lenovo-a6600', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('lenovo-k8-plus', 'lenovo-k8-plus', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'lenovo-k8-plus', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('microsoft-lumia-650-s', 'microsoft-lumia-650-s', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'microsoft-lumia-650-s', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('microsoft-lumia-950-xl--', 'microsoft-lumia-950-xl', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'microsoft-lumia-650-s', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('oppo-f5-new', 'oppo-f5-new', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'oppo-f5-new', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('oppo-r11s-r', 'oppo-r11s-r', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'oppo-r11s-r', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('oneplus-3-', 'oneplus-3', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'oneplus-3-', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('oneplus-5', 'oneplus-5', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'oneplus-5', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('zte-blade-a601', 'zte-blade-a601', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'zte-blade-a601', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('zte-nubia-z17s', 'zte-nubia-z17s', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'zte-nubia-z17s', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('acer-liquid-jade-2', 'acer-liquid-jade-2', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'acer-liquid-jade-2', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('acer-liquid-x2-1', 'acer-liquid-x2-1', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'acer-liquid-x2-1', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('xiaomi-mi-note3-', 'xiaomi-mi-note3', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'xiaomi-mi-note3-', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('xiaomi-redmi-note-5a', 'xiaomi-redmi-note-5a', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'xiaomi-redmi-note-5a', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('sony-xperia-xa--', 'sony-xperia-xa', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'sony-xperia-xa--', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('sony-xperia-xa1-2017', 'sony-xperia-xa1-2017', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'sony-xperia-xa1-2017', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('plum-might-plus-ii', 'plum-might-plus-ii', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'xiaomi-redmi-note-5a', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('vodafone-smart-e8', 'vodafone-smart-e8', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'vodafone-smart-e8', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_review_model__["a" /* Review */]('vodafone-smart-speed-6', 'vodafone-smart-speed-6', 'The 5.7-inch form factor has stuck with the Note line for four generations now, so it definitely holds a lot of appeal. The Galaxy C7 might just be a perfect alternative for anyone who does not need the S Pen and all the extra features - and the resulting price premium - or isnt particularly fond of curved displays.', 'The Samsung Galaxy C7 is not a powerhouse by any standards. It makes use of a Qualcomm Snapdragon 625 SoC with a total of eight Cortex-A53 cores, running at 2.0 GHz. But the real trick to the chip is that it is manufactured using a 14nm process. It is the same fabrication process Qualcomm uses for its top-tier chips like the Snapdragon 820 and is still quite uncommon in mid-range chips.', 'vodafone-smart-speed-6', 'Apart from the updated design, there isnt anything all that notable or different about the Samsung Galaxy C7. What you get is a sturdy metal unibody with a nice matte finish that luckily isnt prone to get smudged up with fingerprints, all put together with great precision in a neat phablet package. The materials and the build quality are immaculate - wed certainly give them that.', 'Android 6.0.1 Marshmallow at your service The Samsung Galaxy C7 boots up with Android 6.0.1 Marshmallow with TouchWiz UI on top. The latest available version of Android bundles cool features like native support for an app manager, Doze mode, and Google Now on Tap among other tweaks. Plus, Samsung has gotten to a point where its interface looks quite refined. The C7 also has the benefit of being quite clutter-free with almost no annoying bloatware, but more on that later.', 'It seems you can always count on an upper midrange Samsung smartphone to come with a great-looking display. The Korean Giant is pretty much on top of the food chain when it comes to its excellent Super AMOLED technology where high contrast and punchy colors are a given.Sitting proud at a respectable 5.7 inches, the Galaxy C7 is a perfect stand-in for a Note phablet, minus the S Pen of course, among other things. The point is, you definitely wont suffer from any shortage of screen real estand the Full HD resolution and 386ppi still make for an absolutely sharp image. Plus, skipping on the increasingly popular QHD does go easier on your battery.', 'The camera in the Galaxy C7 is based around Samsung’s S5K3P3 sensor. It is a 1-micron pixel sensor, which has a reduced height of only 5mm to fit into very thin devices with minimal protrusion. It uses the companys ISOCELL technology to physically separate neighboring pixels and limit unwanted crosstalk between neighboring pixels at the level of bigger 1.12μm-pixel based image sensors, which lack the ISOCELL tech.As for the overall camera experience on Galaxy C7, it is quite streamlined. Samsung has included the latest iteration of its camera app, and it works well on the phablet. Launches are quick, and you also get the convenience of a quick launch shortcut - double pressing the Home button.', 'The Samsung Galaxy C7 is powered by a hefty 3300mAh battery, which is non-removable. However, on a positive note, combined with the 1080p AMOLED panel and a 14nm midrange Snapdragon processor, the sealed-in pack manages to go a long way. Just as a reference, you might recall the Galaxy J7 (2016), which managed to pull a whopping 101 hours of endurance with an identical 3300mAh battery, a 14nm Exynos chipset and a 720p AMOLED display.'),
        ];
    }
    ReviewService.prototype.setReviews = function (reviews) {
        this.reviews = reviews;
        this.reviewsChanged.next(this.reviews.slice());
    };
    ReviewService.prototype.getReviews = function () {
        return this.reviews.slice();
    };
    ReviewService.prototype.getReview = function (index) {
        return this.reviews[index];
    };
    ReviewService.prototype.addReview = function (review) {
        this.reviews.unshift(review);
        this.reviewsChanged.next(this.reviews.slice());
    };
    ReviewService.prototype.updateReview = function (index, newReview) {
        this.reviews[index] = newReview;
        this.reviewsChanged.next(this.reviews.slice());
    };
    ReviewService.prototype.deleteReview = function (index) {
        this.reviews.splice(index, 1);
        this.reviewsChanged.next(this.reviews.slice());
    };
    return ReviewService;
}());
ReviewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ReviewService);

//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/srating.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SratingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_srating_model__ = __webpack_require__("../../../../../src/app/models/srating.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SratingService = (function () {
    function SratingService() {
        this.sratingChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.srating = [
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](4, 'shaju', 's7'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'samsung galaxy s6'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'samsung galaxy c7'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'iphone 10'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'iphone 7'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'htc-u-ultra'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'htc-desire-10-pro'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'asus-zenfone-v-v520kl'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'asus-zenfone-4-selfie-pro-zd552kl'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'nokia-8'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'nokia-7'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'huawei-mate10-pro'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'huawei-enjoy-7-plus'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'lg-v30'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'lg-stylus-3'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'motorola-moto-g5s'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'motorola-moto-e4-plus'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'lenovo-k8-plus'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'lenovo-a6600'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'microsoft-lumia-950-xl'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'microsoft-lumia-650-s'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'oppo-r11s-r'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'oppo-f5-new'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'oneplus-5'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'oneplus-3'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'zte-nubia-z17s'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'zte-blade-a601'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'acer-liquid-x2-1'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'acer-liquid-jade-2'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'xiaomi-redmi-note-5a'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'xiaomi-mi-note3'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'sony-xperia-xa1-2017'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'sony-xperia-xa'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'plum-might-plus-ii'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'plum-axe-lte'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'vodafone-smart-speed-6'),
            new __WEBPACK_IMPORTED_MODULE_1__models_srating_model__["a" /* Srating */](1, 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'vodafone-smart-e8'),
        ];
    }
    SratingService.prototype.setSrating = function (srating) {
        this.srating = srating;
        this.sratingChanged.next(this.srating.slice());
    };
    SratingService.prototype.getSrating = function () {
        return this.srating.slice();
    };
    SratingService.prototype.addSrating = function (srating) {
        this.srating.push(srating);
        console.log(this.srating);
        this.sratingChanged.next(this.srating.slice());
    };
    SratingService.prototype.updateSrating = function (index, like) {
        this.srating[index].like = like;
        this.sratingChanged.next(this.srating.slice());
    };
    SratingService.prototype.removedup = function (index) {
        this.srating.splice(index, 1);
    };
    return SratingService;
}());
SratingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SratingService);

//# sourceMappingURL=srating.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/ureview.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UreviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__ = __webpack_require__("../../../../../src/app/models/ureview.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UreviewService = (function () {
    function UreviewService() {
        this.ureviewChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.startedEditing = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.ureview = [
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('shaju', 'good phone', 'shaju', 's7', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'samsung galaxy s6', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Kamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'samsung galaxy c7', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Lahin', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'iphone 10', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Rubel', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'iphone 7', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'htc-u-ultra', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'htc-desire-10-pro', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'asus-zenfone-v-v520kl', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'asus-zenfone-4-selfie-pro-zd552kl', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'nokia-8', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'nokia-7', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'huawei-mate10-pro', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'huawei-enjoy-7-plus', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'lg-v30', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'lg-stylus-3', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'motorola-moto-g5s', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'motorola-moto-e4-plus', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'lenovo-k8-plus', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'lenovo-a6600', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'microsoft-lumia-950-xl', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'microsoft-lumia-650-s', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'oppo-r11s-r', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'oppo-f5-new', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'oneplus-5', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'oneplus-3', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'zte-nubia-z17s', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'zte-blade-a601', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'acer-liquid-x2-1', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'acer-liquid-jade-2', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'xiaomi-redmi-note-5a', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'xiaomi-mi-note3', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'sony-xperia-xa1-2017', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'sony-xperia-xa', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'plum-might-plus-ii', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'plum-axe-lte', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'vodafone-smart-speed-6', ''),
            new __WEBPACK_IMPORTED_MODULE_2__models_ureview_model__["a" /* Ureview */]('Jamal', 'best phone', 'FTzCUkaxQxaKmISWlKQQOpo2ZHh2', 'vodafone-smart-e8', ''),
        ];
    }
    UreviewService.prototype.setUreview = function (ureview) {
        this.ureview = ureview;
        this.ureviewChanged.next(this.ureview.slice());
    };
    UreviewService.prototype.getUreviews = function () {
        return this.ureview.slice();
    };
    UreviewService.prototype.getUreview = function (index) {
        return this.ureview[index];
    };
    UreviewService.prototype.addUreview = function (ureview) {
        this.ureview.unshift(ureview);
        console.log(this.ureview);
        this.ureviewChanged.next(this.ureview.slice());
    };
    UreviewService.prototype.updateUreview = function (index, newReview) {
        this.ureview[index] = newReview;
        this.ureviewChanged.next(this.ureview.slice());
    };
    UreviewService.prototype.remove = function (index) {
        this.ureview.splice(index, 1);
        this.ureviewChanged.next(this.ureview.slice());
    };
    return UreviewService;
}());
UreviewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UreviewService);

//# sourceMappingURL=ureview.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
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
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map