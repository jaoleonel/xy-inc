webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <ng-content select=\".app-modal-header\"></ng-content>\n        </div>\n        <div class=\"modal-body\">\n          <ng-content select=\".app-modal-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\".app-modal-footer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    .modal {\n      background: rgba(0,0,0,0.6);\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/modal-pdf.component.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_host_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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
    function UserService(http, hostService) {
        var _this = this;
        this.http = http;
        this.hostService = hostService;
        this.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        });
    }
    UserService.prototype.resetSenha = function (user) {
        var url = this.hostService.host + "rest/super/user/resetSenha";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(user), { headers: headers });
    };
    UserService.prototype.updateSenha = function (novaSenhaCampos) {
        var url = this.hostService.host + "rest/simple/user/updateSenha";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(novaSenhaCampos), { headers: headers });
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.hostService.host + "rest/admin/user/update";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(user), { headers: headers });
    };
    UserService.prototype.checkLogin = function () {
        var tokenUrl = this.hostService.host + "rest/user/checkLogin";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, '', { headers: headers });
    };
    UserService.prototype.checkAdmin = function (username) {
        var tokenUrl = this.hostService.host + "rest/user/checkAdmin";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, username, { headers: headers });
    };
    UserService.prototype.getUserByName = function (username) {
        var tokenUrl = this.hostService.host + "rest/simple/user/userName";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, username, { headers: headers });
    };
    UserService.prototype.getUsersByUserName = function (username) {
        var tokenUrl = this.hostService.host + "rest/super/users/userName";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, username, { headers: headers });
    };
    UserService.prototype.getUsersByUserNameAndEmpresaName = function (usernameandempresaname) {
        var tokenUrl = this.hostService.host + "rest/admin/users/userNameAndEmpresaName";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, usernameandempresaname, { headers: headers });
    };
    UserService.prototype.getAllUsers = function () {
        var tokenUrl = this.hostService.host + "rest/super/user/users";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, '', { headers: headers });
    };
    UserService.prototype.getUsersByEmpresa = function (empresa) {
        var tokenUrl = this.hostService.host + "rest/admin/user/usersByEmpresa";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, JSON.stringify(empresa), { headers: headers });
    };
    UserService.prototype.getAllEmpresas = function () {
        var tokenUrl = this.hostService.host + "rest/super/user/empresa/empresas";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, '', { headers: headers });
    };
    UserService.prototype.getEmpresaByEmpresaName = function (empresaName) {
        var url = this.hostService.host + "rest/simple/users/empresa/empresaFantasyName";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(empresaName), { headers: headers });
    };
    UserService.prototype.sendEmpresa = function (empresa) {
        var url = this.hostService.host + "rest/super/user/empresa/save";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(empresa), { headers: headers });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/user.service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardAdmin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        this.isAdmin = this.loginService.checkAdmin();
        if (this.loginService.checkLogin() && this.loginService.checkAdmin()) {
            // logged in so return true
            return true;
        }
        return false;
    };
    AuthGuardAdmin = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === 'function' && _b) || Object])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
    var _a, _b;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/auth.guard.admin.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardSuperAdmin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardSuperAdmin = (function () {
    function AuthGuardSuperAdmin(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuardSuperAdmin.prototype.canActivate = function () {
        if (this.loginService.checkLogin() && this.loginService.checkSuperAdmin()) {
            // logged in so return true
            return true;
        }
        return false;
    };
    AuthGuardSuperAdmin = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === 'function' && _b) || Object])
    ], AuthGuardSuperAdmin);
    return AuthGuardSuperAdmin;
    var _a, _b;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/auth.guard.superadmin.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pdf__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(232);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfUserFilter; });


var PdfUserFilter = (function () {
    function PdfUserFilter() {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.pdf = new __WEBPACK_IMPORTED_MODULE_0__pdf__["a" /* Pdf */]();
    }
    return PdfUserFilter;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/pdf-user-filter.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pdf; });
