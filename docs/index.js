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
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

const now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

module.exports = {now};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// HTML Rendering
const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(4).h;
const oct = __webpack_require__(1);
const canvox = __webpack_require__(5);
const TA = __webpack_require__(6);
const extra = __webpack_require__(2);

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

const Peer = __webpack_require__(33).peerjs.Peer;

console.log("- J: init peerjs");
console.log("- K: connect to peer");
console.log("- L: send a message");

var peer = null;
var name = null;
var conns = [];
const on_data = (name) => (data) => {
  console.log("[" + name + "] " + data);
};
const on_open = (name) => () => {
  console.log("- Connected to '" + name + "'.");
};
const register = (conn_name, conn) => {
  console.log("- New connection from '" + conn_name + "'.");
  conn.on("data", on_data(conn_name));
  conn.on("open", on_open(conn_name));
  conns.push(conn);
};
window.onkeypress = (e) => {
  switch (e.key) {
    case "j":
      name = prompt("name?");
      console.log("PeerJS started as '" + name + "'.");
      peer = new Peer(name); 
      peer.on('connection', (conn) => {
        register(conn.peer, conn);
      });
      break;
    case "k":
      var conn_name = prompt("Connect to:");
      var conn = peer.connect(conn_name);
      register(conn_name, conn);
      break;
    case "l":
      var msg = prompt("Message:");
      conns.forEach(conn => conn.send(msg));
      on_data(name)(msg);
      break;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const oct = __webpack_require__(1);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const TA = __webpack_require__(7);
const extra = __webpack_require__(2);
const {models} = __webpack_require__(8);

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const spritestack = __webpack_require__(9);

const load_model = name => {
  var model_json = __webpack_require__(10)("./"+name+".json");
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./archer.json": 11,
	"./chair.json": 12,
	"./croni_idle0.json": 13,
	"./croni_idle1.json": 14,
	"./croni_idle10.json": 15,
	"./croni_idle11.json": 16,
	"./croni_idle12.json": 17,
	"./croni_idle2.json": 18,
	"./croni_idle3.json": 19,
	"./croni_idle4.json": 20,
	"./croni_idle5.json": 21,
	"./croni_idle6.json": 22,
	"./croni_idle7.json": 23,
	"./croni_idle8.json": 24,
	"./croni_idle9.json": 25,
	"./cylinder.json": 26,
	"./fantasy.json": 27,
	"./ferumbras.json": 28,
	"./lyn.json": 29,
	"./wizard.json": 30,
	"./wizard_of_legends.json": 31,
	"./xtest.json": 32
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
webpackContext.id = 10;

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[56,71,56,70,0,34],\"size\":[128,128,128],\"data\":[-7483,0,-4,1,-124,0,-4,1,-124,0,-4,1,-763,0,1,0,-4,1,-122,0,1,0,-4,1,-122,0,1,0,-4,1,-15097,0,1,8,-3,1,-123,0,1,8,-3,1,-123,0,1,8,-3,1,-764,0,-5,1,-123,0,-5,1,-123,0,-5,1,-15098,0,-3,1,-125,0,-3,1,-125,0,-3,1,-766,0,-4,1,-124,0,-4,1,-124,0,-4,1,-15099,0,-3,1,-125,0,-2,1,2,1,-124,0,-4,1,-765,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15101,0,1,-2,8,-125,0,1,2,8,-125,0,1,-2,8,-765,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15102,0,8,-127,0,8,-2,3,-125,0,8,-2,3,-764,0,-3,8,-125,0,-3,8,-125,0,-3,8,-15231,0,-2,3,-126,0,-2,3,-764,0,-2,3,-126,0,-2,3,-15103,0,-2,2,-126,0,-2,2,-127,0,-2,3,-126,0,-2,3,-764,0,-2,3,-126,0,-2,3,-391,0,-5,10,-14708,0,-2,2,-126,0,-2,2,-127,0,-2,3,-126,0,-2,3,-763,0,-3,3,-125,0,-3,3,-388,0,-3,10,0,2,-14710,0,-3,2,-125,0,-3,2,-126,0,-2,3,-126,0,-2,3,-636,0,-3,3,-125,0,-2,3,-126,0,-2,3,-386,0,-3,10,-3,0,2,-14711,0,-3,2,-125,0,-3,2,-125,0,-2,3,-126,0,-3,3,-125,0,-3,3,-506,0,-4,3,-124,0,-4,3,-512,0,-2,10,-4,0,2,-14712,0,-4,2,-124,0,-4,2,-124,0,-2,3,-2,2,-124,0,-3,3,-125,0,-3,3,-378,0,-3,3,-125,0,-4,3,-124,0,-4,3,-511,0,-2,10,-5,0,2,-14713,0,-3,2,-124,0,-5,2,-123,0,-3,3,-2,2,-123,0,-2,3,6,-125,0,-3,6,-378,0,-3,6,-125,0,6,-2,3,6,-124,0,-2,6,3,6,-126,0,6,-383,0,-2,10,-5,0,2,-14584,0,3,-127,0,-2,3,0,-2,2,-121,0,-2,2,-4,1,-2,4,-120,0,1,-2,0,6,3,-2,1,2,-119,0,1,-3,0,6,3,-2,1,-120,0,1,-3,0,6,0,-2,1,-120,0,1,-3,0,6,0,-2,1,-120,0,1,-5,0,-2,1,-119,0,1,0,-3,6,-2,0,-2,1,-119,0,-2,1,-3,3,6,-3,1,-119,0,-2,1,-4,3,-2,1,-121,0,-7,1,-253,0,3,-126,0,10,3,-5,0,2,-14583,0,10,-3,3,-124,0,10,-3,3,-251,0,2,-5,1,-121,0,-7,1,2,-120,0,-7,1,2,-120,0,-7,1,2,-120,0,-7,1,-121,0,-2,1,-2,3,-3,1,-121,0,-2,1,-2,3,-3,1,-121,0,-2,1,-2,0,-3,1,-122,0,-5,1,-123,0,-2,3,-126,0,-4,3,-125,0,-2,10,3,-4,0,2,-14583,0,-2,3,10,-125,0,-2,3,10,-255,0,-4,1,-122,0,2,-5,1,-121,0,-7,1,-121,0,-7,1,-121,0,-6,1,2,-121,0,-6,1,2,-122,0,-5,1,-123,0,-5,1,-250,0,-3,3,-125,0,-3,3,-127,0,10,-6,0,2,-14583,0,-2,3,-126,0,-2,3,-382,0,2,-4,1,-122,0,-6,1,-122,0,-6,1,-122,0,-6,1,-122,0,-6,1,-123,0,-4,1,2,-377,0,-3,3,-125,0,-3,3,-128,0,10,-5,0,2,-14584,0,-2,3,-126,0,-2,3,-383,0,-3,1,-124,0,-4,2,1,-123,0,1,-3,2,1,-123,0,1,-3,2,1,-123,0,1,-3,2,1,-124,0,-2,1,2,-378,0,-2,3,-126,0,-2,3,-128,0,10,-6,0,2,-14583,0,-2,3,-126,0,-2,3,-512,0,-3,2,-125,0,-3,2,-125,0,-3,2,-125,0,-3,2,-379,0,-2,3,-125,0,-3,3,-125,0,-2,3,-128,0,10,-5,0,2,-14584,0,-2,3,-126,0,-2,3,-384,0,-3,2,5,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-3,2,5,-250,0,-2,3,-126,0,-2,3,-255,0,10,-5,0,2,-14584,0,-2,3,-126,0,-3,3,-126,0,-2,3,-131,0,7,-123,0,-4,2,7,-123,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,7,-122,0,-2,3,-3,0,7,-121,0,-3,3,-125,0,-2,3,-254,0,-2,10,-4,0,2,-14714,0,-2,3,-126,0,-3,3,-126,0,-2,3,0,-2,9,-123,0,-4,2,9,-123,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,9,-122,0,-2,3,-2,0,-2,9,-122,0,-2,3,-381,0,10,-5,0,2,-14843,0,-2,3,-126,0,3,-2,9,7,-124,0,-3,2,7,-124,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-3,2,7,-123,0,-2,3,-2,9,7,-123,0,-2,3,-381,0,10,-4,0,2,-14973,0,-2,7,-381,0,-2,6,-126,0,-2,6,-383,0,-2,7,-507,0,10,-4,0,2,-14973,0,-2,9,-126,0,-2,9,-126,0,6,3,-124,0,7,6,-4,3,-122,0,7,6,-4,3,-124,0,6,3,-126,0,-2,9,-126,0,-2,9,-506,0,10,-4,0,2,-14974,0,-2,7,-124,0,-4,7,-123,0,-2,7,-5,3,-121,0,-2,7,-5,3,-121,0,-2,7,-5,3,-121,0,-2,7,-5,3,-122,0,-5,7,-633,0,10,-4,0,2,-15100,0,7,-4,9,-122,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-121,0,-6,7,-123,0,-3,7,-506,0,10,-3,0,2,-14973,0,-5,7,9,-122,0,1,-5,7,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-121,0,1,-6,7,-121,0,-5,7,-505,0,10,-3,0,2,-14974,0,1,-4,7,-122,0,1,-5,7,-121,0,-2,1,-4,3,7,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-120,0,-2,1,-3,3,-3,7,-121,0,1,-6,7,-122,0,-2,1,-507,0,10,-2,0,2,-14976,0,-2,1,7,-124,0,1,7,-2,1,7,-122,0,1,-3,7,1,7,-121,0,-2,1,-3,7,1,-122,0,-2,1,-3,7,1,-2,7,-121,0,1,-3,7,1,-2,7,-122,0,1,7,1,-126,0,1,-507,0,10,-2,0,2,-15104,0,-2,1,-125,0,-4,1,-123,0,-5,1,-123,0,-5,1,-123,0,-5,1,-125,0,1,-635,0,10,0,2,-15233,0,-2,1,-125,0,-3,1,-125,0,-3,1,-126,0,-2,1,-762,0,10,0,2,-16381,0,10,2,-16382,0,10,2,-16382,0,10,-1531079,0],\"uuid\":\"CD5E269A-B932-4D24-8E8B-DA59AC90742B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[16737843,16777113,16764006,6697728,10066278,16750950,6736947,10040064,34816,16750848],\"bounds\":[56,71,56,70,0,34]}");

/***/ }),
/* 12 */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":2,\"parts\":[{\"name\":\"main\",\"bounds\":[16,47,15,48,0,58],\"size\":[64,64,64],\"data\":[-1234,0,-2,2,-24,0,-2,2,-36,0,-2,2,-24,0,-2,2,-1443,0,-2,2,-26,0,-2,2,-34,0,-2,2,-26,0,-2,2,-2467,0,-2,2,-24,0,-2,2,-36,0,-2,2,-24,0,-2,2,-1443,0,-2,2,-26,0,-2,2,-34,0,-2,2,-26,0,-2,2,-2467,0,-2,23,-24,0,-2,23,-36,0,-2,23,-24,0,-2,23,-1443,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-2467,0,-2,23,-24,0,-2,23,-36,0,-3,23,-22,0,-3,23,-37,0,-2,23,-22,0,-2,23,-1317,0,-2,23,-24,0,-2,23,-35,0,-3,23,-24,0,-3,23,-34,0,-2,23,-26,0,-2,23,-2597,0,-2,23,-20,0,-2,23,-40,0,-2,23,-20,0,-2,23,-498,0,-4,2,-60,0,-4,2,-60,0,-4,2,-60,0,-4,2,-497,0,-2,23,-22,0,-2,23,-38,0,-2,23,-22,0,-2,23,-2792,0,-2,23,-18,0,-2,23,-42,0,-3,23,-16,0,-3,23,-43,0,-3,23,-14,0,-3,23,-45,0,-3,23,-12,0,-3,23,-47,0,-3,23,-10,0,-3,23,-49,0,-3,23,-8,0,-3,23,-51,0,-3,23,-6,0,-3,23,-53,0,-2,23,-6,0,-2,23,-55,0,-2,23,-4,2,-2,23,-56,0,-2,23,-4,2,-2,23,-56,0,-2,23,-4,2,-2,23,-55,0,-3,23,-4,2,-3,23,-53,0,-3,23,-6,0,-3,23,-51,0,-3,23,-8,0,-3,23,-49,0,-3,23,-10,0,-3,23,-47,0,-3,23,-12,0,-3,23,-45,0,-3,23,-14,0,-3,23,-43,0,-3,23,-16,0,-3,23,-41,0,-3,23,-18,0,-3,23,-40,0,-2,23,-20,0,-2,23,-3378,0,-4,2,-60,0,2,-2,23,2,-60,0,2,-2,23,2,-60,0,-4,2,-3965,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-3889,0,-3,2,-60,0,-5,2,-58,0,-7,2,0,-6,22,0,-2,23,-47,0,-7,2,22,-5,0,-2,22,-2,23,-47,0,-7,2,-58,0,-5,2,-60,0,-3,2,-3850,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-3189,0,-20,23,-44,0,-20,23,-44,0,-20,23,-46,0,-2,3,0,-2,3,-6,0,-2,3,0,-2,3,-47,0,-18,3,-46,0,-18,3,-46,0,-18,3,-46,0,-18,3,-45,0,-20,3,-44,0,-20,3,-44,0,-20,3,-44,0,-20,3,-43,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-41,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-39,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-37,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-28,3,-35,0,-30,3,-34,0,-6,3,-18,0,-6,3,-34,0,-2,3,-26,0,-2,3,-2214,0,-2,23,-18,3,-2,23,-42,0,-2,23,-18,3,-2,23,-44,0,-18,3,-45,0,-20,3,-44,0,-20,3,-44,0,-20,3,-43,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-41,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-39,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-37,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-7,3,-14,0,-7,3,-35,0,-5,3,-20,0,-5,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-2094,0,-6,3,-54,0,-14,3,-46,0,-2,23,0,-16,3,0,-2,23,-42,0,-2,23,-2,3,-14,0,-2,3,-2,23,-43,0,-2,3,-16,0,-2,3,-3827,0,-6,3,-54,0,-14,3,-49,0,-16,3,-44,0,-2,23,0,-2,3,-14,0,-2,3,0,-2,23,-40,0,-2,23,-2,3,-16,0,-2,3,-2,23,-3825,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-2,23,-3,3,-16,0,-3,3,-2,23,-38,0,-2,23,-22,0,-2,23,-3760,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-2,2,-12,0,-2,2,-3,3,-39,0,-2,23,-5,0,-3,2,-8,0,-3,2,-5,0,-2,23,-36,0,-2,23,-8,0,-8,2,-8,0,-2,23,-3695,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-16,0,-3,3,-45,0,2,-14,0,2,-42,0,-2,23,-4,0,-16,2,-4,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3631,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-16,0,-3,3,-45,0,2,-14,0,2,-48,0,-3,2,-10,0,-3,2,-42,0,-2,23,-6,0,-12,2,-6,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3567,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-3,2,-12,0,-3,2,-2,0,3,-45,0,-14,2,-107,0,-2,23,-24,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3503,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-3,2,-12,0,-3,2,-2,0,3,-45,0,-14,2,-234,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-3374,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-4,2,-10,0,-4,2,-2,0,3,-47,0,-10,2,-300,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-3310,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,2,-14,0,2,-4,3,-40,0,3,-3,0,-4,2,-8,0,-4,2,-3,0,3,-47,0,-10,2,-364,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-33,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-2093,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-2,2,-12,0,-2,2,-4,3,-40,0,3,-5,0,-12,2,-5,0,3,-612,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-2093,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-3,0,-4,2,-8,0,-4,2,-3,0,3,-47,0,-10,2,-3704,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-3,0,2,-14,0,2,-3,0,3,-45,0,-4,2,-6,0,-4,2,-54,0,-6,2,-3642,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-2,2,-14,0,-2,2,-47,0,-4,2,-8,0,-4,2,-51,0,-10,2,-3576,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-2,2,-14,0,-2,2,-47,0,-3,2,-10,0,-3,2,-50,0,-12,2,-3575,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-4,2,-10,0,-4,2,-49,0,-4,2,-4,0,-4,2,-55,0,-6,2,-3578,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,2,-16,0,2,-2,0,-2,3,-43,0,2,-14,0,2,-49,0,-4,2,-6,0,-4,2,-53,0,-8,2,-3577,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-3,0,2,-14,0,2,-3,0,-2,3,-43,0,-4,2,-8,0,-4,2,-51,0,-10,2,-3640,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,-2,2,-14,0,-2,2,-2,0,-2,3,-43,0,-6,2,-4,0,-6,2,-54,0,-4,2,-3643,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-8,2,-3705,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-3,0,-4,2,-8,0,-4,2,-3,0,-2,3,-46,0,-10,2,-3704,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,2,-14,0,2,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-8,2,-3705,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,2,-14,0,2,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-2,2,-4,0,-2,2,-57,0,-6,2,-3642,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,2,-12,0,2,-2,3,-41,0,-6,3,0,-14,2,0,-6,3,-36,0,-2,3,-10,0,-4,2,-10,0,-2,3,-3759,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,2,-2,3,-41,0,-6,3,-2,2,-12,0,-2,2,-6,3,-36,0,-2,3,-3,0,-2,2,-14,0,-2,2,-3,0,-2,3,-3759,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-18,3,-41,0,-8,3,-12,0,-8,3,-36,0,-2,3,-2,0,-3,3,-14,0,-3,3,-2,0,-2,3,-3694,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-37,0,-8,3,-12,0,-8,3,-36,0,-7,3,-14,0,-7,3,-3694,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-36,0,-8,3,-12,0,-8,3,-36,0,-7,3,-14,0,-7,3,-36,0,-3,3,-22,0,-3,3,-3630,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-35,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-2,3,-26,0,-2,3,-3565,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-35,0,-10,3,-10,0,-10,3,-34,0,-8,3,-14,0,-8,3,-34,0,-5,3,-20,0,-5,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-3501,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-36,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-3,3,-24,0,-3,3,-3565,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-36,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-3,3,-24,0,-3,3,-3503,0,-4,3,-57,0,-10,3,-52,0,-14,3,-48,0,-18,3,-45,0,-20,3,-43,0,-22,3,-39,0,-8,3,-12,0,-8,3,-35,0,-8,3,-14,0,-8,3,-34,0,-3,3,-24,0,-3,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-22929,0],\"uuid\":\"0F83B31A-98B6-4290-A164-95C437723E1C\",\"hidden\":false}],\"size\":[64,64,64],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[16,47,15,48,0,58]}");

/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,6,-4,7,6,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,7,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13813,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-757,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13814,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-885,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13944,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-762,0,-4,6,-124,0,-4,6,-124,0,-4,7,-13945,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-764,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13689,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-764,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13561,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-892,0,-4,6,-124,0,-4,6,-124,0,-4,7,-13561,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1020,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13433,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1149,0,-2,6,-126,0,-2,6,-13434,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"15013266-1B66-40BE-8AB4-3BDD092173E6\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,7496558,5391165,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 14 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-755,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13816,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-883,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13946,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-760,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13947,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13563,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-890,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13563,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1018,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13435,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1147,0,-2,7,-126,0,-2,7,-13436,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"3012310E-96D8-4DC9-B11E-2FBEBA73DCAA\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,5391165,7496558,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13560,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-894,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13559,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1023,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13430,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1154,0,-2,7,-126,0,-2,7,-13429,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"2AD1D28D-1BD3-4F18-BFD7-7455B3C12194\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1021,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13432,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1152,0,-2,7,-126,0,-2,7,-13431,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"9872E874-5864-4714-A6C0-9C73F14CAA1F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1020,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13433,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1149,0,-2,7,-126,0,-2,7,-13434,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"76BCDE88-3711-47F2-853A-6718D7A1C601\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 18 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-755,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13816,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-883,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13946,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-760,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13947,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-761,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13564,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-889,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13564,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1017,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13436,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1146,0,-2,7,-126,0,-2,7,-13437,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"95EEDB35-0E0E-402D-BB93-A0A6F0F232F3\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,5391165,7496558,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-112,0,-4,1,10,-6,8,10,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-16,1,-112,0,-16,1,-112,0,-2,1,-2,0,-12,1,-112,0,-2,1,-2,0,-12,1,-114,0,-12,1,-116,0,-12,1,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-758,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-761,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13564,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-889,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13564,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1016,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13437,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1143,0,-2,7,-126,0,-2,7,-13440,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"243C6468-1C9E-4654-ACE9-ED8A70E8D4E6\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-112,0,-4,1,10,-6,8,10,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-16,1,-112,0,-16,1,-112,0,-2,1,-2,0,-12,1,-112,0,-2,1,-2,0,-12,1,-114,0,-12,1,-116,0,-12,1,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-758,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-763,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13562,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-891,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13562,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1018,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13435,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1145,0,-2,7,-126,0,-2,7,-13438,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"7AC62D52-02A0-4DEC-8EBA-D099FBA3B48B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 21 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-759,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-888,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-763,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13944,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1019,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13434,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1146,0,-2,7,-126,0,-2,7,-13437,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"ACB4ABDA-33DB-4CB1-8E49-528CA48C4D6F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 22 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13686,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13812,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-896,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13557,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1023,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13430,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1150,0,-2,7,-126,0,-2,7,-13433,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"892BCF8C-EDA6-47FB-A8D5-2AE32C2D6B8E\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 23 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13686,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13812,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-897,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13556,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1025,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13428,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1153,0,-2,7,-126,0,-2,7,-13430,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"F33A3005-1936-4D74-BD64-844EDA568B57\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 24 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-897,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13556,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1025,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13428,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1155,0,-2,7,-126,0,-2,7,-13428,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"18A51C2A-2C23-4B9B-95C4-2EFA82506920\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-766,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13559,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-895,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13558,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1024,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13429,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1154,0,-2,7,-126,0,-2,7,-13429,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"B4310167-CEB8-4757-8FF8-EA37AEC35FB7\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[52,76,52,75,0,12],\"size\":[128,128,128],\"data\":[-6718,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-1890877,0],\"uuid\":\"AF55B709-8F88-45D9-9490-37FA7714171F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[52,76,52,75,0,12]}");

