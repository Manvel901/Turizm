import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Меню "прилипает", когда прокрутили больше 350px
      setIsSticky(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);
    // Удаляем слушатель при размонтировании компонента
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Декоративные уголки */}
        <div className={`${styles.corner} ${styles.topLeft}`}></div>
        <div className={`${styles.corner} ${styles.topRight}`}></div>
        <div className={`${styles.corner} ${styles.bottomLeft}`}></div>
        <div className={`${styles.corner} ${styles.bottomRight}`}></div>

        {/* Декоративные звездочки */}
        <div className={`${styles.star} ${styles.leftStar}`}>✦</div>
        <div className={`${styles.star} ${styles.rightStar}`}>✧</div>

        {/* Основной текст */}
        <h1 className={styles.title}>
          ПОРА ПУТЕШЕСТВОВАТЬ<br />
          ПО-ДРУГОМУ
        </h1>
        
        <p className={styles.subtitle}>
          Мы делаем туры, которые вы запомните на всю жизнь!<br />
          А заботы берем на себя
        </p>

        {/* Навигация с динамическим классом */}
        <nav className={`${styles.navContainer} ${isSticky ? styles.sticky : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#why-go">ЗАЧЕМ ЕХАТЬ?</a></li>
            <li className={styles.navItem}><a href="#schedule">РАСПИСАНИЕ</a></li>
            <li className={styles.navItem}><a href="#aboutAs">КТО МЫ?</a></li>
            <li className={styles.navItem}><a href="#reviews">ОТЗЫВЫ</a></li>
            <li className={styles.navItem}><a href="#contacts">КОНТАКТЫ</a></li>
            <li className={`${styles.navItem} ${styles.activeItem}`}>
              <a href="#services">УСЛУГИ</a>
            </li>
          </ul>
          
          <button className={styles.bookButton}>
            (+) ЗАБРОНИРОВАТЬ МЕСТО
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Header;