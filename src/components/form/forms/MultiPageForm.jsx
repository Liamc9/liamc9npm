// MultiPageForm.jsx
import React from "react";
import styled from "styled-components";
import FormLogic from "./FormLogic";

// Import input components
import TextInput from "../inputs/textInputs/TextInput";
import ColorPicker from "../inputs/colorPickers/ColorPicker";
import RangeInput from "../inputs/rangeInputs/RangeInput";
import Checkbox3 from "../inputs/checkboxInputs/Checkbox3";
import ToggleSwitch2 from "../inputs/toggleSwitches/ToggleSwitch2";
import RadioButtons2 from "../inputs/radioInputs/RadioButtons2";

// Import button components
import SubmitButton from "../inputs/formButtons/SubmitButton";
import ResetButton from "../inputs/formButtons/ResetButton";

// Styled containers for layout
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two-column layout */
  gap: 16px;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 800px; /* Increased width for better layout */
  margin: 0 auto;
  background-color: #fff;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Single-column layout on small screens */
  }
`;

const ButtonContainer = styled.div`
  grid-column: 1 / -1; /* Span all columns */
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 600px) {
    flex-direction: column; /* Stack buttons vertically on small screens */
  }
`;


/** Define Custom Validation Logic */
const validatePreferences = (formData) => {
  const errors = {};
  if (formData.rating < 3) {
    errors.rating = "Rating must be at least 3.";
  }
  if (formData.color === "#000000") {
    errors.color = "Color cannot be black.";
  }
  return errors;
};

/** Define Pages */
const getPages = () => [
  {
    customValidate: null,
    content: (
      <FormContainer>
        <h2>Page 1: Personal Info</h2>
        <TextInput label="Name" type="text" name="name" id="name" required gridSpan='span 2'/>
        <TextInput label="Email" type="email" name="email" id="email" required />

        {/* Wrap the Message input to span two columns */}
        <TextInput
          label="Message"
          type="textarea"
          name="message"
          id="message"
          required
          gridSpan="span 2"
        />
      </FormContainer>
    ),
  },
  {
    customValidate: validatePreferences,
    content: (
      <FormContainer>
        <h2>Page 2: Preferences</h2>
        <ColorPicker label="Favorite Color" name="color" id="color" required />
        <RangeInput
          label="Rating"
          name="rating"
          id="rating"
          min={1}
          max={5}
          required
        />
        <Checkbox3 name="checkbox" id="checkbox" label="Accept Terms" required />
        <ToggleSwitch2 name="toggle" id="toggle" label="Enable Feature" />

        {/* Wrap the RadioButtons to span two columns */}
        <RadioButtons2
          label="Role"
          name="role"
          options={[
            { id: "designer", value: "designer", label: "Designer", defaultChecked: true },
            { id: "student", value: "student", label: "Student" },
            { id: "teacher", value: "teacher", label: "Teacher" },
          ]}
          required
          gridColumn="1 / -1"
        />
      </FormContainer>
    ),
  },
  {
    customValidate: null,
    content: (
      <FormContainer>
        <h2>Page 3: Review & Submit</h2>
      </FormContainer>
    ),
  },
];

/** Render Navigation Buttons */
const renderButtonLayout = ({ currentPageIndex, isLastPage, handlePrevious }) => (
  <ButtonContainer>
    {/* Previous Button */}
    {currentPageIndex > 0 && (
      <ResetButton type="button" onClick={handlePrevious}>
        Previous
      </ResetButton>
    )}

    {/* Next or Submit Button */}
    <SubmitButton type="submit">{isLastPage ? "Submit" : "Next"}</SubmitButton>
  </ButtonContainer>
);

/** MultiPageForm Component */
export default function MultiPageForm({ initialData = {}, handleFormSubmit }) {
  const pages = getPages();

  return (
    <FormLogic
      pages={pages}
      initialData={initialData}
      onSubmit={handleFormSubmit}
    >
      {({ currentPageIndex, isLastPage, handlePrevious, formData }) => (
        <>
          {renderButtonLayout({ currentPageIndex, isLastPage, handlePrevious })}
        </>
      )}
    </FormLogic>
  );
}
