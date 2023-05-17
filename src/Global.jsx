import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background-image: url('/img/login1.png'), url('/img/login2.png');
    background-repeat: no-repeat, no-repeat;
    background-position: right bottom, left bottom;
    background-size: auto, auto;
    background-attachment: fixed;
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width: ${({ theme }) => theme.breakpoint}){
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/login1.png'), url('/img/login2.png');   
    }
}

a{
        text-decoration: none;
    }

    button{
        padding: 0.5rem 1rem;
        color: white;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .text-center{
        text-align: center;
    }


    .text-primary{
        color: ${({ theme }) => theme.palette.primary.main}
    }

    .text-secondary{
        color: ${({ theme }) => theme.palette.secondary.main}
    }

    input {
    height: 2.5rem;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size : 1rem; 
    }

`;

export default GlobalStyle;
