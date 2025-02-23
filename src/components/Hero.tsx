import { useState, useEffect } from "react";
import {
  heroWrapper,
  heroContainer,
  heroTextContainer,
  heroTitle,
  heroSubtitle,
  heroButton,
  heroImageContainer,
  heroImage,
} from "../styles/heroStyles";
import { modalContainer, modalOverlay } from "../styles/modalStyles";
import ModalForm from "./ModalForm";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  // Disable scrolling when modal is open, ESC to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    // Disable scrolling
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <>
      <section className={heroWrapper}>
        <div className={heroContainer}>
          {/* Left */}
          <div className={heroTextContainer}>
            <h1 className={heroTitle}> ייעוץ המשכנתאות הטוב ביותר בשבילכם</h1>
            <p className={heroSubtitle}>
              אנחנו כאן לעזור לכם לעשות את הבחירה הנכונה ביותר בשבילכם
            </p>
            <button onClick={() => setIsModalOpen(true)} className={heroButton}>
              צרו קשר
            </button>
          </div>

          {/* Right */}
          <div className={heroImageContainer}>
            <img
              className={heroImage}
              src="/public/images/business_stock.jpg"
              alt="Eliran"
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className={modalOverlay} onClick={closeModal}>
          <div className={modalContainer}>
            <ModalForm onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
