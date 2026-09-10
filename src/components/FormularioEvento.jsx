import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

function FormularioEvento() {
  
  const [formulario, setFormulario] = useState({
    titulo: '',
    fecha: '',
    categoria: '',
    descripcion: '',
    esPublico: false
  });

  
  const [errores, setErrores] = useState({});

  
  const [mensajeExito, setMensajeExito] = useState(null);

  const [eventosRegistrados, setEventosRegistrados] = useState([]);

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  
  const validar = () => {
    const nuevosErrores = {};

    if (formulario.titulo.trim().length < 5) {
      nuevosErrores.titulo = "El título debe tener al menos 5 caracteres.";
    }

    if (!formulario.fecha) {
      nuevosErrores.fecha = "La fecha no puede estar vacía.";
    } else {
      const hoy = new Date().toISOString().split('T')[0];
      if (formulario.fecha < hoy) {
        nuevosErrores.fecha = "La fecha no puede ser una fecha pasada.";
      }
    }

    if (!formulario.categoria) {
      nuevosErrores.categoria = "Debe seleccionar una categoría.";
    }

    if (formulario.descripcion.trim().length < 20) {
      nuevosErrores.descripcion = "La descripción debe tener al menos 20 caracteres.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      const nuevoEvento = { ...formulario, id: Date.now() };

  
      setEventosRegistrados((prev) => [...prev, nuevoEvento]);

  
      setMensajeExito(nuevoEvento);

  
      setFormulario({
        titulo: '',
        fecha: '',
        categoria: '',
        descripcion: '',
        esPublico: false
      });
      setErrores({});

  
      setTimeout(() => {
        setMensajeExito(null);
      }, 4000);
    }
  };

  
  const botonDeshabilitado =
    !formulario.titulo ||
    !formulario.fecha ||
    !formulario.categoria ||
    !formulario.descripcion;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', margin: '10px 0' }}>
      <h3>Registro de Eventos</h3>

  
      {mensajeExito && (
        <Alerta tipo="exito" titulo="¡Evento Registrado!">
          <p><strong>Título:</strong> {mensajeExito.titulo}</p>
          <p><strong>Fecha:</strong> {mensajeExito.fecha} | <strong>Categoría:</strong> {mensajeExito.categoria}</p>
          <p><strong>Tipo:</strong> {mensajeExito.esPublico ? 'Público' : 'Privado'}</p>
        </Alerta>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Campo Título */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Título del Evento:</label>
          <input
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            placeholder="Mínimo 5 caracteres"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errores.titulo && (
            <Alerta tipo="error" titulo="Error de validación">
              {errores.titulo}
            </Alerta>
          )}
        </div>

  
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errores.fecha && (
            <Alerta tipo="error" titulo="Error de validación">
              {errores.fecha}
            </Alerta>
          )}
        </div>

  
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Categoría:</label>
          <select
            name="categoria"
            value={formulario.categoria}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">-- Seleccionar opción --</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
          {errores.categoria && (
            <Alerta tipo="error" titulo="Error de validación">
              {errores.categoria}
            </Alerta>
          )}
        </div>

  
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Descripción:</label>
          <textarea
            name="descripcion"
            value={formulario.descripcion}
            onChange={handleChange}
            placeholder="Mínimo 20 caracteres"
            rows="3"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errores.descripcion && (
            <Alerta tipo="error" titulo="Error de validación">
              {errores.descripcion}
            </Alerta>
          )}
        </div>

  
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            id="esPublico"
            name="esPublico"
            checked={formulario.esPublico}
            onChange={handleChange}
          />
          <label htmlFor="esPublico" style={{ fontWeight: 'bold' }}>¿Es un evento público?</label>
        </div>

        <div>
          <BotonAccion
            texto="Registrar Evento"
            variante="primario"
            disabled={botonDeshabilitado}
            onClick={handleSubmit}
          />
        </div>
      </form>

      <hr style={{ margin: '20px 0' }} />


      <h4>Eventos Registrados ({eventosRegistrados.length})</h4>
      {eventosRegistrados.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>No hay eventos registrados en esta sesión.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {eventosRegistrados.map((evt) => (
            <li
              key={evt.id}
              style={{
                backgroundColor: '#f8f9fa',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '8px',
                borderLeft: `4px solid ${evt.esPublico ? '#28a745' : '#6c757d'}`
              }}
            >
              <strong>{evt.titulo}</strong> ({evt.categoria})
              <br />
              <small>📅 {evt.fecha} | Visibilidad: {evt.esPublico ? 'Público' : 'Privado'}</small>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9em', color: '#444' }}>{evt.descripcion}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FormularioEvento;