import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Modal from './Modal';
import Alerta from './Alerta';

function ListaContactos() {

  const [contactos, setContactos] = useState([
    { id: 1, nombre: "Juan Pérez", telefono: "555-0101", favorito: true },
    { id: 2, nombre: "María López", telefono: "555-0202", favorito: false },
    { id: 3, nombre: "Carlos Rodríguez", telefono: "555-0303", favorito: true },
    { id: 4, nombre: "Ana Gómez", telefono: "555-0404", favorito: false },
    { id: 5, nombre: "Luis Martínez", telefono: "555-0505", favorito: false }
  ]);


  const [nuevoBusqueda, setNuevoBusqueda] = useState('');
  const [mostrarSoloFavoritos, setMostrarSoloFavoritos] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);


  const toggleFavorito = (id) => {
    setContactos((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorito: !c.favorito } : c))
    );
  };


  const ejecutarEliminacion = () => {
    if (contactoAEliminar) {
      setContactos((prev) => prev.filter((c) => c.id !== contactoAEliminar.id));
      setContactoAEliminar(null);
    }
  };


  const contactosFiltrados = contactos.filter((c) => {
    const coincideBusqueda =
      c.nombre.toLowerCase().includes(nuevoBusqueda.toLowerCase()) ||
      c.telefono.includes(nuevoBusqueda);
    const coincideFavorito = mostrarSoloFavoritos ? c.favorito : true;
    return coincideBusqueda && coincideFavorito;
  });

  // Cálculo de contadores
  const totalFavoritos = contactos.filter((c) => c.favorito).length;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', margin: '10px 0' }}>
      <h3>Lista de Contactos</h3>


      <div style={{ marginBottom: '10px', fontSize: '0.9em', color: '#555' }}>
        Favoritos: {totalFavoritos} / {contactos.length} | Resultados: {contactosFiltrados.length}
      </div>


      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Buscar por nombre o teléfono..."
          value={nuevoBusqueda}
          onChange={(e) => setNuevoBusqueda(e.target.value)}
          style={{ padding: '8px', flex: '1', minWidth: '200px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <BotonAccion
          texto={mostrarSoloFavoritos ? "Mostrar Todos" : "Ver Solo Favoritos"}
          variante="secundario"
          onClick={() => setMostrarSoloFavoritos(!mostrarSoloFavoritos)}
        />
      </div>


      {contactosFiltrados.length === 0 ? (
        <Alerta tipo="info" titulo="Sin resultados">
          No se encontraron contactos
        </Alerta>
      ) : (

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {contactosFiltrados.map((contacto) => (
            <li
              key={contacto.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid #eee'
              }}
            >
              <div>
                <span
                  onClick={() => toggleFavorito(contacto.id)}
                  style={{ cursor: 'pointer', marginRight: '10px', fontSize: '1.2em' }}
                >
                  {contacto.favorito ? '★' : '☆'}
                </span>
                <strong>{contacto.nombre}</strong> - {contacto.telefono}
              </div>

              <BotonAccion
                texto="Eliminar"
                variante="peligro"
                onClick={() => setContactoAEliminar(contacto)}
              />
            </li>
          ))}
        </ul>
      )}


      <Modal
        titulo="Confirmación de Eliminación"
        abierto={Boolean(contactoAEliminar)}
      >
        <p>¿Estás seguro de eliminar a {contactoAEliminar?.nombre}?</p>
        <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <BotonAccion
            texto="Cancelar"
            variante="secundario"
            onClick={() => setContactoAEliminar(null)}
          />
          <BotonAccion
            texto="Eliminar"
            variante="peligro"
            onClick={ejecutarEliminacion}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ListaContactos;