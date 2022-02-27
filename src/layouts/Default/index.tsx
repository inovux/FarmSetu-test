import { FC } from 'react'
import { Header } from '../../components'

import styles from './DefaultLayout.module.css'
import { Footer } from '../../components/Footer'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <div data-testid="defaultLayout">
      <Header />
      <div className={styles.contentContainer}>{children}</div>
      <Footer />
    </div>
  )
}
