import { ModalForm } from "./ModalForm";

type ContractModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const ContactModal = ({
  isModalOpen,
  setIsModalOpen,
  closeModal,
}: ContractModalProps) => {
  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-xs"
          onClick={closeModal}
        >
          <div className="flex flex-col items-center w-full max-w-lg p-6 bg-white rounded-lg shadow-lg backdrop-blur-none">
            <ModalForm onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};
