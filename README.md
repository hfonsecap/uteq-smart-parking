# UTEQ Smart Parking - Monitoreo Telemático 🚗📡

Aplicación web desarrollada en React para la simulación y visualización en tiempo real de un estacionamiento inteligente de 80 espacios, ubicado en la Facultad de Ciencias de la Salud de la Universidad Técnica Estatal de Quevedo (UTEQ).

El proyecto simula sensores ultrasónicos conectados a Firebase Realtime Database para monitorear la disponibilidad de las plazas.

## Características Principales
- **Simulación en Tiempo Real:** Script en Node.js que inyecta datos de sensores simulando el tráfico de vehículos.
- **Dashboard Interactivo:** Cuadrícula de 80 espacios (4 columnas x 20 filas) con actualización automática.
- **Detalle e Historial:** Registro de los últimos eventos (hora, estado y distancia en cm) por cada sensor.
- **Filtros:** Capacidad para filtrar los espacios por estado (Libre/Ocupado) y por columna (A, B, C, D).
- **Mapa Geográfico:** Integración con Leaflet para visualizar el Bounding Box exacto del parqueadero en el campus.

## Requisitos Previos
- Node.js instalado en el sistema.
- Una cuenta de Firebase con un proyecto y Realtime Database habilitada (modo prueba).

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/hfonsecap/uteq-smart-parking.git](https://github.com/hfonsecap/uteq-smart-parking.git)
   cd uteq-smart-parking
