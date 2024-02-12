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
    <Layout>
      <CustomHeader/>
      <Layout>
      <Content>
          <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
          <ParticleBackground />

            {/* <Sider className="md:w-1/4">
              Sider
            </Sider> */}
            <ComponenteConModelo3D />
            {/* <ComponenteConModelo3D /> */}
          </div>
        </Content>
      </Layout>
      <Footer className="text-center">
        Ant Design ©{new Date().getFullYear()} Created by heusser-dev
      </Footer>
    </Layout>
  );
};

export default App;
