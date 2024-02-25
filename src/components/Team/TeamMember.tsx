import React from "react";
import {
  Avatar,
  Describe,
  Nickname,
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
          <div>
            {socialMedia.map(({ url, icon }) => (
              <div key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20">
                    <use href={`images/icons.svg#${icon}`} />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </StyledFigcapture>
      </StyledFigure>
    </TeamPlayer>
  );
};
