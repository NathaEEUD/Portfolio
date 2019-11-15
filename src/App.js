import React from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

const App = () => (
  <>
    <Header />
    <Home />
    <About />
    <Portfolio />
  </>
);

export default App;
