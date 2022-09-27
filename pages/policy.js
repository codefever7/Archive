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
            <PageHero title="Privacy Policy" />
            <section className="py-5">
                <Container>
                    <p className="lead  wow fadeInUp">
                        Protecting your personal information is extremely important to us at Giraffe Money. The following Privacy Notice sets out how we collect, use and store your personal data and
                        how we make sure your data is secure. This notice applies to you if you provide your personal information to us, even if you do not go ahead with an Individual Voluntary
                        Arrangement (“IVA”). <br />
                        <br />
                        If you have any questions about how we may use your personal information, please contact us using the details below.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">1. THE INFORMATION WE COLLECT</h3>
                    <p className="lead  wow fadeInUp">
                        The information we collect from you relates to assisting you with your debts, the assessment of your suitability for an IVA and if appropriate the setting up and implementation
                        of your IVA. We will only collect data that we actually need for these tasks, or where we’re required to collect the information to enable us to perform our legal, regulatory
                        or contractual obligations or if we have your permission. We will collect:
                    </p>
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>A. personal information (such as your name and date of birth)</li>
                        <li>B. your home address</li>
                        <li>C. contact information (e.g. telephone number, mobile, email)</li>
                        <li>D. special personal information (if necessary)</li>
                        <li>E. financial information</li>
                        <li>F. information about your employment</li>
                    </ul>
                    <p className="lead  wow fadeInUp">
                        If you provide us with personal information about someone else (such as a partner) please do so only with that person’s express consent. If you enter into a joint IVA, your
                        personal information and any information about the service provided to you will be shared with the other person.
                        <br />
                        <br /> We will also use the personal information about the other person as set out under the terms of this privacy notice.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">2. HOW WE COLLECT YOUR DATA</h3>
                    <p className="lead  wow fadeInUp">We collect information about you in a variety of ways:</p>
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>A. Through your enquiry/application via telephone, email, through our website, through other media channels such as WhatsApp or by other electronic means</li>
                        <li>
                            B. Information received from a third party, for example a creditor providing information about an account you hold with them, or where you have previously agreed for your
                            information to be shared with us, for example, if you have been introduced to us by another company
                        </li>
                        <li>C. By communicating with us on social media such as Facebook</li>
                        <li>D. If we may need to obtain current information about you to meet our legal or regulatory obligations such as credit searches</li>
                        <li>E. Where you have given permission for your information to be provided to us</li>
                    </ul>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">3. USING YOUR PERSONAL DATA</h3>
                    <p className="lead  wow fadeInUp">We may only use/process your personal information lawfully if it falls into one or more of the following categories:</p>
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>A. If you give specific consent</li>
                        <li>B. In order for us to meet our contractual obligations to you</li>
                        <li>C. Where we are legally required to do so</li>
                        <li>D. To protect your vital interests</li>
                        <li>E. If it is in the public interest</li>
                        <li>F. If we have a legitimate interest in doing so</li>
                    </ul>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">4. HOW GIRAFFE MONEY PROCESSES YOUR INFORMATION</h3>
                    <p className="lead  wow fadeInUp">
                        If you ask us for help or advice about your debts and/or make an application for us to assist you with an IVA, we will use your information to help us provide you with advice
                        on appropriate solutions. If this information is not available, we may not be able to advise you or assist with an IVA. The information will be used to enable us to contact you
                        via letter, email, text or telephone about your circumstances to provide advice and if relevant to keep you informed of where your IVA application is up to. In order to provide
                        you with advice on your debts we must collect the following personal data:
                    </p>
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>A. Contact details so we can advise and keep you informed of where your application is up to</li>
                        <li>B. Details of who you owe money to and your assets – to enable us to give you correct advice on your personal circumstances</li>
                        <li>C. Details of what you earn and your monthly expenditure to allow us to assess which debt solution is the most appropriate for you and advise you accordingly</li>
                        <li>D. Your personal circumstances such as your employment, details of your dependents etc. so we can provide suitable advice on financial solutions available to you</li>
                        <li>E. Any special personal data relevant to your situation if it affects the advice or recommended solution</li>
                    </ul>
                    <p className="lead  wow fadeInUp">
                        We may use information from your credit file to provide confirmation of your creditor details and any history of insolvency or outstanding county court judgements. <br />
                        We may share your information with:
                    </p>
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>
                            F. <br />
                            i. any companies we work with such as professional advisers (eg solicitors) or on an outsourced basis such as insurers or our IT service provider but this will only happen
                            if they agree to keep the information confidential. <br />
                            <br />
                            ii. With your authority or if we have a legitimate interest to do so or where we may be legally entitled to, we will share information with credit reference agencies, so we
                            can obtain information about your financial circumstances or credit commitments.
                        </li>
                    </ul>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">5. OTHER PURPOSES FOR PROCESSING YOUR PERSONAL DATA</h3>
                    <p className="lead  wow fadeInUp">
                        <strong>Client Feedback</strong>
                        <br /> Where we have a copy of your personal information, we may contact you to ask you to provide a review about the services you’ve received which may help us improve our
                        current services. Although this information would really help us, you wouldn’t be required to provide us with this information unless you were happy to. We consider that it is
                        in our legitimate interests to contact you in this way.
                    </p>
                    <p className="lead  wow fadeInUp">
                        <strong>Legal or Regulatory Obligation</strong>
                        <br /> We are required to process your personal information where we have a legal or regulatory obligation to do so, for example, to adhere to anti-money laundering or other
                        regulatory obligations.
                    </p>
                    <p className="lead  wow fadeInUp">
                        <strong>Responding to Complaints or Enquiries</strong>
                        <br /> If you make an enquiry or complaint to us, we will use your personal information to investigate the complaint and deal with your enquiry. We have a legal and regulatory
                        obligation to deal with your complaint appropriately.
                    </p>
                    <p className="lead  wow fadeInUp">
                        <strong>Internal Analysis </strong>
                        <br /> As part of our legitimate interest to develop our business we will use your personal information to assess our performance and for statistical analysis. We will use as
                        little personal data as we can to achieve this. We may also share this analysis with third parties who provide us with services and where we have a contractual obligation to do
                        so.
                    </p>
                    <p className="lead  wow fadeInUp">
                        <strong>Social Media </strong>
                        <br /> We use publicly available social media platforms to promote our services. If you post a message on our Facebook page or similar platforms you should be aware that:
                    </p>{" "}
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>A. the social media web pages are publicly available and you must not provide any personal or sensitive information on our pages that are accessible to the public; and</li>
                        <li>
                            B. each social media platform will process any personal information you provide through the platform and will be processed in accordance with its own privacy policy. The
                            privacy policies are available to view on each social media platform.
                        </li>
                    </ul>
                    <p className="lead  wow fadeInUp">
                        <strong>Cookies </strong>
                        <br /> When visiting our website, some information may be collected automatically using ‘cookies’. These are small text files that allow the processing of your data and enable
                        us to analyse how the website is being used. Cookies can be temporary or permanent.
                    </p>{" "}
                    <p className="lead  wow fadeInUp">
                        <strong>Temporary cookies are part of the security process while you are using the website; </strong>
                        <br /> permanent cookies identify the link you used to find our website, check your browser so that we can make sure that our website and services work well with your computer
                        and to help us monitor traffic on our website.
                    </p>
                    <p className="lead  wow fadeInUp">
                        in details and settings. You can turn them off – this won’t stop a website from working, but it might mean it won’t work as well as it could, or that you have to do the same
                        thing more than once. Cookies tell website owners things like: what search engine a visitor used to find the website, how often they’ve visited it, how long they’ve spent on
                        it, and so on.
                    </p>
                    <p className="lead  wow fadeInUp">The following cookies are the ones we use at Giraffe Money:</p>
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>C. Facebook conversion tracking. </li>
                        <li>
                            D. Google Analytics – this is used to collect information about how visitors use our website. They keep track of when a visitor enters and leaves the website and any search
                            engines and keywords that are used, including any personal and/or special categories of data; and
                        </li>{" "}
                        <li>E. Landbot – Online chat functionality.</li>
                    </ul>
                    <p className="lead  wow fadeInUp">For more information about cookies and how to turn them off, please visit the websites of the relevant provider.</p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">6. SHARING INFORMATION OUTSIDE THE EEA</h3>
                    <p className="lead  wow fadeInUp">
                        We will only share your personal information outside the European Economic Area (EEA), where we have your consent or to comply with a legal obligation, or where we work with a
                        business partner to enable us to provide you with our services, and they process information outside of the EEA.If we do share your information outside of the EEA, we will make
                        sure that it is protected in the same way as if it was being used in the EEA ensuring appropriate safeguards are in place. This may include putting in place a contract with the
                        business partner that means they must protect the personal data to the same standards as the EEA.More information on this can be found on the European Commission Justice
                        Website.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">7. SECURITY</h3>
                    <p className="lead  wow fadeInUp">
                        We take the protection of personal information seriously and will maintain appropriate measures to maintain the confidentiality, integrity and availability of the information
                        you have provided. Such measures include:
                    </p>{" "}
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>A. company security policies and standards</li>
                        <li>B. staff security awareness and training</li>
                        <li>C. access controls to prevent unauthorised access to the information</li>
                        <li>D. encryption</li>
                        <li>E. anti-malware technologies</li>
                        <li>F. security monitoring & testing</li>
                        <li>G. secure archiving and deletion</li>
                        <li>H. compliance with industry regulation and legislation</li>
                    </ul>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">8. CONTACTING YOU</h3>
                    <p className="lead  wow fadeInUp">
                        To help us keep you up to date about the service we provide to you and to ensure that you’re kept fully informed, we may contact you by letter, telephone, email, text message,
                        social media or may send you messages by any online customer platforms or other electronic means. If you start an application for an IVA through us we will attempt to contact
                        you shortly after if you were unable to complete your application for whatever reason.
                        <br />
                        <br />
                        If you have provided us with your consent or where we are legally entitled to do so, we may contact you to let you know about other offers, products and services that we
                        provide which may be of interest to you. We may do this through post, emails, text messages, telephone, social media or other electronic means.
                        <br />
                        <br />
                        If you do not want to be contacted in a particular way then you can request this at any time, but if we are providing a service to you, we do need to be able to send you
                        communications. This can often be due to a legal or regulatory requirement.
                        <br />
                        <br />
                        It is important that you keep us up to date when you change your contact details to ensure that we use your up to date contact information.
                        <br />
                        <br />
                        You can easily let us know at any time if you would no longer like to receive these messages using the details below.
                    </p>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">9. YOUR RIGHTS</h3>
                    <p className="lead  wow fadeInUp">
                        You have the right to request from us a copy of the personal information that we may hold about you. This is called a “Data Subject Access Request”. You can request this
                        information by contacting us as set out below. We won’t charge to provide you with this information.Before providing this information to you (or to another person or company
                        where you have requested), we may ask for proof of identity or ask sufficient questions to enable us to locate the information and ensure that we’re only providing it where you
                        have given your agreement. <br />
                        <br />
                        Right to have your personal information corrected If the personal information we hold about you is incorrect you have the right to request that we correct this.
                        <br />
                        <br />
                        Right to stop or limit the processing of the data we carry out You may request that your personal information is deleted or that we stop processing the information if we’re no
                        longer entitled to process it. There may be occasions where we are unable to delete the data due to our legal or regulatory obligations. We will however discuss this with you
                        if you request for your information to be deleted.
                        <br />
                        <br />
                        Portability In some cases, you may be able to request for your information to be provided to you or to another company in a format that can be processed electronically by you
                        or the other company. If you want to request this, you’ll need to contact us and we will do our best to accommodate your request
                    </p>{" "}
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">10. HOW LONG WE KEEP YOUR PERSONAL DATA</h3>
                    <ul className="nav flex-column lead ps-4 mb-4">
                        <li>A. This will normally be kept for 6 years. Telephone calls will be retained for at least 6 years from the date the call was made.</li>
                        <li>
                            B. If you do not go ahead with an solution, your personal information will normally be deleted after 2 years unless there is any other reason to keep your personal
                            information, for example, if you have given your consent for some other purpose.
                        </li>
                        <li>C. After the above time periods, we will delete or anonymise the data so that it cannot be linked back to you.</li>
                    </ul>
                    <h3 className="fw-bold wow fadeInUp mb-3 mt-5">CONTACT US</h3>
                    <p className="lead  wow fadeInUp">If you have any questions or queries about how we use your personal information you can contact us at the address or email below:</p>{" "}
                    <p className="lead  wow fadeInUp">
                        Giraffe Money
                        <br />
                        3a Bridgewater street
                        <br />
                        Liverpool
                        <br /> L1 0AF <br />
                        Email: hello@giraffe.money
                    </p>{" "}
                    <p className="lead  wow fadeInUp">
                        If you are not happy with how we process your personal information you should contact us in the first instance. If you’re not happy with how we have dealt with your complaint
                        you have the right to lodge a complaint with the Information Commissioner’s Office. You can find their details on their website at https://ico.org.uk/
                    </p>{" "}
                </Container>
            </section>

            <Footer />
        </div>
    );
}
