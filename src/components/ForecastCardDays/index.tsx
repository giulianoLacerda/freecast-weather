import CloudsCard from "../CloudsCard";
import { IForecastCardPropsDays } from "../../utils/Interfaces";
import Icon from "../WeatherIcon";
import React from "react";
import { StyledForecastCardDays } from './styles';
import { StyledTitle } from "../../styles/typography";

const ForecastCardDays = ({ mode, cityName, daysInfo }: IForecastCardPropsDays) => {
  return (
    <StyledForecastCardDays>
      <div className="BlockTitle">
        <StyledTitle mode={mode} tag="h3" fontWeight={"700"} fontSize="md">{cityName}</StyledTitle>
      </div>
      <div className="AllDays">
        {daysInfo.map((day, index) => {
          return (
            <CloudsCard key={index} mode={mode} title={day.title} tempHigh={day.tempHigh} tempLow={day.tempLow} weather={day.weatherMain}>
              <Icon
                mode={mode}
                weatherMain={day.weatherMain}
                weatherDescription={day.weatherDescription}
                icon={day.icon}
                size="md"
              />
            </CloudsCard>
          )
        }
        )}
      </div>
    </StyledForecastCardDays>
  );
}

export default ForecastCardDays;
