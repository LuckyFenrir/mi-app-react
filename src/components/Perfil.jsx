function Perfil() {
    
    const nombre = "Cristian Perez Gonzalez"; 
    const profesion = "Desarrollador React"; 
    const experiencia = 3; 
    const disponible = true; 
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        
        <h2>{nombre}</h2>
        
        
        <p>Profesión: {profesion}</p>
        
        
        <p>{experiencia} años de experiencia</p>
        
        
        <p>{disponible ? "Disponible para contratar" : "No disponible"}</p>
      </div>
    );
  }
  
  export default Perfil;