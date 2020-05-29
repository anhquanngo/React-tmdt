import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { HomePage, NotFoundPage } from "../pages";

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/404" exact component={NotFoundPage} />
        <Route path="*" render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}

export default AppRouter;
