import type { Cocktail } from '../../types/cocktails-types';
import { useFavouritesActions } from '../../utils/useFavouritesStorage';
import { FavouriteBtn } from '../FavouriteBtn/FavouriteBtn';
import { Btn } from '../Btn/Btn';
import styles from './CoctailCart.module.scss';

export const CoctailCart = ({ name, category, imageUrl, alcoholic, id }: Cocktail) => {
  const { toggleFavorite, isFavorite } = useFavouritesActions();
  const fav = isFavorite(id);

  const handleAddToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite({ id, name, category, imageUrl, alcoholic });
  };

  return (
    <article className={styles.coctailCart}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} />
        <FavouriteBtn active={fav} onClick={handleAddToFavorites} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.type}>{alcoholic ? 'Alcoholic' : 'Non-alcoholic'}</p>
        <Btn
          text={'View details'}
          url={`/cocktails/${id}`}
          aria-label={`View details for ${name}`}
        />
      </div>
    </article>
  );
};
