import React from 'react';
import { Car } from 'lucide-react';

export default function CuadriculaEstacionamiento({ espacios, onSelectEspacio }) {
  const getColumnaLetra = (num) => ['A', 'B', 'C', 'D'][num - 1] || '';

  return (
    <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {espacios.map((espacio) => {
          const esOcupado = espacio.estado === 'ocupado';
          
          return (
            <div 
              key={espacio.id}
              onClick={() => onSelectEspacio(espacio)} // Añadimos el evento clic
              style={{
                backgroundColor: esOcupado ? '#ef4444' : '#334155',
                padding: '10px',
                borderRadius: '8px',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px',
                border: esOcupado ? '2px solid #b91c1c' : '2px solid #475569',
                cursor: 'pointer',
                transition: 'transform 0.1s' // Pequeño efecto visual
              }}
              // Efecto hover (opcional, para que parezca un botón)
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                {getColumnaLetra(espacio.columna)}{espacio.numero.toString().padStart(2, '0')}
              </span>
              
              {esOcupado ? (
                <Car size={24} color="white" style={{ margin: '5px 0' }} />
              ) : (
                <span style={{ fontSize: '10px', color: '#94a3b8', margin: '10px 0' }}>LIBRE</span>
              )}
              
              <span style={{ fontSize: '10px' }}>{espacio.distanciaDetectada} cm</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}