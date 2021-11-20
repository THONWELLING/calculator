import styled from 'styled-components'



export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 100vw;
height: auto;
background-color: #505050;
align-items: center;
padding: 0px 30px;
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 10px;
    margin-top: -20px;
  }
  button{
    background-color: #202020;
    border: 1px solid rgb(35, 70, 1);

    &:hover{
      cursor: pointer;
      transform: scale(1.1);
      transition: all ease 0.2s;
      background-color: #505050;
      border: 1px solid chartreuse;
    }

    a{
      text-decoration: none;
      font-size: 22px;
      font-style: italic;
      font-weight: 300;
      color: chartreuse;
    }
  }
`