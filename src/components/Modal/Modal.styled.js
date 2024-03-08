import styled, { css } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) || prop === "isfullscreen",
})`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 0 1rem;

  ${(props) =>
    props.isfullscreen &&
    css`
      max-width: none;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      border-radius: 0;
      box-shadow: none;
    `}

  @media (min-width: 1200px) {
    max-width: 33rem;
  }
`;

export const ModalClose = styled.button`
  background-color: white;
  border: none;
`;

export const ButtonWrapper = styled.div`
  text-align: right;
`;
