import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


import './App.css';
import * as C from './styles'
import Header from './components/Header/index'
import  Home from './Pages/Home'
import  Trigonometric from './Pages/Trigonometric'




function App() {
  return (
    <>
      <C.Container>
        <Header />
        <nav>
          <button className="btn"><Link to="/Home">Home</Link></button>
          <button className="btn"><Link to="/Trigonometric">Trigonometric</Link> </button>
        </nav>
        <Routes>
          <>
            <Route  path="/Home" exact element={<Home />} />          
            <Route path="/Trigonometric" exact element={<Trigonometric />} />
          </>
        </Routes>
      </C.Container>
    </>
  );
  
}


export default App;
