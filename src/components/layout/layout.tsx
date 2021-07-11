import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../pages/home/home"
import { Navigation } from "../navigation/navigation"
import styles from './layout.module.scss'

import OrangeDriverTraining from '../../pages/projects/orangeDriverTraining/orangeDriverTraining';
import HrMentorApp from '../../pages/projects/hrMentorApp/hrMentorApp';
import PathToPurchase from '../../pages/projects/pathToPurchase/pathToPurchase';
import NotFound from '../../pages/404/notFound';

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
          <Route exact path="/path-to-purchase">
            <PathToPurchase/>
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
        </main>
    </Router>
  )
}