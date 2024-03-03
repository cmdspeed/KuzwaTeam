import icons from "../../../assets/icon/icon.svg";
import { Icon, IconWrapper, SocialIcons, SocialTitle } from "./JoinUs.styled";

export const JoinUs = () => {
  return (
    <div>
      <SocialTitle>Join Us</SocialTitle>
      <SocialIcons>
        <a href="http://intagram.com" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <Icon>
              <use href={`${icons}#instagram`} />
            </Icon>
          </IconWrapper>
        </a>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <Icon>
              <use href={`${icons}#twitter`} />
            </Icon>
          </IconWrapper>
        </a>
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <Icon>
              <use href={`${icons}#facebook`} />
            </Icon>
          </IconWrapper>
        </a>
        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <Icon>
              <use href={`${icons}#linkedin`} />
            </Icon>
          </IconWrapper>
        </a>
      </SocialIcons>
    </div>
  );
};
