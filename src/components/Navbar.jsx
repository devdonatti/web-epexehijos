import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Inicio", to: "/" },
    { label: "Nuestro servicio", to: "/servicio" },
    { label: "Catalizadores", to: "/catalizadores" },
    { label: "RAEEs", to: "/raees" },
    { label: "Sobre nosotros", to: "/sobre-nosotros" },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <nav className="bg-blue-800/20 backdrop-blur-md fixed top-0 left-0 w-full z-50 text-white font-raleway">
      <div className="h-16 flex items-center justify-between px-6">
        {/* Logo + texto */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img className="h-12 w-12" src="/logo2.png" alt="logo" />
          </Link>
          <span className="text-lg font-semibold">EPEx e Hijos</span>
        </div>

        {/* Ícono mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links desktop */}
        <div className="hidden lg:flex gap-6 text-sm lg:text-base">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