var Pdf = (function () {
    function Pdf() {
    }
    return Pdf;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/pdf.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.isAdmin = false;
        this.isSuperAdmin = false;
    }
    return User;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/user.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_host_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPdfService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPdfService = (function () {
    function AddPdfService(http, hostService) {
        this.http = http;
        this.hostService = hostService;
    }
    AddPdfService.prototype.sendPdf = function (pdf) {
        var url = this.hostService.host + "rest/simple/pdf/add";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        console.log(url);
        return this.http.post(url, JSON.stringify(pdf), { headers: headers1 });
    };
    AddPdfService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */]) === 'function' && _b) || Object])
    ], AddPdfService);
    return AddPdfService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/add-pdf.service.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoService = (function () {
    function PhotoService(http) {
        this.http = http;
    }
    PhotoService.prototype.getPhotos = function () {
        var url = "http://localhost:8080/photo/allPhotos";
        return this.http.get(url);
    };
    PhotoService.prototype.getPhotoById = function (photoId) {
        var tokenUrl1 = "http://localhost:8080/rest/photo/photoId";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(photoId), { headers: headers1 });
    };
    PhotoService.prototype.getPhotosByUser = function (user) {
        var tokenUrl1 = "http://localhost:8080/rest/photo/user";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(user), { headers: headers1 });
    };
    PhotoService.prototype.updatePhoto = function (photo) {
        var tokenUrl1 = "http://localhost:8080/rest/photo/update";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(photo), { headers: headers1 });
    };
    PhotoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], PhotoService);
    return PhotoService;
    var _a;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/photo.service.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_host_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http, hostService) {
        this.http = http;
        this.hostService = hostService;
    }
    RegisterService.prototype.sendUser = function (user) {
        var url = this.hostService.host + "super/register";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(user), { headers: headers1 });
    };
    RegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */]) === 'function' && _b) || Object])
    ], RegisterService);
    return RegisterService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/register.service.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_host_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPdfService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadPdfService = (function () {
    function UploadPdfService(hostService) {
        this.hostService = hostService;
        this.fileIsInside = false;
        this.fileIsUploaded = false;
        this.filesToUpload = [];
        /*this.fileIsInside = true;*/
    }
    UploadPdfService.prototype.fileNameCheck = function (filename) {
        if (/\.(pdf)$/i.test(filename)) {
            return true;
        }
        else {
            return false;
        }
    };
    UploadPdfService.prototype.upload = function () {
        this.makeFileRequest(this.hostService.host + "rest/simple/pdf/upload", [], this.filesToUpload).then(function (result) {
            console.log(result);
        }, function (error) {
            console.error(error);
        });
    };
    UploadPdfService.prototype.fileChangeEvent = function (fileInput) {
        if (this.fileNameCheck(fileInput.target.files[0].name)) {
            this.filesToUpload = fileInput.target.files;
            this.fileIsInside = true;
            this.pdfName = fileInput.target.files[0].name;
            this.fileIsUploaded = true;
        }
        else {
            this.fileIsInside = false;
            alert("O arquivo deve estar no formato PDF.");
        }
    };
    UploadPdfService.prototype.fileChangeEventModal = function (fileInput) {
        if (this.fileNameCheck(fileInput.target.files[0].name)) {
            this.filesToUpload = fileInput.target.files;
            this.fileIsInside = true;
            this.pdfName = fileInput.target.files[0].name;
            this.fileIsUploaded = true;
            return fileInput.target.files[0].name;
        }
        else {
            this.fileIsInside = false;
            alert("O arquivo deve estar no formato PDF.");
        }
    };
    UploadPdfService.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name + "/" + localStorage.getItem("currentUserName"));
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
            xhr.send(formData);
            _this.fileIsInside = false;
        });
    };
    UploadPdfService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_host_service__["a" /* HostService */]) === 'function' && _a) || Object])
    ], UploadPdfService);
    return UploadPdfService;
    var _a;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/upload-pdf.service.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Empresa__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmpresa; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEmpresa = (function () {
    function AddEmpresa(userService) {
        this.userService = userService;
        this.newEmpresa = new __WEBPACK_IMPORTED_MODULE_1__models_Empresa__["a" /* Empresa */]();
        this.registered = false;
    }
    AddEmpresa.prototype.onSubmit = function () {
        var _this = this;
        this.userService.sendEmpresa(this.newEmpresa)
            .subscribe(function (data) {
            _this.newEmpresa = new __WEBPACK_IMPORTED_MODULE_1__models_Empresa__["a" /* Empresa */]();
            var empresaReturn;
            try {
                empresaReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                _this.registered = true;
            }
            catch (err) {
                alert("Nome Fantasia já utilizado. Tente outro.");
            }
        }, function (error) { return console.log(error); });
    };
    AddEmpresa = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-empresa',
            template: __webpack_require__(739)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], AddEmpresa);
    return AddEmpresa;
    var _a;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/add-empresa.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pdf__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_pdf_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_add_pdf_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPdf; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPdf = (function () {
    function AddPdf(uploadPdfService, addPdfService, userService) {
        this.uploadPdfService = uploadPdfService;
        this.addPdfService = addPdfService;
        this.userService = userService;
        this.newPdf = new __WEBPACK_IMPORTED_MODULE_1__models_pdf__["a" /* Pdf */]();
        this.pdfAdded = false;
        this.subtipoRender = false;
    }
    /*
      onSubmit() {
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
          user => {
            this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            console.log(this.user);
            this.newPdf.user = this.user;
            this.addPdfService.sendPdf(this.newPdf)
            .subscribe(
              data => {
                this.uploadPdfService.upload();
                this.pdfAdded = true;
                this.newPdf = new Pdf();
              },
              error => console.log(error)
            );
          },
          error => console.log(error)
        )
      }*/
    AddPdf.prototype.onSubmit = function () {
        var _this = this;
        this.newPdf.pdfName = this.uploadPdfService.pdfName;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            console.log(_this.user);
            _this.newPdf.user = _this.user;
            _this.addPdfService.sendPdf(_this.newPdf)
                .subscribe(function (data) {
                var pdfReturn;
                try {
                    pdfReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                    _this.uploadPdfService.upload();
                    _this.pdfAdded = true;
                    _this.newPdf = new __WEBPACK_IMPORTED_MODULE_1__models_pdf__["a" /* Pdf */]();
                }
                catch (err) {
                    alert("Já existe uma inpeção com esse título. Tente outro.");
                }
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    AddPdf.prototype.ngOnInit = function () {
        this.uploadPdfService.fileIsInside = false;
        this.uploadPdfService.fileIsUploaded = false;
    };
    AddPdf.prototype.onChangeDrop = function (teste) {
        if (this.newPdf.tipo == 1) {
            this.subtipoRender = true;
        }
        else {
            this.newPdf.subTipo = null;
            this.subtipoRender = false;
        }
    };
    AddPdf = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-pdf',
            template: __webpack_require__(740)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_upload_pdf_service__["a" /* UploadPdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_upload_pdf_service__["a" /* UploadPdfService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_add_pdf_service__["a" /* AddPdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_add_pdf_service__["a" /* AddPdfService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], AddPdf);
    return AddPdf;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/add-pdf.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login = (function () {
    function Login(loginService, userService) {
        this.loginService = loginService;
        this.userService = userService;
        this.model = { 'username': '', 'password': '', 'isAdmin': '' };
        this.currentUserName = localStorage.getItem("currentUserName");
        this.currentIsAdmin = localStorage.getItem("currentIsAdmin");
    }
    Login.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.sendCredential(this.model).subscribe(function (data) {
            localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
            _this.loginService.sendToken(localStorage.getItem("token")).subscribe(function (data) {
                _this.currentUserName = _this.model.username;
                _this.currentIsAdmin = _this.model.isAdmin;
                localStorage.setItem("currentUserName", _this.model.username);
                _this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
                    _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                    _this.loginService.userLogado = _this.user;
                    var tostring = "";
                    if (_this.user.isAdmin) {
                        tostring = "true";
                    }
                    localStorage.setItem("currentIsAdmin", tostring);
                    localStorage.setItem("currentEmpresa", _this.user.empresa.empresaFantasyName.toString());
                }, function (error) { return console.log(error); });
                _this.model.username = '';
                _this.model.password = '';
                _this.model.isAdmin = '';
            }, function (error) {
                console.log(error);
                alert("Login ou senha inválidos");
            });
        }, function (error) {
            console.log(error);
            alert("Login ou senha inválidos");
        });
    };
    Login = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(743)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], Login);
    return Login;
    var _a, _b;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/login.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalLgComponent = (function () {
    function ModalLgComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalLgComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalLgComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalLgComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ModalLgComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-lg',
            template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <ng-content select=\".app-modal-header\"></ng-content>\n        </div>\n        <div class=\"modal-body\">\n          <ng-content select=\".app-modal-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\".app-modal-footer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    .modal {\n      background: rgba(0,0,0,0.6);\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalLgComponent);
    return ModalLgComponent;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/modal-pdf-lg.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_filters_pdf_user_filter__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_metadata_di__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_host_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard_superadmin__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard_admin__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_modal_pdf_component__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfAdmin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PdfAdmin = (function () {
    function PdfAdmin(domSanitizer, pdfService, router, userService, rd, loginService, hostService, authGuardSuperAdmin, authGuardAdmin) {
        this.domSanitizer = domSanitizer;
        this.pdfService = pdfService;
        this.router = router;
        this.userService = userService;
        this.rd = rd;
        this.loginService = loginService;
        this.hostService = hostService;
        this.authGuardSuperAdmin = authGuardSuperAdmin;
        this.authGuardAdmin = authGuardAdmin;
        this.pdfSrcBase = this.hostService.host + '/pdf/download';
        this.page = 1;
        this.zoom = 0.5;
        this.pdfUserFilter = new __WEBPACK_IMPORTED_MODULE_5__models_filters_pdf_user_filter__["a" /* PdfUserFilter */]();
        this.subtipoRender = false;
        this.refreshAll = false;
        this.aindaNaoBuscado = true;
    }
    PdfAdmin.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authGuardSuperAdmin.canActivate()) {
            this.userService.getAllUsers().subscribe(function (users) {
                _this.users = JSON.parse(JSON.parse(JSON.stringify(users))._body);
            }, function (error) { return console.log(error); });
        }
        else {
            this.userService.getUsersByEmpresa(this.loginService.userLogado.empresa.empresaFantasyName).subscribe(function (users) {
                _this.users = JSON.parse(JSON.parse(JSON.stringify(users))._body);
            }, function (error) { return console.log(error); });
        }
    };
    PdfAdmin.prototype.findPdfs = function (userSelected) {
        var _this = this;
        this.userService.getUserByName(userSelected).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            _this.pdfUserFilter.user = _this.user;
            _this.pdfService.getPdfsByFilter(_this.pdfUserFilter).subscribe(function (pdf) {
                _this.pdfs = JSON.parse(JSON.parse(JSON.stringify(pdf))._body);
                _this.refreshAll = false;
                _this.aindaNaoBuscado = false;
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    PdfAdmin.prototype.filtersSetted = function () {
        if (this.pdfUserFilter.ano && this.pdfUserFilter.tipo
            && this.pdfUserFilter.user.userName) {
            if (this.pdfUserFilter.tipo == "1") {
                if (this.pdfUserFilter.subTipo) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        else {
            if (!this.pdfUserFilter.ano && !this.pdfUserFilter.tipo
                && this.pdfUserFilter.user.userName) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    PdfAdmin.prototype.sanitize = function (fileName) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrcBase + "/" + fileName + "/" + localStorage.getItem("token") + "/" + localStorage.getItem("currentUserName"));
    };
    PdfAdmin.prototype.sanitizeTeste = function (fileName) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(fileName);
    };
    PdfAdmin.prototype.sanitizeTeste2 = function (fileName) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrcBase + "/" + localStorage.getItem("currentUserName"));
    };
    PdfAdmin.prototype.getPdf = function (pdf) {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            console.log(_this.user);
            _this.pdfService.downloadPdfPost(pdf).subscribe(function (res) {
                /*let blob: Blob = new Blob([res.arrayBuffer()], {type: 'application/pdf'});*/
                var pdfResponse = new Blob([res.blob()], { type: 'application/pdf' });
                console.log(pdfResponse.size + " bytes file downloaded. File type: ", pdfResponse.type);
                var fileURL = URL.createObjectURL(pdfResponse);
                console.log("Url: " + fileURL);
                document.getElementById("pdfModal").setAttribute("src", fileURL);
                _this.modal.show();
                /* window.open(fileURL);*/
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    PdfAdmin.prototype.deletePdf = function (pdf) {
        this.pdfService.deletePdf(pdf).subscribe();
        this.naodelref.nativeElement.click();
        this.refresh();
    };
    PdfAdmin.prototype.existePdf = function () {
        if (this.pdfs == null || this.pdfs.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    PdfAdmin.prototype.existePdfAndAindaNaoBuscado = function () {
        if (this.existePdf() && this.aindaNaoBuscado)
            return true;
        else
            return false;
    };
    PdfAdmin.prototype.existePdfAndNotAindaNaoBuscado = function () {
        if (this.existePdf() && !this.aindaNaoBuscado)
            return true;
        else
            return false;
    };
    PdfAdmin.prototype.refresh = function () {
        var _this = this;
        if (this.authGuardSuperAdmin.canActivate()) {
            this.pdfService.getAllPdfs().subscribe(function (data) { return _this.pdfs = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
        }
        else if (this.authGuardAdmin.canActivate()) {
            this.pdfService.getPdfsByEmpresaFantasyName(this.loginService.userLogado.empresa.empresaFantasyName).subscribe(function (data) {
                _this.pdfs = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            }, function (error) { return console.log(error); });
        }
    };
    PdfAdmin.prototype.onChangeDrop = function (teste) {
        if (this.pdfUserFilter.tipo == "1") {
            this.subtipoRender = true;
        }
        else {
            this.pdfUserFilter.subTipo = null;
            this.subtipoRender = false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core_src_metadata_di__["d" /* ViewChild */])("nao"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], PdfAdmin.prototype, "naodelref", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core_src_metadata_di__["d" /* ViewChild */])("modal2"), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__components_modal_pdf_component__["a" /* ModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__components_modal_pdf_component__["a" /* ModalComponent */]) === 'function' && _b) || Object)
    ], PdfAdmin.prototype, "modal", void 0);
    PdfAdmin = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pdf-admin',
            template: __webpack_require__(746)
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__["a" /* PdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__["a" /* PdfService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_host_service__["a" /* HostService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard_superadmin__["a" /* AuthGuardSuperAdmin */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard_superadmin__["a" /* AuthGuardSuperAdmin */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard_admin__["a" /* AuthGuardAdmin */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]) === 'function' && _l) || Object])
    ], PdfAdmin);
    return PdfAdmin;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/pdf-admin.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pdf__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_filters_pdf_user_filter__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_di__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pdf_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_host_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_upload_pdf_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_add_pdf_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_modal_pdf_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_modal_pdf_lg_component__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfUser; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PdfUser = (function () {
    function PdfUser(domSanitizer, pdfService, router, userService, rd, hostService, uploadPdfService, addPdfService) {
        /* this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
           user => {
             this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
             console.log(this.user);
             this.pdfService.getPdfsByUser(this.user).subscribe(
               pdf => {console.log(this.pdfs = JSON.parse(JSON.parse(JSON.stringify(user))._body).pdfList);
               },
               error => console.log(error)
               );
           },
           error => console.log(error)
           );*/
        this.domSanitizer = domSanitizer;
        this.pdfService = pdfService;
        this.router = router;
        this.userService = userService;
        this.rd = rd;
        this.hostService = hostService;
        this.uploadPdfService = uploadPdfService;
        this.addPdfService = addPdfService;
        this.pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
        this.pdfSrcBase = this.hostService.host + 'pdf/download';
        this.pdfSrcBase2 = this.hostService.host + 'norest/pdf/download/';
        this.page = 1;
        this.pdfUserFilter = new __WEBPACK_IMPORTED_MODULE_3__models_filters_pdf_user_filter__["a" /* PdfUserFilter */]();
        this.zoom = 0.5;
        this.subtipoRender = false;
        this.refreshAll = false;
        this.newPdf = new __WEBPACK_IMPORTED_MODULE_2__models_pdf__["a" /* Pdf */]();
        this.pdfAdded = false;
        this.subtipoRenderModal = false;
        this.arquivoAntigoNomeModalEditar = '';
        this.arquivoNovoNomeModalEditar = '';
        this.aindaNaoBuscado = true;
    }
    PdfUser.prototype.editarPdf = function (pdf) {
        this.uploadPdfService.fileIsInside = false;
        this.uploadPdfService.fileIsUploaded = false;
        this.pdfAdded = false;
        this.newPdf = pdf;
        this.arquivoAntigoNomeModalEditar = pdf.pdfName;
        this.arquivoNovoNomeModalEditar = "";
        this.cleanModalEditar();
        this.onChangeDropModal();
        this.modalEditar.show();
    };
    PdfUser.prototype.fecharModalEditar = function () {
        if (this.refreshAll) {
            this.refresh();
        }
        else {
            this.findPdfs();
        }
        this.modalEditar.hide();
    };
    PdfUser.prototype.editarPdfModalFileChange = function (evento) {
        this.arquivoNovoNomeModalEditar = this.uploadPdfService.fileChangeEventModal(evento);
    };
    PdfUser.prototype.deletePdf = function (pdf) {
        var _this = this;
        this.pdfService.deletePdf(pdf).subscribe(function (username) {
            _this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
                _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                console.log(_this.user);
                _this.pdfService.getPdfsByUser(_this.user).subscribe(function (pdf) {
                    console.log(_this.pdfs = JSON.parse(JSON.parse(JSON.stringify(user))._body).pdfList);
                }, function (error) { return console.log(error); });
            }, function (error) { return console.log(error); });
        });
        this.naodelref.nativeElement.click();
        if (this.refreshAll) {
            this.refresh();
        }
        else {
            this.findPdfs();
        }
    };
    PdfUser.prototype.refresh = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            _this.pdfService.getPdfsByUser(_this.user).subscribe(function (pdf) {
                _this.pdfs = JSON.parse(JSON.parse(JSON.stringify(user))._body).pdfList;
                _this.refreshAll = true;
                _this.aindaNaoBuscado = false;
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    PdfUser.prototype.findPdfs = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            _this.pdfUserFilter.user = _this.user;
            _this.pdfService.getPdfsByFilter(_this.pdfUserFilter).subscribe(function (pdfs) {
                _this.pdfs = JSON.parse(JSON.parse(JSON.stringify(pdfs))._body).pdfList;
                _this.refreshAll = false;
                _this.aindaNaoBuscado = false;
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    PdfUser.prototype.getPdf = function (pdf) {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            console.log(_this.user);
            _this.pdfService.downloadPdfPost(pdf).subscribe(function (res) {
                /*let blob: Blob = new Blob([res.arrayBuffer()], {type: 'application/pdf'});*/
                var pdfResponse = new Blob([res.blob()], { type: 'application/pdf' });
                console.log(pdfResponse.size + " bytes file downloaded. File type: ", pdfResponse.type);
                var fileURL = URL.createObjectURL(pdfResponse);
                document.getElementById("pdfModal").setAttribute("src", fileURL);
                _this.modal.show();
                /* window.open(fileURL);*/
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    PdfUser.prototype.filtersSetted = function () {
        if (this.pdfUserFilter.pdf.ano && this.pdfUserFilter.pdf.tipo) {
            if (this.pdfUserFilter.pdf.tipo == 1) {
                if (this.pdfUserFilter.pdf.subTipo) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
    };
    PdfUser.prototype.openInNewTab = function (url) {
        var a = document.createElement("a");
        a.target = "_blank";
        a.href = url;
        a.click();
    };
    PdfUser.prototype.existePdf = function () {
        if (this.pdfs == null || this.pdfs.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    PdfUser.prototype.existePdfAndAindaNaoBuscado = function () {
        if (this.existePdf() && this.aindaNaoBuscado)
            return true;
        else
            return false;
    };
    PdfUser.prototype.existePdfAndNotAindaNaoBuscado = function () {
        if (this.existePdf() && !this.aindaNaoBuscado)
            return true;
        else
            return false;
    };
    PdfUser.prototype.onChangeDrop = function (teste) {
        if (this.pdfUserFilter.pdf.tipo == 1) {
            this.subtipoRender = true;
        }
        else {
            this.pdfUserFilter.pdf.subTipo = null;
            this.subtipoRender = false;
        }
    };
    PdfUser.prototype.saveNewInspecao = function () {
        var _this = this;
        this.newPdf.pdfName = this.uploadPdfService.pdfName;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.userModal = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            _this.newPdf.user = _this.userModal;
            _this.addPdfService.sendPdf(_this.newPdf)
                .subscribe(function (data) {
                var pdfReturn;
                try {
                    pdfReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                    if (_this.uploadPdfService.fileIsInside) {
                        _this.uploadPdfService.upload();
                    }
                    _this.pdfAdded = true;
                    _this.newPdf = new __WEBPACK_IMPORTED_MODULE_2__models_pdf__["a" /* Pdf */]();
                    _this.modalNovaClose();
                }
                catch (err) {
                    alert("Já existe uma inpeção com esse título. Tente outro.");
                }
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    PdfUser.prototype.saveEdicao = function () {
        var _this = this;
        this.newPdf.pdfName = this.arquivoNovoNomeModalEditar;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.userModal = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            _this.newPdf.user = _this.userModal;
            _this.pdfService.updatePdf(_this.newPdf)
                .subscribe(function (data) {
                var pdfReturn;
                try {
                    pdfReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                    if (_this.uploadPdfService.fileIsInside)
                        _this.uploadPdfService.upload();
                    _this.pdfAdded = true;
                    _this.newPdf = new __WEBPACK_IMPORTED_MODULE_2__models_pdf__["a" /* Pdf */]();
                    _this.fecharModalEditar();
                }
                catch (err) {
                    alert("Já existe uma inpeção com esse título. Tente outro.");
                }
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    PdfUser.prototype.onChangeDropModal = function () {
        if (this.newPdf.tipo == 1) {
            this.subtipoRenderModal = true;
        }
        else {
            this.newPdf.subTipo = null;
            this.subtipoRenderModal = false;
        }
    };
    PdfUser.prototype.ngOnInit = function () {
        this.uploadPdfService.fileIsInside = false;
        this.uploadPdfService.fileIsUploaded = false;
    };
    PdfUser.prototype.modalNovaOpen = function () {
        this.uploadPdfService.fileIsInside = false;
        this.uploadPdfService.fileIsUploaded = false;
        this.pdfAdded = false;
        this.newPdf = new __WEBPACK_IMPORTED_MODULE_2__models_pdf__["a" /* Pdf */]();
        this.cleanFilesModalNova();
        this.modalNova.show();
    };
    PdfUser.prototype.modalNovaClose = function () {
        if (this.refreshAll) {
            this.refresh();
        }
        else {
            this.findPdfs();
        }
        this.modalNova.hide();
    };
    PdfUser.prototype.cleanFilesModalNova = function () {
        this.rd.setElementProperty(this.fileInput.nativeElement, 'value', '');
    };
    PdfUser.prototype.cleanModalEditar = function () {
        this.rd.setElementProperty(this.fileInputModal.nativeElement, 'value', '');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_di__["d" /* ViewChild */])("nao"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], PdfUser.prototype, "naodelref", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_di__["d" /* ViewChild */])("modal2"), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__components_modal_pdf_component__["a" /* ModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__components_modal_pdf_component__["a" /* ModalComponent */]) === 'function' && _b) || Object)
    ], PdfUser.prototype, "modal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_di__["d" /* ViewChild */])("modalNova"), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_12__components_modal_pdf_lg_component__["a" /* ModalLgComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_12__components_modal_pdf_lg_component__["a" /* ModalLgComponent */]) === 'function' && _c) || Object)
    ], PdfUser.prototype, "modalNova", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_di__["d" /* ViewChild */])("modalEditar"), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_12__components_modal_pdf_lg_component__["a" /* ModalLgComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_12__components_modal_pdf_lg_component__["a" /* ModalLgComponent */]) === 'function' && _d) || Object)
    ], PdfUser.prototype, "modalEditar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_di__["d" /* ViewChild */])("fileInput"), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _e) || Object)
    ], PdfUser.prototype, "fileInput", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_di__["d" /* ViewChild */])("fileInputModal"), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _f) || Object)
    ], PdfUser.prototype, "fileInputModal", void 0);
    PdfUser = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pdf-user',
            template: __webpack_require__(747)
        }), 
        __metadata('design:paramtypes', [(typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_pdf_service__["a" /* PdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_pdf_service__["a" /* PdfService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_host_service__["a" /* HostService */]) === 'function' && _m) || Object, (typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_9__services_upload_pdf_service__["a" /* UploadPdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__services_upload_pdf_service__["a" /* UploadPdfService */]) === 'function' && _o) || Object, (typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_10__services_add_pdf_service__["a" /* AddPdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__services_add_pdf_service__["a" /* AddPdfService */]) === 'function' && _p) || Object])
    ], PdfUser);
    return PdfUser;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/pdf-user.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Empresa__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_register_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_di__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Register = (function () {
    function Register(registerService, loginService, userService) {
        this.registerService = registerService;
        this.loginService = loginService;
        this.userService = userService;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */]();
        this.registered = false;
        this.newEmpresa = new __WEBPACK_IMPORTED_MODULE_2__models_Empresa__["a" /* Empresa */]();
        this.refreshEmpresas();
    }
    Register.prototype.refreshEmpresas = function () {
        var _this = this;
        this.loginService.sendToken(localStorage.getItem("token")).subscribe(function (data) {
            _this.userService.getAllEmpresas().subscribe(function (data) { return console.log(_this.empresas = JSON.parse(JSON.parse(JSON.stringify(data))._body)); }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
        console.log(this.empresas);
    };
    Register.prototype.onSubmit = function () {
        var _this = this;
        this.registerService.sendUser(this.newUser)
            .subscribe(function (data) {
            _this.newUser = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */]();
            var userReturn;
            try {
                userReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                _this.registered = true;
            }
            catch (err) {
                alert("Login já utilizado. Tente outro.");
            }
        }, function (error) { return console.log(error); });
    };
    Register.prototype.salvarEmpresa = function () {
        var _this = this;
        this.userService.sendEmpresa(this.newEmpresa)
            .subscribe(function (data) {
            _this.newEmpresa = new __WEBPACK_IMPORTED_MODULE_2__models_Empresa__["a" /* Empresa */]();
            var empresaReturn;
            try {
                empresaReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                _this.refreshEmpresas();
                _this.cancelarref.nativeElement.click();
            }
            catch (err) {
                alert("Nome Fantasia já utilizado. Tente outro.");
            }
        }, function (error) { return console.log(error); });
    };
    Register.prototype.checkBoxAdmin = function () {
        this.newUser.isAdmin = !this.newUser.isAdmin;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core_src_metadata_di__["d" /* ViewChild */])("cancelar"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], Register.prototype, "cancelarref", void 0);
    Register = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register',
            template: __webpack_require__(749)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_register_service__["a" /* RegisterService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object])
    ], Register);
    return Register;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/register.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_teste__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_testar_service__ = __webpack_require__(372);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Testar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Testar = (function () {
    function Testar(testarService) {
        this.testarService = testarService;
        this.newTeste = new __WEBPACK_IMPORTED_MODULE_1__models_teste__["a" /* Teste */]();
        this.testado = false;
    }
    Testar.prototype.onSubmit = function () {
        var _this = this;
        console.log("submit test");
        this.testarService.sendTeste(this.newTeste)
            .subscribe(function (data) {
            _this.newTeste = new __WEBPACK_IMPORTED_MODULE_1__models_teste__["a" /* Teste */]();
            _this.testado = true;
        }, function (error) { return console.log(error); });
    };
    Testar = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'testar',
            template: __webpack_require__(750)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_testar_service__["a" /* TestarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_testar_service__["a" /* TestarService */]) === 'function' && _a) || Object])
    ], Testar);
    return Testar;
    var _a;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/testar.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_filters_pdf_user_filter__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_empresa__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_metadata_di__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_host_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_register_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard_superadmin__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_modal_pdf_component__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAdmin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var UserAdmin = (function () {
    function UserAdmin(domSanitizer, pdfService, router, userService, rd, loginService, hostService, registerService, authGuardSuperAdmin) {
        this.domSanitizer = domSanitizer;
        this.pdfService = pdfService;
        this.router = router;
        this.userService = userService;
        this.rd = rd;
        this.loginService = loginService;
        this.hostService = hostService;
        this.registerService = registerService;
        this.authGuardSuperAdmin = authGuardSuperAdmin;
        this.pdfSrcBase = this.hostService.host + '/pdf/download';
        this.page = 1;
        this.zoom = 0.5;
        this.pdfUserFilter = new __WEBPACK_IMPORTED_MODULE_5__models_filters_pdf_user_filter__["a" /* PdfUserFilter */]();
        this.newUser = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
        this.userEdit = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
        this.newEmpresa = new __WEBPACK_IMPORTED_MODULE_7__models_empresa__["a" /* Empresa */]();
        this.subtipoRender = false;
    }
    UserAdmin.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.loginService.userLogado = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            if (_this.authGuardSuperAdmin.canActivate()) {
                _this.userService.getAllUsers().subscribe(function (data) {
                    _this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                    _this.refreshEmpresas();
                }, function (error) { return console.log(error); });
            }
            else {
                _this.userService.getUsersByEmpresa(localStorage.getItem("currentEmpresa")).subscribe(function (data) { return _this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
            }
        }, function (error) { return console.log(error); });
    };
    UserAdmin.prototype.findUsers = function () {
        var _this = this;
        if (this.authGuardSuperAdmin.canActivate()) {
            if (this.userFilter && this.empresaFilter) {
                this.userService.getUsersByUserNameAndEmpresaName(this.userFilter + "/" + this.empresaFilter.empresaName).subscribe(function (data) { return _this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
            }
            else if (this.userFilter) {
                this.userService.getUsersByUserName(this.userFilter).subscribe(function (data) { return _this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
            }
            else if (this.empresaFilter) {
                this.userService.getUsersByEmpresa(this.empresaFilter.empresaName).subscribe(function (data) { return _this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
            }
            else {
                this.userService.getAllUsers().subscribe(function (data) { return _this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
            }
        }
        else {
            if (this.userFilter) {
                this.userService.getUsersByUserNameAndEmpresaName(this.userFilter + "/" + localStorage.getItem("currentEmpresa")).subscribe(function (data) { return console.log(_this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body)); }, function (error) { return console.log(error); });
            }
            else {
                this.userService.getUsersByEmpresa(localStorage.getItem("currentEmpresa")).subscribe(function (data) { return _this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
            }
        }
    };
    UserAdmin.prototype.modalNovoOpen = function () {
        this.newUser = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
        this.passVerify = '';
        this.modalNovo.show();
    };
    UserAdmin.prototype.modalNovoClose = function () {
        this.findUsers();
        this.modalNovo.hide();
    };
    UserAdmin.prototype.refreshEmpresas = function () {
        var _this = this;
        this.userService.getAllEmpresas().subscribe(function (data) { return _this.empresas = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
    };
    UserAdmin.prototype.saveNewUser = function (pass) {
        var _this = this;
        if (this.verificarLogin(this.newUser.userName))
            if (this.verificarSenhas(pass)) {
                if (this.authGuardSuperAdmin.canActivate())
                    this.registerService.sendUser(this.newUser)
                        .subscribe(function (data) {
                        _this.newUser = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
                        var userReturn;
                        try {
                            userReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                            _this.modalNovoClose();
                        }
                        catch (err) {
                            alert("Login já utilizado. Tente outro.");
                        }
                    }, function (error) { return console.log(error); });
                else
                    this.userService.getEmpresaByEmpresaName(localStorage.getItem("currentEmpresa")).subscribe(function (data) {
                        _this.newUser.empresa = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                        _this.registerService.sendUser(_this.newUser)
                            .subscribe(function (data) {
                            _this.newUser = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
                            var userReturn;
                            try {
                                userReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                                _this.modalNovoClose();
                            }
                            catch (err) {
                                alert("Login já utilizado. Tente outro.");
                            }
                        }, function (error) { return console.log(error); });
                    }, function (error) { return console.log(error); });
            }
    };
    UserAdmin.prototype.verificarSenhas = function (pass) {
        if (pass.length < 6) {
            alert("A senha deve conter pelo menos 6 caracteres.");
            return false;
        }
        else if (pass.length > 20) {
            alert("A senha não pode ter mais do que 20 caracteres");
            return false;
        }
        else if (pass.search(/\d/) == -1) {
            alert("A senha deve conter pelo menos um número.");
            return false;
        }
        else if (pass.search(/[a-zA-Z]/) == -1) {
            alert("A senha deve conter pelo menos uma letra");
            return false;
        }
        else if (pass.search(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi) != -1) {
            alert("A senha não pode conter caracteres especiais");
            return false;
        }
        else if (!(this.passVerify === pass)) {
            alert("As duas senhas devem coincidir!");
            return false;
        }
        else
            return true;
    };
    UserAdmin.prototype.verificarLogin = function (userName) {
        if (userName.length < 6) {
            alert("O login deve conter pelo menos 6 caracteres.");
            return false;
        }
        else if (userName.length > 20) {
            alert("O login não pode ter mais do que 20 caracteres");
            return false;
        }
        else if (userName.search(/[a-zA-Z]/) == -1) {
            alert("O login deve conter pelo menos uma letra");
            return false;
        }
        else if (userName.search(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi) != -1) {
            alert("O login não pode conter caracteres especiais");
            return false;
        }
        else
            return true;
    };
    UserAdmin.prototype.salvarEdicao = function () {
        var _this = this;
        var userReturn;
        this.userService.updateUser(this.userEdit)
            .subscribe(function (data) {
            userReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            _this.userEdit = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
            _this.fecharModalEditar();
        }, function (error) { return console.log(error); });
    };
    UserAdmin.prototype.salvarEmpresa = function () {
        var _this = this;
        this.userService.sendEmpresa(this.newEmpresa)
            .subscribe(function (data) {
            _this.newEmpresa = new __WEBPACK_IMPORTED_MODULE_7__models_empresa__["a" /* Empresa */]();
            var empresaReturn;
            try {
                empresaReturn = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                _this.refreshEmpresas();
                _this.cancelarEmpresaRef.nativeElement.click();
            }
            catch (err) {
                alert("Nome Fantasia já utilizado. Tente outro.");
            }
        }, function (error) { return console.log(error); });
    };
    UserAdmin.prototype.openModalEdit = function (user) {
        this.userEdit = user;
        this.modalEditar.show();
    };
    UserAdmin.prototype.fecharModalEditar = function () {
        this.findUsers();
        this.modalEditar.hide();
    };
    UserAdmin.prototype.resetarSenha = function (user) {
        this.userService.resetSenha(user).subscribe(function (data) {
            var senha = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            alert("A senha do Usuário " + user.userName + " foi alterada para " + senha.newPassword + ".");
        }, function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_metadata_di__["d" /* ViewChild */])("nao"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], UserAdmin.prototype, "naodelref", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_metadata_di__["d" /* ViewChild */])("cancelarEmpresa"), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object)
    ], UserAdmin.prototype, "cancelarEmpresaRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_metadata_di__["d" /* ViewChild */])("modalBloquear"), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_13__components_modal_pdf_component__["a" /* ModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_13__components_modal_pdf_component__["a" /* ModalComponent */]) === 'function' && _c) || Object)
    ], UserAdmin.prototype, "modalBloquear", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_metadata_di__["d" /* ViewChild */])("modalNovo"), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_13__components_modal_pdf_component__["a" /* ModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_13__components_modal_pdf_component__["a" /* ModalComponent */]) === 'function' && _d) || Object)
    ], UserAdmin.prototype, "modalNovo", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_metadata_di__["d" /* ViewChild */])("modalEditar"), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_13__components_modal_pdf_component__["a" /* ModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_13__components_modal_pdf_component__["a" /* ModalComponent */]) === 'function' && _e) || Object)
    ], UserAdmin.prototype, "modalEditar", void 0);
    UserAdmin = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-admin',
            template: __webpack_require__(751)
        }), 
        __metadata('design:paramtypes', [(typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__["a" /* PdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__["a" /* PdfService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_10__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__services_host_service__["a" /* HostService */]) === 'function' && _m) || Object, (typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_11__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__services_register_service__["a" /* RegisterService */]) === 'function' && _o) || Object, (typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard_superadmin__["a" /* AuthGuardSuperAdmin */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard_superadmin__["a" /* AuthGuardSuperAdmin */]) === 'function' && _p) || Object])
    ], UserAdmin);
    return UserAdmin;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/user-admin.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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
    function AuthGuard(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.loginService.checkLogin()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/auth.guard.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Empresa; });
