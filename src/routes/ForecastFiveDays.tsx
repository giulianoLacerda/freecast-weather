import React, { useEffect } from 'react'

import Body from '../components/Body'
import { DayInfo } from '../utils/Interfaces';
import ForecastCardDays from '../components/ForecastCardDays'
import Modal from '../components/Modal';
import { SettingsMap } from '../utils/utils';
import axios from "axios";
import { createEndpointUrlOneCall } from '../services/enpoints';
import moment from 'moment';
import { useAppStore } from '../store/AppStore';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const Forecast5Days = () => {
    const { settings, setUseNavBar } = useAppStore();
    const { latlon } = useParams();
    const [ lat, lon, cityName ] = latlon ? latlon.split(',') : [0, 0,""];
    const unitTemp = SettingsMap[settings.units].temp;
    const days5Date: DayInfo[] = [];

    useEffect(() => {
        setUseNavBar("yes");
    }, [setUseNavBar]);

    const fetchForecast = (lat: string, lon: string) => {
        return axios.get(createEndpointUrlOneCall(lat, lon, settings.units, "hourly"))
            .then((res) => {
                return res.data;
            }
        );
    }
    
    const { data, isFetched } = useQuery(
        ['forecast', lat, lon], () => fetchForecast(lat.toString(), lon.toString()), {
            retry: 1, retryDelay: 2000
    });

    if (isFetched && data) {
        for (let i = 0; i < 5; i++) {
            let day = {
                title: moment().add(i+1, 'days').format('ddd'),
                tempHigh: data.daily ? data.daily[i]?.temp?.max : "",
                tempLow: data.daily ? data.daily[i]?.temp?.min : "",
                weatherMain: data.daily ? data.daily[i]?.weather[0]?.main : "",
                weatherDescription: data.daily ? data.daily[i]?.weather[0]?.description : "",
                unitTemp: unitTemp,
                icon: data.daily ? data.daily[i]?.weather[0]?.icon : "Unknown",
            }
            days5Date.push(day);
        }
    }

    return (
        <Body mode={settings.themeMode}>
            <Modal />
            <ForecastCardDays
                cityName={cityName}
                mode={settings.themeMode}
                daysInfo={days5Date}
               />
        </Body>
    )
}

export default Forecast5Days;