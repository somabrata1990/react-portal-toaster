module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(15);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"styleTag"}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(5)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(16);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"styleTag"}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(5)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(17);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"styleTag"}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(5)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(14);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"styleTag"}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(5)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM0OC4zMzNweCIgaGVpZ2h0PSIzNDguMzM0cHgiIHZpZXdCb3g9IjAgMCAzNDguMzMzIDM0OC4zMzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0OC4zMzMgMzQ4LjMzNDsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODUNCgkJYy03Ljg0NCw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQwNywxMS43NjljLTEwLjI5NiwwLTIwLjU4MS0zLjkxOS0yOC40MTktMTEuNzY5TDE3NC4xNjcsMjMxLjAwM0w2OC42MDksMzM2LjU2Mw0KCQljLTcuODQzLDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDE2LDExLjc2OWMtMTAuMjg1LDAtMjAuNTYzLTMuOTE5LTI4LjQxMy0xMS43NjljLTE1LjY5OS0xNS42OTgtMTUuNjk5LTQxLjEzOSwwLTU2Ljg1DQoJCWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NA0KCQlMMjc5LjcyMSwxMS43NjdjMTUuNzA1LTE1LjY4Nyw0MS4xMzktMTUuNjg3LDU2LjgzMiwwQzM1Mi4yNTgsMjcuNDY2LDM1Mi4yNTgsNTIuOTEyLDMzNi41NTksNjguNjExeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwNy4yIDUwNy4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDcuMiA1MDcuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMzJCQTdDOyIgY3g9IjI1My42IiBjeT0iMjUzLjYiIHI9IjI1My42Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMEFBMDZFOyIgZD0iTTE4OC44LDM2OGwxMzAuNCwxMzAuNGMxMDgtMjguOCwxODgtMTI3LjIsMTg4LTI0NC44YzAtMi40LDAtNC44LDAtNy4yTDQwNC44LDE1MkwxODguOCwzNjh6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI2MCwzMTAuNGMxMS4yLDExLjIsMTEuMiwzMC40LDAsNDEuNmwtMjMuMiwyMy4yYy0xMS4yLDExLjItMzAuNCwxMS4yLTQxLjYsMEw5My42LDI3Mi44DQoJCWMtMTEuMi0xMS4yLTExLjItMzAuNCwwLTQxLjZsMjMuMi0yMy4yYzExLjItMTEuMiwzMC40LTExLjIsNDEuNiwwTDI2MCwzMTAuNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM0OC44LDEzMy42YzExLjItMTEuMiwzMC40LTExLjIsNDEuNiwwbDIzLjIsMjMuMmMxMS4yLDExLjIsMTEuMiwzMC40LDAsNDEuNmwtMTc2LDE3NS4yDQoJCWMtMTEuMiwxMS4yLTMwLjQsMTEuMi00MS42LDBsLTIzLjItMjMuMmMtMTEuMi0xMS4yLTExLjItMzAuNCwwLTQxLjZMMzQ4LjgsMTMzLjZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM0OC4zMzNweCIgaGVpZ2h0PSIzNDguMzM0cHgiIHZpZXdCb3g9IjAgMCAzNDguMzMzIDM0OC4zMzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0OC4zMzMgMzQ4LjMzNDsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODUNCgkJYy03Ljg0NCw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQwNywxMS43NjljLTEwLjI5NiwwLTIwLjU4MS0zLjkxOS0yOC40MTktMTEuNzY5TDE3NC4xNjcsMjMxLjAwM0w2OC42MDksMzM2LjU2Mw0KCQljLTcuODQzLDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDE2LDExLjc2OWMtMTAuMjg1LDAtMjAuNTYzLTMuOTE5LTI4LjQxMy0xMS43NjljLTE1LjY5OS0xNS42OTgtMTUuNjk5LTQxLjEzOSwwLTU2Ljg1DQoJCWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NA0KCQlMMjc5LjcyMSwxMS43NjdjMTUuNzA1LTE1LjY4Nyw0MS4xMzktMTUuNjg3LDU2LjgzMiwwQzM1Mi4yNTgsMjcuNDY2LDM1Mi4yNTgsNTIuOTEyLDMzNi41NTksNjguNjExeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwNy4yIDUwNy4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDcuMiA1MDcuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRjE1MjQ5OyIgY3g9IjI1My42IiBjeT0iMjUzLjYiIHI9IjI1My42Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQUQwRTBFOyIgZD0iTTE0Ny4yLDM2OEwyODQsNTA0LjhjMTE1LjItMTMuNiwyMDYuNC0xMDQsMjIwLjgtMjE5LjJMMzY3LjIsMTQ4TDE0Ny4yLDM2OHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzczLjYsMzA5LjZjMTEuMiwxMS4yLDExLjIsMzAuNCwwLDQxLjZsLTIyLjQsMjIuNGMtMTEuMiwxMS4yLTMwLjQsMTEuMi00MS42LDBsLTE3Ni0xNzYNCgljLTExLjItMTEuMi0xMS4yLTMwLjQsMC00MS42bDIzLjItMjMuMmMxMS4yLTExLjIsMzAuNC0xMS4yLDQxLjYsMEwzNzMuNiwzMDkuNnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNENkQ2RDY7IiBkPSJNMjgwLjgsMjE2TDIxNiwyODAuOGw5My42LDkyLjhjMTEuMiwxMS4yLDMwLjQsMTEuMiw0MS42LDBsMjMuMi0yMy4yYzExLjItMTEuMiwxMS4yLTMwLjQsMC00MS42DQoJTDI4MC44LDIxNnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzA5LjYsMTMzLjZjMTEuMi0xMS4yLDMwLjQtMTEuMiw0MS42LDBsMjMuMiwyMy4yYzExLjIsMTEuMiwxMS4yLDMwLjQsMCw0MS42TDE5Ny42LDM3My42DQoJYy0xMS4yLDExLjItMzAuNCwxMS4yLTQxLjYsMGwtMjIuNC0yMi40Yy0xMS4yLTExLjItMTEuMi0zMC40LDAtNDEuNkwzMDkuNiwxMzMuNnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM0OC4zMzNweCIgaGVpZ2h0PSIzNDguMzM0cHgiIHZpZXdCb3g9IjAgMCAzNDguMzMzIDM0OC4zMzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0OC4zMzMgMzQ4LjMzNDsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODUNCgkJYy03Ljg0NCw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQwNywxMS43NjljLTEwLjI5NiwwLTIwLjU4MS0zLjkxOS0yOC40MTktMTEuNzY5TDE3NC4xNjcsMjMxLjAwM0w2OC42MDksMzM2LjU2Mw0KCQljLTcuODQzLDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDE2LDExLjc2OWMtMTAuMjg1LDAtMjAuNTYzLTMuOTE5LTI4LjQxMy0xMS43NjljLTE1LjY5OS0xNS42OTgtMTUuNjk5LTQxLjEzOSwwLTU2Ljg1DQoJCWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NA0KCQlMMjc5LjcyMSwxMS43NjdjMTUuNzA1LTE1LjY4Nyw0MS4xMzktMTUuNjg3LDU2LjgzMiwwQzM1Mi4yNTgsMjcuNDY2LDM1Mi4yNTgsNTIuOTEyLDMzNi41NTksNjguNjExeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5Ni4xNTggNDk2LjE1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk2LjE1OCA0OTYuMTU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjVCN0QzOyIgZD0iTTQ5Ni4xNTgsMjQ4LjA4NWMwLTEzNy4wMjItMTExLjA2OS0yNDguMDgyLTI0OC4wNzUtMjQ4LjA4MkMxMTEuMDcsMC4wMDMsMCwxMTEuMDYzLDAsMjQ4LjA4NQ0KCWMwLDEzNy4wMDEsMTExLjA3LDI0OC4wNywyNDguMDgzLDI0OC4wN0MzODUuMDg5LDQ5Ni4xNTUsNDk2LjE1OCwzODUuMDg2LDQ5Ni4xNTgsMjQ4LjA4NXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzE1LjI0OSwzNTkuNTU1Yy0xLjM4Ny0yLjAzMi00LjA0OC0yLjc1NS02LjI3LTEuNzAyYy0yNC41ODIsMTEuNjM3LTUyLjQ4MiwyMy45NC01Ny45NTgsMjUuMDE1DQoJCWMtMC4xMzgtMC4xMjMtMC4zNTctMC4zNDgtMC42NDQtMC43MzdjLTAuNzQyLTEuMDA1LTEuMTAzLTIuMzE4LTEuMTAzLTQuMDE1YzAtMTMuOTA1LDEwLjQ5NS01Ni4yMDUsMzEuMTkyLTEyNS43MTkNCgkJYzE3LjQ1MS01OC40MDYsMTkuNDY5LTcwLjQ5OSwxOS40NjktNzQuNTE0YzAtNi4xOTgtMi4zNzMtMTEuNDM1LTYuODY1LTE1LjE0NmMtNC4yNjctMy41MTktMTAuMjI5LTUuMzAyLTE3LjcxOS01LjMwMg0KCQljLTEyLjQ1OSwwLTI2Ljg5OSw0LjczLTQ0LjE0NiwxNC40NjFjLTE2LjcxMyw5LjQzMy0zNS4zNTIsMjUuNDEtNTUuMzk2LDQ3LjQ4N2MtMS41NjksMS43MjktMS43MzMsNC4zMTQtMC4zOTUsNi4yMjgNCgkJYzEuMzQsMS45MTUsMy44MjUsMi42NDQsNS45ODYsMS43NjRjNy4wMzctMi44NzIsNDIuNDAyLTE3LjM1OSw0Ny41NTctMjAuNTk3YzQuMjIxLTIuNjQ2LDcuODc1LTMuOTg5LDEwLjg2MS0zLjk4OQ0KCQljMC4xMDcsMCwwLjE5OSwwLjAwNCwwLjI3NiwwLjAxYzAuMDM2LDAuMTk4LDAuMDcsMC41LDAuMDcsMC45MzNjMCwzLjA0Ny0wLjYyNyw2LjY1NC0xLjg1NiwxMC43MDMNCgkJYy0zMC4xMzYsOTcuNjQxLTQ0Ljc4NSwxNTcuNDk4LTQ0Ljc4NSwxODIuOTk0YzAsOC45OTgsMi41MDEsMTYuMjQyLDcuNDMyLDIxLjUyOGM1LjAyNSw1LjM5MywxMS44MDMsOC4xMjcsMjAuMTQ2LDguMTI3DQoJCWM4Ljg5MSwwLDE5LjcxMi0zLjcxNCwzMy4wOC0xMS4zNTRjMTIuOTM2LTcuMzkyLDMyLjY4LTIzLjY1Myw2MC4zNjMtNDkuNzE3QzMxNi4zMzcsMzY0LjMyNiwzMTYuNjM2LDM2MS41ODcsMzE1LjI0OSwzNTkuNTU1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzE0LjI4Miw3Ni42NzJjLTQuOTI1LTUuMDQxLTExLjIyNy03LjU5Ny0xOC43MjktNy41OTdjLTkuMzQsMC0xNy40NzUsMy42OTEtMjQuMTc2LDEwLjk3MQ0KCQljLTYuNTk0LDcuMTYtOS45MzgsMTUuOTQ2LTkuOTM4LDI2LjExM2MwLDguMDMzLDIuNDYzLDE0LjY5LDcuMzIsMTkuNzg1YzQuOTIyLDUuMTcyLDExLjEzOSw3Ljc5NCwxOC40NzYsNy43OTQNCgkJYzguOTU4LDAsMTcuMDQ5LTMuODk4LDI0LjA0Ny0xMS41ODZjNi44NzYtNy41NTMsMTAuMzYzLTE2LjQzMywxMC4zNjMtMjYuMzkzQzMyMS42NDYsODguMTA1LDMxOS4xNjksODEuNjg0LDMxNC4yODIsNzYuNjcyeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".Dy_QWo5YrwYgl1CpDrmeN {\n    margin: auto;\n    left: 50%;\n    position: fixed;\n    top: 10px;\n    background: transparent;\n    width: 0px;\n}\n\n._2HoaCJjozvjNUHLaBRPiTW {\n    display: flex;\n    justify-content: space-evenly;\n}", ""]);
// Exports
exports.locals = {
	"wrapper": "Dy_QWo5YrwYgl1CpDrmeN",
	"groupWrapper": "_2HoaCJjozvjNUHLaBRPiTW"
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(7);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./src/manager/Manager.module.css
var Manager_module = __webpack_require__(6);
var Manager_module_default = /*#__PURE__*/__webpack_require__.n(Manager_module);

// CONCATENATED MODULE: ./src/modal/Modal.js


const Modal = props => {
  const timeRef = external_react_default.a.useRef();
  const handleClick = external_react_default.a.useCallback(e => {
    e.stopPropagation();
    clearTimeout(timeRef.current);
    props.handleClose(props.id);
  }, [props.id]);
  external_react_default.a.useEffect(() => {
    if (props.config && props.config.autoClose) {
      const closeTime = props.config.closeTime || props.closeTime;
      timeRef.current = setTimeout(() => props.handleClose(props.id), closeTime);
    }
  }, [props.id, props.closeTime]);
  const NotificationBox = props.component;
  return external_react_default.a.createElement(NotificationBox, {
    handleClose: handleClick
  });
};

/* harmony default export */ var modal_Modal = (Modal);
// CONCATENATED MODULE: ./src/manager/index.js



let defaultConfig = {
  closeTime: 5000,
  autoClose: true,
  backgroundColor: ""
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "REGISTER":
      return [...state, action.payload];

    case "UNREGISTER":
      return state.filter(node => {
        return node.uniqueID !== action.payload;
      });

    default:
      return state;
  }
};

