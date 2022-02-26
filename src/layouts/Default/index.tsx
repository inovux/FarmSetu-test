import { FC } from 'react'
import { Header } from '../../components'

import styles from './DefaultLayout.module.css'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <div data-testid="defaultLayout">
      <Header />
      <div className={styles.contentContainer}>{children}</div>
    </div>
  )
}
