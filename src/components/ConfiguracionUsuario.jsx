import { useState, useEffect } from 'react';

function ConfiguracionUsuario() {
  // Lectura inicial con try-catch para prevenir errores de JSON parse
  const [config, setConfig] = useState(() => {
    try {
      const guardado = localStorage.getItem('config-usuario');
      return guardado 
        ? JSON.parse(guardado) 
        : { nombre: '', tema: 'claro', notificaciones: true }; // Valores por defecto
    } catch (error) {
      console.error("Error al leer localStorage:", error);
      return { nombre: '', tema: 'claro', notificaciones: true };
    }
  });

  // Guardar en localStorage ante cualquier cambio en el objeto 'config'
  useEffect(() => {
    localStorage.setItem('config-usuario', JSON.stringify(config));
  }, [config]);

  // Manejador inmutable de cambios del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Limpiar localStorage y restaurar estado inicial[cite: 2]
  const restablecerValores = () => {
    localStorage.removeItem('config-usuario');
    setConfig({ nombre: '', tema: 'claro', notificaciones: true });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', margin: '10px 0' }}>
      <h3>Configuración de Usuario</h3>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        {/* Campo Nombre[cite: 2] */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={config.nombre}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Campo Tema[cite: 2] */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Tema:</label>
          <select
            name="tema"
            value={config.tema}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
          </select>
        </div>

        {/* Campo Notificaciones[cite: 2] */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            id="notificaciones"
            name="notificaciones"
            checked={config.notificaciones}
            onChange={handleChange}
          />
          <label htmlFor="notificaciones" style={{ fontWeight: 'bold' }}>Notificaciones activas</label>
        </div>
      </form>

      {/* Vista previa en tiempo real[cite: 2] */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '4px', marginBottom: '15px' }}>
        <strong>Vista previa (JSON):</strong>
        <pre style={{ margin: '5px 0 0 0', fontSize: '0.85em' }}>{JSON.stringify(config, null, 2)}</pre>
      </div>

      {/* Botón para restablecer[cite: 2] */}
      <button 
        onClick={restablecerValores}
        style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Restablecer valores
      </button>
    </div>
  );
}

export default ConfiguracionUsuario;