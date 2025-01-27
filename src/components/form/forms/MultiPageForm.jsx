// MultiPageForm.jsx
import React, { useState } from 'react';
import FormLogic from './FormLogic';
import TextInput from '../inputs/textInputs/TextInput';
import TextAreaInput from '../inputs/textInputs/TextAreaInput';
import SubmitButton from '../inputs/formButtons/SubmitButton';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isFirstStep ? 'flex-end' : 'space-between')};
  margin-top: 16px;

  button {
    padding: 0.5rem 1rem;
    background-color: #6200ee;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

const MultiPageForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (data) => {
    console.log("Multi Page Form Submitted:", data);
    // Implement your submission logic here (e.g., API call)
  };

  const nextStep = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    setErrors({});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required.';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid.';
      }
    }
    if (step === 2) {
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required.';
      }
    }
    return newErrors;
  };

  return (
    <FormLogic onSubmit={handleFormSubmit} initialData={formData}>
      <FormContainer>
        {currentStep === 1 && (
          <>
            <TextInput
              label="Name"
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <TextInput
              label="Email"
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </>
        )}
        {currentStep === 2 && (
          <>
            <TextAreaInput
              label="Message"
              name="message"
              id="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
          </>
        )}
        <ButtonContainer isFirstStep={currentStep === 1}>
          {currentStep > 1 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}
          {currentStep < 2 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 2 && <SubmitButton>Submit</SubmitButton>}
        </ButtonContainer>
      </FormContainer>
    </FormLogic>
  );
};

export default MultiPageForm;
