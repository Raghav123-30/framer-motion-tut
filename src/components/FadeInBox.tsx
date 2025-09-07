import { motion } from "motion/react";

const FadeInBox = () => {
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="bg-white rounded-md shadow-md ring ring-gray-100 px-8 py-10"
    >
      <h1 className="text-xl md:text-3xl font-bold text-slate-950 mb-8">
        This is an animated fade in box
      </h1>
      <p className="text-sm text-gray-600">Framer motion is awesome</p>
    </motion.div>
  );
};

export default FadeInBox;
