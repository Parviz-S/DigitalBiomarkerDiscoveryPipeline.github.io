import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' 
import Purpose from './components/Purpose';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Purpose />
    </div>
  );
}

export default App;
