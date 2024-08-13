import React, { useState, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { apropos } from '../../portfolio';
import './Apropos.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { ReactTyped as Typed } from 'react-typed';
import { ThemeContext } from '../../contexts/theme';
import womanDarkSvg from '../../assets/woman_darkmode.svg';
import womanLightSvg from '../../assets/woman_light.svg';

const Apropos = () => {
  const { description, social, resume } = apropos;
  const [isTyping, setIsTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setIsTyping(true);
      }
    }
  });

  const [themeContext] = useContext(ThemeContext);
  const { themeName } = themeContext;
  const imageSrc = themeName === 'dark' ? womanDarkSvg : womanLightSvg;

  return (
    <section id='apropos' className='section apropos' ref={ref}>
      <h2 className='section__title'>À propos</h2>
      <div className='apropos__content'>
        <div className='apropos__image-container'>
          <img src={imageSrc} alt="Woman illustrations by Storyset" className='apropos__image'/>
        </div>
        <div className='apropos__text'>
          <div className='apropos__description'>
            {isTyping && (
              <Typed
                strings={[description]}
                typeSpeed={38}
              />
            )}
          </div>
          <div className='apropos_resume'>
            {resume && (
              <a href={resume} target='_blank' rel='noopener noreferrer'>
                <span type='button' className='btn btn--outline'>
                  Télécharger mon CV
                </span>
              </a>
            )}
          </div>
          <div className='apropos__social'>
            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='GitHub'
                    className='link link--icon'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GitHubIcon />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='LinkedIn'
                    className='link link--icon'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
