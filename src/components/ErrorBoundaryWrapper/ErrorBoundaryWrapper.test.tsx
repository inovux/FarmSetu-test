import { render, screen } from '@testing-library/react'
import { ErrorBoundaryWrapper } from './index'

const ThrowError = () => {
  throw new Error('Something went wrong')
}

const DontThrowError = () => {
  return <div data-testid="noErrorBoundary">I am a div</div>
}

describe('ErrorBoundaryWrapper', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('should render the ErrorFallback component when an error is thrown by one of its children', () => {
    render(
      <ErrorBoundaryWrapper>
        <ThrowError />
        <DontThrowError />
      </ErrorBoundaryWrapper>,
    )

    expect(screen.getByTestId('errorBoundary')).toBeInTheDocument()
    expect(screen.queryByTestId('noErrorBoundary')).toBeNull()
  })

  it('should render children when there was no error', () => {
    render(
      <ErrorBoundaryWrapper>
        <DontThrowError />
      </ErrorBoundaryWrapper>,
    )

    expect(screen.getByTestId('noErrorBoundary')).toBeInTheDocument()
    expect(screen.queryByTestId('errorBoundary')).toBeNull()
  })
})
