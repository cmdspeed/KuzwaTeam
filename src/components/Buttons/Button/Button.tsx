import { ButtonStyled } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  txtColor?: string;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
}

export const Btn: React.FC<ButtonProps> = ({
  children,
  onClick,
  txtColor,
  bgColor,
  type = "button",
}) => {
  const buttonStyle: React.CSSProperties = {
    color: txtColor,
    backgroundColor: bgColor,
  };
  return (
    <ButtonStyled type={type} onClick={onClick} style={buttonStyle}>
      {children}
    </ButtonStyled>
  );
};
