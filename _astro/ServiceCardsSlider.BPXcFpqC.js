import {
    j as e
} from "./jsx-runtime.D_zvdyIk.js";
import {
    r as l
} from "./index.RH_Wq4ov.js";
import {
    y as u
} from "./keen-slider.min.CWCecm8h.js";
const f = () => {
    const c = l.useRef(null),
        a = l.useRef(null),
        d = [{
            title: "Convenient Banking",
            desc: "WPay enables businesses to accept payments from all channels, making it convenient for customers to pay in the way they prefer.",
            darkIcon: "/assets/website-assets/home-page/section-7/bank-dark.svg",
            whiteIcon: "/assets/website-assets/home-page/section-7/bank-white.svg"
        }, {
            title: "Compliant",
            desc: "We are compliant with all PCI DSS and RBI guidelines to protect end-user data and ensure the security of each transaction.",
            darkIcon: "/assets/website-assets/home-page/section-7/complaint-white.svg",
            whiteIcon: "/assets/website-assets/home-page/section-7/compalint-dark.svg"
        }, {
            title: "Comprehensive",
            desc: "Wonderpay makes you productive with easy reconciliation, an experience-driven UI/UX, and secure pay-in/payout.",
            darkIcon: "/assets/website-assets/home-page/section-7/bank-dark.svg",
            whiteIcon: "/assets/website-assets/home-page/section-7/bank-white.svg"
        }];
    return l.useEffect(() => {
        if (c.current) {
            const o = d.length - 1;
            a.current = new u(c.current, {
                loop: !0,
                breakpoints: {
                    "(min-width: 400px)": {
                        slides: {
                            perView: 1,
                            spacing: 5
                        }
                    },
                    "(min-width: 992px)": {
                        slides: {
                            perView: 3,
                            spacing: 20
                        }
                    }
                },
                slides: {
                    perView: 1
                }
            }, [s => {
                let t, n = !1;

                function m() {
                    clearTimeout(t)
                }

                function r() {
                    clearTimeout(t), !n && (t = setTimeout(() => {
                        s.next()
                    }, 1e3))
                }
                s.on("created", () => {
                    s.container.addEventListener("mouseover", () => {
                        n = !0, m()
                    }), s.container.addEventListener("mouseout", () => {
                        n = !1, r()
                    }), r()
                }), s.on("dragStarted", m), s.on("animationEnded", r), s.on("updated", r)
            }]), a.current.on("slideChanged", () => {
                const s = a.current.slides,
                    t = a.current.track.details.rel;
                for (let n = 0; n < s.length; n++) s[n].classList.remove("active", "active_new", "costome-text-left", "first-from-last");
                t === 2 && (s[0] ? .classList.add("active_new"), s[2] ? .classList.add("costome-text-left")), t === o && s[t] ? .classList.add("first-from-last"), s[t] ? .classList.add("active")
            })
        }
        return () => {
            a.current && a.current.destroy()
        }
    }, []), e.jsx("section", {
        className: "pt-5 scrolling-services-section",
        children: e.jsx("div", {
            className: "container",
            children: e.jsxs("div", {
                className: "row",
                children: [e.jsx("div", {
                    className: "col-md-12",
                    children: e.jsx("h2", {
                        className: "mb-5 text-center",
                        children: e.jsx("span", {
                            className: "gradient-text",
                            children: "Let Your Customers Experience"
                        })
                    })
                }), e.jsx("div", {
                    className: "service-cards col-12 col-xl-12 px-xl-5",
                    children: e.jsx("div", {
                        ref: c,
                        className: "keen-slider align-items-center",
                        children: d.map((i, o) => e.jsx("div", {
                            className: "keen-slider__slide",
                            children: e.jsx("div", {
                                className: "card border-0 rounded-4",
                                children: e.jsxs("div", {
                                    className: "card-inner",
                                    children: [e.jsxs("div", {
                                        className: "mb-3",
                                        children: [e.jsx("img", {
                                            src: i.darkIcon,
                                            className: "dark",
                                            alt: ""
                                        }), e.jsx("img", {
                                            src: i.whiteIcon,
                                            className: "white",
                                            alt: ""
                                        })]
                                    }), e.jsx("h5", {
                                        className: "fw-semibold",
                                        children: i.title
                                    }), e.jsx("p", {
                                        className: "text-muted small mb-0 smsizetext",
                                        children: i.desc
                                    })]
                                })
                            })
                        }, o))
                    })
                })]
            })
        })
    })
};
export {
    f as
    default
};