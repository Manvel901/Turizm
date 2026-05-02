import React from 'react';
import styles from './Section.module.css';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`${styles.section} ${className || ''}`}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
};

export default Section;