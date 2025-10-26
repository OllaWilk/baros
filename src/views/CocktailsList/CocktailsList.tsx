import { useQuery } from '@tanstack/react-query';
import { fetchCocktails } from '../../utils/http';
import { CoctailCart, LoadingIndicator } from '../../components';
import styles from './CocktailsList.module.scss';

export const CocktailsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cocktails', { perPage: 500 }],
    queryFn: () => fetchCocktails(500),
    staleTime: 1000 * 60,
    gcTime: 30000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <LoadingIndicator text='Loading coctails...'/>;
  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <div className={styles.cocktailsList}>
      <header className={styles.header}>
        <h2>Discover Your Next Favorite Cocktail</h2>
      </header>

      <ul className={styles.grid}>
        {data?.map((el) => (
          <li className={styles.item} key={el.id}>
            <CoctailCart {...el} />
          </li>
        ))}
      </ul>
    </div>
  );
};
