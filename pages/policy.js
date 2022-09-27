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
          <h3 className="fw-bold wow fadeInUp mb-3 mt-5">
            Who we are <br />
          </h3>
          <p className="lead  wow fadeInUp">
            Our website address is:{" "}
            <a href="https://giraffeteam.co.uk" target="_blanck">
              https://giraffeteam.co.uk
            </a>
          </p>
          <h3 className="fw-bold wow fadeInUp mb-3 mt-5">Comments</h3>
          <p className="lead  wow fadeInUp">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:{" "}
            <a href="https://automattic.com/privacy/" target="_blanck">
              https://automattic.com/privacy/.
            </a>{" "}
            After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
          <h3 className="fw-bold wow fadeInUp mb-3 mt-5">Media</h3>
          <p className="lead  wow fadeInUp">
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </p>
          <h3 className="fw-bold wow fadeInUp mb-3 mt-5">Cookies</h3>
          <p className="lead  wow fadeInUp">
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </p>
          <p className="lead  wow fadeInUp">
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser. When you
            log in, we will also set up several cookies to save your login
            information and your screen display choices. Login cookies last for
            two days, and screen options cookies last for a year. If you select
            “Remember Me”, your login will persist for two weeks. If you log out
            of your account, the login cookies will be removed.
          </p>
          <p className="lead  wow fadeInUp">
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie includes no personal data and
            simply indicates the post ID of the article you just edited. It
            expires after 1 day.
          </p>
          <h4 className="fw-bold wow fadeInUp mb-3 mt-5">
            Embedded content from other websites
          </h4>
          <p className="lead  wow fadeInUp">
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </p>
          <p className="lead  wow fadeInUp">
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </p>
          <h4 className="fw-bold wow fadeInUp mb-3 mt-5">
            1. Who we share your data with
          </h4>
          <p className="lead  wow fadeInUp">
            If you request a password reset, your IP address will be included in
            the reset email.
          </p>
          <h4 className="fw-bold wow fadeInUp mb-3 mt-5">
            2. How long we retain your data
          </h4>
          <p className="lead  wow fadeInUp">
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This is so we can recognize and approve any follow-up
            comments automatically instead of holding them in a moderation
            queue.
          </p>
          <p className="lead  wow fadeInUp">
            For users that register on our website (if any), we also store the
            personal information they provide in their user profile. All users
            can see, edit, or delete their personal information at any time
            (except they cannot change their username). Website administrators
            can also see and edit that information.
          </p>
          <h4 className="fw-bold wow fadeInUp mb-3 mt-5">
            3. What rights you have over your data
          </h4>
          <p className="lead  wow fadeInUp">
            If you have an account on this site, or have left comments, you can
            request to receive an exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This does
            not include any data we are obliged to keep for administrative,
            legal, or security purposes.
          </p>
          <h4 className="fw-bold wow fadeInUp mb-3 mt-5">
            4. Where we send your data
          </h4>
          <p className="lead  wow fadeInUp">
            Visitor comments may be checked through an automated spam detection
            service.
          </p>
          <h3 className="fw-bold wow fadeInUp mb-3 mt-5">Lead Forms</h3>
          <p className="lead  wow fadeInUp">
            Information collected from Tiktok / Facebook Lead Forms will only be
            used in relation to your enquiry and you can opt out of
            communication at anytime by contacting us. Your data will be
            destroyed after 6 months if we do not proceed with your enquiry.
          </p>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
