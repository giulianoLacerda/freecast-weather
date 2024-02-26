import { iButtonProps } from "../../utils/Interfaces";
import styled from "styled-components";

export const BaseButton = styled.button<iButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    font-weight: 500;
    border-radius: 6px;
    padding: 1rem;
    border: 1px solid ${({theme, mode}) => theme[mode].buttons.border};
    background: ${({theme, mode}) => theme[mode].buttons.background};
    color: ${({theme, mode}) => theme[mode].buttons.color};
    transition: .2s;

    &:hover {
        filter: brightness(0.9);
        color: ${({theme, mode}) => theme[mode].buttons.hoverColor};
    }

    ${({ selected, theme, mode }) =>
    selected === "yes" &&
    `
        background: ${theme[mode].buttons.activeBackground}; 
        color: ${theme[mode].buttons.activeColor};
        border: 1px solid ${theme[mode].buttons.activeBorder};
    `
    }

`

export const Button = styled(BaseButton)<iButtonProps>`
    padding: ${({size}) => size === "sm" ? ".5rem 2rem" : "0 2.5rem"};
    height: ${({size}) => size === "sm" ? "30px" : "36px"};
    width: ${({size}) => size === "sm" ? "150px" : null};

    min-height: ${({size}) => size === "sm" ? "32px" : "40px"};
    min-width: ${({size}) => size === "sm" ? "80px" : "100px"};

`
