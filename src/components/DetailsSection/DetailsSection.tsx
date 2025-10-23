import type { ReactNode } from 'react';
import styles from './DetailsSection.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

export const DetailsSection = ({ title, children }: Props) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
