import { Button } from "../Button/styles";
import { iThemeProps } from "../../utils/Interfaces";
import styled from "styled-components";

export const StyledFooter = styled.div<iThemeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 35vh;
    width: 100%;
    background: ${({theme, mode}) => mode === "dark" ? theme.colors.black : theme.colors.white};

    ${Button} {
        padding: 0;
        height: 20%;
        max-width: 15%;
        flex: 1 0 14%;
        margin: 0 .8rem;
    }

`