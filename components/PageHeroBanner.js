import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";

export default function PageHeroBanner(props) {
    return (
        <>
            <div className="page-hero-banner">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h1 className="text-start text-white fw-bold m-0 mb-4 wow fadeInUp">{props.title}</h1>
                            <Button variant="success" className="custom-btn  wow fadeInUp apply-btn" href="/solution-finder">
                                Do I qualify?
                            </Button>
                            <Button variant="outline-success" className="custom-btn ms-3   wow fadeInUp" href="/solution-finder">
                                Request a callback
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
7;
