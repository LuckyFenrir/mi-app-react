import { useState } from 'react';
import Alerta from './components/Alerta';
import Acordeon from './components/Acordeon';
import BotonAccion from './components/BotonAccion';
import Modal from './components/Modal';
import Contador from './components/Contador';

function App() {
  // Estado para controlar la visibilidad del Modal
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Laboratorio 3: Ejercicio 2</h1>

      <h2>Prueba de Modal</h2>
      <BotonAccion 
        texto="Abrir Ventana Modal" 
        variante="primario" 
        onClick={() => setModalAbierto(true)} 
      />

      <Modal titulo="Confirmación de Acción" abierto={modalAbierto}>
        <p>Este es el contenido dentro del modal utilizando la prop children.</p>
        <BotonAccion 
          texto="Cerrar Modal" 
          variante="secundario" 
          onClick={() => setModalAbierto(false)} 
        />
      </Modal>

      <hr style={{ margin: '30px 0' }} />

      <h2>Prueba de Contador</h2>
      <Contador />
    </div>
  );
}

export default App;