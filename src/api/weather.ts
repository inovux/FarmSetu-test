import axios from 'axios'
import {
  IOneCallWeatherApiParams,
  IOneCallWeatherApiResponse,
} from '../types/api/weather'

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
  },
})

export const getWeatherInformation = async (
  params: IOneCallWeatherApiParams,
) => {
  try {
    const data = await weatherApi.get<IOneCallWeatherApiResponse>('/onecall', {
      params,
    })

    return data.data
  } catch {
    throw new Error('Something went wrong please try again.')
  }
}
