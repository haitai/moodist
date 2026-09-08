import { sounds } from '@/data/sounds';
import { useMemo } from 'react';

import styles from './category-icons.module.css';

import { Container } from '@/components/container';

export default function CategoryIcons() {
  const categories = useMemo(() => sounds.categories, []);

  const goto = (id: string) => {
    const category = document.getElementById(`category-${id}`);
    category?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Browse sounds</h2>
          <p>Jump to any category.</p>
        </div>

        <nav aria-label="Sound categories" className={styles.categories}>
          {categories.map(category => (
            <button
              className={styles.category}
              key={category.id}
              onClick={() => goto(category.id)}
            >
              <span aria-hidden="true" className={styles.icon}>
                {category.icon}
              </span>
              <span>{category.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </Container>
  );
}
