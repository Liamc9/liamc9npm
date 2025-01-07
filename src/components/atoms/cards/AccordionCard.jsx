import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDownIcon, ChevronUpIcon, CollegeIcon } from '../../Branding/icons/Icons';

// Styled components
const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  border-left: 8px solid green;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #1a202c;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: medium;
  color: #4a5568;
`;

const Institution = styled.p`
  font-size: 16px;
  font-weight: medium;
  color: #2d3748;
`;

const GradeContainer = styled.div`
  width: 25%;
  text-align: center;
  padding-right: 16px;
`;

const AccordionContent = styled.div`
  max-height: ${(props) => (props.isOpen ? '240px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const Description = styled.p`
  padding: 24px;
  background-color: #f7fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #4a5568;
`;

export default function AccordionCard({
  Icon = CollegeIcon,
  title = 'ME',
  subtitle = 'Mechanical Engineering With Business',
  institution = 'University College Dublin',
  grade = '1:1',
  gpa = '3.72',
  description = 'This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains. Key modules included Thermodynamics, Fluid Mechanics, Project Management, and Business Analytics. Achievements include leading a team project on sustainable energy solutions that received commendation from faculty.',
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      {/* Accordion Header */}
      <AccordionHeader onClick={toggleAccordion}>
        <IconContainer>
          <Icon size={80} color="#38a169" />
        </IconContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Institution>{institution}</Institution>
        </ContentContainer>
        <GradeContainer>
          <p>Grade: {grade}</p>
          <p>GPA: {gpa}</p>
          {isOpen ? (
            <ChevronUpIcon size={24} color="#718096" />
          ) : (
            <ChevronDownIcon size={24} color="#718096" />
          )}
        </GradeContainer>
      </AccordionHeader>

      {/* Accordion Content */}
      <AccordionContent isOpen={isOpen}>
        <Description>{description}</Description>
      </AccordionContent>
    </AccordionWrapper>
  );
}
