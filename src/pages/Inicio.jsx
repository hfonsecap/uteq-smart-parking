import React from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, Database } from 'lucide-react';

export default function Inicio() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#0f172a',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: '#10b981' }}>
          UTEQ Smart Parking
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', color: '#94a3b8', marginBottom: '40px' }}>
          Sistema de Monitoreo Telemático
        </h2>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '40px' }}>
          Plataforma web para la simulación y visualización en tiempo real del estado de 80 espacios de 
          estacionamiento en la Universidad Técnica Estatal de Quevedo. El sistema integra sensores 
          ultrasónicos simulados conectados a Firebase Realtime Database.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '50px', flexWrap: 'wrap' }}>
          <div style={featureStyle}>
            <Car size={32} color="#10b981" />
            <p>80 Sensores</p>
          </div>
          <div style={featureStyle}>
            <Database size={32} color="#3b82f6" />
            <p>Firebase RTDB</p>
          </div>
          <div style={featureStyle}>
            <MapPin size={32} color="#ef4444" />
            <p>Mapa Interactivo</p>
          </div>
        </div>

        {/* Botón para ir al estacionamiento */}
        <Link to="/estacionamiento" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Ingresar al Sistema
          </button>
        </Link>
      </div>
      
    </div>
  );
}

const featureStyle = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '10px',
  color: '#94a3b8',
  fontWeight: 'bold'
};