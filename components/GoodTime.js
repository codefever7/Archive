import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans2 = (x, y) => `translateX(60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans3 = (x, y) => `translateX(-60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 45}px,${y / 45}px,0)`;
export default function GoodTime() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="good-time position-relative wow fadeInUp" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} className="">
                            <h2 className="heading wow fadeInUp">
                                Why now is a <span className="bg-success">good time?</span>
                            </h2>
                            <p className="my-4 lead lead--small wow fadeInUp">
                                It’s difficult to come to terms with debt and whether you need our help or not. But here are a few good reasons why now is a good time
                            </p>
                            <ul className="nav list">
                                <li className="wow fadeInUp">You’ll get honest FREE advice</li>
                                <li className="wow fadeInUp">Your repayments will be affordable. They start at £80</li>
                                <li className="wow fadeInUp">You can consolidate most of your debt</li>
                                <li className="wow fadeInUp">We will stop your creditors calling, emailing or writing to you</li>
                                <li className="wow fadeInUp">You’ll be debt FREE in no time</li>
                                <li className="wow fadeInUp">You’ll feel relieved its all sorted</li>
                            </ul>
                        </Col>
                        <Col lg={5} className="wow fadeInUp text-center">
                            <img src="/images/good-time.png" loading="lazy" className="good-time__image" alt="" />
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div className="circle" style={{ transform: props.xy.interpolate(trans2) }} />
                    <animated.div className="circle circle--2" style={{ transform: props.xy.interpolate(trans3) }} />
                    <animated.div className="ball" style={{ transform: props.xy.interpolate(trans4) }} />
                    <animated.div className="dots" style={{ transform: props.xy.interpolate(trans7) }} />
                </div>
            </div>
        </>
    );
}
