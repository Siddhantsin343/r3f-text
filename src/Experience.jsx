import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Experience() {
  const textRef = useRef();

  useFrame(({ clock }) => {
    if (!textRef.current) return;
    textRef.current.children.forEach((char, i) => {
      char.position.y = Math.sin(clock.getElapsedTime() * 2 + i * 0.3) * 0.2;
    });
  });

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.6} />

      <Text ref={textRef} fontSize={0.9} color="#ff66cc" anchorX="center" anchorY="middle">
        Wavy Motion
      </Text>
    </>
  );
}
