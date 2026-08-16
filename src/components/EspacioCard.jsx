import React from 'react';
import HistorialEspacio from './HistorialEspacio'; // <-- Importamos el componente
import { useHistorialEspacio } from '../hooks/useHistorialEspacio'; // <-- Importamos el hook

export default function EspacioCard({ espacio }) {
  // Llamamos al hook pasando el ID del espacio (si existe)
  const { historial, loadingHistorial } = useHistorialEspacio(espacio?.id);

  if (!espacio) {
    return (
      <div style={panelStyle}>
        <h3 style={{ margin: '0 0 10px 0' }}>Sensor Seleccionado</h3>
        <p style={{ color: '#64748b' }}>Haz clic en un cuadro de la cuadrícula para ver sus detalles.</p>
      </div>
    );
  }

  const getColumnaLetra = (num) => ['A', 'B', 'C', 'D'][num - 1] || '';
  const idCorto = `${getColumnaLetra(espacio.columna)}${espacio.numero.toString().padStart(2, '0')}`;
  const esOcupado = espacio.estado === 'ocupado';
  const fechaActualizacion = new Date(espacio.fechaHora).toLocaleString();

  return (
    <div style={panelStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>{idCorto}</h2>
        <span style={{ 
          backgroundColor: esOcupado ? '#ef4444' : '#10b981', 
          color: 'white', 
          padding: '4px 12px', 
          borderRadius: '999px', 
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {espacio.estado.toUpperCase()}
        </span>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={labelStyle}>Distancia detectada</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '5px 0' }}>
          {espacio.distanciaDetectada} <span style={{ fontSize: '1rem', color: '#64748b' }}>cm</span>
        </p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <p style={labelStyle}>ID RTDB</p>
        <p style={dataStyle}>{espacio.id}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <p style={labelStyle}>COLUMNA / NÚMERO</p>
        <p style={dataStyle}>{getColumnaLetra(espacio.columna)} / {espacio.numero}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <p style={labelStyle}>CENTRO GEOGRÁFICO</p>
        <p style={dataStyle}>{espacio.ubicacion.latitud}, {espacio.ubicacion.longitud}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <p style={labelStyle}>ÚLTIMA ACTUALIZACIÓN</p>
        <p style={dataStyle}>{fechaActualizacion}</p>
      </div>

      {/* Aquí insertamos el historial */}
      <HistorialEspacio historial={historial} loading={loadingHistorial} />
      
    </div>
  );
}

// Estilos
const panelStyle = {
  backgroundColor: '#f8fafc',
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  border: '1px solid #e2e8f0'
};
const labelStyle = { fontSize: '10px', fontWeight: 'bold', color: '#64748b', margin: '0 0 4px 0', textTransform: 'uppercase' };
const dataStyle = { margin: 0, color: '#0f172a', fontWeight: '500', fontSize: '14px' };