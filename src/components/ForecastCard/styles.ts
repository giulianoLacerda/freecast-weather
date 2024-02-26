import { iThemeProps } from "../../utils/Interfaces";
import styled from "styled-components";

export const StyledForecastCard = styled.div<iThemeProps>` 
    display: flex;
    align-items: center;
    justify-content: right;
    width: 37%;
    min-width: 150px;
    background: transparent;

    .ContentSvg{
        display: flex;
        align-items: center;
        width: 40%;
    }

    .TextBlock{
        display: flex;
        flex-direction: column;
        gap: .2rem;
        width: 30%;

        p{
            font-size: 1.2vw;
            font-weight: 500;
            color: ${({theme, mode}) => theme[mode].title.color};
        }
    }
`