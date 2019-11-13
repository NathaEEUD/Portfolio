import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <nav className='header__menu'>
      <ul>
        <li>
          <a href='#home'>Inicio</a>
        </li>
        <li>
          <a href='#about'>Sobre Mí</a>
        </li>
        <li>
          <a href='#portfolio'>Proyectos</a>
        </li>
        <li>
          <a href='#contact'>Contacto</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
