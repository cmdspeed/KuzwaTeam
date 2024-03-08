import { LinkStyled, List, NavStyled } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavStyled>
      <List>
        <li>
          <LinkStyled to="/" activeclassname="active">
            About Us
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/shop" activeclassname="active">
            Shop
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/contacts" activeclassname="active">
            Contacts
          </LinkStyled>
        </li>
      </List>
    </NavStyled>
  );
};
