import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' 
import Purpose from './components/Purpose';
import Modules from './components/Modules';
import DhdrCard from './components/DhdrCard';
import DocumentationSection from './components/DocumentationSection';
import ResourceGuide from './components/ResourceGuide';
import ReadyToDiscover from './components/ReadyToDiscover';
import OurTeam from './components/OurTeam';
import Contributors from './components/Contributors';
import Footer from './components/Footer';
import Research from './components/Research';
import Contribute from './components/Contribute';
import Organizations from './components/Organizations';

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className='content'>
        <Routes>
          <Route path="/" element={
          <div className='Home'>
            <Hero />
            <Organizations />
            <About />
            <DhdrCard />
            <DocumentationSection />
            <ResourceGuide />
            <ReadyToDiscover />
          </div> 
        }/>

        <Route path="/about" element={
          <div className='About'>
            <Purpose />
            <OurTeam />             
            <Contributors />
          </div>
        } />

        <Route path="/research" element={
          <div className='News'>
            <Research /> 
          </div>
        } />

        <Route path="/modules" element={
          <div className='Modules'>
            <Modules /> 
          </div>
        } />

        <Route path="/contribute" element={
          <div className='Modules'>
            <Contribute /> 
          </div>
        } />

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
