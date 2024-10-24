import Lenis from '@studio-freight/lenis';
import { useGSAP } from '@gsap/react';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Event from './views/Event';
const App = () => {

  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animationFrameId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (

    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/events' element={<Event />} />
      </Routes>
    </Router>
  );
};

export default App;
