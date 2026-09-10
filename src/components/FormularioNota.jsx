import { useState } from 'react';

function FormularioNota({ 
  valoresIniciales = { titulo: '', contenido: '', categoria: 'personal', fijada: false }, 
  textoBoton, 
  alGuardar, 
  alCancelar 
}) {
  const [titulo, setTitulo] = useState(valoresIniciales.titulo);
  const [contenido, setContenido] = useState(valoresIniciales.contenido);
  const [categoria, setCategoria] = useState(valoresIniciales.categoria);
  const [fijada, setFijada] = useState(valoresIniciales.fijada);

  // Validaciones requeridas
  const errorTitulo = titulo.trim().length < 3 ? 'El título debe tener al menos 3 caracteres.' : '';
  const errorContenido = contenido.trim().length < 10 ? 'El contenido debe tener al menos 10 caracteres.' : '';
  const hayErrores = errorTitulo || errorContenido;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hayErrores) return;
    alGuardar({ titulo, contenido, categoria, fijada });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px', background: '#fff', padding: '20px', borderRadius: '6px', border: '1px solid #ddd' }}>
      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {errorTitulo && <span style={{ color: '#dc3545', fontSize: '0.85em' }}>{errorTitulo}</span>}
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Contenido:</label>
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          rows="5"
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {errorContenido && <span style={{ color: '#dc3545', fontSize: '0.85em' }}>{errorContenido}</span>}
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Categoría:</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type="checkbox"
          id="fijada"
          checked={fijada}
          onChange={(e) => setFijada(e.target.checked)}
        />
        <label htmlFor="fijada" style={{ fontWeight: 'bold' }}>Fijar nota</label>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button
          type="submit"
          disabled={hayErrores}
          style={{
            padding: '10px 18px',
            background: hayErrores ? '#ccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: hayErrores ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          {textoBoton}
        </button>
        <button
          type="button"
          onClick={alCancelar}
          style={{ padding: '10px 18px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default FormularioNota;