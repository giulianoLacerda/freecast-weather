import styled, { css } from "styled-components";

import { iStyledWeatherIconProps } from "../../utils/Interfaces";

export const StyledWeatherIcon = styled.div<iStyledWeatherIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1vw;
    padding-bottom: 2vw;
    background: transparent;
    filter: drop-shadow(0px 0px 8px ${({ color, theme }) => color === "blue" ? theme.colors.blue : theme.colors.yellow});
    fill: ${({ color, theme }) => color === "blue" ? theme.colors.blue : theme.colors.yellow};

    ${({ size }) => {
        switch (size) {
            case "sm":
                return css`
                    width: 16%;
                    height: 16%;
                `;
            case "md":
                return css`
                    width: 80%;
                    height: 80%;
                `;
            case "lg":
                return css`
                    width: 100%;
                    height: 100%;
                `;
            default:
                return css`
                    width: 100%;
                    height: 100%;
                `;
        }
    }}
`