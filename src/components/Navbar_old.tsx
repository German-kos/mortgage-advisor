import { FaWhatsapp } from "react-icons/fa";

export const Navbar: React.FC = () => {
  return (
    <div className="bg-orange-300 px-6 sm:px-12 md:px-20 w-full">
      <div className="relative mx-auto w-full max-w-7xl">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-bold text-black text-2xl">הלוגו של אלירן</div>
        </nav>
      </div>

      {/* WhatsApp Icon (Fixed & Aligned) */}
      <div className="top-4 left-6 sm:left-12 md:left-20 lg:left-[calc((100vw-1280px)/2+24px)] z-50 fixed">
        <a
          className="text-green-500 hover:text-green-600 transition"
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
