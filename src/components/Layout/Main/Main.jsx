import React from 'react';
import styles from './Main.module.css';

// Секция лежит на уровень выше (в папке Layout)
import Section from '../../Section/Section'; 

// Все контентные секции лежат в src/components/Sections/
// Поэтому нужно подняться на ДВА уровня вверх: из Main -> в Layout -> в components
import WhyGo from '../../Section/WhyGo/WhyGO.jsx';
import AboutAs from '../../Section/AboutAs/About.jsx';
import Schedule from '../../Section/Schedule/Schedule.jsx';
import Reviews from '../../Section/Reviews/Reviews.jsx';
import Contacts from '../../Section/Contacts/Contacts.jsx';
import Services from '../../Section/Services/Services.jsx'

const Main = () => {
  return (
    <main className={styles.main}>
      <Section id="why-go"><WhyGo /></Section>
      <Section id="schedule"><Schedule /></Section>
      <Section id="aboutAs"><AboutAs /></Section>
      <Section id="reviews"><Reviews /></Section>
      <Section id="contacts"><Contacts /></Section>
      <Section id="services"><Services /></Section>
    </main>
  );
};

export default Main;