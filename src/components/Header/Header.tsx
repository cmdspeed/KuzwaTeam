import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header>
      <div>
        <Logo />
        <BurgerIcon width="24px" height="16px" />
      </div>
    </header>
  );
};
