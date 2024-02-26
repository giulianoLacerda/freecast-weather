const moment = require('moment-timezone');

export const convertUnixTimestampToTime = (timestamp: number, format: string, timezone: string, timezoneOffset: number): string => {
    const adjustedTimestamp = timestamp + (timezoneOffset * 3600);
    const time = moment.unix(adjustedTimestamp).tz(timezone);
    return time.format(format);
}

export const SettingsMap = {
    "imperial": {
        "temp": "°F",
        "speed": "mph",
    },
    "metric": {
        "temp": "°C",
        "speed": "m/s",
    },
    "standard": {
        "temp": "K",
        "speed": "m/s",
    },
    "AM/PM": {
        "time": "hh:mm A"
    },
    "24H": {
        "time": "HH:mm"
    }
}
