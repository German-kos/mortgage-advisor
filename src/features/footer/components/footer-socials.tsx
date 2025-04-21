import { socials } from "../constants";

export const FooterSocials = () => {
  return (
    <div className="flex justify-between gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="text-[#EAECF0] text-base"
        >
          <img src={`/images/icons/${social.name}.png`} alt="" />
        </a>
      ))}
    </div>
  );
};
