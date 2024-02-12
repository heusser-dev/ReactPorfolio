import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from '../Header/navbar';

const { Header } = Layout;

function CustomHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
   
  }, []);

  return (

    <div className=" fixed top-0 z-40  bg-transparent w-screen">
    <div className="container px-4">
    <Navbar />
      {/* Contenido del encabezado */}
    </div>
  </div>
);

}

export default CustomHeader;
