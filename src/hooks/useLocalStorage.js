import { useState, useEffect } from 'react';

function useLocalStorage(clave, valorInicial) {
  // Lectura lazy inicial de localStorage con manejo de errores
  const [valor, setValor] = useState(() => {
    try {
      const guardado = window.localStorage.getItem(clave);
      return guardado !== null ? JSON.parse(guardado) : valorInicial;
    } catch (error) {
      return valorInicial; // Silencia errores si localStorage no está disponible[cite: 2]
    }
  });

  // Sincronización automática cada vez que cambie la clave o el valor[cite: 2]
  useEffect(() => {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      // Captura de error silenciosa[cite: 2]
    }
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;