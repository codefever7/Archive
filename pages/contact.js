import Head from "next/head";
import Nav from "../components/Nav";
import PageHero from "../components/PageHero";
import ContactForm from "../components/Contact";

import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Unique from "../components/Unique";
// import { Container, Row, Col, Button } from "react-bootstrap";

export default function Contact() {
    return (
        <div>
            <Head></Head>
            <Nav invert={true} />
            <PageHero title="Contact Us" />
            <ContactForm />
            <CTA />
            <Footer />
        </div>
    );
}
