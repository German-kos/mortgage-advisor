import { Button } from "@radix-ui/themes/src/index.js";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton = ({ text, onClick }: PrimaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="bg-[#F39C12] hover:bg-[#f36c12] px-5 py-[9px] border rounded-[8px] min-[500px]:max-w-32 font-semibold text-[16px] text-white transition hover:cursor-pointer"
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
