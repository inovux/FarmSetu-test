import { render, screen } from '@testing-library/react'
import { DailyWeather } from './index'

describe('DailyWeather component', () => {
  it('should render the daily weather component', () => {
    render(
      <DailyWeather date={1645932232} temperature={20.08} iconName="04d" />,
    )

    const dailyWeatherElement = screen.getByTestId('dailyWeather')

    expect(dailyWeatherElement).toBeInTheDocument()
  })

  it('should render the correct weekday', () => {
    const date = 1645932232
    const dateString = new Date(date * 1000).toLocaleDateString('en-us', {
      weekday: 'short',
    })

    render(<DailyWeather date={date} temperature={20.08} iconName="04d" />)

    const dailyWeatherDayElement = screen.getByTestId('dailyWeatherDay')

    expect(dailyWeatherDayElement).toHaveTextContent(dateString)
  })

  it('should render the correct icon', () => {
    const iconName = '04d'
    const iconUrl = `https://openweathermap.org/img/wn/${iconName}@2x.png`

    render(
      <DailyWeather
        date={1645932232}
        temperature={20.08}
        iconName={iconName}
      />,
    )

    const dailyWeatherIconElement = screen.getByTestId('dailyWeatherIcon')

    expect(dailyWeatherIconElement).toHaveAttribute('src', iconUrl)
  })

  it('should render the correct temperature', () => {
    const temperature = 20.08
    const temperatureInCelsius = `${Math.round(temperature)}°C`

    render(
      <DailyWeather
        date={1645932232}
        temperature={temperature}
        iconName="04d"
      />,
    )

    const dailyWeatherTemperatureElement = screen.getByTestId(
      'dailyWeatherTemperature',
    )

    expect(dailyWeatherTemperatureElement).toHaveTextContent(
      temperatureInCelsius,
    )
  })
})
