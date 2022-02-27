import { FC } from 'react'
import { IDailyWeather } from '../../types/api/weather'
import { DailyWeather } from '../DailyWeather'

import styles from './DailyWeatherWidget.module.css'

interface IDailyWeatherWidget {
  dailyWeather: IDailyWeather[]
}

export const DailyWeatherWidget: FC<IDailyWeatherWidget> = ({
  dailyWeather,
}) => {
  const weatherData = dailyWeather.slice(0, 7)

  return (
    <div data-testid="dailyWeatherWidget" className={styles.container}>
      <h2>Next 7 days...</h2>
      <div className={styles.listContainer}>
        {weatherData.map((weather) => {
          return (
            <DailyWeather
              date={weather.dt}
              temperature={weather.temp.day}
              iconName={weather.weather[0].icon}
            />
          )
        })}
      </div>
    </div>
  )
}
