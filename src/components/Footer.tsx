import { Grid } from "@radix-ui/themes/components/grid";
import { CustomBox } from "./CustomBox";
import { Logo } from "./Logo";
import { CustomContainer } from "./CustomContainer";
import { Link } from "@radix-ui/themes/src/index.js";

export const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      link: "https://facebook.com/",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/",
    },
    {
      name: "LinkedIn",
      link: "http://www.linkedin.com/in/eliran-shlomov",
    },
    {
      name: "Github",
      link: "https://github.com/German-kos",
    },
  ];

  const contact = [
    {
      img: "Loc",
      title: "כתובת",
      content: "הצוללים, אשדוד",
    },
    {
      img: "Tel",
      title: "מספר טלפון",
      content: "054-285-7768",
    },
    {
      img: "Mail",
      title: "אימייל",
      content: "mashkantes@gmail.com",
    },
  ];

  const links = [
    { name: "עוגיות", link: "#" },
    { name: "פרטיות", link: "#" },
    { name: "תנאים", link: "#" },
  ];
  return (
    <CustomBox className="bg-[#2C3E50]">
      <CustomContainer>
        <Grid className="flex md:flex-row flex-col justify-center md:justify-between gap-12 sm:gap-16 py-8 sm:py-16 w-full">
          <div className="flex justify-center">
            <Grid className="gap-8 grid max-w-80">
              <Logo className="text-white" />
              <p className="text-[#EAECF0] text-base">
                קבל ייעוץ מומחה ואת אפשרויות המשכנתא הטובות ביותר לבית חלומותיך.
              </p>
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
            </Grid>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="justify-center lg:justify-start gap-3 grid w-full">
              <h3 className="flex font-semibold text-[#D0D5DD] text-sm text-center">
                צור קשר
              </h3>
              {contact.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img src={`/images/icons/${item.img}.png`} alt={item.title} />
                  <div>
                    <h4 className="flex font-semibold text-[#EAECF0] text-base">
                      {item.title}
                    </h4>
                    <p className="flex font-semibold text-[#D0D5DD] text-sm">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <div className="px-8 w-full">
          <div className="flex justify-between gap-2 py-8 border-[#ffffff25] border-t-1">
            <p className="font-normal text-[#D0D5DD] text-base">
              © 2025 משכנת'ס. כל הזכויות שמורות.
            </p>
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
          </div>
        </div>
      </CustomContainer>
    </CustomBox>
  );
};
