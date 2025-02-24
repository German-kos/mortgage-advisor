import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full py-6 bg-orange-100">
      <div className="flex flex-col items-center justify-between max-w-6xl px-6 mx-auto md:flex-row sm:px-12 md:px-20">
        {/* Logo */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center justify-center mb-2 text-black">הלוגו של אלירן</div>
          <p className="text-sm text-stone-500">נבנה ע"י גרמן קוסטיאקוב</p>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="w-8 h-8 transition text-emerald-800 hover:text-emerald-600">
            <FaInstagram size={32} />
          </a>
          <a href="#" className="w-8 h-8 transition text-emerald-800 hover:text-emerald-600">
            <FaLinkedin size={32} />
          </a>
          <a href="#" className="w-8 h-8 transition text-emerald-800 hover:text-emerald-600">
            <FaWhatsapp size={32} />
          </a>
          <a href="#" className="w-8 h-8 transition text-emerald-800 hover:text-emerald-600">
            <FaFacebook size={32} />
          </a>
          <a href="#" className="w-8 h-8 transition text-emerald-800 hover:text-emerald-600">
            <FaTwitter size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
