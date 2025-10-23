import { Logo } from '../Logo/Logo';
import styles from './DetailsMedia.module.scss';

type Props = {
  name: string;
  imageUrl: string | null;
};

export const DetailsMedia = ({ name, imageUrl }: Props) => (
  <div className={styles.media}>
    {imageUrl ? (
      <img src={imageUrl} alt={name} className={styles.image} loading="eager" />
    ) : (
      <div className={styles.placeholder}>
        <Logo />
        <p>No image</p>
      </div>
    )}
  </div>
);
