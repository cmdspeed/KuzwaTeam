import { LogoHighlighted, LogoStyled } from "./Logo.styled";

interface LogoProps {
  txtColor?: string;
}

export const Logo = ({ txtColor }: LogoProps) => {
  const styleLogo = {
    color: txtColor,
  };
  return (
    <LogoStyled to="/" style={styleLogo}>
      <LogoHighlighted>Kuźwa</LogoHighlighted>Team
    </LogoStyled>
  );
};
