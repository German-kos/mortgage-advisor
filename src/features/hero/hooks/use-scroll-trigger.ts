import { isMobile } from "@/utils/responsive";
import { useEffect, useRef } from "react";

export const useScrollTrigger = (callback: () => void, condition: boolean) => {
  const hasTriggered = useRef(false);

  useEffect(() => {
    const mobileDevice = isMobile();
    if (mobileDevice) return;

    const handleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      if (reachedBottom && !hasTriggered.current && condition) {
        callback();
        hasTriggered.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, condition]);
};
