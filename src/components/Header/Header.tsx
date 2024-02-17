import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { ContactInfo } from "../ContactsInfo/ContactInfo";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { HeaderLeft, Wrapper } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <HeaderLeft>
          <Logo />
          <Navigation />
        </HeaderLeft>
        <ContactInfo />
        <BurgerIcon width="24px" height="16px" />
      </Wrapper>
    </header>
  );
};
