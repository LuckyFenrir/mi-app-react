function Dashboard() {
    
    const usuario = {
      nombre: "Cristian Pérez",
      email: "cristian@gmail.com",
      rol: "Administrador"
    };
  
    const notificaciones = [
      { id: 1, mensaje: "Nueva actualización del sistema disponible", leida: false },
      { id: 2, mensaje: "Mensaje recibido del soporte técnico", leida: true },
      { id: 3, mensaje: "Cambio de contraseña exitoso", leida: true },
      { id: 4, mensaje: "Alerta de seguridad: inicio de sesión desde otro equipo", leida: false }
    ];
  
    const actividadReciente = [
      { id: 1, accion: "Modificó el perfil de usuario", fecha: "Ayer, 14:30" },
      { id: 2, accion: "Subió el segundo commit al repositorio", fecha: "Hoy, 10:15" },
      { id: 3, accion: "Ejecutó pruebas de componentes en React", fecha: "Hoy, 12:00" }
    ];
  
    
    const notificacionesNoLeidas = notificaciones.filter((n) => !n.leida);
  
    return (
      <>
        <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px", borderRadius: "8px" }}>
          <h2>Panel de Control (Dashboard)</h2>
  
        
          <section style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
            <h4>1. Información del Usuario</h4>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Rol:</strong> {usuario.rol}</p>
          </section>
  
          
          <section style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
            <h4>2. Notificaciones ({notificacionesNoLeidas.length} pendientes)</h4>
            <ul>
              {notificaciones.map((notif) => (
                <li 
                  key={notif.id}
                  style={{ 
                    fontWeight: notif.leida ? "normal" : "bold", 
                    opacity: notif.leida ? 0.6 : 1,
                    marginBottom: "4px"
                  }}
                >
                  {notif.mensaje}
                </li>
              ))}
            </ul>
            {notificacionesNoLeidas.length === 0 && (
              <p style={{ fontStyle: "italic", color: "green" }}>No tienes notificaciones pendientes.</p>
            )}
          </section>
  
    
          <section>
            <h4>3. Actividad Reciente</h4>
            {actividadReciente.length === 0 ? (
              <p>No hay actividad reciente</p>
            ) : (
              <ul>
                {actividadReciente.map((act) => (
                  <li key={act.id} style={{ marginBottom: "4px" }}>
                    {act.accion} <span style={{ color: "#666", fontSize: "0.85em" }}>({act.fecha})</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </>
    );
  }
  
  export default Dashboard;