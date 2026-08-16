import React from 'react';

export default function HistorialEspacio({ historial, loading }) {
  if (loading) {
    return <p style={{ color: '#64748b', fontSize: '12px', marginTop: '20px' }}>Cargando historial...</p>;
  }

  if (!historial || historial.length === 0) {
    return <p style={{ color: '#64748b', fontSize: '12px', marginTop: '20px' }}>No hay registros recientes para este espacio.</p>;
  }

  return (
    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
      <h3 style={{ fontSize: '14px', color: '#0f172a', marginBottom: '15px' }}>
        Historial Reciente (Últimos 10 eventos)
      </h3>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {historial.map((evento, index) => {
          const esOcupado = evento.estado === 'ocupado';
          // Extraemos solo la hora para que la lista no sea tan larga
          const hora = new Date(evento.fechaHora).toLocaleTimeString();
          
          return (
            <li key={index} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: '1px solid #f8fafc',
              fontSize: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '80px' }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: esOcupado ? '#ef4444' : '#10b981' 
                }}></span>
                <span style={{ fontWeight: esOcupado ? 'bold' : 'normal', color: '#334155' }}>
                  {evento.estado.charAt(0).toUpperCase() + evento.estado.slice(1)}
                </span>
              </div>
              <span style={{ color: '#64748b', textAlign: 'center', flex: 1 }}>{evento.distanciaDetectada} cm</span>
              <span style={{ color: '#94a3b8', textAlign: 'right', minWidth: '70px' }}>{hora}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}