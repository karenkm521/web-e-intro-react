import { Link } from "react-router-dom";



export const Citas = () => {
  const citas = [
    { id: 1, paciente: 'Juan Pérez',motivo:"Dolor adominal" },
    { id: 2, paciente: 'Ana López',motivo: 'Chequeo general'},
    { id: 3, paciente: 'Luis García', motivo: 'Dolor de cabeza'},
  ];

  return (
    <div>
      <h1>Lista de Citas Médicas</h1>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <p>Ver detalles de {cita.paciente} :: Motivo de Consulta: {cita.motivo}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
}