import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect } from "react";
interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Modal = ({ open, setOpen }: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="bg-red-400 hover:bg-orange-600 mt-6 px-6 py-3 border-2 hover:border-orange-600 border-red-400 rounded-lg font-semibold text-orange-100 hover:text-white text-2xl transition bold">
          צרו קשר
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Background Overlay */}
        <Dialog.Overlay className="fixed inset-0 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />

        {/* Modal Content */}
        <Dialog.Content className="top-1/2 left-1/2 fixed bg-white shadow-lg p-6 rounded-lg w-[90vw] max-w-[500px] max-h-[85vh] -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-scaleUp data-[state=closed]:animate-scaleDown radix-dialog-content transform">
          <Dialog.Title className="m-0 font-medium text-[17px] text-gray-900">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="mt-2.5 mb-5 text-[15px] text-gray-600 leading-normal">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>

          {/* Input Fields */}
          <fieldset className="flex items-center gap-5 mb-[15px]">
            <label
              className="w-[90px] text-[15px] text-gray-800 text-right"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="flex-1 shadow-sm px-2.5 border border-gray-300 focus:border-blue-500 rounded focus:outline-none w-full h-[35px] text-[15px] text-gray-900"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>

          <fieldset className="flex items-center gap-5 mb-[15px]">
            <label
              className="w-[90px] text-[15px] text-gray-800 text-right"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="flex-1 shadow-sm px-2.5 border border-gray-300 focus:border-blue-500 rounded focus:outline-none w-full h-[35px] text-[15px] text-gray-900"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>

          {/* Save Button */}
          <div className="flex justify-end mt-[25px]">
            <Dialog.Close asChild>
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-medium text-white transition">
                Save changes
              </button>
            </Dialog.Close>
          </div>

          {/* Close Button */}
          <Dialog.Close asChild>
            <button
              className="top-2.5 right-2.5 absolute focus:outline-none text-gray-600 hover:text-black"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
