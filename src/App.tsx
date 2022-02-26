import React from 'react'

export const App = () => {
  return (
    <div>
      {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      <br />
      {process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}
    </div>
  )
}