/***/ }),
/* 27 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part2\",\"bounds\":[39,87,37,90,0,40],\"size\":[128,128,128],\"data\":[-4808,0,-7,18,-97,0,-6,18,-17,0,-10,18,-93,0,-14,18,-6,0,-16,18,-91,0,-38,18,-89,0,-40,18,-87,0,-6,18,-3,20,-22,18,-3,20,-8,18,-86,0,-5,18,-5,20,-20,18,-10,20,-2,18,-86,0,-4,18,-7,20,-18,18,-12,20,-2,18,-85,0,-4,18,-7,20,-6,18,-6,20,-6,18,-12,20,-2,18,-85,0,-4,18,-7,20,-4,18,-10,20,-4,18,-12,20,-2,18,-85,0,-5,18,-5,20,-3,18,-14,20,-3,18,-10,20,-3,18,-86,0,-5,18,-3,20,-3,18,-16,20,-3,18,-3,20,-9,18,-86,0,-10,18,-18,20,-14,18,-86,0,-10,18,-18,20,-13,18,-88,0,-8,18,-20,20,-11,18,-89,0,-8,18,-20,20,-11,18,-89,0,-7,18,-22,20,-10,18,-89,0,-7,18,-22,20,-9,18,-90,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-8,18,-20,20,-8,18,-92,0,-8,18,-20,20,-8,18,-91,0,-10,18,-18,20,-9,18,-91,0,-10,18,-18,20,-9,18,-90,0,-12,18,-16,20,-10,18,-90,0,-13,18,-14,20,-2,18,-6,20,-4,18,-88,0,-16,18,-10,20,-3,18,-8,20,-3,18,-88,0,-18,18,-6,20,-4,18,-10,20,-2,18,-87,0,-8,18,-3,20,-18,18,-10,20,-3,18,-86,0,-7,18,-5,20,-17,18,-10,20,-4,18,-84,0,-7,18,-7,20,-16,18,-10,20,-5,18,-82,0,-8,18,-7,20,-16,18,-10,20,-6,18,-81,0,-8,18,-7,20,-16,18,-10,20,-6,18,-81,0,-9,18,-5,20,-8,18,-4,20,-6,18,-8,20,-8,18,-80,0,-10,18,-3,20,-7,18,-8,20,-5,18,-6,20,-9,18,-80,0,-6,18,-5,20,-8,18,-10,20,-8,18,-5,20,-6,18,-80,0,-5,18,-7,20,-7,18,-10,20,-7,18,-7,20,-6,18,-79,0,-4,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-79,0,-4,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-80,0,-3,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-80,0,-3,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-81,0,-2,18,-9,20,-6,18,-10,20,-6,18,-9,20,-5,18,-81,0,-3,18,-7,20,-7,18,-10,20,-7,18,-7,20,-5,18,-82,0,-4,18,-5,20,-9,18,-8,20,-9,18,-5,20,-6,18,-83,0,-19,18,-4,20,-21,18,-85,0,-43,18,-86,0,-41,18,-89,0,-38,18,-92,0,-35,18,-95,0,-31,18,-99,0,-25,18,-107,0,-14,18,-10347,0,-3,27,-22,0,-3,27,-99,0,-5,27,-20,0,-5,27,4,5,4,5,4,-93,0,-2,27,20,-2,27,-20,0,-2,27,20,-2,27,4,5,4,5,4,-93,0,-5,27,-20,0,-5,27,4,5,4,5,4,-94,0,-3,27,-8,0,-6,27,-8,0,-3,27,-109,0,-10,27,-117,0,-12,27,-115,0,-14,27,-113,0,-16,27,-112,0,-16,27,-111,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-111,0,-16,27,-112,0,-16,27,-113,0,-14,27,-115,0,-12,27,-117,0,-10,27,-120,0,-6,27,-135,0,-4,27,-123,0,-6,27,-121,0,-8,27,-98,0,-3,27,-19,0,-8,27,-97,0,-5,27,-18,0,-8,27,-97,0,-2,27,20,-2,27,-18,0,-8,27,-97,0,-5,27,-19,0,-6,27,-99,0,-3,27,-21,0,-4,27,-239,0,-6,27,-121,0,-8,27,-106,0,-5,27,-9,0,-8,27,-9,0,-5,27,-92,0,-5,27,-9,0,-3,27,-2,20,-3,27,-9,0,-5,27,-92,0,-2,27,20,-2,27,-9,0,-3,27,-2,20,-3,27,-9,0,-2,27,20,-2,27,-92,0,-5,27,-9,0,-8,27,-9,0,-5,27,-92,0,-5,27,-9,0,-8,27,-9,0,-5,27,-107,0,-6,27,-11503,0,-3,4,-22,0,-3,4,-2,5,-97,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-99,0,-3,4,-8,0,-6,4,-8,0,-3,4,-109,0,-10,4,-117,0,-12,4,-115,0,-14,4,-113,0,-16,4,-112,0,-16,4,-111,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-111,0,-16,4,-112,0,-16,4,-113,0,-14,4,-115,0,-12,4,-117,0,-10,4,-120,0,-6,4,-135,0,-4,4,-123,0,-6,4,-121,0,-8,4,-98,0,-3,4,-19,0,-8,4,-97,0,-5,4,-18,0,-8,4,-97,0,-5,4,-18,0,-8,4,-97,0,-5,4,-19,0,-6,4,-99,0,-3,4,-21,0,-4,4,-239,0,-6,4,-121,0,-8,4,-106,0,-5,4,-9,0,-8,4,-9,0,-5,4,-92,0,-5,4,-9,0,-8,4,-9,0,-7,4,-4,0,4,-85,0,-5,4,-9,0,-8,4,-9,0,-12,4,-85,0,-5,4,-9,0,-8,4,-9,0,-7,4,-4,0,4,-85,0,-5,4,-9,0,-8,4,-9,0,-5,4,-107,0,-6,4,-11402,0,-2,5,-99,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-135,0,-4,5,-123,0,-6,5,-121,0,-8,5,-98,0,-3,5,-19,0,-8,5,-97,0,-5,5,-18,0,-8,5,-97,0,-5,5,-18,0,-8,5,-97,0,-5,5,-19,0,-6,5,-99,0,-3,5,-21,0,-4,5,-239,0,-6,5,-108,0,4,0,4,-10,0,-8,5,-11,0,4,-94,0,-5,5,-9,0,-8,5,-9,0,-5,5,-91,0,4,-6,5,-8,0,-8,5,-8,0,-13,5,-85,0,5,-4,7,-2,5,-7,0,-8,5,-7,0,-2,5,-12,7,-84,0,4,-6,5,-8,0,-8,5,-8,0,-13,5,-85,0,-5,5,-9,0,-8,5,-9,0,-5,5,-93,0,4,0,4,-11,0,-6,5,-12,0,4,-111,0,-2,13,-11275,0,5,-101,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-7,0,4,-2,0,4,-124,0,-4,5,-123,0,5,-4,12,5,-120,0,4,5,-6,12,5,4,-97,0,-3,5,-19,0,5,-6,12,5,-97,0,-5,5,-18,0,5,-6,12,5,-97,0,-5,5,-17,0,4,5,-6,12,5,4,-96,0,-5,5,-19,0,5,-4,12,5,-99,0,-3,5,-21,0,-4,5,-124,0,4,-2,0,4,-111,0,-6,5,-107,0,-4,4,-10,0,-8,5,-10,0,-4,4,-91,0,4,-4,0,4,-9,0,-8,5,-9,0,4,-4,0,-6,4,-85,0,4,-5,0,-2,5,-6,0,-10,5,-6,0,-2,5,-96,0,4,-5,0,-2,7,5,-5,0,-10,5,-5,0,5,-2,7,-96,0,4,-5,0,-2,5,-6,0,-10,5,-6,0,-2,5,-96,0,4,-4,0,4,-9,0,-3,5,-2,4,-3,5,-9,0,4,-4,0,-6,4,-86,0,-4,4,-11,0,-6,5,-11,0,-4,4,-108,0,-4,13,-11273,0,5,-102,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-7,0,-4,4,-112,0,-4,5,-7,0,4,-4,0,4,-121,0,4,-6,0,4,-119,0,4,-8,0,4,-97,0,-3,5,-18,0,4,-3,0,-2,3,-3,0,4,-96,0,-5,5,-17,0,4,-3,0,-2,3,-3,0,4,-96,0,-5,5,-17,0,4,-8,0,4,-96,0,-5,5,-18,0,4,-6,0,4,-98,0,-3,5,-20,0,4,-4,0,4,-111,0,-4,5,-8,0,-4,4,-111,0,-6,5,-121,0,-8,5,-111,0,-2,4,-7,0,-8,5,-7,0,-2,4,-104,0,-3,5,-2,0,-12,5,-2,0,-3,5,-106,0,-2,7,5,-2,0,-12,5,-2,0,5,-2,7,-106,0,-3,5,-2,0,-12,5,-2,0,-3,5,-104,0,-2,4,-7,0,-3,5,-2,4,-3,5,-7,0,-2,4,-112,0,-6,5,-123,0,13,-2,26,13,-11272,0,5,-103,0,-3,5,-21,0,-4,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-7,0,25,-4,0,25,-7,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-116,0,25,-12,5,25,-114,0,-14,5,-113,0,-16,5,-112,0,-16,5,-110,0,25,-18,5,25,-109,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-109,0,25,-18,5,25,-110,0,-16,5,-112,0,-16,5,-113,0,-14,5,-114,0,25,-12,5,25,-116,0,-10,5,-120,0,-6,5,-123,0,-4,5,-123,0,25,-4,5,25,-239,0,-3,5,-22,0,-2,3,-100,0,-5,5,-21,0,-2,3,-100,0,-5,5,-123,0,-5,5,-124,0,-3,5,-9,0,-4,5,-124,0,-4,5,-123,0,-6,5,-121,0,-8,5,-113,0,-2,4,-5,0,-8,5,-5,0,-2,4,-108,0,-18,5,-110,0,-2,7,-14,5,-2,7,-110,0,-18,5,-108,0,-2,4,-5,0,-3,5,-2,4,-3,5,-5,0,-2,4,-114,0,-6,5,-123,0,13,-2,26,13,-11376,0,-3,4,-20,0,5,0,-3,4,-99,0,-5,4,-19,0,5,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-7,0,26,-4,0,26,-7,0,-5,4,-99,0,-3,4,-8,0,-6,5,-8,0,-3,4,-109,0,-10,5,-116,0,26,-12,5,26,-114,0,-14,5,-113,0,-16,5,-112,0,-16,5,-110,0,26,-18,5,26,-109,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-109,0,26,-18,5,26,-110,0,-16,5,-112,0,-16,5,-113,0,-14,5,-114,0,26,-12,5,26,-116,0,-10,5,-120,0,-6,5,-123,0,-4,5,-123,0,26,-4,5,26,-123,0,-4,5,-112,0,-3,4,-9,0,-4,5,-9,0,3,14,-100,0,-5,4,-21,0,-2,3,-100,0,-5,4,-8,0,-4,5,-111,0,-5,4,-8,0,-4,5,-112,0,-3,4,-9,0,-4,5,-124,0,-4,5,-123,0,-6,5,-121,0,-8,5,-115,0,-2,4,-3,0,-8,5,-3,0,-2,4,-112,0,-14,5,-114,0,-2,7,-10,5,-2,7,-114,0,-14,5,-112,0,-2,4,-3,0,-8,5,-3,0,-2,4,-116,0,-6,5,-123,0,-4,13,-11376,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-19,0,-6,5,-98,0,-5,5,-7,0,26,-4,0,26,-7,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-116,0,26,-3,5,-6,6,-3,5,26,-114,0,-3,5,6,-6,7,6,-3,5,-113,0,-3,5,6,-8,7,6,-3,5,-112,0,-2,5,6,-10,7,6,-2,5,-110,0,26,-2,5,6,-12,7,6,-2,5,26,-109,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-109,0,26,-2,5,6,-12,7,6,-2,5,26,-110,0,-2,5,6,-10,7,6,-2,5,-112,0,-3,5,6,-8,7,6,-3,5,-113,0,-3,5,6,-6,7,6,-3,5,-114,0,26,-3,5,-2,6,-2,7,-2,6,-3,5,26,-116,0,-4,5,-2,7,-4,5,-120,0,-2,5,-2,7,-2,5,-123,0,5,-2,7,5,-123,0,26,5,-2,7,5,26,-123,0,5,-2,7,5,-112,0,-3,5,-8,0,4,5,-2,7,5,4,-8,0,4,-2,14,-99,0,-5,5,-8,0,5,-2,7,5,-9,0,4,-2,14,-99,0,-5,5,-7,0,4,5,-2,7,5,4,-9,0,14,-100,0,-5,5,-8,0,5,-2,7,5,-112,0,-3,5,-8,0,4,5,-2,7,5,4,-123,0,5,-2,7,5,-123,0,-2,5,-2,7,-2,5,-121,0,-2,5,-4,7,-2,5,-117,0,-2,4,0,5,-6,7,5,0,-2,4,-116,0,-2,5,-6,7,-2,5,-118,0,-10,7,-118,0,-2,5,-6,7,-2,5,-116,0,-2,4,0,-2,5,-4,7,-2,5,0,-2,4,-118,0,-6,5,-123,0,-4,4,-11376,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-19,0,-2,5,-3,3,5,-99,0,5,0,5,-8,0,-2,4,-2,26,-2,4,-8,0,5,0,5,-109,0,-2,4,-2,0,-2,26,-2,0,-2,4,-116,0,26,4,-10,0,4,26,-114,0,4,-12,0,4,-113,0,4,-14,0,4,-112,0,4,-14,0,4,-110,0,26,4,-16,0,4,26,-109,0,4,-16,0,4,-110,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-110,0,4,-16,0,4,-109,0,26,4,-16,0,4,26,-110,0,4,-14,0,4,-112,0,4,-14,0,4,-113,0,4,-12,0,4,-114,0,26,4,-10,0,4,26,-116,0,-2,4,-6,0,-2,4,-120,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-111,0,5,0,5,-8,0,4,-4,0,4,-8,0,4,-2,14,-99,0,5,-3,3,5,-7,0,4,-4,0,4,-8,0,-3,14,-99,0,5,-3,3,5,-7,0,4,-4,0,4,-9,0,14,-100,0,5,-3,3,5,-7,0,4,-4,0,4,-111,0,5,0,5,-8,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-121,0,4,-6,0,4,-119,0,-2,4,-6,0,-2,4,-502,0,4,-8,0,4,-119,0,4,-6,0,4,-121,0,-6,4,-11375,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,26,-4,0,26,-7,0,5,-3,3,5,-99,0,5,0,5,-10,0,-2,26,-8,0,-3,5,0,5,-113,0,-2,26,-120,0,26,-12,0,26,-495,0,26,-18,0,26,-237,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-237,0,26,-18,0,26,-495,0,26,-12,0,26,-374,0,26,-4,0,26,-263,0,14,4,-102,0,5,0,5,-20,0,14,-2,4,-2,13,-99,0,5,-3,3,5,-20,0,-2,14,13,14,-99,0,5,-3,3,5,-22,0,14,-100,0,5,-3,3,5,-124,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,26,-4,0,26,-7,0,5,-3,3,5,-99,0,5,0,5,-10,0,-2,26,-10,0,5,0,5,-113,0,-2,26,-9,0,-2,5,-109,0,26,-12,0,26,-495,0,26,-18,0,26,-237,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-237,0,26,-18,0,26,-495,0,26,-12,0,26,-374,0,26,-4,0,26,-8,0,14,-126,0,13,4,14,-124,0,-2,13,4,13,-101,0,5,0,5,-19,0,13,14,-2,4,-101,0,5,-3,3,5,-19,0,14,13,-102,0,5,-3,3,5,-123,0,5,-3,3,5,-124,0,5,0,5,-12669,0,-3,5,-22,0,-3,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,-6,26,-7,0,5,-3,3,5,-99,0,-3,5,-6,0,-2,26,-6,0,-2,26,-6,0,-3,5,-107,0,-2,26,-10,0,-2,26,-5,0,5,-107,0,26,-14,0,26,-112,0,26,-14,0,26,-111,0,26,-16,0,26,-110,0,26,-16,0,26,-109,0,26,-18,0,26,-108,0,26,-18,0,26,-108,0,-2,26,-16,0,-2,26,-108,0,-2,26,-16,0,-2,26,-108,0,26,-18,0,26,-108,0,26,-18,0,26,-109,0,26,-16,0,26,-110,0,26,-16,0,26,-111,0,26,-14,0,26,-112,0,26,-14,0,26,-113,0,-2,26,-10,0,-2,26,-116,0,-2,26,-6,0,-2,26,-6,0,-2,13,-112,0,-6,26,-7,0,-3,13,14,-124,0,13,-2,4,-2,13,-123,0,-5,13,-99,0,-3,5,-19,0,-3,13,4,-2,13,-99,0,5,-3,3,5,-18,0,-3,13,-102,0,5,-3,3,5,-19,0,-2,14,-102,0,5,-3,3,5,-124,0,-3,5,-12669,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-127,0,5,-872,0,-2,26,-16,0,-2,26,-108,0,-2,26,-16,0,-2,26,-1025,0,-2,13,-125,0,-4,13,-123,0,-6,13,-123,0,-4,13,-100,0,-3,4,-20,0,-2,13,4,-101,0,-5,4,-20,0,13,4,-101,0,-5,4,-123,0,-5,4,-124,0,-3,4,-12669,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-22,0,-4,5,-127,0,5,-752,0,-2,6,-117,0,-2,26,-6,0,-4,6,-6,0,-2,26,-108,0,-2,26,-6,0,-4,6,-6,0,-2,26,-117,0,-2,6,-906,0,13,-127,0,-3,13,-124,0,-5,13,-124,0,-3,13,-100,0,-3,5,-21,0,13,4,-3,13,-98,0,-5,5,-20,0,13,4,-3,13,-98,0,-5,5,-20,0,-5,13,-98,0,-5,5,-21,0,-3,13,-100,0,-3,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-98,0,5,0,5,-22,0,5,0,5,0,5,-622,0,-4,4,-123,0,-6,4,-121,0,-3,4,-2,6,-3,4,-114,0,-2,26,-4,0,-2,4,-3,6,-3,4,-4,0,-2,26,-108,0,-2,26,-4,0,-2,4,-4,6,-2,4,-4,0,-2,26,-114,0,-3,4,-3,6,-2,4,-121,0,-4,4,6,4,-123,0,-4,4,-521,0,-2,13,-125,0,-4,13,-123,0,-6,13,-122,0,-6,13,-121,0,-7,13,-99,0,5,0,5,-19,0,-8,13,-97,0,5,-3,3,5,-19,0,-2,13,4,-4,13,-97,0,5,-3,3,5,-19,0,-7,13,-97,0,5,-3,3,5,-20,0,-5,13,-99,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-97,0,5,-3,3,5,-20,0,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-496,0,6,-3,4,-122,0,4,6,-6,4,-120,0,-8,4,-119,0,-10,4,-113,0,-2,26,-3,0,-9,4,6,-3,0,-2,26,-108,0,-2,26,-3,0,6,-8,4,6,-3,0,-2,26,-113,0,6,-9,4,-119,0,6,-7,4,-120,0,-8,4,-122,0,-4,4,-394,0,-2,13,-124,0,-2,12,-3,13,-122,0,12,-6,13,-120,0,12,-7,13,-120,0,-9,13,-97,0,5,0,5,-19,0,-8,13,12,-96,0,5,-3,3,5,-18,0,-3,13,0,-3,13,-2,12,-96,0,5,-3,3,5,-19,0,-6,13,12,-97,0,5,-3,3,5,-20,0,-3,13,-2,12,-99,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-97,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-368,0,6,-3,4,-122,0,4,6,-6,4,-119,0,-10,4,-118,0,-10,4,-117,0,-12,4,-112,0,-3,26,0,-12,4,0,-3,26,-108,0,-3,26,0,6,-11,4,0,-3,26,-112,0,6,-10,4,6,-117,0,6,-9,4,-118,0,6,-9,4,-119,0,-8,4,-122,0,-4,4,-266,0,-2,13,-124,0,-4,12,13,-122,0,-6,12,13,-120,0,-8,12,13,-119,0,-9,12,-97,0,5,0,5,-19,0,13,-8,12,-96,0,5,-3,3,5,-18,0,13,-2,12,0,-5,12,-96,0,5,-3,3,5,-19,0,13,-7,12,-96,0,5,-3,3,5,-20,0,-2,13,-4,12,-98,0,5,0,5,-23,0,-3,12,-12643,0,-3,5,-22,0,-5,5,-97,0,-6,5,-18,0,-6,5,-98,0,-6,5,-18,0,-6,5,-98,0,-6,5,-18,0,-6,5,-99,0,-3,5,-22,0,-3,5,-367,0,-3,6,-3,4,-121,0,6,-7,4,-119,0,-10,4,-117,0,-12,4,-116,0,-12,4,-113,0,-2,26,0,-12,4,0,-2,26,-110,0,-2,26,0,6,-11,4,0,-2,26,-113,0,6,-10,4,6,-116,0,6,-10,4,6,-117,0,6,-9,4,-119,0,6,-7,4,-121,0,-5,4,6,-393,0,-2,12,-124,0,-5,12,-123,0,-6,12,-120,0,-9,12,-97,0,-3,5,-19,0,-9,12,-96,0,-5,5,-19,0,-9,12,-95,0,-5,5,-19,0,-9,12,-95,0,-5,5,-21,0,-6,12,-97,0,-3,5,-24,0,-3,12,-12541,0,-2,5,-99,0,-3,4,-22,0,-3,4,-99,0,-7,4,-16,0,-7,4,-98,0,-7,4,-16,0,-7,4,-98,0,-7,4,-16,0,-7,4,-99,0,-3,4,-22,0,-3,4,-366,0,-3,6,-4,4,6,-119,0,6,-9,4,-117,0,-12,4,-116,0,-12,4,-116,0,-12,4,-113,0,-3,26,-12,4,-3,26,-110,0,-3,26,-12,4,-3,26,-113,0,6,-10,4,6,-116,0,6,-10,4,6,-116,0,-2,6,-9,4,6,-117,0,-2,6,-8,4,-119,0,6,-4,4,-2,6,4,-392,0,12,-125,0,11,-3,12,-124,0,-4,12,11,-122,0,-6,12,-99,0,-3,5,-20,0,-6,12,11,-97,0,-5,5,-19,0,-8,12,-96,0,-5,5,-20,0,11,-6,12,-96,0,-5,5,-22,0,-3,12,11,-98,0,-3,5,-12566,0,-2,5,-101,0,-3,5,-22,0,-3,5,-99,0,-8,5,-14,0,-8,5,-98,0,-8,5,-14,0,-8,5,-98,0,-8,5,-14,0,-8,5,-99,0,-3,5,-22,0,-3,5,-366,0,-2,6,-4,4,-2,6,-119,0,-9,4,6,-117,0,-12,4,-116,0,-11,4,6,-116,0,-11,4,6,-113,0,-3,26,-12,4,-3,26,-110,0,-3,26,-12,4,-3,26,-113,0,6,-11,4,-116,0,6,-10,4,6,-116,0,-2,6,-9,4,6,-117,0,6,-9,4,-119,0,-4,4,-3,6,4,-519,0,11,-2,12,-125,0,-2,11,12,-124,0,-5,11,-98,0,-5,4,-20,0,12,-4,11,-98,0,4,-3,0,4,-22,0,-5,11,-96,0,4,-3,0,4,-23,0,-3,11,12,-96,0,4,-3,0,4,-24,0,-2,12,-97,0,-5,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-6,5,-10,0,-6,5,-3,3,5,-99,0,-3,3,-6,5,-10,0,-6,5,-3,3,-99,0,5,-3,3,-6,5,-10,0,-6,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-366,0,4,-2,6,-4,4,6,-119,0,-9,4,6,-117,0,-10,4,-2,6,-116,0,-12,4,-116,0,-12,4,-114,0,-2,26,-12,4,-2,26,-112,0,-2,26,4,6,-10,4,-2,26,-114,0,4,6,-10,4,-116,0,-2,6,-10,4,-116,0,-2,6,-10,4,-117,0,6,-9,4,-119,0,-3,4,-5,6,-647,0,-2,11,-125,0,-4,11,-99,0,4,-3,0,4,-21,0,-4,11,-126,0,-3,11,-126,0,-2,11,-225,0,4,-3,0,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-8,5,-6,0,-8,5,-3,3,5,-99,0,-3,3,-8,5,-6,0,-8,5,-3,3,-99,0,5,-3,3,-8,5,-6,0,-8,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-366,0,-8,4,-119,0,-9,4,6,-117,0,-11,4,6,-116,0,-11,4,6,-116,0,6,-10,4,6,-114,0,-2,26,-2,6,-10,4,-2,26,-112,0,-2,26,-2,6,-10,4,-2,26,-114,0,-2,6,-10,4,-116,0,-2,6,-9,4,6,-116,0,-2,6,-9,4,6,-117,0,6,-9,4,-119,0,-2,4,-6,6,-877,0,4,-3,0,4,-507,0,4,-3,0,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-10,5,-2,0,-10,5,-3,3,5,-99,0,-3,3,-10,5,-2,0,-10,5,-3,3,-99,0,5,-3,3,-10,5,-2,0,-10,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-367,0,-4,4,-2,6,-121,0,-6,4,-2,6,-119,0,-7,4,-3,6,-117,0,-12,4,-116,0,4,6,-10,4,-115,0,26,-2,6,-10,4,26,-114,0,26,-2,6,-10,4,26,-115,0,-2,6,-10,4,-116,0,6,-10,4,6,-117,0,-10,4,-119,0,6,-7,4,-121,0,-6,6,-751,0,-3,4,-124,0,-5,4,-122,0,-2,4,-3,0,-2,4,-121,0,-2,4,-3,0,-2,4,-121,0,-2,4,-3,0,-2,4,-122,0,-5,4,-124,0,-3,4,-12541,0,-3,5,-22,0,-3,5,-99,0,5,-3,3,-22,5,-3,3,5,-98,0,5,-3,3,-22,5,-3,3,5,-98,0,5,-3,3,-22,5,-3,3,5,-99,0,-3,5,-22,0,-3,5,-368,0,-3,4,6,-122,0,-6,4,-2,6,-119,0,-9,4,6,-118,0,-9,4,6,-117,0,-2,6,-9,4,6,-116,0,-2,6,-10,4,-116,0,6,-11,4,-116,0,6,-10,4,6,-117,0,-9,4,6,-118,0,-9,4,6,-119,0,4,6,-6,4,-122,0,-3,6,4,-880,0,-3,4,-124,0,4,-3,0,4,-123,0,4,-3,0,4,-123,0,4,-3,0,4,-124,0,-3,4,-12668,0,-5,4,0,4,0,4,0,4,0,4,0,-2,4,0,4,0,4,0,4,0,4,0,-5,4,-98,0,4,-3,7,-22,5,-3,7,4,-98,0,4,-28,7,4,-98,0,4,-3,7,-22,5,-3,7,4,-98,0,-5,4,0,4,0,4,0,4,0,4,0,-2,4,0,4,0,4,0,4,0,4,0,-5,4,-495,0,-3,4,6,-122,0,-6,4,-2,6,-120,0,-7,4,6,-119,0,-9,4,6,-118,0,6,-9,4,-118,0,6,-9,4,-118,0,-10,4,-119,0,-8,4,-120,0,-2,6,-6,4,-122,0,-3,6,4,-1008,0,-3,4,-124,0,4,-3,0,4,-123,0,4,-3,0,4,-123,0,4,-3,0,4,-124,0,-3,4,-12668,0,-30,4,-98,0,4,-28,0,4,-98,0,4,-28,0,4,-98,0,4,-28,0,4,-98,0,-30,4,-623,0,-4,4,-123,0,-5,4,6,-121,0,-2,4,-3,6,-3,4,-120,0,4,-5,6,-2,4,-120,0,-2,4,-4,6,-2,4,-120,0,-3,4,-2,6,-3,4,-121,0,-6,4,-123,0,-2,6,-2,4,-1137,0,4,-126,0,-3,4,-124,0,-5,4,-124,0,-3,4,-126,0,4,-12669,0,4,-3,0,4,-20,0,4,-3,0,4,-482,0,4,-3,0,4,-20,0,4,-3,0,4,-880,0,-2,6,-125,0,-4,6,-124,0,-4,6,-125,0,-2,6,-1521,0,-3,4,-125,0,-3,4,-125,0,-3,4,-12796,0,4,-3,0,4,-20,0,4,-3,0,4,-482,0,4,-3,0,4,-20,0,4,-3,0,4,-2787,0,-3,4,-125,0,-3,4,-125,0,-3,4,-12669,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-97,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-96,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-96,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-97,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-2789,0,4,-12926,0,-3,4,-22,0,-3,4,-99,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-99,0,-3,4,-22,0,-3,4,-2795,0,-2,14,-120,0,4,-2,14,-2,0,14,-2,0,14,-122,0,-2,14,-12794,0,-3,4,-22,0,-3,4,-99,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-99,0,-3,4,-22,0,-3,4,-2795,0,13,-121,0,4,-2,13,-2,0,13,-125,0,-2,13,-12795,0,4,-24,0,4,-101,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-101,0,4,-24,0,4,-2918,0,4,-2,12,-128,0,-2,12,-12922,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-3045,0,4,-13054,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-16229,0,4,-24,0,4,-16358,0,4,-24,0,4,-16236,0,-2,14,-23,0,-2,14,-95,0,4,-2,14,-2,0,14,-2,0,14,-16,0,4,-2,14,-2,0,14,-2,0,14,-97,0,-2,14,-23,0,-2,14,-16104,0,13,-24,0,13,-96,0,4,-2,13,-2,0,13,-19,0,4,-2,13,-2,0,13,-100,0,-2,13,-23,0,-2,13,-16226,0,4,-2,12,-22,0,4,-2,12,-103,0,-2,12,-23,0,-2,12,-16226,0,4,-24,0,4,-1435956,0],\"uuid\":\"75184B45-EE35-4715-8795-CBF43477C07B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4995126,7756116,9662817,10715503,13082230,15647642,16777215,16511542,6284153,4702084,3642478,4418392,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,4150124,11285042,14243683,14121914,9410378,9072432,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"bounds\":[39,87,37,90,0,40]}");

/***/ }),
/* 28 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[41,86,44,82,0,73],\"size\":[128,128,128],\"data\":[-5696,0,-4,3,-123,0,-6,3,-3,4,-118,0,-7,3,-3,2,-3,4,-114,0,-11,3,-3,2,-2,3,-110,0,-20,3,-106,0,-22,3,4,-103,0,-24,3,2,4,-100,0,-26,3,4,2,4,-98,0,6,-13,1,-13,3,-4,4,-96,0,-2,1,-8,0,-3,3,-3,1,-17,3,-94,0,2,1,-8,0,-5,3,-3,1,-16,3,-93,0,2,1,-9,0,-6,3,-3,1,-16,3,-91,0,-2,2,-10,0,-8,3,-2,1,-13,3,2,4,-90,0,5,1,-11,0,-6,3,1,-2,3,-2,1,-12,3,2,4,-90,0,1,-12,0,-10,3,1,-13,3,-2,4,-89,0,1,-12,0,-10,3,1,-13,3,2,4,-89,0,1,-12,0,-10,3,1,-13,3,2,4,-89,0,1,-13,0,-9,3,1,-15,3,4,-88,0,1,-13,0,3,1,-7,3,1,-15,3,4,-88,0,1,-14,0,1,-7,3,1,-16,3,-88,0,2,-14,0,1,-7,3,1,-16,3,-88,0,2,-15,0,-7,3,1,-16,3,-88,0,2,-16,0,-6,3,1,-15,3,-89,0,2,-18,0,-4,3,1,-15,3,-89,0,2,-18,0,-4,3,1,-14,3,4,-89,0,6,1,-16,0,-4,3,-2,1,-14,3,-91,0,2,1,-15,0,-4,3,1,-15,3,-92,0,2,1,-14,0,-3,3,1,-16,3,-93,0,-2,1,0,1,-11,0,-2,3,1,-16,3,-95,0,1,0,1,-11,0,-2,1,-17,3,-96,0,-14,1,-17,3,-98,0,-10,3,0,-18,3,-101,0,-26,3,-104,0,3,4,-20,3,4,-107,0,-2,4,-17,3,4,-110,0,4,-15,3,-113,0,4,-12,3,-116,0,-5,3,-4,4,-120,0,-4,4,-11772,0,-3,4,3,-123,0,4,-3,2,-5,3,-118,0,4,2,-10,3,4,-112,0,-16,3,4,-2,3,-111,0,-18,3,-112,0,-14,3,2,-2,3,-101,0,-2,6,-10,1,0,-12,3,-2,2,3,-98,0,-2,1,-11,0,-3,1,-12,3,2,-2,3,-96,0,5,1,-13,0,-3,1,-12,3,2,3,-95,0,5,1,-15,0,-3,1,-14,3,-93,0,-2,1,-18,0,-2,1,-13,3,-93,0,1,-19,0,3,1,-13,3,-92,0,5,-20,0,-2,3,1,-12,3,2,-91,0,5,-20,0,-2,3,1,-12,3,2,-91,0,6,-20,0,-2,3,1,-13,3,-91,0,1,-20,0,-2,3,1,-14,3,-90,0,1,-21,0,3,1,-14,3,-90,0,6,-20,0,-2,3,1,-12,3,4,3,-90,0,5,-18,0,-4,3,1,-12,3,-2,4,-90,0,5,-18,0,-4,3,1,-10,3,-3,4,2,-90,0,5,-17,0,-5,3,1,-10,3,-3,4,-91,0,5,-17,0,-5,3,1,-10,3,-3,4,-91,0,5,-16,0,-6,3,1,-10,3,-2,4,2,-92,0,1,-15,0,-5,3,1,-11,3,-2,4,-93,0,-2,1,-14,0,-5,3,1,-11,3,-2,4,-94,0,-2,1,-13,0,-4,3,1,-12,3,4,2,-95,0,2,1,-12,0,-3,3,1,-12,3,-2,4,-97,0,2,6,1,-11,0,-2,1,-13,3,4,2,-99,0,-2,5,-10,1,-15,3,2,-109,0,-18,3,-109,0,-18,3,-108,0,-19,3,-112,0,-15,3,-114,0,-9,3,-120,0,-4,3,-12284,0,2,-3,3,-121,0,-7,3,-3,2,4,-118,0,-10,3,4,-2,3,-117,0,-12,3,2,-113,0,-15,3,2,-102,0,6,-5,1,5,-7,1,-12,3,2,-100,0,2,-9,0,-5,3,1,-12,3,2,-98,0,2,-10,0,-6,3,1,-12,3,2,-96,0,2,-12,0,-6,3,1,-12,3,-95,0,1,-14,0,-18,3,-95,0,6,-15,0,-16,3,4,-95,0,6,-18,0,-14,3,4,-94,0,1,-17,0,-16,3,-94,0,1,-17,0,-3,3,1,-12,3,-94,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-18,0,-2,3,1,-12,3,-94,0,1,-16,0,-4,3,1,-12,3,-94,0,1,-15,0,-5,3,1,-12,3,-94,0,1,-15,0,-5,3,1,-11,3,-95,0,-2,1,-13,0,-6,3,1,-11,3,-96,0,1,-13,0,-5,3,1,-12,3,-97,0,1,-12,0,-4,3,1,-13,3,-98,0,1,-11,0,-3,3,1,-13,3,-100,0,1,6,5,-11,1,-13,3,-111,0,-16,3,-113,0,-12,3,-2,4,-113,0,-6,3,-4,2,3,-3,4,-114,0,-2,3,-4,2,-3,3,-3,4,-118,0,-4,3,-12925,0,-7,3,-119,0,4,-7,3,2,-3,3,-106,0,5,6,1,2,-3,5,2,-4,1,-7,3,2,-2,3,4,-103,0,5,1,-12,0,-2,1,-9,3,4,-94,0,16,-6,0,5,-16,0,1,-6,3,-2,2,3,4,-99,0,5,-18,0,1,-6,3,-2,2,3,4,-98,0,1,-18,0,1,-7,3,2,3,4,-97,0,1,-20,0,-10,3,-97,0,1,-20,0,-11,3,-96,0,1,-20,0,-8,3,2,-2,3,-96,0,1,-20,0,1,-8,3,2,3,-96,0,1,-20,0,1,-8,3,2,-2,3,-95,0,1,-20,0,1,-8,3,2,-2,3,-95,0,1,-20,0,1,-8,3,2,-2,3,-95,0,5,-20,0,1,-8,3,2,3,-96,0,5,-20,0,1,-7,3,2,-2,3,-96,0,5,-20,0,1,-10,3,-96,0,5,-20,0,1,-6,3,2,-2,3,-98,0,2,-18,0,1,-7,3,2,-2,3,-98,0,2,-18,0,1,-6,3,2,-2,3,4,-99,0,2,-16,0,1,-6,3,2,-2,3,4,-101,0,2,1,-12,0,-2,1,-6,3,2,-3,3,-104,0,2,-3,1,-3,2,-5,1,0,-6,3,2,-3,3,-115,0,-8,3,2,-3,3,-116,0,-9,3,-118,0,-6,3,-13307,0,-8,3,-128,0,3,-108,0,-14,1,-6,0,3,-98,0,16,-7,0,-2,1,-11,0,1,0,1,-6,0,3,-104,0,-2,1,-14,0,-2,1,-5,0,-2,3,-102,0,-2,1,-16,0,-2,1,-4,0,-3,3,-101,0,2,-18,0,1,-4,0,-3,3,-101,0,2,-18,0,1,-4,0,-4,3,-100,0,2,-18,0,1,-4,0,-3,3,4,-100,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,6,-18,0,1,-4,0,-3,3,4,-100,0,5,-18,0,1,-4,0,-4,3,-100,0,5,-18,0,1,-4,0,-3,3,-101,0,-2,1,-17,0,1,-4,0,-3,3,-102,0,-2,1,-14,0,-2,1,-5,0,3,4,-104,0,1,0,1,-11,0,-2,1,-6,0,4,-106,0,-2,1,-4,5,-3,1,-5,2,-6,0,4,-126,0,4,-119,0,-7,3,4,-13561,0,-2,3,-5,4,-123,0,3,-4,0,3,-108,0,5,-13,1,-6,0,3,-98,0,16,-7,0,-2,1,-13,0,1,-6,0,3,-104,0,-2,1,-15,0,1,-5,0,3,-103,0,2,1,-17,0,1,-4,0,3,4,-102,0,2,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-103,0,1,-16,0,1,-5,0,3,-105,0,1,-14,0,1,-6,0,4,-106,0,-2,1,-4,5,-4,1,-3,2,1,-6,0,4,-125,0,3,4,-119,0,-3,3,-2,2,-2,3,2,-13561,0,-2,3,-128,0,-4,4,-2,3,-108,0,-2,5,6,-11,1,-6,0,3,-98,0,16,-7,0,1,-14,0,1,-6,0,3,-104,0,1,-16,0,1,-5,0,3,-103,0,2,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-102,0,6,1,-18,0,1,-4,0,4,-102,0,6,1,-18,0,1,-4,0,4,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-104,0,1,-16,0,1,-5,0,3,-105,0,1,-13,0,-2,1,-6,0,3,-106,0,-2,1,-4,5,-5,1,2,-2,1,-6,0,3,-121,0,-6,3,-120,0,3,2,-13566,0,-2,3,-128,0,-2,4,-4,3,-108,0,-3,5,6,-10,1,-6,0,3,-98,0,16,-7,0,1,-14,0,1,-6,0,3,-104,0,1,-16,0,1,-5,0,3,-103,0,2,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,3,-104,0,1,-16,0,1,-5,0,3,-105,0,1,-14,0,1,-6,0,3,-106,0,6,2,-3,5,6,-7,1,2,-6,0,3,-121,0,-6,3,-120,0,-2,3,-13566,0,-2,3,-128,0,-5,3,2,-109,0,-3,5,2,-8,1,-7,0,2,-98,0,17,-7,0,2,-2,1,-11,0,-2,1,-5,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,6,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-106,0,2,1,-12,0,-2,1,-5,0,4,-108,0,6,-2,5,6,-5,1,6,-2,5,-5,0,3,0,4,-121,0,-6,3,-120,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-4,3,2,-99,0,17,-8,0,-2,1,-2,2,-6,1,2,-3,5,-6,0,3,-106,0,-2,1,-13,0,1,-5,0,3,-105,0,1,-15,0,-2,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,2,-104,0,3,1,-16,0,1,-4,0,2,-104,0,5,1,-16,0,1,-4,0,2,-104,0,3,1,-16,0,1,-4,0,2,-104,0,6,1,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-15,0,-2,1,-4,0,3,-106,0,1,-14,0,1,-5,0,3,-107,0,-2,1,-2,5,6,1,-4,2,1,-2,6,5,-6,0,4,-122,0,-2,4,-3,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-5,3,-99,0,15,-8,0,-11,1,2,-2,5,-6,0,3,-106,0,1,-14,0,1,-5,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,6,1,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-106,0,1,-14,0,1,-5,0,3,-107,0,-2,1,5,6,-3,1,-2,2,-5,1,-6,0,2,-122,0,4,-4,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-4,3,4,-99,0,16,-8,0,-13,1,5,-2,0,3,-2,0,-2,4,-106,0,1,-14,0,1,-2,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,6,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,2,-16,0,1,0,3,-2,0,3,-105,0,2,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,2,-106,0,1,-14,0,1,-2,0,3,-2,0,2,-107,0,-14,1,-2,0,3,-2,0,3,2,-122,0,-5,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,3,-103,0,16,-8,0,-14,1,-2,0,-3,3,-108,0,1,-14,0,1,-2,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,2,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-107,0,1,-14,0,1,-2,0,3,0,3,-108,0,-14,1,-2,0,-3,3,-124,0,3,-126,0,3,-125,0,-2,3,-13567,0,3,-128,0,3,-128,0,3,-103,0,16,-8,0,6,-4,1,-3,5,-6,1,-2,0,-3,3,-108,0,1,-2,0,-2,1,-10,0,1,-2,0,3,0,3,-106,0,2,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,5,-16,0,1,0,3,0,3,-107,0,6,-14,0,1,-2,0,3,0,3,-108,0,6,2,-12,1,-2,0,-3,3,-124,0,3,-126,0,3,-126,0,3,-13695,0,-2,3,-128,0,3,-103,0,17,-9,0,6,-2,1,-4,5,6,-4,1,-3,0,3,-2,4,-108,0,-2,5,-12,0,5,1,-2,0,-2,3,4,-107,0,5,-14,0,1,-2,0,3,0,4,-106,0,2,-15,0,-2,1,0,3,0,4,-106,0,1,-16,0,1,0,3,0,2,-105,0,6,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,5,-16,0,1,0,3,0,3,-107,0,1,-14,0,1,-2,0,3,0,3,-107,0,6,1,-12,0,-2,1,-2,0,3,0,4,-109,0,-2,2,-2,1,-2,2,1,6,-4,5,-3,0,-2,3,4,-124,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,3,-103,0,17,-24,0,3,-111,0,5,-12,1,5,-3,0,3,2,-108,0,5,1,-12,0,-2,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,3,2,-107,0,3,1,-14,0,1,-2,0,3,2,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,6,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,2,-14,0,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,-2,1,-12,0,-2,1,-2,0,-2,3,-109,0,1,-3,5,6,-4,1,6,-3,5,1,-3,0,-2,3,-125,0,3,-126,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-12,1,-2,5,-3,0,2,-109,0,1,-14,0,1,-2,0,3,2,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,5,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,6,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,2,-14,0,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,-2,1,-13,0,1,-2,0,-2,3,-109,0,1,-2,5,6,-6,1,6,-2,5,1,-3,0,3,-126,0,3,-126,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-11,1,-3,5,-3,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,2,-109,0,5,-14,0,1,-2,0,2,-109,0,5,-14,0,1,-2,0,2,-109,0,2,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,0,1,-12,0,1,-2,0,2,-110,0,1,5,6,-8,1,6,5,1,-3,0,3,-126,0,3,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-10,1,-4,5,-3,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,5,-14,0,1,-2,0,3,-109,0,6,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-110,0,1,6,-10,1,6,1,-3,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-111,0,2,-8,1,6,-4,5,-3,0,2,-109,0,2,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,5,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,2,-109,0,2,-14,0,1,-2,0,2,-110,0,2,-5,1,-2,2,-6,1,-3,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-112,0,-7,1,6,-4,5,-4,0,3,-110,0,5,-11,0,-2,1,-3,0,3,-109,0,-2,1,-13,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,6,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,2,1,-12,0,-2,1,-2,0,3,-110,0,5,1,-11,0,1,-3,0,2,-111,0,2,-3,1,-4,2,1,6,-2,5,-4,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,15,-24,0,3,-128,0,3,-110,0,-2,5,-12,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,5,-4,0,1,-7,0,1,-3,0,3,-110,0,-3,5,-2,2,-6,1,-2,2,1,-3,0,2,-127,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-128,0,3,-110,0,6,5,-10,1,6,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,6,-12,0,1,-3,0,3,-110,0,5,-5,0,1,-6,0,1,-3,0,3,-110,0,6,5,6,2,-8,1,2,1,-3,0,3,-127,0,3,-117,0,-2,11,-7,0,3,-117,0,-3,11,-6,0,2,-118,0,-3,11,-4,0,-2,3,-13822,0,3,2,-128,0,3,-103,0,16,-23,0,-2,3,-128,0,3,-111,0,5,-9,1,6,5,-4,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,5,-5,0,1,-6,0,1,-3,0,3,-111,0,5,-11,1,-4,0,3,-127,0,3,-116,0,-3,11,-6,0,-2,3,-117,0,-3,11,-6,0,3,-118,0,-3,11,-5,0,3,-13823,0,3,-128,0,3,-103,0,16,-23,0,-2,3,-127,0,-2,3,-111,0,5,-8,1,6,-2,5,-3,0,-2,3,-110,0,5,-12,0,1,-2,0,-2,3,-110,0,2,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,5,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,6,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,6,-6,0,1,-5,0,1,-2,0,-2,3,-111,0,6,-11,1,-3,0,-2,3,-126,0,-2,3,-116,0,-3,11,-6,0,-2,3,-117,0,-3,11,-6,0,3,-118,0,-3,11,-5,0,3,-13823,0,3,-128,0,3,-103,0,16,-23,0,-2,3,-127,0,3,4,-111,0,5,1,6,-2,5,-4,1,-3,5,-3,0,-2,3,-110,0,5,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,6,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,2,-12,0,2,-2,0,-2,3,-111,0,6,-11,1,-3,0,-2,3,-116,0,-3,3,-7,0,3,4,-115,0,3,-3,11,3,-5,0,-2,3,-116,0,3,-3,11,3,-5,0,3,-117,0,3,-3,11,3,-4,0,3,-119,0,-3,3,-13701,0,3,-128,0,3,-103,0,16,-23,0,3,-128,0,2,-112,0,5,1,-4,5,-2,1,-4,5,-3,0,2,-111,0,6,-2,1,-10,0,1,-2,0,2,-111,0,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,6,1,-12,0,1,-2,0,2,-111,0,1,-12,0,1,-2,0,2,-111,0,2,-12,0,1,-2,0,2,-111,0,2,-12,0,2,-2,0,2,-112,0,-11,1,2,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,6,-4,1,-5,0,3,-117,0,2,-3,0,6,-5,0,3,-117,0,5,-3,0,6,-4,0,3,-119,0,5,-2,6,-13701,0,3,-128,0,3,-103,0,17,-23,0,3,-128,0,2,-112,0,-12,12,-3,0,2,-111,0,12,-12,1,12,-2,0,2,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,2,-111,0,12,-12,1,12,-2,0,2,-112,0,-12,12,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,2,-4,1,-5,0,3,-117,0,1,-3,0,1,-5,0,3,-117,0,5,-3,0,6,-4,0,3,-118,0,-2,5,1,6,5,-13700,0,3,-128,0,3,-103,0,17,-23,0,3,-128,0,2,-112,0,-12,12,-3,0,2,-111,0,12,-12,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,-12,1,12,-2,0,2,-112,0,-12,12,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,-5,1,-5,0,3,-117,0,1,-3,0,1,-5,0,3,-117,0,1,-3,0,1,-4,0,3,-118,0,-5,1,-13700,0,3,-128,0,3,-103,0,16,-23,0,3,-128,0,2,-113,0,-10,12,-4,0,2,-112,0,12,-10,1,12,-3,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-9,0,-2,1,12,-2,0,3,-112,0,12,-10,1,12,-3,0,3,-113,0,-10,12,-4,0,2,-117,0,-3,1,-7,0,2,-116,0,-6,1,-4,0,3,-116,0,5,-5,0,1,-4,0,3,-116,0,1,-5,0,5,-3,0,3,-118,0,-4,1,5,-13680,0,2,-2,1,-4,2,-2,1,-11,0,3,-106,0,3,-4,1,-2,2,-3,1,-12,0,3,-103,0,16,0,3,-9,1,-12,0,3,-106,0,-2,2,-5,1,-2,2,-13,0,2,-127,0,3,-114,0,-8,1,-5,0,3,-113,0,2,-9,1,-4,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-112,0,6,1,-8,0,-2,1,-3,0,3,-113,0,6,-9,1,-4,0,3,-114,0,6,-6,1,-6,0,3,-115,0,-6,1,-6,0,3,-116,0,-6,1,-4,0,3,2,-115,0,5,-5,0,1,-4,0,3,-116,0,6,-5,0,1,-4,0,3,-116,0,1,-5,0,6,-3,0,3,-117,0,6,-4,1,6,5,-123,0,-3,5,-13427,0,6,-4,1,6,-119,0,2,-9,1,-2,5,-9,0,3,-103,0,-4,11,-11,1,-10,0,3,-102,0,-4,11,-11,1,-10,0,3,-105,0,3,5,2,-7,1,-2,2,-11,0,2,-127,0,3,-115,0,-6,1,-6,0,3,-113,0,2,-9,1,-4,0,3,-113,0,2,-8,0,1,-4,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,2,-8,0,1,-4,0,3,-113,0,-2,2,-6,1,0,1,-4,0,3,-115,0,2,-5,1,0,1,-4,0,3,-115,0,2,-5,1,-5,0,-2,3,-116,0,-6,1,-4,0,3,2,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-3,0,3,-117,0,-6,1,6,-122,0,6,2,-3,5,-13425,0,6,-7,1,-118,0,3,-11,1,5,6,-111,0,-4,11,-13,1,-8,0,3,-102,0,-4,11,-13,1,-8,0,3,-105,0,3,-2,5,-11,1,-9,0,3,-127,0,3,-127,0,3,-113,0,-10,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-7,0,-2,1,-4,0,3,-113,0,-10,1,-4,0,3,-115,0,1,-5,0,-2,1,-4,0,3,-115,0,-5,1,-7,0,3,-116,0,-6,1,-4,0,-2,3,-115,0,1,-4,0,-2,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,-6,1,6,-122,0,-2,1,-3,5,-13425,0,-7,1,2,-118,0,3,-9,1,2,-3,1,6,5,-109,0,-4,11,-15,1,-6,0,3,-103,0,-3,11,-15,1,-6,0,3,-105,0,3,-3,5,-12,1,-7,0,3,-127,0,3,-113,0,-10,1,-4,0,3,-112,0,5,-11,1,-3,0,3,-112,0,5,-10,0,1,-3,0,3,-112,0,6,-10,0,1,-3,0,3,-112,0,6,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,5,-11,1,-3,0,3,-113,0,-4,1,0,-5,1,-4,0,3,-117,0,-4,1,-6,0,3,-116,0,-6,1,-4,0,-2,3,-115,0,1,-4,0,-2,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,-6,1,2,-122,0,-2,1,2,-2,5,-13426,0,-5,1,2,-120,0,-8,1,-2,2,-5,1,5,-111,0,3,-16,1,-5,0,3,-103,0,15,0,3,-16,1,-5,0,3,-106,0,-4,5,-12,1,-6,0,3,-127,0,3,-113,0,-10,1,-4,0,3,9,-111,0,5,-11,1,-3,0,3,9,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,-12,1,-3,0,3,7,-111,0,9,-10,1,-4,0,3,9,-112,0,10,-2,0,-5,1,-6,0,3,-113,0,13,-3,0,-5,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,2,-5,1,2,-122,0,-3,1,-2,5,-13436,0,-2,2,6,-114,0,-2,6,-4,5,-4,1,2,-5,1,-111,0,1,6,-3,5,-12,1,-4,0,3,-103,0,17,-2,0,-18,1,-3,0,3,-107,0,-4,5,-12,1,-5,0,3,-127,0,3,9,-112,0,-10,1,-4,0,3,9,-111,0,2,-11,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,-12,1,-3,0,3,7,-111,0,9,-10,1,-4,0,3,7,-112,0,10,-2,0,-5,1,-6,0,3,9,-112,0,7,-7,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-2,1,-2,5,-13435,0,-2,2,-2,1,6,-118,0,5,-10,1,-116,0,-2,5,-10,1,-4,0,3,-103,0,17,-7,0,-13,1,-3,0,3,-112,0,-12,1,-4,0,3,-127,0,3,9,-112,0,-10,1,-4,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,7,-10,1,-4,0,3,7,-112,0,10,1,0,-5,1,-6,0,3,7,-112,0,7,-7,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-2,1,2,5,-13435,0,2,-3,1,5,-122,0,-7,1,-120,0,5,-7,1,-4,0,4,-103,0,16,-11,0,-9,1,-3,0,3,-115,0,-9,1,-4,0,3,-127,0,3,7,-112,0,-10,1,-4,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,7,-111,0,7,-10,1,-4,0,3,7,-112,0,10,-7,1,-6,0,3,7,-112,0,7,-2,1,-5,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,4,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,2,-3,1,5,-122,0,-7,1,-120,0,5,-7,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-116,0,-9,1,-3,0,3,-127,0,3,9,-113,0,-10,1,-3,0,3,9,-112,0,-2,1,-9,0,1,-2,0,3,7,-112,0,-2,1,-9,0,1,-2,0,3,7,-112,0,1,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,10,-112,0,1,-10,0,1,-2,0,3,7,-112,0,1,-10,0,1,-2,0,3,7,-112,0,7,-10,1,-3,0,3,7,-113,0,10,-7,1,-5,0,3,7,-113,0,7,-2,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,1,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,-3,1,-2,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,-12,1,-2,0,3,9,-112,0,1,-10,0,1,-2,0,3,7,-111,0,5,-2,1,-10,0,1,0,3,7,-111,0,6,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,5,-14,0,3,7,-111,0,9,1,-9,0,-2,1,-2,0,3,7,-111,0,-2,10,-10,1,-3,0,3,7,-112,0,13,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,5,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,2,-6,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,-3,1,-2,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,-12,1,-2,0,3,9,-111,0,1,-11,0,-2,1,0,3,7,-111,0,6,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,6,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-111,0,1,-11,0,-2,1,0,3,7,-111,0,9,1,-9,0,-2,1,-2,0,3,7,-111,0,10,-11,1,-3,0,3,7,-112,0,7,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,5,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,2,-6,1,-122,0,-5,1,-13435,0,-2,1,-3,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,1,-3,0,-8,1,-2,0,3,7,-111,0,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-110,0,2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,6,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-111,0,9,-10,0,-2,1,-2,0,3,7,-111,0,10,1,-3,0,-7,1,-3,0,3,9,-112,0,7,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,1,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,-7,1,-122,0,6,-3,1,2,-13435,0,6,1,-3,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,17,-11,0,-9,1,-2,0,2,-115,0,-10,1,-3,0,2,-113,0,1,-3,0,-8,1,-2,0,3,7,-111,0,1,-12,0,1,0,3,10,-110,0,5,1,-12,0,1,0,3,10,-110,0,5,1,-12,0,1,0,3,10,-110,0,-2,1,-12,0,1,0,3,10,-110,0,-2,1,-12,0,1,0,3,9,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,2,1,-12,0,1,0,3,7,-111,0,10,-10,0,-2,1,-2,0,3,7,-111,0,10,1,-3,0,-7,1,-3,0,3,9,-111,0,-2,7,-3,1,-5,0,1,-3,0,3,2,-116,0,1,-5,0,1,-3,0,2,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,-7,1,-122,0,6,-2,1,2,5,-13436,0,6,-2,5,-123,0,5,-6,1,-120,0,5,-7,1,-2,0,3,-105,0,16,-11,0,-9,1,0,3,-116,0,-10,1,-2,0,3,-114,0,1,-3,0,-8,1,0,3,7,-112,0,5,-12,0,1,3,7,-111,0,5,1,-12,0,1,3,10,-111,0,5,1,-12,0,1,3,10,-111,0,2,1,-12,0,1,3,9,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,2,1,-12,0,1,3,10,-111,0,2,1,-12,0,1,3,10,-112,0,10,-11,0,1,0,3,7,-112,0,7,1,-3,0,-7,1,-2,0,3,9,-112,0,7,9,-3,1,-5,0,1,0,1,-2,3,-117,0,1,-5,0,1,-2,0,3,-118,0,1,-5,0,1,-2,0,3,-118,0,-7,1,-121,0,5,-6,1,-123,0,6,-2,5,-13564,0,-4,1,2,-122,0,2,1,-2,0,-2,1,5,-2,0,3,-105,0,16,-11,0,2,0,-6,1,5,0,3,-116,0,-10,1,-2,0,3,-114,0,1,-3,0,-8,1,0,3,7,-112,0,5,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,10,-11,0,1,0,3,10,-112,0,7,1,-3,0,-7,1,-2,0,3,9,-112,0,-2,9,-3,1,-5,0,1,0,1,-2,3,-117,0,2,-5,0,1,-2,0,3,-118,0,1,-5,0,1,-2,0,3,-118,0,5,-5,1,5,-122,0,6,-3,1,5,-13692,0,-2,1,2,-124,0,-5,1,-3,0,3,-105,0,16,-12,0,-7,1,-2,0,3,-116,0,-10,1,-2,0,3,-114,0,6,-3,0,-8,1,0,3,9,-113,0,6,-11,0,1,3,7,-112,0,5,-12,0,1,3,7,-112,0,5,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,2,1,-11,0,1,3,7,-112,0,10,1,-10,0,1,0,3,7,-112,0,7,-2,1,-2,0,-7,1,-2,0,3,7,-112,0,-2,9,-3,1,-5,0,1,-2,0,-2,3,-117,0,2,-5,0,1,-2,0,3,-118,0,2,-4,0,1,5,-2,0,3,-119,0,-5,1,-124,0,6,1,5,-13561,0,3,-8,0,3,-118,0,3,-8,0,3,-117,0,3,-10,0,8,-106,0,16,-9,0,3,-4,0,-3,1,-3,0,8,3,-115,0,3,-2,0,-2,1,-6,0,-2,3,9,-115,0,-4,1,-5,0,-4,3,9,-113,0,2,-11,1,-2,3,9,-113,0,1,-10,0,1,-2,3,10,-113,0,1,-10,0,1,-2,3,10,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,10,-113,0,5,-9,0,-2,1,-2,3,10,-112,0,7,1,-3,0,-7,1,-3,3,9,-112,0,-2,7,-3,1,-5,0,1,0,-3,3,9,-112,0,13,3,-3,1,-5,0,1,0,-2,3,7,-114,0,3,-2,0,2,-5,0,1,0,8,3,-115,0,3,-3,0,-5,1,-2,0,8,-117,0,3,-3,0,-3,1,-2,0,3,-118,0,3,-8,0,3,-13303,0,-8,3,-120,0,-8,3,-120,0,-8,3,-120,0,-8,3,-119,0,3,-8,0,3,-107,0,16,-10,0,3,-8,0,3,-118,0,3,-8,0,3,7,9,-116,0,-3,1,-6,0,-2,3,7,9,-114,0,5,-3,0,-6,1,-3,3,7,-114,0,2,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,-2,1,-9,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,5,-10,0,-2,3,7,-114,0,5,-10,0,-2,3,7,-113,0,10,1,-3,0,-6,1,-3,3,7,-114,0,7,-3,1,-6,0,-2,3,-2,7,-114,0,7,3,-8,0,3,7,10,-116,0,3,-8,0,3,-118,0,-2,3,-7,0,3,-119,0,-8,3,-120,0,-8,3,-120,0,3,-7,0,3,-119,0,3,-7,0,3,-12920,0,-6,3,-122,0,-7,3,-121,0,-6,3,-123,0,-4,5,-123,0,-6,3,-121,0,-8,3,-108,0,16,-11,0,-8,3,-120,0,3,-6,0,3,7,-119,0,3,-6,0,3,-2,7,-117,0,1,3,1,-5,0,3,-3,7,-116,0,1,3,-6,1,-2,3,7,9,-116,0,1,3,-7,0,3,-2,7,-116,0,1,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,1,-8,0,3,7,10,-116,0,6,-8,0,3,-2,7,-116,0,6,3,-6,1,-2,3,-2,7,-115,0,10,1,-8,3,-3,7,-116,0,7,-8,3,-2,7,-117,0,10,-8,3,10,-119,0,-8,3,-120,0,-8,3,-121,0,-6,3,-123,0,-4,5,-123,0,-7,3,-121,0,-7,3,-121,0,3,-5,0,-2,3,-12665,0,-4,3,-123,0,-6,3,-124,0,5,1,-125,0,-3,5,1,-124,0,-4,5,-124,0,-4,5,-238,0,15,-12,0,-6,3,-122,0,-6,3,7,-121,0,-6,3,-2,7,-120,0,-6,3,-2,7,13,-119,0,-7,3,-2,7,10,-118,0,-2,3,-2,11,-3,3,-2,7,9,-117,0,3,-5,11,-2,3,-3,7,-116,0,3,-7,11,3,-2,7,10,-117,0,-7,11,3,-2,7,10,-116,0,3,-7,11,3,-2,7,10,-117,0,3,-5,11,-2,3,-2,7,9,-117,0,1,-2,3,-2,11,-3,3,-3,7,-118,0,-7,3,-2,7,10,-116,0,-2,7,-6,3,-2,7,13,-118,0,7,-6,3,-2,7,-119,0,9,7,-5,3,7,-121,0,-6,3,-251,0,-4,5,-124,0,1,-3,5,-124,0,1,-3,5,-125,0,-2,5,-124,0,-7,3,-122,0,-5,3,-12539,0,-4,3,-878,0,17,-270,0,-2,9,-2,7,10,-122,0,9,-5,7,10,-120,0,13,7,-2,3,-2,0,-2,7,9,-119,0,-2,3,-2,11,3,-2,0,-3,7,-117,0,3,-5,11,3,0,-3,7,-118,0,-6,11,3,-3,7,-118,0,-6,11,3,-3,7,-118,0,-6,11,3,-3,7,-117,0,3,-5,11,3,0,-3,7,-118,0,-2,3,-2,11,3,-2,0,-3,7,-118,0,-8,7,13,-119,0,-8,7,-120,0,-7,7,-122,0,9,-4,7,9,-1018,0,-5,3,-13421,0,16,-271,0,-3,7,-124,0,-5,7,-122,0,-8,7,-119,0,7,0,-2,7,-3,0,-3,7,-120,0,-2,11,-3,0,-3,7,-119,0,-4,11,-2,0,-3,7,-119,0,-4,11,-2,0,-3,7,-119,0,-4,11,-2,0,-3,7,-120,0,-2,11,-6,7,-121,0,-7,7,-118,0,-9,7,-120,0,-7,7,-122,0,-5,10,-14572,0,16,-271,0,-3,7,-124,0,-5,7,-122,0,7,-4,0,-3,7,-119,0,7,0,-8,7,-120,0,-8,7,-120,0,-2,11,-4,0,-2,7,-120,0,-2,11,-3,0,-3,7,-120,0,-2,11,-4,0,-2,7,-121,0,-3,7,-2,0,-2,7,-122,0,-6,7,-118,0,-9,7,-120,0,-7,7,-122,0,7,-3,10,7,-14572,0,16,-271,0,10,-2,7,-124,0,-5,7,-122,0,7,-3,0,-4,7,-119,0,7,-3,0,-6,7,-120,0,-3,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-120,0,-3,11,-3,0,-2,7,-122,0,-6,7,-118,0,9,-8,7,-120,0,-7,7,-122,0,9,-4,7,-14572,0,16,-271,0,-2,10,9,-124,0,9,-4,7,-122,0,7,-4,0,-3,7,-119,0,7,0,-3,11,-2,0,-2,7,10,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-120,0,-3,11,0,-4,7,-118,0,9,-7,7,10,-121,0,-4,7,10,7,-123,0,9,-2,7,-14573,0,16,-398,0,-2,9,-3,7,-122,0,7,-3,11,0,-3,7,-119,0,7,-5,11,0,-2,7,10,-119,0,-6,11,0,7,9,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-118,0,9,-5,11,0,-3,7,-119,0,7,-3,11,-4,7,-121,0,-5,7,10,-14699,0,16,-398,0,-5,7,-122,0,7,-4,11,-3,7,-119,0,7,-6,11,-2,7,10,-119,0,-7,11,7,9,-119,0,-7,11,7,9,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-118,0,7,-6,11,-2,7,10,-119,0,7,-4,11,-3,7,-121,0,-5,7,10,-14699,0,17,-398,0,-4,7,9,-122,0,10,-4,11,-3,7,-119,0,7,-6,11,-2,7,-120,0,-7,11,7,10,-119,0,-7,11,7,10,-119,0,-7,11,7,10,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-118,0,10,-6,11,7,13,-120,0,7,-4,11,-3,7,-121,0,-5,7,10,-14699,0,15,-398,0,-2,7,-2,9,10,-122,0,7,-4,11,13,-122,0,10,-5,11,7,10,-119,0,7,-7,11,7,-120,0,-7,11,7,-120,0,-7,11,7,-120,0,-7,11,7,-119,0,10,-7,11,7,-120,0,7,-5,11,-2,7,-120,0,10,-4,11,7,-123,0,-5,9,-14700,0,14,-399,0,7,-2,10,-124,0,7,-2,11,-2,7,-122,0,7,-4,11,7,13,-121,0,7,-5,11,7,10,-119,0,7,-7,11,7,-120,0,-7,11,7,-119,0,10,-7,11,7,-120,0,7,-5,11,-2,7,-120,0,10,-4,11,-2,7,-122,0,7,-2,11,-2,7,-124,0,-3,10,-14573,0,14,-126,0,-2,15,14,-12,0,-2,6,-4,3,-108,0,15,-12,0,6,1,-6,3,-119,0,6,1,-8,3,-117,0,6,1,-10,3,-116,0,6,-12,3,-115,0,-5,3,-3,11,-5,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-5,3,-3,11,-5,3,-115,0,-13,3,-116,0,-11,3,-118,0,-9,3,-120,0,-7,3,-122,0,-2,1,-3,3,-14060,0,14,-126,0,-3,15,-12,0,-3,5,-2,6,2,-106,0,14,15,16,-2,15,-10,0,5,-6,0,3,-106,0,17,-2,15,-10,0,5,-8,0,3,-106,0,15,-10,0,5,-4,0,-3,12,-3,0,3,-115,0,5,-4,0,12,-3,3,12,-3,0,2,-114,0,5,-3,0,-2,12,-3,3,-2,12,-3,0,2,-113,0,3,-2,0,-2,12,-5,3,-2,12,-2,0,2,-113,0,3,-2,0,12,-7,3,12,-2,0,2,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,-2,12,-5,3,-2,12,-2,0,3,-113,0,3,-3,0,-2,12,-3,3,-2,12,-3,0,3,-114,0,6,-3,0,12,-3,3,12,-3,0,3,-116,0,5,-3,0,-3,12,-3,0,3,-118,0,5,-7,0,3,-120,0,1,-5,0,3,-122,0,-3,1,-2,3,-13930,0,17,-4,16,-123,0,-5,16,-123,0,-5,16,-123,0,17,-3,16,17,-123,0,17,-3,16,17,-141,0,-3,12,-125,0,12,3,12,-124,0,12,-3,3,12,-122,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-122,0,12,-3,3,12,-124,0,12,3,12,-125,0,-3,12,-14316,0,17,-2,16,-125,0,-3,16,-125,0,-2,16,17,-125,0,-3,16,-125,0,-2,16,17,-125,0,-3,16,-125,0,17,-2,16,-142,0,3,-2,1,-124,0,-4,3,2,-123,0,-4,3,2,-123,0,-5,3,-123,0,-5,3,-123,0,-5,3,-123,0,1,-4,3,-123,0,1,-3,3,1,-124,0,-2,3,1,-14316,0,-3,16,-125,0,-3,16,-125,0,17,-2,16,-126,0,15,-126,0,-2,16,17,-126,0,16,-126,0,15,-2,16,-125,0,-3,16,-125,0,-3,16,-141,0,-4,3,1,-123,0,1,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,5,-123,0,-4,3,6,-123,0,-5,3,-124,0,-2,3,1,-14316,0,16,-2,17,-125,0,-2,16,17,-125,0,17,-2,16,-254,0,17,-126,0,17,16,17,-126,0,16,-254,0,15,-2,16,-125,0,-3,16,-125,0,17,16,17,-13,0,1,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,6,-123,0,2,-4,3,-124,0,-3,3,-125,0,-3,3,-14829,0,17,-126,0,17,16,17,-126,0,16,-399,0,-3,3,-124,0,-5,3,-123,0,-5,3,-123,0,-5,3,-123,0,2,-4,3,-124,0,-3,3,-125,0,-3,3,-14957,0,17,-126,0,17,16,17,-126,0,16,-399,0,-3,3,-125,0,-3,3,-124,0,-5,3,-123,0,2,-4,3,-124,0,-3,3,-125,0,-2,3,2,-125,0,-2,3,2,-14957,0,16,-126,0,17,-2,16,-126,0,16,-271,0,-3,3,-125,0,-3,3,-125,0,1,3,1,-125,0,5,3,5,-125,0,5,3,6,-125,0,-2,3,2,-125,0,-2,3,2,-15085,0,15,-126,0,15,16,14,-126,0,15,-271,0,-3,3,-125,0,1,3,5,-124,0,-2,5,3,-2,5,-124,0,5,3,6,-125,0,-3,3,-125,0,-2,3,2,-14828,0,-2,17,16,-14,0,5,6,3,-108,0,-3,16,-125,0,-2,16,17,-126,0,15,-126,0,14,16,15,-126,0,14,-126,0,-3,16,-14,0,-3,3,-108,0,17,-2,16,-14,0,5,3,5,-108,0,-3,17,-13,0,-2,5,3,-2,5,-124,0,5,3,1,-125,0,-3,3,-125,0,-3,3,-15101,0,-2,3,1,-108,0,17,-2,16,-14,0,-3,3,-108,0,-2,16,15,-14,0,-3,3,-108,0,15,-2,16,-125,0,-2,16,15,-14,0,-3,3,-108,0,17,-2,16,-14,0,6,3,1,-124,0,-2,5,3,-2,5,-124,0,5,3,5,-125,0,-3,3,-125,0,-3,3,-15469,0,14,-15,0,-3,3,-108,0,-3,14,-14,0,1,-2,3,-109,0,14,-15,0,6,3,6,-125,0,5,3,5,-125,0,5,3,5,-125,0,-3,3,-125,0,-3,3,-15725,0,14,-15,0,-3,3,-125,0,-3,3,-125,0,-3,3,-125,0,-3,3,-125,0,-3,3,-893506,0],\"uuid\":\"C4E0CFD1-227D-4C27-8038-65D60F3231F9\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[11141120,8912896,7798784,5570560,14483456,12255232,8947848,4456448,7829367,11184810,13395507,1118481,5592405,13382400,16737792,13408512,16750848],\"bounds\":[41,86,44,82,0,73]}");

/***/ }),
/* 29 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[50,76,51,76,8,54],\"size\":[128,128,128],\"data\":[-137669,0,-3,6,-126,0,-2,6,-126,0,-2,6,-126,0,6,-127,0,6,-1663,0,-2,1,-125,0,-4,1,-124,0,-4,1,6,-124,0,-3,1,6,-125,0,-3,6,-13819,0,-2,6,-126,0,-2,6,-126,0,-2,6,-126,0,6,-1535,0,1,-126,0,-3,1,-126,0,-3,1,-126,0,-2,1,-14205,0,1,-127,0,-2,1,-126,0,-2,1,-126,0,1,-1406,0,-3,1,-125,0,-3,1,-125,0,-4,1,-126,0,1,-14206,0,1,-127,0,-2,1,-126,0,-2,1,-126,0,-2,1,-1406,0,-2,1,-125,0,1,-2,8,1,-124,0,1,8,1,-126,0,1,-14207,0,1,-126,0,-3,1,-125,0,-3,1,-125,0,-3,1,-1406,0,8,-126,0,-3,8,-126,0,-2,8,-14461,0,-3,1,-125,0,-3,1,-125,0,-2,1,8,-1272,0,2,-8,0,2,-118,0,2,-4,0,-2,8,-2,0,2,-118,0,2,-4,0,-3,8,0,2,-118,0,2,-5,0,-2,8,0,2,-118,0,2,-8,0,2,-118,0,2,-8,0,2,-105,0,-3,1,-14223,0,-3,8,-125,0,-3,8,-126,0,-2,8,-888,0,2,-8,0,3,-118,0,2,-8,0,3,-119,0,6,-7,0,6,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-106,0,-3,1,-14222,0,-2,8,-126,0,-3,8,-125,0,-3,8,-760,0,2,-8,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-107,0,-3,1,-14349,0,-3,8,-125,0,-3,8,-125,0,-3,8,-633,0,3,-7,0,3,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-108,0,-3,1,-14348,0,-3,8,-125,0,-3,8,-125,0,-3,8,-633,0,3,-7,0,3,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-109,0,-3,1,-14347,0,-2,8,-126,0,-3,8,-125,0,-3,8,-125,0,-3,8,-505,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-2,0,-2,8,-3,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-110,0,-3,1,-14474,0,-3,8,-125,0,-3,8,-125,0,-3,8,-125,0,-2,8,-378,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-2,0,-3,8,-2,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-111,0,-3,1,-14473,0,-2,8,-125,0,-4,8,-124,0,-4,8,-125,0,-3,8,-377,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-3,0,-2,8,-2,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-112,0,-3,1,-14599,0,-4,8,-124,0,-5,8,-123,0,-5,8,-124,0,-3,8,-249,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-113,0,-3,1,-14599,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-124,0,-3,8,-121,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-114,0,-3,1,-14725,0,-4,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,-3,0,-3,8,0,3,-119,0,6,-7,0,6,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-115,0,-3,1,-14725,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,-2,0,-5,8,3,-119,0,6,-3,0,-3,8,0,6,-119,0,1,-7,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-5,8,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,2,-3,0,-2,8,-2,0,2,-114,0,-4,7,0,2,-7,0,2,-116,0,-3,1,-14467,0,-3,8,-125,0,-3,8,-126,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,0,-6,8,3,-119,0,6,0,-5,8,0,6,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-6,8,2,-115,0,-2,7,-2,0,2,-2,0,-4,8,0,2,-114,0,-4,7,0,2,-7,0,2,-114,0,-4,7,0,2,-7,0,2,-115,0,-2,7,-3,1,-123,0,-2,7,-14341,0,-3,8,-125,0,-3,8,-126,0,8,-127,0,-3,8,-124,0,-5,8,-122,0,-6,8,-120,0,3,0,-6,8,3,-119,0,1,0,-5,8,0,1,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-5,8,0,2,-119,0,2,0,-6,8,2,-114,0,-4,7,0,2,-3,0,-2,8,-2,0,2,-114,0,-4,7,0,2,-7,0,2,-114,0,-4,7,-3,1,-122,0,-2,7,-14214,0,-2,4,-125,0,4,-2,8,4,-124,0,4,8,0,4,-124,0,4,-2,0,4,-125,0,-2,4,-125,0,-5,8,-122,0,-6,8,-120,0,3,0,-6,8,3,-119,0,1,0,-5,8,0,1,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-5,8,0,2,-119,0,2,0,-6,8,2,-115,0,-2,7,-2,0,2,-2,0,-4,8,0,2,-114,0,-4,7,-2,0,2,-6,0,2,-114,0,-4,7,0,-3,1,-121,0,-2,7,-14214,0,-2,5,-125,0,5,-2,6,5,-124,0,5,6,0,5,-124,0,5,-2,0,5,-125,0,-2,5,-125,0,-4,8,-123,0,-6,8,-121,0,2,-6,8,3,-120,0,1,-5,8,0,1,-120,0,1,-5,8,0,1,-120,0,1,-6,8,1,-120,0,1,-5,8,0,1,-120,0,2,-5,8,0,2,-120,0,2,-6,8,2,-120,0,2,0,-4,8,-2,2,-114,0,-4,7,-2,0,2,-5,0,2,-115,0,-4,7,-2,0,-3,1,-119,0,-4,7,-125,0,-2,7,-14086,0,-2,6,-125,0,-4,6,-124,0,-2,6,0,6,-124,0,6,-2,0,6,-124,0,-3,6,-126,0,-3,8,-124,0,-2,8,1,8,2,-121,0,2,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,2,-121,0,2,-5,8,2,-121,0,2,0,-4,8,2,-121,0,-2,2,-4,0,2,-116,0,-2,7,-4,0,-5,2,-116,0,-4,7,-3,0,-2,1,-2,5,-117,0,-4,7,-124,0,-4,7,-14085,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-3,6,-125,0,2,-4,1,-123,0,2,-3,1,2,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,2,-122,0,2,0,-3,8,2,-122,0,2,0,-3,8,2,-123,0,-4,2,-116,0,-4,7,-124,0,-4,7,-4,0,-3,5,-117,0,-4,7,-124,0,-4,7,-14213,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-126,0,2,-126,0,-3,2,-124,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,-5,2,-244,0,-3,7,-2,0,-3,6,-119,0,-4,7,-2,0,-2,6,-2,5,-2,9,-116,0,-4,7,-3,0,-3,6,-118,0,-4,7,-14213,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-252,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-125,0,-3,2,-245,0,-4,7,-4,6,-120,0,-4,7,-5,6,-3,9,8,-115,0,-4,7,0,-5,6,5,-2,4,-115,0,-4,7,-2,0,-4,6,-2,5,-116,0,-3,7,-14085,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-252,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-248,0,-3,6,-122,0,-4,7,-5,6,-3,0,8,-115,0,-4,7,-6,6,-3,9,8,-114,0,-4,7,-6,6,-2,5,8,-115,0,-4,7,0,-5,6,-2,5,4,-115,0,-4,7,-3,0,-4,6,-14077,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-125,0,-2,6,-126,0,-2,5,-125,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-125,0,-2,5,-249,0,-3,6,-123,0,-3,7,-2,6,-7,0,8,-114,0,-4,7,-2,6,0,-2,6,-2,0,-3,9,8,-113,0,-4,7,-7,6,0,4,8,-114,0,-4,7,-3,0,-4,6,0,4,-116,0,-3,7,-14212,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-125,0,-2,4,-125,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-125,0,-2,4,-250,0,-3,6,-124,0,-4,6,-123,0,-4,7,6,-5,0,-3,9,-115,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14083,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-3,1,-125,0,-4,1,-124,0,-5,1,-123,0,-5,1,-123,0,-5,1,-123,0,-4,1,-124,0,-3,1,-250,0,-3,6,-125,0,-4,6,-122,0,-4,7,-2,6,-5,0,-3,9,-114,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14083,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-2,6,-2,1,-124,0,6,-3,1,-123,0,-5,1,6,-122,0,-5,1,-2,6,-121,0,-5,1,-2,6,-121,0,-5,1,-2,6,-121,0,-5,1,6,-123,0,-4,1,-124,0,6,-3,1,-122,0,-5,6,-122,0,-6,6,-120,0,-4,7,-3,6,-5,0,-3,9,-113,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14082,0,-2,6,-125,0,-4,6,-124,0,6,-3,1,-124,0,6,-3,1,-124,0,-3,6,1,-123,0,-7,6,-121,0,-7,6,-121,0,-7,6,-121,0,-7,6,-121,0,-7,6,-122,0,-3,6,1,-124,0,6,-3,1,-123,0,-4,6,1,-122,0,-5,6,-121,0,-3,7,-3,6,-6,0,-2,9,-113,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14082,0,-2,6,-125,0,-4,6,-124,0,6,-3,1,-124,0,-3,6,1,-123,0,-7,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-121,0,-7,6,-122,0,-3,6,1,-123,0,-4,6,1,-123,0,-4,6,-121,0,-4,7,-2,6,-122,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14210,0,-2,6,-125,0,-4,6,-123,0,-6,6,-121,0,-8,6,-120,0,-7,6,-121,0,-3,6,-2,4,-2,1,-121,0,-3,6,-2,4,-2,1,-121,0,-3,6,-2,4,-2,1,-121,0,-7,6,-121,0,-8,6,-121,0,-7,6,-122,0,-4,6,-124,0,-3,6,-121,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14337,0,-2,6,-124,0,-6,6,-121,0,-7,6,-121,0,-3,6,-2,4,1,4,-121,0,-3,6,-3,4,-122,0,-3,6,-3,4,-122,0,-3,6,-3,4,-122,0,-3,6,-4,4,-121,0,-7,6,-122,0,-6,6,-124,0,-2,6,-249,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14592,0,-3,6,-124,0,-2,6,-3,4,-123,0,6,-2,4,8,-124,0,6,-2,4,8,-124,0,6,-2,4,8,-124,0,-2,6,-3,4,-124,0,-3,6,-506,0,-3,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14720,0,-3,4,-125,0,4,-2,8,-125,0,4,-2,8,-125,0,4,-2,8,-125,0,-3,4,-634,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14592,0,-2,7,-125,0,7,-3,8,-124,0,7,-4,8,-123,0,7,-4,8,-123,0,7,-3,8,-124,0,7,-2,8,7,-125,0,-2,7,-507,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14463,0,-3,7,-124,0,-3,7,-2,8,-122,0,-2,7,-5,8,-121,0,-2,7,-5,8,-121,0,-2,7,-5,8,-121,0,-2,7,-4,8,-122,0,-2,7,-3,8,7,-123,0,-4,7,-506,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14211,0,7,-123,0,-4,7,0,7,-121,0,-5,7,-122,0,-5,7,-2,8,-120,0,-3,7,-5,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-121,0,-2,7,-3,8,-2,7,-121,0,-6,7,-124,0,-2,7,-379,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14334,0,-6,7,-121,0,-8,7,-119,0,-6,7,-2,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-120,0,-7,7,-122,0,-4,7,-250,0,-3,7,-126,0,-3,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14334,0,-6,7,-121,0,-8,7,-119,0,-6,7,-2,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-119,0,-2,7,-5,8,-2,7,-120,0,-7,7,-122,0,-4,7,-251,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-14335,0,-4,7,-122,0,-7,7,-121,0,-5,7,8,-2,7,-119,0,-3,7,-5,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-119,0,-2,7,-5,8,-2,7,-120,0,-2,7,-3,8,-2,7,-121,0,-6,7,-123,0,-4,7,-251,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14589,0,-5,7,-122,0,-7,7,-121,0,-2,7,-2,8,-4,7,-120,0,-2,7,-3,8,-3,7,-120,0,-2,7,-3,8,-3,7,-120,0,-2,7,-3,8,-2,7,-121,0,-2,7,-2,8,-2,7,-123,0,-4,7,-126,0,5,-252,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-14718,0,-4,7,-123,0,-6,7,-122,0,-6,7,-122,0,-6,7,-123,0,-4,7,-124,0,5,-2,7,5,-123,0,-6,5,-123,0,5,0,7,5,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-15485,0,-2,5,-125,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-15614,0,-2,7,-125,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-15870,0,-2,7,-126,0,-2,7,-126,0,-2,7,-126,0,-2,7,-1203131,0],\"uuid\":\"F02050FE-4200-47B8-877A-2105B74D5E66\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[13260,170,187,10053120,13408512,3381759,43520,16764006,13158],\"bounds\":[50,76,51,76,8,54]}");

/***/ }),
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[59,68,55,72,0,47],\"size\":[128,128,128],\"data\":[-7102,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-120,0,-3,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-118,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-119,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-121,0,-6,9,-123,0,-4,9,-14204,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-118,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-2,0,-5,4,-119,0,-2,9,-2,0,-5,4,-119,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-121,0,-6,9,-123,0,-4,9,-14204,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,5,-121,0,-2,9,-2,0,5,6,5,-120,0,-3,9,-3,0,5,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,-3,0,5,-122,0,-2,9,-2,0,5,6,5,-121,0,-2,9,-2,0,-3,5,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,12,-121,0,-6,9,-123,0,-4,9,-14205,0,-3,9,-123,0,-6,9,-121,0,-2,9,-4,0,12,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,12,-122,0,-6,9,-124,0,-3,9,-14205,0,-2,9,-124,0,-6,9,-121,0,-2,9,-4,0,11,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,11,-122,0,-6,9,-124,0,-2,9,-14206,0,9,-125,0,-6,9,-122,0,9,-4,0,11,-122,0,9,-4,0,9,11,-120,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,9,11,-121,0,9,-4,0,11,-122,0,-6,9,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,11,-121,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,11,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-121,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14333,0,-5,9,12,-122,0,9,-4,0,11,-122,0,9,-4,0,11,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,11,-122,0,9,-4,0,11,-122,0,-5,9,12,-14458,0,-5,9,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-122,0,-2,9,-126,0,-2,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,-5,9,12,-14458,0,-6,9,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,9,-121,0,-2,9,-2,0,6,-2,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-3,0,5,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-3,0,5,6,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,6,-2,5,-122,0,9,-4,0,9,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,-6,9,-14332,0,9,-125,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,12,-122,0,9,-3,0,5,9,-122,0,9,-2,0,5,-2,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-3,6,-122,0,9,-2,0,5,-2,6,-122,0,9,-3,0,5,9,-122,0,9,-4,0,12,-122,0,9,-4,0,9,-122,0,-6,9,-124,0,9,-14207,0,9,-125,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,0,-3,5,12,-122,0,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-122,0,9,-2,0,-2,6,5,-122,0,9,0,-3,5,12,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,-6,9,-124,0,9,-14207,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,6,4,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,-2,9,-121,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,0,-2,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,-6,9,-124,0,-2,9,-14333,0,-4,9,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-123,0,9,0,-2,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-122,0,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-123,0,-4,9,-14460,0,-4,9,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-123,0,9,0,-2,6,4,6,-121,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-122,0,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-123,0,-4,9,-14460,0,-4,9,-123,0,-6,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,0,-3,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,0,-3,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-6,9,-123,0,-4,9,-14588,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,0,-3,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,0,-3,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,-4,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,-4,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,6,-2,4,6,-122,0,-2,9,6,4,-2,6,-122,0,-2,9,-3,6,-123,0,-2,9,-3,6,-123,0,-2,9,6,4,-2,6,-122,0,-2,9,6,-2,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14589,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,9,-122,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,0,-2,6,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,5,9,-122,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,0,-2,5,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,-126,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,-126,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,-126,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,-126,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14589,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,9,-123,0,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-124,0,9,-3,0,9,-123,0,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-14717,0,-3,9,-124,0,-2,9,3,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,-2,7,-124,0,-2,9,-2,7,-124,0,-2,9,7,8,-124,0,-2,9,7,8,-124,0,-2,9,-2,7,-124,0,-2,9,-2,7,-124,0,-2,9,-2,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,3,0,9,-124,0,-3,9,-14717,0,5,-2,9,-124,0,-2,5,3,-2,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,-2,7,-124,0,-2,5,-2,7,-124,0,-2,5,7,8,-124,0,-2,5,7,8,-124,0,-2,5,-2,7,-124,0,-2,5,-2,7,-124,0,-2,5,-2,0,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,3,-2,9,-124,0,5,-2,9,-14717,0,1,-2,5,-125,0,1,3,1,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,7,5,-123,0,-2,1,7,4,5,-123,0,-2,1,7,8,-124,0,-2,1,7,8,-124,0,-2,1,7,4,5,-123,0,-2,1,-2,7,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,0,5,-124,0,1,3,1,5,-124,0,1,-2,5,-14717,0,-3,1,-125,0,1,3,-2,1,-123,0,-5,1,-123,0,-5,1,-123,0,-2,1,-2,7,1,-123,0,-2,1,-2,4,1,-123,0,-2,1,7,8,-124,0,-2,1,7,8,-124,0,-2,1,-2,4,1,-123,0,-2,1,-2,7,1,-123,0,-5,1,-123,0,-5,1,-124,0,1,3,-2,1,-124,0,-3,1,-14717,0,-3,1,-125,0,1,4,-2,1,-124,0,-4,1,-123,0,-5,1,-123,0,-2,1,4,7,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-123,0,-2,1,4,7,1,-123,0,-5,1,-124,0,-4,1,-124,0,1,4,-2,1,-124,0,-3,1,-14845,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-4,1,-124,0,-3,1,5,-125,0,3,1,5,-125,0,3,1,5,-124,0,-3,1,5,-124,0,-4,1,-124,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15102,0,-2,1,-126,0,-2,1,-382,0,3,-127,0,3,-383,0,-2,1,-126,0,-2,1,-15742,0,3,-127,0,3,-16126,0,10,-2,3,-125,0,10,-2,3,-125,0,10,-2,3,-125,0,10,-2,3,-15997,0,10,-2,3,-124,0,-2,10,-2,3,-124,0,-2,10,-2,3,-125,0,10,-2,3,-15996,0,-3,10,3,-124,0,10,-3,3,-124,0,10,-3,3,-124,0,-3,10,3,-15996,0,-3,10,3,-124,0,10,-3,3,-124,0,10,-3,3,-124,0,-3,10,3,-15997,0,-2,10,-125,0,-4,10,-124,0,-4,10,-125,0,-2,10,-1318719,0],\"uuid\":\"B66E5C29-81F3-4E29-AF59-25B80D87DA17\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[5981507,47872,16763313,4791325,15318849,7162190,9057340,6497578,16703926,12255232,9855308,12154974,6175791],\"bounds\":[59,68,55,72,0,47]}");

