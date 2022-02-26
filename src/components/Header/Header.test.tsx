import { render, screen } from '@testing-library/react'
import { Header } from './index'

describe('Header component', () => {
  it('should render the header text', () => {
    render(<Header />)

    const headerElement = screen.getByTestId('header')

    expect(headerElement).toHaveTextContent('Weather Forecast')
  })
})
