import { BaseTitle } from "./components/typography";
import styled from "styled-components";

interface iStyledTitleProps {
    fontWeight?: "300" | "400" | "500" | "700";
    fontSize?: "lg" | "md" | "sm";
    mode: "dark" | "light";
}

export const StyledTitle = styled(BaseTitle)<iStyledTitleProps>`
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "300"};
    color: ${({theme, mode}) => theme[mode].title.color};
    font-size: ${({fontSize}) => {
        switch(fontSize) {
            case "lg":
                return "2.5rem"; // 40px
            case "md":
                return "1.5rem"; // 24px
            case "sm":
                return "1rem"; // 16px
            default:
                return "1.5rem"; // 24px
        }
    }};
`

interface iBaseParagraphProps {
    color?: string;
    fontSize?: "lg" | "md" | "sm";
}

export const StyledParagraph = styled.p<iBaseParagraphProps>`
    font-weight: 400;
    color: ${({theme}) => theme.colors.white ? theme.colors.white : "black"};
    strong, b {
        font-weight: 700;
    }

    ${({fontSize}) => {
        switch(fontSize) {
            case "lg":
                return "font-size: 1.5rem;"; // 24px
            case "md":
                return "font-size: 1rem;"; // 16px
            case "sm":
                return "font-size: 0.75rem;"; // 12px
            default:
                return "font-size: 1rem;"; // 16px
        }
    }
    }
`