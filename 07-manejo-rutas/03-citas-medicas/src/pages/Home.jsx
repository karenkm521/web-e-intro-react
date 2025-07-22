import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Bienvenido a la Página del Hospital.</p>

      <div>
        <h2>Pacientes</h2>
        <p>
          <Link to="/agendar">Agendar una cita médica</Link>
        </p>
      </div>

      <div>
        <h2>Doctores</h2>
        <p>
          <Link to="/login">Iniciar sesión como doctor</Link>
        </p>
      </div>
    </div>
  );
};

