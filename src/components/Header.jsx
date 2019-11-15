import React, { useState } from 'react';
import '../assets/styles/components/Header.scss';
import menuIcon from '../assets/static/menu.png';

const Header = () => {
  const [navOpened, setNavOpened] = useState(false);
  const navClassName = navOpened ? 'header__menu is-active' : 'header__menu';

  return (
    <header className='header'>
      <div id='burguer__menu' onClick={() => setNavOpened(!navOpened)}>
        <img src={menuIcon} alt='Menu' />
      </div>
      <nav className={navClassName}>
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
};

export default Header;
