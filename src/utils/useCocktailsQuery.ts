import { useQuery } from '@tanstack/react-query';
import { fetchCocktails } from './http';

export const useCocktailsQuery = (perPage = 500) => {
  return useQuery({
    queryKey: ['cocktails', { perPage }],
    queryFn: () => fetchCocktails(perPage),
    staleTime: 1000 * 60,
    gcTime: 30000,
    refetchOnWindowFocus: false,
  });
};

// export const
