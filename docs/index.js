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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/inferno/dist/index.esm.js
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(o) {
    return o === void 0 || o === null;
}
function isInvalid(o) {
    return o === null || o === false || o === true || o === void 0;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isString(o) {
    return typeof o === 'string';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isNull(o) {
    return o === null;
}
function isUndefined(o) {
    return o === void 0;
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}
// object.event should always be function, otherwise its badly created object.
function isLinkEventObject(o) {
    return !isNull(o) && typeof o === 'object';
}

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var Fragment = '$F';
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function appendChild(parentDOM, dom) {
    parentDOM.appendChild(dom);
}
function insertOrAppend(parentDOM, newNode, nextNode) {
    if (isNull(nextNode)) {
        appendChild(parentDOM, newNode);
    }
    else {
        parentDOM.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDOM, newDom, lastDom) {
    parentDOM.replaceChild(newDom, lastDom);
}
function removeChild(parentDOM, childNode) {
    parentDOM.removeChild(childNode);
}
function callAll(arrayFn) {
    var listener;
    while ((listener = arrayFn.shift()) !== undefined) {
        listener();
    }
}
function findChildVNode(vNode, startEdge, flags) {
    var children = vNode.children;
    if (flags & 4 /* ComponentClass */) {
        return children.$LI;
    }
    if (flags & 8192 /* Fragment */) {
        return vNode.childFlags === 2 /* HasVNodeChildren */ ? children : children[startEdge ? 0 : children.length - 1];
    }
    return children;
}
function findDOMfromVNode(vNode, startEdge) {
    var flags;
    while (vNode) {
        flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            return vNode.dom;
        }
        vNode = findChildVNode(vNode, startEdge, flags);
    }
    return null;
}
function removeVNodeDOM(vNode, parentDOM) {
    do {
        var flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            removeChild(parentDOM, vNode.dom);
            return;
        }
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        if (flags & 8 /* ComponentFunction */) {
            vNode = children;
        }
        if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                vNode = children;
            }
            else {
                for (var i = 0, len = children.length; i < len; ++i) {
                    removeVNodeDOM(children[i], parentDOM);
                }
                return;
            }
        }
    } while (vNode);
}
function moveVNodeDOM(vNode, parentDOM, nextNode) {
    do {
        var flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            insertOrAppend(parentDOM, vNode.dom, nextNode);
            return;
        }
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        if (flags & 8 /* ComponentFunction */) {
            vNode = children;
        }
        if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                vNode = children;
            }
            else {
                for (var i = 0, len = children.length; i < len; ++i) {
                    moveVNodeDOM(children[i], parentDOM, nextNode);
                }
                return;
            }
        }
    } while (vNode);
}
function createDerivedState(instance, nextProps, state) {
    if (instance.constructor.getDerivedStateFromProps) {
        return combineFrom(state, instance.constructor.getDerivedStateFromProps(nextProps, state));
    }
    return state;
}
var renderCheck = {
    v: false
};
var options = {
    componentComparator: null,
    createVNode: null,
    renderComplete: null
};
function setTextContent(dom, children) {
    dom.textContent = children;
}
// Calling this function assumes, nextValue is linkEvent
function isLastValueSameLinkEvent(lastValue, nextValue) {
    return (isLinkEventObject(lastValue) &&
        lastValue.event === nextValue.event &&
        lastValue.data === nextValue.data);
}
function mergeUnsetProperties(to, from) {
    for (var propName in from) {
        if (isUndefined(to[propName])) {
            to[propName] = from[propName];
        }
    }
    return to;
}
function safeCall1(method, arg1) {
    return !!isFunction(method) && (method(arg1), true);
}

var keyPrefix = '$';
function V(childFlags, children, className, flags, key, props, ref, type) {
    this.childFlags = childFlags;
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key === void 0 ? null : key;
    this.props = props === void 0 ? null : props;
    this.ref = ref === void 0 ? null : ref;
    this.type = type;
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = new V(childFlag, children, className, flags, key, props, ref, type);
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    return vNode;
}
function mergeDefaultHooks(flags, type, ref) {
    if (flags & 4 /* ComponentClass */) {
        return ref;
    }
    var defaultHooks = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultHooks;
    if (isNullOrUndef(defaultHooks)) {
        return ref;
    }
    if (isNullOrUndef(ref)) {
        return defaultHooks;
    }
    return mergeUnsetProperties(ref, defaultHooks);
}
function mergeDefaultProps(flags, type, props) {
    // set default props
    var defaultProps = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultProps;
    if (isNullOrUndef(defaultProps)) {
        return props;
    }
    if (isNullOrUndef(props)) {
        return combineFrom(defaultProps, null);
    }
    return mergeUnsetProperties(props, defaultProps);
}
function resolveComponentFlags(flags, type) {
    if (flags & 12 /* ComponentKnown */) {
        return flags;
    }
    if (type.prototype && type.prototype.render) {
        return 4 /* ComponentClass */;
    }
    if (type.render) {
        return 32776 /* ForwardRefComponent */;
    }
    return 8 /* ComponentFunction */;
}
function createComponentVNode(flags, type, props, key, ref) {
    flags = resolveComponentFlags(flags, type);
    var vNode = new V(1 /* HasInvalidChildren */, null, null, flags, key, mergeDefaultProps(flags, type, props), mergeDefaultHooks(flags, type, ref), type);
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return new V(1 /* HasInvalidChildren */, isNullOrUndef(text) || text === true || text === false ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function createFragment(children, childFlags, key) {
    var fragment = createVNode(8192 /* Fragment */, 8192 /* Fragment */, null, children, childFlags, null, key, null);
    switch (fragment.childFlags) {
        case 1 /* HasInvalidChildren */:
            fragment.children = createVoidVNode();
            fragment.childFlags = 2 /* HasVNodeChildren */;
            break;
        case 16 /* HasTextChildren */:
            fragment.children = [createTextVNode(children)];
            fragment.childFlags = 4 /* HasNonKeyedChildren */;
            break;
    }
    return fragment;
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        var flags = vNode.flags;
        if (flags & 481 /* Element */) {
            if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (props.className !== void 0) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (props.key !== void 0) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (props.ref !== void 0) {
            if (flags & 8 /* ComponentFunction */) {
                vNode.ref = combineFrom(vNode.ref, props.ref);
            }
            else {
                vNode.ref = props.ref;
            }
            props.ref = undefined;
        }
    }
    return vNode;
}
/*
 * Fragment is different than normal vNode,
 * because when it needs to be cloned we need to clone its children too
 * But not normalize, because otherwise those possibly get KEY and re-mount
 */
function cloneFragment(vNodeToClone) {
    var clonedChildren;
    var oldChildren = vNodeToClone.children;
    var childFlags = vNodeToClone.childFlags;
    if (childFlags === 2 /* HasVNodeChildren */) {
        clonedChildren = directClone(oldChildren);
    }
    else if (childFlags & 12 /* MultipleChildren */) {
        clonedChildren = [];
        for (var i = 0, len = oldChildren.length; i < len; ++i) {
            clonedChildren.push(directClone(oldChildren[i]));
        }
    }
    return createFragment(clonedChildren, childFlags, vNodeToClone.key);
}
function directClone(vNodeToClone) {
    var flags = vNodeToClone.flags & -16385 /* ClearInUse */;
    var props = vNodeToClone.props;
    if (flags & 14 /* Component */) {
        if (!isNull(props)) {
            var propsToClone = props;
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
    }
    if ((flags & 8192 /* Fragment */) === 0) {
        return new V(vNodeToClone.childFlags, vNodeToClone.children, vNodeToClone.className, flags, vNodeToClone.key, props, vNodeToClone.ref, vNodeToClone.type);
    }
    return cloneFragment(vNodeToClone);
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function createPortal(children, container) {
    var normalizedRoot = normalizeRoot(children);
    return createVNode(1024 /* Portal */, 1024 /* Portal */, null, normalizedRoot, 0 /* UnknownChildren */, null, normalizedRoot.key, container);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (n.flags & 81920 /* InUseOrNormalized */ || isPrefixedKey) {
                        n = directClone(n);
                    }
                    n.flags |= 65536 /* Normalized */;
                    if (!isPrefixedKey) {
                        if (isNull(oldKey)) {
                            n.key = newKey;
                        }
                        else {
                            n.key = currentKey + oldKey;
                        }
                    }
                    else if (oldKey.substring(0, currentKey.length) !== currentKey) {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    switch (type) {
        case 'svg':
            return 32 /* SvgElement */;
        case 'input':
            return 64 /* InputElement */;
        case 'select':
            return 256 /* SelectElement */;
        case 'textarea':
            return 128 /* TextareaElement */;
        case Fragment:
            return 8192 /* Fragment */;
        default:
            return 1 /* HtmlElement */;
    }
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags = 1 /* HasInvalidChildren */;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildren = children;
    }
    else if (isStringOrNumber(children)) {
        newChildFlags = 16 /* HasTextChildren */;
        newChildren = children;
    }
    else if (isArray(children)) {
        var len = children.length;
        for (var i = 0; i < len; ++i) {
            var n = children[i];
            if (isInvalid(n) || isArray(n)) {
                newChildren = newChildren || children.slice(0, i);
                _normalizeVNodes(children, newChildren, i, '');
                break;
            }
            else if (isStringOrNumber(n)) {
                newChildren = newChildren || children.slice(0, i);
                newChildren.push(createTextVNode(n, keyPrefix + i));
            }
            else {
                var key = n.key;
                var needsCloning = (n.flags & 81920 /* InUseOrNormalized */) > 0;
                var isNullKey = isNull(key);
                var isPrefixed = isString(key) && key[0] === keyPrefix;
                if (needsCloning || isNullKey || isPrefixed) {
                    newChildren = newChildren || children.slice(0, i);
                    if (needsCloning || isPrefixed) {
                        n = directClone(n);
                    }
                    if (isNullKey || isPrefixed) {
                        n.key = keyPrefix + i;
                    }
                    newChildren.push(n);
                }
                else if (newChildren) {
                    newChildren.push(n);
                }
                n.flags |= 65536 /* Normalized */;
            }
        }
        newChildren = newChildren || children;
        if (newChildren.length === 0) {
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            newChildFlags = 8 /* HasKeyedChildren */;
        }
    }
    else {
        newChildren = children;
        newChildren.flags |= 65536 /* Normalized */;
        if (children.flags & 81920 /* InUseOrNormalized */) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
function normalizeRoot(input) {
    if (isInvalid(input) || isStringOrNumber(input)) {
        return createTextVNode(input, null);
    }
    if (isArray(input)) {
        return createFragment(input, 0 /* UnknownChildren */, null);
    }
    return input.flags & 16384 /* InUse */ ? directClone(input) : input;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var namespaces = {
    'xlink:actuate': xlinkNS,
    'xlink:arcrole': xlinkNS,
    'xlink:href': xlinkNS,
    'xlink:role': xlinkNS,
    'xlink:show': xlinkNS,
    'xlink:title': xlinkNS,
    'xlink:type': xlinkNS,
    'xml:base': xmlNS,
    'xml:lang': xmlNS,
    'xml:space': xmlNS
};

function getDelegatedEventObject(v) {
    return {
        onClick: v,
        onDblClick: v,
        onFocusIn: v,
        onFocusOut: v,
        onKeyDown: v,
        onKeyPress: v,
        onKeyUp: v,
        onMouseDown: v,
        onMouseMove: v,
        onMouseUp: v,
        onTouchEnd: v,
        onTouchMove: v,
        onTouchStart: v
    };
}
var attachedEventCounts = getDelegatedEventObject(0);
var attachedEvents = getDelegatedEventObject(null);
var syntheticEvents = getDelegatedEventObject(true);
function updateOrAddSyntheticEvent(name, dom) {
    var eventsObject = dom.$EV;
    if (!eventsObject) {
        eventsObject = dom.$EV = getDelegatedEventObject(null);
    }
    if (!eventsObject[name]) {
        if (++attachedEventCounts[name] === 1) {
            attachedEvents[name] = attachEventToDocument(name);
        }
    }
    return eventsObject;
}
function unmountSyntheticEvent(name, dom) {
    var eventsObject = dom.$EV;
    if (eventsObject && eventsObject[name]) {
        if (--attachedEventCounts[name] === 0) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = null;
    }
}
function handleSyntheticEvent(name, lastEvent, nextEvent, dom) {
    if (isFunction(nextEvent)) {
        updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
    }
    else if (isLinkEventObject(nextEvent)) {
        if (isLastValueSameLinkEvent(lastEvent, nextEvent)) {
            return;
        }
        updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
    }
    else {
        unmountSyntheticEvent(name, dom);
    }
}
// When browsers fully support event.composedPath we could loop it through instead of using parentNode property
function getTargetNode(event) {
    return isFunction(event.composedPath) ? event.composedPath()[0] : event.target;
}
function dispatchEvents(event, isClick, name, eventData) {
    var dom = getTargetNode(event);
    do {
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (isClick && dom.disabled) {
            return;
        }
        var eventsObject = dom.$EV;
        if (eventsObject) {
            var currentEvent = eventsObject[name];
            if (currentEvent) {
                // linkEvent object
                eventData.dom = dom;
                currentEvent.event ? currentEvent.event(currentEvent.data, event) : currentEvent(event);
                if (event.cancelBubble) {
                    return;
                }
            }
        }
        dom = dom.parentNode;
    } while (!isNull(dom));
}
function stopPropagation() {
    this.cancelBubble = true;
    if (!this.immediatePropagationStopped) {
        this.stopImmediatePropagation();
    }
}
function isDefaultPrevented() {
    return this.defaultPrevented;
}
function isPropagationStopped() {
    return this.cancelBubble;
}
function extendEventProperties(event) {
    // Event data needs to be object to save reference to currentTarget getter
    var eventData = {
        dom: document
    };
    event.isDefaultPrevented = isDefaultPrevented;
    event.isPropagationStopped = isPropagationStopped;
    event.stopPropagation = stopPropagation;
    Object.defineProperty(event, 'currentTarget', {
        configurable: true,
        get: function get() {
            return eventData.dom;
        }
    });
    return eventData;
}
function rootClickEvent(name) {
    return function (event) {
        if (event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 17 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.stopPropagation();
            return;
        }
        dispatchEvents(event, true, name, extendEventProperties(event));
    };
}
function rootEvent(name) {
    return function (event) {
        dispatchEvents(event, false, name, extendEventProperties(event));
    };
}
function attachEventToDocument(name) {
    var attachedEvent = name === 'onClick' || name === 'onDblClick' ? rootClickEvent(name) : rootEvent(name);
    document.addEventListener(normalizeEventName(name), attachedEvent);
    return attachedEvent;
}

function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement('i');
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; ++i) {
                triggerEventListener(props, methodName[i], e);
            }
        }
        if (isFunction(applyValue)) {
            var newVNode = this.$V;
            var newProps = newVNode.props || EMPTY_OBJ;
            applyValue(newProps, dom, false, newVNode);
        }
    };
    Object.defineProperty(fnMethod, 'wrapped', {
        configurable: false,
        enumerable: false,
        value: true,
        writable: false
    });
    return fnMethod;
}

function attachEvent(dom, eventName, handler) {
    var previousKey = "$" + eventName;
    var previousArgs = dom[previousKey];
    if (previousArgs) {
        if (previousArgs[1].wrapped) {
            return;
        }
        dom.removeEventListener(previousArgs[0], previousArgs[1]);
        dom[previousKey] = null;
    }
    if (isFunction(handler)) {
        dom.addEventListener(eventName, handler);
        dom[previousKey] = [eventName, handler];
    }
}

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
var wrappedOnChange = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
/* tslint:disable-next-line:no-empty */
function emptywrapper(event) {
    event.stopPropagation();
}
emptywrapper.wrapped = true;
function inputEvents(dom, nextPropsOrEmpty) {
    if (isCheckedType(nextPropsOrEmpty.type)) {
        attachEvent(dom, 'change', wrappedOnChange);
        attachEvent(dom, 'click', emptywrapper);
    }
    else {
        attachEvent(dom, 'input', onTextInputChange);
    }
}
function applyValueInput(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptions(vNode, value) {
    if (vNode.type === 'option') {
        updateChildOption(vNode, value);
    }
    else {
        var children = vNode.children;
        var flags = vNode.flags;
        if (flags & 4 /* ComponentClass */) {
            updateChildOptions(children.$LI, value);
        }
        else if (flags & 8 /* ComponentFunction */) {
            updateChildOptions(children, value);
        }
        else if (vNode.childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptions(children, value);
        }
        else if (vNode.childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; ++i) {
                updateChildOptions(children[i], value);
            }
        }
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if (props.value === value || (isArray(value) && value.indexOf(props.value) !== -1)) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
var onSelectChange = createWrappedFunction('onChange', applyValueSelect);
function selectEvents(dom) {
    attachEvent(dom, 'change', onSelectChange);
}
function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
    var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);
    if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
        dom.multiple = multiplePropInBoolean;
    }
    var index = nextPropsOrEmpty.selectedIndex;
    if (index === -1) {
        dom.selectedIndex = -1;
    }
    var childFlags = vNode.childFlags;
    if (childFlags !== 1 /* HasInvalidChildren */) {
        var value = nextPropsOrEmpty.value;
        if (isNumber(index) && index > -1 && dom.options[index]) {
            value = dom.options[index].value;
        }
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        updateChildOptions(vNode, value);
    }
}

var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
var wrappedOnChange$1 = createWrappedFunction('onChange');
function textAreaEvents(dom, nextPropsOrEmpty) {
    attachEvent(dom, 'input', onTextareaInputChange);
    if (nextPropsOrEmpty.onChange) {
        attachEvent(dom, 'change', wrappedOnChange$1);
    }
}
function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
                dom.defaultValue = defaultValue;
                dom.value = defaultValue;
            }
        }
    }
    else if (domValue !== value) {
        /* There is value so keep it controlled */
        dom.defaultValue = value;
        dom.value = value;
    }
}

/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function createRef() {
    return {
        current: null
    };
}
function forwardRef(render) {
    return {
        render: render
    };
}
function unmountRef(ref) {
    if (ref) {
        if (!safeCall1(ref, null) && ref.current) {
            ref.current = null;
        }
    }
}
function mountRef(ref, value, lifecycle) {
    if (ref && (isFunction(ref) || ref.current !== void 0)) {
        lifecycle.push(function () {
            if (!safeCall1(ref, value) && ref.current !== void 0) {
                ref.current = value;
            }
        });
    }
}

function remove(vNode, parentDOM) {
    unmount(vNode);
    removeVNodeDOM(vNode, parentDOM);
}
function unmount(vNode) {
    var flags = vNode.flags;
    var children = vNode.children;
    var ref;
    if (flags & 481 /* Element */) {
        ref = vNode.ref;
        var props = vNode.props;
        unmountRef(ref);
        var childFlags = vNode.childFlags;
        if (!isNull(props)) {
            var keys = Object.keys(props);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                if (syntheticEvents[key]) {
                    unmountSyntheticEvent(key, vNode.dom);
                }
            }
        }
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
    }
    else if (children) {
        if (flags & 4 /* ComponentClass */) {
            if (isFunction(children.componentWillUnmount)) {
                children.componentWillUnmount();
            }
            unmountRef(vNode.ref);
            children.$UN = true;
            unmount(children.$LI);
        }
        else if (flags & 8 /* ComponentFunction */) {
            ref = vNode.ref;
            if (!isNullOrUndef(ref) && isFunction(ref.onComponentWillUnmount)) {
                ref.onComponentWillUnmount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
            }
            unmount(children);
        }
        else if (flags & 1024 /* Portal */) {
            remove(children, vNode.ref);
        }
        else if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags & 12 /* MultipleChildren */) {
                unmountAllChildren(children);
            }
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; ++i) {
        unmount(children[i]);
    }
}
function clearDOM(dom) {
    // Optimization for clearing dom
    dom.textContent = '';
}
function removeAllChildren(dom, vNode, children) {
    unmountAllChildren(children);
    if (vNode.flags & 8192 /* Fragment */) {
        removeVNodeDOM(vNode, dom);
    }
    else {
        clearDOM(dom);
    }
}

function wrapLinkEvent(nextValue) {
    // This variable makes sure there is no "this" context in callback
    var ev = nextValue.event;
    return function (e) {
        ev(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (isLinkEventObject(nextValue)) {
        if (isLastValueSameLinkEvent(lastValue, nextValue)) {
            return;
        }
        nextValue = wrapLinkEvent(nextValue);
    }
    attachEvent(dom, normalizeEventName(name), nextValue);
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    if (isNullOrUndef(nextAttrValue)) {
        dom.removeAttribute('style');
        return;
    }
    var domStyle = dom.style;
    var style;
    var value;
    if (isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle.setProperty(style, value);
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle.removeProperty(style);
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle.setProperty(style, value);
        }
    }
}
function patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom) {
    var lastHtml = (lastValue && lastValue.__html) || '';
    var nextHtml = (nextValue && nextValue.__html) || '';
    if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
            if (!isNull(lastVNode)) {
                if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                    unmountAllChildren(lastVNode.children);
                }
                else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                    unmount(lastVNode.children);
                }
                lastVNode.children = null;
                lastVNode.childFlags = 1 /* HasInvalidChildren */;
            }
            dom.innerHTML = nextHtml;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
        case 'selectedIndex':
            break;
        case 'autoFocus':
            dom.autofocus = !!nextValue;
            break;
        case 'allowfullscreen':
        case 'autoplay':
        case 'capture':
        case 'checked':
        case 'controls':
        case 'default':
        case 'disabled':
        case 'hidden':
        case 'indeterminate':
        case 'loop':
        case 'muted':
        case 'novalidate':
        case 'open':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'selected':
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                break;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'style':
            patchStyle(lastValue, nextValue, dom);
            break;
        case 'dangerouslySetInnerHTML':
            patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom);
            break;
        default:
            if (syntheticEvents[prop]) {
                handleSyntheticEvent(prop, lastValue, nextValue, dom);
            }
            else if (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110) {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for isSVG being false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
    if (isFormElement) {
        hasControlledValue = isControlledFormElement(props);
        if (hasControlledValue) {
            addFormElementEventHandlers(flags, dom, props);
        }
    }
    for (var prop in props) {
        // do not add a hasOwnProperty check here, it affects performance
        patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null);
    }
    if (isFormElement) {
        processElement(flags, vNode, dom, props, true, hasControlledValue);
    }
}

function renderNewInput(instance, props, context) {
    var nextInput = normalizeRoot(instance.render(props, instance.state, context));
    var childContext = context;
    if (isFunction(instance.getChildContext)) {
        childContext = combineFrom(context, instance.getChildContext());
    }
    instance.$CX = childContext;
    return nextInput;
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    var instance = new Component(props, context);
    var usesNewAPI = (instance.$N = Boolean(Component.getDerivedStateFromProps || instance.getSnapshotBeforeUpdate));
    instance.$SVG = isSVG;
    instance.$L = lifecycle;
    vNode.children = instance;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    if (!usesNewAPI) {
        if (isFunction(instance.componentWillMount)) {
            instance.$BR = true;
            instance.componentWillMount();
            var pending = instance.$PS;
            if (!isNull(pending)) {
                var state = instance.state;
                if (isNull(state)) {
                    instance.state = pending;
                }
                else {
                    for (var key in pending) {
                        state[key] = pending[key];
                    }
                }
                instance.$PS = null;
            }
            instance.$BR = false;
        }
    }
    else {
        instance.state = createDerivedState(instance, props, instance.state);
    }
    instance.$LI = renderNewInput(instance, props, context);
    return instance;
}

function mount(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var flags = (vNode.flags |= 16384 /* InUse */);
    if (flags & 481 /* Element */) {
        mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (flags & 4 /* ComponentClass */) {
        mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (flags & 8 /* ComponentFunction */) {
        mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
        mountFunctionalComponentCallbacks(vNode, lifecycle);
    }
    else if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        mountText(vNode, parentDOM, nextNode);
    }
    else if (flags & 8192 /* Fragment */) {
        mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle);
    }
    else if (flags & 1024 /* Portal */) {
        mountPortal(vNode, context, parentDOM, nextNode, lifecycle);
    }
}
function mountPortal(vNode, context, parentDOM, nextNode, lifecycle) {
    mount(vNode.children, vNode.ref, context, false, null, lifecycle);
    var placeHolderVNode = createVoidVNode();
    mountText(placeHolderVNode, parentDOM, nextNode);
    vNode.dom = placeHolderVNode.dom;
}
function mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle) {
    var children = vNode.children;
    var childFlags = vNode.childFlags;
    // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
    // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
    if (childFlags & 12 /* MultipleChildren */ && children.length === 0) {
        childFlags = vNode.childFlags = 2 /* HasVNodeChildren */;
        children = vNode.children = createVoidVNode();
    }
    if (childFlags === 2 /* HasVNodeChildren */) {
        mount(children, parentDOM, nextNode, isSVG, nextNode, lifecycle);
    }
    else {
        mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle);
    }
}
function mountText(vNode, parentDOM, nextNode) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDOM)) {
        insertOrAppend(parentDOM, dom, nextNode);
    }
}
function mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var flags = vNode.flags;
    var props = vNode.props;
    var className = vNode.className;
    var children = vNode.children;
    var childFlags = vNode.childFlags;
    var dom = (vNode.dom = documentCreateElement(vNode.type, (isSVG = isSVG || (flags & 32 /* SvgElement */) > 0)));
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (childFlags === 16 /* HasTextChildren */) {
        setTextContent(dom, children);
    }
    else if (childFlags !== 1 /* HasInvalidChildren */) {
        var childrenIsSVG = isSVG && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            if (children.flags & 16384 /* InUse */) {
                vNode.children = children = directClone(children);
            }
            mount(children, dom, context, childrenIsSVG, null, lifecycle);
        }
        else if (childFlags === 8 /* HasKeyedChildren */ || childFlags === 4 /* HasNonKeyedChildren */) {
            mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle);
        }
    }
    if (!isNull(parentDOM)) {
        insertOrAppend(parentDOM, dom, nextNode);
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    mountRef(vNode.ref, dom, lifecycle);
}
function mountArrayChildren(children, dom, context, isSVG, nextNode, lifecycle) {
    for (var i = 0; i < children.length; ++i) {
        var child = children[i];
        if (child.flags & 16384 /* InUse */) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, context, isSVG, nextNode, lifecycle);
    }
}
function mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);
    mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
    mountClassComponentCallbacks(vNode.ref, instance, lifecycle);
}
function renderFunctionalComponent(vNode, context) {
    return vNode.flags & 32768 /* ForwardRef */ ? vNode.type.render(vNode.props || EMPTY_OBJ, vNode.ref, context) : vNode.type(vNode.props || EMPTY_OBJ, context);
}
function mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    mount((vNode.children = normalizeRoot(renderFunctionalComponent(vNode, context))), parentDOM, context, isSVG, nextNode, lifecycle);
}
function createClassMountCallback(instance) {
    return function () {
        instance.componentDidMount();
    };
}
function mountClassComponentCallbacks(ref, instance, lifecycle) {
    mountRef(ref, instance, lifecycle);
    if (isFunction(instance.componentDidMount)) {
        lifecycle.push(createClassMountCallback(instance));
    }
}
function createOnMountCallback(ref, vNode) {
    return function () {
        ref.onComponentDidMount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
    };
}
function mountFunctionalComponentCallbacks(vNode, lifecycle) {
    var ref = vNode.ref;
    if (!isNullOrUndef(ref)) {
        safeCall1(ref.onComponentWillMount, vNode.props || EMPTY_OBJ);
        if (isFunction(ref.onComponentDidMount)) {
            lifecycle.push(createOnMountCallback(ref, vNode));
        }
    }
}

function replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
    unmount(lastVNode);
    if ((nextVNode.flags & lastVNode.flags & 2033 /* DOMRef */) !== 0) {
        mount(nextVNode, null, context, isSVG, null, lifecycle);
        // Single DOM operation, when we have dom references available
        replaceChild(parentDOM, nextVNode.dom, lastVNode.dom);
    }
    else {
        mount(nextVNode, parentDOM, context, isSVG, findDOMfromVNode(lastVNode, true), lifecycle);
        removeVNodeDOM(lastVNode, parentDOM);
    }
}
function patch(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var nextFlags = (nextVNode.flags |= 16384 /* InUse */);
    if (lastVNode.flags !== nextFlags || lastVNode.type !== nextVNode.type || lastVNode.key !== nextVNode.key || nextFlags & 2048 /* ReCreate */) {
        if (lastVNode.flags & 16384 /* InUse */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
        }
        else {
            // Last vNode is not in use, it has crashed at application level. Just mount nextVNode and ignore last one
            mount(nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
        }
    }
    else if (nextFlags & 481 /* Element */) {
        patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle);
    }
    else if (nextFlags & 4 /* ComponentClass */) {
        patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (nextFlags & 8 /* ComponentFunction */) {
        patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (nextFlags & 16 /* Text */) {
        patchText(lastVNode, nextVNode);
    }
    else if (nextFlags & 512 /* Void */) {
        nextVNode.dom = lastVNode.dom;
    }
    else if (nextFlags & 8192 /* Fragment */) {
        patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
    }
    else {
        patchPortal(lastVNode, nextVNode, context, lifecycle);
    }
}
function patchSingleTextChild(lastChildren, nextChildren, parentDOM) {
    if (lastChildren !== nextChildren) {
        if (lastChildren !== '') {
            parentDOM.firstChild.nodeValue = nextChildren;
        }
        else {
            setTextContent(parentDOM, nextChildren);
        }
    }
}
function patchContentEditableChildren(dom, nextChildren) {
    if (dom.textContent !== nextChildren) {
        dom.textContent = nextChildren;
    }
}
function patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
    var lastChildren = lastVNode.children;
    var nextChildren = nextVNode.children;
    var lastChildFlags = lastVNode.childFlags;
    var nextChildFlags = nextVNode.childFlags;
    var nextNode = null;
    // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
    // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
    if (nextChildFlags & 12 /* MultipleChildren */ && nextChildren.length === 0) {
        nextChildFlags = nextVNode.childFlags = 2 /* HasVNodeChildren */;
        nextChildren = nextVNode.children = createVoidVNode();
    }
    var nextIsSingle = (nextChildFlags & 2 /* HasVNodeChildren */) !== 0;
    if (lastChildFlags & 12 /* MultipleChildren */) {
        var lastLen = lastChildren.length;
        // We need to know Fragment's edge node when
        if (
        // It uses keyed algorithm
        (lastChildFlags & 8 /* HasKeyedChildren */ && nextChildFlags & 8 /* HasKeyedChildren */) ||
            // It transforms from many to single
            nextIsSingle ||
            // It will append more nodes
            (!nextIsSingle && nextChildren.length > lastLen)) {
            // When fragment has multiple children there is always at least one vNode
            nextNode = findDOMfromVNode(lastChildren[lastLen - 1], false).nextSibling;
        }
    }
    patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lastVNode, lifecycle);
}
function patchPortal(lastVNode, nextVNode, context, lifecycle) {
    var lastContainer = lastVNode.ref;
    var nextContainer = nextVNode.ref;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false, null, lastVNode, lifecycle);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        removeChild(lastContainer, node);
        appendChild(nextContainer, node);
    }
}
function patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle) {
    var dom = (nextVNode.dom = lastVNode.dom);
    var lastProps = lastVNode.props;
    var nextProps = nextVNode.props;
    var isFormElement = false;
    var hasControlledValue = false;
    var nextPropsOrEmpty;
    isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
    // inlined patchProps  -- starts --
    if (lastProps !== nextProps) {
        var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
        nextPropsOrEmpty = nextProps || EMPTY_OBJ;
        if (nextPropsOrEmpty !== EMPTY_OBJ) {
            isFormElement = (nextFlags & 448 /* FormElement */) > 0;
            if (isFormElement) {
                hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
            }
            for (var prop in nextPropsOrEmpty) {
                var lastValue = lastPropsOrEmpty[prop];
                var nextValue = nextPropsOrEmpty[prop];
                if (lastValue !== nextValue) {
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode);
                }
            }
        }
        if (lastPropsOrEmpty !== EMPTY_OBJ) {
            for (var prop$1 in lastPropsOrEmpty) {
                if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                    patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                }
            }
        }
    }
    var nextChildren = nextVNode.children;
    var nextClassName = nextVNode.className;
    // inlined patchProps  -- ends --
    if (lastVNode.className !== nextClassName) {
        if (isNullOrUndef(nextClassName)) {
            dom.removeAttribute('class');
        }
        else if (isSVG) {
            dom.setAttribute('class', nextClassName);
        }
        else {
            dom.className = nextClassName;
        }
    }
    if (nextFlags & 4096 /* ContentEditable */) {
        patchContentEditableChildren(dom, nextChildren);
    }
    else {
        patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, dom, context, isSVG && nextVNode.type !== 'foreignObject', null, lastVNode, lifecycle);
    }
    if (isFormElement) {
        processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
    }
    var nextRef = nextVNode.ref;
    var lastRef = lastVNode.ref;
    if (lastRef !== nextRef) {
        unmountRef(lastRef);
        mountRef(nextRef, dom, lifecycle);
    }
}
function replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle) {
    unmount(lastChildren);
    mountArrayChildren(nextChildren, parentDOM, context, isSVG, findDOMfromVNode(lastChildren, true), lifecycle);
    removeVNodeDOM(lastChildren, parentDOM);
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, parentVNode, lifecycle) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                case 16 /* HasTextChildren */:
                    unmount(lastChildren);
                    setTextContent(parentDOM, nextChildren);
                    break;
                default:
                    replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                case 16 /* HasTextChildren */:
                    setTextContent(parentDOM, nextChildren);
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
            }
            break;
        case 16 /* HasTextChildren */:
            switch (nextChildFlags) {
                case 16 /* HasTextChildren */:
                    patchSingleTextChild(lastChildren, nextChildren, parentDOM);
                    break;
                case 2 /* HasVNodeChildren */:
                    clearDOM(parentDOM);
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    clearDOM(parentDOM);
                    break;
                default:
                    clearDOM(parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
            }
            break;
        default:
            switch (nextChildFlags) {
                case 16 /* HasTextChildren */:
                    unmountAllChildren(lastChildren);
                    setTextContent(parentDOM, nextChildren);
                    break;
                case 2 /* HasVNodeChildren */:
                    removeAllChildren(parentDOM, parentVNode, lastChildren);
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    removeAllChildren(parentDOM, parentVNode, lastChildren);
                    break;
                default:
                    var lastLength = lastChildren.length | 0;
                    var nextLength = nextChildren.length | 0;
                    // Fast path's for both algorithms
                    if (lastLength === 0) {
                        if (nextLength > 0) {
                            mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        }
                    }
                    else if (nextLength === 0) {
                        removeAllChildren(parentDOM, parentVNode, lastChildren);
                    }
                    else if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                        patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, parentVNode, lifecycle);
                    }
                    else {
                        patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, lifecycle);
                    }
                    break;
            }
            break;
    }
}
function createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle) {
    lifecycle.push(function () {
        instance.componentDidUpdate(lastProps, lastState, snapshot);
    });
}
function updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, force, nextNode, lifecycle) {
    var lastState = instance.state;
    var lastProps = instance.props;
    var usesNewAPI = Boolean(instance.$N);
    var hasSCU = isFunction(instance.shouldComponentUpdate);
    if (usesNewAPI) {
        nextState = createDerivedState(instance, nextProps, nextState !== lastState ? combineFrom(lastState, nextState) : nextState);
    }
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (!usesNewAPI && isFunction(instance.componentWillUpdate)) {
            instance.componentWillUpdate(nextProps, nextState, context);
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        var snapshot = null;
        var nextInput = renderNewInput(instance, nextProps, context);
        if (usesNewAPI && isFunction(instance.getSnapshotBeforeUpdate)) {
            snapshot = instance.getSnapshotBeforeUpdate(lastProps, lastState);
        }
        patch(instance.$LI, nextInput, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
        // Dont update Last input, until patch has been succesfully executed
        instance.$LI = nextInput;
        if (isFunction(instance.componentDidUpdate)) {
            createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle);
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
}
function patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var instance = (nextVNode.children = lastVNode.children);
    // If Component has crashed, ignore it to stay functional
    if (isNull(instance)) {
        return;
    }
    instance.$L = lifecycle;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var nextRef = nextVNode.ref;
    var lastRef = lastVNode.ref;
    var nextState = instance.state;
    if (!instance.$N) {
        if (isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing.
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (!isNull(instance.$PS)) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PS = null;
        }
    }
    updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, false, nextNode, lifecycle);
    if (lastRef !== nextRef) {
        unmountRef(lastRef);
        mountRef(nextRef, instance, lifecycle);
    }
}
function patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var shouldUpdate = true;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var nextRef = nextVNode.ref;
    var lastProps = lastVNode.props;
    var nextHooksDefined = !isNullOrUndef(nextRef);
    var lastInput = lastVNode.children;
    if (nextHooksDefined && isFunction(nextRef.onComponentShouldUpdate)) {
        shouldUpdate = nextRef.onComponentShouldUpdate(lastProps, nextProps);
    }
    if (shouldUpdate !== false) {
        if (nextHooksDefined && isFunction(nextRef.onComponentWillUpdate)) {
            nextRef.onComponentWillUpdate(lastProps, nextProps);
        }
        var type = nextVNode.type;
        var nextInput = normalizeRoot(nextVNode.flags & 32768 /* ForwardRef */ ? type.render(nextProps, nextRef, context) : type(nextProps, context));
        patch(lastInput, nextInput, parentDOM, context, isSVG, nextNode, lifecycle);
        nextVNode.children = nextInput;
        if (nextHooksDefined && isFunction(nextRef.onComponentDidUpdate)) {
            nextRef.onComponentDidUpdate(lastProps, nextProps);
        }
    }
    else {
        nextVNode.children = lastInput;
    }
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = (nextVNode.dom = lastVNode.dom);
    if (nextText !== lastVNode.children) {
        dom.nodeValue = nextText;
    }
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength, nextNode, lifecycle) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    var nextChild;
    var lastChild;
    for (; i < commonLength; ++i) {
        nextChild = nextChildren[i];
        lastChild = lastChildren[i];
        if (nextChild.flags & 16384 /* InUse */) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChild, nextChild, dom, context, isSVG, nextNode, lifecycle);
        lastChildren[i] = nextChild;
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; ++i) {
            nextChild = nextChildren[i];
            if (nextChild.flags & 16384 /* InUse */) {
                nextChild = nextChildren[i] = directClone(nextChild);
            }
            mount(nextChild, dom, context, isSVG, nextNode, lifecycle);
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; ++i) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength, outerEdge, parentVNode, lifecycle) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var j = 0;
    var aNode = a[j];
    var bNode = b[j];
    var nextPos;
    var nextNode;
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aNode.key === bNode.key) {
            if (bNode.flags & 16384 /* InUse */) {
                b[j] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            a[j] = bNode;
            ++j;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[j];
            bNode = b[j];
        }
        aNode = a[aEnd];
        bNode = b[bEnd];
        // Sync nodes with the same key at the end.
        while (aNode.key === bNode.key) {
            if (bNode.flags & 16384 /* InUse */) {
                b[bEnd] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            a[aEnd] = bNode;
            aEnd--;
            bEnd--;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[aEnd];
            bNode = b[bEnd];
        }
    }
    if (j > aEnd) {
        if (j <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge;
            while (j <= bEnd) {
                bNode = b[j];
                if (bNode.flags & 16384 /* InUse */) {
                    b[j] = bNode = directClone(bNode);
                }
                ++j;
                mount(bNode, dom, context, isSVG, nextNode, lifecycle);
            }
        }
    }
    else if (j > bEnd) {
        while (j <= aEnd) {
            remove(a[j++], dom);
        }
    }
    else {
        patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle);
    }
}
function patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle) {
    var aNode;
    var bNode;
    var nextPos;
    var i = 0;
    var aStart = j;
    var bStart = j;
    var aLeft = aEnd - j + 1;
    var bLeft = bEnd - j + 1;
    var sources = new Int32Array(bLeft + 1);
    // Keep track if its possible to remove whole DOM using textContent = '';
    var canRemoveWholeContent = aLeft === aLength;
    var moved = false;
    var pos = 0;
    var patched = 0;
    // When sizes are small, just loop them through
    if (bLength < 4 || (aLeft | bLeft) < 32) {
        for (i = aStart; i <= aEnd; ++i) {
            aNode = a[i];
            if (patched < bLeft) {
                for (j = bStart; j <= bEnd; j++) {
                    bNode = b[j];
                    if (aNode.key === bNode.key) {
                        sources[j - bStart] = i + 1;
                        if (canRemoveWholeContent) {
                            canRemoveWholeContent = false;
                            while (aStart < i) {
                                remove(a[aStart++], dom);
                            }
                        }
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.flags & 16384 /* InUse */) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                        ++patched;
                        break;
                    }
                }
                if (!canRemoveWholeContent && j > bEnd) {
                    remove(aNode, dom);
                }
            }
            else if (!canRemoveWholeContent) {
                remove(aNode, dom);
            }
        }
    }
    else {
        var keyIndex = {};
        // Map keys by their index
        for (i = bStart; i <= bEnd; ++i) {
            keyIndex[b[i].key] = i;
        }
        // Try to patch same keys
        for (i = aStart; i <= aEnd; ++i) {
            aNode = a[i];
            if (patched < bLeft) {
                j = keyIndex[aNode.key];
                if (j !== void 0) {
                    if (canRemoveWholeContent) {
                        canRemoveWholeContent = false;
                        while (i > aStart) {
                            remove(a[aStart++], dom);
                        }
                    }
                    sources[j - bStart] = i + 1;
                    if (pos > j) {
                        moved = true;
                    }
                    else {
                        pos = j;
                    }
                    bNode = b[j];
                    if (bNode.flags & 16384 /* InUse */) {
                        b[j] = bNode = directClone(bNode);
                    }
                    patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                    ++patched;
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
            else if (!canRemoveWholeContent) {
                remove(aNode, dom);
            }
        }
    }
    // fast-path: if nothing patched remove all old and add all new
    if (canRemoveWholeContent) {
        removeAllChildren(dom, parentVNode, a);
        mountArrayChildren(b, dom, context, isSVG, outerEdge, lifecycle);
    }
    else if (moved) {
        var seq = lis_algorithm(sources);
        j = seq.length - 1;
        for (i = bLeft - 1; i >= 0; i--) {
            if (sources[i] === 0) {
                pos = i + bStart;
                bNode = b[pos];
                if (bNode.flags & 16384 /* InUse */) {
                    b[pos] = bNode = directClone(bNode);
                }
                nextPos = pos + 1;
                mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
            }
            else if (j < 0 || i !== seq[j]) {
                pos = i + bStart;
                bNode = b[pos];
                nextPos = pos + 1;
                moveVNodeDOM(bNode, dom, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge);
            }
            else {
                j--;
            }
        }
    }
    else if (patched !== bLeft) {
        // when patched count doesn't match b length we need to insert those new ones
        // loop backwards so we can use insertBefore
        for (i = bLeft - 1; i >= 0; i--) {
            if (sources[i] === 0) {
                pos = i + bStart;
                bNode = b[pos];
                if (bNode.flags & 16384 /* InUse */) {
                    b[pos] = bNode = directClone(bNode);
                }
                nextPos = pos + 1;
                mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
            }
        }
    }
}
var result;
var p;
var maxLen = 0;
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var arrI = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var u = 0;
    var v = 0;
    var c = 0;
    var len = arr.length;
    if (len > maxLen) {
        maxLen = len;
        result = new Int32Array(len);
        p = new Int32Array(len);
    }
    for (; i < len; ++i) {
        arrI = arr[i];
        if (arrI !== 0) {
            j = result[k];
            if (arr[j] < arrI) {
                p[i] = j;
                result[++k] = i;
                continue;
            }
            u = 0;
            v = k;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = k + 1;
    var seq = new Int32Array(u);
    v = result[u - 1];
    while (u-- > 0) {
        seq[u] = v;
        v = p[v];
        result[u] = 0;
    }
    return seq;
}

var hasDocumentAvailable = typeof document !== 'undefined';
if (hasDocumentAvailable) {
    /*
     * Defining $EV and $V properties on Node.prototype
     * fixes v8 "wrong map" de-optimization
     */
    if (window.Node) {
        Node.prototype.$EV = null;
        Node.prototype.$V = null;
    }
}
function __render(input, parentDOM, callback, context) {
    var lifecycle = [];
    var rootInput = parentDOM.$V;
    renderCheck.v = true;
    if (isNullOrUndef(rootInput)) {
        if (!isNullOrUndef(input)) {
            if (input.flags & 16384 /* InUse */) {
                input = directClone(input);
            }
            mount(input, parentDOM, context, false, null, lifecycle);
            parentDOM.$V = input;
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDOM);
            parentDOM.$V = null;
        }
        else {
            if (input.flags & 16384 /* InUse */) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDOM, context, false, null, lifecycle);
            rootInput = parentDOM.$V = input;
        }
    }
    if (lifecycle.length > 0) {
        callAll(lifecycle);
    }
    renderCheck.v = false;
    if (isFunction(callback)) {
        callback();
    }
    if (isFunction(options.renderComplete)) {
        options.renderComplete(rootInput, parentDOM);
    }
}
function render(input, parentDOM, callback, context) {
    if ( callback === void 0 ) callback = null;
    if ( context === void 0 ) context = EMPTY_OBJ;

    __render(input, parentDOM, callback, context);
}
function createRenderer(parentDOM) {
    return function renderer(lastInput, nextInput, callback, context) {
        if (!parentDOM) {
            parentDOM = lastInput;
        }
        render(nextInput, parentDOM, callback, context);
    };
}

var QUEUE = [];
var nextTick = typeof Promise !== 'undefined'
    ? Promise.resolve().then.bind(Promise.resolve())
    : function (a) {
        window.setTimeout(a, 0);
    };
var microTaskPending = false;
function queueStateChanges(component, newState, callback, force) {
    var pending = component.$PS;
    if (isFunction(newState)) {
        newState = newState(pending ? combineFrom(component.state, pending) : component.state, component.props, component.context);
    }
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$BR) {
        if (!renderCheck.v) {
            if (QUEUE.length === 0) {
                applyState(component, force, callback);
                return;
            }
        }
        if (QUEUE.indexOf(component) === -1) {
            QUEUE.push(component);
        }
        if (!microTaskPending) {
            microTaskPending = true;
            nextTick(rerender);
        }
        if (isFunction(callback)) {
            var QU = component.$QU;
            if (!QU) {
                QU = component.$QU = [];
            }
            QU.push(callback);
        }
    }
    else if (isFunction(callback)) {
        component.$L.push(callback.bind(component));
    }
}
function callSetStateCallbacks(component) {
    var queue = component.$QU;
    for (var i = 0, len = queue.length; i < len; ++i) {
        queue[i].call(component);
    }
    component.$QU = null;
}
function rerender() {
    var component;
    microTaskPending = false;
    while ((component = QUEUE.pop())) {
        var queue = component.$QU;
        applyState(component, false, queue ? callSetStateCallbacks.bind(null, component) : null);
    }
}
function applyState(component, force, callback) {
    if (component.$UN) {
        return;
    }
    if (force || !component.$BR) {
        var pendingState = component.$PS;
        component.$PS = null;
        var lifecycle = [];
        renderCheck.v = true;
        updateClassComponent(component, combineFrom(component.state, pendingState), component.props, findDOMfromVNode(component.$LI, true).parentNode, component.context, component.$SVG, force, null, lifecycle);
        if (lifecycle.length > 0) {
            callAll(lifecycle);
        }
        renderCheck.v = false;
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
    if (isFunction(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    // Public
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$QU = null; // QUEUE
    this.$N = false; // Uses new lifecycle API Flag
    this.$L = null; // Current lifecycle of this component
    this.$SVG = false; // Flag to keep track if component is inside SVG tree
    this.props = props || EMPTY_OBJ;
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    // Do not allow double render during force update
    queueStateChanges(this, {}, callback, true);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback, false);
    }
};
Component.prototype.render = function render (_nextProps, _nextState, _nextContext) {
    return null;
};

var version = "7.3.3";



// CONCATENATED MODULE: ./node_modules/inferno/index.esm.js
/* concated harmony reexport Component */__webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* concated harmony reexport EMPTY_OBJ */__webpack_require__.d(__webpack_exports__, "EMPTY_OBJ", function() { return EMPTY_OBJ; });
/* concated harmony reexport Fragment */__webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* concated harmony reexport _CI */__webpack_require__.d(__webpack_exports__, "_CI", function() { return createClassComponentInstance; });
/* concated harmony reexport _HI */__webpack_require__.d(__webpack_exports__, "_HI", function() { return normalizeRoot; });
/* concated harmony reexport _M */__webpack_require__.d(__webpack_exports__, "_M", function() { return mount; });
/* concated harmony reexport _MCCC */__webpack_require__.d(__webpack_exports__, "_MCCC", function() { return mountClassComponentCallbacks; });
/* concated harmony reexport _ME */__webpack_require__.d(__webpack_exports__, "_ME", function() { return mountElement; });
/* concated harmony reexport _MFCC */__webpack_require__.d(__webpack_exports__, "_MFCC", function() { return mountFunctionalComponentCallbacks; });
/* concated harmony reexport _MP */__webpack_require__.d(__webpack_exports__, "_MP", function() { return mountProps; });
/* concated harmony reexport _MR */__webpack_require__.d(__webpack_exports__, "_MR", function() { return mountRef; });
/* concated harmony reexport __render */__webpack_require__.d(__webpack_exports__, "__render", function() { return __render; });
/* concated harmony reexport createComponentVNode */__webpack_require__.d(__webpack_exports__, "createComponentVNode", function() { return createComponentVNode; });
/* concated harmony reexport createFragment */__webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* concated harmony reexport createPortal */__webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* concated harmony reexport createRef */__webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* concated harmony reexport createRenderer */__webpack_require__.d(__webpack_exports__, "createRenderer", function() { return createRenderer; });
/* concated harmony reexport createTextVNode */__webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return createTextVNode; });
/* concated harmony reexport createVNode */__webpack_require__.d(__webpack_exports__, "createVNode", function() { return createVNode; });
/* concated harmony reexport directClone */__webpack_require__.d(__webpack_exports__, "directClone", function() { return directClone; });
/* concated harmony reexport findDOMfromVNode */__webpack_require__.d(__webpack_exports__, "findDOMfromVNode", function() { return findDOMfromVNode; });
/* concated harmony reexport forwardRef */__webpack_require__.d(__webpack_exports__, "forwardRef", function() { return forwardRef; });
/* concated harmony reexport getFlagsForElementVnode */__webpack_require__.d(__webpack_exports__, "getFlagsForElementVnode", function() { return getFlagsForElementVnode; });
/* concated harmony reexport linkEvent */__webpack_require__.d(__webpack_exports__, "linkEvent", function() { return linkEvent; });
/* concated harmony reexport normalizeProps */__webpack_require__.d(__webpack_exports__, "normalizeProps", function() { return normalizeProps; });
/* concated harmony reexport options */__webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* concated harmony reexport rerender */__webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* concated harmony reexport version */__webpack_require__.d(__webpack_exports__, "version", function() { return version; });


if (false) {}


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = __webpack_require__(12);

var Writable = __webpack_require__(17);

__webpack_require__(6)(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(65)
var ieee754 = __webpack_require__(66)
var isArray = __webpack_require__(67)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).


var ERR_STREAM_PREMATURE_CLOSE = __webpack_require__(3).codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Format: a Tree can be either Nil, Tip or Oct. Nil holds
// nothing. TIP holds a value. Oct holds 8 Trees. The memory
// is organized in blocks if 8 uint32, plus a root pointer.
// A pointer is represented as an uint32, where the first
// two bits represent the constructor it points to, and the
// last 30 bits represent its data. For a `Tip`, it is the
// value. For an `oct`, it is an index. The tree has an
// exact depth of 10, allowing 1024x1024x1024 values to be
// stored.

const min = Math.min;
const max = Math.max;
const flr = Math.floor;
const p32 = 2 ** 32;
const q32 = 1 / p32;
//const eps = 1 / 65536;
const eps = 0.00001526;

const CTR = 0xC0000000;
const VAL = 0x3FFFFFFF;

const NIL = 0x00000000;
const TIP = 0x40000000;
const OCT = 0x80000000;

function empty() {
  return [NIL, NIL, NIL, NIL, NIL, NIL, NIL, NIL];
};

function insert(px, py, pz, col, oct) {
  px = (px + 512) >>> 0;
  py = (py + 512) >>> 0;
  pz = (pz + 512) >>> 0;
  var idx = 0;
  for (var bit = 9; bit >= 0; bit = bit - 1) {
    var slt
      = (((px >>> bit) & 1) << 2)
      | (((py >>> bit) & 1) << 1)
      | (((pz >>> bit) & 1) << 0);
    if (bit === 0) {
      oct[idx+slt] = TIP | col;
    } else {
      var nod = oct[idx+slt];
      var ctr = (nod&CTR)>>>0;
      var val = (nod&VAL)>>>0;
      if (ctr === NIL) {
        oct[idx+slt] = OCT | oct.length;
        idx = oct.length;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
      } else {
        idx = val;
      }
    }
  }
};

const NOP = 0x00000000;
const GOT = 0x40000000;

// Lookup returns either GOT(col) or NOP(lvl). GOT contains
// the found color. NOP contains the how many levels above
// the contained color it stopped.
function lookup(px, py, pz, oct) {
  px = (px + 512) >>> 0;
  py = (py + 512) >>> 0;
  pz = (pz + 512) >>> 0;
  var idx = 0;
  for (var bit = 9; bit >= 0; bit = bit - 1) {
    var slt
      = (((px >>> bit) & 1) << 2)
      | (((py >>> bit) & 1) << 1)
      | (((pz >>> bit) & 1) << 0);
    if (bit === 0) {
      // No need to deconstruct because NIL/TIP have the
      // same constructor labels as NOP/GOT.
      return oct[idx+slt];
    } else {
      var nod = oct[idx+slt];
      var ctr = (nod&CTR)>>>0;
      if (ctr !== NIL) {
        idx = (nod&VAL)>>>0;
      } else {
        return NOP | bit;
      }
    }
  };
};

// Converts an octree to a string
function show(oct, ptr = OCT, lvl = 0) {
  var ctr = (ptr & 0xC0000000) >>> 0;
  var val = (ptr & 0x3FFFFFFF) >>> 0;
  var str = "";
  for (var j = 0; j < lvl; ++j) {
    str += j === lvl-1 ? "+" : "-";
  }
  switch (ctr) {
    case NIL:
      return str + "\n";
    case TIP:
      //for (var j = 0; j < lvl; ++j) {
        //str += "-";
      //}
      return str + "0x"+val.toString(16) + "\n";
    case OCT:
      str += "oct\n";
      for (var i = 0; i < 8; ++i) {
        str += show(oct, oct[val+i], lvl+1);
      }
      return str;
  }
};


// This isn't used, but is here for documentation purposes.
// In order for the intersection function below to work in
// cases such as `intersect(-100,5,0, 1,0,0, 0,0,0,
// 10,10,10)`, i.e., when you're firing the ray towards the
// box in the plane of one of its faces, we must have
// caution on how we perform the division to get each `t`.
// If we divide `a` by 0, then we must return `-inf` if
// `a<0`, `+inf` if `a>0`, and `k` if `a==0`. In JavaScript,
// this can be performed as `a / b || k`, so we do that
// instead, since it is faster, but on WebGL, we need to use
// this division algorithm.
function div(a, b, k) {
  if (b === 0) {
    return a > 0.0 ? Infinity : a < 0.0 ? -Infinity : k;
  } else {
    return a / b;
  }
}

// Moves a ray through a direction and returns the distance
// traveled until it hits the surface of the box. The ray
// can start inside. If it never hits, returns infinite.
function intersect(
  ray_pos_x, ray_pos_y, ray_pos_z,
  ray_dir_x, ray_dir_y, ray_dir_z,
  box_pos_x, box_pos_y, box_pos_z,
  box_siz_x, box_siz_y, box_siz_z) {
  var box_min_x = box_pos_x - box_siz_x * 0.5;
  var box_min_y = box_pos_y - box_siz_y * 0.5;
  var box_min_z = box_pos_z - box_siz_z * 0.5;
  var box_max_x = box_pos_x + box_siz_x * 0.5;
  var box_max_y = box_pos_y + box_siz_y * 0.5;
  var box_max_z = box_pos_z + box_siz_z * 0.5;
  var t1 = (box_min_x - ray_pos_x) / ray_dir_x || -Infinity;
  var t2 = (box_max_x - ray_pos_x) / ray_dir_x || Infinity;
  var t3 = (box_min_y - ray_pos_y) / ray_dir_y || -Infinity;
  var t4 = (box_max_y - ray_pos_y) / ray_dir_y || Infinity;
  var t5 = (box_min_z - ray_pos_z) / ray_dir_z || -Infinity;
  var t6 = (box_max_z - ray_pos_z) / ray_dir_z || Infinity;
  var t7 = max(max(min(t1, t2), min(t3, t4)), min(t5, t6));
  var t8 = min(min(max(t1, t2), max(t3, t4)), max(t5, t6));
  var t9 = (t8<0.0 || t7>t8) ? Infinity : t7<0.0 ? t8 : t7;
  return t9;
};

const HIT = 0;
const PAS = 1;
const MIS = 2;

// Marches through an octree until it hits a value. Returns
// `HIT(pos,val)` if it hits, with `pos` being the value
// position (not the ray position) and `val` being its
// value. If it never hits the octree, returns `MIS`. If it
// hits but passes through, returns `PAS`.
function march(rx,ry,rz,dx,dy,dz,oct) {

  // Enters the octree
  if ( rx >=  512 || ry >=  512 || rz >=  512
    || rx <= -512 || ry <= -512 || rz <= -512) {
    var ht = intersect(rx,ry,rz,dx,dy,dz,0,0,0,1024,1024,1024);
    if (ht !== Infinity) {
      rx = rx + dx*ht + dx*eps;
      ry = ry + dy*ht + dy*eps;
      rz = rz + dz*ht + dz*eps;
      //console.log("enter",rx,ry,rz);
    } else {
      return {ctr: MIS};
    }
  }

  // Marches through it
  while (
    !( rx >=  512 || ry >=  512 || rz >=  512
    || rx <= -512 || ry <= -512 || rz <= -512)) {
    rx += dx*eps;
    ry += dy*eps;
    rz += dz*eps;
    var got = lookup(rx, ry, rz, oct);
    if (((got&CTR)>>>0) === NOP) {
      // If the ray isn't colliding with a value, thus
      // computes the bounds of the box around the ray on
      // the octree, using the "number of levels above the
      // color" returned by the lookup function.
      var lv = 10 - (got&VAL);
      //if (lv !== 10) {
        //console.log("???", lv);
      //}
      var bl = 1024 >>> lv; // box size
      var bq = 1/bl;
      var bx = ((((rx+512)*bq)>>>0)+0.5)*bl-512;
      var by = ((((ry+512)*bq)>>>0)+0.5)*bl-512;
      var bz = ((((rz+512)*bq)>>>0)+0.5)*bl-512;
      var ht = intersect(rx,ry,rz,dx,dy,dz,bx,by,bz,bl,bl,bl);
      if (ht !== Infinity) {
        rx = rx + dx*ht;
        ry = ry + dy*ht;
        rz = rz + dz*ht;
      } else {
        //console.log(bx,by,bz,"|",bl);
        //console.log("aff", rx-dx*eps,ry-dy*eps,rz-dz*eps, got, (got&VAL)>>>0);
        break;
        //return {ctr: MIS};
      }
    } else {
      //console.log("hit",rx,ry,rz,lookup(rx,ry,rz,oct));
      return {
        //pos: {
          //x: rx - dx*eps,
          //y: ry - dy*eps,
          //z: rz - dz*eps
        //},
        ctr: HIT,
        pos: {
          x: Math.floor(rx),
          y: Math.floor(ry),
          z: Math.floor(rz),
        },
        val: (got&VAL)>>>0
      };
    }
  }

  // Passed through
  return {
    ctr: PAS, 
    pos: {
      x: rx - dx*eps,
      y: ry - dy*eps,
      z: rz - dz*eps,
    }
  };
};

module.exports = {
  CTR,
  VAL,
  NIL,
  TIP,
  OCT,
  empty,
  insert,
  NOP,
  GOT,
  lookup,
  march,
  HIT,
  MIS,
  PAS,
  show,
};


var oct = module.exports;
var tree = oct.empty();
for (var k = -8; k < 8; ++k) {
  for (var j = -8; j < 8; ++j) {
    for (var i = -8; i < 8; ++i) {
      oct.insert(i,j,k,0xFF,tree);
    }
  }
}

//console.log(oct.march(-1000,0,0,1,0,0,tree));
//console.log(oct.march(1000,0,0,-1,0,0,tree));

//var t = empty();
//var hit = march(100,-512,0, -1,0,0, t);
//console.log(hit);
//for (var z = -16; z < 16; ++z) {
  //for (var y = -16; y < 16; ++y) {
    //for (var x = -16; x < 16; ++x) {
      //insert(x,y,z,1,t);
    //}
  //}
//}
//var s = 0;
//for (var i = 0; i < 5000000; ++i) {
  //s += march(60,0,0, -1,0,0, t).val;
//};
//console.log(s);
//console.log(march(-60,0,0, -1,0,0, t));

//console.log(
  //intersect(
    //511.99998474121094,0,0,
    //-1,0,0,
    //384,128,128,
    //256,256,256));
    
//console.log(
  //intersect(
    //9.9999,0,0,
    //-1,0,0,
    //0,0,0,
    //20,20,20));

//console.log(intersect(
  //0,0,0,
  //1,0,0,
  //0,0,0,
  //30,64,64));


//var t = empty();
//var L = 10000000;
//var T = Date.now();
//for (var i = 0; i < L; ++i) {
  //var x = i % 1024 - 512;
  //var y = Math.floor(i / 1024) % 1024 - 512;
  //var z = Math.floor(i / 1024 / 1024) - 512;
  //insert(x,y,z,1,t);
//}
//console.log((Date.now() - T)+"ms"); T = Date.now();
//var s = 0;
//for (var i = 0; i < L; ++i) {
  //var x = i % 1024 - 512;
  //var y = Math.floor(i / 1024) % 1024 - 512;
  //var z = Math.floor(i / 1024 / 1024) - 512;
  //s += lookup(x,y,z,t)&VAL;
//}
//console.log(s);
//console.log((Date.now() - T)+"ms"); T = Date.now();

//insert(0, 0, 0, 0x1, t);
//insert(1, 0, 0, 0x2, t);
//insert(0, 1, 0, 0x3, t);
//insert(1, 1, 0, 0x4, t);
//insert(0, 0, 1, 0x5, t);
//insert(1, 0, 1, 0x6, t);
//insert(0, 1, 1, 0x7, t);
//insert(1, 1, 1, 0x8, t);
//insert(1023, 1023, 1023, 0x9, t);
//console.log(show(t));
//console.log(lookup(2,0,0,t));


