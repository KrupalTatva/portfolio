import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url, scale = [1, 1, 1], position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
};

const GLBModelViewer = ({
  modelUrl,
  scale,
  position,
  rotation,
  background = '#FFFFFF00',
  cameraPosition = [0, 1, 5],
}) => {
  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Canvas camera={{ position: cameraPosition }} style={{ background }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model url={modelUrl} scale={scale} position={position} rotation={rotation} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GLBModelViewer;
