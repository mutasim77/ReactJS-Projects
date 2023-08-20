import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 body {
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.White};
  font-family: 'Rubik', sans-serif;
  font-size:18px;
  color: ${(props) => props.theme.Dark};
 }

h1, h2, h3{
  color: ${(props) => props.theme.Dark};
}
 p{
  color: ${(props) => props.theme.Grayish};
 }

 button, a{
  border-radius: 0.2rem; 
  cursor: pointer;
  transition: 1s;
  :hover {
    transition: 0.5s;
    background-color: transparent;}
 }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}
`;
