import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import styled from 'styled-components';
import { MenuIcon } from "../Branding/icons/Icons";

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  height: 62px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  background-color: var(--beach-bg);
  padding: 0 16px;
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

const Logo = styled.img`
  width: 116px;
  margin-right: 16px;
`;

const MenuContainer = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 32px;
  }
`;

const MenuButton = styled.button`
  color: ${(props) => (props.active ? 'blue' : 'black')};
  border-bottom: ${(props) => (props.active ? '2px solid blue' : 'none')};
  transition: all 0.3s;

  &:hover {
    color: blue;
  }
`;

const HeaderIcons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SignInButton = styled.button`
  border-radius: 9999px;
  background-color: black;
  color: white;
  padding: 8px 24px;
  transition: all 0.3s;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:focus {
    transform: translateY(2px);
  }
`;

const TopNavBar2 = ({ menuItems, activeTab: propActiveTab, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(propActiveTab);
  const navigate = useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => setIsSideNavOpen((prev) => !prev);
  const closeSideNav = () => setIsSideNavOpen(false);

  useEffect(() => {
    setActiveTab(propActiveTab);
  }, [propActiveTab]);

  const handleTabClick = (item) => {
    setActiveTab(item);
    if (onTabClick) {
      onTabClick(item);
    }
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <>
      <NavBarContainer>
        <DrawerButton onClick={toggleSideNav}>
          <MenuIcon className="icon" />
        </DrawerButton>
        <Logo
          src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993"
          alt="Closca Logo"
        />
        <MenuContainer>
          {menuItems.map((item) => (
            <MenuButton
              key={item}
              onClick={() => handleTabClick(item)}
              active={item === activeTab}
            >
              {item}
            </MenuButton>
          ))}
        </MenuContainer>
        <HeaderIcons>
          <SignInButton onClick={handleSignInClick}>Sign In</SignInButton>
        </HeaderIcons>
      </NavBarContainer>
      <SideBar
        navLinks={[
          { Icon: () => {}, isFooter: false, name: 'Home', path: '/home' },
          { Icon: () => {}, isFooter: false, name: 'About', path: '/about' },
          { Icon: () => {}, isFooter: true, name: 'Settings', path: '/settings' },
          { Icon: () => {}, isFooter: true, name: 'Contact', path: '/contact' },
        ]}
        isSideNavOpen={isSideNavOpen}
        toggleSideNav={toggleSideNav}
        closeSideNav={closeSideNav}
        hideProfile={false}
        onLogout={() => {}}
        profilePic="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
        signInColor="#ff4500"
        username="Jane Doe"
      />
    </>
  );
};

TopNavBar2.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func,
};

TopNavBar2.defaultProps = {
  activeTab: '',
  onTabClick: null,
};

export default TopNavBar2;
