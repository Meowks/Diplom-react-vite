import styled from "styled-components";


export const SAppButton = styled.button`

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
  


&:hover {
  /* border-color: #646cff; */
  border-color:rgb(100, 162, 255);
  background-color:rgb(15, 12, 43);
}
&:focus,
&:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`