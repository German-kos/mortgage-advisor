import { Link } from "@radix-ui/themes/src/index.js";
import "./whatsapp-button.css"; // Import the CSS file

const WhatsappButton = () => {
  return (
    <div className="whatsapp-button">
      {/* Pulsing Background */}
      <div className="whatsapp-pulse"></div>

      <Link
        className="relative rounded-full focus:outline-none transition-transform"
        href="https://wa.me/972542857768?text=היי,%20אני%20אשמח%20שנדבר%20על%20המשכנתא%20:)"
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

export default WhatsappButton;
