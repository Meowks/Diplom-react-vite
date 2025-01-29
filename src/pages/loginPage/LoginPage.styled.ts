import styled from "styled-components"

export const SLoginPage = styled.div`

width:500px;
height:500px;
border: 1px solid ;
border-radius: 10px;
background-color: ${(props)=>props.theme.color.hoverText};

display:flex;
flex-direction:column;
align-items:center;
box-shadow: ${(props)=>props.theme.color.darkGray};


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
  color: #535bf2;
}

.submit_wrapper{
  display:flex;
  flex-direction:column;

  justify-content:center;
  width:300px;

  border-bottom: 1px solid ${(props)=>props.theme.color.darkGray};
}
.input_wrapper{
  margin:20px auto;

  width:100%;
  height:40px;
  padding: 15px;
  outline:none;

  border-radius: 8px;
  background-color:${(props)=>props.theme.color.lightGray};

  color:${(props)=>props.theme.color.textColor};
  
}


button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  margin:30px 0;
  

}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.reg_wrapper{
  margin: 30px;
  span{
    margin: 0 15px;
  }
}
`