/***/ }),
/* 9 */
/***/ (function(module, exports) {

const now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

module.exports = {now};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(5)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = __webpack_require__(13).EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __webpack_require__(14);
/*</replacement>*/


var Buffer = __webpack_require__(5).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = __webpack_require__(74);

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __webpack_require__(75);

var destroyImpl = __webpack_require__(15);

var _require = __webpack_require__(16),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(3).codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

__webpack_require__(6)(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(4);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(18).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(4);
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(18).StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = __webpack_require__(78);
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = __webpack_require__(79);
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13).EventEmitter;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) { // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ERR_INVALID_OPT_VALUE = __webpack_require__(3).codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: __webpack_require__(77)
};
/*</replacement>*/

/*<replacement>*/

var Stream = __webpack_require__(14);
/*</replacement>*/


var Buffer = __webpack_require__(5).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __webpack_require__(15);

var _require = __webpack_require__(16),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(3).codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

__webpack_require__(6)(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(4);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(4); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(11).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


module.exports = Transform;

var _require$codes = __webpack_require__(3).codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = __webpack_require__(4);

__webpack_require__(6)(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// HTML Rendering
const {Component, render} = __webpack_require__(1);
const h = __webpack_require__(21).h;
const oct = __webpack_require__(8);
const canvox = __webpack_require__(22);
const TA = __webpack_require__(23);
const extra = __webpack_require__(9);

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0};
  }
  componentDidMount() {
  }
  render() {
    return h("div", {
      style: {
        "position": "absolute",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
        "width": "100%",
        "margin": "2px",
        "font-size": "16px",
        "font-family": "monospace",
        "font-weight": "bold",
      },
      onClick: () => {
        this.setState({count: this.state.count + 1});
      }
    }, [
      h("span", {}, "Taelin Arena"),
    ])
  }
};

window.onload = () => {
  // Renders site using Inferno
  render(h(Main), document.getElementById("main"));

  // Creates canvas and inserts on page
  var canvas = canvox();
  document.body.appendChild(canvas);

  // Keys that are pressed
  var key = {};
  var refresh_game_pad = () => {
    var key_d = key.d||0;
    var key_a = key.a||0;
    var key_w = key.w||0;
    var key_s = key.s||0;
    var event = t => {
      var id = 0;
      var dir = t => {
        var x = (key_d||0) - (key_a||0);
        var y = (key_w||0) - (key_s||0);
        var z = 0;
        return t(x)(y)(0);
      }
      return t(id)(dir);
    };
    game = TA.input_game(event)(game);
  };
  document.body.onkeyup = (e) => {
    key[e.key] = 0;
    refresh_game_pad();
  };
  document.body.onkeypress = (e) => {
    key[e.key] = 1;
    refresh_game_pad();
  };

  // FPS metering
  var last_fps_print = extra.now();
  var fps_count = 0;

  // Initial state of the game
  var game = TA.demo_game;

  // Main loop of the game
  setInterval(function main_loop() {
    // Updates the FPS counter
    ++fps_count;
    if (extra.now() > last_fps_print + 1) {
      document.title = "FPS " + fps_count;
      fps_count = 0;
      last_fps_print = extra.now();
    };

    // Renders game to canvas
    TA.render_game(game, canvas);

    // Updates game state
    game = TA.tick_game(game);

  }, 1000 / 24);
};

const request = __webpack_require__(50);
const post = (func, body) => {
  return request("/"+func, {method:"POST",body,json:true});
};
const name = "x" + Math.floor(Math.random()*65536);
console.log("I'm " + name);
const SimplePeer = __webpack_require__(64);
const peer = new SimplePeer({initiator:false,trickle:false});
post("offer",{name}).then(data => peer.signal(data));
peer.on('error', err => console.log('error', err))
peer.on('signal', data => post("answer", {name,data}));
peer.on('connect', () => {});
peer.on('data', data => console.log(""+data));
window.say = msg => peer.send(msg);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return o === void 0;
}

var classIdSplit = /([.#]?[a-zA-Z0-9_:-]+)/;
var notClassId = /^\.|#/;
function parseTag(tag, props) {
    if (!tag) {
        return 'div';
    }
    if (tag === inferno__WEBPACK_IMPORTED_MODULE_0__["Fragment"]) {
        return tag;
    }
    var noId = props && isUndefined(props.id);
    var tagParts = tag.split(classIdSplit);
    var tagName = null;
    if (notClassId.test(tagParts[1])) {
        tagName = 'div';
    }
    var classes;
    for (var i = 0, len = tagParts.length; i < len; ++i) {
        var part = tagParts[i];
        if (!part) {
            continue;
        }
        var type = part.charAt(0);
        if (!tagName) {
            tagName = part;
        }
        else if (type === '.') {
            if (classes === void 0) {
                classes = [];
            }
            classes.push(part.substring(1, part.length));
        }
        else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }
    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }
        props.className = classes.join(' ');
    }
    return tagName || 'div';
}
function isChildren(x) {
    return isStringOrNumber(x) || (x && isArray(x));
}
/**
 * Creates virtual node
 * @param {string|VNode|Function} _tag Name for virtual node
 * @param {object=} _props Additional properties for virtual node
 * @param {string|number|VNode|Array<string|number|VNode>|null=} _children Optional children for virtual node
 * @returns {VNode} returns new virtual node
 */
function h(_tag, _props, _children) {
    // If a child array or text node are passed as the second argument, shift them
    if (!_children && isChildren(_props)) {
        _children = _props;
        _props = {};
    }
    var isElement = isString(_tag);
    _props = _props || {};
    var tag = isElement ? parseTag(_tag, _props) : _tag;
    var newProps = {};
    var key = null;
    var ref = null;
    var children = null;
    var className = null;
    for (var prop in _props) {
        if (isElement && (prop === 'className' || prop === 'class')) {
            className = _props[prop];
        }
        else if (prop === 'key') {
            key = _props[prop];
        }
        else if (prop === 'ref') {
            ref = _props[prop];
        }
        else if (prop === 'hooks') {
            ref = _props[prop];
        }
        else if (prop === 'children') {
            children = _props[prop];
        }
        else if (!isElement && prop.substr(0, 11) === 'onComponent') {
            if (!ref) {
                ref = {};
            }
            ref[prop] = _props[prop];
        }
        else {
            newProps[prop] = _props[prop];
        }
    }
    if (isElement) {
        var flags = Object(inferno__WEBPACK_IMPORTED_MODULE_0__["getFlagsForElementVnode"])(tag);
        if (flags & 8192 /* Fragment */) {
            return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createFragment"])(_children || children, 0 /* UnknownChildren */, key);
        }
        if (newProps.contenteditable !== void 0) {
            flags |= 4096 /* ContentEditable */;
        }
        return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(flags, tag, className, _children || children, 0 /* UnknownChildren */, newProps, key, ref);
    }
    if (children || _children) {
        newProps.children = children || _children;
    }
    return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createComponentVNode"])(2 /* ComponentUnknown */, tag, newProps, key, ref);
}




/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const oct = __webpack_require__(8);

function build_voxel_octree(voxels) {
  var tree = oct.empty();
  for (var i = 0; i < voxels.length / 2; ++i) {
    var pos = voxels[i*2+0];
    var col = voxels[i*2+1];
    var vx  = ((pos >>> 20) & 0x3FF) - 512;
    var vy  = ((pos >>> 10) & 0x3FF) - 512;
    var vz  = ((pos >>>  0) & 0x3FF) - 512;
    var vr  = (col >>> 24) & 0xFF;
    var vg  = (col >>> 16) & 0xFF;
    var vb  = (col >>>  8) & 0xFF;
    var c   = vr | (vg<<8) | (vb<<16);
    oct.insert(vx,vy,vz,c,tree);
  }
  return tree;
};

function setup_cam(cam) {
  var W = window.innerWidth;
  var H = window.innerHeight;
  //var W = 300;
  //var H = 300;
  var T = Date.now()/1000;
  if (!cam) {
    //var ang = Math.PI * 1/4 + Math.sin(T) * Math.PI * 0.2;
    var ang = Math.PI * 1/4;
    //45 graus +- 36 pi
    //45-36 a 45+36

    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    var front = {x:0, y:cos, z:-sin};
    var right = {x:1, y:0, z:0};
    var down = {x:0, y:-sin, z:-cos};
    var pos = {x:0,y:-2048*cos,z:2048*sin};
    var cam = {
      pos   : pos, // center pos
      right : right, // right direction
      down  : down, // down direction
      front : front, // front direction
      size  : {x:W*0.5, y:H*0.5}, // world size
      port  : {x:W, y:H}, // browser size
      res   : 1.0, // rays_per_pixel = res^2
    };
  } else {
    var cam = cam;
  }
  return cam;
};

module.exports = function canvox(opts = {}) {
  const mode = window.mode || opts.mode || "GPU";

  var canvas = document.createElement("canvas");
  //canvas.style.border = "1px solid gray";
  canvas.style["image-rendering"] = "pixelated";

  // CPU MODE
  if (mode === "CPU") {
    var context = canvas.getContext("2d");
    canvas.draw = ({voxels, cam}) => {
      // Camera and viewport
      var cam = setup_cam(opts.cam);

      // Canvas setup
      canvas.width = cam.size.x * cam.res;
      canvas.height = cam.size.y * cam.res;
      canvas.style.width = cam.port.x + "px";
      canvas.style.height = cam.port.y + "px";
      if (!canvas.image_data) {
        canvas.image_data = context.getImageData(0, 0, canvas.width, canvas.height);
        canvas.image_buf = new ArrayBuffer(canvas.image_data.data.length);
        canvas.image_u8 = new Uint8ClampedArray(canvas.image_buf);
        canvas.image_u32 = new Uint32Array(canvas.image_buf);
      }

      // Builds voxel octree
      var tree = build_voxel_octree(voxels);

      // For each pixel on the screen
      var dx = 2 / (cam.size.x * cam.res);
      var dy = 2 / (cam.size.y * cam.res);
      for (var scr_pos_y = -1; scr_pos_y <= 1; scr_pos_y += dy) {
        for (var scr_pos_x = -1; scr_pos_x < 1; scr_pos_x += dx) {

          // Computes ray position
          var ray_pos_x = cam.pos.x;
          var ray_pos_y = cam.pos.y;
          var ray_pos_z = cam.pos.z;
          ray_pos_x += cam.right.x*cam.size.x*scr_pos_x*0.5;
          ray_pos_y += cam.right.y*cam.size.x*scr_pos_x*0.5;
          ray_pos_z += cam.right.z*cam.size.x*scr_pos_x*0.5;
          ray_pos_x += cam.down.x *cam.size.y*scr_pos_y*0.5;
          ray_pos_y += cam.down.y *cam.size.y*scr_pos_y*0.5;
          ray_pos_z += cam.down.z *cam.size.y*scr_pos_y*0.5;

          // Computes ray direction
          var ray_dir_x = cam.front.x;
          var ray_dir_y = cam.front.y;
          var ray_dir_z = cam.front.z;

          // Performs the march
          var hit = oct.march(
            ray_pos_x, ray_pos_y, ray_pos_z,
            ray_dir_x, ray_dir_y, ray_dir_z,
            tree);

          // Renders to screen
          var j = Math.floor((scr_pos_y+1)/2*(cam.size.y*cam.res));
          var i = Math.floor((scr_pos_x+1)/2*(cam.size.x*cam.res));
          var n = j * Math.floor(cam.size.x*cam.res) + i;
          switch (hit.ctr) {
            case oct.HIT:
              var pos = hit.pos;
              var col = hit.val & oct.VAL;
              canvas.image_u32[n] = col | 0xFF000000;
              break;
            default:
              canvas.image_u32[n] = 0;
              break;
          }
        }
      }

      // Draws buffers to screen
      canvas.image_data.data.set(canvas.image_u8);
      context.putImageData(canvas.image_data, 0, 0);
    };
    return canvas;
  };

  // GPU MODE
  if (mode === "GPU") {
    var gl = canvas.getContext('webgl2');

    var vertices = [-1,1,0,-1,-1,0,1,-1,0,-1,1,0,1,1,0,1,-1,0,];
    var indices = [0,1,2,3,4,5];

    var vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var index_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    // Vertex shader source code
    var vert_code = `#version 300 es
      in vec3 coordinates;
      out vec3 scr_pos;
      void main(void) {
        scr_pos = coordinates;
        scr_pos.y = - scr_pos.y;
        gl_Position = vec4(coordinates, 1.0);
      }
    `;

    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vert_code);
    gl.compileShader(vertShader);

    var frag_code = `#version 300 es
      precision mediump float;
      precision mediump sampler2D;

      in vec3 scr_pos;
      out vec4 outColor;

      uniform vec3 cam_pos;
      uniform vec3 cam_right;
      uniform vec3 cam_down;
      uniform vec3 cam_front;
      uniform vec2 scr_siz;

      uniform sampler2D octree;

      const float inf = 65536.0;
      const float eps = 0.0009765625;

      const uint CTR = 0xC0000000u;
      const uint VAL = 0x3FFFFFFFu;
      const uint NIL = 0x00000000u;
      const uint TIP = 0x40000000u;
      const uint OCT = 0x80000000u;
      const uint NOP = 0x00000000u;
      const uint GOT = 0x40000000u;
      const uint HIT = 0u;
      const uint PAS = 1u;
      const uint MIS = 2u;

      float div(float a, float b, float k) {
        if (b == 0.0) {
          return a > 0.0 ? inf : a < 0.0 ? -inf : k;
        } else {
          return a / b;
        }
      }

      float intersect(vec3 ray_pos, vec3 ray_dir, vec3 box_pos, vec3 box_siz) {
        vec3 box_min = box_pos - box_siz * 0.5;
        vec3 box_max = box_pos + box_siz * 0.5;
        float t1 = div(box_min.x - ray_pos.x, ray_dir.x, -inf);
        float t2 = div(box_max.x - ray_pos.x, ray_dir.x, inf);
        float t3 = div(box_min.y - ray_pos.y, ray_dir.y, -inf);
        float t4 = div(box_max.y - ray_pos.y, ray_dir.y, inf);
        float t5 = div(box_min.z - ray_pos.z, ray_dir.z, -inf);
        float t6 = div(box_max.z - ray_pos.z, ray_dir.z, inf);
        float t7 = max(max(min(t1, t2), min(t3, t4)), min(t5, t6));
        float t8 = min(min(max(t1, t2), max(t3, t4)), max(t5, t6));
        float t9 = (t8 < 0.0 || t7 > t8) ? inf : t7 < 0.0 ? t8 : t7;
        return t9;
      }

      uint vec4_to_uint(vec4 v) {
        return 
          ( (uint(v.x*255.0) << 0u)
          | (uint(v.y*255.0) << 8u)
          | (uint(v.z*255.0) << 16u)
          | (uint(v.w*255.0) << 24u));
      }

      vec4 uint_to_vec4(uint u) {
        float x = float((u >> 0) & 0xFFu);
        float y = float((u >> 8) & 0xFFu);
        float z = float((u >> 16) & 0xFFu);
        float w = float((u >> 24) & 0xFFu);
        return vec4(x,y,z,w)/255.0;
      }

      uint get(sampler2D arr, uint idx) {
        float x = float(idx & 0x7FFu) / 2048.0;
        float y = float((idx >> 11) & 0x7FFu) / 2048.0;
        vec4 col = texture(arr, vec2(x,y));
        return vec4_to_uint(col);
      }

      uint lookup(sampler2D octree, vec3 pos) {
        uint px = uint(floor(pos.x) + 512.0);
        uint py = uint(floor(pos.y) + 512.0);
        uint pz = uint(floor(pos.z) + 512.0);
        uint idx = 0u;
        for (uint bit = 9u; bit >= 0u; bit = bit - 1u) {
          uint slt
            = (((px >> bit) & 1u) << 2u)
            | (((py >> bit) & 1u) << 1u)
            | (((pz >> bit) & 1u) << 0u);
          uint nod = get(octree, idx + slt);
          if (bit == 0u) {
            return nod;
          } else {
            uint ctr = nod & CTR;
            if (ctr != NIL) {
              idx = nod & VAL;
            } else {
              return NOP | bit;
            }
          }
        }
      }

      struct Hit {
        uint ctr;
        vec3 pos; 
        uint val;
      };

      Hit march(vec3 ray, vec3 dir, sampler2D octree) {
        Hit hit;
        // Enters the octree
        if ( ray.x >=  512.0 || ray.y >=  512.0 || ray.z >=  512.0
          || ray.x <= -512.0 || ray.y <= -512.0 || ray.z <= -512.0) {
          float ht = intersect(ray, dir, vec3(0.0), vec3(1024.0));
          if (ht != inf) {
            ray.x = ray.x + dir.x * ht + dir.x * eps;
            ray.y = ray.y + dir.y * ht + dir.y * eps;
            ray.z = ray.z + dir.z * ht + dir.z * eps;
          } else {
            hit.ctr = MIS;
            return hit;
          }
        }
        // Marches through it
        while (
          !( ray.x >=  512.0 || ray.y >=  512.0 || ray.z >=  512.0
          || ray.x <= -512.0 || ray.y <= -512.0 || ray.z <= -512.0)) {
          ray.x += dir.x * eps;
          ray.y += dir.y * eps;
          ray.z += dir.z * eps;
          uint got = lookup(octree, ray);
          if ((got&CTR) == NOP) {
            uint lv = 10u - (got & VAL);
            float bl = float(1024u >> lv);
            float bq = 1.0 / float(bl);
            float bx = (floor((ray.x+512.0)*bq)+0.5)*bl-512.0;
            float by = (floor((ray.y+512.0)*bq)+0.5)*bl-512.0;
            float bz = (floor((ray.z+512.0)*bq)+0.5)*bl-512.0;
            float ht = intersect(ray,dir,vec3(bx,by,bz),vec3(bl));
            if (ht != inf) {
              ray.x = ray.x + dir.x * ht;
              ray.y = ray.y + dir.y * ht;
              ray.z = ray.z + dir.z * ht;
            } else {
              break;
            }
          } else {
            hit.ctr = HIT;
            hit.pos = ray;
            hit.val = got & VAL;
            return hit;
          }
        }
        // Passed through
        hit.ctr = PAS;
        hit.pos = ray - dir * eps;
        return hit;
      }

      void main(void) {
        // Computes ray pos and dir
        vec3 ray_pos;
        vec3 ray_dir;
        ray_pos = cam_pos;
        ray_pos = ray_pos + cam_right*scr_siz.x*scr_pos.x*0.5;
        ray_pos = ray_pos + cam_down*scr_siz.y*scr_pos.y*0.5;
        ray_dir = cam_front;

        //ray_pos = vec3(0.0, -1000.0, 0.0);
        //ray_dir = vec3(0.0, 1.0, 0.0);

        // Marches towards octree
        Hit hit = march(ray_pos, ray_dir, octree);

        // If it hit a voxel, draw it
        if (hit.ctr == HIT) {
          vec4 col = uint_to_vec4(hit.val);
          outColor = vec4(vec3(col),1.0);
          //outColor = vec4(1.0,0.5,0.5,1.0);
        //} else if (hit.ctr == MIS) {
          //outColor = vec4(0.9,1.0,0.9,1.0);
        //} else if (hit.ctr == PAS) {
          //outColor = vec4(0.9,0.9,1.0,1.0);
        //}
        } else {
          outColor = vec4(0.0);
        }
      }
    `;

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, frag_code); 
    gl.compileShader(fragShader);

    var compiled = gl.getShaderParameter(vertShader, gl.COMPILE_STATUS);
    //console.log('Shader compiled successfully: ' + compiled);
    var compilationLog = gl.getShaderInfoLog(vertShader);
    //console.log('Shader compiler log: ' + compilationLog);
    var compiled = gl.getShaderParameter(fragShader, gl.COMPILE_STATUS);
    //console.log('Shader compiled successfully: ' + compiled);
    var compilationLog = gl.getShaderInfoLog(fragShader);
    //console.log('Shader compiler log: ' + compilationLog);

    var shader = gl.createProgram();
    gl.attachShader(shader, vertShader);
    gl.attachShader(shader, fragShader);
    gl.linkProgram(shader);
    gl.useProgram(shader);

    // ======= Input texture =======

    var texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 2048, 2048, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(gl.getUniformLocation(shader, "octree"), texture);

    // ======= Octree data buffer =======
    
    var octree_buffer = new Uint32Array(2048*2048);

    // ======= Associating shaders to buffer objects =======

    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

    // Get the attribute location
    var coord = gl.getAttribLocation(shader, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 
    gl.enableVertexAttribArray(coord);
      
    canvas.draw = function({voxels,cam}) {
      var cam = setup_cam(cam);

      // Canvas setup
      // TODO: why odd widths won't work?
      canvas.width = cam.size.x * cam.res;
      canvas.height = cam.size.y * cam.res;
      canvas.width -= canvas.width % 2;
      canvas.height -= canvas.height % 2;
      canvas.style.width = cam.port.x + "px";
      canvas.style.height = cam.port.y + "px";

      // Builds voxel octree
      var tree = build_voxel_octree(voxels);

      // Copies data to octree buffer
      for (var i = 0; i < tree.length; ++i) {
        octree_buffer[i] = tree[i] >>> 0;
      }

      // Uploads octree to GPU
      var buff = new Uint8Array(octree_buffer.buffer);
      var size = [2048, 2048];
      gl.texSubImage2D(
        gl.TEXTURE_2D, 0, 0,0, ...size,
        gl.RGBA, gl.UNSIGNED_BYTE, buff);

      // Uploads camera to GPU
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_pos"),
        [cam.pos.x, cam.pos.y, cam.pos.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_right"),
        [cam.right.x, cam.right.y, cam.right.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_down"),
        [cam.down.x, cam.down.y, cam.down.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_front"),
        [cam.front.x, cam.front.y, cam.front.z]);
      gl.uniform2fv(
        gl.getUniformLocation(shader,"scr_siz"),
        [cam.size.x, cam.size.y]);

      // Renders screen
      gl.viewport(0,0,canvas.width,canvas.height);
      gl.clearColor(0.5, 0.5, 0.5, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);
    };

    return canvas;
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const TA = __webpack_require__(24);
const extra = __webpack_require__(9);
const {models} = __webpack_require__(25);

function render_game(game, canvox) {
  // Gets the current time
  var T = extra.now();

  // Gets the main hero position
  var hero_pos = TA.get_position_by_id(0, game);

  // Creates list of voxels
  var voxels = [];

  // Renders each game object
  TA.map_game_objects(function(object) {
    // Gets the object fields
    var id = TA.get_object_id(object);
    var hp = TA.get_object_hp(object);
    var pos = TA.get_object_pos(object);
    var dir = TA.get_object_dir(object);
    var vel = TA.get_object_vel(object);
    var box = TA.get_object_box(object);
    var spr = TA.get_object_spr(object);
    var [dir_x,dir_y,dir_z] = dir(x=>y=>z=>([x,y,z]));
    var [pos_x,pos_y,pos_z] = pos(x=>y=>z=>([x,y,z]));

    // Computes the object facing angle
    var ang = Math.atan2(dir_y, dir_x);
    var ang = ang + Math.PI*0.5;

    // Gets the object model and current frame
    var anim_id = spr(anim_id => anim_id);
    var model = models[anim_id||0];
    var feet = model.pivot.z;
    var frames = model.frames.length;
    var frame = model.frames[Math.floor((T*10) % frames)];

    // Renders each voxel of the frame
    for (var i = 0; i < frame.length; ++i) {
      var [{x,y,z},col] = frame[i];
      var cx = pos_x;
      var cy = pos_y;
      var cz = pos_z;
      var px = cx + x;
      var py = cy + y;
      var pz = cz + z;
      var pl = Math.sqrt((px-cx)**2+(py-cy)**2);
      var pa = Math.atan2(py-cy,px-cx);
      var px = cx + pl * Math.cos(pa + ang) + 0.5;
      var py = cy + pl * Math.sin(pa + ang) + 0.5;
      var pz = cz + z;
      var pos = (px+512)<<20 | (py+512)<<10 | (pz+512);
      var col = col | 0x000000FF;
      voxels[voxels.length] = pos;
      voxels[voxels.length] = col;
    }

    // Renders hitbox (for debugging)
    let case_circbox = (rad) => {
      for (var j = -rad; j <= rad; ++j) {
        for (var i = -rad; i <= rad; ++i) {
          if (i*i+j*j < rad*rad) {
            var px = pos_x + i;
            var py = pos_y + j;
            var pz = -64;
            var pos = (px+512)<<20 | (py+512)<<10 | (pz+512);
            var col = 0xE0E0FFFF;
            voxels[voxels.length] = pos;
            voxels[voxels.length] = col;
          }
        }
      }
    };
    let case_polybox = (pts) => {
    };
    box(case_circbox)(case_polybox);
  })(game);

  canvox.draw({voxels});
};

module.exports = {
  ...TA,
  render_game,
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = (function(){
  var _TaelinArena$Hitbox = undefined;
  var _TaelinArena$circbox = (_0=>(_1=>(_2=>_1(_0))));
  var _TaelinArena$polybox = (_0=>(_1=>(_2=>_2(_0))));
  var _TaelinArena$ObjectId = undefined;
  var _TaelinArena$Sprite = undefined;
  var _TaelinArena$sprite = (_0=>(_1=>_1(_0)));
  var _TaelinArena$GameObject = undefined;
  var _TaelinArena$game_object = (_0=>(_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_8(_0)(_1)(_2)(_3)(_4)(_5)(_6)(_7))))))))));
  var _TaelinArena$mut_object_fields = (_0=>(_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_8((_9=>(_10=>(_11=>(_12=>(_13=>(_14=>(_15=>(_16=>_TaelinArena$game_object(_0(_9))(_1(_10))(_2(_11))(_3(_12))(_4(_13))(_5(_14))(_6(_15))(_7(_16))))))))))))))))))));
  var _TaelinArena$get_object_id = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_1))))))))));
  var _TaelinArena$get_object_hp = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_2))))))))));
  var _TaelinArena$get_object_pos = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_3))))))))));
  var _TaelinArena$get_object_spd = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_4))))))))));
  var _TaelinArena$get_object_dir = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_5))))))))));
  var _TaelinArena$get_object_vel = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_6))))))))));
  var _TaelinArena$get_object_box = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_7))))))))));
  var _TaelinArena$get_object_spr = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_8))))))))));
  var _Function$3v_K$id = (_2=>_2);
  var _TaelinArena$mut_object_id = (_0=>(_1=>_TaelinArena$mut_object_fields(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_hp = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_pos = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_spd = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_dir = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_vel = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_box = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_spr = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_1)));
  var _List$HQNc$List = (_0=>undefined);
  var _TaelinArena$GameMap = _List$HQNc$List(_TaelinArena$GameObject);
  var _Maybe$rXzW$none = (_2=>(_3=>_2));
  var _Maybe$rXzW$some = (_12=>(_13=>(_14=>_14(_12))));
  var _TaelinArena$get_object_from_map = (_0=>(_1=>_1(_Maybe$rXzW$none)((_2=>(_3=>_2((_4=>(_5=>(_6=>(_7=>(_8=>(_9=>(_10=>(_11=>((_4===_0? 1 : 0)?_Maybe$rXzW$some(_2):_TaelinArena$get_object_from_map(_0)(_3))))))))))))))));
  var _TaelinArena$Game = undefined;
  var _TaelinArena$game = (_0=>(_1=>_1(_0)));
  var _TaelinArena$get_game_map = (_0=>_0((_1=>_1)));
  var _TaelinArena$get_object_by_id = (_0=>(_1=>_1((_2=>_TaelinArena$get_object_from_map(_0)(_2)))));
  var _Geometry$v3 = (_2=>(_3=>(_4=>(_5=>_5(_2)(_3)(_4)))));
  var _TaelinArena$get_position_by_id = (_0=>(_1=>_TaelinArena$get_object_by_id(_0)(_1)(_Geometry$v3(0)(0)(0))((_2=>_TaelinArena$get_object_pos(_2)))));
  var _TaelinArena$SRPX = 0;
  var _TaelinArena$STANCI = 1;
  var _TaelinArena$NEELIX = 2;
  var _TaelinArena$BELANNA = 3;
  var _TaelinArena$srpx = _TaelinArena$game_object(0)(70)(_Geometry$v3(0)(0)(0))(0)(_Geometry$v3(0)(-1)(0))(_Geometry$v3(0)(0)(0))(_TaelinArena$circbox(12))(_TaelinArena$sprite(0));
  var _TaelinArena$stanci = _TaelinArena$game_object(1)(90)(_Geometry$v3(64)(0)(0))(0)(_Geometry$v3(-1)(0)(0))(_Geometry$v3(0)(0)(0))(_TaelinArena$circbox(10))(_TaelinArena$sprite(1));
  var _TaelinArena$neelix = _TaelinArena$game_object(2)(700)(_Geometry$v3(-64)(0)(0))(0)(_Geometry$v3(-1)(0)(0))(_Geometry$v3(0)(0)(0))(_TaelinArena$circbox(8))(_TaelinArena$sprite(2));
  var _TaelinArena$belanna = _TaelinArena$game_object(3)(80)(_Geometry$v3(0)(64)(0))(0)(_Geometry$v3(-1)(0)(0))(_Geometry$v3(0)(0)(0))(_TaelinArena$circbox(12))(_TaelinArena$sprite(3));
  var _List$HQNc$cons = (_0=>(_1=>(_2=>(_3=>_3(_0)(_1)))));
  var _List$HQNc$nil = (_0=>(_1=>_0));
  var _TaelinArena$demo_game = _TaelinArena$game(_List$HQNc$cons(_TaelinArena$srpx)(_List$HQNc$cons(_TaelinArena$stanci)(_List$HQNc$cons(_TaelinArena$neelix)(_List$HQNc$cons(_TaelinArena$belanna)(_List$HQNc$nil)))));
  var _TaelinArena$GameEvent = undefined;
  var _TaelinArena$game_move = (_0=>(_1=>(_2=>_2(_0)(_1))));
  var _Extra$map_list = (_2=>(_3=>_3(_List$HQNc$nil)((_4=>(_5=>_List$HQNc$cons(_2(_4))(_Extra$map_list(_2)(_5)))))));
  var _TaelinArena$map_game_objects = (_0=>(_1=>_TaelinArena$game(_Extra$map_list(_0)(_TaelinArena$get_game_map(_1)))));
  var _Geometry$len_v3 = (_13=>_13((_14=>(_15=>(_16=>((((0+(_14*_14))+(_15*_15))+(_16*_16))**0.5))))));
  var _TaelinArena$input_game = (_0=>(_1=>_0((_2=>(_3=>_TaelinArena$map_game_objects((_4=>_4((_5=>(_6=>(_7=>(_8=>(_9=>(_10=>(_11=>(_12=>((_2===_5? 1 : 0)?_TaelinArena$mut_object_spd(((_Geometry$len_v3(_3)===0? 1 : 0)?(_13=>0):(_13=>4)))(_TaelinArena$mut_object_dir(((_Geometry$len_v3(_3)===0? 1 : 0)?(_13=>_13):(_13=>_3)))(_4)):_4))))))))))))(_1))))));
  var _Geometry$sqrdist_v3 = (_22=>(_23=>_22((_24=>(_25=>(_26=>_23((_27=>(_28=>(_29=>(((0+((_24-_27)**2))+((_25-_28)**2))+((_26-_29)**2))))))))))));
  var _Geometry$dist_v3 = (_20=>(_21=>(_Geometry$sqrdist_v3(_20)(_21)**0.5)));
  var _Geometry$add_v3 = (_21=>(_22=>_21((_23=>(_24=>(_25=>_22((_26=>(_27=>(_28=>_Geometry$v3((_23+_26))((_24+_27))((_25+_28))))))))))));
  var _Geometry$scale_v3 = (_21=>(_22=>_22((_23=>(_24=>(_25=>_Geometry$v3((_23*_21))((_24*_21))((_25*_21))))))));
  var _Geometry$norm_v3 = (_21=>_21((_22=>(_23=>(_24=>_Geometry$v3((_22/_Geometry$len_v3(_21)))((_23/_Geometry$len_v3(_21)))((_24/_Geometry$len_v3(_21))))))));
  var _Geometry$sub_v3 = (_21=>(_22=>_21((_23=>(_24=>(_25=>_22((_26=>(_27=>(_28=>_Geometry$v3((_23-_26))((_24-_27))((_25-_28))))))))))));
  var _TaelinArena$interact_with = (_0=>(_1=>_0((_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>(_9=>_1((_10=>(_11=>(_12=>(_13=>(_14=>(_15=>(_16=>(_17=>_8((_18=>_16((_19=>(((_Geometry$dist_v3(_4)(_12)>_19)&(_Geometry$dist_v3(_4)(_12)<(_18+_19)))?_TaelinArena$mut_object_pos((_20=>_Geometry$add_v3(_4)(_Geometry$scale_v3(((_18+_19)-_Geometry$dist_v3(_4)(_12)))(_Geometry$norm_v3(_Geometry$sub_v3(_4)(_12))))))(_0):_0)))((_19=>_0))))((_18=>_0))))))))))))))))))))));
  var _Extra$fold_list = (_11=>(_12=>(_13=>_13(_11)((_14=>(_15=>_12(_14)(_Extra$fold_list(_11)(_12)(_15))))))));
  var _TaelinArena$tick_game = (_0=>_0((_1=>_TaelinArena$game(_Extra$map_list((_2=>_2((_3=>(_4=>(_5=>(_6=>(_7=>(_8=>(_9=>(_10=>_Extra$fold_list(_TaelinArena$game_object(_3)(_4)(_Geometry$add_v3(_5)(_Geometry$scale_v3(_6)(_7)))(_6)(_7)(_8)(_9)(_10))((_11=>(_12=>_TaelinArena$interact_with(_12)(_11))))(_1))))))))))))(_1)))));
  return {
    'Hitbox':_TaelinArena$Hitbox,
    'circbox':_TaelinArena$circbox,
    'polybox':_TaelinArena$polybox,
    'ObjectId':_TaelinArena$ObjectId,
    'Sprite':_TaelinArena$Sprite,
    'sprite':_TaelinArena$sprite,
    'GameObject':_TaelinArena$GameObject,
    'game_object':_TaelinArena$game_object,
    'mut_object_fields':_TaelinArena$mut_object_fields,
    'get_object_id':_TaelinArena$get_object_id,
    'get_object_hp':_TaelinArena$get_object_hp,
    'get_object_pos':_TaelinArena$get_object_pos,
    'get_object_spd':_TaelinArena$get_object_spd,
    'get_object_dir':_TaelinArena$get_object_dir,
    'get_object_vel':_TaelinArena$get_object_vel,
    'get_object_box':_TaelinArena$get_object_box,
    'get_object_spr':_TaelinArena$get_object_spr,
    'mut_object_id':_TaelinArena$mut_object_id,
    'mut_object_hp':_TaelinArena$mut_object_hp,
    'mut_object_pos':_TaelinArena$mut_object_pos,
    'mut_object_spd':_TaelinArena$mut_object_spd,
    'mut_object_dir':_TaelinArena$mut_object_dir,
    'mut_object_vel':_TaelinArena$mut_object_vel,
    'mut_object_box':_TaelinArena$mut_object_box,
    'mut_object_spr':_TaelinArena$mut_object_spr,
    'GameMap':_TaelinArena$GameMap,
    'get_object_from_map':_TaelinArena$get_object_from_map,
    'Game':_TaelinArena$Game,
    'game':_TaelinArena$game,
    'get_game_map':_TaelinArena$get_game_map,
    'get_object_by_id':_TaelinArena$get_object_by_id,
    'get_position_by_id':_TaelinArena$get_position_by_id,
    'SRPX':_TaelinArena$SRPX,
    'STANCI':_TaelinArena$STANCI,
    'NEELIX':_TaelinArena$NEELIX,
    'BELANNA':_TaelinArena$BELANNA,
    'srpx':_TaelinArena$srpx,
    'stanci':_TaelinArena$stanci,
    'neelix':_TaelinArena$neelix,
    'belanna':_TaelinArena$belanna,
    'demo_game':_TaelinArena$demo_game,
    'GameEvent':_TaelinArena$GameEvent,
    'game_move':_TaelinArena$game_move,
    'map_game_objects':_TaelinArena$map_game_objects,
    'input_game':_TaelinArena$input_game,
    'interact_with':_TaelinArena$interact_with,
    'tick_game':_TaelinArena$tick_game
  };
})()

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const spritestack = __webpack_require__(26);

