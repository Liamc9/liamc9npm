import React, { useState, useEffect, useCallback } from "react";

export default function FormLogic({
  children,
  pages = [],
  initialData = {},
  onSubmit,
  validate = false,
  customValidate,
}) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const isMultiPage = pages.length > 0;
  const currentPage = isMultiPage ? pages[currentPageIndex] : null;
  const isLastPage = isMultiPage && currentPageIndex === pages.length - 1;

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prevErr) => ({ ...prevErr, [name]: undefined }));
    }
  };

  const validateRequiredFields = useCallback(
    (elements) => {
      const validationErrors = {};
      const traverseChildren = (nodeChildren) => {
        React.Children.forEach(nodeChildren, (child) => {
          if (!React.isValidElement(child)) return;
          const { name, required, label } = child.props || {};
          if (name && required) {
            const value = formData[name];
            const isEmptyString = typeof value === "string" && value.trim() === "";
            const isUncheckedBool = typeof value === "boolean" && !value;
            if (value === undefined || value === null || isEmptyString || isUncheckedBool) {
              validationErrors[name] = `${label || name} is required.`;
            }
          }
          if (child.props?.children) {
            traverseChildren(child.props.children);
          }
        });
      };
      traverseChildren(elements);
      return validationErrors;
    },
    [formData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (isMultiPage) {
      validationErrors = validateRequiredFields(currentPage.content.props.children);
    } else if (validate) {
      validationErrors = validateRequiredFields(children);
    }

    const customValidationFn = isMultiPage ? currentPage.customValidate : customValidate;
    if (customValidationFn) {
      const customErrors = customValidationFn(formData);
      validationErrors = { ...validationErrors, ...customErrors };
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (isMultiPage && !isLastPage) {
      setCurrentPageIndex((prev) => prev + 1);
    } else {
      onSubmit?.(formData);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
      setErrors({});
    }
  };

  const enhanceChildren = (elements) =>
    React.Children.map(elements, (child) => {
      if (!React.isValidElement(child)) return child;
      const { name, type, value: childValue, children: childChildren } = child.props;
      if (name) {
        const extraProps = { onChange: handleChange, name };
        if (type === "checkbox") {
          extraProps.checked = !!formData[name];
        } else if (type === "radio") {
          extraProps.checked = formData[name] === childValue;
        } else {
          extraProps.value = formData[name] || "";
        }
        if (errors[name]) {
          extraProps.error = errors[name];
        }
        return React.cloneElement(child, extraProps);
      }
      if (childChildren) {
        return React.cloneElement(child, {
          children: enhanceChildren(childChildren),
        });
      }
      return child;
    });

  return (
    <form onSubmit={handleSubmit}>
      {isMultiPage ? enhanceChildren(currentPage.content) : enhanceChildren(children)}

      {isMultiPage &&
        typeof children === "function" &&
        children({ currentPageIndex, isLastPage, handlePrevious })}
    </form>
  );
}
