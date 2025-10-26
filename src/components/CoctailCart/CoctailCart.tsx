import type { Cocktail } from '../../types/cocktails-types';
import styles from './CoctailCart.module.scss';
import { FavouriteBtn } from '../FavouriteBtn/FavouriteBtn';
import { Btn } from '../Btn/Btn';

export const CoctailCart = ({ name, category, imageUrl, alcoholic, id }: Cocktail) => {
  const handleAddToFavorites = () => console.log('add to favourites');

  return (
    <article className={styles.coctailCart}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} />
        <FavouriteBtn onClick={handleAddToFavorites} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.type}>{alcoholic ? 'Alcoholic' : 'Non-alcoholic'}</p>
        <Btn text={'View details'} url={`/cocktails/${id}`}   aria-label={`View details for ${name}`}/>
      </div>
    </article>
  );
};
