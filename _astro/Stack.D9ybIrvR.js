import {
    j as e
} from "./jsx-runtime.D_zvdyIk.js";
import {
    r as l
} from "./index.RH_Wq4ov.js";
import {
    g as i
} from "./index.DKtf60Sy.js";
import {
    S as c
} from "./ScrollTrigger.BWsqEc1I.js";
i.registerPlugin(c);
const h = () => {
    l.useEffect(() => {
        const s = () => {
            c.getAll().forEach(r => r.kill());
            const a = window.innerWidth;
            i.set("#card2", {
                y: 440,
                opacity: 0
            }), i.set("#card3", {
                y: 880,
                opacity: 0
            }), c.create({
                trigger: ".cards-container",
                start: "bottom 78%",
                end: "bottom top",
                pin: !0,
                height: 0,
                scrub: !0,
                pinSpacing: !0,
                invalidateOnRefresh: !0,
                onUpdate: r => {
                    const t = r.progress;
                    if (a > 1400) {
                        if (t >= .25 && t <= .5) {
                            const o = (t - .25) / .25;
                            i.to("#card2", {
                                y: 440 - 440 * o,
                                opacity: o,
                                duration: .3,
                                ease: "power2.out"
                            })
                        } else t > .5 ? i.to("#card2", {
                            y: 0,
                            opacity: 1,
                            duration: .3
                        }) : i.to("#card2", {
                            y: 440,
                            opacity: 0,
                            duration: .3
                        });
                        if (t >= .6 && t <= .85) {
                            const o = (t - .6) / .25;
                            i.to("#card3", {
                                y: 440 - 440 * o,
                                opacity: o,
                                duration: .3,
                                ease: "power2.out"
                            })
                        } else t > .85 ? i.to("#card3", {
                            y: 0,
                            opacity: 1,
                            duration: .3
                        }) : i.to("#card3", {
                            y: 440,
                            opacity: 0,
                            duration: .3
                        })
                    }
                }
            })
        };
        return s(), window.addEventListener("resize", s), () => {
            window.removeEventListener("resize", s), c.getAll().forEach(a => a.kill())
        }
    }, []);
    const n = [{
        id: "card1",
        step: 1,
        title: "Get Registered",
        description: "Fill out all your business details easily, while being backed by strong security.",
        features: ["Quick 2-minute signup", "Email verification", "Secure password creation", "Account activation"],
        icon: "/assets/website-assets/home-page/section-2/registration.gif"
    }, {
        id: "card2",
        step: 2,
        title: "Verify Your KYC",
        description: "Be authenticated. Be Secure. Improve your business cash flow.",
        features: ["Upload identity documents", "Automated verification", "Real-time status updates", "Enhanced security features"],
        icon: "/assets/website-assets/home-page/section-2/KYC.gif"
    }, {
        id: "card3",
        step: 3,
        title: "Integrate API",
        description: "Accept all your payments from any channel with the integration in your app or website.",
        features: ["RESTful API endpoints", "Comprehensive documentation", "SDK libraries available", "24/7 developer support"],
        icon: "/assets/website-assets/home-page/section-2/Pay-in.gif"
    }];
    return e.jsx("section", {
        className: "mb-5",
        children: e.jsxs("div", {
            className: "container",
            children: [e.jsxs("div", {
                className: "row mt-5",
                children: [e.jsx("div", {
                    className: "col-md-6",
                    children: e.jsx("h2", {
                        children: e.jsx("span", {
                            className: "gradient-text",
                            children: "Bring More Out of WPay"
                        })
                    })
                }), e.jsx("div", {
                    className: "col-md-6 align-content-center",
                    children: e.jsx("p", {
                        className: "fs-5",
                        children: "A unified platform to accelerate your business growth. It simplifies and automates payments; leverage Wonderpay’s comprehensive dashboard anytime, anywhere, and bring more out of it."
                    })
                })]
            }), e.jsx("div", {
                className: "cards-container row align-items-center overflow-hidden d-none d-xxl-block",
                children: e.jsx("div", {
                    className: "card-wrapper",
                    children: n.map(s => e.jsx("div", {
                        className: "process-card",
                        id: s.id,
                        children: e.jsxs("div", {
                            className: "card-content",
                            children: [e.jsxs("div", {
                                className: "left-content",
                                children: [e.jsx("div", {
                                    className: "step-number",
                                    children: s.step
                                }), e.jsx("h2", {
                                    className: "step-title",
                                    children: s.title
                                }), e.jsx("p", {
                                    className: "step-description",
                                    children: s.description
                                }), e.jsx("ul", {
                                    className: "step-features",
                                    children: s.features.map((a, r) => e.jsx("li", {
                                        children: a
                                    }, r))
                                })]
                            }), e.jsx("div", {
                                className: "right-gif",
                                children: e.jsxs("div", {
                                    className: "floating-elements",
                                    children: [e.jsx("img", {
                                        style: {
                                            display: "block",
                                            WebkitUserSelect: "none",
                                            margin: "auto",
                                            cursor: "zoom-in",
                                            backgroundColor: "#e6e6e600"
                                        },
                                        src: s.icon,
                                        width: "400",
                                        height: "600"
                                    }), e.jsx("div", {
                                        className: "floating-circle circle-1"
                                    }), e.jsx("div", {
                                        className: "floating-circle circle-2"
                                    }), e.jsx("div", {
                                        className: "floating-circle circle-3"
                                    })]
                                })
                            })]
                        })
                    }, s.id))
                })
            })]
        })
    })
};
export {
    h as
    default
};