import React, { useState } from "react";
import axios from "axios";

function Generator() {
  const [password,setPassword]=useState('');

  const generatePassword=async()=>{
    try{
      const response = await axios.get('http://localhost:8000/password/');
      const generatePassword = response.data.password;
      setPassword(generatePassword);
    } catch (error){
      console.error(error);
    }
  }
  return (
    <div>
      <button onClick={generatePassword}>Generar contraseña</button>
      <p>Contraseña generada: {password}</p>
    </div>
  )
}

export default Generator;
