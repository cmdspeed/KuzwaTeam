import styled from "styled-components";

export const TeamSection = styled.section`
  background: var(--filters-bg-color);
  padding: 3.75rem 0;
  @media (min-width: 1200px) {
    padding: 5.875rem 0;
  }
`;

export const TeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
  padding-left: 0;
  max-width: 16.875rem;
  margin: 0 auto;
  @media (min-width: 480px) {
    max-width: 28.125rem;
  }

  @media (min-width: 768px) {
    max-width: 46.125rem;
  }

  @media (min-width: 1200px) {
    max-width: 73.125rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 1.875rem;
  @media (min-width: 1200px) {
    font-size: 2.25rem;
    line-height: 1.16;
  }
`;
