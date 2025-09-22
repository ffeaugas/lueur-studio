import { motion } from 'framer-motion';

interface ScrollButtonProps {
  scrollDown: (targetId?: string) => void;
}

const ScrollButton = ({ scrollDown }: ScrollButtonProps) => {
  return (
    <motion.button
      onClick={() => scrollDown()}
      className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 z-100 group rounded-full p-6 cursor-pointer circular-blur"
      aria-label="Faire défiler vers le bas"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
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
