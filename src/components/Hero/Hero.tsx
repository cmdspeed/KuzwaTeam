import React, { useState } from "react";
import { Btn } from "../Buttons/Button/Button";
import {
  BtnContainer,
  ButtonWrapper,
  HeroSection,
  HeroTitle,
  ModalClose,
} from "./Hero.styled";
import { Modal } from "../Modal/Modal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBtnClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <HeroSection>
      <div>
        <HeroTitle>We are kuźwa team</HeroTitle>
        <BtnContainer>
          <Btn
            txtColor="var(--second-color)"
            bgColor="var(--logo-color)"
            onClick={handleBtnClick}
          >
            contact us
          </Btn>
        </BtnContainer>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ButtonWrapper>
            <ModalClose onClick={closeModal}>X</ModalClose>
          </ButtonWrapper>
          <p>To jest zawartość modala.</p>
        </Modal>
      )}
    </HeroSection>
  );
};
