import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import React, { Suspense, useCallback, useMemo, useRef } from "react";
import circleImg from "/texture/circle.png";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import {
  Bloom,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";

const SceneContainer = () => {
  const imgTexture = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  const count = 150;
  const separation = 3;

  let t = 1;
  let f = 0.001;
  let a = 5;

  const graph = useCallback(
    (x, z) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );

  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = separation * (xi - count / 2);
        let z = separation * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, separation, graph]);

  useFrame(() => {
    t += 15;
    const positions = bufferRef.current.array;

    let i = 0;

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = separation * (xi - count / 2);
        let z = separation * (zi - count / 2);
        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <Suspense fallback={null}>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            ref={bufferRef}
            attach="attributes-position"
            array={positions}
            itemSize={3}
            count={positions.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          map={imgTexture}
          color={"black"}
          size={0.5}
          sizeAttenuation
          transparent={false}
          alphaTest={0.5}
          opacity={1.0}
        />
      </points>
     <PerspectiveCamera position={[10,10,30]}/>
    
      <OrbitControls autoRotate autoRotateSpeed={0.4} enableZoom={false}/>
      <directionalLight />
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <Bloom
          intensity={0.4}
          luminanceThreshold={0}
          luminanceSmoothing={0.8}
          height={600}
        />
      </EffectComposer>
    </Suspense>
  );
};

export default SceneContainer;
