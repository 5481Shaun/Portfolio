import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  
  return (
    <>
    <Header/>
    <main className='main'>
      <Home />
      <About />
      <Skills /> 
      <Services />
      <Qualifications />
      <Testimonial />
      <ScrollUp />
    </main>
    <Footer />
    
    </>
  )
}

export default App
