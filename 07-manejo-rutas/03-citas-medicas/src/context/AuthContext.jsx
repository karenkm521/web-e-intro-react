import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [doctorAutenticado, setDoctorAutenticado] = useState(null);

  const login = (nombre, contraseña) => {
    const doctores = [
      { id: "1", nombre: "juan", contraseña: "1234" },
      { id: "2", nombre: "ana", contraseña: "5678" },
      { id: "3", nombre: "luis", contraseña: "abcd" },
    ];

    const doctor = doctores.find(
      (doc) => doc.nombre === nombre && doc.contraseña === contraseña
    );

    if (doctor) {
      setDoctorAutenticado(doctor);
      return doctor;
    }

    return null;
  };

  const logout = () => setDoctorAutenticado(null);

  return (
    <AuthContext.Provider value={{ doctorAutenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);