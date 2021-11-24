import React from 'react'
import styled from 'styled-components'


 const HeaderArea = styled.div`
  margin: 0;
  border: 0;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  @media(max-width: 500px) {
    flex-direction: column;
    min-width: 320px;
  }
`;
 const Title = styled.h1`
 font-family: sans-serif;
 color: blueviolet;
 font-size: 80px;
 font-style: italic;
 text-shadow: 1px 2px 2px chartreuse;

  @media(max-width: 500px) {
    font-size: 50px;
  }
 `;
const Header = () => {
 return(
   <>
    <HeaderArea>
      <Title>Calculator</Title>
    </HeaderArea>
   </> 
 )
}
export default Header