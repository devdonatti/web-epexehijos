import React from "react";
import Footer from "../components/Footer";

const Catalizadores = () => {
  return (
    <div
      style={{ backgroundImage: "url('/fondo.png')" }}
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
    >
      {/* Capa blanca semi-transparente */}
      <div className="absolute top-[63px] left-0 right-0 bottom-0 bg-white/40 z-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-[#001F87] pt-40 px-10">
        <h1 className="text-3xl uppercase text-center font-bold mb-4">
          Catalizadores
        </h1>
        <p className="max-w-xl text-center">
          Los catalizadores usados de automóviles, aunque ya no estén en
          funcionamiento, siguen siendo una fuente valiosa de metales preciosos
          como el platino, el paladio y el rodio. Independientemente del metal
          base, nuestros compradores están capacitados para identificar y
          diferenciar para su correcta clasificación.
        </p>
      </div>

      {/* Footer al final con margin-top auto */}
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Catalizadores;