const load_model = name => {
  var model_json = __webpack_require__(27)("./"+name+".json");
  return spritestack.model_to_voxels(model_json);
};

var CRONI_IDLE = 0;
var LYN_IDLE = 1;
var FANTASY_IDLE = 2;
var ARCHER_IDLE = 3;

var models = {
  [CRONI_IDLE]: {
    pivot: {x:0, y:0, z:-64},
    frames: [
      load_model("croni_idle0"),
      load_model("croni_idle1"),
      load_model("croni_idle2"),
      load_model("croni_idle3"),
      load_model("croni_idle4"),
      load_model("croni_idle5"),
      load_model("croni_idle6"),
      load_model("croni_idle7"),
      load_model("croni_idle8"),
      load_model("croni_idle9"),
      load_model("croni_idle10"),
      load_model("croni_idle11"),
    ]
  },
  [LYN_IDLE]: {
    pivot: {x:0, y:0, z:-56},
    frames: [load_model("lyn")]
  },
  [FANTASY_IDLE]: {
    pivot: {x:0, y:0, z:-64},
    frames: [load_model("fantasy")]
  },
  [ARCHER_IDLE]: {
    pivot: {x:0, y:0, z:-64},
    frames: [load_model("archer")]
  },
};

module.exports = {
  CRONI_IDLE,
  LYN_IDLE,
  FANTASY_IDLE,
  ARCHER_IDLE,
  models,
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Receives a SpriteStack model, returns an array of voxels
// in the format [[{x:x0,y:y0,z:z0},col], ...].
function model_to_voxels(model) {
  var voxels = [];

  var col = (model.palette[1]) | 0xFF;
  var r = Math.floor(col / 65536);
  var g = Math.floor(col / 256) % 256;
  var b = col % 256;

  //var K = Infinity;
  // A model has many parts
  for (var m = 0; m < model.parts.length; ++m) {

    // Each part has a data array storing 64x64x64 color ids
    var data = model.parts[m].data;
    var size = model.size;
    for (var i = 0, d = 0; d < data.length; ++d) {
      var val = data[d];

      // When an element of the array is negative, it isn't
      // a color id (cid), but a number of times to repeat
      // the next color id; this is a micro-compression
      if (val < 0) {
        var len = Math.abs(val);
        var cid = data[++d];
      } else {
        var len = 1;
        var cid = val;
      }

      // If the color id isn't zero, then the actual color
      // is stored on `model.pallete[col - 1]`, so we
      // get it, together with its position, and add
      if (cid !== 0) {
        for (var k = 0; k < len; ++k) {
          var n = i + k;
          var x = n % size[0] - size[0]/2;
          var y = ((n/size[0])>>>0) % size[0] - size[1]/2;
          var z = ((n/(size[0]*size[1]))>>>0) - size[2]/2;
          var pos = {x,y,z};
          var col = (model.palette[cid-1]<<8) | 0xFF;
          //K = Math.min(z,K);
          //var r = Math.floor(col / 65536);
          //var g = Math.floor(col / 256) % 256;
          //var b = col % 256;
          //var col = {r,g,b};
          //var col = 0xFF000000;
          //var col = col + r;
          //var col = col + (g << 8);
          //var col = col + (b << 16);
          voxels.push([pos,col]);
          //console.log(x,y,z);
        }
      }

      i += len;
    }
  }
  //console.log("->",K);

  return voxels;
};

module.exports = {model_to_voxels};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./archer.json": 28,
	"./chair.json": 29,
	"./croni_idle0.json": 30,
	"./croni_idle1.json": 31,
	"./croni_idle10.json": 32,
	"./croni_idle11.json": 33,
	"./croni_idle12.json": 34,
	"./croni_idle2.json": 35,
	"./croni_idle3.json": 36,
	"./croni_idle4.json": 37,
	"./croni_idle5.json": 38,
	"./croni_idle6.json": 39,
	"./croni_idle7.json": 40,
	"./croni_idle8.json": 41,
	"./croni_idle9.json": 42,
	"./cylinder.json": 43,
	"./fantasy.json": 44,
	"./ferumbras.json": 45,
	"./lyn.json": 46,
	"./wizard.json": 47,
	"./wizard_of_legends.json": 48,
	"./xtest.json": 49
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 27;

/***/ }),
/* 28 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[56,71,56,70,0,34],\"size\":[128,128,128],\"data\":[-7483,0,-4,1,-124,0,-4,1,-124,0,-4,1,-763,0,1,0,-4,1,-122,0,1,0,-4,1,-122,0,1,0,-4,1,-15097,0,1,8,-3,1,-123,0,1,8,-3,1,-123,0,1,8,-3,1,-764,0,-5,1,-123,0,-5,1,-123,0,-5,1,-15098,0,-3,1,-125,0,-3,1,-125,0,-3,1,-766,0,-4,1,-124,0,-4,1,-124,0,-4,1,-15099,0,-3,1,-125,0,-2,1,2,1,-124,0,-4,1,-765,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15101,0,1,-2,8,-125,0,1,2,8,-125,0,1,-2,8,-765,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15102,0,8,-127,0,8,-2,3,-125,0,8,-2,3,-764,0,-3,8,-125,0,-3,8,-125,0,-3,8,-15231,0,-2,3,-126,0,-2,3,-764,0,-2,3,-126,0,-2,3,-15103,0,-2,2,-126,0,-2,2,-127,0,-2,3,-126,0,-2,3,-764,0,-2,3,-126,0,-2,3,-391,0,-5,10,-14708,0,-2,2,-126,0,-2,2,-127,0,-2,3,-126,0,-2,3,-763,0,-3,3,-125,0,-3,3,-388,0,-3,10,0,2,-14710,0,-3,2,-125,0,-3,2,-126,0,-2,3,-126,0,-2,3,-636,0,-3,3,-125,0,-2,3,-126,0,-2,3,-386,0,-3,10,-3,0,2,-14711,0,-3,2,-125,0,-3,2,-125,0,-2,3,-126,0,-3,3,-125,0,-3,3,-506,0,-4,3,-124,0,-4,3,-512,0,-2,10,-4,0,2,-14712,0,-4,2,-124,0,-4,2,-124,0,-2,3,-2,2,-124,0,-3,3,-125,0,-3,3,-378,0,-3,3,-125,0,-4,3,-124,0,-4,3,-511,0,-2,10,-5,0,2,-14713,0,-3,2,-124,0,-5,2,-123,0,-3,3,-2,2,-123,0,-2,3,6,-125,0,-3,6,-378,0,-3,6,-125,0,6,-2,3,6,-124,0,-2,6,3,6,-126,0,6,-383,0,-2,10,-5,0,2,-14584,0,3,-127,0,-2,3,0,-2,2,-121,0,-2,2,-4,1,-2,4,-120,0,1,-2,0,6,3,-2,1,2,-119,0,1,-3,0,6,3,-2,1,-120,0,1,-3,0,6,0,-2,1,-120,0,1,-3,0,6,0,-2,1,-120,0,1,-5,0,-2,1,-119,0,1,0,-3,6,-2,0,-2,1,-119,0,-2,1,-3,3,6,-3,1,-119,0,-2,1,-4,3,-2,1,-121,0,-7,1,-253,0,3,-126,0,10,3,-5,0,2,-14583,0,10,-3,3,-124,0,10,-3,3,-251,0,2,-5,1,-121,0,-7,1,2,-120,0,-7,1,2,-120,0,-7,1,2,-120,0,-7,1,-121,0,-2,1,-2,3,-3,1,-121,0,-2,1,-2,3,-3,1,-121,0,-2,1,-2,0,-3,1,-122,0,-5,1,-123,0,-2,3,-126,0,-4,3,-125,0,-2,10,3,-4,0,2,-14583,0,-2,3,10,-125,0,-2,3,10,-255,0,-4,1,-122,0,2,-5,1,-121,0,-7,1,-121,0,-7,1,-121,0,-6,1,2,-121,0,-6,1,2,-122,0,-5,1,-123,0,-5,1,-250,0,-3,3,-125,0,-3,3,-127,0,10,-6,0,2,-14583,0,-2,3,-126,0,-2,3,-382,0,2,-4,1,-122,0,-6,1,-122,0,-6,1,-122,0,-6,1,-122,0,-6,1,-123,0,-4,1,2,-377,0,-3,3,-125,0,-3,3,-128,0,10,-5,0,2,-14584,0,-2,3,-126,0,-2,3,-383,0,-3,1,-124,0,-4,2,1,-123,0,1,-3,2,1,-123,0,1,-3,2,1,-123,0,1,-3,2,1,-124,0,-2,1,2,-378,0,-2,3,-126,0,-2,3,-128,0,10,-6,0,2,-14583,0,-2,3,-126,0,-2,3,-512,0,-3,2,-125,0,-3,2,-125,0,-3,2,-125,0,-3,2,-379,0,-2,3,-125,0,-3,3,-125,0,-2,3,-128,0,10,-5,0,2,-14584,0,-2,3,-126,0,-2,3,-384,0,-3,2,5,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-3,2,5,-250,0,-2,3,-126,0,-2,3,-255,0,10,-5,0,2,-14584,0,-2,3,-126,0,-3,3,-126,0,-2,3,-131,0,7,-123,0,-4,2,7,-123,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,7,-122,0,-2,3,-3,0,7,-121,0,-3,3,-125,0,-2,3,-254,0,-2,10,-4,0,2,-14714,0,-2,3,-126,0,-3,3,-126,0,-2,3,0,-2,9,-123,0,-4,2,9,-123,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,9,-122,0,-2,3,-2,0,-2,9,-122,0,-2,3,-381,0,10,-5,0,2,-14843,0,-2,3,-126,0,3,-2,9,7,-124,0,-3,2,7,-124,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-3,2,7,-123,0,-2,3,-2,9,7,-123,0,-2,3,-381,0,10,-4,0,2,-14973,0,-2,7,-381,0,-2,6,-126,0,-2,6,-383,0,-2,7,-507,0,10,-4,0,2,-14973,0,-2,9,-126,0,-2,9,-126,0,6,3,-124,0,7,6,-4,3,-122,0,7,6,-4,3,-124,0,6,3,-126,0,-2,9,-126,0,-2,9,-506,0,10,-4,0,2,-14974,0,-2,7,-124,0,-4,7,-123,0,-2,7,-5,3,-121,0,-2,7,-5,3,-121,0,-2,7,-5,3,-121,0,-2,7,-5,3,-122,0,-5,7,-633,0,10,-4,0,2,-15100,0,7,-4,9,-122,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-121,0,-6,7,-123,0,-3,7,-506,0,10,-3,0,2,-14973,0,-5,7,9,-122,0,1,-5,7,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-121,0,1,-6,7,-121,0,-5,7,-505,0,10,-3,0,2,-14974,0,1,-4,7,-122,0,1,-5,7,-121,0,-2,1,-4,3,7,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-120,0,-2,1,-3,3,-3,7,-121,0,1,-6,7,-122,0,-2,1,-507,0,10,-2,0,2,-14976,0,-2,1,7,-124,0,1,7,-2,1,7,-122,0,1,-3,7,1,7,-121,0,-2,1,-3,7,1,-122,0,-2,1,-3,7,1,-2,7,-121,0,1,-3,7,1,-2,7,-122,0,1,7,1,-126,0,1,-507,0,10,-2,0,2,-15104,0,-2,1,-125,0,-4,1,-123,0,-5,1,-123,0,-5,1,-123,0,-5,1,-125,0,1,-635,0,10,0,2,-15233,0,-2,1,-125,0,-3,1,-125,0,-3,1,-126,0,-2,1,-762,0,10,0,2,-16381,0,10,2,-16382,0,10,2,-16382,0,10,-1531079,0],\"uuid\":\"CD5E269A-B932-4D24-8E8B-DA59AC90742B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[16737843,16777113,16764006,6697728,10066278,16750950,6736947,10040064,34816,16750848],\"bounds\":[56,71,56,70,0,34]}");

/***/ }),
/* 29 */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":2,\"parts\":[{\"name\":\"main\",\"bounds\":[16,47,15,48,0,58],\"size\":[64,64,64],\"data\":[-1234,0,-2,2,-24,0,-2,2,-36,0,-2,2,-24,0,-2,2,-1443,0,-2,2,-26,0,-2,2,-34,0,-2,2,-26,0,-2,2,-2467,0,-2,2,-24,0,-2,2,-36,0,-2,2,-24,0,-2,2,-1443,0,-2,2,-26,0,-2,2,-34,0,-2,2,-26,0,-2,2,-2467,0,-2,23,-24,0,-2,23,-36,0,-2,23,-24,0,-2,23,-1443,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-2467,0,-2,23,-24,0,-2,23,-36,0,-3,23,-22,0,-3,23,-37,0,-2,23,-22,0,-2,23,-1317,0,-2,23,-24,0,-2,23,-35,0,-3,23,-24,0,-3,23,-34,0,-2,23,-26,0,-2,23,-2597,0,-2,23,-20,0,-2,23,-40,0,-2,23,-20,0,-2,23,-498,0,-4,2,-60,0,-4,2,-60,0,-4,2,-60,0,-4,2,-497,0,-2,23,-22,0,-2,23,-38,0,-2,23,-22,0,-2,23,-2792,0,-2,23,-18,0,-2,23,-42,0,-3,23,-16,0,-3,23,-43,0,-3,23,-14,0,-3,23,-45,0,-3,23,-12,0,-3,23,-47,0,-3,23,-10,0,-3,23,-49,0,-3,23,-8,0,-3,23,-51,0,-3,23,-6,0,-3,23,-53,0,-2,23,-6,0,-2,23,-55,0,-2,23,-4,2,-2,23,-56,0,-2,23,-4,2,-2,23,-56,0,-2,23,-4,2,-2,23,-55,0,-3,23,-4,2,-3,23,-53,0,-3,23,-6,0,-3,23,-51,0,-3,23,-8,0,-3,23,-49,0,-3,23,-10,0,-3,23,-47,0,-3,23,-12,0,-3,23,-45,0,-3,23,-14,0,-3,23,-43,0,-3,23,-16,0,-3,23,-41,0,-3,23,-18,0,-3,23,-40,0,-2,23,-20,0,-2,23,-3378,0,-4,2,-60,0,2,-2,23,2,-60,0,2,-2,23,2,-60,0,-4,2,-3965,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-3889,0,-3,2,-60,0,-5,2,-58,0,-7,2,0,-6,22,0,-2,23,-47,0,-7,2,22,-5,0,-2,22,-2,23,-47,0,-7,2,-58,0,-5,2,-60,0,-3,2,-3850,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-3189,0,-20,23,-44,0,-20,23,-44,0,-20,23,-46,0,-2,3,0,-2,3,-6,0,-2,3,0,-2,3,-47,0,-18,3,-46,0,-18,3,-46,0,-18,3,-46,0,-18,3,-45,0,-20,3,-44,0,-20,3,-44,0,-20,3,-44,0,-20,3,-43,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-41,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-39,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-37,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-28,3,-35,0,-30,3,-34,0,-6,3,-18,0,-6,3,-34,0,-2,3,-26,0,-2,3,-2214,0,-2,23,-18,3,-2,23,-42,0,-2,23,-18,3,-2,23,-44,0,-18,3,-45,0,-20,3,-44,0,-20,3,-44,0,-20,3,-43,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-41,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-39,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-37,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-7,3,-14,0,-7,3,-35,0,-5,3,-20,0,-5,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-2094,0,-6,3,-54,0,-14,3,-46,0,-2,23,0,-16,3,0,-2,23,-42,0,-2,23,-2,3,-14,0,-2,3,-2,23,-43,0,-2,3,-16,0,-2,3,-3827,0,-6,3,-54,0,-14,3,-49,0,-16,3,-44,0,-2,23,0,-2,3,-14,0,-2,3,0,-2,23,-40,0,-2,23,-2,3,-16,0,-2,3,-2,23,-3825,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-2,23,-3,3,-16,0,-3,3,-2,23,-38,0,-2,23,-22,0,-2,23,-3760,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-2,2,-12,0,-2,2,-3,3,-39,0,-2,23,-5,0,-3,2,-8,0,-3,2,-5,0,-2,23,-36,0,-2,23,-8,0,-8,2,-8,0,-2,23,-3695,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-16,0,-3,3,-45,0,2,-14,0,2,-42,0,-2,23,-4,0,-16,2,-4,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3631,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-16,0,-3,3,-45,0,2,-14,0,2,-48,0,-3,2,-10,0,-3,2,-42,0,-2,23,-6,0,-12,2,-6,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3567,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-3,2,-12,0,-3,2,-2,0,3,-45,0,-14,2,-107,0,-2,23,-24,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3503,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-3,2,-12,0,-3,2,-2,0,3,-45,0,-14,2,-234,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-3374,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-4,2,-10,0,-4,2,-2,0,3,-47,0,-10,2,-300,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-3310,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,2,-14,0,2,-4,3,-40,0,3,-3,0,-4,2,-8,0,-4,2,-3,0,3,-47,0,-10,2,-364,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-33,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-2093,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-2,2,-12,0,-2,2,-4,3,-40,0,3,-5,0,-12,2,-5,0,3,-612,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-2093,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-3,0,-4,2,-8,0,-4,2,-3,0,3,-47,0,-10,2,-3704,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-3,0,2,-14,0,2,-3,0,3,-45,0,-4,2,-6,0,-4,2,-54,0,-6,2,-3642,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-2,2,-14,0,-2,2,-47,0,-4,2,-8,0,-4,2,-51,0,-10,2,-3576,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-2,2,-14,0,-2,2,-47,0,-3,2,-10,0,-3,2,-50,0,-12,2,-3575,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-4,2,-10,0,-4,2,-49,0,-4,2,-4,0,-4,2,-55,0,-6,2,-3578,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,2,-16,0,2,-2,0,-2,3,-43,0,2,-14,0,2,-49,0,-4,2,-6,0,-4,2,-53,0,-8,2,-3577,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-3,0,2,-14,0,2,-3,0,-2,3,-43,0,-4,2,-8,0,-4,2,-51,0,-10,2,-3640,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,-2,2,-14,0,-2,2,-2,0,-2,3,-43,0,-6,2,-4,0,-6,2,-54,0,-4,2,-3643,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-8,2,-3705,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-3,0,-4,2,-8,0,-4,2,-3,0,-2,3,-46,0,-10,2,-3704,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,2,-14,0,2,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-8,2,-3705,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,2,-14,0,2,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-2,2,-4,0,-2,2,-57,0,-6,2,-3642,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,2,-12,0,2,-2,3,-41,0,-6,3,0,-14,2,0,-6,3,-36,0,-2,3,-10,0,-4,2,-10,0,-2,3,-3759,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,2,-2,3,-41,0,-6,3,-2,2,-12,0,-2,2,-6,3,-36,0,-2,3,-3,0,-2,2,-14,0,-2,2,-3,0,-2,3,-3759,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-18,3,-41,0,-8,3,-12,0,-8,3,-36,0,-2,3,-2,0,-3,3,-14,0,-3,3,-2,0,-2,3,-3694,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-37,0,-8,3,-12,0,-8,3,-36,0,-7,3,-14,0,-7,3,-3694,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-36,0,-8,3,-12,0,-8,3,-36,0,-7,3,-14,0,-7,3,-36,0,-3,3,-22,0,-3,3,-3630,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-35,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-2,3,-26,0,-2,3,-3565,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-35,0,-10,3,-10,0,-10,3,-34,0,-8,3,-14,0,-8,3,-34,0,-5,3,-20,0,-5,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-3501,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-36,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-3,3,-24,0,-3,3,-3565,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-36,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-3,3,-24,0,-3,3,-3503,0,-4,3,-57,0,-10,3,-52,0,-14,3,-48,0,-18,3,-45,0,-20,3,-43,0,-22,3,-39,0,-8,3,-12,0,-8,3,-35,0,-8,3,-14,0,-8,3,-34,0,-3,3,-24,0,-3,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-22929,0],\"uuid\":\"0F83B31A-98B6-4290-A164-95C437723E1C\",\"hidden\":false}],\"size\":[64,64,64],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[16,47,15,48,0,58]}");

/***/ }),
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,6,-4,7,6,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,7,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13813,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-757,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13814,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-885,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13944,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-762,0,-4,6,-124,0,-4,6,-124,0,-4,7,-13945,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-764,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13689,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-764,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13561,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-892,0,-4,6,-124,0,-4,6,-124,0,-4,7,-13561,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1020,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13433,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1149,0,-2,6,-126,0,-2,6,-13434,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"15013266-1B66-40BE-8AB4-3BDD092173E6\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,7496558,5391165,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 31 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-755,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13816,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-883,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13946,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-760,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13947,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13563,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-890,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13563,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1018,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13435,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1147,0,-2,7,-126,0,-2,7,-13436,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"3012310E-96D8-4DC9-B11E-2FBEBA73DCAA\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,5391165,7496558,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 32 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13560,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-894,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13559,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1023,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13430,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1154,0,-2,7,-126,0,-2,7,-13429,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"2AD1D28D-1BD3-4F18-BFD7-7455B3C12194\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 33 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1021,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13432,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1152,0,-2,7,-126,0,-2,7,-13431,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"9872E874-5864-4714-A6C0-9C73F14CAA1F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 34 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1020,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13433,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1149,0,-2,7,-126,0,-2,7,-13434,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"76BCDE88-3711-47F2-853A-6718D7A1C601\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 35 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-755,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13816,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-883,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13946,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-760,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13947,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-761,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13564,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-889,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13564,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1017,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13436,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1146,0,-2,7,-126,0,-2,7,-13437,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"95EEDB35-0E0E-402D-BB93-A0A6F0F232F3\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,5391165,7496558,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 36 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-112,0,-4,1,10,-6,8,10,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-16,1,-112,0,-16,1,-112,0,-2,1,-2,0,-12,1,-112,0,-2,1,-2,0,-12,1,-114,0,-12,1,-116,0,-12,1,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-758,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-761,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13564,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-889,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13564,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1016,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13437,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1143,0,-2,7,-126,0,-2,7,-13440,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"243C6468-1C9E-4654-ACE9-ED8A70E8D4E6\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 37 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-112,0,-4,1,10,-6,8,10,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-16,1,-112,0,-16,1,-112,0,-2,1,-2,0,-12,1,-112,0,-2,1,-2,0,-12,1,-114,0,-12,1,-116,0,-12,1,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-758,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-763,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13562,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-891,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13562,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1018,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13435,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1145,0,-2,7,-126,0,-2,7,-13438,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"7AC62D52-02A0-4DEC-8EBA-D099FBA3B48B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 38 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-759,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-888,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-763,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13944,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1019,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13434,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1146,0,-2,7,-126,0,-2,7,-13437,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"ACB4ABDA-33DB-4CB1-8E49-528CA48C4D6F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 39 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13686,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13812,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-896,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13557,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1023,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13430,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1150,0,-2,7,-126,0,-2,7,-13433,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"892BCF8C-EDA6-47FB-A8D5-2AE32C2D6B8E\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13686,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13812,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-897,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13556,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1025,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13428,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1153,0,-2,7,-126,0,-2,7,-13430,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"F33A3005-1936-4D74-BD64-844EDA568B57\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 41 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-897,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13556,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1025,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13428,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1155,0,-2,7,-126,0,-2,7,-13428,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"18A51C2A-2C23-4B9B-95C4-2EFA82506920\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 42 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-766,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13559,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-895,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13558,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1024,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13429,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1154,0,-2,7,-126,0,-2,7,-13429,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"B4310167-CEB8-4757-8FF8-EA37AEC35FB7\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 43 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[52,76,52,75,0,12],\"size\":[128,128,128],\"data\":[-6718,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-1890877,0],\"uuid\":\"AF55B709-8F88-45D9-9490-37FA7714171F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[52,76,52,75,0,12]}");

