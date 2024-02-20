import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="./logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          <li><a href="/">Home</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <div className={styles.policy}>
        © 2024 Carlos Calleja Sáez <a href="/privacy-policy">Política de Privacidad</a>
      </div>
    </footer>
  );
}

export default Footer;
