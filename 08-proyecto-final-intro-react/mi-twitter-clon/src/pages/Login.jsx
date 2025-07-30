import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Por favor, ingresa tu nombre o continúa como invitado.");
      return;
    }
    onLogin(username);
    navigate("/home");
  };

  const handleGuest = () => {
    onLogin("Invitado");
    navigate("/home");
  };

  return (
    <div style={{   display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",  
      textAlign: "center" }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
        <button type="submit">Entrar</button>
      </form>

      <hr />

      <button onClick={handleGuest}>Continuar como invitado</button>
    </div>
  );
};

