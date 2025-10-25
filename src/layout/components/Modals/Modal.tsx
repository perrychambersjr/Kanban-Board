import { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children}: ModalProps) => {
  if (!isOpen) return null;
    
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4 rounded-xl bg-white text-black dark:bg-[var(--color-main-dark-grey)] dark:text-white p-6 shadow-2xl">
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  )
}

export default Modal