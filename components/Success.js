import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans4 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans6 = (x, y) => `rotate(-35deg)  translate3d(${x / 20}px,${y / 20}px,0)`;
const trans7 = (x, y) => `rotate(-35deg)  translate3d(${x / 12}px,${y / 12}px,0)`;
const trans3 = (x, y) => `rotate(-90deg)  translate3d(${x / 12}px,${y / 12}px,0)`;
function drawDahs(e, old, end) {
    e = document.getElementById(e);
    clearInterval(anim);
    e.setAttribute("stroke-dasharray", "0,100");
    let newpm = (end * 100) / old;
    let animval = 0;
    var anim = setInterval(() => {
        if (newpm == animval || newpm < animval) {
            clearInterval(anim);
        }
        animval = animval + 0.5;
        e.setAttribute("stroke-dasharray", "" + animval + ",100");
    }, 20);
}
export default function Success() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
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
                    autoplaySpeed: 3000,
                    dots: true,
                },
            },
        ],
    };
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="success position-relative" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="justify-content-center wow fadeInUp">
                        <Col lg={10} className="">
                            <div className="begin">
                                <h2 className="heading text-white wow fadeInUp"> NOT SURE WHERE TO BEGIN?</h2>
                                <p className="lead text-white my-4 wow fadeInUp">No worries, we’ll help you make sense of it all.</p>
                                <Button className="custom-btn wow fadeInUp" variant="warning" href="/solution-finder">
                                    Apply now
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <h2 className="heading text-center mt-5 pt-lg-4 wow fadeInUp">
                        Be part of the <span>success</span>
                    </h2>
                    <p className="small mb-5 text-center">(Here are some hypothetical examples of how an IVA could work)</p>
                    <Slider {...settings}>
                        <div className="story-card wow fadeInUp">
                            <div className="d-flex align-items-center wow fadeInUp">
                                <img src="/images/jenny.png" loading="lazy" />

                                <div className="media-body ps-3">
                                    <h5 className="fw-bold ">Jenny W</h5>
                                    <h6>
                                        <span className="text-danger">£9000</span> in Debt
                                    </h6>
                                </div>
                            </div>
                            <ul className="nav list list--small mt-4 mb-3 wow fadeInUp">
                                <li>Credit cards</li>
                                <li>Loans</li>
                                <li>Council Tax</li>
                            </ul>
                            <h6 className="wow fadeInUp">
                                Old payment{" "}
                                <span className="text-danger">
                                    <CountUp end={556} duration={2.75} prefix="£" redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    pm
                                </span>
                            </h6>
                            <h6 className="font-monospace text-danger fw-bold text-center mt-4 mb-3 wow fadeInUp">NEW PAYMENT</h6>
                            <div className="new-payment">
                                <svg className="circle-chart" viewBox="0 0 34 34" width="155" height="155" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-chart__background" fill="none" cx="17" cy="17" r="17" />
                                    <circle
                                        className="circle-chart__circle"
                                        id="animation1"
                                        stroke="#ffce31"
                                        strokeWidth="1.5"
                                        strokeDasharray="0,100"
                                        strokeLinecap="round"
                                        fill="none"
                                        cx="17"
                                        cy="17"
                                        r="16"
                                    />
                                </svg>
                                <h4 className="mb-0 ">
                                    <CountUp end={107} duration={2.75} prefix="£" redraw={true} onStart={() => drawDahs("animation1", 556, 107)}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h4>
                                <small>Per Month</small>
                            </div>
                        </div>
                        <div className="story-card wow fadeInUp">
                            <div className="d-flex align-items-center wow fadeInUp">
                                <img src="/images/john.png" loading="lazy" />

                                <div className="media-body ps-3">
                                    <h5 className="fw-bold ">John H</h5>
                                    <h6>
                                        <span className="text-danger">£16000</span> in Debt
                                    </h6>
                                </div>
                            </div>
                            <ul className="nav list list--small mt-4 mb-3 wow fadeInUp">
                                <li>Finance</li>
                                <li>Loans</li>
                                <li>Overdrafts</li>
                            </ul>
                            <h6 className="wow fadeInUp">
                                Old payment{" "}
                                <span className="text-danger">
                                    <CountUp end={860} duration={2.75} prefix="£" redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    pm
                                </span>
                            </h6>
                            <h6 className="font-monospace text-danger fw-bold text-center mt-4 mb-3 wow fadeInUp">NEW PAYMENT</h6>
                            <div className="new-payment">
                                <svg className="circle-chart" viewBox="0 0 34 34" width="155" height="155" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-chart__background" fill="none" cx="17" cy="17" r="17" />
                                    <circle
                                        className="circle-chart__circle"
                                        id="animation2"
                                        stroke="#ffce31"
                                        strokeWidth="1.5"
                                        strokeDasharray="0,100"
                                        strokeLinecap="round"
                                        fill="none"
                                        cx="17"
                                        cy="17"
                                        r="16"
                                    />
                                </svg>
                                <h4 className="mb-0 ">
                                    <CountUp end={147} duration={2.75} prefix="£" redraw={true} onStart={() => drawDahs("animation2", 840, 147)}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h4>
                                <small>Per Month</small>
                            </div>
                        </div>
                        <div className="story-card wow fadeInUp">
                            <div className="d-flex align-items-center wow fadeInUp">
                                <img src="/images/cath.png" loading="lazy" />

                                <div className="media-body ps-3">
                                    <h5 className="fw-bold ">Catherine H</h5>
                                    <h6>
                                        <span className="text-danger">£13000</span> in Debt
                                    </h6>
                                </div>
                            </div>
                            <ul className="nav list list--small mt-4 mb-3 wow fadeInUp">
                                <li>HMRC</li>
                                <li>Payday Loans</li>
                                <li>Credit Cards</li>
                            </ul>
                            <h6 className="wow fadeInUp">
                                Old payment{" "}
                                <span className="text-danger">
                                    <CountUp end={760} duration={2.75} prefix="£" redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    pm
                                </span>
                            </h6>
                            <h6 className="font-monospace text-danger fw-bold text-center mt-4 mb-3 wow fadeInUp">NEW PAYMENT</h6>
                            <div className="new-payment">
                                <svg className="circle-chart" viewBox="0 0 34 34" width="155" height="155" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-chart__background" fill="none" cx="17" cy="17" r="17" />
                                    <circle
                                        className="circle-chart__circle"
                                        id="animation3"
                                        stroke="#ffce31"
                                        strokeWidth="1.5"
                                        strokeDasharray="0,100"
                                        strokeLinecap="round"
                                        fill="none"
                                        cx="17"
                                        cy="17"
                                        r="16"
                                    />
                                </svg>
                                <h4 className="mb-0 ">
                                    <CountUp end={123} duration={2.75} prefix="£" redraw={true} onStart={() => drawDahs("animation3", 760, 123)}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h4>
                                <small>Per Month</small>
                            </div>
                        </div>{" "}
                    </Slider>
                </Container>
                <div className="backgrounds">
                    <animated.div className="line" style={{ transform: props.xy.interpolate(trans6) }} />
                    <animated.div className="line line--2" style={{ transform: props.xy.interpolate(trans7) }} />
                    <animated.div className="ball" style={{ transform: props.xy.interpolate(trans4) }} />
                    <animated.div className="ring" style={{ transform: props.xy.interpolate(trans4) }} />
                    <animated.div className="ring ring--2" style={{ transform: props.xy.interpolate(trans3) }} />
                </div>
            </div>
        </>
    );
}
