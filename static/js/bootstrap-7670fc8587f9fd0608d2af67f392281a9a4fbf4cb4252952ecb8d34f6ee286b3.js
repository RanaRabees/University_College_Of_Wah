(() => {
    var n = {
            9989: function(e, t, Xi) {
                /*!
                 * Bootstrap v4.1.3 (https://getbootstrap.com/)
                 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
                 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
                 */
                ! function(e, t) {
                    "use strict";

                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function m(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }

                    function g(r) {
                        for (var e = 1; e < arguments.length; e++) {
                            var o = null != arguments[e] ? arguments[e] : {},
                                t = Object.keys(o);
                            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(o, e).enumerable
                            }))), t.forEach(function(e) {
                                var t, n, i;
                                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[n] = i
                            })
                        }
                        return r
                    }
                    for (var r, n, v, y, b, _, w, E, x, T, o, C, S, N, D, A, k, I, O, L, j, H, P, M, F, q, h, W, R, B, U, $, z, K, Q, Y, V, X, J, G, Z, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, de, l, he, pe, me, ge, ve, ye, be, _e, we, Ee, xe, Te, Ce, Se, Ne, De, p = function(i) {
                            var t = "transitionend";

                            function e(e) {
                                var t = this,
                                    n = !1;
                                return i(this).one(l.TRANSITION_END, function() {
                                    n = !0
                                }), setTimeout(function() {
                                    n || l.triggerTransitionEnd(t)
                                }, e), this
                            }
                            var l = {
                                TRANSITION_END: "bsTransitionEnd",
                                getUID: function(e) {
                                    for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                                    return e
                                },
                                getSelectorFromElement: function(e) {
                                    var t = e.getAttribute("data-target");
                                    t && "#" !== t || (t = e.getAttribute("href") || "");
                                    try {
                                        return document.querySelector(t) ? t : null
                                    } catch (e) {
                                        return null
                                    }
                                },
                                getTransitionDurationFromElement: function(e) {
                                    if (!e) return 0;
                                    var t = i(e).css("transition-duration");
                                    return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
                                },
                                reflow: function(e) {
                                    return e.offsetHeight
                                },
                                triggerTransitionEnd: function(e) {
                                    i(e).trigger(t)
                                },
                                supportsTransitionEnd: function() {
                                    return Boolean(t)
                                },
                                isElement: function(e) {
                                    return (e[0] || e).nodeType
                                },
                                typeCheckConfig: function(e, t, n) {
                                    for (var i in n)
                                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                                            var r = n[i],
                                                o = t[i],
                                                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                                            if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                                        }
                                    var a
                                }
                            };
                            return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = {
                                bindType: t,
                                delegateType: t,
                                handle: function(e) {
                                    if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                                }
                            }, l
                        }(t = t && t.hasOwnProperty("default") ? t.default : t), Ae = (y = "." + (v = "bs.alert"), b = (r = t).fn[n = "alert"], _ = {
                            CLOSE: "close" + y,
                            CLOSED: "closed" + y,
                            CLICK_DATA_API: "click" + y + ".data-api"
                        }, w = "alert", E = "fade", x = "show", T = function() {
                            function i(e) {
                                this._element = e
                            }
                            var e = i.prototype;
                            return e.close = function(e) {
                                var t = this._element;
                                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                            }, e.dispose = function() {
                                r.removeData(this._element, v), this._element = null
                            }, e._getRootElement = function(e) {
                                var t = p.getSelectorFromElement(e),
                                    n = !1;
                                return t && (n = document.querySelector(t)), n || (n = r(e).closest("." + w)[0]), n
                            }, e._triggerCloseEvent = function(e) {
                                var t = r.Event(_.CLOSE);
                                return r(e).trigger(t), t
                            }, e._removeElement = function(t) {
                                var n = this;
                                if (r(t).removeClass(x), r(t).hasClass(E)) {
                                    var e = p.getTransitionDurationFromElement(t);
                                    r(t).one(p.TRANSITION_END, function(e) {
                                        return n._destroyElement(t, e)
                                    }).emulateTransitionEnd(e)
                                } else this._destroyElement(t)
                            }, e._destroyElement = function(e) {
                                r(e).detach().trigger(_.CLOSED).remove()
                            }, i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = r(this),
                                        t = e.data(v);
                                    t || (t = new i(this), e.data(v, t)), "close" === n && t[n](this)
                                })
                            }, i._handleDismiss = function(t) {
                                return function(e) {
                                    e && e.preventDefault(), t.close(this)
                                }
                            }, m(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }]), i
                        }(), r(document).on(_.CLICK_DATA_API, '[data-dismiss="alert"]', T._handleDismiss(new T)), r.fn[n] = T._jQueryInterface, r.fn[n].Constructor = T, r.fn[n].noConflict = function() {
                            return r.fn[n] = b, T._jQueryInterface
                        }, T), ke = (N = "." + (S = "bs.button"), A = (o = t).fn[C = "button"], k = "active", I = "btn", L = '[data-toggle^="button"]', j = '[data-toggle="buttons"]', H = "input", P = ".active", M = ".btn", F = {
                            CLICK_DATA_API: "click" + N + (D = ".data-api"),
                            FOCUS_BLUR_DATA_API: (O = "focus") + N + D + " blur" + N + D
                        }, q = function() {
                            function n(e) {
                                this._element = e
                            }
                            var e = n.prototype;
                            return e.toggle = function() {
                                var e = !0,
                                    t = !0,
                                    n = o(this._element).closest(j)[0];
                                if (n) {
                                    var i = this._element.querySelector(H);
                                    if (i) {
                                        if ("radio" === i.type)
                                            if (i.checked && this._element.classList.contains(k)) e = !1;
                                            else {
                                                var r = n.querySelector(P);
                                                r && o(r).removeClass(k)
                                            }
                                        if (e) {
                                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                            i.checked = !this._element.classList.contains(k), o(i).trigger("change")
                                        }
                                        i.focus(), t = !1
                                    }
                                }
                                t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(k)), e && o(this._element).toggleClass(k)
                            }, e.dispose = function() {
                                o.removeData(this._element, S), this._element = null
                            }, n._jQueryInterface = function(t) {
                                return this.each(function() {
                                    var e = o(this).data(S);
                                    e || (e = new n(this), o(this).data(S, e)), "toggle" === t && e[t]()
                                })
                            }, m(n, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }]), n
                        }(), o(document).on(F.CLICK_DATA_API, L, function(e) {
                            e.preventDefault();
                            var t = e.target;
                            o(t).hasClass(I) || (t = o(t).closest(M)), q._jQueryInterface.call(o(t), "toggle")
                        }).on(F.FOCUS_BLUR_DATA_API, L, function(e) {
                            var t = o(e.target).closest(M)[0];
                            o(t).toggleClass(O, /^focus(in)?$/.test(e.type))
                        }), o.fn[C] = q._jQueryInterface, o.fn[C].Constructor = q, o.fn[C].noConflict = function() {
                            return o.fn[C] = A, q._jQueryInterface
                        }, q), Ie = (B = "." + (R = "bs.carousel"), $ = (h = t).fn[W = "carousel"], z = {
                            interval: 5e3,
                            keyboard: !0,
                            slide: !(U = ".data-api"),
                            pause: "hover",
                            wrap: !0
                        }, K = {
                            interval: "(number|boolean)",
                            keyboard: "boolean",
                            slide: "(boolean|string)",
                            pause: "(string|boolean)",
                            wrap: "boolean"
                        }, Q = "next", Y = "prev", V = "left", X = "right", J = {
                            SLIDE: "slide" + B,
                            SLID: "slid" + B,
                            KEYDOWN: "keydown" + B,
                            MOUSEENTER: "mouseenter" + B,
                            MOUSELEAVE: "mouseleave" + B,
                            TOUCHEND: "touchend" + B,
                            LOAD_DATA_API: "load" + B + U,
                            CLICK_DATA_API: "click" + B + U
                        }, G = "carousel", Z = "active", ee = "slide", te = "carousel-item-right", ne = "carousel-item-left", ie = "carousel-item-next", re = "carousel-item-prev", oe = ".active", se = ".active.carousel-item", ae = ".carousel-item", le = ".carousel-item-next, .carousel-item-prev", ce = ".carousel-indicators", ue = "[data-slide], [data-slide-to]", fe = '[data-ride="carousel"]', de = function() {
                            function o(e, t) {
                                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = h(e)[0], this._indicatorsElement = this._element.querySelector(ce), this._addEventListeners()
                            }
                            var e = o.prototype;
                            return e.next = function() {
                                this._isSliding || this._slide(Q)
                            }, e.nextWhenVisible = function() {
                                !document.hidden && h(this._element).is(":visible") && "hidden" !== h(this._element).css("visibility") && this.next()
                            }, e.prev = function() {
                                this._isSliding || this._slide(Y)
                            }, e.pause = function(e) {
                                e || (this._isPaused = !0), this._element.querySelector(le) && (p.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                            }, e.cycle = function(e) {
                                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                            }, e.to = function(e) {
                                var t = this;
                                this._activeElement = this._element.querySelector(se);
                                var n = this._getItemIndex(this._activeElement);
                                if (!(e > this._items.length - 1 || e < 0))
                                    if (this._isSliding) h(this._element).one(J.SLID, function() {
                                        return t.to(e)
                                    });
                                    else {
                                        if (n === e) return this.pause(), void this.cycle();
                                        var i = n < e ? Q : Y;
                                        this._slide(i, this._items[e])
                                    }
                            }, e.dispose = function() {
                                h(this._element).off(B), h.removeData(this._element, R), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                            }, e._getConfig = function(e) {
                                return e = g({}, z, e), p.typeCheckConfig(W, e, K), e
                            }, e._addEventListeners = function() {
                                var t = this;
                                this._config.keyboard && h(this._element).on(J.KEYDOWN, function(e) {
                                    return t._keydown(e)
                                }), "hover" === this._config.pause && (h(this._element).on(J.MOUSEENTER, function(e) {
                                    return t.pause(e)
                                }).on(J.MOUSELEAVE, function(e) {
                                    return t.cycle(e)
                                }), "ontouchstart" in document.documentElement && h(this._element).on(J.TOUCHEND, function() {
                                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                        return t.cycle(e)
                                    }, 500 + t._config.interval)
                                }))
                            }, e._keydown = function(e) {
                                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                    case 37:
                                        e.preventDefault(), this.prev();
                                        break;
                                    case 39:
                                        e.preventDefault(), this.next()
                                }
                            }, e._getItemIndex = function(e) {
                                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ae)) : [], this._items.indexOf(e)
                            }, e._getItemByDirection = function(e, t) {
                                var n = e === Q,
                                    i = e === Y,
                                    r = this._getItemIndex(t),
                                    o = this._items.length - 1;
                                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                                var s = (r + (e === Y ? -1 : 1)) % this._items.length;
                                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                            }, e._triggerSlideEvent = function(e, t) {
                                var n = this._getItemIndex(e),
                                    i = this._getItemIndex(this._element.querySelector(se)),
                                    r = h.Event(J.SLIDE, {
                                        relatedTarget: e,
                                        direction: t,
                                        from: i,
                                        to: n
                                    });
                                return h(this._element).trigger(r), r
                            }, e._setActiveIndicatorElement = function(e) {
                                if (this._indicatorsElement) {
                                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(oe));
                                    h(t).removeClass(Z);
                                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                    n && h(n).addClass(Z)
                                }
                            }, e._slide = function(e, t) {
                                var n, i, r, o = this,
                                    s = this._element.querySelector(se),
                                    u = this._getItemIndex(s),
                                    a = t || s && this._getItemByDirection(e, s),
                                    f = this._getItemIndex(a),
                                    l = Boolean(this._interval);
                                if (e === Q ? (n = ne, i = ie, r = V) : (n = te, i = re, r = X), a && h(a).hasClass(Z)) this._isSliding = !1;
                                else if (!this._triggerSlideEvent(a, r).isDefaultPrevented() && s && a) {
                                    this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(a);
                                    var c = h.Event(J.SLID, {
                                        relatedTarget: a,
                                        direction: r,
                                        from: u,
                                        to: f
                                    });
                                    if (h(this._element).hasClass(ee)) {
                                        h(a).addClass(i), p.reflow(a), h(s).addClass(n), h(a).addClass(n);
                                        var d = p.getTransitionDurationFromElement(s);
                                        h(s).one(p.TRANSITION_END, function() {
                                            h(a).removeClass(n + " " + i).addClass(Z), h(s).removeClass(Z + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                                                return h(o._element).trigger(c)
                                            }, 0)
                                        }).emulateTransitionEnd(d)
                                    } else h(s).removeClass(Z), h(a).addClass(Z), this._isSliding = !1, h(this._element).trigger(c);
                                    l && this.cycle()
                                }
                            }, o._jQueryInterface = function(i) {
                                return this.each(function() {
                                    var e = h(this).data(R),
                                        t = g({}, z, h(this).data());
                                    "object" == typeof i && (t = g({}, t, i));
                                    var n = "string" == typeof i ? i : t.slide;
                                    if (e || (e = new o(this, t), h(this).data(R, e)), "number" == typeof i) e.to(i);
                                    else if ("string" == typeof n) {
                                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                                        e[n]()
                                    } else t.interval && (e.pause(), e.cycle())
                                })
                            }, o._dataApiClickHandler = function(e) {
                                var t = p.getSelectorFromElement(this);
                                if (t) {
                                    var n = h(t)[0];
                                    if (n && h(n).hasClass(G)) {
                                        var i = g({}, h(n).data(), h(this).data()),
                                            r = this.getAttribute("data-slide-to");
                                        r && (i.interval = !1), o._jQueryInterface.call(h(n), i), r && h(n).data(R).to(r), e.preventDefault()
                                    }
                                }
                            }, m(o, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return z
                                }
                            }]), o
                        }(), h(document).on(J.CLICK_DATA_API, ue, de._dataApiClickHandler), h(window).on(J.LOAD_DATA_API, function() {
                            for (var e = [].slice.call(document.querySelectorAll(fe)), t = 0, n = e.length; t < n; t++) {
                                var i = h(e[t]);
                                de._jQueryInterface.call(i, i.data())
                            }
                        }), h.fn[W] = de._jQueryInterface, h.fn[W].Constructor = de, h.fn[W].noConflict = function() {
                            return h.fn[W] = $, de._jQueryInterface
                        }, de), Oe = (me = "." + (pe = "bs.collapse"), ge = (l = t).fn[he = "collapse"], ve = {
                            toggle: !0,
                            parent: ""
                        }, ye = {
                            toggle: "boolean",
                            parent: "(string|element)"
                        }, be = {
                            SHOW: "show" + me,
                            SHOWN: "shown" + me,
                            HIDE: "hide" + me,
                            HIDDEN: "hidden" + me,
                            CLICK_DATA_API: "click" + me + ".data-api"
                        }, _e = "show", we = "collapse", Ee = "collapsing", xe = "collapsed", Te = "width", Ce = "height", Se = ".show, .collapsing", Ne = '[data-toggle="collapse"]', De = function() {
                            function a(t, e) {
                                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = l.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                                for (var n = [].slice.call(document.querySelectorAll(Ne)), i = 0, r = n.length; i < r; i++) {
                                    var o = n[i],
                                        s = p.getSelectorFromElement(o),
                                        a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                                            return e === t
                                        });
                                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                                }
                                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                            }
                            var e = a.prototype;
                            return e.toggle = function() {
                                l(this._element).hasClass(_e) ? this.hide() : this.show()
                            }, e.show = function() {
                                var e, t, n = this;
                                if (!this._isTransitioning && !l(this._element).hasClass(_e) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(Se)).filter(function(e) {
                                        return e.getAttribute("data-parent") === n._config.parent
                                    })).length && (e = null), !(e && (t = l(e).not(this._selector).data(pe)) && t._isTransitioning))) {
                                    var i = l.Event(be.SHOW);
                                    if (l(this._element).trigger(i), !i.isDefaultPrevented()) {
                                        e && (a._jQueryInterface.call(l(e).not(this._selector), "hide"), t || l(e).data(pe, null));
                                        var r = this._getDimension();
                                        l(this._element).removeClass(we).addClass(Ee), this._element.style[r] = 0, this._triggerArray.length && l(this._triggerArray).removeClass(xe).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                            s = p.getTransitionDurationFromElement(this._element);
                                        l(this._element).one(p.TRANSITION_END, function() {
                                            l(n._element).removeClass(Ee).addClass(we).addClass(_e), n._element.style[r] = "", n.setTransitioning(!1), l(n._element).trigger(be.SHOWN)
                                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                                    }
                                }
                            }, e.hide = function() {
                                var e = this;
                                if (!this._isTransitioning && l(this._element).hasClass(_e)) {
                                    var t = l.Event(be.HIDE);
                                    if (l(this._element).trigger(t), !t.isDefaultPrevented()) {
                                        var n = this._getDimension();
                                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", p.reflow(this._element), l(this._element).addClass(Ee).removeClass(we).removeClass(_e);
                                        var i = this._triggerArray.length;
                                        if (0 < i)
                                            for (var r = 0; r < i; r++) {
                                                var o = this._triggerArray[r],
                                                    s = p.getSelectorFromElement(o);
                                                if (null !== s) l([].slice.call(document.querySelectorAll(s))).hasClass(_e) || l(o).addClass(xe).attr("aria-expanded", !1)
                                            }
                                        this.setTransitioning(!0);
                                        this._element.style[n] = "";
                                        var a = p.getTransitionDurationFromElement(this._element);
                                        l(this._element).one(p.TRANSITION_END, function() {
                                            e.setTransitioning(!1), l(e._element).removeClass(Ee).addClass(we).trigger(be.HIDDEN)
                                        }).emulateTransitionEnd(a)
                                    }
                                }
                            }, e.setTransitioning = function(e) {
                                this._isTransitioning = e
                            }, e.dispose = function() {
                                l.removeData(this._element, pe), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                            }, e._getConfig = function(e) {
                                return (e = g({}, ve, e)).toggle = Boolean(e.toggle), p.typeCheckConfig(he, e, ye), e
                            }, e._getDimension = function() {
                                return l(this._element).hasClass(Te) ? Te : Ce
                            }, e._getParent = function() {
                                var n = this,
                                    e = null;
                                p.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                    i = [].slice.call(e.querySelectorAll(t));
                                return l(i).each(function(e, t) {
                                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                                }), e
                            }, e._addAriaAndCollapsedClass = function(e, t) {
                                if (e) {
                                    var n = l(e).hasClass(_e);
                                    t.length && l(t).toggleClass(xe, !n).attr("aria-expanded", n)
                                }
                            }, a._getTargetFromElement = function(e) {
                                var t = p.getSelectorFromElement(e);
                                return t ? document.querySelector(t) : null
                            }, a._jQueryInterface = function(i) {
                                return this.each(function() {
                                    var e = l(this),
                                        t = e.data(pe),
                                        n = g({}, ve, e.data(), "object" == typeof i && i ? i : {});
                                    if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(pe, t)), "string" == typeof i) {
                                        if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
                                        t[i]()
                                    }
                                })
                            }, m(a, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return ve
                                }
                            }]), a
                        }(), l(document).on(be.CLICK_DATA_API, Ne, function(e) {
                            "A" === e.currentTarget.tagName && e.preventDefault();
                            var n = l(this),
                                t = p.getSelectorFromElement(this),
                                i = [].slice.call(document.querySelectorAll(t));
                            l(i).each(function() {
                                var e = l(this),
                                    t = e.data(pe) ? "toggle" : n.data();
                                De._jQueryInterface.call(e, t)
                            })
                        }), l.fn[he] = De._jQueryInterface, l.fn[he].Constructor = De, l.fn[he].noConflict = function() {
                            return l.fn[he] = ge, De._jQueryInterface
                        }, De), Le = "undefined" != typeof window && "undefined" != typeof document, je = ["Edge", "Trident", "Firefox"], He = 0, Pe = 0; Pe < je.length; Pe += 1)
                        if (Le && 0 <= navigator.userAgent.indexOf(je[Pe])) {
                            He = 1;
                            break
                        }
                    var Me = Le && window.Promise ? function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, window.Promise.resolve().then(function() {
                                t = !1, e()
                            }))
                        }
                    } : function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, setTimeout(function() {
                                t = !1, e()
                            }, He))
                        }
                    };

                    function Fe(e) {
                        return e && "[object Function]" === {}.toString.call(e)
                    }

                    function qe(e, t) {
                        if (1 !== e.nodeType) return [];
                        var n = getComputedStyle(e, null);
                        return t ? n[t] : n
                    }

                    function We(e) {
                        return "HTML" === e.nodeName ? e : e.parentNode || e.host
                    }

                    function Re(e) {
                        if (!e) return document.body;
                        switch (e.nodeName) {
                            case "HTML":
                            case "BODY":
                                return e.ownerDocument.body;
                            case "#document":
                                return e.body
                        }
                        var t = qe(e),
                            n = t.overflow,
                            i = t.overflowX,
                            r = t.overflowY;
                        return /(auto|scroll|overlay)/.test(n + r + i) ? e : Re(We(e))
                    }
                    var Be = Le && !(!window.MSInputMethodContext || !document.documentMode),
                        Ue = Le && /MSIE 10/.test(navigator.userAgent);

                    function $e(e) {
                        return 11 === e ? Be : 10 === e ? Ue : Be || Ue
                    }

                    function ze(e) {
                        if (!e) return document.documentElement;
                        for (var t = $e(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                        var i = n && n.nodeName;
                        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === qe(n, "position") ? ze(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                    }

                    function Ke(e) {
                        return null !== e.parentNode ? Ke(e.parentNode) : e
                    }

                    function Qe(e, t) {
                        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                            i = n ? e : t,
                            r = n ? t : e,
                            o = document.createRange();
                        o.setStart(i, 0), o.setEnd(r, 0);
                        var s, a, l = o.commonAncestorContainer;
                        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && ze(s.firstElementChild) !== s ? ze(l) : l;
                        var c = Ke(e);
                        return c.host ? Qe(c.host, t) : Qe(e, Ke(t).host)
                    }

                    function Ye(e) {
                        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                            n = e.nodeName;
                        if ("BODY" === n || "HTML" === n) {
                            var i = e.ownerDocument.documentElement;
                            return (e.ownerDocument.scrollingElement || i)[t]
                        }
                        return e[t]
                    }

                    function Ve(e, t) {
                        var n = "x" === t ? "Left" : "Top",
                            i = "Left" === n ? "Right" : "Bottom";
                        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
                    }

                    function Xe(e, t, n, i) {
                        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], $e(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
                    }

                    function Je() {
                        var e = document.body,
                            t = document.documentElement,
                            n = $e(10) && getComputedStyle(t);
                        return {
                            height: Xe("Height", e, t, n),
                            width: Xe("Width", e, t, n)
                        }
                    }
                    var Ge = function() {
                            function i(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            return function(e, t, n) {
                                return t && i(e.prototype, t), n && i(e, n), e
                            }
                        }(),
                        Ze = function(e, t, n) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n, e
                        },
                        et = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                            }
                            return e
                        };

                    function tt(e) {
                        return et({}, e, {
                            right: e.left + e.width,
                            bottom: e.top + e.height
                        })
                    }

                    function nt(e) {
                        var t = {};
                        try {
                            if ($e(10)) {
                                t = e.getBoundingClientRect();
                                var n = Ye(e, "top"),
                                    i = Ye(e, "left");
                                t.top += n, t.left += i, t.bottom += n, t.right += i
                            } else t = e.getBoundingClientRect()
                        } catch (e) {}
                        var r = {
                                left: t.left,
                                top: t.top,
                                width: t.right - t.left,
                                height: t.bottom - t.top
                            },
                            o = "HTML" === e.nodeName ? Je() : {},
                            s = o.width || e.clientWidth || r.right - r.left,
                            u = o.height || e.clientHeight || r.bottom - r.top,
                            a = e.offsetWidth - s,
                            l = e.offsetHeight - u;
                        if (a || l) {
                            var c = qe(e);
                            a -= Ve(c, "x"), l -= Ve(c, "y"), r.width -= a, r.height -= l
                        }
                        return tt(r)
                    }

                    function it(c, e) {
                        var u = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                            f = $e(10),
                            d = "HTML" === e.nodeName,
                            t = nt(c),
                            n = nt(e),
                            i = Re(c),
                            r = qe(e),
                            o = parseFloat(r.borderTopWidth, 10),
                            s = parseFloat(r.borderLeftWidth, 10);
                        u && "HTML" === e.nodeName && (n.top = Math.max(n.top, 0), n.left = Math.max(n.left, 0));
                        var a = tt({
                            top: t.top - n.top - o,
                            left: t.left - n.left - s,
                            width: t.width,
                            height: t.height
                        });
                        if (a.marginTop = 0, a.marginLeft = 0, !f && d) {
                            var l = parseFloat(r.marginTop, 10),
                                h = parseFloat(r.marginLeft, 10);
                            a.top -= o - l, a.bottom -= o - l, a.left -= s - h, a.right -= s - h, a.marginTop = l, a.marginLeft = h
                        }
                        return (f && !u ? e.contains(i) : e === i && "BODY" !== i.nodeName) && (a = function(e, t) {
                            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                                i = Ye(t, "top"),
                                r = Ye(t, "left"),
                                o = n ? -1 : 1;
                            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
                        }(a, e)), a
                    }

                    function rt(e) {
                        if (!e || !e.parentElement || $e()) return document.documentElement;
                        for (var t = e.parentElement; t && "none" === qe(t, "transform");) t = t.parentElement;
                        return t || document.documentElement
                    }

                    function ot(e, t, n, i) {
                        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                            o = {
                                top: 0,
                                left: 0
                            },
                            s = r ? rt(e) : Qe(e, t);
                        if ("viewport" === i) o = function(e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                n = e.ownerDocument.documentElement,
                                i = it(e, n),
                                r = Math.max(n.clientWidth, window.innerWidth || 0),
                                o = Math.max(n.clientHeight, window.innerHeight || 0),
                                s = t ? 0 : Ye(n),
                                a = t ? 0 : Ye(n, "left");
                            return tt({
                                top: s - i.top + i.marginTop,
                                left: a - i.left + i.marginLeft,
                                width: r,
                                height: o
                            })
                        }(s, r);
                        else {
                            var a = void 0;
                            "scrollParent" === i ? "BODY" === (a = Re(We(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
                            var l = it(a, s, r);
                            if ("HTML" !== a.nodeName || function e(t) {
                                    var n = t.nodeName;
                                    return "BODY" !== n && "HTML" !== n && ("fixed" === qe(t, "position") || e(We(t)))
                                }(s)) o = l;
                            else {
                                var c = Je(),
                                    u = c.height,
                                    f = c.width;
                                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
                            }
                        }
                        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
                    }

                    function st(e, t, i, n, c) {
                        var u = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
                        if (-1 === e.indexOf("auto")) return e;
                        var r = ot(i, n, u, c),
                            o = {
                                top: {
                                    width: r.width,
                                    height: t.top - r.top
                                },
                                right: {
                                    width: r.right - t.right,
                                    height: r.height
                                },
                                bottom: {
                                    width: r.width,
                                    height: r.bottom - t.bottom
                                },
                                left: {
                                    width: t.left - r.left,
                                    height: r.height
                                }
                            },
                            s = Object.keys(o).map(function(e) {
                                return et({
                                    key: e
                                }, o[e], {
                                    area: (t = o[e], t.width * t.height)
                                });
                                var t
                            }).sort(function(e, t) {
                                return t.area - e.area
                            }),
                            a = s.filter(function(e) {
                                var t = e.width,
                                    n = e.height;
                                return t >= i.clientWidth && n >= i.clientHeight
                            }),
                            f = 0 < a.length ? a[0].key : s[0].key,
                            l = e.split("-")[1];
                        return f + (l ? "-" + l : "")
                    }

                    function at(e, t, n) {
                        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return it(n, i ? rt(t) : Qe(t, n), i)
                    }

                    function lt(e) {
                        var t = getComputedStyle(e),
                            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
                        return {
                            width: e.offsetWidth + i,
                            height: e.offsetHeight + n
                        }
                    }

                    function ct(e) {
                        var t = {
                            left: "right",
                            right: "left",
                            bottom: "top",
                            top: "bottom"
                        };
                        return e.replace(/left|right|bottom|top/g, function(e) {
                            return t[e]
                        })
                    }

                    function ut(e, t, n) {
                        n = n.split("-")[0];
                        var i = lt(e),
                            r = {
                                width: i.width,
                                height: i.height
                            },
                            o = -1 !== ["right", "left"].indexOf(n),
                            s = o ? "top" : "left",
                            a = o ? "left" : "top",
                            l = o ? "height" : "width",
                            c = o ? "width" : "height";
                        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[ct(a)], r
                    }

                    function ft(e, t) {
                        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                    }

                    function dt(e, n, t) {
                        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
                            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                                return e[t] === n
                            });
                            var i = ft(e, function(e) {
                                return e[t] === n
                            });
                            return e.indexOf(i)
                        }(e, "name", t))).forEach(function(e) {
                            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                            var t = e.function || e.fn;
                            e.enabled && Fe(t) && (n.offsets.popper = tt(n.offsets.popper), n.offsets.reference = tt(n.offsets.reference), n = t(n, e))
                        }), n
                    }

                    function ht(e, n) {
                        return e.some(function(e) {
                            var t = e.name;
                            return e.enabled && t === n
                        })
                    }

                    function pt(e) {
                        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                            var r = t[i],
                                o = r ? "" + r + n : e;
                            if ("undefined" != typeof document.body.style[o]) return o
                        }
                        return null
                    }

                    function mt(e) {
                        var t = e.ownerDocument;
                        return t ? t.defaultView : window
                    }

                    function gt(e, t, n, i) {
                        n.updateBound = i, mt(e).addEventListener("resize", n.updateBound, {
                            passive: !0
                        });
                        var r = Re(e);
                        return function e(t, n, i, r) {
                            var o = "BODY" === t.nodeName,
                                s = o ? t.ownerDocument.defaultView : t;
                            s.addEventListener(n, i, {
                                passive: !0
                            }), o || e(Re(s.parentNode), n, i, r), r.push(s)
                        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                    }

                    function vt() {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, mt(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.updateBound)
                        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }

                    function yt(e) {
                        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                    }

                    function bt(n, i) {
                        Object.keys(i).forEach(function(e) {
                            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && yt(i[e]) && (t = "px"), n.style[e] = i[e] + t
                        })
                    }

                    function _t(e, t, n) {
                        var i = ft(e, function(e) {
                                return e.name === t
                            }),
                            r = !!i && e.some(function(e) {
                                return e.name === n && e.enabled && e.order < i.order
                            });
                        if (!r) {
                            var o = "`" + t + "`",
                                s = "`" + n + "`";
                            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                        }
                        return r
                    }
                    var wt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                        Et = wt.slice(3);

                    function xt(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            n = Et.indexOf(e),
                            i = Et.slice(n + 1).concat(Et.slice(0, n));
                        return t ? i.reverse() : i
                    }
                    var Tt = "flip",
                        Ct = "clockwise",
                        St = "counterclockwise";

                    function Nt(e, r, o, t) {
                        var s = [0, 0],
                            a = -1 !== ["right", "left"].indexOf(t),
                            n = e.split(/(\+|\-)/).map(function(e) {
                                return e.trim()
                            }),
                            i = n.indexOf(ft(n, function(e) {
                                return -1 !== e.search(/,|\s/)
                            }));
                        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var l = /\s*,\s*|\s+/,
                            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
                        return (c = c.map(function(e, t) {
                            var n = (1 === t ? !a : a) ? "height" : "width",
                                i = !1;
                            return e.reduce(function(e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
                            }, []).map(function(e) {
                                return function(e, t, n, i) {
                                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                        o = +r[1],
                                        s = r[2];
                                    if (!o) return e;
                                    if (0 === s.indexOf("%")) {
                                        var a = void 0;
                                        switch (s) {
                                            case "%p":
                                                a = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                a = i
                                        }
                                        return tt(a)[t] / 100 * o
                                    }
                                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                    return o
                                }(e, n, r, o)
                            })
                        })).forEach(function(n, i) {
                            n.forEach(function(e, t) {
                                yt(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
                            })
                        }), s
                    }
                    var Dt = {
                            placement: "bottom",
                            positionFixed: !1,
                            eventsEnabled: !0,
                            removeOnDestroy: !1,
                            onCreate: function() {},
                            onUpdate: function() {},
                            modifiers: {
                                shift: {
                                    order: 100,
                                    enabled: !0,
                                    fn: function(e) {
                                        var t = e.placement,
                                            n = t.split("-")[0],
                                            i = t.split("-")[1];
                                        if (i) {
                                            var r = e.offsets,
                                                o = r.reference,
                                                s = r.popper,
                                                a = -1 !== ["bottom", "top"].indexOf(n),
                                                l = a ? "left" : "top",
                                                c = a ? "width" : "height",
                                                u = {
                                                    start: Ze({}, l, o[l]),
                                                    end: Ze({}, l, o[l] + o[c] - s[c])
                                                };
                                            e.offsets.popper = et({}, s, u[i])
                                        }
                                        return e
                                    }
                                },
                                offset: {
                                    order: 200,
                                    enabled: !0,
                                    fn: function(e, t) {
                                        var n = t.offset,
                                            i = e.placement,
                                            r = e.offsets,
                                            o = r.popper,
                                            s = r.reference,
                                            a = i.split("-")[0],
                                            l = void 0;
                                        return l = yt(+n) ? [+n, 0] : Nt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                                    },
                                    offset: 0
                                },
                                preventOverflow: {
                                    order: 300,
                                    enabled: !0,
                                    fn: function(e, i) {
                                        var t = i.boundariesElement || ze(e.instance.popper);
                                        e.instance.reference === t && (t = ze(t));
                                        var n = pt("transform"),
                                            r = e.instance.popper.style,
                                            o = r.top,
                                            s = r.left,
                                            a = r[n];
                                        r.top = "", r.left = "", r[n] = "";
                                        var l = ot(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                                        r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                                        var u = i.priority,
                                            c = e.offsets.popper,
                                            f = {
                                                primary: function(e) {
                                                    var t = c[e];
                                                    return c[e] < l[e] && !i.escapeWithReference && (t = Math.max(c[e], l[e])), Ze({}, e, t)
                                                },
                                                secondary: function(e) {
                                                    var t = "right" === e ? "left" : "top",
                                                        n = c[t];
                                                    return c[e] > l[e] && !i.escapeWithReference && (n = Math.min(c[t], l[e] - ("right" === e ? c.width : c.height))), Ze({}, t, n)
                                                }
                                            };
                                        return u.forEach(function(e) {
                                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                            c = et({}, c, f[t](e))
                                        }), e.offsets.popper = c, e
                                    },
                                    priority: ["left", "right", "top", "bottom"],
                                    padding: 5,
                                    boundariesElement: "scrollParent"
                                },
                                keepTogether: {
                                    order: 400,
                                    enabled: !0,
                                    fn: function(e) {
                                        var t = e.offsets,
                                            n = t.popper,
                                            i = t.reference,
                                            r = e.placement.split("-")[0],
                                            o = Math.floor,
                                            s = -1 !== ["top", "bottom"].indexOf(r),
                                            a = s ? "right" : "bottom",
                                            l = s ? "left" : "top",
                                            c = s ? "width" : "height";
                                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                                    }
                                },
                                arrow: {
                                    order: 500,
                                    enabled: !0,
                                    fn: function(e, u) {
                                        var t;
                                        if (!_t(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                        var n = u.element;
                                        if ("string" == typeof n) {
                                            if (!(n = e.instance.popper.querySelector(n))) return e
                                        } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                        var f = e.placement.split("-")[0],
                                            d = e.offsets,
                                            i = d.popper,
                                            r = d.reference,
                                            o = -1 !== ["left", "right"].indexOf(f),
                                            s = o ? "height" : "width",
                                            h = o ? "Top" : "Left",
                                            a = h.toLowerCase(),
                                            p = o ? "left" : "top",
                                            l = o ? "bottom" : "right",
                                            c = lt(n)[s];
                                        r[l] - c < i[a] && (e.offsets.popper[a] -= i[a] - (r[l] - c)), r[a] + c > i[l] && (e.offsets.popper[a] += r[a] + c - i[l]), e.offsets.popper = tt(e.offsets.popper);
                                        var m = r[a] + r[s] / 2 - c / 2,
                                            g = qe(e.instance.popper),
                                            v = parseFloat(g["margin" + h], 10),
                                            y = parseFloat(g["border" + h + "Width"], 10),
                                            b = m - e.offsets.popper[a] - v - y;
                                        return b = Math.max(Math.min(i[s] - c, b), 0), e.arrowElement = n, e.offsets.arrow = (Ze(t = {}, a, Math.round(b)), Ze(t, p, ""), t), e
                                    },
                                    element: "[x-arrow]"
                                },
                                flip: {
                                    order: 600,
                                    enabled: !0,
                                    fn: function(p, m) {
                                        if (ht(p.instance.modifiers, "inner")) return p;
                                        if (p.flipped && p.placement === p.originalPlacement) return p;
                                        var g = ot(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
                                            v = p.placement.split("-")[0],
                                            y = ct(v),
                                            b = p.placement.split("-")[1] || "",
                                            _ = [];
                                        switch (m.behavior) {
                                            case Tt:
                                                _ = [v, y];
                                                break;
                                            case Ct:
                                                _ = xt(v);
                                                break;
                                            case St:
                                                _ = xt(v, !0);
                                                break;
                                            default:
                                                _ = m.behavior
                                        }
                                        return _.forEach(function(u, e) {
                                            if (v !== u || _.length === e + 1) return p;
                                            v = p.placement.split("-")[0], y = ct(v);
                                            var t, n = p.offsets.popper,
                                                i = p.offsets.reference,
                                                r = Math.floor,
                                                o = "left" === v && r(n.right) > r(i.left) || "right" === v && r(n.left) < r(i.right) || "top" === v && r(n.bottom) > r(i.top) || "bottom" === v && r(n.top) < r(i.bottom),
                                                s = r(n.left) < r(g.left),
                                                a = r(n.right) > r(g.right),
                                                l = r(n.top) < r(g.top),
                                                f = r(n.bottom) > r(g.bottom),
                                                d = "left" === v && s || "right" === v && a || "top" === v && l || "bottom" === v && f,
                                                c = -1 !== ["top", "bottom"].indexOf(v),
                                                h = !!m.flipVariations && (c && "start" === b && s || c && "end" === b && a || !c && "start" === b && l || !c && "end" === b && f);
                                            (o || d || h) && (p.flipped = !0, (o || d) && (v = _[e + 1]), h && (b = "end" === (t = b) ? "start" : "start" === t ? "end" : t), p.placement = v + (b ? "-" + b : ""), p.offsets.popper = et({}, p.offsets.popper, ut(p.instance.popper, p.offsets.reference, p.placement)), p = dt(p.instance.modifiers, p, "flip"))
                                        }), p
                                    },
                                    behavior: "flip",
                                    padding: 5,
                                    boundariesElement: "viewport"
                                },
                                inner: {
                                    order: 700,
                                    enabled: !1,
                                    fn: function(e) {
                                        var t = e.placement,
                                            n = t.split("-")[0],
                                            i = e.offsets,
                                            r = i.popper,
                                            o = i.reference,
                                            s = -1 !== ["left", "right"].indexOf(n),
                                            a = -1 === ["top", "left"].indexOf(n);
                                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = ct(t), e.offsets.popper = tt(r), e
                                    }
                                },
                                hide: {
                                    order: 800,
                                    enabled: !0,
                                    fn: function(e) {
                                        if (!_t(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                        var t = e.offsets.reference,
                                            n = ft(e.instance.modifiers, function(e) {
                                                return "preventOverflow" === e.name
                                            }).boundaries;
                                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                            if (!0 === e.hide) return e;
                                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                        } else {
                                            if (!1 === e.hide) return e;
                                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                        }
                                        return e
                                    }
                                },
                                computeStyle: {
                                    order: 850,
                                    enabled: !0,
                                    fn: function(e, t) {
                                        var u = t.x,
                                            f = t.y,
                                            n = e.offsets.popper,
                                            i = ft(e.instance.modifiers, function(e) {
                                                return "applyStyle" === e.name
                                            }).gpuAcceleration;
                                        void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                        var d = void 0 !== i ? i : t.gpuAcceleration,
                                            h = nt(ze(e.instance.popper)),
                                            r = {
                                                position: n.position
                                            },
                                            o = {
                                                left: Math.floor(n.left),
                                                top: Math.round(n.top),
                                                bottom: Math.round(n.bottom),
                                                right: Math.floor(n.right)
                                            },
                                            s = "bottom" === u ? "top" : "bottom",
                                            a = "right" === f ? "left" : "right",
                                            p = pt("transform"),
                                            l = void 0,
                                            c = void 0;
                                        if (c = "bottom" === s ? -h.height + o.bottom : o.top, l = "right" === a ? -h.width + o.right : o.left, d && p) r[p] = "translate3d(" + l + "px, " + c + "px, 0)", r[s] = 0, r[a] = 0, r.willChange = "transform";
                                        else {
                                            var m = "bottom" === s ? -1 : 1,
                                                g = "right" === a ? -1 : 1;
                                            r[s] = c * m, r[a] = l * g, r.willChange = s + ", " + a
                                        }
                                        var v = {
                                            "x-placement": e.placement
                                        };
                                        return e.attributes = et({}, v, e.attributes), e.styles = et({}, r, e.styles), e.arrowStyles = et({}, e.offsets.arrow, e.arrowStyles), e
                                    },
                                    gpuAcceleration: !0,
                                    x: "bottom",
                                    y: "right"
                                },
                                applyStyle: {
                                    order: 900,
                                    enabled: !0,
                                    fn: function(e) {
                                        var t, n;
                                        return bt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                        }), e.arrowElement && Object.keys(e.arrowStyles).length && bt(e.arrowElement, e.arrowStyles), e
                                    },
                                    onLoad: function(e, t, n, i, r) {
                                        var o = at(r, t, e, n.positionFixed),
                                            s = st(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                        return t.setAttribute("x-placement", s), bt(t, {
                                            position: n.positionFixed ? "fixed" : "absolute"
                                        }), n
                                    },
                                    gpuAcceleration: void 0
                                }
                            }
                        },
                        At = function() {
                            function o(e, t) {
                                var n = this,
                                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, o), this.scheduleUpdate = function() {
                                    return requestAnimationFrame(n.update)
                                }, this.update = Me(this.update.bind(this)), this.options = et({}, o.Defaults, i), this.state = {
                                    isDestroyed: !1,
                                    isCreated: !1,
                                    scrollParents: []
                                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(et({}, o.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                                    n.options.modifiers[e] = et({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                                    return et({
                                        name: e
                                    }, n.options.modifiers[e])
                                }).sort(function(e, t) {
                                    return e.order - t.order
                                }), this.modifiers.forEach(function(e) {
                                    e.enabled && Fe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                                }), this.update();
                                var r = this.options.eventsEnabled;
                                r && this.enableEventListeners(), this.state.eventsEnabled = r
                            }
                            return Ge(o, [{
                                key: "update",
                                value: function() {
                                    return function() {
                                        if (!this.state.isDestroyed) {
                                            var e = {
                                                instance: this,
                                                styles: {},
                                                arrowStyles: {},
                                                attributes: {},
                                                flipped: !1,
                                                offsets: {}
                                            };
                                            e.offsets.reference = at(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = st(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = ut(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = dt(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                                        }
                                    }.call(this)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    return function() {
                                        return this.state.isDestroyed = !0, ht(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[pt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                                    }.call(this)
                                }
                            }, {
                                key: "enableEventListeners",
                                value: function() {
                                    return function() {
                                        this.state.eventsEnabled || (this.state = gt(this.reference, this.options, this.state, this.scheduleUpdate))
                                    }.call(this)
                                }
                            }, {
                                key: "disableEventListeners",
                                value: function() {
                                    return vt.call(this)
                                }
                            }]), o
                        }();
                    At.Utils = ("undefined" != typeof window ? window : Xi.g).PopperUtils, At.placements = wt, At.Defaults = Dt;
                    var u, kt, It, Ot, Lt, jt, Ht, Pt, Mt, Ft, qt, Wt, Rt, Bt, Ut, $t, zt, Kt, Qt, Yt, Vt, Xt, Jt, Gt, Zt, en, tn, nn, rn, s, on, sn, an, ln, cn, un, a, fn, dn, hn, pn, mn, gn, vn, yn, bn, _n, wn, f, En, xn, Tn, Cn, Sn, Nn, Dn, An, kn, In, On, Ln, jn, Hn, Pn, Mn, Fn, qn, Wn, Rn, Bn, Un, $n, zn, Kn, Qn, Yn, Vn, Xn, Jn, Gn, Zn, ei, ti, ni, ii, c, ri, oi, si, ai, li, ci, ui, fi, di, hi, pi, mi, gi, vi, yi, bi, _i, wi, Ei, xi, Ti, d, Ci, Si, Ni, Di, Ai, ki, Ii, Oi, Li, ji, Hi, Pi, Mi, Fi, qi, Wi, Ri, Bi = (Ot = "." + (It = "bs.dropdown"), Lt = ".data-api", jt = (u = t).fn[kt = "dropdown"], Ht = new RegExp("38|40|27"), Pt = {
                            HIDE: "hide" + Ot,
                            HIDDEN: "hidden" + Ot,
                            SHOW: "show" + Ot,
                            SHOWN: "shown" + Ot,
                            CLICK: "click" + Ot,
                            CLICK_DATA_API: "click" + Ot + Lt,
                            KEYDOWN_DATA_API: "keydown" + Ot + Lt,
                            KEYUP_DATA_API: "keyup" + Ot + Lt
                        }, Mt = "disabled", Ft = "show", qt = "dropup", Wt = "dropright", Rt = "dropleft", Bt = "dropdown-menu-right", Ut = "position-static", $t = '[data-toggle="dropdown"]', zt = ".dropdown form", Kt = ".dropdown-menu", Qt = ".navbar-nav", Yt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Vt = "top-start", Xt = "top-end", Jt = "bottom-start", Gt = "bottom-end", Zt = "right-start", en = "left-start", tn = {
                            offset: 0,
                            flip: !0,
                            boundary: "scrollParent",
                            reference: "toggle",
                            display: "dynamic"
                        }, nn = {
                            offset: "(number|string|function)",
                            flip: "boolean",
                            boundary: "(string|element)",
                            reference: "(string|element)",
                            display: "string"
                        }, rn = function() {
                            function c(e, t) {
                                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                            }
                            var e = c.prototype;
                            return e.toggle = function() {
                                if (!this._element.disabled && !u(this._element).hasClass(Mt)) {
                                    var e = c._getParentFromElement(this._element),
                                        t = u(this._menu).hasClass(Ft);
                                    if (c._clearMenus(), !t) {
                                        var n = {
                                                relatedTarget: this._element
                                            },
                                            i = u.Event(Pt.SHOW, n);
                                        if (u(e).trigger(i), !i.isDefaultPrevented()) {
                                            if (!this._inNavbar) {
                                                if ("undefined" == typeof At) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                                var r = this._element;
                                                "parent" === this._config.reference ? r = e : p.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && u(e).addClass(Ut), this._popper = new At(r, this._menu, this._getPopperConfig())
                                            }
                                            "ontouchstart" in document.documentElement && 0 === u(e).closest(Qt).length && u(document.body).children().on("mouseover", null, u.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), u(this._menu).toggleClass(Ft), u(e).toggleClass(Ft).trigger(u.Event(Pt.SHOWN, n))
                                        }
                                    }
                                }
                            }, e.dispose = function() {
                                u.removeData(this._element, It), u(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
                            }, e.update = function() {
                                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                            }, e._addEventListeners = function() {
                                var t = this;
                                u(this._element).on(Pt.CLICK, function(e) {
                                    e.preventDefault(), e.stopPropagation(), t.toggle()
                                })
                            }, e._getConfig = function(e) {
                                return e = g({}, this.constructor.Default, u(this._element).data(), e), p.typeCheckConfig(kt, e, this.constructor.DefaultType), e
                            }, e._getMenuElement = function() {
                                if (!this._menu) {
                                    var e = c._getParentFromElement(this._element);
                                    e && (this._menu = e.querySelector(Kt))
                                }
                                return this._menu
                            }, e._getPlacement = function() {
                                var e = u(this._element.parentNode),
                                    t = Jt;
                                return e.hasClass(qt) ? (t = Vt, u(this._menu).hasClass(Bt) && (t = Xt)) : e.hasClass(Wt) ? t = Zt : e.hasClass(Rt) ? t = en : u(this._menu).hasClass(Bt) && (t = Gt), t
                            }, e._detectNavbar = function() {
                                return 0 < u(this._element).closest(".navbar").length
                            }, e._getPopperConfig = function() {
                                var t = this,
                                    e = {};
                                "function" == typeof this._config.offset ? e.fn = function(e) {
                                    return e.offsets = g({}, e.offsets, t._config.offset(e.offsets) || {}), e
                                } : e.offset = this._config.offset;
                                var n = {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: e,
                                        flip: {
                                            enabled: this._config.flip
                                        },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary
                                        }
                                    }
                                };
                                return "static" === this._config.display && (n.modifiers.applyStyle = {
                                    enabled: !1
                                }), n
                            }, c._jQueryInterface = function(t) {
                                return this.each(function() {
                                    var e = u(this).data(It);
                                    if (e || (e = new c(this, "object" == typeof t ? t : null), u(this).data(It, e)), "string" == typeof t) {
                                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                                        e[t]()
                                    }
                                })
                            }, c._clearMenus = function(e) {
                                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                                    for (var t = [].slice.call(document.querySelectorAll($t)), n = 0, i = t.length; n < i; n++) {
                                        var r = c._getParentFromElement(t[n]),
                                            o = u(t[n]).data(It),
                                            s = {
                                                relatedTarget: t[n]
                                            };
                                        if (e && "click" === e.type && (s.clickEvent = e), o) {
                                            var a = o._menu;
                                            if (u(r).hasClass(Ft) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && u.contains(r, e.target))) {
                                                var l = u.Event(Pt.HIDE, s);
                                                u(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && u(document.body).children().off("mouseover", null, u.noop), t[n].setAttribute("aria-expanded", "false"), u(a).removeClass(Ft), u(r).removeClass(Ft).trigger(u.Event(Pt.HIDDEN, s)))
                                            }
                                        }
                                    }
                            }, c._getParentFromElement = function(e) {
                                var t, n = p.getSelectorFromElement(e);
                                return n && (t = document.querySelector(n)), t || e.parentNode
                            }, c._dataApiKeydownHandler = function(e) {
                                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || u(e.target).closest(Kt).length)) : Ht.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !u(this).hasClass(Mt))) {
                                    var t = c._getParentFromElement(this),
                                        n = u(t).hasClass(Ft);
                                    if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                                        var i = [].slice.call(t.querySelectorAll(Yt));
                                        if (0 !== i.length) {
                                            var r = i.indexOf(e.target);
                                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                                        }
                                    } else {
                                        if (27 === e.which) {
                                            var o = t.querySelector($t);
                                            u(o).trigger("focus")
                                        }
                                        u(this).trigger("click")
                                    }
                                }
                            }, m(c, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return tn
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return nn
                                }
                            }]), c
                        }(), u(document).on(Pt.KEYDOWN_DATA_API, $t, rn._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API, Kt, rn._dataApiKeydownHandler).on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, rn._clearMenus).on(Pt.CLICK_DATA_API, $t, function(e) {
                            e.preventDefault(), e.stopPropagation(), rn._jQueryInterface.call(u(this), "toggle")
                        }).on(Pt.CLICK_DATA_API, zt, function(e) {
                            e.stopPropagation()
                        }), u.fn[kt] = rn._jQueryInterface, u.fn[kt].Constructor = rn, u.fn[kt].noConflict = function() {
                            return u.fn[kt] = jt, rn._jQueryInterface
                        }, rn),
                        Ui = (an = "." + (sn = "bs.modal"), ln = (s = t).fn[on = "modal"], cn = {
                            backdrop: !0,
                            keyboard: !0,
                            focus: !0,
                            show: !0
                        }, un = {
                            backdrop: "(boolean|string)",
                            keyboard: "boolean",
                            focus: "boolean",
                            show: "boolean"
                        }, a = {
                            HIDE: "hide" + an,
                            HIDDEN: "hidden" + an,
                            SHOW: "show" + an,
                            SHOWN: "shown" + an,
                            FOCUSIN: "focusin" + an,
                            RESIZE: "resize" + an,
                            CLICK_DISMISS: "click.dismiss" + an,
                            KEYDOWN_DISMISS: "keydown.dismiss" + an,
                            MOUSEUP_DISMISS: "mouseup.dismiss" + an,
                            MOUSEDOWN_DISMISS: "mousedown.dismiss" + an,
                            CLICK_DATA_API: "click" + an + ".data-api"
                        }, fn = "modal-scrollbar-measure", dn = "modal-backdrop", hn = "modal-open", pn = "fade", mn = "show", gn = ".modal-dialog", vn = '[data-toggle="modal"]', yn = '[data-dismiss="modal"]', bn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _n = ".sticky-top", wn = function() {
                            function r(e, t) {
                                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(gn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                            }
                            var e = r.prototype;
                            return e.toggle = function(e) {
                                return this._isShown ? this.hide() : this.show(e)
                            }, e.show = function(e) {
                                var t = this;
                                if (!this._isTransitioning && !this._isShown) {
                                    s(this._element).hasClass(pn) && (this._isTransitioning = !0);
                                    var n = s.Event(a.SHOW, {
                                        relatedTarget: e
                                    });
                                    s(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), s(document.body).addClass(hn), this._setEscapeEvent(), this._setResizeEvent(), s(this._element).on(a.CLICK_DISMISS, yn, function(e) {
                                        return t.hide(e)
                                    }), s(this._dialog).on(a.MOUSEDOWN_DISMISS, function() {
                                        s(t._element).one(a.MOUSEUP_DISMISS, function(e) {
                                            s(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                        })
                                    }), this._showBackdrop(function() {
                                        return t._showElement(e)
                                    }))
                                }
                            }, e.hide = function(e) {
                                var t = this;
                                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                                    var n = s.Event(a.HIDE);
                                    if (s(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                        this._isShown = !1;
                                        var i = s(this._element).hasClass(pn);
                                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), s(document).off(a.FOCUSIN), s(this._element).removeClass(mn), s(this._element).off(a.CLICK_DISMISS), s(this._dialog).off(a.MOUSEDOWN_DISMISS), i) {
                                            var r = p.getTransitionDurationFromElement(this._element);
                                            s(this._element).one(p.TRANSITION_END, function(e) {
                                                return t._hideModal(e)
                                            }).emulateTransitionEnd(r)
                                        } else this._hideModal()
                                    }
                                }
                            }, e.dispose = function() {
                                s.removeData(this._element, sn), s(window, document, this._element, this._backdrop).off(an), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                            }, e.handleUpdate = function() {
                                this._adjustDialog()
                            }, e._getConfig = function(e) {
                                return e = g({}, cn, e), p.typeCheckConfig(on, e, un), e
                            }, e._showElement = function(e) {
                                var t = this,
                                    n = s(this._element).hasClass(pn);
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && p.reflow(this._element), s(this._element).addClass(mn), this._config.focus && this._enforceFocus();
                                var i = s.Event(a.SHOWN, {
                                        relatedTarget: e
                                    }),
                                    r = function() {
                                        t._config.focus && t._element.focus(), t._isTransitioning = !1, s(t._element).trigger(i)
                                    };
                                if (n) {
                                    var o = p.getTransitionDurationFromElement(this._element);
                                    s(this._dialog).one(p.TRANSITION_END, r).emulateTransitionEnd(o)
                                } else r()
                            }, e._enforceFocus = function() {
                                var t = this;
                                s(document).off(a.FOCUSIN).on(a.FOCUSIN, function(e) {
                                    document !== e.target && t._element !== e.target && 0 === s(t._element).has(e.target).length && t._element.focus()
                                })
                            }, e._setEscapeEvent = function() {
                                var t = this;
                                this._isShown && this._config.keyboard ? s(this._element).on(a.KEYDOWN_DISMISS, function(e) {
                                    27 === e.which && (e.preventDefault(), t.hide())
                                }) : this._isShown || s(this._element).off(a.KEYDOWN_DISMISS)
                            }, e._setResizeEvent = function() {
                                var t = this;
                                this._isShown ? s(window).on(a.RESIZE, function(e) {
                                    return t.handleUpdate(e)
                                }) : s(window).off(a.RESIZE)
                            }, e._hideModal = function() {
                                var e = this;
                                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                                    s(document.body).removeClass(hn), e._resetAdjustments(), e._resetScrollbar(), s(e._element).trigger(a.HIDDEN)
                                })
                            }, e._removeBackdrop = function() {
                                this._backdrop && (s(this._backdrop).remove(), this._backdrop = null)
                            }, e._showBackdrop = function(e) {
                                var t = this,
                                    n = s(this._element).hasClass(pn) ? pn : "";
                                if (this._isShown && this._config.backdrop) {
                                    if (this._backdrop = document.createElement("div"), this._backdrop.className = dn, n && this._backdrop.classList.add(n), s(this._backdrop).appendTo(document.body), s(this._element).on(a.CLICK_DISMISS, function(e) {
                                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                                        }), n && p.reflow(this._backdrop), s(this._backdrop).addClass(mn), !e) return;
                                    if (!n) return void e();
                                    var i = p.getTransitionDurationFromElement(this._backdrop);
                                    s(this._backdrop).one(p.TRANSITION_END, e).emulateTransitionEnd(i)
                                } else if (!this._isShown && this._backdrop) {
                                    s(this._backdrop).removeClass(mn);
                                    var r = function() {
                                        t._removeBackdrop(), e && e()
                                    };
                                    if (s(this._element).hasClass(pn)) {
                                        var o = p.getTransitionDurationFromElement(this._backdrop);
                                        s(this._backdrop).one(p.TRANSITION_END, r).emulateTransitionEnd(o)
                                    } else r()
                                } else e && e()
                            }, e._adjustDialog = function() {
                                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                            }, e._resetAdjustments = function() {
                                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                            }, e._checkScrollbar = function() {
                                var e = document.body.getBoundingClientRect();
                                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                            }, e._setScrollbar = function() {
                                var r = this;
                                if (this._isBodyOverflowing) {
                                    var e = [].slice.call(document.querySelectorAll(bn)),
                                        t = [].slice.call(document.querySelectorAll(_n));
                                    s(e).each(function(e, t) {
                                        var n = t.style.paddingRight,
                                            i = s(t).css("padding-right");
                                        s(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                                    }), s(t).each(function(e, t) {
                                        var n = t.style.marginRight,
                                            i = s(t).css("margin-right");
                                        s(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                                    });
                                    var n = document.body.style.paddingRight,
                                        i = s(document.body).css("padding-right");
                                    s(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                                }
                            }, e._resetScrollbar = function() {
                                var e = [].slice.call(document.querySelectorAll(bn));
                                s(e).each(function(e, t) {
                                    var n = s(t).data("padding-right");
                                    s(t).removeData("padding-right"), t.style.paddingRight = n || ""
                                });
                                var t = [].slice.call(document.querySelectorAll("" + _n));
                                s(t).each(function(e, t) {
                                    var n = s(t).data("margin-right");
                                    "undefined" != typeof n && s(t).css("margin-right", n).removeData("margin-right")
                                });
                                var n = s(document.body).data("padding-right");
                                s(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                            }, e._getScrollbarWidth = function() {
                                var e = document.createElement("div");
                                e.className = fn, document.body.appendChild(e);
                                var t = e.getBoundingClientRect().width - e.clientWidth;
                                return document.body.removeChild(e), t
                            }, r._jQueryInterface = function(n, i) {
                                return this.each(function() {
                                    var e = s(this).data(sn),
                                        t = g({}, cn, s(this).data(), "object" == typeof n && n ? n : {});
                                    if (e || (e = new r(this, t), s(this).data(sn, e)), "string" == typeof n) {
                                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                                        e[n](i)
                                    } else t.show && e.show(i)
                                })
                            }, m(r, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return cn
                                }
                            }]), r
                        }(), s(document).on(a.CLICK_DATA_API, vn, function(e) {
                            var t, n = this,
                                i = p.getSelectorFromElement(this);
                            i && (t = document.querySelector(i));
                            var r = s(t).data(sn) ? "toggle" : g({}, s(t).data(), s(this).data());
                            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                            var o = s(t).one(a.SHOW, function(e) {
                                e.isDefaultPrevented() || o.one(a.HIDDEN, function() {
                                    s(n).is(":visible") && n.focus()
                                })
                            });
                            wn._jQueryInterface.call(s(t), r, this)
                        }), s.fn[on] = wn._jQueryInterface, s.fn[on].Constructor = wn, s.fn[on].noConflict = function() {
                            return s.fn[on] = ln, wn._jQueryInterface
                        }, wn),
                        $i = (Tn = "." + (xn = "bs.tooltip"), Cn = (f = t).fn[En = "tooltip"], Sn = "bs-tooltip", Nn = new RegExp("(^|\\s)" + Sn + "\\S+", "g"), kn = {
                            animation: !0,
                            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                            trigger: "hover focus",
                            title: "",
                            delay: 0,
                            html: !(An = {
                                AUTO: "auto",
                                TOP: "top",
                                RIGHT: "right",
                                BOTTOM: "bottom",
                                LEFT: "left"
                            }),
                            selector: !(Dn = {
                                animation: "boolean",
                                template: "string",
                                title: "(string|element|function)",
                                trigger: "string",
                                delay: "(number|object)",
                                html: "boolean",
                                selector: "(string|boolean)",
                                placement: "(string|function)",
                                offset: "(number|string)",
                                container: "(string|element|boolean)",
                                fallbackPlacement: "(string|array)",
                                boundary: "(string|element)"
                            }),
                            placement: "top",
                            offset: 0,
                            container: !1,
                            fallbackPlacement: "flip",
                            boundary: "scrollParent"
                        }, On = "out", Ln = {
                            HIDE: "hide" + Tn,
                            HIDDEN: "hidden" + Tn,
                            SHOW: (In = "show") + Tn,
                            SHOWN: "shown" + Tn,
                            INSERTED: "inserted" + Tn,
                            CLICK: "click" + Tn,
                            FOCUSIN: "focusin" + Tn,
                            FOCUSOUT: "focusout" + Tn,
                            MOUSEENTER: "mouseenter" + Tn,
                            MOUSELEAVE: "mouseleave" + Tn
                        }, jn = "fade", Hn = "show", Pn = ".tooltip-inner", Mn = ".arrow", Fn = "hover", qn = "focus", Wn = "click", Rn = "manual", Bn = function() {
                            function i(e, t) {
                                if ("undefined" == typeof At) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                            }
                            var e = i.prototype;
                            return e.enable = function() {
                                this._isEnabled = !0
                            }, e.disable = function() {
                                this._isEnabled = !1
                            }, e.toggleEnabled = function() {
                                this._isEnabled = !this._isEnabled
                            }, e.toggle = function(e) {
                                if (this._isEnabled)
                                    if (e) {
                                        var t = this.constructor.DATA_KEY,
                                            n = f(e.currentTarget).data(t);
                                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), f(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                                    } else {
                                        if (f(this.getTipElement()).hasClass(Hn)) return void this._leave(null, this);
                                        this._enter(null, this)
                                    }
                            }, e.dispose = function() {
                                clearTimeout(this._timeout), f.removeData(this.element, this.constructor.DATA_KEY), f(this.element).off(this.constructor.EVENT_KEY), f(this.element).closest(".modal").off("hide.bs.modal"), this.tip && f(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                            }, e.show = function() {
                                var t = this;
                                if ("none" === f(this.element).css("display")) throw new Error("Please use show on visible elements");
                                var e = f.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    f(this.element).trigger(e);
                                    var n = f.contains(this.element.ownerDocument.documentElement, this.element);
                                    if (e.isDefaultPrevented() || !n) return;
                                    var i = this.getTipElement(),
                                        r = p.getUID(this.constructor.NAME);
                                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && f(i).addClass(jn);
                                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                                        s = this._getAttachment(o);
                                    this.addAttachmentClass(s);
                                    var a = !1 === this.config.container ? document.body : f(document).find(this.config.container);
                                    f(i).data(this.constructor.DATA_KEY, this), f.contains(this.element.ownerDocument.documentElement, this.tip) || f(i).appendTo(a), f(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new At(this.element, i, {
                                        placement: s,
                                        modifiers: {
                                            offset: {
                                                offset: this.config.offset
                                            },
                                            flip: {
                                                behavior: this.config.fallbackPlacement
                                            },
                                            arrow: {
                                                element: Mn
                                            },
                                            preventOverflow: {
                                                boundariesElement: this.config.boundary
                                            }
                                        },
                                        onCreate: function(e) {
                                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                        },
                                        onUpdate: function(e) {
                                            t._handlePopperPlacementChange(e)
                                        }
                                    }), f(i).addClass(Hn), "ontouchstart" in document.documentElement && f(document.body).children().on("mouseover", null, f.noop);
                                    var l = function() {
                                        t.config.animation && t._fixTransition();
                                        var e = t._hoverState;
                                        t._hoverState = null, f(t.element).trigger(t.constructor.Event.SHOWN), e === On && t._leave(null, t)
                                    };
                                    if (f(this.tip).hasClass(jn)) {
                                        var c = p.getTransitionDurationFromElement(this.tip);
                                        f(this.tip).one(p.TRANSITION_END, l).emulateTransitionEnd(c)
                                    } else l()
                                }
                            }, e.hide = function(e) {
                                var t = this,
                                    n = this.getTipElement(),
                                    i = f.Event(this.constructor.Event.HIDE),
                                    r = function() {
                                        t._hoverState !== In && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), f(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                                    };
                                if (f(this.element).trigger(i), !i.isDefaultPrevented()) {
                                    if (f(n).removeClass(Hn), "ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), this._activeTrigger[Wn] = !1, this._activeTrigger[qn] = !1, this._activeTrigger[Fn] = !1, f(this.tip).hasClass(jn)) {
                                        var o = p.getTransitionDurationFromElement(n);
                                        f(n).one(p.TRANSITION_END, r).emulateTransitionEnd(o)
                                    } else r();
                                    this._hoverState = ""
                                }
                            }, e.update = function() {
                                null !== this._popper && this._popper.scheduleUpdate()
                            }, e.isWithContent = function() {
                                return Boolean(this.getTitle())
                            }, e.addAttachmentClass = function(e) {
                                f(this.getTipElement()).addClass(Sn + "-" + e)
                            }, e.getTipElement = function() {
                                return this.tip = this.tip || f(this.config.template)[0], this.tip
                            }, e.setContent = function() {
                                var e = this.getTipElement();
                                this.setElementContent(f(e.querySelectorAll(Pn)), this.getTitle()), f(e).removeClass(jn + " " + Hn)
                            }, e.setElementContent = function(e, t) {
                                var n = this.config.html;
                                "object" == typeof t && (t.nodeType || t.jquery) ? n ? f(t).parent().is(e) || e.empty().append(t) : e.text(f(t).text()) : e[n ? "html" : "text"](t)
                            }, e.getTitle = function() {
                                var e = this.element.getAttribute("data-original-title");
                                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                            }, e._getAttachment = function(e) {
                                return An[e.toUpperCase()]
                            }, e._setListeners = function() {
                                var i = this;
                                this.config.trigger.split(" ").forEach(function(e) {
                                    if ("click" === e) f(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                                        return i.toggle(e)
                                    });
                                    else if (e !== Rn) {
                                        var t = e === Fn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                            n = e === Fn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                                        f(i.element).on(t, i.config.selector, function(e) {
                                            return i._enter(e)
                                        }).on(n, i.config.selector, function(e) {
                                            return i._leave(e)
                                        })
                                    }
                                    f(i.element).closest(".modal").on("hide.bs.modal", function() {
                                        return i.hide()
                                    })
                                }), this.config.selector ? this.config = g({}, this.config, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this._fixTitle()
                            }, e._fixTitle = function() {
                                var e = typeof this.element.getAttribute("data-original-title");
                                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                            }, e._enter = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                (t = t || f(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), f(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? qn : Fn] = !0), f(t.getTipElement()).hasClass(Hn) || t._hoverState === In ? t._hoverState = In : (clearTimeout(t._timeout), t._hoverState = In, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                                    t._hoverState === In && t.show()
                                }, t.config.delay.show) : t.show())
                            }, e._leave = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                (t = t || f(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), f(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? qn : Fn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = On, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                                    t._hoverState === On && t.hide()
                                }, t.config.delay.hide) : t.hide())
                            }, e._isWithActiveTrigger = function() {
                                for (var e in this._activeTrigger)
                                    if (this._activeTrigger[e]) return !0;
                                return !1
                            }, e._getConfig = function(e) {
                                return "number" == typeof(e = g({}, this.constructor.Default, f(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                                    show: e.delay,
                                    hide: e.delay
                                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), p.typeCheckConfig(En, e, this.constructor.DefaultType), e
                            }, e._getDelegateConfig = function() {
                                var e = {};
                                if (this.config)
                                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                return e
                            }, e._cleanTipClass = function() {
                                var e = f(this.getTipElement()),
                                    t = e.attr("class").match(Nn);
                                null !== t && t.length && e.removeClass(t.join(""))
                            }, e._handlePopperPlacementChange = function(e) {
                                var t = e.instance;
                                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                            }, e._fixTransition = function() {
                                var e = this.getTipElement(),
                                    t = this.config.animation;
                                null === e.getAttribute("x-placement") && (f(e).removeClass(jn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                            }, i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = f(this).data(xn),
                                        t = "object" == typeof n && n;
                                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), f(this).data(xn, e)), "string" == typeof n)) {
                                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                                        e[n]()
                                    }
                                })
                            }, m(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return kn
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return En
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return xn
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return Ln
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return Tn
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return Dn
                                }
                            }]), i
                        }(), f.fn[En] = Bn._jQueryInterface, f.fn[En].Constructor = Bn, f.fn[En].noConflict = function() {
                            return f.fn[En] = Cn, Bn._jQueryInterface
                        }, Bn),
                        zi = (Kn = "." + (zn = "bs.popover"), Qn = (Un = t).fn[$n = "popover"], Yn = "bs-popover", Vn = new RegExp("(^|\\s)" + Yn + "\\S+", "g"), Xn = g({}, $i.Default, {
                            placement: "right",
                            trigger: "click",
                            content: "",
                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                        }), Jn = g({}, $i.DefaultType, {
                            content: "(string|element|function)"
                        }), Gn = "fade", ei = ".popover-header", ti = ".popover-body", ni = {
                            HIDE: "hide" + Kn,
                            HIDDEN: "hidden" + Kn,
                            SHOW: (Zn = "show") + Kn,
                            SHOWN: "shown" + Kn,
                            INSERTED: "inserted" + Kn,
                            CLICK: "click" + Kn,
                            FOCUSIN: "focusin" + Kn,
                            FOCUSOUT: "focusout" + Kn,
                            MOUSEENTER: "mouseenter" + Kn,
                            MOUSELEAVE: "mouseleave" + Kn
                        }, ii = function(e) {
                            var t, n;

                            function i() {
                                return e.apply(this, arguments) || this
                            }
                            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
                            var r = i.prototype;
                            return r.isWithContent = function() {
                                return this.getTitle() || this._getContent()
                            }, r.addAttachmentClass = function(e) {
                                Un(this.getTipElement()).addClass(Yn + "-" + e)
                            }, r.getTipElement = function() {
                                return this.tip = this.tip || Un(this.config.template)[0], this.tip
                            }, r.setContent = function() {
                                var e = Un(this.getTipElement());
                                this.setElementContent(e.find(ei), this.getTitle());
                                var t = this._getContent();
                                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(ti), t), e.removeClass(Gn + " " + Zn)
                            }, r._getContent = function() {
                                return this.element.getAttribute("data-content") || this.config.content
                            }, r._cleanTipClass = function() {
                                var e = Un(this.getTipElement()),
                                    t = e.attr("class").match(Vn);
                                null !== t && 0 < t.length && e.removeClass(t.join(""))
                            }, i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = Un(this).data(zn),
                                        t = "object" == typeof n ? n : null;
                                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Un(this).data(zn, e)), "string" == typeof n)) {
                                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                                        e[n]()
                                    }
                                })
                            }, m(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return Xn
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return $n
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return zn
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return ni
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return Kn
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return Jn
                                }
                            }]), i
                        }($i), Un.fn[$n] = ii._jQueryInterface, Un.fn[$n].Constructor = ii, Un.fn[$n].noConflict = function() {
                            return Un.fn[$n] = Qn, ii._jQueryInterface
                        }, ii),
                        Ki = (si = "." + (oi = "bs.scrollspy"), ai = (c = t).fn[ri = "scrollspy"], li = {
                            offset: 10,
                            method: "auto",
                            target: ""
                        }, ci = {
                            offset: "number",
                            method: "string",
                            target: "(string|element)"
                        }, ui = {
                            ACTIVATE: "activate" + si,
                            SCROLL: "scroll" + si,
                            LOAD_DATA_API: "load" + si + ".data-api"
                        }, fi = "dropdown-item", di = "active", hi = '[data-spy="scroll"]', pi = ".active", mi = ".nav, .list-group", gi = ".nav-link", vi = ".nav-item", yi = ".list-group-item", bi = ".dropdown", _i = ".dropdown-item", wi = ".dropdown-toggle", Ei = "offset", xi = "position", Ti = function() {
                            function n(e, t) {
                                var n = this;
                                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + gi + "," + this._config.target + " " + yi + "," + this._config.target + " " + _i, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, c(this._scrollElement).on(ui.SCROLL, function(e) {
                                    return n._process(e)
                                }), this.refresh(), this._process()
                            }
                            var e = n.prototype;
                            return e.refresh = function() {
                                var t = this,
                                    e = this._scrollElement === this._scrollElement.window ? Ei : xi,
                                    r = "auto" === this._config.method ? e : this._config.method,
                                    o = r === xi ? this._getScrollTop() : 0;
                                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                                    var t, n = p.getSelectorFromElement(e);
                                    if (n && (t = document.querySelector(n)), t) {
                                        var i = t.getBoundingClientRect();
                                        if (i.width || i.height) return [c(t)[r]().top + o, n]
                                    }
                                    return null
                                }).filter(function(e) {
                                    return e
                                }).sort(function(e, t) {
                                    return e[0] - t[0]
                                }).forEach(function(e) {
                                    t._offsets.push(e[0]), t._targets.push(e[1])
                                })
                            }, e.dispose = function() {
                                c.removeData(this._element, oi), c(this._scrollElement).off(si), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                            }, e._getConfig = function(e) {
                                if ("string" != typeof(e = g({}, li, "object" == typeof e && e ? e : {})).target) {
                                    var t = c(e.target).attr("id");
                                    t || (t = p.getUID(ri), c(e.target).attr("id", t)), e.target = "#" + t
                                }
                                return p.typeCheckConfig(ri, e, ci), e
                            }, e._getScrollTop = function() {
                                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                            }, e._getScrollHeight = function() {
                                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                            }, e._getOffsetHeight = function() {
                                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                            }, e._process = function() {
                                var e = this._getScrollTop() + this._config.offset,
                                    t = this._getScrollHeight(),
                                    n = this._config.offset + t - this._getOffsetHeight();
                                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                                    var i = this._targets[this._targets.length - 1];
                                    this._activeTarget !== i && this._activate(i)
                                } else {
                                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                                }
                            }, e._activate = function(t) {
                                this._activeTarget = t, this._clear();
                                var e = this._selector.split(",");
                                e = e.map(function(e) {
                                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                                });
                                var n = c([].slice.call(document.querySelectorAll(e.join(","))));
                                n.hasClass(fi) ? (n.closest(bi).find(wi).addClass(di), n.addClass(di)) : (n.addClass(di), n.parents(mi).prev(gi + ", " + yi).addClass(di), n.parents(mi).prev(vi).children(gi).addClass(di)), c(this._scrollElement).trigger(ui.ACTIVATE, {
                                    relatedTarget: t
                                })
                            }, e._clear = function() {
                                var e = [].slice.call(document.querySelectorAll(this._selector));
                                c(e).filter(pi).removeClass(di)
                            }, n._jQueryInterface = function(t) {
                                return this.each(function() {
                                    var e = c(this).data(oi);
                                    if (e || (e = new n(this, "object" == typeof t && t), c(this).data(oi, e)), "string" == typeof t) {
                                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                                        e[t]()
                                    }
                                })
                            }, m(n, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return li
                                }
                            }]), n
                        }(), c(window).on(ui.LOAD_DATA_API, function() {
                            for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--;) {
                                var n = c(e[t]);
                                Ti._jQueryInterface.call(n, n.data())
                            }
                        }), c.fn[ri] = Ti._jQueryInterface, c.fn[ri].Constructor = Ti, c.fn[ri].noConflict = function() {
                            return c.fn[ri] = ai, Ti._jQueryInterface
                        }, Ti),
                        Qi = (Si = "." + (Ci = "bs.tab"), Ni = (d = t).fn.tab, Di = {
                            HIDE: "hide" + Si,
                            HIDDEN: "hidden" + Si,
                            SHOW: "show" + Si,
                            SHOWN: "shown" + Si,
                            CLICK_DATA_API: "click" + Si + ".data-api"
                        }, Ai = "dropdown-menu", ki = "active", Ii = "disabled", Oi = "fade", Li = "show", ji = ".dropdown", Hi = ".nav, .list-group", Pi = ".active", Mi = "> li > .active", Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', qi = ".dropdown-toggle", Wi = "> .dropdown-menu .active", Ri = function() {
                            function i(e) {
                                this._element = e
                            }
                            var e = i.prototype;
                            return e.show = function() {
                                var n = this;
                                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && d(this._element).hasClass(ki) || d(this._element).hasClass(Ii))) {
                                    var e, i, t = d(this._element).closest(Hi)[0],
                                        r = p.getSelectorFromElement(this._element);
                                    if (t) {
                                        var o = "UL" === t.nodeName ? Mi : Pi;
                                        i = (i = d.makeArray(d(t).find(o)))[i.length - 1]
                                    }
                                    var s = d.Event(Di.HIDE, {
                                            relatedTarget: this._element
                                        }),
                                        a = d.Event(Di.SHOW, {
                                            relatedTarget: i
                                        });
                                    if (i && d(i).trigger(s), d(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                                        r && (e = document.querySelector(r)), this._activate(this._element, t);
                                        var l = function() {
                                            var e = d.Event(Di.HIDDEN, {
                                                    relatedTarget: n._element
                                                }),
                                                t = d.Event(Di.SHOWN, {
                                                    relatedTarget: i
                                                });
                                            d(i).trigger(e), d(n._element).trigger(t)
                                        };
                                        e ? this._activate(e, e.parentNode, l) : l()
                                    }
                                }
                            }, e.dispose = function() {
                                d.removeData(this._element, Ci), this._element = null
                            }, e._activate = function(e, t, n) {
                                var i = this,
                                    r = ("UL" === t.nodeName ? d(t).find(Mi) : d(t).children(Pi))[0],
                                    o = n && r && d(r).hasClass(Oi),
                                    s = function() {
                                        return i._transitionComplete(e, r, n)
                                    };
                                if (r && o) {
                                    var a = p.getTransitionDurationFromElement(r);
                                    d(r).one(p.TRANSITION_END, s).emulateTransitionEnd(a)
                                } else s()
                            }, e._transitionComplete = function(e, t, n) {
                                if (t) {
                                    d(t).removeClass(Li + " " + ki);
                                    var i = d(t.parentNode).find(Wi)[0];
                                    i && d(i).removeClass(ki), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                                }
                                if (d(e).addClass(ki), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), p.reflow(e), d(e).addClass(Li), e.parentNode && d(e.parentNode).hasClass(Ai)) {
                                    var r = d(e).closest(ji)[0];
                                    if (r) {
                                        var o = [].slice.call(r.querySelectorAll(qi));
                                        d(o).addClass(ki)
                                    }
                                    e.setAttribute("aria-expanded", !0)
                                }
                                n && n()
                            }, i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = d(this),
                                        t = e.data(Ci);
                                    if (t || (t = new i(this), e.data(Ci, t)), "string" == typeof n) {
                                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                        t[n]()
                                    }
                                })
                            }, m(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.1.3"
                                }
                            }]), i
                        }(), d(document).on(Di.CLICK_DATA_API, Fi, function(e) {
                            e.preventDefault(), Ri._jQueryInterface.call(d(this), "show")
                        }), d.fn.tab = Ri._jQueryInterface, d.fn.tab.Constructor = Ri, d.fn.tab.noConflict = function() {
                            return d.fn.tab = Ni, Ri._jQueryInterface
                        }, Ri),
                        Yi = t;
                    if ("undefined" == typeof Yi) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                    var Vi = Yi.fn.jquery.split(" ")[0].split(".");
                    if (Vi[0] < 2 && Vi[1] < 9 || 1 === Vi[0] && 9 === Vi[1] && Vi[2] < 1 || 4 <= Vi[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
                    e.Util = p, e.Alert = Ae, e.Button = ke, e.Carousel = Ie, e.Collapse = Oe, e.Dropdown = Bi, e.Modal = Ui, e.Popover = zi, e.Scrollspy = Ki, e.Tab = Qi, e.Tooltip = $i, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }(t, Xi(4155))
            },
            4155: function(ln, cn) {
                var un, e, t; /*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
                e = "undefined" != typeof window ? window : this, t = function(p, r) {
                    function o(e, t) {
                        return t.toUpperCase()
                    }
                    var f = [],
                        u = f.slice,
                        b = f.concat,
                        a = f.push,
                        s = f.indexOf,
                        l = {},
                        c = l.toString,
                        _ = l.hasOwnProperty,
                        d = "".trim,
                        g = {},
                        w = function(e, t) {
                            return new w.fn.init(e, t)
                        },
                        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                        E = /^-ms-/,
                        x = /-([\da-z])/gi;

                    function T(e) {
                        var t = e.length,
                            n = w.type(e);
                        return "function" !== n && !w.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
                    }
                    w.fn = w.prototype = {
                        jquery: "1.11.0",
                        constructor: w,
                        selector: "",
                        length: 0,
                        toArray: function() {
                            return u.call(this)
                        },
                        get: function(e) {
                            return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
                        },
                        pushStack: function(e) {
                            e = w.merge(this.constructor(), e);
                            return e.prevObject = this, e.context = this.context, e
                        },
                        each: function(e, t) {
                            return w.each(this, e, t)
                        },
                        map: function(n) {
                            return this.pushStack(w.map(this, function(e, t) {
                                return n.call(e, t, e)
                            }))
                        },
                        slice: function() {
                            return this.pushStack(u.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        eq: function(e) {
                            var t = this.length,
                                e = +e + (e < 0 ? t : 0);
                            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor(null)
                        },
                        push: a,
                        sort: f.sort,
                        splice: f.splice
                    }, w.extend = w.fn.extend = function() {
                        var e, t, n, i, r, o = arguments[0] || {},
                            s = 1,
                            a = arguments.length,
                            l = !1;
                        for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || w.isFunction(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
                            if (null != (i = arguments[s]))
                                for (n in i) r = o[n], t = i[n], o !== t && (l && t && (w.isPlainObject(t) || (e = w.isArray(t))) ? (r = e ? (e = !1, r && w.isArray(r) ? r : []) : r && w.isPlainObject(r) ? r : {}, o[n] = w.extend(l, r, t)) : void 0 !== t && (o[n] = t));
                        return o
                    }, w.extend({
                        expando: "jQuery" + ("1.11.0" + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e)
                        },
                        noop: function() {},
                        isFunction: function(e) {
                            return "function" === w.type(e)
                        },
                        isArray: Array.isArray || function(e) {
                            return "array" === w.type(e)
                        },
                        isWindow: function(e) {
                            return null != e && e == e.window
                        },
                        isNumeric: function(e) {
                            return 0 <= e - parseFloat(e)
                        },
                        isEmptyObject: function(e) {
                            for (var t in e) return !1;
                            return !0
                        },
                        isPlainObject: function(e) {
                            if (!e || "object" !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;
                            try {
                                if (e.constructor && !_.call(e, "constructor") && !_.call(e.constructor.prototype, "isPrototypeOf")) return !1
                            } catch (e) {
                                return !1
                            }
                            if (g.ownLast)
                                for (var t in e) return _.call(e, t);
                            for (t in e);
                            return void 0 === t || _.call(e, t)
                        },
                        type: function(e) {
                            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
                        },
                        globalEval: function(e) {
                            e && w.trim(e) && (p.execScript || function(e) {
                                p.eval.call(p, e)
                            })(e)
                        },
                        camelCase: function(e) {
                            return e.replace(E, "ms-").replace(x, o)
                        },
                        nodeName: function(e, t) {
                            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                        },
                        each: function(e, t, n) {
                            var i, r = 0,
                                o = e.length,
                                s = T(e);
                            if (n) {
                                if (s)
                                    for (; r < o && !1 !== (i = t.apply(e[r], n)); r++);
                                else
                                    for (r in e)
                                        if (i = t.apply(e[r], n), !1 === i) break
                            } else if (s)
                                for (; r < o && !1 !== (i = t.call(e[r], r, e[r])); r++);
                            else
                                for (r in e)
                                    if (i = t.call(e[r], r, e[r]), !1 === i) break;
                            return e
                        },
                        trim: d && !d.call("\ufeff ") ? function(e) {
                            return null == e ? "" : d.call(e)
                        } : function(e) {
                            return null == e ? "" : (e + "").replace(h, "")
                        },
                        makeArray: function(e, t) {
                            t = t || [];
                            return null != e && (T(Object(e)) ? w.merge(t, "string" == typeof e ? [e] : e) : a.call(t, e)), t
                        },
                        inArray: function(e, t, n) {
                            var i;
                            if (t) {
                                if (s) return s.call(t, e, n);
                                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                                    if (n in t && t[n] === e) return n
                            }
                            return -1
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                            if (n != n)
                                for (; void 0 !== t[i];) e[r++] = t[i++];
                            return e.length = r, e
                        },
                        grep: function(e, t, n) {
                            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) != s && i.push(e[r]);
                            return i
                        },
                        map: function(e, t, n) {
                            var i, r = 0,
                                o = e.length,
                                s = [];
                            if (T(e))
                                for (; r < o; r++) null != (i = t(e[r], r, n)) && s.push(i);
                            else
                                for (r in e) i = t(e[r], r, n), null != i && s.push(i);
                            return b.apply([], s)
                        },
                        guid: 1,
                        proxy: function(e, t) {
                            var n, i;
                            return "string" == typeof t && (i = e[t], t = e, e = i), w.isFunction(e) ? (n = u.call(arguments, 2), (i = function() {
                                return e.apply(t || this, n.concat(u.call(arguments)))
                            }).guid = e.guid = e.guid || w.guid++, i) : void 0
                        },
                        now: function() {
                            return +new Date
                        },
                        support: g
                    }), w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                        l["[object " + t + "]"] = t.toLowerCase()
                    });
                    var e = function(i) {
                            var e, _, w, o, r, N, D, c, u, A, E, s, k, x, a, f, I, T = "sizzle" + -new Date,
                                C = i.document,
                                O = 0,
                                d = 0,
                                h = re(),
                                p = re(),
                                m = re(),
                                g = function(e, t) {
                                    return e === t && (u = !0), 0
                                },
                                v = "undefined",
                                y = {}.hasOwnProperty,
                                b = [],
                                L = b.pop,
                                j = b.push,
                                H = b.push,
                                P = b.slice,
                                M = b.indexOf || function(e) {
                                    for (var t = 0, n = this.length; t < n; t++)
                                        if (this[t] === e) return t;
                                    return -1
                                },
                                F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                n = "[\\x20\\t\\r\\n\\f]",
                                q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                                W = q.replace("w", "w#"),
                                R = "\\[" + n + "*(" + q + ")" + n + "*(?:([*^$|!~]?=)" + n + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + n + "*\\]",
                                B = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + R.replace(3, 8) + ")*)|.*)\\)|)",
                                U = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$", "g"),
                                $ = new RegExp("^" + n + "*," + n + "*"),
                                z = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"),
                                K = new RegExp("=" + n + "*([^\\]'\"]*?)" + n + "*\\]", "g"),
                                Q = new RegExp(B),
                                Y = new RegExp("^" + W + "$"),
                                V = {
                                    ID: new RegExp("^#(" + q + ")"),
                                    CLASS: new RegExp("^\\.(" + q + ")"),
                                    TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
                                    ATTR: new RegExp("^" + R),
                                    PSEUDO: new RegExp("^" + B),
                                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)", "i"),
                                    bool: new RegExp("^(?:" + F + ")$", "i"),
                                    needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)", "i")
                                },
                                X = /^(?:input|select|textarea|button)$/i,
                                J = /^h\d$/i,
                                G = /^[^{]+\{\s*\[native \w/,
                                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                ee = /[+~]/,
                                te = /'|\\/g,
                                ne = new RegExp("\\\\([\\da-f]{1,6}" + n + "?|(" + n + ")|.)", "ig"),
                                ie = function(e, t, n) {
                                    var i = "0x" + t - 65536;
                                    return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                                };
                            try {
                                H.apply(b = P.call(C.childNodes), C.childNodes), b[C.childNodes.length].nodeType
                            } catch (e) {
                                H = {
                                    apply: b.length ? function(e, t) {
                                        j.apply(e, P.call(t))
                                    } : function(e, t) {
                                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                                        e.length = n - 1
                                    }
                                }
                            }

                            function S(e, t, n, u) {
                                var f, d, i, h, r, o;
                                if ((t ? t.ownerDocument || t : C) !== E && A(t), n = n || [], !e || "string" != typeof e) return n;
                                if (1 !== (c = (t = t || E).nodeType) && 9 !== c) return [];
                                if (k && !u) {
                                    if (r = Z.exec(e))
                                        if (o = r[1]) {
                                            if (9 === c) {
                                                if (!(i = t.getElementById(o)) || !i.parentNode) return n;
                                                if (i.id === o) return n.push(i), n
                                            } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(o)) && I(t, i) && i.id === o) return n.push(i), n
                                        } else {
                                            if (r[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                                            if ((o = r[3]) && _.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(o)), n
                                        }
                                    if (_.qsa && (!x || !x.test(e))) {
                                        if (h = i = T, r = t, o = 9 === c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                                            for (d = ue(e), (i = t.getAttribute("id")) ? h = i.replace(te, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", f = d.length; f--;) d[f] = h + fe(d[f]);
                                            r = ee.test(e) && le(t.parentNode) || t, o = d.join(",")
                                        }
                                        if (o) try {
                                            return H.apply(n, r.querySelectorAll(o)), n
                                        } catch (e) {} finally {
                                            i || t.removeAttribute("id")
                                        }
                                    }
                                }
                                var p, s, m, g, v, a = e.replace(U, "$1"),
                                    l = t,
                                    y = n,
                                    b = u,
                                    c = ue(a);
                                if (!b && 1 === c.length) {
                                    if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (m = s[0]).type && _.getById && 9 === l.nodeType && k && w.relative[s[1].type]) {
                                        if (!(l = (w.find.ID(m.matches[0].replace(ne, ie), l) || [])[0])) return y;
                                        a = a.slice(s.shift().value.length)
                                    }
                                    for (p = V.needsContext.test(a) ? 0 : s.length; p-- && (m = s[p], !w.relative[g = m.type]);)
                                        if ((v = w.find[g]) && (b = v(m.matches[0].replace(ne, ie), ee.test(s[0].type) && le(l.parentNode) || l))) {
                                            if (s.splice(p, 1), !(a = b.length && fe(s))) return H.apply(y, b), y;
                                            break
                                        }
                                }
                                return N(a, c)(b, l, !k, y, ee.test(a) && le(l.parentNode) || l), y
                            }

                            function re() {
                                var n = [];

                                function i(e, t) {
                                    return n.push(e + " ") > w.cacheLength && delete i[n.shift()], i[e + " "] = t
                                }
                                return i
                            }

                            function l(e) {
                                return e[T] = !0, e
                            }

                            function t(e) {
                                var t = E.createElement("div");
                                try {
                                    return !!e(t)
                                } catch (e) {
                                    return !1
                                } finally {
                                    t.parentNode && t.parentNode.removeChild(t)
                                }
                            }

                            function oe(e, t) {
                                for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
                            }

                            function se(e, t) {
                                var n = t && e,
                                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                                if (i) return i;
                                if (n)
                                    for (; n = n.nextSibling;)
                                        if (n === t) return -1;
                                return e ? 1 : -1
                            }

                            function ae(s) {
                                return l(function(o) {
                                    return o = +o, l(function(e, t) {
                                        for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                                    })
                                })
                            }

                            function le(e) {
                                return e && typeof e.getElementsByTagName !== v && e
                            }
                            for (e in _ = S.support = {}, r = S.isXML = function(e) {
                                    e = e && (e.ownerDocument || e).documentElement;
                                    return !!e && "HTML" !== e.nodeName
                                }, A = S.setDocument = function(e) {
                                    var l = e ? e.ownerDocument || e : C,
                                        e = l.defaultView;
                                    return l !== E && 9 === l.nodeType && l.documentElement ? (s = (E = l).documentElement, k = !r(l), e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", function() {
                                        A()
                                    }, !1) : e.attachEvent && e.attachEvent("onunload", function() {
                                        A()
                                    })), _.attributes = t(function(e) {
                                        return e.className = "i", !e.getAttribute("className")
                                    }), _.getElementsByTagName = t(function(e) {
                                        return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                                    }), _.getElementsByClassName = G.test(l.getElementsByClassName) && t(function(e) {
                                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                                    }), _.getById = t(function(e) {
                                        return s.appendChild(e).id = T, !l.getElementsByName || !l.getElementsByName(T).length
                                    }), _.getById ? (w.find.ID = function(e, t) {
                                        if (typeof t.getElementById !== v && k) return (t = t.getElementById(e)) && t.parentNode ? [t] : []
                                    }, w.filter.ID = function(e) {
                                        var t = e.replace(ne, ie);
                                        return function(e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }) : (delete w.find.ID, w.filter.ID = function(e) {
                                        var t = e.replace(ne, ie);
                                        return function(e) {
                                            e = typeof e.getAttributeNode !== v && e.getAttributeNode("id");
                                            return e && e.value === t
                                        }
                                    }), w.find.TAG = _.getElementsByTagName ? function(e, t) {
                                        return typeof t.getElementsByTagName !== v ? t.getElementsByTagName(e) : void 0
                                    } : function(e, t) {
                                        var n, i = [],
                                            r = 0,
                                            o = t.getElementsByTagName(e);
                                        if ("*" !== e) return o;
                                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                        return i
                                    }, w.find.CLASS = _.getElementsByClassName && function(e, t) {
                                        return typeof t.getElementsByClassName !== v && k ? t.getElementsByClassName(e) : void 0
                                    }, a = [], x = [], (_.qsa = G.test(l.querySelectorAll)) && (t(function(e) {
                                        e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && x.push("[*^$]=" + n + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || x.push("\\[" + n + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || x.push(":checked")
                                    }), t(function(e) {
                                        var t = l.createElement("input");
                                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && x.push("name" + n + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || x.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), x.push(",.*:")
                                    })), (_.matchesSelector = G.test(f = s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && t(function(e) {
                                        _.disconnectedMatch = f.call(e, "div"), f.call(e, "[s!='']:x"), a.push("!=", B)
                                    }), x = x.length && new RegExp(x.join("|")), a = a.length && new RegExp(a.join("|")), e = G.test(s.compareDocumentPosition), I = e || G.test(s.contains) ? function(e, t) {
                                        var n = 9 === e.nodeType ? e.documentElement : e,
                                            t = t && t.parentNode;
                                        return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                                    } : function(e, t) {
                                        if (t)
                                            for (; t = t.parentNode;)
                                                if (t === e) return !0;
                                        return !1
                                    }, g = e ? function(e, t) {
                                        if (e === t) return u = !0, 0;
                                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === C && I(C, e) ? -1 : t === l || t.ownerDocument === C && I(C, t) ? 1 : c ? M.call(c, e) - M.call(c, t) : 0 : 4 & n ? -1 : 1)
                                    } : function(e, t) {
                                        if (e === t) return u = !0, 0;
                                        var n, i = 0,
                                            r = e.parentNode,
                                            o = t.parentNode,
                                            s = [e],
                                            a = [t];
                                        if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : c ? M.call(c, e) - M.call(c, t) : 0;
                                        if (r === o) return se(e, t);
                                        for (n = e; n = n.parentNode;) s.unshift(n);
                                        for (n = t; n = n.parentNode;) a.unshift(n);
                                        for (; s[i] === a[i];) i++;
                                        return i ? se(s[i], a[i]) : s[i] === C ? -1 : a[i] === C ? 1 : 0
                                    }, l) : E
                                }, S.matches = function(e, t) {
                                    return S(e, null, null, t)
                                }, S.matchesSelector = function(e, t) {
                                    if ((e.ownerDocument || e) !== E && A(e), t = t.replace(K, "='$1']"), !(!_.matchesSelector || !k || a && a.test(t) || x && x.test(t))) try {
                                        var n = f.call(e, t);
                                        if (n || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                                    } catch (e) {}
                                    return 0 < S(t, E, null, [e]).length
                                }, S.contains = function(e, t) {
                                    return (e.ownerDocument || e) !== E && A(e), I(e, t)
                                }, S.attr = function(e, t) {
                                    (e.ownerDocument || e) !== E && A(e);
                                    var n = w.attrHandle[t.toLowerCase()],
                                        n = n && y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                                    return void 0 !== n ? n : _.attributes || !k ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                                }, S.error = function(e) {
                                    throw new Error("Syntax error, unrecognized expression: " + e)
                                }, S.uniqueSort = function(e) {
                                    var t, n = [],
                                        i = 0,
                                        r = 0;
                                    if (u = !_.detectDuplicates, c = !_.sortStable && e.slice(0), e.sort(g), u) {
                                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                                        for (; i--;) e.splice(n[i], 1)
                                    }
                                    return c = null, e
                                }, o = S.getText = function(e) {
                                    var t, n = "",
                                        i = 0,
                                        r = e.nodeType;
                                    if (r) {
                                        if (1 === r || 9 === r || 11 === r) {
                                            if ("string" == typeof e.textContent) return e.textContent;
                                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                                        } else if (3 === r || 4 === r) return e.nodeValue
                                    } else
                                        for (; t = e[i++];) n += o(t);
                                    return n
                                }, (w = S.selectors = {
                                    cacheLength: 50,
                                    createPseudo: l,
                                    match: V,
                                    attrHandle: {},
                                    find: {},
                                    relative: {
                                        ">": {
                                            dir: "parentNode",
                                            first: !0
                                        },
                                        " ": {
                                            dir: "parentNode"
                                        },
                                        "+": {
                                            dir: "previousSibling",
                                            first: !0
                                        },
                                        "~": {
                                            dir: "previousSibling"
                                        }
                                    },
                                    preFilter: {
                                        ATTR: function(e) {
                                            return e[1] = e[1].replace(ne, ie), e[3] = (e[4] || e[5] || "").replace(ne, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                        },
                                        CHILD: function(e) {
                                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || S.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && S.error(e[0]), e
                                        },
                                        PSEUDO: function(e) {
                                            var t, n = !e[5] && e[2];
                                            return V.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && Q.test(n) && (t = ue(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                        }
                                    },
                                    filter: {
                                        TAG: function(e) {
                                            var t = e.replace(ne, ie).toLowerCase();
                                            return "*" === e ? function() {
                                                return !0
                                            } : function(e) {
                                                return e.nodeName && e.nodeName.toLowerCase() === t
                                            }
                                        },
                                        CLASS: function(e) {
                                            var t = h[e + " "];
                                            return t || (t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) && h(e, function(e) {
                                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== v && e.getAttribute("class") || "")
                                            })
                                        },
                                        ATTR: function(t, n, i) {
                                            return function(e) {
                                                e = S.attr(e, t);
                                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                                            }
                                        },
                                        CHILD: function(h, e, t, p, m) {
                                            var g = "nth" !== h.slice(0, 3),
                                                v = "last" !== h.slice(-4),
                                                y = "of-type" === e;
                                            return 1 === p && 0 === m ? function(e) {
                                                return !!e.parentNode
                                            } : function(e, u, f) {
                                                var t, n, i, r, o, s, a = g != v ? "nextSibling" : "previousSibling",
                                                    l = e.parentNode,
                                                    d = y && e.nodeName.toLowerCase(),
                                                    c = !f && !y;
                                                if (l) {
                                                    if (g) {
                                                        for (; a;) {
                                                            for (i = e; i = i[a];)
                                                                if (y ? i.nodeName.toLowerCase() === d : 1 === i.nodeType) return !1;
                                                            s = a = "only" === h && !s && "nextSibling"
                                                        }
                                                        return !0
                                                    }
                                                    if (s = [v ? l.firstChild : l.lastChild], v && c) {
                                                        for (o = (t = (n = l[T] || (l[T] = {}))[h] || [])[0] === O && t[1], r = t[0] === O && t[2], i = o && l.childNodes[o]; i = ++o && i && i[a] || (r = o = 0) || s.pop();)
                                                            if (1 === i.nodeType && ++r && i === e) {
                                                                n[h] = [O, o, r];
                                                                break
                                                            }
                                                    } else if (c && (t = (e[T] || (e[T] = {}))[h]) && t[0] === O) r = t[1];
                                                    else
                                                        for (;
                                                            (i = ++o && i && i[a] || (r = o = 0) || s.pop()) && ((y ? i.nodeName.toLowerCase() !== d : 1 !== i.nodeType) || !++r || (c && ((i[T] || (i[T] = {}))[h] = [O, r]), i !== e)););
                                                    return (r -= m) === p || r % p == 0 && 0 <= r / p
                                                }
                                            }
                                        },
                                        PSEUDO: function(e, o) {
                                            var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || S.error("unsupported pseudo: " + e);
                                            return s[T] ? s(o) : 1 < s.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                                                for (var n, i = s(e, o), r = i.length; r--;) e[n = M.call(e, i[r])] = !(t[n] = i[r])
                                            }) : function(e) {
                                                return s(e, 0, t)
                                            }) : s
                                        }
                                    },
                                    pseudos: {
                                        not: l(function(e) {
                                            var i = [],
                                                r = [],
                                                a = N(e.replace(U, "$1"));
                                            return a[T] ? l(function(e, t, n, i) {
                                                for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                                            }) : function(e, t, n) {
                                                return i[0] = e, a(i, null, n, r), !r.pop()
                                            }
                                        }),
                                        has: l(function(t) {
                                            return function(e) {
                                                return 0 < S(t, e).length
                                            }
                                        }),
                                        contains: l(function(t) {
                                            return function(e) {
                                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                                            }
                                        }),
                                        lang: l(function(n) {
                                            return Y.test(n || "") || S.error("unsupported lang: " + n), n = n.replace(ne, ie).toLowerCase(),
                                                function(e) {
                                                    var t;
                                                    do {
                                                        if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                                    return !1
                                                }
                                        }),
                                        target: function(e) {
                                            var t = i.location && i.location.hash;
                                            return t && t.slice(1) === e.id
                                        },
                                        root: function(e) {
                                            return e === s
                                        },
                                        focus: function(e) {
                                            return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                        },
                                        enabled: function(e) {
                                            return !1 === e.disabled
                                        },
                                        disabled: function(e) {
                                            return !0 === e.disabled
                                        },
                                        checked: function(e) {
                                            var t = e.nodeName.toLowerCase();
                                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                                        },
                                        selected: function(e) {
                                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                        },
                                        empty: function(e) {
                                            for (e = e.firstChild; e; e = e.nextSibling)
                                                if (e.nodeType < 6) return !1;
                                            return !0
                                        },
                                        parent: function(e) {
                                            return !w.pseudos.empty(e)
                                        },
                                        header: function(e) {
                                            return J.test(e.nodeName)
                                        },
                                        input: function(e) {
                                            return X.test(e.nodeName)
                                        },
                                        button: function(e) {
                                            var t = e.nodeName.toLowerCase();
                                            return "input" === t && "button" === e.type || "button" === t
                                        },
                                        text: function(e) {
                                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                                        },
                                        first: ae(function() {
                                            return [0]
                                        }),
                                        last: ae(function(e, t) {
                                            return [t - 1]
                                        }),
                                        eq: ae(function(e, t, n) {
                                            return [n < 0 ? n + t : n]
                                        }),
                                        even: ae(function(e, t) {
                                            for (var n = 0; n < t; n += 2) e.push(n);
                                            return e
                                        }),
                                        odd: ae(function(e, t) {
                                            for (var n = 1; n < t; n += 2) e.push(n);
                                            return e
                                        }),
                                        lt: ae(function(e, t, n) {
                                            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                                            return e
                                        }),
                                        gt: ae(function(e, t, n) {
                                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                            return e
                                        })
                                    }
                                }).pseudos.nth = w.pseudos.eq, {
                                    radio: !0,
                                    checkbox: !0,
                                    file: !0,
                                    password: !0,
                                    image: !0
                                }) w.pseudos[e] = function(t) {
                                return function(e) {
                                    return "input" === e.nodeName.toLowerCase() && e.type === t
                                }
                            }(e);
                            for (e in {
                                    submit: !0,
                                    reset: !0
                                }) w.pseudos[e] = function(n) {
                                return function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t || "button" === t) && e.type === n
                                }
                            }(e);

                            function ce() {}

                            function ue(e, t) {
                                var n, i, r, o, s, a, l, c = p[e + " "];
                                if (c) return t ? 0 : c.slice(0);
                                for (s = e, a = [], l = w.preFilter; s;) {
                                    for (o in n && !(i = $.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), r.push({
                                            value: n,
                                            type: i[0].replace(U, " ")
                                        }), s = s.slice(n.length)), w.filter) !(i = V[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                                        value: n,
                                        type: o,
                                        matches: i
                                    }), s = s.slice(n.length));
                                    if (!n) break
                                }
                                return t ? s.length : s ? S.error(e) : p(e, a).slice(0)
                            }

                            function fe(e) {
                                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                                return i
                            }

                            function de(s, e, t) {
                                var a = e.dir,
                                    l = t && "parentNode" === a,
                                    c = d++;
                                return e.first ? function(e, t, n) {
                                    for (; e = e[a];)
                                        if (1 === e.nodeType || l) return s(e, t, n)
                                } : function(e, t, n) {
                                    var i, r, o = [O, c];
                                    if (n) {
                                        for (; e = e[a];)
                                            if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                                    } else
                                        for (; e = e[a];)
                                            if (1 === e.nodeType || l) {
                                                if ((i = (r = e[T] || (e[T] = {}))[a]) && i[0] === O && i[1] === c) return o[2] = i[2];
                                                if ((r[a] = o)[2] = s(e, t, n)) return !0
                                            }
                                }
                            }

                            function he(r) {
                                return 1 < r.length ? function(e, t, n) {
                                    for (var i = r.length; i--;)
                                        if (!r[i](e, t, n)) return !1;
                                    return !0
                                } : r[0]
                            }

                            function pe(e, t, n, i, r) {
                                for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) !(o = e[a]) || n && !n(o, i, r) || (s.push(o), c && t.push(a));
                                return s
                            }

                            function me(h, p, m, g, v, e) {
                                return g && !g[T] && (g = me(g)), v && !v[T] && (v = me(v, e)), l(function(e, t, n, i) {
                                    var r, o, s, u = [],
                                        a = [],
                                        f = t.length,
                                        d = e || function(e, t, n) {
                                            for (var i = 0, r = t.length; i < r; i++) S(e, t[i], n);
                                            return n
                                        }(p || "*", n.nodeType ? [n] : n, []),
                                        l = !h || !e && p ? d : pe(d, u, h, n, i),
                                        c = m ? v || (e ? h : f || g) ? [] : t : l;
                                    if (m && m(l, c, n, i), g)
                                        for (r = pe(c, a), g(r, [], n, i), o = r.length; o--;)(s = r[o]) && (c[a[o]] = !(l[a[o]] = s));
                                    if (e) {
                                        if (v || h) {
                                            if (v) {
                                                for (r = [], o = c.length; o--;)(s = c[o]) && r.push(l[o] = s);
                                                v(null, c = [], r, i)
                                            }
                                            for (o = c.length; o--;)(s = c[o]) && -1 < (r = v ? M.call(e, s) : u[o]) && (e[r] = !(t[r] = s))
                                        }
                                    } else c = pe(c === t ? c.splice(f, c.length) : c), v ? v(null, t, c, i) : H.apply(t, c)
                                })
                            }

                            function ge(g, v) {
                                function e(e, t, u, n, i) {
                                    var r, o, s, a = 0,
                                        l = "0",
                                        f = e && [],
                                        c = [],
                                        d = D,
                                        h = e || b && w.find.TAG("*", i),
                                        p = O += null == d ? 1 : Math.random() || .1,
                                        m = h.length;
                                    for (i && (D = t !== E && t); l !== m && null != (r = h[l]); l++) {
                                        if (b && r) {
                                            for (o = 0; s = g[o++];)
                                                if (s(r, t, u)) {
                                                    n.push(r);
                                                    break
                                                }
                                            i && (O = p)
                                        }
                                        y && ((r = !s && r) && a--, e && f.push(r))
                                    }
                                    if (a += l, y && l !== a) {
                                        for (o = 0; s = v[o++];) s(f, c, t, u);
                                        if (e) {
                                            if (0 < a)
                                                for (; l--;) f[l] || c[l] || (c[l] = L.call(n));
                                            c = pe(c)
                                        }
                                        H.apply(n, c), i && !e && 0 < c.length && 1 < a + v.length && S.uniqueSort(n)
                                    }
                                    return i && (O = p, D = d), f
                                }
                                var y = 0 < v.length,
                                    b = 0 < g.length;
                                return y ? l(e) : e
                            }
                            return ce.prototype = w.filters = w.pseudos, w.setFilters = new ce, N = S.compile = function(e, t) {
                                var n, i = [],
                                    r = [],
                                    o = m[e + " "];
                                if (!o) {
                                    for (n = (t = t || ue(e)).length; n--;)((o = function e(t) {
                                        for (var i, n, r, o = t.length, s = w.relative[t[0].type], a = s || w.relative[" "], l = s ? 1 : 0, u = de(function(e) {
                                                return e === i
                                            }, a, !0), f = de(function(e) {
                                                return -1 < M.call(i, e)
                                            }, a, !0), c = [function(e, t, n) {
                                                return !s && (n || t !== D) || ((i = t).nodeType ? u : f)(e, t, n)
                                            }]; l < o; l++)
                                            if (n = w.relative[t[l].type]) c = [de(he(c), n)];
                                            else {
                                                if ((n = w.filter[t[l].type].apply(null, t[l].matches))[T]) {
                                                    for (r = ++l; r < o && !w.relative[t[r].type]; r++);
                                                    return me(1 < l && he(c), 1 < l && fe(t.slice(0, l - 1).concat({
                                                        value: " " === t[l - 2].type ? "*" : ""
                                                    })).replace(U, "$1"), n, l < r && e(t.slice(l, r)), r < o && e(t = t.slice(r)), r < o && fe(t))
                                                }
                                                c.push(n)
                                            }
                                        return he(c)
                                    }(t[n]))[T] ? i : r).push(o);
                                    o = m(e, ge(r, i))
                                }
                                return o
                            }, _.sortStable = T.split("").sort(g).join("") === T, _.detectDuplicates = !!u, A(), _.sortDetached = t(function(e) {
                                return 1 & e.compareDocumentPosition(E.createElement("div"))
                            }), t(function(e) {
                                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                            }) || oe("type|href|height|width", function(e, t, n) {
                                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                            }), _.attributes && t(function(e) {
                                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                            }) || oe("value", function(e, t, n) {
                                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                            }), t(function(e) {
                                return null == e.getAttribute("disabled")
                            }) || oe(F, function(e, t, n) {
                                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                            }), S
                        }(p),
                        C = (w.find = e, w.expr = e.selectors, w.expr[":"] = w.expr.pseudos, w.unique = e.uniqueSort, w.text = e.getText, w.isXMLDoc = e.isXML, w.contains = e.contains, w.expr.match.needsContext),
                        S = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                        N = /^.[^:#\[\.,]*$/;

                    function D(e, n, i) {
                        if (w.isFunction(n)) return w.grep(e, function(e, t) {
                            return !!n.call(e, t, e) !== i
                        });
                        if (n.nodeType) return w.grep(e, function(e) {
                            return e === n !== i
                        });
                        if ("string" == typeof n) {
                            if (N.test(n)) return w.filter(n, e, i);
                            n = w.filter(n, e)
                        }
                        return w.grep(e, function(e) {
                            return 0 <= w.inArray(e, n) !== i
                        })
                    }
                    w.filter = function(e, t, n) {
                        var i = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function(e) {
                            return 1 === e.nodeType
                        }))
                    }, w.fn.extend({
                        find: function(e) {
                            var t, n = [],
                                i = this,
                                r = i.length;
                            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                                for (t = 0; t < r; t++)
                                    if (w.contains(i[t], this)) return !0
                            }));
                            for (t = 0; t < r; t++) w.find(e, i[t], n);
                            return (n = this.pushStack(1 < r ? w.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
                        },
                        filter: function(e) {
                            return this.pushStack(D(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(D(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!D(this, "string" == typeof e && C.test(e) ? w(e) : e || [], !1).length
                        }
                    });
                    var A, m = p.document,
                        k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                        I = ((w.fn.init = function(e, t) {
                            var n, i;
                            if (!e) return this;
                            if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? void 0 !== A.ready ? A.ready(e) : e(w) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this));
                            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : k.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || A : this.constructor(t)).find(e);
                            if (n[1]) {
                                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), S.test(n[1]) && w.isPlainObject(t))
                                    for (n in t) w.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                                return this
                            }
                            if ((i = m.getElementById(n[2])) && i.parentNode) {
                                if (i.id !== n[2]) return A.find(e);
                                this.length = 1, this[0] = i
                            }
                            return this.context = m, this.selector = e, this
                        }).prototype = w.fn, A = w(m), /^(?:parents|prev(?:Until|All))/),
                        O = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function L(e, t) {
                        for (;
                            (e = e[t]) && 1 !== e.nodeType;);
                        return e
                    }
                    w.extend({
                        dir: function(e, t, n) {
                            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !w(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
                            return i
                        },
                        sibling: function(e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n
                        }
                    }), w.fn.extend({
                        has: function(e) {
                            var t, n = w(e, this),
                                i = n.length;
                            return this.filter(function() {
                                for (t = 0; t < i; t++)
                                    if (w.contains(this, n[t])) return !0
                            })
                        },
                        closest: function(e, t) {
                            for (var n, i = 0, r = this.length, o = [], s = C.test(e) || "string" != typeof e ? w(e, t || this.context) : 0; i < r; i++)
                                for (n = this[i]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                            return this.pushStack(1 < o.length ? w.unique(o) : o)
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(e, t) {
                            return this.pushStack(w.unique(w.merge(this.get(), w(e, t))))
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), w.each({
                        parent: function(e) {
                            e = e.parentNode;
                            return e && 11 !== e.nodeType ? e : null
                        },
                        parents: function(e) {
                            return w.dir(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return w.dir(e, "parentNode", n)
                        },
                        next: function(e) {
                            return L(e, "nextSibling")
                        },
                        prev: function(e) {
                            return L(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return w.dir(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return w.dir(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return w.dir(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return w.dir(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return w.sibling((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return w.sibling(e.firstChild)
                        },
                        contents: function(e) {
                            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
                        }
                    }, function(i, r) {
                        w.fn[i] = function(e, t) {
                            var n = w.map(this, r, e);
                            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = w.filter(t, n)), 1 < this.length && (O[i] || (n = w.unique(n)), I.test(i) && (n = n.reverse())), this.pushStack(n)
                        }
                    });
                    var j, H = /\S+/g,
                        P = {};

                    function M() {
                        m.addEventListener ? (m.removeEventListener("DOMContentLoaded", F, !1), p.removeEventListener("load", F, !1)) : (m.detachEvent("onreadystatechange", F), p.detachEvent("onload", F))
                    }

                    function F() {
                        !m.addEventListener && "load" !== event.type && "complete" !== m.readyState || (M(), w.ready())
                    }
                    w.Callbacks = function(r) {
                        var e, n;
                        r = "string" == typeof r ? P[r] || (n = P[e = r] = {}, w.each(e.match(H) || [], function(e, t) {
                            n[t] = !0
                        }), n) : w.extend({}, r);

                        function i(e) {
                            for (t = r.memory && e, f = !0, a = d || 0, d = 0, s = l.length, o = !0; l && a < s; a++)
                                if (!1 === l[a].apply(e[0], e[1]) && r.stopOnFalse) {
                                    t = !1;
                                    break
                                }
                            o = !1, l && (c ? c.length && i(c.shift()) : t ? l = [] : u.disable())
                        }
                        var o, t, f, s, a, d, l = [],
                            c = !r.once && [],
                            u = {
                                add: function() {
                                    var e;
                                    return l && (e = l.length, function i(e) {
                                        w.each(e, function(e, t) {
                                            var n = w.type(t);
                                            "function" === n ? r.unique && u.has(t) || l.push(t) : t && t.length && "string" !== n && i(t)
                                        })
                                    }(arguments), o ? s = l.length : t && (d = e, i(t))), this
                                },
                                remove: function() {
                                    return l && w.each(arguments, function(e, t) {
                                        for (var n; - 1 < (n = w.inArray(t, l, n));) l.splice(n, 1), o && (n <= s && s--, n <= a && a--)
                                    }), this
                                },
                                has: function(e) {
                                    return e ? -1 < w.inArray(e, l) : !(!l || !l.length)
                                },
                                empty: function() {
                                    return l = [], s = 0, this
                                },
                                disable: function() {
                                    return l = c = t = void 0, this
                                },
                                disabled: function() {
                                    return !l
                                },
                                lock: function() {
                                    return c = void 0, t || u.disable(), this
                                },
                                locked: function() {
                                    return !c
                                },
                                fireWith: function(e, t) {
                                    return !l || f && !c || (t = [e, (t = t || []).slice ? t.slice() : t], o ? c.push(t) : i(t)), this
                                },
                                fire: function() {
                                    return u.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!f
                                }
                            };
                        return u
                    }, w.extend({
                        Deferred: function(e) {
                            var o = [
                                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                                    ["notify", "progress", w.Callbacks("memory")]
                                ],
                                r = "pending",
                                s = {
                                    state: function() {
                                        return r
                                    },
                                    always: function() {
                                        return a.done(arguments).fail(arguments), this
                                    },
                                    then: function() {
                                        var r = arguments;
                                        return w.Deferred(function(i) {
                                            w.each(o, function(e, t) {
                                                var n = w.isFunction(r[e]) && r[e];
                                                a[t[1]](function() {
                                                    var e = n && n.apply(this, arguments);
                                                    e && w.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                                                })
                                            }), r = null
                                        }).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? w.extend(e, s) : s
                                    }
                                },
                                a = {};
                            return s.pipe = s.then, w.each(o, function(e, t) {
                                var n = t[2],
                                    i = t[3];
                                s[t[1]] = n.add, i && n.add(function() {
                                    r = i
                                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
                                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                                }, a[t[0] + "With"] = n.fireWith
                            }), s.promise(a), e && e.call(a, a), a
                        },
                        when: function(e) {
                            function t(t, n, i) {
                                return function(e) {
                                    n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === r ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                                }
                            }
                            var r, n, i, o = 0,
                                s = u.call(arguments),
                                a = s.length,
                                l = 1 !== a || e && w.isFunction(e.promise) ? a : 0,
                                c = 1 === l ? e : w.Deferred();
                            if (1 < a)
                                for (r = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) s[o] && w.isFunction(s[o].promise) ? s[o].promise().done(t(o, i, s)).fail(c.reject).progress(t(o, n, r)) : --l;
                            return l || c.resolveWith(i, s), c.promise()
                        }
                    }), w.fn.ready = function(e) {
                        return w.ready.promise().done(e), this
                    }, w.extend({
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(e) {
                            e ? w.readyWait++ : w.ready(!0)
                        },
                        ready: function(e) {
                            if (!0 === e ? !--w.readyWait : !w.isReady) {
                                if (!m.body) return setTimeout(w.ready);
                                (w.isReady = !0) !== e && 0 < --w.readyWait || (j.resolveWith(m, [w]), w.fn.trigger && w(m).trigger("ready").off("ready"))
                            }
                        }
                    }), w.ready.promise = function(e) {
                        if (!j)
                            if (j = w.Deferred(), "complete" === m.readyState) setTimeout(w.ready);
                            else if (m.addEventListener) m.addEventListener("DOMContentLoaded", F, !1), p.addEventListener("load", F, !1);
                        else {
                            m.attachEvent("onreadystatechange", F), p.attachEvent("onload", F);
                            var n = !1;
                            try {
                                n = null == p.frameElement && m.documentElement
                            } catch (e) {}
                            n && n.doScroll && ! function t() {
                                if (!w.isReady) {
                                    try {
                                        n.doScroll("left")
                                    } catch (e) {
                                        return setTimeout(t, 50)
                                    }
                                    M(), w.ready()
                                }
                            }()
                        }
                        return j.promise(e)
                    };
                    var q, W = "undefined";
                    for (q in w(g)) break;
                    g.ownLast = "0" !== q, g.inlineBlockNeedsLayout = !1, w(function() {
                        var e, t, n = m.getElementsByTagName("body")[0];
                        n && ((e = m.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = m.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom != W && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (g.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e))
                    });
                    e = m.createElement("div");
                    if (null == g.deleteExpando) {
                        g.deleteExpando = !0;
                        try {
                            delete e.test
                        } catch (e) {
                            g.deleteExpando = !1
                        }
                    }
                    w.acceptData = function(e) {
                        var t = w.noData[(e.nodeName + " ").toLowerCase()],
                            n = +e.nodeType || 1;
                        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
                    };
                    var R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        B = /([A-Z])/g;

                    function U(e, t, n) {
                        if (void 0 === n && 1 === e.nodeType) {
                            var i = "data-" + t.replace(B, "-$1").toLowerCase();
                            if ("string" == typeof(n = e.getAttribute(i))) {
                                try {
                                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? w.parseJSON(n) : n)
                                } catch (e) {}
                                w.data(e, t, n)
                            } else n = void 0
                        }
                        return n
                    }

                    function $(e) {
                        for (var t in e)
                            if (("data" !== t || !w.isEmptyObject(e[t])) && "toJSON" !== t) return;
                        return 1
                    }

                    function z(e, t, n, i) {
                        if (w.acceptData(e)) {
                            var r, o = w.expando,
                                s = e.nodeType,
                                a = s ? w.cache : e,
                                l = s ? e[o] : e[o] && o;
                            if (l && a[l] && (i || a[l].data) || void 0 !== n || "string" != typeof t) return a[l = l || (s ? e[o] = f.pop() || w.guid++ : o)] || (a[l] = s ? {} : {
                                toJSON: w.noop
                            }), "object" != typeof t && "function" != typeof t || (i ? a[l] = w.extend(a[l], t) : a[l].data = w.extend(a[l].data, t)), e = a[l], i || (e.data || (e.data = {}), e = e.data), void 0 !== n && (e[w.camelCase(t)] = n), "string" == typeof t ? null == (r = e[t]) && (r = e[w.camelCase(t)]) : r = e, r
                        }
                    }

                    function K(e, t, n) {
                        if (w.acceptData(e)) {
                            var i, r, o = e.nodeType,
                                s = o ? w.cache : e,
                                a = o ? e[w.expando] : w.expando;
                            if (s[a]) {
                                if (t && (i = n ? s[a] : s[a].data)) {
                                    r = (t = w.isArray(t) ? t.concat(w.map(t, w.camelCase)) : t in i ? [t] : (t = w.camelCase(t)) in i ? [t] : t.split(" ")).length;
                                    for (; r--;) delete i[t[r]];
                                    if (n ? !$(i) : !w.isEmptyObject(i)) return
                                }(n || (delete s[a].data, $(s[a]))) && (o ? w.cleanData([e], !0) : g.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                            }
                        }
                    }
                    w.extend({
                        cache: {},
                        noData: {
                            "applet ": !0,
                            "embed ": !0,
                            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                        },
                        hasData: function(e) {
                            return !!(e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando]) && !$(e)
                        },
                        data: function(e, t, n) {
                            return z(e, t, n)
                        },
                        removeData: function(e, t) {
                            return K(e, t)
                        },
                        _data: function(e, t, n) {
                            return z(e, t, n, !0)
                        },
                        _removeData: function(e, t) {
                            return K(e, t, !0)
                        }
                    }), w.fn.extend({
                        data: function(e, t) {
                            var n, i, r, o = this[0],
                                s = o && o.attributes;
                            if (void 0 !== e) return "object" == typeof e ? this.each(function() {
                                w.data(this, e)
                            }) : 1 < arguments.length ? this.each(function() {
                                w.data(this, e, t)
                            }) : o ? U(o, e, w.data(o, e)) : void 0;
                            if (this.length && (r = w.data(o), 1 === o.nodeType && !w._data(o, "parsedAttrs"))) {
                                for (n = s.length; n--;) 0 === (i = s[n].name).indexOf("data-") && U(o, i = w.camelCase(i.slice(5)), r[i]);
                                w._data(o, "parsedAttrs", !0)
                            }
                            return r
                        },
                        removeData: function(e) {
                            return this.each(function() {
                                w.removeData(this, e)
                            })
                        }
                    }), w.extend({
                        queue: function(e, t, n) {
                            var i;
                            return e ? (i = w._data(e, t = (t || "fx") + "queue"), n && (!i || w.isArray(n) ? i = w._data(e, t, w.makeArray(n)) : i.push(n)), i || []) : void 0
                        },
                        dequeue: function(e, t) {
                            t = t || "fx";
                            var n = w.queue(e, t),
                                i = n.length,
                                r = n.shift(),
                                o = w._queueHooks(e, t);
                            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                                w.dequeue(e, t)
                            }, o)), !i && o && o.empty.fire()
                        },
                        _queueHooks: function(e, t) {
                            var n = t + "queueHooks";
                            return w._data(e, n) || w._data(e, n, {
                                empty: w.Callbacks("once memory").add(function() {
                                    w._removeData(e, t + "queue"), w._removeData(e, n)
                                })
                            })
                        }
                    }), w.fn.extend({
                        queue: function(t, n) {
                            var e = 2;
                            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? w.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                                var e = w.queue(this, t, n);
                                w._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && w.dequeue(this, t)
                            })
                        },
                        dequeue: function(e) {
                            return this.each(function() {
                                w.dequeue(this, e)
                            })
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function(e, t) {
                            function n() {
                                --r || o.resolveWith(s, [s])
                            }
                            var i, r = 1,
                                o = w.Deferred(),
                                s = this,
                                a = this.length;
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = w._data(s[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
                            return n(), o.promise(t)
                        }
                    });

                    function Q(e, t) {
                        return "none" === w.css(e = t || e, "display") || !w.contains(e.ownerDocument, e)
                    }
                    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        Y = ["Top", "Right", "Bottom", "Left"],
                        V = w.access = function(e, t, n, i, r, o, s) {
                            var a = 0,
                                l = e.length,
                                c = null == n;
                            if ("object" === w.type(n))
                                for (a in r = !0, n) w.access(e, t, a, n[a], !0, o, s);
                            else if (void 0 !== i && (r = !0, w.isFunction(i) || (s = !0), t = c ? s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                                    return c.call(w(e), n)
                                }) : t))
                                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
                        },
                        X = /^(?:checkbox|radio)$/i,
                        t = m.createDocumentFragment(),
                        n = m.createElement("div"),
                        i = m.createElement("input");
                    if (n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a>", g.leadingWhitespace = 3 === n.firstChild.nodeType, g.tbody = !n.getElementsByTagName("tbody").length, g.htmlSerialize = !!n.getElementsByTagName("link").length, g.html5Clone = "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, t.appendChild(i), g.appendChecked = i.checked, n.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, t.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", g.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, g.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function() {
                            g.noCloneEvent = !1
                        }), n.cloneNode(!0).click()), null == g.deleteExpando) {
                        g.deleteExpando = !0;
                        try {
                            delete n.test
                        } catch (e) {
                            g.deleteExpando = !1
                        }
                    }
                    var J, G, Z = m.createElement("div");
                    for (J in {
                            submit: !0,
                            change: !0,
                            focusin: !0
                        }) G = "on" + J, (g[J + "Bubbles"] = G in p) || (Z.setAttribute(G, "t"), g[J + "Bubbles"] = !1 === Z.attributes[G].expando);
                    var ee = /^(?:input|select|textarea)$/i,
                        te = /^key/,
                        ne = /^(?:mouse|contextmenu)|click/,
                        ie = /^(?:focusinfocus|focusoutblur)$/,
                        re = /^([^.]*)(?:\.(.+)|)$/;

                    function oe() {
                        return !0
                    }

                    function se() {
                        return !1
                    }

                    function ae() {
                        try {
                            return m.activeElement
                        } catch (e) {}
                    }

                    function le(e) {
                        var t = ce.split("|"),
                            n = e.createDocumentFragment();
                        if (n.createElement)
                            for (; t.length;) n.createElement(t.pop());
                        return n
                    }
                    w.event = {
                        global: {},
                        add: function(e, u, t, f, n) {
                            var d, h, p, i, r, o, s, a, l, c = w._data(e);
                            if (c)
                                for (t.handler && (t = (p = t).handler, n = p.selector), t.guid || (t.guid = w.guid++), (d = c.events) || (d = c.events = {}), (r = c.handle) || ((r = c.handle = function(e) {
                                        return typeof w == W || e && w.event.triggered === e.type ? void 0 : w.event.dispatch.apply(r.elem, arguments)
                                    }).elem = e), h = (u = (u || "").match(H) || [""]).length; h--;) s = l = (a = re.exec(u[h]) || [])[1], a = (a[2] || "").split(".").sort(), s && (i = w.event.special[s] || {}, s = (n ? i.delegateType : i.bindType) || s, i = w.event.special[s] || {}, l = w.extend({
                                    type: s,
                                    origType: l,
                                    data: f,
                                    handler: t,
                                    guid: t.guid,
                                    selector: n,
                                    needsContext: n && w.expr.match.needsContext.test(n),
                                    namespace: a.join(".")
                                }, p), (o = d[s]) || ((o = d[s] = []).delegateCount = 0, i.setup && !1 !== i.setup.call(e, f, a, r) || (e.addEventListener ? e.addEventListener(s, r, !1) : e.attachEvent && e.attachEvent("on" + s, r))), i.add && (i.add.call(e, l), l.handler.guid || (l.handler.guid = t.guid)), n ? o.splice(o.delegateCount++, 0, l) : o.push(l), w.event.global[s] = !0)
                        },
                        remove: function(e, t, u, n, f) {
                            var d, i, r, h, p, o, s, a, l, m, g, c = w.hasData(e) && w._data(e);
                            if (c && (o = c.events)) {
                                for (p = (t = (t || "").match(H) || [""]).length; p--;)
                                    if (l = g = (r = re.exec(t[p]) || [])[1], m = (r[2] || "").split(".").sort(), l) {
                                        for (s = w.event.special[l] || {}, a = o[l = (n ? s.delegateType : s.bindType) || l] || [], r = r[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), h = d = a.length; d--;) i = a[d], !f && g !== i.origType || u && u.guid !== i.guid || r && !r.test(i.namespace) || n && n !== i.selector && ("**" !== n || !i.selector) || (a.splice(d, 1), i.selector && a.delegateCount--, s.remove && s.remove.call(e, i));
                                        h && !a.length && (s.teardown && !1 !== s.teardown.call(e, m, c.handle) || w.removeEvent(e, l, c.handle), delete o[l])
                                    } else
                                        for (l in o) w.event.remove(e, l + t[p], u, n, !0);
                                w.isEmptyObject(o) && (delete c.handle, w._removeData(e, "events"))
                            }
                        },
                        trigger: function(e, t, n, i) {
                            var r, o, u, s, a, f, d = [n || m],
                                l = _.call(e, "type") ? e.type : e,
                                h = _.call(e, "namespace") ? e.namespace.split(".") : [],
                                c = a = n = n || m;
                            if (3 !== n.nodeType && 8 !== n.nodeType && !ie.test(l + w.event.triggered) && (0 <= l.indexOf(".") && (l = (h = l.split(".")).shift(), h.sort()), o = l.indexOf(":") < 0 && "on" + l, (e = e[w.expando] ? e : new w.Event(l, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : w.makeArray(t, [e]), s = w.event.special[l] || {}, i || !s.trigger || !1 !== s.trigger.apply(n, t))) {
                                if (!i && !s.noBubble && !w.isWindow(n)) {
                                    for (u = s.delegateType || l, ie.test(u + l) || (c = c.parentNode); c; c = c.parentNode) d.push(c), a = c;
                                    a === (n.ownerDocument || m) && d.push(a.defaultView || a.parentWindow || p)
                                }
                                for (f = 0;
                                    (c = d[f++]) && !e.isPropagationStopped();) e.type = 1 < f ? u : s.bindType || l, (r = (w._data(c, "events") || {})[e.type] && w._data(c, "handle")) && r.apply(c, t), (r = o && c[o]) && r.apply && w.acceptData(c) && (e.result = r.apply(c, t), !1 === e.result && e.preventDefault());
                                if (e.type = l, !i && !e.isDefaultPrevented() && (!s._default || !1 === s._default.apply(d.pop(), t)) && w.acceptData(n) && o && n[l] && !w.isWindow(n)) {
                                    (a = n[o]) && (n[o] = null), w.event.triggered = l;
                                    try {
                                        n[l]()
                                    } catch (e) {}
                                    w.event.triggered = void 0, a && (n[o] = a)
                                }
                                return e.result
                            }
                        },
                        dispatch: function(e) {
                            e = w.event.fix(e);
                            var t, n, i, r, o, s = u.call(arguments),
                                a = (w._data(this, "events") || {})[e.type] || [],
                                l = w.event.special[e.type] || {};
                            if ((s[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                                for (o = w.event.handlers.call(this, e, a), t = 0;
                                    (i = o[t++]) && !e.isPropagationStopped();)
                                    for (e.currentTarget = i.elem, r = 0;
                                        (n = i.handlers[r++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n, e.data = n.data, void 0 !== (n = ((w.event.special[n.origType] || {}).handle || n.handler).apply(i.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                                return l.postDispatch && l.postDispatch.call(this, e), e.result
                            }
                        },
                        handlers: function(e, t) {
                            var n, i, r, o, s = [],
                                a = t.delegateCount,
                                l = e.target;
                            if (a && l.nodeType && (!e.button || "click" !== e.type))
                                for (; l != this; l = l.parentNode || this)
                                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                                        for (r = [], o = 0; o < a; o++) void 0 === r[n = (i = t[o]).selector + " "] && (r[n] = i.needsContext ? 0 <= w(n, this).index(l) : w.find(n, this, null, [l]).length), r[n] && r.push(i);
                                        r.length && s.push({
                                            elem: l,
                                            handlers: r
                                        })
                                    }
                            return a < t.length && s.push({
                                elem: this,
                                handlers: t.slice(a)
                            }), s
                        },
                        fix: function(e) {
                            if (e[w.expando]) return e;
                            var t, n, i, r = e.type,
                                o = e,
                                s = this.fixHooks[r];
                            for (s || (this.fixHooks[r] = s = ne.test(r) ? this.mouseHooks : te.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new w.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
                            return e.target || (e.target = o.srcElement || m), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
                        },
                        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                        fixHooks: {},
                        keyHooks: {
                            props: "char charCode key keyCode".split(" "),
                            filter: function(e, t) {
                                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                            }
                        },
                        mouseHooks: {
                            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                            filter: function(e, t) {
                                var n, i, r = t.button,
                                    o = t.fromElement;
                                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || m).documentElement, n = n.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                            }
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            focus: {
                                trigger: function() {
                                    if (this !== ae() && this.focus) try {
                                        return this.focus(), !1
                                    } catch (e) {}
                                },
                                delegateType: "focusin"
                            },
                            blur: {
                                trigger: function() {
                                    return this === ae() && this.blur ? (this.blur(), !1) : void 0
                                },
                                delegateType: "focusout"
                            },
                            click: {
                                trigger: function() {
                                    return w.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                                },
                                _default: function(e) {
                                    return w.nodeName(e.target, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        },
                        simulate: function(e, t, n, i) {
                            e = w.extend(new w.Event, n, {
                                type: e,
                                isSimulated: !0,
                                originalEvent: {}
                            });
                            i ? w.event.trigger(e, null, t) : w.event.dispatch.call(t, e), e.isDefaultPrevented() && n.preventDefault()
                        }
                    }, w.removeEvent = m.removeEventListener ? function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n, !1)
                    } : function(e, t, n) {
                        t = "on" + t;
                        e.detachEvent && (typeof e[t] == W && (e[t] = null), e.detachEvent(t, n))
                    }, w.Event = function(e, t) {
                        return this instanceof w.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (!1 === e.returnValue || e.getPreventDefault && e.getPreventDefault()) ? oe : se) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), void(this[w.expando] = !0)) : new w.Event(e, t)
                    }, w.Event.prototype = {
                        isDefaultPrevented: se,
                        isPropagationStopped: se,
                        isImmediatePropagationStopped: se,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = oe, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = oe, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                        },
                        stopImmediatePropagation: function() {
                            this.isImmediatePropagationStopped = oe, this.stopPropagation()
                        }
                    }, w.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    }, function(e, r) {
                        w.event.special[e] = {
                            delegateType: r,
                            bindType: r,
                            handle: function(e) {
                                var t, n = e.relatedTarget,
                                    i = e.handleObj;
                                return n && (n === this || w.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
                            }
                        }
                    }), g.submitBubbles || (w.event.special.submit = {
                        setup: function() {
                            return !w.nodeName(this, "form") && void w.event.add(this, "click._submit keypress._submit", function(e) {
                                e = e.target, e = w.nodeName(e, "input") || w.nodeName(e, "button") ? e.form : void 0;
                                e && !w._data(e, "submitBubbles") && (w.event.add(e, "submit._submit", function(e) {
                                    e._submit_bubble = !0
                                }), w._data(e, "submitBubbles", !0))
                            })
                        },
                        postDispatch: function(e) {
                            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
                        },
                        teardown: function() {
                            return !w.nodeName(this, "form") && void w.event.remove(this, "._submit")
                        }
                    }), g.changeBubbles || (w.event.special.change = {
                        setup: function() {
                            return ee.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (w.event.add(this, "propertychange._change", function(e) {
                                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                            }), w.event.add(this, "click._change", function(e) {
                                this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                            })), !1) : void w.event.add(this, "beforeactivate._change", function(e) {
                                e = e.target;
                                ee.test(e.nodeName) && !w._data(e, "changeBubbles") && (w.event.add(e, "change._change", function(e) {
                                    !this.parentNode || e.isSimulated || e.isTrigger || w.event.simulate("change", this.parentNode, e, !0)
                                }), w._data(e, "changeBubbles", !0))
                            })
                        },
                        handle: function(e) {
                            var t = e.target;
                            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                        },
                        teardown: function() {
                            return w.event.remove(this, "._change"), !ee.test(this.nodeName)
                        }
                    }), g.focusinBubbles || w.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, function(n, i) {
                        function r(e) {
                            w.event.simulate(i, e.target, w.event.fix(e), !0)
                        }
                        w.event.special[i] = {
                            setup: function() {
                                var e = this.ownerDocument || this,
                                    t = w._data(e, i);
                                t || e.addEventListener(n, r, !0), w._data(e, i, (t || 0) + 1)
                            },
                            teardown: function() {
                                var e = this.ownerDocument || this,
                                    t = w._data(e, i) - 1;
                                t ? w._data(e, i, t) : (e.removeEventListener(n, r, !0), w._removeData(e, i))
                            }
                        }
                    }), w.fn.extend({
                        on: function(e, t, n, i, r) {
                            var o, s;
                            if ("object" == typeof e) {
                                for (o in "string" != typeof t && (n = n || t, t = void 0), e) this.on(o, t, n, e[o], r);
                                return this
                            }
                            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = se;
                            else if (!i) return this;
                            return 1 === r && (s = i, (i = function(e) {
                                return w().off(e), s.apply(this, arguments)
                            }).guid = s.guid || (s.guid = w.guid++)), this.each(function() {
                                w.event.add(this, e, i, n, t)
                            })
                        },
                        one: function(e, t, n, i) {
                            return this.on(e, t, n, i, 1)
                        },
                        off: function(e, t, n) {
                            var i, r;
                            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = se), this.each(function() {
                                w.event.remove(this, e, n, t)
                            });
                            for (r in e) this.off(r, t, e[r]);
                            return this
                        },
                        trigger: function(e, t) {
                            return this.each(function() {
                                w.event.trigger(e, t, this)
                            })
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            return n ? w.event.trigger(e, t, n, !0) : void 0
                        }
                    });
                    var ce = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                        ue = / jQuery\d+="(?:null|\d+)"/g,
                        fe = new RegExp("<(?:" + ce + ")[\\s/>]", "i"),
                        de = /^\s+/,
                        he = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                        pe = /<([\w:]+)/,
                        me = /<tbody/i,
                        ge = /<|&#?\w+;/,
                        ve = /<(?:script|style|link)/i,
                        ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        be = /^$|\/(?:java|ecma)script/i,
                        _e = /^true\/(.*)/,
                        we = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                        v = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            legend: [1, "<fieldset>", "</fieldset>"],
                            area: [1, "<map>", "</map>"],
                            param: [1, "<object>", "</object>"],
                            thead: [1, "<table>", "</table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: g.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                        },
                        Ee = le(m).appendChild(m.createElement("div"));

                    function y(e, t) {
                        var n, i, r = 0,
                            o = typeof e.getElementsByTagName != W ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll != W ? e.querySelectorAll(t || "*") : void 0;
                        if (!o)
                            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || w.nodeName(i, t) ? o.push(i) : w.merge(o, y(i, t));
                        return void 0 === t || t && w.nodeName(e, t) ? w.merge([e], o) : o
                    }

                    function xe(e) {
                        X.test(e.type) && (e.defaultChecked = e.checked)
                    }

                    function Te(e, t) {
                        return w.nodeName(e, "table") && w.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
                    }

                    function Ce(e) {
                        return e.type = (null !== w.find.attr(e, "type")) + "/" + e.type, e
                    }

                    function Se(e) {
                        var t = _e.exec(e.type);
                        return t ? e.type = t[1] : e.removeAttribute("type"), e
                    }

                    function Ne(e, t) {
                        for (var n, i = 0; null != (n = e[i]); i++) w._data(n, "globalEval", !t || w._data(t[i], "globalEval"))
                    }

                    function De(e, t) {
                        if (1 === t.nodeType && w.hasData(e)) {
                            var n, i, r, e = w._data(e),
                                o = w._data(t, e),
                                s = e.events;
                            if (s)
                                for (n in delete o.handle, o.events = {}, s)
                                    for (i = 0, r = s[n].length; i < r; i++) w.event.add(t, n, s[n][i]);
                            o.data && (o.data = w.extend({}, o.data))
                        }
                    }
                    v.optgroup = v.option, v.tbody = v.tfoot = v.colgroup = v.caption = v.thead, v.th = v.td, w.extend({
                        clone: function(e, u, f) {
                            var t, n, i, r, o, s, a, d, h = w.contains(e.ownerDocument, e);
                            if (g.html5Clone || w.isXMLDoc(e) || !fe.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (Ee.innerHTML = e.outerHTML, Ee.removeChild(i = Ee.firstChild)), !(g.noCloneEvent && g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                                for (t = y(i), o = y(e), r = 0; null != (n = o[r]); ++r)
                                    if (t[r]) {
                                        l = void 0;
                                        c = void 0;
                                        s = void 0;
                                        a = void 0;
                                        d = void 0;
                                        var l = n;
                                        var c = t[r];
                                        if (1 === c.nodeType) {
                                            if (s = c.nodeName.toLowerCase(), !g.noCloneEvent && c[w.expando]) {
                                                for (a in (d = w._data(c)).events) w.removeEvent(c, a, d.handle);
                                                c.removeAttribute(w.expando)
                                            }
                                            "script" === s && c.text !== l.text ? (Ce(c).text = l.text, Se(c)) : "object" === s ? (c.parentNode && (c.outerHTML = l.outerHTML), g.html5Clone && l.innerHTML && !w.trim(c.innerHTML) && (c.innerHTML = l.innerHTML)) : "input" === s && X.test(l.type) ? (c.defaultChecked = c.checked = l.checked, c.value !== l.value && (c.value = l.value)) : "option" === s ? c.defaultSelected = c.selected = l.defaultSelected : "input" !== s && "textarea" !== s || (c.defaultValue = l.defaultValue)
                                        }
                                    }
                            if (u)
                                if (f)
                                    for (o = o || y(e), t = t || y(i), r = 0; null != (n = o[r]); r++) De(n, t[r]);
                                else De(e, i);
                            return 0 < (t = y(i, "script")).length && Ne(t, !h && y(e, "script")), t = o = n = null, i
                        },
                        buildFragment: function(u, e, f, d) {
                            for (var t, n, h, i, r, o, s, p = u.length, a = le(e), l = [], c = 0; c < p; c++)
                                if ((n = u[c]) || 0 === n)
                                    if ("object" === w.type(n)) w.merge(l, n.nodeType ? [n] : n);
                                    else if (ge.test(n)) {
                                for (i = i || a.appendChild(e.createElement("div")), r = (pe.exec(n) || ["", ""])[1].toLowerCase(), s = v[r] || v._default, i.innerHTML = s[1] + n.replace(he, "<$1></$2>") + s[2], t = s[0]; t--;) i = i.lastChild;
                                if (!g.leadingWhitespace && de.test(n) && l.push(e.createTextNode(de.exec(n)[0])), !g.tbody)
                                    for (t = (n = "table" !== r || me.test(n) ? "<table>" !== s[1] || me.test(n) ? 0 : i : i.firstChild) && n.childNodes.length; t--;) w.nodeName(o = n.childNodes[t], "tbody") && !o.childNodes.length && n.removeChild(o);
                                for (w.merge(l, i.childNodes), i.textContent = ""; i.firstChild;) i.removeChild(i.firstChild);
                                i = a.lastChild
                            } else l.push(e.createTextNode(n));
                            for (i && a.removeChild(i), g.appendChecked || w.grep(y(l, "input"), xe), c = 0; n = l[c++];)
                                if ((!d || -1 === w.inArray(n, d)) && (h = w.contains(n.ownerDocument, n), i = y(a.appendChild(n), "script"), h && Ne(i), f))
                                    for (t = 0; n = i[t++];) be.test(n.type || "") && f.push(n);
                            return i = null, a
                        },
                        cleanData: function(e, t) {
                            for (var n, i, r, o, s = 0, a = w.expando, l = w.cache, c = g.deleteExpando, u = w.event.special; null != (n = e[s]); s++)
                                if ((t || w.acceptData(n)) && (o = (r = n[a]) && l[r])) {
                                    if (o.events)
                                        for (i in o.events) u[i] ? w.event.remove(n, i) : w.removeEvent(n, i, o.handle);
                                    l[r] && (delete l[r], c ? delete n[a] : typeof n.removeAttribute != W ? n.removeAttribute(a) : n[a] = null, f.push(r))
                                }
                        }
                    }), w.fn.extend({
                        text: function(e) {
                            return V(this, function(e) {
                                return void 0 === e ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(e))
                            }, null, e, arguments.length)
                        },
                        append: function() {
                            return this.domManip(arguments, function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Te(this, e).appendChild(e)
                            })
                        },
                        prepend: function() {
                            return this.domManip(arguments, function(e) {
                                var t;
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Te(this, e)).insertBefore(e, t.firstChild)
                            })
                        },
                        before: function() {
                            return this.domManip(arguments, function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            })
                        },
                        after: function() {
                            return this.domManip(arguments, function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            })
                        },
                        remove: function(e, t) {
                            for (var n, i = e ? w.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || w.cleanData(y(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Ne(y(n, "script")), n.parentNode.removeChild(n));
                            return this
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++) {
                                for (1 === e.nodeType && w.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                                e.options && w.nodeName(e, "select") && (e.options.length = 0)
                            }
                            return this
                        },
                        clone: function(e, t) {
                            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                                return w.clone(this, e, t)
                            })
                        },
                        html: function(e) {
                            return V(this, function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ue, "") : void 0;
                                if (!("string" != typeof e || ve.test(e) || !g.htmlSerialize && fe.test(e) || !g.leadingWhitespace && de.test(e) || v[(pe.exec(e) || ["", ""])[1].toLowerCase()])) {
                                    e = e.replace(he, "<$1></$2>");
                                    try {
                                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(y(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (e) {}
                                }
                                t && this.empty().append(e)
                            }, null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var t = arguments[0];
                            return this.domManip(arguments, function(e) {
                                t = this.parentNode, w.cleanData(y(this)), t && t.replaceChild(e, this)
                            }), t && (t.length || t.nodeType) ? this : this.remove()
                        },
                        detach: function(e) {
                            return this.remove(e, !0)
                        },
                        domManip: function(n, i) {
                            n = b.apply([], n);
                            var e, t, r, o, u, s, a = 0,
                                l = this.length,
                                f = this,
                                d = l - 1,
                                c = n[0],
                                h = w.isFunction(c);
                            if (h || 1 < l && "string" == typeof c && !g.checkClone && ye.test(c)) return this.each(function(e) {
                                var t = f.eq(e);
                                h && (n[0] = c.call(this, e, t.html())), t.domManip(n, i)
                            });
                            if (l && (e = (s = w.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === s.childNodes.length && (s = e), e)) {
                                for (r = (o = w.map(y(s, "script"), Ce)).length; a < l; a++) t = s, a !== d && (t = w.clone(t, !0, !0), r && w.merge(o, y(t, "script"))), i.call(this[a], t, a);
                                if (r)
                                    for (u = o[o.length - 1].ownerDocument, w.map(o, Se), a = 0; a < r; a++) t = o[a], be.test(t.type || "") && !w._data(t, "globalEval") && w.contains(u, t) && (t.src ? w._evalUrl && w._evalUrl(t.src) : w.globalEval((t.text || t.textContent || t.innerHTML || "").replace(we, "")));
                                s = e = null
                            }
                            return this
                        }
                    }), w.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, function(e, s) {
                        w.fn[e] = function(e) {
                            for (var t, n = 0, i = [], r = w(e), o = r.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), w(r[n])[s](t), a.apply(i, t.get());
                            return this.pushStack(i)
                        }
                    });
                    var Ae, ke, Ie = {};

                    function Oe(e, t) {
                        e = w(t.createElement(e)).appendTo(t.body), t = p.getDefaultComputedStyle ? p.getDefaultComputedStyle(e[0]).display : w.css(e[0], "display");
                        return e.detach(), t
                    }

                    function Le(e) {
                        var t = m,
                            n = Ie[e];
                        return n || ("none" !== (n = Oe(e, t)) && n || ((t = ((Ae = (Ae || w("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ae[0].contentDocument).document).write(), t.close(), n = Oe(e, t), Ae.detach()), Ie[e] = n), n
                    }(i = m.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (t = i.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", g.opacity = /^0.5/.test(t.style.opacity), g.cssFloat = !!t.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === i.style.backgroundClip, t = i = null, g.shrinkWrapBlocks = function() {
                        var e, t, n;
                        if (null == ke) {
                            if (!(e = m.getElementsByTagName("body")[0])) return;
                            t = m.createElement("div"), n = m.createElement("div"), e.appendChild(t).appendChild(n), ke = !1, typeof n.style.zoom != W && (n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", ke = 3 !== n.offsetWidth), e.removeChild(t), e = n = null
                        }
                        return ke
                    };
                    var je, He, Pe, Me, Fe, qe, We, Re, Be = /^margin/,
                        Ue = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
                        $e = /^(top|right|bottom|left)$/;

                    function ze(t, n) {
                        return {
                            get: function() {
                                var e = t();
                                if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments)
                            }
                        }
                    }

                    function Ke() {
                        var e, t, n = m.getElementsByTagName("body")[0];
                        n && (e = m.createElement("div"), t = m.createElement("div"), e.style.cssText = Re, n.appendChild(e).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", w.swap(n, null != n.style.zoom ? {
                            zoom: 1
                        } : {}, function() {
                            Me = 4 === t.offsetWidth
                        }), We = !(qe = !(Fe = !0)), p.getComputedStyle && (qe = "1%" !== (p.getComputedStyle(t, null) || {}).top, Fe = "4px" === (p.getComputedStyle(t, null) || {
                            width: "4px"
                        }).width), n.removeChild(e), t = null)
                    }
                    p.getComputedStyle ? (je = function(e) {
                        return e.ownerDocument.defaultView.getComputedStyle(e, null)
                    }, He = function(e, t, n) {
                        var i, r = e.style,
                            o = (n = n || je(e)) ? n.getPropertyValue(t) || n[t] : void 0;
                        return n && ("" !== o || w.contains(e.ownerDocument, e) || (o = w.style(e, t)), Ue.test(o) && Be.test(t) && (e = r.width, t = r.minWidth, i = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = e, r.minWidth = t, r.maxWidth = i)), void 0 === o ? o : o + ""
                    }) : m.documentElement.currentStyle && (je = function(e) {
                        return e.currentStyle
                    }, He = function(e, t, n) {
                        var i, r, o, s = e.style;
                        return null == (n = (n = n || je(e)) ? n[t] : void 0) && s && s[t] && (n = s[t]), Ue.test(n) && !$e.test(t) && (i = s.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : n, n = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === n ? n : n + "" || "auto"
                    }), n = m.createElement("div"), Re = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (i = n.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", g.opacity = /^0.5/.test(i.style.opacity), g.cssFloat = !!i.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === n.style.backgroundClip, i = n = null, w.extend(g, {
                        reliableHiddenOffsets: function() {
                            if (null != Pe) return Pe;
                            var e, t, n, i = m.createElement("div"),
                                r = m.getElementsByTagName("body")[0];
                            return r ? (i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (e = m.createElement("div")).style.cssText = Re, r.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (t = i.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", Pe = n && 0 === t[0].offsetHeight, r.removeChild(e), i = r = null, Pe) : void 0
                        },
                        boxSizing: function() {
                            return null == Me && Ke(), Me
                        },
                        boxSizingReliable: function() {
                            return null == Fe && Ke(), Fe
                        },
                        pixelPosition: function() {
                            return null == qe && Ke(), qe
                        },
                        reliableMarginRight: function() {
                            var e, t, n, i;
                            if (null == We && p.getComputedStyle) {
                                if (!(e = m.getElementsByTagName("body")[0])) return;
                                t = m.createElement("div"), n = m.createElement("div"), t.style.cssText = Re, e.appendChild(t).appendChild(n), (i = n.appendChild(m.createElement("div"))).style.cssText = n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", i.style.marginRight = i.style.width = "0", n.style.width = "1px", We = !parseFloat((p.getComputedStyle(i, null) || {}).marginRight), e.removeChild(t)
                            }
                            return We
                        }
                    }), w.swap = function(e, t, n, i) {
                        var r, o = {};
                        for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                        for (r in n = n.apply(e, i || []), t) e.style[r] = o[r];
                        return n
                    };
                    var Qe = /alpha\([^)]*\)/i,
                        Ye = /opacity\s*=\s*([^)]*)/,
                        Ve = /^(none|table(?!-c[ea]).+)/,
                        Xe = new RegExp("^(" + e + ")(.*)$", "i"),
                        Je = new RegExp("^([+-])=(" + e + ")", "i"),
                        Ge = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        Ze = {
                            letterSpacing: 0,
                            fontWeight: 400
                        },
                        et = ["Webkit", "O", "Moz", "ms"];

                    function tt(e, t) {
                        if (t in e) return t;
                        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = et.length; r--;)
                            if ((t = et[r] + n) in e) return t;
                        return i
                    }

                    function nt(e, t) {
                        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (o[s] = w._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Q(i) && (o[s] = w._data(i, "olddisplay", Le(i.nodeName)))) : o[s] || (r = Q(i), (n && "none" !== n || !r) && w._data(i, "olddisplay", r ? n : w.css(i, "display"))));
                        for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
                        return e
                    }

                    function it(e, t, n) {
                        var i = Xe.exec(t);
                        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
                    }

                    function rt(e, t, n, i, r) {
                        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += w.css(e, n + Y[o], !0, r)), i ? ("content" === n && (s -= w.css(e, "padding" + Y[o], !0, r)), "margin" !== n && (s -= w.css(e, "border" + Y[o] + "Width", !0, r))) : (s += w.css(e, "padding" + Y[o], !0, r), "padding" !== n && (s += w.css(e, "border" + Y[o] + "Width", !0, r)));
                        return s
                    }

                    function ot(e, t, n) {
                        var i = !0,
                            r = "width" === t ? e.offsetWidth : e.offsetHeight,
                            o = je(e),
                            s = g.boxSizing() && "border-box" === w.css(e, "boxSizing", !1, o);
                        if (r <= 0 || null == r) {
                            if (((r = He(e, t, o)) < 0 || null == r) && (r = e.style[t]), Ue.test(r)) return r;
                            i = s && (g.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
                        }
                        return r + rt(e, t, n || (s ? "border" : "content"), i, o) + "px"
                    }

                    function st(e, t, n, i, r) {
                        return new st.prototype.init(e, t, n, i, r)
                    }
                    w.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, t) {
                                    if (t) return "" === (t = He(e, "opacity")) ? "1" : t
                                }
                            }
                        },
                        cssNumber: {
                            columnCount: !0,
                            fillOpacity: !0,
                            fontWeight: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {
                            float: g.cssFloat ? "cssFloat" : "styleFloat"
                        },
                        style: function(e, t, n, i) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var r, o, s, a = w.camelCase(t),
                                    l = e.style;
                                if (t = w.cssProps[a] || (w.cssProps[a] = tt(l, a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                                if ("string" === (o = typeof n) && (r = Je.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(w.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || w.cssNumber[a] || (n += "px"), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                                    l[t] = "", l[t] = n
                                } catch (e) {}
                            }
                        },
                        css: function(e, t, n, i) {
                            var r, o = w.camelCase(t);
                            return t = w.cssProps[o] || (w.cssProps[o] = tt(e.style, o)), "normal" === (r = void 0 === (r = (o = w.cssHooks[t] || w.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : r) ? He(e, t, i) : r) && t in Ze && (r = Ze[t]), "" === n || n ? (o = parseFloat(r), !0 === n || w.isNumeric(o) ? o || 0 : r) : r
                        }
                    }), w.each(["height", "width"], function(e, r) {
                        w.cssHooks[r] = {
                            get: function(e, t, n) {
                                return t ? 0 === e.offsetWidth && Ve.test(w.css(e, "display")) ? w.swap(e, Ge, function() {
                                    return ot(e, r, n)
                                }) : ot(e, r, n) : void 0
                            },
                            set: function(e, t, n) {
                                var i = n && je(e);
                                return it(0, t, n ? rt(e, r, n, g.boxSizing() && "border-box" === w.css(e, "boxSizing", !1, i), i) : 0)
                            }
                        }
                    }), g.opacity || (w.cssHooks.opacity = {
                        get: function(e, t) {
                            return Ye.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                        },
                        set: function(e, t) {
                            var n = e.style,
                                e = e.currentStyle,
                                i = w.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                                r = e && e.filter || n.filter || "";
                            ((n.zoom = 1) <= t || "" === t) && "" === w.trim(r.replace(Qe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || e && !e.filter) || (n.filter = Qe.test(r) ? r.replace(Qe, i) : r + " " + i)
                        }
                    }), w.cssHooks.marginRight = ze(g.reliableMarginRight, function(e, t) {
                        return t ? w.swap(e, {
                            display: "inline-block"
                        }, He, [e, "marginRight"]) : void 0
                    }), w.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, function(r, o) {
                        w.cssHooks[r + o] = {
                            expand: function(e) {
                                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Y[t] + o] = i[t] || i[t - 2] || i[0];
                                return n
                            }
                        }, Be.test(r) || (w.cssHooks[r + o].set = it)
                    }), w.fn.extend({
                        css: function(e, t) {
                            return V(this, function(e, t, n) {
                                var i, r, o = {},
                                    s = 0;
                                if (w.isArray(t)) {
                                    for (i = je(e), r = t.length; s < r; s++) o[t[s]] = w.css(e, t[s], !1, i);
                                    return o
                                }
                                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                            }, e, t, 1 < arguments.length)
                        },
                        show: function() {
                            return nt(this, !0)
                        },
                        hide: function() {
                            return nt(this)
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                                Q(this) ? w(this).show() : w(this).hide()
                            })
                        }
                    }), ((w.Tween = st).prototype = {
                        constructor: st,
                        init: function(e, t, n, i, r, o) {
                            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var e = st.propHooks[this.prop];
                            return (e && e.get ? e : st.propHooks._default).get(this)
                        },
                        run: function(e) {
                            var t = st.propHooks[this.prop];
                            return this.pos = e = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (t && t.set ? t : st.propHooks._default).set(this), this
                        }
                    }).init.prototype = st.prototype, (st.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                            },
                            set: function(e) {
                                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                            }
                        }
                    }).scrollTop = st.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    }, w.easing = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        }
                    }, w.fx = st.prototype.init, w.fx.step = {};
                    var at, lt, ct, ut = /^(?:toggle|show|hide)$/,
                        ft = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
                        dt = /queueHooks$/,
                        ht = [function(t, e, n) {
                            var i, r, u, f, o, d, h, p, s = this,
                                m = {},
                                a = t.style,
                                l = t.nodeType && Q(t),
                                c = w._data(t, "fxshow");
                            for (i in n.queue || (null == (o = w._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, d = o.empty.fire, o.empty.fire = function() {
                                    o.unqueued || d()
                                }), o.unqueued++, s.always(function() {
                                    s.always(function() {
                                        o.unqueued--, w.queue(t, "fx").length || o.empty.fire()
                                    })
                                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [a.overflow, a.overflowX, a.overflowY], h = w.css(t, "display"), p = Le(t.nodeName), "inline" === (h = "none" === h ? p : h) && "none" === w.css(t, "float") && (g.inlineBlockNeedsLayout && "inline" !== p ? a.zoom = 1 : a.display = "inline-block")), n.overflow && (a.overflow = "hidden", g.shrinkWrapBlocks() || s.always(function() {
                                    a.overflow = n.overflow[0], a.overflowX = n.overflow[1], a.overflowY = n.overflow[2]
                                })), e)
                                if (r = e[i], ut.exec(r)) {
                                    if (delete e[i], u = u || "toggle" === r, r === (l ? "hide" : "show")) {
                                        if ("show" !== r || !c || void 0 === c[i]) continue;
                                        l = !0
                                    }
                                    m[i] = c && c[i] || w.style(t, i)
                                }
                            if (!w.isEmptyObject(m))
                                for (i in c ? "hidden" in c && (l = c.hidden) : c = w._data(t, "fxshow", {}), u && (c.hidden = !l), l ? w(t).show() : s.done(function() {
                                        w(t).hide()
                                    }), s.done(function() {
                                        for (var e in w._removeData(t, "fxshow"), m) w.style(t, e, m[e])
                                    }), m) f = vt(l ? c[i] : 0, i, s), i in c || (c[i] = f.start, l && (f.end = f.start, f.start = "width" === i || "height" === i ? 1 : 0))
                        }],
                        pt = {
                            "*": [function(e, t) {
                                var n = this.createTween(e, t),
                                    i = n.cur(),
                                    t = ft.exec(t),
                                    r = t && t[3] || (w.cssNumber[e] ? "" : "px"),
                                    o = (w.cssNumber[e] || "px" !== r && +i) && ft.exec(w.css(n.elem, e)),
                                    s = 1,
                                    a = 20;
                                if (o && o[3] !== r)
                                    for (r = r || o[3], t = t || [], o = +i || 1; w.style(n.elem, e, (o /= s = s || ".5") + r), s !== (s = n.cur() / i) && 1 !== s && --a;);
                                return t && (o = n.start = +o || +i || 0, n.unit = r, n.end = t[1] ? o + (t[1] + 1) * t[2] : +t[2]), n
                            }]
                        };

                    function mt() {
                        return setTimeout(function() {
                            at = void 0
                        }), at = w.now()
                    }

                    function gt(e, t) {
                        var n, i = {
                                height: e
                            },
                            r = 0;
                        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Y[r])] = i["padding" + n] = e;
                        return t && (i.opacity = i.width = e), i
                    }

                    function vt(e, t, n) {
                        for (var i, r = (pt[t] || []).concat(pt["*"]), o = 0, s = r.length; o < s; o++)
                            if (i = r[o].call(n, t, e)) return i
                    }

                    function yt(r, u, e) {
                        var f, d, t, n, i, o, s, h = 0,
                            p = ht.length,
                            a = w.Deferred().always(function() {
                                delete m.elem
                            }),
                            m = function() {
                                if (d) return !1;
                                for (var e = at || mt(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, i = l.tweens.length; n < i; n++) l.tweens[n].run(t);
                                return a.notifyWith(r, [l, t, e]), t < 1 && i ? e : (a.resolveWith(r, [l]), !1)
                            },
                            l = a.promise({
                                elem: r,
                                props: w.extend({}, u),
                                opts: w.extend(!0, {
                                    specialEasing: {}
                                }, e),
                                originalProperties: u,
                                originalOptions: e,
                                startTime: at || mt(),
                                duration: e.duration,
                                tweens: [],
                                createTween: function(e, t) {
                                    t = w.Tween(r, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                                    return l.tweens.push(t), t
                                },
                                stop: function(e) {
                                    var t = 0,
                                        n = e ? l.tweens.length : 0;
                                    if (d) return this;
                                    for (d = !0; t < n; t++) l.tweens[t].run(1);
                                    return e ? a.resolveWith(r, [l, e]) : a.rejectWith(r, [l, e]), this
                                }
                            }),
                            g = l.props,
                            c = g,
                            v = l.opts.specialEasing;
                        for (t in c)
                            if (n = w.camelCase(t), i = v[n], o = c[t], w.isArray(o) && (i = o[1], o = c[t] = o[0]), t !== n && (c[n] = o, delete c[t]), s = w.cssHooks[n], s && "expand" in s)
                                for (t in o = s.expand(o), delete c[n], o) t in c || (c[t] = o[t], v[t] = i);
                            else v[n] = i;
                        for (; h < p; h++)
                            if (f = ht[h].call(l, r, g, l.opts)) return f;
                        return w.map(g, vt, l), w.isFunction(l.opts.start) && l.opts.start.call(r, l), w.fx.timer(w.extend(m, {
                            elem: r,
                            anim: l,
                            queue: l.opts.queue
                        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
                    }
                    w.Animation = w.extend(yt, {
                        tweener: function(e, t) {
                            for (var n, i = 0, r = (e = w.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < r; i++) n = e[i], pt[n] = pt[n] || [], pt[n].unshift(t)
                        },
                        prefilter: function(e, t) {
                            t ? ht.unshift(e) : ht.push(e)
                        }
                    }), w.speed = function(e, t, n) {
                        var i = e && "object" == typeof e ? w.extend({}, e) : {
                            complete: n || !n && t || w.isFunction(e) && e,
                            duration: e,
                            easing: n && t || t && !w.isFunction(t) && t
                        };
                        return i.duration = w.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in w.fx.speeds ? w.fx.speeds[i.duration] : w.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                            w.isFunction(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
                        }, i
                    }, w.fn.extend({
                        fadeTo: function(e, t, n, i) {
                            return this.filter(Q).css("opacity", 0).show().end().animate({
                                opacity: t
                            }, e, n, i)
                        },
                        animate: function(t, e, n, i) {
                            function r() {
                                var e = yt(this, w.extend({}, t), s);
                                (o || w._data(this, "finish")) && e.stop(!0)
                            }
                            var o = w.isEmptyObject(t),
                                s = w.speed(e, n, i);
                            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                        },
                        stop: function(r, e, o) {
                            function s(e) {
                                var t = e.stop;
                                delete e.stop, t(o)
                            }
                            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                                var e = !0,
                                    t = null != r && r + "queueHooks",
                                    n = w.timers,
                                    i = w._data(this);
                                if (t) i[t] && i[t].stop && s(i[t]);
                                else
                                    for (t in i) i[t] && i[t].stop && dt.test(t) && s(i[t]);
                                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                                !e && o || w.dequeue(this, r)
                            })
                        },
                        finish: function(s) {
                            return !1 !== s && (s = s || "fx"), this.each(function() {
                                var e, t = w._data(this),
                                    n = t[s + "queue"],
                                    i = t[s + "queueHooks"],
                                    r = w.timers,
                                    o = n ? n.length : 0;
                                for (t.finish = !0, w.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                                delete t.finish
                            })
                        }
                    }), w.each(["toggle", "show", "hide"], function(e, i) {
                        var r = w.fn[i];
                        w.fn[i] = function(e, t, n) {
                            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(gt(i, !0), e, t, n)
                        }
                    }), w.each({
                        slideDown: gt("show"),
                        slideUp: gt("hide"),
                        slideToggle: gt("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, function(e, i) {
                        w.fn[e] = function(e, t, n) {
                            return this.animate(i, e, t, n)
                        }
                    }), w.timers = [], w.fx.tick = function() {
                        var e, t = w.timers,
                            n = 0;
                        for (at = w.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                        t.length || w.fx.stop(), at = void 0
                    }, w.fx.timer = function(e) {
                        w.timers.push(e), e() ? w.fx.start() : w.timers.pop()
                    }, w.fx.interval = 13, w.fx.start = function() {
                        lt = lt || setInterval(w.fx.tick, w.fx.interval)
                    }, w.fx.stop = function() {
                        clearInterval(lt), lt = null
                    }, w.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, w.fn.delay = function(i, e) {
                        return i = w.fx && w.fx.speeds[i] || i, this.queue(e = e || "fx", function(e, t) {
                            var n = setTimeout(e, i);
                            t.stop = function() {
                                clearTimeout(n)
                            }
                        })
                    }, (t = m.createElement("div")).setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], e = (i = m.createElement("select")).appendChild(m.createElement("option")), ct = t.getElementsByTagName("input")[0], n.style.cssText = "top:1px", g.getSetAttribute = "t" !== t.className, g.style = /top/.test(n.getAttribute("style")), g.hrefNormalized = "/a" === n.getAttribute("href"), g.checkOn = !!ct.value, g.optSelected = e.selected, g.enctype = !!m.createElement("form").enctype, i.disabled = !0, g.optDisabled = !e.disabled, (ct = m.createElement("input")).setAttribute("value", ""), g.input = "" === ct.getAttribute("value"), ct.value = "t", ct.setAttribute("type", "radio"), g.radioValue = "t" === ct.value;
                    var bt = /\r/g;
                    w.fn.extend({
                        val: function(t) {
                            var n, e, i, r = this[0];
                            return arguments.length ? (i = w.isFunction(t), this.each(function(e) {
                                1 === this.nodeType && (null == (e = i ? t.call(this, e, w(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : w.isArray(e) && (e = w.map(e, function(e) {
                                    return null == e ? "" : e + ""
                                })), (n = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                            })) : r ? (n = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(r, "value")) ? e : "string" == typeof(e = r.value) ? e.replace(bt, "") : null == e ? "" : e : void 0
                        }
                    }), w.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = w.find.attr(e, "value");
                                    return null != t ? t : w.text(e)
                                }
                            },
                            select: {
                                get: function(e) {
                                    for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type || i < 0, o = r ? null : [], s = r ? i + 1 : n.length, a = i < 0 ? s : r ? i : 0; a < s; a++)
                                        if (!(!(t = n[a]).selected && a !== i || (g.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && w.nodeName(t.parentNode, "optgroup"))) {
                                            if (t = w(t).val(), r) return t;
                                            o.push(t)
                                        }
                                    return o
                                },
                                set: function(e, t) {
                                    for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--;)
                                        if (i = r[s], 0 <= w.inArray(w.valHooks.option.get(i), o)) try {
                                            i.selected = n = !0
                                        } catch (e) {
                                            i.scrollHeight
                                        } else i.selected = !1;
                                    return n || (e.selectedIndex = -1), r
                                }
                            }
                        }
                    }), w.each(["radio", "checkbox"], function() {
                        w.valHooks[this] = {
                            set: function(e, t) {
                                return w.isArray(t) ? e.checked = 0 <= w.inArray(w(e).val(), t) : void 0
                            }
                        }, g.checkOn || (w.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    });
                    var _t, wt, Et = w.expr.attrHandle,
                        xt = /^(?:checked|selected)$/i,
                        Tt = g.getSetAttribute,
                        Ct = g.input,
                        St = (w.fn.extend({
                            attr: function(e, t) {
                                return V(this, w.attr, e, t, 1 < arguments.length)
                            },
                            removeAttr: function(e) {
                                return this.each(function() {
                                    w.removeAttr(this, e)
                                })
                            }
                        }), w.extend({
                            attr: function(e, t, n) {
                                var i, r, o = e.nodeType;
                                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute == W ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (t = t.toLowerCase(), i = w.attrHooks[t] || (w.expr.match.bool.test(t) ? wt : _t)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void w.removeAttr(e, t))
                            },
                            removeAttr: function(e, t) {
                                var n, i, r = 0,
                                    o = t && t.match(H);
                                if (o && 1 === e.nodeType)
                                    for (; n = o[r++];) i = w.propFix[n] || n, w.expr.match.bool.test(n) ? Ct && Tt || !xt.test(n) ? e[i] = !1 : e[w.camelCase("default-" + n)] = e[i] = !1 : w.attr(e, n, ""), e.removeAttribute(Tt ? n : i)
                            },
                            attrHooks: {
                                type: {
                                    set: function(e, t) {
                                        var n;
                                        if (!g.radioValue && "radio" === t && w.nodeName(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        }), wt = {
                            set: function(e, t, n) {
                                return !1 === t ? w.removeAttr(e, n) : Ct && Tt || !xt.test(n) ? e.setAttribute(!Tt && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
                            }
                        }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
                            var o = Et[t] || w.find.attr;
                            Et[t] = Ct && Tt || !xt.test(t) ? function(e, t, n) {
                                var i, r;
                                return n || (r = Et[t], Et[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, Et[t] = r), i
                            } : function(e, t, n) {
                                return n ? void 0 : e[w.camelCase("default-" + t)] ? t.toLowerCase() : null
                            }
                        }), Ct && Tt || (w.attrHooks.value = {
                            set: function(e, t, n) {
                                return w.nodeName(e, "input") ? void(e.defaultValue = t) : _t && _t.set(e, t, n)
                            }
                        }), Tt || (_t = {
                            set: function(e, t, n) {
                                var i = e.getAttributeNode(n);
                                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
                            }
                        }, Et.id = Et.name = Et.coords = function(e, t, n) {
                            return n ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
                        }, w.valHooks.button = {
                            get: function(e, t) {
                                e = e.getAttributeNode(t);
                                return e && e.specified ? e.value : void 0
                            },
                            set: _t.set
                        }, w.attrHooks.contenteditable = {
                            set: function(e, t, n) {
                                _t.set(e, "" !== t && t, n)
                            }
                        }, w.each(["width", "height"], function(e, n) {
                            w.attrHooks[n] = {
                                set: function(e, t) {
                                    return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
                                }
                            }
                        })), g.style || (w.attrHooks.style = {
                            get: function(e) {
                                return e.style.cssText || void 0
                            },
                            set: function(e, t) {
                                return e.style.cssText = t + ""
                            }
                        }), /^(?:input|select|textarea|button|object)$/i),
                        Nt = /^(?:a|area)$/i,
                        Dt = (w.fn.extend({
                            prop: function(e, t) {
                                return V(this, w.prop, e, t, 1 < arguments.length)
                            },
                            removeProp: function(e) {
                                return e = w.propFix[e] || e, this.each(function() {
                                    try {
                                        this[e] = void 0, delete this[e]
                                    } catch (e) {}
                                })
                            }
                        }), w.extend({
                            propFix: {
                                for: "htmlFor",
                                class: "className"
                            },
                            prop: function(e, t, n) {
                                var i, r, o = e.nodeType;
                                if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !w.isXMLDoc(e)) && (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function(e) {
                                        var t = w.find.attr(e, "tabindex");
                                        return t ? parseInt(t, 10) : St.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : -1
                                    }
                                }
                            }
                        }), g.hrefNormalized || w.each(["href", "src"], function(e, t) {
                            w.propHooks[t] = {
                                get: function(e) {
                                    return e.getAttribute(t, 4)
                                }
                            }
                        }), g.optSelected || (w.propHooks.selected = {
                            get: function(e) {
                                e = e.parentNode;
                                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                            }
                        }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                            w.propFix[this.toLowerCase()] = this
                        }), g.enctype || (w.propFix.enctype = "encoding"), /[\t\r\n\f]/g),
                        At = (w.fn.extend({
                            addClass: function(t) {
                                var e, n, i, r, o, s, a = 0,
                                    l = this.length,
                                    c = "string" == typeof t && t;
                                if (w.isFunction(t)) return this.each(function(e) {
                                    w(this).addClass(t.call(this, e, this.className))
                                });
                                if (c)
                                    for (e = (t || "").match(H) || []; a < l; a++)
                                        if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                                            for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                            s = w.trim(i), n.className !== s && (n.className = s)
                                        }
                                return this
                            },
                            removeClass: function(t) {
                                var e, n, i, r, o, s, a = 0,
                                    l = this.length,
                                    c = 0 === arguments.length || "string" == typeof t && t;
                                if (w.isFunction(t)) return this.each(function(e) {
                                    w(this).removeClass(t.call(this, e, this.className))
                                });
                                if (c)
                                    for (e = (t || "").match(H) || []; a < l; a++)
                                        if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                                            for (o = 0; r = e[o++];)
                                                for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                                            s = t ? w.trim(i) : "", n.className !== s && (n.className = s)
                                        }
                                return this
                            },
                            toggleClass: function(r, t) {
                                var o = typeof r;
                                return "boolean" == typeof t && "string" == o ? t ? this.addClass(r) : this.removeClass(r) : this.each(w.isFunction(r) ? function(e) {
                                    w(this).toggleClass(r.call(this, e, this.className, t), t)
                                } : function() {
                                    if ("string" == o)
                                        for (var e, t = 0, n = w(this), i = r.match(H) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                                    else o != W && "boolean" != o || (this.className && w._data(this, "__className__", this.className), this.className = !this.className && !1 !== r && w._data(this, "__className__") || "")
                                })
                            },
                            hasClass: function(e) {
                                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                                    if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Dt, " ").indexOf(t)) return !0;
                                return !1
                            }
                        }), w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
                            w.fn[n] = function(e, t) {
                                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                            }
                        }), w.fn.extend({
                            hover: function(e, t) {
                                return this.mouseenter(e).mouseleave(t || e)
                            },
                            bind: function(e, t, n) {
                                return this.on(e, null, t, n)
                            },
                            unbind: function(e, t) {
                                return this.off(e, null, t)
                            },
                            delegate: function(e, t, n, i) {
                                return this.on(t, e, n, i)
                            },
                            undelegate: function(e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                            }
                        }), w.now()),
                        kt = /\?/,
                        It = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                    w.parseJSON = function(e) {
                        if (p.JSON && p.JSON.parse) return p.JSON.parse(e + "");
                        var r, o = null,
                            t = w.trim(e + "");
                        return t && !w.trim(t.replace(It, function(e, t, n, i) {
                            return 0 === (o = r && t ? 0 : o) ? e : (r = n || t, o += !i - !n, "")
                        })) ? Function("return " + t)() : w.error("Invalid JSON: " + e)
                    }, w.parseXML = function(e) {
                        var t;
                        if (!e || "string" != typeof e) return null;
                        try {
                            p.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                        } catch (e) {
                            t = void 0
                        }
                        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), t
                    };
                    var Ot, Lt, jt = /#.*$/,
                        Ht = /([?&])_=[^&]*/,
                        Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                        Mt = /^(?:GET|HEAD)$/,
                        Ft = /^\/\//,
                        qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                        Wt = {},
                        Rt = {},
                        Bt = "*/".concat("*");
                    try {
                        Lt = location.href
                    } catch (e) {
                        (Lt = m.createElement("a")).href = "", Lt = Lt.href
                    }

                    function Ut(o) {
                        return function(e, t) {
                            "string" != typeof e && (t = e, e = "*");
                            var n, i = 0,
                                r = e.toLowerCase().match(H) || [];
                            if (w.isFunction(t))
                                for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
                        }
                    }

                    function $t(t, i, r, o) {
                        var s = {},
                            a = t === Rt;

                        function l(e) {
                            var n;
                            return s[e] = !0, w.each(t[e] || [], function(e, t) {
                                t = t(i, r, o);
                                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
                            }), n
                        }
                        return l(i.dataTypes[0]) || !s["*"] && l("*")
                    }

                    function zt(e, t) {
                        var n, i, r = w.ajaxSettings.flatOptions || {};
                        for (i in t) void 0 !== t[i] && ((r[i] ? e : n = n || {})[i] = t[i]);
                        return n && w.extend(!0, e, n), e
                    }
                    Ot = qt.exec(Lt.toLowerCase()) || [], w.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Lt,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ot[1]),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Bt,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /xml/,
                                html: /html/,
                                json: /json/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": w.parseJSON,
                                "text xml": w.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
                        },
                        ajaxPrefilter: Ut(Wt),
                        ajaxTransport: Ut(Rt),
                        ajax: function(e, t) {
                            "object" == typeof e && (t = e, e = void 0);
                            var n, l, m, g, c, u, i, f = w.ajaxSetup({}, t = t || {}),
                                d = f.context || f,
                                v = f.context && (d.nodeType || d.jquery) ? w(d) : w.event,
                                y = w.Deferred(),
                                b = w.Callbacks("once memory"),
                                _ = f.statusCode || {},
                                r = {},
                                o = {},
                                h = 0,
                                s = "canceled",
                                p = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (2 === h) {
                                            if (!i)
                                                for (i = {}; t = Pt.exec(m);) i[t[1].toLowerCase()] = t[2];
                                            t = i[e.toLowerCase()]
                                        }
                                        return null == t ? null : t
                                    },
                                    getAllResponseHeaders: function() {
                                        return 2 === h ? m : null
                                    },
                                    setRequestHeader: function(e, t) {
                                        var n = e.toLowerCase();
                                        return h || (e = o[n] = o[n] || e, r[e] = t), this
                                    },
                                    overrideMimeType: function(e) {
                                        return h || (f.mimeType = e), this
                                    },
                                    statusCode: function(e) {
                                        if (e)
                                            if (h < 2)
                                                for (var t in e) _[t] = [_[t], e[t]];
                                            else p.always(e[p.status]);
                                        return this
                                    },
                                    abort: function(e) {
                                        e = e || s;
                                        return u && u.abort(e), a(0, e), this
                                    }
                                };
                            if (y.promise(p).complete = b.add, p.success = p.done, p.error = p.fail, f.url = ((e || f.url || Lt) + "").replace(jt, "").replace(Ft, Ot[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = w.trim(f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain && (e = qt.exec(f.url.toLowerCase()), f.crossDomain = !(!e || e[1] === Ot[1] && e[2] === Ot[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Ot[3] || ("http:" === Ot[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), $t(Wt, f, t, p), 2 === h) return p;
                            for (n in (c = f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mt.test(f.type), l = f.url, f.hasContent || (f.data && (l = f.url += (kt.test(l) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Ht.test(l) ? l.replace(Ht, "$1_=" + At++) : l + (kt.test(l) ? "&" : "?") + "_=" + At++)), f.ifModified && (w.lastModified[l] && p.setRequestHeader("If-Modified-Since", w.lastModified[l]), w.etag[l] && p.setRequestHeader("If-None-Match", w.etag[l])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && p.setRequestHeader("Content-Type", f.contentType), p.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : f.accepts["*"]), f.headers) p.setRequestHeader(n, f.headers[n]);
                            if (f.beforeSend && (!1 === f.beforeSend.call(d, p, f) || 2 === h)) return p.abort();
                            for (n in s = "abort", {
                                    success: 1,
                                    error: 1,
                                    complete: 1
                                }) p[n](f[n]);
                            if (u = $t(Rt, f, t, p)) {
                                p.readyState = 1, c && v.trigger("ajaxSend", [p, f]), f.async && 0 < f.timeout && (g = setTimeout(function() {
                                    p.abort("timeout")
                                }, f.timeout));
                                try {
                                    h = 1, u.send(r, a)
                                } catch (e) {
                                    if (!(h < 2)) throw e;
                                    a(-1, e)
                                }
                            } else a(-1, "No Transport");

                            function a(e, t, n, i) {
                                var r, o, s, a = t;
                                2 !== h && (h = 2, g && clearTimeout(g), u = void 0, m = i || "", p.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (r)
                                        for (s in a)
                                            if (a[s] && a[s].test(r)) {
                                                l.unshift(s);
                                                break
                                            }
                                    if (l[0] in n) o = l[0];
                                    else {
                                        for (s in n) {
                                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                                o = s;
                                                break
                                            }
                                            i = i || s
                                        }
                                        o = o || i
                                    }
                                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                                }(f, p, n)), s = function(e, t, n, u) {
                                    var i, r, o, s, a, l = {},
                                        c = e.dataTypes.slice();
                                    if (c[1])
                                        for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
                                    for (r = c.shift(); r;)
                                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !a && u && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = r, r = c.shift())
                                            if ("*" === r) r = a;
                                            else if ("*" !== a && a !== r) {
                                        if (!(o = l[a + " " + r] || l["* " + r]))
                                            for (i in l)
                                                if (s = i.split(" "), s[1] === r && (o = l[a + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === o ? o = l[i] : !0 !== l[i] && (r = s[0], c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== o)
                                            if (o && e.throws) t = o(t);
                                            else try {
                                                t = o(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: o ? e : "No conversion from " + a + " to " + r
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }(f, s, p, i), i ? (f.ifModified && ((n = p.getResponseHeader("Last-Modified")) && (w.lastModified[l] = n), (n = p.getResponseHeader("etag")) && (w.etag[l] = n)), 204 === e || "HEAD" === f.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, r = s.data, i = !(o = s.error))) : (o = a, !e && a || (a = "error", e < 0 && (e = 0))), p.status = e, p.statusText = (t || a) + "", i ? y.resolveWith(d, [r, a, p]) : y.rejectWith(d, [p, a, o]), p.statusCode(_), _ = void 0, c && v.trigger(i ? "ajaxSuccess" : "ajaxError", [p, f, i ? r : o]), b.fireWith(d, [p, a]), c && (v.trigger("ajaxComplete", [p, f]), --w.active || w.event.trigger("ajaxStop")))
                            }
                            return p
                        },
                        getJSON: function(e, t, n) {
                            return w.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return w.get(e, void 0, t, "script")
                        }
                    }), w.each(["get", "post"], function(e, r) {
                        w[r] = function(e, t, n, i) {
                            return w.isFunction(t) && (i = i || n, n = t, t = void 0), w.ajax({
                                url: e,
                                type: r,
                                dataType: i,
                                data: t,
                                success: n
                            })
                        }
                    }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                        w.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    }), w._evalUrl = function(e) {
                        return w.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        })
                    }, w.fn.extend({
                        wrapAll: function(t) {
                            return w.isFunction(t) ? this.each(function(e) {
                                w(this).wrapAll(t.call(this, e))
                            }) : (this[0] && (e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                return e
                            }).append(this)), this);
                            var e
                        },
                        wrapInner: function(n) {
                            return this.each(w.isFunction(n) ? function(e) {
                                w(this).wrapInner(n.call(this, e))
                            } : function() {
                                var e = w(this),
                                    t = e.contents();
                                t.length ? t.wrapAll(n) : e.append(n)
                            })
                        },
                        wrap: function(t) {
                            var n = w.isFunction(t);
                            return this.each(function(e) {
                                w(this).wrapAll(n ? t.call(this, e) : t)
                            })
                        },
                        unwrap: function() {
                            return this.parent().each(function() {
                                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
                            }).end()
                        }
                    }), w.expr.filters.hidden = function(e) {
                        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !g.reliableHiddenOffsets() && "none" === (e.style && e.style.display || w.css(e, "display"))
                    }, w.expr.filters.visible = function(e) {
                        return !w.expr.filters.hidden(e)
                    };
                    var Kt = /%20/g,
                        Qt = /\[\]$/,
                        Yt = /\r?\n/g,
                        Vt = /^(?:submit|button|image|reset|file)$/i,
                        Xt = /^(?:input|select|textarea|keygen)/i;
                    w.param = function(e, t) {
                        function n(e, t) {
                            t = w.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                        }
                        var i, r = [];
                        if (void 0 === t && (t = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
                            n(this.name, this.value)
                        });
                        else
                            for (i in e) ! function n(i, e, r, o) {
                                if (w.isArray(e)) w.each(e, function(e, t) {
                                    r || Qt.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t ? e : "") + "]", t, r, o)
                                });
                                else if (r || "object" !== w.type(e)) o(i, e);
                                else
                                    for (var t in e) n(i + "[" + t + "]", e[t], r, o)
                            }(i, e[i], t, n);
                        return r.join("&").replace(Kt, "+")
                    }, w.fn.extend({
                        serialize: function() {
                            return w.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map(function() {
                                var e = w.prop(this, "elements");
                                return e ? w.makeArray(e) : this
                            }).filter(function() {
                                var e = this.type;
                                return this.name && !w(this).is(":disabled") && Xt.test(this.nodeName) && !Vt.test(e) && (this.checked || !X.test(e))
                            }).map(function(e, t) {
                                var n = w(this).val();
                                return null == n ? null : w.isArray(n) ? w.map(n, function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(Yt, "\r\n")
                                    }
                                }) : {
                                    name: t.name,
                                    value: n.replace(Yt, "\r\n")
                                }
                            }).get()
                        }
                    }), w.ajaxSettings.xhr = void 0 !== p.ActiveXObject ? function() {
                        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zt() || function() {
                            try {
                                return new p.ActiveXObject("Microsoft.XMLHTTP")
                            } catch (e) {}
                        }()
                    } : Zt;
                    var Jt = 0,
                        Gt = {},
                        t = w.ajaxSettings.xhr();

                    function Zt() {
                        try {
                            return new p.XMLHttpRequest
                        } catch (e) {}
                    }
                    p.ActiveXObject && w(p).on("unload", function() {
                        for (var e in Gt) Gt[e](void 0, !0)
                    }), g.cors = !!t && "withCredentials" in t, (t = g.ajax = !!t) && w.ajaxTransport(function(l) {
                        var c;
                        if (!l.crossDomain || g.cors) return {
                            send: function(e, o) {
                                var t, s = l.xhr(),
                                    a = ++Jt;
                                if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                                    for (t in l.xhrFields) s[t] = l.xhrFields[t];
                                for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && s.setRequestHeader(t, e[t] + "");
                                s.send(l.hasContent && l.data || null), c = function(e, t) {
                                    var n, i, r;
                                    if (c && (t || 4 === s.readyState))
                                        if (delete Gt[a], c = void 0, s.onreadystatechange = w.noop, t) 4 !== s.readyState && s.abort();
                                        else {
                                            r = {}, n = s.status, "string" == typeof s.responseText && (r.text = s.responseText);
                                            try {
                                                i = s.statusText
                                            } catch (e) {
                                                i = ""
                                            }
                                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
                                        }
                                    r && o(n, i, r, s.getAllResponseHeaders())
                                }, l.async ? 4 === s.readyState ? setTimeout(c) : s.onreadystatechange = Gt[a] = c : c()
                            },
                            abort: function() {
                                c && c(void 0, !0)
                            }
                        }
                    }), w.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /(?:java|ecma)script/
                        },
                        converters: {
                            "text script": function(e) {
                                return w.globalEval(e), e
                            }
                        }
                    }), w.ajaxPrefilter("script", function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
                    }), w.ajaxTransport("script", function(t) {
                        var i, r;
                        if (t.crossDomain) return r = m.head || w("head")[0] || m.documentElement, {
                            send: function(e, n) {
                                (i = m.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                                    !t && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                                }, r.insertBefore(i, r.firstChild)
                            },
                            abort: function() {
                                i && i.onload(void 0, !0)
                            }
                        }
                    });
                    var en = [],
                        tn = /(=)\?(?=&|$)|\?\?/,
                        nn = (w.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function() {
                                var e = en.pop() || w.expando + "_" + At++;
                                return this[e] = !0, e
                            }
                        }), w.ajaxPrefilter("json jsonp", function(e, t, n) {
                            var i, r, o, s = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
                            return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = w.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(tn, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                                return o || w.error(i + " was not called"), o[0]
                            }, e.dataTypes[0] = "json", r = p[i], p[i] = function() {
                                o = arguments
                            }, n.always(function() {
                                p[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, en.push(i)), o && w.isFunction(r) && r(o[0]), o = r = void 0
                            }), "script") : void 0
                        }), w.parseHTML = function(e, t, n) {
                            if (!e || "string" != typeof e) return null;
                            "boolean" == typeof t && (n = t, t = !1), t = t || m;
                            var i = S.exec(e),
                                n = !n && [];
                            return i ? [t.createElement(i[1])] : (i = w.buildFragment([e], t, n), n && n.length && w(n).remove(), w.merge([], i.childNodes))
                        }, w.fn.load),
                        rn = (w.fn.load = function(e, t, n) {
                            if ("string" != typeof e && nn) return nn.apply(this, arguments);
                            var i, r, o, s = this,
                                a = e.indexOf(" ");
                            return 0 <= a && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && w.ajax({
                                url: e,
                                type: o,
                                dataType: "html",
                                data: t
                            }).done(function(e) {
                                r = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
                            }).complete(n && function(e, t) {
                                s.each(n, r || [e.responseText, t, e])
                            }), this
                        }, w.expr.filters.animated = function(t) {
                            return w.grep(w.timers, function(e) {
                                return t === e.elem
                            }).length
                        }, p.document.documentElement);

                    function on(e) {
                        return w.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
                    }
                    w.offset = {
                        setOffset: function(e, t, n) {
                            var i, r, o, s, a = w.css(e, "position"),
                                l = w(e),
                                c = {};
                            "static" === a && (e.style.position = "relative"), o = l.offset(), i = w.css(e, "top"), s = w.css(e, "left"), a = ("absolute" === a || "fixed" === a) && -1 < w.inArray("auto", [i, s]) ? (r = (a = l.position()).top, a.left) : (r = parseFloat(i) || 0, parseFloat(s) || 0), null != (t = w.isFunction(t) ? t.call(e, n, o) : t).top && (c.top = t.top - o.top + r), null != t.left && (c.left = t.left - o.left + a), "using" in t ? t.using.call(e, c) : l.css(c)
                        }
                    }, w.fn.extend({
                        offset: function(t) {
                            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                                w.offset.setOffset(this, t, e)
                            });
                            var e, n = {
                                    top: 0,
                                    left: 0
                                },
                                i = this[0],
                                r = i && i.ownerDocument;
                            return r ? (e = r.documentElement, w.contains(e, i) ? (typeof i.getBoundingClientRect != W && (n = i.getBoundingClientRect()), i = on(r), {
                                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                            }) : n) : void 0
                        },
                        position: function() {
                            var e, t, n, i;
                            if (this[0]) return n = {
                                top: 0,
                                left: 0
                            }, i = this[0], "fixed" === w.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), (n = w.nodeName(e[0], "html") ? n : e.offset()).top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                                top: t.top - n.top - w.css(i, "marginTop", !0),
                                left: t.left - n.left - w.css(i, "marginLeft", !0)
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for (var e = this.offsetParent || rn; e && !w.nodeName(e, "html") && "static" === w.css(e, "position");) e = e.offsetParent;
                                return e || rn
                            })
                        }
                    }), w.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, function(t, r) {
                        var o = /Y/.test(r);
                        w.fn[t] = function(e) {
                            return V(this, function(e, t, n) {
                                var i = on(e);
                                return void 0 === n ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : void(i ? i.scrollTo(o ? w(i).scrollLeft() : n, o ? n : w(i).scrollTop()) : e[t] = n)
                            }, t, e, arguments.length, null)
                        }
                    }), w.each(["top", "left"], function(e, n) {
                        w.cssHooks[n] = ze(g.pixelPosition, function(e, t) {
                            return t ? (t = He(e, n), Ue.test(t) ? w(e).position()[n] + "px" : t) : void 0
                        })
                    }), w.each({
                        Height: "height",
                        Width: "width"
                    }, function(o, s) {
                        w.each({
                            padding: "inner" + o,
                            content: s,
                            "": "outer" + o
                        }, function(i, e) {
                            w.fn[e] = function(e, t) {
                                var n = arguments.length && (i || "boolean" != typeof e),
                                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                                return V(this, function(e, t, n) {
                                    var i;
                                    return w.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? w.css(e, t, r) : w.style(e, t, n, r)
                                }, s, n ? e : void 0, n, null)
                            }
                        })
                    }), w.fn.size = function() {
                        return this.length
                    }, w.fn.andSelf = w.fn.addBack, void 0 === (un = function() {
                        return w
                    }.apply(cn, [])) || (ln.exports = un);
                    var sn = p.jQuery,
                        an = p.$;
                    return w.noConflict = function(e) {
                        return p.$ === w && (p.$ = an), e && p.jQuery === w && (p.jQuery = sn), w
                    }, typeof r == W && (p.jQuery = p.$ = w), w
                }, "object" == typeof ln.exports ? ln.exports = e.document ? t(e, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e)
                } : t(e)
            }
        },
        i = {};

    function r(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        t = i[e] = {
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, r), t.exports
    }
    r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();
    r(9989)
})();