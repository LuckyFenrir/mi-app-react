import { useState, useEffect } from 'react';

function VisorDocumento() {
  
  const [contador, setContador] = useState(0);

  useEffect(() => {
  
    document.title = `Contador: ${contador} - Mi App`;

  
    return () => {
      document.title = "Mi App";
    };
  }, [contador]); 

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', margin: '10px 0' }}>
      <h3>Visor de Documento</h3>
      <p style={{ fontSize: '1.2em' }}>
        Valor actual: <strong>{contador}</strong>
      </p>

      
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