import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    scroll-behavior: smooth;
    padding:0;
    overflow-x: hidden;
    background-color: black;
    font-family: 'Raleway', sans-serif;

   overflow:hidden;
}
*{
    box-sizing: border-box;
}


`;

export default GlobalStyle;