import { Link } from "react-router-dom";

export const Address = () => {
  return (
    <div>
      <h3>Rydułtowy, Dangerowska 69</h3>
      <Link to="mailto:info@example.com">info@example.com</Link>
      <Link to="tel:+48111111111">+48 111 111 111</Link>
    </div>
  );
};
