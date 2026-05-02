import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.infoContainer}>
        
        {/* Левая часть */}
        <div className={styles.blockLeft}>
          <p className={styles.metaText}>
            * Офигенный сайт для приятного путешествия
          </p>
          <p className={styles.copyright}>
            2026 все права защищены
          </p>
        </div>

        {/* Центр */}
        <div className={styles.blockCenter}>
          <p className={styles.ipText}>ИП Manvel Navoyan Emilevich </p>
          <p className={styles.innText}>ИНН 271015528532</p>
          <a 
            href="/privacy-policy" 
            onClick={(e) => e.preventDefault()} 
            className={styles.privacyLink}
          >
            Политика конфиденциальности
          </a>
        </div>

        {/* Правая часть */}
        <div className={styles.blockRight}>
          <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Наверх">
            ↑
          </button>
          <p className={styles.devText}>
            разработка сайта <span className={styles.devName}>ManikNavi</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;