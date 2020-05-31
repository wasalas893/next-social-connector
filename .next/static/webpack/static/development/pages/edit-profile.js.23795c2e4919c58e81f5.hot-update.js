webpackHotUpdate("static\\development\\pages\\edit-profile.js",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getUser, followUser, unfollowUser, deleteUser, getAuthUser, updateUser, getUserFeed, addPost, getPostFeed, deletePost, likePost, unlikePost, addComment, deleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUser", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowUser", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUser", function() { return getAuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFeed", function() { return getUserFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostFeed", function() { return getPostFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePost", function() { return likePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikePost", function() { return unlikePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId) {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/profile/".concat(userId));

          case 2:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
var followUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(followId) {
    var _yield$axios$put, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/users/follow', {
              followId: followId
            });

          case 2:
            _yield$axios$put = _context2.sent;
            data = _yield$axios$put.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function followUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var unfollowUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(followId) {
    var _yield$axios$put2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/users/unfollow', {
              followId: followId
            });

          case 2:
            _yield$axios$put2 = _context3.sent;
            data = _yield$axios$put2.data;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function unfollowUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(authUserId) {
    var _yield$axios$delete, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/users/".concat(authUserId));

          case 2:
            _yield$axios$delete = _context4.sent;
            data = _yield$axios$delete.data;
            return _context4.abrupt("return", data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUser(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getAuthUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(authUserId) {
    var _yield$axios$get2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/".concat(authUserId));

          case 2:
            _yield$axios$get2 = _context5.sent;
            data = _yield$axios$get2.data;
            return _context5.abrupt("return", data);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getAuthUser(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var updateUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(authUserId, userData) {
    var _yield$axios$put3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/".concat(authUserId), userData);

          case 2:
            _yield$axios$put3 = _context6.sent;
            data = _yield$axios$put3.data;
            return _context6.abrupt("return", data);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateUser(_x6, _x7) {
    return _ref6.apply(this, arguments);
  };
}();
var getUserFeed = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(authUserId) {
    var _yield$axios$get3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/feed/".concat(authUserId));

          case 2:
            _yield$axios$get3 = _context7.sent;
            data = _yield$axios$get3.data;
            return _context7.abrupt("return", data);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getUserFeed(_x8) {
    return _ref7.apply(this, arguments);
  };
}();
var addPost = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(authUserId, post) {
    var _yield$axios$post, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/posts/new/".concat(authUserId), post);

          case 2:
            _yield$axios$post = _context8.sent;
            data = _yield$axios$post.data;
            return _context8.abrupt("return", data);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function addPost(_x9, _x10) {
    return _ref8.apply(this, arguments);
  };
}();
var getPostFeed = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(authUserId) {
    var _yield$axios$get4, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/posts/feed/".concat(authUserId));

          case 2:
            _yield$axios$get4 = _context9.sent;
            data = _yield$axios$get4.data;
            return _context9.abrupt("return", data);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getPostFeed(_x11) {
    return _ref9.apply(this, arguments);
  };
}();
var deletePost = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(postId) {
    var _yield$axios$delete2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/posts/".concat(postId));

          case 2:
            _yield$axios$delete2 = _context10.sent;
            data = _yield$axios$delete2.data;
            return _context10.abrupt("return", data);

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function deletePost(_x12) {
    return _ref10.apply(this, arguments);
  };
}();
var likePost = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(postId) {
    var _yield$axios$put4, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/like", {
              postId: postId
            });

          case 2:
            _yield$axios$put4 = _context11.sent;
            data = _yield$axios$put4.data;
            return _context11.abrupt("return", data);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function likePost(_x13) {
    return _ref11.apply(this, arguments);
  };
}();
var unlikePost = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(postId) {
    var _yield$axios$put5, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/unlike", {
              postId: postId
            });

          case 2:
            _yield$axios$put5 = _context12.sent;
            data = _yield$axios$put5.data;
            return _context12.abrupt("return", data);

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function unlikePost(_x14) {
    return _ref12.apply(this, arguments);
  };
}();
var addComment = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(postId, comment) {
    var _yield$axios$put6, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/posts/comment', {
              postId: postId,
              comment: comment
            });

          case 2:
            _yield$axios$put6 = _context13.sent;
            data = _yield$axios$put6.data;
            return _context13.abrupt("return", data);

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function addComment(_x15, _x16) {
    return _ref13.apply(this, arguments);
  };
}();
var deleteComment = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(postId, comment) {
    var _yield$axios$put7, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/posts/uncomment', {
              postId: postId,
              comment: comment
            });

          case 2:
            _yield$axios$put7 = _context14.sent;
            data = _yield$axios$put7.data;
            return _context14.abrupt("return", data);

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function deleteComment(_x17, _x18) {
    return _ref14.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=edit-profile.js.23795c2e4919c58e81f5.hot-update.js.map