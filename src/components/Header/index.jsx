import React from 'react'
import styled from 'styled-components'


 const HeaderArea = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
`;
 const Title = styled.h1`
 font-family: sans-serif;
 color: blueviolet;
 font-size: 50px;
 font-style: italic;
 text-shadow: 1px 2px 2px chartreuse;
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