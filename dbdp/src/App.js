import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' 
import Purpose from './components/Purpose';
// import Modules from './components/Modules';
import DhdrCard from './components/DhdrCard';
import DocumentationSection from './components/DocumentationSection';
import ResourceGuide from './components/ResourceGuide';

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
    </div>
  );
}

export default App;
