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

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Purpose />
        <Modules /> 
        <DhdrCard />
        <DocumentationSection />
        <ResourceGuide />
        <ReadyToDiscover />
        <OurTeam />
        <Contributors />
        <Footer />
    </div>
  );
}

export default App;
