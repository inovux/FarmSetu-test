import { render, screen } from '@testing-library/react'
import { HomePage } from './index'

describe('HomePage component', () => {
  it('should render the home page', () => {
    render(<HomePage />)

    const homePageElement = screen.getByTestId('homePage')

    expect(homePageElement).toBeInTheDocument()
  })

  it('should use the default layout', () => {
    render(<HomePage />)

    const defaultLayoutElement = screen.getByTestId('defaultLayout')

    expect(defaultLayoutElement).toBeInTheDocument()
  })

  it('should render the weather information', () => {
    render(<HomePage />)

    const weatherInformationElement = screen.getByTestId('weatherInformation')

    expect(weatherInformationElement).toBeInTheDocument()
  })

  it('should render the google maps', () => {
    render(<HomePage />)

    const googleMapsElement = screen.getByTestId('googleMaps')

    expect(googleMapsElement).toBeInTheDocument()
  })
})
