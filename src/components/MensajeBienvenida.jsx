function MensajeBienvenida() {
   
    const usuario = { nombre: "Carlos", rol: "admin" };
    
   
    if (usuario === null) {
      return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <p>Por favor, inicia sesión para continuar.</p>
        </div>
      );
    }
  
 
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <h2>Bienvenido, {usuario.nombre}</h2>
        <p>Rol: {usuario.rol}</p>
        

        {usuario.rol === 'admin' && (
          <p style={{ color: 'green', fontWeight: 'bold' }}>
            Tienes acceso completo al sistema
          </p>
        )}
      </div>
    );
  }
  
  export default MensajeBienvenida;