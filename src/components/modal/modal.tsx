import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import "./modal.css"; // Import the CSS file
import { Form } from "@/features/form";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose }: CustomModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
    } else {
      setTimeout(() => setIsAnimating(false), 200);
    }
  }, [open]);

  if (!isAnimating && !open) return null;

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`modal-overlay ${open ? "fade-in" : "fade-out"}`}
          onPointerDown={onClose}
        />

        <Dialog.Content
          className={`min-h-[500px] justify-center items-center modal-content hero-modal 
              ${open ? "slide-up" : "slide-down"} 
              flex flex-col items-center text-center bg-white`}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Dialog.Close asChild>
            <button
              className="top-4 right-4 absolute modal-close-btn"
              onClick={onClose}
            >
              <X className="hover:cursor-pointer" size={24} />
            </button>
          </Dialog.Close>

          <div className="flex flex-col justify-center items-center px-6 py-4 w-full text-center">
            <Dialog.Title></Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <Form showSubtext={false} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
