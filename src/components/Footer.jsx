import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-blue-900 relative z-20">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between px-6 py-4">
        {/* Título centrado en todas las vistas */}
        <div className="text-center sm:text-left w-full sm:w-auto">
          <p className="text-sm sm:text-base font-medium">
            EPEx e Hijos - Buenos Aires
          </p>
        </div>

        {/* Crédito centrado en mobile y alineado a la derecha en desktop */}
        <div className="text-center sm:text-right w-full sm:w-auto mt-1 sm:mt-0">
          <p className="text-xs sm:text-sm text-gray-300">
            Desarrollado por{" "}
            <a
              href="https://www.mdev.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              MDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
