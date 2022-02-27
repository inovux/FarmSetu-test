import { FC } from 'react'
import styles from './PageError.module.css'

interface IPageError {
  errorMessage: string
}

export const PageError: FC<IPageError> = ({ errorMessage }) => {
  return (
    <div data-testid="pageError" className={styles.container}>
      <h2>{errorMessage}</h2>
    </div>
  )
}
