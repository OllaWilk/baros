import { Heart } from 'lucide-react';
import styles from './FavouriteBtn.module.scss';

interface Props {
  onClick: () => void;
}

export const FavouriteBtn = ({ onClick }: Props) => {
  return (
    <button className={styles.favoriteBtn} aria-label="Add to favorites" onClick={onClick}>
      <Heart className={styles.heartIcon} />
    </button>
  );
};
