import styled, { css, keyframes } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

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
  z-index: 1;
`;

export const ModalContent = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) || prop === "isfullscreen",
})`
  background-color: white;
  padding: 1.25rem;
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

      border-radius: 0;
      box-shadow: none;
    `}

  @media (min-width: 1200px) {
    max-width: 33rem;
  }
  animation: ${({ isClosing }) =>
    isClosing
      ? css`
          ${slideOutAnimation} 0.3s ease forwards
        `
      : css`
          ${slideInAnimation} 0.3s ease forwards
        `};
`;

export const ModalClose = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  padding-top: 1rem;
  font-size: 1rem;
  &:hover {
    color: var(--logo-color);
  }
`;

export const ButtonWrapper = styled.div`
  text-align: right;
`;
