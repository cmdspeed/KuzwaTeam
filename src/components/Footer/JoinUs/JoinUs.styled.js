import styled from "styled-components";

export const SocialTitle = styled.h3`
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.14;
  color: var(--second-color);

  margin-top: 0.3125rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin: 1.25rem auto 3.75rem;
`;

export const IconWrapper = styled.div`
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 0.625rem;
  background-color: var(--social-icon-container);
  &:hover {
    background-color: var(--logo-color);
    cursor: pointer;
  }
`;

export const Icon = styled.svg`
  fill: var(--second-color);
  width: 20px;
  height: 20px;
`;
