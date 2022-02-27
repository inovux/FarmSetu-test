import { FC } from 'react'
import styles from './Header.module.css'

export const Header: FC = () => {
  return <div data-testid="header" className={styles.container} />
}
