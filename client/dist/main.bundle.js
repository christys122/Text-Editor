/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JATE/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://JATE/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/idb/build/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteDB\": () => (/* binding */ deleteDB),\n/* harmony export */   \"openDB\": () => (/* binding */ openDB),\n/* harmony export */   \"unwrap\": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),\n/* harmony export */   \"wrap\": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)\n/* harmony export */ });\n/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ \"./node_modules/idb/build/esm/wrap-idb-value.js\");\n\n\n/**\n * Open a database.\n *\n * @param name Name of the database.\n * @param version Schema version.\n * @param callbacks Additional callbacks.\n */\n\nfunction openDB(name, version) {\n  let {\n    blocked,\n    upgrade,\n    blocking,\n    terminated\n  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  const request = indexedDB.open(name, version);\n  const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);\n\n  if (upgrade) {\n    request.addEventListener('upgradeneeded', event => {\n      upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));\n    });\n  }\n\n  if (blocked) request.addEventListener('blocked', () => blocked());\n  openPromise.then(db => {\n    if (terminated) db.addEventListener('close', () => terminated());\n    if (blocking) db.addEventListener('versionchange', () => blocking());\n  }).catch(() => {});\n  return openPromise;\n}\n/**\n * Delete a database.\n *\n * @param name Name of the database.\n */\n\n\nfunction deleteDB(name) {\n  let {\n    blocked\n  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  const request = indexedDB.deleteDatabase(name);\n  if (blocked) request.addEventListener('blocked', () => blocked());\n  return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);\n}\n\nconst readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];\nconst writeMethods = ['put', 'add', 'delete', 'clear'];\nconst cachedMethods = new Map();\n\nfunction getMethod(target, prop) {\n  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {\n    return;\n  }\n\n  if (cachedMethods.get(prop)) return cachedMethods.get(prop);\n  const targetFuncName = prop.replace(/FromIndex$/, '');\n  const useIndex = prop !== targetFuncName;\n  const isWrite = writeMethods.includes(targetFuncName);\n\n  if ( // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.\n  !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {\n    return;\n  }\n\n  const method = async function (storeName) {\n    // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(\n    const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');\n    let target = tx.store;\n\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    if (useIndex) target = target.index(args.shift()); // Must reject if op rejects.\n    // If it's a write operation, must reject if tx.done rejects.\n    // Must reject with op rejection first.\n    // Must resolve with op value.\n    // Must handle both promises (no unhandled rejections)\n\n    return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];\n  };\n\n  cachedMethods.set(prop, method);\n  return method;\n}\n\n(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)(oldTraps => ({ ...oldTraps,\n  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),\n  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)\n}));\n\n\n//# sourceURL=webpack://JATE/./node_modules/idb/build/esm/index.js?");

/***/ }),

