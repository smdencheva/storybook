import React from 'react';
import styles from './Article.module.css'


type ArticleProps = {
  title: string;
  excerpt: string;
  publishedAt: string; 
  authorName: string;
};

export function Article({
  title,
  excerpt,
  publishedAt,
  authorName,
}: ArticleProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <p className={styles.meta}>
        <strong>By:</strong> {authorName} &nbsp;|&nbsp; {formatDate(publishedAt)}
      </p>
    </div>
  );
}


function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}


