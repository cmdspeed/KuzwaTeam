import { Logo } from "../Logo/Logo";

import { Address } from "./Address/Address";
import { Constainer, StyledFooter } from "./Footer.styled";
import { JoinUs } from "./JoinUs/JoinUs";
import { Newsleter } from "./Newsletter/Newsleter";

export const Footer = () => {
  return (
    <StyledFooter>
      <Constainer>
        <div>
          <Logo txtColor="var(--second-color)" />
          <Address />
        </div>
        <JoinUs />
        <Newsleter />
      </Constainer>
    </StyledFooter>
  );
};
