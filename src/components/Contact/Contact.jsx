import React from 'react';
import styles from './Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.contacto} id='contacto'>
      <h2>Inicie un proyecto con nosotros!</h2>
      <div className={styles.info}>
        <div className={styles.section}>
        <FaMapMarkerAlt className={styles.icon} />
          <h3>NUESTRA DIRECCIÓN</h3>
          <p>SegurTIC, SL</p>
          <p>C. de Alcalá, 586, P5.D1</p>
          <p>28022, Madrid</p>
        </div>
        <div className={styles.section}>
        <FaPhone className={styles.icon} />
          <h3>LLÁMANOS</h3>
          <p>+34 913 780 744</p>
        </div>
        <div className={styles.section}>
        <FaEnvelope className={styles.icon} />
          <h3>DÉJANOS UN MENSAJE</h3>
          <p>hello@segurtic.net</p>
        </div>
      </div>
      <form className={styles.form}>
        <h3>Necesita mejorar su protección de Ciber Seguridad?</h3>
        <p>No dude en contactar con nosotros y nos encargaremos de ofrecerle el servicio y atención que sus datos se merecen.</p>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Nombre *" />
          <input type="email" placeholder="E-mail *" />
          <input type="tel" placeholder="Teléfono" />
        </div>
        <textarea placeholder="Mensaje *" rows="4"></textarea>
        <label className={styles.checkbox}>
          <input type="checkbox" />
          Al utilizar este formulario, acepta que este sitio web almacene y maneje sus datos.
        </label>
        <div className='button'>
        <button type="submit">Enviar mensaje</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
