import { createContext } from 'react'
import { IOneCallWeatherApiResponse } from '../../types/api/weather'
import { ILocation } from '../../types/location'

const initialAppContext = {
  weather: undefined,
  isLoading: false,
  setIsLoading: (_isLoading: boolean) => {},
  location: undefined,
}

interface IAppContext {
  weather?: IOneCallWeatherApiResponse
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  location?: ILocation
}

export const AppContext = createContext<IAppContext>(initialAppContext)
