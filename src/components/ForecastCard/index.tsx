import { IForecastCardProps } from "../../utils/Interfaces";
import React from "react";
import { StyledForecastCard } from './styles';

const ForecastCard = ({children, temp, feelsLike, humidity, sunrise, sunset, mode, currentTime}: IForecastCardProps) => {
  return (
    <StyledForecastCard mode={mode}>
        <div className="ContentSvg">
            {children}
        </div>
        <div className="TextBlock">
            <p>Temp: {temp}</p>
            <p>Feels Like: {feelsLike}</p>
            <p>Humidity: {humidity}</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <p>Time: {currentTime}</p>
        </div>
    </StyledForecastCard>
  );
}

export default ForecastCard;
