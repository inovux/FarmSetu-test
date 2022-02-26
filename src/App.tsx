import React from 'react'
import { useLocation } from './hooks/useLocation'
import { ErrorBoundaryWrapper } from './components'
import { DefaultLayout } from './layouts'

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
      <DefaultLayout>
        <div>{process.env.REACT_APP_GOOGLE_MAPS_API_KEY}</div>
        <div>{process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}</div>
      </DefaultLayout>
    </ErrorBoundaryWrapper>
  )
}
