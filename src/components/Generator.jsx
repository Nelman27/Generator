import React, { useState } from "react";
import axios from "axios";
import "../styles/index.css"; // Importa los estilos

function Generator() {
  const [password, setPassword] = useState("");

  const generatePassword = async () => {
    try {
      const response = await axios.get("http://localhost:8000/password/");
      const generatePassword = response.data.password;
      setPassword(generatePassword);
    } catch (error) {
      console.error(error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Contraseña copiada al portapapeles!");
  };

  return (
    <div className="background-site flex items-center justify-center min-h-screen bg-sky-500">
      <div className="generator-container p-8 text-center bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Generador de Contraseñas
        </h2>
        <button
          onClick={generatePassword}
          className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full mb-4 transition duration-200"
        >
          Generar Contraseña
        </button>
        {password && (
          <>
            <p className="mb-4 mt-6 text-white text-2xl">
              Contraseña generada:{" "}
              <strong className="text-3xl">{password}</strong>
            </p>
            <button
              onClick={copyToClipboard}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-200"
            >
              Copiar al Portapapeles
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Generator;
