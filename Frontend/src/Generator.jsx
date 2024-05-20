import React, { useState } from "react";
import axios from "axios";

function Generator() {
  const [password, setPassword] = useState("");
  const [generated, setGenerated] = useState(false); // State for the button

  const generarContrasena = async () => {
    setGenerated(true); // Indicate that it is generating
    const response = await axios.get("/api/generator-password/");
    setPassword(response.data.contrasena);
    setGenerated(false); // Generation finished
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <p>Your password:</p>
      <span>{password}</span>
      <button disabled={generated} onClick={generarContrasena}>
        Password generated
      </button>
    </div>
  );
}

export default Generator
