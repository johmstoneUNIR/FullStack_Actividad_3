
import { useState, useEffect } from 'react';

export const useFetch = (URL:string) => {
    const [resultados, setResultados] = useState([])
    const [isLoading, setisLoading] = useState(true)
    
    useEffect(() => {
        const fetchRequest = async () => {
            const response = await fetch(
                URL,
              ).then((response) => response.json());
            setResultados(response);
            setisLoading(false);
        }

        fetchRequest();
         
    }, [URL])
      

      return {
        resultados,
        isLoading
      }
}
