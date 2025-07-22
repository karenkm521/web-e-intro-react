import React, { useState } from 'react';

export const AgendarCita = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    fecha: '',
    hora: '',
    motivo: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('Cita agendada correctamente');
    // Aquí puedes enviar los datos a una API si tienes backend
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Agendar una cita</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div>
          <label>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fecha de la cita</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hora</label>
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Motivo de la cita</label>
          <textarea
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">Agendar cita</button>
      </form>
    </div>
  );
};