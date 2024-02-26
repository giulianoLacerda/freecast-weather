import { iButtonProps, iStyledHeaderProps } from "../../utils/Interfaces";

import { BaseButton } from "../Button/styles";
import { StyledTitle } from "../../styles/typography";
import styled from "styled-components";

export const HeaderButton = styled.button<iButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1vw;
    transition: .2s;
    color: ${({mode, theme}) => mode === "dark" ? theme.colors.white : theme.colors.black};
    background: transparent;

    &:hover{
        color: ${({mode, theme}) => theme.colors.blue};
    }

    .theme-switch{

        &:hover{
            background-image: ${({mode, theme}) => theme.colors.blue};
        }
    }

    .close-button {
        height: 0.8vw;
    }
`

export const StyledHeader = styled.header<iStyledHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    gap: 1rem;
    background: ${({theme, mode}) => mode === "dark" ? theme.colors.black : theme.colors.white};

    ${StyledTitle} {
        font-size: 1vw;
    }

    .FormHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        height: 5vh;
    }
`