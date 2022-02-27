import React, { FC } from 'react'
import { DefaultLayout } from '../../layouts'

import styles from './HomePage.module.css'
import { CurrentWeatherWidget } from '../../components/CurrentWeatherWidget'

export const HomePage: FC = () => {
  return (
    <DefaultLayout>
      <div data-testid="homePage" className={styles.container}>
        <CurrentWeatherWidget
          iconName="04d"
          description="broken clouds"
          temperature={20.08}
          feels_like={20.18}
          timezone="Asia/Hong_Kong"
        />
        <div data-testid="weatherInformation">Weather information</div>
        <div data-testid="googleMaps">Google Maps</div>
        <div>{process.env.REACT_APP_GOOGLE_MAPS_API_KEY}</div>
        <div>{process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}</div>
      </div>
    </DefaultLayout>
  )
}
