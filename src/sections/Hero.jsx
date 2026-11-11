import React, { Suspense, Component } from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.warn("Canvas 3D WebGL error caught:", err);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help businesses turn complex data into
clear insights, smarter decisions
and measurable growth.`;
  return (
    <section id="home" className="relative flex flex-col justify-end min-h-[100dvh] overflow-hidden">
      <AnimatedHeaderSection
        subTitle={"Business Analyst"}
        title={"Yashwant K"}
        text={text}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50 pointer-events-none w-full h-[100dvh] overflow-hidden"
      >
        <CanvasErrorBoundary>
          <Canvas
            shadows
            camera={{ position: isMobile ? [0, 0.3, -10] : [0, 0, -10], fov: isMobile ? 20 : 17.5, near: 1, far: 20 }}
          >
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Float speed={0.5}>
              <Planet scale={isMobile ? 0.62 : 1} />
            </Float>
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 4, 1]}>
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 5, -9]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 3, 1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[-5, -1, -1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[10, 1, 0]}
                  scale={16}
                />
              </group>
            </Environment>
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </figure>
    </section>
  );
};

export default Hero;
