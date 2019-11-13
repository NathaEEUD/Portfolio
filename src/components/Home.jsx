import React from 'react';
import '../assets/styles/components/Home.scss';
import profilePicture from '../assets/static/profile-picture.jpg';
import githubIcon from '../assets/static/github-11-32.png';
import linkedinIcon from '../assets/static/linkedin-5-32.png';
import twitterIcon from '../assets/static/twitter-5-32.png';

const Home = () => (
  <section className='home'>
    <div className='home__container'>
      <img className='home__container--profile' src={profilePicture} alt='Profile' />
      <h1>Nathaly Riaño Bejarano</h1>
      <h3>Ingeniera Electrónica</h3>
      <h3>Desarrolladora Web</h3>
      <hr />
      <div className='home__container--networks'>
        <ul>
          <li>
            <a href='https://github.com/NathaEEUD' target='blank'>
              <img src={githubIcon} alt='Github' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/nasterb/' target='blank'>
              <img src={linkedinIcon} alt='Github' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/nasterboost' target='blank'>
              <img src={twitterIcon} alt='Github' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Home;
