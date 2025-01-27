// FormLogic.js
import React, { useState, useEffect } from "react";

const FormLogic = ({ onSubmit, children, initialData = {}, ...props }) => {
  const [formData, setFormData] = useState(initialData);

  // Update formData if initialData changes
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  // Recursive function to enhance elements
  const enhanceElement = (element) => {
    if (!React.isValidElement(element)) return element;

    // If the element has a 'name' prop, it's likely an input
    if (element.props.name) {
      const { name } = element.props;
      return React.cloneElement(element, {
        onChange: handleChange,
        value: formData[name] || "",
      });
    }

    // If the element has children, recursively enhance them
    if (element.props.children) {
      const enhancedChildren = React.Children.map(element.props.children, enhanceElement);
      return React.cloneElement(element, { ...element.props }, enhancedChildren);
    }

    return element;
  };

  const enhancedChildren = React.Children.map(children, enhanceElement);

  return (
    <form onSubmit={handleSubmit} {...props}>
      {enhancedChildren}
    </form>
  );
};

export default FormLogic;
