import { useState, useEffect } from 'react';
import { ref, onValue, query, limitToLast } from 'firebase/database';
import { db } from '../services/firebase';

export function useHistorialEspacio(espacioId) {
  const [historial, setHistorial] = useState([]);
  const [loadingHistorial, setLoadingHistorial] = useState(true);

  useEffect(() => {
    // Si no hay ningún espacio seleccionado, no hacemos nada
    if (!espacioId) {
      setHistorial([]);
      setLoadingHistorial(false);
      return;
    }

    setLoadingHistorial(true);
    
    // Hacemos una consulta a Firebase pidiendo solo los últimos 10 eventos de ese sensor
    const historialRef = query(ref(db, `historial/${espacioId}`), limitToLast(10));
    
    const unsubscribe = onValue(historialRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convertimos el objeto en un array y lo ordenamos (el más reciente primero)
        const historialArray = Object.values(data).sort((a, b) => b.fechaHora - a.fechaHora);
        setHistorial(historialArray);
      } else {
        setHistorial([]);
      }
      setLoadingHistorial(false);
    });

    return () => unsubscribe();
  }, [espacioId]);

  return { historial, loadingHistorial };
}