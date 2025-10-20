import { AnimatePresence , motion } from "framer-motion";

export const AnimatedContent = (props) => {
  
  return (
    <div className={props.className}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -50 }} // start slightly left and transparent
          animate={{ opacity: 1, x: 0 }} // animate to normal position
          exit={{ opacity: 0, x: 50 }} // slide out to right on exit
          transition={{ duration: 0.5 }} // animation duration
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
