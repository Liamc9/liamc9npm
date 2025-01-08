import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronLeftIcon } from '../Branding/icons/Icons';

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: ${(props) => props.backgroundColor || '#000'};
color: ${(props) => props.color || '#fff'};
  height: 50px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .svg {
  height: 24px;
  width: 24px;
  }
`;

const CenterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// Component
const TopNavBar3 = ({ title, backgroundColor, color }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container backgroundColor={backgroundColor} color={color}>
      {/* Left Section: Back Button */}
      <LeftSection onClick={handleBack}>
        <ChevronLeftIcon className={'svg'} />
      </LeftSection>

      {/* Center Section: Title */}
      <CenterSection>{title}</CenterSection>

      {/* Right Section (Optional Icons or Content) */}
      <RightSection>
        {/* Add icons or content here if needed */}
      </RightSection>
    </Container>
  );
};

TopNavBar3.propTypes = {
  /** The title/name to display in the center of the nav bar */
  title: PropTypes.string.isRequired,
  /** The background color of the nav bar */
  backgroundColor: PropTypes.string,
};

TopNavBar3.defaultProps = {
  backgroundColor: '#000', // fallback color
};

export default TopNavBar3;
