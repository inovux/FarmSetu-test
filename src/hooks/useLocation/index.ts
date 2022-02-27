import { useEffect, useState } from 'react'
import { ILocation } from '../../types/location'

export const useLocation = () => {
  const [location, setLocation] = useState<
    ILocation | GeolocationPositionError
  >({} as ILocation)
  const [isLocationLoading, setIsLocationLoading] = useState<boolean>(true)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (value) => {
        setLocation({
          lat: value.coords.latitude,
          lng: value.coords.longitude,
        })
        setIsLocationLoading(false)
      },
      (error) => {
        setLocation(error)
        setIsLocationLoading(false)
      },
    )
  }, [])

  return { location, isLocationLoading }
}
