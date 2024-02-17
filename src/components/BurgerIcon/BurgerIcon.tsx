import icon from "../../assets/icon/icon.svg";
import { BurgerSvg } from "./BurgerIcon.styled";

interface Props {
  width: string;
  height: string;
}

export const BurgerIcon = ({ width, height }: Props) => {
  return (
    <BurgerSvg width={width} height={height}>
      <use href={`${icon}#burger`} />
    </BurgerSvg>
  );
};
