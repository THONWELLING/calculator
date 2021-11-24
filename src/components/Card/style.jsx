import styled from 'styled-components'


export const CardWrapper = styled.section`
border: 0;
padding: 0;
box-sizing: border-box;
display: flex;
flex-direction: column;
width: 100%;
height: 700px;
align-items: space-around;

  @media (min-width: 320px) and (max-width: 500px) {
    justify-content: center;
    width: 300px;
    align-items: center;
  }
`
 export const CardArea = styled.div`
  border: 3px solid #111;
  border-radius: 10px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  margin: 5px;
  
  img{
    width: 100%;
    height: 80%;
    margin-top: 10%;
  }
  form{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    input{
      min-width: 90%;
      margin-top: 40px;
      padding: 10px;
      font-size: 20px;
      border-radius: 10px;
      background-color: transparent;
    }
    button{
      margin-top: 70px;
      color: chartreuse;
    }
  }

  @media(max-width: 500px) {
     
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 5px;
    
    img{
    width: 100%;
    height: 80%;
    margin-top: 10%;
    }
    form{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    input{
      margin-top: 20px;
      padding: 10px;
      font-size: 20px;
    }
    button{
      margin-top: 50px;
    }
  }

`