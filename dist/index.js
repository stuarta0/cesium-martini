'use strict';

var cesium = require('cesium');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/* This file is automatically rebuilt by the Cesium build process. */
/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var hasOwnProperty = Object.hasOwnProperty,
    setPrototypeOf = Object.setPrototypeOf,
    isFrozen = Object.isFrozen,
    getPrototypeOf = Object.getPrototypeOf,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze,
    seal = Object.seal,
    create = Object.create; // eslint-disable-line import/no-mutable-exports

var _ref = typeof Reflect !== 'undefined' && Reflect,
    apply = _ref.apply,
    construct = _ref.construct;

if (!apply) {
  apply = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

if (!freeze) {
  freeze = function freeze(x) {
    return x;
  };
}

if (!seal) {
  seal = function seal(x) {
    return x;
  };
}

if (!construct) {
  construct = function construct(Func, args) {
    return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
  };
}

var arrayForEach = unapply(Array.prototype.forEach);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);

var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);

var regExpTest = unapply(RegExp.prototype.test);

var typeErrorCreate = unconstruct(TypeError);

function unapply(func) {
  return function (thisArg) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return apply(func, thisArg, args);
  };
}

function unconstruct(func) {
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return construct(func, args);
  };
}

/* Add properties to a lookup table */
function addToSet(set, array) {
  if (setPrototypeOf) {
    // Make 'in' and truthy checks like Boolean(set.constructor)
    // independent of any properties defined on Object.prototype.
    // Prevent prototype setters from intercepting set as a this value.
    setPrototypeOf(set, null);
  }

  var l = array.length;
  while (l--) {
    var element = array[l];
    if (typeof element === 'string') {
      var lcElement = stringToLowerCase(element);
      if (lcElement !== element) {
        // Config presets (e.g. tags.js, attrs.js) are immutable.
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }

        element = lcElement;
      }
    }

    set[element] = true;
  }

  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = create(null);

  var property = void 0;
  for (property in object) {
    if (apply(hasOwnProperty, object, [property])) {
      newObject[property] = object[property];
    }
  }

  return newObject;
}

/* IE10 doesn't support __lookupGetter__ so lets'
 * simulate it. It also automatically checks
 * if the prop is function or getter and behaves
 * accordingly. */
function lookupGetter(object, prop) {
  while (object !== null) {
    var desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }

      if (typeof desc.value === 'function') {
        return unapply(desc.value);
      }
    }

    object = getPrototypeOf(object);
  }

  function fallbackValue(element) {
    console.warn('fallback value for', element);
    return null;
  }

  return fallbackValue;
}

var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

// SVG
var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);

var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

// List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.
var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'feimage', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);

var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

// Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.
var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);

var text = freeze(['#text']);

var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);

var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

// eslint-disable-next-line unicorn/better-regex
var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
 * @param {Document} document The document object (to determine policy name suffix)
 * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
 * are not supported).
 */
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
  if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
    return null;
  }

  // Allow the callers to control the unique policy name
  // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
  // Policy creation with duplicate names throws in Trusted Types.
  var suffix = null;
  var ATTR_NAME = 'data-tt-policy-suffix';
  if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
    suffix = document.currentScript.getAttribute(ATTR_NAME);
  }

  var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML: function createHTML(html$$1) {
        return html$$1;
      }
    });
  } catch (_) {
    // Policy creation failed (most likely another DOMPurify script has
    // already run). Skip creating the policy, as this will only cause errors
    // if TT are enforced.
    console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
    return null;
  }
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };

  /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */
  DOMPurify.version = '2.3.3';

  /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */
  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;

    return DOMPurify;
  }

  var originalDocument = window.document;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      Element = window.Element,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser,
      trustedTypes = window.trustedTypes;


  var ElementPrototype = Element.prototype;

  var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
  var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
  var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
  var getParentNode = lookupGetter(ElementPrototype, 'parentNode');

  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.
  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
  var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      createDocumentFragment = _document.createDocumentFragment,
      getElementsByTagName = _document.getElementsByTagName;
  var importNode = originalDocument.importNode;


  var documentMode = {};
  try {
    documentMode = clone(document).documentMode ? document.documentMode : {};
  } catch (_) {}

  var hooks = {};

  /**
   * Expose whether this browser supports running the full DOMPurify.
   */
  DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;

  var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
      ERB_EXPR$$1 = ERB_EXPR,
      DATA_ATTR$$1 = DATA_ATTR,
      ARIA_ATTR$$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */

  /* allowed element names */

  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  var FORBID_TAGS = null;

  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  var FORBID_ATTR = null;

  /* Decide if ARIA attributes are okay */
  var ALLOW_ARIA_ATTR = true;

  /* Decide if custom data attributes are okay */
  var ALLOW_DATA_ATTR = true;

  /* Decide if unknown protocols are okay */
  var ALLOW_UNKNOWN_PROTOCOLS = false;

  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  var SAFE_FOR_TEMPLATES = false;

  /* Decide if document with <html>... should be returned */
  var WHOLE_DOCUMENT = false;

  /* Track whether config is already set on this instance of DOMPurify. */
  var SET_CONFIG = false;

  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  var FORCE_BODY = false;

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */
  var RETURN_DOM_FRAGMENT = false;

  /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
   * `Node` is imported into the current `Document`. If this flag is not enabled the
   * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
   * DOMPurify.
   *
   * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
   * might cause XSS from attacks hidden in closed shadowroots in case the browser
   * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
   */
  var RETURN_DOM_IMPORT = true;

  /* Try to return a Trusted Type object instead of a string, return a string in
   * case Trusted Types are not supported  */
  var RETURN_TRUSTED_TYPE = false;

  /* Output should be free from DOM clobbering attacks? */
  var SANITIZE_DOM = true;

  /* Keep element content when removing element? */
  var KEEP_CONTENT = true;

  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */
  var IN_PLACE = false;

  /* Allow usage of profiles like html, svg and mathMl */
  var USE_PROFILES = {};

  /* Tags to ignore content of when KEEP_CONTENT is true */
  var FORBID_CONTENTS = null;
  var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = null;
  var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = null;
  var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);

  var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
  /* Document namespace */
  var NAMESPACE = HTML_NAMESPACE;
  var IS_EMPTY_INPUT = false;

  /* Parsing of strict XHTML documents */
  var PARSER_MEDIA_TYPE = void 0;
  var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
  var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
  var transformCaseFunc = void 0;

  /* Keep a reference to config to pass to hooks */
  var CONFIG = null;

  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */

  var formElement = document.createElement('form');

  /**
   * _parseConfig
   *
   * @param  {Object} cfg optional config literal
   */
  // eslint-disable-next-line complexity
  var _parseConfig = function _parseConfig(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }

    /* Shield configuration object from tampering */
    if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }

    /* Shield configuration object from prototype pollution */
    cfg = clone(cfg);

    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false; // Default true
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
    IN_PLACE = cfg.IN_PLACE || false; // Default false
    IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;

    PARSER_MEDIA_TYPE =
    // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;

    // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
    transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? function (x) {
      return x;
    } : stringToLowerCase;

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }

      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }

    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }

      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }

    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }

      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }

    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }

      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS);
    }

    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }

    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
    }

    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
      delete FORBID_TAGS.tbody;
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (freeze) {
      freeze(cfg);
    }

    CONFIG = cfg;
  };

  var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);

  var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);

  /* Keep track of all possible SVG and MathML tags
   * so that we can perform the namespace checks
   * correctly. */
  var ALL_SVG_TAGS = addToSet({}, svg);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);

  var ALL_MATHML_TAGS = addToSet({}, mathMl);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);

  /**
   *
   *
   * @param  {Element} element a DOM element whose namespace is being checked
   * @returns {boolean} Return false if the element has a
   *  namespace that a spec-compliant parser would never
   *  return. Return true otherwise.
   */
  var _checkValidNamespace = function _checkValidNamespace(element) {
    var parent = getParentNode(element);

    // In JSDOM, if we're inside shadow DOM, then parentNode
    // can be null. We just simulate parent in this case.
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: HTML_NAMESPACE,
        tagName: 'template'
      };
    }

    var tagName = stringToLowerCase(element.tagName);
    var parentTagName = stringToLowerCase(parent.tagName);

    if (element.namespaceURI === SVG_NAMESPACE) {
      // The only way to switch from HTML namespace to SVG
      // is via <svg>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'svg';
      }

      // The only way to switch from MathML to SVG is via
      // svg if parent is either <annotation-xml> or MathML
      // text integration points.
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }

      // We only allow elements that are defined in SVG
      // spec. All others are disallowed in SVG namespace.
      return Boolean(ALL_SVG_TAGS[tagName]);
    }

    if (element.namespaceURI === MATHML_NAMESPACE) {
      // The only way to switch from HTML namespace to MathML
      // is via <math>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'math';
      }

      // The only way to switch from SVG to MathML is via
      // <math> and HTML integration points
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
      }

      // We only allow elements that are defined in MathML
      // spec. All others are disallowed in MathML namespace.
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }

    if (element.namespaceURI === HTML_NAMESPACE) {
      // The only way to switch from SVG to HTML is via
      // HTML integration points, and from MathML to HTML
      // is via MathML text integration points
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }

      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }

      // Certain elements are allowed in both SVG and HTML
      // namespace. We need to specify them explicitly
      // so that they don't get erronously deleted from
      // HTML namespace.
      var commonSvgAndHTMLElements = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

      // We disallow tags that are specific for MathML
      // or SVG and should never appear in HTML namespace
      return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
    }

    // The code should never reach this place (this means
    // that the element somehow got namespace that is not
    // HTML, SVG or MathML). Return false just in case.
    return false;
  };

  /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */
  var _forceRemove = function _forceRemove(node) {
    arrayPush(DOMPurify.removed, { element: node });
    try {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      node.parentNode.removeChild(node);
    } catch (_) {
      try {
        node.outerHTML = emptyHTML;
      } catch (_) {
        node.remove();
      }
    }
  };

  /**
   * _removeAttribute
   *
   * @param  {String} name an Attribute name
   * @param  {Node} node a DOM node
   */
  var _removeAttribute = function _removeAttribute(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }

    node.removeAttribute(name);

    // We void attribute values for unremovable "is"" attributes
    if (name === 'is' && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {}
      } else {
        try {
          node.setAttribute(name, '');
        } catch (_) {}
      }
    }
  };

  /**
   * _initDocument
   *
   * @param  {String} dirty a string of dirty markup
   * @return {Document} a DOM, filled with the dirty markup
   */
  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc = void 0;
    var leadingWhitespace = void 0;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    } else {
      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
      var matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }

    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml') {
      // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
    }

    var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    /*
     * Use the DOMParser API by default, fallback later if needs be
     * DOMParser not work for svg when has multiple root element.
     */
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {}
    }

    /* Use createHTMLDocument in case DOMParser is not available */
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, 'template', null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? '' : dirtyPayload;
      } catch (_) {
        // Syntax error if dirtyPayload is invalid xml
      }
    }

    var body = doc.body || doc.documentElement;

    if (dirty && leadingWhitespace) {
      body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }

    /* Work on whole document or just its body */
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
    }

    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };

  /**
   * _createIterator
   *
   * @param  {Document} root document/fragment to create iterator for
   * @return {Iterator} iterator instance
   */
  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
  };

  /**
   * _isClobbered
   *
   * @param  {Node} elm element to check for clobbering attacks
   * @return {Boolean} true if clobbered, false if safe
   */
  var _isClobbered = function _isClobbered(elm) {
    if (elm instanceof Text || elm instanceof Comment) {
      return false;
    }

    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function') {
      return true;
    }

    return false;
  };

  /**
   * _isNode
   *
   * @param  {Node} obj object to check whether it's a DOM node
   * @return {Boolean} true is object is a DOM node
   */
  var _isNode = function _isNode(object) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
  };

  /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode node to work on with the hook
   * @param  {Object} data additional hook parameters
   */
  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    arrayForEach(hooks[entryPoint], function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };

  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   {Node} currentNode to check for permission to exist
   * @return  {Boolean} true if node was killed, false if left alive
   */
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Check if tagname contains Unicode */
    if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = transformCaseFunc(currentNode.nodeName);

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Detect mXSS attempts abusing namespace confusion */
    if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Mitigate a problem with templates inside select */
    if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for bad-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        var parentNode = getParentNode(currentNode) || currentNode.parentNode;
        var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

        if (childNodes && parentNode) {
          var childCount = childNodes.length;

          for (var i = childCount - 1; i >= 0; --i) {
            parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
          }
        }
      }

      _forceRemove(currentNode);
      return true;
    }

    /* Check whether element has a valid namespace */
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
      content = stringReplace(content, ERB_EXPR$$1, ' ');
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };

  /**
   * _isValidAttribute
   *
   * @param  {string} lcTag Lowercase tag name of containing element.
   * @param  {string} lcName Lowercase attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid, otherwise false.
   */
  // eslint-disable-next-line complexity
  var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }

    /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      return false;

      /* Check value is safe. First, is attr inert? If so, is safe */
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
      return false;
    }

    return true;
  };

  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param  {Node} currentNode to sanitize
   */
  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr = void 0;
    var value = void 0;
    var lcName = void 0;
    var l = void 0;
    /* Execute a hook if present */
    _executeHook('beforeSanitizeAttributes', currentNode, null);

    var attributes = currentNode.attributes;

    /* Check if we have attributes; if not we might have a text node */

    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;

    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      attr = attributes[l];
      var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;

      value = stringTrim(attr.value);
      lcName = transformCaseFunc(name);

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;
      /* Did the hooks approve of the attribute? */
      if (hookEvent.forceKeepAttr) {
        continue;
      }

      /* Remove attribute */
      _removeAttribute(name, currentNode);

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Work around a security issue in jQuery 3.0 */
      if (regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }

      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
        value = stringReplace(value, ERB_EXPR$$1, ' ');
      }

      /* Is `value` valid for this attribute? */
      var lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }

      /* Handle invalid data-* attribute set by try-catching it */
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
          currentNode.setAttribute(name, value);
        }

        arrayPop(DOMPurify.removed);
      } catch (_) {}
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeAttributes', currentNode, null);
  };

  /**
   * _sanitizeShadowDOM
   *
   * @param  {DocumentFragment} fragment to iterate over recursively
   */
  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);

    /* Execute a hook if present */
    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);

      /* Sanitize tags and elements */
      if (_sanitizeElements(shadowNode)) {
        continue;
      }

      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(shadowNode);
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };

  /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} configuration object
   */
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = '<!-->';
    }

    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw typeErrorCreate('toString is not a function');
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== 'string') {
          throw typeErrorCreate('dirty is not a string, aborting');
        }
      }
    }

    /* Check we can run. Otherwise fall back or ignore */
    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        }

        if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }

      return dirty;
    }

    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }

    /* Clean up removed elements */
    DOMPurify.removed = [];

    /* Check if dirty is correctly typed for IN_PLACE */
    if (typeof dirty === 'string') {
      IN_PLACE = false;
    }

    if (IN_PLACE) ; else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!---->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else if (importedNode.nodeName === 'HTML') {
        body = importedNode;
      } else {
        // eslint-disable-next-line unicorn/prefer-dom-node-append
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
      // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf('<') === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : emptyHTML;
      }
    }

    /* Remove first element node (ours) if FORCE_BODY is set */
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }

    /* Get node iterator */
    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }

      /* Sanitize tags and elements */
      if (_sanitizeElements(currentNode)) {
        continue;
      }

      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    oldNode = null;

    /* If we sanitized `dirty` in-place, return it. */
    if (IN_PLACE) {
      return dirty;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (RETURN_DOM_IMPORT) {
        /*
          AdoptNode() is not used because internal state is not reset
          (e.g. the past names map of a HTMLFormElement), this is safe
          in theory but we would rather not risk another attack vector.
          The state that is cloned by importNode() is explicitly defined
          by the specs.
        */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

    /* Sanitize final string template-safe */
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
    }

    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };

  /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} cfg configuration object
   */
  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };

  /**
   * Public method to remove the configuration
   * clearConfig
   *
   */
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };

  /**
   * Public method to check if an attribute value is valid.
   * Uses last set config, if any. Otherwise, uses config defaults.
   * isValidAttribute
   *
   * @param  {string} tag Tag name of containing element.
   * @param  {string} attr Attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
   */
  DOMPurify.isValidAttribute = function (tag, attr, value) {
    /* Initialize shared config vars if necessary. */
    if (!CONFIG) {
      _parseConfig({});
    }

    var lcTag = transformCaseFunc(tag);
    var lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };

  /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint entry point for the hook to add
   * @param {Function} hookFunction function to execute
   */
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }

    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };

  /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint entry point for the hook to remove
   */
  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      arrayPop(hooks[entryPoint]);
    }
  };

  /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint entry point for the hooks to remove
   */
  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };

  /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   *
   */
  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

