import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
function createMarkup(title) {
    return {
        __html: title,
    };
}
export default function TwoCol(props) {
    return (
        <>
            <div className="two-col">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className={props.swap ? "order-1 order-lg-2 ps-lg-5" : ""}>
                            <h2 className="heading wow fadeInUp" dangerouslySetInnerHTML={createMarkup(props.title)} />
                            <p className="wow fadeInUp lead">{props.desc}</p>
                        </Col>
                        <Col lg={6} className={props.swap ? "order-2 order-lg-1" : ""}>
                            <img src={props.image} className="w-100 wow fadeInUp" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
7;
