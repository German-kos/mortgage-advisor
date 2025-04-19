import { Grid } from "@radix-ui/themes/components/grid";
import { CustomContainer } from "./CustomContainer";
import { PrimaryButton } from "./PrimaryButton";
import { CustomBox } from "./CustomBox";
import { useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { scroller } from "react-scroll";
import { useFormStatus } from "@/features/form/context/form-status-context";

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const hasOpened = useRef(false);
  const { status } = useFormStatus();
  const statusRef = useRef(status);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const handleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      if (
        reachedBottom &&
        !hasOpened.current &&
        statusRef.current !== "success"
      ) {
        setModalOpen(true);
        hasOpened.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      scroller.scrollTo("formSection", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <CustomBox>
      <Grid className="gap-12 sm:gap-16 grid py-8 sm:py-16">
        <CustomContainer>
          <div className="gap-12 grid max-w-5xl">
            <div className="gap-4 xs:gap-6 sm:gap-8 grid">
              <h1 className="font-semibold text-[#101828] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                משכנתא חכמה, מתחילה בייעוץ נכון!
              </h1>
              <p className="max-w-[300px] sm:max-w-[450px] md:max-w-[575px] font-normal text-[#475467] text-base sm:text-lg md:text-2xl">
                נוציא מהבנק את המקסימום כדי שתשלמו פחות ותרוויחו יותר.
              </p>
            </div>
            <PrimaryButton onClick={handleCTAClick} text="צור קשר" />
          </div>
        </CustomContainer>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
        <div className="relative flex justify-center lg:justify-end px-4 lg:px-8 w-full max-w-3xl lg:max-w-7xl">
          <img
            src="/images/Hero.png"
            alt="Hero"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </Grid>
    </CustomBox>
  );
};
