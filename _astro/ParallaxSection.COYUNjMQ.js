import {
    j as a
} from "./jsx-runtime.D_zvdyIk.js";
import {
    r as e
} from "./index.RH_Wq4ov.js";
import {
    g as t
} from "./index.DKtf60Sy.js";
import {
    S as i
} from "./ScrollTrigger.BWsqEc1I.js";
t.registerPlugin(i);
const m = () => {
    const s = e.useRef(null);
    return e.useEffect(() => {
        t.timeline({
            scrollTrigger: {
                trigger: s.current,
                start: "center center",
                end: "bottom top",
                scrub: 2
            }
        }).to(".top-left-2", {
            x: -10,
            y: 100,
            duration: 1
        }, "-=0.1").to(".top-left-1", {
            x: -200,
            duration: 1
        }, 0).to(".top-right-1", {
            x: 150,
            opacity: 0,
            duration: 1
        }, 0).to(".top-right-2", {
            x: 150,
            opacity: 0,
            duration: 1
        }, 0).to(".wallet-img", {
            x: -150,
            y: -100,
            opacity: 1,
            duration: 1
        }, 0).to(".qr-img", {
            x: -200,
            duration: 1
        }, 0).to(".money-img", {
            x: 100,
            y: -200,
            scale: 1.2,
            opacity: 0,
            duration: 1
        }, 0).to(".laptop-img", {
            x: 250,
            opacity: .9,
            duration: 1
        }, 0).to(".payment-text", {
            x: -10,
            y: -100,
            opacity: .8,
            duration: 1
        }, 0)
    }, []), a.jsxs("div", {
        className: "wonderpay-for position-relative d-none d-xxl-block",
        ref: s,
        children: [a.jsx("div", {
            className: "section-head-container",
            children: a.jsxs("h2", {
                className: "section-head display-4 text-center",
                children: [" Endorse Your Business ", a.jsx("br", {}), a.jsx("span", {
                    children: "Reach with Our Embedded"
                }), " ", a.jsx("br", {}), " and  Integrated Payments Tool"]
            })
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/top-left-2.svg",
            alt: "Image 2",
            className: "parallax-img top-left-2",
            loading: "lazy",
            decoding: "async"
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/top-right-2.svg",
            alt: "Image 3",
            className: "parallax-img top-right-2",
            loading: "lazy",
            decoding: "async"
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/top-right-1.svg",
            alt: "Image 4",
            className: "parallax-img top-right-1",
            loading: "lazy",
            decoding: "async"
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/wallet-img.svg",
            alt: "Image 5",
            className: "parallax-img wallet-img",
            loading: "lazy",
            decoding: "async"
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/qr-img.svg",
            alt: "Image 6",
            className: "parallax-img qr-img",
            loading: "lazy",
            decoding: "async"
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/laptop-img.svg",
            alt: "Image 7",
            className: "parallax-img laptop-img",
            loading: "lazy",
            decoding: "async"
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/money-img.svg",
            alt: "Image 8",
            className: "parallax-img money-img",
            loading: "lazy",
            decoding: "async"
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/paymnet-text.svg",
            alt: "Image 9",
            className: "parallax-img payment-text",
            loading: "lazy",
            decoding: "async"
        }), a.jsx("img", {
            src: "/assets/website-assets/home-page/section-5/top-left-1.svg",
            alt: "Image 1",
            className: "parallax-img top-left-1",
            loading: "lazy",
            decoding: "async"
        })]
    })
};
export {
    m as
    default
};