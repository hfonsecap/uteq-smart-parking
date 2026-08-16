import React from 'react';
import { MapContainer, TileLayer, Rectangle, Tooltip } from 'react-leaflet';
// IMPORTANTE: Leaflet necesita sus estilos CSS para que el mapa no se vea roto
import 'leaflet/dist/leaflet.css'; 

export default function MapaEstacionamiento() {
  // Coordenadas del Bounding Box según el requerimiento de la UTEQ
  const bounds = [
    [-1.012571, -79.468300], // Esquina Sur-Oeste [Sur, Oeste]
    [-1.012262, -79.467462]  // Esquina Norte-Este [Norte, Este]
  ];

  // Centro aproximado para enfocar la cámara inicial
  const centro = [-1.012416, -79.467881];

  return (
    <div style={{ marginTop: '40px', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h3 style={{ marginTop: 0, color: '#0f172a' }}>Ubicación Geográfica</h3>
      <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '15px' }}>
        Facultad de Ciencias de la Salud - UTEQ
      </p>
      
      {/* Contenedor del mapa. Debe tener una altura definida para verse */}
      <div style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        <MapContainer center={centro} zoom={18} style={{ height: '100%', width: '100%' }}>
          
          {/* Capa base del mapa (OpenStreetMap) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Rectángulo que marca el área del parqueadero */}
          <Rectangle bounds={bounds} pathOptions={{ color: '#10b981', weight: 3, fillOpacity: 0.3 }}>
            <Tooltip permanent direction="center" className="my-labels">
              Parqueadero Inteligente (80 espacios)
            </Tooltip>
          </Rectangle>

        </MapContainer>
      </div>
    </div>
  );
}