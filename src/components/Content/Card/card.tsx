import React, { useRef } from 'react';
import Modelo3d from '../modelo3d/modelo3d';
import skills from './skills.png'; // Ajusta la ruta según la estructura de tu proyecto
import Button from 'antd/es/button';
import { FilePdfOutlined } from '@ant-design/icons';

let classTitle: string = "text-3xl font-bold  mb-14 mt-14 sm:w-5/12 px-4 w-full animate-fade-in-right dark:text-slate-200   "
let classTitle2: string = "text-3xl font-bold sm:ml-auto  mb-14 mt-14 px-4 mr-20 sm:w-5/12 animate-fade-in-right dark:text-slate-200 flex sm:justify-end  "

let classContainerHover: string = "flex hover:scale-105 transform transition-transform duration-300"
let classCardHover: string = "w-full flex md:w-7/12 md:pr-5 mb-24  px-6 py-6  bg-white dark:bg-slate-700 dark:bg-opacity-80 bg-opacity-80 rounded-lg animate-expand-vertically animate-delay-700"

let classText: string = "text-lg dark:text-white "
let classAnimatin: string = "flex flex-wrap  px-8 hover:scale-105 transform transition-transform duration-300 "
let classAnimatin2: string = "flex flex-wrap px-8 justify-end hover:scale-105 transform transition-transform duration-300 "



const ComponenteConModelo3D = () => {

  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }
    
  const dowloadPdf= ()=> {
    const pdfFilePath = '/assets/CV-HeusserEscamilla.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'CV-Heusser-Escamilla.pdf';
    link.click();
    playSound();
  }
  return (

   
    <div className="container z-40 w-11/12 h-auto  mb-4 mt-9 bg-white bg-opacity-0 rounded-lg">
      <div className="w-full  ">
        <Modelo3d />
      </div>
      <div className={classContainerHover}>

        <h1 className="text-3xl font-bold mb-14 sm:w-5/12 mt-16 px-4 w-full animate-fade-in-right dark:text-slate-200   ">JUAN PABLO HEUSSER
          ESCAMILLA</h1>
      </div>
      <div className={classAnimatin}>
        <div className={classCardHover}>
          <div>

            <p className={classText + "mb-8"}>
              Desarrollador Full Stack con experiencia en Angular, Redux, NestJS, AWS ,
              ERP(odoo) y MongoDB, utilizando JavaScript y TypeScript para construir
              aplicaciones web robustas. Mi enfoque proactivo y habilidades de comunicación
              efectiva me permiten colaborar exitosamente en equipos, contribuyendo al
              éxito de proyectos, ya sea con las tecnologías antes mencionadas o con otros
              frameworks de JavaScript y Python, gracias a mi adaptabilidad en ámbitos de
              programación.
            </p>
            <audio ref={audioRef}>
        <source src="/assets/hero_simple-celebration-03.wav" type="audio/wav" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      
        <Button type="dashed" onClick={dowloadPdf} icon={<FilePdfOutlined  />} size='large' className='dark:bg-white bg-custom-blue bg-opacity-30 mx-auto w-full  hover:scale-105 transform transition-transform duration-300'>
        Descargar CV
      </Button>
          </div>
        </div>

        <img className=' h-60  w-auto ml-auto mr-auto hover:scale-125 transform transition-transform duration-300'  src='https://cdn-icons-png.flaticon.com/512/1488/1488581.png'></img>
      
      </div>


      <div className={classContainerHover} >

        <h1 className={classTitle2}>HABILIDADES</h1>
      </div>
      <div className={classAnimatin2}>
      <img className=' h-60 w-auto mr-auto ml-auto mb-8 hover:scale-125 transform transition-transform duration-300' src={process.env.PUBLIC_URL + '/img/skills.png'} />
       <div className={classCardHover}>
          <p className={classText}>
            Diseño de UI/UX: frameworks JavaScript, HTML5, CSS, Tailwind CSS y similares.
            Desarrollo Back-End: TypeScript (NestJS, Express), Python (Django).
            Desarrollo y consumo de API REST.
            Servicios de AWS (S3, EC2, Glue).
            Control de versiones con Git (GitHub).
            Resolución de problemas, aprendizaje continuo, gestión del tiempo,
            comunicación, resiliencia, empatía y creatividad.
          </p>
        </div>

      </div>


      <div className={classContainerHover}>

        <h1 className={classTitle}>2023- HOY | DESARROLLO FULL STACKS JUNIOR | SAVIA (FRESH SPA)</h1>
      </div>
      <div className={classAnimatin}>
        <div className={classCardHover}>
          <p className={classText}>
            Como desarrollador utilicé tecnologías como Angular, Ngrx, Ngx, Tailwind CSS,
            NestJS, TypeScript y MongoDB para llevar el sistema de ventas y gestion interna
            de la empresa a un nuevo nivel donde la integracion con un sistema de ERP como
            Odoo eran vitales con estas habilidades logre aportar con la optimizacion y
            creacion de diferentes funcionalidades que ayudan en la gestion de los procesos
            de el negocio.
          </p>
        </div>
        <img className=' h-60 w-auto mr-auto ml-auto mb-8 hover:scale-125 transform transition-transform duration-300' src={process.env.PUBLIC_URL + '/img/coding.png'} />

      </div>
      <div className={classContainerHover}>
        <h1 className={classTitle2}>2022- 2023 | DESAROLLO FREE LANCE - PYTHON</h1>

      </div>
      <div className={classAnimatin2}>
        <img className=' h-60 w-auto mr-auto ml-auto mb-8 hover:scale-125 transform transition-transform duration-300' src={process.env.PUBLIC_URL + '/img/freelance.png'} />
        <div className={classCardHover}>
          <p className={classText}>
            Como desarrollador freelance en Django, he colaborado con particulares para
            ofrecer soluciones web personalizadas y efectivas. Mis responsabilidades
            incluyen el diseño, desarrollo e implementación de aplicaciones web adaptadas
            a las necesidades individuales de los clientes.
          </p>
        </div>

      </div>

      <div className={classContainerHover}>

        <h1 className={classTitle}>2020 - 2022 | WEB MASTER -EMPRENDIMIENTO</h1>
      </div>
      <div className={classAnimatin}>
        <div className={classCardHover}>
          <p className={classText}>
            Diseñé, implementé y gestioné una tienda en línea basada en WooCommerce,
            asegurando una experiencia de compra fluida y segura. Además, lideré
            estrategias de redes sociales para aumentar la participación del usuario y la
            visibilidad de la marca.
          </p>
        </div>
        <div></div>
        <img className=' h-60 w-auto mr-auto ml-auto mt-0 mb-8 hover:scale-125 transform transition-transform duration-300 ' src={process.env.PUBLIC_URL + '/img/cloud.png'} />

      </div>


    </div>
  );
};

export default ComponenteConModelo3D;
