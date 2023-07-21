import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useMousePosition } from '../'

const Computers = ( {isMobile} ) => {
  const mousePosition = useMousePosition();
  const computer = useGLTF('./planet/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        costShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.2 : 0.75}
        position={isMobile ? [0, -3, 2.2] : [0,-1*mousePosition.y+200,-1*mousePosition.x+700]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => 
{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => 
  {
    const mediaQuery = window.matchMedia(
      '(max-width:500px)');

      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => 
      {
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change',
      handleMediaQueryChange);

      return () => 
      {
        mediaQuery.removeEventListener('change',
        handleMediaQueryChange);
      }
  }, [])

  return(
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [500, 0, 0], fov: 500 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas