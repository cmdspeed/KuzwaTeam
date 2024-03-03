import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--footer-section);
  color: var(--second-color);
  padding-top: 3.75rem;
  font-style: normal;
  text-align: center;
`;

export const Constainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-content: space-around;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;
