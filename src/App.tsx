import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-neutral-900">
      <motion.button
        initial={{
          opacity: 0,
          x: "-100%",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-neutral-400 px-12 py-4 rounded-lg bg-black  shadow-md cursor-pointer"
      >
        Lets get started
      </motion.button>
    </div>
  );
}
