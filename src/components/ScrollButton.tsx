import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ScrollButtonProps {
  scrollDown: (targetId?: string) => void;
}

const ScrollButton = ({ scrollDown }: ScrollButtonProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollTop / (documentHeight - windowHeight);

      setIsVisible(scrollPercent < 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      onClick={() => scrollDown()}
      className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 z-100 group rounded-full p-6 cursor-pointer circular-blur"
      aria-label="Faire défiler vers le bas"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <img
        src="svg/arrow.svg"
        alt="cliquez pour scroller"
        className="w-8 h-8 rotate-180"
      />
    </motion.button>
  );
};

export default ScrollButton;
