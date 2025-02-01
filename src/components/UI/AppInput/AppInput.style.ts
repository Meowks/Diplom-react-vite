import styled from "styled-components";


export const SAppInput = styled.input`

  margin:20px auto;

  width:100%;
  height:40px;
  padding: 15px;
  outline:none;

  border-radius: 8px;
  background-color:${(props)=>props.theme.color.lightGray};

  color:${(props)=>props.theme.color.textColor};
  

`

export const SErrorText = styled.p`
  color:${(props) => props.theme.color.red};
  margin-bottom: 10px;
`