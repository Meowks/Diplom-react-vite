import styled from "styled-components";

export const SHeader = styled.header`
background-color:${props => props.theme.color.lightGray};
display:flex;
justify-content: space-between;
border-radius: 10px;
box-shadow: 10px 10px 10px gray;


.menuCont{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 20px;

  button{
    width:150px;
    height:50px;
    border-radius:8px;
    font-size: 18px;
  }
  img{
    margin:0 10px ;
  }
}
.bollPng{
  width:100px;
}
.cearchCont{
  button{
    width:150px;
    height:50px;
    border-radius:0 8px 8px 0;
    font-size: 18px;
  }
}


.cearchCont{
  width:450px;
  display:flex;
  justify-content:space-between;
  margin-right:20px;
  align-items:center;

  

  input{
    width:300px;
    height:50px;
    border-radius:8px 0 0 8px ;
    border:none;
    outline: none;
    
    box-shadow: inset 3px 3px 3px black;
    padding:10px;
    font-size:20px;
    background-color:${props => props.theme.color.hoverText};
    
    margin: 0;
  }
  
}


h2{
  font-size:30px;
}
`