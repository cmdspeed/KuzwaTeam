import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-family: inherit;
  width: 100%;
  height: 100%;
  background-color: var(--filters-bg-color);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.87;
  text-align: center;
  letter-spacing: 0.06em;
  color: var(--main-text-color);
  text-transform: capitalize;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
