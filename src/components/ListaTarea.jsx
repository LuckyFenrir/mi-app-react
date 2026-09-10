function ListaTareas() {
    // 1. Array con al menos 7 objetos de tareas
    const tareas = [
      { id: 1, titulo: "Estudiar componentes de React", completada: false, prioridad: "alto" },
      { id: 2, titulo: "Configurar repositorio en GitHub", completada: true, prioridad: "medio" },
      { id: 3, titulo: "Hacer práctica de LINGO", completada: false, prioridad: "alto" },
      { id: 4, titulo: "Comprar repuestos para el auto", completada: true, prioridad: "bajo" },
      { id: 5, titulo: "Revisar código de diagnóstico DD15", completada: false, prioridad: "medio" },
      { id: 6, titulo: "Actualizar documentación", completada: false, prioridad: "bajo" },
      { id: 7, titulo: "Instalar dependencias de npm", completada: true, prioridad: "alto" }
    ];
  
    
    const pendientes = tareas.filter((t) => !t.completada);
    const completadas = tareas.filter((t) => t.completada);
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <h2>Gestor de Tareas</h2>
  
        <div>
          <h4>Tareas pendientes ({pendientes.length})</h4>
          {pendientes.length === 0 ? (
            <p>No hay tareas pendientes</p>
          ) : (
            <ul>
              {pendientes.map((tarea) => (
                <li 
                  key={tarea.id} 
                  style={{ 
                    fontWeight: tarea.prioridad === "alto" ? "bold" : "normal",
                    color: tarea.prioridad === "alto" ? "red" : "black"
                  }}
                >
                  {tarea.titulo} <span style={{ fontSize: "0.85em" }}>({tarea.prioridad})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
  
        
        <div>
          <h4>Tareas completadas ({completadas.length})</h4>
          {completadas.length === 0 ? (
            <p>No hay tareas completadas</p>
          ) : (
            <ul>
              {completadas.map((tarea) => (
                <li 
                  key={tarea.id} 
                  style={{ textDecoration: "line-through", color: "#666" }}
                >
                  {tarea.titulo}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
  
  export default ListaTareas;