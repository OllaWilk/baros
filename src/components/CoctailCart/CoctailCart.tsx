import { useNavigate } from 'react-router-dom';
import type { Cocktail } from '../../types/cocktails-types';
import { useFavouritesActions } from '../../utils/useFavouritesStorage';
import { FavouriteBtn } from '../FavouriteBtn/FavouriteBtn';
import styles from './CoctailCart.module.scss';

export const CoctailCart = ({ name, category, imageUrl, alcoholic, id }: Cocktail) => {
  const { toggleFavorite, isFavorite } = useFavouritesActions();
  const navigate = useNavigate();
  const fav = isFavorite(id);

  const handleAddToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite({ id, name, category, imageUrl, alcoholic });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // żeby nie kliknął rodzica-Linka
    e.stopPropagation();
    navigate(`/cocktails/${id}`);
  };
  return (
    <article className={styles.coctailCart}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.type}>{alcoholic ? 'Alcoholic' : 'Non-alcoholic'}</p>
        <FavouriteBtn active={fav} onClick={handleAddToFavorites} />
        <button
          type="button"
          onClick={handleClick}
          className={styles.detailsBtn}
          aria-label={'View details'}
        >
          View details
        </button>
      </div>
    </article>
  );
};
