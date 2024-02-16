import { LogoContainer, LogoHighlighted, LogoStyled } from "./Logo.styled";

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoStyled to="/">
        <LogoHighlighted>Kuźwa</LogoHighlighted>Team
      </LogoStyled>
    </LogoContainer>
  );
};
