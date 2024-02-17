import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from '../Navbar/navbar';

const { Header } = Layout;

function CustomHeader() {

  useEffect(() => {
   
  }, []);

  return (

    
    <div className=" fixed top-0 z-50 w-screen">
    <div className="container px-4">
    <Navbar />
      {/* Contenido del encabezado */}
    </div>
  </div>
);

}

export default CustomHeader;
