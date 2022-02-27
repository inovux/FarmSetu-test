import { IOneCallWeatherApiResponse } from '../types/api/weather'
import { ILocation } from '../types/location'

export const weatherDataExample: IOneCallWeatherApiResponse = {
  lat: 22.3146,
  lon: 114.1909,
  timezone: 'Asia/Hong_Kong',
  timezone_offset: 28800,
  current: {
    dt: 1645932232,
    sunrise: 1645915597,
    sunset: 1645957549,
    temp: 20.08,
    feels_like: 20.18,
    pressure: 1020,
    humidity: 78,
    dew_point: 16.13,
    uvi: 7.84,
    clouds: 67,
    visibility: 10000,
    wind_speed: 2.68,
    wind_deg: 280,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
  },
  daily: [
    {
      dt: 1646539200,
      sunrise: 1646520043,
      sunset: 1646562528,
      moonrise: 1646528220,
      moonset: 1646574600,
      moon_phase: 0.12,
      temp: {
        day: 18.46,
        min: 18.18,
        max: 19.04,
        night: 18.34,
        eve: 18.18,
        morn: 18.78,
      },
      feels_like: {
        day: 18.45,
        night: 18.5,
        eve: 18.19,
        morn: 18.72,
      },
      pressure: 1018,
      humidity: 80,
      dew_point: 14.69,
      wind_speed: 9.32,
      wind_deg: 93,
      wind_gust: 11.88,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.2,
      rain: 0.15,
      uvi: 11,
    },
  ],
}

export const locationExample: ILocation = {
  lat: 22.3145741,
  lng: 114.1908535,
}

export const locationErrorExample: GeolocationPositionError = {
  code: 123,
  message: 'User denied Geolocation',
  PERMISSION_DENIED: 123,
  POSITION_UNAVAILABLE: 123,
  TIMEOUT: 123,
}
