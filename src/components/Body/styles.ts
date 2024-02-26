import styled, { css } from "styled-components";

import { iBodyProps } from "../../utils/Interfaces";

export const StyledBody = styled.div<iBodyProps>`
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;

    ${({ size }) => {
        switch (size) {
            case "md":
                return css`
                    height: 60vh;
                    align-items: center;
                `;
            default:
                return css`
                    height: 45vh;
                    align-items: end;
                `;
        }
    }}

    background: ${({ theme, mode }) => mode === "dark" ? theme.colors.black : theme.colors.white};
`