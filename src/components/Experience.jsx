import { Float, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Gradient from "./First/Gradient";
import Title from "./First/Title";
import Gru from "./First/Gru";
import House from "./Second/House";
import Quote from "./Second/Quote";

const Experience = () => {
  return (
    <Canvas>
      <ambientLight />
      <ScrollControls pages={2} damping={0.5}>
        <Scroll html>
          <Title />
        </Scroll>
        <Scroll>
          <Gradient />
          <Float
            speed={1.2}
            rotationIntensity={3}
            floatIntensity={1.5}
            floatingRange={[-1, 1.1]}
          >
            <Gru />
          </Float>
        </Scroll>
        <Scroll>
          <Quote />
          <House />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Experience;
