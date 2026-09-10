import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function DetalleNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, eliminarNota } = useNotas();

  const nota = notas.find(n => n.id === id);

  if (!nota) {
    return (
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <h3>Nota no encontrada</h3>
        <p>La nota solicitada no existe.</p>
        <Link to="/notas" style={{ color: '#007bff' }}>Volver a notas</Link>
      </div>
    );
  }

  const manejarEliminacion = () => {
    if (window.confirm(`¿Estás seguro de eliminar la nota "${nota.titulo}"?`)) {
      eliminarNota(nota.id);
      navigate('/notas'); // Redirección tras eliminar
    }
  };

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '6px', border: '1px solid #ddd' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <span style={{ fontSize: '0.85em', padding: '4px 10px', borderRadius: '12px', background: '#6c757d', color: '#fff', textTransform: 'capitalize' }}>
          {nota.categoria} {nota.fijada && '★ Fijada'}
        </span>
        <span style={{ fontSize: '0.85em', color: '#666' }}>
          Fecha: {new Date(nota.fechaCreacion).toLocaleString()}
        </span>
      </div>

      <h2 style={{ marginTop: 0 }}>{nota.titulo}</h2>
      <p style={{ lineHeight: '1.6', whiteSpace: 'pre-wrap', color: '#333' }}>{nota.contenido}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
        <Link to="/notas" style={{ padding: '8px 14px', background: '#6c757d', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}>
          Volver a notas
        </Link>
        <Link to={`/notas/${nota.id}/editar`} style={{ padding: '8px 14px', background: '#ffc107', color: '#000', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
          Editar
        </Link>
        <button
          onClick={manejarEliminacion}
          style={{ padding: '8px 14px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default DetalleNota;