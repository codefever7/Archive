import Head from "next/head";
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "./Link";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSticky: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  componentDidMount() {
    function afterReveal(el) {
      el.setAttribute("animated", true);
    }

    new WOW({ callback: afterReveal }).init();

    if (window.innerWidth < 991) {
      this.setState({
        isSticky: true,
      });
    } else {
      window.addEventListener("scroll", this.handleScroll);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    const yOff = window.pageYOffset;
    const nav = document.querySelector(".navbar");
    if (yOff > 100) {
      this.setState({
        isSticky: true,
      });
      nav.classList.add("sticky");
    } else {
      this.setState({
        isSticky: false,
      });
      nav.classList.remove("sticky");
    }
  }
  handleNavigation() {
    document.querySelector(".navbar-collapse").classList.toggle("active");
    document.querySelector(".navbar-toggler").classList.toggle("active");
  }
  render() {
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta
            name="facebook-domain-verification"
            content="3bm1ly73vxxm80hfsqsigswqfai36c"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Poppins:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-757527664" /> */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display: none;" src="https://www.facebook.com/tr?id=417698285300294&ev=PageView&noscript=1" /> `,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-112444726-3"
          ></script>
          <script
            async
            src="https://cdn.taboola.com/libtrc/taboolaaccount-teamyourdebtsupportcouk/tfa.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `  !(function (e, t, n, s, u, a) {
                                e.twq ||
                                    ((s = e.twq = function () {
                                        s.exe
                                            ? s.exe.apply(s, arguments)
                                            : s.queue.push(arguments);
                                    }),
                                    (s.version = "1.1"),
                                    (s.queue = []),
                                    (u = t.createElement(n)),
                                    (u.async = !0),
                                    (u.src = "//static.ads-twitter.com/uwt.js"),
                                    (a = t.getElementsByTagName(n)[0]),
                                    a.parentNode.insertBefore(u, a));
                            })(window, document, "script");
                            // Insert Twitter Pixel ID and Standard Event data below
                            twq("init", "o2xz3");
                            twq("track", "PageView");
                            
                            (function (h, o, t, j, a, r) {
                                h.hj =
                                    h.hj ||
                                    function () {
                                        (h.hj.q = h.hj.q || []).push(arguments);
                                    };
                                h._hjSettings = { hjid: 849555, hjsv: 6 };
                                a = o.getElementsByTagName("head")[0];
                                r = o.createElement("script");
                                r.async = 1;
                                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(
                                window,
                                document,
                                "https://static.hotjar.com/c/hotjar-",
                                ".js?sv="
                            );

                            !(function (f, b, e, v, n, t, s) {
                                if (f.fbq) return;
                                n = f.fbq = function () {
                                    n.callMethod
                                        ? n.callMethod.apply(n, arguments)
                                        : n.queue.push(arguments);
                                };
                                if (!f._fbq) f._fbq = n;
                                n.push = n;
                                n.loaded = !0;
                                n.version = "2.0";
                                n.queue = [];
                                t = b.createElement(e);
                                t.async = !0;
                                t.src = v;
                                s = b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t, s);
                            })(
                                window,
                                document,
                                "script",
                                "https://connect.facebook.net/en_US/fbevents.js"
                            );
                            fbq("init", "417698285300294");
                            fbq("track", "PageView");
 var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?25775';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#4dc247",
      "ctaText":"",
      "borderRadius":"25",
      "marginLeft":"0",
      "marginBottom":"50",
      "marginRight":"50",
      "position":"right"
  },
  "brandSetting":{
      "brandName":"Giraffe Money",
      "brandSubTitle":"Typically replies within minutes",
      "brandImg":"https://www.giraffe.money/images/giraffee-yellow.jpeg",
      "welcomeText":"Hello 👋, thank you for contacting Giraffe Money, We've helped lots of people reduce their debt, so you're in safe hands! How can we help today?",
      "messageText":"",
      "backgroundColor":"#0a5f54",
      "ctaText":"Start Chat",
      "borderRadius":"25",
      "autoShow":false,
      "phoneNumber":"447393100874"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);

                        

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-112444726-3');
  gtag('config', 'AW-966817915'); 


 
  window._tfa = window._tfa || [];
  window._tfa.push({notify: 'event', name: 'page_view', id: 1135234});
  !function (t, f, a, x) {
         if (!document.getElementById(x)) {
            t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
         }
  }(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/unip/1135234/tfa.js',
  'tb_tfa_script');
 
 
    window._tfa = window._tfa || [];
    _tfa.push({ notify: 'action',name: 'page_view' });
 

    <!-- Taboola Pixel Code -->
 
  window._tfa = window._tfa || [];
  window._tfa.push({notify: 'event', name: 'page_view', id: 1360515});
  !function (t, f, a, x) {
         if (!document.getElementById(x)) {
            t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
         }
  }(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/unip/1360515/tfa.js',
  'tb_tfa_script');
 
<!-- End of Taboola Pixel Code -->

(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');

snaptr('init', '4e2ed0e8-79ea-404c-9d39-99e92de3cdad', {
'user_email': '__INSERT_USER_EMAIL__'
});

snaptr('track', 'PAGE_VIEW');


!function (w, d, t) {
		  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
		
		  ttq.load('C7O361402NENBMQ1JQNG');
		  ttq.page();
		}(window, document, 'ttq');
        

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDMBD2M');


                            `,
            }}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon.png"
          />
          <title>Giraffe Advice | Get advice with the team</title>{" "}
          <div id="fb-root"></div>
          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id="345231035885640"
          ></div>
        </Head>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDMBD2M"
height="0" width="0" style="display:none;visibility:hidden"></iframe> `,
          }}
        />
        <Navbar
          bg="light"
          variant="light"
          expand="lg"
          className={this.props.invert ? "white" : ""}
        >
          <Container className="justify-content-center">
            <Navbar.Brand href="/#">
              <img
                src="/images/logo.svg"
                className="d-block m-auto"
                alt="logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default MainNav;
