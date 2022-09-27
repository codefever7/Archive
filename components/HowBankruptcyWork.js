import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const circle2 = (x, y) => `scale(1.3) translate3d(${x / 20}px,${y / 20}px,0)`;
const ball = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function HowBankruptcyWork() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="how-iva-work" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <h2 className="heading wow fadeInUp mb-5 text-center">
                        How does <span className="bg-success"> Bankruptcy work?</span>
                    </h2>
                    <Row>
                        <Col lg={4}>
                            <div className="how-work-box text-center p-4">
                                <img src="/images/if-qualify.svg" className="wow fadeInUp" alt="" />
                                <h4 className="wow fadeInUp fw-bold my-4">See if You Qualify</h4>
                                <p className="lead lead--small wow fadeInUp">
                                    Complete our 30 second online form to see if you qualify, or you can call us directly on <u>01565 325 030</u>
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="how-work-box text-center p-4">
                                <img src="/images/chat-wh.svg" className="wow fadeInUp" alt="" />
                                <h4 className="wow fadeInUp fw-bold my-4">Quick Chat</h4>
                                <p className="lead lead--small wow fadeInUp">
                                    If this is the right solution for you, we can start the ball rolling whenever you’re ready. We will help along the way until you become debt free!
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="how-work-box text-center p-4">
                                <img src="/images/choice.svg" className="wow fadeInUp" alt="" />
                                <h4 className="wow fadeInUp fw-bold my-4">Your Choice</h4>
                                <p className="lead lead--small wow fadeInUp">
                                    If an IVA is the best solution for you, we can start the ball rolling whenever you’re ready. We will help along the way until you become debt free!
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <Button variant="success" className="custom-btn  wow fadeInUp apply-btn" href="/solution-finder">
                            Do I qualify?
                        </Button>
                    </div>
                </Container>
                <div className="backgrounds">
                    <animated.div className="circle" style={{ transform: props.xy.interpolate(circle) }} />
                    <animated.div className="circle circle--2" style={{ transform: props.xy.interpolate(circle2) }} />
                    <animated.div className="ball" style={{ transform: props.xy.interpolate(ball) }} />
                </div>
            </div>
        </>
    );
}
7;