/***/ "./node_modules/idb/build/esm/wrap-idb-value.js":
/*!******************************************************!*\
  !*** ./node_modules/idb/build/esm/wrap-idb-value.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => (/* binding */ reverseTransformCache),\n/* harmony export */   \"i\": () => (/* binding */ instanceOfAny),\n/* harmony export */   \"r\": () => (/* binding */ replaceTraps),\n/* harmony export */   \"u\": () => (/* binding */ unwrap),\n/* harmony export */   \"w\": () => (/* binding */ wrap)\n/* harmony export */ });\nconst instanceOfAny = (object, constructors) => constructors.some(c => object instanceof c);\n\nlet idbProxyableTypes;\nlet cursorAdvanceMethods; // This is a function to prevent it throwing up in node environments.\n\nfunction getIdbProxyableTypes() {\n  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);\n} // This is a function to prevent it throwing up in node environments.\n\n\nfunction getCursorAdvanceMethods() {\n  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);\n}\n\nconst cursorRequestMap = new WeakMap();\nconst transactionDoneMap = new WeakMap();\nconst transactionStoreNamesMap = new WeakMap();\nconst transformCache = new WeakMap();\nconst reverseTransformCache = new WeakMap();\n\nfunction promisifyRequest(request) {\n  const promise = new Promise((resolve, reject) => {\n    const unlisten = () => {\n      request.removeEventListener('success', success);\n      request.removeEventListener('error', error);\n    };\n\n    const success = () => {\n      resolve(wrap(request.result));\n      unlisten();\n    };\n\n    const error = () => {\n      reject(request.error);\n      unlisten();\n    };\n\n    request.addEventListener('success', success);\n    request.addEventListener('error', error);\n  });\n  promise.then(value => {\n    // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval\n    // (see wrapFunction).\n    if (value instanceof IDBCursor) {\n      cursorRequestMap.set(value, request);\n    } // Catching to avoid \"Uncaught Promise exceptions\"\n\n  }).catch(() => {}); // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This\n  // is because we create many promises from a single IDBRequest.\n\n  reverseTransformCache.set(promise, request);\n  return promise;\n}\n\nfunction cacheDonePromiseForTransaction(tx) {\n  // Early bail if we've already created a done promise for this transaction.\n  if (transactionDoneMap.has(tx)) return;\n  const done = new Promise((resolve, reject) => {\n    const unlisten = () => {\n      tx.removeEventListener('complete', complete);\n      tx.removeEventListener('error', error);\n      tx.removeEventListener('abort', error);\n    };\n\n    const complete = () => {\n      resolve();\n      unlisten();\n    };\n\n    const error = () => {\n      reject(tx.error || new DOMException('AbortError', 'AbortError'));\n      unlisten();\n    };\n\n    tx.addEventListener('complete', complete);\n    tx.addEventListener('error', error);\n    tx.addEventListener('abort', error);\n  }); // Cache it for later retrieval.\n\n  transactionDoneMap.set(tx, done);\n}\n\nlet idbProxyTraps = {\n  get(target, prop, receiver) {\n    if (target instanceof IDBTransaction) {\n      // Special handling for transaction.done.\n      if (prop === 'done') return transactionDoneMap.get(target); // Polyfill for objectStoreNames because of Edge.\n\n      if (prop === 'objectStoreNames') {\n        return target.objectStoreNames || transactionStoreNamesMap.get(target);\n      } // Make tx.store return the only store in the transaction, or undefined if there are many.\n\n\n      if (prop === 'store') {\n        return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);\n      }\n    } // Else transform whatever we get back.\n\n\n    return wrap(target[prop]);\n  },\n\n  set(target, prop, value) {\n    target[prop] = value;\n    return true;\n  },\n\n  has(target, prop) {\n    if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {\n      return true;\n    }\n\n    return prop in target;\n  }\n\n};\n\nfunction replaceTraps(callback) {\n  idbProxyTraps = callback(idbProxyTraps);\n}\n\nfunction wrapFunction(func) {\n  // Due to expected object equality (which is enforced by the caching in `wrap`), we\n  // only create one new func per func.\n  // Edge doesn't support objectStoreNames (booo), so we polyfill it here.\n  if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {\n    return function (storeNames) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      const tx = func.call(unwrap(this), storeNames, ...args);\n      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);\n      return wrap(tx);\n    };\n  } // Cursor methods are special, as the behaviour is a little more different to standard IDB. In\n  // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the\n  // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense\n  // with real promises, so each advance methods returns a new promise for the cursor object, or\n  // undefined if the end of the cursor has been reached.\n\n\n  if (getCursorAdvanceMethods().includes(func)) {\n    return function () {\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n      // the original object.\n      func.apply(unwrap(this), args);\n      return wrap(cursorRequestMap.get(this));\n    };\n  }\n\n  return function () {\n    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      args[_key3] = arguments[_key3];\n    }\n\n    // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n    // the original object.\n    return wrap(func.apply(unwrap(this), args));\n  };\n}\n\nfunction transformCachableValue(value) {\n  if (typeof value === 'function') return wrapFunction(value); // This doesn't return, it just creates a 'done' promise for the transaction,\n  // which is later returned for transaction.done (see idbObjectHandler).\n\n  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);\n  if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps); // Return the same value back if we're not going to transform it.\n\n  return value;\n}\n\nfunction wrap(value) {\n  // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because\n  // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.\n  if (value instanceof IDBRequest) return promisifyRequest(value); // If we've already transformed this value before, reuse the transformed value.\n  // This is faster, but it also provides object equality.\n\n  if (transformCache.has(value)) return transformCache.get(value);\n  const newValue = transformCachableValue(value); // Not all types are transformed.\n  // These may be primitive types, so they can't be WeakMap keys.\n\n  if (newValue !== value) {\n    transformCache.set(value, newValue);\n    reverseTransformCache.set(newValue, value);\n  }\n\n  return newValue;\n}\n\nconst unwrap = value => reverseTransformCache.get(value);\n\n\n\n//# sourceURL=webpack://JATE/./node_modules/idb/build/esm/wrap-idb-value.js?");

