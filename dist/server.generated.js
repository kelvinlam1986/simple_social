module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Users = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Signup = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _Signin = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n\nvar _Signin2 = _interopRequireDefault(_Signin);\n\nvar _Profile = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _EditProfile = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n\nvar _EditProfile2 = _interopRequireDefault(_EditProfile);\n\nvar _PrivateRoute = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n\nvar _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);\n\nvar _Menu = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainRouter = function (_Component) {\n    _inherits(MainRouter, _Component);\n\n    function MainRouter() {\n        _classCallCheck(this, MainRouter);\n\n        return _possibleConstructorReturn(this, (MainRouter.__proto__ || Object.getPrototypeOf(MainRouter)).apply(this, arguments));\n    }\n\n    _createClass(MainRouter, [{\n        key: 'componentDidMount',\n\n\n        // Removes the server-side injected css when React component mounts\n        value: function componentDidMount() {\n            var jssStyles = document.getElementById('jss-server-side');\n            if (jssStyles && jssStyles.parentNode) {\n                jssStyles.parentNode.removeChild(jssStyles);\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Menu2.default, null),\n                _react2.default.createElement(\n                    _reactRouterDom.Switch,\n                    null,\n                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),\n                    _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _Users2.default }),\n                    _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _Signup2.default }),\n                    _react2.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _Signin2.default }),\n                    _react2.default.createElement(_PrivateRoute2.default, { path: '/user/edit/:userId', component: _EditProfile2.default }),\n                    _react2.default.createElement(_reactRouterDom.Route, { path: '/user/:userId', component: _Profile2.default })\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return MainRouter;\n}(_react.Component);\n\nvar _default = MainRouter;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(MainRouter, 'MainRouter', 'D:/simple_social/client/MainRouter.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/MainRouter.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/assets/images/profile-pic.png":
/*!**********************************************!*\
  !*** ./client/assets/images/profile-pic.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1f9c6f37e3fb05375c94e587cc503ef7.png\";\n\n//# sourceURL=webpack:///./client/assets/images/profile-pic.png?");

/***/ }),

/***/ "./client/assets/images/seashell.jpg":
/*!*******************************************!*\
  !*** ./client/assets/images/seashell.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c6fc97f3fb6ea0d30afd3cbfe46239a2.jpg\";\n\n//# sourceURL=webpack:///./client/assets/images/seashell.jpg?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n    var Component = _ref.component,\n        rest = _objectWithoutProperties(_ref, ['component']);\n\n    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {\n            return _authHelper2.default.isAuthenticated() ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {\n                    pathname: '/signin',\n                    state: { from: props.location }\n                } });\n        } }));\n};\n\nvar _default = PrivateRoute;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(PrivateRoute, 'PrivateRoute', 'D:/simple_social/client/auth/PrivateRoute.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/auth/PrivateRoute.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ \"@material-ui/core/CardHeader\");\n\nvar _CardHeader2 = _interopRequireDefault(_CardHeader);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.js\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n    return {\n        title: {\n            marginTop: theme.spacing.unit * 2,\n            color: theme.palette.text.secondary\n        },\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            marginTop: theme.spacing.unit * 5\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        }\n    };\n};\n\nvar SignIn = function (_Component) {\n    _inherits(SignIn, _Component);\n\n    function SignIn(props) {\n        _classCallCheck(this, SignIn);\n\n        var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n        _this.clickSubmit = function () {\n            var user = {\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n\n            (0, _apiAuth.signin)(user).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _authHelper2.default.authenticate(data, function () {\n                        _this.setState({ redirectToReferer: true });\n                    });\n                }\n            });\n        };\n\n        _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        };\n\n        _this.state = { email: '', password: '', error: '', redirectToReferer: false };\n        return _this;\n    }\n\n    _createClass(SignIn, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            var _ref = this.props.location.state || {\n                from: {\n                    pathname: '/'\n                }\n            },\n                from = _ref.from;\n\n            var redirectToReferer = this.state.redirectToReferer;\n\n            if (redirectToReferer) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n            }\n\n            return _react2.default.createElement(\n                _Card2.default,\n                { className: classes.card },\n                _react2.default.createElement(_CardHeader2.default, { title: 'Sign In' }),\n                _react2.default.createElement(\n                    _CardContent2.default,\n                    null,\n                    _react2.default.createElement(_TextField2.default, { id: 'email', label: 'Email',\n                        type: 'email',\n                        className: classes.textField,\n                        onChange: this.handleChange('email'),\n                        value: this.state.email,\n                        margin: 'normal' }),\n                    ' ',\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'password', label: 'Password',\n                        type: 'password',\n                        className: classes.textField,\n                        onChange: this.handleChange('password'),\n                        value: this.state.password,\n                        margin: 'normal' }),\n                    ' ',\n                    _react2.default.createElement('br', null),\n                    this.state.error && _react2.default.createElement(\n                        _Typography2.default,\n                        { component: 'p', color: 'error' },\n                        _react2.default.createElement(\n                            _Icon2.default,\n                            { color: 'error', className: classes.error },\n                            'error'\n                        ),\n                        this.state.error\n                    )\n                ),\n                _react2.default.createElement(\n                    _CardActions2.default,\n                    null,\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { color: 'primary', variant: 'contained', onClick: this.clickSubmit, className: classes.submit },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return SignIn;\n}(_react.Component);\n\nvar _default = (0, _styles.withStyles)(styles)(SignIn);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', 'D:/simple_social/client/auth/Signin.js');\n    reactHotLoader.register(SignIn, 'SignIn', 'D:/simple_social/client/auth/Signin.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/auth/Signin.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar signin = function signin(user) {\n    return fetch('/auth/signin', {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        credentials: 'include',\n        body: JSON.stringify(user)\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar signout = function signout() {\n    return fetch('/auth/signout', {\n        method: 'GET'\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nexports.signin = signin;\nexports.signout = signout;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(signin, 'signin', 'D:/simple_social/client/auth/api-auth.js');\n    reactHotLoader.register(signout, 'signout', 'D:/simple_social/client/auth/api-auth.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.js\");\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar auth = {\n    authenticate: function authenticate(jwt, cb) {\n        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {\n            sessionStorage.setItem('jwt', JSON.stringify(jwt));\n        }\n\n        cb();\n    },\n    isAuthenticated: function isAuthenticated() {\n        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == undefined) {\n            return false;\n        }\n\n        if (sessionStorage.getItem('jwt')) {\n            return JSON.parse(sessionStorage.getItem('jwt'));\n        } else {\n            return false;\n        }\n    },\n    signout: function signout(cb) {\n        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {\n            sessionStorage.removeItem('jwt');\n        }\n\n        cb();\n\n        (0, _apiAuth.signout)().then(function (data) {\n            document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n        });\n    }\n};\n\nvar _default = auth;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(auth, 'auth', 'D:/simple_social/client/auth/auth-helper.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/auth/auth-helper.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n\nvar _CardMedia2 = _interopRequireDefault(_CardMedia);\n\nvar _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ \"@material-ui/core/CardHeader\");\n\nvar _CardHeader2 = _interopRequireDefault(_CardHeader);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _seashell = __webpack_require__(/*! ./../assets/images/seashell.jpg */ \"./client/assets/images/seashell.jpg\");\n\nvar _seashell2 = _interopRequireDefault(_seashell);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            marginTop: theme.spacing.unit * 5\n        },\n        title: {\n            padding: theme.spacing.unit * 3 + 'px\\t' + theme.spacing.unit * 2.5 + 'px\\t\\n        ' + theme.spacing.unit * 2 + 'px',\n            color: theme.palette.text.secondary\n        },\n        media: {\n            minHeight: 330\n        }\n\n    };\n};\n\nvar Home = function (_Component) {\n    _inherits(Home, _Component);\n\n    function Home() {\n        _classCallCheck(this, Home);\n\n        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n    }\n\n    _createClass(Home, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            return _react2.default.createElement(\n                _Card2.default,\n                { className: classes.card },\n                _react2.default.createElement(_CardHeader2.default, { title: 'Home Page' }),\n                _react2.default.createElement(_CardMedia2.default, { className: classes.media,\n                    image: _seashell2.default,\n                    title: 'Home page' }),\n                _react2.default.createElement(\n                    _CardContent2.default,\n                    null,\n                    _react2.default.createElement(\n                        _Typography2.default,\n                        { type: 'body1', component: 'p' },\n                        'Welcome to the MERN Skeleton home page.'\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Home;\n}(_react.Component);\n\nHome.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Home);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', 'D:/simple_social/client/core/Home.js');\n    reactHotLoader.register(Home, 'Home', 'D:/simple_social/client/core/Home.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/core/Home.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Home = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar isActive = function isActive(history, path) {\n    if (history.location.pathname === path) {\n        return { color: '#ff4081' };\n    } else {\n        return { color: '#ffffff' };\n    }\n};\n\nvar Menu = (0, _reactRouterDom.withRouter)(function (_ref) {\n    var history = _ref.history;\n    return _react2.default.createElement(\n        _AppBar2.default,\n        { position: 'static' },\n        _react2.default.createElement(\n            _Toolbar2.default,\n            null,\n            _react2.default.createElement(\n                _Typography2.default,\n                { type: 'title', color: 'inherit' },\n                'MERN Skeleton'\n            ),\n            _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    null,\n                    _react2.default.createElement(_Home2.default, null)\n                )\n            ),\n            _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/users' },\n                _react2.default.createElement(\n                    _Button2.default,\n                    { style: isActive(history, '/users') },\n                    'Users'\n                )\n            ),\n            !_authHelper2.default.isAuthenticated() && _react2.default.createElement(\n                'span',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/signup' },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { style: isActive(history, '/signup') },\n                        'Sign Up'\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/signin' },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { style: isActive(history, '/signin') },\n                        'Sign In'\n                    )\n                )\n            ),\n            _authHelper2.default.isAuthenticated() && _react2.default.createElement(\n                'span',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: \"/user/\" + _authHelper2.default.isAuthenticated().user._id },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { style: isActive(history, '/user/' + _authHelper2.default.isAuthenticated().user._id) },\n                        'My Profile'\n                    )\n                ),\n                _react2.default.createElement(\n                    _Button2.default,\n                    { color: 'inherit', onClick: function onClick() {\n                            _authHelper2.default.signout(function () {\n                                return history.push('/');\n                            });\n                        } },\n                    'Sign Out'\n                )\n            )\n        )\n    );\n});\n\nvar _default = Menu;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(isActive, 'isActive', 'D:/simple_social/client/core/Menu.js');\n    reactHotLoader.register(Menu, 'Menu', 'D:/simple_social/client/core/Menu.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/core/Menu.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _authHelper = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DeleteUser = function (_Component) {\n    _inherits(DeleteUser, _Component);\n\n    function DeleteUser(props) {\n        _classCallCheck(this, DeleteUser);\n\n        var _this = _possibleConstructorReturn(this, (DeleteUser.__proto__ || Object.getPrototypeOf(DeleteUser)).call(this, props));\n\n        _this.clickButton = function () {\n            _this.setState({ open: true });\n        };\n\n        _this.deleteAccount = function () {\n            var jwt = _authHelper2.default.isAuthenticated();\n            (0, _apiUser.remove)({\n                userId: _this.props.userId\n            }, { t: jwt.token }).then(function (data) {\n                if (data.error) {\n                    console.log(data.error);\n                } else {\n                    _authHelper2.default.signout(function () {\n                        return console.log('deleted');\n                    });\n                    _this.setState({ redirect: true });\n                }\n            });\n        };\n\n        _this.handleRequestClose = function () {\n            _this.setState({ open: false });\n        };\n\n        _this.state = {\n            redirect: false,\n            open: false\n        };\n        return _this;\n    }\n\n    _createClass(DeleteUser, [{\n        key: 'render',\n        value: function render() {\n            var redirect = this.state.redirect;\n\n            if (redirect) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n            }\n\n            return _react2.default.createElement(\n                'span',\n                null,\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { 'aria-label': 'Delete', color: 'secondary', onClick: this.clickButton },\n                    _react2.default.createElement(_Delete2.default, null)\n                ),\n                _react2.default.createElement(\n                    _Dialog2.default,\n                    { open: this.state.open, onClose: this.handleRequestClose },\n                    _react2.default.createElement(\n                        _DialogTitle2.default,\n                        null,\n                        \"Delete Account\"\n                    ),\n                    _react2.default.createElement(\n                        _DialogContent2.default,\n                        null,\n                        _react2.default.createElement(\n                            _DialogContentText2.default,\n                            null,\n                            'Confirm to delete your Account'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _DialogActions2.default,\n                        null,\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { onClick: this.handleRequestClose, color: 'primary' },\n                            'Cancel'\n                        ),\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { color: 'secondary', onClick: this.deleteAccount, autoFocus: 'autoFocus' },\n                            'Confirm'\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return DeleteUser;\n}(_react.Component);\n\nvar _default = DeleteUser;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(DeleteUser, 'DeleteUser', 'D:/simple_social/client/user/DeleteUser.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/user/DeleteUser.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ \"@material-ui/core/CardHeader\");\n\nvar _CardHeader2 = _interopRequireDefault(_CardHeader);\n\nvar _icons = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n\nvar _authHelper = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            textAlign: 'center',\n            marginTop: theme.spacing.unit * 5,\n            paddingBottom: theme.spacing.unit * 2\n        },\n        title: {\n            marginTop: theme.spacing.unit * 2,\n            color: theme.palette.text.secondary\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        input: {\n            display: 'none'\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        },\n        filename: {\n            marginLeft: '10px'\n        }\n    };\n};\n\nvar EditProfile = function (_Component) {\n    _inherits(EditProfile, _Component);\n\n    function EditProfile(_ref) {\n        var _this$state;\n\n        var match = _ref.match;\n\n        _classCallCheck(this, EditProfile);\n\n        var _this = _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).call(this));\n\n        _this.componentDidMount = function () {\n            _this.userData = new FormData();\n            var jwt = _authHelper2.default.isAuthenticated();\n            (0, _apiUser.read)({ userId: _this.match.params.userId }, { t: jwt.token }).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _this.setState({ id: data._id, name: data.name, email: data.email, about: data.about });\n                }\n            });\n        };\n\n        _this.clickSubmit = function () {\n            var jwt = _authHelper2.default.isAuthenticated();\n            var user = {\n                name: _this.state.name || undefined,\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined,\n                about: _this.state.about || undefined\n            };\n\n            (0, _apiUser.update)({ userId: _this.match.params.userId }, { t: jwt.token }, _this.userData).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _this.setState({ userId: data._id, redirectToProfile: true });\n                }\n            });\n        };\n\n        _this.clickCancel = function () {\n            _this.setState({ redirectToUsers: true });\n        };\n\n        _this.handleChange = function (name) {\n            return function (event) {\n                var value = name === 'photo' ? event.target.files[0] : event.target.value;\n                _this.userData.set(name, value);\n                _this.setState(_defineProperty({}, name, value));\n            };\n        };\n\n        _this.state = (_this$state = {\n            name: '',\n            about: '',\n            photo: '',\n            userId: ''\n        }, _defineProperty(_this$state, 'name', ''), _defineProperty(_this$state, 'email', ''), _defineProperty(_this$state, 'password', ''), _defineProperty(_this$state, 'redirectToProfile', false), _defineProperty(_this$state, 'redirectToUsers', false), _defineProperty(_this$state, 'error', ''), _this$state);\n\n        _this.match = match;\n        return _this;\n    }\n\n    _createClass(EditProfile, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            if (this.state.redirectToProfile) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/user/' + this.state.userId });\n            }\n\n            if (this.state.redirectToUsers) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/users' });\n            }\n\n            return _react2.default.createElement(\n                _Card2.default,\n                { className: classes.card },\n                _react2.default.createElement(_CardHeader2.default, { title: 'Edit Profile' }),\n                _react2.default.createElement(\n                    _CardContent2.default,\n                    null,\n                    _react2.default.createElement('input', { accept: 'image/*', type: 'file',\n                        onChange: this.handleChange('photo'),\n                        className: classes.input,\n                        id: 'icon-button-file' }),\n                    _react2.default.createElement(\n                        'label',\n                        { htmlFor: 'icon-button-file' },\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { variant: 'contained', color: 'default', component: 'span' },\n                            'Upload',\n                            _react2.default.createElement(_icons.FileCopy, null)\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'label',\n                        null,\n                        _react2.default.createElement(\n                            'span',\n                            { className: classes.filename },\n                            this.state.photo ? this.state.photo.name : ''\n                        )\n                    ),\n                    ' ',\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name',\n                        className: classes.textField,\n                        value: this.state.name,\n                        onChange: this.handleChange('name'),\n                        margin: 'normal' }),\n                    ' ',\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'standard-multiline-flexible',\n                        label: 'About',\n                        multiline: true,\n                        rowsMax: '4',\n                        value: this.state.about,\n                        className: classes.textField,\n                        onChange: this.handleChange(\"about\") }),\n                    ' ',\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'email', label: 'Email',\n                        type: 'email',\n                        className: classes.textField,\n                        onChange: this.handleChange('email'),\n                        value: this.state.email,\n                        margin: 'normal' }),\n                    ' ',\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'password', label: 'Password',\n                        type: 'password',\n                        className: classes.textField,\n                        onChange: this.handleChange('password'),\n                        value: this.state.password,\n                        margin: 'normal' }),\n                    ' ',\n                    _react2.default.createElement('br', null),\n                    this.state.error && _react2.default.createElement(\n                        _Typography2.default,\n                        { component: 'p', color: 'error' },\n                        _react2.default.createElement(\n                            _Icon2.default,\n                            { color: 'error', className: classes.error },\n                            'error'\n                        ),\n                        this.state.error\n                    )\n                ),\n                _react2.default.createElement(\n                    _CardActions2.default,\n                    null,\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { color: 'primary', variant: 'contained', onClick: this.clickSubmit, className: classes.submit },\n                        'Submit'\n                    ),\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { color: 'secondary', variant: 'contained', onClick: this.clickCancel, className: classes.submit },\n                        'Cancel'\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return EditProfile;\n}(_react.Component);\n\n;\n\nEditProfile.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(EditProfile);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', 'D:/simple_social/client/user/EditProfile.js');\n    reactHotLoader.register(EditProfile, 'EditProfile', 'D:/simple_social/client/user/EditProfile.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/user/EditProfile.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/FollowProfileButton.js":
/*!********************************************!*\
  !*** ./client/user/FollowProfileButton.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FollowProfileButton = function (_Component) {\n    _inherits(FollowProfileButton, _Component);\n\n    function FollowProfileButton() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, FollowProfileButton);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FollowProfileButton.__proto__ || Object.getPrototypeOf(FollowProfileButton)).call.apply(_ref, [this].concat(args))), _this), _this.followClick = function () {\n            _this.props.onButtonClick(_apiUser.follow);\n        }, _this.unFollowClick = function () {\n            _this.props.onButtonClick(_apiUser.unfollow);\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(FollowProfileButton, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.props.following ? _react2.default.createElement(\n                    _Button2.default,\n                    { variant: 'contained', color: 'secondary', onClick: this.unfollowClick },\n                    'Unfollow'\n                ) : _react2.default.createElement(\n                    _Button2.default,\n                    { variant: 'contained', color: 'primary', onClick: this.followClick },\n                    'Follow'\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return FollowProfileButton;\n}(_react.Component);\n\nFollowProfileButton.propTypes = {\n    following: _propTypes2.default.bool.isRequired,\n    onButtonClick: _propTypes2.default.func.isRequired\n};\n\nvar _default = FollowProfileButton;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(FollowProfileButton, 'FollowProfileButton', 'D:/simple_social/client/user/FollowProfileButton.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/user/FollowProfileButton.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/FollowProfileButton.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nvar _ListItemAvatar = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n\nvar _ListItemAvatar2 = _interopRequireDefault(_ListItemAvatar);\n\nvar _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n\nvar _ListItemText2 = _interopRequireDefault(_ListItemText);\n\nvar _ListItemSecondaryAction = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n\nvar _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);\n\nvar _Person = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Divider = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Edit = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n\nvar _Edit2 = _interopRequireDefault(_Edit);\n\nvar _authHelper = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ../user/api-user */ \"./client/user/api-user.js\");\n\nvar _DeleteUser = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n\nvar _DeleteUser2 = _interopRequireDefault(_DeleteUser);\n\nvar _FollowProfileButton = __webpack_require__(/*! ./FollowProfileButton */ \"./client/user/FollowProfileButton.js\");\n\nvar _FollowProfileButton2 = _interopRequireDefault(_FollowProfileButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n    return {\n        root: theme.mixins.gutters({\n            maxWidth: 600,\n            margin: 'auto',\n            padding: theme.spacing.unit * 3,\n            marginTop: theme.spacing.unit * 5\n        }),\n        title: {\n            margin: theme.spacing.unit * 3 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n            color: theme.palette.protectedTitle\n        },\n        bigAvatar: {\n            width: 60,\n            height: 60,\n            margin: 10\n        }\n    };\n};\n\nvar Profile = function (_Component) {\n    _inherits(Profile, _Component);\n\n    function Profile(_ref) {\n        var match = _ref.match;\n\n        _classCallCheck(this, Profile);\n\n        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));\n\n        _this.init = function (userId) {\n            var jwt = _authHelper2.default.isAuthenticated();\n            (0, _apiUser.read)({ userId: userId }, { t: jwt.token }).then(function (data) {\n                if (data.error) {\n                    _this.setState({ redirectToSignIn: true });\n                } else {\n                    var following = _this.checkFollow(data);\n                    _this.setState({ user: data, following: following });\n                }\n            });\n        };\n\n        _this.checkFollow = function (user) {\n            var jwt = _authHelper2.default.isAuthenticated();\n            var match = user.followers.find(function (follower) {\n                return follower._id == jwt.user._id;\n            });\n        };\n\n        _this.componentDidMount = function () {\n            _this.init(_this.match.params.userId);\n        };\n\n        _this.componentWillReceiveProps = function (props) {\n            _this.init(props.match.params.userId);\n        };\n\n        _this.state = { user: null, redirectToSignIn: false, following: false };\n        _this.match = match;\n        return _this;\n    }\n\n    _createClass(Profile, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            var photoUrl = this.state.user ? '/api/users/photo/' + this.state.user._id + '?' + new Date().getTime() : '/api/users/defaultPhoto';\n            var redirectToSignIn = this.state.redirectToSignIn;\n            if (redirectToSignIn) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });\n            }\n\n            return _react2.default.createElement(\n                _Paper2.default,\n                { className: classes.root, elevation: 4 },\n                _react2.default.createElement(\n                    _Typography2.default,\n                    { type: 'title', className: classes.title },\n                    'Profile'\n                ),\n                this.state.user ? _react2.default.createElement(\n                    _List2.default,\n                    { dense: true },\n                    _react2.default.createElement(\n                        _ListItem2.default,\n                        null,\n                        _react2.default.createElement(\n                            _ListItemAvatar2.default,\n                            null,\n                            _react2.default.createElement(_Avatar2.default, { src: photoUrl, className: classes.bigAvatar })\n                        ),\n                        _react2.default.createElement(_ListItemText2.default, { primary: this.state.user.name, secondary: this.state.user.email }),\n                        _authHelper2.default.isAuthenticated().user && _authHelper2.default.isAuthenticated().user._id == this.state.user._id ? _react2.default.createElement(\n                            _ListItemSecondaryAction2.default,\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: \"/user/edit/\" + this.state.user._id },\n                                _react2.default.createElement(\n                                    _IconButton2.default,\n                                    { color: 'primary' },\n                                    _react2.default.createElement(_Edit2.default, null)\n                                )\n                            ),\n                            this.state.user && _react2.default.createElement(_DeleteUser2.default, { userId: this.state.user._id })\n                        ) : _react2.default.createElement(_FollowProfileButton2.default, { following: this.state.following,\n                            onButtonClick: this.clickFollowButton })\n                    ),\n                    _react2.default.createElement(_Divider2.default, null),\n                    _react2.default.createElement(\n                        _ListItem2.default,\n                        null,\n                        _react2.default.createElement(_ListItemText2.default, { primary: \"Joined: \" + new Date(this.state.user.created).toDateString() })\n                    ),\n                    _react2.default.createElement(\n                        _ListItem2.default,\n                        null,\n                        _react2.default.createElement(_ListItemText2.default, { primary: this.state.user.about })\n                    )\n                ) : null\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Profile;\n}(_react.Component);\n\nProfile.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Profile);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', 'D:/simple_social/client/user/Profile.js');\n    reactHotLoader.register(Profile, 'Profile', 'D:/simple_social/client/user/Profile.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/user/Profile.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ \"@material-ui/core/CardHeader\");\n\nvar _CardHeader2 = _interopRequireDefault(_CardHeader);\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            textAlign: 'center',\n            marginTop: theme.spacing.unit * 5,\n            paddingBottom: theme.spacing.unit * 2\n        },\n        title: {\n            marginTop: theme.spacing.unit * 2,\n            color: theme.palette.text.secondary\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        }\n    };\n};\n\nvar SignUp = function (_Component) {\n    _inherits(SignUp, _Component);\n\n    function SignUp(props) {\n        _classCallCheck(this, SignUp);\n\n        var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));\n\n        _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        };\n\n        _this.clickSubmit = function () {\n            var user = {\n                name: _this.state.name || undefined,\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n\n            (0, _apiUser.create)(user).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _this.setState({ error: '', open: true });\n                }\n            });\n        };\n\n        _this.state = { name: '', password: '', email: '', open: false, error: '' };\n        return _this;\n    }\n\n    _createClass(SignUp, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _Card2.default,\n                    { className: classes.card },\n                    _react2.default.createElement(_CardHeader2.default, { title: 'Sign Up' }),\n                    _react2.default.createElement(\n                        _CardContent2.default,\n                        null,\n                        _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name',\n                            className: classes.textField,\n                            value: this.state.name,\n                            onChange: this.handleChange('name'),\n                            margin: 'normal' }),\n                        ' ',\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(_TextField2.default, { id: 'email', label: 'Email',\n                            type: 'email',\n                            className: classes.textField,\n                            onChange: this.handleChange('email'),\n                            value: this.state.email,\n                            margin: 'normal' }),\n                        ' ',\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(_TextField2.default, { id: 'password', label: 'Password',\n                            type: 'password',\n                            className: classes.textField,\n                            onChange: this.handleChange('password'),\n                            value: this.state.password,\n                            margin: 'normal' }),\n                        ' ',\n                        _react2.default.createElement('br', null),\n                        this.state.error && _react2.default.createElement(\n                            _Typography2.default,\n                            { component: 'p', color: 'error' },\n                            _react2.default.createElement(\n                                _Icon2.default,\n                                { color: 'error', className: classes.error },\n                                'error'\n                            ),\n                            this.state.error\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _CardActions2.default,\n                        null,\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { color: 'primary', variant: 'contained', onClick: this.clickSubmit, className: classes.submit },\n                            'Submit'\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    _Dialog2.default,\n                    { open: this.state.open, disableBackdropClick: true },\n                    _react2.default.createElement(\n                        _DialogTitle2.default,\n                        null,\n                        'New Account'\n                    ),\n                    _react2.default.createElement(\n                        _DialogContent2.default,\n                        null,\n                        _react2.default.createElement(\n                            _DialogContentText2.default,\n                            null,\n                            'New account successfully created.'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _DialogActions2.default,\n                        null,\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/signin' },\n                            _react2.default.createElement(\n                                _Button2.default,\n                                { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n                                'Sign In'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return SignUp;\n}(_react.Component);\n\nSignUp.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(SignUp);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', 'D:/simple_social/client/user/Signup.js');\n    reactHotLoader.register(SignUp, 'SignUp', 'D:/simple_social/client/user/Signup.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/user/Signup.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nvar _ListItemAvatar = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n\nvar _ListItemAvatar2 = _interopRequireDefault(_ListItemAvatar);\n\nvar _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n\nvar _ListItemText2 = _interopRequireDefault(_ListItemText);\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _ListItemSecondaryAction = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n\nvar _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Person = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _ArrowForward = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"@material-ui/icons/ArrowForward\");\n\nvar _ArrowForward2 = _interopRequireDefault(_ArrowForward);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n    return {\n        root: theme.mixins.gutters({\n            padding: theme.spacing.unit,\n            margin: theme.spacing.unit * 5\n        }),\n        title: {\n            margin: theme.spacing.unit * 4 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n            color: theme.palette.openTitle\n        }\n    };\n};\n\nvar Users = function (_Component) {\n    _inherits(Users, _Component);\n\n    function Users() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Users);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args))), _this), _this.state = { user: [] }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Users, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            (0, _apiUser.list)().then(function (data) {\n                if (data.error) {\n                    console.log(data.error);\n                } else {\n                    _this2.setState({ users: data });\n                }\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n\n            return _react2.default.createElement(\n                _Paper2.default,\n                { className: classes.root, elevation: 4 },\n                _react2.default.createElement(\n                    _Typography2.default,\n                    { type: 'title', className: classes.title },\n                    'All Users'\n                ),\n                _react2.default.createElement(\n                    _List2.default,\n                    { dense: true },\n                    this.state.users !== undefined ? this.state.users.map(function (item, i) {\n                        return _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { key: item._id, to: \"/user/\" + item._id },\n                            _react2.default.createElement(\n                                _ListItem2.default,\n                                { button: true },\n                                _react2.default.createElement(\n                                    _ListItemAvatar2.default,\n                                    null,\n                                    _react2.default.createElement(\n                                        _Avatar2.default,\n                                        null,\n                                        _react2.default.createElement(_Person2.default, null)\n                                    )\n                                ),\n                                _react2.default.createElement(_ListItemText2.default, { primary: item.name }),\n                                _react2.default.createElement(\n                                    _ListItemSecondaryAction2.default,\n                                    null,\n                                    _react2.default.createElement(\n                                        _IconButton2.default,\n                                        null,\n                                        _react2.default.createElement(_ArrowForward2.default, null)\n                                    )\n                                )\n                            )\n                        );\n                    }) : null\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Users;\n}(_react.Component);\n\nUsers.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Users);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', 'D:/simple_social/client/user/Users.js');\n    reactHotLoader.register(Users, 'Users', 'D:/simple_social/client/user/Users.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/client/user/Users.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar create = function create(user) {\n    return fetch('/api/users', {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(user)\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar list = function list() {\n    return fetch('/api/users', {\n        method: 'GET'\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar read = function read(params, credentials) {\n    return fetch('/api/users/' + params.userId, {\n        method: 'GET',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        }\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar update = function update(params, credentials, user) {\n    return fetch('/api/users/' + params.userId, {\n        method: 'PUT',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        },\n        body: user\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar remove = function remove(params, credentials) {\n    return fetch('/api/users/' + params.userId, {\n        method: 'DELETE',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        }\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar follow = function follow(params, credentials, followId) {\n    return fetch('/api/users/follow', {\n        method: 'PUT',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        },\n        body: JSON.stringify({ userId: params.userId, followId: followId })\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar unfollow = function unfollow(params, credentials, unfollowId) {\n    return fetch('/api/users/unfollow', {\n        method: 'PUT',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        },\n        body: JSON.stringify({ userId: params.userId, unfollowId: unfollowId })\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\nexports.follow = follow;\nexports.unfollow = unfollow;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(create, 'create', 'D:/simple_social/client/user/api-user.js');\n    reactHotLoader.register(list, 'list', 'D:/simple_social/client/user/api-user.js');\n    reactHotLoader.register(read, 'read', 'D:/simple_social/client/user/api-user.js');\n    reactHotLoader.register(update, 'update', 'D:/simple_social/client/user/api-user.js');\n    reactHotLoader.register(remove, 'remove', 'D:/simple_social/client/user/api-user.js');\n    reactHotLoader.register(follow, 'follow', 'D:/simple_social/client/user/api-user.js');\n    reactHotLoader.register(unfollow, 'unfollow', 'D:/simple_social/client/user/api-user.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar config = {\n    env: \"development\" || 'development',\n    port: process.env.NODE_PORT || 3000,\n    jwtSecret: process.env.JWT_SECRET || 'kelvinlam1986',\n    mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n\n};\n\nvar _default = config;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(config, 'config', 'D:/simple_social/config/config.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/config/config.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar signin = function signin(req, res) {\n    _user2.default.findOne({\n        \"email\": req.body.email\n    }, function (err, user) {\n        if (err || !user) {\n            return res.status('401').json({\n                error: 'User not found'\n            });\n        }\n\n        if (!user.authenticate(req.body.password)) {\n            return res.status('401').send({\n                error: 'Email and password not match.'\n            });\n        }\n\n        var token = _jsonwebtoken2.default.sign({\n            _id: user._id\n        }, _config2.default.jwtSecret);\n\n        res.cookie(\"t\", token, {\n            expire: new Date() + 9999\n        });\n\n        return res.json({\n            token: token,\n            user: { _id: user._id, name: user.name, email: user.email }\n        });\n    });\n};\nvar signout = function signout(req, res) {\n    res.clearCookie(\"t\");\n    return res.status(200).json({\n        message: 'signed out'\n    });\n};\nvar requireSignin = (0, _expressJwt2.default)({\n    secret: _config2.default.jwtSecret,\n    userProperty: 'auth'\n});\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n    var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n    if (!authorized) {\n        return res.status(403).json({\n            error: 'User is not authorized'\n        });\n    }\n\n    next();\n};\n\nvar _default = { signin: signin, signout: signout, requireSignin: requireSignin, hasAuthorization: hasAuthorization };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(signin, 'signin', 'D:/simple_social/server/controllers/auth.controller.js');\n    reactHotLoader.register(signout, 'signout', 'D:/simple_social/server/controllers/auth.controller.js');\n    reactHotLoader.register(requireSignin, 'requireSignin', 'D:/simple_social/server/controllers/auth.controller.js');\n    reactHotLoader.register(hasAuthorization, 'hasAuthorization', 'D:/simple_social/server/controllers/auth.controller.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/server/controllers/auth.controller.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _profilePic = __webpack_require__(/*! ../../client/assets/images/profile-pic.png */ \"./client/assets/images/profile-pic.png\");\n\nvar _profilePic2 = _interopRequireDefault(_profilePic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar create = function create(req, res, next) {\n    var user = new _user2.default(req.body);\n    user.save(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n\n        res.status(200).json({\n            message: 'Successfully signed up !'\n        });\n    });\n};\nvar list = function list(req, res) {\n    _user2.default.find(function (err, users) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n\n        res.json(users);\n    }).select('name email updated created');\n};\nvar userByID = function userByID(req, res, next, id) {\n    _user2.default.findById(id).populate('following', '_id name').populate('followers', '_id name').exec(function (err, user) {\n        if (err || !user) {\n            return res.status(400).json({\n                error: 'User not found'\n            });\n        }\n\n        req.profile = user;\n        next();\n    });\n};\nvar read = function read(req, res) {\n    req.profile.hashed_password = undefined;\n    req.profile.salt = undefined;\n    return res.json(req.profile);\n};\n\nvar update = function update(req, res, next) {\n    var form = new _formidable2.default.IncomingForm();\n    form.keepExtensions = true;\n    form.parse(req, function (err, fields, files) {\n        if (err) {\n            return res.status(400).json({\n                error: 'Photo could not be uploaded'\n            });\n        }\n\n        var user = req.profile;\n        user = _lodash2.default.extend(user, fields);\n        user.updated = Date.now();\n        if (files.photo) {\n            user.photo.data = _fs2.default.readFileSync(files.photo.path);\n            user.photo.contentType = files.photo.type;\n        }\n\n        user.save(function (err, result) {\n            if (err) {\n                return res.status(400).json({\n                    error: _dbErrorHandler2.default.getErrorMessage(err)\n                });\n            }\n\n            user.hashed_password = undefined;\n            user.salt = undefined;\n            res.json(user);\n        });\n    });\n};\nvar remove = function remove(req, res, next) {\n    var user = req.profile;\n    user.remove(function (err, deletedUser) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n\n        deletedUser.hashed_password = undefined;\n        deletedUser.salt = undefined;\n\n        res.json(deletedUser);\n    });\n};\n\nvar photo = function photo(req, res, next) {\n    if (req.profile.photo.data) {\n        res.set('Content-Type', req.profile.photo.contentType);\n        return res.send(req.profile.photo.data);\n    }\n\n    next();\n};\n\nvar defaultPhoto = function defaultPhoto(req, res) {\n    return res.sendFile(process.cwd() + _profilePic2.default);\n};\n\nvar addFollowing = function addFollowing(req, res, next) {\n    _user2.default.findByIdAndUpdate(req.body.userId, { $push: { following: req.body.followingId } }, function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n\n        next();\n    });\n};\n\nvar addFollower = function addFollower(req, res) {\n    _user2.default.findByIdAndUpdate(req.body.followingId, { $push: { followers: req.body.userId } }, { new: true }).populate('following', '_id name').populate('followers', '_id name').exec(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n\n        result.hashed_password = undefined;\n        result.salt = undefined;\n        res.json(result);\n    });\n};\n\nvar removeFollowing = function removeFollowing(req, res, next) {\n    _user2.default.findByIdAndUpdate(req.body.userId, { $pull: { following: req.body.unfollowId } }, function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n\n        next();\n    });\n};\n\nvar removeFollower = function removeFollower(req, res) {\n    _user2.default.findByIdAndUpdate(req.body.unfollowId, { $pull: { followers: req.body.userId } }, { new: true }).populate('following', '_id name').populate('followers', '_id name').exec(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n\n        result.hashed_password = undefined;\n        result.salt = undefined;\n        res.json(result);\n    });\n};\n\nvar _default = { create: create, list: list, userByID: userByID, read: read, update: update, remove: remove, photo: photo,\n    defaultPhoto: defaultPhoto, addFollowing: addFollowing, addFollower: addFollower, removeFollowing: removeFollowing, removeFollower: removeFollower };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(create, 'create', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(list, 'list', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(userByID, 'userByID', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(read, 'read', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(update, 'update', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(remove, 'remove', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(photo, 'photo', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(defaultPhoto, 'defaultPhoto', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(addFollowing, 'addFollowing', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(addFollower, 'addFollower', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(removeFollowing, 'removeFollowing', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(removeFollower, 'removeFollower', 'D:/simple_social/server/controllers/user.controller.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/server/controllers/user.controller.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar compile = function compile(app) {\n    if (true) {\n        var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n        var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n            publicPath: _webpackConfigClient2.default.output.publicPath\n        });\n        app.use(middleware);\n        app.use((0, _webpackHotMiddleware2.default)(compiler));\n    }\n};\n\nvar _default = {\n    compile: compile\n};\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(compile, 'compile', 'D:/simple_social/server/devBundle.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/server/devBundle.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _StaticRouter = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n\nvar _StaticRouter2 = _interopRequireDefault(_StaticRouter);\n\nvar _MainRouter = __webpack_require__(/*! ../client/MainRouter */ \"./client/MainRouter.js\");\n\nvar _MainRouter2 = _interopRequireDefault(_MainRouter);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _colors = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n\nvar _Menu = __webpack_require__(/*! @material-ui/core/Menu/Menu */ \"@material-ui/core/Menu/Menu\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\n// modules for server side rendering\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = (0, _express2.default)();\n\n_devBundle2.default.compile(app);\n\n/* configure express */\napp.use(_express2.default.json()).use(_express2.default.urlencoded());\n// app.use(bodyParser.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\napp.use((0, _helmet2.default)());\napp.use((0, _cors2.default)());\napp.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\napp.use('/', _user2.default);\napp.use('/', _auth2.default);\n\napp.get('*', function (req, res) {\n    var sheetRegistry = new _jss.SheetsRegistry();\n    var theme = (0, _core.createMuiTheme)({\n        palette: {\n            primary: {\n                light: '#757de8',\n                main: '#3f51b5',\n                dark: '#002984',\n                contrastText: '#fff'\n            },\n            secondary: {\n                light: '#ff79b0',\n                main: '#ff4081',\n                dark: '#c60055',\n                contrastText: '#000'\n            },\n            openTitle: _colors.indigo['400'],\n            protectedTitle: _colors.pink['400'],\n            type: 'light',\n            typography: {\n                useNextVariants: true\n            }\n        }\n    });\n\n    var generateClassName = (0, _core.createGenerateClassName)();\n    var context = {};\n    var markup = _server2.default.renderToString(_react2.default.createElement(\n        _StaticRouter2.default,\n        { location: req.url, context: context },\n        _react2.default.createElement(\n            _JssProvider2.default,\n            { registry: sheetRegistry, generateClassName: generateClassName },\n            _react2.default.createElement(\n                _core.MuiThemeProvider,\n                { theme: theme, sheetsManager: new Map() },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    'Please waitting a minutes'\n                )\n            )\n        )\n    ));\n\n    if (context.url) {\n        return res.redirect(303, context.url);\n    }\n\n    var css = sheetRegistry.toString();\n    res.status(200).send((0, _template2.default)({\n        markup: markup,\n        css: css\n    }));\n});\n\napp.use(function (err, req, res, next) {\n    if (err.name === 'UnauthorizedError') {\n        res.status(401).json({ \"error\": err.name + \": \" + err.message });\n    }\n});\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'D:/simple_social/server/express.js');\n    reactHotLoader.register(app, 'app', 'D:/simple_social/server/express.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/server/express.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar getErrorMessage = function getErrorMessage(err) {\n    var message = '';\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (var errName in err.errors) {\n            if (err.errors[errName].message) {\n                message = err.errors[errName].message;\n            }\n        }\n    }\n\n    return message;\n};\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n    var output = void 0;\n    try {\n        var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output;\n};\n\nvar _default = { getErrorMessage: getErrorMessage };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(getErrorMessage, 'getErrorMessage', 'D:/simple_social/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(getUniqueErrorMessage, 'getUniqueErrorMessage', 'D:/simple_social/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/server/helpers/dbErrorHandler.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nvar _buffer = __webpack_require__(/*! buffer */ \"buffer\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar UserSchema = new _mongoose2.default.Schema({\n    name: {\n        type: String,\n        trim: true,\n        required: 'Name is required'\n    },\n    email: {\n        type: String,\n        trim: true,\n        unique: 'Email already exists',\n        match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n        required: 'Email is required'\n    },\n    hashed_password: {\n        type: String,\n        required: 'Password is required'\n    },\n    salt: String,\n    updated: Date,\n    created: {\n        type: Date,\n        default: Date.now\n    },\n    about: {\n        type: String,\n        trim: true\n    },\n    photo: {\n        data: _buffer.Buffer,\n        contentType: String\n    },\n    following: [{\n        type: _mongoose2.default.Schema.ObjectId, ref: 'User'\n    }],\n    followers: [{\n        type: _mongoose2.default.Schema.ObjectId, ref: 'User'\n    }]\n});\n\nUserSchema.virtual('password').set(function (password) {\n    this._password = password;\n    this.salt = this.makeSalt();\n    this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n    return this._password;\n});\n\nUserSchema.methods = {\n    authenticate: function authenticate(plainText) {\n        return this.encryptPassword(plainText) === this.hashed_password;\n    },\n    encryptPassword: function encryptPassword(password) {\n        if (!password) return '';\n        try {\n            return _crypto2.default.createHmac('sha1', this.salt).update(password).digest('hex');\n        } catch (err) {\n            return '';\n        }\n    },\n    makeSalt: function makeSalt() {\n        return Math.round(new Date().valueOf() * Math.random()) + '';\n    }\n};\n\nUserSchema.path('hashed_password').validate(function (v) {\n    if (this._password && this._password.length < 6) {\n        this.invalidate('password', 'Password must be at least 6 characters.');\n    }\n\n    if (this.isNew && !this._password) {\n        this.invalidate('password', 'Password is required');\n    }\n}, null);\n\nvar _default = _mongoose2.default.model('User', UserSchema);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(UserSchema, 'UserSchema', 'D:/simple_social/server/models/user.model.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/server/models/user.model.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\nrouter.route('/auth/signin').post(_auth2.default.signin);\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, 'router', 'D:/simple_social/server/routes/auth.routes.js');\n  reactHotLoader.register(_default, 'default', 'D:/simple_social/server/routes/auth.routes.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ./../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:userId').get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.route('/api/users/photo/:userId').get(_user2.default.photo, _user2.default.defaultPhoto);\nrouter.route('/api/users/photo/defaultPhoto').get(_user2.default.defaultPhoto);\n\nrouter.route('/api/users/follow').put(_auth2.default.requireSignin, _user2.default.addFollowing, _user2.default.addFollower);\nrouter.route('/api/users/unfollow').put(_auth2.default.requireSignin, _user2.default.removeFollowing, _user2.default.removeFollower);\n\nrouter.param('userId', _user2.default.userByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(router, 'router', 'D:/simple_social/server/routes/user.routes.js');\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/server/routes/user.routes.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\nconsole.log('mongoUri ' + _config2.default.mongoUri);\n_mongoose2.default.connect(_config2.default.mongoUri, { useNewUrlParser: true });\n_mongoose2.default.connection.on('error', function () {\n    throw new Error('unable to connect to database ' + _config2.default.mongoUri);\n});\n\nconsole.log('config port', _config2.default.port);\n_express2.default.listen(_config2.default.port, function (err) {\n    if (err) {\n        console.log(err);\n    }\n\n    console.info('Server started on port %s', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar _default = function _default(_ref) {\n    var markup = _ref.markup,\n        css = _ref.css;\n\n    console.log('markup', markup);\n    return '\\n    <!DOCTYPE html>\\n    <html lang=\"en\">\\n    <head>\\n        <meta charset=\"utf-8\" />\\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\\n        <title>MERN Kickstart</title>\\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\\n        <style>\\n              a{\\n                text-decoration: none\\n              }\\n        </style>\\n    </head>\\n    <body>\\n        <div id=\"root\">' + markup + '</div>\\n        <style id=\"jss-server-side\">' + css + '</style>\\n        <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\\n    </body>\\n    </html>\\n    ';\n};\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(_default, 'default', 'D:/simple_social/template.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    },\n    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'D:/simple_social/webpack.config.client.js');\n    reactHotLoader.register(config, 'config', 'D:/simple_social/webpack.config.client.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\simple_social\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardHeader\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardHeader%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContentText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContentText%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Divider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Divider%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Icon%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/List%22?");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItem%22?");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemAvatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemAvatar%22?");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemSecondaryAction\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemSecondaryAction%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/Menu/Menu":
/*!**********************************************!*\
  !*** external "@material-ui/core/Menu/Menu" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Menu/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Menu/Menu%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons%22?");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ArrowForward%22?");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Delete\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Delete%22?");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Edit\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Edit%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Person\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Person%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"buffer\");\n\n//# sourceURL=webpack:///external_%22buffer%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });