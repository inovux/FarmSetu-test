import { FC, useEffect, useReducer } from 'react'
import { AppContext } from '../../contexts'
import { useLocation } from '../../hooks'
import { getWeatherInformation } from '../../api/weather'
import { ILocation } from '../../types/location'
import { appContextReducer } from '../../reducers'
import { IAppContext, initialAppContext } from '../../contexts/AppContext'
import { AppContextActionCreators } from '../../actions'

export const AppContextContainer: FC = ({ children }) => {
  const { location, isLocationLoading } = useLocation()
  const [store, dispatch] = useReducer(
    appContextReducer,
    initialAppContext as IAppContext,
  )

  useEffect(() => {
    const fetchWeather = async (location: ILocation) => {
      const data = await getWeatherInformation({
        lat: location.lat,
        lon: location.lng,
        units: 'metrics',
        exclude: 'minutely,hourly,alerts',
      })

      dispatch(AppContextActionCreators.setWeatherData(data))
      dispatch(AppContextActionCreators.setIsLoading(false))
    }

    if (isLocationLoading) {
      return
    }

    if ('message' in location) {
      console.log(location)
      dispatch(AppContextActionCreators.setLocationError(location))
      dispatch(AppContextActionCreators.setIsLoading(false))
    } else {
      dispatch(AppContextActionCreators.setLocation(location))
      fetchWeather(location).catch((error) => {
        console.log(error)
        dispatch(AppContextActionCreators.setIsLoading(false))
      })
    }
  }, [isLocationLoading])

  return (
    <AppContext.Provider
      value={{
        isLoading: store.isLoading,
        weatherData: store.weatherData,
        location: store.location,
        locationError: store.locationError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
