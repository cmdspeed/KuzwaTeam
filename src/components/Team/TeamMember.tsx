import { useState } from "react";
import icons from "../../assets/icon/icon.svg";
import {
  Avatar,
  Describe,
  DescriptionCardPlayer,
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
  describe: string;
}

export const TeamMember = ({
  src,
  nickname,
  role,
  socialMedia,
  describe,
}: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredContent, setIsHoveredContent] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHoveredContent(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHoveredContent(false);
    }, 1300);
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  return (
    <TeamPlayer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ishovered={isHovered}
    >
      <StyledFigure>
        <StyledFigcapture>
          {isHoveredContent ? (
            <DescriptionCardPlayer>{describe}</DescriptionCardPlayer>
          ) : (
            <>
              <Avatar
                src={src}
                alt={nickname}
                srcSet={`${src} 1x, ${src.replace(".png", "@2x.png")} 2x`}
              />
              <Nickname>{nickname}</Nickname>
              <Describe>{role}</Describe>
            </>
          )}
        </StyledFigcapture>
      </StyledFigure>
    </TeamPlayer>
  );
};
