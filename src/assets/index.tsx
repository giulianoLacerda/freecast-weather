import { ReactComponent as CloseCircle } from './icons/close-circle.svg';
import { ReactComponent as ThemeSwitch } from './icons/theme-switch.svg';
import { ReactComponent as ToggleChart } from './icons/toggle-chart.svg';
import { ReactComponent as Unknown } from './icons/unknown.svg';
import { ReactComponent as WeatherClear } from './icons/weather-clear.svg';
import { ReactComponent as WeatherCloudy } from './icons/weather-cloudy.svg';
import { ReactComponent as WeatherFoggy } from './icons/weather-fog.svg';
import { ReactComponent as WeatherHail } from './icons/weather-hail.svg';
import { ReactComponent as WeatherLightningRainy } from './icons/weather-lightning-rainy.svg';
import { ReactComponent as WeatherLightning } from './icons/weather-lightning.svg';
import { ReactComponent as WeatherNight } from './icons/weather-night.svg';
import { ReactComponent as WeatherPartlyCloudy } from './icons/weather-partly-cloudy.svg';
import { ReactComponent as WeatherPouring } from './icons/weather-pouring.svg';
import { ReactComponent as WeatherSnowy } from './icons/weather-snowy.svg';
import { ReactComponent as WeatherSnowyHeavy } from './icons/weather-snowy-heavy.svg';
import { ReactComponent as WeatherSnowyRainy } from './icons/weather-snowy-rainy.svg';
import { ReactComponent as WeatherSunny } from './icons/weather-sunny.svg';
import { ReactComponent as WeatherSunsetDown } from './icons/weather-sunset-down.svg';
import { ReactComponent as WeatherSunsetUp } from './icons/weather-sunset-up.svg';
import { ReactComponent as WeatherSunset } from './icons/weather-sunset.svg';
import { ReactComponent as WeatherWindyVariant } from './icons/weather-windy-variant.svg';
import { ReactComponent as WeatherWindy } from './icons/weather-windy.svg';

// import countries from './countries.json';
import countries from './countries/countries.json';

interface IIcons {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const icons: IIcons = {
    CloseCircle,
    ThemeSwitch,
    ToggleChart,
    Unknown,
    WeatherClear,
    WeatherCloudy,
    WeatherFoggy,
    WeatherHail,
    WeatherLightningRainy,
    WeatherLightning,
    WeatherNight,
    WeatherPartlyCloudy,
    WeatherPouring,
    WeatherSnowy,
    WeatherSnowyHeavy,
    WeatherSnowyRainy,
    WeatherSunny,
    WeatherSunsetDown,
    WeatherSunsetUp,
    WeatherSunset,
    WeatherWindyVariant,
    WeatherWindy,
};

interface IIconsMap {
    [key: string]: string[];
}

const iconsMap: IIconsMap = {
    "WeatherLightning": [
        "thunderstorm with light rain",
        "thunderstorm with rain", "thunderstorm with heavy rain",
        "light thunderstorm", "thunderstorm", "heavy thunderstorm",
        "ragged thunderstorm", "thunderstorm with light drizzle",
        "thunderstorm with drizzle", "thunderstorm with heavy drizzle"],

    "WeatherPouring": [
        "light intensity drizzle", "drizzle", "heavy intensity drizzle",
        "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain",
        "shower rain and drizzle", "heavy shower rain and drizzle", "shower drizzle",
        "light rain", "moderate rain", "heavy intensity rain", "very heavy rain",
        "extreme rain", "freezing rain", "light intensity shower rain", "shower rain",
        "heavy intensity shower rain", "ragged shower rain"],

    "WeatherLightningRainy": [
        "light intensity shower rain", "shower rain", "heavy intensity shower rain",
        "ragged shower rain", "light rain", "moderate rain", "heavy intensity rain",
        "very heavy rain", "extreme rain", "freezing rain"
    ],

    "WeatherHail": [
        "light shower sleet", "shower sleet", "light rain and snow",
        "rain and snow", "light shower snow", "shower snow", "heavy shower snow"
    ],

    "WeatherSnowy": [
        "light snow", "Snow", "Heavy snow"
    ],

    "WeatherSnowyRainy": [
        "Sleet", "Light shower sleet", "Shower sleet", "Light rain and snow",
        "Rain and snow", "Light shower snow", "Shower snow", "Heavy shower snow"
    ],

    "WeatherSnowyHeavy": [
        "Heavy snow",
    ],

    "WeatherFoggy": [
        "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall"
    ],

    "WeatherWindyVariant": [
        "Tornado"
    ],

    "WeatherPartlyCloudy": [
        "few clouds", "scattered clouds"
    ],

    "WeatherCloudy": [
        "broken clouds", "overcast clouds"
    ],

    "CloseCircle": [
        "close"
    ]
};

export { countries, icons, iconsMap };
