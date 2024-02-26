import styled from "styled-components";

export const StyledForecastCardDays = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    min-width: 150px;
    background: transparent;

    p{
        font-weight: 700;
        color: ${({theme}) => theme.colors.white};
        font-size: 1.5vw;
    }

    .AllDays{
        margin-top: 2vw;
        display: flex;
        width: 100%;
        height: 100%;
    }

`