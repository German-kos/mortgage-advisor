import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <img src="/images/Logo.png" alt="logo" className="h-8 sm:h-10" />
      <h1
        className={cn(
          "font-bold text-[#2C3E50] text-[18px] sm:text-[26px]",
          className
        )}
      >
        MC LOGO
      </h1>
    </div>
  );
};
