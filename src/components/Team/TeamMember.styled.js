import styled, { keyframes, css } from "styled-components";

const rotateCard = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

const rotateBackCard = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export const Nickname = styled.h3`
  margin-top: 1rem;
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

  animation: ${({ isHovered }) =>
    isHovered
      ? css`
          ${rotateCard} 1s forwards;
        `
      : css`
          ${rotateBackCard} 1s forwards;
        `};
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

export const SocialContainer = styled.div`
  display: flex;
  margin: 1rem auto 1.125rem;
  width: 12.875rem;
`;

export const IconWrapper = styled.div`
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 0.625rem;
  background-color: var(--social-icon__container);
  &:hover {
    background-color: var(--logo-color);
    fill: var(--second-color);
    cursor: pointer;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
  &:hover {
    svg {
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 250ms;
      fill: var(--second-color);
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Icon = styled.svg`
  margin-right: 0;
  fill: var(--border-partner-logo);
`;

export const DescriptionCardPlayer = styled.div`
  transform: rotateY(180deg);
  height: 461.34px;
  padding: 1rem;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media (min-width: 480px) {
    height: 700.41px;
  }
  @media (min-width: 768px) {
    height: 572.91px;
  }
  @media (min-width: 1200px) {
    height: 461.34px;
  }
`;