/***/ }),
/* 44 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part2\",\"bounds\":[39,87,37,90,0,40],\"size\":[128,128,128],\"data\":[-4808,0,-7,18,-97,0,-6,18,-17,0,-10,18,-93,0,-14,18,-6,0,-16,18,-91,0,-38,18,-89,0,-40,18,-87,0,-6,18,-3,20,-22,18,-3,20,-8,18,-86,0,-5,18,-5,20,-20,18,-10,20,-2,18,-86,0,-4,18,-7,20,-18,18,-12,20,-2,18,-85,0,-4,18,-7,20,-6,18,-6,20,-6,18,-12,20,-2,18,-85,0,-4,18,-7,20,-4,18,-10,20,-4,18,-12,20,-2,18,-85,0,-5,18,-5,20,-3,18,-14,20,-3,18,-10,20,-3,18,-86,0,-5,18,-3,20,-3,18,-16,20,-3,18,-3,20,-9,18,-86,0,-10,18,-18,20,-14,18,-86,0,-10,18,-18,20,-13,18,-88,0,-8,18,-20,20,-11,18,-89,0,-8,18,-20,20,-11,18,-89,0,-7,18,-22,20,-10,18,-89,0,-7,18,-22,20,-9,18,-90,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-8,18,-20,20,-8,18,-92,0,-8,18,-20,20,-8,18,-91,0,-10,18,-18,20,-9,18,-91,0,-10,18,-18,20,-9,18,-90,0,-12,18,-16,20,-10,18,-90,0,-13,18,-14,20,-2,18,-6,20,-4,18,-88,0,-16,18,-10,20,-3,18,-8,20,-3,18,-88,0,-18,18,-6,20,-4,18,-10,20,-2,18,-87,0,-8,18,-3,20,-18,18,-10,20,-3,18,-86,0,-7,18,-5,20,-17,18,-10,20,-4,18,-84,0,-7,18,-7,20,-16,18,-10,20,-5,18,-82,0,-8,18,-7,20,-16,18,-10,20,-6,18,-81,0,-8,18,-7,20,-16,18,-10,20,-6,18,-81,0,-9,18,-5,20,-8,18,-4,20,-6,18,-8,20,-8,18,-80,0,-10,18,-3,20,-7,18,-8,20,-5,18,-6,20,-9,18,-80,0,-6,18,-5,20,-8,18,-10,20,-8,18,-5,20,-6,18,-80,0,-5,18,-7,20,-7,18,-10,20,-7,18,-7,20,-6,18,-79,0,-4,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-79,0,-4,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-80,0,-3,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-80,0,-3,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-81,0,-2,18,-9,20,-6,18,-10,20,-6,18,-9,20,-5,18,-81,0,-3,18,-7,20,-7,18,-10,20,-7,18,-7,20,-5,18,-82,0,-4,18,-5,20,-9,18,-8,20,-9,18,-5,20,-6,18,-83,0,-19,18,-4,20,-21,18,-85,0,-43,18,-86,0,-41,18,-89,0,-38,18,-92,0,-35,18,-95,0,-31,18,-99,0,-25,18,-107,0,-14,18,-10347,0,-3,27,-22,0,-3,27,-99,0,-5,27,-20,0,-5,27,4,5,4,5,4,-93,0,-2,27,20,-2,27,-20,0,-2,27,20,-2,27,4,5,4,5,4,-93,0,-5,27,-20,0,-5,27,4,5,4,5,4,-94,0,-3,27,-8,0,-6,27,-8,0,-3,27,-109,0,-10,27,-117,0,-12,27,-115,0,-14,27,-113,0,-16,27,-112,0,-16,27,-111,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-111,0,-16,27,-112,0,-16,27,-113,0,-14,27,-115,0,-12,27,-117,0,-10,27,-120,0,-6,27,-135,0,-4,27,-123,0,-6,27,-121,0,-8,27,-98,0,-3,27,-19,0,-8,27,-97,0,-5,27,-18,0,-8,27,-97,0,-2,27,20,-2,27,-18,0,-8,27,-97,0,-5,27,-19,0,-6,27,-99,0,-3,27,-21,0,-4,27,-239,0,-6,27,-121,0,-8,27,-106,0,-5,27,-9,0,-8,27,-9,0,-5,27,-92,0,-5,27,-9,0,-3,27,-2,20,-3,27,-9,0,-5,27,-92,0,-2,27,20,-2,27,-9,0,-3,27,-2,20,-3,27,-9,0,-2,27,20,-2,27,-92,0,-5,27,-9,0,-8,27,-9,0,-5,27,-92,0,-5,27,-9,0,-8,27,-9,0,-5,27,-107,0,-6,27,-11503,0,-3,4,-22,0,-3,4,-2,5,-97,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-99,0,-3,4,-8,0,-6,4,-8,0,-3,4,-109,0,-10,4,-117,0,-12,4,-115,0,-14,4,-113,0,-16,4,-112,0,-16,4,-111,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-111,0,-16,4,-112,0,-16,4,-113,0,-14,4,-115,0,-12,4,-117,0,-10,4,-120,0,-6,4,-135,0,-4,4,-123,0,-6,4,-121,0,-8,4,-98,0,-3,4,-19,0,-8,4,-97,0,-5,4,-18,0,-8,4,-97,0,-5,4,-18,0,-8,4,-97,0,-5,4,-19,0,-6,4,-99,0,-3,4,-21,0,-4,4,-239,0,-6,4,-121,0,-8,4,-106,0,-5,4,-9,0,-8,4,-9,0,-5,4,-92,0,-5,4,-9,0,-8,4,-9,0,-7,4,-4,0,4,-85,0,-5,4,-9,0,-8,4,-9,0,-12,4,-85,0,-5,4,-9,0,-8,4,-9,0,-7,4,-4,0,4,-85,0,-5,4,-9,0,-8,4,-9,0,-5,4,-107,0,-6,4,-11402,0,-2,5,-99,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-135,0,-4,5,-123,0,-6,5,-121,0,-8,5,-98,0,-3,5,-19,0,-8,5,-97,0,-5,5,-18,0,-8,5,-97,0,-5,5,-18,0,-8,5,-97,0,-5,5,-19,0,-6,5,-99,0,-3,5,-21,0,-4,5,-239,0,-6,5,-108,0,4,0,4,-10,0,-8,5,-11,0,4,-94,0,-5,5,-9,0,-8,5,-9,0,-5,5,-91,0,4,-6,5,-8,0,-8,5,-8,0,-13,5,-85,0,5,-4,7,-2,5,-7,0,-8,5,-7,0,-2,5,-12,7,-84,0,4,-6,5,-8,0,-8,5,-8,0,-13,5,-85,0,-5,5,-9,0,-8,5,-9,0,-5,5,-93,0,4,0,4,-11,0,-6,5,-12,0,4,-111,0,-2,13,-11275,0,5,-101,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-7,0,4,-2,0,4,-124,0,-4,5,-123,0,5,-4,12,5,-120,0,4,5,-6,12,5,4,-97,0,-3,5,-19,0,5,-6,12,5,-97,0,-5,5,-18,0,5,-6,12,5,-97,0,-5,5,-17,0,4,5,-6,12,5,4,-96,0,-5,5,-19,0,5,-4,12,5,-99,0,-3,5,-21,0,-4,5,-124,0,4,-2,0,4,-111,0,-6,5,-107,0,-4,4,-10,0,-8,5,-10,0,-4,4,-91,0,4,-4,0,4,-9,0,-8,5,-9,0,4,-4,0,-6,4,-85,0,4,-5,0,-2,5,-6,0,-10,5,-6,0,-2,5,-96,0,4,-5,0,-2,7,5,-5,0,-10,5,-5,0,5,-2,7,-96,0,4,-5,0,-2,5,-6,0,-10,5,-6,0,-2,5,-96,0,4,-4,0,4,-9,0,-3,5,-2,4,-3,5,-9,0,4,-4,0,-6,4,-86,0,-4,4,-11,0,-6,5,-11,0,-4,4,-108,0,-4,13,-11273,0,5,-102,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-7,0,-4,4,-112,0,-4,5,-7,0,4,-4,0,4,-121,0,4,-6,0,4,-119,0,4,-8,0,4,-97,0,-3,5,-18,0,4,-3,0,-2,3,-3,0,4,-96,0,-5,5,-17,0,4,-3,0,-2,3,-3,0,4,-96,0,-5,5,-17,0,4,-8,0,4,-96,0,-5,5,-18,0,4,-6,0,4,-98,0,-3,5,-20,0,4,-4,0,4,-111,0,-4,5,-8,0,-4,4,-111,0,-6,5,-121,0,-8,5,-111,0,-2,4,-7,0,-8,5,-7,0,-2,4,-104,0,-3,5,-2,0,-12,5,-2,0,-3,5,-106,0,-2,7,5,-2,0,-12,5,-2,0,5,-2,7,-106,0,-3,5,-2,0,-12,5,-2,0,-3,5,-104,0,-2,4,-7,0,-3,5,-2,4,-3,5,-7,0,-2,4,-112,0,-6,5,-123,0,13,-2,26,13,-11272,0,5,-103,0,-3,5,-21,0,-4,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-7,0,25,-4,0,25,-7,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-116,0,25,-12,5,25,-114,0,-14,5,-113,0,-16,5,-112,0,-16,5,-110,0,25,-18,5,25,-109,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-109,0,25,-18,5,25,-110,0,-16,5,-112,0,-16,5,-113,0,-14,5,-114,0,25,-12,5,25,-116,0,-10,5,-120,0,-6,5,-123,0,-4,5,-123,0,25,-4,5,25,-239,0,-3,5,-22,0,-2,3,-100,0,-5,5,-21,0,-2,3,-100,0,-5,5,-123,0,-5,5,-124,0,-3,5,-9,0,-4,5,-124,0,-4,5,-123,0,-6,5,-121,0,-8,5,-113,0,-2,4,-5,0,-8,5,-5,0,-2,4,-108,0,-18,5,-110,0,-2,7,-14,5,-2,7,-110,0,-18,5,-108,0,-2,4,-5,0,-3,5,-2,4,-3,5,-5,0,-2,4,-114,0,-6,5,-123,0,13,-2,26,13,-11376,0,-3,4,-20,0,5,0,-3,4,-99,0,-5,4,-19,0,5,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-7,0,26,-4,0,26,-7,0,-5,4,-99,0,-3,4,-8,0,-6,5,-8,0,-3,4,-109,0,-10,5,-116,0,26,-12,5,26,-114,0,-14,5,-113,0,-16,5,-112,0,-16,5,-110,0,26,-18,5,26,-109,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-109,0,26,-18,5,26,-110,0,-16,5,-112,0,-16,5,-113,0,-14,5,-114,0,26,-12,5,26,-116,0,-10,5,-120,0,-6,5,-123,0,-4,5,-123,0,26,-4,5,26,-123,0,-4,5,-112,0,-3,4,-9,0,-4,5,-9,0,3,14,-100,0,-5,4,-21,0,-2,3,-100,0,-5,4,-8,0,-4,5,-111,0,-5,4,-8,0,-4,5,-112,0,-3,4,-9,0,-4,5,-124,0,-4,5,-123,0,-6,5,-121,0,-8,5,-115,0,-2,4,-3,0,-8,5,-3,0,-2,4,-112,0,-14,5,-114,0,-2,7,-10,5,-2,7,-114,0,-14,5,-112,0,-2,4,-3,0,-8,5,-3,0,-2,4,-116,0,-6,5,-123,0,-4,13,-11376,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-19,0,-6,5,-98,0,-5,5,-7,0,26,-4,0,26,-7,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-116,0,26,-3,5,-6,6,-3,5,26,-114,0,-3,5,6,-6,7,6,-3,5,-113,0,-3,5,6,-8,7,6,-3,5,-112,0,-2,5,6,-10,7,6,-2,5,-110,0,26,-2,5,6,-12,7,6,-2,5,26,-109,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-109,0,26,-2,5,6,-12,7,6,-2,5,26,-110,0,-2,5,6,-10,7,6,-2,5,-112,0,-3,5,6,-8,7,6,-3,5,-113,0,-3,5,6,-6,7,6,-3,5,-114,0,26,-3,5,-2,6,-2,7,-2,6,-3,5,26,-116,0,-4,5,-2,7,-4,5,-120,0,-2,5,-2,7,-2,5,-123,0,5,-2,7,5,-123,0,26,5,-2,7,5,26,-123,0,5,-2,7,5,-112,0,-3,5,-8,0,4,5,-2,7,5,4,-8,0,4,-2,14,-99,0,-5,5,-8,0,5,-2,7,5,-9,0,4,-2,14,-99,0,-5,5,-7,0,4,5,-2,7,5,4,-9,0,14,-100,0,-5,5,-8,0,5,-2,7,5,-112,0,-3,5,-8,0,4,5,-2,7,5,4,-123,0,5,-2,7,5,-123,0,-2,5,-2,7,-2,5,-121,0,-2,5,-4,7,-2,5,-117,0,-2,4,0,5,-6,7,5,0,-2,4,-116,0,-2,5,-6,7,-2,5,-118,0,-10,7,-118,0,-2,5,-6,7,-2,5,-116,0,-2,4,0,-2,5,-4,7,-2,5,0,-2,4,-118,0,-6,5,-123,0,-4,4,-11376,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-19,0,-2,5,-3,3,5,-99,0,5,0,5,-8,0,-2,4,-2,26,-2,4,-8,0,5,0,5,-109,0,-2,4,-2,0,-2,26,-2,0,-2,4,-116,0,26,4,-10,0,4,26,-114,0,4,-12,0,4,-113,0,4,-14,0,4,-112,0,4,-14,0,4,-110,0,26,4,-16,0,4,26,-109,0,4,-16,0,4,-110,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-110,0,4,-16,0,4,-109,0,26,4,-16,0,4,26,-110,0,4,-14,0,4,-112,0,4,-14,0,4,-113,0,4,-12,0,4,-114,0,26,4,-10,0,4,26,-116,0,-2,4,-6,0,-2,4,-120,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-111,0,5,0,5,-8,0,4,-4,0,4,-8,0,4,-2,14,-99,0,5,-3,3,5,-7,0,4,-4,0,4,-8,0,-3,14,-99,0,5,-3,3,5,-7,0,4,-4,0,4,-9,0,14,-100,0,5,-3,3,5,-7,0,4,-4,0,4,-111,0,5,0,5,-8,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-121,0,4,-6,0,4,-119,0,-2,4,-6,0,-2,4,-502,0,4,-8,0,4,-119,0,4,-6,0,4,-121,0,-6,4,-11375,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,26,-4,0,26,-7,0,5,-3,3,5,-99,0,5,0,5,-10,0,-2,26,-8,0,-3,5,0,5,-113,0,-2,26,-120,0,26,-12,0,26,-495,0,26,-18,0,26,-237,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-237,0,26,-18,0,26,-495,0,26,-12,0,26,-374,0,26,-4,0,26,-263,0,14,4,-102,0,5,0,5,-20,0,14,-2,4,-2,13,-99,0,5,-3,3,5,-20,0,-2,14,13,14,-99,0,5,-3,3,5,-22,0,14,-100,0,5,-3,3,5,-124,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,26,-4,0,26,-7,0,5,-3,3,5,-99,0,5,0,5,-10,0,-2,26,-10,0,5,0,5,-113,0,-2,26,-9,0,-2,5,-109,0,26,-12,0,26,-495,0,26,-18,0,26,-237,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-237,0,26,-18,0,26,-495,0,26,-12,0,26,-374,0,26,-4,0,26,-8,0,14,-126,0,13,4,14,-124,0,-2,13,4,13,-101,0,5,0,5,-19,0,13,14,-2,4,-101,0,5,-3,3,5,-19,0,14,13,-102,0,5,-3,3,5,-123,0,5,-3,3,5,-124,0,5,0,5,-12669,0,-3,5,-22,0,-3,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,-6,26,-7,0,5,-3,3,5,-99,0,-3,5,-6,0,-2,26,-6,0,-2,26,-6,0,-3,5,-107,0,-2,26,-10,0,-2,26,-5,0,5,-107,0,26,-14,0,26,-112,0,26,-14,0,26,-111,0,26,-16,0,26,-110,0,26,-16,0,26,-109,0,26,-18,0,26,-108,0,26,-18,0,26,-108,0,-2,26,-16,0,-2,26,-108,0,-2,26,-16,0,-2,26,-108,0,26,-18,0,26,-108,0,26,-18,0,26,-109,0,26,-16,0,26,-110,0,26,-16,0,26,-111,0,26,-14,0,26,-112,0,26,-14,0,26,-113,0,-2,26,-10,0,-2,26,-116,0,-2,26,-6,0,-2,26,-6,0,-2,13,-112,0,-6,26,-7,0,-3,13,14,-124,0,13,-2,4,-2,13,-123,0,-5,13,-99,0,-3,5,-19,0,-3,13,4,-2,13,-99,0,5,-3,3,5,-18,0,-3,13,-102,0,5,-3,3,5,-19,0,-2,14,-102,0,5,-3,3,5,-124,0,-3,5,-12669,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-127,0,5,-872,0,-2,26,-16,0,-2,26,-108,0,-2,26,-16,0,-2,26,-1025,0,-2,13,-125,0,-4,13,-123,0,-6,13,-123,0,-4,13,-100,0,-3,4,-20,0,-2,13,4,-101,0,-5,4,-20,0,13,4,-101,0,-5,4,-123,0,-5,4,-124,0,-3,4,-12669,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-22,0,-4,5,-127,0,5,-752,0,-2,6,-117,0,-2,26,-6,0,-4,6,-6,0,-2,26,-108,0,-2,26,-6,0,-4,6,-6,0,-2,26,-117,0,-2,6,-906,0,13,-127,0,-3,13,-124,0,-5,13,-124,0,-3,13,-100,0,-3,5,-21,0,13,4,-3,13,-98,0,-5,5,-20,0,13,4,-3,13,-98,0,-5,5,-20,0,-5,13,-98,0,-5,5,-21,0,-3,13,-100,0,-3,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-98,0,5,0,5,-22,0,5,0,5,0,5,-622,0,-4,4,-123,0,-6,4,-121,0,-3,4,-2,6,-3,4,-114,0,-2,26,-4,0,-2,4,-3,6,-3,4,-4,0,-2,26,-108,0,-2,26,-4,0,-2,4,-4,6,-2,4,-4,0,-2,26,-114,0,-3,4,-3,6,-2,4,-121,0,-4,4,6,4,-123,0,-4,4,-521,0,-2,13,-125,0,-4,13,-123,0,-6,13,-122,0,-6,13,-121,0,-7,13,-99,0,5,0,5,-19,0,-8,13,-97,0,5,-3,3,5,-19,0,-2,13,4,-4,13,-97,0,5,-3,3,5,-19,0,-7,13,-97,0,5,-3,3,5,-20,0,-5,13,-99,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-97,0,5,-3,3,5,-20,0,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-496,0,6,-3,4,-122,0,4,6,-6,4,-120,0,-8,4,-119,0,-10,4,-113,0,-2,26,-3,0,-9,4,6,-3,0,-2,26,-108,0,-2,26,-3,0,6,-8,4,6,-3,0,-2,26,-113,0,6,-9,4,-119,0,6,-7,4,-120,0,-8,4,-122,0,-4,4,-394,0,-2,13,-124,0,-2,12,-3,13,-122,0,12,-6,13,-120,0,12,-7,13,-120,0,-9,13,-97,0,5,0,5,-19,0,-8,13,12,-96,0,5,-3,3,5,-18,0,-3,13,0,-3,13,-2,12,-96,0,5,-3,3,5,-19,0,-6,13,12,-97,0,5,-3,3,5,-20,0,-3,13,-2,12,-99,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-97,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-368,0,6,-3,4,-122,0,4,6,-6,4,-119,0,-10,4,-118,0,-10,4,-117,0,-12,4,-112,0,-3,26,0,-12,4,0,-3,26,-108,0,-3,26,0,6,-11,4,0,-3,26,-112,0,6,-10,4,6,-117,0,6,-9,4,-118,0,6,-9,4,-119,0,-8,4,-122,0,-4,4,-266,0,-2,13,-124,0,-4,12,13,-122,0,-6,12,13,-120,0,-8,12,13,-119,0,-9,12,-97,0,5,0,5,-19,0,13,-8,12,-96,0,5,-3,3,5,-18,0,13,-2,12,0,-5,12,-96,0,5,-3,3,5,-19,0,13,-7,12,-96,0,5,-3,3,5,-20,0,-2,13,-4,12,-98,0,5,0,5,-23,0,-3,12,-12643,0,-3,5,-22,0,-5,5,-97,0,-6,5,-18,0,-6,5,-98,0,-6,5,-18,0,-6,5,-98,0,-6,5,-18,0,-6,5,-99,0,-3,5,-22,0,-3,5,-367,0,-3,6,-3,4,-121,0,6,-7,4,-119,0,-10,4,-117,0,-12,4,-116,0,-12,4,-113,0,-2,26,0,-12,4,0,-2,26,-110,0,-2,26,0,6,-11,4,0,-2,26,-113,0,6,-10,4,6,-116,0,6,-10,4,6,-117,0,6,-9,4,-119,0,6,-7,4,-121,0,-5,4,6,-393,0,-2,12,-124,0,-5,12,-123,0,-6,12,-120,0,-9,12,-97,0,-3,5,-19,0,-9,12,-96,0,-5,5,-19,0,-9,12,-95,0,-5,5,-19,0,-9,12,-95,0,-5,5,-21,0,-6,12,-97,0,-3,5,-24,0,-3,12,-12541,0,-2,5,-99,0,-3,4,-22,0,-3,4,-99,0,-7,4,-16,0,-7,4,-98,0,-7,4,-16,0,-7,4,-98,0,-7,4,-16,0,-7,4,-99,0,-3,4,-22,0,-3,4,-366,0,-3,6,-4,4,6,-119,0,6,-9,4,-117,0,-12,4,-116,0,-12,4,-116,0,-12,4,-113,0,-3,26,-12,4,-3,26,-110,0,-3,26,-12,4,-3,26,-113,0,6,-10,4,6,-116,0,6,-10,4,6,-116,0,-2,6,-9,4,6,-117,0,-2,6,-8,4,-119,0,6,-4,4,-2,6,4,-392,0,12,-125,0,11,-3,12,-124,0,-4,12,11,-122,0,-6,12,-99,0,-3,5,-20,0,-6,12,11,-97,0,-5,5,-19,0,-8,12,-96,0,-5,5,-20,0,11,-6,12,-96,0,-5,5,-22,0,-3,12,11,-98,0,-3,5,-12566,0,-2,5,-101,0,-3,5,-22,0,-3,5,-99,0,-8,5,-14,0,-8,5,-98,0,-8,5,-14,0,-8,5,-98,0,-8,5,-14,0,-8,5,-99,0,-3,5,-22,0,-3,5,-366,0,-2,6,-4,4,-2,6,-119,0,-9,4,6,-117,0,-12,4,-116,0,-11,4,6,-116,0,-11,4,6,-113,0,-3,26,-12,4,-3,26,-110,0,-3,26,-12,4,-3,26,-113,0,6,-11,4,-116,0,6,-10,4,6,-116,0,-2,6,-9,4,6,-117,0,6,-9,4,-119,0,-4,4,-3,6,4,-519,0,11,-2,12,-125,0,-2,11,12,-124,0,-5,11,-98,0,-5,4,-20,0,12,-4,11,-98,0,4,-3,0,4,-22,0,-5,11,-96,0,4,-3,0,4,-23,0,-3,11,12,-96,0,4,-3,0,4,-24,0,-2,12,-97,0,-5,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-6,5,-10,0,-6,5,-3,3,5,-99,0,-3,3,-6,5,-10,0,-6,5,-3,3,-99,0,5,-3,3,-6,5,-10,0,-6,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-366,0,4,-2,6,-4,4,6,-119,0,-9,4,6,-117,0,-10,4,-2,6,-116,0,-12,4,-116,0,-12,4,-114,0,-2,26,-12,4,-2,26,-112,0,-2,26,4,6,-10,4,-2,26,-114,0,4,6,-10,4,-116,0,-2,6,-10,4,-116,0,-2,6,-10,4,-117,0,6,-9,4,-119,0,-3,4,-5,6,-647,0,-2,11,-125,0,-4,11,-99,0,4,-3,0,4,-21,0,-4,11,-126,0,-3,11,-126,0,-2,11,-225,0,4,-3,0,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-8,5,-6,0,-8,5,-3,3,5,-99,0,-3,3,-8,5,-6,0,-8,5,-3,3,-99,0,5,-3,3,-8,5,-6,0,-8,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-366,0,-8,4,-119,0,-9,4,6,-117,0,-11,4,6,-116,0,-11,4,6,-116,0,6,-10,4,6,-114,0,-2,26,-2,6,-10,4,-2,26,-112,0,-2,26,-2,6,-10,4,-2,26,-114,0,-2,6,-10,4,-116,0,-2,6,-9,4,6,-116,0,-2,6,-9,4,6,-117,0,6,-9,4,-119,0,-2,4,-6,6,-877,0,4,-3,0,4,-507,0,4,-3,0,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-10,5,-2,0,-10,5,-3,3,5,-99,0,-3,3,-10,5,-2,0,-10,5,-3,3,-99,0,5,-3,3,-10,5,-2,0,-10,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-367,0,-4,4,-2,6,-121,0,-6,4,-2,6,-119,0,-7,4,-3,6,-117,0,-12,4,-116,0,4,6,-10,4,-115,0,26,-2,6,-10,4,26,-114,0,26,-2,6,-10,4,26,-115,0,-2,6,-10,4,-116,0,6,-10,4,6,-117,0,-10,4,-119,0,6,-7,4,-121,0,-6,6,-751,0,-3,4,-124,0,-5,4,-122,0,-2,4,-3,0,-2,4,-121,0,-2,4,-3,0,-2,4,-121,0,-2,4,-3,0,-2,4,-122,0,-5,4,-124,0,-3,4,-12541,0,-3,5,-22,0,-3,5,-99,0,5,-3,3,-22,5,-3,3,5,-98,0,5,-3,3,-22,5,-3,3,5,-98,0,5,-3,3,-22,5,-3,3,5,-99,0,-3,5,-22,0,-3,5,-368,0,-3,4,6,-122,0,-6,4,-2,6,-119,0,-9,4,6,-118,0,-9,4,6,-117,0,-2,6,-9,4,6,-116,0,-2,6,-10,4,-116,0,6,-11,4,-116,0,6,-10,4,6,-117,0,-9,4,6,-118,0,-9,4,6,-119,0,4,6,-6,4,-122,0,-3,6,4,-880,0,-3,4,-124,0,4,-3,0,4,-123,0,4,-3,0,4,-123,0,4,-3,0,4,-124,0,-3,4,-12668,0,-5,4,0,4,0,4,0,4,0,4,0,-2,4,0,4,0,4,0,4,0,4,0,-5,4,-98,0,4,-3,7,-22,5,-3,7,4,-98,0,4,-28,7,4,-98,0,4,-3,7,-22,5,-3,7,4,-98,0,-5,4,0,4,0,4,0,4,0,4,0,-2,4,0,4,0,4,0,4,0,4,0,-5,4,-495,0,-3,4,6,-122,0,-6,4,-2,6,-120,0,-7,4,6,-119,0,-9,4,6,-118,0,6,-9,4,-118,0,6,-9,4,-118,0,-10,4,-119,0,-8,4,-120,0,-2,6,-6,4,-122,0,-3,6,4,-1008,0,-3,4,-124,0,4,-3,0,4,-123,0,4,-3,0,4,-123,0,4,-3,0,4,-124,0,-3,4,-12668,0,-30,4,-98,0,4,-28,0,4,-98,0,4,-28,0,4,-98,0,4,-28,0,4,-98,0,-30,4,-623,0,-4,4,-123,0,-5,4,6,-121,0,-2,4,-3,6,-3,4,-120,0,4,-5,6,-2,4,-120,0,-2,4,-4,6,-2,4,-120,0,-3,4,-2,6,-3,4,-121,0,-6,4,-123,0,-2,6,-2,4,-1137,0,4,-126,0,-3,4,-124,0,-5,4,-124,0,-3,4,-126,0,4,-12669,0,4,-3,0,4,-20,0,4,-3,0,4,-482,0,4,-3,0,4,-20,0,4,-3,0,4,-880,0,-2,6,-125,0,-4,6,-124,0,-4,6,-125,0,-2,6,-1521,0,-3,4,-125,0,-3,4,-125,0,-3,4,-12796,0,4,-3,0,4,-20,0,4,-3,0,4,-482,0,4,-3,0,4,-20,0,4,-3,0,4,-2787,0,-3,4,-125,0,-3,4,-125,0,-3,4,-12669,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-97,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-96,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-96,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-97,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-2789,0,4,-12926,0,-3,4,-22,0,-3,4,-99,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-99,0,-3,4,-22,0,-3,4,-2795,0,-2,14,-120,0,4,-2,14,-2,0,14,-2,0,14,-122,0,-2,14,-12794,0,-3,4,-22,0,-3,4,-99,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-99,0,-3,4,-22,0,-3,4,-2795,0,13,-121,0,4,-2,13,-2,0,13,-125,0,-2,13,-12795,0,4,-24,0,4,-101,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-101,0,4,-24,0,4,-2918,0,4,-2,12,-128,0,-2,12,-12922,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-3045,0,4,-13054,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-16229,0,4,-24,0,4,-16358,0,4,-24,0,4,-16236,0,-2,14,-23,0,-2,14,-95,0,4,-2,14,-2,0,14,-2,0,14,-16,0,4,-2,14,-2,0,14,-2,0,14,-97,0,-2,14,-23,0,-2,14,-16104,0,13,-24,0,13,-96,0,4,-2,13,-2,0,13,-19,0,4,-2,13,-2,0,13,-100,0,-2,13,-23,0,-2,13,-16226,0,4,-2,12,-22,0,4,-2,12,-103,0,-2,12,-23,0,-2,12,-16226,0,4,-24,0,4,-1435956,0],\"uuid\":\"75184B45-EE35-4715-8795-CBF43477C07B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4995126,7756116,9662817,10715503,13082230,15647642,16777215,16511542,6284153,4702084,3642478,4418392,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,4150124,11285042,14243683,14121914,9410378,9072432,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"bounds\":[39,87,37,90,0,40]}");

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[41,86,44,82,0,73],\"size\":[128,128,128],\"data\":[-5696,0,-4,3,-123,0,-6,3,-3,4,-118,0,-7,3,-3,2,-3,4,-114,0,-11,3,-3,2,-2,3,-110,0,-20,3,-106,0,-22,3,4,-103,0,-24,3,2,4,-100,0,-26,3,4,2,4,-98,0,6,-13,1,-13,3,-4,4,-96,0,-2,1,-8,0,-3,3,-3,1,-17,3,-94,0,2,1,-8,0,-5,3,-3,1,-16,3,-93,0,2,1,-9,0,-6,3,-3,1,-16,3,-91,0,-2,2,-10,0,-8,3,-2,1,-13,3,2,4,-90,0,5,1,-11,0,-6,3,1,-2,3,-2,1,-12,3,2,4,-90,0,1,-12,0,-10,3,1,-13,3,-2,4,-89,0,1,-12,0,-10,3,1,-13,3,2,4,-89,0,1,-12,0,-10,3,1,-13,3,2,4,-89,0,1,-13,0,-9,3,1,-15,3,4,-88,0,1,-13,0,3,1,-7,3,1,-15,3,4,-88,0,1,-14,0,1,-7,3,1,-16,3,-88,0,2,-14,0,1,-7,3,1,-16,3,-88,0,2,-15,0,-7,3,1,-16,3,-88,0,2,-16,0,-6,3,1,-15,3,-89,0,2,-18,0,-4,3,1,-15,3,-89,0,2,-18,0,-4,3,1,-14,3,4,-89,0,6,1,-16,0,-4,3,-2,1,-14,3,-91,0,2,1,-15,0,-4,3,1,-15,3,-92,0,2,1,-14,0,-3,3,1,-16,3,-93,0,-2,1,0,1,-11,0,-2,3,1,-16,3,-95,0,1,0,1,-11,0,-2,1,-17,3,-96,0,-14,1,-17,3,-98,0,-10,3,0,-18,3,-101,0,-26,3,-104,0,3,4,-20,3,4,-107,0,-2,4,-17,3,4,-110,0,4,-15,3,-113,0,4,-12,3,-116,0,-5,3,-4,4,-120,0,-4,4,-11772,0,-3,4,3,-123,0,4,-3,2,-5,3,-118,0,4,2,-10,3,4,-112,0,-16,3,4,-2,3,-111,0,-18,3,-112,0,-14,3,2,-2,3,-101,0,-2,6,-10,1,0,-12,3,-2,2,3,-98,0,-2,1,-11,0,-3,1,-12,3,2,-2,3,-96,0,5,1,-13,0,-3,1,-12,3,2,3,-95,0,5,1,-15,0,-3,1,-14,3,-93,0,-2,1,-18,0,-2,1,-13,3,-93,0,1,-19,0,3,1,-13,3,-92,0,5,-20,0,-2,3,1,-12,3,2,-91,0,5,-20,0,-2,3,1,-12,3,2,-91,0,6,-20,0,-2,3,1,-13,3,-91,0,1,-20,0,-2,3,1,-14,3,-90,0,1,-21,0,3,1,-14,3,-90,0,6,-20,0,-2,3,1,-12,3,4,3,-90,0,5,-18,0,-4,3,1,-12,3,-2,4,-90,0,5,-18,0,-4,3,1,-10,3,-3,4,2,-90,0,5,-17,0,-5,3,1,-10,3,-3,4,-91,0,5,-17,0,-5,3,1,-10,3,-3,4,-91,0,5,-16,0,-6,3,1,-10,3,-2,4,2,-92,0,1,-15,0,-5,3,1,-11,3,-2,4,-93,0,-2,1,-14,0,-5,3,1,-11,3,-2,4,-94,0,-2,1,-13,0,-4,3,1,-12,3,4,2,-95,0,2,1,-12,0,-3,3,1,-12,3,-2,4,-97,0,2,6,1,-11,0,-2,1,-13,3,4,2,-99,0,-2,5,-10,1,-15,3,2,-109,0,-18,3,-109,0,-18,3,-108,0,-19,3,-112,0,-15,3,-114,0,-9,3,-120,0,-4,3,-12284,0,2,-3,3,-121,0,-7,3,-3,2,4,-118,0,-10,3,4,-2,3,-117,0,-12,3,2,-113,0,-15,3,2,-102,0,6,-5,1,5,-7,1,-12,3,2,-100,0,2,-9,0,-5,3,1,-12,3,2,-98,0,2,-10,0,-6,3,1,-12,3,2,-96,0,2,-12,0,-6,3,1,-12,3,-95,0,1,-14,0,-18,3,-95,0,6,-15,0,-16,3,4,-95,0,6,-18,0,-14,3,4,-94,0,1,-17,0,-16,3,-94,0,1,-17,0,-3,3,1,-12,3,-94,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-18,0,-2,3,1,-12,3,-94,0,1,-16,0,-4,3,1,-12,3,-94,0,1,-15,0,-5,3,1,-12,3,-94,0,1,-15,0,-5,3,1,-11,3,-95,0,-2,1,-13,0,-6,3,1,-11,3,-96,0,1,-13,0,-5,3,1,-12,3,-97,0,1,-12,0,-4,3,1,-13,3,-98,0,1,-11,0,-3,3,1,-13,3,-100,0,1,6,5,-11,1,-13,3,-111,0,-16,3,-113,0,-12,3,-2,4,-113,0,-6,3,-4,2,3,-3,4,-114,0,-2,3,-4,2,-3,3,-3,4,-118,0,-4,3,-12925,0,-7,3,-119,0,4,-7,3,2,-3,3,-106,0,5,6,1,2,-3,5,2,-4,1,-7,3,2,-2,3,4,-103,0,5,1,-12,0,-2,1,-9,3,4,-94,0,16,-6,0,5,-16,0,1,-6,3,-2,2,3,4,-99,0,5,-18,0,1,-6,3,-2,2,3,4,-98,0,1,-18,0,1,-7,3,2,3,4,-97,0,1,-20,0,-10,3,-97,0,1,-20,0,-11,3,-96,0,1,-20,0,-8,3,2,-2,3,-96,0,1,-20,0,1,-8,3,2,3,-96,0,1,-20,0,1,-8,3,2,-2,3,-95,0,1,-20,0,1,-8,3,2,-2,3,-95,0,1,-20,0,1,-8,3,2,-2,3,-95,0,5,-20,0,1,-8,3,2,3,-96,0,5,-20,0,1,-7,3,2,-2,3,-96,0,5,-20,0,1,-10,3,-96,0,5,-20,0,1,-6,3,2,-2,3,-98,0,2,-18,0,1,-7,3,2,-2,3,-98,0,2,-18,0,1,-6,3,2,-2,3,4,-99,0,2,-16,0,1,-6,3,2,-2,3,4,-101,0,2,1,-12,0,-2,1,-6,3,2,-3,3,-104,0,2,-3,1,-3,2,-5,1,0,-6,3,2,-3,3,-115,0,-8,3,2,-3,3,-116,0,-9,3,-118,0,-6,3,-13307,0,-8,3,-128,0,3,-108,0,-14,1,-6,0,3,-98,0,16,-7,0,-2,1,-11,0,1,0,1,-6,0,3,-104,0,-2,1,-14,0,-2,1,-5,0,-2,3,-102,0,-2,1,-16,0,-2,1,-4,0,-3,3,-101,0,2,-18,0,1,-4,0,-3,3,-101,0,2,-18,0,1,-4,0,-4,3,-100,0,2,-18,0,1,-4,0,-3,3,4,-100,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,6,-18,0,1,-4,0,-3,3,4,-100,0,5,-18,0,1,-4,0,-4,3,-100,0,5,-18,0,1,-4,0,-3,3,-101,0,-2,1,-17,0,1,-4,0,-3,3,-102,0,-2,1,-14,0,-2,1,-5,0,3,4,-104,0,1,0,1,-11,0,-2,1,-6,0,4,-106,0,-2,1,-4,5,-3,1,-5,2,-6,0,4,-126,0,4,-119,0,-7,3,4,-13561,0,-2,3,-5,4,-123,0,3,-4,0,3,-108,0,5,-13,1,-6,0,3,-98,0,16,-7,0,-2,1,-13,0,1,-6,0,3,-104,0,-2,1,-15,0,1,-5,0,3,-103,0,2,1,-17,0,1,-4,0,3,4,-102,0,2,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-103,0,1,-16,0,1,-5,0,3,-105,0,1,-14,0,1,-6,0,4,-106,0,-2,1,-4,5,-4,1,-3,2,1,-6,0,4,-125,0,3,4,-119,0,-3,3,-2,2,-2,3,2,-13561,0,-2,3,-128,0,-4,4,-2,3,-108,0,-2,5,6,-11,1,-6,0,3,-98,0,16,-7,0,1,-14,0,1,-6,0,3,-104,0,1,-16,0,1,-5,0,3,-103,0,2,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-102,0,6,1,-18,0,1,-4,0,4,-102,0,6,1,-18,0,1,-4,0,4,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-104,0,1,-16,0,1,-5,0,3,-105,0,1,-13,0,-2,1,-6,0,3,-106,0,-2,1,-4,5,-5,1,2,-2,1,-6,0,3,-121,0,-6,3,-120,0,3,2,-13566,0,-2,3,-128,0,-2,4,-4,3,-108,0,-3,5,6,-10,1,-6,0,3,-98,0,16,-7,0,1,-14,0,1,-6,0,3,-104,0,1,-16,0,1,-5,0,3,-103,0,2,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,3,-104,0,1,-16,0,1,-5,0,3,-105,0,1,-14,0,1,-6,0,3,-106,0,6,2,-3,5,6,-7,1,2,-6,0,3,-121,0,-6,3,-120,0,-2,3,-13566,0,-2,3,-128,0,-5,3,2,-109,0,-3,5,2,-8,1,-7,0,2,-98,0,17,-7,0,2,-2,1,-11,0,-2,1,-5,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,6,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-106,0,2,1,-12,0,-2,1,-5,0,4,-108,0,6,-2,5,6,-5,1,6,-2,5,-5,0,3,0,4,-121,0,-6,3,-120,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-4,3,2,-99,0,17,-8,0,-2,1,-2,2,-6,1,2,-3,5,-6,0,3,-106,0,-2,1,-13,0,1,-5,0,3,-105,0,1,-15,0,-2,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,2,-104,0,3,1,-16,0,1,-4,0,2,-104,0,5,1,-16,0,1,-4,0,2,-104,0,3,1,-16,0,1,-4,0,2,-104,0,6,1,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-15,0,-2,1,-4,0,3,-106,0,1,-14,0,1,-5,0,3,-107,0,-2,1,-2,5,6,1,-4,2,1,-2,6,5,-6,0,4,-122,0,-2,4,-3,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-5,3,-99,0,15,-8,0,-11,1,2,-2,5,-6,0,3,-106,0,1,-14,0,1,-5,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,6,1,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-106,0,1,-14,0,1,-5,0,3,-107,0,-2,1,5,6,-3,1,-2,2,-5,1,-6,0,2,-122,0,4,-4,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-4,3,4,-99,0,16,-8,0,-13,1,5,-2,0,3,-2,0,-2,4,-106,0,1,-14,0,1,-2,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,6,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,2,-16,0,1,0,3,-2,0,3,-105,0,2,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,2,-106,0,1,-14,0,1,-2,0,3,-2,0,2,-107,0,-14,1,-2,0,3,-2,0,3,2,-122,0,-5,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,3,-103,0,16,-8,0,-14,1,-2,0,-3,3,-108,0,1,-14,0,1,-2,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,2,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-107,0,1,-14,0,1,-2,0,3,0,3,-108,0,-14,1,-2,0,-3,3,-124,0,3,-126,0,3,-125,0,-2,3,-13567,0,3,-128,0,3,-128,0,3,-103,0,16,-8,0,6,-4,1,-3,5,-6,1,-2,0,-3,3,-108,0,1,-2,0,-2,1,-10,0,1,-2,0,3,0,3,-106,0,2,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,5,-16,0,1,0,3,0,3,-107,0,6,-14,0,1,-2,0,3,0,3,-108,0,6,2,-12,1,-2,0,-3,3,-124,0,3,-126,0,3,-126,0,3,-13695,0,-2,3,-128,0,3,-103,0,17,-9,0,6,-2,1,-4,5,6,-4,1,-3,0,3,-2,4,-108,0,-2,5,-12,0,5,1,-2,0,-2,3,4,-107,0,5,-14,0,1,-2,0,3,0,4,-106,0,2,-15,0,-2,1,0,3,0,4,-106,0,1,-16,0,1,0,3,0,2,-105,0,6,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,5,-16,0,1,0,3,0,3,-107,0,1,-14,0,1,-2,0,3,0,3,-107,0,6,1,-12,0,-2,1,-2,0,3,0,4,-109,0,-2,2,-2,1,-2,2,1,6,-4,5,-3,0,-2,3,4,-124,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,3,-103,0,17,-24,0,3,-111,0,5,-12,1,5,-3,0,3,2,-108,0,5,1,-12,0,-2,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,3,2,-107,0,3,1,-14,0,1,-2,0,3,2,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,6,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,2,-14,0,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,-2,1,-12,0,-2,1,-2,0,-2,3,-109,0,1,-3,5,6,-4,1,6,-3,5,1,-3,0,-2,3,-125,0,3,-126,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-12,1,-2,5,-3,0,2,-109,0,1,-14,0,1,-2,0,3,2,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,5,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,6,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,2,-14,0,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,-2,1,-13,0,1,-2,0,-2,3,-109,0,1,-2,5,6,-6,1,6,-2,5,1,-3,0,3,-126,0,3,-126,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-11,1,-3,5,-3,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,2,-109,0,5,-14,0,1,-2,0,2,-109,0,5,-14,0,1,-2,0,2,-109,0,2,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,0,1,-12,0,1,-2,0,2,-110,0,1,5,6,-8,1,6,5,1,-3,0,3,-126,0,3,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-10,1,-4,5,-3,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,5,-14,0,1,-2,0,3,-109,0,6,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-110,0,1,6,-10,1,6,1,-3,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-111,0,2,-8,1,6,-4,5,-3,0,2,-109,0,2,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,5,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,2,-109,0,2,-14,0,1,-2,0,2,-110,0,2,-5,1,-2,2,-6,1,-3,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-112,0,-7,1,6,-4,5,-4,0,3,-110,0,5,-11,0,-2,1,-3,0,3,-109,0,-2,1,-13,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,6,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,2,1,-12,0,-2,1,-2,0,3,-110,0,5,1,-11,0,1,-3,0,2,-111,0,2,-3,1,-4,2,1,6,-2,5,-4,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,15,-24,0,3,-128,0,3,-110,0,-2,5,-12,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,5,-4,0,1,-7,0,1,-3,0,3,-110,0,-3,5,-2,2,-6,1,-2,2,1,-3,0,2,-127,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-128,0,3,-110,0,6,5,-10,1,6,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,6,-12,0,1,-3,0,3,-110,0,5,-5,0,1,-6,0,1,-3,0,3,-110,0,6,5,6,2,-8,1,2,1,-3,0,3,-127,0,3,-117,0,-2,11,-7,0,3,-117,0,-3,11,-6,0,2,-118,0,-3,11,-4,0,-2,3,-13822,0,3,2,-128,0,3,-103,0,16,-23,0,-2,3,-128,0,3,-111,0,5,-9,1,6,5,-4,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,5,-5,0,1,-6,0,1,-3,0,3,-111,0,5,-11,1,-4,0,3,-127,0,3,-116,0,-3,11,-6,0,-2,3,-117,0,-3,11,-6,0,3,-118,0,-3,11,-5,0,3,-13823,0,3,-128,0,3,-103,0,16,-23,0,-2,3,-127,0,-2,3,-111,0,5,-8,1,6,-2,5,-3,0,-2,3,-110,0,5,-12,0,1,-2,0,-2,3,-110,0,2,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,5,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,6,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,6,-6,0,1,-5,0,1,-2,0,-2,3,-111,0,6,-11,1,-3,0,-2,3,-126,0,-2,3,-116,0,-3,11,-6,0,-2,3,-117,0,-3,11,-6,0,3,-118,0,-3,11,-5,0,3,-13823,0,3,-128,0,3,-103,0,16,-23,0,-2,3,-127,0,3,4,-111,0,5,1,6,-2,5,-4,1,-3,5,-3,0,-2,3,-110,0,5,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,6,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,2,-12,0,2,-2,0,-2,3,-111,0,6,-11,1,-3,0,-2,3,-116,0,-3,3,-7,0,3,4,-115,0,3,-3,11,3,-5,0,-2,3,-116,0,3,-3,11,3,-5,0,3,-117,0,3,-3,11,3,-4,0,3,-119,0,-3,3,-13701,0,3,-128,0,3,-103,0,16,-23,0,3,-128,0,2,-112,0,5,1,-4,5,-2,1,-4,5,-3,0,2,-111,0,6,-2,1,-10,0,1,-2,0,2,-111,0,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,6,1,-12,0,1,-2,0,2,-111,0,1,-12,0,1,-2,0,2,-111,0,2,-12,0,1,-2,0,2,-111,0,2,-12,0,2,-2,0,2,-112,0,-11,1,2,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,6,-4,1,-5,0,3,-117,0,2,-3,0,6,-5,0,3,-117,0,5,-3,0,6,-4,0,3,-119,0,5,-2,6,-13701,0,3,-128,0,3,-103,0,17,-23,0,3,-128,0,2,-112,0,-12,12,-3,0,2,-111,0,12,-12,1,12,-2,0,2,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,2,-111,0,12,-12,1,12,-2,0,2,-112,0,-12,12,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,2,-4,1,-5,0,3,-117,0,1,-3,0,1,-5,0,3,-117,0,5,-3,0,6,-4,0,3,-118,0,-2,5,1,6,5,-13700,0,3,-128,0,3,-103,0,17,-23,0,3,-128,0,2,-112,0,-12,12,-3,0,2,-111,0,12,-12,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,-12,1,12,-2,0,2,-112,0,-12,12,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,-5,1,-5,0,3,-117,0,1,-3,0,1,-5,0,3,-117,0,1,-3,0,1,-4,0,3,-118,0,-5,1,-13700,0,3,-128,0,3,-103,0,16,-23,0,3,-128,0,2,-113,0,-10,12,-4,0,2,-112,0,12,-10,1,12,-3,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-9,0,-2,1,12,-2,0,3,-112,0,12,-10,1,12,-3,0,3,-113,0,-10,12,-4,0,2,-117,0,-3,1,-7,0,2,-116,0,-6,1,-4,0,3,-116,0,5,-5,0,1,-4,0,3,-116,0,1,-5,0,5,-3,0,3,-118,0,-4,1,5,-13680,0,2,-2,1,-4,2,-2,1,-11,0,3,-106,0,3,-4,1,-2,2,-3,1,-12,0,3,-103,0,16,0,3,-9,1,-12,0,3,-106,0,-2,2,-5,1,-2,2,-13,0,2,-127,0,3,-114,0,-8,1,-5,0,3,-113,0,2,-9,1,-4,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-112,0,6,1,-8,0,-2,1,-3,0,3,-113,0,6,-9,1,-4,0,3,-114,0,6,-6,1,-6,0,3,-115,0,-6,1,-6,0,3,-116,0,-6,1,-4,0,3,2,-115,0,5,-5,0,1,-4,0,3,-116,0,6,-5,0,1,-4,0,3,-116,0,1,-5,0,6,-3,0,3,-117,0,6,-4,1,6,5,-123,0,-3,5,-13427,0,6,-4,1,6,-119,0,2,-9,1,-2,5,-9,0,3,-103,0,-4,11,-11,1,-10,0,3,-102,0,-4,11,-11,1,-10,0,3,-105,0,3,5,2,-7,1,-2,2,-11,0,2,-127,0,3,-115,0,-6,1,-6,0,3,-113,0,2,-9,1,-4,0,3,-113,0,2,-8,0,1,-4,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,2,-8,0,1,-4,0,3,-113,0,-2,2,-6,1,0,1,-4,0,3,-115,0,2,-5,1,0,1,-4,0,3,-115,0,2,-5,1,-5,0,-2,3,-116,0,-6,1,-4,0,3,2,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-3,0,3,-117,0,-6,1,6,-122,0,6,2,-3,5,-13425,0,6,-7,1,-118,0,3,-11,1,5,6,-111,0,-4,11,-13,1,-8,0,3,-102,0,-4,11,-13,1,-8,0,3,-105,0,3,-2,5,-11,1,-9,0,3,-127,0,3,-127,0,3,-113,0,-10,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-7,0,-2,1,-4,0,3,-113,0,-10,1,-4,0,3,-115,0,1,-5,0,-2,1,-4,0,3,-115,0,-5,1,-7,0,3,-116,0,-6,1,-4,0,-2,3,-115,0,1,-4,0,-2,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,-6,1,6,-122,0,-2,1,-3,5,-13425,0,-7,1,2,-118,0,3,-9,1,2,-3,1,6,5,-109,0,-4,11,-15,1,-6,0,3,-103,0,-3,11,-15,1,-6,0,3,-105,0,3,-3,5,-12,1,-7,0,3,-127,0,3,-113,0,-10,1,-4,0,3,-112,0,5,-11,1,-3,0,3,-112,0,5,-10,0,1,-3,0,3,-112,0,6,-10,0,1,-3,0,3,-112,0,6,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,5,-11,1,-3,0,3,-113,0,-4,1,0,-5,1,-4,0,3,-117,0,-4,1,-6,0,3,-116,0,-6,1,-4,0,-2,3,-115,0,1,-4,0,-2,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,-6,1,2,-122,0,-2,1,2,-2,5,-13426,0,-5,1,2,-120,0,-8,1,-2,2,-5,1,5,-111,0,3,-16,1,-5,0,3,-103,0,15,0,3,-16,1,-5,0,3,-106,0,-4,5,-12,1,-6,0,3,-127,0,3,-113,0,-10,1,-4,0,3,9,-111,0,5,-11,1,-3,0,3,9,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,-12,1,-3,0,3,7,-111,0,9,-10,1,-4,0,3,9,-112,0,10,-2,0,-5,1,-6,0,3,-113,0,13,-3,0,-5,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,2,-5,1,2,-122,0,-3,1,-2,5,-13436,0,-2,2,6,-114,0,-2,6,-4,5,-4,1,2,-5,1,-111,0,1,6,-3,5,-12,1,-4,0,3,-103,0,17,-2,0,-18,1,-3,0,3,-107,0,-4,5,-12,1,-5,0,3,-127,0,3,9,-112,0,-10,1,-4,0,3,9,-111,0,2,-11,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,-12,1,-3,0,3,7,-111,0,9,-10,1,-4,0,3,7,-112,0,10,-2,0,-5,1,-6,0,3,9,-112,0,7,-7,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-2,1,-2,5,-13435,0,-2,2,-2,1,6,-118,0,5,-10,1,-116,0,-2,5,-10,1,-4,0,3,-103,0,17,-7,0,-13,1,-3,0,3,-112,0,-12,1,-4,0,3,-127,0,3,9,-112,0,-10,1,-4,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,7,-10,1,-4,0,3,7,-112,0,10,1,0,-5,1,-6,0,3,7,-112,0,7,-7,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-2,1,2,5,-13435,0,2,-3,1,5,-122,0,-7,1,-120,0,5,-7,1,-4,0,4,-103,0,16,-11,0,-9,1,-3,0,3,-115,0,-9,1,-4,0,3,-127,0,3,7,-112,0,-10,1,-4,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,7,-111,0,7,-10,1,-4,0,3,7,-112,0,10,-7,1,-6,0,3,7,-112,0,7,-2,1,-5,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,4,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,2,-3,1,5,-122,0,-7,1,-120,0,5,-7,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-116,0,-9,1,-3,0,3,-127,0,3,9,-113,0,-10,1,-3,0,3,9,-112,0,-2,1,-9,0,1,-2,0,3,7,-112,0,-2,1,-9,0,1,-2,0,3,7,-112,0,1,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,10,-112,0,1,-10,0,1,-2,0,3,7,-112,0,1,-10,0,1,-2,0,3,7,-112,0,7,-10,1,-3,0,3,7,-113,0,10,-7,1,-5,0,3,7,-113,0,7,-2,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,1,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,-3,1,-2,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,-12,1,-2,0,3,9,-112,0,1,-10,0,1,-2,0,3,7,-111,0,5,-2,1,-10,0,1,0,3,7,-111,0,6,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,5,-14,0,3,7,-111,0,9,1,-9,0,-2,1,-2,0,3,7,-111,0,-2,10,-10,1,-3,0,3,7,-112,0,13,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,5,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,2,-6,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,-3,1,-2,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,-12,1,-2,0,3,9,-111,0,1,-11,0,-2,1,0,3,7,-111,0,6,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,6,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-111,0,1,-11,0,-2,1,0,3,7,-111,0,9,1,-9,0,-2,1,-2,0,3,7,-111,0,10,-11,1,-3,0,3,7,-112,0,7,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,5,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,2,-6,1,-122,0,-5,1,-13435,0,-2,1,-3,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,1,-3,0,-8,1,-2,0,3,7,-111,0,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-110,0,2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,6,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-111,0,9,-10,0,-2,1,-2,0,3,7,-111,0,10,1,-3,0,-7,1,-3,0,3,9,-112,0,7,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,1,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,-7,1,-122,0,6,-3,1,2,-13435,0,6,1,-3,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,17,-11,0,-9,1,-2,0,2,-115,0,-10,1,-3,0,2,-113,0,1,-3,0,-8,1,-2,0,3,7,-111,0,1,-12,0,1,0,3,10,-110,0,5,1,-12,0,1,0,3,10,-110,0,5,1,-12,0,1,0,3,10,-110,0,-2,1,-12,0,1,0,3,10,-110,0,-2,1,-12,0,1,0,3,9,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,2,1,-12,0,1,0,3,7,-111,0,10,-10,0,-2,1,-2,0,3,7,-111,0,10,1,-3,0,-7,1,-3,0,3,9,-111,0,-2,7,-3,1,-5,0,1,-3,0,3,2,-116,0,1,-5,0,1,-3,0,2,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,-7,1,-122,0,6,-2,1,2,5,-13436,0,6,-2,5,-123,0,5,-6,1,-120,0,5,-7,1,-2,0,3,-105,0,16,-11,0,-9,1,0,3,-116,0,-10,1,-2,0,3,-114,0,1,-3,0,-8,1,0,3,7,-112,0,5,-12,0,1,3,7,-111,0,5,1,-12,0,1,3,10,-111,0,5,1,-12,0,1,3,10,-111,0,2,1,-12,0,1,3,9,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,2,1,-12,0,1,3,10,-111,0,2,1,-12,0,1,3,10,-112,0,10,-11,0,1,0,3,7,-112,0,7,1,-3,0,-7,1,-2,0,3,9,-112,0,7,9,-3,1,-5,0,1,0,1,-2,3,-117,0,1,-5,0,1,-2,0,3,-118,0,1,-5,0,1,-2,0,3,-118,0,-7,1,-121,0,5,-6,1,-123,0,6,-2,5,-13564,0,-4,1,2,-122,0,2,1,-2,0,-2,1,5,-2,0,3,-105,0,16,-11,0,2,0,-6,1,5,0,3,-116,0,-10,1,-2,0,3,-114,0,1,-3,0,-8,1,0,3,7,-112,0,5,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,10,-11,0,1,0,3,10,-112,0,7,1,-3,0,-7,1,-2,0,3,9,-112,0,-2,9,-3,1,-5,0,1,0,1,-2,3,-117,0,2,-5,0,1,-2,0,3,-118,0,1,-5,0,1,-2,0,3,-118,0,5,-5,1,5,-122,0,6,-3,1,5,-13692,0,-2,1,2,-124,0,-5,1,-3,0,3,-105,0,16,-12,0,-7,1,-2,0,3,-116,0,-10,1,-2,0,3,-114,0,6,-3,0,-8,1,0,3,9,-113,0,6,-11,0,1,3,7,-112,0,5,-12,0,1,3,7,-112,0,5,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,2,1,-11,0,1,3,7,-112,0,10,1,-10,0,1,0,3,7,-112,0,7,-2,1,-2,0,-7,1,-2,0,3,7,-112,0,-2,9,-3,1,-5,0,1,-2,0,-2,3,-117,0,2,-5,0,1,-2,0,3,-118,0,2,-4,0,1,5,-2,0,3,-119,0,-5,1,-124,0,6,1,5,-13561,0,3,-8,0,3,-118,0,3,-8,0,3,-117,0,3,-10,0,8,-106,0,16,-9,0,3,-4,0,-3,1,-3,0,8,3,-115,0,3,-2,0,-2,1,-6,0,-2,3,9,-115,0,-4,1,-5,0,-4,3,9,-113,0,2,-11,1,-2,3,9,-113,0,1,-10,0,1,-2,3,10,-113,0,1,-10,0,1,-2,3,10,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,10,-113,0,5,-9,0,-2,1,-2,3,10,-112,0,7,1,-3,0,-7,1,-3,3,9,-112,0,-2,7,-3,1,-5,0,1,0,-3,3,9,-112,0,13,3,-3,1,-5,0,1,0,-2,3,7,-114,0,3,-2,0,2,-5,0,1,0,8,3,-115,0,3,-3,0,-5,1,-2,0,8,-117,0,3,-3,0,-3,1,-2,0,3,-118,0,3,-8,0,3,-13303,0,-8,3,-120,0,-8,3,-120,0,-8,3,-120,0,-8,3,-119,0,3,-8,0,3,-107,0,16,-10,0,3,-8,0,3,-118,0,3,-8,0,3,7,9,-116,0,-3,1,-6,0,-2,3,7,9,-114,0,5,-3,0,-6,1,-3,3,7,-114,0,2,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,-2,1,-9,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,5,-10,0,-2,3,7,-114,0,5,-10,0,-2,3,7,-113,0,10,1,-3,0,-6,1,-3,3,7,-114,0,7,-3,1,-6,0,-2,3,-2,7,-114,0,7,3,-8,0,3,7,10,-116,0,3,-8,0,3,-118,0,-2,3,-7,0,3,-119,0,-8,3,-120,0,-8,3,-120,0,3,-7,0,3,-119,0,3,-7,0,3,-12920,0,-6,3,-122,0,-7,3,-121,0,-6,3,-123,0,-4,5,-123,0,-6,3,-121,0,-8,3,-108,0,16,-11,0,-8,3,-120,0,3,-6,0,3,7,-119,0,3,-6,0,3,-2,7,-117,0,1,3,1,-5,0,3,-3,7,-116,0,1,3,-6,1,-2,3,7,9,-116,0,1,3,-7,0,3,-2,7,-116,0,1,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,1,-8,0,3,7,10,-116,0,6,-8,0,3,-2,7,-116,0,6,3,-6,1,-2,3,-2,7,-115,0,10,1,-8,3,-3,7,-116,0,7,-8,3,-2,7,-117,0,10,-8,3,10,-119,0,-8,3,-120,0,-8,3,-121,0,-6,3,-123,0,-4,5,-123,0,-7,3,-121,0,-7,3,-121,0,3,-5,0,-2,3,-12665,0,-4,3,-123,0,-6,3,-124,0,5,1,-125,0,-3,5,1,-124,0,-4,5,-124,0,-4,5,-238,0,15,-12,0,-6,3,-122,0,-6,3,7,-121,0,-6,3,-2,7,-120,0,-6,3,-2,7,13,-119,0,-7,3,-2,7,10,-118,0,-2,3,-2,11,-3,3,-2,7,9,-117,0,3,-5,11,-2,3,-3,7,-116,0,3,-7,11,3,-2,7,10,-117,0,-7,11,3,-2,7,10,-116,0,3,-7,11,3,-2,7,10,-117,0,3,-5,11,-2,3,-2,7,9,-117,0,1,-2,3,-2,11,-3,3,-3,7,-118,0,-7,3,-2,7,10,-116,0,-2,7,-6,3,-2,7,13,-118,0,7,-6,3,-2,7,-119,0,9,7,-5,3,7,-121,0,-6,3,-251,0,-4,5,-124,0,1,-3,5,-124,0,1,-3,5,-125,0,-2,5,-124,0,-7,3,-122,0,-5,3,-12539,0,-4,3,-878,0,17,-270,0,-2,9,-2,7,10,-122,0,9,-5,7,10,-120,0,13,7,-2,3,-2,0,-2,7,9,-119,0,-2,3,-2,11,3,-2,0,-3,7,-117,0,3,-5,11,3,0,-3,7,-118,0,-6,11,3,-3,7,-118,0,-6,11,3,-3,7,-118,0,-6,11,3,-3,7,-117,0,3,-5,11,3,0,-3,7,-118,0,-2,3,-2,11,3,-2,0,-3,7,-118,0,-8,7,13,-119,0,-8,7,-120,0,-7,7,-122,0,9,-4,7,9,-1018,0,-5,3,-13421,0,16,-271,0,-3,7,-124,0,-5,7,-122,0,-8,7,-119,0,7,0,-2,7,-3,0,-3,7,-120,0,-2,11,-3,0,-3,7,-119,0,-4,11,-2,0,-3,7,-119,0,-4,11,-2,0,-3,7,-119,0,-4,11,-2,0,-3,7,-120,0,-2,11,-6,7,-121,0,-7,7,-118,0,-9,7,-120,0,-7,7,-122,0,-5,10,-14572,0,16,-271,0,-3,7,-124,0,-5,7,-122,0,7,-4,0,-3,7,-119,0,7,0,-8,7,-120,0,-8,7,-120,0,-2,11,-4,0,-2,7,-120,0,-2,11,-3,0,-3,7,-120,0,-2,11,-4,0,-2,7,-121,0,-3,7,-2,0,-2,7,-122,0,-6,7,-118,0,-9,7,-120,0,-7,7,-122,0,7,-3,10,7,-14572,0,16,-271,0,10,-2,7,-124,0,-5,7,-122,0,7,-3,0,-4,7,-119,0,7,-3,0,-6,7,-120,0,-3,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-120,0,-3,11,-3,0,-2,7,-122,0,-6,7,-118,0,9,-8,7,-120,0,-7,7,-122,0,9,-4,7,-14572,0,16,-271,0,-2,10,9,-124,0,9,-4,7,-122,0,7,-4,0,-3,7,-119,0,7,0,-3,11,-2,0,-2,7,10,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-120,0,-3,11,0,-4,7,-118,0,9,-7,7,10,-121,0,-4,7,10,7,-123,0,9,-2,7,-14573,0,16,-398,0,-2,9,-3,7,-122,0,7,-3,11,0,-3,7,-119,0,7,-5,11,0,-2,7,10,-119,0,-6,11,0,7,9,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-118,0,9,-5,11,0,-3,7,-119,0,7,-3,11,-4,7,-121,0,-5,7,10,-14699,0,16,-398,0,-5,7,-122,0,7,-4,11,-3,7,-119,0,7,-6,11,-2,7,10,-119,0,-7,11,7,9,-119,0,-7,11,7,9,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-118,0,7,-6,11,-2,7,10,-119,0,7,-4,11,-3,7,-121,0,-5,7,10,-14699,0,17,-398,0,-4,7,9,-122,0,10,-4,11,-3,7,-119,0,7,-6,11,-2,7,-120,0,-7,11,7,10,-119,0,-7,11,7,10,-119,0,-7,11,7,10,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-118,0,10,-6,11,7,13,-120,0,7,-4,11,-3,7,-121,0,-5,7,10,-14699,0,15,-398,0,-2,7,-2,9,10,-122,0,7,-4,11,13,-122,0,10,-5,11,7,10,-119,0,7,-7,11,7,-120,0,-7,11,7,-120,0,-7,11,7,-120,0,-7,11,7,-119,0,10,-7,11,7,-120,0,7,-5,11,-2,7,-120,0,10,-4,11,7,-123,0,-5,9,-14700,0,14,-399,0,7,-2,10,-124,0,7,-2,11,-2,7,-122,0,7,-4,11,7,13,-121,0,7,-5,11,7,10,-119,0,7,-7,11,7,-120,0,-7,11,7,-119,0,10,-7,11,7,-120,0,7,-5,11,-2,7,-120,0,10,-4,11,-2,7,-122,0,7,-2,11,-2,7,-124,0,-3,10,-14573,0,14,-126,0,-2,15,14,-12,0,-2,6,-4,3,-108,0,15,-12,0,6,1,-6,3,-119,0,6,1,-8,3,-117,0,6,1,-10,3,-116,0,6,-12,3,-115,0,-5,3,-3,11,-5,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-5,3,-3,11,-5,3,-115,0,-13,3,-116,0,-11,3,-118,0,-9,3,-120,0,-7,3,-122,0,-2,1,-3,3,-14060,0,14,-126,0,-3,15,-12,0,-3,5,-2,6,2,-106,0,14,15,16,-2,15,-10,0,5,-6,0,3,-106,0,17,-2,15,-10,0,5,-8,0,3,-106,0,15,-10,0,5,-4,0,-3,12,-3,0,3,-115,0,5,-4,0,12,-3,3,12,-3,0,2,-114,0,5,-3,0,-2,12,-3,3,-2,12,-3,0,2,-113,0,3,-2,0,-2,12,-5,3,-2,12,-2,0,2,-113,0,3,-2,0,12,-7,3,12,-2,0,2,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,-2,12,-5,3,-2,12,-2,0,3,-113,0,3,-3,0,-2,12,-3,3,-2,12,-3,0,3,-114,0,6,-3,0,12,-3,3,12,-3,0,3,-116,0,5,-3,0,-3,12,-3,0,3,-118,0,5,-7,0,3,-120,0,1,-5,0,3,-122,0,-3,1,-2,3,-13930,0,17,-4,16,-123,0,-5,16,-123,0,-5,16,-123,0,17,-3,16,17,-123,0,17,-3,16,17,-141,0,-3,12,-125,0,12,3,12,-124,0,12,-3,3,12,-122,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-122,0,12,-3,3,12,-124,0,12,3,12,-125,0,-3,12,-14316,0,17,-2,16,-125,0,-3,16,-125,0,-2,16,17,-125,0,-3,16,-125,0,-2,16,17,-125,0,-3,16,-125,0,17,-2,16,-142,0,3,-2,1,-124,0,-4,3,2,-123,0,-4,3,2,-123,0,-5,3,-123,0,-5,3,-123,0,-5,3,-123,0,1,-4,3,-123,0,1,-3,3,1,-124,0,-2,3,1,-14316,0,-3,16,-125,0,-3,16,-125,0,17,-2,16,-126,0,15,-126,0,-2,16,17,-126,0,16,-126,0,15,-2,16,-125,0,-3,16,-125,0,-3,16,-141,0,-4,3,1,-123,0,1,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,5,-123,0,-4,3,6,-123,0,-5,3,-124,0,-2,3,1,-14316,0,16,-2,17,-125,0,-2,16,17,-125,0,17,-2,16,-254,0,17,-126,0,17,16,17,-126,0,16,-254,0,15,-2,16,-125,0,-3,16,-125,0,17,16,17,-13,0,1,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,6,-123,0,2,-4,3,-124,0,-3,3,-125,0,-3,3,-14829,0,17,-126,0,17,16,17,-126,0,16,-399,0,-3,3,-124,0,-5,3,-123,0,-5,3,-123,0,-5,3,-123,0,2,-4,3,-124,0,-3,3,-125,0,-3,3,-14957,0,17,-126,0,17,16,17,-126,0,16,-399,0,-3,3,-125,0,-3,3,-124,0,-5,3,-123,0,2,-4,3,-124,0,-3,3,-125,0,-2,3,2,-125,0,-2,3,2,-14957,0,16,-126,0,17,-2,16,-126,0,16,-271,0,-3,3,-125,0,-3,3,-125,0,1,3,1,-125,0,5,3,5,-125,0,5,3,6,-125,0,-2,3,2,-125,0,-2,3,2,-15085,0,15,-126,0,15,16,14,-126,0,15,-271,0,-3,3,-125,0,1,3,5,-124,0,-2,5,3,-2,5,-124,0,5,3,6,-125,0,-3,3,-125,0,-2,3,2,-14828,0,-2,17,16,-14,0,5,6,3,-108,0,-3,16,-125,0,-2,16,17,-126,0,15,-126,0,14,16,15,-126,0,14,-126,0,-3,16,-14,0,-3,3,-108,0,17,-2,16,-14,0,5,3,5,-108,0,-3,17,-13,0,-2,5,3,-2,5,-124,0,5,3,1,-125,0,-3,3,-125,0,-3,3,-15101,0,-2,3,1,-108,0,17,-2,16,-14,0,-3,3,-108,0,-2,16,15,-14,0,-3,3,-108,0,15,-2,16,-125,0,-2,16,15,-14,0,-3,3,-108,0,17,-2,16,-14,0,6,3,1,-124,0,-2,5,3,-2,5,-124,0,5,3,5,-125,0,-3,3,-125,0,-3,3,-15469,0,14,-15,0,-3,3,-108,0,-3,14,-14,0,1,-2,3,-109,0,14,-15,0,6,3,6,-125,0,5,3,5,-125,0,5,3,5,-125,0,-3,3,-125,0,-3,3,-15725,0,14,-15,0,-3,3,-125,0,-3,3,-125,0,-3,3,-125,0,-3,3,-125,0,-3,3,-893506,0],\"uuid\":\"C4E0CFD1-227D-4C27-8038-65D60F3231F9\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[11141120,8912896,7798784,5570560,14483456,12255232,8947848,4456448,7829367,11184810,13395507,1118481,5592405,13382400,16737792,13408512,16750848],\"bounds\":[41,86,44,82,0,73]}");

/***/ }),
/* 46 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[50,76,51,76,8,54],\"size\":[128,128,128],\"data\":[-137669,0,-3,6,-126,0,-2,6,-126,0,-2,6,-126,0,6,-127,0,6,-1663,0,-2,1,-125,0,-4,1,-124,0,-4,1,6,-124,0,-3,1,6,-125,0,-3,6,-13819,0,-2,6,-126,0,-2,6,-126,0,-2,6,-126,0,6,-1535,0,1,-126,0,-3,1,-126,0,-3,1,-126,0,-2,1,-14205,0,1,-127,0,-2,1,-126,0,-2,1,-126,0,1,-1406,0,-3,1,-125,0,-3,1,-125,0,-4,1,-126,0,1,-14206,0,1,-127,0,-2,1,-126,0,-2,1,-126,0,-2,1,-1406,0,-2,1,-125,0,1,-2,8,1,-124,0,1,8,1,-126,0,1,-14207,0,1,-126,0,-3,1,-125,0,-3,1,-125,0,-3,1,-1406,0,8,-126,0,-3,8,-126,0,-2,8,-14461,0,-3,1,-125,0,-3,1,-125,0,-2,1,8,-1272,0,2,-8,0,2,-118,0,2,-4,0,-2,8,-2,0,2,-118,0,2,-4,0,-3,8,0,2,-118,0,2,-5,0,-2,8,0,2,-118,0,2,-8,0,2,-118,0,2,-8,0,2,-105,0,-3,1,-14223,0,-3,8,-125,0,-3,8,-126,0,-2,8,-888,0,2,-8,0,3,-118,0,2,-8,0,3,-119,0,6,-7,0,6,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-106,0,-3,1,-14222,0,-2,8,-126,0,-3,8,-125,0,-3,8,-760,0,2,-8,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-107,0,-3,1,-14349,0,-3,8,-125,0,-3,8,-125,0,-3,8,-633,0,3,-7,0,3,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-108,0,-3,1,-14348,0,-3,8,-125,0,-3,8,-125,0,-3,8,-633,0,3,-7,0,3,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-109,0,-3,1,-14347,0,-2,8,-126,0,-3,8,-125,0,-3,8,-125,0,-3,8,-505,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-2,0,-2,8,-3,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-110,0,-3,1,-14474,0,-3,8,-125,0,-3,8,-125,0,-3,8,-125,0,-2,8,-378,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-2,0,-3,8,-2,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-111,0,-3,1,-14473,0,-2,8,-125,0,-4,8,-124,0,-4,8,-125,0,-3,8,-377,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-3,0,-2,8,-2,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-112,0,-3,1,-14599,0,-4,8,-124,0,-5,8,-123,0,-5,8,-124,0,-3,8,-249,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-113,0,-3,1,-14599,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-124,0,-3,8,-121,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-114,0,-3,1,-14725,0,-4,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,-3,0,-3,8,0,3,-119,0,6,-7,0,6,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-115,0,-3,1,-14725,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,-2,0,-5,8,3,-119,0,6,-3,0,-3,8,0,6,-119,0,1,-7,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-5,8,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,2,-3,0,-2,8,-2,0,2,-114,0,-4,7,0,2,-7,0,2,-116,0,-3,1,-14467,0,-3,8,-125,0,-3,8,-126,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,0,-6,8,3,-119,0,6,0,-5,8,0,6,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-6,8,2,-115,0,-2,7,-2,0,2,-2,0,-4,8,0,2,-114,0,-4,7,0,2,-7,0,2,-114,0,-4,7,0,2,-7,0,2,-115,0,-2,7,-3,1,-123,0,-2,7,-14341,0,-3,8,-125,0,-3,8,-126,0,8,-127,0,-3,8,-124,0,-5,8,-122,0,-6,8,-120,0,3,0,-6,8,3,-119,0,1,0,-5,8,0,1,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-5,8,0,2,-119,0,2,0,-6,8,2,-114,0,-4,7,0,2,-3,0,-2,8,-2,0,2,-114,0,-4,7,0,2,-7,0,2,-114,0,-4,7,-3,1,-122,0,-2,7,-14214,0,-2,4,-125,0,4,-2,8,4,-124,0,4,8,0,4,-124,0,4,-2,0,4,-125,0,-2,4,-125,0,-5,8,-122,0,-6,8,-120,0,3,0,-6,8,3,-119,0,1,0,-5,8,0,1,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-5,8,0,2,-119,0,2,0,-6,8,2,-115,0,-2,7,-2,0,2,-2,0,-4,8,0,2,-114,0,-4,7,-2,0,2,-6,0,2,-114,0,-4,7,0,-3,1,-121,0,-2,7,-14214,0,-2,5,-125,0,5,-2,6,5,-124,0,5,6,0,5,-124,0,5,-2,0,5,-125,0,-2,5,-125,0,-4,8,-123,0,-6,8,-121,0,2,-6,8,3,-120,0,1,-5,8,0,1,-120,0,1,-5,8,0,1,-120,0,1,-6,8,1,-120,0,1,-5,8,0,1,-120,0,2,-5,8,0,2,-120,0,2,-6,8,2,-120,0,2,0,-4,8,-2,2,-114,0,-4,7,-2,0,2,-5,0,2,-115,0,-4,7,-2,0,-3,1,-119,0,-4,7,-125,0,-2,7,-14086,0,-2,6,-125,0,-4,6,-124,0,-2,6,0,6,-124,0,6,-2,0,6,-124,0,-3,6,-126,0,-3,8,-124,0,-2,8,1,8,2,-121,0,2,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,2,-121,0,2,-5,8,2,-121,0,2,0,-4,8,2,-121,0,-2,2,-4,0,2,-116,0,-2,7,-4,0,-5,2,-116,0,-4,7,-3,0,-2,1,-2,5,-117,0,-4,7,-124,0,-4,7,-14085,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-3,6,-125,0,2,-4,1,-123,0,2,-3,1,2,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,2,-122,0,2,0,-3,8,2,-122,0,2,0,-3,8,2,-123,0,-4,2,-116,0,-4,7,-124,0,-4,7,-4,0,-3,5,-117,0,-4,7,-124,0,-4,7,-14213,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-126,0,2,-126,0,-3,2,-124,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,-5,2,-244,0,-3,7,-2,0,-3,6,-119,0,-4,7,-2,0,-2,6,-2,5,-2,9,-116,0,-4,7,-3,0,-3,6,-118,0,-4,7,-14213,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-252,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-125,0,-3,2,-245,0,-4,7,-4,6,-120,0,-4,7,-5,6,-3,9,8,-115,0,-4,7,0,-5,6,5,-2,4,-115,0,-4,7,-2,0,-4,6,-2,5,-116,0,-3,7,-14085,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-252,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-248,0,-3,6,-122,0,-4,7,-5,6,-3,0,8,-115,0,-4,7,-6,6,-3,9,8,-114,0,-4,7,-6,6,-2,5,8,-115,0,-4,7,0,-5,6,-2,5,4,-115,0,-4,7,-3,0,-4,6,-14077,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-125,0,-2,6,-126,0,-2,5,-125,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-125,0,-2,5,-249,0,-3,6,-123,0,-3,7,-2,6,-7,0,8,-114,0,-4,7,-2,6,0,-2,6,-2,0,-3,9,8,-113,0,-4,7,-7,6,0,4,8,-114,0,-4,7,-3,0,-4,6,0,4,-116,0,-3,7,-14212,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-125,0,-2,4,-125,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-125,0,-2,4,-250,0,-3,6,-124,0,-4,6,-123,0,-4,7,6,-5,0,-3,9,-115,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14083,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-3,1,-125,0,-4,1,-124,0,-5,1,-123,0,-5,1,-123,0,-5,1,-123,0,-4,1,-124,0,-3,1,-250,0,-3,6,-125,0,-4,6,-122,0,-4,7,-2,6,-5,0,-3,9,-114,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14083,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-2,6,-2,1,-124,0,6,-3,1,-123,0,-5,1,6,-122,0,-5,1,-2,6,-121,0,-5,1,-2,6,-121,0,-5,1,-2,6,-121,0,-5,1,6,-123,0,-4,1,-124,0,6,-3,1,-122,0,-5,6,-122,0,-6,6,-120,0,-4,7,-3,6,-5,0,-3,9,-113,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14082,0,-2,6,-125,0,-4,6,-124,0,6,-3,1,-124,0,6,-3,1,-124,0,-3,6,1,-123,0,-7,6,-121,0,-7,6,-121,0,-7,6,-121,0,-7,6,-121,0,-7,6,-122,0,-3,6,1,-124,0,6,-3,1,-123,0,-4,6,1,-122,0,-5,6,-121,0,-3,7,-3,6,-6,0,-2,9,-113,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14082,0,-2,6,-125,0,-4,6,-124,0,6,-3,1,-124,0,-3,6,1,-123,0,-7,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-121,0,-7,6,-122,0,-3,6,1,-123,0,-4,6,1,-123,0,-4,6,-121,0,-4,7,-2,6,-122,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14210,0,-2,6,-125,0,-4,6,-123,0,-6,6,-121,0,-8,6,-120,0,-7,6,-121,0,-3,6,-2,4,-2,1,-121,0,-3,6,-2,4,-2,1,-121,0,-3,6,-2,4,-2,1,-121,0,-7,6,-121,0,-8,6,-121,0,-7,6,-122,0,-4,6,-124,0,-3,6,-121,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14337,0,-2,6,-124,0,-6,6,-121,0,-7,6,-121,0,-3,6,-2,4,1,4,-121,0,-3,6,-3,4,-122,0,-3,6,-3,4,-122,0,-3,6,-3,4,-122,0,-3,6,-4,4,-121,0,-7,6,-122,0,-6,6,-124,0,-2,6,-249,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14592,0,-3,6,-124,0,-2,6,-3,4,-123,0,6,-2,4,8,-124,0,6,-2,4,8,-124,0,6,-2,4,8,-124,0,-2,6,-3,4,-124,0,-3,6,-506,0,-3,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14720,0,-3,4,-125,0,4,-2,8,-125,0,4,-2,8,-125,0,4,-2,8,-125,0,-3,4,-634,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14592,0,-2,7,-125,0,7,-3,8,-124,0,7,-4,8,-123,0,7,-4,8,-123,0,7,-3,8,-124,0,7,-2,8,7,-125,0,-2,7,-507,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14463,0,-3,7,-124,0,-3,7,-2,8,-122,0,-2,7,-5,8,-121,0,-2,7,-5,8,-121,0,-2,7,-5,8,-121,0,-2,7,-4,8,-122,0,-2,7,-3,8,7,-123,0,-4,7,-506,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14211,0,7,-123,0,-4,7,0,7,-121,0,-5,7,-122,0,-5,7,-2,8,-120,0,-3,7,-5,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-121,0,-2,7,-3,8,-2,7,-121,0,-6,7,-124,0,-2,7,-379,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14334,0,-6,7,-121,0,-8,7,-119,0,-6,7,-2,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-120,0,-7,7,-122,0,-4,7,-250,0,-3,7,-126,0,-3,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14334,0,-6,7,-121,0,-8,7,-119,0,-6,7,-2,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-119,0,-2,7,-5,8,-2,7,-120,0,-7,7,-122,0,-4,7,-251,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-14335,0,-4,7,-122,0,-7,7,-121,0,-5,7,8,-2,7,-119,0,-3,7,-5,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-119,0,-2,7,-5,8,-2,7,-120,0,-2,7,-3,8,-2,7,-121,0,-6,7,-123,0,-4,7,-251,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14589,0,-5,7,-122,0,-7,7,-121,0,-2,7,-2,8,-4,7,-120,0,-2,7,-3,8,-3,7,-120,0,-2,7,-3,8,-3,7,-120,0,-2,7,-3,8,-2,7,-121,0,-2,7,-2,8,-2,7,-123,0,-4,7,-126,0,5,-252,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-14718,0,-4,7,-123,0,-6,7,-122,0,-6,7,-122,0,-6,7,-123,0,-4,7,-124,0,5,-2,7,5,-123,0,-6,5,-123,0,5,0,7,5,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-15485,0,-2,5,-125,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-15614,0,-2,7,-125,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-15870,0,-2,7,-126,0,-2,7,-126,0,-2,7,-126,0,-2,7,-1203131,0],\"uuid\":\"F02050FE-4200-47B8-877A-2105B74D5E66\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[13260,170,187,10053120,13408512,3381759,43520,16764006,13158],\"bounds\":[50,76,51,76,8,54]}");

/***/ }),
/* 47 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[59,68,55,72,0,47],\"size\":[128,128,128],\"data\":[-7102,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-120,0,-3,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-118,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-119,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-121,0,-6,9,-123,0,-4,9,-14204,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-118,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-2,0,-5,4,-119,0,-2,9,-2,0,-5,4,-119,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-121,0,-6,9,-123,0,-4,9,-14204,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,5,-121,0,-2,9,-2,0,5,6,5,-120,0,-3,9,-3,0,5,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,-3,0,5,-122,0,-2,9,-2,0,5,6,5,-121,0,-2,9,-2,0,-3,5,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,12,-121,0,-6,9,-123,0,-4,9,-14205,0,-3,9,-123,0,-6,9,-121,0,-2,9,-4,0,12,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,12,-122,0,-6,9,-124,0,-3,9,-14205,0,-2,9,-124,0,-6,9,-121,0,-2,9,-4,0,11,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,11,-122,0,-6,9,-124,0,-2,9,-14206,0,9,-125,0,-6,9,-122,0,9,-4,0,11,-122,0,9,-4,0,9,11,-120,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,9,11,-121,0,9,-4,0,11,-122,0,-6,9,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,11,-121,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,11,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-121,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14333,0,-5,9,12,-122,0,9,-4,0,11,-122,0,9,-4,0,11,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,11,-122,0,9,-4,0,11,-122,0,-5,9,12,-14458,0,-5,9,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-122,0,-2,9,-126,0,-2,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,-5,9,12,-14458,0,-6,9,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,9,-121,0,-2,9,-2,0,6,-2,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-3,0,5,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-3,0,5,6,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,6,-2,5,-122,0,9,-4,0,9,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,-6,9,-14332,0,9,-125,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,12,-122,0,9,-3,0,5,9,-122,0,9,-2,0,5,-2,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-3,6,-122,0,9,-2,0,5,-2,6,-122,0,9,-3,0,5,9,-122,0,9,-4,0,12,-122,0,9,-4,0,9,-122,0,-6,9,-124,0,9,-14207,0,9,-125,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,0,-3,5,12,-122,0,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-122,0,9,-2,0,-2,6,5,-122,0,9,0,-3,5,12,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,-6,9,-124,0,9,-14207,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,6,4,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,-2,9,-121,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,0,-2,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,-6,9,-124,0,-2,9,-14333,0,-4,9,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-123,0,9,0,-2,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-122,0,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-123,0,-4,9,-14460,0,-4,9,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-123,0,9,0,-2,6,4,6,-121,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-122,0,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-123,0,-4,9,-14460,0,-4,9,-123,0,-6,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,0,-3,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,0,-3,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-6,9,-123,0,-4,9,-14588,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,0,-3,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,0,-3,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,-4,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,-4,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,6,-2,4,6,-122,0,-2,9,6,4,-2,6,-122,0,-2,9,-3,6,-123,0,-2,9,-3,6,-123,0,-2,9,6,4,-2,6,-122,0,-2,9,6,-2,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14589,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,9,-122,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,0,-2,6,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,5,9,-122,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,0,-2,5,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,-126,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,-126,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,-126,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,-126,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14589,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,9,-123,0,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-124,0,9,-3,0,9,-123,0,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-14717,0,-3,9,-124,0,-2,9,3,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,-2,7,-124,0,-2,9,-2,7,-124,0,-2,9,7,8,-124,0,-2,9,7,8,-124,0,-2,9,-2,7,-124,0,-2,9,-2,7,-124,0,-2,9,-2,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,3,0,9,-124,0,-3,9,-14717,0,5,-2,9,-124,0,-2,5,3,-2,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,-2,7,-124,0,-2,5,-2,7,-124,0,-2,5,7,8,-124,0,-2,5,7,8,-124,0,-2,5,-2,7,-124,0,-2,5,-2,7,-124,0,-2,5,-2,0,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,3,-2,9,-124,0,5,-2,9,-14717,0,1,-2,5,-125,0,1,3,1,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,7,5,-123,0,-2,1,7,4,5,-123,0,-2,1,7,8,-124,0,-2,1,7,8,-124,0,-2,1,7,4,5,-123,0,-2,1,-2,7,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,0,5,-124,0,1,3,1,5,-124,0,1,-2,5,-14717,0,-3,1,-125,0,1,3,-2,1,-123,0,-5,1,-123,0,-5,1,-123,0,-2,1,-2,7,1,-123,0,-2,1,-2,4,1,-123,0,-2,1,7,8,-124,0,-2,1,7,8,-124,0,-2,1,-2,4,1,-123,0,-2,1,-2,7,1,-123,0,-5,1,-123,0,-5,1,-124,0,1,3,-2,1,-124,0,-3,1,-14717,0,-3,1,-125,0,1,4,-2,1,-124,0,-4,1,-123,0,-5,1,-123,0,-2,1,4,7,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-123,0,-2,1,4,7,1,-123,0,-5,1,-124,0,-4,1,-124,0,1,4,-2,1,-124,0,-3,1,-14845,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-4,1,-124,0,-3,1,5,-125,0,3,1,5,-125,0,3,1,5,-124,0,-3,1,5,-124,0,-4,1,-124,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15102,0,-2,1,-126,0,-2,1,-382,0,3,-127,0,3,-383,0,-2,1,-126,0,-2,1,-15742,0,3,-127,0,3,-16126,0,10,-2,3,-125,0,10,-2,3,-125,0,10,-2,3,-125,0,10,-2,3,-15997,0,10,-2,3,-124,0,-2,10,-2,3,-124,0,-2,10,-2,3,-125,0,10,-2,3,-15996,0,-3,10,3,-124,0,10,-3,3,-124,0,10,-3,3,-124,0,-3,10,3,-15996,0,-3,10,3,-124,0,10,-3,3,-124,0,10,-3,3,-124,0,-3,10,3,-15997,0,-2,10,-125,0,-4,10,-124,0,-4,10,-125,0,-2,10,-1318719,0],\"uuid\":\"B66E5C29-81F3-4E29-AF59-25B80D87DA17\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[5981507,47872,16763313,4791325,15318849,7162190,9057340,6497578,16703926,12255232,9855308,12154974,6175791],\"bounds\":[59,68,55,72,0,47]}");

/***/ }),
/* 48 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[56,71,58,65,0,29],\"size\":[128,128,128],\"data\":[-8125,0,5,-4,0,5,-122,0,5,-4,0,5,-122,0,5,-4,0,5,-16122,0,5,-4,0,5,-16378,0,5,-4,0,5,-16378,0,5,-4,0,5,-16249,0,-3,2,-2,0,-3,2,-116,0,28,-3,0,-3,2,-2,0,-3,2,-3,0,28,-116,0,-3,2,-2,0,-3,2,-15992,0,-3,2,-2,0,-3,2,-116,0,28,-2,0,-4,2,-2,0,-4,2,-2,0,28,-112,0,28,-2,0,-4,2,-2,0,-4,2,-2,0,28,-115,0,-4,2,-2,0,-4,2,-15860,0,30,-12,0,30,-113,0,30,-3,0,-3,2,-2,0,-3,2,-3,0,30,-112,0,30,-2,0,-4,2,-2,0,-4,2,-2,0,30,-112,0,30,-2,0,-4,2,-2,0,-4,2,-2,0,30,-115,0,-4,2,-2,0,-4,2,-15733,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-3,0,-3,2,-2,0,-3,2,-3,0,30,-112,0,30,-2,0,-10,2,-2,0,30,-112,0,30,-2,0,-10,2,-2,0,30,-115,0,-10,2,-119,0,-3,2,-2,0,-3,2,-15606,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-3,0,-8,4,-3,0,30,-112,0,30,-2,0,4,-8,2,4,-2,0,30,-112,0,30,-2,0,4,-8,2,4,-2,0,30,-115,0,4,-8,2,4,-15733,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-14,0,30,-112,0,30,-3,0,-8,4,-3,0,30,-112,0,30,-3,0,4,-6,2,4,-3,0,30,-116,0,4,-6,2,4,-15734,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-14,0,30,-112,0,30,-2,0,8,-8,4,8,-2,0,30,-112,0,30,-2,0,8,4,-6,2,4,8,-2,0,30,-116,0,4,-6,2,4,-15862,0,-12,28,-115,0,-2,28,-10,0,-2,28,-114,0,28,0,8,-8,10,8,0,28,-114,0,28,0,8,10,-6,2,10,8,0,28,-117,0,-8,10,-15863,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,28,0,8,4,-6,2,4,8,0,28,-117,0,-2,4,-4,2,-2,4,-15863,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,-2,28,8,4,-6,2,4,8,-2,28,-116,0,28,-2,4,-4,2,-2,4,28,-15862,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,-2,28,8,4,-6,2,4,8,-2,28,-116,0,28,-2,4,-4,2,-2,4,28,-15862,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,28,0,8,4,-6,2,4,8,0,28,-117,0,-2,4,-4,2,-2,4,-15863,0,-10,28,-117,0,28,4,-8,0,4,28,-115,0,28,4,8,-8,4,8,4,28,-114,0,28,4,8,4,-6,2,4,8,4,28,-116,0,4,0,-6,28,0,4,-15990,0,-10,28,-117,0,28,8,-3,4,-2,8,-3,4,8,28,-116,0,28,8,4,-2,2,-2,8,-2,2,4,8,28,-117,0,4,0,-6,28,0,4,-15865,0,-4,28,-123,0,28,-4,0,28,-119,0,-4,28,0,-2,8,0,-4,28,-116,0,-4,28,0,-2,8,0,-4,28,-117,0,-2,28,-6,0,-2,28,-15737,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15740,0,-6,28,-121,0,28,-6,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15613,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15613,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-15866,0,-4,28,-123,0,28,-4,0,28,-122,0,28,-4,0,28,-122,0,28,-4,0,28,-122,0,28,-4,0,28,-15995,0,-4,28,-124,0,-4,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-15996,0,-4,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-16125,0,-2,28,-126,0,-2,28,-126,0,-2,28,-16254,0,-2,28,-126,0,-2,28,-16382,0,-2,28,-16382,0,-2,28,-1613887,0],\"uuid\":\"92532D38-8574-4B38-A7D5-EDF403BF9E4D\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,10759726,14243683,8924725,9410378,9072432],\"bounds\":[56,71,58,65,0,29]}");

/***/ }),
/* 49 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[51,78,48,76,0,0],\"size\":[128,128,128],\"data\":[-6222,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-114,0,-27,18,-113,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-2087372,0],\"uuid\":\"1460D336-050C-4FBC-9338-20A33DAB3680\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[51,78,48,76,0,0]}");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var request = __webpack_require__(51)

module.exports = function (url, options) {
  return new Promise(function (resolve, reject) {
    request(url, options, function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var queryString = __webpack_require__(52)
var setQuery = __webpack_require__(55)
var assign = __webpack_require__(10)
var ensureHeader = __webpack_require__(56)

// this is replaced in the browser
var request = __webpack_require__(57)

var mimeTypeJson = 'application/json'
var noop = function () {}

module.exports = xhrRequest
function xhrRequest (url, opt, cb) {
  if (!url || typeof url !== 'string') {
    throw new TypeError('must specify a URL')
  }
  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }
  if (cb && typeof cb !== 'function') {
    throw new TypeError('expected cb to be undefined or a function')
  }

  cb = cb || noop
  opt = opt || {}

  var defaultResponse = opt.json ? 'json' : 'text'
  opt = assign({ responseType: defaultResponse }, opt)

  var headers = opt.headers || {}
  var method = (opt.method || 'GET').toUpperCase()
  var query = opt.query
  if (query) {
    if (typeof query !== 'string') {
      query = queryString.stringify(query)
    }
    url = setQuery(url, query)
  }

  // allow json response
  if (opt.responseType === 'json') {
    ensureHeader(headers, 'Accept', mimeTypeJson)
  }

  // if body content is json
  if (opt.json && method !== 'GET' && method !== 'HEAD') {
    ensureHeader(headers, 'Content-Type', mimeTypeJson)
    opt.body = JSON.stringify(opt.body)
  }

  opt.method = method
  opt.url = url
  opt.headers = headers
  delete opt.query
  delete opt.json

  return request(opt, cb)
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(53);
var objectAssign = __webpack_require__(10);
var decodeComponent = __webpack_require__(54);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = urlSetQuery
function urlSetQuery (url, query) {
  if (query) {
    // remove optional leading symbols
    query = query.trim().replace(/^(\?|#|&)/, '')

    // don't append empty query
    query = query ? ('?' + query) : query

    var parts = url.split(/[\?\#]/)
    var start = parts[0]
    if (query && /\:\/\/[^\/]*$/.test(start)) {
      // e.g. http://foo.com -> http://foo.com/
      start = start + '/'
    }
    var match = url.match(/(\#.*)$/)
    url = start + query
    if (match) { // add hash back in
      url = url + match[0]
    }
  }
  return url
}


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = ensureHeader
function ensureHeader (headers, key, value) {
  var lower = key.toLowerCase()
  if (!headers[key] && !headers[lower]) {
    headers[key] = value
  }
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(58)
var normalize = __webpack_require__(63)
var noop = function () {}

module.exports = xhrRequest
function xhrRequest (opt, cb) {
  delete opt.uri

  // for better JSON.parse error handling than xhr module
  var useJson = false
  if (opt.responseType === 'json') {
    opt.responseType = 'text'
    useJson = true
  }

  var req = xhr(opt, function xhrRequestResult (err, resp, body) {
    if (useJson && !err) {
      try {
        var text = resp.rawRequest.responseText
        body = JSON.parse(text)
      } catch (e) {
        err = e
      }
    }

    resp = normalize(opt, resp)
    if (err) cb(err, null, resp)
    else cb(err, body, resp)
    cb = noop
  })

  // Patch abort() so that it also calls the callback, but with an error
  var onabort = req.onabort
  req.onabort = function () {
    var ret = onabort.apply(req, Array.prototype.slice.call(arguments))
    cb(new Error('XHR Aborted'))
    cb = noop
    return ret
  }

  return req
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(59)
var isFunction = __webpack_require__(60)
var parseHeaders = __webpack_require__(61)
var xtend = __webpack_require__(62)

module.exports = createXHR
// Allow use of default import syntax in TypeScript
module.exports.default = createXHR;
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    // xhr.responseXML will throw Exception "InvalidStateError" or "DOMException"
    // See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML.
    try {
        if (xhr.responseType === "document") {
            return xhr.responseXML
        }
        var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
        if (xhr.responseType === "" && !firefoxBugTakenEffect) {
            return xhr.responseXML
        }
    } catch (e) {}

    return null
}

function noop() {}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = getResponse
function getResponse (opt, resp) {
  if (!resp) return null
  return {
    statusCode: resp.statusCode,
    headers: resp.headers,
    method: opt.method,
    url: opt.url,
    // the XHR object in browser, http response in Node
    rawRequest: resp.rawRequest ? resp.rawRequest : resp
  }
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var debug = __webpack_require__(68)('simple-peer')
var getBrowserRTC = __webpack_require__(71)
var randombytes = __webpack_require__(72)
var stream = __webpack_require__(73)
var queueMicrotask = __webpack_require__(82) // TODO: remove when Node 10 is not supported

var MAX_BUFFERED_AMOUNT = 64 * 1024
var ICECOMPLETE_TIMEOUT = 5 * 1000
var CHANNEL_CLOSING_TIMEOUT = 5 * 1000

// HACK: Filter trickle lines when trickle is disabled #354
function filterTrickle (sdp) {
  return sdp.replace(/a=ice-options:trickle\s\n/g, '')
}

function makeError (message, code) {
  var err = new Error(message)
  err.code = code
  return err
}

function warn (message) {
  console.warn(message)
}

/**
 * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
 * Duplex stream.
 * @param {Object} opts
 */
