import  { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../pages/home/home"
import { Navigation } from "../navigation/navigation"
import styles from './layout.module.scss'

const OrangeDriverTraining = lazy(() => import('../../pages/projects/orangeDriverTraining/orangeDriverTraining'));
const HrMentorApp = lazy(() => import('../../pages/projects/hrMentorApp/hrMentorApp'));
const PathToPurchase = lazy(() => import('../../pages/projects/pathToPurchase/pathToPurchase'));
const NotFound = lazy(() => import('../../pages/404/notFound'));

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