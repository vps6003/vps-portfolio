import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 50 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
