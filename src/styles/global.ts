import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, 'Helvetica Neue', Helvetica;
    }
    body{
        background: #fff;
    }
    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li {
        list-style: none;
    }
`

const Colors = {
    black: "#000",
    white: "#FFF",
    purple: "#BF5AF2",
    yellow: "#FFD60A",
    blue: "#0A84FF",
    cyan: "#64D2FF"
}

export const ColorsTheme = {
    colors: Colors,
    dark: {
        buttons: {
            background: Colors.black,
            activeBackground: Colors.white,
            color: Colors.white,
            activeColor: Colors.blue,
            border: Colors.blue,
            hoverColor: Colors.blue
        },
        title: {
            color: Colors.white
        },
        modal: {
            background: Colors.black,
            border: Colors.blue
        },
        input: {
            background: Colors.black,
            color: Colors.white,
            border: Colors.blue
        }
    },

    light: {
        buttons: {
            background: Colors.white,
            activeBackground: Colors.cyan,
            color: Colors.black,
            activeColor: Colors.blue,
            border: Colors.blue,
            hoverColor: Colors.blue
        },
        title: {
            color: Colors.black
        },
        modal: {
            background: Colors.white,
            border: Colors.blue
        },
        input: {
            background: Colors.white,
            color: Colors.black,
            border: Colors.blue
        }
    }
}
