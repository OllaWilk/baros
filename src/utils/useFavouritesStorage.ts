import { useState, useEffect, useCallback } from 'react';
import type { Cocktail, CocktailIdParam } from '../types/cocktails-types';

const FAV_KEY = 'baros:favorites';
const FAV_EVENT = 'baros:favorites:update';

export const useFavouritesActions = () => {
  const [favorites, setFavorites] = useState<Cocktail[]>(() => {
    const saved = localStorage.getItem(FAV_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    window.dispatchEvent(new CustomEvent(FAV_EVENT));
  }, [favorites]);

  const isFavorite = useCallback(
    (id: CocktailIdParam) => favorites.some((cocktail: Cocktail) => cocktail.id === id),
    [favorites]
  );

  const addFavourite = useCallback((cocktail: Cocktail) => {
    setFavorites((prev) => {
      const exists = prev?.some((item) => item.id === cocktail.id);
      if (exists) return prev;
      return [...prev, cocktail];
    });
  }, []);

  const toggleFavorite = useCallback((cocktail: Cocktail) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === cocktail.id);
      if (exists) {
        return prev.filter((item) => item.id !== cocktail.id);
      } else {
        return [...prev, cocktail];
      }
    });
  }, []);

  return {
    favorites,
    isFavorite,
    addFavourite,
    toggleFavorite,
  };
};
