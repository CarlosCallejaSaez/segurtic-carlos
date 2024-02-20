import React from 'react';
import styles from './About.module.css'; 

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>NUESTRA EMPRESA</h1>
      <h2 className={styles.subtitle}>Qué hacemos? Ciber Seguridad</h2>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h3 className={styles.introTitle}>Hola! Somos expertos en Ciber Seguridad</h3>
          <p className={styles.introText}>Protegemos tus datos</p>
          <p className={styles.description}>Actualmente, la evolución exponencial de los avances tecnológicos en entornos globales, se encuentra generando disrupción y cambios de paradigma continuos. El impacto que estos cambios generan en las organizaciones, pueden causar confusión en las decisiones y estrategias que los Directivos de Tecnología y poner en riesgo su entorno de TI.</p>
        </div>
        <div className={styles.values}>
          <div className={styles.valueItem}>
            <span className={styles.number}>01.</span>
            <h4 className={styles.valueTitle}>Seguridad</h4>
            <p className={styles.valueDescription}>Nos encargamos de que los Directivos de TI de la empresa tomen la decisión correcta frente a posibles vulnerabilidades.</p>
          </div>
          <div className={styles.valueItem}>
            <span className={styles.number}>02.</span>
            <h4 className={styles.valueTitle}>Integridad</h4>
            <p className={styles.valueDescription}>Ofrecemos integridad y calidad en nuestros servicios, lo que asegura un éxito en el proyecto de seguridad.</p>
          </div>
          <div className={styles.valueItem}>
            <span className={styles.number}>03.</span>
            <h4 className={styles.valueTitle}>Innovación</h4>
            <p className={styles.valueDescription}>Nos basamos en la innovación, en las nuevas tecnologías y herramientas del mercado para dar la máxima protección del Dato.</p>
          </div>
          <div className={styles.valueItem}>
            <span className={styles.number}>04.</span>
            <h4 className={styles.valueTitle}>Cloud</h4>
            <p className={styles.valueDescription}>Todos nuestros servicios están orientados al Cloud, con la máxima seguridad, cifrado y protección, porque somos conscientes de la importancia de tus datos.</p>
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <h3 className={styles.partnersTitle}>Nuestros partners</h3>
        {/* Partner logos would go here */}
        {/* Example for a partner logo */}
        <div className={styles.partnerLogo}>
          <img src="/tenable.png" alt="Tenable" />
        </div>
        {/* Repeat for other partners */}
      </div>
    </div>
  );
};

export default About;
