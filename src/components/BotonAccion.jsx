function BotonAccion({ texto, variante = 'primario', disabled = false, onClick }) {
  
  const estilosVariante = {
    primario: { backgroundColor: '#007bff', color: '#fff' },
    secundario: { backgroundColor: '#6c757d', color: '#fff' },
    peligro: { backgroundColor: '#dc3545', color: '#fff' }
  };

  const estilo = estilosVariante[variante] || estilosVariante.primario;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...estilo,
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        marginRight: '8px',
        marginBottom: '8px'
      }}
    >
      {texto}
    </button>
  );
}

export default BotonAccion;