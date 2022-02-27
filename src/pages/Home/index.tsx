import React, { FC, useContext } from 'react'
import { DefaultLayout } from '../../layouts'

import styles from './HomePage.module.css'
import { CurrentWeatherWidget } from '../../components/CurrentWeatherWidget'
import { AppContext } from '../../contexts'
import { DailyWeatherWidget } from '../../components/DailyWeatherWidget'

export const HomePage: FC = () => {
  const {
    weatherData,
    weatherData: {
      current,
      current: { weather },
      daily,
    },
  } = useContext(AppContext)

  return (
    <DefaultLayout>
      <div data-testid="homePage" className={styles.container}>
        <CurrentWeatherWidget
          iconName={weather[0].icon}
          description={weather[0].description}
          temperature={current.temp}
          feels_like={current.feels_like}
          timezone={weatherData.timezone}
          date={current.dt}
        />
        <DailyWeatherWidget dailyWeather={daily} />
      </div>
    </DefaultLayout>
  )
}