let singletonDispatch = null;

const PortalManager = props => {
  const [state, dispatch] = Object(external_react_["useReducer"])(reducer, []);
  Object(external_react_["useEffect"])(() => {
    singletonDispatch = dispatch;
    defaultConfig = { ...defaultConfig,
      ...props.config
    };
  }, [dispatch, props.config]);
  const handleClose = Object(external_react_["useCallback"])(id => {
    dispatch({
      type: "UNREGISTER",
      payload: id
    });
  }, []);
  return external_react_default.a.createElement("div", {
    className: Manager_module_default.a.wrapper
  }, external_react_default.a.createElement("div", {
    className: Manager_module_default.a.groupWrapper
  }, state.map(payload => {
    return external_react_default.a.createElement(modal_Modal, {
      key: payload.uniqueID,
      id: payload.uniqueID,
      handleClose: handleClose,
      config: { ...defaultConfig,
        ...props.config,
        ...payload.config
      },
      component: payload.node
    });
  })));
};

/* harmony default export */ var manager = (PortalManager);
const push = (node, config) => {
  const timestamp = new Date().getTime();
  const uniqueID = timestamp + "-" + Math.round(Math.random() * 1000);

  if (singletonDispatch) {
    singletonDispatch({
      type: "REGISTER",
      payload: {
        uniqueID,
        node: node,
        config: { ...defaultConfig,
          ...config
        }
      }
    });
  }
};
// CONCATENATED MODULE: ./src/portal/Portal.js



