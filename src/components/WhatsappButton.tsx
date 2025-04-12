import { Link } from "@radix-ui/themes/src/index.js";
import "./WhatsappButton.css"; // Import the CSS file

export const WhatsappButton = () => {
  return (
    <div className="right-2 md:right-4 lg:right-6 bottom-2 md:bottom-4 lg:bottom-6 z-[999] fixed">
      {/* Pulsing Background */}
      <div className="whatsapp-pulse"></div>

      <Link
        className="relative rounded-full focus:outline-none transition-transform"
        href="https://wa.me/972547963334?text=היי,%20אני%20אשמח%20שנדבר%20על%20המשכנתא%20:)"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/Whatsapp.png"
          alt="whatsapp"
          className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 whatsapp-beat"
        />
      </Link>
    </div>
  );
};
