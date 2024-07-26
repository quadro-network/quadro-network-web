"use client";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <Accordion
      defaultActiveKey="collapseTwo"
      className="accordion wow fadeInUp delay-0-4s"
      id="faq-accordion"
    >
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button"
            eventKey="collapseOne"
          >
            What We Care About People ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseOne"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <p>
            Our blockchain world is digital and fascinating. But it exists for the sake of humankind and the betterment of our lives. So it's only logical to base our approach on making people the center of our strategy. We aim to set a higher standard for you and our partners. If you have questions that need answers, you can count on us at any time of day.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseTwo"
          >
            How Many Years Of Experience ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseTwo"
          className="accordion-collapse"
        >
          <div className="accordion-body">
            <p>
            The advent of the digital age has brought about a significant transformation in our world, where speed and efficiency are now paramount. The blockchain ecosystem, in particular, has undergone rapid changes and developments in recent times, creating a fast-paced environment that demands quick and decisive action.
            With 7 years of experience in the ecosystem, it is imperative for us to make informed and accurate decisions, be highly efficient in our tasks and exercise wisdom in all our actions.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseThree"
          >
           Do We have Professional Team Members?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseThree"
          className="accordion-collapse"
        >
          <div className="accordion-body">
            <p>
            We strongly believe in the power of relationships. Connecting and working closely with different blockchain sectors is extremely important for us. It allows us to release our full potential, expand our scale, and grow our community inside and outside the company. The only way for the crypto industry will reach mass adoption is when we unite and work together.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseFour"
          >
            Our Quality ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseFour"
          className="accordion-collapse "
        >
          <div className="accordion-body">
            <p>
            Our team is deeply committed to providing top-quality services to our clients and the broader blockchain community. We are passionate about maintaining the highest standards of quality in all our work and are dedicated to achieving this objective through the use of dedicated servers and a focus on customer satisfaction. We are excited about the ecosystem and the opportunities it presents, and we remain firmly committed to making a positive contribution to the growth and development of the blockchain industry as a whole.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
};
export default Faq;
