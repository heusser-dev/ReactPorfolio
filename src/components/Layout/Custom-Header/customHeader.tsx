import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from '../Navbar/navbar';
import SunOutlined from '@ant-design/icons/lib/icons/SunOutlined';
import Reloj from '../../Content/Clock/Clock';

interface CustomHeaderProps {
  onChangeTheme: () => void;
}

function CustomHeader({ onChangeTheme }: CustomHeaderProps) {
  useEffect(() => {
    // Aquí puedes colocar cualquier efecto necesario para CustomHeader
  }, []);
  return (
    <div className="fixed top-0 z-50 min-w-full ">
      <div className="container  min-w-full px-2 mx-auto ">
        <Navbar /> {/* Asegúrate de importar Navbar si es necesario */}
        <SunOutlined className=' md:fixed flex ml-1 top-0 px-2 py-2 rounded-full dark:text-white' onClick={onChangeTheme} style={{ fontSize: '26px' }}/>        {/* Contenido del encabezado */}
        <Reloj  />
      </div>
    </div>
  );
}
export default CustomHeader;
