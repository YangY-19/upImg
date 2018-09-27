/*
 html2canvas 0.4.1 <http://html2canvas.hertzen.com>
 Copyright (c) 2013 Niklas von Hertzen

 Released under MIT License
 */
/*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.2.min.map
*/
(function (e, undefined) {
    var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$, l = {}, c = [], p = "2.0.2", f = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, x = function (e, n) { return new x.fn.init(e, n, t) }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function (e, t) { return t.toUpperCase() }, S = function () { o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), x.ready() }; x.fn = x.prototype = { jquery: p, constructor: x, init: function (e, t, n) { var r, i; if (!e) return this; if ("string" == typeof e) { if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t)) for (r in t) x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this)) }, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return x.each(this, e, t) }, ready: function (e) { return x.ready.promise().done(e), this }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, map: function (e) { return this.pushStack(x.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () { var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1; for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++)if (null != (e = arguments[a])) for (t in e) n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r)); return s }, x.extend({ expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), noConflict: function (t) { return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? x.readyWait++ : x.ready(!0) }, ready: function (e) { (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready"))) }, isFunction: function (e) { return "function" === x.type(e) }, isArray: Array.isArray, isWindow: function (e) { return null != e && e === e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e }, isPlainObject: function (e) { if ("object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1; try { if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (t) { return !1 } return !0 }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || o; var r = C.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes)) }, parseJSON: JSON.parse, parseXML: function (e) { var t, n; if (!e || "string" != typeof e) return null; try { n = new DOMParser, t = n.parseFromString(e, "text/xml") } catch (r) { t = undefined } return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), t }, noop: function () { }, globalEval: function (e) { var t, n = eval; e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e)) }, camelCase: function (e) { return e.replace(k, "ms-").replace(N, E) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r, i = 0, o = e.length, s = j(e); if (n) { if (s) { for (; o > i; i++)if (r = t.apply(e[i], n), r === !1) break } else for (i in e) if (r = t.apply(e[i], n), r === !1) break } else if (s) { for (; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1) break } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break; return e }, trim: function (e) { return null == e ? "" : v.call(e) }, makeArray: function (e, t) { var n = t || []; return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : g.call(t, e, n) }, merge: function (e, t) { var n = t.length, r = e.length, i = 0; if ("number" == typeof n) for (; n > i; i++)e[r++] = t[i]; else while (t[i] !== undefined) e[r++] = t[i++]; return e.length = r, e }, grep: function (e, t, n) { var r, i = [], o = 0, s = e.length; for (n = !!n; s > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function (e, t, n) { var r, i = 0, o = e.length, s = j(e), a = []; if (s) for (; o > i; i++)r = t(e[i], i, n), null != r && (a[a.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (a[a.length] = r); return f.apply([], a) }, guid: 1, proxy: function (e, t) { var n, r, i; return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function () { return e.apply(t || this, r.concat(d.call(arguments))) }, i.guid = e.guid = e.guid || x.guid++ , i) : undefined }, access: function (e, t, n, r, i, o, s) { var a = 0, u = e.length, l = null == n; if ("object" === x.type(n)) { i = !0; for (a in n) x.access(e, t, a, n[a], !0, o, s) } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(x(e), n) })), t)) for (; u > a; a++)t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, now: Date.now, swap: function (e, t, n, r) { var i, o, s = {}; for (o in t) s[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = s[o]; return i } }), x.ready.promise = function (t) { return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))), n.promise(t) }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { l["[object " + t + "]"] = t.toLowerCase() }); function j(e) { var t = e.length, n = x.type(e); return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e) } t = x(o), function (e, undefined) { var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = "sizzle" + -new Date, b = e.document, w = 0, T = 0, C = at(), k = at(), N = at(), E = !1, S = function () { return 0 }, j = typeof undefined, D = 1 << 31, A = {}.hasOwnProperty, L = [], H = L.pop, q = L.push, O = L.push, F = L.slice, P = L.indexOf || function (e) { var t = 0, n = this.length; for (; n > t; t++)if (this[t] === e) return t; return -1 }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", $ = W.replace("w", "w#"), B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]", I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = RegExp("^" + M + "*," + M + "*"), X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = RegExp(M + "*[+~]"), Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"), V = RegExp(I), G = RegExp("^" + $ + "$"), J = { ID: RegExp("^#(" + W + ")"), CLASS: RegExp("^\\.(" + W + ")"), TAG: RegExp("^(" + W.replace("w", "w*") + ")"), ATTR: RegExp("^" + B), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: RegExp("^(?:" + R + ")$", "i"), needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /^(?:input|select|textarea|button)$/i, et = /^h\d$/i, tt = /'|\\/g, nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), rt = function (e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) }; try { O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType } catch (it) { O = { apply: L.length ? function (e, t) { q.apply(e, F.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function ot(e, t, r, i) { var o, s, a, u, l, f, g, m, x, w; if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e) return r; if (1 !== (u = t.nodeType) && 9 !== u) return []; if (h && !i) { if (o = K.exec(e)) if (a = o[1]) { if (9 === u) { if (s = t.getElementById(a), !s || !s.parentNode) return r; if (s.id === a) return r.push(s), r } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a) return r.push(s), r } else { if (o[2]) return O.apply(r, t.getElementsByTagName(e)), r; if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(a)), r } if (n.qsa && (!d || !d.test(e))) { if (m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) { f = vt(e), (g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", l = f.length; while (l--) f[l] = m + xt(f[l]); x = U.test(e) && t.parentNode || t, w = f.join(",") } if (w) try { return O.apply(r, x.querySelectorAll(w)), r } catch (T) { } finally { g || t.removeAttribute("id") } } } return St(e.replace(z, "$1"), t, r, i) } function st(e) { return Q.test(e + "") } function at() { var e = []; function t(n, r) { return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r } return t } function ut(e) { return e[v] = !0, e } function lt(e) { var t = p.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function ct(e, t, n) { e = e.split("|"); var r, o = e.length, s = n ? null : t; while (o--) (r = i.attrHandle[e[o]]) && r !== t || (i.attrHandle[e[o]] = s) } function pt(e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null } function ft(e, t) { return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) } function ht(e) { return "input" === e.nodeName.toLowerCase() ? e.defaultValue : undefined } function dt(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D); if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function gt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } } function mt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function yt(e) { return ut(function (t) { return t = +t, ut(function (n, r) { var i, o = e([], n.length, t), s = o.length; while (s--) n[i = o[s]] && (n[i] = !(r[i] = n[i])) }) }) } s = ot.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, n = ot.support = {}, c = ot.setDocument = function (e) { var t = e ? e.ownerDocument || e : b, r = t.parentWindow; return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.frameElement && r.attachEvent("onbeforeunload", function () { c() }), n.attributes = lt(function (e) { return e.innerHTML = "<a href='#'></a>", ct("type|href|height|width", ft, "#" === e.firstChild.getAttribute("href")), ct(R, pt, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className") }), n.input = lt(function (e) { return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }), ct("value", ht, n.attributes && n.input), n.getElementsByTagName = lt(function (e) { return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = lt(function (e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), n.getById = lt(function (e) { return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length }), n.getById ? (i.find.ID = function (e, t) { if (typeof t.getElementById !== j && h) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, i.filter.ID = function (e) { var t = e.replace(nt, rt); return function (e) { return e.getAttribute("id") === t } }) : (delete i.find.ID, i.filter.ID = function (e) { var t = e.replace(nt, rt); return function (e) { var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id"); return n && n.value === t } }), i.find.TAG = n.getElementsByTagName ? function (e, t) { return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, i.find.CLASS = n.getElementsByClassName && function (e, t) { return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined }, g = [], d = [], (n.qsa = st(t.querySelectorAll)) && (lt(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll(":checked").length || d.push(":checked") }), lt(function (e) { var n = t.createElement("input"); n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:") })), (n.matchesSelector = st(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function (e) { n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", I) }), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = st(f.contains) || f.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, n.sortDetached = lt(function (e) { return 1 & e.compareDocumentPosition(t.createElement("div")) }), S = f.compareDocumentPosition ? function (e, r) { if (e === r) return E = !0, 0; var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r); return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, n) { var r, i = 0, o = e.parentNode, s = n.parentNode, a = [e], u = [n]; if (e === n) return E = !0, 0; if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0; if (o === s) return dt(e, n); r = e; while (r = r.parentNode) a.unshift(r); r = n; while (r = r.parentNode) u.unshift(r); while (a[i] === u[i]) i++; return i ? dt(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0 }, t) : p }, ot.matches = function (e, t) { return ot(e, null, null, t) }, ot.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t))) try { var r = m.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (i) { } return ot(t, p, null, [e]).length > 0 }, ot.contains = function (e, t) { return (e.ownerDocument || e) !== p && c(e), y(e, t) }, ot.attr = function (e, t) { (e.ownerDocument || e) !== p && c(e); var r = i.attrHandle[t.toLowerCase()], o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined; return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o }, ot.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, ot.uniqueSort = function (e) { var t, r = [], i = 0, o = 0; if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) { while (t = e[o++]) t === e[o] && (i = r.push(o)); while (i--) e.splice(r[i], 1) } return e }, o = ot.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++)n += o(t); return n }, i = ot.selectors = { cacheLength: 50, createPseudo: ut, match: J, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[5] && e[2]; return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = vt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(nt, rt).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = C[e + " "]; return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function (e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = ot.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, p, f, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, y = a && t.nodeName.toLowerCase(), x = !u && !a; if (m) { if (o) { while (g) { p = t; while (p = p[g]) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1; d = g = "only" === e && !d && "nextSibling" } return !0 } if (d = [s ? m.firstChild : m.lastChild], s && x) { c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h]; while (p = ++h && p && p[g] || (f = h = 0) || d.pop()) if (1 === p.nodeType && ++f && p === t) { c[e] = [w, h, f]; break } } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w) f = l[1]; else while (p = ++h && p && p[g] || (f = h = 0) || d.pop()) if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e); return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function (e, n) { var i, o = r(e, t), s = o.length; while (s--) i = P.call(e, o[s]), e[i] = !(n[i] = o[s]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: ut(function (e) { var t = [], n = [], r = a(e.replace(z, "$1")); return r[v] ? ut(function (e, t, n, i) { var o, s = r(e, null, i, []), a = e.length; while (a--) (o = s[a]) && (e[a] = !(t[a] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: ut(function (e) { return function (t) { return ot(e, t).length > 0 } }), contains: ut(function (e) { return function (t) { return (t.textContent || t.innerText || o(t)).indexOf(e) > -1 } }), lang: ut(function (e) { return G.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(), function (t) { var n; do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === f }, focus: function (e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return e.disabled === !1 }, disabled: function (e) { return e.disabled === !0 }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !i.pseudos.empty(e) }, header: function (e) { return et.test(e.nodeName) }, input: function (e) { return Z.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: yt(function () { return [0] }), last: yt(function (e, t) { return [t - 1] }), eq: yt(function (e, t, n) { return [0 > n ? n + t : n] }), even: yt(function (e, t) { var n = 0; for (; t > n; n += 2)e.push(n); return e }), odd: yt(function (e, t) { var n = 1; for (; t > n; n += 2)e.push(n); return e }), lt: yt(function (e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0;)e.push(r); return e }), gt: yt(function (e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r;)e.push(r); return e }) } }; for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[t] = gt(t); for (t in { submit: !0, reset: !0 }) i.pseudos[t] = mt(t); function vt(e, t) { var n, r, o, s, a, u, l, c = k[e + " "]; if (c) return t ? 0 : c.slice(0); a = e, u = [], l = i.preFilter; while (a) { (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(z, " ") }), a = a.slice(n.length)); for (s in i.filter) !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({ value: n, type: s, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? ot.error(e) : k(e, u).slice(0) } function xt(e) { var t = 0, n = e.length, r = ""; for (; n > t; t++)r += e[t].value; return r } function bt(e, t, n) { var i = t.dir, o = n && "parentNode" === i, s = T++; return t.first ? function (t, n, r) { while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r) } : function (t, n, a) { var u, l, c, p = w + " " + s; if (a) { while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, a)) return !0 } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) { if ((u = l[1]) === !0 || u === r) return u === !0 } else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0) return !0 } } function wt(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function Tt(e, t, n, r, i) { var o, s = [], a = 0, u = e.length, l = null != t; for (; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a)); return s } function Ct(e, t, n, r, i, o) { return r && !r[v] && (r = Ct(r)), i && !i[v] && (i = Ct(i, o)), ut(function (o, s, a, u) { var l, c, p, f = [], h = [], d = s.length, g = o || Et(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : Tt(g, f, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m; if (n && n(m, y, a, u), r) { l = Tt(y, h), r(l, [], a, u), c = l.length; while (c--) (p = l[c]) && (y[h[c]] = !(m[h[c]] = p)) } if (o) { if (i || e) { if (i) { l = [], c = y.length; while (c--) (p = y[c]) && l.push(m[c] = p); i(null, y = [], l, u) } c = y.length; while (c--) (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p)) } } else y = Tt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y) }) } function kt(e) { var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = bt(function (e) { return e === t }, a, !0), p = bt(function (e) { return P.call(t, e) > -1 }, a, !0), f = [function (e, n, r) { return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) }]; for (; o > l; l++)if (n = i.relative[e[l].type]) f = [bt(wt(f), n)]; else { if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) { for (r = ++l; o > r; r++)if (i.relative[e[r].type]) break; return Ct(l > 1 && wt(f), l > 1 && xt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && kt(e.slice(l, r)), o > r && kt(e = e.slice(r)), o > r && xt(e)) } f.push(n) } return wt(f) } function Nt(e, t) { var n = 0, o = t.length > 0, s = e.length > 0, a = function (a, l, c, f, h) { var d, g, m, y = [], v = 0, x = "0", b = a && [], T = null != h, C = u, k = a || s && i.find.TAG("*", h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || .1; for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) { if (s && d) { g = 0; while (m = e[g++]) if (m(d, l, c)) { f.push(d); break } T && (w = N, r = ++n) } o && ((d = !m && d) && v-- , a && b.push(d)) } if (v += x, o && x !== v) { g = 0; while (m = t[g++]) m(b, y, l, c); if (a) { if (v > 0) while (x--) b[x] || y[x] || (y[x] = H.call(f)); y = Tt(y) } O.apply(f, y), T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f) } return T && (w = N, u = C), b }; return o ? ut(a) : a } a = ot.compile = function (e, t) { var n, r = [], i = [], o = N[e + " "]; if (!o) { t || (t = vt(e)), n = t.length; while (n--) o = kt(t[n]), o[v] ? r.push(o) : i.push(o); o = N(e, Nt(i, r)) } return o }; function Et(e, t, n) { var r = 0, i = t.length; for (; i > r; r++)ot(e, t[r], n); return n } function St(e, t, r, o) { var s, u, l, c, p, f = vt(e); if (!o && 1 === f.length) { if (u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) { if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return r; e = e.slice(u.shift().value.length) } s = J.needsContext.test(e) ? 0 : u.length; while (s--) { if (l = u[s], i.relative[c = l.type]) break; if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) { if (u.splice(s, 1), e = o.length && xt(u), !e) return O.apply(r, o), r; break } } } return a(e, f)(o, t, !h, r, U.test(e)), r } i.pseudos.nth = i.pseudos.eq; function jt() { } jt.prototype = i.filters = i.pseudos, i.setFilters = new jt, n.sortStable = v.split("").sort(S).join("") === v, c(), [0, 0].sort(S), n.detectDuplicates = E, x.find = ot, x.expr = ot.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains }(e); var D = {}; function A(e) { var t = D[e] = {}; return x.each(e.match(w) || [], function (e, n) { t[n] = !0 }), t } x.Callbacks = function (e) { e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e); var t, n, r, i, o, s, a = [], u = !e.once && [], l = function (p) { for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) { t = !1; break } r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable()) }, c = { add: function () { if (a) { var n = a.length; (function s(t) { x.each(t, function (t, n) { var r = x.type(n); "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n) }) })(arguments), r ? o = a.length : t && (i = n, l(t)) } return this }, remove: function () { return a && x.each(arguments, function (e, t) { var n; while ((n = x.inArray(t, a, n)) > -1) a.splice(n, 1), r && (o >= n && o-- , s >= n && s--) }), this }, has: function (e) { return e ? x.inArray(e, a) > -1 : !(!a || !a.length) }, empty: function () { return a = [], o = 0, this }, disable: function () { return a = u = t = undefined, this }, disabled: function () { return !a }, lock: function () { return u = undefined, t || c.disable(), this }, locked: function () { return !u }, fireWith: function (e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !a || n && !u || (r ? u.push(t) : l(t)), this }, fire: function () { return c.fireWith(this, arguments), this }, fired: function () { return !!n } }; return c }, x.extend({ Deferred: function (e) { var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return x.Deferred(function (n) { x.each(t, function (t, o) { var s = o[0], a = x.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = a && a.apply(this, arguments); e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? x.extend(e, r) : r } }, i = {}; return r.pipe = r.then, x.each(t, function (e, o) { var s = o[2], a = o[3]; r[o[1]] = s.add, a && s.add(function () { n = a }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = s.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), s = function (e, t, n) { return function (r) { t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } }, a, u, l; if (r > 1) for (a = Array(r), u = Array(r), l = Array(r); r > t; t++)n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i; return i || o.resolveWith(l, n), o.promise() } }), x.support = function (t) { var n = o.createElement("input"), r = o.createDocumentFragment(), i = o.createElement("div"), s = o.createElement("select"), a = s.appendChild(o.createElement("option")); return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function () { var n, r, s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a = o.getElementsByTagName("body")[0]; a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function () { t.boxSizing = 4 === i.offsetWidth }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || { width: "4px" }).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n)) }), t) : t }({}); var L, H, q = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g; function F() { Object.defineProperty(this.cache = {}, 0, { get: function () { return {} } }), this.expando = x.expando + Math.random() } F.uid = 1, F.accepts = function (e) { return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0 }, F.prototype = { key: function (e) { if (!F.accepts(e)) return 0; var t = {}, n = e[this.expando]; if (!n) { n = F.uid++; try { t[this.expando] = { value: n }, Object.defineProperties(e, t) } catch (r) { t[this.expando] = n, x.extend(e, t) } } return this.cache[n] || (this.cache[n] = {}), n }, set: function (e, t, n) { var r, i = this.key(e), o = this.cache[i]; if ("string" == typeof t) o[t] = n; else if (x.isEmptyObject(o)) x.extend(this.cache[i], t); else for (r in t) o[r] = t[r]; return o }, get: function (e, t) { var n = this.cache[this.key(e)]; return t === undefined ? n : n[t] }, access: function (e, t, n) { return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t) }, remove: function (e, t) { var n, r, i, o = this.key(e), s = this.cache[o]; if (t === undefined) this.cache[o] = {}; else { x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length; while (n--) delete s[r[n]] } }, hasData: function (e) { return !x.isEmptyObject(this.cache[e[this.expando]] || {}) }, discard: function (e) { e[this.expando] && delete this.cache[e[this.expando]] } }, L = new F, H = new F, x.extend({ acceptData: F.accepts, hasData: function (e) { return L.hasData(e) || H.hasData(e) }, data: function (e, t, n) { return L.access(e, t, n) }, removeData: function (e, t) { L.remove(e, t) }, _data: function (e, t, n) { return H.access(e, t, n) }, _removeData: function (e, t) { H.remove(e, t) } }), x.fn.extend({ data: function (e, t) { var n, r, i = this[0], o = 0, s = null; if (e === undefined) { if (this.length && (s = L.get(i), 1 === i.nodeType && !H.get(i, "hasDataAttrs"))) { for (n = i.attributes; n.length > o; o++)r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), P(i, r, s[r])); H.set(i, "hasDataAttrs", !0) } return s } return "object" == typeof e ? this.each(function () { L.set(this, e) }) : x.access(this, function (t) { var n, r = x.camelCase(e); if (i && t === undefined) { if (n = L.get(i, e), n !== undefined) return n; if (n = L.get(i, r), n !== undefined) return n; if (n = P(i, r, undefined), n !== undefined) return n } else this.each(function () { var n = L.get(this, r); L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function (e) { return this.each(function () { L.remove(this, e) }) } }); function P(e, t, n) { var r; if (n === undefined && 1 === e.nodeType) if (r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) { try { n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : q.test(n) ? JSON.parse(n) : n } catch (i) { } L.set(e, t, n) } else n = undefined; return n } x.extend({
        queue: function (e, t, n) { var r; return e ? (t = (t || "fx") + "queue", r = H.get(e, t), n && (!r || x.isArray(n) ? r = H.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined }, dequeue: function (e, t) {
            t = t || "fx"; var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), s = function () { x.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return H.get(e, n) || H.access(e, n, { empty: x.Callbacks("once memory").add(function () { H.remove(e, [t + "queue", n]) }) }) }
    }), x.fn.extend({ queue: function (e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () { var n = x.queue(this, e, t); x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { x.dequeue(this, e) }) }, delay: function (e, t) { return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = undefined), e = e || "fx"; while (s--) n = H.get(o[s], e + "queueHooks"), n && n.empty && (r++ , n.empty.add(a)); return a(), i.promise(t) } }); var R, M, W = /[\t\r\n\f]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i; x.fn.extend({ attr: function (e, t) { return x.access(this, x.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { x.removeAttr(this, e) }) }, prop: function (e, t) { return x.access(this, x.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return this.each(function () { delete this[x.propFix[e] || e] }) }, addClass: function (e) { var t, n, r, i, o, s = 0, a = this.length, u = "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).addClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(w) || []; a > s; s++)if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) { o = 0; while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " "); n.className = x.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).removeClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(w) || []; a > s; s++)if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) { o = 0; while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " "); n.className = e ? x.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e, i = "boolean" == typeof t; return x.isFunction(e) ? this.each(function (n) { x(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) { var o, s = 0, a = x(this), u = t, l = e.match(w) || []; while (o = l[s++]) u = i ? u : !a.hasClass(o), a[u ? "addClass" : "removeClass"](o) } else (n === r || "boolean" === n) && (this.className && H.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : H.get(this, "__className__") || "") }) }, hasClass: function (e) { var t = " " + e + " ", n = 0, r = this.length; for (; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var t, n, r, i = this[0]; { if (arguments.length) return r = x.isFunction(e), this.each(function (n) { var i; 1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function (e) { return null == e ? "" : e + "" })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i)) }); if (i) return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n) } } }), x.extend({ valHooks: { option: { get: function (e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } }, select: { get: function (e) { var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; for (; a > u; u++)if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) { if (t = x(n).val(), o) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = x.makeArray(t), s = i.length; while (s--) r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0); return n || (e.selectedIndex = -1), o } } }, attr: function (e, t, n) { var i, o, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(w); if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n) }, attrHooks: { type: { set: function (e, t) { if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function (e, t, n) { var r, i, o, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1 } } } }), M = { set: function (e, t, n) { return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) { var n = x.expr.attrHandle[t] || x.find.attr; x.expr.attrHandle[t] = function (e, t, r) { var i = x.expr.attrHandle[t], o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null; return x.expr.attrHandle[t] = i, o } }), x.support.optSelected || (x.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { x.propFix[this.toLowerCase()] = this }), x.each(["radio", "checkbox"], function () { x.valHooks[this] = { set: function (e, t) { return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined } }, x.support.checkOn || (x.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var I = /^key/, z = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, X = /^([^.]*)(?:\.(.+)|)$/; function U() { return !0 } function Y() { return !1 } function V() { try { return o.activeElement } catch (e) { } } x.event = { global: {}, add: function (e, t, n, i, o) { var s, a, u, l, c, p, f, h, d, g, m, y = H.get(e); if (y) { n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) { return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments) }, a.elem = e), t = (t || "").match(w) || [""], c = t.length; while (c--) u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({ type: d, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && x.expr.match.needsContext.test(o), namespace: g.join(".") }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0); e = null } }, remove: function (e, t, n, r, i) { var o, s, a, u, l, c, p, f, h, d, g, m = H.hasData(e) && H.get(e); if (m && (u = m.events)) { t = (t || "").match(w) || [""], l = t.length; while (l--) if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) { p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; while (o--) c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount-- , p.remove && p.remove.call(e, c)); s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h]) } else for (h in u) x.event.remove(e, h + t[l], n, r, !0); x.isEmptyObject(u) && (delete m.handle, H.remove(e, "events")) } }, trigger: function (t, n, r, i) { var s, a, u, l, c, p, f, h = [r || o], d = y.call(t, "type") ? t.type : t, g = y.call(t, "namespace") ? t.namespace.split(".") : []; if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) { if (!i && !f.noBubble && !x.isWindow(r)) { for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode)h.push(a), u = a; u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e) } s = 0; while ((a = h[s++]) && !t.isPropagationStopped()) t.type = s > 1 ? l : f.bindType || d, p = (H.get(a, "events") || {})[t.type] && H.get(a, "handle"), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault(); return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result } }, dispatch: function (e) { e = x.event.fix(e); var t, n, r, i, o, s = [], a = d.call(arguments), u = (H.get(this, "events") || {})[e.type] || [], l = x.event.special[e.type] || {}; if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) { s = x.event.handlers.call(this, e, u), t = 0; while ((i = s[t++]) && !e.isPropagationStopped()) { e.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return l.postDispatch && l.postDispatch.call(this, e), e.result } }, handlers: function (e, t) { var n, r, i, o, s = [], a = t.delegateCount, u = e.target; if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this)if (u.disabled !== !0 || "click" !== e.type) { for (r = [], n = 0; a > n; n++)o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o); r.length && s.push({ elem: u, handlers: r }) } return t.length > a && s.push({ elem: this, handlers: t.slice(a) }), s }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, t) { var n, r, i, s = t.button; return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, fix: function (e) { if (e[x.expando]) return e; var t, n, r, i = e.type, s = e, a = this.fixHooks[i]; a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length; while (t--) n = r[t], e[n] = s[n]; return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e }, special: { load: { noBubble: !0 }, focus: { trigger: function () { return this !== V() && this.focus ? (this.focus(), !1) : undefined }, delegateType: "focusin" }, blur: { trigger: function () { return this === V() && this.blur ? (this.blur(), !1) : undefined }, delegateType: "focusout" }, click: { trigger: function () { return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined }, _default: function (e) { return x.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function (e) { e.result !== undefined && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = x.extend(new x.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, x.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) }, x.Event = function (e, t) { return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t) }, x.Event.prototype = { isDefaultPrevented: Y, isPropagationStopped: Y, isImmediatePropagationStopped: Y, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation() }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = U, this.stopPropagation() } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) { x.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { x.event.simulate(t, e.target, x.event.fix(e), !0) }; x.event.special[t] = { setup: function () { 0 === n++ && o.addEventListener(e, r, !0) }, teardown: function () { 0 === --n && o.removeEventListener(e, r, !0) } } }), x.fn.extend({ on: function (e, t, n, r, i) { var o, s; if ("object" == typeof e) { "string" != typeof t && (n = n || t, t = undefined); for (s in e) this.on(s, t, n, e[s], i); return this } if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1) r = Y; else if (!r) return this; return 1 === i && (o = r, r = function (e) { return x().off(e), o.apply(this, arguments) }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function () { x.event.add(this, e, r, n, t) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return (t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function () { x.event.remove(this, e, n, t) }) }, trigger: function (e, t) { return this.each(function () { x.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; return n ? x.event.trigger(e, t, n, !0) : undefined } }); var G = /^.[^:#\[\.,]*$/, J = /^(?:parents|prev(?:Until|All))/, Q = x.expr.match.needsContext, K = { children: !0, contents: !0, next: !0, prev: !0 }; x.fn.extend({ find: function (e) { var t, n = [], r = this, i = r.length; if ("string" != typeof e) return this.pushStack(x(e).filter(function () { for (t = 0; i > t; t++)if (x.contains(r[t], this)) return !0 })); for (t = 0; i > t; t++)x.find(e, r[t], n); return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, has: function (e) { var t = x(e, this), n = t.length; return this.filter(function () { var e = 0; for (; n > e; e++)if (x.contains(this, t[e])) return !0 }) }, not: function (e) { return this.pushStack(et(this, e || [], !0)) }, filter: function (e) { return this.pushStack(et(this, e || [], !1)) }, is: function (e) { return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; for (; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { n = o.push(n); break } return this.pushStack(o.length > 1 ? x.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n); return this.pushStack(x.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }); function Z(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } x.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return x.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return x.dir(e, "parentNode", n) }, next: function (e) { return Z(e, "nextSibling") }, prev: function (e) { return Z(e, "previousSibling") }, nextAll: function (e) { return x.dir(e, "nextSibling") }, prevAll: function (e) { return x.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return x.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return x.dir(e, "previousSibling", n) }, siblings: function (e) { return x.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return x.sibling(e.firstChild) }, contents: function (e) { return e.contentDocument || x.merge([], e.childNodes) } }, function (e, t) { x.fn[e] = function (n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i) } }), x.extend({ filter: function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) { return 1 === e.nodeType })) }, dir: function (e, t, n) { var r = [], i = n !== undefined; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && x(e).is(n)) break; r.push(e) } return r }, sibling: function (e, t) { var n = []; for (; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n } }); function et(e, t, n) { if (x.isFunction(t)) return x.grep(e, function (e, r) { return !!t.call(e, r, e) !== n }); if (t.nodeType) return x.grep(e, function (e) { return e === t !== n }); if ("string" == typeof t) { if (G.test(t)) return x.filter(t, e, n); t = x.filter(t, e) } return x.grep(e, function (e) { return g.call(t, e) >= 0 !== n }) } var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, nt = /<([\w:]+)/, rt = /<|&#?\w+;/, it = /<(?:script|style|link)/i, ot = /^(?:checkbox|radio)$/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^$|\/(?:java|ecma)script/i, ut = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({ text: function (e) { return x.access(this, function (e) { return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e)) }, null, e, arguments.length) }, append: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = pt(this, e); t.appendChild(e) } }) }, prepend: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = pt(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { var n, r = e ? x.filter(e, this) : this, i = 0; for (; null != (n = r[i]); i++)t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n)); return this }, empty: function () { var e, t = 0; for (; null != (e = this[t]); t++)1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return x.clone(this, e, t) }) }, html: function (e) { return x.access(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (e === undefined && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()]) { e = e.replace(tt, "<$1></$2>"); try { for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e); t = 0 } catch (i) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var e = x.map(this, function (e) { return [e.nextSibling, e.parentNode] }), t = 0; return this.domManip(arguments, function (n) { var r = e[t++], i = e[t++]; i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r)) }, !0), t ? this : this.remove() }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, t, n) { e = f.apply([], e); var r, i, o, s, a, u, l = 0, c = this.length, p = this, h = c - 1, d = e[0], g = x.isFunction(d); if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d)) return this.each(function (r) { var i = p.eq(r); g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n) }); if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) { for (o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++)a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l); if (s) for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++)a = o[l], at.test(a.type || "") && !H.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, ""))) } return this } }), x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { x.fn[e] = function (e) { var n, r = [], i = x(e), o = i.length - 1, s = 0; for (; o >= s; s++)n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get()); return this.pushStack(r) } }), x.extend({ clone: function (e, t, n) { var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e); if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++)yt(o[r], s[r]); if (t) if (n) for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++)gt(o[r], s[r]); else gt(e, a); return s = mt(a, "script"), s.length > 0 && dt(s, !u && mt(e, "script")), a }, buildFragment: function (e, t, n, r) { var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), h = []; for (; p > c; c++)if (i = e[c], i || 0 === i) if ("object" === x.type(i)) x.merge(h, i.nodeType ? [i] : i); else if (rt.test(i)) { o = o || f.appendChild(t.createElement("div")), s = (nt.exec(i) || ["", ""])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2], l = a[0]; while (l--) o = o.firstChild; x.merge(h, o.childNodes), o = f.firstChild, o.textContent = "" } else h.push(t.createTextNode(i)); f.textContent = "", c = 0; while (i = h[c++]) if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), "script"), u && dt(o), n)) { l = 0; while (i = o[l++]) at.test(i.type || "") && n.push(i) } return f }, cleanData: function (e) { var t, n, r, i, o, s, a = x.event.special, u = 0; for (; (n = e[u]) !== undefined; u++) { if (F.accepts(n) && (o = n[H.expando], o && (t = H.cache[o]))) { if (r = Object.keys(t.events || {}), r.length) for (s = 0; (i = r[s]) !== undefined; s++)a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle); H.cache[o] && delete H.cache[o] } delete L.cache[n[L.expando]] } }, _evalUrl: function (e) { return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) } }); function pt(e, t) { return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e } function ft(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function ht(e) { var t = ut.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function dt(e, t) { var n = e.length, r = 0; for (; n > r; r++)H.set(e[r], "globalEval", !t || H.get(t[r], "globalEval")) } function gt(e, t) { var n, r, i, o, s, a, u, l; if (1 === t.nodeType) { if (H.hasData(e) && (o = H.access(e), s = H.set(t, o), l = o.events)) { delete s.handle, s.events = {}; for (i in l) for (n = 0, r = l[i].length; r > n; n++)x.event.add(t, i, l[i][n]) } L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u)) } } function mt(e, t) { var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : []; return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n } function yt(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } x.fn.extend({ wrapAll: function (e) { var t; return x.isFunction(e) ? this.each(function (t) { x(this).wrapAll(e.call(this, t)) }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this) }, wrapInner: function (e) { return x.isFunction(e) ? this.each(function (t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = x(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = x.isFunction(e); return this.each(function (n) { x(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { x.nodeName(this, "body") || x(this).replaceWith(this.childNodes) }).end() } }); var vt, xt, bt = /^(none|table(?!-c[ea]).+)/, wt = /^margin/, Tt = RegExp("^(" + b + ")(.*)$", "i"), Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"), kt = RegExp("^([+-])=(" + b + ")", "i"), Nt = { BODY: "block" }, Et = { position: "absolute", visibility: "hidden", display: "block" }, St = { letterSpacing: 0, fontWeight: 400 }, jt = ["Top", "Right", "Bottom", "Left"], Dt = ["Webkit", "O", "Moz", "ms"]; function At(e, t) { if (t in e) return t; var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Dt.length; while (i--) if (t = Dt[i] + n, t in e) return t; return r } function Lt(e, t) { return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e) } function Ht(t) { return e.getComputedStyle(t, null) } function qt(e, t) { var n, r, i, o = [], s = 0, a = e.length; for (; a > s; s++)r = e[s], r.style && (o[s] = H.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = H.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && "none" !== n || !i) && H.set(r, "olddisplay", i ? n : x.css(r, "display")))); for (s = 0; a > s; s++)r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none")); return e } x.fn.extend({ css: function (e, t) { return x.access(this, function (e, t, n) { var r, i, o = {}, s = 0; if (x.isArray(t)) { for (r = Ht(e), i = t.length; i > s; s++)o[t[s]] = x.css(e, t[s], !1, r); return o } return n !== undefined ? x.style(e, t, n) : x.css(e, t) }, e, t, arguments.length > 1) }, show: function () { return qt(this, !0) }, hide: function () { return qt(this) }, toggle: function (e) { var t = "boolean" == typeof e; return this.each(function () { (t ? e : Lt(this)) ? x(this).show() : x(this).hide() }) } }), x.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = vt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, s, a = x.camelCase(t), u = e.style; return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined) } }, css: function (e, t, n, r) { var i, o, s, a = x.camelCase(t); return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), "normal" === i && t in St && (i = St[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i } }), vt = function (e, t, n) { var r, i, o, s = n || Ht(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style; return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a }; function Ot(e, t, n) { var r = Tt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function Ft(e, t, n, r, i) { var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; for (; 4 > o; o += 2)"margin" === n && (s += x.css(e, n + jt[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i))); return s } function Pt(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Ht(e), s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i)) return i; r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px" } function Rt(e) { var t = o, n = Nt[e]; return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n } function Mt(e, t) { var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display"); return n.remove(), r } x.each(["height", "width"], function (e, t) { x.cssHooks[t] = { get: function (e, n, r) { return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function () { return Pt(e, t, r) }) : Pt(e, t, r) : undefined }, set: function (e, n, r) { var i = r && Ht(e); return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0) } } }), x(function () { x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function (e, t) { return t ? x.swap(e, { display: "inline-block" }, vt, [e, "marginRight"]) : undefined } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, t) { x.cssHooks[t] = { get: function (e, n) { return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined } } }) }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight }, x.expr.filters.visible = function (e) { return !x.expr.filters.hidden(e) }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) { x.cssHooks[e + t] = { expand: function (n) { var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; for (; 4 > r; r++)i[e + jt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, wt.test(e) || (x.cssHooks[e + t].set = Ot) }); var Wt = /%20/g, $t = /\[\]$/, Bt = /\r?\n/g, It = /^(?:submit|button|image|reset|file)$/i, zt = /^(?:input|select|textarea|keygen)/i; x.fn.extend({ serialize: function () { return x.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e)) }).map(function (e, t) { var n = x(this).val(); return null == n ? null : x.isArray(n) ? x.map(n, function (e) { return { name: t.name, value: e.replace(Bt, "\r\n") } }) : { name: t.name, value: n.replace(Bt, "\r\n") } }).get() } }), x.param = function (e, t) { var n, r = [], i = function (e, t) { t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () { i(this.name, this.value) }); else for (n in e) _t(n, e[n], t, i); return r.join("&").replace(Wt, "+") }; function _t(e, t, n, r) { var i; if (x.isArray(t)) x.each(t, function (t, i) { n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) _t(e + "[" + i + "]", t[i], n, r) } x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { x.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }); var Xt, Ut, Yt = x.now(), Vt = /\?/, Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nn = x.fn.load, rn = {}, on = {}, sn = "*/".concat("*");
    try { Ut = i.href } catch (an) { Ut = o.createElement("a"), Ut.href = "", Ut = Ut.href } Xt = tn.exec(Ut.toLowerCase()) || []; function un(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(w) || []; if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function ln(e, t, n, r) { var i = {}, o = e === on; function s(a) { var u; return i[a] = !0, x.each(e[a] || [], function (e, a) { var l = a(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1) }), u } return s(t.dataTypes[0]) || !i["*"] && s("*") } function cn(e, t) { var n, r, i = x.ajaxSettings.flatOptions || {}; for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && x.extend(!0, e, r), e } x.fn.load = function (e, t, n) { if ("string" != typeof e && nn) return nn.apply(this, arguments); var r, i, o, s = this, a = e.indexOf(" "); return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), s.length > 0 && x.ajax({ url: e, type: i, dataType: "html", data: t }).done(function (e) { o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e) }).complete(n && function (e, t) { s.each(n, o || [e.responseText, t, e]) }), this }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { x.fn[t] = function (e) { return this.on(t, e) } }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ut, type: "GET", isLocal: Kt.test(Xt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": sn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e) }, ajaxPrefilter: un(rn), ajaxTransport: un(on), ajax: function (e, t) { "object" == typeof e && (t = e, e = undefined), t = t || {}; var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), p = c.context || c, f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event, h = x.Deferred(), d = x.Callbacks("once memory"), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === v) { if (!o) { o = {}; while (t = Qt.exec(i)) o[t[1].toLowerCase()] = t[2] } t = o[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === v ? i : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return v || (e = y[n] = y[n] || e, m[e] = t), this }, overrideMimeType: function (e) { return v || (c.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > v) for (t in e) g[t] = [g[t], e[t]]; else T.always(e[T.status]); return this }, abort: function (e) { var t = e || b; return n && n.abort(t), k(0, t), this } }; if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v) return T; u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]); for (l in c.headers) T.setRequestHeader(l, c.headers[l]); if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v)) return T.abort(); b = "abort"; for (l in { success: 1, error: 1, complete: 1 }) T[l](c[l]); if (n = ln(on, c, t, T)) { T.readyState = 1, u && f.trigger("ajaxSend", [T, c]), c.async && c.timeout > 0 && (s = setTimeout(function () { T.abort("timeout") }, c.timeout)); try { v = 1, n.send(m, k) } catch (C) { if (!(2 > v)) throw C; k(-1, C) } } else k(-1, "No Transport"); function k(e, t, o, a) { var l, m, y, b, w, C = t; 2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(p, [T, C]), u && (f.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return x.get(e, t, n, "json") }, getScript: function (e, t) { return x.get(e, undefined, t, "script") } }), x.each(["get", "post"], function (e, t) { x[t] = function (e, n, r, i) { return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({ url: e, type: t, dataType: i, data: n, success: r }) } }); function pn(e, t, n) { var r, i, o, s, a = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in a) if (a[i] && a[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } s || (s = i) } o = o || s } return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined } function fn(e, t, n, r) { var i, o, s, a, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) { s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1])); break } if (s !== !0) if (s && e["throws"]) t = s(t); else try { t = s(t) } catch (p) { return { state: "parsererror", error: s ? p : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } } x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function (e) { e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET") }), x.ajaxTransport("script", function (e) { if (e.crossDomain) { var t, n; return { send: function (r, i) { t = x("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) { t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type) }), o.head.appendChild(t[0]) }, abort: function () { n && n() } } } }); var hn = [], dn = /(=)\?(?=&|$)|\?\?/; x.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = hn.pop() || x.expando + "_" + Yt++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function (t, n, r) { var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data"); return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () { return s || x.error(i + " was not called"), s[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function () { s = arguments }, r.always(function () { e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined }), "script") : undefined }), x.ajaxSettings.xhr = function () { try { return new XMLHttpRequest } catch (e) { } }; var gn = x.ajaxSettings.xhr(), mn = { 0: 200, 1223: 204 }, yn = 0, vn = {}; e.ActiveXObject && x(e).on("unload", function () { for (var e in vn) vn[e](); vn = undefined }), x.support.cors = !!gn && "withCredentials" in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function (e) { var t; return x.support.cors || gn && !e.crossDomain ? { send: function (n, r) { var i, o, s = e.xhr(); if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i]; e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"); for (i in n) s.setRequestHeader(i, n[i]); t = function (e) { return function () { t && (delete vn[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? { text: s.responseText } : undefined, s.getAllResponseHeaders())) } }, s.onload = t(), s.onerror = t("error"), t = vn[o = yn++] = t("abort"), s.send(e.hasContent && e.data || null) }, abort: function () { t && t() } } : undefined }); var xn, bn, wn = /^(?:toggle|show|hide)$/, Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"), Cn = /queueHooks$/, kn = [An], Nn = { "*": [function (e, t) { var n = this.createTween(e, t), r = n.cur(), i = Tn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)), a = 1, u = 20; if (s && s[3] !== o) { o = o || s[3], i = i || [], s = +r || 1; do a = a || ".5", s /= a, x.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u) } return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n }] }; function En() { return setTimeout(function () { xn = undefined }), xn = x.now() } function Sn(e, t, n) { var r, i = (Nn[t] || []).concat(Nn["*"]), o = 0, s = i.length; for (; s > o; o++)if (r = i[o].call(n, t, e)) return r } function jn(e, t, n) { var r, i, o = 0, s = kn.length, a = x.Deferred().always(function () { delete u.elem }), u = function () { if (i) return !1; var t = xn || En(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; for (; u > s; s++)l.tweens[s].run(o); return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1) }, l = a.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: xn || En(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++)l.tweens[n].run(1); return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this } }), c = l.props; for (Dn(c, l.opts.specialEasing); s > o; o++)if (r = kn[o].call(l, e, c, l.opts)) return r; return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) } function Dn(e, t) { var n, r, i, o, s; for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) { o = s.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i } x.Animation = x.extend(jn, { tweener: function (e, t) { x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); var n, r = 0, i = e.length; for (; i > r; r++)n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t) }, prefilter: function (e, t) { t ? kn.unshift(e) : kn.push(e) } }); function An(e, t, n) { var r, i, o, s, a, u, l = this, c = {}, p = e.style, f = e.nodeType && Lt(e), h = H.get(e, "fxshow"); n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () { a.unqueued || u() }), a.unqueued++ , l.always(function () { l.always(function () { a.unqueued-- , x.queue(e, "fx").length || a.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", l.always(function () { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })); for (r in t) if (i = t[r], wn.exec(i)) { if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) { if ("show" !== i || !h || h[r] === undefined) continue; f = !0 } c[r] = h && h[r] || x.style(e, r) } if (!x.isEmptyObject(c)) { h ? "hidden" in h && (f = h.hidden) : h = H.access(e, "fxshow", {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function () { x(e).hide() }), l.done(function () { var t; H.remove(e, "fxshow"); for (t in c) x.style(e, t, c[t]) }); for (r in c) s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0)) } } function Ln(e, t, n, r, i) { return new Ln.prototype.init(e, t, n, r, i) } x.Tween = Ln, Ln.prototype = { constructor: Ln, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function () { var e = Ln.propHooks[this.prop]; return e && e.get ? e.get(this) : Ln.propHooks._default.get(this) }, run: function (e) { var t, n = Ln.propHooks[this.prop]; return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this } }, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.each(["toggle", "show", "hide"], function (e, t) { var n = x.fn[t]; x.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Hn(t, !0), e, r, i) } }), x.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(Lt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = x.isEmptyObject(e), o = x.speed(t, n, r), s = function () { var t = jn(this, x.extend({}, e), o); (i || H.get(this, "finish")) && t.stop(!0) }; return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s) }, stop: function (e, t, n) { var r = function (e) { var t = e.stop; delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function () { var t = !0, i = null != e && e + "queueHooks", o = x.timers, s = H.get(this); if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && Cn.test(i) && r(s[i]); for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); (t || !n) && x.dequeue(this, e) }) }, finish: function (e) { return e !== !1 && (e = e || "fx"), this.each(function () { var t, n = H.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, s = r ? r.length : 0; for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; s > t; t++)r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }); function Hn(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = jt[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } x.each({ slideDown: Hn("show"), slideUp: Hn("hide"), slideToggle: Hn("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { x.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), x.speed = function (e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t }; return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () { x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function () { var e, t = x.timers, n = 0; for (xn = x.now(); t.length > n; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1); t.length || x.fx.stop(), xn = undefined }, x.fx.timer = function (e) { e() && x.timers.push(e) && x.fx.start() }, x.fx.interval = 13, x.fx.start = function () { bn || (bn = setInterval(x.fx.tick, x.fx.interval)) }, x.fx.stop = function () { clearInterval(bn), bn = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) { return x.grep(x.timers, function (t) { return e === t.elem }).length }), x.fn.offset = function (e) { if (arguments.length) return e === undefined ? this : this.each(function (t) { x.offset.setOffset(this, e, t) }); var t, n, i = this[0], o = { top: 0, left: 0 }, s = i && i.ownerDocument; if (s) return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = qn(s), { top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft }) : o }, x.offset = { setOffset: function (e, t, n) { var r, i, o, s, a, u, l, c = x.css(e, "position"), p = x(e), f = {}; "static" === c && (e.style.position = "relative"), a = p.offset(), o = x.css(e, "top"), u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : p.css(f) } }, x.fn.extend({ position: function () { if (this[0]) { var e, t, n = this[0], r = { top: 0, left: 0 }; return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - x.css(n, "marginTop", !0), left: t.left - r.left - x.css(n, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent || s; while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent; return e || s }) } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, n) { var r = "pageYOffset" === n; x.fn[t] = function (i) { return x.access(this, function (t, i, o) { var s = qn(t); return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined) }, t, i, arguments.length, null) } }); function qn(e) { return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView } x.each({ Height: "height", Width: "width" }, function (e, t) { x.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) { x.fn[r] = function (r, i) { var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border"); return x.access(this, function (t, n, r) { var i; return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s) }, t, o ? r : undefined, o, null) } }) }), x.fn.size = function () { return this.length }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function () { return x }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x)
})(window);


(function (e) { var t = {}, n = /^(click|mouseover|mouseout|mouseenter|mouseleave|change|)_\w+/i; e.pub = function () { var t = arguments[0], n = [], r = 1; while (r < arguments.length) n.push(arguments[r++]); return n.push(t), e("body").triggerHandler(t, n), e }, e.sub = function () { var t = e.trim(arguments[0]).replace(/\s+/, " "), r = t.split(" "), i = arguments[1]; for (var s = 0; s < r.length; s++) { var o = r[s], u = n.exec(o); u && u.length == 2 ? e("body").on(u[1], u[0].replace(u[1], ".ac"), i) : e("body").on(o, i) } return e } })(jQuery);

typeof window.console == "undefined" && (window.console = {}), typeof window.console.emulated == "undefined" && (typeof window.console.log == "function" ? window.console.hasLog = !0 : (typeof window.console.log == "undefined" && (window.console.log = function () { }), window.console.hasLog = !1), typeof window.console.debug == "function" ? window.console.hasDebug = !0 : (typeof window.console.debug == "undefined" && (window.console.debug = window.console.hasLog ? function () { var e = ["console.debug:"]; for (var t = 0; t < arguments.length; t++)e.push(arguments[t]); window.console.log.apply(window.console, e) } : function () { }), window.console.hasDebug = !1), typeof window.console.warn == "function" ? window.console.hasWarn = !0 : (typeof window.console.warn == "undefined" && (window.console.warn = window.console.hasLog ? function () { var e = ["console.warn:"]; for (var t = 0; t < arguments.length; t++)e.push(arguments[t]); window.console.log.apply(window.console, e) } : function () { }), window.console.hasWarn = !1), typeof window.console.error == "function" ? window.console.hasError = !0 : (typeof window.console.error == "undefined" && (window.console.error = function () { var e = "An error has occured."; if (window.console.hasLog) { var t = ["console.error:"]; for (var n = 0; n < arguments.length; n++)t.push(arguments[n]); window.console.log.apply(window.console, t), e = "An error has occured. More information is available in your browser's javascript console." } for (var n = 0; n < arguments.length; ++n) { if (typeof arguments[n] != "string") break; e += "\n" + arguments[n] } throw typeof Error != "undefined" ? new Error(e) : e }), window.console.hasError = !1), typeof window.console.trace == "function" ? window.console.hasTrace = !0 : (typeof window.console.trace == "undefined" && (window.console.trace = function () { window.console.error("console.trace does not exist") }), window.console.hasTrace = !1), window.console.emulated = !0), function (e) { !e.History && !0 ? (e.History = { options: { debug: !1 }, state: "", $window: null, $iframe: null, handlers: { generic: [], specific: {} }, extractHash: function (e) { var t = e.replace(/^[^#]*#/, "").replace(/^#+|#+$/, ""); return t }, getState: function () { var t = e.History; return t.state }, setState: function (t) { var n = e.History; return t = n.extractHash(t), n.state = t, n.state }, getHash: function () { var t = e.History, n = t.extractHash(window.location.hash || location.hash); return n }, setHash: function (t) { var n = e.History; return t = n.extractHash(t), typeof window.location.hash != "undefined" ? window.location.hash !== t && (window.location.hash = t) : location.hash !== t && (location.hash = t), t }, go: function (t) { var n = e.History; t = n.extractHash(t); var r = n.getHash(), i = n.getState(); return t !== r ? n.setHash(t) : (t !== i && n.setState(t), n.trigger()), !0 }, hashchange: function (t) { var n = e.History, r = n.getHash(); return n.go(r), !0 }, bind: function (t, n) { var r = e.History; return n ? (typeof r.handlers.specific[t] == "undefined" && (r.handlers.specific[t] = []), r.handlers.specific[t].push(n)) : (n = t, r.handlers.generic.push(n)), !0 }, trigger: function (t) { var n = e.History; typeof t == "undefined" && (t = n.getState()); var r, i, s, o; if (typeof n.handlers.specific[t] != "undefined") { o = n.handlers.specific[t]; for (r = 0, i = o.length; r < i; ++r)s = o[r], s(t) } o = n.handlers.generic; for (r = 0, i = o.length; r < i; ++r)s = o[r], s(t); return !0 }, construct: function () { var t = e.History; return e(document).ready(function () { t.domReady() }), !0 }, configure: function (t) { var n = e.History; return n.options = e.extend(n.options, t), !0 }, domReadied: !1, domReady: function () { var t = e.History; if (t.domRedied) return; return t.domRedied = !0, t.$window = e(window), t.$window.bind("hashchange", this.hashchange), setTimeout(t.hashchangeLoader, 200), !0 }, nativeSupport: function (e) { return !0 }, hashchangeLoader: function () { var t = e.History, n = t.nativeSupport(); if (!n) { var r; if (e.browser.msie) { t.$iframe = e('<iframe id="jquery-history-iframe" style="display: none;"></$iframe>').prependTo(document.body)[0], t.$iframe.contentWindow.document.open(), t.$iframe.contentWindow.document.close(); var i = !1; r = function () { var e = t.getHash(), n = t.getState(), r = t.extractHash(t.$iframe.contentWindow.document.location.hash); n !== e ? (i || (t.$iframe.contentWindow.document.open(), t.$iframe.contentWindow.document.close(), t.$iframe.contentWindow.document.location.hash = e), i = !1, t.$window.trigger("hashchange")) : n !== r && (i = !0, t.setHash(r)) } } else r = function () { var e = t.getHash(), n = t.getState(); n !== e && t.$window.trigger("hashchange") }; setInterval(r, 200) } else { var s = t.getHash(); s && t.$window.trigger("hashchange") } return !0 } }, e.History.construct()) : window.console.warn("$.History has already been defined...") }(jQuery);

(function (e, t, n, r) { var i = e(t); e.fn.lazyload = function (s) { function f() { var t = 0; o.each(function () { var n = e(this); if (a.skip_invisible && !n.is(":visible")) return; if (!e.abovethetop(this, a) && !e.leftofbegin(this, a)) if (!e.belowthefold(this, a) && !e.rightoffold(this, a)) n.trigger("appear"), t = 0; else if (++t > a.failure_limit) return !1 }) } var o = this, u, a = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: t, data_attribute: "original", skip_invisible: !0, appear: null, load: null }; return s && (r !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), r !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(a, s)), u = a.container === r || a.container === t ? i : e(a.container), 0 === a.event.indexOf("scroll") && u.bind(a.event, function (e) { return f() }), this.each(function () { var t = this, n = e(t); t.loaded = !1, n.one("appear", function () { if (!this.loaded) { if (a.appear) { var r = o.length; a.appear.call(t, r, a) } e("<img />").bind("load", function () { n.hide().attr("src", n.data(a.data_attribute))[a.effect](a.effect_speed), t.loaded = !0; var r = e.grep(o, function (e) { return !e.loaded }); o = e(r); if (a.load) { var i = o.length; a.load.call(t, i, a) } }).attr("src", n.data(a.data_attribute)) } }), 0 !== a.event.indexOf("scroll") && n.bind(a.event, function (e) { t.loaded || n.trigger("appear") }) }), i.bind("resize", function (e) { f() }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function (t) { t.originalEvent.persisted && o.each(function () { e(this).trigger("appear") }) }), e(n).ready(function () { f() }), this }, e.belowthefold = function (n, s) { var o; return s.container === r || s.container === t ? o = i.height() + i.scrollTop() : o = e(s.container).offset().top + e(s.container).height(), o <= e(n).offset().top - s.threshold }, e.rightoffold = function (n, s) { var o; return s.container === r || s.container === t ? o = i.width() + i.scrollLeft() : o = e(s.container).offset().left + e(s.container).width(), o <= e(n).offset().left - s.threshold }, e.abovethetop = function (n, s) { var o; return s.container === r || s.container === t ? o = i.scrollTop() : o = e(s.container).offset().top, o >= e(n).offset().top + s.threshold + e(n).height() }, e.leftofbegin = function (n, s) { var o; return s.container === r || s.container === t ? o = i.scrollLeft() : o = e(s.container).offset().left, o >= e(n).offset().left + s.threshold + e(n).width() }, e.inviewport = function (t, n) { return !e.rightoffold(t, n) && !e.leftofbegin(t, n) && !e.belowthefold(t, n) && !e.abovethetop(t, n) }, e.extend(e.expr[":"], { "below-the-fold": function (t) { return e.belowthefold(t, { threshold: 0 }) }, "above-the-top": function (t) { return !e.belowthefold(t, { threshold: 0 }) }, "right-of-screen": function (t) { return e.rightoffold(t, { threshold: 0 }) }, "left-of-screen": function (t) { return !e.rightoffold(t, { threshold: 0 }) }, "in-viewport": function (t) { return e.inviewport(t, { threshold: 0 }) }, "above-the-fold": function (t) { return !e.belowthefold(t, { threshold: 0 }) }, "right-of-fold": function (t) { return e.rightoffold(t, { threshold: 0 }) }, "left-of-fold": function (t) { return !e.rightoffold(t, { threshold: 0 }) } }) })(jQuery, window, document);

var Formater = function (e, t) { function r(e) { return this.data = e || {}, this.Store.join("") } function i(e, t) { e && (this.template = e), t && (this.patten = t); if (this.template) { this.Store.length = 0; var n = this.template, r = 0, i = (this.patten.ignoreCase ? "i" : "") + (this.patten.multiline ? "m" : "") + (this.patten.sticky ? "y" : ""), o = RegExp(this.patten.source, i + "g"); while (match = o.exec(n)) { var u = match.index + match[0].length; this.Store.push(n.slice(r, match.index)), r = u, match && this.Store.push(new s(match[1])), match && o.lastIndex === match.index && o.lastIndex++ } r < n.length && this.Store.push(n.slice(r)) } } function s(e) { this.str = e, this.toString = function () { return n.data[this.str] || "" } } this.template = e, this.patten = t || /{([^{}]+)}/gm, this.Store = [], this.data = {}; var n = this; return this.exec = r, this.build = i, this.build(), this };

(function () { "use strict"; function e(e) { function a(i, a) { var l, h, m = i == window, g = a && a.message !== undefined ? a.message : undefined; a = e.extend({}, e.blockUI.defaults, a || {}); if (a.ignoreIfBlocked && e(i).data("blockUI.isBlocked")) return; a.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, a.overlayCSS || {}), l = e.extend({}, e.blockUI.defaults.css, a.css || {}), a.onOverlayClick && (a.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, a.themedCSS || {}), g = g === undefined ? a.message : g, m && o && f(window, { fadeOut: 0 }); if (g && typeof g != "string" && (g.parentNode || g.jquery)) { var y = g.jquery ? g[0] : g, b = {}; e(i).data("blockUI.history", b), b.el = y, b.parent = y.parentNode, b.display = y.style.display, b.position = y.style.position, b.parent && b.parent.removeChild(y) } e(i).data("blockUI.onUnblock", a.onUnblock); var w = a.baseZ, E, S, x, T; n || a.forceIframe ? E = e('<iframe class="blockUI" style="z-index:' + w++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + a.iframeSrc + '"></iframe>') : E = e('<div class="blockUI" style="display:none"></div>'), a.theme ? S = e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + w++ + ';display:none"></div>') : S = e('<div class="blockUI blockOverlay" style="z-index:' + w++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), a.theme && m ? (T = '<div class="blockUI ' + a.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (w + 10) + ';display:none;position:fixed">', a.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>"), T += '<div class="ui-widget-content ui-dialog-content"></div>', T += "</div>") : a.theme ? (T = '<div class="blockUI ' + a.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (w + 10) + ';display:none;position:absolute">', a.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>"), T += '<div class="ui-widget-content ui-dialog-content"></div>', T += "</div>") : m ? T = '<div class="blockUI ' + a.blockMsgClass + ' blockPage" style="z-index:' + (w + 10) + ';display:none;position:fixed"></div>' : T = '<div class="blockUI ' + a.blockMsgClass + ' blockElement" style="z-index:' + (w + 10) + ';display:none;position:absolute"></div>', x = e(T), g && (a.theme ? (x.css(h), x.addClass("ui-widget-content")) : x.css(l)), a.theme || S.css(a.overlayCSS), S.css("position", m ? "fixed" : "absolute"), (n || a.forceIframe) && E.css("opacity", 0); var N = [E, S, x], C = m ? e("body") : e(i); e.each(N, function () { this.appendTo(C) }), a.theme && a.draggable && e.fn.draggable && x.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" }); var k = s && (!e.support.boxModel || e("object,embed", m ? null : i).length > 0); if (r || k) { m && a.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"); if ((r || !e.support.boxModel) && !m) var L = v(i, "borderTopWidth"), A = v(i, "borderLeftWidth"), O = L ? "(0 - " + L + ")" : 0, M = A ? "(0 - " + A + ")" : 0; e.each(N, function (e, t) { var n = t[0].style; n.position = "absolute"; if (e < 2) m ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + a.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"'), m ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"'), M && n.setExpression("left", M), O && n.setExpression("top", O); else if (a.centerY) m && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), n.marginTop = 0; else if (!a.centerY && m) { var r = a.css && a.css.top ? parseInt(a.css.top, 10) : 0, i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"'; n.setExpression("top", i) } }) } g && (a.theme ? x.find(".ui-widget-content").append(g) : x.append(g), (g.jquery || g.nodeType) && e(g).show()), (n || a.forceIframe) && a.showOverlay && E.show(); if (a.fadeIn) { var _ = a.onBlock ? a.onBlock : t, D = a.showOverlay && !g ? _ : t, P = g ? _ : t; a.showOverlay && S._fadeIn(a.fadeIn, D), g && x._fadeIn(a.fadeIn, P) } else a.showOverlay && S.show(), g && x.show(), a.onBlock && a.onBlock(); c(1, i, a), m ? (o = x[0], u = e(a.focusableElements, o), a.focusInput && setTimeout(p, 20)) : d(x[0], a.centerX, a.centerY); if (a.timeout) { var H = setTimeout(function () { m ? e.unblockUI(a) : e(i).unblock(a) }, a.timeout); e(i).data("blockUI.timeout", H) } } function f(t, n) { var r, i = t == window, s = e(t), a = s.data("blockUI.history"), f = s.data("blockUI.timeout"); f && (clearTimeout(f), s.removeData("blockUI.timeout")), n = e.extend({}, e.blockUI.defaults, n || {}), c(0, t, n), n.onUnblock === null && (n.onUnblock = s.data("blockUI.onUnblock"), s.removeData("blockUI.onUnblock")); var h; i ? h = e("body").children().filter(".blockUI").add("body > .blockUI") : h = s.find(">.blockUI"), n.cursorReset && (h.length > 1 && (h[1].style.cursor = n.cursorReset), h.length > 2 && (h[2].style.cursor = n.cursorReset)), i && (o = u = null), n.fadeOut ? (r = h.length, h.stop().fadeOut(n.fadeOut, function () { --r === 0 && l(h, a, n, t) })) : l(h, a, n, t) } function l(t, n, r, i) { var s = e(i); if (s.data("blockUI.isBlocked")) return; t.each(function (e, t) { this.parentNode && this.parentNode.removeChild(this) }), n && n.el && (n.el.style.display = n.display, n.el.style.position = n.position, n.parent && n.parent.appendChild(n.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), typeof r.onUnblock == "function" && r.onUnblock(i, r); var o = e(document.body), u = o.width(), a = o[0].style.width; o.width(u - 1).width(u), o[0].style.width = a } function c(t, n, r) { var i = n == window, s = e(n); if (!t && (i && !o || !i && !s.data("blockUI.isBlocked"))) return; s.data("blockUI.isBlocked", t); if (!i || !r.bindEvents || t && !r.showOverlay) return; var u = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove"; t ? e(document).bind(u, r, h) : e(document).unbind(u, h) } function h(t) { if (t.type === "keydown" && t.keyCode && t.keyCode == 9 && o && t.data.constrainTabKey) { var n = u, r = !t.shiftKey && t.target === n[n.length - 1], i = t.shiftKey && t.target === n[0]; if (r || i) return setTimeout(function () { p(i) }, 10), !1 } var s = t.data, a = e(t.target); return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : a.parents().children().filter("div.blockUI").length === 0 } function p(e) { if (!u) return; var t = u[e === !0 ? u.length - 1 : 0]; t && t.focus() } function d(e, t, n) { var r = e.parentNode, i = e.style, s = (r.offsetWidth - e.offsetWidth) / 2 - v(r, "borderLeftWidth"), o = (r.offsetHeight - e.offsetHeight) / 2 - v(r, "borderTopWidth"); t && (i.left = s > 0 ? s + "px" : "0"), n && (i.top = o > 0 ? o + "px" : "0") } function v(t, n) { return parseInt(e.css(t, n), 10) || 0 } e.fn._fadeIn = e.fn.fadeIn; var t = e.noop || function () { }, n = /MSIE/.test(navigator.userAgent), r = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent), i = document.documentMode || 0, s = e.isFunction(document.createElement("div").style.setExpression); e.blockUI = function (e) { a(window, e) }, e.unblockUI = function (e) { f(window, e) }, e.growlUI = function (t, n, r, i) { var s = e('<div class="growlUI"></div>'); t && s.append("<h1>" + t + "</h1>"), n && s.append("<h2>" + n + "</h2>"), r === undefined && (r = 3e3); var o = function (t) { t = t || {}, e.blockUI({ message: s, fadeIn: typeof t.fadeIn != "undefined" ? t.fadeIn : 700, fadeOut: typeof t.fadeOut != "undefined" ? t.fadeOut : 1e3, timeout: typeof t.timeout != "undefined" ? t.timeout : r, centerY: !1, showOverlay: !1, onUnblock: i, css: e.blockUI.defaults.growlCSS }) }; o(); var u = s.css("opacity"); s.mouseover(function () { o({ fadeIn: 0, timeout: 3e4 }); var t = e(".blockMsg"); t.stop(), t.fadeTo(300, 1) }).mouseout(function () { e(".blockMsg").fadeOut(1e3) }) }, e.fn.block = function (t) { if (this[0] === window) return e.blockUI(t), this; var n = e.extend({}, e.blockUI.defaults, t || {}); return this.each(function () { var t = e(this); if (n.ignoreIfBlocked && t.data("blockUI.isBlocked")) return; t.unblock({ fadeOut: 0 }) }), this.each(function () { e.css(this, "position") == "static" && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, a(this, t) }) }, e.fn.unblock = function (t) { return this[0] === window ? (e.unblockUI(t), this) : this.each(function () { f(this, t) }) }, e.blockUI.version = 2.66, e.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 }; var o = null, u = [] } typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery) })();

(function (e) { function n(n) { var r = e("body").get(0).style.maxWidth == undefined, i = e(window); clearTimeout(t); switch (n.align) { case "left": var s = "0", o = "auto"; break; case "right": var s = "auto", o = "0"; break; default: var s = "50%", o = "auto" }switch (n.valign) { case "top": var u = "0", a = "auto"; break; case "bottom": var u = "auto", a = "0"; break; default: var u = "50%", a = "auto" }n = e.extend({ msg: "请稍候...", title: "", type: "alert", target: undefined, align: "center", valign: "middle", width: r ? "150px" : "auto", minWidth: "0", textAlign: "left", height: "auto", left: s, right: o, top: u, bottom: a, cursor: "auto", border: "0", noCloser: !1, liveTime: "3000", waitTime: "0", preButtons: !1, mask: !0, onAccept: function () { }, onCancel: function () { }, domUpdate: !1, onBlock: function () { }, onClose: function () { } }, n); var f = n.msg, l = !1; if (n.type == "notice" || n.type == "dialog") l = !0; var c = "", h = '<div class="popBox blockUI_' + n.type + '" style="width:' + (i.width() - 40) + 'px">'; n.noCloser || (n.title != "" ? h += '<a href="javascript:void(0);" class="iconClose closeWhite ac_popClose"></a>' : h += '<a href="javascript:void(0);" class="iconClose ac_popClose" style="right:5px; top:5px"></a>'); if (l) switch (n.direction) { case "left": h += '<i class="sharp_r"></i>'; break; case "right": h += '<i class="sharp_l"></i>'; break; case "top": h += '<i class="sharp_b"></i>'; break; case "bottom": h += '<i class="sharp_t"></i>' }n.title != "" && (h += '<div class="popTitle"><div class="popTitleInner"><span>' + n.title + "</span></div></div>"), h += n.title == "" ? '<div class="popMain" style="padding-top:10px; padding-bottom:10px;">' : '<div class="popMain">'; if (typeof n.msg == "string" || typeof n.msg == "number") h += n.msg; else { e("body").append('<div id="pop__Snap" style="display:none;"></div>'); var p = e("#pop__Snap"); p.append(n.msg.clone()), p.find(">*").show(), h += p.html(), p.remove() } h += "</div>", n.preButtons && (h += '<div class="popBtnbox clearfix"><p class="floatright"><button class="btnDefault" type="submit">确定</button><button class="btnGray" type="reset">取消</button></p></div>'), h += "</div>", e("body").append('<div class="blockOpacityBox">' + h + "</div>"); var d = e(".blockOpacityBox .popBox"), v = d.outerWidth(), m = d.outerHeight(); e(".blockOpacityBox").remove(); var g = 0, y = 0; n.align == "center" && (g = -v / 2), n.valign == "middle" && !n.noFixed && (y = -m / 2); var b = n.left, w = n.top; if (l) switch (n.direction) { case "left": b = n.target.offset().left - v - 7, w = n.target.offset().top - (m - n.target.outerHeight()) / 2; break; case "right": b = n.target.offset().left + n.target.outerWidth() + 7, w = n.target.offset().top - (m - n.target.outerHeight()) / 2; break; case "top": b = n.target.offset().left - (v - n.target.outerWidth()) / 2, w = n.target.offset().top - m - 7; break; case "bottom": b = n.target.offset().left - (v - n.target.outerWidth()) / 2, w = n.target.offset().top + n.target.outerHeight() + 7 }return { blockUI_opt: { message: h, css: { width: n.width, left: b, right: n.right, "margin-top": y, "margin-left": g, cursor: n.cursor, border: n.border, top: w, bottom: n.bottom, "min-width": n.minWidth, "text-align": n.textAlign, "z-index": n.zIndex, centerY: !1 }, showOverlay: n.mask, onBlock: function () { function i() { c += t.find(".popMain").html() } var t = e(".blockUI_" + n.type), r = t.closest(".blockMsg"); t.css("height", n.height), r.height() >= e(window).height() && r.css({ position: "absolute", top: e(window).height() / 100, "margin-top": 0 }), e(".blockOverlay").click(function () { e.unblockUI() }), e(".popBox .iconClose").click(function () { i(), e.unblockUI() }), e(".blockUI_" + n.type + ' .popBtnbox button[type="submit"]').click(function () { i(), n.onAccept(), e.unblockUI() }), e(".blockUI_" + n.type + ' .popBtnbox button[type="reset"]').click(function () { i(), n.onCancel(), e.unblockUI() }), n.onBlock(), n.liveTime && setTimeout(function () { i(), e.unblockUI() }, n.liveTime) }, onUnblock: function () { typeof n.msg != "string" && typeof n.msg != "number" && n.domUpdate && f.replaceWith(c), n.onClose() }, waitTime: n.waitTime }, liveTime: n.liveTime, waitTime: n.waitTime, align: n.align, valign: n.valign, direction: n.direction, target: n.target, type: n.type, bindClose: function (t) { var r = e(".blockUI_" + n.type); t ? r.fadeOut("1000", function () { r.remove(), n.onClose() }) : r.find(".ac_popClose").click(function () { r.fadeOut("1000", function () { r.remove(), n.onClose() }) }) }, isIE6: r } } var t = null, r = function (t) { if (t == "alert" || t == "confirm") e.unblockUI(); else if (t == "notice" || t == "dialog") { var n = e(".blockUI_" + t); n.remove() } else e(".popBox").remove(), e.unblockUI() }; e.extend({ alert: function (t, i) { function u() { e.blockUI(o.blockUI_opt) } i = i || {}, typeof t != "string" ? i = t : i.msg = t, r(); var s = { liveTime: null, type: "alert" }; i = e.extend({}, s, i); var o = n(i); setTimeout(u, o.waitTime) }, notice: function (i, s) { s = s || {}, typeof i != "string" ? s = i : s.msg = i; var o = { type: "notice", liveTime: "3000", align: "left", valign: "top", minWidth: "200px", preButtons: !1, target: undefined, mask: !1, direction: "right", zIndex: "999" }; s = e.extend({}, o, s); var u = n(s); r(u.type), e("body").append(u.blockUI_opt.message); var a = e(".blockUI_" + u.type).css(u.blockUI_opt.css).css({ border: "1px solid #ccc", "z-index": u.zIndex }); switch (u.direction) { case "left": a.css({ left: u.target.offset().left - a.outerWidth() - 7, top: u.target.offset().top - (a.outerHeight() - u.target.outerHeight()) / 2 }); break; case "right": a.css({ left: u.target.offset().left + u.target.outerWidth() + 7, top: u.target.offset().top - (a.outerHeight() - u.target.outerHeight()) / 2 }); break; case "top": a.css({ left: u.target.offset().left - (a.outerWidth() - u.target.outerWidth()) / 2, top: u.target.offset().top - a.outerHeight() - 7 }); break; case "bottom": a.css({ left: u.target.offset().left - (a.outerWidth() - u.target.outerWidth()) / 2, top: u.target.offset().top + u.target.outerHeight() + 7 }) }e(".blockUI_" + u.type).find(".popBtnbox button").click(function () { var t = e(this).closest(".popBox"); t.fadeOut(400, function () { t.remove() }) }), u.isIE6 && a.find(".popTitle, .popBtnbox").width(a.width()), u.bindClose(), u.liveTime && (t = setTimeout(function () { u.bindClose(!0) }, u.liveTime)) }, dialog: function (t, n) { n = n || {}, typeof t != "string" ? n = t : n.msg = t; var r = { type: "dialog", direction: "bottom", liveTime: null }; n = e.extend({}, r, n), e.notice(n) }, confirm: function (t, n) { n = n || {}, typeof t != "string" ? n = t : n.msg = t, r(); var i = { type: "confirm", liveTime: null, preButtons: !0, noCloser: !0, msg: "确定要进行此项操作吗？" }; n = e.extend({}, i, n), e.alert(n) } }), e.fn.extend({ notice: function (t, n) { return n = n || {}, typeof t != "string" ? n = t : n.msg = t, n.target = this, e.notice(n), e(this) }, dialog: function (t, n) { return n = n || {}, typeof t != "string" ? n = t : n.msg = t, n.target = this, e.notice(n), e(this) } }), e.UI = e.UI || {}, e.UI.hide = e.UI.hide || r })(jQuery);

(function ($) { $.fn.touchwipe = function (settings) { var config = { min_move_x: 20, min_move_y: 20, wipeLeft: function () { }, wipeRight: function () { }, wipeUp: function () { }, wipeDown: function () { }, preventDefaultEvents: true }; if (settings) $.extend(config, settings); this.each(function () { var startX; var startY; var isMoving = false; function cancelTouch() { this.removeEventListener('touchmove', onTouchMove); startX = null; isMoving = false } function onTouchMove(e) { if (config.preventDefaultEvents) { e.preventDefault() } if (isMoving) { var x = e.touches[0].pageX; var y = e.touches[0].pageY; var dx = startX - x; var dy = startY - y; if (Math.abs(dx) >= config.min_move_x) { cancelTouch(); if (dx > 0) { config.wipeLeft(e) } else { config.wipeRight(e) } } else if (Math.abs(dy) >= config.min_move_y) { cancelTouch(); if (dy > 0) { config.wipeDown(e) } else { config.wipeUp(e) } } } } function onTouchStart(e) { if (e.touches.length == 1) { startX = e.touches[0].pageX; startY = e.touches[0].pageY; isMoving = true; this.addEventListener('touchmove', onTouchMove, false) } } if ('ontouchstart' in document.documentElement) { this.addEventListener('touchstart', onTouchStart, false) } }); return this } })(jQuery);/*  |xGv00|6ff5d46cf0019e763efbeb9aa9bff8cc */



(function (window, document, undefined) {

    "use strict";

    var _html2canvas = {},
        previousElement,
        computedCSS,
        html2canvas;

    _html2canvas.Util = {};

    _html2canvas.Util.log = function (a) {
        if (_html2canvas.logging && window.console && window.console.log) {
            window.console.log(a);
        }
    };

    _html2canvas.Util.trimText = (function (isNative) {
        return function (input) {
            return isNative ? isNative.apply(input) : ((input || '') + '').replace(/^\s+|\s+$/g, '');
        };
    })(String.prototype.trim);

    _html2canvas.Util.asFloat = function (v) {
        return parseFloat(v);
    };

    (function () {
        // TODO: support all possible length values
        var TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
        var TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
        _html2canvas.Util.parseTextShadows = function (value) {
            if (!value || value === 'none') {
                return [];
            }

            // find multiple shadow declarations
            var shadows = value.match(TEXT_SHADOW_PROPERTY),
                results = [];
            for (var i = 0; shadows && (i < shadows.length); i++) {
                var s = shadows[i].match(TEXT_SHADOW_VALUES);
                results.push({
                    color: s[0],
                    offsetX: s[1] ? s[1].replace('px', '') : 0,
                    offsetY: s[2] ? s[2].replace('px', '') : 0,
                    blur: s[3] ? s[3].replace('px', '') : 0
                });
            }
            return results;
        };
    })();


    _html2canvas.Util.parseBackgroundImage = function (value) {
        var whitespace = ' \r\n\t',
            method, definition, prefix, prefix_i, block, results = [],
            c, mode = 0, numParen = 0, quote, args;

        var appendResult = function () {
            if (method) {
                if (definition.substr(0, 1) === '"') {
                    definition = definition.substr(1, definition.length - 2);
                }
                if (definition) {
                    args.push(definition);
                }
                if (method.substr(0, 1) === '-' &&
                    (prefix_i = method.indexOf('-', 1) + 1) > 0) {
                    prefix = method.substr(0, prefix_i);
                    method = method.substr(prefix_i);
                }
                results.push({
                    prefix: prefix,
                    method: method.toLowerCase(),
                    value: block,
                    args: args
                });
            }
            args = []; //for some odd reason, setting .length = 0 didn't work in safari
            method =
                prefix =
                definition =
                block = '';
        };

        appendResult();
        for (var i = 0, ii = value.length; i < ii; i++) {
            c = value[i];
            if (mode === 0 && whitespace.indexOf(c) > -1) {
                continue;
            }
            switch (c) {
                case '"':
                    if (!quote) {
                        quote = c;
                    }
                    else if (quote === c) {
                        quote = null;
                    }
                    break;

                case '(':
                    if (quote) { break; }
                    else if (mode === 0) {
                        mode = 1;
                        block += c;
                        continue;
                    } else {
                        numParen++;
                    }
                    break;

                case ')':
                    if (quote) { break; }
                    else if (mode === 1) {
                        if (numParen === 0) {
                            mode = 0;
                            block += c;
                            appendResult();
                            continue;
                        } else {
                            numParen--;
                        }
                    }
                    break;

                case ',':
                    if (quote) { break; }
                    else if (mode === 0) {
                        appendResult();
                        continue;
                    }
                    else if (mode === 1) {
                        if (numParen === 0 && !method.match(/^url$/i)) {
                            args.push(definition);
                            definition = '';
                            block += c;
                            continue;
                        }
                    }
                    break;
            }

            block += c;
            if (mode === 0) { method += c; }
            else { definition += c; }
        }
        appendResult();

        return results;
    };

    _html2canvas.Util.Bounds = function (element) {
        var clientRect, bounds = {};

        if (element.getBoundingClientRect) {
            clientRect = element.getBoundingClientRect();

            // TODO add scroll position to bounds, so no scrolling of window necessary
            bounds.top = clientRect.top;
            bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
            bounds.left = clientRect.left;

            bounds.width = element.offsetWidth;
            bounds.height = element.offsetHeight;
        }

        return bounds;
    };

    // TODO ideally, we'd want everything to go through this function instead of Util.Bounds,
    // but would require further work to calculate the correct positions for elements with offsetParents
    _html2canvas.Util.OffsetBounds = function (element) {
        var parent = element.offsetParent ? _html2canvas.Util.OffsetBounds(element.offsetParent) : { top: 0, left: 0 };

        return {
            top: element.offsetTop + parent.top,
            bottom: element.offsetTop + element.offsetHeight + parent.top,
            left: element.offsetLeft + parent.left,
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };

    function toPX(element, attribute, value) {
        var rsLeft = element.runtimeStyle && element.runtimeStyle[attribute],
            left,
            style = element.style;

        // Check if we are not dealing with pixels, (Opera has issues with this)
        // Ported from jQuery css.js
        // From the awesome hack by Dean Edwards
        // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

        // If we're not dealing with a regular pixel number
        // but a number that has a weird ending, we need to convert it to pixels

        if (!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(value) && /^-?\d/.test(value)) {
            // Remember the original values
            left = style.left;

            // Put in the new values to get a computed value out
            if (rsLeft) {
                element.runtimeStyle.left = element.currentStyle.left;
            }
            style.left = attribute === "fontSize" ? "1em" : (value || 0);
            value = style.pixelLeft + "px";

            // Revert the changed values
            style.left = left;
            if (rsLeft) {
                element.runtimeStyle.left = rsLeft;
            }
        }

        if (!/^(thin|medium|thick)$/i.test(value)) {
            return Math.round(parseFloat(value)) + "px";
        }

        return value;
    }

    function asInt(val) {
        return parseInt(val, 10);
    }

    function parseBackgroundSizePosition(value, element, attribute, index) {
        value = (value || '').split(',');
        value = value[index || 0] || value[0] || 'auto';
        value = _html2canvas.Util.trimText(value).split(' ');

        if (attribute === 'backgroundSize' && (!value[0] || value[0].match(/cover|contain|auto/))) {
            //these values will be handled in the parent function
        } else {
            value[0] = (value[0].indexOf("%") === -1) ? toPX(element, attribute + "X", value[0]) : value[0];
            if (value[1] === undefined) {
                if (attribute === 'backgroundSize') {
                    value[1] = 'auto';
                    return value;
                } else {
                    // IE 9 doesn't return double digit always
                    value[1] = value[0];
                }
            }
            value[1] = (value[1].indexOf("%") === -1) ? toPX(element, attribute + "Y", value[1]) : value[1];
        }
        return value;
    }

    _html2canvas.Util.getCSS = function (element, attribute, index) {
        if (previousElement !== element) {
            computedCSS = document.defaultView.getComputedStyle(element, null);
        }

        var value = computedCSS[attribute];

        if (/^background(Size|Position)$/.test(attribute)) {
            return parseBackgroundSizePosition(value, element, attribute, index);
        } else if (/border(Top|Bottom)(Left|Right)Radius/.test(attribute)) {
            var arr = value.split(" ");
            if (arr.length <= 1) {
                arr[1] = arr[0];
            }
            return arr.map(asInt);
        }

        return value;
    };

    _html2canvas.Util.resizeBounds = function (current_width, current_height, target_width, target_height, stretch_mode) {
        var target_ratio = target_width / target_height,
            current_ratio = current_width / current_height,
            output_width, output_height;

        if (!stretch_mode || stretch_mode === 'auto') {
            output_width = target_width;
            output_height = target_height;
        } else if (target_ratio < current_ratio ^ stretch_mode === 'contain') {
            output_height = target_height;
            output_width = target_height * current_ratio;
        } else {
            output_width = target_width;
            output_height = target_width / current_ratio;
        }

        return {
            width: output_width,
            height: output_height
        };
    };

    function backgroundBoundsFactory(prop, el, bounds, image, imageIndex, backgroundSize) {
        var bgposition = _html2canvas.Util.getCSS(el, prop, imageIndex),
            topPos,
            left,
            percentage,
            val;

        if (bgposition.length === 1) {
            val = bgposition[0];

            bgposition = [];

            bgposition[0] = val;
            bgposition[1] = val;
        }

        if (bgposition[0].toString().indexOf("%") !== -1) {
            percentage = (parseFloat(bgposition[0]) / 100);
            left = bounds.width * percentage;
            if (prop !== 'backgroundSize') {
                left -= (backgroundSize || image).width * percentage;
            }
        } else {
            if (prop === 'backgroundSize') {
                if (bgposition[0] === 'auto') {
                    left = image.width;
                } else {
                    if (/contain|cover/.test(bgposition[0])) {
                        var resized = _html2canvas.Util.resizeBounds(image.width, image.height, bounds.width, bounds.height, bgposition[0]);
                        left = resized.width;
                        topPos = resized.height;
                    } else {
                        left = parseInt(bgposition[0], 10);
                    }
                }
            } else {
                left = parseInt(bgposition[0], 10);
            }
        }


        if (bgposition[1] === 'auto') {
            topPos = left / image.width * image.height;
        } else if (bgposition[1].toString().indexOf("%") !== -1) {
            percentage = (parseFloat(bgposition[1]) / 100);
            topPos = bounds.height * percentage;
            if (prop !== 'backgroundSize') {
                topPos -= (backgroundSize || image).height * percentage;
            }

        } else {
            topPos = parseInt(bgposition[1], 10);
        }

        return [left, topPos];
    }

    _html2canvas.Util.BackgroundPosition = function (el, bounds, image, imageIndex, backgroundSize) {
        var result = backgroundBoundsFactory('backgroundPosition', el, bounds, image, imageIndex, backgroundSize);
        return { left: result[0], top: result[1] };
    };

    _html2canvas.Util.BackgroundSize = function (el, bounds, image, imageIndex) {
        var result = backgroundBoundsFactory('backgroundSize', el, bounds, image, imageIndex);
        return { width: result[0], height: result[1] };
    };

    _html2canvas.Util.Extend = function (options, defaults) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                defaults[key] = options[key];
            }
        }
        return defaults;
    };


    /*
     * Derived from jQuery.contents()
     * Copyright 2010, John Resig
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://jquery.org/license
     */
    _html2canvas.Util.Children = function (elem) {
        var children;
        try {
            children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ? elem.contentDocument || elem.contentWindow.document : (function (array) {
                var ret = [];
                if (array !== null) {
                    (function (first, second) {
                        var i = first.length,
                            j = 0;

                        if (typeof second.length === "number") {
                            for (var l = second.length; j < l; j++) {
                                first[i++] = second[j];
                            }
                        } else {
                            while (second[j] !== undefined) {
                                first[i++] = second[j++];
                            }
                        }

                        first.length = i;

                        return first;
                    })(ret, array);
                }
                return ret;
            })(elem.childNodes);

        } catch (ex) {
            _html2canvas.Util.log("html2canvas.Util.Children failed with exception: " + ex.message);
            children = [];
        }
        return children;
    };

    _html2canvas.Util.isTransparent = function (backgroundColor) {
        return (backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)");
    };
    _html2canvas.Util.Font = (function () {

        var fontData = {};

        return function (font, fontSize, doc) {
            if (fontData[font + "-" + fontSize] !== undefined) {
                return fontData[font + "-" + fontSize];
            }

            var container = doc.createElement('div'),
                img = doc.createElement('img'),
                span = doc.createElement('span'),
                sampleText = 'Hidden Text',
                baseline,
                middle,
                metricsObj;

            container.style.visibility = "hidden";
            container.style.fontFamily = font;
            container.style.fontSize = fontSize;
            container.style.margin = 0;
            container.style.padding = 0;

            doc.body.appendChild(container);

            // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
            img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
            img.width = 1;
            img.height = 1;

            img.style.margin = 0;
            img.style.padding = 0;
            img.style.verticalAlign = "baseline";

            span.style.fontFamily = font;
            span.style.fontSize = fontSize;
            span.style.margin = 0;
            span.style.padding = 0;

            span.appendChild(doc.createTextNode(sampleText));
            container.appendChild(span);
            container.appendChild(img);
            baseline = (img.offsetTop - span.offsetTop) + 1;

            container.removeChild(span);
            container.appendChild(doc.createTextNode(sampleText));

            container.style.lineHeight = "normal";
            img.style.verticalAlign = "super";

            middle = (img.offsetTop - container.offsetTop) + 1;
            metricsObj = {
                baseline: baseline,
                lineWidth: 1,
                middle: middle
            };

            fontData[font + "-" + fontSize] = metricsObj;

            doc.body.removeChild(container);

            return metricsObj;
        };
    })();

    (function () {
        var Util = _html2canvas.Util,
            Generate = {};

        _html2canvas.Generate = Generate;

        var reGradients = [
            /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
            /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
            /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
            /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
            /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,
            /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,
            /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
        ];

        /*
         * TODO: Add IE10 vendor prefix (-ms) support
         * TODO: Add W3C gradient (linear-gradient) support
         * TODO: Add old Webkit -webkit-gradient(radial, ...) support
         * TODO: Maybe some RegExp optimizations are possible ;o)
         */
        Generate.parseGradient = function (css, bounds) {
            var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3, tl, tr, br, bl;

            for (i = 0; i < len; i += 1) {
                m1 = css.match(reGradients[i]);
                if (m1) {
                    break;
                }
            }

            if (m1) {
                switch (m1[1]) {
                    case '-webkit-linear-gradient':
                    case '-o-linear-gradient':

                        gradient = {
                            type: 'linear',
                            x0: null,
                            y0: null,
                            x1: null,
                            y1: null,
                            colorStops: []
                        };

                        // get coordinates
                        m2 = m1[2].match(/\w+/g);
                        if (m2) {
                            m2Len = m2.length;
                            for (i = 0; i < m2Len; i += 1) {
                                switch (m2[i]) {
                                    case 'top':
                                        gradient.y0 = 0;
                                        gradient.y1 = bounds.height;
                                        break;

                                    case 'right':
                                        gradient.x0 = bounds.width;
                                        gradient.x1 = 0;
                                        break;

                                    case 'bottom':
                                        gradient.y0 = bounds.height;
                                        gradient.y1 = 0;
                                        break;

                                    case 'left':
                                        gradient.x0 = 0;
                                        gradient.x1 = bounds.width;
                                        break;
                                }
                            }
                        }
                        if (gradient.x0 === null && gradient.x1 === null) { // center
                            gradient.x0 = gradient.x1 = bounds.width / 2;
                        }
                        if (gradient.y0 === null && gradient.y1 === null) { // center
                            gradient.y0 = gradient.y1 = bounds.height / 2;
                        }

                        // get colors and stops
                        m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
                        if (m2) {
                            m2Len = m2.length;
                            step = 1 / Math.max(m2Len - 1, 1);
                            for (i = 0; i < m2Len; i += 1) {
                                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
                                if (m3[2]) {
                                    stop = parseFloat(m3[2]);
                                    if (m3[3] === '%') {
                                        stop /= 100;
                                    } else { // px - stupid opera
                                        stop /= bounds.width;
                                    }
                                } else {
                                    stop = i * step;
                                }
                                gradient.colorStops.push({
                                    color: m3[1],
                                    stop: stop
                                });
                            }
                        }
                        break;

                    case '-webkit-gradient':

                        gradient = {
                            type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
                            x0: 0,
                            y0: 0,
                            x1: 0,
                            y1: 0,
                            colorStops: []
                        };

                        // get coordinates
                        m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
                        if (m2) {
                            gradient.x0 = (m2[1] * bounds.width) / 100;
                            gradient.y0 = (m2[2] * bounds.height) / 100;
                            gradient.x1 = (m2[3] * bounds.width) / 100;
                            gradient.y1 = (m2[4] * bounds.height) / 100;
                        }

                        // get colors and stops
                        m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
                        if (m2) {
                            m2Len = m2.length;
                            for (i = 0; i < m2Len; i += 1) {
                                m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
                                stop = parseFloat(m3[2]);
                                if (m3[1] === 'from') {
                                    stop = 0.0;
                                }
                                if (m3[1] === 'to') {
                                    stop = 1.0;
                                }
                                gradient.colorStops.push({
                                    color: m3[3],
                                    stop: stop
                                });
                            }
                        }
                        break;

                    case '-moz-linear-gradient':

                        gradient = {
                            type: 'linear',
                            x0: 0,
                            y0: 0,
                            x1: 0,
                            y1: 0,
                            colorStops: []
                        };

                        // get coordinates
                        m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

                        // m2[1] == 0%   -> left
                        // m2[1] == 50%  -> center
                        // m2[1] == 100% -> right

                        // m2[2] == 0%   -> top
                        // m2[2] == 50%  -> center
                        // m2[2] == 100% -> bottom

                        if (m2) {
                            gradient.x0 = (m2[1] * bounds.width) / 100;
                            gradient.y0 = (m2[2] * bounds.height) / 100;
                            gradient.x1 = bounds.width - gradient.x0;
                            gradient.y1 = bounds.height - gradient.y0;
                        }

                        // get colors and stops
                        m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
                        if (m2) {
                            m2Len = m2.length;
                            step = 1 / Math.max(m2Len - 1, 1);
                            for (i = 0; i < m2Len; i += 1) {
                                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
                                if (m3[2]) {
                                    stop = parseFloat(m3[2]);
                                    if (m3[3]) { // percentage
                                        stop /= 100;
                                    }
                                } else {
                                    stop = i * step;
                                }
                                gradient.colorStops.push({
                                    color: m3[1],
                                    stop: stop
                                });
                            }
                        }
                        break;

                    case '-webkit-radial-gradient':
                    case '-moz-radial-gradient':
                    case '-o-radial-gradient':

                        gradient = {
                            type: 'circle',
                            x0: 0,
                            y0: 0,
                            x1: bounds.width,
                            y1: bounds.height,
                            cx: 0,
                            cy: 0,
                            rx: 0,
                            ry: 0,
                            colorStops: []
                        };

                        // center
                        m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
                        if (m2) {
                            gradient.cx = (m2[1] * bounds.width) / 100;
                            gradient.cy = (m2[2] * bounds.height) / 100;
                        }

                        // size
                        m2 = m1[3].match(/\w+/);
                        m3 = m1[4].match(/[a-z\-]*/);
                        if (m2 && m3) {
                            switch (m3[0]) {
                                case 'farthest-corner':
                                case 'cover': // is equivalent to farthest-corner
                                case '': // mozilla removes "cover" from definition :(
                                    tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                                    tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                                    br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                                    bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                                    gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                                    break;
                                case 'closest-corner':
                                    tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                                    tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                                    br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                                    bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                                    gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                                    break;
                                case 'farthest-side':
                                    if (m2[0] === 'circle') {
                                        gradient.rx = gradient.ry = Math.max(
                                            gradient.cx,
                                            gradient.cy,
                                            gradient.x1 - gradient.cx,
                                            gradient.y1 - gradient.cy
                                        );
                                    } else { // ellipse

                                        gradient.type = m2[0];

                                        gradient.rx = Math.max(
                                            gradient.cx,
                                            gradient.x1 - gradient.cx
                                        );
                                        gradient.ry = Math.max(
                                            gradient.cy,
                                            gradient.y1 - gradient.cy
                                        );
                                    }
                                    break;
                                case 'closest-side':
                                case 'contain': // is equivalent to closest-side
                                    if (m2[0] === 'circle') {
                                        gradient.rx = gradient.ry = Math.min(
                                            gradient.cx,
                                            gradient.cy,
                                            gradient.x1 - gradient.cx,
                                            gradient.y1 - gradient.cy
                                        );
                                    } else { // ellipse

                                        gradient.type = m2[0];

                                        gradient.rx = Math.min(
                                            gradient.cx,
                                            gradient.x1 - gradient.cx
                                        );
                                        gradient.ry = Math.min(
                                            gradient.cy,
                                            gradient.y1 - gradient.cy
                                        );
                                    }
                                    break;

                                // TODO: add support for "30px 40px" sizes (webkit only)
                            }
                        }

                        // color stops
                        m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
                        if (m2) {
                            m2Len = m2.length;
                            step = 1 / Math.max(m2Len - 1, 1);
                            for (i = 0; i < m2Len; i += 1) {
                                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
                                if (m3[2]) {
                                    stop = parseFloat(m3[2]);
                                    if (m3[3] === '%') {
                                        stop /= 100;
                                    } else { // px - stupid opera
                                        stop /= bounds.width;
                                    }
                                } else {
                                    stop = i * step;
                                }
                                gradient.colorStops.push({
                                    color: m3[1],
                                    stop: stop
                                });
                            }
                        }
                        break;
                }
            }

            return gradient;
        };

        function addScrollStops(grad) {
            return function (colorStop) {
                try {
                    grad.addColorStop(colorStop.stop, colorStop.color);
                }
                catch (e) {
                    Util.log(['failed to add color stop: ', e, '; tried to add: ', colorStop]);
                }
            };
        }

        Generate.Gradient = function (src, bounds) {
            if (bounds.width === 0 || bounds.height === 0) {
                return;
            }

            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d'),
                gradient, grad;

            canvas.width = bounds.width;
            canvas.height = bounds.height;

            // TODO: add support for multi defined background gradients
            gradient = _html2canvas.Generate.parseGradient(src, bounds);

            if (gradient) {
                switch (gradient.type) {
                    case 'linear':
                        grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);
                        gradient.colorStops.forEach(addScrollStops(grad));
                        ctx.fillStyle = grad;
                        ctx.fillRect(0, 0, bounds.width, bounds.height);
                        break;

                    case 'circle':
                        grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);
                        gradient.colorStops.forEach(addScrollStops(grad));
                        ctx.fillStyle = grad;
                        ctx.fillRect(0, 0, bounds.width, bounds.height);
                        break;

                    case 'ellipse':
                        var canvasRadial = document.createElement('canvas'),
                            ctxRadial = canvasRadial.getContext('2d'),
                            ri = Math.max(gradient.rx, gradient.ry),
                            di = ri * 2;

                        canvasRadial.width = canvasRadial.height = di;

                        grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);
                        gradient.colorStops.forEach(addScrollStops(grad));

                        ctxRadial.fillStyle = grad;
                        ctxRadial.fillRect(0, 0, di, di);

                        ctx.fillStyle = gradient.colorStops[gradient.colorStops.length - 1].color;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);
                        break;
                }
            }

            return canvas;
        };

        Generate.ListAlpha = function (number) {
            var tmp = "",
                modulus;

            do {
                modulus = number % 26;
                tmp = String.fromCharCode((modulus) + 64) + tmp;
                number = number / 26;
            } while ((number * 26) > 26);

            return tmp;
        };

        Generate.ListRoman = function (number) {
            var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
                decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                roman = "",
                v,
                len = romanArray.length;

            if (number <= 0 || number >= 4000) {
                return number;
            }

            for (v = 0; v < len; v += 1) {
                while (number >= decimal[v]) {
                    number -= decimal[v];
                    roman += romanArray[v];
                }
            }

            return roman;
        };
    })();
    function h2cRenderContext(width, height) {
        var storage = [];
        return {
            storage: storage,
            width: width,
            height: height,
            clip: function () {
                storage.push({
                    type: "function",
                    name: "clip",
                    'arguments': arguments
                });
            },
            translate: function () {
                storage.push({
                    type: "function",
                    name: "translate",
                    'arguments': arguments
                });
            },
            fill: function () {
                storage.push({
                    type: "function",
                    name: "fill",
                    'arguments': arguments
                });
            },
            save: function () {
                storage.push({
                    type: "function",
                    name: "save",
                    'arguments': arguments
                });
            },
            restore: function () {
                storage.push({
                    type: "function",
                    name: "restore",
                    'arguments': arguments
                });
            },
            fillRect: function () {
                storage.push({
                    type: "function",
                    name: "fillRect",
                    'arguments': arguments
                });
            },
            createPattern: function () {
                storage.push({
                    type: "function",
                    name: "createPattern",
                    'arguments': arguments
                });
            },
            drawShape: function () {

                var shape = [];

                storage.push({
                    type: "function",
                    name: "drawShape",
                    'arguments': shape
                });

                return {
                    moveTo: function () {
                        shape.push({
                            name: "moveTo",
                            'arguments': arguments
                        });
                    },
                    lineTo: function () {
                        shape.push({
                            name: "lineTo",
                            'arguments': arguments
                        });
                    },
                    arcTo: function () {
                        shape.push({
                            name: "arcTo",
                            'arguments': arguments
                        });
                    },
                    bezierCurveTo: function () {
                        shape.push({
                            name: "bezierCurveTo",
                            'arguments': arguments
                        });
                    },
                    quadraticCurveTo: function () {
                        shape.push({
                            name: "quadraticCurveTo",
                            'arguments': arguments
                        });
                    }
                };

            },
            drawImage: function () {
                storage.push({
                    type: "function",
                    name: "drawImage",
                    'arguments': arguments
                });
            },
            fillText: function () {
                storage.push({
                    type: "function",
                    name: "fillText",
                    'arguments': arguments
                });
            },
            setVariable: function (variable, value) {
                storage.push({
                    type: "variable",
                    name: variable,
                    'arguments': value
                });
                return value;
            }
        };
    }
    _html2canvas.Parse = function (images, options) {
        window.scroll(0, 0);

        var element = ((options.elements === undefined) ? document.body : options.elements[0]), // select body by default
            numDraws = 0,
            doc = element.ownerDocument,
            Util = _html2canvas.Util,
            support = Util.Support(options, doc),
            ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
            body = doc.body,
            getCSS = Util.getCSS,
            pseudoHide = "___html2canvas___pseudoelement",
            hidePseudoElements = doc.createElement('style');

        hidePseudoElements.innerHTML = '.' + pseudoHide + '-before:before { content: "" !important; display: none !important; }' +
            '.' + pseudoHide + '-after:after { content: "" !important; display: none !important; }';

        body.appendChild(hidePseudoElements);

        images = images || {};

        function documentWidth() {
            return Math.max(
                Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
                Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
                Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
            );
        }

        function documentHeight() {
            return Math.max(
                Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
                Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
                Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
            );
        }

        function getCSSInt(element, attribute) {
            var val = parseInt(getCSS(element, attribute), 10);
            return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
        }

        function renderRect(ctx, x, y, w, h, bgcolor) {
            if (bgcolor !== "transparent") {
                ctx.setVariable("fillStyle", bgcolor);
                ctx.fillRect(x, y, w, h);
                numDraws += 1;
            }
        }

        function capitalize(m, p1, p2) {
            if (m.length > 0) {
                return p1 + p2.toUpperCase();
            }
        }

        function textTransform(text, transform) {
            switch (transform) {
                case "lowercase":
                    return text.toLowerCase();
                case "capitalize":
                    return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, capitalize);
                case "uppercase":
                    return text.toUpperCase();
                default:
                    return text;
            }
        }

        function noLetterSpacing(letter_spacing) {
            return (/^(normal|none|0px)$/.test(letter_spacing));
        }

        function drawText(currentText, x, y, ctx) {
            if (currentText !== null && Util.trimText(currentText).length > 0) {
                ctx.fillText(currentText, x, y);
                numDraws += 1;
            }
        }

        function setTextVariables(ctx, el, text_decoration, color) {
            var align = false,
                bold = getCSS(el, "fontWeight"),
                family = getCSS(el, "fontFamily"),
                size = getCSS(el, "fontSize"),
                shadows = Util.parseTextShadows(getCSS(el, "textShadow"));

            switch (parseInt(bold, 10)) {
                case 401:
                    bold = "bold";
                    break;
                case 400:
                    bold = "normal";
                    break;
            }

            ctx.setVariable("fillStyle", color);
            ctx.setVariable("font", [getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family].join(" "));
            ctx.setVariable("textAlign", (align) ? "right" : "left");

            if (shadows.length) {
                // TODO: support multiple text shadows
                // apply the first text shadow
                ctx.setVariable("shadowColor", shadows[0].color);
                ctx.setVariable("shadowOffsetX", shadows[0].offsetX);
                ctx.setVariable("shadowOffsetY", shadows[0].offsetY);
                ctx.setVariable("shadowBlur", shadows[0].blur);
            }

            if (text_decoration !== "none") {
                return Util.Font(family, size, doc);
            }
        }

        function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
            switch (text_decoration) {
                case "underline":
                    // Draws a line at the baseline of the font
                    // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
                    renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
                    break;
                case "overline":
                    renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
                    break;
                case "line-through":
                    // TODO try and find exact position for line-through
                    renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
                    break;
            }
        }

        function getTextBounds(state, text, textDecoration, isLast, transform) {
            var bounds;
            if (support.rangeBounds && !transform) {
                if (textDecoration !== "none" || Util.trimText(text).length !== 0) {
                    bounds = textRangeBounds(text, state.node, state.textOffset);
                }
                state.textOffset += text.length;
            } else if (state.node && typeof state.node.nodeValue === "string") {
                var newTextNode = (isLast) ? state.node.splitText(text.length) : null;
                bounds = textWrapperBounds(state.node, transform);
                state.node = newTextNode;
            }
            return bounds;
        }

        function textRangeBounds(text, textNode, textOffset) {
            var range = doc.createRange();
            range.setStart(textNode, textOffset);
            range.setEnd(textNode, textOffset + text.length);
            return range.getBoundingClientRect();
        }

        function textWrapperBounds(oldTextNode, transform) {
            var parent = oldTextNode.parentNode,
                wrapElement = doc.createElement('wrapper'),
                backupText = oldTextNode.cloneNode(true);

            wrapElement.appendChild(oldTextNode.cloneNode(true));
            parent.replaceChild(wrapElement, oldTextNode);

            var bounds = transform ? Util.OffsetBounds(wrapElement) : Util.Bounds(wrapElement);
            parent.replaceChild(backupText, wrapElement);
            return bounds;
        }

        function renderText(el, textNode, stack) {
            var ctx = stack.ctx,
                color = getCSS(el, "color"),
                textDecoration = getCSS(el, "textDecoration"),
                textAlign = getCSS(el, "textAlign"),
                metrics,
                textList,
                state = {
                    node: textNode,
                    textOffset: 0
                };

            if (Util.trimText(textNode.nodeValue).length > 0) {
                textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
                textAlign = textAlign.replace(["-webkit-auto"], ["auto"]);

                textList = (!options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing"))) ?
                    textNode.nodeValue.split(/(\b| )/)
                    : textNode.nodeValue.split("");

                metrics = setTextVariables(ctx, el, textDecoration, color);

                if (options.chinese) {
                    textList.forEach(function (word, index) {
                        if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
                            word = word.split("");
                            word.unshift(index, 1);
                            textList.splice.apply(textList, word);
                        }
                    });
                }

                textList.forEach(function (text, index) {
                    var bounds = getTextBounds(state, text, textDecoration, (index < textList.length - 1), stack.transform.matrix);
                    if (bounds) {
                        drawText(text, bounds.left, bounds.bottom, ctx);
                        renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
                    }
                });
            }
        }

        function listPosition(element, val) {
            var boundElement = doc.createElement("boundelement"),
                originalType,
                bounds;

            boundElement.style.display = "inline";

            originalType = element.style.listStyleType;
            element.style.listStyleType = "none";

            boundElement.appendChild(doc.createTextNode(val));

            element.insertBefore(boundElement, element.firstChild);

            bounds = Util.Bounds(boundElement);
            element.removeChild(boundElement);
            element.style.listStyleType = originalType;
            return bounds;
        }

        function elementIndex(el) {
            var i = -1,
                count = 1,
                childs = el.parentNode.childNodes;

            if (el.parentNode) {
                while (childs[++i] !== el) {
                    if (childs[i].nodeType === 1) {
                        count++;
                    }
                }
                return count;
            } else {
                return -1;
            }
        }

        function listItemText(element, type) {
            var currentIndex = elementIndex(element), text;
            switch (type) {
                case "decimal":
                    text = currentIndex;
                    break;
                case "decimal-leading-zero":
                    text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
                    break;
                case "upper-roman":
                    text = _html2canvas.Generate.ListRoman(currentIndex);
                    break;
                case "lower-roman":
                    text = _html2canvas.Generate.ListRoman(currentIndex).toLowerCase();
                    break;
                case "lower-alpha":
                    text = _html2canvas.Generate.ListAlpha(currentIndex).toLowerCase();
                    break;
                case "upper-alpha":
                    text = _html2canvas.Generate.ListAlpha(currentIndex);
                    break;
            }

            return text + ". ";
        }

        function renderListItem(element, stack, elBounds) {
            var x,
                text,
                ctx = stack.ctx,
                type = getCSS(element, "listStyleType"),
                listBounds;

            if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
                text = listItemText(element, type);
                listBounds = listPosition(element, text);
                setTextVariables(ctx, element, "none", getCSS(element, "color"));

                if (getCSS(element, "listStylePosition") === "inside") {
                    ctx.setVariable("textAlign", "left");
                    x = elBounds.left;
                } else {
                    return;
                }

                drawText(text, x, listBounds.bottom, ctx);
            }
        }

        function loadImage(src) {
            var img = images[src];
            return (img && img.succeeded === true) ? img.img : false;
        }

        function clipBounds(src, dst) {
            var x = Math.max(src.left, dst.left),
                y = Math.max(src.top, dst.top),
                x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
                y2 = Math.min((src.top + src.height), (dst.top + dst.height));

            return {
                left: x,
                top: y,
                width: x2 - x,
                height: y2 - y
            };
        }

        function setZ(element, stack, parentStack) {
            var newContext,
                isPositioned = stack.cssPosition !== 'static',
                zIndex = isPositioned ? getCSS(element, 'zIndex') : 'auto',
                opacity = getCSS(element, 'opacity'),
                isFloated = getCSS(element, 'cssFloat') !== 'none';

            // https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
            // When a new stacking context should be created:
            // the root element (HTML),
            // positioned (absolutely or relatively) with a z-index value other than "auto",
            // elements with an opacity value less than 1. (See the specification for opacity),
            // on mobile WebKit and Chrome 22+, position: fixed always creates a new stacking context, even when z-index is "auto" (See this post)

            stack.zIndex = newContext = h2czContext(zIndex);
            newContext.isPositioned = isPositioned;
            newContext.isFloated = isFloated;
            newContext.opacity = opacity;
            newContext.ownStacking = (zIndex !== 'auto' || opacity < 1);

            if (parentStack) {
                parentStack.zIndex.children.push(stack);
            }
        }

        function renderImage(ctx, element, image, bounds, borders) {

            var paddingLeft = getCSSInt(element, 'paddingLeft'),
                paddingTop = getCSSInt(element, 'paddingTop'),
                paddingRight = getCSSInt(element, 'paddingRight'),
                paddingBottom = getCSSInt(element, 'paddingBottom');

            drawImage(
                ctx,
                image,
                0, //sx
                0, //sy
                image.width, //sw
                image.height, //sh
                bounds.left + paddingLeft + borders[3].width, //dx
                bounds.top + paddingTop + borders[0].width, // dy
                bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
                bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
            );
        }

        function getBorderData(element) {
            return ["Top", "Right", "Bottom", "Left"].map(function (side) {
                return {
                    width: getCSSInt(element, 'border' + side + 'Width'),
                    color: getCSS(element, 'border' + side + 'Color')
                };
            });
        }

        function getBorderRadiusData(element) {
            return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (side) {
                return getCSS(element, 'border' + side + 'Radius');
            });
        }

        var getCurvePoints = (function (kappa) {

            return function (x, y, r1, r2) {
                var ox = (r1) * kappa, // control point offset horizontal
                    oy = (r2) * kappa, // control point offset vertical
                    xm = x + r1, // x-middle
                    ym = y + r2; // y-middle
                return {
                    topLeft: bezierCurve({
                        x: x,
                        y: ym
                    }, {
                            x: x,
                            y: ym - oy
                        }, {
                            x: xm - ox,
                            y: y
                        }, {
                            x: xm,
                            y: y
                        }),
                    topRight: bezierCurve({
                        x: x,
                        y: y
                    }, {
                            x: x + ox,
                            y: y
                        }, {
                            x: xm,
                            y: ym - oy
                        }, {
                            x: xm,
                            y: ym
                        }),
                    bottomRight: bezierCurve({
                        x: xm,
                        y: y
                    }, {
                            x: xm,
                            y: y + oy
                        }, {
                            x: x + ox,
                            y: ym
                        }, {
                            x: x,
                            y: ym
                        }),
                    bottomLeft: bezierCurve({
                        x: xm,
                        y: ym
                    }, {
                            x: xm - ox,
                            y: ym
                        }, {
                            x: x,
                            y: y + oy
                        }, {
                            x: x,
                            y: y
                        })
                };
            };
        })(4 * ((Math.sqrt(2) - 1) / 3));

        function bezierCurve(start, startControl, endControl, end) {

            var lerp = function (a, b, t) {
                return {
                    x: a.x + (b.x - a.x) * t,
                    y: a.y + (b.y - a.y) * t
                };
            };

            return {
                start: start,
                startControl: startControl,
                endControl: endControl,
                end: end,
                subdivide: function (t) {
                    var ab = lerp(start, startControl, t),
                        bc = lerp(startControl, endControl, t),
                        cd = lerp(endControl, end, t),
                        abbc = lerp(ab, bc, t),
                        bccd = lerp(bc, cd, t),
                        dest = lerp(abbc, bccd, t);
                    return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
                },
                curveTo: function (borderArgs) {
                    borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
                },
                curveToReversed: function (borderArgs) {
                    borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
                }
            };
        }

        function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
            if (radius1[0] > 0 || radius1[1] > 0) {
                borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
                corner1[0].curveTo(borderArgs);
                corner1[1].curveTo(borderArgs);
            } else {
                borderArgs.push(["line", x, y]);
            }

            if (radius2[0] > 0 || radius2[1] > 0) {
                borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
            }
        }

        function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
            var borderArgs = [];

            if (radius1[0] > 0 || radius1[1] > 0) {
                borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
                outer1[1].curveTo(borderArgs);
            } else {
                borderArgs.push(["line", borderData.c1[0], borderData.c1[1]]);
            }

            if (radius2[0] > 0 || radius2[1] > 0) {
                borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
                outer2[0].curveTo(borderArgs);
                borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
                inner2[0].curveToReversed(borderArgs);
            } else {
                borderArgs.push(["line", borderData.c2[0], borderData.c2[1]]);
                borderArgs.push(["line", borderData.c3[0], borderData.c3[1]]);
            }

            if (radius1[0] > 0 || radius1[1] > 0) {
                borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
                inner1[1].curveToReversed(borderArgs);
            } else {
                borderArgs.push(["line", borderData.c4[0], borderData.c4[1]]);
            }

            return borderArgs;
        }

        function calculateCurvePoints(bounds, borderRadius, borders) {

            var x = bounds.left,
                y = bounds.top,
                width = bounds.width,
                height = bounds.height,

                tlh = borderRadius[0][0],
                tlv = borderRadius[0][1],
                trh = borderRadius[1][0],
                trv = borderRadius[1][1],
                brh = borderRadius[2][0],
                brv = borderRadius[2][1],
                blh = borderRadius[3][0],
                blv = borderRadius[3][1],

                topWidth = width - trh,
                rightHeight = height - brv,
                bottomWidth = width - brh,
                leftHeight = height - blv;

            return {
                topLeftOuter: getCurvePoints(
                    x,
                    y,
                    tlh,
                    tlv
                ).topLeft.subdivide(0.5),

                topLeftInner: getCurvePoints(
                    x + borders[3].width,
                    y + borders[0].width,
                    Math.max(0, tlh - borders[3].width),
                    Math.max(0, tlv - borders[0].width)
                ).topLeft.subdivide(0.5),

                topRightOuter: getCurvePoints(
                    x + topWidth,
                    y,
                    trh,
                    trv
                ).topRight.subdivide(0.5),

                topRightInner: getCurvePoints(
                    x + Math.min(topWidth, width + borders[3].width),
                    y + borders[0].width,
                    (topWidth > width + borders[3].width) ? 0 : trh - borders[3].width,
                    trv - borders[0].width
                ).topRight.subdivide(0.5),

                bottomRightOuter: getCurvePoints(
                    x + bottomWidth,
                    y + rightHeight,
                    brh,
                    brv
                ).bottomRight.subdivide(0.5),

                bottomRightInner: getCurvePoints(
                    x + Math.min(bottomWidth, width + borders[3].width),
                    y + Math.min(rightHeight, height + borders[0].width),
                    Math.max(0, brh - borders[1].width),
                    Math.max(0, brv - borders[2].width)
                ).bottomRight.subdivide(0.5),

                bottomLeftOuter: getCurvePoints(
                    x,
                    y + leftHeight,
                    blh,
                    blv
                ).bottomLeft.subdivide(0.5),

                bottomLeftInner: getCurvePoints(
                    x + borders[3].width,
                    y + leftHeight,
                    Math.max(0, blh - borders[3].width),
                    Math.max(0, blv - borders[2].width)
                ).bottomLeft.subdivide(0.5)
            };
        }

        function getBorderClip(element, borderPoints, borders, radius, bounds) {
            var backgroundClip = getCSS(element, 'backgroundClip'),
                borderArgs = [];

            switch (backgroundClip) {
                case "content-box":
                case "padding-box":
                    parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
                    parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
                    parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
                    parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
                    break;

                default:
                    parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
                    parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
                    parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
                    parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
                    break;
            }

            return borderArgs;
        }

        function parseBorders(element, bounds, borders) {
            var x = bounds.left,
                y = bounds.top,
                width = bounds.width,
                height = bounds.height,
                borderSide,
                bx,
                by,
                bw,
                bh,
                borderArgs,
                // http://www.w3.org/TR/css3-background/#the-border-radius
                borderRadius = getBorderRadiusData(element),
                borderPoints = calculateCurvePoints(bounds, borderRadius, borders),
                borderData = {
                    clip: getBorderClip(element, borderPoints, borders, borderRadius, bounds),
                    borders: []
                };

            for (borderSide = 0; borderSide < 4; borderSide++) {

                if (borders[borderSide].width > 0) {
                    bx = x;
                    by = y;
                    bw = width;
                    bh = height - (borders[2].width);

                    switch (borderSide) {
                        case 0:
                            // top border
                            bh = borders[0].width;

                            borderArgs = drawSide({
                                c1: [bx, by],
                                c2: [bx + bw, by],
                                c3: [bx + bw - borders[1].width, by + bh],
                                c4: [bx + borders[3].width, by + bh]
                            }, borderRadius[0], borderRadius[1],
                                borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
                            break;
                        case 1:
                            // right border
                            bx = x + width - (borders[1].width);
                            bw = borders[1].width;

                            borderArgs = drawSide({
                                c1: [bx + bw, by],
                                c2: [bx + bw, by + bh + borders[2].width],
                                c3: [bx, by + bh],
                                c4: [bx, by + borders[0].width]
                            }, borderRadius[1], borderRadius[2],
                                borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
                            break;
                        case 2:
                            // bottom border
                            by = (by + height) - (borders[2].width);
                            bh = borders[2].width;

                            borderArgs = drawSide({
                                c1: [bx + bw, by + bh],
                                c2: [bx, by + bh],
                                c3: [bx + borders[3].width, by],
                                c4: [bx + bw - borders[3].width, by]
                            }, borderRadius[2], borderRadius[3],
                                borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
                            break;
                        case 3:
                            // left border
                            bw = borders[3].width;

                            borderArgs = drawSide({
                                c1: [bx, by + bh + borders[2].width],
                                c2: [bx, by],
                                c3: [bx + bw, by + borders[0].width],
                                c4: [bx + bw, by + bh]
                            }, borderRadius[3], borderRadius[0],
                                borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
                            break;
                    }

                    borderData.borders.push({
                        args: borderArgs,
                        color: borders[borderSide].color
                    });

                }
            }

            return borderData;
        }

        function createShape(ctx, args) {
            var shape = ctx.drawShape();
            args.forEach(function (border, index) {
                shape[(index === 0) ? "moveTo" : border[0] + "To"].apply(null, border.slice(1));
            });
            return shape;
        }

        function renderBorders(ctx, borderArgs, color) {
            if (color !== "transparent") {
                ctx.setVariable("fillStyle", color);
                createShape(ctx, borderArgs);
                ctx.fill();
                numDraws += 1;
            }
        }

        function renderFormValue(el, bounds, stack) {

            var valueWrap = doc.createElement('valuewrap'),
                cssPropertyArray = ['lineHeight', 'textAlign', 'fontFamily', 'color', 'fontSize', 'paddingLeft', 'paddingTop', 'width', 'height', 'border', 'borderLeftWidth', 'borderTopWidth'],
                textValue,
                textNode;

            cssPropertyArray.forEach(function (property) {
                try {
                    valueWrap.style[property] = getCSS(el, property);
                } catch (e) {
                    // Older IE has issues with "border"
                    Util.log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
                }
            });

            valueWrap.style.borderColor = "black";
            valueWrap.style.borderStyle = "solid";
            valueWrap.style.display = "block";
            valueWrap.style.position = "absolute";

            if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT") {
                valueWrap.style.lineHeight = getCSS(el, "height");
            }

            valueWrap.style.top = bounds.top + "px";
            valueWrap.style.left = bounds.left + "px";

            textValue = (el.nodeName === "SELECT") ? (el.options[el.selectedIndex] || 0).text : el.value;
            if (!textValue) {
                textValue = el.placeholder;
            }

            textNode = doc.createTextNode(textValue);

            valueWrap.appendChild(textNode);
            body.appendChild(valueWrap);

            renderText(el, textNode, stack);
            body.removeChild(valueWrap);
        }

        function drawImage(ctx) {
            ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
            numDraws += 1;
        }

        function getPseudoElement(el, which) {
            var elStyle = window.getComputedStyle(el, which);
            if (!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content" || elStyle.display === "none") {
                return;
            }
            var content = elStyle.content + '',
                first = content.substr(0, 1);
            //strips quotes
            if (first === content.substr(content.length - 1) && first.match(/'|"/)) {
                content = content.substr(1, content.length - 2);
            }

            var isImage = content.substr(0, 3) === 'url',
                elps = document.createElement(isImage ? 'img' : 'span');

            elps.className = pseudoHide + "-before " + pseudoHide + "-after";

            Object.keys(elStyle).filter(indexedProperty).forEach(function (prop) {
                // Prevent assigning of read only CSS Rules, ex. length, parentRule
                try {
                    elps.style[prop] = elStyle[prop];
                } catch (e) {
                    Util.log(['Tried to assign readonly property ', prop, 'Error:', e]);
                }
            });

            if (isImage) {
                elps.src = Util.parseBackgroundImage(content)[0].args[0];
            } else {
                elps.innerHTML = content;
            }
            return elps;
        }

        function indexedProperty(property) {
            return (isNaN(window.parseInt(property, 10)));
        }

        function injectPseudoElements(el, stack) {
            var before = getPseudoElement(el, ':before'),
                after = getPseudoElement(el, ':after');
            if (!before && !after) {
                return;
            }

            if (before) {
                el.className += " " + pseudoHide + "-before";
                el.parentNode.insertBefore(before, el);
                parseElement(before, stack, true);
                el.parentNode.removeChild(before);
                el.className = el.className.replace(pseudoHide + "-before", "").trim();
            }

            if (after) {
                el.className += " " + pseudoHide + "-after";
                el.appendChild(after);
                parseElement(after, stack, true);
                el.removeChild(after);
                el.className = el.className.replace(pseudoHide + "-after", "").trim();
            }

        }

        function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
            var offsetX = Math.round(bounds.left + backgroundPosition.left),
                offsetY = Math.round(bounds.top + backgroundPosition.top);

            ctx.createPattern(image);
            ctx.translate(offsetX, offsetY);
            ctx.fill();
            ctx.translate(-offsetX, -offsetY);
        }

        function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
            var args = [];
            args.push(["line", Math.round(left), Math.round(top)]);
            args.push(["line", Math.round(left + width), Math.round(top)]);
            args.push(["line", Math.round(left + width), Math.round(height + top)]);
            args.push(["line", Math.round(left), Math.round(height + top)]);
            createShape(ctx, args);
            ctx.save();
            ctx.clip();
            renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
            ctx.restore();
        }

        function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
            renderRect(
                ctx,
                backgroundBounds.left,
                backgroundBounds.top,
                backgroundBounds.width,
                backgroundBounds.height,
                bgcolor
            );
        }

        function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
            var backgroundSize = Util.BackgroundSize(el, bounds, image, imageIndex),
                backgroundPosition = Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize),
                backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(Util.trimText);

            image = resizeImage(image, backgroundSize);

            backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];

            switch (backgroundRepeat) {
                case "repeat-x":
                    backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
                        bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
                    break;

                case "repeat-y":
                    backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
                        bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
                    break;

                case "no-repeat":
                    backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
                        bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
                    break;

                default:
                    renderBackgroundRepeat(ctx, image, backgroundPosition, {
                        top: bounds.top,
                        left: bounds.left,
                        width: image.width,
                        height: image.height
                    });
                    break;
            }
        }

        function renderBackgroundImage(element, bounds, ctx) {
            var backgroundImage = getCSS(element, "backgroundImage"),
                backgroundImages = Util.parseBackgroundImage(backgroundImage),
                image,
                imageIndex = backgroundImages.length;

            while (imageIndex--) {
                backgroundImage = backgroundImages[imageIndex];

                if (!backgroundImage.args || backgroundImage.args.length === 0) {
                    continue;
                }

                var key = backgroundImage.method === 'url' ?
                    backgroundImage.args[0] :
                    backgroundImage.value;

                image = loadImage(key);

                // TODO add support for background-origin
                if (image) {
                    renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
                } else {
                    Util.log("html2canvas: Error loading background:", backgroundImage);
                }
            }
        }

        function resizeImage(image, bounds) {
            if (image.width === bounds.width && image.height === bounds.height) {
                return image;
            }

            var ctx, canvas = doc.createElement('canvas');
            canvas.width = bounds.width;
            canvas.height = bounds.height;
            ctx = canvas.getContext("2d");
            drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height);
            return canvas;
        }

        function setOpacity(ctx, element, parentStack) {
            return ctx.setVariable("globalAlpha", getCSS(element, "opacity") * ((parentStack) ? parentStack.opacity : 1));
        }

        function removePx(str) {
            return str.replace("px", "");
        }

        var transformRegExp = /(matrix)\((.+)\)/;

        function getTransform(element, parentStack) {
            var transform = getCSS(element, "transform") || getCSS(element, "-webkit-transform") || getCSS(element, "-moz-transform") || getCSS(element, "-ms-transform") || getCSS(element, "-o-transform");
            var transformOrigin = getCSS(element, "transform-origin") || getCSS(element, "-webkit-transform-origin") || getCSS(element, "-moz-transform-origin") || getCSS(element, "-ms-transform-origin") || getCSS(element, "-o-transform-origin") || "0px 0px";

            transformOrigin = transformOrigin.split(" ").map(removePx).map(Util.asFloat);

            var matrix;
            if (transform && transform !== "none") {
                var match = transform.match(transformRegExp);
                if (match) {
                    switch (match[1]) {
                        case "matrix":
                            matrix = match[2].split(",").map(Util.trimText).map(Util.asFloat);
                            break;
                    }
                }
            }

            return {
                origin: transformOrigin,
                matrix: matrix
            };
        }

        function createStack(element, parentStack, bounds, transform) {
            var ctx = h2cRenderContext((!parentStack) ? documentWidth() : bounds.width, (!parentStack) ? documentHeight() : bounds.height),
                stack = {
                    ctx: ctx,
                    opacity: setOpacity(ctx, element, parentStack),
                    cssPosition: getCSS(element, "position"),
                    borders: getBorderData(element),
                    transform: transform,
                    clip: (parentStack && parentStack.clip) ? Util.Extend({}, parentStack.clip) : null
                };

            setZ(element, stack, parentStack);

            // TODO correct overflow for absolute content residing under a static position
            if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false) {
                stack.clip = (stack.clip) ? clipBounds(stack.clip, bounds) : bounds;
            }

            return stack;
        }

        function getBackgroundBounds(borders, bounds, clip) {
            var backgroundBounds = {
                left: bounds.left + borders[3].width,
                top: bounds.top + borders[0].width,
                width: bounds.width - (borders[1].width + borders[3].width),
                height: bounds.height - (borders[0].width + borders[2].width)
            };

            if (clip) {
                backgroundBounds = clipBounds(backgroundBounds, clip);
            }

            return backgroundBounds;
        }

        function getBounds(element, transform) {
            var bounds = (transform.matrix) ? Util.OffsetBounds(element) : Util.Bounds(element);
            transform.origin[0] += bounds.left;
            transform.origin[1] += bounds.top;
            return bounds;
        }

        function renderElement(element, parentStack, pseudoElement, ignoreBackground) {
            var transform = getTransform(element, parentStack),
                bounds = getBounds(element, transform),
                image,
                stack = createStack(element, parentStack, bounds, transform),
                borders = stack.borders,
                ctx = stack.ctx,
                backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip),
                borderData = parseBorders(element, bounds, borders),
                backgroundColor = (ignoreElementsRegExp.test(element.nodeName)) ? "#efefef" : getCSS(element, "backgroundColor");


            createShape(ctx, borderData.clip);

            ctx.save();
            ctx.clip();

            if (backgroundBounds.height > 0 && backgroundBounds.width > 0 && !ignoreBackground) {
                renderBackgroundColor(ctx, bounds, backgroundColor);
                renderBackgroundImage(element, backgroundBounds, ctx);
            } else if (ignoreBackground) {
                stack.backgroundColor = backgroundColor;
            }

            ctx.restore();

            borderData.borders.forEach(function (border) {
                renderBorders(ctx, border.args, border.color);
            });

            if (!pseudoElement) {
                injectPseudoElements(element, stack);
            }

            switch (element.nodeName) {
                case "IMG":
                    if ((image = loadImage(element.getAttribute('src')))) {
                        renderImage(ctx, element, image, bounds, borders);
                    } else {
                        Util.log("html2canvas: Error loading <img>:" + element.getAttribute('src'));
                    }
                    break;
                case "INPUT":
                    // TODO add all relevant type's, i.e. HTML5 new stuff
                    // todo add support for placeholder attribute for browsers which support it
                    if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder || "").length > 0) {
                        renderFormValue(element, bounds, stack);
                    }
                    break;
                case "TEXTAREA":
                    if ((element.value || element.placeholder || "").length > 0) {
                        renderFormValue(element, bounds, stack);
                    }
                    break;
                case "SELECT":
                    if ((element.options || element.placeholder || "").length > 0) {
                        renderFormValue(element, bounds, stack);
                    }
                    break;
                case "LI":
                    renderListItem(element, stack, backgroundBounds);
                    break;
                case "CANVAS":
                    renderImage(ctx, element, element, bounds, borders);
                    break;
            }

            return stack;
        }

        function isElementVisible(element) {
            return (getCSS(element, 'display') !== "none" && getCSS(element, 'visibility') !== "hidden" && !element.hasAttribute("data-html2canvas-ignore"));
        }

        function parseElement(element, stack, pseudoElement) {
            if (isElementVisible(element)) {
                stack = renderElement(element, stack, pseudoElement, false) || stack;
                if (!ignoreElementsRegExp.test(element.nodeName)) {
                    parseChildren(element, stack, pseudoElement);
                }
            }
        }

        function parseChildren(element, stack, pseudoElement) {
            Util.Children(element).forEach(function (node) {
                if (node.nodeType === node.ELEMENT_NODE) {
                    parseElement(node, stack, pseudoElement);
                } else if (node.nodeType === node.TEXT_NODE) {
                    renderText(element, node, stack);
                }
            });
        }

        function init() {
            var background = getCSS(document.documentElement, "backgroundColor"),
                transparentBackground = (Util.isTransparent(background) && element === document.body),
                stack = renderElement(element, null, false, transparentBackground);
            parseChildren(element, stack);

            if (transparentBackground) {
                background = stack.backgroundColor;
            }

            body.removeChild(hidePseudoElements);
            return {
                backgroundColor: background,
                stack: stack
            };
        }

        return init();
    };

    function h2czContext(zindex) {
        return {
            zindex: zindex,
            children: []
        };
    }

    _html2canvas.Preload = function (options) {

        var images = {
            numLoaded: 0,   // also failed are counted here
            numFailed: 0,
            numTotal: 0,
            cleanupDone: false
        },
            pageOrigin,
            Util = _html2canvas.Util,
            methods,
            i,
            count = 0,
            element = options.elements[0] || document.body,
            doc = element.ownerDocument,
            domImages = element.getElementsByTagName('img'), // Fetch images of the present element only
            imgLen = domImages.length,
            link = doc.createElement("a"),
            supportCORS = (function (img) {
                return (img.crossOrigin !== undefined);
            })(new Image()),
            timeoutTimer;

        link.href = window.location.href;
        pageOrigin = link.protocol + link.host;

        function isSameOrigin(url) {
            link.href = url;
            link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
            var origin = link.protocol + link.host;
            return (origin === pageOrigin);
        }

        function start() {
            Util.log("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
            if (!images.firstRun && images.numLoaded >= images.numTotal) {
                Util.log("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

                if (typeof options.complete === "function") {
                    options.complete(images);
                }

            }
        }

        // TODO modify proxy to serve images with CORS enabled, where available
        function proxyGetImage(url, img, imageObj) {
            var callback_name,
                scriptUrl = options.proxy,
                script;

            link.href = url;
            url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

            callback_name = 'html2canvas_' + (count++);
            imageObj.callbackname = callback_name;

            if (scriptUrl.indexOf("?") > -1) {
                scriptUrl += "&";
            } else {
                scriptUrl += "?";
            }
            scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
            script = doc.createElement("script");

            window[callback_name] = function (a) {
                if (a.substring(0, 6) === "error:") {
                    imageObj.succeeded = false;
                    images.numLoaded++;
                    images.numFailed++;
                    start();
                } else {
                    setImageLoadHandlers(img, imageObj);
                    img.src = a;
                }
                window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
                try {
                    delete window[callback_name];  // for all browser that support this
                } catch (ex) { }
                script.parentNode.removeChild(script);
                script = null;
                delete imageObj.script;
                delete imageObj.callbackname;
            };

            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", scriptUrl);
            imageObj.script = script;
            window.document.body.appendChild(script);

        }

        function loadPseudoElement(element, type) {
            var style = window.getComputedStyle(element, type),
                content = style.content;
            if (content.substr(0, 3) === 'url') {
                methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
            }
            loadBackgroundImages(style.backgroundImage, element);
        }

        function loadPseudoElementImages(element) {
            loadPseudoElement(element, ":before");
            loadPseudoElement(element, ":after");
        }

        function loadGradientImage(backgroundImage, bounds) {
            var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);

            if (img !== undefined) {
                images[backgroundImage] = {
                    img: img,
                    succeeded: true
                };
                images.numTotal++;
                images.numLoaded++;
                start();
            }
        }

        function invalidBackgrounds(background_image) {
            return (background_image && background_image.method && background_image.args && background_image.args.length > 0);
        }

        function loadBackgroundImages(background_image, el) {
            var bounds;

            _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function (background_image) {
                if (background_image.method === 'url') {
                    methods.loadImage(background_image.args[0]);
                } else if (background_image.method.match(/\-?gradient$/)) {
                    if (bounds === undefined) {
                        bounds = _html2canvas.Util.Bounds(el);
                    }
                    loadGradientImage(background_image.value, bounds);
                }
            });
        }

        function getImages(el) {
            var elNodeType = false;

            // Firefox fails with permission denied on pages with iframes
            try {
                Util.Children(el).forEach(getImages);
            }
            catch (e) { }

            try {
                elNodeType = el.nodeType;
            } catch (ex) {
                elNodeType = false;
                Util.log("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
            }

            if (elNodeType === 1 || elNodeType === undefined) {
                loadPseudoElementImages(el);
                try {
                    loadBackgroundImages(Util.getCSS(el, 'backgroundImage'), el);
                } catch (e) {
                    Util.log("html2canvas: failed to get background-image - Exception: " + e.message);
                }
                loadBackgroundImages(el);
            }
        }

        function setImageLoadHandlers(img, imageObj) {
            img.onload = function () {
                if (imageObj.timer !== undefined) {
                    // CORS succeeded
                    window.clearTimeout(imageObj.timer);
                }

                images.numLoaded++;
                imageObj.succeeded = true;
                img.onerror = img.onload = null;
                start();
            };
            img.onerror = function () {
                if (img.crossOrigin === "anonymous") {
                    // CORS failed
                    window.clearTimeout(imageObj.timer);

                    // let's try with proxy instead
                    if (options.proxy) {
                        var src = img.src;
                        img = new Image();
                        imageObj.img = img;
                        img.src = src;

                        proxyGetImage(img.src, img, imageObj);
                        return;
                    }
                }

                images.numLoaded++;
                images.numFailed++;
                imageObj.succeeded = false;
                img.onerror = img.onload = null;
                start();
            };
        }

        methods = {
            loadImage: function (src) {
                var img, imageObj;
                if (src && images[src] === undefined) {
                    img = new Image();
                    if (src.match(/data:image\/.*;base64,/i)) {
                        img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
                        imageObj = images[src] = {
                            img: img
                        };
                        images.numTotal++;
                        setImageLoadHandlers(img, imageObj);
                    } else if (isSameOrigin(src) || options.allowTaint === true) {
                        imageObj = images[src] = {
                            img: img
                        };
                        images.numTotal++;
                        setImageLoadHandlers(img, imageObj);
                        img.src = src;
                    } else if (supportCORS && !options.allowTaint && options.useCORS) {
                        // attempt to load with CORS

                        img.crossOrigin = "anonymous";
                        imageObj = images[src] = {
                            img: img
                        };
                        images.numTotal++;
                        setImageLoadHandlers(img, imageObj);
                        img.src = src;
                    } else if (options.proxy) {
                        imageObj = images[src] = {
                            img: img
                        };
                        images.numTotal++;
                        proxyGetImage(src, img, imageObj);
                    }
                }

            },
            cleanupDOM: function (cause) {
                var img, src;
                if (!images.cleanupDone) {
                    if (cause && typeof cause === "string") {
                        Util.log("html2canvas: Cleanup because: " + cause);
                    } else {
                        Util.log("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
                    }

                    for (src in images) {
                        if (images.hasOwnProperty(src)) {
                            img = images[src];
                            if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
                                // cancel proxy image request
                                window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
                                try {
                                    delete window[img.callbackname];  // for all browser that support this
                                } catch (ex) { }
                                if (img.script && img.script.parentNode) {
                                    img.script.setAttribute("src", "about:blank");  // try to cancel running request
                                    img.script.parentNode.removeChild(img.script);
                                }
                                images.numLoaded++;
                                images.numFailed++;
                                Util.log("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
                            }
                        }
                    }

                    // cancel any pending requests
                    if (window.stop !== undefined) {
                        window.stop();
                    } else if (document.execCommand !== undefined) {
                        document.execCommand("Stop", false);
                    }
                    if (document.close !== undefined) {
                        document.close();
                    }
                    images.cleanupDone = true;
                    if (!(cause && typeof cause === "string")) {
                        start();
                    }
                }
            },

            renderingDone: function () {
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                }
            }
        };

        if (options.timeout > 0) {
            timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
        }

        Util.log('html2canvas: Preload starts: finding background-images');
        images.firstRun = true;

        getImages(element);

        Util.log('html2canvas: Preload: Finding images');
        // load <img> images
        for (i = 0; i < imgLen; i += 1) {
            methods.loadImage(domImages[i].getAttribute("src"));
        }

        images.firstRun = false;
        Util.log('html2canvas: Preload: Done.');
        if (images.numTotal === images.numLoaded) {
            start();
        }

        return methods;
    };

    _html2canvas.Renderer = function (parseQueue, options) {

        // http://www.w3.org/TR/CSS21/zindex.html
        function createRenderQueue(parseQueue) {
            var queue = [],
                rootContext;

            rootContext = (function buildStackingContext(rootNode) {
                var rootContext = {};
                function insert(context, node, specialParent) {
                    var zi = (node.zIndex.zindex === 'auto') ? 0 : Number(node.zIndex.zindex),
                        contextForChildren = context, // the stacking context for children
                        isPositioned = node.zIndex.isPositioned,
                        isFloated = node.zIndex.isFloated,
                        stub = { node: node },
                        childrenDest = specialParent; // where children without z-index should be pushed into

                    if (node.zIndex.ownStacking) {
                        // '!' comes before numbers in sorted array
                        contextForChildren = stub.context = { '!': [{ node: node, children: [] }] };
                        childrenDest = undefined;
                    } else if (isPositioned || isFloated) {
                        childrenDest = stub.children = [];
                    }

                    if (zi === 0 && specialParent) {
                        specialParent.push(stub);
                    } else {
                        if (!context[zi]) { context[zi] = []; }
                        context[zi].push(stub);
                    }

                    node.zIndex.children.forEach(function (childNode) {
                        insert(contextForChildren, childNode, childrenDest);
                    });
                }
                insert(rootContext, rootNode);
                return rootContext;
            })(parseQueue);

            function sortZ(context) {
                Object.keys(context).sort().forEach(function (zi) {
                    var nonPositioned = [],
                        floated = [],
                        positioned = [],
                        list = [];

                    // positioned after static
                    context[zi].forEach(function (v) {
                        if (v.node.zIndex.isPositioned || v.node.zIndex.opacity < 1) {
                            // http://www.w3.org/TR/css3-color/#transparency
                            // non-positioned element with opactiy < 1 should be stacked as if it were a positioned element with ‘z-index: 0’ and ‘opacity: 1’.
                            positioned.push(v);
                        } else if (v.node.zIndex.isFloated) {
                            floated.push(v);
                        } else {
                            nonPositioned.push(v);
                        }
                    });

                    (function walk(arr) {
                        arr.forEach(function (v) {
                            list.push(v);
                            if (v.children) { walk(v.children); }
                        });
                    })(nonPositioned.concat(floated, positioned));

                    list.forEach(function (v) {
                        if (v.context) {
                            sortZ(v.context);
                        } else {
                            queue.push(v.node);
                        }
                    });
                });
            }

            sortZ(rootContext);

            return queue;
        }

        function getRenderer(rendererName) {
            var renderer;

            if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
                renderer = _html2canvas.Renderer[rendererName](options);
            } else if (typeof rendererName === "function") {
                renderer = rendererName(options);
            } else {
                throw new Error("Unknown renderer");
            }

            if (typeof renderer !== "function") {
                throw new Error("Invalid renderer defined");
            }
            return renderer;
        }

        return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue.stack), _html2canvas);
    };

    _html2canvas.Util.Support = function (options, doc) {

        function supportSVGRendering() {
            var img = new Image(),
                canvas = doc.createElement("canvas"),
                ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
            if (ctx === false) {
                return false;
            }
            canvas.width = canvas.height = 10;
            img.src = [
                "data:image/svg+xml,",
                "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
                "<foreignObject width='10' height='10'>",
                "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
                "sup",
                "</div>",
                "</foreignObject>",
                "</svg>"
            ].join("");
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return false;
            }
            _html2canvas.Util.log('html2canvas: Parse: SVG powered rendering available');
            return true;
        }

        // Test whether we can use ranges to measure bounding boxes
        // Opera doesn't provide valid bounds.height/bottom even though it supports the method.

        function supportRangeBounds() {
            var r, testElement, rangeBounds, rangeHeight, support = false;

            if (doc.createRange) {
                r = doc.createRange();
                if (r.getBoundingClientRect) {
                    testElement = doc.createElement('boundtest');
                    testElement.style.height = "123px";
                    testElement.style.display = "block";
                    doc.body.appendChild(testElement);

                    r.selectNode(testElement);
                    rangeBounds = r.getBoundingClientRect();
                    rangeHeight = rangeBounds.height;

                    if (rangeHeight === 123) {
                        support = true;
                    }
                    doc.body.removeChild(testElement);
                }
            }

            return support;
        }

        return {
            rangeBounds: supportRangeBounds(),
            svgRendering: options.svgRendering && supportSVGRendering()
        };
    };
    window.html2canvas = function (elements, opts) {
        elements = (elements.length) ? elements : [elements];
        var queue,
            canvas,
            options = {
                // general
                logging: false,
                elements: elements,
                background: "#fff",

                // preload options
                proxy: null,
                timeout: 0,    // no timeout
                useCORS: false, // try to load images as CORS (where available), before falling back to proxy
                allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

                // parse options
                svgRendering: false, // use svg powered rendering where available (FF11+)
                ignoreElements: "IFRAME|OBJECT|PARAM",
                useOverflow: true,
                letterRendering: false,
                chinese: false,

                // render options

                width: null,
                height: null,
                taintTest: true, // do a taint test with all images before applying to canvas
                renderer: "Canvas"
            };

        options = _html2canvas.Util.Extend(opts, options);

        _html2canvas.logging = options.logging;
        options.complete = function (images) {

            if (typeof options.onpreloaded === "function") {
                if (options.onpreloaded(images) === false) {
                    return;
                }
            }
            queue = _html2canvas.Parse(images, options);

            if (typeof options.onparsed === "function") {
                if (options.onparsed(queue) === false) {
                    return;
                }
            }

            canvas = _html2canvas.Renderer(queue, options);

            if (typeof options.onrendered === "function") {
                options.onrendered(canvas);
            }


        };

        // for pages without images, we still want this to be async, i.e. return methods before executing
        window.setTimeout(function () {
            _html2canvas.Preload(options);
        }, 0);

        return {
            render: function (queue, opts) {
                return _html2canvas.Renderer(queue, _html2canvas.Util.Extend(opts, options));
            },
            parse: function (images, opts) {
                return _html2canvas.Parse(images, _html2canvas.Util.Extend(opts, options));
            },
            preload: function (opts) {
                return _html2canvas.Preload(_html2canvas.Util.Extend(opts, options));
            },
            log: _html2canvas.Util.log
        };
    };

    window.html2canvas.log = _html2canvas.Util.log; // for renderers
    window.html2canvas.Renderer = {
        Canvas: undefined // We are assuming this will be used
    };
    _html2canvas.Renderer.Canvas = function (options) {
        options = options || {};

        var doc = document,
            safeImages = [],
            testCanvas = document.createElement("canvas"),
            testctx = testCanvas.getContext("2d"),
            Util = _html2canvas.Util,
            canvas = options.canvas || doc.createElement('canvas');

        function createShape(ctx, args) {
            ctx.beginPath();
            args.forEach(function (arg) {
                ctx[arg.name].apply(ctx, arg['arguments']);
            });
            ctx.closePath();
        }

        function safeImage(item) {
            if (safeImages.indexOf(item['arguments'][0].src) === -1) {
                testctx.drawImage(item['arguments'][0], 0, 0);
                try {
                    testctx.getImageData(0, 0, 1, 1);
                } catch (e) {
                    testCanvas = doc.createElement("canvas");
                    testctx = testCanvas.getContext("2d");
                    return false;
                }
                safeImages.push(item['arguments'][0].src);
            }
            return true;
        }

        function renderItem(ctx, item) {
            switch (item.type) {
                case "variable":
                    ctx[item.name] = item['arguments'];
                    break;
                case "function":
                    switch (item.name) {
                        case "createPattern":
                            if (item['arguments'][0].width > 0 && item['arguments'][0].height > 0) {
                                try {
                                    ctx.fillStyle = ctx.createPattern(item['arguments'][0], "repeat");
                                }
                                catch (e) {
                                    Util.log("html2canvas: Renderer: Error creating pattern", e.message);
                                }
                            }
                            break;
                        case "drawShape":
                            createShape(ctx, item['arguments']);
                            break;
                        case "drawImage":
                            if (item['arguments'][8] > 0 && item['arguments'][7] > 0) {
                                if (!options.taintTest || (options.taintTest && safeImage(item))) {
                                    ctx.drawImage.apply(ctx, item['arguments']);
                                }
                            }
                            break;
                        default:
                            ctx[item.name].apply(ctx, item['arguments']);
                    }
                    break;
            }
        }

        return function (parsedData, options, document, queue, _html2canvas) {
            var ctx = canvas.getContext("2d"),
                newCanvas,
                bounds,
                fstyle,
                zStack = parsedData.stack;

            canvas.width = canvas.style.width = options.width || zStack.ctx.width;
            canvas.height = canvas.style.height = options.height || zStack.ctx.height;

            fstyle = ctx.fillStyle;
            ctx.fillStyle = (Util.isTransparent(zStack.backgroundColor) && options.background !== undefined) ? options.background : parsedData.backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = fstyle;

            queue.forEach(function (storageContext) {
                // set common settings for canvas
                ctx.textBaseline = "bottom";
                ctx.save();

                if (storageContext.transform.matrix) {
                    ctx.translate(storageContext.transform.origin[0], storageContext.transform.origin[1]);
                    ctx.transform.apply(ctx, storageContext.transform.matrix);
                    ctx.translate(-storageContext.transform.origin[0], -storageContext.transform.origin[1]);
                }

                if (storageContext.clip) {
                    ctx.beginPath();
                    ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
                    ctx.clip();
                }

                if (storageContext.ctx.storage) {
                    storageContext.ctx.storage.forEach(function (item) {
                        renderItem(ctx, item);
                    });
                }

                ctx.restore();
            });

            Util.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

            if (options.elements.length === 1) {
                if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
                    // crop image to the bounds of selected (single) element
                    bounds = _html2canvas.Util.Bounds(options.elements[0]);
                    newCanvas = document.createElement('canvas');
                    newCanvas.width = Math.ceil(bounds.width);
                    newCanvas.height = Math.ceil(bounds.height);
                    ctx = newCanvas.getContext("2d");

                    ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
                    canvas = null;
                    return newCanvas;
                }
            }

            return canvas;
        };
    };
})(window, document);