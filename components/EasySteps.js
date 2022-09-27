import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans6 = (x, y) => `rotate(-35deg)  translate3d(${x / 20}px,${y / 20}px,0)`;
const trans7 = (x, y) => `rotate(-35deg)  translate3d(${x / 12}px,${y / 12}px,0)`;

export default function EasySteps() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="easy-steps position-relative" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <h2 className="heading text-center wow fadeInUp mb-5">
                        Get started in <span>3 easy steps</span>
                    </h2>
                    <Row className="justify-content-between g-0 text-center">
                        <Col lg="auto">
                            <div className="easy-step wow fadeInUp">
                                <img src="/images/contact-billy.png" loading="lazy" alt="" />
                            </div>
                            <h4 className="fw-bold mt-3 text-dark font-monospace mt-3 wow fadeInUp">Contact Us</h4>
                        </Col>
                        <Col>
                            <img src="/images/steps-connector.svg" className="w-100 mt-5 d-lg-block d-none" alt="" />
                        </Col>
                        <Col lg="auto">
                            <div className="easy-step wow fadeInUp">
                                <img src="/images/billy-cc.png" loading="lazy" alt="" />
                            </div>
                            <h4 className="fw-bold mt-3 text-dark font-monospace mt-3 wow fadeInUp">
                                Tell us about <br />
                                your situation
                            </h4>
                        </Col>
                        <Col>
                            <img src="/images/steps-connector1.svg" loading="lazy" className="w-100 mt-5 pt-5 d-lg-block d-none" alt="" />
                        </Col>
                        <Col lg="auto">
                            <div className="easy-step wow fadeInUp">
                                <img src="/images/billy-option.png" loading="lazy" alt="" />
                            </div>
                            <h4 className="fw-bold mt-3 text-dark font-monospace mt-3 wow fadeInUp">
                                We will give you <br /> your options
                            </h4>
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="line" style={{ transform: props.xy.interpolate(trans6) }} />
                    <animated.div className="line line--2" style={{ transform: props.xy.interpolate(trans7) }} />
                </div>
            </div>
        </>
    );
}
7;