class Peer extends stream.Duplex {
  constructor (opts) {
    opts = Object.assign({
      allowHalfOpen: false
    }, opts)

    super(opts)

    this._id = randombytes(4).toString('hex').slice(0, 7)
    this._debug('new peer %o', opts)

    this.channelName = opts.initiator
      ? opts.channelName || randombytes(20).toString('hex')
      : null

    this.initiator = opts.initiator || false
    this.channelConfig = opts.channelConfig || Peer.channelConfig
    this.config = Object.assign({}, Peer.config, opts.config)
    this.offerOptions = opts.offerOptions || {}
    this.answerOptions = opts.answerOptions || {}
    this.sdpTransform = opts.sdpTransform || (sdp => sdp)
    this.streams = opts.streams || (opts.stream ? [opts.stream] : []) // support old "stream" option
    this.trickle = opts.trickle !== undefined ? opts.trickle : true
    this.allowHalfTrickle = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false
    this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT

    this.destroyed = false
    this._connected = false

    this.remoteAddress = undefined
    this.remoteFamily = undefined
    this.remotePort = undefined
    this.localAddress = undefined
    this.localFamily = undefined
    this.localPort = undefined

    this._wrtc = (opts.wrtc && typeof opts.wrtc === 'object')
      ? opts.wrtc
      : getBrowserRTC()

    if (!this._wrtc) {
      if (typeof window === 'undefined') {
        throw makeError('No WebRTC support: Specify `opts.wrtc` option in this environment', 'ERR_WEBRTC_SUPPORT')
      } else {
        throw makeError('No WebRTC support: Not a supported browser', 'ERR_WEBRTC_SUPPORT')
      }
    }

    this._pcReady = false
    this._channelReady = false
    this._iceComplete = false // ice candidate trickle done (got null candidate)
    this._iceCompleteTimer = null // send an offer/answer anyway after some timeout
    this._channel = null
    this._pendingCandidates = []

    this._isNegotiating = !this.initiator // is this peer waiting for negotiation to complete?
    this._batchedNegotiation = false // batch synchronous negotiations
    this._queuedNegotiation = false // is there a queued negotiation request?
    this._sendersAwaitingStable = []
    this._senderMap = new Map()
    this._firstStable = true
    this._closingInterval = null

    this._remoteTracks = []
    this._remoteStreams = []

    this._chunk = null
    this._cb = null
    this._interval = null

    try {
      this._pc = new (this._wrtc.RTCPeerConnection)(this.config)
    } catch (err) {
      queueMicrotask(() => this.destroy(makeError(err, 'ERR_PC_CONSTRUCTOR')))
      return
    }

    // We prefer feature detection whenever possible, but sometimes that's not
    // possible for certain implementations.
    this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === 'number'

    this._pc.oniceconnectionstatechange = () => {
      this._onIceStateChange()
    }
    this._pc.onicegatheringstatechange = () => {
      this._onIceStateChange()
    }
    this._pc.onconnectionstatechange = () => {
      this._onConnectionStateChange()
    }
    this._pc.onsignalingstatechange = () => {
      this._onSignalingStateChange()
    }
    this._pc.onicecandidate = event => {
      this._onIceCandidate(event)
    }

    // Other spec events, unused by this implementation:
    // - onconnectionstatechange
    // - onicecandidateerror
    // - onfingerprintfailure
    // - onnegotiationneeded

    if (this.initiator) {
      this._setupData({
        channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
      })
    } else {
      this._pc.ondatachannel = event => {
        this._setupData(event)
      }
    }

    if (this.streams) {
      this.streams.forEach(stream => {
        this.addStream(stream)
      })
    }
    this._pc.ontrack = event => {
      this._onTrack(event)
    }

    if (this.initiator) {
      this._needsNegotiation()
    }

    this._onFinishBound = () => {
      this._onFinish()
    }
    this.once('finish', this._onFinishBound)
  }

