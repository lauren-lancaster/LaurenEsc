/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

function Model(props: any) {
  const { scene } = useGLTF('/images/esclogo.glb')
  return <primitive object={scene} {...props} />
}

function ESCLogo() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: 'absolute', width: '50vw', height: '60vh' }}
      >
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={'studio'}>
            <Model scale={0.05} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  )
}

export default ESCLogo