/***/ }),

/***/ "./src/js/database.js":
/*!****************************!*\
  !*** ./src/js/database.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDb\": () => (/* binding */ getDb),\n/* harmony export */   \"putDb\": () => (/* binding */ putDb)\n/* harmony export */ });\n/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ \"./node_modules/idb/build/esm/index.js\");\n\n\nconst initdb = async () => (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)('jate', 1, {\n  upgrade(db) {\n    if (db.objectStoreNames.contains('jate')) {\n      console.log('jate database already exists');\n      return;\n    }\n\n    db.createObjectStore('jate', {\n      keyPath: 'id',\n      autoIncrement: true\n    });\n    console.log('jate database created');\n  }\n\n}); // TODO: Add logic to a method that accepts some content and adds it to the database\n\n\nconst putDb = async content => console.error('putDb not implemented'); // TODO: Add logic for a method that gets all the content from the database\n\nconst getDb = async () => console.error('getDb not implemented');\ninitdb();\n\n//# sourceURL=webpack://JATE/./src/js/database.js?");

/***/ }),

/***/ "./src/js/editor.js":
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ \"./src/js/database.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n// Import methods to save and get data from the indexedDB database in './database.js'\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor() {\n    const localData = localStorage.getItem('content'); // check if CodeMirror is loaded\n\n    if (typeof CodeMirror === 'undefined') {\n      throw new Error('CodeMirror is not loaded');\n    }\n\n    this.editor = CodeMirror(document.querySelector('#main'), {\n      value: '',\n      mode: 'javascript',\n      theme: 'monokai',\n      lineNumbers: true,\n      lineWrapping: true,\n      autofocus: true,\n      indentUnit: 2,\n      tabSize: 2\n    }); // When the editor is ready, set the value to whatever is stored in indexeddb.\n    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.\n\n    (0,_database__WEBPACK_IMPORTED_MODULE_0__.getDb)().then(data => {\n      console.info('Loaded data from IndexedDB, injecting into editor');\n      this.editor.setValue(data || localData || _header__WEBPACK_IMPORTED_MODULE_1__.header);\n    });\n    this.editor.on('change', () => {\n      localStorage.setItem('content', this.editor.getValue());\n    }); // Save the content of the editor when the editor itself is loses focus\n\n    this.editor.on('blur', () => {\n      console.log('The editor has lost focus');\n      (0,_database__WEBPACK_IMPORTED_MODULE_0__.putDb)(localStorage.getItem('content'));\n    });\n  }\n\n});\n\n//# sourceURL=webpack://JATE/./src/js/editor.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = `\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n`;\n\n\n//# sourceURL=webpack://JATE/./src/js/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ \"./node_modules/workbox-window/build/workbox-window.prod.es5.mjs\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ \"./src/js/editor.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ \"./src/js/database.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./install */ \"./src/js/install.js\");\n/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_install__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst main = document.querySelector('#main');\nmain.innerHTML = '';\n\nconst loadSpinner = () => {\n  const spinner = document.createElement('div');\n  spinner.classList.add('spinner');\n  spinner.innerHTML = `\n  <div class=\"loading-container\">\n  <div class=\"loading-spinner\" />\n  </div>\n  `;\n  main.appendChild(spinner);\n};\n\nconst editor = new _editor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nif (typeof editor === 'undefined') {\n  loadSpinner();\n} // Check if service workers are supported\n\n\nif ('serviceWorker' in navigator) {\n  // register workbox service worker\n  const workboxSW = new workbox_window__WEBPACK_IMPORTED_MODULE_0__.Workbox('/src-sw.js');\n  workboxSW.register();\n} else {\n  console.error('Service workers are not supported in this browser.');\n}\n\n//# sourceURL=webpack://JATE/./src/js/index.js?");

