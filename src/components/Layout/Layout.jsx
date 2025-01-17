import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Header from "../header/Header";
import Sidebar from "../Sidebar/PrimarySidebar";
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation(); // Get the current location

  return (
    <>
    <Header />
    {/* Conditionally render Sidebar based on the current route */}
    {location.pathname !== '/' && location.pathname !== '/signup' && <Sidebar />}
    <div className='container'>
      <div className="custom-frame">
        <div className='frame-content'>
    <main>
      <Outlet />  {/* Renders child routes here */}
    </main>
    </div>
    </div>
    </div>
  </>
  )
}

const styles = {
  main: {
    background: '#fff',
    left: '250px',
  },
};

export default Layout;
