
import React, { useState } from 'react';
import styles from './Navbar.module.css'; 
import { FaBars, FaHome, FaUserTie, FaServicestack, FaBlog, FaPhone, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <a href="/" className={styles.navLinkLogo}><img src="/logo.png" alt="logo" /></a>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        <li className={styles.navItem}><a href="/" className={styles.navLink}><FaHome /> Home</a></li>
        <li className={styles.navItem}><a href="#cta" className={styles.navLink}><FaUserTie /> SegurTIC</a></li>
        <li className={styles.navItem}><a href="#servicios" className={styles.navLink}><FaServicestack /> Servicios</a></li>
        <li className={styles.navItem}><a href="#experiencia" className={styles.navLink}><FaServicestack /> Experiencia</a></li>
        <li className={styles.navItem}><a href="#equipo" className={styles.navLink}><FaServicestack /> Equipo</a></li>
        <li className={styles.navItem}><a href="/blog" className={styles.navLink}><FaBlog /> Blog</a></li>
        <li className={styles.navItem}><a href="#contacto" className={styles.navLink}><FaPhone /> Contacto</a></li>
      </ul>
      <div className={styles.socialMedia}>
        <a href="https://linkedin.com" className={styles.socialLink}><FaLinkedin /></a>
        <a href="https://twitter.com" className={styles.socialLink}><FaTwitter /></a>
        <a href="https://instagram.com" className={styles.socialLink}><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
