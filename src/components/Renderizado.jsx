function EstadoPedido() {
    
    const estado = 'enviado'; 
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <h3>Estado de tu Pedido</h3>
    
        <p>
          {estado === 'pendiente' ? '⏳ Tu pedido está siendo procesado' :
           estado === 'enviado'   ? '🚚 Tu pedido está en camino' :
           estado === 'entregado' ? '✅ Tu pedido ha sido entregado' :
                                    '❌ Tu pedido fue cancelado'}
        </p>
  
        
        {estado === 'enviado' && (
          <p style={{ fontWeight: 'bold', color: '#0056b3' }}>
            Tiempo estimado de entrega: 2-3 días hábiles
          </p>
        )}
      </div>
    );
  }
  
  export default EstadoPedido;