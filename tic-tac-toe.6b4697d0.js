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
})({"loP4O":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 4320;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "04df36f56b4697d0";
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

},{}],"faVut":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("../../model.js");
var _displaySubmenuJs = require("./Displays/displaySubmenu.js");
var _displaySubmenuJsDefault = parcelHelpers.interopDefault(_displaySubmenuJs);
var _displayGameJs = require("./Displays/displayGame.js");
var _displayGameJsDefault = parcelHelpers.interopDefault(_displayGameJs);
/**
 * @author Shadow Shining
 * @description Gestisce il controllo della visualizzazione del sottomenu.
 * @returns {void}
 */ function controlDisplaySubmenu() {
    _modelJs.setCurrentIndex(1);
    (0, _displaySubmenuJsDefault.default).render(true);
}
/**
 * @author Shadow Shining
 * @description Gestisce il controllo della visualizzazione del gioco.
 * @param {String} difficulty - Il livello di difficoltà del gioco (default: "normal").
 * @returns {void}
 */ function controlDisplayGame(difficulty = "normal") {
    if (difficulty === "again") {
        controlDisplaySubmenu();
        _modelJs.data.allGames.minigames[0].data.round = 0;
        return;
    }
    _modelJs.setCurrentIndex(2);
    _modelJs.data.allGames.minigames[0].data.difficulty = difficulty;
    (0, _displayGameJsDefault.default).render(true);
}
/**
 * @author Shadow Shining
 * @description Gestisce il controllo del gioco Tic-Tac-Toe.
 * @param {int} index - L'indice della cella cliccata dall'utente.
 * @returns {void}
 */ function controlGame(index) {
    // console.log(document.querySelectorAll(".cell")[index]); //DEBUG
    console.log("Player: " + index); // DEBUG
    // Check if the cell is already occupied
    const emptyCells = Array.from(document.querySelectorAll(".cell")).filter((cell)=>cell.textContent === "");
    // console.log(emptyCells); // DEBUG
    if (emptyCells.length !== 0 && document.querySelectorAll(".cell")[index].textContent === "") {
        document.querySelectorAll(".cell")[index].textContent = "X";
        emptyCells.splice(emptyCells.indexOf(document.querySelectorAll(".cell")[index]), 1); // Remove the clicked cell from emptyCells
        controlGameAI(index, emptyCells);
        controlGameWin(); // Check for win condition after player's move
        _modelJs.data.allGames.minigames[0].data.round++; // Increment the round
    }
}
/**
 * @author Shadow Shining
 * @description Gestisce il controllo del gioco Tic-Tac-Toe per l'IA.
 * @param {int} indexGiocatore
 * @param {Array} emptyCells
 * @returns {void}
 */ function controlGameAI(indexGiocatore, emptyCells) {
    // Implement AI logic here
    const difficulty = _modelJs.data.allGames.minigames[0].data.difficulty;
    // console.log(emptyCells); // DEBUG
    if (emptyCells.length === 0) return; // No empty cells left
    const fullCorners = [
        0,
        2,
        6,
        8
    ]; // Indices of corner cells
    const fullEdges = [
        1,
        3,
        5,
        7
    ]; // Indices of edge cells
    const corners = [];
    const edges = [];
    const center = document.querySelector(".cell:nth-child(5)");
    emptyCells.forEach((cell, index)=>{
        const id = cell.id ? parseInt(cell.id) - 1 : index; // Convert id to zero-based index
        // Check if the cell is a corner or edge
        if ([
            0,
            2,
            6,
            8
        ].includes(id)) corners.push(id); // Corners
        else if ([
            1,
            3,
            5,
            7
        ].includes(id)) edges.push(id); // Edges
    });
    // console.log("corners"); // DEBUG
    // console.log(corners); // DEBUG
    // console.log("edges"); // DEBUG
    // console.log(edges); // DEBUG
    switch(difficulty){
        case "easy":
            // If the player clicked on a corner, the AI will play in a random edge cell
            // If the player clicked on an edge, the AI will play in a random corner cell
            // Otherwise, the AI will play in a random empty cell
            if (corners.includes(indexGiocatore)) {
                const randomEdge = edges[Math.floor(Math.random() * edges.length)];
                document.querySelectorAll(".cell")[randomEdge].textContent = "O";
            } else if (edges.includes(indexGiocatore)) {
                const randomCorner = corners[Math.floor(Math.random() * corners.length)];
                document.querySelectorAll(".cell")[randomCorner].textContent = "O";
            } else {
                const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                randomCell.textContent = "O";
            }
            break;
        case "medium":
            // Medium AI logic
            // If the player clicks on a corner cell, the AI will play in the center cell if available, otherwise one of the closest corners
            // If the player clicks on an edge cell, the AI will play in the center cell if available, otherwise one of the closest edges
            // If the player clicks on the center cell, the AI will play in a random corner or edge cell
            if (fullCorners.includes(indexGiocatore)) {
                if (center.textContent === "") {
                    document.querySelector(".cell:nth-child(5)").textContent = "O"; // Center cell
                    console.log(`lol`);
                } else if (corners.length > 0) {
                    const randomCorner = corners[Math.floor(Math.random() * corners.length)];
                    document.querySelectorAll(".cell")[randomCorner].textContent = "O";
                } else {
                    const randomEdge = edges[Math.floor(Math.random() * edges.length)];
                    document.querySelectorAll(".cell")[randomEdge].textContent = "O";
                }
            } else if (fullEdges.includes(indexGiocatore)) {
                if (center.textContent === "") document.querySelector(".cell:nth-child(5)").textContent = "O"; // Center cell
                else if (edges.length > 0) {
                    const randomEdge = edges[Math.floor(Math.random() * edges.length)];
                    document.querySelectorAll(".cell")[randomEdge].textContent = "O";
                } else {
                    const randomCorner = corners[Math.floor(Math.random() * corners.length)];
                    document.querySelectorAll(".cell")[randomCorner].textContent = "O";
                }
            } else {
                const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                randomCell.textContent = "O";
            }
            break;
        case "hard":
            // Hard AI logic
            // The AI is almost unbeatable
            // The AI will try to create the triangle of death
            console.log(`ROUND ` + _modelJs.data.allGames.minigames[0].data.round);
            switch(_modelJs.data.allGames.minigames[0].data.round){
                // Player clicks on a corner cell - AI plays the opposite corner as its first move
                case 0:
                    const oppositeCorner = {
                        0: 8,
                        2: 6,
                        6: 2,
                        8: 0
                    }[indexGiocatore];
                    if (!oppositeCorner) {
                        const randomCorner = corners[Math.floor(Math.random() * corners.length)];
                        document.querySelectorAll(".cell")[randomCorner].textContent = "O";
                    } else document.querySelectorAll(".cell")[oppositeCorner].textContent = "O";
                    break;
                // Next move, the AI will look for a free corner cell
                case 1:
                    if (corners.length > 0) {
                        if (corners.includes(0)) {
                            if (!edges.includes(3) || !edges.includes(1)) {
                                if (corners.includes(0)) document.querySelectorAll(".cell")[0].textContent = "O";
                                else {
                                    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                                    randomCell.textContent = "O";
                                }
                            } else //
                            if (corners.includes(8)) document.querySelectorAll(".cell")[8].textContent = "O";
                            else {
                                const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                                randomCell.textContent = "O";
                            }
                        } else if (corners.includes(2)) {
                            if (!edges.includes(5) || !edges.includes(1)) document.querySelectorAll(".cell")[2].textContent = "O";
                            else document.querySelectorAll(".cell")[6].textContent = "O";
                        }
                    }
                    break;
                case 2:
                    if (corners.length === 1) document.querySelectorAll(".cell")[corners[0]].textContent = "O";
                    break;
                // The AI will play in the center cell if available, otherwise a random edge cell
                case 3:
                    if (center.textContent === "") center.textContent = "O"; // Center cell
                    else if (edges.length > 0) {
                        const randomEdge = edges[Math.floor(Math.random() * edges.length)];
                        document.querySelectorAll(".cell")[randomEdge].textContent = "O";
                    }
                    break;
            }
            break;
    }
}
/**
 * @author Shadow Shining
 * @description Gestisce il controllo della vittoria nel gioco Tic-Tac-Toe.
 * @returns {void}
 */ function controlGameWin() {
    // Implement win logic here
    // Check rows, columns, and diagonals for a win condition
    const cells = document.querySelectorAll(".cell");
    const winningCombinations = [
        [
            0,
            1,
            2
        ],
        [
            3,
            4,
            5
        ],
        [
            6,
            7,
            8
        ],
        [
            0,
            3,
            6
        ],
        [
            1,
            4,
            7
        ],
        [
            2,
            5,
            8
        ],
        [
            0,
            4,
            8
        ],
        [
            2,
            4,
            6
        ]
    ];
    for (const combination of winningCombinations){
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent && cells[a].textContent === "X") {
            alert(`${_modelJs.data.userData.username} wins!`);
            _modelJs.data.allGames.minigames[0].data.round = -1;
            console.log(document.querySelectorAll(".hidden"));
            document.querySelectorAll(".hidden").forEach((element)=>{
                element.classList.remove("hidden");
            });
        } else if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent && cells[a].textContent === "O") {
            alert("AI wins!");
            _modelJs.data.allGames.minigames[0].data.round = -1;
            console.log(document.querySelectorAll(".hidden"));
            document.querySelectorAll(".hidden").forEach((element)=>{
                element.classList.remove("hidden");
            });
        }
    }
    if (Array.from(cells).every((cell)=>cell.textContent !== "")) {
        alert("It's a draw!");
        _modelJs.data.allGames.minigames[0].data.round = -1;
        console.log(document.querySelectorAll(".hidden"));
        document.querySelectorAll(".hidden").forEach((element)=>{
            element.classList.remove("hidden");
        });
    }
}
/**
 * @author Gabriele Papa Benigno
 * @description Inizializza tutti i gestori di eventi legati alla pagina principale
 * @returns {void}
 */ (function init() {
    (0, _displaySubmenuJsDefault.default).addHandlerRender(controlDisplaySubmenu);
    (0, _displayGameJsDefault.default).addHandlerRender(controlDisplayGame);
    (0, _displayGameJsDefault.default).addGameHandler(controlGame);
})();

},{"../../model.js":"361Ju","./Displays/displaySubmenu.js":"hkrQE","./Displays/displayGame.js":"h3XcC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"361Ju":[function(require,module,exports,__globalThis) {
/**
 * @author Shadow Shining
 * @version 1.0.0
 * @descrizione Modello dei dati per l'applicazione GameHUB.
 * Questo modello contiene tutte le informazioni necessarie per gestire l'account utente, le impostazioni del sito web, i dati dei giochi e altre informazioni rilevanti.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "setCurrentIndex", ()=>setCurrentIndex);
parcelHelpers.export(exports, "getByCurrentIndex", ()=>getByCurrentIndex);
const data = {
    /**
    * @description Dati dell'utente
    * Inizializzati con i valori predefiniti per un utente ospite.
    */ userData: {
        username: "Guest",
        password: null,
        email: null,
        firstLogin: "2023-10-01,12:00",
        lastLogin: "2023-10-01,12:00",
        lastGame: null,
        totalTime: 0,
        achievements: 0,
        wins: 0,
        losses: 0,
        currentPage: 0
    },
    /**
    * @description Dati del sito web
    * Inizializzati con i valori NON-modificabili per il sito web GameHUB.
    */ website: {
        name: "GameHUB",
        description: "A game hub for all your gaming needs.",
        version: "1.0.0"
    },
    /**
    * @description Dati miei presenti nel sito web
    */ me: {
        myName: "Shadow Shining",
        myEmail: "shadowshining432@gmail.com",
        myWebsite: "(maybe in the future)",
        myDescription: "A dude who knows what to do in life.",
        myAvatarPath: "../Pictures/ShadowShining.png",
        myGitHub: "https://github.com/Shadow557"
    },
    /**
    * @description Impostazioni del sito web
    * Inizializzate con i valori predefiniti per il tema, i colori del titolo, del sottotitolo e dello sfondo.
    * Queste impostazioni possono essere modificate dall'utente.
    */ settings: {
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
    /**
    * @description Dati dei giochi
    * Suddivisi in minigiochi e giochi completi.
    * I minigiochi sono giochi semplici e veloci, mentre i giochi completi sono giochi più complessi e impegnativi.
    * Entrambi i tipi di giochi hanno i dati all'interno di un proprio oggetto presente nei due array.
    */ allGames: {
        id: {
            category: "minigames",
            game: 0
        },
        minigames: [
            {
                name: "Tic Tac Toe",
                icon: "/Pictures/Guest.png",
                data: {
                    id: "tic-tac-toe",
                    description: "A classic game of Tic Tac Toe.",
                    difficulty: "normal",
                    spaces: [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    round: 0
                }
            },
            {
                name: "2048",
                icon: "Pictures/Guest.png",
                data: {
                    id: "2048",
                    description: "A sliding puzzle game where the goal is to combine tiles with the same number."
                }
            },
            {
                name: "Minesweeper",
                icon: "Pictures/Guest.png",
                data: {
                    id: "minesweeper",
                    description: "A classic puzzle game where the goal is to clear a minefield without detonating any mines."
                }
            },
            {
                name: "Snake",
                icon: "Pictures/Guest.png",
                data: {
                    id: "snake",
                    description: "A classic arcade game where the player controls a snake that grows in length."
                }
            },
            {
                name: "Sudoku",
                icon: "Pictures/Guest.png",
                data: {
                    id: "sudoku",
                    description: "A logic-based number placement puzzle where the goal is to fill a grid with numbers so that each column, row, and subgrid contains all the digits from 1 to 9."
                }
            },
            {
                name: "Solitaire",
                icon: "Pictures/Guest.png",
                data: {
                    id: "solitaire",
                    description: "A card game where the goal is to move all cards to foundation piles in a specific order."
                }
            }
        ],
        games: []
    }
};
const setCurrentIndex = (index)=>{
    if (index < 0) {
        data.allGames.id.game = data.allGames.minigames.length - 1; // Reset to last game if index is out of bounds
        return;
    } else if (index >= data.allGames.minigames.length) {
        data.allGames.id.game = 0; // Reset to first game if index is out of bounds
        return;
    }
    data.allGames.id.game = index;
};
const getByCurrentIndex = ()=>{
    const category = data.allGames.id.category;
    const game = data.allGames.id.game;
    // console.log(game, category); // DEBUG
    // console.log(gameArr[0]); // DEBUG
    return data.allGames[category][game];
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

},{}],"hkrQE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayTempJs = require("../../../mainDisplays/displayTemp.js");
var _displayTempJsDefault = parcelHelpers.interopDefault(_displayTempJs);
class displaySubmenu extends (0, _displayTempJsDefault.default) {
    _parentElement = document.querySelector("#gameZone");
    _errorMessage = "My info are not available. Sorry.";
    /**
    * @author Gabriele Papa Benigno
    * @description Crea il markup per visualizzare le informazioni che MI riguardano.
    * @returns {String} - Il markup HTML generato.
    */ _generateMarkup() {
        return `
            <div id="submenu">
               <h1 class="subtitle2">Tic-Tac-Toe</h1>
               <div class="btn" id="easy">Easy</div>
               <div class="btn" id="medium">Medium</div>
               <div class="btn" id="hard">Hard</div>
            </div>`;
    }
    /**
    * @author Gabriele Papa Benigno
    * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
    * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
    * @returns {void}
    */ addHandlerRender(handler) {
        console.log();
        this._parentElement.addEventListener("click", (e)=>{
            // e.preventDefault();
            // console.log(e.target);
            if (e.target.id === "play") handler();
        });
    }
}
exports.default = new displaySubmenu();

},{"../../../mainDisplays/displayTemp.js":"4HM4j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4HM4j":[function(require,module,exports,__globalThis) {
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
        // console.log(this._parentElement);
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
	 * 5) Attraverso un forEach viene fatto un controllo sugli elementi presenti negli array, se uno presente nell'array 'vecchio' non cambacia con quello aggiornato, esso viene sovrascritto, sia che sia soltanto il testo, sia che siano i suoi attributi.
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h3XcC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _displayTempJs = require("../../../mainDisplays/displayTemp.js");
var _displayTempJsDefault = parcelHelpers.interopDefault(_displayTempJs);
class displayGame extends (0, _displayTempJsDefault.default) {
    _parentElement = document.querySelector("#gameZone");
    _errorMessage = "Game are not available. Sorry.";
    /**
    * @author Gabriele Papa Benigno
    * @description Crea il markup per visualizzare le informazioni che MI riguardano.
    * @returns {String} - Il markup HTML generato.
    */ _generateMarkup() {
        return `
            <div id="row">
               <a href="tic-tac-toe.html" class="hidden" ><div class="btn">\u{2190}</div></a>
               <div id="ticTacToe">
                  <div class="cell" id="1"></div>
                  <div class="cell" id="2"></div>
                  <div class="cell" id="3"></div>
                  <div class="cell" id="4"></div>
                  <div class="cell" id="5"></div>
                  <div class="cell" id="6"></div>
                  <div class="cell" id="7"></div>
                  <div class="cell" id="8"></div>
                  <div class="cell" id="9"></div>
               </div>
               <div class="btn hidden" id="again">Again</div>
            </div>`;
    }
    /**
    * @author Gabriele Papa Benigno
    * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
    * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
    * @returns {void}
    */ addHandlerRender(handler) {
        console.log();
        this._parentElement.addEventListener("click", (e)=>{
            // e.preventDefault();
            // console.log(e.target.id);
            if (e.target.id !== "easy" && e.target.id !== "medium" && e.target.id !== "hard" && e.target.id !== "again") return; // If the target is not a button, do nothing
            const difficulty = e.target.id;
            console.log(difficulty);
            handler(difficulty); // Call the handler with the difficulty level
        });
    }
    /**
    * @author Shadow Shining
    * @description Aggiunge un gestore di eventi per il gioco Tic-Tac-To
    * @param {Function} handler - La funzione da eseguire quando si verifica un evento di gioco.
    * @returns {void}
    */ addGameHandler(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            // e.preventDefault();
            // console.log(e.target);
            if (e.target.classList.contains("cell")) {
                const cellIndex = Array.from(this._parentElement.querySelectorAll(".cell")).indexOf(e.target);
                handler(cellIndex); // Call the handler with the cell index
            }
        });
    }
}
exports.default = new displayGame();

},{"../../../mainDisplays/displayTemp.js":"4HM4j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["loP4O","faVut"], "faVut", "parcelRequire658c", {})

//# sourceMappingURL=tic-tac-toe.6b4697d0.js.map
