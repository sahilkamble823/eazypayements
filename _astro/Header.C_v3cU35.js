import {
    j as s
} from "./jsx-runtime.D_zvdyIk.js";
import {
    r as a
} from "./index.RH_Wq4ov.js";
import {
    g as o
} from "./index.DKtf60Sy.js";
const g = () => {
    const [c, d] = a.useState(!1), [t, m] = a.useState(!1), [n, r] = a.useState(!1), i = a.useRef(null);
    return a.useEffect(() => {
        const e = () => m(window.innerWidth >= 992),
            l = () => {
                i.current && i.current.classList.toggle("nav-bg", window.scrollY > 200)
            };
        return e(), window.addEventListener("resize", e), window.addEventListener("scroll", l), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", l)
        }
    }, []), a.useEffect(() => {
        const e = l => {
            !l.target.closest(".product-dropdown") && !l.target.closest(".dropdown-toggle") && r(!1)
        };
        return document.addEventListener("click", e), () => document.removeEventListener("click", e)
    }, []), a.useEffect(() => {
        o.timeline().from(".navbar, .nav-link, .logo, .nav-btns a", {
            y: -40,
            duration: .7,
            delay: .1,
            opacity: 0,
            stagger: .15
        })
    }, []), s.jsx("div", {
        className: "web-container",
        children: s.jsx("div", {
            className: "scroll1 fixed-top pt-3 px-sm-1 px-3",
            id: "navbarcolor",
            ref: i,
            children: s.jsx("div", {
                className: "position-relative",
                children: s.jsx("nav", {
                    className: "navbar navbar-expand-lg container mt-3 px-3",
                    children: s.jsxs("div", {
                        className: "container-fluid px-1",
                        children: [s.jsxs("div", {
                            className: "d-lg-flex gap-4 align-items-center",
                            children: [s.jsx("a", {
                                href: "/",
                                "data-astro-reload": !0,
                                children: s.jsx("img", {
                                    src: "/assets/website-assets/common-images/logo/logo-black.png",
                                    className: "logo",
                                    alt: "Logo"
                                })
                            }), s.jsx("a", {
                                href: "/",
                                "data-astro-reload": !0,
                                children: s.jsx("img", {
                                    src: "/assets/website-assets/common-images/logo/logo-black.png",
                                    alt: "Logo 2",
                                    id: "logo-2"
                                })
                            })]
                        }), s.jsx("button", {
                            className: "navbar-toggler text-light",
                            type: "button",
                            "aria-expanded": c,
                            onClick: () => d(!c),
                            children: c ? s.jsx("span", {
                                className: "fs-4 text-muted",
                                children: s.jsx("i", {
                                    className: "fa fa-times"
                                })
                            }) : s.jsx("span", {
                                className: "navbar-toggler-icon"
                            })
                        }), s.jsx("div", {
                            id: "navbarSupportedContent",
                            className: `collapse navbar-collapse ${c?"show":""}`,
                            children: s.jsxs("ul", {
                                className: "navbar-nav mx-auto mb-2 mb-lg-0",
                                children: [s.jsx("li", {
                                    className: "nav-item",
                                    children: s.jsx("a", {
                                        className: "nav-link",
                                        href: "/",
                                        "data-astro-reload": !0,
                                        children: "Home"
                                    })
                                }), s.jsxs("li", {
                                    className: "nav-item dropdown nested-dropdown",
                                    children: [s.jsx("a", {
                                        className: "nav-link dropdown-toggle",
                                        href: "#",
                                        onClick: e => {
                                            e.preventDefault(), r(!n)
                                        },
                                        children: "Products"
                                    }), s.jsx("div", {
                                        className: `dropdown-menu px-3 rounded-3 border-0 ${n?"show":""}`,
                                        children: t ? s.jsx("div", {
                                            className: "d-none d-md-block",
                                            children: s.jsxs("div", {
                                                className: "row g-3",
                                                children: [s.jsx("div", {
                                                    className: "col-md-4",
                                                    children: s.jsx("a", {
                                                        href: "/payment-gateway",
                                                        className: "tab-card card p-2 custom-card d-flex align-items-start active mx-0",
                                                        children: s.jsxs("div", {
                                                            className: "d-flex",
                                                            children: [s.jsx("div", {
                                                                className: "icon-circle me-3 active",
                                                                children: s.jsx("img", {
                                                                    src: "/assets/website-assets/common-images/nav/pg.png",
                                                                    alt: "Payment gateway (payin)"
                                                                })
                                                            }), s.jsxs("div", {
                                                                children: [s.jsx("strong", {
                                                                    className: "title",
                                                                    children: "Payment Gateway"
                                                                }), s.jsx("br", {}), s.jsx("p", {
                                                                    children: "Accept all payments via any method with seamless API integration."
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                }), s.jsx("div", {
                                                    className: "col-md-4",
                                                    children: s.jsx("div", {
                                                        className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                        children: s.jsx("a", {
                                                            href: "/fees",
                                                            children: s.jsxs("div", {
                                                                className: "d-flex",
                                                                children: [s.jsx("div", {
                                                                    className: "icon-circle me-3",
                                                                    children: s.jsx("img", {
                                                                        src: "/assets/website-assets/common-images/nav/fees.png",
                                                                        alt: "Fees"
                                                                    })
                                                                }), s.jsxs("div", {
                                                                    children: [s.jsx("strong", {
                                                                        className: "title",
                                                                        children: "Fees"
                                                                    }), s.jsx("br", {}), s.jsx("p", {
                                                                        children: "Collect each fee installment-wise & reconcile in real time."
                                                                    })]
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }), s.jsx("div", {
                                                    className: "col-md-4",
                                                    children: s.jsx("div", {
                                                        className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                        children: s.jsx("a", {
                                                            href: "/payout",
                                                            children: s.jsxs("div", {
                                                                className: "d-flex",
                                                                children: [s.jsx("div", {
                                                                    className: "icon-circle me-3",
                                                                    children: s.jsx("img", {
                                                                        src: "/assets/website-assets/common-images/nav/payout.png",
                                                                        alt: "Payout"
                                                                    })
                                                                }), s.jsxs("div", {
                                                                    children: [s.jsx("strong", {
                                                                        className: "title",
                                                                        children: "Payout"
                                                                    }), s.jsx("br", {}), s.jsx("p", {
                                                                        children: "Schedule auto payouts to anyone for any purpose at any time."
                                                                    })]
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }), s.jsx("div", {
                                                    className: "col-md-4",
                                                    children: s.jsx("div", {
                                                        className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                        children: s.jsx("a", {
                                                            href: "/pos",
                                                            children: s.jsxs("div", {
                                                                className: "d-flex",
                                                                children: [s.jsx("div", {
                                                                    className: "icon-circle me-3",
                                                                    children: s.jsx("img", {
                                                                        src: "/assets/website-assets/common-images/nav/pos.png",
                                                                        alt: "POS"
                                                                    })
                                                                }), s.jsxs("div", {
                                                                    children: [s.jsx("strong", {
                                                                        className: "title",
                                                                        children: "POS"
                                                                    }), s.jsx("br", {}), s.jsx("p", {
                                                                        children: "Accept all in-person payments from all digital methods effortlessly."
                                                                    })]
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }), s.jsx("div", {
                                                    className: "col-md-4",
                                                    children: s.jsx("div", {
                                                        className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                        children: s.jsx("a", {
                                                            href: "/smart-billing",
                                                            children: s.jsxs("div", {
                                                                className: "d-flex",
                                                                children: [s.jsx("div", {
                                                                    className: "icon-circle me-3",
                                                                    children: s.jsx("img", {
                                                                        src: "/assets/website-assets/common-images/nav/sb.png",
                                                                        alt: "Smart billing"
                                                                    })
                                                                }), s.jsxs("div", {
                                                                    children: [s.jsx("strong", {
                                                                        className: "title",
                                                                        children: "Smart Billing"
                                                                    }), s.jsx("br", {}), s.jsx("p", {
                                                                        children: "GST-compliant invoices, auto recurring collections, with E-nach."
                                                                    })]
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }), s.jsx("div", {
                                                    className: "col-md-4",
                                                    children: s.jsx("div", {
                                                        className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                        children: s.jsx("a", {
                                                            href: "/teller",
                                                            children: s.jsxs("div", {
                                                                className: "d-flex",
                                                                children: [s.jsx("div", {
                                                                    className: "icon-circle me-3",
                                                                    children: s.jsx("img", {
                                                                        src: "/assets/website-assets/common-images/nav/teler.png",
                                                                        alt: "Teller"
                                                                    })
                                                                }), s.jsxs("div", {
                                                                    children: [s.jsx("strong", {
                                                                        className: "title",
                                                                        children: "Teller"
                                                                    }), s.jsx("br", {}), s.jsx("p", {
                                                                        children: "Create invoice, collect payments, reconcile & manage working capital via TReDs."
                                                                    })]
                                                                })]
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        }) : s.jsx("div", {
                                            className: "accordion accordion-flush",
                                            id: "mobileAccordion",
                                            children: s.jsx("div", {
                                                className: "accordion-item mb-3",
                                                children: s.jsx("div", {
                                                    className: "accordion-collapse collapse show",
                                                    "data-bs-parent": "#mobileAccordion",
                                                    children: s.jsx("div", {
                                                        className: "accordion-body",
                                                        children: s.jsxs("div", {
                                                            className: "row g-3",
                                                            children: [s.jsx("div", {
                                                                className: "col-lg-6 col-md-12",
                                                                children: s.jsx("div", {
                                                                    className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                                    children: s.jsx("a", {
                                                                        href: "/payment-gateway",
                                                                        children: s.jsxs("div", {
                                                                            className: "d-flex",
                                                                            children: [s.jsx("div", {
                                                                                className: "icon-circle me-3 active",
                                                                                children: s.jsx("img", {
                                                                                    src: "/assets/website-assets/common-images/nav/pg.png",
                                                                                    alt: "Payment gateway (payin)"
                                                                                })
                                                                            }), s.jsxs("div", {
                                                                                children: [s.jsx("strong", {
                                                                                    className: "title",
                                                                                    children: "Payment gateway (payin)"
                                                                                }), s.jsx("br", {}), s.jsx("small", {
                                                                                    children: "Managing your Account Made Simple"
                                                                                })]
                                                                            })]
                                                                        })
                                                                    })
                                                                })
                                                            }), s.jsx("div", {
                                                                className: "col-lg-6 col-md-12",
                                                                children: s.jsx("div", {
                                                                    className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                                    children: s.jsx("a", {
                                                                        href: "/fees",
                                                                        children: s.jsxs("div", {
                                                                            className: "d-flex",
                                                                            children: [s.jsx("div", {
                                                                                className: "icon-circle me-3",
                                                                                children: s.jsx("img", {
                                                                                    src: "/assets/website-assets/common-images/nav/fees.png",
                                                                                    alt: "Fees"
                                                                                })
                                                                            }), s.jsxs("div", {
                                                                                children: [s.jsx("strong", {
                                                                                    className: "title",
                                                                                    children: "Fees"
                                                                                }), s.jsx("br", {}), s.jsx("small", {
                                                                                    children: "Managing your Account Made Simple"
                                                                                })]
                                                                            })]
                                                                        })
                                                                    })
                                                                })
                                                            }), s.jsx("div", {
                                                                className: "col-lg-6 col-md-12",
                                                                children: s.jsx("div", {
                                                                    className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                                    children: s.jsx("a", {
                                                                        href: "/payout",
                                                                        children: s.jsxs("div", {
                                                                            className: "d-flex",
                                                                            children: [s.jsx("div", {
                                                                                className: "icon-circle me-3",
                                                                                children: s.jsx("img", {
                                                                                    src: "/assets/website-assets/common-images/nav/payout.png",
                                                                                    alt: "Payout"
                                                                                })
                                                                            }), s.jsxs("div", {
                                                                                children: [s.jsx("strong", {
                                                                                    className: "title",
                                                                                    children: "Payout"
                                                                                }), s.jsx("br", {}), s.jsx("small", {
                                                                                    children: "Managing your Account Made Simple"
                                                                                })]
                                                                            })]
                                                                        })
                                                                    })
                                                                })
                                                            }), s.jsx("div", {
                                                                className: "col-lg-6 col-md-12",
                                                                children: s.jsx("div", {
                                                                    className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                                    children: s.jsx("a", {
                                                                        href: "/pos",
                                                                        children: s.jsxs("div", {
                                                                            className: "d-flex",
                                                                            children: [s.jsx("div", {
                                                                                className: "icon-circle me-3",
                                                                                children: s.jsx("img", {
                                                                                    src: "/assets/website-assets/common-images/nav/pos.png",
                                                                                    alt: "POS"
                                                                                })
                                                                            }), s.jsxs("div", {
                                                                                children: [s.jsx("strong", {
                                                                                    className: "title",
                                                                                    children: "POS"
                                                                                }), s.jsx("br", {}), s.jsx("small", {
                                                                                    children: "Managing your Account Made Simple"
                                                                                })]
                                                                            })]
                                                                        })
                                                                    })
                                                                })
                                                            }), s.jsx("div", {
                                                                className: "col-lg-6 col-md-12",
                                                                children: s.jsx("div", {
                                                                    className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                                    children: s.jsx("a", {
                                                                        href: "/smart-billing",
                                                                        children: s.jsxs("div", {
                                                                            className: "d-flex",
                                                                            children: [s.jsx("div", {
                                                                                className: "icon-circle me-3",
                                                                                children: s.jsx("img", {
                                                                                    src: "/assets/website-assets/common-images/nav/sb.png",
                                                                                    alt: "Smart billing"
                                                                                })
                                                                            }), s.jsxs("div", {
                                                                                children: [s.jsx("strong", {
                                                                                    className: "title",
                                                                                    children: "Smart billing"
                                                                                }), s.jsx("br", {}), s.jsx("small", {
                                                                                    children: "Managing your Account Made Simple"
                                                                                })]
                                                                            })]
                                                                        })
                                                                    })
                                                                })
                                                            }), s.jsx("div", {
                                                                className: "col-lg-6 col-md-12",
                                                                children: s.jsx("div", {
                                                                    className: "tab-card card p-2 custom-card d-flex align-items-start",
                                                                    children: s.jsx("a", {
                                                                        href: "/teller",
                                                                        children: s.jsxs("div", {
                                                                            className: "d-flex",
                                                                            children: [s.jsx("div", {
                                                                                className: "icon-circle me-3",
                                                                                children: s.jsx("img", {
                                                                                    src: "/assets/website-assets/common-images/nav/teler.png",
                                                                                    alt: "Teller"
                                                                                })
                                                                            }), s.jsxs("div", {
                                                                                children: [s.jsx("strong", {
                                                                                    className: "title",
                                                                                    children: "Teller"
                                                                                }), s.jsx("br", {}), s.jsx("small", {
                                                                                    children: "Managing your Account Made Simple"
                                                                                })]
                                                                            })]
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                }), s.jsx("li", {
                                    className: "nav-item",
                                    children: s.jsx("a", {
                                        className: "nav-link",
                                        href: "/pricing",
                                        children: "Pricing"
                                    })
                                }), s.jsx("li", {
                                    className: "nav-item",
                                    children: s.jsx("a", {
                                        className: "nav-link",
                                        href: "/services",
                                        children: "Services"
                                    })
                                }), s.jsx("li", {
                                    className: "nav-item",
                                    children: s.jsx("a", {
                                        className: "nav-link",
                                        href: "/about-us",
                                        children: "About Us"
                                    })
                                }), s.jsx("li", {
                                    className: "nav-item",
                                    children: s.jsx("a", {
                                        className: "nav-link",
                                        href: "/contact-us",
                                        children: "Contact"
                                    })
                                })]
                            })
                        }), s.jsx("div", {
                            className: "nav-btns d-none d-lg-block",
                            children: s.jsxs("a", {
                                className: "btn btn-primary text-light",
                                href: "https://merchant.wonderpaytec.com/merchant/auth/login",
                                children: ["Login ", s.jsx("i", {
                                    className: "fas fa-arrow-right ms-2"
                                })]
                            })
                        })]
                    })
                })
            })
        })
    })
};
export {
    g as
    default
};