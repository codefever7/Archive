import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans4 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;

export default function SeenUs() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="seen-us position-relative" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} className="">
                            <h2 className="heading wow fadeInUp">
                                Where you may have <span>seen us!</span>
                            </h2>
                            <p className="my-4 lead lead--small wow fadeInUp">
                                Giraffe Money are nationally recognised brand that has been at the forefront of providing helpful financial solutions to 1000's of people across the UK. You may well have seen us advertising online at any of these websites -
                            </p>
                        </Col>
                        <Col lg={5} className="wow fadeInUp text-center">
                            <Row className="align-items-center justify-content-around">
                                <Col xs={5}>
                                    <img src="/images/facebook.svg" className="mb-4" loading="lazy" alt="" />
                                </Col>
                                <Col xs={5}>
                                    <img src="/images/seen-logo-2.svg" className="mb-4" loading="lazy" alt="" />
                                </Col>
                                <Col xs={5}>
                                    <img src="/images/seen-logo-3.svg" className="mb-4" loading="lazy" alt="" />
                                </Col>
                                <Col xs={5}>
                                    <img src="/images/seen-logo-4.svg" className="mb-4" loading="lazy" alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="ball" style={{ transform: props.xy.interpolate(trans4) }} />
                </div>
            </div>
        </>
    );
}
7;
