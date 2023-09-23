import React from 'react';
import ResponsiveAppBar from './components/Nav';
import { Routes, Route } from 'react-router';
import Favorites from './components/Favorites';
import Home from './components/Home';
import './App.css'


const App = () => {
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="Home" element={<Home/>}/>
        <Route path="Favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
