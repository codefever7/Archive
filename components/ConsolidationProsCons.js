import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const circle2 = (x, y) => `scale(1.3) translate3d(${x / 20}px,${y / 20}px,0)`;
const polygon = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function ConsolidationProsCons() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="what-is-iva" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <h2 className="heading text-center wow fadeInUp mb-5">
                        <span>Pros & Cons </span> of Debt Management
                    </h2>
                    <Row>
                        <Col lg={6} className="pe-lg-5 border-end">
                            <h4 className="wow fadeInUp text-center mb-4">PROS </h4>
                            <ul className="nav list list--small">
                                <li className="wow fadeInUp mb-3">
                                    <strong>Payments reduced</strong> – makes debts affordable, as based on your affordability & helps to reduce stress and helps to ensure mortgage, rent, council tax
                                    etc can be paid alongside unsecured lenders as these are accounted for in the income and expenditure.
                                </li>
                                <li className="wow fadeInUp mb-3">
                                    <strong>Flexibility of expenditure –</strong> helps to ensure affordability
                                </li>
                                <li className="wow fadeInUp mb-3">
                                    <strong>Payments are negotiated with Lenders on your behalf –</strong> legal obligation to accept payments. Payments are fair to lenders as they are calculated on a
                                    pro-rata basis (who owes the most get the largest %)
                                </li>
                                <li className="wow fadeInUp mb-3">Perceivable that the client may be able to retain assets that would be at ‘risk’ in formal insolvency procedures.</li>
                            </ul>
                        </Col>
                        <Col lg={6} className="ps-lg-5  mt-lg-0 mt-5">
                            <h4 className="wow fadeInUp text-center mb-4">CONS </h4>
                            <ul className="nav list cons list--small">
                                <li className="wow fadeInUp mb-3">
                                    <strong>No fixed period of repayment – </strong>the duration of the plan is dependent on how much debt you have and if the lenders will agree to freeze any interest
                                    or charges. It may be that the minimum payment is less than the interest created by the debt.
                                </li>
                                <li className="wow fadeInUp mb-3">
                                    No guarantee that lenders will freeze interest and charges. Unless creditors freeze interest and charges the time taken and amount to repaid may be higher
                                </li>
                                <li className="wow fadeInUp mb-3">No protection from lenders/legal action.</li>
                                <li className="wow fadeInUp  mb-3">
                                    <strong>Unable to deal with HMRC debts – </strong>you would have to make arrangements directly with HMRC as HMRC debt cannot be included into a debt management plan
                                </li>
                                <li className="wow fadeInUp  mb-3">Will affect your credit rating</li>
                                <li className="wow fadeInUp  mb-3">
                                    If you’re unsure about whether this sounds like it’s right for you, you might want to think about other options for dealing with your debts.
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
7;
