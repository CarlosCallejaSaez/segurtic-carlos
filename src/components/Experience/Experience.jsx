import React from 'react';
import styles from './Experience.module.css';
import { FaRegThumbsUp, FaRegBuilding, FaBrain, FaLaptopCode } from 'react-icons/fa'; 

const experienceItems = [
    {
      icon: <FaRegThumbsUp />,
      title: 'Defensa de Websites',
      description: 'Gran experiencia en salvar páginas web de ataques de DDOS, con un plan de contingencia y de continuidad del sitio.',
    },
    {
      icon: <FaRegBuilding />,
      title: 'Auditorías Completas',
      description: 'Hemos realizado un sin fin de auditorías de seguridad a diferentes niveles, con las cuales podemos ofrecer al cliente un reporte simplificado de lo que ocurre en su empresa, lo que hay que mejorar y lo que no hace falta tocar.',
    },
    {
      icon: <FaBrain />,
      title: 'Protegemos tu negocio',
      description: 'Ya sea una tienda online, un ERP, un CMS o cualquier otro software en la nube, te protegemos contra cualquier vulnerabilidad.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Formación',
      description: 'Un pilar básico bien informado es la llave del éxito. Ofrecemos cursos de formación a los empleados, esenciales para reciclar las normas de seguridad cada cierto tiempo y para conocer las nuevas amenazas y formas de usarlas a nuestro provecho.',
    },
    
  ];

const Experience = () => {
  return (
    <div className={styles.experience} id='experiencia'>
      <div className={styles.header}>
        <h2 className={styles.title}>EXPERIENCIA</h2>
        <p className={styles.subtitle}>Algunas de las cosas que podemos hacer</p>
      </div>
      <div className={styles.content}>
        <div className={styles.textSide}>
          {experienceItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.imageSide}>
          <img src="/side1.jpg" alt="side1" />
          
        </div>
      </div>
    </div>
  );
};

export default Experience;
