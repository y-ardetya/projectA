import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import image from "/dis.jpg";
import { useRef } from "react";
import gradientVertex from "../First/shader/GradientVertex.glsl";
import gradientFragment from "../First/shader/GradientFragment.glsl";
import { MirroredRepeatWrapping } from "three";

const Gradient = () => {
  //* texture

  const displace = useTexture(image);
  displace.wrapS = MirroredRepeatWrapping;
  displace.wrapT = MirroredRepeatWrapping;

  //* Shader Material

  const GradientMaterial = shaderMaterial(
    {
      uTime: 0,
      uDisplace: displace,
    },
    gradientVertex,
    gradientFragment
  );
  extend({ GradientMaterial });

  //*Width and Height

  const { width, height } = useThree((state) => state.viewport);

  //*Ref
  const ref = useRef();

  //*animate uTime
  useFrame((state, delta) => {
    ref.current.uTime += delta * 1.1;
  });

  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <gradientMaterial ref={ref} />
    </mesh>
  );
};

export default Gradient;
