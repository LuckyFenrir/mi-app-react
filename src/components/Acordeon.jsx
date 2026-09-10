// src/components/Acordeon.jsx (Ajuste rápido)
import { useState } from 'react';

function Acordeon({ titulo, abiertoInicial = false, children }) {
  const [expandido, setExpandido] = useState(abiertoInicial);

  const toggleAcordeon = () => setExpandido(!expandido);

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '6px', marginBottom: '15px', overflow: 'hidden' }}>
      <button 
        onClick={toggleAcordeon}
        style={{ 
          width: '100%', display: 'flex', justifyContent: 'space-between', 
          padding: '14px 18px', backgroundColor: '#f8f9fa', border: 'none', 
          cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', textAlign: 'left'
        }}
      >
        <span>{titulo}</span>
        <span>{expandido ? '🔽' : '▶️'}</span>
      </button>
      
      {expandido && (
        <div style={{ padding: '20px', backgroundColor: '#fff', borderTop: '1px solid #ddd' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Acordeon;