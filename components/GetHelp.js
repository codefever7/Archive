import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans2 = (x, y) => `translateX(60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans3 = (x, y) => `translateX(-60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 45}px,${y / 45}px,0)`;
export default function GetHelp() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="good-time gethelp position-relative wow fadeInUp" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={7} className="">
                            <h2 className="heading wow fadeInUp">
                                Get the help <span className="bg-success">you need</span>
                            </h2>
                            <p className="my-4 lead lead--small wow fadeInUp">We can help reduce the following debts;</p>
                            <ul className="nav list">
                                <li className="wow fadeInUp">Loans</li>
                                <li className="wow fadeInUp">Finance</li>
                                <li className="wow fadeInUp">Credit / Store Cards</li>
                                <li className="wow fadeInUp">Overdrafts</li>
                                <li className="wow fadeInUp">HMRC / Council Tax</li>
                                <li className="wow fadeInUp">Debt Collectors / Baliiffs</li>
                                <li className="wow fadeInUp">Pay day / short term loans</li>
                            </ul>
                        </Col>
                        <Col md={5} className="wow fadeInUp text-center">
                            <img src="/images/billy-bank.png" loading="lazy" className="good-time__image" alt="" />
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
