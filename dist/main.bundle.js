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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _Slim2 = __webpack_require__(2);

var _Decorators = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);

// IE11?
// require('babel-polyfill');

var aTemplate = __webpack_require__(12);

var APlayer = (_dec = (0, _Decorators.tag)('a-player'), _dec2 = (0, _Decorators.template)(aTemplate), _dec(_class = _dec2(_class = function (_Slim) {
  _inherits(APlayer, _Slim);

  function APlayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, APlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = APlayer.__proto__ || Object.getPrototypeOf(APlayer)).call.apply(_ref, [this].concat(args))), _this), _this.chapters = [], _this.captions = [], _this.caption = -1, _this.matches = [], _this.query = "", _this.cycle = -1, _this.showSidebar = false, _this.transcriptsOff = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdUlEQVQ4y2NgGKxAgYGB4T8ReAEuA5io5RIWKP2CgYHBEUncg4GBoZyBgeElAwNDBJL4C0IG/WBgYDiA5lVkcQ0GBgYJJIwMTkDVYQUJ0DB5AOUvwBNuClQNI2JdREicei4axgYx4hCXgKadH9B0Qkh8FBABAOnAJRVKrOykAAAAAElFTkSuQmCC", _this.transcriptsOn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAY0lEQVQ4y2NgGJTg////Cv+JAPjMYKK2izjQ+B1QR7wg1gwmBgYGBkZGxh9o4jeg9A9iHcFEgqtxhZsEVcOIhViFjIyMjDCXMTAwPGRkZFSgSawNY4OGMWBETrlkGQBNX1QDAMv3XE78oP9+AAAAAElFTkSuQmCC", _temp), _possibleConstructorReturn(_this, _ret);
  }
  //dark-color

  //white-color


  _createClass(APlayer, [{
    key: "onBeforeCreated",
    value: function onBeforeCreated() {
      //set default values
      this.autostart = this.autostart || 'false';
      this.width = this.width || '320';
      this.height = this.height || '180';
      this.displayTitle = this.displayTitle || 'false';
      this.captionsColor = this.captionsColor || "#ffffff";
      this.captionsBg = this.captionsBg || "#000000";
      this.captionsBgOpacity = this.captionsBgOpacity || '75';
      this.captionsFontSize = this.captionsFontSize || '15';
    }
  }, {
    key: "onRender",
    value: function onRender() {
      console.log('this.autostart', this.autostart);
      this.initJwPlayer();
    }
  }, {
    key: "initJwPlayer",
    value: function initJwPlayer() {
      var _this2 = this;

      // Setup JW Player
      this.jwplayer = jwplayer(this.player).setup({
        file: this.file,
        image: this.image,
        tracks: [{ file: this.chaptersFile, kind: "chapters" }, { file: this.captionsFile, kind: "captions", label: "Default" }, { file: this.thumbnailsFile, kind: "thumbnails" }],
        displaytitle: this.displayTitle,
        width: this.width,
        height: this.height,
        autostart: this.autostart,
        captions: {
          fontSize: this.captionsFontSize,
          color: this.captionsColor,
          backgroundColor: this.captionsBg,
          backgroundOpacity: this.captionsBgOpacity
        }
      });

      this.sidebar.style.height = this.height + "px";
      this.transcript.style.height = this.height - 68 + "px";

      this.jwplayer.setCurrentCaptions(0);

      this.jwplayer.addButton(this.transcriptsOff, "Toggle Transcripts", function () {
        _this2.toggleTranscriptsBtn();
      }, "toggleTranscripts");

      this.sidebar.style.maxWidth = this.width + "px";
      this.sidebar.style.display = 'none';

      // Load chapters / captions
      this.jwplayer.on('ready', function () {
        var r = new XMLHttpRequest();
        r.onreadystatechange = function () {
          if (r.readyState == 4 && r.status == 200) {
            var t = r.responseText.split("\n\n");
            t.shift();
            for (var i = 0; i < t.length; i++) {
              var c = _this2.parse(t[i]);
              _this2.chapters.push(c);
            }
            _this2.loadCaptions();
          }
        };
        r.open('GET', _this2.chaptersFile, true);
        r.send();
      });

      // Highlight current caption and chapter
      this.jwplayer.on('time', function (e) {
        var p = e.position;
        for (var j = 0; j < _this2.captions.length; j++) {
          if (_this2.captions[j].begin < p && _this2.captions[j].end > p) {
            if (j != _this2.caption) {
              var c = _this2.querySelector('#caption' + j);
              if (_this2.caption > -1) {
                _this2.querySelector('#caption' + _this2.caption).className = "";
              }
              c.className = "current";
              if (_this2.query == "") {
                _this2.transcript.scrollTop = c.offsetTop - _this2.transcript.offsetTop - 40;
              }
              _this2.caption = j;
            }
            break;
          }
        }
      });

      // Hook up interactivity
      this.transcript.addEventListener("click", function (e) {
        if (e.target.id.indexOf("caption") == 0) {
          var i = Number(e.target.id.replace("caption", ""));
          _this2.jwplayer.seek(_this2.captions[i].begin);
        }
      });
      this.search.addEventListener('focus', function (e) {
        setTimeout(function () {
          _this2.search.select();
        }, 100);
      });
      this.search.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
          _this2.resetSearch();
        } else if (e.keyCode == 13) {
          var q = e.target.value.toLowerCase();
          if (q.length > 0) {
            if (q == _this2.query) {
              if (_this2.cycle >= _this2.matches.length - 1) {
                _this2.cycleSearch(0);
              } else {
                _this2.cycleSearch(_this2.cycle + 1);
              }
            } else {
              _this2.resetSearch();
              _this2.searchTranscript(q);
            }
          } else {
            _this2.resetSearch();
          }
        }
      });
    }
    //end initJwPlayer

  }, {
    key: "loadCaptions",
    value: function loadCaptions() {
      var _this3 = this;

      var r = new XMLHttpRequest();
      r.onreadystatechange = function () {
        if (r.readyState == 4 && r.status == 200) {
          var t = r.responseText.split("\n\n");
          t.shift();
          var h = "<p>";
          var s = 0;
          for (var i = 0; i < t.length; i++) {
            var c = _this3.parse(t[i]);
            if (s < _this3.chapters.length && c.begin > _this3.chapters[s].begin) {
              h += "</p><h4>" + _this3.chapters[s].text + "</h4><p>";
              s++;
            }
            h += "<span id='caption" + i + "'>" + c.text + "</span>";
            _this3.captions.push(c);
          }
          _this3.transcript.innerHTML = h + "</p>";
        }
      };
      r.open('GET', this.captionsFile, true);
      r.send();
    }
  }, {
    key: "toggleTranscriptsBtn",
    value: function toggleTranscriptsBtn() {
      var _this4 = this;

      this.jwplayer.removeButton('toggleTranscripts');
      this.showSidebar = !this.showSidebar;
      this.sidebar.style.display = this.showSidebar ? 'initial' : 'none';
      this.jwplayer.addButton(this.showSidebar ? this.transcriptsOn : this.transcriptsOff, "Toggle Transcripts", function () {
        _this4.toggleTranscriptsBtn();
      }, "toggleTranscripts");
    }
  }, {
    key: "parse",
    value: function parse(d) {
      var a = d.split("\n");
      var i = a[1].indexOf(' --> ');
      var t = a[2];
      if (a[3]) {
        t += " " + a[3];
      }
      t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return {
        begin: this.seconds(a[1].substr(0, i)),
        btext: a[1].substr(3, i - 7),
        end: this.seconds(a[1].substr(i + 5)),
        text: t
      };
    }
  }, {
    key: "seconds",
    value: function seconds(s) {
      var a = s.split(':');
      var r = Number(a[a.length - 1]) + Number(a[a.length - 2]) * 60;
      if (a.length > 2) {
        r += Number(a[a.length - 3]) * 3600;
      }
      return r;
    }
  }, {
    key: "searchTranscript",
    value: function searchTranscript(q) {
      this.matches = [];
      this.query = q;
      for (var i = 0; i < this.captions.length; i++) {
        var m = this.captions[i].text.toLowerCase().indexOf(q);
        if (m > -1) {
          this.querySelector('#caption' + i).innerHTML = this.captions[i].text.substr(0, m) + "<em>" + this.captions[i].text.substr(m, q.length) + "</em>" + this.captions[i].text.substr(m + q.length);
          this.matches.push(i);
        }
      }
      if (this.matches.length) {
        this.cycleSearch(0);
      } else {
        this.resetSearch();
      }
    }
  }, {
    key: "cycleSearch",
    value: function cycleSearch(i) {
      if (this.cycle > -1) {
        var o = this.querySelector('#caption' + this.matches[this.cycle]);
        o.getElementsByTagName("em")[0].className = "";
      }
      var c = this.querySelector('#caption' + this.matches[i]);
      c.getElementsByTagName("em")[0].className = "current";
      this.match.innerHTML = i + 1 + " of " + this.matches.length;
      this.transcript.scrollTop = c.offsetTop - this.transcript.offsetTop - 40;
      this.cycle = i;
    }
  }, {
    key: "resetSearch",
    value: function resetSearch() {
      if (this.matches.length) {
        for (var i = 0; i < this.captions.length; i++) {
          this.querySelector('#caption' + i).innerHTML = this.captions[i].text;
        }
      }
      this.query = "";
      this.matches = [];
      this.match.innerHTML = "";
      this.cycle = -1;
      this.transcript.scrollTop = 0;
    }
  }, {
    key: "autoBoundAttributes",
    get: function get() {
      return ['autostart', 'width', 'height', 'file', 'image', 'display-title', 'chapters-file', 'captions-file', 'thumbnails-file', 'captions-color', 'captions-bg', 'captions-bg-opacity', 'captions-font-size'];
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['autostart', 'width', 'height', 'file', 'image', 'display-title', 'chapters-file', 'captions-file', 'thumbnails-file', 'captions-color', 'captions-bg', 'captions-bg-opacity', 'captions-font-size'];
    }
  }]);

  return APlayer;
}(_Slim2.Slim)) || _class) || _class);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
  try {
    var _window = window,
        _Slim = _window.Slim;

    if (!!_Slim && Symbol.slimjs && _Slim.plugins && _Slim.asap) {
      var warn = console.error || console.warn || console.log;
      return warn('Stopping script: slim.js already initialized');
    }
  } catch (err) {}

  var _$2 = Symbol.slimjs = Symbol('@SlimInternals');

  var __flags = {
    isWCSupported: 'customElements' in window && 'import' in document.createElement('link') && 'content' in document.createElement('template'),
    isIE11: !!window['MSInputMethodContext'] && !!document['documentMode'],
    isChrome: undefined,
    isEdge: undefined,
    isSafari: undefined,
    isFirefox: undefined
  };

  try {
    __flags.isChrome = /Chrome/.test(navigator.userAgent);
    __flags.isEdge = /Edge/.test(navigator.userAgent);
    __flags.isSafari = /Safari/.test(navigator.userAgent);
    __flags.isFirefox = /Firefox/.test(navigator.userAgent);

    if (__flags.isIE11 || __flags.isEdge) {
      __flags.isChrome = false;
      Object.defineProperty(Node.prototype, 'children', function () {
        return this.childNodes;
      });
    }
  } catch (err) {}

  var Internals = function Internals() {
    _classCallCheck(this, Internals);

    this.boundParent = null;
    this.repeater = {};
    this.bindings = {};
    this.inbounds = {};
    this.eventHandlers = {};
    this.rootElement = null;
    this.createdCallbackInvoked = false;
    this.sourceText = null;
    this.excluded = false;
    this.autoBoundAttributes = [];
  };

  var Slim = function (_CustomElement2) {
    _inherits(Slim, _CustomElement2);

    _createClass(Slim, null, [{
      key: 'dashToCamel',
      value: function dashToCamel(dash) {
        return dash.indexOf('-') < 0 ? dash : dash.replace(/-[a-z]/g, function (m) {
          return m[1].toUpperCase();
        });
      }
    }, {
      key: 'camelToDash',
      value: function camelToDash(camel) {
        return camel.replace(/([A-Z])/g, '-$1').toLowerCase();
      }
    }, {
      key: 'lookup',
      value: function lookup(target, expression, maybeRepeated) {
        var chain = expression.split('.');
        var o = void 0;
        if (maybeRepeated && maybeRepeated[_$2].repeater[chain[0]]) {
          o = maybeRepeated[_$2].repeater;
        } else {
          o = target;
        }
        var i = 0;
        while (o && i < chain.length) {
          o = o[chain[i++]];
        }
        return o;
      }

      // noinspection JSUnresolvedVariable

    }, {
      key: '_$',
      value: function _$(target) {
        target[_$2] = target[_$2] || new Internals();
        return target[_$2];
      }
    }, {
      key: 'polyFill',
      value: function polyFill(url) {
        if (!__flags.isWCSupported) {
          var existingScript = document.querySelector('script[data-is-slim-polyfill="true"]');
          if (!existingScript) {
            var script = document.createElement('script');
            script.setAttribute('data-is-slim-polyfill', 'true');
            script.src = url;
            document.head.appendChild(script);
          }
        }
      }
    }, {
      key: 'tag',
      value: function tag(tagName, tplOrClazz, clazz) {
        if (clazz === undefined) {
          clazz = tplOrClazz;
        } else {
          Slim.tagToTemplateDict.set(tagName, tplOrClazz);
        }
        this.classToTagDict.set(clazz, tagName);
        customElements.define(tagName, clazz);
      }
    }, {
      key: 'tagOf',
      value: function tagOf(clazz) {
        return this.classToTagDict.get(clazz);
      }

      /**
       * @deprecated
       * @param tag
       * @returns {Function} Class constructor
       */

    }, {
      key: 'classOf',
      value: function classOf(tag) {
        return customElements.get(tag);
      }
    }, {
      key: 'plugin',
      value: function plugin(phase, _plugin) {
        if (!this.plugins[phase]) {
          throw new Error('Cannot attach plugin: ' + phase + ' is not a supported phase');
        }
        this.plugins[phase].push(_plugin);
      }
    }, {
      key: 'checkCreationBlocking',
      value: function checkCreationBlocking(element) {
        if (element.attributes) {
          for (var i = 0, n = element.attributes.length; i < n; i++) {
            var attribute = element.attributes[i];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = Slim[_$2].customDirectives[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref = _step.value;

                var _ref2 = _slicedToArray(_ref, 2);

                var test = _ref2[0];
                var directive = _ref2[1];

                var value = directive.isBlocking && test(attribute);
                if (value) {
                  return true;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }
        return false;
      }
    }, {
      key: 'customDirective',
      value: function customDirective(testFn, fn, isBlocking) {
        if (this[_$2].customDirectives.has(testFn)) {
          throw new Error('Cannot register custom directive: ' + testFn + ' already registered');
        }
        fn.isBlocking = isBlocking;
        this[_$2].customDirectives.set(testFn, fn);
      }
    }, {
      key: 'executePlugins',
      value: function executePlugins(phase, target) {
        this.plugins[phase].forEach(function (fn) {
          fn(target);
        });
      }
    }, {
      key: 'qSelectAll',
      value: function qSelectAll(target, selector) {
        return [].concat(_toConsumableArray(target.querySelectorAll(selector)));
      }
    }, {
      key: 'unbind',
      value: function unbind(source, target) {
        var bindings = source[_$2].bindings;
        Object.keys(bindings).forEach(function (key) {
          var chain = bindings[key].chain;
          if (chain.has(target)) {
            chain.delete(target);
          }
        });
      }
    }, {
      key: 'root',
      value: function root(target) {
        return target.__isSlim && target.useShadow ? target[_$2].rootElement || target : target;
      }
    }, {
      key: 'selectRecursive',
      value: function selectRecursive(target, force) {
        var collection = [];
        var search = function search(node, force) {
          collection.push(node);
          var allow = !node.__isSlim || node.__isSlim && !node.template || node.__isSlim && node === target || force;
          if (allow) {
            var children = [].concat(_toConsumableArray(Slim.root(node).children));
            children.forEach(function (childNode) {
              search(childNode, force);
            });
          }
        };
        search(target, force);
        return collection;
      }
    }, {
      key: 'removeChild',
      value: function removeChild(target) {
        if (typeof target.remove === 'function') {
          target.remove();
        }
        if (target.parentNode) {
          target.parentNode.removeChild(target);
        }
        if (this._$(target).internetExploderClone) {
          this.removeChild(this._$(target).internetExploderClone);
        }
      }
    }, {
      key: 'moveChildren',
      value: function moveChildren(source, target) {
        while (source.firstChild) {
          target.appendChild(source.firstChild);
        }
      }
    }, {
      key: 'wrapGetterSetter',
      value: function wrapGetterSetter(element, expression) {
        var pName = expression.split('.')[0];
        var oSetter = element.__lookupSetter__(pName);
        if (oSetter && oSetter[_$2]) return pName;
        var srcValue = element[pName];

        var _$3 = this._$(element),
            bindings = _$3.bindings;

        bindings[pName] = {
          chain: new Set(),
          value: srcValue
        };
        bindings[pName].value = srcValue;
        var newSetter = function newSetter(v) {
          oSetter && oSetter.call(element, v);
          bindings[pName].value = v;
          element._executeBindings(pName);
        };
        newSetter[_$2] = true;
        element.__defineGetter__(pName, function () {
          return element[_$2].bindings[pName].value;
        });
        element.__defineSetter__(pName, newSetter);
        return pName;
      }
    }, {
      key: 'bindOwn',
      value: function bindOwn(target, expression, executor) {
        return Slim.bind(target, target, expression, executor);
      }
    }, {
      key: 'bind',
      value: function bind(source, target, expression, executor) {
        Slim._$(source);
        Slim._$(target);
        if (target[_$2].excluded) return;
        executor.source = source;
        executor.target = target;
        var pName = this.wrapGetterSetter(source, expression);
        if (!target[_$2].repeater[pName]) {
          source[_$2].bindings[pName].chain.add(target);
        }
        target[_$2].inbounds[pName] = target[_$2].inbounds[pName] || new Set();
        target[_$2].inbounds[pName].add(executor);
        return executor;
      }
    }, {
      key: 'update',
      value: function update(target) {
        for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          props[_key - 1] = arguments[_key];
        }

        if (props.length === 0) {
          return Slim.commit(target);
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = props[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var prop = _step2.value;

            Slim.commit(target, prop);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: 'commit',
      value: function commit(target, propertyName) {
        var $ = Slim._$(target);
        var props = propertyName ? [propertyName] : Object.keys($.bindings);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = props[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var prop = _step3.value;

            var inbounds = $.inbounds[prop];
            if (inbounds) {
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = inbounds[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var fn = _step4.value;

                  fn();
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
            var bindings = $.bindings[prop];
            if (bindings) {
              var nodes = bindings.chain;
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = nodes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var node = _step5.value;

                  Slim.commit(node, prop);
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      /*
        Class instance
        */

    }, {
      key: 'rxProp',
      get: function get() {
        return (/(.+[^(\((.+)\))])/
        ); // eslint-disable-line
      }
    }, {
      key: 'rxMethod',
      get: function get() {
        return (/(.+)(\((.+)\)){1}/
        ); // eslint-disable-line
      }
    }]);

    function Slim() {
      _classCallCheck(this, Slim);

      var _this = _possibleConstructorReturn(this, (Slim.__proto__ || Object.getPrototypeOf(Slim)).call(this));

      Slim._$(_this);
      _this.__isSlim = true;
      var init = function init() {
        Slim.debug('ctor', _this.localName);
        if (Slim.checkCreationBlocking(_this)) {
          return;
        }
        _this.createdCallback();
      };
      if (__flags.isSafari) {
        Slim.asap(init);
      } else init();
      return _this;
    }

    // Native DOM Api V1

    _createClass(Slim, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (this[_$2] && this[_$2].createdCallbackInvoked) return;
        this._initialize();
        this[_$2].createdCallbackInvoked = true;
        this.onBeforeCreated();
        Slim.executePlugins('create', this);
        this.render();
        this.onCreated();
      }

      // Native DOM Api V2

    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        this.onAdded();
        Slim.executePlugins('added', this);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.onRemoved();
        Slim.executePlugins('removed', this);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        if (newValue !== oldValue && this.autoBoundAttributes.includes[attr]) {
          var prop = Slim.dashToCamel(attr);
          this[prop] = newValue;
        }
      }
      // Slim internal API

    }, {
      key: '_executeBindings',
      value: function _executeBindings(prop) {
        Slim.debug('_executeBindings', this.localName, this);
        Slim.commit(this, prop);
      }
    }, {
      key: '_bindChildren',
      value: function _bindChildren(children) {
        Slim.debug('_bindChildren', this.localName);
        if (!children) {
          children = Slim.qSelectAll(this, '*');
        }
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var child = _step6.value;

            Slim._$(child);
            if (child[_$2].boundParent === this) continue;
            child[_$2].boundParent = child[_$2].boundParent || this;

            // todo: child.localName === 'style' && this.useShadow -> processStyleNodeInShadowMode

            scanNode(this, child);

            if (child.attributes.length) {
              var attributes = Array.from(child.attributes);
              var i = 0;
              var n = child.attributes.length;
              while (i < n) {
                var source = this;
                var attribute = attributes[i];
                if (!child[_$2].excluded) {
                  var _iteratorNormalCompletion7 = true;
                  var _didIteratorError7 = false;
                  var _iteratorError7 = undefined;

                  try {
                    for (var _iterator7 = Slim[_$2].customDirectives[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                      var _ref3 = _step7.value;

                      var _ref4 = _slicedToArray(_ref3, 2);

                      var check = _ref4[0];
                      var directive = _ref4[1];

                      var match = check(attribute);
                      if (match) {
                        directive(source, child, attribute, match);
                      }
                    }
                  } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                      }
                    } finally {
                      if (_didIteratorError7) {
                        throw _iteratorError7;
                      }
                    }
                  }
                }
                i++;
              }
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      }
    }, {
      key: '_resetBindings',
      value: function _resetBindings() {
        Slim.debug('_resetBindings', this.localName);
        this[_$2].bindings = {};
      }
    }, {
      key: '_render',
      value: function _render(customTemplate) {
        var _this2 = this;

        Slim.debug('_render', this.localName);
        Slim.executePlugins('beforeRender', this);
        this._resetBindings();[].concat(_toConsumableArray(this.children)).forEach(function (childNode) {
          if (childNode.localName === 'style') {
            _this2[_$2].externalStyle = document.importNode(childNode).cloneNode();
          }
        });
        Slim.root(this).innerHTML = '';
        var templateString = customTemplate || this.template;
        var template = document.createElement('template');
        template.innerHTML = templateString;
        var frag = template.content.cloneNode(true);
        var externalStyle = this[_$2].externalStyle;

        if (externalStyle) {
          frag.appendChild(this[_$2]);
        }
        var scopedChildren = Slim.qSelectAll(frag, '*');
        var doRender = function doRender() {
          (_this2[_$2].rootElement || _this2).appendChild(frag);
          _this2._bindChildren(scopedChildren);
          _this2._executeBindings();
          _this2.onRender();
          Slim.executePlugins('afterRender', _this2);
        };
        if (this.useShadow) {
          doRender();
        } else {
          Slim.asap(doRender);
        }
      }
    }, {
      key: '_initialize',
      value: function _initialize() {
        var _this3 = this;

        Slim.debug('_initialize', this.localName);
        if (this.useShadow) {
          if (typeof HTMLElement.prototype.attachShadow === 'undefined') {
            this[_$2].rootElement = this.createShadowRoot();
          } else {
            this[_$2].rootElement = this.attachShadow({ mode: 'open' });
          }
        } else {
          this[_$2].rootElement = this;
        }
        var observedAttributes = this.constructor.observedAttributes;
        if (observedAttributes) {
          observedAttributes.forEach(function (attr) {
            var pName = Slim.dashToCamel(attr);
            _this3[pName] = _this3.getAttribute(attr);
          });
        }
      }

      // Slim public / protected API

    }, {
      key: 'commit',
      value: function commit() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        Slim.commit.apply(Slim, [this].concat(args));
      }
    }, {
      key: 'update',
      value: function update() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        Slim.update.apply(Slim, [this].concat(args));
      }
    }, {
      key: 'render',
      value: function render(tpl) {
        this._render(tpl);
      }
    }, {
      key: 'onRender',
      value: function onRender() {}
    }, {
      key: 'onBeforeCreated',
      value: function onBeforeCreated() {}
    }, {
      key: 'onCreated',
      value: function onCreated() {}
    }, {
      key: 'onAdded',
      value: function onAdded() {}
    }, {
      key: 'onRemoved',
      value: function onRemoved() {}
    }, {
      key: 'find',
      value: function find(selector) {
        return this[_$2].rootElement.querySelector(selector);
      }
    }, {
      key: 'findAll',
      value: function findAll(selector) {
        return Slim.qSelectAll(this[_$2].rootElement, selector);
      }
    }, {
      key: 'callAttribute',
      value: function callAttribute(attr, data) {
        var fnName = this.getAttribute(attr);
        if (fnName) {
          return this[_$2].boundParent[fnName](data);
        }
      }
    }, {
      key: 'autoBoundAttributes',
      get: function get() {
        return [];
      }
    }, {
      key: 'useShadow',
      get: function get() {
        return false;
      }
    }, {
      key: 'template',
      get: function get() {
        return Slim.tagToTemplateDict.get(Slim.tagOf(this.constructor));
      }
    }]);

    return Slim;
  }(_CustomElement);

  Slim.classToTagDict = new Map();
  // noinspection JSAnnotator
  Slim.tagToTemplateDict = new Map();
  // noinspection JSAnnotator
  Slim.plugins = {
    create: [],
    added: [],
    beforeRender: [],
    afterRender: [],
    removed: []
  };

  Slim.debug = function () {};
  Slim.asap = window && window.requestAnimationFrame ? function (cb) {
    return window.requestAnimationFrame(cb);
  } : typeof setImmediate !== 'undefined' ? setImmediate : function (cb) {
    return setTimeout(cb, 0);
  };

  Slim[_$2] = {
    customDirectives: new Map(),
    uniqueCounter: 0,
    supportedNativeEvents: ['click', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mousedown', 'mouseup', 'dblclick', 'contextmenu', 'wheel', 'mouseleave', 'select', 'pointerlockchange', 'pointerlockerror', 'focus', 'blur', 'input', 'error', 'invalid', 'animationstart', 'animationend', 'animationiteration', 'reset', 'submit', 'resize', 'scroll', 'keydown', 'keypress', 'keyup', 'change']
  };

  Slim.customDirective(function (attr) {
    return attr.nodeName === 's:switch';
  }, function (source, target, attribute) {
    var expression = attribute.value;
    var oldValue = void 0;
    var anchor = document.createComment('switch:' + expression);
    target.appendChild(anchor);
    var children = [].concat(_toConsumableArray(target.children));
    var defaultChildren = children.filter(function (child) {
      return child.hasAttribute('s:default');
    });
    var fn = function fn() {
      var value = Slim.lookup(source, expression, target);
      if (String(value) === oldValue) return;
      var useDefault = true;
      children.forEach(function (child) {
        if (child.getAttribute('s:case') === String(value)) {
          if (child.__isSlim) {
            child.createdCallback();
          }
          anchor.parentNode.insertBefore(child, anchor);
          useDefault = false;
        } else {
          Slim.removeChild(child);
        }
      });
      if (useDefault) {
        defaultChildren.forEach(function (child) {
          if (child.__isSlim) {
            child.createdCallback();
          }
          anchor.parentNode.insertBefore(child, anchor);
        });
      } else {
        defaultChildren.forEach(function (child) {
          Slim.removeChild(child);
        });
      }
      oldValue = String(value);
    };
    Slim.bind(source, target, expression, fn);
  });

  Slim.customDirective(function (attr) {
    return (/^s:case$/.exec(attr.nodeName)
    );
  }, function () {}, true);
  Slim.customDirective(function (attr) {
    return (/^s:default$/.exec(attr.nodeName)
    );
  }, function () {}, true);

  // supported events (i.e. click, mouseover, change...)
  Slim.customDirective(function (attr) {
    return Slim[_$2].supportedNativeEvents.indexOf(attr.nodeName) >= 0;
  }, function (source, target, attribute) {
    var eventName = attribute.nodeName;
    var delegate = attribute.value;
    Slim._$(target).eventHandlers = target[_$2].eventHandlers || {};
    var allHandlers = target[_$2].eventHandlers;
    allHandlers[eventName] = allHandlers[eventName] || new WeakSet();
    var handler = function handler(e) {
      try {
        source[delegate].call(source, e); // eslint-disable-line
      } catch (err) {
        err.message = 'Could not respond to event "' + eventName + '" on ' + target.localName + ' -> "' + delegate + '" on ' + source.localName + ' ... ' + err.message;
        console.warn(err);
      }
    };
    allHandlers[eventName].add(handler);
    target.addEventListener(eventName, handler);
    handler = null;
  });

  Slim.customDirective(function (attr) {
    return attr.nodeName === 's:if';
  }, function (source, target, attribute) {
    var expression = attribute.value;
    var path = expression;
    var isNegative = false;
    if (path.charAt(0) === '!') {
      path = path.slice(1);
      isNegative = true;
    }
    var oldValue = void 0;
    var anchor = document.createComment('{$target.localName} if:' + expression);
    target.parentNode.insertBefore(anchor, target);
    var fn = function fn() {
      var value = !!Slim.lookup(source, path, target);
      if (isNegative) {
        value = !value;
      }
      if (value === oldValue) return;
      if (value) {
        if (target.__isSlim) {
          target.createdCallback();
        }
        anchor.parentNode.insertBefore(target, anchor.nextSibling);
      } else {
        Slim.removeChild(target);
      }
      oldValue = value;
    };
    Slim.bind(source, target, path, fn);
  }, true);

  var scanNode = function scanNode(source, target) {
    var textNodes = Array.from(target.childNodes).filter(function (n) {
      return n.nodeType === Node.TEXT_NODE;
    });
    var masterNode = target;
    textNodes.forEach(function (target) {
      var updatedText = '';
      var matches = target.nodeValue.match(/\{\{([^\}\}]+)+\}\}/g); // eslint-disable-line
      var aggProps = {};
      var textBinds = {};
      if (matches) {
        Slim._$(target).sourceText = target.nodeValue;
        matches.forEach(function (expression) {
          var oldValue = void 0;
          var rxM = /\{\{(.+)(\((.+)\)){1}\}\}/.exec(expression);
          if (rxM) {
            var fnName = rxM[1];
            var pNames = rxM[3].split(' ').join('').split(',');
            pNames.map(function (path) {
              return path.split('.')[0];
            }).forEach(function (p) {
              return aggProps[p] = true;
            });
            textBinds[expression] = function (target) {
              var args = pNames.map(function (path) {
                return Slim.lookup(source, path, target);
              });
              var fn = source[fnName];
              var value = fn ? fn.apply(source, args) : undefined;
              if (oldValue === value) return;
              updatedText = updatedText.split(expression).join(value || '');
            };
            return;
          }
          var rxP = /\{\{(.+[^(\((.+)\))])\}\}/.exec(expression); // eslint-disable-line
          if (rxP) {
            var path = rxP[1];
            aggProps[path] = true;
            textBinds[expression] = function (target) {
              var value = Slim.lookup(source, path, masterNode);
              if (oldValue === value) return;
              updatedText = updatedText.split(expression).join(value || '');
            };
          }
        });
        var chainExecutor = function chainExecutor() {
          updatedText = target[_$2].sourceText;
          Object.keys(textBinds).forEach(function (expression) {
            textBinds[expression](target);
          });
          target.nodeValue = updatedText;
        };
        Object.keys(aggProps).forEach(function (prop) {
          Slim.bind(source, masterNode, prop, chainExecutor);
        });
      }
    });
  };

  Slim.customDirective(function (attr) {
    return attr.nodeName === 's:id';
  }, function (source, target, attribute) {
    Slim._$(target).boundParent[attribute.value] = target;
  });

  // bind:property
  Slim.customDirective(function (attr) {
    return (/^(bind):(\S+)/.exec(attr.nodeName)
    );
  }, function (source, target, attribute, match) {
    var tAttr = match[2];
    var tProp = Slim.dashToCamel(tAttr);
    var expression = attribute.value;
    var oldValue = void 0;
    var rxM = Slim.rxMethod.exec(expression);
    if (rxM) {
      var pNames = rxM[3].split(' ').join('').split(',');
      pNames.forEach(function (pName) {
        Slim.bind(source, target, pName, function () {
          var fn = Slim.lookup(source, rxM[1], target);
          var args = pNames.map(function (prop) {
            return Slim.lookup(source, prop, target);
          });
          var value = fn.apply(source, args);
          if (oldValue === value) return;
          target[tProp] = value;
          target.setAttribute(tAttr, value);
        });
      });
      return;
    }
    var rxP = Slim.rxProp.exec(expression);
    if (rxP) {
      var prop = rxP[1];
      Slim.bind(source, target, prop, function () {
        var value = Slim.lookup(source, expression, target);
        if (oldValue === value) return;
        target.setAttribute(tAttr, value);
        target[tProp] = value;
      });
    }
  });

  Slim.customDirective(function (attr) {
    return attr.nodeName === 's:repeat';
  }, function (source, repeaterNode, attribute) {
    var path = attribute.value;
    var tProp = 'data'; // default
    if (path.indexOf(' as ') > 0) {
      var _path$split = path.split(' as ');

      var _path$split2 = _slicedToArray(_path$split, 2);

      path = _path$split2[0];
      tProp = _path$split2[1];
    }

    // initialize clones list
    var clones = [];

    // create mount point and repeat template
    var mountPoint = document.createComment(repeaterNode.localName + ' s:repeat="' + attribute.value + '"');
    var parent = repeaterNode.parentElement || Slim.root(source);
    parent.insertBefore(mountPoint, repeaterNode);
    repeaterNode.removeAttribute('s:repeat');
    var clonesTemplate = repeaterNode.outerHTML;
    repeaterNode.remove();

    // prepare for bind
    var oldDataSource = [];

    var replicate = function replicate(n, text) {
      var temp = text;
      var result = '';
      if (n < 1) return result;
      while (n > 1) {
        if (n & 1) result += temp;
        n >>= 1;
        temp += temp;
      }
      return result + temp;
    };

    // bind changes
    Slim.bind(source, mountPoint, path, function () {
      // execute bindings here
      var dataSource = Slim.lookup(source, path) || [];
      // read the diff -> list of CHANGED indicies

      var fragment = void 0;

      // when data source shrinks, dispose extra clones
      if (dataSource.length < clones.length) {
        var disposables = clones.slice(dataSource.length);
        disposables.forEach(function (node) {
          Slim.unbind(source, node);
          if (node[_$2].subTree) {
            node[_$2].subTree.forEach(function (subNode) {
              return Slim.unbind(source, subNode);
            });
          }
          node.remove();
        });
        clones.length = dataSource.length;
      }

      // build new clones if needed
      if (dataSource.length > clones.length) {
        var offset = clones.length;
        var diff = dataSource.length - clones.length;
        var html = replicate(diff, clonesTemplate); //  Array(diff).fill(clonesTemplate.innerHTML).join('');
        var range = document.createRange();
        range.setStartBefore(mountPoint);
        fragment = range.createContextualFragment(html);
        // build clone by index

        var _loop = function _loop(i) {
          var dataIndex = i + offset;
          var dataItem = dataSource[dataIndex];
          var clone = fragment.children[i];
          Slim._$(clone).repeater[tProp] = dataItem;
          var subTree = Slim.qSelectAll(clone, '*');
          subTree.forEach(function (node) {
            Slim._$(node).repeater[tProp] = dataItem;
          });
          clone[_$2].subTree = subTree;
          clones.push(clone);
        };

        for (var i = 0; i < diff; i++) {
          _loop(i);
        }
        var fragmentTree = Slim.qSelectAll(fragment, '*');
        source._bindChildren(fragmentTree);
      }

      var init = function init(target, value) {
        target[tProp] = value;
        Slim.commit(target, tProp);
      };

      dataSource.forEach(function (dataItem, i) {
        if (oldDataSource[i] !== dataItem) {
          var rootNode = clones[i];[rootNode].concat(_toConsumableArray(rootNode[_$2].subTree || Slim.qSelectAll(rootNode, '*'))).forEach(function (node) {
            node[_$2].repeater[tProp] = dataItem;
            node[_$2].repeater.__node = rootNode;
            if (node.__isSlim) {
              node.createdCallback();
              Slim.asap(function () {
                return init(node, dataItem);
              });
            } else {
              init(node, dataItem);
            }
          });
        }
      });
      oldDataSource = dataSource.concat();
      if (fragment) {
        Slim.asap(function () {
          parent.insertBefore(fragment, mountPoint);
        });
      }
    });
  }, true);

  if (window) {
    window['Slim'] = Slim;
  }
  if (true) {
    module.exports.Slim = Slim;
  }
})();


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
    tag: function(selector) {
        return function(target) {
            window.Slim.tag(selector, target);
        };
    },

    template: function(tpl) {
        return function(target) {
            target.prototype.__defineGetter__('template', function() {
                return tpl;
            });
        }
    },

    useShadow: function(value) {
        return function(target) {
            target.prototype.__defineGetter__('useShadow', function() { return value; });
        }
    },

    /**
     * @experimental
     * Works only with native browser support, as polyfills breaks the prototype chain
     */
    // attribute: function(target, key, descriptor) {
    //     const clazz = target.constructor
    //     const observedAttributes = target.constructor.observedAttributes || []
    //     const attr = window.Slim.camelToDash(key);
    //     observedAttributes.push(attr);
    //     Slim._$(target).autoBoundAttributes.push(attr);
    //     Object.defineProperty(clazz, 'observedAttributes', {
    //         get: () => {
    //             return [...observedAttributes, ...Slim._$(target).autoBoundAttributes]
    //         }
    //     })
    //     Slim.wrapGetterSetter(target, key)
    //     descriptor.configurable = true
    //     descriptor.writable = true
    //     return descriptor;
    // }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(10)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ":host {\n  overflow: hidden; }\n\n.player-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n.sidebar {\n  flex: 1;\n  background-color: #000;\n  color: white;\n  font-family: Arial, sans-serif; }\n\n.sidebar h3 {\n  padding: 20px;\n  margin: 0;\n  font-size: 14px;\n  color: #fff;\n  text-align: left; }\n\n.searchbox {\n  margin: 10px 20px;\n  display: block;\n  position: relative; }\n\n.searchbox input {\n  line-height: 20px;\n  font-size: 16px;\n  color: #000;\n  width: 100%;\n  padding: 5px 20px 5px 30px;\n  background: #fff url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTBFQzI1Q0JFQTgwMTFFM0IwNkNGMjI1ODBDQTc0QjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTBFQzI1Q0FFQTgwMTFFM0IwNkNGMjI1ODBDQTc0QjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcyN0U0Q0VFREFFNDExRTNCODY2REJFMzk2OUEzQzNFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcyN0U0Q0VGREFFNDExRTNCODY2REJFMzk2OUEzQzNFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m7T4RAAAAXtJREFUeNrs1s0rRFEcxvEZRORlwY7Cwm6WIkKUjVCM7GQjDU2iWPgXJEopZmVhQcjrgqyUl0iRlL0NSSKhhMb31jOlaZiZzp3J4v7q051758x5Zs4959xxB4NBVzIrxZXkcgJtr7RIF30+X7TPtaAPtcjFMw4xg61Qo0AgYPwLs7CiTpvxhH0dm7CJVbWzZUjn0YELVKEYdTpW4AztWLQj0OrIi0vU4Djs/VMN8Tla0Wka2KujHy+/tHlDf2gqmAaW4xEHUdqd4BaVpoH5uEMse+E9sk0Dr1H61wxUZaAMN6aBO+qsJ0q7bmRi1zRwEu8Y0yyNVNWYwCfGTQLTUY8Bffs9TGsZlGhNTul6DgZxFfPWFlZ5WFfgHNowq+XhjzBZrGvLce2lP6oI2/DoPBUbup9eDW0BHnCENbzGvXmrPOq4UOfWkA3rtXUvF8SWx1ODdv9Q2AiG8JWQx5N2fWvhfqALS4l+AI9qG2u0M8wqt/OvzQn894HfAgwA8y9NYLH5kysAAAAASUVORK5CYII=\") no-repeat top left;\n  border-radius: 3px;\n  border: none; }\n\n.searchbox .match {\n  position: absolute;\n  right: 10px;\n  /* top: 20px; */\n  line-height: 20px;\n  font-size: 14px; }\n\n.transcript {\n  padding: 0 10px;\n  overflow: auto; }\n\n.transcript p {\n  font-size: 15px;\n  overflow: hidden;\n  text-align: left;\n  color: #fff;\n  line-height: 20px;\n  margin: 0; }\n\n.transcript span {\n  display: inline;\n  padding: 4px 2px;\n  line-height: 24px;\n  cursor: pointer;\n  color: #fff; }\n\n.transcript span.current {\n  background: #ff6600;\n  color: #000; }\n\n.transcript span:not(.current):hover {\n  color: #ff6600; }\n\n.transcript span em {\n  font-style: normal;\n  background: #666;\n  color: #FFF; }\n\n.transcript span em.current {\n  background: #ff0046; }\n\n.transcript h4 {\n  margin: 25px 0 15px 0;\n  text-align: left;\n  color: #fff;\n  font-weight: bold; }\n\n.toggleTranscripts {\n  color: red; }\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-container\">\n\t<div s:id=\"player\"></div>\n\t<div s:id=\"sidebar\" class=\"sidebar\">\n\t\t<div s:id=\"searchbox\" class=\"searchbox\">\n      <label for=\"search\">Search</label>\n      <span s:id=\"match\" class=\"match\"></span>\n\t\t  <input s:id=\"search\" type=\"search\" class=\"search\" />\n\t\t</div>\n\t\t<div s:id=\"transcript\" class=\"transcript\"></div>\n\t</div>\n</div>\n";

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map