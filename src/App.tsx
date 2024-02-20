import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Template from './components/Content/modelo3d/modelo3d';
import { Card } from 'antd';
import Modelo3d from './components/Content/modelo3d/modelo3d';
import ComponenteConModelo3D from './components/Content/Card/card';
import Sider from 'antd/es/layout/Sider';
import CustomHeader from './components/Layout/Custom-Header/customHeader';
import './App.css';
import ParticleBackground from './components/Layout/particles/particles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Demos from './pages/Demos';
import About from './pages/Contacto';
import QRScanner from './components/Apps/Qrscanner/Qrscanner';
import GithubOutlined from '@ant-design/icons/lib/icons/GithubOutlined';
import LinkedinOutlined from '@ant-design/icons/lib/icons/LinkedinOutlined';
import QrScanner from './components/Apps/Qrscanner/Qrscanner';



const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (theme === "dark") {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [theme]);


  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="">
      <Router>
        <div className='bt-0'>
          <CustomHeader onChangeTheme={handleChangeTheme} />
          {/* Otros componentes */}
        </div>
        <ParticleBackground theme={theme} />
        <div className=" bg-cover mb-0 z-20 bg-center w-full flex items-center justify-center">

          <Routes>
            <Route path="/" element={<ComponenteConModelo3D />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="demos" element={<Demos />}>
              <Route path="qrscanner" element={<QrScanner />} />
            </Route>          
            </Routes>   

        </div>
        <div className="fixed z-50 text-center py-1 bottom-0 container border min-w-full bg-white">
          <a className='p-2' href='https://github.com/heusser-dev'> 

            <GithubOutlined style={{ fontSize: '24px' }} />
          </a>
          <a className="px-2" >

            Created by heusser-dev
          </a>
          <a className="p-2" href='https://www.linkedin.com/in/juan-pablo-heusser-escamilla-9a341721a/'>

            <LinkedinOutlined style={{ fontSize: '24px', }} />
          </a>

        </div>
      </Router>
    </div>
  );
};

export default App;
