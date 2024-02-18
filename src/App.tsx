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
        <div>
          <CustomHeader onChangeTheme={handleChangeTheme} />
          {/* Otros componentes */}
        </div>
        <ParticleBackground theme={theme} />
        <div className=" bg-cover mb-8 z-20 bg-center w-screen flex items-center justify-center">

          <Routes>
            <Route path="/" element={<ComponenteConModelo3D />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="demos" element={<Demos />}>
              <Route path="qrscanner" element={<QRScanner />} />
            </Route>
          </Routes>

        </div>
        <div className="text-center fixed z-50 bottom-0 container border min-w-full bg-white">
          <a href='https://github.com/heusser-dev'>

            Created by heusser-dev ©{new Date().getFullYear()}
          </a>
        </div>
      </Router>
    </div>
  );
};

export default App;
