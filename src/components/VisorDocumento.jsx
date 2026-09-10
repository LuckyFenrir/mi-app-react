import { useState, useEffect } from 'react';

function VisorDocumento() {
  // Estado numérico iniciado en 0
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Sincroniza el título de la pestaña
    document.title = `Contador: ${contador} - Mi App`;

    // Función de limpieza ejecutada al desmontar el componente
    return () => {
      document.title = "Mi App";
    };
  }, [contador]); // Se ejecuta cada vez que 'contador' cambia

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', margin: '10px 0' }}>
      <h3>Visor de Documento</h3>
      <p style={{ fontSize: '1.2em' }}>
        Valor actual: <strong>{contador}</strong>
      </p>

      {/* Botones de incremento y decremento[cite: 2] */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => setContador((prev) => prev + 1)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Incrementar (+1)
        </button>
        <button 
          onClick={() => setContador((prev) => prev - 1)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Decrementar (-1)
        </button>
      </div>
    </div>
  );
}

export default VisorDocumento;