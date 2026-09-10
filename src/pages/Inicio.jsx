import { useNotas } from '../context/NotasContext';

function Inicio() {
  const { notas } = useNotas();

  const totalNotas = notas.length;
  const notasFijadas = notas.filter(n => n.fijada).length;
  
  const porCategoria = notas.reduce((acc, nota) => {
    acc[nota.categoria] = (acc[nota.categoria] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Bienvenido a MisNotas</h2>
      <p>Sistema de gestión y organización global de notas personales.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '6px', border: '1px solid #ddd' }}>
          <h4>Total de Notas</h4>
          <p style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '5px 0 0' }}>{totalNotas}</p>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '6px', border: '1px solid #ddd' }}>
          <h4>Notas Fijadas</h4>
          <p style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '5px 0 0' }}>{notasFijadas}</p>
        </div>
      </div>

      <h3 style={{ marginTop: '25px' }}>Cantidad por Categoría</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['personal', 'trabajo', 'estudio', 'ideas'].map(cat => (
          <li key={cat} style={{ padding: '8px 12px', background: '#fdfdfd', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ textTransform: 'capitalize' }}>{cat}</span>
            <strong>{porCategoria[cat] || 0}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;