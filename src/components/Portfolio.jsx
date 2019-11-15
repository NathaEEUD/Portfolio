import React from 'react';
import '../assets/styles/components/Portfolio.scss';
import PortfolioItem from './PortfolioItem';
import invieImg from '../assets/static/invie-mockup.png';
import platziConfHawaiImg from '../assets/static/platzi-conf-hawai-mockup.png';
import moviesLandingImg from '../assets/static/movies-landing-mockup.png';
import platziVideoLandingImg from '../assets/static/platzi-video-landing-mockup.png';
import caloriesCounterImg from '../assets/static/calories-counter-mockup.png';
import platziVideoImg from '../assets/static/platzi-video-mockup.png';
import ticTacToeImg from '../assets/static/tictactoe-mockup.png';
import estacionTopconImg from '../assets/static/estacion-topcon-mockup.png';
import votoElectronicoImg from '../assets/static/voto-electronico-mockup.png';
import transcriptorImg from '../assets/static/transcriptor-mockup.png';
import visitantesImg from '../assets/static/visitantes-mockup.png';
import akountgoImg from '../assets/static/akountgo-mockup.png';

const projects = [
  {
    title: 'Invie',
    company: 'Platzi',
    description:
      'Invie es el proyecto resultado de los cursos de Desarrollo Web Online y Responsive Design de Platzi del 2016',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://nathaeeud.github.io/invie-responsive/',
    image: invieImg,
  },
  {
    title: 'Platzi Conf Hawai',
    company: 'Platzi',
    description: 'Platzi Conf Hawai es el proyecto del curso de Bootstrap de Platzi',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://nathaeeud.github.io/Bootstrap-Platzi/',
    image: platziConfHawaiImg,
  },
  {
    title: 'Movies Landing',
    company: 'Platzi',
    description: 'Movies Landing es el primer reto del curso de CSS Grid Layout de Platzi',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://nathaeeud.github.io/Movies-Landing/',
    image: moviesLandingImg,
  },
  {
    title: 'Platzi Video Landing',
    company: 'Platzi',
    description: 'Platzi Video Landing es el segundo reto del curso de CSS Grid Layout de Platzi',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://nathaeeud.github.io/Platzi-Video-Landing/',
    image: platziVideoLandingImg,
  },
  {
    title: 'Calories Counter',
    company: 'Platzi',
    description:
      'Calories Counter es el proyecto del curso de Programación Funcional con JavaScript',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://nathaeeud.github.io/JavaScript-Functional-Programming-Platzi/',
    image: caloriesCounterImg,
  },
  {
    title: 'Platzi Video',
    company: 'Platzi',
    description: 'Platzi Video es el proyecto del curso de JQuery a JavaScript',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://nathaeeud.github.io/JQuery-to-JavaScript-Platzi/',
    image: platziVideoImg,
  },
  {
    title: 'Tic Tac Toe',
    company: 'Proyecto',
    description:
      'Tic Tac Toe es un juego multijugador implementado con NodeJs, ExpressJs y Socket.io con conexión a MongoDb, el cual, gracias a la tecnología de Websocket, permite armar salas para máximo dos jugadores, mostrar el histórico de juegos iniciados, empatados y ganados y la lista de juegos pausados con posibilidad de reanudarlos',
    technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJs', 'ExpressJs', 'Socket.io', 'MongoDb'],
    link: 'https://github.com/NathaEEUD/Project-TicTacToe',
    image: ticTacToeImg,
  },
  {
    title: 'Estación Geodésica GNSS de la Universidad Distrital',
    company: 'Red de Investigación de Tecnología Avanzada - RITA',
    description:
      'Rediseño y desarrollo de la página web de la Estación Geodésica GNSS de la Universidad Distrital implementando Responsive Design',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://rita.udistrital.edu.co/gps/',
    image: estacionTopconImg,
  },
  {
    title: 'Voto Electrónico',
    company: 'Red de Investigación de Tecnología Avanzada - RITA',
    description:
      'Apoyo en la maquetación de la plataforma web: Voto electrónico para el proceso de inscripciones y elecciones de los sistemas SDACP y DRAFE de la Secretaria Distrital de Cultura, Recreación y Deporte de Bogotá, garantizando su correcta visualización en cualquier tamaño de pantalla por medio de Responsive Design y asegurando la accesibilidad web bajo el estándar W3C',
    technologies: ['ReactJs', 'Redux', 'CSS'],
    link: '',
    image: votoElectronicoImg,
  },
  {
    title: 'Transcriptor',
    company: 'Robotec',
    description:
      'Diseño y desarrollo de una plataforma web para la transcripción de audio o video junto con un editor de texto bajo el stack MEAN',
    technologies: [
      'Angular 8',
      'Bulma',
      'Sass',
      'CSS Grid Layout',
      'NodeJs',
      'ExpressJs',
      'Socket.io',
      'MongoDb',
    ],
    link: '',
    width: '200',
    image: transcriptorImg,
  },
  {
    title: 'Control de Visitantes',
    company: 'Robotec',
    description:
      'Diseño y desarrollo de una plataforma web para el control de visitantes bajo el stack MEAN',
    technologies: [
      'Angular 8',
      'Bulma',
      'Sass',
      'CSS Grid Layout',
      'NodeJs',
      'ExpressJs',
      'Socket.io',
      'MongoDb',
    ],
    link: '',
    width: '200',
    image: visitantesImg,
  },
  {
    title: 'Akount Go',
    company: 'Akount Go',
    description: 'Apoyo en el Desarrollo FrontEnd de la plataforma web de Akount Go',
    technologies: ['ReactJs', 'Redux', 'Sass'],
    link: 'https://app.akountgo.com/',
    width: '200',
    image: akountgoImg,
  },
];

const Portfolio = () => (
  <section id='portfolio'>
    <div className='portfolio__container'>
      <h2>Portafolio (Proyectos Realizados)</h2>
      {projects.map(project => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <PortfolioItem {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;
