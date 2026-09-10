import { createContext, useContext, useReducer, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useNotificacion from '../hooks/useNotificacion';

const NotasContext = createContext(null);

const initialStateInicial = [
  { id: '1', titulo: 'Comprar víveres', contenido: 'Leche, huevos, pan y café.', categoria: 'personal', fijada: true, fechaCreacion: new Date().toISOString() },
  { id: '2', titulo: 'Reporte trimestral', contenido: 'Analizar métricas de ventas antes de la reunión.', categoria: 'trabajo', fijada: true, fechaCreacion: new Date().toISOString() },
  { id: '3', titulo: 'Estudiar React Router', contenido: 'Revisar rutas anidadas y parámetros dinámicos.', categoria: 'estudio', fijada: false, fechaCreacion: new Date().toISOString() },
  { id: '4', titulo: 'Idea app móvil', contenido: 'App para registrar entrenamientos al aire libre.', categoria: 'ideas', fijada: false, fechaCreacion: new Date().toISOString() },
  { id: '5', titulo: 'Cita médica', contenido: 'Control general anual con el doctor.', categoria: 'personal', fijada: false, fechaCreacion: new Date().toISOString() }
];

function notasReducer(state, action) {
  switch (action.type) {
    case 'SET_NOTAS':
      return { ...state, notas: action.payload };
    case 'AGREGAR_NOTA': {
      const nuevaNota = {
        id: Date.now().toString(),
        titulo: action.payload.titulo,
        contenido: action.payload.contenido,
        categoria: action.payload.categoria,
        fijada: action.payload.fijada || false,
        fechaCreacion: new Date().toISOString()
      };
      return { ...state, notas: [nuevaNota, ...state.notas] };
    }
    case 'ELIMINAR_NOTA':
      return { ...state, notas: state.notas.filter(n => n.id !== action.payload) };
    case 'EDITAR_NOTA':
      return {
        ...state,
        notas: state.notas.map(n => n.id === action.payload.id ? { ...n, ...action.payload.datos } : n)
      };
    case 'TOGGLE_FIJADA':
      return {
        ...state,
        notas: state.notas.map(n => n.id === action.payload ? { ...n, fijada: !n.fijada } : n)
      };
    case 'CAMBIAR_FILTRO':
      return { ...state, filtroCategoria: action.payload };
    case 'CAMBIAR_BUSQUEDA':
      return { ...state, busqueda: action.payload };
    default:
      return state;
  }
}

export function NotasProvider({ children }) {
  // Persistencia con useLocalStorage
  const [notasAlmacenadas, setNotasAlmacenadas] = useLocalStorage('mis-notas-app', initialStateInicial);

  const [state, dispatch] = useReducer(notasReducer, {
    notas: notasAlmacenadas,
    filtroCategoria: 'todas',
    busqueda: ''
  });

  // Notificaciones Toast con useNotificacion
  const { notificacion, mostrar, cerrar } = useNotificacion(3000);

  // Sincronizar cambios del reducer con localStorage
  useEffect(() => {
    setNotasAlmacenadas(state.notas);
  }, [state.notas, setNotasAlmacenadas]);

  const agregarNota = (datos) => {
    dispatch({ type: 'AGREGAR_NOTA', payload: datos });
    mostrar('Nota creada exitosamente', 'exito');
  };

  const eliminarNota = (id) => {
    dispatch({ type: 'ELIMINAR_NOTA', payload: id });
    mostrar('Nota eliminada', 'error');
  };

  const editarNota = (id, datos) => {
    dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } });
    mostrar('Nota actualizada correctamente', 'exito');
  };

  const toggleFijada = (id) => {
    dispatch({ type: 'TOGGLE_FIJADA', payload: id });
    mostrar('Estado de fijado modificado', 'info');
  };

  const cambiarFiltro = (categoria) => dispatch({ type: 'CAMBIAR_FILTRO', payload: categoria });
  const cambiarBusqueda = (busqueda) => dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: busqueda });

  return (
    <NotasContext.Provider value={{ 
      ...state, 
      agregarNota, 
      eliminarNota, 
      editarNota, 
      toggleFijada, 
      cambiarFiltro, 
      cambiarBusqueda,
      notificacion,
      cerrarNotificacion: cerrar
    }}>
      {children}
    </NotasContext.Provider>
  );
}

export function useNotas() {
  const context = useContext(NotasContext);
  if (!context) {
    throw new Error('useNotas debe ser usado dentro de un NotasProvider');
  }
  return context;
}