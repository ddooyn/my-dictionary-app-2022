import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <header>나만의 다채로운 사전</header>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
