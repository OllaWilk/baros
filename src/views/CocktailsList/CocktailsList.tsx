import { useQuery } from '@tanstack/react-query';
import { fetchCocktails } from '../../utils/http';

import styles from './CocktailsList.module.scss';

export const CocktailsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cocktails'],
    queryFn: fetchCocktails,
  });

  if (isLoading) return <p>Loading cocktails...</p>;
  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <div className={styles.cocktailsList}>
      <h2>Our Coctails</h2>
      <ul>
        {data?.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};
