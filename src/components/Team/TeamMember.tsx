import icons from "../../assets/icon/icon.svg";
import {
  Avatar,
  Describe,
  Icon,
  IconWrapper,
  Nickname,
  SocialContainer,
  StyledFigcapture,
  StyledFigure,
  TeamPlayer,
} from "./TeamMember.styled";

interface SocialMedia {
  url: string;
  icon: string;
}

interface TeamMemberProps {
  src: string;
  role: string;
  nickname: string;
  socialMedia: SocialMedia[];
}

export const TeamMember = ({
  src,
  nickname,
  role,
  socialMedia,
}: TeamMemberProps) => {
  return (
    <TeamPlayer>
      <StyledFigure>
        <StyledFigcapture>
          <Avatar src={src} alt={nickname} />
          <Nickname>{nickname}</Nickname>
          <Describe>{role}</Describe>
          <SocialContainer>
            {socialMedia.map(({ url, icon }) => (
              <IconWrapper key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Icon width="20" height="20">
                    <use href={`${icons}#${icon}`} />
                  </Icon>
                </a>
              </IconWrapper>
            ))}
          </SocialContainer>
        </StyledFigcapture>
      </StyledFigure>
    </TeamPlayer>
  );
};
