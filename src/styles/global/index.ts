import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }

    html,
    body {
        width: 100vw;
        overflow-x: hidden;
    }

    a, button{
        all: unset;
        cursor: pointer;
    }

    input {
        all: unset;
    }

    @media (max-width: 767px) {
        html {
            font-size: 12px;
        }
    }
`;

export default GlobalStyle;
