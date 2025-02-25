import { FaWhatsapp } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="w-full bg-orange-100">
      {/* Wrapper to match Hero section width and padding */}
      <div className="w-full h-16 px-6 sm:px-12 md:px-20">
        {" "}
        {/* Example height: 64px (16 Tailwind units) */}
        <nav className="flex items-center justify-between w-full py-4 mx-auto max-w-7xl">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">הלוגו של אלירן</div>
          {/* WhatsApp Icon */}
          <div className="flex items-center gap-6">
            <a
              className="text-green-500 transition hover:text-green-600"
              href="https://wa.me/972547963334"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaWhatsapp size={48} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
