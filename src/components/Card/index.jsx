import React, { useState } from 'react'

import * as C from '../../styles'
import { CardArea, CardWrapper } from './style';
import triangulo from '../../assets/image1.png'
import { Button } from '../Button';


const Card = () => {
  const [catAdjacente, setCatAdjacente] = useState('')
  const [catOposto, setCatOposto] = useState('')
  const [hypotenusa, setHypotenusa] = useState('')

  const handleHypotenusa = () => {

   if(catAdjacente && catOposto !== 0) {
     setHypotenusa(Math.hypot(catAdjacente, catOposto).toFixed(3))
   } else if (hypotenusa && catOposto !== 0) {
     setCatAdjacente(Math.sqrt(Math.pow(hypotenusa, 2) - Math.pow(catOposto, 2)))
   } else if (hypotenusa && catAdjacente !== 0) {
     setCatOposto(Math.sqrt(Math.pow(catAdjacente, 2) - Math.pow(hypotenusa, 2)))
   }
  }


  return (
    <C.Container>
      <h1>Teorema De Pitágoras</h1>
      <CardWrapper>
        <CardArea>
          <img src={triangulo} alt="imagem de triangulo"/>
        </CardArea>
        <CardArea>
          <form onSubmit={function handleHypotenusa(e) {
            e.preventDefault()
          }}>
            <input type="text" name="Cateto 1" id="catAdjacente" placeholder ="Cateto 1"
              value={catAdjacente} onChange={(e) => setCatAdjacente(e.target.value)} /> 
            <input type="text" name="Cateto 2" id="catOposto" placeholder ="Cateto 2"  
              value={catOposto} onChange={(e) => setCatOposto(e.target.value)} />
            <input type="text" name="Hypotenusa" id="Hypotenusa" placeholder ="Hypotenusa" 
            value={hypotenusa} onChange={(e) => setHypotenusa(e.target.value)}/> 
            <Button onClick={handleHypotenusa}>Calcular</Button>
          </form>
        </CardArea>
      </CardWrapper>
    </C.Container>
  );
}
 
export default Card;