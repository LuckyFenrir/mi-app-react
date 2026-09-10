function Clima() {
    
    const opcionesTemperatura = [10, 20, 30];
    
    
    const indiceAleatorio = Math.floor(Math.random() * opcionesTemperatura.length);
    const temperatura = opcionesTemperatura[indiceAleatorio];
  
    let sensacion = "";
    let recomendacion = "";
  
    if (temperatura < 15) {
      sensacion = "frio";
      recomendacion = "Lleva abrigo";
    } else if (temperatura >= 15 && temperatura <= 25) {
      sensacion = "agradable";
      recomendacion = "Disfruta el día";
    } else {
      sensacion = "caluroso";
      recomendacion = "Mantente hidratado";
    }
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <h3>Reporte del Clima</h3>
        <p>Temperatura: {temperatura}°C</p>
        <p>Sensación térmica: {sensacion}</p>
        <p>Recomendación: {recomendacion}</p>
      </div>
    );
  }
  
  export default Clima;