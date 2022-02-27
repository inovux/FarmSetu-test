import { createContext } from 'react'
import { IOneCallWeatherApiResponse } from '../../types/api/weather'
import { ILocation } from '../../types/location'

export const initialAppContext = {
  isLoading: true,
}

export interface IAppContext {
  weatherData: IOneCallWeatherApiResponse
  isLoading: boolean
  location: ILocation
  locationError: GeolocationPositionError
}

export const AppContext = createContext<IAppContext>(
  initialAppContext as IAppContext,
)
