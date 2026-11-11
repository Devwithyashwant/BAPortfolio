import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: isMobile ? "top 80%" : "center center",
        end: isMobile ? "+=300 center" : "+=800 center",
        scrub: 0.5,
        pin: !isMobile,
        pinSpacing: !isMobile,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-[50vh] md:min-h-screen gap-8 md:gap-12 mt-8 md:mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center px-4 sm:px-8 contact-text-responsive">
        <p>
          “ Let's solve <br />
          <span className="font-normal">business challenges</span> &{" "}
          <span className="italic">create insights</span> <br />
          <span className="text-gold">together</span>. “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
