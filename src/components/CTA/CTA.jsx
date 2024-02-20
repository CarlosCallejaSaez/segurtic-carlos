import React from 'react';
import styles from './CTA.module.css'; 
import { FaShoppingCart, FaShieldAlt, FaCloud, FaLock } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className={styles.cta} id='cta'>
      <div className={styles.content}>
        <h1 className={styles.title}>PROTEGEMOS EL DATO</h1>
        <p className={styles.subtitle}>Agencia de Ciber Seguridad CLOUD</p>
        <button className={styles.button} onClick={() => {/* Handle click action */}}>
          Solicite un proyecto con nosotros
        </button>
      </div>
      <div className={styles.features}>
        <div className={styles.featureItem}>
          <FaShoppingCart className={styles.featureIcon} />
          <span>Caché distribuida</span>
        </div>
        <div className={styles.featureItem}>
          <FaShieldAlt className={styles.featureIcon} />
          <span>Anti DDoS y continuidad</span>
        </div>
        <div className={styles.featureItem}>
          <FaCloud className={styles.featureIcon} />
          <span>Firewall de Protección WAF</span>
        </div>
        <div className={styles.featureItem}>
          <FaLock className={styles.featureIcon} />
          <span>Protección de TI en Cloud</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
