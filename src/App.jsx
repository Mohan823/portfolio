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

function App() {

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
