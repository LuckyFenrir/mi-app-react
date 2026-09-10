import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>404 - Página No Encontrada</h2>
      <p>La ruta que intentas visitar no existe.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>Volver al inicio</Link>
    </div>
  );
}

export default NoEncontrada;