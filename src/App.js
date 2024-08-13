import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header'; 
import About from './components/About/About'; 
import Apropos from './components/Apropos/Apropos';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Apropos />
        </main>


    </div>
  );
};

export default App;
