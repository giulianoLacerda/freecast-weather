const BASE_URL = 'http://api.openweathermap.org/';
const ONE_CALL_ENDPOINT = 'data/2.5/onecall';
const GEO_ENDPOINT = 'geo/1.0/direct';
const API_KEY = '3e7a3585c944f62d19be6fc4b56dd73a'

const createEndpointUrlGeo = (country: string): string => {
    return `${BASE_URL}${GEO_ENDPOINT}?q=${country}&appid=${API_KEY}&limit=5`;
}

const createEndpointUrlOneCall = (lat: string, lon: string, units: string, exclude: string): string => {
    return `${BASE_URL}${ONE_CALL_ENDPOINT}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}&exclude=${exclude}`;
}

export { createEndpointUrlGeo, createEndpointUrlOneCall };