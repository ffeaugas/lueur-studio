import { useScroll, useTransform, motion } from 'framer-motion';
import Background from './Background';
import BlurredBackground from './BlurredBackground';

const ScrollBackgroundTransition = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to opacity values
  // Background fades out as we scroll down
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // BlurredBackground fades in as we scroll down
  const blurredBackgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, 1]
  );

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      {/* Background component with scroll-based opacity */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: backgroundOpacity }}
      >
        <Background />
      </motion.div>

      {/* BlurredBackground component with scroll-based opacity */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: blurredBackgroundOpacity }}
      >
        <BlurredBackground />
      </motion.div>
    </div>
  );
};

export default ScrollBackgroundTransition;
