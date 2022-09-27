import React from "react";

import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans2 = (x, y) => `scale(1.7) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans3 = (x, y) => `rotate(-35deg)  translate3d(${x / 20}px,${y / 15}px,0)`;
const box = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`;

export default function Contact() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="contact wow fadeInUp" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="">
                            <h2 className="heading wow fadeInUp mb-5">
                                Speak to us <span>today!</span>
                            </h2>
                            <form className="wow fadeInUp" name="leadbox" method="post" data-netlify="true" action="/thank-you">
                                <input type="hidden" name="form-name" value="leadbox" />

                                <Form.Group>
                                    <Form.Control type="text" name="name" placeholder="Full name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="number" name="mobile" required placeholder="Phone number" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" name="email" required placeholder="Email address" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" name="debt" required placeholder="Amount of debt" />
                                </Form.Group>
                                <div className="text-start mt-3">
                                    <Button variant="warning" className="custom-btn" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Col>
                        <Col lg={6} className="wow fadeInUp text-center">
                            <img src="/images/billy-contact.png" className="contact__image" alt="" />
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="polygon" style={{ transform: props.xy.interpolate(trans2) }} />
                    <animated.div className="dots" style={{ transform: props.xy.interpolate(box) }} />
                    <animated.div className="line" style={{ transform: props.xy.interpolate(trans3) }} />
                </div>
            </div>
            <section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.990480299051!2d-2.982991484159649!3d53.397110179989724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b212785b86c7d%3A0x3f6786bdcb4effec!2s32%2C%203a%20Bridgewater%20St%2C%20Liverpool%20L1%200AF%2C%20UK!5e0!3m2!1sen!2sca!4v1609036049384!5m2!1sen!2sca"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </section>
            <section className="py-5 mb-5">
                <Container className="text-center">
                    <h2 className="heading wow fadeInUp mt-4 mb-4">
                        Got 30 <span>seconds?</span>
                    </h2>
                    <p className="lead mb-4">That’s all it takes to find out if we can help!</p>
                    <Button variant="success" className="custom-btn apply-btn" href="/solution-finder">
                        Apply now
                    </Button>
                </Container>
            </section>
        </>
    );
}
