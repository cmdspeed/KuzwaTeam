import { ButtonStyled } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  txtColor?: string;
  bgColor?: string;
}

export const Btn: React.FC<ButtonProps> = ({
  children,
  onClick,
  txtColor,
  bgColor,
}) => {
  const buttonStyle: React.CSSProperties = {
    color: txtColor,
    backgroundColor: bgColor,
  };
  return (
    <ButtonStyled onClick={onClick} style={buttonStyle}>
      {children}
    </ButtonStyled>
  );
};
