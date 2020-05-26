webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./components/profile/FollowUser.js":
/*!******************************************!*\
  !*** ./components/profile/FollowUser.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");




var FollowUser = function FollowUser(_ref) {
  var isFollowing = _ref.isFollowing;
  var request = isFollowing ? _lib_api__WEBPACK_IMPORTED_MODULE_2__["unfollowUser"] : _lib_api__WEBPACK_IMPORTED_MODULE_2__["followUser"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "primary",
    onClick: true
  }, "Follow");
};

/* harmony default export */ __webpack_exports__["default"] = (FollowUser);

/***/ })

})
//# sourceMappingURL=profile.js.e07fd77bbb67cee58b10.hot-update.js.map