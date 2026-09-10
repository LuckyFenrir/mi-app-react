function ListaHabilidades() {
    
    const habilidades = ["React", "JavaScript", "CSS", "Node.js", "Git", "TypeScript"];
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        
        <h2>Habilidades técnicas</h2>
        <p>Total de habilidades: {habilidades.length}</p>
        
        
        <ul>
          {habilidades.map((habilidad) => (

            <li key={habilidad}>{habilidad}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ListaHabilidades;