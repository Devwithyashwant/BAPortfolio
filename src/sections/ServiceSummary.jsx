import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    const isSmall = window.innerWidth < 768;
    gsap.to("#title-service-1", {
      xPercent: isSmall ? 10 : 20,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: isSmall ? -15 : -30,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: isSmall ? 25 : 80,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: isSmall ? -25 : -80,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-12 sm:mt-20 overflow-hidden font-light leading-snug text-center mb-24 sm:mb-42 contact-text-responsive px-2 sm:px-0">
      <div id="title-service-1">
        <p className="font-normal">Business Analysis</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-2 sm:gap-3 translate-x-4 sm:translate-x-16"
      >
        <p className="font-normal">SQL</p>
        <div className="w-5 h-0.5 sm:h-1 sm:w-16 md:w-32 bg-gold shrink-0" />
        <p className="italic">Excel</p>
        <div className="w-5 h-0.5 sm:h-1 sm:w-16 md:w-32 bg-gold shrink-0" />
        <p>Power BI</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-2 sm:gap-3 -translate-x-8 sm:-translate-x-48"
      >
        <p className="whitespace-nowrap">Jira & Agile</p>
        <div className="w-5 h-0.5 sm:h-1 sm:w-16 md:w-32 bg-gold shrink-0" />
        <p className="italic whitespace-nowrap">Requirements Engineering</p>
      </div>
      <div id="title-service-4" className="translate-x-6 sm:translate-x-48">
        <p>Process Mapping</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
