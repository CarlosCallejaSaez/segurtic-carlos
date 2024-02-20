import React from 'react';
import styles from './Team.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; 

const teamMembers = [
  {
    name: 'Gonzalo F. CTO',
    role: 'Co-Founder y experto en Ciber Seguridad',
    email: 'gonzalo@segurtic.net',
    description: 'Además de fundador, hace las veces de nuestro Chief Technical Officer. Director de Tecnología...',
    socials: {
      twitter: 'https://twitter.com/gonzalo',
      facebook: 'https://facebook.com/gonzalo',
      linkedin: 'https://linkedin.com/in/gonzalo'
    },
    image: '/hombre.jpg' 
  },
  {
    name: 'Tiffany B.',
    role: 'Nuestra administrativa, consultora, comercial y especialista en atención al cliente.',
    email: 'hello@segurtic.net',
    description: 'Porque la mejor forma de cuidar a un cliente es poder dedicarse a él al 100%, Tiffany podrá atender las necesidades del cliente...',
    socials: {
      twitter: 'https://twitter.com/tiffany',
      facebook: 'https://facebook.com/tiffany',
      linkedin: 'https://linkedin.com/in/tiffany'
    },
    image: '/mujer.jpg' 
  },
 
];

const Team = () => {
  return (
    <div className={styles.team} id='equipo'>
      <h2 className={styles.title}>NUESTRO EQUIPO</h2>
      <p className={styles.subtitle}>Especialistas altamente cualificados</p>
      <div className={styles.members}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.member}>
            <img src={member.image} alt={member.name} className={styles.photo} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.email}><FaEnvelope /> E: {member.email}</p>
            <p className={styles.description}>{member.description}</p>
            <div className={styles.socials}>
              <a href={member.socials.twitter}><FaTwitter /></a>
              <a href={member.socials.facebook}><FaFacebookF /></a>
              <a href={member.socials.linkedin}><FaLinkedinIn /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
