import { useEffect, useState } from 'react'

interface ILocation {
  lat: number
  lng: number
}

export const useLocation = () => {
  const [location, setLocation] = useState<
    ILocation | GeolocationPositionError
  >({} as ILocation)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (value) => {
        setLocation({
          lat: value.coords.latitude,
          lng: value.coords.longitude,
        })
      },
      (error) => {
        setLocation(error)
      },
    )
  }, [])

  return location
}
