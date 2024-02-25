import icon from "../../../assets/icon/icon.svg";
import {
  BtnWrapper,
  CheckBox,
  Comment,
  LabelContainer,
  LabelStyled,
  OrderIcon,
  OrderInput,
  OrderTitle,
  PolicyLabel,
  PolicyLink,
} from "./FormHero.styled";
import { Btn } from "../../Buttons/Button/Button";

export const FormHero = () => {
  return (
    <form name="order">
      <OrderTitle>Leave your details in the form below</OrderTitle>

      <LabelContainer>
        <LabelStyled htmlFor="id-name">Name</LabelStyled>

        <OrderInput name="name" id="id-name" type="text" />
        <OrderIcon width="18" height="18">
          <use href={`${icon}#name`} />
        </OrderIcon>
      </LabelContainer>

      <LabelContainer>
        <LabelStyled htmlFor="id-tel">Phone</LabelStyled>
        <OrderInput name="tel" type="tel" id="id-tel" />
        <OrderIcon width="18" height="18">
          <use href={`${icon}#phone`} />
        </OrderIcon>
      </LabelContainer>

      <LabelContainer>
        <LabelStyled htmlFor="id-email">Email</LabelStyled>
        <OrderInput name="email" type="email" id="id-email" />
        <OrderIcon width="18" height="18">
          <use href={`${icon}#email`} />
        </OrderIcon>
      </LabelContainer>

      <LabelStyled htmlFor="id-comment">Comment</LabelStyled>
      <Comment
        name="comment"
        id="id-comment"
        placeholder="Enter text"
      ></Comment>

      <PolicyLabel htmlFor="id-label-policy">
        <CheckBox
          type="checkbox"
          name="policy"
          id="id-label-policy"
          value="statute"
        />
        I declare that I accept <PolicyLink to="#">Statute</PolicyLink> and
        <PolicyLink to="#"> Privacy Policy</PolicyLink>
      </PolicyLabel>
      <BtnWrapper>
        <Btn
          type="submit"
          bgColor="var(--logo-color)"
          txtColor="var(--second-color)"
        >
          Send
        </Btn>
      </BtnWrapper>
    </form>
  );
};
