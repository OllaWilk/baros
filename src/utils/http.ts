import type { Cocktail, CocktailWithoutMeta } from '../types/cocktails-types';

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
    category: coctail.category ?? null,
    alcoholic: coctail.category ?? null,
  }));

  console.log(data)
  return cocktailData as Cocktail[];
};

export const fetchOneCocktail = async (id: number): Promise<CocktailWithoutMeta> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cocktails/${id}`);

  if (!response.ok) {
    const error = new Error('Failed to fetch cocktails');
    throw error;
  }

  const json = await response.json();

  const {
    id: cocktailId,
    name,
    imageUrl,
    category,
    alcoholic,
    glass,
    instructions,
    ingredients,
  } = json.data;

  return {
    id: cocktailId,
    name,
    imageUrl,
    category,
    alcoholic,
    glass,
    instructions,
    ingredients,
  } as CocktailWithoutMeta;
};
