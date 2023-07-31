import React from 'react';
import './app.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Popular from './Components/Popular/Popular';
import SubInfo from './Components/SubInfo/SubInfo';
import Offers from './Components/Offers/Offers';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      {/* <Popular />
      <Offers />
      <About />
      <Blog />
      <SubInfo /> */}
    </>
  );
};

export default App;