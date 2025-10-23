export interface Ingredient {
  id: number;
  name: string;
  description: string | null;
  alcohol: boolean | null;
  type: string | null;
  percentage: number | null;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  measure: string | null;
}
