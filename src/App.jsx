import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Art } from './components/Art/Art';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

import Fade from "react-reveal/Fade";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Fade bottom distance="10%" duration={1500}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Art />
      <Contact />
      <Footer />
    </Fade>
  </div>;
}

export default App
