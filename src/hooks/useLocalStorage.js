import { useState, useEffect } from 'react';

function useLocalStorage(clave, valorInicial) {
  
  const [valor, setValor] = useState(() => {
    try {
      const guardado = window.localStorage.getItem(clave);
      return guardado !== null ? JSON.parse(guardado) : valorInicial;
    } catch (error) {
      return valorInicial; 
    }
  });

  
  useEffect(() => {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
  
    }
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;