import { render, screen, waitFor } from '@testing-library/react'
import { HomePage } from './index'
import { act, renderHook } from '@testing-library/react-hooks'
import { useReducer } from 'react'
import { appContextReducer } from '../../reducers'
import {
  AppContext,
  IAppContext,
  initialAppContext,
} from '../../contexts/AppContext'
import { IAppContextActions } from '../../types/actions'
import { weatherDataExample } from '../../testHelpers'
import { wait } from '@testing-library/user-event/dist/utils'
import { AppContextContainer } from '../../components/AppContextContainer'

describe('HomePage component', () => {
  it('should render the home page', () => {
    render(
      <AppContext.Provider value={{ weatherData: weatherDataExample } as any}>
        <HomePage />
      </AppContext.Provider>,
    )

    const homePageElement = screen.getByTestId('homePage')

    expect(homePageElement).toBeInTheDocument()
  })

  it('should use the default layout', () => {
    render(
      <AppContext.Provider value={{ weatherData: weatherDataExample } as any}>
        <HomePage />
      </AppContext.Provider>,
    )

    const defaultLayoutElement = screen.getByTestId('defaultLayout')

    expect(defaultLayoutElement).toBeInTheDocument()
  })

  it('should render the current weather widget', async () => {
    render(
      <AppContext.Provider value={{ weatherData: weatherDataExample } as any}>
        <HomePage />
      </AppContext.Provider>,
    )

    const currentWeatherWidgetElement = screen.getByTestId(
      'currentWeatherWidget',
    )

    expect(currentWeatherWidgetElement).toBeInTheDocument()
  })
})
