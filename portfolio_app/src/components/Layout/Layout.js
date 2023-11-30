import React from 'react';
import "./Layout.scss";
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

function Layout() {
    
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout