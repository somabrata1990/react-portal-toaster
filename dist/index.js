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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Portal_1 = __importDefault(__webpack_require__(5));
var success_1 = __importDefault(__webpack_require__(11));
exports.SuccessToaster = success_1.default;
var error_1 = __importDefault(__webpack_require__(16));
exports.ErrorToaster = error_1.default;
var info_1 = __importDefault(__webpack_require__(21));
exports.InfoToaster = info_1.default;
exports.default = Portal_1.default;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(6));
var manager_1 = __importDefault(__webpack_require__(7));
var htmlBody = document.getElementsByTagName('body')[0];
var PortalContainer = /** @class */ (function (_super) {
    __extends(PortalContainer, _super);
    function PortalContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.el = document.createElement('div');
        return _this;
    }
    PortalContainer.prototype.componentDidMount = function () {
        var timestamp = new Date().getTime();
        this.el.className = "portal-toaster-" + timestamp + "_" + Math.round(Math.random() * 1000);
        htmlBody.appendChild(this.el);
    };
    PortalContainer.prototype.render = function () {
        var config = this.props.config;
        return react_dom_1.default.createPortal(react_1.default.createElement(manager_1.default, { config: config }), this.el);
    };
    PortalContainer.prototype.componentWillUnmount = function () {
        htmlBody.removeChild(this.el);
    };
    return PortalContainer;
}(react_1.default.PureComponent));
exports.default = PortalContainer;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Manager_module_css_1 = __importDefault(__webpack_require__(8));
var Modal_1 = __importDefault(__webpack_require__(10));
var defaultConfig = {
    closeTime: 5000,
    autoClose: true,
    backgroundColor: ""
};
var reducer = function (state, action) {
    switch (action.type) {
        case "REGISTER":
            return state.concat([action.payload]);
        case "UNREGISTER":
            return state.filter(function (node) {
                return node.uniqueID !== action.payload;
            });
        default:
            return state;
    }
};
var singletonDispatch = null;
var PortalManager = function (props) {
    var _a = react_1.default.useReducer(reducer, []), state = _a[0], dispatch = _a[1];
    react_1.default.useEffect(function () {
        singletonDispatch = dispatch;
        defaultConfig = __assign({}, defaultConfig, props.config);
    }, [dispatch, props.config]);
    var handleClose = react_1.default.useCallback(function (id) {
        dispatch({
            type: "UNREGISTER",
            payload: id
        });
    }, []);
    return react_1.default.createElement("div", { className: Manager_module_css_1.default.wrapper },
        react_1.default.createElement("div", { className: Manager_module_css_1.default.groupWrapper }, state.map(function (payload) {
            return react_1.default.createElement(Modal_1.default, { key: payload.uniqueID, id: payload.uniqueID, handleClose: handleClose, config: __assign({}, defaultConfig, props.config, payload.config), component: payload.node });
        })));
};
exports.default = PortalManager;
exports.push = function (node, config) {
    var timestamp = new Date().getTime();
    var uniqueID = timestamp + "-" + Math.round(Math.random() * 1000);
    if (singletonDispatch) {
        singletonDispatch({
            type: "REGISTER",
            payload: {
                uniqueID: uniqueID,
                node: node,
                config: __assign({}, defaultConfig, config)
            }
        });
    }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(9);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"styleTag"}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".Dy_QWo5YrwYgl1CpDrmeN {\n    margin: auto;\n    left: 50%;\n    position: fixed;\n    top: 10px;\n    background: transparent;\n    width: 0px;\n}\n\n._2HoaCJjozvjNUHLaBRPiTW {\n    display: flex;\n    justify-content: space-evenly;\n}", ""]);
