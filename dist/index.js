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

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwp2YXIgd29ya2VyX2NvZGUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHsKICAndXNlIHN0cmljdCc7CgogIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsKICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7CiAgfQoKICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7CiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsKICB9CgogIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgewogICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICJ1bmRlZmluZWQiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbIkBAaXRlcmF0b3IiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsKICB9CgogIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsKICAgIGlmICghbykgcmV0dXJuOwogICAgaWYgKHR5cGVvZiBvID09PSAic3RyaW5nIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7CiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7CiAgICBpZiAobiA9PT0gIk9iamVjdCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsKICAgIGlmIChuID09PSAiTWFwIiB8fCBuID09PSAiU2V0IikgcmV0dXJuIEFycmF5LmZyb20obyk7CiAgICBpZiAobiA9PT0gIkFyZ3VtZW50cyIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOwogIH0KCiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsKICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOwoKICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsKCiAgICByZXR1cm4gYXJyMjsKICB9CgogIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsKICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLiIpOwogIH0KCiAgLy8gV2Ugc2hvdWxkIHNhdmUgdGhlc2UKICAvL2NvbnN0IGNhbnZhcyA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMjU2LCAyNTYpOwogIC8vY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoIjJkIik7CiAgZnVuY3Rpb24gbWFwYm94VGVycmFpblRvR3JpZChwbmcsIGludGVydmFsLCBvZmZzZXQpIHsKICAgIHZhciBfaW50ZXJ2YWwsIF9vZmZzZXQ7CgogICAgLy8gbWF5YmUgd2Ugc2hvdWxkIGRvIHRoaXMgb24gdGhlIEdQVSB1c2luZyBSRUdMPwogICAgLy8gYnV0IHRoYXQgd291bGQgcmVxdWlyZSBHUFUgLT4gQ1BVIC0+IEdQVQogICAgdmFyIGdyaWRTaXplID0gcG5nLnNoYXBlWzBdICsgMTsKICAgIHZhciB0ZXJyYWluID0gbmV3IEZsb2F0MzJBcnJheShncmlkU2l6ZSAqIGdyaWRTaXplKTsKICAgIHZhciB0aWxlU2l6ZSA9IHBuZy5zaGFwZVswXTsKICAgIGludGVydmFsID0gKF9pbnRlcnZhbCA9IGludGVydmFsKSAhPT0gbnVsbCAmJiBfaW50ZXJ2YWwgIT09IHZvaWQgMCA/IF9pbnRlcnZhbCA6IDAuMTsKICAgIG9mZnNldCA9IChfb2Zmc2V0ID0gb2Zmc2V0KSAhPT0gbnVsbCAmJiBfb2Zmc2V0ICE9PSB2b2lkIDAgPyBfb2Zmc2V0IDogLTEwMDAwOyAvLyBkZWNvZGUgdGVycmFpbiB2YWx1ZXMKCiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRpbGVTaXplOyB5KyspIHsKICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aWxlU2l6ZTsgeCsrKSB7CiAgICAgICAgdmFyIHljID0geTsKICAgICAgICB2YXIgciA9IHBuZy5nZXQoeCwgeWMsIDApOwogICAgICAgIHZhciBnID0gcG5nLmdldCh4LCB5YywgMSk7CiAgICAgICAgdmFyIGIgPSBwbmcuZ2V0KHgsIHljLCAyKTsKICAgICAgICB2YXIgYSA9IHBuZy5nZXQoeCwgeWMsIDMpOwogICAgICAgIHRlcnJhaW5beSAqIGdyaWRTaXplICsgeF0gPSBhIDwgMjU1ID8gMCA6IHIgKiAyNTYgKiAyNTYgKiBpbnRlcnZhbCArIGcgKiAyNTYuMCAqIGludGVydmFsICsgYiAqIGludGVydmFsICsgb2Zmc2V0OwogICAgICB9CiAgICB9IC8vIGJhY2tmaWxsIHJpZ2h0IGFuZCBib3R0b20gYm9yZGVycwoKCiAgICBmb3IgKHZhciBfeCA9IDA7IF94IDwgZ3JpZFNpemUgLSAxOyBfeCsrKSB7CiAgICAgIHRlcnJhaW5bZ3JpZFNpemUgKiAoZ3JpZFNpemUgLSAxKSArIF94XSA9IHRlcnJhaW5bZ3JpZFNpemUgKiAoZ3JpZFNpemUgLSAyKSArIF94XTsKICAgIH0KCiAgICBmb3IgKHZhciBfeSA9IDA7IF95IDwgZ3JpZFNpemU7IF95KyspIHsKICAgICAgdGVycmFpbltncmlkU2l6ZSAqIF95ICsgZ3JpZFNpemUgLSAxXSA9IHRlcnJhaW5bZ3JpZFNpemUgKiBfeSArIGdyaWRTaXplIC0gMl07CiAgICB9CgogICAgcmV0dXJuIHRlcnJhaW47CiAgfQoKICBmdW5jdGlvbiBjcmVhdGVRdWFudGl6ZWRNZXNoRGF0YSh0aWxlLCBtZXNoLCB0aWxlU2l6ZSkgewogICAgdmFyIHh2YWxzID0gW107CiAgICB2YXIgeXZhbHMgPSBbXTsKICAgIHZhciBoZWlnaHRNZXRlcnMgPSBbXTsKICAgIHZhciBub3J0aEluZGljZXMgPSBbXTsKICAgIHZhciBzb3V0aEluZGljZXMgPSBbXTsKICAgIHZhciBlYXN0SW5kaWNlcyA9IFtdOwogICAgdmFyIHdlc3RJbmRpY2VzID0gW107CiAgICB2YXIgbWluaW11bUhlaWdodCA9IEluZmluaXR5OwogICAgdmFyIG1heGltdW1IZWlnaHQgPSAtSW5maW5pdHk7CiAgICB2YXIgc2NhbGFyID0gMzI3NjguMCAvIHRpbGVTaXplOwoKICAgIGZvciAodmFyIGl4ID0gMDsgaXggPCBtZXNoLnZlcnRpY2VzLmxlbmd0aCAvIDI7IGl4KyspIHsKICAgICAgdmFyIHZlcnRleEl4ID0gaXg7CiAgICAgIHZhciBweCA9IG1lc2gudmVydGljZXNbaXggKiAyXTsKICAgICAgdmFyIHB5ID0gbWVzaC52ZXJ0aWNlc1tpeCAqIDIgKyAxXTsKICAgICAgdmFyIGhlaWdodCA9IHRpbGUudGVycmFpbltweSAqICh0aWxlU2l6ZSArIDEpICsgcHhdOwogICAgICBpZiAoaGVpZ2h0ID4gbWF4aW11bUhlaWdodCkgbWF4aW11bUhlaWdodCA9IGhlaWdodDsKICAgICAgaWYgKGhlaWdodCA8IG1pbmltdW1IZWlnaHQpIG1pbmltdW1IZWlnaHQgPSBoZWlnaHQ7CiAgICAgIGhlaWdodE1ldGVycy5wdXNoKGhlaWdodCk7CiAgICAgIGlmIChweSA9PSAwKSBub3J0aEluZGljZXMucHVzaCh2ZXJ0ZXhJeCk7CiAgICAgIGlmIChweSA9PSB0aWxlU2l6ZSkgc291dGhJbmRpY2VzLnB1c2godmVydGV4SXgpOwogICAgICBpZiAocHggPT0gMCkgd2VzdEluZGljZXMucHVzaCh2ZXJ0ZXhJeCk7CiAgICAgIGlmIChweCA9PSB0aWxlU2l6ZSkgZWFzdEluZGljZXMucHVzaCh2ZXJ0ZXhJeCk7CiAgICAgIHZhciB4diA9IHB4ICogc2NhbGFyOwogICAgICB2YXIgeXYgPSAodGlsZVNpemUgLSBweSkgKiBzY2FsYXI7CiAgICAgIHh2YWxzLnB1c2goeHYpOwogICAgICB5dmFscy5wdXNoKHl2KTsKICAgIH0KCiAgICB2YXIgaGVpZ2h0UmFuZ2UgPSBtYXhpbXVtSGVpZ2h0IC0gbWluaW11bUhlaWdodDsKICAgIHZhciBoZWlnaHRzID0gaGVpZ2h0TWV0ZXJzLm1hcChmdW5jdGlvbiAoZCkgewogICAgICBpZiAoaGVpZ2h0UmFuZ2UgPCAxKSByZXR1cm4gMDsKICAgICAgcmV0dXJuIChkIC0gbWluaW11bUhlaWdodCkgKiAoMzI3NjcuMCAvIGhlaWdodFJhbmdlKTsKICAgIH0pOwogICAgdmFyIHRyaWFuZ2xlcyA9IG5ldyBVaW50MTZBcnJheShtZXNoLnRyaWFuZ2xlcyk7CiAgICB2YXIgcXVhbnRpemVkVmVydGljZXMgPSBuZXcgVWludDE2QXJyYXkoIC8vdmVydHMKICAgIFtdLmNvbmNhdCh4dmFscywgeXZhbHMsIF90b0NvbnN1bWFibGVBcnJheShoZWlnaHRzKSkpOyAvLyBTRSBOVyBORQogICAgLy8gTkUgTlcgU0UKCiAgICByZXR1cm4gewogICAgICBtaW5pbXVtSGVpZ2h0OiBtaW5pbXVtSGVpZ2h0LAogICAgICBtYXhpbXVtSGVpZ2h0OiBtYXhpbXVtSGVpZ2h0LAogICAgICBxdWFudGl6ZWRWZXJ0aWNlczogcXVhbnRpemVkVmVydGljZXMsCiAgICAgIGluZGljZXM6IHRyaWFuZ2xlcywKICAgICAgd2VzdEluZGljZXM6IHdlc3RJbmRpY2VzLAogICAgICBzb3V0aEluZGljZXM6IHNvdXRoSW5kaWNlcywKICAgICAgZWFzdEluZGljZXM6IGVhc3RJbmRpY2VzLAogICAgICBub3J0aEluZGljZXM6IG5vcnRoSW5kaWNlcwogICAgfTsKICB9CgogIGZ1bmN0aW9uIGlvdGEobikgewogICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShuKTsKICAgIGZvcih2YXIgaT0wOyBpPG47ICsraSkgewogICAgICByZXN1bHRbaV0gPSBpOwogICAgfQogICAgcmV0dXJuIHJlc3VsdAogIH0KCiAgdmFyIGlvdGFfMSA9IGlvdGE7CgogIC8qIQogICAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXIKICAgKgogICAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+CiAgICogQGxpY2Vuc2UgIE1JVAogICAqLwogIC8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3NpbmcKICAvLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5CiAgdmFyIGlzQnVmZmVyXzEgPSBmdW5jdGlvbiAob2JqKSB7CiAgICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKQogIH07CgogIGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHsKICAgIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopCiAgfQoKICAvLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LgogIGZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7CiAgICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSkKICB9CgogIHZhciBoYXNUeXBlZEFycmF5cyAgPSAoKHR5cGVvZiBGbG9hdDY0QXJyYXkpICE9PSAidW5kZWZpbmVkIik7CgogIGZ1bmN0aW9uIGNvbXBhcmUxc3QoYSwgYikgewogICAgcmV0dXJuIGFbMF0gLSBiWzBdCiAgfQoKICBmdW5jdGlvbiBvcmRlcigpIHsKICAgIHZhciBzdHJpZGUgPSB0aGlzLnN0cmlkZTsKICAgIHZhciB0ZXJtcyA9IG5ldyBBcnJheShzdHJpZGUubGVuZ3RoKTsKICAgIHZhciBpOwogICAgZm9yKGk9MDsgaTx0ZXJtcy5sZW5ndGg7ICsraSkgewogICAgICB0ZXJtc1tpXSA9IFtNYXRoLmFicyhzdHJpZGVbaV0pLCBpXTsKICAgIH0KICAgIHRlcm1zLnNvcnQoY29tcGFyZTFzdCk7CiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHRlcm1zLmxlbmd0aCk7CiAgICBmb3IoaT0wOyBpPHJlc3VsdC5sZW5ndGg7ICsraSkgewogICAgICByZXN1bHRbaV0gPSB0ZXJtc1tpXVsxXTsKICAgIH0KICAgIHJldHVybiByZXN1bHQKICB9CgogIGZ1bmN0aW9uIGNvbXBpbGVDb25zdHJ1Y3RvcihkdHlwZSwgZGltZW5zaW9uKSB7CiAgICB2YXIgY2xhc3NOYW1lID0gWyJWaWV3IiwgZGltZW5zaW9uLCAiZCIsIGR0eXBlXS5qb2luKCIiKTsKICAgIGlmKGRpbWVuc2lvbiA8IDApIHsKICAgICAgY2xhc3NOYW1lID0gIlZpZXdfTmlsIiArIGR0eXBlOwogICAgfQogICAgdmFyIHVzZUdldHRlcnMgPSAoZHR5cGUgPT09ICJnZW5lcmljIik7CgogICAgaWYoZGltZW5zaW9uID09PSAtMSkgewogICAgICAvL1NwZWNpYWwgY2FzZSBmb3IgdHJpdmlhbCBhcnJheXMKICAgICAgdmFyIGNvZGUgPQogICAgICAgICJmdW5jdGlvbiAiK2NsYXNzTmFtZSsiKGEpe3RoaXMuZGF0YT1hO307XAp2YXIgcHJvdG89IitjbGFzc05hbWUrIi5wcm90b3R5cGU7XApwcm90by5kdHlwZT0nIitkdHlwZSsiJztcCnByb3RvLmluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIC0xfTtcCnByb3RvLnNpemU9MDtcCnByb3RvLmRpbWVuc2lvbj0tMTtcCnByb3RvLnNoYXBlPXByb3RvLnN0cmlkZT1wcm90by5vcmRlcj1bXTtcCnByb3RvLmxvPXByb3RvLmhpPXByb3RvLnRyYW5zcG9zZT1wcm90by5zdGVwPVwKZnVuY3Rpb24oKXtyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIodGhpcy5kYXRhKTt9O1wKcHJvdG8uZ2V0PXByb3RvLnNldD1mdW5jdGlvbigpe307XApwcm90by5waWNrPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O1wKcmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF8iK2NsYXNzTmFtZSsiKGEpe3JldHVybiBuZXcgIitjbGFzc05hbWUrIihhKTt9IjsKICAgICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihjb2RlKTsKICAgICAgcmV0dXJuIHByb2NlZHVyZSgpCiAgICB9IGVsc2UgaWYoZGltZW5zaW9uID09PSAwKSB7CiAgICAgIC8vU3BlY2lhbCBjYXNlIGZvciAwZCBhcnJheXMKICAgICAgdmFyIGNvZGUgPQogICAgICAgICJmdW5jdGlvbiAiK2NsYXNzTmFtZSsiKGEsZCkge1wKdGhpcy5kYXRhID0gYTtcCnRoaXMub2Zmc2V0ID0gZFwKfTtcCnZhciBwcm90bz0iK2NsYXNzTmFtZSsiLnByb3RvdHlwZTtcCnByb3RvLmR0eXBlPSciK2R0eXBlKyInO1wKcHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vZmZzZXR9O1wKcHJvdG8uZGltZW5zaW9uPTA7XApwcm90by5zaXplPTE7XApwcm90by5zaGFwZT1cCnByb3RvLnN0cmlkZT1cCnByb3RvLm9yZGVyPVtdO1wKcHJvdG8ubG89XApwcm90by5oaT1cCnByb3RvLnRyYW5zcG9zZT1cCnByb3RvLnN0ZXA9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9jb3B5KCkge1wKcmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSx0aGlzLm9mZnNldClcCn07XApwcm90by5waWNrPWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfcGljaygpe1wKcmV0dXJuIFRyaXZpYWxBcnJheSh0aGlzLmRhdGEpO1wKfTtcCnByb3RvLnZhbHVlT2Y9cHJvdG8uZ2V0PWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfZ2V0KCl7XApyZXR1cm4gIisodXNlR2V0dGVycyA/ICJ0aGlzLmRhdGEuZ2V0KHRoaXMub2Zmc2V0KSIgOiAidGhpcy5kYXRhW3RoaXMub2Zmc2V0XSIpKwogICJ9O1wKcHJvdG8uc2V0PWZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfc2V0KHYpe1wKcmV0dXJuICIrKHVzZUdldHRlcnMgPyAidGhpcy5kYXRhLnNldCh0aGlzLm9mZnNldCx2KSIgOiAidGhpcy5kYXRhW3RoaXMub2Zmc2V0XT12IikrIlwKfTtcCnJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfIitjbGFzc05hbWUrIihhLGIsYyxkKXtyZXR1cm4gbmV3ICIrY2xhc3NOYW1lKyIoYSxkKX0iOwogICAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKCJUcml2aWFsQXJyYXkiLCBjb2RlKTsKICAgICAgcmV0dXJuIHByb2NlZHVyZShDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXVswXSkKICAgIH0KCiAgICB2YXIgY29kZSA9IFsiJ3VzZSBzdHJpY3QnIl07CgogICAgLy9DcmVhdGUgY29uc3RydWN0b3IgZm9yIHZpZXcKICAgIHZhciBpbmRpY2VzID0gaW90YV8xKGRpbWVuc2lvbik7CiAgICB2YXIgYXJncyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuICJpIitpIH0pOwogICAgdmFyIGluZGV4X3N0ciA9ICJ0aGlzLm9mZnNldCsiICsgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgICAgcmV0dXJuICJ0aGlzLnN0cmlkZVsiICsgaSArICJdKmkiICsgaQogICAgICAgIH0pLmpvaW4oIisiKTsKICAgIHZhciBzaGFwZUFyZyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImIiK2kKICAgICAgfSkuam9pbigiLCIpOwogICAgdmFyIHN0cmlkZUFyZyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImMiK2kKICAgICAgfSkuam9pbigiLCIpOwogICAgY29kZS5wdXNoKAogICAgICAiZnVuY3Rpb24gIitjbGFzc05hbWUrIihhLCIgKyBzaGFwZUFyZyArICIsIiArIHN0cmlkZUFyZyArICIsZCl7dGhpcy5kYXRhPWEiLAogICAgICAgICJ0aGlzLnNoYXBlPVsiICsgc2hhcGVBcmcgKyAiXSIsCiAgICAgICAgInRoaXMuc3RyaWRlPVsiICsgc3RyaWRlQXJnICsgIl0iLAogICAgICAgICJ0aGlzLm9mZnNldD1kfDB9IiwKICAgICAgInZhciBwcm90bz0iK2NsYXNzTmFtZSsiLnByb3RvdHlwZSIsCiAgICAgICJwcm90by5kdHlwZT0nIitkdHlwZSsiJyIsCiAgICAgICJwcm90by5kaW1lbnNpb249IitkaW1lbnNpb24pOwoKICAgIC8vdmlldy5zaXplOgogICAgY29kZS5wdXNoKCJPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sJ3NpemUnLHtnZXQ6ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9zaXplKCl7XApyZXR1cm4gIitpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiAidGhpcy5zaGFwZVsiK2krIl0iIH0pLmpvaW4oIioiKSwKICAifX0pIik7CgogICAgLy92aWV3Lm9yZGVyOgogICAgaWYoZGltZW5zaW9uID09PSAxKSB7CiAgICAgIGNvZGUucHVzaCgicHJvdG8ub3JkZXI9WzBdIik7CiAgICB9IGVsc2UgewogICAgICBjb2RlLnB1c2goIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnb3JkZXInLHtnZXQ6Iik7CiAgICAgIGlmKGRpbWVuc2lvbiA8IDQpIHsKICAgICAgICBjb2RlLnB1c2goImZ1bmN0aW9uICIrY2xhc3NOYW1lKyJfb3JkZXIoKXsiKTsKICAgICAgICBpZihkaW1lbnNpb24gPT09IDIpIHsKICAgICAgICAgIGNvZGUucHVzaCgicmV0dXJuIChNYXRoLmFicyh0aGlzLnN0cmlkZVswXSk+TWF0aC5hYnModGhpcy5zdHJpZGVbMV0pKT9bMSwwXTpbMCwxXX19KSIpOwogICAgICAgIH0gZWxzZSBpZihkaW1lbnNpb24gPT09IDMpIHsKICAgICAgICAgIGNvZGUucHVzaCgKICAidmFyIHMwPU1hdGguYWJzKHRoaXMuc3RyaWRlWzBdKSxzMT1NYXRoLmFicyh0aGlzLnN0cmlkZVsxXSksczI9TWF0aC5hYnModGhpcy5zdHJpZGVbMl0pO1wKaWYoczA+czEpe1wKaWYoczE+czIpe1wKcmV0dXJuIFsyLDEsMF07XAp9ZWxzZSBpZihzMD5zMil7XApyZXR1cm4gWzEsMiwwXTtcCn1lbHNle1wKcmV0dXJuIFsxLDAsMl07XAp9XAp9ZWxzZSBpZihzMD5zMil7XApyZXR1cm4gWzIsMCwxXTtcCn1lbHNlIGlmKHMyPnMxKXtcCnJldHVybiBbMCwxLDJdO1wKfWVsc2V7XApyZXR1cm4gWzAsMiwxXTtcCn19fSkiKTsKICAgICAgICB9CiAgICAgIH0gZWxzZSB7CiAgICAgICAgY29kZS5wdXNoKCJPUkRFUn0pIik7CiAgICAgIH0KICAgIH0KCiAgICAvL3ZpZXcuc2V0KGkwLCAuLi4sIHYpOgogICAgY29kZS5wdXNoKAogICJwcm90by5zZXQ9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9zZXQoIithcmdzLmpvaW4oIiwiKSsiLHYpeyIpOwogICAgaWYodXNlR2V0dGVycykgewogICAgICBjb2RlLnB1c2goInJldHVybiB0aGlzLmRhdGEuc2V0KCIraW5kZXhfc3RyKyIsdil9Iik7CiAgICB9IGVsc2UgewogICAgICBjb2RlLnB1c2goInJldHVybiB0aGlzLmRhdGFbIitpbmRleF9zdHIrIl09dn0iKTsKICAgIH0KCiAgICAvL3ZpZXcuZ2V0KGkwLCAuLi4pOgogICAgY29kZS5wdXNoKCJwcm90by5nZXQ9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9nZXQoIithcmdzLmpvaW4oIiwiKSsiKXsiKTsKICAgIGlmKHVzZUdldHRlcnMpIHsKICAgICAgY29kZS5wdXNoKCJyZXR1cm4gdGhpcy5kYXRhLmdldCgiK2luZGV4X3N0cisiKX0iKTsKICAgIH0gZWxzZSB7CiAgICAgIGNvZGUucHVzaCgicmV0dXJuIHRoaXMuZGF0YVsiK2luZGV4X3N0cisiXX0iKTsKICAgIH0KCiAgICAvL3ZpZXcuaW5kZXg6CiAgICBjb2RlLnB1c2goCiAgICAgICJwcm90by5pbmRleD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX2luZGV4KCIsIGFyZ3Muam9pbigpLCAiKXtyZXR1cm4gIitpbmRleF9zdHIrIn0iKTsKCiAgICAvL3ZpZXcuaGkoKToKICAgIGNvZGUucHVzaCgicHJvdG8uaGk9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9oaSgiK2FyZ3Muam9pbigiLCIpKyIpe3JldHVybiBuZXcgIitjbGFzc05hbWUrIih0aGlzLmRhdGEsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiBbIih0eXBlb2YgaSIsaSwiIT09J251bWJlcid8fGkiLGksIjwwKT90aGlzLnNoYXBlWyIsIGksICJdOmkiLCBpLCJ8MCJdLmpvaW4oIiIpCiAgICAgIH0pLmpvaW4oIiwiKSsiLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gInRoaXMuc3RyaWRlWyIraSArICJdIgogICAgICB9KS5qb2luKCIsIikrIix0aGlzLm9mZnNldCl9Iik7CgogICAgLy92aWV3LmxvKCk6CiAgICB2YXIgYV92YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gImEiK2krIj10aGlzLnNoYXBlWyIraSsiXSIgfSk7CiAgICB2YXIgY192YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gImMiK2krIj10aGlzLnN0cmlkZVsiK2krIl0iIH0pOwogICAgY29kZS5wdXNoKCJwcm90by5sbz1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX2xvKCIrYXJncy5qb2luKCIsIikrIil7dmFyIGI9dGhpcy5vZmZzZXQsZD0wLCIrYV92YXJzLmpvaW4oIiwiKSsiLCIrY192YXJzLmpvaW4oIiwiKSk7CiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkgewogICAgICBjb2RlLnB1c2goCiAgImlmKHR5cGVvZiBpIitpKyI9PT0nbnVtYmVyJyYmaSIraSsiPj0wKXtcCmQ9aSIraSsifDA7XApiKz1jIitpKyIqZDtcCmEiK2krIi09ZH0iKTsKICAgIH0KICAgIGNvZGUucHVzaCgicmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJhIitpCiAgICAgIH0pLmpvaW4oIiwiKSsiLCIrCiAgICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsKICAgICAgICByZXR1cm4gImMiK2kKICAgICAgfSkuam9pbigiLCIpKyIsYil9Iik7CgogICAgLy92aWV3LnN0ZXAoKToKICAgIGNvZGUucHVzaCgicHJvdG8uc3RlcD1mdW5jdGlvbiAiK2NsYXNzTmFtZSsiX3N0ZXAoIithcmdzLmpvaW4oIiwiKSsiKXt2YXIgIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYSIraSsiPXRoaXMuc2hhcGVbIitpKyJdIgogICAgICB9KS5qb2luKCIsIikrIiwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJiIitpKyI9dGhpcy5zdHJpZGVbIitpKyJdIgogICAgICB9KS5qb2luKCIsIikrIixjPXRoaXMub2Zmc2V0LGQ9MCxjZWlsPU1hdGguY2VpbCIpOwogICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHsKICAgICAgY29kZS5wdXNoKAogICJpZih0eXBlb2YgaSIraSsiPT09J251bWJlcicpe1wKZD1pIitpKyJ8MDtcCmlmKGQ8MCl7XApjKz1iIitpKyIqKGEiK2krIi0xKTtcCmEiK2krIj1jZWlsKC1hIitpKyIvZClcCn1lbHNle1wKYSIraSsiPWNlaWwoYSIraSsiL2QpXAp9XApiIitpKyIqPWRcCn0iKTsKICAgIH0KICAgIGNvZGUucHVzaCgicmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJhIiArIGkKICAgICAgfSkuam9pbigiLCIpKyIsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAiYiIgKyBpCiAgICAgIH0pLmpvaW4oIiwiKSsiLGMpfSIpOwoKICAgIC8vdmlldy50cmFuc3Bvc2UoKToKICAgIHZhciB0U2hhcGUgPSBuZXcgQXJyYXkoZGltZW5zaW9uKTsKICAgIHZhciB0U3RyaWRlID0gbmV3IEFycmF5KGRpbWVuc2lvbik7CiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkgewogICAgICB0U2hhcGVbaV0gPSAiYVtpIitpKyJdIjsKICAgICAgdFN0cmlkZVtpXSA9ICJiW2kiK2krIl0iOwogICAgfQogICAgY29kZS5wdXNoKCJwcm90by50cmFuc3Bvc2U9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl90cmFuc3Bvc2UoIithcmdzKyIpeyIrCiAgICAgIGFyZ3MubWFwKGZ1bmN0aW9uKG4saWR4KSB7IHJldHVybiBuICsgIj0oIiArIG4gKyAiPT09dW5kZWZpbmVkPyIgKyBpZHggKyAiOiIgKyBuICsgInwwKSJ9KS5qb2luKCI7IiksCiAgICAgICJ2YXIgYT10aGlzLnNoYXBlLGI9dGhpcy5zdHJpZGU7cmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKHRoaXMuZGF0YSwiK3RTaGFwZS5qb2luKCIsIikrIiwiK3RTdHJpZGUuam9pbigiLCIpKyIsdGhpcy5vZmZzZXQpfSIpOwoKICAgIC8vdmlldy5waWNrKCk6CiAgICBjb2RlLnB1c2goInByb3RvLnBpY2s9ZnVuY3Rpb24gIitjbGFzc05hbWUrIl9waWNrKCIrYXJncysiKXt2YXIgYT1bXSxiPVtdLGM9dGhpcy5vZmZzZXQiKTsKICAgIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7CiAgICAgIGNvZGUucHVzaCgiaWYodHlwZW9mIGkiK2krIj09PSdudW1iZXInJiZpIitpKyI+PTApe2M9KGMrdGhpcy5zdHJpZGVbIitpKyJdKmkiK2krIil8MH1lbHNle2EucHVzaCh0aGlzLnNoYXBlWyIraSsiXSk7Yi5wdXNoKHRoaXMuc3RyaWRlWyIraSsiXSl9Iik7CiAgICB9CiAgICBjb2RlLnB1c2goInZhciBjdG9yPUNUT1JfTElTVFthLmxlbmd0aCsxXTtyZXR1cm4gY3Rvcih0aGlzLmRhdGEsYSxiLGMpfSIpOwoKICAgIC8vQWRkIHJldHVybiBzdGF0ZW1lbnQKICAgIGNvZGUucHVzaCgicmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF8iK2NsYXNzTmFtZSsiKGRhdGEsc2hhcGUsc3RyaWRlLG9mZnNldCl7cmV0dXJuIG5ldyAiK2NsYXNzTmFtZSsiKGRhdGEsIisKICAgICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgewogICAgICAgIHJldHVybiAic2hhcGVbIitpKyJdIgogICAgICB9KS5qb2luKCIsIikrIiwiKwogICAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7CiAgICAgICAgcmV0dXJuICJzdHJpZGVbIitpKyJdIgogICAgICB9KS5qb2luKCIsIikrIixvZmZzZXQpfSIpOwoKICAgIC8vQ29tcGlsZSBwcm9jZWR1cmUKICAgIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oIkNUT1JfTElTVCIsICJPUkRFUiIsIGNvZGUuam9pbigiXG4iKSk7CiAgICByZXR1cm4gcHJvY2VkdXJlKENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdLCBvcmRlcikKICB9CgogIGZ1bmN0aW9uIGFycmF5RFR5cGUoZGF0YSkgewogICAgaWYoaXNCdWZmZXJfMShkYXRhKSkgewogICAgICByZXR1cm4gImJ1ZmZlciIKICAgIH0KICAgIGlmKGhhc1R5cGVkQXJyYXlzKSB7CiAgICAgIHN3aXRjaChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkpIHsKICAgICAgICBjYXNlICJbb2JqZWN0IEZsb2F0NjRBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJmbG9hdDY0IgogICAgICAgIGNhc2UgIltvYmplY3QgRmxvYXQzMkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImZsb2F0MzIiCiAgICAgICAgY2FzZSAiW29iamVjdCBJbnQ4QXJyYXldIjoKICAgICAgICAgIHJldHVybiAiaW50OCIKICAgICAgICBjYXNlICJbb2JqZWN0IEludDE2QXJyYXldIjoKICAgICAgICAgIHJldHVybiAiaW50MTYiCiAgICAgICAgY2FzZSAiW29iamVjdCBJbnQzMkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImludDMyIgogICAgICAgIGNhc2UgIltvYmplY3QgVWludDhBcnJheV0iOgogICAgICAgICAgcmV0dXJuICJ1aW50OCIKICAgICAgICBjYXNlICJbb2JqZWN0IFVpbnQxNkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gInVpbnQxNiIKICAgICAgICBjYXNlICJbb2JqZWN0IFVpbnQzMkFycmF5XSI6CiAgICAgICAgICByZXR1cm4gInVpbnQzMiIKICAgICAgICBjYXNlICJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XSI6CiAgICAgICAgICByZXR1cm4gInVpbnQ4X2NsYW1wZWQiCiAgICAgICAgY2FzZSAiW29iamVjdCBCaWdJbnQ2NEFycmF5XSI6CiAgICAgICAgICByZXR1cm4gImJpZ2ludDY0IgogICAgICAgIGNhc2UgIltvYmplY3QgQmlnVWludDY0QXJyYXldIjoKICAgICAgICAgIHJldHVybiAiYmlndWludDY0IgogICAgICB9CiAgICB9CiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7CiAgICAgIHJldHVybiAiYXJyYXkiCiAgICB9CiAgICByZXR1cm4gImdlbmVyaWMiCiAgfQoKICB2YXIgQ0FDSEVEX0NPTlNUUlVDVE9SUyA9IHsKICAgICJmbG9hdDMyIjpbXSwKICAgICJmbG9hdDY0IjpbXSwKICAgICJpbnQ4IjpbXSwKICAgICJpbnQxNiI6W10sCiAgICAiaW50MzIiOltdLAogICAgInVpbnQ4IjpbXSwKICAgICJ1aW50MTYiOltdLAogICAgInVpbnQzMiI6W10sCiAgICAiYXJyYXkiOltdLAogICAgInVpbnQ4X2NsYW1wZWQiOltdLAogICAgImJpZ2ludDY0IjogW10sCiAgICAiYmlndWludDY0IjogW10sCiAgICAiYnVmZmVyIjpbXSwKICAgICJnZW5lcmljIjpbXQogIH0KCiAgOwogIGZ1bmN0aW9uIHdyYXBwZWROREFycmF5Q3RvcihkYXRhLCBzaGFwZSwgc3RyaWRlLCBvZmZzZXQpIHsKICAgIGlmKGRhdGEgPT09IHVuZGVmaW5lZCkgewogICAgICB2YXIgY3RvciA9IENBQ0hFRF9DT05TVFJVQ1RPUlMuYXJyYXlbMF07CiAgICAgIHJldHVybiBjdG9yKFtdKQogICAgfSBlbHNlIGlmKHR5cGVvZiBkYXRhID09PSAibnVtYmVyIikgewogICAgICBkYXRhID0gW2RhdGFdOwogICAgfQogICAgaWYoc2hhcGUgPT09IHVuZGVmaW5lZCkgewogICAgICBzaGFwZSA9IFsgZGF0YS5sZW5ndGggXTsKICAgIH0KICAgIHZhciBkID0gc2hhcGUubGVuZ3RoOwogICAgaWYoc3RyaWRlID09PSB1bmRlZmluZWQpIHsKICAgICAgc3RyaWRlID0gbmV3IEFycmF5KGQpOwogICAgICBmb3IodmFyIGk9ZC0xLCBzej0xOyBpPj0wOyAtLWkpIHsKICAgICAgICBzdHJpZGVbaV0gPSBzejsKICAgICAgICBzeiAqPSBzaGFwZVtpXTsKICAgICAgfQogICAgfQogICAgaWYob2Zmc2V0ID09PSB1bmRlZmluZWQpIHsKICAgICAgb2Zmc2V0ID0gMDsKICAgICAgZm9yKHZhciBpPTA7IGk8ZDsgKytpKSB7CiAgICAgICAgaWYoc3RyaWRlW2ldIDwgMCkgewogICAgICAgICAgb2Zmc2V0IC09IChzaGFwZVtpXS0xKSpzdHJpZGVbaV07CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICB2YXIgZHR5cGUgPSBhcnJheURUeXBlKGRhdGEpOwogICAgdmFyIGN0b3JfbGlzdCA9IENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdOwogICAgd2hpbGUoY3Rvcl9saXN0Lmxlbmd0aCA8PSBkKzEpIHsKICAgICAgY3Rvcl9saXN0LnB1c2goY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBjdG9yX2xpc3QubGVuZ3RoLTEpKTsKICAgIH0KICAgIHZhciBjdG9yID0gY3Rvcl9saXN0W2QrMV07CiAgICByZXR1cm4gY3RvcihkYXRhLCBzaGFwZSwgc3RyaWRlLCBvZmZzZXQpCiAgfQoKICB2YXIgbmRhcnJheSA9IHdyYXBwZWROREFycmF5Q3RvcjsKCiAgY2xhc3MgTWFydGluaSB7CiAgICBjb25zdHJ1Y3RvcihncmlkU2l6ZSA9IDI1NykgewogICAgICB0aGlzLmdyaWRTaXplID0gZ3JpZFNpemU7CiAgICAgIGNvbnN0IHRpbGVTaXplID0gZ3JpZFNpemUgLSAxOwogICAgICBpZiAodGlsZVNpemUgJiB0aWxlU2l6ZSAtIDEpIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgZ3JpZCBzaXplIHRvIGJlIDJebisxLCBnb3QgJHtncmlkU2l6ZX0uYCk7CiAgICAgIHRoaXMubnVtVHJpYW5nbGVzID0gdGlsZVNpemUgKiB0aWxlU2l6ZSAqIDIgLSAyOwogICAgICB0aGlzLm51bVBhcmVudFRyaWFuZ2xlcyA9IHRoaXMubnVtVHJpYW5nbGVzIC0gdGlsZVNpemUgKiB0aWxlU2l6ZTsKICAgICAgdGhpcy5pbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuZ3JpZFNpemUgKiB0aGlzLmdyaWRTaXplKTsgLy8gY29vcmRpbmF0ZXMgZm9yIGFsbCBwb3NzaWJsZSB0cmlhbmdsZXMgaW4gYW4gUlRJTiB0aWxlCgogICAgICB0aGlzLmNvb3JkcyA9IG5ldyBVaW50MTZBcnJheSh0aGlzLm51bVRyaWFuZ2xlcyAqIDQpOyAvLyBnZXQgdHJpYW5nbGUgY29vcmRpbmF0ZXMgZnJvbSBpdHMgaW5kZXggaW4gYW4gaW1wbGljaXQgYmluYXJ5IHRyZWUKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykgewogICAgICAgIGxldCBpZCA9IGkgKyAyOwogICAgICAgIGxldCBheCA9IDAsCiAgICAgICAgICAgIGF5ID0gMCwKICAgICAgICAgICAgYnggPSAwLAogICAgICAgICAgICBieSA9IDAsCiAgICAgICAgICAgIGN4ID0gMCwKICAgICAgICAgICAgY3kgPSAwOwoKICAgICAgICBpZiAoaWQgJiAxKSB7CiAgICAgICAgICBieCA9IGJ5ID0gY3ggPSB0aWxlU2l6ZTsgLy8gYm90dG9tLWxlZnQgdHJpYW5nbGUKICAgICAgICB9IGVsc2UgewogICAgICAgICAgYXggPSBheSA9IGN5ID0gdGlsZVNpemU7IC8vIHRvcC1yaWdodCB0cmlhbmdsZQogICAgICAgIH0KCiAgICAgICAgd2hpbGUgKChpZCA+Pj0gMSkgPiAxKSB7CiAgICAgICAgICBjb25zdCBteCA9IGF4ICsgYnggPj4gMTsKICAgICAgICAgIGNvbnN0IG15ID0gYXkgKyBieSA+PiAxOwoKICAgICAgICAgIGlmIChpZCAmIDEpIHsKICAgICAgICAgICAgLy8gbGVmdCBoYWxmCiAgICAgICAgICAgIGJ4ID0gYXg7CiAgICAgICAgICAgIGJ5ID0gYXk7CiAgICAgICAgICAgIGF4ID0gY3g7CiAgICAgICAgICAgIGF5ID0gY3k7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAvLyByaWdodCBoYWxmCiAgICAgICAgICAgIGF4ID0gYng7CiAgICAgICAgICAgIGF5ID0gYnk7CiAgICAgICAgICAgIGJ4ID0gY3g7CiAgICAgICAgICAgIGJ5ID0gY3k7CiAgICAgICAgICB9CgogICAgICAgICAgY3ggPSBteDsKICAgICAgICAgIGN5ID0gbXk7CiAgICAgICAgfQoKICAgICAgICBjb25zdCBrID0gaSAqIDQ7CiAgICAgICAgdGhpcy5jb29yZHNbayArIDBdID0gYXg7CiAgICAgICAgdGhpcy5jb29yZHNbayArIDFdID0gYXk7CiAgICAgICAgdGhpcy5jb29yZHNbayArIDJdID0gYng7CiAgICAgICAgdGhpcy5jb29yZHNbayArIDNdID0gYnk7CiAgICAgIH0KICAgIH0KCiAgICBjcmVhdGVUaWxlKHRlcnJhaW4pIHsKICAgICAgcmV0dXJuIG5ldyBUaWxlKHRlcnJhaW4sIHRoaXMpOwogICAgfQoKICB9CgogIGNsYXNzIFRpbGUgewogICAgY29uc3RydWN0b3IodGVycmFpbiwgbWFydGluaSkgewogICAgICBjb25zdCBzaXplID0gbWFydGluaS5ncmlkU2l6ZTsKICAgICAgaWYgKHRlcnJhaW4ubGVuZ3RoICE9PSBzaXplICogc2l6ZSkgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCB0ZXJyYWluIGRhdGEgb2YgbGVuZ3RoICR7c2l6ZSAqIHNpemV9ICgke3NpemV9IHggJHtzaXplfSksIGdvdCAke3RlcnJhaW4ubGVuZ3RofS5gKTsKICAgICAgdGhpcy50ZXJyYWluID0gdGVycmFpbjsKICAgICAgdGhpcy5tYXJ0aW5pID0gbWFydGluaTsKICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgRmxvYXQzMkFycmF5KHRlcnJhaW4ubGVuZ3RoKTsKICAgICAgdGhpcy51cGRhdGUoKTsKICAgIH0KCiAgICB1cGRhdGUoKSB7CiAgICAgIGNvbnN0IHsKICAgICAgICBudW1UcmlhbmdsZXMsCiAgICAgICAgbnVtUGFyZW50VHJpYW5nbGVzLAogICAgICAgIGNvb3JkcywKICAgICAgICBncmlkU2l6ZTogc2l6ZQogICAgICB9ID0gdGhpcy5tYXJ0aW5pOwogICAgICBjb25zdCB7CiAgICAgICAgdGVycmFpbiwKICAgICAgICBlcnJvcnMKICAgICAgfSA9IHRoaXM7IC8vIGl0ZXJhdGUgb3ZlciBhbGwgcG9zc2libGUgdHJpYW5nbGVzLCBzdGFydGluZyBmcm9tIHRoZSBzbWFsbGVzdCBsZXZlbAoKICAgICAgZm9yIChsZXQgaSA9IG51bVRyaWFuZ2xlcyAtIDE7IGkgPj0gMDsgaS0tKSB7CiAgICAgICAgY29uc3QgayA9IGkgKiA0OwogICAgICAgIGNvbnN0IGF4ID0gY29vcmRzW2sgKyAwXTsKICAgICAgICBjb25zdCBheSA9IGNvb3Jkc1trICsgMV07CiAgICAgICAgY29uc3QgYnggPSBjb29yZHNbayArIDJdOwogICAgICAgIGNvbnN0IGJ5ID0gY29vcmRzW2sgKyAzXTsKICAgICAgICBjb25zdCBteCA9IGF4ICsgYnggPj4gMTsKICAgICAgICBjb25zdCBteSA9IGF5ICsgYnkgPj4gMTsKICAgICAgICBjb25zdCBjeCA9IG14ICsgbXkgLSBheTsKICAgICAgICBjb25zdCBjeSA9IG15ICsgYXggLSBteDsgLy8gY2FsY3VsYXRlIGVycm9yIGluIHRoZSBtaWRkbGUgb2YgdGhlIGxvbmcgZWRnZSBvZiB0aGUgdHJpYW5nbGUKCiAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkSGVpZ2h0ID0gKHRlcnJhaW5bYXkgKiBzaXplICsgYXhdICsgdGVycmFpbltieSAqIHNpemUgKyBieF0pIC8gMjsKICAgICAgICBjb25zdCBtaWRkbGVJbmRleCA9IG15ICogc2l6ZSArIG14OwogICAgICAgIGNvbnN0IG1pZGRsZUVycm9yID0gTWF0aC5hYnMoaW50ZXJwb2xhdGVkSGVpZ2h0IC0gdGVycmFpblttaWRkbGVJbmRleF0pOwogICAgICAgIGVycm9yc1ttaWRkbGVJbmRleF0gPSBNYXRoLm1heChlcnJvcnNbbWlkZGxlSW5kZXhdLCBtaWRkbGVFcnJvcik7CgogICAgICAgIGlmIChpIDwgbnVtUGFyZW50VHJpYW5nbGVzKSB7CiAgICAgICAgICAvLyBiaWdnZXIgdHJpYW5nbGVzOyBhY2N1bXVsYXRlIGVycm9yIHdpdGggY2hpbGRyZW4KICAgICAgICAgIGNvbnN0IGxlZnRDaGlsZEluZGV4ID0gKGF5ICsgY3kgPj4gMSkgKiBzaXplICsgKGF4ICsgY3ggPj4gMSk7CiAgICAgICAgICBjb25zdCByaWdodENoaWxkSW5kZXggPSAoYnkgKyBjeSA+PiAxKSAqIHNpemUgKyAoYnggKyBjeCA+PiAxKTsKICAgICAgICAgIGVycm9yc1ttaWRkbGVJbmRleF0gPSBNYXRoLm1heChlcnJvcnNbbWlkZGxlSW5kZXhdLCBlcnJvcnNbbGVmdENoaWxkSW5kZXhdLCBlcnJvcnNbcmlnaHRDaGlsZEluZGV4XSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgZ2V0TWVzaChtYXhFcnJvciA9IDAsIG1heExlbmd0aCA9IG51bGwpIHsKICAgICAgY29uc3QgewogICAgICAgIGdyaWRTaXplOiBzaXplLAogICAgICAgIGluZGljZXMKICAgICAgfSA9IHRoaXMubWFydGluaTsKICAgICAgY29uc3QgewogICAgICAgIGVycm9ycwogICAgICB9ID0gdGhpczsKICAgICAgbGV0IG51bVZlcnRpY2VzID0gMDsKICAgICAgbGV0IG51bVRyaWFuZ2xlcyA9IDA7CiAgICAgIGNvbnN0IG1heCA9IHNpemUgLSAxOyAvLyBUaGUgbWF4TGVuZ3RoIHBhcmFtZXRlciB3aWxsIGNhdXNlIHRyaWFuZ2xlcyB0byBiZSBnZW5lcmF0ZWQgdW50aWwgdGhlIGxlZ3MgYXJlIGJlbG93IHRoaXMgbGVuZ3RoCiAgICAgIC8vIEl0IGlzIG1lYW50IHRvIHN1cHBvcnQgY2FzZXMgd2hlcmUgYSBjZXJ0YWluIG1lc2ggZGVuc2l0eSBpcyByZXF1aXJlZCB0byBkbyBzcGhlcmljYWwgbWF0aCBvbiBkaWdpdGFsIGdsb2JlcwoKICAgICAgY29uc3QgbWF4U2NhbGUgPSBtYXhMZW5ndGggfHwgc2l6ZTsgLy8gdXNlIGFuIGluZGV4IGdyaWQgdG8ga2VlcCB0cmFjayBvZiB2ZXJ0aWNlcyB0aGF0IHdlcmUgYWxyZWFkeSB1c2VkIHRvIGF2b2lkIGR1cGxpY2F0aW9uCgogICAgICBpbmRpY2VzLmZpbGwoMCk7IC8vIHJldHJpZXZlIG1lc2ggaW4gdHdvIHN0YWdlcyB0aGF0IGJvdGggdHJhdmVyc2UgdGhlIGVycm9yIG1hcDoKICAgICAgLy8gLSBjb3VudEVsZW1lbnRzOiBmaW5kIHVzZWQgdmVydGljZXMgKGFuZCBhc3NpZ24gZWFjaCBhbiBpbmRleCksIGFuZCBjb3VudCB0cmlhbmdsZXMgKGZvciBtaW5pbXVtIGFsbG9jYXRpb24pCiAgICAgIC8vIC0gcHJvY2Vzc1RyaWFuZ2xlOiBmaWxsIHRoZSBhbGxvY2F0ZWQgdmVydGljZXMgJiB0cmlhbmdsZXMgdHlwZWQgYXJyYXlzCgogICAgICBmdW5jdGlvbiBjb3VudEVsZW1lbnRzKGF4LCBheSwgYngsIGJ5LCBjeCwgY3kpIHsKICAgICAgICBjb25zdCBteCA9IGF4ICsgYnggPj4gMTsKICAgICAgICBjb25zdCBteSA9IGF5ICsgYnkgPj4gMTsKICAgICAgICBjb25zdCBsZWdMZW5ndGggPSBNYXRoLmFicyhheCAtIGN4KSArIE1hdGguYWJzKGF5IC0gY3kpOwoKICAgICAgICBpZiAobGVnTGVuZ3RoID4gMSAmJiBlcnJvcnNbbXkgKiBzaXplICsgbXhdID4gbWF4RXJyb3IgfHwgbGVnTGVuZ3RoID4gbWF4U2NhbGUpIHsKICAgICAgICAgIGNvdW50RWxlbWVudHMoY3gsIGN5LCBheCwgYXksIG14LCBteSk7CiAgICAgICAgICBjb3VudEVsZW1lbnRzKGJ4LCBieSwgY3gsIGN5LCBteCwgbXkpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBpbmRpY2VzW2F5ICogc2l6ZSArIGF4XSA9IGluZGljZXNbYXkgKiBzaXplICsgYXhdIHx8ICsrbnVtVmVydGljZXM7CiAgICAgICAgICBpbmRpY2VzW2J5ICogc2l6ZSArIGJ4XSA9IGluZGljZXNbYnkgKiBzaXplICsgYnhdIHx8ICsrbnVtVmVydGljZXM7CiAgICAgICAgICBpbmRpY2VzW2N5ICogc2l6ZSArIGN4XSA9IGluZGljZXNbY3kgKiBzaXplICsgY3hdIHx8ICsrbnVtVmVydGljZXM7CiAgICAgICAgICBudW1UcmlhbmdsZXMrKzsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIGNvdW50RWxlbWVudHMoMCwgMCwgbWF4LCBtYXgsIG1heCwgMCk7CiAgICAgIGNvdW50RWxlbWVudHMobWF4LCBtYXgsIDAsIDAsIDAsIG1heCk7CiAgICAgIGNvbnN0IHZlcnRpY2VzID0gbmV3IFVpbnQxNkFycmF5KG51bVZlcnRpY2VzICogMik7CiAgICAgIGNvbnN0IHRyaWFuZ2xlcyA9IG5ldyBVaW50MzJBcnJheShudW1UcmlhbmdsZXMgKiAzKTsKICAgICAgbGV0IHRyaUluZGV4ID0gMDsKCiAgICAgIGZ1bmN0aW9uIHByb2Nlc3NUcmlhbmdsZShheCwgYXksIGJ4LCBieSwgY3gsIGN5KSB7CiAgICAgICAgY29uc3QgbXggPSBheCArIGJ4ID4+IDE7CiAgICAgICAgY29uc3QgbXkgPSBheSArIGJ5ID4+IDE7CiAgICAgICAgY29uc3QgbGVnTGVuZ3RoID0gTWF0aC5hYnMoYXggLSBjeCkgKyBNYXRoLmFicyhheSAtIGN5KTsKCiAgICAgICAgaWYgKGxlZ0xlbmd0aCA+IDEgJiYgZXJyb3JzW215ICogc2l6ZSArIG14XSA+IG1heEVycm9yIHx8IGxlZ0xlbmd0aCA+IG1heFNjYWxlKSB7CiAgICAgICAgICAvLyB0cmlhbmdsZSBkb2Vzbid0IGFwcHJveGltYXRlIHRoZSBzdXJmYWNlIHdlbGwgZW5vdWdoOyBkcmlsbCBkb3duIGZ1cnRoZXIKICAgICAgICAgIHByb2Nlc3NUcmlhbmdsZShjeCwgY3ksIGF4LCBheSwgbXgsIG15KTsKICAgICAgICAgIHByb2Nlc3NUcmlhbmdsZShieCwgYnksIGN4LCBjeSwgbXgsIG15KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgLy8gYWRkIGEgdHJpYW5nbGUKICAgICAgICAgIGNvbnN0IGEgPSBpbmRpY2VzW2F5ICogc2l6ZSArIGF4XSAtIDE7CiAgICAgICAgICBjb25zdCBiID0gaW5kaWNlc1tieSAqIHNpemUgKyBieF0gLSAxOwogICAgICAgICAgY29uc3QgYyA9IGluZGljZXNbY3kgKiBzaXplICsgY3hdIC0gMTsKICAgICAgICAgIHZlcnRpY2VzWzIgKiBhXSA9IGF4OwogICAgICAgICAgdmVydGljZXNbMiAqIGEgKyAxXSA9IGF5OwogICAgICAgICAgdmVydGljZXNbMiAqIGJdID0gYng7CiAgICAgICAgICB2ZXJ0aWNlc1syICogYiArIDFdID0gYnk7CiAgICAgICAgICB2ZXJ0aWNlc1syICogY10gPSBjeDsKICAgICAgICAgIHZlcnRpY2VzWzIgKiBjICsgMV0gPSBjeTsKICAgICAgICAgIHRyaWFuZ2xlc1t0cmlJbmRleCsrXSA9IGE7CiAgICAgICAgICB0cmlhbmdsZXNbdHJpSW5kZXgrK10gPSBiOwogICAgICAgICAgdHJpYW5nbGVzW3RyaUluZGV4KytdID0gYzsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHByb2Nlc3NUcmlhbmdsZSgwLCAwLCBtYXgsIG1heCwgbWF4LCAwKTsKICAgICAgcHJvY2Vzc1RyaWFuZ2xlKG1heCwgbWF4LCAwLCAwLCAwLCBtYXgpOwogICAgICByZXR1cm4gewogICAgICAgIHZlcnRpY2VzLAogICAgICAgIHRyaWFuZ2xlcwogICAgICB9OwogICAgfQoKICB9CgogIGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuKSB7CiAgICB2YXIgbW9kdWxlID0geyBleHBvcnRzOiB7fSB9OwogIAlyZXR1cm4gZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzOwogIH0KCiAgLyoqCiAgICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuCiAgICoKICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGUKICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuCiAgICovCgogIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHsKICB2YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykgewoKICAgIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7CiAgICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7CiAgICB2YXIgdW5kZWZpbmVkJDE7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLgogICAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iID8gU3ltYm9sIDoge307CiAgICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8ICJAQGl0ZXJhdG9yIjsKICAgIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8ICJAQGFzeW5jSXRlcmF0b3IiOwogICAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCAiQEB0b1N0cmluZ1RhZyI7CgogICAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkgewogICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsKICAgICAgICB2YWx1ZTogdmFsdWUsCiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwKICAgICAgICBjb25maWd1cmFibGU6IHRydWUsCiAgICAgICAgd3JpdGFibGU6IHRydWUKICAgICAgfSk7CiAgICAgIHJldHVybiBvYmpba2V5XTsKICAgIH0KICAgIHRyeSB7CiAgICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuCiAgICAgIGRlZmluZSh7fSwgIiIpOwogICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkgewogICAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlOwogICAgICB9OwogICAgfQoKICAgIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHsKICAgICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuCiAgICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yOwogICAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpOwogICAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTsKCiAgICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCwKICAgICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLgogICAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7CgogICAgICByZXR1cm4gZ2VuZXJhdG9yOwogICAgfQogICAgZXhwb3J0cy53cmFwID0gd3JhcDsKCiAgICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb24KICAgIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZAogICAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlCiAgICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlCiAgICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkCiAgICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nCiAgICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZQogICAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlCiAgICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoCiAgICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuCiAgICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHsKICAgICAgdHJ5IHsKICAgICAgICByZXR1cm4geyB0eXBlOiAibm9ybWFsIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9OwogICAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgICByZXR1cm4geyB0eXBlOiAidGhyb3ciLCBhcmc6IGVyciB9OwogICAgICB9CiAgICB9CgogICAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSAic3VzcGVuZGVkU3RhcnQiOwogICAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSAic3VzcGVuZGVkWWllbGQiOwogICAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gImV4ZWN1dGluZyI7CiAgICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSAiY29tcGxldGVkIjsKCiAgICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzCiAgICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuCiAgICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9OwoKICAgIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZAogICAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yCiAgICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91cgogICAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy4KICAgIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9CiAgICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9CiAgICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9CgogICAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdAogICAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC4KICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9OwogICAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgewogICAgICByZXR1cm4gdGhpczsKICAgIH0pOwoKICAgIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjsKICAgIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTsKICAgIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJgogICAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJgogICAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHsKICAgICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWQKICAgICAgLy8gb2YgdGhlIHBvbHlmaWxsLgogICAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlOwogICAgfQoKICAgIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9CiAgICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTsKICAgIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlOwogICAgZGVmaW5lKEdwLCAiY29uc3RydWN0b3IiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7CiAgICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsICJjb25zdHJ1Y3RvciIsIEdlbmVyYXRvckZ1bmN0aW9uKTsKICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKAogICAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwKICAgICAgdG9TdHJpbmdUYWdTeW1ib2wsCiAgICAgICJHZW5lcmF0b3JGdW5jdGlvbiIKICAgICk7CgogICAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGUKICAgIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuCiAgICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7CiAgICAgIFsibmV4dCIsICJ0aHJvdyIsICJyZXR1cm4iXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkgewogICAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTsKICAgICAgICB9KTsKICAgICAgfSk7CiAgICB9CgogICAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7CiAgICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gImZ1bmN0aW9uIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7CiAgICAgIHJldHVybiBjdG9yCiAgICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fAogICAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhbgogICAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LgogICAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gIkdlbmVyYXRvckZ1bmN0aW9uIgogICAgICAgIDogZmFsc2U7CiAgICB9OwoKICAgIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikgewogICAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7CiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpOwogICAgICB9IGVsc2UgewogICAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTsKICAgICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgIkdlbmVyYXRvckZ1bmN0aW9uIik7CiAgICAgIH0KICAgICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApOwogICAgICByZXR1cm4gZ2VuRnVuOwogICAgfTsKCiAgICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG8KICAgIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0CiAgICAvLyBgaGFzT3duLmNhbGwodmFsdWUsICJfX2F3YWl0IilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpcwogICAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4KICAgIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHsKICAgICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07CiAgICB9OwoKICAgIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkgewogICAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkgewogICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpOwogICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gInRocm93IikgewogICAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZzsKICAgICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTsKICAgICAgICAgIGlmICh2YWx1ZSAmJgogICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gIm9iamVjdCIgJiYKICAgICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgIl9fYXdhaXQiKSkgewogICAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7CiAgICAgICAgICAgICAgaW52b2tlKCJuZXh0IiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7CiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikgewogICAgICAgICAgICAgIGludm9rZSgidGhyb3ciLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7CiAgICAgICAgICAgIH0pOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkgewogICAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lcwogICAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGUKICAgICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uCiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDsKICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpOwogICAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHsKICAgICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2sKICAgICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLgogICAgICAgICAgICByZXR1cm4gaW52b2tlKCJ0aHJvdyIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICB9CgogICAgICB2YXIgcHJldmlvdXNQcm9taXNlOwoKICAgICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykgewogICAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkgewogICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpOwogICAgICAgICAgfSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0KICAgICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWwKICAgICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLAogICAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZgogICAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG8KICAgICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLAogICAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG8KICAgICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHkKICAgICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzCiAgICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseQogICAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGUKICAgICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5CiAgICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuCiAgICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbigKICAgICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsCiAgICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyCiAgICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci4KICAgICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcKICAgICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpOwogICAgICB9CgogICAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LAogICAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS4KICAgICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTsKICAgIH0KCiAgICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpOwogICAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSk7CiAgICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yOwoKICAgIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2YKICAgIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZgogICAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuCiAgICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7CiAgICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7CgogICAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKAogICAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLAogICAgICAgIFByb21pc2VJbXBsCiAgICAgICk7CgogICAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pCiAgICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci4KICAgICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7CiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpOwogICAgICAgICAgfSk7CiAgICB9OwoKICAgIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkgewogICAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0OwoKICAgICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykgewogICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHsKICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZyIpOwogICAgICAgIH0KCiAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkgewogICAgICAgICAgaWYgKG1ldGhvZCA9PT0gInRocm93IikgewogICAgICAgICAgICB0aHJvdyBhcmc7CiAgICAgICAgICB9CgogICAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzoKICAgICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWUKICAgICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7CiAgICAgICAgfQoKICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDsKICAgICAgICBjb250ZXh0LmFyZyA9IGFyZzsKCiAgICAgICAgd2hpbGUgKHRydWUpIHsKICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7CiAgICAgICAgICBpZiAoZGVsZWdhdGUpIHsKICAgICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7CiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkgewogICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7CiAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0OwogICAgICAgICAgICB9CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSAibmV4dCIpIHsKICAgICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzCiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uCiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZzsKCiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSAidGhyb3ciKSB7CiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkgewogICAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7CiAgICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpOwoKICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09ICJyZXR1cm4iKSB7CiAgICAgICAgICAgIGNvbnRleHQuYWJydXB0KCJyZXR1cm4iLCBjb250ZXh0LmFyZyk7CiAgICAgICAgICB9CgogICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZzsKCiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7CiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICJub3JtYWwiKSB7CiAgICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT0KICAgICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLgogICAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZQogICAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWQKICAgICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7CgogICAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgewogICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgICB9CgogICAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLAogICAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZQogICAgICAgICAgICB9OwoKICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICJ0aHJvdyIpIHsKICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDsKICAgICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZQogICAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLgogICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJ0aHJvdyI7CiAgICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH07CiAgICB9CgogICAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlCiAgICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlCiAgICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZywKICAgIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLgogICAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkgewogICAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdOwogICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQkMSkgewogICAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvdwogICAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuCiAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7CgogICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gInRocm93IikgewogICAgICAgICAgLy8gTm90ZTogWyJyZXR1cm4iXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuCiAgICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbInJldHVybiJdKSB7CiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGEKICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLgogICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9ICJyZXR1cm4iOwogICAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCQxOwogICAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTsKCiAgICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gInRocm93IikgewogICAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tCiAgICAgICAgICAgICAgLy8gInJldHVybiIgdG8gInRocm93IiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy4KICAgICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgICAgICAgfQogICAgICAgICAgfQoKICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gInRocm93IjsKICAgICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcigKICAgICAgICAgICAgIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2QiKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICB9CgogICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpOwoKICAgICAgaWYgKHJlY29yZC50eXBlID09PSAidGhyb3ciKSB7CiAgICAgICAgY29udGV4dC5tZXRob2QgPSAidGhyb3ciOwogICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZzsKICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDsKICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDsKICAgICAgfQoKICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnOwoKICAgICAgaWYgKCEgaW5mbykgewogICAgICAgIGNvbnRleHQubWV0aG9kID0gInRocm93IjsKICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0Iik7CiAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7CiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgIH0KCiAgICAgIGlmIChpbmZvLmRvbmUpIHsKICAgICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeQogICAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuCiAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7CgogICAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS4KICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jOwoKICAgICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgInRocm93IiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlCiAgICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZgogICAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyAibmV4dCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlbgogICAgICAgIC8vICJjb25zdW1lZCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXMKICAgICAgICAvLyAicmV0dXJuIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGUKICAgICAgICAvLyBvdXRlciBnZW5lcmF0b3IuCiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSAicmV0dXJuIikgewogICAgICAgICAgY29udGV4dC5tZXRob2QgPSAibmV4dCI7CiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCQxOwogICAgICAgIH0KCiAgICAgIH0gZWxzZSB7CiAgICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLgogICAgICAgIHJldHVybiBpbmZvOwogICAgICB9CgogICAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aAogICAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLgogICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDsKICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICB9CgogICAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGUKICAgIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC4KICAgIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7CgogICAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgIkdlbmVyYXRvciIpOwoKICAgIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlCiAgICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZQogICAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3IKICAgIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLgogICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuCiAgICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9KTsKCiAgICBkZWZpbmUoR3AsICJ0b1N0cmluZyIsIGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIltvYmplY3QgR2VuZXJhdG9yXSI7CiAgICB9KTsKCiAgICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykgewogICAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9OwoKICAgICAgaWYgKDEgaW4gbG9jcykgewogICAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTsKICAgICAgfQoKICAgICAgaWYgKDIgaW4gbG9jcykgewogICAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdOwogICAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTsKICAgICAgfQoKICAgICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHsKICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307CiAgICAgIHJlY29yZC50eXBlID0gIm5vcm1hbCI7CiAgICAgIGRlbGV0ZSByZWNvcmQuYXJnOwogICAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkOwogICAgfQoKICAgIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHsKICAgICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoCiAgICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb20KICAgICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LgogICAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6ICJyb290IiB9XTsKICAgICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpOwogICAgICB0aGlzLnJlc2V0KHRydWUpOwogICAgfQoKICAgIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkgewogICAgICB2YXIga2V5cyA9IFtdOwogICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7CiAgICAgICAga2V5cy5wdXNoKGtleSk7CiAgICAgIH0KICAgICAga2V5cy5yZXZlcnNlKCk7CgogICAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcAogICAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLgogICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHsKICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHsKICAgICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpOwogICAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHsKICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTsKICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7CiAgICAgICAgICAgIHJldHVybiBuZXh0OwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlCiAgICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXMKICAgICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi4KICAgICAgICBuZXh0LmRvbmUgPSB0cnVlOwogICAgICAgIHJldHVybiBuZXh0OwogICAgICB9OwogICAgfTsKCiAgICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHsKICAgICAgaWYgKGl0ZXJhYmxlKSB7CiAgICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdOwogICAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgewogICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpOwogICAgICAgIH0KCiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSAiZnVuY3Rpb24iKSB7CiAgICAgICAgICByZXR1cm4gaXRlcmFibGU7CiAgICAgICAgfQoKICAgICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHsKICAgICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkgewogICAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7CiAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgewogICAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldOwogICAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7CiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQkMTsKICAgICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTsKCiAgICAgICAgICAgIHJldHVybiBuZXh0OwogICAgICAgICAgfTsKCiAgICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy4KICAgICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9OwogICAgfQogICAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7CgogICAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHsKICAgICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCQxLCBkb25lOiB0cnVlIH07CiAgICB9CgogICAgQ29udGV4dC5wcm90b3R5cGUgPSB7CiAgICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LAoKICAgICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHsKICAgICAgICB0aGlzLnByZXYgPSAwOwogICAgICAgIHRoaXMubmV4dCA9IDA7CiAgICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3MKICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLgogICAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQkMTsKICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTsKICAgICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDsKCiAgICAgICAgdGhpcy5tZXRob2QgPSAibmV4dCI7CiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQkMTsKCiAgICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7CgogICAgICAgIGlmICghc2tpcFRlbXBSZXNldCkgewogICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7CiAgICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6CiAgICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gInQiICYmCiAgICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJgogICAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkgewogICAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQkMTsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfSwKCiAgICAgIHN0b3A6IGZ1bmN0aW9uKCkgewogICAgICAgIHRoaXMuZG9uZSA9IHRydWU7CgogICAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07CiAgICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjsKICAgICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSAidGhyb3ciKSB7CiAgICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZzsKICAgICAgICB9CgogICAgICAgIHJldHVybiB0aGlzLnJ2YWw7CiAgICAgIH0sCgogICAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7CiAgICAgICAgaWYgKHRoaXMuZG9uZSkgewogICAgICAgICAgdGhyb3cgZXhjZXB0aW9uOwogICAgICAgIH0KCiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzOwogICAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkgewogICAgICAgICAgcmVjb3JkLnR5cGUgPSAidGhyb3ciOwogICAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjsKICAgICAgICAgIGNvbnRleHQubmV4dCA9IGxvYzsKCiAgICAgICAgICBpZiAoY2F1Z2h0KSB7CiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssCiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuCiAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gIm5leHQiOwogICAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCQxOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiAhISBjYXVnaHQ7CiAgICAgICAgfQoKICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7CiAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07CiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsKCiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSAicm9vdCIpIHsKICAgICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGUKICAgICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvCiAgICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uCiAgICAgICAgICAgIHJldHVybiBoYW5kbGUoImVuZCIpOwogICAgICAgICAgfQoKICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7CiAgICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCAiY2F0Y2hMb2MiKTsKICAgICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgImZpbmFsbHlMb2MiKTsKCiAgICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTsKICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHsKICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7CiAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkgewogICAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgewogICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7CiAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHsKICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7CiAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5Iik7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0sCgogICAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykgewogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsKICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmCiAgICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksICJmaW5hbGx5TG9jIikgJiYKICAgICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7CiAgICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICBpZiAoZmluYWxseUVudHJ5ICYmCiAgICAgICAgICAgICh0eXBlID09PSAiYnJlYWsiIHx8CiAgICAgICAgICAgICB0eXBlID09PSAiY29udGludWUiKSAmJgogICAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJgogICAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHsKICAgICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGEKICAgICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay4KICAgICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7CiAgICAgICAgfQoKICAgICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTsKICAgICAgICByZWNvcmQudHlwZSA9IHR5cGU7CiAgICAgICAgcmVjb3JkLmFyZyA9IGFyZzsKCiAgICAgICAgaWYgKGZpbmFsbHlFbnRyeSkgewogICAgICAgICAgdGhpcy5tZXRob2QgPSAibmV4dCI7CiAgICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYzsKICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTsKICAgICAgfSwKCiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7CiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAidGhyb3ciKSB7CiAgICAgICAgICB0aHJvdyByZWNvcmQuYXJnOwogICAgICAgIH0KCiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAiYnJlYWsiIHx8CiAgICAgICAgICAgIHJlY29yZC50eXBlID09PSAiY29udGludWUiKSB7CiAgICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnOwogICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICJyZXR1cm4iKSB7CiAgICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7CiAgICAgICAgICB0aGlzLm1ldGhvZCA9ICJyZXR1cm4iOwogICAgICAgICAgdGhpcy5uZXh0ID0gImVuZCI7CiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gIm5vcm1hbCIgJiYgYWZ0ZXJMb2MpIHsKICAgICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7CiAgICAgIH0sCgogICAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHsKICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7CiAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07CiAgICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgewogICAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTsKICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7CiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfSwKCiAgICAgICJjYXRjaCI6IGZ1bmN0aW9uKHRyeUxvYykgewogICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsKICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsKICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykgewogICAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsKICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAidGhyb3ciKSB7CiAgICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7CiAgICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRocm93bjsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvbgogICAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay4KICAgICAgICB0aHJvdyBuZXcgRXJyb3IoImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdCIpOwogICAgICB9LAoKICAgICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHsKICAgICAgICB0aGlzLmRlbGVnYXRlID0gewogICAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksCiAgICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLAogICAgICAgICAgbmV4dExvYzogbmV4dExvYwogICAgICAgIH07CgogICAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gIm5leHQiKSB7CiAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndAogICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLgogICAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQkMTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsOwogICAgICB9CiAgICB9OwoKICAgIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUKICAgIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZQogICAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlCiAgICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLgogICAgcmV0dXJuIGV4cG9ydHM7CgogIH0oCiAgICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0cwogICAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHkKICAgIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemUKICAgIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuCiAgICBtb2R1bGUuZXhwb3J0cyAKICApKTsKCiAgdHJ5IHsKICAgIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7CiAgfSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHsKICAgIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlCiAgICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3QKICAgIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXMKICAgIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGUKICAgIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbAogICAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlCiAgICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZgogICAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGEKICAgIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZQogICAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuCiAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICJvYmplY3QiKSB7CiAgICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTsKICAgIH0gZWxzZSB7CiAgICAgIEZ1bmN0aW9uKCJyIiwgInJlZ2VuZXJhdG9yUnVudGltZSA9IHIiKShydW50aW1lKTsKICAgIH0KICB9CiAgfSk7CgogIHZhciBtYXJ0aW5pID0gbnVsbDsKCiAgZnVuY3Rpb24gZGVjb2RlVGVycmFpbihwYXJhbWV0ZXJzLCB0cmFuc2ZlcmFibGVPYmplY3RzKSB7CiAgICB2YXIgX21hcnRpbmk7CgogICAgdmFyIGltYWdlRGF0YSA9IHBhcmFtZXRlcnMuaW1hZ2VEYXRhLAogICAgICAgIF9wYXJhbWV0ZXJzJHRpbGVTaXplID0gcGFyYW1ldGVycy50aWxlU2l6ZSwKICAgICAgICB0aWxlU2l6ZSA9IF9wYXJhbWV0ZXJzJHRpbGVTaXplID09PSB2b2lkIDAgPyAyNTYgOiBfcGFyYW1ldGVycyR0aWxlU2l6ZSwKICAgICAgICBlcnJvckxldmVsID0gcGFyYW1ldGVycy5lcnJvckxldmVsLAogICAgICAgIGludGVydmFsID0gcGFyYW1ldGVycy5pbnRlcnZhbCwKICAgICAgICBvZmZzZXQgPSBwYXJhbWV0ZXJzLm9mZnNldDsKICAgIHZhciBwaXhlbHMgPSBuZGFycmF5KG5ldyBVaW50OEFycmF5KGltYWdlRGF0YSksIFt0aWxlU2l6ZSwgdGlsZVNpemUsIDRdLCBbNCwgNCAqIHRpbGVTaXplLCAxXSwgMCk7IC8vIFRpbGUgc2l6ZSBtdXN0IGJlIG1haW50YWluZWQgdGhyb3VnaCB0aGUgbGlmZSBvZiB0aGUgd29ya2VyCgogICAgKF9tYXJ0aW5pID0gbWFydGluaSkgIT09IG51bGwgJiYgX21hcnRpbmkgIT09IHZvaWQgMCA/IF9tYXJ0aW5pIDogbWFydGluaSA9IG5ldyBNYXJ0aW5pKHRpbGVTaXplICsgMSk7CiAgICB2YXIgdGVycmFpbiA9IG1hcGJveFRlcnJhaW5Ub0dyaWQocGl4ZWxzLCBpbnRlcnZhbCwgb2Zmc2V0KTsKICAgIHZhciB0aWxlID0gbWFydGluaS5jcmVhdGVUaWxlKHRlcnJhaW4pOyAvLyBnZXQgYSBtZXNoICh2ZXJ0aWNlcyBhbmQgdHJpYW5nbGVzIGluZGljZXMpIGZvciBhIDEwbSBlcnJvcgoKICAgIHZhciBtZXNoID0gdGlsZS5nZXRNZXNoKGVycm9yTGV2ZWwsIHBhcmFtZXRlcnMubWF4TGVuZ3RoKTsKICAgIHJldHVybiBjcmVhdGVRdWFudGl6ZWRNZXNoRGF0YSh0aWxlLCBtZXNoLCB0aWxlU2l6ZSk7CiAgfQoKICBzZWxmLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtc2cpIHsKICAgIHZhciBfbXNnJGRhdGEgPSBtc2cuZGF0YSwKICAgICAgICBpZCA9IF9tc2ckZGF0YS5pZCwKICAgICAgICBwYXlsb2FkID0gX21zZyRkYXRhLnBheWxvYWQ7CiAgICBpZiAoaWQgPT0gbnVsbCkgcmV0dXJuOwogICAgdmFyIG9iamVjdHMgPSBbXTsKICAgIHZhciByZXMgPSBudWxsOwoKICAgIHRyeSB7CiAgICAgIHJlcyA9IGRlY29kZVRlcnJhaW4ocGF5bG9hZCk7CiAgICAgIG9iamVjdHMucHVzaChyZXMuaW5kaWNlcy5idWZmZXIpOwogICAgICBvYmplY3RzLnB1c2gocmVzLnF1YW50aXplZFZlcnRpY2VzLmJ1ZmZlcik7CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgIGlkOiBpZCwKICAgICAgICBwYXlsb2FkOiByZXMKICAgICAgfSwgb2JqZWN0cyk7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQ6IGlkLAogICAgICAgIGVycjogZXJyLnRvU3RyaW5nKCkKICAgICAgfSk7CiAgICB9IGZpbmFsbHkgewogICAgICByZXMgPSBudWxsOwogICAgICBvYmplY3RzID0gbnVsbDsKICAgIH0KICB9OwoKICBleHBvcnRzLmRlY29kZVRlcnJhaW4gPSBkZWNvZGVUZXJyYWluOwoKICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pOwoKICByZXR1cm4gZXhwb3J0czsKCn0pKHt9KTsKCg==', null, false);
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
function mapboxTerrainToGrid(png, interval, offset) {
  var _interval, _offset;

  // maybe we should do this on the GPU using REGL?
  // but that would require GPU -> CPU -> GPU
  var gridSize = png.shape[0] + 1;
  var terrain = new Float32Array(gridSize * gridSize);
  var tileSize = png.shape[0];
  interval = (_interval = interval) !== null && _interval !== void 0 ? _interval : 0.1;
  offset = (_offset = offset) !== null && _offset !== void 0 ? _offset : -10000; // decode terrain values

  for (var y = 0; y < tileSize; y++) {
    for (var x = 0; x < tileSize; x++) {
      var yc = y;
      var r = png.get(x, yc, 0);
      var g = png.get(x, yc, 1);
      var b = png.get(x, yc, 2);
      var a = png.get(x, yc, 3);
      terrain[y * gridSize + x] = a < 255 ? 0 : r * 256 * 256 * interval + g * 256.0 * interval + b * interval + offset;
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

var martini = null;

function decodeTerrain(parameters, transferableObjects) {
  var _martini;

  var imageData = parameters.imageData,
      _parameters$tileSize = parameters.tileSize,
      tileSize = _parameters$tileSize === void 0 ? 256 : _parameters$tileSize,
      errorLevel = parameters.errorLevel,
      interval = parameters.interval,
      offset = parameters.offset;
  var pixels = ndarray(new Uint8Array(imageData), [tileSize, tileSize, 4], [4, 4 * tileSize, 1], 0); // Tile size must be maintained through the life of the worker

  (_martini = martini) !== null && _martini !== void 0 ? _martini : martini = new Martini(tileSize + 1);
  var terrain = mapboxTerrainToGrid(pixels, interval, offset);
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
    var _opts$interval, _opts$offset, _opts$maxWorkers, _opts$detailScalar, _opts$minimumErrorLev, _opts$ellipsoid;

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

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "offset", void 0);

    _defineProperty(this, "RADIUS_SCALAR", 1.0);

    //this.martini = new Martini(257);
    this.resource = opts.resource;
    this.interval = (_opts$interval = opts.interval) !== null && _opts$interval !== void 0 ? _opts$interval : 0.1;
    this.offset = (_opts$offset = opts.offset) !== null && _opts$offset !== void 0 ? _opts$offset : -10000;
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
        var err, _this$resource, tileSize, getTilePixels, px, pixelData, tileRect, maxLength, params, res, v;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Something wonky about our tiling scheme, perhaps
                // 12/2215/2293 @2x
                //const url = `https://a.tiles.mapbox.com/v4/mapbox.terrain-rgb/${z}/${x}/${y}${hires}.${this.format}?access_token=${this.accessToken}`;
                err = this.getErrorLevel(z);
                _context.prev = 1;
                _this$resource = this.resource, tileSize = _this$resource.tileSize, getTilePixels = _this$resource.getTilePixels;
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
                  interval: this.interval,
                  offset: this.offset
                };

                if (!(this.workerFarm != null)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 13;
                return this.workerFarm.scheduleTask(params, [pixelData.buffer]);

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
                console.log(_context.t0); // return undefined

                v = Math.max(32 - 4 * z, 4);
                return _context.abrupt("return", this.emptyHeightmap(v));

              case 27:
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

exports.DefaultHeightmapResource = DefaultHeightmapResource;
exports.MapboxTerrainResource = MapboxTerrainResource;
exports.MartiniTerrainProvider = MartiniTerrainProvider;
exports["default"] = MartiniTerrainProvider;
//# sourceMappingURL=index.js.map
