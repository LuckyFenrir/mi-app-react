function Tarjeta() {
    
    const datos = {
      titulo: "Desarrollo de Aplicaciones",
      descripcion: "Construcción de interfaces modernas y escalables utilizando React y Vite.",
      etiquetas: ["React", "JavaScript", "Frontend", "UI"],
      destacado: true
    };
  
    return (
      <div 
        style={{ 
          border: datos.destacado ? "2px solid #0056b3" : "1px solid #ccc",
          backgroundColor: datos.destacado ? "#f0f8ff" : "#fff",
          borderRadius: "8px",
          padding: "15px",
          margin: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
    
        <h3 style={{ marginTop: 0, color: "#333" }}>{datos.titulo}</h3>
        
        
        <p style={{ color: "#666" }}>{datos.descripcion}</p>
        
        
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }}>
          {datos.etiquetas.map((etiqueta) => (
            <span 
              key={etiqueta}
              style={{
                backgroundColor: "#e2e8f0",
                color: "#475569",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "0.85em",
                fontWeight: "500"
              }}
            >
              {etiqueta}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default Tarjeta;