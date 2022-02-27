import { render, screen } from '@testing-library/react'
import { PageLoader } from './index'

describe('PageLoader component', () => {
  it('should render the PageLoader', () => {
    render(<PageLoader />)

    const pageLoaderElement = screen.getByTestId('pageLoader')

    expect(pageLoaderElement).toBeInTheDocument()
  })

  it('should render the weather loading icon', () => {
    render(<PageLoader />)

    const pageLoaderElement = screen.getByTestId('weatherLoadingIcon')

    expect(pageLoaderElement).toBeInTheDocument()
  })

  it('should render the correct loading text', () => {
    const loaderTexts = [
      'Hmmm... Is it a T-shirt day or a hoodie day?',
      'Finding out whether you need an umbrella today...',
      'Downloading the °C and °F symbols...',
      'Designing your weather experience...',
      'Downloading the clouds...',
      'Just a moment...',
      'Do you need a jacket today or this week, let me figure that out...',
    ]

    render(<PageLoader />)

    const pageLoaderElement = screen.getByTestId('pageLoader')

    console.log(pageLoaderElement.textContent)

    expect(loaderTexts).toContain(pageLoaderElement.textContent)
  })
})
