import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const ball = (x, y) => `rotate(-35deg) translate3d(${x / 10}px,${y / 10}px,0)`;
const dots = (x, y) => `translate3d(${x / 20}px,${y / 4}px,0)`;

export default function QuickLinks() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="quick-links" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="justify-content-around">
                        <Col lg={4} className="mb-lg-0 mb-5">
                            <h3 className="fw-bold wow fadeInUp mb-lg-4">
                                <span className="bg-warning">IVA? </span>
                            </h3>
                            <p className="lead lead--small wow fadeInUp mb-4">
                                A solution for people with debts over £5,000. An IVA could help you write-off up to 90%* of your outstanding debts and pay one affordable monthly payment.{" "}
                            </p>
                            <Button variant="success" className="custom-btn mb-4" href="/iva">
                                Find out more
                            </Button>
                        </Col>
                        <Col lg={4} className="mb-lg-0 mb-5">
                            <h3 className="fw-bold  wow fadeInUp mb-4">
                                <span className="bg-warning">Debt </span> management
                            </h3>
                            <p className="lead lead--small wow fadeInUp mb-4">
                                A Debt Management Plan or DMP, is an informal agreement to pay back non-priority debts, reducing your monthly payments to a single affordable amount each month.{" "}
                            </p>
                            <Button variant="success" className="custom-btn" href="/debt-management">
                                Find out more
                            </Button>
                        </Col>
                        <Col lg={4} className="mb-lg-0 mb-5">
                            <h3 className="fw-bold wow fadeInUp mb-4">
                                <span className="bg-warning">Bank</span>ruptcy
                            </h3>
                            <p className="lead lead--small wow fadeInUp mb-4">
                                Bankruptcy is a formal debt solution for people with debts they cannot repay. It’s often viewed as a last resort but can be a great solution for people without the
                                means to repay debts.
                            </p>
                            <Button variant="success" className="custom-btn" href="/bankruptcy">
                                Find out more
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="ball" style={{ transform: props.xy.interpolate(circle) }} />
                    <animated.div className="line" style={{ transform: props.xy.interpolate(ball) }} />
                    <animated.div className="ring" style={{ transform: props.xy.interpolate(dots) }} />
                </div>
            </div>
        </>
    );
}
7;
