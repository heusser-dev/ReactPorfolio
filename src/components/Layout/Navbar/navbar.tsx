import React from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (

    <nav className="md:w-4/12  md:mx-auto z-50 bg-sky-950 bg-opacity-100 text-white justify-around items-center rounded-b-lg border-x border-y animate-pulse-fade-in">
      {/* Contenido del Navbar */}
      <div className="container ">
        <div className="flex justify-around items-center">
          <ul className="flex sm:space-x-6 space-x-1">

            <div className='hover:animate-heartbeat'>

            <li><Link to="/" className="hover:text-yellow-300 text-lg sm:text-lg md:text-xl lg:text-2xl ">Inicio</Link></li>
            </div>
            <div className='hover:animate-heartbeat'>

            <li><Link to="/blog" className="hover:text-yellow-300 text-lg sm:text-lg md:text-xl lg:text-2xl ">Blog</Link></li>
            </div>

            <div className='hover:animate-heartbeat'>

            
            <li><Link to="/demos" className="hover:text-yellow-300 text-lg sm:text-lg md:text-xl lg:text-2xl">Demos</Link></li>
            </div>

            <div className='hover:animate-heartbeat'>
            <li><Link to="/about" className="hover:text-yellow-300 text-lg sm:text-lg md:text-xl lg:text-2xl">Contacto</Link></li>
            </div>
          
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
