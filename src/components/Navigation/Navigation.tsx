import { NavLink } from "react-router-dom";
import { List, NavStyled } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavStyled>
      <List>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </List>
    </NavStyled>
  );
};
