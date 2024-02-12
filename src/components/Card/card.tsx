import React from 'react';
import Modelo3d from '../modelo3d/modelo3d';
const ComponenteConModelo3D = () => {
  return (
    <div className="container z-40 w-11/12 h-screen  ml-auto mr-auto mt-8 bg-white bg-opacity-10 rounded-lg">
      <div className="w-full md:w-2/6 ">
        <Modelo3d/>
          </div>
        <div className='container'>

      <h1 className="text-3xl font-bold ml-4">Ant Design Component</h1>
        </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-full md:pr-5 mb-5 mr-auto">
          <p className="text-lg mt-2 ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            molestie commodo quam, vel molestie libero fermentum eu. Sed nec
            ligula a urna pretium tristique.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ComponenteConModelo3D;
