export interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface ICurrentWeather {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  weather: IWeather[]
}

export interface IDailyWeather {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  feels_like: {
    day: number
    night: number
    eve: number
    morn: number
  }
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: IWeather[]
  clouds: number
  rain: number
  pop: number
  uvi: number
}

export interface IOneCallWeatherApiResponse {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: ICurrentWeather
  daily: IDailyWeather[]
}

export interface IOneCallWeatherApiParams {
  units: string
  exclude: string
  lon: number
  lat: number
}
