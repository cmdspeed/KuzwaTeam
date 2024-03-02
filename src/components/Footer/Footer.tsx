import { Logo } from "../Logo/Logo";

import { Address } from "./Address/Address";
import { StyledFooter } from "./Footer.styled";
import { JoinUs } from "./JoinUs/JoinUs";
import { Newsleter } from "./Newsletter/Newsleter";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Logo txtColor="var(--second-color)" />
        <Address />
      </div>
      <JoinUs />
      <Newsleter />
    </StyledFooter>
  );
};
