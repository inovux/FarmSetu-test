import { render, screen } from '@testing-library/react'
import { CurrentWeatherWidget } from './index'
import React from 'react'

describe('CurrentWeatherWidget component', () => {
  it('should render the CurrentWeatherWidget component', () => {
    render(
      <CurrentWeatherWidget
        iconName="04d"
        description="broken clouds"
        temperature={20.08}
        feels_like={20.18}
        timezone="Asia/Hong_Kong"
        date={1645932232}
      />,
    )

    const currentWeatherWidgetElement = screen.getByTestId(
      'currentWeatherWidget',
    )

    expect(currentWeatherWidgetElement).toBeInTheDocument()
  })

  it('should display the date of today', () => {
    render(
      <CurrentWeatherWidget
        iconName="04d"
        description="broken clouds"
        temperature={20.08}
        feels_like={20.18}
        timezone="Asia/Hong_Kong"
        date={1645932232}
      />,
    )

    const dateElement = screen.getByTestId('currentWeatherWidgetDate')

    expect(dateElement).toHaveTextContent(
      new Date(1645932232 * 1000).toLocaleDateString('en-us', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
    )
  })

  it('should show the correct timezone name', () => {
    const timezone = 'Asia/Hong_Kong'

    render(
      <CurrentWeatherWidget
        iconName="04d"
        description="broken clouds"
        temperature={20.08}
        feels_like={20.18}
        timezone={timezone}
        date={1645932232}
      />,
    )

    const timezoneElement = screen.getByTestId('currentWeatherWidgetTimezone')

    expect(timezoneElement).toHaveTextContent(timezone)
  })

  it('should show the correct weather icon', () => {
    const iconName = '04d'
    const iconUrl = `http://openweathermap.org/img/wn/${iconName}@4x.png`

    render(
      <CurrentWeatherWidget
        iconName={iconName}
        description="broken clouds"
        temperature={20.08}
        feels_like={20.18}
        timezone="Asia/Hong_Kong"
        date={1645932232}
      />,
    )

    const weatherIconElement = screen.getByTestId(
      'currentWeatherWidgetWeatherIcon',
    )

    expect(weatherIconElement).toHaveAttribute('src', iconUrl)
  })

  it('should show the correct temperature in celsius', () => {
    const temperature = 20.08
    const temperatureInCelsius = `${Math.round(temperature)}°C`

    render(
      <CurrentWeatherWidget
        iconName="04d"
        description="broken clouds"
        temperature={temperature}
        feels_like={20.18}
        timezone="Asia/Hong_Kong"
        date={1645932232}
      />,
    )

    const temperatureElement = screen.getByTestId(
      'currentWeatherWidgetTemperature',
    )

    expect(temperatureElement).toHaveTextContent(temperatureInCelsius)
  })

  it('should show the correct feels like temperature in celsius', () => {
    const feelsLikeTemperature = 20.08
    const feelsLikeTemperatureInCelsius = `${Math.round(
      feelsLikeTemperature,
    )}°C`

    render(
      <CurrentWeatherWidget
        iconName="04d"
        description="broken clouds"
        temperature={20.08}
        feels_like={feelsLikeTemperature}
        timezone="Asia/Hong_Kong"
        date={1645932232}
      />,
    )

    const feelsLikeTemperatureElement = screen.getByTestId(
      'currentWeatherWidgetFeelsLike',
    )

    expect(feelsLikeTemperatureElement).toHaveTextContent(
      feelsLikeTemperatureInCelsius,
    )
  })
})
