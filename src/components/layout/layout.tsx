import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../pages/home/home"
import { Navigation } from "../navigation/navigation"
import styles from './layout.module.scss'
import { NotFound } from "../../pages/404/notFound";
import { OrangeDriverTraining } from "../../pages/projects/orangeDriverTraining/orangeDriverTraining";
import { HrMentorApp } from "../../pages/projects/hrMentorApp/hrMentorApp";
import { PathToPurchase } from "../../pages/projects/pathToPurchase/pathToPurchase";
import { CurrentPageContext } from "../../context/currentPageContext";
import { useState } from "react";

export const Layout = () => {
  // const [currentPage, setCurrentPage] = useState(null)
  return (
    <Router>
      {/* <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}> */}
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
      {/* </CurrentPageContext.Provider> */}
    </Router>
  )
}