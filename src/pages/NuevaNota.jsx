import { useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';

function NuevaNota() {
  const navigate = useNavigate();
  const { agregarNota } = useNotas();

  const handleGuardar = (datos) => {
    agregarNota(datos);
    navigate('/notas');
  };

  const handleCancelar = () => {
    navigate('/notas');
  };

  return (
    <div>
      <h2>Crear Nueva Nota</h2>
      <FormularioNota
        textoBoton="Guardar Nota"
        alGuardar={handleGuardar}
        alCancelar={handleCancelar}
      />
    </div>
  );
}

export default NuevaNota;