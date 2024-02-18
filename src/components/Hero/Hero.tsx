import { Btn } from "../Buttons/Button/Button";
import { BtnContainer, HeroSection, HeroTitle } from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <div>
        <HeroTitle>We are kuźwa team</HeroTitle>
        <BtnContainer>
          <Btn txtColor="var(--second-color)" bgColor="var(--logo-color)">
            contact us
          </Btn>
        </BtnContainer>
      </div>
    </HeroSection>
  );
};
