import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.14;
  color: var(--second-color);
  margin: 0.3125rem auto 0;
  text-align: center;
  letter-spacing: 0.03em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 1rem 1rem 0;
  height: 3.125rem;

  @media (min-width: 480px) {
    max-width: 22rem;
  }
  @media (min-width: 1200px) {
    min-width: 28rem;
  }
`;

export const StyledInput = styled.input`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: var(--footer-section);
  margin: 0 auto;
  height: 3.125rem;
  box-sizing: border-box;
  width: 100%;
  &::placeholder {
    padding: 0 1rem;
    font-size: 1rem;
    font-family: "Roboto";
    line-height: 1.25;
    letter-spacing: 0.03em;
  }
`;

export const ButtonWrapper = styled.div`
  width: 12.5rem;
  height: 3.125rem;
  margin: 1.25rem auto 0;
`;

export const IconSend = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1.5rem;
`;

export const BtnContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
