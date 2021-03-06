import { FC } from 'react'

import styles from './CurrentWeatherWidget.module.css'

interface ICurrentWeatherWidget {
  iconName: string
  description: string
  temperature: number
  feels_like: number
  timezone: string
  date: number
}

export const CurrentWeatherWidget: FC<ICurrentWeatherWidget> = ({
  iconName,
  description,
  temperature,
  feels_like,
  timezone,
  date,
}) => {
  const dateString = new Date(date * 1000).toLocaleDateString('en-us', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  const iconUrl = `https://openweathermap.org/img/wn/${iconName}@4x.png`

  return (
    <div data-testid="currentWeatherWidget" className={styles.container}>
      <div className={styles.dateWrapper}>
        <div data-testid="currentWeatherWidgetDate" className={styles.date}>
          {dateString}
        </div>
        <div
          data-testid="currentWeatherWidgetTimezone"
          className={styles.timezone}
        >
          Timezone: {timezone}
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        <img
          data-testid="currentWeatherWidgetWeatherIcon"
          className={styles.weatherIcon}
          src={iconUrl}
          alt="weather icon"
        />
        <div
          data-testid="currentWeatherWidgetDescription"
          className={styles.description}
        >
          {description}
        </div>
      </div>
      <div className={styles.temperatureWrapper}>
        <div
          data-testid="currentWeatherWidgetTemperature"
          className={styles.temperature}
        >
          {Math.round(temperature)}°C
        </div>
        <div
          data-testid="currentWeatherWidgetFeelsLike"
          className={styles.feelsLike}
        >
          Feels like {Math.round(feels_like)}°C
        </div>
      </div>
    </div>
  )
}
