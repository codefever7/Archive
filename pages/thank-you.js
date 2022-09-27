import Head from "next/head";
import Nav from "../components/Nav";
import PageHero from "../components/PageHero";
import TwoCol from "../components/TwoCol";

import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Unique from "../components/Unique";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Thankyou() {
    return (
        <div>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: ` fbq("track", "SubmitApplication"); 
                        
 
    window._tfa = window._tfa || [];
    _tfa.push({ notify: 'action',name: 'Lead' });
 

    gtag('event', 'conversion', {'send_to': 'AW-966817915/Po97CN_KyYEDEPvwgc0D'});
snaptr('track','PURCHASE')
  


`,
                    }}
                />
            </Head>

            <Nav invert={true} />
            <PageHero title="Thank you for completing the online assessment" />
            <section className="py-5">
                <Container>
                    <p className="lead  wow fadeInUp">
                        You may qualify for one of our debt solutions, however
                        we need to gather more information from you to figure
                        what is best. We’ll be calling you shortly to discuss
                        your options in more detail and give you the facts about
                        debt . If you’d like to speak to us sooner than that,
                        then please give us a call free on{" "}
                        <a href="tel: 01565 325 030"> 01565 325 030</a>.
                    </p>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
