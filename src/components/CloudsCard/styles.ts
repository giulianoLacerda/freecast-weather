import { iThemeProps } from "../../utils/Interfaces";
import styled from "styled-components";

export const StyledCloudsCard = styled.div<iThemeProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: transparent;

    .WatherCloudy{
        width: 80%;
        height: 80%;
        padding-top: 1vw;
        padding-bottom: 2vw;
    }

    .title-box, .weather-box{
        text-align: center;
        font-size: 1.2vw;
        font-weight: 500;
        color: ${({theme, mode}) => theme[mode].title.color};
    }

`