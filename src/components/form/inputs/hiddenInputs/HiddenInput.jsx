// HiddenInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HiddenInput = ({ name, value, className }) => (
  <input type="hidden" name={name} value={value} className={className} />
);

HiddenInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

HiddenInput.defaultProps = {
  className: '',
};

export default HiddenInput;
