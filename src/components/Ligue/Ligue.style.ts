import styled from "styled-components";

export const SLigue = styled.div`

  padding: 10px;
  background-color:${props => props.theme.color.elemCont};
  border-radius: 8px;
  min-width: 200px;
  box-shadow: 5px 5px 5px gray;
  
  .emblemCont{
    display:flex;
    flex-direction:column;
  }

  .emblem{
    max-width:200px;
    width:calc(14.3vw + -5.7px);
    margin: 15px ;
  }
  .flag{
    max-width:200px;
    width:calc(14.3vw + -5.7px);
    margin: 15px ;
  }


`