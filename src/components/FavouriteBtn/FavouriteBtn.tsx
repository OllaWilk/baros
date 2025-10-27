import { Heart } from 'lucide-react';
import styles from './FavouriteBtn.module.scss';

interface Props {
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FavouriteBtn = ({ active, onClick }: Props) => {
  return (
    <button
      className={`${styles.favoriteBtn} ${active ? styles.active : ''}`}
      aria-label={active ? 'Remove from favourites' : 'Add to favourites'}
      aria-pressed={active}
      onClick={onClick}
    >
      <Heart className={styles.heartIcon} />
    </button>
  );
};
