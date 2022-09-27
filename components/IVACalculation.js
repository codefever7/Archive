import React from "react";
import IVASlider from "./IVASlider";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const circle2 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const ball = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const dots = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

export default function IVACalculation() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="section iva-calculation" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <IVASlider />
                </Container>
                <div className="backgrounds">
                    <animated.div className="circle" style={{ transform: props.xy.interpolate(circle) }} />
                    <animated.div className="circle circle--2" style={{ transform: props.xy.interpolate(circle2) }} />
                    <animated.div className="ball" style={{ transform: props.xy.interpolate(ball) }} />
                    <animated.div className="dots" style={{ transform: props.xy.interpolate(dots) }} />
                </div>
            </div>
        </>
    );
}
7;
