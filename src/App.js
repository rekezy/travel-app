import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Activities from './components/Activities';




function App() {

return (

  <div>
    <TopBar className='' />
      <Navbar/>
      <Hero/>
      <Activities/>
      <Gallery/>
      <Booking/>
      <Contact/>
      
  </div>
 
  
)

}

export default App;
