import React from 'react';
import '../assets/styles/components/Home.scss';
import profilePicture from '../assets/static/profile-picture.jpg';
import Networks from './Networks';

const Home = () => {
  return (
    <section id='home'>
      <div className='home__container'>
        <img className='home__container--profile' src={profilePicture} alt='Profile' />
        <h1>Nathaly Riaño Bejarano</h1>
        <h3>Ingeniera Electrónica</h3>
        <h3>Desarrolladora Web</h3>
        <hr />
        <div className='home__container--networks'>
          <Networks />
        </div>
      </div>
    </section>
  );
};

export default Home;