var Empresa = (function () {
    function Empresa() {
    }
    return Empresa;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/Empresa.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddPhotoService = (function () {
    function AddPhotoService(http) {
        this.http = http;
    }
    AddPhotoService.prototype.sendPhoto = function (photo) {
        var url = "http://localhost:8080/rest/photo/add";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        console.log(url);
        return this.http.post(url, JSON.stringify(photo), { headers: headers1 });
    };
    AddPhotoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], AddPhotoService);
    return AddPhotoService;
    var _a;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/add-photo.service.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestarService = (function () {
    function TestarService(http) {
        this.http = http;
    }
    TestarService.prototype.sendTeste = function (teste) {
        var url = "http://localhost:8080/teste/testar";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(teste), { headers: headers1 });
    };
    TestarService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], TestarService);
    return TestarService;
    var _a;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/testar.service.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadPhotoService = (function () {
    function UploadPhotoService() {
        this.filesToUpload = [];
    }
    UploadPhotoService.prototype.upload = function () {
        this.makeFileRequest("http://localhost:8080/rest/photo/upload", [], this.filesToUpload).then(function (result) {
            console.log(result);
        }, function (error) {
            console.error(error);
        });
    };
    UploadPhotoService.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UploadPhotoService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        alert("Upload successful!");
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
            xhr.send(formData);
        });
    };
    UploadPhotoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UploadPhotoService);
    return UploadPhotoService;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/upload-photo.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HostService = (function () {
    /*host: string = "http://localhost:8080/" */
    function HostService() {
        this.host = "https://sleepy-oasis-96155.herokuapp.com/";
    }
    HostService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], HostService);
    return HostService;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/host.service.js.map

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 438;


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(556);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/main.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_host_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http, userService, hostService) {
        this.http = http;
        this.userService = userService;
        this.hostService = hostService;
        this.userLogado = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
    }
    LoginService.prototype.sendCredential = function (model) {
        var tokenUrl1 = this.hostService.host + "login";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(tokenUrl1, JSON.stringify(model), { headers: headers1 });
    };
    LoginService.prototype.sendToken = function (token) {
        /*let tokenUrl2 = this.hostService.host+"rest/user/users";*/
        var tokenUrl2 = this.hostService.host + "rest/simple/user/token";
        /*console.log('Bearer '+token);*/
        var getHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        return this.http.get(tokenUrl2, { headers: getHeaders });
    };
    LoginService.prototype.logout = function () {
        localStorage.setItem("token", "");
        localStorage.setItem("currentUserName", '');
        localStorage.setItem("currentIsAdmin", '');
    };
    LoginService.prototype.checkLogin = function () {
        if (localStorage.getItem("currentUserName") != null && localStorage.getItem("currentUserName") != '' && localStorage.getItem("token") != null && localStorage.getItem("token") != '') {
            /*      console.log(localStorage.getItem("currentUserName"));
            console.log(localStorage.getItem("token"));*/
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.checkAdmin = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.userLogado = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        }, function (error) { return console.log(error); });
        this.isAdminLocal = this.userLogado.isAdmin;
        return this.isAdminLocal;
    };
    LoginService.prototype.checkSuperAdmin = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.userLogado = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            _this.userLogado.isSuperAdmin;
        }, function (error) { return console.log(error); });
        this.isSuperAdminLocal = this.userLogado.isSuperAdmin;
        return this.isSuperAdminLocal;
    };
    LoginService.prototype.getUserOnLoadAllPagesSecurity = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.userLogado = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            localStorage.setItem("currentUserName", _this.userLogado.userName);
            localStorage.setItem("isAdmin", _this.userLogado.isAdmin ? "true" : "false");
            localStorage.setItem("isSuperAdmin", _this.userLogado.isSuperAdmin ? "true" : "false");
        });
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_host_service__["a" /* HostService */]) === 'function' && _c) || Object])
    ], LoginService);
    return LoginService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/login.service.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(738),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/app.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_photo_list_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_testar_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_my_album_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_photo_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pdf_user_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_pdf_admin_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_admin_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_add_pdf_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_empresa_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_modal_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_modal_pdf_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_modal_pdf_lg_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_pdf_viewer__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard_admin__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard_superadmin__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_photo_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_register_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_testar_service__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_upload_photo_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_add_photo_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_add_pdf_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_upload_pdf_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_pdf_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_host_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_modal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angular2_modal_plugins_bootstrap__ = __webpack_require__(380);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_photo_list_component__["a" /* PhotoList */],
                __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_component__["a" /* NavBar */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_component__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_10__components_testar_component__["a" /* Testar */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_component__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_12__components_my_album_component__["a" /* MyAlbum */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_photo_component__["a" /* AddPhoto */],
                __WEBPACK_IMPORTED_MODULE_14__components_pdf_user_component__["a" /* PdfUser */],
                __WEBPACK_IMPORTED_MODULE_17__components_add_pdf_component__["a" /* AddPdf */],
                __WEBPACK_IMPORTED_MODULE_15__components_pdf_admin_component__["a" /* PdfAdmin */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_admin_component__["a" /* UserAdmin */],
                __WEBPACK_IMPORTED_MODULE_19__components_modal_component__["a" /* MyModal */],
                __WEBPACK_IMPORTED_MODULE_20__components_modal_pdf_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_modal_pdf_lg_component__["a" /* ModalLgComponent */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_pdf_viewer__["PdfViewerComponent"],
                __WEBPACK_IMPORTED_MODULE_18__components_add_empresa_component__["a" /* AddEmpresa */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_37_angular2_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_38_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__services_photo_service__["a" /* PhotoService */],
                __WEBPACK_IMPORTED_MODULE_27__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_28__services_testar_service__["a" /* TestarService */],
                __WEBPACK_IMPORTED_MODULE_29__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_30__services_upload_photo_service__["a" /* UploadPhotoService */],
                __WEBPACK_IMPORTED_MODULE_31__services_add_photo_service__["a" /* AddPhotoService */],
                __WEBPACK_IMPORTED_MODULE_33__services_add_pdf_service__["a" /* AddPdfService */],
                __WEBPACK_IMPORTED_MODULE_34__services_upload_pdf_service__["a" /* UploadPdfService */],
                __WEBPACK_IMPORTED_MODULE_32__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_35__services_pdf_service__["a" /* PdfService */],
                __WEBPACK_IMPORTED_MODULE_36__services_host_service__["a" /* HostService */],
                __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard_admin__["a" /* AuthGuardAdmin */],
                __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard_superadmin__["a" /* AuthGuardSuperAdmin */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/app.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_testar_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pdf_user_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_add_pdf_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pdf_admin_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_empresa_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_admin_component__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });











var appRoutes = [
    {
        path: '',
        redirectTo: '/pdf-user',
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_component__["a" /* Register */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]]
    },
    {
        path: 'testar',
        component: __WEBPACK_IMPORTED_MODULE_4__components_testar_component__["a" /* Testar */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__components_login_component__["a" /* Login */]
    },
    {
        path: 'pdf-user',
        component: __WEBPACK_IMPORTED_MODULE_6__components_pdf_user_component__["a" /* PdfUser */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'add-pdf',
        component: __WEBPACK_IMPORTED_MODULE_7__components_add_pdf_component__["a" /* AddPdf */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'pdf-admin',
        component: __WEBPACK_IMPORTED_MODULE_8__components_pdf_admin_component__["a" /* PdfAdmin */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]]
    },
    {
        path: 'add-empresa',
        component: __WEBPACK_IMPORTED_MODULE_9__components_add_empresa_component__["a" /* AddEmpresa */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]]
    },
    {
        path: 'user-admin',
        component: __WEBPACK_IMPORTED_MODULE_10__components_user_admin_component__["a" /* UserAdmin */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/app.routing.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_photo__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_photo_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_add_photo_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPhoto; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPhoto = (function () {
    function AddPhoto(uploadPhotoService, addPhotoService, userService) {
        this.uploadPhotoService = uploadPhotoService;
        this.addPhotoService = addPhotoService;
        this.userService = userService;
        this.newPhoto = new __WEBPACK_IMPORTED_MODULE_1__models_photo__["a" /* Photo */]();
        this.photoAdded = false;
    }
    AddPhoto.prototype.onSubmit = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            console.log(_this.user);
            _this.newPhoto.user = _this.user;
            _this.addPhotoService.sendPhoto(_this.newPhoto)
                .subscribe(function (data) {
                _this.photoAdded = true;
                _this.newPhoto = new __WEBPACK_IMPORTED_MODULE_1__models_photo__["a" /* Photo */]();
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    AddPhoto = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-photo',
            template: __webpack_require__(741)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_upload_photo_service__["a" /* UploadPhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_upload_photo_service__["a" /* UploadPhotoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_add_photo_service__["a" /* AddPhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_add_photo_service__["a" /* AddPhotoService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], AddPhoto);
    return AddPhoto;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/add-photo.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__(742)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/home.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pdf_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyModal = (function () {
    function MyModal(overlay, vcRef, modal, pdfService) {
        this.modal = modal;
        this.pdfService = pdfService;
        overlay.defaultViewContainer = vcRef;
    }
    MyModal.prototype.onClick = function (pdf) {
        var _this = this;
        this.modal.confirm()
            .size('sm')
            .isBlocking(true)
            .keyboard(27)
            .title('Confirma exclusão da Inspeção?')
            .open().then(function (result) { if (result) {
            _this.deletePdf(pdf);
        } });
    };
    MyModal.prototype.deletePdf = function (pdf) {
        if (this.onClick(pdf)) {
            this.pdfService.deletePdf(pdf).subscribe();
        }
    };
    MyModal = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal',
            template: "<a class=\"ui button\" (click)=\"onClick()\">\n                        <i class=\"trash icon\" ></i> \n                    </a>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["g" /* Overlay */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["g" /* Overlay */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_pdf_service__["a" /* PdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_pdf_service__["a" /* PdfService */]) === 'function' && _d) || Object])
    ], MyModal);
    return MyModal;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/modal.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_photo_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAlbum; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyAlbum = (function () {
    function MyAlbum(photoService, router, userService) {
        var _this = this;
        this.photoService = photoService;
        this.router = router;
        this.userService = userService;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            console.log(_this.user);
            _this.photoService.getPhotosByUser(_this.user).subscribe(function (photos) {
                console.log(_this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList);
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    }
    MyAlbum.prototype.onSelect = function (photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
    };
    MyAlbum = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-album',
            template: __webpack_require__(744)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], MyAlbum);
    return MyAlbum;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/my-album.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_di__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_modal_pdf_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_novaSenhaCampos__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavBar = (function () {
    function NavBar(loginService, pdfService, userService, router) {
        this.loginService = loginService;
        this.pdfService = pdfService;
        this.userService = userService;
        this.router = router;
        this.model = { 'username': '', 'password': '', 'isAdmin': '' };
        this.novaSenhaCampos = new __WEBPACK_IMPORTED_MODULE_7__models_novaSenhaCampos__["a" /* NovaSenhaCampos */]();
        this.myLocalStorage = localStorage;
        this.novaSenhaCampos.userName = localStorage.getItem("currentUserName");
    }
    NavBar.prototype.onClick = function () {
        if (this.loginService.checkLogin()) {
            this.loginService.logout();
            this.naodelref.nativeElement.click();
            this.router.navigate(['/login'], { queryParams: {} });
        }
    };
    NavBar.prototype.modalSenhaOpen = function () {
        this.novaSenhaCampos = new __WEBPACK_IMPORTED_MODULE_7__models_novaSenhaCampos__["a" /* NovaSenhaCampos */]();
        this.novaSenhaCampos.userName = localStorage.getItem("currentUserName");
        this.passVerify = '';
        this.modalSenha.show();
    };
    NavBar.prototype.modalConfirmaSenhaOpen = function () {
        this.modalConfirmarSenha.show();
    };
    NavBar.prototype.salvarNovaSenha = function () {
        if (this.verificarSenhas(this.novaSenhaCampos.newPassword)) {
            this.modalConfirmaSenhaOpen();
        }
    };
    NavBar.prototype.confirmarNovaSenha = function () {
        var _this = this;
        this.userService.updateSenha(this.novaSenhaCampos).subscribe(function (data) {
            _this.modalConfirmarSenha.hide();
            _this.modalSenha.hide();
        }, function (error) { return console.log(error); });
    };
    NavBar.prototype.verificarSenhas = function (pass) {
        if (pass.length < 6) {
            alert("A senha deve conter pelo menos 6 caracteres.");
            return false;
        }
        else if (pass.length > 20) {
            alert("A senha não pode ter mais do que 20 caracteres");
            return false;
        }
        else if (pass.search(/\d/) == -1) {
            alert("A senha deve conter pelo menos um número.");
            return false;
        }
        else if (pass.search(/[a-zA-Z]/) == -1) {
            alert("A senha deve conter pelo menos uma letra");
            return false;
        }
        else if (pass.search(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi) != -1) {
            alert("A senha não pode conter caracteres especiais");
            return false;
        }
        else if (!(this.passVerify === pass)) {
            alert("As duas senhas devem coincidir!");
            return false;
        }
        else
            return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_di__["d" /* ViewChild */])("nao"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], NavBar.prototype, "naodelref", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_di__["d" /* ViewChild */])("modalSenha"), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__components_modal_pdf_component__["a" /* ModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__components_modal_pdf_component__["a" /* ModalComponent */]) === 'function' && _b) || Object)
    ], NavBar.prototype, "modalSenha", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_di__["d" /* ViewChild */])("modalConfirmarSenha"), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__components_modal_pdf_component__["a" /* ModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__components_modal_pdf_component__["a" /* ModalComponent */]) === 'function' && _c) || Object)
    ], NavBar.prototype, "modalConfirmarSenha", void 0);
    NavBar = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav-bar',
            template: __webpack_require__(745)
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__["a" /* PdfService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_pdf_service__["a" /* PdfService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _g) || Object])
    ], NavBar);
    return NavBar;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/nav-bar.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_photo_service__ = __webpack_require__(234);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoList = (function () {
    function PhotoList(photoService) {
        var _this = this;
        this.photoService = photoService;
        this.photoService.getPhotos().subscribe(function (data) { return console.log(_this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)); }, function (error) { return console.log(error); });
    }
    PhotoList = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'photo-list',
            template: __webpack_require__(748)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */]) === 'function' && _a) || Object])
    ], PhotoList);
    return PhotoList;
    var _a;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/photo-list.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.isAdmin = false;
        this.isSuperAdmin = false;
    }
    return User;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/User.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Empresa; });
