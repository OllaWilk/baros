import type { Cocktail } from '../../types/cocktails-types';
import { Heart } from 'lucide-react';
import styles from './CoctailCart.module.scss';

export const CoctailCart = ({ name, category, imageUrl, alcoholic }: Cocktail) => {
  const handleAddToFavorites = () => console.log('add to favourites');
  return (
    <article className={styles.coctailCart}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} />
        <button
          className={styles.favoriteBtn}
          aria-label="Add to favorites"
          onClick={handleAddToFavorites}
        >
          <Heart className={styles.heartIcon} />
        </button>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.type}>{alcoholic ? 'Alcoholic' : 'Non-alcoholic'}</p>
        <button className={styles.detailsBtn}>View details</button>
      </div>
    </article>
  );
};
