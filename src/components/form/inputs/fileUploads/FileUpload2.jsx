// FileUpload2.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const UploadLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const DropArea = styled.div`
  padding: 20px;
  border: 2px dashed #ccc;
  border-radius: 4px;
  text-align: center;
  color: #666;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  ${(props) =>
    props.isDragActive &&
    `
    background-color: #e6f7ff;
    border-color: #1890ff;
  `}
`;

const PreviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const PreviewItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileUpload2 = ({
  label,
  name,
  onChange,
  multiple,
  accept,
  disabled,
  className,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [fileNames, setFileNames] = useState([]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFiles(files);
      e.dataTransfer.clearData();
    }
  };

  const handleFiles = (files) => {
    const selectedFiles = Array.from(files);
    setFileNames(selectedFiles.map((file) => file.name));
    onChange(selectedFiles);
  };

  const handleClick = () => {
    document.getElementById(`file-upload-${name}`).click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  return (
    <UploadWrapper className={className}>
      <UploadLabel htmlFor={`file-upload-${name}`}>{label}</UploadLabel>
      <DropArea
        isDragActive={isDragActive}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {isDragActive ? 'Drop files here...' : 'Drag & drop files here or click to select'}
      </DropArea>
      <HiddenFileInput
        type="file"
        id={`file-upload-${name}`}
        name={name}
        onChange={handleFileChange}
        multiple={multiple}
        accept={accept}
        disabled={disabled}
      />
      {fileNames.length > 0 && (
        <PreviewList>
          {fileNames.map((fileName, index) => (
            <PreviewItem key={index}>{fileName}</PreviewItem>
          ))}
        </PreviewList>
      )}
    </UploadWrapper>
  );
};

FileUpload2.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // Receives array of File objects
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

FileUpload2.defaultProps = {
  multiple: false,
  accept: '',
  disabled: false,
  className: '',
};

export default FileUpload2;
