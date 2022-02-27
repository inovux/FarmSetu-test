import { useEffect, useState } from 'react'
import { ILocation } from '../../types/location'

export const useLocation = () => {
  const [location, setLocation] = useState<
    ILocation | GeolocationPositionError
  >({} as ILocation)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (value) => {
        setLocation({
          lat: value.coords.latitude,
          lng: value.coords.longitude,
        })
        setIsLoading(false)
      },
      (error) => {
        setLocation(error)
        setIsLoading(false)
      },
    )
  }, [])

  return { location, isLoading }
}
