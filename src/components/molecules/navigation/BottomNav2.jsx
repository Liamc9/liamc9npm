import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const MenuContainer = styled.div`
  --duration: 0.45s;
  --cubic: cubic-bezier(0.4, 0, 0.2, 1);
  --color-1: #d5dadd;
  --color-2: #b99976;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff; /* Optional: Change background color to fit the design */
  z-index: 1000; /* Ensures it's above other content */
`;

const Menu = styled.menu`
  margin: 0;
  width: 100%;
  display: flex;
  height: 7rem;
  user-select: none;
  position: relative;
  align-items: center;
  padding: 0 1.9em 2em;
  justify-content: center;
  max-width: 100%; /* Ensures it doesn't overflow */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Optional: Adds a shadow at the top */
`;

const MenuItem = styled.button`
  all: unset;
  flex-grow: 1;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  padding-top: 0.5em;
  position: relative;
  align-items: center;
  color: var(--color-1);
  justify-content: center;
  transition: flex-grow var(--duration) var(--cubic);

  &.active {
    flex-grow: 2.7;
    color: var(--color-2);
  }

  &::after {
    left: 0;
    bottom: 0;
    content: " ";
    height: 0.25em;
    position: absolute;
    border-radius: 2em;
    transform-origin: left center;
    background-color: currentColor;
    width: calc(var(--lineWidth) + 5px);
    transform: translate3d(3em, 0, 0) scaleX(0);
    transition: transform calc(var(--duration) + 0.2s) var(--cubic);
  }

  &.active::after {
    transform: translate3d(6.3em, 0, 0) scaleX(1);
    transition: transform var(--duration) var(--cubic);
  }
  &.active::before {
  transform: scale(1);
}

  &.active .menu__icon {
    transform: translate3d(-95%, 0, 0);
  }
`;

const MenuText = styled.strong`
  left: 4.15em;
  font-size: 1.5em;
  position: absolute;
  text-transform: capitalize;
  letter-spacing: 0.01em;
  transform: translate3d(0, 109%, 0);
  transition: transform calc(var(--duration) / 3.7);

&.active {
  transform: translate3d(0, 0, 0);
  transition: transform calc(var(--duration) / 1.5);
}
`

const Icon = styled.div`
  font-size: 1.05em;
  stroke: currentColor;
  transition: transform var(--duration) var(--cubic);
  fill: none;
  width: 2.5em;
  height: 2.5em;
  display: block;
  stroke-width: 15;
  stroke-miterlimit: 10;
`;

const BottomNav2 = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef([]);
  const [lineWidths, setLineWidths] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const updateLineWidths = () => {
      const widths = textRefs.current.map((text) => (text ? text.offsetWidth : 0));
      setLineWidths(widths);
    };

    updateLineWidths();
    window.addEventListener('resize', updateLineWidths);

    return () => {
      window.removeEventListener('resize', updateLineWidths);
    };
  }, [items]);

  const handleClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    if (items[index].path) {
      navigate(items[index].path); // Navigate to the specified path
    }
  };

  return (
    <>
    <MenuContainer>
      <Menu>
        {items.map((item, index) => (
          <MenuItem
          key={index}
          className={activeIndex === index ? 'active' : ''}
          onClick={() => handleClick(index)}
          style={{ '--lineWidth': `${lineWidths[index] || 0}px` }}
        >
             <Icon className="menu__icon">
              {React.cloneElement(item.icon, {
                className: `${item.icon.props.className || ''} ${
                  activeIndex === index ? 'active' : ''
                }`,
              })}
            </Icon>
            <MenuText
              className={activeIndex === index ? 'active' : ''}
              ref={(el) => (textRefs.current[index] = el)}
            >
              {item.text}
            </MenuText>
          </MenuItem>
        ))}
      </Menu>
      </MenuContainer>



      {/* CSS Styles */}
      <style>{`
        .icon {
          width: 2.5em;
          height: 2.5em;
        }
      `}</style>
    </>
);
};

export default BottomNav2;
