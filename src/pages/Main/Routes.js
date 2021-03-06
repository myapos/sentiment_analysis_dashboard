import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login";
import Dashboard from "../Dashboard";
import NoMatch from "../NoMatch";
import AuthRoute from "../../HOCS/AuthRoute";
import withParticles from "../../HOCS/withParticles";
function Routes(props) {
  const NoMatchWithBackground = withParticles(NoMatch);
  const DashboardWithBackground = withParticles(Dashboard);

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <AuthRoute exact path="/login" type="guest">
          <Login />
        </AuthRoute>

        <AuthRoute exact path="/dashboard" type="private">
          <DashboardWithBackground />
        </AuthRoute>
        <AuthRoute exact path="/" type="guest">
          <Login />
        </AuthRoute>
        <Route path="*" type="private">
          <NoMatchWithBackground />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
