import { iInputProps } from "../../utils/Interfaces";
import styled from "styled-components";

export const StyledInput = styled.div<iInputProps>`
    background: ${({ theme, mode }) => theme[mode].input.background};
    .input-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid ${({ theme, mode }) => theme[mode].input.border};
        padding: 2px;
        border-radius: 3px;
    }
    .input-box input {
        font-size: 1vw;
        width: 100%;
        height: 1.5vw;
        padding: .2rem;
        color: ${({ theme, mode }) => theme[mode].input.color};
        background: ${({ theme, mode }) => theme[mode].input.background};
        border: none;

        &:focus {
            opacity: 0.8;
            outline: none;
        }
    }
    .input-box ::placeholder {
        font-weight: 700;
        color: ${({ theme, mode }) => theme[mode].input.color};
        opacity: 0.8;
    }

    .input-box button {
        background: ${({ theme, mode }) => theme[mode].buttons.background};
        color: ${({ theme, mode }) => theme[mode].buttons.color};
        border: none;
        border-radius: 4px;
        padding: 2px;
        margin: 2px;
        cursor: pointer;
        &:hover {
            background: ${({ theme, mode }) => theme[mode].buttons.hoverColor};
        }
    }
    `