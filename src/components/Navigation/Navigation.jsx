import { LinkStyled, List, NavStyled } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavStyled>
      <List>
        <li>
          <LinkStyled activeClassName="active" to="/">
            About Us
          </LinkStyled>
        </li>
        <li>
          <LinkStyled activeClassName="active" to="/shop">
            Shop
          </LinkStyled>
        </li>
        <li>
          <LinkStyled activeClassName="active" to="/contacts">
            Contacts
          </LinkStyled>
        </li>
      </List>
    </NavStyled>
  );
};
