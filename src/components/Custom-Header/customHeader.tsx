import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from '../Header/navbar';

const { Header } = Layout;

function CustomHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
   
  }, []);

  return (
    <Header
      className={`sticky top-0 z-30 w-full flex items-center bg-transparent `}
    >

      <Navbar />
      {/* Contenido del encabezado */}
    </Header>
  );
}

export default CustomHeader;
