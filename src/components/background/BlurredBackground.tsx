import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { Canvas } from '@react-three/fiber';
import { getRandomPurpleColor } from '@/utils/random';

const BlurredBackground = () => {
  return <Scene3D />;
};

export default BlurredBackground;

function Scene3D() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        orthographic
        camera={{
          zoom: 65,
        }}
        className="bg-[#121117]"
      >
        <ambientLight intensity={0.5} />

        {Array.from({ length: 8 }).map((_, index) => (
          <SimpleCube
            key={index}
            x={Math.random() * 30 - 15}
            y={Math.random() * 15 - 7.5}
            z={Math.random() * 30 - 30}
            color={getRandomPurpleColor()}
          />
        ))}
      </Canvas>
    </div>
  );
}

function SimpleCube({
  x,
  y,
  z,
  color,
}: {
  x: number;
  y: number;
  z: number;
  color: string;
}) {
  const meshRef = useRef<Mesh>(null!);
  const [currentPosition] = useState(new Vector3(x, y, z));
  const [targetPosition, setTargetPosition] = useState(new Vector3(x, y, z));
  const [dimensions] = useState<[number, number, number]>(() => [
    Math.random() * 3 + 1,
    Math.random() * 3 + 1,
    Math.random() * 3 + 1,
  ]);

  useEffect(() => {
    const generateNewTarget = () => {
      const newTarget = new Vector3(
        Math.random() * 40 - 20, // x: [-20, 20]
        Math.random() * 20 - 10, // y: [-10, 10]
        Math.random() * 30 - 30 // z: [-30, 0]
      );
      setTargetPosition(newTarget);
    };

    const initialDelay = Math.random() * 9000 + 1000;
    const initialTimeout = setTimeout(generateNewTarget, initialDelay);

    const interval = setInterval(generateNewTarget, initialDelay);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      currentPosition.lerp(targetPosition, delta * 0.1);
      meshRef.current.position.copy(currentPosition);

      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
      <boxGeometry args={dimensions} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
