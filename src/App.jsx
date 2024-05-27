import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import './App.scss';
import About from './Components/About Section/About';
import Bg from './Components/Blured Bg/Bg';
import Contact from './Components/ContactSection/Contact';
import Cursor from './Components/Cursor/Cursor';
import Education from './Components/EducationSection/Education';
import HeroSection from './Components/Hero Section/HeroSection';
import Loader from './Components/Loader/Loader';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects Section/Projects';
import Sidebar from './Components/SideBar/SideBar';
import Skills from './Components/Skills Section/Skills';
import Socials from './Components/Socialcons/Socials';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading process with a setTimeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the duration as needed
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <LayoutGroup>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div onAnimationComplete={() => setIsLoading(false)}
            key={'loader'} className='relative' >
            <Loader setLoading={setIsLoading} />
          </motion.div>
        )
          :
          (
          <motion.div key="content" className='container max-w-full relative bg-black text-gray-100 dm-sans'>
              <NavBar />
              <Sidebar />
              <Cursor />
              <Socials />
              <HeroSection />
              <Bg />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Contact />
            </motion.div>
          )
        }
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;
