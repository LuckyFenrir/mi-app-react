import { useState } from 'react';

function Acordeon({ titulo, children }) {
  // Estado local para controlar si está expandido o no
  const [expandido, setExpandido] = useState(false);

  // Función para alternar el estado
  const toggleAcordeon = () => {
    setExpandido(!expandido);
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '6px', marginBottom: '10px', overflow: 'hidden' }}>
      <button 
        onClick={toggleAcordeon}
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '12px', 
          backgroundColor: '#f8f9fa', 
          border: 'none', 
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
          textAlign: 'left'
        }}
      >
        <span>{titulo}</span>
        {/* Indicador visual dinámico */}
        <span>{expandido ? '🔽' : '▶️'}</span>
      </button>
      
      {/* Si expandido es true, renderizamos el contenido (children) */}
      {expandido && (
        <div style={{ padding: '15px', backgroundColor: '#fff', borderTop: '1px solid #ddd' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Acordeon;