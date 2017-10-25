webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\t#app{\r\n\t\theight:100vh;\r\n\t\tdisplay:-webkit-box;\r\n\t\tdisplay:-ms-flexbox;\r\n\t\tdisplay:flex;\r\n\t\t-webkit-box-orient:vertical;\r\n\t\t-webkit-box-direction:normal;\r\n\t\t    -ms-flex-direction:column;\r\n\t\t        flex-direction:column;\r\n\t}\r\n\theader{\r\n\t\tbackground-color:#3C3741;\r\n\t\twidth:100vw;\r\n\t\theight:50px;\r\n\t\tposition: fixed;\r\n\t\ttop:0;\r\n\t\tcolor:whitesmoke;\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: -ms-flexbox;\r\n\t\tdisplay: flex;\r\n\t\t-webkit-box-orient: horizontal;\r\n\t\t-webkit-box-direction: normal;\r\n\t\t    -ms-flex-direction: row;\r\n\t\t        flex-direction: row;\r\n\t\tz-index: 99;\r\n\t}\r\n\theader i{\r\n\t\tmargin:12px;\r\n\t}\r\n\theader h1,footer h1{\r\n\t\t-webkit-box-flex:100%;\r\n\t\t    -ms-flex:100%;\r\n\t\t        flex:100%;\r\n\t\tline-height: 50px;\r\n\t\ttext-align: center;\r\n\t}\r\n\t#content{\r\n\t\t-webkit-box-flex:100%;\r\n\t\t    -ms-flex:100%;\r\n\t\t        flex:100%;\r\n\t\twidth:100vw;\r\n\t\tbackground-color:#333;\r\n\t\tmargin:50px 0;\r\n\t}\r\n\tfooter{\r\n\t\tbackground-color:#F04903;\r\n\t\tposition:fixed;\r\n\t\tbottom:0;\r\n\t\twidth:100vw;\r\n\t\theight:50px;\r\n\t\tcolor:whitesmoke;\r\n\t} \r\n\t#drawer{\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: -ms-flexbox;\r\n\t\tdisplay: flex;\r\n\t\tposition: fixed;\r\n\t\ttop:0;\r\n\t\tleft:-75vw;\r\n\t\twidth:75vw;\r\n\t\theight:101vh;\r\n\t\tz-index: 99;\r\n\t\tbackground-image: linear-gradient(to bottom, black, rgb(22, 50, 77));\r\n\t}\r\n\t#drawer-header{\r\n\t\twidth:100%;\r\n\t\theight:50px;\r\n\t\ttext-indent: 12px;\r\n\t\tline-height: 50px;\r\n\t\tposition: absolute;\r\n\t\ttop:0;\r\n\t\tcolor:whitesmoke;\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: -ms-flexbox;\r\n\t\tdisplay: flex;\r\n\t\t-webkit-box-orient: horizontal;\r\n\t\t-webkit-box-direction: normal;\r\n\t\t    -ms-flex-direction: row;\r\n\t\t        flex-direction: row;\r\n\t\r\n\t}\r\n\t#drawer-header h1{\r\n\t\t-webkit-box-flex:100%;\r\n\t\t    -ms-flex:100%;\r\n\t\t        flex:100%;\r\n\t}\r\n\t#drawer i{\r\n\t\tmargin:12px;\r\n\t}\r\n\t#drawer ul{\r\n\t\tmargin-top:50px;\r\n\t\tcolor:white;\r\n\t\ttext-transform: uppercase;\r\n\t\t\r\n\t}\r\n\t#drawer ul li{\r\n\t\tlist-style: none;\r\n\t\tmargin:15px auto;\r\n\t\theight:50px;\r\n\t\tline-height: 50px;\r\n\t\ttext-indent: 5vw;\r\n\t}\r\n\t#drawer a{\r\n\t\ttext-decoration: none;\r\n\t\tcolor:whitesmoke;\r\n\t}\r\n\t#drawer-footer{\r\n\t\tbackground-color:black;\r\n\t\tposition:absolute;\r\n\t\tbottom:6px;\r\n\t\twidth:75vw;\r\n\t\theight:50px;\r\n\t\tline-height: 50px;\r\n\t\ttext-align: center;\r\n\t\tcolor:whitesmoke;\r\n\t}\r\n\t#drawer-shadow{\r\n\t\tposition: fixed;\r\n\t\ttop:0;\r\n\t\twidth:100vw;\r\n\t\theight:101vh;\r\n\t\tbackground-color: rgba(0,0,0,.6);\r\n\t\tz-index:80;\r\n\t\topacity: 0;\r\n\t\tright:100vw;\r\n\t}\r\n\t/*animations:*/\r\n\t@-webkit-keyframes drawerOpen {\r\n\t\tfrom {-webkit-transform:translateX(0);transform:translateX(0)}\r\n\t\tto {-webkit-transform:translateX(74vw);transform:translateX(74vw)}\r\n\t}\r\n\t@keyframes drawerOpen {\r\n\t\tfrom {-webkit-transform:translateX(0);transform:translateX(0)}\r\n\t\tto {-webkit-transform:translateX(74vw);transform:translateX(74vw)}\r\n\t}\r\n\t.drawer-open{\r\n\t\t-webkit-animation-name: drawerOpen;\r\n\t\t        animation-name: drawerOpen;\r\n\t\t-webkit-animation-duration: 800ms;\r\n\t\t        animation-duration: 800ms;\r\n\t\t-webkit-animation-timing-function: ease-out;\r\n\t\t        animation-timing-function: ease-out;\r\n\t\t-webkit-animation-fill-mode: forwards;\r\n\t\t        animation-fill-mode: forwards;\r\n\t}\r\n\t@-webkit-keyframes shadowOpen {\r\n\t\t0% {\r\n\t\t\tright:-100vw;\r\n\t\t\topacity: 0;\r\n\t\t}\r\n\t\t1%{\r\n\t\t\tright:0;\r\n\t\t\topacity: 0;\r\n\t\t}\r\n\t\t100% {\r\n\t\t\tright:0;\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n\t@keyframes shadowOpen {\r\n\t\t0% {\r\n\t\t\tright:-100vw;\r\n\t\t\topacity: 0;\r\n\t\t}\r\n\t\t1%{\r\n\t\t\tright:0;\r\n\t\t\topacity: 0;\r\n\t\t}\r\n\t\t100% {\r\n\t\t\tright:0;\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n\t.shadow-open{\r\n\t\t-webkit-animation-name: shadowOpen;\r\n\t\t        animation-name: shadowOpen;\r\n\t\t-webkit-animation-duration: 500ms;\r\n\t\t        animation-duration: 500ms;\r\n\t\t-webkit-animation-timing-function: ease-out;\r\n\t\t        animation-timing-function: ease-out;\r\n\t\t-webkit-animation-fill-mode: forwards;\r\n\t\t        animation-fill-mode: forwards;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\r\n    <header>\r\n        <!--\r\n        <div class=\"flex\">\r\n            <img src=\"assets/mava.png\" width=\"50px\" alt=\"\">\r\n            <div class=\"search\">\r\n                <span *ngIf=\"login.status == true; else statuselse\">Hola {{new_user.first_name}} {{new_user.last_name}}</span>\r\n                \r\n                <ng-template #statuselse><button *ngIf=\"state==='inactive'\"(click)=\"toggleState()\">Login!</button></ng-template>\r\n                <div id=\"bag\">\r\n                    <div id=\"bag-count\" [@cartState]=\"count\" (click) =  \"rotateBag()\">{{BAG.count}}</div>\r\n                    <div id=\"bag-logo\" [@cartState]=\"cart\" (click) = \"rotateBag()\"><img src=\"assets/shopping-bag-flat.png\" alt=\"bag\" width=\"40px\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"loginPanel\" [@heroState]=\"state\">\r\n            <div class=\"blc\">Logged: {{login.status}}</div>\r\n            <span class=\"blc\" id=\"login-panel-logo\"><img src=\"assets/mava.png\" width='100px'></span>\r\n            <input class=\"blc\" [(ngModel)]=\"login.email\"type=\"text\" placeholder=\"email\">\r\n            <input class=\"blc\" [(ngModel)]=\"login.password\"type=\"password\" placeholder=\"password\">\r\n            <button class=\"blc\" (click)=\"loginWithEmail()\" >Login</button>\r\n            <a class=\"blc\" (click)=\"registerShow()\">Register here</a>\r\n            <div class=\"blc\"><button (click)=\"toggleState()\">Salir</button></div>\r\n            <div id=\"register\" [@registerState]=\"register\">\r\n                <h1>Enter your information:</h1>\r\n                <input type=\"text\" [(ngModel)]=\"new_user.first_name\"name=\"first_name\" placeholder=\"first_name\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.middle_name\"name=\"middle_name\" placeholder=\"middle_name\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.last_name\"name=\"last_name\" placeholder=\"last_name\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.country\"name=\"country\" placeholder=\"Country\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.state\"name=\"state\" placeholder=\"State\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.city\"name=\"city\" placeholder=\"City\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.neigh\"name=\"neigh\" placeholder=\"Neighborhood\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.postal_code\"name=\"postal_code\" placeholder=\"Postal Code\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.street_number\"name=\"street_number\" placeholder=\"Street and Number\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.email\"name=\"email\" placeholder=\"email\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.phone\"name=\"phone\" placeholder=\"phone\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.age\"name=\"age\" placeholder=\"age\">\r\n                <input type=\"text\" [(ngModel)]=\"new_user.genre\"name=\"genre\" placeholder=\"genre\">\r\n                <button (click)=\"registerShow()\">Cancel</button>\r\n                <button (click)=\"saveInformation()\">SAVE</button>\r\n            </div>\r\n        </div>\r\n        \r\n        <a routerLink=\"/catalog-list\">home</a>\r\n        <a routerLink=\"/checkout/cart\">Checkout</a>\r\n        <a *ngIf=\"login.status == true;\" routerLink=\"/user\">User</a>\r\n        -->\r\n        <i class=\"material-icons\" (click)=\"drawer_open()\">menu</i>\r\n        <h1>my E-Commerce</h1>\r\n        <i class=\"material-icons icon-blue\" (click)=\"cart_open()\">shopping_cart</i>\r\n    </header>\r\n    <div id=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <footer>\r\n        <h1>Login</h1>\r\n    </footer>  \r\n    <div id=\"drawer\">\r\n        <div id=\"drawer-header\">\r\n            <h1>AppName</h1>\r\n            <i class=\"material-icons icon-blue\" (click)=\"close_all()\">close</i>\r\n            \r\n        </div>\r\n        <ul>\r\n            <li><a href=\"/catalog-list\"><i class=\"material-icons icon-blue\">home</i>home</a></li>\r\n            <li><a href=\"#\"><i class=\"material-icons icon-blue\">shopping_cart</i>cart</a></li>\r\n            <li><a href=\"#\"><i class=\"material-icons icon-blue\">done_all</i>checkout</a></li>\r\n            <li><a href=\"#\"><i class=\"material-icons icon-blue\">face</i>profile</a></li>\r\n            <li><a href=\"#\"><i class=\"material-icons icon-blue\">store</i>orders</a></li>\r\n            <li><a href=\"#\"><i class=\"material-icons icon-blue\">payment</i>payments</a></li>\r\n            <li><a href=\"#\"><i class=\"material-icons icon-blue\">help</i>faq</a></li>\r\n        </ul>\r\n        <div id=\"drawer-footer\">\r\n            <h1>@feervalero</h1>\r\n        </div>\r\n    </div>\r\n    <div id=\"drawer-shadow\" (click)=\"close_all()\" >\r\n        \r\n    </div>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(cookieService, userService) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.title = 'e-Commerce';
        this.BAG = {
            count: 2
        };
        this.login = {
            status: false,
            email: '',
            password: ''
        };
        this.state = 'inactive';
        this.register = 'inactive';
        this.cart = "cart";
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.cookieService.putObject("order",this.orderExample);
        //console.log(this.getCookie("order"));
        this.new_user = this.cookieService.getObject("user");
        if (this.cookieService.getObject("user")) {
            this.login.status = true;
        }
        else {
            this.new_user = {
                first_name: '',
                middle_name: '',
                last_name: '',
                country: '',
                state: '',
                city: '',
                neigh: '',
                postal_code: '',
                street_number: '',
                email: '',
                phone: '',
                age: '',
                genre: ''
            };
        }
        if (this.cookieService.getObject("order")) {
            this.a = this.cookieService.getObject("order");
            this.BAG.count = this.a.length;
        }
    };
    AppComponent.prototype.getCookie = function (key) {
        return this.cookieService.getObject(key);
    };
    AppComponent.prototype.loginShow = function (st) {
        if (st == false) {
        }
    };
    AppComponent.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    AppComponent.prototype.toggleStatus = function () {
        this.login.status = this.login.status === true ? false : true;
    };
    AppComponent.prototype.registerShow = function () {
        this.register = this.register === 'active' ? 'inactive' : 'active';
    };
    AppComponent.prototype.rotateBag = function () {
        this.cart = this.cart === 'cart' ? 'count' : 'cart';
        console.log("cart", this.cart);
    };
    AppComponent.prototype.drawer_open = function () {
        var d = document.getElementById("drawer");
        d.className += " drawer-open";
        var d = document.getElementById("drawer-shadow");
        d.className += " shadow-open";
    };
    AppComponent.prototype.close_all = function () {
        var e = document.getElementById("drawer");
        e.className = '';
        var es = document.getElementById("drawer-shadow");
        es.className = '';
    };
    AppComponent.prototype.saveInformation = function () {
        var _this = this;
        if (this.new_user.email != '') {
            this.userService.searchByEmail(this.new_user.email).then(function (x) {
                console.log("user with this mail ", x);
                if (x === null) {
                    _this.userService.addUser(_this.new_user).then(function (y) {
                        console.log("insert response", y._id);
                        _this.cookieService.putObject("user", y);
                        _this.login.status = true;
                        _this.register = 'inactive';
                        _this.state = 'inactive';
                        //registered animation
                    });
                }
            });
        }
    };
    AppComponent.prototype.loginWithEmail = function () {
        var _this = this;
        console.log("loggin in with:", this.login);
        this.userService.searchByEmail(this.login.email).then(function (res) {
            if (res == null) {
            }
            else {
                _this.new_user = res;
                _this.cookieService.putObject("user", res);
                _this.registerShow();
                _this.toggleState();
                _this.toggleStatus();
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('heroState', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    transform: 'translateY(-150%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    transform: 'translateY(0%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('registerState', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    transform: 'translateY(220vh)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    transform: 'translateY(0vh)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('cartState', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('cart', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    transform: 'rotateY(0deg)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('count', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    transform: 'rotateY(90deg)',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('cart => count', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('count => cart', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms ease-out'))
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkout_cart_cart_component__ = __webpack_require__("../../../../../src/app/checkout/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_menu_list_menu_component__ = __webpack_require__("../../../../../src/app/list-menu/list-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__list_menu_main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/list-menu/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__list_menu_grid_item_1_grid_item_1_component__ = __webpack_require__("../../../../../src/app/list-menu/grid-item-1/grid-item-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__list_menu_list_item_1_list_item_1_component__ = __webpack_require__("../../../../../src/app/list-menu/list-item-1/list-item-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__checkout_address_address_component__ = __webpack_require__("../../../../../src/app/checkout/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__checkout_payment_payment_component__ = __webpack_require__("../../../../../src/app/checkout/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__checkout_confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/checkout/confirmation/confirmation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: "", redirectTo: "/catalog-list", pathMatch: "full"
    },
    {
        path: "catalog-list", children: [
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_12__list_menu_main_menu_main_menu_component__["a" /* MainMenuComponent */]
            }
        ]
    },
    {
        path: "product-detail/:sku", component: __WEBPACK_IMPORTED_MODULE_8__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
    },
    {
        path: "cart", component: __WEBPACK_IMPORTED_MODULE_9__checkout_cart_cart_component__["a" /* CartComponent */]
    },
    {
        path: "login", component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: "checkout",
        component: __WEBPACK_IMPORTED_MODULE_16__checkout_checkout_component__["a" /* CheckoutComponent */],
        children: [
            {
                path: "cart",
                component: __WEBPACK_IMPORTED_MODULE_9__checkout_cart_cart_component__["a" /* CartComponent */]
            },
            {
                path: "address",
                component: __WEBPACK_IMPORTED_MODULE_17__checkout_address_address_component__["a" /* AddressComponent */]
            },
            {
                path: "payment",
                component: __WEBPACK_IMPORTED_MODULE_18__checkout_payment_payment_component__["a" /* PaymentComponent */]
            },
            {
                path: "confirmation",
                component: __WEBPACK_IMPORTED_MODULE_19__checkout_confirmation_confirmation_component__["a" /* ConfirmationComponent */]
            }
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__list_menu_list_menu_component__["a" /* ListMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__checkout_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_12__list_menu_main_menu_main_menu_component__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__list_menu_grid_item_1_grid_item_1_component__["a" /* GridItem1Component */],
            __WEBPACK_IMPORTED_MODULE_15__list_menu_list_item_1_list_item_1_component__["a" /* ListItem1Component */],
            __WEBPACK_IMPORTED_MODULE_16__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__checkout_address_address_component__["a" /* AddressComponent */],
            __WEBPACK_IMPORTED_MODULE_18__checkout_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_19__checkout_confirmation_confirmation_component__["a" /* ConfirmationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_cookie__["a" /* CookieModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/catalogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogsService = (function () {
    function CatalogsService(http) {
        this.http = http;
    }
    CatalogsService.prototype.getCatalogList = function () {
        return this.http.get("http://localhost:3000/api/products")
            .toPromise()
            .then(function (response) { return JSON.parse(response["_body"]); })
            .catch(this.errorHandler);
    };
    CatalogsService.prototype.getProductById = function (id) {
        return this.http.get("http://localhost:3000/api/products/" + id)
            .toPromise()
            .then(function (response) { return JSON.parse(response["_body"]); })
            .catch(this.errorHandler);
    };
    CatalogsService.prototype.errorHandler = function (error) {
        console.log("error ocurred", error);
        return Promise.reject(error.message);
    };
    return CatalogsService;
}());
CatalogsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CatalogsService);

var _a;
//# sourceMappingURL=catalogs.service.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/address/address.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  address works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
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

var AddressComponent = (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-address',
        template: __webpack_require__("../../../../../src/app/checkout/address/address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/address/address.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddressComponent);

//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\r\n<tr>  \r\n    <th>Item</th>\r\n    <th>Name</th>\r\n    <th>Price</th>\r\n    <th>Quantity</th>\r\n</tr>\r\n<tr *ngFor=\"let item of currentOrder\">\r\n    <div *ngIf=\"item.Quantity !== 0\">\r\n        <td>{{item.Sku}}</td>\r\n        <td>{{item.ItemDesc}}</td>\r\n        <td>{{item.Price}}</td>\r\n        <td>\r\n            <i class=\"material-icons\">remove</i>\r\n            <span>{{item.Quantity}}</span>\r\n            <i class=\"material-icons\">add</i>\r\n        </td>\r\n        <td><i class=\"material-icons\">delete</i></td>\r\n    </div>\r\n</tr>\r\n</table>\r\n\r\n<!--<li *ngFor=\"let items of currentOrder\">{{items.Sku}}</li>-->"

/***/ }),

/***/ "../../../../../src/app/checkout/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(os) {
        this.os = os;
        this.order = {
            contact: "01010101",
            created_date: "2017-07-02 15:22:33.000",
            stage: "90",
            status: "1",
            image: "1",
            products: [{
                    sku: "10011002",
                    image: "1",
                    quantity: "2",
                    name: "Corrector Facial Precio Especial",
                    price: "1050.50",
                    price_discount: "700"
                }, {
                    sku: "10011003",
                    image: "1",
                    quantity: "3",
                    name: "Corrector Facial Precio Especial New",
                    price: "105.50",
                    price_discount: "70"
                }],
            shipping_address: {
                Country: "MX",
                State: "Nuevo Leon",
                City: "Monterrey",
                Neighbourhood: "Centro",
                street_number: "calle 1234"
            },
            total: "700",
            total_extra: {
                taxes: "112",
                freight: "97.44"
            },
            payments: {
                payment_type: "1",
                credit_card: "99795729",
                amount: "909.44",
                status: "1"
            }
        };
    }
    CartComponent.prototype.ngOnInit = function () {
        this.fromCookieToDB();
    };
    CartComponent.prototype.fromCookieToDB = function () {
        //revisa cookie
        //si hay
        //borra cookie en db si hay
        //insert cookie en db
        //muestra en UI
        //si no hay
        // do nothing
        if (this.os.getOrderFromCookie()) {
            this.currentOrder = this.os.getOrderFromCookie();
            this.userid = this.os.getUserIDFromCookie();
            console.log(this.userid);
            if (this.currentOrder && this.userid) {
                console.log(this.currentOrder);
                this.os.deleteOrder(this.userid, "10");
                var stageOrder = {
                    contactid: this.userid,
                    items: this.currentOrder,
                    stage: "10"
                };
                this.os.saveOrderFromCookieToStage(stageOrder).then(function (x) {
                });
            }
        }
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/checkout/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/cart/cart.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === "function" && _a || Object])
], CartComponent);

var _a;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n    margin: 15px;\r\n    text-align: center;\r\n}\r\n#container{\r\n    width: 80%;\r\n    margin: 0 10%;\r\n    position: relative;\r\n    height: 100vh;\r\n    background-color: white;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Checkout!\n</h1>\n<a routerLink=\"/checkout/cart\">Cart</a>\n<a routerLink=\"/checkout/address\">Address</a>\n<a routerLink=\"/checkout/payment\">Payment</a>\n<a routerLink=\"/checkout/confirmation\">Confirmation</a>\n<div id=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
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

var CheckoutComponent = (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckoutComponent);

//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/confirmation/confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  confirmation works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
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

var ConfirmationComponent = (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-confirmation',
        template: __webpack_require__("../../../../../src/app/checkout/confirmation/confirmation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/confirmation/confirmation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfirmationComponent);

//# sourceMappingURL=confirmation.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  payment works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
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

var PaymentComponent = (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/checkout/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/payment/payment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaymentComponent);

//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/list-menu/grid-item-1/grid-item-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#border-1{\r\n    text-align: center;\r\n    \r\n}\r\n\r\n#addbutton{\r\n    width: 100%;\r\n    margin:10px auto;\r\n}\r\n#addbutton:hover{\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-menu/grid-item-1/grid-item-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"border-1\">\r\n  <span *ngIf=\"new\">NEW</span>\r\n  <img src=\"assets/mava.png\" alt=\"img\" width=\"80%\">\r\n  <div id=\"sku-label\">{{sku}}</div>\r\n  <div id=\"name-label\">{{displayname}}</div>\r\n  \r\n  <div id=\"grid-item-quantity\" class=\"flex-container\">\r\n      <span (click) = \"removeCartOne(sku)\">-</span>\r\n      <input type=\"text\" placeholder=\"0\" [(ngModel)]=\"quantity\" class=\"flex-child\">\r\n      <span (click) = \"addCartOne(sku)\">+</span>\r\n  </div>\r\n  <button id=\"addbutton\" (click) = \"addCartOne(sku)\" >Add to cart</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/list-menu/grid-item-1/grid-item-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridItem1Component = (function () {
    function GridItem1Component(os) {
        this.os = os;
    }
    GridItem1Component.prototype.ngOnInit = function () {
    };
    GridItem1Component.prototype.addCartOne = function (sku) {
        this.yh = {
            Price: this.price,
            Sku: sku,
            Quantity: this.quantity,
            ItemDesc: this.displayname
        };
        this.quantity = this.os.addOneToCart(this.yh);
    };
    GridItem1Component.prototype.removeCartOne = function (sku) {
        this.yh = {
            Price: this.price,
            Sku: sku,
            Quantity: this.quantity,
            ItemDesc: this.displayname
        };
        this.quantity = this.os.removeOneToCart(this.yh);
    };
    return GridItem1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridItem1Component.prototype, "new", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridItem1Component.prototype, "sku", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], GridItem1Component.prototype, "displayname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridItem1Component.prototype, "price", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridItem1Component.prototype, "quantity", void 0);
GridItem1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'grid-item-1',
        template: __webpack_require__("../../../../../src/app/list-menu/grid-item-1/grid-item-1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-menu/grid-item-1/grid-item-1.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === "function" && _a || Object])
], GridItem1Component);

var _a;
//# sourceMappingURL=grid-item-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/list-menu/list-item-1/list-item-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#list-item-1-container{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n\r\n    -webkit-box-orient: horizontal;\r\n\r\n    -webkit-box-direction: normal;\r\n\r\n        -ms-flex-direction: row;\r\n\r\n            flex-direction: row;\r\n    margin: 10px 0;\r\n    background-color:white;\r\n    \r\n}\r\n#list-item-title{\r\n    -webkit-box-flex:100%;\r\n        -ms-flex:100%;\r\n            flex:100%;\r\n}\r\n#list-item-image,#list-item-price,#list-item-quantity{\r\n    height: 80px;\r\n    width: 80px;\r\n}\r\n#list-item-image img{\r\n    width:40px;\r\n    height:40px;\r\n    padding:20px;\r\n}\r\n#list-item-price{\r\n    text-align: center;\r\n    line-height: 80px;\r\n}\r\n#span-new{\r\n    float:left;\r\n    margin-right: 3px;\r\n}\r\n#list-item-quantity *{\r\n    float:left;\r\n    text-align: center;\r\n    line-height: 80px;\r\n}\r\n#list-item-quantity input{\r\n    width:30px;\r\n    height:30px;\r\n    margin:22px 0;\r\n    border:2px solid black;\r\n}\r\n/*NUEVO*/\r\n.card{\r\n    font-size: 4vw;\r\n    width:96vw;\r\n    height:110px;\r\n    margin:2vh 2vw;\r\n    background-color: whitesmoke;\r\n    border-radius: 2vw;\r\n    color:#333;\r\n}\r\n\r\n.foot{\r\n    position: relative;\r\n    top: 85px;\r\n    height: 24px;\r\n    width: 100%;\r\n    border-top:1px dashed #aaa;\r\n    background-color: #ddd;\r\n    border-radius: 0 0 2vw 2vw;\r\n    color:#333;\r\n}\r\n.float-right{\r\n    float:right;\r\n    margin-right: 2vw;\r\n    line-height: 23px;\r\n}\r\n.content{\r\n    width: 72vw;\r\n    position: absolute;\r\n    margin:10px 2vw;\r\n    color:#333\r\n}\r\n.content div{\r\n    color: #555;\r\n    font-style: italic;\r\n    font-size: 3vw;\r\n    margin-top: 1vw;\r\n}\r\n.price{\r\n    position:absolute;\r\n    right:5vw;\r\n    line-height: 80px;\r\n}\r\n.card a{\r\n    text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-menu/list-item-1/list-item-1.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"list-item-1-container\">\n  <div id=\"list-item-image\" class=\"flex-child\">\n     <img src=\"assets/mava.png\" alt=\"img\">\n  </div>\n  <div id=\"list-item-title\" class=\"flex-child\">\n     <span id=\"span-new\"*ngIf=\"new\">NEW</span><div id=\"name-label\"><a href=\"/product-detail/{{sku}}\">{{displayname}}</a></div>\n     <div id=\"sku-label\">{{sku}}</div>\n  </div>\n  <div id=\"list-item-price\" class=\"flex-child\">\n     <div>${{price}}</div>\n  </div>\n  <div id=\"grid-item-quantity\" class=\"flex-container\">\n      <span (click) = \"removeCartOne(sku)\">-</span>\n      <input type=\"text\" placeholder=\"0\" [(ngModel)]=\"quantity\" class=\"flex-child\">\n      <span (click) = \"addCartOne(sku)\">+</span>\n  </div>\n</div>\n-->\n<div class=\"card\">\n    \n    <div class=\"content\">\n        <div id=\"name-label\"><a href=\"/product-detail/{{sku}}\">{{displayname}}</a></div>\n        <div>{{sku}}</div>\n    </div>\n    <div class=\"price\">\n        ${{price}}\n    </div>\n    <div class=\"foot\">\n        <span class=\"float-right\">Disponible</span>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list-menu/list-item-1/list-item-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItem1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListItem1Component = (function () {
    function ListItem1Component(os) {
        this.os = os;
    }
    ListItem1Component.prototype.ngOnInit = function () {
    };
    ListItem1Component.prototype.addCartOne = function (sku) {
        this.yh = {
            Price: this.price,
            Sku: sku,
            Quantity: this.quantity,
            ItemDesc: this.displayname
        };
        this.quantity = this.os.addOneToCart(this.yh);
    };
    ListItem1Component.prototype.removeCartOne = function (sku) {
        this.yh = {
            Price: this.price,
            Sku: sku,
            Quantity: this.quantity,
            ItemDesc: this.displayname
        };
        this.quantity = this.os.removeOneToCart(this.yh);
    };
    return ListItem1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListItem1Component.prototype, "new", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListItem1Component.prototype, "sku", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ListItem1Component.prototype, "displayname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListItem1Component.prototype, "price", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListItem1Component.prototype, "quantity", void 0);
ListItem1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'list-item-1',
        template: __webpack_require__("../../../../../src/app/list-menu/list-item-1/list-item-1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-menu/list-item-1/list-item-1.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === "function" && _a || Object])
], ListItem1Component);

var _a;
//# sourceMappingURL=list-item-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/list-menu/list-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-1{\r\n    width:200px;\r\n    \r\n    display: -webkit-inline-box;\r\n    \r\n}\r\n#grid{\r\n    -webkit-box-flex:content;\r\n        -ms-flex:content;\r\n            flex:content;\r\n    text-align: center;\r\n}\r\n#grid,#list{\r\n    width: 100%;\r\n}\r\n.list-item{\r\n    width:100%;\r\n    background-color: rgba(187, 255, 0, 0.4);\r\n}\r\nnav{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    margin:10px;\r\n}\r\n.grid_on{\r\n  margin-left: 66px;line-height: 31px;\r\n}\r\n.view_list{\r\n  margin-right: 6px;line-height: 31px;\r\n}\r\n/*CHECK BOX*/\r\n\r\n  \r\n  \r\n  *:before,\r\n  *:after {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .flag-switch {\r\n    outline: 0;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    -webkit-perspective: 1000;\r\n    -webkit-backface-visibility: hidden;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    -webkit-tap-highlight-color: transparent;\r\n    height: 30px;\r\n  }\r\n  .flag-switch:before, .flag-switch:after {\r\n    position: absolute;\r\n    color: white;\r\n    font-family: \"Raleway\", sans-serif;\r\n    top: 8px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n  }\r\n  .flag-switch:before {\r\n    left: -19px;\r\n    content: attr(data-first-lang);\r\n  }\r\n  .flag-switch:after {\r\n    right: -17px;\r\n    content: attr(data-second-lang);\r\n  }\r\n  .flag-switch input {\r\n    display: none;\r\n  }\r\n  .flag-switch input + label {\r\n    display: block;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    width: 60px;\r\n  }\r\n  .flag-switch input + label:before, .flag-switch input + label:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    border-radius: 30px;\r\n    transition: all 0.25s ease-in-out;\r\n  }\r\n  .flag-switch input + label:before {\r\n    height: 30px;\r\n    width: 60px;\r\n    background-color: #ee4b5e;\r\n  }\r\n  .flag-switch input + label:after {\r\n    top: 3px;\r\n    left: 3px;\r\n    border: 2px solid #dfdfdf;\r\n    width: 24px;\r\n    height: 24px;\r\n    transform: translate(30px, 0);\r\n    -webkit-transform: translate(30px, 0);\r\n  }\r\n  .flag-switch input:checked + label:after {\r\n    transition: all 0.25s ease-in-out;\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n  .flag-switch input:checked + label:before {\r\n    background-color: #1fa9d6;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-menu/list-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <i class=\"material-icons view_list\">view_list</i>\r\n  <span class=\"flag-switch\" >\r\n    <input type=\"checkbox\" id=\"check1\" (click) = \"switchView(viewType)\" checked>\r\n      <label for=\"check1\"></label>\r\n  </span>\r\n  <i class=\"material-icons grid_on\">grid_on</i>\r\n</nav>\r\n<div id=\"grid\" *ngIf=\"viewType == 0\">\r\n  <grid-item-1  \r\n    *ngFor=\"let item of PartIDs\"\r\n    [sku]=\"item.sku\" \r\n    [displayname]=\"item.displayname\" \r\n    [price]=\"item.price\" \r\n    [new]=\"1\"\r\n    [quantity]=\"item.quantity\"\r\n    class=\"grid-1\">\r\n  </grid-item-1>\r\n  \r\n</div>\r\n<div *ngIf=\"viewType == 1\" id=\"list\">\r\n  <list-item-1 \r\n    *ngFor=\"let item of PartIDs\"\r\n    [sku]=\"item.sku\" \r\n    [displayname]=\"item.displayname\" \r\n    [price]=\"item.price\" \r\n    [new]=\"1\"\r\n    [quantity]=\"item.quantity\"\r\n    class=\"list-item\"> \r\n</list-item-1>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/list-menu/list-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menus_service__ = __webpack_require__("../../../../../src/app/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListMenuComponent = (function () {
    function ListMenuComponent(menusService, cs) {
        this.menusService = menusService;
        this.cs = cs;
        this.PartIDs = [];
        this.viewType = 1;
    }
    ListMenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes.id.currentValue !== undefined) {
            this.getSubMenu(changes.id.currentValue);
        }
    };
    ListMenuComponent.prototype.switchView = function (x) {
        return x == '1' ? this.viewType = '0' : this.viewType = '1';
    };
    ListMenuComponent.prototype.getSubMenu = function (id) {
        var _this = this;
        this.PartIDs = [];
        this.menusService.getMenus().then(function (data) {
            var parse = new DOMParser();
            _this.xml = parse.parseFromString(data, "text/xml");
            var menulists = _this.xml.getElementsByTagName("menulist");
            for (var i = 0; i < menulists.length; i++) {
                if (menulists[i].attributes['id'].value.toString() == id) {
                    for (var j = 0; j < menulists[i].children.length; j++) {
                        var sku = menulists[i].children[j].innerHTML;
                        var products = _this.xml.getElementsByTagName("Product");
                        for (var k = 0; k < products.length; k++) {
                            var product = products[k];
                            if (product.attributes['sku'].value.toString() === sku) {
                                var item;
                                item = {
                                    img: "45",
                                    displayname: product.attributes['name'].value.toString(),
                                    sku: product.attributes['sku'].value.toString(),
                                    price: product.attributes['unitRetailPrice'].value.toString(),
                                    quantity: 0
                                };
                                if (_this.cs.getObject("order")) {
                                    _this.localOrder = _this.cs.getObject("order");
                                    for (var _i = 0, _a = _this.localOrder; _i < _a.length; _i++) {
                                        var dd = _a[_i];
                                        if (dd.Sku === product.attributes['sku'].value.toString()) {
                                            item = {
                                                img: "45",
                                                displayname: product.attributes['name'].value.toString(),
                                                sku: product.attributes['sku'].value.toString(),
                                                price: product.attributes['unitRetailPrice'].value.toString(),
                                                quantity: dd.Quantity
                                            };
                                        }
                                    }
                                }
                                _this.PartIDs.push(item);
                            }
                        }
                    }
                }
            }
        });
    };
    return ListMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListMenuComponent.prototype, "id", void 0);
ListMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'list-menu',
        template: __webpack_require__("../../../../../src/app/list-menu/list-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-menu/list-menu.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object])
], ListMenuComponent);

var _a, _b;
//# sourceMappingURL=list-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/list-menu/main-menu/main-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-menu-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    width:100vw;\r\n}\r\n#main-menu-nav{\r\n    width: 100vw;\r\n    position: fixed;\r\n    left: -100vw;\r\n    background-color: whitesmoke;\r\n    height: 85vh;\r\n    height: calc(100vh - 100px);\r\n    z-index: 80;\r\n}\r\n#main-menu-nav li{\r\n    list-style: none;\r\n}\r\n\r\nul{\r\n    padding:0;\r\n}\r\n@-webkit-keyframes showNav{\r\n    0%{left:-100vw}\r\n    100%{left:0vw}\r\n}\r\n@keyframes showNav{\r\n    0%{left:-100vw}\r\n    100%{left:0vw}\r\n}\r\n.show-nav{\r\n    -webkit-animation-name: showNav;\r\n            animation-name: showNav;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1);\r\n            animation-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n@-webkit-keyframes hideNav{\r\n    0%{left:0}\r\n    100%{left:-100vw}\r\n}\r\n@keyframes hideNav{\r\n    0%{left:0}\r\n    100%{left:-100vw}\r\n}\r\n.hide-nav{\r\n    -webkit-animation-name: hideNav;\r\n            animation-name: hideNav;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1);\r\n            animation-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n#container button{\r\n    width: 50vw;\r\n    height: 40px;\r\n    text-decoration: none;\r\n    border: 0;\r\n    background-color: tomato;\r\n    border-radius: 2vw;\r\n    font-size: 4vw;\r\n    margin: 1vh 7px;\r\n    position: absolute;\r\n    right: 0;\r\n    color:whitesmoke;\r\n}\r\n#menuBar li{\r\n    list-style: none;\r\n    margin:15px auto;\r\n    height:50px;\r\n    line-height: 50px;\r\n    text-indent: 5vw;\r\n    border-top:1px dotted #777;\r\n    border-bottom:1px dotted #777;\r\n}\r\n#menuBar li i{\r\n    right:2vw;\r\n    position: absolute;\r\n    margin:12px;\r\n}\r\n.back i{\r\n    margin:12px;\r\n}\r\n.close{\r\n    border-bottom: 1px solid black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-menu/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<span id=\"container\">\r\n  <button (click)=\"showNav()\">Explore</button>\r\n</span>\r\n<div id=\"main-menu-container\">\r\n  <div id=\"main-menu-nav\">\r\n    <div class=\"back close\">\r\n          <a (click)=\"closeNav()\"><i class=\"material-icons\">close</i></a>\r\n    </div>\r\n    <div class=\"back\" *ngIf=\"idItem != 'root'\">\r\n      <a (click)=\"openMenu(previousParent,idItem)\"><i class=\"material-icons\">arrow_back</i></a>\r\n    </div>\r\n    <ul id=\"menuBar\">\r\n      <li *ngFor=\"let item of menuItems\">\r\n        <a (click)=\"openMenu(item.href,item.parent)\">{{item.displayname}}</a>\r\n        <i class=\"material-icons\" (click)=\"closeNav()\">arrow_forward</i>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div id=\"main-menu-content\">\r\n    <div id=\"top-banner\">\r\n      \r\n    </div>\r\n    <list-menu [id]=\"idItem\"></list-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/list-menu/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menus_service__ = __webpack_require__("../../../../../src/app/menus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainMenuComponent = (function () {
    function MainMenuComponent(menuService) {
        this.menuService = menuService;
        this.menuItems = [];
        this.initMenuItems = [];
        this.idItem = "root";
        this.previousParent = "";
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    MainMenuComponent.prototype.showNav = function () {
        var d = document.getElementById("main-menu-nav");
        d.style.zIndex = "99";
        d.className = "show-nav";
    };
    MainMenuComponent.prototype.closeNav = function () {
        var d = document.getElementById("main-menu-nav");
        d.className = "hide-nav";
    };
    MainMenuComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuService.getMenus().then(function (xml) {
            var parser = new DOMParser();
            _this.menus = parser.parseFromString(xml, "text/xml");
            var mcs = _this.menus.getElementsByTagName("menuItem");
            for (var i = 0; i < mcs.length; i++) {
                if (mcs[i].attributes['parent'].value.toString() == "root") {
                    _this.initMenuItems.push({
                        parent: mcs[i].attributes["parent"].value,
                        id: mcs[i].attributes["id"].value,
                        collapsed: "1",
                        href: mcs[i].attributes["id"].value,
                        displayname: mcs[i].attributes["displayName"].value.toString()
                    });
                }
            }
        });
        this.menuItems = this.initMenuItems;
    };
    MainMenuComponent.prototype.openMenu = function (id, pp) {
        this.initMenuItems.splice(0, this.initMenuItems.length);
        //abrir menu con papa id
        this.idItem = id;
        var parser = new DOMParser();
        var mcs = this.menus.getElementsByTagName("menuItem");
        for (var i = 0; i < mcs.length; i++) {
            if (mcs[i].attributes['parent'].value.toString() == id) {
                this.initMenuItems.push({
                    parent: mcs[i].attributes["parent"].value,
                    id: mcs[i].attributes["id"].value,
                    collapsed: "1",
                    href: mcs[i].attributes["id"].value,
                    displayname: mcs[i].attributes["displayName"].value.toString()
                });
            }
            if (mcs[i].attributes['id'].value.toString() == id) {
                this.previousParent = mcs[i].attributes['parent'].value.toString();
            }
        }
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-menu',
        template: __webpack_require__("../../../../../src/app/list-menu/main-menu/main-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-menu/main-menu/main-menu.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */]) === "function" && _a || Object])
], MainMenuComponent);

