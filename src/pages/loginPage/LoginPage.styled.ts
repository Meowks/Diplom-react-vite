import styled from "styled-components"

export const SLoginPage = styled.div`

width:500px;

border: 1px solid ;
border-radius: 10px;
background-color: ${(props)=>props.theme.color.hoverText};

display:flex;
flex-direction:column;
align-items:center;
box-shadow: ${(props)=>props.theme.color.darkGray};

padding: 15px;
margin:200px auto ;
box-shadow: 10px 10px 10px ${(props)=>props.theme.color.gray};

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  margin: 30px auto;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  font-weight: 700;
  color: #535bf2;
}

.submit_wrapper{
  display:flex;
  flex-direction:column;

  justify-content:center;
  width:300px;

  border-bottom: 0.5px solid ${(props)=>props.theme.color.darkGray};
  padding-bottom: 30px;
  
  button{
    
    width: 100%;
    font-size: 18px;
  }
}

  

.reg_wrapper{
  margin: 30px;
  span{
    margin: 0 15px;
  }
}
`