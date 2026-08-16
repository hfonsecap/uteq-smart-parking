// src/hooks/useEspacios.jsx
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../services/firebase';

export const useEspacios = () => {
  const [espacios, setEspacios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const espaciosRef = ref(db, 'espacios');
    const unsubscribe = onValue(espaciosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convertir el objeto de Firebase en un array
        const espaciosArray = Object.values(data);
        setEspacios(espaciosArray);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { espacios, loading };
};