import {
  locationErrorExample,
  locationExample,
  weatherDataExample,
} from '../testHelpers'
import { act, renderHook } from '@testing-library/react-hooks'
import { useReducer } from 'react'
import { appContextReducer } from './index'
import { IAppContext, initialAppContext } from '../contexts/AppContext'
import { IAppContextActions } from '../types/actions'

describe('App context reducers', () => {
  it('should return the correct state for setting weatherData', () => {
    const { result } = renderHook(() =>
      useReducer(appContextReducer, initialAppContext as IAppContext),
    )

    const [, dispatch] = result.current

    act(() => {
      dispatch({
        type: IAppContextActions.SET_WEATHER_DATA,
        payload: { weatherData: weatherDataExample },
      })
    })

    const [store] = result.current

    expect(store.weatherData).toStrictEqual(weatherDataExample)
  })

  it('should return the correct state for setting location', () => {
    const { result } = renderHook(() =>
      useReducer(appContextReducer, initialAppContext as IAppContext),
    )

    const [, dispatch] = result.current

    act(() => {
      dispatch({
        type: IAppContextActions.SET_LOCATION,
        payload: { location: locationExample },
      })
    })

    const [store] = result.current

    expect(store.location).toStrictEqual(locationExample)
  })

  it('should return the correct state for setting locationError', () => {
    const { result } = renderHook(() =>
      useReducer(appContextReducer, initialAppContext as IAppContext),
    )

    const [, dispatch] = result.current

    act(() => {
      dispatch({
        type: IAppContextActions.SET_LOCATION_ERROR,
        payload: { locationError: locationErrorExample },
      })
    })

    const [store] = result.current

    expect(store.locationError).toStrictEqual(locationErrorExample)
  })

  it('should return the correct state for setting isLoading', () => {
    const { result } = renderHook(() =>
      useReducer(appContextReducer, initialAppContext as IAppContext),
    )

    const [, dispatch] = result.current

    act(() => {
      dispatch({
        type: IAppContextActions.SET_IS_LOADING,
        payload: { isLoading: false },
      })
    })

    const [store] = result.current

    expect(store.isLoading).toStrictEqual(false)
  })
})
