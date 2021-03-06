/*! jQuery v4.0.0-pre | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(Q, e) {
    "use strict";
    var g = [],
        r = Object.getPrototypeOf,
        s = g.slice,
        h = g.flat ? function(e) { return g.flat.call(e) } : function(e) { return g.concat.apply([], e) },
        J = g.push,
        K = g.indexOf,
        n = {},
        i = n.toString,
        v = n.hasOwnProperty,
        o = v.toString,
        a = o.call(Object),
        u = {};

    function y(e) { return null == e ? e + "" : "object" == typeof e ? n[i.call(e)] || "object" : typeof e }

    function m(e) { return null != e && e === e.window }

    function x(e) {
        var t = !!e && e.length,
            n = y(e);
        return "function" != typeof e && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    var C = Q.document,
        l = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var r, i = (n = n || C).createElement("script");
        if (i.text = e, t)
            for (r in l) t[r] && (i[r] = t[r]);
        n.head.appendChild(i).parentNode.removeChild(i)
    }
    var t = "4.0.0-pre 4250b628783d7bfa92ec6c5550c6e4b22fab6034",
        c = /HTML$/i,
        Z = function(e, t) { return new Z.fn.init(e, t) };

    function ee(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    Z.fn = Z.prototype = {
        jquery: t,
        constructor: Z,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = Z.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return Z.each(this, e) },
        map: function(n) { return this.pushStack(Z.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        even: function() { return this.pushStack(Z.grep(this, function(e, t) { return (t + 1) % 2 })) },
        odd: function() { return this.pushStack(Z.grep(this, function(e, t) { return t % 2 })) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() }
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" != typeof a && "function" != typeof a && (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (Z.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || Z.isPlainObject(n) ? n : {}, i = !1, a[t] = Z.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Z.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && o.call(n) === a) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) },
        each: function(e, t) {
            var n, r = 0;
            if (x(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        text: function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) { if (1 === i || 9 === i || 11 === i) return e.textContent; if (3 === i || 4 === i) return e.nodeValue } else
                while (t = e[r++]) n += Z.text(t);
            return n
        },
        makeArray: function(e, t) { var n = t || []; return null != e && (x(Object(e)) ? Z.merge(n, "string" == typeof e ? [e] : e) : J.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : K.call(t, e, n) },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !c.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (x(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return h(a)
        },
        guid: 1,
        support: u
    }), "function" == typeof Symbol && (Z.fn[Symbol.iterator] = g[Symbol.iterator]), Z.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var w = C.documentElement,
        te = g.pop,
        ne = "[\\x20\\t\\r\\n\\f]",
        re = C.documentMode,
        ie = re && new RegExp(":enabled|:disabled|\\[" + ne + "*name" + ne + "*=" + ne + "*(?:''|\"\")"),
        oe = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g");
    Z.contains = function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function p(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }
    Z.escapeSelector = function(e) { return (e + "").replace(f, p) };
    var d, T = g.sort;

    function j(e, t) { if (e === t) return d = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ? e == C || e.ownerDocument == C && Z.contains(C, e) ? -1 : t == C || t.ownerDocument == C && Z.contains(C, t) ? 1 : 0 : 4 & n ? -1 : 1) }
    Z.uniqueSort = function(e) {
        var t, n = [],
            r = 0,
            i = 0;
        if (d = !1, T.call(e, j), d) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
        return e
    };
    var ae = C,
        se = w.matches || w.msMatchesSelector;

    function k(e, t, n) {
        var r = [],
            i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && Z(e).is(n)) break;
                r.push(e)
            }
        return r
    }

    function E(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n }! function() {
        var e, x, b, w, r, T, C = Z.expando,
            j = 0,
            n = 0,
            i = L(),
            c = L(),
            s = L(),
            d = L(),
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ne + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            o = "\\[" + ne + "*(" + t + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ne + "*\\]",
            a = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + o + ")*)|.*)\\)|)",
            u = new RegExp(ne + "+", "g"),
            f = new RegExp("^" + ne + "*," + ne + "*"),
            h = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            g = new RegExp(ne + "|>"),
            l = new RegExp(a),
            p = new RegExp("^" + t + "$"),
            v = { ID: new RegExp("^#(" + t + ")"), CLASS: new RegExp("^\\.(" + t + ")"), TAG: new RegExp("^(" + t + "|[*])"), ATTR: new RegExp("^" + o), PSEUDO: new RegExp("^" + a), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
            y = /^(?:input|select|textarea|button)$/i,
            m = /^h\d$/i,
            k = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            E = /[+~]/,
            S = new RegExp("\\\\[\\da-fA-F]{1,6}" + ne + "?|\\\\([^\\r\\n\\f])", "g"),
            D = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            A = function() { $() },
            q = U(function(e) { return !0 === e.disabled && ee(e, "fieldset") }, { dir: "parentNode", next: "legend" });

        function N(e) { throw new Error("Syntax error, unrecognized expression: " + e) }

        function O(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ($(e), e = e || w, T)) {
                if (11 !== p && (u = k.exec(t)))
                    if (i = u[1]) { if (9 === p) return (a = e.getElementById(i)) && J.call(n, a), n; if (f && (a = f.getElementById(i)) && Z.contains(e, a)) return J.call(n, a), n } else { if (u[2]) return J.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(i)), n }
                if (!(d[t + " "] || ie && ie.test(t))) {
                    if (c = t, f = e, 1 === p && (g.test(t) || h.test(t))) {
                        ((f = E.test(t) && I(e.parentNode) || e) !== e || re) && ((s = e.getAttribute("id")) ? s = Z.escapeSelector(s) : e.setAttribute("id", s = C)), o = (l = B(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + _(l[o]);
                        c = l.join(",")
                    }
                    try { return J.apply(n, f.querySelectorAll(c)), n } catch (e) { d(t, !0) } finally { s === C && e.removeAttribute("id") }
                }
            }
            return function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                    c = !r && B(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && T && x.relative[o[1].type]) {
                        if (!(t = (x.find.ID(a.matches[0].replace(S, D), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    i = v.needsContext.test(e) ? 0 : o.length;
                    while (i--) { if (a = o[i], x.relative[s = a.type]) break; if ((u = x.find[s]) && (r = u(a.matches[0].replace(S, D), E.test(o[0].type) && I(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && _(o))) return J.apply(n, r), n; break } }
                }
                return (l || G(e, c))(r, t, !T, n, !t || E.test(e) && I(t.parentNode) || t), n
            }(t.replace(oe, "$1"), e, n, r)
        }

        function L() { var r = []; return function e(t, n) { return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function H(e) { return e[C] = !0, e }

        function P(t) { return function(e) { return ee(e, "input") && e.type === t } }

        function R(t) { return function(e) { return (ee(e, "input") || ee(e, "button")) && e.type === t } }

        function M(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && q(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function W(a) {
            return H(function(o) {
                return o = +o, H(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function I(e) { return e && void 0 !== e.getElementsByTagName && e }

        function $(e) {
            var t, n = e ? e.ownerDocument || e : ae;
            n != w && 9 === n.nodeType && (r = (w = n).documentElement, T = !Z.isXMLDoc(w), re && ae != w && (t = w.defaultView) && t.top !== t && t.addEventListener("unload", A))
        }
        for (e in O.matches = function(e, t) { return O(e, null, null, t) }, O.matchesSelector = function(e, t) {
                if ($(e), T && !d[t + " "] && (!ie || !ie.test(t))) try { return se.call(e, t) } catch (e) { d(t, !0) }
                return 0 < O(t, w, null, [e]).length
            }, (x = Z.expr = {
                cacheLength: 50,
                createPseudo: H,
                match: v,
                find: { ID: function(e, t) { if (void 0 !== t.getElementById && T) { var n = t.getElementById(e); return n ? [n] : [] } }, TAG: function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e) }, CLASS: function(e, t) { if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e) } },
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(S, D), e[3] = (e[3] || e[4] || e[5] || "").replace(S, D), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || N(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && N(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return v.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && l.test(n) && (t = B(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    ID: function(e) { var t = e.replace(S, D); return function(e) { return e.getAttribute("id") === t } },
                    TAG: function(e) { var t = e.replace(S, D).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return ee(e, t) } },
                    CLASS: function(e) { var t = i[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && i(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = Z.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(u, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(d, e, t, h, g) {
                        var v = "nth" !== d.slice(0, 3),
                            y = "last" !== d.slice(-4),
                            m = "of-type" === e;
                        return 1 === h && 0 === g ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                c = m && e.nodeName.toLowerCase(),
                                f = !n && !m,
                                p = !1;
                            if (l) {
                                if (v) {
                                    while (u) {
                                        o = e;
                                        while (o = o[u])
                                            if (m ? ee(o, c) : 1 === o.nodeType) return !1;
                                        s = u = "only" === d && !s && "nextSibling"
                                    }
                                    return !0
                                }
                                if (s = [y ? l.firstChild : l.lastChild], y && f) {
                                    p = (a = (r = (i = l[C] || (l[C] = {}))[d] || [])[0] === j && r[1]) && r[2], o = a && l.childNodes[a];
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if (1 === o.nodeType && ++p && o === e) { i[d] = [j, a, p]; break }
                                } else if (f && (p = a = (r = (i = e[C] || (e[C] = {}))[d] || [])[0] === j && r[1]), !1 === p)
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if ((m ? ee(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[C] || (o[C] = {}))[d] = [j, p]), o === e)) break;
                                return (p -= g) === h || p % h == 0 && 0 <= p / h
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || N("unsupported pseudo: " + e);
                        return a[C] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? H(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = K.call(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) { return a(e, 0, t) }) : a
                    }
                },
                pseudos: {
                    not: H(function(e) {
                        var r = [],
                            i = [],
                            s = G(e.replace(oe, "$1"));
                        return s[C] ? H(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: H(function(t) { return function(e) { return 0 < O(t, e).length } }),
                    contains: H(function(t) {
                        return t = t.replace(S, D),
                            function(e) { return -1 < (e.textContent || Z.text(e)).indexOf(t) }
                    }),
                    lang: H(function(n) {
                        return p.test(n || "") || N("unsupported lang: " + n), n = n.replace(S, D).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = Q.location && Q.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === r },
                    focus: function(e) { return e === w.activeElement && w.hasFocus() && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: M(!1),
                    disabled: M(!0),
                    checked: function(e) { return ee(e, "input") && !!e.checked || ee(e, "option") && !!e.selected },
                    selected: function(e) { return re && e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !x.pseudos.empty(e) },
                    header: function(e) { return m.test(e.nodeName) },
                    input: function(e) { return y.test(e.nodeName) },
                    button: function(e) { return ee(e, "input") && "button" === e.type || ee(e, "button") },
                    text: function(e) { return ee(e, "input") && "text" === e.type },
                    first: W(function() { return [0] }),
                    last: W(function(e, t) { return [t - 1] }),
                    eq: W(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: W(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: W(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: W(function(e, t, n) { var r; for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: W(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = x.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[e] = P(e);
        for (e in { submit: !0, reset: !0 }) x.pseudos[e] = R(e);

        function F() {}

        function B(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = x.preFilter;
            while (a) { for (o in n && !(r = f.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = h.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(oe, " ") }), a = a.slice(n.length)), x.filter) !(r = v[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
            return t ? a.length : a ? N(e) : c(e, s).slice(0)
        }

        function _(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function U(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++;
            return e.first ? function(e, t, n) {
                while (e = e[s])
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o = [j, f];
                if (n) {
                    while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[C] || (e[C] = {}), u && ee(e, u)) e = e[s] || e;
                            else { if ((r = i[l]) && r[0] === j && r[1] === f) return o[2] = r[2]; if ((i[l] = o)[2] = a(e, t, n)) return !0 } return !1
            }
        }

        function X(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function z(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function V(d, h, g, v, y, e) {
            return v && !v[C] && (v = V(v)), y && !y[C] && (y = V(y, e)), H(function(e, t, n, r) {
                var i, o, a, s, u = [],
                    l = [],
                    c = t.length,
                    f = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) O(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    p = !d || !e && h ? f : z(f, u, d, n, r);
                if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) { i = z(s, l), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a)) }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = s.length;
                            while (o--)(a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r)
                        }
                        o = s.length;
                        while (o--)(a = s[o]) && -1 < (i = y ? K.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else s = z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : J.apply(t, s)
            })
        }

        function Y(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = U(function(e) { return e === i }, a, !0), l = U(function(e) { return -1 < K.call(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== b) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = x.relative[e[s].type]) c = [U(X(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[C]) {
                        for (n = ++s; n < r; n++)
                            if (x.relative[e[n].type]) break;
                        return V(1 < s && X(c), 1 < s && _(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(oe, "$1"), t, s < n && Y(e.slice(s, n)), n < r && Y(e = e.slice(n)), n < r && _(e))
                    }
                    c.push(t)
                }
            return X(c)
        }

        function G(e, t) {
            var n, g, v, y, m, r, i = [],
                o = [],
                a = s[e + " "];
            if (!a) {
                t || (t = B(e)), n = t.length;
                while (n--)(a = Y(t[n]))[C] ? i.push(a) : o.push(a);
                (a = s(e, (g = o, y = 0 < (v = i).length, m = 0 < g.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = b,
                        d = e || m && x.find.TAG("*", i),
                        h = j += null == p ? 1 : Math.random() || .1;
                    for (i && (b = t == w || t || i); null != (o = d[l]); l++) {
                        if (m && o) {
                            a = 0, t || o.ownerDocument == w || ($(o), n = !T);
                            while (s = g[a++])
                                if (s(o, t || w, n)) { J.call(r, o); break }
                            i && (j = h)
                        }
                        y && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, y && l !== u) {
                        a = 0;
                        while (s = v[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = te.call(r));
                            f = z(f)
                        }
                        J.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && Z.uniqueSort(r)
                    }
                    return i && (j = h, b = p), c
                }, y ? H(r) : r))).selector = e
            }
            return a
        }
        F.prototype = x.filters = x.pseudos, x.setFilters = new F, $(), Z.find = O
    }();
    var S = Z.expr.match.needsContext,
        D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e) { return "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length }

    function q(e, n, r) { return "function" == typeof n ? Z.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? Z.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? Z.grep(e, function(e) { return -1 < K.call(n, e) !== r }) : Z.filter(n, e, r) }
    Z.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) { return 1 === e.nodeType })) }, Z.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) Z.find(e, i[t], n);
            return 1 < r ? Z.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(q(this, e || [], !1)) },
        not: function(e) { return this.pushStack(q(this, e || [], !0)) },
        is: function(e) { return !!q(this, "string" == typeof e && S.test(e) ? Z(e) : e || [], !1).length }
    });
    var N, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Z.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || N, e.nodeType) return this[0] = e, this.length = 1, this;
        if ("function" == typeof e) return void 0 !== n.ready ? n.ready(e) : e(Z);
        if (A(r = e + "")) r = [null, e, null];
        else {
            if ("string" != typeof e) return Z.makeArray(e, this);
            r = O.exec(e)
        }
        if (!r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), D.test(r[1]) && Z.isPlainObject(t))
                for (r in t) "function" == typeof this[r] ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }).prototype = Z.fn, N = Z(C);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && Z(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && Z.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? Z.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? K.call(Z(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(Z.uniqueSort(Z.merge(this.get(), Z(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), Z.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return k(e, "parentNode") }, parentsUntil: function(e, t, n) { return k(e, "parentNode", n) }, next: function(e) { return P(e, "nextSibling") }, prev: function(e) { return P(e, "previousSibling") }, nextAll: function(e) { return k(e, "nextSibling") }, prevAll: function(e) { return k(e, "previousSibling") }, nextUntil: function(e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return k(e, "previousSibling", n) }, siblings: function(e) { return E((e.parentNode || {}).firstChild, e) }, children: function(e) { return E(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (ee(e, "template") && (e = e.content || e), Z.merge([], e.childNodes)) } }, function(r, i) { Z.fn[r] = function(e, t) { var n = Z.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = Z.filter(t, n)), 1 < this.length && (H[r] || Z.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) { return e }

    function W(e) { throw e }

    function I(e, t, n, r) { var i; try { e && "function" == typeof(i = e.promise) ? i.call(e).done(t).fail(n) : e && "function" == typeof(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n(e) } }
    Z.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, Z.each(e.match(R) || [], function(e, t) { n[t] = !0 }), n) : Z.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { Z.each(e, function(e, t) { "function" == typeof t ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== y(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return Z.each(arguments, function(e, t) { var n; while (-1 < (n = Z.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < Z.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", Z.Callbacks("memory"), Z.Callbacks("memory"), 2],
                    ["resolve", "done", Z.Callbacks("once memory"), Z.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), Z.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    catch: function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return Z.Deferred(function(r) {
                            Z.each(o, function(e, t) {
                                var n = "function" == typeof i[t[4]] && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && "function" == typeof e.promise ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); "function" == typeof(t = e && ("object" == typeof e || "function" == typeof e) && e.then) ? s ? t.call(e, l(u, o, M, s), l(u, o, W, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, W, s), l(u, o, M, o.notifyWith))): (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } },
                                    t = s ? e : function() { try { e() } catch (e) { Z.Deferred.exceptionHook && Z.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== W && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (Z.Deferred.getStackHook && (t.stackTrace = Z.Deferred.getStackHook()), Q.setTimeout(t))
                            }
                        }
                        return Z.Deferred(function(e) { o[0][3].add(l(0, e, "function" == typeof r ? r : M, e.notifyWith)), o[1][3].add(l(0, e, "function" == typeof t ? t : M)), o[2][3].add(l(0, e, "function" == typeof n ? n : W)) }).promise()
                    },
                    promise: function(e) { return null != e ? Z.extend(e, a) : a }
                },
                s = {};
            return Z.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = Z.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || "function" == typeof(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Z.Deferred.exceptionHook = function(e, t) { e && $.test(e.name) && Q.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, Z.readyException = function(e) { Q.setTimeout(function() { throw e }) };
    var F = Z.Deferred();

    function B() { C.removeEventListener("DOMContentLoaded", B), Q.removeEventListener("load", B), Z.ready() }
    Z.fn.ready = function(e) { return F.then(e).catch(function(e) { Z.readyException(e) }), this }, Z.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0) !== e && 0 < --Z.readyWait || F.resolveWith(C, [Z])
        }
    }), Z.ready.then = F.then, "loading" !== C.readyState ? Q.setTimeout(Z.ready) : (C.addEventListener("DOMContentLoaded", B), Q.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === y(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, "function" != typeof r && (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(Z(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        U = /-([a-z])/g;

    function X(e, t) { return t.toUpperCase() }

    function z(e) { return e.replace(U, X) }

    function V(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }

    function Y() { this.expando = Z.expando + Y.uid++ }
    Y.uid = 1, Y.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = Object.create(null), V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[z(t)] = n;
            else
                for (r in t) i[z(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in r ? [t] : t.match(R) || []).length; while (n--) delete r[t[n]] }(void 0 === t || Z.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !Z.isEmptyObject(t) }
    };
    var G = new Y,
        ue = new Y,
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ce = /[A-Z]/g;

    function fe(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ce, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : le.test(i) ? JSON.parse(i) : i) } catch (e) {}
                ue.set(e, t, n)
            } else n = void 0;
        return n
    }
    Z.extend({ hasData: function(e) { return ue.hasData(e) || G.hasData(e) }, data: function(e, t, n) { return ue.access(e, t, n) }, removeData: function(e, t) { ue.remove(e, t) }, _data: function(e, t, n) { return G.access(e, t, n) }, _removeData: function(e, t) { G.remove(e, t) } }), Z.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = ue.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = z(r.slice(5)), fe(o, r, i[r]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { ue.set(this, n) }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = ue.get(o, n)) ? t : void 0 !== (t = fe(o, n)) ? t : void 0;
                this.each(function() { ue.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { ue.remove(this, e) }) }
    }), Z.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, Z.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { Z.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return G.get(e, n) || G.access(e, n, { empty: Z.Callbacks("once memory").add(function() { G.remove(e, [t + "queue", n]) }) }) }
    }), Z.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? Z.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = Z.queue(this, t, n);
                Z._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && Z.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { Z.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = G.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
        he = ["Top", "Right", "Bottom", "Left"];

    function ge(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && "none" === Z.css(e, "display") }
    var ve = /^[a-z]/,
        ye = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;

    function me(e) { return ve.test(e) && ye.test(e[0].toUpperCase() + e.slice(1)) }

    function xe(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return Z.css(e, t, "") },
            u = s(),
            l = n && n[3] || (me(t) ? "px" : ""),
            c = e.nodeType && (!me(t) || "px" !== l && +u) && de.exec(Z.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) Z.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, Z.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var be = /^-ms-/;

    function we(e) { return z(e.replace(be, "ms-")) }
    var Te = {};

    function Ce(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = G.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ge(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = Te[s]) || (o = a.body.appendChild(a.createElement(s)), u = Z.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), Te[s] = u)))) : "none" !== n && (l[c] = "none", G.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    Z.fn.extend({ show: function() { return Ce(this, !0) }, hide: function() { return Ce(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ge(this) ? Z(this).show() : Z(this).hide() }) } });
    var je = function(e) { return Z.contains(e.ownerDocument, e) || e.getRootNode(ke) === e.ownerDocument },
        ke = { composed: !0 };
    w.getRootNode || (je = function(e) { return Z.contains(e.ownerDocument, e) });
    var Ee = je,
        Se = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        De = /^$|^module$|\/(?:java|ecma)script/i,
        Ae = { thead: ["table"], col: ["colgroup", "table"], tr: ["tbody", "table"], td: ["tr", "tbody", "table"] };

    function qe(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && ee(e, t) ? Z.merge([e], n) : n }

    function Ne(e, t) { for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval")) }
    Ae.tbody = Ae.tfoot = Ae.colgroup = Ae.caption = Ae.thead, Ae.th = Ae.td;
    var Oe = /<|&#?\w+;/;

    function Le(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === y(o) && (o.nodeType || x(o))) Z.merge(p, o.nodeType ? [o] : o);
                else if (Oe.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (Se.exec(o) || ["", ""])[1].toLowerCase(), c = (u = Ae[s] || g).length;
            while (-1 < --c) a = a.appendChild(t.createElement(u[c]));
            a.innerHTML = Z.htmlPrefilter(o), Z.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < Z.inArray(o, r)) i && i.push(o);
            else if (l = Ee(o), a = qe(f.appendChild(o), "script"), l && Ne(a), n) { c = 0; while (o = a[c++]) De.test(o.type || "") && n.push(o) }
        return f
    }
    var He = /^(?:checkbox|radio)$/i,
        Pe = /^([^.]*)(?:\.(.+)|)/;

    function Re() { return !0 }

    function Me() { return !1 }

    function We(e, t) { return e === C.activeElement == ("focus" === t) }

    function Ie(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ie(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Me;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return Z().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = Z.guid++)), e.each(function() { Z.event.add(this, t, i, r, n) })
    }

    function $e(e, i, o) {
        o ? (G.set(e, i, !1), Z.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = G.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(Z.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), G.set(this, i, r), t = o(this, i), this[i](), r !== (n = G.get(this, i)) || t ? G.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (G.set(this, i, { value: Z.event.trigger(Z.extend(r[0], Z.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, i) && Z.event.add(e, i, Re)
    }
    Z.event = {
        add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = G.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && Z.find.matchesSelector(w, i), n.guid || (n.guid = Z.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return void 0 !== Z && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(R) || [""]).length; while (l--) d = g = (s = Pe.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && Z.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c)) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = G.hasData(e) && G.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Pe.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = Z.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || Z.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = Z.event.fix(e),
                l = (G.get(this, "events") || Object.create(null))[u.type] || [],
                c = Z.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = Z.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < Z(i, this).index(l) : Z.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(Z.Event.prototype, t, { enumerable: !0, configurable: !0, get: "function" == typeof e ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[Z.expando] ? e : new Z.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return He.test(t.type) && t.click && ee(t, "input") && $e(t, "click", Re), !1 }, trigger: function(e) { var t = this || e; return He.test(t.type) && t.click && ee(t, "input") && $e(t, "click"), !0 }, _default: function(e) { var t = e.target; return He.test(t.type) && t.click && ee(t, "input") && G.get(t, "click") || ee(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, Z.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, Z.Event = function(e, t) {
        if (!(this instanceof Z.Event)) return new Z.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Re : Me, this.target = e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Z.expando] = !0
    }, Z.Event.prototype = {
        constructor: Z.Event,
        isDefaultPrevented: Me,
        isPropagationStopped: Me,
        isImmediatePropagationStopped: Me,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Re, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Re, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Re, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, Z.event.addProp), Z.each({ focus: "focusin", blur: "focusout" }, function(t, e) { Z.event.special[t] = { setup: function() { return $e(this, t, We), !1 }, trigger: function() { return $e(this, t), !0 }, _default: function(e) { return G.get(e.target, t) }, delegateType: e } }), Z.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        Z.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || Z.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), Z.fn.extend({ on: function(e, t, n, r) { return Ie(this, e, t, n, r) }, one: function(e, t, n, r) { return Ie(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Me), this.each(function() { Z.event.remove(this, e, n, t) }) } });
    var Fe = /<script|<style|<link/i;

    function Be(e, t) { return ee(e, "table") && ee(11 !== t.nodeType ? t : t.firstChild, "tr") && Z(e).children("tbody")[0] || e }

    function _e(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Ue(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Xe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (s = G.get(e).events))
                for (i in G.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) Z.event.add(t, i, s[i][n]);
            ue.hasData(e) && (o = ue.access(e), a = Z.extend({}, o), ue.set(t, a))
        }
    }

    function ze(n, r, i, o) {
        r = h(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0];
        if ("function" == typeof d) return n.each(function(e) {
            var t = n.eq(e);
            r[0] = d.call(this, e, t.html()), ze(t, r, i, o)
        });
        if (f && (t = (e = Le(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = Z.map(qe(e, "script"), _e)).length; c < f; c++) u = e, c !== p && (u = Z.clone(u, !0, !0), s && Z.merge(a, qe(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, Z.map(a, Ue), c = 0; c < s; c++) u = a[c], De.test(u.type || "") && !G.access(u, "globalEval") && Z.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? Z._evalUrl && !u.noModule && Z._evalUrl(u.src, { nonce: u.nonce, crossOrigin: u.crossOrigin }, l) : b(u.textContent, u, l))
        }
        return n
    }

    function Ve(e, t, n) { for (var r, i = t ? Z.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Z.cleanData(qe(r)), r.parentNode && (n && Ee(r) && Ne(qe(r, "script")), r.parentNode.removeChild(r)); return e }
    Z.extend({
        htmlPrefilter: function(e) { return e },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = Ee(e);
            if (re && (1 === e.nodeType || 11 === e.nodeType) && !Z.isXMLDoc(e))
                for (a = qe(s), r = 0, i = (o = qe(e)).length; r < i; r++) ee(a[r], "textarea") && (a[r].defaultValue = o[r].defaultValue);
            if (t)
                if (n)
                    for (o = o || qe(e), a = a || qe(s), r = 0, i = o.length; r < i; r++) Xe(o[r], a[r]);
                else Xe(e, s);
            return 0 < (a = qe(s, "script")).length && Ne(a, !u && qe(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = Z.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0
                    }
                    n[ue.expando] && (n[ue.expando] = void 0)
                }
        }
    }), Z.fn.extend({
        detach: function(e) { return Ve(this, e, !0) },
        remove: function(e) { return Ve(this, e) },
        text: function(e) { return _(this, function(e) { return void 0 === e ? Z.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return ze(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Be(this, e).appendChild(e) }) },
        prepend: function() {
            return ze(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Be(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return ze(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return ze(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(qe(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return Z.clone(this, e, t) }) },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Fe.test(e) && !Ae[(Se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Z.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (Z.cleanData(qe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ze(this, arguments, function(e) {
                var t = this.parentNode;
                Z.inArray(this, n) < 0 && (Z.cleanData(qe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), Z.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { Z.fn[e] = function(e) { for (var t, n = [], r = Z(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), Z(r[o])[a](t), J.apply(n, t.get()); return this.pushStack(n) } });
    var Ye = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
        Ge = /^--/;

    function Qe(e) { var t = e.ownerDocument.defaultView; return t || (t = Q), t.getComputedStyle(e) }

    function Je(e, t, n) { var r, i = Ge.test(t); return (n = n || Qe(e)) && (r = n.getPropertyValue(t) || n[t], i && (r = r.replace(oe, "$1")), "" !== r || Ee(e) || (r = Z.style(e, t))), void 0 !== r ? r + "" : r }
    var Ke, Ze, et = ["Webkit", "Moz", "ms"],
        tt = C.createElement("div").style,
        nt = {};

    function rt(e) {
        var t = nt[e];
        return t || (e in tt ? e : nt[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = et.length;
            while (n--)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }(Ze = C.createElement("div")).style && (u.reliableTrDimensions = function() { var e, t, n; return null == Ke && (e = C.createElement("table"), t = C.createElement("tr"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", Ze.style.height = "9px", Ze.style.display = "block", w.appendChild(e).appendChild(t).appendChild(Ze), n = Q.getComputedStyle(t), Ke = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, w.removeChild(e)), Ke });
    var it = /^(none|table(?!-c[ea]).+)/,
        ot = { position: "absolute", visibility: "hidden", display: "block" },
        at = { letterSpacing: "0", fontWeight: "400" };

    function st(e, t, n) { var r = de.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function ut(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += Z.css(e, n + he[a], !0, i)), r ? ("content" === n && (u -= Z.css(e, "padding" + he[a], !0, i)), "margin" !== n && (u -= Z.css(e, "border" + he[a] + "Width", !0, i))) : (u += Z.css(e, "padding" + he[a], !0, i), "padding" !== n ? u += Z.css(e, "border" + he[a] + "Width", !0, i) : s += Z.css(e, "border" + he[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function lt(e, t, n) {
        var r = Qe(e),
            i = (re || n) && "border-box" === Z.css(e, "boxSizing", !1, r),
            o = i,
            a = Je(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ye.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return ("auto" === a || re && i || !u.reliableTrDimensions() && ee(e, "tr")) && e.getClientRects().length && (i = "border-box" === Z.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ut(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function ct(e, t, n, r, i) { return new ct.prototype.init(e, t, n, r, i) }
    Z.extend({
        cssHooks: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = we(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = rt(s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = de.exec(n)) && i[1] && (n = xe(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (me(s) ? "px" : "")), re && "" === n && 0 === t.indexOf("background") && (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = we(t); return Ge.test(t) || (t = rt(s)), (a = Z.cssHooks[t] || Z.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Je(e, t, r)), "normal" === i && t in at && (i = at[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), Z.each(["height", "width"], function(e, s) {
        Z.cssHooks[s] = {
            get: function(e, t, n) { if (t) return !it.test(Z.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? lt(e, s, n) : function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }(e, ot, function() { return lt(e, s, n) }) },
            set: function(e, t, n) {
                var r, i = Qe(e),
                    o = n && "border-box" === Z.css(e, "boxSizing", !1, i),
                    a = n ? ut(e, s, n, o, i) : 0;
                return a && (r = de.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = Z.css(e, s)), st(0, t, a)
            }
        }
    }), Z.each({ margin: "", padding: "", border: "Width" }, function(i, o) { Z.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + he[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (Z.cssHooks[i + o].set = st) }), Z.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Qe(e), i = t.length; a < i; a++) o[t[a]] = Z.css(e, t[a], !1, r); return o }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((Z.Tween = ct).prototype = { constructor: ct, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || Z.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (me(n) ? "px" : "") }, cur: function() { var e = ct.propHooks[this.prop]; return e && e.get ? e.get(this) : ct.propHooks._default.get(this) }, run: function(e) { var t, n = ct.propHooks[this.prop]; return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ct.propHooks._default.set(this), this } }).init.prototype = ct.prototype, ct.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Z.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Z.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : Z.style(e.elem, e.prop, e.now + e.unit) } } }, Z.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, Z.fx = ct.prototype.init, Z.fx.step = {};
    var ft, pt, dt = /^(?:toggle|show|hide)$/,
        ht = /queueHooks$/;

    function gt() { pt && (!1 === C.hidden && Q.requestAnimationFrame ? Q.requestAnimationFrame(gt) : Q.setTimeout(gt, Z.fx.interval), Z.fx.tick()) }

    function vt() { return Q.setTimeout(function() { ft = void 0 }), ft = Date.now() }

    function yt(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = he[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function mt(e, t, n) {
        for (var r, i = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function xt(o, e, t) {
        var n, a, r = 0,
            i = xt.prefilters.length,
            s = Z.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = ft || vt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({
                elem: o,
                props: Z.extend({}, e),
                opts: Z.extend(!0, { specialEasing: {}, easing: Z.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ft || vt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = Z.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = we(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Z.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = xt.prefilters[r].call(l, o, c, l.opts)) return "function" == typeof n.stop && (Z._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return Z.map(c, mt, l), "function" == typeof l.opts.start && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Z.fx.timer(Z.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    Z.Animation = Z.extend(xt, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return xe(n.elem, e, de.exec(t), n), n }] },
        tweener: function(e, t) { "function" == typeof e ? (t = e, e = ["*"]) : e = e.match(R); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], xt.tweeners[n] = xt.tweeners[n] || [], xt.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ge(e),
                v = G.get(e, "fxshow");
            for (r in n.queue || (null == (a = Z._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, Z.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], dt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || Z.style(e, r)
                }
            if ((u = !Z.isEmptyObject(t)) || !Z.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = G.get(e, "display")), "none" === (c = Z.css(e, "display")) && (l ? c = l : (Ce([e], !0), l = e.style.display || l, c = Z.css(e, "display"), Ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Z.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = G.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && Ce([e], !0), p.done(function() { for (r in g || Ce([e]), G.remove(e, "fxshow"), d) Z.style(e, r, d[r]) })), u = mt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) { t ? xt.prefilters.unshift(e) : xt.prefilters.push(e) }
    }), Z.speed = function(e, t, n) { var r = e && "object" == typeof e ? Z.extend({}, e) : { complete: n || !n && t || "function" == typeof e && e, duration: e, easing: n && t || t && "function" != typeof t && t }; return Z.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Z.fx.speeds ? r.duration = Z.fx.speeds[r.duration] : r.duration = Z.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { "function" == typeof r.old && r.old.call(this), r.queue && Z.dequeue(this, r.queue) }, r }, Z.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(ge).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = Z.isEmptyObject(t),
                o = Z.speed(e, n, r),
                a = function() {
                    var e = xt(this, Z.extend({}, t), o);
                    (i || G.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = Z.timers,
                    r = G.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ht.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || Z.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = G.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = Z.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, Z.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function(e, r) {
        var i = Z.fn[r];
        Z.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(yt(r, !0), e, t, n) }
    }), Z.each({ slideDown: yt("show"), slideUp: yt("hide"), slideToggle: yt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { Z.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), Z.timers = [], Z.fx.tick = function() {
        var e, t = 0,
            n = Z.timers;
        for (ft = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), ft = void 0
    }, Z.fx.timer = function(e) { Z.timers.push(e), Z.fx.start() }, Z.fx.interval = 13, Z.fx.start = function() { pt || (pt = !0, gt()) }, Z.fx.stop = function() { pt = null }, Z.fx.speeds = { slow: 600, fast: 200, _default: 400 }, Z.fn.delay = function(r, e) {
        return r = Z.fx && Z.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = Q.setTimeout(e, r);
            t.stop = function() { Q.clearTimeout(n) }
        })
    }, Z.fn.extend({ attr: function(e, t) { return _(this, Z.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { Z.removeAttr(this, e) }) } }), Z.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (i = Z.attrHooks[t.toLowerCase()]), void 0 !== n ? null === n ? void Z.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = e.getAttribute(t)) ? void 0 : r) },
        attrHooks: {},
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), re && (Z.attrHooks.type = { set: function(e, t) { if ("radio" === t && ee(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } }), Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, i) {
        Z.attrHooks[i] = {
            get: function(e) {
                var t, n = Z.isXMLDoc(e),
                    r = i.toLowerCase();
                return n || (t = null != e.getAttribute(i) ? r : null), t
            },
            set: function(e, t, n) { return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n), n }
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;

    function Tt(e) { return (e.match(R) || []).join(" ") }

    function Ct(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function jt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [] }
    Z.fn.extend({ prop: function(e, t) { return _(this, Z.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[Z.propFix[e] || e] }) } }), Z.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Z.isXMLDoc(e) || (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = e.getAttribute("tabindex"); return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), re && (Z.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { Z.propFix[this.toLowerCase()] = this }), Z.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if ("function" == typeof t) return this.each(function(e) { Z(this).addClass(t.call(this, e, Ct(this))) });
            if ((e = jt(t)).length)
                while (n = this[u++])
                    if (i = Ct(n), r = 1 === n.nodeType && " " + Tt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = Tt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if ("function" == typeof t) return this.each(function(e) { Z(this).removeClass(t.call(this, e, Ct(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = jt(t)).length)
                while (n = this[u++])
                    if (i = Ct(n), r = 1 === n.nodeType && " " + Tt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = Tt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            return "function" == typeof i ? this.each(function(e) { Z(this).toggleClass(i.call(this, e, Ct(this), t), t) }) : "boolean" == typeof t ? t ? this.addClass(i) : this.removeClass(i) : this.each(function() {
                var e, t, n, r;
                t = 0, n = Z(this), r = jt(i);
                while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    }), Z.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = "function" == typeof n, this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, Z(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = Z.map(t, function(e) { return null == e ? "" : e + "" })), (r = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = Z.valHooks[t.type] || Z.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : null == (e = t.value) ? "" : e : void 0
        }
    }), Z.extend({
        valHooks: {
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if ((n = i[r]).selected && !n.disabled && (!n.parentNode.disabled || !ee(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = Z.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < Z.inArray(Z(r).val(), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), re && (Z.valHooks.option = { get: function(e) { var t = e.getAttribute("value"); return null != t ? t : Tt(Z.text(e)) } }), Z.each(["radio", "checkbox"], function() { Z.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < Z.inArray(Z(e).val(), t) } } });
    var kt = /^(?:focusinfocus|focusoutblur)$/,
        Et = function(e) { e.stopPropagation() };
    Z.extend(Z.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || C],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !kt.test(d + Z.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[Z.expando] ? e : new Z.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : Z.makeArray(t, [e]), c = Z.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !m(n)) {
                    for (s = c.delegateType || d, kt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || Q)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (G.get(o, "events") || Object.create(null))[e.type] && G.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && "function" == typeof n[d] && !m(n) && ((a = n[u]) && (n[u] = null), Z.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Et), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Et), Z.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = Z.extend(new Z.Event, n, { type: e, isSimulated: !0 });
            Z.event.trigger(r, null, t)
        }
    }), Z.fn.extend({ trigger: function(e, t) { return this.each(function() { Z.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return Z.event.trigger(e, t, n, !0) } });
    var St = Q.location,
        Dt = { guid: Date.now() },
        At = /\?/;
    Z.parseXML = function(e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new Q.DOMParser).parseFromString(e, "text/xml") } catch (e) {} return n = t && t.getElementsByTagName("parsererror")[0], t && !n || Z.error("Invalid XML: " + (n ? Z.map(n.childNodes, function(e) { return e.textContent }).join("\n") : e)), t };
    var qt = /\[\]$/,
        Nt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;

    function Ht(n, e, r, i) {
        var t;
        if (Array.isArray(e)) Z.each(e, function(e, t) { r || qt.test(n) ? i(n, t) : Ht(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== y(e)) i(n, e);
        else
            for (t in e) Ht(n + "[" + t + "]", e[t], r, i)
    }
    Z.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = "function" == typeof t ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) Ht(n, e[n], t, i);
        return r.join("&")
    }, Z.fn.extend({ serialize: function() { return Z.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = Z.prop(this, "elements"); return e ? Z.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !Z(this).is(":disabled") && Lt.test(this.nodeName) && !Ot.test(e) && (this.checked || !He.test(e)) }).map(function(e, t) { var n = Z(this).val(); return null == n ? null : Array.isArray(n) ? Z.map(n, function(e) { return { name: t.name, value: e.replace(Nt, "\r\n") } }) : { name: t.name, value: n.replace(Nt, "\r\n") } }).get() } });
    var Pt = /%20/g,
        Rt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        Ft = {},
        Bt = {},
        _t = "*/".concat("*"),
        Ut = C.createElement("a");

    function Xt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if ("function" == typeof t)
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function zt(t, i, o, a) {
        var s = {},
            u = t === Bt;

        function l(e) { var r; return s[e] = !0, Z.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Vt(e, t) { var n, r, i = Z.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && Z.extend(!0, e, r), e }
    Ut.href = St.href, Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: St.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": _t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": Z.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? Vt(Vt(e, Z.ajaxSettings), t) : Vt(Z.ajaxSettings, e) },
        ajaxPrefilter: Xt(Ft),
        ajaxTransport: Xt(Bt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = Z.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? Z(y) : Z.event,
                x = Z.Deferred(),
                b = Z.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) { n = {}; while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return h ? p : null },
                    setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
                };
            if (x.promise(T), v.url = ((e || v.url || St.href) + "").replace($t, St.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) { r = C.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = Z.param(v.data, v.traditional)), zt(Ft, v, t, T), h) return T;
            for (i in (g = Z.event && v.global) && 0 == Z.active++ && Z.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !It.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Pt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Mt, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + Dt.guid++ + o), v.url = f + o), v.ifModified && (Z.lastModified[f] && T.setRequestHeader("If-Modified-Since", Z.lastModified[f]), Z.etag[f] && T.setRequestHeader("If-None-Match", Z.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = zt(Bt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = Q.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { h = !1, c.send(a, l) } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && Q.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < Z.inArray("script", v.dataTypes) && Z.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (Z.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (Z.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return Z.get(e, t, n, "json") },
        getScript: function(e, t) { return Z.get(e, void 0, t, "script") }
    }), Z.each(["get", "post"], function(e, i) { Z[i] = function(e, t, n, r) { return "function" == typeof t && (r = r || n, n = t, t = void 0), Z.ajax(Z.extend({ url: e, type: i, dataType: r, data: t, success: n }, Z.isPlainObject(e) && e)) } }), Z.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), Z._evalUrl = function(e, t, n) { return Z.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, scriptAttrs: t.crossOrigin ? { crossOrigin: t.crossOrigin } : void 0, converters: { "text script": function() {} }, dataFilter: function(e) { Z.globalEval(e, t, n) } }) }, Z.fn.extend({
        wrapAll: function(e) { var t; return this[0] && ("function" == typeof e && (e = e.call(this[0])), t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return "function" == typeof n ? this.each(function(e) { Z(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = Z(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = "function" == typeof t; return this.each(function(e) { Z(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { Z(this).replaceWith(this.childNodes) }), this }
    }), Z.expr.pseudos.hidden = function(e) { return !Z.expr.pseudos.visible(e) }, Z.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, Z.ajaxSettings.xhr = function() { return new Q.XMLHttpRequest };
    var Yt = { 0: 200 };

    function Gt(e) { return e.crossDomain || e.scriptAttrs || e.async && Z.inArray("json", e.dataTypes) < 0 }
    Z.ajaxTransport(function(i) {
        var o;
        return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = r.onload = r.onerror = r.onabort = r.ontimeout = null, "abort" === e ? r.abort() : "error" === e ? t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" === (r.responseType || "text") ? { text: r.responseText } : { binary: r.response }, r.getAllResponseHeaders())) } }, r.onload = o(), r.onabort = r.onerror = r.ontimeout = o("error"), o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), Z.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, converters: { "text script": function(e) { return Z.globalEval(e), e } } }), Z.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), Gt(e) && (e.type = "GET") }), Z.ajaxTransport("script", function(n) { var r, i; if (Gt(n)) return { send: function(e, t) { r = Z("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), C.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var Qt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Qt.pop() || Z.expando + "_" + Dt.guid++; return this[e] = !0, e } }), Z.ajaxPrefilter("jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data"); return r = e.jsonpCallback = "function" == typeof e.jsonpCallback ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Jt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || Z.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = Q[r], Q[r] = function() { o = arguments }, n.always(function() { void 0 === i ? Z(Q).removeProp(r) : Q[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Qt.push(r)), o && "function" == typeof i && i(o[0]), o = i = void 0 }), "script" }), Z.parseHTML = function(e, t, n) { return "string" == typeof e || A(e + "") ? ("boolean" == typeof t && (n = t, t = !1), t || ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = Le([e], t, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))) : []; var r, i, o }, Z.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), "function" == typeof t ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && Z.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, Z.expr.pseudos.animated = function(t) { return Z.grep(Z.timers, function(e) { return t === e.elem }).length }, Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = Z.css(e, "position"),
                c = Z(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), "function" == typeof t && (t = t.call(e, n, Z.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, Z.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { Z.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === Z.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === Z.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = Z(e).offset()).top += Z.css(e, "borderTopWidth", !0), i.left += Z.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - Z.css(r, "marginTop", !0), left: t.left - i.left - Z.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === Z.css(e, "position")) e = e.offsetParent; return e || w }) }
    }), Z.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        Z.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), Z.each({ Height: "height", Width: "width" }, function(a, s) {
        Z.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            Z.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) { var r; return m(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? Z.css(e, t, i) : Z.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { Z.fn[t] = function(e) { return this.on(t, e) } }), Z.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), Z.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { Z.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), Z.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), "function" == typeof e) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || Z.guid++, i }, Z.holdReady = function(e) { e ? Z.readyWait++ : Z.ready(!0) }, "function" == typeof define && define.amd && define("jquery", [], function() { return Z });
    var Kt = Q.jQuery,
        Zt = Q.$;
    return Z.noConflict = function(e) { return Q.$ === Z && (Q.$ = Zt), e && Q.jQuery === Z && (Q.jQuery = Kt), Z }, void 0 === e && (Q.jQuery = Q.$ = Z), Z
});