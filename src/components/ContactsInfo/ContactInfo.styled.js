import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  display: none;
  visibility: hidden;
  opacity: 0;

  @media (min-width: 768px) {
    display: block;
    visibility: visible;
    opacity: 1;
    align-items: center;
  }

  @media (min-width: 1200px) {
    display: flex;
  }
  ${(props) =>
    props.ismodalopen &&
    css`
      display: flex;
      visibility: visible;
      opacity: 1;

      justify-content: center;
      flex-wrap: wrap;
    `}
`;

export const ListItem = styled.li`
  margin-bottom: 0.625rem;

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

export const LinkStyled = styled(Link)`
  color: var(--contacts-color);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.14;
  letter-spacing: 0.02em;
  align-items: center;
  display: flex;

  margin-right: 1rem;

  &:hover {
    color: var(--logo-color);
    svg {
      fill: var(--logo-color);
    }
  }
`;

export const Icon = styled.svg`
  fill: var(--contacts-color);
  margin-right: 0.5rem;
  &:hover {
    fill: var(--logo-color);
  }
`;
