import { OrbitControls, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const textRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!textRef.current) return;
    textRef.current.rotation.x = mouse.y * 0.5;
    textRef.current.rotation.y = -mouse.x * 0.5;
  });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <Text ref={textRef} fontSize={1.2} color="#ff8800" anchorX="center" anchorY="middle">
        Interactive Text
      </Text>
    </>
  );
}
