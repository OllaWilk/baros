import { useQuery } from '@tanstack/react-query';
import type { CocktailIdParam, CocktailWithoutMeta } from '../types/cocktails-types';
import { fetchCocktails, fetchOneCocktail } from './http';

export const useCocktailsQuery = (perPage = 500) => {
  return useQuery({
    queryKey: ['cocktails', { perPage }],
    queryFn: () => fetchCocktails(perPage),
    staleTime: 1000 * 60,
    gcTime: 30000,
    refetchOnWindowFocus: false,
  });
};

export const useCocktailQueryById = (id: CocktailIdParam | undefined) => {
  return useQuery<CocktailWithoutMeta>({
    queryKey: ['cocktail', id],
    queryFn: () => fetchOneCocktail(Number(id)),
    enabled: Number.isFinite(Number(id)) && Number(id) > 0,
    staleTime: 60_000,
    gcTime: 30_000,
    refetchOnWindowFocus: false,
  });
};
