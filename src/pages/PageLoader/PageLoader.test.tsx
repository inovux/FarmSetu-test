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

  it('should render the loading text', () => {
    render(<PageLoader />)

    const pageLoaderElement = screen.getByTestId('pageLoader')

    expect(pageLoaderElement).toHaveTextContent('Loading...')
  })
})
