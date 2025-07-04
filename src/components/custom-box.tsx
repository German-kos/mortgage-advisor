import { cn } from "@/lib/utils";

interface CustomBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CustomBox = ({ className, children, ...props }: CustomBoxProps) => {
  return (
    <div
      className={cn("flex justify-center bg-transparent w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default CustomBox;
