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
                url = _this.buildTileURL(coords, _this.resource);
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
      var _this2 = this;

      var canvasRef = this.getCanvas();
      var context = canvasRef.context;
      var imgs;

      if (Array.isArray(img)) {
        imgs = img;
      } else {
        imgs = [img];
      } //context.scale(1, -1);
      // Chrome appears to vertically flip the image for reasons that are unclear
      // We can make it work in Chrome by drawing the image upside-down at this step.


      imgs.forEach(function (img) {
        return context.drawImage(img, 0, 0, _this2.tileSize, _this2.tileSize);
      });
      var pixels = context.getImageData(0, 0, this.tileSize, this.tileSize);
      context.clearRect(0, 0, this.tileSize, this.tileSize);
      this.contextQueue.push(canvasRef);
      return pixels;
    }
  }, {
    key: "buildTileURL",
    value: function buildTileURL(tileCoords, resource) {
      // reverseY for TMS tiling (https://gist.github.com/tmcw/4954720)
      // See tiling schemes here: https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/
      var z = tileCoords.z,
          y = tileCoords.y;
      return resource === null || resource === void 0 ? void 0 : resource.getDerivedResource({
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

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgewogICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsKICB9CgogIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsKICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOwogIH0KCiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7CiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gInVuZGVmaW5lZCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlclsiQEBpdGVyYXRvciJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOwogIH0KCiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgewogICAgaWYgKCFvKSByZXR1cm47CiAgICBpZiAodHlwZW9mIG8gPT09ICJzdHJpbmciKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsKICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsKICAgIGlmIChuID09PSAiT2JqZWN0IiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOwogICAgaWYgKG4gPT09ICJNYXAiIHx8IG4gPT09ICJTZXQiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsKICAgIGlmIChuID09PSAiQXJndW1lbnRzIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7CiAgfQoKICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgewogICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7CgogICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOwoKICAgIHJldHVybiBhcnIyOwogIH0KCiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgewogICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuIik7CiAgfQoKICAvLyBXZSBzaG91bGQgc2F2ZSB0aGVzZQogIC8vY29uc3QgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcygyNTYsIDI1Nik7CiAgLy9jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgiMmQiKTsKCiAgLyoqIE1hcGJveCBUZXJyYWluLVJHQiBkZWZhdWx0IGRlY29kZSBmdW5jdGlvbgogICogIChyICogMjU2ICogMjU2KSAvIDEwICsgKGcgKiAyNTYpIC8gMTAgKyBiIC8gMTAgLSAxMDAwMAogICovCiAgdmFyIGRlZmF1bHRNYXBib3hEZWNvZGVSZ2IgPSBmdW5jdGlvbiBkZWZhdWx0TWFwYm94RGVjb2RlUmdiKHIsIGcsIGIsIGEpIHsKICAgIHJldHVybiByICogNjU1My42ICsgZyAqIDI1LjYgKyBiICogMC4xIC0gMTAwMDA7CiAgfTsKCiAgZnVuY3Rpb24gcmdiVGVycmFpblRvR3JpZChwbmcsIGRlY29kZVJnYikgewogICAgLy8gbWF5YmUgd2Ugc2hvdWxkIGRvIHRoaXMgb24gdGhlIEdQVSB1c2luZyBSRUdMPwogICAgLy8gYnV0IHRoYXQgd291bGQgcmVxdWlyZSBHUFUgLT4gQ1BVIC0+IEdQVQogICAgdmFyIGdyaWRTaXplID0gcG5nLnNoYXBlWzBdICsgMTsKICAgIHZhciB0ZXJyYWluID0gbmV3IEZsb2F0MzJBcnJheShncmlkU2l6ZSAqIGdyaWRTaXplKTsKICAgIHZhciB0aWxlU2l6ZSA9IHBuZy5zaGFwZVswXTsKICAgIHZhciBkZWNvZGUgPSBkZWNvZGVSZ2IgIT09IG51bGwgJiYgZGVjb2RlUmdiICE9PSB2b2lkIDAgPyBkZWNvZGVSZ2IgOiBkZWZhdWx0TWFwYm94RGVjb2RlUmdiOyAvLyBkZWNvZGUgdGVycmFpbiB2YWx1ZXMKCiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRpbGVTaXplOyB5KyspIHsKICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aWxlU2l6ZTsgeCsrKSB7CiAgICAgICAgdmFyIHljID0geTsKCiAgICAgICAgdmFyIF9yID0gcG5nLmdldCh4LCB5YywgMCk7CgogICAgICAgIHZhciBfZyA9IHBuZy5nZXQoeCwgeWMsIDEpOwoKICAgICAgICB2YXIgX2IgPSBwbmcuZ2V0KHgsIHljLCAyKTsKCiAgICAgICAgdmFyIF9hID0gcG5nLmdldCh4LCB5YywgMyk7CgogICAgICAgIHRlcnJhaW5beSAqIGdyaWRTaXplICsgeF0gPSBkZWNvZGUoX3IsIF9nLCBfYiwgX2EpOwogICAgICB9CiAgICB9IC8vIGJhY2tmaWxsIHJpZ2h0IGFuZCBib3R0b20gYm9yZGVycwoKCiAgICBmb3IgKHZhciBfeCA9IDA7IF94IDwgZ3JpZFNpemUgLSAxOyBfeCsrKSB7CiAgICAgIHRlcnJhaW5bZ3JpZFNpemUgKiAoZ3JpZFNpemUgLSAxKSArIF94XSA9IHRlcnJhaW5bZ3JpZFNpemUgKiAoZ3JpZFNpemUgLSAyKSArIF94XTsKICAgIH0KCiAgICBmb3IgKHZhciBfeSA9IDA7IF95IDwgZ3JpZFNpemU7IF95KyspIHsKICAgICAgdGVycmFpbltncmlkU2l6ZSAqIF95ICsgZ3JpZFNpemUgLSAxXSA9IHRlcnJhaW5bZ3JpZFNpemUgKiBfeSArIGdyaWRTaXplIC0gMl07CiAgICB9CgogICAgcmV0dXJuIHRlcnJhaW47CiAgfQoKICBmdW5jdGlvbiBjcmVhdGVRdWFudGl6ZWRNZXNoRGF0YSh0aWxlLCBtZXNoLCB0aWxlU2l6ZSkgewogICAgdmFyIHh2YWxzID0gW107CiAgICB2YXIgeXZhbHMgPSBbXTsKICAgIHZhciBoZWlnaHRNZXRlcnMgPSBbXTsKICAgIHZhciBub3J0aEluZGljZXMgPSBbXTsKICAgIHZhciBzb3V0aEluZGljZXMgPSBbXTsKICAgIHZhciBlYXN0SW5kaWNlcyA9IFtdOwogICAgdmFyIHdlc3RJbmRpY2VzID0gW107CiAgICB2YXIgbWluaW11bUhlaWdodCA9IEluZmluaXR5OwogICAgdmFyIG1heGltdW1IZWlnaHQgPSAtSW5maW5pdHk7CiAgICB2YXIgc2NhbGFyID0gMzI3NjguMCAvIHRpbGVTaXplOwoKICAgIGZvciAodmFyIGl4ID0gMDsgaXggPCBtZXNoLnZlcnRpY2VzLmxlbmd0aCAvIDI7IGl4KyspIHsKICAgICAgdmFyIHZlcnRleEl4ID0gaXg7CiAgICAgIHZhciBweCA9IG1lc2gudmVydGljZXNbaXggKiAyXTsKICAgICAgdmFyIHB5ID0gbWVzaC52ZXJ0aWNlc1tpeCAqIDIgKyAxXTsKICAgICAgdmFyIGhlaWdodCA9IHRpbGUudGVycmFpbltweSAqICh0aWxlU2l6ZSArIDEpICsgcHhdOwogICAgICBpZiAoaGVpZ2h0ID4gbWF4aW11bUhlaWdodCkgbWF4aW11bUhlaWdodCA9IGhlaWdodDsKICAgICAgaWYgKGhlaWdodCA8IG1pbmltdW1IZWlnaHQpIG1pbmltdW1IZWlnaHQgPSBoZWlnaHQ7CiAgICAgIGhlaWdodE1ldGVycy5wdXNoKGhlaWdodCk7CiAgICAgIGlmIChweSA9PSAwKSBub3J0aEluZGljZXMucHVzaCh2ZXJ0ZXhJeCk7CiAgICAgIGlmIChweSA9PSB0aWxlU2l6ZSkgc291dGhJbmRpY2VzLnB1c2godmVydGV4SXgpOwogICAgICBpZiAocHggPT0gMCkgd2VzdEluZGljZXMucHVzaCh2ZXJ0ZXhJeCk7CiAgICAgIGlmIChweCA9PSB0aWxlU2l6ZSkgZWFzdEluZGljZXMucHVzaCh2ZXJ0ZXhJeCk7CiAgICAgIHZhciB4diA9IHB4ICogc2NhbGFyOwogICAgICB2YXIgeXYgPSAodGlsZVNpemUgLSBweSkgKiBzY2FsYXI7CiAgICAgIHh2YWxzLnB1c2goeHYpOwogICAgICB5dmFscy5wdXNoKHl2KTsKICAgIH0KCiAgICB2YXIgaGVpZ2h0UmFuZ2UgPSBtYXhpbXVtSGVpZ2h0IC0gbWluaW11bUhlaWdodDsKICAgIHZhciBoZWlnaHRzID0gaGVpZ2h0TWV0ZXJzLm1hcChmdW5jdGlvbiAoZCkgewogICAgICBpZiAoaGVpZ2h0UmFuZ2UgPCAxKSByZXR1cm4gMDsKICAgICAgcmV0dXJuIChkIC0gbWluaW11bUhlaWdodCkgKiAoMzI3NjcuMCAvIGhlaWdodFJhbmdlKTsKICAgIH0pOwogICAgdmFyIHRyaWFuZ2xlcyA9IG5ldyBVaW50MTZBcnJheShtZXNoLnRyaWFuZ2xlcyk7CiAgICB2YXIgcXVhbnRpemVkVmVydGljZXMgPSBuZXcgVWludDE2QXJyYXkoIC8vdmVydHMKICAgIFtdLmNvbmNhdCh4dmFscywgeXZhbHMsIF90b0NvbnN1bWFibGVBcnJheShoZWlnaHRzKSkpOyAvLyBTRSBOVyBORQogICAgLy8gTkUgTlcgU0UKCiAgICByZXR1cm4gewogICAgICBtaW5pbXVtSGVpZ2h0OiBtaW5pbXVtSGVpZ2h0LAogICAgICBtYXhpbXVtSGVpZ2h0OiBtYXhpbXVtSGVpZ2h0LAogICAgICBxdWFudGl6ZWRWZXJ0aWNlczogcXVhbnRpemVkVmVydGljZXMsCiAgICAgIGluZGljZXM6IHRyaWFuZ2xlcywKICAgICAgd2VzdEluZGljZXM6IHdlc3RJbmRpY2VzLAogICAgICBzb3V0aEluZGljZXM6IHNvdXRoSW5kaWNlcywKICAgICAgZWFzdEluZGljZXM6IGVhc3RJbmRpY2VzLAogICAgICBub3J0aEluZGljZXM6IG5vcnRoSW5kaWNlcwogICAgfTsKICB9CgogIGZ1bmN0aW9uIGlvdGEobikgewogICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShuKTsKICAgIGZvcih2YXIgaT0wOyBpPG47ICsraSkgewogICAgICByZXN1bHRbaV0gPSBpOwogICAgfQogICAgcmV0dXJuIHJlc3VsdAogIH0KCiAgdmFyIGlvdGFfMSA9IGlvdGE7CgogIC8qIQogICAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXIKICAgKgogICAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+CiAgICogQGxpY2Vuc2UgIE1JVAogICAqLwogIC8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3NpbmcKICAvLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5CiAgdmFyIGlzQnVmZmVyXzEgPSBmdW5jdGlvbiAob2JqKSB7CiAgICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKQogIH07CgogIGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHsKICAgIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopCiAgfQoKICAvLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LgogIGZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7CiAgICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSkKICB9CgogIHZhciBoYXNUeXBlZEFycmF5cyAgPSAoKHR5cGVvZiBGbG9hdDY0QXJyYXkpICE9PSAidW5kZWZpbmVkIik7CgogIGZ1bmN0aW9uIGNvbXBhcmUxc3QoYSwgYikgewogICAgcmV0dXJuIGFbMF0gLSBiWzBdCiAgfQoKICBmdW5jdGlvbiBvcmRlcigpIHsKICAgIHZhciBzdHJpZGUgPSB0aGlzLnN0cmlkZTsKICAgIHZhciB0ZXJtcyA9IG5ldyBBcnJheShzdHJpZGUubGVuZ3RoKTsKICAgIHZhciBpOwogICAgZm9yKGk9MDsgaTx0ZXJtcy5sZW5ndGg7ICsraSkgewogICAgICB0ZXJtc1tpXSA9IFtNYXRoLmFicyhzdHJpZGVbaV0pLCBpXTsKICAgIH0KICAgIHRlcm1zLnNvcnQoY29tcGFyZTFzdCk7CiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHRlcm1zLmxlbmd0aCk7CiAgICBmb3IoaT0wOyBpPHJlc3VsdC5sZW5ndGg7ICsraSkgewogICAgICByZXN1bHRbaV0gPSB0ZXJtc1tpXVsxXTsKICAgIH0KICAgIHJldHVybiByZXN1bHQKICB9CgogIGZ1bmN0aW9uIGNvbXBpbGVDb25zdHJ1Y3RvcihkdHlwZSwgZGltZW5zaW9uKSB7CiAgICB2YXIgY2xhc3NOYW1lID0gWyJWaWV3IiwgZGltZW5zaW9uLCAiZCIsIGR0eXBlXS5qb2luKCIiKTsKICAgIGlmKGRpbWVuc2lvbiA8IDApIHsKICAgICAgY2xhc3NOYW1lID0gIlZpZXdfTmlsIiArIGR0eXBlOwogICAgfQogICAgdmFyIHVzZUdldHRlcnMgPSAoZHR5cGUgPT09ICJnZW5lcmljIik7CgogICAgaWYoZGltZW5zaW9uID09PSAtMSkgewogICAgICAvL1NwZWNpYWwgY2FzZSBmb3IgdHJpdmlhbCBhcnJheXMKICAgICAgdmFyIGNvZGUgPQogICAgICAgICJmdW5jdGlvbiAiK2NsYXNzTmFtZSsiKGEpe3RoaXMuZGF0YT1hO307XAp2YXIgcHJvdG89IitjbGFzc05hbWUrIi5wcm90b3R5cGU7XApwcm90by5kdHlwZT0nIitkdHlwZSsiJztcCnByb3RvLmluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIC0xfTtcCnByb3RvLnNpemU9MDtcCnByb3RvLmRpbWVuc2lvbj0tMTtcCnByb3RvLnNoYXBlPXByb3RvLnN0cmlkZT1wcm90by5vcmRlcj1bXTtcCnByb3RvLmxvPXByb3RvLmhpPXByb3RvLnRyYW5zcG9zZT1wcm90by5zdGVwPVwKZnVuY3Rpb24oKXtyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIodGhpcy5kYXRhKTt9O1wKcHJvdG8uZ2V0PXByb3RvLnNldD1mdW5jdGlvbigpe307XApwcm90by5waWNrPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O1wKcmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF8iK2NsYXNzTmFtZSsiKGEpe3JldHVybiBuZXcgIitjbGFzc05hbWUrIihhKTt9IjsKICAgICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihjb2RlKTsKICAgICAgcmV0dXJuIHByb2NlZHVyZSgpCiAgICB9IGVsc2UgaWYoZGltZW5zaW9uID09PSAwKSB7CiAgICAgIC8vU3BlY2lhbCBjYXNlIGZvciAwZCBhcnJheXMKICAgICAgdmFyIGNvZGUgPQogICAgICAgICJmdW5jdGlvbiAiK2NsYXNzTmFtZSsiKGEsZCkge1wKdGhpcy5kYXRhID0gYTtcCnRoaXMub2Zmc2V0ID0gZFwKfTtcCnZhciBwcm90bz0iK2NsYXNzTmFtZSsiLnByb3RvdHlwZTtcCnByb3RvLmR0eXBlPSciK2R0eXBlKyInO1wKcHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vZmZzZXR9O1wKcHJvdG8uZGltZW5zaW9uPTA7XApwcm90by5zaXplPTE7XApwcm90by5zaGFwZT1cCnByb3RvLnN0cmlkZT1cCnByb3RvLm9yZGVyPVtdO1wKcHJvdG8ubG89XApwcm90by5oaT1cCnByb3RvLnRyYW5zcG9zZT1cCnByb3RvLnN0ZXA9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9jb3B5KCkge1wKcmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSx0aGlzLm9mZnNldClcCn07XApwcm90by5waWNrPWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfcGljaygpe1wKcmV0dXJuIFRyaXZpYWxBcnJheSh0aGlzLmRhdGEpO1wKfTtcCnByb3RvLnZhbHVlT2Y9cHJvdG8uZ2V0PWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfZ2V0KCl7XApyZXR1cm4gIisodXNlR2V0dGVycyA/ICJ0aGlzLmRhdGEuZ2V0KHRoaXMub2Zmc2V0KSIgOiAidGhpcy5kYXRhW3RoaXMub2Zmc2V0XSIpKwogICJ9O1wKcHJvdG8uc2V0PWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfc2V0KHYpe1wKcmV0dXJuICIrKHVzZUdldHRlcnMgPyAidGhpcy5kYXRhLnNldCh0aGlzLm9mZnNldCx2KSIgOiAidGhpcy5kYXRhW3RoaXMub2Zmc2V0XT12IikrIlwKfTtcCnJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfIitjbGFzc05hbWUrIihhLGIsYyxkKXtyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIoYSxkKX0iOwogICAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKCJUcml2aWFsQXJyYXkiLCBjb2RlKTsKICAgICAgcmV0dXJuIHByb2NlZHVyZShDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXVswXSkKICAgIH0KCiAgICB2YXIgY29kZSA9IFsiJ3VzZSBzdHJpY3QnIl07CgogICAgLy9DcmVhdGUgY29uc3RydWN0b3IgZm9yIHZpZXcKICAgIHZhciBpbmRpY2VzID0gaW90YV8xKGRpbWVuc2lvbik7CiAgICB2YXIgYXJncyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuICJpIitpIH0pOwogICAgdmFyIGluZGV4X3N0ciA9ICJ0aGlzLm9mZnNldCsiICsgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgICAgcmV0dXJuICJ0aGlzLnN0cmlkZVsiICsgaSArICJdKmkiICsgaQogICAgICAgIH0pLmpvaW4oIisiKTsKICAgIHZhciBzaGFwZUFyZyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImIiK2kKICAgICAgfSkuam9pbigiLCIpOwogICAgdmFyIHN0cmlkZUFyZyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImMiK2kKICAgICAgfSkuam9pbigiLCIpOwogICAgY29kZS5wdXNoKAogICAgICAiZnVuY3Rpb24gIitjbGFzc05hbWUrIihhLCIgKyBzaGFwZUFyZyArICIsIiArIHN0cmlkZUFyZyArICIsZCl7dGhpcy5kYXRhPWEiLAogICAgICAgICJ0aGlzLnNoYXBlPVsiICsgc2hhcGVBcmcgKyAiXSIsCiAgICAgICAgInRoaXMuc3RyaWRlPVsiICsgc3RyaWRlQXJnICsgIl0iLAogICAgICAgICJ0aGlzLm9mZnNldD1kfDB9IiwKICAgICAgInZhciBwcm90bz0iK2NsYXNzTmFtZSsiLnByb3RvdHlwZSIsCiAgICAgICJwcm90by5kdHlwZT0nIitkdHlwZSsiJyIsCiAgICAgICJwcm90by5kaW1lbnNpb249IitkaW1lbnNpb24pOwoKICAgIC8vdmlldy5zaXplOgogICAgY29kZS5wdXNoKCJPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sJ3NpemUnLHtnZXQ6ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9zaXplKCl7XApyZXR1cm4gIitpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiAidGhpcy5zaGFwZVsiK2krIl0iIH0pLmpvaW4oIioiKSwKICAifX0pIik7CgogICAgLy92aWV3Lm9yZGVyOgogICAgaWYoZGltZW5zaW9uID09PSAxKSB7CiAgICAgIGNvZGUucHVzaCgicHJvdG8ub3JkZXI9WzBdIik7CiAgICB9IGVsc2UgewogICAgICBjb2RlLnB1c2goIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnb3JkZXInLHtnZXQ6Iik7CiAgICAgIGlmKGRpbWVuc2lvbiA8IDQpIHsKICAgICAgICBjb2RlLnB1c2goImZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfb3JkZXIoKXsiKTsKICAgICAgICBpZihkaW1lbnNpb24gPT09IDIpIHsKICAgICAgICAgIGNvZGUucHVzaCgicmV0dXJuIChNYXRoLmFicyh0aGlzLnN0cmlkZVswXSk+TWF0aC5hYnModGhpcy5zdHJpZGVbMV0pKT9bMSwwXTpbMCwxXX19KSIpOwogICAgICAgIH0gZWxzZSBpZihkaW1lbnNpb24gPT09IDMpIHsKICAgICAgICAgIGNvZGUucHVzaCgKICAidmFyIHMwPU1hdGguYWJzKHRoaXMuc3RyaWRlWzBdKSxzMT1NYXRoLmFicyh0aGlzLnN0cmlkZVsxXSksczI9TWF0aC5hYnModGhpcy5zdHJpZGVbMl0pO1wKaWYoczA+czEpe1wKaWYoczE+czIpe1wKcmV0dXJuIFsyLDEsMF07XAp9ZWxzZSBpZihzMD5zMil7XApyZXR1cm4gWzEsMiwwXTtcCn1lbHNle1wKcmV0dXJuIFsxLDAsMl07XAp9XAp9ZWxzZSBpZihzMD5zMil7XApyZXR1cm4gWzIsMCwxXTtcCn1lbHNlIGlmKHMyPnMxKXtcCnJldHVybiBbMCwxLDJdO1wKfWVsc2V7XApyZXR1cm4gWzAsMiwxXTtcCn19fSkiKTsKICAgICAgICB9CiAgICAgIH0gZWxzZSB7CiAgICAgICAgY29kZS5wdXNoKCJPUkRFUn0pIik7CiAgICAgIH0KICAgIH0KCiAgICAvL3ZpZXcuc2V0KGkwLCAuLi4sIHYpOgogICAgY29kZS5wdXNoKAogICJwcm90by5zZXQ9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9zZXQoIithcmdzLmpvaW4oIiwiKSsiLHYpeyIpOwogICAgaWYodXNlR2V0dGVycykgewogICAgICBjb2RlLnB1c2goInJldHVybiB0aGlzLmRhdGEuc2V0KCIraW5kZXhfc3RyKyIsdil9Iik7CiAgICB9IGVsc2UgewogICAgICBjb2RlLnB1c2goInJldHVybiB0aGlzLmRhdGFbIitpbmRleF9zdHIrIl09dn0iKTsKICAgIH0KCiAgICAvL3ZpZXcuZ2V0KGkwLCAuLi4pOgogICAgY29kZS5wdXNoKCJwcm90by5nZXQ9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9nZXQoIithcmdzLmpvaW4oIiwiKSsiKXsiKTsKICAgIGlmKHVzZUdldHRlcnMpIHsKICAgICAgY29kZS5wdXNoKCJyZXR1cm4gdGhpcy5kYXRhLmdldCgiK2luZGV4X3N0cisiKX0iKTsKICAgIH0gZWxzZSB7CiAgICAgIGNvZGUucHVzaCgicmV0dXJuIHRoaXMuZGF0YVsiK2luZGV4X3N0cisiXX0iKTsKICAgIH0KCiAgICAvL3ZpZXcuaW5kZXg6CiAgICBjb2RlLnB1c2goCiAgICAgICJwcm90by5pbmRleD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX2luZGV4KCIsIGFyZ3Muam9pbigpLCAiKXtyZXR1cm4gIitpbmRleF9zdHIrIn0iKTsKCiAgICAvL3ZpZXcuaGkoKToKICAgIGNvZGUucHVzaCgicHJvdG8uaGk9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9oaSgiK2FyZ3Muam9pbigiLCIpKyIpe3JldHVybiBuZXcgIitjbGFzc05hbWUrIih0aGlzLmRhdGEsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiBbIih0eXBlb2YgaSIsaSwiIT09J251bWJlcid8fGkiLGksIjwwKT90aGlzLnNoYXBlWyIsIGksICJdOmkiLCBpLCJ8MCJdLmpvaW4oIiIpCiAgICAgIH0pLmpvaW4oIiwiKSsiLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gInRoaXMuc3RyaWRlWyIraSArICJdIgogICAgICB9KS5qb2luKCIsIikrIix0aGlzLm9mZnNldCl9Iik7CgogICAgLy92aWV3LmxvKCk6CiAgICB2YXIgYV92YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gImEiK2krIj10aGlzLnNoYXBlWyIraSsiXSIgfSk7CiAgICB2YXIgY192YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gImMiK2krIj10aGlzLnN0cmlkZVsiK2krIl0iIH0pOwogICAgY29kZS5wdXNoKCJwcm90by5sbz1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX2xvKCIrYXJncy5qb2luKCIsIikrIil7dmFyIGI9dGhpcy5vZmZzZXQsZD0wLCIrYV92YXJzLmpvaW4oIiwiKSsiLCIrY192YXJzLmpvaW4oIiwiKSk7CiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkgewogICAgICBjb2RlLnB1c2goCiAgImlmKHR5cGVvZiBpIitpKyI9PT0nbnVtYmVyJyYmaSIraSsiPj0wKXtcCmQ9aSIraSsifDA7XApiKz1jIitpKyIqZDtcCmEiK2krIi09ZH0iKTsKICAgIH0KICAgIGNvZGUucHVzaCgicmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJhIitpCiAgICAgIH0pLmpvaW4oIiwiKSsiLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImMiK2kKICAgICAgfSkuam9pbigiLCIpKyIsYil9Iik7CgogICAgLy92aWV3LnN0ZXAoKToKICAgIGNvZGUucHVzaCgicHJvdG8uc3RlcD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX3N0ZXAoIithcmdzLmpvaW4oIiwiKSsiKXt2YXIgIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYSIraSsiPXRoaXMuc2hhcGVbIitpKyJdIgogICAgICB9KS5qb2luKCIsIikrIiwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJiIitpKyI9dGhpcy5zdHJpZGVbIitpKyJdIgogICAgICB9KS5qb2luKCIsIikrIixjPXRoaXMub2Zmc2V0LGQ9MCxjZWlsPU1hdGguY2VpbCIpOwogICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHsKICAgICAgY29kZS5wdXNoKAogICJpZih0eXBlb2YgaSIraSsiPT09J251bWJlcicpe1wKZD1pIitpKyJ8MDtcCmlmKGQ8MCl7XApjKz1iIitpKyIqKGEiK2krIi0xKTtcCmEiK2krIj1jZWlsKC1hIitpKyIvZClcCn1lbHNle1wKYSIraSsiPWNlaWwoYSIraSsiL2QpXAp9XApiIitpKyIqPWRcCn0iKTsKICAgIH0KICAgIGNvZGUucHVzaCgicmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJhIiArIGkKICAgICAgfSkuam9pbigiLCIpKyIsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYiIgKyBpCiAgICAgIH0pLmpvaW4oIiwiKSsiLGMpfSIpOwoKICAgIC8vdmlldy50cmFuc3Bvc2UoKToKICAgIHZhciB0U2hhcGUgPSBuZXcgQXJyYXkoZGltZW5zaW9uKTsKICAgIHZhciB0U3RyaWRlID0gbmV3IEFycmF5KGRpbWVuc2lvbik7CiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkgewogICAgICB0U2hhcGVbaV0gPSAiYVtpIitpKyJdIjsKICAgICAgdFN0cmlkZVtpXSA9ICJiW2kiK2krIl0iOwogICAgfQogICAgY29kZS5wdXNoKCJwcm90by50cmFuc3Bvc2U9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl90cmFuc3Bvc2UoIithcmdzKyIpeyIrCiAgICAgIGFyZ3MubWFwKGZ1bmN0aW9uKG4saWR4KSB7IHJldHVybiBuICsgIj0oIiArIG4gKyAiPT09dW5kZWZpbmVkPyIgKyBpZHggKyAiOiIgKyBuICsgInwwKSJ9KS5qb2luKCI7IiksCiAgICAgICJ2YXIgYT10aGlzLnNoYXBlLGI9dGhpcy5zdHJpZGU7cmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSwiK3RTaGFwZS5qb2luKCIsIikrIiwiK3RTdHJpZGUuam9pbigiLCIpKyIsdGhpcy5vZmZzZXQpfSIpOwoKICAgIC8vdmlldy5waWNrKCk6CiAgICBjb2RlLnB1c2goInByb3RvLnBpY2s9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9waWNrKCIrYXJncysiKXt2YXIgYT1bXSxiPVtdLGM9dGhpcy5vZmZzZXQiKTsKICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7CiAgICAgIGNvZGUucHVzaCgiaWYodHlwZW9mIGkiK2krIj09PSdudW1iZXInJiZpIitpKyI+PTApe2M9KGMrdGhpcy5zdHJpZGVbIitpKyJdKmkiK2krIil8MH1lbHNle2EucHVzaCh0aGlzLnNoYXBlWyIraSsiXSk7Yi5wdXNoKHRoaXMuc3RyaWRlWyIraSsiXSl9Iik7CiAgICB9CiAgICBjb2RlLnB1c2goInZhciBjdG9yPUNUT1JfTElTVFthLmxlbmd0aCsxXTtyZXR1cm4gY3Rvcih0aGlzLmRhdGEsYSxiLGMpfSIpOwoKICAgIC8vQWRkIHJldHVybiBzdGF0ZW1lbnQKICAgIGNvZGUucHVzaCgicmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF8iK2NsYXNzTmFtZSsiKGRhdGEsc2hhcGUsc3RyaWRlLG9mZnNldCl7cmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKGRhdGEsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAic2hhcGVbIitpKyJdIgogICAgICB9KS5qb2luKCIsIikrIiwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJzdHJpZGVbIitpKyJdIgogICAgICB9KS5qb2luKCIsIikrIixvZmZzZXQpfSIpOwoKICAgIC8vQ29tcGlsZSBwcm9jZWR1cmUKICAgIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oIkNUT1JfTElTVCIsICJPUkRFUiIsIGNvZGUuam9pbigiXG4iKSk7CiAgICByZXR1cm4gcHJvY2VkdXJlKENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdLCBvcmRlcikKICB9CgogIGZ1bmN0aW9uIGFycmF5RFR5cGUoZGF0YSkgewogICAgaWYoaXNCdWZmZXJfMShkYXRhKSkgewogICAgICByZXR1cm4gImJ1ZmZlciIKICAgIH0KICAgIGlmKGhhc1R5cGVkQXJyYXlzKSB7CiAgICAgIHN3aXRjaChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkpIHsKICAgICAgICBjYXNlICJbb2JqZWN0IEZsb2F0NjRBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJmbG9hdDY0IgogICAgICAgIGNhc2UgIltvYmplY3QgRmxvYXQzMkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImZsb2F0MzIiCiAgICAgICAgY2FzZSAiW29iamVjdCBJbnQ4QXJyYXldIjoKICAgICAgICAgIHJldHVybiAiaW50OCIKICAgICAgICBjYXNlICJbb2JqZWN0IEludDE2QXJyYXldIjoKICAgICAgICAgIHJldHVybiAiaW50MTYiCiAgICAgICAgY2FzZSAiW29iamVjdCBJbnQzMkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImludDMyIgogICAgICAgIGNhc2UgIltvYmplY3QgVWludDhBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJ1aW50OCIKICAgICAgICBjYXNlICJbb2JqZWN0IFVpbnQxNkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gInVpbnQxNiIKICAgICAgICBjYXNlICJbb2JqZWN0IFVpbnQzMkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gInVpbnQzMiIKICAgICAgICBjYXNlICJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XSI6CiAgICAgICAgICByZXR1cm4gInVpbnQ4X2NsYW1wZWQiCiAgICAgICAgY2FzZSAiW29iamVjdCBCaWdJbnQ2NEFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImJpZ2ludDY0IgogICAgICAgIGNhc2UgIltvYmplY3QgQmlnVWludDY0QXJyYXldIjoKICAgICAgICAgIHJldHVybiAiYmlndWludDY0IgogICAgICB9CiAgICB9CiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7CiAgICAgIHJldHVybiAiYXJyYXkiCiAgICB9CiAgICByZXR1cm4gImdlbmVyaWMiCiAgfQoKICB2YXIgQ0FDSEVEX0NPTlNUUlVDVE9SUyA9IHsKICAgICJmbG9hdDMyIjpbXSwKICAgICJmbG9hdDY0IjpbXSwKICAgICJpbnQ4IjpbXSwKICAgICJpbnQxNiI6W10sCiAgICAiaW50MzIiOltdLAogICAgInVpbnQ4IjpbXSwKICAgICJ1aW50MTYiOltdLAogICAgInVpbnQzMiI6W10sCiAgICAiYXJyYXkiOltdLAogICAgInVpbnQ4X2NsYW1wZWQiOltdLAogICAgImJpZ2ludDY0IjogW10sCiAgICAiYmlndWludDY0IjogW10sCiAgICAiYnVmZmVyIjpbXSwKICAgICJnZW5lcmljIjpbXQogIH0KCiAgOwogIGZ1bmN0aW9uIHdyYXBwZWROREFycmF5Q3RvcihkYXRhLCBzaGFwZSwgc3RyaWRlLCBvZmZzZXQpIHsKICAgIGlmKGRhdGEgPT09IHVuZGVmaW5lZCkgewogICAgICB2YXIgY3RvciA9IENBQ0hFRF9DT05TVFJVQ1RPUlMuYXJyYXlbMF07CiAgICAgIHJldHVybiBjdG9yKFtdKQogICAgfSBlbHNlIGlmKHR5cGVvZiBkYXRhID09PSAibnVtYmVyIikgewogICAgICBkYXRhID0gW2RhdGFdOwogICAgfQogICAgaWYoc2hhcGUgPT09IHVuZGVmaW5lZCkgewogICAgICBzaGFwZSA9IFsgZGF0YS5sZW5ndGggXTsKICAgIH0KICAgIHZhciBkID0gc2hhcGUubGVuZ3RoOwogICAgaWYoc3RyaWRlID09PSB1bmRlZmluZWQpIHsKICAgICAgc3RyaWRlID0gbmV3IEFycmF5KGQpOwogICAgICBmb3IodmFyIGk9ZC0xLCBzej0xOyBpPj0wOyAtLWkpIHsKICAgICAgICBzdHJpZGVbaV0gPSBzejsKICAgICAgICBzeiAqPSBzaGFwZVtpXTsKICAgICAgfQogICAgfQogICAgaWYob2Zmc2V0ID09PSB1bmRlZmluZWQpIHsKICAgICAgb2Zmc2V0ID0gMDsKICAgICAgZm9yKHZhciBpPTA7IGk8ZDsgKytpKSB7CiAgICAgICAgaWYoc3RyaWRlW2ldIDwgMCkgewogICAgICAgICAgb2Zmc2V0IC09IChzaGFwZVtpXS0xKSpzdHJpZGVbaV07CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICB2YXIgZHR5cGUgPSBhcnJheURUeXBlKGRhdGEpOwogICAgdmFyIGN0b3JfbGlzdCA9IENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdOwogICAgd2hpbGUoY3Rvcl9saXN0Lmxlbmd0aCA8PSBkKzEpIHsKICAgICAgY3Rvcl9saXN0LnB1c2goY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBjdG9yX2xpc3QubGVuZ3RoLTEpKTsKICAgIH0KICAgIHZhciBjdG9yID0gY3Rvcl9saXN0W2QrMV07CiAgICByZXR1cm4gY3RvcihkYXRhLCBzaGFwZSwgc3RyaWRlLCBvZmZzZXQpCiAgfQoKICB2YXIgbmRhcnJheSA9IHdyYXBwZWROREFycmF5Q3RvcjsKCiAgY2xhc3MgTWFydGluaSB7DQogICAgICBjb25zdHJ1Y3RvcihncmlkU2l6ZSA9IDI1Nykgew0KICAgICAgICAgIHRoaXMuZ3JpZFNpemUgPSBncmlkU2l6ZTsNCiAgICAgICAgICBjb25zdCB0aWxlU2l6ZSA9IGdyaWRTaXplIC0gMTsNCiAgICAgICAgICBpZiAodGlsZVNpemUgJiAodGlsZVNpemUgLSAxKSkgdGhyb3cgbmV3IEVycm9yKA0KICAgICAgICAgICAgICBgRXhwZWN0ZWQgZ3JpZCBzaXplIHRvIGJlIDJebisxLCBnb3QgJHtncmlkU2l6ZX0uYCk7DQoNCiAgICAgICAgICB0aGlzLm51bVRyaWFuZ2xlcyA9IHRpbGVTaXplICogdGlsZVNpemUgKiAyIC0gMjsNCiAgICAgICAgICB0aGlzLm51bVBhcmVudFRyaWFuZ2xlcyA9IHRoaXMubnVtVHJpYW5nbGVzIC0gdGlsZVNpemUgKiB0aWxlU2l6ZTsNCg0KICAgICAgICAgIHRoaXMuaW5kaWNlcyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLmdyaWRTaXplICogdGhpcy5ncmlkU2l6ZSk7DQoNCiAgICAgICAgICAvLyBjb29yZGluYXRlcyBmb3IgYWxsIHBvc3NpYmxlIHRyaWFuZ2xlcyBpbiBhbiBSVElOIHRpbGUNCiAgICAgICAgICB0aGlzLmNvb3JkcyA9IG5ldyBVaW50MTZBcnJheSh0aGlzLm51bVRyaWFuZ2xlcyAqIDQpOw0KDQogICAgICAgICAgLy8gZ2V0IHRyaWFuZ2xlIGNvb3JkaW5hdGVzIGZyb20gaXRzIGluZGV4IGluIGFuIGltcGxpY2l0IGJpbmFyeSB0cmVlDQogICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7DQogICAgICAgICAgICAgIGxldCBpZCA9IGkgKyAyOw0KICAgICAgICAgICAgICBsZXQgYXggPSAwLCBheSA9IDAsIGJ4ID0gMCwgYnkgPSAwLCBjeCA9IDAsIGN5ID0gMDsNCiAgICAgICAgICAgICAgaWYgKGlkICYgMSkgew0KICAgICAgICAgICAgICAgICAgYnggPSBieSA9IGN4ID0gdGlsZVNpemU7IC8vIGJvdHRvbS1sZWZ0IHRyaWFuZ2xlDQogICAgICAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICAgICAgICBheCA9IGF5ID0gY3kgPSB0aWxlU2l6ZTsgLy8gdG9wLXJpZ2h0IHRyaWFuZ2xlDQogICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgd2hpbGUgKChpZCA+Pj0gMSkgPiAxKSB7DQogICAgICAgICAgICAgICAgICBjb25zdCBteCA9IChheCArIGJ4KSA+PiAxOw0KICAgICAgICAgICAgICAgICAgY29uc3QgbXkgPSAoYXkgKyBieSkgPj4gMTsNCg0KICAgICAgICAgICAgICAgICAgaWYgKGlkICYgMSkgeyAvLyBsZWZ0IGhhbGYNCiAgICAgICAgICAgICAgICAgICAgICBieCA9IGF4OyBieSA9IGF5Ow0KICAgICAgICAgICAgICAgICAgICAgIGF4ID0gY3g7IGF5ID0gY3k7DQogICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyByaWdodCBoYWxmDQogICAgICAgICAgICAgICAgICAgICAgYXggPSBieDsgYXkgPSBieTsNCiAgICAgICAgICAgICAgICAgICAgICBieCA9IGN4OyBieSA9IGN5Ow0KICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgY3ggPSBteDsgY3kgPSBteTsNCiAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICBjb25zdCBrID0gaSAqIDQ7DQogICAgICAgICAgICAgIHRoaXMuY29vcmRzW2sgKyAwXSA9IGF4Ow0KICAgICAgICAgICAgICB0aGlzLmNvb3Jkc1trICsgMV0gPSBheTsNCiAgICAgICAgICAgICAgdGhpcy5jb29yZHNbayArIDJdID0gYng7DQogICAgICAgICAgICAgIHRoaXMuY29vcmRzW2sgKyAzXSA9IGJ5Ow0KICAgICAgICAgIH0NCiAgICAgIH0NCg0KICAgICAgY3JlYXRlVGlsZSh0ZXJyYWluKSB7DQogICAgICAgICAgcmV0dXJuIG5ldyBUaWxlKHRlcnJhaW4sIHRoaXMpOw0KICAgICAgfQ0KICB9DQoNCiAgY2xhc3MgVGlsZSB7DQogICAgICBjb25zdHJ1Y3Rvcih0ZXJyYWluLCBtYXJ0aW5pKSB7DQogICAgICAgICAgY29uc3Qgc2l6ZSA9IG1hcnRpbmkuZ3JpZFNpemU7DQogICAgICAgICAgaWYgKHRlcnJhaW4ubGVuZ3RoICE9PSBzaXplICogc2l6ZSkgdGhyb3cgbmV3IEVycm9yKA0KICAgICAgICAgICAgICBgRXhwZWN0ZWQgdGVycmFpbiBkYXRhIG9mIGxlbmd0aCAke3NpemUgKiBzaXplfSAoJHtzaXplfSB4ICR7c2l6ZX0pLCBnb3QgJHt0ZXJyYWluLmxlbmd0aH0uYCk7DQoNCiAgICAgICAgICB0aGlzLnRlcnJhaW4gPSB0ZXJyYWluOw0KICAgICAgICAgIHRoaXMubWFydGluaSA9IG1hcnRpbmk7DQogICAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgRmxvYXQzMkFycmF5KHRlcnJhaW4ubGVuZ3RoKTsNCiAgICAgICAgICB0aGlzLnVwZGF0ZSgpOw0KICAgICAgfQ0KDQogICAgICB1cGRhdGUoKSB7DQogICAgICAgICAgY29uc3Qge251bVRyaWFuZ2xlcywgbnVtUGFyZW50VHJpYW5nbGVzLCBjb29yZHMsIGdyaWRTaXplOiBzaXplfSA9IHRoaXMubWFydGluaTsNCiAgICAgICAgICBjb25zdCB7dGVycmFpbiwgZXJyb3JzfSA9IHRoaXM7DQoNCiAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIHRyaWFuZ2xlcywgc3RhcnRpbmcgZnJvbSB0aGUgc21hbGxlc3QgbGV2ZWwNCiAgICAgICAgICBmb3IgKGxldCBpID0gbnVtVHJpYW5nbGVzIC0gMTsgaSA+PSAwOyBpLS0pIHsNCiAgICAgICAgICAgICAgY29uc3QgayA9IGkgKiA0Ow0KICAgICAgICAgICAgICBjb25zdCBheCA9IGNvb3Jkc1trICsgMF07DQogICAgICAgICAgICAgIGNvbnN0IGF5ID0gY29vcmRzW2sgKyAxXTsNCiAgICAgICAgICAgICAgY29uc3QgYnggPSBjb29yZHNbayArIDJdOw0KICAgICAgICAgICAgICBjb25zdCBieSA9IGNvb3Jkc1trICsgM107DQogICAgICAgICAgICAgIGNvbnN0IG14ID0gKGF4ICsgYngpID4+IDE7DQogICAgICAgICAgICAgIGNvbnN0IG15ID0gKGF5ICsgYnkpID4+IDE7DQogICAgICAgICAgICAgIGNvbnN0IGN4ID0gbXggKyBteSAtIGF5Ow0KICAgICAgICAgICAgICBjb25zdCBjeSA9IG15ICsgYXggLSBteDsNCg0KICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgZXJyb3IgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbG9uZyBlZGdlIG9mIHRoZSB0cmlhbmdsZQ0KICAgICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRIZWlnaHQgPSAodGVycmFpbltheSAqIHNpemUgKyBheF0gKyB0ZXJyYWluW2J5ICogc2l6ZSArIGJ4XSkgLyAyOw0KICAgICAgICAgICAgICBjb25zdCBtaWRkbGVJbmRleCA9IG15ICogc2l6ZSArIG14Ow0KICAgICAgICAgICAgICBjb25zdCBtaWRkbGVFcnJvciA9IE1hdGguYWJzKGludGVycG9sYXRlZEhlaWdodCAtIHRlcnJhaW5bbWlkZGxlSW5kZXhdKTsNCg0KICAgICAgICAgICAgICBlcnJvcnNbbWlkZGxlSW5kZXhdID0gTWF0aC5tYXgoZXJyb3JzW21pZGRsZUluZGV4XSwgbWlkZGxlRXJyb3IpOw0KDQogICAgICAgICAgICAgIGlmIChpIDwgbnVtUGFyZW50VHJpYW5nbGVzKSB7IC8vIGJpZ2dlciB0cmlhbmdsZXM7IGFjY3VtdWxhdGUgZXJyb3Igd2l0aCBjaGlsZHJlbg0KICAgICAgICAgICAgICAgICAgY29uc3QgbGVmdENoaWxkSW5kZXggPSAoKGF5ICsgY3kpID4+IDEpICogc2l6ZSArICgoYXggKyBjeCkgPj4gMSk7DQogICAgICAgICAgICAgICAgICBjb25zdCByaWdodENoaWxkSW5kZXggPSAoKGJ5ICsgY3kpID4+IDEpICogc2l6ZSArICgoYnggKyBjeCkgPj4gMSk7DQogICAgICAgICAgICAgICAgICBlcnJvcnNbbWlkZGxlSW5kZXhdID0gTWF0aC5tYXgoZXJyb3JzW21pZGRsZUluZGV4XSwgZXJyb3JzW2xlZnRDaGlsZEluZGV4XSwgZXJyb3JzW3JpZ2h0Q2hpbGRJbmRleF0pOw0KICAgICAgICAgICAgICB9DQogICAgICAgICAgfQ0KICAgICAgfQ0KDQogICAgICBnZXRNZXNoKG1heEVycm9yID0gMCwgbWF4TGVuZ3RoID0gbnVsbCkgew0KICAgICAgICAgIGNvbnN0IHtncmlkU2l6ZTogc2l6ZSwgaW5kaWNlc30gPSB0aGlzLm1hcnRpbmk7DQogICAgICAgICAgY29uc3Qge2Vycm9yc30gPSB0aGlzOw0KICAgICAgICAgIGxldCBudW1WZXJ0aWNlcyA9IDA7DQogICAgICAgICAgbGV0IG51bVRyaWFuZ2xlcyA9IDA7DQogICAgICAgICAgY29uc3QgbWF4ID0gc2l6ZSAtIDE7DQoNCiAgICAgICAgICAvLyBUaGUgbWF4TGVuZ3RoIHBhcmFtZXRlciB3aWxsIGNhdXNlIHRyaWFuZ2xlcyB0byBiZSBnZW5lcmF0ZWQgdW50aWwgdGhlIGxlZ3MgYXJlIGJlbG93IHRoaXMgbGVuZ3RoDQogICAgICAgICAgLy8gSXQgaXMgbWVhbnQgdG8gc3VwcG9ydCBjYXNlcyB3aGVyZSBhIGNlcnRhaW4gbWVzaCBkZW5zaXR5IGlzIHJlcXVpcmVkIHRvIGRvIHNwaGVyaWNhbCBtYXRoIG9uIGRpZ2l0YWwgZ2xvYmVzDQogICAgICAgICAgY29uc3QgbWF4U2NhbGUgPSBtYXhMZW5ndGggfHwgc2l6ZTsNCg0KICAgICAgICAgIC8vIHVzZSBhbiBpbmRleCBncmlkIHRvIGtlZXAgdHJhY2sgb2YgdmVydGljZXMgdGhhdCB3ZXJlIGFscmVhZHkgdXNlZCB0byBhdm9pZCBkdXBsaWNhdGlvbg0KICAgICAgICAgIGluZGljZXMuZmlsbCgwKTsNCg0KICAgICAgICAgIC8vIHJldHJpZXZlIG1lc2ggaW4gdHdvIHN0YWdlcyB0aGF0IGJvdGggdHJhdmVyc2UgdGhlIGVycm9yIG1hcDoNCiAgICAgICAgICAvLyAtIGNvdW50RWxlbWVudHM6IGZpbmQgdXNlZCB2ZXJ0aWNlcyAoYW5kIGFzc2lnbiBlYWNoIGFuIGluZGV4KSwgYW5kIGNvdW50IHRyaWFuZ2xlcyAoZm9yIG1pbmltdW0gYWxsb2NhdGlvbikNCiAgICAgICAgICAvLyAtIHByb2Nlc3NUcmlhbmdsZTogZmlsbCB0aGUgYWxsb2NhdGVkIHZlcnRpY2VzICYgdHJpYW5nbGVzIHR5cGVkIGFycmF5cw0KDQogICAgICAgICAgZnVuY3Rpb24gY291bnRFbGVtZW50cyhheCwgYXksIGJ4LCBieSwgY3gsIGN5KSB7DQogICAgICAgICAgICAgIGNvbnN0IG14ID0gKGF4ICsgYngpID4+IDE7DQogICAgICAgICAgICAgIGNvbnN0IG15ID0gKGF5ICsgYnkpID4+IDE7DQoNCiAgICAgICAgICAgICAgY29uc3QgbGVnTGVuZ3RoID0gTWF0aC5hYnMoYXggLSBjeCkgKyBNYXRoLmFicyhheSAtIGN5KTsNCiAgICAgICAgICAgICAgaWYgKChsZWdMZW5ndGggPiAxICYmIGVycm9yc1tteSAqIHNpemUgKyBteF0gPiBtYXhFcnJvcikgfHwgbGVnTGVuZ3RoID4gbWF4U2NhbGUpIHsNCiAgICAgICAgICAgICAgICAgIGNvdW50RWxlbWVudHMoY3gsIGN5LCBheCwgYXksIG14LCBteSk7DQogICAgICAgICAgICAgICAgICBjb3VudEVsZW1lbnRzKGJ4LCBieSwgY3gsIGN5LCBteCwgbXkpOw0KICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgaW5kaWNlc1theSAqIHNpemUgKyBheF0gPSBpbmRpY2VzW2F5ICogc2l6ZSArIGF4XSB8fCArK251bVZlcnRpY2VzOw0KICAgICAgICAgICAgICAgICAgaW5kaWNlc1tieSAqIHNpemUgKyBieF0gPSBpbmRpY2VzW2J5ICogc2l6ZSArIGJ4XSB8fCArK251bVZlcnRpY2VzOw0KICAgICAgICAgICAgICAgICAgaW5kaWNlc1tjeSAqIHNpemUgKyBjeF0gPSBpbmRpY2VzW2N5ICogc2l6ZSArIGN4XSB8fCArK251bVZlcnRpY2VzOw0KICAgICAgICAgICAgICAgICAgbnVtVHJpYW5nbGVzKys7DQogICAgICAgICAgICAgIH0NCiAgICAgICAgICB9DQogICAgICAgICAgY291bnRFbGVtZW50cygwLCAwLCBtYXgsIG1heCwgbWF4LCAwKTsNCiAgICAgICAgICBjb3VudEVsZW1lbnRzKG1heCwgbWF4LCAwLCAwLCAwLCBtYXgpOw0KDQogICAgICAgICAgY29uc3QgdmVydGljZXMgPSBuZXcgVWludDE2QXJyYXkobnVtVmVydGljZXMgKiAyKTsNCiAgICAgICAgICBjb25zdCB0cmlhbmdsZXMgPSBuZXcgVWludDMyQXJyYXkobnVtVHJpYW5nbGVzICogMyk7DQogICAgICAgICAgbGV0IHRyaUluZGV4ID0gMDsNCg0KICAgICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NUcmlhbmdsZShheCwgYXksIGJ4LCBieSwgY3gsIGN5KSB7DQogICAgICAgICAgICAgIGNvbnN0IG14ID0gKGF4ICsgYngpID4+IDE7DQogICAgICAgICAgICAgIGNvbnN0IG15ID0gKGF5ICsgYnkpID4+IDE7DQoNCiAgICAgICAgICAgICAgY29uc3QgbGVnTGVuZ3RoID0gTWF0aC5hYnMoYXggLSBjeCkgKyBNYXRoLmFicyhheSAtIGN5KTsNCiAgICAgICAgICAgICAgaWYgKChsZWdMZW5ndGggPiAxICYmIGVycm9yc1tteSAqIHNpemUgKyBteF0gPiBtYXhFcnJvcikgfHwgbGVnTGVuZ3RoID4gbWF4U2NhbGUpIHsNCiAgICAgICAgICAgICAgICAgIC8vIHRyaWFuZ2xlIGRvZXNuJ3QgYXBwcm94aW1hdGUgdGhlIHN1cmZhY2Ugd2VsbCBlbm91Z2g7IGRyaWxsIGRvd24gZnVydGhlcg0KICAgICAgICAgICAgICAgICAgcHJvY2Vzc1RyaWFuZ2xlKGN4LCBjeSwgYXgsIGF5LCBteCwgbXkpOw0KICAgICAgICAgICAgICAgICAgcHJvY2Vzc1RyaWFuZ2xlKGJ4LCBieSwgY3gsIGN5LCBteCwgbXkpOw0KDQogICAgICAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICAgICAgICAvLyBhZGQgYSB0cmlhbmdsZQ0KICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IGluZGljZXNbYXkgKiBzaXplICsgYXhdIC0gMTsNCiAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBpbmRpY2VzW2J5ICogc2l6ZSArIGJ4XSAtIDE7DQogICAgICAgICAgICAgICAgICBjb25zdCBjID0gaW5kaWNlc1tjeSAqIHNpemUgKyBjeF0gLSAxOw0KDQogICAgICAgICAgICAgICAgICB2ZXJ0aWNlc1syICogYV0gPSBheDsNCiAgICAgICAgICAgICAgICAgIHZlcnRpY2VzWzIgKiBhICsgMV0gPSBheTsNCg0KICAgICAgICAgICAgICAgICAgdmVydGljZXNbMiAqIGJdID0gYng7DQogICAgICAgICAgICAgICAgICB2ZXJ0aWNlc1syICogYiArIDFdID0gYnk7DQoNCiAgICAgICAgICAgICAgICAgIHZlcnRpY2VzWzIgKiBjXSA9IGN4Ow0KICAgICAgICAgICAgICAgICAgdmVydGljZXNbMiAqIGMgKyAxXSA9IGN5Ow0KDQogICAgICAgICAgICAgICAgICB0cmlhbmdsZXNbdHJpSW5kZXgrK10gPSBhOw0KICAgICAgICAgICAgICAgICAgdHJpYW5nbGVzW3RyaUluZGV4KytdID0gYjsNCiAgICAgICAgICAgICAgICAgIHRyaWFuZ2xlc1t0cmlJbmRleCsrXSA9IGM7DQogICAgICAgICAgICAgIH0NCiAgICAgICAgICB9DQogICAgICAgICAgcHJvY2Vzc1RyaWFuZ2xlKDAsIDAsIG1heCwgbWF4LCBtYXgsIDApOw0KICAgICAgICAgIHByb2Nlc3NUcmlhbmdsZShtYXgsIG1heCwgMCwgMCwgMCwgbWF4KTsNCg0KICAgICAgICAgIHJldHVybiB7dmVydGljZXMsIHRyaWFuZ2xlc307DQogICAgICB9DQogIH0KCiAgZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4pIHsKICAgIHZhciBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH07CiAgCXJldHVybiBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7CiAgfQoKICAvKioKICAgKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4KICAgKgogICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZQogICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4KICAgKi8KCiAgY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkgewogIHZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7CgogICAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTsKICAgIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTsKICAgIHZhciB1bmRlZmluZWQkMTsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuCiAgICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgPyBTeW1ib2wgOiB7fTsKICAgIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgIkBAaXRlcmF0b3IiOwogICAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgIkBAYXN5bmNJdGVyYXRvciI7CiAgICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8ICJAQHRvU3RyaW5nVGFnIjsKCiAgICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7CiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgewogICAgICAgIHZhbHVlOiB2YWx1ZSwKICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLAogICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSwKICAgICAgICB3cml0YWJsZTogdHJ1ZQogICAgICB9KTsKICAgICAgcmV0dXJuIG9ialtrZXldOwogICAgfQogICAgdHJ5IHsKICAgICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy4KICAgICAgZGVmaW5lKHt9LCAiIik7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7CiAgICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7CiAgICAgIH07CiAgICB9CgogICAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkgewogICAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci4KICAgICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7CiAgICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7CiAgICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pOwoKICAgICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LAogICAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuCiAgICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTsKCiAgICAgIHJldHVybiBnZW5lcmF0b3I7CiAgICB9CiAgICBleHBvcnRzLndyYXAgPSB3cmFwOwoKICAgIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvbgogICAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkCiAgICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmUKICAgIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2UKICAgIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWQKICAgIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmcKICAgIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlCiAgICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGUKICAgIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2gKICAgIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS4KICAgIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykgewogICAgICB0cnkgewogICAgICAgIHJldHVybiB7IHR5cGU6ICJub3JtYWwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07CiAgICAgIH0gY2F0Y2ggKGVycikgewogICAgICAgIHJldHVybiB7IHR5cGU6ICJ0aHJvdyIsIGFyZzogZXJyIH07CiAgICAgIH0KICAgIH0KCiAgICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9ICJzdXNwZW5kZWRTdGFydCI7CiAgICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9ICJzdXNwZW5kZWRZaWVsZCI7CiAgICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSAiZXhlY3V0aW5nIjsKICAgIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9ICJjb21wbGV0ZWQiOwoKICAgIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXMKICAgIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC4KICAgIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307CgogICAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kCiAgICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3IKICAgIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyCiAgICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLgogICAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge30KICAgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge30KICAgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge30KCiAgICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0CiAgICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LgogICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307CiAgICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSk7CgogICAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mOwogICAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpOwogICAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmCiAgICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmCiAgICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkgewogICAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZAogICAgICAvLyBvZiB0aGUgcG9seWZpbGwuCiAgICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7CiAgICB9CgogICAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0KICAgICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpOwogICAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7CiAgICBkZWZpbmUoR3AsICJjb25zdHJ1Y3RvciIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTsKICAgIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgImNvbnN0cnVjdG9yIiwgR2VuZXJhdG9yRnVuY3Rpb24pOwogICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoCiAgICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLAogICAgICB0b1N0cmluZ1RhZ1N5bWJvbCwKICAgICAgIkdlbmVyYXRvckZ1bmN0aW9uIgogICAgKTsKCiAgICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZQogICAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC4KICAgIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHsKICAgICAgWyJuZXh0IiwgInRocm93IiwgInJldHVybiJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7CiAgICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHsKICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpOwogICAgICAgIH0pOwogICAgICB9KTsKICAgIH0KCiAgICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHsKICAgICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSAiZnVuY3Rpb24iICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjsKICAgICAgcmV0dXJuIGN0b3IKICAgICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8CiAgICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuCiAgICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuCiAgICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSAiR2VuZXJhdG9yRnVuY3Rpb24iCiAgICAgICAgOiBmYWxzZTsKICAgIH07CgogICAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7CiAgICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHsKICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlOwogICAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCAiR2VuZXJhdG9yRnVuY3Rpb24iKTsKICAgICAgfQogICAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7CiAgICAgIHJldHVybiBnZW5GdW47CiAgICB9OwoKICAgIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0bwogICAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3QKICAgIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgIl9fYXdhaXQiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzCiAgICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLgogICAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykgewogICAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTsKICAgIH07CgogICAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7CiAgICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7CiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAidGhyb3ciKSB7CiAgICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnOwogICAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlOwogICAgICAgICAgaWYgKHZhbHVlICYmCiAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAib2JqZWN0IiAmJgogICAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCAiX19hd2FpdCIpKSB7CiAgICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHsKICAgICAgICAgICAgICBpbnZva2UoIm5leHQiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7CiAgICAgICAgICAgICAgaW52b2tlKCJ0aHJvdyIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9CgogICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7CiAgICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzCiAgICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZQogICAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4KICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkOwogICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7CiAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikgewogICAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFjawogICAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuCiAgICAgICAgICAgIHJldHVybiBpbnZva2UoInRocm93IiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7CiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHZhciBwcmV2aW91c1Byb21pc2U7CgogICAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7CiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7CiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkgewogICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7CiAgICAgICAgICB9KTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPQogICAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbAogICAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsCiAgICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmCiAgICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0bwogICAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsCiAgICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkbwogICAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eQogICAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHMKICAgICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5CiAgICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZQogICAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHkKICAgICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS4KICAgICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKAogICAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywKICAgICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXIKICAgICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLgogICAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZwogICAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7CiAgICAgIH0KCiAgICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsCiAgICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLgogICAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlOwogICAgfQoKICAgIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7CiAgICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9KTsKICAgIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7CgogICAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZgogICAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mCiAgICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci4KICAgIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHsKICAgICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTsKCiAgICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoCiAgICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksCiAgICAgICAgUHJvbWlzZUltcGwKICAgICAgKTsKCiAgICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikKICAgICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLgogICAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHsKICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7CiAgICAgICAgICB9KTsKICAgIH07CgogICAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7CiAgICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7CgogICAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7CiAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykgewogICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nIik7CiAgICAgICAgfQoKICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7CiAgICAgICAgICBpZiAobWV0aG9kID09PSAidGhyb3ciKSB7CiAgICAgICAgICAgIHRocm93IGFyZzsKICAgICAgICAgIH0KCiAgICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOgogICAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZQogICAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTsKICAgICAgICB9CgogICAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kOwogICAgICAgIGNvbnRleHQuYXJnID0gYXJnOwoKICAgICAgICB3aGlsZSAodHJ1ZSkgewogICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTsKICAgICAgICAgIGlmIChkZWxlZ2F0ZSkgewogICAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTsKICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7CiAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTsKICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09ICJuZXh0IikgewogICAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3MKICAgICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi4KICAgICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnOwoKICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7CiAgICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDsKICAgICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZzsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7CgogICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gInJldHVybiIpIHsKICAgICAgICAgICAgY29udGV4dC5hYnJ1cHQoInJldHVybiIsIGNvbnRleHQuYXJnKTsKICAgICAgICAgIH0KCiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nOwoKICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTsKICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gIm5vcm1hbCIpIHsKICAgICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PQogICAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uCiAgICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lCiAgICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZAogICAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDsKCiAgICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7CiAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHJldHVybiB7CiAgICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsCiAgICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lCiAgICAgICAgICAgIH07CgogICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkOwogICAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlCiAgICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuCiAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gInRocm93IjsKICAgICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfTsKICAgIH0KCiAgICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGUKICAgIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGUKICAgIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLAogICAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuCiAgICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7CiAgICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07CiAgICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCQxKSB7CiAgICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93CiAgICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC4KICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDsKCiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSAidGhyb3ciKSB7CiAgICAgICAgICAvLyBOb3RlOiBbInJldHVybiJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS4KICAgICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvclsicmV0dXJuIl0pIHsKICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYQogICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuCiAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gInJldHVybiI7CiAgICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7CiAgICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpOwoKICAgICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSAidGhyb3ciKSB7CiAgICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb20KICAgICAgICAgICAgICAvLyAicmV0dXJuIiB0byAidGhyb3ciLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LgogICAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICAgICAgICB9CiAgICAgICAgICB9CgogICAgICAgICAgY29udGV4dC5tZXRob2QgPSAidGhyb3ciOwogICAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKAogICAgICAgICAgICAiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZCIpOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgIH0KCiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7CgogICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICJ0aHJvdyIpIHsKICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyI7CiAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnOwogICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsOwogICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICB9CgogICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7CgogICAgICBpZiAoISBpbmZvKSB7CiAgICAgICAgY29udGV4dC5tZXRob2QgPSAidGhyb3ciOwogICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcigiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3QiKTsKICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDsKICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgfQoKICAgICAgaWYgKGluZm8uZG9uZSkgewogICAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5CiAgICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS4KICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTsKCiAgICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLgogICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7CgogICAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyAidGhyb3ciIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGUKICAgICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmCiAgICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzICJuZXh0IiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuCiAgICAgICAgLy8gImNvbnN1bWVkIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhcwogICAgICAgIC8vICJyZXR1cm4iLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZQogICAgICAgIC8vIG91dGVyIGdlbmVyYXRvci4KICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09ICJyZXR1cm4iKSB7CiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJuZXh0IjsKICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7CiAgICAgICAgfQoKICAgICAgfSBlbHNlIHsKICAgICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuCiAgICAgICAgcmV0dXJuIGluZm87CiAgICAgIH0KCiAgICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoCiAgICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuCiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsOwogICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgIH0KCiAgICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZQogICAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLgogICAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTsKCiAgICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCAiR2VuZXJhdG9yIik7CgogICAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGUKICAgIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlCiAgICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvcgogICAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uCiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy4KICAgIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpczsKICAgIH0pOwoKICAgIGRlZmluZShHcCwgInRvU3RyaW5nIiwgZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAiW29iamVjdCBHZW5lcmF0b3JdIjsKICAgIH0pOwoKICAgIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7CiAgICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07CgogICAgICBpZiAoMSBpbiBsb2NzKSB7CiAgICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdOwogICAgICB9CgogICAgICBpZiAoMiBpbiBsb2NzKSB7CiAgICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07CiAgICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdOwogICAgICB9CgogICAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkgewogICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTsKICAgICAgcmVjb3JkLnR5cGUgPSAibm9ybWFsIjsKICAgICAgZGVsZXRlIHJlY29yZC5hcmc7CiAgICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7CiAgICB9CgogICAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkgewogICAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2gKICAgICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbQogICAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuCiAgICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogInJvb3QiIH1dOwogICAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7CiAgICAgIHRoaXMucmVzZXQodHJ1ZSk7CiAgICB9CgogICAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7CiAgICAgIHZhciBrZXlzID0gW107CiAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHsKICAgICAgICBrZXlzLnB1c2goa2V5KTsKICAgICAgfQogICAgICBrZXlzLnJldmVyc2UoKTsKCiAgICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwCiAgICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuCiAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkgewogICAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkgewogICAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7CiAgICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkgewogICAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5OwogICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTsKICAgICAgICAgICAgcmV0dXJuIG5leHQ7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWUKICAgICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpcwogICAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLgogICAgICAgIG5leHQuZG9uZSA9IHRydWU7CiAgICAgICAgcmV0dXJuIG5leHQ7CiAgICAgIH07CiAgICB9OwoKICAgIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkgewogICAgICBpZiAoaXRlcmFibGUpIHsKICAgICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07CiAgICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7CiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7CiAgICAgICAgfQoKICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09ICJmdW5jdGlvbiIpIHsKICAgICAgICAgIHJldHVybiBpdGVyYWJsZTsKICAgICAgICB9CgogICAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkgewogICAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7CiAgICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHsKICAgICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7CiAgICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07CiAgICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTsKICAgICAgICAgICAgICAgIHJldHVybiBuZXh0OwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQoKICAgICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCQxOwogICAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlOwoKICAgICAgICAgICAgcmV0dXJuIG5leHQ7CiAgICAgICAgICB9OwoKICAgICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0OwogICAgICAgIH0KICAgICAgfQoKICAgICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLgogICAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07CiAgICB9CiAgICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlczsKCiAgICBmdW5jdGlvbiBkb25lUmVzdWx0KCkgewogICAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkJDEsIGRvbmU6IHRydWUgfTsKICAgIH0KCiAgICBDb250ZXh0LnByb3RvdHlwZSA9IHsKICAgICAgY29uc3RydWN0b3I6IENvbnRleHQsCgogICAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkgewogICAgICAgIHRoaXMucHJldiA9IDA7CiAgICAgICAgdGhpcy5uZXh0ID0gMDsKICAgICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwncwogICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uCiAgICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCQxOwogICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlOwogICAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsOwoKICAgICAgICB0aGlzLm1ldGhvZCA9ICJuZXh0IjsKICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZCQxOwoKICAgICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTsKCiAgICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7CiAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHsKICAgICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczoKICAgICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSAidCIgJiYKICAgICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmCiAgICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7CiAgICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZCQxOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9LAoKICAgICAgc3RvcDogZnVuY3Rpb24oKSB7CiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTsKCiAgICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTsKICAgICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uOwogICAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMucnZhbDsKICAgICAgfSwKCiAgICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHsKICAgICAgICBpZiAodGhpcy5kb25lKSB7CiAgICAgICAgICB0aHJvdyBleGNlcHRpb247CiAgICAgICAgfQoKICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7CiAgICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7CiAgICAgICAgICByZWNvcmQudHlwZSA9ICJ0aHJvdyI7CiAgICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uOwogICAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jOwoKICAgICAgICAgIGlmIChjYXVnaHQpIHsKICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jaywKICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS4KICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSAibmV4dCI7CiAgICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7CiAgICAgICAgICB9CgogICAgICAgICAgcmV0dXJuICEhIGNhdWdodDsKICAgICAgICB9CgogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsKICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uOwoKICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09ICJyb290IikgewogICAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZQogICAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG8KICAgICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi4KICAgICAgICAgICAgcmV0dXJuIGhhbmRsZSgiZW5kIik7CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHsKICAgICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksICJjYXRjaExvYyIpOwogICAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCAiZmluYWxseUxvYyIpOwoKICAgICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHsKICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHsKICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpOwogICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgewogICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTsKICAgICAgICAgICAgICB9CgogICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTsKICAgICAgICAgICAgICB9CgogICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHsKICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgewogICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTsKICAgICAgICAgICAgICB9CgogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHkiKTsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfSwKCiAgICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYKICAgICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgImZpbmFsbHlMb2MiKSAmJgogICAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHsKICAgICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGlmIChmaW5hbGx5RW50cnkgJiYKICAgICAgICAgICAgKHR5cGUgPT09ICJicmVhayIgfHwKICAgICAgICAgICAgIHR5cGUgPT09ICJjb250aW51ZSIpICYmCiAgICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmCiAgICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykgewogICAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYQogICAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLgogICAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDsKICAgICAgICB9CgogICAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9OwogICAgICAgIHJlY29yZC50eXBlID0gdHlwZTsKICAgICAgICByZWNvcmQuYXJnID0gYXJnOwoKICAgICAgICBpZiAoZmluYWxseUVudHJ5KSB7CiAgICAgICAgICB0aGlzLm1ldGhvZCA9ICJuZXh0IjsKICAgICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jOwogICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpOwogICAgICB9LAoKICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHsKICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgIHRocm93IHJlY29yZC5hcmc7CiAgICAgICAgfQoKICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICJicmVhayIgfHwKICAgICAgICAgICAgcmVjb3JkLnR5cGUgPT09ICJjb250aW51ZSIpIHsKICAgICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7CiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gInJldHVybiIpIHsKICAgICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZzsKICAgICAgICAgIHRoaXMubWV0aG9kID0gInJldHVybiI7CiAgICAgICAgICB0aGlzLm5leHQgPSAiZW5kIjsKICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAibm9ybWFsIiAmJiBhZnRlckxvYykgewogICAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgfSwKCiAgICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykgewogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsKICAgICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7CiAgICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpOwogICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTsKICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9LAoKICAgICAgImNhdGNoIjogZnVuY3Rpb24odHJ5TG9jKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7CiAgICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uOwogICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZzsKICAgICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gdGhyb3duOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uCiAgICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLgogICAgICAgIHRocm93IG5ldyBFcnJvcigiaWxsZWdhbCBjYXRjaCBhdHRlbXB0Iik7CiAgICAgIH0sCgogICAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykgewogICAgICAgIHRoaXMuZGVsZWdhdGUgPSB7CiAgICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSwKICAgICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsCiAgICAgICAgICBuZXh0TG9jOiBuZXh0TG9jCiAgICAgICAgfTsKCiAgICAgICAgaWYgKHRoaXMubWV0aG9kID09PSAibmV4dCIpIHsKICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0CiAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuCiAgICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZCQxOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgIH0KICAgIH07CgogICAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZQogICAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlCiAgICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmUKICAgIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuCiAgICByZXR1cm4gZXhwb3J0czsKCiAgfSgKICAgIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzCiAgICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eQogICAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZQogICAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS4KICAgIG1vZHVsZS5leHBvcnRzIAogICkpOwoKICB0cnkgewogICAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTsKICB9IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkgewogICAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmUKICAgIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdAogICAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lcwogICAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZQogICAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsCiAgICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2UKICAgIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmCiAgICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYQogICAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlCiAgICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS4KICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gIm9iamVjdCIpIHsKICAgICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lOwogICAgfSBlbHNlIHsKICAgICAgRnVuY3Rpb24oInIiLCAicmVnZW5lcmF0b3JSdW50aW1lID0gciIpKHJ1bnRpbWUpOwogICAgfQogIH0KICB9KTsKCiAgdmFyIG1hcnRpbmkgPSBudWxsOwoKICBmdW5jdGlvbiBkZWNvZGVUZXJyYWluKHBhcmFtZXRlcnMsIHRyYW5zZmVyYWJsZU9iamVjdHMpIHsKICAgIHZhciBfbWFydGluaTsKCiAgICB2YXIgaW1hZ2VEYXRhID0gcGFyYW1ldGVycy5pbWFnZURhdGEsCiAgICAgICAgX3BhcmFtZXRlcnMkdGlsZVNpemUgPSBwYXJhbWV0ZXJzLnRpbGVTaXplLAogICAgICAgIHRpbGVTaXplID0gX3BhcmFtZXRlcnMkdGlsZVNpemUgPT09IHZvaWQgMCA/IDI1NiA6IF9wYXJhbWV0ZXJzJHRpbGVTaXplLAogICAgICAgIGVycm9yTGV2ZWwgPSBwYXJhbWV0ZXJzLmVycm9yTGV2ZWw7CiAgICB2YXIgcGl4ZWxzID0gbmRhcnJheShuZXcgVWludDhBcnJheShpbWFnZURhdGEpLCBbdGlsZVNpemUsIHRpbGVTaXplLCA0XSwgWzQsIDQgKiB0aWxlU2l6ZSwgMV0sIDApOyAvLyBUaWxlIHNpemUgbXVzdCBiZSBtYWludGFpbmVkIHRocm91Z2ggdGhlIGxpZmUgb2YgdGhlIHdvcmtlcgoKICAgIChfbWFydGluaSA9IG1hcnRpbmkpICE9PSBudWxsICYmIF9tYXJ0aW5pICE9PSB2b2lkIDAgPyBfbWFydGluaSA6IG1hcnRpbmkgPSBuZXcgTWFydGluaSh0aWxlU2l6ZSArIDEpOwogICAgdmFyIHRlcnJhaW4gPSByZ2JUZXJyYWluVG9HcmlkKHBpeGVscyk7CiAgICB2YXIgdGlsZSA9IG1hcnRpbmkuY3JlYXRlVGlsZSh0ZXJyYWluKTsgLy8gZ2V0IGEgbWVzaCAodmVydGljZXMgYW5kIHRyaWFuZ2xlcyBpbmRpY2VzKSBmb3IgYSAxMG0gZXJyb3IKCiAgICB2YXIgbWVzaCA9IHRpbGUuZ2V0TWVzaChlcnJvckxldmVsLCBwYXJhbWV0ZXJzLm1heExlbmd0aCk7CiAgICByZXR1cm4gY3JlYXRlUXVhbnRpemVkTWVzaERhdGEodGlsZSwgbWVzaCwgdGlsZVNpemUpOwogIH0KCiAgc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7CiAgICB2YXIgX21zZyRkYXRhID0gbXNnLmRhdGEsCiAgICAgICAgaWQgPSBfbXNnJGRhdGEuaWQsCiAgICAgICAgcGF5bG9hZCA9IF9tc2ckZGF0YS5wYXlsb2FkOwogICAgaWYgKGlkID09IG51bGwpIHJldHVybjsKICAgIHZhciBvYmplY3RzID0gW107CiAgICB2YXIgcmVzID0gbnVsbDsKCiAgICB0cnkgewogICAgICByZXMgPSBkZWNvZGVUZXJyYWluKHBheWxvYWQpOwogICAgICBvYmplY3RzLnB1c2gocmVzLmluZGljZXMuYnVmZmVyKTsKICAgICAgb2JqZWN0cy5wdXNoKHJlcy5xdWFudGl6ZWRWZXJ0aWNlcy5idWZmZXIpOwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgICBpZDogaWQsCiAgICAgICAgcGF5bG9hZDogcmVzCiAgICAgIH0sIG9iamVjdHMpOwogICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgIGlkOiBpZCwKICAgICAgICBlcnI6IGVyci50b1N0cmluZygpCiAgICAgIH0pOwogICAgfSBmaW5hbGx5IHsKICAgICAgcmVzID0gbnVsbDsKICAgICAgb2JqZWN0cyA9IG51bGw7CiAgICB9CiAgfTsKCn0pKCk7Cgo=', null, false);
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
