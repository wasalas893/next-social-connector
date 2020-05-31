webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/index/PostFeed.js":
/*!**************************************!*\
  !*** ./components/index/PostFeed.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NewPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewPost */ "./components/index/NewPost.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post */ "./components/index/Post.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PostFeed = /*#__PURE__*/function (_React$Component) {
  _inherits(PostFeed, _React$Component);

  var _super = _createSuper(PostFeed);

  function PostFeed() {
    var _this;

    _classCallCheck(this, PostFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      posts: [],
      text: "",
      image: "",
      isAddingPost: false,
      isDeletingPost: false
    });

    _defineProperty(_assertThisInitialized(_this), "getPosts", function () {
      var auth = _this.props.auth;
      Object(_lib_api__WEBPACK_IMPORTED_MODULE_5__["getPostFeed"])(auth.user._id).then(function (posts) {
        return _this.setState({
          posts: posts
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var inputValue;

      if (event.target.name === "image") {
        inputValue = event.target.files[0];
      } else {
        inputValue = event.target.value;
      }

      _this.postData.set(event.target.name, inputValue);

      _this.setState(_defineProperty({}, event.target.name, inputValue));
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddPost", function () {
      var auth = _this.props.auth;

      _this.setState({
        isAddingPost: true
      });

      Object(_lib_api__WEBPACK_IMPORTED_MODULE_5__["addPost"])(auth.user._id, _this.postData).then(function (postData) {
        var updatedPosts = [postData].concat(_toConsumableArray(_this.state.posts));

        _this.setState({
          posts: updatedPosts,
          isAddingPost: false,
          text: "",
          image: ""
        });

        _this.postData.delete('image');
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          isAddingPost: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeletePost", function (deletedPost) {
      _this.setState({
        isDeletingPost: true
      });

      Object(_lib_api__WEBPACK_IMPORTED_MODULE_5__["deletePost"])(deletedPost._id).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id == postData._id;
        });

        var updatePosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), _toConsumableArray(_this.state.posts.splice(postIndex + 1)));

        _this.setState({
          posts: updatePosts,
          isDeletingPost: false
        });
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          isDeletingPost: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleLike", function (post) {
      var auth = _this.props.auth;
      var isPostLiked = post.likes.includes(auth.user._id);
      var sendRequest = isPostLiked ? _lib_api__WEBPACK_IMPORTED_MODULE_5__["unlikePost"] : _lib_api__WEBPACK_IMPORTED_MODULE_5__["likePost"];
      send;
    });

    return _this;
  }

  _createClass(PostFeed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.postData = new FormData();
      this.getPosts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          auth = _this$props.auth;
      var _this$state = this.state,
          posts = _this$state.posts,
          text = _this$state.text,
          image = _this$state.image,
          isAddingPost = _this$state.isAddingPost,
          isDeletingPost = _this$state.isDeletingPost;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
        variant: "h4",
        component: "h1",
        align: "center",
        color: "primary",
        className: classes.title
      }, "Post Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
        auth: auth,
        text: text,
        image: image,
        isAddingPost: isAddingPost,
        handleChange: this.handleChange,
        handleAddPost: this.handleAddPost
      }), posts.map(function (post) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: post._id,
          auth: auth,
          post: post,
          isDeletingPost: isDeletingPost,
          handleDeletePost: _this2.handleDeletePost,
          handleToggleLike: _this2.handleToggleLike
        });
      }));
    }
  }]);

  return PostFeed;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var styles = function styles(theme) {
  return {
    root: {
      paddingBottom: theme.spacing.unit * 2
    },
    title: {
      padding: theme.spacing.unit * 2
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(styles)(PostFeed));

/***/ })

})
//# sourceMappingURL=index.js.87fdf88d2a0f974e2a39.hot-update.js.map