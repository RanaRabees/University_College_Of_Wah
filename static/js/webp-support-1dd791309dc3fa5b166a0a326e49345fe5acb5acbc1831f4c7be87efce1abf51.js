(() => {
    var f = window,
        u = document;
    /*! modernizr 3.6.0 (Custom Build) | MIT *
     * https://modernizr.com/download/?-webp-setclasses !*/
    function c(A, e) {
        return typeof A === e
    }

    function p(A) {
        var e, n = r.className,
            o = l._config.classPrefix || "";
        v && (n = n.baseVal), l._config.enableJSClass && (e = new RegExp("(^|\\s)" + o + "no-js(\\s|$)"), n = n.replace(e, "$1" + o + "js$2")), l._config.enableClasses && (n += " " + o + A.join(" " + o), v ? r.className.baseVal = n : r.className = n)
    }

    function d(A, e) {
        if ("object" == typeof A)
            for (var n in A) g(A, n) && d(n, A[n]);
        else {
            var o = (A = A.toLowerCase()).split("."),
                a = l[o[0]];
            if (void 0 !== (a = 2 == o.length ? a[o[1]] : a)) return l;
            e = "function" == typeof e ? e() : e, 1 == o.length ? l[o[0]] = e : (!l[o[0]] || l[o[0]] instanceof Boolean || (l[o[0]] = new Boolean(l[o[0]])), l[o[0]][o[1]] = e), p([(e && 0 != e ? "" : "no-") + o.join("-")]), l._trigger(A, e)
        }
        return l
    }
    var g, A, e, n, o, a, t, h, w, m = [],
        s = [],
        i = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(A, e) {
                var n = this;
                setTimeout(function() {
                    e(n[A])
                }, 0)
            },
            addTest: function(A, e, n) {
                s.push({
                    name: A,
                    fn: e,
                    options: n
                })
            },
            addAsyncTest: function(A) {
                s.push({
                    name: null,
                    fn: A
                })
            }
        },
        l = ((l = function() {}).prototype = i, new l),
        r = u.documentElement,
        v = "svg" === r.nodeName.toLowerCase();
    for (h in g = void 0 === (w = {}.hasOwnProperty) || void 0 === w.call ? function(A, e) {
            return e in A && void 0 === A.constructor.prototype[e]
        } : function(A, e) {
            return w.call(A, e)
        }, i._l = {}, i.on = function(A, e) {
            this._l[A] || (this._l[A] = []), this._l[A].push(e), l.hasOwnProperty(A) && setTimeout(function() {
                l._trigger(A, l[A])
            }, 0)
        }, i._trigger = function(A, e) {
            var n;
            this._l[A] && (n = this._l[A], setTimeout(function() {
                for (var A = 0; A < n.length; A++)(0, n[A])(e)
            }, 0), delete this._l[A])
        }, l._q.push(function() {
            i.addTest = d
        }), l.addAsyncTest(function() {
            function n(n, A, o) {
                function e(A) {
                    var e = !(!A || "load" !== A.type) && 1 == a.width;
                    d(n, "webp" === n && e ? new Boolean(e) : e), o && o(A)
                }
                var a = new Image;
                a.onerror = e, a.onload = e, a.src = A
            }
            var o = [{
                    uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                    name: "webp"
                }, {
                    uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                    name: "webp.alpha"
                }, {
                    uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                    name: "webp.animation"
                }, {
                    uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                    name: "webp.lossless"
                }],
                A = o.shift();
            n(A.name, A.uri, function(A) {
                if (A && "load" === A.type)
                    for (var e = 0; e < o.length; e++) n(o[e].name, o[e].uri)
            })
        }), s)
        if (s.hasOwnProperty(h)) {
            if (A = [], (e = s[h]).name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                for (n = 0; n < e.options.aliases.length; n++) A.push(e.options.aliases[n].toLowerCase());
            for (o = c(e.fn, "function") ? e.fn() : e.fn, a = 0; a < A.length; a++) 1 === (t = A[a].split(".")).length ? l[t[0]] = o : (!l[t[0]] || l[t[0]] instanceof Boolean || (l[t[0]] = new Boolean(l[t[0]])), l[t[0]][t[1]] = o), m.push((o ? "" : "no-") + t.join("-"))
        }
    p(m), delete i.addTest, delete i.addAsyncTest;
    for (var B = 0; B < l._q.length; B++) l._q[B]();
    f.Modernizr = l
})();