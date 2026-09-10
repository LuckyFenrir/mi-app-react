function ListaProductos() {
    
    const productos = [
      { id: 1, nombre: "Laptop Gamer", precio: 1200.50, disponible: true },
      { id: 2, nombre: "Mouse Inalámbrico", precio: 25.99, disponible: true },
      { id: 3, nombre: "Teclado Mecánico", precio: 85.00, disponible: false },
      { id: 4, nombre: "Monitor 27 pulgadas", precio: 310.25, disponible: true },
      { id: 5, nombre: "Audífonos de Diadema", precio: 45.00, disponible: false }
    ];
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <h3>Catálogo de Productos</h3>
        
        
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ddd" }}>
              <th style={{ padding: "8px" }}>Nombre</th>
              <th style={{ padding: "8px" }}>Precio</th>
              <th style={{ padding: "8px" }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            
            {productos.map((producto) => (
              <tr key={producto.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{producto.nombre}</td>
                
                
                <td style={{ padding: "8px" }}>${producto.precio.toFixed(2)}</td>
                
                
                <td style={{ padding: "8px", color: producto.disponible ? "green" : "red", fontWeight: "bold" }}>
                  {producto.disponible ? "Disponible" : "Agotado"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ListaProductos;