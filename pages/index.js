import Head from "next/head";
import Nav from "../components/Nav";
import Solution from "../components/Solution";
import Footer from "../components/Footer";

export default function SolutionFinder() {
    return (
        <div>
            <Head></Head>
            <Nav />
            <Solution b={true} />
            {/* <Footer /> */}
        </div>
    );
}
