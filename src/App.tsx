import { useEffect, useRef, useState } from "react";

import Modal from "./components/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const onKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  const onOutsideClick = (event: globalThis.MouseEvent) => {
    if (
      event &&
      event.target &&
      !modalRef.current?.contains(event.target as Node)
    ) {
      closeModal();
    }
  };
  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("click", onOutsideClick);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onOutsideClick);
    };
  }, [open]);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
      <Modal open={open} ref={modalRef} handleClose={() => setOpen(false)} />

      <button
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
        className="bg-slate-900 px-8 py-4 text-white font-bold rounded-md shadow-md hover:bg-slate-700"
      >
        Open modal
      </button>
    </div>
  );
}
