import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/Skills/Skills';
import Service from './components/services/Service';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Service/>
    </main>
    </>

  )
}

export default App
