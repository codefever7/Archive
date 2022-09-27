import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const circle2 = (x, y) => `scale(1.3) translate3d(${x / 20}px,${y / 20}px,0)`;
const polygon = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function WhatIsIva() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="what-is-iva bg-light" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <h2 className="heading wow fadeInUp mb-4">
                        What is an <span>IVA?</span>
                    </h2>
                    <Row>
                        <Col lg={6}>
                            <p className="lead lead--small wow fadeInUp  ">
                                An IVA is a formal debt solution for people with unsecured debts they are struggling to maintain, that want or need to avoid being declared bankrupt by their creditors.
                                <br />
                                <br />
                                During the IVA you make one affordable monthly payment typically for 60 months. At the end of the term any debt you still owe are written off. <br />
                                <br /> An IVA is a legally binding agreement so once entered, your creditors can’t back out or change the terms after they agree to them.
                            </p>
                            <Button variant="success" className="custom-btn apply-btn  wow fadeInUp mb-5" href="/solution-finder">
                                Do I qualify?
                            </Button>
                        </Col>
                        <Col lg={6}>
                            <p className="lead lead--small wow fadeInUp mt-lg-0 mt-3">Please note entering into an IVA will affect your credit rating for 72 months</p>
                            <p className="lead lead--small fw-bold wow fadeInUp">Some of the things the lenders will have to abide by are the following:</p>
                            <ul className="nav list list--small wow fadeInUp">
                                <li>To write off any debt included in the IVA at the end of the term</li>
                                <li>They must freeze the interest and charges on any debt</li>
                                <li>They should stop contacting you for payments</li>
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