const htmlBody = document.getElementsByTagName('body')[0];

class Portal_PortalContainer extends external_react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const timestamp = new Date().getTime();
    this.el.className = "portal-toaster-" + timestamp + "_" + Math.round(Math.random() * 1000);
    htmlBody.appendChild(this.el);
  }

  render() {
    const config = this.props.config;
    return external_react_dom_default.a.createPortal(external_react_default.a.createElement(manager, {
      config: config
    }), this.el);
  }

  componentWillUnmount() {
    htmlBody.removeChild(this.el);
  }

} // const el = document.createElement('div');
// const PortalContainer = (props) => {
//   React.useEffect(() => {
//     const timestamp = new Date().getTime();
//     el.className = "portal-toaster-" + timestamp + "_" + Math.round(Math.random() * 1000);
//     htmlBody.appendChild(el);
//     return () => {
//       htmlBody.removeChild(el);
//     };
//   }, []);
//     const config = props.config;
//     return ReactDOM.createPortal(<PortalManager config={config}/>, el);
// }


/* harmony default export */ var Portal = (Portal_PortalContainer);
// EXTERNAL MODULE: ./src/notification-components/success/style.module.css
var style_module = __webpack_require__(1);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);

// EXTERNAL MODULE: ./src/notification-components/success/close.svg
var success_close = __webpack_require__(8);
var close_default = /*#__PURE__*/__webpack_require__.n(success_close);

