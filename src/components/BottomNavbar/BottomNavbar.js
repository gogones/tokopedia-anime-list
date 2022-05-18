/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom';
import Box from '../Box';

const Navbar = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  z-index: 1;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
  height: 48px;
  display: flex;
`;

const NavbarItem = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: #000;
  text-decoration: none;
  border-right: 1px solid #e6e6e6;
  width: 100%;
  &:last-child {
    border-right: none;
  }
  &:hover {
    color: #000;
    background-color: #f5f5f5;
  }
`;

// eslint-disable-next-line react/prop-types
const BottomNavbar = ({menus}) => {
  const navigate = useNavigate();
  return (
    <Navbar>
      {/* eslint-disable-next-line react/prop-types */}
      {menus.map(menu => (
        <NavbarItem key={menu.id} onClick={() => navigate(menu.link)}>
          <menu.icon height="100%" />
          {menu.name}
        </NavbarItem>
      ))}
    </Navbar>
  );
};

export default BottomNavbar;
