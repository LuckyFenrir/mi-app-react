import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotasProvider } from './context/NotasContext';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Notas from './pages/Notas';
import NuevaNota from './pages/NuevaNota';
import DetalleNota from './pages/DetalleNota';
import EditarNota from './pages/EditarNota';
import NoEncontrada from './pages/NoEncontrada';

function App() {
  return (
    <NotasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="notas" element={<Notas />} />
            <Route path="notas/nueva" element={<NuevaNota />} />
            <Route path="notas/:id" element={<DetalleNota />} />
            <Route path="notas/:id/editar" element={<EditarNota />} />
          </Route>
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </NotasProvider>
  );
}

export default App;