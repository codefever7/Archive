import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `scale(1.5)  translate3d(${x / 15}px,${y / 15}px,0)`;
const circle2 = (x, y) => `scale(1.5) translate3d(${x / 20}px,${y / 20}px,0)`;
const ball = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const dots = (x, y) => `translate3d(${x / 20}px,${y / 4}px,0)`;

export default function FreeAdvice() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="free-debt-advice" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="advice-box p-4">
                                <h4 className="wow fadeInUp fw-bold text-center my-4">Free Debt Advice</h4>
                                <form className="wow fadeInUp" name="leadbox" method="post" data-netlify="true" action="/thank-you">
                                    <input type="hidden" name="form-name" value="leadbox" />

                                    <Form.Group>
                                        <small>Roughly how much is your total debt?</small>
                                        <Form.Control type="number" name="debt" placeholder="Roughly debt" />
                                    </Form.Group>
                                    <Form.Group>
                                        <small>Your Name</small>
                                        <Form.Control type="text" name="name" required placeholder="your name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <small>Your telephone number</small>
                                        <Form.Control type="nnumber" name="phone" required placeholder="Phone address" />
                                    </Form.Group>
                                    <Form.Group>
                                        <small>Your email address</small>
                                        <Form.Control type="text" name="email" required placeholder="Email address" />
                                    </Form.Group>
                                    <div className="text-center mt-4">
                                        <Button variant="success" className="custom-btn" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </form>{" "}
                            </div>
                        </Col>
                        <Col lg={8}>
                            <img src="/images/free-billy.png" loading="lazy" className="free-debt-advice__image" alt="" />
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="circle" style={{ transform: props.xy.interpolate(circle) }} />
                    <animated.div className="circle circle--2" style={{ transform: props.xy.interpolate(circle2) }} />
                    <animated.div className="ball" style={{ transform: props.xy.interpolate(ball) }} />
                    <animated.div className="dots" style={{ transform: props.xy.interpolate(dots) }} />
                </div>
            </div>
        </>
    );
}
7;
