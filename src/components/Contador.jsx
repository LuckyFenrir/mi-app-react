import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

function Contador() {
  const [valor, setValor] = useState(0);


  const decrementar = () => setValor((prev) => prev - 1);
  const incrementar = () => setValor((prev) => prev + 1);
  const incrementarCinco = () => setValor((prev) => prev + 5);
  const reiniciar = () => setValor(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', margin: '10px 0' }}>
      <h3>Contador: {valor}</h3>

      <div style={{ marginBottom: '15px' }}>
        <BotonAccion 
          texto="Decrementar" 
          variante="secundario" 
          disabled={valor === 0} 
          onClick={decrementar} 
        />
        <BotonAccion 
          texto="Incrementar" 
          variante="primario" 
          onClick={incrementar} 
        />
        <BotonAccion 
          texto="Incrementar +5" 
          variante="primario" 
          onClick={incrementarCinco} 
        />
        <BotonAccion 
          texto="Reiniciar" 
          variante="peligro" 
          onClick={reiniciar} 
        />
      </div>

     
      {valor === 0 && (
        <Alerta tipo="info" titulo="Estado del contador">
          El contador está en cero
        </Alerta>
      )}

      {valor > 10 && (
        <Alerta tipo="advertencia" titulo="Límite advertencia">
          ¡Valor alto!
        </Alerta>
      )}
    </div>
  );
}

export default Contador;