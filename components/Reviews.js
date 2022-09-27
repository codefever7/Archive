import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans4 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans6 = (x, y) => `rotate(-35deg)  translate3d(${x / 20}px,${y / 20}px,0)`;

export default function Reviews() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="reviews position-relative" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <h2 className="heading text-center mb-5 wow fadeInUp">
                        See our <span>reviews</span>
                    </h2>
                    <Slider {...settings}>
                        <div className="review-card ">
                            <div className="d-flex mb-4 align-items-center">
                                <img src="/images/trust-user.png" alt="" />
                                <div className="ps-3 w-100">
                                    <p className="mb-0 fw-bold">Scott Lewis</p>
                                </div>
                                <img src="/images/trustpilot.svg" className="d-md-block d-none" alt="" />
                            </div>
                            <p className="mb-0 font-monospace">
                                Excellent company to work with, will help you every turn and make you at ease. The stress off my mind is unreal. Thanks will recommend in a heart beat
                            </p>
                            <img src="/images/trustpilot.svg" className="d-md-none mt-3" alt="" />
                        </div>
                        <div className="review-card ">
                            <div className="d-flex mb-4 align-items-center">
                                <img src="/images/review-user.png" alt="" />
                                <div className="ps-3 w-100">
                                    <p className="mb-0 fw-bold">Christina</p>
                                </div>
                                <img src="/images/trustpilot.svg" className="d-md-block d-none" alt="" />
                            </div>
                            <p className="mb-0 font-monospace">
                                After getting myself in a pickle I came across this site absolutely fantastic guys Anthony has been amazing always answered my calls when I’ve been so ...
                            </p>
                            <img src="/images/trustpilot.svg" className="d-md-none mt-3" alt="" />
                        </div>
                        <div className="review-card ">
                            <div className="d-flex mb-4 align-items-center">
                                <img src="/images/review-user.png" alt="" />
                                <div className="ps-3 w-100">
                                    <p className="mb-0 fw-bold">Dan</p>
                                </div>
                                <img src="/images/trustpilot.svg" className="d-md-block d-none" alt="" />
                            </div>
                            <p className="mb-0 font-monospace">
                                I had fantastic help from the guys at Giraffe money. I really was in a bad situation but Anthony listened and came up with a solution. I honestly...
                            </p>
                            <img src="/images/trustpilot.svg" className="d-md-none mt-3" alt="" />
                        </div>
                        <div className="review-card ">
                            <div className="d-flex mb-4  align-items-center">
                                <img src="/images/review-user.png" alt="" />
                                <div className="ps-3 w-100">
                                    <p className="mb-0 fw-bold">Connor</p>
                                </div>
                                <img src="/images/trustpilot.svg" className="d-md-block d-none" alt="" />
                            </div>
                            <p className="mb-0 font-monospace">
                                Absolutely fantastic company and the staff are some of the best I’ve seen. Throughout this stressful ordeal, they has always been there to assure me ...
                            </p>
                            <img src="/images/trustpilot.svg" className="d-md-none mt-3" alt="" />
                        </div>
                        <div className="review-card ">
                            <div className="d-flex mb-4  align-items-center">
                                <img src="/images/review-user.png" alt="" />
                                <div className="ps-3 w-100">
                                    <p className="mb-0 fw-bold">Mrs Lisa Bartlett</p>
                                </div>
                                <img src="/images/trustpilot.svg" className="d-md-block d-none" alt="" />
                            </div>
                            <p className="mb-0 font-monospace">
                                Anthony and Darren were so professional and kind from the beginning. Their guidance and help made the process as simple as it could be. Thank you so....
                            </p>
                        </div>
                    </Slider>
                    <div className="text-center mb-4 mt-3">
                        <Button variant="warning" className="custom-btn" href="https://uk.trustpilot.com/review/giraffe.money" target="_blank">
                            Read all reviews
                        </Button>
                    </div>
                </Container>
                <div className="backgrounds">
                    <animated.div className="line" style={{ transform: props.xy.interpolate(trans6) }} />
                    <animated.div className="ball" style={{ transform: props.xy.interpolate(trans4) }} />
                    <animated.div className="ring" style={{ transform: props.xy.interpolate(trans4) }} />
                </div>
            </div>
        </>
    );
}
