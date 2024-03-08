import { useState } from "react";
import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { ContactInfo } from "../ContactsInfo/ContactInfo";
import { Logo } from "../Logo/Logo";
import { Modal } from "../Modal/Modal";
import { Navigation } from "../Navigation/Navigation";
import { BottomSeparator, HeaderLeft, Wrapper } from "./Header.styled";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header>
      <BottomSeparator>
        <Wrapper>
          <HeaderLeft>
            <Logo />
            <Navigation />
          </HeaderLeft>
          <ContactInfo />
          <BurgerIcon width="24px" height="16px" onClick={openModal} />
        </Wrapper>
        {isModalOpen && (
          <Modal onClose={closeModal} isfullscreen={true.toString()}>
            <div>xD</div>
          </Modal>
        )}
      </BottomSeparator>
    </header>
  );
};
