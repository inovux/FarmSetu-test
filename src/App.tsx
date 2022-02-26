import React from 'react'
import { useLocation } from './hooks/useLocation'
import { ErrorBoundaryWrapper } from './components'
import { HomePage } from './pages'

export const App = () => {
  const { location, isLoading } = useLocation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if ('message' in location) {
    console.log(location.message)
  } else {
    console.log(location.lng)
  }

  return (
    <ErrorBoundaryWrapper>
      <HomePage />
    </ErrorBoundaryWrapper>
  )
}
