import React from 'react';
import Modelo3d from '../modelo3d/modelo3d';
const ComponenteConModelo3D = () => {
  return (
    <div className="container z-40 w-11/12 h-screen  ml-auto mr-auto mt-8 mb-4 bg-white bg-opacity-10 rounded-lg">
      <div className="w-full  ">
        <Modelo3d/>
          </div>
        <div className='container'>

      <h1 className="text-3xl font-bold ml-4">JUAN PABLO HEUSSER
ESCAMILLA</h1>
        </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-full md:pr-5 mb-5 mr-auto">
          <p className="text-lg mt-2 ml-4">
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
    </div>
  );
};

export default ComponenteConModelo3D;
