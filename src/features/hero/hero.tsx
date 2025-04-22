import { useState } from "react";
import { Grid } from "@radix-ui/themes/components/grid";
import { scroller } from "react-scroll";
import { CustomBox, CustomContainer, Modal } from "@/components";
import { HeroImage, HeroText } from "./components";
import { useScrollTrigger } from "./hooks";
import { useFormStatus } from "../form/context";

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
