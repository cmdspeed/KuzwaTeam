import icons from "../../../assets/icon/icon.svg";
import {
  Icon,
  IconWrapper,
  SocialIcons,
  SocialLink,
  SocialTitle,
} from "./JoinUs.styled";

export const JoinUs = () => {
  return (
    <div>
      <SocialTitle>Join Us</SocialTitle>
      <SocialIcons>
        <SocialLink
          href="http://intagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <Icon>
              <use href={`${icons}#instagram`} />
            </Icon>
          </IconWrapper>
        </SocialLink>
        <SocialLink
          href="http://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <Icon>
              <use href={`${icons}#twitter`} />
            </Icon>
          </IconWrapper>
        </SocialLink>
        <SocialLink
          href="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <Icon>
              <use href={`${icons}#facebook`} />
            </Icon>
          </IconWrapper>
        </SocialLink>
        <SocialLink
          href="http://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <Icon>
              <use href={`${icons}#linkedin`} />
            </Icon>
          </IconWrapper>
        </SocialLink>
      </SocialIcons>
    </div>
  );
};
