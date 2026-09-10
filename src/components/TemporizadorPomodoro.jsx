import { useState, useEffect } from 'react';

function TemporizadorPomodoro() {
  // Estado para los segundos restantes (25 min = 1500 segs) y control de ejecucion
  const [segundos, setSegundos] = useState(1500);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    // Si esta activo y queda tiempo, decrementar cada segundo
    if (activo && segundos > 0) {
      intervalo = setInterval(() => {
        setSegundos((prev) => Math.max(0, prev - 1)); // Valida que nunca sea negativo
      }, 1000);
    } else if (segundos === 0 && activo) {
      // Detener automaticamente y notificar al llegar a cero
      setActivo(false);
      alert("¡El tiempo del Pomodoro ha finalizado!");
    }

    // Funcion de limpieza: se ejecuta al pausar, reiniciar o desmontar el componente[cite: 2]
    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [activo, segundos]);

  // Formateador de segundos a formato MM:SS[cite: 2]
  const formatearTiempo = (totalSegundos) => {
    const minutos = Math.floor(totalSegundos / 60);
    const segs = totalSegundos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segs).padStart(2, '0')}`;
  };

  const iniciar = () => setActivo(true);
  const pausar = () => setActivo(false);
  const reiniciar = () => {
    setActivo(false);
    setSegundos(1500);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', margin: '10px 0', textAlign: 'center' }}>
      <h3>Temporizador Pomodoro</h3>

      {/* Despliegue de tiempo en formato MM:SS[cite: 2] */}
      <div style={{ fontSize: '2.5em', fontWeight: 'bold', margin: '15px 0', fontFamily: 'monospace' }}>
        {formatearTiempo(segundos)}
      </div>

      {/* Botones de control[cite: 2] */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={iniciar} 
          disabled={activo || segundos === 0}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Iniciar
        </button>
        <button 
          onClick={pausar} 
          disabled={!activo}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Pausar
        </button>
        <button 
          onClick={reiniciar} 
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default TemporizadorPomodoro;