var _a;
//this is a new change - this is a new change 
//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/menus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenusService = (function () {
    function MenusService(http) {
        this.http = http;
    }
    MenusService.prototype.getMenuAll = function () {
        return this.http.get("http://localhost:3000/api/menus")
            .toPromise()
            .then(function (r) { return JSON.parse(r["_body"])[0]; })
            .catch(this.ErrorHandler);
    };
    MenusService.prototype.getMenus = function () {
        return this.http.request("assets/CATALOGXML.xml").toPromise().then(function (r) { return r["_body"]; });
    };
    MenusService.prototype.ErrorHandler = function (error) {
        console.log("Error has occurred", error);
        return Promise.reject(error.message);
    };
    return MenusService;
}());
MenusService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MenusService);

var _a;
//# sourceMappingURL=menus.service.js.map

/***/ }),

/***/ "../../../../../src/app/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderService = (function () {
    function OrderService(cs, http) {
        this.cs = cs;
        this.http = http;
        this.localOrder = [];
    }
    OrderService.prototype.addOneToCart = function (item) {
        item.Quantity = 1;
        var nv = 1;
        console.log("this will be inserted", item);
        if (this.cs.getObject("order") == undefined) {
            this.localOrder.push(item);
            this.cs.putObject("order", this.localOrder);
        }
        else {
            var encontrado = false;
            this.localOrder = this.cs.getObject("order");
            console.log(this.localOrder);
            for (var _i = 0, _a = this.localOrder; _i < _a.length; _i++) {
                var val = _a[_i];
                if (val.Sku == item.Sku) {
                    encontrado = true;
                    //cambia valor de val.Quantity +1
                    val.Quantity = val.Quantity + 1;
                    nv = val.Quantity;
                }
            }
            if (encontrado == false) {
                this.localOrder.push(item);
            }
            this.cs.remove("order");
            this.cs.putObject("order", this.localOrder);
        }
        console.log(item);
        return nv;
    };
    OrderService.prototype.removeOneToCart = function (item) {
        var mg = 0;
        console.log("this will be inserted", item);
        if (this.cs.getObject("order") == undefined) {
            this.localOrder.push(item);
            this.cs.putObject("order", this.localOrder);
        }
        else {
            var encontrado = false;
            this.localOrder = this.cs.getObject("order");
            for (var _i = 0, _a = this.localOrder; _i < _a.length; _i++) {
                var val = _a[_i];
                if (val.Sku == item.Sku) {
                    encontrado = true;
                    //cambia valor de val.Quantity +1
                    if (val.Quantity > 0) {
                        val.Quantity = val.Quantity - 1;
                        mg = val.Quantity;
                    }
                }
            }
            this.cs.remove("order");
            this.cs.putObject("order", this.localOrder);
        }
        return mg;
    };
    OrderService.prototype.getOrderFromCookie = function () {
        return this.cs.getObject("order");
    };
    OrderService.prototype.getUserIDFromCookie = function () {
        if (this.cs.getObject("user")) {
            this.user = this.cs.getObject("user");
            return this.user["_id"];
        }
        else {
            return null;
        }
    };
    OrderService.prototype.getOrderFromStage = function (userid, stage) {
        return this.http.get("http://localhost:3000/api/orders/" + userid + "/" + stage)
            .toPromise()
            .then(function (r) { return JSON.parse(r["_body"])[0]; })
            .catch(this.ErrorHandler);
    };
    OrderService.prototype.deleteOrder = function (userid, stage) {
        return this.http.delete("http://localhost:3000/api/orders/" + userid + "/" + stage)
            .toPromise()
            .then(function (r) { return JSON.parse(r["_body"])[0]; })
            .catch(this.ErrorHandler);
    };
    OrderService.prototype.saveOrderFromCookieToStage = function (cookieOrder) {
        return this.http.post("http://localhost:3000/api/orders/", cookieOrder, {
            params: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpParams */]().set("Content-Type", "application/x-www-form-urlencoded")
        })
            .toPromise()
            .then(function (r) { return JSON.parse(r["_body"]); })
            .catch(this.ErrorHandler);
    };
    OrderService.prototype.ErrorHandler = function (error) {
        console.log("Error has occurred", error);
        return Promise.reject(error.message);
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], OrderService);

