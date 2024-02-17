import icons from "../../assets/icon/icon.svg";
import { Icon, LinkStyled, List, ListItem } from "./ContactInfo.styled";
export const ContactInfo = () => {
  return (
    <List>
      <ListItem>
        <LinkStyled to="mailto:cmdspeed@gmail.com">
          <Icon width="16px" height="12px">
            <use href={`${icons}#message`} />
          </Icon>
          cmdspeed@gmail.com
        </LinkStyled>
      </ListItem>
      <li>
        <LinkStyled to="tel:+48518824787">
          <Icon width="10px" height="16px">
            <use href={`${icons}#phone`} />
          </Icon>
          +48 518 824 787
        </LinkStyled>
      </li>
    </List>
  );
};
