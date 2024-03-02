import { SectionTitle, TeamList, TeamSection } from "./Team.styled";
import { teamData } from "./TeamData";
import { TeamMember } from "./TeamMember";

export const Team = () => {
  return (
    <TeamSection>
      <div>
        <SectionTitle>Kuźwa Team</SectionTitle>
        <TeamList>
          {teamData.map((member) => (
            <TeamMember key={member.nickname} {...member} />
          ))}
        </TeamList>
      </div>
    </TeamSection>
  );
};
