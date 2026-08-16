import React from 'react';

export default function FiltrosEspacios({ 
  filtroEstado, setFiltroEstado, 
  filtroColumna, setFiltroColumna 
}) {
  
  // Estilo base para los botones
  const btnStyle = (activo) => ({
    padding: '8px 16px',
    border: 'none',
    backgroundColor: activo ? '#ffffff' : 'transparent',
    color: activo ? '#0f172a' : '#64748b',
    fontWeight: activo ? 'bold' : 'normal',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: activo ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    transition: 'all 0.2s'
  });

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: '20px',
      flexWrap: 'wrap',
      gap: '15px'
    }}>
      
      {/* Grupo de Filtros por Estado */}
      <div style={{ backgroundColor: '#e2e8f0', padding: '4px', borderRadius: '10px', display: 'flex', gap: '5px' }}>
        <button style={btnStyle(filtroEstado === 'todos')} onClick={() => setFiltroEstado('todos')}>
          Todos
        </button>
        <button style={btnStyle(filtroEstado === 'libre')} onClick={() => setFiltroEstado('libre')}>
          Libres
        </button>
        <button style={btnStyle(filtroEstado === 'ocupado')} onClick={() => setFiltroEstado('ocupado')}>
          Ocupados
        </button>
      </div>

      {/* Grupo de Filtros por Columna */}
      <div style={{ backgroundColor: '#e2e8f0', padding: '4px', borderRadius: '10px', display: 'flex', gap: '5px' }}>
        <button style={btnStyle(filtroColumna === 'todas')} onClick={() => setFiltroColumna('todas')}>
          Todas
        </button>
        <button style={btnStyle(filtroColumna === 'A')} onClick={() => setFiltroColumna('A')}>A</button>
        <button style={btnStyle(filtroColumna === 'B')} onClick={() => setFiltroColumna('B')}>B</button>
        <button style={btnStyle(filtroColumna === 'C')} onClick={() => setFiltroColumna('C')}>C</button>
        <button style={btnStyle(filtroColumna === 'D')} onClick={() => setFiltroColumna('D')}>D</button>
      </div>

    </div>
  );
}