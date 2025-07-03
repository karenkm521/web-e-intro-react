import './App.css';
import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [mostrarRecientes, setMostrarRecientes] = useState(false);

  // Filtro de recientes
  const tareasFiltradas = useMemo(() => {
    if (mostrarRecientes) {
      const ultimas = 3;
      return tareas.slice(-ultimas);
    }
    return tareas;
  }, [tareas, mostrarRecientes]);

  // Total de tiempo basado en tareas filtradas
  const tiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareasFiltradas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareasFiltradas]);

  // Efecto para actualizar el título
  useEffect(() => {
    document.title = `Total: ${tiempoTotal} minutos`;
  }, [tiempoTotal]);

  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div>
      <h1>Contador de Tareas</h1>
      <div>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nombre de la tarea" 
        />
        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(e.target.value)} 
          placeholder="Duración en minutos" 
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <div className="filtros">
        <label>
          <input
            type="checkbox"
            checked={mostrarRecientes}
            onChange={(e) => setMostrarRecientes(e.target.checked)}
          />
          Mostrar solo recientes
        </label>
      </div>

      <div className="lista">
        <h2>Tareas</h2>
        <ul>
          {tareasFiltradas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre}: {tarea.duracion} minutos
            </li>
          ))}
        </ul>
        {tareasFiltradas.length === 0 && <p>No hay tareas para mostrar.</p>}
      </div>

      <h3 className="total">Total de tiempo: {tiempoTotal} minutos</h3>
    </div>
  );
}

export default App;
