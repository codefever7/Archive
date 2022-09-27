import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function PageHero(props) {
    return (
        <>
            <div className="page-hero">
                <Container>
                    <h1 className="text-center fw-bold m-0">{props.title}</h1>
                </Container>
                <div className="backgrounds">
                    <div className="dots2"></div>
                    <div className="qube2"></div>
                </div>
            </div>
        </>
    );
}
7;
