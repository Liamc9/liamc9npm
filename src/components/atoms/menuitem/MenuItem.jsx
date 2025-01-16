import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../../Branding/icons/Icons';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f3f3f3; /* Equivalent to hover:bg-gray-100 */
  }
`;

const IconWrapper = styled.div`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  .svg {
    width: 100%;
    height: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`;

const MenuItem = ({ icon: IconComponent, text, link }) => {
  return (
    <StyledLink to={link}>
      <TextWrapper>
        {IconComponent && (
          <IconWrapper>
            <IconComponent className='svg'/>
          </IconWrapper>
        )}
        <div>{text}</div>
      </TextWrapper>
      <IconContainer>
        <ChevronRightIcon />
      </IconContainer>
    </StyledLink>
  );
};

export default MenuItem;
