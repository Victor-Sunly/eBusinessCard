(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 17:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 18);

/***/ }),

/***/ 18:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 19);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 19:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** C:/learn/eBusinessCard/pages.json ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 54:
/*!***********************************************!*\
  !*** C:/learn/eBusinessCard/static/card2.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBoRXhpZgAASUkqAAgAAAADABoBBQABAAAAMgAAABsBBQABAAAAOgAAAGmHBAABAAAAQgAAAAAAAAAsAQAAAQAAACwBAAABAAAAAgACoAQAAQAAAGQCAAADoAQAAQAAALEBAAAAAAAA/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgBsQJkAwERAAIRAQMRAf/EABwAAQEBAAMBAQEAAAAAAAAAAAABAgMEBQYHCP/EAE0QAAIBAwEDBwcIBwUHBAMAAAABAgMEEQUSITEGE0FRYXGhIjKBkbHB0RQjM0JSYnLhBxVDY4KS8BY0U3ODJDVEorLC0hclRZNUZPH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAMxEBAAICAAUCBQMFAAICAwAAAAECAxEEEiExQVFhExQyofAFQpEiUnGBsTPRFcFTYvH/2gAMAwEAAhEDEQA/AP7LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkCZAZAAUBkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGwJkAAAF0mwANGwaNhFAGQKAAAAAAAAAAAAACAAAAAAAAAAABkBkC5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNgAAAuk2FRAGQGQGQGQGSKo0bCKuQAAAAAAAAAAAAhUAAAaNg0bBo2EUAAAAAAAAAAGQKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEYAAAKgVEbAgAAAAAAAFyRVGjYRVAAAAAAAAAAM5NMqAAAAAAAAJpdg0bCKAAAAAAAAMgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAAFQKiZAgAABG8AZbYQAAXLAqkF2oAC5IqkUyBQAAAAAAAMGmQBkC5AZAAUAAAAABNLsIoAAAAAAABUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsAALpNhURsCAADeAMt9QTaMCBEBsGzYDa5CiYGlLrC7aAuQBNLtSKZAoAAAAAYNMgAAAAAMgXIACgAAAATS7CGwKAAAAABUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgQAwAAqIVEAAAMuXUE2y2AyEZbKI2ETIDIDPaBUxoVMi7VMG2kwrSfWF2oFyBSKDRsyRTIDIELpNoVAAAAAAAAAAyBcgUATYDYEAAF2BQAAAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAjYAAAAFRGyogACOXUDbLYRlsJtHIoy5BGWwm0yAyAyAAZBtVIK0mBpMitJgVMK0mgu1AuQGQGQGQIAAAAAAAAAAAAAAQVMaFIAAAACgUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAEbAAAAAqI2VEAjl1A2y2EZbCbZcioy2DbLYRMlEbAZAmQGRsXJAyBcgUCphdtKRBpMLtpMCphVUusLtcoC5XWBG0DbLkEVSBtcoKoAAAAAAAAAAAAFJbWzlZxnGd+CaNtEAAAABQKAAABAUAAAAAAAAAAAAAAAAAAAAAABGwAAAXSbTIEKiNg2y2Ede4vLWhnnrmlT7JTSZqK2ntDnbLSveXn3HKDS6e5V3UfVCDZ0rw958OFuMxR5dCvyrto/RWtaf4mo/E6xws+ZcbcfXxDpVuVly/orSlH8UnL4HSOFjzLlPH2ntDqVeU2qS810Yfhh8TccNRynjcsuvPX9Wk99413Qivcbjh8ceGJ4vNPlwz1nVHxvq3oeC/Bx+jPzOX+5wy1bU9/+33H87L8Knok8Rl/ulHrGqL/AI+4/nZfg09E+Yy/3SxPlHqFDz9UcPxyXvEcPSf2tRxGX+5xvlzc0fO1WnPs5uMvYi/J1n9qxxeaPJ/6mVKT3xp1l/lNe9E/+PiXWONyx303H9K9KKxLR5zfWqyj7mZn9M//AGdI4+fNXBX/AEtVv2Gh04/juXL2RRqP0uPNvsTx8+KujV/SxrbzzOnafD8SnL/uR0j9Mx+ZlmeOv4iHRuP0ocqanmTs6OfsUM+1s6R+nYY9WZ43K6FX9InLCo8frdxXVGhTX/adI4HBH7f+ufzeb1dWpy25VzW/XbtfhaXsRuODwR+1Pmcs/ucE+V/Kh/8Az+oruuJIvyuH+2Cc+T+6XNb61y7uf7tqGv1s/wCHOrL2EnFw1e8R9ljJnntMvRt6n6U5pc3/AGk7NuNRf9RymOC88v2bieJ93pW9f9MFPyqa1Nr95Tpy/wCpHKY4Ge+vu6RPFx229G31/wDS9bJOro3yrsqWsd/8jRznDwNu1tf7dIy8VHeHo2/6ROVVpu1rkLfqHTUoU6kUvQ4teJyngcNvoyQ6RxWSPqo9Cn+ljkq4/wC0u/tKq86lVt3tL1No5z+m5vGp/wBtfO4/L9APnvaAALtMG1UkF2oAAAAAAAHQ13VKGk2Mrir5UnupwzvnI3jpN51Djnz1w05pfnH661D9bfrPn3z+f4dn7OOo9/wq8vK+D8zk+J8TfV+j6DqlDVbKNxR8mS3VIZ3wkfPyY5pOpfe4fPXNXmh6JzdwIAAAANAAABQAAAAAAAAAAAAAAAAAAAAAI2AAF0m0yBG92W9xUdG61bTrbKqXVNtdEXtPwN1xXntDjfiMdO8vKuuVNCO6hb1KnbJ7K952rw0+Zea/H1j6YeXc8pdRqbqfNUV92OX4navD0ju8tuNyT26PNub+9uM89dVprq2nj1HSKVjtDhbLe3eXVNuMoywMS4lGGUdW5vbShnnbinFro2sv1Gopae0I8+vygsafmKrVfZHC8TrGGxp0a/KOq/obaEe2Um/gbjBHmTToV9a1Cpn55QXVGKOkYqwOnWurmr9JcVZLqc3g1FYjwunWfSaGGBmXSUYYSXLSs7qslzdvVkutRePWTmiO8jsUdE1CfnU4U8/akvcSctYNw7VPk5PCdW5iuyMcmJzekJzO/p2i6Vb1lO7t6l5Dpg6rh4oxfJeY/pnS1vET1jb7fQofo/i4wnodG3n/APsRdaOe9t+KR4MvzXi2/wDHR9DFl4ae9dPudMt9KjSVTTaFlGHRK3hFLwPn3tferTL6FOTW6u7lnNvaqQ0q7RNBtDQjkNG2JRhJ5lGLfai70z3dojoAAAAABVJg26euagtN0utebCm4Y2Yt4y28G8dOe2nLPm+Fjm7xbDlpYVWo3dCrbN/WXlx8N/gdbcNaOzyY/wBSx2+qNPobO7tbylzlrXp1o9cZZx39RwtWa9Je6mSt43WducjbFxVp0KE61WahThFylJ9CQiNzqEtaKxMy/LeUOqVdW1CVxLMaa8mlD7MfifSx44pXT83xGec1+bw846OG3o8ntVq6TqMbiOZUn5NWH2o/FHPLji9dPRw2ecN+aOz9Tt61OvQhWpTUqc4qUZLpTPmTExOpfpK2i0bhsjTgvb20sqfOXdxTox6NqWM9y6TVazbtDlfJXHG7Tp87f8tbGk3Gzt6tw/tS8iPx8D0V4W095eHJ+pUj6Y293RL5ajpdC8UVF1I74p8Gnh+w4ZKclph7MGX4uOL+rumHYCgAAgKAAAAAAAAAAAAAAAAAAJkAXSbQDjr3FGhHarVYU11ylg1ETPZm1q17y8q75Q2NLKpbdeX3VhetnWuC093mvxmOvbq8i75S3tTKoQp0F142n47vA7V4esd3kvxt5+no8q6vLq5+nuKlTsct3qO9aVr2h5r5L3+qXWNS5yjCMsqMsDguLq2t189Xpw7HLf6jUVme0My8y65QWdPKpRqVmuzC8fgdK4bT3HmXPKC7m2qUKdJd2X4naMNY7o8y4vLqvjnbipJdW1u9R0isR2gdVmxiQVGWBl9JURRlKSjFNt8EkFduhpN/W3q3lBdc/J/MxOSseR3aHJyb317mK7ILPiznOb0hnbu0tDsKe+UJ1X9+XwMTltJt26VrbUfoqFOGOlRWTM2me6NSJAwzQzIJDL4FRmQabtbu5s6vO2tepRn1wk0Sa1t0mFre1J3WdPptJ5dX1BqGoUY3MPtx8mfwfgeTJwVZ+no9uPj7V6Xjb7HR+UGl6qkrW5jzr/ZT8mfq6fRk8OTBfH9UPoYuIx5fpl6mTi7GQqNhGHLeE27Y26rkBkmgyBcgAAHy36Rq2xplvQT+kq7T7kvzR6eGj+qZfN/UrapFfWXwp7XxnJbV69tVVW3qzpVFwlCWGSYiekrW9qTus6fV6JyxqRcaOqR248Oegt6710+g8uThvNX08H6jMdMn8nLnWqVe3pWNlWjUp1EqlSUHlNdEff6hw+KYnmleP4mLVilJ6S+QPW+UAAPsOQ2uUbe2rWV9XjTp006lKUn0dMffjvPJxGKZnmq+rwHExWs0vPZnW+WVao5UdLhzUOHPTWZPuXR/XAY+GiOtjP8AqMz0x/y+UuK9a4qurXqzq1HxlOWWeqIiI1D5trTad2nbBWX6B+jivt6NWot76VZ47ml78ng4qNW2+3+m23jmPSX1B5n0AKBQABQAAAAAAAAAAAAAAGQJkAXSbcFzd21ss160Idje/wBRqtZntDFsla/VLybvlHbwTVvSnVfW/JXxO1cEz3ea/GVj6Y28i71zUK+Uqiox6qax48TtXDWHlvxWS3nTzZznOTlOUpSfFt5Z1iNPNMzPWWGVGGIZZfA1AglJdK71Kyt8qpcRcl9WO9+BuKWntDMzDyrrlEuFtb/xVH7l8TtXB6yzt5V1qt9XypV5Rj1Q8n2HWMdY8G3nybby3lnSBH0kgZfFmkZfQBhlGqNvXuJbNCjOo/urOCTMR3V6Vvyfu6mHWnCiurzn4bvE5zmiOyPQoaFZUt9RTrP7zwvUjnOa09kd+lRo0Y4pUoU192ODEzM90VkhUCMsQMPpNDEhAwzQzIJDL4FRmQaYkWEYZRjLTTTaaeU0CH0WicstU09xp3MvltBbsVH5aXZL45PJl4Sl+3SXsxcZenSesPu9E5RaZq8VG2rbNbG+jU3TXx9B87Lw98ffs+li4imXtPV6rZxdmXII7uSadFyF2A2A2AAoB8V+kibdzZ08+bCUvW18D2cLHSXx/wBTn+qsPkz1PmAEk1GLk3hJZYjqPmqeo16d5OvF5U5ZcHwaPdOKJrpl9BaXFO5oqpTe7pXSn1HjvSazqVcxlXBeXNO1oupUfculs1Sk2nUI8CeoV6l5CvJ7oSyorgkeuMURXSbfSxalFSTymso8TW1C7APsv0ZTaqX1PrUJf9R5OKjs+r+lz1tH+H2p4n1lABQKAVAAAAAAAZAZAZAmQGQGQDYHBc3dtbLNetCHY3v9RqtJt2hi+StO8vKuuUNCOVb0ZVH1y3I71wT5eW/F1j6YeVdaxf3GVzvNxfRT3ePE61xVh5r8Rkt5edJtttttvpZ1cJYlwLDMowSyVlGB0bvUbO33VK0XL7Md7N1paWJmIeRdcoZPMbagl96b9yO9cPqzN/R5N3fXdy2qtebi/qp4XqR1ilY7MzO3TfA0jLLAkukowywqPpJAtOnUqz2KUJTk+iKyyzMR3R6NroN3VxKtKNGPU979RytmiOxp6ttotjQ3yg60uue9ergc5y2kd+EYwSjCKjFcElhGEJdAHHLpBLLLKMMQqBGWIGH0mhiQgYZoZkEhl8CozINMSLCMMo42CGXxEEsqUoTUoScZJ5TTw0XusdH1mgctry02aGpqV1R4c5+0j/5enf2nizcFW3WnSXsw8bavS/WH3NlqtheW8a9td0pwl97DXY0+B822K1J1MPo1y1tG4l6FKtKG570ZmHWLadmnUjNeS/QZ03ExLeSaVcgMgXIALt8P+kb/AHhav90/ae3hfpl8b9S+uP8AD5Y9L5wB1NXqc3p1Zri1s+vcdMUbvCS+Yye9HZ0+6laXCmsuD3TXWjGSkXjQ+ldWmqPPbS5vZ2s9h4OWd6afM391O7uHUluit0Y9SPdSkUjTLrmx9PpFTnNOot8Utn1bjw5Y1eVds5qAfXfo0z8rvOrm4+1nk4rtD6n6X9Vn3B432FyNAQUq7Bo2EUyAyAAAAAAAAA4Lm7trdZrVoQ7M7/Uaik27QxbJWveXl3XKCjDKt6Mqj65bkdq4J8vNbi4j6YeVdatfV3h1ubi+inu8eJ1rirDy34jJby6Em28t5bO0OMoJQIMsoxLgWGZde6u7a2Xz1aMH1Z3+o1Wk27M2mIeRd8oIpNW1Fy+9PcvUdq4PVznJ6PHu9RvLndVry2X9WO5HauOtezE2mXT+JtGGWBmXEKw+ARllgSXSUdux0q+vWuZotRfCUty/P0GLZK17tRG30mnci7iWJVqFaq30NbEfHeeW3F1jtLrXBkt2h9Ba8l7mnHZhG3oR6k/gjz24qsuscFknu7UOTD/aXiXZGn+ZieK9IdI4L1lyx5M2317ms+5JGfmrejUcDXzLX9m7Bftbh/xL4D5q6/JY/WVfJzT+uv8Azr4E+ZufJ42JcmtPb8+4X8S+A+aufJ4/dxy5L2L4V7hd7i/ca+bv6M/I09ZcFTkrRedi8qLvgn7yxxc+iTwMeJcE+SV1j5m5hPvg18TccZXzDnPAW8S6tbkrrUPMtlV/A/jg3HFY58sTwWaO0bdKeg6zGTT0u7z2U2zr8fHP7nOeGzR+2XFPRNZX/wAVe+ihJ+4sZsf90JPD5f7Z/h16umalT+k0+7h+KjJe41GSk9phmcOSO9Z/h1a1OpTeKkJQf3lg3ExPZz1Md3E+BplmQaYkWEYZRxsEMviIJYlxKqS4LvDJHgSVh+5HwH6Ey0008Mg5qdy1umsrrJpqL+rGqX6stNq3kKfPc2k3BSx04NUpzW5Wc2b4dJvEb0+QuuWGpVG1Rp0KMfw7T8d3geyOFrHd8q36jkntGnQq8odYq+df1F+FKPsRuMOOPDjPGZp/c4XrGqN5/WN1/wDay/Cp6MfMZf7p/l4nKjUtRm7epO7qzazHM3tdXWenh8dOsac8mS9/qnbzKOs3UPpFCou1YfgdZ4es9nPb0bTVras1GbdKX3uHrONsFq9urW05QP8A9u3cNpDB9ZL5w9rChXYeoN2fyDa8pPa/h6vWY+HHNzLtwGgA+h0F407L3JSZ4831rC3WrW1FuMM1Zfd4esVw2nubedW1i6n5ihTXYsvxO0YKx3NvW5L6nqVONxUp3lantOMXsS2eGervOHEY6dI03jy3p9M6eytZ1ZPP6yu//ul8Tz/Cp6OnzOX+6f5c9HlHrVJ+TqFR/iSl7UZnDSfDdeMzx+56Nry01Om0q9KhXj07nF+G7wMTw1Z7O9P1LLH1REvttIvHf6bRvHSdHnY52HLON/WeO9eW2n2MOT4lIvrW3ayYdFyUESVUgAAgUQDr3F9aW+edrwT6lvfqRuKWntDFsla95ebc6/BZVvRcn1zeF6jpXDPl57cXH7YeZc6pe18p1nCP2YbvzO1cVYee2e9vLpNt5b4m3FiQDpKjLLACUYq1KdKG3UnGEV0yeCREz2JmI7vLu9ctqWY0YyrS6+CO9cMz3crZY8PGu9Xva+5VOai+iG7x4nauKsOU3mXnTbck28tnWGWHwKMPoAnxAwywMy4hUpUqtaoqVGnOpUk8RjCOW/QhMxEblIiZ6Q+q0bkHql4lUvpxsaT34ktqb9C4elnjycbSvSvV7MfBXt1t0fX6VyN0SwxJ0JXNVfXqvPgtx4snGZL+dPXTg8de/V71GjRorFKlCmvuxSPNNpnu9EVrXtDbYVlgQqI2BuFCtPzabx27ibhYrMt/JNn6WtTh2Zyycy8mu8mLKHGc6j7EOpqkJz9tHzLbP4mNSc9Y7QfLZLzKNKPoHKfE9IR31d/Wiu5DlhPi2Yd5cP8AaP1IuoT4lvU+V3H+KxqDnt6nyy4/xX6kNQfEt6urdVdVlvttTdN/ZnRhKPsT8TdeT91WLWyfts8m91rlXYxbrWVneUumUKbfgnnwPRTFgv2mYl57cRxNO8RMPL/tbp1fKv8Ak1ZVX0yjhPxj7zv8rePpvLh87jt9eOE+VchL3dVsruwm+MotteDfsHLxNe0xK8/B37xMD5LaDf8A+6eUdLafm06+Np+x+A+Zy0+ui/KYb/8Ajv8Ay87UuRGv2mZQt4XUF00Z5fqeGdKcZit5045OAzV7Rv8Aw+burevbVHSuaFSjUXGNSLi/Uz1RaLRuJeSazWdTGnA+JYSWJcSqkuC7wysOBJWH7ifAfoUZBBA4rqlGvb1KM/NqQcX6TdZ1O3O1eas1ny/Oa0J0a06VRYlCTjJdqPpxqY3D89aJrMxLGSaADo65S52wk1xg1L4nXDOrEvmz2MgGrm+q0NPqQealJYey+jf0EjHE22sdejioVadakqlOSlF8GamNHZsiPGjcP+0T3+S/m/D4nbX9Dpr+l7SOEsQxcVqdCk6tWWzFCImZ1CuS2va1fT6cd8KbzLZXTl9JJpEW2shUAPpdFpc1p8M8Z+W/Tw8DxZp3ZYd05KAclpQnc3VK3prM6k1Fd7ZJnUblqlZvaKx5frttShb29OhTWIU4KEe5LB8mZmZ3L9TSsVrFY8OTI2qlAgFElKMI7UpKK628AmYju6VfVbKl+1231QWfyNxjtLlbPSPLoXGuzeVQoqPbN58DpGH1cLcVP7YefcX13XyqleWOpbl4HWKVjw4Wy3t3l1WackfAQjJoCDMgJJqK2pNJLi2Vl0LrVrOi2lU5yS6Ib/Hgda4rSxbJWHlXet3E91CMaS6+LO1cMeXGc0z2eXXq1az2qtSU5dcnk6RER2c5mZ7uJ8TQw+gKzLiiwMPgUYfQBPiBy2Nld39fmbO3qV6nVCOcd/UZtetI3adNUpa86rD7HRf0f1JuNXVrjm1/g0XmXplwXoz3niycfHakPfi4GZ63l9jYafpWjUdm1oULZY3yb8qXfJ72eG+S+WevV7K0x4o6dCtrGmUvOvaL/C9r2CMOSfDNuJxR3s6dXlLpUOFWpP8ADTfvwbjhsjlPG4o8uvLlbYt4p211N/hXxN/KW8zDHz1J7RLD5Tzf0ekXc/R+Q+WjzaF+bme1ZX9falJZhycv5LrUZf8AiPgU/vhfmMn/AOOfz/SR5RXqfl8m79rs2l/2j5ev98fn+yOJt5pP5/py/wBrq1NeTycvKeOlxbfsHysT++GvnJjtSXFU5Z03/eLPUKa7Kax7UPk58TCTxu+8SxT5XaNPzqtWn+Km/dkTwmSEjiscu3R1/Rq3m6jQX45bHtwYnh8kftbjPjny71G4oV47VCtTqrrhJP2HKazHeG4mJ7NtkVMgMgAADIFyB52q6Np+oputRUar/aQ3S/P0nXHnvj7S45MFMneHx2tcm72x2qtFfKaC37UV5Ue9H0MXFVv0npLwZeFvTrHWHgyPVDyu7p+t6tpzXyPUK9KK4Q2sx/le453w47/VDrTPkx/TZ79ty8q1qSt9c0u11Cj0vZSffh5T8DzW4KIneO2nsr+oTaNZaxMOX9W8ite/3dfT0q6lwpVfNz3N4fokZ+JxGH6o3DXwuFz/AETyy8bXOReuaZtVI0FeUFv5yh5WF2x4+474uLx36b1Lhl4LLj663Hs+akmtz45PU8UrDgSVh+nULq4o+ZUeOp70fGmIl9Ot7V7O9R1bgq1P0x+Bicfo7Rn9XdoXVCt9HVi31PczPLMOsXrbtLlkRXx3LGz5m9jdwXkVl5XZJfl7z3cPfdeX0fJ47Fy3548vBPS8Ck0qSSlFxksprDQ15g2+UvqXyW6nRk8Y3xb6V0M91Z5o2acXEqJUgqlOUJcJJplhXzun3U9Pu5Uameb2tma6u1He1eaNukxuH0aaaTTynvTPO5PloT/90VT99n/mPTMf0u3h9S5KMXKTSSWW30HmcofN31zU1G8jTp5UNrZgvez0VrFI26RGn0lOCp04wjwikkeaerDQHPYW7ubqFJcOMn1Ixe3LGx9UkkkksJbkeBpQAH1H6PtPda+nfzj5FBbMO2T+C9qPNxN9Ryvo/p2HmvN58PuzxPtMzqQprM5xiu14ERtJtEd3WqanaU/2u0+qKyajHaWJzUjy6tbW48KVFvtk8eBuMPrLlPFekOlW1W8qblNU191HSMVYcbcReXSqVKlSW1UnKb65PJ0iIjs5TMz3cbKkAQ6wIwiPgIRxVq9Gis1asId7wbiJnskzEd3Qr6zaU8qnt1X2LC8TcYrS5zlrHZ51zrVzPdShCkuvizrGGI7uc5pns864r1qzTq1Zz72dK1iOznMzPdwvibZlmQhGXwEDL4lVh9AVmXFFgYfAo5LW1r3M1GjDPW28JelmbWivdYjb3tO0fS7fE7+rVvZ/4VHMIemT3v0JHnvkvb6ejrWMVfq6vqrO41NUFQ0nSKVnR6MQx6cvCZ5LUx73e25equXNMax01Dl/Vmu3O+61PmovioN+xYRn4uKv01a+BxF/qtpqnyYtdrar3NerLsws+0k8VbxCxwNP3TMu3S0HSqf/AAik+uUm/ec54jJPl1jhMMeHap2NlT+js6EX2U0Ym9p7y6xipHaIdynbNRzLZpQ7fgYmzrFP9LzlGn9FDbl9qQ1Mm4js4qtapU86Tx1dBdQk2mXCysIwIwOKrRo1fpKVOf4opli0x2YmInu6VfRtIrZ5zTrbvVNJ+B0jNkjtZicVJ8PPr8ktFqS2qdKtby66dV58cnSOLyR36sTw2Pw4v7P6lb79P5Q3dNLhCsucXw8C/MUt9VIT4No+myc7yus/PoWOpQXTCWxN+vC8C8vD38zBvNX0kXKunQajqum3unv7Uqe1D1rj6h8rM/RMSvx4j6o09bT9V06/X+x3tGs/sqXlericL4r0+qHSuStu0u4Y21sJs2ZC7GwmzIXbwdf5N22oKVa32be5e/KXkz717/aerDxVsfSesPLm4at+sdJfCahaXFlcSoXNKVOa6Hwa611o+nS9bxur5l6TSdS6jNswy+Igl6+icqNZ0eSja3cp0V+xq+VD1dHowccnDY8neHpw8Vkxdp6PpVq/JPlQlT1q0WmX0tyuIPCb7Zf+S9J5fhZ8HWk7j0ev43D8T0yRqfX8/wDt1br9HWqqq3YXdpc28lmFSUnFtd2H7TVePpr+qNSxb9Oyb/pmJh6Z5QZYGQy7FK8uKS8mo2uqW9E5YluMlo8rfXVO+sp21xSw5LMZR6H0PBaRNLbgyXjLSa2h8fNqFSVOTxKLw0z3x1jb5ExqdSBAsDo6zp6vaCcMKtBeS+vsOmO/LLUS+Tkp05uMk4yTw1wwezuqqrNdOe8kwah43KCDjUVyorEt0sdZ2x+jVfR2OT+oxnTdtUztQ3x7uozkprqlq+Xk06kPlsVnHznV2nWY6N66PW5QahTUFa05rMt8+7oRyx08sVr5cfJ2lTdSV1OSxHdDv6WMs+Fs93naf24+s4aljTVOUalRU6b2pSeEl0ieg+m0u0jaUfKadSW+T9x48kzeTcO3tI58knNBtovJJzNUYzrVo0qcczk8ITWIjcytd2nUPu9Nr1bCwp2lDYjGC3yUd8n0veeC1YvbcvtYrzjpFatVLy6n51efoePYIpWPDU5LT5cMm222232mmGAAZR8QJ0mhmTSWW8II4Kl5a0/Orw7k8+w1FLT4YnJWPLq1dXto52Izm+xYRuMNmJz18OnW1qs181RhDveTcYY8uc558Q6Na/vKrxKvJLqju9h0ilY8Oc3tPl05Nve3lnRll8QIwjL4IsKy+JUlmQhGXwEDL4lVulbV62NinJrre5Em0QruW2jVas1FycpfZpxyzE5YhYrMzqHv6dyQuJ4creNNfarPf6vyPNfi4jy9NODyW8afQWfJe0ppfKKs6uPqxWzH4nltxVvD1U4GkfVO3rWtjZ2v93tqdN9aW/18Tha9rd5eumKlPphztmW2WwgByxovG1Ukqce3iTaxXzI61OmsUYb/ALUuJe680R2cE5ym8yk2+0sQxMzLLKjLYRlsCMghUlGwjIEYEKBNptJYaaaTT6GEeRqHJvRb1uVWxpwqcdul5Es9e7j6TvTictO0udsNLeHT/U2t2G/SdbnUguFC9W2u7aW9ehHT42O/11/hn4d6/Tb+U/tBqFhu1zRq1KC43Ft85T72uMUPl6X/APHb/UnxbV+uHr6Zqun6lT27G8pV1xai/KXenvRwvivj+qHSt627S7jZhrZkaNrkaHS1bTbXU7Z0bmGcebNedF9aN48lsc7hjJirkjUvznXNJudKuearLahL6Oolukvj2H18WWuSNw+VlxWxzqXmvidYcpYlxKqS4LvDLvWOrapaUOZtdRu6FJPKhTrSivUmc7YqWncw60zZKxqtph92fKe0ZYGQyPgIENI8vWrDn4c/SXzsVvS+sviejDl5Z1PZ582Lm6x3eBtTi90mj2aiXia+UVI8cMzywbbjdrdtQfoZJosS6OqWtrfR24vmq6W6TW59jOlLWosS+buYu3q83WxB9GeD7j0R16w3DgrxpV6MqUmnGSxuZqJmOp2fOYqaffrPGDz+JHo6WhvvCLZWp7WfIVXaz2Zz7B+08MRjVv75486by+xF6Vhe0PpKFKFGjGlBYjFYR5pnc7c3atLWvd1eboQcn0voXeZm0Vjqkzp9VpOl0rGO08TrNb59XYjy3yTZiZ275hAAk28JZbA+n0LTfklPn6y+ekuD+qvieLNk5p1HZ9Ph8HJHNbu9KVWnHjUgu+RyiJejmhxyuraPGvT9EsmuWfRJyVjy456haL9rnuiy/DszOakeXDPVbdLdGpL0I1GKWZ4irgnrH2KHrka+D7uc8R6Q4J6tcy82NOPoyajFVmc9nWq393POa8l+Hd7DUUrHhict58utUnObzOcpPteTcREMTMz3cRYZgfErTD4AZfEDD4GkZfEKjCMvgiwrL4lSW6dtXq42Kba63uRmb1jual2Yacox2q9VRXTj4sxOX0Xl9XasranVqqFlayrzz5yWV637jFrTHW06brSbTqsPrNK5NyaVTUJpfu4P2s8d+I8Ve/FwXm76K3t6FtT2KFKFOPVFYPNa027vfWlaxqsORmWmWwiNkGWyo5IUZNbUmoR62TbUVV1adPdSjl/akDmiOzhnKUnmTbZWZnbBWQoy2CUZEZAjKgEYfECMCFEZEAIVDINpkIBdPI1Pk5pN/U56VvzFwnlV7d83NPryuL7zvTiMlOm9x7udsVbdXT5rlNpO+hVp61bL6lV83XS7JcJenedN4cneOWfsz/XX3dvS+UWnXtb5LOVS0vFudtcx2J57M8fQc8nD3pG+8esNVyVnp5evk4Oi5A6+o2lvf2k7a5gpQl60+tdpul5pO4ZvWt41L8117Sa+lXjpVPKpy306iW6S+PYfXw5YyxuHyc2Kcc6l5cuJ2c0lwXeGVhwJKw/SD476IywMhkfAQIaRHwA8zU9MjcN1aOIVeldEvzPRjzcvSezz5cMW6x3eBcUqlGbhVg4S6meutot1h45rNZ1Li6jRDIHBc0KVxTdOtTjOL6GWszHZd6eJfaDJeVaVMr7E+PoZ3rl9W4v6vndY02u6ezVpzpVI+bJrc+zJ3peGol84uf8AlPMeXznDZzv4Hp6a22+k0ewuY09mjGpUqS86S4LsyebJePLMzD37PSK26V1cS/BB+1nCckeIYm3o9uhKVCHN0W4QXQjjMb6ywrua/wDjT9Y5YGJXNx/jVP5mOWF0tD5bc1ebozrVJdknuE8tY3JEbfRaTprtWqteo6lbo3vEe48uTJzdI7Ota6ehlt73k5toyidJA6CpLL81gZ+BRksIzLpAy+JRgQkD4laYfADL4gYfA0jL4hW6dCrVfzdNvt6DM2iO5ETLtU9NeM1qiil0I5zm9Gop6q52Ft5qU59m8ayWWdQ3SeoXjXyaiqcH9eQ5aU+qSItbs9/SeSUqrjWv5yn0+X7l8fUefJxUR0q9mLgpnrZ9ZZWdtZ01ChTUd2M9LPHa827vo0x1pGquwYbRhGWwIyCwpynvW6PS3wLsiJlvapUvMW3L7T4EXcR2cVScpvMpNlZmZlhhEZUQoy2BCIgGWAKyy2BlgQojZEQoNhNoEAoDYE2mQI2B09U02w1OjzN9a068ehyW+Pc+K9B0pktjndZZtWLd3kfI9c0ZbWnXD1Szj/wtzLFWK+5Pp7mdufFl+qNT6x2/hjltTt1h6Gj65Y6nKVGnKdG6h9JbVo7FWHofHvRzyYbY+s9vVqt4s9LJybdXVbGhqNnO2uI5i+DXGL6GjeO9sduaGMlIvXUvzHV7Cvpt9O2rret8ZLhJdDR9nHkjJXmh8q9JpOpdOXBd5tyWHAkrD6XktyssNahGjNq2vOmlJ7pP7r6e7ieHPwt8XXvD31tEvo2eaGmQyPgIENIj4AQDjr0qVaGxVpxnHqaNVtMT0YmsT3eZX0W3m80pzpvq4o7xxFo7uM4K+HTnoddN7FanLvyjpHER5hj4E+Jcb0S8+3R/mfwNRxFWfg2I6Hctraq0l3ZfuHzFV+DLmhoFJpqvXc0+KUce0zPET4hYw+suN8ktA57n1YU+e2cc5047uHgPmsutbdPhxrS1NAppYo13FJbk459gjiJ8w5zi93WnoVz9WrRfe2vcbjPVmcUs/qO8z51H+Z/Avx6p8OWo6BXf0lelFfdTfwHx48Qvw5dqhoNrBp1pzqvq4L+vSYnNaezUY4elSo0qMNijTjCPVFYOUzM92tab6iDKKIyidJA6CpLL81gZ+BRksIzLpAy+JRgQkD4lVh8AqRhObxCLYmYjuOenZTfnyUexbzE5YjssVcuzZW78rEpLr3sxu9mukMTv6k2qdvSbb4bsv1FjFEdZk5p8OSnpl9dYlc1Obj1Pe/UX4lKdmox2nu9rS+T1NNTVPP36m/1I4X4h6cfDbfV6fp9C2ipbGan2pb3+R4r5Jt0fQxYa06+XcMOwERgRsgQhKbxFZBrbXzVPj85LqXBA6Q46lSc/Oe7oS4IukmZlgMowIwiZKI2UZIiMCNgQrLLYEAyyiNkRCiNhAGgGwIjYEyBMgCgNJsGjbztY0ex1SMXcQcK1PfSr0pbNWm+uMl//AA6Y81sfbszasW7vNWo6loTVPWs3lhwjf0oeVTX72K/6kduSmbrj6T6f+mN2p9XZ79GtSr0Y1qNSFSnNZjOLymutM80xMTqXWOrzeUmk09WsXDdGvDfSn1PqfYzrgyzitvw5ZsUZK68vzS4pVKFWVGrBwqQlsyi+hn2ImJjcPk2iYnUsw4CSHh8oeS+p6JN1JQde2T8mvTW5d6+r/W864eJpl6eXqtWYenyd5bahYqNC/TvaC3JyfzkV39Pp9ZzzcFS/WvSVrefL73R9c0zVYL5HcxdTppS8ma9HwPmZMF8f1Q3ExL0nwOUKhpEfACAR8BDLPUaGWCDoEInUahJZZURgRhELDMnSBHwLAhQYZQDJRGUTpAdARl8GEYKqFhGZdIGXxKIoylwTY2kOSNvKT8ppIk2a01sUKXnNN9u8zu09lZndpbqcM9WRFPU21C01C7+q4RfTLyUXdKtxS1ndttEox8qvUlUfUtyOc5p8OlcMeXs2WmbMUqVKNGHXje/icL5fV6aYZ8dHq2tlSptYjtz62cLXmXopiiHpUaShve+XsOUvTEacpGtgRGBMNvCWWQb2Iw31Xv8AsriN7XUR3YqVZNbMUox6kXTM224ggERgRsIyyiMCMIjYGWwBWWWwIwMsojZEQqI2AAA2jYRGwIAAF0m0yBMgBo2DRtHhpprKfFFHz9fTLvR6s7zQIqVCT2q2nSeIS63Tf1JdnBnpjLXLHLk7+v8A7c5rNetXqaTqVrqlrz9rN+S9mpTmtmdOS4xkuho45Mdsc6lqtotHR4fLfRvlNF6hbQ+epr5xL68V0969h6eFz8s8k9nl4nFzRzR3fDw4H0ZeCH6O0nFppNPc0z476L5fXeROmXzlVtP9irvf5CzB98ej0HtxcZenS3WGJpEvidV5N6xpM3UqW8qlOLyq1HMku3rXpPfTiMeTptzmsw7ekcrtYslGFSqrukt2zW3v+bj68mMnCY79Y6JF5h9TpvLXTLjEbqnVtJ9bW3H1rf4Hkvwd47dWotD6C1vLS7p7Vrc0qy+5JPB5rUtXvDW3MZVHwEMsmhlggLCMlhJRlRGBGEQsMydIEfAsCFBhlAMlEZROkgdBUZfmsIwyqJN9AQ5vL3sC4pw44z2jrKpzrk9mnByfcNepvfZz07G+rcY83H7zx+Zmb0h0jFaXao6LSjvrVZTfVHcjE5p8OsYI8u/bWdGnut6CUutLL9Zzm8z3l0rSPEO/RsKkt9RqC6uLOU5I8O1cMz3dyjb0qXmxTfW97Oc2mXetIq7FOnKpLdw6zEzpuI27lKnGmsLj0szMusRpsigEYG1Twtqo9leLJtdeqSq4WKa2V19LBv0cLZWGQARGwI2VEKMtgRsiMtgTITaNlRGwMtgRsJtGxpEyUQADaZCI2BGwAAoFRMk2aQaNmSomQIAyBMhNvH1fSqruv1rpMoUNRisSUvMuIr6k/dLijvjyxrkv2/5/hi1eu47uzo+p0tSt5SjCdGvSlsV6E/PpT6n7nwaMZMc0n2WttvndX5KVql/OrYSpQoz8rZk8bL6Uuw9ePi4iurd3kvw0zbdXtnldUZYEDLytU5PaRqGZV7OEaj/aU/Jl4cfSd8fEZKdpSaxL5u/5CSTcrC9TXRCsseK+B66cb/dDHI8W50DWrGW27Sq9nhOi9r2b0d658d/LPLMNWmv6zZvYV5VljjGqtr27xbBjt4OaYexa8s7lLFzZ0qnbCTj7cnC3B18Scz1LblXptXCqRr0X05jleBynhbx2XmiXfoavplf6O9o7/tS2facpw3jvCxMO5CcJx2oTjJdaeTGtIpYJZZURgRhELDMgEfAsCFB9IZQDJRllGXOCe+SGpNo6i6Ml0ztNrKGjawTbwk2+pIERMuxTtLqp5tCSXXLcZm9Y8ukYrT4dinpNWX0tZRXVFZMTljw6RgnzLsUtMtYb5RlUf3mZnJaXSMNYdqnThTWKcIxXUlgxMzPd0iIjs7FG3q1d8Ybut7kYm0Q3FJl26VjBb6knN9S3I5zknw61xR5dqEYwWzCKiuwxM7dYiI7DA5qVByxKe5dXSzMy1Fdu1FRisJYRjrLoZGgyBuMG1l4jHrY21EDqRh9Gsv7TBvXZxSk28t5ZWZlhsIgDIRlsCNlRGyjLZERsDOQg2VGWwMtgRsG0bCJkqbQCZCbRsCZAAC6Ng0m0yAyNmkAFBhGQDYEyEAJkAB4+tafXVeOraWlG/pRxKDeI3MOmnLt6n0PsO+PJGuS/b/nuxaPMd3c0u+oajZQuqDezLKlGSxKElucZLoae453xzS2paidxt27i0t5/Xtbd9lbPg0hG/ctSs+kf7datZOKzRqxrdkItssT6sWx+k7dedvXhHanRqRXW4tF3DnNLR3hxPgVlk0g+AHBc2ttcx2bi3pVl9+CftNRa1e0pp5dzyY0etlq3dJ9dObXhwO1eJyR5Z5YebW5H0eNve1I9k4KXswdY4ufMM8rpVeSuoU/o6tCovxNP2HSOKpPdOWXXlo2r0HtK2qZ64ST9jNxmxz5TUrGvrNt507yCXRPax4jlx29E6ualrupR86sp/igiThp6G5dqnyhu/r0qMu5Ne8xOCpzOzT5QJ7p2rXap/kYnh/STmc8NctnxpVV3JP3k+DKbci1i1f1av8q+JPg2Nr+trZrdCr6l8R8KTafrSk+FOfpwX4cm2XqWfNo+uQ+Gztn5fVfCMEXkg21Tld1vMjUl+GInlhYiZ7OzS03UKu90Zr8bx7TE5KR5WMV58O3S0S4e+dSnHxMznjw6Rw1p7u5S0alH6SrKXcsHOc0+HSOGjzLsU9PtIfslL8TyYnJaXSMNI8OzCEILEIRiupLBmZ21ERHYfEikYSnLEYuT7EWZiDUz2dinZTlvqSUUuKW9/l6TE5I8OlcU+XapW1Gm1iGX1y3/ANeo5zeZda0rDmz7P6/rejLYVCCcpYisk7LEbdmlSUd73szMtxXTkyZaMgahGUt64dLfALEbVypw4eXLrfAG4hidSUnmTyXSTMyy2EQCZCI2BlsIjZRlsJtGwJkIhRlsIjYGWwbTIRGy6RAJkCNhEKA0m0yAyBAA0bMlEyEMgMgRsA2DaBEyBAAEyALoeJqfJqxvryd18ovbWdTDmreu4Rm+G00unGFnsR6KcRaka1E/5YmkTL6eNRrdGqsfuraX5nnmPb7u0W9/suaj4TvJ90Ix9qQ6ey9fddib/ZXP8VfHsY3H5BqfSf5cM6NFZ26NpHPFzqtv2Dc+7M1iO8R/LrzsrWo8xrUo9lOMpe81zTHhznHSe0sT0ym183Urt9tFr24LF58pOGPG/wCHHPSK6WVOPpWB8SEnh7OKWm3K4KD7pGovDE4LOF6fdr9l/wAyLz1ZnDf0YdldL9hIvNCfDt6I7S5X7CfqLzQnw7ejPyS5/wACfqLFo9UnHb0YqadVqefabX4opmoyRHlPhW9HBPQYT46dS9EUi/HmPJ8G3o45cl6cnn5JsPsqfmX5mY8nwLeiLklBvi4/x/kX5o+Ws3HkjSXGvJdzz7h83Povy0+rmhyUtV51xVfoRn5q3o18t7uenya06Hnc7Lvlgk8Rdfl6ueGjabT4WsX+JtmJzXny1GCkeHZpWlrS+jtqUe6CMze095bilY7Q5nu4GRBChQYCMJyxiL38BuDUuaNrUeNpqOeh8fVxM88NRjny5oWtKLw05y6n8Fv9hibzLcY4hzRxGOIpKPZw+HizLfZc+Hh8PABn4/1/XpCmd/8AX9f10gclOk3vluXUSZairnjiKxFYRhuOi5YGoQnPgt3S+gLEba+bh+8l4fmDpDM6kp+c93QuhBJttjIDIQyBlsCNhGWy6EbCbRsCNgQJtlsqI2BGwbZyERsukRsCZAjYRCiBDIEyXRtMgMhDIEyDZkGzINpkJsAATIDIEAjYAaAoFTYEd35x/wD5s/5I/AnT2duvv9jm58eZrfx3DS8GxuPX7Gp9PuxKNFfSQsov79Ta9qL18bZnl86WMlB+RVoL/LoN+xk0sTrtMfw3tzfCrdPupKPtRNQu5nzP8GxOXGlcv8VVR9jG4NT6T/LEowj9JTtl/mVXL2osb8JMRHfX8rKaksKtSf8Al0nL2MdvBvfn7K968inVl/Bs+3BP8rPtCuMlHaktnvaETBqdOPajJeTJPHUzUpExKEgGVJQIjAyxChUlGWGZRlRhgMPGcbusCwpVKnmQk1143EmYjuRWZ7OSNs28SqRz1R8p+BOdqKORW9NPEs56m9/qWWTnlrkhyKnTg8bKT7d3hvZncyuoj8/JbW54W5voW5v0LeRoW7KXpS+C97Amd33fRj4e0C5ec78+Px9gDq9f9f16QNQhKXDh1/1/XaSZ01Ebc8IKO/i+szM7biIhrJBuFOclnCjHre5Bdba2qUOHzku3cgdIYnVlPi93QlwBNtsZCG0BNoIZAmSiZAjY2JkiJkCF0m2WyojYGWwbTI0iMukRsCNhEyBCiZCJkBkojYRMg2mQmzIEyAyAyAyAyBAADIEyALoAmwpsCAADtyg151Ff6lzL8yb9/s6a9vu438nT3rT4vtak/cXr7p/T7OSNTHm1qf8Ap27fvZJj2+6xb0n7NKpN8Kl1JdSpqK8UTUNbn1k2JSX0dxn71bHsY2a34n+WJxhH6WnbR/zKm17UWJnxtmYiO8R/JCcV9HUor/Kot+xiY9ViYjtP8Q3tTlwlcy7oKPtSJqPZdz7o4vGXTnj95XaXhkb/ADSTHt92E6Slu+SRl2LbfuNdfdNx7f8AW9uclhTrPshS2V/zIz0a3P5CODXlOlLvqVcezJN+6a9vuy5RlwqUV2QTm/AvUmYn82sIdUK1T0KK8RMkQk1FPDlTg+p1Mv1YLBOiEE+POVPww2faSZIgnGMXh7MPx1N/qRYmSYgVJS4c5L8MNlf8w5tJyxKrm4vZUaafa3N+pDcrqIaawstSS690F8SbX89COG8xWX1xjl/zPcD/AB+f7MqTw8SfU25+C3Ih3/Nq39Vt9zf/AGxB7fn2M48nh2eb4LeUE8eTwz0Ld4Lf6yCr7K9K/Je9lDKa4rC7sL3e0Bl57fTn4+wgsYyl5q3eH9f1kb0sRtywppedvfgZmzUVc0FObxGLfcZbiNt7Cj9JUiuxb2F16nOwj9HBZ+1LewbiOzjnUlN5lJthJnbOe0IZKGUBMoBtAMjaJkbEbII2BMl0m0bKjLYEbCbTI0JkojkE2jYRnIAomQiNgTJRMhNo2ETIEz2gMgMgMgTIDIDJdANANANAE2FNgRAGQGQGQGQOeLorzJ2Mfw09r2MvXztqOXxpyKpLorSx+7t5Y95nXt92t+/2XNR8JXcv4Yx9qQ6ey9fc5ub/AGVf+Kvj2MmzU+k/yxKNKPnwtI/jqbXtRrr42zMR501Coo7qdWil1U6LfvJMeyxbXafs25uXCVy/wwUV4/Emv8Nb36kqT4qEpfjrNeBN/mia/m3E1TjPDVrCa6Mbb9zNdfdjURPhvbm1hVKvdClsrxRnX5trc/kI4yay4VO+pVwvAbj8g6/ksJ01Lyfkyl92Lmy9fdNx7f8AXJtVJcHcSXUoqC8d5OjXX3Ynsp4qKmv8yq5P1F6+GZ15+8tQcsYg5Y6qdLZXiSfdY9vtBPC+kws/4tX3LcWPYnXn7ysMrdDaS6qdJRXrYn3I9v8AjMtlvEthvqnJzf8AKCdef/bWZKP11H0U4/EdPzqfnokcZzBJvrhHaf8AM9wn3I14/P8AY2pPEsSfU25v1Lcgd/zatvdGTfdJ4/5UQM7Kx5qfR5vgt5TscN3DPR5ufQt7B2VbvJxjsxjwXvAdGOhdG7d7kBqEZTa2U2+v8/gSZ01ETLnhazxmccL73krxMzZuMfq5dmlHzqueyCyZa1Hqc5Tj5lJPtm8hdxDM61SSw5bupbkEmZljIZMgMgMgTIDIDIEyAyVDPaNG0bGjaNlRlyAjYTaZLoRsIy2DaNhEyUTIDIRMl0bTIRMg2mQiZAmQGS6ECbAbCmwGwGwGwIgABkBkBkBkCAAAAAB3Ocm/21x6KGPaiaj0j+XTc+s/wfOPovJ+mEfgOnsvX3+w4SazzNT+Ou/c2N+/2OWfT7uOXNLz4WUX96e17UXr7s/0+dNQml5lWl/p0W/YyTHr/wBWJ9J+zWZvhO5l3QUfakTp7LuZ9Rwk97p1P462F4Njf5o1Pp92PmlL/hIy/nfuL192ens5FVnjCq1GuqFHC8cozqPyWuafX7LJuW+VGr2t1dnPqfuHbys9fH3Y/wBnzudCE+lY5x+5l6+//Gf6fb/rkipSXk1qjx9WMNj/AKl7ydIajc+WZUpZSlCDb6KlbafqET6JNfzYoVYboxlHsp0GvF7hPX/+kRMdv+MzyvpE1/m1ceC3Fj2J9/vJB4+j3f5VLHi9wn3I9vtCTazieznqqVMv+VbhHsT7tJy2d23s/dioLx3kOv50Zi03mOy31xTm/wCZlT89Vk8vE976pvaf8q3CPZf8/n+nIqdVx3QqY/lXqW8m4XUqqNZLGxKCfWubXxEzH51IrP50WVGVPzp04J9U0s+rLETtZrMHN0oR8q4im+iMWs+9jcyaiI7tU40MeVGpJdW6K9W/xJMrEQ2pUovMaMW1w2svHuM7lrpHhp3FTGFLZX3Vj2E0vNLDll5byENoBkBkBkqG0NG0yNGzI0bMjRtM9o0bM9oE2ioOQNptA2jkE2mQI2ERyKbRyKm2cg2NhEyBlsaDJU2jYNo2EZyAyBMl0A0m0yU2mQhkBntAZ7QGQGQGQGQGQJkBkBkC5AmQGQGQKAAAdvZm+NK6ffVS9jJuPWHTU+k/ykqbXnUl/qXEvzG/f7Gvb7sPmE96sYvte0/cXr7s/wBPs3GpjdGrH/ToP8ya9vu1v3+y7VR8J3MuxQjH2pE6exufc2JPe6VX+Otj2NjcfkGvb7sYpJ71aRl2vafuNdfdnp7NqbxhVJf6dFpeOTOvb7tb9/sbM5cY3Eu2U1H2MdDrPqw+bTxJW0ZfeltsvX3Z6e3/AFpSk1iM6ndClsrxJqGomfyEkmlmcWl+9q4XqW4E+/3lINL6OUF/lUs+PATHqRPp9mnt4zLnO+pU2V4DodfyWoV6mMQrNLqpRb8eA5fVYvPiVdatF5lUmu2rVx4LcNRJzTHf7yRq1fqylv8AsU1FetjUHNPgdebWztw3dGNt/kNeTnn86jr1ovLqyT6NuePUkNQc0x5WVevjLrVdn8WxH4jUfnU5rev/ANM85Nx8+WOnG5etjUG5ZjlvMVntj/5PiJ90j2ckYdLeO7j6yczUVbiox81IzM7WIiFygqOQNmSaNmRo2ZGjZtFNptBNm0DZtA2bQNmQbTINmQGQJldZUTaQNm0DabQNo5BNo2VEyBMgRsujaNhNpkJtGwJkCZLoBpNoU2ZCI2BMgMgRtA2m0gbNoJsygu1ygbMoGzKBsyDZkGzINgAAAAAAKBQAHPJU151O0/iqt+1Dr7t6j0j+Ui6K8ydjH8MNr2MTv3TdfGnIqksYVV4+5Qf5k17fdrmn1+y5m+Dupfwxj8CdPY3PumxJr6Kr/HWa9jY37/ZNe33YfNJ+VG0i+2W0/ca6+6dPZuNR4wqjx+7ov8ya/Nrv3+x5cuKuJdrko+zBOnsvX3YkoLz40I/5lTafiWN+GZ150sZvGI1Hj93Sx4vKGvzaxPp9oV7TWXGo+2dTZXgToaliMoJ5g6Kf3IOb9ZZ35I14023OS389JdbkoLw3k6L1YThtbuZUvupzl6y9fzozGvzq1JzazLnGuuclBeBFSDS8xx/04Z8XuLPuRPoSxnE8Z6py2n/KhHsT7q29ne5bPa9iPxIb/OyRz9TO/wCxHHi+Jf8AJHs3GnLOXiL6/OfrZJlYiW1CKeWtp9beTO5a01ki7MgMgTPaBHIaTZtA2bQNm0XRs2ho2bQ0bTaGjZtDRs2ho2bQ0m0yU2ZBtMhNme0CZAZQEyBGxoTJdJtMg2jYQbAmQJkqbTINmQiZKJkBkCZ7QbTaCbRyAmQJkBkBkC5AZAZAZAAAAFyAyAyBcg2uQuwABUBQOWz6C3Wj0HxOLuAcV19Ey17s37PCrf3hHqj6Xit9T2LP6I81+714+znMujztU4M7YnnzNaZ5noJl7rh7O6zk7vKq/wB8R6Y+l5LfU9SPmo80vTDz9R+mj3nfH2cMnd3qX0Ue4427u1ezo1P76jrH0uM/W7lf6KRyr3drdnBp30T7zpk7ueLskv78ix9BP1u2cnYIAAAAZYGGGRgQAAAAABYSQqAAAZGQ0BJRlhEKABglAjLAPgBAASQIy+JoRgQABGEllgAAEfEAEAgAABYAoAAAAKuAAAAAFGiCoKAANID/2Q=="

/***/ }),

/***/ 55:
/*!***********************************************!*\
  !*** C:/learn/eBusinessCard/static/card3.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 56:
/*!***********************************************!*\
  !*** C:/learn/eBusinessCard/static/card4.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 57:
/*!***********************************************!*\
  !*** C:/learn/eBusinessCard/static/card5.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map