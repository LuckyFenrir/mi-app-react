import { useState, useEffect } from 'react';

function useNotificacion(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);

  // Muestra una nueva notificación recibiendo mensaje y tipo[cite: 2]
  const mostrar = (mensaje, tipo = 'info') => {
    setNotificacion({
      id: Date.now(),
      mensaje,
      tipo
    });
  };

  // Cierra manualmente la notificación[cite: 2]
  const cerrar = () => {
    setNotificacion(null);
  };

  // Efecto que controla el temporizador de auto-ocultado[cite: 2]
  useEffect(() => {
    if (!notificacion) return;

    const timer = setTimeout(() => {
      cerrar();
    }, duracion);

    // Limpieza: cancela el timeout si cambia la notificación o se desmonta[cite: 2]
    return () => clearTimeout(timer);
  }, [notificacion, duracion]);

  return { notificacion, mostrar, cerrar };
}

export default useNotificacion;