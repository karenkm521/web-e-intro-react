import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const DoctorLogin = () => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = login(nombre, contraseña);

    if (doctor) {
      navigate(`/doctor/${doctor.id}`);
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h1>Login de Doctor</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Contraseña:</label>
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

