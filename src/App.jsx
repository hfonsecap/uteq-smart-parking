import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Estacionamiento from './pages/Estacionamiento';
import Inicio from './pages/Inicio'; // <-- 1. Importamos la página de Inicio
import L from 'leaflet';

// Arreglo temporal para los iconos de Leaflet en Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 2. La ruta raíz "/" ahora carga el componente Inicio */}
        <Route path="/" element={<Inicio />} />
        
        {/* 3. La ruta "/estacionamiento" carga el dashboard */}
        <Route path="/estacionamiento" element={<Estacionamiento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;