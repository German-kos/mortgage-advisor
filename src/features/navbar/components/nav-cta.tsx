import { PrimaryButton } from "@/components/primary-button";
import { Link } from "@radix-ui/themes";

export const NavCTA = () => (
  <Link
    className="relative rounded-full focus:outline-none transition-transform"
    href="https://wa.me/972542857768?text=היי,%20אני%20אשמח%20שנדבר%20על%20המשכנתא%20:)"
    target="_blank"
    rel="noreferrer"
  >
    <PrimaryButton text="התחל עכשיו" />
  </Link>
);
