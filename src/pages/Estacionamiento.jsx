import React, { useState } from 'react';
import { useEspacios } from '../hooks/useEspacios';
import ResumenEstacionamiento from '../components/ResumenEstacionamiento';
import CuadriculaEstacionamiento from '../components/CuadriculaEstacionamiento';
import EspacioCard from '../components/EspacioCard';
import MapaEstacionamiento from '../components/MapaEstacionamiento';
import FiltrosEspacios from '../components/FiltrosEspacios'; // <-- 1. Importamos los filtros

export default function Estacionamiento() {
  const { espacios, loading } = useEspacios();
  const [espacioSeleccionado, setEspacioSeleccionado] = useState(null);
  
  // 2. Estados para los filtros
  const [filtroEstado, setFiltroEstado] = useState('todos'); // 'todos', 'libre', 'ocupado'
  const [filtroColumna, setFiltroColumna] = useState('todas'); // 'todas', 'A', 'B', 'C', 'D'

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center', color: 'white' }}>Cargando sensores de la UTEQ...</div>;
  }

  // 3. Lógica para filtrar los espacios antes de enviarlos a la cuadrícula
  const espaciosFiltrados = espacios.filter(espacio => {
    // Filtro de Estado
    const cumpleEstado = filtroEstado === 'todos' || espacio.estado === filtroEstado;
    
    // Filtro de Columna
    const letraColumna = ['A', 'B', 'C', 'D'][espacio.columna - 1];
    const cumpleColumna = filtroColumna === 'todas' || letraColumna === filtroColumna;
    
    return cumpleEstado && cumpleColumna;
  });

  const espacioActualizado = espacioSeleccionado 
    ? espacios.find(e => e.id === espacioSeleccionado.id) 
    : null;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0f172a' }}>Monitoreo Telemático del Parqueadero</h1>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>Simulación en tiempo real conectada a Firebase RTDB</p>
      
      {/* Al resumen le pasamos TODOS los espacios para que los números totales no cambien */}
      <ResumenEstacionamiento espacios={espacios} />
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        
        {/* Panel Izquierdo: Cuadrícula */}
        <div style={{ flex: '2', minWidth: '600px' }}>
          
          {/* 4. Insertamos el componente de filtros aquí */}
          <FiltrosEspacios 
            filtroEstado={filtroEstado} 
            setFiltroEstado={setFiltroEstado}
            filtroColumna={filtroColumna} 
            setFiltroColumna={setFiltroColumna}
          />

          {/* 5. ATENCIÓN: Pasamos "espaciosFiltrados" en lugar de "espacios" */}
          <CuadriculaEstacionamiento 
            espacios={espaciosFiltrados} 
            onSelectEspacio={setEspacioSeleccionado} 
          />
        </div>
        
        {/* Panel Derecho: Detalles del Espacio */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <EspacioCard espacio={espacioActualizado} />
        </div>

      </div>

      <MapaEstacionamiento />

    </div>
  );
}