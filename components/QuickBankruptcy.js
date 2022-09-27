import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const circle2 = (x, y) => `scale(1.3) translate3d(${x / 20}px,${y / 20}px,0)`;
const polygon = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function QuickBankruptcy() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="what-is-iva" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <h2 className="heading wow fadeInUp mb-4">
                        What is <span>Bankruptcy? </span>
                    </h2>
                    <Row>
                        <Col lg={6}>
                            <p className="lead lead--small wow fadeInUp">
                                Bankruptcy is a way of legally declaring your inability to pay your creditors. It is a formal debt solution for those who have an amount of debt which they cannot
                                repay. In Bankruptcy you usually stop paying your creditors. Your creditors cannot chase you for the outstanding debt. It can provide a real fresh start for debts that
                                will never be repaid.
                            </p>
                            <Button variant="success" className="custom-btn apply-btn wow fadeInUp" href="/solution-finder">
                                Do I qualify?
                            </Button>
                        </Col>
                        <Col lg={6}>
                            <p className="lead lead--small wow fadeInUp">Some of the things the lenders will have to abide by are the following:</p>
                            <ul className="nav list list--small wow fadeInUp">
                                <li>You can be discharged after 12 months</li>
                                <li>Upon discharge 100% of eligible debts are written off</li>
                                <li>Bankruptcy stops any legal action now</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="circle" style={{ transform: props.xy.interpolate(circle) }} />
                    <animated.div className="circle circle--2" style={{ transform: props.xy.interpolate(circle2) }} />
                    <animated.div className="polygon" style={{ transform: props.xy.interpolate(polygon) }} />
                </div>
            </div>
        </>
    );
}
7;
