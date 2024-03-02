import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import icons from "../../assets/icon/icon.svg";

export const Footer = () => {
  return (
    <footer>
      <Logo />
      <div>
        <h3>Rydułtowy, Dangerowska 69</h3>
        <Link to="mailto:info@example.com">info@example.com</Link>
        <Link to="tel:+48111111111">+48 111 111 111</Link>
      </div>
      <div>
        <h2>Join Us</h2>
        <div>
          <div>
            <a href="http://intagram.com">
              <svg width="20px" height="20px">
                <use href={`${icons}#instagram`} />
              </svg>
            </a>
            <a href="http://twitter.com">
              <svg width="20px" height="20px">
                <use href={`${icons}#twitter`} />
              </svg>
            </a>
            <a href="http://facebook.com">
              <svg width="20px" height="20px">
                <use href={`${icons}#facebook`} />
              </svg>
            </a>
            <a href="http://linkedin.com">
              <svg width="20px" height="20px">
                <use href={`${icons}#linkedin`} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
