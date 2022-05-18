/** @jsxImportSource @emotion/react */
import React from 'react';
import {Outlet} from 'react-router-dom';
import {css} from '@emotion/react';
import BottomNavbar from '../BottomNavbar/BottomNavbar';
import Box from '../Box';
import Home from '../Icons/Home';
import Collection from '../Icons/Collection';

const menus = [
  {
    id: 1,
    name: 'Home',
    link: '/',
    icon: Home,
  },
  {
    id: 2,
    name: 'Collections',
    link: '/collections',
    icon: Collection,
  },
];

const Layout = () => (
  <Box
    css={css`
      width: 100vw;
    `}>
    <Box
      css={css`
        margin-bottom: 56px;
        padding: 0 16px;
      `}>
      <Outlet />
    </Box>
    <BottomNavbar menus={menus} />
  </Box>
);

export default Layout;
