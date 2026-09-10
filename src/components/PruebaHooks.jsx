import useLocalStorage from '../hooks/useLocalStorage';
import useNotificacion from '../hooks/useNotificacion';

function PruebaHooks() {
  // Uso de useLocalStorage[cite: 2]
  const [nombre, setNombre] = useLocalStorage('nombre-hook', '');

  // Uso de useNotificacion con duración personalizada de 3000ms[cite: 2]
  const { notificacion, mostrar, cerrar } = useNotificacion(3000);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', margin: '10px 0' }}>
      <h3>Prueba de Custom Hooks</h3>

      
      {notificacion && (
        <div style={{ 
          padding: '10px 15px', 
          backgroundColor: notificacion.tipo === 'error' ? '#f8d7da' : '#d1ecf1', 
          borderRadius: '4px', 
          marginBottom: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span><strong>[{notificacion.tipo.toUpperCase()}]</strong> {notificacion.mensaje}</span>
          <button onClick={cerrar} style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}>✖</button>
        </div>
      )}

      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Nombre (persisitido en hook):</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => mostrar('¡Acción completada con éxito!', 'exito')}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          Lanzar Notificación
        </button>
        <button 
          onClick={() => mostrar('Ha ocurrido un problema', 'error')}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          Lanzar Error
        </button>
      </div>
    </div>
  );
}

export default PruebaHooks;