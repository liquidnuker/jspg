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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(17)
  , IE8_DOM_DEFINE = __webpack_require__(18)
  , toPrimitive    = __webpack_require__(20)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(22);

var _Paginate = __webpack_require__(23);

var _Paginate2 = _interopRequireDefault(_Paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// temp item data
var items = [];
var num = 0;
for (var i = 0, l = 42; i < l; i++) {
  num += 1;
  items.push(num);
}

var JsPager = function () {
  function JsPager(opts) {
    (0, _classCallCheck3.default)(this, JsPager);

    this.data = opts.data;
    this.perPage = opts.perPage;
    this.itemHolder = opts.itemHolder;
    this.currentPageHolder = opts.currentPageHolder;
    this.totalPageHolder = opts.totalPageHolder;

    this.btn_prev = opts.btn_prev;
    this.btn_next = opts.btn_next;

    this.pageJumpInput = opts.pageJumpInput;
    this.pageJumpBtn = opts.pageJumpBtn;

    this.pageSelector = opts.pageSelector;
    this.perPageItems = [10, 20, 40, 60, 100];
    this.perPageSelector = opts.perPageSelector;
  }

  // prototypes


  (0, _createClass3.default)(JsPager, [{
    key: "init",
    value: function init() {
      this.pageSelect = document.getElementById(this.pageSelector);
      this.perPageSelect = document.getElementById(this.perPageSelector);
      this.jumpInput = document.getElementById(this.pageJumpInput);
      this.jumpBtn = document.getElementById(this.pageJumpBtn);

      this.activatePager();
      this.addEvents();
    }
  }, {
    key: "activatePager",
    value: function activatePager() {
      this.pager = null;
      this.pager = new _Paginate2.default(this.data, this.perPage);
      this.itemList = this.pager.page(0);
      this.currentPage = this.pager.currentPage;
      console.log(this.currentPage);
      this.refresh();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      document.getElementById(this.btn_prev).addEventListener("click", function () {
        _this.prev();
      });

      document.getElementById(this.btn_next).addEventListener("click", function () {
        _this.next();
      });

      this.pageSelect.addEventListener("change", function (e) {
        _this.showPage(e.target.value);
      }, false);

      this.perPageSelect.addEventListener("change", function (e) {
        _this.setPerPage(e.target.value);
      }, false);

      this.jumpInput.addEventListener("keypress", function (e) {
        if (e.keyCode === 32 || e.keyCode === 13) {
          _this.showPage(e.target.value);
        }
      }, false);

      this.jumpBtn.addEventListener("click", function (e) {
        _this.showPage(_this.jumpInput.value);
      }, false);

      this.setPageSelectorDropdown(this.currentPage);
      this.setPerPageDropdown();
    }
  }, {
    key: "setPageSelectorDropdown",
    value: function setPageSelectorDropdown(index) {
      console.log("pageselector" + " " + index);

      var pageSelect = this.pageSelect;
      pageSelect.innerHTML = "";

      var optsArr = [];
      for (var _i = 1, _l = this.pager.totalPages + 1; _i < _l; _i++) {
        optsArr.push({
          value: _i,
          selected: false
        });
      }

      if (optsArr[index] === undefined) {
        console.log("Undefined:::" + " " + "currentPage" + " " + index);
      }

      optsArr[index - 1].selected = true;

      for (var _i2 = 0, _l2 = optsArr.length; _i2 < _l2; _i2++) {
        var el = document.createElement("option");
        el.textContent = optsArr[_i2].value;
        el.value = optsArr[_i2].value;
        el.selected = optsArr[_i2].selected;
        pageSelect.appendChild(el);
      }
    }
  }, {
    key: "setPerPageDropdown",
    value: function setPerPageDropdown() {
      // for perPage items
      var perPageSelect = this.perPageSelect;
      perPageSelect.innerHTML = "";
      for (var _i3 = 0, _l3 = this.perPageItems.length; _i3 < _l3; _i3++) {
        var el2 = document.createElement("option");
        el2.textContent = this.perPageItems[_i3];
        el2.value = this.perPageItems[_i3];
        perPageSelect.appendChild(el2);
      }
    }
  }, {
    key: "setPerPage",
    value: function setPerPage(num) {
      this.perPage = num;
      this.currentPage = num;
      this.activatePager();
    }
  }, {
    key: "showPage",
    value: function showPage(num) {
      this.itemList = this.pager.page(num);
      this.currentPage = num;
      console.log(this.currentPage);
      this.refresh();
    }
  }, {
    key: "prev",
    value: function prev() {
      if (this.pager.currentPage == 1) {
        this.itemList = this.pager.page(this.pager.totalPages);
        this.currentPage = this.pager.currentPage;
      } else {
        this.itemList = this.pager.prev();
        this.currentPage = this.pager.currentPage;
      }
      this.refresh();
    }
  }, {
    key: "next",
    value: function next() {
      // console.log(this.currentPage);

      if (!this.pager.hasNext()) {
        // this.itemList = this.pager.page(0);
        console.log(this.currentPage);
        console.log("no next");
        this.showPage(1);
      } else {
        this.itemList = this.pager.next();
        // this.showPage(this.currentPage + 1);
        this.refresh();

        console.log("has next");
      }
      // this.currentPage = this.pager.currentPage;

      // this.itemList = this.pager.next();

      // this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      document.getElementById(this.itemHolder).innerHTML = this.itemList;
      document.getElementById(this.currentPageHolder).textContent = this.currentPage;
      document.getElementById(this.totalPageHolder).textContent = this.pager.totalPages;
      this.currentPage = this.pager.currentPage;
      this.setPageSelectorDropdown(this.currentPage);
    }
  }]);
  return JsPager;
}();

var zz = new JsPager({
  data: items,
  perPage: 10,
  itemHolder: "jspager_items",
  currentPageHolder: "jspager_currentpage",
  totalPageHolder: "jspager_totalpages",
  btn_prev: "jspager_prev",
  btn_next: "jspager_next",
  pageSelector: "jspager_select",
  perPageSelector: "jspager_perpage",
  pageJumpInput: "jspager_jump",
  pageJumpBtn: "jspager_jumpbtn"
});

zz.init();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(10);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(3)
  , ctx       = __webpack_require__(14)
  , hide      = __webpack_require__(16)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(21);
module.exports = __webpack_require__(0) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(5)(function(){
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new `Paginate` form a givin `Array`,
 * optionally with a specific `Number` of items per page.
 *
 * @param {Array} data
 * @param {Number} [perPage=10]
 * @constructor
 * @api public
 */

function Paginate(data, perPage) {

  if (!data) throw new Error('Required Argument Missing');
  if (!(data instanceof Array)) throw new Error('Invalid Argument Type');

  this.data = data;
  this.perPage = perPage || 10;
  this.currentPage = 0;
  this.totalPages = Math.ceil(this.data.length / this.perPage);
}

/**
 * Calculates the offset.
 *
 * @return {Number}
 * @api private
 */

Paginate.prototype.offset = function () {

  return (this.currentPage - 1) * this.perPage;
};

/**
 * Returns the specified `page`.
 *
 * @param {Number} pageNum
 * @return {Array}
 * @api public
 */

Paginate.prototype.page = function (pageNum) {

  if (pageNum < 1) pageNum = 1;
  if (pageNum > this.totalPages) pageNum = this.totalPages;

  this.currentPage = pageNum;

  var start = this.offset(),
      end = start + this.perPage;

  return this.data.slice(start, end);
};

/**
 * Returns the next `page`.
 *
 * @return {Array}
 * @api public
 */

Paginate.prototype.next = function () {
  return this.page(this.currentPage + 1);
};

/**
 * Returns the previous `page`.
 *
 * @return {Array}
 * @api public
 */

Paginate.prototype.prev = function () {

  return this.page(this.currentPage - 1);
};

/**
 * Checks if there is a next `page`.
 *
 * @return {Boolean}
 * @api public
 */

Paginate.prototype.hasNext = function () {

  return this.currentPage < this.totalPages;
};

/**
 * Expose `Paginate`
 */

if (true) module.exports = Paginate;

/***/ })
/******/ ]);