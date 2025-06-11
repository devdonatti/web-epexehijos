import React from "react";
import Footer from "../components/Footer";

const ServicioItem = ({ icon, title, children }) => (
  <div className="flex items-start gap-3 mb-6">
    <img className="h-10 w-10 mt-1 flex-shrink-0" src={icon} alt="" />
    <div className="text-sm sm:text-base md:text-lg leading-relaxed">
      {title && <h2 className="font-bold text-lg sm:text-xl mb-1">{title}</h2>}
      <p>{children}</p>
    </div>
  </div>
);

const Servicios = () => {
  return (
    <div
      style={{ backgroundImage: "url('/fondo.png')" }}
      className="relative bg-cover bg-center bg-no-repeat min-h-screen text-[#001F87]"
    >
      {/* Capa blanca semi-transparente SIN cubrir la barra */}
      <div className="absolute top-[63px] left-0 right-0 bottom-0 bg-white/40 backdrop-sm z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-[100px] pb-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestro servicio
        </h1>

        {/* Grid de dos columnas responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ServicioItem icon="/vect5.png">
            <strong>
              Recuperamos, reciclamos y comercializamos metales preciosos
            </strong>{" "}
            provenientes de los catalizadores de autos en desuso. Nuestro equipo
            cuenta con{" "}
            <strong>
              conocimiento, experiencia, formación constante e instalaciones
              adecuadas
            </strong>
            , para clasificar, analizar y determinar la calidad del material y
            dar mejores resultados a nuestros proveedores.
          </ServicioItem>

          <ServicioItem icon="/vect45.png">
            Brindamos las herramientas y conocimientos necesarios para que sean{" "}
            <strong>competitivos y rentables en el mercado</strong> en cada uno
            de sus sectores, apoyando a nuestros proveedores para que sigan
            creciendo junto a nosotros.
          </ServicioItem>

          <ServicioItem icon="/vect22.png" title="Primer contacto">
            El encargado de compra tiene el primer contacto con el proveedor
            interesado en trabajar con la empresa para explicarle la forma de
            trabajar que tenemos y presentar al responsable de recolectar
            mercadería en su zona.
          </ServicioItem>

          <ServicioItem icon="/vect3.png" title="Segundo contacto">
            Posterior al contacto del recolector responsable con el proveedor,
            este <strong>recolecta la mercadería seleccionándola</strong>{" "}
            correctamente haciendo el pago total en el momento.
          </ServicioItem>
        </div>

        {/* Laboratorio y cotización */}
        <div className="mt-12">
          <ServicioItem
            icon="/vect.png"
            className="text-center"
            title="Laboratorio y cotización"
          >
            Nuestro trabajo se realiza de dos maneras. Cotizando por lista y
            realizando el pago en el momento del retiro o retirando la
            mercadería para realizar el análisis en nuestra sede principal para
            obtener el resultado a pagar.
          </ServicioItem>
        </div>
      </div>
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Servicios;
