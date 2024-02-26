import { CloudsCardProps } from "../../utils/Interfaces";
import React from "react";
import { StyledCloudsCard } from "./styles";

const CloudsCard = ({children, weather,  mode, title, tempHigh, tempLow}: CloudsCardProps) => {
    return (
        <StyledCloudsCard mode={mode}>
            <p className="title-box">{title}</p>
                {children ? children : null}
            <p className="weather-box">{weather}</p>
            { tempHigh && tempLow ? <p className="weather-box">H:{tempHigh}/L:{tempLow}</p> : null }
        </StyledCloudsCard>
    );
}

export default CloudsCard;