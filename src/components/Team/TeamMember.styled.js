import styled from "styled-components";

export const Nickname = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
`;

export const Describe = styled.p`
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--contacts-color);
`;

export const TeamPlayer = styled.li`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 1.875rem) / 2);
  }

  @media (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 40px) / 4);
  }
`;

export const StyledFigure = styled.figure`
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  display: flex;
  margin: 0;
  background-color: var(--second-color);
`;

export const StyledFigcapture = styled.figcaption`
  margin: auto;
`;

export const Avatar = styled.img`
  display: block;
  width: 16.875rem;
  @media (min-width: 480px) {
    width: 28.125rem;
  }

  @media (min-width: 768px) {
    width: 22.125rem;
  }

  @media (min-width: 1200px) {
    width: 16.875rem;
  }
`;
