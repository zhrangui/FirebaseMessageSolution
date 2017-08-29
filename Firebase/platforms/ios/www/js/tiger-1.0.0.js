/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./www/src/main.ts ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar notification_1 = __webpack_require__(/*! ./notification */ 1);\nnew notification_1.default();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3d3dy9zcmMvbWFpbi50cz9mYWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuXG5uZXcgTm90aWZpY2F0aW9uKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvc3JjL21haW4udHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./www/src/notification.ts ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Notification = (function () {\n    function Notification() {\n        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);\n    }\n    Notification.prototype.onDeviceReady = function () {\n        window.FirebasePlugin.getToken(function (token) {\n            // save this server-side and use it to push notifications to this device\n            console.log(token);\n        }, function (error) {\n            console.error(error);\n        });\n        window.FirebasePlugin.onTokenRefresh(function (token) {\n            // save this server-side and use it to push notifications to this device\n            console.log(token);\n        }, function (error) {\n            console.error(error);\n        });\n        window.FirebasePlugin.hasPermission(function (data) {\n            if (!data.isEnabled) {\n                window.FirebasePlugin.grantPermission();\n            }\n        });\n        window.FirebasePlugin.subscribe('TD');\n        window.FirebasePlugin.onNotificationOpen(function (notification) {\n            var notificationbtn = document.querySelector('#notification-button');\n            notificationbtn.textContent = JSON.stringify(notification);\n        }, function (error) {\n            console.error(error);\n        });\n    };\n    return Notification;\n}());\nexports.default = Notification;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3d3dy9zcmMvbm90aWZpY2F0aW9uLnRzP2JhNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2ZpcmViYXNlLmNvbmZpZyc7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgdGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EZXZpY2VSZWFkeSgpIHtcbiAgICB3aW5kb3cuRmlyZWJhc2VQbHVnaW4uZ2V0VG9rZW4oKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIHNhdmUgdGhpcyBzZXJ2ZXItc2lkZSBhbmQgdXNlIGl0IHRvIHB1c2ggbm90aWZpY2F0aW9ucyB0byB0aGlzIGRldmljZVxuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuRmlyZWJhc2VQbHVnaW4ub25Ub2tlblJlZnJlc2goKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIHNhdmUgdGhpcyBzZXJ2ZXItc2lkZSBhbmQgdXNlIGl0IHRvIHB1c2ggbm90aWZpY2F0aW9ucyB0byB0aGlzIGRldmljZVxuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG4gICAgd2luZG93LkZpcmViYXNlUGx1Z2luLmhhc1Blcm1pc3Npb24oKGRhdGEpID0+IHtcbiAgICAgIGlmICghZGF0YS5pc0VuYWJsZWQpIHtcbiAgICAgICAgd2luZG93LkZpcmViYXNlUGx1Z2luLmdyYW50UGVybWlzc2lvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2luZG93LkZpcmViYXNlUGx1Z2luLnN1YnNjcmliZSgnVEQnKTtcbiAgICB3aW5kb3cuRmlyZWJhc2VQbHVnaW4ub25Ob3RpZmljYXRpb25PcGVuKChub3RpZmljYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbmJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmljYXRpb24tYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICBub3RpZmljYXRpb25idG4udGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShub3RpZmljYXRpb24pO1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9zcmMvbm90aWZpY2F0aW9uLnRzIl0sIm1hcHBpbmdzIjoiOztBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);