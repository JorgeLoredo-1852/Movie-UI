export const slideInContainer = {
    initial: {
      y: "20%",
      opacity: 0,
    },
    enter: {
      y: "0",
      opacity: 1,
      transition: {
        x: { duration: 3 },
        opacity: {
          ease: "easeOut",
          duration: 1,
        },
        delayChildren: 0.85,
        staggerChildren: 0.3,
      },
    },
  };
  
  export const slideInTop = {
    initial: {
      y: "-7.5%",
      opacity: 0,
    },
    enter: {
      y: "0",
      opacity: 1,
    },
  };
  
  export const slideInBottom = {
    start: {
      y: "30px",
      opacity: 0,
    },
    end: {
      y: "0",
      opacity: 1,
    },
  };
  
  export const slideInLeft = {
    start: {
      x: "-10%",
      opacity: 0,
    },
    end: {
      x: "0",
      opacity: 1,
    },
  };
  
  export const slideInRight = {
    start: {
      x: "10%",
      opacity: 0,
    },
    end: {
      x: "0",
      opacity: 1,
    },
  };
  
  export const slideInTransition = {
    delay: 1.2,
    duration: 0.6,
  };
  
  export const slideOnScroll = {
    delay: 0.4,
    duration: 0.7,
  };