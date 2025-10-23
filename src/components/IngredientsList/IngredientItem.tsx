import type { Ingredient } from '../../types/Ingredients-types';
import styles from './IngredientsList.module.scss';

type Props = {
  ingredient: Pick<Ingredient, 'name' | 'measure' | 'imageUrl'>;
};

export const IngredientItem = ({ ingredient }: Props) => {
  const { name, measure, imageUrl } = ingredient;

  return (
    <li className={styles.ingredient}>
      <div className={styles.ingredientMain}>
        <span className={styles.ingredientName}>{name ?? 'Unknown'}</span>
        {measure && <span className={styles.ingredientMeasure}> — {measure}</span>}
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={name ?? 'ingredient'}
          className={styles.ingredientImage}
          loading="lazy"
          width={32}
          height={32}
        />
      )}
    </li>
  );
};
