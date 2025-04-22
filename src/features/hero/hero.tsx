import { Grid } from "@radix-ui/themes/components/grid";
import { CustomBox } from "@/components/CustomBox";
import { CustomContainer } from "@/components/CustomContainer";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { useFormStatus } from "@/features/form/context/form-status-context";
import { HeroText } from "./components/hero-text";
import { HeroImage } from "./components/hero-image";
import { scroller } from "react-scroll";
import { useScrollTrigger } from "./hooks/use-scroll-trigger";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { status } = useFormStatus();

  useScrollTrigger(() => setModalOpen(true), status !== "success");

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
          <HeroText onCTAClick={handleCTAClick} />
        </CustomContainer>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
        <HeroImage />
      </Grid>
    </CustomBox>
  );
};

export default Hero;
