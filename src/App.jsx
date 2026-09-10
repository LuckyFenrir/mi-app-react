import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import EstadoPedido from "./components/EstadoPedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Laboratorio 4: Fundamentos de React</h1>
      <p>Integración final de todos los componentes desarrollados.</p>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 1 — Perfil</h2>
        <Perfil />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 2 — Clima</h2>
        <Clima />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 3 — Estado de Pedido</h2>
        <EstadoPedido />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 4 — Mensaje de Bienvenida</h2>
        <MensajeBienvenida />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 5 — Lista de Habilidades</h2>
        <ListaHabilidades />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 6 — Lista de Productos</h2>
        <ListaProductos />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 7 — Lista de Tareas</h2>
        <ListaTareas />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 8 — Tarjeta Reutilizable</h2>
        <Tarjeta />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Ejercicio 9 — Dashboard</h2>
        <Dashboard />
      </section>
    </div>
  );
}

export default App;