/**
 * @function
 *
 * @param {*} value The object.
 * @returns {Boolean} Returns true if the object is defined, returns false otherwise.
 *
 * @example
 * if (Cesium.defined(positions)) {
 *      doSomething();
 * } else {
 *      doSomethingElse();
 * }
 */
function defined(value) {
  return value !== undefined && value !== null;
}

/**
 * Constructs an exception object that is thrown due to a developer error, e.g., invalid argument,
 * argument out of range, etc.  This exception should only be thrown during development;
 * it usually indicates a bug in the calling code.  This exception should never be
 * caught; instead the calling code should strive not to generate it.
 * <br /><br />
 * On the other hand, a {@link RuntimeError} indicates an exception that may
 * be thrown at runtime, e.g., out of memory, that the calling code should be prepared
 * to catch.
 *
 * @alias DeveloperError
 * @constructor
 * @extends Error
 *
 * @param {String} [message] The error message for this exception.
 *
 * @see RuntimeError
 */
function DeveloperError(message) {
  /**
   * 'DeveloperError' indicating that this exception was thrown due to a developer error.
   * @type {String}
   * @readonly
   */
  this.name = "DeveloperError";

  /**
   * The explanation for why this exception was thrown.
   * @type {String}
   * @readonly
   */
  this.message = message;

  //Browsers such as IE don't have a stack property until you actually throw the error.
  var stack;
  try {
    throw new Error();
  } catch (e) {
    stack = e.stack;
  }

  /**
   * The stack trace of this exception, if available.
   * @type {String}
   * @readonly
   */
  this.stack = stack;
}

if (defined(Object.create)) {
  DeveloperError.prototype = Object.create(Error.prototype);
  DeveloperError.prototype.constructor = DeveloperError;
}

DeveloperError.prototype.toString = function () {
  var str = this.name + ": " + this.message;

  if (defined(this.stack)) {
    str += "\n" + this.stack.toString();
  }

  return str;
};

/**
 * @private
 */
DeveloperError.throwInstantiationError = function () {
  throw new DeveloperError(
    "This function defines an interface and should not be called directly."
  );
};

/**
 * Contains functions for checking that supplied arguments are of a specified type
 * or meet specified conditions
 * @private
 */
var Check = {};

/**
 * Contains type checking functions, all using the typeof operator
 */
Check.typeOf = {};

function getUndefinedErrorMessage(name) {
  return name + " is required, actual value was undefined";
}

function getFailedTypeErrorMessage(actual, expected, name) {
  return (
    "Expected " +
    name +
    " to be typeof " +
    expected +
    ", actual typeof was " +
    actual
  );
}

/**
 * Throws if test is not defined
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value that is to be checked
 * @exception {DeveloperError} test must be defined
 */
Check.defined = function (name, test) {
  if (!defined(test)) {
    throw new DeveloperError(getUndefinedErrorMessage(name));
  }
};

/**
 * Throws if test is not typeof 'function'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'function'
 */
Check.typeOf.func = function (name, test) {
  if (typeof test !== "function") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "function", name)
    );
  }
};

/**
 * Throws if test is not typeof 'string'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'string'
 */
Check.typeOf.string = function (name, test) {
  if (typeof test !== "string") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "string", name)
    );
  }
};

/**
 * Throws if test is not typeof 'number'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'number'
 */
Check.typeOf.number = function (name, test) {
  if (typeof test !== "number") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "number", name)
    );
  }
};

/**
 * Throws if test is not typeof 'number' and less than limit
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @param {Number} limit The limit value to compare against
 * @exception {DeveloperError} test must be typeof 'number' and less than limit
 */
Check.typeOf.number.lessThan = function (name, test, limit) {
  Check.typeOf.number(name, test);
  if (test >= limit) {
    throw new DeveloperError(
      "Expected " +
        name +
        " to be less than " +
        limit +
        ", actual value was " +
        test
    );
  }
};

/**
 * Throws if test is not typeof 'number' and less than or equal to limit
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @param {Number} limit The limit value to compare against
 * @exception {DeveloperError} test must be typeof 'number' and less than or equal to limit
 */
Check.typeOf.number.lessThanOrEquals = function (name, test, limit) {
  Check.typeOf.number(name, test);
  if (test > limit) {
    throw new DeveloperError(
      "Expected " +
        name +
        " to be less than or equal to " +
        limit +
        ", actual value was " +
        test
    );
  }
};

/**
 * Throws if test is not typeof 'number' and greater than limit
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @param {Number} limit The limit value to compare against
 * @exception {DeveloperError} test must be typeof 'number' and greater than limit
 */
Check.typeOf.number.greaterThan = function (name, test, limit) {
  Check.typeOf.number(name, test);
  if (test <= limit) {
    throw new DeveloperError(
      "Expected " +
        name +
        " to be greater than " +
        limit +
        ", actual value was " +
        test
    );
  }
};

/**
 * Throws if test is not typeof 'number' and greater than or equal to limit
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @param {Number} limit The limit value to compare against
 * @exception {DeveloperError} test must be typeof 'number' and greater than or equal to limit
 */
Check.typeOf.number.greaterThanOrEquals = function (name, test, limit) {
  Check.typeOf.number(name, test);
  if (test < limit) {
    throw new DeveloperError(
      "Expected " +
        name +
        " to be greater than or equal to " +
        limit +
        ", actual value was " +
        test
    );
  }
};

/**
 * Throws if test is not typeof 'object'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'object'
 */
Check.typeOf.object = function (name, test) {
  if (typeof test !== "object") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "object", name)
    );
  }
};

/**
 * Throws if test is not typeof 'boolean'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'boolean'
 */
Check.typeOf.bool = function (name, test) {
  if (typeof test !== "boolean") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "boolean", name)
    );
  }
};

/**
 * Throws if test is not typeof 'bigint'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'bigint'
 */
Check.typeOf.bigint = function (name, test) {
  if (typeof test !== "bigint") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "bigint", name)
    );
  }
};

/**
 * Throws if test1 and test2 is not typeof 'number' and not equal in value
 *
 * @param {String} name1 The name of the first variable being tested
 * @param {String} name2 The name of the second variable being tested against
 * @param {*} test1 The value to test
 * @param {*} test2 The value to test against
 * @exception {DeveloperError} test1 and test2 should be type of 'number' and be equal in value
 */
Check.typeOf.number.equals = function (name1, name2, test1, test2) {
  Check.typeOf.number(name1, test1);
  Check.typeOf.number(name2, test2);
  if (test1 !== test2) {
    throw new DeveloperError(
      name1 +
        " must be equal to " +
        name2 +
        ", the actual values are " +
        test1 +
        " and " +
        test2
    );
  }
};

/**
 * Returns the first parameter if not undefined, otherwise the second parameter.
 * Useful for setting a default value for a parameter.
 *
 * @function
 *
 * @param {*} a
 * @param {*} b
 * @returns {*} Returns the first parameter if not undefined, otherwise the second parameter.
 *
 * @example
 * param = Cesium.defaultValue(param, 'default');
 */
function defaultValue(a, b) {
  if (a !== undefined && a !== null) {
    return a;
  }
  return b;
}

/**
 * A frozen empty object that can be used as the default value for options passed as
 * an object literal.
 * @type {Object}
 * @memberof defaultValue
 */
defaultValue.EMPTY_OBJECT = Object.freeze({});

var nextCreditId = 0;
var creditToId = {};

/**
 * A credit contains data pertaining to how to display attributions/credits for certain content on the screen.
 * @param {String} html An string representing an html code snippet
 * @param {Boolean} [showOnScreen=false] If true, the credit will be visible in the main credit container.  Otherwise, it will appear in a popover
 *
 * @alias Credit
 * @constructor
 *
 * @exception {DeveloperError} html is required.
 *
 * @example
 * //Create a credit with a tooltip, image and link
 * var credit = new Cesium.Credit('<a href="https://cesium.com/" target="_blank"><img src="/images/cesium_logo.png" title="Cesium"/></a>');
 */
function Credit(html, showOnScreen) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.string("html", html);
  //>>includeEnd('debug');
  var id;
  var key = html;

  if (defined(creditToId[key])) {
    id = creditToId[key];
  } else {
    id = nextCreditId++;
    creditToId[key] = id;
  }

  showOnScreen = defaultValue(showOnScreen, false);

  // Credits are immutable so generate an id to use to optimize equal()
  this._id = id;
  this._html = html;
  this._showOnScreen = showOnScreen;
  this._element = undefined;
}

Object.defineProperties(Credit.prototype, {
  /**
   * The credit content
   * @memberof Credit.prototype
   * @type {String}
   * @readonly
   */
  html: {
    get: function () {
      return this._html;
    },
  },

  /**
   * @memberof Credit.prototype
   * @type {Number}
   * @readonly
   *
   * @private
   */
  id: {
    get: function () {
      return this._id;
    },
  },

  /**
   * Whether the credit should be displayed on screen or in a lightbox
   * @memberof Credit.prototype
   * @type {Boolean}
   * @readonly
   */
  showOnScreen: {
    get: function () {
      return this._showOnScreen;
    },
  },

  /**
   * Gets the credit element
   * @memberof Credit.prototype
   * @type {HTMLElement}
   * @readonly
   */
  element: {
    get: function () {
      if (!defined(this._element)) {
        var html = purify.sanitize(this._html);

        var div = document.createElement("div");
        div._creditId = this._id;
        div.style.display = "inline";
        div.innerHTML = html;

        var links = div.querySelectorAll("a");
        for (var i = 0; i < links.length; i++) {
          links[i].setAttribute("target", "_blank");
        }

        this._element = div;
      }
      return this._element;
    },
  },
});

/**
 * Returns true if the credits are equal
 *
 * @param {Credit} left The first credit
 * @param {Credit} right The second credit
 * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
 */
Credit.equals = function (left, right) {
  return (
    left === right ||
    (defined(left) && defined(right) && left._id === right._id)
  );
};

/**
 * Returns true if the credits are equal
 *
 * @param {Credit} credit The credit to compare to.
 * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
 */
Credit.prototype.equals = function (credit) {
  return Credit.equals(this, credit);
};

/**
 * @private
 * @param attribution
 * @return {Credit}
 */
Credit.getIonCredit = function (attribution) {
  var showOnScreen =
    defined(attribution.collapsible) && !attribution.collapsible;
  var credit = new Credit(attribution.html, showOnScreen);

  credit._isIon = credit.html.indexOf("ion-credit.png") !== -1;
  return credit;
};

/**
 * Duplicates a Credit instance.
 *
 * @param {Credit} [credit] The Credit to duplicate.
 * @returns {Credit} A new Credit instance that is a duplicate of the one provided. (Returns undefined if the credit is undefined)
 */
Credit.clone = function (credit) {
  if (defined(credit)) {
    return new Credit(credit.html, credit.showOnScreen);
  }
};

var loadImage = function loadImage(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.addEventListener("load", function () {
      return resolve(img);
    });
    img.addEventListener("error", function (err) {
      return reject(err);
    });
    img.crossOrigin = "anonymous";
    img.src = url;
  });
};

var DefaultHeightmapResource = /*#__PURE__*/function () {
  function DefaultHeightmapResource() {
    var _this = this,
        _opts$skipOddLevels,
        _opts$tileSize,
        _opts$maxZoom;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DefaultHeightmapResource);

    _defineProperty(this, "resource", null);

    _defineProperty(this, "tileSize", 256);

    _defineProperty(this, "maxZoom", void 0);

    _defineProperty(this, "skipOddLevels", false);

    _defineProperty(this, "contextQueue", void 0);

    _defineProperty(this, "getTilePixels", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(coords) {
        var url, img;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _this.buildTileURL(coords);
                _context.next = 3;
                return loadImage(url);

              case 3:
                img = _context.sent;
                return _context.abrupt("return", _this.getPixels(img));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    if (opts.url) {
      this.resource = cesium.Resource.createIfNeeded(opts.url);
    }

    this.skipOddLevels = (_opts$skipOddLevels = opts.skipOddLevels) !== null && _opts$skipOddLevels !== void 0 ? _opts$skipOddLevels : false;
    this.tileSize = (_opts$tileSize = opts.tileSize) !== null && _opts$tileSize !== void 0 ? _opts$tileSize : 256;
    this.maxZoom = (_opts$maxZoom = opts.maxZoom) !== null && _opts$maxZoom !== void 0 ? _opts$maxZoom : 15;
    this.contextQueue = [];
  }

  _createClass(DefaultHeightmapResource, [{
    key: "getCanvas",
    value: function getCanvas() {
      var ctx = this.contextQueue.pop();

      if (ctx == null) {
        var canvas = document.createElement("canvas");
        canvas.width = this.tileSize;
        canvas.height = this.tileSize;
        var context = canvas.getContext("2d");
        ctx = {
          canvas: canvas,
          context: context
        };
      }

      return ctx;
    }
  }, {
    key: "getPixels",
    value: function getPixels(img) {
      var canvasRef = this.getCanvas();
      var context = canvasRef.context; //context.scale(1, -1);
      // Chrome appears to vertically flip the image for reasons that are unclear
      // We can make it work in Chrome by drawing the image upside-down at this step.

      context.drawImage(img, 0, 0, this.tileSize, this.tileSize);
      var pixels = context.getImageData(0, 0, this.tileSize, this.tileSize);
      context.clearRect(0, 0, this.tileSize, this.tileSize);
      this.contextQueue.push(canvasRef);
      return pixels;
    }
  }, {
    key: "buildTileURL",
    value: function buildTileURL(tileCoords) {
      var _this$resource;

      // reverseY for TMS tiling (https://gist.github.com/tmcw/4954720)
      // See tiling schemes here: https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/
      var z = tileCoords.z,
          y = tileCoords.y;
      return (_this$resource = this.resource) === null || _this$resource === void 0 ? void 0 : _this$resource.getDerivedResource({
        templateValues: _objectSpread2(_objectSpread2({}, tileCoords), {}, {
          reverseY: Math.pow(2, z) - y - 1
        }),
        preserveQueryParameters: true
      }).getUrlComponent(true);
    }
  }, {
    key: "getTileDataAvailable",
    value: function getTileDataAvailable(_ref2) {
      var z = _ref2.z;
      if (z == this.maxZoom) return true;
      if (z % 2 == 1 && this.skipOddLevels) return false;
      if (z > this.maxZoom) return false;
      return true;
    }
  }]);

  return DefaultHeightmapResource;
}();

var ImageFormat;

(function (ImageFormat) {
  ImageFormat["WEBP"] = "webp";
  ImageFormat["PNG"] = "png";
  ImageFormat["PNGRAW"] = "pngraw";
})(ImageFormat || (ImageFormat = {}));

var MapboxTerrainResource = /*#__PURE__*/function (_DefaultHeightmapReso) {
  _inherits(MapboxTerrainResource, _DefaultHeightmapReso);

  var _super = _createSuper(MapboxTerrainResource);

  function MapboxTerrainResource() {
    var _opts$highResolution, _opts$imageFormat;

    var _this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MapboxTerrainResource);

    _this = _super.call(this, opts);

    _defineProperty(_assertThisInitialized(_this), "resource", null);

    _defineProperty(_assertThisInitialized(_this), "credit", new Credit("Mapbox"));

    var highResolution = (_opts$highResolution = opts.highResolution) !== null && _opts$highResolution !== void 0 ? _opts$highResolution : false;
    var format = (_opts$imageFormat = opts.imageFormat) !== null && _opts$imageFormat !== void 0 ? _opts$imageFormat : ImageFormat.WEBP; // overrides based on highResolution flag

    if (highResolution) {
      if (opts.maxZoom === undefined) {
        _this.maxZoom = 14;
      }

      if (opts.tileSize === undefined) {
        _this.tileSize = 512;
      }
    }

    _this.resource = cesium.Resource.createIfNeeded("https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}".concat(highResolution ? "@2x" : "", ".").concat(format));

    if (opts.accessToken) {
      _this.resource.setQueryParameters({
        access_token: opts.accessToken
      });
    }

    return _this;
  }

  return MapboxTerrainResource;
}(DefaultHeightmapResource);

