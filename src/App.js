import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import MusicHub from './components/MusicHub';
import VideoHub from './components/VideoHub';
import Videos from './components/Videos';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Music from './components/Music';
import AboutUs from './components/AboutUs';

const App = () => {
  const[open, setOpen] = useState(false);
  return(
    <Router>
      <div className="app">
          <Navbar setOpen={ setOpen } open={ open } />
           <Switch> 
               
            <Route path='/videos'>
               <Videos />
            </Route>
            <Route path='/music'>
                <Music />
            </Route>
            <Route path='/aboutus'>
              <AboutUs />
            </Route>   
            <Route path="/">
                <Header />
                <MusicHub />
                <VideoHub />
                <About />
                <Footer />
            </Route>
           
           </Switch>
            
            <Sidebar open={ open } setOpen={ setOpen }/>
      </div>
    </Router>
  )
}

export default App