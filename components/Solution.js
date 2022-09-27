import React, { Component, useState } from "react";
import Head from "next/head";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { InputGroup, Row, Col, Button, Form } from "react-bootstrap";
import Slider from "react-slick";

export default class Solution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            value: "",
            fname: "",
            lname: ".",
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.handleName = this.handleName.bind(this);
        this.focusUpdate = this.focusUpdate.bind(this);
        this.updateVal = this.updateVal.bind(this);
    }
    next() {
        this.slider.slickNext();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    previous() {
        this.slider.slickPrev();
    }

    handleName(e) {
        let val = e.target.value;
        this.setState({ fname: val });
    }
    focusUpdate(e) {
        if (
            this.state.value.charAt(0) === "0" ||
            this.state.value.charAt(0) === "4"
        ) {
            let val = this.state.value;
            val = val.slice(1);
            this.setState({ value: val });
        }
        if (this.state.fname.indexOf(" ") >= 0) {
            this.setState({
                fname: this.state.fname.split(" ")[0],
                lname: this.state.fname.split(" ")[1]
                    ? this.state.fname.split(" ")[1]
                    : ".",
            });
        }
    }
    updateVal(e) {
        if (
            e.target.value === "0" ||
            e.target.value === "4" ||
            e.target.value === "44"
        )
            return;
        if (
            this.state.value.charAt(0) === "0" ||
            this.state.value.charAt(0) === "4"
        ) {
            this.setState({ value: e.target.value.slice(1) });
        } else {
            this.setState({ value: e.target.value });
        }
    }
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            swipeToSlide: false,
            touchMove: false,
            vertical: true,
            // centerMode: true,
            // adaptiveHeight: true,
        };

        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `snaptr('track','ADD_CART')`,
                        }}
                    />
                </Head>
                <div className="solution position-relative ">
                    <div className="container solution__box ">
                        <form
                            className="wow fadeInUp"
                            name={`${
                                this.props.b
                                    ? "solution-finder-b"
                                    : "solution-finder"
                            }`}
                            method="post"
                            data-netlify="true"
                            action="/thank-you"
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value={`${
                                    this.props.b
                                        ? "solution-finder-b"
                                        : "solution-finder"
                                }`}
                            />
                            <Slider
                                ref={(c) => (this.slider = c)}
                                {...settings}
                            >
                                <div>
                                    <div className="step-1 px-lg-5">
                                        <h2 className="mb-3 text-center heading">
                                            Solution finder{" "}
                                        </h2>
                                        <p className="text-center lead">
                                            Start here and check your
                                            eligibility. It takes 30 seconds to
                                            check! Prefer to chat? Message us on
                                            Whatsapp by clicking the green logo
                                            below. 👇
                                        </p>
                                        <div className="text-center">
                                            <Button
                                                onClick={this.next}
                                                variant="success"
                                                className="custom-btn d-inline-flex align-items-center"
                                            >
                                                get started
                                            </Button>
                                        </div>
                                    </div>
                                </div>{" "}
                                <div>
                                    <div className="step-2 px-lg-5">
                                        <h2 className="mb-5 text-center heading">
                                            What is the total value of your
                                            debt?
                                        </h2>
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debt-value-1"
                                                        name="total-debt-value"
                                                        value="Less than £5000"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="debt-value-1"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/money-1.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Less than £5000
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debt-value-2"
                                                        name="total-debt-value"
                                                        value="£5000 to £20000"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="debt-value-2"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/money-2.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            £5000 to £20000
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debt-value-3"
                                                        name="total-debt-value"
                                                        value="More than £20000"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="debt-value-3"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/money-3.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            More than £20000
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="text-center"></div>
                                    </div>
                                </div>{" "}
                                <div>
                                    <div className="step-3 px-lg-5">
                                        <h2 className=" text-center heading">
                                            Which types of debts do you have?{" "}
                                        </h2>
                                        <p className="mb-5 text-center">
                                            (Click all that apply)
                                        </p>
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="checkbox"
                                                        id="debt-type-1"
                                                        name="debt-type[]"
                                                        value="Cradit/Store Card"
                                                    />
                                                    <label
                                                        className="variation-box__label"
                                                        htmlFor="debt-type-1"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/cc.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Credit/Store Card
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="checkbox"
                                                        id="debt-type-2"
                                                        name="debt-type[]"
                                                        value="Mortgage/Rent Areas"
                                                    />
                                                    <label
                                                        className="variation-box__label"
                                                        htmlFor="debt-type-2"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/house.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Mortgage/Rent Areas
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="checkbox"
                                                        id="debt-type-3"
                                                        name="debt-type[]"
                                                        value="County Court Judgements (CCJs)"
                                                    />
                                                    <label
                                                        className="variation-box__label"
                                                        htmlFor="debt-type-3"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/ccj.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            County Court
                                                            Judgements
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="checkbox"
                                                        id="debt-type-4"
                                                        name="debt-type[]"
                                                        value="Council Tax"
                                                    />
                                                    <label
                                                        className="variation-box__label"
                                                        htmlFor="debt-type-4"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/tax.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Council Tax
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="checkbox"
                                                        id="debt-type-5"
                                                        name="debt-type[]"
                                                        value="Bills (mobile, utility etc)"
                                                    />
                                                    <label
                                                        className="variation-box__label"
                                                        htmlFor="debt-type-5"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/bills.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Bills (mobile,
                                                            utility etc)
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="checkbox"
                                                        id="debt-type-6"
                                                        name="debt-type[]"
                                                        value="Payday or short term loans"
                                                    />
                                                    <label
                                                        className="variation-box__label"
                                                        htmlFor="debt-type-6"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/money-1.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Payday or short term
                                                            loans
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="checkbox"
                                                        id="debt-type-7"
                                                        name="debt-type[]"
                                                        value="Other"
                                                    />
                                                    <label
                                                        className="variation-box__label"
                                                        htmlFor="debt-type-7"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/others.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Other
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="text-center">
                                            <Button
                                                onClick={this.next}
                                                variant="success"
                                                className="custom-btn d-inline-flex align-items-center"
                                            >
                                                Next{" "}
                                                <img
                                                    src="/images/bx_bxs-right-arrow.svg"
                                                    className="ms-2"
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="step-4 px-lg-5">
                                        <h2 className="mb-5 text-center heading">
                                            How many debtors do you have?{" "}
                                        </h2>
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debtors-1"
                                                        name="debtors"
                                                        value="1"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label justify-content-center"
                                                        htmlFor="debtors-1"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <h2>1</h2>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debtors-2"
                                                        name="debtors"
                                                        value="2"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label justify-content-center"
                                                        htmlFor="debtors-2"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <h2>2</h2>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debtors-3"
                                                        name="debtors"
                                                        value="3"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label justify-content-center"
                                                        htmlFor="debtors-3"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <h2>3</h2>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debtors-4"
                                                        name="debtors"
                                                        value="4"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label justify-content-center"
                                                        htmlFor="debtors-4"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <h2>4</h2>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debtors-5"
                                                        name="debtors"
                                                        value="5"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label justify-content-center"
                                                        htmlFor="debtors-5"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <h2>5</h2>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debtors-6"
                                                        name="debtors"
                                                        value="6"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label justify-content-center"
                                                        htmlFor="debtors-6"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <h2>6</h2>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debtors-7"
                                                        name="debtors"
                                                        value="7"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label justify-content-center"
                                                        htmlFor="debtors-7"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <h2>7</h2>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="debtors-7"
                                                        name="debtors"
                                                        value="8"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label justify-content-center"
                                                        htmlFor="debtors-7"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <h2>8</h2>
                                                        </div>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div>
                                    <div className="step-5 px-lg-5">
                                        <h2 className="mb-5 text-center heading">
                                            Are you a homeowner?
                                        </h2>
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="homeowner-1"
                                                        name="homeowner"
                                                        value="Yes"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="homeowner-1"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/yes.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Yes
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="homeowner-2"
                                                        name="homeowner"
                                                        value="No"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="homeowner-2"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/no.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            No
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>{" "}
                                <div>
                                    <div className="step-5 px-lg-5">
                                        <h2 className="mb-5 text-center heading">
                                            {" "}
                                            How much money do you have left each
                                            month after paying your bills and
                                            living expenses?
                                        </h2>
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="money-left-1"
                                                        name="money-left"
                                                        value="Less than £75"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="money-left-1"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/money-1.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Less than £75
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="money-left-2"
                                                        name="money-left"
                                                        value="Between £75 and £125"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="money-left-2"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/money-2.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Between £75 and £125
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="money-left-3"
                                                        name="money-left"
                                                        value="Between £125 and £200"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="money-left-3"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/money-3.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Between £125 and
                                                            £200
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="money-left-4"
                                                        name="money-left"
                                                        value="More than £200"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="money-left-4"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/money-4.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            More than £200
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div>
                                    <div className="step-6 px-lg-5">
                                        <h2 className="mb-5 text-center heading">
                                            Where do you live?
                                        </h2>
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="location-1"
                                                        name="location"
                                                        value="England"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="location-1"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/england.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            England
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="location-2"
                                                        name="location"
                                                        value="Wales"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="location-2"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/wales.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Wales
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="location-3"
                                                        name="location"
                                                        value="Scotland"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="location-3"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/scotland.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Scotland
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="location-4"
                                                        name="location"
                                                        value="Northern Ireland"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="location-4"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/ni.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Northern Ireland
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="location-5"
                                                        name="location"
                                                        value="Outside the UK"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="location-5"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/out-uk.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Outside the UK
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div>
                                    <div className="step-7 px-lg-5">
                                        <h2 className="mb-5 text-center heading">
                                            What is your employment status?
                                        </h2>
                                        <Row className="justify-content-center">
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="employment-status-1"
                                                        name="employment-status"
                                                        value="Employed Full-time"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="employment-status-1"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/full-time.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Employed Full-time
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="employment-status-2"
                                                        name="employment-status"
                                                        value="Employed Part-time"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="employment-status-2"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/part-time.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Employed Part-time
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="employment-status-3"
                                                        name="employment-status"
                                                        value="Self Employed"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="employment-status-3"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/self.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Self Employed
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="employment-status-4"
                                                        name="employment-status"
                                                        value="Unemployed"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="employment-status-4"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/unemplo.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Unemployed
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="employment-status-5"
                                                        name="employment-status"
                                                        value="Student"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="employment-status-5"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/student.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Student
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs="auto">
                                                <div className="variation-box">
                                                    <input
                                                        type="radio"
                                                        id="employment-status-6"
                                                        name="employment-status"
                                                        value="Retired"
                                                    />
                                                    <label
                                                        onClick={this.next}
                                                        className="variation-box__label"
                                                        htmlFor="employment-status-6"
                                                    >
                                                        <div className="variation-box__ic">
                                                            <img
                                                                src="/images/solution/retired.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <p className="lead m-0 mt-3">
                                                            Retired
                                                        </p>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div>
                                    <div className="step-8 px-lg-5">
                                        <h2 className="mb-2 text-center heading mb-5">
                                            And finally, your contact details
                                        </h2>

                                        <Row className="justify-content-center">
                                            <Col lg={4}>
                                                <Form.Group>
                                                    <small>Your Name</small>
                                                    <Form.Control
                                                        onChange={
                                                            this.handleName
                                                        }
                                                        type="text"
                                                        value={this.state.fname}
                                                        name="name"
                                                        required
                                                        placeholder="Your Name"
                                                    />
                                                    <Form.Control
                                                        value={this.state.lname}
                                                        type="hidden"
                                                        name="last_name"
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <small>
                                                        Your telephone number
                                                    </small>
                                                    <InputGroup className="mb-2">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text>
                                                                +44
                                                            </InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control
                                                            onChange={
                                                                this.updateVal
                                                            }
                                                            type="number"
                                                            value={
                                                                this.state.value
                                                            }
                                                            name="phone"
                                                            required
                                                            placeholder="Phone number"
                                                        />
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group>
                                                    <small>
                                                        Your email address
                                                    </small>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        required
                                                        placeholder="Email address"
                                                    />
                                                </Form.Group>
                                                <div className="text-center mt-4">
                                                    <Button
                                                        variant="success"
                                                        onClick={
                                                            this.focusUpdate
                                                        }
                                                        className={` custom-btn`}
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="text-center mt-5">
                                            <p className="lead  lead--small text-center ">
                                                No one wants to be pestered, We
                                                understand that. So, you’ll
                                                receive an email and a text
                                                about what solution you may
                                                qualify for. If you would like
                                                to learn more, you can reply in
                                                your own time and we can go from
                                                there. Our service can be
                                                completed completely online and
                                                by messaging. You won’t have to
                                                speak anyone if you don’t want
                                                too. How good is that! 🙌
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </form>
                    </div>
                    <div className="backgrounds">
                        <animated.div className="circle" />
                        <animated.div className="ball" />
                        <animated.div className="ring" />
                        <animated.div className="ring ring--2" />
                    </div>
                </div>
            </>
        );
    }
}
