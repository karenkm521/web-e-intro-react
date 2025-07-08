// src/components/Game.jsx
import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

const Game = () => {
  // Genera un número secreto aleatorio entre 1 y 100 
  const [numeroSecreto, setNumeroSecreto] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [numeroIngresado, setNumeroIngresado] = useState('');
  const [pista, setPista] = useState('');
  const [numeroIntentos, setNumeroIntentos] = useState(0);
  const [historialIntentos, setHistorialIntentos] = useState([]);

  const manejarIntento = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const intentoUsuario = Number(numeroIngresado);
// Valida que se ingrese un número válido
    if (!intentoUsuario) {
      setPista('Ingresa un número válido.');
      return;
    }
// Verifica si el número ya se intentó antes
    if (historialIntentos.includes(intentoUsuario)) {
      setPista(`Ya intentaste con el número ${intentoUsuario}. Prueba otro.`);
      return; // No cuenta como intento nuevo
    }

// Se agrega el número al historial de intentos
    setHistorialIntentos(prev => [...prev, intentoUsuario]);
// Incrementa el número de intentos
    setNumeroIntentos(prev => prev + 1);
// Compara el intento con el número secreto y muestra el mensaje correcto
    if (intentoUsuario === numeroSecreto) {
      setPista(`¡Correcto! Lo lograste en ${numeroIntentos + 1} intentos.`);
    } else if (intentoUsuario < numeroSecreto) {
      setPista('El número es mayor.');
    } else {
      setPista('El número es menor.');
    }
  };
// Reinicia todo el juego
  const reiniciarJuego = () => {
    setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
    setNumeroIngresado('');
    setPista('');
    setNumeroIntentos(0);
    setHistorialIntentos([]);
  };

  return (
    <div className="game">
      <h1>Adivina el número (1-100)</h1>
      <form onSubmit={manejarIntento}>
        <InputNumber value={numeroIngresado} onChange={(e) => setNumeroIngresado(e.target.value)} />
        <button type="submit">Adivinar</button>
      </form>
      <Message pista={pista} intentos={numeroIntentos} />
      <RestartButton onRestart={reiniciarJuego} />
    </div>
  );
};

export default Game;
