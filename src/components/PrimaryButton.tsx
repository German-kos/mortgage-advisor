import { Button } from "@radix-ui/themes/src/index.js";

export const PrimaryButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button className="bg-[#F39C12] px-5 py-[9px] border rounded-[8px] min-[500px]:max-w-32 font-semibold text-[16px] text-white">
      {text}
    </Button>
  );
};
