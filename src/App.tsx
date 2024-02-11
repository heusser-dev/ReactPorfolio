import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Navbar from './components/Header/navbar';
import Template from './components/modelo3d/modelo3d';
import { Card } from 'antd';
import Modelo3d from './components/modelo3d/modelo3d';
import ComponenteConModelo3D from './components/Card/card';
const { Header, Content, Footer } = Layout;

const { Meta } = Card;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  return (
    <Layout>
      <Header className="sticky top-0 z-10 w-full flex items-center bg-sky-900 text-white p-4">
      <Navbar></Navbar>
        
      </Header>
      <ComponenteConModelo3D/>
      <Footer className="text-center">
        Ant Design ©{new Date().getFullYear()} Created by heusser-dev
      </Footer>
    </Layout>
  );
};

export default App;