  get bufferSize () {
    return (this._channel && this._channel.bufferedAmount) || 0
  }

  // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
  // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
  get connected () {
    return (this._connected && this._channel.readyState === 'open')
  }

  address () {
    return { port: this.localPort, family: this.localFamily, address: this.localAddress }
  }

  signal (data) {
    if (this.destroyed) throw makeError('cannot signal after peer is destroyed', 'ERR_SIGNALING')
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      } catch (err) {
        data = {}
      }
    }
    this._debug('signal()')

    if (data.renegotiate && this.initiator) {
      this._debug('got request to renegotiate')
      this._needsNegotiation()
    }
    if (data.transceiverRequest && this.initiator) {
      this._debug('got request for transceiver')
      this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init)
    }
    if (data.candidate) {
      if (this._pc.remoteDescription && this._pc.remoteDescription.type) {
        this._addIceCandidate(data.candidate)
      } else {
        this._pendingCandidates.push(data.candidate)
      }
    }
    if (data.sdp) {
      this._pc.setRemoteDescription(new (this._wrtc.RTCSessionDescription)(data))
        .then(() => {
          if (this.destroyed) return

          this._pendingCandidates.forEach(candidate => {
            this._addIceCandidate(candidate)
          })
          this._pendingCandidates = []

          if (this._pc.remoteDescription.type === 'offer') this._createAnswer()
        })
        .catch(err => {
          this.destroy(makeError(err, 'ERR_SET_REMOTE_DESCRIPTION'))
        })
    }
    if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) {
      this.destroy(makeError('signal() called with invalid signal data', 'ERR_SIGNALING'))
    }
  }

  _addIceCandidate (candidate) {
    var iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate)
    this._pc.addIceCandidate(iceCandidateObj)
      .catch(err => {
        if (!iceCandidateObj.address || iceCandidateObj.address.endsWith('.local')) {
          warn('Ignoring unsupported ICE candidate.')
        } else {
          this.destroy(makeError(err, 'ERR_ADD_ICE_CANDIDATE'))
        }
      })
  }

  /**
   * Send text/binary data to the remote peer.
   * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
   */
  send (chunk) {
    this._channel.send(chunk)
  }

  /**
   * Add a Transceiver to the connection.
   * @param {String} kind
   * @param {Object} init
   */
  addTransceiver (kind, init) {
    this._debug('addTransceiver()')

    if (this.initiator) {
      try {
        this._pc.addTransceiver(kind, init)
        this._needsNegotiation()
      } catch (err) {
        this.destroy(makeError(err, 'ERR_ADD_TRANSCEIVER'))
      }
    } else {
      this.emit('signal', { // request initiator to renegotiate
        transceiverRequest: { kind, init }
      })
    }
  }

  /**
   * Add a MediaStream to the connection.
   * @param {MediaStream} stream
   */
  addStream (stream) {
    this._debug('addStream()')

    stream.getTracks().forEach(track => {
      this.addTrack(track, stream)
    })
  }

  /**
   * Add a MediaStreamTrack to the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */
  addTrack (track, stream) {
    this._debug('addTrack()')

    var submap = this._senderMap.get(track) || new Map() // nested Maps map [track, stream] to sender
    var sender = submap.get(stream)
    if (!sender) {
      sender = this._pc.addTrack(track, stream)
      submap.set(stream, sender)
      this._senderMap.set(track, submap)
      this._needsNegotiation()
    } else if (sender.removed) {
      throw makeError('Track has been removed. You should enable/disable tracks that you want to re-add.', 'ERR_SENDER_REMOVED')
    } else {
      throw makeError('Track has already been added to that stream.', 'ERR_SENDER_ALREADY_ADDED')
    }
  }

  /**
   * Replace a MediaStreamTrack by another in the connection.
   * @param {MediaStreamTrack} oldTrack
   * @param {MediaStreamTrack} newTrack
   * @param {MediaStream} stream
   */
  replaceTrack (oldTrack, newTrack, stream) {
    this._debug('replaceTrack()')

    var submap = this._senderMap.get(oldTrack)
    var sender = submap ? submap.get(stream) : null
    if (!sender) {
      throw makeError('Cannot replace track that was never added.', 'ERR_TRACK_NOT_ADDED')
    }
    if (newTrack) this._senderMap.set(newTrack, submap)

    if (sender.replaceTrack != null) {
      sender.replaceTrack(newTrack)
    } else {
      this.destroy(makeError('replaceTrack is not supported in this browser', 'ERR_UNSUPPORTED_REPLACETRACK'))
    }
  }

  /**
   * Remove a MediaStreamTrack from the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */
  removeTrack (track, stream) {
    this._debug('removeSender()')

    var submap = this._senderMap.get(track)
    var sender = submap ? submap.get(stream) : null
    if (!sender) {
      throw makeError('Cannot remove track that was never added.', 'ERR_TRACK_NOT_ADDED')
    }
    try {
      sender.removed = true
      this._pc.removeTrack(sender)
    } catch (err) {
      if (err.name === 'NS_ERROR_UNEXPECTED') {
        this._sendersAwaitingStable.push(sender) // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874
      } else {
        this.destroy(makeError(err, 'ERR_REMOVE_TRACK'))
      }
    }
    this._needsNegotiation()
  }

  /**
   * Remove a MediaStream from the connection.
   * @param {MediaStream} stream
   */
  removeStream (stream) {
    this._debug('removeSenders()')

    stream.getTracks().forEach(track => {
      this.removeTrack(track, stream)
    })
  }

  _needsNegotiation () {
    this._debug('_needsNegotiation')
    if (this._batchedNegotiation) return // batch synchronous renegotiations
    this._batchedNegotiation = true
    queueMicrotask(() => {
      this._batchedNegotiation = false
      this._debug('starting batched negotiation')
      this.negotiate()
    })
  }

  negotiate () {
    if (this.initiator) {
      if (this._isNegotiating) {
        this._queuedNegotiation = true
        this._debug('already negotiating, queueing')
      } else {
        this._debug('start negotiation')
        setTimeout(() => { // HACK: Chrome crashes if we immediately call createOffer
          this._createOffer()
        }, 0)
      }
    } else {
      if (!this._isNegotiating) {
        this._debug('requesting negotiation from initiator')
        this.emit('signal', { // request initiator to renegotiate
          renegotiate: true
        })
      }
    }
    this._isNegotiating = true
  }

  // TODO: Delete this method once readable-stream is updated to contain a default
  // implementation of destroy() that automatically calls _destroy()
  // See: https://github.com/nodejs/readable-stream/issues/283
  destroy (err) {
    this._destroy(err, () => {})
  }

  _destroy (err, cb) {
    if (this.destroyed) return

    this._debug('destroy (error: %s)', err && (err.message || err))

    this.readable = this.writable = false

    if (!this._readableState.ended) this.push(null)
    if (!this._writableState.finished) this.end()

    this.destroyed = true
    this._connected = false
    this._pcReady = false
    this._channelReady = false
    this._remoteTracks = null
    this._remoteStreams = null
    this._senderMap = null

    clearInterval(this._closingInterval)
    this._closingInterval = null

    clearInterval(this._interval)
    this._interval = null
    this._chunk = null
    this._cb = null

    if (this._onFinishBound) this.removeListener('finish', this._onFinishBound)
    this._onFinishBound = null

    if (this._channel) {
      try {
        this._channel.close()
      } catch (err) {}

      this._channel.onmessage = null
      this._channel.onopen = null
      this._channel.onclose = null
      this._channel.onerror = null
    }
    if (this._pc) {
      try {
        this._pc.close()
      } catch (err) {}

      this._pc.oniceconnectionstatechange = null
      this._pc.onicegatheringstatechange = null
      this._pc.onsignalingstatechange = null
      this._pc.onicecandidate = null
      this._pc.ontrack = null
      this._pc.ondatachannel = null
    }
    this._pc = null
    this._channel = null

    if (err) this.emit('error', err)
    this.emit('close')
    cb()
  }

  _setupData (event) {
    if (!event.channel) {
      // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
      // which is invalid behavior. Handle it gracefully.
      // See: https://github.com/feross/simple-peer/issues/163
      return this.destroy(makeError('Data channel event is missing `channel` property', 'ERR_DATA_CHANNEL'))
    }

    this._channel = event.channel
    this._channel.binaryType = 'arraybuffer'

    if (typeof this._channel.bufferedAmountLowThreshold === 'number') {
      this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT
    }

    this.channelName = this._channel.label

    this._channel.onmessage = event => {
      this._onChannelMessage(event)
    }
    this._channel.onbufferedamountlow = () => {
      this._onChannelBufferedAmountLow()
    }
    this._channel.onopen = () => {
      this._onChannelOpen()
    }
    this._channel.onclose = () => {
      this._onChannelClose()
    }
    this._channel.onerror = err => {
      this.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
    }

    // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
    // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
    var isClosing = false
    this._closingInterval = setInterval(() => { // No "onclosing" event
      if (this._channel && this._channel.readyState === 'closing') {
        if (isClosing) this._onChannelClose() // closing timed out: equivalent to onclose firing
        isClosing = true
      } else {
        isClosing = false
      }
    }, CHANNEL_CLOSING_TIMEOUT)
  }

  _read () {}

  _write (chunk, encoding, cb) {
    if (this.destroyed) return cb(makeError('cannot write after peer is destroyed', 'ERR_DATA_CHANNEL'))

    if (this._connected) {
      try {
        this.send(chunk)
      } catch (err) {
        return this.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
      }
      if (this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
        this._debug('start backpressure: bufferedAmount %d', this._channel.bufferedAmount)
        this._cb = cb
      } else {
        cb(null)
      }
    } else {
      this._debug('write before connect')
      this._chunk = chunk
      this._cb = cb
    }
  }

  // When stream finishes writing, close socket. Half open connections are not
  // supported.
  _onFinish () {
    if (this.destroyed) return

    // Wait a bit before destroying so the socket flushes.
    // TODO: is there a more reliable way to accomplish this?
    const destroySoon = () => {
      setTimeout(() => this.destroy(), 1000)
    }

    if (this._connected) {
      destroySoon()
    } else {
      this.once('connect', destroySoon)
    }
  }

  _startIceCompleteTimeout () {
    if (this.destroyed) return
    if (this._iceCompleteTimer) return
    this._debug('started iceComplete timeout')
    this._iceCompleteTimer = setTimeout(() => {
      if (!this._iceComplete) {
        this._iceComplete = true
        this._debug('iceComplete timeout completed')
        this.emit('iceTimeout')
        this.emit('_iceComplete')
      }
    }, this.iceCompleteTimeout)
  }

  _createOffer () {
    if (this.destroyed) return

    this._pc.createOffer(this.offerOptions)
      .then(offer => {
        if (this.destroyed) return
        if (!this.trickle && !this.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp)
        offer.sdp = this.sdpTransform(offer.sdp)

        const sendOffer = () => {
          if (this.destroyed) return
          var signal = this._pc.localDescription || offer
          this._debug('signal')
          this.emit('signal', {
            type: signal.type,
            sdp: signal.sdp
          })
        }

        const onSuccess = () => {
          this._debug('createOffer success')
          if (this.destroyed) return
          if (this.trickle || this._iceComplete) sendOffer()
          else this.once('_iceComplete', sendOffer) // wait for candidates
        }

        const onError = err => {
          this.destroy(makeError(err, 'ERR_SET_LOCAL_DESCRIPTION'))
        }

        this._pc.setLocalDescription(offer)
          .then(onSuccess)
          .catch(onError)
      })
      .catch(err => {
        this.destroy(makeError(err, 'ERR_CREATE_OFFER'))
      })
  }

  _requestMissingTransceivers () {
    if (this._pc.getTransceivers) {
      this._pc.getTransceivers().forEach(transceiver => {
        if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
          transceiver.requested = true // HACK: Safari returns negotiated transceivers with a null mid
          this.addTransceiver(transceiver.sender.track.kind)
        }
      })
    }
  }

  _createAnswer () {
    if (this.destroyed) return

    this._pc.createAnswer(this.answerOptions)
      .then(answer => {
        if (this.destroyed) return
        if (!this.trickle && !this.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp)
        answer.sdp = this.sdpTransform(answer.sdp)

        const sendAnswer = () => {
          if (this.destroyed) return
          var signal = this._pc.localDescription || answer
          this._debug('signal')
          this.emit('signal', {
            type: signal.type,
            sdp: signal.sdp
          })
          if (!this.initiator) this._requestMissingTransceivers()
        }

        const onSuccess = () => {
          if (this.destroyed) return
          if (this.trickle || this._iceComplete) sendAnswer()
          else this.once('_iceComplete', sendAnswer)
        }

        const onError = err => {
          this.destroy(makeError(err, 'ERR_SET_LOCAL_DESCRIPTION'))
        }

        this._pc.setLocalDescription(answer)
          .then(onSuccess)
          .catch(onError)
      })
      .catch(err => {
        this.destroy(makeError(err, 'ERR_CREATE_ANSWER'))
      })
  }

  _onConnectionStateChange () {
    if (this.destroyed) return
    if (this._pc.connectionState === 'failed') {
      this.destroy(makeError('Connection failed.', 'ERR_CONNECTION_FAILURE'))
    }
  }

  _onIceStateChange () {
    if (this.destroyed) return
    var iceConnectionState = this._pc.iceConnectionState
    var iceGatheringState = this._pc.iceGatheringState

    this._debug(
      'iceStateChange (connection: %s) (gathering: %s)',
      iceConnectionState,
      iceGatheringState
    )
    this.emit('iceStateChange', iceConnectionState, iceGatheringState)

    if (iceConnectionState === 'connected' || iceConnectionState === 'completed') {
      this._pcReady = true
      this._maybeReady()
    }
    if (iceConnectionState === 'failed') {
      this.destroy(makeError('Ice connection failed.', 'ERR_ICE_CONNECTION_FAILURE'))
    }
    if (iceConnectionState === 'closed') {
      this.destroy(makeError('Ice connection closed.', 'ERR_ICE_CONNECTION_CLOSED'))
    }
  }

  getStats (cb) {
    // statreports can come with a value array instead of properties
    const flattenValues = report => {
      if (Object.prototype.toString.call(report.values) === '[object Array]') {
        report.values.forEach(value => {
          Object.assign(report, value)
        })
      }
      return report
    }

    // Promise-based getStats() (standard)
    if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) {
      this._pc.getStats()
        .then(res => {
          var reports = []
          res.forEach(report => {
            reports.push(flattenValues(report))
          })
          cb(null, reports)
        }, err => cb(err))

    // Single-parameter callback-based getStats() (non-standard)
    } else if (this._pc.getStats.length > 0) {
      this._pc.getStats(res => {
        // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
        if (this.destroyed) return

        var reports = []
        res.result().forEach(result => {
          var report = {}
          result.names().forEach(name => {
            report[name] = result.stat(name)
          })
          report.id = result.id
          report.type = result.type
          report.timestamp = result.timestamp
          reports.push(flattenValues(report))
        })
        cb(null, reports)
      }, err => cb(err))

    // Unknown browser, skip getStats() since it's anyone's guess which style of
    // getStats() they implement.
    } else {
      cb(null, [])
    }
  }

  _maybeReady () {
    this._debug('maybeReady pc %s channel %s', this._pcReady, this._channelReady)
    if (this._connected || this._connecting || !this._pcReady || !this._channelReady) return

    this._connecting = true

    // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339
    const findCandidatePair = () => {
      if (this.destroyed) return

      this.getStats((err, items) => {
        if (this.destroyed) return

        // Treat getStats error as non-fatal. It's not essential.
        if (err) items = []

        var remoteCandidates = {}
        var localCandidates = {}
        var candidatePairs = {}
        var foundSelectedCandidatePair = false

        items.forEach(item => {
          // TODO: Once all browsers support the hyphenated stats report types, remove
          // the non-hypenated ones
          if (item.type === 'remotecandidate' || item.type === 'remote-candidate') {
            remoteCandidates[item.id] = item
          }
          if (item.type === 'localcandidate' || item.type === 'local-candidate') {
            localCandidates[item.id] = item
          }
          if (item.type === 'candidatepair' || item.type === 'candidate-pair') {
            candidatePairs[item.id] = item
          }
        })

        const setSelectedCandidatePair = selectedCandidatePair => {
          foundSelectedCandidatePair = true

          var local = localCandidates[selectedCandidatePair.localCandidateId]

          if (local && (local.ip || local.address)) {
            // Spec
            this.localAddress = local.ip || local.address
            this.localPort = Number(local.port)
          } else if (local && local.ipAddress) {
            // Firefox
            this.localAddress = local.ipAddress
            this.localPort = Number(local.portNumber)
          } else if (typeof selectedCandidatePair.googLocalAddress === 'string') {
            // TODO: remove this once Chrome 58 is released
            local = selectedCandidatePair.googLocalAddress.split(':')
            this.localAddress = local[0]
            this.localPort = Number(local[1])
          }
          if (this.localAddress) {
            this.localFamily = this.localAddress.includes(':') ? 'IPv6' : 'IPv4'
          }

          var remote = remoteCandidates[selectedCandidatePair.remoteCandidateId]

          if (remote && (remote.ip || remote.address)) {
            // Spec
            this.remoteAddress = remote.ip || remote.address
            this.remotePort = Number(remote.port)
          } else if (remote && remote.ipAddress) {
            // Firefox
            this.remoteAddress = remote.ipAddress
            this.remotePort = Number(remote.portNumber)
          } else if (typeof selectedCandidatePair.googRemoteAddress === 'string') {
            // TODO: remove this once Chrome 58 is released
            remote = selectedCandidatePair.googRemoteAddress.split(':')
            this.remoteAddress = remote[0]
            this.remotePort = Number(remote[1])
          }
          if (this.remoteAddress) {
            this.remoteFamily = this.remoteAddress.includes(':') ? 'IPv6' : 'IPv4'
          }

          this._debug(
            'connect local: %s:%s remote: %s:%s',
            this.localAddress, this.localPort, this.remoteAddress, this.remotePort
          )
        }

        items.forEach(item => {
          // Spec-compliant
          if (item.type === 'transport' && item.selectedCandidatePairId) {
            setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId])
          }

          // Old implementations
          if (
            (item.type === 'googCandidatePair' && item.googActiveConnection === 'true') ||
            ((item.type === 'candidatepair' || item.type === 'candidate-pair') && item.selected)
          ) {
            setSelectedCandidatePair(item)
          }
        })

        // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
        // But wait until at least 1 candidate pair is available
        if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
          setTimeout(findCandidatePair, 100)
          return
        } else {
          this._connecting = false
          this._connected = true
        }

        if (this._chunk) {
          try {
            this.send(this._chunk)
          } catch (err) {
            return this.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
          }
          this._chunk = null
          this._debug('sent chunk from "write before connect"')

          var cb = this._cb
          this._cb = null
          cb(null)
        }

        // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
        // fallback to using setInterval to implement backpressure.
        if (typeof this._channel.bufferedAmountLowThreshold !== 'number') {
          this._interval = setInterval(() => this._onInterval(), 150)
          if (this._interval.unref) this._interval.unref()
        }

        this._debug('connect')
        this.emit('connect')
      })
    }
    findCandidatePair()
  }

  _onInterval () {
    if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
      return
    }
    this._onChannelBufferedAmountLow()
  }

  _onSignalingStateChange () {
    if (this.destroyed) return

    if (this._pc.signalingState === 'stable' && !this._firstStable) {
      this._isNegotiating = false

      // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'
      this._debug('flushing sender queue', this._sendersAwaitingStable)
      this._sendersAwaitingStable.forEach(sender => {
        this._pc.removeTrack(sender)
        this._queuedNegotiation = true
      })
      this._sendersAwaitingStable = []

      if (this._queuedNegotiation) {
        this._debug('flushing negotiation queue')
        this._queuedNegotiation = false
        this._needsNegotiation() // negotiate again
      }

      this._debug('negotiate')
      this.emit('negotiate')
    }
    this._firstStable = false

    this._debug('signalingStateChange %s', this._pc.signalingState)
    this.emit('signalingStateChange', this._pc.signalingState)
  }

  _onIceCandidate (event) {
    if (this.destroyed) return
    if (event.candidate && this.trickle) {
      this.emit('signal', {
        candidate: {
          candidate: event.candidate.candidate,
          sdpMLineIndex: event.candidate.sdpMLineIndex,
          sdpMid: event.candidate.sdpMid
        }
      })
    } else if (!event.candidate && !this._iceComplete) {
      this._iceComplete = true
      this.emit('_iceComplete')
    }
    // as soon as we've received one valid candidate start timeout
    if (event.candidate) {
      this._startIceCompleteTimeout()
    }
  }

  _onChannelMessage (event) {
    if (this.destroyed) return
    var data = event.data
    if (data instanceof ArrayBuffer) data = Buffer.from(data)
    this.push(data)
  }

  _onChannelBufferedAmountLow () {
    if (this.destroyed || !this._cb) return
    this._debug('ending backpressure: bufferedAmount %d', this._channel.bufferedAmount)
    var cb = this._cb
    this._cb = null
    cb(null)
  }

  _onChannelOpen () {
    if (this._connected || this.destroyed) return
    this._debug('on channel open')
    this._channelReady = true
    this._maybeReady()
  }

  _onChannelClose () {
    if (this.destroyed) return
    this._debug('on channel close')
    this.destroy()
  }

  _onTrack (event) {
    if (this.destroyed) return

    event.streams.forEach(eventStream => {
      this._debug('on track')
      this.emit('track', event.track, eventStream)

      this._remoteTracks.push({
        track: event.track,
        stream: eventStream
      })

      if (this._remoteStreams.some(remoteStream => {
        return remoteStream.id === eventStream.id
      })) return // Only fire one 'stream' event, even though there may be multiple tracks per stream

      this._remoteStreams.push(eventStream)
      queueMicrotask(() => {
        this.emit('stream', eventStream) // ensure all tracks have been added
      })
    })
  }

  _debug () {
    var args = [].slice.call(arguments)
    args[0] = '[' + this._id + '] ' + args[0]
    debug.apply(null, args)
  }
}