/***/ }),
/* 31 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[56,71,58,65,0,29],\"size\":[128,128,128],\"data\":[-8125,0,5,-4,0,5,-122,0,5,-4,0,5,-122,0,5,-4,0,5,-16122,0,5,-4,0,5,-16378,0,5,-4,0,5,-16378,0,5,-4,0,5,-16249,0,-3,2,-2,0,-3,2,-116,0,28,-3,0,-3,2,-2,0,-3,2,-3,0,28,-116,0,-3,2,-2,0,-3,2,-15992,0,-3,2,-2,0,-3,2,-116,0,28,-2,0,-4,2,-2,0,-4,2,-2,0,28,-112,0,28,-2,0,-4,2,-2,0,-4,2,-2,0,28,-115,0,-4,2,-2,0,-4,2,-15860,0,30,-12,0,30,-113,0,30,-3,0,-3,2,-2,0,-3,2,-3,0,30,-112,0,30,-2,0,-4,2,-2,0,-4,2,-2,0,30,-112,0,30,-2,0,-4,2,-2,0,-4,2,-2,0,30,-115,0,-4,2,-2,0,-4,2,-15733,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-3,0,-3,2,-2,0,-3,2,-3,0,30,-112,0,30,-2,0,-10,2,-2,0,30,-112,0,30,-2,0,-10,2,-2,0,30,-115,0,-10,2,-119,0,-3,2,-2,0,-3,2,-15606,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-3,0,-8,4,-3,0,30,-112,0,30,-2,0,4,-8,2,4,-2,0,30,-112,0,30,-2,0,4,-8,2,4,-2,0,30,-115,0,4,-8,2,4,-15733,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-14,0,30,-112,0,30,-3,0,-8,4,-3,0,30,-112,0,30,-3,0,4,-6,2,4,-3,0,30,-116,0,4,-6,2,4,-15734,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-14,0,30,-112,0,30,-2,0,8,-8,4,8,-2,0,30,-112,0,30,-2,0,8,4,-6,2,4,8,-2,0,30,-116,0,4,-6,2,4,-15862,0,-12,28,-115,0,-2,28,-10,0,-2,28,-114,0,28,0,8,-8,10,8,0,28,-114,0,28,0,8,10,-6,2,10,8,0,28,-117,0,-8,10,-15863,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,28,0,8,4,-6,2,4,8,0,28,-117,0,-2,4,-4,2,-2,4,-15863,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,-2,28,8,4,-6,2,4,8,-2,28,-116,0,28,-2,4,-4,2,-2,4,28,-15862,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,-2,28,8,4,-6,2,4,8,-2,28,-116,0,28,-2,4,-4,2,-2,4,28,-15862,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,28,0,8,4,-6,2,4,8,0,28,-117,0,-2,4,-4,2,-2,4,-15863,0,-10,28,-117,0,28,4,-8,0,4,28,-115,0,28,4,8,-8,4,8,4,28,-114,0,28,4,8,4,-6,2,4,8,4,28,-116,0,4,0,-6,28,0,4,-15990,0,-10,28,-117,0,28,8,-3,4,-2,8,-3,4,8,28,-116,0,28,8,4,-2,2,-2,8,-2,2,4,8,28,-117,0,4,0,-6,28,0,4,-15865,0,-4,28,-123,0,28,-4,0,28,-119,0,-4,28,0,-2,8,0,-4,28,-116,0,-4,28,0,-2,8,0,-4,28,-117,0,-2,28,-6,0,-2,28,-15737,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15740,0,-6,28,-121,0,28,-6,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15613,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15613,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-15866,0,-4,28,-123,0,28,-4,0,28,-122,0,28,-4,0,28,-122,0,28,-4,0,28,-122,0,28,-4,0,28,-15995,0,-4,28,-124,0,-4,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-15996,0,-4,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-16125,0,-2,28,-126,0,-2,28,-126,0,-2,28,-16254,0,-2,28,-126,0,-2,28,-16382,0,-2,28,-16382,0,-2,28,-1613887,0],\"uuid\":\"92532D38-8574-4B38-A7D5-EDF403BF9E4D\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,10759726,14243683,8924725,9410378,9072432],\"bounds\":[56,71,58,65,0,29]}");

/***/ }),
/* 32 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[51,78,48,76,0,0],\"size\":[128,128,128],\"data\":[-6222,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-114,0,-27,18,-113,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-2087372,0],\"uuid\":\"1460D336-050C-4FBC-9338-20A33DAB3680\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[51,78,48,76,0,0]}");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var require;parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if( true&&"string"==typeof t)return __webpack_require__(34)(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]); true?module.exports=l:undefined}if(parcelRequire=f,i)throw i;return f}({"EgBh":[function(require,module,exports) {
var e={};e.useBlobBuilder=function(){try{return new Blob([]),!1}catch(e){return!0}}(),e.useArrayBufferView=!e.useBlobBuilder&&function(){try{return 0===new Blob([new Uint8Array([])]).size}catch(e){return!0}}(),module.exports.binaryFeatures=e;var r=module.exports.BlobBuilder;function t(){this._pieces=[],this._parts=[]}"undefined"!=typeof window&&(r=module.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder),t.prototype.append=function(e){"number"==typeof e?this._pieces.push(e):(this.flush(),this._parts.push(e))},t.prototype.flush=function(){if(this._pieces.length>0){var r=new Uint8Array(this._pieces);e.useArrayBufferView||(r=r.buffer),this._parts.push(r),this._pieces=[]}},t.prototype.getBuffer=function(){if(this.flush(),e.useBlobBuilder){for(var t=new r,i=0,u=this._parts.length;i<u;i++)t.append(this._parts[i]);return t.getBlob()}return new Blob(this._parts)},module.exports.BufferBuilder=t;
},{}],"kdPp":[function(require,module,exports) {
var t=require("./bufferbuilder").BufferBuilder,e=require("./bufferbuilder").binaryFeatures,i={unpack:function(t){return new r(t).unpack()},pack:function(t){var e=new n;return e.pack(t),e.getBuffer()}};function r(t){this.index=0,this.dataBuffer=t,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}function n(){this.bufferBuilder=new t}function u(t){var e=t.charCodeAt(0);return e<=2047?"00":e<=65535?"000":e<=2097151?"0000":e<=67108863?"00000":"000000"}function a(t){return t.length>600?new Blob([t]).size:t.replace(/[^\u0000-\u007F]/g,u).length}module.exports=i,r.prototype.unpack=function(){var t,e=this.unpack_uint8();if(e<128)return e;if((224^e)<32)return(224^e)-32;if((t=160^e)<=15)return this.unpack_raw(t);if((t=176^e)<=15)return this.unpack_string(t);if((t=144^e)<=15)return this.unpack_array(t);if((t=128^e)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:case 213:case 214:case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}},r.prototype.unpack_uint8=function(){var t=255&this.dataView[this.index];return this.index++,t},r.prototype.unpack_uint16=function(){var t=this.read(2),e=256*(255&t[0])+(255&t[1]);return this.index+=2,e},r.prototype.unpack_uint32=function(){var t=this.read(4),e=256*(256*(256*t[0]+t[1])+t[2])+t[3];return this.index+=4,e},r.prototype.unpack_uint64=function(){var t=this.read(8),e=256*(256*(256*(256*(256*(256*(256*t[0]+t[1])+t[2])+t[3])+t[4])+t[5])+t[6])+t[7];return this.index+=8,e},r.prototype.unpack_int8=function(){var t=this.unpack_uint8();return t<128?t:t-256},r.prototype.unpack_int16=function(){var t=this.unpack_uint16();return t<32768?t:t-65536},r.prototype.unpack_int32=function(){var t=this.unpack_uint32();return t<Math.pow(2,31)?t:t-Math.pow(2,32)},r.prototype.unpack_int64=function(){var t=this.unpack_uint64();return t<Math.pow(2,63)?t:t-Math.pow(2,64)},r.prototype.unpack_raw=function(t){if(this.length<this.index+t)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+t+" "+this.length);var e=this.dataBuffer.slice(this.index,this.index+t);return this.index+=t,e},r.prototype.unpack_string=function(t){for(var e,i,r=this.read(t),n=0,u="";n<t;)(e=r[n])<128?(u+=String.fromCharCode(e),n++):(192^e)<32?(i=(192^e)<<6|63&r[n+1],u+=String.fromCharCode(i),n+=2):(i=(15&e)<<12|(63&r[n+1])<<6|63&r[n+2],u+=String.fromCharCode(i),n+=3);return this.index+=t,u},r.prototype.unpack_array=function(t){for(var e=new Array(t),i=0;i<t;i++)e[i]=this.unpack();return e},r.prototype.unpack_map=function(t){for(var e={},i=0;i<t;i++){var r=this.unpack(),n=this.unpack();e[r]=n}return e},r.prototype.unpack_float=function(){var t=this.unpack_uint32(),e=(t>>23&255)-127;return(0===t>>31?1:-1)*(8388607&t|8388608)*Math.pow(2,e-23)},r.prototype.unpack_double=function(){var t=this.unpack_uint32(),e=this.unpack_uint32(),i=(t>>20&2047)-1023;return(0===t>>31?1:-1)*((1048575&t|1048576)*Math.pow(2,i-20)+e*Math.pow(2,i-52))},r.prototype.read=function(t){var e=this.index;if(e+t<=this.length)return this.dataView.subarray(e,e+t);throw new Error("BinaryPackFailure: read index out of range")},n.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()},n.prototype.pack=function(t){var i=typeof t;if("string"===i)this.pack_string(t);else if("number"===i)Math.floor(t)===t?this.pack_integer(t):this.pack_double(t);else if("boolean"===i)!0===t?this.bufferBuilder.append(195):!1===t&&this.bufferBuilder.append(194);else if("undefined"===i)this.bufferBuilder.append(192);else{if("object"!==i)throw new Error('Type "'+i+'" not yet supported');if(null===t)this.bufferBuilder.append(192);else{var r=t.constructor;if(r==Array)this.pack_array(t);else if(r==Blob||r==File||t instanceof Blob||t instanceof File)this.pack_bin(t);else if(r==ArrayBuffer)e.useArrayBufferView?this.pack_bin(new Uint8Array(t)):this.pack_bin(t);else if("BYTES_PER_ELEMENT"in t)e.useArrayBufferView?this.pack_bin(new Uint8Array(t.buffer)):this.pack_bin(t.buffer);else if(r==Object||r.toString().startsWith("class"))this.pack_object(t);else if(r==Date)this.pack_string(t.toString());else{if("function"!=typeof t.toBinaryPack)throw new Error('Type "'+r.toString()+'" not yet supported');this.bufferBuilder.append(t.toBinaryPack())}}}this.bufferBuilder.flush()},n.prototype.pack_bin=function(t){var e=t.length||t.byteLength||t.size;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this.bufferBuilder.append(218),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_string=function(t){var e=a(t);if(e<=15)this.pack_uint8(176+e);else if(e<=65535)this.bufferBuilder.append(216),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_array=function(t){var e=t.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this.bufferBuilder.append(220),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(e)}for(var i=0;i<e;i++)this.pack(t[i])},n.prototype.pack_integer=function(t){if(t>=-32&&t<=127)this.bufferBuilder.append(255&t);else if(t>=0&&t<=255)this.bufferBuilder.append(204),this.pack_uint8(t);else if(t>=-128&&t<=127)this.bufferBuilder.append(208),this.pack_int8(t);else if(t>=0&&t<=65535)this.bufferBuilder.append(205),this.pack_uint16(t);else if(t>=-32768&&t<=32767)this.bufferBuilder.append(209),this.pack_int16(t);else if(t>=0&&t<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(t);else if(t>=-2147483648&&t<=2147483647)this.bufferBuilder.append(210),this.pack_int32(t);else if(t>=-0x8000000000000000&&t<=0x8000000000000000)this.bufferBuilder.append(211),this.pack_int64(t);else{if(!(t>=0&&t<=0x10000000000000000))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(t)}},n.prototype.pack_double=function(t){var e=0;t<0&&(e=1,t=-t);var i=Math.floor(Math.log(t)/Math.LN2),r=t/Math.pow(2,i)-1,n=Math.floor(r*Math.pow(2,52)),u=Math.pow(2,32),a=e<<31|i+1023<<20|n/u&1048575,p=n%u;this.bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(p)},n.prototype.pack_object=function(t){var e=Object.keys(t).length;if(e<=15)this.pack_uint8(128+e);else if(e<=65535)this.bufferBuilder.append(222),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(e)}for(var i in t)t.hasOwnProperty(i)&&(this.pack(i),this.pack(t[i]))},n.prototype.pack_uint8=function(t){this.bufferBuilder.append(t)},n.prototype.pack_uint16=function(t){this.bufferBuilder.append(t>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_uint32=function(t){var e=4294967295&t;this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e)},n.prototype.pack_uint64=function(t){var e=t/Math.pow(2,32),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)},n.prototype.pack_int8=function(t){this.bufferBuilder.append(255&t)},n.prototype.pack_int16=function(t){this.bufferBuilder.append((65280&t)>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int32=function(t){this.bufferBuilder.append(t>>>24&255),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int64=function(t){var e=Math.floor(t/Math.pow(2,32)),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)};
},{"./bufferbuilder":"EgBh"}],"iSxC":[function(require,module,exports) {
"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractVersion=o,exports.wrapPeerConnectionEvent=i,exports.disableLog=s,exports.disableWarnings=a,exports.log=u,exports.deprecated=c,exports.detectBrowser=p,exports.compactObject=d,exports.walkStats=l,exports.filterStats=b;var n=!0,r=!0;function o(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n],10)}function i(e,t,n){if(e.RTCPeerConnection){var r=e.RTCPeerConnection.prototype,o=r.addEventListener;r.addEventListener=function(e,r){if(e!==t)return o.apply(this,arguments);var i=function(e){var t=n(e);t&&r(t)};return this._eventMap=this._eventMap||{},this._eventMap[r]=i,o.apply(this,[e,i])};var i=r.removeEventListener;r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[n])return i.apply(this,arguments);var r=this._eventMap[n];return delete this._eventMap[n],i.apply(this,[e,r])},Object.defineProperty(r,"on"+t,{get:function(){return this["_on"+t]},set:function(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}}function s(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(n=e,e?"adapter.js logging disabled":"adapter.js logging enabled")}function a(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(r=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))}function u(){if("object"===("undefined"==typeof window?"undefined":t(window))){if(n)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}}function c(e,t){r&&console.warn(e+" is deprecated, please use "+t+" instead.")}function p(e){var{navigator:t}=e,n={browser:null,version:null};if(void 0===e||!e.navigator)return n.browser="Not a browser.",n;if(t.mozGetUserMedia)n.browser="firefox",n.version=o(t.userAgent,/Firefox\/(\d+)\./,1);else if(t.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection&&!e.RTCIceGatherer)n.browser="chrome",n.version=o(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.mediaDevices&&t.userAgent.match(/Edge\/(\d+).(\d+)$/))n.browser="edge",n.version=o(t.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!e.RTCPeerConnection||!t.userAgent.match(/AppleWebKit\/(\d+)\./))return n.browser="Not a supported browser.",n;n.browser="safari",n.version=o(t.userAgent,/AppleWebKit\/(\d+)\./,1),n.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return n}function f(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(t){return f(t)?Object.keys(t).reduce(function(n,r){var o=f(t[r]),i=o?d(t[r]):t[r],s=o&&!Object.keys(i).length;return void 0===i||s?n:Object.assign(n,e({},r,i))},{}):t}function l(e,t,n){t&&!n.has(t.id)&&(n.set(t.id,t),Object.keys(t).forEach(function(r){r.endsWith("Id")?l(e,e.get(t[r]),n):r.endsWith("Ids")&&t[r].forEach(function(t){l(e,e.get(t),n)})}))}function b(e,t,n){var r=n?"outbound-rtp":"inbound-rtp",o=new Map;if(null===t)return o;var i=[];return e.forEach(function(e){"track"===e.type&&e.trackIdentifier===t.id&&i.push(e)}),i.forEach(function(t){e.forEach(function(n){n.type===r&&n.trackId===t.id&&l(e,n,o)})}),o}
},{}],"s6SN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=i;var e=t(require("../utils.js"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=e.log;function i(r){var t=r&&r.navigator;if(t.mediaDevices){var i=e.detectBrowser(r),a=function(e){if("object"!==o(e)||e.mandatory||e.optional)return e;var r={};return Object.keys(e).forEach(function(t){if("require"!==t&&"advanced"!==t&&"mediaSource"!==t){var n="object"===o(e[t])?e[t]:{ideal:e[t]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);var i=function(e,r){return e?e+r.charAt(0).toUpperCase()+r.slice(1):"deviceId"===r?"sourceId":r};if(void 0!==n.ideal){r.optional=r.optional||[];var a={};"number"==typeof n.ideal?(a[i("min",t)]=n.ideal,r.optional.push(a),(a={})[i("max",t)]=n.ideal,r.optional.push(a)):(a[i("",t)]=n.ideal,r.optional.push(a))}void 0!==n.exact&&"number"!=typeof n.exact?(r.mandatory=r.mandatory||{},r.mandatory[i("",t)]=n.exact):["min","max"].forEach(function(e){void 0!==n[e]&&(r.mandatory=r.mandatory||{},r.mandatory[i(e,t)]=n[e])})}}),e.advanced&&(r.optional=(r.optional||[]).concat(e.advanced)),r},c=function(e,r){if(i.version>=61)return r(e);if((e=JSON.parse(JSON.stringify(e)))&&"object"===o(e.audio)){var c=function(e,r,t){r in e&&!(t in e)&&(e[t]=e[r],delete e[r])};c((e=JSON.parse(JSON.stringify(e))).audio,"autoGainControl","googAutoGainControl"),c(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=a(e.audio)}if(e&&"object"===o(e.video)){var d=e.video.facingMode;d=d&&("object"===o(d)?d:{ideal:d});var u,s=i.version<66;if(d&&("user"===d.exact||"environment"===d.exact||"user"===d.ideal||"environment"===d.ideal)&&(!t.mediaDevices.getSupportedConstraints||!t.mediaDevices.getSupportedConstraints().facingMode||s))if(delete e.video.facingMode,"environment"===d.exact||"environment"===d.ideal?u=["back","rear"]:"user"!==d.exact&&"user"!==d.ideal||(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(function(t){var o=(t=t.filter(function(e){return"videoinput"===e.kind})).find(function(e){return u.some(function(r){return e.label.toLowerCase().includes(r)})});return!o&&t.length&&u.includes("back")&&(o=t[t.length-1]),o&&(e.video.deviceId=d.exact?{exact:o.deviceId}:{ideal:o.deviceId}),e.video=a(e.video),n("chrome: "+JSON.stringify(e)),r(e)});e.video=a(e.video)}return n("chrome: "+JSON.stringify(e)),r(e)},d=function(e){return i.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}};if(t.getUserMedia=function(e,r,o){c(e,function(e){t.webkitGetUserMedia(e,r,function(e){o&&o(d(e))})})}.bind(t),t.mediaDevices.getUserMedia){var u=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(e){return c(e,function(e){return u(e).then(function(r){if(e.audio&&!r.getAudioTracks().length||e.video&&!r.getVideoTracks().length)throw r.getTracks().forEach(function(e){e.stop()}),new DOMException("","NotFoundError");return r},function(e){return Promise.reject(d(e))})})}}}}
},{"../utils.js":"iSxC"}],"VHa8":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&("function"==typeof i?e.navigator.mediaDevices.getDisplayMedia=function(a){return i(a).then(function(i){var t=a.video&&a.video.width,o=a.video&&a.video.height,d=a.video&&a.video.frameRate;return a.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:i,maxFrameRate:d||3}},t&&(a.video.mandatory.maxWidth=t),o&&(a.video.mandatory.maxHeight=o),e.navigator.mediaDevices.getUserMedia(a)})}:console.error("shimGetDisplayMedia: getSourceId argument is not a function"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"uI5X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimMediaStream=a,exports.shimOnTrack=c,exports.shimGetSendersWithDtmf=p,exports.shimGetStats=d,exports.shimSenderReceiverGetStats=h,exports.shimAddTrackRemoveTrackWithNative=f,exports.shimAddTrackRemoveTrack=m,exports.shimPeerConnection=u,exports.fixNegotiationNeeded=l,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=i(require("../utils.js")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){e.MediaStream=e.MediaStream||e.webkitMediaStream}function c(t){if("object"!==s(t)||!t.RTCPeerConnection||"ontrack"in t.RTCPeerConnection.prototype)e.wrapPeerConnectionEvent(t,"track",function(e){return e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e});else{Object.defineProperty(t.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0});var r=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._ontrackpoly||(this._ontrackpoly=function(r){r.stream.addEventListener("addtrack",function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.track.id}):{track:n.track};var o=new Event("track");o.track=n.track,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)}),r.stream.getTracks().forEach(function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.id}):{track:n};var o=new Event("track");o.track=n,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),r.apply(this,arguments)}}}function p(e){if("object"===s(e)&&e.RTCPeerConnection&&!("getSenders"in e.RTCPeerConnection.prototype)&&"createDTMFSender"in e.RTCPeerConnection.prototype){var t=function(e,t){return{track:t,get dtmf(){return void 0===this._dtmf&&("audio"===t.kind?this._dtmf=e.createDTMFSender(t):this._dtmf=null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};var r=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,n){var i=r.apply(this,arguments);return i||(i=t(this,e),this._senders.push(i)),i};var n=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){n.apply(this,arguments);var t=this._senders.indexOf(e);-1!==t&&this._senders.splice(t,1)}}var i=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._senders=this._senders||[],i.apply(this,[e]),e.getTracks().forEach(function(e){r._senders.push(t(r,e))})};var o=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._senders=this._senders||[],o.apply(this,[e]),e.getTracks().forEach(function(e){var r=t._senders.find(function(t){return t.track===e});r&&t._senders.splice(t._senders.indexOf(r),1)})}}else if("object"===s(e)&&e.RTCPeerConnection&&"getSenders"in e.RTCPeerConnection.prototype&&"createDTMFSender"in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)){var a=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=a.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function d(e){if(e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){var e=this,[r,n,i]=arguments;if(arguments.length>0&&"function"==typeof r)return t.apply(this,arguments);if(0===t.length&&(0===arguments.length||"function"!=typeof r))return t.apply(this,[]);var o=function(e){var t={};return e.result().forEach(function(e){var r={id:e.id,timestamp:e.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type};e.names().forEach(function(t){r[t]=e.stat(t)}),t[r.id]=r}),t},s=function(e){return new Map(Object.keys(e).map(function(t){return[t,e[t]]}))};if(arguments.length>=2){return t.apply(this,[function(e){n(s(o(e)))},r])}return new Promise(function(r,n){t.apply(e,[function(e){r(s(o(e)))},n])}).then(n,i)}}}function h(t){if("object"===s(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&t.RTCRtpReceiver){if(!("getStats"in t.RTCRtpSender.prototype)){var r=t.RTCPeerConnection.prototype.getSenders;r&&(t.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t});var n=t.RTCPeerConnection.prototype.addTrack;n&&(t.RTCPeerConnection.prototype.addTrack=function(){var e=n.apply(this,arguments);return e._pc=this,e}),t.RTCRtpSender.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!0)})}}if(!("getStats"in t.RTCRtpReceiver.prototype)){var i=t.RTCPeerConnection.prototype.getReceivers;i&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=i.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!1)})}}if("getStats"in t.RTCRtpSender.prototype&&"getStats"in t.RTCRtpReceiver.prototype){var o=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof t.MediaStreamTrack){var e,r,n,i=arguments[0];return this.getSenders().forEach(function(t){t.track===i&&(e?n=!0:e=t)}),this.getReceivers().forEach(function(e){return e.track===i&&(r?n=!0:r=e),e.track===i}),n||e&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):e?e.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return o.apply(this,arguments)}}}}function f(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(function(t){return e._shimmedLocalStreams[t][0]})};var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,r){if(!r)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};var n=t.apply(this,arguments);return this._shimmedLocalStreams[r.id]?-1===this._shimmedLocalStreams[r.id].indexOf(n)&&this._shimmedLocalStreams[r.id].push(n):this._shimmedLocalStreams[r.id]=[r,n],n};var r=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var t=this;this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach(function(e){if(t.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")});var n=this.getSenders();r.apply(this,arguments);var i=this.getSenders().filter(function(e){return-1===n.indexOf(e)});this._shimmedLocalStreams[e.id]=[e].concat(i)};var n=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],n.apply(this,arguments)};var i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){var t=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach(function(r){var n=t._shimmedLocalStreams[r].indexOf(e);-1!==n&&t._shimmedLocalStreams[r].splice(n,1),1===t._shimmedLocalStreams[r].length&&delete t._shimmedLocalStreams[r]}),i.apply(this,arguments)}}function m(t){if(t.RTCPeerConnection){var r=e.detectBrowser(t);if(t.RTCPeerConnection.prototype.addTrack&&r.version>=65)return f(t);var n=t.RTCPeerConnection.prototype.getLocalStreams;t.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this,t=n.apply(this);return this._reverseStreams=this._reverseStreams||{},t.map(function(t){return e._reverseStreams[t.id]})};var i=t.RTCPeerConnection.prototype.addStream;t.RTCPeerConnection.prototype.addStream=function(e){var r=this;if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},e.getTracks().forEach(function(e){if(r.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[e.id]){var n=new t.MediaStream(e.getTracks());this._streams[e.id]=n,this._reverseStreams[n.id]=e,e=n}i.apply(this,[e])};var s=t.RTCPeerConnection.prototype.removeStream;t.RTCPeerConnection.prototype.removeStream=function(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},t.RTCPeerConnection.prototype.addTrack=function(e,r){var n=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");var i=[].slice.call(arguments,1);if(1!==i.length||!i[0].getTracks().find(function(t){return t===e}))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};var o=this._streams[r.id];if(o)o.addTrack(e),Promise.resolve().then(function(){n.dispatchEvent(new Event("negotiationneeded"))});else{var s=new t.MediaStream([e]);this._streams[r.id]=s,this._reverseStreams[s.id]=r,this.addStream(s)}return this.getSenders().find(function(t){return t.track===e})},["createOffer","createAnswer"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=o({},e,function(){var e=this,t=arguments;return arguments.length&&"function"==typeof arguments[0]?r.apply(this,[function(r){var n=p(e,r);t[0].apply(null,[n])},function(e){t[1]&&t[1].apply(null,e)},arguments[2]]):r.apply(this,arguments).then(function(t){return p(e,t)})});t.RTCPeerConnection.prototype[e]=n[e]});var a=t.RTCPeerConnection.prototype.setLocalDescription;t.RTCPeerConnection.prototype.setLocalDescription=function(){return arguments.length&&arguments[0].type?(arguments[0]=(e=this,t=arguments[0],r=t.sdp,Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(n.id,"g"),i.id)}),new RTCSessionDescription({type:t.type,sdp:r})),a.apply(this,arguments)):a.apply(this,arguments);var e,t,r};var c=Object.getOwnPropertyDescriptor(t.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(t.RTCPeerConnection.prototype,"localDescription",{get:function(){var e=c.get.apply(this);return""===e.type?e:p(this,e)}}),t.RTCPeerConnection.prototype.removeTrack=function(e){var t,r=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!e._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(e._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{},Object.keys(this._streams).forEach(function(n){r._streams[n].getTracks().find(function(t){return e.track===t})&&(t=r._streams[n])}),t&&(1===t.getTracks().length?this.removeStream(this._reverseStreams[t.id]):t.removeTrack(e.track),this.dispatchEvent(new Event("negotiationneeded")))}}function p(e,t){var r=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(i.id,"g"),n.id)}),new RTCSessionDescription({type:t.type,sdp:r})}}function u(t){var r=e.detectBrowser(t);if(!t.RTCPeerConnection&&t.webkitRTCPeerConnection&&(t.RTCPeerConnection=t.webkitRTCPeerConnection),t.RTCPeerConnection){r.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=o({},e,function(){return arguments[0]=new("addIceCandidate"===e?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});t.RTCPeerConnection.prototype[e]=n[e]});var n=t.RTCPeerConnection.prototype.addIceCandidate;t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?r.version<78&&arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}}function l(t){e.wrapPeerConnectionEvent(t,"negotiationneeded",function(e){if("stable"===e.target.signalingState)return e})}
},{"../utils.js":"iSxC","./getusermedia":"s6SN","./getdisplaymedia":"VHa8"}],"NZ1C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.filterIceServers=n;var r=t(require("../utils"));function e(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return e=function(){return r},r}function t(r){if(r&&r.__esModule)return r;if(null===r||"object"!=typeof r&&"function"!=typeof r)return{default:r};var t=e();if(t&&t.has(r))return t.get(r);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var f=u?Object.getOwnPropertyDescriptor(r,i):null;f&&(f.get||f.set)?Object.defineProperty(n,i,f):n[i]=r[i]}return n.default=r,t&&t.set(r,n),n}function n(e,t){var n=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var t=e.urls||e.url;e.url&&!e.urls&&r.deprecated("RTCIceServer.url","RTCIceServer.urls");var u="string"==typeof t;return u&&(t=[t]),t=t.filter(function(r){if(0===r.indexOf("stun:"))return!1;var e=r.startsWith("turn")&&!r.startsWith("turn:[")&&r.includes("transport=udp");return e&&!n?(n=!0,!0):e&&!n}),delete e.url,e.urls=u?t[0]:t,!!t.length}})}
},{"../utils":"iSxC"}],"YHvh":[function(require,module,exports) {
"use strict";var r={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}};r.localCName=r.generateIdentifier(),r.splitLines=function(r){return r.trim().split("\n").map(function(r){return r.trim()})},r.splitSections=function(r){return r.split("\nm=").map(function(r,e){return(e>0?"m="+r:r).trim()+"\r\n"})},r.getDescription=function(e){var t=r.splitSections(e);return t&&t[0]},r.getMediaSections=function(e){var t=r.splitSections(e);return t.shift(),t},r.matchPrefix=function(e,t){return r.splitLines(e).filter(function(r){return 0===r.indexOf(t)})},r.parseCandidate=function(r){for(var e,t={foundation:(e=0===r.indexOf("a=candidate:")?r.substring(12).split(" "):r.substring(10).split(" "))[0],component:parseInt(e[1],10),protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]},n=8;n<e.length;n+=2)switch(e[n]){case"raddr":t.relatedAddress=e[n+1];break;case"rport":t.relatedPort=parseInt(e[n+1],10);break;case"tcptype":t.tcpType=e[n+1];break;case"ufrag":t.ufrag=e[n+1],t.usernameFragment=e[n+1];break;default:t[e[n]]=e[n+1]}return t},r.writeCandidate=function(r){var e=[];e.push(r.foundation),e.push(r.component),e.push(r.protocol.toUpperCase()),e.push(r.priority),e.push(r.address||r.ip),e.push(r.port);var t=r.type;return e.push("typ"),e.push(t),"host"!==t&&r.relatedAddress&&r.relatedPort&&(e.push("raddr"),e.push(r.relatedAddress),e.push("rport"),e.push(r.relatedPort)),r.tcpType&&"tcp"===r.protocol.toLowerCase()&&(e.push("tcptype"),e.push(r.tcpType)),(r.usernameFragment||r.ufrag)&&(e.push("ufrag"),e.push(r.usernameFragment||r.ufrag)),"candidate:"+e.join(" ")},r.parseIceOptions=function(r){return r.substr(14).split(" ")},r.parseRtpMap=function(r){var e=r.substr(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=3===e.length?parseInt(e[2],10):1,t.numChannels=t.channels,t},r.writeRtpMap=function(r){var e=r.payloadType;void 0!==r.preferredPayloadType&&(e=r.preferredPayloadType);var t=r.channels||r.numChannels||1;return"a=rtpmap:"+e+" "+r.name+"/"+r.clockRate+(1!==t?"/"+t:"")+"\r\n"},r.parseExtmap=function(r){var e=r.substr(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1]}},r.writeExtmap=function(r){return"a=extmap:"+(r.id||r.preferredId)+(r.direction&&"sendrecv"!==r.direction?"/"+r.direction:"")+" "+r.uri+"\r\n"},r.parseFmtp=function(r){for(var e,t={},n=r.substr(r.indexOf(" ")+1).split(";"),a=0;a<n.length;a++)t[(e=n[a].trim().split("="))[0].trim()]=e[1];return t},r.writeFmtp=function(r){var e="",t=r.payloadType;if(void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.parameters&&Object.keys(r.parameters).length){var n=[];Object.keys(r.parameters).forEach(function(e){r.parameters[e]?n.push(e+"="+r.parameters[e]):n.push(e)}),e+="a=fmtp:"+t+" "+n.join(";")+"\r\n"}return e},r.parseRtcpFb=function(r){var e=r.substr(r.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}},r.writeRtcpFb=function(r){var e="",t=r.payloadType;return void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.rtcpFeedback&&r.rtcpFeedback.length&&r.rtcpFeedback.forEach(function(r){e+="a=rtcp-fb:"+t+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+"\r\n"}),e},r.parseSsrcMedia=function(r){var e=r.indexOf(" "),t={ssrc:parseInt(r.substr(7,e-7),10)},n=r.indexOf(":",e);return n>-1?(t.attribute=r.substr(e+1,n-e-1),t.value=r.substr(n+1)):t.attribute=r.substr(e+1),t},r.parseSsrcGroup=function(r){var e=r.substr(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(function(r){return parseInt(r,10)})}},r.getMid=function(e){var t=r.matchPrefix(e,"a=mid:")[0];if(t)return t.substr(6)},r.parseFingerprint=function(r){var e=r.substr(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1]}},r.getDtlsParameters=function(e,t){return{role:"auto",fingerprints:r.matchPrefix(e+t,"a=fingerprint:").map(r.parseFingerprint)}},r.writeDtlsParameters=function(r,e){var t="a=setup:"+e+"\r\n";return r.fingerprints.forEach(function(r){t+="a=fingerprint:"+r.algorithm+" "+r.value+"\r\n"}),t},r.getIceParameters=function(e,t){var n=r.splitLines(e);return{usernameFragment:(n=n.concat(r.splitLines(t))).filter(function(r){return 0===r.indexOf("a=ice-ufrag:")})[0].substr(12),password:n.filter(function(r){return 0===r.indexOf("a=ice-pwd:")})[0].substr(10)}},r.writeIceParameters=function(r){return"a=ice-ufrag:"+r.usernameFragment+"\r\na=ice-pwd:"+r.password+"\r\n"},r.parseRtpParameters=function(e){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=r.splitLines(e)[0].split(" "),a=3;a<n.length;a++){var s=n[a],i=r.matchPrefix(e,"a=rtpmap:"+s+" ")[0];if(i){var p=r.parseRtpMap(i),c=r.matchPrefix(e,"a=fmtp:"+s+" ");switch(p.parameters=c.length?r.parseFmtp(c[0]):{},p.rtcpFeedback=r.matchPrefix(e,"a=rtcp-fb:"+s+" ").map(r.parseRtcpFb),t.codecs.push(p),p.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(p.name.toUpperCase())}}}return r.matchPrefix(e,"a=extmap:").forEach(function(e){t.headerExtensions.push(r.parseExtmap(e))}),t},r.writeRtpDescription=function(e,t){var n="";n+="m="+e+" ",n+=t.codecs.length>0?"9":"0",n+=" UDP/TLS/RTP/SAVPF ",n+=t.codecs.map(function(r){return void 0!==r.preferredPayloadType?r.preferredPayloadType:r.payloadType}).join(" ")+"\r\n",n+="c=IN IP4 0.0.0.0\r\n",n+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach(function(e){n+=r.writeRtpMap(e),n+=r.writeFmtp(e),n+=r.writeRtcpFb(e)});var a=0;return t.codecs.forEach(function(r){r.maxptime>a&&(a=r.maxptime)}),a>0&&(n+="a=maxptime:"+a+"\r\n"),n+="a=rtcp-mux\r\n",t.headerExtensions&&t.headerExtensions.forEach(function(e){n+=r.writeExtmap(e)}),n},r.parseRtpEncodingParameters=function(e){var t,n=[],a=r.parseRtpParameters(e),s=-1!==a.fecMechanisms.indexOf("RED"),i=-1!==a.fecMechanisms.indexOf("ULPFEC"),p=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute}),c=p.length>0&&p[0].ssrc,o=r.matchPrefix(e,"a=ssrc-group:FID").map(function(r){return r.substr(17).split(" ").map(function(r){return parseInt(r,10)})});o.length>0&&o[0].length>1&&o[0][0]===c&&(t=o[0][1]),a.codecs.forEach(function(r){if("RTX"===r.name.toUpperCase()&&r.parameters.apt){var e={ssrc:c,codecPayloadType:parseInt(r.parameters.apt,10)};c&&t&&(e.rtx={ssrc:t}),n.push(e),s&&((e=JSON.parse(JSON.stringify(e))).fec={ssrc:c,mechanism:i?"red+ulpfec":"red"},n.push(e))}}),0===n.length&&c&&n.push({ssrc:c});var u=r.matchPrefix(e,"b=");return u.length&&(u=0===u[0].indexOf("b=TIAS:")?parseInt(u[0].substr(7),10):0===u[0].indexOf("b=AS:")?1e3*parseInt(u[0].substr(5),10)*.95-16e3:void 0,n.forEach(function(r){r.maxBitrate=u})),n},r.parseRtcpParameters=function(e){var t={},n=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute})[0];n&&(t.cname=n.value,t.ssrc=n.ssrc);var a=r.matchPrefix(e,"a=rtcp-rsize");t.reducedSize=a.length>0,t.compound=0===a.length;var s=r.matchPrefix(e,"a=rtcp-mux");return t.mux=s.length>0,t},r.parseMsid=function(e){var t,n=r.matchPrefix(e,"a=msid:");if(1===n.length)return{stream:(t=n[0].substr(7).split(" "))[0],track:t[1]};var a=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"msid"===r.attribute});return a.length>0?{stream:(t=a[0].value.split(" "))[0],track:t[1]}:void 0},r.parseSctpDescription=function(e){var t,n=r.parseMLine(e),a=r.matchPrefix(e,"a=max-message-size:");a.length>0&&(t=parseInt(a[0].substr(19),10)),isNaN(t)&&(t=65536);var s=r.matchPrefix(e,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substr(12),10),protocol:n.fmt,maxMessageSize:t};if(r.matchPrefix(e,"a=sctpmap:").length>0){var i=r.matchPrefix(e,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(i[0],10),protocol:i[1],maxMessageSize:t}}},r.writeSctpDescription=function(r,e){var t=[];return t="DTLS/SCTP"!==r.protocol?["m="+r.kind+" 9 "+r.protocol+" "+e.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+e.port+"\r\n"]:["m="+r.kind+" 9 "+r.protocol+" "+e.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+e.port+" "+e.protocol+" 65535\r\n"],void 0!==e.maxMessageSize&&t.push("a=max-message-size:"+e.maxMessageSize+"\r\n"),t.join("")},r.generateSessionId=function(){return Math.random().toString().substr(2,21)},r.writeSessionBoilerplate=function(e,t,n){var a=void 0!==t?t:2;return"v=0\r\no="+(n||"thisisadapterortc")+" "+(e||r.generateSessionId())+" "+a+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},r.writeMediaSection=function(e,t,n,a){var s=r.writeRtpDescription(e.kind,t);if(s+=r.writeIceParameters(e.iceGatherer.getLocalParameters()),s+=r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":"active"),s+="a=mid:"+e.mid+"\r\n",e.direction?s+="a="+e.direction+"\r\n":e.rtpSender&&e.rtpReceiver?s+="a=sendrecv\r\n":e.rtpSender?s+="a=sendonly\r\n":e.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",e.rtpSender){var i="msid:"+a.id+" "+e.rtpSender.track.id+"\r\n";s+="a="+i,s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+i,e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+i,s+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+r.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+r.localCName+"\r\n"),s},r.getDirection=function(e,t){for(var n=r.splitLines(e),a=0;a<n.length;a++)switch(n[a]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[a].substr(2)}return t?r.getDirection(t):"sendrecv"},r.getKind=function(e){return r.splitLines(e)[0].split(" ")[0].substr(2)},r.isRejected=function(r){return"0"===r.split(" ",2)[1]},r.parseMLine=function(e){var t=r.splitLines(e)[0].substr(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}},r.parseOLine=function(e){var t=r.matchPrefix(e,"o=")[0].substr(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},r.isValidSDP=function(e){if("string"!=typeof e||0===e.length)return!1;for(var t=r.splitLines(e),n=0;n<t.length;n++)if(t[n].length<2||"="!==t[n].charAt(1))return!1;return!0},"object"==typeof module&&(module.exports=r);
},{}],"NJ2u":[function(require,module,exports) {
"use strict";var e=require("sdp");function t(e){return{inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type}function r(t,r,n,a,i){var s=e.writeRtpDescription(t.kind,r);if(s+=e.writeIceParameters(t.iceGatherer.getLocalParameters()),s+=e.writeDtlsParameters(t.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":i||"active"),s+="a=mid:"+t.mid+"\r\n",t.rtpSender&&t.rtpReceiver?s+="a=sendrecv\r\n":t.rtpSender?s+="a=sendonly\r\n":t.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",t.rtpSender){var o=t.rtpSender._initialTrackId||t.rtpSender.track.id;t.rtpSender._initialTrackId=o;var c="msid:"+(a?a.id:"-")+" "+o+"\r\n";s+="a="+c,s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" "+c,t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" "+c,s+="a=ssrc-group:FID "+t.sendEncodingParameters[0].ssrc+" "+t.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" cname:"+e.localCName+"\r\n",t.rtpSender&&t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" cname:"+e.localCName+"\r\n"),s}function n(e,t){var r=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var n=e.urls||e.url;e.url&&!e.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var a="string"==typeof n;return a&&(n=[n]),n=n.filter(function(e){return 0===e.indexOf("turn:")&&-1!==e.indexOf("transport=udp")&&-1===e.indexOf("turn:[")&&!r?(r=!0,!0):0===e.indexOf("stun:")&&t>=14393&&-1===e.indexOf("?transport=udp")}),delete e.url,e.urls=a?n[0]:n,!!n.length}})}function a(e,t){var r={codecs:[],headerExtensions:[],fecMechanisms:[]},n=function(e,t){e=parseInt(e,10);for(var r=0;r<t.length;r++)if(t[r].payloadType===e||t[r].preferredPayloadType===e)return t[r]},a=function(e,t,r,a){var i=n(e.parameters.apt,r),s=n(t.parameters.apt,a);return i&&s&&i.name.toLowerCase()===s.name.toLowerCase()};return e.codecs.forEach(function(n){for(var i=0;i<t.codecs.length;i++){var s=t.codecs[i];if(n.name.toLowerCase()===s.name.toLowerCase()&&n.clockRate===s.clockRate){if("rtx"===n.name.toLowerCase()&&n.parameters&&s.parameters.apt&&!a(n,s,e.codecs,t.codecs))continue;(s=JSON.parse(JSON.stringify(s))).numChannels=Math.min(n.numChannels,s.numChannels),r.codecs.push(s),s.rtcpFeedback=s.rtcpFeedback.filter(function(e){for(var t=0;t<n.rtcpFeedback.length;t++)if(n.rtcpFeedback[t].type===e.type&&n.rtcpFeedback[t].parameter===e.parameter)return!0;return!1});break}}}),e.headerExtensions.forEach(function(e){for(var n=0;n<t.headerExtensions.length;n++){var a=t.headerExtensions[n];if(e.uri===a.uri){r.headerExtensions.push(a);break}}}),r}function i(e,t,r){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[t][e].indexOf(r)}function s(e,t){var r=e.getRemoteCandidates().find(function(e){return t.foundation===e.foundation&&t.ip===e.ip&&t.port===e.port&&t.priority===e.priority&&t.protocol===e.protocol&&t.type===e.type});return r||e.addRemoteCandidate(t),!r}function o(e,t){var r=new Error(t);return r.name=e,r.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[e],r}module.exports=function(c,d){function p(e,t){t.addTrack(e),t.dispatchEvent(new c.MediaStreamTrackEvent("addtrack",{track:e}))}function l(e,t,r,n){var a=new Event("track");a.track=t,a.receiver=r,a.transceiver={receiver:r},a.streams=n,c.setTimeout(function(){e._dispatchEvent("track",a)})}var f=function(t){var r=this,a=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){r[e]=a[e].bind(a)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",t=JSON.parse(JSON.stringify(t||{})),this.usingBundle="max-bundle"===t.bundlePolicy,"negotiate"===t.rtcpMuxPolicy)throw o("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(t.rtcpMuxPolicy||(t.rtcpMuxPolicy="require"),t.iceTransportPolicy){case"all":case"relay":break;default:t.iceTransportPolicy="all"}switch(t.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:t.bundlePolicy="balanced"}if(t.iceServers=n(t.iceServers||[],d),this._iceGatherers=[],t.iceCandidatePoolSize)for(var i=t.iceCandidatePoolSize;i>0;i--)this._iceGatherers.push(new c.RTCIceGatherer({iceServers:t.iceServers,gatherPolicy:t.iceTransportPolicy}));else t.iceCandidatePoolSize=0;this._config=t,this.transceivers=[],this._sdpSessionId=e.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(f.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(f.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),f.prototype.onicecandidate=null,f.prototype.onaddstream=null,f.prototype.ontrack=null,f.prototype.onremovestream=null,f.prototype.onsignalingstatechange=null,f.prototype.oniceconnectionstatechange=null,f.prototype.onconnectionstatechange=null,f.prototype.onicegatheringstatechange=null,f.prototype.onnegotiationneeded=null,f.prototype.ondatachannel=null,f.prototype._dispatchEvent=function(e,t){this._isClosed||(this.dispatchEvent(t),"function"==typeof this["on"+e]&&this["on"+e](t))},f.prototype._emitGatheringStateChange=function(){var e=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",e)},f.prototype.getConfiguration=function(){return this._config},f.prototype.getLocalStreams=function(){return this.localStreams},f.prototype.getRemoteStreams=function(){return this.remoteStreams},f.prototype._createTransceiver=function(e,t){var r=this.transceivers.length>0,n={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:e,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&r)n.iceTransport=this.transceivers[0].iceTransport,n.dtlsTransport=this.transceivers[0].dtlsTransport;else{var a=this._createIceAndDtlsTransports();n.iceTransport=a.iceTransport,n.dtlsTransport=a.dtlsTransport}return t||this.transceivers.push(n),n},f.prototype.addTrack=function(e,t){if(this._isClosed)throw o("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var r;if(this.transceivers.find(function(t){return t.track===e}))throw o("InvalidAccessError","Track already exists.");for(var n=0;n<this.transceivers.length;n++)this.transceivers[n].track||this.transceivers[n].kind!==e.kind||(r=this.transceivers[n]);return r||(r=this._createTransceiver(e.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(t)&&this.localStreams.push(t),r.track=e,r.stream=t,r.rtpSender=new c.RTCRtpSender(e,r.dtlsTransport),r.rtpSender},f.prototype.addStream=function(e){var t=this;if(d>=15025)e.getTracks().forEach(function(r){t.addTrack(r,e)});else{var r=e.clone();e.getTracks().forEach(function(e,t){var n=r.getTracks()[t];e.addEventListener("enabled",function(e){n.enabled=e.enabled})}),r.getTracks().forEach(function(e){t.addTrack(e,r)})}},f.prototype.removeTrack=function(e){if(this._isClosed)throw o("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(e instanceof c.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var t=this.transceivers.find(function(t){return t.rtpSender===e});if(!t)throw o("InvalidAccessError","Sender was not created by this connection.");var r=t.stream;t.rtpSender.stop(),t.rtpSender=null,t.track=null,t.stream=null,-1===this.transceivers.map(function(e){return e.stream}).indexOf(r)&&this.localStreams.indexOf(r)>-1&&this.localStreams.splice(this.localStreams.indexOf(r),1),this._maybeFireNegotiationNeeded()},f.prototype.removeStream=function(e){var t=this;e.getTracks().forEach(function(e){var r=t.getSenders().find(function(t){return t.track===e});r&&t.removeTrack(r)})},f.prototype.getSenders=function(){return this.transceivers.filter(function(e){return!!e.rtpSender}).map(function(e){return e.rtpSender})},f.prototype.getReceivers=function(){return this.transceivers.filter(function(e){return!!e.rtpReceiver}).map(function(e){return e.rtpReceiver})},f.prototype._createIceGatherer=function(e,t){var r=this;if(t&&e>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var n=new c.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(n,"state",{value:"new",writable:!0}),this.transceivers[e].bufferedCandidateEvents=[],this.transceivers[e].bufferCandidates=function(t){var a=!t.candidate||0===Object.keys(t.candidate).length;n.state=a?"completed":"gathering",null!==r.transceivers[e].bufferedCandidateEvents&&r.transceivers[e].bufferedCandidateEvents.push(t)},n.addEventListener("localcandidate",this.transceivers[e].bufferCandidates),n},f.prototype._gather=function(t,r){var n=this,a=this.transceivers[r].iceGatherer;if(!a.onlocalcandidate){var i=this.transceivers[r].bufferedCandidateEvents;this.transceivers[r].bufferedCandidateEvents=null,a.removeEventListener("localcandidate",this.transceivers[r].bufferCandidates),a.onlocalcandidate=function(i){if(!(n.usingBundle&&r>0)){var s=new Event("icecandidate");s.candidate={sdpMid:t,sdpMLineIndex:r};var o=i.candidate,c=!o||0===Object.keys(o).length;if(c)"new"!==a.state&&"gathering"!==a.state||(a.state="completed");else{"new"===a.state&&(a.state="gathering"),o.component=1,o.ufrag=a.getLocalParameters().usernameFragment;var d=e.writeCandidate(o);s.candidate=Object.assign(s.candidate,e.parseCandidate(d)),s.candidate.candidate=d,s.candidate.toJSON=function(){return{candidate:s.candidate.candidate,sdpMid:s.candidate.sdpMid,sdpMLineIndex:s.candidate.sdpMLineIndex,usernameFragment:s.candidate.usernameFragment}}}var p=e.getMediaSections(n._localDescription.sdp);p[s.candidate.sdpMLineIndex]+=c?"a=end-of-candidates\r\n":"a="+s.candidate.candidate+"\r\n",n._localDescription.sdp=e.getDescription(n._localDescription.sdp)+p.join("");var l=n.transceivers.every(function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state});"gathering"!==n.iceGatheringState&&(n.iceGatheringState="gathering",n._emitGatheringStateChange()),c||n._dispatchEvent("icecandidate",s),l&&(n._dispatchEvent("icecandidate",new Event("icecandidate")),n.iceGatheringState="complete",n._emitGatheringStateChange())}},c.setTimeout(function(){i.forEach(function(e){a.onlocalcandidate(e)})},0)}},f.prototype._createIceAndDtlsTransports=function(){var e=this,t=new c.RTCIceTransport(null);t.onicestatechange=function(){e._updateIceConnectionState(),e._updateConnectionState()};var r=new c.RTCDtlsTransport(t);return r.ondtlsstatechange=function(){e._updateConnectionState()},r.onerror=function(){Object.defineProperty(r,"state",{value:"failed",writable:!0}),e._updateConnectionState()},{iceTransport:t,dtlsTransport:r}},f.prototype._disposeIceAndDtlsTransports=function(e){var t=this.transceivers[e].iceGatherer;t&&(delete t.onlocalcandidate,delete this.transceivers[e].iceGatherer);var r=this.transceivers[e].iceTransport;r&&(delete r.onicestatechange,delete this.transceivers[e].iceTransport);var n=this.transceivers[e].dtlsTransport;n&&(delete n.ondtlsstatechange,delete n.onerror,delete this.transceivers[e].dtlsTransport)},f.prototype._transceive=function(t,r,n){var i=a(t.localCapabilities,t.remoteCapabilities);r&&t.rtpSender&&(i.encodings=t.sendEncodingParameters,i.rtcp={cname:e.localCName,compound:t.rtcpParameters.compound},t.recvEncodingParameters.length&&(i.rtcp.ssrc=t.recvEncodingParameters[0].ssrc),t.rtpSender.send(i)),n&&t.rtpReceiver&&i.codecs.length>0&&("video"===t.kind&&t.recvEncodingParameters&&d<15019&&t.recvEncodingParameters.forEach(function(e){delete e.rtx}),t.recvEncodingParameters.length?i.encodings=t.recvEncodingParameters:i.encodings=[{}],i.rtcp={compound:t.rtcpParameters.compound},t.rtcpParameters.cname&&(i.rtcp.cname=t.rtcpParameters.cname),t.sendEncodingParameters.length&&(i.rtcp.ssrc=t.sendEncodingParameters[0].ssrc),t.rtpReceiver.receive(i))},f.prototype.setLocalDescription=function(t){var r,n,s=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setLocalDescription",t.type,s.signalingState)||s._isClosed)return Promise.reject(o("InvalidStateError","Can not set local "+t.type+" in state "+s.signalingState));if("offer"===t.type)r=e.splitSections(t.sdp),n=r.shift(),r.forEach(function(t,r){var n=e.parseRtpParameters(t);s.transceivers[r].localCapabilities=n}),s.transceivers.forEach(function(e,t){s._gather(e.mid,t)});else if("answer"===t.type){r=e.splitSections(s._remoteDescription.sdp),n=r.shift();var c=e.matchPrefix(n,"a=ice-lite").length>0;r.forEach(function(t,r){var i=s.transceivers[r],o=i.iceGatherer,d=i.iceTransport,p=i.dtlsTransport,l=i.localCapabilities,f=i.remoteCapabilities;if(!(e.isRejected(t)&&0===e.matchPrefix(t,"a=bundle-only").length)&&!i.rejected){var u=e.getIceParameters(t,n),v=e.getDtlsParameters(t,n);c&&(v.role="server"),s.usingBundle&&0!==r||(s._gather(i.mid,r),"new"===d.state&&d.start(o,u,c?"controlling":"controlled"),"new"===p.state&&p.start(v));var h=a(l,f);s._transceive(i,h.codecs.length>0,!1)}})}return s._localDescription={type:t.type,sdp:t.sdp},"offer"===t.type?s._updateSignalingState("have-local-offer"):s._updateSignalingState("stable"),Promise.resolve()},f.prototype.setRemoteDescription=function(t){var r=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setRemoteDescription",t.type,r.signalingState)||r._isClosed)return Promise.reject(o("InvalidStateError","Can not set remote "+t.type+" in state "+r.signalingState));var n={};r.remoteStreams.forEach(function(e){n[e.id]=e});var f=[],u=e.splitSections(t.sdp),v=u.shift(),h=e.matchPrefix(v,"a=ice-lite").length>0,m=e.matchPrefix(v,"a=group:BUNDLE ").length>0;r.usingBundle=m;var g=e.matchPrefix(v,"a=ice-options:")[0];return r.canTrickleIceCandidates=!!g&&g.substr(14).split(" ").indexOf("trickle")>=0,u.forEach(function(i,o){var l=e.splitLines(i),u=e.getKind(i),g=e.isRejected(i)&&0===e.matchPrefix(i,"a=bundle-only").length,y=l[0].substr(2).split(" ")[2],S=e.getDirection(i,v),T=e.parseMsid(i),E=e.getMid(i)||e.generateIdentifier();if(g||"application"===u&&("DTLS/SCTP"===y||"UDP/DTLS/SCTP"===y))r.transceivers[o]={mid:E,kind:u,protocol:y,rejected:!0};else{var C,P,w,R,_,k,b,x,D;!g&&r.transceivers[o]&&r.transceivers[o].rejected&&(r.transceivers[o]=r._createTransceiver(u,!0));var I,L,M=e.parseRtpParameters(i);g||(I=e.getIceParameters(i,v),(L=e.getDtlsParameters(i,v)).role="client"),b=e.parseRtpEncodingParameters(i);var O=e.parseRtcpParameters(i),G=e.matchPrefix(i,"a=end-of-candidates",v).length>0,j=e.matchPrefix(i,"a=candidate:").map(function(t){return e.parseCandidate(t)}).filter(function(e){return 1===e.component});if(("offer"===t.type||"answer"===t.type)&&!g&&m&&o>0&&r.transceivers[o]&&(r._disposeIceAndDtlsTransports(o),r.transceivers[o].iceGatherer=r.transceivers[0].iceGatherer,r.transceivers[o].iceTransport=r.transceivers[0].iceTransport,r.transceivers[o].dtlsTransport=r.transceivers[0].dtlsTransport,r.transceivers[o].rtpSender&&r.transceivers[o].rtpSender.setTransport(r.transceivers[0].dtlsTransport),r.transceivers[o].rtpReceiver&&r.transceivers[o].rtpReceiver.setTransport(r.transceivers[0].dtlsTransport)),"offer"!==t.type||g){if("answer"===t.type&&!g){P=(C=r.transceivers[o]).iceGatherer,w=C.iceTransport,R=C.dtlsTransport,_=C.rtpReceiver,k=C.sendEncodingParameters,x=C.localCapabilities,r.transceivers[o].recvEncodingParameters=b,r.transceivers[o].remoteCapabilities=M,r.transceivers[o].rtcpParameters=O,j.length&&"new"===w.state&&(!h&&!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):w.setRemoteCandidates(j)),m&&0!==o||("new"===w.state&&w.start(P,I,"controlling"),"new"===R.state&&R.start(L)),!a(C.localCapabilities,C.remoteCapabilities).codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&C.sendEncodingParameters[0].rtx&&delete C.sendEncodingParameters[0].rtx,r._transceive(C,"sendrecv"===S||"recvonly"===S,"sendrecv"===S||"sendonly"===S),!_||"sendrecv"!==S&&"sendonly"!==S?delete C.rtpReceiver:(D=_.track,T?(n[T.stream]||(n[T.stream]=new c.MediaStream),p(D,n[T.stream]),f.push([D,_,n[T.stream]])):(n.default||(n.default=new c.MediaStream),p(D,n.default),f.push([D,_,n.default])))}}else{(C=r.transceivers[o]||r._createTransceiver(u)).mid=E,C.iceGatherer||(C.iceGatherer=r._createIceGatherer(o,m)),j.length&&"new"===C.iceTransport.state&&(!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):C.iceTransport.setRemoteCandidates(j)),x=c.RTCRtpReceiver.getCapabilities(u),d<15019&&(x.codecs=x.codecs.filter(function(e){return"rtx"!==e.name})),k=C.sendEncodingParameters||[{ssrc:1001*(2*o+2)}];var N,A=!1;if("sendrecv"===S||"sendonly"===S){if(A=!C.rtpReceiver,_=C.rtpReceiver||new c.RTCRtpReceiver(C.dtlsTransport,u),A)D=_.track,T&&"-"===T.stream||(T?(n[T.stream]||(n[T.stream]=new c.MediaStream,Object.defineProperty(n[T.stream],"id",{get:function(){return T.stream}})),Object.defineProperty(D,"id",{get:function(){return T.track}}),N=n[T.stream]):(n.default||(n.default=new c.MediaStream),N=n.default)),N&&(p(D,N),C.associatedRemoteMediaStreams.push(N)),f.push([D,_,N])}else C.rtpReceiver&&C.rtpReceiver.track&&(C.associatedRemoteMediaStreams.forEach(function(e){var t,r,n=e.getTracks().find(function(e){return e.id===C.rtpReceiver.track.id});n&&(t=n,(r=e).removeTrack(t),r.dispatchEvent(new c.MediaStreamTrackEvent("removetrack",{track:t})))}),C.associatedRemoteMediaStreams=[]);C.localCapabilities=x,C.remoteCapabilities=M,C.rtpReceiver=_,C.rtcpParameters=O,C.sendEncodingParameters=k,C.recvEncodingParameters=b,r._transceive(r.transceivers[o],!1,A)}}}),void 0===r._dtlsRole&&(r._dtlsRole="offer"===t.type?"active":"passive"),r._remoteDescription={type:t.type,sdp:t.sdp},"offer"===t.type?r._updateSignalingState("have-remote-offer"):r._updateSignalingState("stable"),Object.keys(n).forEach(function(e){var t=n[e];if(t.getTracks().length){if(-1===r.remoteStreams.indexOf(t)){r.remoteStreams.push(t);var a=new Event("addstream");a.stream=t,c.setTimeout(function(){r._dispatchEvent("addstream",a)})}f.forEach(function(e){var n=e[0],a=e[1];t.id===e[2].id&&l(r,n,a,[t])})}}),f.forEach(function(e){e[2]||l(r,e[0],e[1],[])}),c.setTimeout(function(){r&&r.transceivers&&r.transceivers.forEach(function(e){e.iceTransport&&"new"===e.iceTransport.state&&e.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),e.iceTransport.addRemoteCandidate({}))})},4e3),Promise.resolve()},f.prototype.close=function(){this.transceivers.forEach(function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},f.prototype._updateSignalingState=function(e){this.signalingState=e;var t=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",t)},f.prototype._maybeFireNegotiationNeeded=function(){var e=this;"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,c.setTimeout(function(){if(e.needNegotiation){e.needNegotiation=!1;var t=new Event("negotiationneeded");e._dispatchEvent("negotiationneeded",t)}},0))},f.prototype._updateIceConnectionState=function(){var e,t={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&!e.rejected&&t[e.iceTransport.state]++}),e="new",t.failed>0?e="failed":t.checking>0?e="checking":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0?e="connected":t.completed>0&&(e="completed"),e!==this.iceConnectionState){this.iceConnectionState=e;var r=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",r)}},f.prototype._updateConnectionState=function(){var e,t={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&e.dtlsTransport&&!e.rejected&&(t[e.iceTransport.state]++,t[e.dtlsTransport.state]++)}),t.connected+=t.completed,e="new",t.failed>0?e="failed":t.connecting>0?e="connecting":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0&&(e="connected"),e!==this.connectionState){this.connectionState=e;var r=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",r)}},f.prototype.createOffer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createOffer after close"));var n=t.transceivers.filter(function(e){return"audio"===e.kind}).length,a=t.transceivers.filter(function(e){return"video"===e.kind}).length,i=arguments[0];if(i){if(i.mandatory||i.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==i.offerToReceiveAudio&&(n=!0===i.offerToReceiveAudio?1:!1===i.offerToReceiveAudio?0:i.offerToReceiveAudio),void 0!==i.offerToReceiveVideo&&(a=!0===i.offerToReceiveVideo?1:!1===i.offerToReceiveVideo?0:i.offerToReceiveVideo)}for(t.transceivers.forEach(function(e){"audio"===e.kind?--n<0&&(e.wantReceive=!1):"video"===e.kind&&--a<0&&(e.wantReceive=!1)});n>0||a>0;)n>0&&(t._createTransceiver("audio"),n--),a>0&&(t._createTransceiver("video"),a--);var s=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.transceivers.forEach(function(r,n){var a=r.track,i=r.kind,s=r.mid||e.generateIdentifier();r.mid=s,r.iceGatherer||(r.iceGatherer=t._createIceGatherer(n,t.usingBundle));var o=c.RTCRtpSender.getCapabilities(i);d<15019&&(o.codecs=o.codecs.filter(function(e){return"rtx"!==e.name})),o.codecs.forEach(function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1"),r.remoteCapabilities&&r.remoteCapabilities.codecs&&r.remoteCapabilities.codecs.forEach(function(t){e.name.toLowerCase()===t.name.toLowerCase()&&e.clockRate===t.clockRate&&(e.preferredPayloadType=t.payloadType)})}),o.headerExtensions.forEach(function(e){(r.remoteCapabilities&&r.remoteCapabilities.headerExtensions||[]).forEach(function(t){e.uri===t.uri&&(e.id=t.id)})});var p=r.sendEncodingParameters||[{ssrc:1001*(2*n+1)}];a&&d>=15019&&"video"===i&&!p[0].rtx&&(p[0].rtx={ssrc:p[0].ssrc+1}),r.wantReceive&&(r.rtpReceiver=new c.RTCRtpReceiver(r.dtlsTransport,i)),r.localCapabilities=o,r.sendEncodingParameters=p}),"max-compat"!==t._config.bundlePolicy&&(s+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),s+="a=ice-options:trickle\r\n",t.transceivers.forEach(function(n,a){s+=r(n,n.localCapabilities,"offer",n.stream,t._dtlsRole),s+="a=rtcp-rsize\r\n",!n.iceGatherer||"new"===t.iceGatheringState||0!==a&&t.usingBundle||(n.iceGatherer.getLocalCandidates().forEach(function(t){t.component=1,s+="a="+e.writeCandidate(t)+"\r\n"}),"completed"===n.iceGatherer.state&&(s+="a=end-of-candidates\r\n"))});var p=new c.RTCSessionDescription({type:"offer",sdp:s});return Promise.resolve(p)},f.prototype.createAnswer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createAnswer after close"));if("have-remote-offer"!==t.signalingState&&"have-local-pranswer"!==t.signalingState)return Promise.reject(o("InvalidStateError","Can not call createAnswer in signalingState "+t.signalingState));var n=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.usingBundle&&(n+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),n+="a=ice-options:trickle\r\n";var i=e.getMediaSections(t._remoteDescription.sdp).length;t.transceivers.forEach(function(e,s){if(!(s+1>i)){if(e.rejected)return"application"===e.kind?"DTLS/SCTP"===e.protocol?n+="m=application 0 DTLS/SCTP 5000\r\n":n+="m=application 0 "+e.protocol+" webrtc-datachannel\r\n":"audio"===e.kind?n+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===e.kind&&(n+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(n+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+e.mid+"\r\n");var o;if(e.stream)"audio"===e.kind?o=e.stream.getAudioTracks()[0]:"video"===e.kind&&(o=e.stream.getVideoTracks()[0]),o&&d>=15019&&"video"===e.kind&&!e.sendEncodingParameters[0].rtx&&(e.sendEncodingParameters[0].rtx={ssrc:e.sendEncodingParameters[0].ssrc+1});var c=a(e.localCapabilities,e.remoteCapabilities);!c.codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&e.sendEncodingParameters[0].rtx&&delete e.sendEncodingParameters[0].rtx,n+=r(e,c,"answer",e.stream,t._dtlsRole),e.rtcpParameters&&e.rtcpParameters.reducedSize&&(n+="a=rtcp-rsize\r\n")}});var s=new c.RTCSessionDescription({type:"answer",sdp:n});return Promise.resolve(s)},f.prototype.addIceCandidate=function(t){var r,n=this;return t&&void 0===t.sdpMLineIndex&&!t.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(a,i){if(!n._remoteDescription)return i(o("InvalidStateError","Can not add ICE candidate without a remote description"));if(t&&""!==t.candidate){var c=t.sdpMLineIndex;if(t.sdpMid)for(var d=0;d<n.transceivers.length;d++)if(n.transceivers[d].mid===t.sdpMid){c=d;break}var p=n.transceivers[c];if(!p)return i(o("OperationError","Can not add ICE candidate"));if(p.rejected)return a();var l=Object.keys(t.candidate).length>0?e.parseCandidate(t.candidate):{};if("tcp"===l.protocol&&(0===l.port||9===l.port))return a();if(l.component&&1!==l.component)return a();if((0===c||c>0&&p.iceTransport!==n.transceivers[0].iceTransport)&&!s(p.iceTransport,l))return i(o("OperationError","Can not add ICE candidate"));var f=t.candidate.trim();0===f.indexOf("a=")&&(f=f.substr(2)),(r=e.getMediaSections(n._remoteDescription.sdp))[c]+="a="+(l.type?f:"end-of-candidates")+"\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join("")}else for(var u=0;u<n.transceivers.length&&(n.transceivers[u].rejected||(n.transceivers[u].iceTransport.addRemoteCandidate({}),(r=e.getMediaSections(n._remoteDescription.sdp))[u]+="a=end-of-candidates\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join(""),!n.usingBundle));u++);a()})},f.prototype.getStats=function(e){if(e&&e instanceof c.MediaStreamTrack){var t=null;if(this.transceivers.forEach(function(r){r.rtpSender&&r.rtpSender.track===e?t=r.rtpSender:r.rtpReceiver&&r.rtpReceiver.track===e&&(t=r.rtpReceiver)}),!t)throw o("InvalidAccessError","Invalid selector.");return t.getStats()}var r=[];return this.transceivers.forEach(function(e){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(t){e[t]&&r.push(e[t].getStats())})}),Promise.all(r).then(function(e){var t=new Map;return e.forEach(function(e){e.forEach(function(e){t.set(e.id,e)})}),t})};["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach(function(e){var r=c[e];if(r&&r.prototype&&r.prototype.getStats){var n=r.prototype.getStats;r.prototype.getStats=function(){return n.apply(this).then(function(e){var r=new Map;return Object.keys(e).forEach(function(n){e[n].type=t(e[n]),r.set(n,e[n])}),r})}}});var u=["createOffer","createAnswer"];return u.forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[0]||"function"==typeof e[1]?t.apply(this,[arguments[2]]).then(function(t){"function"==typeof e[0]&&e[0].apply(null,[t])},function(t){"function"==typeof e[1]&&e[1].apply(null,[t])}):t.apply(this,arguments)}}),(u=["setLocalDescription","setRemoteDescription","addIceCandidate"]).forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]||"function"==typeof e[2]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)},function(t){"function"==typeof e[2]&&e[2].apply(null,[t])}):t.apply(this,arguments)}}),["getStats"].forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)}):t.apply(this,arguments)}}),f};
},{"sdp":"YHvh"}],"YdKx":[function(require,module,exports) {
"use strict";function e(e){var r=e&&e.navigator,t=r.mediaDevices.getUserMedia.bind(r.mediaDevices);r.mediaDevices.getUserMedia=function(e){return t(e).catch(function(e){return Promise.reject(function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}}(e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=e;
},{}],"P3bV":[function(require,module,exports) {
"use strict";function e(e){"getDisplayMedia"in e.navigator&&e.navigator.mediaDevices&&(e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||(e.navigator.mediaDevices.getDisplayMedia=e.navigator.getDisplayMedia.bind(e.navigator)))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"XRic":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimPeerConnection=a,exports.shimReplaceTrack=p,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return n.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return i.shimGetDisplayMedia}});var e=s(require("../utils")),t=require("./filtericeservers"),r=o(require("rtcpeerconnection-shim")),n=require("./getusermedia"),i=require("./getdisplaymedia");function o(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function a(n){var i=e.detectBrowser(n);if(n.RTCIceGatherer&&(n.RTCIceCandidate||(n.RTCIceCandidate=function(e){return e}),n.RTCSessionDescription||(n.RTCSessionDescription=function(e){return e}),i.version<15025)){var o=Object.getOwnPropertyDescriptor(n.MediaStreamTrack.prototype,"enabled");Object.defineProperty(n.MediaStreamTrack.prototype,"enabled",{set:function(e){o.set.call(this,e);var t=new Event("enabled");t.enabled=e,this.dispatchEvent(t)}})}!n.RTCRtpSender||"dtmf"in n.RTCRtpSender.prototype||Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=new n.RTCDtmfSender(this):"video"===this.track.kind&&(this._dtmf=null)),this._dtmf}}),n.RTCDtmfSender&&!n.RTCDTMFSender&&(n.RTCDTMFSender=n.RTCDtmfSender);var c=(0,r.default)(n,i.version);n.RTCPeerConnection=function(r){return r&&r.iceServers&&(r.iceServers=(0,t.filterIceServers)(r.iceServers,i.version),e.log("ICE servers after filtering:",r.iceServers)),new c(r)},n.RTCPeerConnection.prototype=c.prototype}function p(e){!e.RTCRtpSender||"replaceTrack"in e.RTCRtpSender.prototype||(e.RTCRtpSender.prototype.replaceTrack=e.RTCRtpSender.prototype.setTrack)}
},{"../utils":"iSxC","./filtericeservers":"NZ1C","rtcpeerconnection-shim":"NJ2u","./getusermedia":"YdKx","./getdisplaymedia":"P3bV"}],"GzSv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=n;var e=o(require("../utils"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=t();if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,o&&o.set(e,r),r}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){var o=e.detectBrowser(t),n=t&&t.navigator,i=t&&t.MediaStreamTrack;if(n.getUserMedia=function(t,o,r){e.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(t).then(o,r)},!(o.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var a=function(e,t,o){t in e&&!(o in e)&&(e[o]=e[t],delete e[t])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(e){return"object"===r(e)&&"object"===r(e.audio)&&(e=JSON.parse(JSON.stringify(e)),a(e.audio,"autoGainControl","mozAutoGainControl"),a(e.audio,"noiseSuppression","mozNoiseSuppression")),s(e)},i&&i.prototype.getSettings){var p=i.prototype.getSettings;i.prototype.getSettings=function(){var e=p.apply(this,arguments);return a(e,"mozAutoGainControl","autoGainControl"),a(e,"mozNoiseSuppression","noiseSuppression"),e}}if(i&&i.prototype.applyConstraints){var u=i.prototype.applyConstraints;i.prototype.applyConstraints=function(e){return"audio"===this.kind&&"object"===r(e)&&(e=JSON.parse(JSON.stringify(e)),a(e,"autoGainControl","mozAutoGainControl"),a(e,"noiseSuppression","mozNoiseSuppression")),u.apply(this,[e])}}}}
},{"../utils":"iSxC"}],"UuGU":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&(e.navigator.mediaDevices.getDisplayMedia=function(a){if(!a||!a.video){var t=new DOMException("getDisplayMedia without video constraints is undefined");return t.name="NotFoundError",t.code=8,Promise.reject(t)}return!0===a.video?a.video={mediaSource:i}:a.video.mediaSource=i,e.navigator.mediaDevices.getUserMedia(a)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"Fzdr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimOnTrack=c,exports.shimPeerConnection=s,exports.shimSenderGetStats=p,exports.shimReceiverGetStats=u,exports.shimRemoveStream=f,exports.shimRTCDataChannel=C,exports.shimAddTransceiver=d,exports.shimCreateOffer=y,exports.shimCreateAnswer=l,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=o(require("../utils")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){"object"===a(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function s(t){var r=e.detectBrowser(t);if("object"===a(t)&&(t.RTCPeerConnection||t.mozRTCPeerConnection)){if(!t.RTCPeerConnection&&t.mozRTCPeerConnection&&(t.RTCPeerConnection=t.mozRTCPeerConnection),r.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=i({},e,function(){return arguments[0]=new("addIceCandidate"===e?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});t.RTCPeerConnection.prototype[e]=n[e]}),r.version<68){var n=t.RTCPeerConnection.prototype.addIceCandidate;t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}var o={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},c=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){var[e,t,n]=arguments;return c.apply(this,[e||null]).then(function(e){if(r.version<53&&!t)try{e.forEach(function(e){e.type=o[e.type]||e.type})}catch(n){if("TypeError"!==n.name)throw n;e.forEach(function(t,r){e.set(r,Object.assign({},t,{type:o[t.type]||t.type}))})}return e}).then(t,n)}}}function p(e){if("object"===a(e)&&e.RTCPeerConnection&&e.RTCRtpSender&&!(e.RTCRtpSender&&"getStats"in e.RTCRtpSender.prototype)){var t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,r=t.apply(this,[]);return r.forEach(function(t){return t._pc=e}),r});var r=e.RTCPeerConnection.prototype.addTrack;r&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=r.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}}function u(t){if("object"===a(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&!(t.RTCRtpSender&&"getStats"in t.RTCRtpReceiver.prototype)){var r=t.RTCPeerConnection.prototype.getReceivers;r&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}}function f(t){!t.RTCPeerConnection||"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(t){var r=this;e.deprecated("removeStream","removeTrack"),this.getSenders().forEach(function(e){e.track&&t.getTracks().includes(e.track)&&r.removeTrack(e)})})}function C(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)}function d(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.addTransceiver;t&&(e.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];var e=arguments[1],r=e&&"sendEncodings"in e;r&&e.sendEncodings.forEach(function(e){if("rid"in e){if(!/^[a-z0-9]{0,16}$/i.test(e.rid))throw new TypeError("Invalid RID value provided.")}if("scaleResolutionDownBy"in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in e&&!(parseFloat(e.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});var n=t.apply(this,arguments);if(r){var{sender:o}=n,i=o.getParameters();"encodings"in i||(i.encodings=e.sendEncodings,this.setParametersPromises.push(o.setParameters(i).catch(function(){})))}return n})}}function y(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(){var e=arguments,r=this;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(r,e)}).finally(function(){r.setParametersPromises=[]}):t.apply(this,arguments)}}}function l(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createAnswer;e.RTCPeerConnection.prototype.createAnswer=function(){var e=arguments,r=this;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(r,e)}).finally(function(){r.setParametersPromises=[]}):t.apply(this,arguments)}}}
},{"../utils":"iSxC","./getusermedia":"GzSv","./getdisplaymedia":"UuGU"}],"t1lL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimLocalStreamsAPI=n,exports.shimRemoteStreamsAPI=i,exports.shimCallbacksAPI=a,exports.shimGetUserMedia=s,exports.shimConstraints=c,exports.shimRTCIceServerUrls=d,exports.shimTrackEventTransceiver=f,exports.shimCreateOfferLegacy=p;var e=r(require("../utils"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){if("object"===o(e)&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach(function(o){return t.call(r,o,e)}),e.getVideoTracks().forEach(function(o){return t.call(r,o,e)})},e.RTCPeerConnection.prototype.addTrack=function(e){var r=arguments[1];return r&&(this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]),t.apply(this,arguments)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._localStreams||(this._localStreams=[]);var r=this._localStreams.indexOf(e);if(-1!==r){this._localStreams.splice(r,1);var o=e.getTracks();this.getSenders().forEach(function(e){o.includes(e.track)&&t.removeTrack(e)})}})}}function i(e){if("object"===o(e)&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(e){var t=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=function(e){e.streams.forEach(function(e){if(t._remoteStreams||(t._remoteStreams=[]),!t._remoteStreams.includes(e)){t._remoteStreams.push(e);var r=new Event("addstream");r.stream=e,t.dispatchEvent(r)}})})}});var t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach(function(t){if(e._remoteStreams||(e._remoteStreams=[]),!(e._remoteStreams.indexOf(t)>=0)){e._remoteStreams.push(t);var r=new Event("addstream");r.stream=t,e.dispatchEvent(r)}})}),t.apply(e,arguments)}}}function a(e){if("object"===o(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype,r=t.createOffer,n=t.createAnswer,i=t.setLocalDescription,a=t.setRemoteDescription,s=t.addIceCandidate;t.createOffer=function(e,t){var o=arguments.length>=2?arguments[2]:arguments[0],n=r.apply(this,[o]);return t?(n.then(e,t),Promise.resolve()):n},t.createAnswer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],o=n.apply(this,[r]);return t?(o.then(e,t),Promise.resolve()):o};var c=function(e,t,r){var o=i.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o};t.setLocalDescription=c,c=function(e,t,r){var o=a.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.setRemoteDescription=c,c=function(e,t,r){var o=s.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.addIceCandidate=c}}function s(e){var t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){var r=t.mediaDevices,o=r.getUserMedia.bind(r);t.mediaDevices.getUserMedia=function(e){return o(c(e))}}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,r,o){t.mediaDevices.getUserMedia(e).then(r,o)}.bind(t))}function c(t){return t&&void 0!==t.video?Object.assign({},t,{video:e.compactObject(t.video)}):t}function d(t){var r=t.RTCPeerConnection;t.RTCPeerConnection=function(t,o){if(t&&t.iceServers){for(var n=[],i=0;i<t.iceServers.length;i++){var a=t.iceServers[i];!a.hasOwnProperty("urls")&&a.hasOwnProperty("url")?(e.deprecated("RTCIceServer.url","RTCIceServer.urls"),(a=JSON.parse(JSON.stringify(a))).urls=a.url,delete a.url,n.push(a)):n.push(t.iceServers[i])}t.iceServers=n}return new r(t,o)},t.RTCPeerConnection.prototype=r.prototype,"generateCertificate"in t.RTCPeerConnection&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return r.generateCertificate}})}function f(e){"object"===o(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function p(e){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){if(e){void 0!==e.offerToReceiveAudio&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);var r=this.getTransceivers().find(function(e){return"audio"===e.receiver.track.kind});!1===e.offerToReceiveAudio&&r?"sendrecv"===r.direction?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":"recvonly"===r.direction&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):!0!==e.offerToReceiveAudio||r||this.addTransceiver("audio"),void 0!==e.offerToReceiveVideo&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);var o=this.getTransceivers().find(function(e){return"video"===e.receiver.track.kind});!1===e.offerToReceiveVideo&&o?"sendrecv"===o.direction?o.setDirection?o.setDirection("sendonly"):o.direction="sendonly":"recvonly"===o.direction&&(o.setDirection?o.setDirection("inactive"):o.direction="inactive"):!0!==e.offerToReceiveVideo||o||this.addTransceiver("video")}return t.apply(this,arguments)}}
},{"../utils":"iSxC"}],"GOQK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimRTCIceCandidate=a,exports.shimMaxMessageSize=c,exports.shimSendThrowTypeError=s,exports.shimConnectionState=p,exports.removeAllowExtmapMixed=u;var e=r(require("sdp")),t=o(require("./utils"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(n){if(n.RTCIceCandidate&&!(n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)){var o=n.RTCIceCandidate;n.RTCIceCandidate=function(t){if("object"===i(t)&&t.candidate&&0===t.candidate.indexOf("a=")&&((t=JSON.parse(JSON.stringify(t))).candidate=t.candidate.substr(2)),t.candidate&&t.candidate.length){var n=new o(t),r=e.default.parseCandidate(t.candidate),a=Object.assign(n,r);return a.toJSON=function(){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,usernameFragment:a.usernameFragment}},a}return new o(t)},n.RTCIceCandidate.prototype=o.prototype,t.wrapPeerConnectionEvent(n,"icecandidate",function(e){return e.candidate&&Object.defineProperty(e,"candidate",{value:new n.RTCIceCandidate(e.candidate),writable:"false"}),e})}}function c(n){if(n.RTCPeerConnection){var o=t.detectBrowser(n);"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp}});var r=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,"chrome"===o.browser&&o.version>=76){var{sdpSemantics:t}=this.getConfiguration();"plan-b"===t&&Object.defineProperty(this,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp},enumerable:!0,configurable:!0})}if(function(t){if(!t||!t.sdp)return!1;var n=e.default.splitSections(t.sdp);return n.shift(),n.some(function(t){var n=e.default.parseMLine(t);return n&&"application"===n.kind&&-1!==n.protocol.indexOf("SCTP")})}(arguments[0])){var n,i=function(e){var t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(null===t||t.length<2)return-1;var n=parseInt(t[1],10);return n!=n?-1:n}(arguments[0]),a=(p=i,u=65536,"firefox"===o.browser&&(u=o.version<57?-1===p?16384:2147483637:o.version<60?57===o.version?65535:65536:2147483637),u),c=function(t,n){var r=65536;"firefox"===o.browser&&57===o.version&&(r=65535);var i=e.default.matchPrefix(t.sdp,"a=max-message-size:");return i.length>0?r=parseInt(i[0].substr(19),10):"firefox"===o.browser&&-1!==n&&(r=2147483637),r}(arguments[0],i);n=0===a&&0===c?Number.POSITIVE_INFINITY:0===a||0===c?Math.max(a,c):Math.min(a,c);var s={};Object.defineProperty(s,"maxMessageSize",{get:function(){return n}}),this._sctp=s}var p,u;return r.apply(this,arguments)}}}function s(e){if(e.RTCPeerConnection&&"createDataChannel"in e.RTCPeerConnection.prototype){var n=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function(){var e=n.apply(this,arguments);return o(e,this),e},t.wrapPeerConnectionEvent(e,"datachannel",function(e){return o(e.channel,e.target),e})}function o(e,t){var n=e.send;e.send=function(){var o=arguments[0],r=o.length||o.size||o.byteLength;if("open"===e.readyState&&t.sctp&&r>t.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+t.sctp.maxMessageSize+" bytes)");return n.apply(e,arguments)}}}function p(e){if(e.RTCPeerConnection&&!("connectionState"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get:function(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get:function(){return this._onconnectionstatechange||null},set:function(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(function(e){var n=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=function(e){var t=e.target;if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState;var n=new Event("connectionstatechange",e);t.dispatchEvent(n)}return e},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}}function u(e){if(e.RTCPeerConnection){var n=t.detectBrowser(e);if(!("chrome"===n.browser&&n.version>=71)){var o=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(e){return e&&e.sdp&&-1!==e.sdp.indexOf("\na=extmap-allow-mixed")&&(e.sdp=e.sdp.split("\n").filter(function(e){return"a=extmap-allow-mixed"!==e.trim()}).join("\n")),o.apply(this,arguments)}}}}
},{"sdp":"YHvh","./utils":"iSxC"}],"KtlG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.adapterFactory=m;var e=o(require("./utils")),r=o(require("./chrome/chrome_shim")),i=o(require("./edge/edge_shim")),s=o(require("./firefox/firefox_shim")),t=o(require("./safari/safari_shim")),a=o(require("./common_shim"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n();if(r&&r.has(e))return r.get(e);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=s?Object.getOwnPropertyDescriptor(e,t):null;a&&(a.get||a.set)?Object.defineProperty(i,t,a):i[t]=e[t]}return i.default=e,r&&r.set(e,i),i}function m(){var{window:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0},m=e.log,h=e.detectBrowser(n),d={browserDetails:h,commonShim:a,extractVersion:e.extractVersion,disableLog:e.disableLog,disableWarnings:e.disableWarnings};switch(h.browser){case"chrome":if(!r||!r.shimPeerConnection||!o.shimChrome)return m("Chrome shim is not included in this adapter release."),d;m("adapter.js shimming chrome."),d.browserShim=r,r.shimGetUserMedia(n),r.shimMediaStream(n),r.shimPeerConnection(n),r.shimOnTrack(n),r.shimAddTrackRemoveTrack(n),r.shimGetSendersWithDtmf(n),r.shimGetStats(n),r.shimSenderReceiverGetStats(n),r.fixNegotiationNeeded(n),a.shimRTCIceCandidate(n),a.shimConnectionState(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n),a.removeAllowExtmapMixed(n);break;case"firefox":if(!s||!s.shimPeerConnection||!o.shimFirefox)return m("Firefox shim is not included in this adapter release."),d;m("adapter.js shimming firefox."),d.browserShim=s,s.shimGetUserMedia(n),s.shimPeerConnection(n),s.shimOnTrack(n),s.shimRemoveStream(n),s.shimSenderGetStats(n),s.shimReceiverGetStats(n),s.shimRTCDataChannel(n),s.shimAddTransceiver(n),s.shimCreateOffer(n),s.shimCreateAnswer(n),a.shimRTCIceCandidate(n),a.shimConnectionState(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n);break;case"edge":if(!i||!i.shimPeerConnection||!o.shimEdge)return m("MS edge shim is not included in this adapter release."),d;m("adapter.js shimming edge."),d.browserShim=i,i.shimGetUserMedia(n),i.shimGetDisplayMedia(n),i.shimPeerConnection(n),i.shimReplaceTrack(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n);break;case"safari":if(!t||!o.shimSafari)return m("Safari shim is not included in this adapter release."),d;m("adapter.js shimming safari."),d.browserShim=t,t.shimRTCIceServerUrls(n),t.shimCreateOfferLegacy(n),t.shimCallbacksAPI(n),t.shimLocalStreamsAPI(n),t.shimRemoteStreamsAPI(n),t.shimTrackEventTransceiver(n),t.shimGetUserMedia(n),a.shimRTCIceCandidate(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n),a.removeAllowExtmapMixed(n);break;default:m("Unsupported browser!")}return d}
},{"./utils":"iSxC","./chrome/chrome_shim":"uI5X","./edge/edge_shim":"XRic","./firefox/firefox_shim":"Fzdr","./safari/safari_shim":"t1lL","./common_shim":"GOQK"}],"tI1X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./adapter_factory.js"),r=(0,e.adapterFactory)({window:window}),t=r;exports.default=t;
},{"./adapter_factory.js":"KtlG"}],"sXtV":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("webrtc-adapter"));exports.webRTCAdapter=t.default;
},{"webrtc-adapter":"tI1X"}],"I31f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./adapter");exports.Supports=new(function(){function e(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}return e.prototype.isWebRTCSupported=function(){return"undefined"!=typeof RTCPeerConnection},e.prototype.isBrowserSupported=function(){var r=this.getBrowser(),e=this.getVersion();return!!this.supportedBrowsers.includes(r)&&("chrome"===r?e>=this.minChromeVersion:"firefox"===r?e>=this.minFirefoxVersion:"safari"===r&&(!this.isIOS&&e>=this.minSafariVersion))},e.prototype.getBrowser=function(){return r.webRTCAdapter.browserDetails.browser},e.prototype.getVersion=function(){return r.webRTCAdapter.browserDetails.version||0},e.prototype.isUnifiedPlanSupported=function(){var e,i=this.getBrowser(),t=r.webRTCAdapter.browserDetails.version||0;if("chrome"===i&&t<72)return!1;if("firefox"===i&&t>=59)return!0;if(!(window.RTCRtpTransceiver&&"currentDirection"in RTCRtpTransceiver.prototype))return!1;var o=!1;try{(e=new RTCPeerConnection).addTransceiver("audio"),o=!0}catch(n){}finally{e&&e.close()}return o},e.prototype.toString=function(){return"Supports: \n    browser:"+this.getBrowser()+" \n    version:"+this.getVersion()+" \n    isIOS:"+this.isIOS+" \n    isWebRTCSupported:"+this.isWebRTCSupported()+" \n    isBrowserSupported:"+this.isBrowserSupported()+" \n    isUnifiedPlanSupported:"+this.isUnifiedPlanSupported()},e}());
},{"./adapter":"sXtV"}],"BHXf":[function(require,module,exports) {
"use strict";var r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t.default=r,t};Object.defineProperty(exports,"__esModule",{value:!0});var t=r(require("peerjs-js-binarypack")),e=require("./supports"),o={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};exports.util=new(function(){function r(){this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=o,this.browser=e.Supports.getBrowser(),this.browserVersion=e.Supports.getVersion(),this.supports=function(){var r,t={browser:e.Supports.isBrowserSupported(),webRTC:e.Supports.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;try{r=new RTCPeerConnection(o),t.audioVideo=!0;var n=void 0;try{n=r.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!n.ordered;try{n.binaryType="blob",t.binaryBlob=!e.Supports.isIOS}catch(a){}}catch(a){}finally{n&&n.close()}}catch(a){}finally{r&&r.close()}return t}(),this.pack=t.pack,this.unpack=t.unpack,this._dataCount=1}return r.prototype.noop=function(){},r.prototype.validateId=function(r){return!r||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(r)},r.prototype.chunk=function(r){for(var t=[],e=r.size,o=Math.ceil(e/exports.util.chunkedMTU),n=0,a=0;a<e;){var i=Math.min(e,a+exports.util.chunkedMTU),s=r.slice(a,i),u={__peerData:this._dataCount,n:n,data:s,total:o};t.push(u),a=i,n++}return this._dataCount++,t},r.prototype.blobToArrayBuffer=function(r,t){var e=new FileReader;return e.onload=function(r){r.target&&t(r.target.result)},e.readAsArrayBuffer(r),e},r.prototype.binaryStringToArrayBuffer=function(r){for(var t=new Uint8Array(r.length),e=0;e<r.length;e++)t[e]=255&r.charCodeAt(e);return t.buffer},r.prototype.randomToken=function(){return Math.random().toString(36).substr(2)},r.prototype.isSecure=function(){return"https:"===location.protocol},r}());
},{"peerjs-js-binarypack":"kdPp","./supports":"I31f"}],"JJlS":[function(require,module,exports) {
"use strict";var e=Object.prototype.hasOwnProperty,t="~";function n(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,n,o,s,i){if("function"!=typeof o)throw new TypeError("The listener must be a function");var c=new r(o,s||e,i),f=t?t+n:n;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function i(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(t=!1)),i.prototype.eventNames=function(){var n,r,o=[];if(0===this._eventsCount)return o;for(r in n=this._events)e.call(n,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(n)):o},i.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,i=new Array(s);o<s;o++)i[o]=r[o].fn;return i},i.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},i.prototype.emit=function(e,n,r,o,s,i){var c=t?t+e:e;if(!this._events[c])return!1;var f,u,a=this._events[c],l=arguments.length;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,n),!0;case 3:return a.fn.call(a.context,n,r),!0;case 4:return a.fn.call(a.context,n,r,o),!0;case 5:return a.fn.call(a.context,n,r,o,s),!0;case 6:return a.fn.call(a.context,n,r,o,s,i),!0}for(u=1,f=new Array(l-1);u<l;u++)f[u-1]=arguments[u];a.fn.apply(a.context,f)}else{var v,h=a.length;for(u=0;u<h;u++)switch(a[u].once&&this.removeListener(e,a[u].fn,void 0,!0),l){case 1:a[u].fn.call(a[u].context);break;case 2:a[u].fn.call(a[u].context,n);break;case 3:a[u].fn.call(a[u].context,n,r);break;case 4:a[u].fn.call(a[u].context,n,r,o);break;default:if(!f)for(v=1,f=new Array(l-1);v<l;v++)f[v-1]=arguments[v];a[u].fn.apply(a[u].context,f)}}return!0},i.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},i.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},i.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return s(this,i),this;var c=this._events[i];if(c.fn)c.fn!==n||o&&!c.once||r&&c.context!==r||s(this,i);else{for(var f=0,u=[],a=c.length;f<a;f++)(c[f].fn!==n||o&&!c[f].once||r&&c[f].context!==r)&&u.push(c[f]);u.length?this._events[i]=1===u.length?u[0]:u:s(this,i)}return this},i.prototype.removeAllListeners=function(e){var r;return e?(r=t?t+e:e,this._events[r]&&s(this,r)):(this._events=new n,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=t,i.EventEmitter=i,"undefined"!=typeof module&&(module.exports=i);
},{}],"WOs9":[function(require,module,exports) {
"use strict";var r=this&&this.__read||function(r,e){var o="function"==typeof Symbol&&r[Symbol.iterator];if(!o)return r;var t,n,l=o.call(r),i=[];try{for(;(void 0===e||e-- >0)&&!(t=l.next()).done;)i.push(t.value)}catch(s){n={error:s}}finally{try{t&&!t.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return i},e=this&&this.__spread||function(){for(var e=[],o=0;o<arguments.length;o++)e=e.concat(r(arguments[o]));return e};Object.defineProperty(exports,"__esModule",{value:!0});var o,t="PeerJS: ";!function(r){r[r.Disabled=0]="Disabled",r[r.Errors=1]="Errors",r[r.Warnings=2]="Warnings",r[r.All=3]="All"}(o=exports.LogLevel||(exports.LogLevel={}));var n=function(){function r(){this._logLevel=o.Disabled}return Object.defineProperty(r.prototype,"logLevel",{get:function(){return this._logLevel},set:function(r){this._logLevel=r},enumerable:!0,configurable:!0}),r.prototype.log=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.All&&this._print.apply(this,e([o.All],r))},r.prototype.warn=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.Warnings&&this._print.apply(this,e([o.Warnings],r))},r.prototype.error=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.Errors&&this._print.apply(this,e([o.Errors],r))},r.prototype.setLogFunction=function(r){this._print=r},r.prototype._print=function(r){for(var n=[],l=1;l<arguments.length;l++)n[l-1]=arguments[l];var i=e([t],n);for(var s in i)i[s]instanceof Error&&(i[s]="("+i[s].name+") "+i[s].message);r>=o.All?console.log.apply(console,e(i)):r>=o.Warnings?console.warn.apply(console,e(["WARNING"],i)):r>=o.Errors&&console.error.apply(console,e(["ERROR"],i))},r}();exports.default=new n;
},{}],"ZRYf":[function(require,module,exports) {
"use strict";var e,r,n,o,t,a,i;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.Open="open",e.Stream="stream",e.Data="data",e.Close="close",e.Error="error",e.IceStateChanged="iceStateChanged"}(e=exports.ConnectionEventType||(exports.ConnectionEventType={})),function(e){e.Data="data",e.Media="media"}(r=exports.ConnectionType||(exports.ConnectionType={})),function(e){e.Open="open",e.Close="close",e.Connection="connection",e.Call="call",e.Disconnected="disconnected",e.Error="error"}(n=exports.PeerEventType||(exports.PeerEventType={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(o=exports.PeerErrorType||(exports.PeerErrorType={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json"}(t=exports.SerializationType||(exports.SerializationType={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(a=exports.SocketEventType||(exports.SocketEventType={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE"}(i=exports.ServerMessageType||(exports.ServerMessageType={}));
},{}],"wJlv":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),t=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var s,o,r=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i},n=this&&this.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(t(arguments[n]));return e},s=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("eventemitter3"),i=o(require("./logger")),c=require("./enums"),a=function(t){function o(e,n,s,o,r,i){void 0===i&&(i=5e3);var c=t.call(this)||this;c.pingInterval=i,c._disconnected=!0,c._messagesQueue=[];var a=e?"wss://":"ws://";return c._baseUrl=a+n+":"+s+o+"peerjs?key="+r,c}return e(o,t),o.prototype.start=function(e,t){var n=this;this._id=e;var s=this._baseUrl+"&id="+e+"&token="+t;!this._socket&&this._disconnected&&(this._socket=new WebSocket(s),this._disconnected=!1,this._socket.onmessage=function(e){var t;try{t=JSON.parse(e.data),i.default.log("Server message received:",t)}catch(s){return void i.default.log("Invalid server message",e.data)}n.emit(c.SocketEventType.Message,t)},this._socket.onclose=function(e){n._disconnected||(i.default.log("Socket closed.",e),n._cleanup(),n._disconnected=!0,n.emit(c.SocketEventType.Disconnected))},this._socket.onopen=function(){n._disconnected||(n._sendQueuedMessages(),i.default.log("Socket open"),n._scheduleHeartbeat())})},o.prototype._scheduleHeartbeat=function(){var e=this;this._wsPingTimer=setTimeout(function(){e._sendHeartbeat()},this.pingInterval)},o.prototype._sendHeartbeat=function(){if(this._wsOpen()){var e=JSON.stringify({type:c.ServerMessageType.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}else i.default.log("Cannot send heartbeat, because socket closed")},o.prototype._wsOpen=function(){return!!this._socket&&1===this._socket.readyState},o.prototype._sendQueuedMessages=function(){var e,t,o=n(this._messagesQueue);this._messagesQueue=[];try{for(var r=s(o),i=r.next();!i.done;i=r.next()){var c=i.value;this.send(c)}}catch(a){e={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},o.prototype.send=function(e){if(!this._disconnected)if(this._id)if(e.type){if(this._wsOpen()){var t=JSON.stringify(e);this._socket.send(t)}}else this.emit(c.SocketEventType.Error,"Invalid message");else this._messagesQueue.push(e)},o.prototype.close=function(){this._disconnected||(this._cleanup(),this._disconnected=!0)},o.prototype._cleanup=function(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)},o}(r.EventEmitter);exports.Socket=a;
},{"eventemitter3":"JJlS","./logger":"WOs9","./enums":"ZRYf"}],"HCdX":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))(function(i,r){function c(e){try{s(o.next(e))}catch(n){r(n)}}function a(e){try{s(o.throw(e))}catch(n){r(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(c,a)}s((o=o.apply(e,n||[])).next())})},t=this&&this.__generator||function(e,n){var t,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=n.call(e,c)}catch(a){r=[6,a],o=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),r=o(require("./logger")),c=require("./enums"),a=function(){function o(e){this.connection=e}return o.prototype.startConnection=function(e){var n=this._startPeerConnection();if(this.connection.peerConnection=n,this.connection.type===c.ConnectionType.Media&&e._stream&&this._addTracksToConnection(e._stream,n),e.originator){if(this.connection.type===c.ConnectionType.Data){var t=this.connection,o={ordered:!!e.reliable},i=n.createDataChannel(t.label,o);t.initialize(i)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)},o.prototype._startPeerConnection=function(){r.default.log("Creating RTCPeerConnection.");var e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e},o.prototype._setupListeners=function(e){var n=this,t=this.connection.peer,o=this.connection.connectionId,a=this.connection.type,s=this.connection.provider;r.default.log("Listening for ICE candidates."),e.onicecandidate=function(e){e.candidate&&e.candidate.candidate&&(r.default.log("Received ICE candidates for "+t+":",e.candidate),s.socket.send({type:c.ServerMessageType.Candidate,payload:{candidate:e.candidate,type:a,connectionId:o},dst:t}))},e.oniceconnectionstatechange=function(){switch(e.iceConnectionState){case"failed":r.default.log("iceConnectionState is failed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Negotiation of connection to "+t+" failed.")),n.connection.close();break;case"closed":r.default.log("iceConnectionState is closed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Connection to "+t+" closed.")),n.connection.close();break;case"disconnected":r.default.log("iceConnectionState is disconnected, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Connection to "+t+" disconnected.")),n.connection.close();break;case"completed":e.onicecandidate=i.util.noop}n.connection.emit(c.ConnectionEventType.IceStateChanged,e.iceConnectionState)},r.default.log("Listening for data channel"),e.ondatachannel=function(e){r.default.log("Received data channel");var n=e.channel;s.getConnection(t,o).initialize(n)},r.default.log("Listening for remote stream"),e.ontrack=function(e){r.default.log("Received remote stream");var i=e.streams[0],a=s.getConnection(t,o);if(a.type===c.ConnectionType.Media){var d=a;n._addStreamToMediaConnection(i,d)}}},o.prototype.cleanup=function(){r.default.log("Cleaning up PeerConnection to "+this.connection.peer);var e=this.connection.peerConnection;if(e){this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=function(){};var n="closed"!==e.signalingState,t=!1;if(this.connection.type===c.ConnectionType.Data){var o=this.connection.dataChannel;o&&(t=!!o.readyState&&"closed"!==o.readyState)}(n||t)&&e.close()}},o.prototype._makeOffer=function(){return n(this,void 0,Promise,function(){var n,o,a,s,d,l,u;return t(this,function(t){switch(t.label){case 0:n=this.connection.peerConnection,o=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,n.createOffer(this.connection.options.constraints)];case 2:a=t.sent(),r.default.log("Created offer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(a.sdp=this.connection.options.sdpTransform(a.sdp)||a.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,n.setLocalDescription(a)];case 4:return t.sent(),r.default.log("Set localDescription:",a,"for:"+this.connection.peer),s={sdp:a,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata,browser:i.util.browser},this.connection.type===c.ConnectionType.Data&&(d=this.connection,s=e(e({},s),{label:d.label,reliable:d.reliable,serialization:d.serialization})),o.socket.send({type:c.ServerMessageType.Offer,payload:s,dst:this.connection.peer}),[3,6];case 5:return"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=(l=t.sent())&&(o.emitError(c.PeerErrorType.WebRTC,l),r.default.log("Failed to setLocalDescription, ",l)),[3,6];case 6:return[3,8];case 7:return u=t.sent(),o.emitError(c.PeerErrorType.WebRTC,u),r.default.log("Failed to createOffer, ",u),[3,8];case 8:return[2]}})})},o.prototype._makeAnswer=function(){return n(this,void 0,Promise,function(){var e,n,o,a,s;return t(this,function(t){switch(t.label){case 0:e=this.connection.peerConnection,n=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,e.createAnswer()];case 2:o=t.sent(),r.default.log("Created answer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(o.sdp=this.connection.options.sdpTransform(o.sdp)||o.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,e.setLocalDescription(o)];case 4:return t.sent(),r.default.log("Set localDescription:",o,"for:"+this.connection.peer),n.socket.send({type:c.ServerMessageType.Answer,payload:{sdp:o,type:this.connection.type,connectionId:this.connection.connectionId,browser:i.util.browser},dst:this.connection.peer}),[3,6];case 5:return a=t.sent(),n.emitError(c.PeerErrorType.WebRTC,a),r.default.log("Failed to setLocalDescription, ",a),[3,6];case 6:return[3,8];case 7:return s=t.sent(),n.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to create answer, ",s),[3,8];case 8:return[2]}})})},o.prototype.handleSDP=function(e,o){return n(this,void 0,Promise,function(){var n,i,a,s;return t(this,function(t){switch(t.label){case 0:o=new RTCSessionDescription(o),n=this.connection.peerConnection,i=this.connection.provider,r.default.log("Setting remote description",o),a=this,t.label=1;case 1:return t.trys.push([1,5,,6]),[4,n.setRemoteDescription(o)];case 2:return t.sent(),r.default.log("Set remoteDescription:"+e+" for:"+this.connection.peer),"OFFER"!==e?[3,4]:[4,a._makeAnswer()];case 3:t.sent(),t.label=4;case 4:return[3,6];case 5:return s=t.sent(),i.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to setRemoteDescription, ",s),[3,6];case 6:return[2]}})})},o.prototype.handleCandidate=function(e){return n(this,void 0,Promise,function(){var n,o,i,a,s,d;return t(this,function(t){switch(t.label){case 0:r.default.log("handleCandidate:",e),n=e.candidate,o=e.sdpMLineIndex,i=e.sdpMid,a=this.connection.peerConnection,s=this.connection.provider,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,a.addIceCandidate(new RTCIceCandidate({sdpMid:i,sdpMLineIndex:o,candidate:n}))];case 2:return t.sent(),r.default.log("Added ICE candidate for:"+this.connection.peer),[3,4];case 3:return d=t.sent(),s.emitError(c.PeerErrorType.WebRTC,d),r.default.log("Failed to handleCandidate, ",d),[3,4];case 4:return[2]}})})},o.prototype._addTracksToConnection=function(e,n){if(r.default.log("add tracks from stream "+e.id+" to peer connection"),!n.addTrack)return r.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(function(t){n.addTrack(t,e)})},o.prototype._addStreamToMediaConnection=function(e,n){r.default.log("add stream "+e.id+" to media connection "+n.connectionId),n.addStream(e)},o}();exports.Negotiator=a;
},{"./util":"BHXf","./logger":"WOs9","./enums":"ZRYf"}],"tQFK":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("eventemitter3"),r=function(e){function r(t,r,n){var o=e.call(this)||this;return o.peer=t,o.provider=r,o.options=n,o._open=!1,o.metadata=n.metadata,o}return t(r,e),Object.defineProperty(r.prototype,"open",{get:function(){return this._open},enumerable:!0,configurable:!0}),r}(e.EventEmitter);exports.BaseConnection=r;
},{"eventemitter3":"JJlS"}],"dbHP":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],r=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./util"),i=r(require("./logger")),a=require("./negotiator"),s=require("./enums"),l=require("./baseconnection"),c=function(r){function l(e,t,o){var i=r.call(this,e,t,o)||this;return i._localStream=i.options._stream,i.connectionId=i.options.connectionId||l.ID_PREFIX+n.util.randomToken(),i._negotiator=new a.Negotiator(i),i._localStream&&i._negotiator.startConnection({_stream:i._localStream,originator:!0}),i}return e(l,r),Object.defineProperty(l.prototype,"type",{get:function(){return s.ConnectionType.Media},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"localStream",{get:function(){return this._localStream},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"remoteStream",{get:function(){return this._remoteStream},enumerable:!0,configurable:!0}),l.prototype.addStream=function(e){i.default.log("Receiving stream",e),this._remoteStream=e,r.prototype.emit.call(this,s.ConnectionEventType.Stream,e)},l.prototype.handleMessage=function(e){var t=e.type,o=e.payload;switch(e.type){case s.ServerMessageType.Answer:this._negotiator.handleSDP(t,o.sdp),this._open=!0;break;case s.ServerMessageType.Candidate:this._negotiator.handleCandidate(o.candidate);break;default:i.default.warn("Unrecognized message type:"+t+" from peer:"+this.peer)}},l.prototype.answer=function(e,r){var n,a;if(void 0===r&&(r={}),this._localStream)i.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");else{this._localStream=e,r&&r.sdpTransform&&(this.options.sdpTransform=r.sdpTransform),this._negotiator.startConnection(t(t({},this.options._payload),{_stream:e}));var s=this.provider._getMessages(this.connectionId);try{for(var l=o(s),c=l.next();!c.done;c=l.next()){var p=c.value;this.handleMessage(p)}}catch(u){n={error:u}}finally{try{c&&!c.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}this._open=!0}},l.prototype.close=function(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,r.prototype.emit.call(this,s.ConnectionEventType.Close))},l.ID_PREFIX="mc_",l}(l.BaseConnection);exports.MediaConnection=c;
},{"./util":"BHXf","./logger":"WOs9","./negotiator":"HCdX","./enums":"ZRYf","./baseconnection":"tQFK"}],"GGp6":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("eventemitter3"),o=t(require("./logger")),n=function(t){function r(){var e=t.call(this)||this;return e.fileReader=new FileReader,e._queue=[],e._processing=!1,e.fileReader.onload=function(t){e._processing=!1,t.target&&e.emit("done",t.target.result),e.doNextTask()},e.fileReader.onerror=function(t){o.default.error("EncodingQueue error:",t),e._processing=!1,e.destroy(),e.emit("error",t)},e}return e(r,t),Object.defineProperty(r.prototype,"queue",{get:function(){return this._queue},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"size",{get:function(){return this.queue.length},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"processing",{get:function(){return this._processing},enumerable:!0,configurable:!0}),r.prototype.enque=function(e){this.queue.push(e),this.processing||this.doNextTask()},r.prototype.destroy=function(){this.fileReader.abort(),this._queue=[]},r.prototype.doNextTask=function(){0!==this.size&&(this.processing||(this._processing=!0,this.fileReader.readAsArrayBuffer(this.queue.shift())))},r}(r.EventEmitter);exports.EncodingQueue=n;
},{"eventemitter3":"JJlS","./logger":"WOs9"}],"GBTQ":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),t=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),o=n(require("./logger")),r=require("./negotiator"),a=require("./enums"),s=require("./baseconnection"),u=require("./encodingQueue"),l=function(n){function s(e,t,l){var f=n.call(this,e,t,l)||this;return f.stringify=JSON.stringify,f.parse=JSON.parse,f._buffer=[],f._bufferSize=0,f._buffering=!1,f._chunkedData={},f._encodingQueue=new u.EncodingQueue,f.connectionId=f.options.connectionId||s.ID_PREFIX+i.util.randomToken(),f.label=f.options.label||f.connectionId,f.serialization=f.options.serialization||a.SerializationType.Binary,f.reliable=!!f.options.reliable,f._encodingQueue.on("done",function(e){f._bufferedSend(e)}),f._encodingQueue.on("error",function(){o.default.error("DC#"+f.connectionId+": Error occured in encoding from blob to arraybuffer, close DC"),f.close()}),f._negotiator=new r.Negotiator(f),f._negotiator.startConnection(f.options._payload||{originator:!0}),f}return e(s,n),Object.defineProperty(s.prototype,"type",{get:function(){return a.ConnectionType.Data},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"dataChannel",{get:function(){return this._dc},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"bufferSize",{get:function(){return this._bufferSize},enumerable:!0,configurable:!0}),s.prototype.initialize=function(e){this._dc=e,this._configureDataChannel()},s.prototype._configureDataChannel=function(){var e=this;i.util.supports.binaryBlob&&!i.util.supports.reliable||(this.dataChannel.binaryType="arraybuffer"),this.dataChannel.onopen=function(){o.default.log("DC#"+e.connectionId+" dc connection success"),e._open=!0,e.emit(a.ConnectionEventType.Open)},this.dataChannel.onmessage=function(t){o.default.log("DC#"+e.connectionId+" dc onmessage:",t.data),e._handleDataMessage(t)},this.dataChannel.onclose=function(){o.default.log("DC#"+e.connectionId+" dc closed for:",e.peer),e.close()}},s.prototype._handleDataMessage=function(e){var t=this,o=e.data,r=o.constructor,s=o;if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){if(r===Blob)return void i.util.blobToArrayBuffer(o,function(e){var n=i.util.unpack(e);t.emit(a.ConnectionEventType.Data,n)});if(r===ArrayBuffer)s=i.util.unpack(o);else if(r===String){var u=i.util.binaryStringToArrayBuffer(o);s=i.util.unpack(u)}}else this.serialization===a.SerializationType.JSON&&(s=this.parse(o));s.__peerData?this._handleChunk(s):n.prototype.emit.call(this,a.ConnectionEventType.Data,s)},s.prototype._handleChunk=function(e){var t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=e.data,n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];var i=new Blob(n.data);this._handleDataMessage({data:i})}},s.prototype.close=function(){this._buffer=[],this._bufferSize=0,this._chunkedData={},this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc=null),this._encodingQueue&&(this._encodingQueue.destroy(),this._encodingQueue.removeAllListeners(),this._encodingQueue=null),this.open&&(this._open=!1,n.prototype.emit.call(this,a.ConnectionEventType.Close))},s.prototype.send=function(e,t){if(this.open)if(this.serialization===a.SerializationType.JSON)this._bufferedSend(this.stringify(e));else if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){var o=i.util.pack(e);if(!t&&o.size>i.util.chunkedMTU)return void this._sendChunks(o);i.util.supports.binaryBlob?this._bufferedSend(o):this._encodingQueue.enque(o)}else this._bufferedSend(e);else n.prototype.emit.call(this,a.ConnectionEventType.Error,new Error("Connection is not open. You should listen for the `open` event before sending messages."))},s.prototype._bufferedSend=function(e){!this._buffering&&this._trySend(e)||(this._buffer.push(e),this._bufferSize=this._buffer.length)},s.prototype._trySend=function(e){var t=this;if(!this.open)return!1;if(this.dataChannel.bufferedAmount>s.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(function(){t._buffering=!1,t._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(n){return o.default.error("DC#:"+this.connectionId+" Error when sending:",n),this._buffering=!0,this.close(),!1}return!0},s.prototype._tryBuffer=function(){if(this.open&&0!==this._buffer.length){var e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}},s.prototype._sendChunks=function(e){var n,r,a=i.util.chunk(e);o.default.log("DC#"+this.connectionId+" Try to send "+a.length+" chunks...");try{for(var s=t(a),u=s.next();!u.done;u=s.next()){var l=u.value;this.send(l,!0)}}catch(f){n={error:f}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},s.prototype.handleMessage=function(e){var t=e.payload;switch(e.type){case a.ServerMessageType.Answer:this._negotiator.handleSDP(e.type,t.sdp);break;case a.ServerMessageType.Candidate:this._negotiator.handleCandidate(t.candidate);break;default:o.default.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}},s.ID_PREFIX="dc_",s.MAX_BUFFERED_AMOUNT=8388608,s}(s.BaseConnection);exports.DataConnection=l;
},{"./util":"BHXf","./logger":"WOs9","./negotiator":"HCdX","./enums":"ZRYf","./baseconnection":"tQFK","./encodingQueue":"GGp6"}],"in7L":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,s){function i(t){try{a(o.next(t))}catch(e){s(e)}}function u(t){try{a(o.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(i,u)}a((o=o.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(u){s=[6,u],o=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("./util"),n=r(require("./logger")),s=function(){function r(t){this._options=t}return r.prototype._buildUrl=function(t){var e=(this._options.secure?"https://":"http://")+this._options.host+":"+this._options.port+this._options.path+this._options.key+"/"+t;return e+="?ts="+(new Date).getTime()+Math.random()},r.prototype.retrieveId=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("id"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status)throw new Error("Error. Status:"+r.status);return[2,r.text()];case 3:throw s=e.sent(),n.default.error("Error retrieving ID",s),i="","/"===this._options.path&&this._options.host!==o.util.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i);case 4:return[2]}})})},r.prototype.listAllPeers=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("peers"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status){if(401===r.status)throw s="",s=this._options.host===o.util.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+s);throw new Error("Error. Status:"+r.status)}return[2,r.json()];case 3:throw i=e.sent(),n.default.error("Error retrieving list peers",i),new Error("Could not get list peers from the server."+i);case 4:return[2]}})})},r}();exports.API=s;
},{"./util":"BHXf","./logger":"WOs9"}],"Hxpd":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("eventemitter3"),s=require("./util"),a=o(require("./logger")),c=require("./socket"),l=require("./mediaconnection"),d=require("./dataconnection"),u=require("./enums"),p=require("./api"),h=function(){return function(){}}(),f=function(o){function i(e,n){var r,c=o.call(this)||this;return c._id=null,c._lastServerId=null,c._destroyed=!1,c._disconnected=!1,c._open=!1,c._connections=new Map,c._lostMessages=new Map,e&&e.constructor==Object?n=e:e&&(r=e.toString()),n=t({debug:0,host:s.util.CLOUD_HOST,port:s.util.CLOUD_PORT,path:"/",key:i.DEFAULT_KEY,token:s.util.randomToken(),config:s.util.defaultConfig},n),c._options=n,"/"===c._options.host&&(c._options.host=window.location.hostname),c._options.path&&("/"!==c._options.path[0]&&(c._options.path="/"+c._options.path),"/"!==c._options.path[c._options.path.length-1]&&(c._options.path+="/")),void 0===c._options.secure&&c._options.host!==s.util.CLOUD_HOST?c._options.secure=s.util.isSecure():c._options.host==s.util.CLOUD_HOST&&(c._options.secure=!0),c._options.logFunction&&a.default.setLogFunction(c._options.logFunction),a.default.logLevel=c._options.debug||0,c._api=new p.API(n),c._socket=c._createServerConnection(),s.util.supports.audioVideo||s.util.supports.data?r&&!s.util.validateId(r)?(c._delayedAbort(u.PeerErrorType.InvalidID,'ID "'+r+'" is invalid'),c):(r?c._initialize(r):c._api.retrieveId().then(function(e){return c._initialize(e)}).catch(function(e){return c._abort(u.PeerErrorType.ServerError,e)}),c):(c._delayedAbort(u.PeerErrorType.BrowserIncompatible,"The current browser does not support WebRTC"),c)}return e(i,o),Object.defineProperty(i.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"open",{get:function(){return this._open},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"socket",{get:function(){return this._socket},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"connections",{get:function(){var e,t,o=Object.create(null);try{for(var i=n(this._connections),s=i.next();!s.done;s=i.next()){var a=r(s.value,2),c=a[0],l=a[1];o[c]=l}}catch(d){e={error:d}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return o},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"disconnected",{get:function(){return this._disconnected},enumerable:!0,configurable:!0}),i.prototype._createServerConnection=function(){var e=this,t=new c.Socket(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return t.on(u.SocketEventType.Message,function(t){e._handleMessage(t)}),t.on(u.SocketEventType.Error,function(t){e._abort(u.PeerErrorType.SocketError,t)}),t.on(u.SocketEventType.Disconnected,function(){e.disconnected||(e.emitError(u.PeerErrorType.Network,"Lost connection to server."),e.disconnect())}),t.on(u.SocketEventType.Close,function(){e.disconnected||e._abort(u.PeerErrorType.SocketClosed,"Underlying socket is already closed.")}),t},i.prototype._initialize=function(e){this._id=e,this.socket.start(e,this._options.token)},i.prototype._handleMessage=function(e){var t,r,o=e.type,i=e.payload,s=e.src;switch(o){case u.ServerMessageType.Open:this._lastServerId=this.id,this._open=!0,this.emit(u.PeerEventType.Open,this.id);break;case u.ServerMessageType.Error:this._abort(u.PeerErrorType.ServerError,i.msg);break;case u.ServerMessageType.IdTaken:this._abort(u.PeerErrorType.UnavailableID,'ID "'+this.id+'" is taken');break;case u.ServerMessageType.InvalidKey:this._abort(u.PeerErrorType.InvalidKey,'API KEY "'+this._options.key+'" is invalid');break;case u.ServerMessageType.Leave:a.default.log("Received leave message from "+s),this._cleanupPeer(s),this._connections.delete(s);break;case u.ServerMessageType.Expire:this.emitError(u.PeerErrorType.PeerUnavailable,"Could not connect to peer "+s);break;case u.ServerMessageType.Offer:var c=i.connectionId;if((_=this.getConnection(s,c))&&(_.close(),a.default.warn("Offer received for existing Connection ID:"+c)),i.type===u.ConnectionType.Media)_=new l.MediaConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata}),this._addConnection(s,_),this.emit(u.PeerEventType.Call,_);else{if(i.type!==u.ConnectionType.Data)return void a.default.warn("Received malformed connection type:"+i.type);_=new d.DataConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable}),this._addConnection(s,_),this.emit(u.PeerEventType.Connection,_)}var p=this._getMessages(c);try{for(var h=n(p),f=h.next();!f.done;f=h.next()){var y=f.value;_.handleMessage(y)}}catch(v){t={error:v}}finally{try{f&&!f.done&&(r=h.return)&&r.call(h)}finally{if(t)throw t.error}}break;default:if(!i)return void a.default.warn("You received a malformed message from "+s+" of type "+o);var _;c=i.connectionId;(_=this.getConnection(s,c))&&_.peerConnection?_.handleMessage(e):c?this._storeMessage(c,e):a.default.warn("You received an unrecognized message:",e)}},i.prototype._storeMessage=function(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)},i.prototype._getMessages=function(e){var t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]},i.prototype.connect=function(e,t){if(void 0===t&&(t={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError(u.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");var n=new d.DataConnection(e,this,t);return this._addConnection(e,n),n},i.prototype.call=function(e,t,n){if(void 0===n&&(n={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError(u.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");if(t){n._stream=t;var r=new l.MediaConnection(e,this,n);return this._addConnection(e,r),r}a.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.")},i.prototype._addConnection=function(e,t){a.default.log("add connection "+t.type+":"+t.connectionId+" to peerId:"+e),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)},i.prototype._removeConnection=function(e){var t=this._connections.get(e.peer);if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)},i.prototype.getConnection=function(e,t){var r,o,i=this._connections.get(e);if(!i)return null;try{for(var s=n(i),a=s.next();!a.done;a=s.next()){var c=a.value;if(c.connectionId===t)return c}}catch(l){r={error:l}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}return null},i.prototype._delayedAbort=function(e,t){var n=this;setTimeout(function(){n._abort(e,t)},0)},i.prototype._abort=function(e,t){a.default.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()},i.prototype.emitError=function(e,t){var n;a.default.error("Error:",t),(n="string"==typeof t?new Error(t):t).type=e,this.emit(u.PeerEventType.Error,n)},i.prototype.destroy=function(){this.destroyed||(a.default.log("Destroy peer with ID:"+this.id),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit(u.PeerEventType.Close))},i.prototype._cleanup=function(){var e,t;try{for(var r=n(this._connections.keys()),o=r.next();!o.done;o=r.next()){var i=o.value;this._cleanupPeer(i),this._connections.delete(i)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.socket.removeAllListeners()},i.prototype._cleanupPeer=function(e){var t,r,o=this._connections.get(e);if(o)try{for(var i=n(o),s=i.next();!s.done;s=i.next()){s.value.close()}}catch(a){t={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},i.prototype.disconnect=function(){if(!this.disconnected){var e=this.id;a.default.log("Disconnect peer with ID:"+e),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit(u.PeerEventType.Disconnected,e)}},i.prototype.reconnect=function(){if(this.disconnected&&!this.destroyed)a.default.log("Attempting reconnection to server with ID "+this._lastServerId),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error("Peer "+this.id+" cannot reconnect because it is not disconnected from the server!");a.default.error("In a hurry? We're still trying to make the initial connection!")}},i.prototype.listAllPeers=function(e){var t=this;void 0===e&&(e=function(e){}),this._api.listAllPeers().then(function(t){return e(t)}).catch(function(e){return t._abort(u.PeerErrorType.ServerError,e)})},i.DEFAULT_KEY="peerjs",i}(i.EventEmitter);exports.Peer=f;
},{"eventemitter3":"JJlS","./util":"BHXf","./logger":"WOs9","./socket":"wJlv","./mediaconnection":"dbHP","./dataconnection":"GBTQ","./enums":"ZRYf","./api":"in7L"}],"iTK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./util"),r=require("./peer");exports.peerjs={Peer:r.Peer,util:e.util},exports.default=r.Peer,window.peerjs=exports.peerjs,window.Peer=r.Peer;
},{"./util":"BHXf","./peer":"Hxpd"}]},{},["iTK6"], null)
//# sourceMappingURL=/peerjs.min.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 34;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map