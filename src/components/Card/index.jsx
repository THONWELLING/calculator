import React, { useState } from 'react'

import { CardArea, CardWrapper } from './style';
import triangulo from '../../assets/image1.png'


const Card = () => {
  const [catAdjacente, setCatAdjacente] = useState('')
  const [catOposto, setCatOposto] = useState('')
  const [hypotenusa, setHypotenusa] = useState('')
  return (
    <>
      <h1>Teorema De Pitágoras</h1>
      <CardWrapper>
        <CardArea>
          <img src={triangulo} alt="imagem de triangulo"/>
        </CardArea>
        <CardArea>
          <form>
            <input type="text" name="catetoAdjacente" id="catetoAdjacente" placeholder ="catetoAdjacent"
              value={catAdjacente} onChange={(e) => setCatAdjacente(e.target.value)} /> 
            <input type="text" name="catetoOposto" id="catetoOposto" placeholder ="catetoOposto"  
              value={catOposto} onChange={(e) => setCatOposto(e.target.value)} />
            <input type="text" name="Hypotenusa" id="Hypotenusa" placeholder ="Hypotenusa" 
            value={hypotenusa} onChange={(e) => setHypotenusa(e.target.value)}/> 
            <button className="btn">Calcular</button>
          </form>
        </CardArea>
      </CardWrapper>
    </>
  );
}
 
export default Card;