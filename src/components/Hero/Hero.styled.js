import styled from "styled-components";
import bg1 from "./img/dangerBG@x1.jpg";
import bg2 from "./img/dangerBG@x2.jpg";

export const HeroSection = styled.section`
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    image-set(url(${bg1}) 1x, url(${bg2}) 2x);
  background-size: cover;
  margin: 0 auto;
  max-width: 1200px;

  background-position: center;
  padding: 1rem 0;

  @media (min-width: 768px) {
    padding: 3rem 0;
  }
  @media (min-width: 1200px) {
    padding: 8rem 0;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 900;
  font-size: 1.625rem;
  line-height: 1.61;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--second-color);
  max-width: 365px;
  margin: 2rem auto 0;
`;

export const BtnContainer = styled.div`
  max-width: 12.5rem;
  height: 3.125rem;
  margin: 2.5rem auto;
`;

export const ModalClose = styled.button`
  background-color: white;
  border: none;
`;

export const ButtonWrapper = styled.div`
  text-align: right;
`;
