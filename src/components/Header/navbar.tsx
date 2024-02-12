import React from 'react';

const Navbar: React.FC = () => {
  return (

    <nav className="md:w-4/12 md:mx-auto z-50 bg-cyan-600 text-white justify-between items-center rounded-b-lg border-x border-y">
    {/* Contenido del Navbar */}
    <div className="container mx-4 ">
      <div className="flex justify-between items-center">
        <ul className="flex space-x-11">
          <li><a href="#" className="hover:text-yellow-300 text-xl sm:text-lg md:text-xl lg:text-2xl">Inicio</a></li>
          <li><a href="#" className="hover:text-yellow-300 text-xl sm:text-lg md:text-xl lg:text-2xl">Acerca</a></li>
          <li><a href="#" className="hover:text-yellow-300 text-xl sm:text-lg md:text-xl lg:text-2xl">Servicios</a></li>
          <li><a href="#" className="hover:text-yellow-300 text-xl sm:text-lg md:text-xl lg:text-2xl">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
}

export default Navbar;