var _a, _b;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{\r\n    background-color: whitesmoke;\r\n    width: 100vw;\r\n    height: 60vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\nfooter{\r\n    background-color:tomato;\r\n    width: 100vw;\r\n    height: 30vh;\r\n}\r\n#slider{\r\n    background-position-x: center;\r\n    background-size: auto 100%;\r\n    width: 100vw;\r\n    -webkit-box-flex:100%;\r\n        -ms-flex:100%;\r\n            flex:100%;\r\n}\r\n#actions{\r\n    height:100px;\r\n    width: 100vw;\r\n    text-align: center\r\n}\r\n.float-left{\r\n    line-height: 10vh;\r\n    color:#888;\r\n    position:absolute;\r\n    left:2vw;\r\n}\r\n.float-right{\r\n    color:#888;\r\n    position: absolute;\r\n    right:2vw;\r\n    line-height: 10vh;\r\n}\r\n.price{\r\n    font-size: 7vw;\r\n    margin-top: 63px;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: 2vh;\r\n}\r\n#buy-button{\r\n    width: 100vw;\r\n    height:50px;\r\n    margin:4vh 0;\r\n}\r\nbutton{\r\n    width:70vw;\r\n    margin:5px 15vw;\r\n    height:30px;\r\n    background-color: #666;\r\n    color:white;\r\n    bordeR:none;\r\n    font-weight: 500;\r\n    font-size: 5vw;\r\n}\r\n#h-1{\r\n    margin:3vh 10vw;\r\n    width:80vw;\r\n    font-size: 6vw;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n.material-icons.md-18 { font-size: 4vw; }\r\n.material-icons.md-10 { font-size: 10vw; }\r\n#slider .left{\r\n    position: absolute;\r\n    left:5vw;\r\n    color:tomato;\r\n}\r\n#slider .right{\r\n    position: absolute;\r\n    right:5vw;\r\n    color:forestgreen;\r\n}\r\nfooter div{\r\n    text-align: center;\r\n    color:white;\r\n    padding: 4vh;\r\n}\r\n#count-likes{\r\n    font-weight: bold;\r\n}\r\nfooter a{\r\n    position: absolute;\r\n    width: 94vw;\r\n    bottom: 0;\r\n    margin-left: 2vw;\r\n    text-align: center;\r\n    padding: 2vh 1vw;\r\n    text-decoration: none;\r\n    color: white;\r\n    border-top: 1px solid rgba(255,255,255,.5);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"SKU\">\r\n  <div *ngIf=\"SKU.images\">\r\n    <img src=\"{{SKU.images.colorchip}}\" alt=\"{{SKU.sku}}\">\r\n    <img src=\"{{SKU.images.colorchip}}\" alt=\"{{SKU.sku}}\">\r\n    <span *ngIf=\"SKU.new == 1\">NEW</span><img src=\"{{SKU.images.hero}}\" alt=\"{{SKU.sku}}\">\r\n  </div>\r\n  <div>\r\n    <h1>{{SKU.name}}</h1>\r\n    <h5>{{SKU.sku}}</h5>\r\n    <h3>{{SKU.price}}</h3>\r\n    <div class=\"qty\">\r\n      <span>-</span>\r\n      <input type=\"text\" placeholder=\"0\">\r\n      <span>+</span>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <h3>Product description</h3>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci ratione corrupti repellendus repudiandae asperiores soluta odit a minima ipsa minus illo earum, quisquam similique consectetur provident consequatur iure laborum.</p>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci ratione corrupti repellendus repudiandae asperiores soluta odit a minima ipsa minus illo earum, quisquam similique consectetur provident consequatur iure laborum.</p>\r\n  </div>\r\n  <br>\r\n</div>\r\n-->\r\n<div id=\"content\">\r\n    <header>\r\n        <div id=\"h-1\">\r\n            {{SKU.name}}\r\n        </div>\r\n        <div id=\"slider\">\r\n            <span class=\"left\"><i class=\"material-icons md-10\">favorite</i></span>\r\n            <span class=\"right\"><i class=\"material-icons md-10\">check_circle</i></span>\r\n        </div>\r\n        <div id=\"actions\">\r\n            <span class=\"float-left\"><i class=\"material-icons md-18\">favorite</i> 99 Likes</span>\r\n            <span class=\"price\">${{SKU.price}}</span>\r\n            <span class=\"float-right\"><i class=\"material-icons md-18\">chat_bubble</i> 99 Comments</span>\r\n        </div>\r\n        <div id=\"buy-button\">\r\n            <button>Buy now</button>\r\n        </div>\r\n    </header>\r\n    <footer>\r\n        <div>\r\n            <span id=\"count-likes\">674</span>\r\n            <span id=\"tag\">PEOPLE LIKES THIS</span>\r\n        </div>\r\n        <a href=\"#\">@feervalero</a>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogs_service__ = __webpack_require__("../../../../../src/app/catalogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menus_service__ = __webpack_require__("../../../../../src/app/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, catalogService, menuService) {
        this.route = route;
        this.catalogService = catalogService;
        this.menuService = menuService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getProduct();
    };
    ProductDetailComponent.prototype.getProductInformation = function (i) {
        var _this = this;
        this.menuService.getMenus().then(function (xml) {
            var parse = new DOMParser();
            _this.xml = parse.parseFromString(xml, "text/xml");
            var items = _this.xml.getElementsByTagName("Product");
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (item.attributes['sku'].value && (item.attributes["sku"].value == i)) {
                    var ii = {
                        sku: item.attributes["sku"].value,
                        name: item.attributes["name"].value,
                        price: item.attributes["unitRetailPrice"].value
                    };
                    _this.SKU = ii;
                }
            }
        });
        return i;
    };
    ProductDetailComponent.prototype.getProduct = function () {
        var _this = this;
        this.route.paramMap.switchMap(function (params) { return _this.getProductInformation(params.get("sku")); }).subscribe(function (x) {
            _this.SKU = x[0];
        });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__catalogs_service__["a" /* CatalogsService */], __WEBPACK_IMPORTED_MODULE_3__menus_service__["a" /* MenusService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__catalogs_service__["a" /* CatalogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__catalogs_service__["a" /* CatalogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__menus_service__["a" /* MenusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__menus_service__["a" /* MenusService */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Origin': 'http://localhost:4200/' });
    }
    UserService.prototype.getOrdersByProfile = function (id) {
        return this.http.get("http://localhost:3000/api/orders/" + id)
            .toPromise()
            .then(function (result) { return JSON.parse(result["_body"]); })
            .catch(this.ErrorHandler);
    };
    UserService.prototype.searchByEmail = function (email) {
        return this.http.get("http://localhost:3000/api/contacts/email/" + email)
            .toPromise()
            .then(function (result) { return JSON.parse(result["_body"]); })
            .catch(this.ErrorHandler);
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post("http://localhost:3000/api/contacts/", user, {
            params: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpParams */]().set("Content-Type", "application/x-www-form-urlencoded")
        })
            .toPromise()
            .then(function (result) { return JSON.parse(result["_body"]); })
            .catch(this.ErrorHandler);
    };
    UserService.prototype.getFavoritesByProfile = function (id) {
        return this.http.get("http://localhost:3000/api/contacts/email/" + id)
            .toPromise()
            .then(function (result) { return JSON.parse(result["_body"]); })
            .catch(this.ErrorHandler);
    };
    UserService.prototype.getUsersAPI = function () {
        return this.http.get("http://localhost:3000/api/contacts")
            .toPromise()
            .then(function (response) { return JSON.parse(response["_body"]); })
            .catch(this.ErrorHandler);
    };
    UserService.prototype.getPaymentsById = function (id) {
        return this.http.get("http://localhost:3000/api/payments/" + id)
            .toPromise()
            .then(function (r) { return JSON.parse(r["_body"]); })
            .catch(this.ErrorHandler);
    };
    UserService.prototype.getAddressesById = function (id) {
        return this.http.get("http://localhost:3000/api/addresses/" + id)
            .toPromise()
            .then(function (r) { return JSON.parse(r["_body"]); })
            .catch(this.ErrorHandler);
    };
    UserService.prototype.ErrorHandler = function (error) {
        console.log("Error has ocurred", error);
        return Promise.reject(error.message);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map