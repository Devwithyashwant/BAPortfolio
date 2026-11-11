import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `PASSIONATE ABOUT SOLVING REAL BUSINESS PROBLEMS
I TRANSFORM DATA AND REQUIREMENTS INTO ACTIONABLE INSIGHTS
BRIDGING THE GAP BETWEEN BUSINESS AND TECHNOLOGY`;
  const aboutText = `I enjoy understanding business challenges, analysing data and translating requirements into practical solutions. My Computer Science and Design background helps me connect technology, people and business goals effectively.
**When I'm not analysing:**
- Exploring data and uncovering insights.
- Solving real-world business problems.
- Building dashboards with SQL, Excel and Power BI.
- Learning Agile, Jira and process improvement.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"CURIOUS MIND, ANALYTICAL THINKING, BUSINESS IMPACT"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src={`${import.meta.env.BASE_URL}images/man.jpg`}
          alt="Yashwant K"
          className="w-md rounded-3xl object-cover"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
