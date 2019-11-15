import React from 'react';
import '../assets/styles/components/Networks.scss';
import githubIcon from '../assets/static/github-11-32.png';
import linkedinIcon from '../assets/static/linkedin-5-32.png';
import twitterIcon from '../assets/static/twitter-5-32.png';

const Networks = () => (
  <section id='networks'>
    <div className='networks__container'>
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
  </section>
);

export default Networks;
