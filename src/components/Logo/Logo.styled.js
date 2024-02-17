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
  font-family: var(---font-second);
  font-weight: 700;
`;

export const LogoContainer = styled.div`
  margin: 1rem 0 1rem 1rem;
`;