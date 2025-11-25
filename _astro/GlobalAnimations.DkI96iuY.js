import {
    r as et
} from "./index.RH_Wq4ov.js";
import {
    g as ke
} from "./index.DKtf60Sy.js";
import {
    S as tt
} from "./ScrollTrigger.BWsqEc1I.js"; /* empty css                  */
function rt(k) {
    return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k
}

function nt(k, b) {
    for (var d = 0; d < b.length; d++) {
        var o = b[d];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(k, o.key, o)
    }
}

function ot(k, b, d) {
    return b && nt(k.prototype, b), k
}
/*!
 * ScrollSmoother 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var j, Ne, X, Se, Me, he, Te, $e, y, me, Le, Ue, We, Ge, Ke, Je = function() {
        return typeof window < "u"
    },
    Qe = function() {
        return j || Je() && (j = window.gsap) && j.registerPlugin && j
    },
    it = function(b) {
        return Math.round(b * 1e5) / 1e5 || 0
    },
    xe = function(b) {
        return y.maxScroll(b || X)
    },
    at = function(b, d) {
        var o = b.parentNode || Me,
            u = b.getBoundingClientRect(),
            i = o.getBoundingClientRect(),
            g = i.top - u.top,
            E = i.bottom - u.bottom,
            P = (Math.abs(g) > Math.abs(E) ? g : E) / (1 - d),
            f = -P * d,
            T, a;
        return P > 0 && (T = i.height / (X.innerHeight + i.height), a = T === .5 ? i.height * 2 : Math.min(i.height, Math.abs(-P * T / (2 * T - 1))) * 2 * (d || 1), f += d ? -a * d : -a / 2, P += a), {
            change: P,
            offset: f
        }
    },
    st = function(b) {
        var d = Se.querySelector(".ScrollSmoother-wrapper");
        return d || (d = Se.createElement("div"), d.classList.add("ScrollSmoother-wrapper"), b.parentNode.insertBefore(d, b), d.appendChild(b)), d
    },
    Ee = (function() {
        function k(b) {
            var d = this;
            Ne || k.register(j) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), b = this.vars = b || {}, me && me.kill(), me = this, Ge(this);
            var o = b,
                u = o.smoothTouch,
                i = o.onUpdate,
                g = o.onStop,
                E = o.smooth,
                P = o.onFocusIn,
                f = o.normalizeScroll,
                T = o.wholePixels,
                a, l, x, m, S, R, ge, ve, be, H, oe, $, se, C, Z = this,
                ee = b.effectsPrefix || "",
                c = y.getScrollFunc(X),
                r = y.isTouch === 1 ? u === !0 ? .8 : parseFloat(u) || 0 : E === 0 || E === !1 ? 0 : parseFloat(E) || .8,
                h = r && +b.speed || 1,
                s = 0,
                N = 0,
                Y = 1,
                J = Ue(0),
                le = function() {
                    return J.update(-s)
                },
                U = {
                    y: 0
                },
                _e = function() {
                    return a.style.overflow = "visible"
                },
                ye, fe = function(e) {
                    e.update();
                    var n = e.getTween();
                    n && (n.pause(), n._time = n._dur, n._tTime = n._tDur), ye = !1, e.animation.progress(e.progress, !0)
                },
                W = function(e, n) {
                    (e !== s && !H || n) && (T && (e = Math.round(e)), r && (a.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", a._gsap.y = e + "px"), N = e - s, s = e, y.isUpdating || k.isRefreshing || y.update())
                },
                I = function(e) {
                    return arguments.length ? (e < 0 && (e = 0), U.y = -e, ye = !0, H ? s = -e : W(-e), y.isRefreshing ? m.update() : c(e / h), this) : -s
                },
                G = typeof ResizeObserver < "u" && b.autoResize !== !1 && new ResizeObserver(function() {
                    if (!y.isRefreshing) {
                        var t = xe(l) * h;
                        t < -s && I(t), Ke.restart(!0)
                    }
                }),
                te, L = function(e) {
                    l.scrollTop = 0, !(e.target.contains && e.target.contains(l) || P && P(d, e) === !1) && (y.isInViewport(e.target) || e.target === te || d.scrollTo(e.target, !1, "center center"), te = e.target)
                },
                z = function(e, n) {
                    if (e < n.start) return e;
                    var p = isNaN(n.ratio) ? 1 : n.ratio,
                        w = n.end - n.start,
                        _ = e - n.start,
                        q = n.offset || 0,
                        ie = n.pins || [],
                        D = ie.offset || 0,
                        Q = n._startClamp && n.start <= 0 || n.pins && n.pins.offset ? 0 : n._endClamp && n.end === xe() ? 1 : .5;
                    return ie.forEach(function(F) {
                        w -= F.distance, F.nativeStart <= e && (_ -= F.distance)
                    }), D && (_ *= (w - D / p) / w), e + (_ - q * Q) / p - _
                },
                K = function t(e, n, p) {
                    p || (e.pins.length = e.pins.offset = 0);
                    var w = e.pins,
                        _ = e.markers,
                        q, ie, D, Q, F, A, ne, v;
                    for (ne = 0; ne < n.length; ne++)
                        if (v = n[ne], e.trigger && v.trigger && e !== v && (v.trigger === e.trigger || v.pinnedContainer === e.trigger || e.trigger.contains(v.trigger)) && (F = v._startNative || v._startClamp || v.start, A = v._endNative || v._endClamp || v.end, D = z(F, e), Q = v.pin && A > 0 ? D + (A - F) : z(A, e), v.setPositions(D, Q, !0, (v._startClamp ? Math.max(0, D) : D) - F), v.markerStart && _.push(j.quickSetter([v.markerStart, v.markerEnd], "y", "px")), v.pin && v.end > 0 && !p)) {
                            if (q = v.end - v.start, ie = e._startClamp && v.start < 0, ie) {
                                if (e.start > 0) {
                                    e.setPositions(0, e.end + (e._startNative - e.start), !0), t(e, n);
                                    return
                                }
                                q += v.start, w.offset = -v.start
                            }
                            w.push({
                                start: v.start,
                                nativeStart: F,
                                end: v.end,
                                distance: q,
                                trig: v
                            }), e.setPositions(e.start, e.end + (ie ? -v.start : q), !0)
                        }
                },
                ce = function(e, n) {
                    S.forEach(function(p) {
                        return K(p, e, n)
                    })
                },
                ue = function() {
                    Me = Se.documentElement, he = Se.body, _e(), requestAnimationFrame(_e), S && (y.getAll().forEach(function(e) {
                        e._startNative = e.start, e._endNative = e.end
                    }), S.forEach(function(e) {
                        var n = e._startClamp || e.start,
                            p = e.autoSpeed ? Math.min(xe(), e.end) : n + Math.abs((e.end - n) / e.ratio),
                            w = p - e.end;
                        if (n -= w / 2, p -= w / 2, n > p) {
                            var _ = n;
                            n = p, p = _
                        }
                        e._startClamp && n < 0 ? (p = e.ratio < 0 ? xe() : e.end / e.ratio, w = p - e.end, n = 0) : (e.ratio < 0 || e._endClamp && p >= xe()) && (p = xe(), n = e.ratio < 0 || e.ratio > 1 ? 0 : p - (p - e.start) / e.ratio, w = (p - n) * e.ratio - (e.end - e.start)), e.offset = w || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(n, p, !0)
                    }), ce(y.sort())), J.reset()
                },
                re = function() {
                    return y.addEventListener("refresh", ue)
                },
                M = function() {
                    return S && S.forEach(function(e) {
                        return e.vars.onRefresh(e)
                    })
                },
                O = function() {
                    return S && S.forEach(function(e) {
                        return e.vars.onRefreshInit(e)
                    }), M
                },
                V = function(e, n, p, w) {
                    return function() {
                        var _ = typeof n == "function" ? n(p, w) : n;
                        _ || _ === 0 || (_ = w.getAttribute("data-" + ee + e) || (e === "speed" ? 1 : 0)), w.setAttribute("data-" + ee + e, _);
                        var q = (_ + "").substr(0, 6) === "clamp(";
                        return {
                            clamp: q,
                            value: q ? _.substr(6, _.length - 7) : _
                        }
                    }
                },
                de = function(e, n, p, w, _) {
                    _ = (typeof _ == "function" ? _(w, e) : _) || 0;
                    var q = V("speed", n, w, e),
                        ie = V("lag", p, w, e),
                        D = j.getProperty(e, "y"),
                        Q = e._gsap,
                        F, A, ne, v, De, ze, Oe = [],
                        Ye = function() {
                            n = q(), p = parseFloat(ie().value), F = parseFloat(n.value) || 1, ne = n.value === "auto", De = ne || A && A._startClamp && A.start <= 0 || Oe.offset ? 0 : A && A._endClamp && A.end === xe() ? 1 : .5, v && v.kill(), v = p && j.to(e, {
                                ease: Le,
                                overwrite: !1,
                                y: "+=0",
                                duration: p
                            }), A && (A.ratio = F, A.autoSpeed = ne)
                        },
                        He = function() {
                            Q.y = D + "px", Q.renderTransform(1), Ye()
                        },
                        Ie = [],
                        je = 0,
                        Ve = function(B) {
                            if (ne) {
                                He();
                                var ae = at(e, $e(0, 1, -B.start / (B.end - B.start)));
                                je = ae.change, ze = ae.offset
                            } else ze = Oe.offset || 0, je = (B.end - B.start - ze) * (1 - F);
                            Oe.forEach(function(Ce) {
                                return je -= Ce.distance * (1 - F)
                            }), B.offset = je || .001, B.vars.onUpdate(B), v && v.progress(1)
                        };
                    return Ye(), (F !== 1 || ne || v) && (A = y.create({
                        trigger: ne ? e.parentNode : e,
                        start: function() {
                            return n.clamp ? "clamp(top bottom+=" + _ + ")" : "top bottom+=" + _
                        },
                        end: function() {
                            return n.value < 0 ? "max" : n.clamp ? "clamp(bottom top-=" + _ + ")" : "bottom top-=" + _
                        },
                        scroller: l,
                        scrub: !0,
                        refreshPriority: -999,
                        onRefreshInit: He,
                        onRefresh: Ve,
                        onKill: function(B) {
                            var ae = S.indexOf(B);
                            ae >= 0 && S.splice(ae, 1), He()
                        },
                        onUpdate: function(B) {
                            var ae = D + je * (B.progress - De),
                                Ce = Oe.length,
                                Re = 0,
                                pe, Ae, Fe;
                            if (B.offset) {
                                if (Ce) {
                                    for (Ae = -s, Fe = B.end; Ce--;) {
                                        if (pe = Oe[Ce], pe.trig.isActive || Ae >= pe.start && Ae <= pe.end) {
                                            v && (pe.trig.progress += pe.trig.direction < 0 ? .001 : -.001, pe.trig.update(0, 0, 1), v.resetTo("y", parseFloat(Q.y), -N, !0), Y && v.progress(1));
                                            return
                                        }
                                        Ae > pe.end && (Re += pe.distance), Fe -= pe.distance
                                    }
                                    ae = D + Re + je * ((j.utils.clamp(B.start, B.end, Ae) - B.start - Re) / (Fe - B.start) - De)
                                }
                                Ie.length && !ne && Ie.forEach(function(Ze) {
                                    return Ze(ae - Re)
                                }), ae = it(ae + ze), v ? (v.resetTo("y", ae, -N, !0), Y && v.progress(1)) : (Q.y = ae + "px", Q.renderTransform(1))
                            }
                        }
                    }), Ve(A), j.core.getCache(A.trigger).stRevert = O, A.startY = D, A.pins = Oe, A.markers = Ie, A.ratio = F, A.autoSpeed = ne, e.style.willChange = "transform"), A
                };
            re(), y.addEventListener("killAll", re), j.delayedCall(.5, function() {
                return Y = 0
            }), this.scrollTop = I, this.scrollTo = function(t, e, n) {
                var p = j.utils.clamp(0, xe(), isNaN(t) ? d.offset(t, n, !!e && !H) : +t);
                e ? H ? j.to(d, {
                    duration: r,
                    scrollTop: p,
                    overwrite: "auto",
                    ease: Le
                }) : c(p) : I(p)
            }, this.offset = function(t, e, n) {
                t = Te(t)[0];
                var p = t.style.cssText,
                    w = y.create({
                        trigger: t,
                        start: e || "top top"
                    }),
                    _;
                return S && (Y ? y.refresh() : ce([w], !0)), _ = w.start / (n ? h : 1), w.kill(!1), t.style.cssText = p, j.core.getCache(t).uncache = 1, _
            };

            function we() {
                return x = a.clientHeight, a.style.overflow = "visible", he.style.height = X.innerHeight + (x - X.innerHeight) / h + "px", x - X.innerHeight
            }
            this.content = function(t) {
                if (arguments.length) {
                    var e = Te(t || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || he.children[0];
                    return e !== a && (a = e, be = a.getAttribute("style") || "", G && G.observe(a), j.set(a, {
                        overflow: "visible",
                        width: "100%",
                        boxSizing: "border-box",
                        y: "+=0"
                    }), r || j.set(a, {
                        clearProps: "transform"
                    })), this
                }
                return a
            }, this.wrapper = function(t) {
                return arguments.length ? (l = Te(t || "#smooth-wrapper")[0] || st(a), ve = l.getAttribute("style") || "", we(), j.set(l, r ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                } : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto"
                }), this) : l
            }, this.effects = function(t, e) {
                var n;
                if (S || (S = []), !t) return S.slice(0);
                t = Te(t), t.forEach(function(F) {
                    for (var A = S.length; A--;) S[A].trigger === F && S[A].kill()
                }), e = e || {};
                var p = e,
                    w = p.speed,
                    _ = p.lag,
                    q = p.effectsPadding,
                    ie = [],
                    D, Q;
                for (D = 0; D < t.length; D++) Q = de(t[D], w, _, D, q), Q && ie.push(Q);
                return (n = S).push.apply(n, ie), e.refresh !== !1 && y.refresh(), ie
            }, this.sections = function(t, e) {
                var n;
                if (R || (R = []), !t) return R.slice(0);
                var p = Te(t).map(function(w) {
                    return y.create({
                        trigger: w,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function(q) {
                            w.style.opacity = q.isActive ? "1" : "0", w.style.pointerEvents = q.isActive ? "all" : "none"
                        }
                    })
                });
                return e && e.add ? (n = R).push.apply(n, p) : R = p.slice(0), p
            }, this.content(b.content), this.wrapper(b.wrapper), this.render = function(t) {
                return W(t || t === 0 ? t : s)
            }, this.getVelocity = function() {
                return J.getVelocity(-s)
            }, y.scrollerProxy(l, {
                scrollTop: I,
                scrollHeight: function() {
                    return we() && he.scrollHeight
                },
                fixedMarkers: b.fixedMarkers !== !1 && !!r,
                content: a,
                getBoundingClientRect: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: X.innerWidth,
                        height: X.innerHeight
                    }
                }
            }), y.defaults({
                scroller: l
            });
            var Be = y.getAll().filter(function(t) {
                return t.scroller === X || t.scroller === l
            });
            Be.forEach(function(t) {
                return t.revert(!0, !0)
            }), m = y.create({
                animation: j.fromTo(U, {
                    y: function() {
                        return C = 0, 0
                    }
                }, {
                    y: function() {
                        return C = 1, -we()
                    },
                    immediateRender: !1,
                    ease: "none",
                    data: "ScrollSmoother",
                    duration: 100,
                    onUpdate: function() {
                        if (C) {
                            var e = ye;
                            e && (fe(m), U.y = s), W(U.y, e), le(), i && !H && i(Z)
                        }
                    }
                }),
                onRefreshInit: function(e) {
                    if (!k.isRefreshing) {
                        if (k.isRefreshing = !0, S) {
                            var n = y.getAll().filter(function(w) {
                                return !!w.pin
                            });
                            S.forEach(function(w) {
                                w.vars.pinnedContainer || n.forEach(function(_) {
                                    if (_.pin.contains(w.trigger)) {
                                        var q = w.vars;
                                        q.pinnedContainer = _.pin, w.vars = null, w.init(q, w.animation)
                                    }
                                })
                            })
                        }
                        var p = e.getTween();
                        se = p && p._end > p._dp._time, $ = s, U.y = 0, r && (y.isTouch === 1 && (l.style.position = "absolute"), l.scrollTop = 0, y.isTouch === 1 && (l.style.position = "fixed"))
                    }
                },
                onRefresh: function(e) {
                    e.animation.invalidate(), e.setPositions(e.start, we() / h), se || fe(e), U.y = -c() * h, W(U.y), Y || (se && (ye = !1), e.animation.progress(j.utils.clamp(0, 1, $ / h / -e.end))), se && (e.progress -= .001, e.update()), k.isRefreshing = !1
                },
                id: "ScrollSmoother",
                scroller: X,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: function() {
                    return we() / h
                },
                onScrubComplete: function() {
                    J.reset(), g && g(d)
                },
                scrub: r || !0
            }), this.smooth = function(t) {
                return arguments.length && (r = t || 0, h = r && +b.speed || 1, m.scrubDuration(t)), m.getTween() ? m.getTween().duration() : 0
            }, m.getTween() && (m.getTween().vars.ease = b.ease || Le), this.scrollTrigger = m, b.effects && this.effects(b.effects === !0 ? "[data-" + ee + "speed], [data-" + ee + "lag]" : b.effects, {
                effectsPadding: b.effectsPadding,
                refresh: !1
            }), b.sections && this.sections(b.sections === !0 ? "[data-section]" : b.sections), Be.forEach(function(t) {
                t.vars.scroller = l, t.revert(!1, !0), t.init(t.vars, t.animation)
            }), this.paused = function(t, e) {
                return arguments.length ? (!!H !== t && (t ? (m.getTween() && m.getTween().pause(), c(-s / h), J.reset(), oe = y.normalizeScroll(), oe && oe.disable(), H = y.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function() {
                        return I(-s)
                    }
                }), H.nested = We(Me, "wheel,touch,scroll", !0, e !== !1)) : (H.nested.kill(), H.kill(), H = 0, oe && oe.enable(), m.progress = (-s / h - m.start) / (m.end - m.start), fe(m))), this) : !!H
            }, this.kill = this.revert = function() {
                d.paused(!1), fe(m), m.kill();
                for (var t = (S || []).concat(R || []), e = t.length; e--;) t[e].kill();
                y.scrollerProxy(l), y.removeEventListener("killAll", re), y.removeEventListener("refresh", ue), l.style.cssText = ve, a.style.cssText = be;
                var n = y.defaults({});
                n && n.scroller === l && y.defaults({
                    scroller: X
                }), d.normalizer && y.normalizeScroll(!1), clearInterval(ge), me = null, G && G.disconnect(), he.style.removeProperty("height"), X.removeEventListener("focusin", L)
            }, this.refresh = function(t, e) {
                return m.refresh(t, e)
            }, f && (this.normalizer = y.normalizeScroll(f === !0 ? {
                debounce: !0,
                content: !r && a
            } : f)), y.config(b), "scrollBehavior" in X.getComputedStyle(he) && j.set([he, Me], {
                scrollBehavior: "auto"
            }), X.addEventListener("focusin", L), ge = setInterval(le, 250), Se.readyState === "loading" || requestAnimationFrame(function() {
                return y.refresh()
            })
        }
        return k.register = function(d) {
            return Ne || (j = d || Qe(), Je() && window.document && (X = window, Se = document, Me = Se.documentElement, he = Se.body), j && (Te = j.utils.toArray, $e = j.utils.clamp, Le = j.parseEase("expo"), Ge = j.core.context || function() {}, y = j.core.globals().ScrollTrigger, j.core.globals("ScrollSmoother", k), he && y && (Ke = j.delayedCall(.2, function() {
                return y.isRefreshing || me && me.refresh()
            }).pause(), Ue = y.core._getVelocityProp, We = y.core._inputObserver, k.refresh = y.refresh, Ne = 1))), Ne
        }, ot(k, [{
            key: "progress",
            get: function() {
                return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
            }
        }]), k
    })();
Ee.version = "3.13.0";
Ee.create = function(k) {
    return me && k && me.content() === Te(k.content)[0] ? me : new Ee(k)
};
Ee.get = function() {
    return me
};
Qe() && j.registerPlugin(Ee);
var qe = {
        exports: {}
    },
    ct = qe.exports,
    Xe;

function ut() {
    return Xe || (Xe = 1, (function(k, b) {
        (function(d, o) {
            k.exports = o()
        })(ct, function() {
            return (function(d) {
                function o(i) {
                    if (u[i]) return u[i].exports;
                    var g = u[i] = {
                        exports: {},
                        id: i,
                        loaded: !1
                    };
                    return d[i].call(g.exports, g, g.exports, o), g.loaded = !0, g.exports
                }
                var u = {};
                return o.m = d, o.c = u, o.p = "dist/", o(0)
            })([function(d, o, u) {
                function i(s) {
                    return s && s.__esModule ? s : {
                        default: s
                    }
                }
                var g = Object.assign || function(s) {
                        for (var N = 1; N < arguments.length; N++) {
                            var Y = arguments[N];
                            for (var J in Y) Object.prototype.hasOwnProperty.call(Y, J) && (s[J] = Y[J])
                        }
                        return s
                    },
                    E = u(1),
                    P = (i(E), u(6)),
                    f = i(P),
                    T = u(7),
                    a = i(T),
                    l = u(8),
                    x = i(l),
                    m = u(9),
                    S = i(m),
                    R = u(10),
                    ge = i(R),
                    ve = u(11),
                    be = i(ve),
                    H = u(14),
                    oe = i(H),
                    $ = [],
                    se = !1,
                    C = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        startEvent: "DOMContentLoaded",
                        throttleDelay: 99,
                        debounceDelay: 50,
                        disableMutationObserver: !1
                    },
                    Z = function() {
                        var s = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                        if (s && (se = !0), se) return $ = (0, be.default)($, C), (0, ge.default)($, C.once), $
                    },
                    ee = function() {
                        $ = (0, oe.default)(), Z()
                    },
                    c = function() {
                        $.forEach(function(s, N) {
                            s.node.removeAttribute("data-aos"), s.node.removeAttribute("data-aos-easing"), s.node.removeAttribute("data-aos-duration"), s.node.removeAttribute("data-aos-delay")
                        })
                    },
                    r = function(s) {
                        return s === !0 || s === "mobile" && S.default.mobile() || s === "phone" && S.default.phone() || s === "tablet" && S.default.tablet() || typeof s == "function" && s() === !0
                    },
                    h = function(s) {
                        C = g(C, s), $ = (0, oe.default)();
                        var N = document.all && !window.atob;
                        return r(C.disable) || N ? c() : (C.disableMutationObserver || x.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), C.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", C.easing), document.querySelector("body").setAttribute("data-aos-duration", C.duration), document.querySelector("body").setAttribute("data-aos-delay", C.delay), C.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? Z(!0) : C.startEvent === "load" ? window.addEventListener(C.startEvent, function() {
                            Z(!0)
                        }) : document.addEventListener(C.startEvent, function() {
                            Z(!0)
                        }), window.addEventListener("resize", (0, a.default)(Z, C.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(Z, C.debounceDelay, !0)), window.addEventListener("scroll", (0, f.default)(function() {
                            (0, ge.default)($, C.once)
                        }, C.throttleDelay)), C.disableMutationObserver || x.default.ready("[data-aos]", ee), $)
                    };
                d.exports = {
                    init: h,
                    refresh: Z,
                    refreshHard: ee
                }
            }, function(d, o) {}, , , , , function(d, o) {
                (function(u) {
                    function i(r, h, s) {
                        function N(O) {
                            var V = I,
                                de = G;
                            return I = G = void 0, ce = O, L = r.apply(de, V)
                        }

                        function Y(O) {
                            return ce = O, z = setTimeout(U, h), ue ? N(O) : L
                        }

                        function J(O) {
                            var V = O - K,
                                de = O - ce,
                                we = h - V;
                            return re ? ee(we, te - de) : we
                        }

                        function le(O) {
                            var V = O - K,
                                de = O - ce;
                            return K === void 0 || V >= h || V < 0 || re && de >= te
                        }

                        function U() {
                            var O = c();
                            return le(O) ? _e(O) : void(z = setTimeout(U, J(O)))
                        }

                        function _e(O) {
                            return z = void 0, M && I ? N(O) : (I = G = void 0, L)
                        }

                        function ye() {
                            z !== void 0 && clearTimeout(z), ce = 0, I = K = G = z = void 0
                        }

                        function fe() {
                            return z === void 0 ? L : _e(c())
                        }

                        function W() {
                            var O = c(),
                                V = le(O);
                            if (I = arguments, G = this, K = O, V) {
                                if (z === void 0) return Y(K);
                                if (re) return z = setTimeout(U, h), N(K)
                            }
                            return z === void 0 && (z = setTimeout(U, h)), L
                        }
                        var I, G, te, L, z, K, ce = 0,
                            ue = !1,
                            re = !1,
                            M = !0;
                        if (typeof r != "function") throw new TypeError(l);
                        return h = T(h) || 0, E(s) && (ue = !!s.leading, re = "maxWait" in s, te = re ? Z(T(s.maxWait) || 0, h) : te, M = "trailing" in s ? !!s.trailing : M), W.cancel = ye, W.flush = fe, W
                    }

                    function g(r, h, s) {
                        var N = !0,
                            Y = !0;
                        if (typeof r != "function") throw new TypeError(l);
                        return E(s) && (N = "leading" in s ? !!s.leading : N, Y = "trailing" in s ? !!s.trailing : Y), i(r, h, {
                            leading: N,
                            maxWait: h,
                            trailing: Y
                        })
                    }

                    function E(r) {
                        var h = typeof r > "u" ? "undefined" : a(r);
                        return !!r && (h == "object" || h == "function")
                    }

                    function P(r) {
                        return !!r && (typeof r > "u" ? "undefined" : a(r)) == "object"
                    }

                    function f(r) {
                        return (typeof r > "u" ? "undefined" : a(r)) == "symbol" || P(r) && C.call(r) == m
                    }

                    function T(r) {
                        if (typeof r == "number") return r;
                        if (f(r)) return x;
                        if (E(r)) {
                            var h = typeof r.valueOf == "function" ? r.valueOf() : r;
                            r = E(h) ? h + "" : h
                        }
                        if (typeof r != "string") return r === 0 ? r : +r;
                        r = r.replace(S, "");
                        var s = ge.test(r);
                        return s || ve.test(r) ? be(r.slice(2), s ? 2 : 8) : R.test(r) ? x : +r
                    }
                    var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
                            return typeof r
                        } : function(r) {
                            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                        },
                        l = "Expected a function",
                        x = NaN,
                        m = "[object Symbol]",
                        S = /^\s+|\s+$/g,
                        R = /^[-+]0x[0-9a-f]+$/i,
                        ge = /^0b[01]+$/i,
                        ve = /^0o[0-7]+$/i,
                        be = parseInt,
                        H = (typeof u > "u" ? "undefined" : a(u)) == "object" && u && u.Object === Object && u,
                        oe = (typeof self > "u" ? "undefined" : a(self)) == "object" && self && self.Object === Object && self,
                        $ = H || oe || Function("return this")(),
                        se = Object.prototype,
                        C = se.toString,
                        Z = Math.max,
                        ee = Math.min,
                        c = function() {
                            return $.Date.now()
                        };
                    d.exports = g
                }).call(o, (function() {
                    return this
                })())
            }, function(d, o) {
                (function(u) {
                    function i(c, r, h) {
                        function s(M) {
                            var O = W,
                                V = I;
                            return W = I = void 0, K = M, te = c.apply(V, O)
                        }

                        function N(M) {
                            return K = M, L = setTimeout(le, r), ce ? s(M) : te
                        }

                        function Y(M) {
                            var O = M - z,
                                V = M - K,
                                de = r - O;
                            return ue ? Z(de, G - V) : de
                        }

                        function J(M) {
                            var O = M - z,
                                V = M - K;
                            return z === void 0 || O >= r || O < 0 || ue && V >= G
                        }

                        function le() {
                            var M = ee();
                            return J(M) ? U(M) : void(L = setTimeout(le, Y(M)))
                        }

                        function U(M) {
                            return L = void 0, re && W ? s(M) : (W = I = void 0, te)
                        }

                        function _e() {
                            L !== void 0 && clearTimeout(L), K = 0, W = z = I = L = void 0
                        }

                        function ye() {
                            return L === void 0 ? te : U(ee())
                        }

                        function fe() {
                            var M = ee(),
                                O = J(M);
                            if (W = arguments, I = this, z = M, O) {
                                if (L === void 0) return N(z);
                                if (ue) return L = setTimeout(le, r), s(z)
                            }
                            return L === void 0 && (L = setTimeout(le, r)), te
                        }
                        var W, I, G, te, L, z, K = 0,
                            ce = !1,
                            ue = !1,
                            re = !0;
                        if (typeof c != "function") throw new TypeError(a);
                        return r = f(r) || 0, g(h) && (ce = !!h.leading, ue = "maxWait" in h, G = ue ? C(f(h.maxWait) || 0, r) : G, re = "trailing" in h ? !!h.trailing : re), fe.cancel = _e, fe.flush = ye, fe
                    }

                    function g(c) {
                        var r = typeof c > "u" ? "undefined" : T(c);
                        return !!c && (r == "object" || r == "function")
                    }

                    function E(c) {
                        return !!c && (typeof c > "u" ? "undefined" : T(c)) == "object"
                    }

                    function P(c) {
                        return (typeof c > "u" ? "undefined" : T(c)) == "symbol" || E(c) && se.call(c) == x
                    }

                    function f(c) {
                        if (typeof c == "number") return c;
                        if (P(c)) return l;
                        if (g(c)) {
                            var r = typeof c.valueOf == "function" ? c.valueOf() : c;
                            c = g(r) ? r + "" : r
                        }
                        if (typeof c != "string") return c === 0 ? c : +c;
                        c = c.replace(m, "");
                        var h = R.test(c);
                        return h || ge.test(c) ? ve(c.slice(2), h ? 2 : 8) : S.test(c) ? l : +c
                    }
                    var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
                            return typeof c
                        } : function(c) {
                            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
                        },
                        a = "Expected a function",
                        l = NaN,
                        x = "[object Symbol]",
                        m = /^\s+|\s+$/g,
                        S = /^[-+]0x[0-9a-f]+$/i,
                        R = /^0b[01]+$/i,
                        ge = /^0o[0-7]+$/i,
                        ve = parseInt,
                        be = (typeof u > "u" ? "undefined" : T(u)) == "object" && u && u.Object === Object && u,
                        H = (typeof self > "u" ? "undefined" : T(self)) == "object" && self && self.Object === Object && self,
                        oe = be || H || Function("return this")(),
                        $ = Object.prototype,
                        se = $.toString,
                        C = Math.max,
                        Z = Math.min,
                        ee = function() {
                            return oe.Date.now()
                        };
                    d.exports = i
                }).call(o, (function() {
                    return this
                })())
            }, function(d, o) {
                function u(T) {
                    var a = void 0,
                        l = void 0;
                    for (a = 0; a < T.length; a += 1)
                        if (l = T[a], l.dataset && l.dataset.aos || l.children && u(l.children)) return !0;
                    return !1
                }

                function i() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                }

                function g() {
                    return !!i()
                }

                function E(T, a) {
                    var l = window.document,
                        x = i(),
                        m = new x(P);
                    f = a, m.observe(l.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
                }

                function P(T) {
                    T && T.forEach(function(a) {
                        var l = Array.prototype.slice.call(a.addedNodes),
                            x = Array.prototype.slice.call(a.removedNodes),
                            m = l.concat(x);
                        if (u(m)) return f()
                    })
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var f = function() {};
                o.default = {
                    isSupported: g,
                    ready: E
                }
            }, function(d, o) {
                function u(l, x) {
                    if (!(l instanceof x)) throw new TypeError("Cannot call a class as a function")
                }

                function i() {
                    return navigator.userAgent || navigator.vendor || window.opera || ""
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var g = (function() {
                        function l(x, m) {
                            for (var S = 0; S < m.length; S++) {
                                var R = m[S];
                                R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(x, R.key, R)
                            }
                        }
                        return function(x, m, S) {
                            return m && l(x.prototype, m), S && l(x, S), x
                        }
                    })(),
                    E = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    P = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    f = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    T = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    a = (function() {
                        function l() {
                            u(this, l)
                        }
                        return g(l, [{
                            key: "phone",
                            value: function() {
                                var x = i();
                                return !(!E.test(x) && !P.test(x.substr(0, 4)))
                            }
                        }, {
                            key: "mobile",
                            value: function() {
                                var x = i();
                                return !(!f.test(x) && !T.test(x.substr(0, 4)))
                            }
                        }, {
                            key: "tablet",
                            value: function() {
                                return this.mobile() && !this.phone()
                            }
                        }]), l
                    })();
                o.default = new a
            }, function(d, o) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var u = function(g, E, P) {
                        var f = g.node.getAttribute("data-aos-once");
                        E > g.position ? g.node.classList.add("aos-animate") : typeof f < "u" && (f === "false" || !P && f !== "true") && g.node.classList.remove("aos-animate")
                    },
                    i = function(g, E) {
                        var P = window.pageYOffset,
                            f = window.innerHeight;
                        g.forEach(function(T, a) {
                            u(T, f + P, E)
                        })
                    };
                o.default = i
            }, function(d, o, u) {
                function i(f) {
                    return f && f.__esModule ? f : {
                        default: f
                    }
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var g = u(12),
                    E = i(g),
                    P = function(f, T) {
                        return f.forEach(function(a, l) {
                            a.node.classList.add("aos-init"), a.position = (0, E.default)(a.node, T.offset)
                        }), f
                    };
                o.default = P
            }, function(d, o, u) {
                function i(f) {
                    return f && f.__esModule ? f : {
                        default: f
                    }
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var g = u(13),
                    E = i(g),
                    P = function(f, T) {
                        var a = 0,
                            l = 0,
                            x = window.innerHeight,
                            m = {
                                offset: f.getAttribute("data-aos-offset"),
                                anchor: f.getAttribute("data-aos-anchor"),
                                anchorPlacement: f.getAttribute("data-aos-anchor-placement")
                            };
                        switch (m.offset && !isNaN(m.offset) && (l = parseInt(m.offset)), m.anchor && document.querySelectorAll(m.anchor) && (f = document.querySelectorAll(m.anchor)[0]), a = (0, E.default)(f).top, m.anchorPlacement) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                a += f.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                a += f.offsetHeight;
                                break;
                            case "top-center":
                                a += x / 2;
                                break;
                            case "bottom-center":
                                a += x / 2 + f.offsetHeight;
                                break;
                            case "center-center":
                                a += x / 2 + f.offsetHeight / 2;
                                break;
                            case "top-top":
                                a += x;
                                break;
                            case "bottom-top":
                                a += f.offsetHeight + x;
                                break;
                            case "center-top":
                                a += f.offsetHeight / 2 + x
                        }
                        return m.anchorPlacement || m.offset || isNaN(T) || (l = T), a + l
                    };
                o.default = P
            }, function(d, o) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var u = function(i) {
                    for (var g = 0, E = 0; i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop);) g += i.offsetLeft - (i.tagName != "BODY" ? i.scrollLeft : 0), E += i.offsetTop - (i.tagName != "BODY" ? i.scrollTop : 0), i = i.offsetParent;
                    return {
                        top: E,
                        left: g
                    }
                };
                o.default = u
            }, function(d, o) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var u = function(i) {
                    return i = i || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(i, function(g) {
                        return {
                            node: g
                        }
                    })
                };
                o.default = u
            }])
        })
    })(qe)), qe.exports
}
var lt = ut();
const ft = rt(lt);
ke.registerPlugin(tt, Ee);
const ht = () => {
    et.useEffect(() => {
        ft.init(), Ee.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: !0
        }), window.innerWidth >= 1400 && (b(), d(), k()), window.scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }, []);
    const k = () => {
            const o = document.getElementById("followSection");
            if (o) {
                const u = o.querySelector(".cursor-dot");
                o.addEventListener("mousemove", i => {
                    const g = o.getBoundingClientRect(),
                        E = i.clientX - g.left,
                        P = i.clientY - g.top;
                    ke.to(u, {
                        x: E,
                        y: P,
                        duration: .2,
                        ease: "power2.out"
                    })
                }), o.addEventListener("mouseleave", () => {
                    ke.to(u, {
                        opacity: 0
                    })
                }), o.addEventListener("mouseenter", () => {
                    ke.to(u, {
                        opacity: 1
                    })
                })
            }
        },
        b = () => {
            ke.from(".how-business-section", {
                scale: .9,
                y: -100,
                scrollTrigger: {
                    trigger: ".wonderpay-for",
                    start: "center bottom",
                    end: "bottom top",
                    scrub: 2
                }
            })
        },
        d = () => {
            ke.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom top",
                    scrub: 2
                }
            }).to(".moving-card-1", {
                x: 10,
                y: 500,
                scale: .9,
                rotate: 90,
                duration: 1
            }).to(".moving-card-1", {
                x: 10,
                y: 300,
                scale: 1,
                rotate: 180,
                duration: 1
            }).to(".moving-card-1", {
                x: -10,
                y: 100,
                scale: .8,
                duration: 1
            }).to(".moving-card-1", {
                x: -10,
                y: 300,
                scale: 0,
                duration: 1
            }).to(".moving-card-1", {
                x: -10,
                y: 0,
                scale: 1,
                duration: 1
            }).to(".moving-card-1", {
                x: -10,
                y: 400,
                scale: 0,
                duration: 1
            }), ke.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom top",
                    scrub: 2
                }
            }).to(".moving-card-2", {
                x: -10,
                y: -500,
                scale: 1,
                rotate: 90,
                duration: 1
            }).to(".moving-card-2", {
                x: 10,
                y: -200,
                scale: .8,
                rotate: 180,
                duration: 1
            }).to(".moving-card-2", {
                x: -10,
                y: 100,
                scale: .8,
                duration: 1
            }).to(".moving-card-2", {
                x: -10,
                y: 300,
                scale: 0,
                duration: 1
            }).to(".moving-card-2", {
                x: -10,
                y: 0,
                scale: 1,
                duration: 1
            }).to(".moving-card-2", {
                x: -10,
                y: 400,
                scale: 0,
                duration: 1
            }), ke.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom top",
                    scrub: 2
                }
            }).to(".moving-card-3", {
                x: -10,
                y: -500,
                scale: .6,
                rotate: 90,
                duration: 1
            }).to(".moving-card-3", {
                x: 10,
                y: -200,
                scale: .9,
                rotate: 180,
                duration: 1
            }).to(".moving-card-3", {
                x: -10,
                y: -400,
                scale: .8,
                duration: 1
            }).to(".moving-card-3", {
                x: -10,
                y: -800,
                scale: 0,
                duration: 1
            }).to(".moving-card-3", {
                x: -10,
                y: 0,
                scale: 1,
                duration: 1
            }).to(".moving-card-3", {
                x: -10,
                y: 400,
                scale: 0,
                duration: 1
            })
        };
    return null
};
export {
    ht as G, Ee as S
};