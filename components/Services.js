import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
    {
      id: 1,
      title: "SECURE INTERACTION",
      text: "Our efforts are concentrated on enhancing blockchain security, preventing double signing, ensuring redundancy, and providing continuous monitoring and backup solutions.",
    },
    {
      id: 2,
      title: "ACTIVE CONTRIBUTOR",
      text: "We support networks from their initial test-net phases, aiding in development and governance, and are included in the genesis blocks.",
    },
    {
      id: 3,
      title: "SUPPORT COMMUNITY",
      text: "We create free community tools, docs, guides, and accessible content. Dev and node operator support.",
    },
    {
      id: 4,
      title: "LOW FEES",
      text: "We prioritize minimizing fees while maintaining a high-quality node infrastructure.",
    },
    {
      id: 5,
      title: "24/7 monitoring and alerting",
      text: "Our systems are designed to self-heal, and automatically or manually switch to backups in case anything goes wrong",
    },
    {
      id: 6,
      title: ">99.9% signature rate",
      text: "Eliminating the risk of penalties and maximizing returns",
    },
  ];
  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
    </section>
  );
};
export default Services;

export const Services2 = () => {
  return (
    <section
      id="services"
      className="services-area-two pt-130 rpt-100 pb-140 rpb-100 rel z-1"
    >
    </section>
  );
};
