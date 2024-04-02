import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './style.css';
import Navbar from './navbar';
import Home from './home';
import Footer from './footer';
import About from './about';
import Project from './project';
import Contact from './contact';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
