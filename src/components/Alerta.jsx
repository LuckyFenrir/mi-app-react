function Alerta({ tipo = 'info', titulo, children }) {

  const estilos = {
    exito: { bg: '#d4edda', color: '#155724', icono: '✅' },
    advertencia: { bg: '#fff3cd', color: '#856404', icono: '⚠️' },
    error: { bg: '#f8d7da', color: '#721c24', icono: '❌' },
    info: { bg: '#d1ecf1', color: '#0c5460', icono: 'ℹ️' }
  };

  
  const config = estilos[tipo] || estilos.info;

  return (
    <div style={{ 
      backgroundColor: config.bg, 
      color: config.color, 
      padding: '12px', 
      borderRadius: '6px', 
      marginBottom: '10px',
      border: `1px solid ${config.color}40`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '5px' }}>
        <span style={{ marginRight: '8px' }}>{config.icono}</span>
        {titulo}
      </div>
      
      <div style={{ marginLeft: '28px' }}>
        {children}
      </div>
    </div>
  );
}

export default Alerta;