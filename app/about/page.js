import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
// import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";
import './txt.css';

export const metadata = {
  title: "About Us",
};

const About = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"About Us"} />

      <div className="about-main-image-area pt-40">
      <div className="container">
  <div className="about-main-image wow fadeInUp delay-0-5s">
    <img className="about-image" height="600px" src="assets/images/about/about-page.png" alt="About Page" />
    <div className="text-about">
      Quadro Network is a collective deeply immersed in the realm of blockchain safety, with a keen emphasis on non-custodial staking solutions. Established in 2021, our team is at the helm of operating validators across premier Proof of Stake networks. Our portfolio is in constant expansion, mirroring the growth of the blockchain ecosystem, as we meticulously choose to engage with the most promising ventures. Our commitment extends beyond mere participation; we actively involve ourselves in the networks we endorse from their nascent testnet phases. This engagement allows us to contribute to their evolution and assert our influence within their governance frameworks. It is with great pride that we highlight our presence in the genesis blocks of some of the most esteemed networks, a testament to our foundational principle at Quadro.Network. Our dedication lies in furnishing our clients with robust staking solutions, ensuring their digital assets security and integrity.
    </div>
  </div>
</div>

      </div>
      {/* About Page Area start */}
      <section className="about-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 mob_cont">
              <div className="about-page-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Us</span>
                  <h2>
                    Professional <span>Problem Solving</span> For Decentralization Products
                  </h2>
                  <p>
                  I offer you various services such as:
                  </p>
                </div>
                <ul className="list-style-one two-column pb-30 wow fadeInUp delay-0-2s">
                  <li>Written guides &amp;  instructions</li>
                  <li>Snapshots, RPC, API, Statesinks</li>
                  <li>Various instructions for relayers</li>
                  <li>Node installation procedures</li>
                </ul>
                <Link legacyBehavior href="/">
                  <a className="theme-btn wow fadeInUp delay-0-2s">
                    Learn More <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-right-part wow fadeInLeft delay-0-3s">
                <div className="experience-years">
                  <b>7+</b>
                  <h5>YEARS OF EXPERIENCE IN DEVELOPMENT AND VALIDATION</h5>
                </div>
                <div className="about-btn one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Experienced Validator</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn two wow fadeInRight delay-0-5s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Experienced Ambassador</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn three wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Experienced Full-Stack Developer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape one">
                  <img
                    src="assets/images/shape/about-dots-two.png"
                    alt="Shape"
                  />
                </div>
                <div className="dot-shape two">
                  <img
                    src="assets/images/shape/about-dots-two.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Page Area end */}
      {/* Services Area start */}
      {/* <Services extraClass={"bgc-black"} /> */}
      {/* Services Area end */}
      {/* FAQs Area start */}
      <section id="faqs" className="faqs-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="image-one">
                  <img src="assets/images/faqs/faq-one.png" alt="FAQ" />
                </div>
                <div className="image-two">
                  <img src="assets/images/faqs/faq-two.png" alt="FAQ" />
                </div>
                <div className="square-shape" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content-part rel z-2">
                <div className="section-title mb-40 wow fadeInUp delay-0-4s">
                  <h2>
                  Professional Problem Solving <span>For Decentralization</span>{" "}
                  Products
                  </h2>
                </div>
                <Faq />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="client-logo-area rel z-1 pt-130 rpt-100 pb-60">
      <div className="container">
        <div className="row justify-content-center">

         
         
        </div>
        <div className="client-logo-wrap">
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/client-logos/Archway.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-3s">
              <img
                src="assets/images/client-logos/QuicksilverProtocol.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/client-logos/Umee.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-5s">
              <img
                src="assets/images/client-logos/Sei.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/client-logos/humans.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/client-logos/EvmosisHiring.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-3s">
              <img
                src="assets/images/client-logos/Stride.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/client-logos/celestia.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-5s">
              <img
                src="assets/images/client-logos/solana.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/client-logos/AuraNetwork.svg"
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
      </section>
      {/* FAQs Area end */}
      {/* Testimonial Area start */}
      {/* <Testimonial /> */}
      {/* Testimonial Area end */}
      {/* Client Log start */}
  
    </NoxfolioLayout>
  );
};
export default About;
