import React from 'react';

import { CardWrapper } from '../components/Card/style';
import detetive from '../assets/not-found.png'




const NotFound = () => {
  return (  
    <CardWrapper>
      <img src={detetive} alt="fundo de detetive" 
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
        }} 
      />
      <h1 
        style={{
          display: 'flex ',
          fontSize: "40px",
          color: "white",
          marginLeft: '-40px',
          position: 'absolute',
          fontStyle: 'italic',
          textShadow: '2px 2px 2px black',
          fontWeight: 300
        }}
      >
        Erro 404:
      </h1> 
      <br />
      <h2
       style={{
          fontSize: "30px",
          color: "white",
          position: 'absolute',
          marginLeft: '-40px',
          fontStyle: 'italic',
          marginTop: '100px',
          fontWeight: 300
        }}
      >Página <br /> Não <br /> Encontrada</h2>
    </CardWrapper>
  );
}
 
export default NotFound;