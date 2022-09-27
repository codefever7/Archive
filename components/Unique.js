import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans2 = (x, y) => `translateX(60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans3 = (x, y) => `translateX(-60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 45}px,${y / 45}px,0)`;
export default function Unique() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="unique position-relative wow fadeInUp" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} className="wow fadeInUp text-center">
                            <img src="/images/billy-unique.png" className="unique__image" alt="" />
                        </Col>{" "}
                        <Col lg={7} className="">
                            <h2 className="heading wow fadeInUp">
                                Why choose <span className="bg-success"> Giraffe?</span>
                            </h2>
                            <p className="my-4 lead lead--small wow fadeInUp">
                                By choosing Giraffe Money, you will get a company that cares about that people it deals with and we will go the extra mile to make sure we fulfil our promises to you.{" "}
                            </p>
                            <ul className="nav list mb-5">
                                <li className="wow fadeInUp">We have over 12 years of experience</li>
                                <li className="wow fadeInUp">We’re there to support you from day one</li>
                                <li className="wow fadeInUp">You’re opinion of us matters</li>
                                <li className="wow fadeInUp">You’re not just a number, we care about everyone we deal with</li>
                            </ul>
                            <Button variant="success" className="custom-btn apply-btn wow fadeInUp" href="/solution-finder">
                                Apply now
                            </Button>
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
