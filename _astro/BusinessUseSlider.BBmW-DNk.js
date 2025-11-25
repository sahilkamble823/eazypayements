import {
    j as e
} from "./jsx-runtime.D_zvdyIk.js";
import {
    r as l
} from "./index.RH_Wq4ov.js";
import {
    y as o
} from "./keen-slider.min.CWCecm8h.js";
const b = () => {
    const t = l.useRef(null),
        r = l.useRef(null);
    return l.useEffect(() => (t.current && (r.current = new o(t.current, {
        loop: !0,
        breakpoints: {
            "(min-width: 400px)": {
                slides: {
                    perView: 1,
                    spacing: 5
                }
            },
            "(min-width: 768px)": {
                slides: {
                    perView: 2,
                    spacing: 30
                }
            },
            "(min-width: 1000px)": {
                slides: {
                    perView: 2,
                    spacing: 40
                }
            }
        },
        slides: {
            perView: 1
        }
    }, [s => {
        let i, n = !1;

        function c() {
            clearTimeout(i)
        }

        function a() {
            clearTimeout(i), !n && (i = setTimeout(() => {
                s.next()
            }, 1e3))
        }
        s.on("created", () => {
            s.container.addEventListener("mouseover", () => {
                n = !0, c()
            }), s.container.addEventListener("mouseout", () => {
                n = !1, a()
            }), a()
        }), s.on("dragStarted", c), s.on("animationEnded", a), s.on("updated", a)
    }])), () => {
        r.current && r.current.destroy()
    }), []), e.jsx("section", {
        className: "how-business-section",
        children: e.jsx("div", {
            className: "container",
            children: e.jsxs("div", {
                className: "row align-items-center",
                children: [e.jsx("div", {
                    className: "col-xl-5 mb-4 mb-md-0",
                    children: e.jsxs("h2", {
                        className: "text-dark",
                        children: ["A Platform ", e.jsx("br", {}), "for All Businesses from ", e.jsx("span", {
                            className: "gradient-text",
                            children: "Any Industry."
                        })]
                    })
                }), e.jsx("div", {
                    className: "col-xl-7",
                    children: e.jsxs("div", {
                        className: "keen-slider",
                        ref: t,
                        children: [e.jsx("div", {
                            className: "keen-slider__slide number-slide1",
                            children: e.jsxs("div", {
                                className: "card card-glass border-0 text-white p-4 ",
                                style: {
                                    backgroundImage: "url(/assets/website-assets/home-page/section-6/slider-img1.png)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                },
                                children: [e.jsxs("h5", {
                                    className: "text-white mb-3",
                                    children: ["Customize as", e.jsx("br", {}), " You Need "]
                                }), e.jsx("p", {
                                    className: "text-white mb-0 small",
                                    children: "Flexibility that never settles. Customize the platform to meet your business's specific needs & achieve business goals. "
                                })]
                            })
                        }), e.jsx("div", {
                            className: "keen-slider__slide number-slide2",
                            children: e.jsxs("div", {
                                className: "card card-glass-green border-0 text-white p-4",
                                style: {
                                    backgroundImage: "url(/assets/website-assets/home-page/section-6/b2b-ecommerce-payments.svg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                },
                                children: [e.jsxs("h5", {
                                    className: "fw-bold mb-3 text-white",
                                    children: ["B2B Ecommerce ", e.jsx("br", {}), "Payments"]
                                }), e.jsx("p", {
                                    className: "mb-0 small text-white",
                                    children: "Let your B2B ecommerce business accept payments from all instruments, including UPI, Cards, net banking, wallets, BNPL, or EMI."
                                })]
                            })
                        }), e.jsx("div", {
                            className: "keen-slider__slide number-slide3",
                            children: e.jsxs("div", {
                                className: "card card-glass-green border-0 text-white p-4",
                                style: {
                                    backgroundImage: "url(/assets/website-assets/home-page/section-6/slider-img3.png)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                },
                                children: [e.jsxs("h5", {
                                    className: "fw-bold mb-3 text-white",
                                    children: ["Collect Recurring ", e.jsx("br", {}), " Payments "]
                                }), e.jsx("p", {
                                    className: "mb-0 small text-white",
                                    children: "Make your loan and monthly subscription payments simple with auto collection using UPI AutoPay, eNACH, or card mandates. "
                                })]
                            })
                        }), e.jsx("div", {
                            className: "keen-slider__slide number-slide4",
                            children: e.jsxs("div", {
                                className: "card card-glass-green border-0 text-white p-4",
                                style: {
                                    backgroundImage: "url(/assets/website-assets/home-page/section-6/slider-img4.png)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                },
                                children: [e.jsx("h5", {
                                    className: "fw-bold mb-3 text-white",
                                    children: "Easy B2B Payments "
                                }), e.jsx("p", {
                                    className: "mb-0 small text-white",
                                    children: "Eliminate delayed payments with our top solutions, which enable you to create quick invoices, attach a smart payment link, or use a virtual number to reduce late payments & manual follow-ups. Additionally, MSMEs can get working capital via TReDS."
                                })]
                            })
                        }), e.jsx("div", {
                            className: "keen-slider__slide number-slide5",
                            children: e.jsxs("div", {
                                className: "card card-glass-green border-0 text-white p-4",
                                style: {
                                    backgroundImage: "url(/assets/website-assets/home-page/section-6/slider-img5.png)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                },
                                children: [e.jsxs("h5", {
                                    className: "fw-bold mb-3 text-white",
                                    children: ["Affiliate", e.jsx("br", {}), "Programs"]
                                }), e.jsx("p", {
                                    className: "mb-0 small text-white",
                                    children: "Work more effectively and efficiently while making payments simple with our quick disbursement of funds to vendors, freelancers, or partners, using IMPS, NEFT, UPI, and more."
                                })]
                            })
                        }), e.jsx("div", {
                            className: "keen-slider__slide number-slide6",
                            children: e.jsxs("div", {
                                className: "card card-glass-green border-0 text-white p-4",
                                style: {
                                    backgroundImage: "url(/assets/website-assets/home-page/section-6/slider-img6.png)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                },
                                children: [e.jsx("h5", {
                                    className: "fw-bold mb-3 text-white",
                                    children: "Start-Ups "
                                }), e.jsx("p", {
                                    className: "mb-0 small text-white",
                                    children: "Easily accept payments from any method or disburse payments for any purpose, from anywhere."
                                })]
                            })
                        }), e.jsx("div", {
                            className: "keen-slider__slide number-slide7",
                            children: e.jsxs("div", {
                                className: "card card-glass-green border-0 text-white p-4",
                                style: {
                                    backgroundImage: "url(/assets/website-assets/home-page/section-6/marketplaces.svg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                },
                                children: [e.jsx("h5", {
                                    className: "fw-bold mb-3 text-white",
                                    children: "Marketplaces "
                                }), e.jsx("p", {
                                    className: "mb-0 small text-white",
                                    children: "Get payin or payout with seamless integration into your website, app, ERP, or CRM - monitor transactions, view, or analyze payment performance."
                                })]
                            })
                        })]
                    })
                })]
            })
        })
    })
};
export {
    b as
    default
};