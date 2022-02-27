import { FC } from 'react'

import styles from './DailyWeather.module.css'

interface IDailyWeather {
  date: number
  temperature: number
  iconName: string
}

export const DailyWeather: FC<IDailyWeather> = ({
  date,
  temperature,
  iconName,
}) => {
  const dateString = new Date(date * 1000).toLocaleDateString('en-us', {
    weekday: 'short',
  })
  const iconUrl = `http://openweathermap.org/img/wn/${iconName}@2x.png`

  return (
    <div data-testid="dailyWeather" className={styles.container}>
      <div data-testid="dailyWeatherDay" className={styles.date}>
        {dateString}
      </div>
      <img
        src={iconUrl}
        data-testid="dailyWeatherIcon"
        alt="weather icon"
        className={styles.icon}
      />
      <div data-testid="dailyWeatherTemperature" className={styles.temperature}>
        {Math.round(temperature)}°C
      </div>
    </div>
  )
}
