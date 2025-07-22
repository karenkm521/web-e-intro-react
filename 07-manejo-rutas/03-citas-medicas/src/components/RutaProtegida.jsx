import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const RutaProtegida = ({ children }) => {
  const { doctorAutenticado } = useAuth();

  if (!doctorAutenticado) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

