import { render, screen } from '@testing-library/react'
import { PageError } from './index'

describe('PageError component', () => {
  it('should render the PageError component', () => {
    render(<PageError errorMessage="error message" />)

    const pageErrorElement = screen.getByTestId('pageError')

    expect(pageErrorElement).toBeInTheDocument()
  })

  it('should render the correct error message', () => {
    const errorMessage = 'I am an error message'

    render(<PageError errorMessage={errorMessage} />)

    const pageErrorElement = screen.getByTestId('pageError')

    expect(pageErrorElement).toHaveTextContent(errorMessage)
  })
})
