export interface IAction {
  type: string
  payload?: Record<string, any>
}

export enum IAppContextActions {
  SET_WEATHER_DATA = 'SET_WEATHER_DATA',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_LOCATION = 'SET_LOCATION',
  SET_LOCATION_ERROR = 'SET_LOCATION_ERROR',
}
