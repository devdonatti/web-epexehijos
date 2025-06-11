import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: "url('/fondo.png')" }}
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-start justify-center flex-col text-white pt-20 px-10"
    >
      <h1 className="text-2xl font-cursiva mb-4">Conectando oportunidades</h1>
      <Link
        to="/sobre-nosotros"
        className="bg-[#001F87] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Sobre nosotros
      </Link>
    </div>
  );
}
