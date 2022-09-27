import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans4 = (x, y) => `scale(0.4) translate3d(${x / 15}px,${y / 15}px,0)`;
const trans6 = (x, y) => ` translate3d(${x / 20}px,${y / 20}px,0)`;
export default function QuickIVA() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="section quick-iva" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg>
                            <Row>
                                <Col md={6}>
                                    <ul className="list list--small nav wow fadeInUp">
                                        <li>Get one affordable monthly payment</li>
                                        <li>Stop all creditors contacting you</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <ul className="list list--small nav  wow fadeInUp">
                                        <li>Consolidate all unsecured debt</li>
                                        <li>Become debt free!</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="auto">
                            <div className="d-flex align-items-center  wow fadeInUp">
                                <img src="/images/logo.svg" width="120" alt="" />
                                <img src="/images/trustpilot.svg" width="90" className="ms-5" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="dots" style={{ transform: props.xy.interpolate(trans6) }} />
                    <animated.div className="polygon" style={{ transform: props.xy.interpolate(trans4) }} />
                </div>
            </div>
        </>
    );
}
7;
