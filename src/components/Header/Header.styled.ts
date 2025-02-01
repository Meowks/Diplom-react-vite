import styled from "styled-components";

export const SHeader = styled.header`
background-color:${props=>props.theme.color.lightGray};
display:flex;
justify-content: space-between;
border-radius: 10px;
box-shadow: 10px 10px 10px gray;

.menuCont{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 20px;

  img{
    margin:0 10px ;
  }
}
.bollPng{
  width:100px;
}


.cearchCont{
  width:500px;
  display:flex;
  justify-content:space-between;
  margin-right:20px;
  align-items:center;

  input{
    width:300px;
    height:50px;
    border-radius:8px;
    border:none;
    outline: none;
    background-color: ${props=>props.theme.color.gray};
    box-shadow: 3px 3px 3px black;
    padding:10px;
    font-size:20px;
    
      &::placeholder{
        color:${props=>props.theme.color.lightGray};
      };
  
  
  }
  button{
    width:150px;
    height: 40px;
    border-radius:8px;
    outline:none;
    border:none;
    cursor:pointer;
    box-shadow: 3px 3px 3px black;
  }
}


h2{
  font-size:30px;
}
`