var resolves = {};
var rejects = {};
var globalMsgId = 0; // Activate calculation in the worker, returning a promise

function sendMessage(_x, _x2, _x3) {
  return _sendMessage.apply(this, arguments);
} // Handle incoming calculation result


function _sendMessage() {
  _sendMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(worker, payload, transferableObjects) {
    var msgId, msg;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            msgId = globalMsgId++;
            msg = {
              id: msgId,
              payload: payload
            };
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              // save callbacks for later
              resolves[msgId] = resolve;
              rejects[msgId] = reject;
              worker.postMessage(msg, transferableObjects);
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sendMessage.apply(this, arguments);
}

function handleMessage(msg) {
  var _msg$data = msg.data,
      id = _msg$data.id,
      err = _msg$data.err,
      payload = _msg$data.payload;

  if (payload) {
    var resolve = resolves[id];

    if (resolve) {
      resolve(payload);
    }
  } else {
    // error condition
    var reject = rejects[id];

    if (reject) {
      if (err) {
        reject(err);
      } else {
        reject("Got nothing");
      }
    }
  } // purge used callbacks


  delete resolves[id];
  delete rejects[id];
}

var WorkerFarm = /*#__PURE__*/function () {
  function WorkerFarm(opts) {
    _classCallCheck(this, WorkerFarm);

    _defineProperty(this, "worker", void 0);

    this.worker = opts.worker;
    this.worker.onmessage = handleMessage;
  }

  _createClass(WorkerFarm, [{
    key: "scheduleTask",
    value: function () {
      var _scheduleTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, transferableObjects) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return sendMessage(this.worker, params, transferableObjects);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function scheduleTask(_x4, _x5) {
        return _scheduleTask.apply(this, arguments);
      }

      return scheduleTask;
    }()
  }]);

  return WorkerFarm;
}();

var DefaultTerrainDecoder = /*#__PURE__*/function () {
  function DefaultTerrainDecoder() {
    _classCallCheck(this, DefaultTerrainDecoder);

    _defineProperty(this, "inProgress", 0);

    _defineProperty(this, "maxRequests", 2);
  }

  _createClass(DefaultTerrainDecoder, [{
    key: "requestTileGeometry",
    value: function requestTileGeometry(coords, processFunction) {
      var _this = this;

      if (this.inProgress > this.maxRequests) return undefined;
      this.inProgress += 1;
      return processFunction(coords)["finally"](function () {
        _this.inProgress -= 1;
      });
    }
  }, {
    key: "decodeTerrain",
    value: function decodeTerrain(params, data) {
      return Promise.resolve(null);
    }
  }]);

  return DefaultTerrainDecoder;
}();
var WorkerFarmTerrainDecoder = /*#__PURE__*/function (_DefaultTerrainDecode) {
  _inherits(WorkerFarmTerrainDecoder, _DefaultTerrainDecode);

  var _super = _createSuper(WorkerFarmTerrainDecoder);

  function WorkerFarmTerrainDecoder(opts) {
    var _opts$maxWorkers;

    var _this2;

    _classCallCheck(this, WorkerFarmTerrainDecoder);

    _this2 = _super.call(this);

    _defineProperty(_assertThisInitialized(_this2), "farm", void 0);

    _this2.farm = new WorkerFarm({
      worker: opts.worker
    });
    _this2.maxRequests = (_opts$maxWorkers = opts.maxWorkers) !== null && _opts$maxWorkers !== void 0 ? _opts$maxWorkers : 5;
    return _this2;
  }

  _createClass(WorkerFarmTerrainDecoder, [{
    key: "decodeTerrain",
    value: function decodeTerrain(params, data) {
      return this.farm.scheduleTask(params, [data]);
    }
  }]);

  return WorkerFarmTerrainDecoder;
}(DefaultTerrainDecoder);

require("ndarray");

var MartiniTerrainProvider = /*#__PURE__*/function () {
  // @ts-ignore
  function MartiniTerrainProvider() {
    var _this$resource$credit, _opts$detailScalar, _opts$minimumErrorLev, _opts$ellipsoid;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MartiniTerrainProvider);

    _defineProperty(this, "hasWaterMask", false);

    _defineProperty(this, "hasVertexNormals", false);

    _defineProperty(this, "credit", new cesium.Credit("Mapbox"));

    _defineProperty(this, "ready", void 0);

    _defineProperty(this, "readyPromise", void 0);

    _defineProperty(this, "availability", null);

    _defineProperty(this, "errorEvent", new cesium.Event());

    _defineProperty(this, "tilingScheme", void 0);

    _defineProperty(this, "ellipsoid", void 0);

    _defineProperty(this, "levelOfDetailScalar", null);

    _defineProperty(this, "minError", 0.1);

    _defineProperty(this, "resource", null);

    _defineProperty(this, "decoder", null);

    _defineProperty(this, "RADIUS_SCALAR", 1.0);

    //this.martini = new Martini(257);
    this.resource = opts.resource;
    this.credit = (_this$resource$credit = this.resource.credit) !== null && _this$resource$credit !== void 0 ? _this$resource$credit : new cesium.Credit("Mapbox");
    this.decoder = opts.decoder;

    if (!this.decoder) {
      var _opts$maxWorkers;

      var maxWorkers = (_opts$maxWorkers = opts.maxWorkers) !== null && _opts$maxWorkers !== void 0 ? _opts$maxWorkers : 5;

      if (maxWorkers > 0) {
        this.decoder = new WorkerFarmTerrainDecoder({
          maxWorkers: maxWorkers
        });
      } else {
        this.decoder = new DefaultTerrainDecoder();
      }
    }

    this.levelOfDetailScalar = ((_opts$detailScalar = opts.detailScalar) !== null && _opts$detailScalar !== void 0 ? _opts$detailScalar : 4.0) + cesium.Math.EPSILON5;
    this.ready = true;
    this.readyPromise = Promise.resolve(true);
    this.minError = (_opts$minimumErrorLev = opts.minimumErrorLevel) !== null && _opts$minimumErrorLev !== void 0 ? _opts$minimumErrorLev : 0.1;
    this.errorEvent.addEventListener(console.log, this);
    this.ellipsoid = (_opts$ellipsoid = opts.ellipsoid) !== null && _opts$ellipsoid !== void 0 ? _opts$ellipsoid : cesium.Ellipsoid.WGS84;
    this.tilingScheme = new cesium.WebMercatorTilingScheme({
      numberOfLevelZeroTilesX: 1,
      numberOfLevelZeroTilesY: 1,
      ellipsoid: this.ellipsoid
    });
  }

  _createClass(MartiniTerrainProvider, [{
    key: "requestTileGeometry",
    value: function requestTileGeometry(x, y, z, request) {
      return this.decoder.requestTileGeometry({
        x: x,
        y: y,
        z: z
      }, this.processTile.bind(this));
    }
  }, {
    key: "processTile",
    value: function () {
      var _processTile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var x, y, z, err, _this$resource, tileSize, getTilePixels, px, pixelData, tileRect, maxLength, params, res, v;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                x = _ref.x, y = _ref.y, z = _ref.z;
                // Something wonky about our tiling scheme, perhaps
                // 12/2215/2293 @2x
                //const url = `https://a.tiles.mapbox.com/v4/mapbox.terrain-rgb/${z}/${x}/${y}${hires}.${this.format}?access_token=${this.accessToken}`;
                err = this.getErrorLevel(z);
                _context.prev = 2;
                _this$resource = this.resource, tileSize = _this$resource.tileSize, getTilePixels = _this$resource.getTilePixels;
                _context.next = 6;
                return getTilePixels({
                  x: x,
                  y: y,
                  z: z
                });

              case 6:
                px = _context.sent;
                pixelData = px.data;
                tileRect = this.tilingScheme.tileXYToRectangle(x, y, z);
                maxLength = Math.min(Math.round(tileSize / 32) * (z + 1), tileSize);
                params = {
                  imageData: pixelData,
                  maxLength: maxLength,
                  x: x,
                  y: y,
                  z: z,
                  errorLevel: err,
                  ellipsoidRadius: this.ellipsoid.maximumRadius,
                  tileSize: tileSize
                };
                _context.next = 13;
                return this.decoder.decodeTerrain(params, pixelData.buffer);

              case 13:
                res = _context.sent;
                pixelData = undefined;
                px = undefined;
                return _context.abrupt("return", this.createQuantizedMeshData(tileRect, err, res));

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](2);
                // console.log(err);
                // return undefined
                v = Math.max(32 - 4 * z, 4);
                return _context.abrupt("return", this.emptyHeightmap(v));

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 19]]);
      }));

      function processTile(_x) {
        return _processTile.apply(this, arguments);
      }

      return processTile;
    }()
  }, {
    key: "getErrorLevel",
    value: function getErrorLevel(zoom) {
      return Math.max(this.getLevelMaximumGeometricError(zoom) / this.levelOfDetailScalar, this.minError);
    }
  }, {
    key: "createQuantizedMeshData",
    value: function createQuantizedMeshData(tileRect, errorLevel, workerOutput) {
      var minimumHeight = workerOutput.minimumHeight,
          maximumHeight = workerOutput.maximumHeight,
          quantizedVertices = workerOutput.quantizedVertices,
          indices = workerOutput.indices,
          westIndices = workerOutput.westIndices,
          southIndices = workerOutput.southIndices,
          eastIndices = workerOutput.eastIndices,
          northIndices = workerOutput.northIndices;
      var err = errorLevel;
      var skirtHeight = err * 20;
      var center = cesium.Rectangle.center(tileRect); // Need to get maximum distance at zoom level
      // tileRect.width is given in radians
      // cos of half-tile-width allows us to use right-triangle relationship

      var cosWidth = Math.cos(tileRect.width / 2); // half tile width since our ref point is at the center
      // scale max height to max ellipsoid radius
      // ... it might be better to use the radius of the entire
      // cosine relationship to scale height in ellipsoid-relative coordinates

      var occlusionPoint = new cesium.Cartographic(center.longitude, center.latitude, maximumHeight * 2 / cosWidth // Scaling factor of two just to be sure.
      );
      var horizonOcclusionPoint = this.ellipsoid.transformPositionToScaledSpace(cesium.Cartographic.toCartesian(occlusionPoint));
      var orientedBoundingBox = cesium.OrientedBoundingBox.fromRectangle(tileRect, minimumHeight, maximumHeight, this.tilingScheme.ellipsoid);
      var boundingSphere = cesium.BoundingSphere.fromOrientedBoundingBox(orientedBoundingBox); // SE NW NE
      // NE NW SE

      var result = new cesium.QuantizedMeshTerrainData({
        minimumHeight: minimumHeight,
        maximumHeight: maximumHeight,
        quantizedVertices: quantizedVertices,
        indices: indices,
        boundingSphere: boundingSphere,
        orientedBoundingBox: orientedBoundingBox,
        horizonOcclusionPoint: horizonOcclusionPoint,
        westIndices: westIndices,
        southIndices: southIndices,
        eastIndices: eastIndices,
        northIndices: northIndices,
        westSkirtHeight: skirtHeight,
        southSkirtHeight: skirtHeight,
        eastSkirtHeight: skirtHeight,
        northSkirtHeight: skirtHeight,
        childTileMask: 15
      }); //debugger;
      //if (tileRect.width < 0.01) debugger;
      //return this.emptyHeightmap(2);

      return result;
    }
  }, {
    key: "emptyHeightmap",
    value: function emptyHeightmap(samples) {
      return new cesium.HeightmapTerrainData({
        buffer: new Uint8Array(Array(samples * samples).fill(0)),
        width: samples,
        height: samples
      });
    }
  }, {
    key: "getLevelMaximumGeometricError",
    value: function getLevelMaximumGeometricError(level) {
      var levelZeroMaximumGeometricError = cesium.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(this.tilingScheme.ellipsoid, 65, this.tilingScheme.getNumberOfXTilesAtLevel(0)); // Scalar to control overzooming
      // also seems to control zooming for imagery layers

      var scalar = this.resource.tileSize / 256;
      return levelZeroMaximumGeometricError / scalar / (1 << level);
    }
  }, {
    key: "getTileDataAvailable",
    value: function getTileDataAvailable(x, y, z) {
      return this.resource.getTileDataAvailable({
        x: x,
        y: y,
        z: z
      });
    }
  }]);

  return MartiniTerrainProvider;
}();

