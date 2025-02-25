import { FaWhatsapp } from "react-icons/fa";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full px-6 bg-orange-100 sm:px-12 md:px-20">
      <div className="relative w-full mx-auto max-w-7xl">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">הלוגו של אלירן</div>
        </nav>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed z-50 top-4 left-6 sm:left-12 md:left-20">
        <a
          className="text-green-500 transition hover:text-green-600"
          href="https://wa.me/972547963334"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaWhatsapp size={44} strokeWidth={5} />
        </a>
      </div>
    </div>
  );
};
