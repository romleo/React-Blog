import React from 'react';
import './App.css';
import Home from './conteiners/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactUS from './conteiners/ContactUS';
import Post from './conteiners/Post';


function App() {
  return (

    <Router>
      <div className="App">
      <Header/>
      <Hero/>

      <Route path="/"exact component={Home}/>
      <Route path="/contact-us" component={ContactUS}/>
      <Route path="/Post/:postId" component={Post}/>

      
    </div> 
  </Router>

  );
}

export default App;
