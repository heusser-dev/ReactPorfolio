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
          <div className=" bg-cover z-30 bg-center flex items-center justify-center">
          <ParticleBackground />
          <ComponenteConModelo3D />

            {/* <Sider className="md:w-1/4">
              Sider
            </Sider> */}
            {/* <ComponenteConModelo3D /> */}
          </div>
        </Content>
      </Layout>
      <Footer className="text-center z-20">
        Ant Design ©{new Date().getFullYear()} Created by heusser-dev
      </Footer>
    </Layout>
  );
};

export default App;
