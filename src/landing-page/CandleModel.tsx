// import { Canvas } from '@react-three/fiber';
// import { useGLTF, OrbitControls } from '@react-three/drei';
// import { Suspense } from 'react';

// const CandleScene = () => {
//   const { scene } = useGLTF('/models/candlestick-6.glb');

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={2} />
//       <primitive object={scene} scale={1} position={[0, -2, 0]} />

//       <pointLight position={[0.1, 1.95, 0]} intensity={20} color="orange" />

//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         minPolarAngle={Math.PI / 2}
//         maxPolarAngle={Math.PI / 2}
//         autoRotate
//         autoRotateSpeed={2} // slow rotation
//       />
//     </>
//   );
// };

const CandleModel = () => {
  return (
    // <div className="w-[456px] h-[500px] z-1 mr-[30px] cursor-grabbing">
    //   <Canvas camera={{ position: [0, -2, 6.5], fov: 45 }}>
    //     <Suspense fallback={null}>
    //       <CandleScene />
    //     </Suspense>
    //   </Canvas>
    // </div>
    <img src="candle.png" alt="bougie" className="w-[456px] h-[456px] z-1" />
  );
};

export default CandleModel;
