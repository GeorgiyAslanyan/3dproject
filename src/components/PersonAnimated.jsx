import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Person } from "../models/Person";



const PersonAnimated = () => {
  return (
    <>
      <group position={[0, -1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <Person />
      </group>
      <group>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        >
          <planeBufferGeometry args={[100, 100]} attach={"geometry"} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </group>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[50, 50, 0]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <OrbitControls enableZoom={false} />
    </>
  );
};

export default PersonAnimated;
