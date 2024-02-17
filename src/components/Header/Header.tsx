import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Wrapper } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <div>
          <Logo />
          <Navigation />
        </div>
        <BurgerIcon width="24px" height="16px" />
      </Wrapper>
    </header>
  );
};
