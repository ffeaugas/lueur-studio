import { useState, useEffect } from 'react';

const Background = () => {
  const [oscillationOpacity1, setOscillationOpacity1] = useState(1);
  const [oscillationOpacity2, setOscillationOpacity2] = useState(1);

  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      setOscillationOpacity1(0.75 + 0.25 * Math.sin(elapsed * 1));
      setOscillationOpacity2(0.5 + 0.5 * Math.sin(elapsed * 1.2 + Math.PI / 3));

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <img
        src="home-bg-1.png"
        alt="Manoir hanté"
        className="absolute inset-0 w-full h-full object-cover z-[2]"
        style={{ opacity: 1, mixBlendMode: 'multiply' }}
      />
      <img
        src="home-bg-2.png"
        alt="Manoir hanté"
        className="absolute inset-0 w-full h-full object-cover z-[2]"
        style={{ opacity: oscillationOpacity1, mixBlendMode: 'multiply' }}
      />
      <img
        src="home-bg-3.png"
        alt="Manoir hanté"
        className="absolute inset-0 w-full h-full object-cover z-[2]"
        style={{ opacity: oscillationOpacity2, mixBlendMode: 'multiply' }}
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
        aria-hidden="true"
        style={{
          background: `linear-gradient(1deg,rgba(87, 78, 89, .2), rgba(140, 38, 157, .4))`,
        }}
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none bg-[#3B253B] opacity-10 z-[4]"
        aria-hidden="true"
      />
    </div>
  );
};

export default Background;
