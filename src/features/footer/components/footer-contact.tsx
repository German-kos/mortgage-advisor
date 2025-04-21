import { contact } from "../constants";

export const FooterContact = () => {
  return (
    <>
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
    </>
  );
};
