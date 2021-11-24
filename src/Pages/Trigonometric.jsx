import React from 'react';
import { useParams } from 'react-router';
import Card from '../components/Card'
import * as C from '../styles'

const Trigonometric = () => {
  const params = useParams();
  console.log(params)
  return (  
    <>
      <C.Container>
        <Card />
      </C.Container>
      </>
  );
}
 
export default Trigonometric  ;