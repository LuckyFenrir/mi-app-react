import { useState, useEffect } from 'react';

function useNotificacion(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);

  
  const mostrar = (mensaje, tipo = 'info') => {
    setNotificacion({
      id: Date.now(),
      mensaje,
      tipo
    });
  };

  
  const cerrar = () => {
    setNotificacion(null);
  };

  
  useEffect(() => {
    if (!notificacion) return;

    const timer = setTimeout(() => {
      cerrar();
    }, duracion);

  
    return () => clearTimeout(timer);
  }, [notificacion, duracion]);

  return { notificacion, mostrar, cerrar };
}

export default useNotificacion;