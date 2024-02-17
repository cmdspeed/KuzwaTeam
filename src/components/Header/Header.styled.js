import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;

  padding: 1rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BottomSeparator = styled.div`
  border-bottom: var(--nav-border);
`;
