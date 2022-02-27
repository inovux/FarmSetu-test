import React, { useContext } from 'react'
import { ErrorBoundaryWrapper } from './components'
import { HomePage, PageError, PageLoader } from './pages'
import { AppContext } from './contexts'

export const App = () => {
  const context = useContext(AppContext)

  if (context.isLoading) {
    return <PageLoader />
  }

  if (context.locationError) {
    return (
      <PageError errorMessage="Something went wrong. Please make sure the application has access to your location" />
    )
  }

  return (
    <ErrorBoundaryWrapper>
      <HomePage />
    </ErrorBoundaryWrapper>
  )
}
