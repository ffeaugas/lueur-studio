import { getRandomInt, getRandomIntExcludingInterval } from '@/utils/random';
import { useState, useEffect, useRef } from 'react';

const STAR_IMAGES = [
  { src: 'svg/stars.svg', alt: 'stars' },
  { src: 'svg/star.svg', alt: 'star' },
  { src: 'svg/star.svg', alt: 'star' },
  { src: 'svg/star.svg', alt: 'star' },
  { src: 'svg/star.svg', alt: 'star' },
];

const STAR_COUNT = 30;
const MIN_STAR_SIZE = 5;
const MAX_STAR_SIZE = 25;
const STAR_SPEED = 40;

const stars = Array.from({ length: STAR_COUNT }).map((_, i) => {
  const size = getRandomInt(MIN_STAR_SIZE, MAX_STAR_SIZE);

  const top = getRandomIntExcludingInterval(5, 95, 30, 70);
  const left = getRandomIntExcludingInterval(5, 95, 30, 70);
  const img = STAR_IMAGES[getRandomInt(0, STAR_IMAGES.length - 1)];
  return {
    key: `star-${i}`,
    img,
    size,
    top,
    left,
    opacity: Math.random() * 0.7 + 0.1,
    movementFactor: (size / MAX_STAR_SIZE) * 50 * (Math.random() * 0.5 + 0.5),

    driftX: (Math.random() - 0.5) * 1,
    driftY: (Math.random() - 0.5) * 1,
    driftSpeed: Math.random() * 1 + 0.2,
    driftOffset: Math.random() * Math.PI * 2,

    baseOpacity: Math.random() * 0.7 + 0.1,
    opacitySpeed: Math.random() * 0.5 + 0.3,
    opacityOffset: Math.random() * Math.PI * 2,
    opacityRange: Math.random() * 0.6,
  };
});

const StarsBackground = ({ amount = STAR_COUNT }: { amount?: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [driftTime, setDriftTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const relativeX = (e.clientX - rect.left - centerX) / centerX;
        const relativeY = (e.clientY - rect.top - centerY) / centerY;

        setMousePosition({ x: relativeX, y: relativeY });
      }
    };

    const driftInterval = setInterval(() => {
      setDriftTime(prev => prev + 0.016); // ~60fps
    }, 16);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(driftInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full relative">
      {stars.slice(0, amount).map(star => {
        const driftPhase =
          (driftTime * star.driftSpeed + star.driftOffset) % (Math.PI * 2);
        const driftX = Math.sin(driftPhase) * star.driftX * STAR_SPEED;
        const driftY = Math.cos(driftPhase) * star.driftY * STAR_SPEED;

        const opacityPhase =
          (driftTime * star.opacitySpeed + star.opacityOffset) % (Math.PI * 2);
        const opacityVariation = Math.sin(opacityPhase) * star.opacityRange;
        const animatedOpacity = Math.max(
          0.1,
          Math.min(1, star.baseOpacity + opacityVariation)
        );

        const totalX = mousePosition.x * star.movementFactor + driftX;
        const totalY = mousePosition.y * star.movementFactor + driftY;

        return (
          <img
            key={star.key}
            src={star.img.src}
            alt={star.img.alt}
            style={{
              position: 'absolute',
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: animatedOpacity,
              pointerEvents: 'none',
              transform: `translate(${totalX}px, ${totalY}px)`,
              transition: 'transform 0.3s ease-out',
            }}
            draggable={false}
          />
        );
      })}
    </div>
  );
};

export default StarsBackground;
