import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update } from "firebase/database";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAIyePg5ZoM4LKGqaoV9PF77779HXlumlE",
  authDomain: "uteq-smart-parking-6783d.firebaseapp.com",
  databaseURL: "https://uteq-smart-parking-6783d-default-rtdb.firebaseio.com",
  projectId: "uteq-smart-parking-6783d",
  storageBucket: "uteq-smart-parking-6783d.firebasestorage.app",
  messagingSenderId: "669904232745",
  appId: "1:669904232745:web:34487e9e97cfc049a85738"
};

// Inicializar la conexión
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const COLUMNAS = 4;
const FILAS = 20;

// Función para crear los 80 espacios iniciales
async function inicializarParqueadero() {
  const espacios = {};
  
  for (let c = 1; c <= COLUMNAS; c++) {
    for (let f = 1; f <= FILAS; f++) {
      const id = `ESP-C0${c}-${f.toString().padStart(2, '0')}`;
      
      espacios[id] = {
        id: id,
        columna: c,
        numero: f,
        distanciaDetectada: 150.0, // Más de 50cm = libre
        estado: "libre",
        fechaHora: Date.now(),
        ubicacion: {
          nombre: "Parqueadero UTEQ",
          latitud: -1.012270, 
          longitud: -79.468280,
          boundingBox: {
            norte: -1.012261,
            sur: -1.012302,
            oeste: -79.468299,
            este: -79.468240
          }
        }
      };
    }
  }

  // Guardar todo en la base de datos
  await set(ref(db, 'espacios'), espacios);
  console.log("✅ Los 80 espacios han sido creados en Firebase.");
}

// Función para simular movimiento de autos
function simularSensores() {
  console.log("🚗 Iniciando simulación de vehículos...");
  
  // Cada 4 segundos, un auto entra o sale aleatoriamente
  setInterval(() => {
    // Escoger un espacio al azar
    const cAleatoria = Math.floor(Math.random() * COLUMNAS) + 1;
    const fAleatoria = Math.floor(Math.random() * FILAS) + 1;
    const id = `ESP-C0${cAleatoria}-${fAleatoria.toString().padStart(2, '0')}`;
    
    // Generar una distancia al azar (entre 10cm y 250cm)
    const nuevaDistancia = parseFloat((Math.random() * 240 + 10).toFixed(1));
    
    // Regla del negocio: menor o igual a 50cm es ocupado
    const estado = nuevaDistancia <= 50 ? 'ocupado' : 'libre';
    const timestamp = Date.now();

    // Actualizar el estado del espacio
    update(ref(db, `espacios/${id}`), {
      distanciaDetectada: nuevaDistancia,
      estado: estado,
      fechaHora: timestamp
    });

    // Guardar el registro en el historial
    const registroHistorial = {
      distanciaDetectada: nuevaDistancia,
      estado: estado,
      fechaHora: timestamp
    };
    update(ref(db, `historial/${id}/${timestamp}`), registroHistorial);

    console.log(`Sensor ${id} actualizado: ${estado} (${nuevaDistancia} cm)`);
  }, 4000); // 4000 milisegundos = 4 segundos
}

// Ejecutar el script
inicializarParqueadero().then(() => {
  simularSensores();
});