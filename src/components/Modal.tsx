import { AnimatePresence, motion } from "motion/react";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
} & React.ComponentProps<"div">;

const Modal = ({ ref, open, handleClose }: ModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="absolute inset-0 bg-black/50 ">
          <motion.div
            key={"modal-overlay"}
            exit={{ y: 50, opacity: 0 }}
            ref={ref}
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
            className="bg-white z-20 rounded-md shadow-md ring ring-gray-100 px-8 py-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px]"
          >
            <h1 className="text-xl md:text-3xl font-bold text-slate-950 mb-8">
              This is an animated modal
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Framer motion is awesome
            </p>
            <button
              className="px-8 py-4 text-white font-bold bg-red-500 hover:bg-red-300 rounded-md shadow-md"
              onClick={handleClose}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
