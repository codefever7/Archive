import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const circle = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const circle2 = (x, y) => `scale(1.3) translate3d(${x / 20}px,${y / 20}px,0)`;
const polygon = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function IVAProsCons() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 200, friction: 70 } }));
    return (
        <>
            <div className="what-is-iva" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Container>
                    <h2 className="heading text-center wow fadeInUp mb-5">
                        <span>Pros & Cons </span> of IVA
                    </h2>
                    <Row>
                        <Col lg={6} className="pe-lg-5 border-end">
                            <h4 className="wow fadeInUp text-center mb-4">PROS </h4>
                            <ul className="nav list list--small">
                                <li className="wow fadeInUp mb-3">Affordable payments – allowances will be made for all key expenditure, which will also provide a</li>
                                <li className="wow fadeInUp mb-3">manageable budget which many clients find very useful</li>
                                <li className="wow fadeInUp mb-3">
                                    Fixed period of repayment – ordinarily 60 months – provides an end point for the client, they will know when they will be free of debts included in the IVA
                                </li>
                                <li className="wow fadeInUp mb-3">
                                    Protection from lenders – legally binding agreement which is designed to stop lenders contacting by phone or by letter and also any legal action so no bailiffs,
                                    CCJs, attachment of earnings and charging orders
                                </li>
                                <li className="wow fadeInUp mb-3"> Protect any assets owned subject to lenders approval – no risk to homes at all and assets of reasonable value all acceptable</li>
                                <li className="wow fadeInUp mb-3">
                                    Once completed any outstanding debt owed included in IVA written off – The client will be paying as much back as they can over a reasonable period of time so it is
                                    an honourable solution
                                </li>
                                <li className="wow fadeInUp mb-3"> All interest frozen upon approval of IVA</li>
                                <li className="wow fadeInUp mb-3"> 75% lender support to gain acceptance</li>
                            </ul>
                        </Col>
                        <Col lg={6} className="ps-lg-5 mt-lg-0 mt-5">
                            <h4 className="wow fadeInUp text-center mb-4">CONS </h4>
                            <ul className="nav list cons list--small">
                                <li className="wow fadeInUp mb-3">
                                    Expenditure less flexible – strict adherence to guidelines, which can sometimes result in the debtor paying back more than they owe during a 60 month plan
                                </li>
                                <li className="wow fadeInUp mb-3">
                                    The duration of the product may increase as per the proposal and any modifications that are made. Though you will be made aware before agreeing.
                                </li>
                                <li className="wow fadeInUp mb-3">
                                    Homeowners effected – Property owners will be required to investigate a re-mortgage – only required to do so if affordable. If unable to re-mortgage and have above
                                    £5000 equity then up to an extra 12 months of repayments maybe required, which would be confirmed prior to approval.
                                </li>
                                <li className="wow fadeInUp mb-3"> Fees to be paid to Insolvency Practitioner – as part of monthly payments however this is included in the monthly payment.</li>
                                <li className="wow fadeInUp mb-3">
                                    Credit rating affected – on credit file for 6 years from the date of approval. If an IVA fails then lenders may petition for the debtor’s bankruptcy.
                                </li>
                                <li className="wow fadeInUp mb-3">
                                    Some occupations may be affected – You will need to check with employer and trade body to ensure no impact to position of employment
                                </li>
                                <li className="wow fadeInUp mb-3"> 75% of the lenders who vote have to agree for a successful IVA. This is called the requisite majority</li>
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
