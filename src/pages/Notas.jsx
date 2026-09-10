import { Link } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Notas() {
  const { notas, filtroCategoria, busqueda, cambiarFiltro, cambiarBusqueda, toggleFijada } = useNotas();

  // Filtrado simultáneo por categoría y texto de búsqueda (sin distinguir mayúsculas)
  const notasFiltradas = notas.filter(nota => {
    const coincideFiltro = filtroCategoria === 'todas' || nota.categoria === filtroCategoria;
    const textoBusqueda = busqueda.toLowerCase();
    const coincideBusqueda = nota.titulo.toLowerCase().includes(textoBusqueda) || nota.contenido.toLowerCase().includes(textoBusqueda);
    return coincideFiltro && coincideBusqueda;
  });

  // Ordenar para que las notas fijadas aparezcan siempre al inicio
  const notasOrdenadas = [...notasFiltradas].sort((a, b) => (b.fijada ? 1 : 0) - (a.fijada ? 1 : 0));

  const coloresBadge = {
    personal: '#007bff',
    trabajo: '#28a745',
    estudio: '#ffc107',
    ideas: '#17a2b8'
  };

  return (
    <div>
      <h2>Mis Notas</h2>

      {/* Controles de búsqueda y selector de categoría */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Buscar por título o contenido..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={{ flex: '1', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '200px' }}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="todas">Todas</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '15px' }}>
        Mostrando {notasOrdenadas.length} de {notas.length} notas en total.
      </p>

      {notasOrdenadas.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#666' }}>No hay notas que coincidan con los filtros.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '15px' }}>
          {notasOrdenadas.map(nota => {
            const snippet = nota.contenido.length > 100 ? nota.contenido.substring(0, 100) + '...' : nota.contenido;
            return (
              <Link
                key={nota.id}
                to={`/notas/${nota.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  border: nota.fijada ? '2px solid #ffc107' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '15px',
                  backgroundColor: nota.fijada ? '#fffdf0' : '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.8em', padding: '2px 8px', borderRadius: '12px', background: coloresBadge[nota.categoria] || '#6c757d', color: '#fff', textTransform: 'capitalize' }}>
                      {nota.categoria}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFijada(nota.id);
                      }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2em' }}
                      title={nota.fijada ? "Desfijar" : "Fijar"}
                    >
                      {nota.fijada ? '★' : '☆'}
                    </button>
                  </div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1em' }}>{nota.titulo}</h3>
                  <p style={{ margin: 0, fontSize: '0.9em', color: '#555' }}>{snippet}</p>
                </div>
                <div style={{ marginTop: '15px', fontSize: '0.75em', color: '#888' }}>
                  {new Date(nota.fechaCreacion).toLocaleDateString()}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Notas;