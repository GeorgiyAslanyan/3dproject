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
      {/* <mesh position={[0,0,0]}>
          <torusKnotGeometry  args={[10, 1.3, 700, 6, 6, 20]}/>
          <meshStandardMaterial emissive={"blue"} emissiveIntensity={2} toneMapped={false}/>
        </mesh> */}
        <points>
          <sphereGeometry parameters={[40,40,40]} attach="geometry">
          
        </sphereGeometry>
        <pointsMaterial
          attach="material"
          map={imgTexture}
          color={"#ADD8E6"}
          size={0.009}
          sizeAttenuation
          transparent={true}
          alphaTest={0}
          opacity={1.0}
        />
        </points>
        <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <Bloom
          intensity={0.7}
          luminanceThreshold={0}
          luminanceSmoothing={0.8}
          height={600}
        />
      </EffectComposer>
        
      <OrbitControls autoRotate autoRotateSpeed={0.4} enableZoom={false} />
    </Suspense>
  );
};

export default SphereScene;
