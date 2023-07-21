import { Suspense } from "react"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./mars/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="orange" />
      <primitive
        object={earth.scene}
        scale={0.8}
        position-y={-1}
        rotation-y={0}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadowsframeLoop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;