import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function CTA() {
    return (
        <>
            <div className="cta mb-lg-5">
                <Container>
                    <Row className="justify-content-center wow fadeInUp">
                        <Col lg={10} className="">
                            <div className="begin">
                                <Row className="align-items-center">
                                    <Col lg={4}>
                                        <img src="/images/billy-cta.png" loading="lazy" className="cta__image wow fadeInUp" alt="" />
                                    </Col>
                                    <Col lg={8}>
                                        <p className="lead text-white my-4 text-start wow fadeInUp">
                                            <a className="text-white text-decoration-none" href="tel:01565 325030">
                                                <img src="/images/call-ic.svg" className="me-3" alt="" />
                                                01565 325030
                                            </a>
                                        </p>
                                        <p className="lead text-white my-4 text-start wow fadeInUp">
                                            {" "}
                                            <a className="text-white text-decoration-none" href="mailto:hello@giraffe.money">
                                                <img src="/images/mail-ic.svg" className="me-3" alt="" />
                                                hello@giraffe.money
                                            </a>
                                        </p>
                                        <p className="lead text-white my-4 text-start wow fadeInUp">
                                            {" "}
                                            <a className="text-white text-decoration-none" href="tel: +44 7494 669604">
                                                <img src="/images/chat-ic.svg" className="me-3" alt="" />
                                                +44 7494 669604
                                            </a>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
