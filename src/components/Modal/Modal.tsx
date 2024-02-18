import { useEffect } from "react";
import {
  ButtonWrapper,
  ModalBackground,
  ModalClose,
  ModalContent,
} from "./Modal.styled";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContent>
        <ButtonWrapper>
          <ModalClose onClick={handleClose}>X</ModalClose>
        </ButtonWrapper>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};
