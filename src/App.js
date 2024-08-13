import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header'; 
import About from './components/About/About'; 
import Apropos from './components/Apropos/Apropos';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Apropos />
        <Projects />
        <Skills />
        <Contact />
        </main>

        <Footer />

    </div>
  );
};

export default App;
