import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='container' style={{ minHeight: '600px' }}>
        <Outlet />
      </div>
      <div className='container'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
