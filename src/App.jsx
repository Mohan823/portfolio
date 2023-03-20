import './App.scss'

// Default theme
import '@splidejs/react-splide/css';
import Carousel from './components/Carousel'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Expertise from './components/Expertise';
import Skillset from './components/Skillset';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    // Add a click event listener to each anchor link
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default behavior of anchor link

        // Get the target section element based on the ID reference
        const target = document.querySelector(link.getAttribute('href'));

        // Scroll smoothly to the target section element
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  })


  return (
    <div className="App flex justify-center background">
      <div className="container max-w-[90rem]">
        <header className='bg-gradient-reverse shadow-lg' >
          <Nav />
          <Intro className=" min-h-screen" />
        </header>

        <main>
          <Carousel />
          <Projects />
          <Expertise />
          <Skillset />
          <Contact />
        </main>
      </div >
    </div>
  );
}

export default App;
