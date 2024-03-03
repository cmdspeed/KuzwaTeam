import { Btn } from "../../Buttons/Button/Button";
import icons from "../../../assets/icon/icon.svg";
import {
  BtnContent,
  ButtonWrapper,
  Container,
  IconSend,
  InputWrapper,
  StyledInput,
  Title,
  Wrapper,
} from "./Newsleter.styled";

export const Newsleter = () => {
  return (
    <Container>
      <Title>Subscribe to the newsletter</Title>
      <Wrapper>
        <InputWrapper>
          <StyledInput type="email" name="email" placeholder="E-mail" />
        </InputWrapper>
        <ButtonWrapper>
          <Btn txtColor="var(--second-color)" bgColor="var(--logo-color)">
            <BtnContent>
              Sign up
              <IconSend>
                <use href={`${icons}#send`} />
              </IconSend>
            </BtnContent>
          </Btn>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};
