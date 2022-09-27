import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";

export default function WorkWith() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                },
            },
        ],
    };

    return (
        <>
            <div className="py-5 debt-write-off position-relative">
                <Container>
                    <h4 className="fw-bold wow fadeInUp text-center">Just Some Of The Creditors We Could Help You With</h4>
                    <Slider {...settings}>
                        <div className="item">
                            <img src="/images/debt_logo1.svg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/debt_logo2.svg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/debt_logo3.svg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/debt_logo4.svg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/debt_logo5.svg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/debt_logo6.svg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/debt_logo7.svg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/debt_logo8.svg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/debt_logo9.svg" alt="" />
                        </div>
                    </Slider>
                </Container>
            </div>
        </>
    );
}
