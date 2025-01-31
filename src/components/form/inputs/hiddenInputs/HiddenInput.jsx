// HiddenInput.jsx
import React from 'react';

const HiddenInput = ({ ...props }) => (
  <input type="hidden"{...props} />
);


export default HiddenInput;
