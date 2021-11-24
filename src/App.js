import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


import * as C from './styles'
import { Button } from './components/Button';
import Header from './components/Header/index'
import  Home from './Pages/Home'
import  Trigonometric from './Pages/Trigonometric'
import NotFound  from './Pages/NotFound';




function App() {
  return (
    <>
      <C.Container>
        <Header />
        <nav>
          <Button className="btn"><Link to="/Home">Home</Link></Button>
          <Button className="btn"><Link to="/Trigonometric">Trigonometric</Link></Button>
        </nav> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route  path="Trigonometric"  element={<Trigonometric /> } />
          <Route  path="*"  element={<NotFound /> } />
        </Routes>
      </C.Container>
    </>
  );
  
}


export default App;