/***/ }),

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall'); // Logic for installing the PWA\n// TODO: Add an event handler to the `beforeinstallprompt` event\n\nwindow.addEventListener('beforeinstallprompt', event => {}); // TODO: Implement a click event handler on the `butInstall` element\n\nbutInstall.addEventListener('click', async () => {}); // TODO: Add an handler for the `appinstalled` event\n\nwindow.addEventListener('appinstalled', event => {});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* app shell CSS */\\n:root {\\n  --primary: #31a9e1;\\n  --gray: #ececec;\\n  --whitesmoke: #f5f5f5;\\n  --dark: #222;\\n  --monoaki: #272822;\\n  --navbar-height: 50px;\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--monoaki);\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\n    sans-serif;\\n}\\n\\nh1 {\\n  font-size: 22px;\\n}\\n\\n#navbar {\\n  height: var(--navbar-height);\\n  background-color: var(--primary);\\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  color: white;\\n  font-size: 22px;\\n  font-weight: 550;\\n  letter-spacing: 0.9px;\\n}\\n\\n.navbar-brand img {\\n  padding-top: 10px;\\n}\\n\\n.loading-spinner {\\n  animation-duration: 0.75s;\\n  animation-iteration-count: infinite;\\n  animation-name: rotate-forever;\\n  animation-timing-function: linear;\\n  height: 30px;\\n  width: 30px;\\n  border: 3px solid var(--primary);\\n  border-right-color: transparent;\\n  border-radius: 50%;\\n}\\n\\n.loading-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: calc(100vh - var(--navbar-height));\\n}\\n\\n@keyframes rotate-forever {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n.app-update {\\n  display: none;\\n  position: absolute;\\n  right: 10px;\\n}\\n\\n.app-update.show {\\n  display: block;\\n}\\n\\n.nav-btn {\\n  margin: 25px;\\n}\\n\\n.btn {\\n  text-align: center;\\n  display: inline-block;\\n  padding: 0.5rem 1.2rem;\\n  margin: 0;\\n  text-decoration: none;\\n  font-size: 1rem;\\n  border-radius: 0.3rem;\\n  border: 1px solid transparent;\\n  outline: none;\\n  color: #1a1a1a;\\n  background-color: #aeaeae;\\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\\n}\\n\\n.btn:hover {\\n  background-color: #cecece;\\n  cursor: pointer;\\n}\\n\\n.btn.btn-squared {\\n  border-radius: 0;\\n}\\n\\n.btn.btn-sm {\\n  font-size: 0.85rem;\\n  padding: 0.3rem 0.9rem;\\n}\\n\\n.btn.btn-lg {\\n  font-size: 1.25rem;\\n  padding: 0.8rem 1.4rem;\\n}\\n\\n.btn.btn-block {\\n  width: 100%;\\n  display: block;\\n  text-align: center;\\n}\\n\\n.btn.btn-primary {\\n  background-color: #2d3e50;\\n  color: #d9e9e8;\\n}\\n\\n.btn.btn-primary:hover {\\n  background-color: #57779a;\\n}\\n\\n.btn.btn-danger {\\n  background-color: #e64c66;\\n  color: #ffffff;\\n}\\n\\n.btn.btn-danger:hover {\\n  background-color: #ee8294;\\n}\\n\\n.btn.btn-info {\\n  background-color: #1bbc9b;\\n  color: #ffffff;\\n}\\n\\n.btn.btn-info:hover {\\n  background-color: #31e1bd;\\n}\\n\\n.btn.btn-light {\\n  background-color: #d9e9e8;\\n  color: #1a1a1a;\\n}\\n\\n.btn.btn-light:hover {\\n  background-color: #84b8b4;\\n}\\n\\n.btn.btn-dark {\\n  background-color: #1a1a1a;\\n  color: #d9e9e8;\\n}\\n\\n.btn.btn-dark:hover {\\n  background-color: #5f5f5f;\\n}\\n\\n.btn.btn-white {\\n  background-color: #ffffff;\\n  color: #1a1a1a;\\n}\\n\\n.btn.btn-white:hover {\\n  background-color: #cccccc;\\n}\\n\\n.btn.btn-black {\\n  background-color: #000000;\\n  color: #ffffff;\\n}\\n\\n.btn.btn-black:hover {\\n  background-color: #666666;\\n}\\n\\n.btn.btn-link {\\n  background-color: #1b89bc;\\n  color: #ffffff;\\n}\\n\\n.btn.btn-link:hover {\\n  background-color: #31a9e1;\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  .nav-btn {\\n    display: none;\\n  }\\n\\n  .navbar-brand {\\n    display: none;\\n  }\\n\\n  #navbar {\\n    justify-content: center;\\n  }\\n\\n  h1 {\\n    font-size: 18px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JATE/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JATE/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JATE/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Workbox\": () => (/* binding */ v),\n/* harmony export */   \"WorkboxEvent\": () => (/* binding */ u),\n/* harmony export */   \"messageSW\": () => (/* binding */ n)\n/* harmony export */ });\ntry {\n  self[\"workbox:window:6.5.3\"] && _();\n} catch (n) {}\n\nfunction n(n, t) {\n  return new Promise(function (r) {\n    var e = new MessageChannel();\n    e.port1.onmessage = function (n) {\n      r(n.data);\n    }, n.postMessage(t, [e.port2]);\n  });\n}\n\nfunction t(n, t) {\n  for (var r = 0; r < t.length; r++) {\n    var e = t[r];\n    e.enumerable = e.enumerable || !1, e.configurable = !0, \"value\" in e && (e.writable = !0), Object.defineProperty(n, e.key, e);\n  }\n}\n\nfunction r(n, t) {\n  (null == t || t > n.length) && (t = n.length);\n\n  for (var r = 0, e = new Array(t); r < t; r++) e[r] = n[r];\n\n  return e;\n}\n\nfunction e(n, t) {\n  var e;\n\n  if (\"undefined\" == typeof Symbol || null == n[Symbol.iterator]) {\n    if (Array.isArray(n) || (e = function (n, t) {\n      if (n) {\n        if (\"string\" == typeof n) return r(n, t);\n        var e = Object.prototype.toString.call(n).slice(8, -1);\n        return \"Object\" === e && n.constructor && (e = n.constructor.name), \"Map\" === e || \"Set\" === e ? Array.from(n) : \"Arguments\" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? r(n, t) : void 0;\n      }\n    }(n)) || t && n && \"number\" == typeof n.length) {\n      e && (n = e);\n      var i = 0;\n      return function () {\n        return i >= n.length ? {\n          done: !0\n        } : {\n          done: !1,\n          value: n[i++]\n        };\n      };\n    }\n\n    throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n  }\n\n  return (e = n[Symbol.iterator]()).next.bind(e);\n}\n\ntry {\n  self[\"workbox:core:6.5.3\"] && _();\n} catch (n) {}\n\nvar i = function () {\n  var n = this;\n  this.promise = new Promise(function (t, r) {\n    n.resolve = t, n.reject = r;\n  });\n};\n\nfunction o(n, t) {\n  var r = location.href;\n  return new URL(n, r).href === new URL(t, r).href;\n}\n\nvar u = function (n, t) {\n  this.type = n, Object.assign(this, t);\n};\n\nfunction a(n, t, r) {\n  return r ? t ? t(n) : n : (n && n.then || (n = Promise.resolve(n)), t ? n.then(t) : n);\n}\n\nfunction c() {}\n\nvar f = {\n  type: \"SKIP_WAITING\"\n};\n\nfunction s(n, t) {\n  if (!t) return n && n.then ? n.then(c) : Promise.resolve();\n}\n\nvar v = function (r) {\n  var e, c;\n\n  function v(n, t) {\n    var e, c;\n    return void 0 === t && (t = {}), (e = r.call(this) || this).nn = {}, e.tn = 0, e.rn = new i(), e.en = new i(), e.on = new i(), e.un = 0, e.an = new Set(), e.cn = function () {\n      var n = e.fn,\n          t = n.installing;\n      e.tn > 0 || !o(t.scriptURL, e.sn.toString()) || performance.now() > e.un + 6e4 ? (e.vn = t, n.removeEventListener(\"updatefound\", e.cn)) : (e.hn = t, e.an.add(t), e.rn.resolve(t)), ++e.tn, t.addEventListener(\"statechange\", e.ln);\n    }, e.ln = function (n) {\n      var t = e.fn,\n          r = n.target,\n          i = r.state,\n          o = r === e.vn,\n          a = {\n        sw: r,\n        isExternal: o,\n        originalEvent: n\n      };\n      !o && e.mn && (a.isUpdate = !0), e.dispatchEvent(new u(i, a)), \"installed\" === i ? e.wn = self.setTimeout(function () {\n        \"installed\" === i && t.waiting === r && e.dispatchEvent(new u(\"waiting\", a));\n      }, 200) : \"activating\" === i && (clearTimeout(e.wn), o || e.en.resolve(r));\n    }, e.dn = function (n) {\n      var t = e.hn,\n          r = t !== navigator.serviceWorker.controller;\n      e.dispatchEvent(new u(\"controlling\", {\n        isExternal: r,\n        originalEvent: n,\n        sw: t,\n        isUpdate: e.mn\n      })), r || e.on.resolve(t);\n    }, e.gn = (c = function (n) {\n      var t = n.data,\n          r = n.ports,\n          i = n.source;\n      return a(e.getSW(), function () {\n        e.an.has(i) && e.dispatchEvent(new u(\"message\", {\n          data: t,\n          originalEvent: n,\n          ports: r,\n          sw: i\n        }));\n      });\n    }, function () {\n      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];\n\n      try {\n        return Promise.resolve(c.apply(this, n));\n      } catch (n) {\n        return Promise.reject(n);\n      }\n    }), e.sn = n, e.nn = t, navigator.serviceWorker.addEventListener(\"message\", e.gn), e;\n  }\n\n  c = r, (e = v).prototype = Object.create(c.prototype), e.prototype.constructor = e, e.__proto__ = c;\n  var h,\n      l,\n      m,\n      w = v.prototype;\n  return w.register = function (n) {\n    var t = (void 0 === n ? {} : n).immediate,\n        r = void 0 !== t && t;\n\n    try {\n      var e = this;\n      return function (n, t) {\n        var r = n();\n        if (r && r.then) return r.then(t);\n        return t(r);\n      }(function () {\n        if (!r && \"complete\" !== document.readyState) return s(new Promise(function (n) {\n          return window.addEventListener(\"load\", n);\n        }));\n      }, function () {\n        return e.mn = Boolean(navigator.serviceWorker.controller), e.yn = e.pn(), a(e.bn(), function (n) {\n          e.fn = n, e.yn && (e.hn = e.yn, e.en.resolve(e.yn), e.on.resolve(e.yn), e.yn.addEventListener(\"statechange\", e.ln, {\n            once: !0\n          }));\n          var t = e.fn.waiting;\n          return t && o(t.scriptURL, e.sn.toString()) && (e.hn = t, Promise.resolve().then(function () {\n            e.dispatchEvent(new u(\"waiting\", {\n              sw: t,\n              wasWaitingBeforeRegister: !0\n            }));\n          }).then(function () {})), e.hn && (e.rn.resolve(e.hn), e.an.add(e.hn)), e.fn.addEventListener(\"updatefound\", e.cn), navigator.serviceWorker.addEventListener(\"controllerchange\", e.dn), e.fn;\n        });\n      });\n    } catch (n) {\n      return Promise.reject(n);\n    }\n  }, w.update = function () {\n    try {\n      return this.fn ? s(this.fn.update()) : void 0;\n    } catch (n) {\n      return Promise.reject(n);\n    }\n  }, w.getSW = function () {\n    return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise;\n  }, w.messageSW = function (t) {\n    try {\n      return a(this.getSW(), function (r) {\n        return n(r, t);\n      });\n    } catch (n) {\n      return Promise.reject(n);\n    }\n  }, w.messageSkipWaiting = function () {\n    this.fn && this.fn.waiting && n(this.fn.waiting, f);\n  }, w.pn = function () {\n    var n = navigator.serviceWorker.controller;\n    return n && o(n.scriptURL, this.sn.toString()) ? n : void 0;\n  }, w.bn = function () {\n    try {\n      var n = this;\n      return function (n, t) {\n        try {\n          var r = n();\n        } catch (n) {\n          return t(n);\n        }\n\n        if (r && r.then) return r.then(void 0, t);\n        return r;\n      }(function () {\n        return a(navigator.serviceWorker.register(n.sn, n.nn), function (t) {\n          return n.un = performance.now(), t;\n        });\n      }, function (n) {\n        throw n;\n      });\n    } catch (n) {\n      return Promise.reject(n);\n    }\n  }, h = v, (l = [{\n    key: \"active\",\n    get: function () {\n      return this.en.promise;\n    }\n  }, {\n    key: \"controlling\",\n    get: function () {\n      return this.on.promise;\n    }\n  }]) && t(h.prototype, l), m && t(h, m), v;\n}(function () {\n  function n() {\n    this.Pn = new Map();\n  }\n\n  var t = n.prototype;\n  return t.addEventListener = function (n, t) {\n    this.Sn(n).add(t);\n  }, t.removeEventListener = function (n, t) {\n    this.Sn(n).delete(t);\n  }, t.dispatchEvent = function (n) {\n    n.target = this;\n\n    for (var t, r = e(this.Sn(n.type)); !(t = r()).done;) {\n      (0, t.value)(n);\n    }\n  }, t.Sn = function (n) {\n    return this.Pn.has(n) || this.Pn.set(n, new Set()), this.Pn.get(n);\n  }, n;\n}());\n\n\n\n//# sourceURL=webpack://JATE/./node_modules/workbox-window/build/workbox-window.prod.es5.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;