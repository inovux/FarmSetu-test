import { render, screen } from '@testing-library/react'
import { DefaultLayout } from './index'

const ChildComponent = () => {
  return <div>I am a child component</div>
}

describe('DefaultLayout component', () => {
  it('should render the DefaultLayout component', () => {
    render(<DefaultLayout />)

    const defaultLayoutElement = screen.getByTestId('defaultLayout')

    expect(defaultLayoutElement).toBeInTheDocument()
  })

  it('should render the Header component as a child', () => {
    render(<DefaultLayout />)

    const headerElement = screen.getByTestId('header')

    expect(headerElement).toBeInTheDocument()
  })

  it('should render the given children', () => {
    render(
      <DefaultLayout>
        <ChildComponent />
      </DefaultLayout>,
    )

    const defaultLayoutElement = screen.getByTestId('defaultLayout')

    expect(defaultLayoutElement).toHaveTextContent('I am a child component')
  })
})
