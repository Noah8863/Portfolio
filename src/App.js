import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Contact from './components/Contact/index';
import Footer from './components/Footer/Footer';
import Hero from './components/HeroSection/Hero';
import Skills from './components/SkillSection/skill';
import Projects from './components/ProjectSection/project';
import './main.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/"
          element={<>
            <Hero />
            <Skills />
            <Projects />
          </>
          }></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
