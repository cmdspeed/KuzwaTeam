import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavStyled = styled.nav`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.14;
  letter-spacing: 0.02em;
  margin: auto 3rem auto 5.1875rem;

  display: none;
  visibility: hidden;
  opacity: 0;
  @media (min-width: 768px) {
    display: block;
    visibility: visible;
    opacity: 1;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 2.875rem;
  align-items: center;
`;

export const LinkStyled = styled(NavLink)`
  &:active {
    color: var(--logo-color);
  }
  &.${(props) => props.activeClassName} {
    color: var(--logo-color);

    &::after {
      content: "";
      position: relative;
      display: block;
      top: 1.2rem;
      height: 0.25rem;
      width: 100%;
      border-radius: 0.125rem;
      background-color: var(--logo-color);
    }
  }
  &:hover {
    color: var(--logo-color);
  }
`;
