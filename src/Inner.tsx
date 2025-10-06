import { motion } from 'framer-motion';

export default function Inner({ children }: { children: React.ReactNode }) {
  return (
    <motion.div>
      <motion.span
        className="absolute inset-0 w-full h-full z-30 bg-dark"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      ></motion.span>

      {/* {Array.from({ length: 10 }).map((_, index) => (
        <motion.span
          key={index}
          className="fixed w-[10%] h-full z-30 bg-dark hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1, display: 'block' }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          style={{ left: `${index * 10}%` }}
        ></motion.span>
      ))} */}

      <motion.span
        className="fixed w-full h-full z-30 bg-dark hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1, display: 'block' }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => {
          window.scrollTo(0, 0);
        }}
      ></motion.span>

      {children}
    </motion.div>
  );
}