// EXTERNAL MODULE: ./src/notification-components/success/tick.svg
var tick = __webpack_require__(9);
var tick_default = /*#__PURE__*/__webpack_require__.n(tick);

// CONCATENATED MODULE: ./src/notification-components/success/index.js




/* harmony default export */ var success = (props => {
  return external_react_default.a.createElement("div", {
    className: `${style_module_default.a.App} ${style_module_default.a.size}`
  }, external_react_default.a.createElement("span", {
    className: style_module_default.a.icon
  }, external_react_default.a.createElement("img", {
    src: tick_default.a,
    height: "25px",
    width: "25px"
  })), external_react_default.a.createElement("span", {
    className: style_module_default.a.body
  }, props.children), external_react_default.a.createElement("span", {
    className: style_module_default.a.icon,
    onClick: props.handleClose
  }, external_react_default.a.createElement("img", {
    src: close_default.a,
    height: "13px",
    width: "13px"
  })));
});
// EXTERNAL MODULE: ./src/notification-components/error/style.module.css
var error_style_module = __webpack_require__(2);
var error_style_module_default = /*#__PURE__*/__webpack_require__.n(error_style_module);

// EXTERNAL MODULE: ./src/notification-components/error/close.svg
var error_close = __webpack_require__(10);
var error_close_default = /*#__PURE__*/__webpack_require__.n(error_close);

