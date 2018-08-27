! function (e) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "https://canny.io/", n(0)
}({
    0: function (e, n, t) {
        e.exports = t(1119)
    },
    106: function (e, n) {
        "use strict";

        function t(e) {
            var n = e.data;
            if ("string" == typeof n && 0 === n.indexOf(o)) {
                n = n.replace(o, "");
                try {
                    var t = JSON.parse(n)
                } catch (e) {
                    return void console.warn("Canny: Invalid message received: " + n)
                }
                if (!t.type || !t.data) return void console.warn("Canny: Malformed message sent: " + n);
                var r = i[t.type];
                r && r.forEach(function (n) {
                    if (!n.sourceWindow || e.source === n.sourceWindow) {
                        if (n.origin)
                            if (n.origin instanceof RegExp) {
                                if (!n.origin.test(e.origin)) return
                            } else {
                                if ("string" != typeof n.origin) return void console.warn("Canny: Invalid subscriber origin: " + JSON.stringify(n.origin));
                                if (n.origin !== e.origin) return
                            }
                        n.callback(t.data, e.origin)
                    }
                })
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = "[canny]",
            i = {};
        "undefined" != typeof window && window.addEventListener("message", t, !1);
        var r = {
            postMessage: function (e, n, t, i) {
                var r = o + JSON.stringify({
                    type: t,
                    data: i
                });
                e.postMessage(r, n)
            },
            subscribe: function (e, n, t, o) {
                i[t] || (i[t] = []), i[t].push({
                    callback: o,
                    origin: n,
                    sourceWindow: e
                });
                var r = function () {
                    setTimeout(function () {
                        for (var e = 0; e < i[t].length; e++) {
                            var n = i[t][e];
                            if (n.callback === o) return void i[t].splice(e, 1)
                        }
                    }, 0)
                };
                return r
            }
        };
        n.default = r
    },
    171: function (e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var t = {
            parse: function (e) {
                var n = e.slice(1).split("&"),
                    t = [],
                    o = [];
                n.forEach(function (e) {
                    if (e) {
                        var n = e.split("=");
                        t.push(n[0]), o.push(n[1])
                    }
                });
                var i = {};
                return t.forEach(function (e, n) {
                    if (e) {
                        var t = o[n];
                        t ? i[decodeURIComponent(e)] = decodeURIComponent(o[n]) : i[decodeURIComponent(e)] = ""
                    }
                }), i
            },
            stringify: function (e) {
                var n = [];
                for (var t in e) {
                    var o = e[t];
                    n.push(o ? encodeURIComponent(t) + "=" + encodeURIComponent(o) : encodeURIComponent(t))
                }
                return 0 === n.length ? "" : "?" + n.join("&")
            }
        };
        n.default = t
    },
    269: function (e, n) {
        "use strict";
        Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function (e) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var n = Object(this),
                    t = n.length >>> 0;
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var o = arguments[1], i = 0; i < t;) {
                    var r = n[i];
                    if (e.call(o, r, i, n)) return r;
                    i++
                }
            }
        }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
            value: function (e) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var n = Object(this),
                    t = n.length >>> 0;
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var o = arguments[1], i = 0; i < t;) {
                    var r = n[i];
                    if (e.call(o, r, i, n)) return i;
                    i++
                }
                return -1
            }
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function (e, n) {
                function t(e, n) {
                    return e === n || "number" == typeof e && "number" == typeof n && isNaN(e) && isNaN(n)
                }
                if (null == this) throw new TypeError('"this" is null or not defined');
                var o = Object(this),
                    i = o.length >>> 0;
                if (0 === i) return !1;
                for (var r = 0 | n, a = Math.max(r >= 0 ? r : i - Math.abs(r), 0); a < i;) {
                    if (t(o[a], e)) return !0;
                    a++
                }
                return !1
            }
        }), Array.prototype.some || (Array.prototype.some = function (e) {
            if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
            if ("function" != typeof e) throw new TypeError;
            for (var n = Object(this), t = n.length >>> 0, o = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < t; i++)
                if (i in n && e.call(o, n[i], i, n)) return !0;
            return !1
        }), Math.trunc = Math.trunc || function (e) {
            return isNaN(e) ? NaN : e > 0 ? Math.floor(e) : Math.ceil(e)
        }, Object.assign = Object.assign || function (e, n) {
            function t(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            for (var o, i, r = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, u = t(e), c = 1; c < arguments.length; c++) {
                o = Object(arguments[c]);
                for (var s in o) r.call(o, s) && (u[s] = o[s]);
                if (Object.getOwnPropertySymbols) {
                    i = Object.getOwnPropertySymbols(o);
                    for (var l = 0; l < i.length; l++) a.call(o, i[l]) && (u[i[l]] = o[i[l]])
                }
            }
            return u
        }, String.prototype.startsWith = String.prototype.startsWith || function (e) {
            return this.substr(0, e.length) === e
        }, String.prototype.endsWith = String.prototype.endsWith || function (e) {
            var n = this.length - e.length;
            return !(n < 0) && this.substr(n, e.length) === e
        }, "undefined" == typeof document || "scrollingElement" in document || ! function () {
            function e(e) {
                return window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle
            }

            function n(e) {
                return window.HTMLBodyElement ? e instanceof HTMLBodyElement : /body/i.test(e.tagName)
            }

            function t(e) {
                for (var t = e; t = t.nextSibling;)
                    if (1 == t.nodeType && n(t)) return t;
                return null
            }

            function o(e) {
                return "none" != e.display && !("collapse" == e.visibility && /^table-(.+-group|row|column)$/.test(e.display))
            }

            function i(n) {
                var t = e(n),
                    i = e(document.documentElement);
                return "visible" != t.overflow && "visible" != i.overflow && o(t) && o(i)
            }
            var r, a = function () {
                    var e = /^CSS1/.test(document.compatMode);
                    if (!e) return !1;
                    if (void 0 === r) {
                        var n = document.createElement("iframe");
                        n.style.height = "1px", (document.body || document.documentElement || document).appendChild(n);
                        var t = n.contentWindow.document;
                        t.write('<!DOCTYPE html><div style="height:9999em">x</div>'), t.close(), r = t.documentElement.scrollHeight > t.body.scrollHeight, n.parentNode.removeChild(n)
                    }
                    return r
                },
                u = function () {
                    if (a()) return document.documentElement;
                    var e = document.body,
                        n = e && !/body/i.test(e.tagName);
                    return e = n ? t(e) : e, e && i(e) ? null : e
                };
            Object.defineProperty ? Object.defineProperty(document, "scrollingElement", {
                get: u
            }) : document.__defineGetter__ ? document.__defineGetter__("scrollingElement", u) : (document.scrollingElement = u(), document.attachEvent && document.attachEvent("onpropertychange", function () {
                "activeElement" == window.event.propertyName && (document.scrollingElement = u())
            }))
        }()
    },
    680: function (e, n) {
        "use strict";

        function t(e) {
            if (0 === e.length) return 0;
            for (var n = 0, t = 0; t < e.length; t++) {
                var o = e.charCodeAt(t);
                n = (n << 5) - n + o, n |= 0
            }
            return n < 0 && (n *= -1), "" + n
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = t
    },
    681: function (e, n) {
        "use strict";

        function t() {
            var e = document.scrollingElement.scrollTop;
            return e
        }

        function o(e) {
            for (var n = 0; e && "body" !== e.tagName.toLowerCase();) n += e.offsetTop, e = e.offsetParent;
            return n
        }

        function i(e, n) {
            var t = e.offsetHeight;
            return n + t
        }

        function r() {
            var e = document,
                n = e.documentElement,
                t = window,
                o = t.innerHeight;
            if (o) return o;
            if (!n) return 0;
            var i = n.clientHeight;
            return isNaN(i) ? 0 : i
        }

        function a(e) {
            if (!e) return !1;
            var n = t(),
                a = o(e),
                u = i(e, a),
                c = r(),
                s = n + c;
            return a < s && a > n || u < s && u > n || a < n && u > s
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = a
    },
    904: function (e, n, t) {
        "use strict";
        e.exports = t(907)
    },
    905: function (e, n) {
        ! function (e) {
            "use strict";

            function n(n, t, o) {
                "addEventListener" in e ? n.addEventListener(t, o, !1) : "attachEvent" in e && n.attachEvent("on" + t, o)
            }

            function t(n, t, o) {
                "removeEventListener" in e ? n.removeEventListener(t, o, !1) : "detachEvent" in e && n.detachEvent("on" + t, o)
            }

            function o(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }

            function i(e) {
                var n, t, o, i = null,
                    r = 0,
                    a = function () {
                        r = Fe(), i = null, o = e.apply(n, t), i || (n = t = null)
                    };
                return function () {
                    var u = Fe();
                    r || (r = u);
                    var c = Ce - (u - r);
                    return n = this, t = arguments, c <= 0 || c > Ce ? (i && (clearTimeout(i), i = null), r = u, o = e.apply(n, t), i || (n = t = null)) : i || (i = setTimeout(a, c)), o
                }
            }

            function r(e) {
                return ge + "[" + he + "] " + e
            }

            function a(n) {
                me && "object" == typeof e.console && console.log(r(n))
            }

            function u(n) {
                "object" == typeof e.console && console.warn(r(n))
            }

            function c() {
                s(), a("Initialising iFrame (" + location.href + ")"), l(), m(), d("background", Y), d("padding", ee), I(), v(), b(), g(), k(), w(), le = M(), D("init", "Init message from host page"), Ne()
            }

            function s() {
                function e(e) {
                    return "true" === e
                }
                var n = se.substr(pe).split(":");
                he = n[0], G = void 0 !== n[1] ? +n[1] : G, ne = void 0 !== n[2] ? e(n[2]) : ne, me = void 0 !== n[3] ? e(n[3]) : me, fe = void 0 !== n[4] ? +n[4] : fe, Q = void 0 !== n[6] ? e(n[6]) : Q, $ = n[7], ue = void 0 !== n[8] ? n[8] : ue, Y = n[9], ee = n[10], Oe = void 0 !== n[11] ? +n[11] : Oe, le.enable = void 0 !== n[12] && e(n[12]), ve = void 0 !== n[13] ? n[13] : ve, ke = void 0 !== n[14] ? n[14] : ke
            }

            function l() {
                function n() {
                    var n = e.iFrameResizer;
                    a("Reading data from page: " + JSON.stringify(n)), Re = "messageCallback" in n ? n.messageCallback : Re, Ne = "readyCallback" in n ? n.readyCallback : Ne, Ee = "targetOrigin" in n ? n.targetOrigin : Ee, ue = "heightCalculationMethod" in n ? n.heightCalculationMethod : ue, ke = "widthCalculationMethod" in n ? n.widthCalculationMethod : ke
                }
                "iFrameResizer" in e && Object === e.iFrameResizer.constructor && n(), a("TargetOrigin for parent set to: " + Ee)
            }

            function f(e, n) {
                return -1 !== n.indexOf("-") && (u("Negative CSS value ignored for " + e), n = ""), n
            }

            function d(e, n) {
                void 0 !== n && "" !== n && "null" !== n && (document.body.style[e] = n, a("Body " + e + ' set to "' + n + '"'))
            }

            function m() {
                void 0 === $ && ($ = G + "px"), d("margin", f("margin", $))
            }

            function g() {
                document.documentElement.style.height = "", document.body.style.height = "", a('HTML & body height set to "auto"')
            }

            function p(i) {
                function r() {
                    D(i.eventName, i.eventType)
                }
                var u = {
                    add: function (t) {
                        n(e, t, r)
                    },
                    remove: function (n) {
                        t(e, n, r)
                    }
                };
                i.eventNames && Array.prototype.map ? (i.eventName = i.eventNames[0], i.eventNames.map(u[i.method])) : u[i.method](i.eventName), a(o(i.method) + " event listener: " + i.eventType)
            }

            function h(e) {
                p({
                    method: e,
                    eventType: "Animation Start",
                    eventNames: ["animationstart", "webkitAnimationStart"]
                }), p({
                    method: e,
                    eventType: "Animation Iteration",
                    eventNames: ["animationiteration", "webkitAnimationIteration"]
                }), p({
                    method: e,
                    eventType: "Animation End",
                    eventNames: ["animationend", "webkitAnimationEnd"]
                }), p({
                    method: e,
                    eventType: "Input",
                    eventName: "input"
                }), p({
                    method: e,
                    eventType: "Mouse Up",
                    eventName: "mouseup"
                }), p({
                    method: e,
                    eventType: "Mouse Down",
                    eventName: "mousedown"
                }), p({
                    method: e,
                    eventType: "Orientation Change",
                    eventName: "orientationchange"
                }), p({
                    method: e,
                    eventType: "Print",
                    eventName: ["afterprint", "beforeprint"]
                }), p({
                    method: e,
                    eventType: "Ready State Change",
                    eventName: "readystatechange"
                }), p({
                    method: e,
                    eventType: "Touch Start",
                    eventName: "touchstart"
                }), p({
                    method: e,
                    eventType: "Touch End",
                    eventName: "touchend"
                }), p({
                    method: e,
                    eventType: "Touch Cancel",
                    eventName: "touchcancel"
                }), p({
                    method: e,
                    eventType: "Transition Start",
                    eventNames: ["transitionstart", "webkitTransitionStart", "MSTransitionStart", "oTransitionStart", "otransitionstart"]
                }), p({
                    method: e,
                    eventType: "Transition Iteration",
                    eventNames: ["transitioniteration", "webkitTransitionIteration", "MSTransitionIteration", "oTransitionIteration", "otransitioniteration"]
                }), p({
                    method: e,
                    eventType: "Transition End",
                    eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend"]
                }), "child" === ve && p({
                    method: e,
                    eventType: "IFrame Resized",
                    eventName: "resize"
                })
            }

            function y(e, n, t, o) {
                return n !== e && (e in t || (u(e + " is not a valid option for " + o + "CalculationMethod."), e = n), a(o + ' calculation method set to "' + e + '"')), e
            }

            function v() {
                ue = y(ue, ae, ze, "height")
            }

            function b() {
                ke = y(ke, Me, Ae, "width")
            }

            function w() {
                !0 === Q ? (h("add"), N()) : a("Auto Resize disabled")
            }

            function E() {
                a("Disable outgoing messages"), be = !1
            }

            function O() {
                a("Remove event listener: Message"), t(e, "message", V)
            }

            function S() {
                null !== Z && Z.disconnect()
            }

            function T() {
                h("remove"), S(), clearInterval(de)
            }

            function C() {
                E(), O(), !0 === Q && T()
            }

            function I() {
                var e = document.createElement("div");
                e.style.clear = "both", e.style.display = "block", document.body.appendChild(e)
            }

            function M() {
                function t() {
                    return {
                        x: void 0 !== e.pageXOffset ? e.pageXOffset : document.documentElement.scrollLeft,
                        y: void 0 !== e.pageYOffset ? e.pageYOffset : document.documentElement.scrollTop
                    }
                }

                function o(e) {
                    var n = e.getBoundingClientRect(),
                        o = t();
                    return {
                        x: parseInt(n.left, 10) + parseInt(o.x, 10),
                        y: parseInt(n.top, 10) + parseInt(o.y, 10)
                    }
                }

                function i(e) {
                    function n(e) {
                        var n = o(e);
                        a("Moving to in page link (#" + t + ") at x: " + n.x + " y: " + n.y), J(n.y, n.x, "scrollToOffset")
                    }
                    var t = e.split("#")[1] || e,
                        i = decodeURIComponent(t),
                        r = document.getElementById(i) || document.getElementsByName(i)[0];
                    void 0 !== r ? n(r) : (a("In page link (#" + t + ") not found in iFrame, so sending to parent"), J(0, 0, "inPageLink", "#" + t))
                }

                function r() {
                    "" !== location.hash && "#" !== location.hash && i(location.href)
                }

                function c() {
                    function e(e) {
                        function t(e) {
                            e.preventDefault(), i(this.getAttribute("href"))
                        }
                        "#" !== e.getAttribute("href") && n(e, "click", t)
                    }
                    Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), e)
                }

                function s() {
                    n(e, "hashchange", r)
                }

                function l() {
                    setTimeout(r, oe)
                }

                function f() {
                    Array.prototype.forEach && document.querySelectorAll ? (a("Setting up location.hash handlers"), c(), s(), l()) : u("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")
                }
                return le.enable ? f() : a("In page linking not enabled"), {
                    findTarget: i
                }
            }

            function k() {
                a("Enable public methods"), xe.parentIFrame = {
                    autoResize: function (e) {
                        return !0 === e && !1 === Q ? (Q = !0, w()) : !1 === e && !0 === Q && (Q = !1, T()), Q
                    },
                    close: function () {
                        J(0, 0, "close"), C()
                    },
                    getId: function () {
                        return he
                    },
                    getPageInfo: function (e) {
                        "function" == typeof e ? (Pe = e, J(0, 0, "pageInfo")) : (Pe = function () {}, J(0, 0, "pageInfoStop"))
                    },
                    moveToAnchor: function (e) {
                        le.findTarget(e)
                    },
                    reset: function () {
                        B("parentIFrame.reset")
                    },
                    scrollTo: function (e, n) {
                        J(n, e, "scrollTo")
                    },
                    scrollToOffset: function (e, n) {
                        J(n, e, "scrollToOffset")
                    },
                    sendMessage: function (e, n) {
                        J(0, 0, "message", JSON.stringify(e), n)
                    },
                    setHeightCalculationMethod: function (e) {
                        ue = e, v()
                    },
                    setWidthCalculationMethod: function (e) {
                        ke = e, b()
                    },
                    setTargetOrigin: function (e) {
                        a("Set targetOrigin: " + e), Ee = e
                    },
                    size: function (e, n) {
                        var t = "" + (e ? e : "") + (n ? "," + n : "");
                        D("size", "parentIFrame.size(" + t + ")", e, n)
                    }
                }
            }

            function x() {
                0 !== fe && (a("setInterval: " + fe + "ms"), de = setInterval(function () {
                    D("interval", "setInterval: " + fe)
                }, Math.abs(fe)))
            }

            function R() {
                function n(e) {
                    function n(e) {
                        !1 === e.complete && (a("Attach listeners to " + e.src), e.addEventListener("load", r, !1), e.addEventListener("error", u, !1), l.push(e))
                    }
                    "attributes" === e.type && "src" === e.attributeName ? n(e.target) : "childList" === e.type && Array.prototype.forEach.call(e.target.querySelectorAll("img"), n)
                }

                function t(e) {
                    l.splice(l.indexOf(e), 1)
                }

                function o(e) {
                    a("Remove listeners from " + e.src), e.removeEventListener("load", r, !1), e.removeEventListener("error", u, !1), t(e)
                }

                function i(e, n, t) {
                    o(e.target), D(n, t + ": " + e.target.src, void 0, void 0)
                }

                function r(e) {
                    i(e, "imageLoad", "Image loaded")
                }

                function u(e) {
                    i(e, "imageLoadFailed", "Image load failed")
                }

                function c(e) {
                    D("mutationObserver", "mutationObserver: " + e[0].target + " " + e[0].type), e.forEach(n)
                }

                function s() {
                    var e = document.querySelector("body"),
                        n = {
                            attributes: !0,
                            attributeOldValue: !1,
                            characterData: !0,
                            characterDataOldValue: !1,
                            childList: !0,
                            subtree: !0
                        };
                    return d = new f(c), a("Create body MutationObserver"), d.observe(e, n), d
                }
                var l = [],
                    f = e.MutationObserver || e.WebKitMutationObserver,
                    d = s();
                return {
                    disconnect: function () {
                        "disconnect" in d && (a("Disconnect body MutationObserver"), d.disconnect(), l.forEach(o))
                    }
                }
            }

            function N() {
                var n = 0 > fe;
                e.MutationObserver || e.WebKitMutationObserver ? n ? x() : Z = R() : (a("MutationObserver not supported in this browser!"), x())
            }

            function P(e, n) {
                function t(e) {
                    var t = /^\d+(px)?$/i;
                    if (t.test(e)) return parseInt(e, X);
                    var o = n.style.left,
                        i = n.runtimeStyle.left;
                    return n.runtimeStyle.left = n.currentStyle.left, n.style.left = e || 0, e = n.style.pixelLeft, n.style.left = o, n.runtimeStyle.left = i, e
                }
                var o = 0;
                return n = n || document.body, "defaultView" in document && "getComputedStyle" in document.defaultView ? (o = document.defaultView.getComputedStyle(n, null), o = null !== o ? o[e] : 0) : o = t(n.currentStyle[e]), parseInt(o, X)
            }

            function F(e) {
                e > Ce / 2 && (Ce = 2 * e, a("Event throttle increased to " + Ce + "ms"))
            }

            function z(e, n) {
                for (var t = n.length, i = 0, r = 0, u = o(e), c = Fe(), s = 0; s < t; s++) i = n[s].getBoundingClientRect()[e] + P("margin" + u, n[s]), i > r && (r = i);
                return c = Fe() - c, a("Parsed " + t + " HTML elements"), a("Element position calculated in " + c + "ms"), F(c), r
            }

            function A(e, n) {
                for (var t = n.length, o = 0, i = 0, r = Fe(), u = 0; u < t; u++) o = n[u].getBoundingClientRect()[e], o > i && (i = o);
                return r = Fe() - r, a("Parsed " + t + " HTML elements"), a("Element position calculated in " + r + "ms"), F(r), i
            }

            function _(e) {
                return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll()]
            }

            function j(e, n) {
                function t() {
                    return u("No tagged elements (" + n + ") found on page"), re
                }
                var o = document.querySelectorAll("[" + n + "]");
                return 0 === o.length ? t() : z(e, o)
            }

            function L(e, n) {
                function t() {
                    return u("No tagged elements (" + n + ") found on page"), re
                }
                var o = document.querySelectorAll("[" + n + "]");
                return 0 === o.length ? t() : A(e, o)
            }

            function W() {
                return document.querySelectorAll("body *")
            }

            function H(e, n, t, o) {
                function i() {
                    re = f, Ie = d, J(re, Ie, e)
                }

                function r() {
                    function e(e, n) {
                        var t = Math.abs(e - n) <= Oe;
                        return !t
                    }
                    return f = void 0 !== t ? t : ze[ue](), d = void 0 !== o ? o : Ae[ke](), e(re, f) || ne && e(Ie, d)
                }

                function u() {
                    return !(e in {
                        init: 1,
                        interval: 1,
                        size: 1
                    })
                }

                function c() {
                    return ue in ye || ne && ke in ye
                }

                function s() {
                    a("No change in size detected")
                }

                function l() {
                    u() && c() ? B(n) : e in {
                        interval: 1
                    } || s()
                }
                var f, d;
                r() || "init" === e ? (U(), i()) : l()
            }

            function D(e, n, t, o) {
                function i() {
                    e in {
                        reset: 1,
                        resetPage: 1,
                        init: 1
                    } || a("Trigger event: " + n)
                }

                function r() {
                    return Se && e in te
                }
                r() ? a("Trigger event cancelled: " + e) : (i(), _e(e, n, t, o))
            }

            function U() {
                Se || (Se = !0, a("Trigger event lock on")), clearTimeout(Te), Te = setTimeout(function () {
                    Se = !1, a("Trigger event lock off"), a("--")
                }, oe)
            }

            function q(e) {
                re = ze[ue](), Ie = Ae[ke](), J(re, Ie, e)
            }

            function B(e) {
                var n = ue;
                ue = ae, a("Reset trigger event: " + e), U(), q("reset"), ue = n
            }

            function J(e, n, t, o, i) {
                function r() {
                    void 0 === i ? i = Ee : a("Message targetOrigin: " + i)
                }

                function u() {
                    var r = e + ":" + n,
                        u = he + ":" + r + ":" + t + (void 0 !== o ? ":" + o : "");
                    a("Sending message to host page (" + u + ")"), we.postMessage(ge + u, i)
                }!0 === be && (r(), u())
            }

            function V(n) {
                function t() {
                    return ge === ("" + n.data).substr(0, pe)
                }

                function o() {
                    se = n.data, we = n.source, c(), ie = !1, setTimeout(function () {
                        ce = !1
                    }, oe)
                }

                function i() {
                    ce ? a("Page reset ignored by init") : (a("Page size reset by host page"), q("resetPage"))
                }

                function r() {
                    D("resizeParent", "Parent window requested size check")
                }

                function s() {
                    var e = f();
                    le.findTarget(e)
                }

                function l() {
                    return n.data.split("]")[1].split(":")[0]
                }

                function f() {
                    return n.data.substr(n.data.indexOf(":") + 1)
                }

                function d() {
                    return "iFrameResize" in e
                }

                function m() {
                    var e = f();
                    a("MessageCallback called from parent: " + e), Re(JSON.parse(e)), a(" --")
                }

                function g() {
                    var e = f();
                    a("PageInfoFromParent called from parent: " + e), Pe(JSON.parse(e)), a(" --")
                }

                function p() {
                    return n.data.split(":")[2] in {
                        true: 1,
                        false: 1
                    }
                }

                function h() {
                    switch (l()) {
                        case "reset":
                            i();
                            break;
                        case "resize":
                            r();
                            break;
                        case "moveToAnchor":
                            s();
                            break;
                        case "message":
                            m();
                            break;
                        case "pageInfo":
                            g();
                            break;
                        default:
                            d() || p() || u("Unexpected message (" + n.data + ")")
                    }
                }

                function y() {
                    !1 === ie ? h() : p() ? o() : a('Ignored message of type "' + l() + '". Received before initialization.')
                }
                t() && y()
            }

            function K() {
                "loading" !== document.readyState && e.parent.postMessage("[iFrameResizerChild]Ready", "*")
            }
            var Q = !0,
                X = 10,
                Y = "",
                G = 0,
                $ = "",
                Z = null,
                ee = "",
                ne = !1,
                te = {
                    resize: 1,
                    click: 1
                },
                oe = 128,
                ie = !0,
                re = 1,
                ae = "bodyOffset",
                ue = ae,
                ce = !0,
                se = "",
                le = {},
                fe = 32,
                de = null,
                me = !1,
                ge = "[iFrameSizer]",
                pe = ge.length,
                he = "",
                ye = {
                    max: 1,
                    min: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                },
                ve = "child",
                be = !0,
                we = e.parent,
                Ee = "*",
                Oe = 0,
                Se = !1,
                Te = null,
                Ce = 16,
                Ie = 1,
                Me = "scroll",
                ke = Me,
                xe = e,
                Re = function () {
                    u("MessageCallback function not defined")
                },
                Ne = function () {},
                Pe = function () {},
                Fe = Date.now || function () {
                    return (new Date).getTime()
                },
                ze = {
                    bodyOffset: function () {
                        return document.body.offsetHeight + P("marginTop") + P("marginBottom")
                    },
                    offset: function () {
                        return ze.bodyOffset()
                    },
                    bodyScroll: function () {
                        return document.body.scrollHeight
                    },
                    documentElementOffset: function () {
                        return document.documentElement.offsetHeight
                    },
                    documentElementScroll: function () {
                        return document.documentElement.scrollHeight
                    },
                    max: function () {
                        return Math.max.apply(null, _(ze))
                    },
                    min: function () {
                        return Math.min.apply(null, _(ze))
                    },
                    grow: function () {
                        return ze.max()
                    },
                    lowestElement: function () {
                        return Math.max(ze.bodyOffset(), z("bottom", W()))
                    },
                    taggedElement: function () {
                        return j("bottom", "data-iframe-height")
                    },
                    taggedElementHeight: function () {
                        return L("height", "data-iframe-height")
                    }
                },
                Ae = {
                    bodyScroll: function () {
                        return document.body.scrollWidth
                    },
                    bodyOffset: function () {
                        return document.body.offsetWidth
                    },
                    documentElementScroll: function () {
                        return document.documentElement.scrollWidth
                    },
                    documentElementOffset: function () {
                        return document.documentElement.offsetWidth
                    },
                    scroll: function () {
                        return Math.max(Ae.bodyScroll(), Ae.documentElementScroll())
                    },
                    max: function () {
                        return Math.max.apply(null, _(Ae))
                    },
                    min: function () {
                        return Math.min.apply(null, _(Ae))
                    },
                    rightMostElement: function () {
                        return z("right", W())
                    },
                    taggedElement: function () {
                        return j("right", "data-iframe-width")
                    },
                    taggedElementWidth: function () {
                        return L("width", "data-iframe-width")
                    }
                },
                _e = i(H);
            n(e, "message", V), K()
        }(window || {})
    },
    906: function (e, n, t) {
        var o, i, r;
        ! function (t) {
            "use strict";

            function a(e, n, o) {
                "addEventListener" in t ? e.addEventListener(n, o, !1) : "attachEvent" in t && e.attachEvent("on" + n, o)
            }

            function u(e, n, o) {
                "removeEventListener" in t ? e.removeEventListener(n, o, !1) : "detachEvent" in t && e.detachEvent("on" + n, o)
            }

            function c() {
                var e, n = ["moz", "webkit", "o", "ms"];
                for (e = 0; e < n.length && !B; e += 1) B = t[n[e] + "RequestAnimationFrame"];
                B || d("setup", "RequestAnimationFrame not supported")
            }

            function s(e) {
                var n = "Host page: " + e;
                return t.top !== t.self && (n = t.parentIFrame && t.parentIFrame.getId ? t.parentIFrame.getId() + ": " + e : "Nested host page: " + e), n
            }

            function l(e) {
                return D + "[" + s(e) + "]"
            }

            function f(e) {
                return V[e] ? V[e].log : j
            }

            function d(e, n) {
                p("log", e, n, f(e))
            }

            function m(e, n) {
                p("info", e, n, f(e))
            }

            function g(e, n) {
                p("warn", e, n, !0)
            }

            function p(e, n, o, i) {
                !0 === i && "object" == typeof t.console && console[e](l(n), o)
            }

            function h(e) {
                function n() {
                    function e() {
                        S(J), w(K)
                    }
                    i("Height"), i("Width"), T(e, J, "init")
                }

                function o() {
                    var e = B.substr(U).split(":");
                    return {
                        iframe: V[e[0]].iframe,
                        id: e[0],
                        height: e[1],
                        width: e[2],
                        type: e[3]
                    }
                }

                function i(e) {
                    var n = +V[K]["max" + e],
                        t = +V[K]["min" + e],
                        o = e.toLowerCase(),
                        i = +J[o];
                    d(K, "Checking " + o + " is in range " + t + "-" + n), i < t && (i = t, d(K, "Set " + o + " to min value")), i > n && (i = n, d(K, "Set " + o + " to max value")), J[o] = "" + i
                }

                function r() {
                    function n() {
                        function e() {
                            var e = 0,
                                n = !1;
                            for (d(K, "Checking connection is from allowed list of origins: " + o); e < o.length; e++)
                                if (o[e] === t) {
                                    n = !0;
                                    break
                                }
                            return n
                        }

                        function n() {
                            var e = V[K].remoteHost;
                            return d(K, "Checking connection is from: " + e), t === e
                        }
                        return o.constructor === Array ? e() : n()
                    }
                    var t = e.origin,
                        o = V[K].checkOrigin;
                    if (o && "" + t != "null" && !n()) throw Error("Unexpected message received from: " + t + " for " + J.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                    return !0
                }

                function c() {
                    return D === ("" + B).substr(0, U) && B.substr(U).split(":")[0] in V
                }

                function s() {
                    var e = J.type in {
                        true: 1,
                        false: 1,
                        undefined: 1
                    };
                    return e && d(K, "Ignoring init message from meta parent page"), e
                }

                function l(e) {
                    return B.substr(B.indexOf(":") + H + e)
                }

                function f(e) {
                    d(K, "MessageCallback passed: {iframe: " + J.iframe.id + ", message: " + e + "}"), A("messageCallback", {
                        iframe: J.iframe,
                        message: JSON.parse(e)
                    }), d(K, "--")
                }

                function p() {
                    var e = document.body.getBoundingClientRect(),
                        n = J.iframe.getBoundingClientRect();
                    return JSON.stringify({
                        iframeHeight: n.height,
                        iframeWidth: n.width,
                        clientHeight: Math.max(document.documentElement.clientHeight, t.innerHeight || 0),
                        clientWidth: Math.max(document.documentElement.clientWidth, t.innerWidth || 0),
                        offsetTop: parseInt(n.top - e.top, 10),
                        offsetLeft: parseInt(n.left - e.left, 10),
                        scrollTop: t.pageYOffset,
                        scrollLeft: t.pageXOffset
                    })
                }

                function h(e, n) {
                    function t() {
                        C("Send Page Info", "pageInfo:" + p(), e, n)
                    }
                    k(t, 32)
                }

                function M() {
                    function e(e, o) {
                        function r() {
                            V[i] ? h(V[i].iframe, i) : n()
                        }["scroll", "resize"].forEach(function (n) {
                            d(i, e + n + " listener for sendPageInfo"), o(t, n, r)
                        })
                    }

                    function n() {
                        e("Remove ", u)
                    }

                    function o() {
                        e("Add ", a)
                    }
                    var i = K;
                    o(), V[i].stopPageInfo = n
                }

                function x() {
                    V[K] && V[K].stopPageInfo && (V[K].stopPageInfo(), delete V[K].stopPageInfo)
                }

                function R() {
                    var e = !0;
                    return null === J.iframe && (g(K, "IFrame (" + J.id + ") not found"), e = !1), e
                }

                function N(e) {
                    var n = e.getBoundingClientRect();
                    return b(K), {
                        x: Math.floor(+n.left + +q.x),
                        y: Math.floor(+n.top + +q.y)
                    }
                }

                function P(e) {
                    function n() {
                        q = a, F(), d(K, "--")
                    }

                    function o() {
                        return {
                            x: +J.width + r.x,
                            y: +J.height + r.y
                        }
                    }

                    function i() {
                        t.parentIFrame ? t.parentIFrame["scrollTo" + (e ? "Offset" : "")](a.x, a.y) : g(K, "Unable to scroll to requested position, window.parentIFrame not found")
                    }
                    var r = e ? N(J.iframe) : {
                            x: 0,
                            y: 0
                        },
                        a = o();
                    d(K, "Reposition requested from iFrame (offset x:" + r.x + " y:" + r.y + ")"), t.top !== t.self ? i() : n()
                }

                function F() {
                    !1 !== A("scrollCallback", q) ? w(K) : E()
                }

                function z(e) {
                    function n() {
                        var e = N(a);
                        d(K, "Moving to in page link (#" + i + ") at x: " + e.x + " y: " + e.y), q = {
                            x: e.x,
                            y: e.y
                        }, F(), d(K, "--")
                    }

                    function o() {
                        t.parentIFrame ? t.parentIFrame.moveToAnchor(i) : d(K, "In page link #" + i + " not found and window.parentIFrame not found")
                    }
                    var i = e.split("#")[1] || "",
                        r = decodeURIComponent(i),
                        a = document.getElementById(r) || document.getElementsByName(r)[0];
                    a ? n() : t.top !== t.self ? o() : d(K, "In page link #" + i + " not found")
                }

                function A(e, n) {
                    return y(K, e, n)
                }

                function _() {
                    switch (V[K].firstRun && W(), J.type) {
                        case "close":
                            v(J.iframe);
                            break;
                        case "message":
                            f(l(6));
                            break;
                        case "scrollTo":
                            P(!1);
                            break;
                        case "scrollToOffset":
                            P(!0);
                            break;
                        case "pageInfo":
                            h(V[K].iframe, K), M();
                            break;
                        case "pageInfoStop":
                            x();
                            break;
                        case "inPageLink":
                            z(l(9));
                            break;
                        case "reset":
                            O(J);
                            break;
                        case "init":
                            n(), A("initCallback", J.iframe), A("resizedCallback", J);
                            break;
                        default:
                            n(), A("resizedCallback", J)
                    }
                }

                function j(e) {
                    var n = !0;
                    return V[e] || (n = !1, g(J.type + " No settings for " + e + ". Message was: " + B)), n
                }

                function L() {
                    for (var e in V) C("iFrame requested init", I(e), document.getElementById(e), e)
                }

                function W() {
                    V[K].firstRun = !1
                }
                var B = e.data,
                    J = {},
                    K = null;
                "[iFrameResizerChild]Ready" === B ? L() : c() ? (J = o(), K = Q = J.id, !s() && j(K) && (d(K, "Received: " + B), R() && r() && _())) : m(K, "Ignored: " + B)
            }

            function y(e, n, t) {
                var o = null,
                    i = null;
                if (V[e]) {
                    if (o = V[e][n], "function" != typeof o) throw new TypeError(n + " on iFrame[" + e + "] is not a function");
                    i = o(t)
                }
                return i
            }

            function v(e) {
                var n = e.id;
                d(n, "Removing iFrame: " + n), e.parentNode.removeChild(e), y(n, "closedCallback", n), d(n, "--"), delete V[n]
            }

            function b(e) {
                null === q && (q = {
                    x: void 0 !== t.pageXOffset ? t.pageXOffset : document.documentElement.scrollLeft,
                    y: void 0 !== t.pageYOffset ? t.pageYOffset : document.documentElement.scrollTop
                }, d(e, "Get page position: " + q.x + "," + q.y))
            }

            function w(e) {
                null !== q && (t.scrollTo(q.x, q.y), d(e, "Set page position: " + q.x + "," + q.y), E())
            }

            function E() {
                q = null
            }

            function O(e) {
                function n() {
                    S(e), C("reset", "reset", e.iframe, e.id)
                }
                d(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), b(e.id), T(n, e, "reset")
            }

            function S(e) {
                function n(n) {
                    e.iframe.style[n] = e[n] + "px", d(e.id, "IFrame (" + i + ") " + n + " set to " + e[n] + "px")
                }

                function t(n) {
                    L || "0" !== e[n] || (L = !0, d(i, "Hidden iFrame detected, creating visibility listener"), x())
                }

                function o(e) {
                    n(e), t(e)
                }
                var i = e.iframe.id;
                V[i] && (V[i].sizeHeight && o("height"), V[i].sizeWidth && o("width"))
            }

            function T(e, n, t) {
                t !== n.type && B ? (d(n.id, "Requesting animation frame"), B(e)) : e()
            }

            function C(e, n, t, o) {
                function i() {
                    var i = V[o].targetOrigin;
                    d(o, "[" + e + "] Sending msg to iframe[" + o + "] (" + n + ") targetOrigin: " + i), t.contentWindow.postMessage(D + n, i)
                }

                function r() {
                    m(o, "[" + e + "] IFrame(" + o + ") not found"), V[o] && delete V[o]
                }

                function a() {
                    t && "contentWindow" in t && null !== t.contentWindow ? i() : r()
                }
                o = o || t.id, V[o] && a()
            }

            function I(e) {
                return e + ":" + V[e].bodyMarginV1 + ":" + V[e].sizeWidth + ":" + V[e].log + ":" + V[e].interval + ":" + V[e].enablePublicMethods + ":" + V[e].autoResize + ":" + V[e].bodyMargin + ":" + V[e].heightCalculationMethod + ":" + V[e].bodyBackground + ":" + V[e].bodyPadding + ":" + V[e].tolerance + ":" + V[e].inPageLinks + ":" + V[e].resizeFrom + ":" + V[e].widthCalculationMethod
            }

            function M(e, n) {
                function t() {
                    function n(n) {
                        1 / 0 !== V[b][n] && 0 !== V[b][n] && (e.style[n] = V[b][n] + "px", d(b, "Set " + n + " = " + V[b][n] + "px"))
                    }

                    function t(e) {
                        if (V[b]["min" + e] > V[b]["max" + e]) throw Error("Value for min" + e + " can not be greater than max" + e)
                    }
                    t("Height"), t("Width"), n("maxHeight"), n("minHeight"), n("maxWidth"), n("minWidth")
                }

                function o() {
                    var e = n && n.id || X.id + _++;
                    return null !== document.getElementById(e) && (e += _++), e
                }

                function i(t) {
                    return Q = t, "" === t && (e.id = t = o(), j = (n || {}).log, Q = t, d(t, "Added missing iframe ID: " + t + " (" + e.src + ")")), t
                }

                function r() {
                    d(b, "IFrame scrolling " + (V[b].scrolling ? "enabled" : "disabled") + " for " + b), e.style.overflow = !1 === V[b].scrolling ? "hidden" : "auto", e.scrolling = !1 === V[b].scrolling ? "no" : "yes"
                }

                function u() {
                    "number" != typeof V[b].bodyMargin && "0" !== V[b].bodyMargin || (V[b].bodyMarginV1 = V[b].bodyMargin, V[b].bodyMargin = "" + V[b].bodyMargin + "px")
                }

                function c() {
                    var n = V[b].firstRun,
                        t = V[b].heightCalculationMethod in J;
                    !n && t && O({
                        iframe: e,
                        height: 0,
                        width: 0,
                        type: "init"
                    })
                }

                function s() {
                    Function.prototype.bind && (V[b].iframe.iFrameResizer = {
                        close: v.bind(null, V[b].iframe),
                        resize: C.bind(null, "Window resize", "resize", V[b].iframe),
                        moveToAnchor: function (e) {
                            C("Move to anchor", "inPageLink:" + e, V[b].iframe, b)
                        },
                        sendMessage: function (e) {
                            e = JSON.stringify(e), C("Send Message", "message:" + e, V[b].iframe, b)
                        }
                    })
                }

                function l(n) {
                    function t() {
                        C("iFrame.onload", n, e), c()
                    }
                    a(e, "load", t), C("init", n, e)
                }

                function f(e) {
                    if ("object" != typeof e) throw new TypeError("Options is not an object")
                }

                function m(e) {
                    for (var n in X) X.hasOwnProperty(n) && (V[b][n] = e.hasOwnProperty(n) ? e[n] : X[n])
                }

                function p(e) {
                    return "" === e || "file://" === e ? "*" : e
                }

                function h(n) {
                    n = n || {}, V[b] = {
                        firstRun: !0,
                        iframe: e,
                        remoteHost: e.src.split("/").slice(0, 3).join("/")
                    }, f(n), m(n), V[b].targetOrigin = !0 === V[b].checkOrigin ? p(V[b].remoteHost) : "*"
                }

                function y() {
                    return b in V && "iFrameResizer" in e
                }
                var b = i(e.id);
                y() ? g(b, "Ignored iFrame, already setup.") : (h(n), r(), t(), u(), l(I(b)), s())
            }

            function k(e, n) {
                null === K && (K = setTimeout(function () {
                    K = null, e()
                }, n))
            }

            function x() {
                function e() {
                    function e(e) {
                        function n(n) {
                            return "0px" === V[e].iframe.style[n]
                        }

                        function t(e) {
                            return null !== e.offsetParent
                        }
                        t(V[e].iframe) && (n("height") || n("width")) && C("Visibility change", "resize", V[e].iframe, e)
                    }
                    for (var n in V) e(n)
                }

                function n(n) {
                    d("window", "Mutation observed: " + n[0].target + " " + n[0].type), k(e, 16)
                }

                function o() {
                    var e = document.querySelector("body"),
                        t = {
                            attributes: !0,
                            attributeOldValue: !1,
                            characterData: !0,
                            characterDataOldValue: !1,
                            childList: !0,
                            subtree: !0
                        },
                        o = new i(n);
                    o.observe(e, t)
                }
                var i = t.MutationObserver || t.WebKitMutationObserver;
                i && o()
            }

            function R(e) {
                function n() {
                    P("Window " + e, "resize")
                }
                d("window", "Trigger event: " + e), k(n, 16)
            }

            function N() {
                function e() {
                    P("Tab Visable", "resize")
                }
                "hidden" !== document.visibilityState && (d("document", "Trigger event: Visiblity change"), k(e, 16))
            }

            function P(e, n) {
                function t(e) {
                    return "parent" === V[e].resizeFrom && V[e].autoResize && !V[e].firstRun
                }
                for (var o in V) t(o) && C(e, n, document.getElementById(o), o)
            }

            function F() {
                a(t, "message", h), a(t, "resize", function () {
                    R("resize")
                }), a(document, "visibilitychange", N), a(document, "-webkit-visibilitychange", N), a(t, "focusin", function () {
                    R("focus")
                }), a(t, "focus", function () {
                    R("focus")
                })
            }

            function z() {
                function e(e, t) {
                    function o() {
                        if (!t.tagName) throw new TypeError("Object is not a valid DOM element");
                        if ("IFRAME" !== t.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + t.tagName + ">")
                    }
                    t && (o(), M(t, e), n.push(t))
                }
                var n;
                return c(), F(),
                    function (t, o) {
                        switch (n = [], typeof o) {
                            case "undefined":
                            case "string":
                                Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), e.bind(void 0, t));
                                break;
                            case "object":
                                e(t, o);
                                break;
                            default:
                                throw new TypeError("Unexpected data type (" + typeof o + ")")
                        }
                        return n
                    }
            }

            function A(e) {
                e.fn.iFrameResize = function (e) {
                    return this.filter("iframe").each(function (n, t) {
                        M(t, e)
                    }).end()
                }
            }
            var _ = 0,
                j = !1,
                L = !1,
                W = "message",
                H = W.length,
                D = "[iFrameSizer]",
                U = D.length,
                q = null,
                B = t.requestAnimationFrame,
                J = {
                    max: 1,
                    scroll: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                },
                V = {},
                K = null,
                Q = "Host Page",
                X = {
                    autoResize: !0,
                    bodyBackground: null,
                    bodyMargin: null,
                    bodyMarginV1: 8,
                    bodyPadding: null,
                    checkOrigin: !0,
                    inPageLinks: !1,
                    enablePublicMethods: !0,
                    heightCalculationMethod: "bodyOffset",
                    id: "iFrameResizer",
                    interval: 32,
                    log: !1,
                    maxHeight: 1 / 0,
                    maxWidth: 1 / 0,
                    minHeight: 0,
                    minWidth: 0,
                    resizeFrom: "parent",
                    scrolling: !1,
                    sizeHeight: !0,
                    sizeWidth: !1,
                    tolerance: 0,
                    widthCalculationMethod: "scroll",
                    closedCallback: function () {},
                    initCallback: function () {},
                    messageCallback: function () {
                        g("MessageCallback function not defined")
                    },
                    resizedCallback: function () {},
                    scrollCallback: function () {
                        return !0
                    }
                };
            t.jQuery && A(jQuery), i = [], o = z, r = "function" == typeof o ? o.apply(n, i) : o, !(void 0 !== r && (e.exports = r))
        }(window || {})
    },
    907: function (e, n, t) {
        n.iframeResizer = t(906), n.iframeResizerContentWindow = t(905)
    },
    1073: function (e, n) {
        "use strict";

        function t(e) {
            return "object" === (void 0 === e ? "undefined" : o(e)) && !!e && !Array.isArray(e)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        n.default = t
    },
    1119: function (e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments[0],
                n = Array.prototype.slice.call(arguments, 1);
            if (!e) return void console.warn("Canny: No methodName supplied to SDK");
            var t = C[e];
            return t ? void t.apply(null, n) : void console.warn("Canny: Invalid methodName supplied to SDK: " + e)
        }
        var r = Object.assign || function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }
                return e
            },
            a = t(1123),
            u = o(a),
            c = t(106),
            s = o(c);
        t(269);
        var l, f = t(1120),
            d = o(f),
            m = t(1121),
            g = o(m),
            p = t(680),
            h = o(p),
            y = t(904),
            v = t(681),
            b = o(v),
            w = t(171),
            E = o(w),
            O = "canny-scroll-element",
            S = "canny-identify-hash",
            T = "https://widget.canny.io";
        s.default.subscribe(null, T, "path", function (e) {
            if (l.get().basePath) {
                var n = l.get().basePath;
                "/" === n[n.length - 1] && (n = n.substr(0, n.length - 1));
                var t = n + e;
                history.replaceState(history.state, null, t)
            }
        }), s.default.subscribe(null, T, "refresh", function () {
            window.location.reload()
        });
        var C = {
                identify: function (e, n) {
                    if (n = n || function () {}, !e.appID) return console.warn("Canny: Failed to identify because appID is missing"), void n();
                    if (!e.user) return console.warn("Canny: Failed to identify because user is missing"), void n();
                    if (!e.user.email) return console.warn("Canny: Failed to identify because user.email is missing"), void n();
                    if (!e.user.id) return console.warn("Canny: Failed to identify because user.id is missing"), void n();
                    if (!e.user.name) return console.warn("Canny: Failed to identify because user.name is missing"), void n();
                    var t = (0, h.default)(JSON.stringify(e)),
                        o = u.default.get(S);
                    return o && o === t ? void n() : void d.default.post("/api/users/identify", {
                        companyID: e.appID,
                        hash: e.hash,
                        user: JSON.stringify(r({}, e.user.avatarURL && {
                            avatarURL: e.user.avatarURL
                        }, e.user.companies && {
                            companies: e.user.companies.filter(function (e) {
                                if (!e.id) return console.warn("Canny: Invalid company, company.id missing"), !1;
                                if (!e.name) return console.warn("Canny: Invalid company, company.name missing"), !1;
                                if (e.hasOwnProperty("monthlySpend")) {
                                    var n = Math.round(e.monthlySpend);
                                    return (isNaN(n) || n < 0) && (console.warn("Canny: Invalid monthlySpend: " + e.monthlySpend + ", omitting"), delete e.monthlySpend), !0
                                }
                                return !0
                            }).map(function (e) {
                                return r({}, e.created && {
                                    created: e.created
                                }, {
                                    id: e.id
                                }, e.hasOwnProperty("monthlySpend") && {
                                    monthlySpend: Math.round(e.monthlySpend)
                                }, {
                                    name: e.name
                                })
                            })
                        }, e.user.created && {
                            created: e.user.created
                        }, {
                            email: e.user.email,
                            id: e.user.id + "",
                            name: e.user.name
                        }))
                    }, function (e) {
                        return n(), "success" === e ? void u.default.set(S, t) : void console.warn("Canny: Something went wrong identifying user")
                    })
                },
                render: function (e, n) {
                    if (!n && (n = document.querySelectorAll("[data-canny]")[0], !n)) return void console.warn("Canny: Failed to render Canny SDK because no containerElement was passed in or found with data-canny attribute.");
                    var t = document.getElementById("canny-iframe");
                    if (t) return void console.warn("Canny: Failed to render Canny SDK because there is already an iframe with id canny-iframe.");
                    if (!e.boardToken) return void console.warn("Canny: Failed to render Canny SDK because no boardToken was set in config.");
                    var o = document.createElement("iframe");
                    o.width = "100%", o.height = "800px", o.id = "canny-iframe", o.scrolling = "no", o.style.border = "0";
                    var i = "/",
                        a = r({
                            boardToken: e.boardToken
                        }, e.display && {
                            display: e.display
                        }, e.ssoToken && {
                            ssoToken: e.ssoToken
                        });
                    if (e.basePath) {
                        var u = e.basePath.indexOf("#") !== -1,
                            c = u ? window.location.pathname + window.location.hash.split("?")[0] : window.location.pathname,
                            f = e.basePath.endsWith("/") ? e.basePath.slice(0, -1) : e.basePath,
                            d = window.location.origin;
                        if (0 !== c.indexOf(f)) console.warn("Canny: Failed to set up URL syncing because basePath (" + f + ") not found in pathname (" + c + ").");
                        else {
                            i = c.substr(f.length, c.length - f.length);
                            var m = u ? "?" + (window.location.hash.split("?")[1] || "") : window.location.search;
                            a = Object.assign(E.default.parse(m), a), e.initialPath = i, e.initialQuery = E.default.parse(m), e.origin = d
                        }
                    }
                    o.src = T + i + E.default.stringify(a), n.appendChild(o), l = new g.default(e), o._unsubscribe = s.default.subscribe(null, T, "ready", function () {
                        return o.contentWindow ? (s.default.postMessage(o.contentWindow, T, "config", l.get()), void("function" == typeof e.onLoadCallback && e.onLoadCallback())) : (o._unsubscribe(), void window.removeEventListener("scroll", h))
                    }), (0, y.iframeResizer)({
                        checkOrigin: [T],
                        heightCalculationMethod: "taggedElementHeight",
                        log: !1
                    }, o);
                    var p = document.createElement("div");
                    p.id = O, p.width = "0", p.height = "0", p.style.border = "0", p.style.margin = "0", p.style.marginTop = "-100px", p.style.padding = "0", n.appendChild(p);
                    var h = function () {
                        if (o && o.contentWindow) {
                            var e = document.getElementById(O);
                            e && (0, b.default)(e) && s.default.postMessage(o.contentWindow, T, "scrollBottomDetected", {})
                        }
                    };
                    window.addEventListener("scroll", h, !1)
                }
            },
            I = window.Canny && window.Canny.q || [];
        I.forEach(function (e) {
            i.apply(null, e)
        }), window.Canny = i
    },
    1120: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = {
            _send: function (e, n, t, o) {
                var i = new XMLHttpRequest,
                    r = "https://canny.io";
                e = r + e, i.open(t, e, !0), i.onload = function () {
                    200 === i.status || 304 === i.status ? n && n(i.responseText) : n && n("server error")
                }, i.onerror = function (e) {
                    e.preventDefault(), n && n("server error")
                }, "POST" === t && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.withCredentials = !0, i.send(o)
            },
            get: function (e, n, t) {
                var o = [];
                for (var i in n) o.push(encodeURIComponent(i) + "=" + encodeURIComponent(n[i]));
                this._send(e + "?" + o.join("&"), t, "GET")
            },
            post: function (e, n, t) {
                var o = [];
                for (var i in n) o.push(encodeURIComponent(i) + "=" + encodeURIComponent(n[i]));
                this._send(e, t, "POST", o.join("&"))
            }
        };
        n.default = o
    },
    1121: function (e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            this._config = (0, a.default)(s);
            for (var n in e) {
                var t = e[n];
                if ((0, c.default)(t))
                    for (var o in t) {
                        var i = t[o];
                        this._config[n][o] = i
                    } else this._config[n] = t
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = i;
        var r = t(1193),
            a = o(r),
            u = t(1073),
            c = o(u),
            s = {
                boardToken: null,
                ssoToken: null,
                basePath: null,
                display: null,
                initialPath: "/",
                initialQuery: {},
                origin: null
            };
        i.prototype.get = function () {
            return (0, a.default)(this._config)
        }
    },
    1123: function (e, n) {
        "use strict";

        function t() {
            try {
                var e = window.localStorage,
                    n = "__storage_test__";
                return e.setItem(n, n), e.removeItem(n), !0
            } catch (n) {
                return n instanceof DOMException && (22 === n.code || 1014 === n.code || "QuotaExceededError" === n.name || "NS_ERROR_DOM_QUOTA_REACHED" === n.name) && 0 !== e.length
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = {
            get: function (e) {
                if (!t()) return null;
                var n = window.localStorage.getItem(e);
                return n ? n : null
            },
            remove: function (e) {
                return t() ? void window.localStorage.removeItem(e) : null
            },
            set: function (e, n) {
                t() && window.localStorage.setItem(e, n)
            }
        };
        n.default = o
    },
    1193: function (e, n) {
        "use strict";

        function t(e) {
            try {
                var n = JSON.parse(JSON.stringify(e));
                return n
            } catch (e) {
                return null
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = t
    }
});