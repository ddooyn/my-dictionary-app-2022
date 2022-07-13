import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';

const Layout = () => {
  return (
    <Main>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  padding: 150px 50px 80px;
`;

const Section = styled.section`
  margin: auto;
  max-width: 1280px;
`;