// EXTERNAL MODULE: ./src/notification-components/error/error.svg
var error = __webpack_require__(11);
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// CONCATENATED MODULE: ./src/notification-components/error/index.js




/* harmony default export */ var notification_components_error = (props => {
  return external_react_default.a.createElement("div", {
    className: `${error_style_module_default.a.App} ${error_style_module_default.a.size}`
  }, external_react_default.a.createElement("div", {
    className: error_style_module_default.a.icon
  }, external_react_default.a.createElement("img", {
    src: error_default.a,
    height: "25px",
    width: "25px"
  })), external_react_default.a.createElement("div", {
    className: error_style_module_default.a.body
  }, props.children), external_react_default.a.createElement("div", {
    className: error_style_module_default.a.icon,
    onClick: props.handleClose
  }, external_react_default.a.createElement("img", {
    src: error_close_default.a,
    height: "13px",
    width: "13px"
  })));
});
// EXTERNAL MODULE: ./src/notification-components/info/style.module.css
var info_style_module = __webpack_require__(3);
var info_style_module_default = /*#__PURE__*/__webpack_require__.n(info_style_module);

// EXTERNAL MODULE: ./src/notification-components/info/close.svg
var info_close = __webpack_require__(12);
var info_close_default = /*#__PURE__*/__webpack_require__.n(info_close);

// EXTERNAL MODULE: ./src/notification-components/info/info.svg
var info = __webpack_require__(13);
var info_default = /*#__PURE__*/__webpack_require__.n(info);

// CONCATENATED MODULE: ./src/notification-components/info/index.js




/* harmony default export */ var notification_components_info = (props => {
  return external_react_default.a.createElement("div", {
    className: `${info_style_module_default.a.App} ${info_style_module_default.a.size}`
  }, external_react_default.a.createElement("div", {
    className: info_style_module_default.a.icon
  }, external_react_default.a.createElement("img", {
    src: info_default.a,
    height: "25px",
    width: "25px"
  })), external_react_default.a.createElement("div", {
    className: info_style_module_default.a.body
  }, props.children), external_react_default.a.createElement("div", {
    className: info_style_module_default.a.icon,
    onClick: props.handleClose
  }, external_react_default.a.createElement("img", {
    src: info_close_default.a,
    height: "13px",
    width: "13px"
  })));
});
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport SuccessToaster */__webpack_require__.d(__webpack_exports__, "SuccessToaster", function() { return success; });
/* concated harmony reexport ErrorToaster */__webpack_require__.d(__webpack_exports__, "ErrorToaster", function() { return notification_components_error; });
/* concated harmony reexport InfoToaster */__webpack_require__.d(__webpack_exports__, "InfoToaster", function() { return notification_components_info; });
/* concated harmony reexport push */__webpack_require__.d(__webpack_exports__, "push", function() { return push; });





/* harmony default export */ var src = __webpack_exports__["default"] = (Portal);


/***/ })
/******/ ]);
//# sourceMappingURL=react-portal-toaster.js.map