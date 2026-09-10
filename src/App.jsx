import VisorDocumento from './components/VisorDocumento';
import TemporizadorPomodoro from './components/TemporizadorPomodoro';
import ConfiguracionUsuario from './components/ConfiguracionUsuario';
import PruebaHooks from './components/PruebaHooks';

function App() {
  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '25px', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#1a252f', margin: '0 0 10px 0' }}>Laboratorio 4</h1>
        <p style={{ color: '#666', fontSize: '1.1em', margin: 0 }}>
          Efectos Secundarios, Persistencia y Custom Hooks en React
        </p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2>Ejercicio 1 — Sincronización con el DOM (Visor de Documento)</h2>
        <VisorDocumento />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Ejercicio 2 — Control de Intervalos (Temporizador Pomodoro)</h2>
        <TemporizadorPomodoro />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Ejercicio 3 — Persistencia Manual con localStorage (Configuración)</h2>
        <ConfiguracionUsuario />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Ejercicio 4 — Extracción de Lógica en Custom Hooks</h2>
        <PruebaHooks />
      </section>
    </div>
  );
}

export default App;