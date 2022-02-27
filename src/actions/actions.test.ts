import { AppContextActionCreators } from './index'
import { IAppContextActions } from '../types/actions'
import {
  locationErrorExample,
  locationExample,
  weatherDataExample,
} from '../testHelpers'

describe('App context action creators', () => {
  it('should return the correct type and payload for setting weatherData', () => {
    const result = AppContextActionCreators.setWeatherData(weatherDataExample)

    expect(result).toStrictEqual({
      type: IAppContextActions.SET_WEATHER_DATA,
      payload: { weatherData: weatherDataExample },
    })
  })

  it('should return the correct type and payload for setting location', () => {
    const result = AppContextActionCreators.setLocation(locationExample)

    expect(result).toStrictEqual({
      type: IAppContextActions.SET_LOCATION,
      payload: { location: locationExample },
    })
  })

  it('should return the correct type and payload for setting locationError', () => {
    const result =
      AppContextActionCreators.setLocationError(locationErrorExample)

    expect(result).toStrictEqual({
      type: IAppContextActions.SET_LOCATION_ERROR,
      payload: { locationError: locationErrorExample },
    })
  })

  it('should return the correct type and payload for setting isLoading', () => {
    const result = AppContextActionCreators.setIsLoading(false)

    expect(result).toStrictEqual({
      type: IAppContextActions.SET_IS_LOADING,
      payload: { isLoading: false },
    })
  })
})
