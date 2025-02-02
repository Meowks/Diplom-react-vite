import styled from "styled-components";


export const SPopupMenu = styled.div`
display:flex;
background-color:${props=>props.theme.color.lightPrime};
border-radius:0 0 10px 10px;
margin:0 15px;
box-shadow: 7px 7px 7px gray;

.popup_list{
  list-style:none;
  display:flex;
  
  padding:10px 15px;
  
  
  .popup_item{
    background-color:${props=>props.theme.color.darkPrime};
    padding:15px;
    
    
    color:white;
    cursor:pointer;

    &:first-child{
    border-radius:10px 0 0 10px;
    }
    &:last-child{
      border-radius:0 10px 10px 0;
    }
    &:active{
      box-shadow: inset 2px 2px 2px black;
    }

    a{
      
      text-decoration:none;
      color:white;
      width:100%;
      height:100%;
    }
  }
}
`