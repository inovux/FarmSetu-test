import { IAppContextActions } from '../types/actions'
import { ILocation } from '../types/location'
import { IOneCallWeatherApiResponse } from '../types/api/weather'

export const AppContextActionCreators = {
  setLocation: (location: ILocation) => {
    return {
      type: IAppContextActions.SET_LOCATION,
      payload: { location },
    }
  },
  setLocationError: (locationError: GeolocationPositionError) => {
    return {
      type: IAppContextActions.SET_LOCATION_ERROR,
      payload: { locationError },
    }
  },
  setWeatherData: (weatherData: IOneCallWeatherApiResponse) => {
    return {
      type: IAppContextActions.SET_WEATHER_DATA,
      payload: { weatherData },
    }
  },
  setIsLoading: (isLoading: boolean) => {
    return {
      type: IAppContextActions.SET_IS_LOADING,
      payload: { isLoading },
    }
  },
}
