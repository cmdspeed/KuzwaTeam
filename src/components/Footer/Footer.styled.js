import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--footer-section);
  color: var(--second-color);
  padding-top: 3.75rem;
  font-style: normal;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  margin: 0 auto;

  text-align: center;

  @media (min-width: 768px) {
    gap: 7.5rem;
  }

  @media (min-width: 1200px) {
    gap: 5rem;
  }
`;
