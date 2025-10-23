import type { Ingredient } from './Ingredients-types';

export interface Cocktail {
  id: number;
  name: string;
  imageUrl: string;
  category: string | null;
  alcoholic: boolean | null;
}

export interface CocktailFull extends Cocktail {
  updatedAt?: string;
  instructions?: string;
  createdAt?: string;
  glass?: string | null;
  ingredients: Ingredient[];
}

export type CocktailWithoutMeta = Omit<CocktailFull, 'createdAt' | 'updatedAt'>;

export type CocktailIdParam = Pick<Cocktail, 'id'>['id'];
