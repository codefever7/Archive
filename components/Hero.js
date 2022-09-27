import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "./Link";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `rotate(45deg) translate3d(${x / 25}px,${y / 25}px,0)`;
const trans2 = (x, y) =>
    `translateX(60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans3 = (x, y) =>
    `translateX(-60%) translate3d(${x / 20}px,${y / 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 20}px,${y / 12}px,0)`;
const trans6 = (x, y) =>
    `rotate(-35deg) translate3d(${x / 30}px,${y / 30}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 45}px,${y / 45}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

export default function Hero({ b }) {
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 1, tension: 200, friction: 70 },
    }));
    return (
        <>
            <div
                className="hero"
                onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xy: calc(x, y) })
                }
            >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={8} className="order-2 order-md-1">
                            <div className="text-md-start text-center">
                                <h1 className="wow fadeInUp fw-bold mb-lg-0 mb-4">
                                    Get your finances back on
                                    <br className="d-md-block d-none" />
                                    track with Giraffe Money
                                </h1>
                                <Link
                                    href={`${
                                        b
                                            ? "/solution-finder-b"
                                            : "/solution-finder"
                                    }`}
                                >
                                    <Button
                                        variant="success"
                                        className="custom-btn d-lg-none apply-btn mb-lg-0 mb-4 "
                                    >
                                        Check Eligibility - Apply Here!
                                    </Button>
                                </Link>
                            </div>
                            <p className="my-4 lead wow fadeInUp d-lg-block d-none ">
                                Welcome to Giraffe Money. We are a 5 star{" "}
                                <img src="/images/star.svg" width="25" alt="" />{" "}
                                <img src="/images/star.svg" width="25" alt="" />{" "}
                                <img src="/images/star.svg" width="25" alt="" />{" "}
                                <img src="/images/star.svg" width="25" alt="" />{" "}
                                <img src="/images/star.svg" width="25" alt="" />{" "}
                                <br />
                                Trustpilot reviewed company. So, you're in safe
                                hands!
                            </p>
                            {/* <div className="d-flex align-items-center lead fw-bold font-monospace my-4 wow fadeInUp ">
                                <img src="/images/clock.svg" width="35" alt="" className="me-3" />
                                It takes 30 seconds to check!
                            </div> */}
                            <div className="d-flex align-items-center wow fadeInUp justify-content-md-start justify-content-center text-md-start text-center ">
                                <Link
                                    href={`${
                                        b
                                            ? "/solution-finder-b"
                                            : "/solution-finder"
                                    }`}
                                >
                                    <Button
                                        variant="success"
                                        className="custom-btn d-lg-inline-block d-none me-4 apply-btn mb- "
                                        href={`${
                                            b
                                                ? "/solution-finder-b"
                                                : "/solution-finder"
                                        }`}
                                    >
                                        Check Eligibility - Apply Here!
                                    </Button>
                                </Link>
                                <div>
                                    <img
                                        src="/images/trustpilot.svg"
                                        className=""
                                        alt=""
                                    />
                                    <br />
                                    <small className="text-muted">
                                        Giraffe Money is rated Excellent
                                    </small>
                                </div>
                            </div>
                        </Col>
                        <Col
                            lg={5}
                            md={4}
                            className="wow fadeInUp order-1 order-md-2"
                        >
                            <img
                                src="/images/billy-hero.png"
                                alt="hero"
                                width="auto"
                                className="hero__image"
                                height="auto"
                            />
                        </Col>
                    </Row>
                </Container>
                <div className="backgrounds">
                    <animated.div
                        className="square"
                        style={{ transform: props.xy.interpolate(trans1) }}
                    />
                    <animated.div
                        className="circle"
                        style={{ transform: props.xy.interpolate(trans2) }}
                    />
                    <animated.div
                        className="circle circle--2"
                        style={{ transform: props.xy.interpolate(trans3) }}
                    />
                    <animated.div
                        className="ball"
                        style={{ transform: props.xy.interpolate(trans4) }}
                    />
                    <animated.div
                        className="polygon"
                        style={{ transform: props.xy.interpolate(trans5) }}
                    />
                    <animated.div
                        className="polygon polygon--2"
                        style={{ transform: props.xy.interpolate(trans8) }}
                    />
                    <animated.div
                        className="line"
                        style={{ transform: props.xy.interpolate(trans6) }}
                    />
                    <animated.div
                        className="line line--2"
                        style={{ transform: props.xy.interpolate(trans6) }}
                    />
                    <animated.div
                        className="line line--3"
                        style={{ transform: props.xy.interpolate(trans6) }}
                    />
                    <animated.div
                        className="line line--4"
                        style={{ transform: props.xy.interpolate(trans6) }}
                    />
                    <animated.div
                        className="dots"
                        style={{ transform: props.xy.interpolate(trans7) }}
                    />
                    <animated.div
                        className="dots dots--2"
                        style={{ transform: props.xy.interpolate(trans7) }}
                    />
                </div>
            </div>
        </>
    );
}
7;
