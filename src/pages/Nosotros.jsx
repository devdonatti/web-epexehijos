import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div
      style={{ backgroundImage: "url('/fondo.png')" }}
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
    >
      {/* Capa blanca semi-transparente */}
      <div className="absolute top-[63px] left-0 right-0 bottom-0 bg-white/40 backdrop-sm z-0"></div>

      {/* Contenido sobre la capa */}
      <div className="relative z-10 flex flex-col items-center justify-center text-[#001F87] min-h-screen px-10 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 w-full text-left max-w-6xl">
          Nosotros
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl">
          <div>
            <p className="mb-4">
              Responsabilidad, seriedad y honestidad son tres de los principales
              valores que nos representan como Empresa.
            </p>
            <p className="mb-4">
              Recuperamos, reciclamos y comercializamos metales preciosos
              provenientes de los catalizadores de autos en desuso.
            </p>
            <p>
              Contamos con más de 20 años de experiencia en el mercado nacional
              e internacional, como Chile, Bolivia, Estados Unidos, Brasil,
              entre muchos más.
            </p>
          </div>

          <div>
            <p className="mb-4">
              Comprometidos con brindar soluciones que se adapten a las
              necesidades de nuestros clientes, los capacitamos y ayudamos para
              que su negocio crezca y mejore su desempeño en el mercado.
            </p>
            <p>
              Nuestro equipo cuenta con alto conocimiento, experiencia,
              formación constante e instalaciones adecuadas, para clasificar,
              analizar y determinar la calidad del material para darles mejores
              resultados a nuestros proveedores.
            </p>
          </div>
        </div>

        {/* Botón de llamada a la acción */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            COMENZÁ A TRABAJAR CON NOSOTROS
          </h2>
          <Link to="/contacto">
            <button className="bg-[#001F87] text-white px-6 py-2 rounded hover:bg-blue-800 transition">
              CONTACTO
            </button>
          </Link>
        </div>
      </div>
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Nosotros;
