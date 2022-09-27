import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const circle2 = (x, y) => `scale(1.3) translate3d(${x / 20}px,${y / 20}px,0)`;
const polygon = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function BankruptcyProsCons() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="what-is-iva" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <h2 className="heading text-center wow fadeInUp mb-5">
                        <span>Pros & Cons </span> of Bankruptcy
                    </h2>
                    <Row>
                        <Col lg={6} className="pe-lg-5 border-end">
                            <h4 className="wow fadeInUp text-center mb-4">PROS </h4>
                            <ul className="nav list list--small">
                                <li className="wow fadeInUp mb-3">You will no longer have to deal with your creditors.</li>
                                <li className="wow fadeInUp mb-3">Once your bankruptcy is completed you will be able to start again financially, without any debt.</li>
                                <li className="wow fadeInUp mb-3">
                                    You no longer have to make payments towards your creditors. (If you have available disposable income you will have to contribute this under an Income Payment Order
                                    for 3 years.)
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} className="ps-lg-5  mt-lg-0 mt-5">
                            <h4 className="wow fadeInUp text-center mb-4">CONS </h4>
                            <ul className="nav list cons list--small">
                                <li className="wow fadeInUp mb-3">Your credit rating is likely to be severely affected.</li>
                                <li className="wow fadeInUp mb-3">You cannot acquire credit of £500 or more without disclosing you are bankrupt.</li>
                                <li className="wow fadeInUp mb-3">You cannot be a director of a limited company.</li>
                                <li className="wow fadeInUp mb-3">You may lose your home and car.</li>
                                <li className="wow fadeInUp mb-3">
                                    Some employers will not allow you to enter bankruptcy and in doing so you could lose your job. You should check your contract of employment first.
                                </li>
                                <li className="wow fadeInUp mb-3">
                                    If you receive income for employment, a private pension or any other form of income which is not state benefits then you may be asked to make payments to your
                                    bankruptcy for 3 years.
                                </li>
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
