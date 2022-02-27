import React, { useContext } from 'react'
import { ErrorBoundaryWrapper } from './components'
import { HomePage, PageLoader } from './pages'
import { AppContext } from './contexts'

export const App = () => {
  const context = useContext(AppContext)

  if (context.isLoading) {
    return <PageLoader />
  }

  if (context.locationError) {
    return <div>Something went wrong please try again later</div>
  }

  return (
    <ErrorBoundaryWrapper>
      <HomePage />
    </ErrorBoundaryWrapper>
  )
}