var Empresa = (function () {
    function Empresa() {
    }
    return Empresa;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/empresa.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovaSenhaCampos; });
var NovaSenhaCampos = (function () {
    function NovaSenhaCampos() {
    }
    return NovaSenhaCampos;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/novaSenhaCampos.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photo; });
var Photo = (function () {
    function Photo() {
    }
    return Photo;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/photo.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Teste; });
var Teste = (function () {
    function Teste() {
    }
    return Teste;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/teste.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/environment.js.map

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form *ngIf=\"!registered\" class=\"ui form\" (ngSubmit)=\"onSubmit()\" #empresaForm = \"ngForm\">\r\n  <h2 class=\"ui dividing header\">Registrar Empresa</h2>\r\n  <div class=\"field\">\r\n    <label>* Nome</label>\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n      <input type=\"text\" name=\"empresaFantasyName\" placeholder=\"Nome Fantasia\" [(ngModel)]=\"newEmpresa.empresaFantasyName\" ngControl=\"empresaFantasyName\" required>\r\n      </div>\r\n      <div class=\"field\">\r\n        <input type=\"text\" name=\"empresaName\" placeholder=\"Nome Real\" [(ngModel)]=\"newEmpresa.empresaName\" ngControl=\"empresaName\" required>\r\n      </div>\r\n \r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"ui button\" [disabled]=\"!empresaForm.form.valid\" >Salvar</button>\r\n</form>\r\n\r\n<div *ngIf=\"registered\">\r\n  <h1>Empresa Registrada!</h1>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form *ngIf=\"!pdfAdded\" class=\"ui form\" (ngSubmit)=\"onSubmit()\" #addPdfForm = \"ngForm\">\r\n    <h2 class=\"ui dividing header\">Adicionar Inspeções</h2>\r\n    <div class=\"field\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Descrição</label>\r\n      <div class=\"field\">\r\n        <input type=\"text\" name=\"Description\" placeholder=\"Descrição\" [(ngModel)]=\"newPdf.description\" ngControl=\"description\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"three fields\">\r\n\r\n      <div class=\"ui labeled input\">\r\n        <div class=\"ui label\">\r\n          Ano\r\n        </div>\r\n        <select class=\"ui dropdown\"  name=\"anoDrop\" [(ngModel)]=\"newPdf.ano\" ngControl=\"ano\" required>\r\n          <option value=\"0\">2014</option>\r\n          <option value=\"1\">2015</option>\r\n          <option value=\"2\">2016</option>\r\n          <option value=\"3\">2017</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"ui labeled input\">\r\n        <div class=\"ui label\">\r\n          Tipo\r\n        </div>\r\n        <select class=\"ui dropdown\" name=\"tipoDrop\" [(ngModel)]=\"newPdf.tipo\" ngControl=\"tipo\" (ngModelChange)=\"onChangeDrop($event)\" required>\r\n          <option value=\"0\" >END</option>\r\n          <option value=\"1\">NR 13</option>\r\n          <option value=\"2\">Outros</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"ui labeled input\" *ngIf=\"subtipoRender\" >\r\n        <div class=\"ui label\">\r\n          SubTipo\r\n        </div>\r\n        <select class=\"ui dropdown\" name=\"subTipoDrop\"   [(ngModel)]=\"newPdf.subTipo\" ngControl=\"subtipo\" required>\r\n          <option value=\"0\" hidden>Prontuário</option>\r\n          <option value=\"1\">Relatório de Inspeção</option>\r\n          <option value=\"2\">Livro de Registro</option>\r\n          <option value=\"3\">Projeto de Instalação</option>\r\n          <option value=\"4\">Calibração</option>\r\n        </select>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <hr>\r\n\r\n\r\n    <div class=\"field\">\r\n      <input type=\"file\" ngControl=\"pdfFile\" (change)=\"uploadPdfService.fileChangeEvent($event)\"/>\r\n    </div>\r\n    <hr>\r\n    <br>\r\n    <button type=\"submit\" class=\"ui button\" [disabled]=\"(!uploadPdfService.fileIsInside || !addPdfForm.form.valid )\">Salvar</button>\r\n  </form>\r\n\r\n  <div *ngIf=\"pdfAdded\">\r\n    <h1>Inspeção Enviada Com Sucesso!</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form *ngIf=\"!photoAdded\" class=\"ui form\" (ngSubmit)=\"onSubmit()\" #addPhotoForm = \"ngForm\">\r\n  <h2 class=\"ui dividing header\">Add Your Photo</h2>\r\n  <div class=\"field\">\r\n    <div class=\"two fields\">\r\n      <div class=\"field\">\r\n        <label>* Photo Name</label>\r\n      <input type=\"text\" name=\"photoName\" placeholder=\"Photo Name\" [(ngModel)]=\"newPhoto.photoName\" ngControl=\"photoName\" required>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>* Photo Title</label>\r\n        <input type=\"text\" name=\"title\" placeholder=\"Photo Title\" [(ngModel)]=\"newPhoto.title\" ngControl=\"title\" required>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Description</label>\r\n      <div class=\"field\">\r\n        <input type=\"text\" name=\"Description\" placeholder=\"Description\" [(ngModel)]=\"newPhoto.description\" ngControl=\"description\">\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"field\">\r\n  <label>Upload Photo</label>\r\n  <input type=\"file\" (change)=\"uploadPhotoService.fileChangeEvent($event)\" />\r\n  <button type=\"button\" (click)=\"uploadPhotoService.upload()\" class=\"ui mini button\">Upload</button>\r\n\r\n  </div>\r\n  <hr>\r\n  <br>\r\n  <button type=\"submit\" class=\"ui button\" [disabled]=\"!addPhotoForm.form.valid\" >Submit</button>\r\n</form>\r\n\r\n<div *ngIf=\"photoAdded\">\r\n  <h1>Add Photo Success!</h1>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\">\r\n  <div class=\"ui grid\">\r\n    <div class='twelve wide column'>\r\n    \t<photo-list></photo-list>\r\n\r\n    </div>\r\n    <div class='four wide column'>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container center aligned\">\r\n  <a class=\"item\" >\r\n    <img src=\"resources/static/pic/logo.png\" />\r\n  </a>\r\n  <a class=\"item\">\r\n  <h2>TND - Repo</h2>\r\n  </a>\r\n  <form (ngSubmit)=\"onSubmit()\" class=\"ui form\" [hidden]=\"loginService.checkLogin()\">\r\n     <br /> <br /> <br />\r\n    <div class=\"ui small input\">\r\n      <input type=\"text\" required [(ngModel)]=\"model.username\" ngControl=\"username\" placeholder=\"Usuário\" name=\"username\" required><br>\r\n    </div>\r\n    <br /> <br />\r\n\r\n    <div class=\"ui small input\"> \r\n      <input type=\"password\" required [(ngModel)]=\"model.password\" ngControl=\"password\" placeholder=\"Senha\" name=\"password\" required>\r\n    </div>\r\n    <br /> <br />\r\n\r\n    <button type=\"submit\" class=\"ui button\">Logar</button>\r\n  </form>\r\n\r\n  <div [hidden]=\"!loginService.checkLogin()\">\r\n    <h3>Login realizado com sucesso! </h3>\r\n    <h2>Bem Vindo, {{currentUserName}}!</h2>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class='photo-list'>\r\n    <div clas=\"ui grid\">\r\n       <div class=\"ui horizontal segments\" >\r\n         <span *ngFor=\"let photo of photos\" >\r\n           <div class=\"ui segment\">\r\n             <img src='http://localhost:8080/{{photo.imageName}}' class='ui medium image' (click)=\"onSelect(photo)\" style=\"cursor: pointer\">\r\n             <div class=\"ui grid\">\r\n                 <div class=\"twelve wide column left aligned\">\r\n                     <strong>{{photo.title}}</strong><br/>\r\n                 </div>\r\n                 <div class=\"four wide column right aligned\">\r\n                   {{photo.likes}} Likes\r\n                 </div>\r\n             </div>\r\n           </div>\r\n         </span>\r\n        </div>\r\n      </div>\r\n\r\n      <a class=\"ui button\" routerLink=\"/add-photo\" routerLinkActive=\"active\">Add Photo</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginService.checkLogin()\" class=\"ui inverted fixed menu\">\r\n  <div class=\"ui secondary pointing menu \">\r\n    <a class=\"item\" routerLink=\"/pdf-viewer\" routerLinkActive=\"active\">\r\n      <img src=\"resources/static/pic/logo.png\" />\r\n    </a>\r\n    <a class=\"item\" routerLink=\"/pdf-viewer\" routerLinkActive=\"active\">\r\n      <h2>TND</h2>\r\n    </a>\r\n    <a *ngIf=\"loginService.userLogado.isAdmin || loginService.userLogado.isSuperAdmin\" class=\"item\" routerLink=\"/pdf-admin\" routerLinkActive=\"active\">\r\n      Administrar Inspeções\r\n    </a>\r\n    <a class=\"item\" routerLink=\"/pdf-user\" routerLinkActive=\"active\">\r\n      Minhas Inspeções\r\n    </a>\r\n  </div>\r\n  <div class=\"right menu \">\r\n   <a *ngIf=\"loginService.userLogado.isAdmin || loginService.userLogado.isSuperAdmin\" class=\"item\" routerLink=\"/user-admin\" routerLinkActive=\"active\" >\r\n    Administrar Usuários\r\n  </a>\r\n  <a class=\"item\"  (click)=\"modalSenhaOpen()\">\r\n    Redefinir Senha\r\n  </a>\r\n  <a class=\"item\" (click)=\"modalLogout.show()\">\r\n    {{loginService.checkLogin()? 'Logout' : 'Login'}}\r\n  </a>\r\n\r\n  <app-modal #modalLogout>\r\n    <div class=\"app-modal-header\">\r\n      Confimação Logout.\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      Deseja realmente sair?\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button  type=\"button\" class=\"btn btn-default\" (click)=\"onClick()\">Sim</button>\r\n      <button #nao type=\"button\" class=\"btn btn-default\" (click)=\"modalLogout.hide()\">Não</button>\r\n    </div>\r\n  </app-modal>\r\n\r\n  <app-modal #modalSenha>\r\n    <div class=\"app-modal-body\">\r\n      <h2 class=\"ui dividing header\">Redefina sua senha.</h2>\r\n      <div class=\"container\">\r\n        <form  class=\"ui form\" (ngSubmit)=\"salvarSenha()\" #senhaForm = \"ngForm\">\r\n\r\n         <div class=\"fields\">\r\n          <div class=\"field\">\r\n            <label>Senha Atual</label>\r\n            <input type=\"password\" name=\"passwordOld\" placeholder=\"Senha Anterior\" [(ngModel)]=\"novaSenhaCampos.oldPassword\" ngControl=\"passwordOld\" required>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>Nova Senha</label>\r\n            <input type=\"password\" name=\"passwordChange1\" placeholder=\"Nova Senha \" [(ngModel)]=\"novaSenhaCampos.newPassword\" ngControl=\"passwordChange1\" required>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>Repita a Nova Senha</label>\r\n            <input type=\"password\" name=\"passwordChange2\" placeholder=\"Nova Senha\" [(ngModel)]=\"passVerify\" ngControl=\"passwordChange2\" required>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>  \r\n\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!senhaForm.form.valid\" (click)=\"salvarNovaSenha()\">Salvar</button>\r\n    <button #cancelar type=\"button\" class=\"btn btn-default\" (click)=\"modalSenha.hide()\">Cancelar</button>\r\n  </div>\r\n</app-modal>\r\n\r\n<app-modal #modalConfirmarSenha>\r\n  <div class=\"app-modal-header\">\r\n    Confirmação de Nova Senha.\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n  <h2 class=\"ui dividing header\">Confirma a nova Senha?</h2>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button #confirmaSenha type=\"button\" class=\"btn btn-default\" (click)=\"confirmarNovaSenha()\">Sim</button>\r\n    <button #cancelaSenha type=\"button\" class=\"btn btn-default\" (click)=\"modalConfirmarSenha.hide()\">Nao</button>\r\n  </div>\r\n</app-modal>\r\n\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\r\n\r\n      <h2 class=\"ui dividing header\">Administrar Inspeções</h2>\r\n      <br>\r\n\r\n      <div clas=\"ui four column grid\">\r\n\r\n       <div class=\"ui labeled input\">\r\n        <div class=\"ui label\">\r\n          Ano\r\n        </div>\r\n        <select class=\"ui dropdown\"  name=\"anoDrop\" [(ngModel)]=\"pdfUserFilter.ano\" ngControl=\"ano\" required>\r\n          <option></option>\r\n          <option value=\"0\">2014</option>\r\n          <option value=\"1\">2015</option>\r\n          <option value=\"2\">2016</option>\r\n          <option value=\"3\">2017</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"ui labeled input\">\r\n        <div class=\"ui label\">\r\n          Tipo\r\n        </div>\r\n        <select class=\"ui dropdown\" name=\"tipoDrop\" [(ngModel)]=\"pdfUserFilter.tipo\" ngControl=\"tipo\" (ngModelChange)=\"onChangeDrop($event)\" required>\r\n          <option></option>\r\n          <option value=\"0\" >END</option>\r\n          <option value=\"1\">NR 13</option>\r\n          <option value=\"2\">Outros</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"ui labeled input\" *ngIf=\"subtipoRender\" >\r\n        <div class=\"ui label\">\r\n          SubTipo\r\n        </div>\r\n        <select class=\"ui dropdown\" name=\"subTipoDrop\"   [(ngModel)]=\"pdfUserFilter.subTipo\" ngControl=\"subtipo\" required>\r\n          <option></option>\r\n          <option value=\"0\" hidden>Prontuário</option>\r\n          <option value=\"1\">Relatório de Inspeção</option>\r\n          <option value=\"2\">Livro de Registro</option>\r\n          <option value=\"3\">Projeto de Instalação</option>\r\n          <option value=\"4\">Calibração</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"ui labeled input\" >\r\n        <div class=\"ui label\">\r\n          Usuário\r\n        </div>\r\n        <select class=\"ui dropdown\" name=\"userName\"   [(ngModel)]=\"pdfUserFilter.user.userName\" ngControl=\"userName\" required>\r\n          <option></option>\r\n          <option *ngFor=\"let user of users\" [value]=\"user.userName\">{{user.userName}}</option>\r\n        </select>\r\n      </div>\r\n\r\n    </div>\r\n    <br>\r\n\r\n    <div clas=\"ui two column grid\">\r\n\r\n      <button type=\"button\" class=\"ui button\" [disabled]=\"!filtersSetted()\" (click)=\"findPdfs(pdfUserFilter.user.userName)\">Buscar</button>\r\n      <button type=\"button\" class=\"ui button\" (click)=\"refresh()\">Todas</button>\r\n\r\n      <div>\r\n\r\n        <hr>\r\n\r\n        <div clas=\"three fields\">\r\n          <span *ngFor=\"let pdf of pdfs\" >\r\n\r\n            <div class=\"ui segment\">    \r\n              <div class=\"column\">\r\n                <label> {{pdf.pdfName}}  </label>\r\n              </div>\r\n              <div class=\"column\">\r\n              <label> Descrição: {{pdf.description}}  </label>\r\n              </div>\r\n\r\n              <div class=\"column\">\r\n                <label> Usuário: {{pdf.userName}}  </label>\r\n              </div>\r\n\r\n              <div class=\"column\">\r\n               <button  type=\"button\"  class=\"ui button\" (click)=\"getPdf(pdf)\"\r\n               title=\"Clique para abrir.\"> <i class=\"download icon\" ></i> \r\n             </button>\r\n\r\n             <button type=\"button\" class=\"ui button\" (click)=\"modal1.show()\" title=\"Clique para deletar.\"><i class=\"trash  icon\"></i> </button>\r\n\r\n\r\n             <app-modal #modal1>\r\n              <div class=\"app-modal-header\">\r\n                Confimação de Exclusão.\r\n              </div>\r\n              <div class=\"app-modal-body\">\r\n                Deseja realmente apagar {{pdf.pdfName}}?\r\n              </div>\r\n              <div class=\"app-modal-footer\">\r\n                <button  type=\"button\" class=\"btn btn-default\" (click)=\"deletePdf(pdf)\">Sim</button>\r\n                <button #nao type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Não</button>\r\n              </div>\r\n            </app-modal>\r\n\r\n\r\n            <app-modal #modal2>\r\n              <div class=\"app-modal-header\">\r\n                {{pdf.pdfName}}\r\n              </div>\r\n              <div class=\"app-modal-body\">\r\n                <div style=\"text-align: center;\">\r\n                  <iframe id=\"pdfModal\" src=\"\" \r\n                  style=\"width:500px; height:500px;\" frameborder=\"0\"></iframe>\r\n                </div>\r\n              </div>\r\n              <div class=\"app-modal-footer\">\r\n                <button #sair type=\"button\" class=\"btn btn-default\" (click)=\"modal2.hide()\">Fechar</button>\r\n              </div>\r\n            </app-modal>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </span>\r\n    </div>\r\n    <div *ngIf=\"existePdfAndNotAindaNaoBuscado()\">\r\n      <h1>Não existem Inspeções que atendam a esse critério de busca.</h1>\r\n    </div>\r\n    <div *ngIf=\"existePdfAndAindaNaoBuscado()\">\r\n      <h1>Realize uma busca para acessar as Inspeções.</h1>\r\n    </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\r\n      <h2 class=\"ui dividing header\">Minhas Inspeções</h2>\r\n      <br>\r\n\r\n      <div clas=\"ui three column grid\">\r\n\r\n       <div class=\"ui labeled input\">\r\n        <div class=\"ui label\">\r\n          Ano\r\n        </div>\r\n        <select class=\"ui dropdown\"  name=\"anoDrop\" [(ngModel)]=\"pdfUserFilter.pdf.ano\" ngControl=\"ano\" required>\r\n          <option value=\"0\">2014</option>\r\n          <option value=\"1\">2015</option>\r\n          <option value=\"2\">2016</option>\r\n          <option value=\"3\">2017</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"ui labeled input\">\r\n        <div class=\"ui label\">\r\n          Tipo\r\n        </div>\r\n        <select class=\"ui dropdown\" name=\"tipoDrop\" [(ngModel)]=\"pdfUserFilter.pdf.tipo\" ngControl=\"tipo\" (ngModelChange)=\"onChangeDrop($event)\" required>\r\n          <option value=\"0\" >END</option>\r\n          <option value=\"1\">NR 13</option>\r\n          <option value=\"2\">Outros</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"ui labeled input\" *ngIf=\"subtipoRender\" >\r\n        <div class=\"ui label\">\r\n          SubTipo\r\n        </div>\r\n        <select class=\"ui dropdown\" name=\"subTipoDrop\"   [(ngModel)]=\"pdfUserFilter.pdf.subTipo\" ngControl=\"subtipo\" required>\r\n          <option value=\"0\" hidden>Prontuário</option>\r\n          <option value=\"1\">Relatório de Inspeção</option>\r\n          <option value=\"2\">Livro de Registro</option>\r\n          <option value=\"3\">Projeto de Instalação</option>\r\n          <option value=\"4\">Calibração</option>\r\n        </select>\r\n      </div>\r\n\r\n      <button type=\"button\" class=\"ui button\" [disabled]=\"!filtersSetted()\" (click)=\"findPdfs()\">Buscar</button>\r\n      <button type=\"button\" class=\"ui button\" (click)=\"refresh()\">Todas</button>\r\n      <button type=\"button\" class=\"ui button\" (click)=\"modalNovaOpen()\">Nova</button>\r\n\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"three fields\">\r\n\r\n      <span *ngFor=\"let pdf of pdfs\" >\r\n\r\n        <div class=\"ui segment\">    \r\n          <div class=\"column\">\r\n            <label> Arquivo: {{pdf.pdfName}}  </label>\r\n          </div>\r\n          <div class=\"column\">\r\n            <label> Descrição: {{pdf.description}}  </label>\r\n          </div>\r\n          <div class=\"three fields\">\r\n\r\n            <button  type=\"button\"  class=\"ui button\" (click)=\"editarPdf(pdf)\"\r\n            title=\"Clique para editar.\"> <i class=\"edit icon\" ></i> \r\n          </button>\r\n\r\n          <button  type=\"button\"  class=\"ui button\" (click)=\"getPdf(pdf)\"\r\n          title=\"Clique para abrir.\"> <i class=\"download icon\" ></i> \r\n        </button>\r\n        <button type=\"button\" class=\"ui button\" (click)=\"modal1.show()\" title=\"Clique para deletar.\"><i class=\"trash  icon\"></i> </button>\r\n\r\n      </div>\r\n\r\n      <app-modal #modal1>\r\n        <div class=\"app-modal-header\">\r\n          Confimação de Exclusão.\r\n        </div>\r\n        <div class=\"app-modal-body\">\r\n          Deseja realmente apagar {{pdf.pdfName}}?\r\n        </div>\r\n        <div class=\"app-modal-footer\">\r\n          <button  type=\"button\" class=\"btn btn-default\" (click)=\"deletePdf(pdf)\">Sim</button>\r\n          <button #nao type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Não</button>\r\n        </div>\r\n      </app-modal>\r\n\r\n      <app-modal #modal2>\r\n        <div class=\"app-modal-header\">\r\n          {{pdf.pdfName}}\r\n        </div>\r\n        <div class=\"app-modal-body\">\r\n          <div style=\"text-align: center;\">\r\n            <iframe id=\"pdfModal\" src=\"\" \r\n            style=\"width:500px; height:500px;\" frameborder=\"0\"></iframe>\r\n          </div>\r\n        </div>\r\n        <div class=\"app-modal-footer\">\r\n          <button #sair type=\"button\" class=\"btn btn-default\" (click)=\"modal2.hide()\">Fechar</button>\r\n        </div>\r\n      </app-modal>\r\n\r\n\r\n    </div>\r\n\r\n  </span>\r\n</div>\r\n\r\n\r\n<app-modal-lg #modalNova>\r\n  <div class=\"app-modal-header\">\r\n    Adicionar Nova Inspeção\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n\r\n    <div class=\"container\">\r\n      <form class=\"ui form\" (ngSubmit)=\"saveNewInspecao()\" #addPdfForm = \"ngForm\">\r\n        <h2 class=\"ui dividing header\">Adicionar Inspeções</h2>\r\n        <div class=\"field\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Descrição</label>\r\n          <div class=\"field\">\r\n            <input type=\"text\" name=\"Description\" placeholder=\"Descrição\" [(ngModel)]=\"newPdf.description\" ngControl=\"description\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"three fields\">\r\n\r\n          <div class=\"ui labeled input\">\r\n            <div class=\"ui label\">\r\n              Ano\r\n            </div>\r\n            <select class=\"ui dropdown\"  name=\"anoDrop\" [(ngModel)]=\"newPdf.ano\" ngControl=\"ano\" required>\r\n              <option value=\"0\">2014</option>\r\n              <option value=\"1\">2015</option>\r\n              <option value=\"2\">2016</option>\r\n              <option value=\"3\">2017</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"ui labeled input\">\r\n            <div class=\"ui label\">\r\n              Tipo\r\n            </div>\r\n            <select class=\"ui dropdown\" name=\"tipoDrop\" [(ngModel)]=\"newPdf.tipo\" ngControl=\"tipo\" (ngModelChange)=\"onChangeDropModal()\" required>\r\n              <option value=\"0\" >END</option>\r\n              <option value=\"1\">NR 13</option>\r\n              <option value=\"2\">Outros</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"ui labeled input\" *ngIf=\"subtipoRenderModal\" >\r\n            <div class=\"ui label\">\r\n              SubTipo\r\n            </div>\r\n            <select class=\"ui dropdown\" name=\"subTipoDrop\"   [(ngModel)]=\"newPdf.subTipo\" ngControl=\"subtipo\" required>\r\n              <option value=\"0\" hidden>Prontuário</option>\r\n              <option value=\"1\">Relatório de Inspeção</option>\r\n              <option value=\"2\">Livro de Registro</option>\r\n              <option value=\"3\">Projeto de Instalação</option>\r\n              <option value=\"4\">Calibração</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"field\">\r\n          <input #fileInput type=\"file\" ngControl=\"pdfFile\" (change)=\"uploadPdfService.fileChangeEvent($event)\"/>\r\n        </div>\r\n        <hr>\r\n        <br>\r\n        <button type=\"submit\" class=\"ui button\" [disabled]=\"(!uploadPdfService.fileIsInside || !addPdfForm.form.valid )\">Salvar</button>\r\n      </form>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button #fechar type=\"button\" class=\"btn btn-default\" (click)=\"modalNova.hide()\">Fechar</button>\r\n  </div>\r\n\r\n</app-modal-lg>\r\n\r\n\r\n<app-modal-lg #modalEditar>\r\n  <div class=\"app-modal-header\">\r\n    Editar Inspeção\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n\r\n    <div class=\"container\">\r\n      <form *ngIf=\"!pdfAdded\" class=\"ui form\" (ngSubmit)=\"saveEdicao()\" #edicaofForm = \"ngForm\">\r\n        <h2 class=\"ui dividing header\">Editar Inspeção</h2>\r\n        <div class=\"field\">\r\n        </div>\r\n        <div class=\"field\">\r\n          <label>Descrição</label>\r\n          <div class=\"field\">\r\n            <input type=\"text\" name=\"Description\" placeholder=\"Descrição\" [(ngModel)]=\"newPdf.description\" ngControl=\"description\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"three fields\">\r\n\r\n          <div class=\"ui labeled input\">\r\n            <div class=\"ui label\">\r\n              Ano\r\n            </div>\r\n            <select class=\"ui dropdown\"  name=\"anoDrop\"  [(ngModel)]=\"newPdf.ano\" ngControl=\"ano\" required>\r\n              <option value=\"0\">2014</option>\r\n              <option value=\"1\">2015</option>\r\n              <option value=\"2\">2016</option>\r\n              <option value=\"3\">2017</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"ui labeled input\">\r\n            <div class=\"ui label\">\r\n              Tipo\r\n            </div>\r\n            <select class=\"ui dropdown\" name=\"tipoDrop\" [(ngModel)]=\"newPdf.tipo\" ngControl=\"tipo\" (ngModelChange)=\"onChangeDropModal()\" required>\r\n              <option value=\"0\" >END</option>\r\n              <option value=\"1\">NR 13</option>\r\n              <option value=\"2\">Outros</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"ui labeled input\" *ngIf=\"subtipoRenderModal\" >\r\n            <div class=\"ui label\">\r\n              SubTipo\r\n            </div>\r\n            <select class=\"ui dropdown\" name=\"subTipoDrop\" [(ngModel)]=\"newPdf.subTipo\" ngControl=\"subtipo\" required>\r\n              <option value=\"0\" hidden>Prontuário</option>\r\n              <option value=\"1\">Relatório de Inspeção</option>\r\n              <option value=\"2\">Livro de Registro</option>\r\n              <option value=\"3\">Projeto de Instalação</option>\r\n              <option value=\"4\">Calibração</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <div class=\"field\">\r\n          <b> Arquivo Armazenado: </b>\r\n          <div class=\"ui label\">\r\n           {{arquivoAntigoNomeModalEditar}}\r\n         </div>\r\n       </div>\r\n       <div class=\"field\">\r\n        <b> Arquivo Novo: </b>\r\n        <div class=\"ui label\">\r\n         {{arquivoNovoNomeModalEditar}}\r\n       </div>\r\n     </div>\r\n\r\n     <div class=\"field\">\r\n      <button type=\"button\" id=\"file\" onclick=\"document.getElementById('fileHide').click();\">Substituir Arquivo</button>\r\n      <input #fileInputModal type=\"file\" style=\"display:none;\" id=\"fileHide\" name=\"file\" (change)=\"editarPdfModalFileChange($event)\" ngControl=\"pdfFile\"/>\r\n    </div>\r\n    <hr>\r\n    <br>\r\n\r\n    <button type=\"submit\" class=\"ui button\" [disabled]=\"(!edicaofForm.form.valid )\">Salvar</button>\r\n  </form>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"pdfAdded\">\r\n  <h1>Edição Salva Com Sucesso!</h1>\r\n</div>\r\n\r\n</div>\r\n<div class=\"app-modal-footer\">\r\n  <button #fechar type=\"button\" class=\"btn btn-default\" (click)=\"fecharModalEditar()\">Fechar</button>\r\n</div>\r\n\r\n</app-modal-lg>\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"existePdfAndNotAindaNaoBuscado()\">\r\n  <h1>Não existem Inspeções que atendam a esse critério de busca.</h1>\r\n</div>\r\n<div *ngIf=\"existePdfAndAindaNaoBuscado()\">\r\n  <h1>Realize uma busca para acessar as Inspeções.</h1>\r\n</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<div class='photo-list'>\r\n  <!-- <div *ngFor=\"#user of users\"> -->\r\n    <div *ngFor=\"let photo of photos\">\r\n      <div class=\"ui grid\">\r\n\r\n        <div class='two wide column'>\r\n        </div>\r\n\r\n        <div class='fourteen wide column'>\r\n          <div class=\"ui raised segment\">\r\n\r\n            <img src='http://localhost:8080/{{photo.imageName}}' class='ui image big centered' (click)=\"onSelect(photo)\" style=\"cursor: pointer\">\r\n\r\n            <div class=\"ui center aligned grid\">\r\n              <div class=\"column twelve wide\">\r\n                <div class=\"ui grid\">\r\n                  <div class=\"four column row\">\r\n                    <div class=\"left floated column left aligned\">\r\n                        <strong>{{photo.title}}</strong><br/>\r\n                        {{photo.description}}\r\n                    </div>\r\n                    <div class=\"right floated column right aligned\">\r\n                      {{photo.likes}} &nbsp; Likes\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <!-- </div> -->\r\n  </div>\r\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form *ngIf=\"!registered\" class=\"ui form\" (ngSubmit)=\"onSubmit()\" #registerForm = \"ngForm\">\r\n    <h2 class=\"ui dividing header\">Registrar Usuário</h2>\r\n    <div class=\"field\">\r\n      <label>* Nome</label>\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <input type=\"text\" name=\"firstName\" placeholder=\"Nome\" [(ngModel)]=\"newUser.firstName\" ngControl=\"firstName\" required>\r\n        </div>\r\n        <div class=\"field\">\r\n          <input type=\"text\" name=\"lastName\" placeholder=\"Sobrenome\" [(ngModel)]=\"newUser.lastName\" ngControl=\"lastName\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n       <div class=\"ui labeled input\" >\r\n        <div class=\"ui label\">\r\n          Empresa\r\n        </div>\r\n        <select class=\"ui dropdown\" name=\"empresa\"   [(ngModel)]=\"newUser.empresa\" ngControl=\"empresa\" required>\r\n          <option></option>\r\n          <option *ngFor=\"let emp of empresas\" [ngValue]=\"emp\">{{emp.empresaFantasyName}}</option>\r\n        </select>\r\n        <button type=\"button\" class=\"ui button\" (click)=\"modalEmpresa.show()\" >Adicionar</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <div>\r\n          <input type=\"checkbox\" [checked]=\"newUser.isAdmin\" (change)=\"newUser.isAdmin = !newUser.isAdmin\" />\r\n          Administrador\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n          <app-modal #modalEmpresa>\r\n              <div class=\"app-modal-header\">\r\n              Adicionar Empresas.\r\n              </div>\r\n              <div class=\"app-modal-body\">\r\n\r\n\r\n\r\n                <div class=\"container\">\r\n              <form class=\"ui form\" #empresaForm = \"ngForm\">\r\n                <h2 class=\"ui dividing header\">Registrar Empresa</h2>\r\n                <div class=\"field\">\r\n                  <label>* Nome</label>\r\n                  <div class=\"two fields\">\r\n                    <div class=\"field\">\r\n                      <input type=\"text\" name=\"empresaFantasyName\" placeholder=\"Nome Fantasia\" [(ngModel)]=\"newEmpresa.empresaFantasyName\" ngControl=\"empresaFantasyName\" required>\r\n                    </div>\r\n                    <div class=\"field\">\r\n                      <input type=\"text\" name=\"empresaName\" placeholder=\"Nome Real\" [(ngModel)]=\"newEmpresa.empresaName\" ngControl=\"empresaName\" required>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                \r\n              </form>\r\n              </div>\r\n\r\n\r\n\r\n              </div>\r\n              <div class=\"app-modal-footer\">\r\n                            <button type=\"button\" class=\"ui button\" (click)=\"salvarEmpresa()\" [disabled]=\"!empresaForm.form.valid\" >Salvar</button>\r\n              \r\n              <button #cancelar type=\"button\" class=\"btn btn-default\" (click)=\"modalEmpresa.hide()\">Cancelar</button>\r\n\r\n\r\n\r\n              </div>\r\n            </app-modal>\r\n\r\n\r\n\r\n    <div class=\"field\">\r\n      <label>* Login/Senha</label>\r\n      <div class=\"three fields\">\r\n        <div class=\"field\">\r\n          <input type=\"text\" name=\"userName\" placeholder=\"Login\" [(ngModel)]=\"newUser.userName\" ngControl=\"userName\" required>\r\n        </div>\r\n        <div class=\"field\">\r\n          <input type=\"password\" name=\"password\" placeholder=\"Senha\" [(ngModel)]=\"newUser.password\" ngControl=\"password1\" required>\r\n        </div>\r\n        <div class=\"field\">\r\n          <input type=\"password\" name=\"password2\" placeholder=\"Senha Novamente\" ngControl=\"password2\" required>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"ui button\" [disabled]=\"!registerForm.form.valid\">Registrar</button>\r\n\r\n  </form>\r\n\r\n  <div *ngIf=\"registered\">\r\n    <h1>Usuário Registrado!</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form *ngIf=\"!testado\" class=\"ui form\" (ngSubmit)=\"onSubmit()\" #testeForm = \"ngForm\">\r\n  <h2 class=\"ui dividing header\">Testar</h2>\r\n  <div class=\"field\">\r\n    <label>* Frase</label>\r\n      <div class=\"field\">\r\n      <input type=\"text\" name=\"frase\" placeholder=\"Frase\" [(ngModel)]=\"newTeste.frase\" ngControl=\"frase\" required>\r\n      </div>\r\n\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"ui button\" [disabled]=\"!testeForm.form.valid\" >Testar</button>\r\n</form>\r\n\r\n<div *ngIf=\"testado\">\r\n  <h1>Testou com Successo!</h1>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "      <div class=\"container\">\r\n        <h2 class=\"ui dividing header\">Administrar Usuários</h2>\r\n        <br>\r\n\r\n        <div class=\"ui three column grid\">\r\n          <div class=\"ui labeled input\">\r\n            <div class=\"ui label\">\r\n              Nome\r\n            </div>\r\n            <input type=\"text\" name=\"Nome\" placeholder=\"Nome\" [(ngModel)]=\"userFilter\" ngControl=\"nome\" required>\r\n          </div>\r\n          <div *ngIf=\"loginService.userLogado.isSuperAdmin\" class=\"ui labeled input\" >\r\n              <div class=\"ui label\">\r\n                Empresa\r\n              </div>\r\n              <select  class=\"ui dropdown\" name=\"empresa\"  [(ngModel)]=\"empresaFilter\" ngControl=\"empresa\" required>\r\n                <option></option>\r\n                <option *ngFor=\"let emp of empresas\" [ngValue]=\"emp\">{{emp.empresaFantasyName}}</option>\r\n              </select>\r\n            </div>\r\n\r\n          <button type=\"button\" class=\"ui button\"  (click)=\"findUsers()\" >Buscar</button>\r\n          <button type=\"button\" class=\"ui button\" (click)=\"modalNovoOpen()\">Novo</button>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"three fields\">\r\n          <span *ngFor=\"let user of users\" >\r\n\r\n            <div class=\"ui segment\">    \r\n              <div class=\"column\">\r\n                <label> Usuário: {{user.userName}}  </label>\r\n              </div>\r\n              <div class=\"column\">\r\n                <label> Nome e Sobrenome: {{user.firstName}} {{user.lastName}} </label>\r\n              </div>\r\n              <div class=\"column\">\r\n                <label> Empresa: {{user.empresa.empresaFantasyName}}  </label>\r\n              </div>\r\n              <div class=\"column\">\r\n                <label> Tipo: {{user.isAdmin ? 'Administrador': 'Usuário'}}  </label>\r\n              </div>\r\n              <div class=\"column\">\r\n                <button  type=\"button\"  class=\"ui button\" (click)=\"openModalEdit(user)\"\r\n                title=\"Clique para editar.\"> <i class=\"edit icon\" ></i> \r\n              </button>\r\n              <button  type=\"button\"  class=\"ui button\" (click)=\"resetarSenha(user)\"\r\n              title=\"Clique para reiniciar a senha do Usuário.\"> <i class=\"refresh icon\" ></i> \r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </span>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <!-- #################### Início Modal User ########################## -->\r\n\r\n    <app-modal #modalNovo>\r\n      <div class=\"app-modal-header\">\r\n\r\n      </div>\r\n\r\n      <div class=\"app-modal-body\">\r\n\r\n        <div class=\"container\">\r\n          <form  class=\"ui form\" (ngSubmit)=\"saveNewUser(newUser.password)\" #registerForm = \"ngForm\">\r\n            <h2 class=\"ui dividing header\">Registrar Novo Usuário</h2>\r\n\r\n            <div class=\"field\">\r\n              <label>* Nome</label>\r\n              <div class=\"two fields\">\r\n                <div class=\"field\">\r\n                  <input type=\"text\" name=\"firstName\" placeholder=\"Nome\" [(ngModel)]=\"newUser.firstName\" ngControl=\"firstName\" required>\r\n                </div>\r\n                <div class=\"field\">\r\n                  <input type=\"text\" name=\"lastName\" placeholder=\"Sobrenome\" [(ngModel)]=\"newUser.lastName\" ngControl=\"lastName\" required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"loginService.userLogado.isSuperAdmin\" class=\"field\">\r\n             <div class=\"ui labeled input\" >\r\n              <div class=\"ui label\">\r\n                Empresa\r\n              </div>\r\n              <select  class=\"ui dropdown\" name=\"empresa\"  [(ngModel)]=\"newUser.empresa\" ngControl=\"empresa\" required>\r\n                <option></option>\r\n                <option *ngFor=\"let emp of empresas\" [ngValue]=\"emp\">{{emp.empresaFantasyName}}</option>\r\n              </select>\r\n              <button type=\"button\" class=\"ui button\" (click)=\"modalEmpresa.show()\" >Adicionar</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"field\">\r\n            <div>\r\n              <input type=\"checkbox\" [disabled]=\"newUser.isSuperAdmin\" [checked]=\"newUser.isAdmin\" (change)=\"newUser.isAdmin = !newUser.isAdmin\" />\r\n              Administrador\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"field\">\r\n            <label>* Login/Senha</label>\r\n            <div class=\"three fields\">\r\n              <div class=\"field\">\r\n                <input type=\"text\" name=\"userName\" placeholder=\"Login\" [(ngModel)]=\"newUser.userName\" ngControl=\"userName\" required>\r\n              </div>\r\n              <div class=\"field\">\r\n                <input type=\"password\" name=\"password\" placeholder=\"Senha\" [(ngModel)]=\"newUser.password\" ngControl=\"password1\" required>\r\n              </div>\r\n              <div class=\"field\">\r\n                <input type=\"password\" name=\"password2\" placeholder=\"Senha Novamente\" [(ngModel)]=\"passVerify\"   ngControl=\"password2\" required>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <button type=\"submit\" class=\"ui button\" [disabled]=\"!registerForm.form.valid\">Registrar</button>\r\n\r\n        </form>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"app-modal-footer\">\r\n      <button #cancelar type=\"button\" class=\"btn btn-default\" (click)=\"modalNovo.hide()\">Cancelar</button>\r\n    </div>\r\n  </app-modal>\r\n\r\n  <!-- #################### Fim Modal User ########################## -->\r\n\r\n  <!-- #################### Início Modal Empresa ########################## -->\r\n\r\n  <app-modal #modalEmpresa>\r\n    <div class=\"app-modal-header\">\r\n      Adicionar Empresas.\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <div class=\"container\">\r\n        <form class=\"ui form\" #empresaForm = \"ngForm\">\r\n          <h2 class=\"ui dividing header\">Registrar Empresa</h2>\r\n          <div class=\"field\">\r\n            <label>* Nome</label>\r\n            <div class=\"two fields\">\r\n              <div class=\"field\">\r\n                <input type=\"text\" name=\"empresaFantasyName\" placeholder=\"Nome Fantasia\" [(ngModel)]=\"newEmpresa.empresaFantasyName\" ngControl=\"empresaFantasyName\" required>\r\n              </div>\r\n              <div class=\"field\">\r\n                <input type=\"text\" name=\"empresaName\" placeholder=\"Nome Real\" [(ngModel)]=\"newEmpresa.empresaName\" ngControl=\"empresaName\" required>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button type=\"button\" class=\"ui button\" (click)=\"salvarEmpresa()\" [disabled]=\"!empresaForm.form.valid\" >Salvar</button>\r\n\r\n      <button #cancelarEmpresa type=\"button\" class=\"btn btn-default\" (click)=\"modalEmpresa.hide()\">Cancelar</button>\r\n    </div>\r\n  </app-modal>\r\n\r\n  <!-- #################### Fim Modal Empresa ########################## -->\r\n\r\n  <!-- #################### Início Modal User ########################## -->\r\n\r\n  <app-modal #modalEditar>\r\n    <div class=\"app-modal-header\">\r\n\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <div class=\"container\">\r\n        <form  class=\"ui form\" (ngSubmit)=\"salvarEdicao()\" #editarForm = \"ngForm\">\r\n          <h2 class=\"ui dividing header\">Editar Usuário</h2>\r\n          <div class=\"field\">\r\n            <label>* Nome</label>\r\n            <div class=\"two fields\">\r\n              <div class=\"field\">\r\n                <input type=\"text\" name=\"firstName\" placeholder=\"Nome\" [(ngModel)]=\"userEdit.firstName\" ngControl=\"firstName\" required>\r\n              </div>\r\n              <div class=\"field\">\r\n                <input type=\"text\" name=\"lastName\" placeholder=\"Sobrenome\" [(ngModel)]=\"userEdit.lastName\" ngControl=\"lastName\" required>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"ui button\" [disabled]=\"!editarForm.valid\">Salvar</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"app-modal-footer\">\r\n      <button #cancelar type=\"button\" class=\"btn btn-default\" (click)=\"modalEditar.hide()\">Cancelar</button>\r\n    </div>\r\n  </app-modal>\r\n\r\n  <!-- #################### Fim Modal User ########################## -->\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(439);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_host_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PdfService = (function () {
    function PdfService(http, hostService) {
        this.http = http;
        this.hostService = hostService;
    }
    PdfService.prototype.getPdfs = function () {
        var url = this.hostService.host + "rest/super/pdf/allPdfs";
        return this.http.get(url);
    };
    PdfService.prototype.getAllPdfs = function () {
        var tokenUrl1 = this.hostService.host + "rest/super/pdf/getAllPdfs";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(""), { headers: headers1 });
    };
    PdfService.prototype.getPdfById = function (pdfId) {
        var tokenUrl1 = this.hostService.host + "rest/simple/pdf/pdfId";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(pdfId), { headers: headers1 });
    };
    PdfService.prototype.downloadPdfPost = function (pdf) {
        var tokenUrl1 = this.hostService.host + "rest/simple/pdf/download/" + localStorage.getItem("currentUserName");
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(pdf), { method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].ArrayBuffer, headers: headers1 });
    };
    PdfService.prototype.getPdfsByUser = function (user) {
        var tokenUrl1 = this.hostService.host + "rest/simple/pdf/user";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(user), { headers: headers1 });
    };
    PdfService.prototype.getPdfsByEmpresaFantasyName = function (emprenaFantasyName) {
        var tokenUrl1 = this.hostService.host + "rest/admin/pdf/pdfsByEmpresaFantasyName";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(emprenaFantasyName), { headers: headers1 });
    };
    PdfService.prototype.getPdfsByFilter = function (pdfUserFilter) {
        var tokenUrl1 = this.hostService.host + "rest/simple/pdf/filter";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(pdfUserFilter), { headers: headers1 });
    };
    PdfService.prototype.updatePdf = function (pdf) {
        var tokenUrl1 = this.hostService.host + "rest/simple/pdf/update";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(pdf), { headers: headers1 });
    };
    PdfService.prototype.deletePdf = function (pdf) {
        var tokenUrl1 = this.hostService.host + "rest/simple/pdf/delete";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(pdf), { headers: headers1 });
    };
    PdfService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */]) === 'function' && _b) || Object])
    ], PdfService);
    return PdfService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Desenvolvimento/lagoon/frontend/src/pdf.service.js.map

/***/ })

},[771]);
//# sourceMappingURL=main.bundle.map