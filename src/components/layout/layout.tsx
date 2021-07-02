import { Home } from "../../pages/home"
import { Navigation } from "../navigation/navigation"
import styles from './layout.module.scss'

export const Layout = () => {
  return (
    <main className={styles.container}>
      <Navigation />
      <Home/>
    </main>
  )
}