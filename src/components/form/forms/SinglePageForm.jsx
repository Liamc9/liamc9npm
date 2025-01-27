// Form.js
import React from "react";
import FormLogic from "./FormLogic"; // Ensure the correct import path
import styled from "styled-components";
import TextInput from "../inputs/textInputs/TextInput";
import TextAreaInput from "../inputs/textInputs/TextAreaInput";
import SubmitButton from "../inputs/formButtons/SubmitButton";
import RangeInput from "../inputs/rangeInputs/RangeInput";
import ColorPicker from "../inputs/colorPickers/ColorPicker";

// Custom styled components for form fields
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Customize as needed */
  margin-top: 16px;
`;


export default function SinglePageForm({initialFormData, handleFormSubmit}) {

  return (
    <div>
      <FormLogic onSubmit={handleFormSubmit} initialData={initialFormData}>
        <FormContainer>
            <ColorPicker label="Color" name="color" id="color" required />
          <TextInput label="Name" type="text" name="name" id="name" required />
          <TextInput label="Email" type="email" name="email" id="email" required />
          <TextAreaInput label="Message" name="message" id="message" rows={5} required />
            <RangeInput label="Rating" name="rating" id="rating" min={1} max={5} required />
          <ButtonContainer>
            <SubmitButton>Submit</SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </FormLogic>
    </div>
  );
}
