import { Link } from "@radix-ui/themes/src/index.js";
import "./WhatsappButton.css"; // Import the CSS file

export const WhatsappButton = () => {
  return (
    <div className="right-6 bottom-6 z-[999] fixed">
      {/* Pulsing Background */}
      <div className="whatsapp-pulse"></div>

      <Link
        className="relative rounded-full focus:outline-none transition-transform"
        href="https://wa.me/972547963334"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/Whatsapp.png"
          alt="whatsapp"
          className="whatsapp-beat w-20 h-20"
        />
      </Link>
    </div>
  );
};
