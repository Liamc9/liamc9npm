// FileInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const FileInputElement = styled.input`
  font-size: 16px;
`;

const FileInput = ({
  label,
  name,
  onChange,
  accept,
  multiple,
  required,
  disabled,
  className,
}) => (
  <FileInputWrapper className={className}>
    <Label htmlFor={name}>{label}</Label>
    <FileInputElement
      type="file"
      id={name}
      name={name}
      onChange={(e) => onChange(e)}
      accept={accept}
      multiple={multiple}
      required={required}
      disabled={disabled}
    />
  </FileInputWrapper>
);

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

FileInput.defaultProps = {
  accept: '',
  multiple: false,
  required: false,
  disabled: false,
  className: '',
};

export default FileInput;
