import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../pages/home/home"
import { Navigation } from "../navigation/navigation"
import styles from './layout.module.scss'
import { NotFound } from "../../pages/404/notFound";

export const Layout = () => {
  return (
    <main className={styles.container}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </main>
  )
}