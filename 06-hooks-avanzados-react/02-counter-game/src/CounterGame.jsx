import { useReducer, useRef, useEffect, useCallback, useState } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
        history: [
          ...state.history,
          `+${action.payload} (Nuevo valor: ${state.count + action.payload})`,
        ],
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [
          ...state.history,
          `-1 (Nuevo valor: ${state.count - 1})`,
        ],
      };
    case "reset":
      return { count: 0, history: [] };
    case "undo":
      if (state.history.length === 0) return state;

      const ultimaEntrada = state.history[state.history.length - 1];
      const coincidencia = ultimaEntrada.match(/([+-]\d+)/);
      const diferencia = coincidencia ? parseInt(coincidencia[1]) : 0;

      return {
        count: state.count - diferencia,
        history: state.history.slice(0, -1),
      };
    case "setHistory":
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
}

export  function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);
  const [cantidadIncremento, setCantidadIncremento] = useState(1);

  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  // Guardar historial 
  useEffect(() => {
    localStorage.setItem("historialContador", JSON.stringify(state.history));
  }, [state.history]);

  // Traer historial guardado
  useEffect(() => {
    const historialGuardado = JSON.parse(localStorage.getItem("historialContador"));
    if (historialGuardado) {
      dispatch({ type: "setHistory", payload: historialGuardado });
    }
  }, []);

  const manejarIncremento = useCallback(() => {
    dispatch({ type: "increment", payload: Number(cantidadIncremento) || 1 });
  }, [cantidadIncremento]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const manejarDeshacer = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  return (
    <div>
      <h2>Contador: {state.count}</h2>

      <input
        type="number"
        value={cantidadIncremento}
        onChange={(e) => setCantidadIncremento(e.target.value)}
        placeholder="Cantidad a sumar"
      />

      <button ref={incrementBtnRef} onClick={manejarIncremento}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={manejarDeshacer}>Deshacer</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
export default CounterGame