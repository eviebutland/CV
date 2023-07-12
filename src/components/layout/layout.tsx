import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../pages/home/home";
import { Navigation } from "../navigation/navigation";

import OrangeDriverTraining from "../../pages/projects/orangeDriverTraining/orangeDriverTraining";
import HrMentorApp from "../../pages/projects/hrMentorApp/hrMentorApp";
import PathToPurchase from "../../pages/projects/pathToPurchase/pathToPurchase";
import NotFound from "../../pages/404/notFound";
import InventoryPlatform from "../../pages/projects/inventory/inventory";
import MovieLibrary from "../../pages/projects/movieLibrary/movieLibrary";
import FitnessApp from "../../pages/projects/fitnessApp/fitnessApp";

export const Layout = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/orange-driver-training">
            <OrangeDriverTraining />
          </Route>
          <Route exact path="/hr-mentor-app">
            <HrMentorApp />
          </Route>
          <Route exact path="/path-to-purchase">
            <PathToPurchase />
          </Route>
          <Route exact path="/inventory-platform">
            <InventoryPlatform />
          </Route>
          <Route exact path="/movie-library">
            <MovieLibrary />
          </Route>
          <Route exact path="/fitness-app">
            <FitnessApp />
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </main>
    </Router>
  );
};
