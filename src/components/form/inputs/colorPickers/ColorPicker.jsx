// ColorPicker.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorPickerWrapper = styled.div`
      grid-column: ${(props) => props.gridSpan || 'auto'};

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const ColorInput = styled.input`
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const ColorPicker = ({ label, ...props }) => (
  <ColorPickerWrapper gridSpan={props.gridSpan}>
    <Label htmlFor={props.id}>{label}</Label>
    <ColorInput type="color" {...props}     />
  </ColorPickerWrapper>
);


export default ColorPicker;
