import { LogoHighlighted, LogoStyled } from "./Logo.styled";

export const Logo = () => {
  return (
    <div>
      <LogoStyled to="/">
        <LogoHighlighted>Kuźwa</LogoHighlighted>Team
      </LogoStyled>
    </div>
  );
};