// Exports
exports.locals = {
	"wrapper": "Dy_QWo5YrwYgl1CpDrmeN",
	"groupWrapper": "_2HoaCJjozvjNUHLaBRPiTW"
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Modal = function (props) {
    var timeRef = react_1.default.useRef();
    var handleClick = react_1.default.useCallback(function (e) {
        e.stopPropagation();
        clearTimeout(timeRef.current);
        props.handleClose(props.id);
    }, [props.id]);
    react_1.default.useEffect(function () {
        if (props.config && props.config.autoClose) {
            var closeTime = props.config.closeTime || props.closeTime;
            timeRef.current = setTimeout(function () { return props.handleClose(props.id); }, closeTime);
        }
    }, [props.id, props.closeTime]);
    var NotificationBox = props.component;
    return react_1.default.createElement(NotificationBox, { handleClose: handleClick });
};
exports.default = Modal;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var style_module_css_1 = __importDefault(__webpack_require__(12));
var close_svg_1 = __webpack_require__(14);
var tick_svg_1 = __webpack_require__(15);
exports.default = (function (props) {
    return react_1.default.createElement("div", { className: style_module_css_1.default.App + " " + style_module_css_1.default.size },
        react_1.default.createElement("span", { className: style_module_css_1.default.icon },
            react_1.default.createElement(tick_svg_1.ReactComponent, { height: "25px", width: "25px" })),
        react_1.default.createElement("span", { className: style_module_css_1.default.body }, props.children),
        react_1.default.createElement("span", { className: style_module_css_1.default.icon, onClick: props.handleClose },
            react_1.default.createElement(close_svg_1.ReactComponent, { height: "13px", width: "13px" })));
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(13);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"styleTag"}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "._3bG2tp3MILVmUDK2qkrehC {\n    text-align: center;\n    overflow-wrap: break-word;\n    margin: 10px;\n    background-color: #0aca03;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    color: #ffffff;\n    font-weight: 600;\n  }\n  \n  ._3aO5Jxe6tGd3MwcVnPbhOz {\n    border-radius: 10px;\n    min-width: 350px;\n    min-height: 50px;\n  }\n  \n  .MJmcbhToAqW7Wqq_BjWfi {\n    padding: 10px 0px;\n  }\n\n  ._3Ku0Q4DNpbX4dhhInqt8E0{\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 0px 10px;\n  }\n  \n  .LTvbsRVmj6J_4uuRpSBJ6 {\n    margin: 10px;\n  }", ""]);
// Exports
exports.locals = {
	"App": "_3bG2tp3MILVmUDK2qkrehC",
	"size": "_3aO5Jxe6tGd3MwcVnPbhOz",
	"body": "MJmcbhToAqW7Wqq_BjWfi",
	"icon": "_3Ku0Q4DNpbX4dhhInqt8E0",
	"actions": "LTvbsRVmj6J_4uuRpSBJ6"
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "assets/src/notification-components/success/close.svg?abb8a771e188ec9fd23ba3ef323d6f24";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "assets/src/notification-components/success/tick.svg?4190ac1189db82bcbe4eddaa6a7908d7";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var style_module_css_1 = __importDefault(__webpack_require__(17));
var close_svg_1 = __webpack_require__(19);
var error_svg_1 = __webpack_require__(20);
exports.default = (function (props) {
    return react_1.default.createElement("div", { className: style_module_css_1.default.App + " " + style_module_css_1.default.size },
        react_1.default.createElement("div", { className: style_module_css_1.default.icon },
            react_1.default.createElement(error_svg_1.ReactComponent, { height: "25px", width: "25px" })),
        react_1.default.createElement("div", { className: style_module_css_1.default.body }, props.children),
        react_1.default.createElement("div", { className: style_module_css_1.default.icon, onClick: props.handleClose },
            react_1.default.createElement(close_svg_1.ReactComponent, { height: "13px", width: "13px" })));
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(18);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"styleTag"}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".LJRV7-4k9293yTdPoSfat {\n    text-align: center;\n    overflow-wrap: break-word;\n    margin: 10px;\n    background-color: #f72929;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    color: #ffffff;\n    font-weight: 600;\n  }\n  \n  ._1iJ6RCYPldCbtqrz3zBHvv {\n    border-radius: 10px;\n    min-width: 350px;\n    min-height: 50px;\n  }\n  \n  ._2l-xlnff_tl8ZRmS98fQqX {\n    padding: 10px 0px;\n  }\n\n  ._3htMhC89PMVXytLx9qhniZ{\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 0px 10px;\n    justify-content: center;\n  }\n  \n  ._3o4TDKNSQOWc-VCTu6jMwq {\n    margin: 10px;\n  }", ""]);
// Exports
exports.locals = {
	"App": "LJRV7-4k9293yTdPoSfat",
	"size": "_1iJ6RCYPldCbtqrz3zBHvv",
	"body": "_2l-xlnff_tl8ZRmS98fQqX",
	"icon": "_3htMhC89PMVXytLx9qhniZ",
	"actions": "_3o4TDKNSQOWc-VCTu6jMwq"
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "assets/src/notification-components/error/close.svg?abb8a771e188ec9fd23ba3ef323d6f24";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "assets/src/notification-components/error/error.svg?4707e09c1ed3f8f2ffb0116554c91d3d";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var style_module_css_1 = __importDefault(__webpack_require__(22));
var close_svg_1 = __webpack_require__(24);
var info_svg_1 = __webpack_require__(25);
exports.default = (function (props) {
    return react_1.default.createElement("div", { className: style_module_css_1.default.App + " " + style_module_css_1.default.size },
        react_1.default.createElement("div", { className: style_module_css_1.default.icon },
            react_1.default.createElement(info_svg_1.ReactComponent, { height: "25px", width: "25px" })),
        react_1.default.createElement("div", { className: style_module_css_1.default.body }, props.children),
        react_1.default.createElement("div", { className: style_module_css_1.default.icon, onClick: props.handleClose },
            react_1.default.createElement(close_svg_1.ReactComponent, { height: "13px", width: "13px" })));
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(23);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"styleTag"}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "._34Y_5-_-D7HdcC8DhkDVdV {\n    text-align: center;\n    overflow-wrap: break-word;\n    margin: 10px;\n    background-color: #32dffb;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    color: #ffffff;\n    font-weight: 600;\n  }\n  \n  ._1V-_eQGTJe7MJU1hinIUyZ {\n    border-radius: 10px;\n    min-width: 350px; /* minimum width device considered is of 360px */\n    min-height: 50px;\n  }\n  \n  ._2bj157_XCUXIKa5eC1hzQQ {\n    padding: 10px 0px;\n  }\n\n  ._1SS0J-R8iMNU6BRtG7h4Lm{\n    height: 100%;\n    padding: 0px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  ._2rW4X8xcSKlkbJ3ped9LuF {\n    margin: 10px;\n  }", ""]);
// Exports
exports.locals = {
	"App": "_34Y_5-_-D7HdcC8DhkDVdV",
	"size": "_1V-_eQGTJe7MJU1hinIUyZ",
	"body": "_2bj157_XCUXIKa5eC1hzQQ",
	"icon": "_1SS0J-R8iMNU6BRtG7h4Lm",
	"actions": "_2rW4X8xcSKlkbJ3ped9LuF"
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "assets/src/notification-components/info/close.svg?abb8a771e188ec9fd23ba3ef323d6f24";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "assets/src/notification-components/info/info.svg?3aea435ed24c84900442dd97e174f246";

/***/ })
/******/ ]);