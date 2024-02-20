import React from 'react';
import styles from './Services.module.css'; 

const Services = () => {
  return (
    <div className={styles.services} id='servicios'>
      <h2 className={styles.title}>SERVICIOS</h2>
      <p className={styles.subtitle}>Ofrecemos los siguientes servicios</p>
      <div className={styles.serviceTable}>
        {/* Encabezados de la tabla */}
        <div className={styles.tableHeader}>
          <div className={styles.headerModule}>Módulo</div>
          <div className={styles.headerDescription}>Descripción</div>
        </div>
        {/* CDN */}
        <div className={styles.tableRow}>
          <div className={styles.module}>CDN</div>
          <div className={styles.description}>Content Delivery Network - tenemos una página del cliente en caché distribuida por el mundo en diferentes servidores</div>
        </div>
        {/* SegurVPN */}
        <div className={styles.tableRow}>
          <div className={styles.module}>SegurVPN</div>
          <div className={styles.description}>SegurVPN ofrece una conexión rápida y fiable, lo que te permite navegar por Internet sin interrupciones...</div>
        </div>
        {/* WAF */}
        <div className={styles.tableRow}>
          <div className={styles.module}>WAF</div>
          <div className={styles.description}>Web Application Firewall - Firewall de aplicaciones web</div>
        </div>
        {/* Anti DDoS */}
        <div className={styles.tableRow}>
          <div className={styles.module}>Anti DDoS</div>
          <div className={styles.description}>Protección de ataques de denegación de servicio</div>
        </div>
        {/* Consultoría */}
        <div className={styles.tableRow}>
          <div className={styles.module}>Consultoría</div>
          <div className={styles.description}>Consultoría de Ciberseguridad, detectamos y protegemos sus sistemas de software malicioso y vulnerabilidades más recientes, tales como Pegasus, Predator, Cryptolocker, etc...</div>
        </div>
      </div>
      <div className={styles.ctaContainer}>
        <button className={styles.ctaButton}>Iniciar un Proyecto</button>
        <button className={styles.ctaButtonSecondary}>Solicitar Presupuesto</button>
      </div>
    </div>
  );
};

export default Services;
