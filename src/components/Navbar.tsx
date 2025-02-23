import {
  navbarContainer,
  navbarLogo,
  navbarIconsContainer,
  whatsappIcon,
  navbarWrapper,
} from "../styles/navbarStyles";
import { FaWhatsapp } from "react-icons/fa";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <div className={navbarWrapper}>
        <nav className={navbarContainer}>
          {/* Logo */}
          <div className={navbarLogo}>הלוגו של אלירן</div>
          {/* WhatsApp Icon */}
          <div className={navbarIconsContainer}>
            <a
              href="https://wa.me/972547963334" // Phone number here
              rel="noopener noreferrer"
              target="_blank"
              className={whatsappIcon}
            >
              <FaWhatsapp size={32} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
