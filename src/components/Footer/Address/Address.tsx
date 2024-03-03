import { StyledAddress, StyledLink, StyledLinkMap } from "./Address.styled";

export const Address = () => {
  return (
    <address>
      <StyledAddress>
        <li>
          <StyledLinkMap
            href="https://www.google.com/maps/@35.7040744,139.5577317,3a,90y,287.65h,68.26t/data=!3m7!1e1!3m5!1sgT28ssf0BB2LxZ63JNcL1w!2e0!3e5!7i13312!8i6656?entry=ttu"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            Rydułtowy, Dangerowska 69
          </StyledLinkMap>
        </li>
        <li>
          <StyledLink href="mailto:kuźwateam@lelenie.com">
            kuźwateam@lelenie.com
          </StyledLink>
        </li>
        <li>
          <StyledLink href="tel:+48696666999">+48 696 666 999</StyledLink>
        </li>
      </StyledAddress>
    </address>
  );
};
