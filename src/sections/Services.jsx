import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Services = () => {
  const text = `I TRANSLATE BUSINESS REQUIREMENTS INTO CLEAR, ACTIONABLE INSIGHTS,
USING DATA, STRUCTURED ANALYSIS AND PROCESS IMPROVEMENT
TO HELP TEAMS MAKE SMARTER BUSINESS DECISIONS.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 100,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        duration: 0.8,
        ease: "circ.out",
        clearProps: "transform",
      });
    });
  }, []);
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl pb-16">
      <AnimatedHeaderSection
        subTitle={"BEHIND THE DATA, BEYOND THE NUMBERS"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-5 sm:px-10 pt-6 pb-10 sm:pb-12 text-white bg-black border-t-2 border-white/30 shadow-2xl"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : {
                  top: `calc(8vh + ${index * 3.5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 3.5}rem`,
                }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-4 sm:gap-6 w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light leading-snug">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed tracking-normal sm:tracking-wide text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-base sm:text-xl lg:text-3xl text-white/80 mt-2">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex items-baseline">
                      <span className="mr-5 sm:mr-12 text-xs sm:text-base text-white/40 font-mono">
                        0{itemIndex + 1}
                      </span>
                      <span>{item.title}</span>
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
