import { useState, useEffect } from "react";
import { ContactModal } from "./ContactModal";
import { Modal } from "./Modal_temp";

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (e.target === e.currentTarget) {
  //     setIsModalOpen(false);
  //   }
  // };
  // // Disable scrolling when modal is open, ESC to close modal
  // useEffect(() => {
  //   const handleEsc = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") {
  //       setIsModalOpen(false);
  //     }
  //   };

  //   // Disable scrolling
  //   if (isModalOpen) {
  //     document.body.classList.add("overflow-hidden");
  //     window.addEventListener("keydown", handleEsc);
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }

  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //     window.removeEventListener("keydown", handleEsc);
  //   };
  // }, [isModalOpen]);

  return (
    <>
      <section
        className="flex justify-center items-center bg-orange-300 px-6 sm:px-12 md:px-20 w-full"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-y-8 lg:gap-0 w-full max-w-7xl">
          {/* Right */}
          <div className="flex flex-col flex-1 items-center lg:items-start text-center md:text-center lg:text-right">
            <h1 className="font-bold text-emerald-800 text-4xl sm:text-5xl leading-tight">
              ייעוץ המשכנתאות הטוב ביותר בשבילכם
            </h1>
            <p className="mt-4 font-semibold text-stone-500 text-lg sm:text-xl">
              אנחנו כאן לעזור לכם לעשות את הבחירה הנכונה ביותר בשבילכם
            </p>
            {/* <button
              onClick={() => setIsModalOpen(true)}
              // className="bg-red-400 hover:bg-orange-600 mt-6 px-6 py-3 border-2 hover:border-orange-600 border-red-400 rounded-lg font-semibold text-orange-100 hover:text-white transition"
            >
              צרו קשר
            </button> */}
            <Modal open={isModalOpen} setOpen={setIsModalOpen} />
          </div>

          {/* Left */}
          <div className="flex flex-1 justify-center lg:justify-end w-full">
            <img
              className="m-0 w-full max-w-md"
              src="/images/business_stock.jpg"
              alt="Eliran"
            />
          </div>
        </div>
      </section>

      {/* <ContactModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        closeModal={closeModal}
      /> */}
    </>
  );
};
