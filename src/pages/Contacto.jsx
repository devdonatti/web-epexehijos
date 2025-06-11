import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contacto = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_yjd4xjl",
        "template_5xj33ki",
        form.current,
        "sqKHzu-rnYIMqajKM"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        setStatus("error");
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{ backgroundImage: "url('/fondo.png')" }}
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <div className="absolute top-[63px] left-0 right-0 bottom-0 bg-white/40 backdrop-sm z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center min-h-screen px-10 py-20 gap-10 text-blue-900">
        {/* Formulario */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 space-y-6"
        >
          <input
            name="user_name"
            placeholder="Nombre y apellido *"
            className="w-full border-b border-blue-900 bg-transparent placeholder-blue-900 focus:outline-none"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email *"
            className="w-full border-b border-blue-900 bg-transparent placeholder-blue-900 focus:outline-none"
            required
          />
          <select
            name="user_provincia"
            className="w-full border-b border-blue-900 bg-transparent text-blue-900 focus:outline-none"
            required
          >
            <option value="">Provincia *</option>
            <option>Buenos Aires</option>
            <option>Córdoba</option>
            <option>Santa Fe</option>
          </select>
          <input
            name="user_telefono"
            placeholder="Número de teléfono *"
            className="w-full border-b border-blue-900 bg-transparent placeholder-blue-900 focus:outline-none"
            required
          />
          <select
            name="user_cantidad"
            className="w-full border-b border-blue-900 bg-transparent text-blue-900 focus:outline-none"
            required
          >
            <option value="">Cantidad de mercadería mensual *</option>
            <option>0 - 50 kg</option>
            <option>50 - 100 kg</option>
            <option>100+ kg</option>
          </select>
          <textarea
            name="message"
            placeholder="Mensaje *"
            className="w-full border-b border-blue-900 bg-transparent placeholder-blue-900 focus:outline-none resize-none"
            rows={3}
            required
          ></textarea>

          <button
            type="submit"
            className={`flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-2 rounded transition ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-800"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </button>

          {/* Mensaje de estado */}
          {status === "success" && (
            <p className="text-white text-sm mt-2">
              ✅ ¡Mensaje enviado con éxito!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-700 text-sm mt-2">
              ❌ Hubo un error al enviar el mensaje. Intentá más tarde.
            </p>
          )}
        </form>

        {/* Texto y botones */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold mb-4">Nosotros</h1>
          <p className="mb-6">
            Completá el formulario y un encargado de tu zona se contactará con
            vos a la brevedad.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/epexehijos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              INSTAGRAM
            </a>
            <a
              href="https://wa.me/541136773705"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Contacto;
