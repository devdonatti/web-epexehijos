import React from "react";

const Raees = () => {
  return (
    <div
      style={{ backgroundImage: "url('/fondo.png')" }}
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
    >
      {/* Capa blanca semi-transparente */}
      <div className="absolute top-[63px] left-0 right-0 bottom-0 bg-white/40 backdrop-sm z-0"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-blue-900 min-h-screen px-10 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Residuos de Aparatos Eléctricos y Electrónicos
        </h1>

        {/* Texto en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl">
          <div>
            <p className="mb-4">
              Los RAEEs, o Residuos de Aparatos Eléctricos y Electrónicos, son
              los desechos generados por dispositivos eléctricos y electrónicos
              que han llegado al final de su vida útil. Esto incluye una amplia
              variedad de productos como teléfonos móviles, computadoras,
              televisores, electrodomésticos, equipos de iluminación, entre
              otros.
            </p>
            <p>
              Estos residuos son especialmente importantes desde el punto de
              vista ambiental, ya que contienen componentes y materiales que
              pueden ser peligrosos si se desechan de manera incorrecta. Sin
              embargo, los RAEEs también son una fuente valiosa de materiales
              recuperables, como metales, plásticos y vidrios, que pueden ser
              reciclados y reutilizados en la fabricación de nuevos productos.
            </p>
          </div>

          <div>
            <p className="mb-4">
              Por ello, es fundamental que estos residuos se gestionen de forma
              responsable, siguiendo procesos adecuados de recolección,
              tratamiento y reciclaje.
            </p>
            <p>
              En nuestra empresa, nos comprometemos a promover la correcta
              gestión de los RAEEs, facilitando su recogida y asegurando un
              tratamiento respetuoso con el medio ambiente. De esta manera,
              contribuimos a reducir la contaminación, minimizar el desperdicio
              y fomentar una economía circular más sostenible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Raees;
