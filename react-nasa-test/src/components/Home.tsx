import React from 'react';
import { Buttons } from './Buttons';
import NasaImage from './NasaImage';


const Home = () => {
  return (
    <div className="App">
      <NasaImage/>
      <Buttons />
    </div>
  );
}

export default Home;
