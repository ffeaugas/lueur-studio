import { useState, useEffect, useRef } from 'react';

const STAR_IMAGES = [
  { src: 'svg/stars.svg', alt: 'stars' },
  { src: 'svg/star.svg', alt: 'star' },
  { src: 'svg/star.svg', alt: 'star' },
  { src: 'svg/star.svg', alt: 'star' },
  { src: 'svg/star.svg', alt: 'star' },
];

const STAR_COUNT = 20;
const MIN_STAR_SIZE = 5;
const MAX_STAR_SIZE = 30;

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
  };
});

const StarsBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  console.log({ ...stars[0] });

  return (
    <div ref={containerRef} className="h-full w-full relative">
      {stars.map(star => (
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
            opacity: star.opacity,
            pointerEvents: 'none',
            transform: `translate(${mousePosition.x * star.movementFactor}px, ${mousePosition.y * star.movementFactor}px)`,
            transition: 'transform 0.3s ease-out',
          }}
          draggable={false}
        />
      ))}
    </div>
  );
};

export default StarsBackground;

function getRandomIntExcludingInterval(
  min: number,
  max: number,
  excludeMin: number,
  excludeMax: number
) {
  const lowerRange = excludeMin - min;
  const upperRange = max - excludeMax;
  const totalRange = lowerRange + upperRange;
  const rand = Math.random() * totalRange;
  if (rand < lowerRange) {
    return Math.floor(min + rand);
  } else {
    return Math.floor(excludeMax + (rand - lowerRange));
  }
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
