import { useEffect, useState } from "react";
import {
  ButtonWrapper,
  ModalBackground,
  ModalClose,
  ModalContent,
} from "./Modal.styled";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isfullscreen?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  isfullscreen,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContent isfullscreen={isfullscreen} isClosing={isClosing}>
        <ButtonWrapper>
          <ModalClose onClick={handleClose}>X</ModalClose>
        </ButtonWrapper>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};
