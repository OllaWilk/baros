import type { Cocktail } from '../types/cocktails-types';

const apiUrl = import.meta.env.VITE_API_URL as string;

export const fetchCocktails = async (perPage = 500): Promise<Cocktail[]> => {
  const response = await fetch(`${apiUrl}/cocktails?perPage=${perPage}`);

  if (!response.ok) {
    const error = new Error('Failed to fetch cocktails');
    throw error;
  }

  const { data } = await response.json();

  const cocktailData = data.map((coctail: Cocktail) => ({
    id: coctail.id,
    name: coctail.name,
    imageUrl: coctail.imageUrl,
    category: coctail.category,
  }));

  return cocktailData as Cocktail[];
};
