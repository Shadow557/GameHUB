// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"g7m11":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 4320;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a088accbf842e000";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"5WjR7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _displayAccJs = require("./mainDisplays/displayAcc.js");
var _displayAccJsDefault = parcelHelpers.interopDefault(_displayAccJs);
var _displaySettingsJs = require("./mainDisplays/displaySettings.js");
var _displaySettingsJsDefault = parcelHelpers.interopDefault(_displaySettingsJs);
var _displayMeJs = require("./mainDisplays/displayMe.js");
var _displayMeJsDefault = parcelHelpers.interopDefault(_displayMeJs);
var _displayMainJs = require("./mainDisplays/displayMain.js");
var _displayMainJsDefault = parcelHelpers.interopDefault(_displayMainJs);
var _displayMainMinigamesJs = require("./mainDisplays/displayMainMinigames.js");
var _displayMainMinigamesJsDefault = parcelHelpers.interopDefault(_displayMainMinigamesJs);
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}
// Esempio di utilizzo:
// const user = getCookie('username');
// console.log(user);
/**
 * @author Gabriele Papa Benigno
 * @description Gestisce il rendering della schermata dell'account:
 * 1. Mostra le informazioni dell'account corrente.
 * 2. Permette di modificare le informazioni dell'account.
 * 3. Gestisce l'uscita dalla schermata dell'account e/o il salvataggio delle nuove informazioni.
 * @returns {void}
 */ function controlDisplayAcc() {
    const userData = _modelJs.data.userData;
    (0, _displayMainJsDefault.default)._parentElement.classList.add("hidden");
    (0, _displayAccJsDefault.default).render(userData, true);
    document.querySelector("#accButtons").addEventListener("click", (e)=>{
        e.preventDefault();
        if (e.target.id === "editAcc") editAccountInfo();
        else exitDisplay();
    });
}
/**
 * @author Gabriele Papa Benigno
 * @description Gestisce la modifica delle informazioni dell'account:
 * 1. Mostra il modulo di modifica delle informazioni dell'account.
 * 2. Permette di salvare le modifiche.
 * 3. Gestisce l'uscita dalla schermata di modifica.
 * @returns {void}
 */ function editAccountInfo() {
    // console.log(`editAccountInfo() called`); //DEBUG
    // Mostra il modulo di modifica delle informazioni dell'account
    (0, _displayAccJsDefault.default).renderFromMarkup((0, _displayAccJsDefault.default)._generateEditableMarkup(), false);
    // Aggiunge un gestore di eventi per il pulsante di uscita dalla schermata di modifica
    document.querySelector("#exitAcc").addEventListener("click", (e)=>{
        e.preventDefault();
        exitDisplay();
    });
    // Aggiunge un gestore di eventi per il pulsante di salvataggio delle informazioni dell'account usando il modulo form come selettore
    // Questo gestore raccoglie i dati dal modulo e li aggiorna nel modello
    document.querySelector("#editAccForm").addEventListener("submit", (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = {
            username: formData.get("username"),
            password: formData.get("password"),
            email: formData.get("email")
        };
        _modelJs.data.userData = {
            ..._modelJs.data.userData,
            ...updatedData
        };
        (0, _displayAccJsDefault.default).update(_modelJs.data.userData);
        exitDisplay();
    });
}
/**
 * @author Gabriele Papa Benigno
 * @description Gestisce l'uscita dalla schermata corrente attiva.
 * @returns {void}
 */ function exitDisplay() {
    // console.log(`exitAccountInfo() called`);
    (0, _displayAccJsDefault.default)._parentElement.classList.add("hidden");
    (0, _displayMainJsDefault.default)._parentElement.classList.remove("hidden");
    if (!(0, _displayMainJsDefault.default)._parentElement.innerHTML) controlDisplayMain();
}
/**
 * @author Gabriele Papa Benigno
 * @description Gestisce il rendering della schermata delle impostazioni:
 * 1. Mostra le impostazioni correnti.
 * 2. Permette di modificare le impostazioni.
 * 3. Gestisce l'uscita dalla schermata delle impostazioni.
 * @returns {void}
 */ function controlDisplaySettings() {
    const userSettings = _modelJs.data.settings;
    (0, _displayMainJsDefault.default)._parentElement.classList.add("hidden");
    (0, _displaySettingsJsDefault.default).render(userSettings, true);
    // Aggiunge un gestore di eventi per il pulsante delle impostazioni
    document.querySelector("#editSettings").addEventListener("click", (e)=>{
        e.preventDefault();
        // Mostra il modulo di modifica delle impostazioni
        (0, _displaySettingsJsDefault.default).renderFromMarkup((0, _displaySettingsJsDefault.default)._generateEditableMarkup(), false);
        // Aggiunge un gestore di eventi per il pulsante di salvataggio delle impostazioni
        // Questo gestore raccoglie i dati dal modulo e li aggiorna nel modello
        // Poi aggiorna la visualizzazione delle impostazioni e chiude la schermata delle impostazioni
        document.querySelector("#editSettingsForm").addEventListener("submit", (e)=>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const updatedData = {
                titleColor: [
                    formData.get("titleColor1"),
                    formData.get("titleColor2")
                ],
                subtitleColor: [
                    formData.get("subtitleColor1"),
                    formData.get("subtitleColor2")
                ],
                backgroundColor: [
                    formData.get("backgroundColor1"),
                    formData.get("backgroundColor2")
                ]
            };
            _modelJs.data.settings = {
                ..._modelJs.data.settings,
                ...updatedData
            };
            (0, _displaySettingsJsDefault.default).changeColors(updatedData);
            (0, _displaySettingsJsDefault.default).update(_modelJs.data.settings);
            exitDisplay();
        });
        // Aggiunge un gestore di eventi per il pulsante di uscita dalle impostazioni
        // Questo gestore chiude la schermata delle impostazioni senza applicare le modifiche
        document.querySelector("#exitSettings").addEventListener("click", (e)=>{
            e.preventDefault();
            exitDisplay();
        });
    });
    // Aggiunge un gestore di eventi per il pulsante di uscita dalle impostazioni
    // Questo gestore chiude la schermata delle impostazioni senza modificare nulla
    document.querySelector("#exitSettings").addEventListener("click", (e)=>{
        e.preventDefault();
        exitDisplay();
    });
}
function controlDisplayMe() {
    const myData = _modelJs.data;
    (0, _displayMainJsDefault.default)._parentElement.classList.add("hidden");
    (0, _displayMainJsDefault.default)._parentElement.innerHTML = "";
    (0, _displayMeJsDefault.default).render(myData, true);
    document.querySelector("#exit").addEventListener("click", (e)=>{
        e.preventDefault();
        exitDisplay();
    });
}
function controlDisplayMain(target) {
    const myData = _modelJs.data;
    if (!target) {
        (0, _displayMainJsDefault.default).render(myData, true);
        return;
    }
    if (myData.userData.currentPage !== 0) return;
    myData.userData.currentPage = 1;
    if (target === document.querySelector("#minigames")) {
        console.log(`minigames`); //DEBUG
        controlDisplayMainMinigames(myData);
    } else console.log(`games`); //DEBUG
}
function controlDisplayMainMinigames(myData) {
    console.log(myData);
    (0, _displayMainMinigamesJsDefault.default).render(myData, true);
}
/**
 * @author Gabriele Papa Benigno
 * @description Inizializza tutti i gestori di eventi legati alla pagina principale
 * @returns {void}
 */ (function init() {
    (0, _displayAccJsDefault.default).addHandlerRender(controlDisplayAcc);
    (0, _displaySettingsJsDefault.default).addHandlerRender(controlDisplaySettings);
    (0, _displayMeJsDefault.default).addHandlerRender(controlDisplayMe);
    (0, _displayMainJsDefault.default).addHandlerRender(controlDisplayMain);
// displayMainMinigames.addHandlerRender(controlDisplayMainMinigames);
})();

},{"./model.js":"361Ju","./mainDisplays/displayAcc.js":"fIrGz","./mainDisplays/displaySettings.js":"jLG3B","./mainDisplays/displayMe.js":"jn2qD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./mainDisplays/displayMain.js":"6xHo6","./mainDisplays/displayMainMinigames.js":"5Uygo"}],"361Ju":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "data", ()=>data);
const data = {
    // Tutti i dati dell'account utente
    // Inizializzati con valori di default per un utente non registrato
    userData: {
        username: "Guest",
        password: null,
        email: null,
        firstLogin: "2023-10-01,12:00",
        lastLogin: "2023-10-01,12:00",
        lastGame: null,
        lastGameData: null,
        totalTime: 0,
        achievements: 0,
        wins: 0,
        losses: 0,
        games: 0,
        currentPage: 0
    },
    // Dati del sito web
    // NON possono essere modificati dall'utente!!!
    website: {
        name: "GameHUB",
        description: "A game hub for all your gaming needs.",
        version: "1.0.0"
    },
    // Dati riguardanti ME
    me: {
        myName: "Shadow Shining",
        myEmail: "craftiaentity@gmail.com",
        myWebsite: "(maybe in the future)",
        myDescription: "A dude who doesn't know what to do in life.",
        myAvatarPath: "../Pictures/ShadowShining.png",
        myGitHub: "https://github.com/Shadow557"
    },
    // Impostazioni del sito web
    // Possono essere modificate dall'utente
    settings: {
        theme: "light",
        titleColor: [
            "#ff0000",
            "#000000"
        ],
        subtitleColor: [
            "#000000",
            "#ff0000"
        ],
        backgroundColor: [
            "#ffffff",
            "#777777"
        ]
    },
    // Dati dei giochi
    // Inizializzati con un array vuoto
    allGames: {
        minigames: [
            {
                name: "Minefield",
                icon: "Pictures/Guest.png",
                data: {}
            },
            {
                name: "Solitaire",
                icon: "Pictures/Guest.png",
                data: {}
            }
        ],
        games: []
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fIrGz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayTempJs = require("./displayTemp.js");
var _displayTempJsDefault = parcelHelpers.interopDefault(_displayTempJs);
/**
 * @author Gabriele Papa Benigno
 * @description Classe per visualizzare i dati dell'account utente.
 * Estende la classe Display per gestire la visualizzazione e l'editing delle informazioni dell'account.
 * @extends Display
 * @returns {displayACC} - Un'istanza della classe displayACC.
 */ class displayACC extends (0, _displayTempJsDefault.default) {
    _parentElement = document.querySelector(".display");
    _targetElement = document.querySelector("#header");
    _errorMessage = "No user data found. Please log in to view your account details.";
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare i dati dell'account utente.
	 * @returns {String} - Il markup HTML generato.
	 */ _generateMarkup() {
        return `<div id="accDisplayContent">
					<h1>User window</h1>
					<h2>Name: ${this._data.username}</h2>
					<h2>Password: ${this._data.password}</h2>
					<h2>Email: ${this._data.email ?? "none"}</h2>
                    <h2>First login: ${this._data.firstLogin}</h2>
					<h2>Last game played: ${this._data.lastGame}</h2>
					<h2>Time spent in total: ${this._data.totalTime}</h2>
					<h2>Achievements achieved: ${this._data.achievements}</h2>
					<h2>Total wins: ${this._data.wins}</h2>
					<h2>Total losses: ${this._data.losses}</h2>
					<h2>Games played: ${this._data.games}</h2>
					<h2>W/L rate: ${this._data.wins * this._data.losses / 100}</h2>
					<div id="accButtons">
						<button id="editAcc">Edit Account Info</button>
                    	<button id="exitAcc">Exit Account Info</button>
					</div>
				</div>`;
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per la modifica delle informazioni dell'account.
	 * @returns {String} - Il markup HTML generato per la modifica delle informazioni dell'account.
	 */ _generateEditableMarkup() {
        return `<div id="accDisplayContent">
					<form method="post" id="editAccForm">

					<h2><label for="username">Name: </label></h2>
					<input type="text" id="username" name="username" value="${this._data.username}" required>
					<br /><br />

					<h2><label for="password">Password: </label></h2>
					<input type="password" id="password" name="password" value="${this._data.password ?? ""}" required>
					<br /><br />

					<h2><label for="email">Email: </label></h2>
					<input type="email" id="email" name="email" value="${this._data.email ?? ""}">
					<br /><br />

					<button id="saveAcc">Save Account Info</button>
					</form>
					
					<button id="exitAcc">Exit Account Info</button>
				</div>`;
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata dell'account.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */ addHandlerRender(handler) {
        this._targetElement.addEventListener("click", (e)=>{
            const target = e.target.closest("#accountLogo");
            if (!target) return;
            e.preventDefault();
            handler();
        // console.log(this);
        });
    }
}
exports.default = new displayACC();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./displayTemp.js":"4HM4j"}],"4HM4j":[function(require,module,exports,__globalThis) {
/**
 * @author Gabriele Papa Benigno
 * @description Classe base per la visualizzazione dei dati.
 * @returns {Display} - Un'istanza della classe Display.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Display {
    _data;
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea un'istanza di Display.
	 * @param {Array} data - I dati da visualizzare nella schermata.
	 * @param {Booean} render - Se true, renderizza i dati nella schermata, altrimenti restituisce il markup generato.
	 * @returns {void}
	 */ render(data, render = true) {
        // console.log(data.username); // DEBUG
        // Controlla se i dati sono validi
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        // console.log(data); // DEBUG
        // Aggiorna i dati della schermata e genera il markup
        this._data = data;
        const markup = this._generateMarkup();
        // Se render è false, restituisce il markup generato senza modificarlo nella schermata
        if (!render) return markup;
        // Altrimenti, pulisce il contenuto del parentElement e inserisce il nuovo markup
        this._clear();
        console.log(this._parentElement);
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
        // console.log(this);
        // console.log(this._parentElement.innerHTML.classList);
        this._parentElement.classList.remove("hidden");
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup HTML da visualizzare nella schermata senza l'uso di dati.
	 * @param {String} markup - Il markup HTML da inserire nel parentElement.
	 * @param {Boolean0} render - Se true, renderizza il markup nella schermata, altrimenti termina senza fare nulla.
	 * @returns {void}
	 */ renderFromMarkup(markup, render = true) {
        // Controlla se il markup è valido
        // Se il markup è vuoto o non valido, mostra un messaggio di errore
        if (!markup || markup.length === 0) return this.renderError();
        // Svuota il contenuto del parentElement e inserisce il nuovo markup
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
        // Se render è false, termina senza fare nulla
        if (!render) return;
        // Altrimenti, mostra il parentElement
        this._parentElement.classList.remove("hidden");
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description: Aggiorna i dati visualizzati nella schermata:
	 * 1) I dati presenti nella schermata vengono aggiornati.
	 * 2) Viene creato un nuovo Markup.
	 * 3) Viene generato un nuovo DOM virtuale.
	 * 4) Vengono raccolti in due array gli elementi del nuovo DOM virtuale + quelli di quello attuale.
	 * 5) Attraverso un forEach viene fatto un controllo su gli elementi presenti negli array, se uno presente nell'array 'vecchio' non cambacia con quello aggiornato, esso viene sovrascritto, sia che sia soltanto il testo, sia che siano i suoi attributi.
	 * @param {Array} data - I dati nuovi che andranno aggiornati sulla schermata.
	 * @returns {void}
	 */ update(data) {
        // Controlla se i dati sono validi
        // Se i dati sono vuoti o non validi, mostra un messaggio di errore
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        // aggiorna i dati della schermata e genera il nuovo markup
        this._data = data;
        const newMarkup = this._generateMarkup();
        // Crea un nuovo DOM virtuale e raccoglie gli elementi
        // presenti nel nuovo markup e in quello attuale
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        // per ogni elemento nel nuovo DOM virtuale,
        // controlla se è diverso da quello attuale
        // se è diverso, aggiorna il testo e gli attributi dell'elemento attuale
        // altrimenti non fa nulla
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Pulisce il contenuto del parentElement e mostra un messaggio di errore.
	 * @param {String} message - Il messaggio di errore da visualizzare.
	 * @return {void}
	 */ renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <h2>Error</h2>
        <p>${message}</p>
      </div>`;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Pulisce il contenuto del parentElement.
	 * @returns {void}
	 */ _clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = Display;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jLG3B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayTempJs = require("./displayTemp.js");
var _displayTempJsDefault = parcelHelpers.interopDefault(_displayTempJs);
/**
 * @author Gabriele Papa Benigno
 * @description Classe per visualizzare le impostazioni della pagina principale.
 * Estende la classe Display per gestire la visualizzazione e l'editing delle impostazioni utente.
 * @extends Display
 * @returns {DisplaySettings} - Un'istanza della classe DisplaySettings.
 */ class DisplaySettings extends (0, _displayTempJsDefault.default) {
    _parentElement = document.querySelector(".display");
    _targetElement = document.querySelector("#header");
    _errorMessage = "No user data found. Please log in to view your account details.";
    4;
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le impostazioni disponibili per l'utente.
	 * @returns {String} - Il markup HTML generato.
	 */ _generateMarkup() {
        return `<div id="settingsContent">
                    <h1>Settings</h1>
                    <h2>Theme: ${this._data.theme}</h2>
                    <h2>Title Color:
                        <span class="coloredBox" style="background:${this._data.titleColor[0]}"></span>
                        <span class="coloredBox" style="background:${this._data.titleColor[1]}"></span>
                    </h2>

                    <h2>Subtitle Color:
                    <span class="coloredBox" style="background:${this._data.subtitleColor[0]}"></span>
                    <span class="coloredBox" style="background:${this._data.subtitleColor[1]}"></span>
                    </h2>

                    <h2>Background Color:
                    <span class="coloredBox" style="background:${this._data.backgroundColor[0]}"></span>
                    <span class="coloredBox" style="background:${this._data.backgroundColor[1]}"></span>
                    </h2>
                    <br />

                    <button id="exitSettings">Exit Settings</button>
                    <button id="editSettings">Edit Settings</button>
				</div>`;
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per la modifica delle impostazioni dell'utente.
	 * @returns {String} - Il markup HTML generato per la modifica delle impostazioni.
	 */ _generateEditableMarkup() {
        return `<div id="settingsDisplayContent">
					<form method="post" id="editSettingsForm">

					<h2><label for="titleColor">Title color: </label></h2>
					<input type="color" id="titleColor1" name="titleColor1" value="${this._data.titleColor[0]}">
					<input type="color" id="titleColor2" name="titleColor2" value="${this._data.titleColor[1]}">
					<br /><br />

					<h2><label for="subtitleColor">Subtitle color: </label></h2>
					<input type="color" id="subtitleColor1" name="subtitleColor1" value="${this._data.subtitleColor[0]}">
					<input type="color" id="subtitleColor2" name="subtitleColor2" value="${this._data.subtitleColor[1]}">
					<br /><br />

					<h2><label for="backgroundColor">BackgroundColor: </label></h2>
					<input type="color" id="backgroundColor1" name="backgroundColor1" value="${this._data.backgroundColor[0]}">
					<input type="color" id="backgroundColor2" name="backgroundColor2" value="${this._data.backgroundColor[1]}">
					<br /><br />

					<button id="saveSettings" type="submit">Save settings</button>
					</form>
					
					<button id="exitSettings">Exit settings menu</button>
				</div>`;
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */ addHandlerRender(handler) {
        this._targetElement.addEventListener("click", (e)=>{
            const target = e.target.closest("#settings");
            if (!target) return;
            e.preventDefault();
            handler();
        });
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Gestisce l'evento di uscita dalla schermata dell'account.
	 * Rimuove la classe "hidden" dal parentElement e svuota il suo contenuto.
	 * @returns {void}
	 */ changeColors(updatedData) {
        this._data.titleColor = updatedData.titleColor;
        this._data.subtitleColor = updatedData.subtitleColor;
        this._data.backgroundColor = updatedData.backgroundColor;
        document.documentElement.style.setProperty("--sfumaturaTitolo", `linear-gradient(to top, ${this._data.titleColor[0]}, ${this._data.titleColor[1]})`);
        document.documentElement.style.setProperty("--sfumaturaSottotitolo", `linear-gradient(to top, ${this._data.subtitleColor[0]}, ${this._data.subtitleColor[1]})`);
        document.querySelector("#header").style.backgroundColor = this._data.backgroundColor[0];
        document.querySelector("#footer").style.backgroundColor = this._data.backgroundColor[0];
        document.querySelector("#body").style.backgroundColor = this._data.backgroundColor[1];
    }
}
exports.default = new DisplaySettings();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./displayTemp.js":"4HM4j"}],"jn2qD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayTempJs = require("./displayTemp.js");
var _displayTempJsDefault = parcelHelpers.interopDefault(_displayTempJs);
class displayMe extends (0, _displayTempJsDefault.default) {
    _parentElement = document.querySelector(".display");
    _targetElement = document.querySelector("#header");
    _errorMessage = "My info are not available. Sorry.";
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */ _generateMarkup() {
        return `<div id="myInfoContent">
                    <h1>My info:</h1>
					<h2>Name: ${this._data.me.myName}</h2>
                    <h2>Email: ${this._data.me.myEmail}</h2>
                    <h2>Main Website: ${this._data.me.myWebsite}</h2>
                    <h2>Description: ${this._data.me.myDescription}</h2>
                    <h2><a href="${this._data.me.myGitHub}" target="_blank">My GitHub</a></h2>
                    <br /><br />

                    <h1>Website info</h1>
                    <h2>Name: ${this._data.website.name}</h2>
                    <h2>Description: ${this._data.website.description}</h2>
                    <h2>Version: ${this._data.website.version}</h2>
                    <br />

                    <button id="exit">Exit</button>
				</div>`;
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */ addHandlerRender(handler) {
        this._targetElement.addEventListener("click", (e)=>{
            const target = e.target.closest("#logo");
            if (!target) return;
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new displayMe();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./displayTemp.js":"4HM4j"}],"6xHo6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayTempJs = require("./displayTemp.js");
var _displayTempJsDefault = parcelHelpers.interopDefault(_displayTempJs);
class displayMain extends (0, _displayTempJsDefault.default) {
    _parentElement = document.querySelector("#gameZone");
    _errorMessage = "My info are not available. Sorry.";
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */ _generateMarkup() {
        return `<div id="minigames" class="btn">Play Minigames</div>
                <div class="btn" id="games">Play Games</div>`;
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */ addHandlerRender(handler) {
        console.log();
        this._parentElement.addEventListener("click", (e)=>{
            let target = e.target.closest("#games");
            if (!target) target = e.target.closest("#minigames");
            else if (!target) return;
            e.preventDefault();
            handler(target);
        });
    }
}
exports.default = new displayMain();

},{"./displayTemp.js":"4HM4j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Uygo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayTempJs = require("./displayTemp.js");
var _displayTempJsDefault = parcelHelpers.interopDefault(_displayTempJs);
class displayMainMinigames extends (0, _displayTempJsDefault.default) {
    _parentElement = document.querySelector("#gameZone");
    _errorMessage = "My info are not available. Sorry.";
    /**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */ _generateMarkup() {
        // return this._data.map(result => previewView.render(result, false)).join('');
        // console.log(this._data.allGames.minigames);
        let str = "";
        let i = 0;
        this._data.allGames.minigames.map((game)=>{
            str += `<div class='game' id='${++i}'>`;
            str += `<h2>${game.name}</h2>`;
            str += `<img src="${game.icon}" alt="${game.name}" />`;
            console.log(game.icon);
            str += "</div>";
        });
        console.log(str);
        var e;
        return str;
    }
    /**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */ addHandlerRender(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            e.preventDefault();
            console.log(e.target);
            handler();
        });
    }
}
exports.default = new displayMainMinigames();

},{"./displayTemp.js":"4HM4j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["g7m11","5WjR7"], "5WjR7", "parcelRequire658c", {})

//# sourceMappingURL=GameHUB.f842e000.js.map
