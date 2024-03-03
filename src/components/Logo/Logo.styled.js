import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoHighlighted = styled.span`
  color: var(--logo-color);
`;

export const LogoStyled = styled(Link)`
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  color: var(--main-text-color);
  line-height: 1.16;
  font-family: "Raleway";
  font-weight: 700;
`;
