import { OrbitControls, Text } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <Text
        fontSize={1.1}
        color="hotpink"
        outlineWidth={0.05}
        outlineColor="#fff"
        fillOpacity={0.85}
        anchorX="center"
        anchorY="middle"
      >
        Dream Big
      </Text>
    </>
  );
}
