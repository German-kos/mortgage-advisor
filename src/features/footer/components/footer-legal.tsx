import { links } from "../constants";
import { Link } from "@radix-ui/themes/src/index.js";

export const FooterLegal = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-4">
      {links.map((link, index) => (
        <Link
          className="font-normal text-[#EAECF0] text-base"
          key={index}
          href={link.link}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
