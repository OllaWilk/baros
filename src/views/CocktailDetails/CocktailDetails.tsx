import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CocktailDetails = () => {
  const { coctailId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cocktails/${coctailId}`);

      if (!response.ok) {
        const error = new Error('Failed to fetch cocktails');
        throw error;
      }

      const json = await response.json();
      console.log(json);
    })();
  }, []);

  return <div>Sorry, this page is under construction. Coctail ID: {coctailId} </div>;
};
