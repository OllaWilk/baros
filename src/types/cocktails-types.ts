export interface Cocktail {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  alcoholic: boolean;
}

export interface CocktailFull extends Cocktail {
  glass?: string;
  updatedAt?: string;
  instructions?: string;
  createdAt?: string;
}
