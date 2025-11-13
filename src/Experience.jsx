import { OrbitControls, Text, Float } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.6} />

      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <Text fontSize={1.2} color="#00ffaa">
          Floating Text
        </Text>
      </Float>
    </>
  );
}
