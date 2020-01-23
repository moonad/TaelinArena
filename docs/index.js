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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/* 2 */
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

var Readable = __webpack_require__(15);

var Writable = __webpack_require__(20);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

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



var base64 = __webpack_require__(67)
var ieee754 = __webpack_require__(68)
var isArray = __webpack_require__(69)

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

const now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

module.exports = {now};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;!function(e){if(true)module.exports=e();else {}}(function(){return function o(s,a,u){function l(t,e){if(!a[t]){if(!s[t]){var r="function"==typeof require&&require;if(!e&&r)return require(t,!0);if(h)return h(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return l(s[t][1][e]||e)},i,i.exports,o,s,a,u)}return a[t].exports}for(var h="function"==typeof require&&require,e=0;e<u.length;e++)l(u[e]);return l}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.version="4.0.43"},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./utils/properties"),i=(o.isSigner=function(e){return n.isType(e,"Signer")},o);function o(){n.setType(this,"Signer")}r.Signer=i},{"./utils/properties":74}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./utils/bignumber");r.AddressZero="0x0000000000000000000000000000000000000000";r.HashZero="0x0000000000000000000000000000000000000000000000000000000000000000";r.EtherSymbol="\u039e";var i=n.bigNumberify(-1);r.NegativeOne=i;var o=n.bigNumberify(0);r.Zero=o;var s=n.bigNumberify(1);r.One=s;var a=n.bigNumberify(2);r.Two=a;var u=n.bigNumberify("1000000000000000000");r.WeiPerEther=u;var l=n.bigNumberify("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");r.MaxUint256=l},{"./utils/bignumber":63}],4:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,u=e("./constants"),l=o(e("./errors")),h=e("./utils/abi-coder"),a=e("./utils/address"),f=e("./utils/bignumber"),c=e("./utils/bytes"),d=e("./utils/interface"),p=e("./utils/properties"),v=e("./providers/abstract-provider"),y=e("./abstract-signer"),m=(s=y.Signer,i(g,s),g.prototype.getAddress=function(){return Promise.resolve(this.address)},g.prototype._fail=function(e,t){return Promise.resolve().then(function(){l.throwError(e,l.UNSUPPORTED_OPERATION,{operation:t})})},g.prototype.signMessage=function(e){return this._fail("VoidSigner cannot sign messages","signMessage")},g.prototype.sendTransaction=function(e){return this._fail("VoidSigner cannot sign transactions","sendTransaction")},g.prototype.connect=function(e){return new g(this.address,e)},g);function g(e,t){var r=s.call(this)||this;return p.defineReadOnly(r,"address",e),p.defineReadOnly(r,"provider",t),r}r.VoidSigner=m;var b={chainId:!0,data:!0,from:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0};function w(o,e,s){var a=o.interface.functions[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i={},r=null;if(e.length===a.inputs.length+1&&"object"==typeof e[e.length-1])for(var n in null!=(i=p.shallowCopy(e.pop())).blockTag&&(r=i.blockTag),delete i.blockTag,i)if(!b[n])throw new Error("unknown transaction override "+n);if(e.length!=a.inputs.length)throw new Error("incorrect number of arguments");return["data","to"].forEach(function(e){null!=i[e]&&l.throwError("cannot override "+e,l.UNSUPPORTED_OPERATION,{operation:e})}),i.to=o._deployed(r).then(function(){return o.addressPromise}),function n(i,o,e){if(Array.isArray(e)){var s=[];return e.forEach(function(e,t){var r=null;r=Array.isArray(o)?o[t]:o[e.name],s.push(n(i,r,e))}),Promise.all(s)}if("address"===e.type)return i.resolveName(o);if("tuple"===e.type)return n(i,o,e.components);var t=e.type.match(/(.*)(\[[0-9]*\]$)/);if(t){if(!Array.isArray(o))throw new Error("invalid value for array");var r=[],a={components:e.components,type:t[1]};return o.forEach(function(e){r.push(n(i,e,a))}),Promise.all(r)}return Promise.resolve(o)}(o.provider,e,a.inputs).then(function(n){if(i.data=a.encode(n),"call"===a.type)return s?Promise.resolve(u.Zero):(o.provider||l.throwError("call (constant functions) require a provider or a signer with a provider",l.UNSUPPORTED_OPERATION,{operation:"call"}),["gasLimit","gasPrice","value"].forEach(function(e){if(null!=i[e])throw new Error("call cannot override "+e)}),null==i.from&&o.signer&&(i.from=o.signer.getAddress()),o.provider.call(i,r).then(function(t){if(c.hexDataLength(t)%32==4&&"0x08c379a0"===c.hexDataSlice(t,0,4)){var e=h.defaultAbiCoder.decode(["string"],c.hexDataSlice(t,4));l.throwError("call revert exception",l.CALL_EXCEPTION,{address:o.address,args:n,method:a.signature,errorSignature:"Error(string)",errorArgs:[e],reason:e,transaction:i})}try{var r=a.decode(t);return 1===a.outputs.length&&(r=r[0]),r}catch(e){throw"0x"===t&&0<a.outputs.length&&l.throwError("call exception",l.CALL_EXCEPTION,{address:o.address,method:a.signature,args:n}),e}}));if("transaction"===a.type)return s?(o.provider||l.throwError("estimate gas require a provider or a signer with a provider",l.UNSUPPORTED_OPERATION,{operation:"estimateGas"}),null==i.from&&o.signer&&(i.from=o.signer.getAddress()),o.provider.estimateGas(i)):(null==i.gasLimit&&null!=a.gas&&(i.gasLimit=f.bigNumberify(a.gas).add(21e3)),o.signer||l.throwError("sending a transaction requires a signer",l.UNSUPPORTED_OPERATION,{operation:"sendTransaction"}),null!=i.from&&l.throwError("cannot override from in a transaction",l.UNSUPPORTED_OPERATION,{operation:"sendTransaction"}),o.signer.sendTransaction(i).then(function(e){var t=e.wait.bind(e);return e.wait=function(e){return t(e).then(function(n){return n.events=n.logs.map(function(e){var t=p.deepCopy(e),r=o.interface.parseLog(e);return r&&(t.args=r.values,t.decode=r.decode,t.event=r.name,t.eventSignature=r.signature),t.removeListener=function(){return o.provider},t.getBlock=function(){return o.provider.getBlock(n.blockHash)},t.getTransaction=function(){return o.provider.getTransaction(n.transactionHash)},t.getTransactionReceipt=function(){return Promise.resolve(n)},t}),n})},e}));throw new Error("invalid type - "+a.type)})}}function _(e){return!e.address||null!=e.topics&&0!==e.topics.length?(e.address||"*")+"@"+(e.topics?e.topics.join(":"):""):"*"}var M=(A.prototype.deployed=function(){return this._deployed()},A.prototype._deployed=function(e){var t=this;return this._deployedPromise||(this.deployTransaction?this._deployedPromise=this.deployTransaction.wait().then(function(){return t}):this._deployedPromise=this.provider.getCode(this.address,e).then(function(e){return"0x"===e&&l.throwError("contract not deployed",l.UNSUPPORTED_OPERATION,{contractAddress:t.address,operation:"getDeployed"}),t})),this._deployedPromise},A.prototype.fallback=function(e){var t=this;this.signer||l.throwError("sending a transaction requires a signer",l.UNSUPPORTED_OPERATION,{operation:"sendTransaction(fallback)"});var r=p.shallowCopy(e||{});return["from","to"].forEach(function(e){null!=r[e]&&l.throwError("cannot override "+e,l.UNSUPPORTED_OPERATION,{operation:e})}),r.to=this.addressPromise,this.deployed().then(function(){return t.signer.sendTransaction(r)})},A.prototype.connect=function(e){"string"==typeof e&&(e=new m(e,this.provider));var t=new A(this.address,this.interface,e);return this.deployTransaction&&p.defineReadOnly(t,"deployTransaction",this.deployTransaction),t},A.prototype.attach=function(e){return new A(e,this.interface,this.signer||this.provider)},A.isIndexed=function(e){return d.Interface.isIndexed(e)},A.prototype._getEventFilter=function(e){var r=this;if("string"==typeof e){if("*"===e)return{prepareEvent:function(e){var t=r.interface.parseLog(e);return t&&(e.args=t.values,e.decode=t.decode,e.event=t.name,e.eventSignature=t.signature),[e]},eventTag:"*",filter:{address:this.address}};-1!==e.indexOf("(")&&(e=h.formatSignature(h.parseSignature("event "+e)));var n=this.interface.events[e];n||l.throwError("unknown event - "+e,l.INVALID_ARGUMENT,{argumnet:"eventName",value:e});var t={address:this.address,topics:[n.topic]};return{prepareEvent:function(e){var t=n.decode(e.data,e.topics);e.args=t;var r=Array.prototype.slice.call(t);return r.push(e),r},event:n,eventTag:_(t),filter:t}}var i={address:this.address},o=null;if(e.topics&&e.topics[0])for(var s in i.topics=e.topics,this.interface.events)if(-1!==s.indexOf("(")){var a=this.interface.events[s];if(a.topic===e.topics[0].toLowerCase()){o=a;break}}return{prepareEvent:function(e){if(!o)return[e];var t=o.decode(e.data,e.topics);e.args=t;var r=Array.prototype.slice.call(t);return r.push(e),r},event:o,eventTag:_(i),filter:i}},A.prototype._addEventListener=function(n,i,e){var o=this;function t(e){var t=p.deepCopy(e),r=n.prepareEvent(t);n.event&&(t.decode=n.event.decode,t.event=n.event.name,t.eventSignature=n.event.signature),t.removeListener=function(){o.removeListener(n.filter,i)},t.getBlock=function(){return o.provider.getBlock(e.blockHash)},t.getTransaction=function(){return o.provider.getTransaction(e.transactionHash)},t.getTransactionReceipt=function(){return o.provider.getTransactionReceipt(e.transactionHash)},o.emit.apply(o,[n.filter].concat(r))}this.provider||l.throwError("events require a provider or a signer with a provider",l.UNSUPPORTED_OPERATION,{operation:"once"}),this.provider.on(n.filter,t),this._events.push({eventFilter:n,listener:i,wrappedListener:t,once:e})},A.prototype.on=function(e,t){return this._addEventListener(this._getEventFilter(e),t,!1),this},A.prototype.once=function(e,t){return this._addEventListener(this._getEventFilter(e),t,!0),this},A.prototype.addListener=function(e,t){return this.on(e,t)},A.prototype.emit=function(e){for(var t=this,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(!this.provider)return!1;var i=!1,o=this._getEventFilter(e);return this._events=this._events.filter(function(e){return e.eventFilter.eventTag!==o.eventTag||(setTimeout(function(){e.listener.apply(t,r)},0),i=!0,!e.once)}),i},A.prototype.listenerCount=function(e){if(!this.provider)return 0;var t=this._getEventFilter(e);return this._events.filter(function(e){return e.eventFilter.eventTag===t.eventTag}).length},A.prototype.listeners=function(e){if(!this.provider)return[];var t=this._getEventFilter(e);return this._events.filter(function(e){return e.eventFilter.eventTag===t.eventTag}).map(function(e){return e.listener})},A.prototype.removeAllListeners=function(e){var t=this;if(!this.provider)return this;var r=this._getEventFilter(e);return this._events=this._events.filter(function(e){return e.eventFilter.eventTag!==r.eventTag||(t.provider.removeListener(e.eventFilter.filter,e.wrappedListener),!1)}),this},A.prototype.removeListener=function(e,t){var r=this;if(!this.provider)return this;var n=!1,i=this._getEventFilter(e);return this._events=this._events.filter(function(e){return e.eventFilter.eventTag!==i.eventTag||e.listener!==t||(r.provider.removeListener(e.eventFilter.filter,e.wrappedListener),!!n||!(n=!0))}),this},A);function A(t,e,r){var n=this;if(l.checkNew(this,A),d.Interface.isInterface(e)?p.defineReadOnly(this,"interface",e):p.defineReadOnly(this,"interface",new d.Interface(e)),y.Signer.isSigner(r)?(p.defineReadOnly(this,"provider",r.provider),p.defineReadOnly(this,"signer",r)):v.Provider.isProvider(r)?(p.defineReadOnly(this,"provider",r),p.defineReadOnly(this,"signer",null)):l.throwError("invalid signer or provider",l.INVALID_ARGUMENT,{arg:"signerOrProvider",value:r}),p.defineReadOnly(this,"estimate",{}),p.defineReadOnly(this,"functions",{}),p.defineReadOnly(this,"filters",{}),Object.keys(this.interface.events).forEach(function(e){var r=n.interface.events[e];p.defineReadOnly(n.filters,e,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return{address:n.address,topics:r.encodeTopics(e)}})}),this._events=[],p.defineReadOnly(this,"address",t),this.provider)p.defineReadOnly(this,"addressPromise",this.provider.resolveName(t).then(function(e){if(null==e)throw new Error("name not found");return e}).catch(function(e){throw e}));else try{p.defineReadOnly(this,"addressPromise",Promise.resolve(a.getAddress(t)))}catch(e){l.throwError("provider is required to use non-address contract address",l.INVALID_ARGUMENT,{argument:"addressOrName",value:t})}Object.keys(this.interface.functions).forEach(function(e){var t=w(n,e,!1);null==n[e]?p.defineReadOnly(n,e,t):l.warn("WARNING: Multiple definitions for "+e),null==n.functions[e]&&(p.defineReadOnly(n.functions,e,t),p.defineReadOnly(n.estimate,e,w(n,e,!0)))})}r.Contract=M;var E=(S.prototype.getDeployTransaction=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r={};if(e.length===this.interface.deployFunction.inputs.length+1)for(var n in r=p.shallowCopy(e.pop()))if(!b[n])throw new Error("unknown transaction override "+n);return["data","from","to"].forEach(function(e){null!=r[e]&&l.throwError("cannot override "+e,l.UNSUPPORTED_OPERATION,{operation:e})}),l.checkArgumentCount(e.length,this.interface.deployFunction.inputs.length," in Contract constructor"),r.data=this.interface.deployFunction.encode(this.bytecode,e),r},S.prototype.deploy=function(){for(var r=this,e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this.getDeployTransaction.apply(this,e);return this.signer.sendTransaction(n).then(function(e){var t=new M(a.getContractAddress(e),r.interface,r.signer);return p.defineReadOnly(t,"deployTransaction",e),t})},S.prototype.attach=function(e){return new M(e,this.interface,this.signer)},S.prototype.connect=function(e){return new S(this.interface,this.bytecode,e)},S.fromSolidity=function(e,t){null==e&&l.throwError("missing compiler output",l.MISSING_ARGUMENT,{argument:"compilerOutput"}),"string"==typeof e&&(e=JSON.parse(e));var r=e.abi,n=null;return e.bytecode?n=e.bytecode:e.evm&&e.evm.bytecode&&(n=e.evm.bytecode),new S(r,n,t)},S);function S(e,t,r){var n=null;"string"==typeof t?n=t:c.isArrayish(t)?n=c.hexlify(t):"string"==typeof t.object?n=t.object:l.throwError("bytecode must be a valid hex string",l.INVALID_ARGUMENT,{arg:"bytecode",value:t}),"0x"!==n.substring(0,2)&&(n="0x"+n),c.isHexString(n)||l.throwError("bytecode must be a valid hex string",l.INVALID_ARGUMENT,{arg:"bytecode",value:t}),n.length%2!=0&&l.throwError("bytecode must be valid data (even length)",l.INVALID_ARGUMENT,{arg:"bytecode",value:t}),p.defineReadOnly(this,"bytecode",n),d.Interface.isInterface(e)?p.defineReadOnly(this,"interface",e):p.defineReadOnly(this,"interface",new d.Interface(e)),r&&!y.Signer.isSigner(r)&&l.throwError("invalid signer",l.INVALID_ARGUMENT,{arg:"signer",value:null}),p.defineReadOnly(this,"signer",r||null)}r.ContractFactory=E},{"./abstract-signer":2,"./constants":3,"./errors":5,"./providers/abstract-provider":50,"./utils/abi-coder":59,"./utils/address":60,"./utils/bignumber":63,"./utils/bytes":64,"./utils/interface":69,"./utils/properties":74}],5:[function(e,t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("./_version");s.UNKNOWN_ERROR="UNKNOWN_ERROR",s.NOT_IMPLEMENTED="NOT_IMPLEMENTED",s.MISSING_NEW="MISSING_NEW",s.CALL_EXCEPTION="CALL_EXCEPTION",s.INVALID_ARGUMENT="INVALID_ARGUMENT",s.MISSING_ARGUMENT="MISSING_ARGUMENT",s.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",s.NUMERIC_FAULT="NUMERIC_FAULT",s.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",s.NONCE_EXPIRED="NONCE_EXPIRED",s.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED";var r=!(s.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION"),u=!1;function n(e,t,r){if(u)throw new Error("unknown error");t=t||s.UNKNOWN_ERROR,r=r||{};var n=[];Object.keys(r).forEach(function(t){try{n.push(t+"="+JSON.stringify(r[t]))}catch(e){n.push(t+"="+JSON.stringify(r[t].toString()))}}),n.push("version="+a.version);var i=e;n.length&&(e+=" ("+n.join(", ")+")");var o=new Error(e);throw o.reason=i,o.code=t,Object.keys(r).forEach(function(e){o[e]=r[e]}),o}s.throwError=n,s.checkNew=function(e,t){e instanceof t||n("missing new",s.MISSING_NEW,{name:t.name})},s.checkArgumentCount=function(e,t,r){r=r||"",e<t&&n("missing argument"+r,s.MISSING_ARGUMENT,{count:e,expectedCount:t}),t<e&&n("too many arguments"+r,s.UNEXPECTED_ARGUMENT,{count:e,expectedCount:t})},s.setCensorship=function(e,t){r&&n("error censorship permanent",s.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),u=!!e,r=!!t},s.checkNormalize=function(){try{if(["NFD","NFC","NFKD","NFKC"].forEach(function(t){try{"test".normalize(t)}catch(e){throw new Error("missing "+t)}}),String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){n("platform missing String.prototype.normalize",s.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:e.message})}};var i={debug:1,default:2,info:2,warn:3,error:4,off:5},o=i.default;function l(e,t){o>i[e]||console.log.apply(console,t)}function h(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];l("warn",e)}s.setLogLevel=function(e){var t=i[e];null!=t?o=t:h("invliad log level - "+e)},s.warn=h,s.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];l("info",e)}},{"./_version":1}],6:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("./contract");r.Contract=i.Contract,r.ContractFactory=i.ContractFactory,r.VoidSigner=i.VoidSigner;var o=e("./abstract-signer");r.Signer=o.Signer;var s=e("./wallet");r.Wallet=s.Wallet;var a=n(e("./constants"));r.constants=a;var u=n(e("./errors"));r.errors=u;var l=n(e("./providers"));r.providers=l;var h=n(e("./utils"));r.utils=h;var f=n(e("./wordlists"));r.wordlists=f;var c=e("./utils/shims");r.platform=c.platform;var d=e("./_version");r.version=d.version,r.getDefaultProvider=function(e){null==e&&(e="homestead");var t=h.getNetwork(e);return t&&t._defaultProvider||u.throwError("unsupported getDefaultProvider network",u.UNSUPPORTED_OPERATION,{operation:"getDefaultProvider",network:e}),t._defaultProvider(l)}},{"./_version":1,"./abstract-signer":2,"./constants":3,"./contract":4,"./errors":5,"./providers":54,"./utils":68,"./utils/shims":80,"./wallet":88,"./wordlists":89}],7:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("./ethers"));r.ethers=i,function(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}(e("./ethers"))},{"./ethers":6}],8:[function(e,C,L){"use strict";!function(e){function r(e){return parseInt(e)===e}function n(e){if(!r(e.length))return!1;for(var t=0;t<e.length;t++)if(!r(e[t])||e[t]<0||255<e[t])return!1;return!0}function o(e,t){if(e.buffer&&ArrayBuffer.isView(e)&&"Uint8Array"===e.name)return t&&(e=e.slice?e.slice():Array.prototype.slice.call(e)),e;if(Array.isArray(e)){if(!n(e))throw new Error("Array contains invalid value: "+e);return new Uint8Array(e)}if(r(e.length)&&n(e))return new Uint8Array(e);throw new Error("unsupported array-like object")}function u(e){return new Uint8Array(e)}function s(e,t,r,n,i){null==n&&null==i||(e=e.slice?e.slice(n,i):Array.prototype.slice.call(e,n,i)),t.set(e,r)}var i,t={toBytes:function(e){var t=[],r=0;for(e=encodeURI(e);r<e.length;){var n=e.charCodeAt(r++);37===n?(t.push(parseInt(e.substr(r,2),16)),r+=2):t.push(n)}return o(t)},fromBytes:function(e){for(var t=[],r=0;r<e.length;){var n=e[r];n<128?(t.push(String.fromCharCode(n)),r++):191<n&&n<224?(t.push(String.fromCharCode((31&n)<<6|63&e[r+1])),r+=2):(t.push(String.fromCharCode((15&n)<<12|(63&e[r+1])<<6|63&e[r+2])),r+=3)}return t.join("")}},a=(i="0123456789abcdef",{toBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},fromBytes:function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(i[(240&n)>>4]+i[15&n])}return t.join("")}}),f={16:10,24:12,32:14},c=[1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],d=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],l=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],h=[3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],p=[2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],v=[1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],y=[1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],m=[1374988112,2118214995,437757123,975658646,1001089995,530400753,2902087851,1273168787,540080725,2910219766,2295101073,4110568485,1340463100,3307916247,641025152,3043140495,3736164937,632953703,1172967064,1576976609,3274667266,2169303058,2370213795,1809054150,59727847,361929877,3211623147,2505202138,3569255213,1484005843,1239443753,2395588676,1975683434,4102977912,2572697195,666464733,3202437046,4035489047,3374361702,2110667444,1675577880,3843699074,2538681184,1649639237,2976151520,3144396420,4269907996,4178062228,1883793496,2403728665,2497604743,1383856311,2876494627,1917518562,3810496343,1716890410,3001755655,800440835,2261089178,3543599269,807962610,599762354,33778362,3977675356,2328828971,2809771154,4077384432,1315562145,1708848333,101039829,3509871135,3299278474,875451293,2733856160,92987698,2767645557,193195065,1080094634,1584504582,3178106961,1042385657,2531067453,3711829422,1306967366,2438237621,1908694277,67556463,1615861247,429456164,3602770327,2302690252,1742315127,2968011453,126454664,3877198648,2043211483,2709260871,2084704233,4169408201,0,159417987,841739592,504459436,1817866830,4245618683,260388950,1034867998,908933415,168810852,1750902305,2606453969,607530554,202008497,2472011535,3035535058,463180190,2160117071,1641816226,1517767529,470948374,3801332234,3231722213,1008918595,303765277,235474187,4069246893,766945465,337553864,1475418501,2943682380,4003061179,2743034109,4144047775,1551037884,1147550661,1543208500,2336434550,3408119516,3069049960,3102011747,3610369226,1113818384,328671808,2227573024,2236228733,3535486456,2935566865,3341394285,496906059,3702665459,226906860,2009195472,733156972,2842737049,294930682,1206477858,2835123396,2700099354,1451044056,573804783,2269728455,3644379585,2362090238,2564033334,2801107407,2776292904,3669462566,1068351396,742039012,1350078989,1784663195,1417561698,4136440770,2430122216,775550814,2193862645,2673705150,1775276924,1876241833,3475313331,3366754619,270040487,3902563182,3678124923,3441850377,1851332852,3969562369,2203032232,3868552805,2868897406,566021896,4011190502,3135740889,1248802510,3936291284,699432150,832877231,708780849,3332740144,899835584,1951317047,4236429990,3767586992,866637845,4043610186,1106041591,2144161806,395441711,1984812685,1139781709,3433712980,3835036895,2664543715,1282050075,3240894392,1181045119,2640243204,25965917,4203181171,4211818798,3009879386,2463879762,3910161971,1842759443,2597806476,933301370,1509430414,3943906441,3467192302,3076639029,3776767469,2051518780,2631065433,1441952575,404016761,1942435775,1408749034,1610459739,3745345300,2017778566,3400528769,3110650942,941896748,3265478751,371049330,3168937228,675039627,4279080257,967311729,135050206,3635733660,1683407248,2076935265,3576870512,1215061108,3501741890],g=[1347548327,1400783205,3273267108,2520393566,3409685355,4045380933,2880240216,2471224067,1428173050,4138563181,2441661558,636813900,4233094615,3620022987,2149987652,2411029155,1239331162,1730525723,2554718734,3781033664,46346101,310463728,2743944855,3328955385,3875770207,2501218972,3955191162,3667219033,768917123,3545789473,692707433,1150208456,1786102409,2029293177,1805211710,3710368113,3065962831,401639597,1724457132,3028143674,409198410,2196052529,1620529459,1164071807,3769721975,2226875310,486441376,2499348523,1483753576,428819965,2274680428,3075636216,598438867,3799141122,1474502543,711349675,129166120,53458370,2592523643,2782082824,4063242375,2988687269,3120694122,1559041666,730517276,2460449204,4042459122,2706270690,3446004468,3573941694,533804130,2328143614,2637442643,2695033685,839224033,1973745387,957055980,2856345839,106852767,1371368976,4181598602,1033297158,2933734917,1179510461,3046200461,91341917,1862534868,4284502037,605657339,2547432937,3431546947,2003294622,3182487618,2282195339,954669403,3682191598,1201765386,3917234703,3388507166,0,2198438022,1211247597,2887651696,1315723890,4227665663,1443857720,507358933,657861945,1678381017,560487590,3516619604,975451694,2970356327,261314535,3535072918,2652609425,1333838021,2724322336,1767536459,370938394,182621114,3854606378,1128014560,487725847,185469197,2918353863,3106780840,3356761769,2237133081,1286567175,3152976349,4255350624,2683765030,3160175349,3309594171,878443390,1988838185,3704300486,1756818940,1673061617,3403100636,272786309,1075025698,545572369,2105887268,4174560061,296679730,1841768865,1260232239,4091327024,3960309330,3497509347,1814803222,2578018489,4195456072,575138148,3299409036,446754879,3629546796,4011996048,3347532110,3252238545,4270639778,915985419,3483825537,681933534,651868046,2755636671,3828103837,223377554,2607439820,1649704518,3270937875,3901806776,1580087799,4118987695,3198115200,2087309459,2842678573,3016697106,1003007129,2802849917,1860738147,2077965243,164439672,4100872472,32283319,2827177882,1709610350,2125135846,136428751,3874428392,3652904859,3460984630,3572145929,3593056380,2939266226,824852259,818324884,3224740454,930369212,2801566410,2967507152,355706840,1257309336,4148292826,243256656,790073846,2373340630,1296297904,1422699085,3756299780,3818836405,457992840,3099667487,2135319889,77422314,1560382517,1945798516,788204353,1521706781,1385356242,870912086,325965383,2358957921,2050466060,2388260884,2313884476,4006521127,901210569,3990953189,1014646705,1503449823,1062597235,2031621326,3212035895,3931371469,1533017514,350174575,2256028891,2177544179,1052338372,741876788,1606591296,1914052035,213705253,2334669897,1107234197,1899603969,3725069491,2631447780,2422494913,1635502980,1893020342,1950903388,1120974935],b=[2807058932,1699970625,2764249623,1586903591,1808481195,1173430173,1487645946,59984867,4199882800,1844882806,1989249228,1277555970,3623636965,3419915562,1149249077,2744104290,1514790577,459744698,244860394,3235995134,1963115311,4027744588,2544078150,4190530515,1608975247,2627016082,2062270317,1507497298,2200818878,567498868,1764313568,3359936201,2305455554,2037970062,1047239e3,1910319033,1337376481,2904027272,2892417312,984907214,1243112415,830661914,861968209,2135253587,2011214180,2927934315,2686254721,731183368,1750626376,4246310725,1820824798,4172763771,3542330227,48394827,2404901663,2871682645,671593195,3254988725,2073724613,145085239,2280796200,2779915199,1790575107,2187128086,472615631,3029510009,4075877127,3802222185,4107101658,3201631749,1646252340,4270507174,1402811438,1436590835,3778151818,3950355702,3963161475,4020912224,2667994737,273792366,2331590177,104699613,95345982,3175501286,2377486676,1560637892,3564045318,369057872,4213447064,3919042237,1137477952,2658625497,1119727848,2340947849,1530455833,4007360968,172466556,266959938,516552836,0,2256734592,3980931627,1890328081,1917742170,4294704398,945164165,3575528878,958871085,3647212047,2787207260,1423022939,775562294,1739656202,3876557655,2530391278,2443058075,3310321856,547512796,1265195639,437656594,3121275539,719700128,3762502690,387781147,218828297,3350065803,2830708150,2848461854,428169201,122466165,3720081049,1627235199,648017665,4122762354,1002783846,2117360635,695634755,3336358691,4234721005,4049844452,3704280881,2232435299,574624663,287343814,612205898,1039717051,840019705,2708326185,793451934,821288114,1391201670,3822090177,376187827,3113855344,1224348052,1679968233,2361698556,1058709744,752375421,2431590963,1321699145,3519142200,2734591178,188127444,2177869557,3727205754,2384911031,3215212461,2648976442,2450346104,3432737375,1180849278,331544205,3102249176,4150144569,2952102595,2159976285,2474404304,766078933,313773861,2570832044,2108100632,1668212892,3145456443,2013908262,418672217,3070356634,2594734927,1852171925,3867060991,3473416636,3907448597,2614737639,919489135,164948639,2094410160,2997825956,590424639,2486224549,1723872674,3157750862,3399941250,3501252752,3625268135,2555048196,3673637356,1343127501,4130281361,3599595085,2957853679,1297403050,81781910,3051593425,2283490410,532201772,1367295589,3926170974,895287692,1953757831,1093597963,492483431,3528626907,1446242576,1192455638,1636604631,209336225,344873464,1015671571,669961897,3375740769,3857572124,2973530695,3747192018,1933530610,3464042516,935293895,3454686199,2858115069,1863638845,3683022916,4085369519,3292445032,875313188,1080017571,3279033885,621591778,1233856572,2504130317,24197544,3017672716,3835484340,3247465558,2220981195,3060847922,1551124588,1463996600],w=[4104605777,1097159550,396673818,660510266,2875968315,2638606623,4200115116,3808662347,821712160,1986918061,3430322568,38544885,3856137295,718002117,893681702,1654886325,2975484382,3122358053,3926825029,4274053469,796197571,1290801793,1184342925,3556361835,2405426947,2459735317,1836772287,1381620373,3196267988,1948373848,3764988233,3385345166,3263785589,2390325492,1480485785,3111247143,3780097726,2293045232,548169417,3459953789,3746175075,439452389,1362321559,1400849762,1685577905,1806599355,2174754046,137073913,1214797936,1174215055,3731654548,2079897426,1943217067,1258480242,529487843,1437280870,3945269170,3049390895,3313212038,923313619,679998e3,3215307299,57326082,377642221,3474729866,2041877159,133361907,1776460110,3673476453,96392454,878845905,2801699524,777231668,4082475170,2330014213,4142626212,2213296395,1626319424,1906247262,1846563261,562755902,3708173718,1040559837,3871163981,1418573201,3294430577,114585348,1343618912,2566595609,3186202582,1078185097,3651041127,3896688048,2307622919,425408743,3371096953,2081048481,1108339068,2216610296,0,2156299017,736970802,292596766,1517440620,251657213,2235061775,2933202493,758720310,265905162,1554391400,1532285339,908999204,174567692,1474760595,4002861748,2610011675,3234156416,3693126241,2001430874,303699484,2478443234,2687165888,585122620,454499602,151849742,2345119218,3064510765,514443284,4044981591,1963412655,2581445614,2137062819,19308535,1928707164,1715193156,4219352155,1126790795,600235211,3992742070,3841024952,836553431,1669664834,2535604243,3323011204,1243905413,3141400786,4180808110,698445255,2653899549,2989552604,2253581325,3252932727,3004591147,1891211689,2487810577,3915653703,4237083816,4030667424,2100090966,865136418,1229899655,953270745,3399679628,3557504664,4118925222,2061379749,3079546586,2915017791,983426092,2022837584,1607244650,2118541908,2366882550,3635996816,972512814,3283088770,1568718495,3499326569,3576539503,621982671,2895723464,410887952,2623762152,1002142683,645401037,1494807662,2595684844,1335535747,2507040230,4293295786,3167684641,367585007,3885750714,1865862730,2668221674,2960971305,2763173681,1059270954,2777952454,2724642869,1320957812,2194319100,2429595872,2815956275,77089521,3973773121,3444575871,2448830231,1305906550,4021308739,2857194700,2516901860,3518358430,1787304780,740276417,1699839814,1592394909,2352307457,2272556026,188821243,1729977011,3687994002,274084841,3594982253,3613494426,2701949495,4162096729,322734571,2837966542,1640576439,484830689,1202797690,3537852828,4067639125,349075736,3342319475,4157467219,4255800159,1030690015,1155237496,2951971274,1757691577,607398968,2738905026,499347990,3794078908,1011452712,227885567,2818666809,213114376,3034881240,1455525988,3414450555,850817237,1817998408,3092726480],_=[0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795],M=[0,185469197,370938394,487725847,741876788,657861945,975451694,824852259,1483753576,1400783205,1315723890,1164071807,1950903388,2135319889,1649704518,1767536459,2967507152,3152976349,2801566410,2918353863,2631447780,2547432937,2328143614,2177544179,3901806776,3818836405,4270639778,4118987695,3299409036,3483825537,3535072918,3652904859,2077965243,1893020342,1841768865,1724457132,1474502543,1559041666,1107234197,1257309336,598438867,681933534,901210569,1052338372,261314535,77422314,428819965,310463728,3409685355,3224740454,3710368113,3593056380,3875770207,3960309330,4045380933,4195456072,2471224067,2554718734,2237133081,2388260884,3212035895,3028143674,2842678573,2724322336,4138563181,4255350624,3769721975,3955191162,3667219033,3516619604,3431546947,3347532110,2933734917,2782082824,3099667487,3016697106,2196052529,2313884476,2499348523,2683765030,1179510461,1296297904,1347548327,1533017514,1786102409,1635502980,2087309459,2003294622,507358933,355706840,136428751,53458370,839224033,957055980,605657339,790073846,2373340630,2256028891,2607439820,2422494913,2706270690,2856345839,3075636216,3160175349,3573941694,3725069491,3273267108,3356761769,4181598602,4063242375,4011996048,3828103837,1033297158,915985419,730517276,545572369,296679730,446754879,129166120,213705253,1709610350,1860738147,1945798516,2029293177,1239331162,1120974935,1606591296,1422699085,4148292826,4233094615,3781033664,3931371469,3682191598,3497509347,3446004468,3328955385,2939266226,2755636671,3106780840,2988687269,2198438022,2282195339,2501218972,2652609425,1201765386,1286567175,1371368976,1521706781,1805211710,1620529459,2105887268,1988838185,533804130,350174575,164439672,46346101,870912086,954669403,636813900,788204353,2358957921,2274680428,2592523643,2441661558,2695033685,2880240216,3065962831,3182487618,3572145929,3756299780,3270937875,3388507166,4174560061,4091327024,4006521127,3854606378,1014646705,930369212,711349675,560487590,272786309,457992840,106852767,223377554,1678381017,1862534868,1914052035,2031621326,1211247597,1128014560,1580087799,1428173050,32283319,182621114,401639597,486441376,768917123,651868046,1003007129,818324884,1503449823,1385356242,1333838021,1150208456,1973745387,2125135846,1673061617,1756818940,2970356327,3120694122,2802849917,2887651696,2637442643,2520393566,2334669897,2149987652,3917234703,3799141122,4284502037,4100872472,3309594171,3460984630,3545789473,3629546796,2050466060,1899603969,1814803222,1730525723,1443857720,1560382517,1075025698,1260232239,575138148,692707433,878443390,1062597235,243256656,91341917,409198410,325965383,3403100636,3252238545,3704300486,3620022987,3874428392,3990953189,4042459122,4227665663,2460449204,2578018489,2226875310,2411029155,3198115200,3046200461,2827177882,2743944855],A=[0,218828297,437656594,387781147,875313188,958871085,775562294,590424639,1750626376,1699970625,1917742170,2135253587,1551124588,1367295589,1180849278,1265195639,3501252752,3720081049,3399941250,3350065803,3835484340,3919042237,4270507174,4085369519,3102249176,3051593425,2734591178,2952102595,2361698556,2177869557,2530391278,2614737639,3145456443,3060847922,2708326185,2892417312,2404901663,2187128086,2504130317,2555048196,3542330227,3727205754,3375740769,3292445032,3876557655,3926170974,4246310725,4027744588,1808481195,1723872674,1910319033,2094410160,1608975247,1391201670,1173430173,1224348052,59984867,244860394,428169201,344873464,935293895,984907214,766078933,547512796,1844882806,1627235199,2011214180,2062270317,1507497298,1423022939,1137477952,1321699145,95345982,145085239,532201772,313773861,830661914,1015671571,731183368,648017665,3175501286,2957853679,2807058932,2858115069,2305455554,2220981195,2474404304,2658625497,3575528878,3625268135,3473416636,3254988725,3778151818,3963161475,4213447064,4130281361,3599595085,3683022916,3432737375,3247465558,3802222185,4020912224,4172763771,4122762354,3201631749,3017672716,2764249623,2848461854,2331590177,2280796200,2431590963,2648976442,104699613,188127444,472615631,287343814,840019705,1058709744,671593195,621591778,1852171925,1668212892,1953757831,2037970062,1514790577,1463996600,1080017571,1297403050,3673637356,3623636965,3235995134,3454686199,4007360968,3822090177,4107101658,4190530515,2997825956,3215212461,2830708150,2779915199,2256734592,2340947849,2627016082,2443058075,172466556,122466165,273792366,492483431,1047239e3,861968209,612205898,695634755,1646252340,1863638845,2013908262,1963115311,1446242576,1530455833,1277555970,1093597963,1636604631,1820824798,2073724613,1989249228,1436590835,1487645946,1337376481,1119727848,164948639,81781910,331544205,516552836,1039717051,821288114,669961897,719700128,2973530695,3157750862,2871682645,2787207260,2232435299,2283490410,2667994737,2450346104,3647212047,3564045318,3279033885,3464042516,3980931627,3762502690,4150144569,4199882800,3070356634,3121275539,2904027272,2686254721,2200818878,2384911031,2570832044,2486224549,3747192018,3528626907,3310321856,3359936201,3950355702,3867060991,4049844452,4234721005,1739656202,1790575107,2108100632,1890328081,1402811438,1586903591,1233856572,1149249077,266959938,48394827,369057872,418672217,1002783846,919489135,567498868,752375421,209336225,24197544,376187827,459744698,945164165,895287692,574624663,793451934,1679968233,1764313568,2117360635,1933530610,1343127501,1560637892,1243112415,1192455638,3704280881,3519142200,3336358691,3419915562,3907448597,3857572124,4075877127,4294704398,3029510009,3113855344,2927934315,2744104290,2159976285,2377486676,2594734927,2544078150],E=[0,151849742,303699484,454499602,607398968,758720310,908999204,1059270954,1214797936,1097159550,1517440620,1400849762,1817998408,1699839814,2118541908,2001430874,2429595872,2581445614,2194319100,2345119218,3034881240,3186202582,2801699524,2951971274,3635996816,3518358430,3399679628,3283088770,4237083816,4118925222,4002861748,3885750714,1002142683,850817237,698445255,548169417,529487843,377642221,227885567,77089521,1943217067,2061379749,1640576439,1757691577,1474760595,1592394909,1174215055,1290801793,2875968315,2724642869,3111247143,2960971305,2405426947,2253581325,2638606623,2487810577,3808662347,3926825029,4044981591,4162096729,3342319475,3459953789,3576539503,3693126241,1986918061,2137062819,1685577905,1836772287,1381620373,1532285339,1078185097,1229899655,1040559837,923313619,740276417,621982671,439452389,322734571,137073913,19308535,3871163981,4021308739,4104605777,4255800159,3263785589,3414450555,3499326569,3651041127,2933202493,2815956275,3167684641,3049390895,2330014213,2213296395,2566595609,2448830231,1305906550,1155237496,1607244650,1455525988,1776460110,1626319424,2079897426,1928707164,96392454,213114376,396673818,514443284,562755902,679998e3,865136418,983426092,3708173718,3557504664,3474729866,3323011204,4180808110,4030667424,3945269170,3794078908,2507040230,2623762152,2272556026,2390325492,2975484382,3092726480,2738905026,2857194700,3973773121,3856137295,4274053469,4157467219,3371096953,3252932727,3673476453,3556361835,2763173681,2915017791,3064510765,3215307299,2156299017,2307622919,2459735317,2610011675,2081048481,1963412655,1846563261,1729977011,1480485785,1362321559,1243905413,1126790795,878845905,1030690015,645401037,796197571,274084841,425408743,38544885,188821243,3613494426,3731654548,3313212038,3430322568,4082475170,4200115116,3780097726,3896688048,2668221674,2516901860,2366882550,2216610296,3141400786,2989552604,2837966542,2687165888,1202797690,1320957812,1437280870,1554391400,1669664834,1787304780,1906247262,2022837584,265905162,114585348,499347990,349075736,736970802,585122620,972512814,821712160,2595684844,2478443234,2293045232,2174754046,3196267988,3079546586,2895723464,2777952454,3537852828,3687994002,3234156416,3385345166,4142626212,4293295786,3841024952,3992742070,174567692,57326082,410887952,292596766,777231668,660510266,1011452712,893681702,1108339068,1258480242,1343618912,1494807662,1715193156,1865862730,1948373848,2100090966,2701949495,2818666809,3004591147,3122358053,2235061775,2352307457,2535604243,2653899549,3915653703,3764988233,4219352155,4067639125,3444575871,3294430577,3746175075,3594982253,836553431,953270745,600235211,718002117,367585007,484830689,133361907,251657213,2041877159,1891211689,1806599355,1654886325,1568718495,1418573201,1335535747,1184342925];function S(e){for(var t=[],r=0;r<e.length;r+=4)t.push(e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3]);return t}var k=function(e){if(!(this instanceof k))throw Error("AES must be instanitated with `new`");Object.defineProperty(this,"key",{value:o(e,!0)}),this._prepare()};k.prototype._prepare=function(){var e=f[this.key.length];if(null==e)throw new Error("invalid key size (must be 16, 24 or 32 bytes)");this._Ke=[],this._Kd=[];for(var t=0;t<=e;t++)this._Ke.push([0,0,0,0]),this._Kd.push([0,0,0,0]);var r,n=4*(e+1),i=this.key.length/4,o=S(this.key);for(t=0;t<i;t++)r=t>>2,this._Ke[r][t%4]=o[t],this._Kd[e-r][t%4]=o[t];for(var s,a=0,u=i;u<n;){if(s=o[i-1],o[0]^=d[s>>16&255]<<24^d[s>>8&255]<<16^d[255&s]<<8^d[s>>24&255]^c[a]<<24,a+=1,8!=i)for(t=1;t<i;t++)o[t]^=o[t-1];else{for(t=1;t<i/2;t++)o[t]^=o[t-1];s=o[i/2-1],o[i/2]^=d[255&s]^d[s>>8&255]<<8^d[s>>16&255]<<16^d[s>>24&255]<<24;for(t=i/2+1;t<i;t++)o[t]^=o[t-1]}for(t=0;t<i&&u<n;)l=u>>2,h=u%4,this._Ke[l][h]=o[t],this._Kd[e-l][h]=o[t++],u++}for(var l=1;l<e;l++)for(var h=0;h<4;h++)s=this._Kd[l][h],this._Kd[l][h]=_[s>>24&255]^M[s>>16&255]^A[s>>8&255]^E[255&s]},k.prototype.encrypt=function(e){if(16!=e.length)throw new Error("invalid plaintext size (must be 16 bytes)");for(var t=this._Ke.length-1,r=[0,0,0,0],n=S(e),i=0;i<4;i++)n[i]^=this._Ke[0][i];for(var o=1;o<t;o++){for(i=0;i<4;i++)r[i]=h[n[i]>>24&255]^p[n[(i+1)%4]>>16&255]^v[n[(i+2)%4]>>8&255]^y[255&n[(i+3)%4]]^this._Ke[o][i];n=r.slice()}var s,a=u(16);for(i=0;i<4;i++)s=this._Ke[t][i],a[4*i]=255&(d[n[i]>>24&255]^s>>24),a[4*i+1]=255&(d[n[(i+1)%4]>>16&255]^s>>16),a[4*i+2]=255&(d[n[(i+2)%4]>>8&255]^s>>8),a[4*i+3]=255&(d[255&n[(i+3)%4]]^s);return a},k.prototype.decrypt=function(e){if(16!=e.length)throw new Error("invalid ciphertext size (must be 16 bytes)");for(var t=this._Kd.length-1,r=[0,0,0,0],n=S(e),i=0;i<4;i++)n[i]^=this._Kd[0][i];for(var o=1;o<t;o++){for(i=0;i<4;i++)r[i]=m[n[i]>>24&255]^g[n[(i+3)%4]>>16&255]^b[n[(i+2)%4]>>8&255]^w[255&n[(i+1)%4]]^this._Kd[o][i];n=r.slice()}var s,a=u(16);for(i=0;i<4;i++)s=this._Kd[t][i],a[4*i]=255&(l[n[i]>>24&255]^s>>24),a[4*i+1]=255&(l[n[(i+3)%4]>>16&255]^s>>16),a[4*i+2]=255&(l[n[(i+2)%4]>>8&255]^s>>8),a[4*i+3]=255&(l[255&n[(i+1)%4]]^s);return a};var N=function(e){if(!(this instanceof N))throw Error("AES must be instanitated with `new`");this.description="Electronic Code Block",this.name="ecb",this._aes=new k(e)};N.prototype.encrypt=function(e){if((e=o(e)).length%16!=0)throw new Error("invalid plaintext size (must be multiple of 16 bytes)");for(var t=u(e.length),r=u(16),n=0;n<e.length;n+=16)s(e,r,0,n,n+16),s(r=this._aes.encrypt(r),t,n);return t},N.prototype.decrypt=function(e){if((e=o(e)).length%16!=0)throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");for(var t=u(e.length),r=u(16),n=0;n<e.length;n+=16)s(e,r,0,n,n+16),s(r=this._aes.decrypt(r),t,n);return t};var x=function(e,t){if(!(this instanceof x))throw Error("AES must be instanitated with `new`");if(this.description="Cipher Block Chaining",this.name="cbc",t){if(16!=t.length)throw new Error("invalid initialation vector size (must be 16 bytes)")}else t=u(16);this._lastCipherblock=o(t,!0),this._aes=new k(e)};x.prototype.encrypt=function(e){if((e=o(e)).length%16!=0)throw new Error("invalid plaintext size (must be multiple of 16 bytes)");for(var t=u(e.length),r=u(16),n=0;n<e.length;n+=16){s(e,r,0,n,n+16);for(var i=0;i<16;i++)r[i]^=this._lastCipherblock[i];this._lastCipherblock=this._aes.encrypt(r),s(this._lastCipherblock,t,n)}return t},x.prototype.decrypt=function(e){if((e=o(e)).length%16!=0)throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");for(var t=u(e.length),r=u(16),n=0;n<e.length;n+=16){s(e,r,0,n,n+16),r=this._aes.decrypt(r);for(var i=0;i<16;i++)t[n+i]=r[i]^this._lastCipherblock[i];s(e,this._lastCipherblock,0,n,n+16)}return t};var P=function(e,t,r){if(!(this instanceof P))throw Error("AES must be instanitated with `new`");if(this.description="Cipher Feedback",this.name="cfb",t){if(16!=t.length)throw new Error("invalid initialation vector size (must be 16 size)")}else t=u(16);r=r||1,this.segmentSize=r,this._shiftRegister=o(t,!0),this._aes=new k(e)};P.prototype.encrypt=function(e){if(e.length%this.segmentSize!=0)throw new Error("invalid plaintext size (must be segmentSize bytes)");for(var t,r=o(e,!0),n=0;n<r.length;n+=this.segmentSize){t=this._aes.encrypt(this._shiftRegister);for(var i=0;i<this.segmentSize;i++)r[n+i]^=t[i];s(this._shiftRegister,this._shiftRegister,0,this.segmentSize),s(r,this._shiftRegister,16-this.segmentSize,n,n+this.segmentSize)}return r},P.prototype.decrypt=function(e){if(e.length%this.segmentSize!=0)throw new Error("invalid ciphertext size (must be segmentSize bytes)");for(var t,r=o(e,!0),n=0;n<r.length;n+=this.segmentSize){t=this._aes.encrypt(this._shiftRegister);for(var i=0;i<this.segmentSize;i++)r[n+i]^=t[i];s(this._shiftRegister,this._shiftRegister,0,this.segmentSize),s(e,this._shiftRegister,16-this.segmentSize,n,n+this.segmentSize)}return r};var I=function(e,t){if(!(this instanceof I))throw Error("AES must be instanitated with `new`");if(this.description="Output Feedback",this.name="ofb",t){if(16!=t.length)throw new Error("invalid initialation vector size (must be 16 bytes)")}else t=u(16);this._lastPrecipher=o(t,!0),this._lastPrecipherIndex=16,this._aes=new k(e)};I.prototype.encrypt=function(e){for(var t=o(e,!0),r=0;r<t.length;r++)16===this._lastPrecipherIndex&&(this._lastPrecipher=this._aes.encrypt(this._lastPrecipher),this._lastPrecipherIndex=0),t[r]^=this._lastPrecipher[this._lastPrecipherIndex++];return t},I.prototype.decrypt=I.prototype.encrypt;var T=function(e){if(!(this instanceof T))throw Error("Counter must be instanitated with `new`");0===e||e||(e=1),"number"==typeof e?(this._counter=u(16),this.setValue(e)):this.setBytes(e)};T.prototype.setValue=function(e){if("number"!=typeof e||parseInt(e)!=e)throw new Error("invalid counter value (must be an integer)");for(var t=15;0<=t;--t)this._counter[t]=e%256,e>>=8},T.prototype.setBytes=function(e){if(16!=(e=o(e,!0)).length)throw new Error("invalid counter bytes size (must be 16 bytes)");this._counter=e},T.prototype.increment=function(){for(var e=15;0<=e;e--){if(255!==this._counter[e]){this._counter[e]++;break}this._counter[e]=0}};var R=function(e,t){if(!(this instanceof R))throw Error("AES must be instanitated with `new`");this.description="Counter",this.name="ctr",t instanceof T||(t=new T(t)),this._counter=t,this._remainingCounter=null,this._remainingCounterIndex=16,this._aes=new k(e)};R.prototype.encrypt=function(e){for(var t=o(e,!0),r=0;r<t.length;r++)16===this._remainingCounterIndex&&(this._remainingCounter=this._aes.encrypt(this._counter._counter),this._remainingCounterIndex=0,this._counter.increment()),t[r]^=this._remainingCounter[this._remainingCounterIndex++];return t},R.prototype.decrypt=R.prototype.encrypt;var O={AES:k,Counter:T,ModeOfOperation:{ecb:N,cbc:x,cfb:P,ofb:I,ctr:R},utils:{hex:a,utf8:t},padding:{pkcs7:{pad:function(e){var t=16-(e=o(e,!0)).length%16,r=u(e.length+t);s(e,r);for(var n=e.length;n<r.length;n++)r[n]=t;return r},strip:function(e){if((e=o(e,!0)).length<16)throw new Error("PKCS#7 invalid length");var t=e[e.length-1];if(16<t)throw new Error("PKCS#7 padding byte out of range");for(var r=e.length-t,n=0;n<t;n++)if(e[r+n]!==t)throw new Error("PKCS#7 invalid padding byte");var i=u(r);return s(e,i,0,0,r),i}}},_arrayTest:{coerceArray:o,createArray:u,copyArray:s}};void 0!==L?C.exports=O:(e.aesjs&&(O._aesjs=e.aesjs),e.aesjs=O)}(this)},{}],9:[function(A,e,t){!function(e,t){"use strict";function y(e,t){if(!e)throw new Error(t||"Assertion failed")}function r(e,t){e.super_=t;function r(){}r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function m(e,t,r){if(m.isBN(e))return e;this.negative=0,this.words=null,this.length=0,(this.red=null)!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"))}var n;"object"==typeof e?e.exports=m:t.BN=m,(m.BN=m).wordSize=26;try{n=A("buffer").Buffer}catch(e){}function s(e,t,r){for(var n=0,i=Math.min(e.length,r),o=t;o<i;o++){var s=e.charCodeAt(o)-48;n<<=4,n|=49<=s&&s<=54?s-49+10:17<=s&&s<=22?s-17+10:15&s}return n}function f(e,t,r,n){for(var i=0,o=Math.min(e.length,r),s=t;s<o;s++){var a=e.charCodeAt(s)-48;i*=n,i+=49<=a?a-49+10:17<=a?a-17+10:a}return i}m.isBN=function(e){return e instanceof m||null!==e&&"object"==typeof e&&e.constructor.wordSize===m.wordSize&&Array.isArray(e.words)},m.max=function(e,t){return 0<e.cmp(t)?e:t},m.min=function(e,t){return e.cmp(t)<0?e:t},m.prototype._init=function(e,t,r){if("number"==typeof e)return this._initNumber(e,t,r);if("object"==typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),y(t===(0|t)&&2<=t&&t<=36);var n=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&n++,16===t?this._parseHex(e,n):this._parseBase(e,t,n),"-"===e[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),t,r)},m.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(y(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},m.prototype._initArray=function(e,t,r){if(y("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var n=0;n<this.length;n++)this.words[n]=0;var i,o,s=0;if("be"===r)for(n=e.length-1,i=0;0<=n;n-=3)o=e[n]|e[n-1]<<8|e[n-2]<<16,this.words[i]|=o<<s&67108863,this.words[i+1]=o>>>26-s&67108863,26<=(s+=24)&&(s-=26,i++);else if("le"===r)for(i=n=0;n<e.length;n+=3)o=e[n]|e[n+1]<<8|e[n+2]<<16,this.words[i]|=o<<s&67108863,this.words[i+1]=o>>>26-s&67108863,26<=(s+=24)&&(s-=26,i++);return this.strip()},m.prototype._parseHex=function(e,t){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,o=0;for(r=e.length-6,n=0;t<=r;r-=6)i=s(e,r,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303,26<=(o+=24)&&(o-=26,n++);r+6!==t&&(i=s(e,t,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303),this.strip()},m.prototype._parseBase=function(e,t,r){this.words=[0];for(var n=0,i=this.length=1;i<=67108863;i*=t)n++;n--,i=i/t|0;for(var o=e.length-r,s=o%n,a=Math.min(o,o-s)+r,u=0,l=r;l<a;l+=n)u=f(e,l,l+n,t),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u);if(0!=s){var h=1;for(u=f(e,l,e.length,t),l=0;l<s;l++)h*=t;this.imuln(h),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}},m.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},m.prototype.clone=function(){var e=new m(null);return this.copy(e),e},m.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},m.prototype.strip=function(){for(;1<this.length&&0===this.words[this.length-1];)this.length--;return this._normSign()},m.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},m.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var c=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],d=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],p=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function i(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0;n=(r.length=n)-1|0;var i=0|e.words[0],o=0|t.words[0],s=i*o,a=67108863&s,u=s/67108864|0;r.words[0]=a;for(var l=1;l<n;l++){for(var h=u>>>26,f=67108863&u,c=Math.min(l,t.length-1),d=Math.max(0,l-e.length+1);d<=c;d++){var p=l-d|0;h+=(s=(i=0|e.words[p])*(o=0|t.words[d])+f)/67108864|0,f=67108863&s}r.words[l]=0|f,u=0|h}return 0!==u?r.words[l]=0|u:r.length--,r.strip()}m.prototype.toString=function(e,t){var r;if(t=0|t||1,16===(e=e||10)||"hex"===e){r="";for(var n=0,i=0,o=0;o<this.length;o++){var s=this.words[o],a=(16777215&(s<<n|i)).toString(16);r=0!==(i=s>>>24-n&16777215)||o!==this.length-1?c[6-a.length]+a+r:a+r,26<=(n+=2)&&(n-=26,o--)}for(0!==i&&(r=i.toString(16)+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&2<=e&&e<=36){var u=d[e],l=p[e];r="";var h=this.clone();for(h.negative=0;!h.isZero();){var f=h.modn(l).toString(e);r=(h=h.idivn(l)).isZero()?f+r:c[u-f.length]+f+r}for(this.isZero()&&(r="0"+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}y(!1,"Base should be between 2 and 36")},m.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:2<this.length&&y(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},m.prototype.toJSON=function(){return this.toString(16)},m.prototype.toBuffer=function(e,t){return y(void 0!==n),this.toArrayLike(n,e,t)},m.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},m.prototype.toArrayLike=function(e,t,r){var n=this.byteLength(),i=r||Math.max(1,n);y(n<=i,"byte array longer than desired length"),y(0<i,"Requested array length <= 0"),this.strip();var o,s,a="le"===t,u=new e(i),l=this.clone();if(a){for(s=0;!l.isZero();s++)o=l.andln(255),l.iushrn(8),u[s]=o;for(;s<i;s++)u[s]=0}else{for(s=0;s<i-n;s++)u[s]=0;for(s=0;!l.isZero();s++)o=l.andln(255),l.iushrn(8),u[i-s-1]=o}return u},m.prototype._countBits=Math.clz32?function(e){return 32-Math.clz32(e)}:function(e){var t=e,r=0;return 4096<=t&&(r+=13,t>>>=13),64<=t&&(r+=7,t>>>=7),8<=t&&(r+=4,t>>>=4),2<=t&&(r+=2,t>>>=2),r+t},m.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 0==(8191&t)&&(r+=13,t>>>=13),0==(127&t)&&(r+=7,t>>>=7),0==(15&t)&&(r+=4,t>>>=4),0==(3&t)&&(r+=2,t>>>=2),0==(1&t)&&r++,r},m.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},m.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},m.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},m.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},m.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},m.prototype.isNeg=function(){return 0!==this.negative},m.prototype.neg=function(){return this.clone().ineg()},m.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},m.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this.strip()},m.prototype.ior=function(e){return y(0==(this.negative|e.negative)),this.iuor(e)},m.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},m.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},m.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this.strip()},m.prototype.iand=function(e){return y(0==(this.negative|e.negative)),this.iuand(e)},m.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},m.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},m.prototype.iuxor=function(e){var t,r;r=this.length>e.length?(t=this,e):(t=e,this);for(var n=0;n<r.length;n++)this.words[n]=t.words[n]^r.words[n];if(this!==t)for(;n<t.length;n++)this.words[n]=t.words[n];return this.length=t.length,this.strip()},m.prototype.ixor=function(e){return y(0==(this.negative|e.negative)),this.iuxor(e)},m.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},m.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},m.prototype.inotn=function(e){y("number"==typeof e&&0<=e);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),0<r&&t--;for(var n=0;n<t;n++)this.words[n]=67108863&~this.words[n];return 0<r&&(this.words[n]=~this.words[n]&67108863>>26-r),this.strip()},m.prototype.notn=function(e){return this.clone().inotn(e)},m.prototype.setn=function(e,t){y("number"==typeof e&&0<=e);var r=e/26|0,n=e%26;return this._expand(1+r),this.words[r]=t?this.words[r]|1<<n:this.words[r]&~(1<<n),this.strip()},m.prototype.iadd=function(e){var t,r,n;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();n=this.length>e.length?(r=this,e):(r=e,this);for(var i=0,o=0;o<n.length;o++)t=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26;for(;0!==i&&o<r.length;o++)t=(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},m.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},m.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r,n,i=this.cmp(e);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;n=0<i?(r=this,e):(r=e,this);for(var o=0,s=0;s<n.length;s++)o=(t=(0|r.words[s])-(0|n.words[s])+o)>>26,this.words[s]=67108863&t;for(;0!==o&&s<r.length;s++)o=(t=(0|r.words[s])+o)>>26,this.words[s]=67108863&t;if(0===o&&s<r.length&&r!==this)for(;s<r.length;s++)this.words[s]=r.words[s];return this.length=Math.max(this.length,s),r!==this&&(this.negative=1),this.strip()},m.prototype.sub=function(e){return this.clone().isub(e)};var o=function(e,t,r){var n,i,o,s=e.words,a=t.words,u=r.words,l=0,h=0|s[0],f=8191&h,c=h>>>13,d=0|s[1],p=8191&d,v=d>>>13,y=0|s[2],m=8191&y,g=y>>>13,b=0|s[3],w=8191&b,_=b>>>13,M=0|s[4],A=8191&M,E=M>>>13,S=0|s[5],k=8191&S,N=S>>>13,x=0|s[6],P=8191&x,I=x>>>13,T=0|s[7],R=8191&T,O=T>>>13,C=0|s[8],L=8191&C,D=C>>>13,B=0|s[9],U=8191&B,F=B>>>13,j=0|a[0],G=8191&j,H=j>>>13,z=0|a[1],V=8191&z,K=z>>>13,q=0|a[2],W=8191&q,Z=q>>>13,J=0|a[3],X=8191&J,$=J>>>13,Q=0|a[4],Y=8191&Q,ee=Q>>>13,te=0|a[5],re=8191&te,ne=te>>>13,ie=0|a[6],oe=8191&ie,se=ie>>>13,ae=0|a[7],ue=8191&ae,le=ae>>>13,he=0|a[8],fe=8191&he,ce=he>>>13,de=0|a[9],pe=8191&de,ve=de>>>13;r.negative=e.negative^t.negative,r.length=19;var ye=(l+(n=Math.imul(f,G))|0)+((8191&(i=(i=Math.imul(f,H))+Math.imul(c,G)|0))<<13)|0;l=((o=Math.imul(c,H))+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,n=Math.imul(p,G),i=(i=Math.imul(p,H))+Math.imul(v,G)|0,o=Math.imul(v,H);var me=(l+(n=n+Math.imul(f,V)|0)|0)+((8191&(i=(i=i+Math.imul(f,K)|0)+Math.imul(c,V)|0))<<13)|0;l=((o=o+Math.imul(c,K)|0)+(i>>>13)|0)+(me>>>26)|0,me&=67108863,n=Math.imul(m,G),i=(i=Math.imul(m,H))+Math.imul(g,G)|0,o=Math.imul(g,H),n=n+Math.imul(p,V)|0,i=(i=i+Math.imul(p,K)|0)+Math.imul(v,V)|0,o=o+Math.imul(v,K)|0;var ge=(l+(n=n+Math.imul(f,W)|0)|0)+((8191&(i=(i=i+Math.imul(f,Z)|0)+Math.imul(c,W)|0))<<13)|0;l=((o=o+Math.imul(c,Z)|0)+(i>>>13)|0)+(ge>>>26)|0,ge&=67108863,n=Math.imul(w,G),i=(i=Math.imul(w,H))+Math.imul(_,G)|0,o=Math.imul(_,H),n=n+Math.imul(m,V)|0,i=(i=i+Math.imul(m,K)|0)+Math.imul(g,V)|0,o=o+Math.imul(g,K)|0,n=n+Math.imul(p,W)|0,i=(i=i+Math.imul(p,Z)|0)+Math.imul(v,W)|0,o=o+Math.imul(v,Z)|0;var be=(l+(n=n+Math.imul(f,X)|0)|0)+((8191&(i=(i=i+Math.imul(f,$)|0)+Math.imul(c,X)|0))<<13)|0;l=((o=o+Math.imul(c,$)|0)+(i>>>13)|0)+(be>>>26)|0,be&=67108863,n=Math.imul(A,G),i=(i=Math.imul(A,H))+Math.imul(E,G)|0,o=Math.imul(E,H),n=n+Math.imul(w,V)|0,i=(i=i+Math.imul(w,K)|0)+Math.imul(_,V)|0,o=o+Math.imul(_,K)|0,n=n+Math.imul(m,W)|0,i=(i=i+Math.imul(m,Z)|0)+Math.imul(g,W)|0,o=o+Math.imul(g,Z)|0,n=n+Math.imul(p,X)|0,i=(i=i+Math.imul(p,$)|0)+Math.imul(v,X)|0,o=o+Math.imul(v,$)|0;var we=(l+(n=n+Math.imul(f,Y)|0)|0)+((8191&(i=(i=i+Math.imul(f,ee)|0)+Math.imul(c,Y)|0))<<13)|0;l=((o=o+Math.imul(c,ee)|0)+(i>>>13)|0)+(we>>>26)|0,we&=67108863,n=Math.imul(k,G),i=(i=Math.imul(k,H))+Math.imul(N,G)|0,o=Math.imul(N,H),n=n+Math.imul(A,V)|0,i=(i=i+Math.imul(A,K)|0)+Math.imul(E,V)|0,o=o+Math.imul(E,K)|0,n=n+Math.imul(w,W)|0,i=(i=i+Math.imul(w,Z)|0)+Math.imul(_,W)|0,o=o+Math.imul(_,Z)|0,n=n+Math.imul(m,X)|0,i=(i=i+Math.imul(m,$)|0)+Math.imul(g,X)|0,o=o+Math.imul(g,$)|0,n=n+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,ee)|0)+Math.imul(v,Y)|0,o=o+Math.imul(v,ee)|0;var _e=(l+(n=n+Math.imul(f,re)|0)|0)+((8191&(i=(i=i+Math.imul(f,ne)|0)+Math.imul(c,re)|0))<<13)|0;l=((o=o+Math.imul(c,ne)|0)+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,n=Math.imul(P,G),i=(i=Math.imul(P,H))+Math.imul(I,G)|0,o=Math.imul(I,H),n=n+Math.imul(k,V)|0,i=(i=i+Math.imul(k,K)|0)+Math.imul(N,V)|0,o=o+Math.imul(N,K)|0,n=n+Math.imul(A,W)|0,i=(i=i+Math.imul(A,Z)|0)+Math.imul(E,W)|0,o=o+Math.imul(E,Z)|0,n=n+Math.imul(w,X)|0,i=(i=i+Math.imul(w,$)|0)+Math.imul(_,X)|0,o=o+Math.imul(_,$)|0,n=n+Math.imul(m,Y)|0,i=(i=i+Math.imul(m,ee)|0)+Math.imul(g,Y)|0,o=o+Math.imul(g,ee)|0,n=n+Math.imul(p,re)|0,i=(i=i+Math.imul(p,ne)|0)+Math.imul(v,re)|0,o=o+Math.imul(v,ne)|0;var Me=(l+(n=n+Math.imul(f,oe)|0)|0)+((8191&(i=(i=i+Math.imul(f,se)|0)+Math.imul(c,oe)|0))<<13)|0;l=((o=o+Math.imul(c,se)|0)+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,n=Math.imul(R,G),i=(i=Math.imul(R,H))+Math.imul(O,G)|0,o=Math.imul(O,H),n=n+Math.imul(P,V)|0,i=(i=i+Math.imul(P,K)|0)+Math.imul(I,V)|0,o=o+Math.imul(I,K)|0,n=n+Math.imul(k,W)|0,i=(i=i+Math.imul(k,Z)|0)+Math.imul(N,W)|0,o=o+Math.imul(N,Z)|0,n=n+Math.imul(A,X)|0,i=(i=i+Math.imul(A,$)|0)+Math.imul(E,X)|0,o=o+Math.imul(E,$)|0,n=n+Math.imul(w,Y)|0,i=(i=i+Math.imul(w,ee)|0)+Math.imul(_,Y)|0,o=o+Math.imul(_,ee)|0,n=n+Math.imul(m,re)|0,i=(i=i+Math.imul(m,ne)|0)+Math.imul(g,re)|0,o=o+Math.imul(g,ne)|0,n=n+Math.imul(p,oe)|0,i=(i=i+Math.imul(p,se)|0)+Math.imul(v,oe)|0,o=o+Math.imul(v,se)|0;var Ae=(l+(n=n+Math.imul(f,ue)|0)|0)+((8191&(i=(i=i+Math.imul(f,le)|0)+Math.imul(c,ue)|0))<<13)|0;l=((o=o+Math.imul(c,le)|0)+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,n=Math.imul(L,G),i=(i=Math.imul(L,H))+Math.imul(D,G)|0,o=Math.imul(D,H),n=n+Math.imul(R,V)|0,i=(i=i+Math.imul(R,K)|0)+Math.imul(O,V)|0,o=o+Math.imul(O,K)|0,n=n+Math.imul(P,W)|0,i=(i=i+Math.imul(P,Z)|0)+Math.imul(I,W)|0,o=o+Math.imul(I,Z)|0,n=n+Math.imul(k,X)|0,i=(i=i+Math.imul(k,$)|0)+Math.imul(N,X)|0,o=o+Math.imul(N,$)|0,n=n+Math.imul(A,Y)|0,i=(i=i+Math.imul(A,ee)|0)+Math.imul(E,Y)|0,o=o+Math.imul(E,ee)|0,n=n+Math.imul(w,re)|0,i=(i=i+Math.imul(w,ne)|0)+Math.imul(_,re)|0,o=o+Math.imul(_,ne)|0,n=n+Math.imul(m,oe)|0,i=(i=i+Math.imul(m,se)|0)+Math.imul(g,oe)|0,o=o+Math.imul(g,se)|0,n=n+Math.imul(p,ue)|0,i=(i=i+Math.imul(p,le)|0)+Math.imul(v,ue)|0,o=o+Math.imul(v,le)|0;var Ee=(l+(n=n+Math.imul(f,fe)|0)|0)+((8191&(i=(i=i+Math.imul(f,ce)|0)+Math.imul(c,fe)|0))<<13)|0;l=((o=o+Math.imul(c,ce)|0)+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,n=Math.imul(U,G),i=(i=Math.imul(U,H))+Math.imul(F,G)|0,o=Math.imul(F,H),n=n+Math.imul(L,V)|0,i=(i=i+Math.imul(L,K)|0)+Math.imul(D,V)|0,o=o+Math.imul(D,K)|0,n=n+Math.imul(R,W)|0,i=(i=i+Math.imul(R,Z)|0)+Math.imul(O,W)|0,o=o+Math.imul(O,Z)|0,n=n+Math.imul(P,X)|0,i=(i=i+Math.imul(P,$)|0)+Math.imul(I,X)|0,o=o+Math.imul(I,$)|0,n=n+Math.imul(k,Y)|0,i=(i=i+Math.imul(k,ee)|0)+Math.imul(N,Y)|0,o=o+Math.imul(N,ee)|0,n=n+Math.imul(A,re)|0,i=(i=i+Math.imul(A,ne)|0)+Math.imul(E,re)|0,o=o+Math.imul(E,ne)|0,n=n+Math.imul(w,oe)|0,i=(i=i+Math.imul(w,se)|0)+Math.imul(_,oe)|0,o=o+Math.imul(_,se)|0,n=n+Math.imul(m,ue)|0,i=(i=i+Math.imul(m,le)|0)+Math.imul(g,ue)|0,o=o+Math.imul(g,le)|0,n=n+Math.imul(p,fe)|0,i=(i=i+Math.imul(p,ce)|0)+Math.imul(v,fe)|0,o=o+Math.imul(v,ce)|0;var Se=(l+(n=n+Math.imul(f,pe)|0)|0)+((8191&(i=(i=i+Math.imul(f,ve)|0)+Math.imul(c,pe)|0))<<13)|0;l=((o=o+Math.imul(c,ve)|0)+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,n=Math.imul(U,V),i=(i=Math.imul(U,K))+Math.imul(F,V)|0,o=Math.imul(F,K),n=n+Math.imul(L,W)|0,i=(i=i+Math.imul(L,Z)|0)+Math.imul(D,W)|0,o=o+Math.imul(D,Z)|0,n=n+Math.imul(R,X)|0,i=(i=i+Math.imul(R,$)|0)+Math.imul(O,X)|0,o=o+Math.imul(O,$)|0,n=n+Math.imul(P,Y)|0,i=(i=i+Math.imul(P,ee)|0)+Math.imul(I,Y)|0,o=o+Math.imul(I,ee)|0,n=n+Math.imul(k,re)|0,i=(i=i+Math.imul(k,ne)|0)+Math.imul(N,re)|0,o=o+Math.imul(N,ne)|0,n=n+Math.imul(A,oe)|0,i=(i=i+Math.imul(A,se)|0)+Math.imul(E,oe)|0,o=o+Math.imul(E,se)|0,n=n+Math.imul(w,ue)|0,i=(i=i+Math.imul(w,le)|0)+Math.imul(_,ue)|0,o=o+Math.imul(_,le)|0,n=n+Math.imul(m,fe)|0,i=(i=i+Math.imul(m,ce)|0)+Math.imul(g,fe)|0,o=o+Math.imul(g,ce)|0;var ke=(l+(n=n+Math.imul(p,pe)|0)|0)+((8191&(i=(i=i+Math.imul(p,ve)|0)+Math.imul(v,pe)|0))<<13)|0;l=((o=o+Math.imul(v,ve)|0)+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,n=Math.imul(U,W),i=(i=Math.imul(U,Z))+Math.imul(F,W)|0,o=Math.imul(F,Z),n=n+Math.imul(L,X)|0,i=(i=i+Math.imul(L,$)|0)+Math.imul(D,X)|0,o=o+Math.imul(D,$)|0,n=n+Math.imul(R,Y)|0,i=(i=i+Math.imul(R,ee)|0)+Math.imul(O,Y)|0,o=o+Math.imul(O,ee)|0,n=n+Math.imul(P,re)|0,i=(i=i+Math.imul(P,ne)|0)+Math.imul(I,re)|0,o=o+Math.imul(I,ne)|0,n=n+Math.imul(k,oe)|0,i=(i=i+Math.imul(k,se)|0)+Math.imul(N,oe)|0,o=o+Math.imul(N,se)|0,n=n+Math.imul(A,ue)|0,i=(i=i+Math.imul(A,le)|0)+Math.imul(E,ue)|0,o=o+Math.imul(E,le)|0,n=n+Math.imul(w,fe)|0,i=(i=i+Math.imul(w,ce)|0)+Math.imul(_,fe)|0,o=o+Math.imul(_,ce)|0;var Ne=(l+(n=n+Math.imul(m,pe)|0)|0)+((8191&(i=(i=i+Math.imul(m,ve)|0)+Math.imul(g,pe)|0))<<13)|0;l=((o=o+Math.imul(g,ve)|0)+(i>>>13)|0)+(Ne>>>26)|0,Ne&=67108863,n=Math.imul(U,X),i=(i=Math.imul(U,$))+Math.imul(F,X)|0,o=Math.imul(F,$),n=n+Math.imul(L,Y)|0,i=(i=i+Math.imul(L,ee)|0)+Math.imul(D,Y)|0,o=o+Math.imul(D,ee)|0,n=n+Math.imul(R,re)|0,i=(i=i+Math.imul(R,ne)|0)+Math.imul(O,re)|0,o=o+Math.imul(O,ne)|0,n=n+Math.imul(P,oe)|0,i=(i=i+Math.imul(P,se)|0)+Math.imul(I,oe)|0,o=o+Math.imul(I,se)|0,n=n+Math.imul(k,ue)|0,i=(i=i+Math.imul(k,le)|0)+Math.imul(N,ue)|0,o=o+Math.imul(N,le)|0,n=n+Math.imul(A,fe)|0,i=(i=i+Math.imul(A,ce)|0)+Math.imul(E,fe)|0,o=o+Math.imul(E,ce)|0;var xe=(l+(n=n+Math.imul(w,pe)|0)|0)+((8191&(i=(i=i+Math.imul(w,ve)|0)+Math.imul(_,pe)|0))<<13)|0;l=((o=o+Math.imul(_,ve)|0)+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,n=Math.imul(U,Y),i=(i=Math.imul(U,ee))+Math.imul(F,Y)|0,o=Math.imul(F,ee),n=n+Math.imul(L,re)|0,i=(i=i+Math.imul(L,ne)|0)+Math.imul(D,re)|0,o=o+Math.imul(D,ne)|0,n=n+Math.imul(R,oe)|0,i=(i=i+Math.imul(R,se)|0)+Math.imul(O,oe)|0,o=o+Math.imul(O,se)|0,n=n+Math.imul(P,ue)|0,i=(i=i+Math.imul(P,le)|0)+Math.imul(I,ue)|0,o=o+Math.imul(I,le)|0,n=n+Math.imul(k,fe)|0,i=(i=i+Math.imul(k,ce)|0)+Math.imul(N,fe)|0,o=o+Math.imul(N,ce)|0;var Pe=(l+(n=n+Math.imul(A,pe)|0)|0)+((8191&(i=(i=i+Math.imul(A,ve)|0)+Math.imul(E,pe)|0))<<13)|0;l=((o=o+Math.imul(E,ve)|0)+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,n=Math.imul(U,re),i=(i=Math.imul(U,ne))+Math.imul(F,re)|0,o=Math.imul(F,ne),n=n+Math.imul(L,oe)|0,i=(i=i+Math.imul(L,se)|0)+Math.imul(D,oe)|0,o=o+Math.imul(D,se)|0,n=n+Math.imul(R,ue)|0,i=(i=i+Math.imul(R,le)|0)+Math.imul(O,ue)|0,o=o+Math.imul(O,le)|0,n=n+Math.imul(P,fe)|0,i=(i=i+Math.imul(P,ce)|0)+Math.imul(I,fe)|0,o=o+Math.imul(I,ce)|0;var Ie=(l+(n=n+Math.imul(k,pe)|0)|0)+((8191&(i=(i=i+Math.imul(k,ve)|0)+Math.imul(N,pe)|0))<<13)|0;l=((o=o+Math.imul(N,ve)|0)+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,n=Math.imul(U,oe),i=(i=Math.imul(U,se))+Math.imul(F,oe)|0,o=Math.imul(F,se),n=n+Math.imul(L,ue)|0,i=(i=i+Math.imul(L,le)|0)+Math.imul(D,ue)|0,o=o+Math.imul(D,le)|0,n=n+Math.imul(R,fe)|0,i=(i=i+Math.imul(R,ce)|0)+Math.imul(O,fe)|0,o=o+Math.imul(O,ce)|0;var Te=(l+(n=n+Math.imul(P,pe)|0)|0)+((8191&(i=(i=i+Math.imul(P,ve)|0)+Math.imul(I,pe)|0))<<13)|0;l=((o=o+Math.imul(I,ve)|0)+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,n=Math.imul(U,ue),i=(i=Math.imul(U,le))+Math.imul(F,ue)|0,o=Math.imul(F,le),n=n+Math.imul(L,fe)|0,i=(i=i+Math.imul(L,ce)|0)+Math.imul(D,fe)|0,o=o+Math.imul(D,ce)|0;var Re=(l+(n=n+Math.imul(R,pe)|0)|0)+((8191&(i=(i=i+Math.imul(R,ve)|0)+Math.imul(O,pe)|0))<<13)|0;l=((o=o+Math.imul(O,ve)|0)+(i>>>13)|0)+(Re>>>26)|0,Re&=67108863,n=Math.imul(U,fe),i=(i=Math.imul(U,ce))+Math.imul(F,fe)|0,o=Math.imul(F,ce);var Oe=(l+(n=n+Math.imul(L,pe)|0)|0)+((8191&(i=(i=i+Math.imul(L,ve)|0)+Math.imul(D,pe)|0))<<13)|0;l=((o=o+Math.imul(D,ve)|0)+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863;var Ce=(l+(n=Math.imul(U,pe))|0)+((8191&(i=(i=Math.imul(U,ve))+Math.imul(F,pe)|0))<<13)|0;return l=((o=Math.imul(F,ve))+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,u[0]=ye,u[1]=me,u[2]=ge,u[3]=be,u[4]=we,u[5]=_e,u[6]=Me,u[7]=Ae,u[8]=Ee,u[9]=Se,u[10]=ke,u[11]=Ne,u[12]=xe,u[13]=Pe,u[14]=Ie,u[15]=Te,u[16]=Re,u[17]=Oe,u[18]=Ce,0!==l&&(u[19]=l,r.length++),r};function a(e,t,r){return(new u).mulp(e,t,r)}function u(e,t){this.x=e,this.y=t}Math.imul||(o=i),m.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?o(this,e,t):r<63?i(this,e,t):r<1024?function(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var s=i;i=0;for(var a=67108863&n,u=Math.min(o,t.length-1),l=Math.max(0,o-e.length+1);l<=u;l++){var h=o-l,f=(0|e.words[h])*(0|t.words[l]),c=67108863&f;a=67108863&(c=c+a|0),i+=(s=(s=s+(f/67108864|0)|0)+(c>>>26)|0)>>>26,s&=67108863}r.words[o]=a,n=s,s=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}(this,e,t):a(this,e,t)},u.prototype.makeRBT=function(e){for(var t=new Array(e),r=m.prototype._countBits(e)-1,n=0;n<e;n++)t[n]=this.revBin(n,r,e);return t},u.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var n=0,i=0;i<t;i++)n|=(1&e)<<t-i-1,e>>=1;return n},u.prototype.permute=function(e,t,r,n,i,o){for(var s=0;s<o;s++)n[s]=t[e[s]],i[s]=r[e[s]]},u.prototype.transform=function(e,t,r,n,i,o){this.permute(o,e,t,r,n,i);for(var s=1;s<i;s<<=1)for(var a=s<<1,u=Math.cos(2*Math.PI/a),l=Math.sin(2*Math.PI/a),h=0;h<i;h+=a)for(var f=u,c=l,d=0;d<s;d++){var p=r[h+d],v=n[h+d],y=r[h+d+s],m=n[h+d+s],g=f*y-c*m;m=f*m+c*y,y=g,r[h+d]=p+y,n[h+d]=v+m,r[h+d+s]=p-y,n[h+d+s]=v-m,d!==a&&(g=u*f-l*c,c=u*c+l*f,f=g)}},u.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},u.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=e[n];e[n]=e[r-n-1],e[r-n-1]=i,i=t[n],t[n]=-t[r-n-1],t[r-n-1]=-i}},u.prototype.normalize13b=function(e,t){for(var r=0,n=0;n<t/2;n++){var i=8192*Math.round(e[2*n+1]/t)+Math.round(e[2*n]/t)+r;e[n]=67108863&i,r=i<67108864?0:i/67108864|0}return e},u.prototype.convert13b=function(e,t,r,n){for(var i=0,o=0;o<t;o++)i+=0|e[o],r[2*o]=8191&i,i>>>=13,r[2*o+1]=8191&i,i>>>=13;for(o=2*t;o<n;++o)r[o]=0;y(0===i),y(0==(-8192&i))},u.prototype.stub=function(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=0;return t},u.prototype.mulp=function(e,t,r){var n=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(n),o=this.stub(n),s=new Array(n),a=new Array(n),u=new Array(n),l=new Array(n),h=new Array(n),f=new Array(n),c=r.words;c.length=n,this.convert13b(e.words,e.length,s,n),this.convert13b(t.words,t.length,l,n),this.transform(s,o,a,u,n,i),this.transform(l,o,h,f,n,i);for(var d=0;d<n;d++){var p=a[d]*h[d]-u[d]*f[d];u[d]=a[d]*f[d]+u[d]*h[d],a[d]=p}return this.conjugate(a,u,n),this.transform(a,u,c,o,n,i),this.conjugate(c,o,n),this.normalize13b(c,n),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},m.prototype.mul=function(e){var t=new m(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},m.prototype.mulf=function(e){var t=new m(null);return t.words=new Array(this.length+e.length),a(this,e,t)},m.prototype.imul=function(e){return this.clone().mulTo(e,this)},m.prototype.imuln=function(e){y("number"==typeof e),y(e<67108864);for(var t=0,r=0;r<this.length;r++){var n=(0|this.words[r])*e,i=(67108863&n)+(67108863&t);t>>=26,t+=n/67108864|0,t+=i>>>26,this.words[r]=67108863&i}return 0!==t&&(this.words[r]=t,this.length++),this},m.prototype.muln=function(e){return this.clone().imuln(e)},m.prototype.sqr=function(){return this.mul(this)},m.prototype.isqr=function(){return this.imul(this.clone())},m.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r/26|0,i=r%26;t[r]=(e.words[n]&1<<i)>>>i}return t}(e);if(0===t.length)return new m(1);for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr());if(++n<t.length)for(var i=r.sqr();n<t.length;n++,i=i.sqr())0!==t[n]&&(r=r.mul(i));return r},m.prototype.iushln=function(e){y("number"==typeof e&&0<=e);var t,r=e%26,n=(e-r)/26,i=67108863>>>26-r<<26-r;if(0!=r){var o=0;for(t=0;t<this.length;t++){var s=this.words[t]&i,a=(0|this.words[t])-s<<r;this.words[t]=a|o,o=s>>>26-r}o&&(this.words[t]=o,this.length++)}if(0!=n){for(t=this.length-1;0<=t;t--)this.words[t+n]=this.words[t];for(t=0;t<n;t++)this.words[t]=0;this.length+=n}return this.strip()},m.prototype.ishln=function(e){return y(0===this.negative),this.iushln(e)},m.prototype.iushrn=function(e,t,r){var n;y("number"==typeof e&&0<=e),n=t?(t-t%26)/26:0;var i=e%26,o=Math.min((e-i)/26,this.length),s=67108863^67108863>>>i<<i,a=r;if(n-=o,n=Math.max(0,n),a){for(var u=0;u<o;u++)a.words[u]=this.words[u];a.length=o}if(0===o);else if(this.length>o)for(this.length-=o,u=0;u<this.length;u++)this.words[u]=this.words[u+o];else this.words[0]=0,this.length=1;var l=0;for(u=this.length-1;0<=u&&(0!==l||n<=u);u--){var h=0|this.words[u];this.words[u]=l<<26-i|h>>>i,l=h&s}return a&&0!==l&&(a.words[a.length++]=l),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},m.prototype.ishrn=function(e,t,r){return y(0===this.negative),this.iushrn(e,t,r)},m.prototype.shln=function(e){return this.clone().ishln(e)},m.prototype.ushln=function(e){return this.clone().iushln(e)},m.prototype.shrn=function(e){return this.clone().ishrn(e)},m.prototype.ushrn=function(e){return this.clone().iushrn(e)},m.prototype.testn=function(e){y("number"==typeof e&&0<=e);var t=e%26,r=(e-t)/26,n=1<<t;return!(this.length<=r)&&!!(this.words[r]&n)},m.prototype.imaskn=function(e){y("number"==typeof e&&0<=e);var t=e%26,r=(e-t)/26;if(y(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!=t&&r++,this.length=Math.min(r,this.length),0!=t){var n=67108863^67108863>>>t<<t;this.words[this.length-1]&=n}return this.strip()},m.prototype.maskn=function(e){return this.clone().imaskn(e)},m.prototype.iaddn=function(e){return y("number"==typeof e),y(e<67108864),e<0?this.isubn(-e):0!==this.negative?(1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0):(this.negative=0,this.isubn(e),this.negative=1),this):this._iaddn(e)},m.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&67108864<=this.words[t];t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},m.prototype.isubn=function(e){if(y("number"==typeof e),y(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this.strip()},m.prototype.addn=function(e){return this.clone().iaddn(e)},m.prototype.subn=function(e){return this.clone().isubn(e)},m.prototype.iabs=function(){return this.negative=0,this},m.prototype.abs=function(){return this.clone().iabs()},m.prototype._ishlnsubmul=function(e,t,r){var n,i,o=e.length+r;this._expand(o);var s=0;for(n=0;n<e.length;n++){i=(0|this.words[n+r])+s;var a=(0|e.words[n])*t;s=((i-=67108863&a)>>26)-(a/67108864|0),this.words[n+r]=67108863&i}for(;n<this.length-r;n++)s=(i=(0|this.words[n+r])+s)>>26,this.words[n+r]=67108863&i;if(0===s)return this.strip();for(y(-1===s),n=s=0;n<this.length;n++)s=(i=-(0|this.words[n])+s)>>26,this.words[n]=67108863&i;return this.negative=1,this.strip()},m.prototype._wordDiv=function(e,t){var r=(this.length,e.length),n=this.clone(),i=e,o=0|i.words[i.length-1];0!=(r=26-this._countBits(o))&&(i=i.ushln(r),n.iushln(r),o=0|i.words[i.length-1]);var s,a=n.length-i.length;if("mod"!==t){(s=new m(null)).length=1+a,s.words=new Array(s.length);for(var u=0;u<s.length;u++)s.words[u]=0}var l=n.clone()._ishlnsubmul(i,1,a);0===l.negative&&(n=l,s&&(s.words[a]=1));for(var h=a-1;0<=h;h--){var f=67108864*(0|n.words[i.length+h])+(0|n.words[i.length+h-1]);for(f=Math.min(f/o|0,67108863),n._ishlnsubmul(i,f,h);0!==n.negative;)f--,n.negative=0,n._ishlnsubmul(i,1,h),n.isZero()||(n.negative^=1);s&&(s.words[h]=f)}return s&&s.strip(),n.strip(),"div"!==t&&0!=r&&n.iushrn(r),{div:s||null,mod:n}},m.prototype.divmod=function(e,t,r){return y(!e.isZero()),this.isZero()?{div:new m(0),mod:new m(0)}:0!==this.negative&&0===e.negative?(o=this.neg().divmod(e,t),"mod"!==t&&(n=o.div.neg()),"div"!==t&&(i=o.mod.neg(),r&&0!==i.negative&&i.iadd(e)),{div:n,mod:i}):0===this.negative&&0!==e.negative?(o=this.divmod(e.neg(),t),"mod"!==t&&(n=o.div.neg()),{div:n,mod:o.mod}):0!=(this.negative&e.negative)?(o=this.neg().divmod(e.neg(),t),"div"!==t&&(i=o.mod.neg(),r&&0!==i.negative&&i.isub(e)),{div:o.div,mod:i}):e.length>this.length||this.cmp(e)<0?{div:new m(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new m(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new m(this.modn(e.words[0]))}:this._wordDiv(e,t);var n,i,o},m.prototype.div=function(e){return this.divmod(e,"div",!1).div},m.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},m.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},m.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),i=e.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},m.prototype.modn=function(e){y(e<=67108863);for(var t=(1<<26)%e,r=0,n=this.length-1;0<=n;n--)r=(t*r+(0|this.words[n]))%e;return r},m.prototype.idivn=function(e){y(e<=67108863);for(var t=0,r=this.length-1;0<=r;r--){var n=(0|this.words[r])+67108864*t;this.words[r]=n/e|0,t=n%e}return this.strip()},m.prototype.divn=function(e){return this.clone().idivn(e)},m.prototype.egcd=function(e){y(0===e.negative),y(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var n=new m(1),i=new m(0),o=new m(0),s=new m(1),a=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++a;for(var u=r.clone(),l=t.clone();!t.isZero();){for(var h=0,f=1;0==(t.words[0]&f)&&h<26;++h,f<<=1);if(0<h)for(t.iushrn(h);0<h--;)(n.isOdd()||i.isOdd())&&(n.iadd(u),i.isub(l)),n.iushrn(1),i.iushrn(1);for(var c=0,d=1;0==(r.words[0]&d)&&c<26;++c,d<<=1);if(0<c)for(r.iushrn(c);0<c--;)(o.isOdd()||s.isOdd())&&(o.iadd(u),s.isub(l)),o.iushrn(1),s.iushrn(1);0<=t.cmp(r)?(t.isub(r),n.isub(o),i.isub(s)):(r.isub(t),o.isub(n),s.isub(i))}return{a:o,b:s,gcd:r.iushln(a)}},m.prototype._invmp=function(e){y(0===e.negative),y(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var n,i=new m(1),o=new m(0),s=r.clone();0<t.cmpn(1)&&0<r.cmpn(1);){for(var a=0,u=1;0==(t.words[0]&u)&&a<26;++a,u<<=1);if(0<a)for(t.iushrn(a);0<a--;)i.isOdd()&&i.iadd(s),i.iushrn(1);for(var l=0,h=1;0==(r.words[0]&h)&&l<26;++l,h<<=1);if(0<l)for(r.iushrn(l);0<l--;)o.isOdd()&&o.iadd(s),o.iushrn(1);0<=t.cmp(r)?(t.isub(r),i.isub(o)):(r.isub(t),o.isub(i))}return(n=0===t.cmpn(1)?i:o).cmpn(0)<0&&n.iadd(e),n},m.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0;for(var n=r.negative=0;t.isEven()&&r.isEven();n++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=t.cmp(r);if(i<0){var o=t;t=r,r=o}else if(0===i||0===r.cmpn(1))break;t.isub(r)}return r.iushln(n)},m.prototype.invm=function(e){return this.egcd(e).a.umod(e)},m.prototype.isEven=function(){return 0==(1&this.words[0])},m.prototype.isOdd=function(){return 1==(1&this.words[0])},m.prototype.andln=function(e){return this.words[0]&e},m.prototype.bincn=function(e){y("number"==typeof e);var t=e%26,r=(e-t)/26,n=1<<t;if(this.length<=r)return this._expand(1+r),this.words[r]|=n,this;for(var i=n,o=r;0!==i&&o<this.length;o++){var s=0|this.words[o];i=(s+=i)>>>26,s&=67108863,this.words[o]=s}return 0!==i&&(this.words[o]=i,this.length++),this},m.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},m.prototype.cmpn=function(e){var t,r=e<0;if(0!==this.negative&&!r)return-1;if(0===this.negative&&r)return 1;if(this.strip(),1<this.length)t=1;else{r&&(e=-e),y(e<=67108863,"Number is too big");var n=0|this.words[0];t=n===e?0:n<e?-1:1}return 0!==this.negative?0|-t:t},m.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},m.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;0<=r;r--){var n=0|this.words[r],i=0|e.words[r];if(n!=i){n<i?t=-1:i<n&&(t=1);break}}return t},m.prototype.gtn=function(e){return 1===this.cmpn(e)},m.prototype.gt=function(e){return 1===this.cmp(e)},m.prototype.gten=function(e){return 0<=this.cmpn(e)},m.prototype.gte=function(e){return 0<=this.cmp(e)},m.prototype.ltn=function(e){return-1===this.cmpn(e)},m.prototype.lt=function(e){return-1===this.cmp(e)},m.prototype.lten=function(e){return this.cmpn(e)<=0},m.prototype.lte=function(e){return this.cmp(e)<=0},m.prototype.eqn=function(e){return 0===this.cmpn(e)},m.prototype.eq=function(e){return 0===this.cmp(e)},m.red=function(e){return new _(e)},m.prototype.toRed=function(e){return y(!this.red,"Already a number in reduction context"),y(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},m.prototype.fromRed=function(){return y(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},m.prototype._forceRed=function(e){return this.red=e,this},m.prototype.forceRed=function(e){return y(!this.red,"Already a number in reduction context"),this._forceRed(e)},m.prototype.redAdd=function(e){return y(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},m.prototype.redIAdd=function(e){return y(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},m.prototype.redSub=function(e){return y(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},m.prototype.redISub=function(e){return y(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},m.prototype.redShl=function(e){return y(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},m.prototype.redMul=function(e){return y(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},m.prototype.redIMul=function(e){return y(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},m.prototype.redSqr=function(){return y(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},m.prototype.redISqr=function(){return y(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},m.prototype.redSqrt=function(){return y(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},m.prototype.redInvm=function(){return y(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},m.prototype.redNeg=function(){return y(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},m.prototype.redPow=function(e){return y(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var l={k256:null,p224:null,p192:null,p25519:null};function h(e,t){this.name=e,this.p=new m(t,16),this.n=this.p.bitLength(),this.k=new m(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function v(){h.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function g(){h.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function b(){h.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function w(){h.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function _(e){if("string"==typeof e){var t=m._prime(e);this.m=t.p,this.prime=t}else y(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function M(e){_.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new m(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}h.prototype._tmp=function(){var e=new m(null);return e.words=new Array(Math.ceil(this.n/13)),e},h.prototype.ireduce=function(e){for(var t,r=e;this.split(r,this.tmp),(t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength())>this.n;);var n=t<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):0<n?r.isub(this.p):r.strip(),r},h.prototype.split=function(e,t){e.iushrn(this.n,0,t)},h.prototype.imulK=function(e){return e.imul(this.k)},r(v,h),v.prototype.split=function(e,t){for(var r=Math.min(e.length,9),n=0;n<r;n++)t.words[n]=e.words[n];if(t.length=r,e.length<=9)return e.words[0]=0,void(e.length=1);var i=e.words[9];for(t.words[t.length++]=4194303&i,n=10;n<e.length;n++){var o=0|e.words[n];e.words[n-10]=(4194303&o)<<4|i>>>22,i=o}i>>>=22,0===(e.words[n-10]=i)&&10<e.length?e.length-=10:e.length-=9},v.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},r(g,h),r(b,h),r(w,h),w.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n}return 0!==t&&(e.words[e.length++]=t),e},m._prime=function(e){if(l[e])return l[e];var t;if("k256"===e)t=new v;else if("p224"===e)t=new g;else if("p192"===e)t=new b;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new w}return l[e]=t},_.prototype._verify1=function(e){y(0===e.negative,"red works only with positives"),y(e.red,"red works only with red numbers")},_.prototype._verify2=function(e,t){y(0==(e.negative|t.negative),"red works only with positives"),y(e.red&&e.red===t.red,"red works only with red numbers")},_.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},_.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},_.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return 0<=r.cmp(this.m)&&r.isub(this.m),r._forceRed(this)},_.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return 0<=r.cmp(this.m)&&r.isub(this.m),r},_.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},_.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},_.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},_.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},_.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},_.prototype.isqr=function(e){return this.imul(e,e.clone())},_.prototype.sqr=function(e){return this.mul(e,e)},_.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(y(t%2==1),3===t){var r=this.m.add(new m(1)).iushrn(2);return this.pow(e,r)}for(var n=this.m.subn(1),i=0;!n.isZero()&&0===n.andln(1);)i++,n.iushrn(1);y(!n.isZero());var o=new m(1).toRed(this),s=o.redNeg(),a=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new m(2*u*u).toRed(this);0!==this.pow(u,a).cmp(s);)u.redIAdd(s);for(var l=this.pow(u,n),h=this.pow(e,n.addn(1).iushrn(1)),f=this.pow(e,n),c=i;0!==f.cmp(o);){for(var d=f,p=0;0!==d.cmp(o);p++)d=d.redSqr();y(p<c);var v=this.pow(l,new m(1).iushln(c-p-1));h=h.redMul(v),l=v.redSqr(),f=f.redMul(l),c=p}return h},_.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},_.prototype.pow=function(e,t){if(t.isZero())return new m(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new m(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],e);var i=r[0],o=0,s=0,a=t.bitLength()%26;for(0===a&&(a=26),n=t.length-1;0<=n;n--){for(var u=t.words[n],l=a-1;0<=l;l--){var h=u>>l&1;i!==r[0]&&(i=this.sqr(i)),0!=h||0!==o?(o<<=1,o|=h,(4===++s||0===n&&0===l)&&(i=this.mul(i,r[o]),o=s=0)):s=0}a=26}return i},_.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},_.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},m.mont=function(e){return new M(e)},r(M,_),M.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},M.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},M.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return 0<=i.cmp(this.m)?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},M.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new m(0)._forceRed(this);var r=e.mul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return 0<=i.cmp(this.m)?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},M.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(void 0===e||e,this)},{buffer:11}],10:[function(e,t,r){(function(r){t.exports=function(e){var t=new Uint8Array(e);return(r.crypto||r.msCrypto).getRandomValues(t),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(e,t,r){},{}],12:[function(e,t,r){"use strict";var n=r;n.version=e("../package.json").version,n.utils=e("./elliptic/utils"),n.rand=e("brorand"),n.curve=e("./elliptic/curve"),n.curves=e("./elliptic/curves"),n.ec=e("./elliptic/ec"),n.eddsa=e("./elliptic/eddsa")},{"../package.json":25,"./elliptic/curve":15,"./elliptic/curves":18,"./elliptic/ec":19,"./elliptic/eddsa":22,"./elliptic/utils":24,brorand:10}],13:[function(e,t,r){"use strict";var n=e("bn.js"),i=e("../utils"),S=i.getNAF,k=i.getJSF,f=i.assert;function o(e,t){this.type=e,this.p=new n(t.p,16),this.red=t.prime?n.red(t.prime):n.mont(this.p),this.zero=new n(0).toRed(this.red),this.one=new n(1).toRed(this.red),this.two=new n(2).toRed(this.red),this.n=t.n&&new n(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||0<r.cmpn(100)?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function s(e,t){this.curve=e,this.type=t,this.precomputed=null}(t.exports=o).prototype.point=function(){throw new Error("Not implemented")},o.prototype.validate=function(){throw new Error("Not implemented")},o.prototype._fixedNafMul=function(e,t){f(e.precomputed);var r=e._getDoubles(),n=S(t,1,this._bitLength),i=(1<<r.step+1)-(r.step%2==0?2:1);i/=3;for(var o=[],s=0;s<n.length;s+=r.step){var a=0;for(t=s+r.step-1;s<=t;t--)a=(a<<1)+n[t];o.push(a)}for(var u=this.jpoint(null,null,null),l=this.jpoint(null,null,null),h=i;0<h;h--){for(s=0;s<o.length;s++){(a=o[s])===h?l=l.mixedAdd(r.points[s]):a===-h&&(l=l.mixedAdd(r.points[s].neg()))}u=u.add(l)}return u.toP()},o.prototype._wnafMul=function(e,t){var r=4,n=e._getNAFPoints(r);r=n.wnd;for(var i=n.points,o=S(t,r,this._bitLength),s=this.jpoint(null,null,null),a=o.length-1;0<=a;a--){for(t=0;0<=a&&0===o[a];a--)t++;if(0<=a&&t++,s=s.dblp(t),a<0)break;var u=o[a];f(0!==u),s="affine"===e.type?0<u?s.mixedAdd(i[u-1>>1]):s.mixedAdd(i[-u-1>>1].neg()):0<u?s.add(i[u-1>>1]):s.add(i[-u-1>>1].neg())}return"affine"===e.type?s.toP():s},o.prototype._wnafMulAdd=function(e,t,r,n,i){for(var o=this._wnafT1,s=this._wnafT2,a=this._wnafT3,u=0,l=0;l<n;l++){var h=(A=t[l])._getNAFPoints(e);o[l]=h.wnd,s[l]=h.points}for(l=n-1;1<=l;l-=2){var f=l-1,c=l;if(1===o[f]&&1===o[c]){var d=[t[f],null,null,t[c]];0===t[f].y.cmp(t[c].y)?(d[1]=t[f].add(t[c]),d[2]=t[f].toJ().mixedAdd(t[c].neg())):0===t[f].y.cmp(t[c].y.redNeg())?(d[1]=t[f].toJ().mixedAdd(t[c]),d[2]=t[f].add(t[c].neg())):(d[1]=t[f].toJ().mixedAdd(t[c]),d[2]=t[f].toJ().mixedAdd(t[c].neg()));var p=[-3,-1,-5,-7,0,7,5,1,3],v=k(r[f],r[c]);u=Math.max(v[0].length,u),a[f]=new Array(u),a[c]=new Array(u);for(var y=0;y<u;y++){var m=0|v[0][y],g=0|v[1][y];a[f][y]=p[3*(1+m)+(1+g)],a[c][y]=0,s[f]=d}}else a[f]=S(r[f],o[f],this._bitLength),a[c]=S(r[c],o[c],this._bitLength),u=Math.max(a[f].length,u),u=Math.max(a[c].length,u)}var b=this.jpoint(null,null,null),w=this._wnafT4;for(l=u;0<=l;l--){for(var _=0;0<=l;){var M=!0;for(y=0;y<n;y++)w[y]=0|a[y][l],0!==w[y]&&(M=!1);if(!M)break;_++,l--}if(0<=l&&_++,b=b.dblp(_),l<0)break;for(y=0;y<n;y++){var A,E=w[y];0!==E&&(0<E?A=s[y][E-1>>1]:E<0&&(A=s[y][-E-1>>1].neg()),b="affine"===A.type?b.mixedAdd(A):b.add(A))}}for(l=0;l<n;l++)s[l]=null;return i?b:b.toP()},(o.BasePoint=s).prototype.eq=function(){throw new Error("Not implemented")},s.prototype.validate=function(){return this.curve.validate(this)},o.prototype.decodePoint=function(e,t){e=i.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r)return 6===e[0]?f(e[e.length-1]%2==0):7===e[0]&&f(e[e.length-1]%2==1),this.point(e.slice(1,1+r),e.slice(1+r,1+2*r));if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw new Error("Unknown point format")},s.prototype.encodeCompressed=function(e){return this.encode(e,!0)},s.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},s.prototype.encode=function(e,t){return i.encode(this._encode(t),e)},s.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},s.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},s.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<t;i+=e){for(var o=0;o<e;o++)n=n.dbl();r.push(n)}return{step:e,points:r}},s.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,n=1==r?null:this.dbl(),i=1;i<r;i++)t[i]=t[i-1].add(n);return{wnd:e,points:t}},s.prototype._getBeta=function(){return null},s.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}},{"../utils":24,"bn.js":9}],14:[function(e,t,r){t.exports={}},{}],15:[function(e,t,r){"use strict";var n=r;n.base=e("./base"),n.short=e("./short"),n.mont=e("./mont"),n.edwards=e("./edwards")},{"./base":13,"./edwards":14,"./mont":16,"./short":17}],16:[function(e,t,r){arguments[4][14][0].apply(r,arguments)},{dup:14}],17:[function(e,t,r){"use strict";var n=e("../utils"),_=e("bn.js"),i=e("inherits"),o=e("./base"),s=n.assert;function a(e){o.call(this,"short",e),this.a=new _(e.a,16).toRed(this.red),this.b=new _(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function u(e,t,r,n){o.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new _(t,16),this.y=new _(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function l(e,t,r,n){o.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new _(0)):(this.x=new _(t,16),this.y=new _(r,16),this.z=new _(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}i(a,o),(t.exports=a).prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r;if(e.beta)t=new _(e.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);t=(t=n[0].cmp(n[1])<0?n[0]:n[1]).toRed(this.red)}if(e.lambda)r=new _(e.lambda,16);else{var i=this._getEndoRoots(this.n);0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(t))?r=i[0]:(r=i[1],s(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}return{beta:t,lambda:r,basis:e.basis?e.basis.map(function(e){return{a:new _(e.a,16),b:new _(e.b,16)}}):this._getEndoBasis(r)}}},a.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:_.mont(e),r=new _(2).toRed(t).redInvm(),n=r.redNeg(),i=new _(3).toRed(t).redNeg().redSqrt().redMul(r);return[n.redAdd(i).fromRed(),n.redSub(i).fromRed()]},a.prototype._getEndoBasis=function(e){for(var t,r,n,i,o,s,a,u,l,h=this.n.ushrn(Math.floor(this.n.bitLength()/2)),f=e,c=this.n.clone(),d=new _(1),p=new _(0),v=new _(0),y=new _(1),m=0;0!==f.cmpn(0);){var g=c.div(f);u=c.sub(g.mul(f)),l=v.sub(g.mul(d));var b=y.sub(g.mul(p));if(!n&&u.cmp(h)<0)t=a.neg(),r=d,n=u.neg(),i=l;else if(n&&2==++m)break;c=f,f=a=u,v=d,d=l,y=p,p=b}o=u.neg(),s=l;var w=n.sqr().add(i.sqr());return 0<=o.sqr().add(s.sqr()).cmp(w)&&(o=t,s=r),n.negative&&(n=n.neg(),i=i.neg()),o.negative&&(o=o.neg(),s=s.neg()),[{a:n,b:i},{a:o,b:s}]},a.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],n=t[1],i=n.b.mul(e).divRound(this.n),o=r.b.neg().mul(e).divRound(this.n),s=i.mul(r.a),a=o.mul(n.a),u=i.mul(r.b),l=o.mul(n.b);return{k1:e.sub(s).sub(a),k2:u.add(l).neg()}},a.prototype.pointFromX=function(e,t){(e=new _(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=n.fromRed().isOdd();return(t&&!i||!t&&i)&&(n=n.redNeg()),this.point(e,n)},a.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,n=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},a.prototype._endoWnafMulAdd=function(e,t,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<e.length;o++){var s=this._endoSplit(t[o]),a=e[o],u=a._getBeta();s.k1.negative&&(s.k1.ineg(),a=a.neg(!0)),s.k2.negative&&(s.k2.ineg(),u=u.neg(!0)),n[2*o]=a,n[2*o+1]=u,i[2*o]=s.k1,i[2*o+1]=s.k2}for(var l=this._wnafMulAdd(1,n,i,2*o,r),h=0;h<2*o;h++)n[h]=null,i[h]=null;return l},i(u,o.BasePoint),a.prototype.point=function(e,t,r){return new u(this,e,t,r)},a.prototype.pointFromJSON=function(e,t){return u.fromJSON(this,e,t)},u.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,n=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};(e.beta=t).precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(n)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(n)}}}return t}},u.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},u.fromJSON=function(t,e,r){"string"==typeof e&&(e=JSON.parse(e));var n=t.point(e[0],e[1],r);if(!e[2])return n;function i(e){return t.point(e[0],e[1],r)}var o=e[2];return n.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[n].concat(o.doubles.points.map(i))},naf:o.naf&&{wnd:o.naf.wnd,points:[n].concat(o.naf.points.map(i))}},n},u.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},u.prototype.isInfinity=function(){return this.inf},u.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),n=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},u.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),n=e.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),s=i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,s)},u.prototype.getX=function(){return this.x.fromRed()},u.prototype.getY=function(){return this.y.fromRed()},u.prototype.mul=function(e){return e=new _(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},u.prototype.mulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},u.prototype.jmulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},u.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},u.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,n=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return t},u.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},i(l,o.BasePoint),a.prototype.jpoint=function(e,t,r){return new l(this,e,t,r)},l.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),n=this.y.redMul(t).redMul(e);return this.curve.point(r,n)},l.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},l.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(t),i=e.x.redMul(r),o=this.y.redMul(t.redMul(e.z)),s=e.y.redMul(r.redMul(this.z)),a=n.redSub(i),u=o.redSub(s);if(0===a.cmpn(0))return 0!==u.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var l=a.redSqr(),h=l.redMul(a),f=n.redMul(l),c=u.redSqr().redIAdd(h).redISub(f).redISub(f),d=u.redMul(f.redISub(c)).redISub(o.redMul(h)),p=this.z.redMul(e.z).redMul(a);return this.curve.jpoint(c,d,p)},l.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,n=e.x.redMul(t),i=this.y,o=e.y.redMul(t).redMul(this.z),s=r.redSub(n),a=i.redSub(o);if(0===s.cmpn(0))return 0!==a.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var u=s.redSqr(),l=u.redMul(s),h=r.redMul(u),f=a.redSqr().redIAdd(l).redISub(h).redISub(h),c=a.redMul(h.redISub(f)).redISub(i.redMul(l)),d=this.z.redMul(s);return this.curve.jpoint(f,c,d)},l.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();if(this.curve.zeroA||this.curve.threeA){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}var n=this.curve.a,i=this.curve.tinv,o=this.x,s=this.y,a=this.z,u=a.redSqr().redSqr(),l=s.redAdd(s);for(r=0;r<e;r++){var h=o.redSqr(),f=l.redSqr(),c=f.redSqr(),d=h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u)),p=o.redMul(f),v=d.redSqr().redISub(p.redAdd(p)),y=p.redISub(v),m=d.redMul(y);m=m.redIAdd(m).redISub(c);var g=l.redMul(a);r+1<e&&(u=u.redMul(c)),o=v,a=g,l=m}return this.curve.jpoint(o,l.redMul(i),a)},l.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},l.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(n).redISub(o);s=s.redIAdd(s);var a=n.redAdd(n).redIAdd(n),u=a.redSqr().redISub(s).redISub(s),l=o.redIAdd(o);l=(l=l.redIAdd(l)).redIAdd(l),e=u,t=a.redMul(s.redISub(u)).redISub(l),r=this.y.redAdd(this.y)}else{var h=this.x.redSqr(),f=this.y.redSqr(),c=f.redSqr(),d=this.x.redAdd(f).redSqr().redISub(h).redISub(c);d=d.redIAdd(d);var p=h.redAdd(h).redIAdd(h),v=p.redSqr(),y=c.redIAdd(c);y=(y=y.redIAdd(y)).redIAdd(y),e=v.redISub(d).redISub(d),t=p.redMul(d.redISub(e)).redISub(y),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(e,t,r)},l.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(n).redISub(o);s=s.redIAdd(s);var a=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),u=a.redSqr().redISub(s).redISub(s);e=u;var l=o.redIAdd(o);l=(l=l.redIAdd(l)).redIAdd(l),t=a.redMul(s.redISub(u)).redISub(l),r=this.y.redAdd(this.y)}else{var h=this.z.redSqr(),f=this.y.redSqr(),c=this.x.redMul(f),d=this.x.redSub(h).redMul(this.x.redAdd(h));d=d.redAdd(d).redIAdd(d);var p=c.redIAdd(c),v=(p=p.redIAdd(p)).redAdd(p);e=d.redSqr().redISub(v),r=this.y.redAdd(this.z).redSqr().redISub(f).redISub(h);var y=f.redSqr();y=(y=(y=y.redIAdd(y)).redIAdd(y)).redIAdd(y),t=d.redMul(p.redISub(e)).redISub(y)}return this.curve.jpoint(e,t,r)},l.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=t.redSqr(),s=r.redSqr(),a=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),u=t.redAdd(t),l=(u=u.redIAdd(u)).redMul(s),h=a.redSqr().redISub(l.redAdd(l)),f=l.redISub(h),c=s.redSqr();c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var d=a.redMul(f).redISub(c),p=r.redAdd(r).redMul(n);return this.curve.jpoint(h,d,p)},l.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),n=t.redSqr(),i=e.redAdd(e).redIAdd(e),o=i.redSqr(),s=this.x.redAdd(t).redSqr().redISub(e).redISub(n),a=(s=(s=(s=s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),u=n.redIAdd(n);u=(u=(u=u.redIAdd(u)).redIAdd(u)).redIAdd(u);var l=i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),h=t.redMul(l);h=(h=h.redIAdd(h)).redIAdd(h);var f=this.x.redMul(a).redISub(h);f=(f=f.redIAdd(f)).redIAdd(f);var c=this.y.redMul(l.redMul(u.redISub(l)).redISub(s.redMul(a)));c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var d=this.z.redAdd(s).redSqr().redISub(r).redISub(a);return this.curve.jpoint(f,c,d)},l.prototype.mul=function(e,t){return e=new _(e,t),this.curve._wnafMul(this,e)},l.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var n=t.redMul(this.z),i=r.redMul(e.z);return 0===this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)},l.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var n=e.clone(),i=this.curve.redN.redMul(t);;){if(n.iadd(this.curve.n),0<=n.cmp(this.curve.p))return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}},l.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},l.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},{"../utils":24,"./base":13,"bn.js":9,inherits:39}],18:[function(e,t,r){"use strict";var n,i=r,o=e("hash.js"),s=e("./curve"),a=e("./utils").assert;function u(e){"short"===e.type?this.curve=new s.short(e):"edwards"===e.type?this.curve=new s.edwards(e):this.curve=new s.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,a(this.g.validate(),"Invalid curve"),a(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function l(t,r){Object.defineProperty(i,t,{configurable:!0,enumerable:!0,get:function(){var e=new u(r);return Object.defineProperty(i,t,{configurable:!0,enumerable:!0,value:e}),e}})}i.PresetCurve=u,l("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:o.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),l("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:o.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),l("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:o.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),l("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:o.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),l("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:o.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),l("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["9"]}),l("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{n=e("./precomputed/secp256k1")}catch(e){n=void 0}l("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:o.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",n]})},{"./curve":15,"./precomputed/secp256k1":23,"./utils":24,"hash.js":26}],19:[function(e,t,r){"use strict";var y=e("bn.js"),m=e("hmac-drbg"),n=e("../utils"),i=e("../curves"),o=e("brorand"),d=n.assert,s=e("./key"),g=e("./signature");function a(e){if(!(this instanceof a))return new a(e);"string"==typeof e&&(d(i.hasOwnProperty(e),"Unknown curve "+e),e=i[e]),e instanceof i.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}(t.exports=a).prototype.keyPair=function(e){return new s(this,e)},a.prototype.keyFromPrivate=function(e,t){return s.fromPrivate(this,e,t)},a.prototype.keyFromPublic=function(e,t){return s.fromPublic(this,e,t)},a.prototype.genKeyPair=function(e){e=e||{};for(var t=new m({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||o(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new y(2));;){var i=new y(t.generate(r));if(!(0<i.cmp(n)))return i.iaddn(1),this.keyFromPrivate(i)}},a.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return 0<r&&(e=e.ushrn(r)),!t&&0<=e.cmp(this.n)?e.sub(this.n):e},a.prototype.sign=function(e,t,r,n){"object"==typeof r&&(n=r,r=null),n=n||{},t=this.keyFromPrivate(t,r),e=this._truncateToN(new y(e,16));for(var i=this.n.byteLength(),o=t.getPrivate().toArray("be",i),s=e.toArray("be",i),a=new m({hash:this.hash,entropy:o,nonce:s,pers:n.pers,persEnc:n.persEnc||"utf8"}),u=this.n.sub(new y(1)),l=0;;l++){var h=n.k?n.k(l):new y(a.generate(this.n.byteLength()));if(!((h=this._truncateToN(h,!0)).cmpn(1)<=0||0<=h.cmp(u))){var f=this.g.mul(h);if(!f.isInfinity()){var c=f.getX(),d=c.umod(this.n);if(0!==d.cmpn(0)){var p=h.invm(this.n).mul(d.mul(t.getPrivate()).iadd(e));if(0!==(p=p.umod(this.n)).cmpn(0)){var v=(f.getY().isOdd()?1:0)|(0!==c.cmp(d)?2:0);return n.canonical&&0<p.cmp(this.nh)&&(p=this.n.sub(p),v^=1),new g({r:d,s:p,recoveryParam:v})}}}}}},a.prototype.verify=function(e,t,r,n){e=this._truncateToN(new y(e,16)),r=this.keyFromPublic(r,n);var i=(t=new g(t,"hex")).r,o=t.s;if(i.cmpn(1)<0||0<=i.cmp(this.n))return!1;if(o.cmpn(1)<0||0<=o.cmp(this.n))return!1;var s,a=o.invm(this.n),u=a.mul(e).umod(this.n),l=a.mul(i).umod(this.n);return this.curve._maxwellTrick?!(s=this.g.jmulAdd(u,r.getPublic(),l)).isInfinity()&&s.eqXToP(i):!(s=this.g.mulAdd(u,r.getPublic(),l)).isInfinity()&&0===s.getX().umod(this.n).cmp(i)},a.prototype.recoverPubKey=function(e,t,r,n){d((3&r)===r,"The recovery param is more than two bits"),t=new g(t,n);var i=this.n,o=new y(e),s=t.r,a=t.s,u=1&r,l=r>>1;if(0<=s.cmp(this.curve.p.umod(this.curve.n))&&l)throw new Error("Unable to find sencond key candinate");s=l?this.curve.pointFromX(s.add(this.curve.n),u):this.curve.pointFromX(s,u);var h=t.r.invm(i),f=i.sub(o).mul(h).umod(i),c=a.mul(h).umod(i);return this.g.mulAdd(f,s,c)},a.prototype.getKeyRecoveryParam=function(e,t,r,n){if(null!==(t=new g(t,n)).recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(e,t,i)}catch(e){continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},{"../curves":18,"../utils":24,"./key":20,"./signature":21,"bn.js":9,brorand:10,"hmac-drbg":38}],20:[function(e,t,r){"use strict";var n=e("bn.js"),i=e("../utils").assert;function o(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}(t.exports=o).fromPublic=function(e,t,r){return t instanceof o?t:new o(e,{pub:t,pubEnc:r})},o.fromPrivate=function(e,t,r){return t instanceof o?t:new o(e,{priv:t,privEnc:r})},o.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},o.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},o.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},o.prototype._importPrivate=function(e,t){this.priv=new n(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},o.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?i(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||i(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},o.prototype.derive=function(e){return e.mul(this.priv).getX()},o.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},o.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},o.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},{"../utils":24,"bn.js":9}],21:[function(e,t,r){"use strict";var a=e("bn.js"),u=e("../utils"),n=u.assert;function i(e,t){if(e instanceof i)return e;this._importDER(e,t)||(n(e.r&&e.s,"Signature without r or s"),this.r=new a(e.r,16),this.s=new a(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}function l(){this.place=0}function h(e,t){var r=e[t.place++];if(!(128&r))return r;for(var n=15&r,i=0,o=0,s=t.place;o<n;o++,s++)i<<=8,i|=e[s];return t.place=s,i}function s(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function f(e,t){if(t<128)e.push(t);else{var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}}(t.exports=i).prototype._importDER=function(e,t){e=u.toArray(e,t);var r=new l;if(48!==e[r.place++])return!1;if(h(e,r)+r.place!==e.length)return!1;if(2!==e[r.place++])return!1;var n=h(e,r),i=e.slice(r.place,n+r.place);if(r.place+=n,2!==e[r.place++])return!1;var o=h(e,r);if(e.length!==o+r.place)return!1;var s=e.slice(r.place,o+r.place);return 0===i[0]&&128&i[1]&&(i=i.slice(1)),0===s[0]&&128&s[1]&&(s=s.slice(1)),this.r=new a(i),this.s=new a(s),!(this.recoveryParam=null)},i.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=s(t),r=s(r);!(r[0]||128&r[1]);)r=r.slice(1);var n=[2];f(n,t.length),(n=n.concat(t)).push(2),f(n,r.length);var i=n.concat(r),o=[48];return f(o,i.length),o=o.concat(i),u.encode(o,e)}},{"../utils":24,"bn.js":9}],22:[function(e,t,r){arguments[4][14][0].apply(r,arguments)},{dup:14}],23:[function(e,t,r){t.exports=void 0},{}],24:[function(e,t,r){"use strict";var n=r,i=e("bn.js"),o=e("minimalistic-assert"),s=e("minimalistic-crypto-utils");n.assert=o,n.toArray=s.toArray,n.zero2=s.zero2,n.toHex=s.toHex,n.encode=s.encode,n.getNAF=function(e,t,r){var n=new Array(Math.max(e.bitLength(),r)+1);n.fill(0);for(var i=1<<t+1,o=e.clone(),s=0;s<n.length;s++){var a,u=o.andln(i-1);o.isOdd()?(a=(i>>1)-1<u?(i>>1)-u:u,o.isubn(a)):a=0,n[s]=a,o.iushrn(1)}return n},n.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var n=0,i=0;0<e.cmpn(-n)||0<t.cmpn(-i);){var o,s,a,u=e.andln(3)+n&3,l=t.andln(3)+i&3;if(3===u&&(u=-1),3===l&&(l=-1),0==(1&u))o=0;else o=3!==(a=e.andln(7)+n&7)&&5!==a||2!==l?u:-u;if(r[0].push(o),0==(1&l))s=0;else s=3!==(a=t.andln(7)+i&7)&&5!==a||2!==u?l:-l;r[1].push(s),2*n===o+1&&(n=1-n),2*i===s+1&&(i=1-i),e.iushrn(1),t.iushrn(1)}return r},n.cachedProperty=function(e,t,r){var n="_"+t;e.prototype[t]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}},n.parseBytes=function(e){return"string"==typeof e?n.toArray(e,"hex"):e},n.intFromLE=function(e){return new i(e,"hex","le")}},{"bn.js":9,"minimalistic-assert":41,"minimalistic-crypto-utils":42}],25:[function(e,t,r){t.exports={version:"6.5.2"}},{}],26:[function(e,t,r){var n=r;n.utils=e("./hash/utils"),n.common=e("./hash/common"),n.sha=e("./hash/sha"),n.ripemd=e("./hash/ripemd"),n.hmac=e("./hash/hmac"),n.sha1=n.sha.sha1,n.sha256=n.sha.sha256,n.sha224=n.sha.sha224,n.sha384=n.sha.sha384,n.sha512=n.sha.sha512,n.ripemd160=n.ripemd.ripemd160},{"./hash/common":27,"./hash/hmac":28,"./hash/ripemd":29,"./hash/sha":30,"./hash/utils":37}],27:[function(e,t,r){"use strict";var i=e("./utils"),n=e("minimalistic-assert");function o(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}(r.BlockHash=o).prototype.update=function(e,t){if(e=i.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var r=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=i.join32(e,0,e.length-r,this.endian);for(var n=0;n<e.length;n+=this._delta32)this._update(e,n,n+this._delta32)}return this},o.prototype.digest=function(e){return this.update(this._pad()),n(null===this.pending),this._digest(e)},o.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++)n[i]=0;if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)n[i++]=0;n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=e>>>24&255,n[i++]=e>>>16&255,n[i++]=e>>>8&255,n[i++]=255&e}else for(n[i++]=255&e,n[i++]=e>>>8&255,n[i++]=e>>>16&255,n[i++]=e>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,o=8;o<this.padLength;o++)n[i++]=0;return n}},{"./utils":37,"minimalistic-assert":41}],28:[function(e,t,r){"use strict";var n=e("./utils"),i=e("minimalistic-assert");function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(n.toArray(t,r))}(t.exports=o).prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),i(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},o.prototype.update=function(e,t){return this.inner.update(e,t),this},o.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)}},{"./utils":37,"minimalistic-assert":41}],29:[function(e,t,r){"use strict";var n=e("./utils"),i=e("./common"),p=n.rotl32,v=n.sum32,y=n.sum32_3,m=n.sum32_4,o=i.BlockHash;function s(){if(!(this instanceof s))return new s;o.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function g(e,t,r,n){return e<=15?t^r^n:e<=31?t&r|~t&n:e<=47?(t|~r)^n:e<=63?t&n|r&~n:t^(r|~n)}function b(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function w(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}n.inherits(s,o),(r.ripemd160=s).blockSize=512,s.outSize=160,s.hmacStrength=192,s.padLength=64,s.prototype._update=function(e,t){for(var r=this.h[0],n=this.h[1],i=this.h[2],o=this.h[3],s=this.h[4],a=r,u=n,l=i,h=o,f=s,c=0;c<80;c++){var d=v(p(m(r,g(c,n,i,o),e[_[c]+t],b(c)),A[c]),s);r=s,s=o,o=p(i,10),i=n,n=d,d=v(p(m(a,g(79-c,u,l,h),e[M[c]+t],w(c)),E[c]),f),a=f,f=h,h=p(l,10),l=u,u=d}d=y(this.h[1],i,h),this.h[1]=y(this.h[2],o,f),this.h[2]=y(this.h[3],s,a),this.h[3]=y(this.h[4],r,u),this.h[4]=y(this.h[0],n,l),this.h[0]=d},s.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h,"little"):n.split32(this.h,"little")};var _=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],M=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],A=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],E=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},{"./common":27,"./utils":37}],30:[function(e,t,r){"use strict";r.sha1=e("./sha/1"),r.sha224=e("./sha/224"),r.sha256=e("./sha/256"),r.sha384=e("./sha/384"),r.sha512=e("./sha/512")},{"./sha/1":31,"./sha/224":32,"./sha/256":33,"./sha/384":34,"./sha/512":35}],31:[function(e,t,r){arguments[4][14][0].apply(r,arguments)},{dup:14}],32:[function(e,t,r){arguments[4][14][0].apply(r,arguments)},{dup:14}],33:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../common"),o=e("./common"),p=e("minimalistic-assert"),v=n.sum32,y=n.sum32_4,m=n.sum32_5,g=o.ch32,b=o.maj32,w=o.s0_256,_=o.s1_256,M=o.g0_256,A=o.g1_256,s=i.BlockHash,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function u(){if(!(this instanceof u))return new u;s.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=a,this.W=new Array(64)}n.inherits(u,s),(t.exports=u).blockSize=512,u.outSize=256,u.hmacStrength=192,u.padLength=64,u.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=y(A(r[n-2]),r[n-7],M(r[n-15]),r[n-16]);var i=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],u=this.h[4],l=this.h[5],h=this.h[6],f=this.h[7];for(p(this.k.length===r.length),n=0;n<r.length;n++){var c=m(f,_(u),g(u,l,h),this.k[n],r[n]),d=v(w(i),b(i,o,s));f=h,h=l,l=u,u=v(a,c),a=s,s=o,o=i,i=v(c,d)}this.h[0]=v(this.h[0],i),this.h[1]=v(this.h[1],o),this.h[2]=v(this.h[2],s),this.h[3]=v(this.h[3],a),this.h[4]=v(this.h[4],u),this.h[5]=v(this.h[5],l),this.h[6]=v(this.h[6],h),this.h[7]=v(this.h[7],f)},u.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h,"big"):n.split32(this.h,"big")}},{"../common":27,"../utils":37,"./common":36,"minimalistic-assert":41}],34:[function(e,t,r){arguments[4][14][0].apply(r,arguments)},{dup:14}],35:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../common"),C=e("minimalistic-assert"),o=n.rotr64_hi,s=n.rotr64_lo,a=n.shr64_hi,u=n.shr64_lo,L=n.sum64,D=n.sum64_hi,B=n.sum64_lo,c=n.sum64_4_hi,d=n.sum64_4_lo,U=n.sum64_5_hi,F=n.sum64_5_lo,l=i.BlockHash,h=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function f(){if(!(this instanceof f))return new f;l.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=h,this.W=new Array(160)}function j(e,t,r,n,i){var o=e&r^~e&i;return o<0&&(o+=4294967296),o}function G(e,t,r,n,i,o){var s=t&n^~t&o;return s<0&&(s+=4294967296),s}function H(e,t,r,n,i){var o=e&r^e&i^r&i;return o<0&&(o+=4294967296),o}function z(e,t,r,n,i,o){var s=t&n^t&o^n&o;return s<0&&(s+=4294967296),s}function V(e,t){var r=o(e,t,28)^o(t,e,2)^o(t,e,7);return r<0&&(r+=4294967296),r}function K(e,t){var r=s(e,t,28)^s(t,e,2)^s(t,e,7);return r<0&&(r+=4294967296),r}function q(e,t){var r=o(e,t,14)^o(e,t,18)^o(t,e,9);return r<0&&(r+=4294967296),r}function W(e,t){var r=s(e,t,14)^s(e,t,18)^s(t,e,9);return r<0&&(r+=4294967296),r}function p(e,t){var r=o(e,t,1)^o(e,t,8)^a(e,t,7);return r<0&&(r+=4294967296),r}function v(e,t){var r=s(e,t,1)^s(e,t,8)^u(e,t,7);return r<0&&(r+=4294967296),r}function y(e,t){var r=o(e,t,19)^o(t,e,29)^a(e,t,6);return r<0&&(r+=4294967296),r}function m(e,t){var r=s(e,t,19)^s(t,e,29)^u(e,t,6);return r<0&&(r+=4294967296),r}n.inherits(f,l),(t.exports=f).blockSize=1024,f.outSize=512,f.hmacStrength=192,f.padLength=128,f.prototype._prepareBlock=function(e,t){for(var r=this.W,n=0;n<32;n++)r[n]=e[t+n];for(;n<r.length;n+=2){var i=y(r[n-4],r[n-3]),o=m(r[n-4],r[n-3]),s=r[n-14],a=r[n-13],u=p(r[n-30],r[n-29]),l=v(r[n-30],r[n-29]),h=r[n-32],f=r[n-31];r[n]=c(i,o,s,a,u,l,h,f),r[n+1]=d(i,o,s,a,u,l,h,f)}},f.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,n=this.h[0],i=this.h[1],o=this.h[2],s=this.h[3],a=this.h[4],u=this.h[5],l=this.h[6],h=this.h[7],f=this.h[8],c=this.h[9],d=this.h[10],p=this.h[11],v=this.h[12],y=this.h[13],m=this.h[14],g=this.h[15];C(this.k.length===r.length);for(var b=0;b<r.length;b+=2){var w=m,_=g,M=q(f,c),A=W(f,c),E=j(f,c,d,p,v),S=G(f,c,d,p,v,y),k=this.k[b],N=this.k[b+1],x=r[b],P=r[b+1],I=U(w,_,M,A,E,S,k,N,x,P),T=F(w,_,M,A,E,S,k,N,x,P);w=V(n,i),_=K(n,i),M=H(n,i,o,s,a),A=z(n,i,o,s,a,u);var R=D(w,_,M,A),O=B(w,_,M,A);m=v,g=y,v=d,y=p,d=f,p=c,f=D(l,h,I,T),c=B(h,h,I,T),l=a,h=u,a=o,u=s,o=n,s=i,n=D(I,T,R,O),i=B(I,T,R,O)}L(this.h,0,n,i),L(this.h,2,o,s),L(this.h,4,a,u),L(this.h,6,l,h),L(this.h,8,f,c),L(this.h,10,d,p),L(this.h,12,v,y),L(this.h,14,m,g)},f.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h,"big"):n.split32(this.h,"big")}},{"../common":27,"../utils":37,"minimalistic-assert":41}],36:[function(e,t,r){"use strict";var n=e("../utils").rotr32;function i(e,t,r){return e&t^~e&r}function o(e,t,r){return e&t^e&r^t&r}function s(e,t,r){return e^t^r}r.ft_1=function(e,t,r,n){return 0===e?i(t,r,n):1===e||3===e?s(t,r,n):2===e?o(t,r,n):void 0},r.ch32=i,r.maj32=o,r.p32=s,r.s0_256=function(e){return n(e,2)^n(e,13)^n(e,22)},r.s1_256=function(e){return n(e,6)^n(e,11)^n(e,25)},r.g0_256=function(e){return n(e,7)^n(e,18)^e>>>3},r.g1_256=function(e){return n(e,17)^n(e,19)^e>>>10}},{"../utils":37}],37:[function(e,t,r){"use strict";var l=e("minimalistic-assert"),n=e("inherits");function o(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function i(e){return 1===e.length?"0"+e:e}function s(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}r.inherits=n,r.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,s=255&i;o?r.push(o,s):r.push(s)}else for(n=0;n<e.length;n++)r[n]=0|e[n];return r},r.toHex=function(e){for(var t="",r=0;r<e.length;r++)t+=i(e[r].toString(16));return t},r.htonl=o,r.toHex32=function(e,t){for(var r="",n=0;n<e.length;n++){var i=e[n];"little"===t&&(i=o(i)),r+=s(i.toString(16))}return r},r.zero2=i,r.zero8=s,r.join32=function(e,t,r,n){var i=r-t;l(i%4==0);for(var o=new Array(i/4),s=0,a=t;s<o.length;s++,a+=4){var u;u="big"===n?e[a]<<24|e[a+1]<<16|e[a+2]<<8|e[a+3]:e[a+3]<<24|e[a+2]<<16|e[a+1]<<8|e[a],o[s]=u>>>0}return o},r.split32=function(e,t){for(var r=new Array(4*e.length),n=0,i=0;n<e.length;n++,i+=4){var o=e[n];"big"===t?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o)}return r},r.rotr32=function(e,t){return e>>>t|e<<32-t},r.rotl32=function(e,t){return e<<t|e>>>32-t},r.sum32=function(e,t){return e+t>>>0},r.sum32_3=function(e,t,r){return e+t+r>>>0},r.sum32_4=function(e,t,r,n){return e+t+r+n>>>0},r.sum32_5=function(e,t,r,n,i){return e+t+r+n+i>>>0},r.sum64=function(e,t,r,n){var i=e[t],o=n+e[t+1]>>>0,s=(o<n?1:0)+r+i;e[t]=s>>>0,e[t+1]=o},r.sum64_hi=function(e,t,r,n){return(t+n>>>0<t?1:0)+e+r>>>0},r.sum64_lo=function(e,t,r,n){return t+n>>>0},r.sum64_4_hi=function(e,t,r,n,i,o,s,a){var u=0,l=t;return u+=(l=l+n>>>0)<t?1:0,u+=(l=l+o>>>0)<o?1:0,e+r+i+s+(u+=(l=l+a>>>0)<a?1:0)>>>0},r.sum64_4_lo=function(e,t,r,n,i,o,s,a){return t+n+o+a>>>0},r.sum64_5_hi=function(e,t,r,n,i,o,s,a,u,l){var h=0,f=t;return h+=(f=f+n>>>0)<t?1:0,h+=(f=f+o>>>0)<o?1:0,h+=(f=f+a>>>0)<a?1:0,e+r+i+s+u+(h+=(f=f+l>>>0)<l?1:0)>>>0},r.sum64_5_lo=function(e,t,r,n,i,o,s,a,u,l){return t+n+o+a+l>>>0},r.rotr64_hi=function(e,t,r){return(t<<32-r|e>>>r)>>>0},r.rotr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0},r.shr64_hi=function(e,t,r){return e>>>r},r.shr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0}},{inherits:39,"minimalistic-assert":41}],38:[function(e,t,r){"use strict";var n=e("hash.js"),s=e("minimalistic-crypto-utils"),i=e("minimalistic-assert");function o(e){if(!(this instanceof o))return new o(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=s.toArray(e.entropy,e.entropyEnc||"hex"),r=s.toArray(e.nonce,e.nonceEnc||"hex"),n=s.toArray(e.pers,e.persEnc||"hex");i(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,n)}(t.exports=o).prototype._init=function(e,t,r){var n=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},o.prototype._hmac=function(){return new n.hmac(this.hash,this.K)},o.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},o.prototype.reseed=function(e,t,r,n){"string"!=typeof t&&(n=r,r=t,t=null),e=s.toArray(e,t),r=s.toArray(r,n),i(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},o.prototype.generate=function(e,t,r,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof t&&(n=r,r=t,t=null),r&&(r=s.toArray(r,n||"hex"),this._update(r));for(var i=[];i.length<e;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var o=i.slice(0,e);return this._update(r),this._reseed++,s.encode(o,t)}},{"hash.js":26,"minimalistic-assert":41,"minimalistic-crypto-utils":42}],39:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(e,t){if(t){e.super_=t;function r(){}r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}},{}],40:[function(e,_,t){(function(b,w){!function(){"use strict";var e="object"==typeof window?window:{};!e.JS_SHA3_NO_NODE_JS&&"object"==typeof b&&b.versions&&b.versions.node&&(e=w);for(var t=!e.JS_SHA3_NO_COMMON_JS&&"object"==typeof _&&_.exports,u="0123456789abcdef".split(""),h=[0,8,16,24],he=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],r=[224,256,384,512],o=["hex","buffer","arrayBuffer","array"],s=function(t,r,n){return function(e){return new m(t,r,t).update(e)[n]()}},a=function(r,n,i){return function(e,t){return new m(r,n,t).update(e)[i]()}},n=function(e,t){var r=s(e,t,"hex");r.create=function(){return new m(e,t,e)},r.update=function(e){return r.create().update(e)};for(var n=0;n<o.length;++n){var i=o[n];r[i]=s(e,t,i)}return r},i=[{name:"keccak",padding:[1,256,65536,16777216],bits:r,createMethod:n},{name:"sha3",padding:[6,1536,393216,100663296],bits:r,createMethod:n},{name:"shake",padding:[31,7936,2031616,520093696],bits:[128,256],createMethod:function(t,r){var n=a(t,r,"hex");n.create=function(e){return new m(t,r,e)},n.update=function(e,t){return n.create(t).update(e)};for(var e=0;e<o.length;++e){var i=o[e];n[i]=a(t,r,i)}return n}}],l={},f=[],c=0;c<i.length;++c)for(var d=i[c],p=d.bits,v=0;v<p.length;++v){var y=d.name+"_"+p[v];f.push(y),l[y]=d.createMethod(p[v],d.padding)}function m(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}m.prototype.update=function(e){var t="string"!=typeof e;t&&e.constructor===ArrayBuffer&&(e=new Uint8Array(e));for(var r,n,i=e.length,o=this.blocks,s=this.byteCount,a=this.blockCount,u=0,l=this.s;u<i;){if(this.reset)for(this.reset=!1,o[0]=this.block,r=1;r<a+1;++r)o[r]=0;if(t)for(r=this.start;u<i&&r<s;++u)o[r>>2]|=e[u]<<h[3&r++];else for(r=this.start;u<i&&r<s;++u)(n=e.charCodeAt(u))<128?o[r>>2]|=n<<h[3&r++]:(n<2048?o[r>>2]|=(192|n>>6)<<h[3&r++]:(n<55296||57344<=n?o[r>>2]|=(224|n>>12)<<h[3&r++]:(n=65536+((1023&n)<<10|1023&e.charCodeAt(++u)),o[r>>2]|=(240|n>>18)<<h[3&r++],o[r>>2]|=(128|n>>12&63)<<h[3&r++]),o[r>>2]|=(128|n>>6&63)<<h[3&r++]),o[r>>2]|=(128|63&n)<<h[3&r++]);if(s<=(this.lastByteIndex=r)){for(this.start=r-s,this.block=o[a],r=0;r<a;++r)l[r]^=o[r];g(l),this.reset=!0}else this.start=r}return this},m.prototype.finalize=function(){var e=this.blocks,t=this.lastByteIndex,r=this.blockCount,n=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(e[0]=e[r],t=1;t<r+1;++t)e[t]=0;for(e[r-1]|=2147483648,t=0;t<r;++t)n[t]^=e[t];g(n)},m.prototype.toString=m.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a="";s<n;){for(o=0;o<t&&s<n;++o,++s)e=r[o],a+=u[e>>4&15]+u[15&e]+u[e>>12&15]+u[e>>8&15]+u[e>>20&15]+u[e>>16&15]+u[e>>28&15]+u[e>>24&15];s%t==0&&(g(r),o=0)}return i&&(e=r[o],0<i&&(a+=u[e>>4&15]+u[15&e]),1<i&&(a+=u[e>>12&15]+u[e>>8&15]),2<i&&(a+=u[e>>20&15]+u[e>>16&15])),a},m.prototype.buffer=m.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;e=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var u=new Uint32Array(e);s<n;){for(o=0;o<t&&s<n;++o,++s)u[s]=r[o];s%t==0&&g(r)}return i&&(u[o]=r[o],e=e.slice(0,a)),e},m.prototype.digest=m.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u=[];a<i;){for(s=0;s<r&&a<i;++s,++a)e=a<<2,t=n[s],u[e]=255&t,u[e+1]=t>>8&255,u[e+2]=t>>16&255,u[e+3]=t>>24&255;a%r==0&&g(n)}return o&&(e=a<<2,t=n[s],0<o&&(u[e]=255&t),1<o&&(u[e+1]=t>>8&255),2<o&&(u[e+2]=t>>16&255)),u};var g=function(e){var t,r,n,i,o,s,a,u,l,h,f,c,d,p,v,y,m,g,b,w,_,M,A,E,S,k,N,x,P,I,T,R,O,C,L,D,B,U,F,j,G,H,z,V,K,q,W,Z,J,X,$,Q,Y,ee,te,re,ne,ie,oe,se,ae,ue,le;for(n=0;n<48;n+=2)i=e[0]^e[10]^e[20]^e[30]^e[40],o=e[1]^e[11]^e[21]^e[31]^e[41],s=e[2]^e[12]^e[22]^e[32]^e[42],a=e[3]^e[13]^e[23]^e[33]^e[43],u=e[4]^e[14]^e[24]^e[34]^e[44],l=e[5]^e[15]^e[25]^e[35]^e[45],h=e[6]^e[16]^e[26]^e[36]^e[46],f=e[7]^e[17]^e[27]^e[37]^e[47],t=(c=e[8]^e[18]^e[28]^e[38]^e[48])^(s<<1|a>>>31),r=(d=e[9]^e[19]^e[29]^e[39]^e[49])^(a<<1|s>>>31),e[0]^=t,e[1]^=r,e[10]^=t,e[11]^=r,e[20]^=t,e[21]^=r,e[30]^=t,e[31]^=r,e[40]^=t,e[41]^=r,t=i^(u<<1|l>>>31),r=o^(l<<1|u>>>31),e[2]^=t,e[3]^=r,e[12]^=t,e[13]^=r,e[22]^=t,e[23]^=r,e[32]^=t,e[33]^=r,e[42]^=t,e[43]^=r,t=s^(h<<1|f>>>31),r=a^(f<<1|h>>>31),e[4]^=t,e[5]^=r,e[14]^=t,e[15]^=r,e[24]^=t,e[25]^=r,e[34]^=t,e[35]^=r,e[44]^=t,e[45]^=r,t=u^(c<<1|d>>>31),r=l^(d<<1|c>>>31),e[6]^=t,e[7]^=r,e[16]^=t,e[17]^=r,e[26]^=t,e[27]^=r,e[36]^=t,e[37]^=r,e[46]^=t,e[47]^=r,t=h^(i<<1|o>>>31),r=f^(o<<1|i>>>31),e[8]^=t,e[9]^=r,e[18]^=t,e[19]^=r,e[28]^=t,e[29]^=r,e[38]^=t,e[39]^=r,e[48]^=t,e[49]^=r,p=e[0],v=e[1],q=e[11]<<4|e[10]>>>28,W=e[10]<<4|e[11]>>>28,x=e[20]<<3|e[21]>>>29,P=e[21]<<3|e[20]>>>29,se=e[31]<<9|e[30]>>>23,ae=e[30]<<9|e[31]>>>23,H=e[40]<<18|e[41]>>>14,z=e[41]<<18|e[40]>>>14,C=e[2]<<1|e[3]>>>31,L=e[3]<<1|e[2]>>>31,y=e[13]<<12|e[12]>>>20,m=e[12]<<12|e[13]>>>20,Z=e[22]<<10|e[23]>>>22,J=e[23]<<10|e[22]>>>22,I=e[33]<<13|e[32]>>>19,T=e[32]<<13|e[33]>>>19,ue=e[42]<<2|e[43]>>>30,le=e[43]<<2|e[42]>>>30,ee=e[5]<<30|e[4]>>>2,te=e[4]<<30|e[5]>>>2,D=e[14]<<6|e[15]>>>26,B=e[15]<<6|e[14]>>>26,g=e[25]<<11|e[24]>>>21,b=e[24]<<11|e[25]>>>21,X=e[34]<<15|e[35]>>>17,$=e[35]<<15|e[34]>>>17,R=e[45]<<29|e[44]>>>3,O=e[44]<<29|e[45]>>>3,E=e[6]<<28|e[7]>>>4,S=e[7]<<28|e[6]>>>4,re=e[17]<<23|e[16]>>>9,ne=e[16]<<23|e[17]>>>9,U=e[26]<<25|e[27]>>>7,F=e[27]<<25|e[26]>>>7,w=e[36]<<21|e[37]>>>11,_=e[37]<<21|e[36]>>>11,Q=e[47]<<24|e[46]>>>8,Y=e[46]<<24|e[47]>>>8,V=e[8]<<27|e[9]>>>5,K=e[9]<<27|e[8]>>>5,k=e[18]<<20|e[19]>>>12,N=e[19]<<20|e[18]>>>12,ie=e[29]<<7|e[28]>>>25,oe=e[28]<<7|e[29]>>>25,j=e[38]<<8|e[39]>>>24,G=e[39]<<8|e[38]>>>24,M=e[48]<<14|e[49]>>>18,A=e[49]<<14|e[48]>>>18,e[0]=p^~y&g,e[1]=v^~m&b,e[10]=E^~k&x,e[11]=S^~N&P,e[20]=C^~D&U,e[21]=L^~B&F,e[30]=V^~q&Z,e[31]=K^~W&J,e[40]=ee^~re&ie,e[41]=te^~ne&oe,e[2]=y^~g&w,e[3]=m^~b&_,e[12]=k^~x&I,e[13]=N^~P&T,e[22]=D^~U&j,e[23]=B^~F&G,e[32]=q^~Z&X,e[33]=W^~J&$,e[42]=re^~ie&se,e[43]=ne^~oe&ae,e[4]=g^~w&M,e[5]=b^~_&A,e[14]=x^~I&R,e[15]=P^~T&O,e[24]=U^~j&H,e[25]=F^~G&z,e[34]=Z^~X&Q,e[35]=J^~$&Y,e[44]=ie^~se&ue,e[45]=oe^~ae&le,e[6]=w^~M&p,e[7]=_^~A&v,e[16]=I^~R&E,e[17]=T^~O&S,e[26]=j^~H&C,e[27]=G^~z&L,e[36]=X^~Q&V,e[37]=$^~Y&K,e[46]=se^~ue&ee,e[47]=ae^~le&te,e[8]=M^~p&y,e[9]=A^~v&m,e[18]=R^~E&k,e[19]=O^~S&N,e[28]=H^~C&D,e[29]=z^~L&B,e[38]=Q^~V&q,e[39]=Y^~K&W,e[48]=ue^~ee&re,e[49]=le^~te&ne,e[0]^=he[n],e[1]^=he[n+1]};if(t)_.exports=l;else for(c=0;c<f.length;++c)e[f[c]]=l[f[c]]}()}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:43}],41:[function(e,t,r){function n(e,t){if(!e)throw new Error(t||"Assertion failed")}(t.exports=n).equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)}},{}],42:[function(e,t,r){"use strict";var n=r;function i(e){return 1===e.length?"0"+e:e}function o(e){for(var t="",r=0;r<e.length;r++)t+=i(e[r].toString(16));return t}n.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var n=0;n<e.length;n++)r[n]=0|e[n];return r}if("hex"===t){(e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e);for(n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,s=255&i;o?r.push(o,s):r.push(s)}return r},n.zero2=i,n.toHex=o,n.encode=function(e,t){return"hex"===t?o(e):e}},{}],43:[function(e,t,r){t.exports={browser:!0}},{}],44:[function(e,r,o){(function(n){"use strict";function l(e){var y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],m=1779033703,g=3144134277,b=1013904242,w=2773480762,_=1359893119,M=2600822924,A=528734635,E=1541459225,S=new Array(64);function t(e){for(var t=0,r=e.length;64<=r;){var n,i,o,s,a,u=m,l=g,h=b,f=w,c=_,d=M,p=A,v=E;for(i=0;i<16;i++)o=t+4*i,S[i]=(255&e[o])<<24|(255&e[o+1])<<16|(255&e[o+2])<<8|255&e[o+3];for(i=16;i<64;i++)s=((n=S[i-2])>>>17|n<<15)^(n>>>19|n<<13)^n>>>10,a=((n=S[i-15])>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,S[i]=(s+S[i-7]|0)+(a+S[i-16]|0)|0;for(i=0;i<64;i++)s=(((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))+(c&d^~c&p)|0)+(v+(y[i]+S[i]|0)|0)|0,a=((u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10))+(u&l^u&h^l&h)|0,v=p,p=d,d=c,c=f+s|0,f=h,h=l,l=u,u=s+a|0;m=m+u|0,g=g+l|0,b=b+h|0,w=w+f|0,_=_+c|0,M=M+d|0,A=A+p|0,E=E+v|0,t+=64,r-=64}}t(e);var r,n=e.length%64,i=e.length/536870912|0,o=e.length<<3,s=n<56?56:120,a=e.slice(e.length-n,e.length);for(a.push(128),r=1+n;r<s;r++)a.push(0);return a.push(i>>>24&255),a.push(i>>>16&255),a.push(i>>>8&255),a.push(i>>>0&255),a.push(o>>>24&255),a.push(o>>>16&255),a.push(o>>>8&255),a.push(o>>>0&255),t(a),[m>>>24&255,m>>>16&255,m>>>8&255,m>>>0&255,g>>>24&255,g>>>16&255,g>>>8&255,g>>>0&255,b>>>24&255,b>>>16&255,b>>>8&255,b>>>0&255,w>>>24&255,w>>>16&255,w>>>8&255,w>>>0&255,_>>>24&255,_>>>16&255,_>>>8&255,_>>>0&255,M>>>24&255,M>>>16&255,M>>>8&255,M>>>0&255,A>>>24&255,A>>>16&255,A>>>8&255,A>>>0&255,E>>>24&255,E>>>16&255,E>>>8&255,E>>>0&255]}function P(e,t,r){var n;e=e.length<=64?e:l(e);var i=64+t.length+4,o=new Array(i),s=new Array(64),a=[];for(n=0;n<64;n++)o[n]=54;for(n=0;n<e.length;n++)o[n]^=e[n];for(n=0;n<t.length;n++)o[64+n]=t[n];for(n=i-4;n<i;n++)o[n]=0;for(n=0;n<64;n++)s[n]=92;for(n=0;n<e.length;n++)s[n]^=e[n];function u(){for(var e=i-1;i-4<=e;e--){if(o[e]++,o[e]<=255)return;o[e]=0}}for(;32<=r;)u(),a=a.concat(l(s.concat(l(o)))),r-=32;return 0<r&&(u(),a=a.concat(l(s.concat(l(o))).slice(0,r))),a}function I(e,t,r,n,i){var o;for(R(e,16*(2*r-1),i,0,16),o=0;o<2*r;o++)T(e,16*o,i,16),s(i,n),R(i,0,e,t+16*o,16);for(o=0;o<r;o++)R(e,t+2*o*16,e,16*o,16);for(o=0;o<r;o++)R(e,t+16*(2*o+1),e,16*(o+r),16)}function i(e,t){return e<<t|e>>>32-t}function s(e,t){R(e,0,t,0,16);for(var r=8;0<r;r-=2)t[4]^=i(t[0]+t[12],7),t[8]^=i(t[4]+t[0],9),t[12]^=i(t[8]+t[4],13),t[0]^=i(t[12]+t[8],18),t[9]^=i(t[5]+t[1],7),t[13]^=i(t[9]+t[5],9),t[1]^=i(t[13]+t[9],13),t[5]^=i(t[1]+t[13],18),t[14]^=i(t[10]+t[6],7),t[2]^=i(t[14]+t[10],9),t[6]^=i(t[2]+t[14],13),t[10]^=i(t[6]+t[2],18),t[3]^=i(t[15]+t[11],7),t[7]^=i(t[3]+t[15],9),t[11]^=i(t[7]+t[3],13),t[15]^=i(t[11]+t[7],18),t[1]^=i(t[0]+t[3],7),t[2]^=i(t[1]+t[0],9),t[3]^=i(t[2]+t[1],13),t[0]^=i(t[3]+t[2],18),t[6]^=i(t[5]+t[4],7),t[7]^=i(t[6]+t[5],9),t[4]^=i(t[7]+t[6],13),t[5]^=i(t[4]+t[7],18),t[11]^=i(t[10]+t[9],7),t[8]^=i(t[11]+t[10],9),t[9]^=i(t[8]+t[11],13),t[10]^=i(t[9]+t[8],18),t[12]^=i(t[15]+t[14],7),t[13]^=i(t[12]+t[15],9),t[14]^=i(t[13]+t[12],13),t[15]^=i(t[14]+t[13],18);for(r=0;r<16;++r)e[r]+=t[r]}function T(e,t,r,n){for(var i=0;i<n;i++)r[i]^=e[t+i]}function R(e,t,r,n,i){for(;i--;)r[n++]=e[t++]}function O(e){if(!e||"number"!=typeof e.length)return!1;for(var t=0;t<e.length;t++){if("number"!=typeof e[t])return!1;var r=parseInt(e[t]);if(r!=e[t]||r<0||256<=r)return!1}return!0}function C(e,t){var r=parseInt(e);if(e!=r)throw new Error("invalid "+t);return r}function e(o,e,s,a,u,l,h){if(!h)throw new Error("missing callback");if(s=C(s,"N"),a=C(a,"r"),u=C(u,"p"),l=C(l,"dkLen"),0===s||0!=(s&s-1))throw new Error("N must be power of 2");if(L/128/a<s)throw new Error("N too large");if(L/128/u<a)throw new Error("r too large");if(!O(o))throw new Error("password must be an array or buffer");if(o=Array.prototype.slice.call(o),!O(e))throw new Error("salt must be an array or buffer");e=Array.prototype.slice.call(e);for(var f=P(o,e,128*u*a),c=new Uint32Array(32*u*a),t=0;t<c.length;t++){var r=4*t;c[t]=(255&f[3+r])<<24|(255&f[2+r])<<16|(255&f[1+r])<<8|(255&f[0+r])<<0}var d,p,v=new Uint32Array(64*a),y=new Uint32Array(32*a*s),m=32*a,g=new Uint32Array(16),b=new Uint32Array(16),w=u*s*2,_=0,M=null,A=!1,E=0,S=0,k=parseInt(1e3/a),N=void 0!==n?n:setTimeout,x=function(){if(A)return h(new Error("cancelled"),_/w);switch(E){case 0:R(c,p=32*S*a,v,0,m),E=1,d=0;case 1:k<(t=s-d)&&(t=k);for(var e=0;e<t;e++)R(v,0,y,(d+e)*m,m),I(v,m,a,g,b);if(d+=t,_+=t,(r=parseInt(1e3*_/w))!==M){if(A=h(null,_/w))break;M=r}if(d<s)break;d=0,E=2;case 2:var t,r;k<(t=s-d)&&(t=k);for(e=0;e<t;e++){var n=v[16*(2*a-1)]&s-1;T(y,n*m,v,m),I(v,m,a,g,b)}if(d+=t,_+=t,(r=parseInt(1e3*_/w))!==M){if(A=h(null,_/w))break;M=r}if(d<s)break;if(R(v,0,c,p,m),++S<u){E=0;break}f=[];for(e=0;e<c.length;e++)f.push(c[e]>>0&255),f.push(c[e]>>8&255),f.push(c[e]>>16&255),f.push(c[e]>>24&255);var i=P(o,f,l);return h(null,1,i)}N(x)};x()}var t,L;t=this,L=2147483647,void 0!==o?r.exports=e:t&&(t.scrypt&&(t._scrypt=t.scrypt),t.scrypt=e)}).call(this,e("timers").setImmediate)},{timers:46}],45:[function(e,t,r){(function(y,e,t){!function(r,n){"use strict";if(!r.setImmediate){var e,i,t,o,s=1,a={},u=!1,l=r.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(r);h=h&&h.setTimeout?h:r,e="[object process]"==={}.toString.call(r.process)?function(){var e=f(arguments);return y.nextTick(c(d,e)),e}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(o="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",v,!1):r.attachEvent("onmessage",v),function(){var e=f(arguments);return r.postMessage(o+e,"*"),e}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){d(e.data)},function(){var e=f(arguments);return t.port2.postMessage(e),e}):l&&"onreadystatechange"in l.createElement("script")?(i=l.documentElement,function(){var e=f(arguments),t=l.createElement("script");return t.onreadystatechange=function(){d(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t),e}):function(){var e=f(arguments);return setTimeout(c(d,e),0),e},h.setImmediate=e,h.clearImmediate=p}function f(e){return a[s]=c.apply(n,e),s++}function c(e){var t=[].slice.call(arguments,1);return function(){"function"==typeof e?e.apply(n,t):new Function(""+e)()}}function d(e){if(u)setTimeout(c(d,e),0);else{var t=a[e];if(t){u=!0;try{t()}finally{p(e),u=!1}}}}function p(e){delete a[e]}function v(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(o)&&d(+e.data.slice(o.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("timers").clearImmediate)},{_process:43,timers:46}],46:[function(e,t,r){(function(e){t.exports={setImmediate:e.setImmediate}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],47:[function(e,i,t){(function(e){var t;if(e.crypto&&crypto.getRandomValues){var r=new Uint8Array(16);t=function(){return crypto.getRandomValues(r),r}}if(!t){var n=new Array(16);t=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}i.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],48:[function(e,t,r){for(var s=e("./rng"),i=[],o={},n=0;n<256;n++)i[n]=(n+256).toString(16).substr(1),o[i[n]]=n;function d(e,t){var r=t||0,n=i;return n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]}var a=s(),p=[1|a[0],a[1],a[2],a[3],a[4],a[5]],v=16383&(a[6]<<8|a[7]),y=0,m=0;function u(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||s)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;o++)t[n+o]=i[o];return t||d(i)}var l=u;l.v1=function(e,t,r){var n=t&&r||0,i=t||[],o=void 0!==(e=e||{}).clockseq?e.clockseq:v,s=void 0!==e.msecs?e.msecs:(new Date).getTime(),a=void 0!==e.nsecs?e.nsecs:m+1,u=s-y+(a-m)/1e4;if(u<0&&void 0===e.clockseq&&(o=o+1&16383),(u<0||y<s)&&void 0===e.nsecs&&(a=0),1e4<=a)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=s,v=o;var l=(1e4*(268435455&(s+=122192928e5))+(m=a))%4294967296;i[n++]=l>>>24&255,i[n++]=l>>>16&255,i[n++]=l>>>8&255,i[n++]=255&l;var h=s/4294967296*1e4&268435455;i[n++]=h>>>8&255,i[n++]=255&h,i[n++]=h>>>24&15|16,i[n++]=h>>>16&255,i[n++]=o>>>8|128,i[n++]=255&o;for(var f=e.node||p,c=0;c<6;c++)i[n+c]=f[c];return t||d(i)},l.v4=u,l.parse=function(e,t,r){var n=t&&r||0,i=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){i<16&&(t[n+i++]=o[e])});i<16;)t[n+i++]=0;return t},l.unparse=d,t.exports=l},{"./rng":47}],49:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});try{t.exports.XMLHttpRequest=XMLHttpRequest}catch(e){console.log("Warning: XMLHttpRequest is not defined"),t.exports.XMLHttpRequest=null}},{}],50:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("../utils/properties"),i=(o.isProvider=function(e){return n.isType(e,"Provider")},o);function o(){n.setType(this,"Provider")}r.Provider=i},{"../utils/properties":74}],51:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("../utils/address"),a=e("../utils/bignumber"),u=e("../utils/bytes"),l=e("../constants"),h=e("../utils/hash"),f=e("../utils/networks"),c=e("../utils/properties"),d=e("../utils/rlp"),p=e("../utils/transaction"),v=e("../utils/utf8"),y=e("../utils/web"),m=o(e("../errors")),g=e("./abstract-provider");function b(e,t){var r={};for(var n in e)try{var i=e[n](t[n]);void 0!==i&&(r[n]=i)}catch(e){throw e.checkKey=n,e.checkValue=t[n],e}return r}function w(t,r){return function(e){return null==e?r:t(e)}}function _(r){return function(e){if(!Array.isArray(e))throw new Error("not an array");var t=[];return e.forEach(function(e){t.push(r(e))}),t}}function M(e,t){return"string"==typeof e&&(t||"0x"===e.substring(0,2)||(e="0x"+e),32===u.hexDataLength(e))?e.toLowerCase():(m.throwError("invalid hash",m.INVALID_ARGUMENT,{arg:"hash",value:e}),null)}function A(e){return a.bigNumberify(e).toNumber()}function E(e){if(!u.isHexString(e))throw new Error("invalid uint256");for(;e.length<66;)e="0x0"+e.substring(2);return e}function S(e){if(null==e)return"latest";if("earliest"===e)return"0x0";if("latest"===e||"pending"===e)return e;if("number"==typeof e)return u.hexStripZeros(u.hexlify(e));if(u.isHexString(e))return u.hexStripZeros(e);throw new Error("invalid blockTag")}var k={hash:M,blockHash:w(M,null),blockNumber:w(A,null),transactionIndex:w(A,null),confirmations:w(A,null),from:s.getAddress,gasPrice:a.bigNumberify,gasLimit:a.bigNumberify,to:w(s.getAddress,null),value:a.bigNumberify,nonce:A,data:u.hexlify,r:w(E),s:w(E),v:w(A),creates:w(s.getAddress,null),raw:w(u.hexlify)};function N(e){if(null!=e.gas&&null==e.gasLimit&&(e.gasLimit=e.gas),e.to&&a.bigNumberify(e.to).isZero()&&(e.to="0x0000000000000000000000000000000000000000"),null!=e.input&&null==e.data&&(e.data=e.input),null==e.to&&null==e.creates&&(e.creates=s.getContractAddress(e)),!e.raw&&e.v&&e.r&&e.s){var t=[u.stripZeros(u.hexlify(e.nonce)),u.stripZeros(u.hexlify(e.gasPrice)),u.stripZeros(u.hexlify(e.gasLimit)),e.to||"0x",u.stripZeros(u.hexlify(e.value||"0x")),u.hexlify(e.data||"0x"),u.stripZeros(u.hexlify(e.v||"0x")),u.stripZeros(u.hexlify(e.r)),u.stripZeros(u.hexlify(e.s))];e.raw=d.encode(t)}var r=b(k,e),n=e.networkId;return null!=e.chainId&&null==n&&null==r.v&&(n=e.chainId),u.isHexString(n)&&(n=a.bigNumberify(n).toNumber()),"number"!=typeof n&&null!=r.v&&((n=(r.v-35)/2)<0&&(n=0),n=parseInt(n)),"number"!=typeof n&&(n=0),r.networkId=n,null==r.chainId&&null!=n&&(r.chainId=n),r.blockHash&&"x"===r.blockHash.replace(/0/g,"")&&(r.blockHash=null),r}var x={hash:M,parentHash:M,number:A,timestamp:A,nonce:w(u.hexlify),difficulty:function(e){var t=a.bigNumberify(e);try{return t.toNumber()}catch(e){}return null},gasLimit:a.bigNumberify,gasUsed:a.bigNumberify,miner:s.getAddress,extraData:u.hexlify,transactions:w(_(M))},P=c.shallowCopy(x);function I(e,t){return null!=e.author&&null==e.miner&&(e.miner=e.author),b(t?P:x,e)}P.transactions=w(_(N));var T={from:w(s.getAddress),nonce:w(A),gasLimit:w(a.bigNumberify),gasPrice:w(a.bigNumberify),to:w(s.getAddress),value:w(a.bigNumberify),data:w(u.hexlify)};function R(e){return b(T,e)}var O={transactionLogIndex:w(A),transactionIndex:A,blockNumber:A,transactionHash:M,address:s.getAddress,topics:_(M),data:u.hexlify,logIndex:A,blockHash:M};var C={to:w(s.getAddress,null),from:w(s.getAddress,null),contractAddress:w(s.getAddress,null),transactionIndex:A,root:w(M),gasUsed:a.bigNumberify,logsBloom:w(u.hexlify),blockHash:M,transactionHash:M,logs:_(function(e){return b(O,e)}),blockNumber:A,confirmations:w(A,null),cumulativeGasUsed:a.bigNumberify,status:w(A)};function L(e){return Array.isArray(e)?e.forEach(function(e){L(e)}):null!=e&&M(e),e}var D={fromBlock:w(S,void 0),toBlock:w(S,void 0),address:w(s.getAddress,void 0),topics:w(L,void 0)},B={blockHash:w(M,void 0),address:w(s.getAddress,void 0),topics:w(L,void 0)};var U,F,j={blockNumber:w(A),blockHash:w(M),transactionIndex:A,removed:w(function(e){if("boolean"==typeof e)return e;if("string"==typeof e){if("true"===e)return!0;if("false"===e)return!1}throw new Error("invaid boolean - "+e)}),address:s.getAddress,data:(U=u.hexlify,F="0x",function(e){return e?U(e):F}),topics:_(M),transactionHash:M,logIndex:A};function G(e){return b(j,e)}function H(e){return e.map(function(e){return"string"==typeof e?e:Array.isArray(e)?(e.forEach(function(e){null!==e&&32!==u.hexDataLength(e)&&m.throwError("invalid topic",m.INVALID_ARGUMENT,{argument:"topic",value:e})}),e.join(",")):null===e?"":m.throwError("invalid topic value",m.INVALID_ARGUMENT,{argument:"topic",value:e})}).join("&")}function z(e){if("string"==typeof e){if(20===u.hexDataLength(e))return"address:"+s.getAddress(e);if(e=e.toLowerCase(),32===u.hexDataLength(e))return"tx:"+e;if(-1===e.indexOf(":"))return e}else{if(Array.isArray(e))return"filter::"+H(e);if(e&&"object"==typeof e)return"filter:"+(e.address||"")+":"+H(e.topics||[])}throw new Error("invalid event - "+e)}function V(){return(new Date).getTime()}var K,q=(K=g.Provider,i(W,K),W.prototype._doPoll=function(){var u=this;this.getBlockNumber().then(function(s){if(u.polling&&(u._setFastBlockNumber(s),s!==u._lastBlockNumber)){-2===u._emitted.block&&(u._emitted.block=s-1);for(var e=u._emitted.block+1;e<=s;e++)u.emit("block",e);u._emitted.block!==s&&(u._emitted.block=s,Object.keys(u._emitted).forEach(function(e){if("block"!==e){var t=u._emitted[e];"pending"!==t&&12<s-t&&delete u._emitted[e]}})),-2===u._lastBlockNumber&&(u._lastBlockNumber=s-1);var a={},t={};return u._events.forEach(function(e){t[e.tag]=!0}),Object.keys(t).forEach(function(e){var t=e.split(":");switch(t[0]){case"tx":var r=t[1];u.getTransactionReceipt(r).then(function(e){return e&&null!=e.blockNumber&&(u._emitted["t:"+r]=e.blockNumber,u.emit(r,e)),null}).catch(function(e){u.emit("error",e)});break;case"address":var n=t[1];u._balances[n]&&(a[n]=u._balances[n]),u.getBalance(n,"latest").then(function(e){var t=u._balances[n];if(!t||!e.eq(t))return u._balances[n]=e,u.emit(n,e),null}).catch(function(e){u.emit("error",e)});break;case"filter":var i=function(e){return e.split(/&/g).map(function(e){var t=e.split(",");return 1===t.length?""===t[0]?null:e:t.map(function(e){return""===e?null:e})})}(t[2]),o={address:t[1],fromBlock:u._lastBlockNumber+1,toBlock:s,topics:i};o.address||delete o.address,u.getLogs(o).then(function(e){if(0!==e.length)return e.forEach(function(e){u._emitted["b:"+e.blockHash]=e.blockNumber,u._emitted["t:"+e.transactionHash]=e.blockNumber,u.emit(o,e)}),null}).catch(function(e){u.emit("error",e)})}}),u._lastBlockNumber=s,u._balances=a,null}}).catch(function(e){}),this.doPoll()},W.prototype.resetEventsBlock=function(e){this._lastBlockNumber=e-1,this.polling&&this._doPoll()},Object.defineProperty(W.prototype,"network",{get:function(){return this._network},enumerable:!0,configurable:!0}),W.prototype.getNetwork=function(){return this.ready},Object.defineProperty(W.prototype,"blockNumber",{get:function(){return this._fastBlockNumber},enumerable:!0,configurable:!0}),Object.defineProperty(W.prototype,"polling",{get:function(){return null!=this._poller},set:function(e){var t=this;setTimeout(function(){e&&!t._poller?(t._poller=setInterval(t._doPoll.bind(t),t.pollingInterval),t._doPoll()):!e&&t._poller&&(clearInterval(t._poller),t._poller=null)},0)},enumerable:!0,configurable:!0}),Object.defineProperty(W.prototype,"pollingInterval",{get:function(){return this._pollingInterval},set:function(e){var t=this;if("number"!=typeof e||e<=0||parseInt(String(e))!=e)throw new Error("invalid polling interval");this._pollingInterval=e,this._poller&&(clearInterval(this._poller),this._poller=setInterval(function(){t._doPoll()},this._pollingInterval))},enumerable:!0,configurable:!0}),W.prototype._getFastBlockNumber=function(){var t=this,e=V();return e-this._fastQueryDate>2*this._pollingInterval&&(this._fastQueryDate=e,this._fastBlockNumberPromise=this.getBlockNumber().then(function(e){return(null==t._fastBlockNumber||e>t._fastBlockNumber)&&(t._fastBlockNumber=e),t._fastBlockNumber})),this._fastBlockNumberPromise},W.prototype._setFastBlockNumber=function(e){null!=this._fastBlockNumber&&e<this._fastBlockNumber||(this._fastQueryDate=V(),(null==this._fastBlockNumber||e>this._fastBlockNumber)&&(this._fastBlockNumber=e,this._fastBlockNumberPromise=Promise.resolve(e)))},W.prototype.waitForTransaction=function(n,i){var o=this;return null==i&&(i=1),this.getTransactionReceipt(n).then(function(e){return 0===i||e&&e.confirmations>=i?e:new Promise(function(t){var r=function(e){e.confirmations<i||(o.removeListener(n,r),t(e))};o.on(n,r)})})},W.prototype.getBlockNumber=function(){var r=this;return this.ready.then(function(){return r.perform("getBlockNumber",{}).then(function(e){var t=parseInt(e);if(t!=e)throw new Error("invalid response - getBlockNumber");return r._setFastBlockNumber(t),t})})},W.prototype.getGasPrice=function(){var e=this;return this.ready.then(function(){return e.perform("getGasPrice",{}).then(function(e){return a.bigNumberify(e)})})},W.prototype.getBalance=function(e,t){var n=this;return this.ready.then(function(){return c.resolveProperties({addressOrName:e,blockTag:t}).then(function(e){var t=e.addressOrName,r=e.blockTag;return n._getAddress(t).then(function(e){var t={address:e,blockTag:S(r)};return n.perform("getBalance",t).then(function(e){return a.bigNumberify(e)})})})})},W.prototype.getTransactionCount=function(e,t){var n=this;return this.ready.then(function(){return c.resolveProperties({addressOrName:e,blockTag:t}).then(function(e){var t=e.addressOrName,r=e.blockTag;return n._getAddress(t).then(function(e){var t={address:e,blockTag:S(r)};return n.perform("getTransactionCount",t).then(function(e){return a.bigNumberify(e).toNumber()})})})})},W.prototype.getCode=function(e,t){var n=this;return this.ready.then(function(){return c.resolveProperties({addressOrName:e,blockTag:t}).then(function(e){var t=e.addressOrName,r=e.blockTag;return n._getAddress(t).then(function(e){var t={address:e,blockTag:S(r)};return n.perform("getCode",t).then(function(e){return u.hexlify(e)})})})})},W.prototype.getStorageAt=function(e,t,r){var i=this;return this.ready.then(function(){return c.resolveProperties({addressOrName:e,position:t,blockTag:r}).then(function(e){var t=e.addressOrName,r=e.position,n=e.blockTag;return i._getAddress(t).then(function(e){var t={address:e,blockTag:S(n),position:u.hexStripZeros(u.hexlify(r))};return i.perform("getStorageAt",t).then(function(e){return u.hexlify(e)})})})})},W.prototype.sendTransaction=function(e){var n=this;return this.ready.then(function(){return c.resolveProperties({signedTransaction:e}).then(function(e){var t=e.signedTransaction,r={signedTransaction:u.hexlify(t)};return n.perform("sendTransaction",r).then(function(e){return n._wrapTransaction(p.parse(t),e)},function(e){throw e.transaction=p.parse(t),e.transaction.hash&&(e.transactionHash=e.transaction.hash),e})})})},W.prototype._wrapTransaction=function(r,e){var n=this;if(null!=e&&32!==u.hexDataLength(e))throw new Error("invalid response - sendTransaction");var t=r;return null!=e&&r.hash!==e&&m.throwError("Transaction hash mismatch from Provider.sendTransaction.",m.UNKNOWN_ERROR,{expectedHash:r.hash,returnedHash:e}),t.wait=function(t){return 0!==t&&(n._emitted["t:"+r.hash]="pending"),n.waitForTransaction(r.hash,t).then(function(e){return null==e&&0===t?null:(n._emitted["t:"+r.hash]=e.blockNumber,0===e.status&&m.throwError("transaction failed",m.CALL_EXCEPTION,{transactionHash:r.hash,transaction:r}),e)})},t},W.prototype.call=function(e,t){var n=this,r=c.shallowCopy(e);return this.ready.then(function(){return c.resolveProperties({blockTag:t,tx:r}).then(function(e){var r=e.blockTag,t=e.tx;return n._resolveNames(t,["to","from"]).then(function(e){var t={blockTag:S(r),transaction:R(e)};return n.perform("call",t).then(function(e){return u.hexlify(e)})})})})},W.prototype.estimateGas=function(e){var r=this,t={to:e.to,from:e.from,data:e.data,gasPrice:e.gasPrice,value:e.value};return this.ready.then(function(){return c.resolveProperties(t).then(function(e){return r._resolveNames(e,["to","from"]).then(function(e){var t={transaction:R(e)};return r.perform("estimateGas",t).then(function(e){return a.bigNumberify(e)})})})})},W.prototype.getBlock=function(e,o){var s=this;return this.ready.then(function(){return c.resolveProperties({blockHashOrBlockTag:e}).then(function(e){var t=e.blockHashOrBlockTag;try{var r=u.hexlify(t);if(32===u.hexDataLength(r))return y.poll(function(){return s.perform("getBlock",{blockHash:r,includeTransactions:!!o}).then(function(e){return null==e?null==s._emitted["b:"+r]?null:void 0:I(e,o)})},{onceBlock:s})}catch(e){}try{var n=-128,i=S(t);return u.isHexString(i)&&(n=parseInt(i.substring(2),16)),y.poll(function(){return s.perform("getBlock",{blockTag:i,includeTransactions:!!o}).then(function(e){return null!=e?I(e,o):n<=s._emitted.block?void 0:null})},{onceBlock:s})}catch(e){}throw new Error("invalid block hash or block tag")})})},W.prototype.getTransaction=function(e){var n=this;return this.ready.then(function(){return c.resolveProperties({transactionHash:e}).then(function(e){var t=e.transactionHash,r={transactionHash:M(t,!0)};return y.poll(function(){return n.perform("getTransaction",r).then(function(e){if(null==e)return null==n._emitted["t:"+t]?null:void 0;var r=W.checkTransactionResponse(e);if(null==r.blockNumber)r.confirmations=0;else if(null==r.confirmations)return n._getFastBlockNumber().then(function(e){var t=e-r.blockNumber+1;return t<=0&&(t=1),r.confirmations=t,n._wrapTransaction(r)});return n._wrapTransaction(r)})},{onceBlock:n})})})},W.prototype.getTransactionReceipt=function(e){var n=this;return this.ready.then(function(){return c.resolveProperties({transactionHash:e}).then(function(e){var t=e.transactionHash,r={transactionHash:M(t,!0)};return y.poll(function(){return n.perform("getTransactionReceipt",r).then(function(e){if(null==e)return null==n._emitted["t:"+t]?null:void 0;if(null!=e.blockHash){var r=function(e){var t=b(C,e);return t.logs.forEach(function(e,t){null==e.transactionLogIndex&&(e.transactionLogIndex=t)}),null!=e.status&&(t.byzantium=!0),t}(e);if(null==r.blockNumber)r.confirmations=0;else if(null==r.confirmations)return n._getFastBlockNumber().then(function(e){var t=e-r.blockNumber+1;return t<=0&&(t=1),r.confirmations=t,r});return r}})},{onceBlock:n})})})},W.prototype.getLogs=function(e){var r=this;return this.ready.then(function(){return c.resolveProperties(e).then(function(e){return r._resolveNames(e,["address"]).then(function(e){var t={filter:function(e){return e&&e.blockHash?b(B,e):b(D,e)}(e)};return r.perform("getLogs",t).then(function(e){return _(G)(e)})})})})},W.prototype.getEtherPrice=function(){var e=this;return this.ready.then(function(){return e.perform("getEtherPrice",{}).then(function(e){return e})})},W.prototype._getAddress=function(t){return this.resolveName(t).then(function(e){return null==e&&m.throwError("ENS name not configured",m.UNSUPPORTED_OPERATION,{operation:"resolveName("+JSON.stringify(t)+")"}),e})},W.prototype._resolveNames=function(e,t){var r=[],n=c.shallowCopy(e);return t.forEach(function(t){null!=n[t]&&r.push(this._getAddress(n[t]).then(function(e){n[t]=e}))},this),Promise.all(r).then(function(){return n})},W.prototype._getResolver=function(n){var i=this;return this.getNetwork().then(function(e){e.ensAddress||m.throwError("network does not support ENS",m.UNSUPPORTED_OPERATION,{operation:"ENS",network:e.name});var t="0x0178b8bf"+h.namehash(n).substring(2),r={to:e.ensAddress,data:t};return i.call(r).then(function(e){if(32!==u.hexDataLength(e))return null;var t=s.getAddress(u.hexDataSlice(e,12));return t===l.AddressZero?null:t})})},W.prototype.resolveName=function(t){var r=this;if(t instanceof Promise)return t.then(function(e){return r.resolveName(e)});try{return Promise.resolve(s.getAddress(t))}catch(e){if(u.isHexString(t))throw e}var n=this,i=h.namehash(t);return this._getResolver(t).then(function(e){if(null==e)return null;var t={to:e,data:"0x3b3b57de"+i.substring(2)};return n.call(t)}).then(function(e){if(32!==u.hexDataLength(e))return null;var t=s.getAddress(u.hexDataSlice(e,12));return t===l.AddressZero?null:t})},W.prototype.lookupAddress=function(n){var t=this;if(n instanceof Promise)return n.then(function(e){return t.lookupAddress(e)});var e=(n=s.getAddress(n)).substring(2)+".addr.reverse",r=h.namehash(e),i=this;return this._getResolver(e).then(function(e){if(!e)return null;var t={to:e,data:"0x691f3431"+r.substring(2)};return i.call(t)}).then(function(e){if(null==e)return null;if((e=e.substring(2)).length<64)return null;if((e=e.substring(64)).length<64)return null;var t=a.bigNumberify("0x"+e.substring(0,64)).toNumber();if(2*t>(e=e.substring(64)).length)return null;var r=v.toUtf8String("0x"+e.substring(0,2*t));return i.resolveName(r).then(function(e){return e!=n?null:r})})},W.checkTransactionResponse=function(e){return N(e)},W.prototype.doPoll=function(){},W.prototype.perform=function(e,t){return m.throwError(e+" not implemented",m.NOT_IMPLEMENTED,{operation:e}),null},W.prototype._startPending=function(){m.warn("WARNING: this provider does not support pending events")},W.prototype._stopPending=function(){},W.prototype._addEventListener=function(e,t,r){this._events.push({tag:z(e),listener:t,once:r}),"pending"===e&&this._startPending(),this.polling=!0},W.prototype.on=function(e,t){return this._addEventListener(e,t,!1),this},W.prototype.once=function(e,t){return this._addEventListener(e,t,!0),this},W.prototype.addEventListener=function(e,t){return this.on(e,t)},W.prototype.emit=function(e){for(var t=this,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var i=!1,o=z(e);return this._events=this._events.filter(function(e){return e.tag!==o||(setTimeout(function(){e.listener.apply(t,r)},0),i=!0,!e.once)}),0===this.listenerCount()&&(this.polling=!1),i},W.prototype.listenerCount=function(e){if(!e)return this._events.length;var t=z(e);return this._events.filter(function(e){return e.tag===t}).length},W.prototype.listeners=function(e){var t=z(e);return this._events.filter(function(e){return e.tag===t}).map(function(e){return e.listener})},W.prototype.removeAllListeners=function(e){if(null==e)this._events=[],this._stopPending();else{var t=z(e);this._events=this._events.filter(function(e){return e.tag!==t}),"pending"===e&&this._stopPending()}return 0===this._events.length&&(this.polling=!1),this},W.prototype.removeListener=function(e,t){var r=!1,n=z(e);return this._events=this._events.filter(function(e){return e.tag!==n||e.listener!=t||!!r||!(r=!0)}),"pending"===e&&0===this.listenerCount("pending")&&this._stopPending(),0===this.listenerCount()&&(this.polling=!1),this},W);function W(e){var t=K.call(this)||this;if(m.checkNew(t,g.Provider),e instanceof Promise)c.defineReadOnly(t,"ready",e.then(function(e){return c.defineReadOnly(t,"_network",e),e})),t.ready.catch(function(e){});else{var r=f.getNetwork(null==e?"homestead":e);r?(c.defineReadOnly(t,"_network",r),c.defineReadOnly(t,"ready",Promise.resolve(t._network))):m.throwError("invalid network",m.INVALID_ARGUMENT,{arg:"network",value:e})}return t._lastBlockNumber=-2,t._balances={},t._events=[],t._pollingInterval=4e3,t._emitted={block:-2},t._fastQueryDate=0,t}r.BaseProvider=q,c.defineReadOnly(g.Provider,"inherits",c.inheritable(g.Provider))},{"../constants":3,"../errors":5,"../utils/address":60,"../utils/bignumber":63,"../utils/bytes":64,"../utils/hash":65,"../utils/networks":72,"../utils/properties":74,"../utils/rlp":76,"../utils/transaction":83,"../utils/utf8":85,"../utils/web":86,"./abstract-provider":50}],52:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("./base-provider"),a=e("../utils/bytes"),u=e("../utils/properties"),l=e("../utils/web"),h=o(e("../errors"));function f(e){var t=[];for(var r in e)if(null!=e[r]){var n=a.hexlify(e[r]);!{gasLimit:!0,gasPrice:!0,nonce:!0,value:!0}[r]||(n=a.hexStripZeros(n)),t.push(r+"="+n)}return t.join("&")}function c(e){if(0==e.status&&("No records found"===e.message||"No transactions found"===e.message))return e.result;if(1==e.status&&"OK"==e.message)return e.result;var t=new Error("invalid response");throw t.result=JSON.stringify(e),t}function d(e){if("2.0"!=e.jsonrpc)throw(t=new Error("invalid response")).result=JSON.stringify(e),t;if(e.error){var t=new Error(e.error.message||"unknown error");throw e.error.code&&(t.code=e.error.code),e.error.data&&(t.data=e.error.data),t}return e.result}function p(e){if("pending"===e)throw new Error("pending not supported");return"latest"===e?e:parseInt(e.substring(2),16)}var v,y=(v=s.BaseProvider,i(m,v),m.prototype.perform=function(e,t){var r=this,n=this.baseUrl,i="";function o(t,e){return l.fetchJson(t,null,e||d).then(function(e){return r.emit("debug",{action:"perform",request:t,response:e,provider:r}),e})}switch(this.apiKey&&(i+="&apikey="+this.apiKey),e){case"getBlockNumber":return o(n+="/api?module=proxy&action=eth_blockNumber"+i);case"getGasPrice":return o(n+="/api?module=proxy&action=eth_gasPrice"+i);case"getBalance":return n+="/api?module=account&action=balance&address="+t.address,o(n+="&tag="+t.blockTag+i,c);case"getTransactionCount":return n+="/api?module=proxy&action=eth_getTransactionCount&address="+t.address,o(n+="&tag="+t.blockTag+i);case"getCode":return n+="/api?module=proxy&action=eth_getCode&address="+t.address,o(n+="&tag="+t.blockTag+i,d);case"getStorageAt":return n+="/api?module=proxy&action=eth_getStorageAt&address="+t.address,n+="&position="+t.position,o(n+="&tag="+t.blockTag+i,d);case"sendTransaction":return n+="/api?module=proxy&action=eth_sendRawTransaction&hex="+t.signedTransaction,o(n+=i).catch(function(e){throw e.responseText&&(0<=e.responseText.toLowerCase().indexOf("insufficient funds")&&h.throwError("insufficient funds",h.INSUFFICIENT_FUNDS,{}),0<=e.responseText.indexOf("same hash was already imported")&&h.throwError("nonce has already been used",h.NONCE_EXPIRED,{}),0<=e.responseText.indexOf("another transaction with same nonce")&&h.throwError("replacement fee too low",h.REPLACEMENT_UNDERPRICED,{})),e});case"getBlock":if(t.blockTag)return n+="/api?module=proxy&action=eth_getBlockByNumber&tag="+t.blockTag,t.includeTransactions?n+="&boolean=true":n+="&boolean=false",o(n+=i);throw new Error("getBlock by blockHash not implmeneted");case"getTransaction":return n+="/api?module=proxy&action=eth_getTransactionByHash&txhash="+t.transactionHash,o(n+=i);case"getTransactionReceipt":return n+="/api?module=proxy&action=eth_getTransactionReceipt&txhash="+t.transactionHash,o(n+=i);case"call":if(n+="/api?module=proxy&action=eth_call"+(s=(s=f(t.transaction))&&"&"+s),"latest"!==t.blockTag)throw new Error("EtherscanProvider does not support blockTag for call");return o(n+=i);case"estimateGas":var s;return n+="/api?module=proxy&action=eth_estimateGas&"+(s=(s=f(t.transaction))&&"&"+s),o(n+=i);case"getLogs":n+="/api?module=logs&action=getLogs";try{if(t.filter.fromBlock&&(n+="&fromBlock="+p(t.filter.fromBlock)),t.filter.toBlock&&(n+="&toBlock="+p(t.filter.toBlock)),t.filter.blockHash)try{h.throwError("Etherscan does not support blockHash filters",h.UNSUPPORTED_OPERATION,{operation:"getLogs(blockHash)"})}catch(e){return Promise.reject(e)}if(t.filter.address&&(n+="&address="+t.filter.address),t.filter.topics&&0<t.filter.topics.length){if(1<t.filter.topics.length)throw new Error("unsupported topic format");var a=t.filter.topics[0];if("string"!=typeof a||66!==a.length)throw new Error("unsupported topic0 format");n+="&topic0="+a}}catch(e){return Promise.reject(e)}var u=this;return o(n+=i,c).then(function(e){var r={},n=Promise.resolve();return e.forEach(function(t){n=n.then(function(){return null!=t.blockHash?null:(t.blockHash=r[t.transactionHash],null==t.blockHash?u.getTransaction(t.transactionHash).then(function(e){return r[t.transactionHash]=e.blockHash,t.blockHash=e.blockHash,null}):null)})}),n.then(function(){return e})});case"getEtherPrice":return"homestead"!==this.network.name?Promise.resolve(0):(n+="/api?module=stats&action=ethprice",o(n+=i,c).then(function(e){return parseFloat(e.ethusd)}))}return v.prototype.perform.call(this,e,t)},m.prototype.getHistory=function(e,t,r){var n=this,i=this.baseUrl,o="";return this.apiKey&&(o+="&apikey="+this.apiKey),null==t&&(t=0),null==r&&(r=99999999),this.resolveName(e).then(function(e){return i+="/api?module=account&action=txlist&address="+e,i+="&startblock="+t,i+="&endblock="+r,i+="&sort=asc"+o,l.fetchJson(i,null,c).then(function(e){n.emit("debug",{action:"getHistory",request:i,response:e,provider:n});var r=[];return e.forEach(function(t){["contractAddress","to"].forEach(function(e){""==t[e]&&delete t[e]}),null==t.creates&&null!=t.contractAddress&&(t.creates=t.contractAddress);var e=s.BaseProvider.checkTransactionResponse(t);t.timeStamp&&(e.timestamp=parseInt(t.timeStamp)),r.push(e)}),r})})},m);function m(e,t){var r=v.call(this,e)||this;h.checkNew(r,m);var n="invalid";r.network&&(n=r.network.name);var i=null;switch(n){case"homestead":i="https://api.etherscan.io";break;case"ropsten":i="https://api-ropsten.etherscan.io";break;case"rinkeby":i="https://api-rinkeby.etherscan.io";break;case"kovan":i="https://api-kovan.etherscan.io";break;case"goerli":i="https://api-goerli.etherscan.io";break;default:throw new Error("unsupported network")}return u.defineReadOnly(r,"baseUrl",i),u.defineReadOnly(r,"apiKey",t),r}r.EtherscanProvider=y},{"../errors":5,"../utils/bytes":64,"../utils/properties":74,"../utils/web":86,"./base-provider":51}],53:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("./base-provider"),a=o(e("../errors"));function u(t){var r=!0,n=null;return t.forEach(function(e){null!=e?null!=n?n.name===e.name&&n.chainId===e.chainId&&(n.ensAddress===e.ensAddress||null==n.ensAddress&&null==e.ensAddress)||a.throwError("provider mismatch",a.INVALID_ARGUMENT,{arg:"networks",value:t}):n=e:r=!1}),r}var l,h=(l=s.BaseProvider,i(f,l),Object.defineProperty(f.prototype,"providers",{get:function(){return this._providers.slice(0)},enumerable:!0,configurable:!0}),f.prototype.perform=function(i,o){var s=this.providers;return new Promise(function(r,e){var n=null;!function t(){s.length?s.shift().perform(i,o).then(function(e){return r(e)}).catch(function(e){n=n||e,setTimeout(t,0)}):e(n)}()})},f);function f(e){var t=this;if(0===e.length)throw new Error("no providers");if(u(e.map(function(e){return e.network})))t=l.call(this,e[0].network)||this;else{var r=Promise.all(e.map(function(e){return e.getNetwork()})).then(function(e){return u(e)||a.throwError("getNetwork returned null",a.UNKNOWN_ERROR,{}),e[0]});t=l.call(this,r)||this}return a.checkNew(t,f),t._providers=e.slice(0),t}r.FallbackProvider=h},{"../errors":5,"./base-provider":51}],54:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./abstract-provider");r.Provider=n.Provider;var i=e("./base-provider");r.BaseProvider=i.BaseProvider;var o=e("./etherscan-provider");r.EtherscanProvider=o.EtherscanProvider;var s=e("./fallback-provider");r.FallbackProvider=s.FallbackProvider;var a=e("./ipc-provider");r.IpcProvider=a.IpcProvider;var u=e("./infura-provider");r.InfuraProvider=u.InfuraProvider;var l=e("./json-rpc-provider");r.JsonRpcProvider=l.JsonRpcProvider,r.JsonRpcSigner=l.JsonRpcSigner;var h=e("./web3-provider");r.Web3Provider=h.Web3Provider},{"./abstract-provider":50,"./base-provider":51,"./etherscan-provider":52,"./fallback-provider":53,"./infura-provider":55,"./ipc-provider":56,"./json-rpc-provider":57,"./web3-provider":58}],55:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,a=e("./json-rpc-provider"),u=e("../utils/bytes"),l=e("../utils/networks"),h=e("../utils/properties"),f=o(e("../errors")),c=(s=a.JsonRpcProvider,i(d,s),d.prototype._startPending=function(){f.warn("WARNING: INFURA does not support pending filters")},d.prototype.getSigner=function(e){return f.throwError("INFURA does not support signing",f.UNSUPPORTED_OPERATION,{operation:"getSigner"})},d.prototype.listAccounts=function(){return Promise.resolve([])},d);function d(e,t){var r=this,n=l.getNetwork(null==e?"homestead":e);null==t&&(t="7d0d81d0919f4f05b9ab6634be01ee73");var i=null;switch(n.name){case"homestead":i="mainnet.infura.io";break;case"ropsten":i="ropsten.infura.io";break;case"rinkeby":i="rinkeby.infura.io";break;case"goerli":i="goerli.infura.io";break;case"kovan":i="kovan.infura.io";break;default:f.throwError("unsupported network",f.INVALID_ARGUMENT,{argument:"network",value:e})}return u.isHexString("0x"+t,16)?(r=s.call(this,"https://"+i+"/v3/"+t,n)||this,h.defineReadOnly(r,"apiAccessToken",null),h.defineReadOnly(r,"projectId",t)):(f.warn("The legacy INFURA apiAccesToken API is deprecated; please upgrade to a Project ID instead (see INFURA dshboard; https://infura.io)"),r=s.call(this,"https://"+i+"/"+t,n)||this,h.defineReadOnly(r,"apiAccessToken",t),h.defineReadOnly(r,"projectId",null)),f.checkNew(r,d),r}r.InfuraProvider=c},{"../errors":5,"../utils/bytes":64,"../utils/networks":72,"../utils/properties":74,"./json-rpc-provider":57}],56:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0})},{}],57:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("./base-provider"),a=e("../abstract-signer"),u=o(e("../errors")),l=e("../utils/address"),h=e("../utils/bytes"),f=e("../utils/networks"),c=e("../utils/properties"),d=e("../utils/utf8"),p=e("../utils/web");function v(e){if(e.error){var t=new Error(e.error.message);throw t.code=e.error.code,t.data=e.error.data,t}return e.result}function y(e){return e?e.toLowerCase():e}var m,g={},b=42,w=(m=a.Signer,i(_,m),_.prototype.getAddress=function(){var t=this;return this._address?Promise.resolve(this._address):this.provider.send("eth_accounts",[]).then(function(e){return e.length<=t._index&&u.throwError("unknown account #"+t._index,u.UNSUPPORTED_OPERATION,{operation:"getAddress"}),t._address=l.getAddress(e[t._index]),t._address})},_.prototype.getBalance=function(e){return this.provider.getBalance(this.getAddress(),e)},_.prototype.getTransactionCount=function(e){return this.provider.getTransactionCount(this.getAddress(),e)},_.prototype.sendUncheckedTransaction=function(e){var n=this;e=c.shallowCopy(e);var t=this.getAddress().then(function(e){return e=e&&e.toLowerCase()});if(null==e.gasLimit){var r=c.shallowCopy(e);r.from=t,e.gasLimit=this.provider.estimateGas(r)}return Promise.all([c.resolveProperties(e),t]).then(function(e){var t=e[0],r=E.hexlifyTransaction(t);return r.from=e[1],n.provider.send("eth_sendTransaction",[r]).then(function(e){return e},function(e){throw e.responseText&&(0<=e.responseText.indexOf("insufficient funds")&&u.throwError("insufficient funds",u.INSUFFICIENT_FUNDS,{transaction:t}),0<=e.responseText.indexOf("nonce too low")&&u.throwError("nonce has already been used",u.NONCE_EXPIRED,{transaction:t}),0<=e.responseText.indexOf("replacement transaction underpriced")&&u.throwError("replacement fee too low",u.REPLACEMENT_UNDERPRICED,{transaction:t})),e})})},_.prototype.sendTransaction=function(e){var r=this;return this.sendUncheckedTransaction(e).then(function(t){return p.poll(function(){return r.provider.getTransaction(t).then(function(e){if(null!==e)return r.provider._wrapTransaction(e,t)})},{fastRetry:250,onceBlock:r.provider}).catch(function(e){throw e.transactionHash=t,e})})},_.prototype.signMessage=function(e){var t=this,r="string"==typeof e?d.toUtf8Bytes(e):e;return this.getAddress().then(function(e){return t.provider.send("eth_sign",[e.toLowerCase(),h.hexlify(r)])})},_.prototype.unlock=function(t){var r=this.provider;return this.getAddress().then(function(e){return r.send("personal_unlockAccount",[e.toLowerCase(),t,null])})},_);function _(e,t,r){var n=m.call(this)||this;if(u.checkNew(n,_),e!==g)throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");return c.defineReadOnly(n,"provider",t),r?"string"==typeof r?c.defineReadOnly(n,"_address",l.getAddress(r)):"number"==typeof r?c.defineReadOnly(n,"_index",r):u.throwError("invalid address or index",u.INVALID_ARGUMENT,{argument:"addressOrIndex",value:r}):c.defineReadOnly(n,"_index",0),n}r.JsonRpcSigner=w;var M,A={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0},E=(M=s.BaseProvider,i(S,M),S.prototype.getSigner=function(e){return new w(g,this,e)},S.prototype.listAccounts=function(){return this.send("eth_accounts",[]).then(function(e){return e.map(function(e){return l.getAddress(e)})})},S.prototype.send=function(e,t){var r=this,n={method:e,params:t,id:b++,jsonrpc:"2.0"};return p.fetchJson(this.connection,JSON.stringify(n),v).then(function(e){return r.emit("debug",{action:"send",request:n,response:e,provider:r}),e})},S.prototype.perform=function(e,t){switch(e){case"getBlockNumber":return this.send("eth_blockNumber",[]);case"getGasPrice":return this.send("eth_gasPrice",[]);case"getBalance":return this.send("eth_getBalance",[y(t.address),t.blockTag]);case"getTransactionCount":return this.send("eth_getTransactionCount",[y(t.address),t.blockTag]);case"getCode":return this.send("eth_getCode",[y(t.address),t.blockTag]);case"getStorageAt":return this.send("eth_getStorageAt",[y(t.address),t.position,t.blockTag]);case"sendTransaction":return this.send("eth_sendRawTransaction",[t.signedTransaction]).catch(function(e){throw e.responseText&&(0<e.responseText.indexOf("insufficient funds")&&u.throwError("insufficient funds",u.INSUFFICIENT_FUNDS,{}),0<e.responseText.indexOf("nonce too low")&&u.throwError("nonce has already been used",u.NONCE_EXPIRED,{}),0<e.responseText.indexOf("replacement transaction underpriced")&&u.throwError("replacement fee too low",u.REPLACEMENT_UNDERPRICED,{})),e});case"getBlock":return t.blockTag?this.send("eth_getBlockByNumber",[t.blockTag,!!t.includeTransactions]):t.blockHash?this.send("eth_getBlockByHash",[t.blockHash,!!t.includeTransactions]):Promise.reject(new Error("invalid block tag or block hash"));case"getTransaction":return this.send("eth_getTransactionByHash",[t.transactionHash]);case"getTransactionReceipt":return this.send("eth_getTransactionReceipt",[t.transactionHash]);case"call":return this.send("eth_call",[S.hexlifyTransaction(t.transaction,{from:!0}),t.blockTag]);case"estimateGas":return this.send("eth_estimateGas",[S.hexlifyTransaction(t.transaction,{from:!0})]);case"getLogs":return t.filter&&null!=t.filter.address&&(t.filter.address=y(t.filter.address)),this.send("eth_getLogs",[t.filter])}return u.throwError(e+" not implemented",u.NOT_IMPLEMENTED,{operation:e}),null},S.prototype._startPending=function(){if(null==this._pendingFilter){var r=this,n=this.send("eth_newPendingTransactionFilter",[]);(this._pendingFilter=n).then(function(t){return function e(){r.send("eth_getFilterChanges",[t]).then(function(e){if(r._pendingFilter!=n)return null;var t=Promise.resolve();return e.forEach(function(e){r._emitted["t:"+e.toLowerCase()]="pending",t=t.then(function(){return r.getTransaction(e).then(function(e){return r.emit("pending",e),null})})}),t.then(function(){return function(t){return new Promise(function(e){setTimeout(function(){e()},t)})}(1e3)})}).then(function(){if(r._pendingFilter==n)return setTimeout(function(){e()},0),null;r.send("eth_uninstallFilter",[t])}).catch(function(e){})}(),t}).catch(function(e){})}},S.prototype._stopPending=function(){this._pendingFilter=null},S.hexlifyTransaction=function(r,e){var t=c.shallowCopy(A);if(e)for(var n in e)e[n]&&(t[n]=!0);c.checkProperties(r,t);var i={};return["gasLimit","gasPrice","nonce","value"].forEach(function(e){if(null!=r[e]){var t=h.hexStripZeros(h.hexlify(r[e]));"gasLimit"===e&&(e="gas"),i[e]=t}}),["from","to","data"].forEach(function(e){null!=r[e]&&(i[e]=h.hexlify(r[e]))}),i},S);function S(e,t){var n=this;if("string"==typeof e&&null===t&&f.getNetwork(e)&&(t=e,e=null),t)n=M.call(this,t)||this;else{var r=new Promise(function(t,r){setTimeout(function(){n.send("net_version",[]).then(function(e){return t(f.getNetwork(parseInt(e)))}).catch(function(e){r(e)})})});n=M.call(this,r)||this}return u.checkNew(n,S),e=e||"http://localhost:8545",n.connection="string"==typeof e?{url:e}:e,n}r.JsonRpcProvider=E},{"../abstract-signer":2,"../errors":5,"../utils/address":60,"../utils/bytes":64,"../utils/networks":72,"../utils/properties":74,"../utils/utf8":85,"../utils/web":86,"./base-provider":51}],58:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,a=e("./json-rpc-provider"),u=e("../utils/properties"),l=o(e("../errors")),h=42,f=(s=a.JsonRpcProvider,i(c,s),c.prototype.send=function(t,r){var o=this;return"eth_sign"==t&&this._web3Provider.isMetaMask&&(t="personal_sign",r=[r[1],r[0]]),new Promise(function(n,i){var e={method:t,params:r,id:h++,jsonrpc:"2.0"};o._sendAsync(e,function(e,t){if(e)i(e);else{if(t.error){var r=new Error(t.error.message);return r.code=t.error.code,r.data=t.error.data,void i(r)}n(t.result)}})})},c);function c(e,t){var r=s.call(this,e.host||e.path||"",t)||this;return l.checkNew(r,c),e&&(e.sendAsync?r._sendAsync=e.sendAsync.bind(e):e.send&&(r._sendAsync=e.send.bind(e))),e&&r._sendAsync||l.throwError("invalid web3Provider",l.INVALID_ARGUMENT,{arg:"web3Provider",value:e}),u.defineReadOnly(r,"_web3Provider",e),u.defineReadOnly(r,"provider",e),r}r.Web3Provider=f},{"../errors":5,"../utils/properties":74,"./json-rpc-provider":57}],59:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("../constants"),l=o(e("../errors")),a=e("./address"),u=e("./bignumber"),h=e("./bytes"),f=e("./utf8"),c=e("./properties"),d=new RegExp(/^bytes([0-9]*)$/),p=new RegExp(/^(u?int)([0-9]*)$/),v=new RegExp(/^(.*)\[([0-9]*)\]$/);r.defaultCoerceFunc=function(e,t){var r=e.match(p);return r&&parseInt(r[2])<=48?t.toNumber():t};var y=new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),m=new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");function g(e){return e.match(/^uint($|[^1-9])/)?e="uint256"+e.substring(4):e.match(/^int($|[^1-9])/)&&(e="int256"+e.substring(3)),e}function b(e,t){var r=e;function n(e){throw new Error('unexpected character "'+r[e]+'" at position '+e+' in "'+r+'"')}e=e.replace(/\s/g," ");for(var i={type:"",name:"",state:{allowType:!0}},o=i,s=0;s<e.length;s++){var a=e[s];switch(a){case"(":o.state.allowParams||n(s),o.state.allowType=!1,o.type=g(o.type),o.components=[{type:"",name:"",parent:o,state:{allowType:!0}}],o=o.components[0];break;case")":delete o.state,t&&"indexed"===o.name&&(o.indexed=!0,o.name=""),o.type=g(o.type);var u=o;(o=o.parent)||n(s),delete u.parent,o.state.allowParams=!1,o.state.allowName=!0,o.state.allowArray=!0;break;case",":delete o.state,t&&"indexed"===o.name&&(o.indexed=!0,o.name=""),o.type=g(o.type);var l={type:"",name:"",parent:o.parent,state:{allowType:!0}};o.parent.components.push(l),delete o.parent,o=l;break;case" ":o.state.allowType&&""!==o.type&&(o.type=g(o.type),delete o.state.allowType,o.state.allowName=!0,o.state.allowParams=!0),o.state.allowName&&""!==o.name&&(t&&"indexed"===o.name?(o.indexed=!0,o.name=""):o.state.allowName=!1);break;case"[":o.state.allowArray||n(s),o.type+=a,o.state.allowArray=!1,o.state.allowName=!1,o.state.readArray=!0;break;case"]":o.state.readArray||n(s),o.type+=a,o.state.readArray=!1,o.state.allowArray=!0,o.state.allowName=!0;break;default:o.state.allowType?(o.type+=a,o.state.allowParams=!0,o.state.allowArray=!0):o.state.allowName?(o.name+=a,delete o.state.allowArray):o.state.readArray?o.type+=a:n(s)}}if(o.parent)throw new Error("unexpected eof");return delete i.state,t&&"indexed"===o.name&&(o.indexed=!0,o.name=""),i.type=g(i.type),i}function w(e){return se(r.defaultCoerceFunc,e).type}r.parseParamType=function(e){return b(e,!0)},r.formatParamType=w,r.formatSignature=function(e){return e.name+"("+e.inputs.map(function(e){return w(e)}).join(",")+")"},r.parseSignature=function(e){if("string"==typeof e)return"event "===(e=(e=(e=e.replace(/\s/g," ")).replace(/\(/g," (").replace(/\)/g,") ").replace(/\s+/g," ")).trim()).substring(0,6)?function(e){var t={anonymous:!1,inputs:[],name:"",type:"event"},r=e.match(y);if(!r)throw new Error("invalid event: "+e);if(t.name=r[1].trim(),ie(r[2]).forEach(function(e){(e=b(e,!0)).indexed=!!e.indexed,t.inputs.push(e)}),r[3].split(" ").forEach(function(e){switch(e){case"anonymous":t.anonymous=!0;break;case"":break;default:l.info("unknown modifier: "+e)}}),t.name&&!t.name.match(m))throw new Error('invalid identifier: "'+t.name+'"');return t}(e.substring(6).trim()):("function "===e.substring(0,9)&&(e=e.substring(9)),function(e){var t={constant:!1,gas:null,inputs:[],name:"",outputs:[],payable:!1,stateMutability:null,type:"function"},r=e.split("@");if(1!==r.length){if(2<r.length)throw new Error("invalid signature");if(!r[1].match(/^[0-9]+$/))throw new Error("invalid signature gas");t.gas=u.bigNumberify(r[1]),e=r[0]}var n=(r=e.split(" returns "))[0].match(y);if(!n)throw new Error("invalid signature");if(t.name=n[1].trim(),!t.name.match(m))throw new Error('invalid identifier: "'+n[1]+'"');if(ie(n[2]).forEach(function(e){t.inputs.push(b(e))}),n[3].split(" ").forEach(function(e){switch(e){case"constant":t.constant=!0;break;case"payable":t.payable=!0,t.stateMutability="payable";break;case"pure":t.constant=!0,t.stateMutability="pure";break;case"view":t.constant=!0,t.stateMutability="view";break;case"external":case"public":case"":break;default:l.info("unknown modifier: "+e)}}),1<r.length){var i=r[1].match(y);if(""!=i[1].trim()||""!=i[3].trim())throw new Error("unexpected tokens");ie(i[2]).forEach(function(e){t.outputs.push(b(e))})}if("constructor"===t.name){if(t.type="constructor",t.outputs.length)throw new Error("constructor may not have outputs");delete t.name,delete t.outputs}return t}(e.trim()));throw new Error("unknown signature")};function _(e,t,r,n,i){this.coerceFunc=e,this.name=t,this.type=r,this.localName=n,this.dynamic=i}var M,A=(i(E,M=_),E.prototype.encode=function(e){return this.coder.encode(e)},E.prototype.decode=function(e,t){return this.coder.decode(e,t)},E);function E(e){var t=M.call(this,e.coerceFunc,e.name,e.type,void 0,e.dynamic)||this;return c.defineReadOnly(t,"coder",e),t}var S,k=(i(N,S=_),N.prototype.encode=function(e){return h.arrayify([])},N.prototype.decode=function(e,t){if(t>e.length)throw new Error("invalid null");return{consumed:0,value:this.coerceFunc("null",void 0)}},N);function N(e,t){return S.call(this,e,"null","",t,!1)||this}var x,P=(i(I,x=_),I.prototype.encode=function(t){try{var e=u.bigNumberify(t);if(this.signed){var r=s.MaxUint256.maskn(8*this.size-1);if(e.gt(r))throw new Error("out-of-bounds");if(r=r.add(s.One).mul(s.NegativeOne),e.lt(r))throw new Error("out-of-bounds")}else if(e.lt(s.Zero)||e.gt(s.MaxUint256.maskn(8*this.size)))throw new Error("out-of-bounds");return e=e.toTwos(8*this.size).maskn(8*this.size),this.signed&&(e=e.fromTwos(8*this.size).toTwos(256)),h.padZeros(h.arrayify(e),32)}catch(e){l.throwError("invalid number value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:t})}return null},I.prototype.decode=function(e,t){e.length<t+32&&l.throwError("insufficient data for "+this.name+" type",l.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:h.hexlify(e.slice(t,t+32))});var r=32-this.size,n=u.bigNumberify(e.slice(t+r,t+32));return n=this.signed?n.fromTwos(8*this.size):n.maskn(8*this.size),{consumed:32,value:this.coerceFunc(this.name,n)}},I);function I(e,t,r,n){var i=this,o=(r?"int":"uint")+8*t;return(i=x.call(this,e,o,o,n,!1)||this).size=t,i.signed=r,i}var T,R=new P(function(e,t){return t},32,!1,"none"),O=(i(C,T=_),C.prototype.encode=function(e){return R.encode(e?1:0)},C.prototype.decode=function(e,t){try{var r=R.decode(e,t)}catch(e){throw"insufficient data for uint256 type"===e.reason&&l.throwError("insufficient data for boolean type",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"boolean",value:e.value}),e}return{consumed:r.consumed,value:this.coerceFunc("bool",!r.value.isZero())}},C);function C(e,t){return T.call(this,e,"bool","bool",t,!1)||this}var L,D=(i(B,L=_),B.prototype.encode=function(t){var e=new Uint8Array(32);try{var r=h.arrayify(t);if(r.length!==this.length)throw new Error("incorrect data length");e.set(r)}catch(e){l.throwError("invalid "+this.name+" value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:e.value||t})}return e},B.prototype.decode=function(e,t){return e.length<t+32&&l.throwError("insufficient data for "+this.name+" type",l.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:h.hexlify(e.slice(t,t+32))}),{consumed:32,value:this.coerceFunc(this.name,h.hexlify(e.slice(t,t+this.length)))}},B);function B(e,t,r){var n=this,i="bytes"+t;return(n=L.call(this,e,i,i,r,!1)||this).length=t,n}var U,F=(i(j,U=_),j.prototype.encode=function(t){var e=new Uint8Array(32);try{e.set(h.arrayify(a.getAddress(t)),12)}catch(e){l.throwError("invalid address",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"address",value:t})}return e},j.prototype.decode=function(e,t){return e.length<t+32&&l.throwError("insufficuent data for address type",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"address",value:h.hexlify(e.slice(t,t+32))}),{consumed:32,value:this.coerceFunc("address",a.getAddress(h.hexlify(e.slice(t+12,t+32))))}},j);function j(e,t){return U.call(this,e,"address","address",t,!1)||this}function G(e){var t=32*Math.ceil(e.length/32),r=new Uint8Array(t-e.length);return h.concat([R.encode(e.length),e,r])}function H(e,t,r){e.length<t+32&&l.throwError("insufficient data for dynamicBytes length",l.INVALID_ARGUMENT,{arg:r,coderType:"dynamicBytes",value:h.hexlify(e.slice(t,t+32))});var n=R.decode(e,t).value;try{n=n.toNumber()}catch(e){l.throwError("dynamic bytes count too large",l.INVALID_ARGUMENT,{arg:r,coderType:"dynamicBytes",value:n.toString()})}return e.length<t+32+n&&l.throwError("insufficient data for dynamicBytes type",l.INVALID_ARGUMENT,{arg:r,coderType:"dynamicBytes",value:h.hexlify(e.slice(t,t+32+n))}),{consumed:32+32*Math.ceil(n/32),value:e.slice(t+32,t+32+n)}}var z,V=(i(K,z=_),K.prototype.encode=function(e){try{return G(h.arrayify(e))}catch(e){l.throwError("invalid bytes value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"bytes",value:e.value})}return null},K.prototype.decode=function(e,t){var r=H(e,t,this.localName);return r.value=this.coerceFunc("bytes",h.hexlify(r.value)),r},K);function K(e,t){return z.call(this,e,"bytes","bytes",t,!0)||this}var q,W=(i(Z,q=_),Z.prototype.encode=function(e){return"string"!=typeof e&&l.throwError("invalid string value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"string",value:e}),G(f.toUtf8Bytes(e))},Z.prototype.decode=function(e,t){var r=H(e,t,this.localName);return r.value=this.coerceFunc("string",f.toUtf8String(r.value)),r},Z);function Z(e,t){return q.call(this,e,"string","string",t,!0)||this}function J(e){return 32*Math.ceil(e/32)}function X(e,r){if(Array.isArray(r));else if(r&&"object"==typeof r){var t=[];e.forEach(function(e){t.push(r[e.localName])}),r=t}else l.throwError("invalid tuple value",l.INVALID_ARGUMENT,{coderType:"tuple",value:r});e.length!==r.length&&l.throwError("types/value length mismatch",l.INVALID_ARGUMENT,{coderType:"tuple",value:r});var n=[];e.forEach(function(e,t){n.push({dynamic:e.dynamic,value:e.encode(r[t])})});var i=0,o=0;n.forEach(function(e){e.dynamic?(i+=32,o+=J(e.value.length)):i+=J(e.value.length)});var s=0,a=i,u=new Uint8Array(i+o);return n.forEach(function(e){e.dynamic?(u.set(R.encode(a),s),s+=32,u.set(e.value,a),a+=J(e.value.length)):(u.set(e.value,s),s+=J(e.value.length))}),u}function $(e,n,i){var o=i,s=0,a=[];return e.forEach(function(e){if(e.dynamic){var t=R.decode(n,i);(r=e.decode(n,o+t.value.toNumber())).consumed=t.consumed}else var r=e.decode(n,i);null!=r.value&&a.push(r.value),i+=r.consumed,s+=r.consumed}),e.forEach(function(e,t){var r=e.localName;r&&("length"===r&&(r="_length"),null==a[r]&&(a[r]=a[t]))}),{value:a,consumed:s}}var Q,Y=(i(ee,Q=_),ee.prototype.encode=function(e){Array.isArray(e)||l.throwError("expected array value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:e});var t=this.length,r=new Uint8Array(0);-1===t&&(t=e.length,r=R.encode(t)),l.checkArgumentCount(t,e.length," in coder array"+(this.localName?" "+this.localName:""));for(var n=[],i=0;i<e.length;i++)n.push(this.coder);return h.concat([r,X(n,e)])},ee.prototype.decode=function(e,t){var r=0,n=this.length;if(-1===n){try{var i=R.decode(e,t)}catch(e){l.throwError("insufficient data for dynamic array length",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:e.value})}try{n=i.value.toNumber()}catch(e){l.throwError("array count too large",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:i.value.toString()})}r+=i.consumed,t+=i.consumed}for(var o=[],s=0;s<n;s++)o.push(new A(this.coder));var a=$(o,e,t);return a.consumed+=r,a.value=this.coerceFunc(this.type,a.value),a},ee);function ee(e,t,r,n){var i=this,o=t.type+"["+(0<=r?r:"")+"]",s=-1===r||t.dynamic;return(i=Q.call(this,e,"array",o,n,s)||this).coder=t,i.length=r,i}var te,re=(i(ne,te=_),ne.prototype.encode=function(e){return X(this.coders,e)},ne.prototype.decode=function(e,t){var r=$(this.coders,e,t);return r.value=this.coerceFunc(this.type,r.value),r},ne);function ne(e,t,r){var n=this,i=!1,o=[];t.forEach(function(e){e.dynamic&&(i=!0),o.push(e.type)});var s="tuple("+o.join(",")+")";return(n=te.call(this,e,"tuple",s,r,i)||this).coders=t,n}function ie(e){e=e.trim();for(var t=[],r="",n=0,i=0;i<e.length;i++){var o=e[i];if(","===o&&0===n)t.push(r),r="";else if(r+=o,"("===o)n++;else if(")"===o&&-1===--n)throw new Error("unbalanced parenthsis")}return r&&t.push(r),t}var oe={address:F,bool:O,string:W,bytes:V};function se(e,t){var r,n=oe[t.type];if(n)return new n(e,t.name);if(r=t.type.match(p))return(0===(i=parseInt(r[2]||"256"))||256<i||i%8!=0)&&l.throwError("invalid "+r[1]+" bit length",l.INVALID_ARGUMENT,{arg:"param",value:t}),new P(e,i/8,"int"===r[1],t.name);if(r=t.type.match(d))return(0===(i=parseInt(r[1]))||32<i)&&l.throwError("invalid bytes length",l.INVALID_ARGUMENT,{arg:"param",value:t}),new D(e,i,t.name);if(r=t.type.match(v)){var i=parseInt(r[2]||"-1");return(t=c.shallowCopy(t)).type=r[1],t=c.deepCopy(t),new Y(e,se(e,t),i,t.name)}return"tuple"===t.type.substring(0,5)?function(t,e,r){var n=[];return(e=e||[]).forEach(function(e){n.push(se(t,e))}),new re(t,n,r)}(e,t.components,t.name):""===t.type?new k(e,t.name):(l.throwError("invalid type",l.INVALID_ARGUMENT,{arg:"type",value:t.type}),null)}var ae=(ue.prototype.encode=function(e,t){e.length!==t.length&&l.throwError("types/values length mismatch",l.INVALID_ARGUMENT,{count:{types:e.length,values:t.length},value:{types:e,values:t}});var r=[];return e.forEach(function(e){var t=null;t="string"==typeof e?b(e):e,r.push(se(this.coerceFunc,t))},this),h.hexlify(new re(this.coerceFunc,r,"_").encode(t))},ue.prototype.decode=function(e,t){var r=[];return e.forEach(function(e){var t=null;t="string"==typeof e?b(e):c.deepCopy(e),r.push(se(this.coerceFunc,t))},this),new re(this.coerceFunc,r,"_").decode(h.arrayify(t),0).value},ue);function ue(e){l.checkNew(this,ue),e=e||r.defaultCoerceFunc,c.defineReadOnly(this,"coerceFunc",e)}r.AbiCoder=ae,r.defaultAbiCoder=new ae},{"../constants":3,"../errors":5,"./address":60,"./bignumber":63,"./bytes":64,"./properties":74,"./utf8":85}],60:[function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("bn.js")),o=e("./bytes"),s=e("./keccak256"),a=e("./rlp"),u=e("../errors");function l(e){"string"==typeof e&&e.match(/^0x[0-9A-Fa-f]{40}$/)||u.throwError("invalid address",u.INVALID_ARGUMENT,{arg:"address",value:e});for(var t=(e=e.toLowerCase()).substring(2).split(""),r=new Uint8Array(40),n=0;n<40;n++)r[n]=t[n].charCodeAt(0);r=o.arrayify(s.keccak256(r));for(var i=0;i<40;i+=2)8<=r[i>>1]>>4&&(t[i]=t[i].toUpperCase()),8<=(15&r[i>>1])&&(t[i+1]=t[i+1].toUpperCase());return"0x"+t.join("")}for(var h={},f=0;f<10;f++)h[String(f)]=String(f);for(f=0;f<26;f++)h[String.fromCharCode(65+f)]=String(10+f);var c,d=Math.floor((c=9007199254740991,Math.log10?Math.log10(c):Math.log(c)/Math.LN10));function p(e){e=(e=e.toUpperCase()).substring(4)+e.substring(0,2)+"00";var t="";for(e.split("").forEach(function(e){t+=h[e]});t.length>=d;){var r=t.substring(0,d);t=parseInt(r,10)%97+t.substring(r.length)}for(var n=String(98-parseInt(t,10)%97);n.length<2;)n="0"+n;return n}function v(e){var t=null;if("string"!=typeof e&&u.throwError("invalid address",u.INVALID_ARGUMENT,{arg:"address",value:e}),e.match(/^(0x)?[0-9a-fA-F]{40}$/))"0x"!==e.substring(0,2)&&(e="0x"+e),t=l(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&u.throwError("bad address checksum",u.INVALID_ARGUMENT,{arg:"address",value:e});else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==p(e)&&u.throwError("bad icap checksum",u.INVALID_ARGUMENT,{arg:"address",value:e}),t=new i.default.BN(e.substring(4),36).toString(16);t.length<40;)t="0"+t;t=l("0x"+t)}else u.throwError("invalid address",u.INVALID_ARGUMENT,{arg:"address",value:e});return t}r.getAddress=v,r.getIcapAddress=function(e){for(var t=new i.default.BN(v(e).substring(2),16).toString(36).toUpperCase();t.length<30;)t="0"+t;return"XE"+p("XE00"+t)+t},r.getContractAddress=function(e){if(!e.from)throw new Error("missing from address");var t=e.nonce;return v("0x"+s.keccak256(a.encode([v(e.from),o.stripZeros(o.hexlify(t))])).substring(26))},r.getCreate2Address=function(e){var t=e.initCodeHash;e.initCode&&(t?s.keccak256(e.initCode)!==t&&u.throwError("initCode/initCodeHash mismatch",u.INVALID_ARGUMENT,{arg:"options",value:e}):t=s.keccak256(e.initCode)),t||u.throwError("missing initCode or initCodeHash",u.INVALID_ARGUMENT,{arg:"options",value:e});var r=v(e.from),n=o.arrayify(e.salt);return 32!==n.length&&u.throwError("invalid salt",u.INVALID_ARGUMENT,{arg:"options",value:e}),v("0x"+s.keccak256(o.concat(["0xff",r,n,t])).substring(26))}},{"../errors":5,"./bytes":64,"./keccak256":71,"./rlp":76,"bn.js":9}],61:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("../utils/bytes");t.exports={decode:function(e){e=atob(e);for(var t=[],r=0;r<e.length;r++)t.push(e.charCodeAt(r));return n.arrayify(t)},encode:function(e){e=n.arrayify(e);for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return btoa(t)}}},{"../utils/bytes":64}],62:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=e("./bytes"),n=e("./properties"),i=(o.prototype.encode=function(e){var t=l.arrayify(e);if(0===t.length)return"";for(var r=[0],n=0;n<t.length;++n){for(var i=t[n],o=0;o<r.length;++o)i+=r[o]<<8,r[o]=i%this.base,i=i/this.base|0;for(;0<i;)r.push(i%this.base),i=i/this.base|0}for(var s="",a=0;0===t[a]&&a<t.length-1;++a)s+=this._leader;for(var u=r.length-1;0<=u;--u)s+=this.alphabet[r[u]];return s},o.prototype.decode=function(e){if("string"!=typeof e)throw new TypeError("Expected String");var t=[];if(0===e.length)return new Uint8Array(t);t.push(0);for(var r=0;r<e.length;r++){var n=this._alphabetMap[e[r]];if(void 0===n)throw new Error("Non-base"+this.base+" character");for(var i=n,o=0;o<t.length;++o)i+=t[o]*this.base,t[o]=255&i,i>>=8;for(;0<i;)t.push(255&i),i>>=8}for(var s=0;e[s]===this._leader&&s<e.length-1;++s)t.push(0);return l.arrayify(new Uint8Array(t.reverse()))},o);function o(e){n.defineReadOnly(this,"alphabet",e),n.defineReadOnly(this,"base",e.length),n.defineReadOnly(this,"_alphabetMap",{}),n.defineReadOnly(this,"_leader",e.charAt(0));for(var t=0;t<e.length;t++)this._alphabetMap[e.charAt(t)]=t}var s=new(r.BaseX=i)("abcdefghijklmnopqrstuvwxyz234567");r.Base32=s;var a=new i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");r.Base58=a},{"./bytes":64,"./properties":74}],63:[function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var o=n(e("bn.js")),s=e("./bytes"),a=e("./properties"),u=i(e("../errors")),l=new o.default.BN(-1);function h(e){var t=e.toString(16);return"-"===t[0]?t.length%2==0?"-0x0"+t.substring(1):"-0x"+t.substring(1):t.length%2==1?"0x0"+t:"0x"+t}function f(e){return d(y(e))}function c(e){return new p(h(e))}function d(e){var t=e._hex;return"-"===t[0]?new o.default.BN(t.substring(3),16).mul(l):new o.default.BN(t.substring(2),16)}var p=(v.prototype.fromTwos=function(e){return c(d(this).fromTwos(e))},v.prototype.toTwos=function(e){return c(d(this).toTwos(e))},v.prototype.abs=function(){return"-"===this._hex[0]?c(d(this).mul(l)):this},v.prototype.add=function(e){return c(d(this).add(f(e)))},v.prototype.sub=function(e){return c(d(this).sub(f(e)))},v.prototype.div=function(e){return y(e).isZero()&&u.throwError("division by zero",u.NUMERIC_FAULT,{operation:"divide",fault:"division by zero"}),c(d(this).div(f(e)))},v.prototype.mul=function(e){return c(d(this).mul(f(e)))},v.prototype.mod=function(e){return c(d(this).mod(f(e)))},v.prototype.pow=function(e){return c(d(this).pow(f(e)))},v.prototype.maskn=function(e){return c(d(this).maskn(e))},v.prototype.eq=function(e){return d(this).eq(f(e))},v.prototype.lt=function(e){return d(this).lt(f(e))},v.prototype.lte=function(e){return d(this).lte(f(e))},v.prototype.gt=function(e){return d(this).gt(f(e))},v.prototype.gte=function(e){return d(this).gte(f(e))},v.prototype.isZero=function(){return d(this).isZero()},v.prototype.toNumber=function(){try{return d(this).toNumber()}catch(e){u.throwError("overflow",u.NUMERIC_FAULT,{operation:"setValue",fault:"overflow",details:e.message})}return null},v.prototype.toString=function(){return d(this).toString(10)},v.prototype.toHexString=function(){return this._hex},v.isBigNumber=function(e){return a.isType(e,"BigNumber")},v);function v(e){if(u.checkNew(this,v),a.setType(this,"BigNumber"),"string"==typeof e)s.isHexString(e)?("0x"==e&&(e="0x0"),a.defineReadOnly(this,"_hex",e)):"-"===e[0]&&s.isHexString(e.substring(1))?a.defineReadOnly(this,"_hex",e):e.match(/^-?[0-9]*$/)?(""==e&&(e="0"),a.defineReadOnly(this,"_hex",h(new o.default.BN(e)))):u.throwError("invalid BigNumber string value",u.INVALID_ARGUMENT,{arg:"value",value:e});else if("number"==typeof e){parseInt(String(e))!==e&&u.throwError("underflow",u.NUMERIC_FAULT,{operation:"setValue",fault:"underflow",value:e,outputValue:parseInt(String(e))});try{a.defineReadOnly(this,"_hex",h(new o.default.BN(e)))}catch(e){u.throwError("overflow",u.NUMERIC_FAULT,{operation:"setValue",fault:"overflow",details:e.message})}}else e instanceof v?a.defineReadOnly(this,"_hex",e._hex):e.toHexString?a.defineReadOnly(this,"_hex",h(f(e.toHexString()))):e._hex&&s.isHexString(e._hex)?a.defineReadOnly(this,"_hex",e._hex):s.isArrayish(e)?a.defineReadOnly(this,"_hex",h(new o.default.BN(s.hexlify(e).substring(2),16))):u.throwError("invalid BigNumber value",u.INVALID_ARGUMENT,{arg:"value",value:e})}function y(e){return p.isBigNumber(e)?e:new p(e)}r.BigNumber=p,r.bigNumberify=y},{"../errors":5,"./bytes":64,"./properties":74,"bn.js":9}],64:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=n(e("../errors"));function a(e){return!!e.toHexString}function u(t){return t.slice||(t.slice=function(){var e=Array.prototype.slice.call(arguments);return u(new Uint8Array(Array.prototype.slice.apply(t,e)))}),t}function l(e){if(!e||parseInt(String(e.length))!=e.length||"string"==typeof e)return!1;for(var t=0;t<e.length;t++){var r=e[t];if(r<0||256<=r||parseInt(String(r))!=r)return!1}return!0}function h(e){if(null==e&&s.throwError("cannot convert null value to array",s.INVALID_ARGUMENT,{arg:"value",value:e}),a(e)&&(e=e.toHexString()),"string"!=typeof e)return l(e)?u(new Uint8Array(e)):(s.throwError("invalid arrayify value",null,{arg:"value",value:e,type:typeof e}),null);var t=e.match(/^(0x)?[0-9a-fA-F]*$/);t||s.throwError("invalid hexidecimal string",s.INVALID_ARGUMENT,{arg:"value",value:e}),"0x"!==t[1]&&s.throwError("hex string must have 0x prefix",s.INVALID_ARGUMENT,{arg:"value",value:e}),(e=e.substring(2)).length%2&&(e="0"+e);for(var r=[],n=0;n<e.length;n+=2)r.push(parseInt(e.substr(n,2),16));return u(new Uint8Array(r))}function i(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=h(e[n]);t.push(i),r+=i.length}var o=new Uint8Array(r),s=0;for(n=0;n<t.length;n++)o.set(t[n],s),s+=t[n].length;return u(o)}function o(e,t){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!t||e.length===2+2*t)}r.isHexable=a,r.isArrayish=l,r.arrayify=h,r.concat=i,r.stripZeros=function(e){var t=h(e);if(0===t.length)return t;for(var r=0;0===t[r];)r++;return r&&(t=t.slice(r)),t},r.padZeros=function(e,t){if(t<(e=h(e)).length)throw new Error("cannot pad");var r=new Uint8Array(t);return r.set(e,t-e.length),u(r)},r.isHexString=o;var f="0123456789abcdef";function c(e){if(a(e))return e.toHexString();if("number"==typeof e){e<0&&s.throwError("cannot hexlify negative value",s.INVALID_ARGUMENT,{arg:"value",value:e}),9007199254740991<=e&&s.throwError("out-of-range",s.NUMERIC_FAULT,{operartion:"hexlify",fault:"out-of-safe-range"});for(var t="";e;)t=f[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if("string"==typeof e){var r=e.match(/^(0x)?[0-9a-fA-F]*$/);return r||s.throwError("invalid hexidecimal string",s.INVALID_ARGUMENT,{arg:"value",value:e}),"0x"!==r[1]&&s.throwError("hex string must have 0x prefix",s.INVALID_ARGUMENT,{arg:"value",value:e}),e.length%2&&(e="0x0"+e.substring(2)),e}if(l(e)){for(var n=[],i=0;i<e.length;i++){var o=e[i];n.push(f[(240&o)>>4]+f[15&o])}return"0x"+n.join("")}return s.throwError("invalid hexlify value",null,{arg:"value",value:e}),"never"}function d(e,t){for(o(e)||s.throwError("invalid hex string",s.INVALID_ARGUMENT,{arg:"value",value:e});e.length<2*t+2;)e="0x0"+e.substring(2);return e}function p(e){var t=0,r="0x",n="0x";if(function(e){return e&&null!=e.r&&null!=e.s}(e)){null==e.v&&null==e.recoveryParam&&s.throwError("at least on of recoveryParam or v must be specified",s.INVALID_ARGUMENT,{argument:"signature",value:e}),r=d(e.r,32),n=d(e.s,32),"string"==typeof(t=e.v)&&(t=parseInt(t,16));var i=e.recoveryParam;null==i&&null!=e.v&&(i=1-t%2),t=27+i}else{var o=h(e);if(65!==o.length)throw new Error("invalid signature");r=c(o.slice(0,32)),n=c(o.slice(32,64)),27!==(t=o[64])&&28!==t&&(t=27+t%2)}return{r:r,s:n,recoveryParam:t-27,v:t}}r.hexlify=c,r.hexDataLength=function(e){return o(e)&&e.length%2==0?(e.length-2)/2:null},r.hexDataSlice=function(e,t,r){return o(e)||s.throwError("invalid hex data",s.INVALID_ARGUMENT,{arg:"value",value:e}),e.length%2!=0&&s.throwError("hex data length must be even",s.INVALID_ARGUMENT,{arg:"value",value:e}),t=2+2*t,null!=r?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)},r.hexStripZeros=function(e){for(o(e)||s.throwError("invalid hex string",s.INVALID_ARGUMENT,{arg:"value",value:e});3<e.length&&"0x0"===e.substring(0,3);)e="0x"+e.substring(3);return e},r.hexZeroPad=d,r.splitSignature=p,r.joinSignature=function(e){return c(i([(e=p(e)).r,e.s,e.recoveryParam?"0x1c":"0x1b"]))}},{"../errors":5}],65:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("../errors")),o=e("./bytes"),s=e("./utf8"),a=e("./keccak256"),u=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),l=new RegExp("^((.*)\\.)?([^.]+)$"),h=new RegExp("^[a-z0-9.-]*$");r.namehash=function(e){"string"!=typeof e&&i.throwError("invalid address - "+String(e),i.INVALID_ARGUMENT,{argument:"name",value:e}),(e=e.toLowerCase()).match(h)||i.throwError("contains invalid UseSTD3ASCIIRules characters",i.INVALID_ARGUMENT,{argument:"name",value:e});for(var t=u;e.length;){var r=e.match(l),n=s.toUtf8Bytes(r[3]);t=a.keccak256(o.concat([t,a.keccak256(n)])),e=r[2]||""}return o.hexlify(t)},r.id=function(e){return a.keccak256(s.toUtf8Bytes(e))},r.hashMessage=function(e){return a.keccak256(o.concat([s.toUtf8Bytes("\x19Ethereum Signed Message:\n"),s.toUtf8Bytes(String(e.length)),"string"==typeof e?s.toUtf8Bytes(e):e]))}},{"../errors":5,"./bytes":64,"./keccak256":71,"./utf8":85}],66:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var f=n(e("../errors")),c=e("../wordlists/lang-en"),a=e("./basex"),d=e("./bytes"),l=e("./bignumber"),i=e("./utf8"),o=e("./pbkdf2"),h=e("./hmac"),p=e("./properties"),v=e("./secp256k1"),y=e("./sha2"),m=l.bigNumberify("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),s=i.toUtf8Bytes("Bitcoin seed"),g=2147483648;function b(e){return(1<<e)-1<<8-e}function w(e){return d.hexZeroPad(d.hexlify(e),32)}function u(e){var t=d.hexDataSlice(y.sha256(y.sha256(e)),0,4);return a.Base58.encode(d.concat([e,t]))}var _={};r.defaultPath="m/44'/60'/0'/0/0";var M=(Object.defineProperty(A.prototype,"extendedKey",{get:function(){if(256<=this.depth)throw new Error("Depth too large!");return u(d.concat([null!=this.privateKey?"0x0488ADE4":"0x0488B21E",d.hexlify(this.depth),this.parentFingerprint,d.hexZeroPad(d.hexlify(this.index),4),this.chainCode,null!=this.privateKey?d.concat(["0x00",this.privateKey]):this.publicKey]))},enumerable:!0,configurable:!0}),A.prototype.neuter=function(){return new A(_,null,this.publicKey,this.parentFingerprint,this.chainCode,this.index,this.depth,null,this.path)},A.prototype._derive=function(e){if(4294967295<e)throw new Error("invalid index - "+String(e));var t=this.path;t&&(t+="/"+(e&~g));var r=new Uint8Array(37);if(e&g){if(!this.privateKey)throw new Error("cannot derive child of neutered node");r.set(d.arrayify(this.privateKey),1),t&&(t+="'")}else r.set(d.arrayify(this.publicKey));for(var n=24;0<=n;n-=8)r[33+(n>>3)]=e>>24-n&255;var i=h.computeHmac(h.SupportedAlgorithms.sha512,this.chainCode,r),o=i.slice(0,32),s=i.slice(32),a=null,u=null;return this.privateKey?a=w(l.bigNumberify(o).add(this.privateKey).mod(m)):u=new v.KeyPair(d.hexlify(o))._addPoint(this.publicKey),new A(_,a,u,this.fingerprint,w(s),e,this.depth+1,this.mnemonic,t)},A.prototype.derivePath=function(e){var t=e.split("/");if(0===t.length||"m"===t[0]&&0!==this.depth)throw new Error("invalid path - "+e);"m"===t[0]&&t.shift();for(var r=this,n=0;n<t.length;n++){var i=t[n];if(i.match(/^[0-9]+'$/)){var o=parseInt(i.substring(0,i.length-1));if(g<=o)throw new Error("invalid path index - "+i);r=r._derive(g+o)}else{if(!i.match(/^[0-9]+$/))throw new Error("invalid path component - "+i);if(o=parseInt(i),g<=o)throw new Error("invalid path index - "+i);r=r._derive(o)}}return r},A.isHDNode=function(e){return p.isType(e,"HDNode")},A);function A(e,t,r,n,i,o,s,a,u){if(f.checkNew(this,A),e!==_)throw new Error("HDNode constructor cannot be called directly");if(t){var l=new v.KeyPair(t);p.defineReadOnly(this,"privateKey",l.privateKey),p.defineReadOnly(this,"publicKey",l.compressedPublicKey)}else p.defineReadOnly(this,"privateKey",null),p.defineReadOnly(this,"publicKey",d.hexlify(r));p.defineReadOnly(this,"parentFingerprint",n),p.defineReadOnly(this,"fingerprint",d.hexDataSlice(y.ripemd160(y.sha256(this.publicKey)),0,4)),p.defineReadOnly(this,"address",v.computeAddress(this.publicKey)),p.defineReadOnly(this,"chainCode",i),p.defineReadOnly(this,"index",o),p.defineReadOnly(this,"depth",s),p.defineReadOnly(this,"mnemonic",a),p.defineReadOnly(this,"path",u),p.setType(this,"HDNode")}function E(e,t){var r=d.arrayify(e);if(r.length<16||64<r.length)throw new Error("invalid seed");var n=d.arrayify(h.computeHmac(h.SupportedAlgorithms.sha512,s,r));return new M(_,w(n.slice(0,32)),null,"0x00000000",w(n.slice(32)),0,0,t,"m")}function S(e,t){t=t||"";var r=i.toUtf8Bytes("mnemonic"+t,i.UnicodeNormalizationForm.NFKD);return d.hexlify(o.pbkdf2(i.toUtf8Bytes(e,i.UnicodeNormalizationForm.NFKD),r,2048,64,"sha512"))}function k(e,t){t=t||c.langEn,f.checkNormalize();var r=t.split(e);if(r.length%3!=0)throw new Error("invalid mnemonic");for(var n=d.arrayify(new Uint8Array(Math.ceil(11*r.length/8))),i=0,o=0;o<r.length;o++){var s=t.getWordIndex(r[o].normalize("NFKD"));if(-1===s)throw new Error("invalid mnemonic");for(var a=0;a<11;a++)s&1<<10-a&&(n[i>>3]|=1<<7-i%8),i++}var u=32*r.length/3,l=b(r.length/3),h=d.arrayify(y.sha256(n.slice(0,u/8)))[0];if((h&=l)!=(n[n.length-1]&l))throw new Error("invalid checksum");return d.hexlify(n.slice(0,u/8))}function N(e,t){if((e=d.arrayify(e)).length%4!=0||e.length<16||32<e.length)throw new Error("invalid entropy");for(var r=[0],n=11,i=0;i<e.length;i++)8<n?(r[r.length-1]<<=8,r[r.length-1]|=e[i],n-=8):(r[r.length-1]<<=n,r[r.length-1]|=e[i]>>8-n,r.push(e[i]&(1<<8-n)-1),n+=3);var o=d.arrayify(y.sha256(e))[0],s=e.length/4;return o&=b(s),r[r.length-1]<<=s,r[r.length-1]|=o>>8-s,(t=t||c.langEn).join(r.map(function(e){return t.getWord(e)}))}r.HDNode=M,r.fromExtendedKey=function(e){var t=a.Base58.decode(e);82===t.length&&u(t.slice(0,78))===e||f.throwError("invalid extended key",f.INVALID_ARGUMENT,{argument:"extendedKey",value:"[REDACTED]"});var r=t[4],n=d.hexlify(t.slice(5,9)),i=parseInt(d.hexlify(t.slice(9,13)).substring(2),16),o=d.hexlify(t.slice(13,45)),s=t.slice(45,78);switch(d.hexlify(t.slice(0,4))){case"0x0488b21e":case"0x043587cf":return new M(_,null,d.hexlify(s),n,o,i,r,null,null);case"0x0488ade4":case"0x04358394":if(0!==s[0])break;return new M(_,d.hexlify(s.slice(1)),null,n,o,i,r,null,null)}return f.throwError("invalid extended key",f.INVALID_ARGUMENT,{argument:"extendedKey",value:"[REDACTED]"})},r.fromMnemonic=function(e,t,r){return E(S(e=N(k(e,t),t),r),e)},r.fromSeed=function(e){return E(e,null)},r.mnemonicToSeed=S,r.mnemonicToEntropy=k,r.entropyToMnemonic=N,r.isValidMnemonic=function(e,t){try{return k(e,t),!0}catch(e){}return!1}},{"../errors":5,"../wordlists/lang-en":90,"./basex":62,"./bignumber":63,"./bytes":64,"./hmac":67,"./pbkdf2":73,"./properties":74,"./secp256k1":77,"./sha2":79,"./utf8":85}],67:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i,o,s=n(e("hash.js")),a=e("../utils/bytes"),u=n(e("../errors"));(o=i=r.SupportedAlgorithms||(r.SupportedAlgorithms={})).sha256="sha256",o.sha512="sha512",r.computeHmac=function(e,t,r){return i[e]||u.throwError("unsupported algorithm "+e,u.UNSUPPORTED_OPERATION,{operation:"hmac",algorithm:e}),a.arrayify(s.hmac(s[e],a.arrayify(t)).update(a.arrayify(r)).digest())}},{"../errors":5,"../utils/bytes":64,"hash.js":26}],68:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("./abi-coder");r.AbiCoder=i.AbiCoder,r.defaultAbiCoder=i.defaultAbiCoder,r.formatSignature=i.formatSignature,r.formatParamType=i.formatParamType,r.parseSignature=i.parseSignature,r.parseParamType=i.parseParamType;var o=e("./address");r.getAddress=o.getAddress,r.getContractAddress=o.getContractAddress,r.getCreate2Address=o.getCreate2Address,r.getIcapAddress=o.getIcapAddress;var s=n(e("./base64"));r.base64=s;var a=e("./bignumber");r.BigNumber=a.BigNumber,r.bigNumberify=a.bigNumberify;var u=e("./bytes");r.arrayify=u.arrayify,r.concat=u.concat,r.hexDataSlice=u.hexDataSlice,r.hexDataLength=u.hexDataLength,r.hexlify=u.hexlify,r.hexStripZeros=u.hexStripZeros,r.hexZeroPad=u.hexZeroPad,r.isHexString=u.isHexString,r.joinSignature=u.joinSignature,r.padZeros=u.padZeros,r.splitSignature=u.splitSignature,r.stripZeros=u.stripZeros;var l=e("./hash");r.hashMessage=l.hashMessage,r.id=l.id,r.namehash=l.namehash;var h=n(e("./hdnode"));r.HDNode=h;var f=e("./interface");r.Interface=f.Interface;var c=e("./json-wallet");r.getJsonWalletAddress=c.getJsonWalletAddress;var d=e("./keccak256");r.keccak256=d.keccak256;var p=e("./sha2");r.sha256=p.sha256;var v=e("./solidity");r.solidityKeccak256=v.keccak256,r.solidityPack=v.pack,r.soliditySha256=v.sha256;var y=e("./random-bytes");r.randomBytes=y.randomBytes;var m=e("./networks");r.getNetwork=m.getNetwork;var g=e("./properties");r.checkProperties=g.checkProperties,r.deepCopy=g.deepCopy,r.defineReadOnly=g.defineReadOnly,r.resolveProperties=g.resolveProperties,r.shallowCopy=g.shallowCopy;var b=n(e("./rlp"));r.RLP=b;var w=e("./secp256k1");r.computeAddress=w.computeAddress,r.computePublicKey=w.computePublicKey,r.recoverAddress=w.recoverAddress,r.recoverPublicKey=w.recoverPublicKey,r.verifyMessage=w.verifyMessage;var _=e("./signing-key");r.SigningKey=_.SigningKey;var M=e("./transaction");r.populateTransaction=M.populateTransaction;var A=e("./transaction");r.parseTransaction=A.parse,r.serializeTransaction=A.serialize;var E=e("./utf8");r.formatBytes32String=E.formatBytes32String,r.parseBytes32String=E.parseBytes32String,r.toUtf8Bytes=E.toUtf8Bytes,r.toUtf8String=E.toUtf8String;var S=e("./units");r.commify=S.commify,r.formatEther=S.formatEther,r.parseEther=S.parseEther,r.formatUnits=S.formatUnits,r.parseUnits=S.parseUnits;var k=e("./web");r.fetchJson=k.fetchJson,r.poll=k.poll;var N=e("./hmac");r.SupportedAlgorithms=N.SupportedAlgorithms;var x=e("./utf8");r.UnicodeNormalizationForm=x.UnicodeNormalizationForm;var P=e("./wordlist");r.Wordlist=P.Wordlist},{"./abi-coder":59,"./address":60,"./base64":61,"./bignumber":63,"./bytes":64,"./hash":65,"./hdnode":66,"./hmac":67,"./interface":69,"./json-wallet":70,"./keccak256":71,"./networks":72,"./properties":74,"./random-bytes":75,"./rlp":76,"./secp256k1":77,"./sha2":79,"./signing-key":81,"./solidity":82,"./transaction":83,"./units":84,"./utf8":85,"./web":86,"./wordlist":87}],69:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});function s(e){for(var t in p.setType(this,"Description"),e)p.defineReadOnly(this,t,p.deepCopy(e[t],!0));Object.freeze(this)}var a,u=e("./address"),f=e("./abi-coder"),l=e("./bignumber"),c=e("./bytes"),h=e("./hash"),d=e("./keccak256"),p=e("./properties"),v=o(e("../errors")),y=function(e){p.setType(this,"Indexed"),p.defineReadOnly(this,"hash",e)},m=(i(g,a=s),g.prototype.encode=function(e,t){c.isHexString(e)||v.throwError("invalid contract bytecode",v.INVALID_ARGUMENT,{arg:"bytecode",value:e}),v.checkArgumentCount(t.length,this.inputs.length," in Interface constructor");try{return e+f.defaultAbiCoder.encode(this.inputs,t).substring(2)}catch(e){v.throwError("invalid constructor argument",v.INVALID_ARGUMENT,{arg:e.arg,reason:e.reason,value:e.value})}return null},g);function g(){return null!==a&&a.apply(this,arguments)||this}var b,w=(i(_,b=s),_.prototype.encode=function(e){v.checkArgumentCount(e.length,this.inputs.length," in interface function "+this.name);try{return this.sighash+f.defaultAbiCoder.encode(this.inputs,e).substring(2)}catch(e){v.throwError("invalid input argument",v.INVALID_ARGUMENT,{arg:e.arg,reason:e.reason,value:e.value})}return null},_.prototype.decode=function(t){try{return f.defaultAbiCoder.decode(this.outputs,c.arrayify(t))}catch(e){v.throwError("invalid data for function output",v.INVALID_ARGUMENT,{arg:"data",errorArg:e.arg,errorValue:e.value,value:t,reason:e.reason})}},_);function _(){return null!==b&&b.apply(this,arguments)||this}var M,A=(i(E,M=s),E);function E(){return null!==M&&M.apply(this,arguments)||this}var S,k=(i(N,S=s),N.prototype.encodeTopics=function(e){var n=this;e.length>this.inputs.length&&v.throwError("too many arguments for "+this.name,v.UNEXPECTED_ARGUMENT,{maxCount:e.length,expectedCount:this.inputs.length});var i=[];for(this.anonymous||i.push(this.topic),e.forEach(function(e,t){var r=n.inputs[t];r.indexed?null==e?i.push(null):"string"===r.type?i.push(h.id(e)):"bytes"===r.type?i.push(d.keccak256(e)):-1!==r.type.indexOf("[")||"tuple"===r.type.substring(0,5)?v.throwError("filtering with tuples or arrays not implemented yet; bug us on GitHub",v.NOT_IMPLEMENTED,{operation:"filter(array|tuple)"}):("address"===r.type&&u.getAddress(e),i.push(c.hexZeroPad(c.hexlify(e),32).toLowerCase())):null!=e&&v.throwError("cannot filter non-indexed parameters; must be null",v.INVALID_ARGUMENT,{argument:r.name||t,value:e})});i.length&&null===i[i.length-1];)i.pop();return i},N.prototype.decode=function(e,r){null==r||this.anonymous||(r=r.slice(1));var n=[],i=[],o=[];if(this.inputs.forEach(function(e,t){e.indexed?"string"===e.type||"bytes"===e.type||0<=e.type.indexOf("[")||"tuple"===e.type.substring(0,5)?(n.push({type:"bytes32",name:e.name||""}),o.push(!0)):(n.push(e),o.push(!1)):(i.push(e),o.push(!1))}),null!=r)var s=f.defaultAbiCoder.decode(n,c.concat(r));var a=f.defaultAbiCoder.decode(i,c.arrayify(e)),u={},l=0,h=0;return this.inputs.forEach(function(e,t){e.indexed?null==r?u[t]=new y(null):o[t]?u[t]=new y(s[h++]):u[t]=s[h++]:u[t]=a[l++],e.name&&(u[e.name]=u[t])}),u.length=this.inputs.length,new A(u)},N);function N(){return null!==S&&S.apply(this,arguments)||this}var x,P=(i(I,x=s),I);function I(){return null!==x&&x.apply(this,arguments)||this}var T,R=(i(O,T=s),O);function O(){return null!==T&&T.apply(this,arguments)||this}function C(e){switch(e.type){case"constructor":var t=new m({inputs:e.inputs,payable:null==e.payable||!!e.payable});this.deployFunction||(this.deployFunction=t);break;case"function":var r=f.formatSignature(e).replace(/tuple/g,""),n=h.id(r).substring(0,10),i=!1;null!=e.constant?i=e.constant:null!=e.stateMutability&&(i="view"==e.stateMutability||"pure"==e.stateMutability);t=new w({inputs:e.inputs,outputs:e.outputs,gas:e.gas,payable:null==e.payable||!!e.payable,type:i?"call":"transaction",name:e.name,signature:r,sighash:n});e.name&&(null==this.functions[e.name]?p.defineReadOnly(this.functions,e.name,t):v.warn("WARNING: Multiple definitions for "+e.name)),null==this.functions[t.signature]&&p.defineReadOnly(this.functions,t.signature,t);break;case"event":r=f.formatSignature(e).replace(/tuple/g,""),t=new k({name:e.name,signature:r,inputs:e.inputs,topic:h.id(r),anonymous:!!e.anonymous});e.name&&null==this.events[e.name]&&p.defineReadOnly(this.events,e.name,t),null==this.events[t.signature]&&p.defineReadOnly(this.events,t.signature,t);break;case"fallback":break;default:v.warn("WARNING: unsupported ABI type - "+e.type)}}var L=(D.prototype.parseTransaction=function(e){var t=e.data.substring(0,10).toLowerCase();for(var r in this.functions)if(-1!==r.indexOf("(")){var n=this.functions[r];if(n.sighash===t){var i=f.defaultAbiCoder.decode(n.inputs,"0x"+e.data.substring(10));return new P({args:i,decode:n.decode,name:n.name,signature:n.signature,sighash:n.sighash,value:l.bigNumberify(e.value||"0")})}}return null},D.prototype.parseLog=function(e){for(var t in this.events)if(-1!==t.indexOf("(")){var r=this.events[t];if(!r.anonymous&&r.topic===e.topics[0])return new R({decode:r.decode,name:r.name,signature:r.signature,topic:r.topic,values:r.decode(e.data,e.topics)})}return null},D.isInterface=function(e){return p.isType(e,"Interface")},D.isIndexed=function(e){return p.isType(e,"Indexed")},D);function D(t){if(v.checkNew(this,D),"string"==typeof t){try{t=JSON.parse(t)}catch(e){v.throwError("could not parse ABI JSON",v.INVALID_ARGUMENT,{arg:"abi",errorMessage:e.message,value:t})}if(!Array.isArray(t))return v.throwError("invalid abi",v.INVALID_ARGUMENT,{arg:"abi",value:t}),null}p.defineReadOnly(this,"functions",{}),p.defineReadOnly(this,"events",{});var r=[];t.forEach(function(e){"string"==typeof e&&(e=f.parseSignature(e)),r.push(e)}),p.defineReadOnly(this,"abi",p.deepCopy(r,!0)),r.forEach(C,this),this.deployFunction||C.call(this,{type:"constructor",inputs:[]}),p.setType(this,"Interface")}r.Interface=L},{"../errors":5,"./abi-coder":59,"./address":60,"./bignumber":63,"./bytes":64,"./hash":65,"./keccak256":71,"./properties":74}],70:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./address");function i(e){try{var t=JSON.parse(e)}catch(e){return!1}return t.encseed&&t.ethaddr}function o(e){try{var t=JSON.parse(e)}catch(e){return!1}return!(!t.version||parseInt(t.version)!==t.version||3!==parseInt(t.version))}r.isCrowdsaleWallet=i,r.isSecretStorageWallet=o,r.getJsonWalletAddress=function(e){if(i(e))try{return n.getAddress(JSON.parse(e).ethaddr)}catch(e){return null}if(o(e))try{return n.getAddress(JSON.parse(e).address)}catch(e){return null}return null}},{"./address":60}],71:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("js-sha3"),i=e("./bytes");r.keccak256=function(e){return"0x"+n.keccak_256(i.arrayify(e))}},{"./bytes":64,"js-sha3":40}],72:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var o=n(e("../errors"));function i(r){return function(e){var t=[];return e.InfuraProvider&&t.push(new e.InfuraProvider(r)),e.EtherscanProvider&&t.push(new e.EtherscanProvider(r)),0===t.length?null:e.FallbackProvider?new e.FallbackProvider(t):t[0]}}function s(t,r){return function(e){return e.JsonRpcProvider?new e.JsonRpcProvider(t,r):null}}var a={chainId:1,ensAddress:"0x314159265dd8dbb310642f98f50c066173c1259b",name:"homestead",_defaultProvider:i("homestead")},u={chainId:3,ensAddress:"0x112234455c3a32fd11230c42e7bccd4a84e02010",name:"ropsten",_defaultProvider:i("ropsten")},l={unspecified:{chainId:0,name:"unspecified"},homestead:a,mainnet:a,morden:{chainId:2,name:"morden"},ropsten:u,testnet:u,rinkeby:{chainId:4,ensAddress:"0xe7410170f87102DF0055eB195163A03B7F2Bff4A",name:"rinkeby",_defaultProvider:i("rinkeby")},goerli:{chainId:5,ensAddress:"0x112234455c3a32fd11230c42e7bccd4a84e02010",name:"goerli",_defaultProvider:i("goerli")},kovan:{chainId:42,name:"kovan",_defaultProvider:i("kovan")},classic:{chainId:61,name:"classic",_defaultProvider:s("https://web3.gastracker.io","classic")},classicTestnet:{chainId:62,name:"classicTestnet",_defaultProvider:s("https://web3.gastracker.io/morden","classicTestnet")}};r.getNetwork=function(e){if(null==e)return null;if("number"==typeof e){for(var t in l){var r=l[t];if(r.chainId===e)return{name:r.name,chainId:r.chainId,ensAddress:r.ensAddress||null,_defaultProvider:r._defaultProvider||null}}return{chainId:e,name:"unknown"}}if("string"==typeof e){var n=l[e];return null==n?null:{name:n.name,chainId:n.chainId,ensAddress:n.ensAddress,_defaultProvider:n._defaultProvider||null}}var i=l[e.name];return i?(0!==e.chainId&&e.chainId!==i.chainId&&o.throwError("network chainId mismatch",o.INVALID_ARGUMENT,{arg:"network",value:e}),{name:e.name,chainId:i.chainId,ensAddress:e.ensAddress||i.ensAddress||null,_defaultProvider:e._defaultProvider||i._defaultProvider||null}):("number"!=typeof e.chainId&&o.throwError("invalid network chainId",o.INVALID_ARGUMENT,{arg:"network",value:e}),e)}},{"../errors":5}],73:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var m=e("../utils/bytes"),g=e("./hmac");r.pbkdf2=function(e,t,r,n,i){var o;e=m.arrayify(e),t=m.arrayify(t);var s,a,u=1,l=new Uint8Array(n),h=new Uint8Array(t.length+4);h.set(t);for(var f=1;f<=u;f++){h[t.length]=f>>24&255,h[t.length+1]=f>>16&255,h[t.length+2]=f>>8&255,h[t.length+3]=255&f;var c=g.computeHmac(i,e,h);o||(o=c.length,a=new Uint8Array(o),s=n-((u=Math.ceil(n/o))-1)*o),a.set(c);for(var d=1;d<r;d++){c=g.computeHmac(i,e,c);for(var p=0;p<o;p++)a[p]^=c[p]}var v=(f-1)*o,y=f===u?s:o;l.set(m.arrayify(a).slice(0,y),v)}return m.arrayify(l)}},{"../utils/bytes":64,"./hmac":67}],74:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("../errors"));function s(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1})}function a(e,t){return e&&e._ethersType===t}r.defineReadOnly=s,r.setType=function(e,t){Object.defineProperty(e,"_ethersType",{configurable:!1,value:t,writable:!1})},r.isType=a,r.resolveProperties=function(r){var n={},i=[];return Object.keys(r).forEach(function(t){var e=r[t];e instanceof Promise?i.push(e.then(function(e){return n[t]=e,null})):n[t]=e}),Promise.all(i).then(function(){return n})},r.checkProperties=function(t,r){t&&"object"==typeof t||i.throwError("invalid object",i.INVALID_ARGUMENT,{argument:"object",value:t}),Object.keys(t).forEach(function(e){r[e]||i.throwError("invalid object key - "+e,i.INVALID_ARGUMENT,{argument:"transaction",value:t,key:e})})},r.shallowCopy=function(e){var t={};for(var r in e)t[r]=e[r];return t};var u={boolean:!0,number:!0,string:!0};r.deepCopy=function t(e,r){if(null==e||u[typeof e])return e;if(Array.isArray(e)){var n=e.map(function(e){return t(e,r)});return r&&Object.freeze(n),n}if("object"==typeof e){if(a(e,"BigNumber"))return e;if(a(e,"Description"))return e;if(a(e,"Indexed"))return e;for(var i in n={},e){var o=e[i];void 0!==o&&s(n,i,t(o,r))}return r&&Object.freeze(n),n}if("function"==typeof e)return e;throw new Error("Cannot deepCopy "+typeof e)},r.inheritable=function t(r){return function(e){!function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}(e,r),s(e,"inherits",t(e))}}},{"../errors":5}],75:[function(o,e,s){(function(e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=o("../utils/bytes"),t=o("../utils/properties"),n=e.crypto||e.msCrypto;function i(e){if(e<=0||1024<e||parseInt(String(e))!=e)throw new Error("invalid length");var t=new Uint8Array(e);return n.getRandomValues(t),r.arrayify(t)}n&&n.getRandomValues||(console.log("WARNING: Missing strong random number source; using weak randomBytes"),n={getRandomValues:function(e){for(var t=0;t<20;t++)for(var r=0;r<e.length;r++)t?e[r]^=Math.trunc(256*Math.random()):e[r]=Math.trunc(256*Math.random());return e},_weakCrypto:!0}),s.randomBytes=i,!0===n._weakCrypto&&t.defineReadOnly(i,"_weakCrypto",!0)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/bytes":64,"../utils/properties":74}],76:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("./bytes");function s(e){for(var t=[];e;)t.unshift(255&e),e>>=8;return t}function i(e,t,r){for(var n=0,i=0;i<r;i++)n=256*n+e[t+i];return n}function a(e,t,r,n){for(var i=[];r<t+1+n;){var o=u(e,r);if(i.push(o.result),t+1+n<(r+=o.consumed))throw new Error("invalid rlp")}return{consumed:1+n,result:i}}function u(e,t){if(0===e.length)throw new Error("invalid rlp data");if(248<=e[t]){if(t+1+(r=e[t]-247)>e.length)throw new Error("too short");if(t+1+r+(n=i(e,t+1,r))>e.length)throw new Error("to short");return a(e,t,t+1+r,r+n)}if(192<=e[t]){if(t+1+(n=e[t]-192)>e.length)throw new Error("invalid rlp data");return a(e,t,t+1,n)}if(184<=e[t]){var r;if(t+1+(r=e[t]-183)>e.length)throw new Error("invalid rlp data");if(t+1+r+(n=i(e,t+1,r))>e.length)throw new Error("invalid rlp data");return{consumed:1+r+n,result:o.hexlify(e.slice(t+1+r,t+1+r+n))}}if(128<=e[t]){var n;if(t+1+(n=e[t]-128)>e.length)throw new Error("invalid rlp data");return{consumed:1+n,result:o.hexlify(e.slice(t+1,t+1+n))}}return{consumed:1,result:o.hexlify(e[t])}}r.encode=function(e){return o.hexlify(function t(e){if(Array.isArray(e)){var r=[];return e.forEach(function(e){r=r.concat(t(e))}),r.length<=55?(r.unshift(192+r.length),r):((n=s(r.length)).unshift(247+n.length),n.concat(r))}var n,i=Array.prototype.slice.call(o.arrayify(e));return 1===i.length&&i[0]<=127?i:i.length<=55?(i.unshift(128+i.length),i):((n=s(i.length)).unshift(183+n.length),n.concat(i))}(e))},r.decode=function(e){var t=o.arrayify(e),r=u(t,0);if(r.consumed!==t.length)throw new Error("invalid rlp data");return r.result}},{"./bytes":64}],77:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("elliptic"),o=e("./address"),s=e("./bytes"),a=e("./hash"),u=e("./keccak256"),l=e("./properties"),h=n(e("../errors")),f=null;function c(){return f=f||new i.ec("secp256k1")}var d=(p.prototype.sign=function(e){var t=c().keyFromPrivate(s.arrayify(this.privateKey)).sign(s.arrayify(e),{canonical:!0});return{recoveryParam:t.recoveryParam,r:s.hexZeroPad("0x"+t.r.toString(16),32),s:s.hexZeroPad("0x"+t.s.toString(16),32),v:27+t.recoveryParam}},p.prototype.computeSharedSecret=function(e){var t=c().keyFromPrivate(s.arrayify(this.privateKey)),r=c().keyFromPublic(s.arrayify(v(e)));return s.hexZeroPad("0x"+t.derive(r.getPublic()).toString(16),32)},p.prototype._addPoint=function(e){var t=c().keyFromPublic(s.arrayify(this.publicKey)),r=c().keyFromPublic(s.arrayify(e));return"0x"+t.pub.add(r.pub).encodeCompressed("hex")},p);function p(e){var t=c().keyFromPrivate(s.arrayify(e));l.defineReadOnly(this,"privateKey",s.hexlify(t.priv.toArray("be",32))),l.defineReadOnly(this,"publicKey","0x"+t.getPublic(!1,"hex")),l.defineReadOnly(this,"compressedPublicKey","0x"+t.getPublic(!0,"hex")),l.defineReadOnly(this,"publicKeyBytes",t.getPublic().encode(null,!0))}function v(e,t){var r=s.arrayify(e);if(32!==r.length)return 33===r.length?t?s.hexlify(r):"0x"+c().keyFromPublic(r).getPublic(!1,"hex"):65===r.length?t?"0x"+c().keyFromPublic(r).getPublic(!0,"hex"):s.hexlify(r):(h.throwError("invalid public or private key",h.INVALID_ARGUMENT,{arg:"key",value:"[REDACTED]"}),null);var n=new d(r);return t?n.compressedPublicKey:n.publicKey}function y(e){var t="0x"+v(e).slice(4);return o.getAddress("0x"+u.keccak256(t).substring(26))}function m(e,t){var r=s.splitSignature(t),n={r:s.arrayify(r.r),s:s.arrayify(r.s)};return"0x"+c().recoverPubKey(s.arrayify(e),n,r.recoveryParam).encode("hex",!1)}function g(e,t){return y(m(s.arrayify(e),t))}r.KeyPair=d,r.computePublicKey=v,r.computeAddress=y,r.recoverPublicKey=m,r.recoverAddress=g,r.verifyMessage=function(e,t){return g(a.hashMessage(e),t)}},{"../errors":5,"./address":60,"./bytes":64,"./hash":65,"./keccak256":71,"./properties":74,elliptic:12}],78:[function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var T=n(e("aes-js")),m=n(e("scrypt-js")),R=n(e("uuid")),O=e("./signing-key"),g=i(e("./hdnode")),b=e("./address"),C=e("./bytes"),w=e("./pbkdf2"),L=e("./keccak256"),p=e("./utf8"),D=e("./random-bytes");function _(e){return"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),C.arrayify(e)}function B(e,t){for(e=String(e);e.length<t;)e="0"+e;return e}function U(e){return"string"==typeof e?p.toUtf8Bytes(e,p.UnicodeNormalizationForm.NFKC):C.arrayify(e)}function M(e,t){for(var r=e,n=t.toLowerCase().split("/"),i=0;i<n.length;i++){var o=null;for(var s in r)if(s.toLowerCase()===n[i]){o=r[s];break}if(null===o)return null;r=o}return r}r.decryptCrowdsale=function(e,t){var r=JSON.parse(e);t=U(t);var n=b.getAddress(M(r,"ethaddr")),i=_(M(r,"encseed"));if(!i||i.length%16!=0)throw new Error("invalid encseed");var o=w.pbkdf2(t,t,2e3,32,"sha256").slice(0,16),s=i.slice(0,16),a=i.slice(16),u=new T.default.ModeOfOperation.cbc(o,s),l=C.arrayify(u.decrypt(a));l=T.default.padding.pkcs7.strip(l);for(var h="",f=0;f<l.length;f++)h+=String.fromCharCode(l[f]);var c=p.toUtf8Bytes(h),d=new O.SigningKey(L.keccak256(c));if(d.address!==n)throw new Error("corrupt crowdsale wallet");return d},r.decrypt=function(e,t,d){function p(e,t){var r=_(M(v,"crypto/ciphertext"));if(C.hexlify(function(e,t){return L.keccak256(C.concat([e,t]))}(e.slice(16,32),r)).substring(2)!==M(v,"crypto/mac").toLowerCase())return t(new Error("invalid password")),null;var n=function(e,t){if("aes-128-ctr"!==M(v,"crypto/cipher"))return null;var r=_(M(v,"crypto/cipherparams/iv")),n=new T.default.Counter(r),i=new T.default.ModeOfOperation.ctr(e,n);return C.arrayify(i.decrypt(t))}(e.slice(0,16),r),i=e.slice(32,64);if(!n)return t(new Error("unsupported cipher")),null;var o=new O.SigningKey(n);if(v.address&&o.address!==b.getAddress(v.address))return t(new Error("address mismatch")),null;if("0.1"===M(v,"x-ethers/version")){var s=_(M(v,"x-ethers/mnemonicCiphertext")),a=_(M(v,"x-ethers/mnemonicCounter")),u=new T.default.Counter(a),l=new T.default.ModeOfOperation.ctr(i,u),h=M(v,"x-ethers/path")||g.defaultPath,f=C.arrayify(l.decrypt(s)),c=g.entropyToMnemonic(f),d=g.fromMnemonic(c).derivePath(h);if(d.privateKey!=C.hexlify(n))return t(new Error("mnemonic mismatch")),null;o=new O.SigningKey(d)}return o}var v=JSON.parse(e),y=U(t);return new Promise(function(i,o){var e=M(v,"crypto/kdf");if(e&&"string"==typeof e)if("scrypt"===e.toLowerCase()){var t=_(M(v,"crypto/kdfparams/salt")),r=parseInt(M(v,"crypto/kdfparams/n")),n=parseInt(M(v,"crypto/kdfparams/r")),s=parseInt(M(v,"crypto/kdfparams/p"));if(!r||!n||!s)return void o(new Error("unsupported key-derivation function parameters"));if(0!=(r&r-1))return void o(new Error("unsupported key-derivation function parameter value for N"));if(32!==(l=parseInt(M(v,"crypto/kdfparams/dklen"))))return void o(new Error("unsupported key-derivation derived-key length"));d&&d(0),m.default(y,t,r,n,s,64,function(e,t,r){if(e)e.progress=t,o(e);else if(r){r=C.arrayify(r);var n=p(r,o);if(!n)return;d&&d(1),i(n)}else if(d)return d(t)})}else if("pbkdf2"===e.toLowerCase()){t=_(M(v,"crypto/kdfparams/salt"));var a=null,u=M(v,"crypto/kdfparams/prf");if("hmac-sha256"===u)a="sha256";else{if("hmac-sha512"!==u)return void o(new Error("unsupported prf"));a="sha512"}var l,h=parseInt(M(v,"crypto/kdfparams/c"));if(32!==(l=parseInt(M(v,"crypto/kdfparams/dklen"))))return void o(new Error("unsupported key-derivation derived-key length"));var f=w.pbkdf2(y,t,h,l,a),c=p(f,o);if(!c)return;i(c)}else o(new Error("unsupported key-derivation function"));else o(new Error("unsupported key-derivation function"))})},r.encrypt=function(e,t,r,w){"function"!=typeof r||w||(w=r,r={}),r=r||{};var _=null;if(32!==(_=O.SigningKey.isSigningKey(e)?C.arrayify(e.privateKey):C.arrayify(e)).length)throw new Error("invalid private key");var n=U(t),M=null;if(r.entropy&&(M=C.arrayify(r.entropy)),r.mnemonic)if(M){if(g.entropyToMnemonic(M)!==r.mnemonic)throw new Error("entropy and mnemonic mismatch")}else M=C.arrayify(g.mnemonicToEntropy(r.mnemonic));var A=r.path;M&&!A&&(A=g.defaultPath);var E=r.client;E=E||"ethers.js";var S=null;S=r.salt?C.arrayify(r.salt):D.randomBytes(32);var k=null;if(r.iv){if(16!==(k=C.arrayify(r.iv)).length)throw new Error("invalid iv")}else k=D.randomBytes(16);var N=null;if(r.uuid){if(16!==(N=C.arrayify(r.uuid)).length)throw new Error("invalid uuid")}else N=D.randomBytes(16);var x=1<<17,P=8,I=1;return r.scrypt&&(r.scrypt.N&&(x=r.scrypt.N),r.scrypt.r&&(P=r.scrypt.r),r.scrypt.p&&(I=r.scrypt.p)),new Promise(function(g,b){w&&w(0),m.default(n,S,x,P,I,64,function(e,t,r){if(e)e.progress=t,b(e);else if(r){var n=(r=C.arrayify(r)).slice(0,16),i=r.slice(16,32),o=r.slice(32,64),s=new O.SigningKey(_).address,a=new T.default.Counter(k),u=new T.default.ModeOfOperation.ctr(n,a),l=C.arrayify(u.encrypt(_)),h=L.keccak256(C.concat([i,l])),f={address:s.substring(2).toLowerCase(),id:R.default.v4({random:N}),version:3,Crypto:{cipher:"aes-128-ctr",cipherparams:{iv:C.hexlify(k).substring(2)},ciphertext:C.hexlify(l).substring(2),kdf:"scrypt",kdfparams:{salt:C.hexlify(S).substring(2),n:x,dklen:32,p:I,r:P},mac:h.substring(2)}};if(M){var c=D.randomBytes(16),d=new T.default.Counter(c),p=new T.default.ModeOfOperation.ctr(o,d),v=C.arrayify(p.encrypt(M)),y=new Date,m=y.getUTCFullYear()+"-"+B(y.getUTCMonth()+1,2)+"-"+B(y.getUTCDate(),2)+"T"+B(y.getUTCHours(),2)+"-"+B(y.getUTCMinutes(),2)+"-"+B(y.getUTCSeconds(),2)+".0Z";f["x-ethers"]={client:E,gethFilename:"UTC--"+m+"--"+f.address,mnemonicCounter:C.hexlify(c).substring(2),mnemonicCiphertext:C.hexlify(v).substring(2),path:A,version:"0.1"}}w&&w(1),g(JSON.stringify(f))}else if(w)return w(t)})})}},{"./address":60,"./bytes":64,"./hdnode":66,"./keccak256":71,"./pbkdf2":73,"./random-bytes":75,"./signing-key":81,"./utf8":85,"aes-js":8,"scrypt-js":44,uuid:48}],79:[function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("hash.js")),o=e("./bytes");r.ripemd160=function(e){return"0x"+i.default.ripemd160().update(o.arrayify(e)).digest("hex")},r.sha256=function(e){return"0x"+i.default.sha256().update(o.arrayify(e)).digest("hex")},r.sha512=function(e){return"0x"+i.default.sha512().update(o.arrayify(e)).digest("hex")}},{"./bytes":64,"hash.js":26}],80:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),e("setimmediate"),r.platform="browser"},{setimmediate:45}],81:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("./hdnode"),o=e("./bytes"),s=e("./properties"),a=e("./secp256k1"),u=n(e("../errors")),l=(h.prototype.signDigest=function(e){return this.keyPair.sign(e)},h.prototype.computeSharedSecret=function(e){return this.keyPair.computeSharedSecret(o.arrayify(e))},h.isSigningKey=function(e){return s.isType(e,"SigningKey")},h);function h(e){u.checkNew(this,h);var t=null;t=i.HDNode.isHDNode(e)?(s.defineReadOnly(this,"mnemonic",e.mnemonic),s.defineReadOnly(this,"path",e.path),o.arrayify(e.privateKey)):("string"==typeof e&&e.match(/^[0-9a-f]*$/i)&&64===e.length&&(e="0x"+e),o.arrayify(e));try{32!==t.length&&u.throwError("exactly 32 bytes required",u.INVALID_ARGUMENT,{arg:"privateKey",value:"[REDACTED]"})}catch(e){var r={arg:"privateKey",reason:e.reason,value:"[REDACTED]"};e.value&&("number"==typeof e.value.length&&(r.length=e.value.length),r.type=typeof e.value),u.throwError("invalid private key",e.code,r)}s.defineReadOnly(this,"privateKey",o.hexlify(t)),s.defineReadOnly(this,"keyPair",new a.KeyPair(t)),s.defineReadOnly(this,"publicKey",this.keyPair.publicKey),s.defineReadOnly(this,"address",a.computeAddress(this.keyPair.publicKey)),s.setType(this,"SigningKey")}r.SigningKey=l},{"../errors":5,"./bytes":64,"./hdnode":66,"./properties":74,"./secp256k1":77}],82:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var u=e("./bignumber"),l=e("./bytes"),h=e("./utf8"),n=e("./keccak256"),i=e("./sha2"),f=new RegExp("^bytes([0-9]+)$"),c=new RegExp("^(u?int)([0-9]*)$"),d=new RegExp("^(.*)\\[([0-9]*)\\]$"),p="0000000000000000000000000000000000000000000000000000000000000000";function o(e,r){if(e.length!=r.length)throw new Error("type/value count mismatch");var n=[];return e.forEach(function(e,t){n.push(function t(e,r,n){switch(e){case"address":return n?l.padZeros(r,32):l.arrayify(r);case"string":return h.toUtf8Bytes(r);case"bytes":return l.arrayify(r);case"bool":return r=r?"0x01":"0x00",n?l.padZeros(r,32):l.arrayify(r)}var i=e.match(c);if(i){if((o=parseInt(i[2]||"256"))%8!=0||0===o||256<o)throw new Error("invalid number type - "+e);return n&&(o=256),r=u.bigNumberify(r).toTwos(o),l.padZeros(r,o/8)}if(i=e.match(f)){var o=parseInt(i[1]);if(String(o)!=i[1]||0===o||32<o)throw new Error("invalid number type - "+e);if(l.arrayify(r).byteLength!==o)throw new Error("invalid value for "+e);return n?l.arrayify((r+p).substring(0,66)):r}if((i=e.match(d))&&Array.isArray(r)){var s=i[1];if(parseInt(i[2]||String(r.length))!=r.length)throw new Error("invalid value for "+e);var a=[];return r.forEach(function(e){a.push(t(s,e,!0))}),l.concat(a)}throw new Error("unknown type - "+e)}(e,r[t]))}),l.hexlify(l.concat(n))}r.pack=o,r.keccak256=function(e,t){return n.keccak256(o(e,t))},r.sha256=function(e,t){return i.sha256(o(e,t))}},{"./bignumber":63,"./bytes":64,"./keccak256":71,"./sha2":79,"./utf8":85}],83:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("../constants"),s=n(e("../errors")),a=e("./secp256k1"),u=e("./address"),l=e("./bignumber"),h=e("./bytes"),f=e("./keccak256"),c=e("./properties"),d=n(e("./rlp")),o=e("../providers/abstract-provider");function p(e){return"0x"===e?i.Zero:l.bigNumberify(e)}var v=[{name:"nonce",maxLength:32},{name:"gasPrice",maxLength:32},{name:"gasLimit",maxLength:32},{name:"to",length:20},{name:"value",maxLength:32},{name:"data"}],y={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0};r.serialize=function(r,e){c.checkProperties(r,y);var n=[];v.forEach(function(e){var t=r[e.name]||[];t=h.arrayify(h.hexlify(t)),e.length&&t.length!==e.length&&0<t.length&&s.throwError("invalid length for "+e.name,s.INVALID_ARGUMENT,{arg:"transaction"+e.name,value:t}),e.maxLength&&(t=h.stripZeros(t)).length>e.maxLength&&s.throwError("invalid length for "+e.name,s.INVALID_ARGUMENT,{arg:"transaction"+e.name,value:t}),n.push(h.hexlify(t))}),null!=r.chainId&&0!==r.chainId&&(n.push(h.hexlify(r.chainId)),n.push("0x"),n.push("0x"));var t=d.encode(n);if(!e)return t;var i=h.splitSignature(e),o=27+i.recoveryParam;return 9===n.length&&(n.pop(),n.pop(),n.pop(),o+=2*r.chainId+8),n.push(h.hexlify(o)),n.push(h.stripZeros(h.arrayify(i.r))),n.push(h.stripZeros(h.arrayify(i.s))),d.encode(n)},r.parse=function(e){var t=d.decode(e);9!==t.length&&6!==t.length&&s.throwError("invalid raw transaction",s.INVALID_ARGUMENT,{arg:"rawTransactin",value:e});var r={nonce:p(t[0]).toNumber(),gasPrice:p(t[1]),gasLimit:p(t[2]),to:function(e){return"0x"===e?null:u.getAddress(e)}(t[3]),value:p(t[4]),data:t[5],chainId:0};if(6===t.length)return r;try{r.v=l.bigNumberify(t[6]).toNumber()}catch(e){return s.info(e),r}if(r.r=h.hexZeroPad(t[7],32),r.s=h.hexZeroPad(t[8],32),l.bigNumberify(r.r).isZero()&&l.bigNumberify(r.s).isZero())r.chainId=r.v,r.v=0;else{r.chainId=Math.floor((r.v-35)/2),r.chainId<0&&(r.chainId=0);var n=r.v-27,i=t.slice(0,6);0!==r.chainId&&(i.push(h.hexlify(r.chainId)),i.push("0x"),i.push("0x"),n-=2*r.chainId+8);var o=f.keccak256(d.encode(i));try{r.from=a.recoverAddress(o,{r:h.hexlify(r.r),s:h.hexlify(r.s),recoveryParam:n})}catch(e){s.info(e)}r.hash=f.keccak256(e)}return r},r.populateTransaction=function(e,t,r){o.Provider.isProvider(t)||s.throwError("missing provider",s.INVALID_ARGUMENT,{argument:"provider",value:t}),c.checkProperties(e,y);var n=c.shallowCopy(e);if(null!=n.to&&(n.to=t.resolveName(n.to)),null==n.gasPrice&&(n.gasPrice=t.getGasPrice()),null==n.nonce&&(n.nonce=t.getTransactionCount(r)),null==n.gasLimit){var i=c.shallowCopy(n);i.from=r,n.gasLimit=t.estimateGas(i)}return null==n.chainId&&(n.chainId=t.getNetwork().then(function(e){return e.chainId})),c.resolveProperties(n)}},{"../constants":3,"../errors":5,"../providers/abstract-provider":50,"./address":60,"./bignumber":63,"./bytes":64,"./keccak256":71,"./properties":74,"./rlp":76,"./secp256k1":77}],84:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i,h=e("../constants"),f=n(e("../errors")),c=e("./bignumber"),o={};function s(e){return{decimals:e.length-1,tenPower:c.bigNumberify(e)}}function d(e){var t=o[String(e).toLowerCase()];if(!t&&"number"==typeof e&&parseInt(String(e))==e&&0<=e&&e<=256){for(var r="1",n=0;n<e;n++)r+="0";t=s(r)}return t||f.throwError("invalid unitType",f.INVALID_ARGUMENT,{argument:"name",value:e}),t}function a(e,t){var r=d(t),n=(e=c.bigNumberify(e)).lt(h.Zero);n&&(e=e.mul(h.NegativeOne));for(var i=e.mod(r.tenPower).toString();i.length<r.decimals;)i="0"+i;return i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1],e=e.div(r.tenPower).toString()+"."+i,n&&(e="-"+e),e}function u(e,t){null==t&&(t=18);var r=d(t);if("string"==typeof e&&e.match(/^-?[0-9.,]+$/)||f.throwError("invalid decimal value",f.INVALID_ARGUMENT,{arg:"value",value:e}),0===r.decimals)return c.bigNumberify(e);var n="-"===e.substring(0,1);n&&(e=e.substring(1)),"."===e&&f.throwError("missing value",f.INVALID_ARGUMENT,{arg:"value",value:e});var i=e.split(".");2<i.length&&f.throwError("too many decimal points",f.INVALID_ARGUMENT,{arg:"value",value:e});var o=i[0],s=i[1];for(o=o||"0",(s=s||"0").length>r.decimals&&f.throwError("underflow occurred",f.NUMERIC_FAULT,{operation:"division",fault:"underflow"});s.length<r.decimals;)s+="0";var a=c.bigNumberify(o),u=c.bigNumberify(s),l=a.mul(r.tenPower).add(u);return n&&(l=l.mul(h.NegativeOne)),l}i="1",["wei","kwei","Mwei","Gwei","szabo","finney","ether"].forEach(function(e){var t=s(i);o[e.toLowerCase()]=t,o[String(t.decimals)]=t,i+="000"}),r.commify=function(e){var t=String(e).split(".");(2<t.length||!t[0].match(/^-?[0-9]*$/)||t[1]&&!t[1].match(/^[0-9]*$/)||"."===e||"-."===e)&&f.throwError("invalid value",f.INVALID_ARGUMENT,{argument:"value",value:e});var r=t[0],n="";for("-"===r.substring(0,1)&&(n="-",r=r.substring(1));"0"===r.substring(0,1);)r=r.substring(1);""===r&&(r="0");var i="";2===t.length&&(i="."+(t[1]||"0"));for(var o=[];r.length;){if(r.length<=3){o.unshift(r);break}var s=r.length-3;o.unshift(r.substring(s)),r=r.substring(0,s)}return n+o.join(",")+i},r.formatUnits=a,r.parseUnits=u,r.formatEther=function(e){return a(e,18)},r.parseEther=function(e){return u(e,18)}},{"../constants":3,"../errors":5,"./bignumber":63}],85:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s,n,i=e("../constants"),a=e("../errors"),h=e("./bytes");function o(e,t){void 0===t&&(t=s.current),t!=s.current&&(a.checkNormalize(),e=e.normalize(t));for(var r=[],n=0;n<e.length;n++){var i=e.charCodeAt(n);if(i<128)r.push(i);else if(i<2048)r.push(i>>6|192),r.push(63&i|128);else if(55296==(64512&i)){n++;var o=e.charCodeAt(n);if(n>=e.length||56320!=(64512&o))throw new Error("invalid utf-8 string");i=65536+((1023&i)<<10)+(1023&o),r.push(i>>18|240),r.push(i>>12&63|128),r.push(i>>6&63|128),r.push(63&i|128)}else r.push(i>>12|224),r.push(i>>6&63|128),r.push(63&i|128)}return h.arrayify(r)}function u(e,t){e=h.arrayify(e);for(var r="",n=0;n<e.length;){var i=e[n++];if(i>>7!=0){var o=null,s=null;if(192==(224&i))o=1,s=127;else if(224==(240&i))o=2,s=2047;else{if(240!=(248&i)){if(t)continue;if(128==(192&i))throw new Error("invalid utf8 byte sequence; unexpected continuation byte");throw new Error("invalid utf8 byte sequence; invalid prefix")}o=3,s=65535}if(n+o>e.length){if(!t)throw new Error("invalid utf8 byte sequence; too short");for(;n<e.length&&e[n]>>6==2;n++);}else{for(var a=i&(1<<8-o-1)-1,u=0;u<o;u++){var l=e[n];if(128!=(192&l)){a=null;break}a=a<<6|63&l,n++}if(null!==a)if(a<=s){if(!t)throw new Error("invalid utf8 byte sequence; overlong")}else if(1114111<a){if(!t)throw new Error("invalid utf8 byte sequence; out-of-range")}else if(55296<=a&&a<=57343){if(!t)throw new Error("invalid utf8 byte sequence; utf-16 surrogate")}else a<=65535?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296+(a>>10&1023),56320+(1023&a)));else if(!t)throw new Error("invalid utf8 byte sequence; invalid continuation byte")}}else r+=String.fromCharCode(i)}return r}(n=s=r.UnicodeNormalizationForm||(r.UnicodeNormalizationForm={})).current="",n.NFC="NFC",n.NFD="NFD",n.NFKC="NFKC",n.NFKD="NFKD",r.toUtf8Bytes=o,r.toUtf8String=u,r.formatBytes32String=function(e){var t=o(e);if(31<t.length)throw new Error("bytes32 string must be less than 32 bytes");return h.hexlify(h.concat([t,i.HashZero]).slice(0,32))},r.parseBytes32String=function(e){var t=h.arrayify(e);if(32!==t.length)throw new Error("invalid bytes32 - not 32 bytes long");if(0!==t[31])throw new Error("invalid bytes32 string - no null terminator");for(var r=31;0===t[r-1];)r--;return u(t.slice(0,r))}},{"../constants":3,"../errors":5,"./bytes":64}],86:[function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var f=e("xmlhttprequest"),i=e("./base64"),o=e("./properties"),s=e("./utf8"),c=n(e("../errors"));r.fetchJson=function(e,a,u){var r={},l=null,h=12e4;if("string"==typeof e)l=e;else if("object"==typeof e){if(null==e.url&&c.throwError("missing URL",c.MISSING_ARGUMENT,{arg:"url"}),l=e.url,"number"==typeof e.timeout&&0<e.timeout&&(h=e.timeout),e.headers)for(var t in e.headers)r[t.toLowerCase()]={key:t,value:String(e.headers[t])};if(null!=e.user&&null!=e.password){"https:"!==l.substring(0,6)&&!0!==e.allowInsecure&&c.throwError("basic authentication requires a secure https url",c.INVALID_ARGUMENT,{arg:"url",url:l,user:e.user,password:"[REDACTED]"});var n=e.user+":"+e.password;r.authorization={key:"Authorization",value:"Basic "+i.encode(s.toUtf8Bytes(n))}}}return new Promise(function(n,i){var o=new f.XMLHttpRequest,e=null;e=setTimeout(function(){null!=e&&(e=null,i(new Error("timeout")),setTimeout(function(){o.abort()},0))},h);function s(){null!=e&&(clearTimeout(e),e=null)}a?(o.open("POST",l,!0),r["content-type"]={key:"Content-Type",value:"application/json"}):o.open("GET",l,!0),Object.keys(r).forEach(function(e){var t=r[e];o.setRequestHeader(t.key,t.value)}),o.onreadystatechange=function(){if(4===o.readyState){if(200!=o.status){s();var e=new Error("invalid response - "+o.status);return e.statusCode=o.status,o.responseText&&(e.responseText=o.responseText),void i(e)}var t=null;try{t=JSON.parse(o.responseText)}catch(e){s();var r=new Error("invalid json response");return r.orginialError=e,r.responseText=o.responseText,null!=a&&(r.requestBody=a),r.url=l,void i(r)}if(u)try{t=u(t)}catch(e){return s(),e.url=l,e.body=a,e.responseText=o.responseText,void i(e)}s(),n(t)}},o.onerror=function(e){s(),i(e)};try{null!=a?o.send(a):o.send()}catch(e){s();var t=new Error("connection error");t.error=e,i(t)}})},r.poll=function(u,l){return l=l||{},null==(l=o.shallowCopy(l)).floor&&(l.floor=0),null==l.ceiling&&(l.ceiling=1e4),null==l.interval&&(l.interval=250),new Promise(function(n,t){var e=null,i=!1,o=function(){return!i&&(i=!0,e&&clearTimeout(e),!0)};l.timeout&&(e=setTimeout(function(){o()&&t(new Error("timeout"))},l.timeout));var s=l.fastRetry||null,a=0;!function r(){return u().then(function(e){if(void 0!==e)o()&&n(e);else if(l.onceBlock)l.onceBlock.once("block",r);else if(!i){a++;var t=l.interval*parseInt(String(Math.random()*Math.pow(2,a)));t<l.floor&&(t=l.floor),t>l.ceiling&&(t=l.ceiling),s&&(a--,t=s,s=null),setTimeout(r,t)}return null},function(e){o()&&t(e)})}()})}},{"../errors":5,"./base64":61,"./properties":74,"./utf8":85,xmlhttprequest:49}],87:[function(o,e,s){(function(e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=o("../utils/hash"),t=o("../utils/properties");s.check=function(e){for(var t=[],r=0;r<2048;r++){var n=e.getWord(r);if(r!==e.getWordIndex(n))return"0x";t.push(n)}return i.id(t.join("\n")+"\n")};var r=(n.prototype.split=function(e){return e.toLowerCase().split(/ +/g)},n.prototype.join=function(e){return e.join(" ")},n);function n(e){t.defineReadOnly(this,"locale",e)}s.Wordlist=r,s.register=function(e,t){t=t||e.locale}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/hash":65,"../utils/properties":74}],88:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,a=e("./utils/bytes"),u=e("./utils/hash"),l=e("./utils/hdnode"),h=e("./utils/json-wallet"),f=e("./utils/keccak256"),c=e("./utils/properties"),d=e("./utils/random-bytes"),p=o(e("./utils/secret-storage")),v=e("./utils/signing-key"),y=e("./utils/transaction"),m=e("./abstract-signer"),g=e("./providers/abstract-provider"),b=o(e("./errors")),w=(s=m.Signer,i(_,s),Object.defineProperty(_.prototype,"address",{get:function(){return this.signingKey.address},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"mnemonic",{get:function(){return this.signingKey.mnemonic},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"path",{get:function(){return this.signingKey.path},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"privateKey",{get:function(){return this.signingKey.privateKey},enumerable:!0,configurable:!0}),_.prototype.connect=function(e){return g.Provider.isProvider(e)||b.throwError("invalid provider",b.INVALID_ARGUMENT,{argument:"provider",value:e}),new _(this.signingKey,e)},_.prototype.getAddress=function(){return Promise.resolve(this.address)},_.prototype.sign=function(e){var n=this;return c.resolveProperties(e).then(function(e){var t=y.serialize(e),r=n.signingKey.signDigest(f.keccak256(t));return y.serialize(e,r)})},_.prototype.signMessage=function(e){return Promise.resolve(a.joinSignature(this.signingKey.signDigest(u.hashMessage(e))))},_.prototype.getBalance=function(e){if(!this.provider)throw new Error("missing provider");return this.provider.getBalance(this.address,e)},_.prototype.getTransactionCount=function(e){if(!this.provider)throw new Error("missing provider");return this.provider.getTransactionCount(this.address,e)},_.prototype.sendTransaction=function(e){var t=this;if(!this.provider)throw new Error("missing provider");return null==e.nonce&&((e=c.shallowCopy(e)).nonce=this.getTransactionCount("pending")),y.populateTransaction(e,this.provider,this.address).then(function(e){return t.sign(e).then(function(e){return t.provider.sendTransaction(e)})})},_.prototype.encrypt=function(e,t,r){if("function"!=typeof t||r||(r=t,t={}),r&&"function"!=typeof r)throw new Error("invalid callback");return t=t||{},this.mnemonic&&((t=c.shallowCopy(t)).mnemonic=this.mnemonic,t.path=this.path),p.encrypt(this.privateKey,e,t,r)},_.createRandom=function(e){var t=d.randomBytes(16);(e=e||{}).extraEntropy&&(t=a.arrayify(f.keccak256(a.concat([t,e.extraEntropy])).substring(0,34)));var r=l.entropyToMnemonic(t,e.locale);return _.fromMnemonic(r,e.path,e.locale)},_.fromEncryptedJson=function(e,t,r){if(h.isCrowdsaleWallet(e))try{r&&r(0);var n=p.decryptCrowdsale(e,t);return r&&r(1),Promise.resolve(new _(n))}catch(e){return Promise.reject(e)}else if(h.isSecretStorageWallet(e))return p.decrypt(e,t,r).then(function(e){return new _(e)});return Promise.reject("invalid wallet JSON")},_.fromMnemonic=function(e,t,r){return t=t||l.defaultPath,new _(l.fromMnemonic(e,r).derivePath(t))},_);function _(e,t){var r=s.call(this)||this;return b.checkNew(r,_),v.SigningKey.isSigningKey(e)?c.defineReadOnly(r,"signingKey",e):c.defineReadOnly(r,"signingKey",new v.SigningKey(e)),c.defineReadOnly(r,"provider",t),r}r.Wallet=w},{"./abstract-signer":2,"./errors":5,"./providers/abstract-provider":50,"./utils/bytes":64,"./utils/hash":65,"./utils/hdnode":66,"./utils/json-wallet":70,"./utils/keccak256":71,"./utils/properties":74,"./utils/random-bytes":75,"./utils/secret-storage":78,"./utils/signing-key":81,"./utils/transaction":83}],89:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("../wordlists/lang-en").langEn;r.en=n},{"../wordlists/lang-en":90}],90:[function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(r,"__esModule",{value:!0});var o,s=e("../utils/wordlist"),a="AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo",u=null;function l(e){if(null==u&&(u=a.replace(/([A-Z])/g," $1").toLowerCase().substring(1).split(" "),"0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"!==s.check(e)))throw u=null,new Error("BIP39 Wordlist for en (English) FAILED")}function h(){return o.call(this,"en")||this}var f=new(o=s.Wordlist,i(h,o),h.prototype.getWord=function(e){return l(this),u[e]},h.prototype.getWordIndex=function(e){return l(this),u.indexOf(e)},h);r.langEn=f,s.register(f)},{"../utils/wordlist":87}]},{},[7])(7)});
//# sourceMappingURL=ethers.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var request = __webpack_require__(52)

module.exports = function (url, options) {
  return new Promise(function (resolve, reject) {
    request(url, options, function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
};


/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
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

var EE = __webpack_require__(16).EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __webpack_require__(17);
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


var debugUtil = __webpack_require__(76);

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __webpack_require__(77);

var destroyImpl = __webpack_require__(18);

var _require = __webpack_require__(19),
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
    if (!StringDecoder) StringDecoder = __webpack_require__(21).StringDecoder;
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
  if (!StringDecoder) StringDecoder = __webpack_require__(21).StringDecoder;
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
      createReadableStreamAsyncIterator = __webpack_require__(80);
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
      from = __webpack_require__(81);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16).EventEmitter;


/***/ }),
/* 18 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 19 */
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
/* 20 */
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
  deprecate: __webpack_require__(79)
};
/*</replacement>*/

/*<replacement>*/

var Stream = __webpack_require__(17);
/*</replacement>*/


var Buffer = __webpack_require__(5).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __webpack_require__(18);

var _require = __webpack_require__(19),
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 21 */
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

var Buffer = __webpack_require__(14).Buffer;
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// HTML Rendering
const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(8).h;
const oct = __webpack_require__(9);
const canvox = __webpack_require__(24);
const TA = __webpack_require__(25);
const extra = __webpack_require__(10);
const ethers = __webpack_require__(11);
const request = __webpack_require__(12);
const post = (func, body) => {
  return request("/"+func, {method:"POST",body,json:true});
};

const Register = __webpack_require__(65);

class Main extends Component {
  constructor(props) {
    super(props)
    this.modal = null;
    this.name = null;
    this.wlet = null;
  }
  componentDidMount() {
  }
  render() {
    if (this.modal) {
      return this.modal;
    }

    const button = (content, onclick) => {
      return h("span", {
        style: {
          cursor: "pointer",
        },
        onclick
      }, content);
    };

    var title = h("div", {
      style: {
        "font-size": "16px"
      },
    }, "Taelin::Arena");

    if (this.name) {
      var login = h("div", {
        onClick: () => {
          if (confirm("Clique OK para deslogar.")) {
            this.wlet = null;
            this.name = null;
            this.forceUpdate();
          }
        },
        style: {
          "cursor": "pointer",
          "font-size": "12px"
        },
      }, [this.name]);
    } else {
      var login = h("div", {
        style: {
          "font-size": "12px"
        },
      }, [
        button("Logar", () => {
          var pvt = prompt("Digite sua chave privada:");
          if (pvt && pvt.length===66 || pvt.length===64) {
            this.wlet = new ethers.Wallet(pvt);
            this.name = "anonymous";
            this.forceUpdate();
            post("name_of", {addr: this.wlet.address})
              .then((res) => {
                if (res.ctor === "ok") {
                  this.name = res.name;
                  this.forceUpdate();
                }
              });
          } else {
            alert("Tá errado isso ae. Você não guardou né?");
          }
        }),
        h("span", {}, " | "),
        button("Registrar", () => {
          this.modal = h(Register, {
            ondone: ({name,wlet}) => {
              this.wlet = wlet;
              this.name = name;
              this.modal = null;
              this.forceUpdate();
            }
          });
          this.forceUpdate();
        }),
      ]);
    };

    return h("div", {
      style: {
        "position": "absolute",
        "background": "#4070D0",
        "height": "24px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
        "align-items": "center",
        "width": "100%",
        "font-size": "18px",
        "font-family": "monaco, monospace",
        "padding": "0px 4px",
        "font-weight": "bold",
        "color": "white",
      },
      onClick: () => {
      }
    }, [
      title,
      login,
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

const name = "x" + Math.floor(Math.random()*65536);
console.log("I'm " + name);
const SimplePeer = __webpack_require__(66);
const peer = new SimplePeer({initiator:false,trickle:false});
post("offer",{name}).then(data => peer.signal(data));
peer.on('error', err => console.log('error', err))
peer.on('signal', data => post("answer", {name,data}));
peer.on('connect', () => {});
peer.on('data', data => console.log(""+data));
window.say = msg => peer.send(msg);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

const oct = __webpack_require__(9);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const TA = __webpack_require__(26);
const extra = __webpack_require__(10);
const {models} = __webpack_require__(27);

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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

const spritestack = __webpack_require__(28);

const load_model = name => {
  var model_json = __webpack_require__(29)("./"+name+".json");
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./archer.json": 30,
	"./chair.json": 31,
	"./croni_idle0.json": 32,
	"./croni_idle1.json": 33,
	"./croni_idle10.json": 34,
	"./croni_idle11.json": 35,
	"./croni_idle12.json": 36,
	"./croni_idle2.json": 37,
	"./croni_idle3.json": 38,
	"./croni_idle4.json": 39,
	"./croni_idle5.json": 40,
	"./croni_idle6.json": 41,
	"./croni_idle7.json": 42,
	"./croni_idle8.json": 43,
	"./croni_idle9.json": 44,
	"./cylinder.json": 45,
	"./fantasy.json": 46,
	"./ferumbras.json": 47,
	"./lyn.json": 48,
	"./wizard.json": 49,
	"./wizard_of_legends.json": 50,
	"./xtest.json": 51
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
webpackContext.id = 29;

/***/ }),
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[56,71,56,70,0,34],\"size\":[128,128,128],\"data\":[-7483,0,-4,1,-124,0,-4,1,-124,0,-4,1,-763,0,1,0,-4,1,-122,0,1,0,-4,1,-122,0,1,0,-4,1,-15097,0,1,8,-3,1,-123,0,1,8,-3,1,-123,0,1,8,-3,1,-764,0,-5,1,-123,0,-5,1,-123,0,-5,1,-15098,0,-3,1,-125,0,-3,1,-125,0,-3,1,-766,0,-4,1,-124,0,-4,1,-124,0,-4,1,-15099,0,-3,1,-125,0,-2,1,2,1,-124,0,-4,1,-765,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15101,0,1,-2,8,-125,0,1,2,8,-125,0,1,-2,8,-765,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15102,0,8,-127,0,8,-2,3,-125,0,8,-2,3,-764,0,-3,8,-125,0,-3,8,-125,0,-3,8,-15231,0,-2,3,-126,0,-2,3,-764,0,-2,3,-126,0,-2,3,-15103,0,-2,2,-126,0,-2,2,-127,0,-2,3,-126,0,-2,3,-764,0,-2,3,-126,0,-2,3,-391,0,-5,10,-14708,0,-2,2,-126,0,-2,2,-127,0,-2,3,-126,0,-2,3,-763,0,-3,3,-125,0,-3,3,-388,0,-3,10,0,2,-14710,0,-3,2,-125,0,-3,2,-126,0,-2,3,-126,0,-2,3,-636,0,-3,3,-125,0,-2,3,-126,0,-2,3,-386,0,-3,10,-3,0,2,-14711,0,-3,2,-125,0,-3,2,-125,0,-2,3,-126,0,-3,3,-125,0,-3,3,-506,0,-4,3,-124,0,-4,3,-512,0,-2,10,-4,0,2,-14712,0,-4,2,-124,0,-4,2,-124,0,-2,3,-2,2,-124,0,-3,3,-125,0,-3,3,-378,0,-3,3,-125,0,-4,3,-124,0,-4,3,-511,0,-2,10,-5,0,2,-14713,0,-3,2,-124,0,-5,2,-123,0,-3,3,-2,2,-123,0,-2,3,6,-125,0,-3,6,-378,0,-3,6,-125,0,6,-2,3,6,-124,0,-2,6,3,6,-126,0,6,-383,0,-2,10,-5,0,2,-14584,0,3,-127,0,-2,3,0,-2,2,-121,0,-2,2,-4,1,-2,4,-120,0,1,-2,0,6,3,-2,1,2,-119,0,1,-3,0,6,3,-2,1,-120,0,1,-3,0,6,0,-2,1,-120,0,1,-3,0,6,0,-2,1,-120,0,1,-5,0,-2,1,-119,0,1,0,-3,6,-2,0,-2,1,-119,0,-2,1,-3,3,6,-3,1,-119,0,-2,1,-4,3,-2,1,-121,0,-7,1,-253,0,3,-126,0,10,3,-5,0,2,-14583,0,10,-3,3,-124,0,10,-3,3,-251,0,2,-5,1,-121,0,-7,1,2,-120,0,-7,1,2,-120,0,-7,1,2,-120,0,-7,1,-121,0,-2,1,-2,3,-3,1,-121,0,-2,1,-2,3,-3,1,-121,0,-2,1,-2,0,-3,1,-122,0,-5,1,-123,0,-2,3,-126,0,-4,3,-125,0,-2,10,3,-4,0,2,-14583,0,-2,3,10,-125,0,-2,3,10,-255,0,-4,1,-122,0,2,-5,1,-121,0,-7,1,-121,0,-7,1,-121,0,-6,1,2,-121,0,-6,1,2,-122,0,-5,1,-123,0,-5,1,-250,0,-3,3,-125,0,-3,3,-127,0,10,-6,0,2,-14583,0,-2,3,-126,0,-2,3,-382,0,2,-4,1,-122,0,-6,1,-122,0,-6,1,-122,0,-6,1,-122,0,-6,1,-123,0,-4,1,2,-377,0,-3,3,-125,0,-3,3,-128,0,10,-5,0,2,-14584,0,-2,3,-126,0,-2,3,-383,0,-3,1,-124,0,-4,2,1,-123,0,1,-3,2,1,-123,0,1,-3,2,1,-123,0,1,-3,2,1,-124,0,-2,1,2,-378,0,-2,3,-126,0,-2,3,-128,0,10,-6,0,2,-14583,0,-2,3,-126,0,-2,3,-512,0,-3,2,-125,0,-3,2,-125,0,-3,2,-125,0,-3,2,-379,0,-2,3,-125,0,-3,3,-125,0,-2,3,-128,0,10,-5,0,2,-14584,0,-2,3,-126,0,-2,3,-384,0,-3,2,5,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-3,2,5,-250,0,-2,3,-126,0,-2,3,-255,0,10,-5,0,2,-14584,0,-2,3,-126,0,-3,3,-126,0,-2,3,-131,0,7,-123,0,-4,2,7,-123,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,7,-122,0,-2,3,-3,0,7,-121,0,-3,3,-125,0,-2,3,-254,0,-2,10,-4,0,2,-14714,0,-2,3,-126,0,-3,3,-126,0,-2,3,0,-2,9,-123,0,-4,2,9,-123,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,9,-122,0,-2,3,-2,0,-2,9,-122,0,-2,3,-381,0,10,-5,0,2,-14843,0,-2,3,-126,0,3,-2,9,7,-124,0,-3,2,7,-124,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-3,2,7,-123,0,-2,3,-2,9,7,-123,0,-2,3,-381,0,10,-4,0,2,-14973,0,-2,7,-381,0,-2,6,-126,0,-2,6,-383,0,-2,7,-507,0,10,-4,0,2,-14973,0,-2,9,-126,0,-2,9,-126,0,6,3,-124,0,7,6,-4,3,-122,0,7,6,-4,3,-124,0,6,3,-126,0,-2,9,-126,0,-2,9,-506,0,10,-4,0,2,-14974,0,-2,7,-124,0,-4,7,-123,0,-2,7,-5,3,-121,0,-2,7,-5,3,-121,0,-2,7,-5,3,-121,0,-2,7,-5,3,-122,0,-5,7,-633,0,10,-4,0,2,-15100,0,7,-4,9,-122,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-121,0,-6,7,-123,0,-3,7,-506,0,10,-3,0,2,-14973,0,-5,7,9,-122,0,1,-5,7,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-121,0,1,-6,7,-121,0,-5,7,-505,0,10,-3,0,2,-14974,0,1,-4,7,-122,0,1,-5,7,-121,0,-2,1,-4,3,7,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-120,0,-2,1,-3,3,-3,7,-121,0,1,-6,7,-122,0,-2,1,-507,0,10,-2,0,2,-14976,0,-2,1,7,-124,0,1,7,-2,1,7,-122,0,1,-3,7,1,7,-121,0,-2,1,-3,7,1,-122,0,-2,1,-3,7,1,-2,7,-121,0,1,-3,7,1,-2,7,-122,0,1,7,1,-126,0,1,-507,0,10,-2,0,2,-15104,0,-2,1,-125,0,-4,1,-123,0,-5,1,-123,0,-5,1,-123,0,-5,1,-125,0,1,-635,0,10,0,2,-15233,0,-2,1,-125,0,-3,1,-125,0,-3,1,-126,0,-2,1,-762,0,10,0,2,-16381,0,10,2,-16382,0,10,2,-16382,0,10,-1531079,0],\"uuid\":\"CD5E269A-B932-4D24-8E8B-DA59AC90742B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[16737843,16777113,16764006,6697728,10066278,16750950,6736947,10040064,34816,16750848],\"bounds\":[56,71,56,70,0,34]}");

/***/ }),
/* 31 */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":2,\"parts\":[{\"name\":\"main\",\"bounds\":[16,47,15,48,0,58],\"size\":[64,64,64],\"data\":[-1234,0,-2,2,-24,0,-2,2,-36,0,-2,2,-24,0,-2,2,-1443,0,-2,2,-26,0,-2,2,-34,0,-2,2,-26,0,-2,2,-2467,0,-2,2,-24,0,-2,2,-36,0,-2,2,-24,0,-2,2,-1443,0,-2,2,-26,0,-2,2,-34,0,-2,2,-26,0,-2,2,-2467,0,-2,23,-24,0,-2,23,-36,0,-2,23,-24,0,-2,23,-1443,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-2467,0,-2,23,-24,0,-2,23,-36,0,-3,23,-22,0,-3,23,-37,0,-2,23,-22,0,-2,23,-1317,0,-2,23,-24,0,-2,23,-35,0,-3,23,-24,0,-3,23,-34,0,-2,23,-26,0,-2,23,-2597,0,-2,23,-20,0,-2,23,-40,0,-2,23,-20,0,-2,23,-498,0,-4,2,-60,0,-4,2,-60,0,-4,2,-60,0,-4,2,-497,0,-2,23,-22,0,-2,23,-38,0,-2,23,-22,0,-2,23,-2792,0,-2,23,-18,0,-2,23,-42,0,-3,23,-16,0,-3,23,-43,0,-3,23,-14,0,-3,23,-45,0,-3,23,-12,0,-3,23,-47,0,-3,23,-10,0,-3,23,-49,0,-3,23,-8,0,-3,23,-51,0,-3,23,-6,0,-3,23,-53,0,-2,23,-6,0,-2,23,-55,0,-2,23,-4,2,-2,23,-56,0,-2,23,-4,2,-2,23,-56,0,-2,23,-4,2,-2,23,-55,0,-3,23,-4,2,-3,23,-53,0,-3,23,-6,0,-3,23,-51,0,-3,23,-8,0,-3,23,-49,0,-3,23,-10,0,-3,23,-47,0,-3,23,-12,0,-3,23,-45,0,-3,23,-14,0,-3,23,-43,0,-3,23,-16,0,-3,23,-41,0,-3,23,-18,0,-3,23,-40,0,-2,23,-20,0,-2,23,-3378,0,-4,2,-60,0,2,-2,23,2,-60,0,2,-2,23,2,-60,0,-4,2,-3965,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-3889,0,-3,2,-60,0,-5,2,-58,0,-7,2,0,-6,22,0,-2,23,-47,0,-7,2,22,-5,0,-2,22,-2,23,-47,0,-7,2,-58,0,-5,2,-60,0,-3,2,-3850,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-3189,0,-20,23,-44,0,-20,23,-44,0,-20,23,-46,0,-2,3,0,-2,3,-6,0,-2,3,0,-2,3,-47,0,-18,3,-46,0,-18,3,-46,0,-18,3,-46,0,-18,3,-45,0,-20,3,-44,0,-20,3,-44,0,-20,3,-44,0,-20,3,-43,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-41,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-39,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-37,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-28,3,-35,0,-30,3,-34,0,-6,3,-18,0,-6,3,-34,0,-2,3,-26,0,-2,3,-2214,0,-2,23,-18,3,-2,23,-42,0,-2,23,-18,3,-2,23,-44,0,-18,3,-45,0,-20,3,-44,0,-20,3,-44,0,-20,3,-43,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-41,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-39,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-37,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-7,3,-14,0,-7,3,-35,0,-5,3,-20,0,-5,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-2094,0,-6,3,-54,0,-14,3,-46,0,-2,23,0,-16,3,0,-2,23,-42,0,-2,23,-2,3,-14,0,-2,3,-2,23,-43,0,-2,3,-16,0,-2,3,-3827,0,-6,3,-54,0,-14,3,-49,0,-16,3,-44,0,-2,23,0,-2,3,-14,0,-2,3,0,-2,23,-40,0,-2,23,-2,3,-16,0,-2,3,-2,23,-3825,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-2,23,-3,3,-16,0,-3,3,-2,23,-38,0,-2,23,-22,0,-2,23,-3760,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-2,2,-12,0,-2,2,-3,3,-39,0,-2,23,-5,0,-3,2,-8,0,-3,2,-5,0,-2,23,-36,0,-2,23,-8,0,-8,2,-8,0,-2,23,-3695,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-16,0,-3,3,-45,0,2,-14,0,2,-42,0,-2,23,-4,0,-16,2,-4,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3631,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-16,0,-3,3,-45,0,2,-14,0,2,-48,0,-3,2,-10,0,-3,2,-42,0,-2,23,-6,0,-12,2,-6,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3567,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-3,2,-12,0,-3,2,-2,0,3,-45,0,-14,2,-107,0,-2,23,-24,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3503,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-3,2,-12,0,-3,2,-2,0,3,-45,0,-14,2,-234,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-3374,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-4,2,-10,0,-4,2,-2,0,3,-47,0,-10,2,-300,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-3310,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,2,-14,0,2,-4,3,-40,0,3,-3,0,-4,2,-8,0,-4,2,-3,0,3,-47,0,-10,2,-364,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-33,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-2093,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-2,2,-12,0,-2,2,-4,3,-40,0,3,-5,0,-12,2,-5,0,3,-612,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-2093,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-3,0,-4,2,-8,0,-4,2,-3,0,3,-47,0,-10,2,-3704,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-3,0,2,-14,0,2,-3,0,3,-45,0,-4,2,-6,0,-4,2,-54,0,-6,2,-3642,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-2,2,-14,0,-2,2,-47,0,-4,2,-8,0,-4,2,-51,0,-10,2,-3576,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-2,2,-14,0,-2,2,-47,0,-3,2,-10,0,-3,2,-50,0,-12,2,-3575,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-4,2,-10,0,-4,2,-49,0,-4,2,-4,0,-4,2,-55,0,-6,2,-3578,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,2,-16,0,2,-2,0,-2,3,-43,0,2,-14,0,2,-49,0,-4,2,-6,0,-4,2,-53,0,-8,2,-3577,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-3,0,2,-14,0,2,-3,0,-2,3,-43,0,-4,2,-8,0,-4,2,-51,0,-10,2,-3640,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,-2,2,-14,0,-2,2,-2,0,-2,3,-43,0,-6,2,-4,0,-6,2,-54,0,-4,2,-3643,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-8,2,-3705,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-3,0,-4,2,-8,0,-4,2,-3,0,-2,3,-46,0,-10,2,-3704,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,2,-14,0,2,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-8,2,-3705,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,2,-14,0,2,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-2,2,-4,0,-2,2,-57,0,-6,2,-3642,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,2,-12,0,2,-2,3,-41,0,-6,3,0,-14,2,0,-6,3,-36,0,-2,3,-10,0,-4,2,-10,0,-2,3,-3759,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,2,-2,3,-41,0,-6,3,-2,2,-12,0,-2,2,-6,3,-36,0,-2,3,-3,0,-2,2,-14,0,-2,2,-3,0,-2,3,-3759,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-18,3,-41,0,-8,3,-12,0,-8,3,-36,0,-2,3,-2,0,-3,3,-14,0,-3,3,-2,0,-2,3,-3694,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-37,0,-8,3,-12,0,-8,3,-36,0,-7,3,-14,0,-7,3,-3694,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-36,0,-8,3,-12,0,-8,3,-36,0,-7,3,-14,0,-7,3,-36,0,-3,3,-22,0,-3,3,-3630,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-35,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-2,3,-26,0,-2,3,-3565,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-35,0,-10,3,-10,0,-10,3,-34,0,-8,3,-14,0,-8,3,-34,0,-5,3,-20,0,-5,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-3501,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-36,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-3,3,-24,0,-3,3,-3565,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-36,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-3,3,-24,0,-3,3,-3503,0,-4,3,-57,0,-10,3,-52,0,-14,3,-48,0,-18,3,-45,0,-20,3,-43,0,-22,3,-39,0,-8,3,-12,0,-8,3,-35,0,-8,3,-14,0,-8,3,-34,0,-3,3,-24,0,-3,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-22929,0],\"uuid\":\"0F83B31A-98B6-4290-A164-95C437723E1C\",\"hidden\":false}],\"size\":[64,64,64],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[16,47,15,48,0,58]}");

/***/ }),
/* 32 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,6,-4,7,6,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,7,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13813,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-757,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13814,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-885,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13944,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-762,0,-4,6,-124,0,-4,6,-124,0,-4,7,-13945,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-764,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13689,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-764,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13561,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-892,0,-4,6,-124,0,-4,6,-124,0,-4,7,-13561,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1020,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13433,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1149,0,-2,6,-126,0,-2,6,-13434,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"15013266-1B66-40BE-8AB4-3BDD092173E6\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,7496558,5391165,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 33 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-755,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13816,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-883,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13946,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-760,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13947,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13563,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-890,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13563,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1018,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13435,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1147,0,-2,7,-126,0,-2,7,-13436,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"3012310E-96D8-4DC9-B11E-2FBEBA73DCAA\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,5391165,7496558,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 34 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13560,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-894,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13559,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1023,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13430,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1154,0,-2,7,-126,0,-2,7,-13429,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"2AD1D28D-1BD3-4F18-BFD7-7455B3C12194\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 35 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1021,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13432,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1152,0,-2,7,-126,0,-2,7,-13431,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"9872E874-5864-4714-A6C0-9C73F14CAA1F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 36 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1020,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13433,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1149,0,-2,7,-126,0,-2,7,-13434,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"76BCDE88-3711-47F2-853A-6718D7A1C601\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 37 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-755,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13816,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-883,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13946,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-760,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13947,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-761,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13564,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-889,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13564,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1017,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13436,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1146,0,-2,7,-126,0,-2,7,-13437,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"95EEDB35-0E0E-402D-BB93-A0A6F0F232F3\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,5391165,7496558,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 38 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-112,0,-4,1,10,-6,8,10,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-16,1,-112,0,-16,1,-112,0,-2,1,-2,0,-12,1,-112,0,-2,1,-2,0,-12,1,-114,0,-12,1,-116,0,-12,1,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-758,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-761,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13564,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-889,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13564,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1016,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13437,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1143,0,-2,7,-126,0,-2,7,-13440,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"243C6468-1C9E-4654-ACE9-ED8A70E8D4E6\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 39 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-112,0,-4,1,10,-6,8,10,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-16,1,-112,0,-16,1,-112,0,-2,1,-2,0,-12,1,-112,0,-2,1,-2,0,-12,1,-114,0,-12,1,-116,0,-12,1,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-758,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-763,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13562,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-891,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13562,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1018,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13435,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1145,0,-2,7,-126,0,-2,7,-13438,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"7AC62D52-02A0-4DEC-8EBA-D099FBA3B48B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-759,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-888,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-763,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13944,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1019,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13434,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1146,0,-2,7,-126,0,-2,7,-13437,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"ACB4ABDA-33DB-4CB1-8E49-528CA48C4D6F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 41 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13686,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13812,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-896,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13557,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1023,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13430,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1150,0,-2,7,-126,0,-2,7,-13433,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"892BCF8C-EDA6-47FB-A8D5-2AE32C2D6B8E\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 42 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13686,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13812,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-897,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13556,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1025,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13428,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1153,0,-2,7,-126,0,-2,7,-13430,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"F33A3005-1936-4D74-BD64-844EDA568B57\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 43 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-897,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13556,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1025,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13428,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1155,0,-2,7,-126,0,-2,7,-13428,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"18A51C2A-2C23-4B9B-95C4-2EFA82506920\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 44 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-766,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13559,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-895,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13558,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1024,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13429,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1154,0,-2,7,-126,0,-2,7,-13429,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"B4310167-CEB8-4757-8FF8-EA37AEC35FB7\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[52,76,52,75,0,12],\"size\":[128,128,128],\"data\":[-6718,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-1890877,0],\"uuid\":\"AF55B709-8F88-45D9-9490-37FA7714171F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[52,76,52,75,0,12]}");

/***/ }),
/* 46 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part2\",\"bounds\":[39,87,37,90,0,40],\"size\":[128,128,128],\"data\":[-4808,0,-7,18,-97,0,-6,18,-17,0,-10,18,-93,0,-14,18,-6,0,-16,18,-91,0,-38,18,-89,0,-40,18,-87,0,-6,18,-3,20,-22,18,-3,20,-8,18,-86,0,-5,18,-5,20,-20,18,-10,20,-2,18,-86,0,-4,18,-7,20,-18,18,-12,20,-2,18,-85,0,-4,18,-7,20,-6,18,-6,20,-6,18,-12,20,-2,18,-85,0,-4,18,-7,20,-4,18,-10,20,-4,18,-12,20,-2,18,-85,0,-5,18,-5,20,-3,18,-14,20,-3,18,-10,20,-3,18,-86,0,-5,18,-3,20,-3,18,-16,20,-3,18,-3,20,-9,18,-86,0,-10,18,-18,20,-14,18,-86,0,-10,18,-18,20,-13,18,-88,0,-8,18,-20,20,-11,18,-89,0,-8,18,-20,20,-11,18,-89,0,-7,18,-22,20,-10,18,-89,0,-7,18,-22,20,-9,18,-90,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-8,18,-20,20,-8,18,-92,0,-8,18,-20,20,-8,18,-91,0,-10,18,-18,20,-9,18,-91,0,-10,18,-18,20,-9,18,-90,0,-12,18,-16,20,-10,18,-90,0,-13,18,-14,20,-2,18,-6,20,-4,18,-88,0,-16,18,-10,20,-3,18,-8,20,-3,18,-88,0,-18,18,-6,20,-4,18,-10,20,-2,18,-87,0,-8,18,-3,20,-18,18,-10,20,-3,18,-86,0,-7,18,-5,20,-17,18,-10,20,-4,18,-84,0,-7,18,-7,20,-16,18,-10,20,-5,18,-82,0,-8,18,-7,20,-16,18,-10,20,-6,18,-81,0,-8,18,-7,20,-16,18,-10,20,-6,18,-81,0,-9,18,-5,20,-8,18,-4,20,-6,18,-8,20,-8,18,-80,0,-10,18,-3,20,-7,18,-8,20,-5,18,-6,20,-9,18,-80,0,-6,18,-5,20,-8,18,-10,20,-8,18,-5,20,-6,18,-80,0,-5,18,-7,20,-7,18,-10,20,-7,18,-7,20,-6,18,-79,0,-4,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-79,0,-4,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-80,0,-3,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-80,0,-3,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-81,0,-2,18,-9,20,-6,18,-10,20,-6,18,-9,20,-5,18,-81,0,-3,18,-7,20,-7,18,-10,20,-7,18,-7,20,-5,18,-82,0,-4,18,-5,20,-9,18,-8,20,-9,18,-5,20,-6,18,-83,0,-19,18,-4,20,-21,18,-85,0,-43,18,-86,0,-41,18,-89,0,-38,18,-92,0,-35,18,-95,0,-31,18,-99,0,-25,18,-107,0,-14,18,-10347,0,-3,27,-22,0,-3,27,-99,0,-5,27,-20,0,-5,27,4,5,4,5,4,-93,0,-2,27,20,-2,27,-20,0,-2,27,20,-2,27,4,5,4,5,4,-93,0,-5,27,-20,0,-5,27,4,5,4,5,4,-94,0,-3,27,-8,0,-6,27,-8,0,-3,27,-109,0,-10,27,-117,0,-12,27,-115,0,-14,27,-113,0,-16,27,-112,0,-16,27,-111,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-111,0,-16,27,-112,0,-16,27,-113,0,-14,27,-115,0,-12,27,-117,0,-10,27,-120,0,-6,27,-135,0,-4,27,-123,0,-6,27,-121,0,-8,27,-98,0,-3,27,-19,0,-8,27,-97,0,-5,27,-18,0,-8,27,-97,0,-2,27,20,-2,27,-18,0,-8,27,-97,0,-5,27,-19,0,-6,27,-99,0,-3,27,-21,0,-4,27,-239,0,-6,27,-121,0,-8,27,-106,0,-5,27,-9,0,-8,27,-9,0,-5,27,-92,0,-5,27,-9,0,-3,27,-2,20,-3,27,-9,0,-5,27,-92,0,-2,27,20,-2,27,-9,0,-3,27,-2,20,-3,27,-9,0,-2,27,20,-2,27,-92,0,-5,27,-9,0,-8,27,-9,0,-5,27,-92,0,-5,27,-9,0,-8,27,-9,0,-5,27,-107,0,-6,27,-11503,0,-3,4,-22,0,-3,4,-2,5,-97,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-99,0,-3,4,-8,0,-6,4,-8,0,-3,4,-109,0,-10,4,-117,0,-12,4,-115,0,-14,4,-113,0,-16,4,-112,0,-16,4,-111,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-111,0,-16,4,-112,0,-16,4,-113,0,-14,4,-115,0,-12,4,-117,0,-10,4,-120,0,-6,4,-135,0,-4,4,-123,0,-6,4,-121,0,-8,4,-98,0,-3,4,-19,0,-8,4,-97,0,-5,4,-18,0,-8,4,-97,0,-5,4,-18,0,-8,4,-97,0,-5,4,-19,0,-6,4,-99,0,-3,4,-21,0,-4,4,-239,0,-6,4,-121,0,-8,4,-106,0,-5,4,-9,0,-8,4,-9,0,-5,4,-92,0,-5,4,-9,0,-8,4,-9,0,-7,4,-4,0,4,-85,0,-5,4,-9,0,-8,4,-9,0,-12,4,-85,0,-5,4,-9,0,-8,4,-9,0,-7,4,-4,0,4,-85,0,-5,4,-9,0,-8,4,-9,0,-5,4,-107,0,-6,4,-11402,0,-2,5,-99,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-135,0,-4,5,-123,0,-6,5,-121,0,-8,5,-98,0,-3,5,-19,0,-8,5,-97,0,-5,5,-18,0,-8,5,-97,0,-5,5,-18,0,-8,5,-97,0,-5,5,-19,0,-6,5,-99,0,-3,5,-21,0,-4,5,-239,0,-6,5,-108,0,4,0,4,-10,0,-8,5,-11,0,4,-94,0,-5,5,-9,0,-8,5,-9,0,-5,5,-91,0,4,-6,5,-8,0,-8,5,-8,0,-13,5,-85,0,5,-4,7,-2,5,-7,0,-8,5,-7,0,-2,5,-12,7,-84,0,4,-6,5,-8,0,-8,5,-8,0,-13,5,-85,0,-5,5,-9,0,-8,5,-9,0,-5,5,-93,0,4,0,4,-11,0,-6,5,-12,0,4,-111,0,-2,13,-11275,0,5,-101,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-7,0,4,-2,0,4,-124,0,-4,5,-123,0,5,-4,12,5,-120,0,4,5,-6,12,5,4,-97,0,-3,5,-19,0,5,-6,12,5,-97,0,-5,5,-18,0,5,-6,12,5,-97,0,-5,5,-17,0,4,5,-6,12,5,4,-96,0,-5,5,-19,0,5,-4,12,5,-99,0,-3,5,-21,0,-4,5,-124,0,4,-2,0,4,-111,0,-6,5,-107,0,-4,4,-10,0,-8,5,-10,0,-4,4,-91,0,4,-4,0,4,-9,0,-8,5,-9,0,4,-4,0,-6,4,-85,0,4,-5,0,-2,5,-6,0,-10,5,-6,0,-2,5,-96,0,4,-5,0,-2,7,5,-5,0,-10,5,-5,0,5,-2,7,-96,0,4,-5,0,-2,5,-6,0,-10,5,-6,0,-2,5,-96,0,4,-4,0,4,-9,0,-3,5,-2,4,-3,5,-9,0,4,-4,0,-6,4,-86,0,-4,4,-11,0,-6,5,-11,0,-4,4,-108,0,-4,13,-11273,0,5,-102,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-7,0,-4,4,-112,0,-4,5,-7,0,4,-4,0,4,-121,0,4,-6,0,4,-119,0,4,-8,0,4,-97,0,-3,5,-18,0,4,-3,0,-2,3,-3,0,4,-96,0,-5,5,-17,0,4,-3,0,-2,3,-3,0,4,-96,0,-5,5,-17,0,4,-8,0,4,-96,0,-5,5,-18,0,4,-6,0,4,-98,0,-3,5,-20,0,4,-4,0,4,-111,0,-4,5,-8,0,-4,4,-111,0,-6,5,-121,0,-8,5,-111,0,-2,4,-7,0,-8,5,-7,0,-2,4,-104,0,-3,5,-2,0,-12,5,-2,0,-3,5,-106,0,-2,7,5,-2,0,-12,5,-2,0,5,-2,7,-106,0,-3,5,-2,0,-12,5,-2,0,-3,5,-104,0,-2,4,-7,0,-3,5,-2,4,-3,5,-7,0,-2,4,-112,0,-6,5,-123,0,13,-2,26,13,-11272,0,5,-103,0,-3,5,-21,0,-4,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-7,0,25,-4,0,25,-7,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-116,0,25,-12,5,25,-114,0,-14,5,-113,0,-16,5,-112,0,-16,5,-110,0,25,-18,5,25,-109,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-109,0,25,-18,5,25,-110,0,-16,5,-112,0,-16,5,-113,0,-14,5,-114,0,25,-12,5,25,-116,0,-10,5,-120,0,-6,5,-123,0,-4,5,-123,0,25,-4,5,25,-239,0,-3,5,-22,0,-2,3,-100,0,-5,5,-21,0,-2,3,-100,0,-5,5,-123,0,-5,5,-124,0,-3,5,-9,0,-4,5,-124,0,-4,5,-123,0,-6,5,-121,0,-8,5,-113,0,-2,4,-5,0,-8,5,-5,0,-2,4,-108,0,-18,5,-110,0,-2,7,-14,5,-2,7,-110,0,-18,5,-108,0,-2,4,-5,0,-3,5,-2,4,-3,5,-5,0,-2,4,-114,0,-6,5,-123,0,13,-2,26,13,-11376,0,-3,4,-20,0,5,0,-3,4,-99,0,-5,4,-19,0,5,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-7,0,26,-4,0,26,-7,0,-5,4,-99,0,-3,4,-8,0,-6,5,-8,0,-3,4,-109,0,-10,5,-116,0,26,-12,5,26,-114,0,-14,5,-113,0,-16,5,-112,0,-16,5,-110,0,26,-18,5,26,-109,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-109,0,26,-18,5,26,-110,0,-16,5,-112,0,-16,5,-113,0,-14,5,-114,0,26,-12,5,26,-116,0,-10,5,-120,0,-6,5,-123,0,-4,5,-123,0,26,-4,5,26,-123,0,-4,5,-112,0,-3,4,-9,0,-4,5,-9,0,3,14,-100,0,-5,4,-21,0,-2,3,-100,0,-5,4,-8,0,-4,5,-111,0,-5,4,-8,0,-4,5,-112,0,-3,4,-9,0,-4,5,-124,0,-4,5,-123,0,-6,5,-121,0,-8,5,-115,0,-2,4,-3,0,-8,5,-3,0,-2,4,-112,0,-14,5,-114,0,-2,7,-10,5,-2,7,-114,0,-14,5,-112,0,-2,4,-3,0,-8,5,-3,0,-2,4,-116,0,-6,5,-123,0,-4,13,-11376,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-19,0,-6,5,-98,0,-5,5,-7,0,26,-4,0,26,-7,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-116,0,26,-3,5,-6,6,-3,5,26,-114,0,-3,5,6,-6,7,6,-3,5,-113,0,-3,5,6,-8,7,6,-3,5,-112,0,-2,5,6,-10,7,6,-2,5,-110,0,26,-2,5,6,-12,7,6,-2,5,26,-109,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-109,0,26,-2,5,6,-12,7,6,-2,5,26,-110,0,-2,5,6,-10,7,6,-2,5,-112,0,-3,5,6,-8,7,6,-3,5,-113,0,-3,5,6,-6,7,6,-3,5,-114,0,26,-3,5,-2,6,-2,7,-2,6,-3,5,26,-116,0,-4,5,-2,7,-4,5,-120,0,-2,5,-2,7,-2,5,-123,0,5,-2,7,5,-123,0,26,5,-2,7,5,26,-123,0,5,-2,7,5,-112,0,-3,5,-8,0,4,5,-2,7,5,4,-8,0,4,-2,14,-99,0,-5,5,-8,0,5,-2,7,5,-9,0,4,-2,14,-99,0,-5,5,-7,0,4,5,-2,7,5,4,-9,0,14,-100,0,-5,5,-8,0,5,-2,7,5,-112,0,-3,5,-8,0,4,5,-2,7,5,4,-123,0,5,-2,7,5,-123,0,-2,5,-2,7,-2,5,-121,0,-2,5,-4,7,-2,5,-117,0,-2,4,0,5,-6,7,5,0,-2,4,-116,0,-2,5,-6,7,-2,5,-118,0,-10,7,-118,0,-2,5,-6,7,-2,5,-116,0,-2,4,0,-2,5,-4,7,-2,5,0,-2,4,-118,0,-6,5,-123,0,-4,4,-11376,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-19,0,-2,5,-3,3,5,-99,0,5,0,5,-8,0,-2,4,-2,26,-2,4,-8,0,5,0,5,-109,0,-2,4,-2,0,-2,26,-2,0,-2,4,-116,0,26,4,-10,0,4,26,-114,0,4,-12,0,4,-113,0,4,-14,0,4,-112,0,4,-14,0,4,-110,0,26,4,-16,0,4,26,-109,0,4,-16,0,4,-110,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-110,0,4,-16,0,4,-109,0,26,4,-16,0,4,26,-110,0,4,-14,0,4,-112,0,4,-14,0,4,-113,0,4,-12,0,4,-114,0,26,4,-10,0,4,26,-116,0,-2,4,-6,0,-2,4,-120,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-111,0,5,0,5,-8,0,4,-4,0,4,-8,0,4,-2,14,-99,0,5,-3,3,5,-7,0,4,-4,0,4,-8,0,-3,14,-99,0,5,-3,3,5,-7,0,4,-4,0,4,-9,0,14,-100,0,5,-3,3,5,-7,0,4,-4,0,4,-111,0,5,0,5,-8,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-121,0,4,-6,0,4,-119,0,-2,4,-6,0,-2,4,-502,0,4,-8,0,4,-119,0,4,-6,0,4,-121,0,-6,4,-11375,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,26,-4,0,26,-7,0,5,-3,3,5,-99,0,5,0,5,-10,0,-2,26,-8,0,-3,5,0,5,-113,0,-2,26,-120,0,26,-12,0,26,-495,0,26,-18,0,26,-237,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-237,0,26,-18,0,26,-495,0,26,-12,0,26,-374,0,26,-4,0,26,-263,0,14,4,-102,0,5,0,5,-20,0,14,-2,4,-2,13,-99,0,5,-3,3,5,-20,0,-2,14,13,14,-99,0,5,-3,3,5,-22,0,14,-100,0,5,-3,3,5,-124,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,26,-4,0,26,-7,0,5,-3,3,5,-99,0,5,0,5,-10,0,-2,26,-10,0,5,0,5,-113,0,-2,26,-9,0,-2,5,-109,0,26,-12,0,26,-495,0,26,-18,0,26,-237,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-237,0,26,-18,0,26,-495,0,26,-12,0,26,-374,0,26,-4,0,26,-8,0,14,-126,0,13,4,14,-124,0,-2,13,4,13,-101,0,5,0,5,-19,0,13,14,-2,4,-101,0,5,-3,3,5,-19,0,14,13,-102,0,5,-3,3,5,-123,0,5,-3,3,5,-124,0,5,0,5,-12669,0,-3,5,-22,0,-3,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,-6,26,-7,0,5,-3,3,5,-99,0,-3,5,-6,0,-2,26,-6,0,-2,26,-6,0,-3,5,-107,0,-2,26,-10,0,-2,26,-5,0,5,-107,0,26,-14,0,26,-112,0,26,-14,0,26,-111,0,26,-16,0,26,-110,0,26,-16,0,26,-109,0,26,-18,0,26,-108,0,26,-18,0,26,-108,0,-2,26,-16,0,-2,26,-108,0,-2,26,-16,0,-2,26,-108,0,26,-18,0,26,-108,0,26,-18,0,26,-109,0,26,-16,0,26,-110,0,26,-16,0,26,-111,0,26,-14,0,26,-112,0,26,-14,0,26,-113,0,-2,26,-10,0,-2,26,-116,0,-2,26,-6,0,-2,26,-6,0,-2,13,-112,0,-6,26,-7,0,-3,13,14,-124,0,13,-2,4,-2,13,-123,0,-5,13,-99,0,-3,5,-19,0,-3,13,4,-2,13,-99,0,5,-3,3,5,-18,0,-3,13,-102,0,5,-3,3,5,-19,0,-2,14,-102,0,5,-3,3,5,-124,0,-3,5,-12669,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-127,0,5,-872,0,-2,26,-16,0,-2,26,-108,0,-2,26,-16,0,-2,26,-1025,0,-2,13,-125,0,-4,13,-123,0,-6,13,-123,0,-4,13,-100,0,-3,4,-20,0,-2,13,4,-101,0,-5,4,-20,0,13,4,-101,0,-5,4,-123,0,-5,4,-124,0,-3,4,-12669,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-22,0,-4,5,-127,0,5,-752,0,-2,6,-117,0,-2,26,-6,0,-4,6,-6,0,-2,26,-108,0,-2,26,-6,0,-4,6,-6,0,-2,26,-117,0,-2,6,-906,0,13,-127,0,-3,13,-124,0,-5,13,-124,0,-3,13,-100,0,-3,5,-21,0,13,4,-3,13,-98,0,-5,5,-20,0,13,4,-3,13,-98,0,-5,5,-20,0,-5,13,-98,0,-5,5,-21,0,-3,13,-100,0,-3,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-98,0,5,0,5,-22,0,5,0,5,0,5,-622,0,-4,4,-123,0,-6,4,-121,0,-3,4,-2,6,-3,4,-114,0,-2,26,-4,0,-2,4,-3,6,-3,4,-4,0,-2,26,-108,0,-2,26,-4,0,-2,4,-4,6,-2,4,-4,0,-2,26,-114,0,-3,4,-3,6,-2,4,-121,0,-4,4,6,4,-123,0,-4,4,-521,0,-2,13,-125,0,-4,13,-123,0,-6,13,-122,0,-6,13,-121,0,-7,13,-99,0,5,0,5,-19,0,-8,13,-97,0,5,-3,3,5,-19,0,-2,13,4,-4,13,-97,0,5,-3,3,5,-19,0,-7,13,-97,0,5,-3,3,5,-20,0,-5,13,-99,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-97,0,5,-3,3,5,-20,0,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-496,0,6,-3,4,-122,0,4,6,-6,4,-120,0,-8,4,-119,0,-10,4,-113,0,-2,26,-3,0,-9,4,6,-3,0,-2,26,-108,0,-2,26,-3,0,6,-8,4,6,-3,0,-2,26,-113,0,6,-9,4,-119,0,6,-7,4,-120,0,-8,4,-122,0,-4,4,-394,0,-2,13,-124,0,-2,12,-3,13,-122,0,12,-6,13,-120,0,12,-7,13,-120,0,-9,13,-97,0,5,0,5,-19,0,-8,13,12,-96,0,5,-3,3,5,-18,0,-3,13,0,-3,13,-2,12,-96,0,5,-3,3,5,-19,0,-6,13,12,-97,0,5,-3,3,5,-20,0,-3,13,-2,12,-99,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-97,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-368,0,6,-3,4,-122,0,4,6,-6,4,-119,0,-10,4,-118,0,-10,4,-117,0,-12,4,-112,0,-3,26,0,-12,4,0,-3,26,-108,0,-3,26,0,6,-11,4,0,-3,26,-112,0,6,-10,4,6,-117,0,6,-9,4,-118,0,6,-9,4,-119,0,-8,4,-122,0,-4,4,-266,0,-2,13,-124,0,-4,12,13,-122,0,-6,12,13,-120,0,-8,12,13,-119,0,-9,12,-97,0,5,0,5,-19,0,13,-8,12,-96,0,5,-3,3,5,-18,0,13,-2,12,0,-5,12,-96,0,5,-3,3,5,-19,0,13,-7,12,-96,0,5,-3,3,5,-20,0,-2,13,-4,12,-98,0,5,0,5,-23,0,-3,12,-12643,0,-3,5,-22,0,-5,5,-97,0,-6,5,-18,0,-6,5,-98,0,-6,5,-18,0,-6,5,-98,0,-6,5,-18,0,-6,5,-99,0,-3,5,-22,0,-3,5,-367,0,-3,6,-3,4,-121,0,6,-7,4,-119,0,-10,4,-117,0,-12,4,-116,0,-12,4,-113,0,-2,26,0,-12,4,0,-2,26,-110,0,-2,26,0,6,-11,4,0,-2,26,-113,0,6,-10,4,6,-116,0,6,-10,4,6,-117,0,6,-9,4,-119,0,6,-7,4,-121,0,-5,4,6,-393,0,-2,12,-124,0,-5,12,-123,0,-6,12,-120,0,-9,12,-97,0,-3,5,-19,0,-9,12,-96,0,-5,5,-19,0,-9,12,-95,0,-5,5,-19,0,-9,12,-95,0,-5,5,-21,0,-6,12,-97,0,-3,5,-24,0,-3,12,-12541,0,-2,5,-99,0,-3,4,-22,0,-3,4,-99,0,-7,4,-16,0,-7,4,-98,0,-7,4,-16,0,-7,4,-98,0,-7,4,-16,0,-7,4,-99,0,-3,4,-22,0,-3,4,-366,0,-3,6,-4,4,6,-119,0,6,-9,4,-117,0,-12,4,-116,0,-12,4,-116,0,-12,4,-113,0,-3,26,-12,4,-3,26,-110,0,-3,26,-12,4,-3,26,-113,0,6,-10,4,6,-116,0,6,-10,4,6,-116,0,-2,6,-9,4,6,-117,0,-2,6,-8,4,-119,0,6,-4,4,-2,6,4,-392,0,12,-125,0,11,-3,12,-124,0,-4,12,11,-122,0,-6,12,-99,0,-3,5,-20,0,-6,12,11,-97,0,-5,5,-19,0,-8,12,-96,0,-5,5,-20,0,11,-6,12,-96,0,-5,5,-22,0,-3,12,11,-98,0,-3,5,-12566,0,-2,5,-101,0,-3,5,-22,0,-3,5,-99,0,-8,5,-14,0,-8,5,-98,0,-8,5,-14,0,-8,5,-98,0,-8,5,-14,0,-8,5,-99,0,-3,5,-22,0,-3,5,-366,0,-2,6,-4,4,-2,6,-119,0,-9,4,6,-117,0,-12,4,-116,0,-11,4,6,-116,0,-11,4,6,-113,0,-3,26,-12,4,-3,26,-110,0,-3,26,-12,4,-3,26,-113,0,6,-11,4,-116,0,6,-10,4,6,-116,0,-2,6,-9,4,6,-117,0,6,-9,4,-119,0,-4,4,-3,6,4,-519,0,11,-2,12,-125,0,-2,11,12,-124,0,-5,11,-98,0,-5,4,-20,0,12,-4,11,-98,0,4,-3,0,4,-22,0,-5,11,-96,0,4,-3,0,4,-23,0,-3,11,12,-96,0,4,-3,0,4,-24,0,-2,12,-97,0,-5,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-6,5,-10,0,-6,5,-3,3,5,-99,0,-3,3,-6,5,-10,0,-6,5,-3,3,-99,0,5,-3,3,-6,5,-10,0,-6,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-366,0,4,-2,6,-4,4,6,-119,0,-9,4,6,-117,0,-10,4,-2,6,-116,0,-12,4,-116,0,-12,4,-114,0,-2,26,-12,4,-2,26,-112,0,-2,26,4,6,-10,4,-2,26,-114,0,4,6,-10,4,-116,0,-2,6,-10,4,-116,0,-2,6,-10,4,-117,0,6,-9,4,-119,0,-3,4,-5,6,-647,0,-2,11,-125,0,-4,11,-99,0,4,-3,0,4,-21,0,-4,11,-126,0,-3,11,-126,0,-2,11,-225,0,4,-3,0,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-8,5,-6,0,-8,5,-3,3,5,-99,0,-3,3,-8,5,-6,0,-8,5,-3,3,-99,0,5,-3,3,-8,5,-6,0,-8,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-366,0,-8,4,-119,0,-9,4,6,-117,0,-11,4,6,-116,0,-11,4,6,-116,0,6,-10,4,6,-114,0,-2,26,-2,6,-10,4,-2,26,-112,0,-2,26,-2,6,-10,4,-2,26,-114,0,-2,6,-10,4,-116,0,-2,6,-9,4,6,-116,0,-2,6,-9,4,6,-117,0,6,-9,4,-119,0,-2,4,-6,6,-877,0,4,-3,0,4,-507,0,4,-3,0,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-10,5,-2,0,-10,5,-3,3,5,-99,0,-3,3,-10,5,-2,0,-10,5,-3,3,-99,0,5,-3,3,-10,5,-2,0,-10,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-367,0,-4,4,-2,6,-121,0,-6,4,-2,6,-119,0,-7,4,-3,6,-117,0,-12,4,-116,0,4,6,-10,4,-115,0,26,-2,6,-10,4,26,-114,0,26,-2,6,-10,4,26,-115,0,-2,6,-10,4,-116,0,6,-10,4,6,-117,0,-10,4,-119,0,6,-7,4,-121,0,-6,6,-751,0,-3,4,-124,0,-5,4,-122,0,-2,4,-3,0,-2,4,-121,0,-2,4,-3,0,-2,4,-121,0,-2,4,-3,0,-2,4,-122,0,-5,4,-124,0,-3,4,-12541,0,-3,5,-22,0,-3,5,-99,0,5,-3,3,-22,5,-3,3,5,-98,0,5,-3,3,-22,5,-3,3,5,-98,0,5,-3,3,-22,5,-3,3,5,-99,0,-3,5,-22,0,-3,5,-368,0,-3,4,6,-122,0,-6,4,-2,6,-119,0,-9,4,6,-118,0,-9,4,6,-117,0,-2,6,-9,4,6,-116,0,-2,6,-10,4,-116,0,6,-11,4,-116,0,6,-10,4,6,-117,0,-9,4,6,-118,0,-9,4,6,-119,0,4,6,-6,4,-122,0,-3,6,4,-880,0,-3,4,-124,0,4,-3,0,4,-123,0,4,-3,0,4,-123,0,4,-3,0,4,-124,0,-3,4,-12668,0,-5,4,0,4,0,4,0,4,0,4,0,-2,4,0,4,0,4,0,4,0,4,0,-5,4,-98,0,4,-3,7,-22,5,-3,7,4,-98,0,4,-28,7,4,-98,0,4,-3,7,-22,5,-3,7,4,-98,0,-5,4,0,4,0,4,0,4,0,4,0,-2,4,0,4,0,4,0,4,0,4,0,-5,4,-495,0,-3,4,6,-122,0,-6,4,-2,6,-120,0,-7,4,6,-119,0,-9,4,6,-118,0,6,-9,4,-118,0,6,-9,4,-118,0,-10,4,-119,0,-8,4,-120,0,-2,6,-6,4,-122,0,-3,6,4,-1008,0,-3,4,-124,0,4,-3,0,4,-123,0,4,-3,0,4,-123,0,4,-3,0,4,-124,0,-3,4,-12668,0,-30,4,-98,0,4,-28,0,4,-98,0,4,-28,0,4,-98,0,4,-28,0,4,-98,0,-30,4,-623,0,-4,4,-123,0,-5,4,6,-121,0,-2,4,-3,6,-3,4,-120,0,4,-5,6,-2,4,-120,0,-2,4,-4,6,-2,4,-120,0,-3,4,-2,6,-3,4,-121,0,-6,4,-123,0,-2,6,-2,4,-1137,0,4,-126,0,-3,4,-124,0,-5,4,-124,0,-3,4,-126,0,4,-12669,0,4,-3,0,4,-20,0,4,-3,0,4,-482,0,4,-3,0,4,-20,0,4,-3,0,4,-880,0,-2,6,-125,0,-4,6,-124,0,-4,6,-125,0,-2,6,-1521,0,-3,4,-125,0,-3,4,-125,0,-3,4,-12796,0,4,-3,0,4,-20,0,4,-3,0,4,-482,0,4,-3,0,4,-20,0,4,-3,0,4,-2787,0,-3,4,-125,0,-3,4,-125,0,-3,4,-12669,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-97,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-96,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-96,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-97,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-2789,0,4,-12926,0,-3,4,-22,0,-3,4,-99,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-99,0,-3,4,-22,0,-3,4,-2795,0,-2,14,-120,0,4,-2,14,-2,0,14,-2,0,14,-122,0,-2,14,-12794,0,-3,4,-22,0,-3,4,-99,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-99,0,-3,4,-22,0,-3,4,-2795,0,13,-121,0,4,-2,13,-2,0,13,-125,0,-2,13,-12795,0,4,-24,0,4,-101,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-101,0,4,-24,0,4,-2918,0,4,-2,12,-128,0,-2,12,-12922,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-3045,0,4,-13054,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-16229,0,4,-24,0,4,-16358,0,4,-24,0,4,-16236,0,-2,14,-23,0,-2,14,-95,0,4,-2,14,-2,0,14,-2,0,14,-16,0,4,-2,14,-2,0,14,-2,0,14,-97,0,-2,14,-23,0,-2,14,-16104,0,13,-24,0,13,-96,0,4,-2,13,-2,0,13,-19,0,4,-2,13,-2,0,13,-100,0,-2,13,-23,0,-2,13,-16226,0,4,-2,12,-22,0,4,-2,12,-103,0,-2,12,-23,0,-2,12,-16226,0,4,-24,0,4,-1435956,0],\"uuid\":\"75184B45-EE35-4715-8795-CBF43477C07B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4995126,7756116,9662817,10715503,13082230,15647642,16777215,16511542,6284153,4702084,3642478,4418392,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,4150124,11285042,14243683,14121914,9410378,9072432,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"bounds\":[39,87,37,90,0,40]}");

/***/ }),
/* 47 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[41,86,44,82,0,73],\"size\":[128,128,128],\"data\":[-5696,0,-4,3,-123,0,-6,3,-3,4,-118,0,-7,3,-3,2,-3,4,-114,0,-11,3,-3,2,-2,3,-110,0,-20,3,-106,0,-22,3,4,-103,0,-24,3,2,4,-100,0,-26,3,4,2,4,-98,0,6,-13,1,-13,3,-4,4,-96,0,-2,1,-8,0,-3,3,-3,1,-17,3,-94,0,2,1,-8,0,-5,3,-3,1,-16,3,-93,0,2,1,-9,0,-6,3,-3,1,-16,3,-91,0,-2,2,-10,0,-8,3,-2,1,-13,3,2,4,-90,0,5,1,-11,0,-6,3,1,-2,3,-2,1,-12,3,2,4,-90,0,1,-12,0,-10,3,1,-13,3,-2,4,-89,0,1,-12,0,-10,3,1,-13,3,2,4,-89,0,1,-12,0,-10,3,1,-13,3,2,4,-89,0,1,-13,0,-9,3,1,-15,3,4,-88,0,1,-13,0,3,1,-7,3,1,-15,3,4,-88,0,1,-14,0,1,-7,3,1,-16,3,-88,0,2,-14,0,1,-7,3,1,-16,3,-88,0,2,-15,0,-7,3,1,-16,3,-88,0,2,-16,0,-6,3,1,-15,3,-89,0,2,-18,0,-4,3,1,-15,3,-89,0,2,-18,0,-4,3,1,-14,3,4,-89,0,6,1,-16,0,-4,3,-2,1,-14,3,-91,0,2,1,-15,0,-4,3,1,-15,3,-92,0,2,1,-14,0,-3,3,1,-16,3,-93,0,-2,1,0,1,-11,0,-2,3,1,-16,3,-95,0,1,0,1,-11,0,-2,1,-17,3,-96,0,-14,1,-17,3,-98,0,-10,3,0,-18,3,-101,0,-26,3,-104,0,3,4,-20,3,4,-107,0,-2,4,-17,3,4,-110,0,4,-15,3,-113,0,4,-12,3,-116,0,-5,3,-4,4,-120,0,-4,4,-11772,0,-3,4,3,-123,0,4,-3,2,-5,3,-118,0,4,2,-10,3,4,-112,0,-16,3,4,-2,3,-111,0,-18,3,-112,0,-14,3,2,-2,3,-101,0,-2,6,-10,1,0,-12,3,-2,2,3,-98,0,-2,1,-11,0,-3,1,-12,3,2,-2,3,-96,0,5,1,-13,0,-3,1,-12,3,2,3,-95,0,5,1,-15,0,-3,1,-14,3,-93,0,-2,1,-18,0,-2,1,-13,3,-93,0,1,-19,0,3,1,-13,3,-92,0,5,-20,0,-2,3,1,-12,3,2,-91,0,5,-20,0,-2,3,1,-12,3,2,-91,0,6,-20,0,-2,3,1,-13,3,-91,0,1,-20,0,-2,3,1,-14,3,-90,0,1,-21,0,3,1,-14,3,-90,0,6,-20,0,-2,3,1,-12,3,4,3,-90,0,5,-18,0,-4,3,1,-12,3,-2,4,-90,0,5,-18,0,-4,3,1,-10,3,-3,4,2,-90,0,5,-17,0,-5,3,1,-10,3,-3,4,-91,0,5,-17,0,-5,3,1,-10,3,-3,4,-91,0,5,-16,0,-6,3,1,-10,3,-2,4,2,-92,0,1,-15,0,-5,3,1,-11,3,-2,4,-93,0,-2,1,-14,0,-5,3,1,-11,3,-2,4,-94,0,-2,1,-13,0,-4,3,1,-12,3,4,2,-95,0,2,1,-12,0,-3,3,1,-12,3,-2,4,-97,0,2,6,1,-11,0,-2,1,-13,3,4,2,-99,0,-2,5,-10,1,-15,3,2,-109,0,-18,3,-109,0,-18,3,-108,0,-19,3,-112,0,-15,3,-114,0,-9,3,-120,0,-4,3,-12284,0,2,-3,3,-121,0,-7,3,-3,2,4,-118,0,-10,3,4,-2,3,-117,0,-12,3,2,-113,0,-15,3,2,-102,0,6,-5,1,5,-7,1,-12,3,2,-100,0,2,-9,0,-5,3,1,-12,3,2,-98,0,2,-10,0,-6,3,1,-12,3,2,-96,0,2,-12,0,-6,3,1,-12,3,-95,0,1,-14,0,-18,3,-95,0,6,-15,0,-16,3,4,-95,0,6,-18,0,-14,3,4,-94,0,1,-17,0,-16,3,-94,0,1,-17,0,-3,3,1,-12,3,-94,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-18,0,-2,3,1,-12,3,-94,0,1,-16,0,-4,3,1,-12,3,-94,0,1,-15,0,-5,3,1,-12,3,-94,0,1,-15,0,-5,3,1,-11,3,-95,0,-2,1,-13,0,-6,3,1,-11,3,-96,0,1,-13,0,-5,3,1,-12,3,-97,0,1,-12,0,-4,3,1,-13,3,-98,0,1,-11,0,-3,3,1,-13,3,-100,0,1,6,5,-11,1,-13,3,-111,0,-16,3,-113,0,-12,3,-2,4,-113,0,-6,3,-4,2,3,-3,4,-114,0,-2,3,-4,2,-3,3,-3,4,-118,0,-4,3,-12925,0,-7,3,-119,0,4,-7,3,2,-3,3,-106,0,5,6,1,2,-3,5,2,-4,1,-7,3,2,-2,3,4,-103,0,5,1,-12,0,-2,1,-9,3,4,-94,0,16,-6,0,5,-16,0,1,-6,3,-2,2,3,4,-99,0,5,-18,0,1,-6,3,-2,2,3,4,-98,0,1,-18,0,1,-7,3,2,3,4,-97,0,1,-20,0,-10,3,-97,0,1,-20,0,-11,3,-96,0,1,-20,0,-8,3,2,-2,3,-96,0,1,-20,0,1,-8,3,2,3,-96,0,1,-20,0,1,-8,3,2,-2,3,-95,0,1,-20,0,1,-8,3,2,-2,3,-95,0,1,-20,0,1,-8,3,2,-2,3,-95,0,5,-20,0,1,-8,3,2,3,-96,0,5,-20,0,1,-7,3,2,-2,3,-96,0,5,-20,0,1,-10,3,-96,0,5,-20,0,1,-6,3,2,-2,3,-98,0,2,-18,0,1,-7,3,2,-2,3,-98,0,2,-18,0,1,-6,3,2,-2,3,4,-99,0,2,-16,0,1,-6,3,2,-2,3,4,-101,0,2,1,-12,0,-2,1,-6,3,2,-3,3,-104,0,2,-3,1,-3,2,-5,1,0,-6,3,2,-3,3,-115,0,-8,3,2,-3,3,-116,0,-9,3,-118,0,-6,3,-13307,0,-8,3,-128,0,3,-108,0,-14,1,-6,0,3,-98,0,16,-7,0,-2,1,-11,0,1,0,1,-6,0,3,-104,0,-2,1,-14,0,-2,1,-5,0,-2,3,-102,0,-2,1,-16,0,-2,1,-4,0,-3,3,-101,0,2,-18,0,1,-4,0,-3,3,-101,0,2,-18,0,1,-4,0,-4,3,-100,0,2,-18,0,1,-4,0,-3,3,4,-100,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,6,-18,0,1,-4,0,-3,3,4,-100,0,5,-18,0,1,-4,0,-4,3,-100,0,5,-18,0,1,-4,0,-3,3,-101,0,-2,1,-17,0,1,-4,0,-3,3,-102,0,-2,1,-14,0,-2,1,-5,0,3,4,-104,0,1,0,1,-11,0,-2,1,-6,0,4,-106,0,-2,1,-4,5,-3,1,-5,2,-6,0,4,-126,0,4,-119,0,-7,3,4,-13561,0,-2,3,-5,4,-123,0,3,-4,0,3,-108,0,5,-13,1,-6,0,3,-98,0,16,-7,0,-2,1,-13,0,1,-6,0,3,-104,0,-2,1,-15,0,1,-5,0,3,-103,0,2,1,-17,0,1,-4,0,3,4,-102,0,2,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-103,0,1,-16,0,1,-5,0,3,-105,0,1,-14,0,1,-6,0,4,-106,0,-2,1,-4,5,-4,1,-3,2,1,-6,0,4,-125,0,3,4,-119,0,-3,3,-2,2,-2,3,2,-13561,0,-2,3,-128,0,-4,4,-2,3,-108,0,-2,5,6,-11,1,-6,0,3,-98,0,16,-7,0,1,-14,0,1,-6,0,3,-104,0,1,-16,0,1,-5,0,3,-103,0,2,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-102,0,6,1,-18,0,1,-4,0,4,-102,0,6,1,-18,0,1,-4,0,4,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-104,0,1,-16,0,1,-5,0,3,-105,0,1,-13,0,-2,1,-6,0,3,-106,0,-2,1,-4,5,-5,1,2,-2,1,-6,0,3,-121,0,-6,3,-120,0,3,2,-13566,0,-2,3,-128,0,-2,4,-4,3,-108,0,-3,5,6,-10,1,-6,0,3,-98,0,16,-7,0,1,-14,0,1,-6,0,3,-104,0,1,-16,0,1,-5,0,3,-103,0,2,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,3,-104,0,1,-16,0,1,-5,0,3,-105,0,1,-14,0,1,-6,0,3,-106,0,6,2,-3,5,6,-7,1,2,-6,0,3,-121,0,-6,3,-120,0,-2,3,-13566,0,-2,3,-128,0,-5,3,2,-109,0,-3,5,2,-8,1,-7,0,2,-98,0,17,-7,0,2,-2,1,-11,0,-2,1,-5,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,6,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-106,0,2,1,-12,0,-2,1,-5,0,4,-108,0,6,-2,5,6,-5,1,6,-2,5,-5,0,3,0,4,-121,0,-6,3,-120,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-4,3,2,-99,0,17,-8,0,-2,1,-2,2,-6,1,2,-3,5,-6,0,3,-106,0,-2,1,-13,0,1,-5,0,3,-105,0,1,-15,0,-2,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,2,-104,0,3,1,-16,0,1,-4,0,2,-104,0,5,1,-16,0,1,-4,0,2,-104,0,3,1,-16,0,1,-4,0,2,-104,0,6,1,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-15,0,-2,1,-4,0,3,-106,0,1,-14,0,1,-5,0,3,-107,0,-2,1,-2,5,6,1,-4,2,1,-2,6,5,-6,0,4,-122,0,-2,4,-3,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-5,3,-99,0,15,-8,0,-11,1,2,-2,5,-6,0,3,-106,0,1,-14,0,1,-5,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,6,1,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-106,0,1,-14,0,1,-5,0,3,-107,0,-2,1,5,6,-3,1,-2,2,-5,1,-6,0,2,-122,0,4,-4,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-4,3,4,-99,0,16,-8,0,-13,1,5,-2,0,3,-2,0,-2,4,-106,0,1,-14,0,1,-2,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,6,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,2,-16,0,1,0,3,-2,0,3,-105,0,2,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,2,-106,0,1,-14,0,1,-2,0,3,-2,0,2,-107,0,-14,1,-2,0,3,-2,0,3,2,-122,0,-5,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,3,-103,0,16,-8,0,-14,1,-2,0,-3,3,-108,0,1,-14,0,1,-2,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,2,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-107,0,1,-14,0,1,-2,0,3,0,3,-108,0,-14,1,-2,0,-3,3,-124,0,3,-126,0,3,-125,0,-2,3,-13567,0,3,-128,0,3,-128,0,3,-103,0,16,-8,0,6,-4,1,-3,5,-6,1,-2,0,-3,3,-108,0,1,-2,0,-2,1,-10,0,1,-2,0,3,0,3,-106,0,2,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,5,-16,0,1,0,3,0,3,-107,0,6,-14,0,1,-2,0,3,0,3,-108,0,6,2,-12,1,-2,0,-3,3,-124,0,3,-126,0,3,-126,0,3,-13695,0,-2,3,-128,0,3,-103,0,17,-9,0,6,-2,1,-4,5,6,-4,1,-3,0,3,-2,4,-108,0,-2,5,-12,0,5,1,-2,0,-2,3,4,-107,0,5,-14,0,1,-2,0,3,0,4,-106,0,2,-15,0,-2,1,0,3,0,4,-106,0,1,-16,0,1,0,3,0,2,-105,0,6,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,5,-16,0,1,0,3,0,3,-107,0,1,-14,0,1,-2,0,3,0,3,-107,0,6,1,-12,0,-2,1,-2,0,3,0,4,-109,0,-2,2,-2,1,-2,2,1,6,-4,5,-3,0,-2,3,4,-124,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,3,-103,0,17,-24,0,3,-111,0,5,-12,1,5,-3,0,3,2,-108,0,5,1,-12,0,-2,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,3,2,-107,0,3,1,-14,0,1,-2,0,3,2,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,6,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,2,-14,0,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,-2,1,-12,0,-2,1,-2,0,-2,3,-109,0,1,-3,5,6,-4,1,6,-3,5,1,-3,0,-2,3,-125,0,3,-126,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-12,1,-2,5,-3,0,2,-109,0,1,-14,0,1,-2,0,3,2,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,5,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,6,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,2,-14,0,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,-2,1,-13,0,1,-2,0,-2,3,-109,0,1,-2,5,6,-6,1,6,-2,5,1,-3,0,3,-126,0,3,-126,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-11,1,-3,5,-3,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,2,-109,0,5,-14,0,1,-2,0,2,-109,0,5,-14,0,1,-2,0,2,-109,0,2,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,0,1,-12,0,1,-2,0,2,-110,0,1,5,6,-8,1,6,5,1,-3,0,3,-126,0,3,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-10,1,-4,5,-3,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,5,-14,0,1,-2,0,3,-109,0,6,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-110,0,1,6,-10,1,6,1,-3,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-111,0,2,-8,1,6,-4,5,-3,0,2,-109,0,2,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,5,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,2,-109,0,2,-14,0,1,-2,0,2,-110,0,2,-5,1,-2,2,-6,1,-3,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-112,0,-7,1,6,-4,5,-4,0,3,-110,0,5,-11,0,-2,1,-3,0,3,-109,0,-2,1,-13,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,6,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,2,1,-12,0,-2,1,-2,0,3,-110,0,5,1,-11,0,1,-3,0,2,-111,0,2,-3,1,-4,2,1,6,-2,5,-4,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,15,-24,0,3,-128,0,3,-110,0,-2,5,-12,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,5,-4,0,1,-7,0,1,-3,0,3,-110,0,-3,5,-2,2,-6,1,-2,2,1,-3,0,2,-127,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-128,0,3,-110,0,6,5,-10,1,6,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,6,-12,0,1,-3,0,3,-110,0,5,-5,0,1,-6,0,1,-3,0,3,-110,0,6,5,6,2,-8,1,2,1,-3,0,3,-127,0,3,-117,0,-2,11,-7,0,3,-117,0,-3,11,-6,0,2,-118,0,-3,11,-4,0,-2,3,-13822,0,3,2,-128,0,3,-103,0,16,-23,0,-2,3,-128,0,3,-111,0,5,-9,1,6,5,-4,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,5,-5,0,1,-6,0,1,-3,0,3,-111,0,5,-11,1,-4,0,3,-127,0,3,-116,0,-3,11,-6,0,-2,3,-117,0,-3,11,-6,0,3,-118,0,-3,11,-5,0,3,-13823,0,3,-128,0,3,-103,0,16,-23,0,-2,3,-127,0,-2,3,-111,0,5,-8,1,6,-2,5,-3,0,-2,3,-110,0,5,-12,0,1,-2,0,-2,3,-110,0,2,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,5,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,6,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,6,-6,0,1,-5,0,1,-2,0,-2,3,-111,0,6,-11,1,-3,0,-2,3,-126,0,-2,3,-116,0,-3,11,-6,0,-2,3,-117,0,-3,11,-6,0,3,-118,0,-3,11,-5,0,3,-13823,0,3,-128,0,3,-103,0,16,-23,0,-2,3,-127,0,3,4,-111,0,5,1,6,-2,5,-4,1,-3,5,-3,0,-2,3,-110,0,5,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,6,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,2,-12,0,2,-2,0,-2,3,-111,0,6,-11,1,-3,0,-2,3,-116,0,-3,3,-7,0,3,4,-115,0,3,-3,11,3,-5,0,-2,3,-116,0,3,-3,11,3,-5,0,3,-117,0,3,-3,11,3,-4,0,3,-119,0,-3,3,-13701,0,3,-128,0,3,-103,0,16,-23,0,3,-128,0,2,-112,0,5,1,-4,5,-2,1,-4,5,-3,0,2,-111,0,6,-2,1,-10,0,1,-2,0,2,-111,0,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,6,1,-12,0,1,-2,0,2,-111,0,1,-12,0,1,-2,0,2,-111,0,2,-12,0,1,-2,0,2,-111,0,2,-12,0,2,-2,0,2,-112,0,-11,1,2,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,6,-4,1,-5,0,3,-117,0,2,-3,0,6,-5,0,3,-117,0,5,-3,0,6,-4,0,3,-119,0,5,-2,6,-13701,0,3,-128,0,3,-103,0,17,-23,0,3,-128,0,2,-112,0,-12,12,-3,0,2,-111,0,12,-12,1,12,-2,0,2,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,2,-111,0,12,-12,1,12,-2,0,2,-112,0,-12,12,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,2,-4,1,-5,0,3,-117,0,1,-3,0,1,-5,0,3,-117,0,5,-3,0,6,-4,0,3,-118,0,-2,5,1,6,5,-13700,0,3,-128,0,3,-103,0,17,-23,0,3,-128,0,2,-112,0,-12,12,-3,0,2,-111,0,12,-12,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,-12,1,12,-2,0,2,-112,0,-12,12,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,-5,1,-5,0,3,-117,0,1,-3,0,1,-5,0,3,-117,0,1,-3,0,1,-4,0,3,-118,0,-5,1,-13700,0,3,-128,0,3,-103,0,16,-23,0,3,-128,0,2,-113,0,-10,12,-4,0,2,-112,0,12,-10,1,12,-3,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-9,0,-2,1,12,-2,0,3,-112,0,12,-10,1,12,-3,0,3,-113,0,-10,12,-4,0,2,-117,0,-3,1,-7,0,2,-116,0,-6,1,-4,0,3,-116,0,5,-5,0,1,-4,0,3,-116,0,1,-5,0,5,-3,0,3,-118,0,-4,1,5,-13680,0,2,-2,1,-4,2,-2,1,-11,0,3,-106,0,3,-4,1,-2,2,-3,1,-12,0,3,-103,0,16,0,3,-9,1,-12,0,3,-106,0,-2,2,-5,1,-2,2,-13,0,2,-127,0,3,-114,0,-8,1,-5,0,3,-113,0,2,-9,1,-4,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-112,0,6,1,-8,0,-2,1,-3,0,3,-113,0,6,-9,1,-4,0,3,-114,0,6,-6,1,-6,0,3,-115,0,-6,1,-6,0,3,-116,0,-6,1,-4,0,3,2,-115,0,5,-5,0,1,-4,0,3,-116,0,6,-5,0,1,-4,0,3,-116,0,1,-5,0,6,-3,0,3,-117,0,6,-4,1,6,5,-123,0,-3,5,-13427,0,6,-4,1,6,-119,0,2,-9,1,-2,5,-9,0,3,-103,0,-4,11,-11,1,-10,0,3,-102,0,-4,11,-11,1,-10,0,3,-105,0,3,5,2,-7,1,-2,2,-11,0,2,-127,0,3,-115,0,-6,1,-6,0,3,-113,0,2,-9,1,-4,0,3,-113,0,2,-8,0,1,-4,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,2,-8,0,1,-4,0,3,-113,0,-2,2,-6,1,0,1,-4,0,3,-115,0,2,-5,1,0,1,-4,0,3,-115,0,2,-5,1,-5,0,-2,3,-116,0,-6,1,-4,0,3,2,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-3,0,3,-117,0,-6,1,6,-122,0,6,2,-3,5,-13425,0,6,-7,1,-118,0,3,-11,1,5,6,-111,0,-4,11,-13,1,-8,0,3,-102,0,-4,11,-13,1,-8,0,3,-105,0,3,-2,5,-11,1,-9,0,3,-127,0,3,-127,0,3,-113,0,-10,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-7,0,-2,1,-4,0,3,-113,0,-10,1,-4,0,3,-115,0,1,-5,0,-2,1,-4,0,3,-115,0,-5,1,-7,0,3,-116,0,-6,1,-4,0,-2,3,-115,0,1,-4,0,-2,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,-6,1,6,-122,0,-2,1,-3,5,-13425,0,-7,1,2,-118,0,3,-9,1,2,-3,1,6,5,-109,0,-4,11,-15,1,-6,0,3,-103,0,-3,11,-15,1,-6,0,3,-105,0,3,-3,5,-12,1,-7,0,3,-127,0,3,-113,0,-10,1,-4,0,3,-112,0,5,-11,1,-3,0,3,-112,0,5,-10,0,1,-3,0,3,-112,0,6,-10,0,1,-3,0,3,-112,0,6,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,5,-11,1,-3,0,3,-113,0,-4,1,0,-5,1,-4,0,3,-117,0,-4,1,-6,0,3,-116,0,-6,1,-4,0,-2,3,-115,0,1,-4,0,-2,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,-6,1,2,-122,0,-2,1,2,-2,5,-13426,0,-5,1,2,-120,0,-8,1,-2,2,-5,1,5,-111,0,3,-16,1,-5,0,3,-103,0,15,0,3,-16,1,-5,0,3,-106,0,-4,5,-12,1,-6,0,3,-127,0,3,-113,0,-10,1,-4,0,3,9,-111,0,5,-11,1,-3,0,3,9,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,-12,1,-3,0,3,7,-111,0,9,-10,1,-4,0,3,9,-112,0,10,-2,0,-5,1,-6,0,3,-113,0,13,-3,0,-5,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,2,-5,1,2,-122,0,-3,1,-2,5,-13436,0,-2,2,6,-114,0,-2,6,-4,5,-4,1,2,-5,1,-111,0,1,6,-3,5,-12,1,-4,0,3,-103,0,17,-2,0,-18,1,-3,0,3,-107,0,-4,5,-12,1,-5,0,3,-127,0,3,9,-112,0,-10,1,-4,0,3,9,-111,0,2,-11,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,-12,1,-3,0,3,7,-111,0,9,-10,1,-4,0,3,7,-112,0,10,-2,0,-5,1,-6,0,3,9,-112,0,7,-7,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-2,1,-2,5,-13435,0,-2,2,-2,1,6,-118,0,5,-10,1,-116,0,-2,5,-10,1,-4,0,3,-103,0,17,-7,0,-13,1,-3,0,3,-112,0,-12,1,-4,0,3,-127,0,3,9,-112,0,-10,1,-4,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,7,-10,1,-4,0,3,7,-112,0,10,1,0,-5,1,-6,0,3,7,-112,0,7,-7,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-2,1,2,5,-13435,0,2,-3,1,5,-122,0,-7,1,-120,0,5,-7,1,-4,0,4,-103,0,16,-11,0,-9,1,-3,0,3,-115,0,-9,1,-4,0,3,-127,0,3,7,-112,0,-10,1,-4,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,7,-111,0,7,-10,1,-4,0,3,7,-112,0,10,-7,1,-6,0,3,7,-112,0,7,-2,1,-5,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,4,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,2,-3,1,5,-122,0,-7,1,-120,0,5,-7,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-116,0,-9,1,-3,0,3,-127,0,3,9,-113,0,-10,1,-3,0,3,9,-112,0,-2,1,-9,0,1,-2,0,3,7,-112,0,-2,1,-9,0,1,-2,0,3,7,-112,0,1,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,10,-112,0,1,-10,0,1,-2,0,3,7,-112,0,1,-10,0,1,-2,0,3,7,-112,0,7,-10,1,-3,0,3,7,-113,0,10,-7,1,-5,0,3,7,-113,0,7,-2,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,1,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,-3,1,-2,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,-12,1,-2,0,3,9,-112,0,1,-10,0,1,-2,0,3,7,-111,0,5,-2,1,-10,0,1,0,3,7,-111,0,6,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,5,-14,0,3,7,-111,0,9,1,-9,0,-2,1,-2,0,3,7,-111,0,-2,10,-10,1,-3,0,3,7,-112,0,13,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,5,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,2,-6,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,-3,1,-2,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,-12,1,-2,0,3,9,-111,0,1,-11,0,-2,1,0,3,7,-111,0,6,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,6,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-111,0,1,-11,0,-2,1,0,3,7,-111,0,9,1,-9,0,-2,1,-2,0,3,7,-111,0,10,-11,1,-3,0,3,7,-112,0,7,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,5,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,2,-6,1,-122,0,-5,1,-13435,0,-2,1,-3,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,1,-3,0,-8,1,-2,0,3,7,-111,0,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-110,0,2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,6,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-111,0,9,-10,0,-2,1,-2,0,3,7,-111,0,10,1,-3,0,-7,1,-3,0,3,9,-112,0,7,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,1,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,-7,1,-122,0,6,-3,1,2,-13435,0,6,1,-3,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,17,-11,0,-9,1,-2,0,2,-115,0,-10,1,-3,0,2,-113,0,1,-3,0,-8,1,-2,0,3,7,-111,0,1,-12,0,1,0,3,10,-110,0,5,1,-12,0,1,0,3,10,-110,0,5,1,-12,0,1,0,3,10,-110,0,-2,1,-12,0,1,0,3,10,-110,0,-2,1,-12,0,1,0,3,9,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,2,1,-12,0,1,0,3,7,-111,0,10,-10,0,-2,1,-2,0,3,7,-111,0,10,1,-3,0,-7,1,-3,0,3,9,-111,0,-2,7,-3,1,-5,0,1,-3,0,3,2,-116,0,1,-5,0,1,-3,0,2,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,-7,1,-122,0,6,-2,1,2,5,-13436,0,6,-2,5,-123,0,5,-6,1,-120,0,5,-7,1,-2,0,3,-105,0,16,-11,0,-9,1,0,3,-116,0,-10,1,-2,0,3,-114,0,1,-3,0,-8,1,0,3,7,-112,0,5,-12,0,1,3,7,-111,0,5,1,-12,0,1,3,10,-111,0,5,1,-12,0,1,3,10,-111,0,2,1,-12,0,1,3,9,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,2,1,-12,0,1,3,10,-111,0,2,1,-12,0,1,3,10,-112,0,10,-11,0,1,0,3,7,-112,0,7,1,-3,0,-7,1,-2,0,3,9,-112,0,7,9,-3,1,-5,0,1,0,1,-2,3,-117,0,1,-5,0,1,-2,0,3,-118,0,1,-5,0,1,-2,0,3,-118,0,-7,1,-121,0,5,-6,1,-123,0,6,-2,5,-13564,0,-4,1,2,-122,0,2,1,-2,0,-2,1,5,-2,0,3,-105,0,16,-11,0,2,0,-6,1,5,0,3,-116,0,-10,1,-2,0,3,-114,0,1,-3,0,-8,1,0,3,7,-112,0,5,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,10,-11,0,1,0,3,10,-112,0,7,1,-3,0,-7,1,-2,0,3,9,-112,0,-2,9,-3,1,-5,0,1,0,1,-2,3,-117,0,2,-5,0,1,-2,0,3,-118,0,1,-5,0,1,-2,0,3,-118,0,5,-5,1,5,-122,0,6,-3,1,5,-13692,0,-2,1,2,-124,0,-5,1,-3,0,3,-105,0,16,-12,0,-7,1,-2,0,3,-116,0,-10,1,-2,0,3,-114,0,6,-3,0,-8,1,0,3,9,-113,0,6,-11,0,1,3,7,-112,0,5,-12,0,1,3,7,-112,0,5,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,2,1,-11,0,1,3,7,-112,0,10,1,-10,0,1,0,3,7,-112,0,7,-2,1,-2,0,-7,1,-2,0,3,7,-112,0,-2,9,-3,1,-5,0,1,-2,0,-2,3,-117,0,2,-5,0,1,-2,0,3,-118,0,2,-4,0,1,5,-2,0,3,-119,0,-5,1,-124,0,6,1,5,-13561,0,3,-8,0,3,-118,0,3,-8,0,3,-117,0,3,-10,0,8,-106,0,16,-9,0,3,-4,0,-3,1,-3,0,8,3,-115,0,3,-2,0,-2,1,-6,0,-2,3,9,-115,0,-4,1,-5,0,-4,3,9,-113,0,2,-11,1,-2,3,9,-113,0,1,-10,0,1,-2,3,10,-113,0,1,-10,0,1,-2,3,10,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,10,-113,0,5,-9,0,-2,1,-2,3,10,-112,0,7,1,-3,0,-7,1,-3,3,9,-112,0,-2,7,-3,1,-5,0,1,0,-3,3,9,-112,0,13,3,-3,1,-5,0,1,0,-2,3,7,-114,0,3,-2,0,2,-5,0,1,0,8,3,-115,0,3,-3,0,-5,1,-2,0,8,-117,0,3,-3,0,-3,1,-2,0,3,-118,0,3,-8,0,3,-13303,0,-8,3,-120,0,-8,3,-120,0,-8,3,-120,0,-8,3,-119,0,3,-8,0,3,-107,0,16,-10,0,3,-8,0,3,-118,0,3,-8,0,3,7,9,-116,0,-3,1,-6,0,-2,3,7,9,-114,0,5,-3,0,-6,1,-3,3,7,-114,0,2,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,-2,1,-9,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,5,-10,0,-2,3,7,-114,0,5,-10,0,-2,3,7,-113,0,10,1,-3,0,-6,1,-3,3,7,-114,0,7,-3,1,-6,0,-2,3,-2,7,-114,0,7,3,-8,0,3,7,10,-116,0,3,-8,0,3,-118,0,-2,3,-7,0,3,-119,0,-8,3,-120,0,-8,3,-120,0,3,-7,0,3,-119,0,3,-7,0,3,-12920,0,-6,3,-122,0,-7,3,-121,0,-6,3,-123,0,-4,5,-123,0,-6,3,-121,0,-8,3,-108,0,16,-11,0,-8,3,-120,0,3,-6,0,3,7,-119,0,3,-6,0,3,-2,7,-117,0,1,3,1,-5,0,3,-3,7,-116,0,1,3,-6,1,-2,3,7,9,-116,0,1,3,-7,0,3,-2,7,-116,0,1,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,1,-8,0,3,7,10,-116,0,6,-8,0,3,-2,7,-116,0,6,3,-6,1,-2,3,-2,7,-115,0,10,1,-8,3,-3,7,-116,0,7,-8,3,-2,7,-117,0,10,-8,3,10,-119,0,-8,3,-120,0,-8,3,-121,0,-6,3,-123,0,-4,5,-123,0,-7,3,-121,0,-7,3,-121,0,3,-5,0,-2,3,-12665,0,-4,3,-123,0,-6,3,-124,0,5,1,-125,0,-3,5,1,-124,0,-4,5,-124,0,-4,5,-238,0,15,-12,0,-6,3,-122,0,-6,3,7,-121,0,-6,3,-2,7,-120,0,-6,3,-2,7,13,-119,0,-7,3,-2,7,10,-118,0,-2,3,-2,11,-3,3,-2,7,9,-117,0,3,-5,11,-2,3,-3,7,-116,0,3,-7,11,3,-2,7,10,-117,0,-7,11,3,-2,7,10,-116,0,3,-7,11,3,-2,7,10,-117,0,3,-5,11,-2,3,-2,7,9,-117,0,1,-2,3,-2,11,-3,3,-3,7,-118,0,-7,3,-2,7,10,-116,0,-2,7,-6,3,-2,7,13,-118,0,7,-6,3,-2,7,-119,0,9,7,-5,3,7,-121,0,-6,3,-251,0,-4,5,-124,0,1,-3,5,-124,0,1,-3,5,-125,0,-2,5,-124,0,-7,3,-122,0,-5,3,-12539,0,-4,3,-878,0,17,-270,0,-2,9,-2,7,10,-122,0,9,-5,7,10,-120,0,13,7,-2,3,-2,0,-2,7,9,-119,0,-2,3,-2,11,3,-2,0,-3,7,-117,0,3,-5,11,3,0,-3,7,-118,0,-6,11,3,-3,7,-118,0,-6,11,3,-3,7,-118,0,-6,11,3,-3,7,-117,0,3,-5,11,3,0,-3,7,-118,0,-2,3,-2,11,3,-2,0,-3,7,-118,0,-8,7,13,-119,0,-8,7,-120,0,-7,7,-122,0,9,-4,7,9,-1018,0,-5,3,-13421,0,16,-271,0,-3,7,-124,0,-5,7,-122,0,-8,7,-119,0,7,0,-2,7,-3,0,-3,7,-120,0,-2,11,-3,0,-3,7,-119,0,-4,11,-2,0,-3,7,-119,0,-4,11,-2,0,-3,7,-119,0,-4,11,-2,0,-3,7,-120,0,-2,11,-6,7,-121,0,-7,7,-118,0,-9,7,-120,0,-7,7,-122,0,-5,10,-14572,0,16,-271,0,-3,7,-124,0,-5,7,-122,0,7,-4,0,-3,7,-119,0,7,0,-8,7,-120,0,-8,7,-120,0,-2,11,-4,0,-2,7,-120,0,-2,11,-3,0,-3,7,-120,0,-2,11,-4,0,-2,7,-121,0,-3,7,-2,0,-2,7,-122,0,-6,7,-118,0,-9,7,-120,0,-7,7,-122,0,7,-3,10,7,-14572,0,16,-271,0,10,-2,7,-124,0,-5,7,-122,0,7,-3,0,-4,7,-119,0,7,-3,0,-6,7,-120,0,-3,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-120,0,-3,11,-3,0,-2,7,-122,0,-6,7,-118,0,9,-8,7,-120,0,-7,7,-122,0,9,-4,7,-14572,0,16,-271,0,-2,10,9,-124,0,9,-4,7,-122,0,7,-4,0,-3,7,-119,0,7,0,-3,11,-2,0,-2,7,10,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-120,0,-3,11,0,-4,7,-118,0,9,-7,7,10,-121,0,-4,7,10,7,-123,0,9,-2,7,-14573,0,16,-398,0,-2,9,-3,7,-122,0,7,-3,11,0,-3,7,-119,0,7,-5,11,0,-2,7,10,-119,0,-6,11,0,7,9,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-118,0,9,-5,11,0,-3,7,-119,0,7,-3,11,-4,7,-121,0,-5,7,10,-14699,0,16,-398,0,-5,7,-122,0,7,-4,11,-3,7,-119,0,7,-6,11,-2,7,10,-119,0,-7,11,7,9,-119,0,-7,11,7,9,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-118,0,7,-6,11,-2,7,10,-119,0,7,-4,11,-3,7,-121,0,-5,7,10,-14699,0,17,-398,0,-4,7,9,-122,0,10,-4,11,-3,7,-119,0,7,-6,11,-2,7,-120,0,-7,11,7,10,-119,0,-7,11,7,10,-119,0,-7,11,7,10,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-118,0,10,-6,11,7,13,-120,0,7,-4,11,-3,7,-121,0,-5,7,10,-14699,0,15,-398,0,-2,7,-2,9,10,-122,0,7,-4,11,13,-122,0,10,-5,11,7,10,-119,0,7,-7,11,7,-120,0,-7,11,7,-120,0,-7,11,7,-120,0,-7,11,7,-119,0,10,-7,11,7,-120,0,7,-5,11,-2,7,-120,0,10,-4,11,7,-123,0,-5,9,-14700,0,14,-399,0,7,-2,10,-124,0,7,-2,11,-2,7,-122,0,7,-4,11,7,13,-121,0,7,-5,11,7,10,-119,0,7,-7,11,7,-120,0,-7,11,7,-119,0,10,-7,11,7,-120,0,7,-5,11,-2,7,-120,0,10,-4,11,-2,7,-122,0,7,-2,11,-2,7,-124,0,-3,10,-14573,0,14,-126,0,-2,15,14,-12,0,-2,6,-4,3,-108,0,15,-12,0,6,1,-6,3,-119,0,6,1,-8,3,-117,0,6,1,-10,3,-116,0,6,-12,3,-115,0,-5,3,-3,11,-5,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-5,3,-3,11,-5,3,-115,0,-13,3,-116,0,-11,3,-118,0,-9,3,-120,0,-7,3,-122,0,-2,1,-3,3,-14060,0,14,-126,0,-3,15,-12,0,-3,5,-2,6,2,-106,0,14,15,16,-2,15,-10,0,5,-6,0,3,-106,0,17,-2,15,-10,0,5,-8,0,3,-106,0,15,-10,0,5,-4,0,-3,12,-3,0,3,-115,0,5,-4,0,12,-3,3,12,-3,0,2,-114,0,5,-3,0,-2,12,-3,3,-2,12,-3,0,2,-113,0,3,-2,0,-2,12,-5,3,-2,12,-2,0,2,-113,0,3,-2,0,12,-7,3,12,-2,0,2,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,-2,12,-5,3,-2,12,-2,0,3,-113,0,3,-3,0,-2,12,-3,3,-2,12,-3,0,3,-114,0,6,-3,0,12,-3,3,12,-3,0,3,-116,0,5,-3,0,-3,12,-3,0,3,-118,0,5,-7,0,3,-120,0,1,-5,0,3,-122,0,-3,1,-2,3,-13930,0,17,-4,16,-123,0,-5,16,-123,0,-5,16,-123,0,17,-3,16,17,-123,0,17,-3,16,17,-141,0,-3,12,-125,0,12,3,12,-124,0,12,-3,3,12,-122,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-122,0,12,-3,3,12,-124,0,12,3,12,-125,0,-3,12,-14316,0,17,-2,16,-125,0,-3,16,-125,0,-2,16,17,-125,0,-3,16,-125,0,-2,16,17,-125,0,-3,16,-125,0,17,-2,16,-142,0,3,-2,1,-124,0,-4,3,2,-123,0,-4,3,2,-123,0,-5,3,-123,0,-5,3,-123,0,-5,3,-123,0,1,-4,3,-123,0,1,-3,3,1,-124,0,-2,3,1,-14316,0,-3,16,-125,0,-3,16,-125,0,17,-2,16,-126,0,15,-126,0,-2,16,17,-126,0,16,-126,0,15,-2,16,-125,0,-3,16,-125,0,-3,16,-141,0,-4,3,1,-123,0,1,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,5,-123,0,-4,3,6,-123,0,-5,3,-124,0,-2,3,1,-14316,0,16,-2,17,-125,0,-2,16,17,-125,0,17,-2,16,-254,0,17,-126,0,17,16,17,-126,0,16,-254,0,15,-2,16,-125,0,-3,16,-125,0,17,16,17,-13,0,1,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,6,-123,0,2,-4,3,-124,0,-3,3,-125,0,-3,3,-14829,0,17,-126,0,17,16,17,-126,0,16,-399,0,-3,3,-124,0,-5,3,-123,0,-5,3,-123,0,-5,3,-123,0,2,-4,3,-124,0,-3,3,-125,0,-3,3,-14957,0,17,-126,0,17,16,17,-126,0,16,-399,0,-3,3,-125,0,-3,3,-124,0,-5,3,-123,0,2,-4,3,-124,0,-3,3,-125,0,-2,3,2,-125,0,-2,3,2,-14957,0,16,-126,0,17,-2,16,-126,0,16,-271,0,-3,3,-125,0,-3,3,-125,0,1,3,1,-125,0,5,3,5,-125,0,5,3,6,-125,0,-2,3,2,-125,0,-2,3,2,-15085,0,15,-126,0,15,16,14,-126,0,15,-271,0,-3,3,-125,0,1,3,5,-124,0,-2,5,3,-2,5,-124,0,5,3,6,-125,0,-3,3,-125,0,-2,3,2,-14828,0,-2,17,16,-14,0,5,6,3,-108,0,-3,16,-125,0,-2,16,17,-126,0,15,-126,0,14,16,15,-126,0,14,-126,0,-3,16,-14,0,-3,3,-108,0,17,-2,16,-14,0,5,3,5,-108,0,-3,17,-13,0,-2,5,3,-2,5,-124,0,5,3,1,-125,0,-3,3,-125,0,-3,3,-15101,0,-2,3,1,-108,0,17,-2,16,-14,0,-3,3,-108,0,-2,16,15,-14,0,-3,3,-108,0,15,-2,16,-125,0,-2,16,15,-14,0,-3,3,-108,0,17,-2,16,-14,0,6,3,1,-124,0,-2,5,3,-2,5,-124,0,5,3,5,-125,0,-3,3,-125,0,-3,3,-15469,0,14,-15,0,-3,3,-108,0,-3,14,-14,0,1,-2,3,-109,0,14,-15,0,6,3,6,-125,0,5,3,5,-125,0,5,3,5,-125,0,-3,3,-125,0,-3,3,-15725,0,14,-15,0,-3,3,-125,0,-3,3,-125,0,-3,3,-125,0,-3,3,-125,0,-3,3,-893506,0],\"uuid\":\"C4E0CFD1-227D-4C27-8038-65D60F3231F9\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[11141120,8912896,7798784,5570560,14483456,12255232,8947848,4456448,7829367,11184810,13395507,1118481,5592405,13382400,16737792,13408512,16750848],\"bounds\":[41,86,44,82,0,73]}");

/***/ }),
/* 48 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[50,76,51,76,8,54],\"size\":[128,128,128],\"data\":[-137669,0,-3,6,-126,0,-2,6,-126,0,-2,6,-126,0,6,-127,0,6,-1663,0,-2,1,-125,0,-4,1,-124,0,-4,1,6,-124,0,-3,1,6,-125,0,-3,6,-13819,0,-2,6,-126,0,-2,6,-126,0,-2,6,-126,0,6,-1535,0,1,-126,0,-3,1,-126,0,-3,1,-126,0,-2,1,-14205,0,1,-127,0,-2,1,-126,0,-2,1,-126,0,1,-1406,0,-3,1,-125,0,-3,1,-125,0,-4,1,-126,0,1,-14206,0,1,-127,0,-2,1,-126,0,-2,1,-126,0,-2,1,-1406,0,-2,1,-125,0,1,-2,8,1,-124,0,1,8,1,-126,0,1,-14207,0,1,-126,0,-3,1,-125,0,-3,1,-125,0,-3,1,-1406,0,8,-126,0,-3,8,-126,0,-2,8,-14461,0,-3,1,-125,0,-3,1,-125,0,-2,1,8,-1272,0,2,-8,0,2,-118,0,2,-4,0,-2,8,-2,0,2,-118,0,2,-4,0,-3,8,0,2,-118,0,2,-5,0,-2,8,0,2,-118,0,2,-8,0,2,-118,0,2,-8,0,2,-105,0,-3,1,-14223,0,-3,8,-125,0,-3,8,-126,0,-2,8,-888,0,2,-8,0,3,-118,0,2,-8,0,3,-119,0,6,-7,0,6,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-106,0,-3,1,-14222,0,-2,8,-126,0,-3,8,-125,0,-3,8,-760,0,2,-8,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-107,0,-3,1,-14349,0,-3,8,-125,0,-3,8,-125,0,-3,8,-633,0,3,-7,0,3,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-108,0,-3,1,-14348,0,-3,8,-125,0,-3,8,-125,0,-3,8,-633,0,3,-7,0,3,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-109,0,-3,1,-14347,0,-2,8,-126,0,-3,8,-125,0,-3,8,-125,0,-3,8,-505,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-2,0,-2,8,-3,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-110,0,-3,1,-14474,0,-3,8,-125,0,-3,8,-125,0,-3,8,-125,0,-2,8,-378,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-2,0,-3,8,-2,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-111,0,-3,1,-14473,0,-2,8,-125,0,-4,8,-124,0,-4,8,-125,0,-3,8,-377,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-3,0,-2,8,-2,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-112,0,-3,1,-14599,0,-4,8,-124,0,-5,8,-123,0,-5,8,-124,0,-3,8,-249,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-113,0,-3,1,-14599,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-124,0,-3,8,-121,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-114,0,-3,1,-14725,0,-4,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,-3,0,-3,8,0,3,-119,0,6,-7,0,6,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-115,0,-3,1,-14725,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,-2,0,-5,8,3,-119,0,6,-3,0,-3,8,0,6,-119,0,1,-7,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-5,8,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,2,-3,0,-2,8,-2,0,2,-114,0,-4,7,0,2,-7,0,2,-116,0,-3,1,-14467,0,-3,8,-125,0,-3,8,-126,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,0,-6,8,3,-119,0,6,0,-5,8,0,6,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-6,8,2,-115,0,-2,7,-2,0,2,-2,0,-4,8,0,2,-114,0,-4,7,0,2,-7,0,2,-114,0,-4,7,0,2,-7,0,2,-115,0,-2,7,-3,1,-123,0,-2,7,-14341,0,-3,8,-125,0,-3,8,-126,0,8,-127,0,-3,8,-124,0,-5,8,-122,0,-6,8,-120,0,3,0,-6,8,3,-119,0,1,0,-5,8,0,1,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-5,8,0,2,-119,0,2,0,-6,8,2,-114,0,-4,7,0,2,-3,0,-2,8,-2,0,2,-114,0,-4,7,0,2,-7,0,2,-114,0,-4,7,-3,1,-122,0,-2,7,-14214,0,-2,4,-125,0,4,-2,8,4,-124,0,4,8,0,4,-124,0,4,-2,0,4,-125,0,-2,4,-125,0,-5,8,-122,0,-6,8,-120,0,3,0,-6,8,3,-119,0,1,0,-5,8,0,1,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-5,8,0,2,-119,0,2,0,-6,8,2,-115,0,-2,7,-2,0,2,-2,0,-4,8,0,2,-114,0,-4,7,-2,0,2,-6,0,2,-114,0,-4,7,0,-3,1,-121,0,-2,7,-14214,0,-2,5,-125,0,5,-2,6,5,-124,0,5,6,0,5,-124,0,5,-2,0,5,-125,0,-2,5,-125,0,-4,8,-123,0,-6,8,-121,0,2,-6,8,3,-120,0,1,-5,8,0,1,-120,0,1,-5,8,0,1,-120,0,1,-6,8,1,-120,0,1,-5,8,0,1,-120,0,2,-5,8,0,2,-120,0,2,-6,8,2,-120,0,2,0,-4,8,-2,2,-114,0,-4,7,-2,0,2,-5,0,2,-115,0,-4,7,-2,0,-3,1,-119,0,-4,7,-125,0,-2,7,-14086,0,-2,6,-125,0,-4,6,-124,0,-2,6,0,6,-124,0,6,-2,0,6,-124,0,-3,6,-126,0,-3,8,-124,0,-2,8,1,8,2,-121,0,2,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,2,-121,0,2,-5,8,2,-121,0,2,0,-4,8,2,-121,0,-2,2,-4,0,2,-116,0,-2,7,-4,0,-5,2,-116,0,-4,7,-3,0,-2,1,-2,5,-117,0,-4,7,-124,0,-4,7,-14085,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-3,6,-125,0,2,-4,1,-123,0,2,-3,1,2,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,2,-122,0,2,0,-3,8,2,-122,0,2,0,-3,8,2,-123,0,-4,2,-116,0,-4,7,-124,0,-4,7,-4,0,-3,5,-117,0,-4,7,-124,0,-4,7,-14213,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-126,0,2,-126,0,-3,2,-124,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,-5,2,-244,0,-3,7,-2,0,-3,6,-119,0,-4,7,-2,0,-2,6,-2,5,-2,9,-116,0,-4,7,-3,0,-3,6,-118,0,-4,7,-14213,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-252,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-125,0,-3,2,-245,0,-4,7,-4,6,-120,0,-4,7,-5,6,-3,9,8,-115,0,-4,7,0,-5,6,5,-2,4,-115,0,-4,7,-2,0,-4,6,-2,5,-116,0,-3,7,-14085,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-252,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-248,0,-3,6,-122,0,-4,7,-5,6,-3,0,8,-115,0,-4,7,-6,6,-3,9,8,-114,0,-4,7,-6,6,-2,5,8,-115,0,-4,7,0,-5,6,-2,5,4,-115,0,-4,7,-3,0,-4,6,-14077,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-125,0,-2,6,-126,0,-2,5,-125,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-125,0,-2,5,-249,0,-3,6,-123,0,-3,7,-2,6,-7,0,8,-114,0,-4,7,-2,6,0,-2,6,-2,0,-3,9,8,-113,0,-4,7,-7,6,0,4,8,-114,0,-4,7,-3,0,-4,6,0,4,-116,0,-3,7,-14212,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-125,0,-2,4,-125,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-125,0,-2,4,-250,0,-3,6,-124,0,-4,6,-123,0,-4,7,6,-5,0,-3,9,-115,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14083,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-3,1,-125,0,-4,1,-124,0,-5,1,-123,0,-5,1,-123,0,-5,1,-123,0,-4,1,-124,0,-3,1,-250,0,-3,6,-125,0,-4,6,-122,0,-4,7,-2,6,-5,0,-3,9,-114,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14083,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-2,6,-2,1,-124,0,6,-3,1,-123,0,-5,1,6,-122,0,-5,1,-2,6,-121,0,-5,1,-2,6,-121,0,-5,1,-2,6,-121,0,-5,1,6,-123,0,-4,1,-124,0,6,-3,1,-122,0,-5,6,-122,0,-6,6,-120,0,-4,7,-3,6,-5,0,-3,9,-113,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14082,0,-2,6,-125,0,-4,6,-124,0,6,-3,1,-124,0,6,-3,1,-124,0,-3,6,1,-123,0,-7,6,-121,0,-7,6,-121,0,-7,6,-121,0,-7,6,-121,0,-7,6,-122,0,-3,6,1,-124,0,6,-3,1,-123,0,-4,6,1,-122,0,-5,6,-121,0,-3,7,-3,6,-6,0,-2,9,-113,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14082,0,-2,6,-125,0,-4,6,-124,0,6,-3,1,-124,0,-3,6,1,-123,0,-7,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-121,0,-7,6,-122,0,-3,6,1,-123,0,-4,6,1,-123,0,-4,6,-121,0,-4,7,-2,6,-122,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14210,0,-2,6,-125,0,-4,6,-123,0,-6,6,-121,0,-8,6,-120,0,-7,6,-121,0,-3,6,-2,4,-2,1,-121,0,-3,6,-2,4,-2,1,-121,0,-3,6,-2,4,-2,1,-121,0,-7,6,-121,0,-8,6,-121,0,-7,6,-122,0,-4,6,-124,0,-3,6,-121,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14337,0,-2,6,-124,0,-6,6,-121,0,-7,6,-121,0,-3,6,-2,4,1,4,-121,0,-3,6,-3,4,-122,0,-3,6,-3,4,-122,0,-3,6,-3,4,-122,0,-3,6,-4,4,-121,0,-7,6,-122,0,-6,6,-124,0,-2,6,-249,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14592,0,-3,6,-124,0,-2,6,-3,4,-123,0,6,-2,4,8,-124,0,6,-2,4,8,-124,0,6,-2,4,8,-124,0,-2,6,-3,4,-124,0,-3,6,-506,0,-3,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14720,0,-3,4,-125,0,4,-2,8,-125,0,4,-2,8,-125,0,4,-2,8,-125,0,-3,4,-634,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14592,0,-2,7,-125,0,7,-3,8,-124,0,7,-4,8,-123,0,7,-4,8,-123,0,7,-3,8,-124,0,7,-2,8,7,-125,0,-2,7,-507,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14463,0,-3,7,-124,0,-3,7,-2,8,-122,0,-2,7,-5,8,-121,0,-2,7,-5,8,-121,0,-2,7,-5,8,-121,0,-2,7,-4,8,-122,0,-2,7,-3,8,7,-123,0,-4,7,-506,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14211,0,7,-123,0,-4,7,0,7,-121,0,-5,7,-122,0,-5,7,-2,8,-120,0,-3,7,-5,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-121,0,-2,7,-3,8,-2,7,-121,0,-6,7,-124,0,-2,7,-379,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14334,0,-6,7,-121,0,-8,7,-119,0,-6,7,-2,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-120,0,-7,7,-122,0,-4,7,-250,0,-3,7,-126,0,-3,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14334,0,-6,7,-121,0,-8,7,-119,0,-6,7,-2,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-119,0,-2,7,-5,8,-2,7,-120,0,-7,7,-122,0,-4,7,-251,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-14335,0,-4,7,-122,0,-7,7,-121,0,-5,7,8,-2,7,-119,0,-3,7,-5,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-119,0,-2,7,-5,8,-2,7,-120,0,-2,7,-3,8,-2,7,-121,0,-6,7,-123,0,-4,7,-251,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14589,0,-5,7,-122,0,-7,7,-121,0,-2,7,-2,8,-4,7,-120,0,-2,7,-3,8,-3,7,-120,0,-2,7,-3,8,-3,7,-120,0,-2,7,-3,8,-2,7,-121,0,-2,7,-2,8,-2,7,-123,0,-4,7,-126,0,5,-252,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-14718,0,-4,7,-123,0,-6,7,-122,0,-6,7,-122,0,-6,7,-123,0,-4,7,-124,0,5,-2,7,5,-123,0,-6,5,-123,0,5,0,7,5,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-15485,0,-2,5,-125,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-15614,0,-2,7,-125,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-15870,0,-2,7,-126,0,-2,7,-126,0,-2,7,-126,0,-2,7,-1203131,0],\"uuid\":\"F02050FE-4200-47B8-877A-2105B74D5E66\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[13260,170,187,10053120,13408512,3381759,43520,16764006,13158],\"bounds\":[50,76,51,76,8,54]}");

/***/ }),
/* 49 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[59,68,55,72,0,47],\"size\":[128,128,128],\"data\":[-7102,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-120,0,-3,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-118,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-119,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-121,0,-6,9,-123,0,-4,9,-14204,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-118,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-2,0,-5,4,-119,0,-2,9,-2,0,-5,4,-119,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-121,0,-6,9,-123,0,-4,9,-14204,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,5,-121,0,-2,9,-2,0,5,6,5,-120,0,-3,9,-3,0,5,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,-3,0,5,-122,0,-2,9,-2,0,5,6,5,-121,0,-2,9,-2,0,-3,5,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,12,-121,0,-6,9,-123,0,-4,9,-14205,0,-3,9,-123,0,-6,9,-121,0,-2,9,-4,0,12,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,12,-122,0,-6,9,-124,0,-3,9,-14205,0,-2,9,-124,0,-6,9,-121,0,-2,9,-4,0,11,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,11,-122,0,-6,9,-124,0,-2,9,-14206,0,9,-125,0,-6,9,-122,0,9,-4,0,11,-122,0,9,-4,0,9,11,-120,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,9,11,-121,0,9,-4,0,11,-122,0,-6,9,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,11,-121,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,11,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-121,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14333,0,-5,9,12,-122,0,9,-4,0,11,-122,0,9,-4,0,11,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,11,-122,0,9,-4,0,11,-122,0,-5,9,12,-14458,0,-5,9,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-122,0,-2,9,-126,0,-2,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,-5,9,12,-14458,0,-6,9,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,9,-121,0,-2,9,-2,0,6,-2,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-3,0,5,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-3,0,5,6,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,6,-2,5,-122,0,9,-4,0,9,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,-6,9,-14332,0,9,-125,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,12,-122,0,9,-3,0,5,9,-122,0,9,-2,0,5,-2,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-3,6,-122,0,9,-2,0,5,-2,6,-122,0,9,-3,0,5,9,-122,0,9,-4,0,12,-122,0,9,-4,0,9,-122,0,-6,9,-124,0,9,-14207,0,9,-125,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,0,-3,5,12,-122,0,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-122,0,9,-2,0,-2,6,5,-122,0,9,0,-3,5,12,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,-6,9,-124,0,9,-14207,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,6,4,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,-2,9,-121,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,0,-2,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,-6,9,-124,0,-2,9,-14333,0,-4,9,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-123,0,9,0,-2,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-122,0,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-123,0,-4,9,-14460,0,-4,9,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-123,0,9,0,-2,6,4,6,-121,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-122,0,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-123,0,-4,9,-14460,0,-4,9,-123,0,-6,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,0,-3,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,0,-3,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-6,9,-123,0,-4,9,-14588,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,0,-3,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,0,-3,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,-4,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,-4,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,6,-2,4,6,-122,0,-2,9,6,4,-2,6,-122,0,-2,9,-3,6,-123,0,-2,9,-3,6,-123,0,-2,9,6,4,-2,6,-122,0,-2,9,6,-2,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14589,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,9,-122,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,0,-2,6,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,5,9,-122,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,0,-2,5,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,-126,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,-126,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,-126,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,-126,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14589,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,9,-123,0,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-124,0,9,-3,0,9,-123,0,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-14717,0,-3,9,-124,0,-2,9,3,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,-2,7,-124,0,-2,9,-2,7,-124,0,-2,9,7,8,-124,0,-2,9,7,8,-124,0,-2,9,-2,7,-124,0,-2,9,-2,7,-124,0,-2,9,-2,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,3,0,9,-124,0,-3,9,-14717,0,5,-2,9,-124,0,-2,5,3,-2,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,-2,7,-124,0,-2,5,-2,7,-124,0,-2,5,7,8,-124,0,-2,5,7,8,-124,0,-2,5,-2,7,-124,0,-2,5,-2,7,-124,0,-2,5,-2,0,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,3,-2,9,-124,0,5,-2,9,-14717,0,1,-2,5,-125,0,1,3,1,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,7,5,-123,0,-2,1,7,4,5,-123,0,-2,1,7,8,-124,0,-2,1,7,8,-124,0,-2,1,7,4,5,-123,0,-2,1,-2,7,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,0,5,-124,0,1,3,1,5,-124,0,1,-2,5,-14717,0,-3,1,-125,0,1,3,-2,1,-123,0,-5,1,-123,0,-5,1,-123,0,-2,1,-2,7,1,-123,0,-2,1,-2,4,1,-123,0,-2,1,7,8,-124,0,-2,1,7,8,-124,0,-2,1,-2,4,1,-123,0,-2,1,-2,7,1,-123,0,-5,1,-123,0,-5,1,-124,0,1,3,-2,1,-124,0,-3,1,-14717,0,-3,1,-125,0,1,4,-2,1,-124,0,-4,1,-123,0,-5,1,-123,0,-2,1,4,7,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-123,0,-2,1,4,7,1,-123,0,-5,1,-124,0,-4,1,-124,0,1,4,-2,1,-124,0,-3,1,-14845,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-4,1,-124,0,-3,1,5,-125,0,3,1,5,-125,0,3,1,5,-124,0,-3,1,5,-124,0,-4,1,-124,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15102,0,-2,1,-126,0,-2,1,-382,0,3,-127,0,3,-383,0,-2,1,-126,0,-2,1,-15742,0,3,-127,0,3,-16126,0,10,-2,3,-125,0,10,-2,3,-125,0,10,-2,3,-125,0,10,-2,3,-15997,0,10,-2,3,-124,0,-2,10,-2,3,-124,0,-2,10,-2,3,-125,0,10,-2,3,-15996,0,-3,10,3,-124,0,10,-3,3,-124,0,10,-3,3,-124,0,-3,10,3,-15996,0,-3,10,3,-124,0,10,-3,3,-124,0,10,-3,3,-124,0,-3,10,3,-15997,0,-2,10,-125,0,-4,10,-124,0,-4,10,-125,0,-2,10,-1318719,0],\"uuid\":\"B66E5C29-81F3-4E29-AF59-25B80D87DA17\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[5981507,47872,16763313,4791325,15318849,7162190,9057340,6497578,16703926,12255232,9855308,12154974,6175791],\"bounds\":[59,68,55,72,0,47]}");

/***/ }),
/* 50 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[56,71,58,65,0,29],\"size\":[128,128,128],\"data\":[-8125,0,5,-4,0,5,-122,0,5,-4,0,5,-122,0,5,-4,0,5,-16122,0,5,-4,0,5,-16378,0,5,-4,0,5,-16378,0,5,-4,0,5,-16249,0,-3,2,-2,0,-3,2,-116,0,28,-3,0,-3,2,-2,0,-3,2,-3,0,28,-116,0,-3,2,-2,0,-3,2,-15992,0,-3,2,-2,0,-3,2,-116,0,28,-2,0,-4,2,-2,0,-4,2,-2,0,28,-112,0,28,-2,0,-4,2,-2,0,-4,2,-2,0,28,-115,0,-4,2,-2,0,-4,2,-15860,0,30,-12,0,30,-113,0,30,-3,0,-3,2,-2,0,-3,2,-3,0,30,-112,0,30,-2,0,-4,2,-2,0,-4,2,-2,0,30,-112,0,30,-2,0,-4,2,-2,0,-4,2,-2,0,30,-115,0,-4,2,-2,0,-4,2,-15733,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-3,0,-3,2,-2,0,-3,2,-3,0,30,-112,0,30,-2,0,-10,2,-2,0,30,-112,0,30,-2,0,-10,2,-2,0,30,-115,0,-10,2,-119,0,-3,2,-2,0,-3,2,-15606,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-3,0,-8,4,-3,0,30,-112,0,30,-2,0,4,-8,2,4,-2,0,30,-112,0,30,-2,0,4,-8,2,4,-2,0,30,-115,0,4,-8,2,4,-15733,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-14,0,30,-112,0,30,-3,0,-8,4,-3,0,30,-112,0,30,-3,0,4,-6,2,4,-3,0,30,-116,0,4,-6,2,4,-15734,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-14,0,30,-112,0,30,-2,0,8,-8,4,8,-2,0,30,-112,0,30,-2,0,8,4,-6,2,4,8,-2,0,30,-116,0,4,-6,2,4,-15862,0,-12,28,-115,0,-2,28,-10,0,-2,28,-114,0,28,0,8,-8,10,8,0,28,-114,0,28,0,8,10,-6,2,10,8,0,28,-117,0,-8,10,-15863,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,28,0,8,4,-6,2,4,8,0,28,-117,0,-2,4,-4,2,-2,4,-15863,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,-2,28,8,4,-6,2,4,8,-2,28,-116,0,28,-2,4,-4,2,-2,4,28,-15862,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,-2,28,8,4,-6,2,4,8,-2,28,-116,0,28,-2,4,-4,2,-2,4,28,-15862,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,28,0,8,4,-6,2,4,8,0,28,-117,0,-2,4,-4,2,-2,4,-15863,0,-10,28,-117,0,28,4,-8,0,4,28,-115,0,28,4,8,-8,4,8,4,28,-114,0,28,4,8,4,-6,2,4,8,4,28,-116,0,4,0,-6,28,0,4,-15990,0,-10,28,-117,0,28,8,-3,4,-2,8,-3,4,8,28,-116,0,28,8,4,-2,2,-2,8,-2,2,4,8,28,-117,0,4,0,-6,28,0,4,-15865,0,-4,28,-123,0,28,-4,0,28,-119,0,-4,28,0,-2,8,0,-4,28,-116,0,-4,28,0,-2,8,0,-4,28,-117,0,-2,28,-6,0,-2,28,-15737,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15740,0,-6,28,-121,0,28,-6,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15613,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15613,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-15866,0,-4,28,-123,0,28,-4,0,28,-122,0,28,-4,0,28,-122,0,28,-4,0,28,-122,0,28,-4,0,28,-15995,0,-4,28,-124,0,-4,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-15996,0,-4,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-16125,0,-2,28,-126,0,-2,28,-126,0,-2,28,-16254,0,-2,28,-126,0,-2,28,-16382,0,-2,28,-16382,0,-2,28,-1613887,0],\"uuid\":\"92532D38-8574-4B38-A7D5-EDF403BF9E4D\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,10759726,14243683,8924725,9410378,9072432],\"bounds\":[56,71,58,65,0,29]}");

/***/ }),
/* 51 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[51,78,48,76,0,0],\"size\":[128,128,128],\"data\":[-6222,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-114,0,-27,18,-113,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-2087372,0],\"uuid\":\"1460D336-050C-4FBC-9338-20A33DAB3680\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[51,78,48,76,0,0]}");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var queryString = __webpack_require__(53)
var setQuery = __webpack_require__(56)
var assign = __webpack_require__(13)
var ensureHeader = __webpack_require__(57)

// this is replaced in the browser
var request = __webpack_require__(58)

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(54);
var objectAssign = __webpack_require__(13);
var decodeComponent = __webpack_require__(55);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 55 */
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
/* 56 */
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
/* 57 */
/***/ (function(module, exports) {

module.exports = ensureHeader
function ensureHeader (headers, key, value) {
  var lower = key.toLowerCase()
  if (!headers[key] && !headers[lower]) {
    headers[key] = value
  }
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(59)
var normalize = __webpack_require__(64)
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(60)
var isFunction = __webpack_require__(61)
var parseHeaders = __webpack_require__(62)
var xtend = __webpack_require__(63)

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
/* 60 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(8).h;
const ethers = __webpack_require__(11);
const request = __webpack_require__(12);
const post = (func, body) => {
  return request("/"+func, {method:"POST",body,json:true});
};

class Register extends Component {
  constructor(props) {
    super(props)
    this.phase = "enter_name";
    this.input = "";
    this.ondone = props.ondone;
    this.wlet = ethers.Wallet.createRandom();
    this.name = "";
  }

  render() {
    
    const modal = (body) => {
      return h("div", {
        style: {
          "position": "fixed",
          "width": "100%",
          "height": "100%",
          "display": "flex",
          "flex-flow": "column nowrap",
          "justify-content": "center",
          "align-items": "center",
          "font-family": "monaco, monospace",
          "background": "#4070D0",
          "color": "white",
        }
      }, body);
    };

    const title = (body) => {
      return h("div", {
        style: {
          "margin": "4px"
        }
      }, [body]);
    };

    const button = (body, onClick) => {
      return h("div", {
        onClick,
        style: {
          "margin": "4px",
          "width": "128px",
          "cursor": "pointer",
          "border": "1px solid #204090",
          "padding": "3px",
          "text-align": "center",
          "background": "rgba(255,255,255,0.25)"
        }}, [
          body
        ]);
    };

    const input = (field, next) => {
      return h("input", {
        style: {
          "border": "1px solid #204090",
          "outline": "none",
          "height": "24px",
          "font-size": "16px",
          "padding": "2px",
        },
        autoFocus: 1,
        onkeyup: (e) => {
          this[field] = e.target.value;
          if (e.key === "Enter") {
            this.phase = next;
            this.forceUpdate();
          };
        }});
    };

    const ask = (question, infield, buttons) => {
      var children = [title(question)];
      if (infield) {
        children.push(input(infield, buttons[0][1]));
      };
      for (let i = 0; i < buttons.length; ++i) {
        children.push(button(buttons[i][0], () => {
          this.phase = buttons[i][1];
          this.forceUpdate();
        }));
      };
      return modal(children);
    };

    switch (this.phase) {
      case "enter_name":
        return ask("Escolha um nick:", "name", [
          ["Pronto", "got_name"]]);
      case "got_name":
        if (!/^[a-zA-Z0-9_]{1,32}$/.test(this.name)) {
          return ask([
            h("div",{},"Nome inválido."),
            h("div",{},"Use letras, números e underscore.")],
            null,
            [["Ok.", "enter_name"]]);
        }
        var body = h("div", {}, [
          h("div", {}, "Seja bem-vindo, " + this.name + "!"),
          h("div", {}, [
            h("span", {}, "Criamos uma "),
            h("span", {
              style: {"font-weight": "bold"}
            }, "*chave-privada Ethereum*"),
            h("span", {}, " pra você.")]),
          h("div", {},
            "Use-a para logar, jogar e guardar suas moedas."),
          h("div", {},
            "Essa chave NÃO é enviada pra gente. Se perder,"),
          h("div", {},
            "não tem volta. Poderia anotá-la seguramente?"),
        ]);
        return ask(body, null, [
          ["Posso sim!", "here_is_your_key"],
          ["Não posso.", "come_back_when_you_can"]]);
      case "come_back_when_you_can":
        return ask("Então volte quando puder.", null,
          [["Ok.", "failure"]]);
      case "here_is_your_key":
        var body = h("div", {}, [
          h("div", {}, "Sua chave é:"),
          h("div", {}, ""),
          h("div", {
            style: {
              "background": "rgba(0,0,0,0.2)",
              "width": "420px",
              "overflow-y": "scroll",
            },
          }, this.wlet.privateKey),
          h("div", {}, ""),
          h("div", {}, "Guardou em lugar seguro?")
        ]);
        return ask(body, null, [
          ["Sim!", "will_you_lose_your_key"],
          ["Não.", "no_account_for_you"]
        ]);
      case "no_account_for_you":
        return ask(
          "Então sem conta pra você.",
          null,
          [["Ok.", "failure"]]);
      case "will_you_lose_your_key":
        return ask(
          "Você pretende perder sua chave?",
          null,
          [ ["Sim!", "no_account_for_you"],
            ["Não.", "will_you_not_not_lose_your_key"]]);
      case "will_you_not_not_lose_your_key":
        return ask(
          "Você não pretende não perder sua chave?",
          null,
          [ ["Sim!", "type_your_key"],
            ["Não.", "type_your_key"]]);
      case "type_your_key":
        return ask(
          "Prove que guardou a chave. Digite-a:",
          "key",
          [["Pronto.", "check_key"]]);
      case "check_key":
        if (this.key !== this.wlet.privateKey) {
          return ask(
            "Tá errado. Pq mentir? Vai jogar LoL.",
            null,
            [ ["Blz.", "failure"],
              ["Nãããão!!!", "type_your_key"]]);
        } else {
          post("register", {
            name: this.name,
            addr: this.wlet.address,
          }).then((res) => {
            switch (res.ctor) {
              case "err": 
                this.phase = "error";
                this.error = res.error;
                break;
              case "ok":
                this.phase = "done";
                break;
            }
            this.forceUpdate();
          }).catch((err) => {
            this.phase = "error";
            this.error = "Deu ruim no server. Desculpa :(";
            this.forceUpdate();
          });
          return ask("Registrando. Aguarde...", null, []);
        }
      case "error":
        return ask(this.error, null, [
          ["Tentar outro.", "enter_name"],
          ["Ah vsf.", "failure"],
        ]);
          
      case "done":
        return ask([
          h("div", {},
            "Nice nice! Confio plenamente que você não"),
          h("div", {},
            "vai perder a sua chave. Bons jogos, GLHF!")
          ],
          null,
          [
            ["GLHF <3", "success"],
            ["Foda-se", "success"],
          ]);
      case "success":
        this.ondone({name:this.name, wlet:this.wlet});
        return h("div");
      case "failure":
        this.ondone({name:null, wlet:null});
        return h("div");
    }
  }
};

module.exports = Register;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var debug = __webpack_require__(70)('simple-peer')
var getBrowserRTC = __webpack_require__(73)
var randombytes = __webpack_require__(74)
var stream = __webpack_require__(75)
var queueMicrotask = __webpack_require__(84) // TODO: remove when Node 10 is not supported

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
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 70 */
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

module.exports = __webpack_require__(71)(exports);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 71 */
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
	createDebug.humanize = __webpack_require__(72);

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
/* 72 */
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
/* 73 */
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
/* 74 */
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

var Buffer = __webpack_require__(14).Buffer
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(20);
exports.Duplex = __webpack_require__(4);
exports.Transform = __webpack_require__(22);
exports.PassThrough = __webpack_require__(82);
exports.finished = __webpack_require__(7);
exports.pipeline = __webpack_require__(83);


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(5),
    Buffer = _require.Buffer;

var _require2 = __webpack_require__(78),
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
/* 78 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 79 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 80 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};


/***/ }),
/* 82 */
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

var Transform = __webpack_require__(22);

__webpack_require__(6)(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 83 */
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
/* 84 */
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