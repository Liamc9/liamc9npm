// IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavBar = styled.nav`
  position: relative; /* Ensures the navbar is part of the document flow */
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const BrandLink = styled(Link)`
  font-size: 1.875rem; /* Text size: 30px */
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
`;

const SignInLink = styled(Link)`
  border-radius: 0.375rem;
  background-color: ${(props) => props.signInColor || "#000000"};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6d28d9; /* Default hover color */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;

// Component
export default function TopNavBar({ appName = "AppName", signInColor = "#000000" }) {
  return (
    <NavBar>
      <NavContent>
        <BrandLink to="/home">{appName}</BrandLink>
        <SignInLink to="/login" signInColor={signInColor}>
          Sign In
        </SignInLink>
      </NavContent>
    </NavBar>
  );
}
