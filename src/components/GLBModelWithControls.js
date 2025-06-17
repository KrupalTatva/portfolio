import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Html } from '@react-three/drei';

extend({ OrbitControls });

function ModelWithAnimations({ modelUrl, scale, position, onAnimationsLoaded }) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelUrl);
  const { actions, names = [] } = useAnimations(animations, group);

  useEffect(() => {
    const safeNames = names.filter((name) => typeof name === 'string' && name.trim() !== '');
    console.log('[Model] Loaded Animations:', safeNames);
    if (safeNames.length > 0 && actions) {
      onAnimationsLoaded(safeNames, actions);
    }
  }, [names, actions, onAnimationsLoaded]);

  return (
    <group ref={group} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
}

export default function GLBModelWithControls({
  modelUrl,
  scale = [1.5, 1.5, 1.5],
  position = [0, -1, 0],
  background = '#F0F0F000',
}) {
  const [animationNames, setAnimationNames] = useState([]);
  const actionsRef = useRef({});

  const handleAnimationsLoaded = (names, actions) => {
    setAnimationNames(names);
    actionsRef.current = actions;
  };

  const handlePlay = (name) => {
    const actions = actionsRef.current;
    if (actions && actions[name]) {
      Object.values(actions).forEach((a) => a.stop());
      actions[name].reset().fadeIn(0.3).play();
    }
  };

  const handleStop = () => {
    const actions = actionsRef.current;
    Object.values(actions).forEach((a) => a.stop());
  };

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <Canvas style={{ height: '500px', background }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense
          fallback={
            <Html center>
              <div className="loader">Loading model...</div>
            </Html>
          }
        >
          <ModelWithAnimations
            modelUrl={modelUrl}
            scale={scale}
            position={position}
            onAnimationsLoaded={handleAnimationsLoaded}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>

      {/* Dynamic Animation Buttons */}
      <div
        style={{
          marginTop: 20,
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          padding: '10px 0',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            gap: 10,
            padding: '0 10px',
          }}
        >
          {animationNames.map((name) => (
            <button
              key={name}
              onClick={() => handlePlay(name)}
              style={{
                padding: '10px 20px',
                border: '1px solid #333',
                borderRadius: '5px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
              }}
            >
              {name}
            </button>
          ))}

          {animationNames.length > 0 && (
            <button
              onClick={handleStop}
              style={{
                padding: '10px 20px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
              }}
            >
              Stop
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
