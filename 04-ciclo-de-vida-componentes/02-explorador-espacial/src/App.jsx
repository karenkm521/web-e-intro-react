/*import React, { useState, useEffect, useMemo } from 'react';
//import Planeta from './Planeta';

export function App() {
 
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100)
  const [estadoNave, setEstadoNave] = useState("En órbita")
  const [planetasVisitados, setPlanetasVisitados] = useState([])
  const [activo, setActivo] = useState(true)


  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      // ... (simulación de vuelo)
      setCombustible( prev => {

        const combustibleActual = prev > 0 ? prev-1 : 0

        if(combustibleActual === 0){
          setActivo(false)
        }

        return combustibleActual
      })
      
      setDistancia( prev => prev+10)
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);
  return (
    <div>
      {/* ... (información del panel) *//*}
      <h1>Panel de control espacial</h1>
      <ul>
        <li>Distancia: {distancia} km</li>
        <li>Combustible: {combustible}</li>
        <li>Estado: {estadoNave}</li>
      </ul>
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
}*/
// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';


export function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    console.log("¡El panel está listo!");

    const intervalo = setInterval(() => {
      setCombustible(prev => {
        const combustibleActual = prev > 0 ? prev - 1 : 0;

        if (combustibleActual === 0) {
          setActivo(false);
        }

        return combustibleActual;
      });

      setDistancia(prev => prev + 10);
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel se ha apagado.");
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  // ✅ Función para visitar un nuevo planeta
  const visitarPlaneta = (nombre) => {
    if (!planetasVisitados.includes(nombre)) {
      setPlanetasVisitados(prev => [...prev, nombre]);
    }
  };

  // ✅ Función para quitar un planeta (opcional)
  const quitarPlaneta = (nombre) => {
    setPlanetasVisitados(prev => prev.filter(planeta => planeta !== nombre));
  };

  return (
    <div>
      <h1>🚀 Panel de control espacial</h1>
      <ul>
        <li>Distancia: {distancia} km</li>
        <li>Combustible: {combustible}</li>
        <li>{mensajeEstado}</li>
        <li>Nave activa: {activo ? "Sí" : "No"}</li>
      </ul>

      <h2>🌌 Visitar planetas:</h2>
      <button onClick={() => visitarPlaneta("Marte")}>Visitar Marte</button>
      <button onClick={() => visitarPlaneta("Júpiter")}>Visitar Júpiter</button>
      <button onClick={() => visitarPlaneta("Saturno")}>Visitar Saturno</button>

      <h2>🪐 Planetas visitados:</h2>
      {planetasVisitados.length === 0 && <p>Aún no visitas ningún planeta.</p>}

      {planetasVisitados.map((planeta, index) => (
        <div key={index}>
          <Planeta nombre={planeta} />
          <button onClick={() => quitarPlaneta(planeta)}>Abandonar {planeta}</button>
        </div>
      ))}
    </div>
  );
}