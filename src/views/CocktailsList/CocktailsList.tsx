import { useQuery } from '@tanstack/react-query';
import { fetchCocktails } from '../../utils/http';
import { CoctailCart } from '../../components';
import styles from './CocktailsList.module.scss';

export const CocktailsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cocktails'],
    queryFn: fetchCocktails,
    staleTime: 1000 * 60,
    gcTime: 30000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading cocktails...</p>;
  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <div className={styles.cocktailsList}>
      <header className={styles.header}>
        <h2>Our Coctails</h2>
      </header>
      <ul className={styles.grid}>
        {data?.map((el) => (
          <li className={styles.item}>
            <CoctailCart key={el.id} {...el} />
          </li>
        ))}
      </ul>
    </div>
  );
};
