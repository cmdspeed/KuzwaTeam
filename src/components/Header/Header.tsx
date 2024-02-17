import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { Logo } from "../Logo/Logo";
import { Wrapper } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <BurgerIcon width="24px" height="16px" />
      </Wrapper>
    </header>
  );
};
