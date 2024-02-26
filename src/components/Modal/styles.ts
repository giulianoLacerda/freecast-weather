import { BaseButton } from "../Button/styles";
import { HeaderButton } from "../Header/styles";
import { StyledTitle } from "../../styles/typography";
import { StyledToggle } from "../Toggle/styles";
import { iThemeProps } from "../../utils/Interfaces";
import styled from "styled-components";

export const StyledModal = styled.div<iThemeProps>`

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        backdrop-filter: blur(1px);
        background-color: rgba(0,0,0,0.5); 
    }

    .modal-content {
        display: flex;
        justify-content: start;
        flex-direction: column;
        padding: 20px;
        background: ${({theme, mode}) => theme[mode].modal.background};
        border: 1px solid ${({theme, mode}) => theme[mode].modal.border};
        border-radius: 10px;
        width: 40%;
        height: 40%;
        min-height: 300px;
        min-width: 300px;

        ${StyledTitle} {
            display: flex;
            justify-content: center;
        }

        .units-title {
            margin-top: 2%;
            margin-bottom: 2%;
        }
        
        .time-title {
            margin-top: 2%;
            margin-bottom: 2%;
        }

        ${HeaderButton} {
            justify-content: flex-end;
        }

        ${StyledToggle} {
            display: flex;
            ${BaseButton} {
                max-width: 20%;
                font-size: 1.1vw;
                &:active {
                    background: ${({theme, mode}) => theme[mode].buttons.activeBackground};
                    color: ${({theme, mode}) => theme[mode].buttons.activeColor};
                }
            }
        }

    }
`