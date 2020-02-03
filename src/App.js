import React from 'react';
import './App.css';
import Home from './conteiners/Home';
import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Home/>
    </div>
  );
}

export default App;
