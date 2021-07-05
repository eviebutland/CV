import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../pages/home/home"
import { Navigation } from "../navigation/navigation"
import styles from './layout.module.scss'
import { NotFound } from "../../pages/404/notFound";
import { OrangeDriverTraining } from "../../pages/projects/orangeDriverTraining/orangeDriverTraining";
import { HrMentorApp } from "../../pages/projects/hrMentorApp/hrMentorApp";

export const Layout = () => {
  return (
    <Router>
      <Navigation />
      <main className={styles.container}>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/orange-driver-training">
          <OrangeDriverTraining/>
        </Route>
        <Route exact path="/hr-mentor-app">
          <HrMentorApp/>
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
      </main>
    </Router>
  )
}