import { OrbitControls, Sphere, useHelper } from "@react-three/drei";
import React, { Suspense, useCallback, useMemo, useRef } from "react";
import { PointLightHelper } from "three";
import { useControls } from "leva";
import circleImg from "/texture/circle.png";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

const SphereScene = () => {
  const imgTexture = useLoader(THREE.TextureLoader, circleImg);

  const lightRef = useRef(null);
  useHelper(lightRef, PointLightHelper, 1, "red");

  return (
    <Suspense fallback={null}>
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI/2,0]}>
        <torusKnotGeometry args={[1, 0.4, 172, 14]} />
        <meshNormalMaterial />
      </mesh>

      <OrbitControls autoRotate autoRotateSpeed={0.7} enableZoom={false} />
    </Suspense>
  );
};

export default SphereScene;
