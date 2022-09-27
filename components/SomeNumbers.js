import React from "react";

import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans2 = (x, y) => `translateX(60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans3 = (x, y) => `translateX(-60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const box = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;

export default function SomeNumbers() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="numbers position-relative wow fadeInUp" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4} className="wow fadeInUp text-center">
                            <img src="/images/numbers-billy.png" loading="lazy" className="numbers__image" alt="" />
                        </Col>
                        <Col lg={7} className="">
                            <h2 className="heading wow fadeInUp mb-5">
                                Let's look at some <span>numbers</span>
                            </h2>
                            <Row>
                                <Col md={6}>
                                    <div className="d-flex align-items-center numbers-box wow fadeInUp ">
                                        <img src="/images/chat.svg" width="50" className="" loading="lazy" alt="" />
                                        <div className="ps-4">
                                            <p className="m-0 mb-1">We’ve spoken to</p>
                                            <h4 className="text-warning m-0 mb-1 fw-bold">9,000 People</h4>
                                            <p className="m-0">about their debt this year</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex align-items-center numbers-box wow fadeInUp ">
                                        <img src="/images/credit-card-payment.svg" width="50" loading="lazy" className="" alt="" />
                                        <div className="ps-4">
                                            <p className="m-0 mb-1">We can help with over</p>
                                            <h4 className="text-warning m-0 mb-1 fw-bold">260 Creditors</h4>
                                            <p className="m-0">and lenders in the UK</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex align-items-center numbers-box wow fadeInUp ">
                                        <img src="/images/percentage.svg" width="50" loading="lazy" className="" alt="" />
                                        <div className="ps-4">
                                            <p className="m-0 my-3 pt-1">We can reduce a percentage of your unaffordable debt.</p>
                                            {/* <h4 className="text-warning m-0 mb-1 fw-bold">Up to 90%</h4> */}
                                            {/* <p className="m-0">for many people</p> */}
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex align-items-center numbers-box wow fadeInUp ">
                                        <img src="/images/padlock.svg" width="50" loading="lazy" className="" alt="" />
                                        <div className="ps-4">
                                            <p className="m-0 mb-1">We are recognized as a top</p>
                                            <h4 className="text-warning m-0 mb-1 fw-bold">5% Debt Advisor</h4>
                                            <p className="m-0">By SafeBuy</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>{" "}
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="circle" style={{ transform: props.xy.interpolate(trans2) }} />
                    <animated.div className="circle circle--2" style={{ transform: props.xy.interpolate(trans3) }} />
                    <animated.div className="box" style={{ transform: props.xy.interpolate(box) }} />
                </div>
            </div>
            <Container>
                <Row className="justify-content-center mb-lg-5">
                    <Col lg={10}>
                        <div className="begin wow fadeInUp mt-0 mb-5">
                            <h2 className="heading text-white wow fadeInUp mb-4">Got 30 seconds?</h2>
                            <p className="lead mb-4 wow text-white  fadeInUp">That’s all it takes to find out if we can help!</p>
                            <Button variant="warning" className="custom-btn  apply-btn wow fadeInUp" href="/solution-finder">
                                Apply now
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
