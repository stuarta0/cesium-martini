'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };

  var _super = RegExp.prototype;

  var _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    _groups.set(_this, groups || _groups.get(re));

    return _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  _inherits(BabelRegExp, RegExp);

  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    if (result) result.groups = buildGroups(result, this);
    return result;
  };

  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;

        if (typeof args[args.length - 1] !== "object") {
          args = [].slice.call(args);
          args.push(buildGroups(args, _this));
        }

        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }

  return _wrapRegExp.apply(this, arguments);
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

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

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

    _defineProperty(this, "decodeRgb", null);

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
    this.decodeRgb = opts.decodeRgb;
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

/* This file is automatically rebuilt by the Cesium build process. */
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule$1(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/* This file is automatically rebuilt by the Cesium build process. */

var punycode = createCommonjsModule$1(function (module, exports) {
(function(root) {

	/** Detect free variables */
	var freeExports = exports &&
		!exports.nodeType && exports;
	var freeModule = module &&
		!module.nodeType && module;
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(commonjsGlobal));
});

var IPv6 = createCommonjsModule$1(function (module) {
/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.19.7
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (module.exports) {
    // Node
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.IPv6 = factory(root);
  }
}(commonjsGlobal, function (root) {

  /*
  var _in = "fe80:0000:0000:0000:0204:61ff:fe9d:f156";
  var _out = IPv6.best(_in);
  var _expected = "fe80::204:61ff:fe9d:f156";

  console.log(_in, _out, _expected, _out === _expected);
  */

  // save current IPv6 variable, if any
  var _IPv6 = root && root.IPv6;

  function bestPresentation(address) {
    // based on:
    // Javascript to test an IPv6 address for proper format, and to
    // present the "best text representation" according to IETF Draft RFC at
    // http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04
    // 8 Feb 2010 Rich Brown, Dartware, LLC
    // Please feel free to use this code as long as you provide a link to
    // http://www.intermapper.com
    // http://intermapper.com/support/tools/IPV6-Validator.aspx
    // http://download.dartware.com/thirdparty/ipv6validator.js

    var _address = address.toLowerCase();
    var segments = _address.split(':');
    var length = segments.length;
    var total = 8;

    // trim colons (:: or ::a:b:c… or …a:b:c::)
    if (segments[0] === '' && segments[1] === '' && segments[2] === '') {
      // must have been ::
      // remove first two items
      segments.shift();
      segments.shift();
    } else if (segments[0] === '' && segments[1] === '') {
      // must have been ::xxxx
      // remove the first item
      segments.shift();
    } else if (segments[length - 1] === '' && segments[length - 2] === '') {
      // must have been xxxx::
      segments.pop();
    }

    length = segments.length;

    // adjust total segments for IPv4 trailer
    if (segments[length - 1].indexOf('.') !== -1) {
      // found a "." which means IPv4
      total = 7;
    }

    // fill empty segments them with "0000"
    var pos;
    for (pos = 0; pos < length; pos++) {
      if (segments[pos] === '') {
        break;
      }
    }

    if (pos < total) {
      segments.splice(pos, 1, '0000');
      while (segments.length < total) {
        segments.splice(pos, 0, '0000');
      }
    }

    // strip leading zeros
    var _segments;
    for (var i = 0; i < total; i++) {
      _segments = segments[i].split('');
      for (var j = 0; j < 3 ; j++) {
        if (_segments[0] === '0' && _segments.length > 1) {
          _segments.splice(0,1);
        } else {
          break;
        }
      }

      segments[i] = _segments.join('');
    }

    // find longest sequence of zeroes and coalesce them into one segment
    var best = -1;
    var _best = 0;
    var _current = 0;
    var current = -1;
    var inzeroes = false;
    // i; already declared

    for (i = 0; i < total; i++) {
      if (inzeroes) {
        if (segments[i] === '0') {
          _current += 1;
        } else {
          inzeroes = false;
          if (_current > _best) {
            best = current;
            _best = _current;
          }
        }
      } else {
        if (segments[i] === '0') {
          inzeroes = true;
          current = i;
          _current = 1;
        }
      }
    }

    if (_current > _best) {
      best = current;
      _best = _current;
    }

    if (_best > 1) {
      segments.splice(best, _best, '');
    }

    length = segments.length;

    // assemble remaining segments
    var result = '';
    if (segments[0] === '')  {
      result = ':';
    }

    for (i = 0; i < length; i++) {
      result += segments[i];
      if (i === length - 1) {
        break;
      }

      result += ':';
    }

    if (segments[length - 1] === '') {
      result += ':';
    }

    return result;
  }

  function noConflict() {
    /*jshint validthis: true */
    if (root.IPv6 === this) {
      root.IPv6 = _IPv6;
    }

    return this;
  }

  return {
    best: bestPresentation,
    noConflict: noConflict
  };
}));
});

var SecondLevelDomains = createCommonjsModule$1(function (module) {
/*!
 * URI.js - Mutating URLs
 * Second Level Domain (SLD) Support
 *
 * Version: 1.19.7
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (module.exports) {
    // Node
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.SecondLevelDomains = factory(root);
  }
}(commonjsGlobal, function (root) {

  // save current SecondLevelDomains variable, if any
  var _SecondLevelDomains = root && root.SecondLevelDomains;

  var SLD = {
    // list of known Second Level Domains
    // converted list of SLDs from https://github.com/gavingmiller/second-level-domains
    // ----
    // publicsuffix.org is more current and actually used by a couple of browsers internally.
    // downside is it also contains domains like "dyndns.org" - which is fine for the security
    // issues browser have to deal with (SOP for cookies, etc) - but is way overboard for URI.js
    // ----
    list: {
      'ac':' com gov mil net org ',
      'ae':' ac co gov mil name net org pro sch ',
      'af':' com edu gov net org ',
      'al':' com edu gov mil net org ',
      'ao':' co ed gv it og pb ',
      'ar':' com edu gob gov int mil net org tur ',
      'at':' ac co gv or ',
      'au':' asn com csiro edu gov id net org ',
      'ba':' co com edu gov mil net org rs unbi unmo unsa untz unze ',
      'bb':' biz co com edu gov info net org store tv ',
      'bh':' biz cc com edu gov info net org ',
      'bn':' com edu gov net org ',
      'bo':' com edu gob gov int mil net org tv ',
      'br':' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
      'bs':' com edu gov net org ',
      'bz':' du et om ov rg ',
      'ca':' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
      'ck':' biz co edu gen gov info net org ',
      'cn':' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
      'co':' com edu gov mil net nom org ',
      'cr':' ac c co ed fi go or sa ',
      'cy':' ac biz com ekloges gov ltd name net org parliament press pro tm ',
      'do':' art com edu gob gov mil net org sld web ',
      'dz':' art asso com edu gov net org pol ',
      'ec':' com edu fin gov info med mil net org pro ',
      'eg':' com edu eun gov mil name net org sci ',
      'er':' com edu gov ind mil net org rochest w ',
      'es':' com edu gob nom org ',
      'et':' biz com edu gov info name net org ',
      'fj':' ac biz com info mil name net org pro ',
      'fk':' ac co gov net nom org ',
      'fr':' asso com f gouv nom prd presse tm ',
      'gg':' co net org ',
      'gh':' com edu gov mil org ',
      'gn':' ac com gov net org ',
      'gr':' com edu gov mil net org ',
      'gt':' com edu gob ind mil net org ',
      'gu':' com edu gov net org ',
      'hk':' com edu gov idv net org ',
      'hu':' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
      'id':' ac co go mil net or sch web ',
      'il':' ac co gov idf k12 muni net org ',
      'in':' ac co edu ernet firm gen gov i ind mil net nic org res ',
      'iq':' com edu gov i mil net org ',
      'ir':' ac co dnssec gov i id net org sch ',
      'it':' edu gov ',
      'je':' co net org ',
      'jo':' com edu gov mil name net org sch ',
      'jp':' ac ad co ed go gr lg ne or ',
      'ke':' ac co go info me mobi ne or sc ',
      'kh':' com edu gov mil net org per ',
      'ki':' biz com de edu gov info mob net org tel ',
      'km':' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
      'kn':' edu gov net org ',
      'kr':' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
      'kw':' com edu gov net org ',
      'ky':' com edu gov net org ',
      'kz':' com edu gov mil net org ',
      'lb':' com edu gov net org ',
      'lk':' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
      'lr':' com edu gov net org ',
      'lv':' asn com conf edu gov id mil net org ',
      'ly':' com edu gov id med net org plc sch ',
      'ma':' ac co gov m net org press ',
      'mc':' asso tm ',
      'me':' ac co edu gov its net org priv ',
      'mg':' com edu gov mil nom org prd tm ',
      'mk':' com edu gov inf name net org pro ',
      'ml':' com edu gov net org presse ',
      'mn':' edu gov org ',
      'mo':' com edu gov net org ',
      'mt':' com edu gov net org ',
      'mv':' aero biz com coop edu gov info int mil museum name net org pro ',
      'mw':' ac co com coop edu gov int museum net org ',
      'mx':' com edu gob net org ',
      'my':' com edu gov mil name net org sch ',
      'nf':' arts com firm info net other per rec store web ',
      'ng':' biz com edu gov mil mobi name net org sch ',
      'ni':' ac co com edu gob mil net nom org ',
      'np':' com edu gov mil net org ',
      'nr':' biz com edu gov info net org ',
      'om':' ac biz co com edu gov med mil museum net org pro sch ',
      'pe':' com edu gob mil net nom org sld ',
      'ph':' com edu gov i mil net ngo org ',
      'pk':' biz com edu fam gob gok gon gop gos gov net org web ',
      'pl':' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
      'pr':' ac biz com edu est gov info isla name net org pro prof ',
      'ps':' com edu gov net org plo sec ',
      'pw':' belau co ed go ne or ',
      'ro':' arts com firm info nom nt org rec store tm www ',
      'rs':' ac co edu gov in org ',
      'sb':' com edu gov net org ',
      'sc':' com edu gov net org ',
      'sh':' co com edu gov net nom org ',
      'sl':' com edu gov net org ',
      'st':' co com consulado edu embaixada gov mil net org principe saotome store ',
      'sv':' com edu gob org red ',
      'sz':' ac co org ',
      'tr':' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
      'tt':' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
      'tw':' club com ebiz edu game gov idv mil net org ',
      'mu':' ac co com gov net or org ',
      'mz':' ac co edu gov org ',
      'na':' co com ',
      'nz':' ac co cri geek gen govt health iwi maori mil net org parliament school ',
      'pa':' abo ac com edu gob ing med net nom org sld ',
      'pt':' com edu gov int net nome org publ ',
      'py':' com edu gov mil net org ',
      'qa':' com edu gov mil net org ',
      're':' asso com nom ',
      'ru':' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
      'rw':' ac co com edu gouv gov int mil net ',
      'sa':' com edu gov med net org pub sch ',
      'sd':' com edu gov info med net org tv ',
      'se':' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
      'sg':' com edu gov idn net org per ',
      'sn':' art com edu gouv org perso univ ',
      'sy':' com edu gov mil net news org ',
      'th':' ac co go in mi net or ',
      'tj':' ac biz co com edu go gov info int mil name net nic org test web ',
      'tn':' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
      'tz':' ac co go ne or ',
      'ua':' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
      'ug':' ac co go ne or org sc ',
      'uk':' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
      'us':' dni fed isa kids nsn ',
      'uy':' com edu gub mil net org ',
      've':' co com edu gob info mil net org web ',
      'vi':' co com k12 net org ',
      'vn':' ac biz com edu gov health info int name net org pro ',
      'ye':' co com gov ltd me net org plc ',
      'yu':' ac co edu gov org ',
      'za':' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
      'zm':' ac co com edu gov net org sch ',
      // https://en.wikipedia.org/wiki/CentralNic#Second-level_domains
      'com': 'ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ',
      'net': 'gb jp se uk ',
      'org': 'ae',
      'de': 'com '
    },
    // gorhill 2013-10-25: Using indexOf() instead Regexp(). Significant boost
    // in both performance and memory footprint. No initialization required.
    // http://jsperf.com/uri-js-sld-regex-vs-binary-search/4
    // Following methods use lastIndexOf() rather than array.split() in order
    // to avoid any memory allocations.
    has: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') >= 0;
    },
    is: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset >= 0) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
    },
    get: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return null;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return null;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return null;
      }
      if (sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') < 0) {
        return null;
      }
      return domain.slice(sldOffset+1);
    },
    noConflict: function(){
      if (root.SecondLevelDomains === this) {
        root.SecondLevelDomains = _SecondLevelDomains;
      }
      return this;
    }
  };

  return SLD;
}));
});

var URI = createCommonjsModule$1(function (module) {
/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.19.7
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (module.exports) {
    // Node
    module.exports = factory(punycode, IPv6, SecondLevelDomains);
  } else {
    // Browser globals (root is window)
    root.URI = factory(root.punycode, root.IPv6, root.SecondLevelDomains, root);
  }
}(commonjsGlobal, function (punycode, IPv6, SLD, root) {
  /*global location, escape, unescape */
  // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
  /*jshint camelcase: false */

  // save current URI variable, if any
  var _URI = root && root.URI;

  function URI(url, base) {
    var _urlSupplied = arguments.length >= 1;
    var _baseSupplied = arguments.length >= 2;

    // Allow instantiation without the 'new' keyword
    if (!(this instanceof URI)) {
      if (_urlSupplied) {
        if (_baseSupplied) {
          return new URI(url, base);
        }

        return new URI(url);
      }

      return new URI();
    }

    if (url === undefined) {
      if (_urlSupplied) {
        throw new TypeError('undefined is not a valid argument for URI');
      }

      if (typeof location !== 'undefined') {
        url = location.href + '';
      } else {
        url = '';
      }
    }

    if (url === null) {
      if (_urlSupplied) {
        throw new TypeError('null is not a valid argument for URI');
      }
    }

    this.href(url);

    // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
    if (base !== undefined) {
      return this.absoluteTo(base);
    }

    return this;
  }

  function isInteger(value) {
    return /^[0-9]+$/.test(value);
  }

  URI.version = '1.19.7';

  var p = URI.prototype;
  var hasOwn = Object.prototype.hasOwnProperty;

  function escapeRegEx(string) {
    // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
    return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }

  function getType(value) {
    // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
    if (value === undefined) {
      return 'Undefined';
    }

    return String(Object.prototype.toString.call(value)).slice(8, -1);
  }

  function isArray(obj) {
    return getType(obj) === 'Array';
  }

  function filterArrayValues(data, value) {
    var lookup = {};
    var i, length;

    if (getType(value) === 'RegExp') {
      lookup = null;
    } else if (isArray(value)) {
      for (i = 0, length = value.length; i < length; i++) {
        lookup[value[i]] = true;
      }
    } else {
      lookup[value] = true;
    }

    for (i = 0, length = data.length; i < length; i++) {
      /*jshint laxbreak: true */
      var _match = lookup && lookup[data[i]] !== undefined
        || !lookup && value.test(data[i]);
      /*jshint laxbreak: false */
      if (_match) {
        data.splice(i, 1);
        length--;
        i--;
      }
    }

    return data;
  }

  function arrayContains(list, value) {
    var i, length;

    // value may be string, number, array, regexp
    if (isArray(value)) {
      // Note: this can be optimized to O(n) (instead of current O(m * n))
      for (i = 0, length = value.length; i < length; i++) {
        if (!arrayContains(list, value[i])) {
          return false;
        }
      }

      return true;
    }

    var _type = getType(value);
    for (i = 0, length = list.length; i < length; i++) {
      if (_type === 'RegExp') {
        if (typeof list[i] === 'string' && list[i].match(value)) {
          return true;
        }
      } else if (list[i] === value) {
        return true;
      }
    }

    return false;
  }

  function arraysEqual(one, two) {
    if (!isArray(one) || !isArray(two)) {
      return false;
    }

    // arrays can't be equal if they have different amount of content
    if (one.length !== two.length) {
      return false;
    }

    one.sort();
    two.sort();

    for (var i = 0, l = one.length; i < l; i++) {
      if (one[i] !== two[i]) {
        return false;
      }
    }

    return true;
  }

  function trimSlashes(text) {
    var trim_expression = /^\/+|\/+$/g;
    return text.replace(trim_expression, '');
  }

  URI._parts = function() {
    return {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      urn: null,
      port: null,
      path: null,
      query: null,
      fragment: null,
      // state
      preventInvalidHostname: URI.preventInvalidHostname,
      duplicateQueryParameters: URI.duplicateQueryParameters,
      escapeQuerySpace: URI.escapeQuerySpace
    };
  };
  // state: throw on invalid hostname
  // see https://github.com/medialize/URI.js/pull/345
  // and https://github.com/medialize/URI.js/issues/354
  URI.preventInvalidHostname = false;
  // state: allow duplicate query parameters (a=1&a=1)
  URI.duplicateQueryParameters = false;
  // state: replaces + with %20 (space in query strings)
  URI.escapeQuerySpace = true;
  // static properties
  URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
  URI.idn_expression = /[^a-z0-9\._-]/i;
  URI.punycode_expression = /(xn--)/i;
  // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
  URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  // credits to Rich Brown
  // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
  // specification: http://www.ietf.org/rfc/rfc4291.txt
  URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  // expression used is "gruber revised" (@gruber v2) determined to be the
  // best solution in a regex-golf we did a couple of ages ago at
  // * http://mathiasbynens.be/demo/url-regex
  // * http://rodneyrehm.de/t/url-regex.html
  URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
  URI.findUri = {
    // valid "scheme://" or "www."
    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
    // everything up to the next whitespace
    end: /[\s\r\n]|$/,
    // trim trailing punctuation captured by end RegExp
    trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
    // balanced parens inclusion (), [], {}, <>
    parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g,
  };
  // http://www.iana.org/assignments/uri-schemes.html
  // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
  URI.defaultPorts = {
    http: '80',
    https: '443',
    ftp: '21',
    gopher: '70',
    ws: '80',
    wss: '443'
  };
  // list of protocols which always require a hostname
  URI.hostProtocols = [
    'http',
    'https'
  ];

  // allowed hostname characters according to RFC 3986
  // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
  // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . - _
  URI.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/;
  // map DOM Elements to their URI attribute
  URI.domAttributes = {
    'a': 'href',
    'blockquote': 'cite',
    'link': 'href',
    'base': 'href',
    'script': 'src',
    'form': 'action',
    'img': 'src',
    'area': 'href',
    'iframe': 'src',
    'embed': 'src',
    'source': 'src',
    'track': 'src',
    'input': 'src', // but only if type="image"
    'audio': 'src',
    'video': 'src'
  };
  URI.getDomAttribute = function(node) {
    if (!node || !node.nodeName) {
      return undefined;
    }

    var nodeName = node.nodeName.toLowerCase();
    // <input> should only expose src for type="image"
    if (nodeName === 'input' && node.type !== 'image') {
      return undefined;
    }

    return URI.domAttributes[nodeName];
  };

  function escapeForDumbFirefox36(value) {
    // https://github.com/medialize/URI.js/issues/91
    return escape(value);
  }

  // encoding / decoding according to RFC3986
  function strictEncodeURIComponent(string) {
    // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
    return encodeURIComponent(string)
      .replace(/[!'()*]/g, escapeForDumbFirefox36)
      .replace(/\*/g, '%2A');
  }
  URI.encode = strictEncodeURIComponent;
  URI.decode = decodeURIComponent;
  URI.iso8859 = function() {
    URI.encode = escape;
    URI.decode = unescape;
  };
  URI.unicode = function() {
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
  };
  URI.characters = {
    pathname: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
        map: {
          // -._~!'()*
          '%24': '$',
          '%26': '&',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%3A': ':',
          '%40': '@'
        }
      },
      decode: {
        expression: /[\/\?#]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23'
        }
      }
    },
    reserved: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
        map: {
          // gen-delims
          '%3A': ':',
          '%2F': '/',
          '%3F': '?',
          '%23': '#',
          '%5B': '[',
          '%5D': ']',
          '%40': '@',
          // sub-delims
          '%21': '!',
          '%24': '$',
          '%26': '&',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '='
        }
      }
    },
    urnpath: {
      // The characters under `encode` are the characters called out by RFC 2141 as being acceptable
      // for usage in a URN. RFC2141 also calls out "-", ".", and "_" as acceptable characters, but
      // these aren't encoded by encodeURIComponent, so we don't have to call them out here. Also
      // note that the colon character is not featured in the encoding map; this is because URI.js
      // gives the colons in URNs semantic meaning as the delimiters of path segements, and so it
      // should not appear unencoded in a segment itself.
      // See also the note above about RFC3986 and capitalalized hex digits.
      encode: {
        expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,
        map: {
          '%21': '!',
          '%24': '$',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%40': '@'
        }
      },
      // These characters are the characters called out by RFC2141 as "reserved" characters that
      // should never appear in a URN, plus the colon character (see note above).
      decode: {
        expression: /[\/\?#:]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23',
          ':': '%3A'
        }
      }
    }
  };
  URI.encodeQuery = function(string, escapeQuerySpace) {
    var escaped = URI.encode(string + '');
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
  };
  URI.decodeQuery = function(string, escapeQuerySpace) {
    string += '';
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    try {
      return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
    } catch(e) {
      // we're not going to mess with weird encodings,
      // give up and return the undecoded original string
      // see https://github.com/medialize/URI.js/issues/87
      // see https://github.com/medialize/URI.js/issues/92
      return string;
    }
  };
  // generate encode/decode path functions
  var _parts = {'encode':'encode', 'decode':'decode'};
  var _part;
  var generateAccessor = function(_group, _part) {
    return function(string) {
      try {
        return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function(c) {
          return URI.characters[_group][_part].map[c];
        });
      } catch (e) {
        // we're not going to mess with weird encodings,
        // give up and return the undecoded original string
        // see https://github.com/medialize/URI.js/issues/87
        // see https://github.com/medialize/URI.js/issues/92
        return string;
      }
    };
  };

  for (_part in _parts) {
    URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
    URI[_part + 'UrnPathSegment'] = generateAccessor('urnpath', _parts[_part]);
  }

  var generateSegmentedPathFunction = function(_sep, _codingFuncName, _innerCodingFuncName) {
    return function(string) {
      // Why pass in names of functions, rather than the function objects themselves? The
      // definitions of some functions (but in particular, URI.decode) will occasionally change due
      // to URI.js having ISO8859 and Unicode modes. Passing in the name and getting it will ensure
      // that the functions we use here are "fresh".
      var actualCodingFunc;
      if (!_innerCodingFuncName) {
        actualCodingFunc = URI[_codingFuncName];
      } else {
        actualCodingFunc = function(string) {
          return URI[_codingFuncName](URI[_innerCodingFuncName](string));
        };
      }

      var segments = (string + '').split(_sep);

      for (var i = 0, length = segments.length; i < length; i++) {
        segments[i] = actualCodingFunc(segments[i]);
      }

      return segments.join(_sep);
    };
  };

  // This takes place outside the above loop because we don't want, e.g., encodeUrnPath functions.
  URI.decodePath = generateSegmentedPathFunction('/', 'decodePathSegment');
  URI.decodeUrnPath = generateSegmentedPathFunction(':', 'decodeUrnPathSegment');
  URI.recodePath = generateSegmentedPathFunction('/', 'encodePathSegment', 'decode');
  URI.recodeUrnPath = generateSegmentedPathFunction(':', 'encodeUrnPathSegment', 'decode');

  URI.encodeReserved = generateAccessor('reserved', 'encode');

  URI.parse = function(string, parts) {
    var pos;
    if (!parts) {
      parts = {
        preventInvalidHostname: URI.preventInvalidHostname
      };
    }
    // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]

    // extract fragment
    pos = string.indexOf('#');
    if (pos > -1) {
      // escaping?
      parts.fragment = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract query
    pos = string.indexOf('?');
    if (pos > -1) {
      // escaping?
      parts.query = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // slashes and backslashes have lost all meaning for the web protocols (https, http, wss, ws)
    string = string.replace(/^(https?|ftp|wss?)?:[/\\]*/, '$1://');

    // extract protocol
    if (string.substring(0, 2) === '//') {
      // relative-scheme
      parts.protocol = null;
      string = string.substring(2);
      // extract "user:pass@host:port"
      string = URI.parseAuthority(string, parts);
    } else {
      pos = string.indexOf(':');
      if (pos > -1) {
        parts.protocol = string.substring(0, pos) || null;
        if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
          // : may be within the path
          parts.protocol = undefined;
        } else if (string.substring(pos + 1, pos + 3).replace(/\\/g, '/') === '//') {
          string = string.substring(pos + 3);

          // extract "user:pass@host:port"
          string = URI.parseAuthority(string, parts);
        } else {
          string = string.substring(pos + 1);
          parts.urn = true;
        }
      }
    }

    // what's left must be the path
    parts.path = string;

    // and we're done
    return parts;
  };
  URI.parseHost = function(string, parts) {
    if (!string) {
      string = '';
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://github.com/joyent/node/blob/386fd24f49b0e9d1a8a076592a404168faeecc34/lib/url.js#L115-L124
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    // https://github.com/medialize/URI.js/pull/233
    string = string.replace(/\\/g, '/');

    // extract host:port
    var pos = string.indexOf('/');
    var bracketPos;
    var t;

    if (pos === -1) {
      pos = string.length;
    }

    if (string.charAt(0) === '[') {
      // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
      // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
      // IPv6+port in the format [2001:db8::1]:80 (for the time being)
      bracketPos = string.indexOf(']');
      parts.hostname = string.substring(1, bracketPos) || null;
      parts.port = string.substring(bracketPos + 2, pos) || null;
      if (parts.port === '/') {
        parts.port = null;
      }
    } else {
      var firstColon = string.indexOf(':');
      var firstSlash = string.indexOf('/');
      var nextColon = string.indexOf(':', firstColon + 1);
      if (nextColon !== -1 && (firstSlash === -1 || nextColon < firstSlash)) {
        // IPv6 host contains multiple colons - but no port
        // this notation is actually not allowed by RFC 3986, but we're a liberal parser
        parts.hostname = string.substring(0, pos) || null;
        parts.port = null;
      } else {
        t = string.substring(0, pos).split(':');
        parts.hostname = t[0] || null;
        parts.port = t[1] || null;
      }
    }

    if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
      pos++;
      string = '/' + string;
    }

    if (parts.preventInvalidHostname) {
      URI.ensureValidHostname(parts.hostname, parts.protocol);
    }

    if (parts.port) {
      URI.ensureValidPort(parts.port);
    }

    return string.substring(pos) || '/';
  };
  URI.parseAuthority = function(string, parts) {
    string = URI.parseUserinfo(string, parts);
    return URI.parseHost(string, parts);
  };
  URI.parseUserinfo = function(string, parts) {
    // extract username:password
    var _string = string;
    var firstBackSlash = string.indexOf('\\');
    if (firstBackSlash !== -1) {
      string = string.replace(/\\/g, '/');
    }
    var firstSlash = string.indexOf('/');
    var pos = string.lastIndexOf('@', firstSlash > -1 ? firstSlash : string.length - 1);
    var t;

    // authority@ must come before /path or \path
    if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
      t = string.substring(0, pos).split(':');
      parts.username = t[0] ? URI.decode(t[0]) : null;
      t.shift();
      parts.password = t[0] ? URI.decode(t.join(':')) : null;
      string = _string.substring(pos + 1);
    } else {
      parts.username = null;
      parts.password = null;
    }

    return string;
  };
  URI.parseQuery = function(string, escapeQuerySpace) {
    if (!string) {
      return {};
    }

    // throw out the funky business - "?"[name"="value"&"]+
    string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

    if (!string) {
      return {};
    }

    var items = {};
    var splits = string.split('&');
    var length = splits.length;
    var v, name, value;

    for (var i = 0; i < length; i++) {
      v = splits[i].split('=');
      name = URI.decodeQuery(v.shift(), escapeQuerySpace);
      // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
      value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;

      if (name === '__proto__') {
        // ignore attempt at exploiting JavaScript internals
        continue;
      } else if (hasOwn.call(items, name)) {
        if (typeof items[name] === 'string' || items[name] === null) {
          items[name] = [items[name]];
        }

        items[name].push(value);
      } else {
        items[name] = value;
      }
    }

    return items;
  };

  URI.build = function(parts) {
    var t = '';
    var requireAbsolutePath = false;

    if (parts.protocol) {
      t += parts.protocol + ':';
    }

    if (!parts.urn && (t || parts.hostname)) {
      t += '//';
      requireAbsolutePath = true;
    }

    t += (URI.buildAuthority(parts) || '');

    if (typeof parts.path === 'string') {
      if (parts.path.charAt(0) !== '/' && requireAbsolutePath) {
        t += '/';
      }

      t += parts.path;
    }

    if (typeof parts.query === 'string' && parts.query) {
      t += '?' + parts.query;
    }

    if (typeof parts.fragment === 'string' && parts.fragment) {
      t += '#' + parts.fragment;
    }
    return t;
  };
  URI.buildHost = function(parts) {
    var t = '';

    if (!parts.hostname) {
      return '';
    } else if (URI.ip6_expression.test(parts.hostname)) {
      t += '[' + parts.hostname + ']';
    } else {
      t += parts.hostname;
    }

    if (parts.port) {
      t += ':' + parts.port;
    }

    return t;
  };
  URI.buildAuthority = function(parts) {
    return URI.buildUserinfo(parts) + URI.buildHost(parts);
  };
  URI.buildUserinfo = function(parts) {
    var t = '';

    if (parts.username) {
      t += URI.encode(parts.username);
    }

    if (parts.password) {
      t += ':' + URI.encode(parts.password);
    }

    if (t) {
      t += '@';
    }

    return t;
  };
  URI.buildQuery = function(data, duplicateQueryParameters, escapeQuerySpace) {
    // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
    // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
    // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
    // URI.js treats the query string as being application/x-www-form-urlencoded
    // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type

    var t = '';
    var unique, key, i, length;
    for (key in data) {
      if (key === '__proto__') {
        // ignore attempt at exploiting JavaScript internals
        continue;
      } else if (hasOwn.call(data, key)) {
        if (isArray(data[key])) {
          unique = {};
          for (i = 0, length = data[key].length; i < length; i++) {
            if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
              t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
              if (duplicateQueryParameters !== true) {
                unique[data[key][i] + ''] = true;
              }
            }
          }
        } else if (data[key] !== undefined) {
          t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
        }
      }
    }

    return t.substring(1);
  };
  URI.buildQueryParameter = function(name, value, escapeQuerySpace) {
    // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
    // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
    return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
  };

  URI.addQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.addQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (data[name] === undefined) {
        data[name] = value;
        return;
      } else if (typeof data[name] === 'string') {
        data[name] = [data[name]];
      }

      if (!isArray(value)) {
        value = [value];
      }

      data[name] = (data[name] || []).concat(value);
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }
  };

  URI.setQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.setQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      data[name] = value === undefined ? null : value;
    } else {
      throw new TypeError('URI.setQuery() accepts an object, string as the name parameter');
    }
  };

  URI.removeQuery = function(data, name, value) {
    var i, length, key;

    if (isArray(name)) {
      for (i = 0, length = name.length; i < length; i++) {
        data[name[i]] = undefined;
      }
    } else if (getType(name) === 'RegExp') {
      for (key in data) {
        if (name.test(key)) {
          data[key] = undefined;
        }
      }
    } else if (typeof name === 'object') {
      for (key in name) {
        if (hasOwn.call(name, key)) {
          URI.removeQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (value !== undefined) {
        if (getType(value) === 'RegExp') {
          if (!isArray(data[name]) && value.test(data[name])) {
            data[name] = undefined;
          } else {
            data[name] = filterArrayValues(data[name], value);
          }
        } else if (data[name] === String(value) && (!isArray(value) || value.length === 1)) {
          data[name] = undefined;
        } else if (isArray(data[name])) {
          data[name] = filterArrayValues(data[name], value);
        }
      } else {
        data[name] = undefined;
      }
    } else {
      throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
    }
  };
  URI.hasQuery = function(data, name, value, withinArray) {
    switch (getType(name)) {
      case 'String':
        // Nothing to do here
        break;

      case 'RegExp':
        for (var key in data) {
          if (hasOwn.call(data, key)) {
            if (name.test(key) && (value === undefined || URI.hasQuery(data, key, value))) {
              return true;
            }
          }
        }

        return false;

      case 'Object':
        for (var _key in name) {
          if (hasOwn.call(name, _key)) {
            if (!URI.hasQuery(data, _key, name[_key])) {
              return false;
            }
          }
        }

        return true;

      default:
        throw new TypeError('URI.hasQuery() accepts a string, regular expression or object as the name parameter');
    }

    switch (getType(value)) {
      case 'Undefined':
        // true if exists (but may be empty)
        return name in data; // data[name] !== undefined;

      case 'Boolean':
        // true if exists and non-empty
        var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
        return value === _booly;

      case 'Function':
        // allow complex comparison
        return !!value(data[name], name, data);

      case 'Array':
        if (!isArray(data[name])) {
          return false;
        }

        var op = withinArray ? arrayContains : arraysEqual;
        return op(data[name], value);

      case 'RegExp':
        if (!isArray(data[name])) {
          return Boolean(data[name] && data[name].match(value));
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      case 'Number':
        value = String(value);
        /* falls through */
      case 'String':
        if (!isArray(data[name])) {
          return data[name] === value;
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      default:
        throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
    }
  };


  URI.joinPaths = function() {
    var input = [];
    var segments = [];
    var nonEmptySegments = 0;

    for (var i = 0; i < arguments.length; i++) {
      var url = new URI(arguments[i]);
      input.push(url);
      var _segments = url.segment();
      for (var s = 0; s < _segments.length; s++) {
        if (typeof _segments[s] === 'string') {
          segments.push(_segments[s]);
        }

        if (_segments[s]) {
          nonEmptySegments++;
        }
      }
    }

    if (!segments.length || !nonEmptySegments) {
      return new URI('');
    }

    var uri = new URI('').segment(segments);

    if (input[0].path() === '' || input[0].path().slice(0, 1) === '/') {
      uri.path('/' + uri.path());
    }

    return uri.normalize();
  };

  URI.commonPath = function(one, two) {
    var length = Math.min(one.length, two.length);
    var pos;

    // find first non-matching character
    for (pos = 0; pos < length; pos++) {
      if (one.charAt(pos) !== two.charAt(pos)) {
        pos--;
        break;
      }
    }

    if (pos < 1) {
      return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
    }

    // revert to last /
    if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
      pos = one.substring(0, pos).lastIndexOf('/');
    }

    return one.substring(0, pos + 1);
  };

  URI.withinString = function(string, callback, options) {
    options || (options = {});
    var _start = options.start || URI.findUri.start;
    var _end = options.end || URI.findUri.end;
    var _trim = options.trim || URI.findUri.trim;
    var _parens = options.parens || URI.findUri.parens;
    var _attributeOpen = /[a-z0-9-]=["']?$/i;

    _start.lastIndex = 0;
    while (true) {
      var match = _start.exec(string);
      if (!match) {
        break;
      }

      var start = match.index;
      if (options.ignoreHtml) {
        // attribut(e=["']?$)
        var attributeOpen = string.slice(Math.max(start - 3, 0), start);
        if (attributeOpen && _attributeOpen.test(attributeOpen)) {
          continue;
        }
      }

      var end = start + string.slice(start).search(_end);
      var slice = string.slice(start, end);
      // make sure we include well balanced parens
      var parensEnd = -1;
      while (true) {
        var parensMatch = _parens.exec(slice);
        if (!parensMatch) {
          break;
        }

        var parensMatchEnd = parensMatch.index + parensMatch[0].length;
        parensEnd = Math.max(parensEnd, parensMatchEnd);
      }

      if (parensEnd > -1) {
        slice = slice.slice(0, parensEnd) + slice.slice(parensEnd).replace(_trim, '');
      } else {
        slice = slice.replace(_trim, '');
      }

      if (slice.length <= match[0].length) {
        // the extract only contains the starting marker of a URI,
        // e.g. "www" or "http://"
        continue;
      }

      if (options.ignore && options.ignore.test(slice)) {
        continue;
      }

      end = start + slice.length;
      var result = callback(slice, start, end, string);
      if (result === undefined) {
        _start.lastIndex = end;
        continue;
      }

      result = String(result);
      string = string.slice(0, start) + result + string.slice(end);
      _start.lastIndex = start + result.length;
    }

    _start.lastIndex = 0;
    return string;
  };

  URI.ensureValidHostname = function(v, protocol) {
    // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
    // they are not part of DNS and therefore ignored by URI.js

    var hasHostname = !!v; // not null and not an empty string
    var hasProtocol = !!protocol;
    var rejectEmptyHostname = false;

    if (hasProtocol) {
      rejectEmptyHostname = arrayContains(URI.hostProtocols, protocol);
    }

    if (rejectEmptyHostname && !hasHostname) {
      throw new TypeError('Hostname cannot be empty, if protocol is ' + protocol);
    } else if (v && v.match(URI.invalid_hostname_characters)) {
      // test punycode
      if (!punycode) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
      }
      if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_]');
      }
    }
  };

  URI.ensureValidPort = function (v) {
    if (!v) {
      return;
    }

    var port = Number(v);
    if (isInteger(port) && (port > 0) && (port < 65536)) {
      return;
    }

    throw new TypeError('Port "' + v + '" is not a valid port');
  };

  // noConflict
  URI.noConflict = function(removeAll) {
    if (removeAll) {
      var unconflicted = {
        URI: this.noConflict()
      };

      if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
        unconflicted.URITemplate = root.URITemplate.noConflict();
      }

      if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
        unconflicted.IPv6 = root.IPv6.noConflict();
      }

      if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
        unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
      }

      return unconflicted;
    } else if (root.URI === this) {
      root.URI = _URI;
    }

    return this;
  };

  p.build = function(deferBuild) {
    if (deferBuild === true) {
      this._deferred_build = true;
    } else if (deferBuild === undefined || this._deferred_build) {
      this._string = URI.build(this._parts);
      this._deferred_build = false;
    }

    return this;
  };

  p.clone = function() {
    return new URI(this);
  };

  p.valueOf = p.toString = function() {
    return this.build(false)._string;
  };


  function generateSimpleAccessor(_part){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        this._parts[_part] = v || null;
        this.build(!build);
        return this;
      }
    };
  }

  function generatePrefixAccessor(_part, _key){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        if (v !== null) {
          v = v + '';
          if (v.charAt(0) === _key) {
            v = v.substring(1);
          }
        }

        this._parts[_part] = v;
        this.build(!build);
        return this;
      }
    };
  }

  p.protocol = generateSimpleAccessor('protocol');
  p.username = generateSimpleAccessor('username');
  p.password = generateSimpleAccessor('password');
  p.hostname = generateSimpleAccessor('hostname');
  p.port = generateSimpleAccessor('port');
  p.query = generatePrefixAccessor('query', '?');
  p.fragment = generatePrefixAccessor('fragment', '#');

  p.search = function(v, build) {
    var t = this.query(v, build);
    return typeof t === 'string' && t.length ? ('?' + t) : t;
  };
  p.hash = function(v, build) {
    var t = this.fragment(v, build);
    return typeof t === 'string' && t.length ? ('#' + t) : t;
  };

  p.pathname = function(v, build) {
    if (v === undefined || v === true) {
      var res = this._parts.path || (this._parts.hostname ? '/' : '');
      return v ? (this._parts.urn ? URI.decodeUrnPath : URI.decodePath)(res) : res;
    } else {
      if (this._parts.urn) {
        this._parts.path = v ? URI.recodeUrnPath(v) : '';
      } else {
        this._parts.path = v ? URI.recodePath(v) : '/';
      }
      this.build(!build);
      return this;
    }
  };
  p.path = p.pathname;
  p.href = function(href, build) {
    var key;

    if (href === undefined) {
      return this.toString();
    }

    this._string = '';
    this._parts = URI._parts();

    var _URI = href instanceof URI;
    var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
    if (href.nodeName) {
      var attribute = URI.getDomAttribute(href);
      href = href[attribute] || '';
      _object = false;
    }

    // window.location is reported to be an object, but it's not the sort
    // of object we're looking for:
    // * location.protocol ends with a colon
    // * location.query != object.search
    // * location.hash != object.fragment
    // simply serializing the unknown object should do the trick
    // (for location, not for everything...)
    if (!_URI && _object && href.pathname !== undefined) {
      href = href.toString();
    }

    if (typeof href === 'string' || href instanceof String) {
      this._parts = URI.parse(String(href), this._parts);
    } else if (_URI || _object) {
      var src = _URI ? href._parts : href;
      for (key in src) {
        if (key === 'query') { continue; }
        if (hasOwn.call(this._parts, key)) {
          this._parts[key] = src[key];
        }
      }
      if (src.query) {
        this.query(src.query, false);
      }
    } else {
      throw new TypeError('invalid input');
    }

    this.build(!build);
    return this;
  };

  // identification accessors
  p.is = function(what) {
    var ip = false;
    var ip4 = false;
    var ip6 = false;
    var name = false;
    var sld = false;
    var idn = false;
    var punycode = false;
    var relative = !this._parts.urn;

    if (this._parts.hostname) {
      relative = false;
      ip4 = URI.ip4_expression.test(this._parts.hostname);
      ip6 = URI.ip6_expression.test(this._parts.hostname);
      ip = ip4 || ip6;
      name = !ip;
      sld = name && SLD && SLD.has(this._parts.hostname);
      idn = name && URI.idn_expression.test(this._parts.hostname);
      punycode = name && URI.punycode_expression.test(this._parts.hostname);
    }

    switch (what.toLowerCase()) {
      case 'relative':
        return relative;

      case 'absolute':
        return !relative;

      // hostname identification
      case 'domain':
      case 'name':
        return name;

      case 'sld':
        return sld;

      case 'ip':
        return ip;

      case 'ip4':
      case 'ipv4':
      case 'inet4':
        return ip4;

      case 'ip6':
      case 'ipv6':
      case 'inet6':
        return ip6;

      case 'idn':
        return idn;

      case 'url':
        return !this._parts.urn;

      case 'urn':
        return !!this._parts.urn;

      case 'punycode':
        return punycode;
    }

    return null;
  };

  // component specific input validation
  var _protocol = p.protocol;
  var _port = p.port;
  var _hostname = p.hostname;

  p.protocol = function(v, build) {
    if (v) {
      // accept trailing ://
      v = v.replace(/:(\/\/)?$/, '');

      if (!v.match(URI.protocol_expression)) {
        throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
      }
    }

    return _protocol.call(this, v, build);
  };
  p.scheme = p.protocol;
  p.port = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      if (v === 0) {
        v = null;
      }

      if (v) {
        v += '';
        if (v.charAt(0) === ':') {
          v = v.substring(1);
        }

        URI.ensureValidPort(v);
      }
    }
    return _port.call(this, v, build);
  };
  p.hostname = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      var x = { preventInvalidHostname: this._parts.preventInvalidHostname };
      var res = URI.parseHost(v, x);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      v = x.hostname;
      if (this._parts.preventInvalidHostname) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }
    }

    return _hostname.call(this, v, build);
  };

  // compound accessors
  p.origin = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var protocol = this.protocol();
      var authority = this.authority();
      if (!authority) {
        return '';
      }

      return (protocol ? protocol + '://' : '') + this.authority();
    } else {
      var origin = URI(v);
      this
        .protocol(origin.protocol())
        .authority(origin.authority())
        .build(!build);
      return this;
    }
  };
  p.host = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildHost(this._parts) : '';
    } else {
      var res = URI.parseHost(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.authority = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
    } else {
      var res = URI.parseAuthority(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.userinfo = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var t = URI.buildUserinfo(this._parts);
      return t ? t.substring(0, t.length -1) : t;
    } else {
      if (v[v.length-1] !== '@') {
        v += '@';
      }

      URI.parseUserinfo(v, this._parts);
      this.build(!build);
      return this;
    }
  };
  p.resource = function(v, build) {
    var parts;

    if (v === undefined) {
      return this.path() + this.search() + this.hash();
    }

    parts = URI.parse(v);
    this._parts.path = parts.path;
    this._parts.query = parts.query;
    this._parts.fragment = parts.fragment;
    this.build(!build);
    return this;
  };

  // fraction accessors
  p.subdomain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    // convenience, return "www" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // grab domain and add another segment
      var end = this._parts.hostname.length - this.domain().length - 1;
      return this._parts.hostname.substring(0, end) || '';
    } else {
      var e = this._parts.hostname.length - this.domain().length;
      var sub = this._parts.hostname.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(sub));

      if (v && v.charAt(v.length - 1) !== '.') {
        v += '.';
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      if (v) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }

      this._parts.hostname = this._parts.hostname.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.domain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // convenience, return "example.org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // if hostname consists of 1 or 2 segments, it must be the domain
      var t = this._parts.hostname.match(/\./g);
      if (t && t.length < 2) {
        return this._parts.hostname;
      }

      // grab tld and add another segment
      var end = this._parts.hostname.length - this.tld(build).length - 1;
      end = this._parts.hostname.lastIndexOf('.', end -1) + 1;
      return this._parts.hostname.substring(end) || '';
    } else {
      if (!v) {
        throw new TypeError('cannot set domain empty');
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      URI.ensureValidHostname(v, this._parts.protocol);

      if (!this._parts.hostname || this.is('IP')) {
        this._parts.hostname = v;
      } else {
        var replace = new RegExp(escapeRegEx(this.domain()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.tld = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // return "org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      var pos = this._parts.hostname.lastIndexOf('.');
      var tld = this._parts.hostname.substring(pos + 1);

      if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
        return SLD.get(this._parts.hostname) || tld;
      }

      return tld;
    } else {
      var replace;

      if (!v) {
        throw new TypeError('cannot set TLD empty');
      } else if (v.match(/[^a-zA-Z0-9-]/)) {
        if (SLD && SLD.is(v)) {
          replace = new RegExp(escapeRegEx(this.tld()) + '$');
          this._parts.hostname = this._parts.hostname.replace(replace, v);
        } else {
          throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
        }
      } else if (!this._parts.hostname || this.is('IP')) {
        throw new ReferenceError('cannot set TLD on non-domain host');
      } else {
        replace = new RegExp(escapeRegEx(this.tld()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.directory = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path && !this._parts.hostname) {
        return '';
      }

      if (this._parts.path === '/') {
        return '/';
      }

      var end = this._parts.path.length - this.filename().length - 1;
      var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');

      return v ? URI.decodePath(res) : res;

    } else {
      var e = this._parts.path.length - this.filename().length;
      var directory = this._parts.path.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(directory));

      // fully qualifier directories begin with a slash
      if (!this.is('relative')) {
        if (!v) {
          v = '/';
        }

        if (v.charAt(0) !== '/') {
          v = '/' + v;
        }
      }

      // directories always end with a slash
      if (v && v.charAt(v.length - 1) !== '/') {
        v += '/';
      }

      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.filename = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v !== 'string') {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var pos = this._parts.path.lastIndexOf('/');
      var res = this._parts.path.substring(pos+1);

      return v ? URI.decodePathSegment(res) : res;
    } else {
      var mutatedDirectory = false;

      if (v.charAt(0) === '/') {
        v = v.substring(1);
      }

      if (v.match(/\.?\//)) {
        mutatedDirectory = true;
      }

      var replace = new RegExp(escapeRegEx(this.filename()) + '$');
      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);

      if (mutatedDirectory) {
        this.normalizePath(build);
      } else {
        this.build(!build);
      }

      return this;
    }
  };
  p.suffix = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var filename = this.filename();
      var pos = filename.lastIndexOf('.');
      var s, res;

      if (pos === -1) {
        return '';
      }

      // suffix may only contain alnum characters (yup, I made this up.)
      s = filename.substring(pos+1);
      res = (/^[a-z0-9%]+$/i).test(s) ? s : '';
      return v ? URI.decodePathSegment(res) : res;
    } else {
      if (v.charAt(0) === '.') {
        v = v.substring(1);
      }

      var suffix = this.suffix();
      var replace;

      if (!suffix) {
        if (!v) {
          return this;
        }

        this._parts.path += '.' + URI.recodePath(v);
      } else if (!v) {
        replace = new RegExp(escapeRegEx('.' + suffix) + '$');
      } else {
        replace = new RegExp(escapeRegEx(suffix) + '$');
      }

      if (replace) {
        v = URI.recodePath(v);
        this._parts.path = this._parts.path.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.segment = function(segment, v, build) {
    var separator = this._parts.urn ? ':' : '/';
    var path = this.path();
    var absolute = path.substring(0, 1) === '/';
    var segments = path.split(separator);

    if (segment !== undefined && typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (segment !== undefined && typeof segment !== 'number') {
      throw new Error('Bad segment "' + segment + '", must be 0-based integer');
    }

    if (absolute) {
      segments.shift();
    }

    if (segment < 0) {
      // allow negative indexes to address from the end
      segment = Math.max(segments.length + segment, 0);
    }

    if (v === undefined) {
      /*jshint laxbreak: true */
      return segment === undefined
        ? segments
        : segments[segment];
      /*jshint laxbreak: false */
    } else if (segment === null || segments[segment] === undefined) {
      if (isArray(v)) {
        segments = [];
        // collapse empty elements within array
        for (var i=0, l=v.length; i < l; i++) {
          if (!v[i].length && (!segments.length || !segments[segments.length -1].length)) {
            continue;
          }

          if (segments.length && !segments[segments.length -1].length) {
            segments.pop();
          }

          segments.push(trimSlashes(v[i]));
        }
      } else if (v || typeof v === 'string') {
        v = trimSlashes(v);
        if (segments[segments.length -1] === '') {
          // empty trailing elements have to be overwritten
          // to prevent results such as /foo//bar
          segments[segments.length -1] = v;
        } else {
          segments.push(v);
        }
      }
    } else {
      if (v) {
        segments[segment] = trimSlashes(v);
      } else {
        segments.splice(segment, 1);
      }
    }

    if (absolute) {
      segments.unshift('');
    }

    return this.path(segments.join(separator), build);
  };
  p.segmentCoded = function(segment, v, build) {
    var segments, i, l;

    if (typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (v === undefined) {
      segments = this.segment(segment, v, build);
      if (!isArray(segments)) {
        segments = segments !== undefined ? URI.decode(segments) : undefined;
      } else {
        for (i = 0, l = segments.length; i < l; i++) {
          segments[i] = URI.decode(segments[i]);
        }
      }

      return segments;
    }

    if (!isArray(v)) {
      v = (typeof v === 'string' || v instanceof String) ? URI.encode(v) : v;
    } else {
      for (i = 0, l = v.length; i < l; i++) {
        v[i] = URI.encode(v[i]);
      }
    }

    return this.segment(segment, v, build);
  };

  // mutating query string
  var q = p.query;
  p.query = function(v, build) {
    if (v === true) {
      return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    } else if (typeof v === 'function') {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      var result = v.call(this, data);
      this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else if (v !== undefined && typeof v !== 'string') {
      this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else {
      return q.call(this, v, build);
    }
  };
  p.setQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

    if (typeof name === 'string' || name instanceof String) {
      data[name] = value !== undefined ? value : null;
    } else if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          data[key] = name[key];
        }
      }
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }

    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.addQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.addQuery(data, name, value === undefined ? null : value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.removeQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.removeQuery(data, name, value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.hasQuery = function(name, value, withinArray) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return URI.hasQuery(data, name, value, withinArray);
  };
  p.setSearch = p.setQuery;
  p.addSearch = p.addQuery;
  p.removeSearch = p.removeQuery;
  p.hasSearch = p.hasQuery;

  // sanitizing URLs
  p.normalize = function() {
    if (this._parts.urn) {
      return this
        .normalizeProtocol(false)
        .normalizePath(false)
        .normalizeQuery(false)
        .normalizeFragment(false)
        .build();
    }

    return this
      .normalizeProtocol(false)
      .normalizeHostname(false)
      .normalizePort(false)
      .normalizePath(false)
      .normalizeQuery(false)
      .normalizeFragment(false)
      .build();
  };
  p.normalizeProtocol = function(build) {
    if (typeof this._parts.protocol === 'string') {
      this._parts.protocol = this._parts.protocol.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizeHostname = function(build) {
    if (this._parts.hostname) {
      if (this.is('IDN') && punycode) {
        this._parts.hostname = punycode.toASCII(this._parts.hostname);
      } else if (this.is('IPv6') && IPv6) {
        this._parts.hostname = IPv6.best(this._parts.hostname);
      }

      this._parts.hostname = this._parts.hostname.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizePort = function(build) {
    // remove port of it's the protocol's default
    if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
      this._parts.port = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizePath = function(build) {
    var _path = this._parts.path;
    if (!_path) {
      return this;
    }

    if (this._parts.urn) {
      this._parts.path = URI.recodeUrnPath(this._parts.path);
      this.build(!build);
      return this;
    }

    if (this._parts.path === '/') {
      return this;
    }

    _path = URI.recodePath(_path);

    var _was_relative;
    var _leadingParents = '';
    var _parent, _pos;

    // handle relative paths
    if (_path.charAt(0) !== '/') {
      _was_relative = true;
      _path = '/' + _path;
    }

    // handle relative files (as opposed to directories)
    if (_path.slice(-3) === '/..' || _path.slice(-2) === '/.') {
      _path += '/';
    }

    // resolve simples
    _path = _path
      .replace(/(\/(\.\/)+)|(\/\.$)/g, '/')
      .replace(/\/{2,}/g, '/');

    // remember leading parents
    if (_was_relative) {
      _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
      if (_leadingParents) {
        _leadingParents = _leadingParents[0];
      }
    }

    // resolve parents
    while (true) {
      _parent = _path.search(/\/\.\.(\/|$)/);
      if (_parent === -1) {
        // no more ../ to resolve
        break;
      } else if (_parent === 0) {
        // top level cannot be relative, skip it
        _path = _path.substring(3);
        continue;
      }

      _pos = _path.substring(0, _parent).lastIndexOf('/');
      if (_pos === -1) {
        _pos = _parent;
      }
      _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
    }

    // revert to relative
    if (_was_relative && this.is('relative')) {
      _path = _leadingParents + _path.substring(1);
    }

    this._parts.path = _path;
    this.build(!build);
    return this;
  };
  p.normalizePathname = p.normalizePath;
  p.normalizeQuery = function(build) {
    if (typeof this._parts.query === 'string') {
      if (!this._parts.query.length) {
        this._parts.query = null;
      } else {
        this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
      }

      this.build(!build);
    }

    return this;
  };
  p.normalizeFragment = function(build) {
    if (!this._parts.fragment) {
      this._parts.fragment = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizeSearch = p.normalizeQuery;
  p.normalizeHash = p.normalizeFragment;

  p.iso8859 = function() {
    // expect unicode input, iso8859 output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = escape;
    URI.decode = decodeURIComponent;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.unicode = function() {
    // expect iso8859 input, unicode output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = strictEncodeURIComponent;
    URI.decode = unescape;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.readable = function() {
    var uri = this.clone();
    // removing username, password, because they shouldn't be displayed according to RFC 3986
    uri.username('').password('').normalize();
    var t = '';
    if (uri._parts.protocol) {
      t += uri._parts.protocol + '://';
    }

    if (uri._parts.hostname) {
      if (uri.is('punycode') && punycode) {
        t += punycode.toUnicode(uri._parts.hostname);
        if (uri._parts.port) {
          t += ':' + uri._parts.port;
        }
      } else {
        t += uri.host();
      }
    }

    if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
      t += '/';
    }

    t += uri.path(true);
    if (uri._parts.query) {
      var q = '';
      for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
        var kv = (qp[i] || '').split('=');
        q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace)
          .replace(/&/g, '%26');

        if (kv[1] !== undefined) {
          q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace)
            .replace(/&/g, '%26');
        }
      }
      t += '?' + q.substring(1);
    }

    t += URI.decodeQuery(uri.hash(), true);
    return t;
  };

  // resolving relative and absolute URLs
  p.absoluteTo = function(base) {
    var resolved = this.clone();
    var properties = ['protocol', 'username', 'password', 'hostname', 'port'];
    var basedir, i, p;

    if (this._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    if (!(base instanceof URI)) {
      base = new URI(base);
    }

    if (resolved._parts.protocol) {
      // Directly returns even if this._parts.hostname is empty.
      return resolved;
    } else {
      resolved._parts.protocol = base._parts.protocol;
    }

    if (this._parts.hostname) {
      return resolved;
    }

    for (i = 0; (p = properties[i]); i++) {
      resolved._parts[p] = base._parts[p];
    }

    if (!resolved._parts.path) {
      resolved._parts.path = base._parts.path;
      if (!resolved._parts.query) {
        resolved._parts.query = base._parts.query;
      }
    } else {
      if (resolved._parts.path.substring(-2) === '..') {
        resolved._parts.path += '/';
      }

      if (resolved.path().charAt(0) !== '/') {
        basedir = base.directory();
        basedir = basedir ? basedir : base.path().indexOf('/') === 0 ? '/' : '';
        resolved._parts.path = (basedir ? (basedir + '/') : '') + resolved._parts.path;
        resolved.normalizePath();
      }
    }

    resolved.build();
    return resolved;
  };
  p.relativeTo = function(base) {
    var relative = this.clone().normalize();
    var relativeParts, baseParts, common, relativePath, basePath;

    if (relative._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    base = new URI(base).normalize();
    relativeParts = relative._parts;
    baseParts = base._parts;
    relativePath = relative.path();
    basePath = base.path();

    if (relativePath.charAt(0) !== '/') {
      throw new Error('URI is already relative');
    }

    if (basePath.charAt(0) !== '/') {
      throw new Error('Cannot calculate a URI relative to another relative URI');
    }

    if (relativeParts.protocol === baseParts.protocol) {
      relativeParts.protocol = null;
    }

    if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
      return relative.build();
    }

    if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
      return relative.build();
    }

    if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
      relativeParts.hostname = null;
      relativeParts.port = null;
    } else {
      return relative.build();
    }

    if (relativePath === basePath) {
      relativeParts.path = '';
      return relative.build();
    }

    // determine common sub path
    common = URI.commonPath(relativePath, basePath);

    // If the paths have nothing in common, return a relative URL with the absolute path.
    if (!common) {
      return relative.build();
    }

    var parents = baseParts.path
      .substring(common.length)
      .replace(/[^\/]*$/, '')
      .replace(/.*?\//g, '../');

    relativeParts.path = (parents + relativeParts.path.substring(common.length)) || './';

    return relative.build();
  };

  // comparing URIs
  p.equals = function(uri) {
    var one = this.clone();
    var two = new URI(uri);
    var one_map = {};
    var two_map = {};
    var checked = {};
    var one_query, two_query, key;

    one.normalize();
    two.normalize();

    // exact match
    if (one.toString() === two.toString()) {
      return true;
    }

    // extract query string
    one_query = one.query();
    two_query = two.query();
    one.query('');
    two.query('');

    // definitely not equal if not even non-query parts match
    if (one.toString() !== two.toString()) {
      return false;
    }

    // query parameters have the same length, even if they're permuted
    if (one_query.length !== two_query.length) {
      return false;
    }

    one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
    two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);

    for (key in one_map) {
      if (hasOwn.call(one_map, key)) {
        if (!isArray(one_map[key])) {
          if (one_map[key] !== two_map[key]) {
            return false;
          }
        } else if (!arraysEqual(one_map[key], two_map[key])) {
          return false;
        }

        checked[key] = true;
      }
    }

    for (key in two_map) {
      if (hasOwn.call(two_map, key)) {
        if (!checked[key]) {
          // two contains a parameter not present in one
          return false;
        }
      }
    }

    return true;
  };

  // state
  p.preventInvalidHostname = function(v) {
    this._parts.preventInvalidHostname = !!v;
    return this;
  };

  p.duplicateQueryParameters = function(v) {
    this._parts.duplicateQueryParameters = !!v;
    return this;
  };

  p.escapeQuerySpace = function(v) {
    this._parts.escapeQuerySpace = !!v;
    return this;
  };

  return URI;
}));
});

/* This file is automatically rebuilt by the Cesium build process. */

var when = createCommonjsModule$1(function (module, exports) {
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 1.7.1
 */

(function(define) {define(function () {
	var reduceArray, slice, undef;

	//
	// Public API
	//

	when.defer     = defer;     // Create a deferred
	when.resolve   = resolve;   // Create a resolved promise
	when.reject    = reject;    // Create a rejected promise

	when.join      = join;      // Join 2 or more promises

	when.all       = all;       // Resolve a list of promises
	when.map       = map;       // Array.map() for promises
	when.reduce    = reduce;    // Array.reduce() for promises

	when.any       = any;       // One-winner race
	when.some      = some;      // Multi-winner race

	when.chain     = chain;     // Make a promise trigger another resolver

	when.isPromise = isPromise; // Determine if a thing is a promise

	/**
	 * Register an observer for a promise or immediate value.
	 *
	 * @param {*} promiseOrValue
	 * @param {function?} [onFulfilled] callback to be called when promiseOrValue is
	 *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
	 *   will be invoked immediately.
	 * @param {function?} [onRejected] callback to be called when promiseOrValue is
	 *   rejected.
	 * @param {function?} [onProgress] callback to be called when progress updates
	 *   are issued for promiseOrValue.
	 * @returns {Promise} a new {@link Promise} that will complete with the return
	 *   value of callback or errback or the completion value of promiseOrValue if
	 *   callback and/or errback is not supplied.
	 */
	function when(promiseOrValue, onFulfilled, onRejected, onProgress) {
		// Get a trusted promise for the input promiseOrValue, and then
		// register promise handlers
		return resolve(promiseOrValue).then(onFulfilled, onRejected, onProgress);
	}

	/**
	 * Returns promiseOrValue if promiseOrValue is a {@link Promise}, a new Promise if
	 * promiseOrValue is a foreign promise, or a new, already-fulfilled {@link Promise}
	 * whose value is promiseOrValue if promiseOrValue is an immediate value.
	 *
	 * @param {*} promiseOrValue
	 * @returns Guaranteed to return a trusted Promise.  If promiseOrValue is a when.js {@link Promise}
	 *   returns promiseOrValue, otherwise, returns a new, already-resolved, when.js {@link Promise}
	 *   whose resolution value is:
	 *   * the resolution value of promiseOrValue if it's a foreign promise, or
	 *   * promiseOrValue if it's a value
	 */
	function resolve(promiseOrValue) {
		var promise, deferred;

		if(promiseOrValue instanceof Promise) {
			// It's a when.js promise, so we trust it
			promise = promiseOrValue;

		} else {
			// It's not a when.js promise. See if it's a foreign promise or a value.
			if(isPromise(promiseOrValue)) {
				// It's a thenable, but we don't know where it came from, so don't trust
				// its implementation entirely.  Introduce a trusted middleman when.js promise
				deferred = defer();

				// IMPORTANT: This is the only place when.js should ever call .then() on an
				// untrusted promise. Don't expose the return value to the untrusted promise
				promiseOrValue.then(
					function(value)  { deferred.resolve(value); },
					function(reason) { deferred.reject(reason); },
					function(update) { deferred.progress(update); }
				);

				promise = deferred.promise;

			} else {
				// It's a value, not a promise.  Create a resolved promise for it.
				promise = fulfilled(promiseOrValue);
			}
		}

		return promise;
	}

	/**
	 * Returns a rejected promise for the supplied promiseOrValue.  The returned
	 * promise will be rejected with:
	 * - promiseOrValue, if it is a value, or
	 * - if promiseOrValue is a promise
	 *   - promiseOrValue's value after it is fulfilled
	 *   - promiseOrValue's reason after it is rejected
	 * @param {*} promiseOrValue the rejected value of the returned {@link Promise}
	 * @return {Promise} rejected {@link Promise}
	 */
	function reject(promiseOrValue) {
		return when(promiseOrValue, rejected);
	}

	/**
	 * Trusted Promise constructor.  A Promise created from this constructor is
	 * a trusted when.js promise.  Any other duck-typed promise is considered
	 * untrusted.
	 * @constructor
	 * @name Promise
	 */
	function Promise(then) {
		this.then = then;
	}

	Promise.prototype = {
		/**
		 * Register a callback that will be called when a promise is
		 * fulfilled or rejected.  Optionally also register a progress handler.
		 * Shortcut for .then(onFulfilledOrRejected, onFulfilledOrRejected, onProgress)
		 * @param {function?} [onFulfilledOrRejected]
		 * @param {function?} [onProgress]
		 * @return {Promise}
		 */
		always: function(onFulfilledOrRejected, onProgress) {
			return this.then(onFulfilledOrRejected, onFulfilledOrRejected, onProgress);
		},

		/**
		 * Register a rejection handler.  Shortcut for .then(undefined, onRejected)
		 * @param {function?} onRejected
		 * @return {Promise}
		 */
		otherwise: function(onRejected) {
			return this.then(undef, onRejected);
		},

		/**
		 * Shortcut for .then(function() { return value; })
		 * @param  {*} value
		 * @return {Promise} a promise that:
		 *  - is fulfilled if value is not a promise, or
		 *  - if value is a promise, will fulfill with its value, or reject
		 *    with its reason.
		 */
		yield: function(value) {
			return this.then(function() {
				return value;
			});
		},

		/**
		 * Assumes that this promise will fulfill with an array, and arranges
		 * for the onFulfilled to be called with the array as its argument list
		 * i.e. onFulfilled.spread(undefined, array).
		 * @param {function} onFulfilled function to receive spread arguments
		 * @return {Promise}
		 */
		spread: function(onFulfilled) {
			return this.then(function(array) {
				// array may contain promises, so resolve its contents.
				return all(array, function(array) {
					return onFulfilled.apply(undef, array);
				});
			});
		}
	};

	/**
	 * Create an already-resolved promise for the supplied value
	 * @private
	 *
	 * @param {*} value
	 * @return {Promise} fulfilled promise
	 */
	function fulfilled(value) {
		var p = new Promise(function(onFulfilled) {
			// TODO: Promises/A+ check typeof onFulfilled
			try {
				return resolve(onFulfilled ? onFulfilled(value) : value);
			} catch(e) {
				return rejected(e);
			}
		});

		return p;
	}

	/**
	 * Create an already-rejected {@link Promise} with the supplied
	 * rejection reason.
	 * @private
	 *
	 * @param {*} reason
	 * @return {Promise} rejected promise
	 */
	function rejected(reason) {
		var p = new Promise(function(_, onRejected) {
			// TODO: Promises/A+ check typeof onRejected
			try {
				return onRejected ? resolve(onRejected(reason)) : rejected(reason);
			} catch(e) {
				return rejected(e);
			}
		});

		return p;
	}

	/**
	 * Creates a new, Deferred with fully isolated resolver and promise parts,
	 * either or both of which may be given out safely to consumers.
	 * The Deferred itself has the full API: resolve, reject, progress, and
	 * then. The resolver has resolve, reject, and progress.  The promise
	 * only has then.
	 *
	 * @return {Deferred}
	 */
	function defer() {
		var deferred, promise, handlers, progressHandlers,
			_then, _progress, _resolve;

		/**
		 * The promise for the new deferred
		 * @type {Promise}
		 */
		promise = new Promise(then);

		/**
		 * The full Deferred object, with {@link Promise} and {@link Resolver} parts
		 * @class Deferred
		 * @name Deferred
		 */
		deferred = {
			then:     then, // DEPRECATED: use deferred.promise.then
			resolve:  promiseResolve,
			reject:   promiseReject,
			// TODO: Consider renaming progress() to notify()
			progress: promiseProgress,

			promise:  promise,

			resolver: {
				resolve:  promiseResolve,
				reject:   promiseReject,
				progress: promiseProgress
			}
		};

		handlers = [];
		progressHandlers = [];

		/**
		 * Pre-resolution then() that adds the supplied callback, errback, and progback
		 * functions to the registered listeners
		 * @private
		 *
		 * @param {function?} [onFulfilled] resolution handler
		 * @param {function?} [onRejected] rejection handler
		 * @param {function?} [onProgress] progress handler
		 */
		_then = function(onFulfilled, onRejected, onProgress) {
			// TODO: Promises/A+ check typeof onFulfilled, onRejected, onProgress
			var deferred, progressHandler;

			deferred = defer();

			progressHandler = typeof onProgress === 'function'
				? function(update) {
					try {
						// Allow progress handler to transform progress event
						deferred.progress(onProgress(update));
					} catch(e) {
						// Use caught value as progress
						deferred.progress(e);
					}
				}
				: function(update) { deferred.progress(update); };

			handlers.push(function(promise) {
				promise.then(onFulfilled, onRejected)
					.then(deferred.resolve, deferred.reject, progressHandler);
			});

			progressHandlers.push(progressHandler);

			return deferred.promise;
		};

		/**
		 * Issue a progress event, notifying all progress listeners
		 * @private
		 * @param {*} update progress event payload to pass to all listeners
		 */
		_progress = function(update) {
			processQueue(progressHandlers, update);
			return update;
		};

		/**
		 * Transition from pre-resolution state to post-resolution state, notifying
		 * all listeners of the resolution or rejection
		 * @private
		 * @param {*} value the value of this deferred
		 */
		_resolve = function(value) {
			value = resolve(value);

			// Replace _then with one that directly notifies with the result.
			_then = value.then;
			// Replace _resolve so that this Deferred can only be resolved once
			_resolve = resolve;
			// Make _progress a noop, to disallow progress for the resolved promise.
			_progress = noop;

			// Notify handlers
			processQueue(handlers, value);

			// Free progressHandlers array since we'll never issue progress events
			progressHandlers = handlers = undef;

			return value;
		};

		return deferred;

		/**
		 * Wrapper to allow _then to be replaced safely
		 * @param {function?} [onFulfilled] resolution handler
		 * @param {function?} [onRejected] rejection handler
		 * @param {function?} [onProgress] progress handler
		 * @return {Promise} new promise
		 */
		function then(onFulfilled, onRejected, onProgress) {
			// TODO: Promises/A+ check typeof onFulfilled, onRejected, onProgress
			return _then(onFulfilled, onRejected, onProgress);
		}

		/**
		 * Wrapper to allow _resolve to be replaced
		 */
		function promiseResolve(val) {
			return _resolve(val);
		}

		/**
		 * Wrapper to allow _reject to be replaced
		 */
		function promiseReject(err) {
			return _resolve(rejected(err));
		}

		/**
		 * Wrapper to allow _progress to be replaced
		 */
		function promiseProgress(update) {
			return _progress(update);
		}
	}

	/**
	 * Determines if promiseOrValue is a promise or not.  Uses the feature
	 * test from http://wiki.commonjs.org/wiki/Promises/A to determine if
	 * promiseOrValue is a promise.
	 *
	 * @param {*} promiseOrValue anything
	 * @returns {boolean} true if promiseOrValue is a {@link Promise}
	 */
	function isPromise(promiseOrValue) {
		return promiseOrValue && typeof promiseOrValue.then === 'function';
	}

	/**
	 * Initiates a competitive race, returning a promise that will resolve when
	 * howMany of the supplied promisesOrValues have resolved, or will reject when
	 * it becomes impossible for howMany to resolve, for example, when
	 * (promisesOrValues.length - howMany) + 1 input promises reject.
	 *
	 * @param {Array} promisesOrValues array of anything, may contain a mix
	 *      of promises and values
	 * @param howMany {number} number of promisesOrValues to resolve
	 * @param {function?} [onFulfilled] resolution handler
	 * @param {function?} [onRejected] rejection handler
	 * @param {function?} [onProgress] progress handler
	 * @returns {Promise} promise that will resolve to an array of howMany values that
	 * resolved first, or will reject with an array of (promisesOrValues.length - howMany) + 1
	 * rejection reasons.
	 */
	function some(promisesOrValues, howMany, onFulfilled, onRejected, onProgress) {

		checkCallbacks(2, arguments);

		return when(promisesOrValues, function(promisesOrValues) {

			var toResolve, toReject, values, reasons, deferred, fulfillOne, rejectOne, progress, len, i;

			len = promisesOrValues.length >>> 0;

			toResolve = Math.max(0, Math.min(howMany, len));
			values = [];

			toReject = (len - toResolve) + 1;
			reasons = [];

			deferred = defer();

			// No items in the input, resolve immediately
			if (!toResolve) {
				deferred.resolve(values);

			} else {
				progress = deferred.progress;

				rejectOne = function(reason) {
					reasons.push(reason);
					if(!--toReject) {
						fulfillOne = rejectOne = noop;
						deferred.reject(reasons);
					}
				};

				fulfillOne = function(val) {
					// This orders the values based on promise resolution order
					// Another strategy would be to use the original position of
					// the corresponding promise.
					values.push(val);

					if (!--toResolve) {
						fulfillOne = rejectOne = noop;
						deferred.resolve(values);
					}
				};

				for(i = 0; i < len; ++i) {
					if(i in promisesOrValues) {
						when(promisesOrValues[i], fulfiller, rejecter, progress);
					}
				}
			}

			return deferred.then(onFulfilled, onRejected, onProgress);

			function rejecter(reason) {
				rejectOne(reason);
			}

			function fulfiller(val) {
				fulfillOne(val);
			}

		});
	}

	/**
	 * Initiates a competitive race, returning a promise that will resolve when
	 * any one of the supplied promisesOrValues has resolved or will reject when
	 * *all* promisesOrValues have rejected.
	 *
	 * @param {Array|Promise} promisesOrValues array of anything, may contain a mix
	 *      of {@link Promise}s and values
	 * @param {function?} [onFulfilled] resolution handler
	 * @param {function?} [onRejected] rejection handler
	 * @param {function?} [onProgress] progress handler
	 * @returns {Promise} promise that will resolve to the value that resolved first, or
	 * will reject with an array of all rejected inputs.
	 */
	function any(promisesOrValues, onFulfilled, onRejected, onProgress) {

		function unwrapSingleResult(val) {
			return onFulfilled ? onFulfilled(val[0]) : val[0];
		}

		return some(promisesOrValues, 1, unwrapSingleResult, onRejected, onProgress);
	}

	/**
	 * Return a promise that will resolve only once all the supplied promisesOrValues
	 * have resolved. The resolution value of the returned promise will be an array
	 * containing the resolution values of each of the promisesOrValues.
	 * @memberOf when
	 *
	 * @param {Array|Promise} promisesOrValues array of anything, may contain a mix
	 *      of {@link Promise}s and values
	 * @param {function?} [onFulfilled] resolution handler
	 * @param {function?} [onRejected] rejection handler
	 * @param {function?} [onProgress] progress handler
	 * @returns {Promise}
	 */
	function all(promisesOrValues, onFulfilled, onRejected, onProgress) {
		checkCallbacks(1, arguments);
		return map(promisesOrValues, identity).then(onFulfilled, onRejected, onProgress);
	}

	/**
	 * Joins multiple promises into a single returned promise.
	 * @return {Promise} a promise that will fulfill when *all* the input promises
	 * have fulfilled, or will reject when *any one* of the input promises rejects.
	 */
	function join(/* ...promises */) {
		return map(arguments, identity);
	}

	/**
	 * Traditional map function, similar to `Array.prototype.map()`, but allows
	 * input to contain {@link Promise}s and/or values, and mapFunc may return
	 * either a value or a {@link Promise}
	 *
	 * @param {Array|Promise} promise array of anything, may contain a mix
	 *      of {@link Promise}s and values
	 * @param {function} mapFunc mapping function mapFunc(value) which may return
	 *      either a {@link Promise} or value
	 * @returns {Promise} a {@link Promise} that will resolve to an array containing
	 *      the mapped output values.
	 */
	function map(promise, mapFunc) {
		return when(promise, function(array) {
			var results, len, toResolve, resolve, i, d;

			// Since we know the resulting length, we can preallocate the results
			// array to avoid array expansions.
			toResolve = len = array.length >>> 0;
			results = [];
			d = defer();

			if(!toResolve) {
				d.resolve(results);
			} else {

				resolve = function resolveOne(item, i) {
					when(item, mapFunc).then(function(mapped) {
						results[i] = mapped;

						if(!--toResolve) {
							d.resolve(results);
						}
					}, d.reject);
				};

				// Since mapFunc may be async, get all invocations of it into flight
				for(i = 0; i < len; i++) {
					if(i in array) {
						resolve(array[i], i);
					} else {
						--toResolve;
					}
				}

			}

			return d.promise;

		});
	}

	/**
	 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
	 * input may contain promises and/or values, and reduceFunc
	 * may return either a value or a promise, *and* initialValue may
	 * be a promise for the starting value.
	 *
	 * @param {Array|Promise} promise array or promise for an array of anything,
	 *      may contain a mix of promises and values.
	 * @param {function} reduceFunc reduce function reduce(currentValue, nextValue, index, total),
	 *      where total is the total number of items being reduced, and will be the same
	 *      in each call to reduceFunc.
	 * @returns {Promise} that will resolve to the final reduced value
	 */
	function reduce(promise, reduceFunc /*, initialValue */) {
		var args = slice.call(arguments, 1);

		return when(promise, function(array) {
			var total;

			total = array.length;

			// Wrap the supplied reduceFunc with one that handles promises and then
			// delegates to the supplied.
			args[0] = function (current, val, i) {
				return when(current, function (c) {
					return when(val, function (value) {
						return reduceFunc(c, value, i, total);
					});
				});
			};

			return reduceArray.apply(array, args);
		});
	}

	/**
	 * Ensure that resolution of promiseOrValue will trigger resolver with the
	 * value or reason of promiseOrValue, or instead with resolveValue if it is provided.
	 *
	 * @param promiseOrValue
	 * @param {Object} resolver
	 * @param {function} resolver.resolve
	 * @param {function} resolver.reject
	 * @param {*} [resolveValue]
	 * @returns {Promise}
	 */
	function chain(promiseOrValue, resolver, resolveValue) {
		var useResolveValue = arguments.length > 2;

		return when(promiseOrValue,
			function(val) {
				val = useResolveValue ? resolveValue : val;
				resolver.resolve(val);
				return val;
			},
			function(reason) {
				resolver.reject(reason);
				return rejected(reason);
			},
			resolver.progress
		);
	}

	//
	// Utility functions
	//

	/**
	 * Apply all functions in queue to value
	 * @param {Array} queue array of functions to execute
	 * @param {*} value argument passed to each function
	 */
	function processQueue(queue, value) {
		var handler, i = 0;

		while (handler = queue[i++]) {
			handler(value);
		}
	}

	/**
	 * Helper that checks arrayOfCallbacks to ensure that each element is either
	 * a function, or null or undefined.
	 * @private
	 * @param {number} start index at which to start checking items in arrayOfCallbacks
	 * @param {Array} arrayOfCallbacks array to check
	 * @throws {Error} if any element of arrayOfCallbacks is something other than
	 * a functions, null, or undefined.
	 */
	function checkCallbacks(start, arrayOfCallbacks) {
		// TODO: Promises/A+ update type checking and docs
		var arg, i = arrayOfCallbacks.length;

		while(i > start) {
			arg = arrayOfCallbacks[--i];

			if (arg != null && typeof arg != 'function') {
				throw new Error('arg '+i+' must be a function');
			}
		}
	}

	/**
	 * No-Op function used in method replacement
	 * @private
	 */
	function noop() {}

	slice = [].slice;

	// ES5 reduce implementation if native not available
	// See: http://es5.github.com/#x15.4.4.21 as there are many
	// specifics and edge cases.
	reduceArray = [].reduce ||
		function(reduceFunc /*, initialValue */) {
			/*jshint maxcomplexity: 7*/

			// ES5 dictates that reduce.length === 1

			// This implementation deviates from ES5 spec in the following ways:
			// 1. It does not check if reduceFunc is a Callable

			var arr, args, reduced, len, i;

			i = 0;
			// This generates a jshint warning, despite being valid
			// "Missing 'new' prefix when invoking a constructor."
			// See https://github.com/jshint/jshint/issues/392
			arr = Object(this);
			len = arr.length >>> 0;
			args = arguments;

			// If no initialValue, use first item of array (we know length !== 0 here)
			// and adjust i to start at second item
			if(args.length <= 1) {
				// Skip to the first real element in the array
				for(;;) {
					if(i in arr) {
						reduced = arr[i++];
						break;
					}

					// If we reached the end of the array without finding any real
					// elements, it's a TypeError
					if(++i >= len) {
						throw new TypeError();
					}
				}
			} else {
				// If initialValue provided, use it
				reduced = args[1];
			}

			// Do the actual reduce
			for(;i < len; ++i) {
				// Skip holes
				if(i in arr) {
					reduced = reduceFunc(reduced, arr[i], i, arr);
				}
			}

			return reduced;
		};

	function identity(x) {
		return x;
	}

	return when;
});
})(function (factory) { (module.exports = factory())
		;
	}
	// Boilerplate for AMD, Node, and browser global
);
});

/**
 * @private
 */
function appendForwardSlash(url) {
  if (url.length === 0 || url[url.length - 1] !== "/") {
    url = url + "/";
  }
  return url;
}

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

/**
 * Clones an object, returning a new object containing the same properties.
 *
 * @function
 *
 * @param {Object} object The object to clone.
 * @param {Boolean} [deep=false] If true, all properties will be deep cloned recursively.
 * @returns {Object} The cloned object.
 */
function clone(object, deep) {
  if (object === null || typeof object !== "object") {
    return object;
  }

  deep = defaultValue(deep, false);

  var result = new object.constructor();
  for (var propertyName in object) {
    if (object.hasOwnProperty(propertyName)) {
      var value = object[propertyName];
      if (deep) {
        value = clone(value, deep);
      }
      result[propertyName] = value;
    }
  }

  return result;
}

/**
 * Merges two objects, copying their properties onto a new combined object. When two objects have the same
 * property, the value of the property on the first object is used.  If either object is undefined,
 * it will be treated as an empty object.
 *
 * @example
 * var object1 = {
 *     propOne : 1,
 *     propTwo : {
 *         value1 : 10
 *     }
 * }
 * var object2 = {
 *     propTwo : 2
 * }
 * var final = Cesium.combine(object1, object2);
 *
 * // final === {
 * //     propOne : 1,
 * //     propTwo : {
 * //         value1 : 10
 * //     }
 * // }
 *
 * @param {Object} [object1] The first object to merge.
 * @param {Object} [object2] The second object to merge.
 * @param {Boolean} [deep=false] Perform a recursive merge.
 * @returns {Object} The combined object containing all properties from both objects.
 *
 * @function
 */
function combine(object1, object2, deep) {
  deep = defaultValue(deep, false);

  var result = {};

  var object1Defined = defined(object1);
  var object2Defined = defined(object2);
  var property;
  var object1Value;
  var object2Value;
  if (object1Defined) {
    for (property in object1) {
      if (object1.hasOwnProperty(property)) {
        object1Value = object1[property];
        if (
          object2Defined &&
          deep &&
          typeof object1Value === "object" &&
          object2.hasOwnProperty(property)
        ) {
          object2Value = object2[property];
          if (typeof object2Value === "object") {
            result[property] = combine(object1Value, object2Value, deep);
          } else {
            result[property] = object1Value;
          }
        } else {
          result[property] = object1Value;
        }
      }
    }
  }
  if (object2Defined) {
    for (property in object2) {
      if (
        object2.hasOwnProperty(property) &&
        !result.hasOwnProperty(property)
      ) {
        object2Value = object2[property];
        result[property] = object2Value;
      }
    }
  }
  return result;
}

/**
 * Given a relative Uri and a base Uri, returns the absolute Uri of the relative Uri.
 * @function
 *
 * @param {String} relative The relative Uri.
 * @param {String} [base] The base Uri.
 * @returns {String} The absolute Uri of the given relative Uri.
 *
 * @example
 * //absolute Uri will be "https://test.com/awesome.png";
 * var absoluteUri = Cesium.getAbsoluteUri('awesome.png', 'https://test.com');
 */
function getAbsoluteUri(relative, base) {
  var documentObject;
  if (typeof document !== "undefined") {
    documentObject = document;
  }

  return getAbsoluteUri._implementation(relative, base, documentObject);
}

getAbsoluteUri._implementation = function (relative, base, documentObject) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(relative)) {
    throw new DeveloperError("relative uri is required.");
  }
  //>>includeEnd('debug');

  if (!defined(base)) {
    if (typeof documentObject === "undefined") {
      return relative;
    }
    base = defaultValue(documentObject.baseURI, documentObject.location.href);
  }

  var relativeUri = new URI(relative);
  if (relativeUri.scheme() !== "") {
    return relativeUri.toString();
  }
  return relativeUri.absoluteTo(base).toString();
};

/**
 * Given a URI, returns the base path of the URI.
 * @function
 *
 * @param {String} uri The Uri.
 * @param {Boolean} [includeQuery = false] Whether or not to include the query string and fragment form the uri
 * @returns {String} The base path of the Uri.
 *
 * @example
 * // basePath will be "/Gallery/";
 * var basePath = Cesium.getBaseUri('/Gallery/simple.czml?value=true&example=false');
 *
 * // basePath will be "/Gallery/?value=true&example=false";
 * var basePath = Cesium.getBaseUri('/Gallery/simple.czml?value=true&example=false', true);
 */
function getBaseUri(uri, includeQuery) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(uri)) {
    throw new DeveloperError("uri is required.");
  }
  //>>includeEnd('debug');

  var basePath = "";
  var i = uri.lastIndexOf("/");
  if (i !== -1) {
    basePath = uri.substring(0, i + 1);
  }

  if (!includeQuery) {
    return basePath;
  }

  uri = new URI(uri);
  if (uri.query().length !== 0) {
    basePath += "?" + uri.query();
  }
  if (uri.fragment().length !== 0) {
    basePath += "#" + uri.fragment();
  }

  return basePath;
}

/**
 * Given a URI, returns the extension of the URI.
 * @function getExtensionFromUri
 *
 * @param {String} uri The Uri.
 * @returns {String} The extension of the Uri.
 *
 * @example
 * //extension will be "czml";
 * var extension = Cesium.getExtensionFromUri('/Gallery/simple.czml?value=true&example=false');
 */
function getExtensionFromUri(uri) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(uri)) {
    throw new DeveloperError("uri is required.");
  }
  //>>includeEnd('debug');

  var uriObject = new URI(uri);
  uriObject.normalize();
  var path = uriObject.path();
  var index = path.lastIndexOf("/");
  if (index !== -1) {
    path = path.substr(index + 1);
  }
  index = path.lastIndexOf(".");
  if (index === -1) {
    path = "";
  } else {
    path = path.substr(index + 1);
  }
  return path;
}

var blobUriRegex = /^blob:/i;

/**
 * Determines if the specified uri is a blob uri.
 *
 * @function isBlobUri
 *
 * @param {String} uri The uri to test.
 * @returns {Boolean} true when the uri is a blob uri; otherwise, false.
 *
 * @private
 */
function isBlobUri(uri) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.string("uri", uri);
  //>>includeEnd('debug');

  return blobUriRegex.test(uri);
}

var a;

/**
 * Given a URL, determine whether that URL is considered cross-origin to the current page.
 *
 * @private
 */
function isCrossOriginUrl(url) {
  if (!defined(a)) {
    a = document.createElement("a");
  }

  // copy window location into the anchor to get consistent results
  // when the port is default for the protocol (e.g. 80 for HTTP)
  a.href = window.location.href;

  // host includes both hostname and port if the port is not standard
  var host = a.host;
  var protocol = a.protocol;

  a.href = url;
  // IE only absolutizes href on get, not set
  // eslint-disable-next-line no-self-assign
  a.href = a.href;

  return protocol !== a.protocol || host !== a.host;
}

var dataUriRegex$1 = /^data:/i;

/**
 * Determines if the specified uri is a data uri.
 *
 * @function isDataUri
 *
 * @param {String} uri The uri to test.
 * @returns {Boolean} true when the uri is a data uri; otherwise, false.
 *
 * @private
 */
function isDataUri(uri) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.string("uri", uri);
  //>>includeEnd('debug');

  return dataUriRegex$1.test(uri);
}

/**
 * @private
 */
function loadAndExecuteScript(url) {
  var deferred = when.defer();
  var script = document.createElement("script");
  script.async = true;
  script.src = url;

  var head = document.getElementsByTagName("head")[0];
  script.onload = function () {
    script.onload = undefined;
    head.removeChild(script);
    deferred.resolve();
  };
  script.onerror = function (e) {
    deferred.reject(e);
  };

  head.appendChild(script);

  return deferred.promise;
}

/* This file is automatically rebuilt by the Cesium build process. */
/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/

/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/

var MersenneTwister = function(seed) {
	if (seed == undefined) {
		seed = new Date().getTime();
	}

	/* Period parameters */
	this.N = 624;
	this.M = 397;
	this.MATRIX_A = 0x9908b0df;   /* constant vector a */
	this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
	this.LOWER_MASK = 0x7fffffff; /* least significant r bits */

	this.mt = new Array(this.N); /* the array for the state vector */
	this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */

	if (seed.constructor == Array) {
		this.init_by_array(seed, seed.length);
	}
	else {
		this.init_seed(seed);
	}
};

/* initializes mt[N] with a seed */
/* origin name init_genrand */
MersenneTwister.prototype.init_seed = function(s) {
	this.mt[0] = s >>> 0;
	for (this.mti=1; this.mti<this.N; this.mti++) {
		var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
		this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
		+ this.mti;
		/* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
		/* In the previous versions, MSBs of the seed affect   */
		/* only MSBs of the array mt[].                        */
		/* 2002/01/09 modified by Makoto Matsumoto             */
		this.mt[this.mti] >>>= 0;
		/* for >32 bit machines */
	}
};

/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
	var i, j, k;
	this.init_seed(19650218);
	i=1; j=0;
	k = (this.N>key_length ? this.N : key_length);
	for (; k; k--) {
		var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
		this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
		+ init_key[j] + j; /* non linear */
		this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
		i++; j++;
		if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
		if (j>=key_length) j=0;
	}
	for (k=this.N-1; k; k--) {
		var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
		this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
		- i; /* non linear */
		this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
		i++;
		if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
	}

	this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
};

/* generates a random number on [0,0xffffffff]-interval */
/* origin name genrand_int32 */
MersenneTwister.prototype.random_int = function() {
	var y;
	var mag01 = new Array(0x0, this.MATRIX_A);
	/* mag01[x] = x * MATRIX_A  for x=0,1 */

	if (this.mti >= this.N) { /* generate N words at one time */
		var kk;

		if (this.mti == this.N+1)  /* if init_seed() has not been called, */
			this.init_seed(5489);  /* a default initial seed is used */

		for (kk=0;kk<this.N-this.M;kk++) {
			y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
			this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
		}
		for (;kk<this.N-1;kk++) {
			y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
			this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
		}
		y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
		this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

		this.mti = 0;
	}

	y = this.mt[this.mti++];

	/* Tempering */
	y ^= (y >>> 11);
	y ^= (y << 7) & 0x9d2c5680;
	y ^= (y << 15) & 0xefc60000;
	y ^= (y >>> 18);

	return y >>> 0;
};

/* generates a random number on [0,0x7fffffff]-interval */
/* origin name genrand_int31 */
MersenneTwister.prototype.random_int31 = function() {
	return (this.random_int()>>>1);
};

/* generates a random number on [0,1]-real-interval */
/* origin name genrand_real1 */
MersenneTwister.prototype.random_incl = function() {
	return this.random_int()*(1.0/4294967295.0);
	/* divided by 2^32-1 */
};

/* generates a random number on [0,1)-real-interval */
MersenneTwister.prototype.random = function() {
	return this.random_int()*(1.0/4294967296.0);
	/* divided by 2^32 */
};

/* generates a random number on (0,1)-real-interval */
/* origin name genrand_real3 */
MersenneTwister.prototype.random_excl = function() {
	return (this.random_int() + 0.5)*(1.0/4294967296.0);
	/* divided by 2^32 */
};

/* generates a random number on [0,1) with 53-bit resolution*/
/* origin name genrand_res53 */
MersenneTwister.prototype.random_long = function() {
	var a=this.random_int()>>>5, b=this.random_int()>>>6;
	return (a*67108864.0+b)*(1.0/9007199254740992.0);
};

/* These real versions are due to Isaku Wada, 2002/01/09 added */

var mersenneTwister = MersenneTwister;

/**
 * Math functions.
 *
 * @exports CesiumMath
 * @alias Math
 */
var CesiumMath = {};

/**
 * 0.1
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON1 = 0.1;

/**
 * 0.01
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON2 = 0.01;

/**
 * 0.001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON3 = 0.001;

/**
 * 0.0001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON4 = 0.0001;

/**
 * 0.00001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON5 = 0.00001;

/**
 * 0.000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON6 = 0.000001;

/**
 * 0.0000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON7 = 0.0000001;

/**
 * 0.00000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON8 = 0.00000001;

/**
 * 0.000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON9 = 0.000000001;

/**
 * 0.0000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON10 = 0.0000000001;

/**
 * 0.00000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON11 = 0.00000000001;

/**
 * 0.000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON12 = 0.000000000001;

/**
 * 0.0000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON13 = 0.0000000000001;

/**
 * 0.00000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON14 = 0.00000000000001;

/**
 * 0.000000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON15 = 0.000000000000001;

/**
 * 0.0000000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON16 = 0.0000000000000001;

/**
 * 0.00000000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON17 = 0.00000000000000001;

/**
 * 0.000000000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON18 = 0.000000000000000001;

/**
 * 0.0000000000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON19 = 0.0000000000000000001;

/**
 * 0.00000000000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON20 = 0.00000000000000000001;

/**
 * 0.000000000000000000001
 * @type {Number}
 * @constant
 */
CesiumMath.EPSILON21 = 0.000000000000000000001;

/**
 * The gravitational parameter of the Earth in meters cubed
 * per second squared as defined by the WGS84 model: 3.986004418e14
 * @type {Number}
 * @constant
 */
CesiumMath.GRAVITATIONALPARAMETER = 3.986004418e14;

/**
 * Radius of the sun in meters: 6.955e8
 * @type {Number}
 * @constant
 */
CesiumMath.SOLAR_RADIUS = 6.955e8;

/**
 * The mean radius of the moon, according to the "Report of the IAU/IAG Working Group on
 * Cartographic Coordinates and Rotational Elements of the Planets and satellites: 2000",
 * Celestial Mechanics 82: 83-110, 2002.
 * @type {Number}
 * @constant
 */
CesiumMath.LUNAR_RADIUS = 1737400.0;

/**
 * 64 * 1024
 * @type {Number}
 * @constant
 */
CesiumMath.SIXTY_FOUR_KILOBYTES = 64 * 1024;

/**
 * 4 * 1024 * 1024 * 1024
 * @type {Number}
 * @constant
 */
CesiumMath.FOUR_GIGABYTES = 4 * 1024 * 1024 * 1024;

/**
 * Returns the sign of the value; 1 if the value is positive, -1 if the value is
 * negative, or 0 if the value is 0.
 *
 * @function
 * @param {Number} value The value to return the sign of.
 * @returns {Number} The sign of value.
 */
// eslint-disable-next-line es/no-math-sign
CesiumMath.sign = defaultValue(Math.sign, function sign(value) {
  value = +value; // coerce to number
  if (value === 0 || value !== value) {
    // zero or NaN
    return value;
  }
  return value > 0 ? 1 : -1;
});

/**
 * Returns 1.0 if the given value is positive or zero, and -1.0 if it is negative.
 * This is similar to {@link CesiumMath#sign} except that returns 1.0 instead of
 * 0.0 when the input value is 0.0.
 * @param {Number} value The value to return the sign of.
 * @returns {Number} The sign of value.
 */
CesiumMath.signNotZero = function (value) {
  return value < 0.0 ? -1.0 : 1.0;
};

/**
 * Converts a scalar value in the range [-1.0, 1.0] to a SNORM in the range [0, rangeMaximum]
 * @param {Number} value The scalar value in the range [-1.0, 1.0]
 * @param {Number} [rangeMaximum=255] The maximum value in the mapped range, 255 by default.
 * @returns {Number} A SNORM value, where 0 maps to -1.0 and rangeMaximum maps to 1.0.
 *
 * @see CesiumMath.fromSNorm
 */
CesiumMath.toSNorm = function (value, rangeMaximum) {
  rangeMaximum = defaultValue(rangeMaximum, 255);
  return Math.round(
    (CesiumMath.clamp(value, -1.0, 1.0) * 0.5 + 0.5) * rangeMaximum
  );
};

/**
 * Converts a SNORM value in the range [0, rangeMaximum] to a scalar in the range [-1.0, 1.0].
 * @param {Number} value SNORM value in the range [0, rangeMaximum]
 * @param {Number} [rangeMaximum=255] The maximum value in the SNORM range, 255 by default.
 * @returns {Number} Scalar in the range [-1.0, 1.0].
 *
 * @see CesiumMath.toSNorm
 */
CesiumMath.fromSNorm = function (value, rangeMaximum) {
  rangeMaximum = defaultValue(rangeMaximum, 255);
  return (
    (CesiumMath.clamp(value, 0.0, rangeMaximum) / rangeMaximum) * 2.0 - 1.0
  );
};

/**
 * Converts a scalar value in the range [rangeMinimum, rangeMaximum] to a scalar in the range [0.0, 1.0]
 * @param {Number} value The scalar value in the range [rangeMinimum, rangeMaximum]
 * @param {Number} rangeMinimum The minimum value in the mapped range.
 * @param {Number} rangeMaximum The maximum value in the mapped range.
 * @returns {Number} A scalar value, where rangeMinimum maps to 0.0 and rangeMaximum maps to 1.0.
 */
CesiumMath.normalize = function (value, rangeMinimum, rangeMaximum) {
  rangeMaximum = Math.max(rangeMaximum - rangeMinimum, 0.0);
  return rangeMaximum === 0.0
    ? 0.0
    : CesiumMath.clamp((value - rangeMinimum) / rangeMaximum, 0.0, 1.0);
};

/**
 * Returns the hyperbolic sine of a number.
 * The hyperbolic sine of <em>value</em> is defined to be
 * (<em>e<sup>x</sup>&nbsp;-&nbsp;e<sup>-x</sup></em>)/2.0
 * where <i>e</i> is Euler's number, approximately 2.71828183.
 *
 * <p>Special cases:
 *   <ul>
 *     <li>If the argument is NaN, then the result is NaN.</li>
 *
 *     <li>If the argument is infinite, then the result is an infinity
 *     with the same sign as the argument.</li>
 *
 *     <li>If the argument is zero, then the result is a zero with the
 *     same sign as the argument.</li>
 *   </ul>
 *</p>
 *
 * @function
 * @param {Number} value The number whose hyperbolic sine is to be returned.
 * @returns {Number} The hyperbolic sine of <code>value</code>.
 */
// eslint-disable-next-line es/no-math-sinh
CesiumMath.sinh = defaultValue(Math.sinh, function sinh(value) {
  return (Math.exp(value) - Math.exp(-value)) / 2.0;
});

/**
 * Returns the hyperbolic cosine of a number.
 * The hyperbolic cosine of <strong>value</strong> is defined to be
 * (<em>e<sup>x</sup>&nbsp;+&nbsp;e<sup>-x</sup></em>)/2.0
 * where <i>e</i> is Euler's number, approximately 2.71828183.
 *
 * <p>Special cases:
 *   <ul>
 *     <li>If the argument is NaN, then the result is NaN.</li>
 *
 *     <li>If the argument is infinite, then the result is positive infinity.</li>
 *
 *     <li>If the argument is zero, then the result is 1.0.</li>
 *   </ul>
 *</p>
 *
 * @function
 * @param {Number} value The number whose hyperbolic cosine is to be returned.
 * @returns {Number} The hyperbolic cosine of <code>value</code>.
 */
// eslint-disable-next-line es/no-math-cosh
CesiumMath.cosh = defaultValue(Math.cosh, function cosh(value) {
  return (Math.exp(value) + Math.exp(-value)) / 2.0;
});

/**
 * Computes the linear interpolation of two values.
 *
 * @param {Number} p The start value to interpolate.
 * @param {Number} q The end value to interpolate.
 * @param {Number} time The time of interpolation generally in the range <code>[0.0, 1.0]</code>.
 * @returns {Number} The linearly interpolated value.
 *
 * @example
 * var n = Cesium.Math.lerp(0.0, 2.0, 0.5); // returns 1.0
 */
CesiumMath.lerp = function (p, q, time) {
  return (1.0 - time) * p + time * q;
};

/**
 * pi
 *
 * @type {Number}
 * @constant
 */
CesiumMath.PI = Math.PI;

/**
 * 1/pi
 *
 * @type {Number}
 * @constant
 */
CesiumMath.ONE_OVER_PI = 1.0 / Math.PI;

/**
 * pi/2
 *
 * @type {Number}
 * @constant
 */
CesiumMath.PI_OVER_TWO = Math.PI / 2.0;

/**
 * pi/3
 *
 * @type {Number}
 * @constant
 */
CesiumMath.PI_OVER_THREE = Math.PI / 3.0;

/**
 * pi/4
 *
 * @type {Number}
 * @constant
 */
CesiumMath.PI_OVER_FOUR = Math.PI / 4.0;

/**
 * pi/6
 *
 * @type {Number}
 * @constant
 */
CesiumMath.PI_OVER_SIX = Math.PI / 6.0;

/**
 * 3pi/2
 *
 * @type {Number}
 * @constant
 */
CesiumMath.THREE_PI_OVER_TWO = (3.0 * Math.PI) / 2.0;

/**
 * 2pi
 *
 * @type {Number}
 * @constant
 */
CesiumMath.TWO_PI = 2.0 * Math.PI;

/**
 * 1/2pi
 *
 * @type {Number}
 * @constant
 */
CesiumMath.ONE_OVER_TWO_PI = 1.0 / (2.0 * Math.PI);

/**
 * The number of radians in a degree.
 *
 * @type {Number}
 * @constant
 */
CesiumMath.RADIANS_PER_DEGREE = Math.PI / 180.0;

/**
 * The number of degrees in a radian.
 *
 * @type {Number}
 * @constant
 */
CesiumMath.DEGREES_PER_RADIAN = 180.0 / Math.PI;

/**
 * The number of radians in an arc second.
 *
 * @type {Number}
 * @constant
 */
CesiumMath.RADIANS_PER_ARCSECOND = CesiumMath.RADIANS_PER_DEGREE / 3600.0;

/**
 * Converts degrees to radians.
 * @param {Number} degrees The angle to convert in degrees.
 * @returns {Number} The corresponding angle in radians.
 */
CesiumMath.toRadians = function (degrees) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(degrees)) {
    throw new DeveloperError("degrees is required.");
  }
  //>>includeEnd('debug');
  return degrees * CesiumMath.RADIANS_PER_DEGREE;
};

/**
 * Converts radians to degrees.
 * @param {Number} radians The angle to convert in radians.
 * @returns {Number} The corresponding angle in degrees.
 */
CesiumMath.toDegrees = function (radians) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(radians)) {
    throw new DeveloperError("radians is required.");
  }
  //>>includeEnd('debug');
  return radians * CesiumMath.DEGREES_PER_RADIAN;
};

/**
 * Converts a longitude value, in radians, to the range [<code>-Math.PI</code>, <code>Math.PI</code>).
 *
 * @param {Number} angle The longitude value, in radians, to convert to the range [<code>-Math.PI</code>, <code>Math.PI</code>).
 * @returns {Number} The equivalent longitude value in the range [<code>-Math.PI</code>, <code>Math.PI</code>).
 *
 * @example
 * // Convert 270 degrees to -90 degrees longitude
 * var longitude = Cesium.Math.convertLongitudeRange(Cesium.Math.toRadians(270.0));
 */
CesiumMath.convertLongitudeRange = function (angle) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(angle)) {
    throw new DeveloperError("angle is required.");
  }
  //>>includeEnd('debug');
  var twoPi = CesiumMath.TWO_PI;

  var simplified = angle - Math.floor(angle / twoPi) * twoPi;

  if (simplified < -Math.PI) {
    return simplified + twoPi;
  }
  if (simplified >= Math.PI) {
    return simplified - twoPi;
  }

  return simplified;
};

/**
 * Convenience function that clamps a latitude value, in radians, to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
 * Useful for sanitizing data before use in objects requiring correct range.
 *
 * @param {Number} angle The latitude value, in radians, to clamp to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
 * @returns {Number} The latitude value clamped to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
 *
 * @example
 * // Clamp 108 degrees latitude to 90 degrees latitude
 * var latitude = Cesium.Math.clampToLatitudeRange(Cesium.Math.toRadians(108.0));
 */
CesiumMath.clampToLatitudeRange = function (angle) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(angle)) {
    throw new DeveloperError("angle is required.");
  }
  //>>includeEnd('debug');

  return CesiumMath.clamp(
    angle,
    -1 * CesiumMath.PI_OVER_TWO,
    CesiumMath.PI_OVER_TWO
  );
};

/**
 * Produces an angle in the range -Pi <= angle <= Pi which is equivalent to the provided angle.
 *
 * @param {Number} angle in radians
 * @returns {Number} The angle in the range [<code>-CesiumMath.PI</code>, <code>CesiumMath.PI</code>].
 */
CesiumMath.negativePiToPi = function (angle) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(angle)) {
    throw new DeveloperError("angle is required.");
  }
  //>>includeEnd('debug');
  if (angle >= -CesiumMath.PI && angle <= CesiumMath.PI) {
    // Early exit if the input is already inside the range. This avoids
    // unnecessary math which could introduce floating point error.
    return angle;
  }
  return CesiumMath.zeroToTwoPi(angle + CesiumMath.PI) - CesiumMath.PI;
};

/**
 * Produces an angle in the range 0 <= angle <= 2Pi which is equivalent to the provided angle.
 *
 * @param {Number} angle in radians
 * @returns {Number} The angle in the range [0, <code>CesiumMath.TWO_PI</code>].
 */
CesiumMath.zeroToTwoPi = function (angle) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(angle)) {
    throw new DeveloperError("angle is required.");
  }
  //>>includeEnd('debug');
  if (angle >= 0 && angle <= CesiumMath.TWO_PI) {
    // Early exit if the input is already inside the range. This avoids
    // unnecessary math which could introduce floating point error.
    return angle;
  }
  var mod = CesiumMath.mod(angle, CesiumMath.TWO_PI);
  if (
    Math.abs(mod) < CesiumMath.EPSILON14 &&
    Math.abs(angle) > CesiumMath.EPSILON14
  ) {
    return CesiumMath.TWO_PI;
  }
  return mod;
};

/**
 * The modulo operation that also works for negative dividends.
 *
 * @param {Number} m The dividend.
 * @param {Number} n The divisor.
 * @returns {Number} The remainder.
 */
CesiumMath.mod = function (m, n) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(m)) {
    throw new DeveloperError("m is required.");
  }
  if (!defined(n)) {
    throw new DeveloperError("n is required.");
  }
  if (n === 0.0) {
    throw new DeveloperError("divisor cannot be 0.");
  }
  //>>includeEnd('debug');
  if (CesiumMath.sign(m) === CesiumMath.sign(n) && Math.abs(m) < Math.abs(n)) {
    // Early exit if the input does not need to be modded. This avoids
    // unnecessary math which could introduce floating point error.
    return m;
  }

  return ((m % n) + n) % n;
};

/**
 * Determines if two values are equal using an absolute or relative tolerance test. This is useful
 * to avoid problems due to roundoff error when comparing floating-point values directly. The values are
 * first compared using an absolute tolerance test. If that fails, a relative tolerance test is performed.
 * Use this test if you are unsure of the magnitudes of left and right.
 *
 * @param {Number} left The first value to compare.
 * @param {Number} right The other value to compare.
 * @param {Number} [relativeEpsilon=0] The maximum inclusive delta between <code>left</code> and <code>right</code> for the relative tolerance test.
 * @param {Number} [absoluteEpsilon=relativeEpsilon] The maximum inclusive delta between <code>left</code> and <code>right</code> for the absolute tolerance test.
 * @returns {Boolean} <code>true</code> if the values are equal within the epsilon; otherwise, <code>false</code>.
 *
 * @example
 * var a = Cesium.Math.equalsEpsilon(0.0, 0.01, Cesium.Math.EPSILON2); // true
 * var b = Cesium.Math.equalsEpsilon(0.0, 0.1, Cesium.Math.EPSILON2);  // false
 * var c = Cesium.Math.equalsEpsilon(3699175.1634344, 3699175.2, Cesium.Math.EPSILON7); // true
 * var d = Cesium.Math.equalsEpsilon(3699175.1634344, 3699175.2, Cesium.Math.EPSILON9); // false
 */
CesiumMath.equalsEpsilon = function (
  left,
  right,
  relativeEpsilon,
  absoluteEpsilon
) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(left)) {
    throw new DeveloperError("left is required.");
  }
  if (!defined(right)) {
    throw new DeveloperError("right is required.");
  }
  //>>includeEnd('debug');

  relativeEpsilon = defaultValue(relativeEpsilon, 0.0);
  absoluteEpsilon = defaultValue(absoluteEpsilon, relativeEpsilon);
  var absDiff = Math.abs(left - right);
  return (
    absDiff <= absoluteEpsilon ||
    absDiff <= relativeEpsilon * Math.max(Math.abs(left), Math.abs(right))
  );
};

/**
 * Determines if the left value is less than the right value. If the two values are within
 * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns false.
 *
 * @param {Number} left The first number to compare.
 * @param {Number} right The second number to compare.
 * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
 * @returns {Boolean} <code>true</code> if <code>left</code> is less than <code>right</code> by more than
 *          <code>absoluteEpsilon<code>. <code>false</code> if <code>left</code> is greater or if the two
 *          values are nearly equal.
 */
CesiumMath.lessThan = function (left, right, absoluteEpsilon) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(left)) {
    throw new DeveloperError("first is required.");
  }
  if (!defined(right)) {
    throw new DeveloperError("second is required.");
  }
  if (!defined(absoluteEpsilon)) {
    throw new DeveloperError("absoluteEpsilon is required.");
  }
  //>>includeEnd('debug');
  return left - right < -absoluteEpsilon;
};

/**
 * Determines if the left value is less than or equal to the right value. If the two values are within
 * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns true.
 *
 * @param {Number} left The first number to compare.
 * @param {Number} right The second number to compare.
 * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
 * @returns {Boolean} <code>true</code> if <code>left</code> is less than <code>right</code> or if the
 *          the values are nearly equal.
 */
CesiumMath.lessThanOrEquals = function (left, right, absoluteEpsilon) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(left)) {
    throw new DeveloperError("first is required.");
  }
  if (!defined(right)) {
    throw new DeveloperError("second is required.");
  }
  if (!defined(absoluteEpsilon)) {
    throw new DeveloperError("absoluteEpsilon is required.");
  }
  //>>includeEnd('debug');
  return left - right < absoluteEpsilon;
};

/**
 * Determines if the left value is greater the right value. If the two values are within
 * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns false.
 *
 * @param {Number} left The first number to compare.
 * @param {Number} right The second number to compare.
 * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
 * @returns {Boolean} <code>true</code> if <code>left</code> is greater than <code>right</code> by more than
 *          <code>absoluteEpsilon<code>. <code>false</code> if <code>left</code> is less or if the two
 *          values are nearly equal.
 */
CesiumMath.greaterThan = function (left, right, absoluteEpsilon) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(left)) {
    throw new DeveloperError("first is required.");
  }
  if (!defined(right)) {
    throw new DeveloperError("second is required.");
  }
  if (!defined(absoluteEpsilon)) {
    throw new DeveloperError("absoluteEpsilon is required.");
  }
  //>>includeEnd('debug');
  return left - right > absoluteEpsilon;
};

/**
 * Determines if the left value is greater than or equal to the right value. If the two values are within
 * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns true.
 *
 * @param {Number} left The first number to compare.
 * @param {Number} right The second number to compare.
 * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
 * @returns {Boolean} <code>true</code> if <code>left</code> is greater than <code>right</code> or if the
 *          the values are nearly equal.
 */
CesiumMath.greaterThanOrEquals = function (left, right, absoluteEpsilon) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(left)) {
    throw new DeveloperError("first is required.");
  }
  if (!defined(right)) {
    throw new DeveloperError("second is required.");
  }
  if (!defined(absoluteEpsilon)) {
    throw new DeveloperError("absoluteEpsilon is required.");
  }
  //>>includeEnd('debug');
  return left - right > -absoluteEpsilon;
};

var factorials = [1];

/**
 * Computes the factorial of the provided number.
 *
 * @param {Number} n The number whose factorial is to be computed.
 * @returns {Number} The factorial of the provided number or undefined if the number is less than 0.
 *
 * @exception {DeveloperError} A number greater than or equal to 0 is required.
 *
 *
 * @example
 * //Compute 7!, which is equal to 5040
 * var computedFactorial = Cesium.Math.factorial(7);
 *
 * @see {@link http://en.wikipedia.org/wiki/Factorial|Factorial on Wikipedia}
 */
CesiumMath.factorial = function (n) {
  //>>includeStart('debug', pragmas.debug);
  if (typeof n !== "number" || n < 0) {
    throw new DeveloperError(
      "A number greater than or equal to 0 is required."
    );
  }
  //>>includeEnd('debug');

  var length = factorials.length;
  if (n >= length) {
    var sum = factorials[length - 1];
    for (var i = length; i <= n; i++) {
      var next = sum * i;
      factorials.push(next);
      sum = next;
    }
  }
  return factorials[n];
};

/**
 * Increments a number with a wrapping to a minimum value if the number exceeds the maximum value.
 *
 * @param {Number} [n] The number to be incremented.
 * @param {Number} [maximumValue] The maximum incremented value before rolling over to the minimum value.
 * @param {Number} [minimumValue=0.0] The number reset to after the maximum value has been exceeded.
 * @returns {Number} The incremented number.
 *
 * @exception {DeveloperError} Maximum value must be greater than minimum value.
 *
 * @example
 * var n = Cesium.Math.incrementWrap(5, 10, 0); // returns 6
 * var n = Cesium.Math.incrementWrap(10, 10, 0); // returns 0
 */
CesiumMath.incrementWrap = function (n, maximumValue, minimumValue) {
  minimumValue = defaultValue(minimumValue, 0.0);

  //>>includeStart('debug', pragmas.debug);
  if (!defined(n)) {
    throw new DeveloperError("n is required.");
  }
  if (maximumValue <= minimumValue) {
    throw new DeveloperError("maximumValue must be greater than minimumValue.");
  }
  //>>includeEnd('debug');

  ++n;
  if (n > maximumValue) {
    n = minimumValue;
  }
  return n;
};

/**
 * Determines if a non-negative integer is a power of two.
 * The maximum allowed input is (2^32)-1 due to 32-bit bitwise operator limitation in Javascript.
 *
 * @param {Number} n The integer to test in the range [0, (2^32)-1].
 * @returns {Boolean} <code>true</code> if the number if a power of two; otherwise, <code>false</code>.
 *
 * @exception {DeveloperError} A number between 0 and (2^32)-1 is required.
 *
 * @example
 * var t = Cesium.Math.isPowerOfTwo(16); // true
 * var f = Cesium.Math.isPowerOfTwo(20); // false
 */
CesiumMath.isPowerOfTwo = function (n) {
  //>>includeStart('debug', pragmas.debug);
  if (typeof n !== "number" || n < 0 || n > 4294967295) {
    throw new DeveloperError("A number between 0 and (2^32)-1 is required.");
  }
  //>>includeEnd('debug');

  return n !== 0 && (n & (n - 1)) === 0;
};

/**
 * Computes the next power-of-two integer greater than or equal to the provided non-negative integer.
 * The maximum allowed input is 2^31 due to 32-bit bitwise operator limitation in Javascript.
 *
 * @param {Number} n The integer to test in the range [0, 2^31].
 * @returns {Number} The next power-of-two integer.
 *
 * @exception {DeveloperError} A number between 0 and 2^31 is required.
 *
 * @example
 * var n = Cesium.Math.nextPowerOfTwo(29); // 32
 * var m = Cesium.Math.nextPowerOfTwo(32); // 32
 */
CesiumMath.nextPowerOfTwo = function (n) {
  //>>includeStart('debug', pragmas.debug);
  if (typeof n !== "number" || n < 0 || n > 2147483648) {
    throw new DeveloperError("A number between 0 and 2^31 is required.");
  }
  //>>includeEnd('debug');

  // From http://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
  --n;
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  ++n;

  return n;
};

/**
 * Computes the previous power-of-two integer less than or equal to the provided non-negative integer.
 * The maximum allowed input is (2^32)-1 due to 32-bit bitwise operator limitation in Javascript.
 *
 * @param {Number} n The integer to test in the range [0, (2^32)-1].
 * @returns {Number} The previous power-of-two integer.
 *
 * @exception {DeveloperError} A number between 0 and (2^32)-1 is required.
 *
 * @example
 * var n = Cesium.Math.previousPowerOfTwo(29); // 16
 * var m = Cesium.Math.previousPowerOfTwo(32); // 32
 */
CesiumMath.previousPowerOfTwo = function (n) {
  //>>includeStart('debug', pragmas.debug);
  if (typeof n !== "number" || n < 0 || n > 4294967295) {
    throw new DeveloperError("A number between 0 and (2^32)-1 is required.");
  }
  //>>includeEnd('debug');

  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  n |= n >> 32;

  // The previous bitwise operations implicitly convert to signed 32-bit. Use `>>>` to convert to unsigned
  n = (n >>> 0) - (n >>> 1);

  return n;
};

/**
 * Constraint a value to lie between two values.
 *
 * @param {Number} value The value to constrain.
 * @param {Number} min The minimum value.
 * @param {Number} max The maximum value.
 * @returns {Number} The value clamped so that min <= value <= max.
 */
CesiumMath.clamp = function (value, min, max) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(value)) {
    throw new DeveloperError("value is required");
  }
  if (!defined(min)) {
    throw new DeveloperError("min is required.");
  }
  if (!defined(max)) {
    throw new DeveloperError("max is required.");
  }
  //>>includeEnd('debug');
  return value < min ? min : value > max ? max : value;
};

var randomNumberGenerator = new mersenneTwister();

/**
 * Sets the seed used by the random number generator
 * in {@link CesiumMath#nextRandomNumber}.
 *
 * @param {Number} seed An integer used as the seed.
 */
CesiumMath.setRandomNumberSeed = function (seed) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(seed)) {
    throw new DeveloperError("seed is required.");
  }
  //>>includeEnd('debug');

  randomNumberGenerator = new mersenneTwister(seed);
};

/**
 * Generates a random floating point number in the range of [0.0, 1.0)
 * using a Mersenne twister.
 *
 * @returns {Number} A random number in the range of [0.0, 1.0).
 *
 * @see CesiumMath.setRandomNumberSeed
 * @see {@link http://en.wikipedia.org/wiki/Mersenne_twister|Mersenne twister on Wikipedia}
 */
CesiumMath.nextRandomNumber = function () {
  return randomNumberGenerator.random();
};

/**
 * Generates a random number between two numbers.
 *
 * @param {Number} min The minimum value.
 * @param {Number} max The maximum value.
 * @returns {Number} A random number between the min and max.
 */
CesiumMath.randomBetween = function (min, max) {
  return CesiumMath.nextRandomNumber() * (max - min) + min;
};

/**
 * Computes <code>Math.acos(value)</code>, but first clamps <code>value</code> to the range [-1.0, 1.0]
 * so that the function will never return NaN.
 *
 * @param {Number} value The value for which to compute acos.
 * @returns {Number} The acos of the value if the value is in the range [-1.0, 1.0], or the acos of -1.0 or 1.0,
 *          whichever is closer, if the value is outside the range.
 */
CesiumMath.acosClamped = function (value) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(value)) {
    throw new DeveloperError("value is required.");
  }
  //>>includeEnd('debug');
  return Math.acos(CesiumMath.clamp(value, -1.0, 1.0));
};

/**
 * Computes <code>Math.asin(value)</code>, but first clamps <code>value</code> to the range [-1.0, 1.0]
 * so that the function will never return NaN.
 *
 * @param {Number} value The value for which to compute asin.
 * @returns {Number} The asin of the value if the value is in the range [-1.0, 1.0], or the asin of -1.0 or 1.0,
 *          whichever is closer, if the value is outside the range.
 */
CesiumMath.asinClamped = function (value) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(value)) {
    throw new DeveloperError("value is required.");
  }
  //>>includeEnd('debug');
  return Math.asin(CesiumMath.clamp(value, -1.0, 1.0));
};

/**
 * Finds the chord length between two points given the circle's radius and the angle between the points.
 *
 * @param {Number} angle The angle between the two points.
 * @param {Number} radius The radius of the circle.
 * @returns {Number} The chord length.
 */
CesiumMath.chordLength = function (angle, radius) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(angle)) {
    throw new DeveloperError("angle is required.");
  }
  if (!defined(radius)) {
    throw new DeveloperError("radius is required.");
  }
  //>>includeEnd('debug');
  return 2.0 * radius * Math.sin(angle * 0.5);
};

/**
 * Finds the logarithm of a number to a base.
 *
 * @param {Number} number The number.
 * @param {Number} base The base.
 * @returns {Number} The result.
 */
CesiumMath.logBase = function (number, base) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(number)) {
    throw new DeveloperError("number is required.");
  }
  if (!defined(base)) {
    throw new DeveloperError("base is required.");
  }
  //>>includeEnd('debug');
  return Math.log(number) / Math.log(base);
};

/**
 * Finds the cube root of a number.
 * Returns NaN if <code>number</code> is not provided.
 *
 * @function
 * @param {Number} [number] The number.
 * @returns {Number} The result.
 */
// eslint-disable-next-line es/no-math-cbrt
CesiumMath.cbrt = defaultValue(Math.cbrt, function cbrt(number) {
  var result = Math.pow(Math.abs(number), 1.0 / 3.0);
  return number < 0.0 ? -result : result;
});

/**
 * Finds the base 2 logarithm of a number.
 *
 * @function
 * @param {Number} number The number.
 * @returns {Number} The result.
 */
// eslint-disable-next-line es/no-math-log2
CesiumMath.log2 = defaultValue(Math.log2, function log2(number) {
  return Math.log(number) * Math.LOG2E;
});

/**
 * @private
 */
CesiumMath.fog = function (distanceToCamera, density) {
  var scalar = distanceToCamera * density;
  return 1.0 - Math.exp(-(scalar * scalar));
};

/**
 * Computes a fast approximation of Atan for input in the range [-1, 1].
 *
 * Based on Michal Drobot's approximation from ShaderFastLibs,
 * which in turn is based on "Efficient approximations for the arctangent function,"
 * Rajan, S. Sichun Wang Inkol, R. Joyal, A., May 2006.
 * Adapted from ShaderFastLibs under MIT License.
 *
 * @param {Number} x An input number in the range [-1, 1]
 * @returns {Number} An approximation of atan(x)
 */
CesiumMath.fastApproximateAtan = function (x) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.number("x", x);
  //>>includeEnd('debug');

  return x * (-0.1784 * Math.abs(x) - 0.0663 * x * x + 1.0301);
};

/**
 * Computes a fast approximation of Atan2(x, y) for arbitrary input scalars.
 *
 * Range reduction math based on nvidia's cg reference implementation: http://developer.download.nvidia.com/cg/atan2.html
 *
 * @param {Number} x An input number that isn't zero if y is zero.
 * @param {Number} y An input number that isn't zero if x is zero.
 * @returns {Number} An approximation of atan2(x, y)
 */
CesiumMath.fastApproximateAtan2 = function (x, y) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.number("x", x);
  Check.typeOf.number("y", y);
  //>>includeEnd('debug');

  // atan approximations are usually only reliable over [-1, 1]
  // So reduce the range by flipping whether x or y is on top based on which is bigger.
  var opposite;
  var adjacent;
  var t = Math.abs(x); // t used as swap and atan result.
  opposite = Math.abs(y);
  adjacent = Math.max(t, opposite);
  opposite = Math.min(t, opposite);

  var oppositeOverAdjacent = opposite / adjacent;
  //>>includeStart('debug', pragmas.debug);
  if (isNaN(oppositeOverAdjacent)) {
    throw new DeveloperError("either x or y must be nonzero");
  }
  //>>includeEnd('debug');
  t = CesiumMath.fastApproximateAtan(oppositeOverAdjacent);

  // Undo range reduction
  t = Math.abs(y) > Math.abs(x) ? CesiumMath.PI_OVER_TWO - t : t;
  t = x < 0.0 ? CesiumMath.PI - t : t;
  t = y < 0.0 ? -t : t;
  return t;
};

/**
 * Converts an object representing a set of name/value pairs into a query string,
 * with names and values encoded properly for use in a URL.  Values that are arrays
 * will produce multiple values with the same name.
 * @function objectToQuery
 *
 * @param {Object} obj The object containing data to encode.
 * @returns {String} An encoded query string.
 *
 *
 * @example
 * var str = Cesium.objectToQuery({
 *     key1 : 'some value',
 *     key2 : 'a/b',
 *     key3 : ['x', 'y']
 * });
 *
 * @see queryToObject
 * // str will be:
 * // 'key1=some%20value&key2=a%2Fb&key3=x&key3=y'
 */
function objectToQuery(obj) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(obj)) {
    throw new DeveloperError("obj is required.");
  }
  //>>includeEnd('debug');

  var result = "";
  for (var propName in obj) {
    if (obj.hasOwnProperty(propName)) {
      var value = obj[propName];

      var part = encodeURIComponent(propName) + "=";
      if (Array.isArray(value)) {
        for (var i = 0, len = value.length; i < len; ++i) {
          result += part + encodeURIComponent(value[i]) + "&";
        }
      } else {
        result += part + encodeURIComponent(value) + "&";
      }
    }
  }

  // trim last &
  result = result.slice(0, -1);

  // This function used to replace %20 with + which is more compact and readable.
  // However, some servers didn't properly handle + as a space.
  // https://github.com/CesiumGS/cesium/issues/2192

  return result;
}

/**
 * Parses a query string into an object, where the keys and values of the object are the
 * name/value pairs from the query string, decoded. If a name appears multiple times,
 * the value in the object will be an array of values.
 * @function queryToObject
 *
 * @param {String} queryString The query string.
 * @returns {Object} An object containing the parameters parsed from the query string.
 *
 *
 * @example
 * var obj = Cesium.queryToObject('key1=some%20value&key2=a%2Fb&key3=x&key3=y');
 * // obj will be:
 * // {
 * //   key1 : 'some value',
 * //   key2 : 'a/b',
 * //   key3 : ['x', 'y']
 * // }
 *
 * @see objectToQuery
 */
function queryToObject(queryString) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(queryString)) {
    throw new DeveloperError("queryString is required.");
  }
  //>>includeEnd('debug');

  var result = {};
  if (queryString === "") {
    return result;
  }
  var parts = queryString.replace(/\+/g, "%20").split(/[&;]/);
  for (var i = 0, len = parts.length; i < len; ++i) {
    var subparts = parts[i].split("=");

    var name = decodeURIComponent(subparts[0]);
    var value = subparts[1];
    if (defined(value)) {
      value = decodeURIComponent(value);
    } else {
      value = "";
    }

    var resultValue = result[name];
    if (typeof resultValue === "string") {
      // expand the single value to an array
      result[name] = [resultValue, value];
    } else if (Array.isArray(resultValue)) {
      resultValue.push(value);
    } else {
      result[name] = value;
    }
  }
  return result;
}

/**
 * State of the request.
 *
 * @enum {Number}
 */
var RequestState = {
  /**
   * Initial unissued state.
   *
   * @type Number
   * @constant
   */
  UNISSUED: 0,

  /**
   * Issued but not yet active. Will become active when open slots are available.
   *
   * @type Number
   * @constant
   */
  ISSUED: 1,

  /**
   * Actual http request has been sent.
   *
   * @type Number
   * @constant
   */
  ACTIVE: 2,

  /**
   * Request completed successfully.
   *
   * @type Number
   * @constant
   */
  RECEIVED: 3,

  /**
   * Request was cancelled, either explicitly or automatically because of low priority.
   *
   * @type Number
   * @constant
   */
  CANCELLED: 4,

  /**
   * Request failed.
   *
   * @type Number
   * @constant
   */
  FAILED: 5,
};
var RequestState$1 = Object.freeze(RequestState);

/**
 * An enum identifying the type of request. Used for finer grained logging and priority sorting.
 *
 * @enum {Number}
 */
var RequestType = {
  /**
   * Terrain request.
   *
   * @type Number
   * @constant
   */
  TERRAIN: 0,

  /**
   * Imagery request.
   *
   * @type Number
   * @constant
   */
  IMAGERY: 1,

  /**
   * 3D Tiles request.
   *
   * @type Number
   * @constant
   */
  TILES3D: 2,

  /**
   * Other request.
   *
   * @type Number
   * @constant
   */
  OTHER: 3,
};
var RequestType$1 = Object.freeze(RequestType);

/**
 * Stores information for making a request. In general this does not need to be constructed directly.
 *
 * @alias Request
 * @constructor

 * @param {Object} [options] An object with the following properties:
 * @param {String} [options.url] The url to request.
 * @param {Request.RequestCallback} [options.requestFunction] The function that makes the actual data request.
 * @param {Request.CancelCallback} [options.cancelFunction] The function that is called when the request is cancelled.
 * @param {Request.PriorityCallback} [options.priorityFunction] The function that is called to update the request's priority, which occurs once per frame.
 * @param {Number} [options.priority=0.0] The initial priority of the request.
 * @param {Boolean} [options.throttle=false] Whether to throttle and prioritize the request. If false, the request will be sent immediately. If true, the request will be throttled and sent based on priority.
 * @param {Boolean} [options.throttleByServer=false] Whether to throttle the request by server.
 * @param {RequestType} [options.type=RequestType.OTHER] The type of request.
 */
function Request(options) {
  options = defaultValue(options, defaultValue.EMPTY_OBJECT);

  var throttleByServer = defaultValue(options.throttleByServer, false);
  var throttle = defaultValue(options.throttle, false);

  /**
   * The URL to request.
   *
   * @type {String}
   */
  this.url = options.url;

  /**
   * The function that makes the actual data request.
   *
   * @type {Request.RequestCallback}
   */
  this.requestFunction = options.requestFunction;

  /**
   * The function that is called when the request is cancelled.
   *
   * @type {Request.CancelCallback}
   */
  this.cancelFunction = options.cancelFunction;

  /**
   * The function that is called to update the request's priority, which occurs once per frame.
   *
   * @type {Request.PriorityCallback}
   */
  this.priorityFunction = options.priorityFunction;

  /**
   * Priority is a unit-less value where lower values represent higher priority.
   * For world-based objects, this is usually the distance from the camera.
   * A request that does not have a priority function defaults to a priority of 0.
   *
   * If priorityFunction is defined, this value is updated every frame with the result of that call.
   *
   * @type {Number}
   * @default 0.0
   */
  this.priority = defaultValue(options.priority, 0.0);

  /**
   * Whether to throttle and prioritize the request. If false, the request will be sent immediately. If true, the
   * request will be throttled and sent based on priority.
   *
   * @type {Boolean}
   * @readonly
   *
   * @default false
   */
  this.throttle = throttle;

  /**
   * Whether to throttle the request by server. Browsers typically support about 6-8 parallel connections
   * for HTTP/1 servers, and an unlimited amount of connections for HTTP/2 servers. Setting this value
   * to <code>true</code> is preferable for requests going through HTTP/1 servers.
   *
   * @type {Boolean}
   * @readonly
   *
   * @default false
   */
  this.throttleByServer = throttleByServer;

  /**
   * Type of request.
   *
   * @type {RequestType}
   * @readonly
   *
   * @default RequestType.OTHER
   */
  this.type = defaultValue(options.type, RequestType$1.OTHER);

  /**
   * A key used to identify the server that a request is going to. It is derived from the url's authority and scheme.
   *
   * @type {String}
   *
   * @private
   */
  this.serverKey = undefined;

  /**
   * The current state of the request.
   *
   * @type {RequestState}
   * @readonly
   */
  this.state = RequestState$1.UNISSUED;

  /**
   * The requests's deferred promise.
   *
   * @type {Object}
   *
   * @private
   */
  this.deferred = undefined;

  /**
   * Whether the request was explicitly cancelled.
   *
   * @type {Boolean}
   *
   * @private
   */
  this.cancelled = false;
}

/**
 * Mark the request as cancelled.
 *
 * @private
 */
Request.prototype.cancel = function () {
  this.cancelled = true;
};

/**
 * Duplicates a Request instance.
 *
 * @param {Request} [result] The object onto which to store the result.
 *
 * @returns {Request} The modified result parameter or a new Resource instance if one was not provided.
 */
Request.prototype.clone = function (result) {
  if (!defined(result)) {
    return new Request(this);
  }

  result.url = this.url;
  result.requestFunction = this.requestFunction;
  result.cancelFunction = this.cancelFunction;
  result.priorityFunction = this.priorityFunction;
  result.priority = this.priority;
  result.throttle = this.throttle;
  result.throttleByServer = this.throttleByServer;
  result.type = this.type;
  result.serverKey = this.serverKey;

  // These get defaulted because the cloned request hasn't been issued
  result.state = this.RequestState.UNISSUED;
  result.deferred = undefined;
  result.cancelled = false;

  return result;
};

/**
 * Parses the result of XMLHttpRequest's getAllResponseHeaders() method into
 * a dictionary.
 *
 * @function parseResponseHeaders
 *
 * @param {String} headerString The header string returned by getAllResponseHeaders().  The format is
 *                 described here: http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders()-method
 * @returns {Object} A dictionary of key/value pairs, where each key is the name of a header and the corresponding value
 *                   is that header's value.
 *
 * @private
 */
function parseResponseHeaders(headerString) {
  var headers = {};

  if (!headerString) {
    return headers;
  }

  var headerPairs = headerString.split("\u000d\u000a");

  for (var i = 0; i < headerPairs.length; ++i) {
    var headerPair = headerPairs[i];
    // Can't use split() here because it does the wrong thing
    // if the header value has the string ": " in it.
    var index = headerPair.indexOf("\u003a\u0020");
    if (index > 0) {
      var key = headerPair.substring(0, index);
      var val = headerPair.substring(index + 2);
      headers[key] = val;
    }
  }

  return headers;
}

/**
 * An event that is raised when a request encounters an error.
 *
 * @constructor
 * @alias RequestErrorEvent
 *
 * @param {Number} [statusCode] The HTTP error status code, such as 404.
 * @param {Object} [response] The response included along with the error.
 * @param {String|Object} [responseHeaders] The response headers, represented either as an object literal or as a
 *                        string in the format returned by XMLHttpRequest's getAllResponseHeaders() function.
 */
function RequestErrorEvent(statusCode, response, responseHeaders) {
  /**
   * The HTTP error status code, such as 404.  If the error does not have a particular
   * HTTP code, this property will be undefined.
   *
   * @type {Number}
   */
  this.statusCode = statusCode;

  /**
   * The response included along with the error.  If the error does not include a response,
   * this property will be undefined.
   *
   * @type {Object}
   */
  this.response = response;

  /**
   * The headers included in the response, represented as an object literal of key/value pairs.
   * If the error does not include any headers, this property will be undefined.
   *
   * @type {Object}
   */
  this.responseHeaders = responseHeaders;

  if (typeof this.responseHeaders === "string") {
    this.responseHeaders = parseResponseHeaders(this.responseHeaders);
  }
}

/**
 * Creates a string representing this RequestErrorEvent.
 * @memberof RequestErrorEvent
 *
 * @returns {String} A string representing the provided RequestErrorEvent.
 */
RequestErrorEvent.prototype.toString = function () {
  var str = "Request has failed.";
  if (defined(this.statusCode)) {
    str += " Status Code: " + this.statusCode;
  }
  return str;
};

/**
 * A generic utility class for managing subscribers for a particular event.
 * This class is usually instantiated inside of a container class and
 * exposed as a property for others to subscribe to.
 *
 * @alias Event
 * @constructor
 * @example
 * MyObject.prototype.myListener = function(arg1, arg2) {
 *     this.myArg1Copy = arg1;
 *     this.myArg2Copy = arg2;
 * }
 *
 * var myObjectInstance = new MyObject();
 * var evt = new Cesium.Event();
 * evt.addEventListener(MyObject.prototype.myListener, myObjectInstance);
 * evt.raiseEvent('1', '2');
 * evt.removeEventListener(MyObject.prototype.myListener);
 */
function Event() {
  this._listeners = [];
  this._scopes = [];
  this._toRemove = [];
  this._insideRaiseEvent = false;
}

Object.defineProperties(Event.prototype, {
  /**
   * The number of listeners currently subscribed to the event.
   * @memberof Event.prototype
   * @type {Number}
   * @readonly
   */
  numberOfListeners: {
    get: function () {
      return this._listeners.length - this._toRemove.length;
    },
  },
});

/**
 * Registers a callback function to be executed whenever the event is raised.
 * An optional scope can be provided to serve as the <code>this</code> pointer
 * in which the function will execute.
 *
 * @param {Function} listener The function to be executed when the event is raised.
 * @param {Object} [scope] An optional object scope to serve as the <code>this</code>
 *        pointer in which the listener function will execute.
 * @returns {Event.RemoveCallback} A function that will remove this event listener when invoked.
 *
 * @see Event#raiseEvent
 * @see Event#removeEventListener
 */
Event.prototype.addEventListener = function (listener, scope) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.func("listener", listener);
  //>>includeEnd('debug');

  this._listeners.push(listener);
  this._scopes.push(scope);

  var event = this;
  return function () {
    event.removeEventListener(listener, scope);
  };
};

/**
 * Unregisters a previously registered callback.
 *
 * @param {Function} listener The function to be unregistered.
 * @param {Object} [scope] The scope that was originally passed to addEventListener.
 * @returns {Boolean} <code>true</code> if the listener was removed; <code>false</code> if the listener and scope are not registered with the event.
 *
 * @see Event#addEventListener
 * @see Event#raiseEvent
 */
Event.prototype.removeEventListener = function (listener, scope) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.func("listener", listener);
  //>>includeEnd('debug');

  var listeners = this._listeners;
  var scopes = this._scopes;

  var index = -1;
  for (var i = 0; i < listeners.length; i++) {
    if (listeners[i] === listener && scopes[i] === scope) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    if (this._insideRaiseEvent) {
      //In order to allow removing an event subscription from within
      //a callback, we don't actually remove the items here.  Instead
      //remember the index they are at and undefined their value.
      this._toRemove.push(index);
      listeners[index] = undefined;
      scopes[index] = undefined;
    } else {
      listeners.splice(index, 1);
      scopes.splice(index, 1);
    }
    return true;
  }

  return false;
};

function compareNumber(a, b) {
  return b - a;
}

/**
 * Raises the event by calling each registered listener with all supplied arguments.
 *
 * @param {...Object} arguments This method takes any number of parameters and passes them through to the listener functions.
 *
 * @see Event#addEventListener
 * @see Event#removeEventListener
 */
Event.prototype.raiseEvent = function () {
  this._insideRaiseEvent = true;

  var i;
  var listeners = this._listeners;
  var scopes = this._scopes;
  var length = listeners.length;

  for (i = 0; i < length; i++) {
    var listener = listeners[i];
    if (defined(listener)) {
      listeners[i].apply(scopes[i], arguments);
    }
  }

  //Actually remove items removed in removeEventListener.
  var toRemove = this._toRemove;
  length = toRemove.length;
  if (length > 0) {
    toRemove.sort(compareNumber);
    for (i = 0; i < length; i++) {
      var index = toRemove[i];
      listeners.splice(index, 1);
      scopes.splice(index, 1);
    }
    toRemove.length = 0;
  }

  this._insideRaiseEvent = false;
};

/**
 * Array implementation of a heap.
 *
 * @alias Heap
 * @constructor
 * @private
 *
 * @param {Object} options Object with the following properties:
 * @param {Heap.ComparatorCallback} options.comparator The comparator to use for the heap. If comparator(a, b) is less than 0, sort a to a lower index than b, otherwise sort to a higher index.
 */
function Heap(options) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.object("options", options);
  Check.defined("options.comparator", options.comparator);
  //>>includeEnd('debug');

  this._comparator = options.comparator;
  this._array = [];
  this._length = 0;
  this._maximumLength = undefined;
}

Object.defineProperties(Heap.prototype, {
  /**
   * Gets the length of the heap.
   *
   * @memberof Heap.prototype
   *
   * @type {Number}
   * @readonly
   */
  length: {
    get: function () {
      return this._length;
    },
  },

  /**
   * Gets the internal array.
   *
   * @memberof Heap.prototype
   *
   * @type {Array}
   * @readonly
   */
  internalArray: {
    get: function () {
      return this._array;
    },
  },

  /**
   * Gets and sets the maximum length of the heap.
   *
   * @memberof Heap.prototype
   *
   * @type {Number}
   */
  maximumLength: {
    get: function () {
      return this._maximumLength;
    },
    set: function (value) {
      //>>includeStart('debug', pragmas.debug);
      Check.typeOf.number.greaterThanOrEquals("maximumLength", value, 0);
      //>>includeEnd('debug');
      var originalLength = this._length;
      if (value < originalLength) {
        var array = this._array;
        // Remove trailing references
        for (var i = value; i < originalLength; ++i) {
          array[i] = undefined;
        }
        this._length = value;
        array.length = value;
      }
      this._maximumLength = value;
    },
  },

  /**
   * The comparator to use for the heap. If comparator(a, b) is less than 0, sort a to a lower index than b, otherwise sort to a higher index.
   *
   * @memberof Heap.prototype
   *
   * @type {Heap.ComparatorCallback}
   */
  comparator: {
    get: function () {
      return this._comparator;
    },
  },
});

function swap(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

/**
 * Resizes the internal array of the heap.
 *
 * @param {Number} [length] The length to resize internal array to. Defaults to the current length of the heap.
 */
Heap.prototype.reserve = function (length) {
  length = defaultValue(length, this._length);
  this._array.length = length;
};

/**
 * Update the heap so that index and all descendants satisfy the heap property.
 *
 * @param {Number} [index=0] The starting index to heapify from.
 */
Heap.prototype.heapify = function (index) {
  index = defaultValue(index, 0);
  var length = this._length;
  var comparator = this._comparator;
  var array = this._array;
  var candidate = -1;
  var inserting = true;

  while (inserting) {
    var right = 2 * (index + 1);
    var left = right - 1;

    if (left < length && comparator(array[left], array[index]) < 0) {
      candidate = left;
    } else {
      candidate = index;
    }

    if (right < length && comparator(array[right], array[candidate]) < 0) {
      candidate = right;
    }
    if (candidate !== index) {
      swap(array, candidate, index);
      index = candidate;
    } else {
      inserting = false;
    }
  }
};

/**
 * Resort the heap.
 */
Heap.prototype.resort = function () {
  var length = this._length;
  for (var i = Math.ceil(length / 2); i >= 0; --i) {
    this.heapify(i);
  }
};

/**
 * Insert an element into the heap. If the length would grow greater than maximumLength
 * of the heap, extra elements are removed.
 *
 * @param {*} element The element to insert
 *
 * @return {*} The element that was removed from the heap if the heap is at full capacity.
 */
Heap.prototype.insert = function (element) {
  //>>includeStart('debug', pragmas.debug);
  Check.defined("element", element);
  //>>includeEnd('debug');

  var array = this._array;
  var comparator = this._comparator;
  var maximumLength = this._maximumLength;

  var index = this._length++;
  if (index < array.length) {
    array[index] = element;
  } else {
    array.push(element);
  }

  while (index !== 0) {
    var parent = Math.floor((index - 1) / 2);
    if (comparator(array[index], array[parent]) < 0) {
      swap(array, index, parent);
      index = parent;
    } else {
      break;
    }
  }

  var removedElement;

  if (defined(maximumLength) && this._length > maximumLength) {
    removedElement = array[maximumLength];
    this._length = maximumLength;
  }

  return removedElement;
};

/**
 * Remove the element specified by index from the heap and return it.
 *
 * @param {Number} [index=0] The index to remove.
 * @returns {*} The specified element of the heap.
 */
Heap.prototype.pop = function (index) {
  index = defaultValue(index, 0);
  if (this._length === 0) {
    return undefined;
  }
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.number.lessThan("index", index, this._length);
  //>>includeEnd('debug');

  var array = this._array;
  var root = array[index];
  swap(array, index, --this._length);
  this.heapify(index);
  array[this._length] = undefined; // Remove trailing reference
  return root;
};

function sortRequests(a, b) {
  return a.priority - b.priority;
}

var statistics = {
  numberOfAttemptedRequests: 0,
  numberOfActiveRequests: 0,
  numberOfCancelledRequests: 0,
  numberOfCancelledActiveRequests: 0,
  numberOfFailedRequests: 0,
  numberOfActiveRequestsEver: 0,
  lastNumberOfActiveRequests: 0,
};

var priorityHeapLength = 20;
var requestHeap = new Heap({
  comparator: sortRequests,
});
requestHeap.maximumLength = priorityHeapLength;
requestHeap.reserve(priorityHeapLength);

var activeRequests = [];
var numberOfActiveRequestsByServer = {};

var pageUri =
  typeof document !== "undefined" ? new URI(document.location.href) : new URI();

var requestCompletedEvent = new Event();

/**
 * The request scheduler is used to track and constrain the number of active requests in order to prioritize incoming requests. The ability
 * to retain control over the number of requests in CesiumJS is important because due to events such as changes in the camera position,
 * a lot of new requests may be generated and a lot of in-flight requests may become redundant. The request scheduler manually constrains the
 * number of requests so that newer requests wait in a shorter queue and don't have to compete for bandwidth with requests that have expired.
 *
 * @namespace RequestScheduler
 *
 */
function RequestScheduler() {}

/**
 * The maximum number of simultaneous active requests. Un-throttled requests do not observe this limit.
 * @type {Number}
 * @default 50
 */
RequestScheduler.maximumRequests = 50;

/**
 * The maximum number of simultaneous active requests per server. Un-throttled requests or servers specifically
 * listed in {@link requestsByServer} do not observe this limit.
 * @type {Number}
 * @default 6
 */
RequestScheduler.maximumRequestsPerServer = 6;

/**
 * A per server key list of overrides to use for throttling instead of <code>maximumRequestsPerServer</code>
 * @type {Object}
 *
 * @example
 * RequestScheduler.requestsByServer = {
 *   'api.cesium.com:443': 18,
 *   'assets.cesium.com:443': 18
 * };
 */
RequestScheduler.requestsByServer = {
  "api.cesium.com:443": 18,
  "assets.cesium.com:443": 18,
};

/**
 * Specifies if the request scheduler should throttle incoming requests, or let the browser queue requests under its control.
 * @type {Boolean}
 * @default true
 */
RequestScheduler.throttleRequests = true;

/**
 * When true, log statistics to the console every frame
 * @type {Boolean}
 * @default false
 * @private
 */
RequestScheduler.debugShowStatistics = false;

/**
 * An event that's raised when a request is completed.  Event handlers are passed
 * the error object if the request fails.
 *
 * @type {Event}
 * @default Event()
 * @private
 */
RequestScheduler.requestCompletedEvent = requestCompletedEvent;

Object.defineProperties(RequestScheduler, {
  /**
   * Returns the statistics used by the request scheduler.
   *
   * @memberof RequestScheduler
   *
   * @type Object
   * @readonly
   * @private
   */
  statistics: {
    get: function () {
      return statistics;
    },
  },

  /**
   * The maximum size of the priority heap. This limits the number of requests that are sorted by priority. Only applies to requests that are not yet active.
   *
   * @memberof RequestScheduler
   *
   * @type {Number}
   * @default 20
   * @private
   */
  priorityHeapLength: {
    get: function () {
      return priorityHeapLength;
    },
    set: function (value) {
      // If the new length shrinks the heap, need to cancel some of the requests.
      // Since this value is not intended to be tweaked regularly it is fine to just cancel the high priority requests.
      if (value < priorityHeapLength) {
        while (requestHeap.length > value) {
          var request = requestHeap.pop();
          cancelRequest(request);
        }
      }
      priorityHeapLength = value;
      requestHeap.maximumLength = value;
      requestHeap.reserve(value);
    },
  },
});

function updatePriority(request) {
  if (defined(request.priorityFunction)) {
    request.priority = request.priorityFunction();
  }
}

/**
 * Check if there are open slots for a particular server key. If desiredRequests is greater than 1, this checks if the queue has room for scheduling multiple requests.
 * @param {String} serverKey The server key returned by {@link RequestScheduler.getServerKey}.
 * @param {Number} [desiredRequests=1] How many requests the caller plans to request
 * @return {Boolean} True if there are enough open slots for <code>desiredRequests</code> more requests.
 * @private
 */
RequestScheduler.serverHasOpenSlots = function (serverKey, desiredRequests) {
  desiredRequests = defaultValue(desiredRequests, 1);

  var maxRequests = defaultValue(
    RequestScheduler.requestsByServer[serverKey],
    RequestScheduler.maximumRequestsPerServer
  );
  var hasOpenSlotsServer =
    numberOfActiveRequestsByServer[serverKey] + desiredRequests <= maxRequests;

  return hasOpenSlotsServer;
};

/**
 * Check if the priority heap has open slots, regardless of which server they
 * are from. This is used in {@link Multiple3DTileContent} for determining when
 * all requests can be scheduled
 * @param {Number} desiredRequests The number of requests the caller intends to make
 * @return {Boolean} <code>true</code> if the heap has enough available slots to meet the desiredRequests. <code>false</code> otherwise.
 *
 * @private
 */
RequestScheduler.heapHasOpenSlots = function (desiredRequests) {
  var hasOpenSlotsHeap =
    requestHeap.length + desiredRequests <= priorityHeapLength;
  return hasOpenSlotsHeap;
};

function issueRequest(request) {
  if (request.state === RequestState$1.UNISSUED) {
    request.state = RequestState$1.ISSUED;
    request.deferred = when.defer();
  }
  return request.deferred.promise;
}

function getRequestReceivedFunction(request) {
  return function (results) {
    if (request.state === RequestState$1.CANCELLED) {
      // If the data request comes back but the request is cancelled, ignore it.
      return;
    }
    // explicitly set to undefined to ensure GC of request response data. See #8843
    var deferred = request.deferred;

    --statistics.numberOfActiveRequests;
    --numberOfActiveRequestsByServer[request.serverKey];
    requestCompletedEvent.raiseEvent();
    request.state = RequestState$1.RECEIVED;
    request.deferred = undefined;

    deferred.resolve(results);
  };
}

function getRequestFailedFunction(request) {
  return function (error) {
    if (request.state === RequestState$1.CANCELLED) {
      // If the data request comes back but the request is cancelled, ignore it.
      return;
    }
    ++statistics.numberOfFailedRequests;
    --statistics.numberOfActiveRequests;
    --numberOfActiveRequestsByServer[request.serverKey];
    requestCompletedEvent.raiseEvent(error);
    request.state = RequestState$1.FAILED;
    request.deferred.reject(error);
  };
}

function startRequest(request) {
  var promise = issueRequest(request);
  request.state = RequestState$1.ACTIVE;
  activeRequests.push(request);
  ++statistics.numberOfActiveRequests;
  ++statistics.numberOfActiveRequestsEver;
  ++numberOfActiveRequestsByServer[request.serverKey];
  request
    .requestFunction()
    .then(getRequestReceivedFunction(request))
    .otherwise(getRequestFailedFunction(request));
  return promise;
}

function cancelRequest(request) {
  var active = request.state === RequestState$1.ACTIVE;
  request.state = RequestState$1.CANCELLED;
  ++statistics.numberOfCancelledRequests;
  // check that deferred has not been cleared since cancelRequest can be called
  // on a finished request, e.g. by clearForSpecs during tests
  if (defined(request.deferred)) {
    var deferred = request.deferred;
    request.deferred = undefined;
    deferred.reject();
  }

  if (active) {
    --statistics.numberOfActiveRequests;
    --numberOfActiveRequestsByServer[request.serverKey];
    ++statistics.numberOfCancelledActiveRequests;
  }

  if (defined(request.cancelFunction)) {
    request.cancelFunction();
  }
}

/**
 * Sort requests by priority and start requests.
 * @private
 */
RequestScheduler.update = function () {
  var i;
  var request;

  // Loop over all active requests. Cancelled, failed, or received requests are removed from the array to make room for new requests.
  var removeCount = 0;
  var activeLength = activeRequests.length;
  for (i = 0; i < activeLength; ++i) {
    request = activeRequests[i];
    if (request.cancelled) {
      // Request was explicitly cancelled
      cancelRequest(request);
    }
    if (request.state !== RequestState$1.ACTIVE) {
      // Request is no longer active, remove from array
      ++removeCount;
      continue;
    }
    if (removeCount > 0) {
      // Shift back to fill in vacated slots from completed requests
      activeRequests[i - removeCount] = request;
    }
  }
  activeRequests.length -= removeCount;

  // Update priority of issued requests and resort the heap
  var issuedRequests = requestHeap.internalArray;
  var issuedLength = requestHeap.length;
  for (i = 0; i < issuedLength; ++i) {
    updatePriority(issuedRequests[i]);
  }
  requestHeap.resort();

  // Get the number of open slots and fill with the highest priority requests.
  // Un-throttled requests are automatically added to activeRequests, so activeRequests.length may exceed maximumRequests
  var openSlots = Math.max(
    RequestScheduler.maximumRequests - activeRequests.length,
    0
  );
  var filledSlots = 0;
  while (filledSlots < openSlots && requestHeap.length > 0) {
    // Loop until all open slots are filled or the heap becomes empty
    request = requestHeap.pop();
    if (request.cancelled) {
      // Request was explicitly cancelled
      cancelRequest(request);
      continue;
    }

    if (
      request.throttleByServer &&
      !RequestScheduler.serverHasOpenSlots(request.serverKey)
    ) {
      // Open slots are available, but the request is throttled by its server. Cancel and try again later.
      cancelRequest(request);
      continue;
    }

    startRequest(request);
    ++filledSlots;
  }

  updateStatistics();
};

/**
 * Get the server key from a given url.
 *
 * @param {String} url The url.
 * @returns {String} The server key.
 * @private
 */
RequestScheduler.getServerKey = function (url) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.string("url", url);
  //>>includeEnd('debug');

  var uri = new URI(url);
  if (uri.scheme() === "") {
    uri = new URI(url).absoluteTo(pageUri);
    uri.normalize();
  }

  var serverKey = uri.authority();
  if (!/:/.test(serverKey)) {
    // If the authority does not contain a port number, add port 443 for https or port 80 for http
    serverKey = serverKey + ":" + (uri.scheme() === "https" ? "443" : "80");
  }

  var length = numberOfActiveRequestsByServer[serverKey];
  if (!defined(length)) {
    numberOfActiveRequestsByServer[serverKey] = 0;
  }

  return serverKey;
};

/**
 * Issue a request. If request.throttle is false, the request is sent immediately. Otherwise the request will be
 * queued and sorted by priority before being sent.
 *
 * @param {Request} request The request object.
 *
 * @returns {Promise|undefined} A Promise for the requested data, or undefined if this request does not have high enough priority to be issued.
 *
 * @private
 */
RequestScheduler.request = function (request) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.object("request", request);
  Check.typeOf.string("request.url", request.url);
  Check.typeOf.func("request.requestFunction", request.requestFunction);
  //>>includeEnd('debug');

  if (isDataUri(request.url) || isBlobUri(request.url)) {
    requestCompletedEvent.raiseEvent();
    request.state = RequestState$1.RECEIVED;
    return request.requestFunction();
  }

  ++statistics.numberOfAttemptedRequests;

  if (!defined(request.serverKey)) {
    request.serverKey = RequestScheduler.getServerKey(request.url);
  }

  if (
    RequestScheduler.throttleRequests &&
    request.throttleByServer &&
    !RequestScheduler.serverHasOpenSlots(request.serverKey)
  ) {
    // Server is saturated. Try again later.
    return undefined;
  }

  if (!RequestScheduler.throttleRequests || !request.throttle) {
    return startRequest(request);
  }

  if (activeRequests.length >= RequestScheduler.maximumRequests) {
    // Active requests are saturated. Try again later.
    return undefined;
  }

  // Insert into the priority heap and see if a request was bumped off. If this request is the lowest
  // priority it will be returned.
  updatePriority(request);
  var removedRequest = requestHeap.insert(request);

  if (defined(removedRequest)) {
    if (removedRequest === request) {
      // Request does not have high enough priority to be issued
      return undefined;
    }
    // A previously issued request has been bumped off the priority heap, so cancel it
    cancelRequest(removedRequest);
  }

  return issueRequest(request);
};

function updateStatistics() {
  if (!RequestScheduler.debugShowStatistics) {
    return;
  }

  if (
    statistics.numberOfActiveRequests === 0 &&
    statistics.lastNumberOfActiveRequests > 0
  ) {
    if (statistics.numberOfAttemptedRequests > 0) {
      console.log(
        "Number of attempted requests: " + statistics.numberOfAttemptedRequests
      );
      statistics.numberOfAttemptedRequests = 0;
    }

    if (statistics.numberOfCancelledRequests > 0) {
      console.log(
        "Number of cancelled requests: " + statistics.numberOfCancelledRequests
      );
      statistics.numberOfCancelledRequests = 0;
    }

    if (statistics.numberOfCancelledActiveRequests > 0) {
      console.log(
        "Number of cancelled active requests: " +
          statistics.numberOfCancelledActiveRequests
      );
      statistics.numberOfCancelledActiveRequests = 0;
    }

    if (statistics.numberOfFailedRequests > 0) {
      console.log(
        "Number of failed requests: " + statistics.numberOfFailedRequests
      );
      statistics.numberOfFailedRequests = 0;
    }
  }

  statistics.lastNumberOfActiveRequests = statistics.numberOfActiveRequests;
}

/**
 * For testing only. Clears any requests that may not have completed from previous tests.
 *
 * @private
 */
RequestScheduler.clearForSpecs = function () {
  while (requestHeap.length > 0) {
    var request = requestHeap.pop();
    cancelRequest(request);
  }
  var length = activeRequests.length;
  for (var i = 0; i < length; ++i) {
    cancelRequest(activeRequests[i]);
  }
  activeRequests.length = 0;
  numberOfActiveRequestsByServer = {};

  // Clear stats
  statistics.numberOfAttemptedRequests = 0;
  statistics.numberOfActiveRequests = 0;
  statistics.numberOfCancelledRequests = 0;
  statistics.numberOfCancelledActiveRequests = 0;
  statistics.numberOfFailedRequests = 0;
  statistics.numberOfActiveRequestsEver = 0;
  statistics.lastNumberOfActiveRequests = 0;
};

/**
 * For testing only.
 *
 * @private
 */
RequestScheduler.numberOfActiveRequestsByServer = function (serverKey) {
  return numberOfActiveRequestsByServer[serverKey];
};

/**
 * For testing only.
 *
 * @private
 */
RequestScheduler.requestHeap = requestHeap;

/**
 * Constructs an exception object that is thrown due to an error that can occur at runtime, e.g.,
 * out of memory, could not compile shader, etc.  If a function may throw this
 * exception, the calling code should be prepared to catch it.
 * <br /><br />
 * On the other hand, a {@link DeveloperError} indicates an exception due
 * to a developer error, e.g., invalid argument, that usually indicates a bug in the
 * calling code.
 *
 * @alias RuntimeError
 * @constructor
 * @extends Error
 *
 * @param {String} [message] The error message for this exception.
 *
 * @see DeveloperError
 */
function RuntimeError(message) {
  /**
   * 'RuntimeError' indicating that this exception was thrown due to a runtime error.
   * @type {String}
   * @readonly
   */
  this.name = "RuntimeError";

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
  RuntimeError.prototype = Object.create(Error.prototype);
  RuntimeError.prototype.constructor = RuntimeError;
}

RuntimeError.prototype.toString = function () {
  var str = this.name + ": " + this.message;

  if (defined(this.stack)) {
    str += "\n" + this.stack.toString();
  }

  return str;
};

/**
 * A singleton that contains all of the servers that are trusted. Credentials will be sent with
 * any requests to these servers.
 *
 * @namespace TrustedServers
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 */
var TrustedServers = {};
var _servers = {};

/**
 * Adds a trusted server to the registry
 *
 * @param {String} host The host to be added.
 * @param {Number} port The port used to access the host.
 *
 * @example
 * // Add a trusted server
 * TrustedServers.add('my.server.com', 80);
 */
TrustedServers.add = function (host, port) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(host)) {
    throw new DeveloperError("host is required.");
  }
  if (!defined(port) || port <= 0) {
    throw new DeveloperError("port is required to be greater than 0.");
  }
  //>>includeEnd('debug');

  var authority = host.toLowerCase() + ":" + port;
  if (!defined(_servers[authority])) {
    _servers[authority] = true;
  }
};

/**
 * Removes a trusted server from the registry
 *
 * @param {String} host The host to be removed.
 * @param {Number} port The port used to access the host.
 *
 * @example
 * // Remove a trusted server
 * TrustedServers.remove('my.server.com', 80);
 */
TrustedServers.remove = function (host, port) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(host)) {
    throw new DeveloperError("host is required.");
  }
  if (!defined(port) || port <= 0) {
    throw new DeveloperError("port is required to be greater than 0.");
  }
  //>>includeEnd('debug');

  var authority = host.toLowerCase() + ":" + port;
  if (defined(_servers[authority])) {
    delete _servers[authority];
  }
};

function getAuthority(url) {
  var uri = new URI(url);
  uri.normalize();

  // Removes username:password@ so we just have host[:port]
  var authority = uri.authority();
  if (authority.length === 0) {
    return undefined; // Relative URL
  }
  uri.authority(authority);

  if (authority.indexOf("@") !== -1) {
    var parts = authority.split("@");
    authority = parts[1];
  }

  // If the port is missing add one based on the scheme
  if (authority.indexOf(":") === -1) {
    var scheme = uri.scheme();
    if (scheme.length === 0) {
      scheme = window.location.protocol;
      scheme = scheme.substring(0, scheme.length - 1);
    }
    if (scheme === "http") {
      authority += ":80";
    } else if (scheme === "https") {
      authority += ":443";
    } else {
      return undefined;
    }
  }

  return authority;
}

/**
 * Tests whether a server is trusted or not. The server must have been added with the port if it is included in the url.
 *
 * @param {String} url The url to be tested against the trusted list
 *
 * @returns {boolean} Returns true if url is trusted, false otherwise.
 *
 * @example
 * // Add server
 * TrustedServers.add('my.server.com', 81);
 *
 * // Check if server is trusted
 * if (TrustedServers.contains('https://my.server.com:81/path/to/file.png')) {
 *     // my.server.com:81 is trusted
 * }
 * if (TrustedServers.contains('https://my.server.com/path/to/file.png')) {
 *     // my.server.com isn't trusted
 * }
 */
TrustedServers.contains = function (url) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(url)) {
    throw new DeveloperError("url is required.");
  }
  //>>includeEnd('debug');
  var authority = getAuthority(url);
  if (defined(authority) && defined(_servers[authority])) {
    return true;
  }

  return false;
};

/**
 * Clears the registry
 *
 * @example
 * // Remove a trusted server
 * TrustedServers.clear();
 */
TrustedServers.clear = function () {
  _servers = {};
};

var xhrBlobSupported = (function () {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "#", true);
    xhr.responseType = "blob";
    return xhr.responseType === "blob";
  } catch (e) {
    return false;
  }
})();

/**
 * Parses a query string and returns the object equivalent.
 *
 * @param {Uri} uri The Uri with a query object.
 * @param {Resource} resource The Resource that will be assigned queryParameters.
 * @param {Boolean} merge If true, we'll merge with the resource's existing queryParameters. Otherwise they will be replaced.
 * @param {Boolean} preserveQueryParameters If true duplicate parameters will be concatenated into an array. If false, keys in uri will take precedence.
 *
 * @private
 */
function parseQuery(uri, resource, merge, preserveQueryParameters) {
  var queryString = uri.query();
  if (queryString.length === 0) {
    return {};
  }

  var query;
  // Special case we run into where the querystring is just a string, not key/value pairs
  if (queryString.indexOf("=") === -1) {
    var result = {};
    result[queryString] = undefined;
    query = result;
  } else {
    query = queryToObject(queryString);
  }

  if (merge) {
    resource._queryParameters = combineQueryParameters(
      query,
      resource._queryParameters,
      preserveQueryParameters
    );
  } else {
    resource._queryParameters = query;
  }
  uri.search("");
}

/**
 * Converts a query object into a string.
 *
 * @param {Uri} uri The Uri object that will have the query object set.
 * @param {Resource} resource The resource that has queryParameters
 *
 * @private
 */
function stringifyQuery(uri, resource) {
  var queryObject = resource._queryParameters;

  var keys = Object.keys(queryObject);

  // We have 1 key with an undefined value, so this is just a string, not key/value pairs
  if (keys.length === 1 && !defined(queryObject[keys[0]])) {
    uri.search(keys[0]);
  } else {
    uri.search(objectToQuery(queryObject));
  }
}

/**
 * Clones a value if it is defined, otherwise returns the default value
 *
 * @param {*} [val] The value to clone.
 * @param {*} [defaultVal] The default value.
 *
 * @returns {*} A clone of val or the defaultVal.
 *
 * @private
 */
function defaultClone(val, defaultVal) {
  if (!defined(val)) {
    return defaultVal;
  }

  return defined(val.clone) ? val.clone() : clone(val);
}

/**
 * Checks to make sure the Resource isn't already being requested.
 *
 * @param {Request} request The request to check.
 *
 * @private
 */
function checkAndResetRequest(request) {
  if (
    request.state === RequestState$1.ISSUED ||
    request.state === RequestState$1.ACTIVE
  ) {
    throw new RuntimeError("The Resource is already being fetched.");
  }

  request.state = RequestState$1.UNISSUED;
  request.deferred = undefined;
}

/**
 * This combines a map of query parameters.
 *
 * @param {Object} q1 The first map of query parameters. Values in this map will take precedence if preserveQueryParameters is false.
 * @param {Object} q2 The second map of query parameters.
 * @param {Boolean} preserveQueryParameters If true duplicate parameters will be concatenated into an array. If false, keys in q1 will take precedence.
 *
 * @returns {Object} The combined map of query parameters.
 *
 * @example
 * var q1 = {
 *   a: 1,
 *   b: 2
 * };
 * var q2 = {
 *   a: 3,
 *   c: 4
 * };
 * var q3 = {
 *   b: [5, 6],
 *   d: 7
 * }
 *
 * // Returns
 * // {
 * //   a: [1, 3],
 * //   b: 2,
 * //   c: 4
 * // };
 * combineQueryParameters(q1, q2, true);
 *
 * // Returns
 * // {
 * //   a: 1,
 * //   b: 2,
 * //   c: 4
 * // };
 * combineQueryParameters(q1, q2, false);
 *
 * // Returns
 * // {
 * //   a: 1,
 * //   b: [2, 5, 6],
 * //   d: 7
 * // };
 * combineQueryParameters(q1, q3, true);
 *
 * // Returns
 * // {
 * //   a: 1,
 * //   b: 2,
 * //   d: 7
 * // };
 * combineQueryParameters(q1, q3, false);
 *
 * @private
 */
function combineQueryParameters(q1, q2, preserveQueryParameters) {
  if (!preserveQueryParameters) {
    return combine(q1, q2);
  }

  var result = clone(q1, true);
  for (var param in q2) {
    if (q2.hasOwnProperty(param)) {
      var value = result[param];
      var q2Value = q2[param];
      if (defined(value)) {
        if (!Array.isArray(value)) {
          value = result[param] = [value];
        }

        result[param] = value.concat(q2Value);
      } else {
        result[param] = Array.isArray(q2Value) ? q2Value.slice() : q2Value;
      }
    }
  }

  return result;
}

/**
 * A resource that includes the location and any other parameters we need to retrieve it or create derived resources. It also provides the ability to retry requests.
 *
 * @alias Resource
 * @constructor
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 *
 * @example
 * function refreshTokenRetryCallback(resource, error) {
 *   if (error.statusCode === 403) {
 *     // 403 status code means a new token should be generated
 *     return getNewAccessToken()
 *       .then(function(token) {
 *         resource.queryParameters.access_token = token;
 *         return true;
 *       })
 *       .otherwise(function() {
 *         return false;
 *       });
 *   }
 *
 *   return false;
 * }
 *
 * var resource = new Resource({
 *    url: 'http://server.com/path/to/resource.json',
 *    proxy: new DefaultProxy('/proxy/'),
 *    headers: {
 *      'X-My-Header': 'valueOfHeader'
 *    },
 *    queryParameters: {
 *      'access_token': '123-435-456-000'
 *    },
 *    retryCallback: refreshTokenRetryCallback,
 *    retryAttempts: 1
 * });
 */
function Resource(options) {
  options = defaultValue(options, defaultValue.EMPTY_OBJECT);
  if (typeof options === "string") {
    options = {
      url: options,
    };
  }

  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.string("options.url", options.url);
  //>>includeEnd('debug');

  this._url = undefined;
  this._templateValues = defaultClone(options.templateValues, {});
  this._queryParameters = defaultClone(options.queryParameters, {});

  /**
   * Additional HTTP headers that will be sent with the request.
   *
   * @type {Object}
   */
  this.headers = defaultClone(options.headers, {});

  /**
   * A Request object that will be used. Intended for internal use only.
   *
   * @type {Request}
   */
  this.request = defaultValue(options.request, new Request());

  /**
   * A proxy to be used when loading the resource.
   *
   * @type {Proxy}
   */
  this.proxy = options.proxy;

  /**
   * Function to call when a request for this resource fails. If it returns true or a Promise that resolves to true, the request will be retried.
   *
   * @type {Function}
   */
  this.retryCallback = options.retryCallback;

  /**
   * The number of times the retryCallback should be called before giving up.
   *
   * @type {Number}
   */
  this.retryAttempts = defaultValue(options.retryAttempts, 0);
  this._retryCount = 0;

  var uri = new URI(options.url);
  parseQuery(uri, this, true, true);

  // Remove the fragment as it's not sent with a request
  uri.fragment("");

  this._url = uri.toString();
}

/**
 * A helper function to create a resource depending on whether we have a String or a Resource
 *
 * @param {Resource|String} resource A Resource or a String to use when creating a new Resource.
 *
 * @returns {Resource} If resource is a String, a Resource constructed with the url and options. Otherwise the resource parameter is returned.
 *
 * @private
 */
Resource.createIfNeeded = function (resource) {
  if (resource instanceof Resource) {
    // Keep existing request object. This function is used internally to duplicate a Resource, so that it can't
    //  be modified outside of a class that holds it (eg. an imagery or terrain provider). Since the Request objects
    //  are managed outside of the providers, by the tile loading code, we want to keep the request property the same so if it is changed
    //  in the underlying tiling code the requests for this resource will use it.
    return resource.getDerivedResource({
      request: resource.request,
    });
  }

  if (typeof resource !== "string") {
    return resource;
  }

  return new Resource({
    url: resource,
  });
};

var supportsImageBitmapOptionsPromise;
/**
 * A helper function to check whether createImageBitmap supports passing ImageBitmapOptions.
 *
 * @returns {Promise<Boolean>} A promise that resolves to true if this browser supports creating an ImageBitmap with options.
 *
 * @private
 */
Resource.supportsImageBitmapOptions = function () {
  // Until the HTML folks figure out what to do about this, we need to actually try loading an image to
  // know if this browser supports passing options to the createImageBitmap function.
  // https://github.com/whatwg/html/pull/4248
  if (defined(supportsImageBitmapOptionsPromise)) {
    return supportsImageBitmapOptionsPromise;
  }

  if (typeof createImageBitmap !== "function") {
    supportsImageBitmapOptionsPromise = when.resolve(false);
    return supportsImageBitmapOptionsPromise;
  }

  var imageDataUri =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4////fwAJ+wP9CNHoHgAAAABJRU5ErkJggg==";

  supportsImageBitmapOptionsPromise = Resource.fetchBlob({
    url: imageDataUri,
  })
    .then(function (blob) {
      return createImageBitmap(blob, {
        imageOrientation: "flipY",
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
      });
    })
    .then(function (imageBitmap) {
      return true;
    })
    .otherwise(function () {
      return false;
    });

  return supportsImageBitmapOptionsPromise;
};

Object.defineProperties(Resource, {
  /**
   * Returns true if blobs are supported.
   *
   * @memberof Resource
   * @type {Boolean}
   *
   * @readonly
   */
  isBlobSupported: {
    get: function () {
      return xhrBlobSupported;
    },
  },
});

Object.defineProperties(Resource.prototype, {
  /**
   * Query parameters appended to the url.
   *
   * @memberof Resource.prototype
   * @type {Object}
   *
   * @readonly
   */
  queryParameters: {
    get: function () {
      return this._queryParameters;
    },
  },

  /**
   * The key/value pairs used to replace template parameters in the url.
   *
   * @memberof Resource.prototype
   * @type {Object}
   *
   * @readonly
   */
  templateValues: {
    get: function () {
      return this._templateValues;
    },
  },

  /**
   * The url to the resource with template values replaced, query string appended and encoded by proxy if one was set.
   *
   * @memberof Resource.prototype
   * @type {String}
   */
  url: {
    get: function () {
      return this.getUrlComponent(true, true);
    },
    set: function (value) {
      var uri = new URI(value);

      parseQuery(uri, this, false);

      // Remove the fragment as it's not sent with a request
      uri.fragment("");

      this._url = uri.toString();
    },
  },

  /**
   * The file extension of the resource.
   *
   * @memberof Resource.prototype
   * @type {String}
   *
   * @readonly
   */
  extension: {
    get: function () {
      return getExtensionFromUri(this._url);
    },
  },

  /**
   * True if the Resource refers to a data URI.
   *
   * @memberof Resource.prototype
   * @type {Boolean}
   */
  isDataUri: {
    get: function () {
      return isDataUri(this._url);
    },
  },

  /**
   * True if the Resource refers to a blob URI.
   *
   * @memberof Resource.prototype
   * @type {Boolean}
   */
  isBlobUri: {
    get: function () {
      return isBlobUri(this._url);
    },
  },

  /**
   * True if the Resource refers to a cross origin URL.
   *
   * @memberof Resource.prototype
   * @type {Boolean}
   */
  isCrossOriginUrl: {
    get: function () {
      return isCrossOriginUrl(this._url);
    },
  },

  /**
   * True if the Resource has request headers. This is equivalent to checking if the headers property has any keys.
   *
   * @memberof Resource.prototype
   * @type {Boolean}
   */
  hasHeaders: {
    get: function () {
      return Object.keys(this.headers).length > 0;
    },
  },
});

/**
 * Override Object#toString so that implicit string conversion gives the
 * complete URL represented by this Resource.
 *
 * @returns {String} The URL represented by this Resource
 */
Resource.prototype.toString = function () {
  return this.getUrlComponent(true, true);
};

/**
 * Returns the url, optional with the query string and processed by a proxy.
 *
 * @param {Boolean} [query=false] If true, the query string is included.
 * @param {Boolean} [proxy=false] If true, the url is processed by the proxy object, if defined.
 *
 * @returns {String} The url with all the requested components.
 */
Resource.prototype.getUrlComponent = function (query, proxy) {
  if (this.isDataUri) {
    return this._url;
  }

  var uri = new URI(this._url);

  if (query) {
    stringifyQuery(uri, this);
  }

  // objectToQuery escapes the placeholders.  Undo that.
  var url = uri.toString().replace(/%7B/g, "{").replace(/%7D/g, "}");

  var templateValues = this._templateValues;
  url = url.replace(/{(.*?)}/g, function (match, key) {
    var replacement = templateValues[key];
    if (defined(replacement)) {
      // use the replacement value from templateValues if there is one...
      return encodeURIComponent(replacement);
    }
    // otherwise leave it unchanged
    return match;
  });

  if (proxy && defined(this.proxy)) {
    url = this.proxy.getURL(url);
  }
  return url;
};

/**
 * Combines the specified object and the existing query parameters. This allows you to add many parameters at once,
 *  as opposed to adding them one at a time to the queryParameters property. If a value is already set, it will be replaced with the new value.
 *
 * @param {Object} params The query parameters
 * @param {Boolean} [useAsDefault=false] If true the params will be used as the default values, so they will only be set if they are undefined.
 */
Resource.prototype.setQueryParameters = function (params, useAsDefault) {
  if (useAsDefault) {
    this._queryParameters = combineQueryParameters(
      this._queryParameters,
      params,
      false
    );
  } else {
    this._queryParameters = combineQueryParameters(
      params,
      this._queryParameters,
      false
    );
  }
};

/**
 * Combines the specified object and the existing query parameters. This allows you to add many parameters at once,
 *  as opposed to adding them one at a time to the queryParameters property.
 *
 * @param {Object} params The query parameters
 */
Resource.prototype.appendQueryParameters = function (params) {
  this._queryParameters = combineQueryParameters(
    params,
    this._queryParameters,
    true
  );
};

/**
 * Combines the specified object and the existing template values. This allows you to add many values at once,
 *  as opposed to adding them one at a time to the templateValues property. If a value is already set, it will become an array and the new value will be appended.
 *
 * @param {Object} template The template values
 * @param {Boolean} [useAsDefault=false] If true the values will be used as the default values, so they will only be set if they are undefined.
 */
Resource.prototype.setTemplateValues = function (template, useAsDefault) {
  if (useAsDefault) {
    this._templateValues = combine(this._templateValues, template);
  } else {
    this._templateValues = combine(template, this._templateValues);
  }
};

/**
 * Returns a resource relative to the current instance. All properties remain the same as the current instance unless overridden in options.
 *
 * @param {Object} options An object with the following properties
 * @param {String} [options.url]  The url that will be resolved relative to the url of the current instance.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be combined with those of the current instance.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}). These will be combined with those of the current instance.
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The function to call when loading the resource fails.
 * @param {Number} [options.retryAttempts] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {Boolean} [options.preserveQueryParameters=false] If true, this will keep all query parameters from the current resource and derived resource. If false, derived parameters will replace those of the current resource.
 *
 * @returns {Resource} The resource derived from the current one.
 */
Resource.prototype.getDerivedResource = function (options) {
  var resource = this.clone();
  resource._retryCount = 0;

  if (defined(options.url)) {
    var uri = new URI(options.url);

    var preserveQueryParameters = defaultValue(
      options.preserveQueryParameters,
      false
    );
    parseQuery(uri, resource, true, preserveQueryParameters);

    // Remove the fragment as it's not sent with a request
    uri.fragment("");

    if (uri.scheme() !== "") {
      resource._url = uri.toString();
    } else {
      resource._url = uri
        .absoluteTo(new URI(getAbsoluteUri(this._url)))
        .toString();
    }
  }

  if (defined(options.queryParameters)) {
    resource._queryParameters = combine(
      options.queryParameters,
      resource._queryParameters
    );
  }
  if (defined(options.templateValues)) {
    resource._templateValues = combine(
      options.templateValues,
      resource.templateValues
    );
  }
  if (defined(options.headers)) {
    resource.headers = combine(options.headers, resource.headers);
  }
  if (defined(options.proxy)) {
    resource.proxy = options.proxy;
  }
  if (defined(options.request)) {
    resource.request = options.request;
  }
  if (defined(options.retryCallback)) {
    resource.retryCallback = options.retryCallback;
  }
  if (defined(options.retryAttempts)) {
    resource.retryAttempts = options.retryAttempts;
  }

  return resource;
};

/**
 * Called when a resource fails to load. This will call the retryCallback function if defined until retryAttempts is reached.
 *
 * @param {Error} [error] The error that was encountered.
 *
 * @returns {Promise<Boolean>} A promise to a boolean, that if true will cause the resource request to be retried.
 *
 * @private
 */
Resource.prototype.retryOnError = function (error) {
  var retryCallback = this.retryCallback;
  if (
    typeof retryCallback !== "function" ||
    this._retryCount >= this.retryAttempts
  ) {
    return when(false);
  }

  var that = this;
  return when(retryCallback(this, error)).then(function (result) {
    ++that._retryCount;

    return result;
  });
};

/**
 * Duplicates a Resource instance.
 *
 * @param {Resource} [result] The object onto which to store the result.
 *
 * @returns {Resource} The modified result parameter or a new Resource instance if one was not provided.
 */
Resource.prototype.clone = function (result) {
  if (!defined(result)) {
    result = new Resource({
      url: this._url,
    });
  }

  result._url = this._url;
  result._queryParameters = clone(this._queryParameters);
  result._templateValues = clone(this._templateValues);
  result.headers = clone(this.headers);
  result.proxy = this.proxy;
  result.retryCallback = this.retryCallback;
  result.retryAttempts = this.retryAttempts;
  result._retryCount = 0;
  result.request = this.request.clone();

  return result;
};

/**
 * Returns the base path of the Resource.
 *
 * @param {Boolean} [includeQuery = false] Whether or not to include the query string and fragment form the uri
 *
 * @returns {String} The base URI of the resource
 */
Resource.prototype.getBaseUri = function (includeQuery) {
  return getBaseUri(this.getUrlComponent(includeQuery), includeQuery);
};

/**
 * Appends a forward slash to the URL.
 */
Resource.prototype.appendForwardSlash = function () {
  this._url = appendForwardSlash(this._url);
};

/**
 * Asynchronously loads the resource as raw binary data.  Returns a promise that will resolve to
 * an ArrayBuffer once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @returns {Promise.<ArrayBuffer>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 * @example
 * // load a single URL asynchronously
 * resource.fetchArrayBuffer().then(function(arrayBuffer) {
 *     // use the data
 * }).otherwise(function(error) {
 *     // an error occurred
 * });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.fetchArrayBuffer = function () {
  return this.fetch({
    responseType: "arraybuffer",
  });
};

/**
 * Creates a Resource and calls fetchArrayBuffer() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @returns {Promise.<ArrayBuffer>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.fetchArrayBuffer = function (options) {
  var resource = new Resource(options);
  return resource.fetchArrayBuffer();
};

/**
 * Asynchronously loads the given resource as a blob.  Returns a promise that will resolve to
 * a Blob once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @returns {Promise.<Blob>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 * @example
 * // load a single URL asynchronously
 * resource.fetchBlob().then(function(blob) {
 *     // use the data
 * }).otherwise(function(error) {
 *     // an error occurred
 * });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.fetchBlob = function () {
  return this.fetch({
    responseType: "blob",
  });
};

/**
 * Creates a Resource and calls fetchBlob() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @returns {Promise.<Blob>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.fetchBlob = function (options) {
  var resource = new Resource(options);
  return resource.fetchBlob();
};

/**
 * Asynchronously loads the given image resource.  Returns a promise that will resolve to
 * an {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap|ImageBitmap} if <code>preferImageBitmap</code> is true and the browser supports <code>createImageBitmap</code> or otherwise an
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement|Image} once loaded, or reject if the image failed to load.
 *
 * @param {Object} [options] An object with the following properties.
 * @param {Boolean} [options.preferBlob=false] If true, we will load the image via a blob.
 * @param {Boolean} [options.preferImageBitmap=false] If true, image will be decoded during fetch and an <code>ImageBitmap</code> is returned.
 * @param {Boolean} [options.flipY=false] If true, image will be vertically flipped during decode. Only applies if the browser supports <code>createImageBitmap</code>.
 * @param {Boolean} [options.skipColorSpaceConversion=false] If true, any custom gamma or color profiles in the image will be ignored. Only applies if the browser supports <code>createImageBitmap</code>.
 * @returns {Promise.<ImageBitmap>|Promise.<HTMLImageElement>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * // load a single image asynchronously
 * resource.fetchImage().then(function(image) {
 *     // use the loaded image
 * }).otherwise(function(error) {
 *     // an error occurred
 * });
 *
 * // load several images in parallel
 * when.all([resource1.fetchImage(), resource2.fetchImage()]).then(function(images) {
 *     // images is an array containing all the loaded images
 * });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.fetchImage = function (options) {
  options = defaultValue(options, defaultValue.EMPTY_OBJECT);
  var preferImageBitmap = defaultValue(options.preferImageBitmap, false);
  var preferBlob = defaultValue(options.preferBlob, false);
  var flipY = defaultValue(options.flipY, false);
  var skipColorSpaceConversion = defaultValue(
    options.skipColorSpaceConversion,
    false
  );

  checkAndResetRequest(this.request);
  // We try to load the image normally if
  // 1. Blobs aren't supported
  // 2. It's a data URI
  // 3. It's a blob URI
  // 4. It doesn't have request headers and we preferBlob is false
  if (
    !xhrBlobSupported ||
    this.isDataUri ||
    this.isBlobUri ||
    (!this.hasHeaders && !preferBlob)
  ) {
    return fetchImage({
      resource: this,
      flipY: flipY,
      skipColorSpaceConversion: skipColorSpaceConversion,
      preferImageBitmap: preferImageBitmap,
    });
  }

  var blobPromise = this.fetchBlob();
  if (!defined(blobPromise)) {
    return;
  }

  var supportsImageBitmap;
  var useImageBitmap;
  var generatedBlobResource;
  var generatedBlob;
  return Resource.supportsImageBitmapOptions()
    .then(function (result) {
      supportsImageBitmap = result;
      useImageBitmap = supportsImageBitmap && preferImageBitmap;
      return blobPromise;
    })
    .then(function (blob) {
      if (!defined(blob)) {
        return;
      }
      generatedBlob = blob;
      if (useImageBitmap) {
        return Resource.createImageBitmapFromBlob(blob, {
          flipY: flipY,
          premultiplyAlpha: false,
          skipColorSpaceConversion: skipColorSpaceConversion,
        });
      }
      var blobUrl = window.URL.createObjectURL(blob);
      generatedBlobResource = new Resource({
        url: blobUrl,
      });

      return fetchImage({
        resource: generatedBlobResource,
        flipY: flipY,
        skipColorSpaceConversion: skipColorSpaceConversion,
        preferImageBitmap: false,
      });
    })
    .then(function (image) {
      if (!defined(image)) {
        return;
      }

      // The blob object may be needed for use by a TileDiscardPolicy,
      // so attach it to the image.
      image.blob = generatedBlob;

      if (useImageBitmap) {
        return image;
      }

      window.URL.revokeObjectURL(generatedBlobResource.url);
      return image;
    })
    .otherwise(function (error) {
      if (defined(generatedBlobResource)) {
        window.URL.revokeObjectURL(generatedBlobResource.url);
      }

      // If the blob load succeeded but the image decode failed, attach the blob
      // to the error object for use by a TileDiscardPolicy.
      // In particular, BingMapsImageryProvider uses this to detect the
      // zero-length response that is returned when a tile is not available.
      error.blob = generatedBlob;

      return when.reject(error);
    });
};

/**
 * Fetches an image and returns a promise to it.
 *
 * @param {Object} [options] An object with the following properties.
 * @param {Resource} [options.resource] Resource object that points to an image to fetch.
 * @param {Boolean} [options.preferImageBitmap] If true, image will be decoded during fetch and an <code>ImageBitmap</code> is returned.
 * @param {Boolean} [options.flipY] If true, image will be vertically flipped during decode. Only applies if the browser supports <code>createImageBitmap</code>.
 * @param {Boolean} [options.skipColorSpaceConversion=false] If true, any custom gamma or color profiles in the image will be ignored. Only applies if the browser supports <code>createImageBitmap</code>.
 * @private
 */
function fetchImage(options) {
  var resource = options.resource;
  var flipY = options.flipY;
  var skipColorSpaceConversion = options.skipColorSpaceConversion;
  var preferImageBitmap = options.preferImageBitmap;

  var request = resource.request;
  request.url = resource.url;
  request.requestFunction = function () {
    var crossOrigin = false;

    // data URIs can't have crossorigin set.
    if (!resource.isDataUri && !resource.isBlobUri) {
      crossOrigin = resource.isCrossOriginUrl;
    }

    var deferred = when.defer();
    Resource._Implementations.createImage(
      request,
      crossOrigin,
      deferred,
      flipY,
      skipColorSpaceConversion,
      preferImageBitmap
    );

    return deferred.promise;
  };

  var promise = RequestScheduler.request(request);
  if (!defined(promise)) {
    return;
  }

  return promise.otherwise(function (e) {
    // Don't retry cancelled or otherwise aborted requests
    if (request.state !== RequestState$1.FAILED) {
      return when.reject(e);
    }
    return resource.retryOnError(e).then(function (retry) {
      if (retry) {
        // Reset request so it can try again
        request.state = RequestState$1.UNISSUED;
        request.deferred = undefined;

        return fetchImage({
          resource: resource,
          flipY: flipY,
          skipColorSpaceConversion: skipColorSpaceConversion,
          preferImageBitmap: preferImageBitmap,
        });
      }
      return when.reject(e);
    });
  });
}

/**
 * Creates a Resource and calls fetchImage() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Boolean} [options.flipY=false] Whether to vertically flip the image during fetch and decode. Only applies when requesting an image and the browser supports <code>createImageBitmap</code>.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {Boolean} [options.preferBlob=false]  If true, we will load the image via a blob.
 * @param {Boolean} [options.preferImageBitmap=false] If true, image will be decoded during fetch and an <code>ImageBitmap</code> is returned.
 * @param {Boolean} [options.skipColorSpaceConversion=false] If true, any custom gamma or color profiles in the image will be ignored. Only applies when requesting an image and the browser supports <code>createImageBitmap</code>.
 * @returns {Promise.<ImageBitmap>|Promise.<HTMLImageElement>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.fetchImage = function (options) {
  var resource = new Resource(options);
  return resource.fetchImage({
    flipY: options.flipY,
    skipColorSpaceConversion: options.skipColorSpaceConversion,
    preferBlob: options.preferBlob,
    preferImageBitmap: options.preferImageBitmap,
  });
};

/**
 * Asynchronously loads the given resource as text.  Returns a promise that will resolve to
 * a String once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @returns {Promise.<String>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 * @example
 * // load text from a URL, setting a custom header
 * var resource = new Resource({
 *   url: 'http://someUrl.com/someJson.txt',
 *   headers: {
 *     'X-Custom-Header' : 'some value'
 *   }
 * });
 * resource.fetchText().then(function(text) {
 *     // Do something with the text
 * }).otherwise(function(error) {
 *     // an error occurred
 * });
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest}
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.fetchText = function () {
  return this.fetch({
    responseType: "text",
  });
};

/**
 * Creates a Resource and calls fetchText() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @returns {Promise.<String>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.fetchText = function (options) {
  var resource = new Resource(options);
  return resource.fetchText();
};

// note: &#42;&#47;&#42; below is */* but that ends the comment block early
/**
 * Asynchronously loads the given resource as JSON.  Returns a promise that will resolve to
 * a JSON object once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled. This function
 * adds 'Accept: application/json,&#42;&#47;&#42;;q=0.01' to the request headers, if not
 * already specified.
 *
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * resource.fetchJson().then(function(jsonData) {
 *     // Do something with the JSON object
 * }).otherwise(function(error) {
 *     // an error occurred
 * });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.fetchJson = function () {
  var promise = this.fetch({
    responseType: "text",
    headers: {
      Accept: "application/json,*/*;q=0.01",
    },
  });

  if (!defined(promise)) {
    return undefined;
  }

  return promise.then(function (value) {
    if (!defined(value)) {
      return;
    }
    return JSON.parse(value);
  });
};

/**
 * Creates a Resource and calls fetchJson() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.fetchJson = function (options) {
  var resource = new Resource(options);
  return resource.fetchJson();
};

/**
 * Asynchronously loads the given resource as XML.  Returns a promise that will resolve to
 * an XML Document once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @returns {Promise.<XMLDocument>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * // load XML from a URL, setting a custom header
 * Cesium.loadXML('http://someUrl.com/someXML.xml', {
 *   'X-Custom-Header' : 'some value'
 * }).then(function(document) {
 *     // Do something with the document
 * }).otherwise(function(error) {
 *     // an error occurred
 * });
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest}
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.fetchXML = function () {
  return this.fetch({
    responseType: "document",
    overrideMimeType: "text/xml",
  });
};

/**
 * Creates a Resource and calls fetchXML() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @returns {Promise.<XMLDocument>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.fetchXML = function (options) {
  var resource = new Resource(options);
  return resource.fetchXML();
};

/**
 * Requests a resource using JSONP.
 *
 * @param {String} [callbackParameterName='callback'] The callback parameter name that the server expects.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * // load a data asynchronously
 * resource.fetchJsonp().then(function(data) {
 *     // use the loaded data
 * }).otherwise(function(error) {
 *     // an error occurred
 * });
 *
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.fetchJsonp = function (callbackParameterName) {
  callbackParameterName = defaultValue(callbackParameterName, "callback");

  checkAndResetRequest(this.request);

  //generate a unique function name
  var functionName;
  do {
    functionName =
      "loadJsonp" + CesiumMath.nextRandomNumber().toString().substring(2, 8);
  } while (defined(window[functionName]));

  return fetchJsonp(this, callbackParameterName, functionName);
};

function fetchJsonp(resource, callbackParameterName, functionName) {
  var callbackQuery = {};
  callbackQuery[callbackParameterName] = functionName;
  resource.setQueryParameters(callbackQuery);

  var request = resource.request;
  request.url = resource.url;
  request.requestFunction = function () {
    var deferred = when.defer();

    //assign a function with that name in the global scope
    window[functionName] = function (data) {
      deferred.resolve(data);

      try {
        delete window[functionName];
      } catch (e) {
        window[functionName] = undefined;
      }
    };

    Resource._Implementations.loadAndExecuteScript(
      resource.url,
      functionName,
      deferred
    );
    return deferred.promise;
  };

  var promise = RequestScheduler.request(request);
  if (!defined(promise)) {
    return;
  }

  return promise.otherwise(function (e) {
    if (request.state !== RequestState$1.FAILED) {
      return when.reject(e);
    }

    return resource.retryOnError(e).then(function (retry) {
      if (retry) {
        // Reset request so it can try again
        request.state = RequestState$1.UNISSUED;
        request.deferred = undefined;

        return fetchJsonp(resource, callbackParameterName, functionName);
      }

      return when.reject(e);
    });
  });
}

/**
 * Creates a Resource from a URL and calls fetchJsonp() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {String} [options.callbackParameterName='callback'] The callback parameter name that the server expects.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.fetchJsonp = function (options) {
  var resource = new Resource(options);
  return resource.fetchJsonp(options.callbackParameterName);
};

/**
 * @private
 */
Resource.prototype._makeRequest = function (options) {
  var resource = this;
  checkAndResetRequest(resource.request);

  var request = resource.request;
  request.url = resource.url;

  request.requestFunction = function () {
    var responseType = options.responseType;
    var headers = combine(options.headers, resource.headers);
    var overrideMimeType = options.overrideMimeType;
    var method = options.method;
    var data = options.data;
    var deferred = when.defer();
    var xhr = Resource._Implementations.loadWithXhr(
      resource.url,
      responseType,
      method,
      data,
      headers,
      deferred,
      overrideMimeType
    );
    if (defined(xhr) && defined(xhr.abort)) {
      request.cancelFunction = function () {
        xhr.abort();
      };
    }
    return deferred.promise;
  };

  var promise = RequestScheduler.request(request);
  if (!defined(promise)) {
    return;
  }

  return promise
    .then(function (data) {
      // explicitly set to undefined to ensure GC of request response data. See #8843
      request.cancelFunction = undefined;
      return data;
    })
    .otherwise(function (e) {
      request.cancelFunction = undefined;
      if (request.state !== RequestState$1.FAILED) {
        return when.reject(e);
      }

      return resource.retryOnError(e).then(function (retry) {
        if (retry) {
          // Reset request so it can try again
          request.state = RequestState$1.UNISSUED;
          request.deferred = undefined;

          return resource.fetch(options);
        }

        return when.reject(e);
      });
    });
};

var dataUriRegex = /^data:(.*?)(;base64)?,(.*)$/;

function decodeDataUriText(isBase64, data) {
  var result = decodeURIComponent(data);
  if (isBase64) {
    return atob(result);
  }
  return result;
}

function decodeDataUriArrayBuffer(isBase64, data) {
  var byteString = decodeDataUriText(isBase64, data);
  var buffer = new ArrayBuffer(byteString.length);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }
  return buffer;
}

function decodeDataUri(dataUriRegexResult, responseType) {
  responseType = defaultValue(responseType, "");
  var mimeType = dataUriRegexResult[1];
  var isBase64 = !!dataUriRegexResult[2];
  var data = dataUriRegexResult[3];

  switch (responseType) {
    case "":
    case "text":
      return decodeDataUriText(isBase64, data);
    case "arraybuffer":
      return decodeDataUriArrayBuffer(isBase64, data);
    case "blob":
      var buffer = decodeDataUriArrayBuffer(isBase64, data);
      return new Blob([buffer], {
        type: mimeType,
      });
    case "document":
      var parser = new DOMParser();
      return parser.parseFromString(
        decodeDataUriText(isBase64, data),
        mimeType
      );
    case "json":
      return JSON.parse(decodeDataUriText(isBase64, data));
    default:
      //>>includeStart('debug', pragmas.debug);
      throw new DeveloperError("Unhandled responseType: " + responseType);
    //>>includeEnd('debug');
  }
}

/**
 * Asynchronously loads the given resource.  Returns a promise that will resolve to
 * the result once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled. It's recommended that you use
 * the more specific functions eg. fetchJson, fetchBlob, etc.
 *
 * @param {Object} [options] Object with the following properties:
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {Object} [options.headers] Additional HTTP headers to send with the request, if any.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * resource.fetch()
 *   .then(function(body) {
 *       // use the data
 *   }).otherwise(function(error) {
 *       // an error occurred
 *   });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.fetch = function (options) {
  options = defaultClone(options, {});
  options.method = "GET";

  return this._makeRequest(options);
};

/**
 * Creates a Resource from a URL and calls fetch() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.fetch = function (options) {
  var resource = new Resource(options);
  return resource.fetch({
    // Make copy of just the needed fields because headers can be passed to both the constructor and to fetch
    responseType: options.responseType,
    overrideMimeType: options.overrideMimeType,
  });
};

/**
 * Asynchronously deletes the given resource.  Returns a promise that will resolve to
 * the result once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @param {Object} [options] Object with the following properties:
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {Object} [options.headers] Additional HTTP headers to send with the request, if any.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * resource.delete()
 *   .then(function(body) {
 *       // use the data
 *   }).otherwise(function(error) {
 *       // an error occurred
 *   });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.delete = function (options) {
  options = defaultClone(options, {});
  options.method = "DELETE";

  return this._makeRequest(options);
};

/**
 * Creates a Resource from a URL and calls delete() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.data] Data that is posted with the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.delete = function (options) {
  var resource = new Resource(options);
  return resource.delete({
    // Make copy of just the needed fields because headers can be passed to both the constructor and to fetch
    responseType: options.responseType,
    overrideMimeType: options.overrideMimeType,
    data: options.data,
  });
};

/**
 * Asynchronously gets headers the given resource.  Returns a promise that will resolve to
 * the result once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @param {Object} [options] Object with the following properties:
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {Object} [options.headers] Additional HTTP headers to send with the request, if any.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * resource.head()
 *   .then(function(headers) {
 *       // use the data
 *   }).otherwise(function(error) {
 *       // an error occurred
 *   });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.head = function (options) {
  options = defaultClone(options, {});
  options.method = "HEAD";

  return this._makeRequest(options);
};

/**
 * Creates a Resource from a URL and calls head() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.head = function (options) {
  var resource = new Resource(options);
  return resource.head({
    // Make copy of just the needed fields because headers can be passed to both the constructor and to fetch
    responseType: options.responseType,
    overrideMimeType: options.overrideMimeType,
  });
};

/**
 * Asynchronously gets options the given resource.  Returns a promise that will resolve to
 * the result once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @param {Object} [options] Object with the following properties:
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {Object} [options.headers] Additional HTTP headers to send with the request, if any.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * resource.options()
 *   .then(function(headers) {
 *       // use the data
 *   }).otherwise(function(error) {
 *       // an error occurred
 *   });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.options = function (options) {
  options = defaultClone(options, {});
  options.method = "OPTIONS";

  return this._makeRequest(options);
};

/**
 * Creates a Resource from a URL and calls options() on it.
 *
 * @param {String|Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.options = function (options) {
  var resource = new Resource(options);
  return resource.options({
    // Make copy of just the needed fields because headers can be passed to both the constructor and to fetch
    responseType: options.responseType,
    overrideMimeType: options.overrideMimeType,
  });
};

/**
 * Asynchronously posts data to the given resource.  Returns a promise that will resolve to
 * the result once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @param {Object} data Data that is posted with the resource.
 * @param {Object} [options] Object with the following properties:
 * @param {Object} [options.data] Data that is posted with the resource.
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {Object} [options.headers] Additional HTTP headers to send with the request, if any.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * resource.post(data)
 *   .then(function(result) {
 *       // use the result
 *   }).otherwise(function(error) {
 *       // an error occurred
 *   });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.post = function (data, options) {
  Check.defined("data", data);

  options = defaultClone(options, {});
  options.method = "POST";
  options.data = data;

  return this._makeRequest(options);
};

/**
 * Creates a Resource from a URL and calls post() on it.
 *
 * @param {Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} options.data Data that is posted with the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.post = function (options) {
  var resource = new Resource(options);
  return resource.post(options.data, {
    // Make copy of just the needed fields because headers can be passed to both the constructor and to post
    responseType: options.responseType,
    overrideMimeType: options.overrideMimeType,
  });
};

/**
 * Asynchronously puts data to the given resource.  Returns a promise that will resolve to
 * the result once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @param {Object} data Data that is posted with the resource.
 * @param {Object} [options] Object with the following properties:
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {Object} [options.headers] Additional HTTP headers to send with the request, if any.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * resource.put(data)
 *   .then(function(result) {
 *       // use the result
 *   }).otherwise(function(error) {
 *       // an error occurred
 *   });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.put = function (data, options) {
  Check.defined("data", data);

  options = defaultClone(options, {});
  options.method = "PUT";
  options.data = data;

  return this._makeRequest(options);
};

/**
 * Creates a Resource from a URL and calls put() on it.
 *
 * @param {Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} options.data Data that is posted with the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.put = function (options) {
  var resource = new Resource(options);
  return resource.put(options.data, {
    // Make copy of just the needed fields because headers can be passed to both the constructor and to post
    responseType: options.responseType,
    overrideMimeType: options.overrideMimeType,
  });
};

/**
 * Asynchronously patches data to the given resource.  Returns a promise that will resolve to
 * the result once loaded, or reject if the resource failed to load.  The data is loaded
 * using XMLHttpRequest, which means that in order to make requests to another origin,
 * the server must have Cross-Origin Resource Sharing (CORS) headers enabled.
 *
 * @param {Object} data Data that is posted with the resource.
 * @param {Object} [options] Object with the following properties:
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {Object} [options.headers] Additional HTTP headers to send with the request, if any.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 *
 *
 * @example
 * resource.patch(data)
 *   .then(function(result) {
 *       // use the result
 *   }).otherwise(function(error) {
 *       // an error occurred
 *   });
 *
 * @see {@link http://www.w3.org/TR/cors/|Cross-Origin Resource Sharing}
 * @see {@link http://wiki.commonjs.org/wiki/Promises/A|CommonJS Promises/A}
 */
Resource.prototype.patch = function (data, options) {
  Check.defined("data", data);

  options = defaultClone(options, {});
  options.method = "PATCH";
  options.data = data;

  return this._makeRequest(options);
};

/**
 * Creates a Resource from a URL and calls patch() on it.
 *
 * @param {Object} options A url or an object with the following properties
 * @param {String} options.url The url of the resource.
 * @param {Object} options.data Data that is posted with the resource.
 * @param {Object} [options.queryParameters] An object containing query parameters that will be sent when retrieving the resource.
 * @param {Object} [options.templateValues] Key/Value pairs that are used to replace template values (eg. {x}).
 * @param {Object} [options.headers={}] Additional HTTP headers that will be sent.
 * @param {Proxy} [options.proxy] A proxy to be used when loading the resource.
 * @param {Resource.RetryCallback} [options.retryCallback] The Function to call when a request for this resource fails. If it returns true, the request will be retried.
 * @param {Number} [options.retryAttempts=0] The number of times the retryCallback should be called before giving up.
 * @param {Request} [options.request] A Request object that will be used. Intended for internal use only.
 * @param {String} [options.responseType] The type of response.  This controls the type of item returned.
 * @param {String} [options.overrideMimeType] Overrides the MIME type returned by the server.
 * @returns {Promise.<*>|undefined} a promise that will resolve to the requested data when loaded. Returns undefined if <code>request.throttle</code> is true and the request does not have high enough priority.
 */
Resource.patch = function (options) {
  var resource = new Resource(options);
  return resource.patch(options.data, {
    // Make copy of just the needed fields because headers can be passed to both the constructor and to post
    responseType: options.responseType,
    overrideMimeType: options.overrideMimeType,
  });
};

/**
 * Contains implementations of functions that can be replaced for testing
 *
 * @private
 */
Resource._Implementations = {};

function loadImageElement(url, crossOrigin, deferred) {
  var image = new Image();

  image.onload = function () {
    deferred.resolve(image);
  };

  image.onerror = function (e) {
    deferred.reject(e);
  };

  if (crossOrigin) {
    if (TrustedServers.contains(url)) {
      image.crossOrigin = "use-credentials";
    } else {
      image.crossOrigin = "";
    }
  }

  image.src = url;
}

Resource._Implementations.createImage = function (
  request,
  crossOrigin,
  deferred,
  flipY,
  skipColorSpaceConversion,
  preferImageBitmap
) {
  var url = request.url;
  // Passing an Image to createImageBitmap will force it to run on the main thread
  // since DOM elements don't exist on workers. We convert it to a blob so it's non-blocking.
  // See:
  //    https://bugzilla.mozilla.org/show_bug.cgi?id=1044102#c38
  //    https://bugs.chromium.org/p/chromium/issues/detail?id=580202#c10
  Resource.supportsImageBitmapOptions()
    .then(function (supportsImageBitmap) {
      // We can only use ImageBitmap if we can flip on decode.
      // See: https://github.com/CesiumGS/cesium/pull/7579#issuecomment-466146898
      if (!(supportsImageBitmap && preferImageBitmap)) {
        loadImageElement(url, crossOrigin, deferred);
        return;
      }
      var responseType = "blob";
      var method = "GET";
      var xhrDeferred = when.defer();
      var xhr = Resource._Implementations.loadWithXhr(
        url,
        responseType,
        method,
        undefined,
        undefined,
        xhrDeferred,
        undefined,
        undefined,
        undefined
      );

      if (defined(xhr) && defined(xhr.abort)) {
        request.cancelFunction = function () {
          xhr.abort();
        };
      }
      return xhrDeferred.promise
        .then(function (blob) {
          if (!defined(blob)) {
            deferred.reject(
              new RuntimeError(
                "Successfully retrieved " +
                  url +
                  " but it contained no content."
              )
            );
            return;
          }

          return Resource.createImageBitmapFromBlob(blob, {
            flipY: flipY,
            premultiplyAlpha: false,
            skipColorSpaceConversion: skipColorSpaceConversion,
          });
        })
        .then(deferred.resolve);
    })
    .otherwise(deferred.reject);
};

/**
 * Wrapper for createImageBitmap
 *
 * @private
 */
Resource.createImageBitmapFromBlob = function (blob, options) {
  Check.defined("options", options);
  Check.typeOf.bool("options.flipY", options.flipY);
  Check.typeOf.bool("options.premultiplyAlpha", options.premultiplyAlpha);
  Check.typeOf.bool(
    "options.skipColorSpaceConversion",
    options.skipColorSpaceConversion
  );

  return createImageBitmap(blob, {
    imageOrientation: options.flipY ? "flipY" : "none",
    premultiplyAlpha: options.premultiplyAlpha ? "premultiply" : "none",
    colorSpaceConversion: options.skipColorSpaceConversion ? "none" : "default",
  });
};

function decodeResponse(loadWithHttpResponse, responseType) {
  switch (responseType) {
    case "text":
      return loadWithHttpResponse.toString("utf8");
    case "json":
      return JSON.parse(loadWithHttpResponse.toString("utf8"));
    default:
      return new Uint8Array(loadWithHttpResponse).buffer;
  }
}

function loadWithHttpRequest(
  url,
  responseType,
  method,
  data,
  headers,
  deferred,
  overrideMimeType
) {
  // Note: only the 'json' and 'text' responseTypes transforms the loaded buffer
  /* eslint-disable no-undef */
  var URL = require("url").parse(url);
  var http = URL.protocol === "https:" ? require("https") : require("http");
  var zlib = require("zlib");
  /* eslint-enable no-undef */

  var options = {
    protocol: URL.protocol,
    hostname: URL.hostname,
    port: URL.port,
    path: URL.path,
    query: URL.query,
    method: method,
    headers: headers,
  };

  http
    .request(options)
    .on("response", function (res) {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        deferred.reject(
          new RequestErrorEvent(res.statusCode, res, res.headers)
        );
        return;
      }

      var chunkArray = [];
      res.on("data", function (chunk) {
        chunkArray.push(chunk);
      });

      res.on("end", function () {
        // eslint-disable-next-line no-undef
        var result = Buffer.concat(chunkArray);
        if (res.headers["content-encoding"] === "gzip") {
          zlib.gunzip(result, function (error, resultUnzipped) {
            if (error) {
              deferred.reject(
                new RuntimeError("Error decompressing response.")
              );
            } else {
              deferred.resolve(decodeResponse(resultUnzipped, responseType));
            }
          });
        } else {
          deferred.resolve(decodeResponse(result, responseType));
        }
      });
    })
    .on("error", function (e) {
      deferred.reject(new RequestErrorEvent());
    })
    .end();
}

var noXMLHttpRequest = typeof XMLHttpRequest === "undefined";
Resource._Implementations.loadWithXhr = function (
  url,
  responseType,
  method,
  data,
  headers,
  deferred,
  overrideMimeType
) {
  var dataUriRegexResult = dataUriRegex.exec(url);
  if (dataUriRegexResult !== null) {
    deferred.resolve(decodeDataUri(dataUriRegexResult, responseType));
    return;
  }

  if (noXMLHttpRequest) {
    loadWithHttpRequest(
      url,
      responseType,
      method,
      data,
      headers,
      deferred);
    return;
  }

  var xhr = new XMLHttpRequest();

  if (TrustedServers.contains(url)) {
    xhr.withCredentials = true;
  }

  xhr.open(method, url, true);

  if (defined(overrideMimeType) && defined(xhr.overrideMimeType)) {
    xhr.overrideMimeType(overrideMimeType);
  }

  if (defined(headers)) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  }

  if (defined(responseType)) {
    xhr.responseType = responseType;
  }

  // While non-standard, file protocol always returns a status of 0 on success
  var localFile = false;
  if (typeof url === "string") {
    localFile =
      url.indexOf("file://") === 0 ||
      (typeof window !== "undefined" && window.location.origin === "file://");
  }

  xhr.onload = function () {
    if (
      (xhr.status < 200 || xhr.status >= 300) &&
      !(localFile && xhr.status === 0)
    ) {
      deferred.reject(
        new RequestErrorEvent(
          xhr.status,
          xhr.response,
          xhr.getAllResponseHeaders()
        )
      );
      return;
    }

    var response = xhr.response;
    var browserResponseType = xhr.responseType;

    if (method === "HEAD" || method === "OPTIONS") {
      var responseHeaderString = xhr.getAllResponseHeaders();
      var splitHeaders = responseHeaderString.trim().split(/[\r\n]+/);

      var responseHeaders = {};
      splitHeaders.forEach(function (line) {
        var parts = line.split(": ");
        var header = parts.shift();
        responseHeaders[header] = parts.join(": ");
      });

      deferred.resolve(responseHeaders);
      return;
    }

    //All modern browsers will go into either the first or second if block or last else block.
    //Other code paths support older browsers that either do not support the supplied responseType
    //or do not support the xhr.response property.
    if (xhr.status === 204) {
      // accept no content
      deferred.resolve();
    } else if (
      defined(response) &&
      (!defined(responseType) || browserResponseType === responseType)
    ) {
      deferred.resolve(response);
    } else if (responseType === "json" && typeof response === "string") {
      try {
        deferred.resolve(JSON.parse(response));
      } catch (e) {
        deferred.reject(e);
      }
    } else if (
      (browserResponseType === "" || browserResponseType === "document") &&
      defined(xhr.responseXML) &&
      xhr.responseXML.hasChildNodes()
    ) {
      deferred.resolve(xhr.responseXML);
    } else if (
      (browserResponseType === "" || browserResponseType === "text") &&
      defined(xhr.responseText)
    ) {
      deferred.resolve(xhr.responseText);
    } else {
      deferred.reject(
        new RuntimeError("Invalid XMLHttpRequest response type.")
      );
    }
  };

  xhr.onerror = function (e) {
    deferred.reject(new RequestErrorEvent());
  };

  xhr.send(data);

  return xhr;
};

Resource._Implementations.loadAndExecuteScript = function (
  url,
  functionName,
  deferred
) {
  return loadAndExecuteScript(url).otherwise(deferred.reject);
};

/**
 * The default implementations
 *
 * @private
 */
Resource._DefaultImplementations = {};
Resource._DefaultImplementations.createImage =
  Resource._Implementations.createImage;
Resource._DefaultImplementations.loadWithXhr =
  Resource._Implementations.loadWithXhr;
Resource._DefaultImplementations.loadAndExecuteScript =
  Resource._Implementations.loadAndExecuteScript;

/**
 * A resource instance initialized to the current browser location
 *
 * @type {Resource}
 * @constant
 */
Resource.DEFAULT = Object.freeze(
  new Resource({
    url:
      typeof document === "undefined"
        ? ""
        : document.location.href.split("?")[0],
  })
);

var CompositeHeightmapResource = /*#__PURE__*/function (_DefaultHeightmapReso) {
  _inherits(CompositeHeightmapResource, _DefaultHeightmapReso);

  var _super = _createSuper(CompositeHeightmapResource);

  function CompositeHeightmapResource(opts) {
    var _this;

    _classCallCheck(this, CompositeHeightmapResource);

    _this = _super.call(this, opts);

    _defineProperty(_assertThisInitialized(_this), "resources", null);

    _defineProperty(_assertThisInitialized(_this), "getTilePixels", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(coords) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.allSettled(_this.resources.map(function (resource) {
                  var url = _this.buildTileURL(coords, resource);

                  return loadImage(url);
                })).then(function (images) {
                  var valid = Array.from(images.filter(function (image) {
                    return image.status === 'fulfilled';
                  }));
                  if (valid.length === 0) throw new Error("No valid tiles out of ".concat(_this.resources.length, " resources at ").concat(coords.x, ",").concat(coords.y, ",").concat(coords.z));
                  console.warn("".concat(valid.length, " of ").concat(_this.resources.length, " valid image sources for ").concat(coords.x, ",").concat(coords.y, ",").concat(coords.z));
                  return _this.getPixels(valid.map(function (image) {
                    return image.value;
                  }));
                }));

              case 1:
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

    _this.resources = Array.from(opts.urls.map(function (url) {
      return Resource.createIfNeeded(url);
    }));
    return _this;
  }

  return CompositeHeightmapResource;
}(DefaultHeightmapResource);

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

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwp2YXIgd29ya2VyX2NvZGUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHsKICAndXNlIHN0cmljdCc7CgogIGZ1bmN0aW9uIF93cmFwUmVnRXhwKCkgewogICAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAocmUsIGdyb3VwcykgewogICAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB1bmRlZmluZWQsIGdyb3Vwcyk7CiAgICB9OwoKICAgIHZhciBfc3VwZXIgPSBSZWdFeHAucHJvdG90eXBlOwoKICAgIHZhciBfZ3JvdXBzID0gbmV3IFdlYWtNYXAoKTsKCiAgICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChyZSwgZmxhZ3MsIGdyb3VwcykgewogICAgICB2YXIgX3RoaXMgPSBuZXcgUmVnRXhwKHJlLCBmbGFncyk7CgogICAgICBfZ3JvdXBzLnNldChfdGhpcywgZ3JvdXBzIHx8IF9ncm91cHMuZ2V0KHJlKSk7CgogICAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKF90aGlzLCBCYWJlbFJlZ0V4cC5wcm90b3R5cGUpOwogICAgfQoKICAgIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKTsKCiAgICBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChzdHIpIHsKICAgICAgdmFyIHJlc3VsdCA9IF9zdXBlci5leGVjLmNhbGwodGhpcywgc3RyKTsKCiAgICAgIGlmIChyZXN1bHQpIHJlc3VsdC5ncm91cHMgPSBidWlsZEdyb3VwcyhyZXN1bHQsIHRoaXMpOwogICAgICByZXR1cm4gcmVzdWx0OwogICAgfTsKCiAgICBCYWJlbFJlZ0V4cC5wcm90b3R5cGVbU3ltYm9sLnJlcGxhY2VdID0gZnVuY3Rpb24gKHN0ciwgc3Vic3RpdHV0aW9uKSB7CiAgICAgIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSAic3RyaW5nIikgewogICAgICAgIHZhciBncm91cHMgPSBfZ3JvdXBzLmdldCh0aGlzKTsKCiAgICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbi5yZXBsYWNlKC9cJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoXywgbmFtZSkgewogICAgICAgICAgcmV0dXJuICIkIiArIGdyb3Vwc1tuYW1lXTsKICAgICAgICB9KSk7CiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gImZ1bmN0aW9uIikgewogICAgICAgIHZhciBfdGhpcyA9IHRoaXM7CgogICAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50czsKCiAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAhPT0gIm9iamVjdCIpIHsKICAgICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJncyk7CiAgICAgICAgICAgIGFyZ3MucHVzaChidWlsZEdyb3VwcyhhcmdzLCBfdGhpcykpOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBzdWJzdGl0dXRpb24uYXBwbHkodGhpcywgYXJncyk7CiAgICAgICAgfSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbik7CiAgICAgIH0KICAgIH07CgogICAgZnVuY3Rpb24gYnVpbGRHcm91cHMocmVzdWx0LCByZSkgewogICAgICB2YXIgZyA9IF9ncm91cHMuZ2V0KHJlKTsKCiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhnKS5yZWR1Y2UoZnVuY3Rpb24gKGdyb3VwcywgbmFtZSkgewogICAgICAgIGdyb3Vwc1tuYW1lXSA9IHJlc3VsdFtnW25hbWVdXTsKICAgICAgICByZXR1cm4gZ3JvdXBzOwogICAgICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKTsKICAgIH0KCiAgICByZXR1cm4gX3dyYXBSZWdFeHAuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICB9CgogIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgewogICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAiZnVuY3Rpb24iICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsKICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iKTsKICAgIH0KCiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsKICAgICAgY29uc3RydWN0b3I6IHsKICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsCiAgICAgICAgd3JpdGFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlCiAgICAgIH0KICAgIH0pOwogICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7CiAgfQoKICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgewogICAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7CiAgICAgIG8uX19wcm90b19fID0gcDsKICAgICAgcmV0dXJuIG87CiAgICB9OwoKICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7CiAgfQoKICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgewogICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAidW5kZWZpbmVkIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsKICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7CiAgICBpZiAodHlwZW9mIFByb3h5ID09PSAiZnVuY3Rpb24iKSByZXR1cm4gdHJ1ZTsKCiAgICB0cnkgewogICAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7CiAgICAgIHJldHVybiB0cnVlOwogICAgfSBjYXRjaCAoZSkgewogICAgICByZXR1cm4gZmFsc2U7CiAgICB9CiAgfQoKICBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsKICAgIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsKICAgICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OwogICAgfSBlbHNlIHsKICAgICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgewogICAgICAgIHZhciBhID0gW251bGxdOwogICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTsKICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7CiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7CiAgICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7CiAgICAgICAgcmV0dXJuIGluc3RhbmNlOwogICAgICB9OwogICAgfQoKICAgIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgfQoKICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7CiAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOwogIH0KCiAgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgewogICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7CiAgfQoKICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsKICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAidW5kZWZpbmVkIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyWyJAQGl0ZXJhdG9yIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7CiAgfQoKICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7CiAgICBpZiAoIW8pIHJldHVybjsKICAgIGlmICh0eXBlb2YgbyA9PT0gInN0cmluZyIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOwogICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOwogICAgaWYgKG4gPT09ICJPYmplY3QiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7CiAgICBpZiAobiA9PT0gIk1hcCIgfHwgbiA9PT0gIlNldCIpIHJldHVybiBBcnJheS5mcm9tKG8pOwogICAgaWYgKG4gPT09ICJBcmd1bWVudHMiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsKICB9CgogIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7CiAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsKCiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07CgogICAgcmV0dXJuIGFycjI7CiAgfQoKICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7CiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC4iKTsKICB9CgogIC8vIFdlIHNob3VsZCBzYXZlIHRoZXNlCiAgLy9jb25zdCBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDI1NiwgMjU2KTsKICAvL2NvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCIyZCIpOwogIGZ1bmN0aW9uIG1hcGJveFRlcnJhaW5Ub0dyaWQocG5nLCBkZWNvZGVSZ2IpIHsKICAgIC8vIG1heWJlIHdlIHNob3VsZCBkbyB0aGlzIG9uIHRoZSBHUFUgdXNpbmcgUkVHTD8KICAgIC8vIGJ1dCB0aGF0IHdvdWxkIHJlcXVpcmUgR1BVIC0+IENQVSAtPiBHUFUKICAgIHZhciBncmlkU2l6ZSA9IHBuZy5zaGFwZVswXSArIDE7CiAgICB2YXIgdGVycmFpbiA9IG5ldyBGbG9hdDMyQXJyYXkoZ3JpZFNpemUgKiBncmlkU2l6ZSk7CiAgICB2YXIgdGlsZVNpemUgPSBwbmcuc2hhcGVbMF07IC8vIGRlY29kZSB0ZXJyYWluIHZhbHVlcwoKICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGlsZVNpemU7IHkrKykgewogICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRpbGVTaXplOyB4KyspIHsKICAgICAgICB2YXIgeWMgPSB5OwogICAgICAgIHZhciByID0gcG5nLmdldCh4LCB5YywgMCk7CiAgICAgICAgdmFyIGcgPSBwbmcuZ2V0KHgsIHljLCAxKTsKICAgICAgICB2YXIgYiA9IHBuZy5nZXQoeCwgeWMsIDIpOwogICAgICAgIHZhciBhID0gcG5nLmdldCh4LCB5YywgMyk7CiAgICAgICAgdGVycmFpblt5ICogZ3JpZFNpemUgKyB4XSA9IGRlY29kZVJnYihyLCBnLCBiLCBhKTsKICAgICAgfQogICAgfSAvLyBiYWNrZmlsbCByaWdodCBhbmQgYm90dG9tIGJvcmRlcnMKCgogICAgZm9yICh2YXIgX3ggPSAwOyBfeCA8IGdyaWRTaXplIC0gMTsgX3grKykgewogICAgICB0ZXJyYWluW2dyaWRTaXplICogKGdyaWRTaXplIC0gMSkgKyBfeF0gPSB0ZXJyYWluW2dyaWRTaXplICogKGdyaWRTaXplIC0gMikgKyBfeF07CiAgICB9CgogICAgZm9yICh2YXIgX3kgPSAwOyBfeSA8IGdyaWRTaXplOyBfeSsrKSB7CiAgICAgIHRlcnJhaW5bZ3JpZFNpemUgKiBfeSArIGdyaWRTaXplIC0gMV0gPSB0ZXJyYWluW2dyaWRTaXplICogX3kgKyBncmlkU2l6ZSAtIDJdOwogICAgfQoKICAgIHJldHVybiB0ZXJyYWluOwogIH0KCiAgZnVuY3Rpb24gY3JlYXRlUXVhbnRpemVkTWVzaERhdGEodGlsZSwgbWVzaCwgdGlsZVNpemUpIHsKICAgIHZhciB4dmFscyA9IFtdOwogICAgdmFyIHl2YWxzID0gW107CiAgICB2YXIgaGVpZ2h0TWV0ZXJzID0gW107CiAgICB2YXIgbm9ydGhJbmRpY2VzID0gW107CiAgICB2YXIgc291dGhJbmRpY2VzID0gW107CiAgICB2YXIgZWFzdEluZGljZXMgPSBbXTsKICAgIHZhciB3ZXN0SW5kaWNlcyA9IFtdOwogICAgdmFyIG1pbmltdW1IZWlnaHQgPSBJbmZpbml0eTsKICAgIHZhciBtYXhpbXVtSGVpZ2h0ID0gLUluZmluaXR5OwogICAgdmFyIHNjYWxhciA9IDMyNzY4LjAgLyB0aWxlU2l6ZTsKCiAgICBmb3IgKHZhciBpeCA9IDA7IGl4IDwgbWVzaC52ZXJ0aWNlcy5sZW5ndGggLyAyOyBpeCsrKSB7CiAgICAgIHZhciB2ZXJ0ZXhJeCA9IGl4OwogICAgICB2YXIgcHggPSBtZXNoLnZlcnRpY2VzW2l4ICogMl07CiAgICAgIHZhciBweSA9IG1lc2gudmVydGljZXNbaXggKiAyICsgMV07CiAgICAgIHZhciBoZWlnaHQgPSB0aWxlLnRlcnJhaW5bcHkgKiAodGlsZVNpemUgKyAxKSArIHB4XTsKICAgICAgaWYgKGhlaWdodCA+IG1heGltdW1IZWlnaHQpIG1heGltdW1IZWlnaHQgPSBoZWlnaHQ7CiAgICAgIGlmIChoZWlnaHQgPCBtaW5pbXVtSGVpZ2h0KSBtaW5pbXVtSGVpZ2h0ID0gaGVpZ2h0OwogICAgICBoZWlnaHRNZXRlcnMucHVzaChoZWlnaHQpOwogICAgICBpZiAocHkgPT0gMCkgbm9ydGhJbmRpY2VzLnB1c2godmVydGV4SXgpOwogICAgICBpZiAocHkgPT0gdGlsZVNpemUpIHNvdXRoSW5kaWNlcy5wdXNoKHZlcnRleEl4KTsKICAgICAgaWYgKHB4ID09IDApIHdlc3RJbmRpY2VzLnB1c2godmVydGV4SXgpOwogICAgICBpZiAocHggPT0gdGlsZVNpemUpIGVhc3RJbmRpY2VzLnB1c2godmVydGV4SXgpOwogICAgICB2YXIgeHYgPSBweCAqIHNjYWxhcjsKICAgICAgdmFyIHl2ID0gKHRpbGVTaXplIC0gcHkpICogc2NhbGFyOwogICAgICB4dmFscy5wdXNoKHh2KTsKICAgICAgeXZhbHMucHVzaCh5dik7CiAgICB9CgogICAgdmFyIGhlaWdodFJhbmdlID0gbWF4aW11bUhlaWdodCAtIG1pbmltdW1IZWlnaHQ7CiAgICB2YXIgaGVpZ2h0cyA9IGhlaWdodE1ldGVycy5tYXAoZnVuY3Rpb24gKGQpIHsKICAgICAgaWYgKGhlaWdodFJhbmdlIDwgMSkgcmV0dXJuIDA7CiAgICAgIHJldHVybiAoZCAtIG1pbmltdW1IZWlnaHQpICogKDMyNzY3LjAgLyBoZWlnaHRSYW5nZSk7CiAgICB9KTsKICAgIHZhciB0cmlhbmdsZXMgPSBuZXcgVWludDE2QXJyYXkobWVzaC50cmlhbmdsZXMpOwogICAgdmFyIHF1YW50aXplZFZlcnRpY2VzID0gbmV3IFVpbnQxNkFycmF5KCAvL3ZlcnRzCiAgICBbXS5jb25jYXQoeHZhbHMsIHl2YWxzLCBfdG9Db25zdW1hYmxlQXJyYXkoaGVpZ2h0cykpKTsgLy8gU0UgTlcgTkUKICAgIC8vIE5FIE5XIFNFCgogICAgcmV0dXJuIHsKICAgICAgbWluaW11bUhlaWdodDogbWluaW11bUhlaWdodCwKICAgICAgbWF4aW11bUhlaWdodDogbWF4aW11bUhlaWdodCwKICAgICAgcXVhbnRpemVkVmVydGljZXM6IHF1YW50aXplZFZlcnRpY2VzLAogICAgICBpbmRpY2VzOiB0cmlhbmdsZXMsCiAgICAgIHdlc3RJbmRpY2VzOiB3ZXN0SW5kaWNlcywKICAgICAgc291dGhJbmRpY2VzOiBzb3V0aEluZGljZXMsCiAgICAgIGVhc3RJbmRpY2VzOiBlYXN0SW5kaWNlcywKICAgICAgbm9ydGhJbmRpY2VzOiBub3J0aEluZGljZXMKICAgIH07CiAgfQoKICBmdW5jdGlvbiBpb3RhKG4pIHsKICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobik7CiAgICBmb3IodmFyIGk9MDsgaTxuOyArK2kpIHsKICAgICAgcmVzdWx0W2ldID0gaTsKICAgIH0KICAgIHJldHVybiByZXN1bHQKICB9CgogIHZhciBpb3RhXzEgPSBpb3RhOwoKICAvKiEKICAgKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyCiAgICoKICAgKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPgogICAqIEBsaWNlbnNlICBNSVQKICAgKi8KICAvLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nCiAgLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseQogIHZhciBpc0J1ZmZlcl8xID0gZnVuY3Rpb24gKG9iaikgewogICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcikKICB9OwoKICBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7CiAgICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKQogIH0KCiAgLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS4KICBmdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikgewogICAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpCiAgfQoKICB2YXIgaGFzVHlwZWRBcnJheXMgID0gKCh0eXBlb2YgRmxvYXQ2NEFycmF5KSAhPT0gInVuZGVmaW5lZCIpOwoKICBmdW5jdGlvbiBjb21wYXJlMXN0KGEsIGIpIHsKICAgIHJldHVybiBhWzBdIC0gYlswXQogIH0KCiAgZnVuY3Rpb24gb3JkZXIoKSB7CiAgICB2YXIgc3RyaWRlID0gdGhpcy5zdHJpZGU7CiAgICB2YXIgdGVybXMgPSBuZXcgQXJyYXkoc3RyaWRlLmxlbmd0aCk7CiAgICB2YXIgaTsKICAgIGZvcihpPTA7IGk8dGVybXMubGVuZ3RoOyArK2kpIHsKICAgICAgdGVybXNbaV0gPSBbTWF0aC5hYnMoc3RyaWRlW2ldKSwgaV07CiAgICB9CiAgICB0ZXJtcy5zb3J0KGNvbXBhcmUxc3QpOwogICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh0ZXJtcy5sZW5ndGgpOwogICAgZm9yKGk9MDsgaTxyZXN1bHQubGVuZ3RoOyArK2kpIHsKICAgICAgcmVzdWx0W2ldID0gdGVybXNbaV1bMV07CiAgICB9CiAgICByZXR1cm4gcmVzdWx0CiAgfQoKICBmdW5jdGlvbiBjb21waWxlQ29uc3RydWN0b3IoZHR5cGUsIGRpbWVuc2lvbikgewogICAgdmFyIGNsYXNzTmFtZSA9IFsiVmlldyIsIGRpbWVuc2lvbiwgImQiLCBkdHlwZV0uam9pbigiIik7CiAgICBpZihkaW1lbnNpb24gPCAwKSB7CiAgICAgIGNsYXNzTmFtZSA9ICJWaWV3X05pbCIgKyBkdHlwZTsKICAgIH0KICAgIHZhciB1c2VHZXR0ZXJzID0gKGR0eXBlID09PSAiZ2VuZXJpYyIpOwoKICAgIGlmKGRpbWVuc2lvbiA9PT0gLTEpIHsKICAgICAgLy9TcGVjaWFsIGNhc2UgZm9yIHRyaXZpYWwgYXJyYXlzCiAgICAgIHZhciBjb2RlID0KICAgICAgICAiZnVuY3Rpb24gIitjbGFzc05hbWUrIihhKXt0aGlzLmRhdGE9YTt9O1wKdmFyIHByb3RvPSIrY2xhc3NOYW1lKyIucHJvdG90eXBlO1wKcHJvdG8uZHR5cGU9JyIrZHR5cGUrIic7XApwcm90by5pbmRleD1mdW5jdGlvbigpe3JldHVybiAtMX07XApwcm90by5zaXplPTA7XApwcm90by5kaW1lbnNpb249LTE7XApwcm90by5zaGFwZT1wcm90by5zdHJpZGU9cHJvdG8ub3JkZXI9W107XApwcm90by5sbz1wcm90by5oaT1wcm90by50cmFuc3Bvc2U9cHJvdG8uc3RlcD1cCmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSk7fTtcCnByb3RvLmdldD1wcm90by5zZXQ9ZnVuY3Rpb24oKXt9O1wKcHJvdG8ucGljaz1mdW5jdGlvbigpe3JldHVybiBudWxsfTtcCnJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfIitjbGFzc05hbWUrIihhKXtyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIoYSk7fSI7CiAgICAgIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oY29kZSk7CiAgICAgIHJldHVybiBwcm9jZWR1cmUoKQogICAgfSBlbHNlIGlmKGRpbWVuc2lvbiA9PT0gMCkgewogICAgICAvL1NwZWNpYWwgY2FzZSBmb3IgMGQgYXJyYXlzCiAgICAgIHZhciBjb2RlID0KICAgICAgICAiZnVuY3Rpb24gIitjbGFzc05hbWUrIihhLGQpIHtcCnRoaXMuZGF0YSA9IGE7XAp0aGlzLm9mZnNldCA9IGRcCn07XAp2YXIgcHJvdG89IitjbGFzc05hbWUrIi5wcm90b3R5cGU7XApwcm90by5kdHlwZT0nIitkdHlwZSsiJztcCnByb3RvLmluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub2Zmc2V0fTtcCnByb3RvLmRpbWVuc2lvbj0wO1wKcHJvdG8uc2l6ZT0xO1wKcHJvdG8uc2hhcGU9XApwcm90by5zdHJpZGU9XApwcm90by5vcmRlcj1bXTtcCnByb3RvLmxvPVwKcHJvdG8uaGk9XApwcm90by50cmFuc3Bvc2U9XApwcm90by5zdGVwPWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfY29weSgpIHtcCnJldHVybiBuZXcgIitjbGFzc05hbWUrIih0aGlzLmRhdGEsdGhpcy5vZmZzZXQpXAp9O1wKcHJvdG8ucGljaz1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX3BpY2soKXtcCnJldHVybiBUcml2aWFsQXJyYXkodGhpcy5kYXRhKTtcCn07XApwcm90by52YWx1ZU9mPXByb3RvLmdldD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX2dldCgpe1wKcmV0dXJuICIrKHVzZUdldHRlcnMgPyAidGhpcy5kYXRhLmdldCh0aGlzLm9mZnNldCkiIDogInRoaXMuZGF0YVt0aGlzLm9mZnNldF0iKSsKICAifTtcCnByb3RvLnNldD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX3NldCh2KXtcCnJldHVybiAiKyh1c2VHZXR0ZXJzID8gInRoaXMuZGF0YS5zZXQodGhpcy5vZmZzZXQsdikiIDogInRoaXMuZGF0YVt0aGlzLm9mZnNldF09diIpKyJcCn07XApyZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0XyIrY2xhc3NOYW1lKyIoYSxiLGMsZCl7cmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKGEsZCl9IjsKICAgICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbigiVHJpdmlhbEFycmF5IiwgY29kZSk7CiAgICAgIHJldHVybiBwcm9jZWR1cmUoQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV1bMF0pCiAgICB9CgogICAgdmFyIGNvZGUgPSBbIid1c2Ugc3RyaWN0JyJdOwoKICAgIC8vQ3JlYXRlIGNvbnN0cnVjdG9yIGZvciB2aWV3CiAgICB2YXIgaW5kaWNlcyA9IGlvdGFfMShkaW1lbnNpb24pOwogICAgdmFyIGFyZ3MgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiAiaSIraSB9KTsKICAgIHZhciBpbmRleF9zdHIgPSAidGhpcy5vZmZzZXQrIiArIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHJldHVybiAidGhpcy5zdHJpZGVbIiArIGkgKyAiXSppIiArIGkKICAgICAgICB9KS5qb2luKCIrIik7CiAgICB2YXIgc2hhcGVBcmcgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJiIitpCiAgICAgIH0pLmpvaW4oIiwiKTsKICAgIHZhciBzdHJpZGVBcmcgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJjIitpCiAgICAgIH0pLmpvaW4oIiwiKTsKICAgIGNvZGUucHVzaCgKICAgICAgImZ1bmN0aW9uICIrY2xhc3NOYW1lKyIoYSwiICsgc2hhcGVBcmcgKyAiLCIgKyBzdHJpZGVBcmcgKyAiLGQpe3RoaXMuZGF0YT1hIiwKICAgICAgICAidGhpcy5zaGFwZT1bIiArIHNoYXBlQXJnICsgIl0iLAogICAgICAgICJ0aGlzLnN0cmlkZT1bIiArIHN0cmlkZUFyZyArICJdIiwKICAgICAgICAidGhpcy5vZmZzZXQ9ZHwwfSIsCiAgICAgICJ2YXIgcHJvdG89IitjbGFzc05hbWUrIi5wcm90b3R5cGUiLAogICAgICAicHJvdG8uZHR5cGU9JyIrZHR5cGUrIiciLAogICAgICAicHJvdG8uZGltZW5zaW9uPSIrZGltZW5zaW9uKTsKCiAgICAvL3ZpZXcuc2l6ZToKICAgIGNvZGUucHVzaCgiT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCdzaXplJyx7Z2V0OmZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfc2l6ZSgpe1wKcmV0dXJuICIraW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gInRoaXMuc2hhcGVbIitpKyJdIiB9KS5qb2luKCIqIiksCiAgIn19KSIpOwoKICAgIC8vdmlldy5vcmRlcjoKICAgIGlmKGRpbWVuc2lvbiA9PT0gMSkgewogICAgICBjb2RlLnB1c2goInByb3RvLm9yZGVyPVswXSIpOwogICAgfSBlbHNlIHsKICAgICAgY29kZS5wdXNoKCJPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sJ29yZGVyJyx7Z2V0OiIpOwogICAgICBpZihkaW1lbnNpb24gPCA0KSB7CiAgICAgICAgY29kZS5wdXNoKCJmdW5jdGlvbiAiK2NsYXNzTmFtZSsiX29yZGVyKCl7Iik7CiAgICAgICAgaWYoZGltZW5zaW9uID09PSAyKSB7CiAgICAgICAgICBjb2RlLnB1c2goInJldHVybiAoTWF0aC5hYnModGhpcy5zdHJpZGVbMF0pPk1hdGguYWJzKHRoaXMuc3RyaWRlWzFdKSk/WzEsMF06WzAsMV19fSkiKTsKICAgICAgICB9IGVsc2UgaWYoZGltZW5zaW9uID09PSAzKSB7CiAgICAgICAgICBjb2RlLnB1c2goCiAgInZhciBzMD1NYXRoLmFicyh0aGlzLnN0cmlkZVswXSksczE9TWF0aC5hYnModGhpcy5zdHJpZGVbMV0pLHMyPU1hdGguYWJzKHRoaXMuc3RyaWRlWzJdKTtcCmlmKHMwPnMxKXtcCmlmKHMxPnMyKXtcCnJldHVybiBbMiwxLDBdO1wKfWVsc2UgaWYoczA+czIpe1wKcmV0dXJuIFsxLDIsMF07XAp9ZWxzZXtcCnJldHVybiBbMSwwLDJdO1wKfVwKfWVsc2UgaWYoczA+czIpe1wKcmV0dXJuIFsyLDAsMV07XAp9ZWxzZSBpZihzMj5zMSl7XApyZXR1cm4gWzAsMSwyXTtcCn1lbHNle1wKcmV0dXJuIFswLDIsMV07XAp9fX0pIik7CiAgICAgICAgfQogICAgICB9IGVsc2UgewogICAgICAgIGNvZGUucHVzaCgiT1JERVJ9KSIpOwogICAgICB9CiAgICB9CgogICAgLy92aWV3LnNldChpMCwgLi4uLCB2KToKICAgIGNvZGUucHVzaCgKICAicHJvdG8uc2V0PWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfc2V0KCIrYXJncy5qb2luKCIsIikrIix2KXsiKTsKICAgIGlmKHVzZUdldHRlcnMpIHsKICAgICAgY29kZS5wdXNoKCJyZXR1cm4gdGhpcy5kYXRhLnNldCgiK2luZGV4X3N0cisiLHYpfSIpOwogICAgfSBlbHNlIHsKICAgICAgY29kZS5wdXNoKCJyZXR1cm4gdGhpcy5kYXRhWyIraW5kZXhfc3RyKyJdPXZ9Iik7CiAgICB9CgogICAgLy92aWV3LmdldChpMCwgLi4uKToKICAgIGNvZGUucHVzaCgicHJvdG8uZ2V0PWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfZ2V0KCIrYXJncy5qb2luKCIsIikrIil7Iik7CiAgICBpZih1c2VHZXR0ZXJzKSB7CiAgICAgIGNvZGUucHVzaCgicmV0dXJuIHRoaXMuZGF0YS5nZXQoIitpbmRleF9zdHIrIil9Iik7CiAgICB9IGVsc2UgewogICAgICBjb2RlLnB1c2goInJldHVybiB0aGlzLmRhdGFbIitpbmRleF9zdHIrIl19Iik7CiAgICB9CgogICAgLy92aWV3LmluZGV4OgogICAgY29kZS5wdXNoKAogICAgICAicHJvdG8uaW5kZXg9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9pbmRleCgiLCBhcmdzLmpvaW4oKSwgIil7cmV0dXJuICIraW5kZXhfc3RyKyJ9Iik7CgogICAgLy92aWV3LmhpKCk6CiAgICBjb2RlLnB1c2goInByb3RvLmhpPWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfaGkoIithcmdzLmpvaW4oIiwiKSsiKXtyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIodGhpcy5kYXRhLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gWyIodHlwZW9mIGkiLGksIiE9PSdudW1iZXInfHxpIixpLCI8MCk/dGhpcy5zaGFwZVsiLCBpLCAiXTppIiwgaSwifDAiXS5qb2luKCIiKQogICAgICB9KS5qb2luKCIsIikrIiwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJ0aGlzLnN0cmlkZVsiK2kgKyAiXSIKICAgICAgfSkuam9pbigiLCIpKyIsdGhpcy5vZmZzZXQpfSIpOwoKICAgIC8vdmlldy5sbygpOgogICAgdmFyIGFfdmFycyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuICJhIitpKyI9dGhpcy5zaGFwZVsiK2krIl0iIH0pOwogICAgdmFyIGNfdmFycyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuICJjIitpKyI9dGhpcy5zdHJpZGVbIitpKyJdIiB9KTsKICAgIGNvZGUucHVzaCgicHJvdG8ubG89ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9sbygiK2FyZ3Muam9pbigiLCIpKyIpe3ZhciBiPXRoaXMub2Zmc2V0LGQ9MCwiK2FfdmFycy5qb2luKCIsIikrIiwiK2NfdmFycy5qb2luKCIsIikpOwogICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHsKICAgICAgY29kZS5wdXNoKAogICJpZih0eXBlb2YgaSIraSsiPT09J251bWJlcicmJmkiK2krIj49MCl7XApkPWkiK2krInwwO1wKYis9YyIraSsiKmQ7XAphIitpKyItPWR9Iik7CiAgICB9CiAgICBjb2RlLnB1c2goInJldHVybiBuZXcgIitjbGFzc05hbWUrIih0aGlzLmRhdGEsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYSIraQogICAgICB9KS5qb2luKCIsIikrIiwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJjIitpCiAgICAgIH0pLmpvaW4oIiwiKSsiLGIpfSIpOwoKICAgIC8vdmlldy5zdGVwKCk6CiAgICBjb2RlLnB1c2goInByb3RvLnN0ZXA9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9zdGVwKCIrYXJncy5qb2luKCIsIikrIil7dmFyICIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImEiK2krIj10aGlzLnNoYXBlWyIraSsiXSIKICAgICAgfSkuam9pbigiLCIpKyIsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYiIraSsiPXRoaXMuc3RyaWRlWyIraSsiXSIKICAgICAgfSkuam9pbigiLCIpKyIsYz10aGlzLm9mZnNldCxkPTAsY2VpbD1NYXRoLmNlaWwiKTsKICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7CiAgICAgIGNvZGUucHVzaCgKICAiaWYodHlwZW9mIGkiK2krIj09PSdudW1iZXInKXtcCmQ9aSIraSsifDA7XAppZihkPDApe1wKYys9YiIraSsiKihhIitpKyItMSk7XAphIitpKyI9Y2VpbCgtYSIraSsiL2QpXAp9ZWxzZXtcCmEiK2krIj1jZWlsKGEiK2krIi9kKVwKfVwKYiIraSsiKj1kXAp9Iik7CiAgICB9CiAgICBjb2RlLnB1c2goInJldHVybiBuZXcgIitjbGFzc05hbWUrIih0aGlzLmRhdGEsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYSIgKyBpCiAgICAgIH0pLmpvaW4oIiwiKSsiLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImIiICsgaQogICAgICB9KS5qb2luKCIsIikrIixjKX0iKTsKCiAgICAvL3ZpZXcudHJhbnNwb3NlKCk6CiAgICB2YXIgdFNoYXBlID0gbmV3IEFycmF5KGRpbWVuc2lvbik7CiAgICB2YXIgdFN0cmlkZSA9IG5ldyBBcnJheShkaW1lbnNpb24pOwogICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHsKICAgICAgdFNoYXBlW2ldID0gImFbaSIraSsiXSI7CiAgICAgIHRTdHJpZGVbaV0gPSAiYltpIitpKyJdIjsKICAgIH0KICAgIGNvZGUucHVzaCgicHJvdG8udHJhbnNwb3NlPWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfdHJhbnNwb3NlKCIrYXJncysiKXsiKwogICAgICBhcmdzLm1hcChmdW5jdGlvbihuLGlkeCkgeyByZXR1cm4gbiArICI9KCIgKyBuICsgIj09PXVuZGVmaW5lZD8iICsgaWR4ICsgIjoiICsgbiArICJ8MCkifSkuam9pbigiOyIpLAogICAgICAidmFyIGE9dGhpcy5zaGFwZSxiPXRoaXMuc3RyaWRlO3JldHVybiBuZXcgIitjbGFzc05hbWUrIih0aGlzLmRhdGEsIit0U2hhcGUuam9pbigiLCIpKyIsIit0U3RyaWRlLmpvaW4oIiwiKSsiLHRoaXMub2Zmc2V0KX0iKTsKCiAgICAvL3ZpZXcucGljaygpOgogICAgY29kZS5wdXNoKCJwcm90by5waWNrPWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfcGljaygiK2FyZ3MrIil7dmFyIGE9W10sYj1bXSxjPXRoaXMub2Zmc2V0Iik7CiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkgewogICAgICBjb2RlLnB1c2goImlmKHR5cGVvZiBpIitpKyI9PT0nbnVtYmVyJyYmaSIraSsiPj0wKXtjPShjK3RoaXMuc3RyaWRlWyIraSsiXSppIitpKyIpfDB9ZWxzZXthLnB1c2godGhpcy5zaGFwZVsiK2krIl0pO2IucHVzaCh0aGlzLnN0cmlkZVsiK2krIl0pfSIpOwogICAgfQogICAgY29kZS5wdXNoKCJ2YXIgY3Rvcj1DVE9SX0xJU1RbYS5sZW5ndGgrMV07cmV0dXJuIGN0b3IodGhpcy5kYXRhLGEsYixjKX0iKTsKCiAgICAvL0FkZCByZXR1cm4gc3RhdGVtZW50CiAgICBjb2RlLnB1c2goInJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfIitjbGFzc05hbWUrIihkYXRhLHNoYXBlLHN0cmlkZSxvZmZzZXQpe3JldHVybiBuZXcgIitjbGFzc05hbWUrIihkYXRhLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gInNoYXBlWyIraSsiXSIKICAgICAgfSkuam9pbigiLCIpKyIsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAic3RyaWRlWyIraSsiXSIKICAgICAgfSkuam9pbigiLCIpKyIsb2Zmc2V0KX0iKTsKCiAgICAvL0NvbXBpbGUgcHJvY2VkdXJlCiAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKCJDVE9SX0xJU1QiLCAiT1JERVIiLCBjb2RlLmpvaW4oIlxuIikpOwogICAgcmV0dXJuIHByb2NlZHVyZShDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXSwgb3JkZXIpCiAgfQoKICBmdW5jdGlvbiBhcnJheURUeXBlKGRhdGEpIHsKICAgIGlmKGlzQnVmZmVyXzEoZGF0YSkpIHsKICAgICAgcmV0dXJuICJidWZmZXIiCiAgICB9CiAgICBpZihoYXNUeXBlZEFycmF5cykgewogICAgICBzd2l0Y2goT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpKSB7CiAgICAgICAgY2FzZSAiW29iamVjdCBGbG9hdDY0QXJyYXldIjoKICAgICAgICAgIHJldHVybiAiZmxvYXQ2NCIKICAgICAgICBjYXNlICJbb2JqZWN0IEZsb2F0MzJBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJmbG9hdDMyIgogICAgICAgIGNhc2UgIltvYmplY3QgSW50OEFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImludDgiCiAgICAgICAgY2FzZSAiW29iamVjdCBJbnQxNkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImludDE2IgogICAgICAgIGNhc2UgIltvYmplY3QgSW50MzJBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJpbnQzMiIKICAgICAgICBjYXNlICJbb2JqZWN0IFVpbnQ4QXJyYXldIjoKICAgICAgICAgIHJldHVybiAidWludDgiCiAgICAgICAgY2FzZSAiW29iamVjdCBVaW50MTZBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJ1aW50MTYiCiAgICAgICAgY2FzZSAiW29iamVjdCBVaW50MzJBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJ1aW50MzIiCiAgICAgICAgY2FzZSAiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJ1aW50OF9jbGFtcGVkIgogICAgICAgIGNhc2UgIltvYmplY3QgQmlnSW50NjRBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJiaWdpbnQ2NCIKICAgICAgICBjYXNlICJbb2JqZWN0IEJpZ1VpbnQ2NEFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImJpZ3VpbnQ2NCIKICAgICAgfQogICAgfQogICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkgewogICAgICByZXR1cm4gImFycmF5IgogICAgfQogICAgcmV0dXJuICJnZW5lcmljIgogIH0KCiAgdmFyIENBQ0hFRF9DT05TVFJVQ1RPUlMgPSB7CiAgICAiZmxvYXQzMiI6W10sCiAgICAiZmxvYXQ2NCI6W10sCiAgICAiaW50OCI6W10sCiAgICAiaW50MTYiOltdLAogICAgImludDMyIjpbXSwKICAgICJ1aW50OCI6W10sCiAgICAidWludDE2IjpbXSwKICAgICJ1aW50MzIiOltdLAogICAgImFycmF5IjpbXSwKICAgICJ1aW50OF9jbGFtcGVkIjpbXSwKICAgICJiaWdpbnQ2NCI6IFtdLAogICAgImJpZ3VpbnQ2NCI6IFtdLAogICAgImJ1ZmZlciI6W10sCiAgICAiZ2VuZXJpYyI6W10KICB9CgogIDsKICBmdW5jdGlvbiB3cmFwcGVkTkRBcnJheUN0b3IoZGF0YSwgc2hhcGUsIHN0cmlkZSwgb2Zmc2V0KSB7CiAgICBpZihkYXRhID09PSB1bmRlZmluZWQpIHsKICAgICAgdmFyIGN0b3IgPSBDQUNIRURfQ09OU1RSVUNUT1JTLmFycmF5WzBdOwogICAgICByZXR1cm4gY3RvcihbXSkKICAgIH0gZWxzZSBpZih0eXBlb2YgZGF0YSA9PT0gIm51bWJlciIpIHsKICAgICAgZGF0YSA9IFtkYXRhXTsKICAgIH0KICAgIGlmKHNoYXBlID09PSB1bmRlZmluZWQpIHsKICAgICAgc2hhcGUgPSBbIGRhdGEubGVuZ3RoIF07CiAgICB9CiAgICB2YXIgZCA9IHNoYXBlLmxlbmd0aDsKICAgIGlmKHN0cmlkZSA9PT0gdW5kZWZpbmVkKSB7CiAgICAgIHN0cmlkZSA9IG5ldyBBcnJheShkKTsKICAgICAgZm9yKHZhciBpPWQtMSwgc3o9MTsgaT49MDsgLS1pKSB7CiAgICAgICAgc3RyaWRlW2ldID0gc3o7CiAgICAgICAgc3ogKj0gc2hhcGVbaV07CiAgICAgIH0KICAgIH0KICAgIGlmKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7CiAgICAgIG9mZnNldCA9IDA7CiAgICAgIGZvcih2YXIgaT0wOyBpPGQ7ICsraSkgewogICAgICAgIGlmKHN0cmlkZVtpXSA8IDApIHsKICAgICAgICAgIG9mZnNldCAtPSAoc2hhcGVbaV0tMSkqc3RyaWRlW2ldOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgdmFyIGR0eXBlID0gYXJyYXlEVHlwZShkYXRhKTsKICAgIHZhciBjdG9yX2xpc3QgPSBDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXTsKICAgIHdoaWxlKGN0b3JfbGlzdC5sZW5ndGggPD0gZCsxKSB7CiAgICAgIGN0b3JfbGlzdC5wdXNoKGNvbXBpbGVDb25zdHJ1Y3RvcihkdHlwZSwgY3Rvcl9saXN0Lmxlbmd0aC0xKSk7CiAgICB9CiAgICB2YXIgY3RvciA9IGN0b3JfbGlzdFtkKzFdOwogICAgcmV0dXJuIGN0b3IoZGF0YSwgc2hhcGUsIHN0cmlkZSwgb2Zmc2V0KQogIH0KCiAgdmFyIG5kYXJyYXkgPSB3cmFwcGVkTkRBcnJheUN0b3I7CgogIGNsYXNzIE1hcnRpbmkgewogICAgY29uc3RydWN0b3IoZ3JpZFNpemUgPSAyNTcpIHsKICAgICAgdGhpcy5ncmlkU2l6ZSA9IGdyaWRTaXplOwogICAgICBjb25zdCB0aWxlU2l6ZSA9IGdyaWRTaXplIC0gMTsKICAgICAgaWYgKHRpbGVTaXplICYgdGlsZVNpemUgLSAxKSB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGdyaWQgc2l6ZSB0byBiZSAyXm4rMSwgZ290ICR7Z3JpZFNpemV9LmApOwogICAgICB0aGlzLm51bVRyaWFuZ2xlcyA9IHRpbGVTaXplICogdGlsZVNpemUgKiAyIC0gMjsKICAgICAgdGhpcy5udW1QYXJlbnRUcmlhbmdsZXMgPSB0aGlzLm51bVRyaWFuZ2xlcyAtIHRpbGVTaXplICogdGlsZVNpemU7CiAgICAgIHRoaXMuaW5kaWNlcyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLmdyaWRTaXplICogdGhpcy5ncmlkU2l6ZSk7IC8vIGNvb3JkaW5hdGVzIGZvciBhbGwgcG9zc2libGUgdHJpYW5nbGVzIGluIGFuIFJUSU4gdGlsZQoKICAgICAgdGhpcy5jb29yZHMgPSBuZXcgVWludDE2QXJyYXkodGhpcy5udW1UcmlhbmdsZXMgKiA0KTsgLy8gZ2V0IHRyaWFuZ2xlIGNvb3JkaW5hdGVzIGZyb20gaXRzIGluZGV4IGluIGFuIGltcGxpY2l0IGJpbmFyeSB0cmVlCgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHsKICAgICAgICBsZXQgaWQgPSBpICsgMjsKICAgICAgICBsZXQgYXggPSAwLAogICAgICAgICAgICBheSA9IDAsCiAgICAgICAgICAgIGJ4ID0gMCwKICAgICAgICAgICAgYnkgPSAwLAogICAgICAgICAgICBjeCA9IDAsCiAgICAgICAgICAgIGN5ID0gMDsKCiAgICAgICAgaWYgKGlkICYgMSkgewogICAgICAgICAgYnggPSBieSA9IGN4ID0gdGlsZVNpemU7IC8vIGJvdHRvbS1sZWZ0IHRyaWFuZ2xlCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIGF4ID0gYXkgPSBjeSA9IHRpbGVTaXplOyAvLyB0b3AtcmlnaHQgdHJpYW5nbGUKICAgICAgICB9CgogICAgICAgIHdoaWxlICgoaWQgPj49IDEpID4gMSkgewogICAgICAgICAgY29uc3QgbXggPSBheCArIGJ4ID4+IDE7CiAgICAgICAgICBjb25zdCBteSA9IGF5ICsgYnkgPj4gMTsKCiAgICAgICAgICBpZiAoaWQgJiAxKSB7CiAgICAgICAgICAgIC8vIGxlZnQgaGFsZgogICAgICAgICAgICBieCA9IGF4OwogICAgICAgICAgICBieSA9IGF5OwogICAgICAgICAgICBheCA9IGN4OwogICAgICAgICAgICBheSA9IGN5OwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gcmlnaHQgaGFsZgogICAgICAgICAgICBheCA9IGJ4OwogICAgICAgICAgICBheSA9IGJ5OwogICAgICAgICAgICBieCA9IGN4OwogICAgICAgICAgICBieSA9IGN5OwogICAgICAgICAgfQoKICAgICAgICAgIGN4ID0gbXg7CiAgICAgICAgICBjeSA9IG15OwogICAgICAgIH0KCiAgICAgICAgY29uc3QgayA9IGkgKiA0OwogICAgICAgIHRoaXMuY29vcmRzW2sgKyAwXSA9IGF4OwogICAgICAgIHRoaXMuY29vcmRzW2sgKyAxXSA9IGF5OwogICAgICAgIHRoaXMuY29vcmRzW2sgKyAyXSA9IGJ4OwogICAgICAgIHRoaXMuY29vcmRzW2sgKyAzXSA9IGJ5OwogICAgICB9CiAgICB9CgogICAgY3JlYXRlVGlsZSh0ZXJyYWluKSB7CiAgICAgIHJldHVybiBuZXcgVGlsZSh0ZXJyYWluLCB0aGlzKTsKICAgIH0KCiAgfQoKICBjbGFzcyBUaWxlIHsKICAgIGNvbnN0cnVjdG9yKHRlcnJhaW4sIG1hcnRpbmkpIHsKICAgICAgY29uc3Qgc2l6ZSA9IG1hcnRpbmkuZ3JpZFNpemU7CiAgICAgIGlmICh0ZXJyYWluLmxlbmd0aCAhPT0gc2l6ZSAqIHNpemUpIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgdGVycmFpbiBkYXRhIG9mIGxlbmd0aCAke3NpemUgKiBzaXplfSAoJHtzaXplfSB4ICR7c2l6ZX0pLCBnb3QgJHt0ZXJyYWluLmxlbmd0aH0uYCk7CiAgICAgIHRoaXMudGVycmFpbiA9IHRlcnJhaW47CiAgICAgIHRoaXMubWFydGluaSA9IG1hcnRpbmk7CiAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEZsb2F0MzJBcnJheSh0ZXJyYWluLmxlbmd0aCk7CiAgICAgIHRoaXMudXBkYXRlKCk7CiAgICB9CgogICAgdXBkYXRlKCkgewogICAgICBjb25zdCB7CiAgICAgICAgbnVtVHJpYW5nbGVzLAogICAgICAgIG51bVBhcmVudFRyaWFuZ2xlcywKICAgICAgICBjb29yZHMsCiAgICAgICAgZ3JpZFNpemU6IHNpemUKICAgICAgfSA9IHRoaXMubWFydGluaTsKICAgICAgY29uc3QgewogICAgICAgIHRlcnJhaW4sCiAgICAgICAgZXJyb3JzCiAgICAgIH0gPSB0aGlzOyAvLyBpdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIHRyaWFuZ2xlcywgc3RhcnRpbmcgZnJvbSB0aGUgc21hbGxlc3QgbGV2ZWwKCiAgICAgIGZvciAobGV0IGkgPSBudW1UcmlhbmdsZXMgLSAxOyBpID49IDA7IGktLSkgewogICAgICAgIGNvbnN0IGsgPSBpICogNDsKICAgICAgICBjb25zdCBheCA9IGNvb3Jkc1trICsgMF07CiAgICAgICAgY29uc3QgYXkgPSBjb29yZHNbayArIDFdOwogICAgICAgIGNvbnN0IGJ4ID0gY29vcmRzW2sgKyAyXTsKICAgICAgICBjb25zdCBieSA9IGNvb3Jkc1trICsgM107CiAgICAgICAgY29uc3QgbXggPSBheCArIGJ4ID4+IDE7CiAgICAgICAgY29uc3QgbXkgPSBheSArIGJ5ID4+IDE7CiAgICAgICAgY29uc3QgY3ggPSBteCArIG15IC0gYXk7CiAgICAgICAgY29uc3QgY3kgPSBteSArIGF4IC0gbXg7IC8vIGNhbGN1bGF0ZSBlcnJvciBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsb25nIGVkZ2Ugb2YgdGhlIHRyaWFuZ2xlCgogICAgICAgIGNvbnN0IGludGVycG9sYXRlZEhlaWdodCA9ICh0ZXJyYWluW2F5ICogc2l6ZSArIGF4XSArIHRlcnJhaW5bYnkgKiBzaXplICsgYnhdKSAvIDI7CiAgICAgICAgY29uc3QgbWlkZGxlSW5kZXggPSBteSAqIHNpemUgKyBteDsKICAgICAgICBjb25zdCBtaWRkbGVFcnJvciA9IE1hdGguYWJzKGludGVycG9sYXRlZEhlaWdodCAtIHRlcnJhaW5bbWlkZGxlSW5kZXhdKTsKICAgICAgICBlcnJvcnNbbWlkZGxlSW5kZXhdID0gTWF0aC5tYXgoZXJyb3JzW21pZGRsZUluZGV4XSwgbWlkZGxlRXJyb3IpOwoKICAgICAgICBpZiAoaSA8IG51bVBhcmVudFRyaWFuZ2xlcykgewogICAgICAgICAgLy8gYmlnZ2VyIHRyaWFuZ2xlczsgYWNjdW11bGF0ZSBlcnJvciB3aXRoIGNoaWxkcmVuCiAgICAgICAgICBjb25zdCBsZWZ0Q2hpbGRJbmRleCA9IChheSArIGN5ID4+IDEpICogc2l6ZSArIChheCArIGN4ID4+IDEpOwogICAgICAgICAgY29uc3QgcmlnaHRDaGlsZEluZGV4ID0gKGJ5ICsgY3kgPj4gMSkgKiBzaXplICsgKGJ4ICsgY3ggPj4gMSk7CiAgICAgICAgICBlcnJvcnNbbWlkZGxlSW5kZXhdID0gTWF0aC5tYXgoZXJyb3JzW21pZGRsZUluZGV4XSwgZXJyb3JzW2xlZnRDaGlsZEluZGV4XSwgZXJyb3JzW3JpZ2h0Q2hpbGRJbmRleF0pOwogICAgICAgIH0KICAgICAgfQogICAgfQoKICAgIGdldE1lc2gobWF4RXJyb3IgPSAwLCBtYXhMZW5ndGggPSBudWxsKSB7CiAgICAgIGNvbnN0IHsKICAgICAgICBncmlkU2l6ZTogc2l6ZSwKICAgICAgICBpbmRpY2VzCiAgICAgIH0gPSB0aGlzLm1hcnRpbmk7CiAgICAgIGNvbnN0IHsKICAgICAgICBlcnJvcnMKICAgICAgfSA9IHRoaXM7CiAgICAgIGxldCBudW1WZXJ0aWNlcyA9IDA7CiAgICAgIGxldCBudW1UcmlhbmdsZXMgPSAwOwogICAgICBjb25zdCBtYXggPSBzaXplIC0gMTsgLy8gVGhlIG1heExlbmd0aCBwYXJhbWV0ZXIgd2lsbCBjYXVzZSB0cmlhbmdsZXMgdG8gYmUgZ2VuZXJhdGVkIHVudGlsIHRoZSBsZWdzIGFyZSBiZWxvdyB0aGlzIGxlbmd0aAogICAgICAvLyBJdCBpcyBtZWFudCB0byBzdXBwb3J0IGNhc2VzIHdoZXJlIGEgY2VydGFpbiBtZXNoIGRlbnNpdHkgaXMgcmVxdWlyZWQgdG8gZG8gc3BoZXJpY2FsIG1hdGggb24gZGlnaXRhbCBnbG9iZXMKCiAgICAgIGNvbnN0IG1heFNjYWxlID0gbWF4TGVuZ3RoIHx8IHNpemU7IC8vIHVzZSBhbiBpbmRleCBncmlkIHRvIGtlZXAgdHJhY2sgb2YgdmVydGljZXMgdGhhdCB3ZXJlIGFscmVhZHkgdXNlZCB0byBhdm9pZCBkdXBsaWNhdGlvbgoKICAgICAgaW5kaWNlcy5maWxsKDApOyAvLyByZXRyaWV2ZSBtZXNoIGluIHR3byBzdGFnZXMgdGhhdCBib3RoIHRyYXZlcnNlIHRoZSBlcnJvciBtYXA6CiAgICAgIC8vIC0gY291bnRFbGVtZW50czogZmluZCB1c2VkIHZlcnRpY2VzIChhbmQgYXNzaWduIGVhY2ggYW4gaW5kZXgpLCBhbmQgY291bnQgdHJpYW5nbGVzIChmb3IgbWluaW11bSBhbGxvY2F0aW9uKQogICAgICAvLyAtIHByb2Nlc3NUcmlhbmdsZTogZmlsbCB0aGUgYWxsb2NhdGVkIHZlcnRpY2VzICYgdHJpYW5nbGVzIHR5cGVkIGFycmF5cwoKICAgICAgZnVuY3Rpb24gY291bnRFbGVtZW50cyhheCwgYXksIGJ4LCBieSwgY3gsIGN5KSB7CiAgICAgICAgY29uc3QgbXggPSBheCArIGJ4ID4+IDE7CiAgICAgICAgY29uc3QgbXkgPSBheSArIGJ5ID4+IDE7CiAgICAgICAgY29uc3QgbGVnTGVuZ3RoID0gTWF0aC5hYnMoYXggLSBjeCkgKyBNYXRoLmFicyhheSAtIGN5KTsKCiAgICAgICAgaWYgKGxlZ0xlbmd0aCA+IDEgJiYgZXJyb3JzW215ICogc2l6ZSArIG14XSA+IG1heEVycm9yIHx8IGxlZ0xlbmd0aCA+IG1heFNjYWxlKSB7CiAgICAgICAgICBjb3VudEVsZW1lbnRzKGN4LCBjeSwgYXgsIGF5LCBteCwgbXkpOwogICAgICAgICAgY291bnRFbGVtZW50cyhieCwgYnksIGN4LCBjeSwgbXgsIG15KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgaW5kaWNlc1theSAqIHNpemUgKyBheF0gPSBpbmRpY2VzW2F5ICogc2l6ZSArIGF4XSB8fCArK251bVZlcnRpY2VzOwogICAgICAgICAgaW5kaWNlc1tieSAqIHNpemUgKyBieF0gPSBpbmRpY2VzW2J5ICogc2l6ZSArIGJ4XSB8fCArK251bVZlcnRpY2VzOwogICAgICAgICAgaW5kaWNlc1tjeSAqIHNpemUgKyBjeF0gPSBpbmRpY2VzW2N5ICogc2l6ZSArIGN4XSB8fCArK251bVZlcnRpY2VzOwogICAgICAgICAgbnVtVHJpYW5nbGVzKys7CiAgICAgICAgfQogICAgICB9CgogICAgICBjb3VudEVsZW1lbnRzKDAsIDAsIG1heCwgbWF4LCBtYXgsIDApOwogICAgICBjb3VudEVsZW1lbnRzKG1heCwgbWF4LCAwLCAwLCAwLCBtYXgpOwogICAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBVaW50MTZBcnJheShudW1WZXJ0aWNlcyAqIDIpOwogICAgICBjb25zdCB0cmlhbmdsZXMgPSBuZXcgVWludDMyQXJyYXkobnVtVHJpYW5nbGVzICogMyk7CiAgICAgIGxldCB0cmlJbmRleCA9IDA7CgogICAgICBmdW5jdGlvbiBwcm9jZXNzVHJpYW5nbGUoYXgsIGF5LCBieCwgYnksIGN4LCBjeSkgewogICAgICAgIGNvbnN0IG14ID0gYXggKyBieCA+PiAxOwogICAgICAgIGNvbnN0IG15ID0gYXkgKyBieSA+PiAxOwogICAgICAgIGNvbnN0IGxlZ0xlbmd0aCA9IE1hdGguYWJzKGF4IC0gY3gpICsgTWF0aC5hYnMoYXkgLSBjeSk7CgogICAgICAgIGlmIChsZWdMZW5ndGggPiAxICYmIGVycm9yc1tteSAqIHNpemUgKyBteF0gPiBtYXhFcnJvciB8fCBsZWdMZW5ndGggPiBtYXhTY2FsZSkgewogICAgICAgICAgLy8gdHJpYW5nbGUgZG9lc24ndCBhcHByb3hpbWF0ZSB0aGUgc3VyZmFjZSB3ZWxsIGVub3VnaDsgZHJpbGwgZG93biBmdXJ0aGVyCiAgICAgICAgICBwcm9jZXNzVHJpYW5nbGUoY3gsIGN5LCBheCwgYXksIG14LCBteSk7CiAgICAgICAgICBwcm9jZXNzVHJpYW5nbGUoYngsIGJ5LCBjeCwgY3ksIG14LCBteSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIC8vIGFkZCBhIHRyaWFuZ2xlCiAgICAgICAgICBjb25zdCBhID0gaW5kaWNlc1theSAqIHNpemUgKyBheF0gLSAxOwogICAgICAgICAgY29uc3QgYiA9IGluZGljZXNbYnkgKiBzaXplICsgYnhdIC0gMTsKICAgICAgICAgIGNvbnN0IGMgPSBpbmRpY2VzW2N5ICogc2l6ZSArIGN4XSAtIDE7CiAgICAgICAgICB2ZXJ0aWNlc1syICogYV0gPSBheDsKICAgICAgICAgIHZlcnRpY2VzWzIgKiBhICsgMV0gPSBheTsKICAgICAgICAgIHZlcnRpY2VzWzIgKiBiXSA9IGJ4OwogICAgICAgICAgdmVydGljZXNbMiAqIGIgKyAxXSA9IGJ5OwogICAgICAgICAgdmVydGljZXNbMiAqIGNdID0gY3g7CiAgICAgICAgICB2ZXJ0aWNlc1syICogYyArIDFdID0gY3k7CiAgICAgICAgICB0cmlhbmdsZXNbdHJpSW5kZXgrK10gPSBhOwogICAgICAgICAgdHJpYW5nbGVzW3RyaUluZGV4KytdID0gYjsKICAgICAgICAgIHRyaWFuZ2xlc1t0cmlJbmRleCsrXSA9IGM7CiAgICAgICAgfQogICAgICB9CgogICAgICBwcm9jZXNzVHJpYW5nbGUoMCwgMCwgbWF4LCBtYXgsIG1heCwgMCk7CiAgICAgIHByb2Nlc3NUcmlhbmdsZShtYXgsIG1heCwgMCwgMCwgMCwgbWF4KTsKICAgICAgcmV0dXJuIHsKICAgICAgICB2ZXJ0aWNlcywKICAgICAgICB0cmlhbmdsZXMKICAgICAgfTsKICAgIH0KCiAgfQoKICBmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbikgewogICAgdmFyIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfTsKICAJcmV0dXJuIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0czsKICB9CgogIC8qKgogICAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLgogICAqCiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlCiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLgogICAqLwoKICBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7CiAgdmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHsKCiAgICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlOwogICAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5OwogICAgdmFyIHVuZGVmaW5lZCQxOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC4KICAgIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiA/IFN5bWJvbCA6IHt9OwogICAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCAiQEBpdGVyYXRvciI7CiAgICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCAiQEBhc3luY0l0ZXJhdG9yIjsKICAgIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgIkBAdG9TdHJpbmdUYWciOwoKICAgIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHsKICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7CiAgICAgICAgdmFsdWU6IHZhbHVlLAogICAgICAgIGVudW1lcmFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLAogICAgICAgIHdyaXRhYmxlOiB0cnVlCiAgICAgIH0pOwogICAgICByZXR1cm4gb2JqW2tleV07CiAgICB9CiAgICB0cnkgewogICAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLgogICAgICBkZWZpbmUoe30sICIiKTsKICAgIH0gY2F0Y2ggKGVycikgewogICAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHsKICAgICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTsKICAgICAgfTsKICAgIH0KCiAgICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7CiAgICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLgogICAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjsKICAgICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTsKICAgICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7CgogICAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsCiAgICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy4KICAgICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpOwoKICAgICAgcmV0dXJuIGdlbmVyYXRvcjsKICAgIH0KICAgIGV4cG9ydHMud3JhcCA9IHdyYXA7CgogICAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uCiAgICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGQKICAgIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZQogICAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZQogICAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZAogICAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZwogICAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWUKICAgIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZQogICAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaAogICAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLgogICAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7CiAgICAgIHRyeSB7CiAgICAgICAgcmV0dXJuIHsgdHlwZTogIm5vcm1hbCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTsKICAgICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgICAgcmV0dXJuIHsgdHlwZTogInRocm93IiwgYXJnOiBlcnIgfTsKICAgICAgfQogICAgfQoKICAgIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gInN1c3BlbmRlZFN0YXJ0IjsKICAgIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gInN1c3BlbmRlZFlpZWxkIjsKICAgIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9ICJleGVjdXRpbmciOwogICAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gImNvbXBsZXRlZCI7CgogICAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhcwogICAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LgogICAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTsKCiAgICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmQKICAgIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvcgogICAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXIKICAgIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuCiAgICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fQogICAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fQogICAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fQoKICAgIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXQKICAgIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuCiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTsKICAgIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9KTsKCiAgICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7CiAgICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7CiAgICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYKICAgICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYKICAgICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7CiAgICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkCiAgICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC4KICAgICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTsKICAgIH0KCiAgICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPQogICAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7CiAgICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTsKICAgIGRlZmluZShHcCwgImNvbnN0cnVjdG9yIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpOwogICAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCAiY29uc3RydWN0b3IiLCBHZW5lcmF0b3JGdW5jdGlvbik7CiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZSgKICAgICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsCiAgICAgIHRvU3RyaW5nVGFnU3ltYm9sLAogICAgICAiR2VuZXJhdG9yRnVuY3Rpb24iCiAgICApOwoKICAgIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlCiAgICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLgogICAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkgewogICAgICBbIm5leHQiLCAidGhyb3ciLCAicmV0dXJuIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHsKICAgICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykgewogICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7CiAgICAgICAgfSk7CiAgICAgIH0pOwogICAgfQoKICAgIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikgewogICAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09ICJmdW5jdGlvbiIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yOwogICAgICByZXR1cm4gY3RvcgogICAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwKICAgICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW4KICAgICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS4KICAgICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09ICJHZW5lcmF0b3JGdW5jdGlvbiIKICAgICAgICA6IGZhbHNlOwogICAgfTsKCiAgICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHsKICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikgewogICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTsKICAgICAgfSBlbHNlIHsKICAgICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7CiAgICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsICJHZW5lcmF0b3JGdW5jdGlvbiIpOwogICAgICB9CiAgICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTsKICAgICAgcmV0dXJuIGdlbkZ1bjsKICAgIH07CgogICAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvCiAgICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdAogICAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCAiX19hd2FpdCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXMKICAgIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuCiAgICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7CiAgICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9OwogICAgfTsKCiAgICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHsKICAgICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHsKICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTsKICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7CiAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7CiAgICAgICAgICBpZiAodmFsdWUgJiYKICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICJvYmplY3QiICYmCiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsICJfX2F3YWl0IikpIHsKICAgICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkgewogICAgICAgICAgICAgIGludm9rZSgibmV4dCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHsKICAgICAgICAgICAgICBpbnZva2UoInRocm93IiwgZXJyLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgICB9KTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHsKICAgICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXMKICAgICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlCiAgICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLgogICAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7CiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTsKICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7CiAgICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrCiAgICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS4KICAgICAgICAgICAgcmV0dXJuIGludm9rZSgidGhyb3ciLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdmFyIHByZXZpb3VzUHJvbWlzZTsKCiAgICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHsKICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHsKICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9CiAgICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsCiAgICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSwKICAgICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWYKICAgICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvCiAgICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSwKICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvCiAgICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5CiAgICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0cwogICAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHkKICAgICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlCiAgICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseQogICAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLgogICAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oCiAgICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLAogICAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlcgogICAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuCiAgICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnCiAgICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTsKICAgICAgfQoKICAgICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCwKICAgICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuCiAgICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7CiAgICB9CgogICAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTsKICAgIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgewogICAgICByZXR1cm4gdGhpczsKICAgIH0pOwogICAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjsKCiAgICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mCiAgICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2YKICAgIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLgogICAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkgewogICAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlOwoKICAgICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcigKICAgICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwKICAgICAgICBQcm9taXNlSW1wbAogICAgICApOwoKICAgICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKQogICAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuCiAgICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkgewogICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTsKICAgICAgICAgIH0pOwogICAgfTsKCiAgICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHsKICAgICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDsKCiAgICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHsKICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7CiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmciKTsKICAgICAgICB9CgogICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHsKICAgICAgICAgIGlmIChtZXRob2QgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgICAgdGhyb3cgYXJnOwogICAgICAgICAgfQoKICAgICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6CiAgICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lCiAgICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpOwogICAgICAgIH0KCiAgICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7CiAgICAgICAgY29udGV4dC5hcmcgPSBhcmc7CgogICAgICAgIHdoaWxlICh0cnVlKSB7CiAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlOwogICAgICAgICAgaWYgKGRlbGVnYXRlKSB7CiAgICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpOwogICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHsKICAgICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlOwogICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDsKICAgICAgICAgICAgfQogICAgICAgICAgfQoKICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gIm5leHQiKSB7CiAgICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwncwogICAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLgogICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7CgogICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gInRocm93IikgewogICAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHsKICAgICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkOwogICAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnOwogICAgICAgICAgICB9CgogICAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTsKCiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSAicmV0dXJuIikgewogICAgICAgICAgICBjb250ZXh0LmFicnVwdCgicmV0dXJuIiwgY29udGV4dC5hcmcpOwogICAgICAgICAgfQoKICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7CgogICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpOwogICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAibm9ybWFsIikgewogICAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09CiAgICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi4KICAgICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmUKICAgICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkCiAgICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkOwoKICAgICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHsKICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgcmV0dXJuIHsKICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZywKICAgICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmUKICAgICAgICAgICAgfTsKCiAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAidGhyb3ciKSB7CiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7CiAgICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGUKICAgICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS4KICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSAidGhyb3ciOwogICAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9OwogICAgfQoKICAgIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZQogICAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZQogICAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsCiAgICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC4KICAgIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHsKICAgICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTsKICAgICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkJDEpIHsKICAgICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3cKICAgICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLgogICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsOwoKICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgIC8vIE5vdGU6IFsicmV0dXJuIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LgogICAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yWyJyZXR1cm4iXSkgewogICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhCiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC4KICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSAicmV0dXJuIjsKICAgICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTsKICAgICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7CgogICAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbQogICAgICAgICAgICAgIC8vICJyZXR1cm4iIHRvICJ0aHJvdyIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuCiAgICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KCiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyI7CiAgICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kIik7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgfQoKICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTsKCiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgIGNvbnRleHQubWV0aG9kID0gInRocm93IjsKICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7CiAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7CiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgIH0KCiAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZzsKCiAgICAgIGlmICghIGluZm8pIHsKICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyI7CiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdCIpOwogICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsOwogICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICB9CgogICAgICBpZiAoaW5mby5kb25lKSB7CiAgICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnkKICAgICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLgogICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlOwoKICAgICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuCiAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYzsKCiAgICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzICJ0aHJvdyIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZQogICAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWYKICAgICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgIm5leHQiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW4KICAgICAgICAvLyAiY29uc3VtZWQiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzCiAgICAgICAgLy8gInJldHVybiIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlCiAgICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLgogICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gInJldHVybiIpIHsKICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gIm5leHQiOwogICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTsKICAgICAgICB9CgogICAgICB9IGVsc2UgewogICAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC4KICAgICAgICByZXR1cm4gaW5mbzsKICAgICAgfQoKICAgICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGgKICAgICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci4KICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7CiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgfQoKICAgIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlCiAgICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuCiAgICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApOwoKICAgIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsICJHZW5lcmF0b3IiKTsKCiAgICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZQogICAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGUKICAgIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yCiAgICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi4KICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLgogICAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSk7CgogICAgZGVmaW5lKEdwLCAidG9TdHJpbmciLCBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICJbb2JqZWN0IEdlbmVyYXRvcl0iOwogICAgfSk7CgogICAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHsKICAgICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTsKCiAgICAgIGlmICgxIGluIGxvY3MpIHsKICAgICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07CiAgICAgIH0KCiAgICAgIGlmICgyIGluIGxvY3MpIHsKICAgICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTsKICAgICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107CiAgICAgIH0KCiAgICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTsKICAgIH0KCiAgICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7CiAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9OwogICAgICByZWNvcmQudHlwZSA9ICJub3JtYWwiOwogICAgICBkZWxldGUgcmVjb3JkLmFyZzsKICAgICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDsKICAgIH0KCiAgICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7CiAgICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaAogICAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tCiAgICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC4KICAgICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiAicm9vdCIgfV07CiAgICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTsKICAgICAgdGhpcy5yZXNldCh0cnVlKTsKICAgIH0KCiAgICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHsKICAgICAgdmFyIGtleXMgPSBbXTsKICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkgewogICAgICAgIGtleXMucHVzaChrZXkpOwogICAgICB9CiAgICAgIGtleXMucmV2ZXJzZSgpOwoKICAgICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXAKICAgICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi4KICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7CiAgICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7CiAgICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTsKICAgICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7CiAgICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7CiAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlOwogICAgICAgICAgICByZXR1cm4gbmV4dDsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZQogICAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzCiAgICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uCiAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTsKICAgICAgICByZXR1cm4gbmV4dDsKICAgICAgfTsKICAgIH07CgogICAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7CiAgICAgIGlmIChpdGVyYWJsZSkgewogICAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTsKICAgICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHsKICAgICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTsKICAgICAgICB9CgogICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gImZ1bmN0aW9uIikgewogICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlOwogICAgICAgIH0KCiAgICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7CiAgICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHsKICAgICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkgewogICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHsKICAgICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTsKICAgICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlOwogICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CgogICAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkJDE7CiAgICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7CgogICAgICAgICAgICByZXR1cm4gbmV4dDsKICAgICAgICAgIH07CgogICAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7CiAgICAgICAgfQogICAgICB9CgogICAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuCiAgICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTsKICAgIH0KICAgIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzOwoKICAgIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7CiAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQkMSwgZG9uZTogdHJ1ZSB9OwogICAgfQoKICAgIENvbnRleHQucHJvdG90eXBlID0gewogICAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCwKCiAgICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7CiAgICAgICAgdGhpcy5wcmV2ID0gMDsKICAgICAgICB0aGlzLm5leHQgPSAwOwogICAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzCiAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi4KICAgICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkJDE7CiAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7CiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7CgogICAgICAgIHRoaXMubWV0aG9kID0gIm5leHQiOwogICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkJDE7CgogICAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpOwoKICAgICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHsKICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykgewogICAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOgogICAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09ICJ0IiAmJgogICAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYKICAgICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHsKICAgICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkJDE7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0sCgogICAgICBzdG9wOiBmdW5jdGlvbigpIHsKICAgICAgICB0aGlzLmRvbmUgPSB0cnVlOwoKICAgICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdOwogICAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247CiAgICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy5ydmFsOwogICAgICB9LAoKICAgICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikgewogICAgICAgIGlmICh0aGlzLmRvbmUpIHsKICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjsKICAgICAgICB9CgogICAgICAgIHZhciBjb250ZXh0ID0gdGhpczsKICAgICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHsKICAgICAgICAgIHJlY29yZC50eXBlID0gInRocm93IjsKICAgICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247CiAgICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7CgogICAgICAgICAgaWYgKGNhdWdodCkgewogICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLAogICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LgogICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJuZXh0IjsKICAgICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXR1cm4gISEgY2F1Z2h0OwogICAgICAgIH0KCiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247CgogICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gInJvb3QiKSB7CiAgICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlCiAgICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0bwogICAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLgogICAgICAgICAgICByZXR1cm4gaGFuZGxlKCJlbmQiKTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikgewogICAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgImNhdGNoTG9jIik7CiAgICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksICJmaW5hbGx5TG9jIik7CgogICAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkgewogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgewogICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7CiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHsKICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHsKICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkgewogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseSIpOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9LAoKICAgICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHsKICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7CiAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07CiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJgogICAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCAiZmluYWxseUxvYyIpICYmCiAgICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgewogICAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJgogICAgICAgICAgICAodHlwZSA9PT0gImJyZWFrIiB8fAogICAgICAgICAgICAgdHlwZSA9PT0gImNvbnRpbnVlIikgJiYKICAgICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYKICAgICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7CiAgICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhCiAgICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suCiAgICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsOwogICAgICAgIH0KCiAgICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307CiAgICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlOwogICAgICAgIHJlY29yZC5hcmcgPSBhcmc7CgogICAgICAgIGlmIChmaW5hbGx5RW50cnkpIHsKICAgICAgICAgIHRoaXMubWV0aG9kID0gIm5leHQiOwogICAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7CiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgICB9CgogICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7CiAgICAgIH0sCgogICAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykgewogICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgICAgdGhyb3cgcmVjb3JkLmFyZzsKICAgICAgICB9CgogICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gImJyZWFrIiB8fAogICAgICAgICAgICByZWNvcmQudHlwZSA9PT0gImNvbnRpbnVlIikgewogICAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZzsKICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAicmV0dXJuIikgewogICAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnOwogICAgICAgICAgdGhpcy5tZXRob2QgPSAicmV0dXJuIjsKICAgICAgICAgIHRoaXMubmV4dCA9ICJlbmQiOwogICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICJub3JtYWwiICYmIGFmdGVyTG9jKSB7CiAgICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYzsKICAgICAgICB9CgogICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICB9LAoKICAgICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHsKICAgICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7CiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpOwogICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0sCgogICAgICAiY2F0Y2giOiBmdW5jdGlvbih0cnlMb2MpIHsKICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7CiAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07CiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHsKICAgICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247CiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnOwogICAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB0aHJvd247CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb24KICAgICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suCiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHQiKTsKICAgICAgfSwKCiAgICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7CiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHsKICAgICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLAogICAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSwKICAgICAgICAgIG5leHRMb2M6IG5leHRMb2MKICAgICAgICB9OwoKICAgICAgICBpZiAodGhpcy5tZXRob2QgPT09ICJuZXh0IikgewogICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3QKICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS4KICAgICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkJDE7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgfQogICAgfTsKCiAgICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlCiAgICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGUKICAgIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZQogICAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC4KICAgIHJldHVybiBleHBvcnRzOwoKICB9KAogICAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHMKICAgIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5CiAgICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplCiAgICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLgogICAgbW9kdWxlLmV4cG9ydHMgCiAgKSk7CgogIHRyeSB7CiAgICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lOwogIH0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7CiAgICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZQogICAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0CiAgICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzCiAgICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlCiAgICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWwKICAgIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZQogICAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWYKICAgIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhCiAgICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2UKICAgIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLgogICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAib2JqZWN0IikgewogICAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7CiAgICB9IGVsc2UgewogICAgICBGdW5jdGlvbigiciIsICJyZWdlbmVyYXRvclJ1bnRpbWUgPSByIikocnVudGltZSk7CiAgICB9CiAgfQogIH0pOwoKICAvKioNCiAgICogRnVuY3Rpb24gdXNlZCB0byBjb252ZXJ0IFJHQkEgcGFja2VkIGRhdGEgaW50byBmbG9hdGluZy1wb2ludCB2YWx1ZS4NCiAgICogDQogICAqIFNpbmNlIHRoaXMgb3BlcmF0ZXMgYWNyb3NzIFdlYiBXb3JrZXIgYm91bmRhcmllcywgaXQgbXVzdCBvbmx5IHV0aWxpc2UgdGhlIGdpdmVuIHBhcmFtZXRlciBsaXN0Lg0KICAgKiBFeHRlcm5hbCByZWZlcmVuY2VzIG5vdCBzdXBwb3J0ZWQuDQogICAqIA0KICAgKiBTdXBwb3J0ZWQgZnVuY3Rpb24gc3ludGF4Og0KICAgKiAgIDEpIChyLCBnLCBiLCBhKSA9PiAwLjANCiAgICogICAyKSAociwgZywgYikgPT4gew0KICAgKiAgICAgICAgICByZXR1cm4gMC4wOw0KICAgKiAgICAgIH0NCiAgICogICAzKSBmdW5jdGlvbiBmKHIsIGcsIGIsIGEpIHsNCiAgICogICAgICAgICAgcmV0dXJuIDAuMDsNCiAgICogICAgICB9DQogICAqLwoKICAvKioNCiAgICogUmVnZXggc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiBzeW50YXg6DQogICAqIDEpIGEgPT4gYSAqIDINCiAgICogMikgYSA9PiB7DQogICAqICAgICAgICBjb25zdCB4ID0gYSAqIDI7DQogICAqICAgICAgICByZXR1cm4geDsNCiAgICogICAgfQ0KICAgKiAzKSAoYSwgYikgPT4gYSArIGINCiAgICogNCkgZnVuY3Rpb24gZihhKSB7DQogICAqICAgICAgICByZXR1cm4gYSAqIDI7DQogICAqICAgIH0gDQogICAqLwogIHZhciBmdW5jdGlvblBhcnNlciA9IC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvXig/Oig/OmZ1bmN0aW9uW1x0LVxyIFx4QTBcdTE2ODBcdTIwMDAtXHUyMDBBXHUyMDI4XHUyMDI5XHUyMDJGXHUyMDVGXHUzMDAwXHVGRUZGXStbMC05QS1aX2Etel0rW1x0LVxyIFx4QTBcdTE2ODBcdTIwMDAtXHUyMDBBXHUyMDI4XHUyMDI5XHUyMDJGXHUyMDVGXHUzMDAwXHVGRUZGXSopP1woPygoPzpbMC05QS1aX2Etel0rW1x0LVxyIFx4QTBcdTE2ODBcdTIwMDAtXHUyMDBBXHUyMDI4XHUyMDI5XHUyMDJGXHUyMDVGXHUzMDAwXHVGRUZGXSosP1tcdC1cciBceEEwXHUxNjgwXHUyMDAwLVx1MjAwQVx1MjAyOFx1MjAyOVx1MjAyRlx1MjA1Rlx1MzAwMFx1RkVGRl0qKSopXCk/W1x0LVxyIFx4QTBcdTE2ODBcdTIwMDAtXHUyMDBBXHUyMDI4XHUyMDI5XHUyMDJGXHUyMDVGXHUzMDAwXHVGRUZGXSooPzo9Pik/W1x0LVxyIFx4QTBcdTE2ODBcdTIwMDAtXHUyMDBBXHUyMDI4XHUyMDI5XHUyMDJGXHUyMDVGXHUzMDAwXHVGRUZGXSpcez8oKD86LnxbXHQtXHIgXHhBMFx1MTY4MFx1MjAwMC1cdTIwMEFcdTIwMjhcdTIwMjlcdTIwMkZcdTIwNUZcdTMwMDBcdUZFRkZdKSs/KVx9PykkL2dpLCB7CiAgICBwYXJhbXM6IDEsCiAgICBib2R5OiAyCiAgfSk7CiAgLyoqIE1hcGJveCBUZXJyYWluLVJHQiBkZWZhdWx0IGRlY29kZSBmdW5jdGlvbg0KICAgKiAgKHIgKiAyNTYgKiAyNTYpIC8gMTAgKyAoZyAqIDI1NikgLyAxMCArIGIgLyAxMCAtIDEwMDAwDQogICAqLwoKCiAgdmFyIGRlZmF1bHREZWNvZGVSZ2IgPSBmdW5jdGlvbiBkZWZhdWx0RGVjb2RlUmdiKHIsIGcsIGIsIGEpIHsKICAgIHJldHVybiByICogNjU1My42ICsgZyAqIDI1LjYgKyBiICogMC4xIC0gMTAwMDA7CiAgfTsKICAvKioNCiAgICogQHBhcmFtIGZuIERlY29kZVJnYkZ1bmN0aW9uIGNhbGxhYmxlIG9yIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIERlY29kZVJnYkZ1bmN0aW9uLg0KICAgKiBAcmV0dXJucyBBIGNvbmNyZXRlIERlY29kZVJnYkZ1bmN0aW9uIGNhbGxhYmxlLg0KICAgKi8KCgogIGZ1bmN0aW9uIGdldERlY29kZVJnYkZ1bmN0aW9uKGZuLCBjYWNoZSkgewogICAgaWYgKCFmbikgcmV0dXJuIGRlZmF1bHREZWNvZGVSZ2I7CgogICAgaWYgKHR5cGVvZiBmbiA9PT0gJ3N0cmluZycpIHsKICAgICAgaWYgKGNhY2hlICE9PSBudWxsICYmIGNhY2hlICE9PSB2b2lkIDAgJiYgY2FjaGVbZm5dKSByZXR1cm4gY2FjaGVbZm5dOwoKICAgICAgdHJ5IHsKICAgICAgICAvLyBwYXJzZSBmdW5jdGlvbiBzdHJpbmcKICAgICAgICB2YXIgX2Z1bmN0aW9uUGFyc2VyJGV4ZWMgPSBmdW5jdGlvblBhcnNlci5leGVjKGZuLnRyaW0oKSksCiAgICAgICAgICAgIF9mdW5jdGlvblBhcnNlciRleGVjJCA9IF9mdW5jdGlvblBhcnNlciRleGVjLmdyb3VwcywKICAgICAgICAgICAgcGFyYW1zID0gX2Z1bmN0aW9uUGFyc2VyJGV4ZWMkLnBhcmFtcywKICAgICAgICAgICAgYm9keSA9IF9mdW5jdGlvblBhcnNlciRleGVjJC5ib2R5OwoKICAgICAgICB2YXIgcmV0Zm4gPSBfY29uc3RydWN0KEZ1bmN0aW9uLCBfdG9Db25zdW1hYmxlQXJyYXkocGFyYW1zLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh4KSB7CiAgICAgICAgICByZXR1cm4geC50cmltKCk7CiAgICAgICAgfSkpLmNvbmNhdChbYm9keS50cmltKCldKSk7CgogICAgICAgIGlmIChjYWNoZSkgewogICAgICAgICAgY2FjaGVbZm5dID0gcmV0Zm47CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcmV0Zm47CiAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHsvLyBtYWxmb3JtZWQgdHJhbnNmb3JtIGZ1bmN0aW9uLCBvciBwb3RlbnRpYWwgQ1NQIGVycm9yCiAgICAgIH0KICAgIH0gZWxzZSBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7CiAgICAgIHJldHVybiBmbjsKICAgIH0KCiAgICByZXR1cm4gZGVmYXVsdERlY29kZVJnYjsKICB9CgogIHZhciBtYXJ0aW5pID0gbnVsbDsKICB2YXIgZnVuY3Rpb25DYWNoZSA9IHt9OwoKICBmdW5jdGlvbiBkZWNvZGVUZXJyYWluKHBhcmFtZXRlcnMsIHRyYW5zZmVyYWJsZU9iamVjdHMpIHsKICAgIHZhciBfbWFydGluaTsKCiAgICB2YXIgaW1hZ2VEYXRhID0gcGFyYW1ldGVycy5pbWFnZURhdGEsCiAgICAgICAgX3BhcmFtZXRlcnMkdGlsZVNpemUgPSBwYXJhbWV0ZXJzLnRpbGVTaXplLAogICAgICAgIHRpbGVTaXplID0gX3BhcmFtZXRlcnMkdGlsZVNpemUgPT09IHZvaWQgMCA/IDI1NiA6IF9wYXJhbWV0ZXJzJHRpbGVTaXplLAogICAgICAgIGVycm9yTGV2ZWwgPSBwYXJhbWV0ZXJzLmVycm9yTGV2ZWwsCiAgICAgICAgZGVjb2RlUmdiID0gcGFyYW1ldGVycy5kZWNvZGVSZ2I7CiAgICB2YXIgcGl4ZWxzID0gbmRhcnJheShuZXcgVWludDhBcnJheShpbWFnZURhdGEpLCBbdGlsZVNpemUsIHRpbGVTaXplLCA0XSwgWzQsIDQgKiB0aWxlU2l6ZSwgMV0sIDApOyAvLyBUaWxlIHNpemUgbXVzdCBiZSBtYWludGFpbmVkIHRocm91Z2ggdGhlIGxpZmUgb2YgdGhlIHdvcmtlcgoKICAgIChfbWFydGluaSA9IG1hcnRpbmkpICE9PSBudWxsICYmIF9tYXJ0aW5pICE9PSB2b2lkIDAgPyBfbWFydGluaSA6IG1hcnRpbmkgPSBuZXcgTWFydGluaSh0aWxlU2l6ZSArIDEpOwogICAgdmFyIHRlcnJhaW4gPSBtYXBib3hUZXJyYWluVG9HcmlkKHBpeGVscywgZ2V0RGVjb2RlUmdiRnVuY3Rpb24oZGVjb2RlUmdiLCBmdW5jdGlvbkNhY2hlKSk7CiAgICB2YXIgdGlsZSA9IG1hcnRpbmkuY3JlYXRlVGlsZSh0ZXJyYWluKTsgLy8gZ2V0IGEgbWVzaCAodmVydGljZXMgYW5kIHRyaWFuZ2xlcyBpbmRpY2VzKSBmb3IgYSAxMG0gZXJyb3IKCiAgICB2YXIgbWVzaCA9IHRpbGUuZ2V0TWVzaChlcnJvckxldmVsLCBwYXJhbWV0ZXJzLm1heExlbmd0aCk7CiAgICByZXR1cm4gY3JlYXRlUXVhbnRpemVkTWVzaERhdGEodGlsZSwgbWVzaCwgdGlsZVNpemUpOwogIH0KCiAgc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7CiAgICB2YXIgX21zZyRkYXRhID0gbXNnLmRhdGEsCiAgICAgICAgaWQgPSBfbXNnJGRhdGEuaWQsCiAgICAgICAgcGF5bG9hZCA9IF9tc2ckZGF0YS5wYXlsb2FkOwogICAgaWYgKGlkID09IG51bGwpIHJldHVybjsKICAgIHZhciBvYmplY3RzID0gW107CiAgICB2YXIgcmVzID0gbnVsbDsKCiAgICB0cnkgewogICAgICByZXMgPSBkZWNvZGVUZXJyYWluKHBheWxvYWQpOwogICAgICBvYmplY3RzLnB1c2gocmVzLmluZGljZXMuYnVmZmVyKTsKICAgICAgb2JqZWN0cy5wdXNoKHJlcy5xdWFudGl6ZWRWZXJ0aWNlcy5idWZmZXIpOwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgICBpZDogaWQsCiAgICAgICAgcGF5bG9hZDogcmVzCiAgICAgIH0sIG9iamVjdHMpOwogICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgIGlkOiBpZCwKICAgICAgICBlcnI6IGVyci50b1N0cmluZygpCiAgICAgIH0pOwogICAgfSBmaW5hbGx5IHsKICAgICAgcmVzID0gbnVsbDsKICAgICAgb2JqZWN0cyA9IG51bGw7CiAgICB9CiAgfTsKCiAgZXhwb3J0cy5kZWNvZGVUZXJyYWluID0gZGVjb2RlVGVycmFpbjsKCiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTsKCiAgcmV0dXJuIGV4cG9ydHM7Cgp9KSh7fSk7Cgo=', null, false);
/* eslint-enable */

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
  function WorkerFarm() {
    _classCallCheck(this, WorkerFarm);

    _defineProperty(this, "worker", void 0);

    this.worker = new WorkerFactory();
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

// We should save these
//const canvas = new OffscreenCanvas(256, 256);
//const ctx = canvas.getContext("2d");
function mapboxTerrainToGrid(png, decodeRgb) {
  // maybe we should do this on the GPU using REGL?
  // but that would require GPU -> CPU -> GPU
  var gridSize = png.shape[0] + 1;
  var terrain = new Float32Array(gridSize * gridSize);
  var tileSize = png.shape[0]; // decode terrain values

  for (var y = 0; y < tileSize; y++) {
    for (var x = 0; x < tileSize; x++) {
      var yc = y;
      var r = png.get(x, yc, 0);
      var g = png.get(x, yc, 1);
      var b = png.get(x, yc, 2);
      var a = png.get(x, yc, 3);
      terrain[y * gridSize + x] = decodeRgb(r, g, b, a);
    }
  } // backfill right and bottom borders


  for (var _x = 0; _x < gridSize - 1; _x++) {
    terrain[gridSize * (gridSize - 1) + _x] = terrain[gridSize * (gridSize - 2) + _x];
  }

  for (var _y = 0; _y < gridSize; _y++) {
    terrain[gridSize * _y + gridSize - 1] = terrain[gridSize * _y + gridSize - 2];
  }

  return terrain;
}

function createQuantizedMeshData(tile, mesh, tileSize) {
  var xvals = [];
  var yvals = [];
  var heightMeters = [];
  var northIndices = [];
  var southIndices = [];
  var eastIndices = [];
  var westIndices = [];
  var minimumHeight = Infinity;
  var maximumHeight = -Infinity;
  var scalar = 32768.0 / tileSize;

  for (var ix = 0; ix < mesh.vertices.length / 2; ix++) {
    var vertexIx = ix;
    var px = mesh.vertices[ix * 2];
    var py = mesh.vertices[ix * 2 + 1];
    var height = tile.terrain[py * (tileSize + 1) + px];
    if (height > maximumHeight) maximumHeight = height;
    if (height < minimumHeight) minimumHeight = height;
    heightMeters.push(height);
    if (py == 0) northIndices.push(vertexIx);
    if (py == tileSize) southIndices.push(vertexIx);
    if (px == 0) westIndices.push(vertexIx);
    if (px == tileSize) eastIndices.push(vertexIx);
    var xv = px * scalar;
    var yv = (tileSize - py) * scalar;
    xvals.push(xv);
    yvals.push(yv);
  }

  var heightRange = maximumHeight - minimumHeight;
  var heights = heightMeters.map(function (d) {
    if (heightRange < 1) return 0;
    return (d - minimumHeight) * (32767.0 / heightRange);
  });
  var triangles = new Uint16Array(mesh.triangles);
  var quantizedVertices = new Uint16Array( //verts
  [].concat(xvals, yvals, _toConsumableArray(heights))); // SE NW NE
  // NE NW SE

  return {
    minimumHeight: minimumHeight,
    maximumHeight: maximumHeight,
    quantizedVertices: quantizedVertices,
    indices: triangles,
    westIndices: westIndices,
    southIndices: southIndices,
    eastIndices: eastIndices,
    northIndices: northIndices
  };
}

function iota(n) {
  var result = new Array(n);
  for(var i=0; i<n; ++i) {
    result[i] = i;
  }
  return result
}

var iota_1 = iota;

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var isBuffer_1 = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
};

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

var hasTypedArrays  = ((typeof Float64Array) !== "undefined");

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride;
  var terms = new Array(stride.length);
  var i;
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i];
  }
  terms.sort(compare1st);
  var result = new Array(terms.length);
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1];
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("");
  if(dimension < 0) {
    className = "View_Nil" + dtype;
  }
  var useGetters = (dtype === "generic");

  if(dimension === -1) {
    //Special case for trivial arrays
    var code =
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}";
    var procedure = new Function(code);
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}";
    var procedure = new Function("TrivialArray", code);
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"];

  //Create constructor for view
  var indices = iota_1(dimension);
  var args = indices.map(function(i) { return "i"+i });
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i
      }).join("+");
  var shapeArg = indices.map(function(i) {
      return "b"+i
    }).join(",");
  var strideArg = indices.map(function(i) {
      return "c"+i
    }).join(",");
  code.push(
    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
      "this.shape=[" + shapeArg + "]",
      "this.stride=[" + strideArg + "]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension);

  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
"}})");

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]");
  } else {
    code.push("Object.defineProperty(proto,'order',{get:");
    if(dimension < 4) {
      code.push("function "+className+"_order(){");
      if(dimension === 2) {
        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})");
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})");
      }
    } else {
      code.push("ORDER})");
    }
  }

  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){");
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}");
  } else {
    code.push("return this.data["+index_str+"]=v}");
  }

  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){");
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}");
  } else {
    code.push("return this.data["+index_str+"]}");
  }

  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}");

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this.stride["+i + "]"
    }).join(",")+",this.offset)}");

  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" });
  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" });
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","));
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}");
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}");

  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this.shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this.stride["+i+"]"
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil");
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}");
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}");

  //view.transpose():
  var tShape = new Array(dimension);
  var tStride = new Array(dimension);
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]";
    tStride[i] = "b[i"+i+"]";
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}");

  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset");
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}");
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}");

  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}");

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"));
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(isBuffer_1(data)) {
    return "buffer"
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
      case "[object BigInt64Array]":
        return "bigint64"
      case "[object BigUint64Array]":
        return "biguint64"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "bigint64": [],
  "biguint64": [],
  "buffer":[],
  "generic":[]
}

;
function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0];
    return ctor([])
  } else if(typeof data === "number") {
    data = [data];
  }
  if(shape === undefined) {
    shape = [ data.length ];
  }
  var d = shape.length;
  if(stride === undefined) {
    stride = new Array(d);
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz;
      sz *= shape[i];
    }
  }
  if(offset === undefined) {
    offset = 0;
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i];
      }
    }
  }
  var dtype = arrayDType(data);
  var ctor_list = CACHED_CONSTRUCTORS[dtype];
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1));
  }
  var ctor = ctor_list[d+1];
  return ctor(data, shape, stride, offset)
}

var ndarray = wrappedNDArrayCtor;

class Martini {
  constructor(gridSize = 257) {
    this.gridSize = gridSize;
    const tileSize = gridSize - 1;
    if (tileSize & tileSize - 1) throw new Error(`Expected grid size to be 2^n+1, got ${gridSize}.`);
    this.numTriangles = tileSize * tileSize * 2 - 2;
    this.numParentTriangles = this.numTriangles - tileSize * tileSize;
    this.indices = new Uint32Array(this.gridSize * this.gridSize); // coordinates for all possible triangles in an RTIN tile

    this.coords = new Uint16Array(this.numTriangles * 4); // get triangle coordinates from its index in an implicit binary tree

    for (let i = 0; i < this.numTriangles; i++) {
      let id = i + 2;
      let ax = 0,
          ay = 0,
          bx = 0,
          by = 0,
          cx = 0,
          cy = 0;

      if (id & 1) {
        bx = by = cx = tileSize; // bottom-left triangle
      } else {
        ax = ay = cy = tileSize; // top-right triangle
      }

      while ((id >>= 1) > 1) {
        const mx = ax + bx >> 1;
        const my = ay + by >> 1;

        if (id & 1) {
          // left half
          bx = ax;
          by = ay;
          ax = cx;
          ay = cy;
        } else {
          // right half
          ax = bx;
          ay = by;
          bx = cx;
          by = cy;
        }

        cx = mx;
        cy = my;
      }

      const k = i * 4;
      this.coords[k + 0] = ax;
      this.coords[k + 1] = ay;
      this.coords[k + 2] = bx;
      this.coords[k + 3] = by;
    }
  }

  createTile(terrain) {
    return new Tile(terrain, this);
  }

}

class Tile {
  constructor(terrain, martini) {
    const size = martini.gridSize;
    if (terrain.length !== size * size) throw new Error(`Expected terrain data of length ${size * size} (${size} x ${size}), got ${terrain.length}.`);
    this.terrain = terrain;
    this.martini = martini;
    this.errors = new Float32Array(terrain.length);
    this.update();
  }

  update() {
    const {
      numTriangles,
      numParentTriangles,
      coords,
      gridSize: size
    } = this.martini;
    const {
      terrain,
      errors
    } = this; // iterate over all possible triangles, starting from the smallest level

    for (let i = numTriangles - 1; i >= 0; i--) {
      const k = i * 4;
      const ax = coords[k + 0];
      const ay = coords[k + 1];
      const bx = coords[k + 2];
      const by = coords[k + 3];
      const mx = ax + bx >> 1;
      const my = ay + by >> 1;
      const cx = mx + my - ay;
      const cy = my + ax - mx; // calculate error in the middle of the long edge of the triangle

      const interpolatedHeight = (terrain[ay * size + ax] + terrain[by * size + bx]) / 2;
      const middleIndex = my * size + mx;
      const middleError = Math.abs(interpolatedHeight - terrain[middleIndex]);
      errors[middleIndex] = Math.max(errors[middleIndex], middleError);

      if (i < numParentTriangles) {
        // bigger triangles; accumulate error with children
        const leftChildIndex = (ay + cy >> 1) * size + (ax + cx >> 1);
        const rightChildIndex = (by + cy >> 1) * size + (bx + cx >> 1);
        errors[middleIndex] = Math.max(errors[middleIndex], errors[leftChildIndex], errors[rightChildIndex]);
      }
    }
  }

  getMesh(maxError = 0, maxLength = null) {
    const {
      gridSize: size,
      indices
    } = this.martini;
    const {
      errors
    } = this;
    let numVertices = 0;
    let numTriangles = 0;
    const max = size - 1; // The maxLength parameter will cause triangles to be generated until the legs are below this length
    // It is meant to support cases where a certain mesh density is required to do spherical math on digital globes

    const maxScale = maxLength || size; // use an index grid to keep track of vertices that were already used to avoid duplication

    indices.fill(0); // retrieve mesh in two stages that both traverse the error map:
    // - countElements: find used vertices (and assign each an index), and count triangles (for minimum allocation)
    // - processTriangle: fill the allocated vertices & triangles typed arrays

    function countElements(ax, ay, bx, by, cx, cy) {
      const mx = ax + bx >> 1;
      const my = ay + by >> 1;
      const legLength = Math.abs(ax - cx) + Math.abs(ay - cy);

      if (legLength > 1 && errors[my * size + mx] > maxError || legLength > maxScale) {
        countElements(cx, cy, ax, ay, mx, my);
        countElements(bx, by, cx, cy, mx, my);
      } else {
        indices[ay * size + ax] = indices[ay * size + ax] || ++numVertices;
        indices[by * size + bx] = indices[by * size + bx] || ++numVertices;
        indices[cy * size + cx] = indices[cy * size + cx] || ++numVertices;
        numTriangles++;
      }
    }

    countElements(0, 0, max, max, max, 0);
    countElements(max, max, 0, 0, 0, max);
    const vertices = new Uint16Array(numVertices * 2);
    const triangles = new Uint32Array(numTriangles * 3);
    let triIndex = 0;

    function processTriangle(ax, ay, bx, by, cx, cy) {
      const mx = ax + bx >> 1;
      const my = ay + by >> 1;
      const legLength = Math.abs(ax - cx) + Math.abs(ay - cy);

      if (legLength > 1 && errors[my * size + mx] > maxError || legLength > maxScale) {
        // triangle doesn't approximate the surface well enough; drill down further
        processTriangle(cx, cy, ax, ay, mx, my);
        processTriangle(bx, by, cx, cy, mx, my);
      } else {
        // add a triangle
        const a = indices[ay * size + ax] - 1;
        const b = indices[by * size + bx] - 1;
        const c = indices[cy * size + cx] - 1;
        vertices[2 * a] = ax;
        vertices[2 * a + 1] = ay;
        vertices[2 * b] = bx;
        vertices[2 * b + 1] = by;
        vertices[2 * c] = cx;
        vertices[2 * c + 1] = cy;
        triangles[triIndex++] = a;
        triangles[triIndex++] = b;
        triangles[triIndex++] = c;
      }
    }

    processTriangle(0, 0, max, max, max, 0);
    processTriangle(max, max, 0, 0, 0, max);
    return {
      vertices,
      triangles
    };
  }

}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

createCommonjsModule(function (module) {
var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  exports.wrap = wrap;

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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

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
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
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
        return new PromiseImpl(function(resolve, reject) {
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
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
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
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
        context.arg = undefined$1;
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

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

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

  exports.keys = function(object) {
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

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
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
          context.arg = undefined$1;
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
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

/**
 * Function used to convert RGBA packed data into floating-point value.
 * 
 * Since this operates across Web Worker boundaries, it must only utilise the given parameter list.
 * External references not supported.
 * 
 * Supported function syntax:
 *   1) (r, g, b, a) => 0.0
 *   2) (r, g, b) => {
 *          return 0.0;
 *      }
 *   3) function f(r, g, b, a) {
 *          return 0.0;
 *      }
 */

/**
 * Regex supports the following function syntax:
 * 1) a => a * 2
 * 2) a => {
 *        const x = a * 2;
 *        return x;
 *    }
 * 3) (a, b) => a + b
 * 4) function f(a) {
 *        return a * 2;
 *    } 
 */
var functionParser = /*#__PURE__*/_wrapRegExp(/^(?:(?:function[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[0-9A-Z_a-z]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?\(?((?:[0-9A-Z_a-z]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)*)\)?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:=>)?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\{?((?:.|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])+?)\}?)$/gi, {
  params: 1,
  body: 2
});
/** Mapbox Terrain-RGB default decode function
 *  (r * 256 * 256) / 10 + (g * 256) / 10 + b / 10 - 10000
 */


var defaultDecodeRgb = function defaultDecodeRgb(r, g, b, a) {
  return r * 6553.6 + g * 25.6 + b * 0.1 - 10000;
};
/**
 * @param fn DecodeRgbFunction callable or string representation of a DecodeRgbFunction.
 * @returns A concrete DecodeRgbFunction callable.
 */


function getDecodeRgbFunction(fn, cache) {
  if (!fn) return defaultDecodeRgb;

  if (typeof fn === 'string') {
    if (cache !== null && cache !== void 0 && cache[fn]) return cache[fn];

    try {
      // parse function string
      var _functionParser$exec = functionParser.exec(fn.trim()),
          _functionParser$exec$ = _functionParser$exec.groups,
          params = _functionParser$exec$.params,
          body = _functionParser$exec$.body;

      var retfn = _construct(Function, _toConsumableArray(params.split(',').map(function (x) {
        return x.trim();
      })).concat([body.trim()]));

      if (cache) {
        cache[fn] = retfn;
      }

      return retfn;
    } catch (_unused) {// malformed transform function, or potential CSP error
    }
  } else if (typeof fn === 'function') {
    return fn;
  }

  return defaultDecodeRgb;
}

var martini = null;
var functionCache = {};

function decodeTerrain(parameters, transferableObjects) {
  var _martini;

  var imageData = parameters.imageData,
      _parameters$tileSize = parameters.tileSize,
      tileSize = _parameters$tileSize === void 0 ? 256 : _parameters$tileSize,
      errorLevel = parameters.errorLevel,
      decodeRgb = parameters.decodeRgb;
  var pixels = ndarray(new Uint8Array(imageData), [tileSize, tileSize, 4], [4, 4 * tileSize, 1], 0); // Tile size must be maintained through the life of the worker

  (_martini = martini) !== null && _martini !== void 0 ? _martini : martini = new Martini(tileSize + 1);
  var terrain = mapboxTerrainToGrid(pixels, getDecodeRgbFunction(decodeRgb, functionCache));
  var tile = martini.createTile(terrain); // get a mesh (vertices and triangles indices) for a 10m error

  var mesh = tile.getMesh(errorLevel, parameters.maxLength);
  return createQuantizedMeshData(tile, mesh, tileSize);
}

self.onmessage = function (msg) {
  var _msg$data = msg.data,
      id = _msg$data.id,
      payload = _msg$data.payload;
  if (id == null) return;
  var objects = [];
  var res = null;

  try {
    res = decodeTerrain(payload);
    objects.push(res.indices.buffer);
    objects.push(res.quantizedVertices.buffer);
    self.postMessage({
      id: id,
      payload: res
    }, objects);
  } catch (err) {
    self.postMessage({
      id: id,
      err: err.toString()
    });
  } finally {
    res = null;
    objects = null;
  }
};

require("ndarray");

var MartiniTerrainProvider = /*#__PURE__*/function () {
  // @ts-ignore
  function MartiniTerrainProvider() {
    var _opts$maxWorkers, _opts$detailScalar, _opts$minimumErrorLev, _opts$ellipsoid;

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

    _defineProperty(this, "workerFarm", null);

    _defineProperty(this, "inProgressWorkers", 0);

    _defineProperty(this, "levelOfDetailScalar", null);

    _defineProperty(this, "maxWorkers", 5);

    _defineProperty(this, "minError", 0.1);

    _defineProperty(this, "resource", null);

    _defineProperty(this, "RADIUS_SCALAR", 1.0);

    //this.martini = new Martini(257);
    this.resource = opts.resource;
    this.maxWorkers = (_opts$maxWorkers = opts.maxWorkers) !== null && _opts$maxWorkers !== void 0 ? _opts$maxWorkers : 5;
    this.levelOfDetailScalar = ((_opts$detailScalar = opts.detailScalar) !== null && _opts$detailScalar !== void 0 ? _opts$detailScalar : 4.0) + cesium.Math.EPSILON5;
    this.ready = true;
    this.readyPromise = Promise.resolve(true);
    this.minError = (_opts$minimumErrorLev = opts.minimumErrorLevel) !== null && _opts$minimumErrorLev !== void 0 ? _opts$minimumErrorLev : 0.1;
    this.errorEvent.addEventListener(console.log, this);
    this.ellipsoid = (_opts$ellipsoid = opts.ellipsoid) !== null && _opts$ellipsoid !== void 0 ? _opts$ellipsoid : cesium.Ellipsoid.WGS84;

    if (this.maxWorkers > 0) {
      this.workerFarm = new WorkerFarm();
    }

    this.tilingScheme = new cesium.WebMercatorTilingScheme({
      numberOfLevelZeroTilesX: 1,
      numberOfLevelZeroTilesY: 1,
      ellipsoid: this.ellipsoid
    });
  }

  _createClass(MartiniTerrainProvider, [{
    key: "requestTileGeometry",
    value: function requestTileGeometry(x, y, z, request) {
      var _this = this;

      if (this.inProgressWorkers > this.maxWorkers) return undefined;
      this.inProgressWorkers += 1;
      return this.processTile(x, y, z)["finally"](function () {
        _this.inProgressWorkers -= 1;
      });
    }
  }, {
    key: "processTile",
    value: function () {
      var _processTile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(x, y, z) {
        var err, _this$resource, tileSize, getTilePixels, decodeRgb, px, pixelData, tileRect, maxLength, params, res, _params$decodeRgb, v;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Something wonky about our tiling scheme, perhaps
                // 12/2215/2293 @2x
                //const url = `https://a.tiles.mapbox.com/v4/mapbox.terrain-rgb/${z}/${x}/${y}${hires}.${this.format}?access_token=${this.accessToken}`;
                err = this.getErrorLevel(z);
                _context.prev = 1;
                _this$resource = this.resource, tileSize = _this$resource.tileSize, getTilePixels = _this$resource.getTilePixels, decodeRgb = _this$resource.decodeRgb;
                _context.next = 5;
                return getTilePixels({
                  x: x,
                  y: y,
                  z: z
                });

              case 5:
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
                  tileSize: tileSize,
                  decodeRgb: decodeRgb
                };

                if (!(this.workerFarm != null)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 13;
                return this.workerFarm.scheduleTask(_objectSpread2(_objectSpread2({}, params), {}, {
                  decodeRgb: (_params$decodeRgb = params.decodeRgb) === null || _params$decodeRgb === void 0 ? void 0 : _params$decodeRgb.toString()
                }), [pixelData.buffer]);

              case 13:
                res = _context.sent;
                _context.next = 17;
                break;

              case 16:
                res = decodeTerrain(params);

              case 17:
                pixelData = undefined;
                px = undefined;
                return _context.abrupt("return", this.createQuantizedMeshData(tileRect, err, res));

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](1);
                //console.log(err);
                // return undefined
                v = Math.max(32 - 4 * z, 4);
                return _context.abrupt("return", this.emptyHeightmap(v));

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 22]]);
      }));

      function processTile(_x, _x2, _x3) {
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
      var levelZeroMaximumGeometricError = cesium.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(this.tilingScheme.ellipsoid, this.resource.tileSize, this.tilingScheme.getNumberOfXTilesAtLevel(0)); // Scalar to control overzooming
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

var MapboxTerrainProvider = /*#__PURE__*/function (_MartiniTerrainProvid) {
  _inherits(MapboxTerrainProvider, _MartiniTerrainProvid);

  var _super = _createSuper(MapboxTerrainProvider);

  function MapboxTerrainProvider() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MapboxTerrainProvider);

    var resource = new MapboxTerrainResource(opts);
    return _super.call(this, _objectSpread2(_objectSpread2({}, opts), {}, {
      resource: resource
    }));
  }

  return MapboxTerrainProvider;
}(MartiniTerrainProvider);

exports.CompositeHeightmapResource = CompositeHeightmapResource;
exports.DefaultHeightmapResource = DefaultHeightmapResource;
exports.MapboxTerrainResource = MapboxTerrainResource;
exports.MartiniTerrainProvider = MartiniTerrainProvider;
exports["default"] = MapboxTerrainProvider;
//# sourceMappingURL=index.js.map
