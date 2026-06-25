import React from 'react';
import styles from './styles.module.css';

/** Responsive card grid (2-up desktop, 1-up mobile). Aliased as <CardGroup> in MDX. */
export default function CardGrid({
  cols = 2,
  children,
}: {
  cols?: number;
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <div className={styles.grid} style={{['--cols' as string]: cols}}>
      {children}
    </div>
  );
}
