import React from 'react'
import Header from "../Sidebar/Header";
import Sidebar from "../Sidebar/PrimarySidebar";
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
    <Header />
    <Sidebar />
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


export default Layout