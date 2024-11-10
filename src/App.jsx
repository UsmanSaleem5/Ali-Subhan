import React from 'react';
import NavBar from './Components/NavBar.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Technologies from './Components/Technologies.jsx';
import Experience from './Components/Experience.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import AdminPanel from './Components/AdminPanelBlog.jsx'; // Import AdminPanel component
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-300'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">  
        </div>
      </div>

      <NavBar /> {/* Keep NavBar outside of Routes for consistent navigation */}

      <Routes>
        {/* Main route for home page */}
        <Route 
          path="/" 
          element={
            <div className="container mx-auto px-8">
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <Projects />
              <Contact />
            </div>
          } 
        />

        {/* Route for Admin Panel blog */}
        <Route 
          path="/Admin-Panel-Blog" 
          element={<AdminPanel />} 
        />
      </Routes>
    </div>
  );
}

export default App;
