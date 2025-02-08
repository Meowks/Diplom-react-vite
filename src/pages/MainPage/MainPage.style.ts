import styled from "styled-components";


export const SMainPage = styled.main`
 
  margin: 30px auto;
  padding: 20px;

  background-color:${props=>props.theme.color.lightGray};
  border-radius: 10px;
  box-shadow: 6px 6px 6px gray;

  h1{
    text-align: center;
    color: #2c3e50;
  }
`