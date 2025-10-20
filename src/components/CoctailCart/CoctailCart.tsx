import type { Cocktail } from '../../types/cocktails-types';
import styles from './CoctailCart.module.scss';

export const CoctailCart = ({ name, category, imageUrl, alcoholic }: Cocktail) => {
  return (
    <article className={styles.coctailCart}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{alcoholic ? 'Alcoholic' : 'Non-alcoholic'}</p>
    </article>
  );
};
