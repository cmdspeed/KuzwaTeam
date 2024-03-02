import { Logo } from "../Logo/Logo";

import { Address } from "./Address/Address";
import { JoinUs } from "./JoinUs/JoinUs";

export const Footer = () => {
  return (
    <footer>
      <Logo />
      <Address />
      <JoinUs />
    </footer>
  );
};
