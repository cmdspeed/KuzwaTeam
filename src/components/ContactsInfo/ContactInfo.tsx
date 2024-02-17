import { Link } from "react-router-dom";

export const ContactInfo = () => {
  return (
    <ul>
      <li>
        <Link to="mailto:cmdspeed@gmail.com">cmdspeed@gmail.com</Link>
      </li>
      <li>
        <Link to="tel:+48518824787">+48 518 824 787</Link>
      </li>
    </ul>
  );
};
