import React from 'react';

export default function ResumenEstacionamiento({ espacios }) {
  const total = espacios.length;
  const libres = espacios.filter(e => e.estado === 'libre').length;
  const ocupados = total - libres;
  const porcentajeLibre = total > 0 ? Math.round((libres / total) * 100) : 0;
  const porcentajeOcupado = total > 0 ? Math.round((ocupados / total) * 100) : 0;

  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
      <div style={tarjetaStyle}>
        <p style={tituloStyle}>TOTAL</p>
        <h2>{total}</h2>
        <p style={subStyle}>espacios monitoreados</p>
      </div>
      <div style={tarjetaStyle}>
        <p style={tituloStyle}>DISPONIBLES</p>
        <h2 style={{ color: '#10b981' }}>{libres}</h2>
        <p style={subStyle}>{porcentajeLibre}% del parqueadero</p>
      </div>
      <div style={tarjetaStyle}>
        <p style={tituloStyle}>OCUPADOS</p>
        <h2 style={{ color: '#ef4444' }}>{ocupados}</h2>
        <p style={subStyle}>{porcentajeOcupado}% del parqueadero</p>
      </div>
    </div>
  );
}

// Estilos en línea para avanzar rápido (puedes pasarlos a CSS luego)
const tarjetaStyle = {
  flex: 1, backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)', minWidth: '200px'
};
const tituloStyle = { fontSize: '12px', fontWeight: 'bold', color: '#64748b', margin: 0 };
const subStyle = { fontSize: '12px', color: '#94a3b8', margin: 0 };