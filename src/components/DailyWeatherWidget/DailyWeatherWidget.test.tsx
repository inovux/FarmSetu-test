import { render, screen } from '@testing-library/react'
import { DailyWeatherWidget } from './index'
import { dailyWeatherExample } from '../../testHelpers'

describe('DailyWeatherWidget component', () => {
  it('should render the daily weather widget component', () => {
    render(<DailyWeatherWidget dailyWeather={dailyWeatherExample} />)

    const dailyWeatherWidgetElement = screen.getByTestId('dailyWeatherWidget')

    expect(dailyWeatherWidgetElement).toBeInTheDocument()
  })

  it('should render the daily weather for the next 7 days', () => {
    render(<DailyWeatherWidget dailyWeather={dailyWeatherExample} />)

    const dailyWeatherItems = screen.getAllByTestId('dailyWeather')

    expect(dailyWeatherItems).toHaveLength(7)
  })

  it('should render a title', () => {
    render(<DailyWeatherWidget dailyWeather={dailyWeatherExample} />)

    const dailyWeatherWidgetElement = screen.getByTestId('dailyWeatherWidget')

    expect(dailyWeatherWidgetElement).toHaveTextContent('Next 7 days...')
  })
})
