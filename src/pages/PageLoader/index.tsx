import { FC } from 'react'
import styles from './PageLoader.module.css'
import cloud from '../../assets/cloud.gif'

export const PageLoader: FC = () => {
  const loaderTexts = [
    'Hmmm... Is it a T-shirt day or a hoodie day?',
    'Finding out whether you need an umbrella today...',
    'Downloading the °C and °F symbols...',
    'Designing your weather experience...',
    'Just a moment...',
    'Do you need a Jacket today or this week, let me figure that out...',
  ]

  const loaderText = loaderTexts[Math.floor(Math.random() * loaderTexts.length)]

  return (
    <div data-testid="pageLoader" className={styles.container}>
      <div className={styles.contentContainer}>
        <img
          src={cloud}
          alt="cloud loader icon"
          className={styles.loaderIcon}
          data-testid="weatherLoadingIcon"
        />
        <h2>{loaderText}</h2>
      </div>
    </div>
  )
}
