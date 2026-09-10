import { Outlet, NavLink } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Layout() {
  const { notas, notificacion, cerrarNotificacion } = useNotas();

  const estiloNavLink = ({ isActive }) => ({
    padding: '8px 14px',
    textDecoration: 'none',
    borderRadius: '4px',
    backgroundColor: isActive ? '#007bff' : '#f8f9fa',
    color: isActive ? '#fff' : '#333',
    fontWeight: 'bold'
  });

  const coloresNotif = {
    exito: '#d4edda',
    error: '#f8d7da',
    info: '#d1ecf1'
  };

  const coloresTextoNotif = {
    exito: '#155724',
    error: '#721c24',
    info: '#0c5460'
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '900px', margin: '0 auto', padding: '20px', position: 'relative' }}>
      
      
      {notificacion && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '12px 20px',
          backgroundColor: coloresNotif[notificacion.tipo] || '#f8f9fa',
          color: coloresTextoNotif[notificacion.tipo] || '#333',
          borderRadius: '6px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <span>{notificacion.mensaje}</span>
          <button onClick={cerrarNotificacion} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>✖</button>
        </div>
      )}

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', paddingBottom: '15px', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, color: '#2c3e50' }}>MisNotas</h1>
        <div style={{ background: '#e9ecef', padding: '6px 12px', borderRadius: '20px', fontSize: '0.9em' }}>
          Total de notas: <strong>{notas.length}</strong>
        </div>
      </header>

      <nav style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
        <NavLink to="/" style={estiloNavLink}>Inicio</NavLink>
        <NavLink to="/notas" style={estiloNavLink}>Notas</NavLink>
        <NavLink to="/notas/nueva" style={estiloNavLink}>Nueva nota</NavLink>
      </nav>

      <main style={{ minHeight: '60vh', marginBottom: '30px' }}>
        <Outlet />
      </main>

      <footer style={{ textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '15px', color: '#666', fontSize: '0.9em' }}>
        © 2026 MisNotas
      </footer>
    </div>
  );
}

export default Layout;