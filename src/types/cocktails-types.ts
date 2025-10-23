export interface Cocktail {
  id: number;
  name: string;
  imageUrl: string | null;
  category: string | null;
  glass?: string | null;
  alcoholic: boolean | null;
}

export interface CocktailFull extends Cocktail {
  updatedAt?: string;
  instructions?: string;
  createdAt?: string;
  /* ingredients: Ingredients */
}
