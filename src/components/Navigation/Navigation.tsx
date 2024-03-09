import { LinkStyled, List, NavStyled, ListItem } from "./Navigation.styled";

interface Props {
  isModalOpen?: boolean;
}

export const Navigation = ({ isModalOpen }: Props) => {
  return (
    <NavStyled ismodalopen={isModalOpen}>
      <List ismodalopen={isModalOpen}>
        <ListItem ismodalopen={isModalOpen}>
          <LinkStyled to="/" activeclassname="active">
            About Us
          </LinkStyled>
        </ListItem>
        <ListItem ismodalopen={isModalOpen}>
          <LinkStyled to="/shop" activeclassname="active">
            Shop
          </LinkStyled>
        </ListItem>
        <ListItem ismodalopen={isModalOpen}>
          <LinkStyled to="/contacts" activeclassname="active">
            Contacts
          </LinkStyled>
        </ListItem>
      </List>
    </NavStyled>
  );
};
