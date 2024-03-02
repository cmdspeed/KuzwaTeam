import { Logo } from "../Logo/Logo";

import { Address } from "./Address/Address";
import { JoinUs } from "./JoinUs/JoinUs";
import { Newsleter } from "./Newsletter/Newsleter";

export const Footer = () => {
  return (
    <footer>
      <Logo />
      <Address />
      <JoinUs />
      <Newsleter />
    </footer>
  );
};
