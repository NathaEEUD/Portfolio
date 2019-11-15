import React from 'react';
import '../assets/styles/components/About.scss';

const About = () => (
  <section id='about'>
    <div className='about__container'>
      <h2>Sobre Mí</h2>
      <p>
        Hola! Soy Nathaly Riaño Bejarano, Ingeniera Electrónica de la Universidad Distrital y
        Estudiante de Platzi, apasionada por el aprendizaje constante, principalmente en Desarrollo
        Web, Inteligencia Artificial y tecnologías como IOT, Realidad Aumentada y Realidad Virtual.
      </p>
      <p>
        En{' '}
        <a href='https://platzi.com/@NathaRB/' target='blank'>
          Mi Perfil de Platzi
        </a>{' '}
        podrás encontrar los certificados de los cursos que he aprobado.
      </p>
      <p>
        Actualmente, me desempeño como Desarrolladora Web usando el stack MEAN, he participado en el
        Desarrollo FrontEnd de varios proyectos y, a lo largo de mi carrera, he utilizado las
        siguientes tecnologías:
      </p>
      <ul>
        <li className='about__container--item'>Git</li>
        <li className='about__container--item'>HTML</li>
        <li className='about__container--item'>CSS</li>
        <li className='about__container--item'>JavaScript</li>
        <li className='about__container--item'>JQuery</li>
        <li className='about__container--item'>Angular</li>
        <li className='about__container--item'>ReactJs</li>
        <li className='about__container--item'>Redux</li>
        <li className='about__container--item'>Bootstrap</li>
        <li className='about__container--item'>Bulma</li>
        <li className='about__container--item'>Material UI</li>
        <li className='about__container--item'>NodeJs</li>
        <li className='about__container--item'>ExpressJs</li>
        <li className='about__container--item'>Socket.io</li>
        <li className='about__container--item'>MongoDB</li>
        <li className='about__container--item'>Python</li>
        <li className='about__container--item'>Django</li>
        <li className='about__container--item'>Ionic</li>
        <li className='about__container--item'>Joomla</li>
        <li className='about__container--item'>Linux</li>
      </ul>
    </div>
  </section>
);

export default About;
