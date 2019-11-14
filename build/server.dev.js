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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./model/CounterModel.js":
/*!*******************************!*\
  !*** ./model/CounterModel.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));var _orm=__webpack_require__(/*! startupjs/orm */ "startupjs/orm");var CounterModel=function(_BaseModel){(0,_inherits2.default)(CounterModel,_BaseModel);function CounterModel(){(0,_classCallCheck2.default)(this,CounterModel);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(CounterModel).apply(this,arguments));}(0,_createClass2.default)(CounterModel,[{key:"addSelf",value:function addSelf(){return _regenerator.default.async(function addSelf$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator.default.awrap(this.root.addAsync(this.getCollection(),{id:this.getId(),value:0}));case 2:case"end":return _context.stop();}}},null,this);}},{key:"reset",value:function reset(){return _regenerator.default.async(function reset$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _regenerator.default.awrap(this.setAsync('value',0));case 2:case"end":return _context2.stop();}}},null,this);}}]);return CounterModel;}(_orm.BaseModel);exports.default=CounterModel;

/***/ }),

/***/ "./model/index.js":
/*!************************!*\
  !*** ./model/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=_default;var _CounterModel=_interopRequireDefault(__webpack_require__(/*! ./CounterModel */ "./model/CounterModel.js"));function _default(racer){racer.orm('counters.*',_CounterModel.default);}

/***/ }),

/***/ "./node_modules/@startupjs/init/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@startupjs/init/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function get(){return _lib.default;}});var _lib=_interopRequireDefault(__webpack_require__(/*! ./lib */ "./node_modules/@startupjs/init/lib/index.server.js"));

/***/ }),

/***/ "./node_modules/@startupjs/init/lib/index.server.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/index.server.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function get(){return _server.default;}});var _server=_interopRequireDefault(__webpack_require__(/*! ./server */ "./node_modules/@startupjs/init/lib/server/index.js"));

/***/ }),

/***/ "./node_modules/@startupjs/init/lib/server/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/server/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _sharedb=_interopRequireDefault(__webpack_require__(/*! sharedb */ "sharedb"));var _common=_interopRequireDefault(__webpack_require__(/*! ../util/common */ "./node_modules/@startupjs/init/lib/util/common.js"));var _default=function _default(options){(0,_common.default)(_sharedb.default,options);};exports.default=_default;

/***/ }),

/***/ "./node_modules/@startupjs/init/lib/util/batch.server.js":
/*!***************************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/util/batch.server.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _default=function _default(fn){return fn();};exports.default=_default;

/***/ }),

/***/ "./node_modules/@startupjs/init/lib/util/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/util/common.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _richText=_interopRequireDefault(__webpack_require__(/*! rich-text */ "rich-text"));var _racer=_interopRequireDefault(__webpack_require__(/*! racer */ "racer"));var _Query=_interopRequireDefault(__webpack_require__(/*! racer/lib/Model/Query */ "racer/lib/Model/Query"));var _bluebird=__webpack_require__(/*! bluebird */ "bluebird");var _batch=_interopRequireDefault(__webpack_require__(/*! ./batch */ "./node_modules/@startupjs/init/lib/util/batch.server.js"));var _orm=_interopRequireDefault(__webpack_require__(/*! @startupjs/orm */ "@startupjs/orm"));var _default=function _default(ShareDB){var _ref=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},orm=_ref.orm;ShareDB.types.register(_richText.default.type);(0,_bluebird.promisifyAll)(_racer.default.Model.prototype);(0,_bluebird.promisifyAll)(_Query.default.prototype);_racer.default.Model.prototype.batch=_batch.default;if(orm){_racer.default.use(_orm.default);_racer.default.use(orm);}};exports.default=_default;

/***/ }),

/***/ "./node_modules/startupjs/init.js":
/*!****************************************!*\
  !*** ./node_modules/startupjs/init.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(/*! @startupjs/init */ "./node_modules/@startupjs/init/index.js");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));var _init=_interopRequireDefault(__webpack_require__(/*! startupjs/init */ "./node_modules/startupjs/init.js"));var _model=_interopRequireDefault(__webpack_require__(/*! ./model */ "./model/index.js"));var _server=_interopRequireDefault(__webpack_require__(/*! startupjs/server */ "startupjs/server"));(0,_init.default)({orm:_model.default});(0,_server.default)({getHead:getHead},function(ee){ee.on('routes',function(expressApp){expressApp.get('/api',function _callee(req,res){var model,$counter;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:model=req.model;$counter=model.at('counters.first');_context.next=4;return _regenerator.default.awrap($counter.subscribeAsync());case 4:res.json({name:'Test API',counter:$counter.get()});case 5:case"end":return _context.stop();}}});});});});var getHead=function getHead(appName){return"\n  <title>HelloWorld</title>\n  <!-- Put vendor JS and CSS here -->\n";};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./server.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./server.js */"./server.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@startupjs/orm":
/*!*********************************!*\
  !*** external "@startupjs/orm" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@startupjs/orm");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "racer":
/*!************************!*\
  !*** external "racer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("racer");

/***/ }),

/***/ "racer/lib/Model/Query":
/*!****************************************!*\
  !*** external "racer/lib/Model/Query" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("racer/lib/Model/Query");

/***/ }),

/***/ "rich-text":
/*!****************************!*\
  !*** external "rich-text" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rich-text");

/***/ }),

/***/ "sharedb":
/*!**************************!*\
  !*** external "sharedb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sharedb");

/***/ }),

/***/ "startupjs/orm":
/*!********************************!*\
  !*** external "startupjs/orm" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("startupjs/orm");

/***/ }),

/***/ "startupjs/server":
/*!***********************************!*\
  !*** external "startupjs/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("startupjs/server");

/***/ })

/******/ });
//# sourceMappingURL=server.dev.js.map