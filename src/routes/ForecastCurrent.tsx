import React, { useEffect } from 'react'
import { SettingsMap, convertUnixTimestampToTime } from '../utils/utils';

import Body from '../components/Body'
import CloudsCard from '../components/CloudsCard'
import ForecastCard from '../components/ForecastCard'
import Icon from "../components/WeatherIcon";
import Modal from '../components/Modal';
import { StyledTitle } from '../styles/typography'
import axios from "axios";
import { createEndpointUrlOneCall } from '../services/enpoints';
import { useAppStore } from '../store/AppStore'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const ForecastNow = () => {
    const { settings, selectedCity, setUseNavBar } = useAppStore();
    const { latlon } = useParams();
    const [ lat, lon, cityName ] = latlon ? latlon.split(',') : [0, 0, ""];
    const unitTime = SettingsMap[settings.time].time;
    const unitTemp = SettingsMap[settings.units].temp;
    
    useEffect(() => {
        setUseNavBar("yes");
    }, [setUseNavBar]);
    
    const fetchForecast = (lat: string, lon: string) => {
        return axios.get(createEndpointUrlOneCall(lat, lon, settings.units, "hourly,daily"))
            .then((res) => {
                return res.data;
            }
        );
    }

    const { data, isLoading, isError } = useQuery(['forecast', lat, lon], () => fetchForecast(lat.toString(), lon.toString()), {
        retry: 1,
        retryDelay: 2000,
    });

    const formatTime = (time: number, timeFormat: string, timeZone: string, timezoneOffset: number) => {
        return convertUnixTimestampToTime(time, timeFormat, timeZone, timezoneOffset);
    }

    if (isLoading) return (
        <Body mode={settings.themeMode}>
            <StyledTitle mode={settings.themeMode} tag="h3" fontWeight={"700"} fontSize="md">Loading...</StyledTitle>
        </Body>
    )

    if (isError) return (
        <Body mode={settings.themeMode}>
            <StyledTitle mode={settings.themeMode} tag="h3" fontWeight={"700"} fontSize="md">something's wrong </StyledTitle>
        </Body>
    )

    return (
        <Body mode={settings.themeMode}>
            <Modal />
            <ForecastCard mode={settings.themeMode}
                temp={`${data.current.temp} ${unitTemp}`}
                feelsLike={`${data.current.feels_like} ${unitTemp}`}
                humidity={`${data.current.humidity}%`}
                sunrise={formatTime(data.current.sunrise, unitTime, data.timezone, data.timezone_offset)}
                sunset={formatTime(data.current.sunset, unitTime, data.timezone, data.timezone_offset)}
                currentTime={formatTime(data.current.dt, unitTime, data.timezone, data.timezone_offset)}>
                <CloudsCard
                    mode={settings.themeMode}
                    title={selectedCity.name ? selectedCity.name : cityName}
                    weather={data.current.weather[0].main}>
                    <Icon
                        mode={settings.themeMode}
                        weatherMain={data.current.weather[0].main}
                        weatherDescription={data.current.weather[0].description} 
                        icon={data.current.weather[0].icon ? data.current.weather[0].icon : "Unknown"}
                        size="md"
                    />
                </CloudsCard>
            </ForecastCard>
        </Body>
    )
}

export default ForecastNow;