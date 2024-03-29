! function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, n.r = function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 19)
}([function(e, t, n) {
  "use strict";
  n.r(t),
    function(e) {
      var r = n(7),
        o = setTimeout;

      function i() {}

      function u(e) {
        if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this)
      }

      function a(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, u._immediateFn(function() {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var r;
            try {
              r = n(e._value)
            } catch (e) {
              return void s(t.promise, e)
            }
            c(t.promise, r)
          } else(1 === e._state ? c : s)(t.promise, e._value)
        })) : e._deferreds.push(t)
      }

      function c(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = t.then;
            if (t instanceof u) return e._state = 3, e._value = t, void l(e);
            if ("function" == typeof n) return void f(function(e, t) {
              return function() {
                e.apply(t, arguments)
              }
            }(n, t), e)
          }
          e._state = 1, e._value = t, l(e)
        } catch (t) {
          s(e, t)
        }
      }

      function s(e, t) {
        e._state = 2, e._value = t, l(e)
      }

      function l(e) {
        2 === e._state && 0 === e._deferreds.length && u._immediateFn(function() {
          e._handled || u._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
        e._deferreds = null
      }

      function f(e, t) {
        var n = !1;
        try {
          e(function(e) {
            n || (n = !0, c(t, e))
          }, function(e) {
            n || (n = !0, s(t, e))
          })
        } catch (e) {
          if (n) return;
          n = !0, s(t, e)
        }
      }
      u.prototype.catch = function(e) {
        return this.then(null, e)
      }, u.prototype.then = function(e, t) {
        var n = new this.constructor(i);
        return a(this, new function(e, t, n) {
          this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }(e, t, n)), n
      }, u.prototype.finally = r.a, u.all = function(e) {
        return new u(function(t, n) {
          if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
          var r = Array.prototype.slice.call(e);
          if (0 === r.length) return t([]);
          var o = r.length;

          function i(e, u) {
            try {
              if (u && ("object" == typeof u || "function" == typeof u)) {
                var a = u.then;
                if ("function" == typeof a) return void a.call(u, function(t) {
                  i(e, t)
                }, n)
              }
              r[e] = u, 0 == --o && t(r)
            } catch (e) {
              n(e)
            }
          }
          for (var u = 0; u < r.length; u++) i(u, r[u])
        })
      }, u.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === u ? e : new u(function(t) {
          t(e)
        })
      }, u.reject = function(e) {
        return new u(function(t, n) {
          n(e)
        })
      }, u.race = function(e) {
        return new u(function(t, n) {
          for (var r = 0, o = e.length; r < o; r++) e[r].then(t, n)
        })
      }, u._immediateFn = "function" == typeof e && function(t) {
        e(t)
      } || function(e) {
        o(e, 0)
      }, u._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
      }, t.default = u
    }.call(this, n(18).setImmediate)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ErrorReporter = t.AssetComposerError = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = n(2);

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var u = {
    accessToken: "183d55a35b5d4129abfb303bca36be17",
    endpoint: "https://rollbar-us.zendesk.com/api/1/item/",
    captureUncaught: !1,
    captureUnhandledRejections: !1,
    payload: {
      environment: "production"
    }
  };
  t.AssetComposerError = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    i(this, e), this.message = t, this.props = n, this.error = Error(this.message), this.send = r
  }, t.ErrorReporter = function() {
    function e(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      i(this, e), this.win = t, this.useConsole = n, this.errorReportingEnabled = this.getErrorReportingEnabled(), this.rollbarClientLoadedInternally = !1, this.errorLoadingRollbar = !1, this.rollbarInstance = null, this.reportCallQueue = []
    }
    return r(e, [{
      key: "report",
      value: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this.useConsole || !r ? console.error(t) : this.reportToRollbar(e, t, n)
      }
    }, {
      key: "flushErrors",
      value: function() {
        var e = this;
        this.rollbarInstance = new this.win.rollbar(u), this.rollbarClientLoadedInternally = !0, this.reportCallQueue.forEach(function(t) {
          e.rollbarInstance.error(t.msg, t.error, t.extraData)
        }), this.reportCallQueue = []
      }
    }, {
      key: "reportToRollbar",
      value: function(e, t, n) {
        var r = this;
        if (!this.errorLoadingRollbar && this.errorReportingEnabled) {
          var i = Boolean(this.win.rollbar),
            u = {
              msg: e,
              error: t,
              extraData: n
            };
          if (this.rollbarClientLoadedInternally) this.rollbarInstance.error(e, t, n);
          else if (i) try {
            this.reportCallQueue.push(u), this.flushErrors()
          } catch (e) {
            this.errorLoadingRollbar = !0
          } else this.reportCallQueue.length > 0 ? this.reportCallQueue.push(u) : (this.reportCallQueue.push(u), (0, o.loadScript)("https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.4.1/rollbar.noconflict.umd.min.js", function(e) {
            e ? r.errorLoadingRollbar = !0 : r.flushErrors()
          }))
        }
      }
    }, {
      key: "getErrorReportingEnabled",
      value: function() {
        return !this.win.zESettings || void 0 === this.win.zESettings.errorReporting || Boolean(this.win.zESettings.errorReporting)
      }
    }]), e
  }()
}, function(e, t, n) {
  "use strict";

  function r(e) {
    var t = document.createElement("a");
    return t.href = e, t.search.split("?")[1] || ""
  }
  e.exports = {
    getQueryParamsString: r,
    parseUrlParams: function(e) {
      var t = r(e);
      return "" === t ? {} : t.split("&").reduce(function(e, t) {
        var n = t.split("=");
        return e[n[0]] = decodeURIComponent(n[1]), e
      }, {})
    },
    loadScript: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
        n = document.createElement("script");
      n.type = "text/javascript", n.onerror = function() {
        t(new Error("Script failed to load"))
      }, n.readyState ? n.onreadystatechange = function() {
        "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
      } : n.onload = function() {
        t()
      }, n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Snippet = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(0)),
    i = n(1);
  t.Snippet = function() {
    function e(t) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.win = t, this.doc = t.document
    }
    return r(e, [{
      key: "parentDocumentReady",
      value: function() {
        var e = this;
        return new o.default(function(t, n) {
          var r = e.getParentWindow().document;
          "loading" !== r.readyState && r.body ? t() : r.addEventListener("DOMContentLoaded", function() {
            r.body ? t() : n(new i.AssetComposerError("host page document.body not available"))
          })
        })
      }
    }, {
      key: "getKey",
      value: function() {
        return new o.default(function(e, t) {
          return t(new i.AssetComposerError("Key is missing from snippet", {}, !1))
        })
      }
    }, {
      key: "getZEQueue",
      value: function() {
        return null
      }
    }, {
      key: "getParentWindow",
      value: function() {
        return this.win
      }
    }]), e
  }()
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(e) {
    return new r.default(function(t, n) {
      var r = new XMLHttpRequest;
      r.open("GET", e, !0), r.responseType = "json", r.onload = function() {
        if (r.status === o) {
          var e = r.response,
            i = "string" == typeof e ? JSON.parse(e) : e;
          t(i)
        } else n(Error(r.statusText))
      }, r.onerror = function() {
        n(Error("Network error"))
      }, r.send()
    })
  };
  var r = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(n(0));
  var o = 200
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.COMPOSE_MOCK_RESPONSE = {}, t.COMPOSE_MOCK_ZOPIM_RESPONSE = {}, t.PRODUCT_MOCK_RESPONSES = {}
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  "use strict";
  t.a = function(e) {
    var t = this.constructor;
    return this.then(function(n) {
      return t.resolve(e()).then(function() {
        return n
      })
    }, function(n) {
      return t.resolve(e()).then(function() {
        return t.reject(n)
      })
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ZopimChatSnippet = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(0)),
    i = n(3),
    u = n(2);
  t.ZopimChatSnippet = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, i.Snippet), r(t, [{
      key: "getKey",
      value: function() {
        var e = this;
        return new o.default(function(n, r) {
          return n("zopim_chat/" + (0, u.getQueryParamsString)(t.getScriptSrc(e.win)))
        })
      }
    }], [{
      key: "getScriptSrc",
      value: function(e) {
        if (e.$zopim && e.$zopim.s) return e.$zopim.s.src;
        for (var t = document.getElementsByTagName("script"), n = /.*zopim.(com|net|org)\//, r = void 0, o = 0, i = t.length; o < i; o++)
          if (r = t[o].src || "", n.test(r)) return r
      }
    }, {
      key: "isSnippetPresent",
      value: function(e) {
        return !!t.getScriptSrc(e)
      }
    }]), t
  }()
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.WebWidgetNewSnippet = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(0)),
    i = n(3),
    u = n(2),
    a = n(1);
  t.WebWidgetNewSnippet = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, i.Snippet), r(t, [{
      key: "getKey",
      value: function() {
        var e = this;
        return new o.default(function(t, n) {
          var r = e._getScript(e.win.zE);
          if (r) {
            var o = (0, u.parseUrlParams)(r.src);
            if (o && o.key) return t(o.key)
          }
          return n(new a.AssetComposerError("Key is missing from snippet", {}, !1))
        })
      }
    }, {
      key: "getZEQueue",
      value: function() {
        return this.win.zE._
      }
    }, {
      key: "_getScript",
      value: function(e) {
        var n = t.isSnippetPresent(this.win);
        return n || (e && e.s ? e.s : void 0)
      }
    }], [{
      key: "isSnippetPresent",
      value: function(e) {
        return e.document.getElementById("ze-snippet")
      }
    }]), t
  }()
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.WebWidgetOldSnippet = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = c(n(4)),
    i = c(n(0)),
    u = n(3),
    a = n(1);

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.WebWidgetOldSnippet = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, u.Snippet), r(t, [{
      key: "getKey",
      value: function() {
        var e = this;
        return new i.default(function(t, n) {
          var r = e.doc.zendeskHost;
          return r ? e._isHostMapped(r) ? (0, o.default)("https://" + r + "/embeddable/zendesk_host").then(function(e) {
            return t("web_widget/" + e.zendesk_host)
          }).catch(function(e) {
            return n(new a.AssetComposerError(e.message))
          }) : t("web_widget/" + r) : n(Error("Zendesk host is not defined"))
        })
      }
    }, {
      key: "getZEQueue",
      value: function() {
        return this.doc.zEQueue
      }
    }, {
      key: "getParentWindow",
      value: function() {
        return this.win.parent
      }
    }, {
      key: "_isHostMapped",
      value: function(e) {
        return -1 === e.indexOf(".zendesk.com") && -1 === e.indexOf(".zendesk-staging.com")
      }
    }]), t
  }()
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.setUpSnippet = function(e) {
    return o.WebWidgetNewSnippet.isSnippetPresent(e) ? new o.WebWidgetNewSnippet(e) : e.document.zendeskHost && e.document.zEQueue ? new r.WebWidgetOldSnippet(e) : i.ZopimChatSnippet.isSnippetPresent(e) ? new i.ZopimChatSnippet(e) : new o.WebWidgetNewSnippet(e)
  };
  var r = n(10),
    o = n(9),
    i = n(8)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ZopimChatLoader = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(0)),
    i = n(2);
  t.ZopimChatLoader = function() {
    function e(t, n) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.zopimKey = t, this.win = n, this.doc = n.document
    }
    return r(e, [{
      key: "getProductAssets",
      value: function() {
        var e = "https://v2.zopim.com/w?" + this.zopimKey;
        return o.default.resolve({
          zopimSrc: e
        })
      }
    }, {
      key: "load",
      value: function(e) {
        (0, i.loadScript)(e.zopimSrc)
      }
    }]), e
  }()
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ProductIframe = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(0)),
    i = n(1);
  t.ProductIframe = function() {
    function e(t, n) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.name = t.name, this.id = t.id, this.features = t.features, this.win = n, this.doc = n.document, this.iframeElement = null
    }
    return r(e, [{
      key: "ready",
      value: function() {
        var e = this;
        return new o.default(function(t, n) {
          e.iframeElement = e.createIframeElement(), e.iframeElement.addEventListener("load", function() {
            var r = e.iframeElement.contentWindow;
            r && r.document ? t(r.document) : n(e.error())
          }), e.iframeElement.src = "about:blank", e.doc.body.appendChild(e.iframeElement)
        })
      }
    }, {
      key: "injectMetadata",
      value: function(e, t) {
        e && (e.zendesk = function(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }({}, this.name, {
          id: this.id,
          features: this.features
        }), e.zEQueue = t)
      }
    }, {
      key: "injectAssets",
      value: function(e, t) {
        var n = this;
        if (e) {
          var r = e.getElementsByTagName("head")[0];
          t.scripts.forEach(function(t) {
            r.appendChild(n.createScriptElement(e, t.src))
          })
        }
      }
    }, {
      key: "createIframeElement",
      value: function() {
        var e = this.doc.createElement("iframe");
        return e.dataset.product = this.name, e.title = "No content", e.role = "presentation", e.tabIndex = -1, e.setAttribute("aria-hidden", !0), e.style.cssText = "width: 0; height: 0; border: 0; position: absolute; top: -9999px", e
      }
    }, {
      key: "createScriptElement",
      value: function(e, t) {
        if (!e) return null;
        var n = e.createElement("script");
        return n.type = "text/javascript", n.src = t, n
      }
    }, {
      key: "error",
      value: function() {
        var e = {
          product: this.name,
          id: this.id,
          features: this.features
        };
        return new i.AssetComposerError("iframe document not available to load product", e)
      }
    }]), e
  }()
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ProductLoader = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = s(n(4)),
    i = s(n(0)),
    u = n(1),
    a = n(5),
    c = n(13);

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.ProductLoader = function() {
    function e(t, n) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.product = t, this.productIframe = new c.ProductIframe(this.product, n), this.composeUrl = decodeURI(t.url) + "&use_json=true"
    }
    return r(e, [{
      key: "getProductAssets",
      value: function(e) {
        var t = this;
        return new i.default(function(n, r) {
          e ? n(a.PRODUCT_MOCK_RESPONSES[t.product.name].assets) : (0, o.default)(t.composeUrl).then(function(e) {
            var t = e.assets;
            return n(t)
          }).catch(function() {
            return r(t.fetchProductError())
          })
        })
      }
    }, {
      key: "load",
      value: function(e, t) {
        var n = this;
        return this.productIframe.ready().then(function(r) {
          n.productIframe.injectMetadata(r, t), n.productIframe.injectAssets(r, e)
        }).catch(function() {
          return i.default.reject(n.loadProductError())
        })
      }
    }, {
      key: "fetchProductError",
      value: function() {
        var e = this.product,
          t = {
            product: e.name,
            id: e.id,
            features: e.features
          };
        return new u.AssetComposerError("compose product request failed", t, !1)
      }
    }, {
      key: "loadProductError",
      value: function() {
        var e = this.product,
          t = {
            product: e.name,
            id: e.id,
            features: e.features
          };
        return new u.AssetComposerError("failed to load product", t)
      }
    }]), e
  }()
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Composer = void 0;
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = l(n(4)),
    i = l(n(0)),
    u = n(1),
    a = n(5),
    c = n(14),
    s = n(12);

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.Composer = function() {
    function e(t) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.snippet = t
    }
    return r(e, [{
      key: "getProducts",
      value: function(e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new i.default(function(r, i) {
          var u = t.snippet.getParentWindow();
          n ? (u.zEACLoaded = !0, u.$zopim ? r(a.COMPOSE_MOCK_ZOPIM_RESPONSE.products) : r(a.COMPOSE_MOCK_RESPONSE.products)) : (0, o.default)("https://ekr.zdassets.com/compose/" + e).then(function(e) {
            var t = e.products;
            u.zEACLoaded = !0, r(t)
          }).catch(function() {
            return i(t.error(e))
          })
        })
      }
    }, {
      key: "loadProducts",
      value: function(e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e.map(function(e) {
          return e.getProductAssets(n).then(function(n) {
            return e.load(n, t.snippet.getZEQueue())
          }).catch(function(e) {
            return i.default.reject(e)
          })
        })
      }
    }, {
      key: "getProductLoaders",
      value: function(e) {
        var t = this.snippet.getParentWindow();
        return e.map(function(e) {
          return "zopim_chat" === e.name ? new s.ZopimChatLoader(e.id, t) : new c.ProductLoader(e, t)
        })
      }
    }, {
      key: "error",
      value: function(e) {
        return new u.AssetComposerError("compose request failed", {
          key: e
        }, !1)
      }
    }]), e
  }()
}, function(e, t) {
  var n, r, o = e.exports = {};

  function i() {
    throw new Error("setTimeout has not been defined")
  }

  function u() {
    throw new Error("clearTimeout has not been defined")
  }

  function a(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }! function() {
    try {
      n = "function" == typeof setTimeout ? setTimeout : i
    } catch (e) {
      n = i
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : u
    } catch (e) {
      r = u
    }
  }();
  var c, s = [],
    l = !1,
    f = -1;

  function d() {
    l && c && (l = !1, c.length ? s = c.concat(s) : f = -1, s.length && p())
  }

  function p() {
    if (!l) {
      var e = a(d);
      l = !0;
      for (var t = s.length; t;) {
        for (c = s, s = []; ++f < t;) c && c[f].run();
        f = -1, t = s.length
      }
      c = null, l = !1,
        function(e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
          try {
            r(e)
          } catch (t) {
            try {
              return r.call(null, e)
            } catch (t) {
              return r.call(this, e)
            }
          }
        }(e)
    }
  }

  function h(e, t) {
    this.fun = e, this.array = t
  }

  function m() {}
  o.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    s.push(new h(e, t)), 1 !== s.length || l || a(p)
  }, h.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
    return []
  }, o.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, o.cwd = function() {
    return "/"
  }, o.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, o.umask = function() {
    return 0
  }
}, function(e, t, n) {
  (function(e, t) {
    ! function(e, n) {
      "use strict";
      if (!e.setImmediate) {
        var r, o = 1,
          i = {},
          u = !1,
          a = e.document,
          c = Object.getPrototypeOf && Object.getPrototypeOf(e);
        c = c && c.setTimeout ? c : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
          t.nextTick(function() {
            l(e)
          })
        } : function() {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
              n = e.onmessage;
            return e.onmessage = function() {
              t = !1
            }, e.postMessage("", "*"), e.onmessage = n, t
          }
        }() ? function() {
          var t = "setImmediate$" + Math.random() + "$",
            n = function(n) {
              n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && l(+n.data.slice(t.length))
            };
          e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), r = function(n) {
            e.postMessage(t + n, "*")
          }
        }() : e.MessageChannel ? function() {
          var e = new MessageChannel;
          e.port1.onmessage = function(e) {
            l(e.data)
          }, r = function(t) {
            e.port2.postMessage(t)
          }
        }() : a && "onreadystatechange" in a.createElement("script") ? function() {
          var e = a.documentElement;
          r = function(t) {
            var n = a.createElement("script");
            n.onreadystatechange = function() {
              l(t), n.onreadystatechange = null, e.removeChild(n), n = null
            }, e.appendChild(n)
          }
        }() : r = function(e) {
          setTimeout(l, 0, e)
        }, c.setImmediate = function(e) {
          "function" != typeof e && (e = new Function("" + e));
          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
          var u = {
            callback: e,
            args: t
          };
          return i[o] = u, r(o), o++
        }, c.clearImmediate = s
      }

      function s(e) {
        delete i[e]
      }

      function l(e) {
        if (u) setTimeout(l, 0, e);
        else {
          var t = i[e];
          if (t) {
            u = !0;
            try {
              ! function(e) {
                var t = e.callback,
                  r = e.args;
                switch (r.length) {
                  case 0:
                    t();
                    break;
                  case 1:
                    t(r[0]);
                    break;
                  case 2:
                    t(r[0], r[1]);
                    break;
                  case 3:
                    t(r[0], r[1], r[2]);
                    break;
                  default:
                    t.apply(n, r)
                }
              }(t)
            } finally {
              s(e), u = !1
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === e ? this : e : self)
  }).call(this, n(6), n(16))
}, function(e, t, n) {
  (function(e) {
    var r = void 0 !== e && e || "undefined" != typeof self && self || window,
      o = Function.prototype.apply;

    function i(e, t) {
      this._id = e, this._clearFn = t
    }
    t.setTimeout = function() {
      return new i(o.call(setTimeout, r, arguments), clearTimeout)
    }, t.setInterval = function() {
      return new i(o.call(setInterval, r, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function(e) {
      e && e.close()
    }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
      this._clearFn.call(r, this._id)
    }, t.enroll = function(e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function(e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function(e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function() {
        e._onTimeout && e._onTimeout()
      }, t))
    }, n(17), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
  }).call(this, n(6))
}, function(e, t, n) {
  "use strict";
  var r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(0)),
    o = n(15),
    i = n(11);
  var u = new(n(1).ErrorReporter)(window, !1);
  try {
    ! function() {
      if (!window.zEACLoaded) {
        var e = (0, i.setUpSnippet)(window),
          t = new o.Composer(e);
        e.parentDocumentReady().then(function() {
          return e.getKey()
        }).then(function(e) {
          return t.getProducts(e, !1)
        }).then(function(e) {
          return r.default.all(t.loadProducts(t.getProductLoaders(e), !1))
        }).catch(function(e) {
          return u.report(e.message, e.error, e.props, e.send)
        })
      }
    }()
  } catch (e) {
    u.report(e.message, e)
  }
}]);
