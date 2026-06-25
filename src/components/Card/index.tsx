import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type CardProps = {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
};

/** Bespoke card — surface bg, hairline border, accent icon, lift + accent-border on hover. */
export default function Card({title, icon, href, children}: CardProps): React.ReactNode {
  const inner = (
    <>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.title}>{title}</div>
      {children && <div className={styles.body}>{children}</div>}
    </>
  );
  return href ? (
    <Link to={href} className={styles.card}>{inner}</Link>
  ) : (
    <div className={styles.card}>{inner}</div>
  );
}
