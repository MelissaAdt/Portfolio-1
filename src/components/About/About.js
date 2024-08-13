import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme'; 
import { about } from '../../portfolio';
import './About.css';
import codeTypingSvg from '../../assets/code-typing.svg';
import codeTypingDarkSvg from '../../assets/code-typing-dark.svg';

const About = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const { name } = about;


  const imageSrc = themeName === 'dark' ? codeTypingDarkSvg : codeTypingSvg;

  return (
    <div className='about center'>
      {name && (
        <div className="intro">
          <div className="intro__text">
            <h1>
              Bonjour !
              <p>je suis <span className='about__name'>{name}</span>,</p>
              <p>développeuse front-end.</p>
            </h1>
          </div>
          <div className="intro__image-container">
            <img src={imageSrc} alt="Code Typing illustrations by Storyset" className="intro__image" />
          </div>
        </div>
      )}

     
    </div>
  );
};

export default About;
