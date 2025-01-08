import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

const Button = styled.button`
  flex: 1;
  padding: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
  color: ${({ isActive, activeColor }) => (isActive ? activeColor : 'inherit')};

`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  transition: transform 0.3s ease, width 0.3s ease;
`;

const TabGroup = ({ tabs, activeColor, activeIndex: controlledIndex, onTabChange }) => {
  const isControlled = controlledIndex !== undefined && typeof onTabChange === 'function';
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = isControlled ? controlledIndex : internalIndex;

  const tabContainerRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({});

  useEffect(() => {
    if (tabContainerRef.current) {
      const containerWidth = tabContainerRef.current.offsetWidth;
      const tabWidth = containerWidth / tabs.length;
      setUnderlineStyle({
        width: `${tabWidth}px`,
        transform: `translateX(${activeIndex * tabWidth}px)`,
      });
    }
  }, [activeIndex, tabs.length]);

  const handleTabClick = (index) => {
    if (isControlled) {
      onTabChange(index);
    } else {
      setInternalIndex(index);
      if (onTabChange) {
        onTabChange(index);
      }
    }
  };

  return (
    <Container ref={tabContainerRef}>
      {tabs.map((tabName, index) => (
        <Button
          key={tabName}
          isActive={activeIndex === index}
          activeColor={activeColor}
          onClick={() => handleTabClick(index)}
        >
          {tabName}
        </Button>
      ))}
      <Underline style={{ ...underlineStyle, backgroundColor: activeColor }} />
    </Container>
  );
};

TabGroup.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeColor: PropTypes.string,
  activeIndex: PropTypes.number,
  onTabChange: PropTypes.func,
};

TabGroup.defaultProps = {
  activeColor: '#007bff',
  activeIndex: undefined,
  onTabChange: undefined,
};

export default TabGroup;
