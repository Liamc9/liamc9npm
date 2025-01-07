import React from 'react';
import styled from 'styled-components';
import StackedList from '../molecules/stackedlist/StackedList';
import { ChevronLeftIcon } from '../Branding/icons/Icons';

const SettingsPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height to position footer at the bottom */
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* Space below the header */
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 1rem; /* Space between icon and header text */
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 600; /* Equivalent to font-semibold */
`;

const LogoutButton = styled.button`
  background-color: #f3f4f6; /* Light gray */
  color: #dc2626; /* Red text */
  border: none;
  border-radius: 0.375rem; /* Rounded corners */
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%; /* Full width */
  text-align: center;

  &:hover {
    background-color: #e5e7eb; /* Slightly darker gray */
  }
`;

const Footer = styled.footer`
  margin-top: auto; /* Push footer to the bottom */
  text-align: center;
  padding: 1rem 0;
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: #6b7280; /* Equivalent to text-gray-500 */
`;

const FooterLinks = styled.div`
  margin-top: 0.5rem;

  a {
    color: #2563eb; /* Equivalent to text-blue-600 */
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Settings = ({ settings, onLogout }) => {
  // Group settings by category
  const categories = settings.reduce((acc, setting) => {
    if (!acc[setting.category]) {
      acc[setting.category] = [];
    }
    acc[setting.category].push(setting);
    return acc;
  }, {});

  return (
    <SettingsPage>
      {/* Header Section */}
      <Header>
        <BackButton onClick={() => console.log('Go back')}>
          <ChevronLeftIcon className="w-6 h-6" />
        </BackButton>
        <HeaderTitle>Settings</HeaderTitle>
      </Header>

      {/* Grouped Categories */}
      {Object.keys(categories).map((category, index) => (
        <StackedList key={index} category={category} items={categories[category]} />
      ))}

      {/* Logout Button */}
      <LogoutButton onClick={onLogout}>Log Out</LogoutButton>

      {/* Footer */}
      <Footer>
        <div>Company Name</div>
        <div>Version 1.0.0</div>
        <FooterLinks>
          <a href="/terms">Terms</a>
          <a href="/policy">Policy</a>
        </FooterLinks>
      </Footer>
    </SettingsPage>
  );
};

export default Settings;
