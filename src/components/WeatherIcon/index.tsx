import { IIconRendererProps } from '../../utils/Interfaces';
import React from 'react';
import { StyledWeatherIcon } from './styles';
import { icons } from '../../assets';
import { iconsMap } from '../../assets';

const Icon = ({ size, weatherMain, weatherDescription, icon, mode }: IIconRendererProps) => {

    let iconName: string = "Unknown";
    if (weatherMain === "Clear" && icon === "01d") {
        iconName = "WeatherClear";
    } else if (weatherMain === "Clear" && icon === "01n") {
        iconName = "WeatherNight";
    }

    for (const key in iconsMap) {
        if (iconsMap[key].includes(weatherDescription)) {
            iconName = key;
            break;
        }
    }

    const iconColor: ("blue" | "yellow") = icon.includes("n") ? "blue" : "yellow";
    const iconWeather = icons[iconName];

    return <StyledWeatherIcon size={size} color={iconColor} as={iconWeather} mode={mode}/>;
};

export default Icon;
