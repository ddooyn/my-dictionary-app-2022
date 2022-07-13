import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';

const Layout = () => {
  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 150px;
  padding: 0 50px 80px;
`;
