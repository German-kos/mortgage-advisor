import { Grid } from "@radix-ui/themes/components/grid";
import { CustomBox } from "./CustomBox";
import { Logo } from "./Logo";
import { title } from "process";
import { CustomContainer } from "./CustomContainer";

export const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      link: "https://facebook.com/",
    },
    {
      name: "X",
      link: "https://x.com/",
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/",
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
      content: "100 רחוב סמית', קולינגווד VIC 3066, אוסטרליה",
    },
    {
      img: "Tel",
      title: "מספר טלפון",
      content: "+1 (555) 000-0000",
    },
    {
      img: "Mail",
      title: "אימייל",
      content: "loremipsum@gmail.com",
    },
  ];
  return (
    <CustomBox className="bg-[#2C3E50]">
      <CustomContainer>
        <Grid>
          <Grid className="flex justify-between gap-12 sm:gap-16 py-8 sm:py-16 w-full">
            <div>
              <Grid className="gap-8 grid max-w-80">
                <Logo className="text-white" />
                <p className="text-[#EAECF0] text-base">
                  קבל ייעוץ מומחה ואת אפשרויות ההלוואה הטובות ביותר לבית
                  חלומותיך.
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
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#D0D5DD] text-sm">צור קשר</h3>
              <div className="flex flex-col gap-3">
                {contact.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={`/images/icons/${item.img}.png`} alt="" />
                    <div>
                      <h4 className="font-semibold text-[#EAECF0] text-base">
                        {item.title}
                      </h4>
                      <p className="font-semibold text-[#D0D5DD] text-sm">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <div className="bg-amber-300 px-8 pt-8 w-full">
            <div className="flex justify-between border-t">
              <p>© 2025 MC LOGO. כל הזכויות שמורות.</p>
              <div>
                <a>a</a>
                <a>b</a>
                <a>c</a>
              </div>
            </div>
          </div>
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};
