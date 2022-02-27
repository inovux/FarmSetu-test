import { IAppContext } from '../contexts/AppContext'
import { IAction, IAppContextActions } from '../types/actions'

export const appContextReducer = (state: IAppContext, action: IAction) => {
  switch (action.type) {
    case IAppContextActions.SET_LOCATION:
      return {
        ...state,
        location: action?.payload?.location,
      }
    case IAppContextActions.SET_LOCATION_ERROR:
      return {
        ...state,
        locationError: action?.payload?.locationError,
      }
    case IAppContextActions.SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action?.payload?.weatherData,
      }
    case IAppContextActions.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action?.payload?.isLoading,
      }
    default:
      return state
  }
}
