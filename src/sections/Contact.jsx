import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `HAVE A BUSINESS CHALLENGE OR AN OPPORTUNITY?
I'D LOVE TO CONNECT AND EXPLORE HOW I CAN ADD VALUE.`;
  const items = [
    "GOOD QUESTIONS. BETTER ANSWERS.",
    "GOOD QUESTIONS. BETTER ANSWERS.",
    "GOOD QUESTIONS. BETTER ANSWERS.",
    "GOOD QUESTIONS. BETTER ANSWERS.",
    "GOOD QUESTIONS. BETTER ANSWERS.",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"LET'S CONNECT, LET'S COLLABORATE"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-5 sm:px-10 font-light text-white uppercase text-xl sm:text-[26px] lg:text-[32px] leading-none mb-8 sm:mb-10">
          <div className="flex flex-col w-full gap-6 sm:gap-10">
            <div className="social-link">
              <h2 className="text-lg sm:text-2xl lg:text-3xl">E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl tracking-normal sm:tracking-wider lowercase break-all">
                Yashwantk.dev@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2 className="text-lg sm:text-2xl lg:text-3xl">Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl lowercase">
                +91 9980915480
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
