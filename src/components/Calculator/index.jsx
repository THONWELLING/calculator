import React, { useState } from 'react';
import './Calculator.css';
import Container  from '@mui/material/Container';
import { Box } from '@mui/system';

const Calculator = () => {
  const [data, setData] = useState("");
  const btnsNumber = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", '%'].forEach(item =>{
    btnsNumber.push(
      <button onClick={e =>{
        setData(data + e.target.value)
        }}
        value={item} 
        key={item}
      >
        {item}
      </button>
    )
  })



  return (
    <div id="calc">
        <Container  maxWidth='xs'>
          <div className='wrapper'>
            <div className="result"><h2>{data}</h2></div>
            <hr />
            <div className="digits">{btnsNumber}</div>
            <div className="modifiers">
              <button onClick={() => setData(data.substr(0, data.length - 1))}>
                C
              </button>
              <button className="allClear" onClick={() => setData("")}>
                AC
              </button>
            </div>
            <div className="operations">
              <button onClick={e => setData(data + e.target.value)} value="+">+</button>
              <button onClick={e => setData(data + e.target.value)} value="-">-</button>
              <button onClick={e => setData(data + e.target.value)} value="*">X</button>
              <button onClick={e => setData(data + e.target.value)} value="/">/</button>
              <button className="equal" onClick={e =>{
                  try {
                    setData(
                      String(eval(data)).length > 3 &&
                      String(eval(data)).includes(".")
                      ? String(eval(data).toFixed(6))
                      : String(eval(data))
                    )  
                  }
                    catch(err) {
                      console.log(err)
                    }
                }}
                value="="
              >
                =
              </button>
            </div>
          </div>
        </Container>
    </div>
  );
}
 
export default Calculator;