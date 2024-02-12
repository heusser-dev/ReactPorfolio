import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Navbar from './components/Header/navbar';
import Template from './components/modelo3d/modelo3d';
import { Card } from 'antd';
import Modelo3d from './components/modelo3d/modelo3d';
import ComponenteConModelo3D from './components/Card/card';
import Sider from 'antd/es/layout/Sider';
import CustomHeader from './components/Custom-Header/customHeader';
import './App.css'; 
import ParticleBackground from './components/particles/particles';
const { Header, Content, Footer } = Layout;

const { Meta } = Card;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  return (
    <div className="custom-cursor">
      <CustomHeader/>
          <div className=" bg-cover z-30 bg-center w-screen flex items-center justify-center">
          <ParticleBackground />
          <ComponenteConModelo3D />

            {/* <Sider className="md:w-1/4">
              Sider
            </Sider> */}
            {/* <ComponenteConModelo3D /> */}
      <div className="text-center fixed  z-20 bottom-0 container bg-white ">
       Created by heusser-dev ©{new Date().getFullYear()}
      </div>
          </div>

    </div>
  );
};

export default App;
