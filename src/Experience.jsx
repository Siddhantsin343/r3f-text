import { OrbitControls, Text, Float } from "@react-three/drei";
import { useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Experience() {
  const textRef = useRef();

  return (
    <>
      {/* Camera Controls */}
      <OrbitControls makeDefault />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Floating 3D Text */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Text
          ref={textRef}
          fontSize={1}
          color="#00ffff"
          outlineWidth={0.03}
          outlineColor="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          I love R3F
        </Text>
        <EffectComposer>
  <Bloom intensity={1.5} luminanceThreshold={0} luminanceSmoothing={0.9} />
</EffectComposer>
      </Float>
    </>
  );
}
