! function (e) {
    debugger
    var t = {};

    function i(n) {
        debugger
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) i.d(n, a, function (t) {
                return e[t]
            }.bind(null, a));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 85)
}([function (e, t, i) {
    "use strict";
    var n = i(81),
        a = i.n(n),
        o = i(11),
        r = i.n(o),
        s = i(12),
        c = i.n(s),
        d = i(1),
        u = i.n(d),
        p = i(51),
        l = i.n(p),
        h = {
            redpacket: ["https://hdggcdn.bayimob.com/hdggstatic/hdgg_award-button-2.png", "https://hdggcdn.bayimob.com/hdggstatic/hdgg_award-button-1.png", "https://hdggcdn.bayimob.com/hdggstatic/hdgg_award-bottom-bg.png", "https://hdggcdn.bayimob.com/hdggstatic/hdgg_redpack_yanhua2.png", "https://hdggcdn.bayimob.com/hdggstatic/hdgg_redpack_yanhua1.png", "https://hdggcdn.bayimob.com/hdggstatic/hdgg_award-top-bg.png"]
        },
        f = function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                i = window.location.search.substr(1).match(t);
            return i ? decodeURIComponent(i[2]) : ""
        },
        m = function (e) {
            return new u.a(function (t, i) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.src = e;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(n, a), n.onload = function () {
                    t()
                }, n.onerror = function () {
                    i()
                }
            })
        },
        g = !0;
    try {
        window.localStorage.setItem("storageTest", "storageTest"), window.localStorage.removeItem("storageTest")
    } catch (e) {
        g = !1
    }
    var y = {
            set: function (e, t) {
                var i = Object.prototype.toString.apply(t);
                t = /String/.test(i) ? t : /Object/.test(i) || /Array/.test(i) ? 0 == c()(t).length ? "" : r()(t) : /Number/.test(i) ? t.toString() : "", g && window.localStorage.setItem(e, t)
            },
            get: function (e) {
                var t = "";
                return g && (t = window.localStorage.getItem(e)), isNaN(Number(t)) || /[^0-9]+/.test(t) || "" === t || (t = Number(t)), (/^{.+}$/.test(t) || /^\[.+\]$/.test(t)) && (t = JSON.parse(t)), t
            },
            remove: function (e) {
                g && window.localStorage.removeItem(e)
            },
            clear: function () {
                g && window.localStorage.clear()
            }
        },
        v = {
            set: function (e, t) {
                window.sessionStorage.setItem(e, t)
            },
            get: function (e) {
                return window.sessionStorage.getItem(e)
            },
            remove: function (e) {
                window.sessionStorage.removeItem(e)
            },
            clear: function () {
                window.sessionStorage.clear()
            }
        },
        w = function () {
            var e = window.navigator.userAgent,
                t = 0;
            return /Android/i.test(e) ? t = 1 : /iPhone|iPad|iPod/i.test(e) && (t = 2), t
        }(),
        k = function () {
            try {
                return !!f("openid") || !!window.sessionStorage.getItem("openid") || "miniprogram" === window.__wxjs_environment
            } catch (e) {
                return !1
            }
        },
        b = function () {
            var e = navigator.userAgent,
                t = 0;
            return k() ? t = 12 : /QQ/gi.test(e) ? t = /MicroMessenger/gi.test(e) ? 1 : 2 : /MicroMessenger/gi.test(e) ? t = 1 : /alipay/gi.test(e) ? t = 11 : /uc/gi.test(e) ? t = 4 : /liebao/.test(e) ? t = 9 : /360/.test(e) ? t = 5 : /MetaSr/.test(e) ? t = 7 : /firefox/gi.test(e) ? t = 6 : /baidu/gi.test(e) ? t = 8 : /safari/gi.test(e) && (t = /chrome/.test(e) ? 3 : 10), t
        }();
    t.a = {
        getUrlParam: f,
        getScript: m,
        dateFormat: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm:ss";
            if (!e) return "";
            e = Number(e);
            var i = new Date(e),
                n = {
                    "M+": i.getMonth() + 1,
                    "d+": i.getDate(),
                    "h+": i.getHours(),
                    "m+": i.getMinutes(),
                    "s+": i.getSeconds(),
                    "q+": Math.floor((i.getMonth() + 3) / 3),
                    "S+": i.getMilliseconds()
                };
            for (var a in /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length))), n) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[a] : ("00" + n[a]).substr(("" + n[a]).length)));
            return t
        },
        cookies: l.a,
        tomorrowDate: function (e) {
            return new Date("Fri, 31 Dec 9999 15:59:59 GMT")
        },
        storage: y,
        mobileSystem: w,
        browserType: b,
        preloadImage: function (e, t) {
            if (e && ((new Image).src = e), t) {
                var i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var r, s = a()(h[t]); !(i = (r = s.next()).done); i = !0) {
                        var c = r.value;
                        (new Image).src = c
                    }
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (n) throw o
                    }
                }
            }
        },
        mpEnv: k,
        getWxMiniProgramSDK: function () {
            return new u.a(function (e, t) {
                window.wx && window.wx.miniProgram ? e(window.wx) : m("https://res.wx.qq.com/open/js/jweixin-1.3.2.js").then(function (t) {
                    e(window.wx)
                }).catch(function (t) {
                    e()
                })
            })
        },
        gamePath: function () {
            var e = "";
            try {
                e = (e = (window.location.pathname || "").substr(1)).replace("/index.html", "")
            } catch (e) {}
            return e
        }(),
        session: v,
        supportStorage: g,
        supportSession: !0,
        randomRange: function (e, t) {
            for (var i = "", n = t ? Math.round(Math.random() * (t - e)) + e : e, a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], o = 0; o < n; o++) i += a[Math.round(Math.random() * (a.length - 1))];
            return i
        },
        copyUrl2: function (e) {
            var t = document.createElement("input");
            t.value = "dkey=" + e, document.body.appendChild(t), t.select(), document.execCommand("Copy"), t.className = "oInput", t.style.display = "none"
        }
    }
}, function (e, t, i) {
    e.exports = {
        default: i(89),
        __esModule: !0
    }
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0, t.default = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n, a = (n = i(53)) && n.__esModule ? n : {
        default: n
    };
    t.default = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, a.default)(e, n.key, n)
            }
        }
        return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }()
}, function (e, t, i) {
    "use strict";
    (function (e) {
        var i = (/127\.0\.0\.1/.test(window.location.href) || /192\.168\./.test(window.location.href), "production"),
            n = "i18n" == e.argv[6] ? e.argv[7] : "zh-cn";
        t.a = {
            ENV: i,
            baseURL: "development" == i ? "https://nobug.doumob.cn/appserver" : ("https://api.clotfun.online", /127\.0\.0\.1/.test(window.location.href) || /192\.168\./.test(window.location.href) || /nobug\.doumob\./.test(window.location.href), "https://api.clotfun.online"),
            staticURL: "..",
            assetURL: "yinni" == n ? "http://sjpcdn.doumob.net" : "https://hdggcdn.bayimob.com",
            entrance: /nobug\.doumob\.cn/.test(window.location.href) ? "/appserver/gameHtml" : "/gameHtml",
            floatIcon: {
                entranceUrl: "lists5",
                entranceImage: "hdgg_zhifubao_entrance.gif",
                entranceAbsoluteUrl: null,
                wechatEntranceType: 2,
                wechatEntranceUrl: "kabao2",
                wechatEntranceImage: "hdgg_zhifubao_entrance.gif",
                wechatEntranceAbsoluteUrl: null
            },
            tiXianIcon: {
                entranceUrl: "yaoshaizi8",
                entranceImage: "tixian.png",
                entranceAbsoluteUrl: null
            },
            times: 5,
            timesEle: "",
            recordEle: "",
            recordStyle: {},
            recordAnimate: !0,
            recordButtonColor: ["#5b10b0", "#fff"],
            rulesEle: "",
            rules: null,
            rem: 20 / 375,
            entranceShow: !0,
            gamecenterShow: !0,
            gamelistShow: !0,
            txEntranceShow: !0,
            zfbProbability: 1,
            noRedpacket: !1,
            alwaysAward: !1,
            slmNumber: 1,
            miniprogramIconShow: !1,
            miniprogramIconImageUrl: "miniprogram_icon_1.gif",
            miniprogramIconPath: "/pages/personalCenter/mine/mine",
            pddCustomDialog: !0,
            quAnDouYao: !0,
            flyTop: !0,
            gameVideo: !1,
            someMedia: !1,
            kefu: !1,
            redEnvelopeShow: !0,
            kefuShow: !1
        }
    }).call(this, i(73))
}, function (e, t, i) {
    e.exports = {
        default: i(124),
        __esModule: !0
    }
}, function (e, t, i) {
    "use strict";
    var n = i(127),
        a = i(128),
        o = i(72);
    e.exports = {
        formats: o,
        parse: a,
        stringify: n
    }
}, function (e, t) {
    var i = e.exports = {
        version: "2.6.0"
    };
    "number" == typeof __e && (__e = i)
}, function (e, t) {
    var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = i)
}, function (e, t, i) {
    var n = i(42)("wks"),
        a = i(31),
        o = i(8).Symbol,
        r = "function" == typeof o;
    (e.exports = function (e) {
        return n[e] || (n[e] = r && o[e] || (r ? o : a)("Symbol." + e))
    }).store = n
}, function (e, t, i) {
    "use strict";
    var n = i(74),
        a = i(133),
        o = Object.prototype.toString;

    function r(e) {
        return "[object Array]" === o.call(e)
    }

    function s(e) {
        return null !== e && "object" == typeof e
    }

    function c(e) {
        return "[object Function]" === o.call(e)
    }

    function d(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), r(e))
                for (var i = 0, n = e.length; i < n; i++) t.call(null, e[i], i, e);
            else
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
    }
    e.exports = {
        isArray: r,
        isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e)
        },
        isBuffer: a,
        isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function (e) {
            return "string" == typeof e
        },
        isNumber: function (e) {
            return "number" == typeof e
        },
        isObject: s,
        isUndefined: function (e) {
            return void 0 === e
        },
        isDate: function (e) {
            return "[object Date]" === o.call(e)
        },
        isFile: function (e) {
            return "[object File]" === o.call(e)
        },
        isBlob: function (e) {
            return "[object Blob]" === o.call(e)
        },
        isFunction: c,
        isStream: function (e) {
            return s(e) && c(e.pipe)
        },
        isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        },
        forEach: d,
        merge: function e() {
            var t = {};

            function i(i, n) {
                "object" == typeof t[n] && "object" == typeof i ? t[n] = e(t[n], i) : t[n] = i
            }
            for (var n = 0, a = arguments.length; n < a; n++) d(arguments[n], i);
            return t
        },
        extend: function (e, t, i) {
            return d(t, function (t, a) {
                e[a] = i && "function" == typeof t ? n(t, i) : t
            }), e
        },
        trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, t, i) {
    e.exports = {
        default: i(131),
        __esModule: !0
    }
}, function (e, t, i) {
    e.exports = {
        default: i(109),
        __esModule: !0
    }
}, function (e, t, i) {
    var n = i(8),
        a = i(7),
        o = i(22),
        r = i(17),
        s = i(19),
        c = function (e, t, i) {
            var d, u, p, l = e & c.F,
                h = e & c.G,
                f = e & c.S,
                m = e & c.P,
                g = e & c.B,
                y = e & c.W,
                v = h ? a : a[t] || (a[t] = {}),
                w = v.prototype,
                k = h ? n : f ? n[t] : (n[t] || {}).prototype;
            for (d in h && (i = t), i)(u = !l && k && void 0 !== k[d]) && s(v, d) || (p = u ? k[d] : i[d], v[d] = h && "function" != typeof k[d] ? i[d] : g && u ? o(p, n) : y && k[d] == p ? function (e) {
                var t = function (t, i, n) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, i)
                        }
                        return new e(t, i, n)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(p) : m && "function" == typeof p ? o(Function.call, p) : p, m && ((v.virtual || (v.virtual = {}))[d] = p, e & c.R && w && !w[d] && r(w, d, p)))
        };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function (e, t, i) {
    var n = i(15),
        a = i(54),
        o = i(37),
        r = Object.defineProperty;
    t.f = i(16) ? Object.defineProperty : function (e, t, i) {
        if (n(e), t = o(t, !0), n(i), a) try {
            return r(e, t, i)
        } catch (e) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
        return "value" in i && (e[t] = i.value), e
    }
}, function (e, t, i) {
    var n = i(18);
    e.exports = function (e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, i) {
    e.exports = !i(20)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, i) {
    var n = i(14),
        a = i(23);
    e.exports = i(16) ? function (e, t, i) {
        return n.f(e, t, a(1, i))
    } : function (e, t, i) {
        return e[t] = i, e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t) {
    var i = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return i.call(e, t)
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, i) {
    var n = i(60),
        a = i(39);
    e.exports = function (e) {
        return n(a(e))
    }
}, function (e, t, i) {
    var n = i(29);
    e.exports = function (e, t, i) {
        if (n(e), void 0 === t) return e;
        switch (i) {
            case 1:
                return function (i) {
                    return e.call(t, i)
                };
            case 2:
                return function (i, n) {
                    return e.call(t, i, n)
                };
            case 3:
                return function (i, n, a) {
                    return e.call(t, i, n, a)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function (e, t) {
    e.exports = !0
}, function (e, t) {
    e.exports = {}
}, function (e, t, i) {
    var n = i(59),
        a = i(43);
    e.exports = Object.keys || function (e) {
        return n(e, a)
    }
}, function (e, t) {
    var i = {}.toString;
    e.exports = function (e) {
        return i.call(e).slice(8, -1)
    }
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = r(i(112)),
        a = r(i(114)),
        o = "function" == typeof a.default && "symbol" == typeof n.default ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : typeof e
        };

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = "function" == typeof a.default && "symbol" === o(n.default) ? function (e) {
        return void 0 === e ? "undefined" : o(e)
    } : function (e) {
        return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(90)(!0);
    i(56)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t,
            i = this._i;
        return i >= t.length ? {
            value: void 0,
            done: !0
        } : (e = n(t, i), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function (e, t) {
    var i = 0,
        n = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + n).toString(36))
    }
}, function (e, t, i) {
    var n = i(14).f,
        a = i(19),
        o = i(9)("toStringTag");
    e.exports = function (e, t, i) {
        e && !a(e = i ? e : e.prototype, o) && n(e, o, {
            configurable: !0,
            value: t
        })
    }
}, function (e, t, i) {
    var n = i(39);
    e.exports = function (e) {
        return Object(n(e))
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n, a = (n = i(151)) && n.__esModule ? n : {
        default: n
    };
    t.default = function (e) {
        if (Array.isArray(e)) {
            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
            return i
        }
        return (0, a.default)(e)
    }
}, function (e, t, i) {
    var n = i(18),
        a = i(8).document,
        o = n(a) && n(a.createElement);
    e.exports = function (e) {
        return o ? a.createElement(e) : {}
    }
}, function (e, t, i) {
    var n = i(18);
    e.exports = function (e, t) {
        if (!n(e)) return e;
        var i, a;
        if (t && "function" == typeof (i = e.toString) && !n(a = i.call(e))) return a;
        if ("function" == typeof (i = e.valueOf) && !n(a = i.call(e))) return a;
        if (!t && "function" == typeof (i = e.toString) && !n(a = i.call(e))) return a;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    var i = Math.ceil,
        n = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : i)(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, i) {
    var n = i(38),
        a = Math.min;
    e.exports = function (e) {
        return e > 0 ? a(n(e), 9007199254740991) : 0
    }
}, function (e, t, i) {
    var n = i(42)("keys"),
        a = i(31);
    e.exports = function (e) {
        return n[e] || (n[e] = a(e))
    }
}, function (e, t, i) {
    var n = i(7),
        a = i(8),
        o = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: n.version,
        mode: i(24) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, i) {
    i(96);
    for (var n = i(8), a = i(17), o = i(25), r = i(9)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var d = s[c],
            u = n[d],
            p = u && u.prototype;
        p && !p[r] && a(p, r, d), o[d] = o.Array
    }
}, function (e, t, i) {
    var n = i(62),
        a = i(9)("iterator"),
        o = i(25);
    e.exports = i(7).getIteratorMethod = function (e) {
        if (null != e) return e[a] || e["@@iterator"] || o[n(e)]
    }
}, function (e, t, i) {
    "use strict";
    var n = i(29);
    e.exports.f = function (e) {
        return new function (e) {
            var t, i;
            this.promise = new e(function (e, n) {
                if (void 0 !== t || void 0 !== i) throw TypeError("Bad Promise constructor");
                t = e, i = n
            }), this.resolve = n(t), this.reject = n(i)
        }(e)
    }
}, function (e, t, i) {
    t.f = i(9)
}, function (e, t, i) {
    var n = i(8),
        a = i(7),
        o = i(24),
        r = i(47),
        s = i(14).f;
    e.exports = function (e) {
        var t = a.Symbol || (a.Symbol = o ? {} : n.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {
            value: r.f(e)
        })
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, i) {
    "use strict";
    (function (t) {
        var n = i(10),
            a = i(135),
            o = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function r(e, t) {
            !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var s, c = {
            adapter: ("undefined" != typeof XMLHttpRequest ? s = i(75) : void 0 !== t && (s = i(75)), s),
            transformRequest: [function (e, t) {
                return a(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function (e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        n.forEach(["delete", "get", "head"], function (e) {
            c.headers[e] = {}
        }), n.forEach(["post", "put", "patch"], function (e) {
            c.headers[e] = n.merge(o)
        }), e.exports = c
    }).call(this, i(73))
}, function (e, t, i) {
    var n, a, o;
    o = function () {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) t[n] = i[n]
            }
            return t
        }
        return function t(i) {
            function n(t, a, o) {
                var r;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof (o = e({
                                path: "/"
                            }, n.defaults, o)).expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
                        }
                        o.expires = o.expires ? o.expires.toUTCString() : "";
                        try {
                            r = JSON.stringify(a), /^[\{\[]/.test(r) && (a = r)
                        } catch (e) {}
                        a = i.write ? i.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var d in o) o[d] && (c += "; " + d, !0 !== o[d] && (c += "=" + o[d]));
                        return document.cookie = t + "=" + a + c
                    }
                    t || (r = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], p = /(%[0-9A-Z]{2})+/g, l = 0; l < u.length; l++) {
                        var h = u[l].split("="),
                            f = h.slice(1).join("=");
                        this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                        try {
                            var m = h[0].replace(p, decodeURIComponent);
                            if (f = i.read ? i.read(f, m) : i(f, m) || f.replace(p, decodeURIComponent), this.json) try {
                                f = JSON.parse(f)
                            } catch (e) {}
                            if (t === m) {
                                r = f;
                                break
                            }
                            t || (r[m] = f)
                        } catch (e) {}
                    }
                    return r
                }
            }
            return n.set = n, n.get = function (e) {
                return n.call(n, e)
            }, n.getJSON = function () {
                return n.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, n.defaults = {}, n.remove = function (t, i) {
                n(t, "", e(i, {
                    expires: -1
                }))
            }, n.withConverter = t, n
        }(function () {})
    }, void 0 === (a = "function" == typeof (n = o) ? n.call(t, i, t, e) : n) || (e.exports = a), e.exports = o()
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n, a = (n = i(53)) && n.__esModule ? n : {
        default: n
    };
    t.default = function (e, t, i) {
        return t in e ? (0, a.default)(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
}, function (e, t, i) {
    e.exports = {
        default: i(87),
        __esModule: !0
    }
}, function (e, t, i) {
    e.exports = !i(16) && !i(20)(function () {
        return 7 != Object.defineProperty(i(36)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {}, function (e, t, i) {
    "use strict";
    var n = i(24),
        a = i(13),
        o = i(57),
        r = i(17),
        s = i(25),
        c = i(91),
        d = i(32),
        u = i(95),
        p = i(9)("iterator"),
        l = !([].keys && "next" in [].keys()),
        h = function () {
            return this
        };
    e.exports = function (e, t, i, f, m, g, y) {
        c(i, t, f);
        var v, w, k, b = function (e) {
                if (!l && e in T) return T[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function () {
                            return new i(this, e)
                        }
                }
                return function () {
                    return new i(this, e)
                }
            },
            S = t + " Iterator",
            _ = "values" == m,
            I = !1,
            T = e.prototype,
            x = T[p] || T["@@iterator"] || m && T[m],
            A = x || b(m),
            C = m ? _ ? b("entries") : A : void 0,
            $ = "Array" == t && T.entries || x;
        if ($ && (k = u($.call(new e))) !== Object.prototype && k.next && (d(k, S, !0), n || "function" == typeof k[p] || r(k, p, h)), _ && x && "values" !== x.name && (I = !0, A = function () {
                return x.call(this)
            }), n && !y || !l && !I && T[p] || r(T, p, A), s[t] = A, s[S] = h, m)
            if (v = {
                    values: _ ? A : b("values"),
                    keys: g ? A : b("keys"),
                    entries: C
                }, y)
                for (w in v) w in T || o(T, w, v[w]);
            else a(a.P + a.F * (l || I), t, v);
        return v
    }
}, function (e, t, i) {
    e.exports = i(17)
}, function (e, t, i) {
    var n = i(15),
        a = i(92),
        o = i(43),
        r = i(41)("IE_PROTO"),
        s = function () {},
        c = function () {
            var e, t = i(36)("iframe"),
                n = o.length;
            for (t.style.display = "none", i(61).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; n--;) delete c.prototype[o[n]];
            return c()
        };
    e.exports = Object.create || function (e, t) {
        var i;
        return null !== e ? (s.prototype = n(e), i = new s, s.prototype = null, i[r] = e) : i = c(), void 0 === t ? i : a(i, t)
    }
}, function (e, t, i) {
    var n = i(19),
        a = i(21),
        o = i(93)(!1),
        r = i(41)("IE_PROTO");
    e.exports = function (e, t) {
        var i, s = a(e),
            c = 0,
            d = [];
        for (i in s) i != r && n(s, i) && d.push(i);
        for (; t.length > c;) n(s, i = t[c++]) && (~o(d, i) || d.push(i));
        return d
    }
}, function (e, t, i) {
    var n = i(27);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == n(e) ? e.split("") : Object(e)
    }
}, function (e, t, i) {
    var n = i(8).document;
    e.exports = n && n.documentElement
}, function (e, t, i) {
    var n = i(27),
        a = i(9)("toStringTag"),
        o = "Arguments" == n(function () {
            return arguments
        }());
    e.exports = function (e) {
        var t, i, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (i = function (e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), a)) ? i : o ? n(t) : "Object" == (r = n(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
}, function (e, t, i) {
    var n = i(15);
    e.exports = function (e, t, i, a) {
        try {
            return a ? t(n(i)[0], i[1]) : t(i)
        } catch (t) {
            var o = e.return;
            throw void 0 !== o && n(o.call(e)), t
        }
    }
}, function (e, t, i) {
    var n = i(25),
        a = i(9)("iterator"),
        o = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (n.Array === e || o[a] === e)
    }
}, function (e, t, i) {
    var n = i(15),
        a = i(29),
        o = i(9)("species");
    e.exports = function (e, t) {
        var i, r = n(e).constructor;
        return void 0 === r || null == (i = n(r)[o]) ? t : a(i)
    }
}, function (e, t, i) {
    var n, a, o, r = i(22),
        s = i(102),
        c = i(61),
        d = i(36),
        u = i(8),
        p = u.process,
        l = u.setImmediate,
        h = u.clearImmediate,
        f = u.MessageChannel,
        m = u.Dispatch,
        g = 0,
        y = {},
        v = function () {
            var e = +this;
            if (y.hasOwnProperty(e)) {
                var t = y[e];
                delete y[e], t()
            }
        },
        w = function (e) {
            v.call(e.data)
        };
    l && h || (l = function (e) {
        for (var t = [], i = 1; arguments.length > i;) t.push(arguments[i++]);
        return y[++g] = function () {
            s("function" == typeof e ? e : Function(e), t)
        }, n(g), g
    }, h = function (e) {
        delete y[e]
    }, "process" == i(27)(p) ? n = function (e) {
        p.nextTick(r(v, e, 1))
    } : m && m.now ? n = function (e) {
        m.now(r(v, e, 1))
    } : f ? (o = (a = new f).port2, a.port1.onmessage = w, n = r(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (n = function (e) {
        u.postMessage(e + "", "*")
    }, u.addEventListener("message", w, !1)) : n = "onreadystatechange" in d("script") ? function (e) {
        c.appendChild(d("script")).onreadystatechange = function () {
            c.removeChild(this), v.call(e)
        }
    } : function (e) {
        setTimeout(r(v, e, 1), 0)
    }), e.exports = {
        set: l,
        clear: h
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function (e, t, i) {
    var n = i(15),
        a = i(18),
        o = i(46);
    e.exports = function (e, t) {
        if (n(e), a(t) && t.constructor === e) return t;
        var i = o.f(e);
        return (0, i.resolve)(t), i.promise
    }
}, function (e, t, i) {
    var n = i(9)("iterator"),
        a = !1;
    try {
        var o = [7][n]();
        o.return = function () {
            a = !0
        }, Array.from(o, function () {
            throw 2
        })
    } catch (e) {}
    e.exports = function (e, t) {
        if (!t && !a) return !1;
        var i = !1;
        try {
            var o = [7],
                r = o[n]();
            r.next = function () {
                return {
                    done: i = !0
                }
            }, o[n] = function () {
                return r
            }, e(o)
        } catch (e) {}
        return i
    }
}, function (e, t, i) {
    var n = i(59),
        a = i(43).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return n(e, a)
    }
}, function (e, t, i) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
        a = function () {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        o = function (e, t) {
            for (var i = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) void 0 !== e[n] && (i[n] = e[n]);
            return i
        };
    e.exports = {
        arrayToObject: o,
        assign: function (e, t) {
            return Object.keys(t).reduce(function (e, i) {
                return e[i] = t[i], e
            }, e)
        },
        compact: function (e) {
            for (var t = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], i = [], n = 0; n < t.length; ++n)
                for (var a = t[n], o = a.obj[a.prop], r = Object.keys(o), s = 0; s < r.length; ++s) {
                    var c = r[s],
                        d = o[c];
                    "object" == typeof d && null !== d && -1 === i.indexOf(d) && (t.push({
                        obj: o,
                        prop: c
                    }), i.push(d))
                }
            return function (e) {
                for (var t; e.length;) {
                    var i = e.pop();
                    if (t = i.obj[i.prop], Array.isArray(t)) {
                        for (var n = [], a = 0; a < t.length; ++a) void 0 !== t[a] && n.push(t[a]);
                        i.obj[i.prop] = n
                    }
                }
                return t
            }(t)
        },
        decode: function (e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "))
            } catch (t) {
                return e
            }
        },
        encode: function (e) {
            if (0 === e.length) return e;
            for (var t = "string" == typeof e ? e : String(e), i = "", n = 0; n < t.length; ++n) {
                var o = t.charCodeAt(n);
                45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? i += t.charAt(n) : o < 128 ? i += a[o] : o < 2048 ? i += a[192 | o >> 6] + a[128 | 63 & o] : o < 55296 || o >= 57344 ? i += a[224 | o >> 12] + a[128 | o >> 6 & 63] + a[128 | 63 & o] : (n += 1, o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(n)), i += a[240 | o >> 18] + a[128 | o >> 12 & 63] + a[128 | o >> 6 & 63] + a[128 | 63 & o])
            }
            return i
        },
        isBuffer: function (e) {
            return null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        isRegExp: function (e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        },
        merge: function e(t, i, a) {
            if (!i) return t;
            if ("object" != typeof i) {
                if (Array.isArray(t)) t.push(i);
                else {
                    if ("object" != typeof t) return [t, i];
                    (a.plainObjects || a.allowPrototypes || !n.call(Object.prototype, i)) && (t[i] = !0)
                }
                return t
            }
            if ("object" != typeof t) return [t].concat(i);
            var r = t;
            return Array.isArray(t) && !Array.isArray(i) && (r = o(t, a)), Array.isArray(t) && Array.isArray(i) ? (i.forEach(function (i, o) {
                n.call(t, o) ? t[o] && "object" == typeof t[o] ? t[o] = e(t[o], i, a) : t.push(i) : t[o] = i
            }), t) : Object.keys(i).reduce(function (t, o) {
                var r = i[o];
                return n.call(t, o) ? t[o] = e(t[o], r, a) : t[o] = r, t
            }, r)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = String.prototype.replace,
        a = /%20/g;
    e.exports = {
        default: "RFC3986",
        formatters: {
            RFC1738: function (e) {
                return n.call(e, a, "+")
            },
            RFC3986: function (e) {
                return e
            }
        },
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    }
}, function (e, t) {
    var i, n, a = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (i === setTimeout) return setTimeout(e, 0);
        if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
        try {
            return i(e, 0)
        } catch (t) {
            try {
                return i.call(null, e, 0)
            } catch (t) {
                return i.call(this, e, 0)
            }
        }
    }! function () {
        try {
            i = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            i = o
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            n = r
        }
    }();
    var c, d = [],
        u = !1,
        p = -1;

    function l() {
        u && c && (u = !1, c.length ? d = c.concat(d) : p = -1, d.length && h())
    }

    function h() {
        if (!u) {
            var e = s(l);
            u = !0;
            for (var t = d.length; t;) {
                for (c = d, d = []; ++p < t;) c && c[p].run();
                p = -1, t = d.length
            }
            c = null, u = !1,
                function (e) {
                    if (n === clearTimeout) return clearTimeout(e);
                    if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        d.push(new f(e, t)), 1 !== d.length || u || s(h)
    }, f.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = m, a.addListener = m, a.once = m, a.off = m, a.removeListener = m, a.removeAllListeners = m, a.emit = m, a.prependListener = m, a.prependOnceListener = m, a.listeners = function (e) {
        return []
    }, a.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, a.cwd = function () {
        return "/"
    }, a.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, a.umask = function () {
        return 0
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
            return e.apply(t, i)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(10),
        a = i(136),
        o = i(138),
        r = i(139),
        s = i(140),
        c = i(76),
        d = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || i(141);
    e.exports = function (e) {
        return new Promise(function (t, u) {
            var p = e.data,
                l = e.headers;
            n.isFormData(p) && delete l["Content-Type"];
            var h = new XMLHttpRequest,
                f = "onreadystatechange",
                m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || s(e.url) || (h = new window.XDomainRequest, f = "onload", m = !0, h.onprogress = function () {}, h.ontimeout = function () {}), e.auth) {
                var g = e.auth.username || "",
                    y = e.auth.password || "";
                l.Authorization = "Basic " + d(g + ":" + y)
            }
            if (h.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[f] = function () {
                    if (h && (4 === h.readyState || m) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                        var i = "getAllResponseHeaders" in h ? r(h.getAllResponseHeaders()) : null,
                            n = {
                                data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                                status: 1223 === h.status ? 204 : h.status,
                                statusText: 1223 === h.status ? "No Content" : h.statusText,
                                headers: i,
                                config: e,
                                request: h
                            };
                        a(t, u, n), h = null
                    }
                }, h.onerror = function () {
                    u(c("Network Error", e, null, h)), h = null
                }, h.ontimeout = function () {
                    u(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null
                }, n.isStandardBrowserEnv()) {
                var v = i(142),
                    w = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                w && (l[e.xsrfHeaderName] = w)
            }
            if ("setRequestHeader" in h && n.forEach(l, function (e, t) {
                    void 0 === p && "content-type" === t.toLowerCase() ? delete l[t] : h.setRequestHeader(t, e)
                }), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
                h.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                h && (h.abort(), u(e), h = null)
            }), void 0 === p && (p = null), h.send(p)
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(137);
    e.exports = function (e, t, i, a, o) {
        var r = new Error(e);
        return n(r, t, i, a, o)
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, i) {
    "use strict";

    function n(e) {
        this.message = e
    }
    n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, e.exports = n
}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {
    e.exports = {
        default: i(129),
        __esModule: !0
    }
}, function (e, t, i) {
    e.exports = i(132)
}, function (e, t, i) {
    "use strict";
    var n = i(11),
        a = i.n(n),
        o = i(4),
        r = i(0);
    t.a = function () {
        ! function () {
            var e = document.createElement("script");
            e.src = "https://hm.baidu.com/hm.js?30664cf450dbb4c875787214ae29c091";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }(), "8842829425bff0a6a916691887698819" == r.a.getUrlParam("adSpaceKey") && function () {
                var e = document.createElement("script");
                e.src = "https://s4.cnzz.com/z_stat.php?id=1278006827&web_id=1278006827";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }(), "e7f746266c8eacf319e5e91f1c1e3374" == r.a.getUrlParam("appkey") && function () {
                var e = document.createElement("script");
                e.src = "https://s9.cnzz.com/z_stat.php?id=1278053328&web_id=1278053328";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }(),
            function () {
                var e = document.createElement("script");
                e.src = "https://s9.cnzz.com/z_stat.php?id=1277978264&web_id=1277978264";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }(),
            function () {
                var e = document.createElement("script");
                e.src = "https://hm.baidu.com/hm.js?768a2ddee6519a43aec583b603606818";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }(),
            function () {
                var e = document.createElement("script");
                e.src = "https://hm.baidu.com/hm.js?e6be7bb07f1615c19e644fb078d68db2";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }(),
            function () {
                var e = document.createElement("script");
                e.src = "https://hm.baidu.com/hm.js?e4048e141266fa1176bc9dd61946328d";
                var t = document.getElementsByTagName("script")[1];
                t.parentNode.insertBefore(e, t)
            }(),
            function () {
                var e = document.createElement("script");
                e.src = "https://hm.baidu.com/hm.js?39625844f7eb6e9c0abdc1e66cdfd49e";
                var t = document.getElementsByTagName("script")[2];
                t.parentNode.insertBefore(e, t)
            }(),
            function () {
                var e = document.createElement("script");
                e.src = "https://hm.baidu.com/hm.js?40d6ef683b0e65afd43abe9ed2600ae0";
                var t = document.getElementsByTagName("script")[3];
                t.parentNode.insertBefore(e, t)
            }(),
            function () {
                var e = document.createElement("script");
                e.setAttribute("async", ""), e.src = "https://www.googletagmanager.com/gtag/js?id=UA-138216711-2";
                var t = document.getElementsByTagName("script")[4];

                function i() {
                    dataLayer.push(arguments)
                }
                t.parentNode.insertBefore(e, t), window.dataLayer = window.dataLayer || [], i("js", new Date), i("config", "UA-138216711-2")
            }(), window.onload = function () {
                ! function () {
                    try {
                        if (!window.performance && !window.webkitPerformance) return;
                        var e = (window.performance || window.webkitPerformance).timing,
                            t = {},
                            i = setInterval(function () {
                                e.loadEventEnd > 0 && (t.redirect = e.redirectEnd - e.redirectStart, t.lookupDomain = e.domainLookupEnd - e.domainLookupStart, t.appcache = e.domainLookupStart - e.fetchStart, t.connect = e.connectEnd - e.connectStart, t.request = e.responseEnd - e.requestStart, t.ttfb = e.responseEnd - e.navigationStart, t.domReadyStart = e.domInteractive - e.domLoading, t.domReadyEnd = e.domComplete - e.domInteractive, t.loadPage = e.loadEventEnd - e.loadEventStart, function (e) {
                                    e.gamename = localStorage.getItem("gamename");
                                    var t = 1e3,
                                        i = "";
                                    ! function n() {
                                        var s, c;
                                        if ("hdgg_uid", c = new RegExp("(^| )hdgg_uid=([^;]*)(;|$)"), i = (s = document.cookie.match(c)) ? s[2] || "" : null, t >= 1e4) return !1;
                                        i ? $.ajax({
                                            type: "post",
                                            contentType: "application/json",
                                            url: o.a.baseURL + "/tiger/statistics/reportEvent",
                                            data: a()({
                                                event: "monitorPage",
                                                appkey: r.a.getUrlParam("appkey"),
                                                adSpaceKey: r.a.getUrlParam("adSpaceKey"),
                                                uid: i,
                                                expansion: e
                                            }),
                                            success: function () {},
                                            error: function (e) {}
                                        }) : (t += 1e3, setTimeout(function () {
                                            n()
                                        }, 1e3))
                                    }()
                                }(t), clearInterval(i))
                            }, 200)
                    } catch (e) {}
                }()
            },
            function () {
                var e = document.createElement("script");
                e.setAttribute("async", ""), e.src = "https://www.googletagmanager.com/gtag/js?id=UA-138216711-1";
                var t = document.getElementsByTagName("script")[5];

                function i() {
                    dataLayer.push(arguments)
                }
                t.parentNode.insertBefore(e, t), window.dataLayer = window.dataLayer || [], i("js", new Date), i("config", "UA-138216711-1")
            }();
        var e = e || [];
        window._vds = e, e.push(["setAccountId", "bdd0f83d74ae607c"]),
            function () {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://" : "http://") + "assets.growingio.com/vds.js";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }()
    }
}, function (e, t, i) {
    "use strict";
    var n = i(12),
        a = i.n(n),
        o = i(28),
        r = i.n(o),
        s = i(1),
        c = i.n(s),
        d = i(5),
        u = i.n(d),
        p = i(2),
        l = i.n(p),
        h = i(3),
        f = i.n(h),
        m = i(6),
        g = i.n(m),
        y = i(4),
        v = i(0),
        w = i(11),
        k = i.n(w),
        b = i(82),
        S = i.n(b),
        _ = function () {
            return S.a.create({
                method: "post",
                baseURL: y.a.baseURL,
                transformRequest: [function (e, t) {
                    return "application/x-www-form-urlencoded" == t["Content-Type"] ? g.a.stringify(e) : k()(e)
                }],
                transformResponse: [function (e) {
                    return e
                }],
                timeout: 1e4,
                withCredentials: !1,
                responseType: "json",
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                validateStatus: function (e) {
                    return e >= 200 && e < 300
                }
            })
        },
        I = function () {
            function e(t) {
                var i = t.url,
                    n = t.params,
                    a = void 0 === n ? {} : n,
                    o = t.method,
                    r = void 0 === o ? "post" : o,
                    s = t.options,
                    c = void 0 === s ? {} : s;
                l()(this, e), this.url = i, this.params = a, this.method = r, this.options = c, this.axios = _();
                var d = this.mergeOptions();
                return this.fetch(d)
            }
            return f()(e, [{
                key: "mergeOptions",
                value: function () {
                    if ("get" == this.method || "GET" == this.method) return u()({}, {
                        url: this.url,
                        method: "get",
                        params: this.params,
                        paramsSerializer: function (e) {
                            return g.a.stringify(e, {
                                arrayFormat: "brackets"
                            })
                        }
                    }, this.options);
                    if ("json" == this.options.type) {
                        var e = u()({}, {
                            url: this.url,
                            data: this.params,
                            headers: {
                                "Content-Type": "application/json;charset=utf-8"
                            }
                        }, this.options);
                        return delete e.params, e
                    }
                    var t = u()({}, {
                        url: this.url,
                        data: this.params,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }, this.options);
                    return delete t.params, t
                }
            }, {
                key: "fetch",
                value: function (e) {
                    var t = this;
                    return new c.a(function (i, n) {
                        t.axios.request(e).then(function (e) {
                            i(e.data)
                        }).catch(function (e) {
                            i({
                                code: 200,
                                result: ""
                            })
                        })
                    })
                }
            }]), e
        }(),
        T = function (e) {
            return new I(e)
        },
        x = (i(150), function (e) {
            return u()({}, e, {
                promotionTarget: 2,
                promotionSex: e.sex,
                promotionNetwork: e.network
            })
        }),
        A = function () {
            return c.a.resolve()
        },
        C = function () {
            return c.a.resolve()
        },
        P = function (e) {
            v.a.getWxMiniProgramSDK().then(function (t) {
                var i = {
                    appkey: e.appkey,
                    adSpaceKey: e.adSpaceKey,
                    hdggAdvInfoId: e.ad.hdggAdvInfoId,
                    gameName: e.gameName,
                    uid: e.uid,
                    advMaterialId: e.ad.advMaterialId,
                    mobileSystem: v.a.mobileSystem,
                    hdggReferer: v.a.gamePath
                };
                if (encodeURIComponent(k()(i)), "zhulihongbao" === e.ad.appId) {
                    var n = {
                            appkey: e.appkey,
                            adSpaceKey: e.adSpaceKey,
                            hdggAdvInfoId: e.ad.id,
                            gameName: e.gameName,
                            uid: e.uid,
                            advMaterialId: e.ad.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            hdggReferer: v.a.gamePath,
                            issuedTime: Date.now(),
                            province: ""
                        },
                        a = encodeURIComponent(k()(n)),
                        o = e.ad.urlPath;
                    a = /\?/.test(o) ? "&params=" + a : "?params=" + a, t.miniProgram.navigateTo({
                        url: o + a
                    })
                } else {
                    var r = {
                            appkey: e.appkey,
                            adSpaceKey: e.adSpaceKey,
                            ad: e.ad,
                            gameName: e.gameName,
                            uid: e.uid,
                            mobileSystem: v.a.mobileSystem,
                            province: e.province
                        },
                        s = encodeURIComponent(k()(r));
                    t.miniProgram.navigateTo({
                        url: "/pages/prize/prize?params=" + s
                    })
                }
            })
        },
        E = function (e) {
            e.ad, e.click;
            var t = e.close;
            if (window.styleReset && "function" == typeof window.styleReset) try {
                window.styleReset()
            } catch (e) {}
            t()
        },
        R = new(function () {
            function e() {
                l()(this, e)
            }
            return f()(e, [{
                key: "getTixian",
                value: function (e) {
                    var t = this,
                        i = u()({}, e);
                    return delete i.gameName, v.a.mpEnv() && (i = x(i)), delete i.sex, delete i.network, new c.a(function (n, a) {
                        i = u()(i, {
                            t: (new Date).getTime()
                        }), T({
                            url: "/withdraw",
                            params: i,
                            method: "get"
                        }).then(function (i) {
                            if (200 == i.code) {
                                var a = i.result || {};
                                i.result.hdggAdvInfo && (a = t._hdggNormal({
                                    a: e,
                                    n: i.result.hdggAdvInfo
                                })), n(a)
                            }
                        }).catch(function (e) {
                            a(e)
                        })
                    })
                }
            }, {
                key: "getConfiguration",
                value: function (e) {
                    return new c.a(function (t, i) {
                        e = u()(e, {
                            t: (new Date).getTime()
                        }), T({
                            url: "/tiger/getConfig/" + e.adSpaceKey,
                            method: "get"
                        }).then(function (e) {
                            if (200 == e.code) {
                                var i = e.result || {};
                                t(i)
                            }
                        }).catch(function (e) {
                            i(e)
                        })
                    })
                }
            }, {
                key: "getLocation",
                value: function () {
                    return new c.a(function (e, t) {
                        e({
                            country: "",
                            province: "",
                            city: ""
                        })
                    })
                }
            }, {
                key: "deviceId",
                value: function () {
                    return new c.a(function (e, t) {
                        T({
                            url: "/tiger/getDeviceId",
                            method: "get"
                        }).then(function (i) {
                            if ("200" == i.code) {
                                var n = i.result;
                                e(n)
                            } else t()
                        }).catch(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "uv",
                value: function (e) {
                    T({
                        url: "/tiger/statistics/game",
                        params: e
                    }).then(function (e) {}).catch(function (e) {})
                }
            }, {
                key: "imei",
                value: function (e) {
                    T({
                        method: "get",
                        url: "/sendDid",
                        params: e,
                        alwaysResolve: !1
                    }).then(function (t) {
                        if (200 == t.code) {
                            var i = {
                                adSpaceKey: e.adSpaceKey,
                                time: Date.now()
                            };
                            e.imei && (i.imei = e.imei), e.idfa && (i.idfa = e.idfa), v.a.storage.set("imeiSendObj", i)
                        }
                    }).catch(function (e) {})
                }
            }, {
                key: "_hdggMeiTuan",
                value: function (e) {
                    var t, i = e.a,
                        n = e.n,
                        a = g.a.stringify({
                            uid: i.uid,
                            sessionId: i.sessionId
                        });
                    return t = /\?/.test(n.prizePageUrl) ? n.prizePageUrl + "&" + a : n.prizePageUrl + "?" + a, u()({}, n, {
                        type: "meituan",
                        imageUrl: n.prizeImageUrl,
                        message: n.prizemsg || "",
                        receiveText: n.receiveText || "立即领取",
                        title: n.prizeTitle || "",
                        fullpath: t
                    })
                }
            }, {
                key: "_hdggNormal",
                value: function (e) {
                    var t, i = e.a,
                        n = e.n,
                        a = {
                            appkey: i.appkey,
                            adSpaceKey: i.adSpaceKey,
                            doumobkey: n.doumobkey || "",
                            gamename: encodeURIComponent(i.gameName),
                            uid: i.uid,
                            sessionId: i.sessionId,
                            advId: n.id,
                            province: i.province,
                            mobileSystem: v.a.mobileSystem,
                            dkey: n.dkey || "",
                            advMaterialId: n.advMaterialId || "",
                            gamePath: v.a.gamePath,
                            t: (new Date).getTime()
                        },
                        o = g.a.stringify(a);
                    return t = /\?/.test(n.urlPath) ? n.urlPath + "&" + o : n.urlPath + "?" + o, u()({}, n, {
                        type: "hdgg",
                        imageUrl: n.imageUrl,
                        message: n.advIntro || "",
                        receiveText: n.receiveText || "立即领取",
                        title: n.advTitle || "",
                        fullpath: t
                    })
                }
            }, {
                key: "_hdggMiniprogram",
                value: function (e) {
                    var t = e.a,
                        i = e.n,
                        n = {
                            appkey: t.appkey,
                            adSpaceKey: t.adSpaceKey,
                            doumobkey: i.doumobkey,
                            gamename: encodeURIComponent(t.gameName),
                            uid: t.uid,
                            sessionId: t.sessionId,
                            province: t.province,
                            mobileSystem: v.a.mobileSystem,
                            dkey: i.dkey || "",
                            gamePath: v.a.gamePath
                        };
                    return u()({}, i, {
                        type: "hdgg",
                        imageUrl: i.imageUrl,
                        message: i.advIntro || "",
                        receiveText: i.receiveText || "立即领取",
                        title: i.advTitle || "",
                        extraData: k()(n)
                    })
                }
            }, {
                key: "_hdggZfb",
                value: function (e) {
                    var t = e.a,
                        i = e.n,
                        n = y.a.staticURL + "/redpacket/index.html",
                        a = {
                            appkey: t.appkey,
                            adSpaceKey: t.adSpaceKey,
                            activitId: i.id,
                            advId: i.id,
                            uid: t.uid,
                            sessionId: t.sessionId,
                            redeemCode: i.redeemCode
                        },
                        o = g.a.stringify(a);
                    return u()({}, i, {
                        type: "zfb",
                        imageUrl: /hdggcdn\.bayimob\.com/.test(i.prizeImageUrl) ? i.prizeImageUrl : "https://hdggcdn.bayimob.com/" + i.prizeImageUrl,
                        message: i.prizemsg || "",
                        receiveText: i.receiveText || "立即领取",
                        title: i.prizemsg || "",
                        fullpath: n + "?" + o
                    })
                }
            }, {
                key: "_hdggWx",
                value: function (e) {
                    var t = e.a,
                        i = e.n,
                        n = y.a.staticURL + "/wxGetMoney/index.html",
                        a = {
                            activityId: i.id,
                            priceCode: i.priceCode,
                            appkey: t.appkey,
                            adSpaceKey: t.adSpaceKey,
                            uid: t.uid,
                            sessionId: t.sessionId,
                            advId: i.id
                        },
                        o = g.a.stringify(a);
                    return u()({}, i, {
                        type: "wx",
                        imageUrl: i.prizeImageUrl,
                        message: i.prizemsg || "",
                        receiveText: i.receiveText || "立即领取",
                        title: "微信现金红包",
                        fullpath: n + "?" + o
                    })
                }
            }, {
                key: "_hdggCustom",
                value: function (e) {
                    var t, i = e.a,
                        n = e.n,
                        a = {
                            cuser: v.a.storage.get("cuser"),
                            cprize: v.a.storage.get("cprize"),
                            advId: n.id,
                            sessionId: i.sessionId
                        },
                        o = g.a.stringify(a);
                    return t = /\?/.test(n.urlPath) ? n.urlPath + "&" + o : n.urlPath + "?" + o, u()({}, n, {
                        type: "custom",
                        imageUrl: n.imageUrl,
                        message: n.recommend || "",
                        receiveText: n.buttontext || "立即领取",
                        title: n.prizeName || "",
                        fullpath: t
                    })
                }
            }, {
                key: "getAd",
                value: function (e) {
                    var t = this,
                        i = u()({}, e);
                    return delete i.gameName, v.a.mpEnv() && (i = x(i)), delete i.sex, delete i.network, new c.a(function (n, o) {
                        i = u()(i, {
                            t: (new Date).getTime()
                        }), T({
                            url: "/tiger",
                            params: i,
                            method: "get",
                            options: {
                                timeout: 5e3
                            }
                        }).then(function (i) {
                            if (200 == i.code) {
                                var r = i.result || {};
                                i.result.hdggAdvInfo ? r = i.result.hdggAdvInfo.appId ? t._hdggMiniprogram({
                                    a: e,
                                    n: i.result.hdggAdvInfo
                                }) : t._hdggNormal({
                                    a: e,
                                    n: i.result.hdggAdvInfo
                                }) : i.result.alipaymarketingactivity ? r = t._hdggZfb({
                                    a: e,
                                    n: i.result.alipaymarketingactivity
                                }) : i.result.wxPayActivity ? r = t._hdggWx({
                                    a: e,
                                    n: i.result.wxPayActivity
                                }) : i.result.customprizeactivity ? r = t._hdggCustom({
                                    a: e,
                                    n: i.result.customprizeactivity
                                }) : i.result.billActivity && (r = t._hdggMeiTuan({
                                    a: e,
                                    n: i.result.billActivity
                                })), v.a.mpEnv() && (r = function (e) {
                                    var t = u()({}, e);
                                    return "zfb" == t.type && (t = {}), t
                                }(r)), a()(r).length > 0 && (r.advMaterialId = r.advMaterialId || 0), n(r)
                            } else {
                                o(i.code);
                                var s = {
                                    code: i.code,
                                    connection: navigator.connection.effectiveType,
                                    agent: navigator.userAgent,
                                    message: i.message,
                                    canshu: location.search.split("?")[1]
                                };
                                t.sendErrorMessage(s)
                            }
                        }).catch(function (e) {
                            o(e);
                            var i = {
                                code: 5e3,
                                connection: navigator.connection.effectiveType,
                                agent: navigator.userAgent,
                                message: "请求超时",
                                canshu: location.search.split("?")[1]
                            };
                            t.sendErrorMessage(i)
                        }), v.a.storage.remove("chaJian"), v.a.storage.remove("diaoBao")
                    })
                }
            }, {
                key: "sendErrorMessage",
                value: function (e) {
                    T({
                        url: "/tracklog/tracklog",
                        method: "post",
                        params: e
                    })
                }
            }, {
                key: "playGame",
                value: function (e) {
                    T({
                        url: "/tiger/statistics/playGame",
                        params: e
                    })
                }
            }, {
                key: "show",
                value: function (e) {
                    return v.a.mpEnv() && e.ad.appId ? A() : (delete e.ad, "zfb" == e.statistics.type ? this.activityShow({
                        appkey: e.statistics.appkey,
                        adSpaceKey: e.statistics.adSpaceKey,
                        uid: e.statistics.uid,
                        activityId: e.statistics.hdggAdvInfoId
                    }) : "custom" == e.statistics.type ? this.activityCustomShow({
                        appkey: e.statistics.appkey,
                        adSpaceKey: e.statistics.adSpaceKey,
                        uid: e.statistics.uid,
                        activityId: e.statistics.hdggAdvInfoId
                    }) : (delete e.statistics.type, new c.a(function (t, i) {
                        T({
                            url: "/adx/action/show",
                            params: e,
                            options: {
                                type: "json"
                            }
                        }).then(function (e) {
                            t()
                        })
                    })))
                }
            }, {
                key: "click",
                value: function (e) {
                    if (v.a.mpEnv() && e.ad.appId) return C();
                    if (delete e.ad, "zfb" == e.statistics.type) return this.activityClick({
                        appkey: e.statistics.appkey,
                        adSpaceKey: e.statistics.adSpaceKey,
                        uid: e.statistics.uid,
                        activityId: e.statistics.hdggAdvInfoId
                    });
                    if ("custom" == e.statistics.type) {
                        var t = {
                            appkey: e.statistics.appkey,
                            adSpaceKey: e.statistics.adSpaceKey,
                            uid: e.statistics.uid,
                            activityId: e.statistics.hdggAdvInfoId
                        };
                        return c.a.all([this.activityCustomClick(t)])
                    }
                    return delete e.statistics.type, new c.a(function (t, i) {
                        T({
                            url: "/adx/action/click",
                            params: e,
                            options: {
                                type: "json"
                            }
                        }).then(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "showTx",
                value: function (e) {
                    return v.a.mpEnv() && e.ad.appId ? A() : (delete e.ad, "zfb" == e.type ? this.activityShow({
                        appkey: e.appkey,
                        adSpaceKey: e.adSpaceKey,
                        uid: e.uid,
                        activityId: e.hdggAdvInfoId
                    }) : "custom" == e.type ? this.activityCustomShow({
                        appkey: e.appkey,
                        adSpaceKey: e.adSpaceKey,
                        uid: e.uid,
                        activityId: e.hdggAdvInfoId
                    }) : (delete e.type, new c.a(function (t, i) {
                        T({
                            url: "/tiger/statistics/show",
                            params: e
                        }).then(function (e) {
                            t()
                        })
                    })))
                }
            }, {
                key: "clickTx",
                value: function (e) {
                    if (v.a.mpEnv() && e.ad.appId) return C();
                    if (delete e.ad, "zfb" == e.type) return this.activityClick({
                        appkey: e.appkey,
                        adSpaceKey: e.adSpaceKey,
                        uid: e.uid,
                        activityId: e.hdggAdvInfoId
                    });
                    if ("custom" == e.type) {
                        var t = {
                            appkey: e.appkey,
                            adSpaceKey: e.adSpaceKey,
                            uid: e.uid,
                            activityId: e.hdggAdvInfoId
                        };
                        return c.a.all([this.activityCustomClick(t)])
                    }
                    return delete e.type, new c.a(function (t, i) {
                        T({
                            url: "/tiger/statistics/click",
                            params: e
                        }).then(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "activityShow",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/activity/statistic",
                            params: u()({}, e, {
                                type: 1
                            }),
                            method: "get"
                        })
                    })
                }
            }, {
                key: "activityClick",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/activity/statistic",
                            params: u()({}, e, {
                                type: 2
                            }),
                            method: "get"
                        }).then(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "activityCustomShow",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/customActivity/statistic",
                            params: u()({}, e, {
                                type: 1
                            }),
                            method: "get"
                        })
                    })
                }
            }, {
                key: "activityCustomClick",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/customActivity/statistic",
                            params: u()({}, e, {
                                type: 2
                            }),
                            method: "get"
                        }).then(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "activityCustomClickCount",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/customActivity/receivePrize",
                            params: e,
                            method: "get"
                        }).then(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "getCustomInfo",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/customActivity/receivePrize",
                            params: e,
                            method: "get"
                        }).then(function (e) {
                            t(e)
                        }).catch(function (e) {
                            i()
                        })
                    })
                }
            }, {
                key: "getRedpacketRate",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/tiger/getAdSpaceRedRate/" + e.adSpaceKey,
                            method: "get"
                        }).then(function (e) {
                            var i = e.result || 0;
                            t(i)
                        })
                    })
                }
            }, {
                key: "showRecord",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/tiger/statistics/myPrizeClick",
                            method: "post",
                            params: e
                        }).then(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "recordClick",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/tiger/statistics/prizeAllClick",
                            method: "post",
                            params: e
                        }).then(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "returnPath",
                value: function (e) {
                    return new c.a(function (t, i) {
                        try {
                            var n = v.a.storage.get("returnPath");
                            if (n && "object" == (void 0 === n ? "undefined" : r()(n))) {
                                if ((new Date).toLocaleDateString() == new Date(n.time).toLocaleDateString() && n.adSpaceKey == e.adSpaceKey) return void t(n);
                                v.a.storage.remove("returnPath")
                            }
                        } catch (e) {}
                        T({
                            url: "/gameReturnPath",
                            method: "post",
                            params: e
                        }).then(function (n) {
                            if (0 == n.code) {
                                var a = n.data || {};
                                a.time = (new Date).getTime(), a.adSpaceKey = e.adSpaceKey, v.a.storage.set("returnPath", a), t(a)
                            } else i()
                        }).catch(function (e) {
                            i()
                        })
                    })
                }
            }, {
                key: "gameMaterial",
                value: function () {
                    return new c.a(function (e, t) {
                        T({
                            url: "/gameMaterial",
                            method: "get"
                        }).then(function (i) {
                            0 == i.code ? e(i.data) : t()
                        }).catch(function (e) {
                            t()
                        })
                    })
                }
            }, {
                key: "materialShow",
                value: function (e) {
                    T({
                        url: "/tiger/statistics/gameMaterial/show",
                        method: "post",
                        params: e
                    })
                }
            }, {
                key: "materialClick",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/tiger/statistics/gameMaterial/click",
                            method: "post",
                            params: e
                        }).then(function (e) {
                            t()
                        }).catch(function (e) {
                            t()
                        }), setTimeout(function (e) {
                            t()
                        }, 2e3)
                    })
                }
            }, {
                key: "gameCenterClick",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/tiger/statistics/gameCenter/click",
                            method: "post",
                            params: e
                        }).then(function (e) {
                            0 == e.code ? t(e.data) : t()
                        }).catch(function (e) {
                            t()
                        }), setTimeout(function (e) {
                            t()
                        }, 1e3)
                    })
                }
            }, {
                key: "gameListClick",
                value: function (e) {
                    return new c.a(function (t, i) {
                        T({
                            url: "/tiger/statistics/reportEvent",
                            method: "post",
                            params: e,
                            options: {
                                type: "json"
                            }
                        }).then(function (e) {
                            0 == e.code ? t(e.data) : t()
                        }).catch(function (e) {
                            t()
                        }), setTimeout(function (e) {
                            t()
                        }, 1e3)
                    })
                }
            }]), e
        }()),
        N = (i(51), i(35)),
        j = i.n(N),
        K = (i(79), i(155), function () {
            function e(t) {
                l()(this, e), this.ad = t.ad, this.click = t.click, this.close = t.close, this.that = t.that, this.closeRed = t.closeRed, this.myClass = t.myClass, this.options = t, this.create()
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    var e = this;
                    $("#hdgg_show-win-custom-pdd").length > 0 && $("#hdgg_show-win-custom-pdd").remove(), $("body").append('\n      <div id="hdgg_show-win-custom-pdd">\n        <img id="hdgg-image-custom-pdd" class="m-image" src="' + this.ad.imageUrl + '">\n        <div class="card-sunshine"></div>\n      </div>\n    '), setTimeout(function (t) {
                        $("#hdgg_show-win-custom-pdd").append('<span class="close-btn closetc iconfont"></span>'), e.hadnleClose()
                    }, 1500), this.hadnleClick()
                }
            }, {
                key: "hadnleClose",
                value: function () {
                    var e = this;
                    $("#hdgg_show-win-custom-pdd .close-btn").on("click", function () {
                        if ($("#hdgg_show-win-custom-pdd").remove(), e.closeRed) $("." + e.myClass).remove();
                        else if ("dropEnvelope" != e.ad.adTriggerType && e.close(), window.styleReset && "function" == typeof window.styleReset) try {
                            window.styleReset()
                        } catch (e) {}
                    })
                }
            }, {
                key: "hadnleClick",
                value: function () {
                    var e = this;
                    $("#hdgg-image-custom-pdd").one("click", function (t) {
                        if (t.preventDefault(), !e.closeRed) return e.click({
                            ad: e.ad
                        }), !1;
                        R.click({
                            statistics: {
                                appkey: e.options.appkey,
                                adSpaceKey: e.options.adSpaceKey,
                                hdggAdvInfoId: e.ad.id,
                                gameName: e.options.gameName,
                                uid: e.options.uid,
                                sessionId: e.options.sessionId,
                                issuedTime: (new Date).getTime(),
                                province: e.options.province,
                                advMaterialId: e.ad.advMaterialId,
                                mobileSystem: v.a.mobileSystem,
                                imei: e.options.imei,
                                doumobkey: e.ad.doumobkey,
                                dkey: e.ad.dkey,
                                type: e.ad.type,
                                bidReqId: e.ad.bidReqId,
                                adPlatformValue: e.ad.adPlatformValue,
                                hdggReferer: v.a.gamePath,
                                sessId: e.ad.sessId,
                                repeatIssued: e.ad.repeatIssued,
                                adTriggerType: "rainEnvelope",
                                gameHtmlId: e.ad.gameHtmlId
                            }
                        }).then(function (t) {
                            window.location.href = e.ad.urlPath + location.search + "&dkey=" + e.ad.dkey + "&doumobkey=" + e.ad.doumobkey + "&doumobkey=" + e.ad.doumobkey + "&uid=" + e.options.uid + "&advMaterialId=" + e.ad.advMaterialId + "&sessionId=" + e.options.sessionId + "&mobileSystem=" + v.a.mobileSystem + "&gameName=" + e.options.gameName + "&sessId=" + e.ad.sessId + "&repeatIssued=" + e.ad.repeatIssued + "&hdggReferer=" + v.a.gamePath + "&province=" + e.options.province
                        })
                    })
                }
            }]), e
        }()),
        M = (i(156), function () {
            function e(t) {
                l()(this, e), this.params = {
                    appkey: t.appkey,
                    adSpaceKey: t.adSpaceKey,
                    uid: t.uid,
                    receiveId: t.receiveId,
                    deviceId: t.deviceId,
                    userId: t.userId,
                    os: t.os,
                    appName: t.appName
                }, this.getCoustomInfo(this.params)
            }
            return f()(e, [{
                key: "getCoustomInfo",
                value: function (e) {
                    var t = this,
                        i = void 0;
                    R.getCustomInfo(e).then(function (n) {
                        "0" == n.code ? (i = "https://hdggcdn.bayimob.com/hdggstatic/custom/success.png", t.changeRecodeStatus(e.receiveId)) : i = "已领奖" == n.msg ? "https://hdggcdn.bayimob.com/hdggstatic/custom/repeat.png" : "https://hdggcdn.bayimob.com/hdggstatic/custom/fail.png", t.create(i)
                    }).catch(function (e) {
                        i = "https://hdggcdn.bayimob.com/hdggstatic/custom/fail.png", t.create(i)
                    })
                }
            }, {
                key: "create",
                value: function (e) {
                    $("#dialog5").length > 0 && $("#dialog5").remove(), $(".hdgg_custom_price").length > 0 && $(".hdgg_custom_price").remove(), $("body").append('\n            <div class="hdgg_custom_price">\n                <div class="hdgg_custom_price_box">\n                    <div class="content">\n                        <img src="' + e + '" alt="">\n                    </div>\n                    <div class="hdgg_custom_price_button">\n                        <img src="https://hdggcdn.bayimob.com/hdggstatic/custom/button.png" alt="">\n                    </div>\n                </div>\n            </div>\n        '), $("body").css("overflow-y", "hidden"), $(".hdgg_custom_price .hdgg_custom_price_button").on("click", function () {
                        $("body").css("overflow-y", "auto"), $(".hdgg_custom_price").remove()
                    })
                }
            }, {
                key: "changeRecodeStatus",
                value: function (e) {
                    var t = v.a.storage.get("adsRecord");
                    for (var i in t) e == t[i].receiveId && (t[i].isTake = !0, v.a.storage.set("adsRecord", t))
                }
            }]), e
        }()),
        L = function () {
            function e(t) {
                l()(this, e), this.appkey = t.appkey, this.adSpaceKey = t.adSpaceKey, this.uid = t.uid, this.sessionId = t.sessionId, this.entranceType = t.entranceType, this.gameName = t.gameName, this.province = t.province, this.imei = t.imei, this.ad = t.ad, this.record = t.record, this.close = t.close, this.click = t.click, this.routeToAd = t.routeToAd, this.options = t.options, this.sessId = t.ad.sessId, this.repeatIssued = t.ad.repeatIssued, this.adTriggerType = t.ad.adTriggerType, this.gameHtmlId = t.ad.gameHtmlId, $("#hdgg_redpack").length > 0 && $("#hdgg_redpack").remove(), this.create(), this.handleClick(), this.fetch_uv()
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    $("body").append('\n      <div id="hdgg_redpack">\n        <div class="m-close" style="display: none;"></div>\n        <div class="m-wrapper">\n          <div class="m-sd-bg" style="display:none;"></div>\n          <div class="m-top-bg"></div>\n          <div class="m-bottom-bg"></div>\n          <div class="m-btn-join"></div>\n          <div class="m-btn-click" style="display: none;"></div>\n          <div class="m-winred">\n            \n          </div>\n        </div>\n      </div>  \n    '), $("body").css("overflow", "hidden"), setTimeout(function () {
                        $("#hdgg_redpack .m-close").show()
                    }, 1e3)
                }
            }, {
                key: "handleClick",
                value: function () {
                    var e = this;
                    $("#hdgg_redpack .m-btn-join").on("click", function () {
                        if (e.fetch_playGame(), e.options.pddCustomDialog && 2 == e.ad.advLayout) {
                            e.fetch_show();
                            var t = {
                                ad: e.ad,
                                click: function () {
                                    e.fetch_click().then(function (t) {
                                        e.routeToAd({
                                            ad: e.ad
                                        })
                                    })
                                }
                            };
                            return $("body").css("overflow", "auto"), $("#hdgg_redpack").remove(), void new K(t)
                        }
                        if (v.a.mpEnv() && e.ad.appId) return $("#hdgg_redpack").remove(), E({
                            ad: e.ad,
                            click: e.click,
                            close: e.close
                        }), void P({
                            appkey: e.appkey,
                            adSpaceKey: e.adSpaceKey,
                            ad: e.ad,
                            gameName: e.gameName,
                            uid: e.uid,
                            mobileSystem: v.a.mobileSystem,
                            province: e.province
                        });
                        e.fetch_show(), e.recordSave(), e.showAdStyle()
                    }), $("#hdgg_redpack .m-close").on("click", function () {
                        if ($("body").css("overflow", "auto"), $("#hdgg_redpack").remove(), window.closeHongbao && "function" == typeof window.closeHongbao) try {
                            window.closeHongbao()
                        } catch (e) {}
                    });
                    var t = function (t) {
                        return t.preventDefault(), e.fetch_click().then(function (t) {
                            var i = e.ad;
                            if ("custom" == i.type && "2" == i.urlType) return $("#hdgg_redpack").remove(), void new M({
                                appkey: e.appkey,
                                adSpaceKey: e.adSpaceKey,
                                uid: e.uid,
                                receiveId: e.ad.receiveId,
                                deviceId: v.a.getUrlParam("deviceId"),
                                userId: v.a.getUrlParam("userId") || null,
                                os: v.a.getUrlParam("os") || null,
                                appName: v.a.getUrlParam("appName") || null
                            });
                            if ("custom" != i.type || "1" != i.urlType) e.routeToAd({
                                ad: e.ad
                            });
                            else {
                                var n = e;
                                R.getCustomInfo({
                                    appkey: e.appkey,
                                    adSpaceKey: e.adSpaceKey,
                                    uid: e.uid,
                                    receiveId: e.ad.receiveId
                                }).then(function (e) {
                                    n.routeToAd({
                                        ad: i
                                    })
                                })
                            }
                        }), !1
                    };
                    $(document).one("click", "#hdgg_redpack .m-btn-click", t), $(document).one("click", "#hdgg_redpack .m-winred", t)
                }
            }, {
                key: "fetch_uv",
                value: function () {
                    R.uv({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        gameName: "掉红包",
                        uid: this.uid,
                        sessionId: this.sessionId,
                        entranceType: this.entranceType,
                        hdggReferer: v.a.gamePath
                    })
                }
            }, {
                key: "fetch_playGame",
                value: function () {
                    R.playGame({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        hdggAdvInfoId: this.ad.id,
                        gameName: this.gameName,
                        uid: this.uid,
                        sessionId: this.sessionId,
                        mobileSystem: v.a.mobileSystem,
                        province: this.province,
                        hdggReferer: v.a.gamePath
                    })
                }
            }, {
                key: "fetch_show",
                value: function () {
                    R.show({
                        statistics: {
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            hdggAdvInfoId: this.ad.id,
                            gameName: this.gameName,
                            uid: this.uid,
                            sessionId: this.sessionId,
                            advMaterialId: this.ad.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            province: this.province,
                            imei: this.imei,
                            bidReqId: this.ad.bidReqId,
                            adPlatformValue: this.ad.adPlatformValue,
                            hdggReferer: v.a.gamePath,
                            sessId: this.sessId,
                            repeatIssued: this.repeatIssued,
                            adTriggerType: this.adTriggerType,
                            gameHtmlId: this.gameHtmlId || ""
                        },
                        dspAd: this.ad.dspAd
                    })
                }
            }, {
                key: "showAdStyle",
                value: function () {
                    $("#hdgg_redpack .m-winred").append('\n      <div class="m-win-content">\n        <div class="m-image" style="width: 100%;height: 5.6em;background: url(' + this.ad.imageUrl + ') 0 0 no-repeat;background-size: contain;"></div>\n        <div class="m-decs">' + this.ad.message + "</div>\n      </div>\n    "), setTimeout(function () {
                        $("#hdgg_redpack .m-sd-bg").css("top", "-6.9em")
                    }, 350), $("#hdgg_redpack .m-btn-join").hide(), $("#hdgg_redpack .m-top-bg").addClass("active"), $("#hdgg_redpack .m-win-content").addClass("active"), setTimeout(function (e) {
                        $("#hdgg_redpack .m-btn-click").show()
                    }, 600)
                }
            }, {
                key: "fetch_click",
                value: function () {
                    return R.click({
                        statistics: {
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            hdggAdvInfoId: this.ad.id,
                            gameName: this.gameName,
                            uid: this.uid,
                            sessionId: this.sessionId,
                            issuedTime: (new Date).getTime(),
                            province: this.province,
                            advMaterialId: this.ad.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            imei: this.imei,
                            doumobkey: this.ad.doumobkey,
                            dkey: this.ad.dkey,
                            bidReqId: this.ad.bidReqId,
                            adPlatformValue: this.ad.adPlatformValue,
                            hdggReferer: v.a.gamePath,
                            sessId: this.sessId,
                            repeatIssued: this.repeatIssued,
                            adTriggerType: this.adTriggerType,
                            gameHtmlId: this.gameHtmlId || ""
                        },
                        dspAd: this.ad.dspAd
                    })
                }
            }, {
                key: "recordSave",
                value: function () {
                    this.record.unshift(this.ad), v.a.storage.set("adsRecord", [].concat(j()(this.record)))
                }
            }]), e
        }(),
        O = function () {
            function e(t) {
                l()(this, e), this.appkey = t.appkey, this.adSpaceKey = t.adSpaceKey, this.uid = t.uid, this.sessionId = t.sessionId, this.entranceType = t.entranceType, this.gameName = t.gameName, this.province = t.province, this.ad = t.ad, this.record = t.record, this.close = t.close, this.click = t.click, this.routeToAd = t.routeToAd, this.options = t.options, this.sessId = t.ad.sessId, this.repeatIssued = t.ad.repeatIssued, $("#hdgg_redpack").length > 0 && $("#hdgg_redpack").remove(), this.create(), this.handleClick(), this.fetch_uv()
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    $("body").append('\n      <div id="hdgg_redpack">\n        <div class="m-close" style="display: none;"></div>\n        <div class="m-wrapper">\n          <div class="m-sd-bg" style="display:none;"></div>\n          <div class="m-top-bg"></div>\n          <div class="m-bottom-bg"></div>\n          <div class="m-btn-join"></div>\n          <div class="m-btn-click" style="display: none;"></div>\n          <div class="m-winred">\n            \n          </div>\n        </div>\n      </div>  \n    '), $("body").css("overflow", "hidden"), setTimeout(function () {
                        $("#hdgg_redpack .m-close").show()
                    }, 1e3)
                }
            }, {
                key: "handleClick",
                value: function () {
                    var e = this;
                    $("#hdgg_redpack .m-btn-join").on("click", function () {
                        if (e.fetch_playGame(), e.options.pddCustomDialog && 2 == e.ad.advLayout) {
                            e.fetch_show();
                            var t = {
                                ad: e.ad,
                                click: function () {
                                    e.fetch_click().then(function (t) {
                                        e.routeToAd({
                                            ad: e.ad
                                        })
                                    })
                                }
                            };
                            return $("body").css("overflow", "auto"), $("#hdgg_redpack").remove(), void new K(t)
                        }
                        if (v.a.mpEnv() && e.ad.appId) return $("#hdgg_redpack").remove(), E({
                            ad: e.ad,
                            click: e.click,
                            close: e.close
                        }), void P({
                            appkey: e.appkey,
                            adSpaceKey: e.adSpaceKey,
                            ad: e.ad,
                            gameName: e.gameName,
                            uid: e.uid,
                            mobileSystem: v.a.mobileSystem,
                            province: e.province
                        });
                        e.fetch_show(), e.recordSave(), e.showAdStyle()
                    }), $("#hdgg_redpack .m-close").on("click", function () {
                        if ($("body").css("overflow", "auto"), $("#hdgg_redpack").remove(), window.closeHongbao && "function" == typeof window.closeHongbao) try {
                            window.closeHongbao()
                        } catch (e) {}
                    });
                    var t = function (t) {
                        return t.preventDefault(), e.fetch_click().then(function (t) {
                            e.routeToAd({
                                ad: e.ad
                            })
                        }), !1
                    };
                    $(document).one("click", "#hdgg_redpack .m-btn-click", t), $(document).one("click", "#hdgg_redpack .m-winred", t)
                }
            }, {
                key: "fetch_uv",
                value: function () {
                    R.uv({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        gameName: "掉红包2",
                        uid: this.uid,
                        sessionId: this.sessionId,
                        entranceType: this.entranceType,
                        hdggReferer: v.a.gamePath
                    })
                }
            }, {
                key: "fetch_playGame",
                value: function () {
                    R.playGame({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        hdggAdvInfoId: this.ad.id,
                        gameName: this.gameName,
                        uid: this.uid,
                        sessionId: this.sessionId,
                        mobileSystem: v.a.mobileSystem,
                        province: this.province,
                        hdggReferer: v.a.gamePath
                    })
                }
            }, {
                key: "fetch_show",
                value: function () {
                    R.show({
                        statistics: {
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            hdggAdvInfoId: this.ad.id,
                            gameName: this.gameName,
                            uid: this.uid,
                            sessionId: this.sessionId,
                            advMaterialId: this.ad.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            province: this.province,
                            imei: this.imei,
                            bidReqId: this.ad.bidReqId,
                            adPlatformValue: this.ad.adPlatformValue,
                            hdggReferer: v.a.gamePath,
                            sessId: this.sessId,
                            repeatIssued: this.repeatIssued
                        },
                        dspAd: this.ad.dspAd
                    })
                }
            }, {
                key: "showAdStyle",
                value: function () {
                    $("#hdgg_redpack .m-winred").append('\n      <div class="m-win-content">\n        <div class="m-image" style="width: 100%;height: 5.6em;background: url(' + this.ad.imageUrl + ') 0 0 no-repeat;background-size: contain;"></div>\n        <div class="m-decs">' + this.ad.message + "</div>\n      </div>\n    "), setTimeout(function () {
                        $("#hdgg_redpack .m-sd-bg").css("top", "-6.9em")
                    }, 350), $("#hdgg_redpack .m-btn-join").hide(), $("#hdgg_redpack .m-top-bg").addClass("active"), $("#hdgg_redpack .m-win-content").addClass("active"), setTimeout(function (e) {
                        $("#hdgg_redpack .m-btn-click").show()
                    }, 600)
                }
            }, {
                key: "fetch_click",
                value: function () {
                    return R.click({
                        statistics: {
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            hdggAdvInfoId: this.ad.id,
                            gameName: this.gameName,
                            uid: this.uid,
                            sessionId: this.sessionId,
                            issuedTime: (new Date).getTime(),
                            province: this.province,
                            advMaterialId: this.ad.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            imei: this.imei,
                            doumobkey: this.ad.doumobkey,
                            dkey: this.ad.dkey,
                            bidReqId: this.ad.bidReqId,
                            adPlatformValue: this.ad.adPlatformValue,
                            hdggReferer: v.a.gamePath,
                            sessId: this.sessId,
                            repeatIssued: this.repeatIssued
                        },
                        dspAd: this.ad.dspAd
                    })
                }
            }, {
                key: "recordSave",
                value: function () {
                    this.record.unshift(this.ad), v.a.storage.set("adsRecord", [].concat(j()(this.record)))
                }
            }]), e
        }(),
        U = (i(157), function () {
            function e(t) {
                l()(this, e), this.options = t.options
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    var e = this;
                    return new c.a(function (t, i) {
                        $("body").append('\n        <div id="hdgg_record_button">\n          <div class="m-inner">\n            <div class="m-wrapper"></div>\n            <div class="m-sj"></div>\n            <p class="m-text">中奖记录</p>\n          </div>\n        </div>\n      '), a()(e.options.recordStyle).length > 0 && $("#hdgg_record_button").css(e.options.recordStyle), $("#hdgg_record_button .m-inner").css("background", e.options.recordButtonColor[0]), $("#hdgg_record_button .m-inner .m-wrapper").css("background", e.options.recordButtonColor[1]), t($("#hdgg_record_button .m-inner"))
                    })
                }
            }]), e
        }()),
        D = function () {
            function e(t) {
                l()(this, e), this.options = t.options, this.record = t.record, this.appkey = t.appkey, this.adSpaceKey = t.adSpaceKey, this.uid = t.uid, this.create(), this.render(), this.styleBugFix(), this.createPhone()
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    $("#hdgg-record-page").length > 0 || ($("body").append('\n      <div id="hdgg-record-page" style="display: none;">\n        <div class="hd_ad_hd">\n          <div class="hd_ad_back">返回</div>\n          <p>我的奖品</p>\n        </div>\n        <div id="someMedia" style="overflow:auto">\n        <div class="hd_ad_list">\n          \n        </div>\n      </div>\n    '), ("ffb24d8f20df8e25c9bcb8fe58742894" == this.options.appkey || "be38f8ab6179abd5954573dcdd16d86b1" == this.options.appkey || "9273f5d67ed1eeeec916231d1987d28f" == this.options.appkey || this.options.someMedia) && $(' <div class="hd_ad_mobile">\n        <p>客服：<a href="tel://010-56128391" style="color:#fff;">010-56128391</a></p>\n        </div>').insertBefore($(".hd_ad_list")), this.options.recordAnimate && $("#hdgg-record-page").addClass("m-transition-dom"), $("#hdgg-record-page .hd_ad_back").on("click", function () {
                        window.parent.postMessage({
                            block: !0
                        }, "*"), $("#hdgg-record-page").removeClass("hdgg-record-show").addClass("hdgg-record-hide"), setTimeout(function () {
                            $("#hdgg-record-page").removeClass("hdgg-record-hide").css("display", "none")
                        }, 800)
                    }))
                }
            }, {
                key: "render",
                value: function () {
                    if (R.showRecord({
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            uid: this.uid
                        }), $("#hdgg-record-page .hd_ad_list a").remove(), $("#hdgg-record-page .hd_ad_noprize").remove(), 0 != this.record.length || 0 != $("#hdgg-record-page .hd_ad_noprize").length) {
                        this.record.forEach(function (e) {
                            var t = e.fullpath || e.urlPath;
                            $("#hdgg-record-page .hd_ad_list").append('\n      <a href="javascript:;" data-url="' + t + '" data-doumobkey="' + e.doumobkey + '" data-receiveid="' + e.receiveId + '" data-type="' + e.type + '">\n          <div class="hd_time">' + v.a.dateFormat(e.issuedTime) + '</div>\n          <img src="' + e.imageUrl + '"/>\n          <p class="hd_ad_title">' + (e.title || e.advTitle) + "</p>\n          <p>" + (e.message || e.advIntro) + '</p>\n          <div class="hd_ad_tip">已中奖</div>\n          <div class="hd_ad_lingjiang">查看</div>\n        </a>  \n        ')
                        });
                        var e = this;
                        $("#hdgg-record-page .hd_ad_list a").on("click", function () {
                            window.localStorage.removeItem("fromVideo");
                            var t = $(this).attr("data-doumobkey"),
                                i = $(this).attr("data-url"),
                                n = v.a.storage.get("adsRecord");
                            if ($(this).attr("data-receiveid") && "custom" == $(this).attr("data-type"))
                                for (var a in n) n[a].receiveId == $(this).attr("data-receiveid") && e.checkRecordStatus(a, i);
                            else R.recordClick({
                                appkey: e.appkey,
                                adSpaceKey: e.adSpaceKey,
                                uid: e.uid,
                                doumobkey: t
                            }).then(function (t) {
                                e.options.ifranmeShow ? window.parent.postMessage({
                                    doumob: i
                                }, "*") : window.location.href = i
                            })
                        })
                    } else $("#hdgg-record-page .hd_ad_list").append('\n        <div class="hd_ad_noprize">您还没有获得奖品,快去玩游戏吧～</div>\n      ')
                }
            }, {
                key: "checkRecordStatus",
                value: function (e, t) {
                    var i = this,
                        n = v.a.storage.get("adsRecord"),
                        a = n[e].receiveId;
                    "custom" != n[e].type || "2" != n[e].urlType ? "custom" != n[e].type || "1" != n[e].urlType || R.getCustomInfo({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        uid: this.uid,
                        receiveId: a
                    }).then(function (e) {
                        i.options.ifranmeShow ? window.parent.postMessage({
                            doumob: t
                        }, "*") : window.location.href = t
                    }) : new M({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        uid: this.uid,
                        receiveId: a,
                        deviceId: v.a.getUrlParam("deviceId") || null,
                        userId: v.a.getUrlParam("userId") || null,
                        os: v.a.getUrlParam("os") || null,
                        appName: v.a.getUrlParam("appName") || null
                    })
                }
            }, {
                key: "styleBugFix",
                value: function () {
                    $("#hdgg-record-page").css("display", "block"), $("#hdgg-record-page .hd_ad_list")[0].scrollTop = 0, setTimeout(function () {
                        $("#hdgg-record-page").addClass("hdgg-record-show")
                    }, 0)
                }
            }, {
                key: "createPhone",
                value: function () {
                    "6453426ec2ce2022b3ffd4764ffb40bc" == this.adSpaceKey && $("#hdgg-record-page .hd_ad_hd").append('\n        <div class="m-service-phone">客服电话：010-56128391</div>\n      ')
                }
            }]), e
        }(),
        B = (i(158), function () {
            function e(t) {
                l()(this, e), this.options = t.options, this.handleClick()
            }
            return f()(e, [{
                key: "handleClick",
                value: function () {
                    var e = this;
                    $(this.options.rulesEle).on("click", function () {
                        0 == $("#hdgg_rules-wrapper").length && e.create(), $("#hdgg_rules-wrapper").show(), $("body").css("overflow", "hidden"), setTimeout(function () {
                            $("#hdgg_rules-wrapper .m-rules-inner").addClass("rules-show")
                        }, 0), e.handleClose()
                    })
                }
            }, {
                key: "create",
                value: function () {
                    $("body").append('\n      <div id="hdgg_rules-wrapper">\n        <div class="m-rules-inner">\n          <div class="m-close"></div>\n          <div class="m-rules-ct">\n            \n          </div>\n        </div>\n      </div>\n    '), this.options.rules && this.options.rules.forEach(function (e) {
                        $("#hdgg_rules-wrapper .m-rules-ct").append("<p>" + e + "</p>")
                    })
                }
            }, {
                key: "handleClose",
                value: function () {
                    $("#hdgg_rules-wrapper .m-close").on("click", function () {
                        $("#hdgg_rules-wrapper .m-rules-inner").removeClass("rules-show"), setTimeout(function () {
                            $("#hdgg_rules-wrapper").hide()
                        }, 300), $("body").css("overflow", "auto")
                    })
                }
            }]), e
        }()),
        F = (i(159), function () {
            function e(t) {
                l()(this, e), this.appkey = t.appkey, this.adSpaceKey = t.adSpaceKey, this.uid = t.uid, this.rem = t.rem, this.address = "", this.init()
            }
            return f()(e, [{
                key: "init",
                value: function () {
                    var e = this,
                        t = {
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            entranceType: 3
                        },
                        i = g.a.stringify(t),
                        n = y.a.floatIcon.entranceUrl,
                        a = y.a.floatIcon.entranceImage,
                        o = y.a.floatIcon.entranceAbsoluteUrl;
                    if (!v.a.mpEnv()) {
                        if (1 == v.a.browserType) {
                            var r = y.a.floatIcon.wechatEntranceType;
                            if (2 == r) n = y.a.floatIcon.wechatEntranceUrl, a = y.a.floatIcon.wechatEntranceImage, o = y.a.floatIcon.wechatEntranceAbsoluteUrl;
                            else if (3 == r) return
                        }
                        this.address = o || y.a.staticURL + "/" + n + "/index.html?" + i, $('\n      <a id="hdgg-left-float-image" href="javascript:;" style=\'font-size:' + this.rem + "rem;position:fixed;top:6.2em;left:0;z-index:99;width:3.5em;'>\n        <img src=\"https://hdggcdn.bayimob.com/hdggstatic/activity/" + a + '" style="width:100%;" />\n      </a>').appendTo($("body")), $("#hdgg-left-float-image").on("click", function () {
                            var t = {
                                event: "list_icon_click",
                                appkey: e.appkey,
                                adSpaceKey: e.adSpaceKey,
                                uid: e.uid
                            };
                            e.ganmeListClick(t)
                        })
                    }
                }
            }, {
                key: "ganmeListClick",
                value: function (e) {
                    var t = this;
                    R.gameListClick(e).then(function (e) {
                        window.location.href = t.address
                    }).catch(function (e) {})
                }
            }]), e
        }()),
        z = function () {
            function e(t) {
                var i = this;
                l()(this, e);
                var n = {
                        appkey: t.appkey,
                        adSpaceKey: t.adSpaceKey,
                        imei: t.imei,
                        idfa: t.idfa,
                        entranceType: 5
                    },
                    a = g.a.stringify(n);
                this.getMaterial().then(function (e) {
                    var t = e.imageurl || "",
                        n = e.pathname || "";
                    n = n.replace("static/", ""), i.gameMaterialId = e.id, i.imageurl = y.a.assetURL + "/" + t, i.fullpath = y.a.staticURL + "/" + n + "/index.html?" + a, t && n && (0 == $("#hdgg_more_game_award").length ? (i.create(), i.createAnimate().then(function (e) {
                        i.materialShow()
                    })) : (i.change(), i.materialShow()))
                })
            }
            return f()(e, [{
                key: "getMaterial",
                value: function () {
                    return R.gameMaterial()
                }
            }, {
                key: "create",
                value: function () {
                    $("body").append('\n      <div id="hdgg_more_game_award">\n        <a id="hdgg_more_game_element" href="javascript:;">\n          <img style="display: block;width:100%;" src="' + this.imageurl + '" />\n        </a>\n      </div>\n    '), $("#hdgg_more_game_element").on("click", this.routeTo.bind(this))
                }
            }, {
                key: "createAnimate",
                value: function () {
                    return new c.a(function (e, t) {
                        setTimeout(function () {
                            $("#hdgg_more_game_award").addClass("hdgg_toMiddle").addClass("hdgg_toMiddleForward")
                        }, 200), setTimeout(function () {
                            $("#hdgg_more_game_award").addClass("hdgg_shake")
                        }, 1400), setTimeout(function () {
                            $("#hdgg_more_game_award").addClass("hdgg_move"), e()
                        }, 2400)
                    })
                }
            }, {
                key: "change",
                value: function () {
                    $("#hdgg_more_game_award").find("img").attr("src", this.imageurl)
                }
            }, {
                key: "materialShow",
                value: function () {
                    R.materialShow({
                        gameMaterialId: this.gameMaterialId
                    })
                }
            }, {
                key: "routeTo",
                value: function () {
                    var e = this;
                    this.materialClick().then(function (t) {
                        window.location.href = e.fullpath
                    })
                }
            }, {
                key: "materialClick",
                value: function () {
                    return R.materialClick({
                        gameMaterialId: this.gameMaterialId
                    })
                }
            }]), e
        }(),
        q = (i(80), function () {
            function e(t) {
                l()(this, e), this.appkey = t.appkey, this.adSpaceKey = t.adSpaceKey, this.rem = t.rem, this.uid = t.uid, this.sessionId = t.sessionId, this.gameName = t.gameName, this.province = t.province, this.ad = t.ad, this.click = t.click, this.routeToAd = t.routeToAd, this.options = t.options, this.init()
            }
            return f()(e, [{
                key: "init",
                value: function () {
                    var e = {
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey
                        },
                        t = (g.a.stringify(e), y.a.tiXianIcon.entranceUrl, y.a.tiXianIcon.entranceImage),
                        i = y.a.tiXianIcon.entranceAbsoluteUrl;
                    if (!v.a.mpEnv()) {
                        i || y.a.staticURL, $('\n      <a id="hdgg-right-tixian-image" href="javascript:;" style=\'font-size:' + this.rem + "rem;position:absolute;top:4rem;right:0.525rem;z-index:99;width:2.85rem;color:#eb3d01;'>\n        <img src=\"https://hdggcdn.bayimob.com/hdggstatic/activity/" + t + '" style="width:100%;" />\n        <div class="ti_xian" style="position: absolute;top:0.7rem;right:0rem;width:2.8rem;text-align:center;"><span style="font-size:0.7rem" class="txMoney">0</span><span style="font-size:0.5rem">元</span></div>\n      </a>').appendTo($("body")), $('<div class="to_chou">\n        <div class="to_chou_img"><span></span></div>\n        <div class="to_chouPrize"></div>\n        <div class="close-chou"></div>\n      </div>').appendTo($("body")), $('<div class="to_tixian">\n          <div class="ti_xian_img"><span></span></div>\n          <div class="txImg"><img src="' + this.ad.imageUrl + '"></div>\n          <div class="to_getMoney"></div>\n          <div class="close-tixian"></div>\n        </div>').appendTo($("body")), $(' <div class="prize_box">\n        <div class="jin_gif">\n        <div style="display: none;"><span class="third"></span><span>元</span></div>\n       </div>\n       </div>\n    ').appendTo($("body")), $(".alerty").css("z-index", "100");
                        var n = Number(parseFloat(v.a.storage.get("haveLoadMoney")).toFixed(2)) || 0;
                        $(".ti_xian .txMoney").text(n), this.handleTiXian()
                    }
                }
            }, {
                key: "handleTiXian",
                value: function () {
                    var e = this;
                    $(".ti_xian").click(function () {
                        var t = Number(parseFloat(v.a.storage.get("haveLoadMoney")).toFixed(2));
                        $(".ti_xian .txMoney").text() / 1 < e.ad.cashlimit || 0 == $(".ti_xian .txMoney").text() ? ($(".to_chou").show(), $(".to_chou_img span").text((Number(parseFloat(100 * e.ad.cashlimit).toFixed(2)) - Number(parseFloat(100 * $(".ti_xian .txMoney").text()).toFixed(2))) / 100)) : ($(".to_tixian").show(), $(".ti_xian_img span").text(t))
                    }), $(".to_getMoney,.txImg").click(function (t) {
                        t.preventDefault();
                        var i = v.a.storage.get("clickNoRepeat") || 1;
                        i > 2 ? e.routeToAd({
                            ad: e.ad
                        }) : e.tx_click().then(function (t) {
                            i++, v.a.storage.set("clickNoRepeat", i), e.routeToAd({
                                ad: e.ad
                            })
                        })
                    }), $(".to_chouPrize").click(function () {
                        $(".to_chou").hide()
                    }), $(".close-tixian,.close-chou").click(function () {
                        $(this).parent().hide()
                    })
                }
            }, {
                key: "txAnimate",
                value: function (e) {
                    var t = this;
                    $(".prize_box").show(), $(".jin_gif").css("background-image", "url(https://hdggcdn.bayimob.com/hdggstatic/yaoshaizi7/jinbi.gif?v=" + (new Date).getTime() + ")"), $(".jin_gif span.third").text(e), setTimeout(function () {
                        $(".jin_gif div").show()
                    }, 1e3), setTimeout(function () {
                        $(".jin_gif div").hide(), $(".to_chou").hide()
                    }, 2e3), setTimeout(function () {
                        var e = Number(parseFloat(v.a.storage.get("haveLoadMoney")).toFixed(2));
                        if ($(".prize_box").hide(), $(".ti_xian .txMoney").text(e), e == t.ad.cashlimit) {
                            $(".to_tixian").show(), $(".ti_xian_img span").text(e);
                            var i = v.a.storage.get("showNoRepeat") || 1;
                            i < 2 && (t.tx_show(), i++, v.a.storage.set("showNoRepeat", i))
                        }
                    }, 3e3)
                }
            }, {
                key: "tx_show",
                value: function () {
                    R.showTx({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        hdggAdvInfoId: this.ad.id,
                        gameName: this.gameName,
                        uid: this.uid,
                        sessionId: this.sessionId,
                        advMaterialId: this.ad.advMaterialId,
                        mobileSystem: v.a.mobileSystem,
                        province: this.province,
                        type: this.ad.type,
                        hdggReferer: v.a.gamePath,
                        adTriggerType: this.ad.adTriggerType,
                        gamehtml: this.ad.gameHtmlId || ""
                    })
                }
            }, {
                key: "tx_click",
                value: function () {
                    return R.clickTx({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        hdggAdvInfoId: this.ad.id,
                        gameName: this.gameName,
                        uid: this.uid,
                        sessionId: this.sessionId,
                        issuedTime: (new Date).getTime(),
                        province: this.province,
                        advMaterialId: this.ad.advMaterialId,
                        type: this.ad.type,
                        mobileSystem: v.a.mobileSystem,
                        doumobkey: this.ad.doumobkey,
                        dkey: this.ad.dkey,
                        hdggReferer: v.a.gamePath,
                        adTriggerType: this.ad.adTriggerType,
                        gamehtml: this.ad.gameHtmlId || ""
                    })
                }
            }]), e
        }()),
        H = function () {
            function e(t) {
                l()(this, e), this.rem = t.rem, this.flyTop = t.flyTop, this.init()
            }
            return f()(e, [{
                key: "init",
                value: function () {
                    var e = this;
                    v.a.mpEnv() || ($('\n      <a id="fly-prize" href="javascript:;" style=\'font-size:' + this.rem + 'rem;position:fixed;top:42%;right:50%;z-index:99;width:3.4rem;height:1.85rem;margin-right: -1.7rem;\'>\n        <img src="https://hdggcdn.bayimob.com/hdggstatic/activity/fly.png" style="width:100%;" />\n      </a>').appendTo($("body")), setTimeout(function () {
                        e.flyTop ? e.fly() : e.fly2()
                    }, 50), setTimeout(function () {
                        $("#fly-prize").remove()
                    }, 1050))
                }
            }, {
                key: "fly",
                value: function () {
                    $(".jiang").append('<img src="https://hdggcdn.bayimob.com/hdggstatic/yaoshaizi7/star.png" class="star" style="width:40%;margin-top:0.75rem;">'), $(".jiang").append('<img src="https://hdggcdn.bayimob.com/hdggstatic/yaoshaizi7/star.png" class="star1" style="width:35%;">'), $(".jiang").append('<img src="https://hdggcdn.bayimob.com/hdggstatic/yaoshaizi7/star.png" class="star2" style="width:30%;margin-top:-0.25rem;">'), $("#fly-prize").animate({
                        top: "1.25rem",
                        right: "3.5rem",
                        width: "0"
                    }, 1e3, function () {
                        $(".star").addClass("addw"), $(".star1").addClass("addw"), $(".star2").addClass("addw"), $(".jiang").addClass("jiangw"), setTimeout(function () {
                            $(".jiang").empty().removeClass("jiangw")
                        }, 500)
                    })
                }
            }, {
                key: "fly2",
                value: function () {
                    $("#fly-prize").animate({
                        top: "90%",
                        right: "3.5rem",
                        width: "0"
                    }, 1e3)
                }
            }]), e
        }(),
        V = (i(160), function () {
            function e(t) {
                l()(this, e), this.close = t.close, this.create(), this.handleClick()
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    $("#hdgg_show-noad").length > 0 && $("#hdgg_show-noad").remove(), $("body").append('\n      <div id="hdgg_show-noad" class="m-hdgg-no-ad">\n        <div class="m-close" style="display: none;"></div>\n        \x3c!--<div class="sogou-title" style="position:absolute;top:6.5em;left:50%;width:92%;height:3.77em;margin-left:-46%;background:url(\'https://hdggcdn.bayimob.com/hdggstatic/sougou/sgtxt.png\') 0 0 no-repeat;background-size:contain;z-index:1;"></div>--\x3e\n        \x3c!--<div class="sogou-guang"></div>--\x3e \n        <div class="m-wrapper" style="opacity: 1;">\n        <div id="sogou_wap_1005927" style="width: 94%;margin-left:3%;position:absolute;top:33%;"></div>\n        <div id="sogou_wap_1005916" style="width: 94%;margin-left:3%;position:absolute;top:56%;"></div>\n        \x3c!--<div class="m-box">\n          <div id="hdgg_click_ad_btn" class="m-btn">再来一次</div>\n          </div>--\x3e\n        </div>\n      </div> \n    '), setTimeout(function () {
                        navigator.userAgent.indexOf("iPhone") > -1 && 568 == screen.height && 320 == screen.width && ($("#sogou_wap_1005927").css("top", "35%"), $("#sogou_wap_1005916").css("top", "54%"), $(".m-wrapper").css("top", "-2em")), $("#hdgg_show-noad .m-wrapper").addClass("hdgg_result_show_animation").css("opacity", 1);
                        var e = document.getElementById("sogou_wap_1005927");
                        window.sogou_un = window.sogou_un || [], window.sogou_un.push({
                            id: "1005927",
                            ele: e
                        });
                        var t = document.getElementById("sogou_wap_1005916");
                        window.sogou_un.push({
                            id: "1005916",
                            ele: t
                        })
                    }, 0), setTimeout(function () {
                        $("#hdgg_show-noad .m-close").show(), $(".sogou-guang").addClass("hdgg_result_show_animation_guang").show()
                    }, 600)
                }
            }, {
                key: "handleClick",
                value: function () {
                    var e = this;
                    $("#hdgg_show-noad .m-close, #hdgg_click_ad_btn").on("click", function () {
                        $(e).hide(), e.close(), $("#hdgg_show-noad .m-wrapper").addClass("hdgg_result_hide_animation").css("opacity", 0), $(".sogou-guang").hide().removeClass("hdgg_result_show_animation_guang"), setTimeout(function () {
                            if ($("#hdgg_show-noad").remove(), window.styleReset && "function" == typeof window.styleReset) try {
                                window.styleReset()
                            } catch (e) {}
                        }, 400)
                    })
                }
            }]), e
        }()),
        X = (i(161), function () {
            function e(t) {
                l()(this, e), this.close = t.close, this.appkey = t.appkey, this.closeRed = t.closeRed, this.myClass = t.myClass, this.create(), this.handleClick()
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    if ("4a708280788589a5e04626da33190567" == this.appkey || "b84c22d4ac4cdb805a7648ccd0282796" == this.appkey || "0fc436e928caa10d823dabfca0ab1abf" == this.appkey || "c23d48c36bb99f3c9598c65daf745c78" == this.appkey || "c37ec21c6ee87e1a183bfde8ee96583b" == this.appkey || "c37ec21c6ee87e1a183bfde8ee96583b" == this.appkey) {
                        $("#baiduBox").length > 0 && $("#baiduBox").remove();
                        var e = document.createElement("script");
                        e.src = "https://cpro.baidustatic.com/cpro/ui/cm.js";
                        var t = document.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t), i = "_" + Math.random().toString(36).slice(2), $("body").append('<div id="baiduBox"><div class="bgBox"><div class="imgBox"><div style="" id="' + i + '"></div></div></div><div class="closeBtn"></div></div>'), (window.slotbydup = window.slotbydup || []).push({
                            id: "u3783465",
                            container: i
                        }), setTimeout(function () {
                            $("#baiduBox .closeBtn").show()
                        }, 600)
                    } else $("#hdgg_show-noadUc").length > 0 && $("#hdgg_show-noadUc").remove(), $("body").append('\n\t\t\t      <div id="hdgg_show-noadUc" class="m-hdgg-no-ad">\n\t\t\t        <div class="m-close" style="display: none;"></div>\n\t\t\t        <div class="m-wrapper" style="opacity: 1;">\n\t\t\t          <div class="m-box">\n\t\t\t            <div id="hdgg_click_ad_btn" class="m-btn">再来一次</div>\n\t\t\t          </div>\n\t\t\t        </div>\n\t\t\t      </div> \n\t\t\t    '), setTimeout(function () {
                        $("#hdgg_show-noadUc .m-wrapper").addClass("hdgg_result_show_animation").css("opacity", 1)
                    }, 0), setTimeout(function () {
                        $("#hdgg_show-noadUc .m-close").show()
                    }, 600);
                    var i
                }
            }, {
                key: "handleClick",
                value: function () {
                    var e = this;
                    $("#baiduBox .closeBtn").on("click", function () {
                        $(e).hide(), e.close(), setTimeout(function () {
                            if ($("#baiduBox").remove(), window.styleReset && "function" == typeof window.styleReset) try {
                                window.styleReset()
                            } catch (e) {}
                        }, 400)
                    }), $("#hdgg_show-noadUc .m-close, #hdgg_click_ad_btn").on("click", function () {
                        if ($(e).hide(), e.closeRed) return $("." + e.myClass).remove(), void $("#hdgg_show-noadUc").remove();
                        e.close(), $("#hdgg_show-noadUc .m-wrapper").addClass("hdgg_result_hide_animation").css("opacity", 0), setTimeout(function () {
                            if ($("#hdgg_show-noadUc").remove(), window.styleReset && "function" == typeof window.styleReset) try {
                                window.styleReset()
                            } catch (e) {}
                        }, 400)
                    })
                }
            }]), e
        }()),
        G = (i(162), function () {
            function e(t) {
                l()(this, e), this.ad = t.ad, this.click = t.click, this.close = t.close, this.that = t.that, this.create()
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    var e = this;
                    $("#hdgg_show-win").length > 0 && $("#hdgg_show-win").remove(), $("body").append('\n      <div id="hdgg_show-win">\n        <div class="popShowPrize dialog5" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">\n          <div class="card-sunshine"></div>\n          <div class="m-box"></div>\n          <div class="showPrize-dialog modal-body">\n            <div id="hdgg_click_ad_img" class="card-bg" style="background-image: url(https://hdggcdn.bayimob.com/hdggstatic/hongbao/hongcardbg_goldegg.png)">\n              <div class="m-image">\n                <div class="image" style="background: url(' + this.ad.imageUrl + ') 0 0 no-repeat;background-size: contain;"></div>\n              </div>\n            </div>\n            <div class="red-bg"></div>\n            <div class="detail">\n              <div class="topic">' + this.ad.message + '</div>\n              <div id="hdgg_click_ad_btn" class="goto">' + this.ad.receiveText + '</div>\n            </div><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span></div>\n        </div>\n      </div>\n    '), setTimeout(function (t) {
                        $("#hdgg_show-win .dialog5").append('<span class="close-btn closetc iconfont"></span>'), e.hadnleClose()
                    }, 1500), this.hadnleClick()
                }
            }, {
                key: "hadnleClose",
                value: function () {
                    var e = this;
                    $("#hdgg_show-win .close-btn").on("click", function () {
                        $("#hdgg_show-win").remove(), e.close()
                    })
                }
            }, {
                key: "hadnleClick",
                value: function () {
                    var e = this;
                    v.a.mpEnv() && this.ad.appId ? $("#hdgg_click_ad_btn").on("click", function () {
                        e.click({
                            ad: e.ad
                        })
                    }) : $("#hdgg_click_ad_btn, #hdgg_click_ad_img .m-image").one("click", function (t) {
                        return t.preventDefault(), e.click({
                            ad: e.ad
                        }), !1
                    })
                }
            }]), e
        }()),
        W = (i(163), function () {
            function e(t) {
                var i = this;
                l()(this, e), this.params = {
                    appkey: t.appkey,
                    adSpaceKey: t.adSpaceKey,
                    uid: t.uid,
                    imei: t.imei,
                    idfa: t.idfa,
                    hdgghtmlid: t.hdgghtmlid
                }, this.gameType = t.gameType, this.create(), this.requestList().then(function (e) {
                    0 == e.code && i.render(e)
                })
            }
            return f()(e, [{
                key: "ganmeListClick",
                value: function (e, t) {
                    R.gameListClick(e).then(function (e) {
                        window.location.href = t
                    }).catch(function (e) {})
                }
            }, {
                key: "create",
                value: function () {
                    $("#hdgg_show-tomorrow").length > 0 && $("#hdgg_show-tomorrow").remove(), $("body").append('\n      <div id="hdgg_show-tomorrow">\n        <div class="m-wrapper">\n          \x3c!--<div class="m-hd"></div>--\x3e\n          <div class="m-close"></div>\n          <div class="m-huan" onclick=""></div>\n          <div class="m-content">\n            <div class="m-content-inner">\n\n            </div>\n          </div>\n        </div>\n      </div>\n    '), $("body").css("overflow-y", "hidden"), $("#hdgg_show-tomorrow .m-close").on("click", function () {
                        $("body").css("overflow-y", "auto"), $("#hdgg_show-tomorrow").remove()
                    })
                }
            }, {
                key: "requestList",
                value: function () {
                    return T({
                        url: "/gameList",
                        params: this.params,
                        method: "get"
                    })
                }
            }, {
                key: "render",
                value: function (e) {
                    var t = this;
                    if (0 === e.code) {
                        var i = e.list;
                        this.appendCard(i), $(document).on("click", ".goAnother", function (e) {
                            e.preventDefault();
                            var i = e.currentTarget.href,
                                n = {
                                    event: "list_trunto",
                                    appkey: t.params.appkey,
                                    adSpaceKey: t.params.adSpaceKey,
                                    uid: t.params.uid
                                };
                            t.ganmeListClick(n, i)
                        }), $("#hdgg_show-tomorrow .m-huan").off("click"), $("#hdgg_show-tomorrow .m-huan").on("click", function () {
                            t.huan(i), T({
                                url: "/gameList",
                                params: u()({}, t.params, {
                                    hdgghtmlid: t.huan(i)
                                }),
                                method: "get"
                            }).then(function (e) {
                                0 === e.code && (i = e.list, $("#hdgg_show-tomorrow .m-content-inner").empty(), t.appendCard(i))
                            })
                        })
                    }
                }
            }, {
                key: "huan",
                value: function (e) {
                    for (var t = [], i = 0, n = e; i < n.length; i++) t.push(n[i].id);
                    return t.join(",")
                }
            }, {
                key: "appendCard",
                value: function (e) {
                    var t = this;
                    e.forEach(function (e) {
                        if (e.type != t.gameType) {
                            var i = /http/.test(e.url) ? e.url : "../../" + e.url;
                            $("#hdgg_show-tomorrow .m-content-inner").append('\n          <div class="m-li">\n             <a href="' + i + '&entranceType=4" class="goAnother" style="position:static;width:100%;height:auto;">\n              <div style="border-radius: 0.75em;width: 100%;padding: .2em .4em;">\n                <img src="https://hdggcdn.bayimob.com/' + e.cardImage + '" />\n              </div>\n             </a>\n            \x3c!--<p>' + e.gameName + '</p>--\x3e\n            <a href="' + i + '&entranceType=4" class="goAnother m-goAnother-btn"><span style="font-size: 1.25em"></span></a>\n          </div>\n        ')
                        }
                    })
                }
            }]), e
        }()),
        J = (i(164), function () {
            function e(t) {
                l()(this, e), this.options = t.options, this.create(), this.handleClick()
            }
            return f()(e, [{
                key: "handleClick",
                value: function () {
                    $(".Kefu").on("click", function () {
                        $(".pop_kefu").show()
                    }), this.handleClose()
                }
            }, {
                key: "create",
                value: function () {
                    $("body").append('<div class="Kefu"></div>\n\t\t\t<div class="pop_kefu">\n\t\t\t\t<div class="kefu_content">\n\t\t\t\t\t<div class="kefu_item">\n\t\t\t\t\t\t<a href="https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1VPXvay&scene=SCE00005273"></a>\n\t\t\t\t\t\t<a href="tel:010-85759707"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="close"></div>\n\t\t\t\t</div>\n\t\t\t</div>');
                    var e = this.options.appkey;
                    "6f0ce7c9203b2bbf94dfa06ae76e3dcd" != e && "71f7c076c3c552d9eb50cf8a2cc61016" != e && "31507b3303ad5f8c434d068dcfd7fe40" != e && "ace6f2c9a07d8b7533955fb280247967" != e || $(".Kefu").addClass("special")
                }
            }, {
                key: "handleClose",
                value: function () {
                    $(".pop_kefu .close").on("click", function () {
                        $(".pop_kefu").hide()
                    })
                }
            }]), e
        }()),
        Q = i(52),
        Y = i.n(Q),
        Z = (i(165), function () {
            function e(t, i) {
                var n = t.appkey,
                    a = t.adSpaceKey;
                l()(this, e), this.appkey = n, this.adSpaceKey = a, this.returnSetting = i, this.defaultPathArr = v.a.storage.get("defaultPathArr") || [], this.isIncludes = this.defaultPathArr.includes(this.adSpaceKey), this.slmNum = v.a.session.get("slmNum") || 1, this.isSlmUrl = v.a.getUrlParam("isSlmUrl"), this.currentLimit = v.a.session.get("currentLimit") || "", /MicroMessenger/i.test(navigator.userAgent.toLowerCase()) || this.initSlm()
            }
            return f()(e, [{
                key: "initSlm",
                value: function () {
                    if (!v.a.session.get("eggIframe") && ("1" != this.slmNum || this.checkCurrentLimit()) && ("1" == this.slmNum || this.isSlmUrl) && this.returnSetting.openOrClose) {
                        if (this.returnSetting.pathChoose) return void this.customPath();
                        this.defaultPath()
                    }
                }
            }, {
                key: "defaultPath",
                value: function () {
                    this.slmNum > 2 || this.customPathBack(null)
                }
            }, {
                key: "customPath",
                value: function () {
                    "1" == this.returnSetting.changeFrequency && this.isIncludes && "1" == this.slmNum || this.customPathLimit()
                }
            }, {
                key: "customPathLimit",
                value: function () {
                    var e = this.returnSetting.changeSettingList;
                    if (!(this.slmNum > e.length - 1) || e[0].checked)
                        if (this.slmNum > e.length - 1 && e[0].checked) {
                            var t = e[0].pathNameList;
                            this.customPathBack(t)
                        } else if (e[this.slmNum].checked || e[0].checked)
                        if (e[this.slmNum].checked || !e[0].checked) {
                            if (e[this.slmNum].checked) {
                                var i = e[this.slmNum].pathNameList;
                                this.customPathBack(i)
                            }
                        } else {
                            var n = e[0].pathNameList;
                            this.customPathBack(n)
                        }
                }
            }, {
                key: "customPathBack",
                value: function (e) {
                    var t = void 0;
                    t = e && e.length > 0 ? e[Math.floor(Math.random() * e.length)].replace("static/", "") : "defaultPath", this.bindEvent();
                    var i = window.location.href;
                    window.history.replaceState({
                        page: "slm",
                        entered: !1
                    }, "", this.slmUrl(t)), window.history.pushState({
                        page: "current"
                    }, "", i)
                }
            }, {
                key: "checkCurrentLimit",
                value: function () {
                    var e = window.location.pathname.split("/").indexOf("index.html") - 1,
                        t = window.location.pathname.split("/")[e];
                    return this.currentLimit ? this.currentLimit == t : (v.a.session.set("currentLimit", t), !0)
                }
            }, {
                key: "slmUrl",
                value: function (e) {
                    var t = "?appkey=" + this.appkey + "&adSpaceKey=" + this.adSpaceKey + "&entranceType = 2&isSlmUrl=true",
                        i = "?appk=" + this.appkey + "&ask=" + this.adSpaceKey + "&from=back&entranceType = 2&isSlmUrl=true";
                    return "defaultPath" == e ? y.a.entrance + "" + i : y.a.staticURL + "/" + e + "/index.html" + t
                }
            }, {
                key: "bindEvent",
                value: function () {
                    var e = this;
                    window.onpopstate = function () {
                        window.history.state && "slm" == window.history.state.page && (window.history.state.entered || (window.history.replaceState({
                            page: "slm",
                            entered: !0
                        }, "", window.location.href), setTimeout(function () {
                            "1" != e.returnSetting.changeFrequency || e.isIncludes || (e.defaultPathArr.push(e.adSpaceKey), v.a.storage.set("defaultPathArr", e.defaultPathArr)), v.a.session.set("slmNum", Number(e.slmNum) + 1), window.location.reload()
                        }, 0)))
                    }
                }
            }]), e
        }()),
        ee = function () {
            function e(t) {
                l()(this, e), this.options = t.options, this.click = t.options.click, this.create(), this.num = 0, this.add_bag = "", this.ads = !0, this.suiArr = null, this.setTime = null, this.onclickRed()
            }
            return f()(e, [{
                key: "create",
                value: function () {
                    var e = this;
                    $("body").append('<div class="mengceng">\n            <div class="tanchuang">\n                 \n            </div>\n            <div class="redTitle"></div>\n            <div class="jishi"></div>\n            <ul class="couten">\n            \n            </ul>\n            <div class="timeShow">\n                距离结束还有\n                <span class="daoNum">5</span><span>s</span>\n            </div>\n            <div class="topBaoxiang"><span>0</span></div>\n            <div class="fotterLight">\n                <div class="smallLight">\n                    <div class="bigBao"></div>\n                </div>\n            </div>\n            <div class="timeEnd"></div>\n        </div>'), setTimeout(function () {
                        e.countDown()
                    }, 1e3)
                }
            }, {
                key: "createRed",
                value: function () {
                    var e = this;
                    setInterval(function () {
                        var t, i = parseInt($(".couten").width()) - 60,
                            n = parseInt(Math.random() * (i - 0) + 4),
                            a = 2 * Math.random() + 1,
                            o = (Math.random(), parseInt(90 * Math.random() - 45) + "deg");
                        parseInt(80 * Math.random() - 60), 1 == e.ads ? (e.num++, $(".couten").append("<li class='redBg" + e.num + "' ><div class='div" + e.num + "'>+1</div><a href='javascript:;'><img  src='https://hdggcdn.bayimob.com/hdggstatic/redBag/hb1_nor.png'></a></li>"), $(".redBg" + e.num).css({
                            left: n
                        }), $(".div" + e.num).css({
                            width: "2rem",
                            height: "2rem",
                            position: "absolute",
                            top: "0rem",
                            left: "3rem",
                            color: "red",
                            "font-size": "1.5rem",
                            display: "none"
                        }), $(".redBg" + e.num + " a img").css((t = {
                            width: a + "rem",
                            transform: "rotate(" + o + ")",
                            "-webkit-transform": "rotate(" + o + ")",
                            "-ms-transform": "rotate(" + o + ")",
                            "-moz-transform": "rotate(" + o + ")"
                        }, Y()(t, "-webkit-transform", "rotate(" + o + ")"), Y()(t, "-o-transform", "rotate(" + o + ")"), t)), $(".redBg" + e.num).animate({
                            top: $(window).height() + 20
                        }, 2e3, function () {
                            $(".redBg" + e.num).remove()
                        })) : $(".couten").empty()
                    }, 100)
                }
            }, {
                key: "addRed",
                value: function () {
                    var e = this;
                    setTimeout(function () {
                        $(".timeShow").show(), e.redBagFalling()
                    }, 800), this.num = 0, this.ads = !0, this.createRed()
                }
            }, {
                key: "countDown",
                value: function () {
                    var e = this;
                    $(".redTitle").hide(), setTimeout(function () {
                        $(".jishi").show()
                    }, 350);
                    var t = setInterval(function () {
                        setTimeout(function () {
                            $(".jishi").addClass("jishi_animate"), setTimeout(function () {
                                $(".jishi").removeClass("jishi").addClass("jishi2"), setTimeout(function () {
                                    $(".jishi2").removeClass("jishi1").addClass("jishi1"), setTimeout(function () {
                                        $(".jishi1").removeClass("jishi1").addClass("jishiGo").removeClass("jishi_animate")
                                    }, 350)
                                }, 350)
                            }, 350)
                        }, 350)
                    }, 300);
                    setTimeout(function () {
                        clearInterval(t), $(".jishiGo").hide(), setTimeout(function () {
                            e.addRed()
                        }, 200)
                    }, 3e3)
                }
            }, {
                key: "redBagFalling",
                value: function () {
                    var e = this,
                        t = 5;
                    this.suiArr = setInterval(function () {
                        t--, $(".daoNum").text(t), 0 == t && (clearInterval(e.suiArr), setTimeout(function () {
                            $(".timeShow").hide(), $(".couten").hide(), $(".timeEnd").show(), setTimeout(function () {
                                $(".timeEnd").hide(), $(".fotterLight").show(), $(".topBaoxiang").hide()
                            }, 1e3)
                        }, 1e3), setTimeout(function () {
                            $(".bigBao").css({
                                background: "url(https://hdggcdn.bayimob.com/hdggstatic/redBag/baoBg.png) no-repeat",
                                "background-size": "100%"
                            }), R.getAd({
                                appkey: e.options.appkey,
                                adSpaceKey: e.options.adSpaceKey,
                                uid: e.options.uid,
                                hdggReferer: v.a.gamePath,
                                mobileSystem: v.a.mobileSystem,
                                browserType: v.a.browserType,
                                advLayout: e.options.advLayout,
                                adTriggerType: "rainEnvelope"
                            }).then(function (t) {
                                if (1 == t.advLayout) {
                                    var i = '<div class="propur"><div class="tcAnimation"><div class="imgBox"></div><div class="imgUrl"><img src="' + t.imageUrl + '"/></div><div class="txt">' + t.advIntro + '</div><div class="redBox"></div><div class="jinBox"> </div><div class="baoBox"></div><div class="linGo"></div></div></div>';
                                    $("body").append(i), setTimeout(function () {
                                        $(".jinBox,.redBox").show()
                                    }, 500), setTimeout(function () {
                                        $(".propur").append('<span id="closes" class="close-btns closetc iconfont"></span>'), e.closeClick()
                                    }, 1500)
                                }
                                if (2 == t.advLayout) {
                                    var n = {
                                        ad: t,
                                        closeRed: !0,
                                        myClass: "mengceng",
                                        myClick: e.handClick,
                                        appkey: e.options.appkey,
                                        adSpaceKey: e.options.adSpaceKey,
                                        hdggAdvInfoId: t.id,
                                        gameName: e.options.gameName,
                                        uid: e.options.uid,
                                        sessionId: e.options.sessionId,
                                        issuedTime: (new Date).getTime(),
                                        province: e.options.province,
                                        advMaterialId: t.advMaterialId,
                                        mobileSystem: v.a.mobileSystem,
                                        imei: e.options.imei,
                                        doumobkey: t.doumobkey,
                                        dkey: t.dkey,
                                        type: t.type,
                                        bidReqId: t.bidReqId,
                                        adPlatformValue: t.adPlatformValue,
                                        hdggReferer: v.a.gamePath,
                                        sessId: t.sessId,
                                        repeatIssued: t.repeatIssued,
                                        adTriggerType: "rainEnvelope",
                                        gameHtmlId: t.gameHtmlId
                                    };
                                    new K(n)
                                }
                                t.advLayout || new X({
                                    appkey: e.options.appkey,
                                    closeRed: !0,
                                    myClass: "mengceng"
                                }), e.showClick(t), e.clickDrop(t, {
                                    appkey: e.options.appkey,
                                    adSpaceKey: e.options.adSpaceKey,
                                    uid: e.options.uid,
                                    hdggReferer: v.a.gamePath,
                                    mobileSystem: v.a.mobileSystem,
                                    browserType: v.a.browserType,
                                    advLayout: e.options.advLayout,
                                    adTriggerType: "rainEnvelope"
                                })
                            }).catch(function (t) {
                                new X({
                                    appkey: e.options.appkey,
                                    closeRed: !0,
                                    myClass: "mengceng"
                                })
                            })
                        }, 4e3))
                    }, 1e3)
                }
            }, {
                key: "onclickRed",
                value: function () {
                    var e = 0;
                    $(".couten").on("touchstart", "li", function () {
                        $("." + $(this).attr("class") + " img").attr("src", "https://hdggcdn.bayimob.com/hdggstatic/redBag/hb1_pre.png").addClass("bgOpcity"), $("." + $(this).attr("class") + " img").attr("src") && e < 3 && (e++, $(".topBaoxiang span").text(e)), $("." + $(this).attr("class") + " div").show(), $(this).css("animation", "all 0s linear")
                    })
                }
            }, {
                key: "closeClick",
                value: function (e) {
                    $("#closes").on("click", function () {
                        v.a.storage.remove("slmShow"), $(".mengceng,.propur").remove()
                    })
                }
            }, {
                key: "handClick",
                value: function (e) {
                    var t = this;
                    R.click({
                        statistics: {
                            appkey: this.options.appkey,
                            adSpaceKey: this.options.adSpaceKey,
                            hdggAdvInfoId: e.id,
                            gameName: this.options.gameName,
                            uid: this.options.uid,
                            sessionId: this.options.sessionId,
                            issuedTime: (new Date).getTime(),
                            province: this.options.province,
                            advMaterialId: e.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            imei: this.options.imei,
                            doumobkey: e.doumobkey,
                            dkey: e.dkey,
                            type: e.type,
                            bidReqId: e.bidReqId,
                            adPlatformValue: e.adPlatformValue,
                            hdggReferer: v.a.gamePath,
                            sessId: e.sessId,
                            repeatIssued: e.repeatIssued,
                            adTriggerType: "rainEnvelope",
                            gameHtmlId: e.gameHtmlId
                        }
                    }).then(function (i) {
                        window.location.href = e.urlPath + location.search + "&dkey=" + e.dkey + "&doumobkey=" + e.doumobkey + "&doumobkey=" + e.doumobkey + "&uid=" + t.options.uid + "&advMaterialId=" + e.advMaterialId + "&sessionId=" + t.options.sessionId + "&mobileSystem=" + v.a.mobileSystem + "&gameName=" + t.options.gameName + "&sessId=" + e.sessId + "&repeatIssued=" + e.repeatIssued + "&hdggReferer=" + v.a.gamePath + "&province=" + t.options.province
                    })
                }
            }, {
                key: "showClick",
                value: function (e) {
                    R.show({
                        statistics: {
                            appkey: this.options.appkey,
                            adSpaceKey: this.options.adSpaceKey,
                            hdggAdvInfoId: e.id,
                            gameName: this.options.gameName,
                            uid: this.options.uid,
                            sessionId: this.options.sessionId,
                            issuedTime: (new Date).getTime(),
                            province: this.options.province,
                            advMaterialId: e.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            imei: this.options.imei,
                            doumobkey: e.doumobkey,
                            dkey: e.dkey,
                            type: e.type,
                            bidReqId: e.bidReqId,
                            adPlatformValue: e.adPlatformValue,
                            hdggReferer: v.a.gamePath,
                            sessId: e.sessId,
                            repeatIssued: e.repeatIssued,
                            adTriggerType: "rainEnvelope",
                            gameHtmlId: e.gameHtmlId
                        }
                    }).then(function (e) {})
                }
            }, {
                key: "clickDrop",
                value: function (e, t) {
                    var i = this;
                    $(".linGo").on("click", function () {
                        i.handClick(e)
                    }), $(".tcAnimation").on("click", "img", function () {
                        i.handClick(e)
                    })
                }
            }]), e
        }(),
        te = function () {
            function e(t) {
                l()(this, e), this.creatInfo(), this.options = t
            }
            return f()(e, [{
                key: "creatInfo",
                value: function () {
                    var e = this;
                    setTimeout(function () {
                        var t = '\n        <div class="record_info" style="padding: 10px 20px;text-align: center;background: rgba(0,0,0,.2);color: rgba(255,255,255,.5);position: absolute;width:100%;line-height:20px;box-sizing:border-box;">\n             ' + e.options.footerText + "\n        </div>";
                        $("body").append(t);
                        var i = document.body.scrollHeight;
                        $(".record_info").css({
                            top: i
                        }), $("body").css({
                            overflow: "auto"
                        })
                    }, 400)
                }
            }]), e
        }(),
        ie = (i(166), {
            Redpacket: L,
            Redpacket2: O,
            RecordButton: U,
            RecordList: D,
            Rules: B,
            Entrance: F,
            GameCenter: z,
            NoAd: V,
            NoAdUc: X,
            Prize: G,
            MoreGame: W,
            PrizePDD: K,
            TxEntrance: q,
            FlyPrize: H,
            Kefu: J,
            RecordInfo: te,
            redBag: ee
        }),
        ne = function () {
            function e(t) {
                l()(this, e), this.options = u()({}, y.a, t), this.handleWinClick = this.handleWinClick.bind(this), this.handleWinClose = this.handleWinClose.bind(this), this.routeToAd = this.routeToAd.bind(this), this.startFn = this.startFn.bind(this), this.chaShow = !0, this.chuanJianShow = !0
            }
            return f()(e, [{
                key: "getConfiguration",
                value: function () {
                    var e = this;
                    return new c.a(function (t, i) {
                        R.getConfiguration({
                            adSpaceKey: e.options.adSpaceKey
                        }).then(function (t) {
                            var i = t.adspaceReturnPathSetting;
                            for (var n in e.options.redEnvelopeShow || new Z({
                                    appkey: e.appkey,
                                    adSpaceKey: e.adSpaceKey
                                }, i), t.adspacePluginsSettingVOList) {
                                if (e.options.redEnvelopeShow && 1 == t.adspacePluginsSettingVOList[n].adspacePluginsId && function () {
                                        var a = e;
                                        if (1 == t.adspacePluginsSettingVOList[n].state)
                                            if (0 == t.adspacePluginsSettingVOList[n].triggerValue) {
                                                var o = v.a.storage.get("chaShowAgoTime") ? v.a.storage.get("chaShowAgoTime") : (new Date).getTime();
                                                (new Date).getTime() > o && (v.a.storage.remove("chaShowAgoTime"), v.a.storage.remove("chaShow")), window.sessionStorage.getItem("chShow") && v.a.session.get("mySlm") && new Z({
                                                    appkey: e.appkey,
                                                    adSpaceKey: e.adSpaceKey
                                                }, i), e.chaShow = !v.a.storage.get("chaShow"), e.chaShow && (window.sessionStorage.getItem("chShow") || (window.history.replaceState({
                                                    isOpenSlm: !0,
                                                    random: Math.random()
                                                }, "", null), window.history.pushState({
                                                    target: "MeanSure",
                                                    random: Math.random()
                                                }, "", null), window.sessionStorage.setItem("chShow", e.options.type)), window.sessionStorage.getItem("chShow") == e.options.type && window.addEventListener("popstate", function (t) {
                                                    history.state.isOpenSlm && new Z({
                                                        appkey: e.appkey,
                                                        adSpaceKey: e.adSpaceKey
                                                    }, i), 1 == e.chuanJianShow && (v.a.storage.set("chaShowAgoTime", (new Date).getTime() / 1 + 864e5), e.chuanJianShow = !1, v.a.storage.set("chaShow", 2), new ie.redBag({
                                                        options: {
                                                            appkey: a.appkey,
                                                            adSpaceKey: a.adSpaceKey,
                                                            uid: a.uid,
                                                            advLayout: a.advLayout,
                                                            routeToAd: e.routeToAd
                                                        }
                                                    }), v.a.session.set("mySlm", 222))
                                                }, !1))
                                            } else window.sessionStorage.getItem("chShow") ? v.a.session.get("mySlm") && new Z({
                                                appkey: e.appkey,
                                                adSpaceKey: e.adSpaceKey
                                            }, i) : (window.history.replaceState({
                                                isOpenSlm: !0
                                            }, "", null), window.history.pushState({
                                                target: "MeanSure",
                                                random: Math.random()
                                            }, "", null), window.sessionStorage.setItem("chShow", e.options.type)), window.addEventListener("popstate", function () {
                                                history.state.isOpenSlm && new Z({
                                                    appkey: e.appkey,
                                                    adSpaceKey: e.adSpaceKey
                                                }, i), window.sessionStorage.getItem("chShow") == e.options.type && 1 == e.chuanJianShow && (e.chuanJianShow = !1, new ie.redBag({
                                                    options: {
                                                        appkey: a.appkey,
                                                        adSpaceKey: a.adSpaceKey,
                                                        uid: a.uid,
                                                        advLayout: a.advLayout,
                                                        routeToAd: e.routeToAd
                                                    }
                                                }), v.a.session.set("mySlm", 222))
                                            }, !1);
                                        else new Z({
                                            appkey: e.appkey,
                                            adSpaceKey: e.adSpaceKey,
                                            province: e.ipInfo.province,
                                            gameName: e.gameName,
                                            sessionId: e.sessionId,
                                            imei: e.imei
                                        }, i)
                                    }(), 2 == t.adspacePluginsSettingVOList[n].adspacePluginsId)
                                    if (1 == t.adspacePluginsSettingVOList[n].state) {
                                        var a = Math.floor(100 * Math.random());
                                        0 < a && a < t.adspacePluginsSettingVOList[n].triggerValue && (e.options.noRedpacket = !1)
                                    } else e.options.noRedpacket = !0;
                                3 == t.adspacePluginsSettingVOList[n].adspacePluginsId && (1 == t.adspacePluginsSettingVOList[n].state ? e.options.txEntranceShow = !0 : e.options.txEntranceShow = !1)
                            }
                            for (var o in t.mediaPluginsSettingVOList) 1 == t.mediaPluginsSettingVOList[o].mediaPluginsId && 1 == t.mediaPluginsSettingVOList[o].state && new ie.Kefu({
                                options: e.options
                            }), 2 == t.mediaPluginsSettingVOList[o].mediaPluginsId && 1 == t.mediaPluginsSettingVOList[o].state && new ie.RecordInfo({
                                footerText: t.mediaPluginsSettingVOList[o].setting
                            })
                        }).then(function () {
                            e.getUid().then(function (t) {
                                if (v.a.storage.get("mid") ? e.uid = v.a.storage.get("mid") : e.uid = t, e.options.txEntranceShow)
                                    if (v.a.storage.get("tiXianAd") && "object" == r()(v.a.storage.get("tiXianAd"))) {
                                        e.tiXianAd = v.a.storage.get("tiXianAd");
                                        var i = g.a.parse(e.tiXianAd.fullpath.split("?")[1]);
                                        i.sessionId = e.sessionId, e.tiXianAd.fullpath = e.tiXianAd.fullpath.split("?")[0] + "?" + g.a.stringify(i), e.tx_init()
                                    } else e.fetch_txAd().then(function (t) {
                                        0 != a()(t).length && (e.tiXianAd = t, "object" == (void 0 === t ? "undefined" : r()(t)) && e.tx_init())
                                    });
                                e.fetch_uv(), e.fetch_imei(), R.getLocation().then(function (t) {
                                    return e.ipInfo = t, c.a.resolve()
                                }).then(function (t) {
                                    return e.judgeRedpacket()
                                }).then(function (t) {
                                    return e.initFinishFlag = !0, 1 == t ? (v.a.storage.set("diaoBao", 1), e.get_ad()) : new c.a(function () {})
                                }).then(function (t) {
                                    t && t.id && (e.ad = t, e.options.alwaysAward ? new ie.Redpacket2({
                                        appkey: e.appkey,
                                        adSpaceKey: e.adSpaceKey,
                                        uid: e.uid,
                                        sessionId: e.sessionId,
                                        entranceType: e.entranceType,
                                        hdggAdvInfoId: e.hdggAdvInfoId,
                                        gameName: "掉红包2",
                                        province: e.ipInfo.province,
                                        ad: t,
                                        record: e.record,
                                        save: e.save,
                                        close: e.handleWinClose,
                                        click: e.handleWinClick,
                                        routeToAd: e.routeToAd,
                                        options: e.options
                                    }) : new ie.Redpacket({
                                        appkey: e.appkey,
                                        adSpaceKey: e.adSpaceKey,
                                        uid: e.uid,
                                        sessionId: e.sessionId,
                                        entranceType: e.entranceType,
                                        hdggAdvInfoId: e.hdggAdvInfoId,
                                        gameName: "掉红包",
                                        province: e.ipInfo.province,
                                        imei: e.imei,
                                        ad: t,
                                        record: e.record,
                                        save: e.save,
                                        close: e.handleWinClose,
                                        click: e.handleWinClick,
                                        routeToAd: e.routeToAd,
                                        options: e.options
                                    }))
                                })
                            })
                        }).catch(function (e) {}).catch(function (e) {})
                    })
                }
            }, {
                key: "init",
                value: function () {
                    var e, t;
                    this.getConfiguration(), this.initFinishFlag = !1, this.checkExpireTime(), this.dataInit(), this.rem = this.remInit(), this.bindEventRecord(), this.bindEventRules(), v.a.mpEnv() && v.a.getWxMiniProgramSDK(), this.options.entranceShow && new ie.Entrance({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        rem: this.rem,
                        uid: v.a.cookies.get("hdgg_uid")
                    }), this.options.miniprogramIconShow && v.a.mpEnv() && (e = {
                        rem: this.rem
                    }, t = e.rem, $('\n  <a id="hdgg_miniprogram_route_icon" href="javascript:;" style=\'font-size:' + t + "rem;position:fixed;top:3em;right:.5em;z-index:99;width:3.5em;'>\n    <img src=\"https://hdggcdn.bayimob.com/hdggstatic/activity/" + y.a.miniprogramIconImageUrl + '" style="width:100%;" />\n  </a>').appendTo($("body")), $("#hdgg_miniprogram_route_icon").on("click", function () {
                        v.a.getWxMiniProgramSDK().then(function (e) {
                            e.miniProgram.navigateTo({
                                url: y.a.miniprogramIconPath
                            })
                        })
                    }))
                }
            }, {
                key: "remInit",
                value: function () {
                    var e = 20 / 375 / this.options.rem,
                        t = .064 / this.options.rem;
                    return $('<style type="text/css">\n      #hdgg_record_button, #hdgg-record-page, #hdgg_show-win, #hdgg_show-noad, #hdgg_show-tomorrow, #hdgg_rules-wrapper,#hdgg_taobao,#hdgg_miniprogram_popup {font-size: ' + e + "rem;}\n      #hdgg_redpack {font-size: " + t + "rem;}\n    </style>").appendTo($("head")), e
                }
            }, {
                key: "dataInit",
                value: function () {
                    this.times = this.options.times, this.leftTimes = "" !== v.a.storage.get("leftTimes") && null !== v.a.storage.get("leftTimes") ? v.a.storage.get("leftTimes") : this.options.times, this.time = v.a.storage.get("adsCreateTime") || "", this.record = v.a.storage.get("adsRecord") || [], this.appkey = encodeURIComponent(this.options.appkey), this.adSpaceKey = encodeURIComponent(this.options.adSpaceKey), this.gameName = this.options.name, this.gameType = this.options.type, this.advLayout = this.options.pddCustomDialog ? 2 : 1, this.isFreshman = v.a.storage.get("isFreshman"), this.isFreshman2 = v.a.storage.get("isFreshman2"), this.imei = v.a.getUrlParam("imei") || "", this.idfa = v.a.getUrlParam("idfa") || "", this.sex = v.a.getUrlParam("sex") || "", this.network = v.a.getUrlParam("network") || "", this.hdgghtmlid = v.a.getUrlParam("hdgghtmlid") || "", this.ipInfo = {
                        country: "",
                        province: "",
                        city: ""
                    }, this.cuser = v.a.getUrlParam("cuser") || v.a.storage.get("cuser") || "", this.cprize = v.a.getUrlParam("cprize") || v.a.storage.get("cprize") || "";
                    var e = v.a.storage.get("txAdTime") ? v.a.storage.get("txAdTime") : (new Date).getTime();
                    if ((new Date).getTime() > e && (v.a.storage.remove("txAdTime"), v.a.storage.remove("haveTwice"), v.a.storage.remove("haveLoadMoney"), v.a.storage.remove("tiXianAd"), v.a.storage.remove("clickNoRepeat"), v.a.storage.remove("showNoRepeat")), this.gameArr = v.a.storage.get("gameArr") || [], this.sessionId = v.a.randomRange(10), this.entranceType = v.a.getUrlParam("entranceType") || 1, v.a.getUrlParam("openid") ? v.a.session.set("openid", v.a.getUrlParam("openid")) : /sex/.test(window.location.href) && /network/.test(window.location.href) && v.a.session.set("openid", "openid"), (v.a.storage.get("appkey") && decodeURIComponent(v.a.storage.get("appkey")) != decodeURIComponent(this.options.appkey) || v.a.storage.get("gamename") && v.a.storage.get("gamename") != this.options.name) && (this.times = this.options.times, this.leftTimes = this.options.times, this.time = "", this.save()), v.a.storage.get("gameArr")) {
                        var t = this.gameArr;
                        for (var i in t)
                            if (t[i].type == this.options.type) return this.times = v.a.storage.get("gameArr")[i].num, this.leftTimes = v.a.storage.get("gameArr")[i].num, this.time = "", void this.save();
                        var n = {
                            type: this.options.type,
                            num: this.options.times
                        };
                        this.gameArr.push(n), this.save()
                    } else {
                        var a = {
                            type: this.options.type,
                            num: this.options.times
                        };
                        this.gameArr.push(a), this.save()
                    }
                    this.options.timesEle && $(this.options.timesEle).html(this.leftTimes), this.save()
                }
            }, {
                key: "save",
                value: function () {
                    v.a.storage.set("leftTimes", this.leftTimes), v.a.storage.set("adsCreateTime", this.time), v.a.storage.set("adsRecord", this.record), v.a.storage.set("appkey", this.appkey), v.a.storage.set("adSpaceKey", this.adSpaceKey), v.a.storage.set("gamename", this.gameName), v.a.storage.set("gametype", this.gameType), this.options.timesEle && $(this.options.timesEle).html(this.leftTimes), v.a.storage.set("isFreshman", this.isFreshman), v.a.storage.set("isFreshman2", this.isFreshman2), v.a.storage.set("sex", this.sex), v.a.storage.set("network", this.network), v.a.storage.set("gameArr", this.gameArr), this.cuser && v.a.storage.set("cuser", this.cuser), this.cprize && v.a.storage.set("cprize", this.cprize)
                }
            }, {
                key: "getUid",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return new c.a(function (i, n) {
                        if (v.a.mpEnv() && !t) {
                            var a = v.a.getUrlParam("openid");
                            if (a) return v.a.cookies.set("hdgg_uid", a, {
                                expires: v.a.tomorrowDate()
                            }), void i(a)
                        }
                        var o = v.a.cookies.get("hdgg_uid");
                        o && "undefined" != o && "null" != o ? i(o) : R.deviceId().then(function (t) {
                            v.a.cookies.set("hdgg_uid", t, {
                                expires: v.a.tomorrowDate()
                            }), e.leftTimes = e.times, e.save(), i(t)
                        })
                    })
                }
            }, {
                key: "fetch_txAd",
                value: function () {
                    var e = this;
                    return new c.a(function (t, i) {
                        R.getTixian({
                            appkey: e.appkey,
                            adSpaceKey: e.adSpaceKey,
                            mobileSystem: v.a.mobileSystem,
                            uid: e.uid,
                            sessionId: e.sessionId,
                            browserType: v.a.browserType,
                            country: e.ipInfo.country,
                            province: e.ipInfo.province,
                            city: e.ipInfo.city,
                            imei: e.imei,
                            idfa: e.idfa,
                            promotionTarget: 1,
                            promotionSex: e.sex,
                            gameName: e.gameName,
                            promotionNetwork: e.network,
                            hdggReferer: v.a.gamePath,
                            advLayout: 3,
                            adTriggerType: "withdraw"
                        }).then(function (e) {
                            e && 0 != a()(e).length ? (t(e), v.a.storage.set("tiXianAd", e), v.a.storage.set("txAdTime", new Date((new Date).toLocaleDateString()).getTime() / 1 + 864e5)) : t(e)
                        }).catch(function (e) {
                            i(e)
                        }).catch(function (e) {
                            i(e)
                        })
                    })
                }
            }, {
                key: "tx_init",
                value: function () {
                    this.tiXian = new ie.TxEntrance({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        rem: this.rem,
                        uid: this.uid,
                        sessionId: this.sessionId,
                        hdggAdvInfoId: this.hdggAdvInfoId,
                        gameName: this.gameName,
                        province: this.ipInfo.province,
                        ad: this.tiXianAd,
                        imei: this.imei,
                        click: this.handleWinClick,
                        routeToAd: this.routeToAd,
                        options: this.options
                    })
                }
            }, {
                key: "fetch_uv",
                value: function () {
                    R.uv({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        gameName: this.gameName,
                        uid: this.uid,
                        sessionId: this.sessionId,
                        entranceType: this.entranceType,
                        hdggReferer: v.a.gamePath,
                        imei: this.imei,
                        wasmSupport: !!window.WebAssembly
                    })
                }
            }, {
                key: "fetch_imei",
                value: function () {
                    var e = v.a.getUrlParam("imei"),
                        t = v.a.getUrlParam("idfa"),
                        i = v.a.storage.get("imeiSendObj") || {};
                    (i.adSpaceKey != this.adSpaceKey || i.imei != e && i.idfa != t || new Date(i.time).toLocaleDateString() != (new Date).toLocaleDateString()) && (e && "imei" != e.toLocaleLowerCase() && R.imei({
                        adSpaceKey: this.adSpaceKey,
                        imei: e
                    }), t && "idfa" != t.toLocaleLowerCase() && R.imei({
                        adSpaceKey: this.adSpaceKey,
                        idfa: t
                    }), e && "imei" != e.toLocaleLowerCase() && t && "idfa" != t.toLocaleLowerCase() && R.imei({
                        adSpaceKey: this.adSpaceKey,
                        imei: e,
                        idfa: t
                    }))
                }
            }, {
                key: "adTriggerType",
                value: function (e, t, i) {
                    var n = this;
                    R.getAd({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        mobileSystem: v.a.mobileSystem,
                        uid: this.uid,
                        sessionId: this.sessionId,
                        browserType: v.a.browserType,
                        country: this.ipInfo.country,
                        province: this.ipInfo.province,
                        city: this.ipInfo.city,
                        imei: this.imei,
                        idfa: this.idfa,
                        sex: this.sex,
                        network: this.network,
                        gameName: this.gameName,
                        hdggReferer: v.a.gamePath,
                        advLayout: this.advLayout,
                        adTriggerType: i
                    }).then(function (t) {
                        v.a.preloadImage(t.imageUrl), e(t), n.requestAdsRepeat = 0
                    }).catch(function (i) {
                        if (t(i), "10001" == i) {
                            if (n.requestAdsRepeat >= 3) return void e({});
                            setTimeout(function () {
                                n.requestAdsRepeat = n.requestAdsRepeat ? n.requestAdsRepeat + 1 : 1, v.a.cookies.remove("hdgg_uid"), n.getUid("reset").then(function (t) {
                                    n.uid = t, n.get_ad().then(function (t) {
                                        e(t)
                                    })
                                })
                            }, 1e3)
                        }
                    }).catch(function (e) {
                        t(e)
                    })
                }
            }, {
                key: "get_ad",
                value: function () {
                    var e = this;
                    return new c.a(function (t, i) {
                        v.a.storage.get("diaoBao") ? e.adTriggerType(t, i, "dropEnvelope") : v.a.storage.get("eggChajian") ? e.adTriggerType(t, i, "smashEggs") : v.a.storage.get("chaJian") ? e.adTriggerType(t, i, "rainEnvelope") : e.adTriggerType(t, i, "interactive")
                    })
                }
            }, {
                key: "judgeRedpacket",
                value: function () {
                    var e = this;
                    return new c.a(function (t, i) {
                        if (!e.options.noRedpacket) return e.options.alwaysAward ? e.isFreshman2 ? void t() : (e.isFreshman2 = 1, e.save(), void t(1)) : void("11" != e.gameType ? e.isFreshman ? t() : (e.isFreshman = 1, e.save(), R.getRedpacketRate({
                            adSpaceKey: e.adSpaceKey
                        }).then(function (e) {
                            100 * Math.random() > e ? t() : t(1)
                        })) : t());
                        t()
                    })
                }
            }, {
                key: "bindEventRecord",
                value: function () {
                    var e = this;
                    v.a.mpEnv() ? function (e) {
                        e && e.hide()
                    }($(this.options.recordEle)) : this.options.recordEle ? this.handleRecordClick($(this.options.recordEle)) : new ie.RecordButton({
                        options: this.options
                    }).create().then(function (t) {
                        e.handleRecordClick(t)
                    })
                }
            }, {
                key: "handleRecordClick",
                value: function (e) {
                    var t = this;
                    e.on("click", function () {
                        window.parent.postMessage({
                            close: !0
                        }, "*"), new ie.RecordList({
                            options: t.options,
                            record: t.record,
                            appkey: t.appkey,
                            uid: t.uid,
                            adSpaceKey: t.adSpaceKey,
                            sessId: t.sessId,
                            repeatIssued: t.repeatIssued,
                            imei: t.imei
                        })
                    })
                }
            }, {
                key: "bindEventRules",
                value: function () {
                    $(".zhenotice").click(function () {
                        $(".zhenotice").hide(), $(".alerty").hide()
                    }), this.options.rulesEle && new ie.Rules({
                        options: this.options
                    })
                }
            }, {
                key: "start",
                value: function () {
                    var e = this;
                    if (this.initFinishFlag) return this.startFn();
                    setTimeout(function (t) {
                        e.start()
                    }, 10)
                }
            }, {
                key: "startFn",
                value: function () {
                    var e = this;
                    if (this.leftTimes <= 0) return this.options.gamelistShow && new ie.MoreGame({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        uid: this.uid,
                        imei: this.imei,
                        idfa: this.idfa,
                        gameType: this.gameType,
                        hdgghtmlid: this.hdgghtmlid
                    }), -1;
                    for (var t in R.playGame({
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            gameName: this.gameName,
                            uid: this.uid,
                            sessionId: this.sessionId,
                            mobileSystem: v.a.mobileSystem,
                            province: this.ipInfo.province,
                            hdggReferer: v.a.gamePath,
                            imei: this.imei
                        }), "162ab3edab63302c8133bcdbcc7ed8ca" == this.options.appkey && "undefined" != typeof JSHost && JSHost.openWebView && JSHost.openWebView(window.location.href, ""), this.getAdStatus = !1, this.get_ad().then(function (t) {
                            e.getAdStatus = !0, e.ad = t
                        }).catch(function (t) {
                            e.getAdStatus = !0, e.ad = null
                        }).catch(function (t) {
                            e.getAdStatus = !0, e.ad = null
                        }), this.leftTimes -= 1, this.gameArr) this.gameArr[t].type == this.options.type && (this.gameArr[t].num = this.leftTimes);
                    return this.save(), this.leftTimes
                }
            }, {
                key: "getAdStatusFn",
                value: function () {
                    var e = this;
                    return new c.a(function (t, i) {
                        ! function i() {
                            e.getAdStatus ? t() : setTimeout(function (e) {
                                i()
                            }, 10)
                        }()
                    })
                }
            }, {
                key: "win",
                value: function (e) {
                    var t = this,
                        i = e.success,
                        n = void 0 === i ? {} : i,
                        a = e.fail,
                        o = void 0 === a ? {} : a;
                    this.getAdStatusFn().then(function (e) {
                        t.winFn({
                            success: n,
                            fail: o
                        })
                    })
                }
            }, {
                key: "winFn",
                value: function (e) {
                    var t = e.success,
                        i = void 0 === t ? {} : t,
                        n = e.fail,
                        o = void 0 === n ? {} : n;
                    if (!this.ad || 0 == a()(this.ad).length) return v.a.mpEnv() ? void v.a.getWxMiniProgramSDK().then(function (e) {
                        e.miniProgram.navigateTo({
                            url: "/pages/more/more"
                        })
                    }) : void(o && "function" == typeof o ? o() : new ie.NoAdUc({
                        close: this.handleWinClose,
                        appkey: this.options.appkey
                    }));
                    this.record.unshift(this.ad), this.save(), R.show({
                        statistics: {
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            hdggAdvInfoId: this.ad.id,
                            gameName: this.gameName,
                            uid: this.uid,
                            sessionId: this.sessionId,
                            advMaterialId: this.ad.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            province: this.ipInfo.province,
                            imei: this.imei,
                            doumobkey: this.ad.doumobkey,
                            dkey: this.ad.dkey,
                            type: this.ad.type,
                            bidReqId: this.ad.bidReqId,
                            adPlatformValue: this.ad.adPlatformValue,
                            hdggReferer: v.a.gamePath,
                            sessId: this.ad.sessId,
                            repeatIssued: this.ad.repeatIssued,
                            adTriggerType: this.ad.adTriggerType,
                            gameHtmlId: this.ad.gameHtmlId || ""
                        },
                        dspAd: this.ad.dspAd
                    });
                    var r = {
                        ad: u()({}, this.ad, {
                            imageUrl: this.ad.imageUrl,
                            receiveText: this.ad.receiveText,
                            advIntro: this.ad.message
                        }),
                        click: this.handleWinClick,
                        close: this.handleWinClose
                    };
                    v.a.mpEnv() && this.ad.appId ? (E(r), P({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        ad: this.ad,
                        gameName: this.gameName,
                        uid: this.uid,
                        mobileSystem: v.a.mobileSystem,
                        province: this.ipInfo.province,
                        imei: this.imei
                    })) : this.options.pddCustomDialog && this.options.quAnDouYao && 2 == this.ad.advLayout ? new ie.PrizePDD(r) : i && "function" == typeof i ? i(r) : new ie.Prize(r)
                }
            }, {
                key: "handleWinClick",
                value: function (e) {
                    var t = this,
                        i = this.ad;
                    i.entranceType = 1, this.lastClickAdId == i.id && Date.now() - this.lastClickAdIdTime < 1e4 || (this.lastClickAdId = i.id, this.lastClickAdIdTime = Date.now(), e && e.ad && (i = e.ad), v.a.mpEnv() && i.appId ? P({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        ad: i,
                        gameName: this.gameName,
                        uid: this.uid,
                        mobileSystem: v.a.mobileSystem,
                        province: this.ipInfo.province,
                        imei: this.imei
                    }) : R.click({
                        statistics: {
                            appkey: this.appkey,
                            adSpaceKey: this.adSpaceKey,
                            hdggAdvInfoId: i.id,
                            gameName: this.gameName,
                            uid: this.uid,
                            sessionId: this.sessionId,
                            issuedTime: (new Date).getTime(),
                            province: this.ipInfo.province,
                            advMaterialId: i.advMaterialId,
                            mobileSystem: v.a.mobileSystem,
                            imei: this.imei,
                            doumobkey: this.ad.doumobkey,
                            dkey: this.ad.dkey,
                            type: this.ad.type,
                            bidReqId: this.ad.bidReqId,
                            adPlatformValue: this.ad.adPlatformValue,
                            hdggReferer: v.a.gamePath,
                            sessId: this.ad.sessId,
                            repeatIssued: this.ad.repeatIssued,
                            adTriggerType: this.ad.adTriggerType,
                            gameHtmlId: this.ad.gameHtmlId
                        },
                        dspAd: this.ad.dspAd
                    }).then(function (e) {
                        if ("custom" != i.type || "2" != i.urlType)
                            if ("custom" != i.type || "1" != i.urlType) t.routeToAd({
                                ad: i
                            });
                            else {
                                var n = t;
                                R.getCustomInfo({
                                    appkey: t.appkey,
                                    adSpaceKey: t.adSpaceKey,
                                    uid: t.uid,
                                    receiveId: t.ad.receiveId
                                }).then(function (e) {
                                    n.routeToAd({
                                        ad: i
                                    })
                                })
                            }
                        else new M({
                            appkey: t.appkey,
                            adSpaceKey: t.adSpaceKey,
                            uid: t.uid,
                            receiveId: t.ad.receiveId,
                            deviceId: v.a.getUrlParam("deviceId") || null,
                            userId: v.a.getUrlParam("userId") || null,
                            os: v.a.getUrlParam("os") || null,
                            appName: v.a.getUrlParam("appName") || null
                        })
                    }))
                }
            }, {
                key: "routeToAd",
                value: function (e) {
                    var t = e.ad;
                    this.options.ifranmeShow ? window.parent.postMessage({
                        doumob: t.fullpath
                    }, "*") : window.location.href = t.fullpath
                }
            }, {
                key: "handleWinClose",
                value: function () {
                    if (this.options.txEntranceShow && this.tiXianAd) {
                        var e = 0 == v.a.storage.get("haveTwice") ? 0 : v.a.storage.get("haveTwice") ? v.a.storage.get("haveTwice") : this.tiXianAd.cashplaycount;
                        if (0 != e)
                            if (e--, v.a.storage.set("haveTwice", e), e < 0) v.a.storage.set("haveLoadMoney", this.tiXianAd.cashlimit);
                            else if (e > 0) {
                            var t = this.tiXianAd.cashlimit / this.tiXianAd.cashplaycount / 2,
                                i = Number(parseFloat(Math.random() * t + t).toFixed(2)),
                                n = v.a.storage.get("haveLoadMoney") ? v.a.storage.get("haveLoadMoney") : 0;
                            v.a.storage.set("haveLoadMoney", i + Number(parseFloat(100 * n).toFixed(2)) / 100), this.tiXian.txAnimate(i)
                        } else 0 == e && (this.tiXian.txAnimate((Number(parseFloat(100 * this.tiXianAd.cashlimit).toFixed(2)) - Number(parseFloat(100 * v.a.storage.get("haveLoadMoney")).toFixed(2))) / 100), v.a.storage.set("haveLoadMoney", this.tiXianAd.cashlimit));
                        else 0 == e && v.a.storage.get("haveLoadMoney") != this.tiXianAd.cashlimit && (this.tiXian.txAnimate((Number(parseFloat(100 * this.tiXianAd.cashlimit).toFixed(2)) - Number(parseFloat(100 * v.a.storage.get("haveLoadMoney")).toFixed(2))) / 100), v.a.storage.set("haveLoadMoney", this.tiXianAd.cashlimit))
                    }
                    this.leftTimes <= 0 && this.options.gamelistShow ? new ie.MoreGame({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        uid: this.uid,
                        imei: this.imei,
                        idfa: this.idfa,
                        gameType: this.gameType
                    }) : (this.ad && 0 != a()(this.ad).length && new ie.FlyPrize({
                        rem: this.rem,
                        flyTop: this.options.flyTop
                    }), (this.options.gamecenterShow && this.leftTimes < 5 || this.leftTimes < 6663 && this.options.gameVideo) && new ie.GameCenter({
                        appkey: this.appkey,
                        adSpaceKey: this.adSpaceKey,
                        imei: this.imei,
                        idfa: this.idfa
                    }))
                }
            }, {
                key: "getProp",
                value: function (e) {
                    return this[e]
                }
            }, {
                key: "gameCenterClick",
                value: function (e) {
                    var t = {
                        gameName: this.gameName,
                        adSpaceKey: this.adSpaceKey
                    };
                    return R.gameCenterClick(t)
                }
            }, {
                key: "checkExpireTime",
                value: function () {
                    var e = (new Date).getTime(),
                        t = new Date,
                        i = t.getFullYear(),
                        n = t.getMonth() + 1,
                        a = t.getDate(),
                        o = new Date(i + "/" + n + "/" + a).getTime() + 864e5;
                    v.a.storage.get("expireTime") ? e >= v.a.storage.get("expireTime") && (v.a.storage.remove("gameArr"), v.a.storage.remove("leftTimes"), v.a.storage.remove("defaultPathArr"), v.a.storage.set("expireTime", o)) : v.a.storage.set("expireTime", o)
                }
            }]), e
        }();
    t.a = ne
}, function (e, t, i) {
    "use strict";
    i.r(t),
        function (e) {
            var t = i(2),
                n = i.n(t),
                a = i(3),
                o = i.n(a),
                r = i(1),
                s = i.n(r),
                c = i(84),
                d = i(83),
                u = (i(167), i(4)),
                p = i(0);
            window.Promise = s.a, "development" !== u.a.ENV && Object(d.a)();
            var l = !1,
                h = navigator.userAgent;
            (h.indexOf("Android") > -1 || h.indexOf("Adr") > -1) && (window.addEventListener("pageshow", function () {
                l && window.location.reload(!0)
            }), window.addEventListener("pagehide", function () {
                l = !0
            }));
            var f = void 0,
                m = function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n()(this, e), !t.appkey) throw new Error("未传参数appkey");
                        if (!t.adSpaceKey) throw new Error("未传参数adSpaceKey");
                        if (!t.name) throw new Error("未传参数name");
                        if (!t.type) throw new Error("未传参数type");
                        (f = new c.a(t)).init(), window.navigator.userAgent
                    }
                    return o()(e, [{
                        key: "start",
                        value: function () {
                            return f.start()
                        }
                    }, {
                        key: "win",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            f.win(e)
                        }
                    }, {
                        key: "click",
                        value: function () {
                            f.click()
                        }
                    }, {
                        key: "gameCenterClick",
                        value: function (e) {
                            return f.gameCenterClick(e)
                        }
                    }, {
                        key: "handleWinClick",
                        value: function (e) {
                            f.ad = e.ad, f.handleWinClick(e)
                        }
                    }, {
                        key: "ads",
                        get: function () {
                            return {
                                imageUrl: f && f.ad && f.ad.imageUrl ? f.ad.imageUrl : "",
                                advIntro: f && f.ad && f.ad.advIntro ? f.ad.advIntro : ""
                            }
                        }
                    }, {
                        key: "storage",
                        get: function () {
                            return p.a.storage
                        }
                    }, {
                        key: "session",
                        get: function () {
                            return p.a.storage
                        }
                    }, {
                        key: "getLeftTimes",
                        get: function () {
                            return f.leftTimes
                        }
                    }, {
                        key: "changeLeftTimes",
                        set: function (e) {
                            f.leftTimes = e
                        }
                    }]), e
                }();
            if (!window.$ && !window.jQuery && !window.Zepto) throw new Error("依赖jQuery或Zepto");
            if (e.HDGG) throw new Error("实例名称HDGG被占用");
            window.HDGG = m
        }.call(this, i(86))
}, function (e, t) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function (e, t, i) {
    i(88);
    var n = i(7).Object;
    e.exports = function (e, t, i) {
        return n.defineProperty(e, t, i)
    }
}, function (e, t, i) {
    var n = i(13);
    n(n.S + n.F * !i(16), "Object", {
        defineProperty: i(14).f
    })
}, function (e, t, i) {
    i(55), i(30), i(44), i(99), i(107), i(108), e.exports = i(7).Promise
}, function (e, t, i) {
    var n = i(38),
        a = i(39);
    e.exports = function (e) {
        return function (t, i) {
            var o, r, s = String(a(t)),
                c = n(i),
                d = s.length;
            return c < 0 || c >= d ? e ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === d || (r = s.charCodeAt(c + 1)) < 56320 || r > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : r - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(58),
        a = i(23),
        o = i(32),
        r = {};
    i(17)(r, i(9)("iterator"), function () {
        return this
    }), e.exports = function (e, t, i) {
        e.prototype = n(r, {
            next: a(1, i)
        }), o(e, t + " Iterator")
    }
}, function (e, t, i) {
    var n = i(14),
        a = i(15),
        o = i(26);
    e.exports = i(16) ? Object.defineProperties : function (e, t) {
        a(e);
        for (var i, r = o(t), s = r.length, c = 0; s > c;) n.f(e, i = r[c++], t[i]);
        return e
    }
}, function (e, t, i) {
    var n = i(21),
        a = i(40),
        o = i(94);
    e.exports = function (e) {
        return function (t, i, r) {
            var s, c = n(t),
                d = a(c.length),
                u = o(r, d);
            if (e && i != i) {
                for (; d > u;)
                    if ((s = c[u++]) != s) return !0
            } else
                for (; d > u; u++)
                    if ((e || u in c) && c[u] === i) return e || u || 0;
            return !e && -1
        }
    }
}, function (e, t, i) {
    var n = i(38),
        a = Math.max,
        o = Math.min;
    e.exports = function (e, t) {
        return (e = n(e)) < 0 ? a(e + t, 0) : o(e, t)
    }
}, function (e, t, i) {
    var n = i(19),
        a = i(33),
        o = i(41)("IE_PROTO"),
        r = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = a(e), n(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
    }
}, function (e, t, i) {
    "use strict";
    var n = i(97),
        a = i(98),
        o = i(25),
        r = i(21);
    e.exports = i(56)(Array, "Array", function (e, t) {
        this._t = r(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t,
            t = this._k,
            i = this._i++;
        return !e || i >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? i : "values" == t ? e[i] : [i, e[i]])
    }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
}, function (e, t) {
    e.exports = function () {}
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function (e, t, i) {
    "use strict";
    var n, a, o, r, s = i(24),
        c = i(8),
        d = i(22),
        u = i(62),
        p = i(13),
        l = i(18),
        h = i(29),
        f = i(100),
        m = i(101),
        g = i(65),
        y = i(66).set,
        v = i(103)(),
        w = i(46),
        k = i(67),
        b = i(104),
        S = i(68),
        _ = c.TypeError,
        I = c.process,
        T = I && I.versions,
        x = T && T.v8 || "",
        A = c.Promise,
        C = "process" == u(I),
        $ = function () {},
        P = a = w.f,
        E = !! function () {
            try {
                var e = A.resolve(1),
                    t = (e.constructor = {})[i(9)("species")] = function (e) {
                        e($, $)
                    };
                return (C || "function" == typeof PromiseRejectionEvent) && e.then($) instanceof t && 0 !== x.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
            } catch (e) {}
        }(),
        R = function (e) {
            var t;
            return !(!l(e) || "function" != typeof (t = e.then)) && t
        },
        N = function (e, t) {
            if (!e._n) {
                e._n = !0;
                var i = e._c;
                v(function () {
                    for (var n = e._v, a = 1 == e._s, o = 0, r = function (t) {
                            var i, o, r, s = a ? t.ok : t.fail,
                                c = t.resolve,
                                d = t.reject,
                                u = t.domain;
                            try {
                                s ? (a || (2 == e._h && M(e), e._h = 1), !0 === s ? i = n : (u && u.enter(), i = s(n), u && (u.exit(), r = !0)), i === t.promise ? d(_("Promise-chain cycle")) : (o = R(i)) ? o.call(i, c, d) : c(i)) : d(n)
                            } catch (e) {
                                u && !r && u.exit(), d(e)
                            }
                        }; i.length > o;) r(i[o++]);
                    e._c = [], e._n = !1, t && !e._h && j(e)
                })
            }
        },
        j = function (e) {
            y.call(c, function () {
                var t, i, n, a = e._v,
                    o = K(e);
                if (o && (t = k(function () {
                        C ? I.emit("unhandledRejection", a, e) : (i = c.onunhandledrejection) ? i({
                            promise: e,
                            reason: a
                        }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", a)
                    }), e._h = C || K(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
            })
        },
        K = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        M = function (e) {
            y.call(c, function () {
                var t;
                C ? I.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        L = function (e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), N(t, !0))
        },
        O = function (e) {
            var t, i = this;
            if (!i._d) {
                i._d = !0, i = i._w || i;
                try {
                    if (i === e) throw _("Promise can't be resolved itself");
                    (t = R(e)) ? v(function () {
                        var n = {
                            _w: i,
                            _d: !1
                        };
                        try {
                            t.call(e, d(O, n, 1), d(L, n, 1))
                        } catch (e) {
                            L.call(n, e)
                        }
                    }): (i._v = e, i._s = 1, N(i, !1))
                } catch (e) {
                    L.call({
                        _w: i,
                        _d: !1
                    }, e)
                }
            }
        };
    E || (A = function (e) {
        f(this, A, "Promise", "_h"), h(e), n.call(this);
        try {
            e(d(O, this, 1), d(L, this, 1))
        } catch (e) {
            L.call(this, e)
        }
    }, (n = function (e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = i(105)(A.prototype, {
        then: function (e, t) {
            var i = P(g(this, A));
            return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = C ? I.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && N(this, !1), i.promise
        },
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), o = function () {
        var e = new n;
        this.promise = e, this.resolve = d(O, e, 1), this.reject = d(L, e, 1)
    }, w.f = P = function (e) {
        return e === A || e === r ? new o(e) : a(e)
    }), p(p.G + p.W + p.F * !E, {
        Promise: A
    }), i(32)(A, "Promise"), i(106)("Promise"), r = i(7).Promise, p(p.S + p.F * !E, "Promise", {
        reject: function (e) {
            var t = P(this);
            return (0, t.reject)(e), t.promise
        }
    }), p(p.S + p.F * (s || !E), "Promise", {
        resolve: function (e) {
            return S(s && this === r ? A : this, e)
        }
    }), p(p.S + p.F * !(E && i(69)(function (e) {
        A.all(e).catch($)
    })), "Promise", {
        all: function (e) {
            var t = this,
                i = P(t),
                n = i.resolve,
                a = i.reject,
                o = k(function () {
                    var i = [],
                        o = 0,
                        r = 1;
                    m(e, !1, function (e) {
                        var s = o++,
                            c = !1;
                        i.push(void 0), r++, t.resolve(e).then(function (e) {
                            c || (c = !0, i[s] = e, --r || n(i))
                        }, a)
                    }), --r || n(i)
                });
            return o.e && a(o.v), i.promise
        },
        race: function (e) {
            var t = this,
                i = P(t),
                n = i.reject,
                a = k(function () {
                    m(e, !1, function (e) {
                        t.resolve(e).then(i.resolve, n)
                    })
                });
            return a.e && n(a.v), i.promise
        }
    })
}, function (e, t) {
    e.exports = function (e, t, i, n) {
        if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(i + ": incorrect invocation!");
        return e
    }
}, function (e, t, i) {
    var n = i(22),
        a = i(63),
        o = i(64),
        r = i(15),
        s = i(40),
        c = i(45),
        d = {},
        u = {};
    (t = e.exports = function (e, t, i, p, l) {
        var h, f, m, g, y = l ? function () {
                return e
            } : c(e),
            v = n(i, p, t ? 2 : 1),
            w = 0;
        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
        if (o(y)) {
            for (h = s(e.length); h > w; w++)
                if ((g = t ? v(r(f = e[w])[0], f[1]) : v(e[w])) === d || g === u) return g
        } else
            for (m = y.call(e); !(f = m.next()).done;)
                if ((g = a(m, v, f.value, t)) === d || g === u) return g
    }).BREAK = d, t.RETURN = u
}, function (e, t) {
    e.exports = function (e, t, i) {
        var n = void 0 === i;
        switch (t.length) {
            case 0:
                return n ? e() : e.call(i);
            case 1:
                return n ? e(t[0]) : e.call(i, t[0]);
            case 2:
                return n ? e(t[0], t[1]) : e.call(i, t[0], t[1]);
            case 3:
                return n ? e(t[0], t[1], t[2]) : e.call(i, t[0], t[1], t[2]);
            case 4:
                return n ? e(t[0], t[1], t[2], t[3]) : e.call(i, t[0], t[1], t[2], t[3])
        }
        return e.apply(i, t)
    }
}, function (e, t, i) {
    var n = i(8),
        a = i(66).set,
        o = n.MutationObserver || n.WebKitMutationObserver,
        r = n.process,
        s = n.Promise,
        c = "process" == i(27)(r);
    e.exports = function () {
        var e, t, i, d = function () {
            var n, a;
            for (c && (n = r.domain) && n.exit(); e;) {
                a = e.fn, e = e.next;
                try {
                    a()
                } catch (n) {
                    throw e ? i() : t = void 0, n
                }
            }
            t = void 0, n && n.enter()
        };
        if (c) i = function () {
            r.nextTick(d)
        };
        else if (!o || n.navigator && n.navigator.standalone)
            if (s && s.resolve) {
                var u = s.resolve(void 0);
                i = function () {
                    u.then(d)
                }
            } else i = function () {
                a.call(n, d)
            };
        else {
            var p = !0,
                l = document.createTextNode("");
            new o(d).observe(l, {
                characterData: !0
            }), i = function () {
                l.data = p = !p
            }
        }
        return function (n) {
            var a = {
                fn: n,
                next: void 0
            };
            t && (t.next = a), e || (e = a, i()), t = a
        }
    }
}, function (e, t, i) {
    var n = i(8).navigator;
    e.exports = n && n.userAgent || ""
}, function (e, t, i) {
    var n = i(17);
    e.exports = function (e, t, i) {
        for (var a in t) i && e[a] ? e[a] = t[a] : n(e, a, t[a]);
        return e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(8),
        a = i(7),
        o = i(14),
        r = i(16),
        s = i(9)("species");
    e.exports = function (e) {
        var t = "function" == typeof a[e] ? a[e] : n[e];
        r && t && !t[s] && o.f(t, s, {
            configurable: !0,
            get: function () {
                return this
            }
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(13),
        a = i(7),
        o = i(8),
        r = i(65),
        s = i(68);
    n(n.P + n.R, "Promise", {
        finally: function (e) {
            var t = r(this, a.Promise || o.Promise),
                i = "function" == typeof e;
            return this.then(i ? function (i) {
                return s(t, e()).then(function () {
                    return i
                })
            } : e, i ? function (i) {
                return s(t, e()).then(function () {
                    throw i
                })
            } : e)
        }
    })
}, function (e, t, i) {
    "use strict";
    var n = i(13),
        a = i(46),
        o = i(67);
    n(n.S, "Promise", {
        try: function (e) {
            var t = a.f(this),
                i = o(e);
            return (i.e ? t.reject : t.resolve)(i.v), t.promise
        }
    })
}, function (e, t, i) {
    i(110), e.exports = i(7).Object.keys
}, function (e, t, i) {
    var n = i(33),
        a = i(26);
    i(111)("keys", function () {
        return function (e) {
            return a(n(e))
        }
    })
}, function (e, t, i) {
    var n = i(13),
        a = i(7),
        o = i(20);
    e.exports = function (e, t) {
        var i = (a.Object || {})[e] || Object[e],
            r = {};
        r[e] = t(i), n(n.S + n.F * o(function () {
            i(1)
        }), "Object", r)
    }
}, function (e, t, i) {
    e.exports = {
        default: i(113),
        __esModule: !0
    }
}, function (e, t, i) {
    i(30), i(44), e.exports = i(47).f("iterator")
}, function (e, t, i) {
    e.exports = {
        default: i(115),
        __esModule: !0
    }
}, function (e, t, i) {
    i(116), i(55), i(122), i(123), e.exports = i(7).Symbol
}, function (e, t, i) {
    "use strict";
    var n = i(8),
        a = i(19),
        o = i(16),
        r = i(13),
        s = i(57),
        c = i(117).KEY,
        d = i(20),
        u = i(42),
        p = i(32),
        l = i(31),
        h = i(9),
        f = i(47),
        m = i(48),
        g = i(118),
        y = i(119),
        v = i(15),
        w = i(18),
        k = i(21),
        b = i(37),
        S = i(23),
        _ = i(58),
        I = i(120),
        T = i(121),
        x = i(14),
        A = i(26),
        C = T.f,
        $ = x.f,
        P = I.f,
        E = n.Symbol,
        R = n.JSON,
        N = R && R.stringify,
        j = h("_hidden"),
        K = h("toPrimitive"),
        M = {}.propertyIsEnumerable,
        L = u("symbol-registry"),
        O = u("symbols"),
        U = u("op-symbols"),
        D = Object.prototype,
        B = "function" == typeof E,
        F = n.QObject,
        z = !F || !F.prototype || !F.prototype.findChild,
        q = o && d(function () {
            return 7 != _($({}, "a", {
                get: function () {
                    return $(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function (e, t, i) {
            var n = C(D, t);
            n && delete D[t], $(e, t, i), n && e !== D && $(D, t, n)
        } : $,
        H = function (e) {
            var t = O[e] = _(E.prototype);
            return t._k = e, t
        },
        V = B && "symbol" == typeof E.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof E
        },
        X = function (e, t, i) {
            return e === D && X(U, t, i), v(e), t = b(t, !0), v(i), a(O, t) ? (i.enumerable ? (a(e, j) && e[j][t] && (e[j][t] = !1), i = _(i, {
                enumerable: S(0, !1)
            })) : (a(e, j) || $(e, j, S(1, {})), e[j][t] = !0), q(e, t, i)) : $(e, t, i)
        },
        G = function (e, t) {
            v(e);
            for (var i, n = g(t = k(t)), a = 0, o = n.length; o > a;) X(e, i = n[a++], t[i]);
            return e
        },
        W = function (e) {
            var t = M.call(this, e = b(e, !0));
            return !(this === D && a(O, e) && !a(U, e)) && (!(t || !a(this, e) || !a(O, e) || a(this, j) && this[j][e]) || t)
        },
        J = function (e, t) {
            if (e = k(e), t = b(t, !0), e !== D || !a(O, t) || a(U, t)) {
                var i = C(e, t);
                return !i || !a(O, t) || a(e, j) && e[j][t] || (i.enumerable = !0), i
            }
        },
        Q = function (e) {
            for (var t, i = P(k(e)), n = [], o = 0; i.length > o;) a(O, t = i[o++]) || t == j || t == c || n.push(t);
            return n
        },
        Y = function (e) {
            for (var t, i = e === D, n = P(i ? U : k(e)), o = [], r = 0; n.length > r;) !a(O, t = n[r++]) || i && !a(D, t) || o.push(O[t]);
            return o
        };
    B || (s((E = function () {
        if (this instanceof E) throw TypeError("Symbol is not a constructor!");
        var e = l(arguments.length > 0 ? arguments[0] : void 0),
            t = function (i) {
                this === D && t.call(U, i), a(this, j) && a(this[j], e) && (this[j][e] = !1), q(this, e, S(1, i))
            };
        return o && z && q(D, e, {
            configurable: !0,
            set: t
        }), H(e)
    }).prototype, "toString", function () {
        return this._k
    }), T.f = J, x.f = X, i(70).f = I.f = Q, i(34).f = W, i(49).f = Y, o && !i(24) && s(D, "propertyIsEnumerable", W, !0), f.f = function (e) {
        return H(h(e))
    }), r(r.G + r.W + r.F * !B, {
        Symbol: E
    });
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) h(Z[ee++]);
    for (var te = A(h.store), ie = 0; te.length > ie;) m(te[ie++]);
    r(r.S + r.F * !B, "Symbol", {
        for: function (e) {
            return a(L, e += "") ? L[e] : L[e] = E(e)
        },
        keyFor: function (e) {
            if (!V(e)) throw TypeError(e + " is not a symbol!");
            for (var t in L)
                if (L[t] === e) return t
        },
        useSetter: function () {
            z = !0
        },
        useSimple: function () {
            z = !1
        }
    }), r(r.S + r.F * !B, "Object", {
        create: function (e, t) {
            return void 0 === t ? _(e) : G(_(e), t)
        },
        defineProperty: X,
        defineProperties: G,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: Y
    }), R && r(r.S + r.F * (!B || d(function () {
        var e = E();
        return "[null]" != N([e]) || "{}" != N({
            a: e
        }) || "{}" != N(Object(e))
    })), "JSON", {
        stringify: function (e) {
            for (var t, i, n = [e], a = 1; arguments.length > a;) n.push(arguments[a++]);
            if (i = t = n[1], (w(t) || void 0 !== e) && !V(e)) return y(t) || (t = function (e, t) {
                if ("function" == typeof i && (t = i.call(this, e, t)), !V(t)) return t
            }), n[1] = t, N.apply(R, n)
        }
    }), E.prototype[K] || i(17)(E.prototype, K, E.prototype.valueOf), p(E, "Symbol"), p(Math, "Math", !0), p(n.JSON, "JSON", !0)
}, function (e, t, i) {
    var n = i(31)("meta"),
        a = i(18),
        o = i(19),
        r = i(14).f,
        s = 0,
        c = Object.isExtensible || function () {
            return !0
        },
        d = !i(20)(function () {
            return c(Object.preventExtensions({}))
        }),
        u = function (e) {
            r(e, n, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        p = e.exports = {
            KEY: n,
            NEED: !1,
            fastKey: function (e, t) {
                if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!o(e, n)) {
                    if (!c(e)) return "F";
                    if (!t) return "E";
                    u(e)
                }
                return e[n].i
            },
            getWeak: function (e, t) {
                if (!o(e, n)) {
                    if (!c(e)) return !0;
                    if (!t) return !1;
                    u(e)
                }
                return e[n].w
            },
            onFreeze: function (e) {
                return d && p.NEED && c(e) && !o(e, n) && u(e), e
            }
        }
}, function (e, t, i) {
    var n = i(26),
        a = i(49),
        o = i(34);
    e.exports = function (e) {
        var t = n(e),
            i = a.f;
        if (i)
            for (var r, s = i(e), c = o.f, d = 0; s.length > d;) c.call(e, r = s[d++]) && t.push(r);
        return t
    }
}, function (e, t, i) {
    var n = i(27);
    e.exports = Array.isArray || function (e) {
        return "Array" == n(e)
    }
}, function (e, t, i) {
    var n = i(21),
        a = i(70).f,
        o = {}.toString,
        r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
        return r && "[object Window]" == o.call(e) ? function (e) {
            try {
                return a(e)
            } catch (e) {
                return r.slice()
            }
        }(e) : a(n(e))
    }
}, function (e, t, i) {
    var n = i(34),
        a = i(23),
        o = i(21),
        r = i(37),
        s = i(19),
        c = i(54),
        d = Object.getOwnPropertyDescriptor;
    t.f = i(16) ? d : function (e, t) {
        if (e = o(e), t = r(t, !0), c) try {
            return d(e, t)
        } catch (e) {}
        if (s(e, t)) return a(!n.f.call(e, t), e[t])
    }
}, function (e, t, i) {
    i(48)("asyncIterator")
}, function (e, t, i) {
    i(48)("observable")
}, function (e, t, i) {
    i(125), e.exports = i(7).Object.assign
}, function (e, t, i) {
    var n = i(13);
    n(n.S + n.F, "Object", {
        assign: i(126)
    })
}, function (e, t, i) {
    "use strict";
    var n = i(26),
        a = i(49),
        o = i(34),
        r = i(33),
        s = i(60),
        c = Object.assign;
    e.exports = !c || i(20)(function () {
        var e = {},
            t = {},
            i = Symbol(),
            n = "abcdefghijklmnopqrst";
        return e[i] = 7, n.split("").forEach(function (e) {
            t[e] = e
        }), 7 != c({}, e)[i] || Object.keys(c({}, t)).join("") != n
    }) ? function (e, t) {
        for (var i = r(e), c = arguments.length, d = 1, u = a.f, p = o.f; c > d;)
            for (var l, h = s(arguments[d++]), f = u ? n(h).concat(u(h)) : n(h), m = f.length, g = 0; m > g;) p.call(h, l = f[g++]) && (i[l] = h[l]);
        return i
    } : c
}, function (e, t, i) {
    "use strict";
    var n = i(71),
        a = i(72),
        o = {
            brackets: function (e) {
                return e + "[]"
            },
            indices: function (e, t) {
                return e + "[" + t + "]"
            },
            repeat: function (e) {
                return e
            }
        },
        r = Date.prototype.toISOString,
        s = {
            delimiter: "&",
            encode: !0,
            encoder: n.encode,
            encodeValuesOnly: !1,
            serializeDate: function (e) {
                return r.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        c = function e(t, i, a, o, r, c, d, u, p, l, h, f) {
            var m = t;
            if ("function" == typeof d) m = d(i, m);
            else if (m instanceof Date) m = l(m);
            else if (null === m) {
                if (o) return c && !f ? c(i, s.encoder) : i;
                m = ""
            }
            if ("string" == typeof m || "number" == typeof m || "boolean" == typeof m || n.isBuffer(m)) return c ? [h(f ? i : c(i, s.encoder)) + "=" + h(c(m, s.encoder))] : [h(i) + "=" + h(String(m))];
            var g, y = [];
            if (void 0 === m) return y;
            if (Array.isArray(d)) g = d;
            else {
                var v = Object.keys(m);
                g = u ? v.sort(u) : v
            }
            for (var w = 0; w < g.length; ++w) {
                var k = g[w];
                r && null === m[k] || (y = Array.isArray(m) ? y.concat(e(m[k], a(i, k), a, o, r, c, d, u, p, l, h, f)) : y.concat(e(m[k], i + (p ? "." + k : "[" + k + "]"), a, o, r, c, d, u, p, l, h, f)))
            }
            return y
        };
    e.exports = function (e, t) {
        var i = e,
            r = t ? n.assign({}, t) : {};
        if (null !== r.encoder && void 0 !== r.encoder && "function" != typeof r.encoder) throw new TypeError("Encoder has to be a function.");
        var d = void 0 === r.delimiter ? s.delimiter : r.delimiter,
            u = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : s.strictNullHandling,
            p = "boolean" == typeof r.skipNulls ? r.skipNulls : s.skipNulls,
            l = "boolean" == typeof r.encode ? r.encode : s.encode,
            h = "function" == typeof r.encoder ? r.encoder : s.encoder,
            f = "function" == typeof r.sort ? r.sort : null,
            m = void 0 !== r.allowDots && r.allowDots,
            g = "function" == typeof r.serializeDate ? r.serializeDate : s.serializeDate,
            y = "boolean" == typeof r.encodeValuesOnly ? r.encodeValuesOnly : s.encodeValuesOnly;
        if (void 0 === r.format) r.format = a.default;
        else if (!Object.prototype.hasOwnProperty.call(a.formatters, r.format)) throw new TypeError("Unknown format option provided.");
        var v, w, k = a.formatters[r.format];
        "function" == typeof r.filter ? i = (w = r.filter)("", i) : Array.isArray(r.filter) && (v = w = r.filter);
        var b, S = [];
        if ("object" != typeof i || null === i) return "";
        b = r.arrayFormat in o ? r.arrayFormat : "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
        var _ = o[b];
        v || (v = Object.keys(i)), f && v.sort(f);
        for (var I = 0; I < v.length; ++I) {
            var T = v[I];
            p && null === i[T] || (S = S.concat(c(i[T], T, _, u, p, l ? h : null, w, f, m, g, k, y)))
        }
        var x = S.join(d),
            A = !0 === r.addQueryPrefix ? "?" : "";
        return x.length > 0 ? A + x : ""
    }
}, function (e, t, i) {
    "use strict";
    var n = i(71),
        a = Object.prototype.hasOwnProperty,
        o = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            decoder: n.decode,
            delimiter: "&",
            depth: 5,
            parameterLimit: 1e3,
            plainObjects: !1,
            strictNullHandling: !1
        },
        r = function (e, t, i) {
            if (e) {
                var n = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                    o = /(\[[^[\]]*])/g,
                    r = /(\[[^[\]]*])/.exec(n),
                    s = r ? n.slice(0, r.index) : n,
                    c = [];
                if (s) {
                    if (!i.plainObjects && a.call(Object.prototype, s) && !i.allowPrototypes) return;
                    c.push(s)
                }
                for (var d = 0; null !== (r = o.exec(n)) && d < i.depth;) {
                    if (d += 1, !i.plainObjects && a.call(Object.prototype, r[1].slice(1, -1)) && !i.allowPrototypes) return;
                    c.push(r[1])
                }
                return r && c.push("[" + n.slice(r.index) + "]"),
                    function (e, t, i) {
                        for (var n = t, a = e.length - 1; a >= 0; --a) {
                            var o, r = e[a];
                            if ("[]" === r) o = (o = []).concat(n);
                            else {
                                o = i.plainObjects ? Object.create(null) : {};
                                var s = "[" === r.charAt(0) && "]" === r.charAt(r.length - 1) ? r.slice(1, -1) : r,
                                    c = parseInt(s, 10);
                                !isNaN(c) && r !== s && String(c) === s && c >= 0 && i.parseArrays && c <= i.arrayLimit ? (o = [])[c] = n : o[s] = n
                            }
                            n = o
                        }
                        return n
                    }(c, t, i)
            }
        };
    e.exports = function (e, t) {
        var i = t ? n.assign({}, t) : {};
        if (null !== i.decoder && void 0 !== i.decoder && "function" != typeof i.decoder) throw new TypeError("Decoder has to be a function.");
        if (i.ignoreQueryPrefix = !0 === i.ignoreQueryPrefix, i.delimiter = "string" == typeof i.delimiter || n.isRegExp(i.delimiter) ? i.delimiter : o.delimiter, i.depth = "number" == typeof i.depth ? i.depth : o.depth, i.arrayLimit = "number" == typeof i.arrayLimit ? i.arrayLimit : o.arrayLimit, i.parseArrays = !1 !== i.parseArrays, i.decoder = "function" == typeof i.decoder ? i.decoder : o.decoder, i.allowDots = "boolean" == typeof i.allowDots ? i.allowDots : o.allowDots, i.plainObjects = "boolean" == typeof i.plainObjects ? i.plainObjects : o.plainObjects, i.allowPrototypes = "boolean" == typeof i.allowPrototypes ? i.allowPrototypes : o.allowPrototypes, i.parameterLimit = "number" == typeof i.parameterLimit ? i.parameterLimit : o.parameterLimit, i.strictNullHandling = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : o.strictNullHandling, "" === e || null == e) return i.plainObjects ? Object.create(null) : {};
        for (var s = "string" == typeof e ? function (e, t) {
                for (var i = {}, n = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, r = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, s = n.split(t.delimiter, r), c = 0; c < s.length; ++c) {
                    var d, u, p = s[c],
                        l = p.indexOf("]="),
                        h = -1 === l ? p.indexOf("=") : l + 1; - 1 === h ? (d = t.decoder(p, o.decoder), u = t.strictNullHandling ? null : "") : (d = t.decoder(p.slice(0, h), o.decoder), u = t.decoder(p.slice(h + 1), o.decoder)), a.call(i, d) ? i[d] = [].concat(i[d]).concat(u) : i[d] = u
                }
                return i
            }(e, i) : e, c = i.plainObjects ? Object.create(null) : {}, d = Object.keys(s), u = 0; u < d.length; ++u) {
            var p = d[u],
                l = r(p, s[p], i);
            c = n.merge(c, l, i)
        }
        return n.compact(c)
    }
}, function (e, t, i) {
    i(44), i(30), e.exports = i(130)
}, function (e, t, i) {
    var n = i(15),
        a = i(45);
    e.exports = i(7).getIterator = function (e) {
        var t = a(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return n(t.call(e))
    }
}, function (e, t, i) {
    var n = i(7),
        a = n.JSON || (n.JSON = {
            stringify: JSON.stringify
        });
    e.exports = function (e) {
        return a.stringify.apply(a, arguments)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(10),
        a = i(74),
        o = i(134),
        r = i(50);

    function s(e) {
        var t = new o(e),
            i = a(o.prototype.request, t);
        return n.extend(i, o.prototype, t), n.extend(i, t), i
    }
    var c = s(r);
    c.Axios = o, c.create = function (e) {
        return s(n.merge(r, e))
    }, c.Cancel = i(78), c.CancelToken = i(148), c.isCancel = i(77), c.all = function (e) {
        return Promise.all(e)
    }, c.spread = i(149), e.exports = c, e.exports.default = c
}, function (e, t) {
    function i(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    e.exports = function (e) {
        return null != e && (i(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && i(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(50),
        a = i(10),
        o = i(143),
        r = i(144);

    function s(e) {
        this.defaults = e, this.interceptors = {
            request: new o,
            response: new o
        }
    }
    s.prototype.request = function (e) {
        "string" == typeof e && (e = a.merge({
            url: arguments[0]
        }, arguments[1])), (e = a.merge(n, {
            method: "get"
        }, this.defaults, e)).method = e.method.toLowerCase();
        var t = [r, void 0],
            i = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) i = i.then(t.shift(), t.shift());
        return i
    }, a.forEach(["delete", "get", "head", "options"], function (e) {
        s.prototype[e] = function (t, i) {
            return this.request(a.merge(i || {}, {
                method: e,
                url: t
            }))
        }
    }), a.forEach(["post", "put", "patch"], function (e) {
        s.prototype[e] = function (t, i, n) {
            return this.request(a.merge(n || {}, {
                method: e,
                url: t,
                data: i
            }))
        }
    }), e.exports = s
}, function (e, t, i) {
    "use strict";
    var n = i(10);
    e.exports = function (e, t) {
        n.forEach(e, function (i, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = i, delete e[n])
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(76);
    e.exports = function (e, t, i) {
        var a = i.config.validateStatus;
        i.status && a && !a(i.status) ? t(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : e(i)
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t, i, n, a) {
        return e.config = t, i && (e.code = i), e.request = n, e.response = a, e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(10);

    function a(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function (e, t, i) {
        if (!t) return e;
        var o;
        if (i) o = i(t);
        else if (n.isURLSearchParams(t)) o = t.toString();
        else {
            var r = [];
            n.forEach(t, function (e, t) {
                null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
                    n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), r.push(a(t) + "=" + a(e))
                }))
            }), o = r.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(10),
        a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, i, o, r = {};
        return e ? (n.forEach(e.split("\n"), function (e) {
            if (o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), i = n.trim(e.substr(o + 1)), t) {
                if (r[t] && a.indexOf(t) >= 0) return;
                r[t] = "set-cookie" === t ? (r[t] ? r[t] : []).concat([i]) : r[t] ? r[t] + ", " + i : i
            }
        }), r) : r
    }
}, function (e, t, i) {
    "use strict";
    var n = i(10);
    e.exports = n.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            i = document.createElement("a");

        function a(e) {
            var n = e;
            return t && (i.setAttribute("href", n), n = i.href), i.setAttribute("href", n), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }
        return e = a(window.location.href),
            function (t) {
                var i = n.isString(t) ? a(t) : t;
                return i.protocol === e.protocol && i.host === e.host
            }
    }() : function () {
        return !0
    }
}, function (e, t, i) {
    "use strict";

    function n() {
        this.message = "String contains an invalid character"
    }
    n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", e.exports = function (e) {
        for (var t, i, a = String(e), o = "", r = 0, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; a.charAt(0 | r) || (s = "=", r % 1); o += s.charAt(63 & t >> 8 - r % 1 * 8)) {
            if ((i = a.charCodeAt(r += .75)) > 255) throw new n;
            t = t << 8 | i
        }
        return o
    }
}, function (e, t, i) {
    "use strict";
    var n = i(10);
    e.exports = n.isStandardBrowserEnv() ? {
        write: function (e, t, i, a, o, r) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)), n.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()), n.isString(a) && s.push("path=" + a), n.isString(o) && s.push("domain=" + o), !0 === r && s.push("secure"), document.cookie = s.join("; ")
        },
        read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {},
        read: function () {
            return null
        },
        remove: function () {}
    }
}, function (e, t, i) {
    "use strict";
    var n = i(10);

    function a() {
        this.handlers = []
    }
    a.prototype.use = function (e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, a.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, a.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = a
}, function (e, t, i) {
    "use strict";
    var n = i(10),
        a = i(145),
        o = i(77),
        r = i(50),
        s = i(146),
        c = i(147);

    function d(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function (e) {
        return d(e), e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || r.adapter)(e).then(function (t) {
            return d(e), t.data = a(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return o(t) || (d(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(10);
    e.exports = function (e, t, i) {
        return n.forEach(i, function (i) {
            e = i(e, t)
        }), e
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(78);

    function a(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var i = this;
        e(function (e) {
            i.reason || (i.reason = new n(e), t(i.reason))
        })
    }
    a.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, a.source = function () {
        var e;
        return {
            token: new a(function (t) {
                e = t
            }),
            cancel: e
        }
    }, e.exports = a
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t, i) {}, function (e, t, i) {
    e.exports = {
        default: i(152),
        __esModule: !0
    }
}, function (e, t, i) {
    i(30), i(153), e.exports = i(7).Array.from
}, function (e, t, i) {
    "use strict";
    var n = i(22),
        a = i(13),
        o = i(33),
        r = i(63),
        s = i(64),
        c = i(40),
        d = i(154),
        u = i(45);
    a(a.S + a.F * !i(69)(function (e) {
        Array.from(e)
    }), "Array", {
        from: function (e) {
            var t, i, a, p, l = o(e),
                h = "function" == typeof this ? this : Array,
                f = arguments.length,
                m = f > 1 ? arguments[1] : void 0,
                g = void 0 !== m,
                y = 0,
                v = u(l);
            if (g && (m = n(m, f > 2 ? arguments[2] : void 0, 2)), null == v || h == Array && s(v))
                for (i = new h(t = c(l.length)); t > y; y++) d(i, y, g ? m(l[y], y) : l[y]);
            else
                for (p = v.call(l), i = new h; !(a = p.next()).done; y++) d(i, y, g ? r(p, m, [a.value, y], !0) : a.value);
            return i.length = y, i
        }
    })
}, function (e, t, i) {
    "use strict";
    var n = i(14),
        a = i(23);
    e.exports = function (e, t, i) {
        t in e ? n.f(e, t, a(0, i)) : e[t] = i
    }
}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {
    "use strict";
    i(4), i(0)
}]);