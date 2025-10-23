import type { Ingredient } from '../../types/Ingredients-types';
import { IngredientItem } from './IngredientItem';
import styles from './IngredientsList.module.scss';

type Props = {
  ingredients: Ingredient[];
};

export const IngredientsList = ({ ingredients }: Props) => {
  return (
    <ul className={styles.ingredients}>
      {ingredients.map((ing, idx) => (
        <IngredientItem key={ing.id ?? idx} ingredient={ing} />
      ))}
    </ul>
  );
};
