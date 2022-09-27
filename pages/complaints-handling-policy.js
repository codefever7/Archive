import Head from "next/head";
import Nav from "../components/Nav";
import PageHero from "../components/PageHero";
import TwoCol from "../components/TwoCol";

import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Unique from "../components/Unique";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Policy() {
    return (
        <div>
            <Head></Head>
            <Nav invert={true} />
            <PageHero title="Complaints Handling Policy" />
            <section className="py-5">
                <Container>
                    <p className="lead  wow fadeInUp">
                        Any expression of dissatisfaction about the provision, or failure to provide, a financial service and complaints handling procedure which alleges that the complainant has
                        suffered (or may suffer) financial loss, material distress or material inconvenience is treated as a complaint. This includes correspondence in writing and that made during the
                        course of verbal communication. Where any customer expresses concern about the service, steps will be taken to resolve that matter and it will be treated as a complaint.
                        <br />
                        <br />
                        Complaints may be received directly from customers or from third party representatives. In the event of any complaint the matter must be recorded and logged, and referred to
                        the nominated complaints handler in accordance with the complaint handling process
                        <br />
                        <br />
                        Any complaint received from a third party representative such as Trading Standards or the Citizens Advice Bureau will be immediately referred to the nominated complaints
                        handler.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">COMPLAINTS PROCEDURE</h3>
                    <p className="lead  wow fadeInUp">
                        The following complaints procedure is made available to every customer upon request, is published on the company’s website, and is included in summary form in our customer
                        documentation.
                        <br />
                        <br />
                        We are committed to resolving complaints as quickly as possible. In the unlikely event that you wish to make a complaint, please put this in writing and send it to the
                        following address:
                        <br />
                        <br />
                        Suite 32, <br />
                        3a Bridgewater St,
                        <br />
                        Liverpool L1 0AR
                        <br />
                        <br />
                        We will acknowledge receipt of the complaint within three working days and we will respond to your complaint in full within eight weeks.
                        <br />
                        <br />
                        If you are not satisfied with our response, or if a complaint is not resolved after eight weeks, you may refer the complaint to –<br />
                        The Financial Ombudsman Service <br />
                        Exchange Tower, <br />
                        London, <br />
                        E14 9SR
                        <br />
                        <br />
                        If you want the Financial Ombudsman Service to look into your complaint, you can do so free of charge but you must contact them within six months of the date of any final
                        response issued. Although there are time limits for referring your complaint to the Ombudsman, we will consent to the Ombudsman considering your complaint even if you refer the
                        complaint outside the time limits.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">COMPLAINTS INVESTIGATION</h3>
                    <p className="lead  wow fadeInUp">
                        The nominated complaints handler will at all times be responsible for the investigation of complaints. Input will be sought from other employees where necessary. <br />
                        <br />
                        We will retain a log of all complaints received and the outcome. A complaints file will be created for each complaint, reference to the log, and which will contain all
                        communication with complainants, the actions taken to investigate the complaint, the findings and a copy of the final response to the complainant.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">ROOT CAUSE ANALYSIS</h3>
                    <p className="lead  wow fadeInUp">
                        Upon completing the investigation of a complaint the nominated complaints handler shall conduct a root cause analysis of the complaint to ascertain the cause of the complaint
                        and the risk of that cause reoccurring.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">TREND ANALYSIS</h3>
                    <p className="lead  wow fadeInUp">
                        Each month our nominated complaints handler shall submit to the board a report detailing the number of complaints received, the resolution or otherwise of those complaints, and
                        sufficient analysis to enable the board to understand the causes of those complaints including any trends which may exist within those complaints.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">COMPLAINTS REGISTER</h3>
                    <p className="lead  wow fadeInUp">
                        We will maintain a complaints register which will be the subject of periodic review. A lack of complaints recorded may indicate that staff do not recognise what a complaint is
                        or have concerns that recording a complaint may reflect negatively upon themselves. Our management will make clear that complaints play a positive role in furthering us and may
                        be seen as a valuable tool for future product or service development.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">OMBUDSMAN</h3>
                    <p className="lead  wow fadeInUp">
                        The Financial Ombudsman Service (FOS) is an independent service get up by parliament to intervene in disputes between customers and financial institutions, when agreement
                        cannot be reached between them. It is a free service.
                        <br />
                        <br />
                        As part of our complaint handling service we must make a customer aware of their right to approach the FOS.
                        <br />
                        <br />
                        The FOS request that a complaint must first be placed before the company they are unhappy with. The FOS will assist customers with that first approach.
                        <br />
                        <br />
                        We have up to eight weeks to deal with the complaint after which, if the customer is still unhappy, they may contact the FOS at:{" "}
                        <a href="http://www.financial-ombudsman.org.uk/" target="_blank">
                            http://www.financial-ombudsman.org.uk/
                        </a>
                        <br />
                        0800 023 4 567 <br />
                        The Financial Ombudsman Service <br />
                        Exchange Tower <br />
                        London <br />
                        E14 9SR
                    </p>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
