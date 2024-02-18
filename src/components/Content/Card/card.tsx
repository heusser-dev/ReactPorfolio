import React from 'react';
import Modelo3d from '../modelo3d/modelo3d';

let classTitle: string = "text-3xl font-bold mb-4  sm:w-5/12 px-4 w-full animate-fade-in-right dark:text-slate-200  "
let classTitle2: string = "text-3xl font-bold sm:ml-auto  mb-4 px-4 sm:w-5/12 animate-fade-in-right dark:text-slate-200 flex sm:justify-end  "

let classContainerHover: string = "container hover:scale-105 transform transition-transform duration-300"
let classCardHover: string = "w-full md:w-6/12 md:pr-5 mb-5  px-6 py-6  bg-white dark:bg-slate-700 dark:bg-opacity-80 bg-opacity-80 rounded-lg animate-expand-vertically animate-delay-700"

let classText: string = "text-lg dark:text-white "
let classAnimatin: string = "flex flex-wrap px-8 hover:scale-105 transform transition-transform duration-300 "
let classAnimatin2: string = "flex flex-wrap px-8 justify-end hover:scale-105 transform transition-transform duration-300 "

const ComponenteConModelo3D = () => {
  return (

    <div className="container z-40 w-11/12 h-auto  mb-4 mt-28 bg-white bg-opacity-0 rounded-lg">
      <div className="w-full  ">
        <Modelo3d />
      </div>
      <div className={classContainerHover}>

        <h1 className={classTitle}>JUAN PABLO HEUSSER
          ESCAMILLA</h1>
      </div>
      <div className={classAnimatin}>
        <div className={classCardHover}>
          <p className={classText}>
            Desarrollador Full Stack con experiencia en Angular, Redux, NestJS, AWS ,
            ERP(odoo) y MongoDB, utilizando JavaScript y TypeScript para construir
            aplicaciones web robustas. Mi enfoque proactivo y habilidades de comunicación
            efectiva me permiten colaborar exitosamente en equipos, contribuyendo al
            éxito de proyectos, ya sea con las tecnologías antes mencionadas o con otros
            frameworks de JavaScript y Python, gracias a mi adaptabilidad en ámbitos de
            programación.
          </p>
        </div>

      </div>


      <div className={classContainerHover} >

        <h1 className={classTitle2}>HABILIDADES</h1>
      </div>
      <div className={classAnimatin2}>
        <div className={classCardHover}>
          <p className={classText}>
            Diseño de UI/UX: frameworks JavaScript, HTML5, CSS, Tailwind CSS y similares.
            Desarrollo Back-End: TypeScript (NestJS, Express), Python (Django).
            Desarrollo y consumo de API REST.
            Servicios de AWS (S3, EC2, Glue).
            Control de versiones con Git (GitHub).
            Resolución de problemas, aprendizaje continuo, gestión del tiempo,
            comunicación, resiliencia, empatía y creatividadScript y Python, gracias a mi adaptabilidad en ámbitos de
            programación.
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

      </div>
      <div className={classContainerHover}>

        <h1 className={classTitle2}>2022- 2023 | DESAROLLO FREE LANCE - PYTHON</h1>
      </div>
      <div className={classAnimatin2}>
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

      </div>


    </div>
  );
};

export default ComponenteConModelo3D;