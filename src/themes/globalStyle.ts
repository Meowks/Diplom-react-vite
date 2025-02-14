import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root{
  max-width:1440px;
  margin: auto;
}

body {
  margin: 0;
  
  
  min-width: 320px;
  min-height: 100vh;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: ${(props)=>props.theme.color.textColor};
  background-color: ${(props)=>props.theme.color.bgc};

  section{
    margin-top: 20px;
  }
}


`