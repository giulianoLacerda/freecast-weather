import { iThemeProps } from "../../utils/Interfaces";
import styled from "styled-components";

export const StyledNavBar = styled.div<iThemeProps>`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    height: 15vh;
    padding: 1rem 0;
    gap: .4rem;
    background: ${({theme, mode}) => mode === "dark" ? theme.colors.black : theme.colors.white};

    .Title{
        font-size: 1.2vw;
        font-weight: 500;
        color: ${({theme, mode}) => theme[mode].title.color};
    }
`