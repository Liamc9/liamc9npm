// DeleteModal.js
import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

// Fade-in animation for the modal
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Slide-down animation for the modal content
const slideDown = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out forwards;
  z-index: 1000; /* Ensure it sits above other elements */
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.3s ease-out forwards;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Icon = styled.svg`
  height: 3rem;
  width: 3rem;
  fill: #ef4444; /* Red color for the icon */
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Message = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: medium;
  transition: all 0.3s ease-in;
  border: 2px solid;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CancelButton = styled(Button)`
  border-color: #d1d5db;
  background-color: #e5e7eb;
  color: #4b5563;

  &:hover {
    border-color: #9ca3af;
    background-color: #d1d5db;
  }
`;

const ConfirmButton = styled(Button)`
  border-color: #ef4444;
  background-color: #ef4444;
  color: white;

  &:hover {
    background-color: transparent;
    color: #ef4444;
  }
`;

// DeleteModal Component
const DeleteModal = ({ onCancel, onConfirm, title, message }) => {
  // Prevent scrolling when the modal is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Render the modal using React Portal
  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>
        <ModalContent>
          <Icon
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              fillRule="evenodd"
            />
          </Icon>
          <Title>{title || "Are you sure?"}</Title>
          <Message>
            {message ||
              "Do you really want to continue? This process cannot be undone."}
          </Message>
        </ModalContent>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

export default DeleteModal;
