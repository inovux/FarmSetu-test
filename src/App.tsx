import React from 'react'
import { useLocation } from './hooks/useLocation'
import { ErrorBoundaryWrapper } from './components'
import { HomePage, PageLoader } from './pages'

export const App = () => {
  const { location, isLoading } = useLocation()

  if (isLoading) {
    return <PageLoader />
  }

  if ('message' in location) {
    console.log(location.message)
  } else {
    console.log(location)
  }

  return (
    <ErrorBoundaryWrapper>
      <HomePage />
    </ErrorBoundaryWrapper>
  )
}
