import styled from 'styled-components'


export const CardWrapper = styled.section`
border: 0;
padding: 0;
box-sizing: border-box;
display: flex;
flex-direction: column;
width: 375px;
height: 100vh;
align-items: space-around;
`
 export const CardArea = styled.div`
  border: 3px solid #111;
  border-radius: 10px;
  background-color: transparent;
  display: column;
  width: 100%;
  height: 300px;
  margin: 5px;
  
  img{
    width: 100%;
    margin-top: 20px;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
      min-width: 90%;
      margin-top: 20px;
      padding: 5px;
      font-size: 18px;
      border-radius: 8px;
      background-color: transparent;
    }
    button{
      margin-top: 20px;
      color: chartreuse;
    }
  }
`