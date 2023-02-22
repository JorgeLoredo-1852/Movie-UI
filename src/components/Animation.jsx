import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const ScrollAnimatable = ({
  animation,
  animate,
  initial,
  offset = 0.1,
  transition,
  children,
  wrapperClassName = "animatable-wrapper",
  style,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: offset, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start(animate);
  }, [animate, controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initial}
      variants={animation}
      transition={transition}
      className={wrapperClassName}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatable;
