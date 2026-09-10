import { useParams, useNavigate, Link } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';

function EditarNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, editarNota } = useNotas();

  const nota = notas.find(n => n.id === id);

  if (!nota) {
    return (
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <h3>Nota no encontrada</h3>
        <p>La nota que deseas editar no existe.</p>
        <Link to="/notas" style={{ color: '#007bff' }}>Volver a notas</Link>
      </div>
    );
  }

  const handleGuardar = (datosModificados) => {
    editarNota(nota.id, datosModificados);
    navigate(`/notas/${nota.id}`);
  };

  const handleCancelar = () => {
    navigate(`/notas/${nota.id}`);
  };

  return (
    <div>
      <h2>Editar Nota</h2>
      <FormularioNota
        valoresIniciales={{
          titulo: nota.titulo,
          contenido: nota.contenido,
          categoria: nota.categoria,
          fijada: nota.fijada
        }}
        textoBoton="Actualizar Nota"
        alGuardar={handleGuardar}
        alCancelar={handleCancelar}
      />
    </div>
  );
}

export default EditarNota;