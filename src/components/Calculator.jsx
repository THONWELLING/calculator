import React, { useState } from 'react';
import './Calculator.css';
import Container  from '@mui/material/Container';
import { Box } from '@mui/system';

const Calculator = () => {
  const [num, setNum] = useState(0);
  function inputNumber(e){
    var input = e.target.value;
    if(num === 0){
      setNum(input)
    }else{
      setNum(num+input);
    }
  }
  function clear(){
    setNum(0)
  }
  function percentage(){
    setNum(num / 100);
  }
  function changeSign(){
    if(num > 0){
      setNum(-num)
    }else {
      setNum(Math.abs(num))
    }
  }
  function calc(){
    console.log("Calculou")
  }
  return (
    <div>
      <Box m={5} />
        <Container maxWidth='xs'>
          <div className='wrapper'>
            <Box m={12}/>
            <h1 className="result">{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={percentage}>%</button>
            <button className="orange">/</button>
            <button className="gray" onClick={inputNumber} value ={7}>7</button>
            <button className="gray" onClick={inputNumber} value ={8}>8</button>
            <button className="gray" onClick={inputNumber} value ={9}>9</button>
            <button className="orange">*</button>
            <button className="gray" onClick={inputNumber} value ={4}>4</button>
            <button className="gray" onClick={inputNumber} value ={5}>5</button>
            <button className="gray" onClick={inputNumber} value ={6}>6</button>
            <button className="orange">-</button>
            <button className="gray" onClick={inputNumber} value ={1}>1</button>
            <button className="gray" onClick={inputNumber} value ={2}>2</button>
            <button className="gray" onClick={inputNumber} value ={3}>3</button>
            <button className="orange">+</button>
            <button className="zero" onClick={inputNumber} value ={0}>0</button>
            <button  onClick={inputNumber} value ={","}>,</button>
            <button className="orange" onClick={calc}>=</button>
          </div>
        </Container>
    </div>
  );
}
 
export default Calculator;