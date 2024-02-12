import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from '../Header/navbar';

const { Header } = Layout;

function CustomHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 50; // Cambia este valor según tus necesidades

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header
      className={`sticky top-0 z-10 w-full flex items-center bg-sky-900 text-white p-4 ${
        isScrolled ? 'opacity-75' : ''
      }`}
    >

      <Navbar />
      {/* Contenido del encabezado */}
    </Header>
  );
}

export default CustomHeader;
