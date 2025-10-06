import { useScroll, useTransform, motion } from 'framer-motion';
import Background from './Background';
import BlurredBackground from './BlurredBackground';
import StarsBackground from './StarsBackground';

const ScrollBackgroundTransition = () => {
  const { scrollYProgress } = useScroll();

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const blurredBackgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, 1]
  );

  const starsBackgroundOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [0, 1]
  );

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: backgroundOpacity }}
      >
        <Background />
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full blur-[80px]"
        style={{ opacity: blurredBackgroundOpacity }}
      >
        <BlurredBackground />
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full z-2 pointer-events-none"
        style={{ opacity: starsBackgroundOpacity }}
      >
        <StarsBackground />
      </motion.div>
    </div>
  );
};

export default ScrollBackgroundTransition;
