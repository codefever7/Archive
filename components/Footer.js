

import { Container, Row, Col, Nav } from "react-bootstrap";
import Link from "./Link";

export default function Footer() {
    return (
        <>
            <footer className="wow fadeInUp">
                {/* <Container className="py-5 text-white font-monospace">
                    <Row>
                        <Col>
                            <p className="mb-4 lead lead--small wow fadeInUp">
                                Customers can get free debt counselling, debt
                                adjusting and providing of credit information
                                services from the Money Advice Service – an
                                organisation set up by the Government to offer
                                free and impartial advice to those in debt. For
                                more information from the Money Advice Service
                                click here www.moneyadviceservice.org.uk You can
                                find. Government guidance on dealing with your
                                creditors here.{" "}
                            </p>
                        </Col>
                        <Col md="auto">
                            <img src="/images/money-advise.svg" alt="" />
                        </Col>
                    </Row>
                </Container> */}
                {/* <hr /> */}
                <Container className="py-5 text-white font-monospace">
                    <Row>
                        {/* <Col lg={3}>
                            <Nav
                                as="ul"
                                className="justify-content-center flex-column text-uppercase"
                            >
                                <Link activeClassName="active" href="/">
                                    <a className="nav-link text-white ">Home</a>
                                </Link>
                                <Link
                                    activeClassName="active"
                                    href="http://www.giraffeblog.co.uk/"
                                >
                                    <a className="nav-link text-white ">blog</a>
                                </Link>
                                <Link activeClassName="active" href="/contact">
                                    <a className="nav-link text-white ">
                                        Contact
                                    </a>
                                </Link>
                                <Link activeClassName="active" href="/policy">
                                    <a className="nav-link text-white ">
                                        Privacy & policy
                                    </a>
                                </Link>
                                <Link
                                    activeClassName="active"
                                    href="/complaints-handling-policy"
                                >
                                    <a className="nav-link text-white ">
                                        Complaints Handling Policy
                                    </a>
                                </Link>
                            </Nav>
                        </Col> */}
                        <Col>
                            <p className="lead text-white mb-3 text-start wow fadeInUp">
                                {" "}
                                <a
                                    className="text-white text-decoration-none"
                                    href="tel:01565 325030"
                                >
                                    <img
                                        src="/images/call-ic.svg"
                                        className="me-3"
                                        alt=""
                                    />
                                    01565 325030
                                </a>
                            </p>
                            <p className="mb-4 lead lead--small text-white fw-bold  wow fadeInUp">
                                Open Monday - Friday 8am - 8pm
                            </p>
                            
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}
