import { Link } from "react-scroll";
import { navLinks } from "../constants";

export const NavLinks = () => (
  <div className="hidden lg:flex gap-8">
    {navLinks.map((link, index) => (
      <Link
        key={index}
        to={link.ref}
        smooth
        duration={500}
        className="font-semibold text-[#475467] hover:text-blue-600 text-base transition cursor-pointer"
      >
        {link.title}
      </Link>
    ))}
  </div>
);
