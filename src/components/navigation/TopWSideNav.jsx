import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuIcon } from "../Branding/icons/Icons";
import SideBar from "./SideBar"; // Adjust the import path as needed

export default function TopWSideNav({
  appName = "AppName",
  signInColor = "#000000",
  navLinks = [],
  username = "John Doe",
  profilePic = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
  onLogout,
  hideProfile = false,  // New prop for hiding profile section
}) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => setIsSideNavOpen((prev) => !prev);
  const closeSideNav = () => setIsSideNavOpen(false);

  return (
    <>
      <NavBar>
        <NavContent>
          <DrawerButton onClick={toggleSideNav}>
            <MenuIcon className="icon" />
          </DrawerButton>
          <BrandLink to="/home">{appName}</BrandLink>
          <SignInLink to="/login" signInColor={signInColor}>
            Sign In
          </SignInLink>
        </NavContent>
      </NavBar>
      
      {/* Pass hideProfile and other props to SideBar */}
      <SideBar
        navLinks={navLinks}
        username={username}
        profilePic={profilePic}
        onLogout={onLogout}
        isSideNavOpen={isSideNavOpen}
        toggleSideNav={toggleSideNav}
        closeSideNav={closeSideNav}
        hideProfile={hideProfile}
      />
    </>
  );
}

// Styled Components for TopWSideNav remain unchanged
const NavBar = styled.nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const DrawerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`;

const BrandLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`;

const SignInLink = styled(Link)`
  border-radius: 0.375rem;
  background-color: ${(props) => props.signInColor};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;
