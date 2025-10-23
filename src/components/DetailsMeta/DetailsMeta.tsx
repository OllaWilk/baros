import styles from './DetailsMeta.module.scss';

type Props = {
  name: string;
  category: string | null;
  alcoholic: boolean | null;
  glass: string | null;
  isFetching?: boolean;
};

export const DetailsMeta = ({ name, category, alcoholic, glass, isFetching }: Props) => {
  return (
    <div className={styles.meta}>
      <h1 className={styles.title}>{name}</h1>

      <ul className={styles.list}>
        <li>
          <strong>Category:</strong> {category ?? '—'}
        </li>
        <li>
          <strong>Alcoholic:</strong> {alcoholic === null ? '—' : alcoholic ? 'Yes' : 'No'}
        </li>
        <li>
          <strong>Glass:</strong> {glass ?? '—'}
        </li>
      </ul>

      {isFetching && <small className={styles.hint}>Updating…</small>}
    </div>
  );
};
