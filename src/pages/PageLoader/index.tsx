import { FC } from 'react'
import styles from './PageLoader.module.css'
import cloud from '../../assets/cloud.gif'

export const PageLoader: FC = () => {
  return (
    <div data-testid="pageLoader" className={styles.container}>
      <div className={styles.contentContainer}>
        <img
          src={cloud}
          alt="cloud loader icon"
          className={styles.loaderIcon}
          data-testid="weatherLoadingIcon"
        />
        <h2>Loading...</h2>
      </div>
    </div>
  )
}
