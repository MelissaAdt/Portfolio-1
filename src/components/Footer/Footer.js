import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__links'>
      <a
        href="https://github.com/MelissaAdt"
        aria-label='GitHub'
        className='link footer__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/melissa-andremont-203647294/"
        aria-label='LinkedIn'
        className='link footer__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedInIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
