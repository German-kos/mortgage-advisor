import {
  footerContainer,
  footerLogoContainer,
  footerLogo,
  footerCredits,
  socialLinksContainer,
  socialIcon,
  footerWrapper,
} from "../styles/footerStyles";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={footerWrapper}>
      <div className={footerContainer}>
        {/* Logo */}
        <div className={footerLogoContainer}>
          <div className={footerLogo}>הלוגו של אלירן</div>
          <p className={footerCredits}>נבנה ע"י גרמן קוסטיאקוב</p>
        </div>

        {/* Socials */}
        <div className={socialLinksContainer}>
          <a href="#" className={socialIcon}>
            <FaInstagram size={32} />
          </a>
          <a href="#" className={socialIcon}>
            <FaLinkedin size={32} />
          </a>
          <a href="#" className={socialIcon}>
            <FaWhatsapp size={32} />
          </a>
          <a href="#" className={socialIcon}>
            <FaFacebook size={32} />
          </a>
          <a href="#" className={socialIcon}>
            <FaTwitter size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
