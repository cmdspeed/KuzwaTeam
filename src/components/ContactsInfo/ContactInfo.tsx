import icons from "../../assets/icon/icon.svg";
import { Icon, LinkStyled, List, ListItem } from "./ContactInfo.styled";
export const ContactInfo = () => {
  return (
    <List>
      <ListItem>
        <LinkStyled to="mailto:kuźwateam@lelenie.com">
          <Icon width="16px" height="12px">
            <use href={`${icons}#message`} />
          </Icon>
          kuźwateam@lelenie.com
        </LinkStyled>
      </ListItem>
      <li>
        <LinkStyled to="tel:+48696666999">
          <Icon width="10px" height="16px">
            <use href={`${icons}#phone`} />
          </Icon>
          +48 696 666 999
        </LinkStyled>
      </li>
    </List>
  );
};