function decodeBase64(base64, enableUnicode) {
    var binaryString = atob(base64);
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    var blob = new Blob([body], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgewogICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsKICB9CgogIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsKICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOwogIH0KCiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7CiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gInVuZGVmaW5lZCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlclsiQEBpdGVyYXRvciJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOwogIH0KCiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgewogICAgaWYgKCFvKSByZXR1cm47CiAgICBpZiAodHlwZW9mIG8gPT09ICJzdHJpbmciKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsKICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsKICAgIGlmIChuID09PSAiT2JqZWN0IiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOwogICAgaWYgKG4gPT09ICJNYXAiIHx8IG4gPT09ICJTZXQiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsKICAgIGlmIChuID09PSAiQXJndW1lbnRzIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7CiAgfQoKICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgewogICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7CgogICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOwoKICAgIHJldHVybiBhcnIyOwogIH0KCiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgewogICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuIik7CiAgfQoKICAvLyBXZSBzaG91bGQgc2F2ZSB0aGVzZQogIC8vY29uc3QgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcygyNTYsIDI1Nik7CiAgLy9jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgiMmQiKTsKCiAgLyoqIE1hcGJveCBUZXJyYWluLVJHQiBkZWZhdWx0IGRlY29kZSBmdW5jdGlvbg0KICAqICAociAqIDI1NiAqIDI1NikgLyAxMCArIChnICogMjU2KSAvIDEwICsgYiAvIDEwIC0gMTAwMDANCiAgKi8KICB2YXIgZGVmYXVsdE1hcGJveERlY29kZVJnYiA9IGZ1bmN0aW9uIGRlZmF1bHRNYXBib3hEZWNvZGVSZ2IociwgZywgYiwgYSkgewogICAgcmV0dXJuIHIgKiA2NTUzLjYgKyBnICogMjUuNiArIGIgKiAwLjEgLSAxMDAwMDsKICB9OwoKICBmdW5jdGlvbiByZ2JUZXJyYWluVG9HcmlkKHBuZywgZGVjb2RlUmdiKSB7CiAgICAvLyBtYXliZSB3ZSBzaG91bGQgZG8gdGhpcyBvbiB0aGUgR1BVIHVzaW5nIFJFR0w/CiAgICAvLyBidXQgdGhhdCB3b3VsZCByZXF1aXJlIEdQVSAtPiBDUFUgLT4gR1BVCiAgICB2YXIgZ3JpZFNpemUgPSBwbmcuc2hhcGVbMF0gKyAxOwogICAgdmFyIHRlcnJhaW4gPSBuZXcgRmxvYXQzMkFycmF5KGdyaWRTaXplICogZ3JpZFNpemUpOwogICAgdmFyIHRpbGVTaXplID0gcG5nLnNoYXBlWzBdOwogICAgdmFyIGRlY29kZSA9IGRlY29kZVJnYiAhPT0gbnVsbCAmJiBkZWNvZGVSZ2IgIT09IHZvaWQgMCA/IGRlY29kZVJnYiA6IGRlZmF1bHRNYXBib3hEZWNvZGVSZ2I7IC8vIGRlY29kZSB0ZXJyYWluIHZhbHVlcwoKICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGlsZVNpemU7IHkrKykgewogICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRpbGVTaXplOyB4KyspIHsKICAgICAgICB2YXIgeWMgPSB5OwoKICAgICAgICB2YXIgX3IgPSBwbmcuZ2V0KHgsIHljLCAwKTsKCiAgICAgICAgdmFyIF9nID0gcG5nLmdldCh4LCB5YywgMSk7CgogICAgICAgIHZhciBfYiA9IHBuZy5nZXQoeCwgeWMsIDIpOwoKICAgICAgICB2YXIgX2EgPSBwbmcuZ2V0KHgsIHljLCAzKTsKCiAgICAgICAgdGVycmFpblt5ICogZ3JpZFNpemUgKyB4XSA9IGRlY29kZShfciwgX2csIF9iLCBfYSk7CiAgICAgIH0KICAgIH0gLy8gYmFja2ZpbGwgcmlnaHQgYW5kIGJvdHRvbSBib3JkZXJzCgoKICAgIGZvciAodmFyIF94ID0gMDsgX3ggPCBncmlkU2l6ZSAtIDE7IF94KyspIHsKICAgICAgdGVycmFpbltncmlkU2l6ZSAqIChncmlkU2l6ZSAtIDEpICsgX3hdID0gdGVycmFpbltncmlkU2l6ZSAqIChncmlkU2l6ZSAtIDIpICsgX3hdOwogICAgfQoKICAgIGZvciAodmFyIF95ID0gMDsgX3kgPCBncmlkU2l6ZTsgX3krKykgewogICAgICB0ZXJyYWluW2dyaWRTaXplICogX3kgKyBncmlkU2l6ZSAtIDFdID0gdGVycmFpbltncmlkU2l6ZSAqIF95ICsgZ3JpZFNpemUgLSAyXTsKICAgIH0KCiAgICByZXR1cm4gdGVycmFpbjsKICB9CgogIGZ1bmN0aW9uIGNyZWF0ZVF1YW50aXplZE1lc2hEYXRhKHRpbGUsIG1lc2gsIHRpbGVTaXplKSB7CiAgICB2YXIgeHZhbHMgPSBbXTsKICAgIHZhciB5dmFscyA9IFtdOwogICAgdmFyIGhlaWdodE1ldGVycyA9IFtdOwogICAgdmFyIG5vcnRoSW5kaWNlcyA9IFtdOwogICAgdmFyIHNvdXRoSW5kaWNlcyA9IFtdOwogICAgdmFyIGVhc3RJbmRpY2VzID0gW107CiAgICB2YXIgd2VzdEluZGljZXMgPSBbXTsKICAgIHZhciBtaW5pbXVtSGVpZ2h0ID0gSW5maW5pdHk7CiAgICB2YXIgbWF4aW11bUhlaWdodCA9IC1JbmZpbml0eTsKICAgIHZhciBzY2FsYXIgPSAzMjc2OC4wIC8gdGlsZVNpemU7CgogICAgZm9yICh2YXIgaXggPSAwOyBpeCA8IG1lc2gudmVydGljZXMubGVuZ3RoIC8gMjsgaXgrKykgewogICAgICB2YXIgdmVydGV4SXggPSBpeDsKICAgICAgdmFyIHB4ID0gbWVzaC52ZXJ0aWNlc1tpeCAqIDJdOwogICAgICB2YXIgcHkgPSBtZXNoLnZlcnRpY2VzW2l4ICogMiArIDFdOwogICAgICB2YXIgaGVpZ2h0ID0gdGlsZS50ZXJyYWluW3B5ICogKHRpbGVTaXplICsgMSkgKyBweF07CiAgICAgIGlmIChoZWlnaHQgPiBtYXhpbXVtSGVpZ2h0KSBtYXhpbXVtSGVpZ2h0ID0gaGVpZ2h0OwogICAgICBpZiAoaGVpZ2h0IDwgbWluaW11bUhlaWdodCkgbWluaW11bUhlaWdodCA9IGhlaWdodDsKICAgICAgaGVpZ2h0TWV0ZXJzLnB1c2goaGVpZ2h0KTsKICAgICAgaWYgKHB5ID09IDApIG5vcnRoSW5kaWNlcy5wdXNoKHZlcnRleEl4KTsKICAgICAgaWYgKHB5ID09IHRpbGVTaXplKSBzb3V0aEluZGljZXMucHVzaCh2ZXJ0ZXhJeCk7CiAgICAgIGlmIChweCA9PSAwKSB3ZXN0SW5kaWNlcy5wdXNoKHZlcnRleEl4KTsKICAgICAgaWYgKHB4ID09IHRpbGVTaXplKSBlYXN0SW5kaWNlcy5wdXNoKHZlcnRleEl4KTsKICAgICAgdmFyIHh2ID0gcHggKiBzY2FsYXI7CiAgICAgIHZhciB5diA9ICh0aWxlU2l6ZSAtIHB5KSAqIHNjYWxhcjsKICAgICAgeHZhbHMucHVzaCh4dik7CiAgICAgIHl2YWxzLnB1c2goeXYpOwogICAgfQoKICAgIHZhciBoZWlnaHRSYW5nZSA9IG1heGltdW1IZWlnaHQgLSBtaW5pbXVtSGVpZ2h0OwogICAgdmFyIGhlaWdodHMgPSBoZWlnaHRNZXRlcnMubWFwKGZ1bmN0aW9uIChkKSB7CiAgICAgIGlmIChoZWlnaHRSYW5nZSA8IDEpIHJldHVybiAwOwogICAgICByZXR1cm4gKGQgLSBtaW5pbXVtSGVpZ2h0KSAqICgzMjc2Ny4wIC8gaGVpZ2h0UmFuZ2UpOwogICAgfSk7CiAgICB2YXIgdHJpYW5nbGVzID0gbmV3IFVpbnQxNkFycmF5KG1lc2gudHJpYW5nbGVzKTsKICAgIHZhciBxdWFudGl6ZWRWZXJ0aWNlcyA9IG5ldyBVaW50MTZBcnJheSggLy92ZXJ0cwogICAgW10uY29uY2F0KHh2YWxzLCB5dmFscywgX3RvQ29uc3VtYWJsZUFycmF5KGhlaWdodHMpKSk7IC8vIFNFIE5XIE5FCiAgICAvLyBORSBOVyBTRQoKICAgIHJldHVybiB7CiAgICAgIG1pbmltdW1IZWlnaHQ6IG1pbmltdW1IZWlnaHQsCiAgICAgIG1heGltdW1IZWlnaHQ6IG1heGltdW1IZWlnaHQsCiAgICAgIHF1YW50aXplZFZlcnRpY2VzOiBxdWFudGl6ZWRWZXJ0aWNlcywKICAgICAgaW5kaWNlczogdHJpYW5nbGVzLAogICAgICB3ZXN0SW5kaWNlczogd2VzdEluZGljZXMsCiAgICAgIHNvdXRoSW5kaWNlczogc291dGhJbmRpY2VzLAogICAgICBlYXN0SW5kaWNlczogZWFzdEluZGljZXMsCiAgICAgIG5vcnRoSW5kaWNlczogbm9ydGhJbmRpY2VzCiAgICB9OwogIH0KCiAgZnVuY3Rpb24gaW90YShuKSB7CiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KG4pOwogICAgZm9yKHZhciBpPTA7IGk8bjsgKytpKSB7CiAgICAgIHJlc3VsdFtpXSA9IGk7CiAgICB9CiAgICByZXR1cm4gcmVzdWx0CiAgfQoKICB2YXIgaW90YV8xID0gaW90YTsKCiAgLyohCiAgICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlcgogICAqCiAgICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz4KICAgKiBAbGljZW5zZSAgTUlUCiAgICovCiAgLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZwogIC8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkKICB2YXIgaXNCdWZmZXJfMSA9IGZ1bmN0aW9uIChvYmopIHsKICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpCiAgfTsKCiAgZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikgewogICAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikKICB9CgogIC8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuCiAgZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHsKICAgIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKQogIH0KCiAgdmFyIGhhc1R5cGVkQXJyYXlzICA9ICgodHlwZW9mIEZsb2F0NjRBcnJheSkgIT09ICJ1bmRlZmluZWQiKTsKCiAgZnVuY3Rpb24gY29tcGFyZTFzdChhLCBiKSB7CiAgICByZXR1cm4gYVswXSAtIGJbMF0KICB9CgogIGZ1bmN0aW9uIG9yZGVyKCkgewogICAgdmFyIHN0cmlkZSA9IHRoaXMuc3RyaWRlOwogICAgdmFyIHRlcm1zID0gbmV3IEFycmF5KHN0cmlkZS5sZW5ndGgpOwogICAgdmFyIGk7CiAgICBmb3IoaT0wOyBpPHRlcm1zLmxlbmd0aDsgKytpKSB7CiAgICAgIHRlcm1zW2ldID0gW01hdGguYWJzKHN0cmlkZVtpXSksIGldOwogICAgfQogICAgdGVybXMuc29ydChjb21wYXJlMXN0KTsKICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodGVybXMubGVuZ3RoKTsKICAgIGZvcihpPTA7IGk8cmVzdWx0Lmxlbmd0aDsgKytpKSB7CiAgICAgIHJlc3VsdFtpXSA9IHRlcm1zW2ldWzFdOwogICAgfQogICAgcmV0dXJuIHJlc3VsdAogIH0KCiAgZnVuY3Rpb24gY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBkaW1lbnNpb24pIHsKICAgIHZhciBjbGFzc05hbWUgPSBbIlZpZXciLCBkaW1lbnNpb24sICJkIiwgZHR5cGVdLmpvaW4oIiIpOwogICAgaWYoZGltZW5zaW9uIDwgMCkgewogICAgICBjbGFzc05hbWUgPSAiVmlld19OaWwiICsgZHR5cGU7CiAgICB9CiAgICB2YXIgdXNlR2V0dGVycyA9IChkdHlwZSA9PT0gImdlbmVyaWMiKTsKCiAgICBpZihkaW1lbnNpb24gPT09IC0xKSB7CiAgICAgIC8vU3BlY2lhbCBjYXNlIGZvciB0cml2aWFsIGFycmF5cwogICAgICB2YXIgY29kZSA9CiAgICAgICAgImZ1bmN0aW9uICIrY2xhc3NOYW1lKyIoYSl7dGhpcy5kYXRhPWE7fTtcCnZhciBwcm90bz0iK2NsYXNzTmFtZSsiLnByb3RvdHlwZTtcCnByb3RvLmR0eXBlPSciK2R0eXBlKyInO1wKcHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gLTF9O1wKcHJvdG8uc2l6ZT0wO1wKcHJvdG8uZGltZW5zaW9uPS0xO1wKcHJvdG8uc2hhcGU9cHJvdG8uc3RyaWRlPXByb3RvLm9yZGVyPVtdO1wKcHJvdG8ubG89cHJvdG8uaGk9cHJvdG8udHJhbnNwb3NlPXByb3RvLnN0ZXA9XApmdW5jdGlvbigpe3JldHVybiBuZXcgIitjbGFzc05hbWUrIih0aGlzLmRhdGEpO307XApwcm90by5nZXQ9cHJvdG8uc2V0PWZ1bmN0aW9uKCl7fTtcCnByb3RvLnBpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH07XApyZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0XyIrY2xhc3NOYW1lKyIoYSl7cmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKGEpO30iOwogICAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKGNvZGUpOwogICAgICByZXR1cm4gcHJvY2VkdXJlKCkKICAgIH0gZWxzZSBpZihkaW1lbnNpb24gPT09IDApIHsKICAgICAgLy9TcGVjaWFsIGNhc2UgZm9yIDBkIGFycmF5cwogICAgICB2YXIgY29kZSA9CiAgICAgICAgImZ1bmN0aW9uICIrY2xhc3NOYW1lKyIoYSxkKSB7XAp0aGlzLmRhdGEgPSBhO1wKdGhpcy5vZmZzZXQgPSBkXAp9O1wKdmFyIHByb3RvPSIrY2xhc3NOYW1lKyIucHJvdG90eXBlO1wKcHJvdG8uZHR5cGU9JyIrZHR5cGUrIic7XApwcm90by5pbmRleD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm9mZnNldH07XApwcm90by5kaW1lbnNpb249MDtcCnByb3RvLnNpemU9MTtcCnByb3RvLnNoYXBlPVwKcHJvdG8uc3RyaWRlPVwKcHJvdG8ub3JkZXI9W107XApwcm90by5sbz1cCnByb3RvLmhpPVwKcHJvdG8udHJhbnNwb3NlPVwKcHJvdG8uc3RlcD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX2NvcHkoKSB7XApyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIodGhpcy5kYXRhLHRoaXMub2Zmc2V0KVwKfTtcCnByb3RvLnBpY2s9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9waWNrKCl7XApyZXR1cm4gVHJpdmlhbEFycmF5KHRoaXMuZGF0YSk7XAp9O1wKcHJvdG8udmFsdWVPZj1wcm90by5nZXQ9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9nZXQoKXtcCnJldHVybiAiKyh1c2VHZXR0ZXJzID8gInRoaXMuZGF0YS5nZXQodGhpcy5vZmZzZXQpIiA6ICJ0aGlzLmRhdGFbdGhpcy5vZmZzZXRdIikrCiAgIn07XApwcm90by5zZXQ9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9zZXQodil7XApyZXR1cm4gIisodXNlR2V0dGVycyA/ICJ0aGlzLmRhdGEuc2V0KHRoaXMub2Zmc2V0LHYpIiA6ICJ0aGlzLmRhdGFbdGhpcy5vZmZzZXRdPXYiKSsiXAp9O1wKcmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF8iK2NsYXNzTmFtZSsiKGEsYixjLGQpe3JldHVybiBuZXcgIitjbGFzc05hbWUrIihhLGQpfSI7CiAgICAgIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oIlRyaXZpYWxBcnJheSIsIGNvZGUpOwogICAgICByZXR1cm4gcHJvY2VkdXJlKENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdWzBdKQogICAgfQoKICAgIHZhciBjb2RlID0gWyIndXNlIHN0cmljdCciXTsKCiAgICAvL0NyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgdmlldwogICAgdmFyIGluZGljZXMgPSBpb3RhXzEoZGltZW5zaW9uKTsKICAgIHZhciBhcmdzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gImkiK2kgfSk7CiAgICB2YXIgaW5kZXhfc3RyID0gInRoaXMub2Zmc2V0KyIgKyBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgICByZXR1cm4gInRoaXMuc3RyaWRlWyIgKyBpICsgIl0qaSIgKyBpCiAgICAgICAgfSkuam9pbigiKyIpOwogICAgdmFyIHNoYXBlQXJnID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYiIraQogICAgICB9KS5qb2luKCIsIik7CiAgICB2YXIgc3RyaWRlQXJnID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYyIraQogICAgICB9KS5qb2luKCIsIik7CiAgICBjb2RlLnB1c2goCiAgICAgICJmdW5jdGlvbiAiK2NsYXNzTmFtZSsiKGEsIiArIHNoYXBlQXJnICsgIiwiICsgc3RyaWRlQXJnICsgIixkKXt0aGlzLmRhdGE9YSIsCiAgICAgICAgInRoaXMuc2hhcGU9WyIgKyBzaGFwZUFyZyArICJdIiwKICAgICAgICAidGhpcy5zdHJpZGU9WyIgKyBzdHJpZGVBcmcgKyAiXSIsCiAgICAgICAgInRoaXMub2Zmc2V0PWR8MH0iLAogICAgICAidmFyIHByb3RvPSIrY2xhc3NOYW1lKyIucHJvdG90eXBlIiwKICAgICAgInByb3RvLmR0eXBlPSciK2R0eXBlKyInIiwKICAgICAgInByb3RvLmRpbWVuc2lvbj0iK2RpbWVuc2lvbik7CgogICAgLy92aWV3LnNpemU6CiAgICBjb2RlLnB1c2goIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnc2l6ZScse2dldDpmdW5jdGlvbiAiK2NsYXNzTmFtZSsiX3NpemUoKXtcCnJldHVybiAiK2luZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuICJ0aGlzLnNoYXBlWyIraSsiXSIgfSkuam9pbigiKiIpLAogICJ9fSkiKTsKCiAgICAvL3ZpZXcub3JkZXI6CiAgICBpZihkaW1lbnNpb24gPT09IDEpIHsKICAgICAgY29kZS5wdXNoKCJwcm90by5vcmRlcj1bMF0iKTsKICAgIH0gZWxzZSB7CiAgICAgIGNvZGUucHVzaCgiT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCdvcmRlcicse2dldDoiKTsKICAgICAgaWYoZGltZW5zaW9uIDwgNCkgewogICAgICAgIGNvZGUucHVzaCgiZnVuY3Rpb24gIitjbGFzc05hbWUrIl9vcmRlcigpeyIpOwogICAgICAgIGlmKGRpbWVuc2lvbiA9PT0gMikgewogICAgICAgICAgY29kZS5wdXNoKCJyZXR1cm4gKE1hdGguYWJzKHRoaXMuc3RyaWRlWzBdKT5NYXRoLmFicyh0aGlzLnN0cmlkZVsxXSkpP1sxLDBdOlswLDFdfX0pIik7CiAgICAgICAgfSBlbHNlIGlmKGRpbWVuc2lvbiA9PT0gMykgewogICAgICAgICAgY29kZS5wdXNoKAogICJ2YXIgczA9TWF0aC5hYnModGhpcy5zdHJpZGVbMF0pLHMxPU1hdGguYWJzKHRoaXMuc3RyaWRlWzFdKSxzMj1NYXRoLmFicyh0aGlzLnN0cmlkZVsyXSk7XAppZihzMD5zMSl7XAppZihzMT5zMil7XApyZXR1cm4gWzIsMSwwXTtcCn1lbHNlIGlmKHMwPnMyKXtcCnJldHVybiBbMSwyLDBdO1wKfWVsc2V7XApyZXR1cm4gWzEsMCwyXTtcCn1cCn1lbHNlIGlmKHMwPnMyKXtcCnJldHVybiBbMiwwLDFdO1wKfWVsc2UgaWYoczI+czEpe1wKcmV0dXJuIFswLDEsMl07XAp9ZWxzZXtcCnJldHVybiBbMCwyLDFdO1wKfX19KSIpOwogICAgICAgIH0KICAgICAgfSBlbHNlIHsKICAgICAgICBjb2RlLnB1c2goIk9SREVSfSkiKTsKICAgICAgfQogICAgfQoKICAgIC8vdmlldy5zZXQoaTAsIC4uLiwgdik6CiAgICBjb2RlLnB1c2goCiAgInByb3RvLnNldD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX3NldCgiK2FyZ3Muam9pbigiLCIpKyIsdil7Iik7CiAgICBpZih1c2VHZXR0ZXJzKSB7CiAgICAgIGNvZGUucHVzaCgicmV0dXJuIHRoaXMuZGF0YS5zZXQoIitpbmRleF9zdHIrIix2KX0iKTsKICAgIH0gZWxzZSB7CiAgICAgIGNvZGUucHVzaCgicmV0dXJuIHRoaXMuZGF0YVsiK2luZGV4X3N0cisiXT12fSIpOwogICAgfQoKICAgIC8vdmlldy5nZXQoaTAsIC4uLik6CiAgICBjb2RlLnB1c2goInByb3RvLmdldD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX2dldCgiK2FyZ3Muam9pbigiLCIpKyIpeyIpOwogICAgaWYodXNlR2V0dGVycykgewogICAgICBjb2RlLnB1c2goInJldHVybiB0aGlzLmRhdGEuZ2V0KCIraW5kZXhfc3RyKyIpfSIpOwogICAgfSBlbHNlIHsKICAgICAgY29kZS5wdXNoKCJyZXR1cm4gdGhpcy5kYXRhWyIraW5kZXhfc3RyKyJdfSIpOwogICAgfQoKICAgIC8vdmlldy5pbmRleDoKICAgIGNvZGUucHVzaCgKICAgICAgInByb3RvLmluZGV4PWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfaW5kZXgoIiwgYXJncy5qb2luKCksICIpe3JldHVybiAiK2luZGV4X3N0cisifSIpOwoKICAgIC8vdmlldy5oaSgpOgogICAgY29kZS5wdXNoKCJwcm90by5oaT1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX2hpKCIrYXJncy5qb2luKCIsIikrIil7cmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuIFsiKHR5cGVvZiBpIixpLCIhPT0nbnVtYmVyJ3x8aSIsaSwiPDApP3RoaXMuc2hhcGVbIiwgaSwgIl06aSIsIGksInwwIl0uam9pbigiIikKICAgICAgfSkuam9pbigiLCIpKyIsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAidGhpcy5zdHJpZGVbIitpICsgIl0iCiAgICAgIH0pLmpvaW4oIiwiKSsiLHRoaXMub2Zmc2V0KX0iKTsKCiAgICAvL3ZpZXcubG8oKToKICAgIHZhciBhX3ZhcnMgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiAiYSIraSsiPXRoaXMuc2hhcGVbIitpKyJdIiB9KTsKICAgIHZhciBjX3ZhcnMgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiAiYyIraSsiPXRoaXMuc3RyaWRlWyIraSsiXSIgfSk7CiAgICBjb2RlLnB1c2goInByb3RvLmxvPWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfbG8oIithcmdzLmpvaW4oIiwiKSsiKXt2YXIgYj10aGlzLm9mZnNldCxkPTAsIithX3ZhcnMuam9pbigiLCIpKyIsIitjX3ZhcnMuam9pbigiLCIpKTsKICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7CiAgICAgIGNvZGUucHVzaCgKICAiaWYodHlwZW9mIGkiK2krIj09PSdudW1iZXInJiZpIitpKyI+PTApe1wKZD1pIitpKyJ8MDtcCmIrPWMiK2krIipkO1wKYSIraSsiLT1kfSIpOwogICAgfQogICAgY29kZS5wdXNoKCJyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIodGhpcy5kYXRhLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImEiK2kKICAgICAgfSkuam9pbigiLCIpKyIsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYyIraQogICAgICB9KS5qb2luKCIsIikrIixiKX0iKTsKCiAgICAvL3ZpZXcuc3RlcCgpOgogICAgY29kZS5wdXNoKCJwcm90by5zdGVwPWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfc3RlcCgiK2FyZ3Muam9pbigiLCIpKyIpe3ZhciAiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJhIitpKyI9dGhpcy5zaGFwZVsiK2krIl0iCiAgICAgIH0pLmpvaW4oIiwiKSsiLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImIiK2krIj10aGlzLnN0cmlkZVsiK2krIl0iCiAgICAgIH0pLmpvaW4oIiwiKSsiLGM9dGhpcy5vZmZzZXQsZD0wLGNlaWw9TWF0aC5jZWlsIik7CiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkgewogICAgICBjb2RlLnB1c2goCiAgImlmKHR5cGVvZiBpIitpKyI9PT0nbnVtYmVyJyl7XApkPWkiK2krInwwO1wKaWYoZDwwKXtcCmMrPWIiK2krIiooYSIraSsiLTEpO1wKYSIraSsiPWNlaWwoLWEiK2krIi9kKVwKfWVsc2V7XAphIitpKyI9Y2VpbChhIitpKyIvZClcCn1cCmIiK2krIio9ZFwKfSIpOwogICAgfQogICAgY29kZS5wdXNoKCJyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIodGhpcy5kYXRhLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImEiICsgaQogICAgICB9KS5qb2luKCIsIikrIiwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJiIiArIGkKICAgICAgfSkuam9pbigiLCIpKyIsYyl9Iik7CgogICAgLy92aWV3LnRyYW5zcG9zZSgpOgogICAgdmFyIHRTaGFwZSA9IG5ldyBBcnJheShkaW1lbnNpb24pOwogICAgdmFyIHRTdHJpZGUgPSBuZXcgQXJyYXkoZGltZW5zaW9uKTsKICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7CiAgICAgIHRTaGFwZVtpXSA9ICJhW2kiK2krIl0iOwogICAgICB0U3RyaWRlW2ldID0gImJbaSIraSsiXSI7CiAgICB9CiAgICBjb2RlLnB1c2goInByb3RvLnRyYW5zcG9zZT1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX3RyYW5zcG9zZSgiK2FyZ3MrIil7IisKICAgICAgYXJncy5tYXAoZnVuY3Rpb24obixpZHgpIHsgcmV0dXJuIG4gKyAiPSgiICsgbiArICI9PT11bmRlZmluZWQ/IiArIGlkeCArICI6IiArIG4gKyAifDApIn0pLmpvaW4oIjsiKSwKICAgICAgInZhciBhPXRoaXMuc2hhcGUsYj10aGlzLnN0cmlkZTtyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIodGhpcy5kYXRhLCIrdFNoYXBlLmpvaW4oIiwiKSsiLCIrdFN0cmlkZS5qb2luKCIsIikrIix0aGlzLm9mZnNldCl9Iik7CgogICAgLy92aWV3LnBpY2soKToKICAgIGNvZGUucHVzaCgicHJvdG8ucGljaz1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX3BpY2soIithcmdzKyIpe3ZhciBhPVtdLGI9W10sYz10aGlzLm9mZnNldCIpOwogICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHsKICAgICAgY29kZS5wdXNoKCJpZih0eXBlb2YgaSIraSsiPT09J251bWJlcicmJmkiK2krIj49MCl7Yz0oYyt0aGlzLnN0cmlkZVsiK2krIl0qaSIraSsiKXwwfWVsc2V7YS5wdXNoKHRoaXMuc2hhcGVbIitpKyJdKTtiLnB1c2godGhpcy5zdHJpZGVbIitpKyJdKX0iKTsKICAgIH0KICAgIGNvZGUucHVzaCgidmFyIGN0b3I9Q1RPUl9MSVNUW2EubGVuZ3RoKzFdO3JldHVybiBjdG9yKHRoaXMuZGF0YSxhLGIsYyl9Iik7CgogICAgLy9BZGQgcmV0dXJuIHN0YXRlbWVudAogICAgY29kZS5wdXNoKCJyZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0XyIrY2xhc3NOYW1lKyIoZGF0YSxzaGFwZSxzdHJpZGUsb2Zmc2V0KXtyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIoZGF0YSwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJzaGFwZVsiK2krIl0iCiAgICAgIH0pLmpvaW4oIiwiKSsiLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gInN0cmlkZVsiK2krIl0iCiAgICAgIH0pLmpvaW4oIiwiKSsiLG9mZnNldCl9Iik7CgogICAgLy9Db21waWxlIHByb2NlZHVyZQogICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbigiQ1RPUl9MSVNUIiwgIk9SREVSIiwgY29kZS5qb2luKCJcbiIpKTsKICAgIHJldHVybiBwcm9jZWR1cmUoQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV0sIG9yZGVyKQogIH0KCiAgZnVuY3Rpb24gYXJyYXlEVHlwZShkYXRhKSB7CiAgICBpZihpc0J1ZmZlcl8xKGRhdGEpKSB7CiAgICAgIHJldHVybiAiYnVmZmVyIgogICAgfQogICAgaWYoaGFzVHlwZWRBcnJheXMpIHsKICAgICAgc3dpdGNoKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSkgewogICAgICAgIGNhc2UgIltvYmplY3QgRmxvYXQ2NEFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImZsb2F0NjQiCiAgICAgICAgY2FzZSAiW29iamVjdCBGbG9hdDMyQXJyYXldIjoKICAgICAgICAgIHJldHVybiAiZmxvYXQzMiIKICAgICAgICBjYXNlICJbb2JqZWN0IEludDhBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJpbnQ4IgogICAgICAgIGNhc2UgIltvYmplY3QgSW50MTZBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJpbnQxNiIKICAgICAgICBjYXNlICJbb2JqZWN0IEludDMyQXJyYXldIjoKICAgICAgICAgIHJldHVybiAiaW50MzIiCiAgICAgICAgY2FzZSAiW29iamVjdCBVaW50OEFycmF5XSI6CiAgICAgICAgICByZXR1cm4gInVpbnQ4IgogICAgICAgIGNhc2UgIltvYmplY3QgVWludDE2QXJyYXldIjoKICAgICAgICAgIHJldHVybiAidWludDE2IgogICAgICAgIGNhc2UgIltvYmplY3QgVWludDMyQXJyYXldIjoKICAgICAgICAgIHJldHVybiAidWludDMyIgogICAgICAgIGNhc2UgIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldIjoKICAgICAgICAgIHJldHVybiAidWludDhfY2xhbXBlZCIKICAgICAgICBjYXNlICJbb2JqZWN0IEJpZ0ludDY0QXJyYXldIjoKICAgICAgICAgIHJldHVybiAiYmlnaW50NjQiCiAgICAgICAgY2FzZSAiW29iamVjdCBCaWdVaW50NjRBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJiaWd1aW50NjQiCiAgICAgIH0KICAgIH0KICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHsKICAgICAgcmV0dXJuICJhcnJheSIKICAgIH0KICAgIHJldHVybiAiZ2VuZXJpYyIKICB9CgogIHZhciBDQUNIRURfQ09OU1RSVUNUT1JTID0gewogICAgImZsb2F0MzIiOltdLAogICAgImZsb2F0NjQiOltdLAogICAgImludDgiOltdLAogICAgImludDE2IjpbXSwKICAgICJpbnQzMiI6W10sCiAgICAidWludDgiOltdLAogICAgInVpbnQxNiI6W10sCiAgICAidWludDMyIjpbXSwKICAgICJhcnJheSI6W10sCiAgICAidWludDhfY2xhbXBlZCI6W10sCiAgICAiYmlnaW50NjQiOiBbXSwKICAgICJiaWd1aW50NjQiOiBbXSwKICAgICJidWZmZXIiOltdLAogICAgImdlbmVyaWMiOltdCiAgfQoKICA7CiAgZnVuY3Rpb24gd3JhcHBlZE5EQXJyYXlDdG9yKGRhdGEsIHNoYXBlLCBzdHJpZGUsIG9mZnNldCkgewogICAgaWYoZGF0YSA9PT0gdW5kZWZpbmVkKSB7CiAgICAgIHZhciBjdG9yID0gQ0FDSEVEX0NPTlNUUlVDVE9SUy5hcnJheVswXTsKICAgICAgcmV0dXJuIGN0b3IoW10pCiAgICB9IGVsc2UgaWYodHlwZW9mIGRhdGEgPT09ICJudW1iZXIiKSB7CiAgICAgIGRhdGEgPSBbZGF0YV07CiAgICB9CiAgICBpZihzaGFwZSA9PT0gdW5kZWZpbmVkKSB7CiAgICAgIHNoYXBlID0gWyBkYXRhLmxlbmd0aCBdOwogICAgfQogICAgdmFyIGQgPSBzaGFwZS5sZW5ndGg7CiAgICBpZihzdHJpZGUgPT09IHVuZGVmaW5lZCkgewogICAgICBzdHJpZGUgPSBuZXcgQXJyYXkoZCk7CiAgICAgIGZvcih2YXIgaT1kLTEsIHN6PTE7IGk+PTA7IC0taSkgewogICAgICAgIHN0cmlkZVtpXSA9IHN6OwogICAgICAgIHN6ICo9IHNoYXBlW2ldOwogICAgICB9CiAgICB9CiAgICBpZihvZmZzZXQgPT09IHVuZGVmaW5lZCkgewogICAgICBvZmZzZXQgPSAwOwogICAgICBmb3IodmFyIGk9MDsgaTxkOyArK2kpIHsKICAgICAgICBpZihzdHJpZGVbaV0gPCAwKSB7CiAgICAgICAgICBvZmZzZXQgLT0gKHNoYXBlW2ldLTEpKnN0cmlkZVtpXTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIHZhciBkdHlwZSA9IGFycmF5RFR5cGUoZGF0YSk7CiAgICB2YXIgY3Rvcl9saXN0ID0gQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV07CiAgICB3aGlsZShjdG9yX2xpc3QubGVuZ3RoIDw9IGQrMSkgewogICAgICBjdG9yX2xpc3QucHVzaChjb21waWxlQ29uc3RydWN0b3IoZHR5cGUsIGN0b3JfbGlzdC5sZW5ndGgtMSkpOwogICAgfQogICAgdmFyIGN0b3IgPSBjdG9yX2xpc3RbZCsxXTsKICAgIHJldHVybiBjdG9yKGRhdGEsIHNoYXBlLCBzdHJpZGUsIG9mZnNldCkKICB9CgogIHZhciBuZGFycmF5ID0gd3JhcHBlZE5EQXJyYXlDdG9yOwoKICBjbGFzcyBNYXJ0aW5pIHsNCiAgICAgIGNvbnN0cnVjdG9yKGdyaWRTaXplID0gMjU3KSB7DQogICAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IGdyaWRTaXplOw0KICAgICAgICAgIGNvbnN0IHRpbGVTaXplID0gZ3JpZFNpemUgLSAxOw0KICAgICAgICAgIGlmICh0aWxlU2l6ZSAmICh0aWxlU2l6ZSAtIDEpKSB0aHJvdyBuZXcgRXJyb3IoDQogICAgICAgICAgICAgIGBFeHBlY3RlZCBncmlkIHNpemUgdG8gYmUgMl5uKzEsIGdvdCAke2dyaWRTaXplfS5gKTsNCg0KICAgICAgICAgIHRoaXMubnVtVHJpYW5nbGVzID0gdGlsZVNpemUgKiB0aWxlU2l6ZSAqIDIgLSAyOw0KICAgICAgICAgIHRoaXMubnVtUGFyZW50VHJpYW5nbGVzID0gdGhpcy5udW1UcmlhbmdsZXMgLSB0aWxlU2l6ZSAqIHRpbGVTaXplOw0KDQogICAgICAgICAgdGhpcy5pbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuZ3JpZFNpemUgKiB0aGlzLmdyaWRTaXplKTsNCg0KICAgICAgICAgIC8vIGNvb3JkaW5hdGVzIGZvciBhbGwgcG9zc2libGUgdHJpYW5nbGVzIGluIGFuIFJUSU4gdGlsZQ0KICAgICAgICAgIHRoaXMuY29vcmRzID0gbmV3IFVpbnQxNkFycmF5KHRoaXMubnVtVHJpYW5nbGVzICogNCk7DQoNCiAgICAgICAgICAvLyBnZXQgdHJpYW5nbGUgY29vcmRpbmF0ZXMgZnJvbSBpdHMgaW5kZXggaW4gYW4gaW1wbGljaXQgYmluYXJ5IHRyZWUNCiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHsNCiAgICAgICAgICAgICAgbGV0IGlkID0gaSArIDI7DQogICAgICAgICAgICAgIGxldCBheCA9IDAsIGF5ID0gMCwgYnggPSAwLCBieSA9IDAsIGN4ID0gMCwgY3kgPSAwOw0KICAgICAgICAgICAgICBpZiAoaWQgJiAxKSB7DQogICAgICAgICAgICAgICAgICBieCA9IGJ5ID0gY3ggPSB0aWxlU2l6ZTsgLy8gYm90dG9tLWxlZnQgdHJpYW5nbGUNCiAgICAgICAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgICAgICAgIGF4ID0gYXkgPSBjeSA9IHRpbGVTaXplOyAvLyB0b3AtcmlnaHQgdHJpYW5nbGUNCiAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICB3aGlsZSAoKGlkID4+PSAxKSA+IDEpIHsNCiAgICAgICAgICAgICAgICAgIGNvbnN0IG14ID0gKGF4ICsgYngpID4+IDE7DQogICAgICAgICAgICAgICAgICBjb25zdCBteSA9IChheSArIGJ5KSA+PiAxOw0KDQogICAgICAgICAgICAgICAgICBpZiAoaWQgJiAxKSB7IC8vIGxlZnQgaGFsZg0KICAgICAgICAgICAgICAgICAgICAgIGJ4ID0gYXg7IGJ5ID0gYXk7DQogICAgICAgICAgICAgICAgICAgICAgYXggPSBjeDsgYXkgPSBjeTsNCiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIHJpZ2h0IGhhbGYNCiAgICAgICAgICAgICAgICAgICAgICBheCA9IGJ4OyBheSA9IGJ5Ow0KICAgICAgICAgICAgICAgICAgICAgIGJ4ID0gY3g7IGJ5ID0gY3k7DQogICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICBjeCA9IG14OyBjeSA9IG15Ow0KICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgIGNvbnN0IGsgPSBpICogNDsNCiAgICAgICAgICAgICAgdGhpcy5jb29yZHNbayArIDBdID0gYXg7DQogICAgICAgICAgICAgIHRoaXMuY29vcmRzW2sgKyAxXSA9IGF5Ow0KICAgICAgICAgICAgICB0aGlzLmNvb3Jkc1trICsgMl0gPSBieDsNCiAgICAgICAgICAgICAgdGhpcy5jb29yZHNbayArIDNdID0gYnk7DQogICAgICAgICAgfQ0KICAgICAgfQ0KDQogICAgICBjcmVhdGVUaWxlKHRlcnJhaW4pIHsNCiAgICAgICAgICByZXR1cm4gbmV3IFRpbGUodGVycmFpbiwgdGhpcyk7DQogICAgICB9DQogIH0NCg0KICBjbGFzcyBUaWxlIHsNCiAgICAgIGNvbnN0cnVjdG9yKHRlcnJhaW4sIG1hcnRpbmkpIHsNCiAgICAgICAgICBjb25zdCBzaXplID0gbWFydGluaS5ncmlkU2l6ZTsNCiAgICAgICAgICBpZiAodGVycmFpbi5sZW5ndGggIT09IHNpemUgKiBzaXplKSB0aHJvdyBuZXcgRXJyb3IoDQogICAgICAgICAgICAgIGBFeHBlY3RlZCB0ZXJyYWluIGRhdGEgb2YgbGVuZ3RoICR7c2l6ZSAqIHNpemV9ICgke3NpemV9IHggJHtzaXplfSksIGdvdCAke3RlcnJhaW4ubGVuZ3RofS5gKTsNCg0KICAgICAgICAgIHRoaXMudGVycmFpbiA9IHRlcnJhaW47DQogICAgICAgICAgdGhpcy5tYXJ0aW5pID0gbWFydGluaTsNCiAgICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBGbG9hdDMyQXJyYXkodGVycmFpbi5sZW5ndGgpOw0KICAgICAgICAgIHRoaXMudXBkYXRlKCk7DQogICAgICB9DQoNCiAgICAgIHVwZGF0ZSgpIHsNCiAgICAgICAgICBjb25zdCB7bnVtVHJpYW5nbGVzLCBudW1QYXJlbnRUcmlhbmdsZXMsIGNvb3JkcywgZ3JpZFNpemU6IHNpemV9ID0gdGhpcy5tYXJ0aW5pOw0KICAgICAgICAgIGNvbnN0IHt0ZXJyYWluLCBlcnJvcnN9ID0gdGhpczsNCg0KICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgcG9zc2libGUgdHJpYW5nbGVzLCBzdGFydGluZyBmcm9tIHRoZSBzbWFsbGVzdCBsZXZlbA0KICAgICAgICAgIGZvciAobGV0IGkgPSBudW1UcmlhbmdsZXMgLSAxOyBpID49IDA7IGktLSkgew0KICAgICAgICAgICAgICBjb25zdCBrID0gaSAqIDQ7DQogICAgICAgICAgICAgIGNvbnN0IGF4ID0gY29vcmRzW2sgKyAwXTsNCiAgICAgICAgICAgICAgY29uc3QgYXkgPSBjb29yZHNbayArIDFdOw0KICAgICAgICAgICAgICBjb25zdCBieCA9IGNvb3Jkc1trICsgMl07DQogICAgICAgICAgICAgIGNvbnN0IGJ5ID0gY29vcmRzW2sgKyAzXTsNCiAgICAgICAgICAgICAgY29uc3QgbXggPSAoYXggKyBieCkgPj4gMTsNCiAgICAgICAgICAgICAgY29uc3QgbXkgPSAoYXkgKyBieSkgPj4gMTsNCiAgICAgICAgICAgICAgY29uc3QgY3ggPSBteCArIG15IC0gYXk7DQogICAgICAgICAgICAgIGNvbnN0IGN5ID0gbXkgKyBheCAtIG14Ow0KDQogICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBlcnJvciBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsb25nIGVkZ2Ugb2YgdGhlIHRyaWFuZ2xlDQogICAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEhlaWdodCA9ICh0ZXJyYWluW2F5ICogc2l6ZSArIGF4XSArIHRlcnJhaW5bYnkgKiBzaXplICsgYnhdKSAvIDI7DQogICAgICAgICAgICAgIGNvbnN0IG1pZGRsZUluZGV4ID0gbXkgKiBzaXplICsgbXg7DQogICAgICAgICAgICAgIGNvbnN0IG1pZGRsZUVycm9yID0gTWF0aC5hYnMoaW50ZXJwb2xhdGVkSGVpZ2h0IC0gdGVycmFpblttaWRkbGVJbmRleF0pOw0KDQogICAgICAgICAgICAgIGVycm9yc1ttaWRkbGVJbmRleF0gPSBNYXRoLm1heChlcnJvcnNbbWlkZGxlSW5kZXhdLCBtaWRkbGVFcnJvcik7DQoNCiAgICAgICAgICAgICAgaWYgKGkgPCBudW1QYXJlbnRUcmlhbmdsZXMpIHsgLy8gYmlnZ2VyIHRyaWFuZ2xlczsgYWNjdW11bGF0ZSBlcnJvciB3aXRoIGNoaWxkcmVuDQogICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q2hpbGRJbmRleCA9ICgoYXkgKyBjeSkgPj4gMSkgKiBzaXplICsgKChheCArIGN4KSA+PiAxKTsNCiAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2hpbGRJbmRleCA9ICgoYnkgKyBjeSkgPj4gMSkgKiBzaXplICsgKChieCArIGN4KSA+PiAxKTsNCiAgICAgICAgICAgICAgICAgIGVycm9yc1ttaWRkbGVJbmRleF0gPSBNYXRoLm1heChlcnJvcnNbbWlkZGxlSW5kZXhdLCBlcnJvcnNbbGVmdENoaWxkSW5kZXhdLCBlcnJvcnNbcmlnaHRDaGlsZEluZGV4XSk7DQogICAgICAgICAgICAgIH0NCiAgICAgICAgICB9DQogICAgICB9DQoNCiAgICAgIGdldE1lc2gobWF4RXJyb3IgPSAwLCBtYXhMZW5ndGggPSBudWxsKSB7DQogICAgICAgICAgY29uc3Qge2dyaWRTaXplOiBzaXplLCBpbmRpY2VzfSA9IHRoaXMubWFydGluaTsNCiAgICAgICAgICBjb25zdCB7ZXJyb3JzfSA9IHRoaXM7DQogICAgICAgICAgbGV0IG51bVZlcnRpY2VzID0gMDsNCiAgICAgICAgICBsZXQgbnVtVHJpYW5nbGVzID0gMDsNCiAgICAgICAgICBjb25zdCBtYXggPSBzaXplIC0gMTsNCg0KICAgICAgICAgIC8vIFRoZSBtYXhMZW5ndGggcGFyYW1ldGVyIHdpbGwgY2F1c2UgdHJpYW5nbGVzIHRvIGJlIGdlbmVyYXRlZCB1bnRpbCB0aGUgbGVncyBhcmUgYmVsb3cgdGhpcyBsZW5ndGgNCiAgICAgICAgICAvLyBJdCBpcyBtZWFudCB0byBzdXBwb3J0IGNhc2VzIHdoZXJlIGEgY2VydGFpbiBtZXNoIGRlbnNpdHkgaXMgcmVxdWlyZWQgdG8gZG8gc3BoZXJpY2FsIG1hdGggb24gZGlnaXRhbCBnbG9iZXMNCiAgICAgICAgICBjb25zdCBtYXhTY2FsZSA9IG1heExlbmd0aCB8fCBzaXplOw0KDQogICAgICAgICAgLy8gdXNlIGFuIGluZGV4IGdyaWQgdG8ga2VlcCB0cmFjayBvZiB2ZXJ0aWNlcyB0aGF0IHdlcmUgYWxyZWFkeSB1c2VkIHRvIGF2b2lkIGR1cGxpY2F0aW9uDQogICAgICAgICAgaW5kaWNlcy5maWxsKDApOw0KDQogICAgICAgICAgLy8gcmV0cmlldmUgbWVzaCBpbiB0d28gc3RhZ2VzIHRoYXQgYm90aCB0cmF2ZXJzZSB0aGUgZXJyb3IgbWFwOg0KICAgICAgICAgIC8vIC0gY291bnRFbGVtZW50czogZmluZCB1c2VkIHZlcnRpY2VzIChhbmQgYXNzaWduIGVhY2ggYW4gaW5kZXgpLCBhbmQgY291bnQgdHJpYW5nbGVzIChmb3IgbWluaW11bSBhbGxvY2F0aW9uKQ0KICAgICAgICAgIC8vIC0gcHJvY2Vzc1RyaWFuZ2xlOiBmaWxsIHRoZSBhbGxvY2F0ZWQgdmVydGljZXMgJiB0cmlhbmdsZXMgdHlwZWQgYXJyYXlzDQoNCiAgICAgICAgICBmdW5jdGlvbiBjb3VudEVsZW1lbnRzKGF4LCBheSwgYngsIGJ5LCBjeCwgY3kpIHsNCiAgICAgICAgICAgICAgY29uc3QgbXggPSAoYXggKyBieCkgPj4gMTsNCiAgICAgICAgICAgICAgY29uc3QgbXkgPSAoYXkgKyBieSkgPj4gMTsNCg0KICAgICAgICAgICAgICBjb25zdCBsZWdMZW5ndGggPSBNYXRoLmFicyhheCAtIGN4KSArIE1hdGguYWJzKGF5IC0gY3kpOw0KICAgICAgICAgICAgICBpZiAoKGxlZ0xlbmd0aCA+IDEgJiYgZXJyb3JzW215ICogc2l6ZSArIG14XSA+IG1heEVycm9yKSB8fCBsZWdMZW5ndGggPiBtYXhTY2FsZSkgew0KICAgICAgICAgICAgICAgICAgY291bnRFbGVtZW50cyhjeCwgY3ksIGF4LCBheSwgbXgsIG15KTsNCiAgICAgICAgICAgICAgICAgIGNvdW50RWxlbWVudHMoYngsIGJ5LCBjeCwgY3ksIG14LCBteSk7DQogICAgICAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICAgICAgICBpbmRpY2VzW2F5ICogc2l6ZSArIGF4XSA9IGluZGljZXNbYXkgKiBzaXplICsgYXhdIHx8ICsrbnVtVmVydGljZXM7DQogICAgICAgICAgICAgICAgICBpbmRpY2VzW2J5ICogc2l6ZSArIGJ4XSA9IGluZGljZXNbYnkgKiBzaXplICsgYnhdIHx8ICsrbnVtVmVydGljZXM7DQogICAgICAgICAgICAgICAgICBpbmRpY2VzW2N5ICogc2l6ZSArIGN4XSA9IGluZGljZXNbY3kgKiBzaXplICsgY3hdIHx8ICsrbnVtVmVydGljZXM7DQogICAgICAgICAgICAgICAgICBudW1UcmlhbmdsZXMrKzsNCiAgICAgICAgICAgICAgfQ0KICAgICAgICAgIH0NCiAgICAgICAgICBjb3VudEVsZW1lbnRzKDAsIDAsIG1heCwgbWF4LCBtYXgsIDApOw0KICAgICAgICAgIGNvdW50RWxlbWVudHMobWF4LCBtYXgsIDAsIDAsIDAsIG1heCk7DQoNCiAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBVaW50MTZBcnJheShudW1WZXJ0aWNlcyAqIDIpOw0KICAgICAgICAgIGNvbnN0IHRyaWFuZ2xlcyA9IG5ldyBVaW50MzJBcnJheShudW1UcmlhbmdsZXMgKiAzKTsNCiAgICAgICAgICBsZXQgdHJpSW5kZXggPSAwOw0KDQogICAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc1RyaWFuZ2xlKGF4LCBheSwgYngsIGJ5LCBjeCwgY3kpIHsNCiAgICAgICAgICAgICAgY29uc3QgbXggPSAoYXggKyBieCkgPj4gMTsNCiAgICAgICAgICAgICAgY29uc3QgbXkgPSAoYXkgKyBieSkgPj4gMTsNCg0KICAgICAgICAgICAgICBjb25zdCBsZWdMZW5ndGggPSBNYXRoLmFicyhheCAtIGN4KSArIE1hdGguYWJzKGF5IC0gY3kpOw0KICAgICAgICAgICAgICBpZiAoKGxlZ0xlbmd0aCA+IDEgJiYgZXJyb3JzW215ICogc2l6ZSArIG14XSA+IG1heEVycm9yKSB8fCBsZWdMZW5ndGggPiBtYXhTY2FsZSkgew0KICAgICAgICAgICAgICAgICAgLy8gdHJpYW5nbGUgZG9lc24ndCBhcHByb3hpbWF0ZSB0aGUgc3VyZmFjZSB3ZWxsIGVub3VnaDsgZHJpbGwgZG93biBmdXJ0aGVyDQogICAgICAgICAgICAgICAgICBwcm9jZXNzVHJpYW5nbGUoY3gsIGN5LCBheCwgYXksIG14LCBteSk7DQogICAgICAgICAgICAgICAgICBwcm9jZXNzVHJpYW5nbGUoYngsIGJ5LCBjeCwgY3ksIG14LCBteSk7DQoNCiAgICAgICAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgICAgICAgIC8vIGFkZCBhIHRyaWFuZ2xlDQogICAgICAgICAgICAgICAgICBjb25zdCBhID0gaW5kaWNlc1theSAqIHNpemUgKyBheF0gLSAxOw0KICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IGluZGljZXNbYnkgKiBzaXplICsgYnhdIC0gMTsNCiAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbmRpY2VzW2N5ICogc2l6ZSArIGN4XSAtIDE7DQoNCiAgICAgICAgICAgICAgICAgIHZlcnRpY2VzWzIgKiBhXSA9IGF4Ow0KICAgICAgICAgICAgICAgICAgdmVydGljZXNbMiAqIGEgKyAxXSA9IGF5Ow0KDQogICAgICAgICAgICAgICAgICB2ZXJ0aWNlc1syICogYl0gPSBieDsNCiAgICAgICAgICAgICAgICAgIHZlcnRpY2VzWzIgKiBiICsgMV0gPSBieTsNCg0KICAgICAgICAgICAgICAgICAgdmVydGljZXNbMiAqIGNdID0gY3g7DQogICAgICAgICAgICAgICAgICB2ZXJ0aWNlc1syICogYyArIDFdID0gY3k7DQoNCiAgICAgICAgICAgICAgICAgIHRyaWFuZ2xlc1t0cmlJbmRleCsrXSA9IGE7DQogICAgICAgICAgICAgICAgICB0cmlhbmdsZXNbdHJpSW5kZXgrK10gPSBiOw0KICAgICAgICAgICAgICAgICAgdHJpYW5nbGVzW3RyaUluZGV4KytdID0gYzsNCiAgICAgICAgICAgICAgfQ0KICAgICAgICAgIH0NCiAgICAgICAgICBwcm9jZXNzVHJpYW5nbGUoMCwgMCwgbWF4LCBtYXgsIG1heCwgMCk7DQogICAgICAgICAgcHJvY2Vzc1RyaWFuZ2xlKG1heCwgbWF4LCAwLCAwLCAwLCBtYXgpOw0KDQogICAgICAgICAgcmV0dXJuIHt2ZXJ0aWNlcywgdHJpYW5nbGVzfTsNCiAgICAgIH0NCiAgfQoKICBmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbikgewogICAgdmFyIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfTsKICAJcmV0dXJuIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0czsKICB9CgogIC8qKgogICAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLgogICAqCiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlCiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLgogICAqLwoKICBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7CiAgdmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHsKCiAgICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlOwogICAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5OwogICAgdmFyIHVuZGVmaW5lZCQxOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC4KICAgIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiA/IFN5bWJvbCA6IHt9OwogICAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCAiQEBpdGVyYXRvciI7CiAgICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCAiQEBhc3luY0l0ZXJhdG9yIjsKICAgIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgIkBAdG9TdHJpbmdUYWciOwoKICAgIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHsKICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7CiAgICAgICAgdmFsdWU6IHZhbHVlLAogICAgICAgIGVudW1lcmFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLAogICAgICAgIHdyaXRhYmxlOiB0cnVlCiAgICAgIH0pOwogICAgICByZXR1cm4gb2JqW2tleV07CiAgICB9CiAgICB0cnkgewogICAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLgogICAgICBkZWZpbmUoe30sICIiKTsKICAgIH0gY2F0Y2ggKGVycikgewogICAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHsKICAgICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTsKICAgICAgfTsKICAgIH0KCiAgICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7CiAgICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLgogICAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjsKICAgICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTsKICAgICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7CgogICAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsCiAgICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy4KICAgICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpOwoKICAgICAgcmV0dXJuIGdlbmVyYXRvcjsKICAgIH0KICAgIGV4cG9ydHMud3JhcCA9IHdyYXA7CgogICAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uCiAgICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGQKICAgIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZQogICAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZQogICAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZAogICAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZwogICAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWUKICAgIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZQogICAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaAogICAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLgogICAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7CiAgICAgIHRyeSB7CiAgICAgICAgcmV0dXJuIHsgdHlwZTogIm5vcm1hbCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTsKICAgICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgICAgcmV0dXJuIHsgdHlwZTogInRocm93IiwgYXJnOiBlcnIgfTsKICAgICAgfQogICAgfQoKICAgIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gInN1c3BlbmRlZFN0YXJ0IjsKICAgIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gInN1c3BlbmRlZFlpZWxkIjsKICAgIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9ICJleGVjdXRpbmciOwogICAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gImNvbXBsZXRlZCI7CgogICAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhcwogICAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LgogICAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTsKCiAgICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmQKICAgIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvcgogICAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXIKICAgIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuCiAgICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fQogICAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fQogICAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fQoKICAgIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXQKICAgIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuCiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTsKICAgIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9KTsKCiAgICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7CiAgICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7CiAgICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYKICAgICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYKICAgICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7CiAgICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkCiAgICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC4KICAgICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTsKICAgIH0KCiAgICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPQogICAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7CiAgICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTsKICAgIGRlZmluZShHcCwgImNvbnN0cnVjdG9yIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpOwogICAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCAiY29uc3RydWN0b3IiLCBHZW5lcmF0b3JGdW5jdGlvbik7CiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZSgKICAgICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsCiAgICAgIHRvU3RyaW5nVGFnU3ltYm9sLAogICAgICAiR2VuZXJhdG9yRnVuY3Rpb24iCiAgICApOwoKICAgIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlCiAgICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLgogICAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkgewogICAgICBbIm5leHQiLCAidGhyb3ciLCAicmV0dXJuIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHsKICAgICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykgewogICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7CiAgICAgICAgfSk7CiAgICAgIH0pOwogICAgfQoKICAgIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikgewogICAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09ICJmdW5jdGlvbiIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yOwogICAgICByZXR1cm4gY3RvcgogICAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwKICAgICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW4KICAgICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS4KICAgICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09ICJHZW5lcmF0b3JGdW5jdGlvbiIKICAgICAgICA6IGZhbHNlOwogICAgfTsKCiAgICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHsKICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikgewogICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTsKICAgICAgfSBlbHNlIHsKICAgICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7CiAgICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsICJHZW5lcmF0b3JGdW5jdGlvbiIpOwogICAgICB9CiAgICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTsKICAgICAgcmV0dXJuIGdlbkZ1bjsKICAgIH07CgogICAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvCiAgICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdAogICAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCAiX19hd2FpdCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXMKICAgIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuCiAgICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7CiAgICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9OwogICAgfTsKCiAgICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHsKICAgICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHsKICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTsKICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7CiAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7CiAgICAgICAgICBpZiAodmFsdWUgJiYKICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICJvYmplY3QiICYmCiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsICJfX2F3YWl0IikpIHsKICAgICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkgewogICAgICAgICAgICAgIGludm9rZSgibmV4dCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHsKICAgICAgICAgICAgICBpbnZva2UoInRocm93IiwgZXJyLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgICB9KTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHsKICAgICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXMKICAgICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlCiAgICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLgogICAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7CiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTsKICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7CiAgICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrCiAgICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS4KICAgICAgICAgICAgcmV0dXJuIGludm9rZSgidGhyb3ciLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdmFyIHByZXZpb3VzUHJvbWlzZTsKCiAgICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHsKICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHsKICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9CiAgICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsCiAgICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSwKICAgICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWYKICAgICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvCiAgICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSwKICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvCiAgICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5CiAgICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0cwogICAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHkKICAgICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlCiAgICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseQogICAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLgogICAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oCiAgICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLAogICAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlcgogICAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuCiAgICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnCiAgICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTsKICAgICAgfQoKICAgICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCwKICAgICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuCiAgICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7CiAgICB9CgogICAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTsKICAgIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgewogICAgICByZXR1cm4gdGhpczsKICAgIH0pOwogICAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjsKCiAgICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mCiAgICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2YKICAgIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLgogICAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkgewogICAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlOwoKICAgICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcigKICAgICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwKICAgICAgICBQcm9taXNlSW1wbAogICAgICApOwoKICAgICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKQogICAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuCiAgICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkgewogICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTsKICAgICAgICAgIH0pOwogICAgfTsKCiAgICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHsKICAgICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDsKCiAgICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHsKICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7CiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmciKTsKICAgICAgICB9CgogICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHsKICAgICAgICAgIGlmIChtZXRob2QgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgICAgdGhyb3cgYXJnOwogICAgICAgICAgfQoKICAgICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6CiAgICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lCiAgICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpOwogICAgICAgIH0KCiAgICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7CiAgICAgICAgY29udGV4dC5hcmcgPSBhcmc7CgogICAgICAgIHdoaWxlICh0cnVlKSB7CiAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlOwogICAgICAgICAgaWYgKGRlbGVnYXRlKSB7CiAgICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpOwogICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHsKICAgICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlOwogICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDsKICAgICAgICAgICAgfQogICAgICAgICAgfQoKICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gIm5leHQiKSB7CiAgICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwncwogICAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLgogICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7CgogICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gInRocm93IikgewogICAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHsKICAgICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkOwogICAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnOwogICAgICAgICAgICB9CgogICAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTsKCiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSAicmV0dXJuIikgewogICAgICAgICAgICBjb250ZXh0LmFicnVwdCgicmV0dXJuIiwgY29udGV4dC5hcmcpOwogICAgICAgICAgfQoKICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7CgogICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpOwogICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAibm9ybWFsIikgewogICAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09CiAgICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi4KICAgICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmUKICAgICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkCiAgICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkOwoKICAgICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHsKICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgcmV0dXJuIHsKICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZywKICAgICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmUKICAgICAgICAgICAgfTsKCiAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAidGhyb3ciKSB7CiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7CiAgICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGUKICAgICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS4KICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSAidGhyb3ciOwogICAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9OwogICAgfQoKICAgIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZQogICAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZQogICAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsCiAgICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC4KICAgIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHsKICAgICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTsKICAgICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkJDEpIHsKICAgICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3cKICAgICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLgogICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsOwoKICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgIC8vIE5vdGU6IFsicmV0dXJuIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LgogICAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yWyJyZXR1cm4iXSkgewogICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhCiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC4KICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSAicmV0dXJuIjsKICAgICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTsKICAgICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7CgogICAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbQogICAgICAgICAgICAgIC8vICJyZXR1cm4iIHRvICJ0aHJvdyIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuCiAgICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KCiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyI7CiAgICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kIik7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgfQoKICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTsKCiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgIGNvbnRleHQubWV0aG9kID0gInRocm93IjsKICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7CiAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7CiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgIH0KCiAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZzsKCiAgICAgIGlmICghIGluZm8pIHsKICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyI7CiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdCIpOwogICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsOwogICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICB9CgogICAgICBpZiAoaW5mby5kb25lKSB7CiAgICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnkKICAgICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLgogICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlOwoKICAgICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuCiAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYzsKCiAgICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzICJ0aHJvdyIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZQogICAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWYKICAgICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgIm5leHQiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW4KICAgICAgICAvLyAiY29uc3VtZWQiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzCiAgICAgICAgLy8gInJldHVybiIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlCiAgICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLgogICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gInJldHVybiIpIHsKICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gIm5leHQiOwogICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTsKICAgICAgICB9CgogICAgICB9IGVsc2UgewogICAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC4KICAgICAgICByZXR1cm4gaW5mbzsKICAgICAgfQoKICAgICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGgKICAgICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci4KICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7CiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgfQoKICAgIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlCiAgICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuCiAgICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApOwoKICAgIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsICJHZW5lcmF0b3IiKTsKCiAgICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZQogICAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGUKICAgIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yCiAgICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi4KICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLgogICAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSk7CgogICAgZGVmaW5lKEdwLCAidG9TdHJpbmciLCBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICJbb2JqZWN0IEdlbmVyYXRvcl0iOwogICAgfSk7CgogICAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHsKICAgICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTsKCiAgICAgIGlmICgxIGluIGxvY3MpIHsKICAgICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07CiAgICAgIH0KCiAgICAgIGlmICgyIGluIGxvY3MpIHsKICAgICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTsKICAgICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107CiAgICAgIH0KCiAgICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTsKICAgIH0KCiAgICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7CiAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9OwogICAgICByZWNvcmQudHlwZSA9ICJub3JtYWwiOwogICAgICBkZWxldGUgcmVjb3JkLmFyZzsKICAgICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDsKICAgIH0KCiAgICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7CiAgICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaAogICAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tCiAgICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC4KICAgICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiAicm9vdCIgfV07CiAgICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTsKICAgICAgdGhpcy5yZXNldCh0cnVlKTsKICAgIH0KCiAgICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHsKICAgICAgdmFyIGtleXMgPSBbXTsKICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkgewogICAgICAgIGtleXMucHVzaChrZXkpOwogICAgICB9CiAgICAgIGtleXMucmV2ZXJzZSgpOwoKICAgICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXAKICAgICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi4KICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7CiAgICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7CiAgICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTsKICAgICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7CiAgICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7CiAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlOwogICAgICAgICAgICByZXR1cm4gbmV4dDsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZQogICAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzCiAgICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uCiAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTsKICAgICAgICByZXR1cm4gbmV4dDsKICAgICAgfTsKICAgIH07CgogICAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7CiAgICAgIGlmIChpdGVyYWJsZSkgewogICAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTsKICAgICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHsKICAgICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTsKICAgICAgICB9CgogICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gImZ1bmN0aW9uIikgewogICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlOwogICAgICAgIH0KCiAgICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7CiAgICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHsKICAgICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkgewogICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHsKICAgICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTsKICAgICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlOwogICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CgogICAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkJDE7CiAgICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7CgogICAgICAgICAgICByZXR1cm4gbmV4dDsKICAgICAgICAgIH07CgogICAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7CiAgICAgICAgfQogICAgICB9CgogICAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuCiAgICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTsKICAgIH0KICAgIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzOwoKICAgIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7CiAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQkMSwgZG9uZTogdHJ1ZSB9OwogICAgfQoKICAgIENvbnRleHQucHJvdG90eXBlID0gewogICAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCwKCiAgICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7CiAgICAgICAgdGhpcy5wcmV2ID0gMDsKICAgICAgICB0aGlzLm5leHQgPSAwOwogICAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzCiAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi4KICAgICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkJDE7CiAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7CiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7CgogICAgICAgIHRoaXMubWV0aG9kID0gIm5leHQiOwogICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkJDE7CgogICAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpOwoKICAgICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHsKICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykgewogICAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOgogICAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09ICJ0IiAmJgogICAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYKICAgICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHsKICAgICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkJDE7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0sCgogICAgICBzdG9wOiBmdW5jdGlvbigpIHsKICAgICAgICB0aGlzLmRvbmUgPSB0cnVlOwoKICAgICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdOwogICAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247CiAgICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy5ydmFsOwogICAgICB9LAoKICAgICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikgewogICAgICAgIGlmICh0aGlzLmRvbmUpIHsKICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjsKICAgICAgICB9CgogICAgICAgIHZhciBjb250ZXh0ID0gdGhpczsKICAgICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHsKICAgICAgICAgIHJlY29yZC50eXBlID0gInRocm93IjsKICAgICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247CiAgICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7CgogICAgICAgICAgaWYgKGNhdWdodCkgewogICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLAogICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LgogICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJuZXh0IjsKICAgICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXR1cm4gISEgY2F1Z2h0OwogICAgICAgIH0KCiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247CgogICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gInJvb3QiKSB7CiAgICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlCiAgICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0bwogICAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLgogICAgICAgICAgICByZXR1cm4gaGFuZGxlKCJlbmQiKTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikgewogICAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgImNhdGNoTG9jIik7CiAgICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksICJmaW5hbGx5TG9jIik7CgogICAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkgewogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgewogICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7CiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHsKICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHsKICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkgewogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseSIpOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9LAoKICAgICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHsKICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7CiAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07CiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJgogICAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCAiZmluYWxseUxvYyIpICYmCiAgICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgewogICAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJgogICAgICAgICAgICAodHlwZSA9PT0gImJyZWFrIiB8fAogICAgICAgICAgICAgdHlwZSA9PT0gImNvbnRpbnVlIikgJiYKICAgICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYKICAgICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7CiAgICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhCiAgICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suCiAgICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsOwogICAgICAgIH0KCiAgICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307CiAgICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlOwogICAgICAgIHJlY29yZC5hcmcgPSBhcmc7CgogICAgICAgIGlmIChmaW5hbGx5RW50cnkpIHsKICAgICAgICAgIHRoaXMubWV0aG9kID0gIm5leHQiOwogICAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7CiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgICB9CgogICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7CiAgICAgIH0sCgogICAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykgewogICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgICAgdGhyb3cgcmVjb3JkLmFyZzsKICAgICAgICB9CgogICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gImJyZWFrIiB8fAogICAgICAgICAgICByZWNvcmQudHlwZSA9PT0gImNvbnRpbnVlIikgewogICAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZzsKICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAicmV0dXJuIikgewogICAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnOwogICAgICAgICAgdGhpcy5tZXRob2QgPSAicmV0dXJuIjsKICAgICAgICAgIHRoaXMubmV4dCA9ICJlbmQiOwogICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICJub3JtYWwiICYmIGFmdGVyTG9jKSB7CiAgICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYzsKICAgICAgICB9CgogICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICB9LAoKICAgICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHsKICAgICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7CiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpOwogICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0sCgogICAgICAiY2F0Y2giOiBmdW5jdGlvbih0cnlMb2MpIHsKICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7CiAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07CiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHsKICAgICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247CiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnOwogICAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB0aHJvd247CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb24KICAgICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suCiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHQiKTsKICAgICAgfSwKCiAgICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7CiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHsKICAgICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLAogICAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSwKICAgICAgICAgIG5leHRMb2M6IG5leHRMb2MKICAgICAgICB9OwoKICAgICAgICBpZiAodGhpcy5tZXRob2QgPT09ICJuZXh0IikgewogICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3QKICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS4KICAgICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkJDE7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgfQogICAgfTsKCiAgICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlCiAgICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGUKICAgIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZQogICAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC4KICAgIHJldHVybiBleHBvcnRzOwoKICB9KAogICAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHMKICAgIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5CiAgICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplCiAgICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLgogICAgbW9kdWxlLmV4cG9ydHMgCiAgKSk7CgogIHRyeSB7CiAgICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lOwogIH0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7CiAgICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZQogICAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0CiAgICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzCiAgICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlCiAgICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWwKICAgIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZQogICAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWYKICAgIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhCiAgICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2UKICAgIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLgogICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAib2JqZWN0IikgewogICAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7CiAgICB9IGVsc2UgewogICAgICBGdW5jdGlvbigiciIsICJyZWdlbmVyYXRvclJ1bnRpbWUgPSByIikocnVudGltZSk7CiAgICB9CiAgfQogIH0pOwoKICB2YXIgbWFydGluaSA9IG51bGw7CgogIGZ1bmN0aW9uIGRlY29kZVRlcnJhaW4ocGFyYW1ldGVycywgdHJhbnNmZXJhYmxlT2JqZWN0cykgewogICAgdmFyIF9tYXJ0aW5pOwoKICAgIHZhciBpbWFnZURhdGEgPSBwYXJhbWV0ZXJzLmltYWdlRGF0YSwKICAgICAgICBfcGFyYW1ldGVycyR0aWxlU2l6ZSA9IHBhcmFtZXRlcnMudGlsZVNpemUsCiAgICAgICAgdGlsZVNpemUgPSBfcGFyYW1ldGVycyR0aWxlU2l6ZSA9PT0gdm9pZCAwID8gMjU2IDogX3BhcmFtZXRlcnMkdGlsZVNpemUsCiAgICAgICAgZXJyb3JMZXZlbCA9IHBhcmFtZXRlcnMuZXJyb3JMZXZlbDsKICAgIHZhciBwaXhlbHMgPSBuZGFycmF5KG5ldyBVaW50OEFycmF5KGltYWdlRGF0YSksIFt0aWxlU2l6ZSwgdGlsZVNpemUsIDRdLCBbNCwgNCAqIHRpbGVTaXplLCAxXSwgMCk7IC8vIFRpbGUgc2l6ZSBtdXN0IGJlIG1haW50YWluZWQgdGhyb3VnaCB0aGUgbGlmZSBvZiB0aGUgd29ya2VyCgogICAgKF9tYXJ0aW5pID0gbWFydGluaSkgIT09IG51bGwgJiYgX21hcnRpbmkgIT09IHZvaWQgMCA/IF9tYXJ0aW5pIDogbWFydGluaSA9IG5ldyBNYXJ0aW5pKHRpbGVTaXplICsgMSk7CiAgICB2YXIgdGVycmFpbiA9IHJnYlRlcnJhaW5Ub0dyaWQocGl4ZWxzKTsKICAgIHZhciB0aWxlID0gbWFydGluaS5jcmVhdGVUaWxlKHRlcnJhaW4pOyAvLyBnZXQgYSBtZXNoICh2ZXJ0aWNlcyBhbmQgdHJpYW5nbGVzIGluZGljZXMpIGZvciBhIDEwbSBlcnJvcgoKICAgIHZhciBtZXNoID0gdGlsZS5nZXRNZXNoKGVycm9yTGV2ZWwsIHBhcmFtZXRlcnMubWF4TGVuZ3RoKTsKICAgIHJldHVybiBjcmVhdGVRdWFudGl6ZWRNZXNoRGF0YSh0aWxlLCBtZXNoLCB0aWxlU2l6ZSk7CiAgfQoKICBzZWxmLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtc2cpIHsKICAgIHZhciBfbXNnJGRhdGEgPSBtc2cuZGF0YSwKICAgICAgICBpZCA9IF9tc2ckZGF0YS5pZCwKICAgICAgICBwYXlsb2FkID0gX21zZyRkYXRhLnBheWxvYWQ7CiAgICBpZiAoaWQgPT0gbnVsbCkgcmV0dXJuOwogICAgdmFyIG9iamVjdHMgPSBbXTsKICAgIHZhciByZXMgPSBudWxsOwoKICAgIHRyeSB7CiAgICAgIHJlcyA9IGRlY29kZVRlcnJhaW4ocGF5bG9hZCk7CiAgICAgIG9iamVjdHMucHVzaChyZXMuaW5kaWNlcy5idWZmZXIpOwogICAgICBvYmplY3RzLnB1c2gocmVzLnF1YW50aXplZFZlcnRpY2VzLmJ1ZmZlcik7CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgIGlkOiBpZCwKICAgICAgICBwYXlsb2FkOiByZXMKICAgICAgfSwgb2JqZWN0cyk7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQ6IGlkLAogICAgICAgIGVycjogZXJyLnRvU3RyaW5nKCkKICAgICAgfSk7CiAgICB9IGZpbmFsbHkgewogICAgICByZXMgPSBudWxsOwogICAgICBvYmplY3RzID0gbnVsbDsKICAgIH0KICB9OwoKfSkoKTsKCg==', null, false);
/* eslint-enable */

var MapboxTerrainProvider = /*#__PURE__*/function (_MartiniTerrainProvid) {
  _inherits(MapboxTerrainProvider, _MartiniTerrainProvid);

  var _super = _createSuper(MapboxTerrainProvider);

  function MapboxTerrainProvider() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MapboxTerrainProvider);

    var resource = new MapboxTerrainResource(opts);
    var decoder = new WorkerFarmTerrainDecoder({
      worker: new WorkerFactory()
    });
    return _super.call(this, _objectSpread2(_objectSpread2({}, opts), {}, {
      resource: resource,
      decoder: decoder
    }));
  }

  return MapboxTerrainProvider;
}(MartiniTerrainProvider);

module.exports = MapboxTerrainProvider;
//# sourceMappingURL=index.js.map