Peer.WEBRTC_SUPPORT = !!getBrowserRTC()

/**
 * Expose peer and data channel config for overriding all Peer
 * instances. Otherwise, just set opts.config or opts.channelConfig
 * when constructing a Peer.
 */
Peer.config = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    },
    {
      urls: 'stun:global.stun.twilio.com:3478?transport=udp'
    }
  ],
  sdpSemantics: 'unified-plan'
}

Peer.channelConfig = {}

module.exports = Peer

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5).Buffer))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 66 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 67 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(69)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(70);

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// originally pulled out of simple-peer

module.exports = function getBrowserRTC () {
  if (typeof window === 'undefined') return null
  var wrtc = {
    RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection,
    RTCSessionDescription: window.RTCSessionDescription ||
      window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
    RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate ||
      window.webkitRTCIceCandidate
  }
  if (!wrtc.RTCPeerConnection) return null
  return wrtc
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

// limit of Crypto.getRandomValues()
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
var MAX_BYTES = 65536

// Node supports requesting up to this number of bytes
// https://github.com/nodejs/node/blob/master/lib/internal/crypto/random.js#L48
var MAX_UINT32 = 4294967295

function oldBrowser () {
  throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11')
}

var Buffer = __webpack_require__(11).Buffer
var crypto = global.crypto || global.msCrypto

if (crypto && crypto.getRandomValues) {
  module.exports = randomBytes
} else {
  module.exports = oldBrowser
}

function randomBytes (size, cb) {
  // phantomjs needs to throw
  if (size > MAX_UINT32) throw new RangeError('requested too many random bytes')

  var bytes = Buffer.allocUnsafe(size)

  if (size > 0) {  // getRandomValues fails on IE if size == 0
    if (size > MAX_BYTES) { // this is the max bytes crypto.getRandomValues
      // can do at once see https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
      for (var generated = 0; generated < size; generated += MAX_BYTES) {
        // buffer.slice automatically checks if the end is past the end of
        // the buffer so we don't have to here
        crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES))
      }
    } else {
      crypto.getRandomValues(bytes)
    }
  }

  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes)
    })
  }

  return bytes
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(17);
exports.Duplex = __webpack_require__(4);
exports.Transform = __webpack_require__(19);
exports.PassThrough = __webpack_require__(80);
exports.finished = __webpack_require__(7);
exports.pipeline = __webpack_require__(81);


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(5),
    Buffer = _require.Buffer;

var _require2 = __webpack_require__(76),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  var _proto = BufferList.prototype;

  _proto.push = function push(v) {
    var entry = {
      data: v,
      next: null
    };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  _proto.unshift = function unshift(v) {
    var entry = {
      data: v,
      next: this.head
    };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  _proto.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  _proto.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  _proto.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;

    while (p = p.next) {
      ret += s + p.data;
    }

    return ret;
  };

  _proto.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;

    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }

    return ret;
  } // Consumes a specified amount of bytes or characters from the buffered data.
  ;

  _proto.consume = function consume(n, hasStrings) {
    var ret;

    if (n < this.head.data.length) {
      // `slice` is the same for buffers and strings.
      ret = this.head.data.slice(0, n);
      this.head.data = this.head.data.slice(n);
    } else if (n === this.head.data.length) {
      // First chunk is a perfect match.
      ret = this.shift();
    } else {
      // Result spans more than one buffer.
      ret = hasStrings ? this._getString(n) : this._getBuffer(n);
    }

    return ret;
  };

  _proto.first = function first() {
    return this.head.data;
  } // Consumes a specified amount of characters from the buffered data.
  ;

  _proto._getString = function _getString(n) {
    var p = this.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;

    while (p = p.next) {
      var str = p.data;
      var nb = n > str.length ? str.length : n;
      if (nb === str.length) ret += str;else ret += str.slice(0, n);
      n -= nb;

      if (n === 0) {
        if (nb === str.length) {
          ++c;
          if (p.next) this.head = p.next;else this.head = this.tail = null;
        } else {
          this.head = p;
          p.data = str.slice(nb);
        }

        break;
      }

      ++c;
    }

    this.length -= c;
    return ret;
  } // Consumes a specified amount of bytes from the buffered data.
  ;

  _proto._getBuffer = function _getBuffer(n) {
    var ret = Buffer.allocUnsafe(n);
    var p = this.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;

    while (p = p.next) {
      var buf = p.data;
      var nb = n > buf.length ? buf.length : n;
      buf.copy(ret, ret.length - n, 0, nb);
      n -= nb;

      if (n === 0) {
        if (nb === buf.length) {
          ++c;
          if (p.next) this.head = p.next;else this.head = this.tail = null;
        } else {
          this.head = p;
          p.data = buf.slice(nb);
        }

        break;
      }

      ++c;
    }

    this.length -= c;
    return ret;
  } // Make sure the linked list only shows the minimal necessary information.
  ;

  _proto[custom] = function (_, options) {
    return inspect(this, _objectSpread({}, options, {
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: false
    }));
  };

  return BufferList;
}();

/***/ }),
/* 76 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = __webpack_require__(7);

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.


module.exports = PassThrough;

var Transform = __webpack_require__(19);

__webpack_require__(6)(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).


var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = __webpack_require__(3).codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = __webpack_require__(7);
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map