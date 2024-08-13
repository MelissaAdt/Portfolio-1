import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme';
import { projets, compétences, contact, apropos } from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : 'none' }}
        className='nav__list'
      >
        {apropos.description && (
          <li className='nav__list-item'>
            <a
              href='#apropos'
              onClick={toggleNavList}
              className='link link--nav'
            >
              à propos
            </a>
          </li>
        )}

        {projets.length > 0 && (
          <li className='nav__list-item'>
            <a
              href='#projets'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projets
            </a>
          </li>
        )}

        {compétences.length > 0 && (
          <li className='nav__list-item'>
            <a
              href='#compétences'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Compétences
            </a>
          </li>
        )}

        {contact.email && (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? '🌞' : '🌜'}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
