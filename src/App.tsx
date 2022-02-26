import React from 'react'
import { useLocation } from './hooks/useLocation'
import { ErrorBoundaryWrapper } from './components/ErrorBoundaryWrapper'

export const App = () => {
  const location = useLocation()

  if ('message' in location) {
    console.log(location.message)
  } else {
    console.log(location.lng)
  }

  return (
    <ErrorBoundaryWrapper>
      {process.env.REACT_APPgs_GOOGLE_MAPS_API_KEY}
      {process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}
    </ErrorBoundaryWrapper>
  )
}
