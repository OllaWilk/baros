import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchOneCocktail } from '../../utils/http';
import type { CocktailIdParam } from '../../types/cocktails-types';
import {
  IngredientsList,
  DetailsMedia,
  DetailsMeta,
  DetailsSection,
  LoadingIndicator,
} from '../../components';
import styles from './CoctailDetails.module.scss';

export const CocktailDetails = () => {
  const cocktailId: CocktailIdParam = Number(useParams().coctailId);

  const {
    data: cocktail,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['cocktail', cocktailId],
    queryFn: () => fetchOneCocktail(cocktailId),
    staleTime: 1000 * 60,
    gcTime: 30000,
    refetchOnWindowFocus: false,
  });

  console.log(cocktail);

  if (!cocktail || !Number.isFinite(cocktailId) || cocktailId <= 0)
    return <p>Sorry coctail you are looking for does not exist</p>;
  if (isLoading) return <LoadingIndicator />;

  if (error instanceof Error) return <p>{error.message}</p>;

  const { name, imageUrl, category, alcoholic, glass, instructions, ingredients } = cocktail;

  return (
    <article className={styles.details}>
      <header className={styles.header}>
        <DetailsMedia name={name} imageUrl={imageUrl} />
        <DetailsMeta
          name={name}
          category={category}
          alcoholic={alcoholic}
          glass={glass || null}
          isFetching={isFetching}
        />
      </header>
      {instructions && (
        <DetailsSection title="Instructions">
          <p>{instructions}</p>
        </DetailsSection>
      )}
      {ingredients?.length && (
        <DetailsSection title="Ingredients">
          <IngredientsList ingredients={ingredients} />
        </DetailsSection>
      )}
    </article>
  );
};
