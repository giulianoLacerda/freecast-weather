import { InputHTMLAttributes } from "react";

export interface iThemeProps {
    mode: "dark" | "light";
}

export interface iBodyProps extends iThemeProps {
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export interface iButtonProps {
    mode: "dark" | "light";
    size?: "sm" | "md" | "lg";
    selected?: string;
}

export interface iStyledHeaderProps extends iBodyProps {}

export interface iStyledWeatherIconProps {
    size?: "sm" | "md" | "lg";
    fill: "blue" | "yellow";
}

export interface CloudsCardProps extends React.PropsWithChildren {
    mode: "dark" | "light";
    tempHigh?: string;
    tempLow?: string;
    title: string;
    weather: string;
    children: React.ReactNode;
}

export interface IForecastCardProps extends iThemeProps{
    temp: string;
    feelsLike: string;
    humidity: string;
    sunrise: string;
    sunset: string;
    currentTime: string;
    children: React.ReactNode;
}

export interface DayInfo {
    title: string;
    tempHigh: string;
    tempLow: string;
    weatherMain: string;
    weatherDescription: string;
    unitTemp: string;
    icon: string;
}

export interface IForecastCardPropsDays extends iThemeProps{
    daysInfo: DayInfo[];
    cityName: string;
}

export interface ToggleProps extends iThemeProps {
    handleClick: (index: number) => void;
    activeButtons: string[];
    buttonsName: string[];
}

export interface IIconRendererProps extends iThemeProps {
    size: "sm" | "md" | "lg";
    weatherMain: string;
    weatherDescription: string;
    icon: string;
}

export interface iInputProps extends iThemeProps, InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
