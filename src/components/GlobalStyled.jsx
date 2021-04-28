import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@900&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");


*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

body{
    background: #F5EFED;
}

button{
    font-weight: bold;
    font-size:1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 0 none currentcolor;
    background: #00c49a;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #8e8ea8;
        color: white;
    }
}

    h2{
        font-weight: 900;
        font-size:4rem;
        color: #8E8EA8;

    }

    h3{
        color: #8E8EA8;
    }

    p{
        padding: 3rem 0rem;
        color: #8E8EA8;
        font-size:1.4rem;
        line-height: 150%;
    }

    h4{
        font-weight:bold;
        color: #8E8EA8;
    }
    
    a{
        font-size: 1.1rem;
    }

    span{
        font-weight:bold;
        color: #00c49a;    
    }
`;

export default GlobalStyle;
