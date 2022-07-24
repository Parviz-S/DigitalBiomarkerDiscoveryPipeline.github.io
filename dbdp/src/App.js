import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' 
import Purpose from './components/Purpose';
// import Modules from './components/Modules';
import DhdrCard from './components/DhdrCard';
import DocumentationSection from './components/DocumentationSection';
import ResourceGuide from './components/ResourceGuide';
import ReadyToDiscover from './components/ReadyToDiscover';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Purpose />
        {/* In progress 
          <Modules /> 
        */}
        <DhdrCard />
        <DocumentationSection />
        <ResourceGuide />
        <ReadyToDiscover />
    </div>
  );
}

export default App;
